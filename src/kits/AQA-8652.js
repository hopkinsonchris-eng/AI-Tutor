/* AQA GCSE French (8652) — room kits built on the Message Batches API with the Worker's depth pipeline: written by
   claude-sonnet-5 to the contract in src/kit-validator.js, every question re-solved and the lesson read against the
   specification map by claude-opus-5 in a fresh context, up to 3 rewrites on objections.
   See .claude/skills/course-builder/references/batch.md.
   Rooms without a kit after 3 corrective rewrites — a rerun of "node scripts/batch-course.js kits AQA-8652" retries only these:
   3.1.1 — the answer ran past max_tokens
   3.1.2 — question 11: The task says 'environ 90 mots' but the model answer in sol is only about 70 words, so it would not meet the length/development the question demand
   3.1.3 — question 3: 'Vrai ou faux?' is given with no source text, so it is not a comprehension item at all — the student judges a bald statement on general knowledge; t
   3.2.1 — the answer ran past max_tokens
   3.2.2 — the answer ran past max_tokens
   3.3.1 — refused by the validator: room.questions: between 12 and 16 questions, has 2; refused by the validator: room.questions[1] (question 2): m (marks) must be a whol
   6 — the answer ran past max_tokens */
module.exports = { ID: 'AQA-8652', KITS: {} };
