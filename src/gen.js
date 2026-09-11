/* Generator — builds prompts anchored to a spec topic, and validates the JSON that comes back.
   Every generated item must cite at least one key-idea code from the topic; otherwise it is rejected. */
function topicOf(spec, topicId) { return spec.topics.find(t => t.id === topicId); }
function ideaCodes(topic) { return topic.ideas.map(i => i.code); }
function specBlock(spec, topic) {
  return `QUALIFICATION: ${spec.board} ${spec.level} ${spec.subject} (${spec.code})
TOPIC: ${topic.id} ${topic.name}
KEY IDEAS (cite these codes exactly):
${topic.ideas.map(i => `${i.code} — ${i.idea}: ${i.content}`).join('\n')}
REQUIRED CASE STUDIES: ${topic.caseStudies.join('; ') || 'none specified'}
ASSESSMENT OBJECTIVES: ${spec.ao.map(a => `${a.id} ${a.label}`).join('; ')}
MARKING: ${spec.markConventions.summary}`;
}
const JSON_RULE = 'Respond with ONLY a JSON object, no markdown fences, no preamble.';

function lessonPrompt(spec, topic, student) {
  return `You are writing a study lesson for ${student}, a UK A level student, on the topic below. Write in clear British English, second person, warm but direct. Do not copy the specification wording.
${specBlock(spec, topic)}
Write a lesson with: "why" (80\u2013120 words on why this topic matters and how it is examined); "sections" — one per key idea, each {"code": the key-idea code, "heading": short, "text": 150\u2013220 words explaining the idea with mechanisms and at least one concrete named example}; "examTips" — 3 short bullets on how this topic is asked and where marks are lost; "checks" — 4 short recall questions each {"q","a","code"}.
${JSON_RULE}
{"why":"...","sections":[{"code":"...","heading":"...","text":"..."}],"examTips":["..."],"checks":[{"q":"...","a":"...","code":"..."}]}`;
}
/* The desktop: a photograph of the student's own notes, transcribed as written, then cards made only from what the notes say. */
function transcribePrompt() {
  return 'Transcribe this photograph of handwritten or printed study notes into plain text. Keep the headings, lists, equations and diagrams\' labels as written; do not add, summarise, reorder or correct anything. Where a word is illegible write [illegible]. Reply with the transcription only, no preamble.';
}
function cardsFromNotesPrompt(spec, topic, notes, count) {
  return `Create up to ${count} recall cards FROM THE STUDENT'S OWN NOTES below, for the topic given. Use only facts that appear in the notes and belong to this topic; never add facts the notes do not contain, and skip anything off-topic. Each card must be reconstructable knowledge, not recognition: the front asks, the back answers in under 25 words. Cite the key-idea code each card belongs to.
${specBlock(spec, topic)}
STUDENT'S OWN NOTES (transcribed from a photograph):
"""
${String(notes || '').slice(0, 6000)}
"""
Return JSON only: {"cards":[{"front":"...","back":"...","code":"..."}]}`;
}
function cardsPrompt(spec, topic, count) {
  return `Create ${count} recall cards for the topic below: definitions, key figures with dates, named case-study facts, processes as one-line chains. Each card must be reconstructable knowledge, not recognition — the front asks, the back answers in under 25 words. Cite the key-idea code each card belongs to. Where a case study is required but not specified, use a well-documented 21st-century example and name it.
${specBlock(spec, topic)}
${JSON_RULE}
{"cards":[{"front":"...","back":"...","code":"..."}]}`;
}
function questionsPrompt(spec, topic, level) {
  const shapes = spec.markConventions.essayShapes.filter(s => s.marks <= 12).map(s => `${s.marks} marks: ${s.structure}`).join('\n');
  return `Write 5 exam-style short and medium questions on the topic below for a student at ${level} level (Learning: knowledge and explain questions; Fluent: analyse and assess; Secure: to-what-extent and resource-based). Use the board\u2019s command words exactly. For each give the marks, a model answer outline in indicative-content form (bullet points an examiner would expect), and the key-idea code(s) it tests.
Question shapes available:
${shapes}
${specBlock(spec, topic)}
${JSON_RULE}
{"questions":[{"q":"...","marks":4,"command":"Explain","indicative":["..."],"codes":["..."]}]}`;
}
function essayQuestionPrompt(spec, topic, marks) {
  const shape = spec.markConventions.essayShapes.find(s => s.marks === marks) || spec.markConventions.essayShapes[0];
  return `Write ONE ${marks}-mark extended-response question in the exact style of ${spec.board} ${spec.subject} for the topic below, using one of the board\u2019s command words. Then give a planning frame: the decoded command word, 3\u20134 paragraph points each with the evidence a top answer would use (named case studies, figures, thinkers as appropriate), the evaluation thread, and what a Level-top conclusion must do. Cite key-idea codes.
Target structure: ${shape.structure}
${specBlock(spec, topic)}
${JSON_RULE}
{"q":"...","marks":${marks},"command":"...","decode":"...","points":[{"point":"...","evidence":"...","code":"..."}],"evaluation":"...","conclusion":"...","codes":["..."]}`;
}
function markEssayPrompt(spec, topic, question, marks, essayText, hasPhotos) {
  return `You are a senior examiner for ${spec.board} ${spec.level} ${spec.subject} (${spec.code}) marking one student response.
${specBlock(spec, topic)}
QUESTION (${marks} marks): ${question}
STUDENT RESPONSE: ${hasPhotos ? 'in the attached photograph(s) — transcribe it faithfully first, exactly as written, and include the transcription' : ''}
${essayText || ''}
Mark using levels against the assessment objectives as this board does. Decide the level for the response as a whole, then a mark within it. Be strict about: application to the question and any source; developed chains of reasoning, not lists; evaluation that reaches a supported judgement; accurate, specific case-study or thinker detail. Do not reward length. Then give feedback addressed to the student as "you", one failure mode from KNOWLEDGE-GAP, APPLICATION, ANALYSIS, EVALUATION, EXAM-TECHNIQUE, RECALL-GAP or NONE, one sentence on what to do differently, and one follow-up task.
${JSON_RULE}
{"transcription":"...","level":<int>,"maxLevel":<int>,"mark":<int>,"max":${marks},"byAO":[{"ao":"AO1","comment":"..."}],"strengths":["..."],"weaknesses":["..."],"feedback":"...","failureMode":"...","fix":"...","followUp":"...","codes":["..."]}`;
}
function coachPrompt(spec, topic, student, errors, history, teaching, coach = 'Coach') {
  return `You are ${coach}, a Socratic tutor for ${student}, a UK A level student, inside the room for ${spec.subject} (${spec.board}) ${topic.id} ${topic.name}.
${specBlock(spec, topic)}
${student}\u2019s recent mistakes here: ${errors || 'none logged yet'}
${teaching ? `TEACHING MODE: deliver the topic in stages, one key idea at a time in the order listed, under 120 words each, ending every stage with ONE prediction or application question ${student} must answer before you continue. After the last idea, set one exam-style question and stop.` : ''}
Rules you never break: never write a model essay or a full answer. Ask what the next point, example or judgement should be, or give one nudge and stop. Under 90 words. Warm, specific, direct. Refer to the student as ${student}. If asked for the answer, decline and offer the smallest next step. Use the board\u2019s command-word meanings when discussing questions.
Conversation so far:
${history}
Reply as ${coach} in plain text.`;
}
/* The weekly post-it the coach leaves on the student's desk in one room, written from that room's log. */
function weeklyNotePrompt(spec, topic, student, coach, log) {
  return `You are ${coach}, ${student}\u2019s study coach, writing the weekly post-it that sits on ${student}\u2019s desk in the room for ${spec.subject} (${spec.board}) ${topic.id} ${topic.name}.
${student}\u2019s log in this room, most recent first:
${log}
Write ONE post-it note of at most 14 words: the single most useful thing to do in this room this week, drawn from the log (a pattern in the mistakes, a difficulty that keeps failing, an essay level to lift, cards due). Warm, specific, direct, second person; no greeting, no sign-off, no exclamation marks.
${JSON_RULE}
{"text":"..."}`;
}

/* ---------- Validators ---------- */
function validCodes(topic, codes) { const set = new Set(ideaCodes(topic)); return Array.isArray(codes) && codes.length > 0 && codes.every(c => set.has(c)); }
function validateLesson(topic, o) {
  if (!o || typeof o.why !== 'string' || o.why.length < 200) return 'why too short';
  if (!Array.isArray(o.sections) || o.sections.length < Math.min(2, topic.ideas.length)) return 'too few sections';
  for (const s of o.sections) { if (!validCodes(topic, [s.code])) return `section cites unknown code ${s.code}`; if (!s.heading || !s.text || s.text.length < 400) return `section ${s.code} too short`; }
  if (!Array.isArray(o.examTips) || o.examTips.length < 2) return 'exam tips missing';
  if (!Array.isArray(o.checks) || o.checks.length < 3 || !o.checks.every(c => c.q && c.a && validCodes(topic, [c.code]))) return 'checks invalid';
  return null;
}
function validateCards(topic, o, min = 5) {
  if (!o || !Array.isArray(o.cards) || o.cards.length < min) return 'too few cards';
  for (const c of o.cards) { if (!c.front || !c.back) return 'card missing side'; if (c.back.split(/\s+/).length > 40) return 'card back too long'; if (!validCodes(topic, [c.code])) return `card cites unknown code ${c.code}`; }
  return null;
}
function validateQuestions(topic, o) {
  if (!o || !Array.isArray(o.questions) || o.questions.length < 3) return 'too few questions';
  for (const q of o.questions) { if (!q.q || !q.command || !(q.marks >= 1) || !Array.isArray(q.indicative) || q.indicative.length < 2) return 'question incomplete'; if (!validCodes(topic, q.codes)) return 'question cites unknown code'; }
  return null;
}
function validateEssayQ(topic, o, marks) {
  if (!o || !o.q || o.marks !== marks || !o.decode || !Array.isArray(o.points) || o.points.length < 3) return 'essay frame incomplete';
  if (!o.points.every(p => p.point && p.evidence && validCodes(topic, [p.code]))) return 'point cites unknown code';
  if (!o.evaluation || !o.conclusion) return 'evaluation or conclusion missing';
  return null;
}
function validateMarking(topic, o, marks) {
  if (!o || !(o.level >= 0) || !(o.maxLevel >= 1) || !(o.mark >= 0) || o.mark > marks) return 'level/mark out of range';
  if (!Array.isArray(o.byAO) || !o.byAO.length || !o.feedback || !o.fix) return 'feedback incomplete';
  if (!['KNOWLEDGE-GAP', 'APPLICATION', 'ANALYSIS', 'EVALUATION', 'EXAM-TECHNIQUE', 'RECALL-GAP', 'NONE'].includes(o.failureMode)) return 'failure mode invalid';
  return null;
}

if (typeof module !== 'undefined') module.exports = { topicOf, ideaCodes, specBlock, lessonPrompt, cardsPrompt, transcribePrompt, cardsFromNotesPrompt, questionsPrompt, essayQuestionPrompt, markEssayPrompt, coachPrompt,
  validCodes, validateLesson, validateCards, validateQuestions, validateEssayQ, validateMarking, weeklyNotePrompt };
