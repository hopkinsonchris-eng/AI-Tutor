/**
 * Course depth — writes and checks a room kit for every topic of a published course, to the contract in
 * src/kit-validator.js, with the family's kit rules from src/families.js.
 *
 * runDepth(params, deps)   params = { id, only?: [topicId] }
 *                          every room still needing work goes into one Anthropic Message Batch per round:
 *                          write → validate → judge → one rewrite with the objections → store, or list the
 *                          room as failed with what went wrong. A batch costs half what the same calls cost
 *                          made one at a time, so a round is a single submit-and-poll, not one call per room.
 * deps = { kv, step, ai: { submitBatch, getBatch, fetchResults }, now }
 * The Workflow class that gives this durability lives in index.js; this file has no Cloudflare imports.
 */
import { validateKit, KINDS } from '../src/kit-validator.js';
import { FAMILIES, familyFor, kitText } from '../src/families.js';

export const KIT_PROMPT_VERSION = '2026-09-10.2';
export const KIT_MODELS = { write: 'claude-sonnet-5', judge: 'claude-opus-5' };
export const KIT_SCORE = 0.8;

const S = (properties) => ({ type: 'object', properties, required: Object.keys(properties), additionalProperties: false });
const arr = items => ({ type: 'array', items });
const str = { type: 'string' }, num = { type: 'number' }, int = { type: 'integer' };
export const kitSchemas = {
  kit: S({
    lesson: S({ why: str, idea: arr(S({ h: str, t: str, code: str })), examples: arr(S({ title: str, setup: str, steps: arr(str), cues: arr(str) })), check: arr(S({ q: str, a: str })) }),
    room: S({ facts: arr(str), questions: arr(S({ q: str, a: str, sol: str, m: int, d: int, hints: arr(str), codes: arr(str) })), exit: arr(S({ q: str, a: str })) }),
    cards: arr(S({ front: str, back: str, code: str, open: { type: 'boolean' } })),
    extras: arr(S({ kind: { type: 'string', enum: KINDS }, title: str, items: arr(str) })),
  }),
  judge: S({ score: num, wrong: arr(S({ index: int, why: str })), problems: arr(str), notes: str }),
};

const KIT_SHAPE = `A room kit has: lesson (why: at least 200 characters on why this room exists for the exam; idea: one section per key idea in the order given, each citing the idea's code, at least 150 characters, teaching the idea and how it is examined; examples: 4 to 6 faded worked examples, each with a title, a setup (the complete problem the student sees before predicting anything: every value, statement, source or scenario given, and exactly what is asked — nothing a later step relies on may be missing from it), at least 3 one-line steps each making one move, and cues (one per step, in order: the short question the student answers before that step is revealed, answerable from the setup and the steps already shown, such as "Which reading does not fit, and why?"); check: at least 3 short check-yourself questions with answers), room (facts: at least 3 key facts or formulae the student must write from memory; questions: 12 to 16, with at least 3 at each difficulty — 1 is one idea, 2 is exam standard, 3 is stretch or synoptic — each with q, a (a short checkable answer), sol (the full solution or model answer), m (marks), d (difficulty), exactly three hints from a nudge to the method to the first line of working, and codes (the key-idea codes it tests); exit: exactly 4 short cold questions with answers), cards (12 to 15 recall cards: front, back of at most 40 words, code), and extras (sections of kind, title and items, as the family rules say).`;
const KIT_RULES = `A room teaches and tests the subject itself, never the exam's paperwork: no card, question, exit question or lesson section about how long a paper lasts, how many marks a task carries, whether a dictionary is allowed, what a task type is called or how a paper is structured. Write powers and indices with superscript characters (x², 10⁻³, eᵏˣ, x¹⁄²) and chemical or index subscripts with subscript characters (H₂O, x₁), never with ^ or _. Every fact, question, answer and solution must be correct and consistent with the specification map given. Use the board's own terms and only the key-idea codes given. Hints never state a marking point, never name any part of the required answer, never open with the first line of the mark scheme ("Start with …" is not a hint): the first hint points at the idea, the second at the method, the third at the shape of the answer. Every worked example shows the working with real numbers or the real statements, not instructions to the student, and its setup must contain everything the steps use. A card whose front asks for an example, or for one (or two) of several acceptable answers, is open: set open to true and give two or three acceptable answers on the back separated by semicolons, because any sound example scores; a card with one right answer is not open. Skills codes on a practical method sheet are the ones the specification lists for that practical, not the topic's. Write for the student in plain British English. Reply with JSON matching the schema and nothing else.`;

export const kitPrompts = {
  system: () => `You write the room kits for a study platform used by UK students: the lesson, worked examples, question bank, exit ticket and recall cards for one topic of one exam course. ${KIT_SHAPE} ${KIT_RULES}`,
  write: ({ spec, topic, family, problems }) => `Course: ${spec.board} ${spec.level} ${spec.subject} (${spec.code}). Family: ${family}.

Mark conventions — command words and answer shapes: ${JSON.stringify(spec.markConventions || {})}
Assessment objectives: ${JSON.stringify(spec.ao || [])}

Topic ${topic.id} "${topic.name}" — the specification map for this room:
${JSON.stringify({ ideas: topic.ideas, caseStudies: topic.caseStudies || [], skills: topic.skills || [] })}

Family kit rules:
${kitText(family)}

Write the complete kit for this room: 12 to 16 questions with at least three at each difficulty, exactly three hints each, exactly four exit questions, 12 to 15 cards, and the extras the family rules require.${problems ? `\n\nYour previous kit was refused for these reasons — fix every one:\n- ${problems.join('\n- ')}` : ''}`,
  judge: ({ spec, topic, family, kit }) => `You are checking a room kit before students see it. Re-solve every question in room.questions yourself, independently, and compare your answer with its a and sol; list every one whose answer key is wrong, ambiguous, or inconsistent with its solution in "wrong" (index is the question's position starting at 0, why says what is wrong). Then check that lesson.idea covers every key idea faithfully to the specification map with nothing invented, that facts and cards are correct, that hints do not give the answer away, that the difficulty tiers are sensible, and that the family rules are followed. For every worked example check that the setup states everything the steps rely on (every value, reading, source, case, date or quotation) and what is asked, with no result or conclusion given away; that each step makes one real move on the case (not a restatement of the setup, not generic exam advice) with correct arithmetic and facts; that the final step answers exactly what the setup asks; and that each cue is a short question answerable from the setup and the steps before it without revealing its own step. For every open card check that each answer on the back is correct and would score. Put any other fault in "problems", each naming the field. Score 0 to 1: 1 means a teacher would publish it as it is; any wrong answer key means at most 0.6. notes: one sentence a teacher would find useful.

Specification map for the topic:
${JSON.stringify({ ideas: topic.ideas, caseStudies: topic.caseStudies || [] })}
Mark conventions: ${JSON.stringify(spec.markConventions || {})}
Family rules:
${kitText(family)}

The kit:
${JSON.stringify(kit)}`,
};

/* What the judge's verdict means for the room: nothing to fix, or the list of objections. */
export function judgeProblems(j) {
  if (!j || typeof j !== 'object') return ['the judge returned nothing usable'];
  const score = Number(j.score) || 0;
  const wrong = Array.isArray(j.wrong) ? j.wrong : [];
  const out = wrong.map(w => `question ${Number(w.index) + 1}: ${w.why}`).concat(Array.isArray(j.problems) ? j.problems.filter(Boolean) : []);
  if (score >= KIT_SCORE && !wrong.length) return [];
  return out.length ? out : [`judged ${Math.round(score * 100)}% — ${j.notes || 'not good enough to publish'}`];
}

/* One round's worth of write or judge calls for every room that needs one: submit as a single Anthropic
   Message Batch, then wait for it to end — the wait between polls is a durable step.sleep, never a spin
   inside a step — and read the results back keyed by custom_id. */
async function runBatchRound(step, ai, label, requests) {
  if (!requests.length) return {};
  const batch = await step.do(`${label} submit`, () => ai.submitBatch(requests));
  let status = batch, tries = 0, delay = 15;
  while (status.processing_status !== 'ended') {
    await step.sleep(`${label} wait ${tries}`, `${delay} seconds`);
    status = await step.do(`${label} poll ${tries}`, () => ai.getBatch(batch.id));
    tries++;
    delay = Math.min(delay * 2, 300);
  }
  return ai.fetchResults(status.results_url);
}

/* One request's own outcome from a batch's results, or why it doesn't have one. */
function fromBatchResult(results, customId) {
  const result = results && results[customId] && results[customId].result;
  if (!result) throw new Error('no result returned for this request');
  if (result.type !== 'succeeded') throw new Error(`batch request ${result.type}: ${JSON.stringify(result.error || {}).slice(0, 200)}`);
  if (result.message.stop_reason === 'refusal') throw new Error('the model declined this request');
  return JSON.parse((result.message.content || []).filter(c => c.type === 'text').map(c => c.text).join(''));
}

/* One room's place in a batch: the Anthropic call under custom_id, plus the context (never sent over the
   wire — kitAI's submitBatch sends only custom_id and params) a mock or caller needs without re-parsing
   the prompt. */
function batchRequest(customId, { prompt, schema, model, maxTokens }, context) {
  return { custom_id: customId, ...context, params: {
    model, max_tokens: maxTokens,
    system: [{ type: 'text', text: kitPrompts.system(), cache_control: { type: 'ephemeral', ttl: '1h' } }],
    messages: [{ role: 'user', content: [{ type: 'text', text: prompt }] }],
    output_config: { format: { type: 'json_schema', schema }, effort: 'high' },
  } };
}

export async function runDepth(params, deps) {
  const { kv, step, ai, now } = deps;
  const id = params.id;
  const only = Array.isArray(params.only) && params.only.length ? params.only : null;
  const spec = await kv.get(`spec:${id}`, 'json');
  if (!spec) return { id, status: 'failed', error: 'no published course with that id' };
  const meta = (await kv.get(`spec-meta:${id}`, 'json')) || {};
  const family = FAMILIES[meta.family] ? meta.family : familyFor(spec.subject);
  const prev = (await kv.get(`depth:${id}`, 'json')) || {};
  const rec = { id, status: 'building', total: spec.topics.length, done: only ? { ...(prev.done || {}) } : {}, failed: only ? (prev.failed || []).filter(f => !only.includes(f.topic)) : [], calls: only ? (prev.calls || 0) : 0, startedAt: now(), updatedAt: now(), promptVersion: KIT_PROMPT_VERSION, only };
  if (only) for (const t of only) delete rec.done[t];
  const save = async () => { rec.updatedAt = now(); await kv.put(`depth:${id}`, JSON.stringify(rec)); };
  await save();
  const topics = only ? spec.topics.filter(t => only.includes(t.id)) : spec.topics;

  const kits = {}; // topic.id -> the kit once it has passed the validator
  let pending = topics.map(t => ({ t, problems: null })); // rooms still needing a write this round

  for (let attempt = 0; attempt < 2 && pending.length; attempt++) {
    const again = attempt > 0;
    const writeRequests = pending.map(({ t, problems }) => batchRequest(`write:${t.id}`, { prompt: kitPrompts.write({ spec, topic: t, family, problems }), schema: kitSchemas.kit, model: KIT_MODELS.write, maxTokens: 20000 }, { topic: t, family, problems }));
    const writeResults = await runBatchRound(step, ai, `depth ${id} write${again ? ' again' : ''}`, writeRequests);
    rec.calls += writeRequests.length;

    const toJudge = [];
    const next = [];
    for (const { t } of pending) {
      let problems;
      try {
        const kit = fromBatchResult(writeResults, `write:${t.id}`);
        kits[t.id] = kit;
        problems = validateKit(kit, t, family).problems.map(p => 'refused by the validator: ' + p);
      } catch (e) { problems = [String((e && e.message) || e).slice(0, 200)]; }
      if (!problems.length) toJudge.push(t);
      else if (again) rec.failed.push({ topic: t.id, problems: problems.slice(0, 6) });
      else next.push({ t, problems });
    }

    if (toJudge.length) {
      const judgeRequests = toJudge.map(t => batchRequest(`judge:${t.id}`, { prompt: kitPrompts.judge({ spec, topic: t, family, kit: kits[t.id] }), schema: kitSchemas.judge, model: KIT_MODELS.judge, maxTokens: 6000 }, { topic: t, family, kit: kits[t.id] }));
      const judgeResults = await runBatchRound(step, ai, `depth ${id} judge${again ? ' again' : ''}`, judgeRequests);
      rec.calls += judgeRequests.length;

      for (const t of toJudge) {
        let verdict, problems;
        try { verdict = fromBatchResult(judgeResults, `judge:${t.id}`); problems = judgeProblems(verdict); }
        catch (e) { problems = [String((e && e.message) || e).slice(0, 200)]; }
        if (!problems.length) {
          const record = { id, topic: t.id, family, lesson: kits[t.id].lesson, room: kits[t.id].room, cards: kits[t.id].cards, extras: kits[t.id].extras || [],
            built: { at: now(), models: [KIT_MODELS.write, KIT_MODELS.judge], promptVersion: KIT_PROMPT_VERSION, judge: { score: Number(verdict.score) || 0, notes: verdict.notes || '' } } };
          await kv.put(`kit:${id}:${t.id}`, JSON.stringify(record));
          rec.done[t.id] = record.built.at;
        } else if (again) rec.failed.push({ topic: t.id, problems: problems.slice(0, 6) });
        else next.push({ t, problems });
      }
    }

    pending = next;
    await save();
  }

  rec.status = 'done';
  await save();
  return rec;
}

/* The real model calls: one Anthropic Message Batch per round, at half the per-token price of a
   synchronous call, structured output grounded in the spec map, no document involved. */
export function kitAI(env) {
  const key = env.ANTHROPIC_API_KEY;
  const headers = { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' };
  async function submitBatch(requests) {
    const body = { requests: requests.map(r => ({ custom_id: r.custom_id, params: r.params })) };
    const res = await fetch('https://api.anthropic.com/v1/messages/batches', { method: 'POST', headers, body: JSON.stringify(body) });
    const text = await res.text();
    if (!res.ok) throw new Error(`Anthropic batch create ${res.status}: ${text.slice(0, 300)}`);
    return JSON.parse(text);
  }
  async function getBatch(batchId) {
    const res = await fetch(`https://api.anthropic.com/v1/messages/batches/${batchId}`, { headers });
    const text = await res.text();
    if (!res.ok) throw new Error(`Anthropic batch status ${res.status}: ${text.slice(0, 300)}`);
    return JSON.parse(text);
  }
  async function fetchResults(resultsUrl) {
    const res = await fetch(resultsUrl, { headers });
    const text = await res.text();
    if (!res.ok) throw new Error(`Anthropic batch results ${res.status}: ${text.slice(0, 300)}`);
    const byId = {};
    for (const line of text.split('\n')) {
      if (!line.trim()) continue;
      const row = JSON.parse(line);
      byId[row.custom_id] = row;
    }
    return byId;
  }
  return { submitBatch, getBatch, fetchResults };
}
