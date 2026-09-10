/**
 * Tutor proxy — Cloudflare Worker.
 *
 * Student route:  POST /            with header X-Passcode: <student key>
 *                 GET  /usage?key=  today's count for a key
 *                 GET  /progress    the student's saved progress   (X-Passcode)
 *                 PUT  /progress    save it                        (X-Passcode)
 * Admin route:    GET  /admin       the key-management panel
 *                 GET/POST/PATCH/DELETE /admin/keys[/<key>]
 *
 * Student keys live in KV as key:<passcode> -> {name, daily, created, disabled}.
 * The USER_KEYS secret still works as a fallback so an existing deployment keeps
 * running; keys issued from the panel go to KV and need no redeploy.
 *
 * Variables and secrets (Settings -> Variables and Secrets):
 *   ANTHROPIC_API_KEY    secret   from console.anthropic.com
 *   USER_KEYS            secret   optional legacy fallback, JSON key -> {name, daily}
 *   ALLOWED_ORIGIN       text     https://your-site   (exact, no trailing slash)
 *   ACCESS_TEAM_DOMAIN   text     <team>.cloudflareaccess.com   — admin panel off without it
 *   ACCESS_AUD           text     the Access application's Application Audience tag
 *   SITE_ORIGIN          text     optional, for the share links the panel builds
 * KV binding USAGE — required for daily caps, issued keys, and progress sync.
 */

const MODELS = ['claude-sonnet-5', 'claude-haiku-4-5'];
const DEFAULT_DAILY = 200;
const MAX_PROGRESS_BYTES = 1_000_000;
const MAX_FAILURES_PER_DAY = 50;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    if (url.pathname === '/admin' || url.pathname.startsWith('/admin/')) return admin(request, env, url);
    if (url.pathname === '/progress') return progress(request, env, cors);

    if (request.method === 'GET') {
      if (url.pathname === '/usage') {
        const key = url.searchParams.get('key') || '';
        const user = await userFor(env, key);
        if (!user) return json({ error: 'unknown key' }, 401, cors);
        return json({ name: user.name, today: await usedToday(env, key), daily: user.daily || DEFAULT_DAILY }, 200, cors);
      }
      return json({ ok: true, service: 'tutor-proxy' }, 200, cors);
    }
    if (request.method !== 'POST') return json(apiError('method_not_allowed', 'POST only'), 405, cors);

    // 1. Per-student key
    const key = request.headers.get('X-Passcode') || '';
    const user = await userFor(env, key);
    if (!user) {
      await noteFailure(env, request);
      return json(apiError('authentication_error', 'Unknown key — check the Tutor route passcode in Progress'), 401, cors);
    }
    if (user.disabled) return json(apiError('authentication_error', `${user.name}'s key has been turned off`), 403, cors);

    // 2. Per-student daily cap
    if (env.USAGE) {
      const daily = user.daily || DEFAULT_DAILY;
      const used = await usedToday(env, key);
      if (used >= daily) return json(apiError('rate_limit_error', `${user.name}'s daily limit of ${daily} requests is used up — resets at midnight UTC`), 429, cors);
      await env.USAGE.put(usageKey(key), String(used + 1), { expirationTtl: 60 * 60 * 24 * 100 });
    }

    // 3. Only the request shape the app sends
    let body;
    try { body = await request.json(); } catch { return json(apiError('invalid_request_error', 'Body must be JSON'), 400, cors); }
    if (!body || !Array.isArray(body.messages)) return json(apiError('invalid_request_error', 'messages required'), 400, cors);
    if (!MODELS.includes(body.model)) body.model = MODELS[0];
    body.max_tokens = Math.min(body.max_tokens || 1000, 4000);
    body.stream = false;
    body.metadata = { user_id: slug(user.name) };

    // 4. Forward with our API key
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify(body),
    });
    return new Response(await upstream.text(), { status: upstream.status, headers: { ...cors, 'Content-Type': 'application/json' } });
  },
};

/* ---------- students ---------- */

async function userFor(env, key) {
  if (!key || !/^[\w.-]{4,80}$/.test(key)) return null;
  if (env.USAGE) {
    const rec = await env.USAGE.get(`key:${key}`, 'json');
    if (rec) return rec;
  }
  try {
    const legacy = JSON.parse(env.USER_KEYS || '{}')[key];
    if (legacy) return legacy;
  } catch { /* a malformed USER_KEYS must not take the whole route down */ }
  return null;
}

const usageKey = key => `usage:${key}:${new Date().toISOString().slice(0, 10)}`;

async function usedToday(env, key) {
  if (!env.USAGE) return null;
  return parseInt((await env.USAGE.get(usageKey(key))) || '0', 10);
}

/** A wrong key is cheap to guess in bulk; count failures per address and stop answering. */
async function noteFailure(env, request) {
  if (!env.USAGE) return;
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const k = `fail:${ip}:${new Date().toISOString().slice(0, 10)}`;
  const n = parseInt((await env.USAGE.get(k)) || '0', 10);
  if (n < MAX_FAILURES_PER_DAY) await env.USAGE.put(k, String(n + 1), { expirationTtl: 60 * 60 * 24 * 2 });
}

/* ---------- progress sync ---------- */

async function progress(request, env, cors) {
  if (!env.USAGE) return json({ error: 'progress sync needs the USAGE KV namespace' }, 501, cors);
  const key = request.headers.get('X-Passcode') || '';
  const user = await userFor(env, key);
  if (!user || user.disabled) return json({ error: 'unknown key' }, 401, cors);

  if (request.method === 'GET') {
    const saved = await env.USAGE.get(`progress:${key}`, 'json');
    if (!saved) return json({ error: 'nothing saved yet' }, 404, cors);
    return json(saved, 200, cors);
  }
  if (request.method === 'PUT') {
    const text = await request.text();
    if (text.length > MAX_PROGRESS_BYTES) return json({ error: 'progress too large' }, 413, cors);
    let sent;
    try { sent = JSON.parse(text); } catch { return json({ error: 'body must be JSON' }, 400, cors); }
    if (!sent || typeof sent.state !== 'object' || sent.state === null) return json({ error: 'state required' }, 400, cors);
    const record = { updatedAt: new Date().toISOString(), device: String(sent.device || 'a device').slice(0, 60), state: sent.state };
    await env.USAGE.put(`progress:${key}`, JSON.stringify(record));
    return json({ ok: true, updatedAt: record.updatedAt }, 200, cors);
  }
  return json({ error: 'GET or PUT' }, 405, cors);
}

/* ---------- admin ---------- */

async function admin(request, env, url) {
  const who = await accessUser(request, env);
  if (who.error === 'not_configured') {
    return html(page('Admin panel is off', 'Set <code>ACCESS_TEAM_DOMAIN</code> and <code>ACCESS_AUD</code> on this Worker, and put a Cloudflare Access policy in front of <code>/admin*</code>, before the panel will open.'), 503);
  }
  if (who.error) return html(page('Not signed in', 'Cloudflare Access did not vouch for this request (' + esc(who.error) + '). Open the panel through your Access login.'), 401);
  if (!env.USAGE) return html(page('No KV namespace', 'Bind a KV namespace as <code>USAGE</code> — issued keys and usage counts live there.'), 503);

  // Function replacement, so a $ in the address is not read as a replacement pattern.
  if (url.pathname === '/admin') return html(PANEL.replace('__WHO__', () => esc(who.email)), 200);

  const rest = url.pathname.slice('/admin/keys'.length);
  if (!url.pathname.startsWith('/admin/keys')) return json({ error: 'not found' }, 404, {});
  const target = decodeURIComponent(rest.replace(/^\//, ''));

  if (request.method === 'GET' && !target) {
    const list = await env.USAGE.list({ prefix: 'key:' });
    const keys = [];
    for (const entry of list.keys) {
      const passcode = entry.name.slice(4);
      const rec = await env.USAGE.get(entry.name, 'json');
      if (!rec) continue;
      keys.push({ passcode, ...rec, today: await usedToday(env, passcode), hasProgress: !!(await env.USAGE.get(`progress:${passcode}`)) });
    }
    keys.sort((a, b) => String(a.name).localeCompare(String(b.name)));
    const site = env.SITE_ORIGIN || env.ALLOWED_ORIGIN || '';
    return json({ keys, site, worker: url.origin, legacy: legacyNames(env) }, 200, {});
  }

  if (request.method === 'POST' && !target) {
    const body = await request.json().catch(() => null);
    const name = String((body && body.name) || '').trim().slice(0, 60);
    if (!name) return json({ error: 'name required' }, 400, {});
    const daily = clampDaily(body && body.daily);
    const passcode = newPasscode();
    const rec = { name, daily, created: new Date().toISOString().slice(0, 10), disabled: false };
    await env.USAGE.put(`key:${passcode}`, JSON.stringify(rec));
    return json({ passcode, ...rec }, 201, {});
  }

  if (!target) return json({ error: 'method not allowed' }, 405, {});
  const existing = await env.USAGE.get(`key:${target}`, 'json');
  if (!existing) return json({ error: 'no such key' }, 404, {});

  if (request.method === 'PATCH') {
    const body = await request.json().catch(() => ({}));
    const rec = { ...existing };
    if (body.daily !== undefined) rec.daily = clampDaily(body.daily);
    if (body.disabled !== undefined) rec.disabled = !!body.disabled;
    if (body.name !== undefined) rec.name = String(body.name).trim().slice(0, 60) || rec.name;
    await env.USAGE.put(`key:${target}`, JSON.stringify(rec));
    return json({ passcode: target, ...rec }, 200, {});
  }
  if (request.method === 'DELETE') {
    await env.USAGE.delete(`key:${target}`);
    await env.USAGE.delete(`progress:${target}`);
    return json({ ok: true }, 200, {});
  }
  return json({ error: 'method not allowed' }, 405, {});
}

function legacyNames(env) {
  try { return Object.entries(JSON.parse(env.USER_KEYS || '{}')).map(([, v]) => String(v && v.name || '?')); }
  catch { return []; }
}

const clampDaily = v => Math.max(1, Math.min(2000, parseInt(v, 10) || DEFAULT_DAILY));

/* Readable enough to dictate, random enough not to be guessed: ~10^12 combinations. */
const ADJ = 'granite copper amber cobalt russet umber sable coral flint indigo olive saffron teal cedar quartz slate'.split(' ');
const NOUN = 'otter heron falcon badger marten kestrel plover lynx osprey raven curlew grebe stoat wren pike shrike'.split(' ');
const B32 = 'abcdefghjkmnpqrstuvwxyz23456789';

function newPasscode() {
  const r = new Uint32Array(8);
  crypto.getRandomValues(r);
  let tail = '';
  for (let i = 0; i < 6; i++) tail += B32[r[i + 2] % B32.length];
  return `${ADJ[r[0] % ADJ.length]}-${NOUN[r[1] % NOUN.length]}-${tail}`;
}

/* ---------- Cloudflare Access ---------- */

let jwksCache = { domain: '', at: 0, keys: null };

async function accessUser(request, env) {
  const team = env.ACCESS_TEAM_DOMAIN, aud = env.ACCESS_AUD;
  if (!team || !aud) return { error: 'not_configured' };
  const token = request.headers.get('Cf-Access-Jwt-Assertion') || '';
  const parts = token.split('.');
  if (parts.length !== 3) return { error: 'no_token' };
  const [rawHeader, rawPayload, rawSig] = parts;
  let header, payload;
  try { header = JSON.parse(b64Text(rawHeader)); payload = JSON.parse(b64Text(rawPayload)); }
  catch { return { error: 'malformed_token' }; }
  if (header.alg !== 'RS256') return { error: 'unexpected_algorithm' };
  const now = Math.floor(Date.now() / 1000);
  if (!payload.exp || payload.exp <= now) return { error: 'token_expired' };
  if (payload.nbf && payload.nbf > now + 60) return { error: 'token_not_yet_valid' };
  if (payload.iss !== `https://${team}`) return { error: 'wrong_issuer' };
  const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!auds.includes(aud)) return { error: 'wrong_audience' };

  const keys = await jwks(team);
  const jwk = keys.find(k => k.kid === header.kid);
  if (!jwk) return { error: 'unknown_signing_key' };
  const pub = await crypto.subtle.importKey('jwk', { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: 'RS256', ext: true },
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  const signed = new TextEncoder().encode(`${rawHeader}.${rawPayload}`);
  if (!(await crypto.subtle.verify('RSASSA-PKCS1-v1_5', pub, b64Bytes(rawSig), signed))) return { error: 'bad_signature' };
  return { email: payload.email || 'signed in' };
}

async function jwks(team) {
  if (jwksCache.keys && jwksCache.domain === team && Date.now() - jwksCache.at < 10 * 60 * 1000) return jwksCache.keys;
  const res = await fetch(`https://${team}/cdn-cgi/access/certs`);
  const body = await res.json();
  const keys = (body && body.keys) || [];
  jwksCache = { domain: team, at: Date.now(), keys };
  return keys;
}

function b64Bytes(s) {
  let t = s.replace(/-/g, '+').replace(/_/g, '/');
  while (t.length % 4) t += '=';
  const bin = atob(t);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
const b64Text = s => new TextDecoder().decode(b64Bytes(s));

/* ---------- helpers ---------- */

function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Passcode',
    'Access-Control-Max-Age': '86400',
  };
}
const apiError = (type, message) => ({ type: 'error', error: { type, message } });
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'student';
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const json = (obj, status, headers) => new Response(JSON.stringify(obj), { status, headers: { ...headers, 'Content-Type': 'application/json' } });
const html = (body, status) => new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const page = (title, note) => '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + '</title><style>body{font:16px/1.5 system-ui,sans-serif;max-width:34rem;margin:12vh auto;padding:0 1.5rem;color:#1c1917}h1{font-size:1.4rem}code{background:#f5f5f4;padding:.1em .35em;border-radius:4px;font-size:.9em}</style><h1>' + title + '</h1><p>' + note + '</p>';

/* ---------- the panel ---------- */

const PANEL = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Student keys</title><style>
:root{--ink:#1c1917;--soft:#78716c;--line:#e7e5e4;--bg:#faf9f7;--accent:#1d4ed8;--bad:#b91c1c}
*{box-sizing:border-box}body{font:16px/1.55 system-ui,-apple-system,sans-serif;color:var(--ink);background:var(--bg);margin:0;padding:2rem 1.25rem 5rem}
main{max-width:60rem;margin:0 auto}h1{font-size:1.5rem;margin:0}
.who{color:var(--soft);font-size:.85rem;margin:.25rem 0 1.75rem}
.card{background:#fff;border:1px solid var(--line);border-radius:10px;padding:1.1rem 1.25rem;margin-bottom:1.25rem}
h2{font-size:1rem;margin:0 0 .85rem;letter-spacing:.01em}
label{display:block;font-size:.8rem;color:var(--soft);margin-bottom:.25rem}
input,button{font:inherit}
input{width:100%;padding:.5rem .6rem;border:1px solid var(--line);border-radius:6px;background:#fff}
.row{display:flex;gap:.75rem;flex-wrap:wrap;align-items:flex-end}.row>div{flex:1 1 9rem}
button{padding:.5rem .9rem;border-radius:6px;border:1px solid var(--line);background:#fff;cursor:pointer}
button.go{background:var(--accent);border-color:var(--accent);color:#fff}
button.danger{color:var(--bad);border-color:#fecaca}
button.mini{padding:.25rem .5rem;font-size:.8rem}
.wrap{overflow-x:auto}table{border-collapse:collapse;width:100%;font-size:.9rem;min-width:44rem}
th,td{text-align:left;padding:.6rem .5rem;border-bottom:1px solid var(--line);vertical-align:middle}
th{font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:var(--soft)}
code{font-family:ui-monospace,Menlo,monospace;font-size:.88em;background:#f5f5f4;padding:.1em .35em;border-radius:4px}
.off{opacity:.5}.bar{height:4px;background:var(--line);border-radius:2px;overflow:hidden;margin-top:.25rem}.bar i{display:block;height:100%;background:var(--accent)}
.new{background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:.9rem 1rem;margin-top:1rem}
.new code{background:#fff;font-size:1.05em}
.msg{color:var(--bad);font-size:.85rem;margin-top:.5rem}
.empty{color:var(--soft);padding:1rem 0}
@media(prefers-color-scheme:dark){:root{--ink:#e7e5e4;--soft:#a8a29e;--line:#292524;--bg:#1c1917;--accent:#60a5fa;--bad:#fca5a5}
body{background:var(--bg)}.card{background:#232020}input,button{background:#232020;color:inherit}button.go{color:#0b1220}code{background:#2b2725}.new{background:#0f2d22;border-color:#14532d}.new code{background:#232020}}
</style>
<main>
<h1>Student keys</h1><p class="who">Signed in as __WHO__</p>

<div class="card"><h2>Issue a key</h2>
<div class="row">
<div><label for="n">Student name</label><input id="n" placeholder="Matthew" autocapitalize="words"></div>
<div style="flex:0 0 8rem"><label for="d">Requests a day</label><input id="d" type="number" value="200" min="1" max="2000"></div>
<div style="flex:0 0 auto"><button class="go" id="make">Create key</button></div>
</div><div id="made"></div><div class="msg" id="err"></div></div>

<div class="card"><h2>Keys</h2><div class="wrap"><table>
<thead><tr><th>Student</th><th>Key</th><th>Today</th><th>Issued</th><th>Progress</th><th></th></tr></thead>
<tbody id="rows"><tr><td colspan="6" class="empty">Loading…</td></tr></tbody>
</table></div><div id="legacy"></div></div>
</main>
<script>
var SITE='',WORKER='';
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function api(path,opts){return fetch('/admin/keys'+path,Object.assign({headers:{'Content-Type':'application/json'}},opts||{})).then(function(r){
  return r.json().catch(function(){return {}}).then(function(b){if(!r.ok)throw new Error(b.error||('HTTP '+r.status));return b})})}
function link(k){return SITE?SITE+'/#route='+encodeURIComponent(WORKER)+'&key='+encodeURIComponent(k):''}
function load(){api('').then(function(d){
  SITE=d.site||'';WORKER=d.worker||'';
  var rows=document.getElementById('rows');
  if(!d.keys.length){rows.innerHTML='<tr><td colspan="6" class="empty">No keys issued yet.</td></tr>'}
  else{rows.innerHTML=d.keys.map(function(k){
    var pct=Math.min(100,Math.round(100*(k.today||0)/(k.daily||200)));
    return '<tr'+(k.disabled?' class="off"':'')+'>'
      +'<td>'+esc(k.name)+(k.disabled?' <span style="font-size:.75rem">(off)</span>':'')+'</td>'
      +'<td><code>'+esc(k.passcode)+'</code></td>'
      +'<td>'+(k.today==null?'—':esc(k.today)+' / '+esc(k.daily||200))+'<div class="bar"><i style="width:'+pct+'%"></i></div></td>'
      +'<td>'+esc(k.created||'')+'</td>'
      +'<td>'+(k.hasProgress?'synced':'—')+'</td>'
      +'<td style="white-space:nowrap">'
        +'<button class="mini" data-copy="'+esc(k.passcode)+'">Copy link</button> '
        +'<button class="mini" data-toggle="'+esc(k.passcode)+'" data-to="'+(k.disabled?'0':'1')+'">'+(k.disabled?'Enable':'Disable')+'</button> '
        +'<button class="mini danger" data-del="'+esc(k.passcode)+'">Delete</button>'
      +'</td></tr>'}).join('')}
  document.getElementById('legacy').innerHTML=d.legacy&&d.legacy.length
    ? '<p style="color:var(--soft);font-size:.85rem;margin:.9rem 0 0">Also accepted from the USER_KEYS secret: '+d.legacy.map(esc).join(', ')+'. Reissue those here and clear the secret when you are ready.</p>' : ''
}).catch(function(e){document.getElementById('rows').innerHTML='<tr><td colspan="6" class="empty">'+esc(e.message)+'</td></tr>'})}
document.getElementById('make').addEventListener('click',function(){
  var n=document.getElementById('n').value.trim(),d=document.getElementById('d').value;
  document.getElementById('err').textContent='';
  if(!n){document.getElementById('err').textContent='Give the student a name.';return}
  api('',{method:'POST',body:JSON.stringify({name:n,daily:d})}).then(function(k){
    var l=link(k.passcode);
    document.getElementById('made').innerHTML='<div class="new"><b>'+esc(k.name)+'</b> — key <code>'+esc(k.passcode)+'</code>'
      +'<p style="margin:.6rem 0 0;font-size:.88rem">Shown once here, but you can always copy the setup link from the table below.</p>'
      +(l?'<p style="margin:.5rem 0 0"><button class="mini" data-copy="'+esc(k.passcode)+'">Copy setup link</button></p>':'')+'</div>';
    document.getElementById('n').value='';load()
  }).catch(function(e){document.getElementById('err').textContent=e.message})})
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('button');if(!b)return;
  if(b.dataset.copy){var l=link(b.dataset.copy)||b.dataset.copy;
    navigator.clipboard.writeText(l).then(function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy link'},1200)},function(){prompt('Copy this:',l)});return}
  if(b.dataset.toggle){api('/'+encodeURIComponent(b.dataset.toggle),{method:'PATCH',body:JSON.stringify({disabled:b.dataset.to==='1'})}).then(load);return}
  if(b.dataset.del){if(!confirm('Delete this key? The student loses access and their synced progress.'))return;
    api('/'+encodeURIComponent(b.dataset.del),{method:'DELETE'}).then(load);return}})
load()
</script>`;
