/* Real papers: the prompts and validators shared by the app and the Worker. Pure text in, JSON shapes out; no DOM,
   no fetch. The paper and mark scheme themselves are never quoted back: mark points are paraphrased, evidence is
   quoted from the student's own writing only. */
const FAILURE_CODES = ['KNOWLEDGE-GAP', 'APPLICATION', 'ANALYSIS', 'EVALUATION', 'EXAM-TECHNIQUE', 'RECALL-GAP'];
const P_JSON_RULE = 'Respond with ONLY a JSON object, no markdown fences, no preamble.';
/* The slip-first choices a student picks from before the examiner's note is shown, each tied to a failure mode. */
const SLIPS = [
  { id: 'unfinished', label: 'Didn’t finish the explanation', mode: 'ANALYSIS' },
  { id: 'unknown', label: 'Didn’t know it', mode: 'KNOWLEDGE-GAP' },
  { id: 'misread', label: 'Misread the question or the command word', mode: 'EXAM-TECHNIQUE' },
  { id: 'unapplied', label: 'Knew it, didn’t apply it to this question', mode: 'APPLICATION' },
  { id: 'nojudgement', label: 'No judgement or conclusion', mode: 'EVALUATION' },
  { id: 'slip', label: 'A slip: unit, sign, spelling, arithmetic', mode: 'EXAM-TECHNIQUE' }
];
const CONFIDENCE = ['sure', 'unsure', 'guessed'];
const LEGIBILITY = ['ok', 'partial', 'unreadable'];

function topicList(spec) {
  return spec.topics.map(t => `${t.id} | ${t.name} | codes: ${(t.ideas || []).map(i => i.code).join(', ')}`).join('\n');
}
/* 1. The question map: read once per paper from the question paper itself. */
function questionMapPrompt(spec, paper) {
  return `You are reading the attached ${spec.board} ${spec.level} ${spec.subject} (${spec.code}) question paper: ${paper.name}, ${paper.seriesName || paper.series}, ${paper.marks} marks in total.
List every question and every part that carries marks, in the order printed, as one entry per smallest marked part (1(a), 1(b)(i) and so on; write the id exactly as the paper does, without spaces).
For each give: the marks printed for it; the ONE topic of the specification it mainly tests, chosen from the list below by its id; the key-idea codes it tests from that topic (up to three; only codes from the list); the marking mode — "points" for a mark-by-mark answer, "levels" for an extended answer marked in levels or bands; and the command word or question type in one or two words.
If the paper offers a choice of questions (answer one option from several), list every part of every option and label each part "choice": "<section>:<option>" — for example every part of Option A in Section A is "A:1", every part of Option B in Section A is "A:2" — so the app counts one option per section; parts with no choice have "choice": null.
Do not copy any question text.
TOPICS OF THE SPECIFICATION (id | name | codes):
${topicList(spec)}
${P_JSON_RULE}
{"questions":[{"q":"1(a)","marks":2,"topic":"<topic id>","codes":["..."],"mode":"points","command":"Describe","choice":null}]}`;
}
function validateQuestionMap(spec, o, total) {
  if (!o || !Array.isArray(o.questions) || !o.questions.length) return 'no questions';
  const ids = new Set(); let sum = 0; const choices = {};
  for (const q of o.questions) {
    if (!q || typeof q.q !== 'string' || !q.q.trim()) return 'a question has no id';
    if (ids.has(q.q)) return `question ${q.q} listed twice`; ids.add(q.q);
    if (!(q.marks >= 1) || q.marks > 60) return `question ${q.q}: marks out of range`;
    if (!spec.topics.some(t => t.id === q.topic)) return `question ${q.q}: topic ${q.topic} is not in the specification`;
    if (!['points', 'levels'].includes(q.mode)) return `question ${q.q}: mode must be points or levels`;
    if (q.codes && !Array.isArray(q.codes)) return `question ${q.q}: codes must be a list`;
    if (q.choice) { const [sec, alt] = String(q.choice).split(':'); const g = choices[sec] = choices[sec] || {}; g[alt || '1'] = (g[alt || '1'] || 0) + q.marks; } else sum += q.marks;
  }
  for (const g of Object.values(choices)) sum += Math.max(...Object.values(g));
  if (total && (sum < total * 0.9 || sum > total * 1.1)) return `marks add up to ${sum}, not ${total}`;
  return null;
}
/* 2. Paraphrased mark points for one question: read once per paper from the mark scheme, shared by every student. */
function pointsPrompt(spec, paper, q) {
  return `You are reading the attached mark scheme for ${spec.board} ${spec.level} ${spec.subject} (${spec.code}) ${paper.name}, ${paper.seriesName || paper.series}. Find question ${q.q} (${q.marks} marks, marked by ${q.mode}).
Rewrite what earns each mark as short points in your own words — never the scheme's wording, never more than fourteen words each — so a student can tick the ones their answer met. For "points" marking give one entry per available mark or per independent marking point with its mark value (M, A and B style marks each become a point, named as such). For "levels" marking give one entry per level or band with the marks it spans and what distinguishes it, plus one entry per assessment objective strand if the scheme separates them. Include the accepted alternatives as part of the point, not as extra points. The mark values must add up to ${q.marks}${q.mode === 'levels' ? ' across the top level' : ''}.
${P_JSON_RULE}
{"q":"${q.q}","points":[{"text":"...","max":1,"kind":"M"}]}`;
}
function validatePoints(o, q) {
  if (!o || !Array.isArray(o.points) || !o.points.length) return 'no points';
  let sum = 0;
  for (const p of o.points) {
    if (!p || typeof p.text !== 'string' || p.text.trim().split(/\s+/).length > 22) return 'a point is missing or too long';
    if (!(p.max >= 1)) return 'a point has no mark value';
    sum += p.max;
  }
  if (q && q.mode === 'points' && sum !== q.marks) return `points add up to ${sum}, not ${q.marks}`;
  if (q && q.mode === 'levels' && (sum < q.marks || sum > q.marks * 3)) return `levels do not cover ${q.marks} marks`;
  return null;
}
/* 3. Transcription of one question's pages, shown to the student before any mark. */
function transcribeQuestionPrompt(q) {
  return `The attached photograph(s) show a student's handwritten answer to question ${q.q} of an exam paper (${q.marks} marks), possibly among other questions on the same page.
Transcribe the answer to question ${q.q} only, exactly as written, line by line: keep the student's wording, spelling, numbers, units and working; write mathematics in plain text; mark crossed-out work as [crossed out: ...]; describe any diagram or graph in square brackets. Add nothing and correct nothing.
Say how legible it was: "ok" if you read all of it, "partial" if you had to guess at words or figures (list them in "unsure"), "unreadable" if you could not read enough to mark it. If the answer space for this question is blank, say so with "blank": true.
${P_JSON_RULE}
{"q":"${q.q}","transcript":"...","legibility":"ok","unsure":["..."],"blank":false}`;
}
function validateTranscript(o) {
  if (!o || typeof o.transcript !== 'string') return 'no transcript';
  if (!LEGIBILITY.includes(o.legibility)) return 'legibility must be ok, partial or unreadable';
  if (o.legibility !== 'unreadable' && !o.blank && !o.transcript.trim()) return 'empty transcript';
  return null;
}
/* 4. The mark for one question, point by point, with the student's own words as evidence. */
function markQuestionPrompt(spec, paper, q, points, transcript, ticks, hasPhotos) {
  const pts = points.map((p, i) => `${i + 1}. [${p.max}] ${p.text}${ticks ? (ticks[i] ? '  — the student claims this' : '  — the student does not claim this') : ''}`).join('\n');
  return `You are a senior examiner for ${spec.board} ${spec.level} ${spec.subject} (${spec.code}) marking question ${q.q} (${q.marks} marks, ${q.mode} marking) of ${paper.name}, ${paper.seriesName || paper.series}. ${paper.retest ? 'There is no scheme attached: award against the mark points below.' : `The mark scheme is attached${hasPhotos ? ', and so are the photographs of the student’s answer' : ''}.`}
MARKING: ${spec.markConventions.summary}
MARK POINTS (paraphrased; award against the attached scheme, use these to report):
${pts}
THE STUDENT'S ANSWER, transcribed and confirmed by the student:
${transcript}
Award each point as the scheme would: method marks for a correct method even when the answer is wrong, follow-through where the scheme allows it, nothing for work the scheme does not credit, and nothing you cannot see in the answer. For every point you award, quote the exact words or figures from the answer that earn it (a short substring, copied character for character). For every point you do not award, say in a few words what is missing. For levels marking, decide the level from the answer as a whole and then the mark within it, and report the level entries accordingly.
${ticks ? 'Where your award differs from what the student claimed, list that point’s number under "disagree".' : ''}
Then choose the one failure mode that best explains the lost marks (KNOWLEDGE-GAP, APPLICATION, ANALYSIS, EVALUATION, EXAM-TECHNIQUE, RECALL-GAP), or NONE if full marks, and write an examiner's note to the student as "you", at most sixty words, in the manner of a board's report: what most answers that lost marks here did, what a full-mark answer did, and one thing to do next time. Do not quote the mark scheme's own words in the note.
${P_JSON_RULE}
{"q":"${q.q}","awarded":<int>,"max":${q.marks},"lines":[{"i":1,"awarded":<int>,"evidence":"<quote or null>","missing":"<why or null>"}],"level":<int or null>,"failureMode":"...","note":"...","disagree":[<int>]}`;
}
function validateMarkResult(o, q, points, transcript) {
  if (!o || !(o.awarded >= 0) || o.awarded > q.marks) return 'awarded out of range';
  if (!Array.isArray(o.lines) || o.lines.length !== points.length) return 'one line per mark point required';
  let sum = 0;
  for (const l of o.lines) {
    const p = points[(l.i | 0) - 1]; if (!p) return `line ${l.i} does not match a point`;
    if (!(l.awarded >= 0) || l.awarded > p.max) return `line ${l.i}: awarded out of range`;
    if (l.awarded > 0 && q.mode === 'points') { if (typeof l.evidence !== 'string' || !l.evidence.trim()) return `line ${l.i}: an awarded point needs evidence`; if (transcript && !normText(transcript).includes(normText(l.evidence))) return `line ${l.i}: evidence is not in the answer`; }
    if (q.mode === 'points' && l.awarded < p.max && (typeof l.missing !== 'string' || !l.missing.trim())) return `line ${l.i}: say what is missing`;
    sum += l.awarded;
  }
  if (q.mode === 'points' && sum !== o.awarded) return `lines add up to ${sum}, not ${o.awarded}`;
  if (q.mode === 'levels' && !(o.level >= 0)) return 'levels marking needs the level reached';
  if (!['NONE', ...FAILURE_CODES].includes(o.failureMode)) return 'failure mode invalid';
  if (o.awarded < q.marks && o.failureMode === 'NONE') return 'lost marks need a failure mode';
  if (typeof o.note !== 'string' || !o.note.trim() || o.note.split(/\s+/).length > 90) return 'note missing or too long';
  if (o.disagree && !Array.isArray(o.disagree)) return 'disagree must be a list';
  return null;
}
function normText(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
/* 5. A fresh question shaped like the one that lost marks, for the re-test a week later. */
function variantPrompt(spec, topic, err, points, transcript) {
  return `You write exam questions for ${spec.board} ${spec.level} ${spec.subject} (${spec.code}).
TOPIC: ${topic.id} ${topic.name}
A student lost marks on a real paper question here (${err.marks} marks); the examiner noted: ${err.fix || 'marks lost'}. The points that earned marks on that question, paraphrased: ${points.map(p => p.text).join('; ') || 'not recorded'}.
Write ONE new question of the same shape and demand, same marks, on the same key ideas but with a different context, figures or wording, so that answering it well proves the gap is closed. Give the mark points for it in your own words with their mark values (adding up to ${err.marks}), and a two-line model answer.
${P_JSON_RULE}
{"q":"...","marks":${err.marks},"points":[{"text":"...","max":1}],"model":"..."}`;
}
function validateVariant(o, marks) {
  if (!o || typeof o.q !== 'string' || o.q.trim().length < 12) return 'no question';
  if (o.marks !== marks) return 'marks differ';
  const e = validatePoints({ points: o.points }, { mode: 'points', marks }); if (e) return e;
  if (typeof o.model !== 'string' || !o.model.trim()) return 'no model answer';
  return null;
}
/* 6. The coach's note across the whole marked paper. */
function paperNotePrompt(spec, paper, student, coach, rows) {
  return `You are ${coach}, ${student}'s study coach for ${spec.board} ${spec.level} ${spec.subject}. ${student} has just had a real paper marked: ${paper.name}, ${paper.seriesName || paper.series}, ${paper.score} of ${paper.total}.
By topic, ordered by what will move the grade most (topic | marks | awarded | room before → after | failure modes):
${rows.map(r => `${r.name} | ${r.marks} | ${r.awarded} | ${r.before} → ${r.after} | ${r.modes.join(', ') || 'none'}`).join('\n')}
Write ${student} a note of at most ninety words, addressed by name: the one pattern this paper shows, then exactly two things to do this week in the rooms named above. Plain, warm, specific to these numbers; no praise for effort, no lists.
${P_JSON_RULE}
{"text":"..."}`;
}
function validatePaperNote(o) { return o && typeof o.text === 'string' && o.text.trim() && o.text.split(/\s+/).length <= 120 ? null : 'note missing or too long'; }

if (typeof module !== 'undefined') module.exports = { FAILURE_CODES, SLIPS, CONFIDENCE, LEGIBILITY, topicList, questionMapPrompt, validateQuestionMap, pointsPrompt, validatePoints, transcribeQuestionPrompt, validateTranscript, markQuestionPrompt, validateMarkResult, variantPrompt, validateVariant, paperNotePrompt, validatePaperNote };
