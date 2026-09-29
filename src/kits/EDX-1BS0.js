/* Pearson Edexcel GCSE Business (1BS0) — room kits built on the Message Batches API with the Worker's depth pipeline: written by
   claude-sonnet-5 to the contract in src/kit-validator.js, every question re-solved and the lesson read against the
   specification map by claude-opus-5 in a fresh context, up to 3 rewrites on objections.
   See .claude/skills/course-builder/references/batch.md.
   Rooms without a kit after 3 corrective rewrites — a rerun of "node scripts/batch-course.js kits EDX-1BS0" retries only these:
   1.1 — room.questions[3] — the command word 'Identify' is misused: the specification map defines Identify as selecting an answer from a graph or table of data, but thi
   1.2 — refused by the validator: lesson.examples[3]: the setup gives away the result — 7 first appears in the final step
   1.3 — refused by the validator: lesson.examples[1]: the setup gives away the result — 5600, 5000 first appears in the final step; refused by the validator: lesson.exa
   1.4 — refused by the validator: extras: the essay family needs at least 1 "factfile" section, has 0
   1.5 — question 3: 'Give one type of technology used by businesses for online payment' has an answer key whose first option, 'contactless card reader', is an in-store 
   2.1 — question 2: 'Give one internal reason…' — the indicative answer offers 'a change in the business's own financial performance', but the specification lists 'perf
   2.2 — refused by the validator: cards[11]: "Give one advantage to a business of selling through its own " asks for an example or one of several possible answers, so i
   2.3 — room.questions[13] (Evaluate, customer service and automation) is set at 16 marks, but on this board extended-writing items run to 12 marks at most (Section C i
   2.4 — refused by the validator: cards[7]: "Give one reason average rate of return is useful for investm" asks for an example or one of several possible answers, so it
   2.5 — refused by the validator: extras: the essay family needs at least 1 "factfile" section, has 0 */
module.exports = { ID: 'EDX-1BS0', KITS: {} };
