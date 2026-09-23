/* AQA GCSE Spanish (8692) — room kits built on the Message Batches API with the Worker's depth pipeline: written by
   claude-sonnet-5 to the contract in src/kit-validator.js, every question re-solved and the lesson read against the
   specification map by claude-opus-5 in a fresh context, one rewrite on objections. See .claude/skills/course-builder/references/batch.md.
   Rooms without a kit after one rewrite — a rerun of "node scripts/batch-course.js kits AQA-8692" retries only these:
   3.1.1 — the judge failed: the answer ran past max_tokens
   3.1.2 — room.questions[4].hints[2] names 'pero', a required element of the answer; room.questions[7].hints[2] names 'me gusta' and 'porque'; room.questions[9].hints[2] 
   3.1.3 — room.questions[12].hints[1] ('Check that every verb agreeing with "las redes sociales" matches its number') names part of the required Spanish answer — the tran
   3.2.1.1 — lesson.examples[0].setup: the sentence given is "Vecino es simpático", which contains no article, yet step 3 says "Change the article el to la" — the setup is m
   3.2.1.2 — the judge failed: the answer ran past max_tokens
   3.2.2.1 — the judge failed: the answer ran past max_tokens
   3.2.2.2 — the judge failed: the answer ran past max_tokens
   3.2.3 — question 12: The answer key says the three correspondences may include "the accented stress in árbol", but a written accent/stress pattern is not a sound-symbol
   3.3.1 — the answer ran past max_tokens
   Foundation tier vocabulary — the judge failed: the answer ran past max_tokens
   Higher tier vocabulary — the judge failed: the answer ran past max_tokens
   6 — the answer ran past max_tokens */
module.exports = { ID: 'AQA-8692', KITS: {} };
