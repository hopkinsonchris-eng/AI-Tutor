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
/* a student a term in: three courses, mixed mastery, cards due, a marked essay, four days' streak */
const core = require(path.join(ROOT, 'src', 'core.js'));
const SPECS = {}; for (const sp of Object.values({ ...require(path.join(ROOT, 'src', 'specs', 'ocr-h481.js')), ...require(path.join(ROOT, 'src', 'specs', 'edexcel-9ma0.js')) })) SPECS[sp.id] = sp; SPECS['AQA-7402'] = biology;
const setup = { student: 'Matthew', examYear: 2028, subjects: [{ specId: 'OCR-H481', options: { landscape: '1.1.1', globalSystems: '2.2.1', globalGovernance: '2.2.4', debates: ['3.1', '3.5'] } }, { specId: 'EDX-9MA0', options: {} }, { specId: 'AQA-7402', options: {} }] };
const progress = core.newState(setup, SPECS); progress.created = '2026-09-01';
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
let build = null; const states = { 'OCR-H432': { status: 'retracted' } };
const stages = ['Finding the official specification…', 'Reading the specification document…', 'Mapping topic 1 of 9…', 'Mapping topic 2 of 9…', 'Mapping topic 3 of 9…', 'Mapping topic 4 of 9…', 'Mapping topic 5 of 9…', 'Mapping topic 6 of 9…', 'Mapping topic 7 of 9…', 'Mapping topic 8 of 9…', 'Mapping topic 9 of 9…', 'Checking the whole map…', 'Judging the map against the document…'];
const meta = { id: 'AQA-7402', level: 'A level', subject: 'Biology', board: 'AQA', code: '7402', family: 'science', status: 'published', source: { url: 'https://filestore.aqa.org.uk/resources/biology/specifications/AQA-7402-SP-2015.PDF', etag: '"5f2a-6132b0c7a1d80"', lastModified: 'Wed, 03 Sep 2025 09:12:44 GMT', length: 1849302, checkedAt: '2026-09-10T12:04:31Z' }, built: { at: '2026-09-10T12:04:31Z', models: ['claude-opus-5', 'claude-sonnet-5', 'claude-opus-5'], promptVersion: '2026-09-10.1', ideas: 18 }, judge: { score: 0.91 } };
const proposal = { kind: 'proposal', id: 'AQA-7402', subject: 'Biology', board: 'AQA', code: '7402', level: 'A level', createdAt: '2026-10-01T06:02:10Z', breaking: true, oldVersion: 'Specification 7402, version 1.4 (September 2019)', newVersion: 'Specification 7402, version 1.5 (June 2026)', docChanges: ['Version 1.5 clarifies the required practical apparatus list for RP7 and RP9.', 'Section 3.8.4 (gene technologies) is reworded; no change to assessed content.'], changes: [{ kind: 'topic-removed', topic: 'RP', detail: 'Required practicals 1–12 (now listed under each topic)', breaking: true }, { kind: 'idea-changed', topic: '3.8', detail: '8.1', breaking: false }, { kind: 'idea-added', topic: '3.3', detail: '3.3 RP7 apparatus', breaking: false }, { kind: 'version', topic: null, detail: 'v1.4 → v1.5', breaking: false }] };

const server = http.createServer((req, res) => {
  const url = new URL(req.url, ORIGIN), p = url.pathname, m = req.method;
  const send = (status, body, type = 'application/json') => { res.writeHead(status, { 'Content-Type': type, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS' }); res.end(typeof body === 'string' ? body : JSON.stringify(body)); };
  if (m === 'OPTIONS') return send(204, '');
  if (p === '/' && m === 'GET') return send(200, html, 'text/html; charset=utf-8');
  const tok = (req.headers.authorization || '').replace('Bearer ', ''); const me = users[tok];
  let raw = ''; req.on('data', c => raw += c); req.on('end', () => {
    const body = raw ? JSON.parse(raw) : {};
    if (p === '/auth/me') return me ? send(200, { user: me }) : send(401, { error: 'not signed in' });
    if (p === '/' && m === 'POST') return send(200, { id: 'msg_1', content: [{ type: 'text', text: JSON.stringify(nudge) }] });
    if (p === '/progress') return m === 'GET' ? (tok === 'tok-matthew' ? send(200, { updatedAt: new Date().toISOString(), device: 'an iPad', state: progress }) : send(404, { error: 'nothing saved yet' })) : send(200, { ok: true, updatedAt: new Date().toISOString() });
    if (p === '/courses') return send(200, { catalogue: CATALOGUE, courses: states, building: build && build.status === 'building' ? { [build.id]: build } : {}, depth: { 'AQA-7402': depthRec } });
    if (/^\/courses\/AQA-7402\/kit\/3\.1$/.test(p)) return send(200, { kit });
    if (/^\/courses\/[^/]+\/kit\//.test(p)) return send(404, { error: 'no kit for that room yet' });
    if (p === '/courses/build') { if (states['AQA-7402'] && states['AQA-7402'].status === 'published') return send(200, { status: 'published', id: 'AQA-7402' }); build = { id: 'AQA-7402', status: 'building', stage: 'Finding the specification', done: 0, total: 13, message: stages[0] }; return send(202, { status: 'building', id: 'AQA-7402', joined: false, build }); }
    if (/^\/courses\/[^/]+\/status$/.test(p)) { if (build && build.status === 'building') { build.done = Math.min(build.done + 1, build.total); build.message = stages[build.done] || 'Judging the map against the document…'; build.stage = build.done < 2 ? 'Reading the specification' : build.done < 11 ? 'Mapping topics' : 'Judging against the document'; if (build.done >= build.total) { build.status = 'published'; build.message = 'Published — judged 91% faithful to the document.'; states['AQA-7402'] = { status: 'published' }; } } return send(200, { id: 'AQA-7402', status: build ? build.status : 'none', build, meta: build && build.status === 'published' ? meta : null }); }
    if (/^\/courses\/[^/]+\/spec$/.test(p)) return (tok === 'tok-matthew' || (states['AQA-7402'] && states['AQA-7402'].status === 'published')) ? send(200, { spec: biology, meta }) : send(404, { error: 'not published' });
    if (p === '/manage/users') return send(200, { users: [users['tok-admin'], { ...users['tok-student'], created: '2026-09-10', hasPassword: true, today: 14, lastSeen: '2026-09-10T11:40:00Z', device: 'an iPad' }], site: ORIGIN });
    if (p === '/manage/courses') return send(200, { courses: [{ ...meta, depth: { ...depthRec, failed: [{ topic: '3.3', problems: ['question 7: the answer key gives 0.25 mm but the solution works to 0.025 mm', 'lesson.idea[2]: contradicts the specification on the direction of water movement'] }], calls: 27, promptVersion: '2026-09-10.1' }, build: { status: 'published', done: 13, total: 13 }, proposal: { createdAt: proposal.createdAt, breaking: true, count: 4 }, pending: true }], lastRun: { at: '2026-10-01T06:00:00Z', courses: ['AQA-7402'] }, catalogueExtra: [] });
    if (p === '/manage/reviews') return send(200, { items: [proposal, { kind: 'needs-link', id: 'OCR-H420', subject: 'Biology', board: 'OCR', code: 'H420', level: 'A level', requestedBy: 'kitty', error: 'the located URL is not on OCR\'s domain', updatedAt: '2026-09-10T13:10:00Z' }] });
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
  await snap(page, '1-setup-dropdowns', 'Level → Subject → Board; AQA Biology is "not mapped yet, builds on request"');

  /* 2. Add → the build with its progress bar */
  await page.click('#crsAdd');
  await page.waitForSelector('.bar', { timeout: 10000 });
  await page.waitForTimeout(7500);   // two polls at the app's 3-second interval
  await page.waitForFunction(() => /Mapping topic/.test(document.body.innerHTML), null, { timeout: 15000 });
  await snap(page, '2-build-progress', 'The build in progress: stage text and step count come from the Worker');

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

  /* 6–9. the three panels (tooler criteria 1, 2, 13): wide, a room, tablet drawer, phone drawer — with the layout asserted, not just photographed */
  page = await open('tok-matthew', { width: 1280, height: 860 }, '#rail-r .nudge');
  await page.waitForFunction(() => /Matthew,/.test(document.querySelector('#rail-r').textContent), null, { timeout: 15000 });
  let l = await box(page, '#rail-l'), c = await box(page, 'main.centre'), r = await box(page, '#rail-r');
  must(l.x >= 0 && l.x + l.width <= c.x + 1 && c.x + c.width <= r.x + 1 && r.x + r.width <= 1281, `1280px: three columns side by side (rail ${Math.round(l.width)}, centre ${Math.round(c.width)}, rail ${Math.round(r.width)})`);
  must(!(await page.locator('nav.bottom').isVisible()) && (await page.locator('nav.side').isVisible()), '1280px: the nav lives in the left rail, no bottom bar');
  must((await page.locator('#rail-l .ccard').count()) === 3 && (await page.locator('#rail-l .tnode').count()) === 8, 'left rail: three course cards and the eight geography rooms as a tree');
  must(/Next step/.test(await page.locator('#rail-r').textContent()) && /Cards due/.test(await page.locator('#rail-r').textContent()) && (await page.locator('#rail-r .ring').count()) === 3, 'right rail on Today: next step, cards due, three progress rings');
  must(/day streak/.test(await page.locator('#status').textContent()) && (await page.locator('#status').isVisible()), 'status strip visible with the streak');
  await snap(page, '6-wide-today', 'Wide screen: left rail (nav, quick-jump, course switcher, topic tree with status dots), centre (today’s session), right rail (tutor-written next step, cards due, progress rings, streak), status strip');
  await page.click('#rail-l [data-open="OCR-H481|1.2"]');
  await page.waitForFunction(() => /This room/.test(document.querySelector('#rail-r').textContent), null, { timeout: 10000 });
  must((await page.locator('#rail-l .tnode.cur').count()) === 1 && /Watch and read/.test(await page.locator('#rail-r').textContent()) && (await page.locator('#rail-r a.link').count()) >= 2, 'in a room: the tree marks where you are; the right rail shows this room, its cards, mistakes and links');
  await snap(page, '7-wide-room', 'Inside a room: the tree marks the current topic; the right rail is contextual — state, key-idea codes, cards due here, your mistakes here, watch and read');
  await page.fill('#jump', 'stationary');
  await page.waitForSelector('#jumpOut .tnode', { timeout: 5000 });
  must(/Mathematics/.test(await page.locator('#jumpOut').textContent()), 'quick-jump finds a maths topic by a key-idea word');
  await page.context().close();

  /* iPad landscape: a room with eight station tabs must not push the centre under the right rail */
  page = await open('tok-matthew', { width: 1180, height: 820 }, '#rail-l .ccard');
  await page.click('#rail-l [data-course="EDX-9MA0"]'); await page.waitForSelector('#rail-l [data-open="EDX-9MA0|P2"]');
  await page.click('#rail-l [data-open="EDX-9MA0|P2"]'); await page.waitForSelector('[data-station="formulae"]'); await page.click('[data-station="formulae"]');
  c = await box(page, 'main.centre'); r = await box(page, '#rail-r'); const pnl = await box(page, '#v-rooms .panel');
  must(c.x + c.width <= r.x + 1 && pnl.x + pnl.width <= r.x - 8 && Math.abs((pnl.x - c.x) - ((c.x + c.width) - (pnl.x + pnl.width))) <= 2, `1180px room: the panel stays centred in its column (centre ${Math.round(c.x)}–${Math.round(c.x + c.width)}, panel ${Math.round(pnl.x)}–${Math.round(pnl.x + pnl.width)}, right rail from ${Math.round(r.x)})`);
  must(/data-act="signout"/.test(await page.locator('#rail-l').innerHTML()) && /data-act="courses"/.test(await page.locator('#rail-l').innerHTML()), 'left rail: Add or change courses and Sign out present');
  await snap(page, '10-ipad-room', 'iPad landscape inside a maths room: the station tabs scroll within the panel, the panel stays centred, and the rail ends with Add or change courses and Sign out');
  await page.context().close();

  page = await open('tok-matthew', { width: 900, height: 1100 }, '#rail-l .ccard');
  l = await box(page, '#rail-l'); r = await box(page, '#rail-r');
  must(l.x >= 0 && l.width > 200 && r.x >= 899, '900px: left rail in the page, right rail off-screen until asked');
  await page.click('[data-drawer="r"]');
  await page.waitForFunction(() => { const b = document.querySelector('#rail-r').getBoundingClientRect(); return b.right <= window.innerWidth + 1 && b.left < window.innerWidth - 100; }, null, { timeout: 5000 });
  r = await box(page, '#rail-r'); must(r.x + r.width <= 901 && r.x < 899, '900px: the right rail slides in as a drawer');
  await snap(page, '8-tablet-drawer', 'iPad width: the left rail is part of the page; the right rail opens as a drawer from the header button');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => document.querySelector('#rail-r').getBoundingClientRect().left >= 899, null, { timeout: 5000 });
  must(true, '900px: Escape closes the drawer');
  await page.context().close();

  page = await open('tok-matthew', { width: 390, height: 844 }, '#status');
  l = await box(page, '#rail-l'); r = await box(page, '#rail-r');
  must(l.x + l.width <= 1 && r.x >= 389, '390px: both rails off-screen, the centre has the whole width');
  must((await page.locator('nav.bottom').isVisible()) && (await page.locator('#status').isVisible()), '390px: bottom nav and status strip visible');
  const sb = await box(page, '#status'), nb = await box(page, 'nav.bottom');
  must(sb.y + sb.height <= nb.y + 1, `390px: the status strip sits above the bottom nav (strip ends ${Math.round(sb.y + sb.height)}, nav starts ${Math.round(nb.y)})`);
  await page.click('[data-drawer="l"]');
  await page.waitForFunction(() => document.querySelector('#rail-l').getBoundingClientRect().left >= -1, null, { timeout: 5000 }); await page.waitForTimeout(300);
  l = await box(page, '#rail-l'); must(l.x >= -1 && l.width < 390, '390px: the left drawer opens from the edge button');
  await snap(page, '9-phone-drawer', 'Phone: the course and topic drawer over the session, bottom nav and status strip kept');
  await page.click('#scrim', { position: { x: 380, y: 400 } });
  await page.waitForFunction(() => document.querySelector('#rail-l').getBoundingClientRect().left < -1, null, { timeout: 5000 });
  must(true, '390px: tapping outside closes the drawer');
  await page.context().close();

  /* 11. a room with a written and checked kit (tooler course depth, criterion 5) */
  page = await open('tok-matthew', { width: 1280, height: 900 }, '#rail-l .ccard');
  await page.click('#rail-l [data-course="AQA-7402"]'); await page.waitForSelector('#rail-l [data-open="AQA-7402|3.1"]');
  must((await page.locator('#rail-l .pen').count()) === biology.topics.length - 1, 'tree: every biology room without a kit yet carries the being-written mark');
  await page.click('#rail-l [data-open="AQA-7402|3.1"]');
  await page.waitForFunction(() => /Written and checked/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  must(/Key facts & links/.test(await page.locator('.stations').textContent()) && /Required practical 1/.test(await page.locator('#v-rooms').textContent()) && (await page.locator('#v-rooms [data-lxrev]').count()) === 4, 'room: kit lesson with worked examples, the practical method sheet and the Key facts tab');
  await snap(page, '11-room-with-kit', 'A built course’s room after depth: the checked lesson with one section per key idea, faded worked examples, the required-practical method sheet, and the provenance line');
  await page.click('[data-station="practise"]');
  await page.waitForSelector('[data-ahint]');
  must(/Hint 1/.test(await page.locator('#v-rooms').textContent()) && /Peptide bond|amino acids/.test(await page.locator('#v-rooms').textContent()), 'room: practise draws from the checked bank with the hint ladder');
  await page.context().close();

  /* 12. the maths course after its rebuild: a room with a checked kit keeps the course’s verified links and official booklet */
  page = await open('tok-matthew', { width: 1280, height: 900 }, '#rail-l .ccard');
  await page.click('#rail-l [data-course="EDX-9MA0"]'); await page.waitForSelector('#rail-l [data-open="EDX-9MA0|P2"]');
  must((await page.locator('#rail-l .pen').count()) === 0, 'tree: every maths room has its kit, no being-written marks');
  await page.click('#rail-l [data-open="EDX-9MA0|P2"]');
  await page.waitForFunction(() => /Written and checked/.test(document.querySelector('#v-rooms').textContent), null, { timeout: 10000 });
  must(/Formulae & links/.test(await page.locator('.stations').textContent()) && /class="cite"[^>]*>2\.1</.test(await page.locator('#v-rooms').innerHTML()) && (await page.locator('#v-rooms [data-lxrev]').count()) >= 4 && /Formulae sheet/.test(await page.locator('#v-rooms').textContent()), 'maths room: the checked kit lesson cites the document’s codes, has faded worked examples and a Formulae sheet, and the tab reads Formulae & links');
  await snap(page, '12-maths-room-with-kit', 'Edexcel A level Maths after the rebuild: the checked kit lesson for Algebra and functions, one section per content statement (2.1–2.11), faded worked examples with cues, and the provenance line');
  await page.click('[data-station="formulae"]');
  await page.waitForFunction(() => /tlmaths\.com/.test(document.querySelector('#v-rooms').innerHTML), null, { timeout: 5000 });
  must(/Key formulae/.test(await page.locator('#v-rooms').textContent()) && /Formulae booklet \(official\)/.test(await page.locator('#v-rooms').textContent()), 'maths formulae station: the kit’s formulae, the hand-checked TLMaths links and the official booklet link together');
  await snap(page, '13-maths-formulae-station', 'The same room’s Formulae & links station: the kit’s key formulae, its faded examples, the course’s hand-checked TLMaths pages and the official formulae booklet');
  await page.context().close();

  await browser.close(); server.close();
  fs.writeFileSync(path.join(OUT, 'README.md'), '# Visual proof\n\nScreenshots from `npm run proof`: the built app in Chromium against a stub of the tutor Worker.\n\n' + shots.map(s => `## ${s.name}\n\n${s.note}\n\n![${s.name}](${s.name}.png)\n`).join('\n'));
  console.log('wrote', shots.length, 'screenshots to docs/proof/');
})().catch(e => { console.error(e); server.close(); process.exit(1); });
