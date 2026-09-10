/**
 * Course builder — turns a board's specification PDF into a specification map the platform can run,
 * to the same contract the hand-written specs meet (src/spec-validator.js), with the family rules
 * in src/families.js deciding how a maths course differs from a history one.
 *
 * runBuild(params, deps)   the pipeline: locate/verify the document → outline → one call per topic →
 *                          validate (one corrective retry per topic) → judge → resources (never fatal) → publish or queue
 * runReview(specId, deps)  the monthly pass: HEAD-compare provenance; only if the document changed,
 *                          rebuild to a draft, diff against the published spec, file a proposal
 * diffSpecs(a, b)          topic-level diff, with `breaking` set when student progress would be orphaned
 * anthropicAI(env)         the real `deps.ai`; tests supply canned answers
 *
 * deps = { kv, step, ai: {outline, topic, judge, locate, docChanges, resources}, head(url), now(), boardDomains }
 *                          (resources is optional: without it a course is published with no hub pages)
 * The Workflow classes that give this durability live in index.js; this file has no Cloudflare imports
 * so the pipeline can be run and tested anywhere.
 */
import { validateSpec } from '../src/spec-validator.js';
import { FAMILIES, familyFor, familyText } from '../src/families.js';

export const PROMPT_VERSION = '2026-09-10.4';
export const PUBLISH_SCORE = 0.8;
export const MAX_TOPICS = 40;
export const MODELS = { outline: 'claude-opus-5', topic: 'claude-sonnet-5', judge: 'claude-opus-5', locate: 'claude-sonnet-5', docChanges: 'claude-sonnet-5', resources: 'claude-sonnet-5' };
/* Sites the resources step may search for revision hub pages, on top of the board's own domains. */
export const RESOURCE_DOMAINS = ['bbc.co.uk', 'physicsandmathstutor.com', 'savemyexams.com', 'senecalearning.com'];
const LINK_KINDS = ['video', 'notes', 'practice', 'official'];

const PREFIX = { 'aqa': 'AQA', 'pearson edexcel': 'EDX', 'edexcel': 'EDX', 'pearson': 'EDX', 'ocr': 'OCR', 'eduqas': 'EDQ', 'wjec': 'WJEC', 'ccea': 'CCEA', 'cambridge': 'CIE' };
export function specIdFor(board, code) {
  const p = PREFIX[String(board || '').trim().toLowerCase()] || String(board || '').replace(/[^A-Za-z]/g, '').slice(0, 5).toUpperCase() || 'X';
  return `${p}-${String(code || '').trim().toUpperCase()}`;
}

/* ---------- schemas (structured outputs: every object closed, every field required) ---------- */
const S = (properties, extra = {}) => ({ type: 'object', properties, required: Object.keys(properties), additionalProperties: false, ...extra });
const arr = items => ({ type: 'array', items });
const str = { type: 'string' }, num = { type: 'number' }, int = { type: 'integer' }, bool = { type: 'boolean' };
export const schemas = {
  outline: S({
    board: str, subject: str, code: str, level: { type: 'string', enum: ['A level', 'GCSE'] }, version: str, firstExam: int, essaySubject: bool,
    family: { type: 'string', enum: Object.keys(FAMILIES) },
    components: arr(S({ id: str, name: str, paperCode: str, marks: int, weight: num, minutes: int, nea: bool, coversAll: bool, sections: arr(str) })),
    options: arr(S({ id: str, label: str, choose: int, from: arr(str) })),
    ao: arr(S({ id: str, label: str, text: str })),
    markConventions: S({ style: { type: 'string', enum: ['levels', 'points'] }, summary: str, commandWords: arr(S({ word: str, means: str })), essayShapes: arr(S({ marks: int, minutes: int, structure: str })) }),
    topics: arr(S({ id: str, component: str, option: { type: ['string', 'null'] }, name: str })),
  }),
  topic: S({ ideas: arr(S({ code: str, q: str, idea: str, content: str })), caseStudies: arr(str), skills: arr(str) }),
  judge: S({ score: num, coverage: num, fidelity: num, options: num, familyFit: num, invented: arr(str), missing: arr(str), changes: arr(str), notes: str }),
  docChanges: S({ changes: arr(str), notes: str }),
};

/* ---------- prompts: the skill's procedure, addressed to the model ---------- */
const SHAPE = `A specification map has: id, board, subject, code, level ("A level" or "GCSE"), version (the document's issue and date, verbatim), firstExam (year), essaySubject, components (every paper: id, name, paperCode — only if the document prints one, else an empty string —, marks, weight — the document's own percentage, so six equal papers are 16.7 each, never rounded to 17/16 —, minutes, nea, coversAll, sections — the document's own statement of which content each paper examines), options (where the document says choose N of these topics: id, label, choose, from = topic ids), ao (assessment objectives with the document's wording), markConventions (style "levels" or "points"; summary; commandWords with what each demands; essayShapes), and topics (the document's own sections in its own order: id = the document's code, component, option or null, name). Each topic then carries ideas (code, q, idea, content — content in the board's own terms, never paraphrased into vagueness), caseStudies, skills.`;
const RULES = `Work only from the document provided. Every code, number, weight and option must be traceable to it. If the document does not say, leave the field minimal rather than inventing. Reply with JSON matching the schema and nothing else.
Codes are copied character for character from the document, spaces included ("WS 1.1", not "WS1.1"; "3", not "WS"). Never subdivide a code the document does not subdivide (no "4.3.1.6a"/"4.3.1.6b": one key idea per numbered statement, however much it covers). Never append tier or other labels to a code ("4.5.3.2", not "4.5.3.2HT": say "Higher tier only" in the content). Where a table numbers items without a section prefix, the bare number is the code — codes only need to be unique within their topic. Do not invent aggregate topics or codes the document does not have.`;

export const prompts = {
  system: () => `You build specification maps for a study platform used by UK students. ${SHAPE} ${RULES}`,
  outline: ({ level, subject, board, code, family, problems }) => `The document is the official ${board} ${level} ${subject} (${code}) specification. Produce the outline of its specification map: identity, components, options, assessment objectives, mark conventions, and the list of topics — WITHOUT key ideas (those come next, topic by topic).

Family rules for this subject:
${familyText(family)}

Set "family" to the family that fits the document (the rules above are the prior; the document decides). Topics are the sections a student is examined on, in the document's order, with the document's own section numbers as ids (never an abbreviation); at most ${MAX_TOPICS}. Components' weights are the document's own percentages and must sum to 100 within rounding. paperCode is the paper's code only where the document prints one; otherwise leave it empty rather than composing one from the entry code. Anything the document says students are given in the exam (a data sheet, periodic table, equation sheet, formulae booklet) is examined content: give each its own topic under the component that uses it, or one "Given in the exam" topic. Front matter that is not examined (aims, overview, administration) is not a topic.

Every topic belongs to exactly ONE component, and its "component" must be one of the ids in your components list — never a made-up id such as "all". Content the document assesses on every paper (working scientifically, key ideas, mathematical skills, practical skills) goes under the component that examines it most, or is split into one topic per component; if a component genuinely has no sections of its own (a synoptic paper), mark it coversAll and give it no topics.${problems ? `\n\nYour previous outline was refused by the validator for these reasons — fix every one:\n- ${problems.join('\n- ')}` : ''}`,
  topic: ({ outline, topic, family, problems }) => `From the document, fill in topic ${topic.id} "${topic.name}" (component ${topic.component}${topic.option ? ', option ' + topic.option : ''}) of the ${outline.board} ${outline.level} ${outline.subject} (${outline.code}) specification map.

Family rules for this subject:
${familyText(family)}

Give every key idea the document lists under this section: code (the document's own numbering under ${topic.id}, copied exactly — no invented sub-codes, no tier suffixes), q (the question the idea answers), idea (the concept in a phrase), content (what the document requires, in its own terms, at least a full sentence; say "Higher tier only" in the content where the document marks it so). At least two ideas; the document decides the real number. caseStudies and skills as the family rules say, and nothing the document does not state.${problems ? `\n\nYour previous answer for this topic was refused by the validator for these reasons — fix every one:\n- ${problems.join('\n- ')}` : ''}`,
  judge: ({ family, spec }) => `Judge this draft specification map against the document. Score each dimension 0 to 1: coverage (every examined section is a topic and every content statement is a key idea), fidelity (every code, weight, mark, minute and option rule matches the document), options (the document's choices are modelled exactly), familyFit (the family rules below are followed). The overall score is the MINIMUM of the four, not the mean. Any invented code or topic caps fidelity at 0.4; each missing examined section caps coverage at 0.7. Weights that are the document's own percentages within rounding, and an empty paperCode where the document prints none, are faithful. Front matter the document does not examine (aims, overview, administration) is not a missing section. Also list: invented (codes or topics not in the document), missing (document sections with no topic), changes (anything the document says about changes from a previous issue, errata, withdrawn options, first-assessment dates), notes (one paragraph a teacher would find useful).

Family rules:
${familyText(family)}

Draft:
${spec ? JSON.stringify(spec) : ''}`,
  locate: ({ level, subject, board, code, domains }) => `Find the URL of the current official ${board} ${level} ${subject} specification PDF (qualification code ${code}). It must be a PDF on one of these domains: ${domains.join(', ')}. Search, then reply with the URL alone on the last line.`,
  resources: ({ level, subject, board, code }) => `Find the best free revision hub pages for ${board} ${level} ${subject} (qualification code ${code}) — one page per site where one exists, specific to this board and level, not a generic subject page: BBC Bitesize, Physics & Maths Tutor, Save My Exams, Seneca Learning, and ${board}'s own page for the qualification. Search, then reply with the links alone on the last lines, one per line, exactly as: name | kind | url — where kind is one of video, notes, practice, official. Nothing after the list.`,
  docChanges: ({ oldVersion, newVersion }) => `The previous edition of this specification map was built from "${oldVersion}"; this document is "${newVersion}". From the document alone, list what it says has changed since the previous issue — errata, changed mark allocations, added or withdrawn options, first-assessment dates — as short plain statements. If it says nothing about changes, return an empty list.`,
};

/* ---------- the pipeline ---------- */

export async function runBuild(params, deps, opts = {}) {
  const { kv, step, ai, head, now } = deps;
  const draft = !!opts.draft;
  const id = specIdFor(params.board, params.code);
  const family0 = familyFor(params.subject);
  const rec = { id, level: params.level, subject: params.subject, board: params.board, code: params.code, requestedBy: params.requestedBy || null,
    status: 'building', stage: 'Finding the specification', done: 0, total: 4, message: 'Finding the official specification…', startedAt: now(), updatedAt: now(), error: null, draft };
  const save = async (patch) => { Object.assign(rec, patch, { updatedAt: now() }); await kv.put(`build:${id}`, JSON.stringify(rec)); return rec; };
  const fail = (error, status = 'failed') => save({ status, error, message: status === 'needs-link' ? 'Chris needs to add a link to this specification before it can be built.' : `Could not build this course: ${error}` });
  await save({});

  try {
    /* 1. the document */
    const domains = (deps.boardDomains && deps.boardDomains[params.board]) || [];
    const source = await step.do('fetch document', async () => {
      let url = params.specUrl || null, located = false;
      if (!url) { const r = await ai.locate({ prompt: prompts.locate({ ...params, domains }), ...params, domains }); url = r && r.url; located = true; }
      if (!url || !onDomain(url, domains)) return { problem: url ? `the located URL is not on ${params.board}'s domain (${url})` : 'no specification URL' };
      const h = await head(url);
      if (!h || !h.ok || !/pdf/i.test(h.contentType || '')) return { problem: `${url} is not a PDF (${h && h.status} ${h && h.contentType})` };
      return { url, etag: h.etag || null, lastModified: h.lastModified || null, length: h.length || null, located, checkedAt: now() };
    });
    if (source.problem) return fail(source.problem, 'needs-link');
    await save({ done: 1, stage: 'Reading the specification', message: 'Reading the specification document…', sourceUrl: source.url });

    /* 2. outline */
    const outlined = await step.do('outline', async () => {
      const ask = (problems) => ai.outline({ prompt: prompts.outline({ ...params, family: family0, problems }), url: source.url, schema: schemas.outline, model: MODELS.outline, problems });
      let outline = await ask(null);
      let problems = outlineProblems(skeleton(outline, id, params));
      if (problems.length) { outline = await ask(problems); problems = outlineProblems(skeleton(outline, id, params)); }
      return { outline, problems };
    });
    if (outlined.problems.length) return fail('outline refused twice: ' + outlined.problems.slice(0, 4).join('; '));
    const outline = outlined.outline;
    const family = FAMILIES[outline.family] ? outline.family : family0;
    const spec = skeleton(outline, id, params);
    const total = 5 + spec.topics.length;
    await save({ done: 2, total, family, stage: 'Mapping topics', message: `Mapping topic 1 of ${spec.topics.length}…` });

    /* 3. topics, one call each, one corrective retry */
    for (let i = 0; i < spec.topics.length; i++) {
      const t = spec.topics[i];
      const result = await step.do(`topic ${t.id}`, async () => {
        const ask = (problems) => ai.topic({ prompt: prompts.topic({ outline: spec, topic: t, family, problems }), url: source.url, schema: schemas.topic, model: MODELS.topic, topic: t, problems });
        let filled = merge(t, await ask(null));
        let problems = topicProblems(spec, i, filled);
        if (problems.length) { filled = merge(t, await ask(problems)); problems = topicProblems(spec, i, filled); }
        return { filled, problems };
      });
      if (result.problems.length) return fail(`topic "${t.id}" was refused twice: ${result.problems.slice(0, 3).join('; ')}`);
      spec.topics[i] = result.filled;
      await save({ done: 2 + i + 1, message: i + 1 < spec.topics.length ? `Mapping topic ${i + 2} of ${spec.topics.length}…` : 'Checking the whole map…' });
    }

    /* 4. the whole thing */
    const v = await step.do('validate', () => validateSpec(spec));
    if (!v.ok) return fail('refused by the validator: ' + v.problems.slice(0, 4).join('; '));
    await save({ done: total - 2, stage: 'Judging against the document', message: 'Judging the map against the document…' });

    /* 5. judge */
    const judge = await step.do('judge', () => ai.judge({ prompt: prompts.judge({ family, spec }), url: source.url, schema: schemas.judge, model: MODELS.judge }));
    const score = Number(judge.score) || 0;
    const built = { at: now(), models: [MODELS.outline, MODELS.topic, MODELS.judge], promptVersion: PROMPT_VERSION, ideas: v.ideas };

    /* 6. resources: the hub pages the rail shows in every room of this course. Never fatal — a course
       with no hub pages still has its derived search links. Each page is checked to exist. */
    await save({ done: total - 1, stage: 'Finding revision resources', message: 'Finding revision hub pages…' });
    spec.resources = await step.do('resources', async () => {
      try {
        if (typeof ai.resources !== 'function') return { hubs: [], at: now() };
        const r = await ai.resources({ prompt: prompts.resources(params), ...params, domains: RESOURCE_DOMAINS.concat(domains) });
        const hubs = [];
        for (const l of ((r && r.links) || []).slice(0, 12)) {
          if (!l || !l.url || !/^https:\/\/\S+$/.test(l.url)) continue;
          const h = await head(l.url); if (!h || !h.ok) continue;
          let name = String(l.name || '').trim(); if (!name) { try { name = new URL(l.url).hostname; } catch { name = 'Link'; } }
          hubs.push({ name: name.slice(0, 80), url: l.url, kind: LINK_KINDS.includes(l.kind) ? l.kind : 'notes' });
        }
        return { hubs, at: now() };
      } catch (e) { return { hubs: [], at: now(), error: String((e && e.message) || e).slice(0, 200) }; }
    });
    const metaKey = `spec-meta:${id}`;
    const existing = (await kv.get(metaKey, 'json')) || {};

    if (draft) {
      await kv.put(`spec-draft:${id}`, JSON.stringify(spec));
      await kv.put(metaKey, JSON.stringify({ ...existing, id, level: params.level, subject: params.subject, board: params.board, code: params.code, family, draft: { source, built, judge, resources: spec.resources } }));
      return save({ status: 'draft', done: total, stage: 'Done', message: 'Draft built for review.', judge, family });
    }
    const meta = { id, level: params.level, subject: params.subject, board: params.board, code: params.code, family, source, built, judge, resources: spec.resources, students: existing.students || [] };
    if (score >= PUBLISH_SCORE) {
      await kv.put(`spec:${id}`, JSON.stringify(spec));
      await kv.delete(`spec-draft:${id}`);
      await kv.put(metaKey, JSON.stringify({ ...meta, status: 'published' }));
      return save({ status: 'published', done: total, stage: 'Done', message: `Published — judged ${Math.round(score * 100)}% faithful to the document.`, judge, family });
    }
    await kv.put(`spec-draft:${id}`, JSON.stringify(spec));
    await kv.put(metaKey, JSON.stringify({ ...meta, status: 'review' }));
    return save({ status: 'review', done: total, stage: 'Done', message: 'Built, but the checks want a second look — it is being checked by Chris before it goes live.', judge, family });
  } catch (e) {
    return fail(String(e && e.message || e));
  }
}

/* The monthly pass. */
export async function runReview(specId, deps) {
  const { kv, head, now, ai } = deps;
  const meta = await kv.get(`spec-meta:${specId}`, 'json');
  if (!meta || !meta.source) return { changed: false, error: 'no such course' };
  const h = await head(meta.source.url);
  const same = h && h.ok && String(h.etag || '') === String(meta.source.etag || '') && String(h.lastModified || '') === String(meta.source.lastModified || '') && Number(h.length || 0) === Number(meta.source.length || 0);
  if (same) {
    meta.source.checkedAt = now();
    await kv.put(`spec-meta:${specId}`, JSON.stringify(meta));
    return { changed: false, checkedAt: meta.source.checkedAt };
  }
  const old = await kv.get(`spec:${specId}`, 'json');
  const rec = await runBuild({ level: meta.level, subject: meta.subject, board: meta.board, code: meta.code, specUrl: h && h.ok ? meta.source.url : null }, deps, { draft: true });
  const fresh = await kv.get(`spec-meta:${specId}`, 'json');
  fresh.source = { ...fresh.source, checkedAt: now() };
  if (rec.status !== 'draft') { await kv.put(`spec-meta:${specId}`, JSON.stringify(fresh)); return { changed: true, error: rec.error || rec.status }; }
  const draft = await kv.get(`spec-draft:${specId}`, 'json');
  const diff = diffSpecs(old, draft);
  const doc = await ai.docChanges({ prompt: prompts.docChanges({ oldVersion: old && old.version, newVersion: draft.version }), url: fresh.draft.source.url, schema: schemas.docChanges, model: MODELS.docChanges });
  const proposal = { id: specId, createdAt: now(), breaking: diff.breaking, changes: diff.changes, docChanges: (doc && doc.changes) || [], notes: (doc && doc.notes) || '', judge: rec.judge, oldVersion: old && old.version, newVersion: draft.version, source: fresh.draft.source };
  await kv.put(`proposal:${specId}`, JSON.stringify(proposal));
  fresh.pending = true;
  await kv.put(`spec-meta:${specId}`, JSON.stringify(fresh));
  return { changed: true, proposal };
}

/* Topic-level diff between two specs. Breaking = a student's progress would be orphaned. */
export function diffSpecs(a, b) {
  const changes = [];
  const byId = (xs, k = 'id') => Object.fromEntries((xs || []).map(x => [x[k], x]));
  const ta = byId(a.topics), tb = byId(b.topics);
  for (const id of Object.keys(ta)) if (!tb[id]) changes.push({ kind: 'topic-removed', topic: id, detail: ta[id].name, breaking: true });
  for (const id of Object.keys(tb)) if (!ta[id]) changes.push({ kind: 'topic-added', topic: id, detail: tb[id].name, breaking: false });
  for (const id of Object.keys(ta)) {
    if (!tb[id]) continue;
    const x = ta[id], y = tb[id];
    if (x.name !== y.name) changes.push({ kind: 'topic-renamed', topic: id, detail: `${x.name} → ${y.name}`, breaking: false });
    if (x.component !== y.component) changes.push({ kind: 'topic-moved', topic: id, detail: `${x.component} → ${y.component}`, breaking: false });
    if ((x.option || null) !== (y.option || null)) changes.push({ kind: 'topic-option-changed', topic: id, detail: `${x.option || 'none'} → ${y.option || 'none'}`, breaking: true });
    const ia = byId(x.ideas, 'code'), ib = byId(y.ideas, 'code');
    for (const c of Object.keys(ia)) if (!ib[c]) changes.push({ kind: 'idea-removed', topic: id, detail: c + ' ' + ia[c].idea, breaking: false });
    for (const c of Object.keys(ib)) if (!ia[c]) changes.push({ kind: 'idea-added', topic: id, detail: c + ' ' + ib[c].idea, breaking: false });
    for (const c of Object.keys(ia)) if (ib[c] && (ia[c].content !== ib[c].content || ia[c].idea !== ib[c].idea)) changes.push({ kind: 'idea-changed', topic: id, detail: c, breaking: false });
    if (JSON.stringify(x.caseStudies || []) !== JSON.stringify(y.caseStudies || [])) changes.push({ kind: 'case-studies-changed', topic: id, detail: '', breaking: false });
  }
  const ca = byId(a.components), cb = byId(b.components);
  for (const id of Object.keys(ca)) if (!cb[id]) changes.push({ kind: 'component-removed', topic: null, detail: id, breaking: true });
  for (const id of Object.keys(cb)) if (!ca[id]) changes.push({ kind: 'component-added', topic: null, detail: id, breaking: false });
  for (const id of Object.keys(ca)) if (cb[id] && ['marks', 'weight', 'minutes', 'name'].some(k => ca[id][k] !== cb[id][k])) changes.push({ kind: 'component-changed', topic: null, detail: id, breaking: false });
  const oa = byId(a.options), ob = byId(b.options);
  for (const id of new Set([...Object.keys(oa), ...Object.keys(ob)])) if (JSON.stringify(oa[id] || null) !== JSON.stringify(ob[id] || null)) changes.push({ kind: 'option-changed', topic: null, detail: id, breaking: true });
  if (a.version !== b.version) changes.push({ kind: 'version', topic: null, detail: `${a.version} → ${b.version}`, breaking: false });
  if (JSON.stringify(a.markConventions) !== JSON.stringify(b.markConventions)) changes.push({ kind: 'mark-conventions-changed', topic: null, detail: '', breaking: false });
  return { changes, breaking: changes.some(c => c.breaking) };
}

/* ---------- helpers ---------- */

function skeleton(o, id, params) {
  return {
    id, board: o.board || params.board, subject: o.subject || params.subject, code: o.code || params.code, level: o.level || params.level,
    version: o.version || '', firstExam: o.firstExam || null, essaySubject: !!o.essaySubject,
    components: (o.components || []).map(c => { const x = { id: c.id, name: c.name, paperCode: c.paperCode || undefined, marks: c.marks, weight: c.weight, minutes: c.minutes, sections: c.sections || [] }; if (c.nea) { x.nea = true; } if (c.coversAll) x.coversAll = true; return x; }),
    options: (o.options || []).map(x => ({ id: x.id, label: x.label, choose: x.choose, from: x.from || [] })),
    ao: o.ao || [], markConventions: o.markConventions || {},
    topics: (o.topics || []).map(t => ({ id: t.id, component: t.component, option: t.option || null, name: t.name, caseStudies: [], ideas: [] })),
  };
}
function outlineProblems(spec) {
  if (!spec.topics.length) return ['the outline has no topics'];
  if (spec.topics.length > MAX_TOPICS) return [`the outline has ${spec.topics.length} topics; the limit is ${MAX_TOPICS} — merge sub-sections into their parent sections`];
  return validateSpec(withDummyIdeas(spec)).problems;
}
const DUMMY = [{ code: '_1', q: 'placeholder', idea: 'placeholder', content: 'placeholder content long enough to pass the contract' }, { code: '_2', q: 'placeholder', idea: 'placeholder', content: 'placeholder content long enough to pass the contract' }];
function withDummyIdeas(spec) { return { ...spec, topics: spec.topics.map(t => ({ ...t, ideas: t.ideas && t.ideas.length >= 2 ? t.ideas : DUMMY, caseStudies: t.caseStudies || [] })) }; }
function merge(t, r) { r = r || {}; return { ...t, ideas: Array.isArray(r.ideas) ? r.ideas : [], caseStudies: Array.isArray(r.caseStudies) ? r.caseStudies : [], skills: Array.isArray(r.skills) && r.skills.length ? r.skills : undefined }; }
function topicProblems(spec, i, filled) {
  const trial = withDummyIdeas({ ...spec, topics: spec.topics.map((t, j) => j === i ? filled : t) });
  return validateSpec(trial).problems.filter(p => p.includes(`topic "${filled.id}"`));
}
function onDomain(url, domains) {
  try { const h = new URL(url).hostname.toLowerCase(); if (!/^https:/.test(url)) return false; return !domains.length || domains.some(d => h === d || h.endsWith('.' + d)); } catch { return false; }
}

/* ---------- the real model calls ---------- */

export function anthropicAI(env) {
  const key = env.ANTHROPIC_API_KEY;
  const headers = { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' };
  const doc = url => ({ type: 'document', source: { type: 'url', url }, cache_control: { type: 'ephemeral', ttl: '1h' } });
  async function structured({ prompt, url, schema, model, maxTokens = 16000 }) {
    const body = { model, max_tokens: maxTokens, system: [{ type: 'text', text: prompts.system(), cache_control: { type: 'ephemeral', ttl: '1h' } }],
      messages: [{ role: 'user', content: [...(url ? [doc(url)] : []), { type: 'text', text: prompt }] }],
      output_config: { format: { type: 'json_schema', schema }, effort: 'high' } };
    const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers, body: JSON.stringify(body) });
    const text = await res.text();
    if (!res.ok) throw new Error(`Anthropic ${res.status}: ${text.slice(0, 300)}`);
    const data = JSON.parse(text);
    if (data.stop_reason === 'refusal') throw new Error('the model declined this request');
    const out = (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
    return JSON.parse(out);
  }
  async function locate({ prompt, domains }) {
    const body = { model: MODELS.locate, max_tokens: 4000, tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: 4, allowed_domains: domains.slice(0, 20) }], messages: [{ role: 'user', content: prompt }] };
    let data, turns = 0;
    while (turns++ < 4) {
      const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers, body: JSON.stringify(body) });
      const text = await res.text();
      if (!res.ok) throw new Error(`Anthropic ${res.status}: ${text.slice(0, 300)}`);
      data = JSON.parse(text);
      if (data.stop_reason !== 'pause_turn') break;
      body.messages.push({ role: 'assistant', content: data.content });
    }
    const said = (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
    const m = said.match(/https?:\/\/[^\s"')<>]+\.pdf/gi);
    return { url: m ? m[m.length - 1] : null };
  }
  /* Hub pages for the rail: a web search over the revision sites, answered as `name | kind | url` lines. */
  async function resources({ prompt, domains }) {
    const body = { model: MODELS.resources, max_tokens: 4000, tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: 6, allowed_domains: domains.slice(0, 20) }], messages: [{ role: 'user', content: prompt }] };
    let data, turns = 0;
    while (turns++ < 4) {
      const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers, body: JSON.stringify(body) });
      const text = await res.text();
      if (!res.ok) throw new Error(`Anthropic ${res.status}: ${text.slice(0, 300)}`);
      data = JSON.parse(text);
      if (data.stop_reason !== 'pause_turn') break;
      body.messages.push({ role: 'assistant', content: data.content });
    }
    const said = (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
    const links = [];
    for (const line of said.split('\n')) {
      const m = /^\s*[-*]?\s*([^|]+?)\s*\|\s*(video|notes|practice|official)\s*\|\s*(https:\/\/\S+)\s*$/i.exec(line);
      if (m) links.push({ name: m[1].trim(), kind: m[2].toLowerCase(), url: m[3].replace(/[.,)]+$/, '') });
    }
    return { links };
  }
  return { outline: structured, topic: structured, judge: structured, docChanges: structured, locate, resources };
}

export async function headOf(url) {
  try {
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (study platform course builder)' } });
    if (!res.ok || !res.headers.get('content-type')) res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (study platform course builder)', Range: 'bytes=0-0' } });
    return { ok: res.ok, status: res.status, contentType: res.headers.get('content-type') || '', etag: res.headers.get('etag') || null, lastModified: res.headers.get('last-modified') || null, length: parseInt(res.headers.get('content-length') || res.headers.get('content-range')?.split('/')[1] || '0', 10) || null, url: res.url || url };
  } catch (e) { return { ok: false, status: 0, contentType: '', error: String(e.message || e) }; }
}
