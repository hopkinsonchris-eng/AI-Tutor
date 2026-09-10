/* Subject families: one schema, four ways of filling it in.
   This file is the single source of truth. The Worker's course builder composes its prompts from
   these rules, and the course-builder skill's reference is generated from them
   (scripts/sync-skill.js) — a test fails if the two ever diverge. */

const FAMILIES = {
  essay: {
    id: 'essay',
    name: 'Essay-based',
    examples: 'Geography, History, Politics, Business, Economics, Sociology, Psychology, English Literature, Religious Studies',
    essaySubject: true,
    markStyle: 'levels',
    rules: [
      'Marking is by levels: markConventions.style = "levels". Give at least three essayShapes, each with the marks, the minutes the paper allows, and the structure an examiner rewards (introduction that defines terms and signals the argument; developed paragraphs with point, evidence, analysis and a mini-judgement; a conclusion that answers the question with a qualified position).',
      'Command words carry the marks: include every command word the specification or its mark schemes use, and say precisely what each demands (Describe — no reasons; Explain — cause → effect chains; Assess / Evaluate / To what extent — weighed judgement).',
      'Each key idea is a claim the student must be able to argue, not a heading: idea = the concept in a phrase, content = what the specification actually requires under it, in the board’s own terms.',
      'caseStudies lists the named examples, case studies or set texts the specification requires for the topic, in the wording the specification uses (for example "One high-energy coastline"). Empty only if the specification genuinely names none.',
      'Where the specification offers options (choose one of several topics), model them as options with the topic ids they choose between, and set topic.option on each choice.',
    ],
    kit: { kinds: { paragraph: 2, factfile: 1, plan: 1 }, rules: [
      'Model paragraphs: at least two, each titled with the level it would earn under the board’s levels (for example "Model paragraph — Level 4") and written to that level, with the point, the named evidence, the developed chain of reasoning and the mini-judgement; one strong and one weaker, so the student can see the difference.',
      'A case-study fact file for each named example the specification requires for the topic: the dates, figures, places and names an examiner rewards, one per item.',
      'An essay plan for one question in the board’s own command words: the decoded question, the paragraphs in order, the evaluation thread, and what the conclusion must say.',
      'Questions are exam-style in the board’s command words, with the marks each carries; `a` is the indicative content an examiner expects in one or two lines, `sol` is a model answer at the top level.',
      'The lesson teaches the argument, not the heading: every section ends with what a top-level answer does with the idea.',
    ] },
  },
  quantitative: {
    id: 'quantitative',
    name: 'Quantitative',
    examples: 'Mathematics, Further Mathematics, Statistics, Computer Science theory, the calculation strands of Economics and Business',
    essaySubject: false,
    markStyle: 'points',
    rules: [
      'Marking is by points: markConventions.style = "points". Name the mark types the board uses (M method, A accuracy, B independent, and any others) in markConventions.summary, and give essayShapes as an empty array.',
      'Command words are the ones that change what scores: Show that, Hence, Hence or otherwise, Prove, Find, Solve, Sketch, Verify, State — say for each what the mark scheme does with it.',
      'Each key idea is a technique or result the student must be able to perform: idea = the technique, content = the standard forms, the conditions under which it applies, and the step the mark scheme looks for.',
      'caseStudies holds worked-example prompts rather than case studies: the archetypal question each key idea is tested with, one line each. Empty is not acceptable for a quantitative topic.',
      'Keep the specification’s own section numbering as topic and idea codes (for example "P1", "P1.1") so a student and a teacher can find the line in the document.',
    ],
    kit: { kinds: { formulae: 1 }, rules: [
      'A formulae sheet: every result the student must write from memory for this topic, one per item, in the board’s notation, saying which ones the exam formulae booklet provides.',
      'Worked examples are faded: each step is one line the student can predict before revealing it, ending in the answer; include the line the mark scheme awards the method mark for.',
      'Every question has a single checkable answer in `a` and the full method in `sol`; difficulty 1 is a one-idea question, 2 is exam standard, 3 combines this topic with an earlier one or an unfamiliar context.',
      'Hints go from a nudge, to the method, to the first line of working — never the answer.',
      'Cards hold definitions, standard forms and results, not questions.',
    ] },
  },
  science: {
    id: 'science',
    name: 'Science with practicals',
    examples: 'Biology, Chemistry, Physics, Combined Science, Environmental Science, Geology',
    essaySubject: false,
    markStyle: 'points',
    rules: [
      'Marking is by points: markConventions.style = "points". Extended-response questions exist and are levels-marked; describe them in markConventions.summary and give their shapes in essayShapes (a 6-mark and, at A level, a 9- or 15-mark shape) — so essayShapes is non-empty even though essaySubject is false.',
      'Command words follow the board’s published science list: Describe, Explain, Compare, Evaluate, Calculate, Determine, Suggest, Justify, Predict — include the mathematical ones.',
      'Each key idea pairs the content statement with what the student must be able to do with it: idea = the concept, content = the specification statement plus the calculation, equation or mechanism it entails.',
      'Every required practical (RP / PAG / core practical) appears exactly once: as a key idea inside the content topic the document lists it under, coded with that content statement’s own number and named “Required practical N: title” as the document names it — never as an aggregate practicals topic as well. Its content is what the document says: the activity and the AT / WS / MS skills it lists against it. caseStudies holds the practical titles for the topic, nothing the document does not state (no apparatus or methods from outside it).',
      'Include a topic for the working-scientifically / practical-skills strand if the specification assesses it separately, mapped to the component that examines it.',
    ],
    kit: { kinds: { extended: 1, practical: 'ifPracticals' }, rules: [
      'A method sheet for every required practical the topic names: the title as the specification gives it, the method in numbered steps, the independent, dependent and control variables, the apparatus the document lists, the likely errors, and the AT / WS skills it assesses.',
      'At least one extended-response model answer (six marks at GCSE, nine at A level) written to the levels, with a note on what a bottom-level answer misses.',
      'Questions mix recall, explanation and calculation; every calculation question gives the equation, the substitution and the answer with its unit in `sol`, and the intermediate mark-scheme step in a hint.',
      'The lesson pairs each content statement with what the student must do with it: the mechanism, the equation, the graph or the practical.',
      'Cards hold definitions, equations with units, and the key figures.',
    ] },
  },
  language: {
    id: 'language',
    name: 'Modern foreign language',
    examples: 'French, Spanish, German, Italian, Mandarin, Urdu',
    essaySubject: false,
    markStyle: 'levels',
    rules: [
      'Components are the four skills — listening, speaking, reading, writing — each a paper with its own marks, minutes and weight; note tiering (Foundation / Higher) at GCSE in the component name.',
      'Marking is by levels for productive skills and by points for receptive ones: markConventions.style = "levels", and markConventions.summary says how reading and listening are point-marked. essayShapes describe the writing tasks (the 90-word, 150-word and translation shapes at GCSE; the essay on a set text or film at A level).',
      'Topics are the specification’s themes and sub-themes (for example "Identity and culture — family and relationships"); key ideas within a topic are the vocabulary fields and the grammar the theme is used to test.',
      'A grammar topic per tier or level lists the structures the specification requires (tenses, agreement, negation, subjunctive where relevant) as key ideas with content naming the forms.',
      'caseStudies holds the set texts and films at A level, and the speaking-task role-play and photo-card formats at GCSE. Command words are the task instructions in the target language and English.',
    ],
    kit: { kinds: { vocab: 2, grammar: 1 }, rules: [
      'Vocabulary fields: at least two per topic, each a titled list of the words and phrases the theme is tested with, target language first, then English.',
      'A grammar sheet for the structures the theme is used to test, with the form and one example sentence for each.',
      'Questions are the exam’s task types: comprehension in the target language, translation both ways, and a writing task with the marks it carries; `sol` gives a model answer.',
      'The lesson is written in English about the theme and its grammar, with every example in the target language.',
      'Cards are the word or phrase on the front and the translation on the back.',
    ] },
  },
};

/* Which family a subject belongs to, from its name. The builder confirms this from the document;
   this is the prior. */
function familyFor(subject) {
  const s = String(subject || '').toLowerCase();
  if (/mathematic|maths|statistic|further math/.test(s)) return 'quantitative';
  if (/biolog|chemist|physic|science|geolog|environmental sci/.test(s)) return 'science';
  if (/french|spanish|german|italian|mandarin|chinese|urdu|arabic|japanese|russian|polish|welsh|latin|greek|language(?!\s*and\s*lit)/.test(s) && !/english/.test(s)) return 'language';
  return 'essay';
}

/* The kit rules as text: what a room's depth must contain for this family. */
function kitText(id) {
  const f = FAMILIES[id];
  if (!f) throw new Error('unknown family ' + id);
  return `${f.name} kit.\n` + f.kit.rules.map((r, i) => `${i + 1}. ${r}`).join('\n');
}

/* The rules as text, for prompts and for the skill reference. */
function familyText(id) {
  const f = FAMILIES[id];
  if (!f) throw new Error('unknown family ' + id);
  return `${f.name} (${f.examples}).\nessaySubject: ${f.essaySubject}. Mark style: ${f.markStyle}.\n` + f.rules.map((r, i) => `${i + 1}. ${r}`).join('\n');
}

module.exports = { FAMILIES, familyFor, familyText, kitText };
