#!/usr/bin/env node
/* Kit tooling for building a course's rooms by hand in a Claude Code session, for any course id.
   Same prompts and contract as the Worker's depth pipeline (worker/depth.js, src/kit-validator.js).
   Working files live in scratch/courses/<id>/kits/ (gitignored); the shipped file is src/kits/<id>.js.

   node scripts/kit-tools.js <id> prompt <topic> [problems.json]   write kits/<topic>.prompt.md for a writer subagent
   node scripts/kit-tools.js <id> check <topic>                    validate kits/<topic>.json against the contract
   node scripts/kit-tools.js <id> judge-prompt <topic>             write kits/<topic>.judge.md for a judge subagent
   node scripts/kit-tools.js <id> refuse <topic>                   turn a failing verdict into problems.json and keep the v1 kit
   node scripts/kit-tools.js <id> status                           which rooms have a kit, a verdict, and pass
   node scripts/kit-tools.js <id> assemble                         write src/kits/<id>.js from the passing rooms */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const { loadModule } = require(path.join(ROOT, 'tests', '_load.js'));
const kitValidator = require(path.join(ROOT, 'src', 'kit-validator.js')), families = require(path.join(ROOT, 'src', 'families.js'));
const depth = loadModule(path.join(ROOT, 'worker', 'depth.js'), { '../src/kit-validator.js': kitValidator, '../src/families.js': families }).exports;
const [courseId, cmd, id, extra] = process.argv.slice(2);
if (!courseId || !cmd) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 11).join('\n')); process.exit(1); }
const SCRATCH = process.env.COURSE_SCRATCH || path.join(ROOT, 'scratch', 'courses');
const D = path.join(SCRATCH, courseId), K = path.join(D, 'kits'); fs.mkdirSync(K, { recursive: true });
function specFor(cid) { const dir = path.join(ROOT, 'src', 'specs'); for (const f of fs.readdirSync(dir)) { const m = require(path.join(dir, f)); for (const sp of Object.values(m)) if (sp && sp.id === cid) return sp; } throw new Error('no spec with id ' + cid + ' in src/specs/'); }
const spec = specFor(courseId);
const family = spec.family || families.familyFor(spec.subject);
const topicOf = t => { const x = spec.topics.find(y => y.id === t); if (!x) throw new Error('no topic ' + t); return x; };
const verdictProblems = v => depth.judgeProblems(v);
const readJ = f => JSON.parse(fs.readFileSync(f, 'utf8'));
if (cmd === 'prompt') {
  const t = topicOf(id);
  const text = depth.kitPrompts.system() + '\n\n' + depth.kitPrompts.write({ spec, topic: t, family, problems: extra ? readJ(path.isAbsolute(extra) ? extra : path.join(process.cwd(), extra)) : null }) +
    '\n\nJSON schema to match exactly (every key required, no extra keys):\n' + JSON.stringify(depth.kitSchemas.kit, null, 1);
  fs.writeFileSync(path.join(K, id + '.prompt.md'), text); console.log('wrote', path.relative(ROOT, path.join(K, id + '.prompt.md')), text.length, 'chars');
} else if (cmd === 'check') {
  const t = topicOf(id); const kit = readJ(path.join(K, id + '.json'));
  const r = kitValidator.validateKit(kit, t, family); console.log(r.ok ? 'OK' : 'PROBLEMS'); for (const p of r.problems) console.log(' - ' + p); process.exitCode = r.ok ? 0 : 1;
} else if (cmd === 'judge-prompt') {
  const t = topicOf(id); const kit = readJ(path.join(K, id + '.json'));
  const text = depth.kitPrompts.judge({ spec, topic: t, family, kit }) + '\n\nReply with ONLY this JSON: ' + JSON.stringify(depth.kitSchemas.judge);
  fs.writeFileSync(path.join(K, id + '.judge.md'), text); console.log('wrote', path.relative(ROOT, path.join(K, id + '.judge.md')), text.length, 'chars');
} else if (cmd === 'refuse') {
  /* a first judge refused: keep the verdict and kit as v1, write the objections for the rewriter's prompt */
  const vf = path.join(K, id + '.verdict.json'); const v = readJ(vf);
  fs.writeFileSync(path.join(K, id + '.problems.json'), JSON.stringify(verdictProblems(v), null, 2));
  fs.renameSync(vf, path.join(K, id + '.verdict1.json')); fs.copyFileSync(path.join(K, id + '.json'), path.join(K, id + '.v1.json'));
  const text = depth.kitPrompts.system() + '\n\n' + depth.kitPrompts.write({ spec, topic: topicOf(id), family, problems: verdictProblems(v) }) +
    '\n\nJSON schema to match exactly (every key required, no extra keys):\n' + JSON.stringify(depth.kitSchemas.kit, null, 1);
  fs.writeFileSync(path.join(K, id + '.prompt.md'), text); console.log('refused', id, '· wrote problems.json, verdict1.json, v1.json and a rewrite prompt');
} else if (cmd === 'status') {
  let pass = 0;
  for (const t of spec.topics) {
    const kf = path.join(K, t.id + '.json'), vf = path.join(K, t.id + '.verdict.json');
    let s = 'no kit';
    if (fs.existsSync(kf)) { const r = kitValidator.validateKit(readJ(kf), t, family); s = r.ok ? 'kit valid' : 'kit REFUSED (' + r.problems.length + ')'; if (r.ok && fs.existsSync(vf)) { const v = readJ(vf); const p = verdictProblems(v); if (!p.length) pass++; s += p.length ? ` · judged ${Math.round(v.score * 100)}% FAIL (${p.length})` : ` · judged ${Math.round(v.score * 100)}% PASS`; } }
    console.log(t.id.padEnd(8), s.padEnd(34), t.name);
  }
  console.log(pass, 'of', spec.topics.length, 'rooms pass');
} else if (cmd === 'assemble') {
  const out = {}; let n = 0;
  for (const t of spec.topics) {
    const kf = path.join(K, t.id + '.json'), vf = path.join(K, t.id + '.verdict.json'); if (!fs.existsSync(kf) || !fs.existsSync(vf)) continue;
    const kit = readJ(kf), v = readJ(vf);
    if (!kitValidator.validateKit(kit, t, family).ok || verdictProblems(v).length) continue;
    out[t.id] = { id: courseId, topic: t.id, family, lesson: kit.lesson, room: kit.room, cards: kit.cards, extras: kit.extras || [], built: { at: v.at || new Date().toISOString(), by: 'claude-code', models: ['claude-sonnet-5', 'claude-opus-5'], promptVersion: depth.KIT_PROMPT_VERSION, judge: { score: v.score, notes: v.notes || '' } } }; n++;
  }
  fs.mkdirSync(path.join(ROOT, 'src', 'kits'), { recursive: true });
  const title = `${spec.board} ${spec.level} ${spec.subject} (${spec.code})`;
  fs.writeFileSync(path.join(ROOT, 'src', 'kits', courseId + '.js'), `/* ${title} — room kits built by hand in a Claude Code session: written by\n   Sonnet 5 subagents to the contract in src/kit-validator.js, every question re-solved and the lesson read against\n   the specification map by a fresh Opus 5 subagent before shipping. See .claude/skills/course-builder/references/depth.md. */\nmodule.exports = { ID: '${courseId}', KITS: ${JSON.stringify(out)} };\n`);
  console.log('assembled', n, 'of', spec.topics.length, 'rooms into src/kits/' + courseId + '.js');
} else { console.log('unknown command', cmd); process.exit(1); }
