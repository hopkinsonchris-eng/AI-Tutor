/* Pearson Edexcel GCSE English Literature (International GCSE) (4ET1) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_4ET1 = {
 "id": "EDX-4ET1",
 "board": "Pearson Edexcel",
 "subject": "English Literature (International GCSE)",
 "code": "4ET1",
 "level": "GCSE",
 "version": "Specification – Issue 3 – August 2025",
 "firstExam": 2018,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Poetry and Modern Prose",
   "paperCode": "4ET1/01",
   "marks": 90,
   "weight": 60,
   "minutes": 120,
   "sections": [
    "Section A – Unseen Poetry: one 20-mark essay question exploring the meaning and effects created in an unseen poem. The poem will be reproduced in the question paper. This section assesses AO2.",
    "Section B – Anthology Poetry: one 30-mark essay question from a choice of two, comparing two poems from Part 3 of the Pearson Edexcel International GCSE English Anthology. This section assesses AO2 and AO3.",
    "Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4."
   ],
   "openBook": false,
   "note": "Externally assessed. Written examination: 2 hours. Availability: June and November. 90 marks, 60% of the total International GCSE. \"Closed book examination: texts are not allowed in the examination. However, learners will be provided with the anthology poems in the examination.\" Available as a paper-based or onscreen assessment. Mandatory: \"Learners must complete Component 1, plus either Component 2 or Component 3.\""
  },
  {
   "id": "C2",
   "name": "Modern Drama and Literary Heritage Texts",
   "paperCode": "4ET1/02",
   "marks": 60,
   "weight": 40,
   "minutes": 90,
   "sections": [
    "Section A – Modern Drama: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO2.",
    "Section B – Literary Heritage Texts: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1, AO2 and AO4."
   ],
   "openBook": true,
   "note": "Externally assessed. Written examination: 1 hour 30 minutes. Availability: June and November. 60 marks, 40% of the total International GCSE. \"Open book examination: prescribed editions of set texts are allowed in the examination and must be completely unmarked, learners or centres must purchase a prescribed edition of each of their set texts at the start of the course.\" Available as a paper-based or onscreen assessment.",
   "alternative": {
    "code": "4ET1/03",
    "name": "Component 3: Modern Drama and Literary Heritage Texts (non-examined)",
    "marks": 60,
    "weight": 40,
    "text": "Component 3 is available as an alternative to Component 2 and is modelled here inside Component 2 rather than as a fourth component, so that the weights sum to 100 on the examined route. \"Learners must complete either Component 2 or Component 3.\" Component 3 is internally assessed and externally moderated, carries 60 marks and 40% of the total International GCSE, and is assessed \"through two assignments, internally set and assessed, and externally moderated by Pearson\": Assignment A – Modern Drama, one 30-mark essay response to a teacher-devised assignment on the studied text (AO1 and AO2), and Assignment B – Literary Heritage Texts, one 30-mark essay response to a teacher-devised assignment on the studied text (AO1, AO2 and AO4). Its set-text lists are identical to Component 2's, so the modern drama and literary heritage topics of this course serve either route."
   }
  }
 ],
 "options": [
  {
   "id": "modernProse",
   "choose": 1,
   "label": "Component 1, Section C – Modern Prose: \"A choice of one text from Modern Prose\" — one modern prose text from the list of set texts in this specification.",
   "from": [
    "prose-mockingbird",
    "prose-of-mice-and-men",
    "prose-whale-rider",
    "prose-joy-luck-club",
    "prose-things-fall-apart",
    "prose-klara-and-the-sun",
    "prose-western-lane"
   ]
  },
  {
   "id": "modernDrama",
   "choose": 1,
   "label": "Component 2, Section A – Modern Drama (and Component 3, Assignment A): \"A choice of one text from Modern Drama\" — one modern drama text from the list of set texts in this specification.",
   "from": [
    "drama-view-from-the-bridge",
    "drama-an-inspector-calls",
    "drama-curious-incident",
    "drama-kindertransport",
    "drama-kings-horseman"
   ]
  },
  {
   "id": "literaryHeritage",
   "choose": 1,
   "label": "Component 2, Section B – Literary Heritage Texts (and Component 3, Assignment B): \"A choice of one text from Literary Heritage\" — one literary heritage text from the list of set texts in this specification.",
   "from": [
    "heritage-romeo-and-juliet",
    "heritage-macbeth",
    "heritage-merchant-of-venice",
    "heritage-pride-and-prejudice",
    "heritage-great-expectations",
    "heritage-scarlet-letter"
   ]
  }
 ],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge and understanding of texts",
   "text": "Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement.",
   "weight": 30,
   "rawMarks": 45,
   "byComponent": {
    "C1": 13,
    "C2": 17
   }
  },
  {
   "id": "AO2",
   "label": "Analysis of language, form and structure",
   "text": "Analyse the language, form and structure used by a writer to create meanings and effects.",
   "weight": 40,
   "rawMarks": 60,
   "byComponent": {
    "C1": 23,
    "C2": 17
   }
  },
  {
   "id": "AO3",
   "label": "Links and connections between texts",
   "text": "Explore links and connections between texts.",
   "weight": 10,
   "rawMarks": 15,
   "byComponent": {
    "C1": 10,
    "C2": 0
   }
  },
  {
   "id": "AO4",
   "label": "Texts and their contexts",
   "text": "Show understanding of the relationships between texts and the contexts in which they were written.",
   "weight": 20,
   "rawMarks": 30,
   "byComponent": {
    "C1": 13,
    "C2": 7
   }
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Marking is by levels of response on essay-based questions. Component 1: Poetry and Modern Prose (4ET1/01) is a \"Two-hour examination comprising three sections. Essay-based questions\", worth 90 raw marks and 60% of the International GCSE — Section A Unseen Poetry one 20-mark essay question (AO2), Section B Anthology Poetry one 30-mark essay question from a choice of two (AO2 and AO3), Section C Modern Prose one 40-mark essay question from a choice of two on each of the set texts (AO1 and AO4); learners may not bring texts to the examination, but are provided with the relevant poems. Component 2: Modern Drama and Literary Heritage Texts (4ET1/02) is a \"One-hour and 30-minute examination comprising two sections. Essay-based questions\", worth 60 raw marks and 40% — Section A Modern Drama one 30-mark essay question from a choice of two (AO1 and AO2) and Section B Literary Heritage Texts one 30-mark essay question from a choice of two (AO1, AO2 and AO4); it is open book and learners may bring a clean, completely unmarked copy of the prescribed edition. The Breakdown of assessment objectives and raw marks gives Component 1 Question 1 = 20 AO2; Questions 2 and 3 = 15 AO2 + 15 AO3; Questions 4 to 17 = 20 AO1 + 20 AO4; and, for Component 2/Component 3, Questions 1 to 10 = 15 AO1 + 15 AO2 and Questions 11 to 22 = 10 AO1 + 10 AO2 + 10 AO4 — 150 raw marks in all, of which AO1 45, AO2 60, AO3 15 and AO4 30, i.e. 30%, 40%, 10% and 20% of the qualification. Component 3 (4ET1/03) is the coursework alternative to Component 2: \"Two assignments, internally set and assessed, and externally moderated by Pearson\", 60 marks and 40%, made of Assignment A – Modern Drama \"marked out of 30 with 15 marks for AO1 and 15 marks for AO2\" and Assignment B – Literary Heritage Texts \"marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"There will be two marks out of 30 which will be combined to make one mark out of 60.\" The only assessment grids the specification prints are those for the non-examined component, and they are five levels over the 30 marks — Level 1 1–6 (limited knowledge and understanding; simple response with little evidence of personal engagement or critical style; minimal identification of language, form and structure; limited use of relevant examples), Level 2 7–12 (some knowledge and understanding; largely narrative; some comment on language, form and structure), Level 3 13–18 (sound knowledge and understanding; relevant personal engagement and an appropriate critical style; sound understanding of language, form and structure; clearly relevant examples), Level 4 19–24 (thorough knowledge and understanding; thorough personal engagement and a sustained critical style; sustained analysis of language, form and structure; fully relevant examples) and Level 5 25–30 (assured knowledge and understanding; assured personal engagement and a perceptive critical style; cohesive evaluation of language, form and structure; discriminating use of relevant examples) — with the Assignment B grid adding a context strand that runs from \"little comment on the relationship between text and context\" to understanding \"integrated convincingly into the response\". Marks are awarded \"within any range on a 'best fit' basis, balancing strengths and weaknesses in each essay\": \"Answers may display characteristics of more than one level, and where this happens, markers must use professional judgement to decide which level is most appropriate.\" There is no prescribed word length for the non-examined component; \"The advisory word count for assignment A and assignment B is between 650 and 800 words and there is no penalty for exceeding this recommendation.\" The qualification \"will be graded and certificated on a nine-grade scale from 9 to 1. Individual components are not graded.\"",
  "commandWords": [
   {
    "word": "Explore",
    "means": "Open up the meanings and effects of the text with close reference to it, rather than narrating it. The document uses it for Section A (\"one 20-mark essay question exploring the meaning and effects created in an unseen poem\"), for AO3 (\"Explore links and connections between texts\") and in its model coursework wording: \"Explore the ways in which Priestley presents women in An Inspector Calls. You must consider language, form and structure.\"",
    "aoAssessed": "AO2, AO3"
   },
   {
    "word": "Analyse",
    "means": "AO2 in the document's words: \"Analyse the language, form and structure used by a writer to create meanings and effects.\" The assessment grids move from \"Minimal identification of language, form and structure\" (Level 1) through \"Sustained analysis\" (Level 4) to \"Cohesive evaluation\" (Level 5), so naming a device scores little and tracing how it creates meaning scores highly.",
    "aoAssessed": "AO2"
   },
   {
    "word": "Compare",
    "means": "AO3: \"Explore links and connections between texts.\" Only Section B asks for it — \"one 30-mark essay question from a choice of two, comparing two poems from Part 3\" — and learners must \"make comparisons between poems, including use of language, structure and form\", carrying 15 of that question's 30 raw marks.",
    "aoAssessed": "AO3"
   },
   {
    "word": "In what ways does…",
    "means": "A question stem the document prints for the set-text essay: \"In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure.\" It asks for the writer's methods — the ways the presentation is achieved — not a summary of what happens.",
    "aoAssessed": "AO1, AO2"
   },
   {
    "word": "How does…",
    "means": "The other stem the document prints: \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" Answer with the writer's techniques and their effects, supported by \"fully relevant examples in support\".",
    "aoAssessed": "AO1, AO2, AO4"
   },
   {
    "word": "To what extent do you agree?",
    "means": "A proposition is offered and the candidate must weigh it: \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" The grids reward \"an informed personal engagement\" and, at Level 5, \"a perceptive critical style\", so a qualified judgement is required rather than agreement or narrative.",
    "aoAssessed": "AO1, AO2, AO4"
   },
   {
    "word": "You must consider language, form and structure",
    "means": "The instruction that carries the AO2 marks in every set-text question the document models. Ignoring it forfeits 15 of 30 marks in Section A of Component 2 and 10 of 30 in Section B; the AO2 strand of the grid rises from \"Some comment on the language, form and structure\" to \"Cohesive evaluation\".",
    "aoAssessed": "AO2"
   },
   {
    "word": "and refer to the context of the novel",
    "means": "The instruction that carries the AO4 marks in literary heritage questions: \"Show understanding of the relationships between texts and the contexts in which they were written.\" Level 5 requires that \"Understanding of the relationship between text and context is integrated convincingly into the response\", so bolted-on biography or history scores at Level 1–2.",
    "aoAssessed": "AO4"
   },
   {
    "word": "Demonstrate",
    "means": "AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement.\" Each section's \"Learners must\" list spells it out — \"demonstrate a close understanding of their prose text\", \"maintain a critical style\", \"present an informed personal engagement\", \"identify and use relevant examples\".",
    "aoAssessed": "AO1"
   },
   {
    "word": "Show understanding",
    "means": "AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\", which the content sections define as the writer's own life and situation, the historical setting, social and cultural contexts, the literary context, and the way texts are received by different audiences at different times.",
    "aoAssessed": "AO4"
   }
  ],
  "essayShapes": [
   {
    "marks": 20,
    "minutes": 27,
    "paper": "Component 1, Section A – Unseen Poetry (Question 1)",
    "structure": "\"One 20-mark essay question exploring the meaning and effects created in an unseen poem. The poem will be reproduced in the question paper.\" All 20 raw marks are AO2, so no context and no comparison are wanted: open with what the poem is doing and the reading you will argue, then work through the poem showing \"how writers create literary effects using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", \"understand and use appropriate literary terminology\" and \"identify and use relevant examples from poems\", closing on the overall effect created. (Time: about 27 minutes, pro rata from the 90-mark, two-hour paper; the document sets no per-question time.)"
   },
   {
    "marks": 30,
    "minutes": 40,
    "paper": "Component 1, Section B – Anthology Poetry (Questions 2 and 3)",
    "structure": "\"One 30-mark essay question from a choice of two, comparing two poems from Part 3 of the Pearson Edexcel International GCSE English Anthology\" — 15 raw marks AO2 and 15 AO3. The answer must be built on comparison throughout, not two separate poem essays: state the link the question asks about, then take points of comparison in turn, each analysing \"the language, form and structure used by a writer to create meanings and effects\" in both poems and drawing the connection or difference out explicitly, since learners must \"make comparisons between poems, including use of language, structure and form\". The anthology poems are provided in the examination. (Time: about 40 minutes, pro rata from the 90-mark, two-hour paper; the document sets no per-question time.)"
   },
   {
    "marks": 40,
    "minutes": 53,
    "paper": "Component 1, Section C – Modern Prose (Questions 4 to 17)",
    "structure": "\"One 40-mark essay question from a choice of two on each of the set texts\" — 20 raw marks AO1 and 20 AO4, with no AO2 credit in this section. Open with an informed personal position on the question; develop paragraphs that show \"a close understanding of their prose text\", each supported by \"relevant examples from their prose text\" quoted or referred to from memory (closed book); weave in \"the influence of contextual factors on the interpretation of texts\" — the writer's situation, historical setting, social and cultural contexts, literary context and reception — as part of the argument rather than as a separate block; conclude with a judgement that answers the question, \"maintaining a critical style\". (Time: about 53 minutes, pro rata from the 90-mark, two-hour paper; the document sets no per-question time.)"
   },
   {
    "marks": 30,
    "minutes": 45,
    "paper": "Component 2, Section A – Modern Drama (Questions 1 to 10)",
    "structure": "\"One 30-mark essay question from a choice of two on each of the set texts\" — 15 raw marks AO1 and 15 AO2. Answer the question with a critical position, then develop paragraphs that pair close knowledge of the play with analysis of \"the ways in which writers use language, form and structure to create effects\", using \"appropriate literary terminology\" and \"relevant examples from the play\" — the examination is open book, so quotation should be exact and chosen, not copied at length. Level 4 rewards \"thorough personal engagement and a sustained critical style\" with \"sustained analysis of language, form and structure\"; Level 5 rewards \"cohesive evaluation\" and \"discriminating use of relevant examples in support\". (Time: about 45 minutes, pro rata from the 60-mark, 90-minute paper; the document sets no per-question time.)"
   },
   {
    "marks": 30,
    "minutes": 45,
    "paper": "Component 2, Section B – Literary Heritage Texts (Questions 11 to 22)",
    "structure": "\"One 30-mark essay question from a choice of two on each of the set texts\" — 10 raw marks AO1, 10 AO2 and 10 AO4, so all three strands must be present in every developed paragraph. Take a line of argument on the question; support it with close textual knowledge and analysis of language, form and structure; and read the text against \"the contexts in which they were written\", which the specification defines as the writer's own life and situation, the historical setting, social and cultural contexts, the literary context, and how a text \"may be read differently in the 21st century from when it was written\". The top level requires that understanding of context is \"integrated convincingly into the response\". (Time: about 45 minutes, pro rata from the 60-mark, 90-minute paper; the document sets no per-question time.)"
   },
   {
    "marks": 30,
    "paper": "Component 3, Assignment A – Modern Drama (non-examined alternative to Component 2)",
    "structure": "\"One 30-mark essay response to a teacher-devised assignment on the studied text\", \"marked out of 30 with 15 marks for AO1 and 15 marks for AO2\"; \"The assignment must allow learners to access both AO1 and AO2.\" The document's model wordings are \"Explore the ways in which Priestley presents women in An Inspector Calls. You must consider language, form and structure.\" and \"In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure.\" Advisory word count 650–800 words, with no penalty for exceeding it; marked on the five-level grid on a \"best fit\" basis."
   },
   {
    "marks": 30,
    "paper": "Component 3, Assignment B – Literary Heritage Texts (non-examined alternative to Component 2)",
    "structure": "\"One 30-mark essay response to a teacher-devised assignment on the studied text\", \"marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"Assignment B must allow learners to access AO1, AO2 and AO4.\" The document's model wordings are \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" and \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" Advisory word count 650–800 words; the grid adds a context strand rising to context \"integrated convincingly into the response\"."
   }
  ],
  "timingNote": "The specification gives only whole-component times — Component 1 \"Written examination: 2 hours\" for 90 marks and Component 2 \"Written examination: 1 hour 30 minutes\" for 60 marks. essayShapes[].minutes are pro-rata splits of those papers; the document itself sets no per-question time. Component 3 is non-examined and has no time limit, only an advisory word count of 650–800 words per assignment."
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf",
  "etag": "W/\"a07e2-65aac9fda7b45\"",
  "lastModified": "Fri, 04 Sep 2026 18:42:03 GMT",
  "length": 657378,
  "checkedAt": "2026-09-11T17:00:02.508Z"
 },
 "topics": [
  {
   "id": "unseen-poetry",
   "component": "C1",
   "option": null,
   "name": "Section A: Unseen Poetry",
   "caseStudies": [
    "A selection of modern poetry should be studied in order to prepare for the unseen poetry assessment.",
    "The unseen poem will be reproduced in the question paper."
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "What preparation does the specification require for the unseen poem?",
     "idea": "Wide reading of modern poetry as preparation for the unseen",
     "content": "Component 1 requires learners to \"Develop skills to analyse unseen poetry\" and to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meanings and effects\" and \"to maintain a critical style and informed personal response\". Alongside the sixteen set anthology poems, \"Additionally, a selection of modern poetry should be studied in order to prepare for the unseen poetry assessment.\" The focus of Section A is to \"explore how writers create meaning and effects in a range of seen and unseen poetry.\""
    },
    {
     "code": "Section A: Unseen Poetry",
     "q": "What must a learner be able to do with a poem they have never seen?",
     "idea": "Applying knowledge of poetic form, content and meaning to an unseen poem",
     "content": "\"Learners will apply their knowledge of poetic form, content and meaning to an unseen poem. Learners must: demonstrate understanding of how writers create literary effects using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form; understand and use appropriate literary terminology; identify and use relevant examples from poems.\""
    },
    {
     "code": "Section A: Unseen Poetry — AO2",
     "q": "Which assessment objective is tested in Section A, and what does it demand?",
     "idea": "AO2 alone: language, form and structure creating meanings and effects",
     "content": "\"Questions will test the following assessment objective: AO2 Analyse the language, form and structure used by a writer to create meanings and effects.\" Section A carries 20 raw marks, all of them AO2 (Question 1 in the Breakdown of assessment objectives and raw marks); no AO1, AO3 or AO4 credit is available, so comparison with other poems and contextual material earn nothing here."
    },
    {
     "code": "Assessment overview: Section A – Unseen Poetry",
     "q": "What does the question look like and under what conditions is it answered?",
     "idea": "One 20-mark essay on the meaning and effects of the unseen poem",
     "content": "\"Section A – Unseen Poetry: one 20-mark essay question exploring the meaning and effects created in an unseen poem. The poem will be reproduced in the question paper. This section assesses AO2.\" There is no choice of question. Component 1 is a two-hour, 90-mark, closed book examination worth 60% of the International GCSE, available as a paper-based or onscreen assessment."
    }
   ]
  },
  {
   "id": "anthology-poetry",
   "component": "C1",
   "option": null,
   "name": "Section B: Anthology Poetry — Part 3 of the Pearson Edexcel International GCSE English Anthology",
   "caseStudies": [
    "Part 3 of the Pearson Edexcel International GCSE English Anthology",
    "If– Rudyard Kipling",
    "Prayer Before Birth Louis MacNeice",
    "Blessing Imtiaz Dharker",
    "Search For My Tongue Sujata Bhatt",
    "Half-past Two U A Fanthorpe",
    "Piano D H Lawrence",
    "Hide and Seek Vernon Scannell",
    "Sonnet 116: Let me not to the marriage of true minds William Shakespeare",
    "La Belle Dame sans Merci John Keats",
    "Poem at Thirty-Nine Alice Walker",
    "War Photographer Carol Ann Duffy",
    "The Tyger William Blake",
    "My Last Duchess Robert Browning",
    "Half-caste John Agard",
    "Do not go gentle into that good night Dylan Thomas",
    "Remember Christina Rossetti"
   ],
   "ideas": [
    {
     "code": "Section B: Anthology Poetry",
     "q": "What must a learner be able to do with the anthology poems?",
     "idea": "Comparing two poems from Part 3 of the anthology",
     "content": "\"Learners will apply their knowledge of poetic form, content and meaning to compare poems. Learners must: demonstrate understanding of how writers create literary effects using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form; understand and use appropriate literary terminology; make comparisons between poems, including use of language, structure and form; identify and use relevant examples from poems.\" Questions test AO2 (Analyse the language, form and structure used by a writer to create meanings and effects) and AO3 (Explore links and connections between texts): one 30-mark essay question from a choice of two, 15 raw marks each AO (Questions 2 and 3)."
    },
    {
     "code": "Part 3: If–",
     "q": "What must be known about If– by Rudyard Kipling?",
     "idea": "If– — Rudyard Kipling",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For If– the learner must be able to show how Rudyard Kipling creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Prayer Before Birth",
     "q": "What must be known about Prayer Before Birth by Louis MacNeice?",
     "idea": "Prayer Before Birth — Louis MacNeice",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Prayer Before Birth the learner must be able to show how Louis MacNeice creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Blessing",
     "q": "What must be known about Blessing by Imtiaz Dharker?",
     "idea": "Blessing — Imtiaz Dharker",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Blessing the learner must be able to show how Imtiaz Dharker creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Search For My Tongue",
     "q": "What must be known about Search For My Tongue by Sujata Bhatt?",
     "idea": "Search For My Tongue — Sujata Bhatt",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Search For My Tongue the learner must be able to show how Sujata Bhatt creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Half-past Two",
     "q": "What must be known about Half-past Two by U A Fanthorpe?",
     "idea": "Half-past Two — U A Fanthorpe",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Half-past Two the learner must be able to show how U A Fanthorpe creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Piano",
     "q": "What must be known about Piano by D H Lawrence?",
     "idea": "Piano — D H Lawrence",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Piano the learner must be able to show how D H Lawrence creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Hide and Seek",
     "q": "What must be known about Hide and Seek by Vernon Scannell?",
     "idea": "Hide and Seek — Vernon Scannell",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Hide and Seek the learner must be able to show how Vernon Scannell creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Sonnet 116: Let me not to the marriage of true minds",
     "q": "What must be known about Sonnet 116: Let me not to the marriage of true minds by William Shakespeare?",
     "idea": "Sonnet 116: Let me not to the marriage of true minds — William Shakespeare",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Sonnet 116: Let me not to the marriage of true minds the learner must be able to show how William Shakespeare creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: La Belle Dame sans Merci",
     "q": "What must be known about La Belle Dame sans Merci by John Keats?",
     "idea": "La Belle Dame sans Merci — John Keats",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For La Belle Dame sans Merci the learner must be able to show how John Keats creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Poem at Thirty-Nine",
     "q": "What must be known about Poem at Thirty-Nine by Alice Walker?",
     "idea": "Poem at Thirty-Nine — Alice Walker",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Poem at Thirty-Nine the learner must be able to show how Alice Walker creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: War Photographer",
     "q": "What must be known about War Photographer by Carol Ann Duffy?",
     "idea": "War Photographer — Carol Ann Duffy",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For War Photographer the learner must be able to show how Carol Ann Duffy creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: The Tyger",
     "q": "What must be known about The Tyger by William Blake?",
     "idea": "The Tyger — William Blake",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For The Tyger the learner must be able to show how William Blake creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: My Last Duchess",
     "q": "What must be known about My Last Duchess by Robert Browning?",
     "idea": "My Last Duchess — Robert Browning",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For My Last Duchess the learner must be able to show how Robert Browning creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Half-caste",
     "q": "What must be known about Half-caste by John Agard?",
     "idea": "Half-caste — John Agard",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Half-caste the learner must be able to show how John Agard creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Do not go gentle into that good night",
     "q": "What must be known about Do not go gentle into that good night by Dylan Thomas?",
     "idea": "Do not go gentle into that good night — Dylan Thomas",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Do not go gentle into that good night the learner must be able to show how Dylan Thomas creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    },
    {
     "code": "Part 3: Remember",
     "q": "What must be known about Remember by Christina Rossetti?",
     "idea": "Remember — Christina Rossetti",
     "content": "One of the sixteen set poems in Part 3 of the Pearson Edexcel International GCSE English Anthology; \"this includes all poems from Part 3\" — every poem in the list must be studied, since either of the two Section B questions may name it. For Remember the learner must be able to show how Christina Rossetti creates literary effects \"using, for example, imagery, descriptive skills, language choice, tone and mood, structure and form\", use appropriate literary terminology about it, identify and use relevant examples from it, and compare it with another Part 3 poem \"including use of language, structure and form\" (AO2 and AO3). Component 1 is closed book, but \"learners will be provided with the anthology poems in the examination.\""
    }
   ]
  },
  {
   "id": "prose-mockingbird",
   "component": "C1",
   "option": "modernProse",
   "name": "To Kill a Mockingbird — Harper Lee",
   "caseStudies": [
    "To Kill a Mockingbird Harper Lee",
    "Component 1 is a closed book examination and therefore there are no prescribed editions of the set texts; recommended edition: Arrow 50th Anniversary Edition, June 2010, ISBN 9780099549482"
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "How does To Kill a Mockingbird fit into Component 1?",
     "idea": "To Kill a Mockingbird as the one chosen modern prose set text, studied whole",
     "content": "\"Learners will study two set texts for this component: this includes all poems from Part 3 of the Pearson Edexcel International GCSE English Anthology and one of the modern prose set texts\" — here To Kill a Mockingbird by Harper Lee, chosen from the list of seven. Teaching should focus on the study of whole texts, developing learners' comprehension, critical reading and comparison skills, where relevant, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop these skills."
    },
    {
     "code": "Section C: Modern Prose — AO1",
     "q": "What counts as a close knowledge and understanding of To Kill a Mockingbird?",
     "idea": "Close understanding of To Kill a Mockingbird, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their chosen prose text... Learners must: demonstrate a close understanding of their prose text; maintain a critical style; present an informed personal engagement; identify and use relevant examples from their prose text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 20 of the 40 raw marks for Section C. Because the examination is closed book, the plot, characters and key moments of To Kill a Mockingbird and the quotations used in support must be held in memory."
    },
    {
     "code": "Section C: Modern Prose — AO4",
     "q": "What must be said about the context of To Kill a Mockingbird?",
     "idea": "The relationship between To Kill a Mockingbird and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their prose text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 20 of the 40 raw marks for Section C, an equal share with AO1, so context is half the mark on every To Kill a Mockingbird question."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for To Kill a Mockingbird?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section C – Modern Prose",
     "q": "What does the To Kill a Mockingbird question look like?",
     "idea": "One 40-mark closed-book essay from a choice of two on To Kill a Mockingbird",
     "content": "\"Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 4 to 17, carrying 20 marks AO1 and 20 marks AO4. \"This component is a closed book examination and learners may not take texts into the examination\", although the anthology poems are provided. Component 1 is two hours, 90 marks and 60% of the total International GCSE, paper-based or onscreen."
    }
   ]
  },
  {
   "id": "prose-of-mice-and-men",
   "component": "C1",
   "option": "modernProse",
   "name": "Of Mice and Men — John Steinbeck",
   "caseStudies": [
    "Of Mice and Men John Steinbeck",
    "Component 1 is a closed book examination and therefore there are no prescribed editions of the set texts; recommended edition: Penguin Red Classics New Ed Edition, January 2006, ISBN 9780141023571"
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "How does Of Mice and Men fit into Component 1?",
     "idea": "Of Mice and Men as the one chosen modern prose set text, studied whole",
     "content": "\"Learners will study two set texts for this component: this includes all poems from Part 3 of the Pearson Edexcel International GCSE English Anthology and one of the modern prose set texts\" — here Of Mice and Men by John Steinbeck, chosen from the list of seven. Teaching should focus on the study of whole texts, developing learners' comprehension, critical reading and comparison skills, where relevant, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop these skills."
    },
    {
     "code": "Section C: Modern Prose — AO1",
     "q": "What counts as a close knowledge and understanding of Of Mice and Men?",
     "idea": "Close understanding of Of Mice and Men, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their chosen prose text... Learners must: demonstrate a close understanding of their prose text; maintain a critical style; present an informed personal engagement; identify and use relevant examples from their prose text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 20 of the 40 raw marks for Section C. Because the examination is closed book, the plot, characters and key moments of Of Mice and Men and the quotations used in support must be held in memory."
    },
    {
     "code": "Section C: Modern Prose — AO4",
     "q": "What must be said about the context of Of Mice and Men?",
     "idea": "The relationship between Of Mice and Men and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their prose text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 20 of the 40 raw marks for Section C, an equal share with AO1, so context is half the mark on every Of Mice and Men question."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Of Mice and Men?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section C – Modern Prose",
     "q": "What does the Of Mice and Men question look like?",
     "idea": "One 40-mark closed-book essay from a choice of two on Of Mice and Men",
     "content": "\"Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 4 to 17, carrying 20 marks AO1 and 20 marks AO4. \"This component is a closed book examination and learners may not take texts into the examination\", although the anthology poems are provided. Component 1 is two hours, 90 marks and 60% of the total International GCSE, paper-based or onscreen."
    }
   ]
  },
  {
   "id": "prose-whale-rider",
   "component": "C1",
   "option": "modernProse",
   "name": "The Whale Rider — Witi Ihimaera",
   "caseStudies": [
    "The Whale Rider Witi Ihimaera",
    "Component 1 is a closed book examination and therefore there are no prescribed editions of the set texts; recommended edition: Heinemann; 1st Edition, February 2005, ISBN 9780435131081"
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "How does The Whale Rider fit into Component 1?",
     "idea": "The Whale Rider as the one chosen modern prose set text, studied whole",
     "content": "\"Learners will study two set texts for this component: this includes all poems from Part 3 of the Pearson Edexcel International GCSE English Anthology and one of the modern prose set texts\" — here The Whale Rider by Witi Ihimaera, chosen from the list of seven. Teaching should focus on the study of whole texts, developing learners' comprehension, critical reading and comparison skills, where relevant, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop these skills."
    },
    {
     "code": "Section C: Modern Prose — AO1",
     "q": "What counts as a close knowledge and understanding of The Whale Rider?",
     "idea": "Close understanding of The Whale Rider, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their chosen prose text... Learners must: demonstrate a close understanding of their prose text; maintain a critical style; present an informed personal engagement; identify and use relevant examples from their prose text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 20 of the 40 raw marks for Section C. Because the examination is closed book, the plot, characters and key moments of The Whale Rider and the quotations used in support must be held in memory."
    },
    {
     "code": "Section C: Modern Prose — AO4",
     "q": "What must be said about the context of The Whale Rider?",
     "idea": "The relationship between The Whale Rider and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their prose text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 20 of the 40 raw marks for Section C, an equal share with AO1, so context is half the mark on every The Whale Rider question."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for The Whale Rider?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section C – Modern Prose",
     "q": "What does the The Whale Rider question look like?",
     "idea": "One 40-mark closed-book essay from a choice of two on The Whale Rider",
     "content": "\"Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 4 to 17, carrying 20 marks AO1 and 20 marks AO4. \"This component is a closed book examination and learners may not take texts into the examination\", although the anthology poems are provided. Component 1 is two hours, 90 marks and 60% of the total International GCSE, paper-based or onscreen."
    }
   ]
  },
  {
   "id": "prose-joy-luck-club",
   "component": "C1",
   "option": "modernProse",
   "name": "The Joy Luck Club — Amy Tan",
   "caseStudies": [
    "The Joy Luck Club Amy Tan",
    "Component 1 is a closed book examination and therefore there are no prescribed editions of the set texts; recommended edition: Vintage; New Ed Edition, June 1991, ISBN 9780749399573"
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "How does The Joy Luck Club fit into Component 1?",
     "idea": "The Joy Luck Club as the one chosen modern prose set text, studied whole",
     "content": "\"Learners will study two set texts for this component: this includes all poems from Part 3 of the Pearson Edexcel International GCSE English Anthology and one of the modern prose set texts\" — here The Joy Luck Club by Amy Tan, chosen from the list of seven. Teaching should focus on the study of whole texts, developing learners' comprehension, critical reading and comparison skills, where relevant, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop these skills."
    },
    {
     "code": "Section C: Modern Prose — AO1",
     "q": "What counts as a close knowledge and understanding of The Joy Luck Club?",
     "idea": "Close understanding of The Joy Luck Club, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their chosen prose text... Learners must: demonstrate a close understanding of their prose text; maintain a critical style; present an informed personal engagement; identify and use relevant examples from their prose text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 20 of the 40 raw marks for Section C. Because the examination is closed book, the plot, characters and key moments of The Joy Luck Club and the quotations used in support must be held in memory."
    },
    {
     "code": "Section C: Modern Prose — AO4",
     "q": "What must be said about the context of The Joy Luck Club?",
     "idea": "The relationship between The Joy Luck Club and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their prose text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 20 of the 40 raw marks for Section C, an equal share with AO1, so context is half the mark on every The Joy Luck Club question."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for The Joy Luck Club?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section C – Modern Prose",
     "q": "What does the The Joy Luck Club question look like?",
     "idea": "One 40-mark closed-book essay from a choice of two on The Joy Luck Club",
     "content": "\"Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 4 to 17, carrying 20 marks AO1 and 20 marks AO4. \"This component is a closed book examination and learners may not take texts into the examination\", although the anthology poems are provided. Component 1 is two hours, 90 marks and 60% of the total International GCSE, paper-based or onscreen."
    }
   ]
  },
  {
   "id": "prose-things-fall-apart",
   "component": "C1",
   "option": "modernProse",
   "name": "Things Fall Apart — Chinua Achebe",
   "caseStudies": [
    "Things Fall Apart Chinua Achebe",
    "Component 1 is a closed book examination and therefore there are no prescribed editions of the set texts; recommended edition: Penguin Red Classics, January 2006, ISBN 9780141023380"
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "How does Things Fall Apart fit into Component 1?",
     "idea": "Things Fall Apart as the one chosen modern prose set text, studied whole",
     "content": "\"Learners will study two set texts for this component: this includes all poems from Part 3 of the Pearson Edexcel International GCSE English Anthology and one of the modern prose set texts\" — here Things Fall Apart by Chinua Achebe, chosen from the list of seven. Teaching should focus on the study of whole texts, developing learners' comprehension, critical reading and comparison skills, where relevant, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop these skills."
    },
    {
     "code": "Section C: Modern Prose — AO1",
     "q": "What counts as a close knowledge and understanding of Things Fall Apart?",
     "idea": "Close understanding of Things Fall Apart, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their chosen prose text... Learners must: demonstrate a close understanding of their prose text; maintain a critical style; present an informed personal engagement; identify and use relevant examples from their prose text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 20 of the 40 raw marks for Section C. Because the examination is closed book, the plot, characters and key moments of Things Fall Apart and the quotations used in support must be held in memory."
    },
    {
     "code": "Section C: Modern Prose — AO4",
     "q": "What must be said about the context of Things Fall Apart?",
     "idea": "The relationship between Things Fall Apart and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their prose text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 20 of the 40 raw marks for Section C, an equal share with AO1, so context is half the mark on every Things Fall Apart question."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Things Fall Apart?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section C – Modern Prose",
     "q": "What does the Things Fall Apart question look like?",
     "idea": "One 40-mark closed-book essay from a choice of two on Things Fall Apart",
     "content": "\"Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 4 to 17, carrying 20 marks AO1 and 20 marks AO4. \"This component is a closed book examination and learners may not take texts into the examination\", although the anthology poems are provided. Component 1 is two hours, 90 marks and 60% of the total International GCSE, paper-based or onscreen."
    }
   ]
  },
  {
   "id": "prose-klara-and-the-sun",
   "component": "C1",
   "option": "modernProse",
   "name": "Klara and the Sun — Kazuo Ishiguro",
   "caseStudies": [
    "Klara and the Sun Kazuo Ishiguro",
    "Component 1 is a closed book examination and therefore there are no prescribed editions of the set texts; recommended edition: Faber & Faber, March 2022, ISBN 9780571364909"
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "How does Klara and the Sun fit into Component 1?",
     "idea": "Klara and the Sun as the one chosen modern prose set text, studied whole",
     "content": "\"Learners will study two set texts for this component: this includes all poems from Part 3 of the Pearson Edexcel International GCSE English Anthology and one of the modern prose set texts\" — here Klara and the Sun by Kazuo Ishiguro, chosen from the list of seven. Teaching should focus on the study of whole texts, developing learners' comprehension, critical reading and comparison skills, where relevant, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop these skills. NB: the new set texts for modern prose; Klara and the Sun, and Western Lane are for first teaching 2024 and first assessment May 2026."
    },
    {
     "code": "Section C: Modern Prose — AO1",
     "q": "What counts as a close knowledge and understanding of Klara and the Sun?",
     "idea": "Close understanding of Klara and the Sun, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their chosen prose text... Learners must: demonstrate a close understanding of their prose text; maintain a critical style; present an informed personal engagement; identify and use relevant examples from their prose text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 20 of the 40 raw marks for Section C. Because the examination is closed book, the plot, characters and key moments of Klara and the Sun and the quotations used in support must be held in memory."
    },
    {
     "code": "Section C: Modern Prose — AO4",
     "q": "What must be said about the context of Klara and the Sun?",
     "idea": "The relationship between Klara and the Sun and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their prose text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 20 of the 40 raw marks for Section C, an equal share with AO1, so context is half the mark on every Klara and the Sun question."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Klara and the Sun?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section C – Modern Prose",
     "q": "What does the Klara and the Sun question look like?",
     "idea": "One 40-mark closed-book essay from a choice of two on Klara and the Sun",
     "content": "\"Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 4 to 17, carrying 20 marks AO1 and 20 marks AO4. \"This component is a closed book examination and learners may not take texts into the examination\", although the anthology poems are provided. Component 1 is two hours, 90 marks and 60% of the total International GCSE, paper-based or onscreen."
    }
   ]
  },
  {
   "id": "prose-western-lane",
   "component": "C1",
   "option": "modernProse",
   "name": "Western Lane — Chetna Maroo",
   "caseStudies": [
    "Western Lane Chetna Maroo",
    "Component 1 is a closed book examination and therefore there are no prescribed editions of the set texts; recommended edition: Pan Macmillan, May 2023, ISBN 9781529094640/9781529094626"
   ],
   "ideas": [
    {
     "code": "Component 1: Content overview",
     "q": "How does Western Lane fit into Component 1?",
     "idea": "Western Lane as the one chosen modern prose set text, studied whole",
     "content": "\"Learners will study two set texts for this component: this includes all poems from Part 3 of the Pearson Edexcel International GCSE English Anthology and one of the modern prose set texts\" — here Western Lane by Chetna Maroo, chosen from the list of seven. Teaching should focus on the study of whole texts, developing learners' comprehension, critical reading and comparison skills, where relevant, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop these skills. NB: the new set texts for modern prose; Klara and the Sun, and Western Lane are for first teaching 2024 and first assessment May 2026."
    },
    {
     "code": "Section C: Modern Prose — AO1",
     "q": "What counts as a close knowledge and understanding of Western Lane?",
     "idea": "Close understanding of Western Lane, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their chosen prose text... Learners must: demonstrate a close understanding of their prose text; maintain a critical style; present an informed personal engagement; identify and use relevant examples from their prose text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 20 of the 40 raw marks for Section C. Because the examination is closed book, the plot, characters and key moments of Western Lane and the quotations used in support must be held in memory."
    },
    {
     "code": "Section C: Modern Prose — AO4",
     "q": "What must be said about the context of Western Lane?",
     "idea": "The relationship between Western Lane and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their prose text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 20 of the 40 raw marks for Section C, an equal share with AO1, so context is half the mark on every Western Lane question."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Western Lane?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section C – Modern Prose",
     "q": "What does the Western Lane question look like?",
     "idea": "One 40-mark closed-book essay from a choice of two on Western Lane",
     "content": "\"Section C – Modern Prose: one 40-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 4 to 17, carrying 20 marks AO1 and 20 marks AO4. \"This component is a closed book examination and learners may not take texts into the examination\", although the anthology poems are provided. Component 1 is two hours, 90 marks and 60% of the total International GCSE, paper-based or onscreen."
    }
   ]
  },
  {
   "id": "drama-view-from-the-bridge",
   "component": "C2",
   "option": "modernDrama",
   "name": "A View from the Bridge — Arthur Miller",
   "caseStudies": [
    "A View from the Bridge Arthur Miller",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): Penguin Modern Classics, March 2010, ISBN 9780141189963; Bloomsbury, June 2022, ISBN 9781350245785"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does A View from the Bridge fit into Component 2?",
     "idea": "A View from the Bridge as the one chosen modern drama set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here A View from the Bridge by Arthur Miller, chosen from the list of five. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section A: Modern Drama — AO1",
     "q": "What counts as a close knowledge and understanding of A View from the Bridge?",
     "idea": "Close understanding of A View from the Bridge, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their drama text... Learners must: demonstrate a close understanding of their drama text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the play.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 15 of the 30 raw marks for Section A (Questions 1 to 10). The document's own model wordings show what such a question fastens on — a character or group of characters (\"the ways in which Priestley presents women\") or a theme (\"In what ways does Miller present conflict\") — so the characters, relationships, themes and key moments of A View from the Bridge must be known closely enough to be argued about."
    },
    {
     "code": "Section A: Modern Drama — AO2",
     "q": "What must be analysed in A View from the Bridge?",
     "idea": "How language, form and structure create effects in A View from the Bridge",
     "content": "Learners will demonstrate their knowledge and understanding of their drama text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 15 of the 30 raw marks for Section A. For a play this includes its dramatic form and structure as well as its language."
    },
    {
     "code": "Assessment overview: Section A – Modern Drama",
     "q": "What does the A View from the Bridge question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on A View from the Bridge",
     "content": "\"Section A – Modern Drama: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO2.\" In the Breakdown of assessment objectives and raw marks these are Questions 1 to 10, carrying 15 marks AO1 and 15 marks AO2. AO4 is not assessed in this section. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", and the copy \"must be completely unmarked\". Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE, paper-based or onscreen."
    },
    {
     "code": "Component 3, Assignment A – Modern Drama",
     "q": "How is A View from the Bridge assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on A View from the Bridge",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same modern drama list. \"Assignment A – Modern Drama: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1 and AO2\", and \"will be marked out of 30 with 15 marks for AO1 and 15 marks for AO2\"; \"The assignment must allow learners to access both AO1 and AO2.\" Assignments may be self-generated or devised by the teacher and may take formats such as \"Explore the ways in which Priestley presents women in An Inspector Calls. You must consider language, form and structure.\" or \"In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure.\" The advisory word count is 650–800 words, marking is on the five-level grid on a \"best fit\" basis, and the work is internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "drama-an-inspector-calls",
   "component": "C2",
   "option": "modernDrama",
   "name": "An Inspector Calls — J B Priestley",
   "caseStudies": [
    "An Inspector Calls J B Priestley",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): Penguin Modern Classics; New Ed Edition, March 2001, ISBN 97801 41185354; Heinemann, January 1993, ISBN 9780435232825; Firestone Books, March 2020, ISBN 9781909608405"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does An Inspector Calls fit into Component 2?",
     "idea": "An Inspector Calls as the one chosen modern drama set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here An Inspector Calls by J B Priestley, chosen from the list of five. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section A: Modern Drama — AO1",
     "q": "What counts as a close knowledge and understanding of An Inspector Calls?",
     "idea": "Close understanding of An Inspector Calls, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their drama text... Learners must: demonstrate a close understanding of their drama text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the play.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 15 of the 30 raw marks for Section A (Questions 1 to 10). The document's own model wordings show what such a question fastens on — a character or group of characters (\"the ways in which Priestley presents women\") or a theme (\"In what ways does Miller present conflict\") — so the characters, relationships, themes and key moments of An Inspector Calls must be known closely enough to be argued about."
    },
    {
     "code": "Section A: Modern Drama — AO2",
     "q": "What must be analysed in An Inspector Calls?",
     "idea": "How language, form and structure create effects in An Inspector Calls",
     "content": "Learners will demonstrate their knowledge and understanding of their drama text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 15 of the 30 raw marks for Section A. For a play this includes its dramatic form and structure as well as its language."
    },
    {
     "code": "Assessment overview: Section A – Modern Drama",
     "q": "What does the An Inspector Calls question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on An Inspector Calls",
     "content": "\"Section A – Modern Drama: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO2.\" In the Breakdown of assessment objectives and raw marks these are Questions 1 to 10, carrying 15 marks AO1 and 15 marks AO2. AO4 is not assessed in this section. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", and the copy \"must be completely unmarked\". Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE, paper-based or onscreen."
    },
    {
     "code": "Component 3, Assignment A – Modern Drama",
     "q": "How is An Inspector Calls assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on An Inspector Calls",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same modern drama list. \"Assignment A – Modern Drama: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1 and AO2\", and \"will be marked out of 30 with 15 marks for AO1 and 15 marks for AO2\"; \"The assignment must allow learners to access both AO1 and AO2.\" Assignments may be self-generated or devised by the teacher and may take formats such as \"Explore the ways in which Priestley presents women in An Inspector Calls. You must consider language, form and structure.\" or \"In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure.\" The advisory word count is 650–800 words, marking is on the five-level grid on a \"best fit\" basis, and the work is internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "drama-curious-incident",
   "component": "C2",
   "option": "modernDrama",
   "name": "The Curious Incident of the Dog in the Night-time — Mark Haddon (adapted by Simon Stephens)",
   "caseStudies": [
    "The Curious Incident of the Dog in the Night-time Mark Haddon (adapted by Simon Stephens)",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): Bloomsbury, April 2013, ISBN 9781408185216; Bloomsbury, April 2013, ISBN 9781408173350"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does The Curious Incident of the Dog in the Night-time fit into Component 2?",
     "idea": "The Curious Incident of the Dog in the Night-time as the one chosen modern drama set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here The Curious Incident of the Dog in the Night-time by Mark Haddon (adapted by Simon Stephens), chosen from the list of five. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section A: Modern Drama — AO1",
     "q": "What counts as a close knowledge and understanding of The Curious Incident of the Dog in the Night-time?",
     "idea": "Close understanding of The Curious Incident of the Dog in the Night-time, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their drama text... Learners must: demonstrate a close understanding of their drama text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the play.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 15 of the 30 raw marks for Section A (Questions 1 to 10). The document's own model wordings show what such a question fastens on — a character or group of characters (\"the ways in which Priestley presents women\") or a theme (\"In what ways does Miller present conflict\") — so the characters, relationships, themes and key moments of The Curious Incident of the Dog in the Night-time must be known closely enough to be argued about."
    },
    {
     "code": "Section A: Modern Drama — AO2",
     "q": "What must be analysed in The Curious Incident of the Dog in the Night-time?",
     "idea": "How language, form and structure create effects in The Curious Incident of the Dog in the Night-time",
     "content": "Learners will demonstrate their knowledge and understanding of their drama text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 15 of the 30 raw marks for Section A. For a play this includes its dramatic form and structure as well as its language."
    },
    {
     "code": "Assessment overview: Section A – Modern Drama",
     "q": "What does the The Curious Incident of the Dog in the Night-time question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on The Curious Incident of the Dog in the Night-time",
     "content": "\"Section A – Modern Drama: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO2.\" In the Breakdown of assessment objectives and raw marks these are Questions 1 to 10, carrying 15 marks AO1 and 15 marks AO2. AO4 is not assessed in this section. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", and the copy \"must be completely unmarked\". Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE, paper-based or onscreen."
    },
    {
     "code": "Component 3, Assignment A – Modern Drama",
     "q": "How is The Curious Incident of the Dog in the Night-time assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on The Curious Incident of the Dog in the Night-time",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same modern drama list. \"Assignment A – Modern Drama: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1 and AO2\", and \"will be marked out of 30 with 15 marks for AO1 and 15 marks for AO2\"; \"The assignment must allow learners to access both AO1 and AO2.\" Assignments may be self-generated or devised by the teacher and may take formats such as \"Explore the ways in which Priestley presents women in An Inspector Calls. You must consider language, form and structure.\" or \"In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure.\" The advisory word count is 650–800 words, marking is on the five-level grid on a \"best fit\" basis, and the work is internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "drama-kindertransport",
   "component": "C2",
   "option": "modernDrama",
   "name": "Kindertransport — Diane Samuels",
   "caseStudies": [
    "Kindertransport Diane Samuels",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): NHB Modern Plays (Nick Hern Books 2 Edition), May 2008, ISBN 9781854595270"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does Kindertransport fit into Component 2?",
     "idea": "Kindertransport as the one chosen modern drama set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here Kindertransport by Diane Samuels, chosen from the list of five. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section A: Modern Drama — AO1",
     "q": "What counts as a close knowledge and understanding of Kindertransport?",
     "idea": "Close understanding of Kindertransport, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their drama text... Learners must: demonstrate a close understanding of their drama text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the play.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 15 of the 30 raw marks for Section A (Questions 1 to 10). The document's own model wordings show what such a question fastens on — a character or group of characters (\"the ways in which Priestley presents women\") or a theme (\"In what ways does Miller present conflict\") — so the characters, relationships, themes and key moments of Kindertransport must be known closely enough to be argued about."
    },
    {
     "code": "Section A: Modern Drama — AO2",
     "q": "What must be analysed in Kindertransport?",
     "idea": "How language, form and structure create effects in Kindertransport",
     "content": "Learners will demonstrate their knowledge and understanding of their drama text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 15 of the 30 raw marks for Section A. For a play this includes its dramatic form and structure as well as its language."
    },
    {
     "code": "Assessment overview: Section A – Modern Drama",
     "q": "What does the Kindertransport question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on Kindertransport",
     "content": "\"Section A – Modern Drama: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO2.\" In the Breakdown of assessment objectives and raw marks these are Questions 1 to 10, carrying 15 marks AO1 and 15 marks AO2. AO4 is not assessed in this section. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", and the copy \"must be completely unmarked\". Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE, paper-based or onscreen."
    },
    {
     "code": "Component 3, Assignment A – Modern Drama",
     "q": "How is Kindertransport assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on Kindertransport",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same modern drama list. \"Assignment A – Modern Drama: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1 and AO2\", and \"will be marked out of 30 with 15 marks for AO1 and 15 marks for AO2\"; \"The assignment must allow learners to access both AO1 and AO2.\" Assignments may be self-generated or devised by the teacher and may take formats such as \"Explore the ways in which Priestley presents women in An Inspector Calls. You must consider language, form and structure.\" or \"In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure.\" The advisory word count is 650–800 words, marking is on the five-level grid on a \"best fit\" basis, and the work is internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "drama-kings-horseman",
   "component": "C2",
   "option": "modernDrama",
   "name": "Death and the King's Horseman — Wole Soyinka",
   "caseStudies": [
    "Death and the King's Horseman Wole Soyinka",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): Methuen Learner Edition, July 1998, ISBN 9780413695505; Bloomsbury Modern Classics, October 1975, ISBN 9780413333605"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does Death and the King's Horseman fit into Component 2?",
     "idea": "Death and the King's Horseman as the one chosen modern drama set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here Death and the King's Horseman by Wole Soyinka, chosen from the list of five. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section A: Modern Drama — AO1",
     "q": "What counts as a close knowledge and understanding of Death and the King's Horseman?",
     "idea": "Close understanding of Death and the King's Horseman, in a critical style with informed personal engagement",
     "content": "\"Learners will demonstrate their knowledge and understanding of their drama text... Learners must: demonstrate a close understanding of their drama text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the play.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 15 of the 30 raw marks for Section A (Questions 1 to 10). The document's own model wordings show what such a question fastens on — a character or group of characters (\"the ways in which Priestley presents women\") or a theme (\"In what ways does Miller present conflict\") — so the characters, relationships, themes and key moments of Death and the King's Horseman must be known closely enough to be argued about."
    },
    {
     "code": "Section A: Modern Drama — AO2",
     "q": "What must be analysed in Death and the King's Horseman?",
     "idea": "How language, form and structure create effects in Death and the King's Horseman",
     "content": "Learners will demonstrate their knowledge and understanding of their drama text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 15 of the 30 raw marks for Section A. For a play this includes its dramatic form and structure as well as its language."
    },
    {
     "code": "Assessment overview: Section A – Modern Drama",
     "q": "What does the Death and the King's Horseman question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on Death and the King's Horseman",
     "content": "\"Section A – Modern Drama: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1 and AO2.\" In the Breakdown of assessment objectives and raw marks these are Questions 1 to 10, carrying 15 marks AO1 and 15 marks AO2. AO4 is not assessed in this section. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", and the copy \"must be completely unmarked\". Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE, paper-based or onscreen."
    },
    {
     "code": "Component 3, Assignment A – Modern Drama",
     "q": "How is Death and the King's Horseman assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on Death and the King's Horseman",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same modern drama list. \"Assignment A – Modern Drama: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1 and AO2\", and \"will be marked out of 30 with 15 marks for AO1 and 15 marks for AO2\"; \"The assignment must allow learners to access both AO1 and AO2.\" Assignments may be self-generated or devised by the teacher and may take formats such as \"Explore the ways in which Priestley presents women in An Inspector Calls. You must consider language, form and structure.\" or \"In what ways does Miller present conflict in A View from the Bridge? You must consider language, form and structure.\" The advisory word count is 650–800 words, marking is on the five-level grid on a \"best fit\" basis, and the work is internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "heritage-romeo-and-juliet",
   "component": "C2",
   "option": "literaryHeritage",
   "name": "Romeo and Juliet — William Shakespeare",
   "caseStudies": [
    "Romeo and Juliet William Shakespeare",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): OUP Oxford; 1 Edition, September 2008, ISBN 9780198321668; Heinemann, March 2010, ISBN 9780435026493; Pearson Education, May 2023, ISBN 9781292461168; CUP Cambridge, January 2014, ISBN 9781107615403"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does Romeo and Juliet fit into Component 2?",
     "idea": "Romeo and Juliet as the one chosen literary heritage set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here Romeo and Juliet by William Shakespeare, chosen from the list of six. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO1",
     "q": "What counts as a close knowledge and understanding of Romeo and Juliet?",
     "idea": "Close understanding of Romeo and Juliet, in a critical style with informed personal engagement",
     "content": "\"Learners must: demonstrate a close understanding of their heritage text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 10 of the 30 raw marks for Section B (Questions 11 to 22). The document's own model wordings show what such a question fastens on — a theme (\"many different forms of love in Pride and Prejudice\") or a setting (\"How does Dickens portray city life in Great Expectations?\") — so the characters, relationships, themes and key moments of Romeo and Juliet must be known closely enough to be argued about, even though the examination is open book."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO2",
     "q": "What must be analysed in Romeo and Juliet?",
     "idea": "How language, form and structure create effects in Romeo and Juliet",
     "content": "Learners will demonstrate their knowledge and understanding of their text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 10 of the 30 raw marks for Section B."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO4",
     "q": "What must be said about the context of Romeo and Juliet?",
     "idea": "The relationship between Romeo and Juliet and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 10 of the 30 raw marks for Section B. This is the only section of Component 2 that carries AO4, which is 7% of the qualification."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Romeo and Juliet?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section B – Literary Heritage Texts",
     "q": "What does the Romeo and Juliet question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on Romeo and Juliet",
     "content": "\"Section B – Literary Heritage Texts: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1, AO2 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 11 to 22, carrying 10 marks AO1, 10 AO2 and 10 AO4 — the three objectives weigh equally. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", completely unmarked. Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE."
    },
    {
     "code": "Component 3, Assignment B – Literary Heritage Texts",
     "q": "How is Romeo and Juliet assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on Romeo and Juliet",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same literary heritage list. \"Assignment B – Literary Heritage Texts: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1, AO2 and AO4\", and \"will be marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"Assignment B must allow learners to access AO1, AO2 and AO4.\" Model formats given are \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" and \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" The advisory word count is 650–800 words; marking is on the five-level grid on a \"best fit\" basis, internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "heritage-macbeth",
   "component": "C2",
   "option": "literaryHeritage",
   "name": "Macbeth — William Shakespeare",
   "caseStudies": [
    "Macbeth William Shakespeare",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): OUP Oxford; 1 Edition, March 2009, ISBN 9780198324003; Heinemann, May 2010, ISBN 9780435026448; Pearson Education, May 2023, ISBN 9781292729367; CUP Cambridge, January 2014, ISBN 9781107615496"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does Macbeth fit into Component 2?",
     "idea": "Macbeth as the one chosen literary heritage set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here Macbeth by William Shakespeare, chosen from the list of six. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO1",
     "q": "What counts as a close knowledge and understanding of Macbeth?",
     "idea": "Close understanding of Macbeth, in a critical style with informed personal engagement",
     "content": "\"Learners must: demonstrate a close understanding of their heritage text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 10 of the 30 raw marks for Section B (Questions 11 to 22). The document's own model wordings show what such a question fastens on — a theme (\"many different forms of love in Pride and Prejudice\") or a setting (\"How does Dickens portray city life in Great Expectations?\") — so the characters, relationships, themes and key moments of Macbeth must be known closely enough to be argued about, even though the examination is open book."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO2",
     "q": "What must be analysed in Macbeth?",
     "idea": "How language, form and structure create effects in Macbeth",
     "content": "Learners will demonstrate their knowledge and understanding of their text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 10 of the 30 raw marks for Section B."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO4",
     "q": "What must be said about the context of Macbeth?",
     "idea": "The relationship between Macbeth and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 10 of the 30 raw marks for Section B. This is the only section of Component 2 that carries AO4, which is 7% of the qualification."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Macbeth?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section B – Literary Heritage Texts",
     "q": "What does the Macbeth question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on Macbeth",
     "content": "\"Section B – Literary Heritage Texts: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1, AO2 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 11 to 22, carrying 10 marks AO1, 10 AO2 and 10 AO4 — the three objectives weigh equally. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", completely unmarked. Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE."
    },
    {
     "code": "Component 3, Assignment B – Literary Heritage Texts",
     "q": "How is Macbeth assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on Macbeth",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same literary heritage list. \"Assignment B – Literary Heritage Texts: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1, AO2 and AO4\", and \"will be marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"Assignment B must allow learners to access AO1, AO2 and AO4.\" Model formats given are \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" and \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" The advisory word count is 650–800 words; marking is on the five-level grid on a \"best fit\" basis, internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "heritage-merchant-of-venice",
   "component": "C2",
   "option": "literaryHeritage",
   "name": "The Merchant of Venice — William Shakespeare",
   "caseStudies": [
    "The Merchant of Venice William Shakespeare",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): OUP Oxford, March 2010, ISBN 9780198328674; CUP Cambridge, January 2014, ISBN 9781107615397"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does The Merchant of Venice fit into Component 2?",
     "idea": "The Merchant of Venice as the one chosen literary heritage set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here The Merchant of Venice by William Shakespeare, chosen from the list of six. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO1",
     "q": "What counts as a close knowledge and understanding of The Merchant of Venice?",
     "idea": "Close understanding of The Merchant of Venice, in a critical style with informed personal engagement",
     "content": "\"Learners must: demonstrate a close understanding of their heritage text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 10 of the 30 raw marks for Section B (Questions 11 to 22). The document's own model wordings show what such a question fastens on — a theme (\"many different forms of love in Pride and Prejudice\") or a setting (\"How does Dickens portray city life in Great Expectations?\") — so the characters, relationships, themes and key moments of The Merchant of Venice must be known closely enough to be argued about, even though the examination is open book."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO2",
     "q": "What must be analysed in The Merchant of Venice?",
     "idea": "How language, form and structure create effects in The Merchant of Venice",
     "content": "Learners will demonstrate their knowledge and understanding of their text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 10 of the 30 raw marks for Section B."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO4",
     "q": "What must be said about the context of The Merchant of Venice?",
     "idea": "The relationship between The Merchant of Venice and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 10 of the 30 raw marks for Section B. This is the only section of Component 2 that carries AO4, which is 7% of the qualification."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for The Merchant of Venice?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section B – Literary Heritage Texts",
     "q": "What does the The Merchant of Venice question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on The Merchant of Venice",
     "content": "\"Section B – Literary Heritage Texts: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1, AO2 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 11 to 22, carrying 10 marks AO1, 10 AO2 and 10 AO4 — the three objectives weigh equally. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", completely unmarked. Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE."
    },
    {
     "code": "Component 3, Assignment B – Literary Heritage Texts",
     "q": "How is The Merchant of Venice assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on The Merchant of Venice",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same literary heritage list. \"Assignment B – Literary Heritage Texts: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1, AO2 and AO4\", and \"will be marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"Assignment B must allow learners to access AO1, AO2 and AO4.\" Model formats given are \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" and \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" The advisory word count is 650–800 words; marking is on the five-level grid on a \"best fit\" basis, internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "heritage-pride-and-prejudice",
   "component": "C2",
   "option": "literaryHeritage",
   "name": "Pride and Prejudice — Jane Austen",
   "caseStudies": [
    "Pride and Prejudice Jane Austen",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): Penguin Books, January 2003, ISBN 9780141439518; Pearson Education; New Windmills, April 1994, ISBN 9780435126070; OUP Oxford, November 2019, ISBN 9780198826736; Wordsworth Edition Classics, May 1992, ISBN 9781853260001"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does Pride and Prejudice fit into Component 2?",
     "idea": "Pride and Prejudice as the one chosen literary heritage set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here Pride and Prejudice by Jane Austen, chosen from the list of six. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO1",
     "q": "What counts as a close knowledge and understanding of Pride and Prejudice?",
     "idea": "Close understanding of Pride and Prejudice, in a critical style with informed personal engagement",
     "content": "\"Learners must: demonstrate a close understanding of their heritage text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 10 of the 30 raw marks for Section B (Questions 11 to 22). The document's own model wordings show what such a question fastens on — a theme (\"many different forms of love in Pride and Prejudice\") or a setting (\"How does Dickens portray city life in Great Expectations?\") — so the characters, relationships, themes and key moments of Pride and Prejudice must be known closely enough to be argued about, even though the examination is open book."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO2",
     "q": "What must be analysed in Pride and Prejudice?",
     "idea": "How language, form and structure create effects in Pride and Prejudice",
     "content": "Learners will demonstrate their knowledge and understanding of their text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 10 of the 30 raw marks for Section B."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO4",
     "q": "What must be said about the context of Pride and Prejudice?",
     "idea": "The relationship between Pride and Prejudice and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 10 of the 30 raw marks for Section B. This is the only section of Component 2 that carries AO4, which is 7% of the qualification."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Pride and Prejudice?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section B – Literary Heritage Texts",
     "q": "What does the Pride and Prejudice question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on Pride and Prejudice",
     "content": "\"Section B – Literary Heritage Texts: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1, AO2 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 11 to 22, carrying 10 marks AO1, 10 AO2 and 10 AO4 — the three objectives weigh equally. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", completely unmarked. Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE."
    },
    {
     "code": "Component 3, Assignment B – Literary Heritage Texts",
     "q": "How is Pride and Prejudice assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on Pride and Prejudice",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same literary heritage list. \"Assignment B – Literary Heritage Texts: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1, AO2 and AO4\", and \"will be marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"Assignment B must allow learners to access AO1, AO2 and AO4.\" Model formats given are \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" and \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" The advisory word count is 650–800 words; marking is on the five-level grid on a \"best fit\" basis, internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "heritage-great-expectations",
   "component": "C2",
   "option": "literaryHeritage",
   "name": "Great Expectations — Charles Dickens",
   "caseStudies": [
    "Great Expectations Charles Dickens",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): Penguin Classics, April 2012, ISBN 9780141198897; Penguin Books, January 2003, ISBN 9780141439563; Wordsworth Edition Classics, May 1992, ISBN 9781853260049"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does Great Expectations fit into Component 2?",
     "idea": "Great Expectations as the one chosen literary heritage set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here Great Expectations by Charles Dickens, chosen from the list of six. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO1",
     "q": "What counts as a close knowledge and understanding of Great Expectations?",
     "idea": "Close understanding of Great Expectations, in a critical style with informed personal engagement",
     "content": "\"Learners must: demonstrate a close understanding of their heritage text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 10 of the 30 raw marks for Section B (Questions 11 to 22). The document's own model wordings show what such a question fastens on — a theme (\"many different forms of love in Pride and Prejudice\") or a setting (\"How does Dickens portray city life in Great Expectations?\") — so the characters, relationships, themes and key moments of Great Expectations must be known closely enough to be argued about, even though the examination is open book."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO2",
     "q": "What must be analysed in Great Expectations?",
     "idea": "How language, form and structure create effects in Great Expectations",
     "content": "Learners will demonstrate their knowledge and understanding of their text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 10 of the 30 raw marks for Section B."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO4",
     "q": "What must be said about the context of Great Expectations?",
     "idea": "The relationship between Great Expectations and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 10 of the 30 raw marks for Section B. This is the only section of Component 2 that carries AO4, which is 7% of the qualification."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for Great Expectations?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section B – Literary Heritage Texts",
     "q": "What does the Great Expectations question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on Great Expectations",
     "content": "\"Section B – Literary Heritage Texts: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1, AO2 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 11 to 22, carrying 10 marks AO1, 10 AO2 and 10 AO4 — the three objectives weigh equally. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", completely unmarked. Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE."
    },
    {
     "code": "Component 3, Assignment B – Literary Heritage Texts",
     "q": "How is Great Expectations assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on Great Expectations",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same literary heritage list. \"Assignment B – Literary Heritage Texts: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1, AO2 and AO4\", and \"will be marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"Assignment B must allow learners to access AO1, AO2 and AO4.\" Model formats given are \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" and \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" The advisory word count is 650–800 words; marking is on the five-level grid on a \"best fit\" basis, internally assessed and externally moderated by Pearson."
    }
   ]
  },
  {
   "id": "heritage-scarlet-letter",
   "component": "C2",
   "option": "literaryHeritage",
   "name": "The Scarlet Letter — Nathaniel Hawthorne",
   "caseStudies": [
    "The Scarlet Letter Nathaniel Hawthorne",
    "Prescribed edition(s), Appendix 3 (Component 2 is open book and learners or centres must purchase a prescribed edition of each of their set texts at the start of the course): Alma Classics, June 2015, ISBN 9781847494214; Penguin Books, June 2012, ISBN 9780141199450; OUP Oxford, October 2008, ISBN 9780199537808; Wordsworth Edition Classics, May 1992, ISBN 9781853260292"
   ],
   "ideas": [
    {
     "code": "Component 2: Content overview",
     "q": "How does The Scarlet Letter fit into Component 2?",
     "idea": "The Scarlet Letter as the one chosen literary heritage set text, studied whole",
     "content": "\"Learners will study two set texts for this component: one of the modern drama set texts and one of the literary heritage set texts\" — here The Scarlet Letter by Nathaniel Hawthorne, chosen from the list of six. The content overview requires learners to \"Develop skills to analyse how language, form, structure and contextual factors can be used to create meaning and effect\" and to \"Develop skills to maintain a critical style and informed personal response\". Teaching should focus on the study of whole texts, developing learners' comprehension and critical reading skills, as well as their ability to produce clear and coherent writing using accurate Standard English. Wider reading of literary texts is also encouraged to help learners develop their skills."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO1",
     "q": "What counts as a close knowledge and understanding of The Scarlet Letter?",
     "idea": "Close understanding of The Scarlet Letter, in a critical style with informed personal engagement",
     "content": "\"Learners must: demonstrate a close understanding of their heritage text; maintain a critical style; present an informed personal engagement; ... identify and use relevant examples from the text.\" AO1: \"Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement\" — 10 of the 30 raw marks for Section B (Questions 11 to 22). The document's own model wordings show what such a question fastens on — a theme (\"many different forms of love in Pride and Prejudice\") or a setting (\"How does Dickens portray city life in Great Expectations?\") — so the characters, relationships, themes and key moments of The Scarlet Letter must be known closely enough to be argued about, even though the examination is open book."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO2",
     "q": "What must be analysed in The Scarlet Letter?",
     "idea": "How language, form and structure create effects in The Scarlet Letter",
     "content": "Learners will demonstrate their knowledge and understanding of their text, \"including the ways in which writers use language, form and structure to create effects\", and must \"understand how writers create literary effects\" and \"understand and use appropriate literary terminology\". AO2: \"Analyse the language, form and structure used by a writer to create meanings and effects\" — 10 of the 30 raw marks for Section B."
    },
    {
     "code": "Section B: Literary Heritage Texts — AO4",
     "q": "What must be said about the context of The Scarlet Letter?",
     "idea": "The relationship between The Scarlet Letter and the context in which it was written",
     "content": "\"Learners should also understand the relationship between their text and the context in which it was written\", and must \"understand the influence of contextual factors on the interpretation of texts\". AO4: \"Show understanding of the relationships between texts and the contexts in which they were written\" — 10 of the 30 raw marks for Section B. This is the only section of Component 2 that carries AO4, which is 7% of the qualification."
    },
    {
     "code": "Understanding the relationship between a text and its context (AO4)",
     "q": "Which kinds of context must be taught for The Scarlet Letter?",
     "idea": "The five categories of context the specification names",
     "content": "There are different kinds, or categories, of context which affect writers' work and the reader's response to it. Teaching should include: the writer's own life and individual situation, including the place and time of writing, only where these relate to the text; the historical setting, time and location of the text; social and cultural contexts (for example, attitudes in society; expectations of different cultural groups); the literary context of the text, for example, literary movements or genres; the way in which texts are received and engaged with by different audiences, at different times (for example, how a text may be read differently in the 21st century from when it was written)."
    },
    {
     "code": "Assessment overview: Section B – Literary Heritage Texts",
     "q": "What does the The Scarlet Letter question look like and what may be taken in?",
     "idea": "One 30-mark open-book essay from a choice of two on The Scarlet Letter",
     "content": "\"Section B – Literary Heritage Texts: one 30-mark essay question from a choice of two on each of the set texts. This section assesses AO1, AO2 and AO4.\" In the Breakdown of assessment objectives and raw marks these are Questions 11 to 22, carrying 10 marks AO1, 10 AO2 and 10 AO4 — the three objectives weigh equally. \"This component is an open book examination and therefore learners may take a clean copy of the prescribed edition of the selected text into the examination room\", completely unmarked. Component 2 is 1 hour 30 minutes, 60 marks and 40% of the total International GCSE."
    },
    {
     "code": "Component 3, Assignment B – Literary Heritage Texts",
     "q": "How is The Scarlet Letter assessed on the coursework route?",
     "idea": "The non-examined alternative: a teacher-devised 30-mark assignment on The Scarlet Letter",
     "content": "Component 3 \"is available as an alternative to Component 2\" and uses the same literary heritage list. \"Assignment B – Literary Heritage Texts: one 30-mark essay response to a teacher-devised assignment on the studied text. This section assesses AO1, AO2 and AO4\", and \"will be marked out of 30 with 10 marks for AO1, 10 marks for AO2 and 10 marks for AO4\"; \"Assignment B must allow learners to access AO1, AO2 and AO4.\" Model formats given are \"Jane Austen allows the reader to see many different forms of love in Pride and Prejudice. To what extent do you agree? You must consider language, form and structure and refer to the context of the novel.\" and \"How does Dickens portray city life in Great Expectations? You must consider language, form and structure and refer to the context of the novel.\" The advisory word count is 650–800 words; marking is on the five-level grid on a \"best fit\" basis, internally assessed and externally moderated by Pearson."
    }
   ]
  }
 ]
};
module.exports = { SPEC_4ET1 };
