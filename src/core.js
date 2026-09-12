/* Platform core — pure logic, no DOM. Generalises the maths engine to any set of qualifications.
   Node = one topic of one qualification the student actually studies (options resolved). */
const DAY = 86400000;
const STATES = ['Unassessed', 'Learning', 'Fluent', 'Secure'];
const FAILURE_MODES = [
  { code: 'KNOWLEDGE-GAP', label: 'Didn\u2019t know the content or case study' },
  { code: 'APPLICATION', label: 'Knew it, didn\u2019t apply it to the question or source' },
  { code: 'ANALYSIS', label: 'Points stated, not developed into chains of reasoning' },
  { code: 'EVALUATION', label: 'No judgement, or judgement not supported' },
  { code: 'EXAM-TECHNIQUE', label: 'Misread the command word, ran out of time, poor structure' },
  { code: 'RECALL-GAP', label: 'Couldn\u2019t recall a definition, figure or example' }
];
const REMEDY = {
  'KNOWLEDGE-GAP': 'Re-read the lesson and rebuild the case-study card before any more practice.',
  'APPLICATION': 'Every paragraph must name the question\u2019s context or the source. Practise with "with reference to" questions.',
  'ANALYSIS': 'Use because \u2192 this means \u2192 which leads to. Three links per point, minimum.',
  'EVALUATION': 'End every paragraph with a mini-judgement and the essay with a qualified answer to the exact question.',
  'EXAM-TECHNIQUE': 'Decode the command word and plan for two minutes before writing. Time each answer to its marks.',
  'RECALL-GAP': 'Turn the missing fact into a recall card the same day.'
};
/* Academic calendar to Summer 2028 (shared with the maths companion). */
const BLOCKS = [
  ['2026-09-01','2026-10-23','TERM','Autumn term'],['2026-10-24','2026-11-01','HOLIDAY','October half term'],
  ['2026-11-02','2026-12-18','TERM','Autumn term'],['2026-12-19','2027-01-03','HOLIDAY','Christmas'],
  ['2027-01-04','2027-02-12','TERM','Spring term'],['2027-02-13','2027-02-21','HOLIDAY','February half term'],
  ['2027-02-22','2027-03-26','TERM','Spring term'],['2027-03-27','2027-04-11','HOLIDAY','Easter'],
  ['2027-04-12','2027-05-28','TERM','Summer term'],['2027-05-29','2027-06-06','HOLIDAY','May half term'],
  ['2027-06-07','2027-07-16','TERM','Summer term'],['2027-07-17','2027-09-05','HOLIDAY','Summer'],
  ['2027-09-06','2027-10-22','TERM','Autumn term'],['2027-10-23','2027-10-31','HOLIDAY','October half term'],
  ['2027-11-01','2027-12-17','TERM','Autumn term'],['2027-12-18','2028-01-02','HOLIDAY','Christmas'],
  ['2028-01-03','2028-02-11','TERM','Spring term'],['2028-02-12','2028-02-20','HOLIDAY','February half term'],
  ['2028-02-21','2028-03-31','TERM','Spring term'],['2028-04-01','2028-04-16','HOLIDAY','Easter'],
  ['2028-04-17','2028-06-30','EXAM','Exam term']
].map(([from, to, kind, label]) => ({ from, to, kind, label }));
const phaseFor = iso => BLOCKS.find(b => iso >= b.from && iso <= b.to) || null;
const days = (a, b) => Math.round((new Date(b) - new Date(a)) / DAY);
const iso = d => new Date(d).toISOString().slice(0, 10);

/* ---------- Setup → nodes ---------- */
function resolveTopics(spec, options) {
  const opts = Array.isArray(spec.options) ? spec.options : [];
  return spec.topics.filter(t => {
    if (!t.option) return true;
    const chosen = (options || {})[t.option];
    const o = opts.find(x => x.id === t.option);
    if (o && o.routes) { /* the choice is a route (a group of topics), e.g. Politics 3A or 3B */
      const picked = Array.isArray(chosen) ? chosen : (chosen ? [chosen] : []);
      return picked.some(r => o.routes[r] && (o.routes[r].topics || []).includes(t.id));
    }
    return Array.isArray(chosen) ? chosen.includes(t.id) : chosen === t.id;
  });
}
function nodeId(specId, topicId) { return `${specId}|${topicId}`; }
function newState(setup, specs) {
  const s = { version: 3, created: null, setup, nodes: {}, errors: [], hours: 0, dayHours: {}, transitions: [], practice: [],
    essays: [], papers: [], cards: {}, generated: {}, coach: {}, coachNotes: {}, pins: {}, doneToday: {}, coldDone: {}, checklist: {}, boundaries: {} };
  for (const sub of setup.subjects) {
    const spec = specs[sub.specId]; if (!spec) continue;
    for (const t of resolveTopics(spec, sub.options)) {
      s.nodes[nodeId(spec.id, t.id)] = { spec: spec.id, topic: t.id, state: 'Unassessed', lastPractised: null, fluentPasses: [], wrong: [], taught: null };
    }
  }
  return s;
}
/* Topic weight = share of its component's weight, split evenly across the component's studied topics. */
function topicWeights(spec, options) {
  const topics = resolveTopics(spec, options); const out = {};
  for (const c of spec.components) {
    const mine = c.coversAll ? topics : topics.filter(t => t.component === c.id); if (!mine.length) continue;
    for (const t of mine) out[t.id] = (out[t.id] || 0) + c.weight / mine.length;
  }
  return out;
}

/* ---------- Mastery rules (same shape as the maths engine) ---------- */
function recordResult(state, id, r, today) {
  const n = state.nodes[id]; if (!n) return;
  n.lastPractised = today;
  if (n.state === 'Unassessed' && r.taught) { n.state = 'Learning'; n.taught = today; }
  if (n.state === 'Learning' && r.recall && r.recall.total >= 10 && r.recall.correct >= 8) n.state = 'Fluent';
  if (n.state === 'Learning' && r.essayLevel && r.essayLevel >= 3) n.state = 'Fluent';
  if (n.state === 'Fluent' && r.examStandard && r.allCorrect) {
    n.fluentPasses.push({ date: today, interleaved: !!r.interleaved });
    const passes = n.fluentPasses;
    const earlier = passes.filter(p => days(p.date, today) >= 21);
    if (earlier.length && passes.some(p => p.interleaved)) n.state = 'Secure';
  }
}
function recordWrong(state, id, mode, today) {
  const n = state.nodes[id]; if (!n) return;
  n.wrong.push({ date: today, mode }); n.lastPractised = today;
  if (n.state === 'Secure') n.state = 'Fluent';
  else if (n.state === 'Fluent') {
    const recent = n.wrong.filter(w => days(w.date, today) <= 30).length;
    if (mode === 'KNOWLEDGE-GAP' || recent >= 2) n.state = 'Learning';
  }
}
function applyDecay(state, today) {
  const demoted = [];
  for (const [id, n] of Object.entries(state.nodes)) {
    if (n.state !== 'Unassessed' && n.lastPractised && days(n.lastPractised, today) > 56 && n.state !== 'Learning') { n.state = 'Learning'; demoted.push(id); }
  }
  return demoted;
}
function dueForReview(state, today) {
  const interval = { Learning: 3, Fluent: 10, Secure: 28 };
  return Object.entries(state.nodes).filter(([, n]) => n.state !== 'Unassessed' && (!n.lastPractised || days(n.lastPractised, today) >= interval[n.state])).map(([id]) => id);
}
/* Case-study / recall cards: simple spaced schedule kept in state.cards[cardId] = {node, front, back, ease, due} */
function scheduleCard(card, ok, today) {
  card.reps = (card.reps || 0) + 1;
  if (ok) { card.ease = Math.min(8, (card.ease || 1) * 2); card.due = iso(new Date(today).getTime() + card.ease * DAY); }
  else { card.ease = 1; card.due = iso(new Date(today).getTime() + DAY); }
}
const dueCards = (state, today) => Object.values(state.cards).filter(c => !c.due || c.due <= today);

/* ---------- Scheduling across subjects ---------- */
function subjectPriority(state, specs, today) {
  /* Lower mastery and nearer neglect → higher priority. */
  const bySpec = {};
  for (const [id, n] of Object.entries(state.nodes)) {
    const b = bySpec[n.spec] = bySpec[n.spec] || { spec: n.spec, nodes: 0, mastery: 0, stale: 0 };
    b.nodes++; b.mastery += { Unassessed: 0, Learning: 0.35, Fluent: 0.65, Secure: 0.9 }[n.state];
    if (n.lastPractised) b.stale = Math.max(b.stale, days(n.lastPractised, today)); else b.stale = Math.max(b.stale, 30);
  }
  return Object.values(bySpec).map(b => ({ ...b, score: (1 - b.mastery / Math.max(1, b.nodes)) + Math.min(1, b.stale / 30) })).sort((a, b) => b.score - a.score);
}
function buildSession(state, specs, today) {
  const phase = phaseFor(today); if (!phase) return { phase: null, steps: [] };
  const decayed = applyDecay(state, today);
  const holiday = phase.kind === 'HOLIDAY';
  const steps = [];
  const cards = dueCards(state, today).length;
  steps.push({ kind: 'cards', title: 'Recall cards', minutes: cards ? Math.min(20, 5 + cards) : 10, detail: cards ? `${cards} due — definitions, figures, case-study facts.` : 'Nothing due. Ten minutes on the weakest room\u2019s cards instead.', nodes: [] });
  const due = dueForReview(state, today);
  const prio = subjectPriority(state, specs, today);
  for (const d of due.slice(0, holiday ? 3 : 2)) {
    const n = state.nodes[d]; const spec = specs[n.spec]; const topic = spec.topics.find(t => t.id === n.topic);
    steps.push({ kind: 'review', title: `Review: ${spec.subject} \u2014 ${topic.name}`, minutes: n.state === 'Learning' ? 25 : 15, detail: `${n.state}. Short questions and one case-study recall, then log.`, nodes: [d] });
  }
  const retests = retestQueue(state, today);
  if (retests.length) steps.push({ kind: 'retest', title: `Re-test: ${retests.length} question${retests.length === 1 ? '' : 's'} from your papers`, minutes: Math.min(30, 5 + 3 * retests.length), detail: 'Fresh questions shaped like the ones that lost marks. Two clean passes a week apart clear one.', nodes: [...new Set(retests.map(e => e.node))] });
  /* New topics come from several courses, not the same one every day: subjects with untouched topics are taken in
     priority order, equal-priority subjects rotating with the date, up to three a day in the holidays and two in
     term (one when reviews are already due), one topic each. */
  const fresh = prio.filter(p => Object.values(state.nodes).some(n => n.spec === p.spec && n.state === 'Unassessed'));
  const groups = []; for (const p of fresh) { const g = groups[groups.length - 1]; if (g && g[0].score - p.score < 0.05) g.push(p); else groups.push([p]); }
  const rot = Math.max(0, days('2026-01-01', today));
  const ordered = groups.flatMap(g => { const k = rot % g.length; return g.slice(k).concat(g.slice(0, k)); });
  const wantNew = holiday ? 3 : (due.length === 0 ? 2 : 1);
  for (const top of ordered.slice(0, wantNew)) {
    const [id, n] = Object.entries(state.nodes).find(([, n]) => n.spec === top.spec && n.state === 'Unassessed');
    const spec = specs[n.spec]; const topic = spec.topics.find(t => t.id === n.topic);
    steps.push({ kind: 'new', title: `New: ${spec.subject} \u2014 ${topic.name}`, minutes: holiday ? 60 : 40, detail: holiday ? 'Lesson, then case-study cards, then the exit ticket.' : 'Term-time: lesson only today; cards and exit ticket next session.', nodes: [id] });
  }
  const essayCandidates = Object.entries(state.nodes).filter(([, n]) => ['Fluent', 'Secure'].includes(n.state) && specs[n.spec].essaySubject);
  if (essayCandidates.length && (holiday || new Date(today).getDay() === 6)) {
    const [id, n] = essayCandidates[Math.floor(days('2026-01-01', today) % essayCandidates.length)];
    const spec = specs[n.spec]; const topic = spec.topics.find(t => t.id === n.topic);
    steps.push({ kind: 'essay', title: `Timed essay: ${spec.subject} \u2014 ${topic.name}`, minutes: 45, detail: 'Plan for five minutes, write to time, photograph, mark to the board\u2019s levels.', nodes: [id] });
  }
  steps.push({ kind: 'log', title: 'Log and close', minutes: 10, detail: 'Every weak answer gets an error entry with a failure mode now, not later.', nodes: [] });
  return { phase, steps, decayed, priority: prio };
}

/* The desktop's resurfacing rule: an item saved exactly 7, 21 or 60 days ago comes back once in the daily plan.
   `all` is the /desk/all shape: {rooms:{<roomId>:{count, latest:[{id, kind, at, title, thumb…}]}}}. */
function deskResurface(all, today) {
  const out = []; if (!all || !all.rooms) return out;
  for (const [room, r] of Object.entries(all.rooms)) for (const item of (r.latest || [])) {
    if (!item || !item.at) continue; const age = days(String(item.at).slice(0, 10), today);
    if (age === 7 || age === 21 || age === 60) out.push({ room, item, age });
  }
  return out.slice(0, 2);
}

/* ---------- Prediction ---------- */
const MASTERY_FACTOR = { Unassessed: 0.05, Learning: 0.35, Fluent: 0.62, Secure: 0.85 };
const DEFAULT_BOUNDS = { 'A*': 80, A: 70, B: 60, C: 50, D: 40, E: 30 }; /* percentage estimates until real boundaries are entered */
function gradeFor(pct, bounds) { for (const g of ['A*', 'A', 'B', 'C', 'D', 'E']) if (pct >= bounds[g]) return g; return 'U'; }
function predictSubject(state, spec, options) {
  const w = topicWeights(spec, options); let m = 0, tot = 0;
  for (const [tid, weight] of Object.entries(w)) { const n = state.nodes[nodeId(spec.id, tid)]; if (!n) continue; m += weight * MASTERY_FACTOR[n.state]; tot += weight; }
  let pct = tot ? (m / tot) * 100 : 0;
  const papers = state.papers.filter(p => p.spec === spec.id && p.total > 0).slice(-6);
  if (papers.length) { const ppct = papers.reduce((a, p) => a + p.score / p.total, 0) / papers.length * 100; pct = 0.5 * pct + 0.5 * ppct; }
  const band = Math.max(4, 12 - 2 * papers.length);
  const bounds = state.boundaries[spec.id] || DEFAULT_BOUNDS;
  return { pct: Math.round(pct), low: Math.max(0, Math.round(pct - band)), high: Math.min(100, Math.round(pct + band)), grade: gradeFor(pct, bounds), gradeLow: gradeFor(pct - band, bounds), gradeHigh: gradeFor(pct + band, bounds), papersUsed: papers.length, estimatedBounds: !state.boundaries[spec.id] };
}

/* ---------- Weekly report ---------- */
function weeklyReport(state, specs, today) {
  const since = iso(new Date(today) - 7 * DAY);
  const errs = state.errors.filter(e => e.date >= since && e.date <= today);
  const modes = {}; for (const e of errs) modes[e.mode] = (modes[e.mode] || 0) + 1;
  const dominant = Object.keys(modes).sort((a, b) => modes[b] - modes[a])[0] || null;
  const hours = Object.entries(state.dayHours).filter(([d]) => d >= since && d <= today).reduce((a, [, h]) => a + h, 0);
  const essays = state.essays.filter(e => e.date >= since && e.date <= today);
  const lines = [`Week to ${today}`, `Hours: ${hours.toFixed(1)}`];
  for (const sub of state.setup.subjects) { const spec = specs[sub.specId]; if (!spec) continue; const p = predictSubject(state, spec, sub.options);
    const secure = Object.values(state.nodes).filter(n => n.spec === spec.id && n.state === 'Secure').length, total = Object.values(state.nodes).filter(n => n.spec === spec.id).length;
    lines.push(`${spec.subject} (${spec.board}): predicted ${p.grade} (${p.gradeLow}\u2013${p.gradeHigh}), ${secure}/${total} topics secure${p.estimatedBounds ? ', boundaries estimated' : ''}`); }
  lines.push(`Essays marked: ${essays.length}${essays.length ? ` — average level ${(essays.reduce((a, e) => a + (e.level || 0), 0) / essays.length).toFixed(1)}` : ''}`);
  lines.push(`Errors logged: ${errs.length}${dominant ? ` — mostly ${dominant}` : ''}`);
  lines.push(dominant ? `Focus next week: ${REMEDY[dominant]}` : 'Focus next week: keep the review queue clear.');
  return { text: lines.join('\n'), hours, errors: errs.length, dominant, essays: essays.length };
}

/* ---------- Three-panel GUI helpers (pure) ---------- */
/* Consecutive days with logged hours ending today; a day not yet studied today still counts from yesterday. */
function streakDays(state, today) {
  const dh = (state && state.dayHours) || {};
  let n = 0, d = new Date(today).getTime();
  if (!(dh[iso(d)] > 0)) d -= DAY;
  while (dh[iso(d)] > 0) { n++; d -= DAY; }
  return n;
}
/* The deterministic "next step": the first undone step of today's session. Used when the tutor cannot be asked. */
function nudgeFallback(state, specs, today) {
  const s = buildSession(state, specs, today);
  const done = (state.doneToday || {})[today] || [];
  const i = s.steps.findIndex((x, j) => !done.includes(j));
  if (i < 0) return { text: s.steps.length ? 'Session complete. With twenty minutes left, clear the recall queue so tomorrow starts lighter.' : 'Nothing is scheduled today. Open any room and review its cards.', node: null, station: 'cards' };
  const st = s.steps[i];
  const station = st.kind === 'new' ? 'lesson' : st.kind === 'essay' ? 'essay' : st.kind === 'cards' ? 'cards' : 'practise';
  return { text: `${st.title} (${st.minutes} min): ${st.detail}`.slice(0, 200), node: st.nodes[0] || null, station };
}
/* What the tutor is asked when writing the next-step nudge: the session, mastery, recent errors, due cards, candidate rooms. */
function nudgePrompt(state, specs, today) {
  const s = buildSession(state, specs, today);
  const done = (state.doneToday || {})[today] || [];
  const name = (state.setup && state.setup.student) || 'the student';
  const courses = state.setup.subjects.map(sub => { const sp = specs[sub.specId]; if (!sp) return null; const p = predictSubject(state, sp, sub.options); const ns = Object.values(state.nodes).filter(n => n.spec === sp.id); const by = {}; for (const n of ns) by[n.state] = (by[n.state] || 0) + 1; return `${sp.subject} (${sp.board} ${sp.code}): predicted ${p.grade}, ${ns.length} topics — ${STATES.map(st => `${by[st] || 0} ${st.toLowerCase()}`).join(', ')}`; }).filter(Boolean);
  const cand = []; const push = id => { if (id && state.nodes[id] && !cand.includes(id) && cand.length < 12) cand.push(id); };
  for (const st of s.steps) for (const id of st.nodes) push(id);
  for (const id of dueForReview(state, today)) push(id);
  for (const e of state.errors.slice(0, 8)) push(e.node);
  const nodeLine = id => { const n = state.nodes[id]; const sp = specs[n.spec]; const t = sp && sp.topics.find(x => x.id === n.topic); return `${id} = ${sp ? sp.subject : ''}: ${t ? t.name : n.topic} [${n.state}${n.lastPractised ? ', last worked ' + n.lastPractised : ''}]`; };
  const errs = state.errors.slice(0, 8).map(e => { const n = state.nodes[e.node]; const sp = n && specs[n.spec]; return `${e.date} ${sp ? sp.subject : ''} ${e.node}: ${e.mode} — ${String(e.ref || '').slice(0, 70)}`; });
  const due = dueCards(state, today).length, streak = streakDays(state, today);
  return `You are the study coach inside ${name}'s revision platform. Today is ${today}. Decide the single best thing to do now and say why, in one sentence of at most 35 words, addressed to ${name} by name and specific to the data below. Prefer the weakest, most heavily examined thing over the most pleasant.

Today's session plan (done: ${done.length ? done.map(i => i + 1).join(', ') : 'none yet'}):
${s.steps.map((x, i) => `${i + 1}. ${x.title} — ${x.minutes} min — ${x.detail}${x.nodes[0] ? ` [${x.nodes[0]}]` : ''}`).join('\n') || 'nothing scheduled'}

Courses:
${courses.join('\n')}

Recent mistakes (newest first):
${errs.join('\n') || 'none logged'}

Recall cards due: ${due}. Study streak: ${streak} day${streak === 1 ? '' : 's'}.

Rooms you may point to (use the id exactly as written):
${cand.map(nodeLine).join('\n') || 'none'}

Reply with ONLY this JSON and nothing else: {"text": "<the sentence>", "node": "<one id from the list, or null>", "station": "<one of lesson, cards, practise, essay, exit>"}`;
}
/* Where to look things up for a topic: the topic's own links, the course's checked hub pages, then a Bitesize search.
   Videos are not a search link: the Worker finds, checks and lists real ones for the room (see the rail). */
function topicLinks(spec, topic) {
  const out = [];
  for (const l of (topic && topic.links) || []) if (l && l.url) out.push({ t: l.t, url: l.url, kind: l.kind || 'notes', why: 'Chosen for this topic' });
  for (const h of (spec.resources && spec.resources.hubs) || []) if (h && h.url) out.push({ t: h.name, url: h.url, kind: h.kind || 'notes', why: `${spec.board} ${spec.code} hub page` });
  out.push({ t: `BBC Bitesize: ${topic.name}`, url: 'https://www.bbc.co.uk/bitesize/search?q=' + encodeURIComponent(`${spec.subject} ${topic.name}`), kind: 'notes', why: 'Bitesize search' });
  return out;
}

/* The drawn desk. Days to the exam: to the first day of the exam term in the chosen year, or mid-May if the
   calendar does not reach that year. Piles: the bank at each difficulty minus the questions got right there
   in this room, never below one sheet while the bank has any. */
function daysToExam(setup, today) {
  const y = setup && setup.examYear; if (!y) return null;
  const b = BLOCKS.find(x => x.kind === 'EXAM' && x.from.startsWith(String(y)));
  return Math.max(0, days(today, b ? b.from : `${y}-05-11`));
}
function pileCounts(questions, practice, room) {
  const out = [1, 2, 3].map(d => ({ d, bank: (questions || []).filter(q => q.d === d).length, done: 0, left: 0 }));
  for (const p of practice || []) if (p.node === room && p.ok && p.d >= 1 && p.d <= 3) out[p.d - 1].done++;
  for (const o of out) o.left = o.bank ? Math.max(1, o.bank - o.done) : 0;
  return out;
}
/* ---------- Real papers: marked question by question, fed back into rooms with damping ----------
   A paper record: {id, spec, series, paper, component, name, date, total, score, status, questions:[{q, marks, awarded,
   topic, codes, mode, confidence, legibility, attempted, failureMode, comment, lines, slipGuess, selfMark}], boundaries}.
   Rules (Khan Academy's mastery ladder, FSRS's lapse damping): below 70% of a topic's marks moves the room one state down,
   never more than one step from one paper; full marks on at least four marks under exam conditions counts as a fluent pass;
   an Unassessed room becomes Learning the moment a paper touches it. */
const PAPER_DROP_BELOW = 0.7, RETEST_DAYS = 7, RETEST_MAX_ATTEMPTS = 3, RETEST_CAP = 10;
function topicForCode(spec, code) {
  const c = String(code || '').trim(); if (!c) return null;
  const hits = spec.topics.filter(t => (t.ideas || []).some(i => i.code === c));
  if (hits.length === 1) return hits[0].id;
  const byPrefix = spec.topics.filter(t => c === t.id || c.startsWith(t.id + '.'));
  return byPrefix.length ? byPrefix.sort((a, b) => b.id.length - a.id.length)[0].id : null;
}
function questionTopic(spec, q) {
  if (q.topic && spec.topics.some(t => t.id === q.topic)) return q.topic;
  for (const c of q.codes || []) { const t = topicForCode(spec, c); if (t) return t; }
  return null;
}
function paperTopics(spec, paper) {
  const by = {};
  for (const q of paper.questions || []) {
    const tid = questionTopic(spec, q); if (!tid || !(q.marks > 0)) continue;
    const t = by[tid] = by[tid] || { topic: tid, marks: 0, awarded: 0, questions: [] };
    t.marks += q.marks; t.awarded += q.legibility === 'unreadable' ? 0 : Math.max(0, Math.min(q.marks, q.awarded || 0)); t.questions.push(q.q);
  }
  return Object.values(by);
}
/* Priority = marks lost on the topic, as a share of the paper, weighted by the topic's share of the qualification. */
function paperPriority(state, spec, paper, options) {
  const w = topicWeights(spec, options || {}); const total = paper.total || (paper.questions || []).reduce((a, q) => a + (q.marks || 0), 0) || 1;
  return paperTopics(spec, paper).map(t => ({ ...t, weight: w[t.topic] || 0, lost: t.marks - t.awarded, priority: ((t.marks - t.awarded) / total) * (w[t.topic] || 0) })).sort((a, b) => b.priority - a.priority || b.lost - a.lost);
}
function applyPaper(state, spec, paper, today) {
  const moves = [];
  for (const t of paperTopics(spec, paper)) {
    const id = nodeId(spec.id, t.topic); const n = state.nodes[id]; if (!n) continue;
    const before = n.state; const frac = t.awarded / t.marks;
    if (n.state === 'Unassessed') { n.state = 'Learning'; n.taught = n.taught || today; }
    if (frac < PAPER_DROP_BELOW) { if (before === 'Secure') n.state = 'Fluent'; else if (before === 'Fluent') n.state = 'Learning'; }
    else if (frac >= 1 && t.marks >= 4) {
      if (n.state === 'Learning') n.state = 'Fluent';
      else if (n.state === 'Fluent' && before === 'Fluent') recordResult(state, id, { examStandard: true, allCorrect: true, interleaved: true }, today);
    }
    n.lastPractised = today;
    moves.push({ topic: t.topic, marks: t.marks, awarded: t.awarded, before, after: n.state });
  }
  for (const q of paper.questions || []) {
    const tid = questionTopic(spec, q); if (!tid || !(q.marks > 0)) continue;
    const awarded = q.legibility === 'unreadable' ? null : Math.max(0, Math.min(q.marks, q.awarded || 0));
    if (awarded === null || awarded >= q.marks) continue;
    const id = nodeId(spec.id, tid); const n = state.nodes[id]; if (!n) continue;
    const mode = FAILURE_MODES.some(m => m.code === q.failureMode) ? q.failureMode : (q.attempted === false ? 'KNOWLEDGE-GAP' : 'APPLICATION');
    n.wrong.push({ date: today, mode });
    state.errors.unshift({ date: today, node: id, ref: `Q${q.q} · ${paper.name || paper.paper} · ${paper.seriesName || paper.series}`, mode, fix: q.comment || REMEDY[mode], paper: paper.id, q: q.q, marks: q.marks, awarded, confidence: q.confidence || null, slipGuess: q.slipGuess || null, retestDue: iso(new Date(today).getTime() + RETEST_DAYS * DAY), attempts: 0, passes: 0, points: (q.points || []).map(p => ({ text: p.text, max: p.max })), transcript: String(q.transcript || '').slice(0, 600) });
  }
  return moves;
}
/* Errors from papers come back as fresh questions a week later; three misses escalate to relearning the room instead. */
function retestQueue(state, today) {
  return state.errors.filter(e => e.paper && e.retestDue && e.retestDue <= today && !e.resolved && !e.relearn && state.nodes[e.node]).slice(0, RETEST_CAP);
}
function recordRetest(state, err, ok, today) {
  if (ok) { err.passes = (err.passes || 0) + 1; if (err.passes >= 2) { err.resolved = true; err.retestDue = null; } else err.retestDue = iso(new Date(today).getTime() + RETEST_DAYS * DAY); }
  else { err.attempts = (err.attempts || 0) + 1; err.passes = 0; if (err.attempts >= RETEST_MAX_ATTEMPTS) { err.relearn = true; err.retestDue = null; const n = state.nodes[err.node]; if (n && n.state !== 'Unassessed') n.state = 'Learning'; } else err.retestDue = iso(new Date(today).getTime() + RETEST_DAYS * DAY); }
  const n = state.nodes[err.node]; if (n) n.lastPractised = today;
}
/* Grade on a series' published boundaries: {grade: marks needed on this paper}. Any grade labels (9–1 or A*–E). */
function gradeFromBoundaries(score, boundaries) {
  if (!boundaries) return null;
  const rows = Object.entries(boundaries).map(([g, m]) => [g, +m]).filter(([, m]) => !isNaN(m)).sort((a, b) => b[1] - a[1]);
  for (const [g, m] of rows) if (score >= m) return g;
  return rows.length ? 'U' : null;
}
if (typeof module !== 'undefined') module.exports = { DAY, STATES, FAILURE_MODES, REMEDY, BLOCKS, phaseFor, days, iso, resolveTopics, nodeId, newState, topicWeights, deskResurface, daysToExam, pileCounts,
  recordResult, recordWrong, applyDecay, dueForReview, scheduleCard, dueCards, subjectPriority, buildSession, topicForCode, questionTopic, paperTopics, paperPriority, applyPaper, retestQueue, recordRetest, gradeFromBoundaries, RETEST_CAP, MASTERY_FACTOR, DEFAULT_BOUNDS, gradeFor, predictSubject, weeklyReport, streakDays, nudgeFallback, nudgePrompt, topicLinks };
