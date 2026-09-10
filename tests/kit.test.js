/* The kit contract — what every room's depth must meet before students see it. Shared by the Worker's
   depth pipeline (worker/depth.js) and these tests, so a generated kit is held to one standard. */
const { validateKit } = require('../src/kit-validator.js');
const { FAMILIES } = require('../src/families.js');
const { sampleKit } = require('./_kit.js');
let pass = 0; const fails = []; const ok = (l, c, d = '') => c ? pass++ : fails.push(l + ' ' + d);
const maths = Object.values(require('../src/specs/edexcel-9ma0.js'))[0];
const topic = maths.topics.find(t => t.id === 'P2');
const sciTopic = { id: '4.1', name: 'Cell biology', ideas: [{ code: '4.1.1', q: 'q', idea: 'Cells', content: 'content' }, { code: '4.1.2', q: 'q', idea: 'Microscopy', content: 'content' }], caseStudies: ['Required practical 1: microscopy'] };
const v = (k, t = topic, f = 'quantitative') => validateKit(k, t, f);

for (const f of Object.keys(FAMILIES)) { const r = v(sampleKit(f === 'science' ? sciTopic : topic, f), f === 'science' ? sciTopic : topic, f); ok(`K1 a full kit passes the contract for the ${f} family`, r.ok, r.problems.join(' | ')); }
let r = v(sampleKit(topic, 'quantitative', { room: { questions: sampleKit(topic, 'quantitative').room.questions.slice(0, 11) } }));
ok('K2 fewer than twelve questions is refused and counted', !r.ok && /12/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { room: { questions: sampleKit(topic, 'quantitative').room.questions.map(q => ({ ...q, d: q.d === 3 ? 2 : q.d })) } }));
ok('K2 a bank with no hard tier is refused', !r.ok && /tier 3|difficulty 3/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { room: { questions: sampleKit(topic, 'quantitative').room.questions.map((q, i) => i === 4 ? { ...q, hints: ['one', 'two'] } : q) } }));
ok('K2 a question with two hints is refused and named by number', !r.ok && /question 5/.test(r.problems.join()) && /hints/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { room: { questions: sampleKit(topic, 'quantitative').room.questions.map((q, i) => i === 0 ? { ...q, codes: ['ZZ.9'] } : q) } }));
ok('K2 a question citing a code the topic does not have is refused', !r.ok && /ZZ\.9/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { room: { exit: sampleKit(topic, 'quantitative').room.exit.slice(0, 3) } }));
ok('K3 an exit ticket must have exactly four questions', !r.ok && /exit/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { cards: sampleKit(topic, 'quantitative').cards.slice(0, 11) }));
ok('K3 fewer than twelve cards is refused', !r.ok && /cards/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { lesson: { idea: sampleKit(topic, 'quantitative').lesson.idea.slice(1) } }));
ok('K4 a lesson must have a section for every key idea, and the missing code is named', !r.ok && r.problems.join().includes(topic.ideas[0].code), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { lesson: { why: 'too short' } }));
ok('K4 a thin "why" is refused', !r.ok && /why/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { lesson: { examples: sampleKit(topic, 'quantitative').lesson.examples.slice(0, 3) } }));
ok('K4 fewer than four worked examples is refused', !r.ok && /examples/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(sciTopic, 'science', { extras: [{ kind: 'extended', title: 'x', items: ['y'] }] }), sciTopic, 'science');
ok('K5 a science topic with a required practical must carry a practical method sheet', !r.ok && /practical/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'essay', { extras: [{ kind: 'paragraph', title: 'x', items: ['y'] }] }), topic, 'essay');
ok('K5 an essay kit needs two model paragraphs, a fact file and a plan', !r.ok && /paragraph|factfile|plan/.test(r.problems.join()), r.problems.join('|'));
r = v(sampleKit(topic, 'quantitative', { extras: [] }));
ok('K5 a quantitative kit needs a formulae sheet', !r.ok && /formulae/.test(r.problems.join()), r.problems.join('|'));
ok('K6 problems are written for a model to act on: each names the field', v(sampleKit(topic, 'quantitative', { room: { facts: [] } })).problems[0].startsWith('room.facts'));
console.log(`PASSED: ${pass}`); fails.forEach(f => console.log('FAILED: ' + f)); console.log('-'.repeat(50)); console.log(fails.length ? `RESULT: ${fails.length} FAILURE(S)` : 'RESULT: ALL GREEN'); process.exit(fails.length ? 1 : 0);
