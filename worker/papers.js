/**
 * Real papers — a student photographs their answers to a past paper, the Worker reads the board's own
 * question paper and mark scheme (by link, never by download), transcribes each answer, and marks it
 * question by question with the student's own words as evidence. Prompts and validators are shared with
 * the app (src/papers.js); the paper's text is never stored, only derived metadata.
 *
 *   POST   /papers                         {spec, series, seriesName, paper, name, marks, minutes, board, level, subject, code, component, qp, ms} -> {attempt}
 *   GET    /papers                         -> {attempts:[summary]}
 *   GET    /papers/<id>                    -> {attempt}
 *   PATCH  /papers/<id>                    {assign?, confidence?, attempted?, transcripts?, ticks?, status?, questions?} -> {attempt}
 *   DELETE /papers/<id>                    removes the attempt, its pages and their bytes from the quota
 *   POST   /papers/<id>/pages/upload       raw image body, X-Page-Name -> {page}      (≤ 8 MB, ≤ 40 pages, the desk's 250 MB quota)
 *   GET    /papers/<id>/pages/<pid>        the image, owner only
 *   PATCH  /papers/<id>/pages/<pid>        {thumb?, w?, h?, n?} -> {page}
 *   DELETE /papers/<id>/pages/<pid>
 *   POST   /papers/<id>/questions          {spec} -> {questions} | {questions:null, fallback:'typed', error}   (shared per paper)
 *   POST   /papers/<id>/prepare            -> 202 {job}   transcribe every assigned question; mark points per question (shared per paper)
 *   POST   /papers/<id>/mark               -> 202 {job}   mark every transcribed question
 *   POST   /papers/<id>/questions/<q>/mark -> {result}    one question again, after an edit or a retake
 *   GET    /papers/<id>/status             -> {job, status, score, total}
 *   GET    /papers/admin/boards            (admin) -> {off:[board]}
 *   POST   /papers/admin/boards            (admin) {board, off} -> {off}
 *
 * Every model call counts one against the caller's daily cap, exactly as the proxy does; at the cap a route
 * answers 429 and a running job stops with the same message.
 *
 * KV:  paper:<username>:<id>                    the attempt (pages, assignments, transcripts, ticks, results, job)
 *      paperspec:<spec>                         the trimmed specification the app posted (ids, names, codes, marking summary)
 *      qmap:<spec>:<series>:<paper>             the paper's question map, shared by every student
 *      points:<spec>:<series>:<paper>:<q>       one question's paraphrased mark points, shared by every student
 *      papers:off                               ["AQA", …] boards the admin has switched off
 *      deskq:<username>                         the same byte quota as the desk
 * R2:  paper/<username>/<id>/<pageId>.<ext>     the page photographs
 *
 * The question paper and mark scheme only ever appear as {type:'document', source:{type:'url'}} blocks in
 * requests to the model. This file never fetches them and never writes their bytes anywhere.
 */
import { WorkflowEntrypoint } from 'cloudflare:workers';
import { questionMapPrompt, validateQuestionMap, pointsPrompt, validatePoints, transcribeQuestionPrompt, validateTranscript, markQuestionPrompt, validateMarkResult } from '../src/papers.js';

export const PAPER_MODELS = { qmap: 'claude-sonnet-5', points: 'claude-sonnet-5', transcribe: 'claude-haiku-4-5', transcribeRetry: 'claude-sonnet-5', mark: 'claude-sonnet-5', retry: 'claude-opus-5' };
/* Only the boards' own sites (and Pearson's CDN) may be read as a paper. */
export const PAPER_HOSTS = ['aqa.org.uk', 'www.aqa.org.uk', 'filestore.aqa.org.uk', 'cdn.sanity.io', 'qualifications.pearson.com', 'www.ocr.org.uk', 'ocr.org.uk', 'pastpapers.download.wjec.co.uk', 'www.wjec.co.uk', 'www.eduqas.co.uk'];
const PAGE_TYPES = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
const PAGE_MAX = 8 * 1024 * 1024, PAGES_MAX = 40, QUOTA = 250 * 1024 * 1024, THUMB_MAX = 24_000, SPEC_MAX = 400_000, TRANSCRIPT_MAX = 20_000;
const JOB_STALE_MS = 30 * 60 * 1000;
const DEFAULT_DAILY = 200;                       // the same default as index.js
const CONFIDENCE = ['sure', 'unsure', 'guessed'], LEGIBILITY = ['ok', 'partial', 'unreadable'];
const ID_RE = /^[A-Za-z0-9._|-]{1,40}$/, Q_RE = /^[A-Za-z0-9()._-]{1,20}$/, ATTEMPT_RE = /^[A-Za-z0-9_-]{6,40}$/;

/* ---------- the routes ---------- */

export async function papers(request, env, url, cors) {
  const s = await sessionUser(request, env);
  if (!s) return json({ error: 'not signed in' }, 401, cors);
  const user = s.user.username, method = request.method;
  const parts = url.pathname.split('/').slice(2).map(x => decodeURIComponent(x)).filter(x => x !== '');

  if (parts[0] === 'admin') {
    if (s.user.role !== 'admin') return json({ error: 'admin only' }, 403, cors);
    if (parts[1] !== 'boards') return json({ error: 'not found' }, 404, cors);
    let off = await boardsOff(env);
    if (method === 'GET') return json({ off }, 200, cors);
    if (method === 'POST') {
      const b = await readJson(request);
      const board = String(b.board || '').trim().slice(0, 40);
      if (!board) return json({ error: 'board is required' }, 400, cors);
      off = off.filter(x => x.toLowerCase() !== board.toLowerCase());
      if (b.off === true) off.push(board);
      await env.USAGE.put('papers:off', JSON.stringify(off));
      return json({ off }, 200, cors);
    }
    return json({ error: 'GET or POST' }, 405, cors);
  }

  if (!parts.length) {
    if (method === 'GET') {
      const list = await env.USAGE.list({ prefix: `paper:${user}:` });
      const attempts = [];
      for (const e of list.keys) { const a = await env.USAGE.get(e.name, 'json'); if (a) attempts.push(summary(a)); }
      attempts.sort((a, b) => String(b.at).localeCompare(String(a.at)));
      return json({ attempts }, 200, cors);
    }
    if (method === 'POST') {
      const b = await readJson(request);
      const str = (v, n) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, n);
      const a = { id: randomToken(9), user, at: now(), status: 'pages',
        spec: str(b.spec, 40), series: str(b.series, 40), seriesName: str(b.seriesName, 60), paper: str(b.paper, 40), name: str(b.name, 120),
        marks: parseInt(b.marks, 10) || 0, minutes: parseInt(b.minutes, 10) || null, board: str(b.board, 40), level: str(b.level, 20), subject: str(b.subject, 100), code: str(b.code, 20), component: str(b.component, 40),
        qp: str(b.qp, 500), ms: str(b.ms, 500), pages: [], assign: {}, confidence: {}, attempted: {}, transcripts: {}, ticks: {}, results: {}, points: {}, questions: null, job: null };
      if (!a.spec || !a.series || !a.paper || !a.name) return json({ error: 'spec, series, paper and name are required' }, 400, cors);
      if (!ID_RE.test(a.spec) || !ID_RE.test(a.series) || !ID_RE.test(a.paper)) return json({ error: 'spec, series and paper must be ids' }, 400, cors);
      if (!(a.marks >= 1 && a.marks <= 300)) return json({ error: 'marks must be between 1 and 300' }, 400, cors);
      if (!boardUrl(a.qp) || !boardUrl(a.ms)) return json({ error: "papers must come from the board's own site" }, 400, cors);
      const off = await boardsOff(env);
      if (off.some(x => x.toLowerCase() === a.board.toLowerCase())) return json({ error: `${a.board} papers are switched off by the admin` }, 409, cors);
      await env.USAGE.put(`paper:${user}:${a.id}`, JSON.stringify(a));
      return json({ attempt: a }, 200, cors);
    }
    return json({ error: 'GET or POST' }, 405, cors);
  }

  const id = parts[0];
  if (!ATTEMPT_RE.test(id)) return json({ error: 'not found' }, 404, cors);
  const key = `paper:${user}:${id}`;
  const a = await env.USAGE.get(key, 'json');
  if (!a) return json({ error: 'not found' }, 404, cors);
  const save = () => env.USAGE.put(key, JSON.stringify(a));
  const sub = parts[1];

  if (!sub) {
    if (method === 'GET') return json({ attempt: a }, 200, cors);
    if (method === 'PATCH') {
      const b = await readJson(request);
      const each = (o, fn) => { if (o && typeof o === 'object' && !Array.isArray(o)) for (const q of Object.keys(o).slice(0, 200)) if (Q_RE.test(q)) fn(q, o[q]); };
      const pageIds = new Set(a.pages.map(p => p.id));
      each(b.assign, (q, v) => { a.assign[q] = (Array.isArray(v) ? v : []).map(String).filter(x => pageIds.has(x)).slice(0, PAGES_MAX); if (!a.assign[q].length) delete a.assign[q]; });
      each(b.confidence, (q, v) => { if (CONFIDENCE.includes(v)) a.confidence[q] = v; else delete a.confidence[q]; });
      each(b.attempted, (q, v) => { if (v === false) a.attempted[q] = false; else delete a.attempted[q]; });
      each(b.transcripts, (q, v) => { if (!v || typeof v !== 'object' || typeof v.transcript !== 'string' || !LEGIBILITY.includes(v.legibility)) return;
        const transcript = v.transcript.slice(0, TRANSCRIPT_MAX);
        a.transcripts[q] = { ...(a.transcripts[q] || {}), transcript, legibility: v.legibility, unsure: [], blank: !transcript.trim() && v.legibility !== 'unreadable', edited: true, editedAt: now() }; delete a.transcripts[q].error; });
      each(b.ticks, (q, v) => { if (Array.isArray(v)) a.ticks[q] = v.slice(0, 60).map(x => !!x); else delete a.ticks[q]; });
      if (typeof b.status === 'string' && /^[a-z-]{1,20}$/.test(b.status)) a.status = b.status;
      if (b.questions !== undefined) {  /* the typed fallback: the student's own list of questions, held to the same contract */
        const spec = await env.USAGE.get(`paperspec:${a.spec}`, 'json');
        if (!spec) return json({ error: 'post the question map first' }, 400, cors);
        const why = validateQuestionMap(spec, { questions: b.questions }, a.marks);
        if (why) return json({ error: why }, 400, cors);
        a.questions = cleanQuestions(b.questions);
      }
      await save();
      return json({ attempt: a }, 200, cors);
    }
    if (method === 'DELETE') {
      let bytes = 0;
      for (const p of a.pages) { if (env.DESK) await env.DESK.delete(p.key); bytes += p.size || 0; }
      if (bytes) await addQuota(env, user, -bytes);
      await env.USAGE.delete(key);
      return json({ ok: true }, 200, cors);
    }
    return json({ error: 'GET, PATCH or DELETE' }, 405, cors);
  }

  if (sub === 'pages') {
    if (!env.DESK) return json({ error: 'Photo storage is not set up yet — the DESK storage bucket is not bound' }, 503, cors);
    const pid = parts[2];
    if (pid === 'upload' && method === 'POST') {
      const type = (request.headers.get('Content-Type') || '').split(';')[0].trim().toLowerCase();
      if (!PAGE_TYPES[type]) return json({ error: 'Pages must be JPEG, PNG or WebP images' }, 415, cors);
      const len = parseInt(request.headers.get('Content-Length') || '0', 10);
      if (len > PAGE_MAX) return json({ error: 'Each page is limited to 8 MB' }, 413, cors);
      if (a.pages.length >= PAGES_MAX) return json({ error: `A paper holds ${PAGES_MAX} pages at most` }, 409, cors);
      const body = await request.arrayBuffer();
      if (body.byteLength > PAGE_MAX) return json({ error: 'Each page is limited to 8 MB' }, 413, cors);
      if (!body.byteLength) return json({ error: 'an empty upload' }, 400, cors);
      const used = await quotaUsed(env, user);
      if (used + body.byteLength > QUOTA) return json({ error: 'Your desktop is full — the 250 MB allowance is used up. Delete something you no longer need.' }, 413, cors);
      const page = { id: randomToken(9), n: a.pages.length + 1, key: '', size: body.byteLength, type, at: now(), name: String(request.headers.get('X-Page-Name') || '').slice(0, 120), thumb: null, w: null, h: null };
      page.key = `paper/${user}/${id}/${page.id}.${PAGE_TYPES[type]}`;
      await env.DESK.put(page.key, body, { httpMetadata: { contentType: type } });
      a.pages.push(page);
      await save(); await addQuota(env, user, body.byteLength);
      return json({ page, used: used + body.byteLength, quota: QUOTA }, 200, cors);
    }
    const page = pid && a.pages.find(p => p.id === pid);
    if (!page) return json({ error: 'not found' }, 404, cors);
    if (method === 'GET') {
      if (!page.key.startsWith(`paper/${user}/`)) return json({ error: 'not found' }, 404, cors);
      const obj = await env.DESK.get(page.key);
      if (!obj) return json({ error: 'not found' }, 404, cors);
      return new Response(obj.body, { status: 200, headers: { ...cors, 'Content-Type': (obj.httpMetadata && obj.httpMetadata.contentType) || page.type, 'Cache-Control': 'private, max-age=3600' } });
    }
    if (method === 'PATCH') {
      const b = await readJson(request);
      if (typeof b.thumb === 'string' && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(b.thumb) && b.thumb.length <= THUMB_MAX) page.thumb = b.thumb;
      if (typeof b.w === 'number' && typeof b.h === 'number' && isFinite(b.w) && isFinite(b.h)) { page.w = Math.floor(b.w); page.h = Math.floor(b.h); }
      if (typeof b.n === 'number' && isFinite(b.n)) { renumber(a); a.pages = a.pages.filter(p => p.id !== pid); a.pages.splice(Math.max(0, Math.min(a.pages.length, Math.round(b.n) - 1)), 0, page); a.pages.forEach((p, i) => { p.n = i + 1; }); }
      await save();
      return json({ page }, 200, cors);
    }
    if (method === 'DELETE') {
      await env.DESK.delete(page.key);
      a.pages = a.pages.filter(p => p.id !== pid); renumber(a);
      for (const q of Object.keys(a.assign)) { a.assign[q] = a.assign[q].filter(x => x !== pid); if (!a.assign[q].length) delete a.assign[q]; }
      await save();
      const used = await addQuota(env, user, -(page.size || 0));
      return json({ ok: true, used, quota: QUOTA }, 200, cors);
    }
    return json({ error: 'GET, PATCH or DELETE' }, 405, cors);
  }

  if (sub === 'status' && method === 'GET') return json({ job: a.job, status: a.status, score: a.score == null ? null : a.score, total: a.total == null ? null : a.total }, 200, cors);

  if (sub === 'questions' && parts.length === 2 && method === 'POST') {
    const b = await readJson(request);
    const spec = cleanSpec(b.spec);
    if (spec) { if (spec.id !== a.spec) return json({ error: 'that specification is not this paper\'s' }, 400, cors); await env.USAGE.put(`paperspec:${a.spec}`, JSON.stringify(spec)); }
    const qk = `qmap:${a.spec}:${a.series}:${a.paper}`;
    let map = await env.USAGE.get(qk, 'json');
    if (!map) {
      const sp = spec || await env.USAGE.get(`paperspec:${a.spec}`, 'json');
      if (!sp) return json({ error: 'the specification (id, board, level, subject, code, markConventions.summary, topics with ideas) is required' }, 400, cors);
      if (!env.ANTHROPIC_API_KEY) return json({ questions: null, fallback: 'typed', error: 'no model key' }, 200, cors);
      try {
        const content = [doc(a.qp), text(questionMapPrompt(sp, paperOf(a)))];
        let o = await ask(env, user, PAPER_MODELS.qmap, 6000, content), why = validateQuestionMap(sp, o, a.marks), model = PAPER_MODELS.qmap;
        if (why) { o = await ask(env, user, PAPER_MODELS.retry, 6000, again(content, why)); why = validateQuestionMap(sp, o, a.marks); model = PAPER_MODELS.retry; }
        if (why) return json({ questions: null, fallback: 'typed', error: why }, 200, cors);
        map = { spec: a.spec, series: a.series, paper: a.paper, questions: cleanQuestions(o.questions), at: now(), model };
        await env.USAGE.put(qk, JSON.stringify(map));
      } catch (e) { return capped(e, cors); }
    }
    a.questions = map.questions;
    await save();
    return json({ questions: map.questions }, 200, cors);
  }

  if (sub === 'questions' && parts.length === 4 && parts[3] === 'mark' && method === 'POST') {
    const q = (a.questions || []).find(x => x.q === parts[2]);
    if (!q) return json({ error: 'no such question' }, 404, cors);
    const spec = await env.USAGE.get(`paperspec:${a.spec}`, 'json');
    if (!spec) return json({ error: 'post the question map first' }, 400, cors);
    if (!a.transcripts[q.q]) return json({ error: 'that question has no transcript yet' }, 400, cors);
    let result;
    try { result = await markOne(env, user, a, spec, q); } catch (e) { return capped(e, cors); }
    a.results[q.q] = result;
    if (a.status === 'marked') { a.score = scoreOf(a); a.total = a.marks; }
    await save();
    return json({ result, score: a.score == null ? null : a.score, total: a.total == null ? null : a.total }, 200, cors);
  }

  if ((sub === 'prepare' || sub === 'mark') && parts.length === 2 && method === 'POST') {
    if (!env.PAPER_MARKER) return json({ error: 'the paper marker is not configured on this Worker' }, 503, cors);
    if (a.job && a.job.status === 'running' && Date.now() - Date.parse(a.job.updatedAt || 0) <= JOB_STALE_MS) return json({ error: 'a job is already running for this paper', job: a.job }, 409, cors);
    if (!Array.isArray(a.questions) || !a.questions.length) return json({ error: 'get the question map first' }, 400, cors);
    if (!(await env.USAGE.get(`paperspec:${a.spec}`))) return json({ error: 'post the question map first' }, 400, cors);
    const targets = sub === 'prepare' ? assigned(a) : transcribed(a);
    if (sub === 'prepare' && !targets.length) return json({ error: 'assign at least one question to a page first' }, 400, cors);
    if (sub === 'mark') {
      const missing = assigned(a).filter(q => !a.transcripts[q.q] && a.attempted[q.q] !== false).map(q => q.q);
      if (missing.length) return json({ error: `no transcript yet for question${missing.length > 1 ? 's' : ''} ${missing.join(', ')} — prepare the paper first` }, 400, cors);
      if (!targets.length) return json({ error: 'nothing to mark yet' }, 400, cors);
    }
    a.job = { stage: sub, status: 'running', done: 0, total: targets.length, message: 'Starting…', startedAt: now(), updatedAt: now() };
    a.status = sub === 'prepare' ? 'preparing' : 'marking';
    await save();
    await env.PAPER_MARKER.create({ id: `paper-${user}-${id}-${sub}-${Date.now()}`, params: { user, id, stage: sub } });
    return json({ job: a.job }, 202, cors);
  }

  return json({ error: 'not found' }, 404, cors);
}

/* ---------- the Workflow: one step per question, so a failure retries that question only ---------- */

export class PaperMarker extends WorkflowEntrypoint {
  async run(event, step) { return runPaperJob(event.payload, this.env, step); }
}

export async function runPaperJob(params, env, step) {
  const { user, id, stage } = params;
  const key = `paper:${user}:${id}`;
  const a = await env.USAGE.get(key, 'json');
  if (!a || !a.job) return { error: 'no such attempt' };
  const save = async (fn) => { const fresh = (await env.USAGE.get(key, 'json')) || a; fn(fresh); fresh.job = { ...(fresh.job || {}), updatedAt: now() }; await env.USAGE.put(key, JSON.stringify(fresh)); return fresh; };
  const fail = (message) => save(f => { f.job.status = 'failed'; f.job.message = message; f.status = stage === 'prepare' ? 'assign' : 'check'; });
  try {
    const spec = await env.USAGE.get(`paperspec:${a.spec}`, 'json');
    if (!spec) return fail('the specification was not posted');
    const targets = stage === 'prepare' ? assigned(a) : transcribed(a);
    for (let i = 0; i < targets.length; i++) {
      const q = targets[i];
      const r = await step.do(`${stage} ${q.q}`, async () => {
        try { return stage === 'prepare' ? await prepareOne(env, user, a, spec, q) : { result: await markOne(env, user, a, spec, q) }; }
        catch (e) { if (e instanceof CapError) return { capped: e.message }; throw e; }
      });
      await save(f => {
        if (r.transcript) f.transcripts[q.q] = r.transcript;
        if (r.points) { f.points = f.points || {}; f.points[q.q] = r.points; }
        if (r.result) f.results[q.q] = r.result;
        f.job.done = i + 1; f.job.message = i + 1 < targets.length ? `${stage === 'prepare' ? 'Reading' : 'Marking'} question ${targets[i + 1].q}…` : 'Finishing…';
      });
      if (r.capped) return fail(r.capped);
    }
    return save(f => {
      f.job.status = 'done'; f.job.message = stage === 'prepare' ? 'Every answer is transcribed — check them before marking.' : 'Marked.';
      if (stage === 'prepare') f.status = 'check';
      else { f.status = 'marked'; f.score = scoreOf(f); f.total = f.marks; f.markedAt = now(); }
    });
  } catch (e) {
    return fail(String((e && e.message) || e).slice(0, 300));
  }
}

/* Transcribe one question's pages, and fetch or write the paper's mark points for it. */
async function prepareOne(env, user, a, spec, q) {
  const out = {};
  const existing = a.transcripts[q.q];
  if (!(existing && existing.edited)) {   /* the student's own corrections are never overwritten by a re-run */
    const images = await pageBlocks(env, a, q.q);
    const content = [...images, text(transcribeQuestionPrompt(q))];
    let o = await ask(env, user, PAPER_MODELS.transcribe, 4000, content), why = validateTranscript(o), model = PAPER_MODELS.transcribe;
    if (why) { o = await ask(env, user, PAPER_MODELS.transcribeRetry, 4000, again(content, why)); why = validateTranscript(o); model = PAPER_MODELS.transcribeRetry; }
    out.transcript = why ? { transcript: '', legibility: 'unreadable', unsure: [], blank: false, edited: false, error: why, at: now() }
      : { transcript: o.transcript.slice(0, TRANSCRIPT_MAX), legibility: o.legibility, unsure: (Array.isArray(o.unsure) ? o.unsure : []).slice(0, 40).map(x => String(x).slice(0, 80)), blank: !!o.blank, edited: false, model, at: now() };
  }
  const pk = `points:${a.spec}:${a.series}:${a.paper}:${q.q}`;
  let pts = await env.USAGE.get(pk, 'json');
  if (!pts) {
    const content = [doc(a.ms), text(pointsPrompt(spec, paperOf(a), q))];
    let o = await ask(env, user, PAPER_MODELS.points, 3000, content), why = validatePoints(o, q), model = PAPER_MODELS.points;
    if (why) { o = await ask(env, user, PAPER_MODELS.retry, 3000, again(content, why)); why = validatePoints(o, q); model = PAPER_MODELS.retry; }
    if (why) pts = { q: q.q, points: null, error: why, at: now() };
    else { pts = { q: q.q, points: o.points.map(p => ({ text: String(p.text).trim().slice(0, 200), max: p.max, kind: p.kind ? String(p.kind).slice(0, 10) : undefined })), at: now(), model }; await env.USAGE.put(pk, JSON.stringify(pts)); }
  }
  out.points = pts;
  return out;
}

/* Mark one question: nothing to call for an unreadable, blank or unattempted answer. */
async function markOne(env, user, a, spec, q) {
  const t = a.transcripts[q.q];
  if (a.attempted[q.q] === false || (t && t.blank)) return { awarded: 0, max: q.marks, attempted: false, at: now() };
  if (!t) return { awarded: null, max: q.marks, error: 'no transcript' };
  if (t.legibility === 'unreadable') return { awarded: null, max: q.marks, legibility: 'unreadable', at: now() };
  const pts = a.points && a.points[q.q];
  if (!pts || !Array.isArray(pts.points)) return { awarded: null, max: q.marks, error: (pts && pts.error) ? `no mark points: ${pts.error}` : 'no mark points for this question yet' };
  const images = await pageBlocks(env, a, q.q);
  const content = [doc(a.ms), ...images, text(markQuestionPrompt(spec, paperOf(a), q, pts.points, t.transcript, a.ticks[q.q] || null, images.length > 0))];
  let o = await ask(env, user, PAPER_MODELS.mark, 4000, content), why = validateMarkResult(o, q, pts.points, t.transcript), model = PAPER_MODELS.mark;
  if (why) { o = await ask(env, user, PAPER_MODELS.retry, 4000, again(content, why)); why = validateMarkResult(o, q, pts.points, t.transcript); model = PAPER_MODELS.retry; }
  if (why) return { awarded: null, max: q.marks, error: why, at: now() };
  return { awarded: o.awarded, max: q.marks, lines: o.lines.map(l => ({ i: l.i, awarded: l.awarded, evidence: typeof l.evidence === 'string' ? l.evidence.slice(0, 300) : null, missing: typeof l.missing === 'string' ? l.missing.slice(0, 200) : null })),
    level: o.level == null ? null : o.level, failureMode: o.failureMode, note: o.note.slice(0, 600), disagree: Array.isArray(o.disagree) ? o.disagree.filter(x => Number.isInteger(x)) : [], model, at: now() };
}

/* ---------- the model ---------- */

class CapError extends Error {}
/* One call, one unit of the caller's daily cap — counted before the call, as the proxy does. */
async function ask(env, username, model, maxTokens, content) {
  const user = await env.USAGE.get(`user:${username}`, 'json');
  if (!user || user.disabled) throw new Error('not signed in');
  const daily = user.daily || DEFAULT_DAILY, uk = `usage:${username}:${today()}`;
  const used = parseInt((await env.USAGE.get(uk)) || '0', 10);
  if (used >= daily) throw new CapError(`${user.name}'s daily limit of ${daily} requests is used up — resets at midnight UTC`);
  await env.USAGE.put(uk, String(used + 1), { expirationTtl: 100 * 86400 });
  const body = { model, max_tokens: maxTokens, messages: [{ role: 'user', content }], metadata: { user_id: username } };
  const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' }, body: JSON.stringify(body) });
  const txt = await res.text();
  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${txt.slice(0, 200)}`);
  const data = JSON.parse(txt);
  if (data.stop_reason === 'refusal') throw new Error('the model declined this request');
  return parseJson((data.content || []).filter(c => c.type === 'text').map(c => c.text).join(''));
}
const capped = (e, cors) => e instanceof CapError ? json({ type: 'error', error: { type: 'rate_limit_error', message: e.message } }, 429, cors) : json({ error: 'server error', detail: String((e && e.message) || e).slice(0, 300) }, 500, cors);
/* A bare JSON object, fences stripped if the model added them anyway; null when it is not JSON. */
function parseJson(s) {
  let t = String(s || '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  const i = t.indexOf('{'), j = t.lastIndexOf('}');
  if (i > 0 || (j >= 0 && j < t.length - 1)) t = t.slice(Math.max(0, i), j + 1);
  try { const o = JSON.parse(t); return o && typeof o === 'object' ? o : null; } catch { return null; }
}
const doc = url => ({ type: 'document', source: { type: 'url', url }, cache_control: { type: 'ephemeral' } });
const text = t => ({ type: 'text', text: t });
/* The second try tells the bigger model what was wrong with the first answer. */
const again = (content, why) => content.map((c, i) => i === content.length - 1 && c.type === 'text' ? text(`${c.text}\n\nA previous answer was refused because: ${why}. Answer again and fix that.`) : c);
/* A question's pages as image blocks, in page order, each preceded by its page number. */
async function pageBlocks(env, a, q) {
  const ids = a.assign[q] || [];
  const pages = a.pages.filter(p => ids.includes(p.id)).sort((x, y) => x.n - y.n);
  const out = [];
  for (const p of pages) {
    const obj = env.DESK && await env.DESK.get(p.key); if (!obj) continue;
    out.push(text(`Page ${p.n}`), { type: 'image', source: { type: 'base64', media_type: p.type, data: b64(new Uint8Array(await obj.arrayBuffer())) } });
  }
  return out;
}

/* ---------- helpers ---------- */

const paperOf = a => ({ name: a.name, series: a.series, seriesName: a.seriesName, marks: a.marks });
/* prepare reads every question with pages the student has not marked as unattempted; mark covers every transcript plus the unattempted */
const assigned = a => (a.questions || []).filter(q => Array.isArray(a.assign[q.q]) && a.assign[q.q].length && a.attempted[q.q] !== false);
const transcribed = a => (a.questions || []).filter(q => a.transcripts[q.q] || a.attempted[q.q] === false);
const scoreOf = a => Object.values(a.results || {}).reduce((n, r) => n + (r && r.awarded > 0 ? r.awarded : 0), 0);
const summary = a => ({ id: a.id, at: a.at, status: a.status, spec: a.spec, series: a.series, seriesName: a.seriesName, paper: a.paper, name: a.name, marks: a.marks, score: a.score == null ? null : a.score, total: a.total == null ? null : a.total });
function renumber(a) { a.pages.sort((x, y) => x.n - y.n); a.pages.forEach((p, i) => { p.n = i + 1; }); }
function cleanQuestions(qs) {
  return qs.map(q => ({ q: String(q.q).trim(), marks: q.marks, topic: String(q.topic), codes: (Array.isArray(q.codes) ? q.codes : []).slice(0, 3).map(c => String(c).slice(0, 40)), mode: q.mode, command: String(q.command || '').slice(0, 40), choice: q.choice ? String(q.choice).slice(0, 10) : null }));
}
/* The app's spec, kept to what the prompts need: ids, names, codes and the marking summary. */
function cleanSpec(s) {
  if (!s || typeof s !== 'object' || !Array.isArray(s.topics)) return null;
  const str = (v, n) => String(v == null ? '' : v).slice(0, n);
  const out = { id: str(s.id, 40), board: str(s.board, 40), level: str(s.level, 20), subject: str(s.subject, 100), code: str(s.code, 20),
    markConventions: { summary: str(s.markConventions && s.markConventions.summary, 3000) },
    topics: s.topics.slice(0, 200).map(t => ({ id: str(t && t.id, 40), name: str(t && t.name, 160), ideas: (Array.isArray(t && t.ideas) ? t.ideas : []).slice(0, 300).map(i => ({ code: str(i && i.code, 40) })) })) };
  if (!out.id || !out.board || !out.topics.length || out.topics.some(t => !t.id)) return null;
  return JSON.stringify(out).length > SPEC_MAX ? null : out;
}
function boardUrl(raw) {
  let u; try { u = new URL(raw); } catch { return false; }
  return u.protocol === 'https:' && PAPER_HOSTS.includes(u.hostname.toLowerCase());
}
async function boardsOff(env) { const v = await env.USAGE.get('papers:off', 'json'); return Array.isArray(v) ? v.map(x => String(x)).filter(Boolean) : []; }
const quotaUsed = async (env, user) => parseInt((await env.USAGE.get(`deskq:${user}`)) || '0', 10);
async function addQuota(env, user, delta) { const left = Math.max(0, await quotaUsed(env, user) + delta); await env.USAGE.put(`deskq:${user}`, String(left)); return left; }
async function sessionUser(request, env) {
  const m = /^Bearer\s+([A-Za-z0-9_-]{20,})$/.exec(request.headers.get('Authorization') || '');
  if (!m) return null;
  const sess = await env.USAGE.get(`session:${m[1]}`, 'json');
  if (!sess) return null;
  const user = await env.USAGE.get(`user:${sess.username}`, 'json');
  if (!user || user.disabled) return null;
  return { user, token: m[1] };
}
const now = () => new Date().toISOString();
const today = () => now().slice(0, 10);
async function readJson(request) { try { const b = await request.json(); return b && typeof b === 'object' ? b : {}; } catch { return {}; } }
const json = (obj, status, headers) => new Response(JSON.stringify(obj), { status, headers: { ...headers, 'Content-Type': 'application/json' } });
function b64(u) { let s = ''; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); }
function randomToken(bytes) { return b64(crypto.getRandomValues(new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
