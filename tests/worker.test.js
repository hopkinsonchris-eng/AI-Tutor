/* Tutor service tests: accounts, sessions, invites, the proxy, progress, the in-app admin API, the
   Access-guarded recovery console, and courses (catalogue, builds, coalescing, retract, the review
   queue, the cron). The Worker is ES modules deployed by wrangler; here they are loaded as text with
   their imports satisfied from stubs (tests/_load.js). The deployed files are never touched. */
const fs = require('fs'), path = require('path');
const { loadModule, kv, r2, inlineStep } = require('./_load.js');
const validator = require('../src/spec-validator.js'), families = require('../src/families.js'), kitValidator = require('../src/kit-validator.js'), papersLib = require('../src/papers.js');
const { sampleKit } = require('./_kit.js');
const CATALOGUE = require('../data/catalogue.json');
let pass = 0; const fails = [];
const ok = (label, cond, detail = '') => cond ? pass++ : fails.push(label + (detail ? ' — ' + detail : ''));

const builder = loadModule(path.join(__dirname, '..', 'worker', 'builder.js'), { '../src/spec-validator.js': validator, '../src/families.js': families });
class WorkflowEntrypoint { constructor(ctx, env) { this.ctx = ctx; this.env = env; } }
const depth = loadModule(path.join(__dirname, '..', 'worker', 'depth.js'), { '../src/kit-validator.js': kitValidator, '../src/families.js': families });
const papersMod = loadModule(path.join(__dirname, '..', 'worker', 'papers.js'), { 'cloudflare:workers': { WorkflowEntrypoint }, '../src/papers.js': papersLib });
const loaded = loadModule(path.join(__dirname, '..', 'worker', 'index.js'), { 'cloudflare:workers': { WorkflowEntrypoint }, './builder.js': builder.exports, './depth.js': depth.exports, './papers.js': papersMod.exports, '../data/catalogue.json': { default: CATALOGUE } });
const worker = loaded.exports.default;
const sandbox = loaded.sandbox;
builder.sandbox.__fetch = (...a) => sandbox.__fetch(...a);
papersMod.sandbox.__fetch = (...a) => sandbox.__fetch(...a);

let upstreamSeen = null;
const req = (path, init = {}) => new Request('https://tutor.example.com' + path, init);
const J = (method, body, extra = {}) => ({ method, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json', ...extra } });
const bearer = t => ({ Authorization: 'Bearer ' + t });
const baseEnv = () => ({ ANTHROPIC_API_KEY: 'sk-ant-test', ALLOWED_ORIGIN: 'https://studyplatform.example', SITE_ORIGIN: 'https://studyplatform.example', ADMIN_USERNAME: 'chris', USAGE: kv(), DESK: r2() });

(async () => {
  const pair = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const pubJwk = await crypto.subtle.exportKey('jwk', pair.publicKey);
  const KID = 'test-kid', TEAM = 'team.cloudflareaccess.com', AUD = 'aud-tag-123';
  const b64u = buf => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  async function jwt(payload, { sign = true } = {}) {
    const h = b64u(JSON.stringify({ alg: 'RS256', kid: KID, typ: 'JWT' })), p = b64u(JSON.stringify(payload));
    const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', pair.privateKey, new TextEncoder().encode(`${h}.${p}`));
    return `${h}.${p}.${sign ? b64u(sig) : b64u(new Uint8Array(256))}`;
  }
  const claims = (over = {}) => ({ iss: `https://${TEAM}`, aud: [AUD], email: 'chris@example.com', exp: Math.floor(Date.now() / 1000) + 600, ...over });
  sandbox.__fetch = async (url, init) => {
    if (String(url).includes('/cdn-cgi/access/certs')) return new Response(JSON.stringify({ keys: [{ ...pubJwk, kid: KID, alg: 'RS256' }] }));
    upstreamSeen = { url: String(url), headers: init.headers, body: JSON.parse(init.body) };
    return new Response(JSON.stringify({ id: 'msg_1', content: [{ type: 'text', text: 'OK' }] }), { status: 200 });
  };

  /* ---------- health, CORS, no KV ---------- */
  let env = baseEnv(), r;
  r = await worker.fetch(req('/'), env);
  ok('W1 health check answers', r.status === 200 && (await r.json()).service === 'tutor-proxy');
  r = await worker.fetch(req('/', { method: 'OPTIONS' }), env);
  ok('W2 preflight allows the site origin, Authorization, and the admin verbs', r.status === 204 && r.headers.get('Access-Control-Allow-Origin') === 'https://studyplatform.example' && /Authorization/.test(r.headers.get('Access-Control-Allow-Headers')) && /PATCH/.test(r.headers.get('Access-Control-Allow-Methods')));
  r = await worker.fetch(req('/'), { ...baseEnv(), USAGE: undefined });
  ok('W3 refuses to run without KV rather than half-working', r.status === 503);

  /* ---------- bootstrap the admin through the recovery console ---------- */
  env.ACCESS_TEAM_DOMAIN = TEAM; env.ACCESS_AUD = AUD;
  r = await worker.fetch(req('/admin'), env);
  ok('W4 recovery console needs an Access token', r.status === 401);
  r = await worker.fetch(req('/admin', { headers: { 'Cf-Access-Jwt-Assertion': await jwt(claims(), { sign: false }) } }), env);
  ok('W4 a forged Access token is refused', r.status === 401);
  r = await worker.fetch(req('/admin', { headers: { 'Cf-Access-Jwt-Assertion': await jwt(claims({ aud: ['other'] })) } }), env);
  ok('W4 an Access token for another app is refused', r.status === 401);
  const A = async () => ({ 'Cf-Access-Jwt-Assertion': await jwt(claims()) });
  r = await worker.fetch(req('/admin', { headers: await A() }), env);
  ok('W5 recovery console opens with a valid token and names the admin', r.status === 200 && /chris@example.com/.test(await r.text()));
  r = await worker.fetch(req('/admin/bootstrap', { method: 'POST', headers: await A() }), env);
  const boot = await r.json();
  ok('W6 bootstrap mints an invite for the admin account', r.status === 200 && boot.username === 'chris' && /#invite=[A-Za-z0-9_-]{20,}/.test(boot.invite.link), JSON.stringify(boot));
  r = await worker.fetch(req('/manage/users'), env);
  ok('W6 the admin API is not reachable through the Access console', r.status === 401);

  /* ---------- invite -> password -> session ---------- */
  const adminInviteToken = boot.invite.link.split('#invite=')[1];
  r = await worker.fetch(req('/auth/invite?token=' + adminInviteToken), env);
  ok('W7 an invite says who it is for', r.status === 200 && (await r.json()).username === 'chris');
  r = await worker.fetch(req('/auth/invite', J('POST', { token: adminInviteToken, password: 'short' })), env);
  ok('W8 a short password is refused', r.status === 400);
  r = await worker.fetch(req('/auth/invite', J('POST', { token: adminInviteToken, password: 'correct horse battery' })), env);
  const adminSession = await r.json();
  ok('W9 accepting the invite sets the password and signs in as admin', r.status === 200 && adminSession.token && adminSession.user.role === 'admin');
  r = await worker.fetch(req('/auth/invite?token=' + adminInviteToken), env);
  ok('W9 an invite is single-use', r.status === 404);
  const ADM = bearer(adminSession.token);

  /* ---------- login ---------- */
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'Chris', password: 'correct horse battery' })), env);
  ok('W10 login works and usernames are case-insensitive', r.status === 200 && (await r.json()).user.username === 'chris');
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'chris', password: 'wrong' })), env);
  ok('W11 wrong password is refused', r.status === 401);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'nobody', password: 'x' })), env);
  ok('W11 unknown user gets the same answer as a wrong password', r.status === 401);
  r = await worker.fetch(req('/auth/me', { headers: ADM }), env);
  ok('W12 /auth/me returns the signed-in user', (await r.json()).user.username === 'chris');
  r = await worker.fetch(req('/auth/me', { headers: bearer('not-a-real-token-at-all-xxxxx') }), env);
  ok('W12 a made-up token is not a session', r.status === 401);

  /* ---------- admin creates a student ---------- */
  r = await worker.fetch(req('/manage/users', J('POST', { username: 'Matthew', name: 'Matthew', daily: 150 }, ADM)), env);
  const made = await r.json();
  ok('W13 admin creates a student and gets an invite link', r.status === 201 && made.user.username === 'matthew' && made.user.daily === 150 && !made.user.hasPassword && /#invite=/.test(made.invite.link), JSON.stringify(made));
  r = await worker.fetch(req('/manage/users', J('POST', { username: 'matthew', name: 'Again' }, ADM)), env);
  ok('W13 a taken username is refused', r.status === 409);
  r = await worker.fetch(req('/manage/users', J('POST', { username: 'Bad Name!', name: 'x' }, ADM)), env);
  ok('W13 a bad username is refused', r.status === 400);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'matthew', password: 'anything' })), env);
  ok('W14 a student cannot sign in before accepting the invite', r.status === 401);

  const mToken = made.invite.link.split('#invite=')[1];
  r = await worker.fetch(req('/auth/invite', J('POST', { token: mToken, password: 'matthews password' })), env);
  const mSession = await r.json();
  ok('W15 the student sets a password through the invite', r.status === 200 && mSession.user.role === 'student');
  const STU = bearer(mSession.token);

  /* ---------- the proxy is keyed to the session ---------- */
  r = await worker.fetch(req('/', J('POST', { messages: [{ role: 'user', content: 'hi' }], model: 'gpt-4' })), env);
  ok('W16 the proxy refuses without a session', r.status === 401);
  upstreamSeen = null;
  r = await worker.fetch(req('/', J('POST', { messages: [{ role: 'user', content: 'hi' }], model: 'gpt-4' }, STU)), env);
  ok('W17 a signed-in student is forwarded to Anthropic', r.status === 200 && upstreamSeen && upstreamSeen.url === 'https://api.anthropic.com/v1/messages');
  ok('W17 an unknown model falls back to Sonnet 5', upstreamSeen.body.model === 'claude-sonnet-5');
  ok('W17 the API key is added server-side', upstreamSeen.headers['x-api-key'] === 'sk-ant-test');
  ok('W17 the request is tagged with the username', upstreamSeen.body.metadata.user_id === 'matthew');
  r = await worker.fetch(req('/v1/messages', J('POST', { messages: [{}] }, STU)), env);
  ok('W17 /v1/messages is accepted too', r.status === 200);

  await env.USAGE.put('user:matthew', JSON.stringify({ ...(await env.USAGE.get('user:matthew', 'json')), daily: 2 }));
  r = await worker.fetch(req('/', J('POST', { messages: [{}] }, STU)), env);
  ok('W18 the daily cap stops the request past the limit', r.status === 429 && /daily limit of 2/.test((await r.json()).error.message));

  /* ---------- progress ---------- */
  r = await worker.fetch(req('/progress', { headers: STU }), env);
  ok('W19 nothing saved yet reads as 404', r.status === 404);
  r = await worker.fetch(req('/progress', { method: 'PUT', headers: { ...STU, 'Content-Type': 'application/json' }, body: JSON.stringify({ device: 'an iPad', state: { nodes: {}, setup: { student: 'Matthew' } } }) }), env);
  ok('W20 progress is saved', r.status === 200);
  r = await worker.fetch(req('/progress', { headers: STU }), env);
  const saved = await r.json();
  ok('W20 progress reads back with device and time', saved.state.setup.student === 'Matthew' && saved.device === 'an iPad' && !!saved.updatedAt);
  r = await worker.fetch(req('/progress', { headers: ADM }), env);
  ok('W21 another account does not see it', r.status === 404);
  r = await worker.fetch(req('/progress', { method: 'PUT', headers: STU, body: JSON.stringify({ state: { pad: 'x'.repeat(1_000_100) } }) }), env);
  ok('W21 an oversized save is rejected', r.status === 413);

  /* ---------- the per-room desktop: index in KV, files in R2, private to the owner ---------- */
  {
    const jpeg = new Uint8Array(2000); jpeg[0] = 0xFF; jpeg[1] = 0xD8;
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2', { headers: STU }), { ...env, DESK: undefined });
    ok('D1 without an R2 binding the desktop answers 503 with a readable message (criterion 12)', r.status === 503 && /not set up/.test((await r.json()).error));
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2'), env);
    ok('D1 the desktop needs a session', r.status === 401);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2', { headers: STU }), env);
    let d = await r.json();
    ok('D2 an empty room desktop lists no items and the quota', r.status === 200 && Array.isArray(d.items) && d.items.length === 0 && d.quota > 0 && d.used === 0);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2', J('POST', { kind: 'link', url: 'https://example.org/a', title: 'A page', site: 'example.org' }, STU)), env);
    const link = await r.json();
    ok('D2 a link item is stored with an id and a time', r.status === 200 && link.item && link.item.id && link.item.at && link.item.kind === 'link' && link.item.title === 'A page');
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2', J('POST', { kind: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'A video' }, STU)), env);
    const vid = (await r.json()).item;
    ok('D2 a video item keeps its id for the player', r.status === 200 && vid.video === 'dQw4w9WgXcQ' && vid.pos === 0);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2/' + vid.id, J('PATCH', { pos: 312 }, STU)), env);
    ok('D6 the player position is remembered (criterion 5)', r.status === 200 && (await r.json()).item.pos === 312);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2', J('POST', { kind: 'note', text: 'x'.repeat(5000) }, STU)), env);
    ok('D2 a note is clipped to the size the index allows', r.status === 200 && (await r.json()).item.text.length === 3000);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2/upload', { method: 'POST', headers: { ...STU, 'Content-Type': 'image/jpeg', 'X-Desk-Name': 'notes.jpg', 'X-Desk-Kind': 'photo' }, body: jpeg }), env);
    const photo = (await r.json()).item;
    ok('D3 a photo upload lands in R2 under the owner and becomes a photo item', r.status === 200 && photo.kind === 'photo' && photo.size === 2000 && photo.key.startsWith('desk/matthew/') && env.DESK._map.has(photo.key), JSON.stringify(photo));
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2/' + photo.id, J('PATCH', { text: 'The water cycle has three stores', thumb: 'data:image/jpeg;base64,AAAA' }, STU)), env);
    ok('D6 the transcription and thumbnail attach to the photo (criterion 3)', r.status === 200 && (await r.json()).item.text === 'The water cycle has three stores');
    r = await worker.fetch(req('/desk/file/' + photo.key.replace(/^desk\//, ''), { headers: STU }), env);
    ok('D9 the owner reads the file back with its type', r.status === 200 && r.headers.get('Content-Type') === 'image/jpeg' && (await r.arrayBuffer()).byteLength === 2000);
    r = await worker.fetch(req('/desk/file/' + photo.key.replace(/^desk\//, ''), { headers: ADM }), env);
    ok('D9 another account cannot read it (criterion 9)', r.status === 404);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2', { headers: ADM }), env);
    ok('D9 another account sees an empty desktop for the same room', (await r.json()).items.length === 0);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2/upload', { method: 'POST', headers: { ...STU, 'Content-Type': 'text/html', 'X-Desk-Name': 'x.html' }, body: 'hello' }), env);
    ok('D7 only images and PDFs are accepted', r.status === 415);
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2/upload', { method: 'POST', headers: { ...STU, 'Content-Type': 'image/png', 'X-Desk-Name': 'big.png' }, body: new Uint8Array(8 * 1024 * 1024 + 1) }), env);
    ok('D8 a file over 8 MB is refused', r.status === 413);
    await env.USAGE.put('deskq:matthew', String(250 * 1024 * 1024 - 100));
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2/upload', { method: 'POST', headers: { ...STU, 'Content-Type': 'image/jpeg', 'X-Desk-Name': 'n.jpg' }, body: jpeg }), env);
    ok('D8 the 250 MB quota refuses the upload with a readable message (criterion 8)', r.status === 413 && /250 MB/.test((await r.json()).error));
    await env.USAGE.put('deskq:matthew', '2000');
    const idx = await env.USAGE.get('desk:matthew:OCR-H481|1.2', 'json');
    idx.items = idx.items.concat(Array.from({ length: 200 }, (_, i) => ({ id: 'f' + i, kind: 'note', text: 'n', at: '2026-09-01T00:00:00Z' })));
    await env.USAGE.put('desk:matthew:OCR-H481|1.2', JSON.stringify(idx));
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2', J('POST', { kind: 'note', text: 'one more' }, STU)), env);
    ok('D8 the 201st item in a room is refused with a readable message', r.status === 409 && /200 items/.test((await r.json()).error));
    idx.items = idx.items.filter(x => !(/^f\d+$/.test(String(x.id)) && x.kind === 'note' && x.text === 'n')); await env.USAGE.put('desk:matthew:OCR-H481|1.2', JSON.stringify(idx));
    r = await worker.fetch(req('/desk/OCR-H481%7C1.2/' + photo.id, { method: 'DELETE', headers: STU }), env);
    ok('D2 deleting a photo removes the item, the file and its bytes from the quota', r.status === 200 && !env.DESK._map.has(photo.key) && (await env.USAGE.get('deskq:matthew')) === '0');
    r = await worker.fetch(req('/desk/all', { headers: STU }), env);
    d = await r.json();
    ok('D10 the course view lists each room with a count and the latest items', d.rooms['OCR-H481|1.2'] && d.rooms['OCR-H481|1.2'].count === 3 && d.rooms['OCR-H481|1.2'].latest.length === 3 && d.rooms['OCR-H481|1.2'].latest[0].kind === 'note');
    const saveFetch = sandbox.__fetch;
    sandbox.__fetch = async (url) => new Response('<html><head><title>T</title><meta property="og:title" content="Coasts explained"><meta property="og:image" content="https://cdn.example.org/c.jpg"></head></html>', { status: 200, headers: { 'Content-Type': 'text/html' } });
    r = await worker.fetch(req('/desk/unfurl?url=' + encodeURIComponent('https://example.org/coasts'), { headers: STU }), env);
    d = await r.json();
    ok('D11 a link is unfurled to its title and preview image (criterion 6)', r.status === 200 && d.title === 'Coasts explained' && d.image === 'https://cdn.example.org/c.jpg' && d.site === 'example.org', JSON.stringify(d));
    let bad = 0; for (const u of ['ftp://example.org/x', 'http://127.0.0.1/x', 'http://10.1.2.3/x', 'http://localhost/x', 'http://192.168.1.1/x', 'http://[::1]/x', 'javascript:alert(1)']) { r = await worker.fetch(req('/desk/unfurl?url=' + encodeURIComponent(u), { headers: STU }), env); if (r.status === 400) bad++; }
    ok('D11 unfurl refuses non-http schemes and private addresses (criterion 10)', bad === 7, String(bad));
    sandbox.__fetch = saveFetch;
  }

  /* ---------- role gating and admin operations ---------- */
  r = await worker.fetch(req('/manage/users', { headers: STU }), env);
  ok('W22 a student cannot use the admin API', r.status === 403);
  r = await worker.fetch(req('/manage/users', { headers: ADM }), env);
  const listed = await r.json();
  const mRow = listed.users.find(u => u.username === 'matthew');
  ok('W23 admin lists users with usage, password state and last device', listed.users.length === 2 && mRow.today === 2 && mRow.hasPassword && mRow.device === 'an iPad' && listed.users[0].role === 'admin', JSON.stringify(listed));

  r = await worker.fetch(req('/manage/users/matthew', J('PATCH', { disabled: true }, ADM)), env);
  ok('W24 admin can turn a student off', (await r.json()).user.disabled === true);
  r = await worker.fetch(req('/auth/me', { headers: STU }), env);
  ok('W24 a disabled student loses their session at once', r.status === 401);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'matthew', password: 'matthews password' })), env);
  ok('W24 and cannot sign back in', r.status === 403);
  r = await worker.fetch(req('/manage/users/matthew', J('PATCH', { disabled: false, daily: 99999 }, ADM)), env);
  ok('W25 re-enabled, and a silly cap is clamped', (await r.json()).user.daily === 2000);

  r = await worker.fetch(req('/manage/users/matthew/invite', { method: 'POST', headers: ADM }), env);
  const reset = await r.json();
  ok('W26 admin can mint a fresh invite to reset a password', r.status === 200 && /#invite=/.test(reset.invite.link));
  const t2 = reset.invite.link.split('#invite=')[1];
  r = await worker.fetch(req('/auth/invite', J('POST', { token: t2, password: 'a new password' })), env);
  ok('W26 the reset invite sets a new password', r.status === 200);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'matthew', password: 'a new password' })), env);
  ok('W26 the new password works', r.status === 200);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'matthew', password: 'matthews password' })), env);
  ok('W26 the old one does not', r.status === 401);

  r = await worker.fetch(req('/manage/users/chris', J('PATCH', { disabled: true }, ADM)), env);
  ok('W27 an admin cannot lock themselves out', r.status === 400);
  r = await worker.fetch(req('/manage/users/chris', { method: 'DELETE', headers: ADM }), env);
  ok('W27 or delete their own account', r.status === 400);
  r = await worker.fetch(req('/manage/users/matthew', { method: 'DELETE', headers: ADM }), env);
  ok('W28 deleting a student removes them and their progress', r.status === 200 && !(await env.USAGE.get('user:matthew')) && !(await env.USAGE.get('progress:matthew')));

  /* ---------- password change, logout ---------- */
  r = await worker.fetch(req('/auth/password', J('POST', { current: 'wrong', next: 'whatever this is' }, ADM)), env);
  ok('W29 changing a password needs the current one', r.status === 401);
  r = await worker.fetch(req('/auth/password', J('POST', { current: 'correct horse battery', next: 'brand new phrase' }, ADM)), env);
  ok('W29 password changed', r.status === 200);
  r = await worker.fetch(req('/auth/logout', { method: 'POST', headers: ADM }), env);
  r = await worker.fetch(req('/auth/me', { headers: ADM }), env);
  ok('W30 logout ends the session', r.status === 401);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'chris', password: 'brand new phrase' })), env);
  ok('W30 the changed password signs in', r.status === 200);

  /* ---------- brute force ---------- */
  env = baseEnv();
  for (let i = 0; i < 10; i++) await worker.fetch(req('/auth/login', J('POST', { username: 'target', password: 'guess' + i })), env);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'target', password: 'guess' })), env);
  ok('W31 ten wrong guesses at one account locks further attempts for the day', r.status === 429);
  r = await worker.fetch(req('/auth/login', J('POST', { username: 'someone-else', password: 'guess' })), env);
  ok('W31 other accounts are still answered from the same address until the address limit', r.status === 401);

  /* ---------- password hashing ---------- */
  const rec = await (async () => { const e = baseEnv(); e.ACCESS_TEAM_DOMAIN = TEAM; e.ACCESS_AUD = AUD;
    const b = await (await worker.fetch(req('/admin/bootstrap', { method: 'POST', headers: await A() }), e)).json();
    await worker.fetch(req('/auth/invite', J('POST', { token: b.invite.link.split('#invite=')[1], password: 'hash me please' })), e);
    return e.USAGE.get('user:chris', 'json'); })();
  ok('W32 passwords are stored as salted PBKDF2 hashes, never plain', rec.pw && rec.pw.salt && rec.pw.hash && rec.pw.iter === 100000 && !JSON.stringify(rec).includes('hash me please'));


  /* ================= courses: catalogue, builds, coalescing, retract, review queue, cron ================= */
  {
    /* an admin and a student, the short way */
    const e = baseEnv(); e.ACCESS_TEAM_DOMAIN = TEAM; e.ACCESS_AUD = AUD;
    const boot2 = await (await worker.fetch(req('/admin/bootstrap', { method: 'POST', headers: await A() }), e)).json();
    const adm = await (await worker.fetch(req('/auth/invite', J('POST', { token: boot2.invite.link.split('#invite=')[1], password: 'admin pass phrase' })), e)).json();
    const ADM2 = bearer(adm.token);
    const mk = await (await worker.fetch(req('/manage/users', J('POST', { username: 'kitty', name: 'Kitty', daily: 200 }, ADM2)), e)).json();
    const stu = await (await worker.fetch(req('/auth/invite', J('POST', { token: mk.invite.link.split('#invite=')[1], password: 'kitty pass phrase' })), e)).json();
    const STU2 = bearer(stu.token);

    /* canned model answers and a Workflow binding that runs the pipeline when the test says so */
    const idea = (c) => ({ code: c, q: 'What does ' + c + ' require?', idea: 'Idea ' + c, content: 'The specification statement for ' + c + ', in the board\'s own words, with what the student must do.' });
    let judgeScore = 0.9;
    const cannedAI = () => ({
      async outline({ subject, board, code, level }) { return { board, subject, code, level, version: 'Issue 2 (2019)', firstExam: 2017, essaySubject: false, family: 'science',
        components: [{ id: 'P1', name: 'Paper 1', paperCode: code + '/1', marks: 91, weight: 50, minutes: 120, nea: false, coversAll: false, sections: [] }, { id: 'P2', name: 'Paper 2', paperCode: code + '/2', marks: 91, weight: 50, minutes: 120, nea: false, coversAll: false, sections: [] }],
        options: [], ao: [{ id: 'AO1', label: 'K', text: 'Knowledge.' }, { id: 'AO2', label: 'A', text: 'Application.' }],
        markConventions: { style: 'points', summary: 'Points.', commandWords: ['Describe', 'Explain', 'Compare', 'Evaluate', 'Calculate'].map(w => ({ word: w, means: w + ' demands…' })), essayShapes: [{ marks: 6, minutes: 8, structure: 'Levels-marked.' }] },
        topics: [{ id: '3.1', component: 'P1', option: null, name: 'Proof' }, { id: '3.2', component: 'P2', option: null, name: 'Algebra and functions' }] }; },
      async topic({ topic }) { return { ideas: [idea(topic.id + '.1'), idea(topic.id + '.2')], caseStudies: ['RP1'], skills: [] }; },
      async judge() { return { score: judgeScore, coverage: 0.9, fidelity: 0.9, options: 1, familyFit: 0.9, invented: [], missing: judgeScore < 0.8 ? ['3.3 Exchange'] : [], changes: [], notes: 'ok' }; },
      async locate() { return { url: 'https://evil.example/not-allowed.pdf' }; },
      async docChanges() { return { changes: ['Issue 2 corrects a mark total.'], notes: '' }; },
    });
    let headEtag = '"v1"';
    const head = async (url) => ({ ok: true, status: 200, contentType: 'application/pdf', etag: headEtag, lastModified: 'Mon, 01 Sep 2025 00:00:00 GMT', length: 1000, url });
    const pending = [];
    e.COURSE_BUILDER = { created: [], async create({ id, params }) { this.created.push(id); pending.push(() => builder.exports.runBuild(params, { ...loaded.exports.builderDeps(e, inlineStep()), ai: cannedAI(), head })); return { id }; } };
    const cannedKit = () => ({ async kit({ topic, family }) { return sampleKit(topic, family); }, async judgeKit() { return { score: 0.95, wrong: [], problems: [], notes: 'ok' }; } });
    e.COURSE_DEPTH = { created: [], async create({ id, params }) { this.created.push(params); pending.push(() => depth.exports.runDepth(params, { kv: e.USAGE, step: inlineStep(), ai: cannedKit(), now: () => new Date().toISOString() })); return { id }; } };
    e.COURSE_REVIEW = { created: [], async create({ id, params }) { this.created.push(id); pending.push(() => builder.exports.runReview(params.id, { kv: e.USAGE, step: inlineStep(), ai: cannedAI(), head, now: () => new Date().toISOString(), boardDomains: CATALOGUE.boardDomains })); return { id }; } };
    const runPending = async () => { while (pending.length) await pending.shift()(); };

    r = await worker.fetch(req('/courses'), e);
    ok('C1 the catalogue needs a session', r.status === 401);
    r = await worker.fetch(req('/courses', { headers: STU2 }), e);
    let cat = await r.json();
    ok('C1 the catalogue lists every qualification with an id, both levels, and which have a verified link', cat.catalogue.length === CATALOGUE.qualifications.length && cat.catalogue.some(q => q.id === 'AQA-7357' && q.level === 'A level') && cat.catalogue.some(q => q.level === 'GCSE') && cat.catalogue.filter(q => q.hasUrl).length === 20, String(cat.catalogue.length) + ' verified ' + cat.catalogue.filter(q => q.hasUrl).length);

    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'Astrology', board: 'AQA' }, STU2)), e);
    ok('C2 an unknown qualification is refused with a pointer to the admin', r.status === 404 && /catalogue/.test((await r.json()).error));

    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'Mathematics', board: 'AQA' }, STU2)), e);
    let b = await r.json();
    ok('C3 a student\'s Add starts one build and gets a progress record', r.status === 202 && b.status === 'building' && b.joined === false && e.COURSE_BUILDER.created.length === 1 && /^AQA-7357-\d+$/.test(e.COURSE_BUILDER.created[0]) && b.build.total === 4, JSON.stringify(b));
    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'mathematics', board: 'aqa', code: '7357' }, ADM2)), e);
    b = await r.json();
    ok('C4 a second Add for the same course joins the running build — no second instance (criterion 3)', r.status === 202 && b.joined === true && e.COURSE_BUILDER.created.length === 1);
    r = await worker.fetch(req('/courses/AQA-7357/status', { headers: STU2 }), e);
    ok('C4 the status endpoint reports the build to anyone signed in', (await r.json()).status === 'building');
    r = await worker.fetch(req('/courses/AQA-7357/spec', { headers: STU2 }), e);
    ok('C4 the spec is not readable until published', r.status === 404);

    await runPending();
    r = await worker.fetch(req('/courses/AQA-7357/status', { headers: STU2 }), e);
    let st = await r.json();
    ok('C5 when the build finishes the status is published with provenance', st.status === 'published' && st.build.done === st.build.total && st.meta.source.url && st.meta.judge.score === 0.9 && st.meta.built.promptVersion, JSON.stringify(st));
    r = await worker.fetch(req('/courses/AQA-7357/spec', { headers: STU2 }), e);
    const got = await r.json();
    ok('C5 a student can read the published spec and it passes the contract', r.status === 200 && validator.validateSpec(got.spec).ok && got.spec.id === 'AQA-7357');
    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'Mathematics', board: 'AQA' }, STU2)), e);
    ok('C6 Add for a published course returns it at once, no build (criterion 1)', r.status === 200 && (await r.json()).status === 'published' && e.COURSE_BUILDER.created.length === 1);
    r = await worker.fetch(req('/courses', { headers: STU2 }), e);
    cat = await r.json();
    ok('C6 the catalogue now shows the course as published', cat.courses['AQA-7357'] && cat.courses['AQA-7357'].status === 'published');

    /* three-panel GUI, criterion 12: an admin edits a course's hub links and students see them */
    r = await worker.fetch(req('/manage/courses/AQA-7357/links', J('POST', { hubs: [{ name: 'Physics & Maths Tutor', url: 'https://www.physicsandmathstutor.com/maths-revision/', kind: 'notes' }] }, STU2)), e);
    ok('L1 students cannot edit a course\'s links', r.status === 403);
    r = await worker.fetch(req('/manage/courses/AQA-7357/links', J('POST', { hubs: [{ name: 'Physics & Maths Tutor', url: 'http://www.physicsandmathstutor.com/maths-revision/', kind: 'notes' }] }, ADM2)), e);
    ok('L1 a link that is not https is refused and named', r.status === 400 && /https/.test((await r.json()).error));
    r = await worker.fetch(req('/manage/courses/AQA-7357/links', J('POST', { hubs: [{ name: 'Physics & Maths Tutor', url: 'https://www.physicsandmathstutor.com/maths-revision/', kind: 'notes' }, { name: 'AQA', url: 'https://www.aqa.org.uk/subjects/mathematics/as-and-a-level/mathematics-7357', kind: 'official' }] }, ADM2)), e);
    ok('L1 the admin saves hub links for a published course', r.status === 200 && (await r.json()).hubs.length === 2);
    r = await worker.fetch(req('/courses/AQA-7357/spec', { headers: STU2 }), e);
    const withLinks = await r.json();
    ok('L2 the student\'s spec carries the saved links and a resources stamp so devices refresh their cache', withLinks.spec.resources.hubs.length === 2 && withLinks.spec.resources.hubs[1].kind === 'official' && withLinks.meta.resources && !!withLinks.meta.resources.at, JSON.stringify(withLinks.meta && withLinks.meta.resources));
    r = await worker.fetch(req('/courses', { headers: STU2 }), e);
    ok('L2 the course list shows the same stamp', (await r.json()).courses['AQA-7357'].resources.at === withLinks.meta.resources.at);
    r = await worker.fetch(req('/manage/courses', { headers: ADM2 }), e);
    ok('L2 the admin course list carries the links to edit', (await r.json()).courses.find(c => c.id === 'AQA-7357').resources.hubs.length === 2);
    r = await worker.fetch(req('/manage/courses/AQA-9999/links', J('POST', { hubs: [] }, ADM2)), e);
    ok('L1 links for a course that is not published are refused', r.status === 404);

    /* course depth (tooler criteria 1, 5, 6): starts on publish, served per room, retried and rebuilt by the admin */
    ok('K1 publishing a course starts its depth build automatically, for every room', e.COURSE_DEPTH.created.some(p => p.id === 'AQA-7357' && !p.only), JSON.stringify(e.COURSE_DEPTH.created));
    await runPending();
    r = await worker.fetch(req('/courses/AQA-7357/kit/3.1', { headers: STU2 }), e);
    const kit = await r.json();
    ok('K2 a student reads a room\'s kit once it is written, with its provenance', r.status === 200 && kit.kit && kit.kit.lesson.why.length > 200 && kit.kit.room.questions.length === 12 && kit.kit.built.judge.score === 0.95, JSON.stringify(kit).slice(0, 200));
    r = await worker.fetch(req('/courses/AQA-7357/kit/9.9', { headers: STU2 }), e);
    ok('K2 a room with no kit is a clean 404', r.status === 404);
    r = await worker.fetch(req('/courses/AQA-7357/kit/3.1'), e);
    ok('K2 kits need a session', r.status === 401);
    r = await worker.fetch(req('/courses', { headers: STU2 }), e);
    const dep = (await r.json()).depth;
    ok('K2 the course list carries each course\'s depth: which rooms are written, with their stamps', dep && dep['AQA-7357'] && dep['AQA-7357'].status === 'done' && dep['AQA-7357'].total === 2 && dep['AQA-7357'].done['3.1'] && Array.isArray(dep['AQA-7357'].failed), JSON.stringify(dep));
    r = await worker.fetch(req('/manage/courses/AQA-7357/depth/3.1', { method: 'POST', headers: STU2 }), e);
    ok('K3 students cannot start depth builds', r.status === 403);
    r = await worker.fetch(req('/manage/courses/AQA-7357/depth/3.1', { method: 'POST', headers: ADM2 }), e);
    ok('K3 the admin retries one room', r.status === 202 && e.COURSE_DEPTH.created.some(p => p.id === 'AQA-7357' && p.only && p.only[0] === '3.1'));
    r = await worker.fetch(req('/manage/courses/AQA-7357/depth', { method: 'POST', headers: ADM2 }), e);
    ok('K3 the admin rebuilds a course\'s depth', r.status === 202 && e.COURSE_DEPTH.created.filter(p => p.id === 'AQA-7357' && !p.only).length === 2);
    r = await worker.fetch(req('/manage/courses/AQA-9999/depth', { method: 'POST', headers: ADM2 }), e);
    ok('K3 depth needs a published course', r.status === 404);
    await runPending();
    r = await worker.fetch(req('/manage/courses', { headers: ADM2 }), e);
    const mcd = (await r.json()).courses.find(c => c.id === 'AQA-7357');
    ok('K3 the admin course list carries the depth record with its call count', mcd.depth && mcd.depth.total === 2 && mcd.depth.calls > 0 && mcd.depth.status === 'done', JSON.stringify(mcd.depth));
    const targets = loaded.exports.depthTargets([{ kind: 'idea-changed', topic: '3.1' }, { kind: 'topic-added', topic: '3.4' }, { kind: 'topic-removed', topic: '3.3' }, { kind: 'version', topic: null }, { kind: 'component-changed', topic: null }]);
    ok('K4 approving a proposal rebuilds only the rooms whose ideas changed or were added, and drops removed ones', targets.rebuild.join() === '3.1,3.4' && targets.remove.join() === '3.3', JSON.stringify(targets));
    ok('K4 a proposal with no topic-level change rebuilds nothing', loaded.exports.depthTargets([{ kind: 'version', topic: null }]).rebuild.length === 0);

    r = await worker.fetch(req('/manage/courses', { headers: STU2 }), e);
    ok('C7 a student cannot see the admin course list', r.status === 403);
    r = await worker.fetch(req('/manage/courses', { headers: ADM2 }), e);
    const mc = await r.json(); 
    ok('C7 the admin course list carries full provenance and the requester', mc.courses.length === 1 && mc.courses[0].source.etag === '"v1"' && mc.courses[0].built.models.length === 3 && mc.courses[0].build.status === 'published');

    /* retract / restore (criterion 7) */
    r = await worker.fetch(req('/manage/courses/AQA-7357/retract', { method: 'POST', headers: STU2 }), e);
    ok('C8 a student cannot retract', r.status === 403);
    r = await worker.fetch(req('/manage/courses/AQA-7357/retract', { method: 'POST', headers: ADM2 }), e);
    ok('C8 admin retracts', r.status === 200 && (await r.json()).meta.status === 'retracted');
    r = await worker.fetch(req('/courses/AQA-7357/spec', { headers: STU2 }), e);
    ok('C8 a retracted course cannot be fetched by a new student', r.status === 404);
    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'Mathematics', board: 'AQA' }, STU2)), e);
    ok('C8 and cannot be added', r.status === 409 && /withdrawn/.test((await r.json()).error));
    r = await worker.fetch(req('/manage/courses/AQA-7357/restore', { method: 'POST', headers: ADM2 }), e);
    r = await worker.fetch(req('/courses/AQA-7357/spec', { headers: STU2 }), e);
    ok('C8 restore makes it readable again', r.status === 200);

    /* the review queue: a doubtful build (criterion 5), approve as admin override */
    judgeScore = 0.6;
    r = await worker.fetch(req('/courses/build', J('POST', { level: 'GCSE', subject: 'Mathematics', board: 'AQA' }, STU2)), e);
    ok('C9 a GCSE course builds through the same route', r.status === 202);
    await runPending();
    r = await worker.fetch(req('/courses/AQA-8300/status', { headers: STU2 }), e);
    st = await r.json();
    ok('C9 a doubtful build is in review, with a student-facing message', st.status === 'review' && /checked/i.test(st.build.message));
    r = await worker.fetch(req('/courses/AQA-8300/spec', { headers: STU2 }), e);
    ok('C9 and is not readable', r.status === 404);
    r = await worker.fetch(req('/manage/reviews', { headers: ADM2 }), e);
    let q = await r.json();
    ok('C9 the review queue shows it with the judge\'s missing sections', q.items.some(i => i.kind === 'build' && i.id === 'AQA-8300' && i.judge.missing[0] === '3.3 Exchange'), JSON.stringify(q.items.map(i => [i.kind, i.id])));
    r = await worker.fetch(req('/manage/reviews/AQA-8300/approve', { method: 'POST', headers: ADM2 }), e);
    ok('C9 the admin can approve it regardless', r.status === 200 && (await r.json()).meta.status === 'published');
    ok('K1 approving a build from the review queue starts its depth too', e.COURSE_DEPTH.created.some(p => p.id === 'AQA-8300' && !p.only));
    r = await worker.fetch(req('/courses/AQA-8300/spec', { headers: STU2 }), e);
    ok('C9 and then students can read it', r.status === 200);
    judgeScore = 0.9;

    /* the monthly pass: unchanged → nothing; changed → proposal; dismiss and approve (criteria 8, 9) */
    r = await worker.fetch(req('/manage/courses/AQA-7357/check', { method: 'POST', headers: ADM2 }), e);
    ok('C10 check now starts a review instance', r.status === 202 && e.COURSE_REVIEW.created.length === 1);
    await runPending();
    r = await worker.fetch(req('/manage/reviews', { headers: ADM2 }), e);
    q = await r.json();
    ok('C10 an unchanged document files no proposal', !q.items.some(i => i.kind === 'proposal'));
    headEtag = '"v2"';
    await worker.fetch(req('/manage/courses/AQA-7357/check', { method: 'POST', headers: ADM2 }), e);
    await runPending();
    r = await worker.fetch(req('/manage/reviews', { headers: ADM2 }), e);
    q = await r.json();
    const prop = q.items.find(i => i.kind === 'proposal' && i.id === 'AQA-7357');
    ok('C11 a changed document files a proposal with the document\'s own statement of changes', !!prop && prop.docChanges[0].includes('Issue 2') && Array.isArray(prop.changes), JSON.stringify(q.items.map(i => [i.kind, i.id])));
    r = await worker.fetch(req('/courses/AQA-7357/spec', { headers: STU2 }), e);
    ok('C11 the published spec is untouched while the proposal waits', r.status === 200 && (await r.json()).spec.version === 'Issue 2 (2019)');
    r = await worker.fetch(req('/manage/reviews/AQA-7357/dismiss', { method: 'POST', headers: ADM2 }), e);
    r = await worker.fetch(req('/manage/reviews', { headers: ADM2 }), e);
    ok('C12 dismiss removes the proposal and records the decision', r.status === 200 && !(await r.json()).items.some(i => i.kind === 'proposal') && (await e.USAGE.list({ prefix: 'decision:AQA-7357' })).keys.length === 1);
    await worker.fetch(req('/manage/courses/AQA-7357/check', { method: 'POST', headers: ADM2 }), e);
    await runPending();
    r = await worker.fetch(req('/manage/reviews/AQA-7357/approve', { method: 'POST', headers: ADM2 }), e);
    const approved = await r.json();
    r = await worker.fetch(req('/manage/courses', { headers: ADM2 }), e);
    const after = (await r.json()).courses.find(c => c.id === 'AQA-7357');
    ok('C13 approve publishes the draft and moves provenance on', r.status === 200 && approved.meta.status === 'published' && after.source.etag === '"v2"' && after.pending === false && !after.proposal, JSON.stringify(after && after.source));

    /* catalogue additions and the needs-link path (criterion 10) */
    r = await worker.fetch(req('/manage/catalogue', J('POST', { level: 'A level', subject: 'Astrology', board: 'AQA', code: '9999' }, ADM2)), e);
    ok('C14 admin adds a qualification without a link', r.status === 200);
    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'Astrology', board: 'AQA' }, STU2)), e);
    ok('C14 a student can now request it', r.status === 202);
    await runPending();
    r = await worker.fetch(req('/courses/AQA-9999/status', { headers: STU2 }), e);
    ok('C14 with no link and a located URL off the board\'s domain, it needs a link', (await r.json()).status === 'needs-link');
    r = await worker.fetch(req('/manage/reviews', { headers: ADM2 }), e);
    ok('C14 which the review queue shows', (await r.json()).items.some(i => i.kind === 'needs-link' && i.id === 'AQA-9999'));
    r = await worker.fetch(req('/manage/catalogue', J('POST', { level: 'A level', subject: 'Astrology', board: 'AQA', code: '9999', specUrl: 'https://filestore.aqa.org.uk/resources/astrology/AQA-9999-SP.PDF' }, ADM2)), e);
    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'Astrology', board: 'AQA' }, STU2)), e);
    await runPending();
    r = await worker.fetch(req('/courses/AQA-9999/status', { headers: STU2 }), e);
    ok('C15 with a link added, the same request builds and publishes', (await r.json()).status === 'published');
    r = await worker.fetch(req('/manage/catalogue', J('POST', { level: 'Degree', subject: 'X', board: 'AQA', code: '1' }, ADM2)), e);
    ok('C15 a bad level is refused', r.status === 400);

    /* a dead build does not block a new one */
    await e.USAGE.put('build:OCR-H432', JSON.stringify({ id: 'OCR-H432', status: 'building', updatedAt: new Date(Date.now() - 40 * 60 * 1000).toISOString(), done: 1, total: 4 }));
    r = await worker.fetch(req('/courses/build', J('POST', { level: 'A level', subject: 'Chemistry', board: 'OCR' }, STU2)), e);
    ok('C16 a build record with no progress for 30 minutes is treated as dead and a new build starts', r.status === 202 && (await r.json()).joined === false);

    /* the cron (criterion 8) */
    await runPending();
    e.COURSE_REVIEW.created.length = 0;
    await worker.scheduled({ cron: '0 6 1 * *' }, e, {});
    const lastRun = await e.USAGE.get('review:last-run', 'json');
    ok('C17 the monthly cron starts one review per published course and records the run', e.COURSE_REVIEW.created.length === 4 && lastRun.courses.length === 4 && lastRun.cron === '0 6 1 * *', String(e.COURSE_REVIEW.created.length) + ' ' + JSON.stringify(lastRun));
    await runPending();
    r = await worker.fetch(req('/manage/reviews', { headers: ADM2 }), e);
    const props = (await r.json()).items.filter(i => i.kind === 'proposal').map(i => i.id);
    ok('C17 only the course whose document changed since it was built gets a proposal', props.length === 1 && props[0] === 'AQA-8300', JSON.stringify(props));
  }

  /* ---------- videos for a room: searched, chosen by a model, verified, cached ---------- */
  {
    const saveFetch = sandbox.__fetch; let ytHits = 0, modelHits = 0, oembedHits = 0, promptsSeen = [];
    const page = (vids) => `<html><script>var ytInitialData = ${JSON.stringify({ contents: { list: vids.map(v => ({ videoRenderer: { videoId: v.id, title: { runs: [{ text: v.title }] }, ownerText: { runs: [{ text: v.ch }] }, lengthText: { simpleText: v.len }, viewCountText: { simpleText: '1,234 views' }, publishedTimeText: { simpleText: '2 years ago' } } })) } })};</script></html>`;
    const hits = [{ id: 'abc123def45', title: 'GCSE German: talking about your home', ch: 'German with Anna', len: '9:12' }, { id: 'vlog1234567', title: 'my gcse results vlog', ch: 'Maria', len: '7:10' }, { id: 'gone1234567', title: 'GCSE German: my town', ch: 'Deutsch Lernen', len: '11:00' }, { id: 'short123456', title: 'GCSE German house words in a minute', ch: 'Quick German', len: '1:24' }];
    sandbox.__fetch = async (url, init) => {
      const u = String(url);
      if (u.startsWith('https://www.youtube.com/results')) { ytHits++; return new Response(page(hits), { status: 200, headers: { 'Content-Type': 'text/html' } }); }
      if (u.startsWith('https://www.youtube.com/oembed')) { oembedHits++; return /abc123def45/.test(u) ? new Response(JSON.stringify({ title: 'GCSE German: talking about your home (full lesson)', author_name: 'German with Anna' })) : new Response('Bad Request', { status: 400 }); }
      if (u.includes('api.anthropic.com')) { modelHits++; const body = JSON.parse(init.body); promptsSeen.push(body.messages[0].content); const isQueries = /queries/.test(JSON.stringify(body.output_config));
        const text = isQueries ? JSON.stringify({ queries: ['GCSE German home and abroad', 'GCSE German describing your house', 'German house vocabulary'] }) : JSON.stringify({ picks: [{ id: 'abc123def45', why: 'Covers rooms, furniture and describing where you live.' }, { id: 'gone1234567', why: 'Covers your town.' }, { id: 'zzzz', why: 'bad id' }] });
        return new Response(JSON.stringify({ id: 'msg_v', content: [{ type: 'text', text }] }), { status: 200 }); }
      return saveFetch(url, init);
    };
    const env = baseEnv(); env.ACCESS_TEAM_DOMAIN = TEAM; env.ACCESS_AUD = AUD;
    const bootV = await (await worker.fetch(req('/admin/bootstrap', { method: 'POST', headers: await A() }), env)).json();
    const admV = await (await worker.fetch(req('/auth/invite', J('POST', { token: bootV.invite.link.split('#invite=')[1], password: 'admin pass phrase' })), env)).json(); const ADMV = bearer(admV.token);
    const mkV = await (await worker.fetch(req('/manage/users', J('POST', { username: 'vicky', name: 'Vicky', daily: 200 }, ADMV)), env)).json();
    const vs = await (await worker.fetch(req('/auth/invite', J('POST', { token: mkV.invite.link.split('#invite=')[1], password: 'vicky pass phrase' })), env)).json(); const VST = bearer(vs.token);
    const body = { spec: 'EDX-4GN1', topic: 'A', board: 'Pearson Edexcel', level: 'GCSE', subject: 'German (International GCSE)', code: '4GN1', topicName: 'A. Home and abroad', ideas: ['A1 House and home', 'A2 Town and region'] };
    r = await worker.fetch(req('/videos', J('POST', body)), env);
    ok('V1 videos need a session', r.status === 401);
    r = await worker.fetch(req('/videos', J('POST', { spec: 'EDX-4GN1' }, VST)), env);
    ok('V1 videos need the room’s context', r.status === 400);
    r = await worker.fetch(req('/videos', J('POST', body, VST)), env);
    let v = await r.json();
    ok('V2 the rail gets only videos the model chose AND YouTube confirmed: the vlog is not picked, the picked video that no longer exists is dropped', r.status === 200 && v.items.length === 1 && v.items[0].id === 'abc123def45' && v.items[0].url === 'https://www.youtube.com/watch?v=abc123def45', JSON.stringify(v));
    ok('V2 each listed video carries the confirmed title and channel, its length, a reason and a thumbnail', v.items[0].title === 'GCSE German: talking about your home (full lesson)' && v.items[0].channel === 'German with Anna' && v.items[0].length === '9:12' && /rooms/.test(v.items[0].why) && /i\.ytimg\.com\/vi\/abc123def45/.test(v.items[0].image));
    ok('V2 three model-written searches were run, two model calls made, only picked ids checked with oEmbed', ytHits === 3 && modelHits === 2 && oembedHits === 2 && v.queries.length === 3, `${ytHits} ${modelHits} ${oembedHits}`);
    ok('V2 the picking prompt names the course, the topic, its key ideas and the candidates, and allows an empty answer', /4GN1/.test(promptsSeen[1]) && /Home and abroad/.test(promptsSeen[1]) && /Town and region/.test(promptsSeen[1]) && /abc123def45 \| GCSE German: talking about your home \| German with Anna \| 9:12/.test(promptsSeen[1]) && /empty list/.test(promptsSeen[1]));
    ok('V2 a clip under two minutes never reaches the picking step', !/short123456/.test(promptsSeen[1]) && /vlog1234567/.test(promptsSeen[1]));
    r = await worker.fetch(req('/videos', J('POST', body, VST)), env);
    v = await r.json();
    ok('V3 the second request for the room is served from KV without searching again', v.items.length === 1 && ytHits === 3 && modelHits === 2 && (await env.USAGE.get('videos2:EDX-4GN1:A', 'json')).items.length === 1);
    r = await worker.fetch(req('/videos', J('POST', { ...body, refresh: true }, VST)), env);
    ok('V3 a student cannot force a fresh search', ytHits === 3);
    r = await worker.fetch(req('/videos', J('POST', { ...body, refresh: true }, ADMV)), env);
    ok('V3 an admin can ask for a fresh search', ytHits === 6 && (await r.json()).items.length === 1);
    sandbox.__fetch = async (url, init) => { const u = String(url); if (u.startsWith('https://www.youtube.com/results')) return new Response('<html>nothing here</html>'); if (u.includes('api.anthropic.com')) return new Response(JSON.stringify({ content: [{ type: 'text', text: JSON.stringify({ queries: ['x y z w'] }) }] })); return saveFetch(url, init); };
    r = await worker.fetch(req('/videos', J('POST', { ...body, topic: 'B', topicName: 'B. Education and employment' }, VST)), env);
    v = await r.json();
    ok('V4 when the search page yields nothing and the model’s web search finds nothing the room lists no videos rather than a guess', r.status === 200 && v.items.length === 0 && !v.error && v.found === 0 && v.via === 'search', JSON.stringify(v));
    let searchCalls = 0;
    sandbox.__fetch = async (url, init) => { const u = String(url);
      if (u.startsWith('https://www.youtube.com/results')) return new Response('<html>consent wall</html>');
      if (u.startsWith('https://www.youtube.com/oembed')) return /srch1234567/.test(u) ? new Response(JSON.stringify({ title: 'GCSE German: Ferien und Urlaub — holidays', author_name: 'Frau Schmidt teaches' })) : new Response('Bad Request', { status: 400 });
      if (u.includes('api.anthropic.com')) { const b = JSON.parse(init.body); if (b.tools) { searchCalls++; ok('V4 the fallback search is fenced to youtube.com', b.tools[0].allowed_domains.includes('youtube.com') && b.tools[0].max_uses <= 4); return new Response(JSON.stringify({ stop_reason: 'end_turn', content: [{ type: 'text', text: 'https://www.youtube.com/watch?v=srch1234567 | GCSE German holidays\nhttps://youtu.be/dead1234567 | gone video' }] })); }
        const isQueries = /queries/.test(JSON.stringify(b.output_config)); return new Response(JSON.stringify({ content: [{ type: 'text', text: isQueries ? JSON.stringify({ queries: ['a b c d'] }) : JSON.stringify({ picks: [{ id: 'srch1234567', why: 'Covers holidays and travel.' }] }) }] })); }
      return saveFetch(url, init); };
    r = await worker.fetch(req('/videos', J('POST', { ...body, topic: 'D', topicName: 'D. Holidays' }, VST)), env);
    v = await r.json();
    ok('V4 when YouTube’s page cannot be read, candidates come from the model’s web search, read back from oEmbed, and still go through the picking and checking steps', r.status === 200 && v.via === 'search' && v.found === 1 && searchCalls === 1 && v.items.length === 1 && v.items[0].id === 'srch1234567' && v.items[0].channel === 'Frau Schmidt teaches' && /Ferien/.test(v.items[0].title), JSON.stringify(v));
    /* the page reads fine but the model rejects everything on it: the web search gets its turn */
    let pickCalls = 0; const fetchD = sandbox.__fetch;
    sandbox.__fetch = async (url, init) => { const u = String(url);
      if (u.startsWith('https://www.youtube.com/results')) return new Response(page(hits), { status: 200, headers: { 'Content-Type': 'text/html' } });
      if (u.includes('api.anthropic.com')) { const b = JSON.parse(init.body); if (!b.tools && /picks/.test(JSON.stringify(b.output_config))) { pickCalls++; if (pickCalls === 1) return new Response(JSON.stringify({ content: [{ type: 'text', text: JSON.stringify({ picks: [] }) }] })); } }
      return fetchD(url, init); };
    r = await worker.fetch(req('/videos', J('POST', { ...body, topic: 'E', topicName: 'E. Holidays abroad' }, VST)), env);
    v = await r.json();
    ok('V4 when the page’s candidates are all rejected, the web search’s candidates are tried and the result says so', r.status === 200 && v.via === 'search' && pickCalls === 2 && v.items.length === 1 && v.items[0].id === 'srch1234567', JSON.stringify(v));
    sandbox.__fetch = async (url, init) => { if (String(url).includes('api.anthropic.com')) return new Response('overloaded', { status: 529 }); return saveFetch(url, init); };
    r = await worker.fetch(req('/videos', J('POST', { ...body, topic: 'C', topicName: 'C. Personal life and relationships' }, VST)), env);
    v = await r.json();
    ok('V5 a model failure answers an empty list with the error noted, never a 500 to the room', r.status === 200 && v.items.length === 0 && /529/.test(v.error));
    sandbox.__fetch = saveFetch;
  }

  /* ================= real papers: attempts, pages, the question map, prepare, mark, the admin switch, no PDF bytes ================= */
  {
    const env = baseEnv(); env.ACCESS_TEAM_DOMAIN = TEAM; env.ACCESS_AUD = AUD;
    const bootP = await (await worker.fetch(req('/admin/bootstrap', { method: 'POST', headers: await A() }), env)).json();
    const admP = await (await worker.fetch(req('/auth/invite', J('POST', { token: bootP.invite.link.split('#invite=')[1], password: 'admin pass phrase' })), env)).json(); const ADMP = bearer(admP.token);
    const student = async (u, n) => { const mk = await (await worker.fetch(req('/manage/users', J('POST', { username: u, name: n, daily: 200 }, ADMP)), env)).json(); const s = await (await worker.fetch(req('/auth/invite', J('POST', { token: mk.invite.link.split('#invite=')[1], password: u + ' pass phrase' })), env)).json(); return bearer(s.token); };
    const SAM = await student('sam', 'Sam'), LENA = await student('lena', 'Lena');
    const pending = [];
    env.PAPER_MARKER = { created: [], async create({ id, params }) { this.created.push(params); pending.push(() => papersMod.exports.runPaperJob(params, env, inlineStep())); return { id }; } };
    const runPending = async () => { while (pending.length) await pending.shift()(); };

    /* the model, answered by prompt: a question map (bad first), mark points per question, a transcript per question, a mark (bad first) */
    const QP = 'https://www.ocr.org.uk/Images/000001-question-paper-1.pdf', MS = 'https://www.ocr.org.uk/Images/000002-mark-scheme-1.pdf';
    const spec = { id: 'OCR-H481', board: 'OCR', level: 'A level', subject: 'Geography', code: 'H481', markConventions: { summary: 'Points marking: one mark per valid point, with development.' }, topics: [{ id: '1.2', name: 'Earth’s life support systems', ideas: [{ code: '1.2.1' }, { code: '1.2.2' }] }, { id: '2.1', name: 'Changing spaces; making places', ideas: [{ code: '2.1.1' }] }] };
    const qmapGood = { questions: [{ q: '1(a)', marks: 4, topic: '1.2', codes: ['1.2.1'], mode: 'points', command: 'Explain', choice: null }, { q: '1(b)', marks: 2, topic: '1.2', codes: ['1.2.2'], mode: 'points', command: 'State', choice: null }, { q: '2', marks: 4, topic: '2.1', codes: ['2.1.1'], mode: 'points', command: 'Describe', choice: null }] };
    const qmapBad = { questions: [{ q: '1(a)', marks: 4, topic: '1.2', mode: 'points' }, { q: '2', marks: 2, topic: '2.1', mode: 'points' }] };   /* 6 of 10 marks */
    let qmapQueue = [qmapBad, qmapGood];
    const pointsFor = { '1(a)': [{ text: 'Names a store of carbon', max: 1, kind: 'B' }, { text: 'Explains a flow between two stores', max: 2, kind: 'A' }, { text: 'Gives a figure or rate', max: 1, kind: 'B' }], '1(b)': [{ text: 'States one cause', max: 1 }, { text: 'States a second cause', max: 1 }], '2': [{ text: 'Point one', max: 2 }, { text: 'Point two', max: 2 }] };
    const T1 = 'Carbon is stored in the oceans. It moves from the atmosphere into the sea by dissolving, about 2 GtC a year.';
    const transcriptFor = { '1(a)': { transcript: T1, legibility: 'ok', unsure: [], blank: false }, '1(b)': { transcript: '', legibility: 'ok', unsure: [], blank: true }, '2': { transcript: '', legibility: 'unreadable', unsure: [], blank: false } };
    const badMark = { awarded: 3, max: 4, lines: [{ i: 1, awarded: 1, evidence: 'photosynthesis' }, { i: 2, awarded: 2, evidence: 'moves from the atmosphere into the sea by dissolving' }, { i: 3, awarded: 0, missing: 'no figure' }], failureMode: 'RECALL-GAP', note: 'A store and a flow; no figure.' };
    const goodMark = { awarded: 3, max: 4, lines: [{ i: 1, awarded: 1, evidence: 'stored in the oceans' }, { i: 2, awarded: 2, evidence: 'moves from the atmosphere into the sea by dissolving' }, { i: 3, awarded: 0, missing: 'no figure given' }], failureMode: 'RECALL-GAP', note: 'You named a store and a flow with its mechanism; give a figure next time.', disagree: [3] };
    const fullMark = { awarded: 4, max: 4, lines: [{ i: 1, awarded: 1, evidence: 'stored in the oceans' }, { i: 2, awarded: 2, evidence: 'moves from the atmosphere into the sea by dissolving' }, { i: 3, awarded: 1, evidence: '2 GtC a year' }], failureMode: 'NONE', note: 'Full marks.' };
    let markQueue = { '1(a)': [badMark, goodMark] };
    const modelSeen = []; let pdfFetches = 0;
    const promptOf = body => body.messages[0].content.filter(c => c.type === 'text').map(c => c.text).join('\n');
    const answerFor = body => {
      const txt = promptOf(body); let m;
      if (/List every question and every part/.test(txt)) return qmapQueue.length > 1 ? qmapQueue.shift() : qmapQueue[0];
      if ((m = /Find question (\S+) \(/.exec(txt))) return { q: m[1], points: pointsFor[m[1]] };
      if ((m = /answer to question (\S+) of an exam paper/.exec(txt))) return { q: m[1], ...transcriptFor[m[1]] };
      if ((m = /marking question (\S+) \(/.exec(txt))) { const qq = markQueue[m[1]] || [{}]; return qq.length > 1 ? qq.shift() : qq[0]; }
      return {};
    };
    const saveFetch = sandbox.__fetch;
    sandbox.__fetch = async (url, init) => {
      const u = String(url);
      if (u.includes('api.anthropic.com')) { const body = JSON.parse(init.body); modelSeen.push({ ...body, key: init.headers['x-api-key'] }); return new Response(JSON.stringify({ id: 'msg_p', stop_reason: 'end_turn', content: [{ type: 'text', text: '```json\n' + JSON.stringify(answerFor(body)) + '\n```' }] }), { status: 200 }); }
      if (/ocr\.org\.uk/.test(u)) { pdfFetches++; return new Response('%PDF-1.4 the paper', { status: 200, headers: { 'Content-Type': 'application/pdf' } }); }
      return saveFetch(url, init);
    };
    const paperBody = { spec: 'OCR-H481', series: '2025-06', seriesName: 'June 2025', paper: 'P1', name: 'Paper 1', marks: 10, minutes: 90, board: 'OCR', level: 'A level', subject: 'Geography', code: 'H481', component: '01', qp: QP, ms: MS };

    /* 1. creating an attempt */
    r = await worker.fetch(req('/papers', J('POST', paperBody)), env);
    ok('R1 papers need a session', r.status === 401);
    r = await worker.fetch(req('/papers', J('POST', { ...paperBody, qp: 'https://evil.example/qp.pdf' }, SAM)), env);
    ok('R1 a paper that is not on the board\'s own site is refused', r.status === 400 && /board's own site/.test((await r.json()).error));
    r = await worker.fetch(req('/papers', J('POST', { ...paperBody, ms: 'http://www.ocr.org.uk/ms.pdf' }, SAM)), env);
    ok('R1 a plain-http link is refused too', r.status === 400);
    r = await worker.fetch(req('/papers', J('POST', { ...paperBody, marks: 0 }, SAM)), env);
    ok('R1 marks must be 1 to 300', r.status === 400);
    r = await worker.fetch(req('/papers/admin/boards', J('POST', { board: 'OCR', off: true }, SAM)), env);
    ok('R9 a student cannot switch a board off', r.status === 403);
    r = await worker.fetch(req('/papers/admin/boards', J('POST', { board: 'OCR', off: true }, ADMP)), env);
    ok('R9 the admin switches a board off', r.status === 200 && (await r.json()).off.join() === 'OCR');
    r = await worker.fetch(req('/papers', J('POST', paperBody, SAM)), env);
    ok('R1 an attempt on a switched-off board is refused and says so', r.status === 409 && /OCR papers are switched off/.test((await r.json()).error));
    r = await worker.fetch(req('/courses', { headers: SAM }), env);
    ok('R9 GET /courses carries papersOff so the app can grey the button', (await r.json()).papersOff.join() === 'OCR');
    r = await worker.fetch(req('/papers/admin/boards', J('POST', { board: 'ocr', off: false }, ADMP)), env);
    r = await worker.fetch(req('/papers/admin/boards', { headers: ADMP }), env);
    ok('R9 switched back on, case-insensitively', (await r.json()).off.length === 0);
    r = await worker.fetch(req('/papers', J('POST', paperBody, SAM)), env);
    let att = (await r.json()).attempt;
    ok('R1 an attempt is created with its record', r.status === 200 && att.id && att.status === 'pages' && att.pages.length === 0 && att.qp === QP && att.job === null, JSON.stringify(att).slice(0, 200));
    const AID = att.id;
    r = await worker.fetch(req('/papers', { headers: SAM }), env);
    let lst = await r.json();
    ok('R1 the list shows the attempt as a summary', lst.attempts.length === 1 && lst.attempts[0].id === AID && lst.attempts[0].name === 'Paper 1' && lst.attempts[0].pages === undefined);
    r = await worker.fetch(req('/papers/' + AID, { headers: LENA }), env);
    ok('R1 another student cannot see it', r.status === 404);

    /* 2. pages */
    const jpeg = new Uint8Array(3000); jpeg[0] = 0xFF; jpeg[1] = 0xD8;
    const upload = (auth, id, body, type = 'image/jpeg', name = 'p.jpg') => worker.fetch(req(`/papers/${id}/pages/upload`, { method: 'POST', headers: { ...auth, 'Content-Type': type, 'X-Page-Name': name }, body }), env);
    r = await upload(SAM, AID, 'hello', 'application/pdf', 'x.pdf');
    ok('R2 only JPEG, PNG and WebP pages are accepted — never a PDF', r.status === 415);
    r = await upload(SAM, AID, new Uint8Array(8 * 1024 * 1024 + 1), 'image/png');
    ok('R2 a page over 8 MB is refused', r.status === 413);
    r = await upload(SAM, AID, jpeg); const p1 = (await r.json()).page;
    r = await upload(SAM, AID, jpeg, 'image/png', 'two.png'); const p2 = (await r.json()).page;
    r = await upload(SAM, AID, jpeg, 'image/webp', 'three.webp'); const p3 = (await r.json()).page;
    ok('R2 pages land in R2 under the owner, numbered in order, with their type and size', p1.n === 1 && p2.n === 2 && p3.n === 3 && p1.key === `paper/sam/${AID}/${p1.id}.jpg` && p2.key.endsWith('.png') && p3.key.endsWith('.webp') && p1.size === 3000 && env.DESK._map.has(p1.key), JSON.stringify(p1));
    ok('R2 page bytes count against the desk quota', (await env.USAGE.get('deskq:sam')) === '9000');
    r = await worker.fetch(req(`/papers/${AID}/pages/${p1.id}`, { headers: SAM }), env);
    ok('R2 the owner reads a page back', r.status === 200 && r.headers.get('Content-Type') === 'image/jpeg' && (await r.arrayBuffer()).byteLength === 3000);
    r = await worker.fetch(req(`/papers/${AID}/pages/${p1.id}`, { headers: LENA }), env);
    ok('R2 nobody else can', r.status === 404);
    r = await worker.fetch(req(`/papers/${AID}/pages/${p3.id}`, J('PATCH', { thumb: 'data:image/jpeg;base64,AAAA', w: 1200, h: 1600, n: 1 }, SAM)), env);
    ok('R2 a page takes a thumbnail and size and can be moved first', r.status === 200 && (await r.json()).page.n === 1);
    r = await worker.fetch(req('/papers/' + AID, { headers: SAM }), env); att = (await r.json()).attempt;
    ok('R2 the other pages renumber after the move', att.pages.map(p => p.id).join() === [p3.id, p1.id, p2.id].join() && att.pages.map(p => p.n).join() === '1,2,3' && att.pages[0].thumb === 'data:image/jpeg;base64,AAAA' && att.pages[0].w === 1200);
    r = await worker.fetch(req(`/papers/${AID}/pages/${p3.id}`, { method: 'DELETE', headers: SAM }), env);
    ok('R2 deleting a page removes its bytes from R2 and the quota', r.status === 200 && !env.DESK._map.has(p3.key) && (await env.USAGE.get('deskq:sam')) === '6000');
    await env.USAGE.put('deskq:sam', String(250 * 1024 * 1024 - 100));
    r = await upload(SAM, AID, jpeg);
    ok('R2 the shared 250 MB quota refuses a page', r.status === 413 && /250 MB/.test((await r.json()).error));
    await env.USAGE.put('deskq:sam', '6000');
    const full = await env.USAGE.get(`paper:sam:${AID}`, 'json'); const realPages = full.pages;
    full.pages = realPages.concat(Array.from({ length: 38 }, (_, i) => ({ id: 'fake' + i, n: 3 + i, key: `paper/sam/${AID}/fake${i}.jpg`, size: 1, type: 'image/jpeg', at: full.at, thumb: null, w: null, h: null })));
    await env.USAGE.put(`paper:sam:${AID}`, JSON.stringify(full));
    r = await upload(SAM, AID, jpeg);
    ok('R2 the 41st page is refused', r.status === 409 && /40 pages/.test((await r.json()).error));
    full.pages = realPages; await env.USAGE.put(`paper:sam:${AID}`, JSON.stringify(full));

    /* 3. the question map: refused once, then stored and shared */
    r = await worker.fetch(req(`/papers/${AID}/questions`, J('POST', {}, SAM)), env);
    ok('R3 the question map needs the specification the first time', r.status === 400);
    r = await worker.fetch(req(`/papers/${AID}/questions`, J('POST', { spec: { ...spec, id: 'AQA-7357' } }, SAM)), env);
    ok('R3 a specification for another course is refused', r.status === 400);
    r = await worker.fetch(req(`/papers/${AID}/questions`, J('POST', { spec }, SAM)), env);
    let qm = await r.json();
    ok('R3 a map whose marks do not add up is retried with the larger model; the good answer is stored', r.status === 200 && qm.questions && qm.questions.length === 3 && qm.questions[0].q === '1(a)' && modelSeen.length === 2 && modelSeen[0].model === 'claude-sonnet-5' && modelSeen[1].model === 'claude-opus-5' && /refused because: marks add up to 6, not 10/.test(promptOf(modelSeen[1])), JSON.stringify(qm));
    ok('R3 the map request carries the question paper as a cached url document and the spec\'s topics, and nothing else', modelSeen[0].messages[0].content[0].type === 'document' && modelSeen[0].messages[0].content[0].source.type === 'url' && modelSeen[0].messages[0].content[0].source.url === QP && modelSeen[0].messages[0].content[0].cache_control.type === 'ephemeral' && modelSeen[0].max_tokens === 6000 && /1\.2 \| Earth/.test(promptOf(modelSeen[0])) && modelSeen[0].key === 'sk-ant-test');
    const qmapKv = await env.USAGE.get('qmap:OCR-H481:2025-06:P1', 'json');
    ok('R3 the map is stored once per paper in KV and on the attempt', qmapKv && qmapKv.questions.length === 3 && qmapKv.model === 'claude-opus-5' && (await env.USAGE.get(`paper:sam:${AID}`, 'json')).questions.length === 3);
    r = await worker.fetch(req('/papers', J('POST', paperBody, LENA)), env); const LID = (await r.json()).attempt.id;
    r = await worker.fetch(req(`/papers/${LID}/questions`, J('POST', { spec }, LENA)), env);
    ok('R3 another student on the same paper gets the map from KV without a model call', r.status === 200 && (await r.json()).questions.length === 3 && modelSeen.length === 2);
    /* 4. a map that stays invalid */
    qmapQueue = [qmapBad];
    r = await worker.fetch(req('/papers', J('POST', { ...paperBody, paper: 'P2', name: 'Paper 2' }, SAM)), env); const AID2 = (await r.json()).attempt.id;
    r = await worker.fetch(req(`/papers/${AID2}/questions`, J('POST', { spec }, SAM)), env);
    qm = await r.json();
    ok('R4 a map that stays invalid after the retry answers the typed fallback with the reason', r.status === 200 && qm.questions === null && qm.fallback === 'typed' && /marks add up to 6, not 10/.test(qm.error) && modelSeen.length === 4 && !(await env.USAGE.get('qmap:OCR-H481:2025-06:P2')), JSON.stringify(qm));
    r = await worker.fetch(req(`/papers/${AID2}/prepare`, { method: 'POST', headers: SAM }), env);
    ok('R4 prepare needs a question map', r.status === 400);
    r = await worker.fetch(req(`/papers/${AID2}`, J('PATCH', { questions: qmapBad.questions }, SAM)), env);
    ok('R4 a typed list of questions is held to the same contract', r.status === 400 && /add up to 6/.test((await r.json()).error));
    r = await worker.fetch(req(`/papers/${AID2}`, J('PATCH', { questions: qmapGood.questions }, SAM)), env);
    ok('R4 a valid typed list is kept', r.status === 200 && (await r.json()).attempt.questions.length === 3);
    qmapQueue = [qmapGood];

    /* 5. prepare: transcripts and mark points */
    r = await worker.fetch(req(`/papers/${AID}/prepare`, { method: 'POST', headers: SAM }), env);
    ok('R5 prepare needs at least one question assigned to a page', r.status === 400);
    r = await worker.fetch(req(`/papers/${AID}`, J('PATCH', { assign: { '1(a)': [p1.id], '1(b)': [p1.id, 'nope'], '2': [p2.id] }, confidence: { '1(a)': 'sure', '2': 'silly' }, ticks: { '1(a)': [true, true, false] }, status: 'assign' }, SAM)), env);
    att = (await r.json()).attempt;
    ok('R5 assignments, confidence and ticks merge into the record; unknown pages and values are dropped', r.status === 200 && att.assign['1(a)'].join() === p1.id && att.assign['1(b)'].join() === p1.id && att.confidence['1(a)'] === 'sure' && att.confidence['2'] === undefined && att.ticks['1(a)'].join() === 'true,true,false' && att.status === 'assign', JSON.stringify(att.assign));
    r = await worker.fetch(req(`/papers/${AID}/mark`, { method: 'POST', headers: SAM }), env);
    ok('R6 mark refuses while an assigned question has no transcript', r.status === 400 && /no transcript yet/.test((await r.json()).error));
    const before = modelSeen.length;
    r = await worker.fetch(req(`/papers/${AID}/prepare`, { method: 'POST', headers: SAM }), env);
    let job = (await r.json()).job;
    ok('R5 prepare starts the Workflow with one step per assigned question', r.status === 202 && job.stage === 'prepare' && job.status === 'running' && job.total === 3 && env.PAPER_MARKER.created.length === 1 && env.PAPER_MARKER.created[0].stage === 'prepare' && env.PAPER_MARKER.created[0].user === 'sam', JSON.stringify(job));
    r = await worker.fetch(req(`/papers/${AID}/prepare`, { method: 'POST', headers: SAM }), env);
    ok('R5 a second prepare while one runs is refused', r.status === 409);
    await runPending();
    r = await worker.fetch(req(`/papers/${AID}/status`, { headers: SAM }), env); let stt = await r.json();
    ok('R5 the job finishes and the attempt is ready to check', stt.job.status === 'done' && stt.job.done === 3 && stt.status === 'check', JSON.stringify(stt));
    r = await worker.fetch(req('/papers/' + AID, { headers: SAM }), env); att = (await r.json()).attempt;
    ok('R5 each question\'s transcript is stored with its legibility, the unreadable one kept as such', att.transcripts['1(a)'].transcript === T1 && att.transcripts['1(a)'].legibility === 'ok' && att.transcripts['1(a)'].edited === false && att.transcripts['1(b)'].blank === true && att.transcripts['2'].legibility === 'unreadable', JSON.stringify(att.transcripts));
    ok('R5 the mark points are on the attempt and shared in KV per paper and question', att.points['1(a)'].points.length === 3 && att.points['2'].points[0].max === 2 && (await env.USAGE.get('points:OCR-H481:2025-06:P1:1(a)', 'json')).points[0].text === 'Names a store of carbon');
    const prepCalls = modelSeen.slice(before);
    const transcribeCalls = prepCalls.filter(b => /Transcribe the answer/.test(promptOf(b))), pointCalls = prepCalls.filter(b => /Find question/.test(promptOf(b)));
    ok('R5 three transcriptions with Haiku and three points readings with Sonnet, six calls in all', prepCalls.length === 6 && transcribeCalls.length === 3 && transcribeCalls.every(b => b.model === 'claude-haiku-4-5') && pointCalls.length === 3 && pointCalls.every(b => b.model === 'claude-sonnet-5'), prepCalls.map(b => b.model).join());
    const tc = transcribeCalls[0].messages[0].content;
    ok('R5 a transcription carries the page image as base64 after its page number, then the prompt', tc.length === 3 && tc[0].type === 'text' && tc[0].text === 'Page 1' && tc[1].type === 'image' && tc[1].source.type === 'base64' && tc[1].source.media_type === 'image/jpeg' && tc[1].source.data.startsWith('/9g') && tc[2].type === 'text', JSON.stringify(tc).slice(0, 200));
    ok('R5 a points reading carries the mark scheme as a cached url document only', pointCalls[0].messages[0].content[0].type === 'document' && pointCalls[0].messages[0].content[0].source.url === MS && pointCalls[0].messages[0].content.length === 2);
    /* points are shared: Lena's prepare on the same paper reads no scheme */
    r = await upload(LENA, LID, jpeg); const lp = (await r.json()).page;
    await worker.fetch(req(`/papers/${LID}`, J('PATCH', { assign: { '1(a)': [lp.id] } }, LENA)), env);
    const beforeL = modelSeen.length;
    r = await worker.fetch(req(`/papers/${LID}/prepare`, { method: 'POST', headers: LENA }), env);
    await runPending();
    const lenaCalls = modelSeen.slice(beforeL);
    r = await worker.fetch(req('/papers/' + LID, { headers: LENA }), env); const latt = (await r.json()).attempt;
    ok('R5 the points are cached per paper across students: Lena\'s prepare transcribes but reads no scheme', r.status === 200 && lenaCalls.length === 1 && lenaCalls[0].model === 'claude-haiku-4-5' && latt.points['1(a)'].points.length === 3 && latt.job.status === 'done', lenaCalls.map(b => b.model).join());
    /* 6. mark */
    const beforeM = modelSeen.length;
    r = await worker.fetch(req(`/papers/${AID}/mark`, { method: 'POST', headers: SAM }), env);
    job = (await r.json()).job;
    ok('R6 mark starts the Workflow over every transcribed question', r.status === 202 && job.stage === 'mark' && job.total === 3);
    await runPending();
    r = await worker.fetch(req('/papers/' + AID, { headers: SAM }), env); att = (await r.json()).attempt;
    const markCalls = modelSeen.slice(beforeM);
    ok('R6 a mark whose evidence is not in the transcript is retried with the larger model and the second answer kept', markCalls.length === 2 && markCalls[0].model === 'claude-sonnet-5' && markCalls[1].model === 'claude-opus-5' && /refused because: line 1: evidence is not in the answer/.test(promptOf(markCalls[1])) && att.results['1(a)'].awarded === 3 && att.results['1(a)'].model === 'claude-opus-5' && att.results['1(a)'].lines.length === 3 && att.results['1(a)'].failureMode === 'RECALL-GAP' && att.results['1(a)'].disagree.join() === '3', JSON.stringify(att.results));
    const mc = markCalls[0].messages[0].content;
    ok('R6 the marking request carries the scheme as a url document, the page image and the prompt with the student\'s ticks and transcript', mc[0].type === 'document' && mc[0].source.url === MS && mc[1].text === 'Page 1' && mc[2].type === 'image' && /the student claims this/.test(mc[3].text) && /the student does not claim this/.test(mc[3].text) && mc[3].text.includes(T1) && mc.length === 4);
    ok('R6 unreadable → awarded null; blank → 0 without a model call', att.results['2'].awarded === null && att.results['2'].legibility === 'unreadable' && att.results['1(b)'].awarded === 0 && att.results['1(b)'].attempted === false);
    ok('R6 the attempt is marked with its score out of the paper\'s marks', att.status === 'marked' && att.score === 3 && att.total === 10 && att.job.status === 'done');
    r = await worker.fetch(req(`/papers/${AID}/status`, { headers: SAM }), env); stt = await r.json();
    ok('R6 the status route reports it', stt.status === 'marked' && stt.score === 3 && stt.total === 10 && stt.job.stage === 'mark');
    r = await worker.fetch(req('/papers', { headers: SAM }), env); lst = await r.json();
    ok('R6 and so does the list', lst.attempts.find(x => x.id === AID).score === 3 && lst.attempts.length === 2);

    /* a question the student did not attempt: Lena marks with one call */
    await worker.fetch(req(`/papers/${LID}`, J('PATCH', { attempted: { '1(b)': false, '2': true } }, LENA)), env);
    r = await worker.fetch(req(`/papers/${LID}/mark`, { method: 'POST', headers: LENA }), env);
    ok('R6 a question the student says they did not attempt needs no transcript and is marked without a call', r.status === 202 && (await r.json()).job.total === 2);
    await runPending();
    r = await worker.fetch(req('/papers/' + LID, { headers: LENA }), env); const lmarked = (await r.json()).attempt;
    ok('R6 it scores 0 as unattempted; the transcribed one is marked; the paper is marked', lmarked.results['1(b)'].awarded === 0 && lmarked.results['1(b)'].attempted === false && lmarked.results['1(a)'].awarded === 3 && lmarked.results['2'] === undefined && lmarked.status === 'marked' && lmarked.score === 3 && modelSeen.filter(x => x.metadata.user_id === 'lena').length === 2, JSON.stringify(lmarked.results));

    /* 7. usage counting */
    const samCalls = modelSeen.filter(b => b.metadata && b.metadata.user_id === 'sam').length, lenaCalls2 = modelSeen.filter(b => b.metadata && b.metadata.user_id === 'lena').length;
    const day = new Date().toISOString().slice(0, 10);
    ok('R7 every model call — retries included — counts one against the caller\'s day', samCalls === 12 && (await env.USAGE.get(`usage:sam:${day}`)) === '12' && lenaCalls2 === 2 && (await env.USAGE.get(`usage:lena:${day}`)) === '2', `${samCalls} ${lenaCalls2} ${await env.USAGE.get(`usage:sam:${day}`)}`);
    await env.USAGE.put('user:sam', JSON.stringify({ ...(await env.USAGE.get('user:sam', 'json')), daily: 12 }));
    r = await worker.fetch(req(`/papers/${AID}/questions/1(a)/mark`, { method: 'POST', headers: SAM }), env);
    ok('R7 at the cap a model route answers 429 with the proxy\'s message', r.status === 429 && /Sam's daily limit of 12 requests is used up/.test((await r.json()).error.message));
    r = await worker.fetch(req(`/papers/${AID}/mark`, { method: 'POST', headers: SAM }), env);
    ok('R7 a job can still be started at the cap', r.status === 202);
    await runPending();
    r = await worker.fetch(req(`/papers/${AID}/status`, { headers: SAM }), env); stt = await r.json();
    ok('R7 but it stops at the cap and says so, rather than silently marking nothing', stt.job.status === 'failed' && /daily limit/.test(stt.job.message) && (await env.USAGE.get(`usage:sam:${day}`)) === '12', JSON.stringify(stt.job));
    await env.USAGE.put('user:sam', JSON.stringify({ ...(await env.USAGE.get('user:sam', 'json')), daily: 200 }));

    /* 10. one question again, after the student corrects the transcript */
    r = await worker.fetch(req(`/papers/${AID}`, J('PATCH', { transcripts: { '1(a)': { transcript: T1 + ' The flux is 2 GtC a year.', legibility: 'ok' }, '9': { transcript: 'x', legibility: 'fine' } }, status: 'marked' }, SAM)), env);
    att = (await r.json()).attempt;
    ok('R10 the student\'s correction is kept and marked as edited; a bad legibility is ignored', att.transcripts['1(a)'].edited === true && /The flux is/.test(att.transcripts['1(a)'].transcript) && !att.transcripts['9']);
    markQueue['1(a)'] = [fullMark];
    r = await worker.fetch(req(`/papers/${AID}/questions/1(a)/mark`, { method: 'POST', headers: SAM }), env);
    const rm = await r.json();
    ok('R10 one question is re-marked inline with one model call and the score moves', r.status === 200 && rm.result.awarded === 4 && rm.score === 4 && rm.total === 10 && modelSeen[modelSeen.length - 1].model === 'claude-sonnet-5' && promptOf(modelSeen[modelSeen.length - 1]).includes('The flux is'), JSON.stringify(rm));
    r = await worker.fetch(req(`/papers/${AID}/questions/7/mark`, { method: 'POST', headers: SAM }), env);
    ok('R10 an unknown question is a 404', r.status === 404);
    r = await worker.fetch(req(`/papers/${AID}/questions/1(a)/mark`, { method: 'POST', headers: LENA }), env);
    ok('R10 and only the owner can ask', r.status === 404);
    /* a second prepare never overwrites the student's own correction */
    const beforeP2 = modelSeen.length;
    await worker.fetch(req(`/papers/${AID}/prepare`, { method: 'POST', headers: SAM }), env); await runPending();
    r = await worker.fetch(req('/papers/' + AID, { headers: SAM }), env); att = (await r.json()).attempt;
    ok('R10 a re-run of prepare keeps an edited transcript and reads no scheme again', modelSeen.length - beforeP2 === 2 && /The flux is/.test(att.transcripts['1(a)'].transcript) && att.transcripts['1(a)'].edited === true, String(modelSeen.length - beforeP2));

    /* 8. no PDF bytes, anywhere, ever */
    const kvText = [...env.USAGE._map.values()].join('\n');
    const r2Text = [...env.DESK._map.values()].map(v => new TextDecoder().decode(v.buf)).join('\n');
    ok('R8 the paper and mark scheme were never fetched by the Worker', pdfFetches === 0);
    ok('R8 no KV value and no R2 object contains PDF bytes', !kvText.includes('%PDF') && !r2Text.includes('%PDF'));
    const docsOk = modelSeen.every(b => { const blocks = b.messages.flatMap(m => Array.isArray(m.content) ? m.content : []); const docs = blocks.filter(c => c.type === 'document'); return docs.every(c => c.source.type === 'url' && [QP, MS].includes(c.source.url) && Object.keys(c.source).join() === 'type,url') && !JSON.stringify(b).includes('%PDF') && !/application\/pdf/.test(JSON.stringify(b)); });
    ok('R8 every model request carried the paper and the scheme only as url document sources', docsOk && modelSeen.length > 10);
    r = await worker.fetch(req('/papers/' + AID, { method: 'DELETE', headers: SAM }), env);
    ok('R2 deleting an attempt removes its pages and their bytes', r.status === 200 && !env.DESK._map.has(p1.key) && !env.DESK._map.has(p2.key) && (await env.USAGE.get('deskq:sam')) === '0' && !(await env.USAGE.get(`paper:sam:${AID}`)));
    /* 11. a step whose model call throws mid-job: the job carries on, that question is recorded as unreadable with the error, nothing is marked failed */
    {
      r = await worker.fetch(req('/papers', J('POST', paperBody, SAM)), env); const EID = (await r.json()).attempt.id;
      const pe = (await (await upload(SAM, EID, jpeg)).json()).page;
      await worker.fetch(req(`/papers/${EID}/questions`, J('POST', { spec }, SAM)), env);
      await worker.fetch(req(`/papers/${EID}`, J('PATCH', { assign: { '1(a)': [pe.id], '1(b)': [pe.id] } }, SAM)), env);
      const good = sandbox.__fetch; let blew = 0;
      sandbox.__fetch = async (url, init) => { if (String(url).includes('api.anthropic.com') && /question 1\(a\)/.test(JSON.stringify(init.body)) && /Transcribe the answer/.test(JSON.stringify(init.body))) { blew++; throw new Error('socket hang up'); } return good(url, init); };
      r = await worker.fetch(req(`/papers/${EID}/prepare`, { method: 'POST', headers: SAM }), env);
      await runPending();
      r = await worker.fetch(req(`/papers/${EID}/status`, { headers: SAM }), env); const st2 = await r.json();
      r = await worker.fetch(req('/papers/' + EID, { headers: SAM }), env); const att2 = (await r.json()).attempt;
      ok('R11 a step that throws is recorded as data on that question and the job still finishes as done', blew >= 1 && st2.job.status === 'done' && st2.status === 'check' && att2.transcripts['1(a)'].legibility === 'unreadable' && /socket hang up/.test(att2.transcripts['1(a)'].error || '') && att2.transcripts['1(b)'] && att2.transcripts['1(b)'].legibility !== undefined, JSON.stringify({ blew, job: st2.job, t: att2.transcripts }));
      sandbox.__fetch = good;
    }
    sandbox.__fetch = saveFetch;
  }

  console.log('PASSED: ' + pass);

  console.log('-'.repeat(50));
  if (fails.length) { console.log('FAILED:'); fails.forEach(f => console.log('  ' + f)); process.exit(1); }
  console.log('RESULT: ALL GREEN');
})().catch(e => { console.error(e); process.exit(1); });
