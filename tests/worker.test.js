/* Tutor proxy tests: student keys, daily caps, progress sync, and the Access-guarded admin API.
   The Worker is an ES module and the suite is CommonJS, so it is loaded as text with the one
   export rewritten — the deployed file itself is never touched. */
const fs = require('fs'), vm = require('vm');
let pass = 0; const fails = [];
const ok = (label, cond, detail = '') => cond ? pass++ : fails.push(label + (detail ? ' — ' + detail : ''));

const src = fs.readFileSync(__dirname + '/../worker/index.js', 'utf8').replace('export default {', 'module.exports = {');
const sandbox = {
  module: { exports: {} }, console, crypto, fetch: (...a) => sandbox.__fetch(...a),
  Response, Request, Headers, URL, URLSearchParams, TextEncoder, TextDecoder,
  atob, btoa, Uint32Array, Uint8Array, Date, Math, JSON, parseInt, String, Number, Object, Array, Error, Promise,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const worker = sandbox.module.exports;

/* ---- stubs ---- */
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
const anthropicReply = { id: 'msg_1', content: [{ type: 'text', text: 'OK' }] };

function req(path, init = {}) { return new Request('https://tutor.example.com' + path, init); }
const post = (path, body, headers) => req(path, { method: 'POST', body: JSON.stringify(body), headers: headers || {} });

const baseEnv = () => ({
  ANTHROPIC_API_KEY: 'sk-ant-test',
  ALLOWED_ORIGIN: 'https://studyplatform.example',
  USAGE: kv(),
});

(async () => {
  /* ---------- a signing key, so Access verification is exercised for real ---------- */
  const pair = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const pubJwk = await crypto.subtle.exportKey('jwk', pair.publicKey);
  const KID = 'test-kid';
  const TEAM = 'team.cloudflareaccess.com', AUD = 'aud-tag-123';
  const b64u = buf => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  async function jwt(payload, { kid = KID, sign = true } = {}) {
    const h = b64u(JSON.stringify({ alg: 'RS256', kid, typ: 'JWT' }));
    const p = b64u(JSON.stringify(payload));
    const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', pair.privateKey, new TextEncoder().encode(`${h}.${p}`));
    return `${h}.${p}.${sign ? b64u(sig) : b64u(new Uint8Array(256))}`;
  }
  const goodClaims = (over = {}) => ({ iss: `https://${TEAM}`, aud: [AUD], email: 'chris@example.com', exp: Math.floor(Date.now() / 1000) + 600, ...over });

  sandbox.__fetch = async (url, init) => {
    if (String(url).includes('/cdn-cgi/access/certs')) return new Response(JSON.stringify({ keys: [{ ...pubJwk, kid: KID, alg: 'RS256' }] }), { headers: { 'Content-Type': 'application/json' } });
    upstreamSeen = { url: String(url), headers: init.headers, body: JSON.parse(init.body) };
    return new Response(JSON.stringify(anthropicReply), { status: 200 });
  };

  /* ---------- health and CORS ---------- */
  let env = baseEnv();
  let r = await worker.fetch(req('/'), env);
  ok('W1 health check answers', r.status === 200 && (await r.json()).service === 'tutor-proxy');
  r = await worker.fetch(req('/', { method: 'OPTIONS' }), env);
  ok('W2 preflight allows the site origin and PUT', r.status === 204 && r.headers.get('Access-Control-Allow-Origin') === 'https://studyplatform.example' && /PUT/.test(r.headers.get('Access-Control-Allow-Methods')));

  /* ---------- student keys ---------- */
  r = await worker.fetch(post('/', { messages: [{ role: 'user', content: 'hi' }] }, { 'X-Passcode': 'nope-nope-nope' }), env);
  ok('W3 unknown key is refused', r.status === 401);
  ok('W3 a wrong key is counted against the address', await env.USAGE.get('fail:unknown:' + new Date().toISOString().slice(0, 10)) === '1');

  await env.USAGE.put('key:granite-otter-7k3m9x', JSON.stringify({ name: 'Matthew', daily: 3, created: '2026-09-10', disabled: false }));
  upstreamSeen = null;
  r = await worker.fetch(post('/', { messages: [{ role: 'user', content: 'hi' }], model: 'gpt-4' }, { 'X-Passcode': 'granite-otter-7k3m9x' }), env);
  ok('W4 a KV key is accepted and forwarded', r.status === 200 && upstreamSeen && upstreamSeen.url === 'https://api.anthropic.com/v1/messages');
  ok('W4 an unknown model falls back to Sonnet 5', upstreamSeen.body.model === 'claude-sonnet-5', String(upstreamSeen && upstreamSeen.body.model));
  ok('W4 the API key is added server-side and never echoed', upstreamSeen.headers['x-api-key'] === 'sk-ant-test');
  ok('W4 the request is tagged with the student', upstreamSeen.body.metadata.user_id === 'matthew');

  r = await worker.fetch(req('/usage?key=granite-otter-7k3m9x'), env);
  ok('W5 usage reports the count and the cap', JSON.stringify(await r.json()) === JSON.stringify({ name: 'Matthew', today: 1, daily: 3 }));

  await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': 'granite-otter-7k3m9x' }), env);
  await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': 'granite-otter-7k3m9x' }), env);
  r = await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': 'granite-otter-7k3m9x' }), env);
  ok('W6 the daily cap stops the fourth request', r.status === 429 && /daily limit of 3/.test((await r.json()).error.message));

  await env.USAGE.put('key:off-key-aaaaaa', JSON.stringify({ name: 'Ada', daily: 50, disabled: true }));
  r = await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': 'off-key-aaaaaa' }), env);
  ok('W7 a disabled key is refused', r.status === 403);

  env = baseEnv();
  env.USER_KEYS = JSON.stringify({ 'legacy-key-1': { name: 'Legacy', daily: 5 } });
  r = await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': 'legacy-key-1' }), env);
  ok('W8 the USER_KEYS secret still works', r.status === 200);
  env.USER_KEYS = '{not json';
  r = await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': 'legacy-key-1' }), env);
  ok('W8 a broken USER_KEYS refuses rather than throwing', r.status === 401);

  env.USER_KEYS = JSON.stringify({ 'legacy-key-1': { name: 'Legacy', daily: 5 } });
  r = await worker.fetch(post('/', { notMessages: true }, { 'X-Passcode': 'legacy-key-1' }), env);
  ok('W9 a body without messages is rejected', r.status === 400, 'got ' + r.status);

  /* ---------- progress sync ---------- */
  env = baseEnv();
  await env.USAGE.put('key:sync-key-aaaaa', JSON.stringify({ name: 'Matthew', daily: 50 }));
  const H = { 'X-Passcode': 'sync-key-aaaaa', 'Content-Type': 'application/json' };
  r = await worker.fetch(req('/progress', { headers: H }), env);
  ok('W10 nothing saved yet reads as 404', r.status === 404);
  r = await worker.fetch(req('/progress', { method: 'PUT', headers: H, body: JSON.stringify({ device: 'an iPad', state: { nodes: {}, setup: { student: 'Matthew' } } }) }), env);
  ok('W11 progress is accepted', r.status === 200 && !!(await r.json()).updatedAt);
  r = await worker.fetch(req('/progress', { headers: H }), env);
  let saved = await r.json();
  ok('W11 progress reads back with the device and a timestamp', saved.state.setup.student === 'Matthew' && saved.device === 'an iPad' && !!saved.updatedAt);
  r = await worker.fetch(req('/progress', { headers: { 'X-Passcode': 'someone-else' } }), env);
  ok('W12 another key cannot read it', r.status === 401);
  r = await worker.fetch(req('/progress', { method: 'PUT', headers: H, body: JSON.stringify({ state: 'not an object' }) }), env);
  ok('W13 a body without state is rejected', r.status === 400);
  r = await worker.fetch(req('/progress', { method: 'PUT', headers: H, body: JSON.stringify({ state: { pad: 'x'.repeat(1_000_100) } }) }), env);
  ok('W13 an oversized backup is rejected', r.status === 413);

  /* ---------- admin: closed unless Access is configured ---------- */
  env = baseEnv();
  r = await worker.fetch(req('/admin'), env);
  ok('W14 admin is off until Access is configured', r.status === 503 && /ACCESS_TEAM_DOMAIN/.test(await r.text()));

  env.ACCESS_TEAM_DOMAIN = TEAM; env.ACCESS_AUD = AUD;
  r = await worker.fetch(req('/admin'), env);
  ok('W15 admin refuses a request with no Access token', r.status === 401);
  r = await worker.fetch(req('/admin', { headers: { 'Cf-Access-Jwt-Assertion': await jwt(goodClaims(), { sign: false }) } }), env);
  ok('W16 a forged signature is refused', r.status === 401);
  r = await worker.fetch(req('/admin', { headers: { 'Cf-Access-Jwt-Assertion': await jwt(goodClaims({ exp: Math.floor(Date.now() / 1000) - 10 })) } }), env);
  ok('W17 an expired token is refused', r.status === 401);
  r = await worker.fetch(req('/admin', { headers: { 'Cf-Access-Jwt-Assertion': await jwt(goodClaims({ aud: ['someone-elses-app'] })) } }), env);
  ok('W18 a token for another application is refused', r.status === 401);
  r = await worker.fetch(req('/admin', { headers: { 'Cf-Access-Jwt-Assertion': await jwt(goodClaims({ iss: 'https://evil.example' })) } }), env);
  ok('W19 a token from another issuer is refused', r.status === 401);

  /* ---------- admin: the real thing ---------- */
  const A = async () => ({ 'Cf-Access-Jwt-Assertion': await jwt(goodClaims()), 'Content-Type': 'application/json' });
  r = await worker.fetch(req('/admin', { headers: await A() }), env);
  const panel = await r.text();
  ok('W20 a valid token opens the panel', r.status === 200 && /Student keys/.test(panel) && /chris@example.com/.test(panel));

  r = await worker.fetch(req('/admin/keys', { method: 'POST', headers: await A(), body: JSON.stringify({ name: 'Ada', daily: 150 }) }), env);
  const made = await r.json();
  ok('W21 issuing a key returns a readable passcode', r.status === 201 && /^[a-z]+-[a-z]+-[a-z2-9]{6}$/.test(made.passcode), made.passcode);
  ok('W21 the cap is stored', made.daily === 150 && made.name === 'Ada' && made.disabled === false);

  r = await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': made.passcode }), env);
  ok('W22 an issued key works immediately, with no redeploy', r.status === 200);

  r = await worker.fetch(req('/admin/keys', { headers: await A() }), env);
  let listed = await r.json();
  ok('W23 the panel lists the key with its usage', listed.keys.length === 1 && listed.keys[0].name === 'Ada' && listed.keys[0].today === 1);

  r = await worker.fetch(req('/admin/keys/' + made.passcode, { method: 'PATCH', headers: await A(), body: JSON.stringify({ disabled: true }) }), env);
  ok('W24 a key can be turned off', r.status === 200 && (await r.json()).disabled === true);
  r = await worker.fetch(post('/', { messages: [{}] }, { 'X-Passcode': made.passcode }), env);
  ok('W24 a disabled key stops working at once', r.status === 403);

  r = await worker.fetch(req('/admin/keys/' + made.passcode, { method: 'PATCH', headers: await A(), body: JSON.stringify({ daily: 99999 }) }), env);
  ok('W25 a silly cap is clamped', (await r.json()).daily === 2000);

  await env.USAGE.put('progress:' + made.passcode, JSON.stringify({ state: {} }));
  r = await worker.fetch(req('/admin/keys/' + made.passcode, { method: 'DELETE', headers: await A() }), env);
  ok('W26 deleting a key removes it', r.status === 200 && (await env.USAGE.get('key:' + made.passcode)) === null);
  ok('W26 deleting a key removes their synced progress', (await env.USAGE.get('progress:' + made.passcode)) === null);

  r = await worker.fetch(req('/admin/keys/never-existed', { method: 'PATCH', headers: await A(), body: '{}' }), env);
  ok('W27 editing a missing key is a 404', r.status === 404);

  /* passcodes must not collide or be guessable */
  const seen = new Set();
  for (let i = 0; i < 200; i++) {
    const res = await worker.fetch(req('/admin/keys', { method: 'POST', headers: await A(), body: JSON.stringify({ name: 'S' + i }) }), env);
    seen.add((await res.json()).passcode);
  }
  ok('W28 200 issued passcodes are all distinct', seen.size === 200, String(seen.size));

  console.log('PASSED: ' + pass);
  console.log('-'.repeat(50));
  if (fails.length) { console.log('FAILED:'); fails.forEach(f => console.log('  ' + f)); process.exit(1); }
  console.log('RESULT: ALL GREEN');
})().catch(e => { console.error(e); process.exit(1); });
