/**
 * Course depth — writes and checks a room kit for every topic of a published course, to the contract in
 * src/kit-validator.js, with the family's kit rules from src/families.js.
 *
 * runDepth(params, deps)   params = { id, only?: [topicId] }
 *                          for each room, four at a time: write → validate → judge → one rewrite with the
 *                          objections → store, or list the room as failed with what went wrong
 * deps = { kv, step, ai: { kit, judgeKit }, now }
 * The Workflow class that gives this durability lives in index.js; this file has no Cloudflare imports.
 */
import { validateKit, KINDS } from '../src/kit-validator.js';
import { FAMILIES, familyFor, kitText } from '../src/families.js';

export const KIT_PROMPT_VERSION = '2026-09-10.2';
export const KIT_MODELS = { write: 'claude-sonnet-5', judge: 'claude-opus-5' };
export const KIT_SCORE = 0.8;
export const KIT_BATCH = 4;

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
const KIT_RULES = `Every fact, question, answer and solution must be correct and consistent with the specification map given. Use the board's own terms and only the key-idea codes given. Hints never state a marking point, never name any part of the required answer, never open with the first line of the mark scheme ("Start with …" is not a hint): the first hint points at the idea, the second at the method, the third at the shape of the answer. Every worked example shows the working with real numbers or the real statements, not instructions to the student, and its setup must contain everything the steps use. A card whose front asks for an example, or for one (or two) of several acceptable answers, is open: set open to true and give two or three acceptable answers on the back separated by semicolons, because any sound example scores; a card with one right answer is not open. Skills codes on a practical method sheet are the ones the specification lists for that practical, not the topic's. Write for the student in plain British English. Reply with JSON matching the schema and nothing else.`;

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

  const one = async (t) => {
    const write = (problems, again) => step.do(`kit write ${t.id}${again ? ' again' : ''}`, () => ai.kit({ prompt: kitPrompts.write({ spec, topic: t, family, problems }), schema: kitSchemas.kit, model: KIT_MODELS.write, topic: t, family, problems }));
    const judge = (kit, again) => step.do(`kit judge ${t.id}${again ? ' again' : ''}`, () => ai.judgeKit({ prompt: kitPrompts.judge({ spec, topic: t, family, kit }), schema: kitSchemas.judge, model: KIT_MODELS.judge, topic: t, family, kit }));
    let kit = await write(null, false); rec.calls++;
    let problems = validateKit(kit, t, family).problems.map(p => 'refused by the validator: ' + p);
    let verdict = null;
    if (!problems.length) { verdict = await judge(kit, false); rec.calls++; problems = judgeProblems(verdict); }
    if (problems.length) {
      kit = await write(problems, true); rec.calls++;
      problems = validateKit(kit, t, family).problems.map(p => 'refused by the validator: ' + p);
      if (!problems.length) { verdict = await judge(kit, true); rec.calls++; problems = judgeProblems(verdict); }
    }
    if (problems.length) { rec.failed.push({ topic: t.id, problems: problems.slice(0, 6) }); await save(); return; }
    const record = { id, topic: t.id, family, lesson: kit.lesson, room: kit.room, cards: kit.cards, extras: kit.extras || [],
      built: { at: now(), models: [KIT_MODELS.write, KIT_MODELS.judge], promptVersion: KIT_PROMPT_VERSION, judge: { score: Number(verdict.score) || 0, notes: verdict.notes || '' } } };
    await kv.put(`kit:${id}:${t.id}`, JSON.stringify(record));
    rec.done[t.id] = record.built.at;
    await save();
  };

  for (let i = 0; i < topics.length; i += KIT_BATCH) {
    await Promise.all(topics.slice(i, i + KIT_BATCH).map(t => one(t).catch(e => { rec.failed.push({ topic: t.id, problems: [String((e && e.message) || e).slice(0, 200)] }); })));
    await save();
  }
  rec.status = 'done';
  await save();
  return rec;
}

/* The real model calls: structured outputs, no document — the kit is grounded in the spec map. */
export function kitAI(env) {
  const key = env.ANTHROPIC_API_KEY;
  const headers = { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' };
  async function structured({ prompt, schema, model, maxTokens }) {
    const body = { model, max_tokens: maxTokens, system: [{ type: 'text', text: kitPrompts.system(), cache_control: { type: 'ephemeral', ttl: '1h' } }],
      messages: [{ role: 'user', content: [{ type: 'text', text: prompt }] }], output_config: { format: { type: 'json_schema', schema }, effort: 'high' } };
    const res = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers, body: JSON.stringify(body) });
    const text = await res.text();
    if (!res.ok) throw new Error(`Anthropic ${res.status}: ${text.slice(0, 300)}`);
    const data = JSON.parse(text);
    if (data.stop_reason === 'refusal') throw new Error('the model declined this request');
    return JSON.parse((data.content || []).filter(c => c.type === 'text').map(c => c.text).join(''));
  }
  return { kit: (a) => structured({ ...a, maxTokens: 20000 }), judgeKit: (a) => structured({ ...a, maxTokens: 6000 }) };
}
