/* worker/safeguarding.js on its own: what raises a flag, at which tier, and — just as important for a
   filter like this — what it correctly leaves alone, so ordinary exam content about difficult subjects
   (history, literature, PSHE) is never mistaken for a pupil's own crisis. The integration with the tutor
   proxy (short-circuiting an 'alert', appending SUPPORT_LINES to a 'signpost', logging every match to KV,
   the /manage/safeguarding admin surface) is covered in tests/worker.test.js. */
const path = require('path');
const { loadModule } = require('./_load.js');
let pass = 0; const fails = [];
const ok = (l, c, d = '') => c ? pass++ : fails.push(l + (d ? ' — ' + d : ''));

const S = loadModule(path.join(__dirname, '..', 'worker', 'safeguarding.js'), {}).exports;
const { scanForConcern, SAFE_RESPONSE, SUPPORT_LINES } = S;

/* ---------- alert tier: named self-harm/suicidal intent, first person ---------- */
ok('A1 "I want to kill myself" is an alert', scanForConcern('I want to kill myself').tier === 'alert');
ok('A1 the category is suicide-or-self-harm', scanForConcern('I want to kill myself').category === 'suicide-or-self-harm');
ok('A2 "I\'m thinking about ending my life" is an alert', scanForConcern("I'm thinking about ending my life").tier === 'alert');
ok('A3 "how do I kill myself" (method-seeking) is an alert', scanForConcern('Can you tell me how do I kill myself').tier === 'alert');
ok('A4 "I don\'t want to wake up" is an alert', scanForConcern("Honestly I don't want to wake up") .tier === 'alert');
ok('A5 "I don\'t want to be here anymore" is an alert', scanForConcern("I don't want to be here anymore").tier === 'alert');
ok('A6 mixed case and punctuation still match', scanForConcern('I WANT TO KILL MYSELF!!!').tier === 'alert');

/* ---------- alert tier: abuse disclosure, first person ---------- */
ok('B1 "my stepdad hits me" is an alert', scanForConcern('My stepdad hits me most nights').tier === 'alert');
ok('B2 the category is abuse-disclosure', scanForConcern('My stepdad hits me most nights').category === 'abuse-disclosure');
ok('B3 "I am being abused" is an alert', scanForConcern('I am being abused and I don’t know what to do').tier === 'alert');
ok('B4 "I don\'t feel safe at home" is an alert', scanForConcern("I don't feel safe at home").tier === 'alert');

/* ---------- signpost tier: broader distress ---------- */
ok('C1 "I hate my life" is a signpost, not an alert', scanForConcern('I hate my life so much').tier === 'signpost');
ok('C2 "I am being bullied" is a signpost', scanForConcern('I am being bullied at school and it’s awful').tier === 'signpost');
ok('C3 "I can\'t cope anymore" is a signpost', scanForConcern("I can't cope anymore with everything").tier === 'signpost');
ok('C4 "no one would care if I disappeared" is a signpost', scanForConcern('Sometimes I think no one would care if I disappeared').tier === 'signpost');
ok('C5 disordered eating language is a signpost', scanForConcern("I've been making myself sick after dinner").tier === 'signpost');

/* ---------- severity: an alert match wins even alongside a signpost-level phrase ---------- */
ok('D1 a message matching both tiers is reported as an alert', scanForConcern("I hate my life and I want to kill myself").tier === 'alert');

/* ---------- what must NOT trip it: ordinary exam content about the same subjects, in the third person ---------- */
ok('E1 an essay question about a text is not flagged', scanForConcern('Explain how Ophelia’s death is presented as ambiguous in Hamlet.') === null);
ok('E2 a history question about war is not flagged', scanForConcern('Explain why so many soldiers died at the Somme in 1916.') === null);
ok('E3 a PSHE-style factual question is not flagged', scanForConcern('What support does Childline offer to young people who are being bullied?') === null);
ok('E4 a biology question about eating and digestion is not flagged', scanForConcern('Describe how the small intestine absorbs nutrients from food.') === null);
ok('E5 ordinary study chatter is not flagged', scanForConcern('I hate revising for maths, can you help me with quadratics?') === null);
ok('E6 empty or missing text is not flagged', scanForConcern('') === null && scanForConcern(undefined) === null && scanForConcern(null) === null);

/* ---------- the fixed messages exist, are UK-appropriate, and point to real, free support ---------- */
ok('F1 SUPPORT_LINES names Childline and Shout with real UK contact details', /0800 1111/.test(SUPPORT_LINES) && /childline\.org\.uk/.test(SUPPORT_LINES) && /85258/.test(SUPPORT_LINES));
ok('F2 SUPPORT_LINES tells the pupil to tell a trusted adult', /parent|teacher|trust/i.test(SUPPORT_LINES));
ok('F3 SAFE_RESPONSE includes SUPPORT_LINES in full', SAFE_RESPONSE.includes(SUPPORT_LINES));

console.log('PASSED: ' + pass); console.log('-'.repeat(50));
if (fails.length) { console.log('FAILED:'); fails.forEach(f => console.log('  ' + f)); process.exit(1); }
console.log('RESULT: ALL GREEN');
