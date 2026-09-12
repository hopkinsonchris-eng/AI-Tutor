#!/usr/bin/env node
'use strict';
/*
 * papers-pearson.js — past-paper index for the seven Pearson Edexcel courses.
 *
 * Pearson's past-paper finder has no listing we can scrape, but its file names are
 * deterministic, so this script *probes* the DAM with HEAD requests:
 *
 *   https://qualifications.pearson.com/content/dam/pdf/<Family>/<Subject>/<specYear>/Exam-materials/
 *       <spec>-<paper>-<que|rms|msc|pef>-<yyyymmdd>.pdf            (current, lower-case, hyphens)
 *       <SPEC>_<PAPER>_<kind>_<yyyymmdd>.pdf                        (2019–2021, upper-case, underscores)
 *   https://qualifications.pearson.com/content/dam/pdf/<Family%20spaced>/<Subject%20spaced>[/<specYear>]/Exam-materials/
 *       <SPEC>_<PAPER>_<kind>_<yyyymmdd>.pdf                        (older, spaced folders)
 *
 * The que (question paper) is dated the exam day; rms/msc (mark scheme) and pef (examiner
 * report) are dated the results-release day. Missing files answer 302 -> HTML 404, so only
 * 200 + application/pdf counts as a hit. Nothing is ever downloaded; HEAD only.
 *
 * Output: data/papers/<SPEC-ID>.json (one per course, series newest first).
 * Cache:  data/papers/.pearson-cache/<SPEC-ID>.json (found urls and dated misses) so re-runs
 *         only re-probe what is still unknown.
 *
 * Usage:
 *   node scripts/papers-pearson.js                 # all seven courses
 *   node scripts/papers-pearson.js EDX-4MA1 EDX-9MA0
 *   node scripts/papers-pearson.js --force         # ignore cached misses
 *   node scripts/papers-pearson.js --recheck-days 30
 *   node scripts/papers-pearson.js --concurrency 8
 *
 * Node 22 built-ins only (global fetch goes through the environment's proxy).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'data', 'papers');
const CACHE_DIR = path.join(OUT_DIR, '.pearson-cache');
const HOST = 'https://qualifications.pearson.com';
const BASE = HOST + '/content/dam/pdf/';
const SOURCE = HOST + '/en/support/support-topics/exams/past-papers.html';
const BOARD = 'Pearson Edexcel';

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const argv = process.argv.slice(2);
const flag = (name, dflt) => {
  const i = argv.indexOf(name);
  if (i === -1) return dflt;
  if (dflt === false) return true;
  return argv[i + 1];
};
const FORCE = flag('--force', false);
const RECHECK_DAYS = Number(flag('--recheck-days', 7));
const CONCURRENCY = Number(flag('--concurrency', 8));
const VERBOSE = flag('--verbose', false);
const ONLY = argv.filter((a) => /^EDX-/i.test(a)).map((a) => a.toUpperCase());

const TODAY = new Date();
const TODAY_ISO = TODAY.toISOString().slice(0, 10);

// ---------------------------------------------------------------------------
// Course definitions
// ---------------------------------------------------------------------------
// family/subject/year are the confirmed DAM folder segments for the current file form.
// legacy lists the spaced folder prefixes (already URL-encoded) tried for the older
// upper-case file form; the generic spaced forms are added automatically.
// papers: id is the paper segment of the file name; component maps to the spec file's
// component id; marks/minutes default to the component's own, overridable per paper.
const COURSES = [
  {
    spec: 'EDX-9MA0', code: '9MA0', level: 'alevel', specFile: 'edexcel-9ma0.js',
    family: 'A-Level', subject: 'Mathematics', year: '2017',
    papers: [
      { id: '01', name: 'Paper 1: Pure Mathematics 1', component: 'P12', marks: 100, minutes: 120 },
      { id: '02', name: 'Paper 2: Pure Mathematics 2', component: 'P12', marks: 100, minutes: 120 },
      { id: '03', name: 'Paper 3: Statistics and Mechanics', component: 'P3' },
      { id: '31', name: 'Paper 3 Section A: Statistics', component: 'P3', marks: 50, minutes: 60 },
      { id: '32', name: 'Paper 3 Section B: Mechanics', component: 'P3', marks: 50, minutes: 60 },
    ],
  },
  {
    spec: 'EDX-9BS0', code: '9BS0', level: 'alevel', specFile: 'edexcel-9bs0.js',
    family: 'A-Level', subject: 'Business', year: '2015',
    papers: [
      { id: '01', name: 'Paper 1: Marketing, people and global businesses', component: 'P1' },
      { id: '02', name: 'Paper 2: Business activities, decisions and strategy', component: 'P2' },
      { id: '03', name: 'Paper 3: Investigating business in a competitive environment', component: 'P3' },
    ],
  },
  {
    spec: 'EDX-9PL0', code: '9PL0', level: 'alevel', specFile: 'edexcel-9pl0.js',
    family: 'A-Level', subject: 'Politics', year: '2017',
    papers: [
      { id: '01', name: 'Paper 1: UK Politics', component: 'C1' },
      { id: '02', name: 'Paper 2: UK Government', component: 'C2' },
      { id: '03', name: 'Paper 3: Comparative Politics', component: 'C3' },
      { id: '3A', name: 'Paper 3A: Comparative Politics – USA', component: 'C3' },
      { id: '3B', name: 'Paper 3B: Comparative Politics – Global', component: 'C3' },
    ],
  },
  {
    spec: 'EDX-4MA1', code: '4MA1', level: 'igcse', specFile: 'edexcel-4ma1.js',
    family: 'International-GCSE', subject: 'Mathematics-A', year: '2016',
    legacy: ['International%20GCSE/Mathematics%20A'],
    papers: [
      { id: '1F', name: 'Paper 1F', component: 'P1F', tier: 'Foundation' },
      { id: '2F', name: 'Paper 2F', component: 'P2F', tier: 'Foundation' },
    ],
  },
  {
    spec: 'EDX-4EA1', code: '4EA1', level: 'igcse', specFile: 'edexcel-4ea1.js',
    family: 'International-GCSE', subject: 'English-Language-A', year: '2016',
    legacy: ['International%20GCSE/English%20Language%20A'],
    papers: [
      { id: '01', name: 'Paper 1: Non-fiction Texts and Transactional Writing', component: 'C1' },
      { id: '02', name: 'Paper 2: Poetry and Prose Texts and Imaginative Writing', component: 'C2' },
      { id: '01R', name: 'Paper 1R (regional): Non-fiction Texts and Transactional Writing', component: 'C1', regional: true },
      { id: '02R', name: 'Paper 2R (regional): Poetry and Prose Texts and Imaginative Writing', component: 'C2', regional: true },
    ],
  },
  {
    spec: 'EDX-4ET1', code: '4ET1', level: 'igcse', specFile: 'edexcel-4et1.js',
    family: 'International-GCSE', subject: 'English-Literature', year: '2016',
    legacy: ['International%20GCSE/English%20Literature'],
    papers: [
      { id: '01', name: 'Paper 1: Poetry and Modern Prose', component: 'C1' },
      { id: '02', name: 'Paper 2: Modern Drama and Literary Heritage Texts', component: 'C2' },
      { id: '01R', name: 'Paper 1R (regional): Poetry and Modern Prose', component: 'C1', regional: true },
      { id: '02R', name: 'Paper 2R (regional): Modern Drama and Literary Heritage Texts', component: 'C2', regional: true },
    ],
  },
  {
    spec: 'EDX-4GN1', code: '4GN1', level: 'igcse', specFile: 'edexcel-4gn1.js',
    family: 'International-GCSE', subject: 'german', year: '2017',
    legacy: ['International%20GCSE/German/2017', 'International%20GCSE/German'],
    // Paper 3 (speaking) has no written paper and is deliberately omitted.
    papers: [
      { id: '01', name: 'Paper 1: Listening', component: 'P1', audio: true },
      { id: '02', name: 'Paper 2: Reading and Writing', component: 'P2' },
      { id: '01R', name: 'Paper 1R (regional): Listening', component: 'P1', regional: true, audio: true },
      { id: '02R', name: 'Paper 2R (regional): Reading and Writing', component: 'P2', regional: true },
    ],
  },
];

// ---------------------------------------------------------------------------
// Series to probe
// ---------------------------------------------------------------------------
// Each series: id, name, month (sitting month, 1-12), year, and the probe windows.
// June sittings can start in late April (4MA1 June 2021 sat on 28 April), so the June
// window opens on 20 April. Autumn GCE sittings ran from early October in 2020/2021.
function seriesFor(course) {
  const out = [];
  const june = (y) => ({
    id: `${y}-06`, name: `June ${y}`, year: y, month: 6,
    que: [`${y}-04-20`, `${y}-06-30`],
    ms: [`${y}-08-05`, `${y}-08-31`],
  });
  const jan = (y) => ({
    id: `${y}-01`, name: `January ${y}`, year: y, month: 1,
    que: [`${y}-01-03`, `${y}-01-31`],
    ms: [`${y}-02-20`, `${y}-03-20`],
  });
  const nov = (y) => ({
    id: `${y}-11`, name: `November ${y}`, year: y, month: 11,
    que: [`${y}-10-01`, `${y}-11-30`],
    ms: [`${y}-12-10`, `${y + 1}-01-31`],
  });
  for (let y = 2019; y <= 2026; y++) out.push(june(y));
  out.push(nov(2020), nov(2021));
  if (course.level === 'igcse') {
    // International GCSE January sittings ended with January 2023 (from November 2023 the
    // series are November and May/June only); January 2024+ is still probed best-effort but
    // is never recorded as locked (see the evidence rule in harvest()).
    for (let y = 2019; y <= 2026; y++) out.push(jan(y));
    for (let y = 2022; y <= 2025; y++) out.push(nov(y));
  }
  // newest first
  out.sort((a, b) => (b.year * 100 + b.month) - (a.year * 100 + a.month));
  return out;
}

// Locked window: a series sat within the last twelve months whose que is not public.
function monthsAgo(year, month) {
  return (TODAY.getUTCFullYear() - year) * 12 + (TODAY.getUTCMonth() + 1 - month);
}
function releaseDateFor(year, month) {
  const m = month + 9;
  const y = year + Math.floor((m - 1) / 12);
  const mm = ((m - 1) % 12) + 1;
  return `${y}-${String(mm).padStart(2, '0')}-01`;
}

// ---------------------------------------------------------------------------
// File-name forms
// ---------------------------------------------------------------------------
function formsFor(course, series) {
  const cur = `${course.family}/${course.subject}/${course.year}/Exam-materials/`;
  const lower = (paper, kind, d) => `${course.code.toLowerCase()}-${paper.toLowerCase()}-${kind}-${d}.pdf`;
  const upper = (paper, kind, d) => `${course.code.toUpperCase()}_${paper.toUpperCase()}_${kind}_${d}.pdf`;
  const forms = [{ id: 'current', dir: cur, file: lower }];
  // June 2024 onward is known to use the current form for all seven courses; the older
  // forms are only worth probing for earlier series.
  if (series.year <= 2023) {
    forms.push({ id: 'upper', dir: cur, file: upper });
    const famSp = course.family.replace(/-/g, '%20');
    const subSp = course.subject.replace(/-/g, '%20');
    const legacy = new Set([
      ...(course.legacy || []).map((p) => p + '/Exam-materials/'),
      ...(course.legacy || []).map((p) => p + '/exam-materials/'),
      `${famSp}/${subSp}/${course.year}/Exam-materials/`,
      `${famSp}/${subSp}/Exam-materials/`,
    ]);
    for (const dir of legacy) forms.push({ id: 'legacy:' + dir, dir, file: upper });
  }
  return forms;
}

// ---------------------------------------------------------------------------
// HTTP: HEAD with a small pool, retries, and strict hit test
// ---------------------------------------------------------------------------
const stats = { requests: 0, errors: 0 };
let active = 0;
const waiters = [];
function acquire() {
  if (active < CONCURRENCY) { active++; return Promise.resolve(); }
  return new Promise((res) => waiters.push(res)).then(() => { active++; });
}
function release() { active--; const w = waiters.shift(); if (w) w(); }

async function headOnce(url) {
  const r = await fetch(url, { method: 'HEAD', redirect: 'manual', signal: AbortSignal.timeout(25000) });
  return { status: r.status, type: (r.headers.get('content-type') || '').toLowerCase() };
}
async function probe(url, wantType = 'application/pdf') {
  await acquire();
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        stats.requests++;
        const r = await headOnce(url);
        if (r.status === 200 && r.type.includes(wantType)) return true;
        if (r.status === 200 || r.status === 302 || r.status === 301 || r.status === 404 || r.status === 403) return false;
        // 5xx / 429: retry
      } catch (e) {
        stats.errors++;
      }
      await new Promise((res) => setTimeout(res, 500 * (attempt + 1)));
    }
    return false;
  } finally {
    release();
  }
}

function* weekdays(from, to) {
  const d = new Date(from + 'T00:00:00Z');
  const e = new Date(to + 'T00:00:00Z');
  for (; d <= e; d.setUTCDate(d.getUTCDate() + 1)) {
    if (d.getUTCDay() === 0 || d.getUTCDay() === 6) continue;
    yield d.toISOString().slice(0, 10).replace(/-/g, '');
  }
}
const iso = (yyyymmdd) => `${yyyymmdd.slice(0, 4)}-${yyyymmdd.slice(4, 6)}-${yyyymmdd.slice(6, 8)}`;

// Probe every date in a window for one form; returns the earliest hit url or null.
async function findInWindow(dir, fileFn, paper, kind, dates) {
  const results = await Promise.all(dates.map(async (d) => ((await probe(BASE + dir + fileFn(paper, kind, d))) ? d : null)));
  const hits = results.filter(Boolean).sort();
  return hits.length ? BASE + dir + fileFn(paper, kind, hits[0]) : null;
}

// ---------------------------------------------------------------------------
// Cache
// ---------------------------------------------------------------------------
function loadCache(spec) {
  try { return JSON.parse(fs.readFileSync(path.join(CACHE_DIR, spec + '.json'), 'utf8')); }
  catch { return { hits: {}, misses: {} }; }
}
function saveCache(spec, cache) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(path.join(CACHE_DIR, spec + '.json'), JSON.stringify(cache, null, 1) + '\n');
}
function missIsFresh(cache, key) {
  if (FORCE) return false;
  const when = cache.misses[key];
  if (!when) return false;
  return (TODAY - new Date(when)) / 86400000 < RECHECK_DAYS;
}

// Memoised lookup: returns url or null, consulting/updating the cache.
async function lookup(cache, key, finder) {
  if (cache.hits[key]) return cache.hits[key];
  if (missIsFresh(cache, key)) return null;
  const url = await finder();
  if (url) { cache.hits[key] = url; delete cache.misses[key]; }
  else cache.misses[key] = TODAY_ISO;
  return url;
}

// ---------------------------------------------------------------------------
// Grade boundaries (per-series PDF on qualifications.pearson.com)
// ---------------------------------------------------------------------------
function boundaryCandidates(course, series) {
  const y = series.year;
  const months = series.month === 6 ? ['june', 'summer'] : series.month === 1 ? ['january', 'jan'] : ['november', 'october', 'autumn', 'nov', 'oct'];
  const yymm = String(y).slice(2) + String(series.month).padStart(2, '0');
  const out = [];
  // Verified names: A-level/grade-boundaries-june-2025-gce.pdf,
  // International-GCSE/grade-boundaries-june-2026-international-gcse.pdf,
  // International-GCSE/grade-boundaries-june-2025-int-gcse.pdf,
  // International-GCSE/grade-boundaries-november-2024-int-gcse.pdf,
  // International-GCSE/2511-international-gcse-subject-grade-boundaries.pdf (Nov 2025).
  for (const m of months) {
    if (course.level === 'alevel') {
      out.push(`Support/Grade-boundaries/A-level/grade-boundaries-${m}-${y}-gce.pdf`);
      out.push(`Support/Grade-boundaries/A-level/grade-boundaries-${m}-${y}-a-level.pdf`);
    } else {
      out.push(`Support/Grade-boundaries/International-GCSE/grade-boundaries-${m}-${y}-international-gcse.pdf`);
      out.push(`Support/Grade-boundaries/International-GCSE/grade-boundaries-${m}-${y}-int-gcse.pdf`);
    }
  }
  if (course.level === 'alevel') {
    out.push(`Support/Grade-boundaries/A-level/${yymm}-gce-subject-grade-boundaries.pdf`);
    out.push(`Support/Grade-boundaries/A-level/${yymm}-a-level-subject-grade-boundaries.pdf`);
  } else {
    // 2511-international-gcse-subject-grade-boundaries.pdf (Nov 2025),
    // 2306-intgcse-9-1-subject-grade-boundaries.pdf (June 2023), 2301-...-v1.pdf (Jan 2023)
    out.push(`Support/Grade-boundaries/International-GCSE/${yymm}-international-gcse-subject-grade-boundaries.pdf`);
    out.push(`Support/Grade-boundaries/International-GCSE/${yymm}-intgcse-9-1-subject-grade-boundaries.pdf`);
    out.push(`Support/Grade-boundaries/International-GCSE/${yymm}-intgcse-9-1-subject-grade-boundaries-v1.pdf`);
  }
  return out.map((p) => BASE + p);
}
async function findBoundaries(course, series, cache) {
  const key = `boundaries/${course.level}/${series.id}`;
  return lookup(cache, key, async () => {
    for (const url of boundaryCandidates(course, series)) if (await probe(url)) return url;
    return null;
  });
}

// ---------------------------------------------------------------------------
// Spec components (marks / minutes)
// ---------------------------------------------------------------------------
function loadSpec(course) {
  const mod = require(path.join(ROOT, 'src', 'specs', course.specFile));
  const spec = mod['SPEC_' + course.code] || Object.values(mod)[0];
  const byId = {};
  for (const c of spec.components || []) byId[c.id] = c;
  return byId;
}

// ---------------------------------------------------------------------------
// Harvest one course
// ---------------------------------------------------------------------------
async function harvest(course) {
  const t0 = Date.now();
  const components = loadSpec(course);
  const cache = loadCache(course.spec);
  const report = { spec: course.spec, seriesFound: [], seriesLocked: [], seriesOmitted: [], papersFound: 0, papersMissing: [], forms: {}, boundaries: 0 };
  const seriesOut = [];
  const allSeries = seriesFor(course);
  let lastExpected = null; // paper ids of the most recent public series (for locked series)
  // A recent series is only recorded as locked when the course demonstrably sits in that
  // month: June always; January/November only if an earlier series of that month was found
  // public. This keeps discontinued sittings (International GCSE January after 2023) out.
  const publicMonths = new Set([6]);
  const sittingExists = (s) => publicMonths.has(s.month);

  // oldest first while probing so publicMonths is known before the recent series are judged
  for (const series of [...allSeries].reverse()) {
    const forms = formsFor(course, series);
    let preferred = null; // form id that hit first for this series
    const queDates = [...weekdays(series.que[0], series.que[1])];
    const msDates = [...weekdays(series.ms[0], series.ms[1])];
    const papers = [];

    for (const p of course.papers) {
      const qKey = `${series.id}/${p.id}/que`;
      let que = cache.hits[qKey] || null;
      if (!que && !missIsFresh(cache, qKey)) {
        const order = preferred ? [forms.find((f) => f.id === preferred), ...forms.filter((f) => f.id !== preferred)] : forms;
        for (const f of order) {
          que = await findInWindow(f.dir, f.file, p.id, 'que', queDates);
          if (que) { preferred = f.id; report.forms[series.id] = f.id; break; }
        }
        if (que) { cache.hits[qKey] = que; delete cache.misses[qKey]; }
        else cache.misses[qKey] = TODAY_ISO;
      } else if (que) {
        // remember which form the cached hit used so sibling papers try it first
        const f = forms.find((f) => que.startsWith(BASE + f.dir));
        if (f) { preferred = f.id; report.forms[series.id] = f.id; }
      }
      if (!que) continue;

      const form = forms.find((f) => que.startsWith(BASE + f.dir)) || forms[0];
      const date = iso(que.match(/(\d{8})\.pdf$/)[1]);
      // mark scheme: rms then msc, results-day window plus the exam day itself
      const msWindow = [...new Set([date.replace(/-/g, ''), ...msDates])];
      const ms = await lookup(cache, `${series.id}/${p.id}/ms`, async () => {
        for (const kind of ['rms', 'msc']) {
          const u = await findInWindow(form.dir, form.file, p.id, kind, msWindow);
          if (u) return u;
        }
        return null;
      });
      const rep = await lookup(cache, `${series.id}/${p.id}/pef`, () => findInWindow(form.dir, form.file, p.id, 'pef', msWindow));
      // listening audio: only a plain, deterministic URL counts; otherwise omitted
      let audio = null;
      if (p.audio) {
        audio = await lookup(cache, `${series.id}/${p.id}/audio`, async () => {
          const d = date.replace(/-/g, '');
          for (const kind of ['aud', 'audio', 'mp3', 'lis', 'que']) {
            const u = BASE + form.dir + form.file(p.id, kind, d).replace(/\.pdf$/, '.mp3');
            if (await probe(u, 'audio')) return u;
          }
          return null;
        });
      }
      const comp = components[p.component] || {};
      papers.push({
        id: p.id,
        name: p.name,
        component: components[p.component] ? p.component : null,
        tier: p.tier || null,
        marks: p.marks ?? comp.marks ?? null,
        minutes: p.minutes ?? comp.minutes ?? null,
        date,
        qp: que,
        ms: ms || null,
        insert: audio || null,
        report: rep || null,
      });
    }

    saveCache(course.spec, cache);
    const found = papers.map((p) => p.id);
    if (papers.length) {
      const boundariesUrl = await findBoundaries(course, series, cache);
      if (boundariesUrl) report.boundaries++;
      saveCache(course.spec, cache);
      seriesOut.push({ id: series.id, name: series.name, public: true, releaseDate: null, boundaries: null, boundariesUrl, papers });
      publicMonths.add(series.month);
      report.seriesFound.push(series.id);
      report.papersFound += papers.length;
      lastExpected = found; // newest public series wins (loop runs oldest first)
    } else if (monthsAgo(series.year, series.month) <= 12 && sittingExists(series)) {
      const releaseDate = releaseDateFor(series.year, series.month);
      const expected = lastExpected || course.papers.filter((p) => !p.regional).map((p) => p.id);
      // results are out even while the papers are teacher-only, so the boundaries PDF may exist
      const boundariesUrl = await findBoundaries(course, series, cache);
      if (boundariesUrl) report.boundaries++;
      saveCache(course.spec, cache);
      seriesOut.push({
        id: series.id, name: series.name, public: false, releaseDate, boundaries: null, boundariesUrl,
        papers: expected.map((id) => {
          const p = course.papers.find((x) => x.id === id);
          const comp = components[p.component] || {};
          return { id: p.id, name: p.name, component: components[p.component] ? p.component : null, tier: p.tier || null,
            marks: p.marks ?? comp.marks ?? null, minutes: p.minutes ?? comp.minutes ?? null,
            date: null, qp: null, ms: null, insert: null, report: null };
        }),
      });
      report.seriesLocked.push(`${series.id} (release ${releaseDate})`);
    } else {
      report.seriesOmitted.push(series.id);
    }
    if (VERBOSE) console.error(`  ${course.spec} ${series.id}: ${papers.length} papers (${papers.map((p) => p.id).join(' ') || '-'})`);
  }

  // newest first
  const rank = (id) => Number(id.slice(0, 4)) * 100 + Number(id.slice(5, 7));
  seriesOut.sort((a, b) => rank(b.id) - rank(a.id));
  report.seriesFound.sort((a, b) => rank(b) - rank(a));
  report.seriesOmitted.sort((a, b) => rank(b) - rank(a));
  // papers missing per public series, measured against every paper id the course has ever
  // published (9MA0's 03 and 31/32 alternate between years, so both show up here)
  const everFound = [...new Set(seriesOut.filter((s) => s.public).flatMap((s) => s.papers.map((p) => p.id)))];
  for (const s of seriesOut) {
    if (!s.public) continue;
    const missing = everFound.filter((id) => !s.papers.some((p) => p.id === id));
    if (missing.length) report.papersMissing.push(`${s.id}: ${missing.join(', ')}`);
  }

  const out = {
    spec: course.spec,
    board: BOARD,
    code: course.code,
    checked: TODAY_ISO,
    source: SOURCE,
    series: seriesOut,
  };
  // every url must be on qualifications.pearson.com
  for (const s of out.series) {
    if (s.boundariesUrl && !s.boundariesUrl.startsWith(HOST + '/')) throw new Error('off-host url ' + s.boundariesUrl);
    for (const p of s.papers) for (const k of ['qp', 'ms', 'insert', 'report']) {
      if (p[k] && !p[k].startsWith(HOST + '/')) throw new Error('off-host url ' + p[k]);
    }
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, course.spec + '.json'), JSON.stringify(out, null, 2) + '\n');
  saveCache(course.spec, cache);
  report.seconds = Math.round((Date.now() - t0) / 1000);
  return report;
}

// ---------------------------------------------------------------------------
async function main() {
  const courses = COURSES.filter((c) => !ONLY.length || ONLY.includes(c.spec));
  if (!courses.length) { console.error('No course matched', ONLY); process.exit(1); }
  const reports = [];
  for (const course of courses) {
    console.error(`[${course.spec}] probing ${course.family}/${course.subject}/${course.year} ...`);
    const r = await harvest(course);
    reports.push(r);
    console.error(`[${course.spec}] ${r.seriesFound.length} series, ${r.papersFound} papers, ${r.seriesLocked.length} locked, ${r.seriesOmitted.length} omitted (${r.seconds}s, ${stats.requests} requests so far)`);
  }
  console.log(JSON.stringify({ checked: TODAY_ISO, requests: stats.requests, networkErrors: stats.errors, courses: reports }, null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
