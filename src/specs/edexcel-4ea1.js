/* Pearson Edexcel GCSE English Language (International GCSE, Specification A) (4EA1) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_4EA1 = {
 "id": "EDX-4EA1",
 "board": "Pearson Edexcel",
 "subject": "English Language (International GCSE, Specification A)",
 "code": "4EA1",
 "level": "GCSE",
 "version": "Specification – Issue 7 – August 2025",
 "firstExam": 2018,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Non-fiction Texts and Transactional Writing",
   "paperCode": "4EA1/01",
   "marks": 90,
   "weight": 60,
   "minutes": 135,
   "sections": [
    "Section A – Reading: A mixture of short- and long-answer questions related to a non-fiction text from Part 1 of the Pearson Edexcel International GCSE English Anthology and one previously unseen extract. Total of 45 marks. Students are advised to allocate 1 hour and 30 minutes including reading time to Section A, and answer all questions in this section (AO1, AO2, AO3).",
    "Section B – Transactional Writing: One 45-mark writing task, from a choice of two involving a given audience, form or purpose. Students are advised to allocate 45 minutes to Section B and answer one question (AO4, AO5)."
   ],
   "assessment": "Externally assessed. Written examination: 2 hours 15 minutes. Availability: June and November. 90 marks. 60% of the total International GCSE. Component 1 assesses Reading (30%) and Writing (30%). Candidates will be provided with the anthology text in the examination. This component is available as a paper-based or onscreen assessment.",
   "mandatory": true
  },
  {
   "id": "C2",
   "name": "Poetry and Prose Texts and Imaginative Writing",
   "paperCode": "4EA1/02",
   "marks": 60,
   "weight": 40,
   "minutes": 90,
   "sections": [
    "Section A – Reading: The 30-mark essay question on a poetry or prose text from Part 2 of the Pearson Edexcel International GCSE English Anthology. Students are advised to allocate 45 minutes to Section A (AO1, AO2).",
    "Section B – Imaginative Writing: One 30-mark imaginative writing task from a choice of three. Students are advised to allocate 45 minutes to Section B (AO4, AO5)."
   ],
   "assessment": "Externally assessed. Written examination: 1 hour 30 minutes. Availability: June and November. 60 marks. 40% of the total International GCSE. Component 2 assesses Reading (20%) and Writing (20%). Students will be provided with the anthology text in the examination. This component is available as a paper-based or onscreen assessment.",
   "alternative": "Component 2 is available as an alternative to non-examined assessment Component 3. \"Students must complete Component 1, plus either Component 2 or Component 3.\" Component 3: Poetry and Prose Texts and Imaginative Writing (non-examined assessment), paper code 4EA1/03, is internally assessed and externally moderated, carries 60 marks and the same 40% of the total International GCSE, and covers the same content: Assignment A – Poetry and prose texts: one 30-mark essay question based on any three poetry or prose texts from Part 2 of the Pearson Edexcel International GCSE English Anthology, of which at least one poetry text and one prose text must be discussed (approximately 1200 words); Assignment B – Imaginative writing: one 30-mark imaginative writing task (approximately 700 words). This course models the examined route (Component 1 plus Component 2); the non-examined alternative is described here and in markConventions.summary, and its requirements are carried as key ideas in the Part 2 anthology and imaginative writing topics."
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Reading",
   "text": "Read and understand a variety of texts, selecting and interpreting information, ideas and perspectives.",
   "weight": 15,
   "byComponent": {
    "C1": 7,
    "C2": 8
   }
  },
  {
   "id": "AO2",
   "label": "Reading",
   "text": "Understand and analyse how writers use linguistic and structural devices to achieve their effects.",
   "weight": 20,
   "byComponent": {
    "C1": 8,
    "C2": 12
   }
  },
  {
   "id": "AO3",
   "label": "Reading",
   "text": "Explore links and connections between writers’ ideas and perspectives, as well as how these are conveyed.",
   "weight": 15,
   "byComponent": {
    "C1": 15,
    "C2": 0
   }
  },
  {
   "id": "AO4",
   "label": "Writing",
   "text": "Communicate effectively and imaginatively, adapting form, tone and register of writing for specific purposes and audiences.",
   "weight": 30,
   "byComponent": {
    "C1": 18,
    "C2": 12
   }
  },
  {
   "id": "AO5",
   "label": "Writing",
   "text": "Write clearly, using a range of vocabulary and sentence structures, with appropriate paragraphing and accurate spelling, grammar and punctuation.",
   "weight": 20,
   "byComponent": {
    "C1": 12,
    "C2": 8
   }
  },
  {
   "id": "AO6",
   "label": "Spoken language",
   "text": "Speaking and listening skills: demonstrate presentation skills in a formal setting; listen and respond appropriately to spoken language, including to questions and feedback to presentations; use spoken Standard English effectively in speeches and presentations. Weighting: Not applicable — \"Assessment objective 6 is for the optional Spoken Language endorsement. If a student completes the endorsement, it will appear on their certificate as a separately reported grade.\"",
   "weight": null
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Marking is by levels of response. The specification prints its assessment grids under Component 3 (Assignment A: AO1 out of 12 in four levels — Limited/Basic 1–3, Some/Developing 4–6, Clear/Relevant 7–9, Detailed/Perceptive 10–12; AO2 out of 18 in five levels — Limited/Basic 1–3, Some/Developing 4–6, Clear/Relevant/Explanatory 7–10, Thorough/Confident/Exploratory 11–14, Discriminating/Perceptive/Analytical 15–18; Assignment B: AO4 out of 18 in five levels, 1–3, 4–7, 8–11, 12–15, 16–18; AO5 out of 12 in five levels, 1–2, 3–4, 5–7, 8–10, 11–12), and those AO tariffs are exactly the tariffs of the two examined Component 2 questions. \"Students should be awarded the appropriate mark within any range on a ‘best fit’ basis, balancing strengths and weaknesses in each essay. Answers may display characteristics of more than one level, and where this happens, markers must use professional judgement to decide which level is most appropriate. For example, a passage in the assignment may contain characteristics of Level 4 while the rest of the assignment tends towards Level 3. The outcome may therefore be a high Level 3.\" Reading levels reward selection of information, ideas and perspectives, use of quotations/textual references, and interpretation (AO1), and selection of language and structural devices, use of textual references and examples, and comment on, explanation of, exploration of or perceptive analysis of their effects (AO2). The specification defines the two kinds of support it rewards: a \"Textual reference\" is \"any reference to supporting evidence from the text - direct quotations or references to specific moments/events within the text\", and an \"Example\" is \"citing specific examples of features of language and/or structure from the text\". Writing levels reward communication, grasp of purpose and of the expectations/requirements of the intended reader, and use of form, tone and register (AO4), and expression and ordering of information and ideas, vocabulary and spelling, paragraphing, punctuation and sentence structures (AO5). Raw marks total 150 across the qualification: Component 1 carries 90 (Question 1 — 11 AO1; Question 2 — 12 AO2; Question 3 — 22 AO3; Questions 4 and 5 — 45, of which AO4 27 and AO5 18), and Component 2 or Component 3 carries 60 (Question 1 — 30, of which AO1 12 and AO2 18; Question 2 — 30, of which AO4 18 and AO5 12). AO weightings for the qualification are AO1 15%, AO2 20%, AO3 15%, AO4 30% and AO5 20%; \"some figures have been rounded up or down\". Students must complete Component 1, plus either Component 2 (examination) or Component 3 (non-examined assessment); this course models the examined route. Component 3 is internally set and assessed and externally moderated by Pearson: Assignment A is a response of approximately 1200 words on three or more texts from Part 2 of the anthology, with at least one poetry text and one prose text discussed, and Assignment B is a piece of imaginative writing of approximately 700 words whose purpose \"should be to narrate, describe or entertain\" (\"the above word count is advisory only and there is no penalty for exceeding this recommendation\"); \"there will be two marks out of 30 which will be combined to make one mark out of 60\", centres with more than one teacher conduct internal standardisation, and a sample is digitally submitted to a Pearson-appointed moderator. The optional spoken language endorsement (4EA1/E) carries no marks: students are graded Not Classified, Pass, Merit or Distinction, must meet all the criteria for a grade, and the grade is reported separately on the certificate. The qualification is graded and certificated on a nine-grade scale from 9 to 1; individual components are not graded.",
  "commandWords": [
   {
    "word": "Read and understand",
    "means": "AO1. The reading levels reward \"selection of information/ideas\", \"use of quotations/textual references\" and \"understanding of information/ideas\"; at the top level the selection is \"detailed and persuasive\", the use of quotations \"discriminating\", and the understanding \"convincing\". Retelling or paraphrasing is what Level 1 looks like."
   },
   {
    "word": "Select and interpret",
    "means": "AO1. Pick out information, ideas and perspectives and say what they mean rather than restating them: Level 3 is \"relevant interpretation demonstrating a clear understanding\", Level 4 \"perceptive interpretation demonstrating a convincing understanding of information, ideas and perspectives\"."
   },
   {
    "word": "Analyse",
    "means": "AO2 — \"understand and analyse how writers use linguistic and structural devices to achieve their effects\". The levels climb from \"basic and simple comment on the effect\", through \"clear explanations of the effects\", to \"a detailed exploration\" and finally \"a perceptive analysis of the effects of language and structure\" with \"subtle and discriminating selection of language and structural devices\"."
   },
   {
    "word": "Explore links and connections",
    "means": "AO3 — \"explore links and connections between writers’ ideas and perspectives, as well as how these are conveyed\". This is the 22-mark Question 3 of Component 1 and the only AO3 marks in the qualification; the answer must work across the anthology text and the previously unseen extract, on ideas and perspectives and on how they are conveyed."
   },
   {
    "word": "Compare",
    "means": "AO3 in practice: the specification's aims require students to \"make comparisons between texts and analyse the ways in which writers achieve their effects\". Comparison must be two-sided and about the writers' ideas, perspectives and methods, not a list of two separate summaries."
   },
   {
    "word": "Discuss",
    "means": "The verb the specification uses to set the poetry and prose task: \"Discuss how the writers use language and structure to present [insert chosen focus]\", with the instruction to \"discuss the ideas and perspectives of the writers about the chosen focus\", \"discuss how the writers use language and structure to achieve their effects\" and \"include textual references to illustrate the points you make\"."
   },
   {
    "word": "Include textual references",
    "means": "A \"Textual reference\" is defined as \"any reference to supporting evidence from the text - direct quotations or references to specific moments/events within the text\"; an \"Example\" is \"citing specific examples of features of language and/or structure from the text\". Levels reward the accuracy, relevance and, at the top, the discriminating and assured use of both."
   },
   {
    "word": "Write (for a given audience, form or purpose)",
    "means": "AO4 — \"communicate effectively and imaginatively, adapting form, tone and register of writing for specific purposes and audiences\". Component 1 Section B sets \"one writing task, based on a choice of two prompts involving a given audience, form or purpose\" in one of the six named transactional text types; the levels reward realisation of the task \"according to the writer's purpose and the expectations/requirements of the intended reader\"."
   },
   {
    "word": "Narrate, describe or entertain",
    "means": "The purposes the specification sets for imaginative writing (\"the purpose should be to narrate, describe or entertain\"; \"students may write about real or imagined experiences\"). Marked on AO4 and AO5, with AO5 rewarding vocabulary, spelling, paragraphing, punctuation and sentence structures \"to achieve particular effects\"."
   }
  ],
  "essayShapes": [
   {
    "marks": 11,
    "minutes": 22,
    "structure": "Component 1, Section A, Question 1 — AO1 only, 11 marks (pro rata within the 1 hour 30 minutes advised for Section A's 45 marks). A short- to medium-answer reading question on the Part 1 anthology text: select and interpret information, ideas and perspectives, supporting each point with a quotation or a reference to a specific moment in the text. No analysis of method is rewarded here; the levels reward clear and relevant selection and, at the top, detailed and persuasive selection with discriminating use of supporting quotations and a convincing understanding."
   },
   {
    "marks": 12,
    "minutes": 24,
    "structure": "Component 1, Section A, Question 2 — AO2 only, 12 marks. A question on how the writer uses linguistic and structural devices to achieve their effects: select the devices, cite the exact words or the structural pattern as an example, and explain the effect. Move beyond \"basic and simple comment\" to \"clear explanations of the effects of language and structure\", and at the top to a perceptive analysis with subtle and discriminating selection."
   },
   {
    "marks": 22,
    "minutes": 44,
    "structure": "Component 1, Section A, Question 3 — AO3 only, 22 marks, the paper's long reading answer across the Part 1 anthology text and the previously unseen extract. Explore links and connections between the writers' ideas and perspectives \"as well as how these are conveyed\": build paragraphs that put the two texts together on one idea, quote from both, and weigh how each writer's method conveys that perspective differently."
   },
   {
    "marks": 45,
    "minutes": 45,
    "structure": "Component 1, Section B, Questions 4 and 5 — Transactional Writing, one task from a choice of two, 45 marks (AO4 27, AO5 18), 45 minutes advised. Write in the transactional text type named by the prompt — article for a magazine or newspaper, speech, letter, guide, review or text of a leaflet — holding form, tone and register to the given audience and purpose throughout. Plan and proofread: AO5 rewards varied vocabulary and accurate spelling, paragraphing that makes meaning clear, accurate and varied punctuation, and sentence structures managed for deliberate effect."
   },
   {
    "marks": 30,
    "minutes": 45,
    "structure": "Component 2, Section A, Question 1 — the essay question on a poetry or prose text from Part 2 of the anthology, 30 marks (AO1 12, AO2 18), 45 minutes advised. Two thirds of the marks are AO2, so the essay must be built on how the writer uses language and structure: an opening that answers the question directly, paragraphs that each take a method, quote it precisely and explain its effect on the reader, interpretation of the ideas and perspectives alongside it, and a close that returns to the question."
   },
   {
    "marks": 30,
    "minutes": 45,
    "structure": "Component 2, Section B, Question 2 — Imaginative Writing, one task from a choice of three given prompts, 30 marks (AO4 18, AO5 12), 45 minutes advised. Narrate, describe or entertain: a controlled shape (a clear opening, a developed middle and a deliberate ending), sustained tone and register, imagery and detail chosen for effect, and accurate, varied punctuation and sentence structures used selectively to achieve particular effects."
   },
   {
    "marks": 30,
    "structure": "Component 3 (non-examined alternative to Component 2), Assignment A: Poetry and Prose Texts — 30 marks (AO1 12, AO2 18), approximately 1200 words, no time limit. \"Discuss how the writers use language and structure to present [chosen focus] in [text 1], [text 2] and [text 3]\", using three texts from Part 2 of the anthology with at least one poetry text and one prose text; discuss the writers' ideas and perspectives on the chosen focus, discuss how they use language and structure to achieve their effects, and include textual references to illustrate the points made."
   },
   {
    "marks": 30,
    "structure": "Component 3 (non-examined alternative to Component 2), Assignment B: Imaginative Writing — 30 marks (AO4 18, AO5 12), approximately 700 words, a teacher-devised task. \"The purpose should be to narrate, describe or entertain\"; the topic could be suggested by a piece in the anthology or relate to a set of images, and students may write about real or imagined experiences."
   }
  ]
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf",
  "etag": "W/\"b799f-65aabd9454ef5\"",
  "lastModified": "Fri, 04 Sep 2026 17:46:31 GMT",
  "length": 752031,
  "checkedAt": "2026-09-11T16:59:57.007Z"
 },
 "topics": [
  {
   "id": "anthology-part1",
   "component": "C1",
   "option": null,
   "name": "Pearson Edexcel International GCSE English Anthology Part 1: Non-fiction Texts (Component 1, Section A)",
   "caseStudies": [
    "From The Danger of a Single Story Chimamanda Ngozi Adichie",
    "From A Passage to Africa George Alagiah",
    "From The Explorer’s Daughter Kari Herbert",
    "Explorers, or boys messing about? Either way, taxpayer gets rescue bill Steven Morris",
    "From 127 Hours: Between a Rock and a Hard Place Aron Ralston",
    "Young and Dyslexic? You've got it going on Benjamin Zephaniah",
    "From A Game of Polo with a Headless Goat Emma Levine",
    "From Beyond the Sky and Earth: A Journey into Bhutan Jamie Zeppa",
    "From H is for Hawk Helen Macdonald",
    "From Chinese Cinderella Adeline Yen Mah"
   ],
   "ideas": [
    {
     "code": "From The Danger of a Single Story",
     "q": "What are the writer’s ideas and perspectives in this text, and how does she convey them?",
     "idea": "From The Danger of a Single Story — Chimamanda Ngozi Adichie",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the Pearson Edexcel International GCSE English Anthology, provided in the examination. Study it to read and understand it, selecting and interpreting the writer's information, ideas and perspectives (AO1), to understand and analyse how the writer uses linguistic and structural devices to achieve her effects (AO2), and to explore links and connections between her ideas and perspectives and those of the previously unseen extract, as well as how these are conveyed (AO3)."
    },
    {
     "code": "From A Passage to Africa",
     "q": "How does the writer present what he sees, and what perspective does he take on it?",
     "idea": "From A Passage to Africa — George Alagiah",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the anthology, provided in the examination. Students must be able to select and interpret information, ideas and perspectives from it (AO1) and to analyse how the writer uses linguistic and structural devices — word choice, imagery, the ordering and shaping of the account — to achieve his effects (AO2), and to explore links and connections between this writer's perspective and that of an unseen text and how each is conveyed (AO3)."
    },
    {
     "code": "From The Explorer’s Daughter",
     "q": "How does the writer convey her position on what she is watching?",
     "idea": "From The Explorer’s Daughter — Kari Herbert",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the anthology, provided in the examination. Read it as a substantial piece of writing that makes significant demands in terms of content, structure and the quality of the language: interpret the writer's information, ideas and perspectives (AO1), analyse the linguistic and structural devices through which she achieves her effects (AO2), and use it in comparison with an unseen extract on links and connections between writers' ideas and perspectives (AO3)."
    },
    {
     "code": "Explorers, or boys messing about? Either way, taxpayer gets rescue bill",
     "q": "What viewpoint does the writer take, and how do the reporting and structure convey it?",
     "idea": "Explorers, or boys messing about? Either way, taxpayer gets rescue bill — Steven Morris",
     "content": "A Part 1 non-fiction text from the anthology, provided in the examination, and one of the anthology's examples of the different types of non-fiction text students should study — the specification names journalism (for example articles and reviews) among the forms to be read. Select and interpret its information, ideas and perspectives (AO1), analyse how linguistic and structural devices achieve their effects (AO2), and explore links and connections with an unseen extract and how these are conveyed (AO3)."
    },
    {
     "code": "From 127 Hours: Between a Rock and a Hard Place",
     "q": "How does the writer make the reader share the experience he is recounting?",
     "idea": "From 127 Hours: Between a Rock and a Hard Place — Aron Ralston",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the anthology, provided in the examination. Study it for the interpretation and analysis skills the qualification requires: select and interpret information, ideas and perspectives (AO1); understand and analyse how the writer uses linguistic and structural devices — including the shaping and sequencing of the account — to achieve his effects (AO2); and explore links and connections between his ideas and perspectives and those of an unseen non-fiction text (AO3)."
    },
    {
     "code": "Young and Dyslexic? You've got it going on",
     "q": "What is the writer's argument, and how does his voice and structure carry it?",
     "idea": "Young and Dyslexic? You've got it going on — Benjamin Zephaniah",
     "content": "A Part 1 non-fiction text from the anthology, provided in the examination. Read and understand it, selecting and interpreting the writer's information, ideas and perspectives (AO1); understand and analyse how he uses linguistic and structural devices, including register and direct address, to achieve his effects (AO2); and explore links and connections between his perspective and that of a previously unseen extract, as well as how these are conveyed (AO3)."
    },
    {
     "code": "From A Game of Polo with a Headless Goat",
     "q": "How does the writer present the event and the people she describes?",
     "idea": "From A Game of Polo with a Headless Goat — Emma Levine",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the anthology, provided in the examination. Students develop the skills of interpretation and analysis on it: selecting and interpreting information, ideas and perspectives (AO1), analysing how the writer uses linguistic and structural devices to achieve her effects (AO2), and exploring links and connections between writers' ideas and perspectives and how these are conveyed when it is set against an unseen extract (AO3)."
    },
    {
     "code": "From Beyond the Sky and Earth: A Journey into Bhutan",
     "q": "How does the writer convey her response to an unfamiliar place?",
     "idea": "From Beyond the Sky and Earth: A Journey into Bhutan — Jamie Zeppa",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the anthology, provided in the examination; the specification names travel writing among the literary non-fiction text types students should read. Select and interpret its information, ideas and perspectives (AO1), analyse the linguistic and structural devices through which the writer achieves her effects (AO2), and explore links and connections between her ideas and perspectives and those of an unseen text (AO3)."
    },
    {
     "code": "From H is for Hawk",
     "q": "How does the writer's language create the effect of the encounter she describes?",
     "idea": "From H is for Hawk — Helen Macdonald",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the anthology, provided in the examination. Read it as an extended text that makes significant demands in terms of content, structure and the quality of the language: interpret the writer's information, ideas and perspectives (AO1), analyse how she uses linguistic and structural devices to achieve her effects (AO2), and compare her ideas, perspectives and methods with those of a previously unseen extract (AO3)."
    },
    {
     "code": "From Chinese Cinderella",
     "q": "What perspective does the writer take on her own experience, and how is it conveyed?",
     "idea": "From Chinese Cinderella — Adeline Yen Mah",
     "content": "A Part 1 non-fiction text (an extract, \"From\") from the anthology, provided in the examination; the specification names selections from autobiography among the literary non-fiction text types students should read. Select and interpret its information, ideas and perspectives (AO1), understand and analyse how the writer uses linguistic and structural devices to achieve her effects (AO2), and explore links and connections with an unseen non-fiction extract and how these are conveyed (AO3)."
    },
    {
     "code": "Component 1, Section A — the anthology text in the examination",
     "q": "How is the anthology used in the examination itself?",
     "idea": "The Part 1 text is provided, and is examined alongside an unseen extract",
     "content": "\"Candidates will be provided with the anthology text in the examination.\" Section A sets \"a mixture of short- and long-answer questions related to a non-fiction text from Part 1 of the Pearson Edexcel International GCSE English Anthology and one previously unseen extract\"; students answer all questions in this section, for a total of 45 marks, and are advised to allocate 1 hour and 30 minutes including reading time to it. \"The Pearson Edexcel International GCSE English Anthology is a resource that supports teachers by providing examples of different types of non-fiction text. Students should be encouraged to read beyond the anthology to support their learning.\""
    }
   ]
  },
  {
   "id": "unseen-nonfiction",
   "component": "C1",
   "option": null,
   "name": "Section A: Non-fiction texts — wider reading and the previously unseen extract",
   "caseStudies": [
    "journalism (for example articles and reviews)",
    "speeches",
    "journals",
    "reference book extracts",
    "selections from autobiography",
    "letters",
    "obituaries",
    "travel writing"
   ],
   "ideas": [
    {
     "code": "Content — reading in preparation for the unseen text",
     "q": "What reading prepares a student for a non-fiction text they have never seen?",
     "idea": "Wide reading of high-quality, challenging non-fiction",
     "content": "\"Students should read a variety of high-quality, challenging non-fiction texts, in preparation to respond to one unseen non-fiction text in the examination. They should be able to read substantial pieces of writing, including whole and extended texts that make significant demands in terms of content, structure and the quality of the language. Throughout the qualification, students should develop the skills of interpretation and analysis.\""
    },
    {
     "code": "Content — range of non-fiction forms",
     "q": "Which non-fiction forms should students have read?",
     "idea": "Text types studied: a range of non-fiction forms",
     "content": "\"Text types studied should include a range of non-fiction forms, such as journalism (for example articles and reviews), speeches, journals and reference book extracts.\" Students should recognise the conventions of each form quickly enough to read an unfamiliar example under timed conditions."
    },
    {
     "code": "Content — literary non-fiction texts",
     "q": "What literary non-fiction must be included in the reading?",
     "idea": "Text types studied: literary non-fiction",
     "content": "\"Text types should also include literary non-fiction texts, such as selections from autobiography, letters, obituaries and travel writing. These lists are not exhaustive.\" Literary non-fiction is where the anthology's Part 1 texts sit, and where the analysis of linguistic and structural devices required by AO2 is most often tested."
    },
    {
     "code": "Content — texts excluded from the assessment",
     "q": "What kinds of text will never be set?",
     "idea": "Transient texts are excluded; texts may be sited digitally",
     "content": "\"Texts that are essentially transient, such as instant news feeds and advertisements, will not form part of the assessment.\" However, \"the questions set may refer to a digital location for the texts, such as a website\", so students should expect a text presented as, for example, an online article."
    },
    {
     "code": "Assessment overview — Section A: Non-fiction",
     "q": "How is the unseen extract examined, and how long should it take?",
     "idea": "Section A: 45 marks, all questions answered, 1 hour 30 minutes advised",
     "content": "\"Students are advised to allocate 1 hour and 30 minutes including reading time to Section A. There will be a mixture of short- and long-answer questions related to a non-fiction text from Part 1 of the Pearson Edexcel International GCSE English Anthology and one previously unseen extract. Students will answer all questions in this section. Total of 45 marks for this section.\" The raw-mark breakdown sets Question 1 at 11 marks (AO1), Question 2 at 12 marks (AO2) and Question 3 at 22 marks (AO3)."
    },
    {
     "code": "AO3 (Component 1 only)",
     "q": "What does the paper ask students to do across two texts?",
     "idea": "Links and connections between the anthology text and the unseen extract",
     "content": "\"AO3 explore links and connections between writers’ ideas and perspectives, as well as how these are conveyed.\" AO3 carries 15% of the International GCSE and all 22 of its raw marks sit in Component 1, Question 3; it is the only assessment objective not assessed in Component 2 or Component 3. One of the qualification's stated aims is that students \"make comparisons between texts and analyse the ways in which writers achieve their effects\"."
    }
   ]
  },
  {
   "id": "transactional-writing",
   "component": "C1",
   "option": null,
   "name": "Section B: Transactional Writing",
   "caseStudies": [
    "article for a magazine or newspaper",
    "speech",
    "letter",
    "guide",
    "review",
    "text of a leaflet"
   ],
   "ideas": [
    {
     "code": "Section B: Transactional Writing",
     "q": "What is Section B for?",
     "idea": "Explore and develop transactional writing skills",
     "content": "\"Section B: Transactional Writing – explore and develop transactional writing skills.\" \"Students should use what they have learned about different text types to develop their transactional writing. They should be introduced to, and be given the opportunity to practise, a range of non-fiction writing techniques, planning and proofreading skills.\""
    },
    {
     "code": "Content — the transactional text types",
     "q": "Which forms can the paper ask a student to write in?",
     "idea": "The six transactional text types students will be asked to write",
     "content": "Added in Issue 7: \"The transactional text types that students will be asked to write are: article for a magazine or newspaper; speech; letter; guide; review; text of a leaflet.\" Students should be able to write in any of the six to a given audience and purpose, because the task \"involves a given audience, form or purpose\"."
    },
    {
     "code": "article for a magazine or newspaper",
     "q": "How does a student adapt form, tone and register for an article?",
     "idea": "Transactional text type: article for a magazine or newspaper",
     "content": "One of the six transactional text types the specification says students will be asked to write. AO4 requires the student to communicate effectively and imaginatively, \"adapting form, tone and register of writing for specific purposes and audiences\": the article must be shaped for the named publication and readership — headline and opening that establish the angle, a developed line of argument or reportage in paragraphs, and a register held consistently for that reader."
    },
    {
     "code": "speech",
     "q": "How does a student adapt form, tone and register for a speech?",
     "idea": "Transactional text type: speech",
     "content": "One of the six transactional text types the specification says students will be asked to write, and one of the non-fiction forms it also names for reading (\"speeches\"). Written to be heard by the given audience: direct address, an opening that establishes the speaker's purpose, rhetorical patterning and structural repetition used for effect, and a close that returns to the argument — with AO5 accuracy and sentence structures managed for deliberate effect."
    },
    {
     "code": "letter",
     "q": "How does a student adapt form, tone and register for a letter?",
     "idea": "Transactional text type: letter",
     "content": "One of the six transactional text types the specification says students will be asked to write, and one of the literary non-fiction forms it also names for reading (\"letters\"). The register must match the named recipient and purpose — formal or personal — with the conventions of address, a clear sequence of paragraphs developing the writer's case, and a close appropriate to the reader's expectations/requirements."
    },
    {
     "code": "guide",
     "q": "How does a student adapt form, tone and register for a guide?",
     "idea": "Transactional text type: guide",
     "content": "One of the six transactional text types the specification says students will be asked to write. A guide is written to inform and advise a named audience: information selected and ordered for that reader, structural features such as sections or headings used to make the meaning clear, a helpful and direct tone, and the accurate, varied punctuation and paragraphing AO5 rewards."
    },
    {
     "code": "review",
     "q": "How does a student adapt form, tone and register for a review?",
     "idea": "Transactional text type: review",
     "content": "One of the six transactional text types the specification says students will be asked to write, and one of the journalism forms it also names for reading (\"journalism (for example articles and reviews)\"). A review describes and judges: an evaluative line sustained for the publication's readership, evidence and detail supporting the judgement, and a personal but controlled register held throughout."
    },
    {
     "code": "text of a leaflet",
     "q": "How does a student adapt form, tone and register for the text of a leaflet?",
     "idea": "Transactional text type: text of a leaflet",
     "content": "One of the six transactional text types the specification says students will be asked to write. The requirement is the text of a leaflet — the wording, not a designed artefact: content organised into clearly signalled sections for the named audience, a persuasive or informative purpose sustained, and structural and grammatical features used cohesively and deliberately across the text."
    },
    {
     "code": "AO4 (Section B)",
     "q": "What is rewarded for communication in the writing task?",
     "idea": "AO4: communicate effectively and imaginatively for purpose and audience",
     "content": "\"AO4 communicate effectively and imaginatively, adapting form, tone and register of writing for specific purposes and audiences.\" AO4 carries 27 of the 45 raw marks for Component 1 Questions 4 and 5 and 30% of the qualification overall. The levels move from communication that is \"at a basic level, and limited in clarity\" with \"little awareness of form, tone and register\", through communicating clearly with \"a clear sense of purpose\", to communication that is \"perceptive and subtle\" with \"sophisticated use of form, tone and register\"."
    },
    {
     "code": "AO5 (Section B)",
     "q": "What is rewarded for accuracy and control of written language?",
     "idea": "AO5: write clearly, with accurate spelling, grammar and punctuation",
     "content": "\"AO5 write clearly, using a range of vocabulary and sentence structures, with appropriate paragraphing and accurate spelling, grammar and punctuation.\" AO5 carries 18 of the 45 raw marks for Questions 4 and 5 and 20% of the qualification. The levels reward developing and connecting information and ideas, varied vocabulary and correct spelling of irregular patterns, accurate and varied punctuation, and at the top \"a range of sentence structures accurately and selectively to achieve particular effects\"."
    },
    {
     "code": "Assessment overview — Section B",
     "q": "What does the task look like and how long is advised for it?",
     "idea": "One 45-mark task from a choice of two, 45 minutes advised",
     "content": "\"Students are advised to allocate 45 minutes to Section B. There will be one writing task, based on a choice of two prompts involving a given audience, form or purpose. Students will answer one question in this section. Total of 45 marks for this section.\" In the breakdown of assessment objectives and raw marks this pair is listed as \"Questions 4 and 5\", carrying AO4 27 and AO5 18. \"The questions set may refer to a digital location for the texts, such as a website.\""
    }
   ]
  },
  {
   "id": "anthology-part2",
   "component": "C2",
   "option": null,
   "name": "Pearson Edexcel International GCSE English Anthology Part 2: Poetry and Prose Texts (Component 2 and Component 3, Section A)",
   "caseStudies": [
    "Disabled Wilfred Owen",
    "“Out, Out–“ Robert Frost",
    "An Unknown Girl Moniza Alvi",
    "The Bright Lights of Sarajevo Tony Harrison",
    "Still I Rise Maya Angelou",
    "The Story of an Hour Kate Chopin",
    "The Necklace Guy de Maupassant",
    "Significant Cigarettes (from The Road Home) Rose Tremain",
    "Whistle and I’ll Come to You (from The Woman in Black) Susan Hill",
    "Night Alice Munro"
   ],
   "ideas": [
    {
     "code": "Disabled",
     "q": "How does the writer use language and structure to present his subject?",
     "idea": "Disabled — Wilfred Owen",
     "content": "One of the poetry texts listed in Part 2 of the anthology, made available in the examination. Students must read and understand it, selecting and interpreting information, ideas and perspectives (AO1), and understand and analyse how the writer uses linguistic and structural devices to achieve his effects (AO2). The specification's own example of a textual reference is taken from it: \"We learn that the recruiting officers in the poem knew the person was under age when he joined up: 'Smiling they wrote his lie; aged nineteen years.'\""
    },
    {
     "code": "“Out, Out–“",
     "q": "How does the writer's word choice create the effect of the event?",
     "idea": "“Out, Out–“ — Robert Frost",
     "content": "One of the poetry texts listed in Part 2 of the anthology, made available in the examination. Studied for AO1 interpretation of its ideas and perspectives and for AO2 analysis of linguistic and structural devices. The specification's own example of citing a feature of language is taken from it: \"The author uses violent verbs, 'snarled', 'rattled', to convey shock.\""
    },
    {
     "code": "An Unknown Girl",
     "q": "How do language and structure convey the speaker's sense of identity and place?",
     "idea": "An Unknown Girl — Moniza Alvi",
     "content": "One of the poetry texts listed in Part 2 of the anthology, made available in the examination. Students develop the skills of inference and analysis on it: selecting and interpreting information, ideas and perspectives (AO1) and analysing how the writer uses linguistic and structural devices — including the shaping of the lines and the patterning of repeated images — to achieve her effects (AO2)."
    },
    {
     "code": "The Bright Lights of Sarajevo",
     "q": "How does the writer set ordinary life against its setting, and to what effect?",
     "idea": "The Bright Lights of Sarajevo — Tony Harrison",
     "content": "One of the poetry texts listed in Part 2 of the anthology, made available in the examination. Read as a substantial text making significant demands in terms of content, structure and the quality of language: interpret the writer's ideas and perspectives (AO1) and analyse the linguistic and structural devices — contrast, imagery, the movement of the verse — through which the effects are achieved (AO2)."
    },
    {
     "code": "Still I Rise",
     "q": "How does the structure of the poem carry its defiance?",
     "idea": "Still I Rise — Maya Angelou",
     "content": "One of the poetry texts listed in Part 2 of the anthology, made available in the examination. Studied for AO1 and AO2; the specification's own example of citing a structural feature is taken from it: \"The author structures the poem using a clear pattern of repetition: 'You may shoot me... You may cut me… You may kill me...' on lines 21 to 23.\""
    },
    {
     "code": "The Story of an Hour",
     "q": "How do the writer's choices shape the reader's understanding of the central character?",
     "idea": "The Story of an Hour — Kate Chopin",
     "content": "One of the prose texts listed in Part 2 of the anthology, made available in the examination. Students should read and understand it, selecting and interpreting information, ideas and perspectives (AO1), and understand and analyse how the writer uses linguistic and structural devices — the ordering of events, the shifting point of view, the closing reversal — to achieve her effects (AO2)."
    },
    {
     "code": "The Necklace",
     "q": "What does the writer reveal about the character, and how?",
     "idea": "The Necklace — Guy de Maupassant",
     "content": "One of the prose texts listed in Part 2 of the anthology, made available in the examination. Studied for AO1 and AO2; the specification's own example of interpretation through a textual reference is taken from it: \"We perhaps learn the extent of Madame Loisel's materialistic nature when she disregards the many elegant jewels belonging to her friend and selects instead the diamond necklace.\""
    },
    {
     "code": "Significant Cigarettes (from The Road Home)",
     "q": "How does the writer present the character's journey and state of mind?",
     "idea": "Significant Cigarettes (from The Road Home) — Rose Tremain",
     "content": "One of the prose texts listed in Part 2 of the anthology, made available in the examination — an extract from The Road Home. Interpret its information, ideas and perspectives (AO1) and analyse how the writer uses linguistic and structural devices to achieve her effects (AO2). The specification offers it as a possible starting point for imaginative writing: \"After reading 'Significant Cigarettes' write what you imagine might be the next episode in Lev's story.\""
    },
    {
     "code": "Whistle and I’ll Come to You (from The Woman in Black)",
     "q": "How does the writer build atmosphere and tension?",
     "idea": "Whistle and I’ll Come to You (from The Woman in Black) — Susan Hill",
     "content": "One of the prose texts listed in Part 2 of the anthology, made available in the examination — an extract from The Woman in Black. Students develop inference and analysis on it: selecting and interpreting information, ideas and perspectives (AO1) and analysing the linguistic and structural devices — setting, sound, the pacing of the narrative — by which the writer achieves her effects (AO2)."
    },
    {
     "code": "Night",
     "q": "How does the writer's narration shape the reader's understanding?",
     "idea": "Night — Alice Munro",
     "content": "One of the prose texts listed in Part 2 of the anthology, made available in the examination. Read as an extended text making significant demands in terms of content, structure and the quality of language: interpret its ideas and perspectives (AO1) and analyse how the writer uses linguistic and structural devices, including the retrospective narrative voice and the withholding and release of information, to achieve her effects (AO2)."
    },
    {
     "code": "Assessment overview — Section A (Component 2)",
     "q": "How is Part 2 examined?",
     "idea": "One 30-mark essay question on one poetry or prose text, 45 minutes advised",
     "content": "\"There will be one essay question on a poetry or prose text from Part 2 of the Pearson Edexcel International GCSE English Anthology, which will be made available in the examination. Students will answer the question in this section. Total of 30 marks for this section\", with 45 minutes advised. The raw marks are AO1 12 and AO2 18, so two thirds of the essay's marks are for analysis of how the writer uses linguistic and structural devices."
    },
    {
     "code": "Assignment A: Poetry and Prose Texts (Component 3)",
     "q": "What does the non-examined alternative require instead?",
     "idea": "Three anthology texts, at least one poetry and one prose, in about 1200 words",
     "content": "In the non-examined alternative to Component 2, students \"select three texts from Part 2 of the Pearson Edexcel International GCSE English Anthology - there must be at least one poetry text and one prose text chosen\", \"choose a focus for the assignment, for example: setting, character(s), event(s), theme(s)\", and \"make notes and plan the response to the task\". The suggested task is \"Discuss how the writers use language and structure to present [insert chosen focus] in [text 1], [text 2] and [text 3]\", discussing the writers' ideas and perspectives, how they use language and structure to achieve their effects, and including textual references. 30 marks: 12 for AO1 and 18 for AO2, in a response of approximately 1200 words."
    }
   ]
  },
  {
   "id": "imaginative-writing",
   "component": "C2",
   "option": null,
   "name": "Section B: Imaginative Writing",
   "caseStudies": [
    "‘The moment had passed’ write an imaginative piece ending with these words",
    "The last time I saw...",
    "\"I've left Auror and that leaving of my home was hard and bitter, but my time is coming.\" After reading 'Significant Cigarettes' write what you imagine might be the next episode in Lev's story.",
    "‘During the night the wind rose’. Write your own imaginative and descriptive piece that begins with those words.",
    "The visitor",
    "A frightening experience",
    "My most embarrassing moment."
   ],
   "ideas": [
    {
     "code": "Section B: Imaginative Writing",
     "q": "What is Section B for?",
     "idea": "Explore and develop imaginative writing skills",
     "content": "\"Section B: Imaginative Writing – explore and develop imaginative writing skills.\" \"Students should use what they have learned about the writer’s craft in their reading of fiction to inspire and influence their own imaginative writing. They should develop a range of creative writing techniques, planning and proofreading skills.\""
    },
    {
     "code": "Content — reading fiction to inform writing",
     "q": "What reading feeds the imaginative writing task?",
     "idea": "Wider reading of prose fiction from a range of genres and cultures",
     "content": "\"The Pearson Edexcel International GCSE English Anthology is a resource that supports teachers by providing examples of prose fiction. Students should read a variety of additional prose fiction from a range of genres and cultures.\" Students \"should be able to read substantial pieces of writing (extended texts) that make significant demands on them in terms of content, structure and the quality of language\" and \"develop the skills of inference and analysis\"."
    },
    {
     "code": "Assessment overview — Section B (Component 2)",
     "q": "What does the examined imaginative writing task look like?",
     "idea": "One 30-mark task from a choice of three prompts, 45 minutes advised",
     "content": "\"Students are advised to allocate 45 minutes to Section B. There will be one 30-mark imaginative writing task, based on one of three given prompts. Students will answer one question in this section. Total of 30 marks for this section.\" The raw marks are AO4 18 and AO5 12."
    },
    {
     "code": "AO4 (Imaginative Writing)",
     "q": "What is rewarded for the imaginative communication itself?",
     "idea": "AO4: communicate effectively and imaginatively for purpose and reader",
     "content": "\"AO4 communicate effectively and imaginatively, adapting form, tone and register of writing for specific purposes and audiences.\" Out of 18 marks in five levels: Level 1 communication \"at a basic level, and limited in clarity\" with \"little awareness of form, tone and register\"; Level 3 \"communicates clearly\" with \"appropriate use of form, tone and register\"; Level 5 communication that \"is perceptive and subtle\", \"sharply focused on purpose and the expectations/requirements of the intended reader\", with \"sophisticated use of form, tone and register\"."
    },
    {
     "code": "AO5 (Imaginative Writing)",
     "q": "What is rewarded for the accuracy and craft of the written language?",
     "idea": "AO5: vocabulary, sentence structures, paragraphing, spelling, grammar and punctuation",
     "content": "\"AO5 write clearly, using a range of vocabulary and sentence structures, with appropriate paragraphing and accurate spelling, grammar and punctuation.\" Out of 12 marks in five levels, rising from \"basic vocabulary, often misspelt\" and punctuation \"with basic control\" to Level 5, which \"manipulates complex ideas, utilising a range of structural and grammatical features to support coherence and cohesion\", \"uses extensive vocabulary strategically\" and \"punctuates writing with accuracy to aid emphasis and precision\"."
    },
    {
     "code": "Assignment B: Imaginative Writing (Component 3)",
     "q": "What does the non-examined alternative require instead?",
     "idea": "A teacher-devised imaginative task of about 700 words, to narrate, describe or entertain",
     "content": "In the non-examined alternative to Component 2: \"A piece of imaginative writing based on a selected topic. Students must respond to a teacher-devised non-examined assignment which will allow them to address\" AO4 and AO5. \"The purpose should be to narrate, describe or entertain. Total of 30 marks for this assignment.\" \"The topic could be suggested by a piece in the anthology\" or be \"an unrelated topic relating to a set of images\". \"Students may write about real or imagined experiences.\" The response is approximately 700 words; the word count \"is advisory only and there is no penalty for exceeding this recommendation\"."
    }
   ]
  },
  {
   "id": "reading-writing-skills",
   "component": "C1",
   "option": null,
   "name": "Assessment objectives: the reading and writing skills assessed",
   "caseStudies": [],
   "ideas": [
    {
     "code": "AO1",
     "q": "What does reading and understanding a text mean for the marks?",
     "idea": "AO1 — Read and understand a variety of texts, selecting and interpreting",
     "content": "\"AO1 Read and understand a variety of texts, selecting and interpreting information, ideas and perspectives.\" 15% of the International GCSE (Component 1: 7%, Component 2/Component 3: 8%), 23 raw marks in all — 11 at Component 1 Question 1 and 12 at Component 2/3 Question 1. The levels reward the selection of information, ideas and perspectives, the use of quotations and textual references, and interpretation that goes beyond \"retelling or paraphrasing\"."
    },
    {
     "code": "AO2",
     "q": "What does analysing a writer's methods mean for the marks?",
     "idea": "AO2 — Understand and analyse linguistic and structural devices and their effects",
     "content": "\"AO2 Understand and analyse how writers use linguistic and structural devices to achieve their effects.\" 20% of the International GCSE (Component 1: 8%, Component 2/Component 3: 12%), 30 raw marks — 12 at Component 1 Question 2 and 18 at Component 2/3 Question 1, the largest single AO tariff on the reading side. The five levels run from \"limited identification of language and/or structural devices\" and \"basic and simple comment on the effect\" to \"subtle and discriminating selection\" and \"a perceptive analysis of the effects of language and structure\"."
    },
    {
     "code": "AO3",
     "q": "What does comparing two texts demand?",
     "idea": "AO3 — Explore links and connections between writers’ ideas and perspectives",
     "content": "\"AO3 Explore links and connections between writers’ ideas and perspectives, as well as how these are conveyed.\" 15% of the International GCSE, all of it in Component 1 (22 raw marks at Question 3) and none in Component 2 or Component 3. One of the qualification's aims is that students \"make comparisons between texts and analyse the ways in which writers achieve their effects\"; the link must be made both on what the writers think and on how they convey it."
    },
    {
     "code": "AO4",
     "q": "What does writing for a purpose and audience demand?",
     "idea": "AO4 — Communicate effectively and imaginatively, adapting form, tone and register",
     "content": "\"AO4 Communicate effectively and imaginatively, adapting form, tone and register of writing for specific purposes and audiences.\" 30% of the International GCSE, the largest single objective (Component 1: 18%, Component 2/Component 3: 12%), 45 raw marks — 27 in the transactional task and 18 in the imaginative task. One of the qualification's aims is to \"construct and convey meaning in written language, matching style to audience and purpose\"."
    },
    {
     "code": "AO5",
     "q": "What does technical accuracy count for?",
     "idea": "AO5 — Write clearly, with accurate spelling, punctuation and grammar",
     "content": "\"AO5 Write clearly, using a range of vocabulary and sentence structures, with appropriate paragraphing and accurate spelling, grammar and punctuation.\" 20% of the International GCSE (Component 1: 12%, Component 2/Component 3: 8%), 30 raw marks — 18 in the transactional task and 12 in the imaginative task. Both components' content overviews require students to \"use spelling, punctuation and grammar accurately\", and the qualification aims require students to \"write effectively and coherently using Standard English appropriately\" and to \"use grammar correctly, punctuate and spell accurately\"."
    },
    {
     "code": "AO6",
     "q": "What is assessed if a student takes the optional endorsement?",
     "idea": "AO6 — Speaking and listening skills (optional Spoken Language Endorsement)",
     "content": "\"AO6 Speaking and listening skills: demonstrate presentation skills in a formal setting; listen and respond appropriately to spoken language, including to questions and feedback to presentations; use spoken Standard English effectively in speeches and presentations.\" Its weighting in the International GCSE is \"Not applicable\": the optional spoken language endorsement (4EA1/E) carries no marks and is graded Not Classified, Pass, Merit or Distinction, reported as a separate grade on the certificate. The presentation is prepared, lasts no longer than 10 minutes and is given to an audience that must always include the teacher."
    },
    {
     "code": "Qualification aims and objectives",
     "q": "What is the course as a whole meant to produce?",
     "idea": "The aims: wide reading, critical reading, effective writing and accurate Standard English",
     "content": "\"The aims and objectives of this qualification are to enable students to: read a wide range of texts fluently and with good understanding; read critically and use knowledge gained from wide reading to inform and improve their own writing; write effectively and coherently using Standard English appropriately; use grammar correctly, punctuate and spell accurately; acquire and apply a wide vocabulary alongside knowledge and understanding of grammatical terminology, and linguistic conventions for reading, writing and spoken language; listen to and understand spoken language, and use spoken Standard English effectively.\""
    },
    {
     "code": "Broad and deep development of students’ skills",
     "q": "Which three abilities does the specification say the design develops?",
     "idea": "Responding to varied sources, comparing texts, and matching style to audience and purpose",
     "content": "\"For example, students develop the ability to: read and respond to material from a variety of sources; make comparisons between texts and analyse the ways in which writers achieve their effects; construct and convey meaning in written language, matching style to audience and purpose.\" Throughout the qualification students \"should develop the skills of interpretation and analysis\" (non-fiction) and \"the skills of inference and analysis\" (poetry and prose)."
    }
   ]
  }
 ]
};
module.exports = { SPEC_4EA1 };
