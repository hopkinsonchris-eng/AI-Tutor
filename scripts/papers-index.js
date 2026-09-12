#!/usr/bin/env node
/* Past-paper index harvester.
 *
 *   node scripts/papers-index.js              build data/papers/AQA-8464.json and data/papers/OCR-H481.json
 *   node scripts/papers-index.js AQA-8464     build one course
 *   node scripts/papers-index.js check        HEAD every url in data/papers/*.json; exit 1 unless all are 200 application/pdf
 *
 * Node 22 built-ins only. Never writes PDF bytes to disk: every file url is HEAD-checked and
 * anything that is not 200 application/pdf on the board's own domain is dropped (and printed).
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'data', 'papers');
const UA = 'Mozilla/5.0 (compatible; study-platform papers-index; +https://github.com/hopkinson/AI-Tutor)';
const TODAY = new Date().toISOString().slice(0, 10);

const COURSES = {
  'AQA-8464': {
    spec: path.join(ROOT, 'src', 'specs', 'aqa-8464.js'),
    board: 'AQA',
    domain: 'aqa.org.uk',
    source: 'https://www.aqa.org.uk/subjects/science/gcse/science-8464/assessment-resources',
    boundaries: [
      'https://www.aqa.org.uk/exams-administration/results-days/grade-boundaries',
      'https://www.aqa.org.uk/exams-administration/results-days/grade-boundaries/archive',
    ],
    harvest: harvestAqa8464,
    // AQA puts a June series on the public site in the July of the following year (June 2026 -> 9 July 2027).
    releaseDate: (year) => `${year + 1}-07-09`,
  },
  'OCR-H481': {
    spec: path.join(ROOT, 'src', 'specs', 'ocr-h481.js'),
    board: 'OCR',
    domain: 'ocr.org.uk',
    source: 'https://www.ocr.org.uk/qualifications/as-and-a-level/geography-h081-h481-from-2016/assessment/',
    boundaries: [
      'https://www.ocr.org.uk/administration/grade-boundaries/index.aspx',
      'https://www.ocr.org.uk/administration/grade-boundaries/grade-boundaries-archive/grade-boundaries-archive.aspx',
    ],
    harvest: harvestOcrH481,
    // OCR publishes a June series in early August of the following year.
    releaseDate: (year) => `${year + 1}-08-01`,
  },
};

// ---------------------------------------------------------------- http helpers

async function fetchText(url) {
  const r = await fetch(url, { headers: { 'user-agent': UA, accept: 'text/html,*/*' }, redirect: 'follow' });
  if (r.status !== 200) throw new Error(`GET ${url} -> ${r.status}`);
  return r.text();
}

/** HEAD a url; ok only when the final response is 200 with a PDF content-type. */
async function headPdf(url, attempt = 1) {
  try {
    const r = await fetch(url, { method: 'HEAD', headers: { 'user-agent': UA }, redirect: 'follow' });
    const type = (r.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    if (r.status >= 500 && attempt < 3) return headPdf(url, attempt + 1);
    return { ok: r.status === 200 && type === 'application/pdf', status: r.status, type };
  } catch (e) {
    if (attempt < 3) return headPdf(url, attempt + 1);
    return { ok: false, status: 0, type: e.message };
  }
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k], k); }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}

function onDomain(url, domain) {
  try {
    const h = new URL(url).hostname.toLowerCase();
    return h === domain || h.endsWith('.' + domain);
  } catch { return false; }
}

function loadSpec(file) {
  const mod = require(file);
  return mod.default || mod[Object.keys(mod)[0]];
}

const MONTH = { JUN: 6, JUNE: 6, NOV: 11, NOVEMBER: 11 };
const seriesId = (year, month) => `${year}-${String(month).padStart(2, '0')}`;
const seriesName = (year, month) => `${month === 6 ? 'June' : 'November'} ${year}`;

/** Newest sat June series: this year's once July has begun, otherwise last year's. */
function newestSatJune() {
  const d = new Date();
  return d.getUTCMonth() + 1 >= 7 ? d.getUTCFullYear() : d.getUTCFullYear() - 1;
}

// ---------------------------------------------------------------- AQA 8464

/** Decode the Next.js flight payload (self.__next_f.push chunks) into one string of JSON-ish text. */
function decodeNextFlight(html) {
  let out = '';
  const re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
  let m;
  while ((m = re.exec(html))) {
    try { out += JSON.parse(m[1]); } catch { /* not a string chunk */ }
  }
  return out;
}

/** Every Sanity resource on the page that carries a file: { id, filename, sha1, title, publicationDate }. */
function aqaResources(decoded) {
  const rows = [];
  const re = /"_id":"([^"]+)","(?:author":null,")?description":(?:null|"(?:[^"\\]|\\.)*"),"file":\{(?:(?!"_id":"(?!file-)).)*?"originalFilename":"((?:[^"\\]|\\.)*)"(?:(?!"_id":"(?!file-)).)*?"sha1hash":"([0-9a-f]{40})"(?:(?!"_id":"(?!file-)).)*?"title":"((?:[^"\\]|\\.)*)"/gs;
  let m;
  while ((m = re.exec(decoded))) {
    rows.push({ id: m[1], filename: JSON.parse(`"${m[2]}"`), sha1: m[3], title: JSON.parse(`"${m[4]}"`) });
  }
  return rows;
}

const aqaFileUrl = (r) => `https://www.aqa.org.uk/files/${r.id}/${r.sha1}.pdf`;

const AQA_SCIENCE = { B: 'Biology', C: 'Chemistry', P: 'Physics' };
const AQA_KIND = { QP: 'qp', MS: 'ms', 'W-MS': 'ms', WRE: 'report', INS: 'insert' };
const AQA_TITLE_KIND = { 'question paper': 'qp', 'mark scheme': 'ms', 'examiner report': 'report', 'examiners report': 'report', insert: 'insert' };

/**
 * Classify one AQA resource. Returns null for anything that is not a real-series paper document
 * (modified papers, sample sets, guidance, the qualification-wide equations sheet with no series).
 * Result: { kind, year, month, paper: 'B1F' | null, scope: 'paper' | 'chemistry' | 'physics', url }
 */
function classifyAqa(r) {
  if (/MQP\d/i.test(r.filename) || /modified/i.test(r.title)) return null;
  // Canonical filename first: AQA-8464B1F-QP-JUN24.PDF
  let fm = /^AQA-8464([BCP])([12])([FH])-(QP|MS|W-MS|WRE|INS)-(JUN|NOV)(\d\d)\.PDF$/i.exec(r.filename.trim());
  const tm = /^(Question paper|Mark scheme|Examiners? report|Insert)\s*\(([^)]*)\)\s*:\s*(.*?)\s*-\s*(June|November)\s+(20\d\d)\s*$/i.exec(r.title.trim());
  if (fm) {
    const out = {
      kind: AQA_KIND[fm[4].toUpperCase()], year: 2000 + Number(fm[6]), month: MONTH[fm[5].toUpperCase()],
      paper: `${fm[1]}${fm[2]}${fm[3]}`.toUpperCase(), scope: 'paper',
    };
    // A periodic table or equations sheet filed under one paper's code (e.g. AQA-8464C1F-INS-JUN18) is shared by
    // every paper of that science, which the title makes clear.
    if (out.kind === 'insert' && tm && /periodic table/i.test(tm[3])) return { ...out, paper: null, scope: 'chemistry' };
    if (out.kind === 'insert' && tm && /equations? sheet/i.test(tm[3])) return { ...out, paper: null, scope: 'physics' };
    if (tm) {
      const tPaper = /Paper\s+([12])\s+(Biology|Chemistry|Physics)/i.exec(tm[3]);
      const tTier = /^(Foundation|Higher)$/i.exec(tm[2].trim());
      const fromTitle = tPaper && tTier ? `${tPaper[2][0]}${tPaper[1]}${tTier[1][0]}`.toUpperCase() : null;
      if (fromTitle && fromTitle !== out.paper) console.log(`  note: title says ${fromTitle}, filename says ${out.paper}; trusting filename (${r.filename})`);
    }
    return out;
  }
  if (!tm) return null;
  const kind = AQA_TITLE_KIND[tm[1].toLowerCase().replace(/\s+/g, ' ')];
  const year = Number(tm[5]);
  const month = MONTH[tm[4].toUpperCase()];
  const subject = tm[3].replace(/:$/, '').trim();
  const paperM = /^Paper\s+([12])\s+(Biology|Chemistry|Physics)$/i.exec(subject);
  if (paperM) {
    const tier = /^(Foundation|Higher)$/i.exec(tm[2].trim());
    if (!tier) return null;
    return { kind, year, month, paper: `${paperM[2][0]}${paperM[1]}${tier[1][0]}`.toUpperCase(), scope: 'paper' };
  }
  if (kind === 'insert' && /periodic table/i.test(subject)) return { kind, year, month, paper: null, scope: 'chemistry' };
  if (kind === 'insert' && /equations? sheet/i.test(subject)) return { kind, year, month, paper: null, scope: 'physics' };
  return null;
}

/** Grade-boundary PDFs for GCSE per series, from the AQA results pages. Returns Map<seriesId, url>. */
async function aqaBoundaries(urls) {
  const found = new Map();
  for (const page of urls) {
    let html;
    try { html = await fetchText(page); } catch (e) { console.log(`  boundaries: ${e.message}`); continue; }
    const decoded = decodeNextFlight(html);
    const candidates = [];
    // Sanity-hosted files (current series) -> https://www.aqa.org.uk/files/<id>/<sha1>.pdf
    for (const r of aqaResources(decoded)) candidates.push({ name: r.filename, url: aqaFileUrl(r) });
    // Filestore links (archive)
    for (const m of decoded.matchAll(/"href":"(https:\/\/filestore\.aqa\.org\.uk\/[^"]+\.pdf)"/gi)) {
      candidates.push({ name: decodeURIComponent(m[1].split('/').pop()), url: m[1] });
    }
    for (const c of candidates) {
      if (!/\.pdf$/i.test(c.name)) continue;
      const m = /(?:^|[-_ ])GCSE(?:[-_ ]GDE[-_ ]BDY)?[-_ ]+(JUN|JUNE|NOV|NOVEMBER)[-_ ]+(20\d\d)/i.exec(c.name) ||
        /Grade Boundaries GCSE\s*-\s*(Jun|June|Nov|November)\s+(20\d\d)/i.exec(c.name);
      if (!m) continue;
      const id = seriesId(Number(m[2]), MONTH[m[1].toUpperCase()]);
      if (!found.has(id)) found.set(id, c.url);
    }
  }
  return found;
}

async function harvestAqa8464(course, spec) {
  const html = await fetchText(course.source);
  const decoded = decodeNextFlight(html);
  const resources = aqaResources(decoded);
  console.log(`  ${resources.length} file resources on the listing page`);

  // series -> { papers: Map<paperId, {qp,ms,insert,report}>, chemistryInsert, physicsInsert }
  const series = new Map();
  const seen = new Set();
  for (const r of resources) {
    const c = classifyAqa(r);
    if (!c) continue;
    const url = aqaFileUrl(r);
    if (!onDomain(url, course.domain)) { console.log(`  dropped (off-domain): ${url}`); continue; }
    const sid = seriesId(c.year, c.month);
    if (!series.has(sid)) series.set(sid, { year: c.year, month: c.month, papers: new Map(), chemistry: null, physics: null });
    const s = series.get(sid);
    if (c.scope === 'paper') {
      if (!s.papers.has(c.paper)) s.papers.set(c.paper, { qp: null, ms: null, insert: null, report: null });
      const slot = s.papers.get(c.paper);
      const key = `${sid}/${c.paper}/${c.kind}`;
      if (slot[c.kind]) { if (!seen.has(key)) console.log(`  duplicate ${key}: keeping ${slot[c.kind]}, ignoring ${r.filename}`); seen.add(key); continue; }
      slot[c.kind] = url;
    } else if (!s[c.scope]) {
      s[c.scope] = url;
    }
  }

  const boundaries = await aqaBoundaries(course.boundaries);
  console.log(`  grade boundaries found for: ${[...boundaries.keys()].sort().join(', ') || 'none'}`);

  const tiers = [['F', 'Foundation'], ['H', 'Higher']];
  const buildPapers = (s) => {
    const papers = [];
    for (const comp of spec.components) {
      for (const [t, tierName] of tiers) {
        const id = `${comp.id}${t}`;
        const got = (s && s.papers.get(id)) || {};
        const sciKey = comp.id[0] === 'C' ? 'chemistry' : comp.id[0] === 'P' ? 'physics' : null;
        papers.push({
          id, name: `${comp.name} · ${tierName}`, component: comp.id, tier: tierName,
          marks: comp.marks, minutes: comp.minutes, date: null,
          qp: got.qp || null, ms: got.ms || null,
          insert: got.insert || (s && sciKey ? s[sciKey] : null) || null,
          report: got.report || null,
        });
      }
    }
    return papers;
  };

  const out = [];
  for (const [sid, s] of series) {
    const papers = buildPapers(s);
    const isPublic = papers.some((p) => p.qp && p.ms);
    out.push({
      id: sid, name: seriesName(s.year, s.month), public: isPublic,
      releaseDate: isPublic ? null : course.releaseDate(s.year, s.month),
      boundaries: null, boundariesUrl: boundaries.get(sid) || null, papers,
    });
  }
  const latest = newestSatJune();
  const latestId = seriesId(latest, 6);
  if (!series.has(latestId)) {
    out.push({
      id: latestId, name: seriesName(latest, 6), public: false, releaseDate: course.releaseDate(latest, 6),
      boundaries: null, boundariesUrl: boundaries.get(latestId) || null, papers: buildPapers(null),
    });
  }
  return out;
}

// ---------------------------------------------------------------- OCR H481

const OCR_UNITS = {
  '01': { component: 'C1', name: 'Physical systems' },
  '02': { component: 'C2', name: 'Human interactions' },
  '03': { component: 'C3', name: 'Geographical debates' },
  '04': { component: 'C4', name: 'Investigative geography' },
};

function decodeEntities(s) {
  return s.replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/<[^>]+>/g, '').trim();
}

async function ocrBoundaries(urls) {
  const found = new Map();
  for (const page of urls) {
    let html;
    try { html = await fetchText(page); } catch (e) { console.log(`  boundaries: ${e.message}`); continue; }
    for (const m of html.matchAll(/href="([^"]*\/Images\/\d+-([^"]*)\.pdf)"/gi)) {
      const slug = m[2].toLowerCase();
      if (!/a-level/.test(slug) || /legacy/.test(slug) || !/grade-boundaries/.test(slug)) continue;
      const sm = /(june|november)-(20\d\d)/.exec(slug);
      if (!sm) continue;
      const id = seriesId(Number(sm[2]), MONTH[sm[1].toUpperCase()]);
      const url = new URL(m[1], 'https://www.ocr.org.uk/').href;
      if (!found.has(id)) found.set(id, url);
    }
  }
  return found;
}

async function harvestOcrH481(course, spec) {
  const html = await fetchText(course.source);
  // A level tab only (the AS tab lists H081).
  const aStart = html.indexOf('id="specification-tab-1"');
  const aEnd = html.indexOf('id="specification-tab-2"', aStart + 1);
  if (aStart < 0) throw new Error('A level tab not found on the OCR page');
  const aLevel = html.slice(aStart, aEnd > 0 ? aEnd : undefined);
  // "Question papers, mark schemes and reports" section, up to the next level-1 heading.
  const secRe = /<h3[^>]*class="level-1 heading[^"]*"[^>]*>\s*<span>([^<]*)<\/span>\s*<\/h3>/g;
  const sections = [];
  let m;
  while ((m = secRe.exec(aLevel))) sections.push({ title: m[1], start: m.index + m[0].length });
  const qpSec = sections.find((s) => /question papers/i.test(s.title));
  if (!qpSec) throw new Error('"Question papers, mark schemes and reports" section not found');
  const next = sections[sections.indexOf(qpSec) + 1];
  const body = aLevel.slice(qpSec.start, next ? next.start : undefined);

  const series = new Map();
  const blocks = body.split(/<h4[^>]*class="level-2 heading[^"]*"[^>]*>/).slice(1);
  for (const block of blocks) {
    const hm = /^\s*<span>\s*(20\d\d)\s*-\s*(June|November)\s+series\s*<\/span>/i.exec(block);
    if (!hm) { console.log(`  skipped block: ${decodeEntities(block.slice(0, 60))}`); continue; }
    const year = Number(hm[1]);
    const month = MONTH[hm[2].toUpperCase()];
    const sid = seriesId(year, month);
    if (!series.has(sid)) series.set(sid, { year, month, papers: new Map() });
    const s = series.get(sid);
    const liRe = /<a href="([^"]+)"[^>]*>([^<]*)<\/a>\s*<span class="unit-code">([^<]*)<\/span>/g;
    let lm;
    while ((lm = liRe.exec(block))) {
      const url = new URL(lm[1], 'https://www.ocr.org.uk/').href;
      const text = decodeEntities(lm[2]);
      const unit = decodeEntities(lm[3]);
      if (!/\.pdf$/i.test(url)) continue;
      if (!onDomain(url, course.domain)) { console.log(`  dropped (off-domain): ${url}`); continue; }
      const um = /^H481\/(\d\d)/.exec(unit);
      if (!um) { if (!/^H081/.test(unit)) console.log(`  skipped ${unit}: ${text}`); continue; }
      const paperId = um[1];
      if (!OCR_UNITS[paperId]) { console.log(`  skipped unknown unit ${unit}: ${text}`); continue; }
      let kind = null; let priority = 0;
      if (/^question paper/i.test(text)) {
        if (/resource booklet/i.test(text)) { kind = 'insert'; priority = 2; }
        else if (/\bmap\b/i.test(text)) { kind = 'insert'; priority = 1; }
        else { kind = 'qp'; }
      } else if (/^mark scheme/i.test(text)) kind = 'ms';
      else if (/^(examiners|moderators)/i.test(text)) kind = 'report';
      if (!kind) { console.log(`  skipped ${unit}: ${text}`); continue; }
      if (!s.papers.has(paperId)) s.papers.set(paperId, { qp: null, ms: null, insert: null, report: null, insertPriority: 0 });
      const slot = s.papers.get(paperId);
      if (kind === 'insert') {
        if (priority > slot.insertPriority) { if (slot.insert) console.log(`  ${sid} H481/${paperId}: replacing insert with resource booklet, dropping ${slot.insert}`); slot.insert = url; slot.insertPriority = priority; }
        else console.log(`  ${sid} H481/${paperId}: only one insert slot; not listing ${url} (${text})`);
        continue;
      }
      if (slot[kind]) { console.log(`  duplicate ${sid}/${paperId}/${kind}: keeping ${slot[kind]}, ignoring ${url}`); continue; }
      slot[kind] = url;
    }
  }

  const boundaries = await ocrBoundaries(course.boundaries);
  console.log(`  grade boundaries found for: ${[...boundaries.keys()].sort().join(', ') || 'none'}`);

  const buildPapers = (s) => Object.entries(OCR_UNITS).map(([id, u]) => {
    const comp = spec.components.find((c) => c.id === u.component) || {};
    const got = (s && s.papers.get(id)) || {};
    return {
      id, name: `${comp.name || u.name} · H481/${id}`, component: comp.id || null, tier: null,
      marks: comp.marks ?? null, minutes: comp.minutes ?? null, date: null,
      qp: got.qp || null, ms: got.ms || null, insert: got.insert || null, report: got.report || null,
    };
  });

  const out = [];
  for (const [sid, s] of series) {
    const papers = buildPapers(s);
    const isPublic = papers.some((p) => p.qp && p.ms);
    out.push({
      id: sid, name: seriesName(s.year, s.month), public: isPublic,
      releaseDate: isPublic ? null : course.releaseDate(s.year, s.month),
      boundaries: null, boundariesUrl: boundaries.get(sid) || null, papers,
    });
  }
  const latest = newestSatJune();
  const latestId = seriesId(latest, 6);
  if (!series.has(latestId)) {
    out.push({
      id: latestId, name: seriesName(latest, 6), public: false, releaseDate: course.releaseDate(latest, 6),
      boundaries: null, boundariesUrl: boundaries.get(latestId) || null, papers: buildPapers(null),
    });
  }
  return out;
}

// ---------------------------------------------------------------- shared: verify + write

const URL_KEYS = ['qp', 'ms', 'insert', 'report'];

/** HEAD every url in the series list; null out and report any that is not 200 application/pdf. */
async function verifySeries(seriesList, domain) {
  const slots = [];
  for (const s of seriesList) {
    if (s.boundariesUrl) slots.push({ obj: s, key: 'boundariesUrl', label: `${s.id} boundaries` });
    for (const p of s.papers) for (const k of URL_KEYS) if (p[k]) slots.push({ obj: p, key: k, label: `${s.id} ${p.id} ${k}` });
  }
  let dropped = 0;
  await mapLimit(slots, 8, async (slot) => {
    const url = slot.obj[slot.key];
    const res = onDomain(url, domain) ? await headPdf(url) : { ok: false, status: 0, type: 'off-domain' };
    if (!res.ok) {
      dropped++;
      console.log(`  dropped ${slot.label}: ${url} (${res.status} ${res.type})`);
      slot.obj[slot.key] = null;
    }
  });
  // A paper that lost its qp or ms may flip a series to locked.
  for (const s of seriesList) {
    const isPublic = s.papers.some((p) => p.qp && p.ms);
    if (s.public && !isPublic) { s.public = false; console.log(`  series ${s.id} is no longer public after checks`); }
  }
  return { checked: slots.length, dropped };
}

function sortSeries(list) {
  return list.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
}

async function build(courseId) {
  const course = COURSES[courseId];
  if (!course) throw new Error(`unknown course ${courseId}; known: ${Object.keys(COURSES).join(', ')}`);
  const spec = loadSpec(course.spec);
  console.log(`${courseId}: harvesting ${course.source}`);
  const seriesList = sortSeries(await course.harvest(course, spec));
  const { checked, dropped } = await verifySeries(seriesList, course.domain);
  const doc = {
    spec: spec.id, board: spec.board, code: spec.code, checked: TODAY, source: course.source,
    series: seriesList,
  };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const file = path.join(OUT_DIR, `${courseId}.json`);
  fs.writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
  const nPapers = seriesList.reduce((n, s) => n + s.papers.filter((p) => p.qp || p.ms || p.insert || p.report).length, 0);
  const nUrls = seriesList.reduce((n, s) => n + (s.boundariesUrl ? 1 : 0) + s.papers.reduce((m, p) => m + URL_KEYS.filter((k) => p[k]).length, 0), 0);
  console.log(`  wrote ${path.relative(ROOT, file)}: ${seriesList.length} series (${seriesList.filter((s) => s.public).length} public), ${nPapers} papers with documents, ${nUrls} urls kept, ${dropped}/${checked} dropped`);
}

async function check() {
  const files = fs.existsSync(OUT_DIR) ? fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.json')) : [];
  if (!files.length) { console.error(`no json files in ${OUT_DIR}`); process.exit(1); }
  const items = [];
  for (const f of files) {
    const doc = JSON.parse(fs.readFileSync(path.join(OUT_DIR, f), 'utf8'));
    const domain = (COURSES[doc.spec] || {}).domain || null;
    for (const s of doc.series || []) {
      if (s.boundariesUrl) items.push({ file: f, label: `${s.id} boundariesUrl`, url: s.boundariesUrl, domain });
      for (const p of s.papers || []) for (const k of URL_KEYS) if (p[k]) items.push({ file: f, label: `${s.id} ${p.id} ${k}`, url: p[k], domain });
    }
  }
  console.log(`checking ${items.length} urls in ${files.join(', ')}`);
  const failures = [];
  await mapLimit(items, 8, async (it) => {
    const res = it.domain && !onDomain(it.url, it.domain) ? { ok: false, status: 0, type: 'off-domain' } : await headPdf(it.url);
    if (!res.ok) { failures.push(it); console.log(`  FAIL ${it.file} ${it.label}: ${it.url} (${res.status} ${res.type})`); }
  });
  console.log(failures.length ? `${failures.length} of ${items.length} urls failed` : `all ${items.length} urls are 200 application/pdf`);
  process.exit(failures.length ? 1 : 0);
}

async function main() {
  const args = process.argv.slice(2);
  if (args[0] === 'check') return check();
  const ids = args.length ? args : Object.keys(COURSES);
  for (const id of ids) await build(id);
}

main().catch((e) => { console.error(e.stack || String(e)); process.exit(1); });
