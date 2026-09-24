/* AQA GCSE Spanish (8692) — room kits built on the Message Batches API with the Worker's depth pipeline: written by
   claude-sonnet-5 to the contract in src/kit-validator.js, every question re-solved and the lesson read against the
   specification map by claude-opus-5 in a fresh context, up to 3 rewrites on objections.
   See .claude/skills/course-builder/references/batch.md.
   Rooms without a kit after 3 corrective rewrites — a rerun of "node scripts/batch-course.js kits AQA-8692" retries only these:
   3.1.1 — refused by the validator: lesson.examples[3]: the setup gives away the result — 50 first appears in the final step
   3.1.2 — room.questions[7].hints: hint 2 names 'marcar', the very verb the student must retrieve for 'has scored' — it hands over a marking point (the lexis), leaving on
   3.1.3 — question 8: The answer key is inconsistent with its own question and model answer: the bullets ask for 'how you use it', but a says the answer must cover 'frequ
   3.2.1.1 — question 5: The question asks two things ('which subject pronoun would you normally omit … and why', 2 marks) but a gives only 'Yo', so the key is incomplete/am
   3.2.1.2 — the answer ran past max_tokens
   3.2.2.1 — refused by the validator: lesson.idea: no section for key idea "Determiners" — one section per key idea, citing its code; refused by the validator: lesson.idea:
   3.2.2.2 — the answer ran past max_tokens
   3.2.3 — the answer ran past max_tokens
   3.3.1 — question 10: Translation key is incomplete and the solution is factually wrong about Spanish. The English includes 'instead', which the model Spanish ('Normalme
   Foundation tier vocabulary — the answer ran past max_tokens
   Higher tier vocabulary — question 4: 'Traduce al español: You would like to visit Sudamérica' is ambiguous: 'you' in English gives te gustaría (tú), le gustaría (usted), os gustaría (vo
   6 — question 6: The question asks which word in 'La cocina está cerca de la puerta' has the hard c and which the soft c, but both words contain both: cocina is co-  */
module.exports = { ID: 'AQA-8692', KITS: {} };
