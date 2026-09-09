/**
 * Tutor proxy — Cloudflare Worker with per-user keys.
 * The app sends its /v1/messages call here with header X-Passcode: <user key>. The Worker checks the key,
 * adds the Anthropic API key (never exposed to the browser), forwards, returns the reply, and counts usage.
 *
 * Secrets / variables (Worker → Settings → Variables and Secrets):
 *   ANTHROPIC_API_KEY  secret   from console.anthropic.com
 *   USER_KEYS          secret   JSON: {"granite-otter-42":{"name":"Matthew","daily":200}, "another-key":{"name":"Friend","daily":100}}
 *   ALLOWED_ORIGIN     text     https://your-site.pages.dev  (or * while testing)
 * KV binding USAGE (recommended) — enforces per-user daily limits and keeps a usage log:  usage:<key>:<day> → count
 */
export default {
  async fetch(request, env) {
    const cors = { 'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-Passcode', 'Access-Control-Max-Age': '86400' };
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const url = new URL(request.url);

    // Health check: GET / → ok (no auth). GET /usage?key=<user key> → today's count for that key.
    if (request.method === 'GET') {
      if (url.pathname === '/usage') { const k = url.searchParams.get('key') || ''; const u = userFor(env, k); if (!u) return json({ error: 'unknown key' }, 401, cors); const n = env.USAGE ? parseInt((await env.USAGE.get(usageKey(k))) || '0', 10) : null; return json({ name: u.name, today: n, daily: u.daily }, 200, cors); }
      return json({ ok: true, service: 'tutor-proxy' }, 200, cors);
    }
    if (request.method !== 'POST') return json({ type: 'error', error: { type: 'method_not_allowed', message: 'POST only' } }, 405, cors);

    // 1. Per-user key
    const key = request.headers.get('X-Passcode') || '';
    const user = userFor(env, key);
    if (!user) return json({ type: 'error', error: { type: 'authentication_error', message: 'Unknown key — check the Tutor route passcode in Progress' } }, 401, cors);

    // 2. Per-user daily cap
    if (env.USAGE) {
      const uk = usageKey(key); const used = parseInt((await env.USAGE.get(uk)) || '0', 10);
      if (used >= (user.daily || 200)) return json({ type: 'error', error: { type: 'rate_limit_error', message: `${user.name}'s daily limit of ${user.daily || 200} requests is used up — resets at midnight UTC` } }, 429, cors);
      await env.USAGE.put(uk, String(used + 1), { expirationTtl: 172800 });
    }

    // 3. Only the request shape the app sends
    let body; try { body = await request.json(); } catch { return json({ type: 'error', error: { type: 'invalid_request_error', message: 'Body must be JSON' } }, 400, cors); }
    if (!body || !Array.isArray(body.messages)) return json({ type: 'error', error: { type: 'invalid_request_error', message: 'messages required' } }, 400, cors);
    if (!['claude-sonnet-4-6', 'claude-haiku-4-5-20251001'].includes(body.model)) body.model = 'claude-sonnet-4-6';
    body.max_tokens = Math.min(body.max_tokens || 1000, 4000); body.stream = false;
    body.metadata = { user_id: user.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') };

    // 4. Forward
    const upstream = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' }, body: JSON.stringify(body) });
    const text = await upstream.text();
    return new Response(text, { status: upstream.status, headers: { ...cors, 'Content-Type': 'application/json' } });
  },
};
function userFor(env, key) { if (!key) return null; try { const users = JSON.parse(env.USER_KEYS || '{}'); return users[key] || null; } catch { return null; } }
function usageKey(key) { return `usage:${key}:${new Date().toISOString().slice(0, 10)}`; }
function json(obj, status, cors) { return new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json' } }); }
