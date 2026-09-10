#!/usr/bin/env node
/* The hand-built course toolkit, for building at full depth in a Claude Code session on a subscription
   rather than through the Worker on the API. See .claude/skills/course-builder/SKILL.md.

   node scripts/course.js fetch <board> <code>        download the official PDF (catalogue URL, or --url), record
                                                      provenance, extract the text to scratch/courses/<id>/
   node scripts/course.js validate <id>               the spec in src/specs and every kit in src/kits, against the contracts
   node scripts/course.js judge-prompt <id> <topic>   the judge's brief for that room's kit, for a fresh subagent
   node scripts/course.js current                     HEAD-check every hand-built spec's document against its provenance
   node scripts/course.js install <id>                register the spec in build.js if it is not there yet */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const { validateSpec } = require(path.join(ROOT, 'src', 'spec-validator.js'));
const { validateKit } = require(path.join(ROOT, 'src', 'kit-validator.js'));
const { FAMILIES, familyFor } = require(path.join(ROOT, 'src', 'families.js'));
const CATALOGUE = require(path.join(ROOT, 'data', 'catalogue.json'));
const PREFIX = { 'aqa': 'AQA', 'pearson edexcel': 'EDX', 'edexcel': 'EDX', 'pearson': 'EDX', 'ocr': 'OCR', 'eduqas': 'EDQ', 'wjec': 'WJEC' };
const idFor = (board, code) => `${PREFIX[String(board).toLowerCase()] || String(board).replace(/[^A-Za-z]/g, '').slice(0, 5).toUpperCase()}-${String(code).toUpperCase()}`;
const SCRATCH = process.env.COURSE_SCRATCH || path.join(ROOT, 'scratch', 'courses');
const arg = (i) => process.argv[i + 2];
const flag = (n) => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : null; };

function specFile(id) { const dir = path.join(ROOT, 'src', 'specs'); for (const f of fs.readdirSync(dir)) { const m = require(path.join(dir, f)); for (const sp of Object.values(m)) if (sp && sp.id === id) return { file: path.join(dir, f), spec: sp }; } return null; }
function kitsFile(id) { const f = path.join(ROOT, 'src', 'kits', id + '.js'); return fs.existsSync(f) ? { file: f, kits: require(f).KITS || {} } : null; }

async function head(url) {
  let res = await fetch(url, { method: 'HEAD', redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (study platform course builder)' } });
  if (!res.ok || !res.headers.get('content-type')) res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (study platform course builder)', Range: 'bytes=0-0' } });
  return { ok: res.ok, status: res.status, contentType: res.headers.get('content-type') || '', etag: res.headers.get('etag') || null, lastModified: res.headers.get('last-modified') || null, length: parseInt(res.headers.get('content-length') || (res.headers.get('content-range') || '').split('/')[1] || '0', 10) || null, url: res.url || url };
}

async function cmdFetch() {
  const board = arg(1), code = arg(2); if (!board || !code) throw new Error('usage: fetch <board> <code> [--url https://…pdf]');
  const id = idFor(board, code);
  const q = CATALOGUE.qualifications.find(x => idFor(x.board, x.code) === id);
  const url = flag('url') || (q && q.specUrl);
  if (!url) throw new Error(`no verified URL for ${id} in data/catalogue.json — find the official PDF on the board's site and pass --url`);
  const dir = path.join(SCRATCH, id); fs.mkdirSync(dir, { recursive: true });
  const h = await head(url); if (!h.ok || !/pdf/i.test(h.contentType)) throw new Error(`${url} is not a PDF here (${h.status} ${h.contentType})`);
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (study platform course builder)' } });
  const buf = Buffer.from(await res.arrayBuffer()); const pdf = path.join(dir, 'spec.pdf'); fs.writeFileSync(pdf, buf);
  const provenance = { id, board: q ? q.board : board, code: q ? q.code : code, subject: q ? q.subject : null, level: q ? q.level : null, url: h.url, etag: h.etag, lastModified: h.lastModified, length: h.length || buf.length, checkedAt: new Date().toISOString() };
  fs.writeFileSync(path.join(dir, 'provenance.json'), JSON.stringify(provenance, null, 2));
  let pages = null;
  try {
    const py = `import sys,json\nfrom pypdf import PdfReader\nr=PdfReader(sys.argv[1])\nout=[]\nfor i,p in enumerate(r.pages):\n  out.append('\\n\\n===== page %d =====\\n' % (i+1))\n  out.append(p.extract_text() or '')\nopen(sys.argv[2],'w').write(''.join(out))\nprint(len(r.pages))`;
    pages = parseInt(execFileSync('python3', ['-c', py, pdf, path.join(dir, 'spec.txt')], { encoding: 'utf8' }).trim(), 10);
  } catch (e) { console.log('text extraction needs pypdf (pip install pypdf); read the PDF with the Read tool page by page instead —', String(e.message).split('\n')[0]); }
  console.log(JSON.stringify({ ...provenance, pdf, text: pages ? path.join(dir, 'spec.txt') : null, pages }, null, 2));
}

function cmdValidate() {
  const id = arg(1); if (!id) throw new Error('usage: validate <id>');
  const sf = specFile(id); if (!sf) { console.log(`no spec with id ${id} in src/specs/`); process.exitCode = 1; return; }
  const v = validateSpec(sf.spec); const fam = familyFor(sf.spec.subject);
  console.log(`${id} spec (${path.relative(ROOT, sf.file)}): ${v.ok ? 'passes' : 'REFUSED'} · ${sf.spec.topics.length} topics · ${v.ideas} key ideas · family ${fam}${sf.spec.source ? ' · provenance recorded' : ' · NO provenance (add spec.source from scratch/courses/<id>/provenance.json)'}`);
  for (const p of v.problems) console.log('  - ' + p);
  const kf = kitsFile(id); let bad = !v.ok;
  if (!kf) { console.log(`no kits yet (src/kits/${id}.js)`); }
  else {
    let okN = 0;
    for (const t of sf.spec.topics) {
      const k = kf.kits[t.id]; if (!k) { console.log(`  ${t.id} ${t.name}: no kit`); continue; }
      const r = validateKit(k, t, fam); if (r.ok) okN++; else { bad = true; console.log(`  ${t.id} ${t.name}: REFUSED`); for (const p of r.problems) console.log('     - ' + p); }
      if (!k.built || !k.built.judge) { console.log(`  ${t.id}: kit has no built.judge — judge it with a fresh subagent before shipping`); }
    }
    for (const t of Object.keys(kf.kits)) if (!sf.spec.topics.some(x => x.id === t)) { bad = true; console.log(`  kit "${t}" has no topic in the spec`); }
    console.log(`${okN} of ${sf.spec.topics.length} rooms have a kit that passes the contract`);
  }
  if (bad) process.exitCode = 1;
}

function cmdJudgePrompt() {
  const id = arg(1), topic = arg(2); if (!id || !topic) throw new Error('usage: judge-prompt <id> <topic>');
  const sf = specFile(id), kf = kitsFile(id); if (!sf || !kf || !kf.kits[topic]) throw new Error('need the spec and the kit first');
  const t = sf.spec.topics.find(x => x.id === topic); if (!t) throw new Error('no such topic');
  const src = fs.readFileSync(path.join(ROOT, 'worker', 'depth.js'), 'utf8');
  /* the same brief the Worker gives Opus, so a hand-built kit is judged to the same standard */
  const m = /judge: \(\{ spec, topic, family, kit \}\) => `([\s\S]*?)`,\n\};/.exec(src); if (!m) throw new Error('could not read the judge brief from worker/depth.js');
  const { kitText } = require(path.join(ROOT, 'src', 'families.js'));
  const family = familyFor(sf.spec.subject), spec = sf.spec, kit = kf.kits[topic];
  const text = m[1].replace(/\$\{JSON\.stringify\(\{ ideas: topic\.ideas, caseStudies: topic\.caseStudies \|\| \[\] \}\)\}/, JSON.stringify({ ideas: t.ideas, caseStudies: t.caseStudies || [] }, null, 1))
    .replace(/\$\{JSON\.stringify\(spec\.markConventions \|\| \{\}\)\}/, JSON.stringify(spec.markConventions || {})).replace(/\$\{kitText\(family\)\}/, kitText(family)).replace(/\$\{JSON\.stringify\(kit\)\}/, JSON.stringify(kit, null, 1));
  console.log(text + '\n\nReply as JSON: {"score": 0-1, "wrong": [{"index": n, "why": "…"}], "problems": ["…"], "notes": "…"}');
}

async function cmdCurrent() {
  const dir = path.join(ROOT, 'src', 'specs'); let changed = 0, checked = 0;
  for (const f of fs.readdirSync(dir).filter(f => /\.js$/.test(f))) for (const sp of Object.values(require(path.join(dir, f)))) {
    if (!sp || !sp.source || !sp.source.url) { console.log(`${sp && sp.id}: no provenance recorded — add spec.source {url, etag, lastModified, length, checkedAt}`); continue; }
    checked++; const h = await head(sp.source.url);
    const same = h.ok && String(h.etag || '') === String(sp.source.etag || '') && String(h.lastModified || '') === String(sp.source.lastModified || '') && Number(h.length || 0) === Number(sp.source.length || 0);
    if (!h.ok) console.log(`${sp.id}: document not reachable (${h.status}) — ${sp.source.url}`);
    else if (same) console.log(`${sp.id}: unchanged since ${sp.source.checkedAt || 'it was recorded'}`);
    else { changed++; console.log(`${sp.id}: CHANGED — etag ${sp.source.etag} → ${h.etag}, modified ${sp.source.lastModified} → ${h.lastModified}, length ${sp.source.length} → ${h.length}. Fetch it again and follow references/review.md.`); }
  }
  console.log(`${checked} checked, ${changed} changed`);
  if (changed) process.exitCode = 2;
}

function cmdInstall() {
  const id = arg(1); const sf = specFile(id); if (!sf) throw new Error('write src/specs/<board>-<code>.js first');
  const b = path.join(ROOT, 'build.js'); let src = fs.readFileSync(b, 'utf8'); const rel = './src/specs/' + path.basename(sf.file);
  if (src.includes(rel)) { console.log(`${rel} already in build.js`); return; }
  src = src.replace(/const specs=\{([^}]*)\};/, (m, inner) => `const specs={${inner},...require('${rel}')};`);
  fs.writeFileSync(b, src); console.log(`added ${rel} to build.js — run npm test`);
}

(async () => {
  const cmd = arg(0);
  try {
    if (cmd === 'fetch') await cmdFetch(); else if (cmd === 'validate') cmdValidate(); else if (cmd === 'judge-prompt') cmdJudgePrompt(); else if (cmd === 'current') await cmdCurrent(); else if (cmd === 'install') cmdInstall();
    else { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 10).join('\n')); }
  } catch (e) { console.error('course.js:', e.message); process.exit(1); }
})();
