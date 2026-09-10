/* Course builder smokes — written before the builder, from the Markup's smoke plan.
   Criteria: 3 (coalescing is in the Worker suite), 4 validator gate + retry, 5 judge → review queue,
   6 provenance, 11 all four families pass the contract, 12 skill and prompts share one source. */
const path = require('path'), { execFileSync } = require('child_process');
const { loadModule, kv, inlineStep } = require('./_load.js');
const validator = require('../src/spec-validator.js'), families = require('../src/families.js');
let pass = 0; const fails = [];
const ok = (l, c, d = '') => c ? pass++ : fails.push(l + (d ? ' — ' + d : ''));

const B = loadModule(path.join(__dirname, '..', 'worker', 'builder.js'), {
  '../src/spec-validator.js': validator, '../src/families.js': families,
}).exports;
const { runBuild, runReview, diffSpecs, prompts, specIdFor, PROMPT_VERSION } = B;

/* ---------- canned documents: what the model returns, per family ---------- */
const idea = (code, n) => ({ code, q: `What does ${code} require?`, idea: `Idea ${code}`, content: `The specification statement for ${code}, in the board's own terms, with what the student must be able to do — number ${n}.` });
function outlineFor(f, over = {}) {
  const base = {
    board: 'AQA', subject: { essay: 'History', quantitative: 'Mathematics', science: 'Biology', language: 'French' }[f], code: { essay: '7042', quantitative: '7357', science: '7402', language: '7652' }[f],
    level: 'A level', version: 'Specification issue 3 (2024)', firstExam: 2017, family: f,
    essaySubject: f === 'essay', components: [
      { id: 'P1', name: 'Paper 1', paperCode: '7402/1', marks: 91, weight: 50, minutes: 120, sections: [], nea: false, coversAll: false },
      { id: 'P2', name: 'Paper 2', paperCode: '7402/2', marks: 91, weight: 50, minutes: 120, sections: [], nea: false, coversAll: false }],
    options: [], ao: [{ id: 'AO1', label: 'Knowledge', text: 'Demonstrate knowledge and understanding.' }, { id: 'AO2', label: 'Application', text: 'Apply knowledge and understanding.' }],
    markConventions: { style: families.FAMILIES[f].markStyle, summary: 'How marks are awarded.', commandWords: ['Describe', 'Explain', 'Compare', 'Evaluate', 'Calculate'].map(w => ({ word: w, means: 'What ' + w + ' demands.' })),
      essayShapes: f === 'essay' ? [{ marks: 25, minutes: 45, structure: 'Intro, three paragraphs, conclusion.' }, { marks: 20, minutes: 35, structure: 'Two sides and a judgement.' }, { marks: 12, minutes: 20, structure: 'Explain and assess.' }] : f === 'science' ? [{ marks: 6, minutes: 8, structure: 'Levels-marked extended response.' }] : [] },
    topics: [{ id: '3.1', component: 'P1', option: null, name: 'Topic one' }, { id: '3.2', component: 'P1', option: null, name: 'Topic two' }, { id: '3.3', component: 'P2', option: null, name: 'Topic three' }],
  };
  return Object.assign(base, over);
}
const topicFor = (f, t) => ({ ideas: [idea(t.id + '.1', 1), idea(t.id + '.2', 2), idea(t.id + '.3', 3)], caseStudies: f === 'quantitative' ? ['Find the stationary points of a cubic'] : f === 'science' ? ['RP1: microscopy — apparatus and method'] : ['A named example'], skills: [] });
const goodJudge = () => ({ score: 0.92, coverage: 0.95, fidelity: 0.92, options: 1, familyFit: 0.95, invented: [], missing: [], changes: [], notes: 'Faithful to the document.' });

function ai(f, over = {}) {
  const calls = { outline: 0, topic: 0, judge: 0, locate: 0, docChanges: 0, resources: 0, topicPrompts: [], fixPrompts: [], resourcePrompts: [] };
  return { calls, ...{
    async outline() { calls.outline++; return outlineFor(f); },
    async topic(input) { calls.topic++; calls.topicPrompts.push(input.prompt); if (input.problems) calls.fixPrompts.push(input.prompt); return topicFor(f, input.topic); },
    async judge() { calls.judge++; return goodJudge(); },
    async locate() { calls.locate++; return { url: 'https://filestore.aqa.org.uk/resources/x/AQA-7402-SP-2015.PDF' }; },
    async docChanges() { calls.docChanges++; return { changes: ['Issue 3 corrects the mark allocation for Paper 2 Section B.'], notes: '' }; },
    async resources(input) { calls.resources++; calls.resourcePrompts.push(input.prompt); return { links: [{ name: 'BBC Bitesize', url: 'https://www.bbc.co.uk/bitesize/examspecs/x', kind: 'notes' }, { name: 'Physics & Maths Tutor', url: 'https://www.physicsandmathstutor.com/x/', kind: 'notes' }, { name: 'Dead link', url: 'https://gone.example/404', kind: 'video' }, { name: 'Not secure', url: 'http://insecure.example/', kind: 'video' }] }; },
  }, ...over };
}
const headOk = async (url) => ({ ok: true, status: 200, contentType: 'application/pdf', etag: '"abc123"', lastModified: 'Mon, 01 Sep 2025 00:00:00 GMT', length: 1035984, url });
const params = (f) => ({ level: 'A level', subject: outlineFor(f).subject, board: 'AQA', code: outlineFor(f).code, specUrl: 'https://filestore.aqa.org.uk/resources/x/spec.PDF', requestedBy: 'matthew' });
const deps = (f, over = {}) => ({ kv: kv(), step: inlineStep(), ai: ai(f), head: headOk, now: () => '2026-09-10T12:00:00.000Z', boardDomains: { AQA: ['aqa.org.uk', 'filestore.aqa.org.uk'] }, ...over });

(async () => {
  ok('B0 spec ids follow the repo convention', specIdFor('AQA', '7402') === 'AQA-7402' && specIdFor('Pearson Edexcel', '9BS0') === 'EDX-9BS0' && specIdFor('OCR', 'H481') === 'OCR-H481' && specIdFor('Eduqas', 'C700') === 'EDQ-C700');

  /* ---------- criterion 11: all four families build a spec that passes the contract ---------- */
  for (const f of ['essay', 'quantitative', 'science', 'language']) {
    const d = deps(f);
    const rec = await runBuild(params(f), d);
    const spec = await d.kv.get('spec:' + rec.id, 'json');
    const v = spec ? validator.validateSpec(spec) : { ok: false, problems: ['no spec published'] };
    ok(`B1 ${f}: published and passes the shared contract`, rec.status === 'published' && v.ok, v.problems.slice(0, 3).join(' | ') || rec.error || rec.status);
    ok(`B1 ${f}: mark style and essay shapes follow the family`, spec && spec.markConventions.style === families.FAMILIES[f].markStyle && (f !== 'essay' || spec.markConventions.essayShapes.length >= 3) && (f !== 'quantitative' || spec.markConventions.essayShapes.length === 0) && spec.essaySubject === families.FAMILIES[f].essaySubject);
    ok(`B1 ${f}: family rules reached the topic prompt (criterion 12)`, d.ai.calls.topicPrompts.every(p => families.FAMILIES[f].rules.every(r => p.includes(r))));
    ok(`B1 ${f}: one model call per topic, one outline, one judge`, d.ai.calls.outline === 1 && d.ai.calls.topic === 3 && d.ai.calls.judge === 1, JSON.stringify(d.ai.calls));
  }

  /* ---------- criterion 6: provenance ---------- */
  {
    const d = deps('science'); const rec = await runBuild(params('science'), d);
    const meta = await d.kv.get('spec-meta:' + rec.id, 'json');
    ok('B2 provenance recorded: source, etag, size, date, models, prompt version, judge, family', meta && meta.source.url && meta.source.etag === '"abc123"' && meta.source.length === 1035984 && meta.source.lastModified && meta.built.at === '2026-09-10T12:00:00.000Z' && meta.built.promptVersion === PROMPT_VERSION && Array.isArray(meta.built.models) && meta.judge.score === 0.92 && meta.family === 'science' && meta.status === 'published', JSON.stringify(meta));
    ok('B2 progress record advances through named stages to done', rec.done === rec.total && rec.total === 3 + 3 + 2 && d.step.names.includes('resources') && /published/i.test(rec.message) && d.step.names.some(n => /outline/i.test(n)) && d.step.names.filter(n => /^topic /.test(n)).length === 3);
  }

  /* ---------- criterion 4: validator gate, corrective retry, refusal ---------- */
  {
    let n = 0; const d = deps('essay');
    d.ai.topic = async (input) => { n++; if (input.topic.id === '3.2' && !input.problems) return { ideas: [idea('3.2.1', 1), { code: '3.2.2', q: 'q', idea: 'i', content: 'short' }], caseStudies: [], skills: [] }; if (input.problems) d.ai.calls.fixPrompts.push(input.prompt); return topicFor('essay', input.topic); };
    const rec = await runBuild(params('essay'), d);
    ok('B3 a thin topic is retried once with the validator\'s problem in the prompt', rec.status === 'published' && n === 4 && d.ai.calls.fixPrompts.length === 1 && /too thin/.test(d.ai.calls.fixPrompts[0]) && /topic "3\.2"/.test(d.ai.calls.fixPrompts[0]), `n=${n} fixPrompts=${d.ai.calls.fixPrompts.length}`);
  }
  {
    const d = deps('essay');
    d.ai.topic = async (input) => input.topic.id === '3.2' ? { ideas: [idea('3.2.1', 1)], caseStudies: [], skills: [] } : topicFor('essay', input.topic);
    const rec = await runBuild(params('essay'), d);
    ok('B4 a topic that still fails after the retry is refused, and nothing is published', rec.status === 'failed' && /3\.2/.test(rec.error) && (await d.kv.get('spec:' + rec.id)) === null && (await d.kv.get('spec-draft:' + rec.id)) === null, rec.error);
  }
  {
    const d = deps('essay');
    let n5 = 0; d.ai.outline = async () => { n5++; return outlineFor('essay', { components: [{ id: 'P1', name: 'Paper 1', marks: 100, weight: 60, minutes: 120 }, { id: 'P2', name: 'Paper 2', marks: 100, weight: 60, minutes: 120 }] }); };
    const rec = await runBuild(params('essay'), d);
    ok('B5 an outline that is still wrong after one corrective retry is refused before any topic is built', rec.status === 'failed' && /sum to 100/.test(rec.error) && n5 === 2 && d.ai.calls.topic === 0, rec.error + ' n=' + n5);
  }
  {
    /* the real first build: cross-cutting sections put on a component called "all" */
    let n = 0, retryPrompt = null; const d = deps('science');
    d.ai.outline = async (input) => { n++; if (input.problems) retryPrompt = input.prompt; if (n === 1) return outlineFor('science', { topics: [{ id: '3', component: 'all', option: null, name: 'Working scientifically' }, { id: '4.1', component: 'P1', option: null, name: 'Cell biology' }, { id: '5.1', component: 'P2', option: null, name: 'Atomic structure' }] }); return outlineFor('science'); };
    const rec = await runBuild(params('science'), d);
    ok('B5b a topic on a made-up component is sent back once with the validator\'s words, then builds', rec.status === 'published' && n === 2 && /component "all" is not one of P1, P2/.test(retryPrompt) && /exactly ONE component/.test(retryPrompt), (rec.error || rec.status) + ' n=' + n);
  }
  {
    const d = deps('essay');
    let n6 = 0; d.ai.outline = async () => { n6++; return outlineFor('essay', { topics: Array.from({ length: 45 }, (_, i) => ({ id: 'T' + i, component: 'P1', option: null, name: 'T' + i })) }); };
    const rec = await runBuild(params('essay'), d);
    ok('B6 a runaway outline (over 40 topics) is refused before spending on topics', rec.status === 'failed' && /40/.test(rec.error) && d.ai.calls.topic === 0 && n6 === 2, rec.error + ' n=' + n6);
  }

  /* ---------- criterion 5: judge below 0.8 → review queue ---------- */
  {
    const d = deps('science'); d.ai.judge = async () => ({ ...goodJudge(), score: 0.6, coverage: 0.6, missing: ['3.4 Genetic information'] });
    const rec = await runBuild(params('science'), d);
    const meta = await d.kv.get('spec-meta:' + rec.id, 'json');
    ok('B7 a doubtful judge score queues the course for review instead of publishing', rec.status === 'review' && (await d.kv.get('spec:' + rec.id)) === null && (await d.kv.get('spec-draft:' + rec.id, 'json')) !== null && meta.status === 'review' && meta.judge.missing[0] === '3.4 Genetic information', rec.status);
    ok('B7 the student-facing message says it is being checked', /checked/i.test(rec.message));
  }

  /* ---------- locating the document when the catalogue has no URL ---------- */
  {
    const d = deps('science'); const p = { ...params('science'), specUrl: null };
    const rec = await runBuild(p, d);
    const meta = await d.kv.get('spec-meta:' + rec.id, 'json');
    ok('B8 without a catalogue URL the builder locates the PDF on the board\'s domain and records it', rec.status === 'published' && d.ai.calls.locate === 1 && meta.source.url.includes('filestore.aqa.org.uk') && meta.source.located === true);
  }
  {
    const d = deps('science'); const p = { ...params('science'), specUrl: null };
    d.ai.locate = async () => ({ url: 'https://evil.example/spec.pdf' });
    const rec = await runBuild(p, d);
    ok('B9 a located URL off the board\'s domain is refused and the course asks for a link', rec.status === 'needs-link' && d.ai.calls.outline === 0 && (await d.kv.get('spec:' + rec.id)) === null, rec.status);
  }
  {
    const d = deps('science'); d.head = async (url) => ({ ok: true, status: 200, contentType: 'text/html', url });
    const rec = await runBuild(params('science'), d);
    ok('B10 a URL that is not a PDF is refused before any model call', rec.status === 'needs-link' && d.ai.calls.outline === 0);
  }

  /* ---------- the monthly pass (criterion 8) ---------- */
  {
    const d = deps('science'); await runBuild(params('science'), d);
    const before = await d.kv.get('spec-meta:AQA-7402', 'json');
    const d2 = { ...d, now: () => '2026-10-01T06:00:00.000Z', ai: ai('science') };
    const r = await runReview('AQA-7402', d2);
    const after = await d2.kv.get('spec-meta:AQA-7402', 'json');
    ok('B11 unchanged document: no model call, no proposal, checkedAt moves on', r.changed === false && d2.ai.calls.outline === 0 && d2.ai.calls.docChanges === 0 && (await d2.kv.get('proposal:AQA-7402')) === null && after.source.checkedAt === '2026-10-01T06:00:00.000Z' && before.source.checkedAt !== after.source.checkedAt);
  }
  {
    const d = deps('science'); await runBuild(params('science'), d);
    const d2 = { ...d, now: () => '2026-10-01T06:00:00.000Z', ai: ai('science'), head: async (url) => ({ ...(await headOk(url)), etag: '"changed"', length: 1100000 }) };
    d2.ai.outline = async () => outlineFor('science', { version: 'Specification issue 4 (2026)', topics: [{ id: '3.1', component: 'P1', option: null, name: 'Topic one' }, { id: '3.2', component: 'P1', option: null, name: 'Topic two, renamed' }, { id: '3.4', component: 'P2', option: null, name: 'Topic four' }] });
    const r = await runReview('AQA-7402', d2);
    const prop = await d2.kv.get('proposal:AQA-7402', 'json');
    ok('B12 changed document: the course is rebuilt to a draft and a proposal is filed, nothing published', r.changed === true && prop && (await d2.kv.get('spec:AQA-7402', 'json')).version === 'Specification issue 3 (2024)' && (await d2.kv.get('spec-draft:AQA-7402', 'json')).version === 'Specification issue 4 (2026)');
    ok('B12 the proposal is topic-level, carries the document\'s own statement of changes, and is marked breaking because a topic was removed', prop.breaking === true && prop.changes.some(c => c.kind === 'topic-removed' && c.topic === '3.3') && prop.changes.some(c => c.kind === 'topic-added' && c.topic === '3.4') && prop.changes.some(c => c.kind === 'topic-renamed' && c.topic === '3.2') && prop.docChanges[0].includes('Issue 3'), JSON.stringify(prop && prop.changes));
  }
  {
    const a = outlineFor('essay'); a.topics = a.topics.map(t => ({ ...t, ideas: [idea(t.id + '.1', 1), idea(t.id + '.2', 2)], caseStudies: [] }));
    const b = JSON.parse(JSON.stringify(a)); b.topics[0].ideas[1].content += ' Extra sentence.'; b.components[0].weight = 45; b.components[1].weight = 55;
    const diff = diffSpecs(a, b);
    ok('B13 an additive change (idea wording, weights) is not breaking', diff.breaking === false && diff.changes.some(c => c.kind === 'idea-changed') && diff.changes.some(c => c.kind === 'component-changed'));
  }

  /* ---------- criterion 12: the skill reference is generated from the same source ---------- */
  try { execFileSync(process.execPath, [path.join(__dirname, '..', 'scripts', 'sync-skill.js'), '--check'], { stdio: 'pipe' }); ok('B14 skill families.md is in sync with src/families.js', true); }
  catch (e) { ok('B14 skill families.md is in sync with src/families.js', false, String(e.stdout || e.stderr || e.message)); }
  ok('B15 the outline and judge prompts quote the family rules too', families.FAMILIES.language.rules.every(r => prompts.outline({ level: 'GCSE', subject: 'French', board: 'AQA', code: '8652', family: 'language' }).includes(r)) && prompts.judge({ family: 'science' }).includes(families.FAMILIES.science.rules[3]));

  /* ---------- three-panel GUI, criterion 11: the resources step ---------- */
  {
    const d = deps('science', { head: async (url) => /gone\.example/.test(url) ? { ok: false, status: 404, contentType: '' } : headOk(url) });
    const rec = await runBuild(params('science'), d);
    const spec = await d.kv.get('spec:' + rec.id, 'json');
    ok('R1 the resources step finds hub pages, checks each one and keeps only the live https ones', rec.status === 'published' && spec && spec.resources && spec.resources.hubs.length === 2 && spec.resources.hubs.every(h => /^https:\/\//.test(h.url)) && !spec.resources.hubs.some(h => /gone|insecure/.test(h.url)) && d.step.names.includes('resources'), JSON.stringify(spec && spec.resources) + ' ' + rec.status + ' ' + (rec.error || ''));
    ok('R1 the resources prompt names the board, level, subject and code', d.ai.calls.resources === 1 && /AQA/.test(d.ai.calls.resourcePrompts[0]) && /Biology/.test(d.ai.calls.resourcePrompts[0]) && /7402/.test(d.ai.calls.resourcePrompts[0]) && /A level/.test(d.ai.calls.resourcePrompts[0]));
    ok('R1 the hubs are on the course record for the admin too, with a stamp', (() => { const m = d.kv._map.get('spec-meta:' + rec.id); const j = m && JSON.parse(m); return j && j.resources && j.resources.hubs.length === 2 && !!j.resources.at; })());
    ok('R1 the published spec still passes the contract with resources in it', validator.validateSpec(spec).ok);
    ok('R1 the build’s progress counted the resources stage', rec.total === 5 + 3 && rec.done === rec.total, `${rec.done}/${rec.total}`);
  }
  {
    const d = deps('science'); d.ai.resources = async () => { throw new Error('search unavailable'); };
    const rec = await runBuild(params('science'), d);
    const spec = await d.kv.get('spec:' + rec.id, 'json');
    ok('R2 a failure in the resources step never fails the build: published with no hubs and the reason recorded', rec.status === 'published' && spec && spec.resources && spec.resources.hubs.length === 0 && /search unavailable/.test(spec.resources.error || ''), rec.status + ' ' + JSON.stringify(spec && spec.resources));
  }
  {
    const d = deps('science'); delete d.ai.resources;
    const rec = await runBuild(params('science'), d);
    ok('R3 an AI client without a resources method still builds and publishes', rec.status === 'published' && (await d.kv.get('spec:' + rec.id, 'json')).resources.hubs.length === 0);
  }

  console.log('PASSED: ' + pass); console.log('-'.repeat(50));
  if (fails.length) { console.log('FAILED:'); fails.forEach(f => console.log('  ' + f)); process.exit(1); }
  console.log('RESULT: ALL GREEN');
})().catch(e => { console.error(e); process.exit(1); });
