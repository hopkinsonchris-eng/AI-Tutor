#!/usr/bin/env node
/* Retrofit a shipped kit to the worked-example and open-card contract with a writer subagent.
   node scripts/kit-refine.js <course> extract <topic>     write refine/<topic>.in.json and <topic>.prompt.md for the writer
   node scripts/kit-refine.js <course> extract-all          every room of the course
   node scripts/kit-refine.js <course> apply <topic>        check refine/<topic>.out.json and write <topic>.applied.json if it passes
   node scripts/kit-refine.js <course> assemble             merge every applied.json into src/kits/<course>.js (one writer, run once)
   node scripts/kit-refine.js <course> status               which rooms are refined
   Working files live in scratch/courses/<course>/refine/ (gitignored). A merge is refused when a value or result in the
   original steps has gone missing, when a title, count or front changed, or when the kit fails the contract. */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const { validateKit, OPEN_FRONT } = require(path.join(ROOT, 'src', 'kit-validator.js'));
const { familyFor } = require(path.join(ROOT, 'src', 'families.js'));
const [courseId, cmd, topicId] = process.argv.slice(2);
if (!courseId || !cmd) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 8).join('\n')); process.exit(1); }
const KF = path.join(ROOT, 'src', 'kits', courseId + '.js');
const D = path.join(process.env.COURSE_SCRATCH || path.join(ROOT, 'scratch', 'courses'), courseId, 'refine'); fs.mkdirSync(D, { recursive: true });
function specFor(cid) { const dir = path.join(ROOT, 'src', 'specs'); for (const f of fs.readdirSync(dir)) { const m = require(path.join(dir, f)); for (const sp of Object.values(m)) if (sp && sp.id === cid) return sp; } throw new Error('no spec ' + cid); }
const spec = specFor(courseId), family = spec.family || familyFor(spec.subject);
const loadKits = () => { delete require.cache[KF]; return require(KF); };
const topicOf = t => { const x = spec.topics.find(y => y.id === t); if (!x) throw new Error('no topic ' + t); return x; };
const nums = s => (String(s).match(/\d+(?:[.,]\d+)?/g) || []).map(x => x.replace(',', ''));
const refined = k => (k.lesson.examples || []).every(e => e.setup && e.cues) && !(k.cards || []).some(c => !c.open && OPEN_FRONT.test(c.front));

function extract(t) {
  const M = loadKits(); const kit = M.KITS[t]; if (!kit) throw new Error('no kit for ' + t);
  const topic = topicOf(t);
  const cards = kit.cards.map((c, index) => ({ index, front: c.front, back: c.back, flagged: OPEN_FRONT.test(c.front) || /\b(one|two|three|an?)\b.*\b(example|examples)\b/i.test(c.front) || !!c.open }));
  const jf = path.join(D, 'judge.json'); let judged = [];
  if (fs.existsSync(jf)) { try { const j = JSON.parse(fs.readFileSync(jf, 'utf8')); const r = (j.rooms || []).find(x => x.room === t); if (r && !r.ok) judged = r.problems || []; } catch (e) {} }
  const pj = path.join(D, t + '.judge.json'); if (fs.existsSync(pj)) { try { const r = JSON.parse(fs.readFileSync(pj, 'utf8')); if (r && !r.ok) judged = judged.concat(r.problems || []); } catch (e) {} }
  const input = { course: `${spec.board} ${spec.level} ${spec.subject} (${spec.code})`, family, topic: { id: t, name: topic.name, ideas: topic.ideas }, examples: kit.lesson.examples.map(e => ({ title: e.title, setup: e.setup, steps: e.steps, cues: e.cues })), cards, judged };
  fs.writeFileSync(path.join(D, t + '.in.json'), JSON.stringify(input, null, 1));
  const prompt = `You are refining the worked examples and some recall cards of one room of a study platform for UK students. Course: ${input.course}. Topic ${t} "${topic.name}". Family: ${family}.

The specification map's key ideas for this room (use only these; do not invent content beyond them):
${JSON.stringify(topic.ideas)}

WORKED EXAMPLES. Students see them faded and must predict each line before revealing it. Today the first hidden line often assumes data or a scenario they were never shown, so there is nothing to predict from. For EVERY example below, in the same order and with the SAME title:
1. Write "setup": the complete problem as the student sees it before predicting anything — every value, reading, statement, source, scenario or quotation the steps use, and exactly what is asked. One to three sentences. No working, and NEVER the result: a new equilibrium, a total, a percentage, a judgement or a conclusion that a later step reaches must not appear in the setup (the merge refuses a setup that contains a number first reached in the final step).
2. Rewrite "steps" so each line makes ONE move with the real values or the real statements (not instructions to the student). The first step must be a move, not a restatement of the setup (the merge refuses a first step that repeats the setup). Keep every value and every result from the original steps — you may split or merge lines, but 3 to 6 steps. The final step must state the answer to exactly what the setup asked: if it asks for a judgement, make the judgement; if it asks for a critical path, name the path; if it asks for a value, give it with its unit. Label every intermediate figure correctly (which node, which year, which activity) and check each figure against the previous line.
3. Write "cues": exactly one per step, in order — a short question (8 to 90 characters) the student answers BEFORE that step is revealed, answerable from the setup and the steps already shown, never containing the step's answer. Examples: "Which reading does not fit the others, and why?", "What do you divide the total by?", "Which command word decides the structure here?".

RECALL CARDS. Every card of the room is listed below with its index. A card whose front asks for an example, or for one of several acceptable answers (the ones marked flagged, and any other you judge to be of that kind), must be open: for each such card (same index, front unchanged) rewrite "back" to give two or three acceptable answers, separated by semicolons, each specific and correct for this course (real named examples, places, policies, studies or values where the specification has them), at most 60 words in total, and set "open": true. A card with one right answer is left out of your reply. If a flagged card in fact has a single fixed answer the specification requires, set "open": false and reword the front so it reads as a fixed question ("Name the three sources..." not "Give three sources...").

${judged.length ? `A PREVIOUS VERSION OF THIS ROOM WAS REFUSED BY AN EXAMINER FOR THESE REASONS — fix every one:\n- ${judged.join('\n- ')}\n` : ''}Common faults to avoid, found by examiners in earlier rewrites: the setup states the result (a new equilibrium, an anomaly value, a judgement) so the steps only restate it; the first step repeats the setup; a later step introduces a fact, an Act or a value the setup never gave, so its cue cannot be answered; a step is generic exam advice ("use AO2 here") rather than a move on this case; a cue states the step's own finding and asks only for the reason; a label is wrong (which node, which year, which activity); a question asked in the setup (a judgement, the critical path, a percentage) is never answered in the final step; a fact is wrong (check dates, who does what under an Act, which country signed or ratified what).

Reply with ONLY this JSON, nothing else:
{"examples":[{"title":"...","setup":"...","steps":["..."],"cues":["..."]}],"cards":[{"index":0,"front":"...","back":"...","open":true}]}

Here is the room's current material (examples may already carry a setup and cues from an earlier rewrite — improve them, do not assume they are right):
${JSON.stringify({ examples: input.examples, cards: input.cards }, null, 1)}`;
  fs.writeFileSync(path.join(D, t + '.prompt.md'), prompt);
  console.log('extracted', t, '·', input.examples.length, 'examples,', cards.length, 'open cards · prompt', path.relative(ROOT, path.join(D, t + '.prompt.md')));
}
function apply(t) {
  const M = loadKits(); const kit = M.KITS[t]; if (!kit) throw new Error('no kit for ' + t);
  const out = JSON.parse(fs.readFileSync(path.join(D, t + '.out.json'), 'utf8'));
  const problems = [];
  const ex = Array.isArray(out.examples) ? out.examples : [];
  if (ex.length !== kit.lesson.examples.length) problems.push(`examples: expected ${kit.lesson.examples.length}, got ${ex.length}`);
  const newEx = kit.lesson.examples.map((old, i) => {
    const e = ex[i]; if (!e) return old;
    if (e.title !== old.title) problems.push(`examples[${i}]: title changed ("${old.title}" → "${e.title}")`);
    const have = new Set(nums(e.setup + ' ' + (e.steps || []).join(' ')));
    const missing = [...new Set(nums(old.steps.join(' ')))].filter(x => !have.has(x));
    if (missing.length) problems.push(`examples[${i}]: values from the original steps are missing: ${missing.join(', ')}`);
    if (!Array.isArray(e.steps) || e.steps.length < 3 || e.steps.length > 6) problems.push(`examples[${i}]: 3 to 6 steps`);
    /* the result-leak and restated-first-step checks now live in the shared validator, run below */
    return { title: old.title, setup: String(e.setup || '').trim(), steps: e.steps, cues: e.cues };
  });
  const newCards = kit.cards.map(c => ({ ...c }));
  for (const c of (Array.isArray(out.cards) ? out.cards : [])) {
    const old = newCards[c.index]; if (!old) { problems.push(`cards[${c.index}]: no such card`); continue; }
    if (c.front && c.front !== old.front && c.open !== false) problems.push(`cards[${c.index}]: front changed but the card is open`);
    if (c.front) old.front = c.front; old.back = String(c.back || old.back).trim(); old.open = !!c.open;
  }
  const next = { ...kit, lesson: { ...kit.lesson, examples: newEx }, cards: newCards };
  const v = validateKit(next, topicOf(t), family); problems.push(...v.problems);
  if (problems.length) { console.log('REFUSED', t); for (const p of problems) console.log(' - ' + p); process.exitCode = 1; return; }
  next.built = { ...(kit.built || {}), refined: new Date().toISOString() };
  fs.writeFileSync(path.join(D, t + '.applied.json'), JSON.stringify(next));
  console.log('APPLIED', t, '·', newEx.length, 'examples with setups and cues,', newCards.filter(c => c.open).length, 'open cards · written to refine/' + t + '.applied.json (assemble merges it)');
}
function assemble() {
  const M = loadKits(); let n = 0;
  for (const t of Object.keys(M.KITS)) { const f = path.join(D, t + '.applied.json'); if (!fs.existsSync(f)) continue; const k = JSON.parse(fs.readFileSync(f, 'utf8')); const v = validateKit(k, topicOf(t), family); if (!v.ok) { console.log('skipped', t, v.problems.join('; ')); continue; } M.KITS[t] = k; n++; }
  save(M); console.log('assembled', n, 'refined rooms into', path.relative(ROOT, KF));
}
function save(M) {
  const src = fs.readFileSync(KF, 'utf8'); const head = src.slice(0, src.indexOf('module.exports'));
  fs.writeFileSync(KF, head + 'module.exports = { ID: ' + JSON.stringify(M.ID) + ', KITS: ' + JSON.stringify(M.KITS) + ' };\n');
}
if (cmd === 'extract') extract(topicId);
else if (cmd === 'extract-all') { const M = loadKits(); for (const t of Object.keys(M.KITS)) extract(t); }
else if (cmd === 'apply') apply(topicId);
else if (cmd === 'assemble') assemble();
else if (cmd === 'status') { const M = loadKits(); let n = 0, a = 0; for (const [t, k] of Object.entries(M.KITS)) { const r = refined(k); if (r) n++; const ap = fs.existsSync(path.join(D, t + '.applied.json')); if (ap) a++; console.log(t.padEnd(10), r ? 'refined' : ap ? 'applied, awaiting assemble' : 'pending'); } console.log(n, 'of', Object.keys(M.KITS).length, 'rooms refined in the kit file;', a, 'applied files waiting'); }
else { console.log('unknown command'); process.exit(1); }
