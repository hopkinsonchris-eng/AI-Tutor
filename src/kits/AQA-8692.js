/* AQA GCSE Spanish (8692) — room kits built on the Message Batches API with the Worker's depth pipeline: written by
   claude-sonnet-5 to the contract in src/kit-validator.js, every question re-solved and the lesson read against the
   specification map by claude-opus-5 in a fresh context, up to 3 rewrites on objections.
   See .claude/skills/course-builder/references/batch.md.
   Rooms without a kit after 3 corrective rewrites — a rerun of "node scripts/batch-course.js kits AQA-8692" retries only these:
   3.1.1 — question 1: 'siempre nos hace reír' means 'always makes US laugh' (the writer and family), but both a and sol render it 'makes them laugh' — the object pronoun 
   3.1.2 — question 9: The stem asks only for 'the correct form of "gustar"', but the key/solution require the two words 'nos gustan'; a student writing 'gustan' (the form
   3.1.3 — question 12: The question asks for approximately 90 words, but the model answer in `sol` is only about 74 words, and it uses no past time frame at all (present 
   3.2.1.1 — question 13: The solution's grammar is wrong and contradicts the kit's own fact list: it says "su agrees with estudiante (singular)", but su is singular because
   3.2.1.2 — question 8: Model answer 'Normalmente estoy jugando al fútbol con mis amigos' is not sound Spanish for the task: the present continuous (estar + gerundio) state
   3.2.2.1 — question 9: The Spanish text is not marked as reported speech: after 'Mi abuela me contó una historia sobre su juventud' the first person continues ('Mi hermana
   3.2.2.2 — room.questions[5].hints[2] ('Your answer will begin with two words before "es que"') hands the student the connector 'es que', which is part of the required ans
   3.2.3 — question 11: 'Compramos queso y jamón en el mercado, y después caminamos por el parque.' is genuinely ambiguous: for -ar verbs the nosotros present and preterit
   3.3.1 — question 11: The task demands 'approximately 90 words' (and the 15-mark grid rewards three time frames), but the model answer in sol is only about 63 words, so 
   Foundation tier vocabulary — the answer ran past max_tokens
   Higher tier vocabulary — question 11: The model Spanish under-translates the English: 'because so many tourists go' is rendered 'porque van muchos turistas', which only says 'many touri
   6 — the answer ran past max_tokens */
module.exports = { ID: 'AQA-8692', KITS: {} };
