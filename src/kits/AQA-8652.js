/* AQA GCSE French (8652) — room kits built on the Message Batches API with the Worker's depth pipeline: written by
   claude-sonnet-5 to the contract in src/kit-validator.js, every question re-solved and the lesson read against the
   specification map by claude-opus-5 in a fresh context, one rewrite on objections. See .claude/skills/course-builder/references/batch.md.
   Rooms without a kit after one rewrite — a rerun of "node scripts/batch-course.js kits AQA-8652" retries only these:
   3.1.1 — the judge failed: the answer ran past max_tokens
   3.1.2 — refused by the validator: lesson.idea: no section for key idea "Topic 1" — one section per key idea, citing its code; refused by the validator: lesson.idea: no 
   3.1.3 — question 12: Answer key is inconsistent with the solution and drops meaning from the source: 'Bien que les portables soient très pratiques… je crois qu'on devra
   3.2.1 — the judge failed: the answer ran past max_tokens
   3.2.2 — the judge failed: the answer ran past max_tokens
   3.3.1 — refused by the validator: lesson.examples[0]: the setup gives away the result — 30 first appears in the final step
   6 — the answer ran past max_tokens */
module.exports = { ID: 'AQA-8652', KITS: {} };
