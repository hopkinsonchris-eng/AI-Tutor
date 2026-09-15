/* AQA GCSE English Language (8700) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_8700 = {
 "id": "AQA-8700",
 "board": "AQA",
 "subject": "English Language",
 "code": "8700",
 "level": "GCSE",
 "version": "Version 1.5 14 October 2021",
 "firstExam": 2017,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Paper 1: Explorations in Creative Reading and Writing",
   "marks": 80,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "Section A: Reading — one literature fiction text. \"Reading (40 marks) (25%) – one single text: 1 short form question (1 x 4 marks); 2 longer form questions (2 x 8 marks); 1 extended question (1 x 20 marks).\" In the specimen mark scheme these are Question 1 (4 marks, AO1, \"List four things from this part of the text about…\"), Question 2 (8 marks, AO2 language, \"How does the writer use language here to…?\"), Question 3 (8 marks, AO2 structure, \"How has the writer structured the text to interest you as a reader?\") and Question 4 (20 marks, AO4, \"To what extent do you agree?\").",
    "Section B: Writing — descriptive or narrative writing. \"Writing (40 marks) (25%): 1 extended writing question (24 marks for content, 16 marks for technical accuracy).\" In the specimen mark scheme this is Question 5, marked on AO5 Content and Organisation out of 24 and AO6 Technical Accuracy out of 16."
   ],
   "assessment": "\"Assessed: written exam: 1 hour 45 minutes; 80 marks; 50% of GCSE.\" \"All texts in the examination will be unseen.\" \"The paper will assess in this sequence, AO1, AO2 and AO4 for reading, and AO5 and AO6 for writing. Section A will be allocated 40 marks, and Section B will be allocated 40 marks to give an equal weighting to the reading and writing tasks.\" Maximum raw mark 80, scaling factor x1, maximum scaled mark 80 (section 4.6). AO3 is not assessed on this paper (\"N/A\"). The document names this paper \"Paper 1: Explorations in Creative Reading and Writing\" throughout and prints no paper code for it; the Paper 2 specimen question paper prints \"8700/2\" for its sibling.",
   "mandatory": true
  },
  {
   "id": "C2",
   "name": "Paper 2: Writers' Viewpoints and Perspectives",
   "paperCode": "8700/2",
   "marks": 80,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "Section A: Reading — one non-fiction text and one literary non-fiction text. \"Reading (40 marks) (25%) – two linked texts: 1 short form question (1 x 4 marks); 2 longer form questions (1 x 8, 1 x 12 marks); 1 extended question (1 x 16 marks).\" In the specimen paper and mark scheme these are Question 1 (4 marks, AO1, \"Choose four statements below which are TRUE\"), Question 2 (8 marks, AO1, \"Use details from both Sources. Write a summary of the differences between…\"), Question 3 (12 marks, AO2, \"How does [the writer] use language to try to influence…?\") and Question 4 (16 marks, AO3, \"Compare how the two writers convey their different attitudes to…\").",
    "Section B: Writing — writing to present a viewpoint. \"Writing (40 marks) (25%): 1 extended writing question (24 marks for content, 16 marks for technical accuracy).\" In the specimen paper this is Question 5 (\"Write an article for a broadsheet newspaper in which you explain your point of view on this statement\"), marked on AO5 Content and Organisation out of 24 and AO6 Technical Accuracy out of 16."
   ],
   "assessment": "\"Assessed: written exam: 1 hour 45 minutes; 80 marks; 50% of GCSE.\" \"All texts in the examination will be unseen.\" \"The paper will assess in this sequence, AO1, AO2 and AO3 for reading, and AO5 and AO6 for writing. Section A will be allocated 40 marks, and section B will be allocated 40 marks to give an equal weighting to the reading and writing tasks.\" The specimen question paper 8700/2 advises students \"to spend about 15 minutes reading through the Source and all five questions you have to answer\", \"about 45 minutes\" on Section A and \"about 45 minutes\" on Section B. Maximum raw mark 80, scaling factor x1, maximum scaled mark 80 (section 4.6). AO4 is not assessed on this paper (\"N/A\").",
   "mandatory": true
  }
 ],
 "endorsement": {
  "id": "NEA",
  "name": "Non-examination Assessment: Spoken Language",
  "assessed": "\"What's assessed (AO7–AO9): presenting; responding to questions and feedback; use of Standard English.\" \"Assessed: teacher set throughout course; marked by teacher; separate endorsement (0% weighting of GCSE).\"",
  "marks": "\"No marks will be assigned to a student's performance – it will be assessed holistically as a grade, using a 'competency' basis on criteria which are provided below. Competency means that a student must hit all the criteria in one grade before moving on to the next.\"",
  "weight": 0,
  "grades": [
   "Distinction",
   "Merit",
   "Pass",
   "Not Classified"
  ],
  "reporting": "\"The preparation and assessment of Spoken Language is a compulsory requirement of the course of study. It will appear on all students' certificates as a separately reported grade, alongside the overall grade issued.\" \"It will be reported as a separate grade (Pass, Merit, Distinction or Not Classified) and will not contribute to the result of the GCSE English Language qualification.\" \"Students who do not reach the Pass standard must be recorded as Not Classified.\"",
  "modelling": "The Spoken Language endorsement is not carried in `components` because src/spec-validator.js requires every component to have marks > 0, and this document states that no marks are assigned. It is carried instead as this record, as AO7–AO9 (weight 0) in `ao`, in markConventions.summary, and as the topic `spoken-language`, which is attached to component C1 only because the validator requires each topic to name a component — the same modelling the platform's Pearson International GCSE English Language A course uses for its spoken language endorsement."
 },
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Reading",
   "text": "identify and interpret explicit and implicit information and ideas; select and synthesise evidence from different texts",
   "weight": 10,
   "byComponent": {
    "C1": 2.5,
    "C2": 7.5
   },
   "printed": {
    "Paper 1": "2.5",
    "Paper 2": "7.5",
    "Spoken Language NEA": "N/A",
    "Overall weighting (approx %)": "10"
   }
  },
  {
   "id": "AO2",
   "label": "Reading",
   "text": "Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views",
   "weight": 17.5,
   "byComponent": {
    "C1": 10,
    "C2": 7.5
   },
   "printed": {
    "Paper 1": "10",
    "Paper 2": "7.5",
    "Spoken Language NEA": "N/A",
    "Overall weighting (approx %)": "17.5"
   }
  },
  {
   "id": "AO3",
   "label": "Reading",
   "text": "Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts",
   "weight": 10,
   "byComponent": {
    "C1": 0,
    "C2": 10
   },
   "printed": {
    "Paper 1": "N/A",
    "Paper 2": "10",
    "Spoken Language NEA": "N/A",
    "Overall weighting (approx %)": "10"
   }
  },
  {
   "id": "AO4",
   "label": "Reading",
   "text": "Evaluate texts critically and support this with appropriate textual references",
   "weight": 12.5,
   "byComponent": {
    "C1": 12.5,
    "C2": 0
   },
   "printed": {
    "Paper 1": "12.5",
    "Paper 2": "N/A",
    "Spoken Language NEA": "N/A",
    "Overall weighting (approx %)": "12.5"
   }
  },
  {
   "id": "AO5",
   "label": "Writing",
   "text": "Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts",
   "weight": 30,
   "byComponent": {
    "C1": 15,
    "C2": 15
   },
   "printed": {
    "Paper 1": "15",
    "Paper 2": "15",
    "Spoken Language NEA": "N/A",
    "Overall weighting (approx %)": "30"
   }
  },
  {
   "id": "AO6",
   "label": "Writing",
   "text": "Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. (This requirement must constitute 20% of the marks for each specification as a whole.)",
   "weight": 20,
   "byComponent": {
    "C1": 10,
    "C2": 10
   },
   "printed": {
    "Paper 1": "10",
    "Paper 2": "10",
    "Spoken Language NEA": "N/A",
    "Overall weighting (approx %)": "20"
   }
  },
  {
   "id": "AO7",
   "label": "Spoken language (endorsement)",
   "text": "Demonstrate presentation skills in a formal setting",
   "weight": 0,
   "byComponent": {
    "C1": 0,
    "C2": 0
   },
   "printed": {
    "Paper 1": "N/A",
    "Paper 2": "N/A",
    "Spoken Language NEA": "endorsement",
    "Overall weighting (approx %)": "0"
   }
  },
  {
   "id": "AO8",
   "label": "Spoken language (endorsement)",
   "text": "Listen and respond appropriately to spoken language, including to questions and feedback on presentations",
   "weight": 0,
   "byComponent": {
    "C1": 0,
    "C2": 0
   },
   "printed": {
    "Paper 1": "N/A",
    "Paper 2": "N/A",
    "Spoken Language NEA": "endorsement",
    "Overall weighting (approx %)": "0"
   }
  },
  {
   "id": "AO9",
   "label": "Spoken language (endorsement)",
   "text": "Use spoken Standard English effectively in speeches and presentations.",
   "weight": 0,
   "byComponent": {
    "C1": 0,
    "C2": 0
   },
   "printed": {
    "Paper 1": "N/A",
    "Paper 2": "N/A",
    "Spoken Language NEA": "endorsement",
    "Overall weighting (approx %)": "0"
   }
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Both papers are 1 hour 45 minutes and 80 marks, 40 for Section A (Reading) and 40 for Section B (Writing), and \"all texts in the examination will be unseen\". Eight of the ten questions are marked by levels of response: \"Level of response mark schemes are broken down into four levels. There are two, four, five or six marks in each level; dependent upon question\" (Paper 1 mark scheme; the Paper 2 mark scheme reads \"two, three, four, five or six marks in each level\"). The mechanism is a ladder, not a best-fit sweep — the phrase \"best fit\" appears nowhere in this specification or in either specimen mark scheme. \"Step 1 Determine a level: Start at the lowest level of the mark scheme and use it as a ladder to see whether the answer meets the descriptor for that level… until you have a match between the level descriptor and the answer.\" \"Step 2 Determine a mark: … you may well need to read back through the answer as you apply the mark scheme.\" The mark inside the level is fixed by the Skills Descriptors column: \"To achieve full marks in a level, students should meet all of the skills descriptors in that level. Students achieving marks at the bottom of a level will ideally have met all of the skills descriptors of the previous level and at least one of the skills descriptors in that level.\" \"An answer which contains nothing of relevance to the question must be awarded no marks.\" The Indicative Standard column beside each level \"is not a model answer, nor a complete response… Rather, it is an indication of the standard for the level\", and the indicative content \"is neither exhaustive nor prescriptive\". Only the two 4-mark Question 1s are point-marked: Paper 1 Question 1 gives \"1 mark for each point\" for responses that \"must be true, and drawn only from\" the named lines, and Paper 2 Question 1 is point-marked out of 4; the mark scheme prints (T) or (F) against each of the eight lettered statements. Each paper's Question 5 is marked on two separate grids against two assessment objectives. AO5 Content and Organisation is out of 24, and each of its four levels is split into an upper and a lower range: Level 4 Compelling, Convincing 19–24 (upper 22–24, lower 19–21); Level 3 Consistent, Clear 13–18 (upper 16–18, lower 13–15); Level 2 Some success 7–12 (upper 10–12, lower 7–9); Level 1 Simple, Limited 1–6 (upper 4–6, lower 1–3); Level 0 \"Students will not have offered any meaningful writing to assess\". Each range is judged on the Content descriptors (register, purpose, vocabulary and crafting of linguistic devices) and the Organisation descriptors (structural features, ideas, paragraphs and discourse markers) together. AO6 Technical Accuracy is out of 16 in four unsplit levels — Level 4 13–16, Level 3 9–12, Level 2 5–8, Level 1 1–4, Level 0 \"Students' spelling, punctuation etc. is sufficiently poor to prevent understanding or meaning\" — and rewards sentence demarcation and punctuation, sentence forms and Standard English with control of grammatical structures, and spelling and vocabulary. AO6 \"must constitute 20% of the marks for each specification as a whole\": 16 of the 80 marks on each paper, and 20% of the GCSE. The reading levels are named for what they reward: Level 4 is \"Detailed, perceptive analysis\" / \"Perceptive, detailed analysis\" / \"Perceptive, detailed evaluation\" / \"Perceptive summary\" / \"Perceptive, detailed\", Level 3 \"Clear, relevant explanation\" / \"Clear, relevant evaluation\" / \"Clear, relevant summary\" / \"Clear, relevant\", Level 2 \"Some, understanding and comment\" / \"Some understanding and comment\" / \"Some evaluation\" / \"Some attempts at summary\" / \"Some, attempts\", and Level 1 \"Simple, limited comment\" / \"Simple, limited evaluation\" / \"Simple, limited summary\" / \"Simple, limited\". \"The final reading question on each paper - Question 4 on Paper 1 and Question 4 on Paper 2 allows students to\" \"provide extended responses\" and \"demonstrate their ability to draw together different areas of knowledge, skills and/or understanding from across a full course of study\". Marks are scaled x1, giving a maximum scaled mark of 80 per paper and a total scaled mark of 160; \"the qualification will be graded on a nine-point scale: 1 to 9 – where 9 is the best grade\". The Spoken Language endorsement is marked separately by the teacher: \"no marks will be assigned to a student's performance – it will be assessed holistically as a grade, using a 'competency' basis on criteria\", \"competency means that a student must hit all the criteria in one grade before moving on to the next\", and the result is reported on the certificate as Pass, Merit, Distinction or Not Classified at 0% weighting of the GCSE.",
  "commandWords": [
   {
    "word": "List four things from this part of the text about… (Paper 1, Question 1, 4 marks, AO1)",
    "means": "Point-marked, not levelled. \"Give 1 mark for each point about the weather: responses must be true, and drawn only from lines 1 to 7 of the text; responses must relate to the weather; students may quote or paraphrase; a paraphrased response covering more than one point should be credited for each point made – though paraphrased responses must demonstrate evidence of identification of information that is specific to the focus of the question as required by AO1; responses that copy the whole section of the text from lines 1 to 7 verbatim should not be credited any marks as this does not provide any evidence of identification of information that is specific to the focus of the question.\" It assesses \"bullet point 1 identify and interpret explicit and implicit information and ideas\"."
   },
   {
    "word": "How does the writer use language here to…? (Paper 1, Question 2, 8 marks, AO2)",
    "means": "\"Look in detail at this extract from lines 8 to 18 of the Source… You could include the writer's choice of: words and phrases; language features and techniques; sentence forms.\" \"This question assesses Language ie: Words / Phrases / Language Features / Language Techniques / Sentence Forms.\" Level 4 (7–8 marks), \"Detailed, perceptive analysis\": \"Shows detailed and perceptive understanding of language: Analyses the effects of the writer's choices of language; Selects a judicious range of textual detail; Makes sophisticated and accurate use of subject terminology.\" Level 1 (1–2) only \"Offers simple comment on the effect of language\". Level 0: \"No comments offered on the use of language. Nothing to reward.\""
   },
   {
    "word": "How has the writer structured the text to interest you as a reader? (Paper 1, Question 3, 8 marks, AO2)",
    "means": "\"You now need to think about the whole of the Source… You could write about: what the writer focuses your attention on at the beginning; how and why the writer changes this focus as the Source develops; any other structural features that interest you.\" \"This question assesses how the writer has structured a text. Structural features can be: at a whole text level eg. beginnings / endings / perspective shifts; at a paragraph level eg. topic change / aspects of cohesion; and at a sentence level when judged to contribute to whole structure.\" Level 4 (7–8), \"Perceptive, detailed analysis\": \"Analyses the effects of the writer's choice of structural features; Selects a judicious range of examples; Makes sophisticated and accurate use of subject terminology.\""
   },
   {
    "word": "To what extent do you agree? (Paper 1, Question 4, 20 marks, AO4)",
    "means": "The paper's extended reading question, set on a student's statement about the second part of the Source. \"In your response, you could: write about your own impressions of the characters; evaluate how the writer has created these impressions; support your opinions with references to the text.\" AO4 is \"Evaluate texts critically and support this with appropriate textual references\". Level 4 (16–20), \"Perceptive, detailed evaluation\": \"Evaluates critically and in detail the effect(s) on the reader; Shows perceptive understanding of writer's methods; Selects a judicious range of textual detail; Develops a convincing and critical response to the focus of the statement.\" Level 0: \"No relevant comments offered in response to the statement, no impressions, no evaluation.\""
   },
   {
    "word": "Write a description suggested by this picture / Write the opening part of a story about… (Paper 1, Question 5, 40 marks, AO5 + AO6)",
    "means": "\"You are going to enter a creative writing competition. Your entry will be judged by a panel of people of your own age. Either: Write a description suggested by this picture: (picture of a coastline in a tumultuous storm) Or: Write the opening part of a story about a place that is severely affected by the weather. (24 marks for content and organisation and 16 marks for technical accuracy) [40 marks].\" Marked on two grids: AO5 Content and Organisation out of 24 in four levels each split upper/lower, and AO6 Technical Accuracy out of 16 in four levels."
   },
   {
    "word": "Choose four statements below which are TRUE (Paper 2, Question 1, 4 marks, AO1)",
    "means": "Point-marked, not levelled. \"Read again the first part of Source A from lines 1 to 15. Choose four statements below which are TRUE. Shade the boxes of the ones that you think are true. Choose a maximum of four statements.\" The mark scheme prints (T) or (F) against each of the eight lettered statements. \"This assesses the first bullet point identify and interpret explicit and implicit information and ideas.\""
   },
   {
    "word": "Write a summary of the differences between… (Paper 2, Question 2, 8 marks, AO1)",
    "means": "\"You need to refer to Source A and Source B for this question. Use details from both Sources. Write a summary of the differences between Eddie and Henry.\" \"This assesses both bullet points\" of AO1 — interpreting information and ideas, and selecting and synthesising evidence from different texts. Level 4 (7–8), \"Perceptive summary\": \"Shows perceptive synthesis and interpretation of both texts: Makes perceptive inferences from both texts; Makes judicious references/use of textual detail relevant to the focus of the question; Statements show perceptive differences between texts.\" Level 1 \"Offers paraphrase rather than inference\". Level 0: \"Students in this band will not have offered any differences.\""
   },
   {
    "word": "How does [the writer] use language to try to influence…? (Paper 2, Question 3, 12 marks, AO2)",
    "means": "\"You now need to refer only to Source B, the letter by Henry written to his father. How does Henry use language to try to influence his father?\" \"This question assesses Language ie: Words / Phrases / Language Features / Language Techniques / Sentence Forms.\" Level 4 (10–12), \"Detailed, perceptive analysis\": \"Analyses the effects of the writer's choices of language; Selects a judicious range of textual detail; Makes sophisticated and accurate use of subject terminology.\" Level 3 is 7–9, Level 2 4–6, Level 1 1–3 — a wider tariff than the 8-mark language question on Paper 1."
   },
   {
    "word": "Compare how the two writers convey their different attitudes to… (Paper 2, Question 4, 16 marks, AO3)",
    "means": "The paper's extended reading question. \"For this question, you need to refer to the whole of Source A, together with Source B… In your answer, you could: compare their different attitudes; compare the methods they use to convey their attitudes; support your ideas with references to both texts.\" Level 4 (13–16), \"Perceptive, detailed\": \"Compares ideas and perspectives in a perceptive way; Analyses how writers' methods are used; Selects a range of judicious supporting detail from both texts; Shows a detailed understanding of the different ideas and perspectives in both texts.\" Level 1 only \"Makes simple cross reference of ideas and perspectives\". Level 0: \"No ideas offered about the differences.\""
   },
   {
    "word": "Write an article… in which you explain your point of view on this statement (Paper 2, Question 5, 40 marks, AO5 + AO6)",
    "means": "\"'Homework has no value. Some students get it done for them; some don't do it at all. Students should be relaxing in their free time.' Write an article for a broadsheet newspaper in which you explain your point of view on this statement. (24 marks for content and organisation 16 marks for technical accuracy) [40 marks].\" The specification says the Section B task \"will specify audience, purpose and form, and will use a range of opinions, statements and writing scenarios to provoke a response\". Marked on the same two grids as Paper 1 Question 5: AO5 out of 24 with upper/lower ranges, AO6 out of 16."
   },
   {
    "word": "Compare",
    "means": "AO3 — \"Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts\" — and the subject content statement \"comparing texts: comparing two or more texts critically with respect to the above\". All 10% of the qualification's AO3 marks sit in Paper 2 Question 4. The levels reward two things at once: the ideas and perspectives compared, and the methods that convey them (\"Compares ideas and perspectives in a perceptive way\" and \"Analyses how writers' methods are used\"). The mark scheme's suggested methods are \"use of article form (public sphere)/use of letter form (private sphere); use of different tone/register/humour/seriousness; use of contemporary references (Pac-Men/Google/Skype)/traditional values; language differences to reflect different times/modes/purposes\"."
   },
   {
    "word": "Evaluate",
    "means": "AO4 — \"Evaluate texts critically and support this with appropriate textual references\" — and the subject content statements \"reflecting critically and evaluatively on text, using the context of the text and drawing on knowledge and skills gained from wider reading\" and \"analysing and evaluating how form and structure contribute to the effectiveness and impact of a text\". It is examined only on Paper 1 Question 4, 20 marks, 12.5% of the GCSE. The levels climb from \"Makes simple, limited evaluative comment(s) on effect(s) on reader\" to \"Evaluates critically and in detail the effect(s) on the reader\" with \"a convincing and critical response to the focus of the statement\"."
   },
   {
    "word": "Summarise",
    "means": "AO1's second bullet, \"select and synthesise evidence from different texts\", and the subject content statements \"summary and synthesis: identifying the main theme or themes; summarising ideas and information from a single text; synthesising from more than one text\". Examined on Paper 2 Question 2 (8 marks). The mark scheme rewards inference, not retelling: Level 1 \"Offers paraphrase rather than inference\", Level 4 \"Makes perceptive inferences from both texts\" with \"statements\" that \"show perceptive differences between texts\"."
   },
   {
    "word": "Analyse",
    "means": "AO2 — \"Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views\" — carrying 17.5% of the GCSE across Paper 1 Questions 2 and 3 and Paper 2 Question 3. The four levels are explicitly a ladder of verbs: Level 1 \"Offers simple comment on the effect of language\", Level 2 \"Attempts to comment on the effect of language\", Level 3 \"Explains clearly the effects of the writer's choices of language\", Level 4 \"Analyses the effects of the writer's choices of language\". Subject terminology climbs with it, from \"simple use of subject terminology, not always appropriately\" to \"sophisticated and accurate use of subject terminology\"."
   },
   {
    "word": "Explain",
    "means": "AO2 opens with it — \"Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers\" — and it is the Level 3 rung of every language and structure question: Level 3 \"Clear, relevant explanation\" is \"Explains clearly the effects of the writer's choices of language\" with \"clear understanding of language\" and \"relevant\" examples and subject terminology, as distinct from Level 4 \"Detailed, perceptive analysis\", which \"Analyses the effects of the writer's choices of language\" with \"judicious\" examples and \"sophisticated and accurate\" terminology. On Paper 2 Question 5 the stem is \"explain your point of view on this statement\": take a position and justify it for the named audience, purpose and form, marked on AO5 and AO6."
   }
  ],
  "essayShapes": [
   {
    "marks": 8,
    "minutes": 9,
    "structure": "Paper 1, Question 2 — AO2 language, 8 marks. The specimen question paper for Paper 2 (8700/2) advises \"about 15 minutes reading through the Source and all five questions\", \"about 45 minutes\" on Section A and \"about 45 minutes\" on Section B; both papers are 1 hour 45 minutes with 40 marks in each section, so these 9 minutes are that 45 minutes shared pro rata across Section A's 4 + 8 + 8 + 20 marks — the documents never time an individual question. Work only inside the printed extract (\"Look in detail at this extract from lines 8 to 18 of the Source\") and only on language: \"words and phrases; language features and techniques; sentence forms\". Build each paragraph as choice → precise quotation → effect on the reader, naming the word class or feature accurately. The Level 4 descriptor is the target: \"Shows detailed and perceptive understanding of language: Analyses the effects of the writer's choices of language; Selects a judicious range of textual detail; Makes sophisticated and accurate use of subject terminology.\" Three or four judicious details analysed beat a list of devices spotted."
   },
   {
    "marks": 8,
    "minutes": 9,
    "structure": "Paper 1, Question 3 — AO2 structure, 8 marks (9 minutes pro rata within the 45 advised for Section A). \"You now need to think about the whole of the Source\" — this is the one question on the paper that must range across the whole text, and comments on language score nothing here. Track the reader's attention: what the opening focuses on, how and why the focus changes, and \"any other structural features that interest you\". The mark scheme defines the field: \"Structural features can be: at a whole text level eg. beginnings / endings / perspective shifts; at a paragraph level eg. topic change / aspects of cohesion; and at a sentence level when judged to contribute to whole structure.\" Level 4: \"Shows detailed and perceptive understanding of structural features: Analyses the effects of the writer's choice of structural features; Selects a judicious range of examples; Makes sophisticated and accurate use of subject terminology.\" The Level 4 indicative standard models the shape — a text \"structured to also take the reader on a journey: from the general to the specific; from the outside to the inside\"."
   },
   {
    "marks": 20,
    "minutes": 22,
    "structure": "Paper 1, Question 4 — AO4 critical evaluation, 20 marks, the paper's extended reading answer (about 22 minutes pro rata within the 45 advised for Section A). A student's statement is quoted and the question asks \"To what extent do you agree?\", focused on a named part of the Source. Take a position on the statement and sustain it: \"write about your own impressions\", \"evaluate how the writer has created these impressions\", \"support your opinions with references to the text\". Each paragraph should hold all three — an impression, the method that produced it, and the quotation that proves it — and should judge, not just describe. Level 4 (16–20): \"Shows perceptive and detailed evaluation: Evaluates critically and in detail the effect(s) on the reader; Shows perceptive understanding of writer's methods; Selects a judicious range of textual detail; Develops a convincing and critical response to the focus of the statement.\" Together with Paper 2 Question 4 this is where students \"provide extended responses\" and \"draw together different areas of knowledge, skills and/or understanding from across a full course of study\"."
   },
   {
    "marks": 40,
    "minutes": 45,
    "structure": "Paper 1, Question 5 — descriptive or narrative writing, 40 marks (24 for content and organisation, AO5; 16 for technical accuracy, AO6), the whole of Section B, 45 minutes advised. One task chosen from two, prompted by \"a choice of scenario, written prompt or visual image that is related to the topic of the reading text in section A\" — in the specimen, \"Write a description suggested by this picture\" or \"Write the opening part of a story about a place that is severely affected by the weather\" — with the audience named in the scenario (\"judged by a panel of people of your own age\"). Plan a shape before writing: an opening that establishes atmosphere or situation, deliberate structural movement rather than plot for its own sake, and an ending chosen in advance. Upper Level 4 (22–24) for Content and Organisation: \"Register is convincing and compelling for audience; Assuredly matched to purpose; Extensive and ambitious vocabulary with sustained crafting of linguistic devices\" and \"Varied and inventive use of structural features; Writing is compelling, incorporating a range of convincing and complex ideas; Fluently linked paragraphs with seamlessly integrated discourse markers\". Level 4 for Technical Accuracy (13–16) additionally wants \"sentence demarcation… consistently secure and consistently accurate\", \"wide range of punctuation is used with a high level of accuracy\", \"a full range of appropriate sentence forms for effect\" and \"high level of accuracy in spelling, including ambitious vocabulary\" — so time must be kept back to check."
   },
   {
    "marks": 8,
    "minutes": 9,
    "structure": "Paper 2, Question 2 — AO1 summary and synthesis, 8 marks (9 minutes pro rata within the \"about 45 minutes\" the specimen paper advises for Section A). \"Use details from both Sources. Write a summary of the differences between [X] and [Y].\" This is a summary, not an analysis: no comment on method is rewarded. Write in linked statements of difference, each one covering both sources — a detail from Source A, a detail from Source B, and the inference the pair supports. Level 4 (7–8): \"Shows perceptive synthesis and interpretation of both texts: Makes perceptive inferences from both texts; Makes judicious references/use of textual detail relevant to the focus of the question; Statements show perceptive differences between texts.\" The Level 1 warning is the thing to avoid: \"Offers paraphrase rather than inference.\""
   },
   {
    "marks": 12,
    "minutes": 13,
    "structure": "Paper 2, Question 3 — AO2 language, 12 marks (about 13 minutes pro rata within the 45 advised for Section A), the longest of the three language questions across the two papers. It is set on one named source only (\"You now need to refer only to Source B\") and usually on the writer's purpose towards a reader — \"How does Henry use language to try to influence his father?\" Choose a handful of the writer's deliberate choices — forms of address, emotive vocabulary, repetition, register, sentence forms, semantic field — quote each precisely, name it accurately and explain what it does to the reader. Level 4 (10–12): \"Shows detailed and perceptive understanding of language: Analyses the effects of the writer's choices of language; Selects a judicious range of textual detail; Makes sophisticated and accurate use of subject terminology.\" The extra tariff over Paper 1 Question 2 buys depth on each choice, not more choices listed."
   },
   {
    "marks": 16,
    "minutes": 18,
    "structure": "Paper 2, Question 4 — AO3 comparison, 16 marks, the paper's extended reading answer (about 18 minutes pro rata within the 45 advised for Section A). \"Compare how the two writers convey their different attitudes to [theme]… compare their different attitudes; compare the methods they use to convey their attitudes; support your ideas with references to both texts.\" Structure it by idea, not by text: each paragraph takes one attitude, puts both writers on it, quotes both, and names how each writer's method conveys it — the mark scheme's own examples are \"use of article form (public sphere)/use of letter form (private sphere)\", \"use of different tone/register/humour/seriousness\" and \"language differences to reflect different times/modes/purposes\". Level 4 (13–16): \"Compares ideas and perspectives in a perceptive way; Analyses how writers' methods are used; Selects a range of judicious supporting detail from both texts; Shows a detailed understanding of the different ideas and perspectives in both texts.\" Two separate summaries with no cross-reference sit at Level 1, \"Makes simple cross reference of ideas and perspectives\"."
   },
   {
    "marks": 40,
    "minutes": 45,
    "structure": "Paper 2, Question 5 — writing to present a viewpoint, 40 marks (24 AO5, 16 AO6), the whole of Section B, 45 minutes advised. \"In section B, there will be a single writing task related to the theme of section A. It will specify audience, purpose and form, and will use a range of opinions, statements and writing scenarios to provoke a response\" — in the specimen, a provocative statement about homework and the instruction to \"write an article for a broadsheet newspaper in which you explain your point of view\". Hold the named form, audience and purpose from the first line to the last, take a clear position on the statement, and build it with the moves the subject content names: \"selecting, organising and emphasising facts, ideas and key points; citing evidence and quotation effectively and pertinently to support views; creating emotional impact; using language creatively, imaginatively and persuasively, including rhetorical devices (such as rhetorical questions, antithesis, parenthesis)\". Upper Level 4 (22–24) for Content and Organisation: \"Register is convincing and compelling for audience; Assuredly matched to purpose; Extensive and ambitious vocabulary with sustained crafting of linguistic devices\" with \"varied and inventive use of structural features\" and \"fluently linked paragraphs with seamlessly integrated discourse markers\"; Level 4 Technical Accuracy (13–16) carries the other 16 marks and 10% of the GCSE."
   }
  ]
 },
 "judged": {
  "score": 0.88,
  "coverage": 1,
  "fidelity": 0.88,
  "options": 1,
  "familyFit": 0.95,
  "at": "2026-09-15",
  "by": "a fresh Opus subagent judging against references/judge.md, all 68 ideas and 355 quoted spans checked against the four documents; its six findings were applied before shipping",
  "invented": [],
  "missing": [],
  "changes": "The document prints no change log, errata list or table of amendments. Its only statement about versions is on page 4: \"Are you using the latest version of this specification? You will always find the most up-to-date version of this specification on our website at [aqa.org.uk/8700]. We will write to you if there are significant changes to the specification.\" (the URL sits in the page as a link, so the sentence reads as truncated in the text layer). The version string is \"Version 1.5 14 October 2021\" and the running footer on every page reads \"AQA GCSE English Language 8700. GCSE exams June 2017 onwards. Version 1.5 14 October 2021\", so 1.5 is at least the fifth issue, but nothing in the file says what changed at any issue. Dates and administrative facts that the monthly pass should carry forward: first teaching September 2015 (\"For teaching from September 2015 onwards\", cover; repeated at 5, \"For first teaching in September 2015, GCSE English Language will have an endorsed component covering Spoken Language\"); first exams May/June 2017 (\"For exams in May/June 2017 onwards\", cover) \"and then every May/June and November for the life of the specification\" (page 13); linear, all assessments in one series; November entries only for students \"at least 16 on the previous 31 August\" (pages 13 and 23-24); AQA entry code 8700, DfE discount code FK2B, Ofqual QAN 601/4292/3 (page 23); \"This specification overlaps with the AQA Level 1/Level 2 Certificate in English Language\" (page 23); grading on \"a nine-point scale: 1 to 9 - where 9 is the best grade\" (page 23). The three assessment documents are older than the specification and are versioned separately: 87001-SMS and 87002-SMS are \"SPECIMEN MATERIAL 1 ... Version 3\" with a 2014 copyright line, as is 87002-SQP. Nothing in the draft depends on a withdrawn option, because there are none. The draft's version string, firstExam and source block all match the document and its HTTP metadata (Last-Modified 18 October 2021).",
  "notesForTeacher": "There are no set texts and nothing is optional: both papers are unseen, equally weighted at 50%, identical in shape (1 hour 45 minutes, 80 marks, 40 for reading and 40 for writing) and differ only in what they read and what they write. Paper 1 reads one 20th- or 21st-century prose fiction extract and writes description or narrative; Paper 2 reads two linked non-fiction sources, one 19th century, and writes to present a viewpoint. The two 40-mark Question 5s carry 50% of the qualification between them, and AO6 technical accuracy alone is 20%, so proofreading is worth as much as the whole of AO3 plus AO1. The Spoken Language endorsement is compulsory to sit but scores nothing towards the grade."
 },
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/english/specifications/AQA-8700-SP-2015.PDF",
  "etag": "\"2364f7-5cea19b69c8b2\"",
  "lastModified": "Mon, 18 Oct 2021 14:46:16 GMT",
  "length": 2319607,
  "checkedAt": "2026-09-15T09:06:05.595Z"
 },
 "topics": [
  {
   "id": "critical-reading",
   "component": "C1",
   "option": null,
   "name": "Critical reading and comprehension (3.1.1)",
   "caseStudies": [
    "Paper 1 Question 1: \"List four things from this part of the text about…\" (4 marks, AO1)",
    "Paper 1 Question 4: a student's statement about the text, \"To what extent do you agree?\" (20 marks, AO4)",
    "Paper 2 Question 1: \"Choose four statements below which are TRUE\" (4 marks, AO1)",
    "one literature fiction text, drawn from either the 20th or 21st century, genre prose fiction — \"extracts from novels and short stories\"",
    "\"a wide range of texts from the 19th, 20th and 21st centuries, including literature and literary non-fiction as well as other writing such as reviews and journalism\"",
    "\"literature and extended literary non-fiction, and other writing such as essays, reviews and journalism (both printed and online)\""
   ],
   "ideas": [
    {
     "code": "3.1.1 identifying and interpreting themes, ideas and information",
     "q": "What must a reader be able to take from an unseen text?",
     "idea": "Identifying and interpreting themes, ideas and information",
     "content": "\"Critical reading and comprehension: identifying and interpreting themes, ideas and information in a range of literature and other high-quality writing.\" This is the first bullet of AO1 — \"identify and interpret explicit and implicit information and ideas\" — and the skill the two 4-mark Question 1s test directly, where responses \"must be true, and drawn only from\" the lines named and \"must demonstrate evidence of identification of information that is specific to the focus of the question\"."
    },
    {
     "code": "3.1.1 reading in different ways for different purposes",
     "q": "Why does a reader change the way they read?",
     "idea": "Reading in different ways for different purposes, and evaluating content for those purposes",
     "content": "\"Reading in different ways for different purposes, and comparing and evaluating the usefulness, relevance and presentation of content for these purposes.\" The papers require the shift within a single hour: Paper 1 moves from a 4-mark list drawn from seven named lines, through close reading of an 11-line extract, to \"the whole of the Source\", and then to a 20-mark evaluation of a second part of it."
    },
    {
     "code": "3.1.1 drawing inferences",
     "q": "How does a reader go beyond what the text says?",
     "idea": "Drawing inferences and justifying these with evidence",
     "content": "\"Drawing inferences and justifying these with evidence.\" Inference, not paraphrase, is what the levels reward: the Paper 2 summary question puts \"Offers paraphrase rather than inference\" at Level 1 and \"Makes perceptive inferences from both texts\" at Level 4, and every reading level above Level 1 requires the inference to be carried by selected textual detail."
    },
    {
     "code": "3.1.1 supporting a point of view",
     "q": "What makes an opinion about a text creditable?",
     "idea": "Supporting a point of view by referring to evidence within the text",
     "content": "\"Supporting a point of view by referring to evidence within the text.\" AO4 states it as \"Evaluate texts critically and support this with appropriate textual references\", and the Paper 1 Question 4 bullets instruct students to \"support your opinions with references to the text\". The levels grade the quality of that support, from \"simple, limited textual reference(s)\" to \"a judicious range of textual detail\"."
    },
    {
     "code": "3.1.1 identifying bias and misuse of evidence",
     "q": "How does a critical reader test what a writer claims?",
     "idea": "Identifying bias and misuse of evidence",
     "content": "\"Identifying bias and misuse of evidence, including distinguishing between statements that are supported by evidence and those that are not.\" This is the reading skill behind Paper 2, whose whole purpose is \"how writers have particular viewpoints and perspectives on issues or themes\" and whose sources are chosen so that each \"presents a perspective or viewpoint to influence the reader\"."
    },
    {
     "code": "3.1.1 reflecting critically and evaluatively on text",
     "q": "What does critical reflection on a text involve?",
     "idea": "Reflecting critically and evaluatively on text, using its context and wider reading",
     "content": "\"Reflecting critically and evaluatively on text, using the context of the text and drawing on knowledge and skills gained from wider reading.\" The specification requires that reading to be substantial: \"each text studied must represent a substantial piece of writing, making significant demands on students in terms of content, structure and the quality of language\", and \"texts that are essentially transient, such as instant news feeds, must not be included\". Paper 1 Question 4, 20 marks and 12.5% of the GCSE, is where the reflection is assessed."
    },
    {
     "code": "3.1.1 recognising the possibility of different responses to a text",
     "q": "Can two readers legitimately disagree about a text?",
     "idea": "Recognising the possibility of different responses to a text",
     "content": "\"Recognising the possibility of different responses to a text.\" The final statement of the critical reading bullet, and the premise of Paper 1 Question 4, which quotes another student's reading of the text and asks \"To what extent do you agree?\" The mark scheme is built on the same principle — \"the information provided for each question is intended to be a guide to the kind of answers anticipated and is neither exhaustive nor prescriptive. All appropriate responses should be given credit\" — and Level 4 rewards \"a convincing and critical response to the focus of the statement\", agreement or not."
    }
   ]
  },
  {
   "id": "summary-synthesis",
   "component": "C2",
   "option": null,
   "name": "Summary and synthesis (3.1.1)",
   "caseStudies": [
    "Paper 2 Question 2: \"Use details from both Sources. Write a summary of the differences between…\" (8 marks, AO1)",
    "Paper 2 Question 1: \"Choose four statements below which are TRUE\" (4 marks, AO1)",
    "two linked sources from different time periods and genres — one drawn from the 19th century and one from either the 20th or 21st century",
    "non-fiction and literary non-fiction: \"high quality journalism, articles, reports, essays, travel writing, accounts, sketches, letters, diaries, autobiography and biographical passages\""
   ],
   "ideas": [
    {
     "code": "3.1.1 identifying the main theme or themes",
     "q": "What is a text actually about?",
     "idea": "Identifying the main theme or themes",
     "content": "\"Summary and synthesis: identifying the main theme or themes.\" The first of the three statements in the summary and synthesis bullet. On Paper 2 the theme is what links the two sources and the Section B writing task: the paper reads \"two linked sources from different time periods and genres\" and then sets \"a single writing task related to the theme of section A\"."
    },
    {
     "code": "3.1.1 summarising ideas and information from a single text",
     "q": "How is a text reduced to its ideas without retelling it?",
     "idea": "Summarising ideas and information from a single text",
     "content": "\"Summarising ideas and information from a single text.\" A summary selects and compresses rather than paraphrases; the Paper 2 mark scheme puts \"Offers paraphrase rather than inference\" at Level 1 of the summary question and \"Makes perceptive inferences\" at Level 4, so the summary must carry an interpretation of the material it selects."
    },
    {
     "code": "3.1.1 synthesising from more than one text",
     "q": "How are two texts brought together into one answer?",
     "idea": "Synthesising from more than one text",
     "content": "\"Synthesising from more than one text.\" The instruction on Paper 2 Question 2 is explicit — \"You need to refer to Source A and Source B for this question. Use details from both Sources\" — and the levels reward synthesis as a single operation across the pair: Level 4 \"Shows perceptive synthesis and interpretation of both texts\", while Level 2 falls back to \"some interpretation from one/both texts\"."
    },
    {
     "code": "4.5 AO1 (select and synthesise evidence from different texts)",
     "q": "Which assessment objective pays for summary and synthesis?",
     "idea": "AO1: identify and interpret, select and synthesise",
     "content": "\"AO1: identify and interpret explicit and implicit information and ideas; select and synthesise evidence from different texts.\" AO1 carries 10% of the GCSE, of which 7.5% is on Paper 2 and 2.5% on Paper 1. The Paper 2 mark scheme notes that Question 1 \"assesses the first bullet point\" while the summary question \"assesses both bullet points\" — synthesis across texts is examined only here."
    },
    {
     "code": "4.3 Paper 2 Question 2 (summary of differences)",
     "q": "How is summary and synthesis examined, and what earns the top level?",
     "idea": "Paper 2 Question 2: a summary of differences across both sources, 8 marks",
     "content": "One of Paper 2's \"2 longer form questions (1 x 8, 1 x 12 marks)\". Specimen stem: \"Use details from both Sources. Write a summary of the differences between Eddie and Henry. [8 marks]\" Level 4 (7–8 marks), \"Perceptive summary\": \"Shows perceptive synthesis and interpretation of both texts: Makes perceptive inferences from both texts; Makes judicious references/use of textual detail relevant to the focus of the question; Statements show perceptive differences between texts.\" Level 3 (5–6) is \"clear synthesis and interpretation of both texts\", Level 2 (3–4) \"some interpretation from one/both texts\", Level 1 (1–2) \"simple awareness from one/both texts\". Level 0: \"Students in this band will not have offered any differences.\""
    }
   ]
  },
  {
   "id": "language-structure",
   "component": "C1",
   "option": null,
   "name": "Evaluation of a writer's choice of vocabulary, form, grammatical and structural features (3.1.1)",
   "caseStudies": [
    "Paper 1 Question 2: \"How does the writer use language here to…?\" with \"words and phrases / language features and techniques / sentence forms\" (8 marks, AO2)",
    "Paper 1 Question 3: \"How has the writer structured the text to interest you as a reader?\" (8 marks, AO2)",
    "Paper 2 Question 3: \"How does [the writer] use language to try to influence…?\" (12 marks, AO2)",
    "one literature fiction text, prose fiction from the 20th or 21st century, focused on \"openings, endings, narrative perspectives and points of view, narrative or descriptive passages, character, atmospheric descriptions and other appropriate narrative and descriptive approaches\"",
    "structural features \"at a whole text level eg. beginnings / endings / perspective shifts; at a paragraph level eg. topic change / aspects of cohesion; and at a sentence level when judged to contribute to whole structure\""
   ],
   "ideas": [
    {
     "code": "3.1.1 explaining and illustrating how vocabulary and grammar contribute to effectiveness and impact",
     "q": "What does a reader have to do with a writer's word and grammar choices?",
     "idea": "Explaining and illustrating how vocabulary and grammar contribute to effectiveness and impact",
     "content": "\"Evaluation of a writer's choice of vocabulary, form, grammatical and structural features: explaining and illustrating how vocabulary and grammar contribute to effectiveness and impact.\" The two language questions define the field as \"Words / Phrases / Language Features / Language Techniques / Sentence Forms\", and the levels climb from \"Offers simple comment on the effect of language\" through \"Explains clearly the effects of the writer's choices of language\" to \"Analyses the effects of the writer's choices of language\"."
    },
    {
     "code": "3.1.1 using linguistic and literary terminology accurately",
     "q": "How much does naming a feature correctly matter?",
     "idea": "Using linguistic and literary terminology accurately and paying attention to detail",
     "content": "\"…using linguistic and literary terminology accurately to do so and paying attention to detail.\" Every AO2 level has a terminology strand: \"Makes simple use of subject terminology, not always appropriately\" (Level 1), \"some use of subject terminology, mainly appropriately\" (Level 2), \"clear and accurate use of subject terminology\" (Level 3), \"sophisticated and accurate use of subject terminology\" (Level 4). The mark schemes add that \"knowledge of such terms, other than those given in the specification, is not required\", but that examiners \"should take into account any instances where the student uses these terms effectively to aid the clarity and precision of the argument\"."
    },
    {
     "code": "3.1.1 analysing and evaluating how form and structure contribute to the effectiveness and impact of a text",
     "q": "What is structure, and how does it act on a reader?",
     "idea": "Analysing and evaluating how form and structure contribute to effectiveness and impact",
     "content": "\"Analysing and evaluating how form and structure contribute to the effectiveness and impact of a text.\" The Paper 1 mark scheme defines the territory: \"Structural features can be: at a whole text level eg. beginnings / endings / perspective shifts; at a paragraph level eg. topic change / aspects of cohesion; and at a sentence level when judged to contribute to whole structure.\" Its suggested content is \"the overall structure of a journey – moving through place; the change of structural focus from outside to inside; the consistent reminder of the weather, recapitulated through the text; narrowing down the focus to the individual characters\"."
    },
    {
     "code": "4.5 AO2",
     "q": "Which assessment objective pays for language and structure, and how much is it worth?",
     "idea": "AO2: explain, comment on and analyse how writers use language and structure",
     "content": "\"AO2: Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.\" AO2 is the largest reading objective at 17.5% of the GCSE — 10% on Paper 1 (the 8-mark language question and the 8-mark structure question) and 7.5% on Paper 2 (the 12-mark language question). \"Effects\" and \"influence readers\" are the operative words: a feature named without an effect scores nothing above Level 1."
    },
    {
     "code": "4.2 Paper 1 Question 2 (language)",
     "q": "How is close language analysis examined on Paper 1?",
     "idea": "Paper 1 Question 2: language in a short printed extract, 8 marks",
     "content": "\"Look in detail at this extract from lines 8 to 18 of the Source: … How does the writer use language here to describe the effects of the weather? You could include the writer's choice of: words and phrases; language features and techniques; sentence forms. [8 marks]\" Level 4 (7–8): \"Shows detailed and perceptive understanding of language: Analyses the effects of the writer's choices of language; Selects a judicious range of textual detail; Makes sophisticated and accurate use of subject terminology.\" Suggested content: \"use of sentence length variously related to the content of the extract; use of, for example, nouns and verbs to enhance description; the cumulative effect of chosen words and phrases; employing imagery such as simile.\""
    },
    {
     "code": "4.2 Paper 1 Question 3 (structure)",
     "q": "How is whole-text structure examined on Paper 1?",
     "idea": "Paper 1 Question 3: structure across the whole source, 8 marks",
     "content": "\"You now need to think about the whole of the Source. This text is from the opening of a novel. How has the writer structured the text to interest you as a reader? You could write about: what the writer focuses your attention on at the beginning; how and why the writer changes this focus as the Source develops; any other structural features that interest you. [8 marks]\" Level 4 (7–8), \"Perceptive, detailed analysis\": \"Shows detailed and perceptive understanding of structural features: Analyses the effects of the writer's choice of structural features; Selects a judicious range of examples; Makes sophisticated and accurate use of subject terminology.\" Level 0: \"No comments offered on the use of structure.\""
    }
   ]
  },
  {
   "id": "comparing-texts",
   "component": "C2",
   "option": null,
   "name": "Comparing texts (3.1.1)",
   "caseStudies": [
    "Paper 2 Question 4: \"Compare how the two writers convey their different attitudes to…\" (16 marks, AO3)",
    "Paper 2 Question 2: \"Write a summary of the differences between…\" using details from both sources (8 marks, AO1)",
    "two linked sources from different time periods and genres — one drawn from the 19th century and one from either the 20th or 21st century, \"depending on the time period assessed in Paper 1 in each particular series\"",
    "methods to compare: \"use of article form (public sphere)/use of letter form (private sphere); use of different tone/register/humour/seriousness; use of contemporary references…; language differences to reflect different times/modes/purposes\""
   ],
   "ideas": [
    {
     "code": "3.1.1 comparing texts",
     "q": "What does the specification require students to do with two or more texts?",
     "idea": "Comparing two or more texts critically",
     "content": "\"Comparing texts: comparing two or more texts critically with respect to the above.\" The whole of the critical reading and comprehension bullet — interpretation, inference, evidence, bias, critical reflection, different responses — and the evaluation of vocabulary, form, grammar and structure, are all in scope of the comparison, which is why the comparison question carries both an ideas strand and a methods strand in its levels."
    },
    {
     "code": "3 read and evaluate texts critically and make comparisons between texts",
     "q": "Where does comparison sit among the course's aims?",
     "idea": "Comparison as a stated outcome of the course",
     "content": "\"For GCSE English Language students should: … read and evaluate texts critically and make comparisons between texts.\" Section 4.1 repeats it as a learning outcome — students should \"read critically, and use knowledge gained from wide reading to inform and improve their own writing\" — and section 4.3 makes it the purpose of Paper 2, which \"looks at how different writers present a similar topic over time\"."
    },
    {
     "code": "4.5 AO3",
     "q": "Which assessment objective pays for comparison, and where are its marks?",
     "idea": "AO3: compare writers' ideas and perspectives and how these are conveyed",
     "content": "\"AO3: Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.\" AO3 carries 10% of the GCSE and all of it is on Paper 2 — the page 17 weighting table prints \"N/A\" against Paper 1 — so every AO3 mark in the qualification is in one 16-mark question. The objective has two halves and the levels mark both: the ideas and perspectives, and the methods that convey them."
    },
    {
     "code": "4.3 the two linked sources",
     "q": "What kind of pair of texts is set for comparison?",
     "idea": "Two linked sources from different time periods and genres",
     "content": "\"In section A, reading two linked sources from different time periods and genres in order to consider how each presents a perspective or viewpoint to influence the reader.\" \"The sources for the reading questions will be non-fiction and literary non-fiction texts. They will be drawn from the 19th century, and either the 20th or 21st century depending on the time period assessed in Paper 1 in each particular series. The combination selected will always provide students with an opportunity to consider viewpoints and perspectives over time.\" The comparison is therefore always across time as well as across genre and form."
    },
    {
     "code": "4.3 Paper 2 Question 4 (compare)",
     "q": "How is comparison examined, and what earns the top level?",
     "idea": "Paper 2 Question 4: the extended comparison, 16 marks",
     "content": "\"For this question, you need to refer to the whole of Source A, together with Source B… Compare how the two writers convey their different attitudes to parenting and education. In your answer, you could: compare their different attitudes; compare the methods they use to convey their attitudes; support your ideas with references to both texts. [16 marks]\" Level 4 (13–16), \"Perceptive, detailed\": \"Compares ideas and perspectives in a perceptive way; Analyses how writers' methods are used; Selects a range of judicious supporting detail from both texts; Shows a detailed understanding of the different ideas and perspectives in both texts.\" Level 1 (1–4) \"Makes simple cross reference of ideas and perspectives\". Level 0: \"No ideas offered about the differences.\" This and Paper 1 Question 4 are the two questions the specification names as allowing students to \"provide extended responses\" and to \"draw together different areas of knowledge, skills and/or understanding from across a full course of study\"."
    }
   ]
  },
  {
   "id": "clear-coherent-text",
   "component": "C1",
   "option": null,
   "name": "Producing clear and coherent text (3.1.2 Writing)",
   "caseStudies": [
    "Paper 1 Section B: descriptive or narrative writing (40 marks — 24 for content and organisation, 16 for technical accuracy)",
    "\"Write a description suggested by this picture\" (specimen Paper 1 Question 5)",
    "\"Write the opening part of a story about a place that is severely affected by the weather\" (specimen Paper 1 Question 5)",
    "\"a choice of scenario, written prompt or visual image that is related to the topic of the reading text in section A\"",
    "writing \"to describe, narrate, explain, instruct, give and respond to information, and argue\"",
    "\"You are going to enter a creative writing competition. Your entry will be judged by a panel of people of your own age.\" — a scenario with \"a designated audience, purpose and form\""
   ],
   "ideas": [
    {
     "code": "3.1.2 writing effectively for different purposes and audiences",
     "q": "Which purposes must a student be able to write for?",
     "idea": "Writing effectively for different purposes and audiences",
     "content": "\"Producing clear and coherent text: writing effectively for different purposes and audiences: to describe, narrate, explain, instruct, give and respond to information, and argue.\" Paper 1 Section B sets the first two of those purposes — \"descriptive or narrative writing\" — from \"a choice of scenario, written prompt or visual image\", and \"the scenario sets out a context for writing with a designated audience, purpose and form that will differ to those specified on Paper 2\"."
    },
    {
     "code": "3.1.2 selecting vocabulary, grammar, form, and structural and organisational features judiciously",
     "q": "How are the writer's choices matched to the task?",
     "idea": "Selecting vocabulary, grammar, form and structure judiciously for audience, purpose and context",
     "content": "\"Selecting vocabulary, grammar, form, and structural and organisational features judiciously to reflect audience, purpose and context.\" The AO5 grid marks exactly this pairing: the Content descriptors are register matched to audience, matching of purpose, and vocabulary with crafting of linguistic devices; the Organisation descriptors are use of structural features, the range and development of ideas, and paragraphing with discourse markers. Upper Level 4 (22–24) wants register \"convincing and compelling for audience\" and \"extensive and ambitious vocabulary with sustained crafting of linguistic devices\"."
    },
    {
     "code": "3.1.2 using language imaginatively and creatively",
     "q": "What does the specification ask of creative writing?",
     "idea": "Using language imaginatively and creatively",
     "content": "\"Using language imaginatively and creatively.\" AO5 requires students to \"communicate clearly, effectively and imaginatively\", and the aim of Paper 1 is to \"engage students in a creative text and inspire them to write creatively themselves\" by \"writing their own creative text, inspired by the topic that they have responded to in section A to demonstrate their narrative and descriptive skills in response to a written prompt, scenario or visual image\"."
    },
    {
     "code": "3.1.2 using information provided by others to write in different forms",
     "q": "How does reading feed the writing task?",
     "idea": "Using information provided by others to write in different forms",
     "content": "\"Using information provided by others to write in different forms.\" This is the design of both papers: \"the specification offers the attraction of two equally-balanced papers, relating reading sources to the topic and theme of writing tasks. The reading sources act as stimulus for writing tasks, providing students with a clear route through each paper.\" Section 3 puts the same requirement among the course's aims: students should \"use knowledge gained from wide reading to inform and improve their own writing\"."
    },
    {
     "code": "3.1.2 maintaining a consistent point of view",
     "q": "What has to stay the same from the first line to the last?",
     "idea": "Maintaining a consistent point of view",
     "content": "\"Maintaining a consistent point of view.\" In a description or the opening of a story this is the narrative perspective, one of the features the Paper 1 reading source is chosen to model — \"openings, endings, narrative perspectives and points of view, narrative or descriptive passages, character, atmospheric descriptions\". The AO5 levels reward it as register and purpose sustained: \"consistently matched to audience\" and \"consistently matched to purpose\" at Level 3, against only an \"occasional sense of audience\" and \"occasional sense of purpose\" at lower Level 1."
    },
    {
     "code": "3.1.2 maintaining coherence and consistency across a text",
     "q": "What holds a piece of writing together?",
     "idea": "Maintaining coherence and consistency across a text",
     "content": "\"Maintaining coherence and consistency across a text.\" AO5's second sentence is the same requirement — \"organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts\" — and the Organisation descriptors grade it directly: \"no paragraphs\" and \"one or two unlinked ideas\" at lower Level 1, \"random paragraph structure\" at upper Level 1, \"usually coherent paragraphs with range of discourse markers\" at lower Level 3, and \"fluently linked paragraphs with seamlessly integrated discourse markers\" at upper Level 4."
    },
    {
     "code": "4.5 AO5",
     "q": "Which assessment objective pays for the content and organisation of writing?",
     "idea": "AO5: communicate clearly, effectively and imaginatively, and organise information and ideas",
     "content": "\"AO5: Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.\" AO5 is the largest objective in the qualification at 30% — 15% on each paper — and is worth 24 of the 40 marks of each Section B. It is marked on a grid whose four levels are each split into an upper and a lower range."
    },
    {
     "code": "4.2 Paper 1 Question 5 (descriptive or narrative writing)",
     "q": "How is Paper 1's writing task set and marked?",
     "idea": "Paper 1 Question 5: one extended writing task, 40 marks",
     "content": "\"Section B: Writing – descriptive or narrative writing… Writing (40 marks) (25%): 1 extended writing question (24 marks for content, 16 marks for technical accuracy).\" The specimen sets a competition entry judged \"by a panel of people of your own age\", with a choice of \"Write a description suggested by this picture\" or \"Write the opening part of a story about a place that is severely affected by the weather\". The 24 content and organisation marks are AO5 and the 16 technical accuracy marks are AO6, marked on separate grids; AO6 alone is 10% of the GCSE from this one question."
    }
   ]
  },
  {
   "id": "writing-for-impact",
   "component": "C2",
   "option": null,
   "name": "Writing for impact (3.1.2 Writing)",
   "caseStudies": [
    "Paper 2 Section B: writing to present a viewpoint (40 marks — 24 for content and organisation, 16 for technical accuracy)",
    "\"Write an article for a broadsheet newspaper in which you explain your point of view on this statement\" (specimen Paper 2 Question 5)",
    "\"a single writing task related to the theme of section A\" which \"will specify audience, purpose and form\"",
    "\"a range of opinions, statements and writing scenarios to provoke a response\"",
    "rhetorical devices \"such as rhetorical questions, antithesis, parenthesis\""
   ],
   "ideas": [
    {
     "code": "3.1.2 selecting, organising and emphasising facts, ideas and key points",
     "q": "How is material chosen and arranged to make a point land?",
     "idea": "Selecting, organising and emphasising facts, ideas and key points",
     "content": "\"Writing for impact: selecting, organising and emphasising facts, ideas and key points.\" Emphasis is a structural act as much as a lexical one, and the AO5 Organisation descriptors mark it: \"some use of structural features\" at Level 2, \"effective use of structural features\" at upper Level 3, and \"varied and inventive use of structural features\" at upper Level 4, alongside \"a range of convincing and complex ideas\"."
    },
    {
     "code": "3.1.2 citing evidence and quotation effectively and pertinently to support views",
     "q": "What role does evidence play in a student's own writing?",
     "idea": "Citing evidence and quotation effectively and pertinently to support views",
     "content": "\"Citing evidence and quotation effectively and pertinently to support views.\" The Paper 2 task is built to invite it — it \"will use a range of opinions, statements and writing scenarios to provoke a response\", and the specimen prints the statement to be argued with in full (\"Homework has no value. Some students get it done for them; some don't do it at all. Students should be relaxing in their free time.\"). Evidence is what turns a stated opinion into writing \"assuredly matched to purpose\"."
    },
    {
     "code": "3.1.2 creating emotional impact",
     "q": "How does a writer move a reader as well as convince one?",
     "idea": "Creating emotional impact",
     "content": "\"Creating emotional impact.\" The reading half of Paper 2 teaches it by example: the mark scheme for the 12-mark language question rewards recognition of \"emotive language to appeal to the father\" and of \"formal tone created by complex vocabulary and phrases contrasted with simple childlike words\". In a student's own writing the same choices are rewarded under AO5 as vocabulary \"chosen for effect\", and at upper Level 4 as \"sustained crafting of linguistic devices\" with a register \"convincing and compelling for audience\"."
    },
    {
     "code": "3.1.2 using language creatively, imaginatively and persuasively, including rhetorical devices",
     "q": "Which persuasive techniques does the specification name?",
     "idea": "Using language creatively, imaginatively and persuasively, including rhetorical devices",
     "content": "\"Using language creatively, imaginatively and persuasively, including rhetorical devices (such as rhetorical questions, antithesis, parenthesis).\" These three are the only rhetorical devices the specification names, and they are named as examples rather than a closed list. The AO5 levels grade their handling from \"simple linguistic devices\" (upper Level 1) through \"a range of successful linguistic devices\" (upper Level 3) to \"sustained crafting of linguistic devices\" (upper Level 4)."
    },
    {
     "code": "4.3 Paper 2 Question 5 (writing to present a viewpoint)",
     "q": "How is Paper 2's writing task set and marked?",
     "idea": "Paper 2 Question 5: one extended writing task to a specified audience, purpose and form, 40 marks",
     "content": "\"In section B, producing a written text to a specified audience, purpose and form in which they give their own perspective on the theme that has been introduced to them in section A.\" \"In section B, there will be a single writing task related to the theme of section A. It will specify audience, purpose and form, and will use a range of opinions, statements and writing scenarios to provoke a response.\" Specimen stem: \"Write an article for a broadsheet newspaper in which you explain your point of view on this statement. (24 marks for content and organisation 16 marks for technical accuracy) [40 marks].\" The named form, audience and purpose must be held throughout: upper Level 4 requires register \"convincing and compelling for audience\" and \"assuredly matched to purpose\". Paper 1's scenario \"sets out a context for writing with a designated audience, purpose and form that will differ to those specified on Paper 2\"."
    },
    {
     "code": "4.5 AO6",
     "q": "How much does technical accuracy carry, and what is it judged on?",
     "idea": "AO6: technical accuracy — 20% of the marks for the specification as a whole",
     "content": "\"AO6: Candidates must use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. (This requirement must constitute 20% of the marks for each specification as a whole.)\" It is marked on its own 16-mark grid on each paper's Question 5 — 10% of the GCSE from each paper, 20% in total — in four unsplit levels (13–16, 9–12, 5–8, 1–4) against three strands: sentence demarcation and range of punctuation; sentence forms and Standard English with control of grammatical structures; and spelling with range of vocabulary. Level 4 wants demarcation \"consistently secure and consistently accurate\", \"wide range of punctuation is used with a high level of accuracy\", \"a full range of appropriate sentence forms for effect\", Standard English used \"consistently and appropriately with secure control of complex grammatical structures\", and \"high level of accuracy in spelling, including ambitious vocabulary\". Level 0 is where \"students' spelling, punctuation etc. is sufficiently poor to prevent understanding or meaning\"."
    }
   ]
  },
  {
   "id": "paper1",
   "component": "C1",
   "option": null,
   "name": "Explorations in creative reading and writing (4.2, Paper 1)",
   "caseStudies": [
    "Question 1: \"List four things from this part of the text about…\" (4 marks, AO1)",
    "Question 2: \"How does the writer use language here to…?\" (8 marks, AO2)",
    "Question 3: \"How has the writer structured the text to interest you as a reader?\" (8 marks, AO2)",
    "Question 4: a student's statement, \"To what extent do you agree?\" (20 marks, AO4)",
    "Question 5: \"Write a description suggested by this picture\" or \"Write the opening part of a story about…\" (40 marks, AO5 and AO6)",
    "one literature fiction text, drawn from either the 20th or 21st century, genre prose fiction — \"extracts from novels and short stories\"",
    "\"a choice of scenario, written prompt or visual image that is related to the topic of the reading text in section A\""
   ],
   "ideas": [
    {
     "code": "4.2 Aim of the paper",
     "q": "What is Paper 1 for?",
     "idea": "Reading a creative text in order to write one",
     "content": "\"The aim of this paper is to engage students in a creative text and inspire them to write creatively themselves by: in section A, reading a literature fiction text in order to consider how established writers use narrative and descriptive techniques to capture the interest of readers; in section B, writing their own creative text, inspired by the topic that they have responded to in section A to demonstrate their narrative and descriptive skills in response to a written prompt, scenario or visual image.\" Section 1.1 puts it more briefly: \"Paper 1, Explorations in Creative Reading and Writing, looks at how writers use narrative and descriptive techniques to engage the interest of readers.\""
    },
    {
     "code": "4.2 Assessment structure",
     "q": "How is the paper built and weighted?",
     "idea": "1 hour 45 minutes, 80 marks, 50% of GCSE, 40 marks in each section",
     "content": "\"Assessed: written exam: 1 hour 45 minutes; 80 marks; 50% of GCSE.\" \"The paper will assess in this sequence, AO1, AO2 and AO4 for reading, and AO5 and AO6 for writing. Section A will be allocated 40 marks, and Section B will be allocated 40 marks to give an equal weighting to the reading and writing tasks.\" Reading is \"(40 marks) (25%) – one single text\" with \"1 short form question (1 x 4 marks); 2 longer form questions (2 x 8 marks); 1 extended question (1 x 20 marks)\"; Writing is \"(40 marks) (25%)\" with \"1 extended writing question (24 marks for content, 16 marks for technical accuracy)\". AO3 is \"N/A\" on this paper. Maximum raw mark 80, scaling factor x1, maximum scaled mark 80."
    },
    {
     "code": "4.2 Content (the reading source)",
     "q": "What kind of text will Section A be set on?",
     "idea": "One unseen literature fiction text from the 20th or 21st century",
     "content": "\"The source for the reading questions will be a literature fiction text. It will be drawn from either the 20th or 21st century. Its genre will be prose fiction. It will include extracts from novels and short stories and focus on openings, endings, narrative perspectives and points of view, narrative or descriptive passages, character, atmospheric descriptions and other appropriate narrative and descriptive approaches.\" \"All texts in the examination will be unseen.\" The century is coordinated with Paper 2, whose second source is \"either the 20th or 21st century depending on the time period assessed in Paper 1 in each particular series\"."
    },
    {
     "code": "4.2 Content (the writing stimulus)",
     "q": "What prompts the writing task, and how does it differ from Paper 2's?",
     "idea": "A scenario, written prompt or visual image linked to the Section A text",
     "content": "\"As a stimulus for students' own writing, there will be a choice of scenario, written prompt or visual image that is related to the topic of the reading text in section A. The scenario sets out a context for writing with a designated audience, purpose and form that will differ to those specified on Paper 2.\" In the specimen the scenario is a creative writing competition \"judged by a panel of people of your own age\", with the visual image a \"picture of a coastline in a tumultuous storm\"."
    },
    {
     "code": "Paper 1 Question 1",
     "q": "What does the 4-mark opening question ask, and how is it marked?",
     "idea": "Question 1: list four things from named lines, 4 marks, AO1",
     "content": "\"Read again the first part of the Source from lines 1 to 7. List four things from this part of the text about the weather in Cornwall. [4 marks]\" Point-marked: \"Give 1 mark for each point about the weather: responses must be true, and drawn only from lines 1 to 7 of the text; responses must relate to the weather; students may quote or paraphrase; a paraphrased response covering more than one point should be credited for each point made… responses that copy the whole section of the text from lines 1 to 7 verbatim should not be credited any marks as this does not provide any evidence of identification of information that is specific to the focus of the question as required by AO1.\" It \"assesses bullet point 1 identify and interpret explicit and implicit information and ideas\"."
    },
    {
     "code": "Paper 1 Question 2",
     "q": "What does the 8-mark language question ask, and what earns Level 4?",
     "idea": "Question 2: language in a short printed extract, 8 marks, AO2",
     "content": "\"Look in detail at this extract from lines 8 to 18 of the Source: … How does the writer use language here to describe the effects of the weather? You could include the writer's choice of: words and phrases; language features and techniques; sentence forms. [8 marks]\" \"This question assesses Language ie: Words / Phrases / Language Features / Language Techniques / Sentence Forms.\" Level 4 \"Detailed, perceptive analysis\" (7–8): \"Analyses the effects of the writer's choices of language; Selects a judicious range of textual detail; Makes sophisticated and accurate use of subject terminology\"; Level 3 \"Clear, relevant explanation\" (5–6); Level 2 \"Some, understanding and comment\" (3–4); Level 1 \"Simple, limited comment\" (1–2)."
    },
    {
     "code": "Paper 1 Question 3",
     "q": "What does the 8-mark structure question ask, and what counts as structure?",
     "idea": "Question 3: structure across the whole source, 8 marks, AO2",
     "content": "\"You now need to think about the whole of the Source. This text is from the opening of a novel. How has the writer structured the text to interest you as a reader? You could write about: what the writer focuses your attention on at the beginning; how and why the writer changes this focus as the Source develops; any other structural features that interest you. [8 marks]\" \"Structural features can be: at a whole text level eg. beginnings / endings / perspective shifts; at a paragraph level eg. topic change / aspects of cohesion; and at a sentence level when judged to contribute to whole structure.\" Level 4 \"Perceptive, detailed analysis\" (7–8) requires analysis of \"the effects of the writer's choice of structural features\" with \"a judicious range of examples\"."
    },
    {
     "code": "Paper 1 Question 4",
     "q": "What does the 20-mark extended question ask, and what does it reward?",
     "idea": "Question 4: critical evaluation of a statement about the text, 20 marks, AO4",
     "content": "\"Focus this part of your answer on the second part of the Source from line 19 to the end. A student, having read this section of the text said: '…' To what extent do you agree? In your response, you could: write about your own impressions of the characters; evaluate how the writer has created these impressions; support your opinions with references to the text. [20 marks]\" AO4: \"Evaluate texts critically and support this with appropriate textual references.\" Level 4 \"Perceptive, detailed evaluation\" (16–20): \"Evaluates critically and in detail the effect(s) on the reader; Shows perceptive understanding of writer's methods; Selects a judicious range of textual detail; Develops a convincing and critical response to the focus of the statement.\" Level 3 is 11–15, Level 2 6–10, Level 1 1–5. This is one of the two questions that let students \"provide extended responses\" and \"draw together different areas of knowledge, skills and/or understanding from across a full course of study\"."
    },
    {
     "code": "Paper 1 Question 5",
     "q": "What is the writing task, and how are its 40 marks divided?",
     "idea": "Question 5: descriptive or narrative writing, 40 marks, AO5 and AO6",
     "content": "\"You are going to enter a creative writing competition. Your entry will be judged by a panel of people of your own age. Either: Write a description suggested by this picture: (picture of a coastline in a tumultuous storm) Or: Write the opening part of a story about a place that is severely affected by the weather. (24 marks for content and organisation and 16 marks for technical accuracy) [40 marks].\" Two grids are applied. AO5 Content and Organisation out of 24, in four levels each split upper/lower — Level 4 \"Compelling, Convincing\" 19–24 (22–24 / 19–21), Level 3 \"Consistent, Clear\" 13–18 (16–18 / 13–15), Level 2 \"Some success\" 7–12 (10–12 / 7–9), Level 1 \"Simple, Limited\" 1–6 (4–6 / 1–3). AO6 Technical Accuracy out of 16 in four unsplit levels — 13–16, 9–12, 5–8, 1–4."
    }
   ]
  },
  {
   "id": "paper2",
   "component": "C2",
   "option": null,
   "name": "Writers' viewpoints and perspectives (4.3, Paper 2)",
   "caseStudies": [
    "Question 1: \"Choose four statements below which are TRUE\" (4 marks, AO1)",
    "Question 2: \"Use details from both Sources. Write a summary of the differences between…\" (8 marks, AO1)",
    "Question 3: \"How does [the writer] use language to try to influence…?\" (12 marks, AO2)",
    "Question 4: \"Compare how the two writers convey their different attitudes to…\" (16 marks, AO3)",
    "Question 5: \"Write an article for a broadsheet newspaper in which you explain your point of view on this statement\" (40 marks, AO5 and AO6)",
    "two linked non-fiction and literary non-fiction sources, one drawn from the 19th century and one from either the 20th or 21st century",
    "\"high quality journalism, articles, reports, essays, travel writing, accounts, sketches, letters, diaries, autobiography and biographical passages or other appropriate non-fiction and literary non-fiction forms\""
   ],
   "ideas": [
    {
     "code": "4.3 Aim of the paper",
     "q": "What is Paper 2 for?",
     "idea": "How writers present a viewpoint, and how a student presents their own",
     "content": "\"The aim of this paper is to develop students' insights into how writers have particular viewpoints and perspectives on issues or themes that are important to the way we think and live our lives. It will encourage students to demonstrate their skills by: in section A, reading two linked sources from different time periods and genres in order to consider how each presents a perspective or viewpoint to influence the reader; in section B, producing a written text to a specified audience, purpose and form in which they give their own perspective on the theme that has been introduced to them in section A.\" Section 1.1: \"Paper 2, Writers' Viewpoints and Perspectives, looks at how different writers present a similar topic over time.\""
    },
    {
     "code": "4.3 Assessment structure",
     "q": "How is the paper built and weighted?",
     "idea": "1 hour 45 minutes, 80 marks, 50% of GCSE, 40 marks in each section",
     "content": "\"Assessed: written exam: 1 hour 45 minutes; 80 marks; 50% of GCSE.\" \"The paper will assess in this sequence, AO1, AO2 and AO3 for reading, and AO5 and AO6 for writing. Section A will be allocated 40 marks, and section B will be allocated 40 marks to give an equal weighting to the reading and writing tasks.\" Reading is \"(40 marks) (25%) – two linked texts\" with \"1 short form question (1 x 4 marks); 2 longer form questions (1 x 8, 1 x 12 marks); 1 extended question (1 x 16 marks)\"; Writing is \"(40 marks) (25%)\" with \"1 extended writing question (24 marks for content, 16 marks for technical accuracy)\". AO4 is \"n/a\" on this paper. The specimen question paper advises \"about 15 minutes reading through the Source and all five questions\", \"about 45 minutes\" on Section A and \"about 45 minutes\" on Section B."
    },
    {
     "code": "4.3 Content (the reading sources)",
     "q": "Which two texts will Section A be set on?",
     "idea": "Two unseen non-fiction / literary non-fiction sources across time",
     "content": "\"The sources for the reading questions will be non-fiction and literary non-fiction texts. They will be drawn from the 19th century, and either the 20th or 21st century depending on the time period assessed in Paper 1 in each particular series. The combination selected will always provide students with an opportunity to consider viewpoints and perspectives over time. Choice of genre will include high quality journalism, articles, reports, essays, travel writing, accounts, sketches, letters, diaries, autobiography and biographical passages or other appropriate non-fiction and literary non-fiction forms.\" \"All texts in the examination will be unseen.\""
    },
    {
     "code": "4.3 Content (the writing task)",
     "q": "How is the Section B task set?",
     "idea": "A single task on the Section A theme, with audience, purpose and form specified",
     "content": "\"In section B, there will be a single writing task related to the theme of section A. It will specify audience, purpose and form, and will use a range of opinions, statements and writing scenarios to provoke a response.\" Unlike Paper 1 there is no choice of task. The audience, purpose and form specified here \"will differ to\" those set by the Paper 1 scenario."
    },
    {
     "code": "Paper 2 Question 1",
     "q": "What does the 4-mark opening question ask, and how is it marked?",
     "idea": "Question 1: choose the four true statements, 4 marks, AO1",
     "content": "\"Read again the first part of Source A from lines 1 to 15. Choose four statements below which are TRUE. Shade the boxes of the ones that you think are true. Choose a maximum of four statements. [4 marks]\" Eight lettered statements are printed; the mark scheme marks each (T) or (F), so each correctly shaded true statement earns one mark. \"This assesses the first bullet point identify and interpret explicit and implicit information and ideas.\""
    },
    {
     "code": "Paper 2 Question 2",
     "q": "What does the 8-mark summary question ask, and what earns Level 4?",
     "idea": "Question 2: a summary of differences across both sources, 8 marks, AO1",
     "content": "\"You need to refer to Source A and Source B for this question. Use details from both Sources. Write a summary of the differences between Eddie and Henry. [8 marks]\" \"This assesses both bullet points\" of AO1. Level 4 \"Perceptive summary\" (7–8): \"Shows perceptive synthesis and interpretation of both texts: Makes perceptive inferences from both texts; Makes judicious references/use of textual detail relevant to the focus of the question; Statements show perceptive differences between texts.\" Level 3 \"Clear, relevant summary\" (5–6); Level 2 \"Some attempts at summary\" (3–4); Level 1 \"Simple, limited summary\" (1–2), which \"offers paraphrase rather than inference\"."
    },
    {
     "code": "Paper 2 Question 3",
     "q": "What does the 12-mark language question ask?",
     "idea": "Question 3: how one writer uses language to influence a reader, 12 marks, AO2",
     "content": "\"You now need to refer only to Source B, the letter by Henry written to his father. How does Henry use language to try to influence his father? [12 marks]\" \"This question assesses Language ie: Words / Phrases / Language Features / Language Techniques / Sentence Forms.\" Level 4 \"Detailed, perceptive analysis\" (10–12); Level 3 \"Clear, relevant explanation\" (7–9); Level 2 \"Some understanding and comment\" (4–6); Level 1 \"Simple, limited comment\" (1–3). The mark scheme's indicative content lists, as separate bullets: \"use of proper nouns and phrases linked to time and place\"; \"emotive language to appeal to the father\"; \"formal tone created by complex vocabulary and phrases contrasted with simple childlike words, 'good', 'kind'\"; \"use of hyperbole via the simile 'more like Bears …'\"; \"semantic field of religion, 'church', 'Christians', 'If God permit me…'\"."
    },
    {
     "code": "Paper 2 Question 4",
     "q": "What does the 16-mark extended question ask, and what earns Level 4?",
     "idea": "Question 4: compare how two writers convey their attitudes, 16 marks, AO3",
     "content": "\"For this question, you need to refer to the whole of Source A, together with Source B… Compare how the two writers convey their different attitudes to parenting and education. In your answer, you could: compare their different attitudes; compare the methods they use to convey their attitudes; support your ideas with references to both texts. [16 marks]\" Level 4 \"Perceptive, detailed\" (13–16): \"Compares ideas and perspectives in a perceptive way; Analyses how writers' methods are used; Selects a range of judicious supporting detail from both texts; Shows a detailed understanding of the different ideas and perspectives in both texts.\" Level 3 (9–12), Level 2 (5–8), Level 1 (1–4). The methods the mark scheme suggests are \"use of article form (public sphere)/use of letter form (private sphere); use of different tone/register/humour/seriousness; use of contemporary references…; language differences to reflect different times/modes/purposes\". With Paper 1 Question 4 it is one of the two questions that let students \"provide extended responses\"."
    },
    {
     "code": "Paper 2 Question 5",
     "q": "What is the writing task, and how are its 40 marks divided?",
     "idea": "Question 5: writing to present a viewpoint, 40 marks, AO5 and AO6",
     "content": "\"'Homework has no value. Some students get it done for them; some don't do it at all. Students should be relaxing in their free time.' Write an article for a broadsheet newspaper in which you explain your point of view on this statement. (24 marks for content and organisation 16 marks for technical accuracy) [40 marks].\" The paper's instructions add \"Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.\" The same two grids are applied as on Paper 1: AO5 Content and Organisation out of 24 with each level split into an upper and a lower range, and AO6 Technical Accuracy out of 16 in four unsplit levels."
    }
   ]
  },
  {
   "id": "spoken-language",
   "component": "C1",
   "option": null,
   "name": "Spoken language (3.1.3) and Non-exam assessment: the Spoken Language endorsement (4.4)",
   "caseStudies": [
    "\"a prepared spoken presentation on a specific topic\", \"as a guide, the duration should be no more than ten minutes\"",
    "talks",
    "debates",
    "speeches",
    "dialogues",
    "\"where the audience is the teacher only, the presentation and dialogue must be designed in such a way that it could have a potentially wider audience than just one person (eg it replicates a television interview)\""
   ],
   "ideas": [
    {
     "code": "3.1.3 presenting information and ideas (selecting and organising)",
     "q": "How is the content of a presentation chosen and arranged?",
     "idea": "Selecting and organising information and ideas effectively and persuasively for prepared spoken presentations",
     "content": "\"Presenting information and ideas: selecting and organising information and ideas effectively and persuasively for prepared spoken presentations.\" The endorsement criteria grade exactly this: a Pass \"makes an attempt to organise and structure his or her presentation\", a Merit \"organises and structures his or her presentation clearly and appropriately to meet the needs of the audience\", a Distinction \"organises and structures his or her presentation using an effective range of strategies to engage the audience\"."
    },
    {
     "code": "3.1.3 presenting information and ideas (planning for purpose and audience)",
     "q": "What preparation does the assessment require?",
     "idea": "Planning effectively for different purposes and audiences",
     "content": "\"…planning effectively for different purposes and audiences.\" Section 4.4 makes planning a formal requirement rather than advice: \"presentations must be planned and organised. Students should be advised that that lack of preparation is likely to prevent access to the criteria for the higher grades.\" Students \"may use pre-prepared notes, powerpoint etc. to assist them during their presentations but this is not a requirement\", and \"students must identify the subject for their presentations in advance and agree it with their teacher\"."
    },
    {
     "code": "3.1.3 presenting information and ideas (making presentations and speeches)",
     "q": "What form does the assessed performance take?",
     "idea": "Making presentations and speeches",
     "content": "\"…making presentations and speeches.\" \"Students must undertake a prepared spoken presentation on a specific topic. The topic is at the discretion. As a guide, the duration should be no more than ten minutes.\" \"Presentations must be formal but may take a wide variety of forms, including talks, debates, speeches and dialogues.\" AO7 states the objective: \"Demonstrate presentation skills in a formal setting.\""
    },
    {
     "code": "3.1.3 responding to spoken language",
     "q": "What happens after the presentation?",
     "idea": "Listening to and responding appropriately to any questions and feedback",
     "content": "\"Responding to spoken language: listening to and responding appropriately to any questions and feedback.\" \"As part of, or following, the presentation students must listen to and respond appropriately to questions and feedback\", and the aim includes \"asking questions themselves to elicit clarification\". AO8: \"Listen and respond appropriately to spoken language, including to questions and feedback on presentations.\" The criteria climb from responding \"in a straight forward manner\" (Pass), to \"responding formally and in some detail\" (Merit), to responding \"perceptively and if appropriate elaborates with further ideas and information\" (Distinction)."
    },
    {
     "code": "3.1.3 spoken Standard English",
     "q": "What register is required?",
     "idea": "Expressing ideas using Standard English whenever and wherever appropriate",
     "content": "\"Spoken Standard English: expressing ideas using Standard English whenever and wherever appropriate.\" AO9: \"Use spoken Standard English effectively in speeches and presentations.\" The general criteria define it for assessment purposes: a learner must \"use Spoken Standard English which, for the purposes of the spoken language assessment, means that a learner must – be intelligible; generally use language appropriate to the formal setting of the presentation\". Section 3 lists the same skill among the course requirements: \"listen to and understand spoken language and use spoken Standard English effectively.\""
    },
    {
     "code": "4.4 Aim of the assessment",
     "q": "What is the non-exam assessment for?",
     "idea": "Demonstrating speaking and listening skills in a formal context",
     "content": "\"The aim of the assessment is to allow students to demonstrate their speaking and listening skills by: giving a presentation in a formal context; responding appropriately to questions and to feedback, asking questions themselves to elicit clarification; using spoken Standard English. The assessment will be separately endorsed and will cover AO7, AO8 and AO9 for spoken language.\" It is one of the three assessments a student must offer: \"for the award of the GCSE in English Language students must offer all three assessments.\""
    },
    {
     "code": "4.4 Content (key requirements)",
     "q": "What exactly must a student do?",
     "idea": "The key requirements of the prepared presentation",
     "content": "\"Students must undertake a prepared spoken presentation on a specific topic… The key requirements are: presentations must be formal but may take a wide variety of forms, including talks, debates, speeches and dialogues; students must identify the subject for their presentations in advance and agree it with their teacher; presentations must be planned and organised…; students may use pre-prepared notes, powerpoint etc. to assist them during their presentations but this is not a requirement; as part of, or following, the presentation students must listen to and respond appropriately to questions and feedback; where the audience is the teacher only, the presentation and dialogue must be designed in such a way that it could have a potentially wider audience than just one person (eg it replicates a television interview).\""
    },
    {
     "code": "4.4 Assessment (competency basis)",
     "q": "How is the endorsement graded?",
     "idea": "No marks: a holistic grade on a competency basis",
     "content": "\"No marks will be assigned to a student's performance – it will be assessed holistically as a grade, using a 'competency' basis on criteria which are provided below. Competency means that a student must hit all the criteria in one grade before moving on to the next. Students who do not reach the Pass standard must be recorded as Not Classified.\" It is \"teacher set throughout course\", \"marked by teacher\" and is a \"separate endorsement (0% weighting of GCSE)\"; the page 17 weighting table prints \"endorsement\" against AO7, AO8 and AO9 and 0 for the overall weighting of the component."
    },
    {
     "code": "4.4 General criteria",
     "q": "What must every graded performance do?",
     "idea": "The general criteria required for any grade",
     "content": "\"To be awarded a Pass, Merit or Distinction a learner must: be audible; use Spoken Standard English which, for the purposes of the spoken language assessment, means that a learner must – be intelligible; generally use language appropriate to the formal setting of the presentation.\" These apply in addition to the criteria for the grade itself: each grade column opens \"In addition to the general criteria…\"."
    },
    {
     "code": "4.4 Pass",
     "q": "What does a Pass performance look like?",
     "idea": "Pass criteria",
     "content": "\"In addition to the general criteria, to be awarded a Pass a Learner's performance in his or her spoken language assessment must meet all of the following criteria: expresses straightforward ideas/information/feelings; makes an attempt to organise and structure his or her presentation; makes an attempt to meet the needs of the audience; listens to questions/feedback and provides an appropriate response in a straight forward manner.\""
    },
    {
     "code": "4.4 Merit",
     "q": "What does a Merit performance add?",
     "idea": "Merit criteria",
     "content": "\"In addition to the general criteria, to be awarded a Merit a Learner's performance in his or her spoken language assessment must meet all of the following criteria: expresses challenging ideas/information/feelings using a range of vocabulary; organises and structures his or her presentation clearly and appropriately to meet the needs of the audience; achieves the purpose of his or her presentation; listens to questions/feedback responding formally and in some detail.\""
    },
    {
     "code": "4.4 Distinction",
     "q": "What does a Distinction performance add?",
     "idea": "Distinction criteria",
     "content": "\"In addition to the general criteria, to be awarded a Distinction a Learner's performance in his or her spoken language assessment must meet all of the following criteria: expresses sophisticated ideas/information/feelings using a sophisticated repertoire of vocabulary; organises and structures his or her presentation using an effective range of strategies to engage the audience; achieves the purpose of his or her presentation; listens to questions/feedback, responds perceptively and if appropriate elaborates with further ideas and information.\""
    },
    {
     "code": "5 Non-exam assessment administration",
     "q": "How is the endorsement reported and moderated?",
     "idea": "A compulsory, separately reported grade, monitored by recorded sample",
     "content": "\"The preparation and assessment of Spoken Language is a compulsory requirement of the course of study. It will appear on all students' certificates as a separately reported grade, alongside the overall grade issued. Performance will be assessed against common criteria issued by all exam boards.\" \"This endorsement has a number of features which distinguish it from most general qualifications components, in particular: it will be reported as a separate grade (Pass, Merit, Distinction or Not Classified) and will not contribute to the result of the GCSE English Language qualification; no marks will be assigned…; it will be assessed on a 'competency' basis using agreed common criteria – to be awarded a grade students must achieve all of the criteria for that grade.\" Centres must \"provide audio-visual recordings of a sample of students\", complete and unedited, of all students where there are 30 or fewer and of 30 students where there are more, with a minimum of 10 at each grade."
    }
   ]
  }
 ]
};
module.exports = { SPEC_8700 };
