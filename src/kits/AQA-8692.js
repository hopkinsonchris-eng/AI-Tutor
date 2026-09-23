/* AQA GCSE Spanish (8692) — room kits built on the Message Batches API with the Worker's depth pipeline: written by
   claude-sonnet-5 to the contract in src/kit-validator.js, every question re-solved and the lesson read against the
   specification map by claude-opus-5 in a fresh context, one rewrite on objections. See .claude/skills/course-builder/references/batch.md.
   Rooms without a kit after one rewrite — a rerun of "node scripts/batch-course.js kits AQA-8692" retries only these:
   3.1.1 — question 7: The model answer in sol does not meet the task it is set against: the task demands 'unas 90 palabras' with at least one past, one present and one fu
   3.1.2 — lesson.examples[2] (Photo card): the setup asks for one thing about what the people are doing and one about the atmosphere, but the final step ('Add an opinion 
   3.1.3 — question 9: The 35+ word translation has four English sentences, but `a` gives only 'El verano pasado fui de vacaciones a la costa con mi familia.' — the first 
   3.2.1.1 — lesson.check: the answer to "How do you make 'actor' feminine?" is given as "actora (add -a after -or)". This is wrong — the feminine of actor is the irregular 
   3.2.1.2 — question 8: Answer key is narrow/ambiguous: the English prompt 'You have to recycle to protect the environment' is naturally rendered 'Tienes que reciclar para 
   3.2.2.1 — question 14: Part (a): the text says 'aquella ciudad donde pasábamos los veranos' (pasábamos = we, i.e. the narrator with the cousins, used to spend the summers
   3.2.2.2 — the answer ran past max_tokens
   3.2.3 — examples[0].setup: asks how 'the letter c is pronounced in each' of four words, but 'queso' contains no letter c — the setup's question does not fit one of its 
   3.3.1 — the answer ran past max_tokens
   Foundation tier vocabulary — refused by the validator: lesson.examples[4]: the first step only restates the setup — it must make the first move
   Higher tier vocabulary — the answer ran past max_tokens
   6 — the answer ran past max_tokens */
module.exports = { ID: 'AQA-8692', KITS: {} };
