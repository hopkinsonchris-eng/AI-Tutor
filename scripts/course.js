#!/usr/bin/env node
/* The hand-built course toolkit, for building at full depth in a Claude Code session on a subscription
   rather than through the Worker on the API. See .claude/skills/course-builder/SKILL.md.

   node scripts/course.js fetch <board> <code>        download the official PDF (catalogue URL, or --url), record
                                                      provenance, extract the text to scratch/courses/<id>/
   node scripts/course.js validate <id>               the spec in src/specs and every kit in src/kits, against the contracts
   node scripts/course.js write-prompt <id> <topic> [--problems <file>]   the writer's brief for that room's kit (the Worker's, with the
                                                      family rules); --problems lists the objections for a rewrite, one per line
   node scripts/course.js check-kit <id> <topic> --kit <file>   the kit contract on a kit not yet shipped (a JSON file)
   node scripts/course.js judge-prompt <id> <topic> [--kit <file>]   the judge's brief for that room's kit, for a fresh subagent
   node scripts/course.js ship-kit <id> <topic> --kit <file> --verdict <file>   store a judged kit in src/kits/<id>.js with its built record;
                                                      refused below 0.8 or with a wrong answer key
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

/* The Worker's briefs, read from worker/depth.js and evaluated as the template literals they are, so a hand-built
   kit is written and judged to exactly the standard the Worker applies. */
function briefs() {
  const src = fs.readFileSync(path.join(ROOT, 'worker', 'depth.js'), 'utf8');
  const pick = (re) => { const m = re.exec(src); if (!m) throw new Error('could not read the kit briefs from worker/depth.js'); return m[1]; };
  const shape = pick(/const KIT_SHAPE = `([\s\S]*?)`;/), rules = pick(/const KIT_RULES = `([\s\S]*?)`;/);
  const write = pick(/write: \(\{ spec, topic, family, problems \}\) => `([\s\S]*?)`,\n  judge:/), judge = pick(/judge: \(\{ spec, topic, family, kit \}\) => `([\s\S]*?)`,\n\};/);
  const version = pick(/KIT_PROMPT_VERSION = '([^']+)'/);
  const pretty = { stringify: (x) => JSON.stringify(x, null, 1) };
  const { kitText } = require(path.join(ROOT, 'src', 'families.js'));
  const fill = (tpl, names, values) => new Function(...names, 'JSON', 'kitText', 'return `' + tpl + '`')(...values, pretty, kitText);
  return {
    version,
    system: `You write the room kits for a study platform used by UK students: the lesson, worked examples, question bank, exit ticket and recall cards for one topic of one exam course. ${shape} ${rules}`,
    write: (spec, topic, family, problems) => fill(write, ['spec', 'topic', 'family', 'problems'], [spec, topic, family, problems]),
    judge: (spec, topic, family, kit) => fill(judge, ['spec', 'topic', 'family', 'kit'], [spec, topic, family, kit]),
  };
}
function room(id, topic) {
  const sf = specFile(id); if (!sf) throw new Error(`no spec with id ${id} in src/specs/`);
  const t = sf.spec.topics.find(x => x.id === topic); if (!t) throw new Error('no such topic');
  return { spec: sf.spec, topic: t, family: familyFor(sf.spec.subject) };
}
function kitFor(id, topic) {
  const f = flag('kit'); if (f) return JSON.parse(fs.readFileSync(path.resolve(f), 'utf8'));
  const kf = kitsFile(id); if (!kf || !kf.kits[topic]) throw new Error('no kit for that room in src/kits — pass --kit <file> for one not yet shipped');
  return kf.kits[topic];
}
const KIT_JSON = 'Reply as JSON and nothing else: {"lesson": {"why": "…", "idea": [{"h": "…", "t": "…", "code": "…"}], "examples": [{"title": "…", "steps": ["…"]}], "check": [{"q": "…", "a": "…"}]}, "room": {"facts": ["…"], "questions": [{"q": "…", "a": "…", "sol": "…", "m": 2, "d": 1, "hints": ["…", "…", "…"], "codes": ["…"]}], "exit": [{"q": "…", "a": "…"}]}, "cards": [{"front": "…", "back": "…", "code": "…"}], "extras": [{"kind": "…", "title": "…", "items": ["…"]}]}';

function cmdWritePrompt() {
  const id = arg(1), topic = arg(2); if (!id || !topic) throw new Error('usage: write-prompt <id> <topic> [--problems <file>]');
  const { spec, topic: t, family } = room(id, topic);
  const pf = flag('problems'); const problems = pf ? fs.readFileSync(path.resolve(pf), 'utf8').split('\n').map(x => x.trim()).filter(Boolean) : null;
  const b = briefs();
  console.log(b.system + '\n\n' + b.write(spec, t, family, problems) + '\n\n' + KIT_JSON);
}

function cmdCheckKit() {
  const id = arg(1), topic = arg(2); if (!id || !topic || !flag('kit')) throw new Error('usage: check-kit <id> <topic> --kit <file>');
  const { topic: t, family } = room(id, topic); const kit = kitFor(id, topic);
  const r = validateKit(kit, t, family);
  console.log(`${id} ${topic}: ${r.ok ? 'passes the kit contract' : 'REFUSED'}`);
  for (const p of r.problems) console.log('  - ' + p);
  if (!r.ok) process.exitCode = 1;
}

function cmdShipKit() {
  const id = arg(1), topic = arg(2); if (!id || !topic || !flag('kit') || !flag('verdict')) throw new Error('usage: ship-kit <id> <topic> --kit <file> --verdict <file>');
  const { spec, topic: t, family } = room(id, topic); const kit = kitFor(id, topic);
  const v = JSON.parse(fs.readFileSync(path.resolve(flag('verdict')), 'utf8'));
  const r = validateKit(kit, t, family); if (!r.ok) throw new Error('the kit does not pass the contract:\n  - ' + r.problems.join('\n  - '));
  const score = Number(v.score) || 0, wrong = Array.isArray(v.wrong) ? v.wrong : [];
  if (score < 0.8 || wrong.length) throw new Error(`refused: judged ${score}${wrong.length ? ` with ${wrong.length} wrong answer key(s)` : ''} — rewrite with the objections first`);
  const file = path.join(ROOT, 'src', 'kits', id + '.js'); const kf = kitsFile(id); const KITS = kf ? kf.kits : {};
  KITS[topic] = { id, topic, family, lesson: kit.lesson, room: kit.room, cards: kit.cards, extras: kit.extras || [],
    built: { at: new Date().toISOString(), by: 'claude-code', models: ['claude-sonnet-5', 'claude-opus-5'], promptVersion: briefs().version, judge: { score, notes: String(v.notes || '') } } };
  const ordered = {}; for (const tp of spec.topics) if (KITS[tp.id]) ordered[tp.id] = KITS[tp.id];
  const header = `/* ${spec.board} ${spec.level} ${spec.subject} (${spec.code}) — room kits built by hand in a Claude Code session: written by\n   Sonnet 5 subagents to the contract in src/kit-validator.js, every question re-solved and the lesson read against\n   the specification map by a fresh Opus 5 subagent before shipping. See .claude/skills/course-builder/references/depth.md. */\n`;
  fs.writeFileSync(file, header + `module.exports = { ID: '${id}', KITS: ${JSON.stringify(ordered)} };\n`);
  console.log(`${id} ${topic}: shipped (judged ${score}) — ${Object.keys(ordered).length} of ${spec.topics.length} rooms in ${path.relative(ROOT, file)}`);
}

function cmdJudgePrompt() {
  const id = arg(1), topic = arg(2); if (!id || !topic) throw new Error('usage: judge-prompt <id> <topic> [--kit <file>]');
  const { spec, topic: t, family } = room(id, topic); const kit = kitFor(id, topic);
  /* the same brief the Worker gives Opus, so a hand-built kit is judged to the same standard */
  console.log(briefs().judge(spec, t, family, kit) + '\n\nReply as JSON: {"score": 0-1, "wrong": [{"index": n, "why": "…"}], "problems": ["…"], "notes": "…"}');
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
    if (cmd === 'fetch') await cmdFetch(); else if (cmd === 'validate') cmdValidate(); else if (cmd === 'write-prompt') cmdWritePrompt(); else if (cmd === 'check-kit') cmdCheckKit(); else if (cmd === 'judge-prompt') cmdJudgePrompt(); else if (cmd === 'ship-kit') cmdShipKit(); else if (cmd === 'current') await cmdCurrent(); else if (cmd === 'install') cmdInstall();
    else { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 15).join('\n')); }
  } catch (e) { console.error('course.js:', e.message); process.exit(1); }
})();
