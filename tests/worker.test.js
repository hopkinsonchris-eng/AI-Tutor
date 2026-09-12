/* Tutor service tests: accounts, sessions, invites, the proxy, progress, the in-app admin API, the
   Access-guarded recovery console, and courses (catalogue, builds, coalescing, retract, the review
   queue, the cron). The Worker is ES modules deployed by wrangler; here they are loaded as text with
   their imports satisfied from stubs (tests/_load.js). The deployed files are never touched. */
const fs = require('fs'), path = require('path');
const { loadModule, kv, r2, inlineStep } = require('./_load.js');
const validator = require('../src/spec-validator.js'), families = require('../src/families.js'), kitValidator = require('../src/kit-validator.js');
const { sampleKit } = require('./_kit.js');
const CATALOGUE = require('../data/catalogue.json');
let pass = 0; const fails = [];
const ok = (label, cond, detail = '') => cond ? pass++ : fails.push(label + (detail ? ' — ' + detail : ''));

const builder = loadModule(path.join(__dirname, '..', 'worker', 'builder.js'), { '../src/spec-validator.js': validator, '../src/families.js': families });
class WorkflowEntrypoint { constructor(ctx, env) { this.ctx = ctx; this.env = env; } }
const depth = loadModule(path.join(__dirname, '..', 'worker', 'depth.js'), { '../src/kit-validator.js': kitValidator, '../src/families.js': families });
const loaded = loadModule(path.join(__dirname, '..', 'worker', 'index.js'), { 'cloudflare:workers': { WorkflowEntrypoint }, './builder.js': builder.exports, './depth.js': depth.exports, '../data/catalogue.json': { default: CATALOGUE } });
const worker = loaded.exports.default;
const sandbox = loaded.sandbox;
builder.sandbox.__fetch = (...a) => sandbox.__fetch(...a);

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
    idx.items = idx.items.filter(x => !String(x.id).startsWith('f')); await env.USAGE.put('desk:matthew:OCR-H481|1.2', JSON.stringify(idx));
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
    const hits = [{ id: 'abc123def45', title: 'GCSE German: talking about your home', ch: 'German with Anna', len: '9:12' }, { id: 'vlog1234567', title: 'my gcse results vlog', ch: 'Maria', len: '7:10' }, { id: 'gone1234567', title: 'GCSE German: my town', ch: 'Deutsch Lernen', len: '11:00' }];
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

  console.log('PASSED: ' + pass);

  console.log('-'.repeat(50));
  if (fails.length) { console.log('FAILED:'); fails.forEach(f => console.log('  ' + f)); process.exit(1); }
  console.log('RESULT: ALL GREEN');
})().catch(e => { console.error(e); process.exit(1); });
