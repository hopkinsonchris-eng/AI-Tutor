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
/* The literal register: one block, added to every prompt when the student's support profile asks for plain, literal language. */
const LITERAL_REGISTER = `LANGUAGE RULES FOR THIS STUDENT (autism-friendly, literal): write plain, literal British English, with no idioms, no figures of speech, no sarcasm, no rhetorical questions and no jokes. One instruction per sentence. Number the steps when there is more than one. Say exactly what will happen next and what "done" looks like. Use the same word for the same thing every time. Do not soften or hint; say the thing directly and kindly.`;
function registerBlock(support) { return support && support.literal ? LITERAL_REGISTER + '\n' : ''; }

function lessonPrompt(spec, topic, student, opts = {}) {
  return `You are writing a study lesson for ${student}, a UK A level student, on the topic below. Write in clear British English, second person, warm but direct. Do not copy the specification wording.
${specBlock(spec, topic)}
${CONTENT_RULE}
${registerBlock(opts.support)}Write a lesson with: "why" (80\u2013120 words on why this topic matters and how it is examined); "sections" — one per key idea, each {"code": the key-idea code, "heading": short, "text": 150\u2013220 words explaining the idea with mechanisms and at least one concrete named example}; "examTips" — 3 short bullets on how this topic is asked and where marks are lost; "checks" — 4 short recall questions each {"q","a","code"}.
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
/* what a room teaches is the subject, never the exam's paperwork */
const CONTENT_RULE = 'Teach and test the subject itself: never the exam\'s format, timing, marks, rules, paper structure or task instructions. A card or question about how long a paper lasts, how many marks a task carries, whether a dictionary is allowed or what a task type is called is wrong and must not be written. Write powers and indices with superscript characters (x², 10⁻³, eᵏˣ, x¹⁄²) and chemical or index subscripts with subscript characters (H₂O, x₁), never with ^ or _.';
function cardsPrompt(spec, topic, count, opts = {}) {
  return `Create ${count} recall cards for the topic below: definitions, key figures with dates, named case-study facts, processes as one-line chains. ${CONTENT_RULE} Each card must be reconstructable knowledge, not recognition — the front asks, the back answers in under 25 words. Cite the key-idea code each card belongs to. Where a case study is required but not specified, use a well-documented 21st-century example and name it.
${specBlock(spec, topic)}
${registerBlock(opts.support)}${JSON_RULE}
{"cards":[{"front":"...","back":"...","code":"..."}]}`;
}
function questionsPrompt(spec, topic, level, opts = {}) {
  const shapes = spec.markConventions.essayShapes.filter(s => s.marks <= 12).map(s => `${s.marks} marks: ${s.structure}`).join('\n');
  return `Write 5 exam-style short and medium questions on the topic below for a student at ${level} level (Learning: knowledge and explain questions; Fluent: analyse and assess; Secure: to-what-extent and resource-based). Use the board\u2019s command words exactly. For each give the marks, a model answer outline in indicative-content form (bullet points an examiner would expect), and the key-idea code(s) it tests.
Question shapes available:
${shapes}
${specBlock(spec, topic)}
${registerBlock(opts.support)}${JSON_RULE}
{"questions":[{"q":"...","marks":4,"command":"Explain","indicative":["..."],"codes":["..."]}]}
${CONTENT_RULE}`;
}
function essayQuestionPrompt(spec, topic, marks, opts = {}) {
  const shape = spec.markConventions.essayShapes.find(s => s.marks === marks) || spec.markConventions.essayShapes[0];
  return `Write ONE ${marks}-mark extended-response question in the exact style of ${spec.board} ${spec.subject} for the topic below, using one of the board\u2019s command words. Then give a planning frame: the decoded command word, 3\u20134 paragraph points each with the evidence a top answer would use (named case studies, figures, thinkers as appropriate), the evaluation thread, and what a Level-top conclusion must do. Cite key-idea codes.
Target structure: ${shape.structure}
${specBlock(spec, topic)}
${registerBlock(opts.support)}${JSON_RULE}
{"q":"...","marks":${marks},"command":"...","decode":"...","points":[{"point":"...","evidence":"...","code":"..."}],"evaluation":"...","conclusion":"...","codes":["..."]}`;
}
function markEssayPrompt(spec, topic, question, marks, essayText, hasPhotos, opts = {}) {
  return `You are a senior examiner for ${spec.board} ${spec.level} ${spec.subject} (${spec.code}) marking one student response.
${specBlock(spec, topic)}
QUESTION (${marks} marks): ${question}
STUDENT RESPONSE: ${hasPhotos ? 'in the attached photograph(s) — transcribe it faithfully first, exactly as written, and include the transcription' : ''}
${essayText || ''}
Mark using levels against the assessment objectives as this board does. Decide the level for the response as a whole, then a mark within it. Be strict about: application to the question and any source; developed chains of reasoning, not lists; evaluation that reaches a supported judgement; accurate, specific case-study or thinker detail. Do not reward length. Then give feedback addressed to the student as "you", one failure mode from KNOWLEDGE-GAP, APPLICATION, ANALYSIS, EVALUATION, EXAM-TECHNIQUE, RECALL-GAP or NONE, one sentence on what to do differently, and one follow-up task.
${registerBlock(opts.support)}${JSON_RULE}
{"transcription":"...","level":<int>,"maxLevel":<int>,"mark":<int>,"max":${marks},"byAO":[{"ao":"AO1","comment":"..."}],"strengths":["..."],"weaknesses":["..."],"feedback":"...","failureMode":"...","fix":"...","followUp":"...","codes":["..."]}`;
}
function coachPrompt(spec, topic, student, errors, history, teaching, coach = 'Coach', opts = {}) {
  return `You are ${coach}, a Socratic tutor for ${student}, a UK A level student, inside the room for ${spec.subject} (${spec.board}) ${topic.id} ${topic.name}.
${specBlock(spec, topic)}
${student}\u2019s recent mistakes here: ${errors || 'none logged yet'}
${teaching ? `TEACHING MODE: deliver the topic in stages, one key idea at a time in the order listed, under 120 words each, ending every stage with ONE prediction or application question ${student} must answer before you continue. After the last idea, set one exam-style question and stop.` : ''}
${registerBlock(opts.support)}Rules you never break: never write a model essay or a full answer. Ask what the next point, example or judgement should be, or give one nudge and stop. Under 90 words. Warm, specific, direct. Refer to the student as ${student}. If asked for the answer, decline and offer the smallest next step. Use the board\u2019s command-word meanings when discussing questions.
Conversation so far:
${history}
Reply as ${coach} in plain text.`;
}
/* The weekly post-it the coach leaves on the student's desk in one room, written from that room's log. */
function weeklyNotePrompt(spec, topic, student, coach, log, opts = {}) {
  return `You are ${coach}, ${student}\u2019s study coach, writing the weekly post-it that sits on ${student}\u2019s desk in the room for ${spec.subject} (${spec.board}) ${topic.id} ${topic.name}.
${student}\u2019s log in this room, most recent first:
${log}
Write ONE post-it note of at most 14 words: the single most useful thing to do in this room this week, drawn from the log (a pattern in the mistakes, a difficulty that keeps failing, an essay level to lift, cards due). Warm, specific, direct, second person; no greeting, no sign-off, no exclamation marks.
${registerBlock(opts.support)}${JSON_RULE}
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

/* The caretaker answers "where do I…" over the student's own map: every room with its state, what is due, recent mistakes.
   One line back, plus the door to open. Small model, small call. */
function caretakerPrompt(state, specs, today, question, opts = {}) {
  const rooms = [];
  for (const sub of state.setup.subjects) { const sp = specs[sub.specId]; if (!sp) continue;
    for (const [id, n] of Object.entries(state.nodes)) { if (n.spec !== sp.id) continue; const t = sp.topics.find(x => x.id === n.topic); if (!t) continue; rooms.push(`${id} | ${sp.subject} (${sp.board} ${sp.code}) | ${t.id} ${t.name} | ${n.state}`); } }
  const dueCards = Object.values(state.cards || {}).filter(c => !c.due || c.due <= today);
  const byRoom = {}; for (const c of dueCards) byRoom[c.node] = (byRoom[c.node] || 0) + 1;
  const errs = (state.errors || []).slice(0, 10).map(e => `${e.date} ${e.node} ${e.mode}: ${String(e.ref || '').slice(0, 80)}`);
  const retests = (state.errors || []).filter(e => e.paper && e.retestDue && e.retestDue <= today && !e.resolved && !e.relearn).map(e => e.node);
  return `You are the caretaker of a student's study campus. Answer the student's question using ONLY the map below, in one plain sentence (at most 30 words), and name the one door to open. No lists, no exclamation marks, no praise.
Rooms (id | subject | topic | how well known):
${rooms.slice(0, 160).join('\n')}
Flash cards due today by room: ${Object.entries(byRoom).map(([k, v]) => `${k}:${v}`).join(', ') || 'none'}
Re-tests due: ${retests.join(', ') || 'none'}
Recent mistakes: ${errs.join('; ') || 'none'}
Other places: exam = the Exam Hall (real past papers, re-tests, grade boundaries); prog = Progress (effort, error log, weekly report); office = the Office (courses, account); today = the full plan for today.
Stations inside a room: lesson, cards (flash cards), practise, essay, exit (exit ticket), desktop.
${registerBlock(opts.support)}Question: ${JSON.stringify(String(question).slice(0, 200))}
Reply with JSON only: {"text": "<one sentence>", "room": "<room id from the map or null>", "station": "<station or null>", "view": "<exam|prog|office|today or null>"}. If the question is not about studying here, say so in the sentence and set room and view to null.`;
}
function validateCaretaker(o) { if (!o || typeof o !== 'object') return 'no answer'; if (typeof o.text !== 'string' || !o.text.trim()) return 'no text'; if (o.text.split(/\s+/).length > 45) return 'too long'; if (o.room != null && typeof o.room !== 'string') return 'bad room'; if (o.view != null && !['exam', 'prog', 'office', 'today'].includes(o.view)) return 'bad view'; return null; }


/* ---------- The floating coach: what it can see, how it is asked, how its reply is checked ---------- */
const STATION_LABELS = { lesson: 'Lesson', formulae: 'Key facts', cards: 'Flash cards', practise: 'Practise', essay: 'Essay', mark: 'Mark', exit: 'Exit ticket', planner: 'Planner', desktop: 'Desktop', coach: 'Coach' };
const COACH_VIEWS = ['campus', 'today', 'exam', 'prog', 'office'];
const COACH_STATIONS = ['lesson', 'cards', 'practise', 'essay', 'exit', 'desktop', 'formulae', 'mark', 'planner'];
function sceneSummary(sc) {
  if (!sc) return '';
  if (sc.view === 'rooms' && sc.spec && sc.topic) { let s = `${sc.spec.subject} · ${sc.topic.id} ${sc.topic.name} · ${STATION_LABELS[sc.station] || 'Lesson'}`; const it = sc.item; if (it && it.kind === 'question' && it.n) s += ` · question ${it.n} of ${it.of}`; return s; }
  if (sc.view === 'rooms') return `${sc.subject || 'Rooms'} · the corridor`;
  if (sc.view === 'campus') return 'Campus · the notice board';
  if (sc.view === 'today') return sc.item && sc.item.kind === 'cards-review' ? `Flash card review \u00b7 ${sc.item.due} due` : 'Today’s full plan';
  if (sc.view === 'exam') return `Exam Hall${sc.subject ? ' · ' + sc.subject : ''}`;
  if (sc.view === 'prog') return 'Progress';
  if (sc.view === 'office') return 'Office';
  if (sc.view === 'admin') return 'Admin desk';
  return 'Study Platform';
}
function sceneBlock(sc) {
  const L = [`Place: ${sceneSummary(sc)}`]; const it = sc && sc.item;
  if (it) {
    if (it.kind === 'question') L.push(`On screen: question ${it.n || '?'} of ${it.of || '?'}${it.marks ? ` (${it.marks} marks${it.command ? ', ' + it.command : ''})` : ''}: ${JSON.stringify(String(it.text || '').slice(0, 400))} · ${it.hints || 0} hint${it.hints === 1 ? '' : 's'} used${it.revealed ? ' · the answer is already revealed' : ''}`);
    else if (it.kind === 'essay' || it.kind === 'essay-marked') L.push(`On screen: ${it.marks}-mark ${it.command || ''} essay question: ${JSON.stringify(String(it.text || '').slice(0, 300))} · planning frame ${it.planned ? 'opened' : 'not opened'} · ${it.written || 0} characters typed${it.level != null ? ` · marked Level ${it.level}` : ''}`);
    else if (it.kind === 'essay-start') L.push('On screen: about to set an essay question');
    else if (it.kind === 'exit') L.push(`On screen: the exit ticket, ${it.answered} of ${it.of} answered`);
    else if (it.kind === 'cards') L.push(`On screen: flash cards, ${it.due} of ${it.of} due`);
    else if (it.kind === 'cards-review') L.push(`On screen: the daily flash card review, ${it.due} due`);
    else if (it.kind === 'lesson') L.push(`On screen: the lesson, ${it.revealed} of ${it.sections} sections opened`);
    else if (it.kind === 'paper') L.push(`On screen: real paper ${it.name || ''}, at the ${it.step || ''} step`);
    else if (it.kind === 'mark') L.push(`On screen: marking a question${it.marks ? ` (${it.marks} marks)` : ''}${it.marked ? ', already marked' : ''}`);
    else L.push(`On screen: ${it.kind}`);
  }
  if (sc && sc.minutesOnItem != null) L.push(`${sc.minutesOnItem} minute${sc.minutesOnItem === 1 ? '' : 's'} on it`);
  if (sc && sc.state) L.push(`Room state: ${sc.state}${sc.dueHere != null ? ` · ${sc.dueHere} flash cards due here` : ''}`);
  if (sc && sc.mistakes) L.push(`Mistakes here: ${sc.mistakes.length ? sc.mistakes.join('; ') : 'none logged'}`);
  if (sc && sc.step) L.push(`Today’s plan step: ${sc.step.title} (${sc.step.minutes} min)${sc.stepsLeft ? ` · ${sc.stepsLeft} steps left today` : ''}`);
  if (sc && sc.due != null && !sc.spec) L.push(`${sc.due} flash cards due today`);
  if (sc && sc.timer) L.push(`Timer: ${sc.timer.label}, ${sc.timer.left} min left${sc.timer.onBreak ? ' (on a rest break)' : ''}`);
  return L.join('\n');
}
function floatingCoachPrompt(sc, student, history, coach = 'Coach', opts = {}) {
  const inRoom = !!(sc && sc.spec && sc.topic); const reg = registerBlock(opts.support || (sc && sc.support));
  const where = inRoom ? `inside the room for ${sc.spec.subject} (${sc.spec.board}) ${sc.topic.id} ${sc.topic.name}` : 'on the student’s campus';
  const map = inRoom ? '' : `${student}’s map (room id | subject | topic | how well known):
${((sc && sc.map) || []).slice(0, 160).map(r => `${r.id} | ${r.subject}${r.board ? ' (' + r.board + ')' : ''} | ${r.topic} | ${r.state}`).join('\n') || 'no rooms yet'}
Re-tests due: ${((sc && sc.retests) || []).join(', ') || 'none'}
Other places: campus = the notice board and the buildings; today = the full plan; exam = the Exam Hall (real papers, re-tests, grade boundaries); prog = Progress; office = the Office (courses, account, support settings).
Stations inside a room: lesson, cards, practise, essay, exit, desktop.`;
  return `You are ${coach}, a Socratic tutor for ${student}, a UK ${sc && sc.spec ? sc.spec.level : 'A level'} student, ${where}. You float beside every page of the Study Platform and can see exactly where ${student} is and what is on screen.
${inRoom ? specBlock(sc.spec, sc.topic) : map}
WHAT YOU CAN SEE NOW:
${sceneBlock(sc)}
${sc && sc.teaching ? `TEACHING MODE: deliver the topic in stages, one key idea at a time in the order listed, under 120 words each, ending every stage with ONE prediction or application question ${student} must answer before you continue. After the last idea, set one exam-style question and stop.` : ''}
${reg}Rules you never break: never write a model essay or a full answer. Ask what the next point, example or judgement should be, or give one nudge and stop. Under 90 words. Warm, specific, direct. Refer to the student as ${student}. If asked for the answer, decline and offer the smallest next step. Use the board’s command-word meanings when discussing questions. If ${student} is stuck on the item on screen, respond to that item, not in general. If ${student} asks what to do or where to go, name one door (a room and a station, or a place) and say why in one clause.
Conversation so far:
${history || '(nothing yet)'}
Reply with JSON only: {"text": "<your reply as ${coach}, plain text>", "open": {"room": "<room id or null>", "station": "<lesson|cards|practise|essay|exit|desktop or null>"} or null, "view": "<campus|today|exam|prog|office or null>"}`;
}
function validateCoachReply(o) {
  if (!o || typeof o !== 'object') return 'no reply';
  if (typeof o.text !== 'string' || !o.text.trim()) return 'no text';
  if (o.text.length > 1200) return 'too long';
  if (o.open != null) { if (typeof o.open !== 'object' || typeof o.open.room !== 'string' || !o.open.room) return 'bad door'; if (o.open.station != null && !COACH_STATIONS.includes(o.open.station)) return 'bad station'; }
  if (o.view != null && !COACH_VIEWS.includes(o.view)) return 'bad view';
  return null;
}
/* Chunking: one small call that turns the current step into steps small enough to start. */
const CHUNK_RANGE = { 1: [3, 4], 2: [5, 7], 3: [8, 12] };
function chunkPrompt(step, sc, level, student, opts = {}) {
  const [lo, hi] = CHUNK_RANGE[level] || CHUNK_RANGE[2]; const reg = registerBlock(opts.support || (sc && sc.support));
  return `Break this study step into ${lo} to ${hi} small, concrete steps for ${student}, a UK ${sc && sc.spec ? sc.spec.level : 'A level'} student who finds starting hard. Each step is ONE physical or mental action, starts with a verb, and is at most 14 words. Give each step whole minutes; the minutes must add up to ${step.minutes} minutes. Order them so the first step is the easiest way to begin. No advice, no encouragement, no questions: just the steps.
STEP: ${step.title} (${step.minutes} minutes). ${step.detail || ''}
WHERE ${String(student).toUpperCase()} IS: ${sceneSummary(sc)}
${reg}${JSON_RULE}
{"steps":[{"text":"...","minutes":2}]}`;
}
function validateChunks(o, level, minutes) {
  const [lo, hi] = CHUNK_RANGE[level] || CHUNK_RANGE[2];
  if (!o || !Array.isArray(o.steps)) return 'no steps';
  if (o.steps.length < lo || o.steps.length > hi) return `need ${lo} to ${hi} steps, got ${o.steps.length}`;
  let tot = 0;
  for (const s of o.steps) { if (!s || typeof s.text !== 'string' || !s.text.trim()) return 'step without text'; if (s.text.trim().split(/\s+/).length > 14) return 'step over 14 words'; if (!Number.isInteger(s.minutes) || s.minutes < 1) return 'minutes must be whole and at least 1'; tot += s.minutes; }
  if (minutes && (tot < minutes * 0.7 || tot > minutes * 1.3)) return `minutes add to ${tot}, not ${minutes}`;
  return null;
}

/* ============ THE FIRST WEEK: ten things a new student does once, in their own subjects ============ */
const TOUR_STEPS = [
  { key: 'building', group: 'find', text: 'Open one of your buildings', meaning: 'open one of the subject buildings on the campus', must: 'a subject name' },
  { key: 'lesson', group: 'find', text: 'Go through a door and read the lesson', meaning: 'open a door in the corridor and read the lesson inside', must: 'the word door or lesson, and the first room\'s name' },
  { key: 'caretaker', group: 'find', text: 'Ask the caretaker where something lives', meaning: 'type a question into the Ask the caretaker box on the campus', must: 'the word caretaker' },
  { key: 'cards', group: 'work', text: 'Turn a flash card over', meaning: 'turn over a flash card in a room', must: 'the words flash card' },
  { key: 'question', group: 'work', text: 'Answer one exam question and see the marks', meaning: 'answer one practice question in a room and mark it', must: 'the word question' },
  { key: 'exit', group: 'work', text: 'Take an exit ticket', meaning: 'take the exit ticket at the end of a room', must: 'the words exit ticket' },
  { key: 'coach', group: 'work', text: 'Ask your coach something about the lesson', meaning: 'ask the coach a question', must: 'the coach\'s name' },
  { key: 'exam', group: 'see', text: 'Look round the Exam Hall', meaning: 'open the Exam Hall', must: 'the words Exam Hall' },
  { key: 'progress', group: 'see', text: 'Check Progress', meaning: 'open the Progress page', must: 'the word Progress' },
  { key: 'office', group: 'see', text: 'Try a helper in the Office', meaning: 'open the Office and try one of the Support helpers', must: 'the word Office' }
];
const TOUR_GROUPS = [['find', 'Find your way'], ['work', 'Do the work'], ['see', 'See how you’re doing']];
const rxEsc = s => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/* names = { student, coach, subjects: [{ subject, short, topic }] } — the first room of each subject */
function tourPrompt(names, opts = {}) {
  const subs = (names.subjects || []).map(s => `${s.subject}${s.short && s.short !== s.subject ? ` (${s.short})` : ''} — first room: ${s.topic}`);
  return `You are the caretaker of a student's study campus, writing the ten lines of their first-week checklist. Each line tells the student one thing to do, in plain words, as one short sentence of at most 90 characters, no exclamation marks, no praise, no greeting. Use the student's own subjects, rooms and coach where the step says so, and keep the meaning of each step exactly.
Student: ${names.student || 'the student'}. Coach's name: ${names.coach || 'Coach'}.
Subjects:
${subs.join('\n') || 'none yet'}
Steps (key — what the student does — the line must mention):
${TOUR_STEPS.map(s => `${s.key} — ${s.meaning} — ${s.must}`).join('\n')}
${registerBlock(opts.support)}Reply with JSON only: {"lines": {${TOUR_STEPS.map(s => `"${s.key}": "<line>"`).join(', ')}}}`;
}
/* accept only lines that are short, plain and about the step; the app lays them over the fixed text */
function validateTour(o, names) {
  const out = {}; if (!o || typeof o !== 'object' || !o.lines || typeof o.lines !== 'object') return out;
  const subs = (names && names.subjects) || []; const any = arr => arr.filter(Boolean).map(rxEsc).join('|');
  const must = { building: any(subs.flatMap(s => [s.subject, s.short])), lesson: 'door|lesson', caretaker: 'caretaker', cards: 'flash ?cards?', question: 'question', exit: 'exit ticket', coach: any([names && names.coach, 'coach']), exam: 'exam hall', progress: 'progress', office: 'office' };
  for (const st of TOUR_STEPS) { const v = o.lines[st.key]; if (typeof v !== 'string') continue; const t = v.trim().replace(/\s+/g, ' ');
    if (t.length < 8 || t.length > 90 || /!/.test(t) || !must[st.key]) continue; if (!new RegExp(must[st.key], 'i').test(t)) continue; out[st.key] = t; }
  return out;
}
if (typeof module !== 'undefined') module.exports = { topicOf, ideaCodes, specBlock, lessonPrompt, cardsPrompt, transcribePrompt, cardsFromNotesPrompt, questionsPrompt, essayQuestionPrompt, markEssayPrompt, coachPrompt,
  validCodes, validateLesson, validateCards, validateQuestions, validateEssayQ, validateMarking, weeklyNotePrompt, caretakerPrompt, validateCaretaker,
  LITERAL_REGISTER, registerBlock, STATION_LABELS, sceneSummary, sceneBlock, floatingCoachPrompt, validateCoachReply, chunkPrompt, validateChunks, TOUR_STEPS, TOUR_GROUPS, tourPrompt, validateTour, CONTENT_RULE };
