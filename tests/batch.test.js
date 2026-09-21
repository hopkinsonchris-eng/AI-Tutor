/* The batch path (scripts/batch-course.js): the Worker's pipeline run through the Message Batches API against a
   stand-in for the API. Criteria: the outline and the first topic are direct calls that warm the cache and the
   rest are batches; the validator's corrective round and the judge's one rewrite reach the model with the objections;
   what ships meets the same contracts and tests as a hand-built course; a run is resumable without a second spend;
   the ledger prices every request at batch rates; a held spec never reaches src/specs. */
const fs = require('fs'), path = require('path'), os = require('os');
const families = require('../src/families.js'), { validateSpec } = require('../src/spec-validator.js'), { validateKit } = require('../src/kit-validator.js');
const { collectKits } = require('../scripts/kits-bundle.js');
const { sampleKit } = require('./_kit.js');
const BC = require('../scripts/batch-course.js');
let pass = 0; const fails = [];
const ok = (l, c, d = '') => c ? pass++ : fails.push(l + (d ? ' — ' + d : ''));
const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'batch-'));
/* the bundler requires the kits file; a rewritten file must not come back from the require cache */
const freshKits = (root) => { const dir = path.join(root, 'src', 'kits'); for (const f of fs.existsSync(dir) ? fs.readdirSync(dir) : []) delete require.cache[path.resolve(dir, f)]; return collectKits(dir); };

/* ---------- canned answers, keyed off the prompt the Worker's own templates produce ---------- */
const idea = (code, n) => ({ code, q: `What does ${code} require?`, idea: `Idea ${code}`, content: `The specification statement for ${code}, in the board's own terms, with what the student must be able to do — number ${n}.` });
const outline = (over = {}) => ({
  board: 'AQA', subject: 'History', code: '7042', level: 'A level', version: 'Specification issue 3 (2024)', firstExam: 2017, essaySubject: true, family: 'essay',
  components: [{ id: 'P1', name: 'Paper 1', paperCode: '7042/1', marks: 80, weight: 40, minutes: 150, nea: false, coversAll: false, sections: [] }, { id: 'P2', name: 'Paper 2', paperCode: '7042/2', marks: 80, weight: 40, minutes: 150, nea: false, coversAll: false, sections: [] }, { id: 'NEA', name: 'Historical investigation', paperCode: '', marks: 40, weight: 20, minutes: 0, nea: true, coversAll: false, sections: [] }],
  options: [], ao: [{ id: 'AO1', label: 'Knowledge', text: 'Demonstrate knowledge and understanding.' }, { id: 'AO2', label: 'Sources', text: 'Analyse primary sources.' }],
  markConventions: { style: 'levels', summary: 'Levels of response.', commandWords: ['Explain', 'Assess', 'Evaluate', 'Compare', 'To what extent'].map(w => ({ word: w, means: 'What ' + w + ' demands.' })), essayShapes: [{ marks: 25, minutes: 45, structure: 'Intro, three paragraphs, conclusion.' }, { marks: 30, minutes: 60, structure: 'Sources: three, weighed.' }, { marks: 12, minutes: 20, structure: 'Explain and assess.' }] },
  topics: [{ id: '3.1', component: 'P1', option: null, name: 'Topic one' }, { id: '3.2', component: 'P1', option: null, name: 'Topic two' }, { id: '3.3', component: 'P2', option: null, name: 'Topic three' }, { id: '3.4', component: 'NEA', option: null, name: 'The investigation' }],
  ...over });
const topicAnswer = (id) => ({ ideas: [idea(id + '.1', 1), idea(id + '.2', 2), idea(id + '.3', 3)], caseStudies: ['A named example'], skills: [] });
const goodJudge = () => ({ score: 0.92, coverage: 0.95, fidelity: 0.92, options: 1, familyFit: 0.95, invented: [], missing: [], changes: [], notes: 'Faithful to the document.' });
const topicOf = (spec, id) => spec.topics.find(t => t.id === id) || outline().topics.find(t => t.id === id);
const provenance = { id: 'AQA-7042', board: 'AQA', code: '7042', subject: 'History', level: 'A level', url: 'https://filestore.aqa.org.uk/x/AQA-7042-SP-2015.PDF', etag: '"abc"', lastModified: 'Mon, 01 Sep 2026 00:00:00 GMT', length: 1234567, checkedAt: '2026-09-20T10:00:00.000Z', pdf: path.join(__dirname, '_kit.js') };

/* What a request is, from its prompt: the same templates the Worker uses, so this is exactly what the API would see. */
const textOf = (p) => p.messages[0].content.filter(c => c.type === 'text').map(c => c.text).join('');
function kindOf(p) {
  const text = textOf(p);
  if (/Produce the outline/.test(text)) return { kind: 'outline', again: /previous outline was refused/.test(text) };
  let m = /fill in topic (\S+) "/.exec(text); if (m) return { kind: 'topic', id: m[1], again: /previous answer for this topic was refused/.test(text), text };
  if (/Judge this draft specification map/.test(text)) return { kind: 'judge' };
  m = /Topic (\S+) "[^"]*" — the specification map for this room/.exec(text); if (m) return { kind: 'write', id: m[1], again: /previous kit was refused/.test(text), text };
  if (/You are checking a room kit/.test(text)) { const kit = JSON.parse(text.slice(text.lastIndexOf('The kit:') + 8)); return { kind: 'judgeKit', kit, text }; }
  return { kind: '?' };
}
const usage = () => ({ input_tokens: 1000, output_tokens: 500, cache_read_input_tokens: 200, cache_creation_input_tokens: 100 });
const asMessage = (value) => ({ id: 'msg_x', role: 'assistant', model: 'x', stop_reason: 'end_turn', usage: usage(), content: [{ type: 'text', text: JSON.stringify(value) }] });

/* A stand-in for the Batches API: answers come from `answer(kind)`; `failures` maps custom_id → result type. */
function fakeApi(answer, { failures = {}, retrieveThrows = {} } = {}) {
  const calls = { message: [], create: [], retrieve: [], results: [], upload: [] }; const batches = {}; let n = 0;
  const api = { calls, batches,
    async message(p) { calls.message.push(p); const a = answer(kindOf(p), p); if (a instanceof Error) throw a; return asMessage(a); },
    async upload(file) { calls.upload.push(file); return { id: 'file_test_1', size_bytes: fs.statSync(file).size, expires_at: '2026-09-27T00:00:00Z' }; },
    async create(requests) { const id = 'msgbatch_' + (++n); batches[id] = requests; calls.create.push({ id, requests }); return { id, processing_status: 'in_progress', request_counts: { processing: requests.length, succeeded: 0, errored: 0, canceled: 0, expired: 0 } }; },
    async retrieve(id) { calls.retrieve.push(id); if (retrieveThrows[id] && retrieveThrows[id]-- > 0) throw new Error('network down'); return { id, processing_status: 'ended', request_counts: { processing: 0, succeeded: batches[id].length, errored: 0, canceled: 0, expired: 0 }, results_url: 'fake://' + id }; },
    async results(batch) { calls.results.push(batch.id); const out = {}; for (const r of batches[batch.id]) { const f = failures[r.custom_id]; if (f) { out[r.custom_id] = { type: f, error: { type: 'invalid_request_error', message: 'bad request' } }; continue; } const a = answer(kindOf(r.params), r.params); out[r.custom_id] = { type: 'succeeded', message: asMessage(a) }; } return out; },
    async wait(id) { return this.retrieve(id); },
  };
  return api;
}
const logs = []; const log = (m) => logs.push(m);

(async () => {
  /* ---------- the spec, end to end ---------- */
  {
    const root = tmp(), scratch = tmp();
    const api = fakeApi((k) => k.kind === 'outline' ? outline() : k.kind === 'topic' ? (k.id === '3.2' && !k.again ? { ideas: [idea('3.2.1', 1), { code: '3.2.2', q: 'q', idea: 'i', content: 'short' }], caseStudies: [], skills: [] } : topicAnswer(k.id)) : k.kind === 'judge' ? goodJudge() : null);
    const r = await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch, root, api, log });
    ok('S1 the outline and the first topic are direct calls, in that order', api.calls.message.length === 2 && kindOf(api.calls.message[0]).kind === 'outline' && kindOf(api.calls.message[1]).kind === 'topic' && kindOf(api.calls.message[1]).id === '3.1');
    ok('S1 the outline runs on Opus and the topics on Sonnet', api.calls.message[0].model === 'claude-opus-5' && api.calls.message[1].model === 'claude-sonnet-5');
    ok('S1 the PDF went up once through the Files API and every request carries it as a cached file document', api.calls.upload.length === 1 && api.calls.message.every(p => p.messages[0].content[0].type === 'document' && p.messages[0].content[0].source.file_id === 'file_test_1' && p.messages[0].content[0].cache_control.ttl === '1h') && api.calls.create.every(b => b.requests.every(q => q.params.messages[0].content[0].source.file_id === 'file_test_1')));
    ok('S1 the system prompt is the Worker\'s, cached for an hour, and the output is constrained to the Worker\'s schema', api.calls.message[0].system[0].cache_control.ttl === '1h' && /specification maps for a study platform/.test(api.calls.message[0].system[0].text) && api.calls.message[0].output_config.format.type === 'json_schema' && api.calls.message[0].output_config.format.schema.properties.topics);
    const names = api.calls.create.map(b => b.requests.length + ':' + b.requests.map(q => q.custom_id).join(','));
    ok('S2 the other three topics went as one batch, then the topic the validator refused went back alone with the objection, then the judge as a batch of one', api.calls.create.length === 3 && names[0] === '3:AQA-7042-topic-3_2-r1,AQA-7042-topic-3_3-r1,AQA-7042-topic-3_4-r1' && names[1] === '1:AQA-7042-topic-3_2-r1-again' && names[2] === '1:AQA-7042-judge-r1', names.join(' | '));
    ok('S2 the corrective request carries the validator\'s problem in the Worker\'s own words', /previous answer for this topic was refused[\s\S]*too thin/.test(kindOf(api.calls.create[1].requests[0].params).text));
    ok('S2 the judge runs on Opus with the full draft', api.calls.create[2].requests[0].params.model === 'claude-opus-5' && /"3.4.3"/.test(api.calls.create[2].requests[0].params.messages[0].content[1].text));
    const file = path.join(root, 'src', 'specs', 'aqa-7042.js');
    ok('S3 a spec judged 92% is written to src/specs with the hand-built naming', r.published && r.file === file && fs.existsSync(file));
    const mod = fs.existsSync(file) ? require(file) : {};
    const spec = mod.SPEC_7042;
    ok('S3 the file exports SPEC_<code>, passes the shared contract and the family prior, and records provenance', spec && validateSpec(spec).ok && spec.markConventions.style === families.FAMILIES[families.familyFor(spec.subject)].markStyle && spec.source && spec.source.url === provenance.url && spec.source.etag === '"abc"' && spec.source.length === 1234567 && !spec.source.fileId);
    ok('S3 the header names the models and the judge\'s score', /claude-opus-5 outlined, claude-sonnet-5 mapped each topic, claude-opus-5 judged the map[\s\S]*at 92%/.test(fs.readFileSync(file, 'utf8')));
    ok('S3 twelve key ideas across four topics, with the refused topic replaced by its corrected answer', spec && spec.topics.length === 4 && spec.topics.every(t => t.ideas.length === 3) && spec.topics[1].ideas[1].content !== 'short');
    const ledger = fs.readFileSync(path.join(scratch, 'AQA-7042', 'batch', 'ledger.jsonl'), 'utf8').split('\n').filter(Boolean).map(JSON.parse);
    ok('S4 the ledger has a row per answered request: two direct, five batched', ledger.length === 7 && ledger.filter(x => !x.batch).length === 2 && ledger.filter(x => x.batch).length === 5);
    const sonnetBatch = BC.costOf('claude-sonnet-5', usage(), '1h', true), opusDirect = BC.costOf('claude-opus-5', usage(), '1h', false);
    ok('S4 a batched Sonnet row is priced at half list with cache reads at a tenth and 1-hour writes at double', Math.abs(sonnetBatch - 0.5 * (1000 * 2 + 200 * 0.2 + 100 * 4 + 500 * 10) / 1e6) < 1e-9 && ledger.find(x => x.batch && x.model === 'claude-sonnet-5').usd === sonnetBatch);
    ok('S4 a direct Opus row is priced at full list', Math.abs(opusDirect - (1000 * 5 + 200 * 0.5 + 100 * 10 + 500 * 25) / 1e6) < 1e-9 && ledger[0].usd === opusDirect);
    ok('S4 the report sums by stage and model and totals the course', r.cost.requests === 7 && Math.abs(r.cost.usd - (2 * opusDirect - opusDirect + BC.costOf('claude-sonnet-5', usage(), '1h', false) + 4 * sonnetBatch + BC.costOf('claude-opus-5', usage(), '1h', true))) < 1e-3 && r.cost.by['topic · claude-sonnet-5'].requests === 4 && r.cost.by['outline · claude-opus-5 (direct)'].requests === 1);
    ok('S4 the cost report knows the API\'s own cache breakdown when it is given', Math.abs(BC.costOf('claude-sonnet-5', { input_tokens: 0, output_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 300, cache_creation: { ephemeral_5m_input_tokens: 100, ephemeral_1h_input_tokens: 200 } }, '1h', true) - 0.5 * (100 * 2.5 + 200 * 4) / 1e6) < 1e-12);

    /* running it again submits nothing: the outline, the topics and the judge are all in state */
    const before = api.calls.create.length + api.calls.message.length;
    const r2 = await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch, root, api, log });
    ok('S5 a finished spec run is idempotent — a rerun asks the API for nothing and rewrites the same file', api.calls.create.length + api.calls.message.length === before && r2.published && api.calls.upload.length === 1);
  }

  /* ---------- a spec the judge scores under 0.8 gets its own findings back as the next round's objection, up
     to JUDGE_ROUNDS attempts, before it is held for a person to read the judge's report ---------- */
  {
    const root = tmp(), scratch = tmp();
    const api = fakeApi((k) => k.kind === 'outline' ? outline() : k.kind === 'topic' ? topicAnswer(k.id) : k.kind === 'judge' ? { ...goodJudge(), score: 0.6, fidelity: 0.6, invented: ['3.9 Invented topic'] } : null);
    const r = await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch, root, api, log });
    ok('S6 a spec judged 60% is held: written beside its judge.json in scratch, never in src/specs', !r.published && r.file === path.join(scratch, 'AQA-7042', 'batch', 'aqa-7042.js') && fs.existsSync(r.file) && !fs.existsSync(path.join(root, 'src', 'specs', 'aqa-7042.js')) && fs.existsSync(path.join(scratch, 'AQA-7042', 'batch', 'judge.json')) && /judged 60% after 3 round\(s\) of 3/.test(r.held[0]));
    const outlineMsgs = api.calls.message.filter(p => kindOf(p).kind === 'outline');
    ok('S6 it stops at JUDGE_ROUNDS, not before and not indefinitely: one outline direct call and one judge batch per round, the first outline carrying no objection and the other two carrying the previous round\'s finding', r.rounds === BC.JUDGE_ROUNDS && outlineMsgs.length === 3 && api.calls.create.filter(b => kindOf(b.requests[0].params).kind === 'judge').length === 3 && !/a judge found/.test(textOf(outlineMsgs[0])) && outlineMsgs.slice(1).every(p => /a judge found: 3\.9 Invented topic/.test(textOf(p))));

    const root1b = tmp(), scratch1b = tmp();
    let judgeCalls1b = 0;
    const api1b = fakeApi((k) => k.kind === 'outline' ? outline() : k.kind === 'topic' ? topicAnswer(k.id) : k.kind === 'judge' ? (judgeCalls1b++ === 0 ? { ...goodJudge(), score: 0.5, fidelity: 0.5, invented: ['topic "3.1" duplicates the theme'] } : goodJudge()) : null);
    const r1b = await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch: scratch1b, root: root1b, api: api1b, log });
    ok('S6b a spec that clears the bar on its second round publishes, having stopped looping the moment it passed', r1b.published && r1b.rounds === 2 && judgeCalls1b === 2);
    const outlineMsgs1b = api1b.calls.message.filter(p => kindOf(p).kind === 'outline');
    ok('S6b the second round\'s outline call carries the first judge\'s finding as the objection, in the shared prompt\'s own words', outlineMsgs1b.length === 2 && /previous outline was refused by the validator for these reasons[\s\S]*a judge found: topic "3\.1" duplicates the theme/.test(textOf(outlineMsgs1b[1])));
    ok('S6b none of the four topics were rewritten for round 2 — the outline came back with the same ids and names, so the cached content from round 1 was kept and not rebilled', api1b.calls.create.filter(b => kindOf(b.requests[0].params).kind === 'topic').length === 1 && api1b.calls.create.length === 3);

    const root2 = tmp(), scratch2 = tmp();
    const api2 = fakeApi((k) => k.kind === 'outline' ? outline({ markConventions: { ...outline().markConventions, style: 'points' } }) : k.kind === 'topic' ? topicAnswer(k.id) : k.kind === 'judge' ? goodJudge() : null);
    const r2 = await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch: scratch2, root: root2, api: api2, log });
    ok('S6 a spec whose mark style contradicts the family prior (what tests/spec.test.js checks) is held with the reason', !r2.published && /family prior for History/.test(r2.held.join()) && !fs.existsSync(path.join(root2, 'src', 'specs', 'aqa-7042.js')));
    ok('S6 a caret power in a spec is a ship problem', BC.shipProblems({ subject: 'Mathematics', markConventions: { style: 'points' }, topics: [{ ideas: [{ content: 'x^2 + 1' }] }] }).some(p => /caret/.test(p)));
    const api3 = fakeApi((k) => k.kind === 'outline' ? outline() : k.kind === 'topic' ? (k.id === '3.3' ? { ideas: [idea('3.3.1', 1)], caseStudies: [], skills: [] } : topicAnswer(k.id)) : goodJudge());
    let err = null; try { await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch: tmp(), root: tmp(), api: api3, log }); } catch (e) { err = e; }
    ok('S7 a topic refused twice fails the run with the validator\'s reason, after exactly one corrective batch', err && /refused by the validator after the corrective round/.test(err.message) && /at least two key ideas/.test(err.message) && api3.calls.create.length === 2);
  }

  /* ---------- the document by URL, and a dry run ---------- */
  {
    const api = fakeApi((k) => k.kind === 'outline' ? outline() : k.kind === 'topic' ? topicAnswer(k.id) : goodJudge());
    const r = await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch: tmp(), root: tmp(), api, log, docMode: 'url' });
    ok('S8 with --doc url nothing is uploaded and every request carries the PDF by its URL', r.published && api.calls.upload.length === 0 && api.calls.message[0].messages[0].content[0].source.type === 'url' && api.calls.message[0].messages[0].content[0].source.url === provenance.url);
    const api2 = fakeApi(() => outline());
    const d = await BC.runSpec({ board: 'AQA', code: '7042', provenance, scratch: tmp(), root: tmp(), api: api2, log, dryRun: true });
    ok('S9 a dry run uploads nothing, calls nothing, submits nothing', d.dryRun && api2.calls.upload.length === 0 && api2.calls.message.length === 0 && api2.calls.create.length === 0);
  }

  /* ---------- the kits: write → validate → judge → one rewrite → judge ---------- */
  {
    const root = tmp(), scratch = tmp();
    const spec = { ...outline(), id: 'AQA-7042', topics: outline().topics.map(t => ({ ...t, ...topicAnswer(t.id) })) };
    delete spec.family;
    const seen = { write: [], judge: [] };
    const api = fakeApi((k) => {
      if (k.kind === 'write') { seen.write.push(k.id + (k.again ? '+' : '')); const t = topicOf(spec, k.id); if (k.id === '3.4' && !k.again) return sampleKit(t, 'essay', { room: { facts: ['only one fact'] } }); if (k.id === '3.3' && !k.again) return sampleKit(t, 'essay', { room: { facts: ['E = mc^2 written with a caret', 'two', 'three'] } }); return sampleKit(t, 'essay'); }
      if (k.kind === 'judgeKit') { const id = /Topic (\S+)/.exec(k.text) ? null : null; const first = k.kit.room.questions[0].q; const tid = /on (Topic \w+|The investigation)\?/.exec(first)[1]; seen.judge.push(tid); if (tid === 'Topic two' && seen.judge.filter(x => x === 'Topic two').length === 1) return { score: 0.55, wrong: [{ index: 3, why: 'the answer key says 8; the mean of 4, 8 and 12 is 8 but the question asks for the median' }], problems: ['hints[2] gives the answer away'], notes: 'Not yet.' }; return { score: 0.9, wrong: [], problems: [], notes: 'A teacher would publish this.' }; }
      return null;
    });
    const r = await BC.runKits({ id: 'AQA-7042', spec, scratch, root, api, log });
    const b = api.calls.create;
    ok('K1 round 1 is one write batch of four rooms then one judge batch of the two the validator passed', b.length === 4 && b[0].requests.length === 4 && b[0].requests.every(q => q.params.model === 'claude-sonnet-5' && q.params.output_config.format.schema.properties.lesson) && b[1].requests.length === 2 && b[1].requests.every(q => q.params.model === 'claude-opus-5'), b.map(x => x.requests.length).join(','));
    ok('K1 the kit prompts are the Worker\'s, under the Worker\'s kit system prompt', /Write the complete kit for this room/.test(b[0].requests[0].params.messages[0].content[0].text) && /You write the room kits/.test(b[0].requests[0].params.system[0].text));
    const rewrite = b[2].requests.map(q => kindOf(q.params));
    ok('K2 round 2 rewrites exactly the three refused rooms with their objections: the validator\'s (facts), the caret rule, and the judge\'s wrong answer', b[2].requests.length === 3 && rewrite.map(x => x.id).sort().join() === '3.2,3.3,3.4' && rewrite.every(x => x.again) && /refused by the validator: .*facts/.test(rewrite.find(x => x.id === '3.4').text) && /superscript characters/.test(rewrite.find(x => x.id === '3.3').text) && /question 4: the answer key says 8/.test(rewrite.find(x => x.id === '3.2').text) && /hints\[2\] gives the answer away/.test(rewrite.find(x => x.id === '3.2').text), JSON.stringify(rewrite.map(x => x.id)));
    ok('K2 round 2 judges the three rewritten rooms, and all four ship', b[3].requests.length === 3 && r.passed.length === 4 && r.failed.length === 0);
    const file = path.join(root, 'src', 'kits', 'AQA-7042.js');
    const kits = freshKits(root)['AQA-7042'];
    ok('K3 the shipped file has the hand-built shape: ID and KITS, one kit per topic, each passing the contract', fs.existsSync(file) && kits && Object.keys(kits).sort().join() === '3.1,3.2,3.3,3.4' && Object.entries(kits).every(([t, k]) => validateKit(k, topicOf(spec, t), 'essay').ok));
    ok('K3 every kit records who built it, the models, the prompt version and a judge score the kits test accepts', Object.values(kits).every(k => k.built.by === 'batch-api' && k.built.models.join() === 'claude-sonnet-5,claude-opus-5' && k.built.promptVersion === '2026-09-10.2' && k.built.judge.score >= 0.8 && k.built.judge.notes && k.built.at));
    ok('K3 nothing shipped writes a power with a caret', !/[A-Za-z0-9)]\^-?\d/.test(fs.readFileSync(file, 'utf8')));
    const before = b.length;
    const r2 = await BC.runKits({ id: 'AQA-7042', spec, scratch, root, api, log });
    ok('K4 a finished kits run is idempotent — nothing is written or judged again', b.length === before && r2.passed.length === 4);
  }

  /* ---------- a room that fails twice; the rerun that retries only it; a crash that is resumed without a second spend ---------- */
  {
    const root = tmp(), scratch = tmp();
    const spec = { ...outline(), id: 'AQA-7042', topics: outline().topics.map(t => ({ ...t, ...topicAnswer(t.id) })) };
    let attempt = 0;
    const api = fakeApi((k) => {
      if (k.kind === 'write') return sampleKit(topicOf(spec, k.id), 'essay');
      if (k.kind === 'judgeKit') { const tid = /on (Topic \w+|The investigation)\?/.exec(k.kit.room.questions[0].q)[1]; if (tid === 'Topic three' && attempt < 1) return { score: 0.4, wrong: [{ index: 0, why: 'wrong' }], problems: [], notes: 'No.' }; return { score: 0.9, wrong: [], problems: [], notes: 'Yes.' }; }
      return null;
    });
    const r = await BC.runKits({ id: 'AQA-7042', spec, scratch, root, api, log });
    const file = path.join(root, 'src', 'kits', 'AQA-7042.js');
    ok('K5 a room refused twice ships without a kit and is named in the file\'s header with the judge\'s objection', r.passed.length === 3 && r.failed.length === 1 && r.failed[0].topic === '3.3' && /Rooms without a kit after one rewrite[\s\S]*3\.3 — question 1: wrong/.test(fs.readFileSync(file, 'utf8')) && !freshKits(root)['AQA-7042']['3.3']);
    attempt = 1; const before = api.calls.create.length;
    const r2 = await BC.runKits({ id: 'AQA-7042', spec, scratch, root, api, log });
    ok('K5 the rerun is a new attempt that writes and judges only the failed room, and then all four ship', api.calls.create.length === before + 2 && api.calls.create[before].requests.length === 1 && /-3_3-a2r1$/.test(api.calls.create[before].requests[0].custom_id) && r2.passed.length === 4 && r2.failed.length === 0 && Object.keys(freshKits(root)['AQA-7042']).length === 4);

    /* the crash: the judge batch of round 1 is submitted, then polling dies; the rerun polls the same batch and never resubmits the writes */
    const root3 = tmp(), scratch3 = tmp();
    const api3 = fakeApi((k) => k.kind === 'write' ? sampleKit(topicOf(spec, k.id), 'essay') : { score: 0.9, wrong: [], problems: [], notes: 'Yes.' }, { retrieveThrows: { msgbatch_2: 1 } });
    let err = null; try { await BC.runKits({ id: 'AQA-7042', spec, scratch: scratch3, root: root3, api: api3, log }); } catch (e) { err = e; }
    const state = JSON.parse(fs.readFileSync(path.join(scratch3, 'AQA-7042', 'batch', 'state.json'), 'utf8'));
    ok('K6 the crash left the write batch collected and the judge batch submitted but uncollected, all on disk', err && /network down/.test(err.message) && state.inflight === true && state.batches['kits-a1r1-write'].collected === true && state.batches['kits-a1r1-judge'].collected === false && Object.values(state.kits).every(k => k.written && !k.judged));
    const r3 = await BC.runKits({ id: 'AQA-7042', spec, scratch: scratch3, root: root3, api: api3, log });
    ok('K6 the rerun resumes the judge batch by its id and submits nothing new: four rooms ship for two batches in total', api3.calls.create.length === 2 && api3.calls.retrieve.filter(x => x === 'msgbatch_2').length === 2 && r3.passed.length === 4 && !JSON.parse(fs.readFileSync(path.join(scratch3, 'AQA-7042', 'batch', 'state.json'), 'utf8')).inflight);
    const ledger3 = fs.readFileSync(path.join(scratch3, 'AQA-7042', 'batch', 'ledger.jsonl'), 'utf8').split('\n').filter(Boolean);
    ok('K6 the ledger has exactly one row per answered request: four writes and four judgements', ledger3.length === 8);
  }

  /* ---------- an errored request in a batch ---------- */
  {
    const root = tmp(), scratch = tmp();
    const spec = { ...outline(), id: 'AQA-7042', topics: outline().topics.map(t => ({ ...t, ...topicAnswer(t.id) })) };
    const api = fakeApi((k) => k.kind === 'write' ? sampleKit(topicOf(spec, k.id), 'essay') : { score: 0.9, wrong: [], problems: [], notes: 'Yes.' }, { failures: { 'AQA-7042-write-3_2-a1r1': 'errored' } });
    const r = await BC.runKits({ id: 'AQA-7042', spec, scratch, root, api, log });
    const rewrite = api.calls.create[2].requests;
    ok('K7 a request the API errored is not billed, not in the ledger, and is written afresh in round 2 without a "previous kit" objection', rewrite.length === 1 && /-3_2-a1r2$/.test(rewrite[0].custom_id) && !/previous kit was refused/.test(rewrite[0].params.messages[0].content[0].text) && r.passed.length === 4 && fs.readFileSync(path.join(scratch, 'AQA-7042', 'batch', 'ledger.jsonl'), 'utf8').split('\n').filter(Boolean).length === 8);
  }

  /* ---------- the roadmap's waves ---------- */
  {
    const w1 = BC.waveCourses(1);
    ok('W1 wave 1 is read from docs/course-roadmap.md: ten courses, Spanish 8692 first, ids the catalogue uses', w1.length === 10 && w1[0].id === 'AQA-8692' && w1[0].subject === 'Spanish' && w1[0].level === 'GCSE' && w1.some(c => c.id === 'EDQ-C700') && w1.some(c => c.id === 'EDX-1EN2') && w1[7].id === 'AQA-7182' && w1[7].level === 'A level');
    ok('W1 wave 2 starts at rank 11 and a wave that does not exist is refused', BC.waveCourses(2)[0].rank === 11 && (() => { try { BC.waveCourses(9); return false; } catch (e) { return /no "### Wave 9"/.test(e.message); } })());
    ok('W1 file names follow the hand-built convention', BC.specFileName('AQA-8698') === 'aqa-8698.js' && BC.specFileName('EDX-1EN2') === 'edexcel-1en2.js' && BC.specFileName('EDQ-C700') === 'eduqas-c700.js' && BC.specFileName('OCR-J277') === 'ocr-j277.js' && BC.specVarName('EDQ-C700') === 'SPEC_C700');
    ok('W2 the batch path never names the subscription\'s model: the outline and both judges are Opus 5, the topics and kits Sonnet 5', BC.MODELS.outline === 'claude-opus-5' && BC.MODELS.judge === 'claude-opus-5' && BC.MODELS.judgeKit === 'claude-opus-5' && BC.MODELS.topic === 'claude-sonnet-5' && BC.MODELS.write === 'claude-sonnet-5' && !Object.values(BC.MODELS).some(m => /fable/.test(m)));
    ok('W2 without a key the API client refuses to start', (() => { try { BC.anthropicBatches({ key: '' }); return false; } catch (e) { return /ANTHROPIC_API_KEY/.test(e.message); } })());
  }

  console.log(`PASSED: ${pass}`); fails.forEach(f => console.log('FAILED: ' + f));
  console.log('-'.repeat(50)); console.log(fails.length ? `RESULT: ${fails.length} FAILURE(S)` : 'RESULT: ALL GREEN'); process.exit(fails.length ? 1 : 0);
})().catch(e => { console.log('FAILED: the suite threw — ' + (e.stack || e)); console.log('-'.repeat(50)); console.log('RESULT: 1 FAILURE(S)'); process.exit(1); });
