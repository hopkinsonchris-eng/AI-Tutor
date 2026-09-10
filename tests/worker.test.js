/* Tutor service tests: accounts, sessions, invites, the proxy, progress, the in-app admin API,
   and the Access-guarded recovery console. The Worker is an ES module and the suite is CommonJS,
   so it is loaded as text with the one export rewritten — the deployed file is never touched. */
const fs = require('fs'), vm = require('vm');
let pass = 0; const fails = [];
const ok = (label, cond, detail = '') => cond ? pass++ : fails.push(label + (detail ? ' — ' + detail : ''));

const src = fs.readFileSync(__dirname + '/../worker/index.js', 'utf8').replace('export default {', 'module.exports = {');
const sandbox = {
  module: { exports: {} }, console, crypto, fetch: (...a) => sandbox.__fetch(...a),
  Response, Request, Headers, URL, URLSearchParams, TextEncoder, TextDecoder,
  atob, btoa, Uint8Array, Date, Math, JSON, parseInt, String, Number, Object, Array, Error, Promise, RegExp,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const worker = sandbox.module.exports;

function kv() {
  const m = new Map();
  return {
    async get(k, type) { const v = m.get(k); if (v === undefined) return null; return type === 'json' ? JSON.parse(v) : v; },
    async put(k, v) { m.set(k, String(v)); },
    async delete(k) { m.delete(k); },
    async list({ prefix }) { return { keys: [...m.keys()].filter(k => k.startsWith(prefix)).map(name => ({ name })) }; },
    _map: m,
  };
}
let upstreamSeen = null;
const req = (path, init = {}) => new Request('https://tutor.example.com' + path, init);
const J = (method, body, extra = {}) => ({ method, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json', ...extra } });
const bearer = t => ({ Authorization: 'Bearer ' + t });
const baseEnv = () => ({ ANTHROPIC_API_KEY: 'sk-ant-test', ALLOWED_ORIGIN: 'https://studyplatform.example', SITE_ORIGIN: 'https://studyplatform.example', ADMIN_USERNAME: 'chris', USAGE: kv() });

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

  console.log('PASSED: ' + pass);
  console.log('-'.repeat(50));
  if (fails.length) { console.log('FAILED:'); fails.forEach(f => console.log('  ' + f)); process.exit(1); }
  console.log('RESULT: ALL GREEN');
})().catch(e => { console.error(e); process.exit(1); });
