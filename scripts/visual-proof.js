/* Visual proof: drives the built app in a real browser against a stub of the tutor Worker and
   screenshots the course flow — the dropdowns, the build in progress, the course added with its
   provenance, and the Admin review queue. `npm run proof` writes docs/proof/*.png.
   The stub answers the same routes the Worker does, with a build that advances one step per poll. */
const http = require('http'), fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const { chromium } = require('playwright');

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
const users = { 'tok-student': { username: 'matthew', name: 'Matthew', role: 'student', daily: 200 }, 'tok-admin': { username: 'chris', name: 'Chris', role: 'admin', daily: 2000 } };
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
    if (p === '/progress') return m === 'GET' ? send(404, { error: 'nothing saved yet' }) : send(200, { ok: true, updatedAt: new Date().toISOString() });
    if (p === '/courses') return send(200, { catalogue: CATALOGUE, courses: states, building: build && build.status === 'building' ? { [build.id]: build } : {} });
    if (p === '/courses/build') { if (states['AQA-7402'] && states['AQA-7402'].status === 'published') return send(200, { status: 'published', id: 'AQA-7402' }); build = { id: 'AQA-7402', status: 'building', stage: 'Finding the specification', done: 0, total: 13, message: stages[0] }; return send(202, { status: 'building', id: 'AQA-7402', joined: false, build }); }
    if (/^\/courses\/[^/]+\/status$/.test(p)) { if (build && build.status === 'building') { build.done = Math.min(build.done + 1, build.total); build.message = stages[build.done] || 'Judging the map against the document…'; build.stage = build.done < 2 ? 'Reading the specification' : build.done < 11 ? 'Mapping topics' : 'Judging against the document'; if (build.done >= build.total) { build.status = 'published'; build.message = 'Published — judged 91% faithful to the document.'; states['AQA-7402'] = { status: 'published' }; } } return send(200, { id: 'AQA-7402', status: build ? build.status : 'none', build, meta: build && build.status === 'published' ? meta : null }); }
    if (/^\/courses\/[^/]+\/spec$/.test(p)) return states['AQA-7402'] && states['AQA-7402'].status === 'published' ? send(200, { spec: biology, meta }) : send(404, { error: 'not published' });
    if (p === '/manage/users') return send(200, { users: [users['tok-admin'], { ...users['tok-student'], created: '2026-09-10', hasPassword: true, today: 14, lastSeen: '2026-09-10T11:40:00Z', device: 'an iPad' }], site: ORIGIN });
    if (p === '/manage/courses') return send(200, { courses: [{ ...meta, build: { status: 'published', done: 13, total: 13 }, proposal: { createdAt: proposal.createdAt, breaking: true, count: 4 }, pending: true }], lastRun: { at: '2026-10-01T06:00:00Z', courses: ['AQA-7402'] }, catalogueExtra: [] });
    if (p === '/manage/reviews') return send(200, { items: [proposal, { kind: 'needs-link', id: 'OCR-H420', subject: 'Biology', board: 'OCR', code: 'H420', level: 'A level', requestedBy: 'kitty', error: 'the located URL is not on OCR\'s domain', updatedAt: '2026-09-10T13:10:00Z' }] });
    return send(404, { error: 'not found' });
  });
});

(async () => {
  await new Promise(r => server.listen(PORT, r));
  const browser = await chromium.launch(fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {});
  const shots = [];
  const snap = async (page, name, note) => { const file = path.join(OUT, name + '.png'); await page.screenshot({ path: file, fullPage: false }); shots.push({ name, note, file }); console.log('  shot', name); };
  const open = async (token, viewport) => { const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2 }); await ctx.addInitScript(t => { try { localStorage.setItem('platform:session', t); } catch (e) {} }, token); const page = await ctx.newPage(); await page.goto(ORIGIN + '/'); await page.waitForSelector('#crsSubject, #adCreate', { timeout: 15000 }); return page; };

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

  await browser.close(); server.close();
  fs.writeFileSync(path.join(OUT, 'README.md'), '# Visual proof\n\nScreenshots from `npm run proof`: the built app in Chromium against a stub of the tutor Worker.\n\n' + shots.map(s => `## ${s.name}\n\n${s.note}\n\n![${s.name}](${s.name}.png)\n`).join('\n'));
  console.log('wrote', shots.length, 'screenshots to docs/proof/');
})().catch(e => { console.error(e); server.close(); process.exit(1); });
