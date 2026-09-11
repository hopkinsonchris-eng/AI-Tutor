/* The kit contract: what a room's depth must contain before students see it. Used by the Worker's depth
   pipeline (worker/depth.js) and by tests/kit.test.js, so a generated kit is held to one standard.

   validateKit(kit, topic, family) -> { ok, problems: [string] }
   Problems name the field and, for questions, the question number, so a model can act on them. */
const { FAMILIES } = require('./families.js');

/* A front that asks for any example, or for one of several acceptable answers: the back must offer more than one. */
const OPEN_FRONT = /\b(give|name|suggest|state|identify|describe|provide|outline|quote|pick|choose)\s+(an?|one|two|three)\s+(example|examples|named|possible|way|ways|reason|reasons|factor|factors|method|methods|cause|causes|effect|effects|limitation|limitations|advantage|advantages|disadvantage|disadvantages|benefit|benefits|risk|risks|use|uses|application|applications|source|sources|technique|techniques|strategy|strategies|consequence|consequences|impact|impacts|piece|pieces|situation|situations|case|cases|technology|technologies|policy|policies|difficulty|difficulties|problem|problems)\b|\b(an|one) example\b|\bfor example\b|\bsuch as\b.*\?/i;

const nums = s => (String(s).match(/\d+(?:[.,]\d+)?/g) || []).map(x => x.replace(',', ''));
const words = t => new Set(String(t).toLowerCase().match(/[a-z0-9£$%.]+/g) || []);

const KINDS = ['formulae', 'practical', 'extended', 'paragraph', 'factfile', 'plan', 'vocab', 'grammar', 'notes'];

function validateKit(kit, topic, family) {
  const problems = [];
  const bad = (m) => problems.push(m);
  if (!kit || typeof kit !== 'object') return { ok: false, problems: ['kit is not an object'] };
  const codes = new Set((topic.ideas || []).map(i => i.code));
  const codeList = [...codes].join(', ');

  const L = kit.lesson || {};
  if (typeof L.why !== 'string' || L.why.length < 200) bad('lesson.why: at least 200 characters saying why this room exists for the exam');
  const secs = Array.isArray(L.idea) ? L.idea : [];
  for (const c of codes) if (!secs.some(s => s && s.code === c)) bad(`lesson.idea: no section for key idea "${c}" — one section per key idea, citing its code`);
  secs.forEach((s, i) => {
    if (!s || !s.h || typeof s.t !== 'string' || s.t.length < 150) bad(`lesson.idea[${i}]: needs h (a heading) and t of at least 150 characters`);
    else if (!codes.has(s.code)) bad(`lesson.idea[${i}]: code "${s.code}" is not one of ${codeList}`);
  });
  const ex = Array.isArray(L.examples) ? L.examples : [];
  if (ex.length < 4 || ex.length > 6) bad(`lesson.examples: between 4 and 6 worked examples, has ${ex.length}`);
  ex.forEach((e, i) => {
    if (!e || !e.title || !Array.isArray(e.steps) || e.steps.length < 3 || e.steps.some(x => !x)) bad(`lesson.examples[${i}]: needs a title and at least 3 non-empty steps`);
    if (!e || typeof e.setup !== 'string' || e.setup.trim().length < 40) bad(`lesson.examples[${i}]: needs setup — the full problem the student sees before predicting: every value, statement or source given, and what is asked (at least 40 characters)`);
    if (!e || !Array.isArray(e.cues) || !Array.isArray(e.steps) || e.cues.length !== e.steps.length || e.cues.some(c => typeof c !== 'string' || c.trim().length < 8)) bad(`lesson.examples[${i}]: needs cues — one short question per step, asked before that step is revealed, that the setup and the steps so far make answerable`);
    if (e && typeof e.setup === 'string' && Array.isArray(e.steps) && e.steps.length >= 2) {
      const earlier = new Set(nums(e.steps.slice(0, -1).join(' '))), inSetup = new Set(nums(e.setup));
      const leaked = [...new Set(nums(e.steps[e.steps.length - 1]))].filter(x => !earlier.has(x) && inSetup.has(x) && !/^(0|1|2|3|4|5|10|100)$/.test(x));
      if (leaked.length) bad(`lesson.examples[${i}]: the setup gives away the result — ${leaked.join(', ')} first appears in the final step`);
      const a = words(e.steps[0]), b = words(e.setup); const inter = [...a].filter(w => b.has(w)).length;
      if (a.size >= 6 && inter / a.size > 0.8) bad(`lesson.examples[${i}]: the first step only restates the setup — it must make the first move`);
    }
  });
  const ch = Array.isArray(L.check) ? L.check : [];
  if (ch.length < 3) bad(`lesson.check: at least 3 check-yourself questions, has ${ch.length}`);
  ch.forEach((c, i) => { if (!c || !c.q || !c.a) bad(`lesson.check[${i}]: needs q and a`); });

  const R = kit.room || {};
  const facts = Array.isArray(R.facts) ? R.facts : [];
  if (facts.length < 3) bad(`room.facts: at least 3 key facts or formulae, has ${facts.length}`);
  const qs = Array.isArray(R.questions) ? R.questions : [];
  if (qs.length < 12 || qs.length > 16) bad(`room.questions: between 12 and 16 questions, has ${qs.length}`);
  const tiers = { 1: 0, 2: 0, 3: 0 };
  qs.forEach((q, i) => {
    const n = `room.questions[${i}] (question ${i + 1})`;
    if (!q || !q.q || !q.a || !q.sol) bad(`${n}: needs q, a (the answer) and sol (the full solution)`);
    if (!(q && Number.isInteger(q.m) && q.m >= 1)) bad(`${n}: m (marks) must be a whole number of at least 1`);
    if (!(q && [1, 2, 3].includes(q.d))) bad(`${n}: d (difficulty) must be 1, 2 or 3`); else tiers[q.d]++;
    if (!(q && Array.isArray(q.hints) && q.hints.length === 3 && q.hints.every(h => typeof h === 'string' && h.trim()))) bad(`${n}: hints must be exactly three non-empty strings, from a nudge to the method to the first line of working`);
    if (!(q && Array.isArray(q.codes) && q.codes.length)) bad(`${n}: codes must list at least one key-idea code`);
    else for (const c of q.codes) if (!codes.has(c)) bad(`${n}: code "${c}" is not one of ${codeList}`);
  });
  if (qs.length) for (const d of [1, 2, 3]) if (tiers[d] < 3) bad(`room.questions: at least 3 questions at difficulty ${d} (tier ${d}), has ${tiers[d]}`);
  const exit = Array.isArray(R.exit) ? R.exit : [];
  if (exit.length !== 4) bad(`room.exit: exactly 4 exit-ticket questions, has ${exit.length}`);
  exit.forEach((e, i) => { if (!e || !e.q || !e.a) bad(`room.exit[${i}]: needs q and a`); });

  const cards = Array.isArray(kit.cards) ? kit.cards : [];
  if (cards.length < 12 || cards.length > 15) bad(`cards: between 12 and 15 recall cards, has ${cards.length}`);
  cards.forEach((c, i) => {
    if (!c || !c.front || !c.back) bad(`cards[${i}]: needs front and back`);
    else if (String(c.back).split(/\s+/).length > (c.open ? 60 : 40)) bad(`cards[${i}]: back is over ${c.open ? 60 : 40} words`);
    if (c && c.open !== undefined && typeof c.open !== 'boolean') bad(`cards[${i}]: open must be true or false`);
    if (c && c.open && String(c.back).split(/;|\bor\b/).length < 2) bad(`cards[${i}]: an open card's back lists at least two acceptable answers separated by semicolons`);
    if (c && !c.open && OPEN_FRONT.test(String(c.front))) bad(`cards[${i}]: "${String(c.front).slice(0, 60)}" asks for an example or one of several possible answers, so it must be open: true with two or three acceptable answers on the back`);
    if (!(c && codes.has(c.code))) bad(`cards[${i}]: code "${c && c.code}" is not one of ${codeList}`);
  });

  const extras = Array.isArray(kit.extras) ? kit.extras : [];
  extras.forEach((x, i) => { if (!x || !KINDS.includes(x.kind) || !x.title || !Array.isArray(x.items) || !x.items.length || x.items.some(it => !it)) bad(`extras[${i}]: needs kind (one of ${KINDS.join(', ')}), a title and at least one non-empty item`); });
  const fam = FAMILIES[family];
  if (fam && fam.kit) for (const [kind, min] of Object.entries(fam.kit.kinds)) {
    const need = min === 'ifPracticals' ? ((topic.caseStudies || []).length ? 1 : 0) : min;
    const have = extras.filter(x => x && x.kind === kind).length;
    if (have < need) bad(`extras: the ${family} family needs at least ${need} "${kind}" section${need === 1 ? '' : 's'}, has ${have}`);
  }
  return { ok: problems.length === 0, problems };
}

module.exports = { validateKit, KINDS, OPEN_FRONT };
