/* Visual proof: drives the built app in a real browser against a stub of the tutor Worker and
   screenshots the course flow — the dropdowns, the build in progress, the course added with its
   provenance, and the Admin review queue. `npm run proof` writes docs/proof/*.png.
   The stub answers the same routes the Worker does, with a build that advances one step per poll. */
const http = require('http'), fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const { chromium } = require('playwright');
const { sampleKit } = require('../tests/_kit.js');

const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'docs', 'proof');
const PORT = 8787, ORIGIN = `http://127.0.0.1:${PORT}`;
fs.mkdirSync(OUT, { recursive: true });

/* a build of the app that talks to the stub */
execSync(`node build.js`, { cwd: ROOT, env: { ...process.env, TUTOR_URL: ORIGIN }, stdio: 'pipe' });
const html = fs.readFileSync(path.join(ROOT, 'dist', 'index.html'), 'utf8');
execSync(`node build.js`, { cwd: ROOT, stdio: 'pipe' });   // and put the real build back

/* realistic data: a Biology spec shaped like the real ones */
const maths = Object.values(require(path.join(ROOT, 'src', 'specs', 'edexcel-9ma0.js')))[0];
const biology = JSON.parse(JSON.stringify(maths));
Object.assign(biology, { id: 'AQA-7402', board: 'AQA', subject: 'Biology', code: '7402', level: 'A level', version: 'Specification 7402, version 1.4 (September 2019)', firstExam: 2017, essaySubject: false });
biology.topics = ['3.1 Biological molecules', '3.2 Cells', '3.3 Organisms exchange substances with their environment', '3.4 Genetic information, variation and relationships', '3.5 Energy transfers in and between organisms', '3.6 Organisms respond to changes', '3.7 Genetics, populations, evolution and ecosystems', '3.8 The control of gene expression', 'Required practicals 1–12']
  .map((n, i) => ({ id: n.split(' ')[0].replace(/^Required/, 'RP'), component: maths.components[i % 2].id, option: null, name: n, caseStudies: i === 8 ? ['RP1 Microscopy', 'RP2 Root tip squash', 'RP3 Osmosis'] : [], ideas: [{ code: `${i + 1}.1`, q: 'What must I know?', idea: n.split(' ').slice(1).join(' '), content: 'The specification statement in the board’s own terms, with the calculation or mechanism it entails.' }, { code: `${i + 1}.2`, q: 'What must I be able to do?', idea: 'Application', content: 'Apply the idea to unfamiliar contexts, including data and practical scenarios.' }] }));
const CATALOGUE = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalogue.json'), 'utf8')).qualifications.map(q => ({ ...q, id: (q.board === 'Pearson Edexcel' ? 'EDX' : q.board === 'Eduqas' ? 'EDQ' : q.board) + '-' + q.code, hasUrl: !!q.specUrl }));
/* a student a term in: five courses, mixed mastery, cards due, a marked essay, four days' streak */
const core = require(path.join(ROOT, 'src', 'core.js'));
const SPECS = {}; for (const sp of Object.values({ ...require(path.join(ROOT, 'src', 'specs', 'ocr-h481.js')), ...require(path.join(ROOT, 'src', 'specs', 'edexcel-9ma0.js')), ...require(path.join(ROOT, 'src', 'specs', 'edexcel-4gn1.js')), ...require(path.join(ROOT, 'src', 'specs', 'edexcel-4ma1.js')) })) SPECS[sp.id] = sp; SPECS['AQA-7402'] = biology;
const setup = { student: 'Matthew', examYear: 2028, subjects: [{ specId: 'OCR-H481', options: { landscape: '1.1.1', globalSystems: '2.2.1', globalGovernance: '2.2.4', debates: ['3.1', '3.5'] } }, { specId: 'EDX-9MA0', options: {} }, { specId: 'AQA-7402', options: {} }, { specId: 'EDX-4GN1', options: {} }, { specId: 'EDX-4MA1', options: {} }] };
const progress = core.newState(setup, SPECS); progress.created = '2026-09-01';
/* real papers: a stand-in for the tutor's attempt routes, answering as the Worker would once the model has spoken */
const ATTEMPTS = {}; let nextAttempt = 1;
const QMAP = { questions: [{ q: '1', marks: 6, topic: '1.2', codes: ['1.a'], mode: 'points', command: 'Explain' }, { q: '2', marks: 10, topic: '2.1', codes: [], mode: 'levels', command: 'Assess' }, { q: '3', marks: 4, topic: '2.2.1', codes: [], mode: 'points', command: 'Describe' }] };
const POINTS = { 1: { points: [{ text: 'Names a store of carbon', max: 1 }, { text: 'Explains a flow between two stores', max: 3 }, { text: 'Gives a figure or rate', max: 2 }] }, 2: { points: [{ text: 'Level 3: developed and evaluative', max: 10 }, { text: 'Level 2: clear with some development', max: 7 }, { text: 'Level 1: basic', max: 4 }] }, 3: { points: [{ text: 'Two features of the landform', max: 2 }, { text: 'Names the process', max: 2 }] } };
function papersStub(p, m, req, body) {
  const R = (status, b) => ({ status, body: b });
  if (p === '/papers/admin/boards') return R(200, { off: [] });
  if (p === '/papers' && m === 'POST') { const id = 'pa' + (nextAttempt++); ATTEMPTS[id] = { id, at: new Date().toISOString(), status: 'pages', ...body, pages: [], assign: {}, confidence: {}, attempted: {}, transcripts: {}, ticks: {}, results: {}, points: {}, job: null }; return R(200, { attempt: ATTEMPTS[id] }); }
  const mm = p.match(/^\/papers\/([^/]+)(?:\/(.*))?$/); if (!mm) return null; const A = ATTEMPTS[mm[1]]; if (!A) return R(404, { error: 'not found' }); const sub = mm[2] || '';
  if (!sub && m === 'GET') return R(200, { attempt: A });
  if (!sub && m === 'PATCH') { for (const k of ['assign', 'confidence', 'attempted', 'ticks']) if (body[k]) A[k] = Object.assign(A[k] || {}, body[k]); if (body.transcripts) for (const [q, t] of Object.entries(body.transcripts)) A.transcripts[q] = Object.assign(A.transcripts[q] || {}, t, { edited: true }); return R(200, { attempt: A }); }
  if (sub === 'pages/upload' && m === 'POST') { const pg = { id: 'pg' + (A.pages.length + 1), n: A.pages.length + 1, size: 1000, type: 'image/jpeg', thumb: null }; A.pages.push(pg); return R(200, { page: pg }); }
  const pm = sub.match(/^pages\/([^/]+)$/); if (pm) { const pg = A.pages.find(x => x.id === pm[1]); if (m === 'PATCH' && pg) Object.assign(pg, body); if (m === 'DELETE') A.pages = A.pages.filter(x => x.id !== pm[1]); return R(200, { page: pg }); }
  if (sub === 'questions' && m === 'POST') { A.questions = QMAP; return R(200, { questions: QMAP }); }
  if (sub === 'prepare' && m === 'POST') { for (const q of QMAP.questions) { if (A.attempted[q.q] === false || !(A.assign[q.q] || []).length) continue; A.transcripts[q.q] = q.q === '3' ? { transcript: '', legibility: 'unreadable', unsure: [], blank: false } : { transcript: 'Carbon is stored in the oceans. It moves from the atmosphere into the sea by dissolving, about 2 GtC a year.', legibility: 'ok', unsure: ['dissolving'], blank: false }; A.points[q.q] = POINTS[q.q]; } A.job = { stage: 'prepare', status: 'done', done: 3, total: 3, message: 'Read 3 answers' }; return R(202, { job: A.job }); }
  if (sub === 'mark' && m === 'POST') { for (const q of QMAP.questions) { const t = A.transcripts[q.q]; if (!t) { if (A.attempted[q.q] === false) A.results[q.q] = { awarded: 0, max: q.marks, attempted: false }; continue; } if (t.legibility === 'unreadable') { A.results[q.q] = { awarded: null, max: q.marks, legibility: 'unreadable' }; continue; } A.results[q.q] = { awarded: 4, max: 6, lines: [{ i: 1, awarded: 1, evidence: 'stored in the oceans' }, { i: 2, awarded: 3, evidence: 'moves from the atmosphere into the sea' }, { i: 3, awarded: 0, missing: 'no figure given' }], failureMode: 'RECALL-GAP', note: 'Most answers that lost marks here gave no figure; a full-mark answer named a rate such as 2 GtC a year. Learn one figure for every flow you can name.', disagree: [3] }; } A.status = 'marked'; A.score = Object.values(A.results).reduce((a, r) => a + (r.awarded || 0), 0); A.total = A.marks; A.job = { stage: 'mark', status: 'done', done: 3, total: 3, message: 'Marked' }; return R(202, { job: A.job }); }
  const qm = sub.match(/^questions\/([^/]+)\/mark$/); if (qm && m === 'POST') { A.results[qm[1]] = { awarded: 4, max: 4, lines: [{ i: 1, awarded: 2, evidence: 'steep cliff' }, { i: 2, awarded: 2, evidence: 'hydraulic action' }], failureMode: 'NONE', note: 'Full marks.' }; return R(200, { result: A.results[qm[1]] }); }
  if (sub === 'status') return R(200, { job: A.job, status: A.status, score: A.score, total: A.total });
  return R(404, { error: 'no such papers route' });
}
const set = (id, st, last) => { const n = progress.nodes[id]; if (n) { n.state = st; n.lastPractised = last; } };
set('OCR-H481|1.2', 'Fluent', '2026-09-08'); set('OCR-H481|1.1.1', 'Secure', '2026-08-30'); set('OCR-H481|2.1', 'Learning', '2026-09-09'); set('OCR-H481|3.1', 'Learning', '2026-09-02');
set('EDX-9MA0|P2', 'Secure', '2026-09-01'); set('EDX-9MA0|P3', 'Fluent', '2026-09-07'); set('EDX-9MA0|P4', 'Learning', '2026-09-09'); set('EDX-9MA0|P7', 'Learning', '2026-09-05');
set('AQA-7402|3.1', 'Learning', '2026-09-09'); set('AQA-7402|3.2', 'Fluent', '2026-09-06');
const today = new Date().toISOString().slice(0, 10), daysAgo = n => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
[['OCR-H481|1.2', 'Name the four major stores in the water cycle', 'Hydrosphere, lithosphere, cryosphere, atmosphere', '1.2.1'], ['OCR-H481|1.2', 'What is carbon sequestration?', 'The capture and long-term storage of carbon, e.g. in ocean sediments', '1.2.3'], ['OCR-H481|1.2', 'Amazon: what share of global rainforest carbon?', 'About 17% of terrestrial vegetation carbon; 1 year of drought in 2005 released ~0.3 GtC', '1.2.6'], ['EDX-9MA0|P7', 'd/dx of x^n', 'n x^(n−1)', 'P7.1'], ['EDX-9MA0|P7', 'Condition for a stationary point', 'dy/dx = 0; classify with d²y/dx² or a sign change', 'P7.3'], ['AQA-7402|3.1', 'Condensation reaction', 'Two molecules join with the loss of a water molecule', '3.1.1']].forEach(([node, front, back, code], i) => { progress.cards['c' + i] = { node, front, back, code, due: i < 5 ? today : daysAgo(-3), ease: 1, reps: 1 }; });
progress.errors = [{ date: daysAgo(1), node: 'OCR-H481|1.2', ref: 'To what extent are the water and carbon cycles linked?', mode: 'EVALUATION', fix: 'End every paragraph with a mini-judgement and answer the exact question in the conclusion.', score: '21/33' }, { date: daysAgo(2), node: 'EDX-9MA0|P7', ref: 'Find the stationary points of y = x³ − 6x² + 5', mode: 'EXAM-TECHNIQUE', fix: 'Write the y-values as well as the x-values.' }, { date: daysAgo(3), node: 'OCR-H481|1.2', ref: 'Card: What is carbon sequestration?', mode: 'RECALL-GAP', fix: 'The capture and long-term storage of carbon' }];
progress.essays = [{ date: daysAgo(1), node: 'OCR-H481|1.2', q: 'To what extent are the water and carbon cycles linked?', marks: 33, level: 3, maxLevel: 4, mark: 21, max: 33, mode: 'EVALUATION' }];
progress.dayHours = { [daysAgo(4)]: 1.2, [daysAgo(3)]: 0.8, [daysAgo(2)]: 1.5, [daysAgo(1)]: 1.1 }; progress.hours = 4.6;
progress.boundaries['OCR-H481'] = { 'A*': 82, A: 74, B: 64, C: 54, D: 44, E: 34 };
/* a written and checked kit for one biology room, and the course's depth record: one room done, one failed, the rest being written */
const kitTopic = () => biology.topics.find(t => t.id === '3.1');
const kit = Object.assign(sampleKit(kitTopic(), 'science'), { id: 'AQA-7402', topic: '3.1', family: 'science', built: { at: '2026-09-10T15:40:00Z', models: ['claude-sonnet-5', 'claude-opus-5'], promptVersion: '2026-09-10.1', judge: { score: 0.93, notes: 'Answer keys verified; the lesson follows the specification statements.' } } });
kit.lesson.why = 'Biological molecules underpin every other topic in this course: enzymes, membranes, DNA and metabolism are all questions about carbohydrates, lipids, proteins and nucleic acids. Paper 1 examines this section directly and Paper 3 draws on it in the essay, so the definitions and the tests have to be automatic.';
kit.lesson.idea[0] = { h: 'Monomers, polymers and condensation', t: 'Carbohydrates, proteins and nucleic acids are polymers built from monomers by condensation reactions that remove a molecule of water; hydrolysis reverses this by adding one. The exam asks you to name the bond formed (glycosidic, peptide, phosphodiester) and to draw or recognise the reaction, so learn the pattern once and apply it to every family.', code: kitTopic().ideas[0].code };
kit.lesson.examples[0] = { title: 'Explain how a disaccharide is formed from two monosaccharides', steps: ['Two monosaccharides are joined by a condensation reaction.', 'A molecule of water is removed.', 'A glycosidic bond forms between the two monosaccharides.'] };
kit.room.facts = ['Condensation joins monomers with the loss of water; hydrolysis splits them by adding water.', 'Glycosidic bonds join monosaccharides; peptide bonds join amino acids; phosphodiester bonds join nucleotides.', 'Benedict’s test: reducing sugars give a brick-red precipitate on heating; non-reducing sugars need acid hydrolysis first.'];
kit.room.questions[0] = { q: 'Name the bond formed when two amino acids join, and the type of reaction that forms it.', a: 'Peptide bond; condensation', sol: 'A condensation reaction between the amine group of one amino acid and the carboxyl group of the next removes a molecule of water and forms a peptide bond.', m: 2, d: 1, hints: ['Think about what is removed when monomers join.', 'The reaction that removes water has a name.', 'Amine + carboxyl → … bond, with H₂O lost.'], codes: [kitTopic().ideas[0].code] };
kit.extras = [{ kind: 'practical', title: 'Required practical 1: microscopy — method sheet', items: ['Prepare a temporary mount: a drop of water, the specimen, a coverslip lowered at an angle to avoid air bubbles.', 'Independent variable: specimen; dependent: image; control: magnification and stain.', 'Skills assessed: AT d, AT e, WS 2.1.'] }, { kind: 'extended', title: 'Six-mark model answer: describe how you would test a solution for a non-reducing sugar', items: ['Test with Benedict’s first: no colour change. Hydrolyse with dilute HCl, neutralise with sodium hydrogencarbonate, re-test with Benedict’s: brick-red precipitate shows a non-reducing sugar was present. A Level 1 answer forgets the neutralising step.'] }];
const depthRec = { status: 'building', total: biology.topics.length, done: { '3.1': kit.built.at }, failed: ['3.3'] };
const nudge = { text: 'Matthew, your last two Geography essays lost the judgement marks: plan and mark one more 33-marker in Earth’s life support systems before the maths cards.', node: 'OCR-H481|1.2', station: 'essay' };
const users = { 'tok-matthew': { username: 'matthew', name: 'Matthew', role: 'student', daily: 200 }, 'tok-student': { username: 'matthew', name: 'Matthew', role: 'student', daily: 200 }, 'tok-admin': { username: 'chris', name: 'Chris', role: 'admin', daily: 2000 } };
let build = null; const states = { 'OCR-H432': { status: 'retracted' } }; const requests = []; let builds = 0;
const stages = ['Finding the official specification…', 'Reading the specification document…', 'Mapping topic 1 of 9…', 'Mapping topic 2 of 9…', 'Mapping topic 3 of 9…', 'Mapping topic 4 of 9…', 'Mapping topic 5 of 9…', 'Mapping topic 6 of 9…', 'Mapping topic 7 of 9…', 'Mapping topic 8 of 9…', 'Mapping topic 9 of 9…', 'Checking the whole map…', 'Judging the map against the document…'];
const meta = { id: 'AQA-7402', level: 'A level', subject: 'Biology', board: 'AQA', code: '7402', family: 'science', status: 'published', source: { url: 'https://filestore.aqa.org.uk/resources/biology/specifications/AQA-7402-SP-2015.PDF', etag: '"5f2a-6132b0c7a1d80"', lastModified: 'Wed, 03 Sep 2025 09:12:44 GMT', length: 1849302, checkedAt: '2026-09-10T12:04:31Z' }, built: { at: '2026-09-10T12:04:31Z', models: ['claude-opus-5', 'claude-sonnet-5', 'claude-opus-5'], promptVersion: '2026-09-10.1', ideas: 18 }, judge: { score: 0.91 } };
const proposal = { kind: 'proposal', id: 'AQA-7402', subject: 'Biology', board: 'AQA', code: '7402', level: 'A level', createdAt: '2026-10-01T06:02:10Z', breaking: true, oldVersion: 'Specification 7402, version 1.4 (September 2019)', newVersion: 'Specification 7402, version 1.5 (June 2026)', docChanges: ['Version 1.5 clarifies the required practical apparatus list for RP7 and RP9.', 'Section 3.8.4 (gene technologies) is reworded; no change to assessed content.'], changes: [{ kind: 'topic-removed', topic: 'RP', detail: 'Required practicals 1–12 (now listed under each topic)', breaking: true }, { kind: 'idea-changed', topic: '3.8', detail: '8.1', breaking: false }, { kind: 'idea-added', topic: '3.3', detail: '3.3 RP7 apparatus', breaking: false }, { kind: 'version', topic: null, detail: 'v1.4 → v1.5', breaking: false }] };

const server = http.createServer((req, res) => {
  const url = new URL(req.url, ORIGIN), p = url.pathname, m = req.method;
  const send = (status, body, type = 'application/json') => { res.writeHead(status, { 'Content-Type': type, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS' }); res.end(typeof body === 'string' ? body : JSON.stringify(body)); };
  if (m === 'OPTIONS') return send(204, '');
  if (p === '/' && m === 'GET') return send(200, html, 'text/html; charset=utf-8');
  if (/^\/papers\/[^/]+\.json$/.test(p) && m === 'GET') { const f = path.join(ROOT, 'dist', decodeURIComponent(p)); return fs.existsSync(f) ? send(200, fs.readFileSync(f, 'utf8')) : send(404, { error: 'no index' }); }
  if (/^\/kits\/[^/]+\/[^/]+\.json$/.test(p) && m === 'GET') { /* the site serves the hand-built kits next to the page */ const f = path.join(ROOT, 'dist', decodeURIComponent(p)); return fs.existsSync(f) ? send(200, fs.readFileSync(f, 'utf8')) : send(404, { error: 'no such kit' }); }
  const tok = (req.headers.authorization || '').replace('Bearer ', ''); const me = users[tok];
  let raw = ''; req.on('data', c => raw += c); req.on('end', () => {
    let body = {}; try { body = raw && /json/.test(req.headers['content-type'] || '') ? JSON.parse(raw) : {}; } catch (e) { body = {}; }
    if (p === '/auth/me') return me ? send(200, { user: me }) : send(401, { error: 'not signed in' });
    if (p === '/papers' || p.startsWith('/papers/')) { const r = papersStub(p, m, req, body); if (r) return send(r.status, r.body); }
    if (p === '/tts' && m === 'POST') return send(503, { error: 'The tutor voice is not set up on the tutor service (no AI binding). The device voice still works.' });
    if (p === '/videos' && m === 'POST') return send(200, body.spec === 'EDX-4GN1' && body.topic === 'A' ? { items: [{ id: 'abc123def45', url: 'https://www.youtube.com/watch?v=abc123def45', title: 'GCSE German: describing your house and home', channel: 'German with Anna', length: '9:12', why: 'Covers rooms, furniture and describing where you live.', image: '' }, { id: 'def456ghi78', url: 'https://www.youtube.com/watch?v=def456ghi78', title: 'GCSE German: my town and region', channel: 'Deutsch für Alle', length: '11:40', why: 'Covers your town, the countryside and giving directions.', image: '' }], at: '2026-09-12T08:00:00Z' } : { items: [], at: '2026-09-12T08:00:00Z' });
    if (p === '/' && m === 'POST') { /* the AI proxy: the nudge by default; the floating coach and the chunker get their own replies */
      const q = String(body && body.messages && body.messages[0] && body.messages[0].content && body.messages[0].content[0] && body.messages[0].content[0].text || ''); let out = nudge;
      if (/WHAT YOU CAN SEE NOW/.test(q)) out = { text: 'Which store does the question start from, Matthew? Name it, then say where that carbon goes next.', open: null, view: null };
      else if (/Break this study step/.test(q)) { const mm = +(q.match(/add up to (\d+) minutes/) || [])[1] || 10; const texts = ['Open the flash cards', 'Turn the first card over', 'Say the answer out loud first', 'Mark it Right or Wrong honestly', 'Keep going to the last card']; const base = Math.floor(mm / 5); const rem = mm - base * 5; out = { steps: texts.map((text, i) => ({ text, minutes: Math.max(1, base + (i < rem ? 1 : 0)) })) }; }
      return send(200, { id: 'msg_1', content: [{ type: 'text', text: JSON.stringify(out) }] }); }
    if (p === '/progress') return m === 'GET' ? (tok === 'tok-matthew' ? send(200, { updatedAt: new Date().toISOString(), device: 'an iPad', state: progress }) : send(404, { error: 'nothing saved yet' })) : send(200, { ok: true, updatedAt: new Date().toISOString() });
    if (p === '/courses/build') builds++;
    if (p === '/courses') return send(200, { catalogue: CATALOGUE, courses: states, building: build && build.status === 'building' ? { [build.id]: build } : {}, depth: { 'AQA-7402': depthRec } });
    if (/^\/courses\/AQA-7402\/kit\/3\.1$/.test(p)) return send(200, { kit });
    if (/^\/courses\/[^/]+\/kit\//.test(p)) return send(404, { error: 'no kit for that room yet' });
    if (p === '/courses/request') { if (states['AQA-7402'] && states['AQA-7402'].status === 'published') return send(200, { status: 'published', id: 'AQA-7402' }); requests.push(body); states['AQA-7402'] = { status: 'published' }; /* Chris maps it straight away in this scenario */ return send(202, { status: 'requested', id: 'AQA-7402', count: 1, message: 'Sent to Chris. Biology (AQA) will be mapped for you, and you can add it once it is ready.' }); }
    if (p === '/courses/build') { if (states['AQA-7402'] && states['AQA-7402'].status === 'published') return send(200, { status: 'published', id: 'AQA-7402' }); build = { id: 'AQA-7402', status: 'building', stage: 'Finding the specification', done: 0, total: 13, message: stages[0] }; return send(202, { status: 'building', id: 'AQA-7402', joined: false, build }); }
    if (/^\/courses\/[^/]+\/status$/.test(p)) { if (build && build.status === 'building') { build.done = Math.min(build.done + 1, build.total); build.message = stages[build.done] || 'Judging the map against the document…'; build.stage = build.done < 2 ? 'Reading the specification' : build.done < 11 ? 'Mapping topics' : 'Judging against the document'; if (build.done >= build.total) { build.status = 'published'; build.message = 'Published — judged 91% faithful to the document.'; states['AQA-7402'] = { status: 'published' }; } } return send(200, { id: 'AQA-7402', status: build ? build.status : 'none', build, meta: build && build.status === 'published' ? meta : null }); }
    if (/^\/courses\/[^/]+\/spec$/.test(p)) return (tok === 'tok-matthew' || (states['AQA-7402'] && states['AQA-7402'].status === 'published')) ? send(200, { spec: biology, meta }) : send(404, { error: 'not published' });
    if (p === '/manage/users') return send(200, { users: [users['tok-admin'], { ...users['tok-student'], created: '2026-09-10', hasPassword: true, today: 14, lastSeen: '2026-09-10T11:40:00Z', device: 'an iPad' }], site: ORIGIN });
    if (p === '/manage/courses') return send(200, { courses: [{ ...meta, depth: { ...depthRec, failed: [{ topic: '3.3', problems: ['question 7: the answer key gives 0.25 mm but the solution works to 0.025 mm', 'lesson.idea[2]: contradicts the specification on the direction of water movement'] }], calls: 27, promptVersion: '2026-09-10.1' }, build: { status: 'published', done: 13, total: 13 }, proposal: { createdAt: proposal.createdAt, breaking: true, count: 4 }, pending: true }], lastRun: { at: '2026-10-01T06:00:00Z', courses: ['AQA-7402'] }, catalogueExtra: [] });
    if (p === '/manage/reviews') return send(200, { items: [{ kind: 'request', id: 'AQA-8300', subject: 'Mathematics', board: 'AQA', code: '8300', level: 'GCSE', requestedBy: 'Kitty', count: 1, updatedAt: '2026-09-12T09:05:00Z', inCatalogue: true, building: false }, proposal, { kind: 'needs-link', id: 'OCR-H420', subject: 'Biology', board: 'OCR', code: 'H420', level: 'A level', requestedBy: 'kitty', error: 'the located URL is not on OCR\'s domain', updatedAt: '2026-09-10T13:10:00Z' }] });
    return send(404, { error: 'not found' });
  });
});

(async () => {
  await new Promise(r => server.listen(PORT, r));
  if (process.argv.includes('--serve')) { console.log('stub tutor and app serving at', ORIGIN, '— sign in with tok-student, tok-matthew or tok-admin in localStorage platform:session'); return; }
  const browser = await chromium.launch(fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {});
  const shots = [];
  const snap = async (page, name, note) => { const file = path.join(OUT, name + '.png'); await page.screenshot({ path: file, fullPage: false }); shots.push({ name, note, file }); console.log('  shot', name); };
  const open = async (token, viewport, ready = '#crsSubject, #adCreate') => { const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2 }); await ctx.addInitScript(t => { try { localStorage.setItem('platform:session', t); } catch (e) {} }, token); const page = await ctx.newPage(); await page.goto(ORIGIN + '/'); await page.waitForSelector(ready, { timeout: 15000 }); return page; };
  const box = async (page, sel) => { const b = await page.locator(sel).first().boundingBox(); if (!b) throw new Error('no box for ' + sel); return b; };
  const must = (cond, why) => { if (!cond) throw new Error('VISUAL CHECK FAILED: ' + why); console.log('  ok  ', why); };

  /* 1. a student's setup screen: level, subject, board, Add */
  let page = await open('tok-student', { width: 1180, height: 900 });
  await page.selectOption('#crsSubject', 'Biology');
  await page.waitForSelector('#crsBoard');
  await snap(page, '1-setup-dropdowns', 'Level → Subject → Board; AQA Biology is "not mapped yet, ask Chris"');

  /* 2. Add → no build; a message goes to Chris */
  await page.click('#crsAdd');
  await page.waitForSelector('#buildBox [data-build-status="requested"]', { timeout: 10000 });
  must(requests.length === 1 && requests[0].code === '7402' && builds === 0 && /Sent to Chris/.test(await page.locator('#buildBox').textContent()), 'Add for an unmapped course sends Chris a request and starts no build');
  await snap(page, '2-course-requested', 'Add for an unmapped course: no build starts; the student is told Chris has been sent a message');
  await page.click('#buildDismiss');
  await page.click('#crsAdd');   // Chris has mapped it by now in this scenario

  /* 3. published → added, with provenance */
  await page.waitForFunction(() => /data-su="AQA-7402" checked/.test(document.body.innerHTML), null, { timeout: 60000 });
  await page.evaluate(() => document.querySelector('#buildBox') && document.querySelector('#buildBox').scrollIntoView());
  await snap(page, '3-course-added', 'Added, with the provenance line: document, checked date, judge score');
  await page.context().close();

  /* 4. the admin's review queue and course list */
  page = await open('tok-admin', { width: 1180, height: 1100 });
  await page.waitForSelector('#adReviews .entry', { timeout: 15000 });
  await page.evaluate(() => document.querySelector('#adReviews').scrollIntoView());
  await snap(page, '4-admin-review-queue', 'A breaking proposal from the monthly pass with the topic-level diff and the document\'s own words, and a course that needs a link');
  await page.evaluate(() => document.querySelector('#adCourses').scrollIntoView());
  await snap(page, '5-admin-courses', 'The course list: provenance, models, prompt version, judge, last monthly run, retract / check now');
  await page.context().close();

  /* 6–9. the campus (tooler criteria 1, 3, 4, 5, 6, 7, 9, 11, 13): campus home, corridor, classroom with the wall, phone */
  page = await open('tok-matthew', { width: 1280, height: 900 }, '#v-campus .campus');
  await page.waitForFunction(() => /Matthew,/.test(document.querySelector('#v-campus').textContent), null, { timeout: 15000 });
  must((await page.locator('#v-campus .bldg[data-bldg]').count()) === 5 && (await page.locator('#v-campus [data-bldg-view="exam"]').count()) === 1 && (await page.locator('#v-campus [data-bldg-view="office"]').count()) === 1, 'campus: five subject buildings, the Exam Hall and the Office');
  must((await page.locator('#qBar [data-course]').count()) === 5 && (await page.locator('#qBar [data-v="exam"]').count()) === 1 && (await page.locator('#qBar [data-v="office"]').count()) === 1 && !(await page.locator('nav.bottom').isVisible()), '1280px: the quick bar carries every course, the Exam Hall and the Office; no bottom bar');
  must(/Now ·/.test(await page.locator('#v-campus .board').textContent()) && (await page.locator('#v-campus .act.go').count()) === 1 && /From Coach/.test(await page.locator('#v-campus .board').textContent()) && /Then today/.test(await page.locator('#v-campus .board').textContent()), 'the notice board: Now with Go, the coach’s note, the rest of today');
  must((await page.locator('#v-campus .hint[data-hint="campus"]').count()) === 1, 'first visit: the campus hint is up');
  must(/day streak/.test(await page.locator('#status').textContent()) && (await page.locator('#status').isVisible()), 'status strip visible with the streak');
  const doorFill = await page.locator('#v-campus .bldg[data-bldg="OCR-H481"] polygon[fill="#2B4C7E"]').count();
  must(doorFill >= 1, 'the Geography building’s door wears Geography’s colour');
  await snap(page, '6-campus', 'The campus: one building per subject with its colour on the door, lit windows for progress and a flag for what is due; the Exam Hall and the Office; the notice board says what to do now, with the coach’s note and the rest of the day; the quick bar under the date');
  await page.click('#v-campus [data-cards]');
  await page.waitForSelector('#v-today .fc', { timeout: 5000 });
  await page.locator('#v-today .fc').scrollIntoViewIfNeeded();
  must((await page.locator('#v-today .fc.flipped').count()) === 0 && /Turn over/.test(await page.locator('#v-today .fc').textContent()), 'flash card review: an index card, question up');
  const band = await page.locator('#v-today .fc-front .fc-band').evaluate(e => getComputedStyle(e).backgroundColor);
  const chip = await page.locator('#qBar [data-course="OCR-H481"] i').evaluate(e => getComputedStyle(e).borderColor);
  must(band === 'rgb(43, 76, 126)' && /rgb\(43, 76, 126\)/.test(chip), `the card wears Geography's colour, the same as its chip on the quick bar (band ${band}, chip ${chip})`);
  await snap(page, '20-flash-card-front', 'Flash card review: an index card in the subject’s colour, question up, matching the course’s chip on the quick bar');
  await page.click('#v-today .fc');
  await page.waitForSelector('#v-today .fc.flipped', { timeout: 5000 });
  await page.waitForTimeout(700);
  must((await page.locator('#v-today [data-cardres="1"]').count()) === 1 && (await page.locator('#v-today [data-cardres="0"]').count()) === 1, 'turned over: the answer face is up and Right / Wrong are offered');
  await snap(page, '21-flash-card-back', 'The same card turned over: the answer on the back, Right and Wrong to mark yourself');
  await page.click('#v-today [data-cardres="1"]');
  /* the corridor */
  await page.click('#qBar [data-course="OCR-H481"]');
  await page.waitForSelector('#v-rooms .door', { timeout: 10000 });
  must((await page.locator('#v-rooms .door').count()) === 9 && (await page.locator('#v-rooms .sign').count()) >= 3 && (await page.locator('#v-rooms .door[data-s="Fluent"]').count()) >= 1 && (await page.locator('#v-rooms .hint[data-hint="corridor"]').count()) === 1, 'the corridor: nine doors under their component signs, state strips, the corridor hint');
  must(/Jump to a topic/.test(await page.locator('#wall').textContent()) && /In this building/.test(await page.locator('#wall').textContent()), 'the wall beside the corridor: jump box, what is due in this building');
  const chipNow = await page.locator('#qBar [data-course="OCR-H481"]').getAttribute('class');
  must(!/ghost/.test(chipNow), 'walking into the building turns its chip on the quick bar solid');
  await page.fill('#jump', 'stationary');
  await page.waitForSelector('#jumpOut .tnode', { timeout: 5000 });
  must(/Mathematics/.test(await page.locator('#jumpOut').textContent()), 'quick-jump finds a maths topic by a key-idea word');
  await page.fill('#jump', '');
  await snap(page, '7-corridor', 'Inside a building: one door per topic under its component sign, a state strip on each door, what is due behind it; the wall says what is due in this building and has the jump box');
  /* the classroom */
  await page.click('#v-rooms [data-open="OCR-H481|1.2"]');
  await page.waitForFunction(() => /This room/.test(document.querySelector('#wall').textContent), null, { timeout: 10000 });
  must((await page.locator('#v-rooms #backRooms').count()) === 1 && (await page.locator('#v-rooms .doorstep').count()) >= 1 && /Watch and read/.test(await page.locator('#wall').textContent()) && (await page.locator('#wall a.link').count()) >= 1 && (await page.locator('#v-rooms .hint[data-hint="room"]').count()) === 1, 'in a room: Corridor button, neighbouring doors, the wall shows this room, its cards, mistakes and links, and the room hint');
  let c = await box(page, 'main.centre'), w = await box(page, '#wall');
  must(c.x + c.width <= w.x + 1 && w.x + w.width <= 1281, `1280px room: centre and wall side by side (centre ${Math.round(c.width)}, wall ${Math.round(w.width)})`);
  await snap(page, '8-classroom-wall', 'A classroom: breadcrumb, Corridor button and neighbouring doors above the desk, the wall beside it with this room, cards due, mistakes, watch and read');
  await page.click('#v-rooms .stations [data-station="cards"]');
  await page.waitForSelector('#v-rooms .fc-deck .fc.mini', { timeout: 5000 });
  must((await page.locator('#v-rooms .fc-deck .fc.mini').count()) >= 3, 'the room’s deck is a grid of mini index cards');
  await page.locator('#v-rooms .fc-deck .fc.mini').nth(1).click();
  await page.waitForSelector('#v-rooms .fc-deck .fc.mini.flipped', { timeout: 5000 });
  await page.waitForTimeout(700);
  await snap(page, '22-room-deck', 'The room’s flash-card deck: mini index cards in the subject’s colour, one turned over');
  /* back out, and the hints do not return */
  await page.click('#backRooms'); await page.waitForSelector('#v-rooms .door', { timeout: 5000 });
  await page.click('#backCampus'); await page.waitForSelector('#v-campus .campus', { timeout: 5000 });
  must((await page.locator('#v-campus .hint').count()) === 0 && (await page.locator('#v-rooms .hint').count()) === 0, 'walking back out: the hints have gone and do not return');
  await page.context().close();

  /* iPad landscape: a room with eight station tabs beside the wall */
  page = await open('tok-matthew', { width: 1180, height: 820 }, '#qBar .qchip');
  await page.click('#qBar [data-course="EDX-9MA0"]'); await page.waitForSelector('#v-rooms [data-open="EDX-9MA0|P2"]');
  await page.click('#v-rooms [data-open="EDX-9MA0|P2"]'); await page.waitForSelector('[data-station="formulae"]'); await page.click('[data-station="formulae"]');
  c = await box(page, 'main.centre'); w = await box(page, '#wall'); const pnl = await box(page, '#v-rooms .panel');
  must(c.x + c.width <= w.x + 1 && pnl.x + pnl.width <= w.x - 8, `1180px room: the panel stays inside its column beside the wall (centre ${Math.round(c.x)}–${Math.round(c.x + c.width)}, panel ${Math.round(pnl.x)}–${Math.round(pnl.x + pnl.width)}, wall from ${Math.round(w.x)})`);
  await page.click('#qBar [data-v="office"]'); await page.waitForSelector('#v-office [data-act="courses"]');
  must(/data-act="signout"|id="signOut"/.test(await page.locator('#v-office').innerHTML()) && (await page.locator('#v-office .ccard').count()) === 5, 'the Office: Add or change courses, the account with Sign out, the five courses with pins');
  await snap(page, '10-office', 'The Office: courses with pins and progress, Add or change courses, the account');
  await page.context().close();

  /* phone: the campus stacks, the bottom bar carries Campus, Exam Hall, Progress, Office */
  page = await open('tok-matthew', { width: 390, height: 844 }, '#v-campus .campus');
  must((await page.locator('nav.bottom').isVisible()) && (await page.locator('nav.bottom button').count()) === 4 && (await page.locator('#status').isVisible()), '390px: bottom nav of four and the status strip visible');
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  must(sw <= 390, `390px: nothing scrolls sideways (page width ${sw})`);
  const art = await box(page, '#v-campus .campusart'), bd = await box(page, '#v-campus .board');
  must(bd.y >= art.y + art.height - 1, '390px: the notice board stacks under the drawing');
  await snap(page, '9-phone-campus', 'Phone: the campus and the notice board stack, the quick bar scrolls sideways, the bottom bar carries Campus, Exam Hall, Progress, Office');
  await page.click('nav.bottom button[data-v="exam"]'); await page.waitForSelector('#v-exam .panel', { timeout: 5000 });
  must(!(await page.locator('#v-campus').isVisible()) && (await page.locator('#v-exam').isVisible()), '390px: the bottom bar reaches the Exam Hall');
  await page.context().close();

  /* 11. a room with a written and checked kit (tooler course depth, criterion 5) */
  page = await open('tok-matthew', { width: 1280, height: 900 }, '#qBar .qchip');
  await page.click('#qBar [data-course="AQA-7402"]'); await page.waitForSelector('#v-rooms [data-open="AQA-7402|3.1"]');
  must((await page.locator('#v-rooms .pen').count()) === biology.topics.length - 1, 'corridor: every biology room without a kit yet carries the being-written mark');
  await page.click('#v-rooms [data-open="AQA-7402|3.1"]');
  await page.waitForFunction(() => /Written and checked/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  must(/Key facts & links/.test(await page.locator('.stations').textContent()) && /Required practical 1/.test(await page.locator('#v-rooms').textContent()) && (await page.locator('#v-rooms [data-lxrev]').count()) === 4, 'room: kit lesson with worked examples, the practical method sheet and the Key facts tab');
  await snap(page, '11-room-with-kit', 'A built course’s room after depth: the checked lesson with one section per key idea, faded worked examples, the required-practical method sheet, and the provenance line');
  await page.click('[data-station="practise"]');
  await page.waitForSelector('[data-ahint]');
  must(/Hint 1/.test(await page.locator('#v-rooms').textContent()) && /Peptide bond|amino acids/.test(await page.locator('#v-rooms').textContent()), 'room: practise draws from the checked bank with the hint ladder');
  await page.context().close();

  /* 12. the maths course after its rebuild: a room with a checked kit keeps the course’s verified links and official booklet */
  page = await open('tok-matthew', { width: 1280, height: 900 }, '#qBar .qchip');
  await page.click('#qBar [data-course="EDX-9MA0"]'); await page.waitForSelector('#v-rooms [data-open="EDX-9MA0|P2"]');
  must((await page.locator('#v-rooms .pen').count()) === 0, 'corridor: every maths room has its kit, no being-written marks');
  await page.click('#v-rooms [data-open="EDX-9MA0|P2"]');
  await page.waitForFunction(() => /Written and checked/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  must(/Formulae & links/.test(await page.locator('.stations').textContent()) && /class="cite"[^>]*>2\.1</.test(await page.locator('#v-rooms').innerHTML()) && (await page.locator('#v-rooms [data-lxrev]').count()) >= 4 && /Formulae sheet/.test(await page.locator('#v-rooms').textContent()), 'maths room: the checked kit lesson cites the document’s codes, has faded worked examples and a Formulae sheet, and the tab reads Formulae & links');
  await snap(page, '12-maths-room-with-kit', 'Edexcel A level Maths after the rebuild: the checked kit lesson for Algebra and functions, one section per content statement (2.1–2.11), faded worked examples with cues, and the provenance line');
  await page.click('[data-station="formulae"]');
  await page.waitForFunction(() => /tlmaths\.com/.test(document.querySelector('#v-rooms').innerHTML), null, { timeout: 5000 });
  must(/Key formulae/.test(await page.locator('#v-rooms').textContent()) && /Formulae booklet \(official\)/.test(await page.locator('#v-rooms').textContent()), 'maths formulae station: the kit’s formulae, the hand-checked TLMaths links and the official booklet link together');
  await snap(page, '13-maths-formulae-station', 'The same room’s Formulae & links station: the kit’s key formulae, its faded examples, the course’s hand-checked TLMaths pages and the official formulae booklet');
  await page.context().close();

  /* 14. the International GCSE courses: German and Foundation Maths rooms with their checked kits */
  page = await open('tok-matthew', { width: 1280, height: 900 }, '#qBar .qchip');
  await page.click('#qBar [data-course="EDX-4GN1"]'); await page.waitForSelector('#v-rooms [data-open="EDX-4GN1|A"]');
  must((await page.locator('#v-rooms .pen').count()) === 0, 'corridor: every German room has its kit');
  await page.click('#v-rooms [data-open="EDX-4GN1|A"]');
  await page.waitForFunction(() => /Written and checked/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  must(/[äöüß]/.test(await page.locator('#v-rooms').textContent()) && (await page.locator('#v-rooms [data-lxrev]').count()) >= 4, 'German room: the checked kit lesson carries real umlauts and faded worked examples');
  await page.waitForFunction(() => /describing your house and home/.test(document.querySelector('#wall').textContent), null, { timeout: 10000 });
  must((await page.locator('#wall .vid').count()) === 2 && !/youtube\.com\/results/.test(await page.locator('#wall').innerHTML()) && (await page.locator('#wall [data-pinvideo]').count()) === 2, 'German room rail: two found-and-checked videos with Pin buttons, no bare YouTube search link');
  await snap(page, '14-igcse-german-room', 'Edexcel International GCSE German, topic area A: the checked kit lesson in English with every German example, vocabulary fields from the document’s own list and faded worked examples');
  await page.click('#qBar [data-course="EDX-4MA1"]'); await page.waitForSelector('#v-rooms [data-open="EDX-4MA1|1.1"]');
  must((await page.locator('#v-rooms .pen').count()) === 0, 'corridor: every Foundation Maths room has its kit');
  await page.click('#v-rooms [data-open="EDX-4MA1|1.1"]');
  await page.waitForFunction(() => /Written and checked/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  must(/Formulae & links/.test(await page.locator('.stations').textContent()) && /Formulae sheet/.test(await page.locator('#v-rooms').textContent()), 'Foundation Maths room: the checked kit has a Formulae sheet and the Formulae & links tab');
  await snap(page, '15-igcse-maths-room', 'Edexcel International GCSE Mathematics A (Foundation), Integers: the checked kit lesson, one section per content statement, and its Formulae sheet against the paper’s Appendix 4');
  await page.context().close();

  /* ---- real papers: pick a real OCR paper, photograph a page, assign, confirm, marks with slip-first, report ---- */
  page = await open('tok-matthew', { width: 1280, height: 900 }, '#qBar .qchip');
  await page.click('#qBar [data-v="exam"]'); await page.waitForSelector('.pser', { timeout: 15000 });
  must((await page.locator('.pser').count()) >= 3 && (await page.locator('.pser.locked[disabled]').count()) >= 1 && /Locked until/.test(await page.locator('.pser.locked').first().textContent()), 'exam: the board’s series from the index, the newest locked with its release date');
  must(/^https:\/\/www\.ocr\.org\.uk\//.test(await page.locator('.prow a.act').first().getAttribute('href')) && (await page.locator('[data-pmark]').count()) >= 1 && /stay on OCR’s website/.test(await page.locator('#v-exam').textContent()), 'exam: papers open on the board’s own site and can be marked');
  await snap(page, '16-exam-real-papers', 'The Exam Hall for OCR A level Geography: every public series from OCR’s own site, June 2026 locked until its release date, each paper opening on ocr.org.uk with Open paper and Mark my answers, and the notice that nothing of the board’s is stored.');
  await page.click('[data-pmark]'); await page.waitForSelector('#pfPick', { state: 'attached' });
  const jpg = await page.evaluate(() => { const c = document.createElement('canvas'); c.width = 900; c.height = 1200; const g = c.getContext('2d'); g.fillStyle = '#fbfaf6'; g.fillRect(0, 0, 900, 1200); g.fillStyle = '#1b1b1b'; g.font = '34px serif'; ['1  Carbon is stored in the oceans.', '   It moves from the atmosphere into the', '   sea by dissolving, about 2 GtC a year.', '', '3  A steep cliff formed by hydraulic action.'].forEach((t, i) => g.fillText(t, 60, 160 + i * 70)); return c.toDataURL('image/jpeg', 0.85).split(',')[1]; });
  await page.setInputFiles('#pfPick', { name: 'page1.jpg', mimeType: 'image/jpeg', buffer: Buffer.from(jpg, 'base64') });
  await page.waitForSelector('.ppages .ppage', { timeout: 15000 }); await page.click('#pfToAssign'); await page.waitForSelector('[data-pq="1"]', { timeout: 15000 });
  await page.click('[data-ppage]'); await page.click('[data-pq="1"]'); await page.click('[data-pq="3"]'); await page.click('[data-pconf="1|sure"]'); await page.click('[data-pna="2"]');
  must(/pages 1/.test(await page.locator('[data-pq="1"]').textContent()) && /not attempted/.test(await page.locator('[data-pq="2"]').textContent()), 'assign: a page tapped then its questions, one question left blank');
  await snap(page, '17-paper-assign', 'Step 2: the paper’s questions read once from the paper itself with their marks and topics; the photographed page is tapped, then the questions it holds; confidence per question before any mark; a question left blank.');
  await page.click('#pfPrepare'); await page.waitForSelector('[data-ptr="1"]', { timeout: 15000 });
  must(/Carbon is stored in the oceans/.test(await page.locator('#v-exam').textContent()) && (await page.locator('[data-ptick="1|0"]').count()) === 1, 'confirm: the transcription is shown to correct and the mark points to tick');
  await page.click('[data-ptick="1|0"]'); await page.click('[data-ptick="1|1"]'); await page.click('#pfMark'); await page.waitForSelector('[data-pslip]', { timeout: 15000 });
  must(/“stored in the oceans”/.test(await page.locator('#v-exam').textContent()) && /differs from your tick/.test(await page.locator('#v-exam').textContent()) && (await page.locator('#pfFinish[disabled]').count()) === 1 && (await page.locator('[data-premark="3"]').count()) === 1, 'marks: per point with the student’s own words as evidence, the checker’s disagreement, an unreadable answer withheld, Finish waiting');
  await snap(page, '18-paper-marks', 'Step 4: marks per mark point quoting the student’s own words, what was missing, where the checker differed from the student’s tick, an unreadable answer left unmarked with a type-in path, and the slip-first question before the examiner’s note.');
  await page.fill('[data-ptype="3"]', 'A steep cliff formed by hydraulic action'); await page.click('[data-premark="3"]'); await page.waitForSelector('[data-pslip="1|unfinished"]'); await page.click('[data-pslip="1|unfinished"]');
  await page.waitForSelector('#pfFinish:not([disabled])'); await page.click('#pfFinish'); await page.waitForFunction(() => /Where the marks went/.test(document.querySelector('#v-exam').textContent), null, { timeout: 15000 });
  must(/8 \/ 66/.test(await page.locator('#v-exam').textContent()) && (await page.locator('.ptopic [data-open]').count()) >= 3 && /Re-test on/.test(await page.locator('#v-exam').textContent()), 'report: score, topics with room moves and Open room, re-test date');
  await snap(page, '19-paper-report', 'The report: the score and grade on the series’ boundaries, topics ordered by marks lost × weight with each room’s move and an Open room button, the coach’s note, and what went into the rooms and the daily plan.');
  await page.context().close();


  /* ---- 23–28. support (tooler: the floating coach, the reader, calm mode, the Support panel, the phone sheet with the timer, the prompter) ---- */
  const fakeSpeech = () => { const fake = { speaking: false, paused: false, pending: false, getVoices() { return [{ name: 'Daniel', lang: 'en-GB', default: true, localService: true, voiceURI: 'Daniel' }]; }, speak(u) { fake.speaking = true; setTimeout(() => { if (u.onstart) u.onstart({}); }, 30); setTimeout(() => { fake.speaking = false; if (u.onend) u.onend({}); }, 6000); }, cancel() { fake.speaking = false; }, pause() { fake.paused = true; }, resume() { fake.paused = false; }, addEventListener() {} }; try { Object.defineProperty(window, 'speechSynthesis', { value: fake, configurable: true }); } catch (e) {} window.SpeechSynthesisUtterance = function (t) { this.text = t; this.rate = 1; this.lang = 'en-GB'; }; };
  const openSup = async (token, viewport, ready) => { const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2 }); await ctx.addInitScript(t => { try { localStorage.setItem('platform:session', t); } catch (e) {} }, token); await ctx.addInitScript(fakeSpeech); const page = await ctx.newPage(); await page.goto(ORIGIN + '/'); await page.waitForSelector(ready, { timeout: 20000 }); return page; };
  page = await openSup('tok-matthew', { width: 1280, height: 900 }, '#qBar .qchip');
  await page.click('#qBar [data-course="OCR-H481"]'); await page.waitForSelector('#v-rooms [data-open="OCR-H481|1.2"]');
  await page.click('#v-rooms [data-open="OCR-H481|1.2"]'); await page.waitForSelector('[data-station="practise"]');
  await page.click('[data-station="practise"]'); await page.waitForFunction(() => /Question 1 of/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  must((await page.locator('#coachFab').isVisible()) && /Coach/.test(await page.locator('#coachFab').textContent()), 'the coach button floats on the page');
  await page.click('#coachFab'); await page.waitForSelector('#coachPanel .csees');
  must(/Geography · 1\.2 .* · Practise · question 1 of 4/.test(await page.locator('#coachPanel .csees').textContent()), 'the panel says what the coach can see: the room, the station and the question on screen');
  must((await page.locator('#coachPanel [data-chip]').count()) >= 2 && /command word/i.test(await page.locator('#coachPanel .cchips').textContent()), 'the chips fit a question: decode the command word, the smallest next step');
  await page.fill('#coachIn', 'I’m stuck on this one'); await page.click('#coachGo');
  await page.waitForFunction(() => /Which store/.test(document.querySelector('#coachPanel').textContent), null, { timeout: 20000 });
  must(/Which store/.test(await page.locator('#coachPanel .msg.c').last().textContent()), 'the coach answered about the question on screen');
  await page.waitForTimeout(600); await page.evaluate(() => { const q = document.querySelector('#v-rooms .qcard'); if (q) q.scrollIntoView({ block: 'start', behavior: 'instant' }); }); await page.waitForTimeout(500);
  await snap(page, '23-coach-floating', 'The coach floats beside every page: opened from the button at the bottom right, it says what it can see (the room, the station, the question on screen) and answers about that question; the chips fit the scene');
  /* the reader with line focus and spacing */
  await page.click('#coachClose');
  await page.evaluate(() => { S.setup.support.reader = true; S.setup.support.lineFocus = 3; S.setup.support.spacing = true; applySupport(); renderAll(); });
  await page.click('[data-station="lesson"]'); await page.waitForSelector('#reader #rdPage', { timeout: 5000 }); await page.waitForTimeout(250);
  must((await page.locator('#v-rooms .rdb').count()) >= 3 && (await page.locator('#v-rooms h2 .rdb, #v-rooms h3 .rdb, #v-rooms .sub .rdb, #v-rooms .fine .rdb, #wall .rdb, [data-hint] .rdb').count()) === 0, 'the lesson’s body paragraphs have a 🔊; titles, sub-lines, captions and the wall do not');
  await page.click('#rdPage'); await page.waitForSelector('.rd-cur', { timeout: 5000 }); await page.waitForTimeout(200);
  must((await page.locator('.rd-cur[data-hint]').count()) === 0, 'Read this page starts with the page, not the onboarding hint');
  must((await page.locator('#rdmask').isVisible()) && /Stop/.test(await page.locator('#reader').textContent()) && (await page.locator('body.rd-space').count()) === 1, 'reading: the current block is highlighted, the line-focus window is up, spacing is wider');
  await page.locator('.rd-cur').scrollIntoViewIfNeeded(); await page.waitForTimeout(150);
  await snap(page, '24-reader-line-focus', 'The reader: Read this page under the header, a 🔊 on each body paragraph, the block being read highlighted with its current sentence, a three-line focus window dimming the rest, and wider spacing');
  /* calm mode on the campus */
  await page.evaluate(() => { readerStop(); S.setup.support.reader = false; S.setup.support.spacing = false; S.setup.support.calm = true; applySupport(); UI.room = null; go('campus'); renderCampus(); });
  await page.waitForSelector('#v-campus .campus');
  must((await page.locator('body.calm').count()) === 1 && (await page.locator('#v-campus .campus polygon[pointer-events="none"]').count()) === 0, 'calm mode: the body class is set and the campus has no time-of-day wash');
  await snap(page, '25-calm-campus', 'Calm mode: no animation or movement anywhere, a plain background instead of the grid, no shadows or pulses, and the campus drawn without its time-of-day tint');
  /* the Support panel */
  await page.evaluate(() => { S.setup.support.calm = false; applySupport(); });
  await page.click('#qBar [data-v="office"]'); await page.waitForSelector('#supportPanel');
  must((await page.locator('#supportPanel [data-sup="tutorVoice"] option').count()) === 3 && /Athena/.test(await page.locator('#supportPanel').textContent()) && /Helios/.test(await page.locator('#supportPanel').textContent()) && /thousand new characters/.test(await page.locator('#supportPanel').textContent()), 'the Support panel offers the tutor voice: Off, Athena, Helios, with the cost in plain words');
  must((await page.locator('#supportPanel input[type="checkbox"]').count()) >= 10 && (await page.locator('#supportPanel select').count()) >= 4 && /JCQ/.test(await page.locator('#supportPanel').textContent()), 'the Support panel: every aid a real switch with a plain explanation, and the JCQ arrangements named');
  await page.evaluate(() => { document.querySelector('#supportPanel').scrollIntoView({ block: 'start' }); }); await page.waitForTimeout(150);
  await snap(page, '26-support-office', 'The Office’s Support panel: reader, speed, line focus, spacing, coach speaks; dictation and where the audio goes; the prompter and its interval; break steps down and how small; calm mode; plain literal language; the visible timer, extra time and rest breaks');
  await page.evaluate(() => { S.setup.support.reader = true; applySupport(); renderAll(); }); await page.waitForSelector('#reader #rdPage');
  await page.selectOption('#supportPanel [data-sup="tutorVoice"]', 'athena'); await page.waitForTimeout(200);
  must(/tutor voice: Athena/.test(await page.locator('#reader').textContent()), 'with Athena chosen the reader bar names the tutor voice');
  await page.click('#qBar [data-course="OCR-H481"]'); await page.waitForSelector('#v-rooms [data-open="OCR-H481|1.2"]'); await page.click('#v-rooms [data-open="OCR-H481|1.2"]'); await page.waitForSelector('#reader #rdPage');
  await page.click('#rdPage'); await page.waitForFunction(() => /using this device/.test(document.querySelector('#reader').textContent), null, { timeout: 8000 });
  must((await page.locator('.rd-cur').count()) === 1, 'when the stub Worker cannot make the voice, the bar says the device voice is reading instead and reading goes on');
  await snap(page, '27-tutor-voice-fallback', 'The tutor voice chosen, the tutor service unable to make it in this proof: the bar says this device’s voice is reading instead, and the reading carries on with its highlight');
  await page.evaluate(() => { readerStop(); S.setup.support.tutorVoice = ''; S.setup.support.reader = false; applySupport(); });
  await page.context().close();
  /* phone: the timer from Go, the coach as a bottom sheet with its mic, then the prompter */
  page = await openSup('tok-matthew', { width: 390, height: 844 }, '#v-campus .campus');
  await page.evaluate(() => { S.setup.support.timer = true; S.setup.support.extra = 25; S.setup.support.breaks = true; S.setup.support.dictate = true; applySupport(); });
  await page.click('#v-campus .act.go'); await page.waitForSelector('#timer .tleft', { timeout: 10000 });
  await page.evaluate(() => openRoom('OCR-H481|1.2', 'practise')); await page.waitForFunction(() => /Question 1 of/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  await page.click('#coachFab'); await page.waitForSelector('#coachPanel .csees'); await page.waitForTimeout(200);
  const pb = await box(page, '#coachPanel'); const tb = await box(page, '#timer');
  must(pb.y + pb.height >= 844 - 2 && pb.width >= 380 && tb.y + tb.height <= pb.y + 2 && /incl\. 25% extra/.test(await page.locator('#timer').textContent()), `phone: the coach is a bottom sheet (${Math.round(pb.y)}…${Math.round(pb.y + pb.height)}) and the timer ring sits above it with 25% extra time`);
  must((await page.locator('#coachPanel [data-mic="coachIn"]').count()) === 1, 'the mic sits beside the coach box');
  await snap(page, '27-phone-coach', 'Phone: Go started the step’s timer (25% extra time applied, Break stops the clock); the coach opens as a bottom sheet that says what it sees, with the mic beside its box');
  await page.click('#coachClose');
  await page.evaluate(() => { S.setup.support.prompter = true; S.setup.support.prompterMinutes = 3; applySupport(); UI.lastActive = Date.now() - 4 * 60000; UI.lastPrompt = 0; prompterTick(); });
  await page.waitForSelector('#prompt .pline', { timeout: 5000 }); await page.waitForTimeout(450);
  must(/Matthew/.test(await page.locator('#prompt').textContent()) && (await page.locator('#promptOk').count()) === 1 && (await page.locator('#promptBreak').count()) === 1, 'the prompter: one line with the student’s name, I’m here and Break');
  await snap(page, '28-prompter', 'The prompter after three quiet minutes at the desk: one line, the student’s name or “back to question 1”, never the content, with I’m here and a five-minute Break that stops the clock');
  await page.context().close();

  await browser.close(); server.close();
  fs.writeFileSync(path.join(OUT, 'README.md'), '# Visual proof\n\nScreenshots from `npm run proof`: the built app in Chromium against a stub of the tutor Worker.\n\n' + shots.map(s => `## ${s.name}\n\n${s.note}\n\n![${s.name}](${s.name}.png)\n`).join('\n'));
  console.log('wrote', shots.length, 'screenshots to docs/proof/');
})().catch(e => { console.error(e); server.close(); process.exit(1); });
