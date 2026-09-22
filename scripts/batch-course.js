#!/usr/bin/env node
/* Build a course on the Message Batches API — the Worker's pipeline (worker/builder.js, worker/depth.js), the same
   prompts, schemas, validators and judge, run as asynchronous batches at half the token price, with every request's
   usage written to a ledger so the real cost of a course is a number, not an estimate. Sonnet 5 writes, Opus 5 judges;
   nothing here runs on a subscription. The results land in the repository exactly as a hand-built course does.

   node scripts/batch-course.js spec <board> <code> [--url …]   fetch the PDF → outline → topics → validate → judge →
                                                                 src/specs/, or up to JUDGE_ROUNDS re-outlines with the
                                                                 judge's own findings as the objection, then held
   node scripts/batch-course.js kits <id> [--only t1,t2]         write → validate → judge → one rewrite → judge → src/kits/<id>.js
   node scripts/batch-course.js course <board> <code> [--url …]  spec, then kits, then install in build.js
   node scripts/batch-course.js wave <n> [--parallel 3] [--skip <id>,…]  every course of that wave in docs/course-roadmap.md not yet built
   node scripts/batch-course.js cost [<id>]                      the ledger: tokens and dollars by course, stage and model
   Options: --dry-run (build the requests, submit nothing)  --doc file|url (how the PDF reaches the model; default file)
            --poll <seconds> (default 30)  --gbp <rate> (USD→GBP for the cost report; default 0.75)
   State lives in scratch/courses/<id>/batch/ (gitignored). A batch that was submitted is never submitted twice: a
   crashed or interrupted run is resumed by running the same command again. Needs ANTHROPIC_API_KEY. */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const { loadModule } = require(path.join(ROOT, 'tests', '_load.js'));
const validator = require(path.join(ROOT, 'src', 'spec-validator.js')), kitValidator = require(path.join(ROOT, 'src', 'kit-validator.js')), families = require(path.join(ROOT, 'src', 'families.js'));
const B = loadModule(path.join(ROOT, 'worker', 'builder.js'), { '../src/spec-validator.js': validator, '../src/families.js': families }).exports;
const D = loadModule(path.join(ROOT, 'worker', 'depth.js'), { '../src/kit-validator.js': kitValidator, '../src/families.js': families }).exports;
const { validateSpec } = validator, { validateKit } = kitValidator, { FAMILIES, familyFor } = families;

const API = 'https://api.anthropic.com';
const VERSION = '2023-06-01';
/* List prices in USD per million tokens (platform.claude.com/pricing, September 2026). A batch is billed at half of
   these; cache reads at a tenth of the input price; cache writes at 1.25× (5 minutes) or 2× (1 hour). */
const PRICES = { 'claude-sonnet-5': { in: 2, out: 10 }, 'claude-opus-5': { in: 5, out: 25 }, 'claude-haiku-4-5': { in: 1, out: 5 }, 'claude-fable-5-1': { in: 10, out: 50 } };
const BATCH_DISCOUNT = 0.5;
const MODELS = { outline: B.MODELS.outline, topic: B.MODELS.topic, judge: B.MODELS.judge, write: D.KIT_MODELS.write, judgeKit: D.KIT_MODELS.judge };
const MAX_TOKENS = { outline: 16000, topic: 16000, judge: 16000, write: 32000, judgeKit: 6000 };
const TTL = '1h';
const FILE_DAYS = 7;
/* tests/spec.test.js refuses a shipped file that writes a power with a caret */
const CARET = /[A-Za-z0-9)]\^-?\d/;
const caretProblems = (x) => CARET.test(JSON.stringify(x)) ? ['powers are written with a caret (x^2, 10^-3): write them with superscript characters (x², 10⁻³) — the shipped files refuse carets'] : [];

/* Anthropic's custom_id must match ^[a-zA-Z0-9_-]{1,64}$ — a topic id like "3.1" and the ":" this file used as a
   separator both break that, so every custom_id is built and re-read through this one join. Falsy parts (an
   omitted tag) are dropped rather than joined in as the literal string "null". */
const cid = (...parts) => parts.filter(Boolean).join('-').replace(/[^A-Za-z0-9_-]/g, '_');

/* A spec judged under the publish score gets its own findings back as the next round's objection — up to this
   many attempts in total before it is held for a person to read the judge's report and decide. */
const JUDGE_ROUNDS = 3;

/* A topic's own content — too few ideas, a duplicated idea code, thin content — is the writer's to fix by
   trying again, never the outline's: rewriting the whole topic list in response is what collapsed several
   grammar topics into one oversized topic on a live course, which then couldn't be written or judged within
   the normal token budget. Only these three checks are actually about a topic's place in the outline. */
const OUTLINE_TOPIC_PROBLEM = /: (id is duplicated|needs a name|component ".*" is not one of)/;
const TOPIC_WRITE_ROUNDS = 3;

/* ---------- cost ---------- */
function costOf(model, usage, ttl = TTL, batch = true) {
  const p = PRICES[model] || PRICES['claude-sonnet-5']; const m = batch ? BATCH_DISCOUNT : 1; const M = 1e6;
  const u = usage || {};
  const created = u.cache_creation && typeof u.cache_creation === 'object' ? u.cache_creation : null;
  const w5 = created ? (created.ephemeral_5m_input_tokens || 0) : (ttl === '1h' ? 0 : (u.cache_creation_input_tokens || 0));
  const w1h = created ? (created.ephemeral_1h_input_tokens || 0) : (ttl === '1h' ? (u.cache_creation_input_tokens || 0) : 0);
  const usd = m * ((u.input_tokens || 0) * p.in + (u.cache_read_input_tokens || 0) * p.in * 0.1 + w5 * p.in * 1.25 + w1h * p.in * 2 + (u.output_tokens || 0) * p.out) / M;
  return Math.round(usd * 1e6) / 1e6;
}

/* ---------- the API, injectable for tests ---------- */
function anthropicBatches({ key, fetch: f = globalThis.fetch, sleep = ms => new Promise(r => setTimeout(r, ms)), log = () => {} }) {
  if (!key) throw new Error('ANTHROPIC_API_KEY is not set — the batch path bills the API, never a subscription');
  const headers = { 'x-api-key': key, 'anthropic-version': VERSION };
  const json = async (method, url, body) => {
    const res = await f(url, { method, headers: { ...headers, ...(body ? { 'Content-Type': 'application/json' } : {}) }, body: body ? JSON.stringify(body) : undefined });
    const text = await res.text();
    if (!res.ok) throw new Error(`Anthropic ${res.status} on ${method} ${url.replace(API, '')}: ${text.slice(0, 400)}`);
    return JSON.parse(text);
  };
  return {
    /* one synchronous call, full price: the outline everything waits for, and the first topic that warms the cache */
    async message(params) { return json('POST', `${API}/v1/messages`, params); },
    async upload(file) {
      const form = new FormData();
      form.append('file', new Blob([fs.readFileSync(file)], { type: 'application/pdf' }), path.basename(file));
      form.append('expires_in_seconds', String(FILE_DAYS * 86400));
      const res = await f(`${API}/v1/files`, { method: 'POST', headers, body: form });
      const text = await res.text();
      if (!res.ok) throw new Error(`Anthropic ${res.status} on POST /v1/files: ${text.slice(0, 400)}`);
      return JSON.parse(text);
    },
    async create(requests) { return json('POST', `${API}/v1/messages/batches`, { requests }); },
    async retrieve(id) { return json('GET', `${API}/v1/messages/batches/${id}`); },
    async results(batch) {
      const res = await f(batch.results_url || `${API}/v1/messages/batches/${batch.id}/results`, { headers });
      const text = await res.text();
      if (!res.ok) throw new Error(`Anthropic ${res.status} fetching results of ${batch.id}: ${text.slice(0, 400)}`);
      const out = {};
      for (const line of text.split('\n')) { if (!line.trim()) continue; const r = JSON.parse(line); out[r.custom_id] = r.result; }
      return out;
    },
    /* poll until ended; a line is printed only when the counts change */
    async wait(id, pollMs) {
      let last = '';
      for (;;) {
        const b = await this.retrieve(id);
        const c = b.request_counts || {};
        const line = `${b.processing_status} · ${c.succeeded || 0} succeeded, ${c.processing || 0} processing, ${c.errored || 0} errored, ${c.expired || 0} expired, ${c.canceled || 0} canceled`;
        if (line !== last) { log(`batch ${id}: ${line}`); last = line; }
        if (b.processing_status === 'ended') return b;
        await sleep(pollMs);
      }
    },
  };
}

/* ---------- one course's run: state, ledger and the two ways of asking ---------- */
function runFor(id, opts = {}) {
  const dir = path.join(opts.scratch || process.env.COURSE_SCRATCH || path.join(ROOT, 'scratch', 'courses'), id, 'batch');
  fs.mkdirSync(dir, { recursive: true });
  const stateFile = path.join(dir, 'state.json'), ledgerFile = path.join(dir, 'ledger.jsonl');
  const state = fs.existsSync(stateFile) ? JSON.parse(fs.readFileSync(stateFile, 'utf8')) : { id, batches: {} };
  const save = () => fs.writeFileSync(stateFile, JSON.stringify(state, null, 1));
  const log = (m) => (opts.log || console.log)(`[${id}] ${m}`);
  /* a dry run never touches the API, so it needs no key */
  const api = opts.api || (opts.dryRun ? null : anthropicBatches({ key: process.env.ANTHROPIC_API_KEY, log }));
  const pollMs = (opts.poll || 30) * 1000;
  const ledger = (stage, customId, model, usage, batch) => {
    const row = { at: new Date().toISOString(), id, stage, request: customId, model, batch, usage, usd: costOf(model, usage, TTL, batch) };
    fs.appendFileSync(ledgerFile, JSON.stringify(row) + '\n'); return row;
  };
  const parse = (message) => {
    if (!message) throw new Error('no message');
    if (message.stop_reason === 'refusal') throw new Error('the model declined this request');
    const text = (message.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
    try { return JSON.parse(text); } catch (e) { throw new Error(message.stop_reason === 'max_tokens' ? 'the answer ran past max_tokens' : 'the answer is not the JSON asked for'); }
  };
  const cached = { type: 'ephemeral', ttl: TTL };
  const doc = (source) => source.fileId ? { type: 'document', source: { type: 'file', file_id: source.fileId }, cache_control: cached } : { type: 'document', source: { type: 'url', url: source.url }, cache_control: cached };
  const params = ({ system, prompt, source, schema, model, maxTokens }) => ({ model, max_tokens: maxTokens,
    system: [{ type: 'text', text: system, cache_control: cached }],
    messages: [{ role: 'user', content: [...(source ? [doc(source)] : []), { type: 'text', text: prompt }] }],
    output_config: { format: { type: 'json_schema', schema }, effort: 'high' } });

  /* Submit a named batch once. On a rerun a submitted-but-uncollected batch is polled instead of resubmitted; a
     collected name with new requests is a new attempt. Returns { customId: { value } | { error } }. */
  async function batch(name, stage, requests) {
    if (!requests.length) return {};
    if (opts.dryRun) { log(`dry run: ${name} would submit ${requests.length} request(s) · ${(JSON.stringify(requests).length / 1024).toFixed(0)} KB of prompts`); return Object.fromEntries(requests.map(r => [r.custom_id, { dryRun: true }])); }
    let rec = state.batches[name];
    if (!rec || rec.collected) {
      const b = await api.create(requests);
      rec = state.batches[name] = { id: b.id, stage, submittedAt: new Date().toISOString(), requests: requests.length, models: [...new Set(requests.map(r => r.params.model))], collected: false };
      save(); log(`${name}: submitted ${requests.length} request(s) as ${b.id}`);
    } else log(`${name}: resuming ${rec.id}, submitted ${rec.submittedAt}`);
    const ended = await api.wait(rec.id, pollMs);
    const results = await api.results(ended);
    const out = {};
    for (const r of requests) {
      const res = results[r.custom_id];
      if (!res) { out[r.custom_id] = { error: 'no result for this request' }; continue; }
      if (res.type !== 'succeeded') { out[r.custom_id] = { error: `${res.type}${res.error ? ': ' + String(res.error.message || res.error.type || JSON.stringify(res.error)).slice(0, 200) : ''}` }; continue; }
      ledger(stage, r.custom_id, r.params.model, res.message.usage, true);
      try { out[r.custom_id] = { value: parse(res.message) }; } catch (e) { out[r.custom_id] = { error: e.message }; }
    }
    rec.collected = true; rec.endedAt = new Date().toISOString(); save();
    return out;
  }
  async function direct(stage, customId, p) {
    if (opts.dryRun) { log(`dry run: ${stage} would call ${p.model} directly (${(JSON.stringify(p).length / 1024).toFixed(0)} KB)`); return { dryRun: true }; }
    const m = await api.message(p);
    ledger(stage, customId, p.model, m.usage, false);
    return { value: parse(m) };
  }
  return { dir, state, save, log, api, batch, direct, params, ledgerFile };
}

/* ---------- the spec: fetch → outline → topics → validate → judge → ship checks ---------- */
const SPEC_TITLE = (s) => `${s.board} ${s.level} ${s.subject} (${s.code})`;
const specVarName = (id) => 'SPEC_' + id.split('-').slice(1).join('_').replace(/[^A-Za-z0-9_]/g, '');
const specFileName = (id, board) => `${({ AQA: 'aqa', EDX: 'edexcel', OCR: 'ocr', EDQ: 'eduqas', WJEC: 'wjec' })[id.split('-')[0]] || String(board).toLowerCase().replace(/[^a-z]/g, '')}-${id.split('-').slice(1).join('-').toLowerCase()}.js`;

/* the same fetch as scripts/course.js: provenance from a HEAD, the PDF on disk under scratch/courses/<id>/ */
function fetchDocument(board, code, { url, scratch } = {}) {
  const args = [path.join(ROOT, 'scripts', 'course.js'), 'fetch', board, code].concat(url ? ['--url', url] : []);
  const env = { ...process.env }; if (scratch) env.COURSE_SCRATCH = scratch;
  const out = execFileSync(process.execPath, args, { encoding: 'utf8', env, stdio: ['ignore', 'pipe', 'pipe'] });
  return JSON.parse(out.slice(out.indexOf('{')));
}

/* What tests/spec.test.js will hold a shipped spec to, beyond the validator. */
function shipProblems(spec) {
  const out = [];
  const prior = FAMILIES[familyFor(spec.subject)];
  if (prior && spec.markConventions && spec.markConventions.style !== prior.markStyle) out.push(`markConventions.style is "${spec.markConventions.style}" but the platform's family prior for ${spec.subject} (${familyFor(spec.subject)}) marks by "${prior.markStyle}", and tests/spec.test.js requires them to agree — check the document's mark scheme and either the style or the subject's family in src/families.js`);
  return out.concat(caretProblems(spec));
}

async function runSpec({ board, code, subject, level, url, scratch, dryRun, poll, docMode = 'file', api, log: logFn, provenance, root = ROOT }) {
  const id = B.specIdFor(board, code);
  const R = runFor(id, { scratch, dryRun, poll, api, log: logFn });
  const { log } = R;
  const prov = R.state.provenance || provenance || fetchDocument(board, code, { url, scratch });
  if (!R.state.provenance) { R.state.provenance = prov; R.save(); }
  const params = { level: level || prov.level, subject: subject || prov.subject, board: prov.board || board, code: prov.code || code };
  if (!params.subject || !params.level) throw new Error(`${id}: subject and level are not in the catalogue — pass --subject and --level`);
  const source = { url: prov.url, etag: prov.etag, lastModified: prov.lastModified, length: prov.length, checkedAt: prov.checkedAt };
  if (docMode === 'file') {
    const stale = !R.state.fileId || (Date.now() - Date.parse(R.state.uploadedAt || 0)) > (FILE_DAYS - 1) * 86400e3;
    if (stale) {
      if (dryRun) log('dry run: would upload the PDF to the Files API');
      else { const up = await R.api.upload(prov.pdf); R.state.fileId = up.id; R.state.uploadedAt = new Date().toISOString(); R.save(); log(`uploaded the PDF as ${up.id} (${((up.size_bytes || 0) / 1024 / 1024).toFixed(1)} MB, expires ${up.expires_at || 'never'})`); }
    }
    source.fileId = R.state.fileId;
  }
  const family0 = familyFor(params.subject);
  const system = B.prompts.system();
  const filled = R.state.topics || (R.state.topics = {});

  let outline, family, spec, v, judge, score;
  for (let r = R.state.round = R.state.round || 1; r <= JUDGE_ROUNDS; r = R.state.round) {
    /* every round beyond the first opens with what the previous judge found wrong, phrased as an objection the
       shared outline prompt already knows how to act on (it was written for the validator's objections, so a
       judge finding is framed the same way rather than rewording that shared prompt for this one caller) */
    const judgeProblems = r > 1 && R.state.lastJudge ? [...(R.state.lastJudge.invented || []), ...(R.state.lastJudge.missing || [])].map(p => `a judge found: ${p}`) : null;

    /* 1. outline — one Opus call, direct: everything else waits for it, and it writes the document into Opus's cache */
    outline = R.state.outline;
    if (!outline) {
      const ask = (problems, tag) => R.direct('outline', cid(id, 'outline', `r${r}`, tag), R.params({ system, prompt: B.prompts.outline({ ...params, family: family0, problems }), source, schema: B.schemas.outline, model: MODELS.outline, maxTokens: MAX_TOKENS.outline }));
      let rr = await ask(judgeProblems, judgeProblems ? 'fix' : null);
      if (rr.dryRun) return { id, dryRun: true };
      let problems = outlineProblems(skeleton(rr.value, id, params));
      if (problems.length) { log(`outline refused by the validator (${problems.length}) — asking once more`); rr = await ask(problems, 'again'); problems = outlineProblems(skeleton(rr.value, id, params)); }
      if (problems.length) throw new Error(`${id}: outline refused twice: ${problems.slice(0, 4).join('; ')}`);
      outline = R.state.outline = rr.value; R.save();
    }
    family = FAMILIES[outline.family] ? outline.family : family0;
    spec = skeleton(outline, id, params);
    log(`${r > 1 ? `round ${r}: re-` : ''}outline: ${spec.topics.length} topics, ${spec.components.length} components, family ${family}`);

    /* 2. topics — a topic this round's outline kept under the same id, name, component and option keeps its earlier
          content rather than being rewritten and rebilled (a corrective round can rename a component's own id, which
          would otherwise leave a reused topic pointing at one that no longer exists); the first new or changed one is
          a direct call (it writes the document into Sonnet's cache), the rest go as one batch that reads it, then up
          to TOPIC_WRITE_ROUNDS - 1 more corrective batches for whatever the validator refuses about a topic's own
          content — never for a topic whose problem is really about its place in the outline (see OUTLINE_TOPIC_PROBLEM
          above), which no amount of rewriting fixes */
    for (const tid of Object.keys(filled)) { const t = spec.topics.find(x => x.id === tid); if (!t || t.name !== filled[tid].name || t.component !== filled[tid].component || t.option !== filled[tid].option) delete filled[tid]; }
    const topicPrompt = (t, problems) => R.params({ system, prompt: B.prompts.topic({ outline: spec, topic: t, family, problems }), source, schema: B.schemas.topic, model: MODELS.topic, maxTokens: MAX_TOKENS.topic });
    if (!filled[spec.topics[0].id]) {
      const rr = await R.direct('topic', cid(id, 'topic', spec.topics[0].id, `r${r}`), topicPrompt(spec.topics[0], null));
      if (rr.dryRun) return { id, dryRun: true };
      filled[spec.topics[0].id] = merge(spec.topics[0], rr.value); R.save();
    }
    const rest = spec.topics.filter(t => !filled[t.id]);
    const first = await R.batch(`topics-r${r}`, 'topic', rest.map(t => ({ custom_id: cid(id, 'topic', t.id, `r${r}`), params: topicPrompt(t, null) })));
    if (Object.values(first).some(v => v.dryRun)) return { id, dryRun: true };
    const problemsFor = {};
    for (const t of rest) { const rr = first[cid(id, 'topic', t.id, `r${r}`)]; if (rr.error) problemsFor[t.id] = [rr.error]; else filled[t.id] = merge(t, rr.value); }
    R.save();
    spec.topics = spec.topics.map(t => filled[t.id] || t);
    spec.topics.forEach((t, i) => { if (filled[t.id]) { const p = topicProblems(spec, i, filled[t.id]); if (p.length) problemsFor[t.id] = (problemsFor[t.id] || []).concat(p); } });
    /* a topic whose only problems are about its own content gets more tries at the same outline before anything
       escalates to a re-outline; a topic with a genuinely outline-structural problem (its id, name or component)
       can't be fixed by asking the writer again, so it isn't retried here — it surfaces below instead */
    for (let attempt = 2; attempt <= TOPIC_WRITE_ROUNDS; attempt++) {
      const again = spec.topics.filter(t => problemsFor[t.id] && problemsFor[t.id].every(p => !OUTLINE_TOPIC_PROBLEM.test(p)));
      if (!again.length) break;
      log(`${again.length} topic(s) refused by the validator — corrective batch ${attempt - 1} of ${TOPIC_WRITE_ROUNDS - 1}`);
      const tag = attempt === 2 ? 'again' : `again${attempt - 1}`;
      const retry = await R.batch(`topics-r${r}-${tag}`, 'topic', again.map(t => ({ custom_id: cid(id, 'topic', t.id, `r${r}`, tag), params: topicPrompt(t, problemsFor[t.id].slice(0, 8)) })));
      if (Object.values(retry).some(v => v.dryRun)) return { id, dryRun: true };
      for (const t of again) { const rr = retry[cid(id, 'topic', t.id, `r${r}`, tag)]; if (rr.error) { problemsFor[t.id] = [rr.error]; continue; } filled[t.id] = merge(t, rr.value); delete problemsFor[t.id]; }
      R.save();
      spec.topics = spec.topics.map(t => filled[t.id] || t);
      spec.topics.forEach((t, i) => { if (filled[t.id] && !problemsFor[t.id]) { const p = topicProblems(spec, i, filled[t.id]); if (p.length) problemsFor[t.id] = p; } });
    }
    v = validateSpec(spec);
    if (!v.ok) {
      fs.writeFileSync(path.join(R.dir, 'spec.refused.json'), JSON.stringify({ problems: v.problems, spec }, null, 1));
      if (r >= JUDGE_ROUNDS) throw new Error(`${id}: refused by the validator after the corrective round — ${v.problems.slice(0, 4).join('; ')} (the draft is in ${path.relative(ROOT, path.join(R.dir, 'spec.refused.json'))})`);
      /* a round that regenerated the outline can introduce a validator problem the previous round never had —
         that costs the rest of this round, not the whole run, while rounds remain: the same findings-as-objection
         mechanism a low judge score uses picks it up next round, this time from the validator rather than the judge.
         A topic the validator names keeps its content cached across a round change only when the outline actually
         changed something about it (see the pruning above) — its content is known bad, so drop it too, or an
         unchanged outline would just resubmit the same answer and fail identically next round. */
      log(`refused by the validator after the corrective round (${v.problems.length}) — round ${r + 1} of ${JUDGE_ROUNDS}: re-outlining with the validator's own findings as the objection`);
      for (const p of v.problems) { const m = /^topic "([^"]+)"/.exec(p); if (m) delete filled[m[1]]; }
      R.state.lastJudge = { invented: v.problems.slice(0, 8), missing: [] };
      R.state.round = r + 1; R.state.outline = null; R.state.judge = null; R.save();
      continue;
    }

    /* 3. judge — Opus, fresh context, one request in a batch of one */
    judge = R.state.judge;
    if (!judge) {
      const rr = await R.batch(`judge-r${r}`, 'judge', [{ custom_id: cid(id, 'judge', `r${r}`), params: R.params({ system, prompt: B.prompts.judge({ family, spec }), source, schema: B.schemas.judge, model: MODELS.judge, maxTokens: MAX_TOKENS.judge }) }]);
      const jj = rr[cid(id, 'judge', `r${r}`)]; if (jj.dryRun) return { id, dryRun: true }; if (jj.error) throw new Error(`${id}: the judge failed — ${jj.error}`);
      judge = R.state.judge = jj.value; R.state.lastJudge = judge; R.save();
    }
    score = Number(judge.score) || 0;
    fs.writeFileSync(path.join(R.dir, 'judge.json'), JSON.stringify({ ...judge, round: r }, null, 1));
    log(`${r > 1 ? `round ${r}: ` : ''}judged ${Math.round(score * 100)}% (coverage ${judge.coverage}, fidelity ${judge.fidelity}, options ${judge.options}, family fit ${judge.familyFit}) · ${v.ideas} key ideas`);
    if (judge.invented && judge.invented.length) log(`invented (not in the document): ${judge.invented.slice(0, 6).join('; ')}`);
    if (judge.missing && judge.missing.length) log(`missing sections: ${judge.missing.slice(0, 6).join('; ')}`);

    if (score >= B.PUBLISH_SCORE || r >= JUDGE_ROUNDS) break;
    log(`below ${Math.round(B.PUBLISH_SCORE * 100)}% — round ${r + 1} of ${JUDGE_ROUNDS}: re-outlining with the judge's own findings as the objection`);
    R.state.round = r + 1; R.state.outline = null; R.state.judge = null; R.save();
  }

  spec.source = source.fileId ? { url: source.url, etag: source.etag, lastModified: source.lastModified, length: source.length, checkedAt: source.checkedAt } : { ...source };
  const held = shipProblems(spec);
  if (score < B.PUBLISH_SCORE) held.unshift(`judged ${Math.round(score * 100)}% after ${R.state.round} round(s) of ${JUDGE_ROUNDS}, below the ${Math.round(B.PUBLISH_SCORE * 100)}% the platform publishes at — read judge.json and fix by hand, or build this one in a session`);
  const published = !held.length;
  const file = writeSpecFile(spec, { judge, family, dir: published ? path.join(root, 'src', 'specs') : R.dir, id });
  log(path.relative(root, file));
  for (const h of held) log(`HELD: ${h}`);
  return { id, spec, judge, score, family, file, published, held, rounds: R.state.round, cost: costReport(R.ledgerFile) };
}

function writeSpecFile(spec, { judge, family, dir, id }) {
  const name = specVarName(id), file = path.join(dir, specFileName(id, spec.board));
  const score = Math.round((Number(judge.score) || 0) * 100);
  const head = `/* ${SPEC_TITLE(spec)} — built on the Message Batches API from the official specification PDF (see spec.source for
   provenance) with the Worker's own pipeline: ${MODELS.outline} outlined, ${MODELS.topic} mapped each topic, ${MODELS.judge} judged the map
   against the document at ${score}% (coverage ${judge.coverage}, fidelity ${judge.fidelity}, options ${judge.options}, family fit ${judge.familyFit}).
   Family: ${family}. Content statements are the board's own, condensed; codes are copied character for character.
   Judge's notes: ${String(judge.notes || '').replace(/\*\//g, '* /').slice(0, 600)} */\n`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, head + `const ${name} = ${JSON.stringify(spec, null, 1)};\nmodule.exports = { ${name} };\n`);
  return file;
}

/* the builder's private helpers, identical in behaviour */
function skeleton(o, id, params) {
  return {
    id, board: o.board || params.board, subject: o.subject || params.subject, code: o.code || params.code, level: o.level || params.level,
    version: o.version || '', firstExam: o.firstExam || null, essaySubject: !!o.essaySubject,
    components: (o.components || []).map(c => { const x = { id: c.id, name: c.name, paperCode: c.paperCode || undefined, marks: c.marks, weight: c.weight, minutes: c.minutes, sections: c.sections || [] }; if (c.nea) x.nea = true; if (c.coversAll) x.coversAll = true; return x; }),
    options: (o.options || []).map(x => ({ id: x.id, label: x.label, choose: x.choose, from: x.from || [] })),
    ao: o.ao || [], markConventions: o.markConventions || {},
    topics: (o.topics || []).map(t => ({ id: t.id, component: t.component, option: t.option || null, name: t.name, caseStudies: [], ideas: [] })),
  };
}
const DUMMY = [{ code: '_1', q: 'placeholder', idea: 'placeholder', content: 'placeholder content long enough to pass the contract' }, { code: '_2', q: 'placeholder', idea: 'placeholder', content: 'placeholder content long enough to pass the contract' }];
const withDummyIdeas = spec => ({ ...spec, topics: spec.topics.map(t => ({ ...t, ideas: t.ideas && t.ideas.length >= 2 ? t.ideas : DUMMY, caseStudies: t.caseStudies || [] })) });
function outlineProblems(spec) {
  if (!spec.topics.length) return ['the outline has no topics'];
  if (spec.topics.length > B.MAX_TOPICS) return [`the outline has ${spec.topics.length} topics; the limit is ${B.MAX_TOPICS} — merge sub-sections into their parent sections`];
  return validateSpec(withDummyIdeas(spec)).problems;
}
function merge(t, r) { r = r || {}; return { ...t, ideas: Array.isArray(r.ideas) ? r.ideas : [], caseStudies: Array.isArray(r.caseStudies) ? r.caseStudies : [], skills: Array.isArray(r.skills) && r.skills.length ? r.skills : undefined }; }
/* Unlike the Worker's copy, the topic under test keeps its real ideas, so an answer with one idea (or none) is caught
   here and sent back with the objection instead of failing the whole map at the end. */
function topicProblems(spec, i, filled) {
  const trial = { ...spec, topics: spec.topics.map((t, j) => j === i ? { ...filled, ideas: filled.ideas || [], caseStudies: filled.caseStudies || [] } : (t.ideas && t.ideas.length >= 2 ? { ...t, caseStudies: t.caseStudies || [] } : { ...t, ideas: DUMMY, caseStudies: t.caseStudies || [] })) };
  return validateSpec(trial).problems.filter(p => p.includes(`topic "${filled.id}"`));
}

/* ---------- the kits: write → validate → judge → one rewrite with the objections → judge ---------- */
function specFor(id, root = ROOT) { const dir = path.join(root, 'src', 'specs'); if (!fs.existsSync(dir)) return null; for (const f of fs.readdirSync(dir)) { const m = require(path.join(dir, f)); for (const sp of Object.values(m)) if (sp && sp.id === id) return sp; } return null; }

async function runKits({ id, spec, scratch, dryRun, poll, api, log: logFn, only, root = ROOT }) {
  spec = spec || specFor(id, root);
  if (!spec) throw new Error(`no spec with id ${id} in src/specs/ — build the spec first`);
  const R = runFor(id, { scratch, dryRun, poll, api, log: logFn });
  const { log } = R;
  const family = spec.family || familyFor(spec.subject);
  const system = D.kitPrompts.system();
  const topics = only ? spec.topics.filter(t => only.includes(t.id)) : spec.topics;
  const write = (t, problems) => R.params({ system, prompt: D.kitPrompts.write({ spec, topic: t, family, problems }), schema: D.kitSchemas.kit, model: MODELS.write, maxTokens: MAX_TOKENS.write });
  const judge = (t, kit) => R.params({ system, prompt: D.kitPrompts.judge({ spec, topic: t, family, kit }), schema: D.kitSchemas.judge, model: MODELS.judgeKit, maxTokens: MAX_TOKENS.judgeKit });
  const kits = R.state.kits || (R.state.kits = {});   /* topic → { attempt, round, kit, written, judged, verdict, problems, done, at } */
  /* an attempt is one run of this command; a run that was interrupted is resumed under its own attempt number */
  if (!R.state.inflight) { R.state.attempt = (R.state.attempt || 0) + 1; R.state.inflight = true; if (!dryRun) R.save(); }
  const a = R.state.attempt;
  const pending = topics.filter(t => !kits[t.id] || !kits[t.id].done);

  const round = async (n, list) => {
    const tag = `a${a}r${n}`;
    const needWrite = list.filter(({ t }) => { const k = kits[t.id]; return !(k && k.attempt === a && k.round === n && k.written); });
    const w = await R.batch(`kits-${tag}-write`, 'write', needWrite.map(({ t, problems }) => ({ custom_id: cid(id, 'write', t.id, tag), params: write(t, problems) })));
    if (Object.values(w).some(v => v.dryRun)) return 'dry';
    for (const { t } of needWrite) {
      const r = w[cid(id, 'write', t.id, tag)];
      const k = kits[t.id] = { ...(kits[t.id] || {}), attempt: a, round: n, written: true, judged: false, verdict: null, done: false };
      if (r.error) { k.kit = null; k.problems = [r.error]; continue; }
      const v = validateKit(r.value, t, family);
      k.kit = r.value; k.problems = v.problems.map(p => 'refused by the validator: ' + p).concat(caretProblems(r.value));
    }
    R.save();
    const toJudge = list.map(x => x.t).filter(t => { const k = kits[t.id]; return k && k.attempt === a && k.round === n && k.kit && !k.problems.length && !k.judged; });
    const j = await R.batch(`kits-${tag}-judge`, 'judgeKit', toJudge.map(t => ({ custom_id: cid(id, 'judge', t.id, tag), params: judge(t, kits[t.id].kit) })));
    if (Object.values(j).some(v => v.dryRun)) return 'dry';
    for (const t of toJudge) {
      const r = j[cid(id, 'judge', t.id, tag)]; const k = kits[t.id]; k.judged = true;
      if (r.error) { k.problems = ['the judge failed: ' + r.error]; continue; }
      k.verdict = r.value; k.problems = D.judgeProblems(r.value);
      if (!k.problems.length) { k.done = true; k.at = new Date().toISOString(); }
    }
    R.save();
    return 'ok';
  };

  if (pending.length) {
    log(`attempt ${a}: ${pending.length} room(s) to write · family ${family}`);
    if ((await round(1, pending.map(t => ({ t, problems: null })))) === 'dry') return { id, dryRun: true };
    const again = pending.filter(t => !kits[t.id].done);
    if (again.length) {
      log(`${again.length} room(s) refused in round 1 — one rewrite with the objections`);
      /* a room whose write or judge errored (no content to object to) gets a fresh write rather than a "rewrite" */
      if ((await round(2, again.map(t => ({ t, problems: kits[t.id].kit ? kits[t.id].problems.slice(0, 8) : null })))) === 'dry') return { id, dryRun: true };
    }
  } else log(`every room already has a judged kit — nothing to write`);
  R.state.inflight = false; R.save();
  const passed = topics.filter(t => kits[t.id] && kits[t.id].done), failed = topics.filter(t => !kits[t.id] || !kits[t.id].done);
  const allPassed = spec.topics.filter(t => kits[t.id] && kits[t.id].done), allFailed = spec.topics.filter(t => !kits[t.id] || !kits[t.id].done);
  const file = writeKitsFile(spec, family, kits, { passed: allPassed, failed: allFailed, root });
  log(`${passed.length} of ${topics.length} rooms judged ${Math.round(D.KIT_SCORE * 100)}% or above · ${allPassed.length} of ${spec.topics.length} shipped in ${path.relative(root, file)}${allFailed.length ? ` · without a kit: ${allFailed.map(t => t.id).join(', ')}` : ''}`);
  return { id, passed: passed.map(t => t.id), failed: failed.map(t => ({ topic: t.id, problems: (kits[t.id] && kits[t.id].problems) || [] })), file, cost: costReport(R.ledgerFile) };
}

function writeKitsFile(spec, family, kits, { passed, failed, root = ROOT }) {
  const out = {};
  for (const t of passed) {
    const k = kits[t.id];
    out[t.id] = { id: spec.id, topic: t.id, family, lesson: k.kit.lesson, room: k.kit.room, cards: k.kit.cards, extras: k.kit.extras || [],
      built: { at: k.at, by: 'batch-api', models: [MODELS.write, MODELS.judgeKit], promptVersion: D.KIT_PROMPT_VERSION, judge: { score: Number(k.verdict.score) || 0, notes: k.verdict.notes || '' } } };
  }
  const dir = path.join(root, 'src', 'kits'); fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, spec.id + '.js');
  const left = failed.length ? `\n   Rooms without a kit after one rewrite — a rerun of "node scripts/batch-course.js kits ${spec.id}" retries only these:\n   ${failed.map(t => `${t.id} — ${((kits[t.id] && kits[t.id].problems) || ['no answer']).slice(0, 2).join('; ').replace(/\*\//g, '* /').slice(0, 160)}`).join('\n   ')}` : '';
  fs.writeFileSync(file, `/* ${SPEC_TITLE(spec)} — room kits built on the Message Batches API with the Worker's depth pipeline: written by\n   ${MODELS.write} to the contract in src/kit-validator.js, every question re-solved and the lesson read against the\n   specification map by ${MODELS.judgeKit} in a fresh context, one rewrite on objections. See .claude/skills/course-builder/references/batch.md.${left} */\nmodule.exports = { ID: '${spec.id}', KITS: ${JSON.stringify(out)} };\n`);
  return file;
}

/* ---------- the cost report ---------- */
function readLedger(file) { return fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l)) : []; }
function costReport(file) {
  const rows = readLedger(file); const by = {}; let usd = 0; const tok = { in: 0, out: 0, read: 0, write: 0 };
  for (const r of rows) {
    const k = `${r.stage} · ${r.model}${r.batch ? '' : ' (direct)'}`; const b = by[k] = by[k] || { requests: 0, usd: 0, in: 0, out: 0, read: 0, write: 0 };
    const u = r.usage || {};
    b.requests++; b.usd += r.usd; usd += r.usd;
    for (const [key, field] of [['in', 'input_tokens'], ['out', 'output_tokens'], ['read', 'cache_read_input_tokens'], ['write', 'cache_creation_input_tokens']]) { b[key] += u[field] || 0; tok[key] += u[field] || 0; }
  }
  return { requests: rows.length, usd: Math.round(usd * 1e4) / 1e4, tokens: tok, by };
}
function printCost(id, report, gbp) {
  const lines = [`${id}: ${report.requests} request(s) · $${report.usd.toFixed(2)} (about £${(report.usd * gbp).toFixed(2)} at ${gbp} £ per $)`];
  for (const [k, b] of Object.entries(report.by)) lines.push(`  ${k.padEnd(36)} ${String(b.requests).padStart(3)} req · in ${b.in.toLocaleString()} · cache read ${b.read.toLocaleString()} · cache write ${b.write.toLocaleString()} · out ${b.out.toLocaleString()} · $${b.usd.toFixed(3)}`);
  return lines.join('\n');
}

/* ---------- the roadmap's waves ---------- */
function waveCourses(n, roadmap = fs.readFileSync(path.join(ROOT, 'docs', 'course-roadmap.md'), 'utf8')) {
  const m = new RegExp(`### Wave ${n}\\b[^\\n]*\\n([\\s\\S]*?)(?=\\n### |$)`).exec(roadmap);
  if (!m) throw new Error(`no "### Wave ${n}" in docs/course-roadmap.md`);
  const out = [];
  for (const line of m[1].split('\n')) {
    const c = line.split('|').map(s => s.trim()); if (c.length < 7 || !/^\d+$/.test(c[1])) continue;
    out.push({ rank: Number(c[1]), level: c[2], subject: c[3], board: c[4], code: c[5], id: B.specIdFor(c[4], c[5]) });
  }
  return out;
}

/* ---------- CLI ---------- */
async function main(argv) {
  const cmd = argv[0]; const flag = (n) => { const i = argv.indexOf('--' + n); return i > 0 ? argv[i + 1] : null; }; const has = (n) => argv.includes('--' + n);
  const common = { dryRun: has('dry-run'), poll: Number(flag('poll')) || 30, docMode: flag('doc') || 'file' };
  const gbp = Number(flag('gbp')) || 0.75;
  const base = process.env.COURSE_SCRATCH || path.join(ROOT, 'scratch', 'courses');
  const ledgerOf = (id) => path.join(base, id, 'batch', 'ledger.jsonl');
  const install = (id) => { try { console.log(execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'course.js'), 'install', id], { encoding: 'utf8' }).trim()); } catch (e) { console.log('install:', String(e.stdout || e.message).trim()); } };
  const heldNote = (r) => `${r.id}: HELD — ${r.held.join(' · ')}. The draft and judge.json are in scratch/courses/${r.id}/batch/; fix what is named, move the file to src/specs/, then: node scripts/batch-course.js kits ${r.id}`;
  if (cmd === 'spec' || cmd === 'course') {
    const [board, code] = [argv[1], argv[2]]; if (!board || !code) throw new Error(`usage: ${cmd} <board> <code> [--url https://…pdf]`);
    const r = await runSpec({ board, code, url: flag('url'), subject: flag('subject'), level: flag('level'), ...common });
    if (r.dryRun) return;
    console.log(printCost(r.id, r.cost, gbp));
    if (!r.published) { console.log(heldNote(r)); process.exitCode = 2; return; }
    if (cmd === 'course') { const k = await runKits({ id: r.id, spec: r.spec, ...common }); if (k.dryRun) return; console.log(printCost(k.id, k.cost, gbp)); install(r.id); console.log('now run: npm test'); }
  } else if (cmd === 'kits') {
    const id = argv[1]; if (!id) throw new Error('usage: kits <id> [--only t1,t2]');
    const k = await runKits({ id, only: flag('only') ? flag('only').split(',') : null, ...common }); if (k.dryRun) return; console.log(printCost(k.id, k.cost, gbp)); console.log('now run: npm test');
  } else if (cmd === 'wave') {
    const n = argv[1]; if (!n) throw new Error('usage: wave <n> [--parallel 3] [--skip <id>,…] [--url <id>=https://…pdf …]');
    const skip = new Set((flag('skip') || '').split(',').map(x => x.trim()).filter(Boolean));
    const parallel = Number(flag('parallel')) || 3;
    /* a course whose PDF is not on a verified catalogue link takes its URL here, e.g. --url AQA-8652=https://…pdf */
    const urls = {}; argv.forEach((a, i) => { if (a === '--url' && /^[A-Z]+-[A-Z0-9]+=/.test(argv[i + 1] || '')) { const [cid, ...rest] = argv[i + 1].split('='); urls[cid] = rest.join('='); } });
    const all = waveCourses(n), todo = all.filter(c => !specFor(c.id) && !skip.has(c.id));
    if (skip.size) console.log(`skipping ${[...skip].join(', ')}`);
    console.log(`wave ${n}: ${todo.length} of ${all.length} course(s) not yet built — ${todo.map(c => c.id).join(', ') || 'none'}`);
    const results = []; let i = 0;
    const worker = async () => { while (i < todo.length) { const c = todo[i++]; try {
      const r = await runSpec({ board: c.board, code: c.code, subject: c.subject, level: c.level, url: urls[c.id] || null, ...common });
      if (r.dryRun) { results.push({ id: c.id, dryRun: true }); continue; }
      if (!r.published) { results.push({ id: c.id, status: `spec HELD — ${r.held[0]}`, cost: r.cost }); continue; }
      const k = await runKits({ id: c.id, spec: r.spec, ...common }); install(c.id);
      results.push({ id: c.id, status: `built · ${k.passed.length} of ${r.spec.topics.length} rooms judged and shipped`, cost: costReport(ledgerOf(c.id)) });
    } catch (e) { results.push({ id: c.id, status: 'FAILED — ' + e.message, cost: costReport(ledgerOf(c.id)) }); } } };
    await Promise.all(Array.from({ length: Math.min(parallel, todo.length) }, worker));
    let total = 0;
    for (const r of results) { if (r.dryRun) continue; total += r.cost.usd; console.log(`${r.id.padEnd(10)} ${r.status} · $${r.cost.usd.toFixed(2)}`); }
    if (results.some(r => !r.dryRun)) console.log(`wave ${n} total: $${total.toFixed(2)} (about £${(total * gbp).toFixed(2)}) — now run: npm test`);
  } else if (cmd === 'cost') {
    const ids = argv[1] ? [argv[1]] : (fs.existsSync(base) ? fs.readdirSync(base).filter(d => fs.existsSync(ledgerOf(d))) : []);
    let total = 0; for (const id of ids) { const r = costReport(ledgerOf(id)); total += r.usd; console.log(printCost(id, r, gbp)); }
    if (ids.length > 1) console.log(`total: $${total.toFixed(2)} (about £${(total * gbp).toFixed(2)})`);
    if (!ids.length) console.log('no ledgers yet — nothing has been built on the batch path');
  } else console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 16).join('\n'));
}

module.exports = { runSpec, runKits, costOf, costReport, waveCourses, anthropicBatches, writeSpecFile, shipProblems, specFileName, specVarName, MODELS, PRICES, JUDGE_ROUNDS, TOPIC_WRITE_ROUNDS, OUTLINE_TOPIC_PROBLEM };
if (require.main === module) main(process.argv.slice(2)).catch(e => { console.error('batch-course.js:', e.message); process.exit(1); });
