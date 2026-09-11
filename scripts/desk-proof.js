/* Visual proof for the per-room desktop: drives the built app in a real browser against a stub of the
   tutor Worker (accounts, progress, the desk routes with an in-memory "R2", the AI proxy) and
   screenshots the straighten step, the finished wall, the phone layout and the Today resurfacing.
   `npm run proof:desk` writes docs/proof/desk-*.png and docs/proof/desk-straightened.jpg. */
const http = require('http'), fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'docs', 'proof');
const PORT = 8790, ORIGIN = `http://127.0.0.1:${PORT}`;
fs.mkdirSync(OUT, { recursive: true });
execSync(`node build.js`, { cwd: ROOT, env: { ...process.env, TUTOR_URL: ORIGIN }, stdio: 'pipe' });
const html = fs.readFileSync(path.join(ROOT, 'dist', 'index.html'), 'utf8');
execSync(`node build.js`, { cwd: ROOT, stdio: 'pipe' });

const core = require(path.join(ROOT, 'src', 'core.js'));
const SPECS = {}; for (const sp of Object.values(require(path.join(ROOT, 'src', 'specs', 'ocr-h481.js')))) SPECS[sp.id] = sp;
const setup = { student: 'Matthew', examYear: 2028, subjects: [{ specId: 'OCR-H481', options: { landscape: '1.1.1', globalSystems: '2.2.1', globalGovernance: '2.2.4', debates: ['3.1', '3.5'] } }] };
const progress = core.newState(setup, SPECS); progress.created = '2026-09-01';
const n = progress.nodes['OCR-H481|1.2']; n.state = 'Fluent'; n.lastPractised = '2026-09-08';
const daysAgo = d => new Date(Date.now() - d * 86400000).toISOString();
const CATALOGUE = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'catalogue.json'), 'utf8')).qualifications.map(q => ({ ...q, id: (q.board === 'Pearson Edexcel' ? 'EDX' : q.board === 'Eduqas' ? 'EDQ' : q.board) + '-' + q.code, hasUrl: !!q.specUrl }));
const users = { 'tok-matthew': { username: 'matthew', name: 'Matthew', role: 'student', daily: 200 } };
/* the desk stub: an index per room, files by key, a resurfacing candidate from three weeks ago */
const desk = { 'OCR-H481|1.2': [{ id: 'z1', kind: 'photo', at: daysAgo(21), title: 'Tuesday classwork — stores and flows', text: 'Stores: atmosphere, hydrosphere, cryosphere, lithosphere.', key: 'desk/matthew/OCR-H481|1.2/z1.jpg', size: 1200, type: 'image/jpeg' }] };
const files = {}; let used = 0; let seen = { upload: null, patches: [], ai: [] };
const rid = () => Math.random().toString(36).slice(2, 11);
const TRANSCRIPT = 'Earth\'s life support systems — water cycle\n\nStores: atmosphere (0.001%), hydrosphere (oceans 96.5%), cryosphere (ice sheets, glaciers), lithosphere (groundwater, soil water).\n\nFlows: evaporation, transpiration, condensation, precipitation, infiltration, percolation, throughflow, groundwater flow, surface runoff.\n\nResidence time — how long water stays in a store. Atmosphere ~9 days, deep groundwater up to 10,000 years.\n\nCarbon: photosynthesis takes CO2 in, respiration and combustion release it. Ocean = biggest carbon store apart from the lithosphere.';
const server = http.createServer((req, res) => {
  const url = new URL(req.url, ORIGIN), p = url.pathname, m = req.method;
  const send = (status, body, type = 'application/json', extra = {}) => { res.writeHead(status, { 'Content-Type': type, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Desk-Name, X-Desk-Kind', 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS', ...extra }); res.end(Buffer.isBuffer(body) ? body : typeof body === 'string' ? body : JSON.stringify(body)); };
  if (m === 'OPTIONS') return send(204, '');
  if (p === '/' && m === 'GET') return send(200, html, 'text/html; charset=utf-8');
  if (p.startsWith('/kits/')) { const f = path.join(ROOT, 'dist', decodeURIComponent(p)); return fs.existsSync(f) ? send(200, fs.readFileSync(f), 'application/json') : send(404, '{}'); }
  const tok = (req.headers.authorization || '').replace('Bearer ', ''); const me = users[tok];
  const chunks = []; req.on('data', c => chunks.push(c)); req.on('end', () => {
    const raw = Buffer.concat(chunks); let body = {}; try { body = raw.length && /json/.test(req.headers['content-type'] || '') ? JSON.parse(raw.toString()) : {}; } catch {}
    if (p === '/auth/me') return me ? send(200, { user: me }) : send(401, { error: 'not signed in' });
    if (p === '/progress') return m === 'GET' ? send(200, { updatedAt: new Date().toISOString(), device: 'an iPad', state: progress }) : send(200, { ok: true, updatedAt: new Date().toISOString() });
    if (p === '/courses') return send(200, { catalogue: CATALOGUE, courses: {}, building: {}, depth: {} });
    if (/^\/courses\/[^/]+\/kit\//.test(p)) return send(404, { error: 'no kit for that room yet' });
    if (p === '/' && m === 'POST') { const parts = (body.messages && body.messages[0] && body.messages[0].content) || []; const text = parts.map(x => x.text || '').join(' '); seen.ai.push({ model: body.model, image: parts.some(x => x.type === 'image'), kind: /Transcribe/.test(text) ? 'transcribe' : /OWN NOTES/.test(text) ? 'cards' : /next step/i.test(text) ? 'nudge' : 'other' });
      if (/Transcribe/.test(text)) return send(200, { content: [{ type: 'text', text: TRANSCRIPT }] });
      if (/OWN NOTES/.test(text)) return send(200, { content: [{ type: 'text', text: JSON.stringify({ cards: [{ front: 'Name the four major stores of the water cycle', back: 'Atmosphere, hydrosphere, cryosphere, lithosphere', code: '1.a' }, { front: 'What is residence time?', back: 'How long water stays in a store — about nine days in the atmosphere', code: '1.a' }, { front: 'Which process moves water from soil into rivers laterally?', back: 'Throughflow', code: '1.b' }, { front: 'Largest carbon store apart from the lithosphere?', back: 'The ocean', code: '2.a' }].map(c => ({ ...c, code: SPECS['OCR-H481'].topics.find(t => t.id === '1.2').ideas[0].code })) }) }] });
      return send(200, { content: [{ type: 'text', text: JSON.stringify({ text: 'Matthew, before the cards, straighten and read Tuesday\'s notes on your desktop in Earth\'s life support systems.', node: 'OCR-H481|1.2', station: 'desktop' }) }] }); }
    if (p.startsWith('/desk')) {
      if (!me) return send(401, { error: 'not signed in' });
      const segs = p.split('/').slice(2).map(decodeURIComponent);
      if (segs[0] === 'all') { const rooms = {}; for (const [r, its] of Object.entries(desk)) if (its.length) rooms[r] = { count: its.length, latest: its.slice(0, 12) }; return send(200, { rooms, used, quota: 250 * 1048576 }); }
      if (segs[0] === 'unfurl') { const u = url.searchParams.get('url') || ''; if (/youtu/.test(u)) return send(200, { title: 'The water cycle in 6 minutes', image: 'https://i.ytimg.com/vi/al-do-HGuIk/hqdefault.jpg', site: 'youtube.com', video: 'al-do-HGuIk', provider: 'youtube' }); return send(200, { title: 'OCR A level Geography — Earth\'s life support systems notes', image: '', site: 'physicsandmathstutor.com' }); }
      if (segs[0] === 'file') { const key = 'desk/' + segs.slice(1).join('/'); const f = files[key]; return f ? send(200, f.buf, f.type) : send(404, { error: 'not found' }); }
      const room = segs[0], sub = segs[1]; const its = desk[room] = desk[room] || [];
      if (m === 'GET') return send(200, { items: its, used, quota: 250 * 1048576 });
      if (m === 'POST' && sub === 'upload') { const id = rid(), type = req.headers['content-type'], name = req.headers['x-desk-name'] || 'file'; const key = `desk/matthew/${room}/${id}.jpg`; files[key] = { buf: raw, type }; used += raw.length; seen.upload = { bytes: raw.length, type, name }; fs.writeFileSync(path.join(OUT, 'desk-straightened.jpg'), raw); const item = { id, kind: type === 'application/pdf' ? 'file' : 'photo', at: new Date().toISOString(), name, key, size: raw.length, type, title: name.replace(/\.\w+$/, '') }; its.unshift(item); return send(200, { item, used, quota: 250 * 1048576 }); }
      if (m === 'POST') { const item = { id: rid(), at: new Date().toISOString(), ...body }; if (/youtu/.test(item.url || '')) { item.kind = 'video'; item.video = 'al-do-HGuIk'; item.provider = 'youtube'; item.pos = 47; } its.unshift(item); return send(200, { item }); }
      const it = its.find(x => x.id === sub); if (!it) return send(404, { error: 'not found' });
      if (m === 'PATCH') { Object.assign(it, body); seen.patches.push({ id: sub, keys: Object.keys(body), w: body.w, h: body.h }); return send(200, { item: it }); }
      if (m === 'DELETE') { desk[room] = its.filter(x => x.id !== sub); return send(200, { ok: true }); }
    }
    return send(404, { error: 'not found' });
  });
});

(async () => {
  await new Promise(r => server.listen(PORT, r));
  const browser = await chromium.launch(fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {});
  const ctx = await browser.newContext({ viewport: { width: 1180, height: 900 }, deviceScaleFactor: 2 });
  await ctx.addInitScript(() => { localStorage.setItem('platform:session', 'tok-matthew'); });
  const page = await ctx.newPage();
  await page.goto(ORIGIN); await page.waitForSelector('#v-today .steps', { timeout: 15000 });
  /* into the room, onto the desktop */
  await page.click('nav button[data-v="rooms"]'); await page.click('button[data-open="OCR-H481|1.2"]');
  await page.click('.stations button[data-station="desktop"]'); await page.waitForSelector('#dkPhoto', { timeout: 10000 });
  /* a photograph of a page of notes on a desk, skewed as a phone would see it */
  const quad = [[300, 170], [1330, 240], [1270, 1070], [230, 990]];
  const dataUrl = await page.evaluate((quad) => { const c = document.createElement('canvas'); c.width = 1600; c.height = 1200; const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 1600, 1200); grad.addColorStop(0, '#6d5f4b'); grad.addColorStop(1, '#4a3f31'); g.fillStyle = grad; g.fillRect(0, 0, 1600, 1200);
    g.save(); g.shadowColor = 'rgba(0,0,0,.5)'; g.shadowBlur = 40; g.shadowOffsetY = 18; g.beginPath(); g.moveTo(...quad[0]); for (const q of quad.slice(1)) g.lineTo(...q); g.closePath(); g.fillStyle = '#efece3'; g.fill(); g.restore();
    g.save(); g.beginPath(); g.moveTo(...quad[0]); for (const q of quad.slice(1)) g.lineTo(...q); g.closePath(); g.clip();
    const lines = ['Earth\'s life support systems - water cycle', '', 'Stores: atmosphere (0.001%), hydrosphere (oceans 96.5%),', 'cryosphere (ice sheets, glaciers), lithosphere (groundwater, soil).', '', 'Flows: evaporation, transpiration, condensation, precipitation,', 'infiltration, percolation, throughflow, groundwater flow, runoff.', '', 'Residence time = how long water stays in a store.', 'Atmosphere ~9 days; deep groundwater up to 10,000 years.', '', 'Carbon: photosynthesis takes CO2 in; respiration and', 'combustion release it. Ocean = biggest store bar the lithosphere.'];
    g.setTransform(1, 0.06, -0.04, 1, 0, 0); g.strokeStyle = '#b9c7d9'; g.lineWidth = 2; for (let y = 240; y < 1100; y += 52) { g.beginPath(); g.moveTo(320, y); g.lineTo(1330, y); g.stroke(); }
    g.fillStyle = '#1f3a6e'; g.font = 'italic 34px "Segoe Script","Bradley Hand",cursive'; lines.forEach((t, i) => g.fillText(t, 350, 275 + i * 52)); g.restore();
    return c.toDataURL('image/jpeg', 0.9); }, quad);
  const buffer = Buffer.from(dataUrl.split(',')[1], 'base64'); fs.writeFileSync(path.join(OUT, 'desk-photo-as-taken.jpg'), buffer);
  await page.setInputFiles('#dkPhoto', { name: 'tuesday-notes.jpg', mimeType: 'image/jpeg', buffer });
  await page.waitForSelector('#dkStage', { timeout: 10000 });
  /* drag the four handles onto the page's corners */
  const box = await page.locator('#dkStage').boundingBox();
  for (let i = 0; i < 4; i++) { const h = page.locator(`[data-dkhandle="${i}"]`); const hb = await h.boundingBox(); const tx = box.x + quad[i][0] / 1600 * box.width, ty = box.y + quad[i][1] / 1200 * box.height; await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2); await page.mouse.down(); await page.mouse.move(tx, ty, { steps: 8 }); await page.mouse.up(); }
  await page.screenshot({ path: path.join(OUT, 'desk-1-straighten.png'), fullPage: true });
  await page.click('#dkStraighten');
  await page.waitForSelector('.dblock[data-kind="photo"] [data-dkcards]', { timeout: 30000 });
  await page.click('.dblock[data-kind="photo"] [data-dktext]');
  await page.click('.dblock[data-kind="photo"] [data-dkcards]'); await page.waitForSelector('.dblock[data-kind="photo"] .dkind:has-text("cards made")', { timeout: 20000 });
  await page.fill('#dkUrl', 'https://www.youtube.com/watch?v=al-do-HGuIk'); await page.click('#dkAddLink'); await page.waitForSelector('.dblock[data-kind="video"]', { timeout: 10000 });
  await page.fill('#dkUrl', 'https://www.physicsandmathstutor.com/geography-revision/a-level-ocr/'); await page.click('#dkAddLink'); await page.waitForSelector('.dblock[data-kind="link"]', { timeout: 10000 });
  await page.fill('#dkFront', 'What is residence time?'); await page.fill('#dkBack', 'How long water stays in a store'); await page.click('#dkAddCard'); await page.waitForSelector('.dblock[data-kind="card"]', { timeout: 10000 });
  await page.fill('#dkNote', 'Ask Mr Hall about the difference between throughflow and interflow.'); await page.click('#dkAddNote'); await page.waitForSelector('.dblock[data-kind="note"]', { timeout: 10000 });
  await page.click('[data-dkplay]'); await page.waitForSelector('iframe.dframe', { timeout: 10000 }); await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(OUT, 'desk-2-wall.png'), fullPage: true });
  const cardsInDeck = await page.evaluate(() => Object.values(S.cards).filter(c => c.node === 'OCR-H481|1.2').length);
  /* Today: the three-week-old item resurfaces, the nudge points at the desktop */
  await page.reload(); await page.waitForSelector('#v-today .steps', { timeout: 15000 }); await page.waitForSelector('#v-today .dtoday', { timeout: 15000 }); await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, 'desk-3-today.png'), fullPage: false });
  /* the phone */
  const phone = await browser.newContext({ viewport: { width: 400, height: 820 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await phone.addInitScript(() => { localStorage.setItem('platform:session', 'tok-matthew'); });
  const pp = await phone.newPage(); await pp.goto(ORIGIN); await pp.waitForSelector('#v-today .steps', { timeout: 15000 });
  await pp.$eval('nav button[data-v="rooms"]', b => b.click()); await pp.waitForSelector('button[data-open="OCR-H481|1.2"]'); await pp.$eval('button[data-open="OCR-H481|1.2"]', b => b.click()); await pp.waitForSelector('.stations button[data-station="desktop"]'); await pp.$eval('.stations button[data-station="desktop"]', b => b.click()); await pp.waitForSelector('.dblock[data-kind="photo"]', { timeout: 10000 });
  await pp.screenshot({ path: path.join(OUT, 'desk-4-phone.png'), fullPage: true });
  await browser.close(); server.close();
  const dims = seen.patches.find(x => x.w);
  console.log('uploaded', seen.upload, '· straightened size', dims && `${dims.w}×${dims.h}`, '· tutor calls', JSON.stringify(seen.ai.filter(a => a.kind !== 'nudge')), '· cards in the room deck', cardsInDeck);
  const okDims = dims && dims.w <= 2000 && dims.h <= 2000 && Math.abs(dims.w / dims.h - 1050 / 860) < 0.15;
  console.log(seen.upload && seen.upload.bytes < 8 * 1048576 && okDims && seen.ai.some(a => a.kind === 'transcribe' && a.image && a.model === 'claude-haiku-4-5') && seen.ai.some(a => a.kind === 'cards') && cardsInDeck >= 4 ? 'PROOF: criteria 2, 3, 4, 5 and 6 seen in the browser' : 'PROOF: FAILED');
})().catch(e => { console.error(e); process.exit(1); });
