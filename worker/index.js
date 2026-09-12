/**
 * Tutor service — Cloudflare Worker.
 *
 * Accounts live in KV. A student signs in with a username and password, gets a
 * session token, and everything else — the AI proxy, progress, the admin API —
 * is keyed to that session. The Anthropic API key never leaves this Worker.
 *
 *   POST /auth/login          {username, password}      -> {token, user}
 *   POST /auth/logout         bearer
 *   GET  /auth/me             bearer                     -> {user}
 *   GET  /auth/invite?token=  what an invite is for      -> {username, name}
 *   POST /auth/invite         {token, password}          -> {token, user}   (sets the password, signs in)
 *   POST /auth/password       bearer {current, next}
 *   GET  /progress            bearer                     -> {updatedAt, device, state}
 *   POST /videos              bearer {spec, topic, board, level, subject, code, topicName, ideas} -> {items:[{id, url, title, channel, length, why, image}], at}
 *   PUT  /progress            bearer {device, state}
 *   GET  /desk/all            bearer                     -> {rooms:{<room>:{count, latest:[…]}}, used, quota}
 *   GET  /desk/unfurl?url=    bearer                     -> {title, image, site}   (http(s) only, no private addresses)
 *   GET  /desk/file/<user>/<room>/<id>  bearer, owner only -> the file
 *   GET  /desk/<room>         bearer                     -> {items, used, quota}
 *   POST /desk/<room>         bearer {kind, …}           -> {item}         (link, video, card, note)
 *   POST /desk/<room>/upload  bearer, raw body, X-Desk-Name, X-Desk-Kind -> {item}   (photo or file, into R2)
 *   PATCH/DELETE /desk/<room>/<id>  bearer
 *   POST /                    bearer, an Anthropic messages request -> forwarded
 *
 *   Real papers (bearer, owner only; every model call counts against the daily cap; see papers.js):
 *   GET/POST /papers                          list the student's attempts / create one {spec, series, paper, name, marks, qp, ms, …}
 *   GET/PATCH/DELETE /papers/<id>             the attempt / merge assign, confidence, attempted, transcripts, ticks, status
 *   POST  /papers/<id>/pages/upload           raw image, X-Page-Name -> {page};  GET/PATCH/DELETE /papers/<id>/pages/<pid>
 *   POST  /papers/<id>/questions              {spec} -> {questions} (shared per paper) or {questions:null, fallback:'typed', error}
 *   POST  /papers/<id>/prepare | /mark        -> 202 {job}   the PaperMarker Workflow: transcribe + mark points / mark every question
 *   POST  /papers/<id>/questions/<q>/mark     -> {result}    one question again
 *   GET   /papers/<id>/status                 -> {job, status, score, total}
 *   GET/POST /papers/admin/boards             (admin) which boards' papers are switched off; GET /courses carries papersOff too
 *
 *   Admin (bearer, role admin):
 *   GET    /manage/users
 *   POST   /manage/users              {username, name, daily, role?} -> {user, invite}
 *   PATCH  /manage/users/:u           {name?, daily?, disabled?, role?}
 *   DELETE /manage/users/:u
 *   POST   /manage/users/:u/invite    -> a fresh invite (password reset)
 *
 *   Recovery console (behind Cloudflare Access, not a session):
 *   GET  /admin                shows the admin account and a button
 *   POST /admin/bootstrap      mints an invite for ADMIN_USERNAME, role admin
 *
 * KV layout:
 *   user:<username>      {username, name, role, pw:{salt, hash, iter}, daily, created, disabled}
 *   session:<token>      {username, created}                       expires after SESSION_DAYS
 *   invite:<token>       {username, name, role, daily}             expires after INVITE_DAYS
 *   progress:<username>  {updatedAt, device, state}
 *   desk:<username>:<room> {items:[{id, kind, at, title, text, url, site, image, video, pos, key, name, size, type, w, h, thumb, cards}]}
 *   deskq:<username>     bytes of files stored in R2 (quota)
 *   unfurl:<sha>         a link's title and preview image, cached a week
 *   videos2:<spec>:<topic> the room's verified YouTube videos, cached 60 days (7 when none were found)
 *   paper:<username>:<id>  a real-paper attempt: pages, assignments, transcripts, ticks, results, job (papers.js)
 *   paperspec:<spec>       the trimmed specification the app posted for papers (ids, names, codes, marking summary)
 *   qmap:<spec>:<series>:<paper>          the paper's question map, shared by every student (derived metadata, never the paper's text)
 *   points:<spec>:<series>:<paper>:<q>    one question's paraphrased mark points, shared by every student
 *   papers:off             ["AQA", …] boards whose papers the admin has switched off
 *   usage:<username>:<day>, fail:<ip>:<day>, fail:user:<username>:<day>
 * R2 (DESK bucket): desk/<username>/<room>/<id>.<ext> the desktop's files; paper/<username>/<id>/<pageId>.<ext> paper photographs
 *   (both count against deskq:<username>)
 *
 * Variables and secrets:
 *   ANTHROPIC_API_KEY    secret   from console.anthropic.com
 *   ALLOWED_ORIGIN       text     the site's origin, exact, no trailing slash
 *   SITE_ORIGIN          text     where the app lives, for invite links (defaults to ALLOWED_ORIGIN)
 *   ADMIN_USERNAME       text     the account the recovery console can mint an invite for (default chris)
 *   ACCESS_TEAM_DOMAIN   text     <team>.cloudflareaccess.com — recovery console off without it
 *   ACCESS_AUD           text     the Access application's audience tag
 * KV binding USAGE — required. R2 binding DESK — the per-room desktop's files; without it the desktop answers 503.
 */

import { WorkflowEntrypoint } from 'cloudflare:workers';
import { runBuild, runReview, anthropicAI, headOf, specIdFor } from './builder.js';
import { runDepth, kitAI } from './depth.js';
import { papers, PaperMarker } from './papers.js';
import CATALOGUE from '../data/catalogue.json';

/* The paper marker Workflow lives in papers.js with its routes; wrangler binds it by this name (PAPER_MARKER). */
export { PaperMarker };

const MODELS = ['claude-sonnet-5', 'claude-haiku-4-5'];
const BUILD_STALE_MS = 30 * 60 * 1000;   // a build record older than this with no progress is treated as dead
const DEFAULT_DAILY = 200;
const MAX_PROGRESS_BYTES = 1_000_000;
const DESK_QUOTA = 250 * 1024 * 1024, DESK_MAX_FILE = 8 * 1024 * 1024, DESK_MAX_ITEMS = 200, DESK_TEXT_MAX = 3000, DESK_THUMB_MAX = 24_000;
const DESK_TYPES = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'application/pdf': 'pdf' };
const SESSION_DAYS = 30, INVITE_DAYS = 7;
const PBKDF2_ITER = 100_000;                       // the Workers runtime ceiling
const IP_FAILS_PER_DAY = 30, USER_FAILS_PER_DAY = 10;
const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{1,29}$/;
const MIN_PASSWORD = 8;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (!env.USAGE) return json({ error: 'the USAGE KV namespace is not bound' }, 503, cors);

    const p = url.pathname;
    try {
      if (p === '/admin' || p.startsWith('/admin/')) return recovery(request, env, url);
      if (p.startsWith('/auth/')) return auth(request, env, url, cors);
      if (p === '/progress') return progress(request, env, cors);
      if (p === '/videos' && request.method === 'POST') return roomVideos(request, env, cors);
      if (p === '/desk' || p.startsWith('/desk/')) return desk(request, env, url, cors);
      if (p === '/papers' || p.startsWith('/papers/')) return papers(request, env, url, cors);
      if (p === '/courses' || p.startsWith('/courses/')) return courses(request, env, url, cors);
      if (p.startsWith('/manage/courses') || p.startsWith('/manage/reviews') || p === '/manage/catalogue') return manageCourses(request, env, url, cors);
      if (p.startsWith('/manage/')) return manage(request, env, url, cors);
      if (request.method === 'GET') return json({ ok: true, service: 'tutor-proxy' }, 200, cors);
      if (request.method === 'POST' && (p === '/' || p === '/v1/messages')) return proxy(request, env, cors);
      return json({ error: 'not found' }, 404, cors);
    } catch (e) {
      return json({ error: 'server error', detail: String(e && e.message || e) }, 500, cors);
    }
  },

  /* The monthly pass: one review instance per published course. Most will HEAD the document, find it
     unchanged, and stop — no model call. */
  async scheduled(controller, env, ctx) {
    if (!env.USAGE || !env.COURSE_REVIEW) return;
    const list = await env.USAGE.list({ prefix: 'spec-meta:' });
    const started = [];
    for (const entry of list.keys) {
      const meta = await env.USAGE.get(entry.name, 'json');
      if (!meta || meta.status !== 'published') continue;
      const id = `${meta.id}-review-${Date.now()}`;
      await env.COURSE_REVIEW.create({ id, params: { id: meta.id } });
      started.push(meta.id);
    }
    await env.USAGE.put('review:last-run', JSON.stringify({ at: new Date().toISOString(), cron: controller && controller.cron, courses: started }));
  },
};

/* ---------- videos for a room ----------
   A YouTube search link finds nothing specific, so the rail lists real videos instead: a model writes the searches a
   student would type, the Worker reads YouTube's own results page for each, a model keeps only the videos that teach
   this topic at this level, and every one it keeps is checked against YouTube's oEmbed endpoint before it is listed.
   Nothing is shown for a room where nothing passes. One search per room, then cached; an admin may ask for a fresh one. */
const VIDEO_TTL = 60 * 86400, VIDEO_NONE_TTL = 7 * 86400, VIDEO_FAIL_TTL = 3600, VIDEO_MODEL = 'claude-sonnet-5', VIDEO_MAX = 4;
async function roomVideos(request, env, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json({ error: 'not signed in' }, 401, cors);
  let b; try { b = await request.json(); } catch (e) { return json({ error: 'a JSON body is required' }, 400, cors); }
  const str = (v, n) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, n);
  const ctx = { spec: str(b.spec, 40), topic: str(b.topic, 60), board: str(b.board, 40), level: str(b.level, 20), subject: str(b.subject, 100), code: str(b.code, 20), topicName: str(b.topicName, 160),
    ideas: (Array.isArray(b.ideas) ? b.ideas : []).slice(0, 12).map(x => str(x, 160)).filter(Boolean) };
  if (!ctx.spec || !ctx.topic || !ctx.subject || !ctx.topicName) return json({ error: 'spec, topic, subject and topicName are required' }, 400, cors);
  if (!/^[A-Za-z0-9._-]+$/.test(ctx.spec) || /\s/.test(ctx.topic)) return json({ error: 'spec and topic must be ids' }, 400, cors);
  const ck = `videos2:${ctx.spec}:${ctx.topic}`;
  const cached = await env.USAGE.get(ck, 'json');
  if (cached && !(b.refresh === true && s.user.role === 'admin')) return json(cached, 200, cors);
  if (!env.ANTHROPIC_API_KEY) return json({ items: [], at: now(), error: 'no model key' }, 200, cors);
  let out;
  try { out = await findVideos(env, ctx); }
  catch (e) { out = { items: [], at: now(), error: String(e && e.message || e).slice(0, 200) }; }
  await env.USAGE.put(ck, JSON.stringify(out), { expirationTtl: out.error ? VIDEO_FAIL_TTL : out.items.length ? VIDEO_TTL : VIDEO_NONE_TTL });
  return json(out, 200, cors);
}
async function findVideos(env, ctx) {
  const at = now();
  const queries = await videoQueries(env, ctx);
  const pool = new Map();
  for (const q of queries) for (const v of await youtubeSearch(q)) if (!pool.has(v.id)) pool.set(v.id, v);
  let via = 'page', cands = [...pool.values()].slice(0, 48);
  let items = cands.length ? await chooseVideos(env, ctx, cands) : [];
  if (!items.length) { /* the page gave nothing usable: let the model's own web search over youtube.com try */
    via = 'search'; const found = await youtubeViaSearch(env, ctx);
    if (found.length) { cands = found; items = await chooseVideos(env, ctx, cands); } else if (!cands.length) cands = [];
  }
  return { items, at, queries, found: cands.length, via };
}
/* The picking step, then the existence check: a video is listed only if the model chose it AND YouTube still serves it. */
async function chooseVideos(env, ctx, cands) {
  const byId = new Map(cands.map(c => [c.id, c]));
  const picks = await videoPicks(env, ctx, cands);
  const items = [];
  for (const p of picks) {
    const c = byId.get(p.id); if (!c) continue;
    const o = await oembed(p.id); if (!o) continue;
    items.push({ id: p.id, url: `https://www.youtube.com/watch?v=${p.id}`, title: o.title || c.title, channel: o.author || c.channel, length: c.length, views: c.views, why: p.why, image: `https://i.ytimg.com/vi/${p.id}/hqdefault.jpg` });
    if (items.length >= VIDEO_MAX) break;
  }
  return items;
}
/* When YouTube's page cannot be read from here, the model's own web search over youtube.com finds candidates instead;
   each is read back from oEmbed before the picking step so the choice is made on real titles and channels. */
async function youtubeViaSearch(env, ctx) {
  const prompt = `${videoContext(ctx)}\n\nUsing web search over youtube.com only, find up to 12 YouTube videos that teach this topic for this level. Answer with one video per line and nothing else, in the form:\nhttps://www.youtube.com/watch?v=VIDEO_ID | title`;
  const body = { model: VIDEO_MODEL, max_tokens: 3000, tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: 4, allowed_domains: ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'] }], messages: [{ role: 'user', content: prompt }] };
  const headers = { 'Content-Type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' };
  let data, turns = 0;
  while (turns++ < 4) {
    const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers, body: JSON.stringify(body) });
    const text = await res.text();
    if (!res.ok) throw new Error(`Anthropic ${res.status}: ${text.slice(0, 200)}`);
    data = JSON.parse(text);
    if (data.stop_reason !== 'pause_turn') break;
    body.messages.push({ role: 'assistant', content: data.content });
  }
  const said = (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
  const ids = [], seen = new Set();
  for (const m of said.matchAll(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,20})/g)) if (!seen.has(m[1]) && seen.add(m[1])) ids.push(m[1]);
  const out = [];
  for (const id of ids.slice(0, 12)) { const o = await oembed(id); if (o) out.push({ id, title: o.title, channel: o.author, length: '', views: '', published: '' }); }
  return out;
}
function videoContext(ctx) {
  return `Course: ${ctx.board} ${ctx.code} ${ctx.level} ${ctx.subject}.\nTopic: ${ctx.topicName}.\nKey ideas: ${ctx.ideas.length ? ctx.ideas.join('; ') : 'not listed'}.`;
}
async function videoQueries(env, ctx) {
  const prompt = `${videoContext(ctx)}\n\nWrite three YouTube search queries a UK student would type to find a lesson video that teaches this topic for this exact qualification and level. Each query is 4 to 9 words, plain words, no quotes or operators. The first names the level and subject and the topic as students say it; the second names the level, subject and the most examinable key idea; the third is a plainer phrasing of the topic. Never mention another board or another subject.`;
  const r = await askJson(env, prompt, { type: 'object', properties: { queries: { type: 'array', items: { type: 'string' } } }, required: ['queries'], additionalProperties: false }, 400);
  const qs = (Array.isArray(r.queries) ? r.queries : []).map(q => String(q || '').replace(/["']/g, '').trim()).filter(q => q.length > 3).slice(0, 3);
  return qs.length ? qs : [`${ctx.level} ${ctx.subject} ${ctx.topicName}`];
}
async function videoPicks(env, ctx, cands) {
  const lines = cands.map(c => `${c.id} | ${c.title} | ${c.channel} | ${c.length || '?'} | ${c.views || '?'} | ${c.published || '?'}`).join('\n');
  const prompt = `${videoContext(ctx)}\n\nThese are YouTube search results, one per line: id | title | channel | length | views | published.\n${lines}\n\nChoose up to ${VIDEO_MAX} videos that plainly TEACH this topic's content at this level — a lesson, explanation or walkthrough a student can learn the key ideas from. Judge from the title and channel only. Reject anything that is about a different subject, a different topic, a different qualification or country, exam-technique tips, study vlogs, motivation, adverts, full-paper walkthroughs, shorts under 2 minutes, and anything you are not sure teaches this topic. Prefer channels that teach UK ${ctx.level} courses, and videos between 3 and 40 minutes. Order the best first. If nothing qualifies, return an empty list — an empty list is the right answer whenever you are unsure. For each pick give why in at most 12 words, addressed to the student, saying what it covers.`;
  const r = await askJson(env, prompt, { type: 'object', properties: { picks: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, why: { type: 'string' } }, required: ['id', 'why'], additionalProperties: false } } }, required: ['picks'], additionalProperties: false }, 800);
  const seen = new Set();
  return (Array.isArray(r.picks) ? r.picks : []).filter(p => p && /^[A-Za-z0-9_-]{6,20}$/.test(String(p.id)) && !seen.has(p.id) && seen.add(p.id)).map(p => ({ id: String(p.id), why: String(p.why || '').replace(/\s+/g, ' ').trim().slice(0, 120) })).slice(0, VIDEO_MAX + 2);
}
async function askJson(env, prompt, schema, maxTokens) {
  const body = { model: VIDEO_MODEL, max_tokens: maxTokens, messages: [{ role: 'user', content: prompt }], output_config: { format: { type: 'json_schema', schema } } };
  const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' }, body: JSON.stringify(body) });
  const text = await res.text();
  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${text.slice(0, 200)}`);
  const data = JSON.parse(text);
  return JSON.parse((data.content || []).filter(c => c.type === 'text').map(c => c.text).join('') || '{}');
}
/* YouTube's results page carries its data as JSON in a script; each hit is a videoRenderer. Fails soft: no page, no hits. */
async function youtubeSearch(q) {
  const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null; const timer = ctrl && setTimeout(() => ctrl.abort(), 8000);
  let html = '';
  try {
    const res = await fetch('https://www.youtube.com/results?search_query=' + encodeURIComponent(q) + '&hl=en&gl=GB', { signal: ctrl ? ctrl.signal : undefined,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36', 'Accept-Language': 'en-GB,en;q=0.9', 'Accept': 'text/html', 'Cookie': 'CONSENT=YES+cb; SOCS=CAI' } });
    if (res.ok) html = await res.text();
  } catch (e) { html = ''; }
  if (timer) clearTimeout(timer);
  return parseYoutubeResults(html);
}
function parseYoutubeResults(html) {
  const i = html.indexOf('ytInitialData = '); if (i < 0) return [];
  const j = html.indexOf('</script>', i); if (j < 0) return [];
  let data; try { data = JSON.parse(html.slice(i + 16, j).trim().replace(/;$/, '')); } catch (e) { return []; }
  const out = [], runs = x => (x && (x.simpleText || (x.runs || []).map(r => r.text).join(''))) || '';
  const walk = o => { if (!o || typeof o !== 'object') return; if (Array.isArray(o)) { for (const x of o) walk(x); return; }
    if (o.videoRenderer && o.videoRenderer.videoId) { const v = o.videoRenderer; out.push({ id: String(v.videoId), title: runs(v.title).slice(0, 160), channel: runs(v.ownerText || v.longBylineText).slice(0, 80), length: runs(v.lengthText), views: runs(v.viewCountText), published: runs(v.publishedTimeText) }); return; }
    for (const k of Object.keys(o)) walk(o[k]); };
  walk(data);
  return out.filter(v => /^[A-Za-z0-9_-]{6,20}$/.test(v.id) && v.title && lengthSeconds(v.length) >= 120);
}
/* "1:24" → 84, "1:02:10" → 3730; an unknown length passes (0 means unknown, so it is treated as long enough). */
function lengthSeconds(t) { const p = String(t || '').split(':').map(x => parseInt(x, 10)); if (!p.length || p.some(isNaN)) return 1e9; return p.reduce((a, x) => a * 60 + x, 0); }
async function oembed(id) {
  try {
    const res = await fetch('https://www.youtube.com/oembed?url=' + encodeURIComponent('https://www.youtube.com/watch?v=' + id) + '&format=json', { headers: { 'Accept': 'application/json' } });
    if (!res.ok) return null;
    const o = await res.json();
    return o && o.title ? { title: String(o.title).slice(0, 160), author: String(o.author_name || '').slice(0, 80) } : null;
  } catch (e) { return null; }
}

/* ---------- durable execution: the Workflow classes wrap the pipeline ---------- */

export function builderDeps(env, step) {
  return { kv: env.USAGE, step, ai: anthropicAI(env), head: headOf, now: () => new Date().toISOString(), boardDomains: CATALOGUE.boardDomains, onPublished: (id) => startDepth(env, id) };
}
/* Depth is a second phase: it starts when a course is published or approved, and the admin can start it again. */
async function startDepth(env, id, only) {
  if (!env.COURSE_DEPTH) return false;
  await env.COURSE_DEPTH.create({ id: `depth-${id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, params: only && only.length ? { id, only } : { id } });
  return true;
}
/* Which rooms a proposal's changes touch: rebuild the kits whose ideas changed or that are new; drop removed ones. */
export function depthTargets(changes) {
  const rebuild = [], remove = [];
  for (const c of changes || []) {
    if (!c || !c.topic) continue;
    if (c.kind === 'topic-removed') { if (!remove.includes(c.topic)) remove.push(c.topic); continue; }
    if (/^idea-|^topic-added$|^topic-renamed$|^case-studies-changed$/.test(c.kind) && !rebuild.includes(c.topic)) rebuild.push(c.topic);
  }
  return { rebuild, remove };
}
const publicDepth = d => d ? { status: d.status, total: d.total, done: d.done || {}, failed: (d.failed || []).map(f => f.topic), updatedAt: d.updatedAt } : null;
export class CourseDepth extends WorkflowEntrypoint {
  async run(event, step) { return runDepth(event.payload, { kv: this.env.USAGE, step, ai: kitAI(this.env), now: () => new Date().toISOString() }); }
}
export class CourseBuilder extends WorkflowEntrypoint {
  async run(event, step) { return runBuild(event.payload, builderDeps(this.env, step)); }
}
export class CourseReview extends WorkflowEntrypoint {
  async run(event, step) { return runReview(event.payload.id, builderDeps(this.env, step)); }
}

/* ---------- courses: what students see and ask for ---------- */

async function catalogueEntries(env) {
  const extra = (await env.USAGE.get('catalogue:extra', 'json')) || [];
  const byId = {};
  for (const q of [...CATALOGUE.qualifications, ...extra]) byId[specIdFor(q.board, q.code)] = { ...byId[specIdFor(q.board, q.code)], ...q, id: specIdFor(q.board, q.code) };
  return Object.values(byId);
}
async function courseState(env, id) {
  const meta = await env.USAGE.get(`spec-meta:${id}`, 'json');
  const build = await env.USAGE.get(`build:${id}`, 'json');
  const stale = build && build.status === 'building' && Date.now() - Date.parse(build.updatedAt || 0) > BUILD_STALE_MS;
  const status = meta && meta.status === 'published' ? 'published' : meta && meta.status === 'retracted' ? 'retracted' : meta && meta.status === 'review' ? 'review'
    : build && build.status === 'building' ? (stale ? 'none' : 'building') : build && build.status ? build.status : 'none';
  return { status, meta, build, stale };
}
const publicMeta = m => m ? { id: m.id, level: m.level, subject: m.subject, board: m.board, code: m.code, family: m.family, status: m.status, version: m.version, source: m.source ? { url: m.source.url, checkedAt: m.source.checkedAt, lastModified: m.source.lastModified } : null, built: m.built ? { at: m.built.at, promptVersion: m.built.promptVersion, ideas: m.built.ideas } : null, judge: m.judge ? { score: m.judge.score } : null, pending: !!m.pending, resources: m.resources ? { at: m.resources.at || null, hubs: m.resources.hubs || [] } : null } : null;
const publicBuild = b => b ? { id: b.id, status: b.status, stage: b.stage, done: b.done, total: b.total, message: b.message, startedAt: b.startedAt, updatedAt: b.updatedAt, error: b.error } : null;

async function courses(request, env, url, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json({ error: 'not signed in' }, 401, cors);
  const p = url.pathname;

  if (p === '/courses' && request.method === 'GET') {
    const entries = await catalogueEntries(env);
    const states = {};
    const list = await env.USAGE.list({ prefix: 'spec-meta:' });
    for (const e of list.keys) { const m = await env.USAGE.get(e.name, 'json'); if (m) states[m.id] = publicMeta(m); }
    const builds = await env.USAGE.list({ prefix: 'build:' });
    const building = {};
    for (const e of builds.keys) { const b = await env.USAGE.get(e.name, 'json'); if (b && b.status === 'building' && Date.now() - Date.parse(b.updatedAt || 0) <= BUILD_STALE_MS) building[b.id] = publicBuild(b); }
    const depth = {};
    const dl = await env.USAGE.list({ prefix: 'depth:' });
    for (const e of dl.keys) { const d = await env.USAGE.get(e.name, 'json'); if (d) depth[d.id] = publicDepth(d); }
    const papersOffList = await env.USAGE.get('papers:off', 'json');
    return json({ catalogue: entries.map(q => ({ id: q.id, level: q.level, subject: q.subject, board: q.board, code: q.code, hasUrl: !!q.specUrl })), courses: states, building, depth, papersOff: Array.isArray(papersOffList) ? papersOffList : [] }, 200, cors);
  }

  let km = /^\/courses\/([^/]+)\/kit\/([^/]+)$/.exec(p);
  if (km && request.method === 'GET') {
    const id = decodeURIComponent(km[1]), topic = decodeURIComponent(km[2]);
    const st = await courseState(env, id);
    if (st.status !== 'published') return json({ error: 'that course is not published' }, 404, cors);
    const kit = await env.USAGE.get(`kit:${id}:${topic}`, 'json');
    if (!kit) return json({ error: 'no kit for that room yet' }, 404, cors);
    return json({ kit }, 200, cors);
  }

  if (p === '/courses/build' && request.method === 'POST') {
    const body = await readJson(request);
    const level = String(body.level || '').trim(), subject = String(body.subject || '').trim(), board = String(body.board || '').trim(), code = String(body.code || '').trim();
    const entries = await catalogueEntries(env);
    const q = entries.find(x => x.level === level && x.subject.toLowerCase() === subject.toLowerCase() && x.board.toLowerCase() === board.toLowerCase() && (!code || x.code.toUpperCase() === code.toUpperCase()));
    if (!q) return json({ error: 'That qualification is not in the catalogue yet — ask Chris to add it from the Admin tab.' }, 404, cors);
    const id = q.id;
    const st = await courseState(env, id);
    if (st.status === 'published') return json({ status: 'published', id, meta: publicMeta(st.meta) }, 200, cors);
    if (st.status === 'retracted') return json({ error: 'This course has been withdrawn by Chris.' }, 409, cors);
    if (st.status === 'review') return json({ status: 'review', id, build: publicBuild(st.build), message: 'Built, and being checked by Chris before it goes live.' }, 202, cors);
    if (st.status === 'building') return json({ status: 'building', id, build: publicBuild(st.build), joined: true }, 202, cors);
    if (!env.COURSE_BUILDER) return json({ error: 'the course builder is not configured on this Worker' }, 503, cors);
    const params = { level: q.level, subject: q.subject, board: q.board, code: q.code, specUrl: q.specUrl || null, requestedBy: s.user.username };
    const instanceId = `${id}-${Date.now()}`;
    const rec = { id, level: q.level, subject: q.subject, board: q.board, code: q.code, status: 'building', stage: 'Queued', done: 0, total: 4, message: 'Starting…', startedAt: new Date().toISOString(), updatedAt: new Date().toISOString(), instanceId, requestedBy: s.user.username };
    await env.USAGE.put(`build:${id}`, JSON.stringify(rec));
    await env.COURSE_BUILDER.create({ id: instanceId, params });
    return json({ status: 'building', id, build: publicBuild(rec), joined: false }, 202, cors);
  }

  const m = /^\/courses\/([^/]+)\/(status|spec)$/.exec(p);
  if (m && request.method === 'GET') {
    const id = decodeURIComponent(m[1]);
    if (m[2] === 'status') { const st = await courseState(env, id); return json({ id, status: st.status, build: publicBuild(st.build), meta: publicMeta(st.meta) }, 200, cors); }
    const meta = await env.USAGE.get(`spec-meta:${id}`, 'json');
    if (!meta || meta.status !== 'published') return json({ error: 'not published' }, 404, cors);
    const spec = await env.USAGE.get(`spec:${id}`, 'json');
    if (!spec) return json({ error: 'not published' }, 404, cors);
    return json({ spec, meta: publicMeta(meta) }, 200, cors);
  }
  return json({ error: 'not found' }, 404, cors);
}

/* ---------- admin: courses, the review queue, the catalogue ---------- */

async function manageCourses(request, env, url, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json({ error: 'not signed in' }, 401, cors);
  if (s.user.role !== 'admin') return json({ error: 'admin only' }, 403, cors);
  const p = url.pathname;

  if (p === '/manage/courses' && request.method === 'GET') {
    const out = [];
    const list = await env.USAGE.list({ prefix: 'spec-meta:' });
    for (const e of list.keys) {
      const meta = await env.USAGE.get(e.name, 'json'); if (!meta) continue;
      const build = await env.USAGE.get(`build:${meta.id}`, 'json');
      const proposal = await env.USAGE.get(`proposal:${meta.id}`, 'json');
      const depthRec = await env.USAGE.get(`depth:${meta.id}`, 'json');
      out.push({ ...meta, build: publicBuild(build), depth: depthRec, proposal: proposal ? { createdAt: proposal.createdAt, breaking: proposal.breaking, count: proposal.changes.length } : null });
    }
    const builds = await env.USAGE.list({ prefix: 'build:' });
    for (const e of builds.keys) { const b = await env.USAGE.get(e.name, 'json'); if (b && !out.some(x => x.id === b.id)) out.push({ id: b.id, level: b.level, subject: b.subject, board: b.board, code: b.code, status: b.status, build: publicBuild(b) }); }
    const lastRun = await env.USAGE.get('review:last-run', 'json');
    return json({ courses: out, lastRun, catalogueExtra: (await env.USAGE.get('catalogue:extra', 'json')) || [] }, 200, cors);
  }

  if (p === '/manage/reviews' && request.method === 'GET') {
    const items = [];
    const metas = await env.USAGE.list({ prefix: 'spec-meta:' });
    for (const e of metas.keys) {
      const meta = await env.USAGE.get(e.name, 'json'); if (!meta) continue;
      if (meta.status === 'review') items.push({ kind: 'build', id: meta.id, subject: meta.subject, board: meta.board, level: meta.level, code: meta.code, judge: meta.judge, built: meta.built, source: meta.source });
      const proposal = await env.USAGE.get(`proposal:${meta.id}`, 'json');
      if (proposal) items.push({ kind: 'proposal', id: meta.id, subject: meta.subject, board: meta.board, level: meta.level, code: meta.code, ...proposal });
    }
    const builds = await env.USAGE.list({ prefix: 'build:' });
    for (const e of builds.keys) { const b = await env.USAGE.get(e.name, 'json'); if (b && (b.status === 'needs-link' || b.status === 'failed')) items.push({ kind: b.status, id: b.id, subject: b.subject, board: b.board, level: b.level, code: b.code, error: b.error, requestedBy: b.requestedBy, updatedAt: b.updatedAt }); }
    return json({ items }, 200, cors);
  }

  if (p === '/manage/catalogue' && request.method === 'POST') {
    const body = await readJson(request);
    const q = { level: String(body.level || '').trim(), subject: String(body.subject || '').trim(), board: String(body.board || '').trim(), code: String(body.code || '').trim().toUpperCase(), specUrl: String(body.specUrl || '').trim() || null, verified: null, addedBy: s.user.username };
    if (!['A level', 'GCSE'].includes(q.level) || !q.subject || !q.board || !q.code) return json({ error: 'level (A level or GCSE), subject, board and code are all required' }, 400, cors);
    if (q.specUrl && !/^https:\/\//.test(q.specUrl)) return json({ error: 'the specification link must start with https://' }, 400, cors);
    const extra = ((await env.USAGE.get('catalogue:extra', 'json')) || []).filter(x => specIdFor(x.board, x.code) !== specIdFor(q.board, q.code));
    extra.push(q);
    await env.USAGE.put('catalogue:extra', JSON.stringify(extra));
    const id = specIdFor(q.board, q.code);
    const build = await env.USAGE.get(`build:${id}`, 'json');
    if (build && build.status === 'needs-link') await env.USAGE.delete(`build:${id}`);
    return json({ ok: true, id, entry: q }, 200, cors);
  }

  /* depth: build or rebuild every room's kit, or retry one room */
  let dm = /^\/manage\/courses\/([^/]+)\/depth(?:\/([^/]+))?$/.exec(p);
  if (dm && request.method === 'POST') {
    const id = decodeURIComponent(dm[1]);
    const meta = await env.USAGE.get(`spec-meta:${id}`, 'json');
    if (!meta || meta.status !== 'published') return json({ error: 'depth needs a published course' }, 404, cors);
    if (!env.COURSE_DEPTH) return json({ error: 'the depth Workflow is not deployed' }, 503, cors);
    await startDepth(env, id, dm[2] ? [decodeURIComponent(dm[2])] : null);
    return json({ ok: true, started: dm[2] ? [decodeURIComponent(dm[2])] : 'all' }, 202, cors);
  }

  /* the course's hub links, edited by the admin: written into the published spec and stamped so devices refresh */
  let m = /^\/manage\/courses\/([^/]+)\/links$/.exec(p);
  if (m && request.method === 'POST') {
    const id = decodeURIComponent(m[1]);
    const meta = await env.USAGE.get(`spec-meta:${id}`, 'json');
    const spec = await env.USAGE.get(`spec:${id}`, 'json');
    if (!meta || !spec) return json({ error: 'no published course with that id' }, 404, cors);
    const body = await readJson(request);
    if (!Array.isArray(body.hubs)) return json({ error: 'hubs must be a list' }, 400, cors);
    const hubs = [];
    for (const h of body.hubs.slice(0, 12)) {
      const name = String((h && h.name) || '').trim().slice(0, 80), url = String((h && h.url) || '').trim();
      const kind = ['video', 'notes', 'practice', 'official'].includes(h && h.kind) ? h.kind : 'notes';
      if (!name) return json({ error: 'every link needs a name' }, 400, cors);
      if (!/^https:\/\/\S+$/.test(url)) return json({ error: `the link for "${name}" must start with https://` }, 400, cors);
      hubs.push({ name, url, kind });
    }
    const resources = { ...(spec.resources || {}), hubs, at: new Date().toISOString(), editedBy: s.user.username };
    delete resources.error;
    spec.resources = resources;
    await env.USAGE.put(`spec:${id}`, JSON.stringify(spec));
    await env.USAGE.put(`spec-meta:${id}`, JSON.stringify({ ...meta, resources }));
    return json({ ok: true, hubs }, 200, cors);
  }

  m = /^\/manage\/courses\/([^/]+)\/(retract|restore|check|rebuild)$/.exec(p);
  if (m && request.method === 'POST') {
    const id = decodeURIComponent(m[1]), action = m[2];
    const meta = await env.USAGE.get(`spec-meta:${id}`, 'json');
    if (action === 'retract' || action === 'restore') {
      if (!meta) return json({ error: 'no such course' }, 404, cors);
      if (action === 'retract' && meta.status !== 'published') return json({ error: 'only a published course can be retracted' }, 400, cors);
      if (action === 'restore' && meta.status !== 'retracted') return json({ error: 'only a retracted course can be restored' }, 400, cors);
      meta.status = action === 'retract' ? 'retracted' : 'published';
      meta[action === 'retract' ? 'retractedAt' : 'restoredAt'] = new Date().toISOString();
      await env.USAGE.put(`spec-meta:${id}`, JSON.stringify(meta));
      return json({ ok: true, meta: publicMeta(meta) }, 200, cors);
    }
    if (action === 'check') {
      if (!meta || meta.status !== 'published') return json({ error: 'only a published course can be checked' }, 400, cors);
      if (!env.COURSE_REVIEW) return json({ error: 'the reviewer is not configured on this Worker' }, 503, cors);
      const instanceId = `${id}-review-${Date.now()}`;
      await env.COURSE_REVIEW.create({ id: instanceId, params: { id } });
      return json({ ok: true, instanceId }, 202, cors);
    }
    if (action === 'rebuild') {
      const entries = await catalogueEntries(env);
      const q = entries.find(x => x.id === id);
      if (!q) return json({ error: 'not in the catalogue' }, 404, cors);
      if (!env.COURSE_BUILDER) return json({ error: 'the course builder is not configured on this Worker' }, 503, cors);
      const instanceId = `${id}-${Date.now()}`;
      const rec = { id, level: q.level, subject: q.subject, board: q.board, code: q.code, status: 'building', stage: 'Queued', done: 0, total: 4, message: 'Starting…', startedAt: new Date().toISOString(), updatedAt: new Date().toISOString(), instanceId, requestedBy: s.user.username };
      await env.USAGE.put(`build:${id}`, JSON.stringify(rec));
      await env.COURSE_BUILDER.create({ id: instanceId, params: { level: q.level, subject: q.subject, board: q.board, code: q.code, specUrl: q.specUrl || null, requestedBy: s.user.username } });
      return json({ ok: true, build: publicBuild(rec) }, 202, cors);
    }
  }

  m = /^\/manage\/reviews\/([^/]+)\/(approve|dismiss)$/.exec(p);
  if (m && request.method === 'POST') {
    const id = decodeURIComponent(m[1]), action = m[2];
    const meta = await env.USAGE.get(`spec-meta:${id}`, 'json');
    const proposal = await env.USAGE.get(`proposal:${id}`, 'json');
    const draft = await env.USAGE.get(`spec-draft:${id}`, 'json');
    if (!meta || (!proposal && meta.status !== 'review')) return json({ error: 'nothing to review for that course' }, 404, cors);
    if (action === 'approve') {
      if (!draft) return json({ error: 'the draft is missing' }, 409, cors);
      await env.USAGE.put(`spec:${id}`, JSON.stringify(draft));
      await env.USAGE.delete(`spec-draft:${id}`);
      const next = { ...meta, status: 'published', pending: false, approvedAt: new Date().toISOString(), approvedBy: s.user.username };
      if (meta.draft) { next.source = meta.draft.source; next.built = meta.draft.built; next.judge = meta.draft.judge; if (meta.draft.resources) next.resources = meta.draft.resources; delete next.draft; }
      await env.USAGE.put(`spec-meta:${id}`, JSON.stringify(next));
      if (proposal) {
        await env.USAGE.delete(`proposal:${id}`); await env.USAGE.put(`decision:${id}:${Date.now()}`, JSON.stringify({ action: 'approved', by: s.user.username, at: next.approvedAt, breaking: proposal.breaking, changes: proposal.changes.length }));
        const t = depthTargets(proposal.changes);
        for (const r of t.remove) await env.USAGE.delete(`kit:${id}:${r}`);
        if (t.rebuild.length) await startDepth(env, id, t.rebuild);
      } else await startDepth(env, id);
      return json({ ok: true, meta: publicMeta(next) }, 200, cors);
    }
    await env.USAGE.delete(`spec-draft:${id}`);
    if (proposal) { await env.USAGE.delete(`proposal:${id}`); await env.USAGE.put(`decision:${id}:${Date.now()}`, JSON.stringify({ action: 'dismissed', by: s.user.username, at: new Date().toISOString(), breaking: proposal.breaking, changes: proposal.changes.length })); const next = { ...meta, pending: false }; delete next.draft; await env.USAGE.put(`spec-meta:${id}`, JSON.stringify(next)); }
    else { await env.USAGE.put(`spec-meta:${id}`, JSON.stringify({ ...meta, status: 'rejected', rejectedAt: new Date().toISOString(), rejectedBy: s.user.username })); await env.USAGE.delete(`build:${id}`); }
    return json({ ok: true }, 200, cors);
  }
  return json({ error: 'not found' }, 404, cors);
}

/* ---------- sessions ---------- */

async function sessionUser(request, env) {
  const m = /^Bearer\s+([A-Za-z0-9_-]{20,})$/.exec(request.headers.get('Authorization') || '');
  if (!m) return null;
  const sess = await env.USAGE.get(`session:${m[1]}`, 'json');
  if (!sess) return null;
  const user = await env.USAGE.get(`user:${sess.username}`, 'json');
  if (!user || user.disabled) return null;
  return { user, token: m[1] };
}

async function newSession(env, username) {
  const token = randomToken(32);
  await env.USAGE.put(`session:${token}`, JSON.stringify({ username, created: now() }), { expirationTtl: SESSION_DAYS * 86400 });
  return token;
}

const publicUser = u => ({ username: u.username, name: u.name, role: u.role || 'student', daily: u.daily || DEFAULT_DAILY });

/* ---------- auth ---------- */

async function auth(request, env, url, cors) {
  const p = url.pathname;

  if (p === '/auth/login' && request.method === 'POST') {
    const body = await readJson(request);
    const username = normUsername(body.username);
    const password = String(body.password || '');
    const ip = clientIp(request);
    if (await tooManyFailures(env, `fail:${ip}`, IP_FAILS_PER_DAY) || (username && await tooManyFailures(env, `fail:user:${username}`, USER_FAILS_PER_DAY)))
      return json({ error: 'Too many failed sign-ins — try again tomorrow' }, 429, cors);
    const user = username ? await env.USAGE.get(`user:${username}`, 'json') : null;
    const okPw = user && user.pw && await verifyPassword(password, user.pw);
    if (!okPw) {
      await noteFailure(env, `fail:${ip}`);
      if (username) await noteFailure(env, `fail:user:${username}`);
      return json({ error: 'Wrong username or password' }, 401, cors);
    }
    if (user.disabled) return json({ error: 'This account has been turned off' }, 403, cors);
    const token = await newSession(env, username);
    return json({ token, user: publicUser(user) }, 200, cors);
  }

  if (p === '/auth/logout' && request.method === 'POST') {
    const s = await sessionUser(request, env);
    if (s) await env.USAGE.delete(`session:${s.token}`);
    return json({ ok: true }, 200, cors);
  }

  if (p === '/auth/me' && request.method === 'GET') {
    const s = await sessionUser(request, env);
    if (!s) return json({ error: 'not signed in' }, 401, cors);
    return json({ user: publicUser(s.user) }, 200, cors);
  }

  if (p === '/auth/invite' && request.method === 'GET') {
    const inv = await env.USAGE.get(`invite:${url.searchParams.get('token') || ''}`, 'json');
    if (!inv) return json({ error: 'This invite has expired or was already used' }, 404, cors);
    return json({ username: inv.username, name: inv.name }, 200, cors);
  }

  if (p === '/auth/invite' && request.method === 'POST') {
    const body = await readJson(request);
    const token = String(body.token || '');
    const inv = token ? await env.USAGE.get(`invite:${token}`, 'json') : null;
    if (!inv) return json({ error: 'This invite has expired or was already used' }, 404, cors);
    const bad = passwordProblem(body.password);
    if (bad) return json({ error: bad }, 400, cors);
    const existing = await env.USAGE.get(`user:${inv.username}`, 'json');
    const user = {
      ...(existing || {}),
      username: inv.username, name: inv.name || (existing && existing.name) || inv.username,
      role: inv.role || (existing && existing.role) || 'student',
      daily: inv.daily || (existing && existing.daily) || DEFAULT_DAILY,
      created: (existing && existing.created) || today(), disabled: false,
      pw: await hashPassword(body.password),
    };
    await env.USAGE.put(`user:${user.username}`, JSON.stringify(user));
    await env.USAGE.delete(`invite:${token}`);
    const session = await newSession(env, user.username);
    return json({ token: session, user: publicUser(user) }, 200, cors);
  }

  if (p === '/auth/password' && request.method === 'POST') {
    const s = await sessionUser(request, env);
    if (!s) return json({ error: 'not signed in' }, 401, cors);
    const body = await readJson(request);
    if (!(await verifyPassword(String(body.current || ''), s.user.pw))) return json({ error: 'Current password is wrong' }, 401, cors);
    const bad = passwordProblem(body.next);
    if (bad) return json({ error: bad }, 400, cors);
    s.user.pw = await hashPassword(body.next);
    await env.USAGE.put(`user:${s.user.username}`, JSON.stringify(s.user));
    return json({ ok: true }, 200, cors);
  }

  return json({ error: 'not found' }, 404, cors);
}

/* ---------- the AI proxy ---------- */

async function proxy(request, env, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json(apiError('authentication_error', 'Sign in to use the tutor'), 401, cors);
  const { user } = s;

  const daily = user.daily || DEFAULT_DAILY;
  const uk = `usage:${user.username}:${today()}`;
  const used = parseInt((await env.USAGE.get(uk)) || '0', 10);
  if (used >= daily) return json(apiError('rate_limit_error', `${user.name}'s daily limit of ${daily} requests is used up — resets at midnight UTC`), 429, cors);
  await env.USAGE.put(uk, String(used + 1), { expirationTtl: 100 * 86400 });

  let body;
  try { body = await request.json(); } catch { return json(apiError('invalid_request_error', 'Body must be JSON'), 400, cors); }
  if (!body || !Array.isArray(body.messages)) return json(apiError('invalid_request_error', 'messages required'), 400, cors);
  if (!MODELS.includes(body.model)) body.model = MODELS[0];
  body.max_tokens = Math.min(body.max_tokens || 1000, 4000);
  body.stream = false;
  body.metadata = { user_id: user.username };

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify(body),
  });
  return new Response(await upstream.text(), { status: upstream.status, headers: { ...cors, 'Content-Type': 'application/json' } });
}

/* ---------- progress ---------- */

async function progress(request, env, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json({ error: 'not signed in' }, 401, cors);
  const key = `progress:${s.user.username}`;

  if (request.method === 'GET') {
    const saved = await env.USAGE.get(key, 'json');
    if (!saved) return json({ error: 'nothing saved yet' }, 404, cors);
    return json(saved, 200, cors);
  }
  if (request.method === 'PUT') {
    const text = await request.text();
    if (text.length > MAX_PROGRESS_BYTES) return json({ error: 'progress too large' }, 413, cors);
    let sent;
    try { sent = JSON.parse(text); } catch { return json({ error: 'body must be JSON' }, 400, cors); }
    if (!sent || typeof sent.state !== 'object' || sent.state === null) return json({ error: 'state required' }, 400, cors);
    const record = { updatedAt: now(), device: String(sent.device || 'a device').slice(0, 60), state: sent.state };
    await env.USAGE.put(key, JSON.stringify(record));
    return json({ ok: true, updatedAt: record.updatedAt }, 200, cors);
  }
  return json({ error: 'GET or PUT' }, 405, cors);
}

/* ---------- the per-room desktop ---------- */
/* A student's own material inside a room: links, videos, cards and notes in a KV index, photos and PDFs in R2.
   Private to the owner; the index is separate from the progress blob so it never counts against that cap. */
const DESK_ROOM_RE = /^[A-Za-z0-9|._ -]{3,60}$/;
async function desk(request, env, url, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json({ error: 'not signed in' }, 401, cors);
  if (!env.DESK) return json({ error: 'Desktop is not set up yet — the DESK storage bucket is not bound' }, 503, cors);
  const user = s.user.username;
  const parts = url.pathname.split('/').slice(2).map(x => decodeURIComponent(x));
  if (parts[0] === 'all' && request.method === 'GET') return deskAll(env, user, cors);
  if (parts[0] === 'unfurl' && request.method === 'GET') return unfurl(env, url.searchParams.get('url') || '', cors);
  if (parts[0] === 'file' && request.method === 'GET') {
    const key = 'desk/' + parts.slice(1).join('/');
    if (!key.startsWith(`desk/${user}/`)) return json({ error: 'not found' }, 404, cors);
    const obj = await env.DESK.get(key);
    if (!obj) return json({ error: 'not found' }, 404, cors);
    return new Response(obj.body, { status: 200, headers: { ...cors, 'Content-Type': (obj.httpMetadata && obj.httpMetadata.contentType) || 'application/octet-stream', 'Cache-Control': 'private, max-age=3600' } });
  }
  const room = parts[0] || '';
  if (!DESK_ROOM_RE.test(room)) return json({ error: 'bad room' }, 400, cors);
  const ik = `desk:${user}:${room}`, qk = `deskq:${user}`;
  const idx = (await env.USAGE.get(ik, 'json')) || { items: [] };
  const used = parseInt((await env.USAGE.get(qk)) || '0', 10);
  const sub = parts[1];

  if (request.method === 'GET' && !sub) return json({ items: idx.items, used, quota: DESK_QUOTA }, 200, cors);
  if (request.method === 'POST' && sub === 'upload') {
    const type = (request.headers.get('Content-Type') || '').split(';')[0].trim().toLowerCase();
    if (!DESK_TYPES[type]) return json({ error: 'Only JPEG, PNG, WebP images and PDFs can be stored' }, 415, cors);
    const len = parseInt(request.headers.get('Content-Length') || '0', 10);
    if (len > DESK_MAX_FILE) return json({ error: 'Files are limited to 8 MB' }, 413, cors);
    const body = await request.arrayBuffer();
    if (body.byteLength > DESK_MAX_FILE) return json({ error: 'Files are limited to 8 MB' }, 413, cors);
    if (used + body.byteLength > DESK_QUOTA) return json({ error: `Your desktop is full — the 250 MB allowance is used up. Delete something you no longer need.` }, 413, cors);
    if (idx.items.length >= DESK_MAX_ITEMS) return json({ error: `This room's desktop holds 200 items already — delete something first` }, 409, cors);
    const id = randomToken(9), name = String(request.headers.get('X-Desk-Name') || 'file').slice(0, 120);
    const key = `desk/${user}/${room}/${id}.${DESK_TYPES[type]}`;
    await env.DESK.put(key, body, { httpMetadata: { contentType: type } });
    const kind = type === 'application/pdf' ? 'file' : (request.headers.get('X-Desk-Kind') === 'file' ? 'file' : 'photo');
    const item = { id, kind, at: now(), name, key, size: body.byteLength, type, title: name.replace(/\.[a-z0-9]+$/i, '') };
    idx.items.unshift(item);
    await env.USAGE.put(ik, JSON.stringify(idx)); await env.USAGE.put(qk, String(used + body.byteLength));
    return json({ item, used: used + body.byteLength, quota: DESK_QUOTA }, 200, cors);
  }
  if (request.method === 'POST' && !sub) {
    const b = await readJson(request);
    if (!['link', 'video', 'card', 'note'].includes(b.kind)) return json({ error: 'kind must be link, video, card or note' }, 400, cors);
    if (idx.items.length >= DESK_MAX_ITEMS) return json({ error: `This room's desktop holds 200 items already — delete something first` }, 409, cors);
    const item = { id: randomToken(9), kind: b.kind, at: now(), title: String(b.title || '').slice(0, 200) };
    if (b.kind === 'link' || b.kind === 'video') {
      const u = safeHttpUrl(b.url); if (!u) return json({ error: 'a web address starting http(s):// is required' }, 400, cors);
      item.url = u.href; item.site = String(b.site || u.hostname).slice(0, 80); if (b.image && safeHttpUrl(b.image)) item.image = String(b.image).slice(0, 500);
      const v = videoId(u); if (v) { item.kind = 'video'; item.video = v.id; item.provider = v.provider; item.pos = 0; }
      else if (b.kind === 'video') return json({ error: 'only YouTube and Vimeo videos can be pinned' }, 400, cors);
    }
    if (b.kind === 'card') { item.front = String(b.front || '').slice(0, 300); item.back = String(b.back || '').slice(0, 600); item.code = String(b.code || '').slice(0, 40); item.cardId = String(b.cardId || '').slice(0, 20); if (!item.front || !item.back) return json({ error: 'a card needs a front and a back' }, 400, cors); }
    if (b.kind === 'note' || b.text) item.text = String(b.text || '').slice(0, DESK_TEXT_MAX);
    if (b.kind === 'note' && !item.text) return json({ error: 'a note needs some text' }, 400, cors);
    idx.items.unshift(item);
    await env.USAGE.put(ik, JSON.stringify(idx));
    return json({ item }, 200, cors);
  }
  const item = sub && idx.items.find(x => x.id === sub);
  if (!item) return json({ error: 'not found' }, 404, cors);
  if (request.method === 'PATCH') {
    const b = await readJson(request);
    if (typeof b.text === 'string') item.text = b.text.slice(0, DESK_TEXT_MAX);
    if (typeof b.title === 'string') item.title = b.title.slice(0, 200);
    if (typeof b.pos === 'number' && isFinite(b.pos)) item.pos = Math.max(0, Math.floor(b.pos));
    if (typeof b.thumb === 'string' && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(b.thumb) && b.thumb.length <= DESK_THUMB_MAX) item.thumb = b.thumb;
    if (typeof b.w === 'number' && typeof b.h === 'number') { item.w = Math.floor(b.w); item.h = Math.floor(b.h); }
    if (typeof b.cards === 'number') item.cards = Math.max(0, Math.floor(b.cards));
    if (typeof b.seen === 'string') item.seen = b.seen.slice(0, 10);
    await env.USAGE.put(ik, JSON.stringify(idx));
    return json({ item }, 200, cors);
  }
  if (request.method === 'DELETE') {
    idx.items = idx.items.filter(x => x.id !== sub);
    let left = used;
    if (item.key) { await env.DESK.delete(item.key); left = Math.max(0, used - (item.size || 0)); await env.USAGE.put(qk, String(left)); }
    await env.USAGE.put(ik, JSON.stringify(idx));
    return json({ ok: true, used: left, quota: DESK_QUOTA }, 200, cors);
  }
  return json({ error: 'GET, POST, PATCH or DELETE' }, 405, cors);
}
async function deskAll(env, user, cors) {
  const list = await env.USAGE.list({ prefix: `desk:${user}:` });
  const rooms = {};
  for (const e of list.keys) {
    const idx = await env.USAGE.get(e.name, 'json'); if (!idx || !idx.items.length) continue;
    const room = e.name.slice(`desk:${user}:`.length);
    rooms[room] = { count: idx.items.length, latest: idx.items.slice(0, 12).map(({ id, kind, at, title, thumb, image, video, provider, seen }) => ({ id, kind, at, title, thumb, image, video, provider, seen })) };
  }
  const used = parseInt((await env.USAGE.get(`deskq:${user}`)) || '0', 10);
  return json({ rooms, used, quota: DESK_QUOTA }, 200, cors);
}
/* Only public http(s) addresses: no other schemes, no loopback, link-local or private ranges, no bare hostnames like localhost. */
function safeHttpUrl(raw) {
  let u; try { u = new URL(String(raw || '').trim()); } catch { return null; }
  if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
  const h = u.hostname.toLowerCase().replace(/^\[|\]$/g, '');
  if (!h.includes('.') && !h.includes(':')) return null;
  if (h === 'localhost' || h.endsWith('.localhost') || h.endsWith('.local') || h.endsWith('.internal')) return null;
  const v4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(h);
  if (v4) { const [a, b] = [+v4[1], +v4[2]]; if (a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || a >= 224) return null; }
  if (h.includes(':')) { if (h === '::1' || h === '::' || /^(fc|fd|fe8|fe9|fea|feb)/i.test(h) || /^::ffff:/i.test(h)) return null; }
  return u;
}
function videoId(u) {
  const h = u.hostname.replace(/^www\.|^m\./, '');
  if (h === 'youtube.com' || h === 'youtube-nocookie.com') { const v = u.searchParams.get('v') || (/^\/(?:embed|shorts|live)\/([A-Za-z0-9_-]{6,})/.exec(u.pathname) || [])[1]; return v && /^[A-Za-z0-9_-]{6,20}$/.test(v) ? { provider: 'youtube', id: v } : null; }
  if (h === 'youtu.be') { const v = u.pathname.slice(1).split('/')[0]; return /^[A-Za-z0-9_-]{6,20}$/.test(v) ? { provider: 'youtube', id: v } : null; }
  if (h === 'vimeo.com' || h === 'player.vimeo.com') { const v = (/(\d{5,})/.exec(u.pathname) || [])[1]; return v ? { provider: 'vimeo', id: v } : null; }
  return null;
}
async function unfurl(env, raw, cors) {
  const u = safeHttpUrl(raw);
  if (!u) return json({ error: 'a public web address starting http(s):// is required' }, 400, cors);
  const ck = 'unfurl:' + b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(u.href)))).slice(0, 40);
  const cached = await env.USAGE.get(ck, 'json'); if (cached) return json(cached, 200, cors);
  const out = { title: '', image: '', site: u.hostname.replace(/^www\./, '') };
  const v = videoId(u); if (v) { out.video = v.id; out.provider = v.provider; if (v.provider === 'youtube') out.image = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`; }
  try {
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null; const timer = ctrl && setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch(u.href, { redirect: 'follow', signal: ctrl ? ctrl.signal : undefined, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; StudyPlatform/1.0; +https://studyplatform.co.uk)', 'Accept': 'text/html,*/*;q=0.5' } });
    if (timer) clearTimeout(timer);
    const type = (res.headers.get('Content-Type') || '').toLowerCase();
    if (res.ok && /text\/html|application\/xhtml/.test(type)) {
      const html = (await res.text()).slice(0, 512 * 1024);
      const meta = (names) => { for (const n of names) { const m = new RegExp(`<meta[^>]+(?:property|name)=["']${n}["'][^>]*content=["']([^"']+)["']`, 'i').exec(html) || new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name)=["']${n}["']`, 'i').exec(html); if (m) return decodeEntities(m[1]).trim(); } return ''; };
      out.title = meta(['og:title', 'twitter:title']) || decodeEntities((/<title[^>]*>([^<]{1,300})<\/title>/i.exec(html) || [])[1] || '').trim();
      const img = meta(['og:image', 'twitter:image']); if (img) { try { const iu = new URL(img, u.href); if (safeHttpUrl(iu.href)) out.image = iu.href; } catch {} }
      out.site = meta(['og:site_name']) || out.site;
    }
  } catch {}
  out.title = out.title.slice(0, 200); out.site = out.site.slice(0, 80);
  await env.USAGE.put(ck, JSON.stringify(out), { expirationTtl: 7 * 86400 });
  return json(out, 200, cors);
}
const decodeEntities = s => String(s).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));

/* ---------- admin API (in-app) ---------- */

async function manage(request, env, url, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json({ error: 'not signed in' }, 401, cors);
  if (s.user.role !== 'admin') return json({ error: 'admin only' }, 403, cors);

  const m = /^\/manage\/users(?:\/([^/]+))?(?:\/(invite))?$/.exec(url.pathname);
  if (!m) return json({ error: 'not found' }, 404, cors);
  const target = m[1] ? normUsername(decodeURIComponent(m[1])) : '';
  const sub = m[2] || '';

  if (!target) {
    if (request.method === 'GET') {
      const list = await env.USAGE.list({ prefix: 'user:' });
      const users = [];
      for (const entry of list.keys) {
        const u = await env.USAGE.get(entry.name, 'json');
        if (!u) continue;
        users.push(await userRow(env, u));
      }
      users.sort((a, b) => (a.role === b.role ? a.name.localeCompare(b.name) : a.role === 'admin' ? -1 : 1));
      return json({ users, site: siteOrigin(env) }, 200, cors);
    }
    if (request.method === 'POST') {
      const body = await readJson(request);
      const username = normUsername(body.username);
      if (!USERNAME_RE.test(username)) return json({ error: 'Username: 2–30 characters, lowercase letters, digits, dots or hyphens' }, 400, cors);
      if (await env.USAGE.get(`user:${username}`)) return json({ error: 'That username is taken' }, 409, cors);
      const name = String(body.name || '').trim().slice(0, 60) || username;
      const role = body.role === 'admin' ? 'admin' : 'student';
      const user = { username, name, role, daily: clampDaily(body.daily), created: today(), disabled: false };
      await env.USAGE.put(`user:${username}`, JSON.stringify(user));
      const invite = await newInvite(env, user);
      return json({ user: await userRow(env, user), invite }, 201, cors);
    }
    return json({ error: 'method not allowed' }, 405, cors);
  }

  const existing = await env.USAGE.get(`user:${target}`, 'json');
  if (!existing) return json({ error: 'no such user' }, 404, cors);

  if (sub === 'invite' && request.method === 'POST') {
    return json({ invite: await newInvite(env, existing) }, 200, cors);
  }
  if (!sub && request.method === 'PATCH') {
    const body = await readJson(request);
    const rec = { ...existing };
    if (body.daily !== undefined) rec.daily = clampDaily(body.daily);
    if (body.disabled !== undefined) rec.disabled = !!body.disabled;
    if (body.name !== undefined) rec.name = String(body.name).trim().slice(0, 60) || rec.name;
    if (body.role !== undefined) rec.role = body.role === 'admin' ? 'admin' : 'student';
    if (target === s.user.username && (rec.disabled || rec.role !== 'admin')) return json({ error: 'You cannot lock yourself out' }, 400, cors);
    await env.USAGE.put(`user:${target}`, JSON.stringify(rec));
    return json({ user: await userRow(env, rec) }, 200, cors);
  }
  if (!sub && request.method === 'DELETE') {
    if (target === s.user.username) return json({ error: 'You cannot delete your own account' }, 400, cors);
    await env.USAGE.delete(`user:${target}`);
    await env.USAGE.delete(`progress:${target}`);
    return json({ ok: true }, 200, cors);
  }
  return json({ error: 'method not allowed' }, 405, cors);
}

async function userRow(env, u) {
  const today_ = parseInt((await env.USAGE.get(`usage:${u.username}:${today()}`)) || '0', 10);
  const prog = await env.USAGE.get(`progress:${u.username}`, 'json');
  return {
    username: u.username, name: u.name, role: u.role || 'student', daily: u.daily || DEFAULT_DAILY,
    created: u.created, disabled: !!u.disabled, hasPassword: !!u.pw, today: today_,
    lastSeen: prog ? prog.updatedAt : null, device: prog ? prog.device : null,
  };
}

async function newInvite(env, user) {
  const token = randomToken(24);
  await env.USAGE.put(`invite:${token}`, JSON.stringify({ username: user.username, name: user.name, role: user.role, daily: user.daily }), { expirationTtl: INVITE_DAYS * 86400 });
  const expires = new Date(Date.now() + INVITE_DAYS * 86400 * 1000).toISOString().slice(0, 10);
  return { token, link: `${siteOrigin(env)}/#invite=${token}`, expires };
}

/* ---------- recovery console (Cloudflare Access) ---------- */

async function recovery(request, env, url) {
  const who = await accessUser(request, env);
  if (who.error === 'not_configured') return html(page('Recovery console is off', 'Set <code>ACCESS_TEAM_DOMAIN</code> and <code>ACCESS_AUD</code> on this Worker, with a Cloudflare Access policy in front of <code>/admin*</code>.'), 503);
  if (who.error) return html(page('Not signed in', 'Cloudflare Access did not vouch for this request (' + esc(who.error) + ').'), 401);
  const username = normUsername(env.ADMIN_USERNAME || 'chris');

  if (url.pathname === '/admin/bootstrap' && request.method === 'POST') {
    const existing = await env.USAGE.get(`user:${username}`, 'json');
    const user = { ...(existing || { username, name: env.ADMIN_NAME || 'Chris', daily: 2000, created: today() }), role: 'admin', disabled: false };
    await env.USAGE.put(`user:${username}`, JSON.stringify(user));
    return json({ invite: await newInvite(env, user), username }, 200, {});
  }
  const existing = await env.USAGE.get(`user:${username}`, 'json');
  return html(RECOVERY.replace('__WHO__', () => esc(who.email)).replace('__ADMIN__', () => esc(username))
    .replace('__STATE__', () => existing && existing.pw ? 'exists and has a password. Minting an invite lets you set a new one; existing sign-ins stay valid.' : 'has no password yet. Mint an invite, open the link, and choose one.'), 200);
}

/* ---------- passwords ---------- */

async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await pbkdf2(password, salt, PBKDF2_ITER);
  return { salt: b64(salt), hash: b64(hash), iter: PBKDF2_ITER };
}
async function verifyPassword(password, pw) {
  if (!pw || !pw.salt || !pw.hash) return false;
  const hash = await pbkdf2(password, unb64(pw.salt), pw.iter || PBKDF2_ITER);
  return timingSafeEqual(hash, unb64(pw.hash));
}
async function pbkdf2(password, salt, iterations) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, key, 256));
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}
function passwordProblem(p) {
  const s = String(p || '');
  if (s.length < MIN_PASSWORD) return `Password must be at least ${MIN_PASSWORD} characters`;
  if (s.length > 200) return 'Password is too long';
  return null;
}

/* ---------- rate limiting ---------- */

async function tooManyFailures(env, key, limit) {
  return parseInt((await env.USAGE.get(`${key}:${today()}`)) || '0', 10) >= limit;
}
async function noteFailure(env, key) {
  const k = `${key}:${today()}`;
  const n = parseInt((await env.USAGE.get(k)) || '0', 10);
  await env.USAGE.put(k, String(n + 1), { expirationTtl: 2 * 86400 });
}
const clientIp = request => request.headers.get('CF-Connecting-IP') || 'unknown';

/* ---------- Cloudflare Access ---------- */

let jwksCache = { domain: '', at: 0, keys: null };

async function accessUser(request, env) {
  const team = env.ACCESS_TEAM_DOMAIN, aud = env.ACCESS_AUD;
  if (!team || !aud) return { error: 'not_configured' };
  const parts = (request.headers.get('Cf-Access-Jwt-Assertion') || '').split('.');
  if (parts.length !== 3) return { error: 'no_token' };
  const [rawHeader, rawPayload, rawSig] = parts;
  let header, payload;
  try { header = JSON.parse(b64Text(rawHeader)); payload = JSON.parse(b64Text(rawPayload)); }
  catch { return { error: 'malformed_token' }; }
  if (header.alg !== 'RS256') return { error: 'unexpected_algorithm' };
  const t = Math.floor(Date.now() / 1000);
  if (!payload.exp || payload.exp <= t) return { error: 'token_expired' };
  if (payload.nbf && payload.nbf > t + 60) return { error: 'token_not_yet_valid' };
  if (payload.iss !== `https://${team}`) return { error: 'wrong_issuer' };
  const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!auds.includes(aud)) return { error: 'wrong_audience' };
  const keys = await jwks(team);
  const jwk = keys.find(k => k.kid === header.kid);
  if (!jwk) return { error: 'unknown_signing_key' };
  const pub = await crypto.subtle.importKey('jwk', { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: 'RS256', ext: true }, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  const signed = new TextEncoder().encode(`${rawHeader}.${rawPayload}`);
  if (!(await crypto.subtle.verify('RSASSA-PKCS1-v1_5', pub, unb64url(rawSig), signed))) return { error: 'bad_signature' };
  return { email: payload.email || 'signed in' };
}
async function jwks(team) {
  if (jwksCache.keys && jwksCache.domain === team && Date.now() - jwksCache.at < 600_000) return jwksCache.keys;
  const res = await fetch(`https://${team}/cdn-cgi/access/certs`);
  const body = await res.json();
  jwksCache = { domain: team, at: Date.now(), keys: (body && body.keys) || [] };
  return jwksCache.keys;
}

/* ---------- helpers ---------- */

function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
}
const siteOrigin = env => (env.SITE_ORIGIN || env.ALLOWED_ORIGIN || '').replace(/\/$/, '');
const normUsername = u => String(u || '').trim().toLowerCase();
const clampDaily = v => Math.max(1, Math.min(2000, parseInt(v, 10) || DEFAULT_DAILY));
const now = () => new Date().toISOString();
const today = () => now().slice(0, 10);
async function readJson(request) { try { const b = await request.json(); return b && typeof b === 'object' ? b : {}; } catch { return {}; } }
function randomToken(bytes) { return b64url(crypto.getRandomValues(new Uint8Array(bytes))); }
function b64(a) { let s = ''; for (const c of a) s += String.fromCharCode(c); return btoa(s); }
function unb64(s) { const bin = atob(s); const out = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i); return out; }
const b64url = a => b64(a).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
function unb64url(s) { let t = s.replace(/-/g, '+').replace(/_/g, '/'); while (t.length % 4) t += '='; return unb64(t); }
const b64Text = s => new TextDecoder().decode(unb64url(s));
const apiError = (type, message) => ({ type: 'error', error: { type, message } });
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const json = (obj, status, headers) => new Response(JSON.stringify(obj), { status, headers: { ...headers, 'Content-Type': 'application/json' } });
const html = (body, status) => new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
const page = (title, note) => '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + '</title><style>body{font:16px/1.5 system-ui,sans-serif;max-width:34rem;margin:12vh auto;padding:0 1.5rem;color:#1c1917}h1{font-size:1.4rem}code{background:#f5f5f4;padding:.1em .35em;border-radius:4px;font-size:.9em}</style><h1>' + title + '</h1><p>' + note + '</p>';

const RECOVERY = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Recovery console</title><style>
body{font:16px/1.55 system-ui,-apple-system,sans-serif;max-width:36rem;margin:10vh auto;padding:0 1.25rem;color:#1c1917}
h1{font-size:1.4rem;margin:0 0 .25rem}.who{color:#78716c;font-size:.85rem;margin:0 0 1.5rem}
button{font:inherit;padding:.6rem 1rem;border-radius:6px;border:1px solid #1d4ed8;background:#1d4ed8;color:#fff;cursor:pointer}
code{font-family:ui-monospace,Menlo,monospace;background:#f5f5f4;padding:.1em .35em;border-radius:4px;word-break:break-all}
.out{margin-top:1.25rem;padding:1rem;border:1px solid #a7f3d0;background:#ecfdf5;border-radius:8px;display:none}
p{margin:.5rem 0}
</style>
<h1>Recovery console</h1><p class="who">Signed in as __WHO__ through Cloudflare Access</p>
<p>The admin account is <code>__ADMIN__</code>. It __STATE__</p>
<p>Everything else — adding students, invites, caps — is in the app itself, under the Admin tab, once you are signed in there.</p>
<p><button id="go">Mint an invite for __ADMIN__</button></p>
<div class="out" id="out"></div>
<script>
document.getElementById('go').addEventListener('click',function(){
  fetch('/admin/bootstrap',{method:'POST'}).then(function(r){return r.json()}).then(function(d){
    var o=document.getElementById('out');o.style.display='block';
    o.innerHTML='<p>Open this link and choose a password (valid until '+d.invite.expires+'):</p><p><code>'+d.invite.link+'</code></p>';
  }).catch(function(e){alert(e.message)});
});
</script>`;
