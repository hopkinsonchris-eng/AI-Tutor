/* AQA GCSE English Literature (8702) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_8702 = {
 "id": "AQA-8702",
 "board": "AQA",
 "subject": "English Literature",
 "code": "8702",
 "level": "GCSE",
 "version": "Version 1.3 28 September 2022",
 "firstExam": 2017,
 "firstTeaching": 2015,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Paper 1: Shakespeare and the 19th-century novel",
   "paperCode": "8702/1",
   "marks": 64,
   "weight": 40,
   "minutes": 105,
   "sections": [
    "Section A Shakespeare: \"students will answer one question on their play of choice. They will be required to write in detail about an extract from the play and then to write about the play as a whole.\" One question of 30 marks (AO1=12, AO2=12, AO3=6), plus 4 marks for AO4, which \"will be assessed on Section A only\" — 34 marks in all. Students answer on the one play they have studied from the six set texts of 3.1.1.",
    "Section B The 19th-century novel: \"students will answer one question on their novel of choice. They will be required to write in detail about an extract from the novel and then to write about the novel as a whole.\" One question of 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in this section. Students answer on the one novel they have studied from the seven set texts of 3.1.2."
   ],
   "openBook": false,
   "note": "How it's assessed (the document's three bullets): \"written exam: 1 hour 45 minutes\", \"64 marks\", \"40% of GCSE\". \"All assessments are closed book: any stimulus materials required will be provided as part of the assessment.\" \"All assessments are compulsory.\" Both sections begin from a printed extract. In the assessment weightings table the maximum raw mark for \"Shakespeare and the 19th-century novel\" is 64, the scaling factor is x1 and the maximum scaled mark is 64."
  },
  {
   "id": "C2",
   "name": "Paper 2: Modern texts and poetry",
   "paperCode": "8702/2",
   "marks": 96,
   "weight": 60,
   "minutes": 135,
   "sections": [
    "Section A Modern texts: \"students will answer one essay question from a choice of two on their studied modern prose or drama text.\" One question of 30 marks (AO1=12, AO2=12, AO3=6), plus 4 marks for AO4, which \"will be assessed on Section A only\" — 34 marks in all. Each question carries two \"Write about:\" bullets, the first on the ideas or characters, the second on \"how … presents these ideas by the ways he writes\".",
    "Section B Poetry: \"students will answer one comparative question on one named poem printed on the paper and one other poem from their chosen anthology cluster.\" One question of 30 marks (AO1=12, AO2=12, AO3=6); \"There are 30 marks for Section B and 32 marks for Section C.\" The named poem is reproduced on the paper; the second poem is chosen by the student from the same cluster.",
    "Section C Unseen poetry: \"Students will answer one question on one unseen poem and one question comparing this poem with a second unseen poem.\" Question 27.1 is 24 marks (AO1=12, AO2=12) on the first poem; Question 27.2 is 8 marks (AO2 only) comparing the two poems. \"There are … 32 marks for Section C.\" Both poems are printed on the paper and both questions are compulsory."
   ],
   "openBook": false,
   "note": "How it's assessed (the document's three bullets): \"written exam: 2 hour 15 minutes\", \"96 marks\", \"60% of GCSE\". The specimen paper's instructions read: \"Answer one question from Section A, one question from Section B and both questions in Section C\"; \"The maximum mark for this paper is 96\"; \"AO4 will be assessed in Section A. There are 4 marks available for AO4 in Section A in addition to 30 marks for answering the question.\" In the assessment weightings table the maximum raw mark for \"Modern texts and poetry\" is 96, the scaling factor is x1 and the maximum scaled mark is 96; the total scaled mark for the qualification is 160."
  }
 ],
 "options": [
  {
   "id": "shakespeare",
   "choose": 1,
   "label": "3.1.1 Shakespeare (Paper 1, Section A): \"Students will study one play from the list of six set texts. Students should study the whole text. Choose one of: Macbeth; Romeo and Juliet; The Tempest; The Merchant of Venice; Much Ado About Nothing; Julius Caesar.\"",
   "from": [
    "shakespeare-macbeth",
    "shakespeare-romeo-and-juliet",
    "shakespeare-the-tempest",
    "shakespeare-the-merchant-of-venice",
    "shakespeare-much-ado-about-nothing",
    "shakespeare-julius-caesar"
   ]
  },
  {
   "id": "novel",
   "choose": 1,
   "label": "3.1.2 The 19th-century novel (Paper 1, Section B): \"Students will study one novel from the list of seven set texts. Students should study the whole text. Choose one of:\" Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
   "from": [
    "novel-jekyll-and-hyde",
    "novel-a-christmas-carol",
    "novel-great-expectations",
    "novel-jane-eyre",
    "novel-frankenstein",
    "novel-pride-and-prejudice",
    "novel-the-sign-of-four"
   ]
  },
  {
   "id": "modernText",
   "choose": 1,
   "label": "3.2.1 Modern texts (Paper 2, Section A): \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text. Choose one of:\" the twelve rooms listed here — Drama: An Inspector Calls; Blood Brothers (musical version); DNA; A Taste of Honey; Princess & The Hustler (First teaching 2023, first exam 2025); Leave Taking (First teaching 2023, first exam 2025); Prose: Lord of the Flies; Telling Tales; Animal Farm; Anita and Me; Pigeon English; My Name is Leon (First teaching 2023, first exam 2025). Three further titles printed in the specification's tables can no longer be entered and have no room here, because the document marks each \"Last exam 2024\": Alan Bennett, The History Boys (Last exam 2024); Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Kazuo Ishiguro, Never Let Me Go (Last exam 2024).",
   "from": [
    "modern-an-inspector-calls",
    "modern-blood-brothers",
    "modern-dna",
    "modern-a-taste-of-honey",
    "modern-princess-and-the-hustler",
    "modern-leave-taking",
    "modern-lord-of-the-flies",
    "modern-telling-tales",
    "modern-animal-farm",
    "modern-anita-and-me",
    "modern-pigeon-english",
    "modern-my-name-is-leon"
   ]
  },
  {
   "id": "cluster",
   "choose": 1,
   "label": "3.2.2 Poetry (Paper 2, Section B): \"Students will study one cluster of poems taken from the AQA poetry anthology, Poems Past and Present. There is a choice of three clusters, each containing 15 poems.\" \"The titles of the three clusters are: Love and Relationships; Power and Conflict; Worlds and Lives (First teaching 2023, first exam 2025).\" \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\"",
   "from": [
    "poetry-love-and-relationships",
    "poetry-power-and-conflict",
    "poetry-worlds-and-lives"
   ]
  }
 ],
 "ao": [
  {
   "id": "AO1",
   "label": "Read, understand and respond to texts",
   "text": "Read, understand and respond to texts. Students should be able to: maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.",
   "weight": 37.5,
   "byComponent": {
    "C1": 15,
    "C2": 22.5
   }
  },
  {
   "id": "AO2",
   "label": "Analyse the language, form and structure used by a writer",
   "text": "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.",
   "weight": 42.5,
   "byComponent": {
    "C1": 15,
    "C2": 27.5
   }
  },
  {
   "id": "AO3",
   "label": "Texts and the contexts in which they were written",
   "text": "Show understanding of the relationships between texts and the contexts in which they were written.",
   "weight": 15,
   "byComponent": {
    "C1": 7.5,
    "C2": 7.5
   }
  },
  {
   "id": "AO4",
   "label": "Vocabulary, sentence structures, spelling and punctuation",
   "text": "Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.",
   "weight": 5,
   "byComponent": {
    "C1": 2.5,
    "C2": 2.5
   }
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Every extended answer on both papers is marked by levels, not points. \"Each long form answer mark scheme is constructed using six levels. This is to reflect the ability level of the whole cohort. There are five marks within each level to allow for levels of proficiency and to allow for discrimination between levels of cognitive ability across the whole cohort.\" The six levels are named Level 1 Simple, explicit comments; Level 2 Supported, relevant comments; Level 3 Explained, structured comments; Level 4 Clear understanding; Level 5 Thoughtful, developed consideration; Level 6 Convincing, critical analysis and exploration — 1–5, 6–10, 11–15, 16–20, 21–25 and 26–30 marks on every 30-mark question (Paper 1 Questions 1–13; Paper 2 Section A Questions 1–24 and Section B Questions 25–26, all of them 30 marks – AO1=12, AO2=12, AO3=6). Section C is marked on the same six levels but out of 24 (Question 27.1, 24 marks – AO1=12, AO2=12, with bands 1–4, 5–8, 9–12, 13–16, 17–20, 21–24), and Question 27.2 is marked on four levels of two marks each (1–2, 3–4, 5–6, 7–8), AO2 only, where \"Examiners must only credit points which are comparative.\" Each level carries two descriptors: \"a description of typical features of a response in each level, and a description of the kinds of skills candidates in that level will be proficient in\", with a separate AO1, AO2 and (outside Section C) AO3 strand. Marking is best fit: \"Since answers will rarely match a descriptor in all respects, examiners must allow good performance in some aspects to compensate for shortcomings in other respects. Consequently, the level is determined by the 'best fit' rather than requiring every element of the descriptor to be matched.\" Examiners \"Start at the lowest level of the mark scheme and use it as a ladder\", then place the mark within the level — \"if the response is predominantly level 3 with a small amount of level 4 material it would be placed in level 3 but be awarded a mark near the top of the level\". \"Indicative content in the mark scheme is provided as a guide for examiners. It is not intended to be exhaustive and you must credit other valid points.\" AO4 is assessed separately and only on Section A of each paper — 4 marks on three performance descriptors, not six levels: \"High performance\" 4 marks (\"spell and punctuate with consistent accuracy, and consistently use vocabulary and sentence structures to achieve effective control of meaning\"), \"Intermediate performance\" 2–3 marks (\"considerable accuracy … a considerable range of vocabulary and sentence structures to achieve general control of meaning\"), \"Threshold performance\" 1 mark (\"reasonable accuracy … any errors do not hinder meaning\"), and 0 where the candidate \"writes nothing or fails to meet threshold performance\". Ignoring a defining feature of a task outside AO1 and AO2 — context, for example — \"would be classed as a rubric infringement\". Marks are then scaled: \"The marks awarded on the papers will be scaled to meet the weighting of the components. Students' final marks will be calculated by adding together the scaled marks for each component. Grade boundaries will be set using this total scaled mark.\" The scaling table gives Shakespeare and the 19th-century novel 64 raw marks x1 = 64 scaled, Modern texts and poetry 96 raw marks x1 = 96 scaled, \"Total scaled mark: 160\" — so the raw marks are the scaled marks, and the qualification is graded 1 to 9 on that total of 160. The complete level descriptors for every question type are transcribed in levels.md beside this file.",
  "commandWords": [
   {
    "word": "Starting with this speech/extract, explain how far you think …",
    "means": "The Paper 1 Section A stem in its fullest form: \"Starting with this speech, explain how far you think Shakespeare presents Lady Macbeth as a powerful woman.\" \"How far\" invites a weighed judgement on a proposition, and \"Starting with\" fixes the method: the printed extract first, then the whole text. The two bullets divide the marks in practice — \"how Shakespeare presents Lady Macbeth in this speech\" and \"how Shakespeare presents Lady Macbeth in the play as a whole\" — and Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\", so an answer confined to the extract cannot reach the top levels.",
    "aoAssessed": "AO1, AO2, AO3 (+AO4 on Paper 1 Section A)"
   },
   {
    "word": "Starting with this extract/moment, explore how …",
    "means": "The exploratory variant: \"Starting with this moment in the play, explore how Shakespeare presents Prospero's use of his power\"; \"Starting with this extract, explore how Conan Doyle creates a sense of mystery.\" \"Explore\" is the verb of the top two levels — Level 6 is \"Convincing, critical analysis and exploration\" and asks for \"Exploration of effects of writer's methods on reader\" and \"Exploration of ideas/perspectives/contextual factors\" — so it licenses more than one reading rather than a single settled answer.",
    "aoAssessed": "AO1, AO2, AO3"
   },
   {
    "word": "Starting with this extract, how does … present …?",
    "means": "The commonest Paper 1 stem: \"Starting with this extract, how does Stevenson present Mr Hyde as a frightening outsider?\"; \"Starting with this extract, how does Brontë present Jane as a strong female character?\" \"How does … present\" is a question about the writer's methods, not about the character as a real person; the mark scheme's AO2 strand moves from \"Awareness of writer making deliberate choices\" at Level 1 to \"Analysis of writer's methods with subject terminology used judiciously\" at Level 6.",
    "aoAssessed": "AO1, AO2, AO3"
   },
   {
    "word": "Starting with this extract, write about how …",
    "means": "Used where the focus is a relationship or an idea rather than one character: \"Starting with this extract, write about how Dickens presents the unequal relationship between Pip and Estella\"; \"Starting with this extract, write about how Austen presents attitudes towards men.\" It demands the same extract-then-whole-text movement and the same three objectives; the indicative content lists AO1, AO2 and AO3 bullets for each of these questions, and examiners \"are encouraged to reward any valid interpretations\".",
    "aoAssessed": "AO1, AO2, AO3"
   },
   {
    "word": "How does … present …? (Paper 2, Section A)",
    "means": "The standard modern-text stem: \"How does Priestley explore responsibility in An Inspector Calls?\"; \"How does Delaney present prejudice in A Taste of Honey?\"; \"How does Kelman present Harrison's daily life?\" There is no extract — the text is not printed and the exam is closed book — so the whole text must be held in memory and the answer must range across it: Level 6 rewards a \"conceptualised approach to the full task\" with \"judicious use of precise references\".",
    "aoAssessed": "AO1, AO2, AO3 (+AO4)"
   },
   {
    "word": "How and why does … change …?",
    "means": "\"How and why does Sheila change in An Inspector Calls?\" A two-part demand: the trajectory of the change (how) and the writer's purpose in making it (why). The indicative content pairs \"How Sheila's attitude changes as the play develops\" with \"How Priestley uses the character of Sheila to voice attitudes of younger generation\", so the AO3 marks come from what the change is for, not from biography of the author.",
    "aoAssessed": "AO1, AO2, AO3 (+AO4)"
   },
   {
    "word": "How does … use the character of … to explore ideas about …?",
    "means": "\"How does Orwell use the character of Napoleon to explore ideas about power and control in Animal Farm?\"; \"How does Bennett use the character of Posner to explore ideas about belonging?\" The character is explicitly a device: the mark scheme's AO3 bullets are of the kind \"Napoleon as symbol of tyranny\" and \"Animal Farm as a warning about totalitarianism\", so character study that never reaches the idea stalls in the lower levels.",
    "aoAssessed": "AO1, AO2, AO3 (+AO4)"
   },
   {
    "word": "Do you think … is an important character …?",
    "means": "\"Do you think Piggy is an important character in Lord of the Flies?\" An invitation to an informed personal response — AO1 requires students to \"maintain a critical style and develop an informed personal response\" — but the marks still follow the methods and the ideas: the bullets ask \"how Golding presents the character of Piggy\" and \"how Golding uses Piggy to present ideas about people and society\".",
    "aoAssessed": "AO1, AO2, AO3 (+AO4)"
   },
   {
    "word": "What do you think is the importance of …?",
    "means": "\"What do you think is the importance of the 'beast' in Lord of the Flies?\" The question is about function and significance across the whole text — the indicative content offers \"The beast as a metaphor of external threat\", \"The beast as symbol of the ways authorities instil fear using threat\" — so a top answer argues what the thing does for the writer's design, supported by \"a range of judicious references\".",
    "aoAssessed": "AO1, AO2, AO3 (+AO4)"
   },
   {
    "word": "'…' How far is this idea important in …?",
    "means": "A quotation from the text is offered as a proposition: \"'All animals are equal, but some are more equal than others.' How far is this idea important in Animal Farm?\" \"How far\" is the weighed-judgement formula again; the first bullet asks \"what you think Orwell is saying about equality and inequality\", so the answer must argue a position and qualify it rather than agree flatly.",
    "aoAssessed": "AO1, AO2, AO3 (+AO4)"
   },
   {
    "word": "How do writers present … in '…' and in one other story from Telling Tales?",
    "means": "The stem used for the AQA Anthology Telling Tales: \"How do writers present characters losing their innocence in 'The Darkness Out There' and in one other story from Telling Tales?\" The mark scheme warns that this is not a comparison question: \"Examiners are reminded that while a comparatively structured response is permitted, comparative skills are not being assessed and should not be rewarded\", and \"Students are required to write about two stories from Telling Tales. In reference to questions 15 and 16 therefore where 'whole text' is referred to in the mark scheme it means two full stories.\"",
    "aoAssessed": "AO1, AO2, AO3 (+AO4)"
   },
   {
    "word": "Compare how poets present …",
    "means": "The Section B anthology stem: \"Compare how poets present attitudes towards a parent in 'Follower' and in one other poem from 'Love and relationships'.\" One poem is named and printed; the student chooses the second from the same cluster. The whole AO1 strand of the Section B grid is comparison — \"Simple comments relevant to comparison\" at Level 1 rising to \"Critical, exploratory comparison\" at Level 6 — so the essay must be built as a comparison throughout, not as two separate poem essays.",
    "aoAssessed": "AO1, AO2, AO3"
   },
   {
    "word": "Compare the ways poets present …",
    "means": "The same question in its methods-first wording: \"Compare the ways poets present ideas about power in 'Ozymandias' and in one other poem from 'Power and conflict'.\" \"The ways\" points the answer at form, structure and language; the indicative content compares \"Use of sonnet to explore ideas, possibly dealing with structural elements, such as use / effect of volta, rhyming couplet, line lengthening\" across poems.",
    "aoAssessed": "AO1, AO2, AO3"
   },
   {
    "word": "In '…', how does the poet present …?",
    "means": "The first unseen-poetry question: \"In 'To a Daughter Leaving Home', how does the poet present the speaker's feelings about her daughter?\" 24 marks, AO1=12 and AO2=12 — there is no AO3 strand in Section C, so context and biography earn nothing. The grid asks for \"a fine-grained and insightful analysis of language and form and structure\" of a poem the student has never seen.",
    "aoAssessed": "AO1, AO2"
   },
   {
    "word": "What are the similarities and/or differences between the ways the poets present …?",
    "means": "The second unseen question: \"In both 'Poem for My Sister' and 'To a Daughter Leaving Home' the speakers describe feelings about watching someone they love grow up. What are the similarities and/or differences between the ways the poets present those feelings?\" 8 marks, AO2 only, four levels of two marks, and \"Examiners must only credit points which are comparative\" — a paragraph about one poem alone scores nothing here.",
    "aoAssessed": "AO2"
   },
   {
    "word": "Write about: • … • how … presents … by the ways he/she writes",
    "means": "Not a command word but the bulleted rubric printed under almost every question, and the map of the marks. The first bullet is the substance (the character, the idea, the extract); the second is always the methods — \"how Priestley presents these ideas by the ways he writes\", \"how Shakespeare presents Lady Macbeth in the play as a whole\". Ignoring the second bullet forfeits the AO2 strand, which is 12 of the 30 marks.",
    "aoAssessed": "AO1, AO2"
   }
  ],
  "essayShapes": [
   {
    "marks": 34,
    "minutes": 56,
    "paper": "Paper 1, Section A — Shakespeare (Questions 1–6): 30 marks + AO4 4 marks",
    "structure": "One question on the chosen play, beginning from an extract printed on the paper: \"students will answer one question on their play of choice. They will be required to write in detail about an extract from the play and then to write about the play as a whole.\" Open by taking a position on the proposition in the stem (\"explain how far you think Shakespeare presents Lady Macbeth as a powerful woman\"), then work closely through the printed speech or extract, analysing specific choices of language, form and structure and their effect; then move outward to the whole play, tracking how the idea develops and changes across it; thread the contextual strand — \"ideas/perspectives/contextual factors\" — through the argument rather than bolting it on, since a response that ignores context is a rubric infringement; close on a qualified judgement. Level 6 (26–30) requires \"a critical, exploratory, well-structured argument. It takes a conceptualised approach to the full task supported by a range of judicious references. There will be a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology. Convincing exploration of one or more ideas/perspectives/contextual factors/interpretations.\" Level 5 (21–25) is \"thoughtful, detailed and developed … a considered approach to the full task with references integrated into interpretation; there will be a detailed examination of the effects of language and/or structure and/or form supported by apt use of subject terminology.\" The separate 4 AO4 marks reward writing that is spelled and punctuated \"with consistent accuracy\" and uses \"vocabulary and sentence structures to achieve effective control of meaning\". (Time: about 56 minutes. The specification gives only the whole-paper time, \"written exam: 1 hour 45 minutes\" for 64 marks; 105 minutes apportioned pro rata over 34 and 30 marks gives roughly 56 and 49 minutes, and reading the extract comes out of the 56.)"
   },
   {
    "marks": 30,
    "minutes": 49,
    "paper": "Paper 1, Section B — The 19th-century novel (Questions 7–13): 30 marks, no AO4",
    "structure": "The same extract-then-whole-text shape on the chosen novel: \"students will answer one question on their novel of choice. They will be required to write in detail about an extract from the novel and then to write about the novel as a whole.\" The stems are \"Starting with this extract, how does Stevenson present Mr Hyde as a frightening outsider?\" and the like, with two bullets — the extract, then the novel as a whole. Analyse the printed passage in detail (narrative perspective, patterning of sentences, imagery, the placing of the moment in the novel's structure), then argue the same case across the whole novel with references recalled from memory, since the exam is closed book; carry the AO3 strand as part of the argument — the mark scheme's context bullets are ideas such as \"Impact of evolutionary ideas on way Hyde is described\" and \"The relationship between the text and the gothic genre\", not author biography. AO4 is not assessed here, so the marks are entirely AO1=12, AO2=12, AO3=6; Level 4 (16–20) is \"clear, sustained and consistent … a focused response to the full task\", Level 6 (26–30) \"critical, exploratory, well-structured\". (Time: about 49 minutes, the pro-rata share of the 105-minute paper for 30 of its 64 marks.)"
   },
   {
    "marks": 34,
    "minutes": 48,
    "paper": "Paper 2, Section A — Modern texts (Questions 1–24): 30 marks + AO4 4 marks",
    "structure": "\"Students will answer one essay question from a choice of two on their studied modern prose or drama text\" — an essay with no extract and no text in front of them. Read both options before choosing; each carries two bullets, the first naming the substance and the second always the methods (\"how Priestley presents these ideas by the ways he writes\"). Open with a conceptualised line of argument on the whole text; build paragraphs that each make a point, support it with a precise remembered reference, analyse the writer's method — for drama, stage directions, the shape and length of speeches, dramatic devices, structure of the acts; for prose, narrative perspective, patterning, symbol — and then turn that analysis on the idea the question names; keep the AO3 strand running (\"Sheila's ideas about social responsibility\", \"Animal Farm as a warning about totalitarianism\"); conclude with a judgement that answers the question asked. Level 6 (26–30) wants \"a critical, exploratory, well-structured argument … a conceptualised approach to the full task supported by a range of judicious references\" and \"Convincing exploration of one or more ideas/perspectives/contextual factors/interpretations\"; Level 5 (21–25) \"a considered approach to the full task with references integrated into interpretation\". 4 further marks are available for AO4 here and nowhere else on this paper. (Time: about 48 minutes. The specification gives only the whole-paper time, \"written exam: 2 hour 15 minutes\" for 96 marks; 135 minutes apportioned pro rata over 34, 30 and 32 marks gives roughly 48, 42 and 45 minutes.)"
   },
   {
    "marks": 30,
    "minutes": 42,
    "paper": "Paper 2, Section B — Poetry, the anthology comparison (Questions 25–26): 30 marks",
    "structure": "\"Students will answer one comparative question on one named poem printed on the paper and one other poem from their chosen anthology cluster.\" The named poem is on the paper; the second is chosen from the fifteen studied poems and must be recalled in full. Choose the second poem for the strength of the comparison, not for how well it is known: every level descriptor in this section is written in terms of comparison, from \"Simple comments relevant to comparison\" (Level 1) through \"Clear comparison\" (Level 4) to \"Critical, exploratory comparison\" (Level 6). Build the essay on points of comparison rather than poem-by-poem: state the link or contrast, analyse how each poet's language, form and structure creates it, and weigh which does what — the indicative content compares sonnet structure, volta and rhyming couplet across poems, and the effects of a speaker's voice. Keep AO3 in play (\"Any valid points related to Romantic ideas about rulership\", \"Any valid points about literary / generic conventions\"). AO1=12, AO2=12, AO3=6; no AO4 marks. (Time: about 42 minutes, the pro-rata share of the 135-minute paper for 30 of its 96 marks.)"
   },
   {
    "marks": 24,
    "minutes": 34,
    "paper": "Paper 2, Section C — Unseen poetry, Question 27.1: 24 marks",
    "structure": "\"In 'To a Daughter Leaving Home', how does the poet present the speaker's feelings about her daughter?\" — one question on a poem never seen before, printed on the paper, marked out of 24 on six levels (1–4, 5–8, 9–12, 13–16, 17–20, 21–24) with AO1=12 and AO2=12 and no AO3 strand at all, so nothing is gained by guessing at the poet's life or period. Read the poem twice, decide what it is doing and what the speaker feels, and state that reading; then work through the poem's methods — imagery, word choice, sound, the shape of the lines, where the poem turns, the effect of the last line — always tying the method to the feeling. Level 6 (21–24) requires \"a critical, exploratory, well-structured argument … a conceptualised approach to the task supported by a range of judicious references\" and \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\"; Level 5 (17–20) is \"thoughtful, detailed and developed … a detailed examination of the effects of language and/or structure and/or form\". (Time: about 34 minutes, the pro-rata share of the 135-minute paper for 24 of its 96 marks, including reading the poem.)"
   },
   {
    "marks": 8,
    "minutes": 11,
    "paper": "Paper 2, Section C — Unseen poetry, Question 27.2, the comparison: 8 marks",
    "structure": "A second unseen poem is printed and the question names the shared subject: \"In both 'Poem for My Sister' and 'To a Daughter Leaving Home' the speakers describe feelings about watching someone they love grow up. What are the similarities and/or differences between the ways the poets present those feelings?\" Eight marks, AO2 only, on four levels of two marks each, and \"Examiners must only credit points which are comparative\" — so every sentence must hold both poems together. Do not re-analyse the first poem: make three or four sharp comparative points about the ways the two poets write — imagery, the language used of the child, form and structural features — each naming both poems. Level 4 (7–8) is \"Exploratory comparison of writers' use of language, structure and form with subject terminology used judiciously\" and \"Convincing comparison of effects of writers' methods on reader\"; Level 1 (1–2) is only \"Some links between writers' use of language or structure or form\". (Time: about 11 minutes, the pro-rata share of the 135-minute paper for 8 of its 96 marks.)"
   }
  ],
  "timingNote": "The specification prints only whole-paper times — Paper 1 \"written exam: 1 hour 45 minutes\" for 64 marks and Paper 2 \"written exam: 2 hour 15 minutes\" for 96 marks. No per-question time is given anywhere in the specification or the specimen papers, so essayShapes[].minutes are pro-rata splits by marks: Paper 1's 105 minutes over 34 and 30 marks gives about 56 and 49 minutes; Paper 2's 135 minutes over 34, 30, 24 and 8 marks gives about 48, 42, 34 and 11 minutes. Reading the printed extract or poem comes out of the section's own share."
 },
 "judged": {
  "score": 0.95,
  "coverage": 0.95,
  "fidelity": 0.95,
  "options": 0.95,
  "familyFit": 0.95,
  "at": "2026-09-15",
  "by": "self-judged in the building session against the course-builder skill’s references/judge.md, reading spec.pdf, 87021-SMS, 87022-SQP and 87022-SMS beside the draft",
  "invented": "none: every idea code is a specification section number (3.1.1, 3.1.2, 3.2.1, 3.2.2, 3.2.3, 3.3) plus the set text or statement it belongs to; no sub-code the document does not print is used, and the only paper codes given, 8702/1 and 8702/2, are the ones printed on the specimen papers and mark schemes.",
  "missing": "none: 3.1.1, 3.1.2, 3.2.1, 3.2.2, 3.2.3 and 3.3 are all rooms, every set text that can still be entered has its own room, all 45 anthology poems are key ideas, and every bullet and semicolon-separated clause of 3.3 is a key idea.",
  "changes": "The specification marks three modern texts \"Last exam 2024\" (The History Boys, The Curious Incident of the Dog in the Night-Time, Never Let Me Go): they have no rooms and are named as withdrawn in the modernText option label. Three modern texts and one poetry cluster are marked \"First teaching 2023, first exam 2025\" (Princess & The Hustler, Leave Taking, My Name is Leon, Worlds and Lives): the 2014 specimen materials predate them, so their rooms say so and are built from the specification’s own requirements and the question types the mark schemes define. First exams 2017; version 1.3, 28 September 2022.",
  "notes": "The two numbers the document does not print are the per-question times: the specification gives only \"1 hour 45 minutes\" for Paper 1 and \"2 hour 15 minutes\" for Paper 2, so essayShapes[].minutes are pro-rata splits by marks (56 + 49 = 105; 48 + 42 + 34 + 11 = 135) and say so in every shape and in markConventions.timingNote. The one asymmetry teachers most often miss is that AO4 is worth 4 marks on Section A of each paper and nothing anywhere else, so Paper 1 Section A is out of 34 and Section B out of 30; and that Section C carries no AO3 at all, which is why context earns nothing on the unseen poems."
 },
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/english/specifications/AQA-8702-SP-2015.PDF",
  "etag": "\"bda17-5e9b8d6bde8b6\"",
  "lastModified": "Wed, 28 Sep 2022 08:49:29 GMT",
  "length": 776727,
  "checkedAt": "2026-09-15T12:27:44.295Z"
 },
 "topics": [
  {
   "id": "shakespeare-macbeth",
   "component": "C1",
   "option": "shakespeare",
   "name": "Macbeth",
   "caseStudies": [
    "Macbeth — one of the six Shakespeare plays of 3.1.1: \"Students will study one play from the list of six set texts. Students should study the whole text.\" Choose one of: Macbeth; Romeo and Juliet; The Tempest; The Merchant of Venice; Much Ado About Nothing; Julius Caesar.",
    "Specimen Paper 1 (8702/1) Question 1: \"Starting with this speech, explain how far you think Shakespeare presents Lady Macbeth as a powerful woman.\" Write about: • how Shakespeare presents Lady Macbeth in this speech • how Shakespeare presents Lady Macbeth in the play as a whole [30 marks] AO4 [4 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\"."
   ],
   "ideas": [
    {
     "code": "3.1.1 Macbeth — Lady Macbeth",
     "q": "How far does Shakespeare present Lady Macbeth as a powerful woman?",
     "idea": "Lady Macbeth: power, its sources and its collapse",
     "content": "The set specimen question is on her, and the indicative content asks for \"Power in terms of status\", \"Lady Macbeth’s power in terms of her relationship\", \"Lady Macbeth as a powerful/effective character in the play\", \"How Lady Macbeth changes as the play develops\" and the \"Contrast between Act 1 and Act 3 and/or Act 5\". A student must be able to argue both sides: the force she exerts over Macbeth early in the play through her language of persuasion and her invocation of the supernatural, and how far that power is real, borrowed or temporary once the crown is won. The AO2 marks come from \"The use of language to suggest Lady Macbeth’s desperation for power\", \"The use and effect of imagery of the supernatural\" and \"The use and effect of pronouns to suggest power and control\"."
    },
    {
     "code": "3.1.1 Macbeth — Macbeth himself",
     "q": "How does Shakespeare present Macbeth’s ambition and its consequences?",
     "idea": "Macbeth: the soldier, the tyrant and the divided mind",
     "content": "Macbeth is the play’s centre and any question on ambition, kingship, guilt, violence or the supernatural runs through him. The student must be able to trace the whole arc — the praised soldier, the hesitating murderer of the soliloquies, the king who kills to keep the crown, the isolated tyrant of the last act — and to argue about what drives it: prophecy, his wife, or his own ambition. The methods that carry the marks are the soliloquies and asides that let the audience inside his thinking, the imagery of blood and of sleeplessness, and the contrast between what he says in public and in private."
    },
    {
     "code": "3.1.1 Macbeth — Banquo, Duncan and Macduff",
     "q": "How does Shakespeare use the other men of the play to measure Macbeth?",
     "idea": "Banquo, Duncan and Macduff as foils and as the play’s moral measure",
     "content": "Banquo hears the same prophecy and acts differently; Duncan is the good king whose murder is the play’s central crime; Macduff is the man whose grief and revenge restore order. A strong answer uses them as a measure of Macbeth rather than as plot furniture — arguing what Shakespeare gains by placing each beside him, how the audience is made to judge kingship, loyalty and manhood through the contrast, and how the return of Banquo as a ghost keeps the crime present on stage."
    },
    {
     "code": "3.1.1 Macbeth — The witches and the supernatural",
     "q": "What part do the witches play in what Macbeth does?",
     "idea": "The witches: prophecy, temptation and the question of responsibility",
     "content": "The indicative content names \"Attitudes towards the supernatural\" and \"Ideas about the soul/heaven and hell\" as contextual factors, so the witches are both characters and a way into AO3. The student must be able to argue how far they cause events and how far they only name what Macbeth already wants, and to analyse their distinct verse and equivocal language against the blank verse of the court — a question about power, fate and free will rather than about stage spectacle."
    },
    {
     "code": "3.1.1 Macbeth — Ambition, power and kingship",
     "q": "What does the play say about power and how it is achieved?",
     "idea": "Ambition, power and the nature of kingship",
     "content": "The mark scheme’s AO3 bullets for this play include \"Ideas about power and how it is achieved/perceived\" and \"Ideas about equality/status\". An answer must be able to argue what the play sets against ambition — the good king, the bonds of hospitality and loyalty, the order that Malcolm restores — and to show how Shakespeare’s structure makes the seizing of power and its unravelling one movement, so that power taken by violence has to be kept by violence."
    },
    {
     "code": "3.1.1 Macbeth — Guilt, conscience and the mind",
     "q": "How does Shakespeare present guilt and its effects?",
     "idea": "Guilt and conscience: what the murders do to the murderers",
     "content": "Guilt is the play’s inward subject and the reason both protagonists change: the student must be able to argue how Shakespeare externalises conscience — the hallucinated dagger, the ghost at the feast, the sleepwalking, the imagery of hands and water that cannot wash — and how the two characters exchange positions, so that the one who urged the crime is destroyed by it and the one who hesitated becomes indifferent to killing."
    },
    {
     "code": "3.1.1 Macbeth — The role of women",
     "q": "What does Macbeth suggest about the role of women?",
     "idea": "Ideas about the role of women, in the play and in its first audiences",
     "content": "A named AO3 bullet for this text is \"Ideas about the role of women\", with \"Contemporary reception towards Lady Macbeth’s behaviour in this speech and actions elsewhere in the play\". The student must be able to set Lady Macbeth against what the play and its first audiences expect of a wife and a woman, to bring in Lady Macduff and the witches as other versions of female power, and to weigh a contemporary reading of her behaviour against a modern one — the mark scheme allows for \"the contexts in which texts are engaged with by different audiences\"."
    },
    {
     "code": "3.1.1 Macbeth — Appearance, reality and equivocation",
     "q": "How does the play use the gap between what seems and what is?",
     "idea": "Appearance and reality: equivocation as the play’s method",
     "content": "From the witches’ paradoxes to the face that must hide what the heart knows, the play is built on saying one thing and meaning another. This is an AO2 idea as much as a thematic one: the student must be able to analyse antithesis, paradox and double meaning, show how the prophecies are literally true and practically false, and argue that Shakespeare makes the audience share Macbeth’s misreading so that the ending feels both inevitable and surprising."
    },
    {
     "code": "3.1.1 Macbeth — Form and structure",
     "q": "How must an answer on Macbeth move from the printed extract to the whole play?",
     "idea": "The extract-then-whole-play method Paper 1 rewards",
     "content": "Paper 1 Section A Shakespeare sets one question on the chosen play and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Shakespeare presents Lady Macbeth in this speech\" and \"how Shakespeare presents Lady Macbeth in the play as a whole\". A student must therefore be able to analyse a passage of Macbeth in fine detail (soliloquy and aside, the blank verse of the court against the chanting rhythm of the witches, imagery of blood, darkness, sleep and the supernatural, the use and effect of pronouns, and the structural placing of the moment in the play) and then argue the same case across the whole play, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.1 Macbeth — Context (AO3)",
     "q": "What counts as context for Macbeth, and how is it rewarded?",
     "idea": "AO3: the relationships between Macbeth and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Macbeth are: \"Ideas about power and how it is achieved/perceived\"; \"Ideas about the role of women\"; \"Attitudes towards the supernatural\"; \"Ideas about the soul/heaven and hell\"; \"Ideas about equality/status\"; \"Contemporary reception towards Lady Macbeth’s behaviour in this speech and actions elsewhere in the play\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.1 Macbeth — The question and its marks",
     "q": "What does the Macbeth question look like and what is it worth?",
     "idea": "One 34-mark extract-based question on Macbeth",
     "content": "The specimen paper's question 1 on Macbeth is: \"Starting with this speech, explain how far you think Shakespeare presents Lady Macbeth as a powerful woman.\" with \"Write about: • how Shakespeare presents Lady Macbeth in this speech • how Shakespeare presents Lady Macbeth in the play as a whole\" [30 marks] AO4 [4 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 56 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "shakespeare-romeo-and-juliet",
   "component": "C1",
   "option": "shakespeare",
   "name": "Romeo and Juliet",
   "caseStudies": [
    "Romeo and Juliet — one of the six Shakespeare plays of 3.1.1: \"Students will study one play from the list of six set texts. Students should study the whole text.\" Choose one of: Macbeth; Romeo and Juliet; The Tempest; The Merchant of Venice; Much Ado About Nothing; Julius Caesar.",
    "Specimen Paper 1 (8702/1) Question 2: \"Starting with this conversation, explain how far you think Shakespeare presents Lord Capulet as a good father.\" Write about: • how Shakespeare presents Lord Capulet in this extract • how Shakespeare presents Lord Capulet in the play as a whole [30 marks] AO4 [4 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\"."
   ],
   "ideas": [
    {
     "code": "3.1.1 Romeo and Juliet — Lord Capulet",
     "q": "How far is Lord Capulet presented as a good father?",
     "idea": "Lord Capulet: protector, patriarch and obstacle",
     "content": "The set specimen question is on him, and the indicative content asks for \"Lord Capulet as protector of his daughter\", \"Lord Capulet’s love for his daughter\", \"References to his ‘will’ and how this changes later in the play\" and references to \"‘consent’, ‘heart’ and other suggestions that Juliet has her own ‘choice’ and how this is changed later in the play\". The argument is a comparison across the play: the indulgent father who will not force his daughter, and the same man who threatens to disown her — with the \"Possible contrast between language Capulet uses to describe Juliet here and how he speaks to her in 3:5\" carrying the AO2 marks."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Juliet",
     "q": "How does Shakespeare present Juliet’s growth and her choices?",
     "idea": "Juliet: obedience, decision and isolation",
     "content": "Juliet moves from a daughter who will look on Paris because her mother asks it to a young woman who marries in secret, refuses her father, is abandoned by the Nurse and takes the Friar’s potion alone. A student must be able to argue that development through her language — the shared sonnet, the balcony scene’s inventiveness, the soliloquy before she drinks — and to set her decisions against what \"Ideas about the role of a parent in this society\" and \"Ideas about marriage in this society and its function\" would expect of her."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Romeo",
     "q": "How does Shakespeare present Romeo and his changes?",
     "idea": "Romeo: love, violence and haste",
     "content": "Romeo is the play’s test case for love: the conventional Petrarchan lover of the opening, the transformed speaker of the balcony scene, the man who kills Tybalt, and the figure who acts fastest at the very moment he should wait. The student must be able to analyse how his language changes with him and to argue how Shakespeare ties love and violence together in one character, rather than narrating what he does."
    },
    {
     "code": "3.1.1 Romeo and Juliet — The Nurse, Mercutio, Tybalt and Friar Laurence",
     "q": "How do the supporting characters shape the tragedy?",
     "idea": "The Nurse, Mercutio, Tybalt and the Friar: the adults and friends who help and fail the lovers",
     "content": "Each is a distinct method as well as a character: the Nurse’s prose and digression against the lovers’ verse, Mercutio’s wit and the turn his death gives the plot, Tybalt as the feud in one man, the Friar’s plan and its failure. A strong answer argues what Shakespeare uses each for — comic relief that darkens, the structural hinge at the centre of the play, the well-meant scheme that destroys — and how their withdrawal isolates Juliet."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Love",
     "q": "What kinds of love does the play present?",
     "idea": "Love: idealised, physical, familial and self-deceiving",
     "content": "The play sets several kinds of love beside each other — Romeo’s first infatuation, the sudden mutual love of the lovers, the Nurse’s and Mercutio’s bawdier accounts of it, the parental love that turns to threat. The student must be able to argue how the writing distinguishes them (shared sonnet form, religious imagery, light and dark) and what the play finally says about a love that cannot survive the world it is set in."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Conflict and the feud",
     "q": "How does Shakespeare present conflict?",
     "idea": "The feud: public violence and private consequence",
     "content": "The quarrel is present from the first scene and shapes the structure: brawl, Prince’s ban, the killings at the centre, the reconciliation over the bodies. A student must be able to argue how Shakespeare makes a public conflict into a private catastrophe, how the men of the play understand honour and provocation, and how the ending asks the audience to judge the cost of the feud to the city as well as to the families."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Family, duty and marriage",
     "q": "What does the play suggest about family duty and marriage?",
     "idea": "Family and duty: parents, children and the marriage market",
     "content": "The AO3 bullets for this text are about exactly this: \"Ideas about the role of a parent in this society\", \"Ideas about marriage in this society and its function\", and Capulet \"as responsible for Juliet’s marriage\". The answer must be able to explain what a marriage is for in the world of the play — alliance, property, status — and to weigh \"contemporary reception towards Lord Capulet, possibly contrasted with modern reception towards him as a parent\"."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Fate, time and haste",
     "q": "How does the play present fate and the pressure of time?",
     "idea": "Fate and haste: the star-crossed design and the speed of events",
     "content": "The Prologue tells the audience the ending before the play begins, and the action is compressed into a few days. A student must be able to argue the effect of that design — dramatic irony, the sense of a trap closing — and to analyse how Shakespeare marks time and hurry in the language, while holding open the question of how far the catastrophe is fate and how far it is the choices of the characters."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Form and structure",
     "q": "How must an answer on Romeo and Juliet move from the printed extract to the whole play?",
     "idea": "The extract-then-whole-play method Paper 1 rewards",
     "content": "Paper 1 Section A Shakespeare sets one question on the chosen play and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Shakespeare presents Lord Capulet in this extract\" and \"how Shakespeare presents Lord Capulet in the play as a whole\". A student must therefore be able to analyse a passage of Romeo and Juliet in fine detail (the contrast between the length of characters’ speeches and what that suggests about power and status, imagery of nature, particular word choices, repetition, the sonnet and the rhyming couplet, and the placing of the moment against a later scene) and then argue the same case across the whole play, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.1 Romeo and Juliet — Context (AO3)",
     "q": "What counts as context for Romeo and Juliet, and how is it rewarded?",
     "idea": "AO3: the relationships between Romeo and Juliet and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Romeo and Juliet are: \"Ideas about the role of a parent in this society\"; \"Ideas about marriage in this society and its function\"; \"Ideas/perceptions of Lord Capulet’s role as protector of Juliet\"; \"Ideas/perceptions of Lord Capulet as responsible for Juliet’s marriage\"; \"Ideas about contemporary reception towards Lord Capulet, possibly contrasted with modern reception towards him as a parent\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.1 Romeo and Juliet — The question and its marks",
     "q": "What does the Romeo and Juliet question look like and what is it worth?",
     "idea": "One 34-mark extract-based question on Romeo and Juliet",
     "content": "The specimen paper's question 2 on Romeo and Juliet is: \"Starting with this conversation, explain how far you think Shakespeare presents Lord Capulet as a good father.\" with \"Write about: • how Shakespeare presents Lord Capulet in this extract • how Shakespeare presents Lord Capulet in the play as a whole\" [30 marks] AO4 [4 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 56 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "shakespeare-the-tempest",
   "component": "C1",
   "option": "shakespeare",
   "name": "The Tempest",
   "caseStudies": [
    "The Tempest — one of the six Shakespeare plays of 3.1.1: \"Students will study one play from the list of six set texts. Students should study the whole text.\" Choose one of: Macbeth; Romeo and Juliet; The Tempest; The Merchant of Venice; Much Ado About Nothing; Julius Caesar.",
    "Specimen Paper 1 (8702/1) Question 3: \"Starting with this moment in the play, explore how Shakespeare presents Prospero’s use of his power.\" The mark scheme prints the two bullets without the \"Write about:\" heading used on the other questions: • how Shakespeare presents Prospero at this moment in the play • how Shakespeare presents Prospero’s use of power in the play as a whole [30 marks] AO4 [4 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\"."
   ],
   "ideas": [
    {
     "code": "3.1.1 The Tempest — Prospero",
     "q": "How does Shakespeare present Prospero’s use of his power?",
     "idea": "Prospero: magician, father, duke and jailer",
     "content": "The set specimen question is on him. The indicative content asks for \"Response to Prospero as a character, here and elsewhere in the play\", \"Response to Prospero’s behaviour and possible reasons for this\", \"Reasons for/motivation for Prospero’s attitude towards others\", his \"relationship with Ariel – both in the extract and elsewhere in the play\" and the \"Contrast between Prospero’s attitude/behaviour here and in a different part of the play\". A student must be able to argue whether his power is used justly, and to distinguish the kinds of power he holds — the AO3 bullet names \"familial power and political power\" as well as magic."
    },
    {
     "code": "3.1.1 The Tempest — Ariel",
     "q": "How does Shakespeare use Ariel?",
     "idea": "Ariel: service, obedience and the promise of freedom",
     "content": "Ariel performs almost every act of Prospero’s magic and asks repeatedly for release. The indicative content points to the \"Use of questions to demonstrate change in dynamic between Prospero and Ariel\", so a strong answer analyses the exchanges between them as a shifting negotiation rather than simple command, and argues what Shakespeare gains by making the audience sympathise with the servant who does the master’s work."
    },
    {
     "code": "3.1.1 The Tempest — Caliban",
     "q": "How does Shakespeare present Caliban?",
     "idea": "Caliban: the island’s claimant, the servant and the question of who the land belongs to",
     "content": "Caliban is the other servant, and the one who claims the island as inherited. A student must be able to argue how Shakespeare balances his violence and his eloquence, how his language about the island differs from the courtiers’, and how he is used to open the AO3 territory the mark scheme names as \"Shakespeare’s use of the location to explore ideas about society\" — including how different audiences have read him."
    },
    {
     "code": "3.1.1 The Tempest — Miranda, Ferdinand and the court party",
     "q": "How do the other characters test Prospero’s design?",
     "idea": "Miranda, Ferdinand, Antonio, Alonso and Gonzalo: the plot Prospero is directing",
     "content": "The lovers, the usurping brother, the guilty king and the counsellor are each moved about the island by Prospero. A strong answer treats them as parts of his design and asks what Shakespeare is doing with them — the parallel between Antonio’s old usurpation and the drunken plot, the education of Ferdinand, Miranda’s wonder at people she has never seen — rather than describing the sub-plots in turn."
    },
    {
     "code": "3.1.1 The Tempest — Power and control",
     "q": "What does the play say about power?",
     "idea": "Power and control: magic, mastery and who commands whom",
     "content": "Every relationship in the play is a relationship of power: master and spirit, master and slave, father and daughter, duke and usurper, and the drunken conspiracy that parodies them all. The student must be able to argue how Shakespeare keeps testing power against its justification, and to use the AO3 bullet \"Prospero as a character with power – including familial power and political power\" to connect the domestic and the political strands."
    },
    {
     "code": "3.1.1 The Tempest — Revenge and forgiveness",
     "q": "How far is Prospero’s forgiveness a real renunciation?",
     "idea": "Revenge and forgiveness: the play’s central choice",
     "content": "The named AO3 bullets are \"Ideas about revenge/vengeance and possible discussion of the extent to which it is justified\" and \"Ideas about the nature of vengeance/forgiveness and how Prospero embodies these qualities\". A student must be able to argue the turn at the end of the play — the giving up of magic, the pardon of men who have not repented, the final plea for release — and to weigh whether the play presents forgiveness as a triumph or a bargain."
    },
    {
     "code": "3.1.1 The Tempest — Freedom and servitude",
     "q": "How does the play present freedom and service?",
     "idea": "Freedom and servitude: the island as a place of bondage",
     "content": "Ariel serves for a promised release, Caliban serves under threat, Ferdinand is set to carry logs, and the play closes with Prospero asking the audience to set him free. A strong answer argues this as a pattern rather than a list, analysing how the language of chains, labour and liberty runs through the play and what Shakespeare makes of a ruler whose own freedom depends on renouncing power."
    },
    {
     "code": "3.1.1 The Tempest — Illusion, art and the island",
     "q": "How does Shakespeare use illusion and the setting?",
     "idea": "Illusion and the island: storm, masque and the theatre itself",
     "content": "The play begins in a storm that is not real and ends with a speech to the audience; in between are music, banquets that vanish and a masque that is broken off. The student must be able to analyse these as staged effects with meanings — the \"structural significance of this moment in the play\" is a named AO2 bullet — and to argue how the island lets Shakespeare \"explore ideas about society\" by remaking it, as the AO3 bullet puts it."
    },
    {
     "code": "3.1.1 The Tempest — Form and structure",
     "q": "How must an answer on The Tempest move from the printed extract to the whole play?",
     "idea": "The extract-then-whole-play method Paper 1 rewards",
     "content": "Paper 1 Section A Shakespeare sets one question on the chosen play and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Shakespeare presents Prospero at this moment in the play\" and \"how Shakespeare presents Prospero’s use of power in the play as a whole\". A student must therefore be able to analyse a passage of The Tempest in fine detail (the use of questions to change the dynamic between characters, particular word choices and emphatic statement, the structural significance of a moment in a tightly compressed action, and the play’s masques, music and stage illusion) and then argue the same case across the whole play, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.1 The Tempest — Context (AO3)",
     "q": "What counts as context for The Tempest, and how is it rewarded?",
     "idea": "AO3: the relationships between The Tempest and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for The Tempest are: \"Ideas about forgiveness possibly linked to ideas about status and power\"; \"Ideas about revenge/vengeance and possible discussion of the extent to which it is justified\"; \"Prospero as a character with power – including familial power and political power\"; \"Ideas about the nature of vengeance/forgiveness and how Prospero embodies these qualities\"; \"Shakespeare’s use of the location to explore ideas about society\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.1 The Tempest — The question and its marks",
     "q": "What does the The Tempest question look like and what is it worth?",
     "idea": "One 34-mark extract-based question on The Tempest",
     "content": "The specimen paper's question 3 on The Tempest is: \"Starting with this moment in the play, explore how Shakespeare presents Prospero’s use of his power.\" with the two bullets, which the mark scheme prints without the \"Write about:\" heading used on the other five plays: • how Shakespeare presents Prospero at this moment in the play • how Shakespeare presents Prospero’s use of power in the play as a whole [30 marks] AO4 [4 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 56 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "shakespeare-the-merchant-of-venice",
   "component": "C1",
   "option": "shakespeare",
   "name": "The Merchant of Venice",
   "caseStudies": [
    "The Merchant of Venice — one of the six Shakespeare plays of 3.1.1: \"Students will study one play from the list of six set texts. Students should study the whole text.\" Choose one of: Macbeth; Romeo and Juliet; The Tempest; The Merchant of Venice; Much Ado About Nothing; Julius Caesar.",
    "Specimen Paper 1 (8702/1) Question 4: \"Starting with this speech, how does Shakespeare present Shylock’s feelings about the way he is treated?\" Write about: • how Shakespeare presents Shylock in this speech • how Shakespeare presents Shylock in the play as a whole [30 marks] AO4 [4 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\"."
   ],
   "ideas": [
    {
     "code": "3.1.1 The Merchant of Venice — Shylock",
     "q": "How does Shakespeare present Shylock’s feelings about the way he is treated?",
     "idea": "Shylock: outsider, creditor and victim",
     "content": "The set specimen question is on him. The indicative content asks for \"Response to Shylock in this extract and elsewhere in the play\", \"Shylock’s behaviour and whether or not it is justified – both here and elsewhere in the play\", \"Shylock’s refusal to lend money and possible reasons for/reactions to this\" and \"Shylock’s treatment at the hands of Antonio and others\". The AO2 marks come from the \"Use and effect of questions\", \"anecdotal speech\", the \"Effect of repetition: ‘monies’ etc\" and the \"imagery of dog/cur\", and the AO3 bullets name him as \"outsider/victim of society\" and \"pariah\"."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Portia",
     "q": "How does Shakespeare present Portia?",
     "idea": "Portia: heiress, advocate and the play’s cleverest speaker",
     "content": "Portia is bound by her father’s will at the start and controls the trial by the end. A student must be able to argue that movement — the caskets, the disguise, the speech on mercy, the trick with the rings — and to analyse how her language changes register between Belmont and the Venetian court, so that the play’s legal victory belongs to the character with least formal standing."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Antonio and Bassanio",
     "q": "How does Shakespeare present Antonio and Bassanio?",
     "idea": "Antonio and Bassanio: friendship, debt and the bond",
     "content": "The bond that drives the plot is made for friendship, and the play opens with Antonio’s unexplained sadness. A strong answer argues what Shakespeare does with the pair — the contrast between the merchant’s risk and the suitor’s borrowing, the treatment Antonio gives Shylock before he needs him, and how the ring plot sets friendship against marriage at the close."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Jessica, Lorenzo and Launcelot",
     "q": "How do the secondary characters extend the play’s ideas?",
     "idea": "Jessica, Lorenzo and the servants: conversion, escape and comic parallel",
     "content": "Jessica leaves her father’s house with his money and marries a Christian; Launcelot changes masters; the lesser lovers mirror the greater. The student must be able to argue why Shakespeare puts these plots beside the bond — what they add to the presentation of family, faith and belonging — rather than retelling them."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Prejudice and the outsider",
     "q": "How does the play present prejudice?",
     "idea": "Prejudice: how Venice treats those outside it",
     "content": "The named AO3 bullets are \"Attitudes towards Shylock, possibly contrasting contemporary with modern reception\", \"Shylock as outsider/victim of society\" and \"Shylock as pariah\". A student must be able to argue how the play both stages prejudice and invites judgement on it, using the treatment Shylock reports and the language others use of him, and must be able to weigh how differently the play has been received by audiences at different times."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Mercy and justice",
     "q": "How does the play set mercy against justice?",
     "idea": "Mercy and justice: the bond, the letter of the law and the trial",
     "content": "The trial turns on whether the law can be kept and mercy still shown, and the play lets the same law that would have killed Antonio destroy Shylock. A strong answer argues the structure of that reversal, analyses the rhetoric of the mercy speech against the legal quibble that follows it, and asks whether the play endorses the judgement it delivers."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Money, usury and value",
     "q": "What does the play say about money?",
     "idea": "Money, usury and worth: bonds, ventures and caskets",
     "content": "A named AO3 bullet is \"Attitudes towards usury\". The student must be able to explain what lending at interest meant to the play’s first audiences and how Shakespeare sets it against merchant venture and against the caskets’ test of value, so that money, love and worth are measured against each other throughout."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Love, disguise and comedy",
     "q": "How does the play work as a comedy?",
     "idea": "Love, disguise and the shape of comedy",
     "content": "The play ends in marriages, as a comedy must, but leaves one figure outside them. A student must be able to analyse the conventions — disguise, the double plot, the movement between city and country house, the final reconciliation — and argue about the effect of that exclusion on an audience, which is the AO2 and AO3 strands working together."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Form and structure",
     "q": "How must an answer on The Merchant of Venice move from the printed extract to the whole play?",
     "idea": "The extract-then-whole-play method Paper 1 rewards",
     "content": "Paper 1 Section A Shakespeare sets one question on the chosen play and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Shakespeare presents Shylock in this speech\" and \"how Shakespeare presents Shylock in the play as a whole\". A student must therefore be able to analyse a passage of The Merchant of Venice in fine detail (the use and effect of questions, anecdotal speech, repetition, and animal imagery, together with the alternation of Venice and Belmont and the placing of a speech in the play’s structure) and then argue the same case across the whole play, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.1 The Merchant of Venice — Context (AO3)",
     "q": "What counts as context for The Merchant of Venice, and how is it rewarded?",
     "idea": "AO3: the relationships between The Merchant of Venice and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for The Merchant of Venice are: \"Attitudes towards usury\"; \"Attitudes towards Shylock, possibly contrasting contemporary with modern reception\"; \"Shylock as outsider/victim of society\"; \"Shylock as pariah\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.1 The Merchant of Venice — The question and its marks",
     "q": "What does the The Merchant of Venice question look like and what is it worth?",
     "idea": "One 34-mark extract-based question on The Merchant of Venice",
     "content": "The specimen paper's question 4 on The Merchant of Venice is: \"Starting with this speech, how does Shakespeare present Shylock’s feelings about the way he is treated?\" with \"Write about: • how Shakespeare presents Shylock in this speech • how Shakespeare presents Shylock in the play as a whole\" [30 marks] AO4 [4 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 56 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "shakespeare-much-ado-about-nothing",
   "component": "C1",
   "option": "shakespeare",
   "name": "Much Ado About Nothing",
   "caseStudies": [
    "Much Ado About Nothing — one of the six Shakespeare plays of 3.1.1: \"Students will study one play from the list of six set texts. Students should study the whole text.\" Choose one of: Macbeth; Romeo and Juliet; The Tempest; The Merchant of Venice; Much Ado About Nothing; Julius Caesar.",
    "Specimen Paper 1 (8702/1) Question 5: \"Starting with this conversation, explore how Shakespeare presents attitudes towards women in Much Ado About Nothing.\" Write about: • what Claudio says about Hero in this conversation • how Shakespeare presents attitudes towards women in the play as a whole [30 marks] AO4 [4 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\"."
   ],
   "ideas": [
    {
     "code": "3.1.1 Much Ado About Nothing — Hero",
     "q": "How is Hero presented, and what does that show about attitudes towards women?",
     "idea": "Hero: silence, slander and restoration",
     "content": "The set specimen question begins from a conversation about her, and the indicative content asks for \"Hero’s lack of voice in this extract, compared with her behaviour elsewhere in the play\" and, as AO2, \"Hero’s absence of speech in this extract\". A student must be able to argue that Shakespeare makes her silence meaningful — she is discussed, valued and repudiated by others — and to set the language of \"‘maid’ ‘precious gift’ etc, contrasted with ‘rotten orange’ etc\" against her treatment at the wedding and her return."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Beatrice",
     "q": "How does Shakespeare present Beatrice?",
     "idea": "Beatrice: wit, resistance and the limits of her power",
     "content": "Beatrice is the play’s sharpest speaker and the contrast the mark scheme names — \"Contrast between Hero and Beatrice\" is an AO3 bullet. The student must be able to analyse her prose wit and its shift after the wedding scene, argue how far her independence survives her marriage, and use her demand for action on Hero’s behalf to show what a woman in this play can and cannot do."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Benedick and Claudio",
     "q": "How does Shakespeare present the two soldiers?",
     "idea": "Benedick and Claudio: two versions of a man in love",
     "content": "The play pairs them deliberately: one talks himself out of love and into it, the other falls in love by report and turns on his bride on the word of a stranger. A strong answer argues the comparison — Claudio’s reliance on other men’s eyes, Benedick’s change of side at the wedding — and analyses \"Claudio’s speech and behaviour in this extract\" and \"Don Pedro’s speech and behaviour in this extract\" as the indicative content asks."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Don John, Leonato and Dogberry",
     "q": "How do the other characters drive the plot?",
     "idea": "Don John, Leonato and Dogberry: malice, authority and accident",
     "content": "The deception is set going by Don John, believed by Leonato, and undone by the least competent characters in the play. A student must be able to argue what Shakespeare does with that arrangement — how easily the slander is believed, how the father sides against his daughter, and how the comic watch delivers the truth the clever characters miss — which is also a route into \"Exploration of features of the genre of comedy\"."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Attitudes towards women and honour",
     "q": "What does the play say about women and honour?",
     "idea": "Honour: reputation, chastity and who decides it",
     "content": "The AO3 bullets name \"Attitudes towards women in terms of their admirable qualities\", \"Hero as object to be bartered\" and \"Ideas/attitudes towards ‘honour’\". A student must be able to explain how a woman’s standing in this world depends on a reputation others control, to argue how Shakespeare exposes that, and to compare how the play’s first audiences and a modern audience judge Claudio and Leonato."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Love and marriage",
     "q": "How does the play present love and marriage?",
     "idea": "Love and marriage: courtship, bargaining and the two couples",
     "content": "One couple is brought together by a trick, the other pulled apart by one; one marriage is arranged between men, the other negotiated between equals. The student must be able to argue what the pairing is for, analysing how differently the two couples speak of love, and what the ending suggests about the marriages it arranges."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Deception and noting",
     "q": "How does Shakespeare use deception?",
     "idea": "Deception and mis-noting: overhearing as the play’s engine",
     "content": "Almost every turn of the plot depends on someone hearing or seeing something arranged for them, and the title puns on noting. A strong answer treats this as an AO2 idea: the structural repetition of the overhearing scenes, benign and malicious, and the effect on an audience who always know more than the characters."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Comedy as a genre",
     "q": "How far does the play stay a comedy?",
     "idea": "The genre of comedy and the play’s near-tragedy",
     "content": "A named AO3 bullet is \"Exploration of features of the genre of comedy\". The student must be able to set the play against its genre — wit, disguise, the movement to marriage — and argue the effect of the wedding scene and the reported death, where a comedy comes close to something else and the audience is invited to notice the join."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Form and structure",
     "q": "How must an answer on Much Ado About Nothing move from the printed extract to the whole play?",
     "idea": "The extract-then-whole-play method Paper 1 rewards",
     "content": "Paper 1 Section A Shakespeare sets one question on the chosen play and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"what Claudio says about Hero in this conversation\" and \"how Shakespeare presents attitudes towards women in the play as a whole\". A student must therefore be able to analyse a passage of Much Ado About Nothing in fine detail (the language used to describe a character and its reversal, a character’s absence of speech, repetition, particular word choices, and the dramatic nature of a moment within the shape of a comedy) and then argue the same case across the whole play, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — Context (AO3)",
     "q": "What counts as context for Much Ado About Nothing, and how is it rewarded?",
     "idea": "AO3: the relationships between Much Ado About Nothing and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Much Ado About Nothing are: \"Attitudes towards women in terms of their admirable qualities\"; \"Contrast between Hero and Beatrice\"; \"Hero as object to be bartered\"; \"Ideas/attitudes towards ‘honour’\"; \"Exploration of features of the genre of comedy\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.1 Much Ado About Nothing — The question and its marks",
     "q": "What does the Much Ado About Nothing question look like and what is it worth?",
     "idea": "One 34-mark extract-based question on Much Ado About Nothing",
     "content": "The specimen paper's question 5 on Much Ado About Nothing is: \"Starting with this conversation, explore how Shakespeare presents attitudes towards women in Much Ado About Nothing.\" with \"Write about: • what Claudio says about Hero in this conversation • how Shakespeare presents attitudes towards women in the play as a whole\" [30 marks] AO4 [4 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 56 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "shakespeare-julius-caesar",
   "component": "C1",
   "option": "shakespeare",
   "name": "Julius Caesar",
   "caseStudies": [
    "Julius Caesar — one of the six Shakespeare plays of 3.1.1: \"Students will study one play from the list of six set texts. Students should study the whole text.\" Choose one of: Macbeth; Romeo and Juliet; The Tempest; The Merchant of Venice; Much Ado About Nothing; Julius Caesar.",
    "Specimen Paper 1 (8702/1) Question 6: \"Starting with this speech, write about how Shakespeare explores ambition in Julius Caesar.\" Write about: • what Brutus says about ambition in this speech • how Shakespeare explores ambition in the play as a whole [30 marks] AO4 [4 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\"."
   ],
   "ideas": [
    {
     "code": "3.1.1 Julius Caesar — Brutus",
     "q": "How does Shakespeare present Brutus and his reasoning?",
     "idea": "Brutus: honour, self-persuasion and the public good",
     "content": "The set specimen question starts from his soliloquy, and the indicative content asks for \"Brutus’s attitude towards Caesar\", \"Brutus’s attitude towards leadership and ambition\", \"Brutus’s feelings about assassination and its rationale\" and his \"character and motivation elsewhere in the play\". The AO2 bullets name \"The development of the soliloquy as firming Brutus’s resolve\" and the \"Use and effect of imagery such as ‘ladder’, ‘egg’, ‘snake’\", so the argument is about how the language of a speech performs the act of talking oneself into something."
    },
    {
     "code": "3.1.1 Julius Caesar — Caesar",
     "q": "How does Shakespeare present Caesar?",
     "idea": "Caesar: the man, the office and the name that outlives him",
     "content": "Caesar is on stage for less than half the play and dominates all of it. A student must be able to argue the gap between the public figure and the man who is deaf, superstitious and easily flattered, and to show how Shakespeare keeps him present after his death — through the will, the ghost and the use others make of his name — which is the play’s clearest statement about power and its symbols."
    },
    {
     "code": "3.1.1 Julius Caesar — Cassius",
     "q": "How does Shakespeare present Cassius?",
     "idea": "Cassius: envy, persuasion and the conspiracy’s engineer",
     "content": "Cassius recruits Brutus and loses every argument to him afterwards. A strong answer analyses his rhetoric — the anecdotes, the flattery, the appeal to Brutus’s name — and argues the pairing of the two men: the politician who understands people and the idealist who does not, and what Shakespeare gains by making their quarrel and reconciliation the play’s emotional centre."
    },
    {
     "code": "3.1.1 Julius Caesar — Mark Antony and the crowd",
     "q": "How does Shakespeare present Antony and the plebeians?",
     "idea": "Antony and the crowd: oratory as an instrument of power",
     "content": "The two funeral speeches are the play’s set piece and its lesson in how power is actually won. The student must be able to compare Brutus’s prose reasoning with Antony’s verse, analyse the repetition, irony and staging Antony uses, and argue what the play suggests about a crowd that can be turned within a single scene."
    },
    {
     "code": "3.1.1 Julius Caesar — Ambition",
     "q": "How does Shakespeare explore ambition?",
     "idea": "Ambition: the charge, the justification and the reality",
     "content": "Ambition is the word the conspirators use to justify the killing and the word Antony turns against them. A named AO3 bullet is \"Ideas about ambition and how it is perceived in the society of the play\", with a \"Comparison between the ways ambition is viewed at this moment with how it is used elsewhere in the play\". A student must be able to argue how the play makes ambition a matter of interpretation rather than of fact."
    },
    {
     "code": "3.1.1 Julius Caesar — Power, leadership and republic",
     "q": "What does the play say about leadership?",
     "idea": "Power and leadership: what makes a good or bad ruler",
     "content": "The AO3 bullets name \"Ideas about the nature of power and leadership shown in this extract and in the play\" and \"Ideas about the qualities of a good/bad leader\". The answer must be able to weigh the play’s rulers and would-be rulers against each other, and to argue what is lost when the republic is defended by assassination and ends in civil war."
    },
    {
     "code": "3.1.1 Julius Caesar — Honour, friendship and betrayal",
     "q": "How does the play present honour and betrayal?",
     "idea": "Honour, friendship and betrayal: the private cost of a public act",
     "content": "The murder is committed by Caesar’s friend in the name of honour, and the play is full of men appealing to it. A strong answer argues how Shakespeare tests the word — through the conspirators’ oath-free plot, the quarrel scene, Portia and Calphurnia’s exclusion, and the deaths at Philippi — rather than accepting any character’s account of himself."
    },
    {
     "code": "3.1.1 Julius Caesar — Omens, fate and persuasion",
     "q": "How does the play use omens and rhetoric?",
     "idea": "Omens, fate and reading the signs",
     "content": "Storms, dreams, soothsayers and misread portents run through the play, and every character interprets them to suit a purpose. The student must be able to analyse the effect of that patterning — the dramatic irony of warnings ignored — and to connect it to the play’s wider concern with persuasion: signs, like speeches, mean what the cleverest speaker says they mean."
    },
    {
     "code": "3.1.1 Julius Caesar — Form and structure",
     "q": "How must an answer on Julius Caesar move from the printed extract to the whole play?",
     "idea": "The extract-then-whole-play method Paper 1 rewards",
     "content": "Paper 1 Section A Shakespeare sets one question on the chosen play and students \"will be required to write in detail about an extract from the play and then to write about the play as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"what Brutus says about ambition in this speech\" and \"how Shakespeare explores ambition in the play as a whole\". A student must therefore be able to analyse a passage of Julius Caesar in fine detail (the use and effect of pauses, enjambment and caesura, the development of a soliloquy, sustained imagery, and the set-piece public speeches against the private scenes) and then argue the same case across the whole play, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.1 Julius Caesar — Context (AO3)",
     "q": "What counts as context for Julius Caesar, and how is it rewarded?",
     "idea": "AO3: the relationships between Julius Caesar and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Julius Caesar are: \"Ideas about ambition and how it is perceived in the society of the play\"; \"Comparison between the ways ambition is viewed at this moment with how it is used elsewhere in the play\"; \"Ideas about the nature of power and leadership shown in this extract and in the play\"; \"Ideas about the qualities of a good/bad leader shown in this extract and in the play\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.1 Julius Caesar — The question and its marks",
     "q": "What does the Julius Caesar question look like and what is it worth?",
     "idea": "One 34-mark extract-based question on Julius Caesar",
     "content": "The specimen paper's question 6 on Julius Caesar is: \"Starting with this speech, write about how Shakespeare explores ambition in Julius Caesar.\" with \"Write about: • what Brutus says about ambition in this speech • how Shakespeare explores ambition in the play as a whole\" [30 marks] AO4 [4 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 56 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "novel-jekyll-and-hyde",
   "component": "C1",
   "option": "novel",
   "name": "Robert Louis Stevenson: The Strange Case of Dr Jekyll and Mr Hyde",
   "caseStudies": [
    "Robert Louis Stevenson | The Strange Case of Dr Jekyll and Mr Hyde — one of the seven set texts of 3.1.2 The 19th-century novel: \"Students will study one novel from the list of seven set texts. Students should study the whole text.\" The seven, as the specification’s table prints them: Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
    "Specimen Paper 1 (8702/1) Question 7: \"Starting with this extract, how does Stevenson present Mr Hyde as a frightening outsider?\" Write about: • how Stevenson presents Mr Hyde in this extract • how Stevenson presents Mr Hyde as a frightening outsider in the novel as a whole [30 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". No AO4 marks are awarded in Section B — \"AO4 will be assessed on Section A only\"."
   ],
   "ideas": [
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Mr Hyde",
     "q": "How does Stevenson present Hyde as a frightening outsider?",
     "idea": "Hyde: the figure everyone recoils from and nobody can describe",
     "content": "The set specimen question is on him. The indicative content asks for \"Mr Hyde’s behaviour and reactions to Utterson\" and the \"Use and effect of particular word choices to describe Mr Hyde’s physical appearance and behaviour\", with the \"Effects of mention of ‘Satan’\". A student must be able to argue that the horror is produced by suggestion and by other people’s responses rather than by description, and to link that method to the contextual bullets the mark scheme names: the \"Impact of evolutionary ideas on way Hyde is described\" and \"Ideas about primitive nature within man: ‘troglodytic’ etc\"."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Dr Jekyll",
     "q": "How does Stevenson present Jekyll?",
     "idea": "Jekyll: the respectable man and his account of himself",
     "content": "Jekyll is a reputable doctor for most of the book and its confessing narrator at the end. The student must be able to argue the relation between the two — how much of Jekyll’s statement to believe, how his pursuit of pleasure is framed by the need to keep a reputation, and what Stevenson gains by withholding the explanation until the final chapter."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Utterson",
     "q": "How does Stevenson use Utterson?",
     "idea": "Utterson: the reticent lawyer through whose eyes the reader searches",
     "content": "The indicative content asks for \"Utterson’s behaviour and reactions to Mr Hyde\", \"Utterson’s shock and confusion\" and \"Utterson’s attempt to understand his fear of Mr Hyde\", with, as AO2, his \"use of questions\" and the \"Use of triplets to reinforce Utterson’s reactions\". A strong answer argues that Stevenson makes a discreet, incurious man the investigator precisely so that discovery is slow and reluctant."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Lanyon, Enfield and Poole",
     "q": "How do the minor characters build the mystery?",
     "idea": "Lanyon, Enfield and Poole: witnesses, gossip and the closing of ranks",
     "content": "The story reaches the reader through men who half-tell what they know. A student must be able to argue how Stevenson uses professional friendship and discretion — the rule against asking questions, the sealed letter, the servant who will not name what he has seen — to make silence part of the horror, and to connect this to the AO3 bullet on \"Social attitudes/acceptability, illustrated with ‘common friends’ etc\"."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Duality",
     "q": "How does the novel present the divided self?",
     "idea": "Duality: the double nature of one man and of his city",
     "content": "The novel’s governing idea is doubleness, and the AO3 bullet \"Ideas about primitive nature within man\" points straight at it. The student must be able to argue how the doubling works at every level — the two names, the two doors of one building, the respectable street and the sordid one, the contrast between what is done by day and by night — and what the novel implies about how much of a respectable man is Hyde."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Reputation and respectability",
     "q": "What does the novel say about respectability?",
     "idea": "Reputation: the pressure that makes concealment necessary",
     "content": "A named AO3 bullet is \"The ways in which social attitudes towards behaviour might impact upon what is frightening\". A student must be able to argue that Jekyll’s experiment is driven by the need to keep a public character intact, and that the novel’s most frightening suggestion is about the society that requires the concealment rather than about the creature it produces."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Science, knowledge and its limits",
     "q": "How does the novel present science?",
     "idea": "Science and transgression: the experiment and the closed cabinet",
     "content": "Two doctors stand for two kinds of knowledge, and the novel sets the transcendental against the conventionally medical. The student must be able to argue how Stevenson keeps the science vague and the consequences precise, and to use the AO3 bullet on evolutionary ideas to explain why a Victorian reader found the descent from man to something older so disturbing."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Setting and the gothic",
     "q": "How does Stevenson use setting and genre?",
     "idea": "London, fog and the gothic: setting as an instrument of fear",
     "content": "A named AO3 bullet is \"The relationship between the text and the gothic genre\". A strong answer analyses the fog, the doors, the by-street and the night journeys as method rather than backdrop, and argues how Stevenson takes gothic machinery — the locked room, the mysterious document, the monster — into a modern professional city."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Form and structure",
     "q": "How must an answer on The Strange Case of Dr Jekyll and Mr Hyde move from the printed extract to the whole novel?",
     "idea": "The extract-then-whole-novel method Paper 1 rewards",
     "content": "Paper 1 Section B The 19th-century novel sets one question on the chosen novel and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Stevenson presents Mr Hyde in this extract\" and \"how Stevenson presents Mr Hyde as a frightening outsider in the novel as a whole\". A student must therefore be able to analyse a passage of The Strange Case of Dr Jekyll and Mr Hyde in fine detail (particular word choices used of a character’s physical appearance and behaviour, the reactions of onlookers, the use of triplets, questions, and the sequence of documents and narrators through which the story reaches the reader) and then argue the same case across the whole novel, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — Context (AO3)",
     "q": "What counts as context for The Strange Case of Dr Jekyll and Mr Hyde, and how is it rewarded?",
     "idea": "AO3: the relationships between The Strange Case of Dr Jekyll and Mr Hyde and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for The Strange Case of Dr Jekyll and Mr Hyde are: \"The ways in which social attitudes towards behaviour might impact upon what is frightening\"; \"Social attitudes/acceptability, illustrated with ‘common friends’ etc\"; \"Impact of evolutionary ideas on way Hyde is described\"; \"Ideas about primitive nature within man: ‘troglodytic’ etc\"; \"The relationship between the text and the gothic genre\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.2 The Strange Case of Dr Jekyll and Mr Hyde — The question and its marks",
     "q": "What does the The Strange Case of Dr Jekyll and Mr Hyde question look like and what is it worth?",
     "idea": "One 30-mark extract-based question on The Strange Case of Dr Jekyll and Mr Hyde",
     "content": "The specimen paper's question 7 on The Strange Case of Dr Jekyll and Mr Hyde is: \"Starting with this extract, how does Stevenson present Mr Hyde as a frightening outsider?\" with \"Write about: • how Stevenson presents Mr Hyde in this extract • how Stevenson presents Mr Hyde as a frightening outsider in the novel as a whole\" [30 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in Section B. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 49 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "novel-a-christmas-carol",
   "component": "C1",
   "option": "novel",
   "name": "Charles Dickens: A Christmas Carol",
   "caseStudies": [
    "Charles Dickens | A Christmas Carol — one of the seven set texts of 3.1.2 The 19th-century novel: \"Students will study one novel from the list of seven set texts. Students should study the whole text.\" The seven, as the specification’s table prints them: Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
    "Specimen Paper 1 (8702/1) Question 8: \"Starting with this extract, how does Dickens present Scrooge as an outsider to society?\" Write about: • how Dickens presents Scrooge in this extract • how Dickens presents Scrooge as an outsider to society in the novel as a whole [30 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". No AO4 marks are awarded in Section B — \"AO4 will be assessed on Section A only\"."
   ],
   "ideas": [
    {
     "code": "3.1.2 A Christmas Carol — Scrooge",
     "q": "How does Dickens present Scrooge as an outsider to society?",
     "idea": "Scrooge: the isolated miser and the man he becomes",
     "content": "The set specimen question is on him. The indicative content asks for \"The ways in which Scrooge is treated by others\", \"Scrooge’s attitude towards others\", \"The range of people who react negatively towards Scrooge\", \"Scrooge’s feelings towards others\" and the \"Possible contrast between Scrooge here and in a later part of the novel\". A student must be able to argue the whole transformation and the method that makes it possible — the \"Use and effects of parallel syntax\", \"anecdotal questions\", \"weather imagery\" and \"sentencing\" that the AO2 bullets name."
    },
    {
     "code": "3.1.2 A Christmas Carol — Bob Cratchit and Tiny Tim",
     "q": "How does Dickens use the Cratchits?",
     "idea": "Bob Cratchit and Tiny Tim: the working poor as the novella’s argument",
     "content": "The Cratchits are the human case Dickens puts to his reader, and the family whose Christmas is shown twice. The student must be able to argue how Dickens uses warmth, plenty made out of little, and the threatened death of a child to make an economic argument feel personal, and to connect that to the AO3 bullets on \"Ideas about the benefits of friendliness and warmth towards others\" and \"Social attitudes towards money/greed\"."
    },
    {
     "code": "3.1.2 A Christmas Carol — Marley and the three spirits",
     "q": "How does Dickens use Marley and the ghosts?",
     "idea": "Marley and the spirits: the machinery of a moral education",
     "content": "Each visitor does a different job: Marley delivers the warning and the chains, Past supplies the explanation, Present the evidence, Yet to Come the threat. A strong answer argues this as structure, not plot — how the sequence moves Scrooge from cause to consequence to choice — and analyses the very different language Dickens gives each spirit."
    },
    {
     "code": "3.1.2 A Christmas Carol — Fred, Fezziwig and Belle",
     "q": "How do the other characters measure Scrooge?",
     "idea": "Fred, Fezziwig and Belle: the alternatives Scrooge refused",
     "content": "The nephew who keeps inviting him, the employer who treated his clerks generously, the woman he lost to money: each is set against Scrooge as a possibility he rejected. The student must be able to argue why Dickens supplies them rather than only preaching, and how the contrast sharpens the AO3 bullet \"Ideas about social isolation and how it is caused\"."
    },
    {
     "code": "3.1.2 A Christmas Carol — Poverty and social responsibility",
     "q": "What is Dickens arguing about poverty?",
     "idea": "Poverty and responsibility: want, ignorance and the duty of the comfortable",
     "content": "The AO3 bullets name \"Social attitudes towards money/greed and how it can be a negative influence\" and \"Ideas about social isolation and how it is caused\". A student must be able to argue the novella’s public case — the treatment of the poor, the workhouse and the surplus population, the two children shown by the Ghost of Christmas Present — and to show that Dickens directs it at the reader as much as at Scrooge."
    },
    {
     "code": "3.1.2 A Christmas Carol — Redemption and change",
     "q": "How does Dickens present change?",
     "idea": "Redemption: whether the novella earns its transformation",
     "content": "The book exists to show that a man can change, and the argument worth making is about how Dickens makes that plausible: memory before judgement, fear before joy, and a final stave of action rather than feeling. A strong answer weighs how far the conversion is convincing and what Dickens needs it to prove."
    },
    {
     "code": "3.1.2 A Christmas Carol — Christmas, family and generosity",
     "q": "What does Christmas stand for in the novella?",
     "idea": "Christmas: the festival as an argument about how to live",
     "content": "A named AO3 bullet is \"Society’s attitudes to courtesy and politeness\". The student must be able to argue that Christmas in the book is not decoration but a standard — hospitality, family, the sharing of what there is — and to analyse the abundance of Dickens’s descriptive lists as a method with a purpose."
    },
    {
     "code": "3.1.2 A Christmas Carol — Time, memory and the ghost story",
     "q": "How does Dickens use form and genre?",
     "idea": "Staves, time and the ghost story: form as meaning",
     "content": "The book is divided into staves, uses a ghost-story frame and moves freely through time. A student must be able to analyse the effect of that form — the narrator’s direct address, the compression of a life into one night, the opening insistence on a death — and argue how a supernatural tale is made to carry a social argument."
    },
    {
     "code": "3.1.2 A Christmas Carol — Form and structure",
     "q": "How must an answer on A Christmas Carol move from the printed extract to the whole novel?",
     "idea": "The extract-then-whole-novel method Paper 1 rewards",
     "content": "Paper 1 Section B The 19th-century novel sets one question on the chosen novel and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Dickens presents Scrooge in this extract\" and \"how Dickens presents Scrooge as an outsider to society in the novel as a whole\". A student must therefore be able to analyse a passage of A Christmas Carol in fine detail (parallel syntax, anecdotal questions, weather imagery, sentence construction, the address of a narrator who speaks to the reader, and the five-stave structure of the ghosts’ visits) and then argue the same case across the whole novel, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.2 A Christmas Carol — Context (AO3)",
     "q": "What counts as context for A Christmas Carol, and how is it rewarded?",
     "idea": "AO3: the relationships between A Christmas Carol and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for A Christmas Carol are: \"Social attitudes towards money/greed and how it can be a negative influence\"; \"Ideas about social isolation and how it is caused\"; \"Society’s attitudes to courtesy and politeness\"; \"Ideas about the benefits of friendliness and warmth towards others\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.2 A Christmas Carol — The question and its marks",
     "q": "What does the A Christmas Carol question look like and what is it worth?",
     "idea": "One 30-mark extract-based question on A Christmas Carol",
     "content": "The specimen paper's question 8 on A Christmas Carol is: \"Starting with this extract, how does Dickens present Scrooge as an outsider to society?\" with \"Write about: • how Dickens presents Scrooge in this extract • how Dickens presents Scrooge as an outsider to society in the novel as a whole\" [30 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in Section B. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 49 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "novel-great-expectations",
   "component": "C1",
   "option": "novel",
   "name": "Charles Dickens: Great Expectations (1867)",
   "caseStudies": [
    "Charles Dickens | Great Expectations (1867) — one of the seven set texts of 3.1.2 The 19th-century novel: \"Students will study one novel from the list of seven set texts. Students should study the whole text.\" The seven, as the specification’s table prints them: Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
    "Specimen Paper 1 (8702/1) Question 9: \"Starting with this extract, write about how Dickens presents the unequal relationship between Pip and Estella.\" Write about: • how Dickens presents Pip’s feelings in this extract • how Dickens presents the unequal relationship between Pip and Estella in the novel as a whole [30 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". No AO4 marks are awarded in Section B — \"AO4 will be assessed on Section A only\"."
   ],
   "ideas": [
    {
     "code": "3.1.2 Great Expectations — Pip",
     "q": "How does Dickens present Pip and his changing attitudes?",
     "idea": "Pip: the narrator who judges his younger self",
     "content": "The indicative content asks for \"Ideas about the beginnings of Pip’s self-awareness\", \"Ideas about pride and status in society and how this affects Pip\" and \"How Pip’s attitudes develop and change during the course of the novel\". The AO2 bullet names the \"use/effect of narrative perspective\", so a strong answer argues the double voice — the boy who feels the shame and the older narrator who exposes it — and uses it to show the novel criticising the ambitions it describes."
    },
    {
     "code": "3.1.2 Great Expectations — Estella",
     "q": "How does Dickens present Estella and the inequality between her and Pip?",
     "idea": "Estella: raised to be cold, and the instrument of Pip’s shame",
     "content": "The set specimen question is on the \"unequal relationship between Pip and Estella\", and the indicative content asks for \"Ideas about the relationship between Pip and Estella\" and \"Pip’s relationship with Estella elsewhere in the novel\", with the \"Use of commands in order to reinforce sense of status\". The student must be able to argue both that she wounds him and that she has been made to, so that the inequality is social and engineered rather than personal."
    },
    {
     "code": "3.1.2 Great Expectations — Miss Havisham",
     "q": "How does Dickens present Miss Havisham?",
     "idea": "Miss Havisham: the stopped house and the revenge she teaches",
     "content": "Miss Havisham is a character and a set piece: the stopped clocks, the decayed dress, the room kept as it was. A strong answer treats the description as method — how Dickens makes a house express a mind — and argues her part in the novel’s argument about class, since she uses a girl to punish a whole sex and Pip’s misreading of her drives his own delusion."
    },
    {
     "code": "3.1.2 Great Expectations — Magwitch",
     "q": "How does Dickens present Magwitch?",
     "idea": "Magwitch: the convict who turns out to be the benefactor",
     "content": "The revelation about the source of Pip’s money reverses everything the novel has set up, and the mark scheme names \"Pip’s relationships with others and how these teach him lessons about the world, in particular Joe and Magwitch\". The student must be able to argue the effect of that structural reversal on the novel’s treatment of gentility, and how Dickens moves the reader’s sympathy from fear to pity."
    },
    {
     "code": "3.1.2 Great Expectations — Joe and Biddy",
     "q": "How does Dickens use Joe and Biddy?",
     "idea": "Joe and Biddy: the standard Pip abandons and returns to",
     "content": "Joe’s loyalty and Biddy’s good sense are the measure against which Pip’s snobbery is judged, and the mark scheme names Joe with Magwitch as the relationship that teaches Pip \"lessons about the world\". A student must be able to argue how Dickens uses his kindness and his uneasy visit to London to make the reader feel the cost of Pip’s expectations."
    },
    {
     "code": "3.1.2 Great Expectations — Class, status and gentility",
     "q": "What does the novel say about class and gentility?",
     "idea": "Class and gentility: what makes a gentleman",
     "content": "The named AO3 bullets are \"Ideas about social status and class and how these are presented\" and \"Ideas about ‘gentility’ and what this might mean in terms of social structures at the time\". A student must be able to argue the novel’s definition against its society’s — money against manners against conduct — and to show how the plot arranges for the gentleman’s fortune to come from a transported convict."
    },
    {
     "code": "3.1.2 Great Expectations — Ambition and expectation",
     "q": "How does the novel present ambition?",
     "idea": "Expectations: wanting to rise, and what rising costs",
     "content": "The title names the theme. A strong answer argues how Dickens presents aspiration as both understandable and corrosive — shame at home, debt in London, the abandonment of Joe — and how the novel’s ending measures what has been gained against what was thrown away."
    },
    {
     "code": "3.1.2 Great Expectations — Crime, guilt and the law",
     "q": "How does the novel present crime and guilt?",
     "idea": "Crime and guilt: the marshes, the prison and the stain on everything",
     "content": "Guilt begins in the first chapter and spreads through the book: the file, the hulks, Newgate, Jaggers’s office, Compeyson. A student must be able to argue how Dickens ties respectable London to the criminal world it depends on, and how Pip’s own sense of complicity shapes the narration."
    },
    {
     "code": "3.1.2 Great Expectations — Setting, structure and the bildungsroman",
     "q": "How do form and setting carry meaning?",
     "idea": "Marsh, forge and city: the bildungsroman in three stages",
     "content": "The AO2 bullets name the \"Use and effect of settings to add to the sense of loneliness and isolation\" and \"Form and genre comments, such as bildungsroman\". A student must be able to analyse the novel’s movement between marsh, forge, Satis House and London as a designed progression, and argue how a first-person novel of growing up manages to judge its own narrator."
    },
    {
     "code": "3.1.2 Great Expectations — Form and structure",
     "q": "How must an answer on Great Expectations move from the printed extract to the whole novel?",
     "idea": "The extract-then-whole-novel method Paper 1 rewards",
     "content": "Paper 1 Section B The 19th-century novel sets one question on the chosen novel and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Dickens presents Pip’s feelings in this extract\" and \"how Dickens presents the unequal relationship between Pip and Estella in the novel as a whole\". A student must therefore be able to analyse a passage of Great Expectations in fine detail (the use and effect of settings to create loneliness and isolation, listing, commands that reinforce status, particular word choices, and \"Form and genre comments, such as bildungsroman, use/effect of narrative perspective\") and then argue the same case across the whole novel, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.2 Great Expectations — Context (AO3)",
     "q": "What counts as context for Great Expectations, and how is it rewarded?",
     "idea": "AO3: the relationships between Great Expectations and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Great Expectations are: \"Ideas about social status and class and how these are presented\"; \"Ideas about ‘gentility’ and what this might mean in terms of social structures at the time\"; \"Pip’s focus on significance of physical description and what this shows about his attitudes towards social position\"; \"How Pip’s attitudes develop and change during the course of the novel\"; \"Pip’s relationships with others and how these teach him lessons about the world, in particular Joe and Magwitch\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.2 Great Expectations — The question and its marks",
     "q": "What does the Great Expectations question look like and what is it worth?",
     "idea": "One 30-mark extract-based question on Great Expectations",
     "content": "The specimen paper's question 9 on Great Expectations is: \"Starting with this extract, write about how Dickens presents the unequal relationship between Pip and Estella.\" with \"Write about: • how Dickens presents Pip’s feelings in this extract • how Dickens presents the unequal relationship between Pip and Estella in the novel as a whole\" [30 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in Section B. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 49 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "novel-jane-eyre",
   "component": "C1",
   "option": "novel",
   "name": "Charlotte Brontë: Jane Eyre",
   "caseStudies": [
    "Charlotte Brontë | Jane Eyre — one of the seven set texts of 3.1.2 The 19th-century novel: \"Students will study one novel from the list of seven set texts. Students should study the whole text.\" The seven, as the specification’s table prints them: Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
    "Specimen Paper 1 (8702/1) Question 10: \"Starting with this extract, how does Brontë present Jane as a strong female character?\" Write about: • how Brontë presents Jane in this extract • how Brontë presents Jane as a strong female character in the novel as a whole [30 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". No AO4 marks are awarded in Section B — \"AO4 will be assessed on Section A only\"."
   ],
   "ideas": [
    {
     "code": "3.1.2 Jane Eyre — Jane",
     "q": "How does Brontë present Jane as a strong female character?",
     "idea": "Jane: conscience, will and the claim to equality",
     "content": "The set specimen question is on her, and the indicative content asks for \"Jane’s feelings in this passage and elsewhere in the novel\", \"Jane’s response to Rochester and what this shows about her character\" and \"Jane’s misunderstanding of Rochester’s intent and what this shows about her, and her understanding of her circumstances\". The AO2 bullets name \"Jane’s eloquence in this passage and how it demonstrates her sense of freedom\", her \"Vocabulary to suggest Jane’s passionate nature\" and the \"Use and effects of questions to demonstrate Jane’s strength of thought\", so strength here is a matter of voice as much as of action."
    },
    {
     "code": "3.1.2 Jane Eyre — Rochester",
     "q": "How does Brontë present Rochester?",
     "idea": "Rochester: attraction, concealment and the inequality between them",
     "content": "The indicative content asks for \"Rochester’s feelings for Jane\". A student must be able to argue how Brontë makes him both Jane’s equal in conversation and her superior in wealth, class and knowledge, how the concealment of his marriage poisons the proposal, and what the novel does to him before it lets Jane return."
    },
    {
     "code": "3.1.2 Jane Eyre — Bertha Mason",
     "q": "How does Brontë use Bertha Mason?",
     "idea": "Bertha: the woman in the attic and the novel’s dark double",
     "content": "Bertha is present as sound and rumour long before she is seen. A strong answer argues what Brontë uses her for — gothic suspense, the obstacle in the plot, and a disturbing shadow of Jane’s own anger — and weighs how differently audiences have read her, which the mark scheme allows as part of context."
    },
    {
     "code": "3.1.2 Jane Eyre — Mrs Reed, Brocklehurst, Helen Burns and St John Rivers",
     "q": "How do the other figures shape Jane’s development?",
     "idea": "Gateshead, Lowood and Moor House: the people who form and test Jane",
     "content": "Each stage of the novel supplies a figure of authority or example: the aunt who rejects her, the clergyman who humiliates her, the friend who teaches endurance, the cousin who offers duty without love. A student must be able to argue how Brontë uses them to define the independence Jane finally achieves, rather than narrating the episodes."
    },
    {
     "code": "3.1.2 Jane Eyre — Independence and equality",
     "q": "What does the novel claim for women?",
     "idea": "Independence: the right to feel, to choose and to earn",
     "content": "The AO3 bullets name the \"Contrast between Jane’s desire for independence and what society expects from women in her position\" and \"Ideas and perspectives of independence and how it can be achieved\". A student must be able to argue how the novel makes the claim — through Jane’s speeches, her refusals and, in the plot, an inheritance that lets her come back as an equal."
    },
    {
     "code": "3.1.2 Jane Eyre — Class, money and dependence",
     "q": "How does class shape Jane’s position?",
     "idea": "Class and money: the governess who is neither servant nor family",
     "content": "A named AO3 bullet is \"Attitudes towards Jane’s status; both her own attitudes and the attitudes of others towards her\". The student must be able to explain what a governess’s position was and how the novel uses that awkwardness, and to argue why Brontë resolves the inequality with money before allowing the marriage."
    },
    {
     "code": "3.1.2 Jane Eyre — Religion, duty and conscience",
     "q": "How does the novel present religion?",
     "idea": "Religion and conscience: three versions of Christian duty",
     "content": "Brontë sets hypocrisy, patient submission and severe missionary zeal against each other, and against Jane’s own conscience. A strong answer argues that the novel judges religion by conduct, and connects the AO3 bullet \"Ideas about internal strength and how it is manifested\" to the moment Jane leaves Thornfield with nothing."
    },
    {
     "code": "3.1.2 Jane Eyre — Confinement, the gothic and the first-person voice",
     "q": "How do form and setting carry meaning?",
     "idea": "Confinement and the gothic: red room, attic, moor, and a narrator who addresses the reader",
     "content": "Locked rooms, thresholds and wild weather structure the novel, and it is told throughout by Jane herself, speaking to the reader. A student must be able to analyse the gothic apparatus as method — suspense, foreshadowing, the pathetic fallacy — and argue the effect of a retrospective first-person narration that controls all the reader knows."
    },
    {
     "code": "3.1.2 Jane Eyre — Form and structure",
     "q": "How must an answer on Jane Eyre move from the printed extract to the whole novel?",
     "idea": "The extract-then-whole-novel method Paper 1 rewards",
     "content": "Paper 1 Section B The 19th-century novel sets one question on the chosen novel and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Brontë presents Jane in this extract\" and \"how Brontë presents Jane as a strong female character in the novel as a whole\". A student must therefore be able to analyse a passage of Jane Eyre in fine detail (particular words chosen to describe experience, contrast between before and after (\"‘trampled’ against ‘expanded’, etc\"), the eloquence of a character’s speech, vocabulary that suggests passion, and the use and effect of questions) and then argue the same case across the whole novel, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.2 Jane Eyre — Context (AO3)",
     "q": "What counts as context for Jane Eyre, and how is it rewarded?",
     "idea": "AO3: the relationships between Jane Eyre and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Jane Eyre are: \"Attitudes towards Jane’s status; both her own attitudes and the attitudes of others towards her\"; \"Contrast between Jane’s desire for independence and what society expects from women in her position\"; \"Ideas about internal strength and how it is manifested\"; \"Ideas and perspectives of independence and how it can be achieved\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.2 Jane Eyre — The question and its marks",
     "q": "What does the Jane Eyre question look like and what is it worth?",
     "idea": "One 30-mark extract-based question on Jane Eyre",
     "content": "The specimen paper's question 10 on Jane Eyre is: \"Starting with this extract, how does Brontë present Jane as a strong female character?\" with \"Write about: • how Brontë presents Jane in this extract • how Brontë presents Jane as a strong female character in the novel as a whole\" [30 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in Section B. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 49 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "novel-frankenstein",
   "component": "C1",
   "option": "novel",
   "name": "Mary Shelley: Frankenstein (1831)",
   "caseStudies": [
    "Mary Shelley | Frankenstein (1831) — one of the seven set texts of 3.1.2 The 19th-century novel: \"Students will study one novel from the list of seven set texts. Students should study the whole text.\" The seven, as the specification’s table prints them: Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
    "Specimen Paper 1 (8702/1) Question 11: \"Starting with this extract, write about how Shelley presents the importance of love and acceptance to society.\" Write about: • how Shelley presents the monster’s need to be loved and accepted in this extract • how Shelley presents the importance of love and acceptance to society in the novel as a whole [30 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". No AO4 marks are awarded in Section B — \"AO4 will be assessed on Section A only\"."
   ],
   "ideas": [
    {
     "code": "3.1.2 Frankenstein — The creature",
     "q": "How does Shelley present the creature’s need to be loved and accepted?",
     "idea": "The creature: abandoned, educated, rejected and revenged",
     "content": "The set specimen question is on him. The indicative content asks for \"What the monster finds compelling about the villagers\", \"The monster’s need for love, protection and acceptance, both here and elsewhere in the novel\", \"The monster’s recognition of essential kindness and warmth in others\" and \"The monster’s feelings of fear that he will be rejected\", with, as AO2, \"The use and effect of first person perspective\" and \"The monster’s use of emotional language and what this demonstrates about his need to be loved\". A student must be able to argue that Shelley makes the reader sympathise with him from inside his own narration."
    },
    {
     "code": "3.1.2 Frankenstein — Victor Frankenstein",
     "q": "How does Shelley present Victor?",
     "idea": "Victor: ambition, creation and the refusal of responsibility",
     "content": "Victor tells most of the novel and is its least reliable witness about himself. A strong answer argues the gap between what he says and what he does — the abandonment of the creature at the moment of success, the secrecy, the destruction of the second creature, the pursuit to the ice — and how Shelley uses his voice to indict him."
    },
    {
     "code": "3.1.2 Frankenstein — Elizabeth, Clerval and the Frankenstein family",
     "q": "How does Shelley use the domestic characters?",
     "idea": "Elizabeth, Clerval and Justine: the ordinary affections the plot destroys",
     "content": "The novel sets a loving household against Victor’s solitary work and then kills the household one by one. A student must be able to argue why Shelley arranges it that way — the innocent executed for a murder she did not commit, the friend and the bride killed on the creature’s terms — and how it supports the AO3 bullet \"Ideas about the need for love being an elemental human force\"."
    },
    {
     "code": "3.1.2 Frankenstein — Walton and the frame",
     "q": "How does Shelley use Walton and the De Laceys?",
     "idea": "Walton and the De Laceys: the listeners and the observed family",
     "content": "Walton’s letters enclose the whole story and his own ambition mirrors Victor’s; the De Laceys are the family the creature watches and learns from. A strong answer argues both as structural devices — one frames and judges the tale, the other supplies the education and the rejection that make the creature what he becomes."
    },
    {
     "code": "3.1.2 Frankenstein — Creation and responsibility",
     "q": "What does the novel say about the duty of a creator?",
     "idea": "Creation and responsibility: what is owed to what one makes",
     "content": "The novel’s central argument is not that the creature should not exist but that he should not have been abandoned. The student must be able to argue that case from both narrations, and to use the AO3 bullets \"Ideas about human nature\" and \"Society’s attitudes to outsiders and what Shelley might be saying about that\"."
    },
    {
     "code": "3.1.2 Frankenstein — Isolation, acceptance and prejudice",
     "q": "How does the novel present the outsider?",
     "idea": "Isolation: appearance, prejudice and the refusal of company",
     "content": "Everyone who sees the creature flees; the one person who does not is blind. A student must be able to argue how Shelley uses that pattern to make prejudice the cause of violence rather than its excuse, and to connect the creature’s isolation to Victor’s and Walton’s chosen solitude."
    },
    {
     "code": "3.1.2 Frankenstein — Knowledge, science and ambition",
     "q": "How does the novel present the pursuit of knowledge?",
     "idea": "Knowledge and ambition: the dangerous attraction of discovery",
     "content": "Three men in the novel want to go further than anyone has gone. A strong answer argues how Shelley presents that desire as admirable and ruinous at once, and uses the science of her own moment — galvanism, natural philosophy, the fascination with the boundary of life — as context rather than decoration."
    },
    {
     "code": "3.1.2 Frankenstein — Nature, the sublime and the gothic",
     "q": "How do setting and genre work in the novel?",
     "idea": "Nature and genre: Alps, ice and the gothic frame narrative",
     "content": "A named AO3 bullet is \"The generic context of the text\". The student must be able to analyse the sublime landscapes as a method — mountains and ice used to measure human smallness and moral extremity — and to argue the effect of the nested narratives, so that the reader receives the creature’s account at two removes and still believes it."
    },
    {
     "code": "3.1.2 Frankenstein — Form and structure",
     "q": "How must an answer on Frankenstein move from the printed extract to the whole novel?",
     "idea": "The extract-then-whole-novel method Paper 1 rewards",
     "content": "Paper 1 Section B The 19th-century novel sets one question on the chosen novel and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Shelley presents the monster’s need to be loved and accepted in this extract\" and \"how Shelley presents the importance of love and acceptance to society in the novel as a whole\". A student must therefore be able to analyse a passage of Frankenstein in fine detail (the use and effect of first person perspective, emotional language, particular word choices such as \"‘protectors’\" used of other people, and the nested frame of letters and told narratives) and then argue the same case across the whole novel, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.2 Frankenstein — Context (AO3)",
     "q": "What counts as context for Frankenstein, and how is it rewarded?",
     "idea": "AO3: the relationships between Frankenstein and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Frankenstein are: \"Ideas about human nature and how this is explored both in the extract and elsewhere\"; \"Ideas about acceptance and the need to be loved\"; \"Society’s attitudes to outsiders and what Shelley might be saying about that\"; \"Ideas about the need for love being an elemental human force\"; \"The generic context of the text\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.2 Frankenstein — The question and its marks",
     "q": "What does the Frankenstein question look like and what is it worth?",
     "idea": "One 30-mark extract-based question on Frankenstein",
     "content": "The specimen paper's question 11 on Frankenstein is: \"Starting with this extract, write about how Shelley presents the importance of love and acceptance to society.\" with \"Write about: • how Shelley presents the monster’s need to be loved and accepted in this extract • how Shelley presents the importance of love and acceptance to society in the novel as a whole\" [30 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in Section B. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 49 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "novel-pride-and-prejudice",
   "component": "C1",
   "option": "novel",
   "name": "Jane Austen: Pride and Prejudice",
   "caseStudies": [
    "Jane Austen | Pride and Prejudice — one of the seven set texts of 3.1.2 The 19th-century novel: \"Students will study one novel from the list of seven set texts. Students should study the whole text.\" The seven, as the specification’s table prints them: Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
    "Specimen Paper 1 (8702/1) Question 12: \"Starting with this extract, write about how Austen presents attitudes towards men.\" Write about: • how Austen presents attitudes towards men in this extract • how Austen presents attitudes towards men in the novel as a whole [30 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". No AO4 marks are awarded in Section B — \"AO4 will be assessed on Section A only\"."
   ],
   "ideas": [
    {
     "code": "3.1.2 Pride and Prejudice — Elizabeth Bennet",
     "q": "How does Austen present Elizabeth?",
     "idea": "Elizabeth: judgement, wit and the correction of her own prejudice",
     "content": "Elizabeth is the novel’s centre of consciousness, and the reader shares her misjudgements. A student must be able to argue how Austen uses free indirect style to let the reader think with her and then discover, with her, that she was wrong — the letter, the visit to Pemberley, the revision of her opinion — so that the title’s two faults are distributed across the couple."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Mr Darcy",
     "q": "How does Austen present Darcy, and how is he judged?",
     "idea": "Darcy: pride, reserve and the reassessment of a man by his conduct",
     "content": "The set specimen question begins from the community’s reaction to Darcy and Bingley, and the indicative content asks for \"The ways in which Darcy and Mr Bingley are described\", \"How the town respond to Darcy and Mr Bingley\" and \"The contrast between the behaviour of Darcy and Mr Bingley\", with the \"Use and effect of language to describe reactions to Darcy\". A strong answer argues how Austen manages the reader’s opinion of him, and how the \"Ironic effect of financial details\" makes the judgement of a man inseparable from his income."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Mr and Mrs Bennet",
     "q": "How does Austen present the Bennet parents?",
     "idea": "Mr and Mrs Bennet: an unequal marriage and its consequences for five daughters",
     "content": "The novel opens on their conversation and traces the damage: a mother whose whole occupation is matchmaking, a father who retreats into irony instead of acting. The student must be able to argue that Austen presents them as a warning about marrying badly, and to analyse the narrative voice that lets the reader laugh at them and register the cost."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Wickham, Mr Collins, Lady Catherine and Charlotte",
     "q": "How do the other characters extend the novel’s argument?",
     "idea": "Wickham, Collins, Lady Catherine and Charlotte: other men and other bargains",
     "content": "The indicative content invites contrast with \"other male characters: Mr Collins, Mr Wickham, Mr Bennet\". A student must be able to argue how each figure tests the novel’s ideas — charm without principle, servility with a living, rank without manners, and a friend who marries for security with her eyes open — and to weigh Charlotte’s choice as seriously as the novel does."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Marriage and money",
     "q": "What does the novel say about marriage?",
     "idea": "Marriage and money: the settlement behind the romance",
     "content": "The named AO3 bullets are \"The attitudes towards money and the status it brings\" and \"Ideas about the ‘marketplace’ function of the ball\". A student must be able to explain the economic facts that drive the plot — entailment, the need for daughters to marry, income quoted with a character’s name — and argue whether the novel endorses or exposes the market it describes."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Pride, prejudice and first impressions",
     "q": "How does the novel present judgement and misjudgement?",
     "idea": "Pride and prejudice: reading people wrongly and learning to read again",
     "content": "The novel is built on misreadings that the reader shares. A strong answer argues the structural symmetry — both protagonists are wrong, both are corrected, both are told so by someone they respect — and analyses the letters and conversations through which the correction is delivered."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Class, rank and manners",
     "q": "How does the novel present class?",
     "idea": "Class and manners: rank, gentility and who may speak to whom",
     "content": "A named AO3 bullet is \"Ideas about what constitutes socially acceptable behaviour in that society\". The student must be able to argue the fine gradations the novel works in — trade against land, Rosings against Longbourn, the militia and the clergy — and how Austen consistently rates conduct above rank while refusing to pretend rank does not matter."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Women, choice and reputation",
     "q": "What choices does the novel allow its women?",
     "idea": "Women’s position: dependence, accomplishment and the risk of ruin",
     "content": "Five sisters, no inheritance, and a family reputation that one elopement can destroy. A student must be able to argue how Austen uses Lydia’s flight, Mary’s accomplishments and Charlotte’s bargain to show the narrowness of the alternatives, and what it costs Elizabeth to refuse two proposals."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Irony and narrative voice",
     "q": "How does Austen’s narration create meaning?",
     "idea": "Irony and free indirect style: a narrator who lets the reader overhear",
     "content": "The AO2 bullets name \"The use of narrative perspective\" and \"Use of reported speech/action\". A strong answer analyses the famous opening sentence as irony rather than statement, shows how free indirect style blends Elizabeth’s thought with the narrator’s judgement, and argues how dialogue is made to expose characters who think they are showing themselves off."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Form and structure",
     "q": "How must an answer on Pride and Prejudice move from the printed extract to the whole novel?",
     "idea": "The extract-then-whole-novel method Paper 1 rewards",
     "content": "Paper 1 Section B The 19th-century novel sets one question on the chosen novel and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Austen presents attitudes towards men in this extract\" and \"how Austen presents attitudes towards men in the novel as a whole\". A student must therefore be able to analyse a passage of Pride and Prejudice in fine detail (the use of narrative perspective, reported speech and action, the ironic effect of financial detail, and the language in which a community’s reactions are recorded) and then argue the same case across the whole novel, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.2 Pride and Prejudice — Context (AO3)",
     "q": "What counts as context for Pride and Prejudice, and how is it rewarded?",
     "idea": "AO3: the relationships between Pride and Prejudice and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for Pride and Prejudice are: \"Ideas about what constitutes socially acceptable behaviour in that society\"; \"The ways in which both men are judged and what this demonstrates about attitudes at that time\"; \"The attitudes towards money and the status it brings\"; \"Ideas about the ‘marketplace’ function of the ball\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.2 Pride and Prejudice — The question and its marks",
     "q": "What does the Pride and Prejudice question look like and what is it worth?",
     "idea": "One 30-mark extract-based question on Pride and Prejudice",
     "content": "The specimen paper's question 12 on Pride and Prejudice is: \"Starting with this extract, write about how Austen presents attitudes towards men.\" with \"Write about: • how Austen presents attitudes towards men in this extract • how Austen presents attitudes towards men in the novel as a whole\" [30 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in Section B. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 49 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "novel-the-sign-of-four",
   "component": "C1",
   "option": "novel",
   "name": "Sir Arthur Conan Doyle: The Sign of Four",
   "caseStudies": [
    "Sir Arthur Conan Doyle | The Sign of Four — one of the seven set texts of 3.1.2 The 19th-century novel: \"Students will study one novel from the list of seven set texts. Students should study the whole text.\" The seven, as the specification’s table prints them: Robert Louis Stevenson, The Strange Case of Dr Jekyll and Mr Hyde; Charles Dickens, A Christmas Carol; Charles Dickens, Great Expectations (1867); Charlotte Brontë, Jane Eyre; Mary Shelley, Frankenstein (1831); Jane Austen, Pride and Prejudice; Sir Arthur Conan Doyle, The Sign of Four.",
    "Specimen Paper 1 (8702/1) Question 13: \"Starting with this extract, explore how Conan Doyle creates a sense of mystery.\" Write about: • how Conan Doyle uses places to create a sense of mystery in this extract • how Conan Doyle creates a sense of mystery in the novel as a whole [30 marks]",
    "The question starts from a printed extract: Paper 1 is closed book, but \"any stimulus materials required will be provided as part of the assessment\", and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". No AO4 marks are awarded in Section B — \"AO4 will be assessed on Section A only\"."
   ],
   "ideas": [
    {
     "code": "3.1.2 The Sign of Four — Sherlock Holmes",
     "q": "How does Conan Doyle present Holmes?",
     "idea": "Holmes: the expert detective, and the man between cases",
     "content": "A named AO3 bullet is \"Presentation of Holmes as expert detective\", and the indicative content points to \"Holmes’ apparent familiarity with the route and how this suggests competence\" and his \"familiarity with unfamiliar places lending him an air of mystery\". A student must be able to argue both sides of the character — the reasoning machine who lectures on observation, and the restless, drug-taking figure of the opening and closing pages — and to show how Conan Doyle makes competence itself mysterious."
    },
    {
     "code": "3.1.2 The Sign of Four — Watson",
     "q": "How does Conan Doyle use Watson?",
     "idea": "Watson: narrator, foil and the reader’s stand-in",
     "content": "The indicative content asks for \"Watson’s perceptions of the unfamiliar nature of the journey/destination\". A strong answer argues that the mystery exists because Watson tells the story: he notices without understanding, admires without following, and falls in love in the middle of a case, so the reader is kept one step behind Holmes throughout."
    },
    {
     "code": "3.1.2 The Sign of Four — Mary Morstan",
     "q": "How does Conan Doyle present Mary Morstan?",
     "idea": "Mary Morstan: the client, the love interest and the treasure’s heir",
     "content": "Mary brings the case, is courted through it, and is finally disinherited of the treasure by its loss. A student must be able to argue what Conan Doyle gains by that arrangement — a romance plot braided into a detective plot, and an ending in which the fortune that would have separated the couple disappears."
    },
    {
     "code": "3.1.2 The Sign of Four — Jonathan Small, Tonga and the Sholtos",
     "q": "How are the criminals and the victims presented?",
     "idea": "Small, Tonga and the Sholtos: the crime, its long history and its telling",
     "content": "The last part of the book hands the narrative to the criminal, who explains a betrayal decades old. A strong answer argues the effect of that confession — sympathy for a man who is also a murderer — and treats the presentation of Tonga as a matter for critical judgement, which the mark scheme permits under the contexts in which texts \"are engaged with by different audiences\"."
    },
    {
     "code": "3.1.2 The Sign of Four — Mystery and detection",
     "q": "How does the novel create and resolve mystery?",
     "idea": "Mystery: puzzle, clue and the pleasure of explanation",
     "content": "The set specimen question is on exactly this. The student must be able to argue the machinery — the withheld information, the locked room, the false trail, the chase, the explanation reserved for the end — and analyse the \"Particular words to suggest mystery: ‘labyrinth’\" and the \"Use of weather to lend a sense of mystery: ‘fog’ etc\" that the mark scheme names."
    },
    {
     "code": "3.1.2 The Sign of Four — Setting and the city",
     "q": "How does Conan Doyle use setting?",
     "idea": "London: fog, suburbs and the river as instruments of mystery",
     "content": "The AO3 bullets name the \"use of setting in detective fiction to increase sense of mystery\", the \"Apparent threat and mystery suggested by setting: ‘public-houses’ etc\" and the \"Language used to present the new environment as threatening and mysterious: ‘tawdry’/‘coarse’/‘glare’ etc\". A student must be able to argue how the endless new suburbs and the night river are made to feel unknowable, and how a modern city is written as a gothic landscape."
    },
    {
     "code": "3.1.2 The Sign of Four — Empire, the treasure and India",
     "q": "How does the novel present empire?",
     "idea": "Empire and the Agra treasure: a crime that comes home",
     "content": "The plot begins in India and ends in the Thames, and the wealth at its centre is loot. A strong answer argues how the novel treats the empire as the source of both the fortune and the violence, and weighs the attitudes the text carries — the very kind of contextual reading the mark scheme invites when it allows for different audiences at different times."
    },
    {
     "code": "3.1.2 The Sign of Four — Reason, science and sensation",
     "q": "How does the novel set reason against sensation?",
     "idea": "Reason and sensation: deduction in a story built on thrills",
     "content": "Holmes preaches observation and inference while the novel supplies a poisoned dart, a boat chase and a hidden treasure. The student must be able to argue that tension as part of the design — the \"Generic features of detective fiction\" and \"The influence of the gothic genre\" are both named AO3 bullets — and show how Conan Doyle uses method to make sensation feel explicable."
    },
    {
     "code": "3.1.2 The Sign of Four — Form and structure",
     "q": "How must an answer on The Sign of Four move from the printed extract to the whole novel?",
     "idea": "The extract-then-whole-novel method Paper 1 rewards",
     "content": "Paper 1 Section B The 19th-century novel sets one question on the chosen novel and students \"will be required to write in detail about an extract from the novel and then to write about the novel as a whole\". The extract is printed on the paper — the exam is otherwise closed book — and the question's two bullets divide the work: \"how Conan Doyle uses places to create a sense of mystery in this extract\" and \"how Conan Doyle creates a sense of mystery in the novel as a whole\". A student must therefore be able to analyse a passage of The Sign of Four in fine detail (language used to describe a journey (\"‘tortuous’ etc\"), weather (\"‘fog’ etc\"), particular words that suggest mystery (\"‘labyrinth’\"), and description of a suburban setting that suggests \"the new and impersonal: ‘each’/‘again’/‘interminable’ etc\") and then argue the same case across the whole novel, because Level 6 rewards a \"critical, exploratory, conceptualised response to task and whole text\" with \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\", while an answer that stays inside the extract cannot show the whole-text strand at all. Level 3 by contrast only \"focuses on the full task with a range of points exemplified by relevant references from the text\"."
    },
    {
     "code": "3.1.2 The Sign of Four — Context (AO3)",
     "q": "What counts as context for The Sign of Four, and how is it rewarded?",
     "idea": "AO3: the relationships between The Sign of Four and the contexts in which it was written",
     "content": "AO3 is to \"Show understanding of the relationships between texts and the contexts in which they were written\", worth 6 of the question's 30 marks. The mark scheme defines it widely: \"the range of contexts and relationships that is most relevant as part of AO3 will depend on the text, the author and the task … These contexts may relate to the relationship between the text and the context in which it was written. However, the contexts may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time. Context, where relevant, may also apply to literary contexts such as genres, and also the contexts in which texts are engaged with by different audiences.\" The AO3 bullets the specimen mark scheme prints for The Sign of Four are: \"Generic features of detective fiction e.g. use of setting in detective fiction to increase sense of mystery\"; \"The influence of the gothic genre\"; \"Apparent threat and mystery suggested by setting: ‘public-houses’ etc\"; \"Language used to present the new environment as threatening and mysterious: ‘tawdry’/‘coarse’/‘glare’ etc\"; \"Presentation of Holmes as expert detective\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so context must be argued through the text rather than delivered as a block of history; ignoring it altogether \"would be classed as a rubric infringement\"."
    },
    {
     "code": "3.1.2 The Sign of Four — The question and its marks",
     "q": "What does the The Sign of Four question look like and what is it worth?",
     "idea": "One 30-mark extract-based question on The Sign of Four",
     "content": "The specimen paper's question 13 on The Sign of Four is: \"Starting with this extract, explore how Conan Doyle creates a sense of mystery.\" with \"Write about: • how Conan Doyle uses places to create a sense of mystery in this extract • how Conan Doyle creates a sense of mystery in the novel as a whole\" [30 marks]. That is 30 marks (AO1=12, AO2=12, AO3=6); no AO4 marks are awarded in Section B. Paper 1 is \"written exam: 1 hour 45 minutes; 64 marks; 40% of GCSE\", closed book, and both of its sections are compulsory, so this question must be answered in roughly 49 minutes (the specification sets no per-question time). Marking is by six levels of five marks each on a \"best fit\" basis, with the level determined by \"the whole response\"; examiners are \"encouraged to reward any valid interpretations\" and \"Indicative content … is not intended to be exhaustive\"."
    }
   ]
  },
  {
   "id": "modern-an-inspector-calls",
   "component": "C2",
   "option": "modernText",
   "name": "JB Priestley: An Inspector Calls",
   "caseStudies": [
    "JB Priestley | An Inspector Calls — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 1: \"How and why does Sheila change in An Inspector Calls?\" Write about: • how Sheila responds to her family and to the Inspector • how Priestley presents Sheila by the ways he writes [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 2: \"How does Priestley explore responsibility in An Inspector Calls?\" Write about: • the ideas about responsibility in An Inspector Calls • how Priestley presents these ideas by the ways he writes [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 An Inspector Calls — Sheila Birling",
     "q": "How and why does Sheila change?",
     "idea": "Sheila: the character Priestley allows to learn",
     "content": "One of the two specimen questions is on her. The indicative content asks for \"Sheila’s initial attitude towards Eva\", \"Sheila’s attitude towards her family\", \"How Sheila’s attitude changes as the play develops\" and \"Sheila’s attitude towards the Inspector, at the start and as the play develops\", with, as AO2, the \"effects of particular stage directions related to Sheila\", the \"responses of other characters towards Sheila\", the \"Length of Sheila’s speeches, in particular in final scene\" and their \"fluency … in contrast with those of other characters\". A student must be able to argue the why as well as the how: she is the means by which Priestley shows that change is possible."
    },
    {
     "code": "3.2.1 An Inspector Calls — Mr and Mrs Birling",
     "q": "How does Priestley present the older generation?",
     "idea": "Arthur and Sybil Birling: the refusal to accept responsibility",
     "content": "The indicative content names \"Different characters’ attitudes towards responsibility: Mrs Birling’s hypocrisy, Mr Birling’s treatment of his workers\" and the \"Differences between older and younger generations’ response to Inspector and Eva Smith\". A strong answer analyses how Priestley discredits Birling before the Inspector arrives — the confident predictions the audience knows to be wrong — and how Mrs Birling’s charity work is used to expose class prejudice as respectability."
    },
    {
     "code": "3.2.1 An Inspector Calls — The Inspector",
     "q": "How does Priestley use the Inspector?",
     "idea": "Inspector Goole: dramatic device, prosecutor and voice of the play",
     "content": "The mark scheme calls him exactly that: \"The use of the Inspector as dramatic device to enable characters to learn about responsibility\", and asks for \"Reactions to idea of the Inspector in terms of how he affects the characters as well as how he offers an opportunity to learn/change\". A student must be able to argue how he controls the play — one photograph at a time, one confession at a time — and what is gained by leaving his identity unexplained."
    },
    {
     "code": "3.2.1 An Inspector Calls — Eric and Gerald",
     "q": "How does Priestley present Eric and Gerald?",
     "idea": "Eric and Gerald: two young men and two different outcomes",
     "content": "The contrast between Eric and Gerald divides the younger generation as sharply as the Inspector divides the family: one is shamed into change, the other closes ranks with the parents once he believes the inspection was a hoax. A strong answer argues why Priestley needs both, and analyses the \"Presentation of anger/bluster/defensiveness\" and the pauses and dashes that mark the moments where each man is exposed."
    },
    {
     "code": "3.2.1 An Inspector Calls — Eva Smith",
     "q": "What does Eva Smith represent?",
     "idea": "Eva Smith: the absent character and \"Eva Smith as metaphor\"",
     "content": "She never appears and everything is reported about her. The mark scheme names \"Ideas about Eva Smith as metaphor\" as an AO3 bullet. A student must be able to argue the effect of that absence — she can be made to stand for a class rather than a person, and the Inspector’s closing warning turns her into millions of others — and to weigh whether Priestley’s method costs her individuality deliberately."
    },
    {
     "code": "3.2.1 An Inspector Calls — Social responsibility",
     "q": "How does Priestley explore responsibility?",
     "idea": "Social responsibility: the play’s argument, and who is guilty",
     "content": "The second specimen question is on this. The indicative content asks for a \"Response to the characters with possible treatment of who is more aware of idea of social responsibility\" and the \"Treatment of idea of responsibility as social issue\". A student must be able to argue the play’s case — that a chain of small, respectable acts of self-interest destroys a life — rather than allocating blame to one character."
    },
    {
     "code": "3.2.1 An Inspector Calls — Class, wealth and power",
     "q": "How does the play present class?",
     "idea": "Class: the wages, the shop, the charity committee and the prosperous room",
     "content": "A named AO3 bullet is \"Comments dealing with wider ideas of class consciousness\". The student must be able to argue how every offence in the play is an exercise of economic or social power over someone with none, and how Priestley uses the single set and the interrupted celebration to make the comfortable family a target."
    },
    {
     "code": "3.2.1 An Inspector Calls — Generations, time and hindsight",
     "q": "How does Priestley use time and the two generations?",
     "idea": "Generations and hindsight: the 1912 setting and the audience’s knowledge",
     "content": "The play is set in 1912 and was first performed in 1945, so every confident prediction its patriarch makes has already been disproved for the audience. A strong answer argues that dramatic irony as a method, connects it to the AO3 bullet about hope for the future in the younger generation, and analyses the final telephone call as a structural punishment \"used as punishment for self-satisfaction\"."
    },
    {
     "code": "3.2.1 An Inspector Calls — Form and structure",
     "q": "What must be said about the way An Inspector Calls is written?",
     "idea": "The methods of An Inspector Calls: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For An Inspector Calls that means the stage directions, the length and fluency of a character’s speeches against those of others, the reactions of other characters, the use of the Inspector as a dramatic device, the presentation of \"anger/bluster/defensiveness\", the \"Use and effects of pauses, hesitancy, dashes to suggest discomfort\", and the structural design of a play in three continuous acts that ends with a telephone call. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 An Inspector Calls — Context (AO3)",
     "q": "What counts as context for An Inspector Calls?",
     "idea": "AO3: the ideas, perspectives and contextual factors An Inspector Calls explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets the mark scheme prints for this play are \"Sheila’s ideas about social responsibility\", \"How Priestley uses the character of Sheila to voice attitudes of younger generation\", \"What Sheila demonstrates about attitudes towards social responsibility\", \"Treatment of what effects Sheila’s change and how this demonstrates hope for the future\", \"Treatment of idea of responsibility as social issue\", \"Comments dealing with wider ideas of class consciousness\", the \"Contrast between family’s light-hearted relief and final shock of telephone call – used as punishment for self-satisfaction\" and \"Ideas about Eva Smith as metaphor\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 An Inspector Calls — The question and its marks",
     "q": "What does the An Inspector Calls question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on An Inspector Calls",
     "content": "The specimen paper sets two questions on An Inspector Calls, and students \"will answer one essay question from a choice of two\": (1) \"How and why does Sheila change in An Inspector Calls?\" with \"Write about: • how Sheila responds to her family and to the Inspector • how Priestley presents Sheila by the ways he writes\" and (2) \"How does Priestley explore responsibility in An Inspector Calls?\" with \"Write about: • the ideas about responsibility in An Inspector Calls • how Priestley presents these ideas by the ways he writes\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-blood-brothers",
   "component": "C2",
   "option": "modernText",
   "name": "Willy Russell: Blood Brothers (musical version)",
   "caseStudies": [
    "Willy Russell | Blood Brothers (musical version) — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 3: \"How does Russell use the characters of Mrs Johnstone and Mrs Lyons in Blood Brothers to explore ideas about class?\" Write about: • how Russell presents Mrs Johnstone and Mrs Lyons • how Russell uses these characters to explore ideas about class [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 4: \"How does Willy Russell present childhood and growing up in Blood Brothers?\" Write about: • the ways particular characters change as they grow up • how Russell presents childhood and growing up by the ways he writes [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Blood Brothers — Mrs Johnstone",
     "q": "How does Russell present Mrs Johnstone?",
     "idea": "Mrs Johnstone: the mother who gives a child away, and the play’s sympathy",
     "content": "She is named in the first specimen question. The indicative content asks for \"Comments on the behaviour / attitude of both women\", \"Mrs Johnstone’s reaction to particular events such as the house move or the ‘curse’ and what this suggests about her\", and \"Responses related to the level of sympathy for either / both women and their circumstances\". A student must be able to argue how her dialogue, and in the musical version her songs, place the audience with her without making her blameless."
    },
    {
     "code": "3.2.1 Blood Brothers — Mrs Lyons",
     "q": "How does Russell present Mrs Lyons?",
     "idea": "Mrs Lyons: privilege, fear and the invented curse",
     "content": "The other half of the specimen question. A strong answer analyses the \"Dialogue between the women at Mrs Lyons’ house\" and the \"Presentation of the differences between both women: dialogue used to show how they both feel about themselves and their circumstances\", and argues that Russell makes her the more frightening of the two mothers because her power is social and her motive is dread of losing what she has bought."
    },
    {
     "code": "3.2.1 Blood Brothers — Mickey",
     "q": "How does Russell present Mickey?",
     "idea": "Mickey: childhood, work, unemployment and the ending",
     "content": "The indicative content asks for \"Mickey and Edward as young children\", \"Mickey and Edward as young adults\" and \"Differences between the relative experience of both boys\". A student must be able to argue Mickey’s whole arc — the confident child, the boy who leaves school, the man the factory lays off — as the play’s argument about what background does to a life, and to analyse how the same actor’s voice and language are made to age."
    },
    {
     "code": "3.2.1 Blood Brothers — Edward and the Narrator",
     "q": "How does Russell use Edward and the Narrator?",
     "idea": "Edward and the Narrator: the twin who rises, and the voice that will not let the audience forget",
     "content": "Edward is the control in the experiment — the same child, differently raised — and the Narrator keeps the superstition and the ending in view throughout. A strong answer argues the Narrator as a dramatic device (a chorus who accuses the audience as much as the mothers) and analyses the contrast in the two young men’s speech as evidence of the \"Attitudes / influences of background and social factors towards successful futures\"."
    },
    {
     "code": "3.2.1 Blood Brothers — Class and social mobility",
     "q": "How does the play explore class?",
     "idea": "Class: two houses, two educations, two futures",
     "content": "The first specimen question is explicitly about this, and the AO3 bullets name \"The use of both women to explore ideas about class and social mobility\", \"Ideas about snobbery / privilege (or lack of)\" and \"The difference between how both women are treated by the police and how this highlights social attitudes towards privilege\". A student must be able to argue the play’s structural method: to give two boys the same start and let the audience watch the difference open."
    },
    {
     "code": "3.2.1 Blood Brothers — Childhood and growing up",
     "q": "How does Russell present childhood?",
     "idea": "Childhood and growing up: games, pacts and what is lost",
     "content": "The second specimen question. The indicative content names the \"Use and effect of dramatic devices to present childhood: use of games, pacts etc\" and the \"Presentation of passage of time on stage\". A strong answer argues why Russell puts adult actors in the children’s scenes and how the imaginative freedom of the early play is set against the narrowing choices of the second half."
    },
    {
     "code": "3.2.1 Blood Brothers — Superstition, fate and the Narrator’s curse",
     "q": "How does the play use superstition?",
     "idea": "Superstition and fate: whether the curse or society kills the twins",
     "content": "The play offers the audience two explanations and lets them compete: a superstition invented by a frightened woman, and a social order that makes the ending predictable. A student must be able to argue that tension — the Narrator insisting on fate while the plot demonstrates cause — and what Russell gains by refusing to settle it."
    },
    {
     "code": "3.2.1 Blood Brothers — Family, friendship and the 1980s",
     "q": "What does the play say about family and its moment?",
     "idea": "Family, friendship and the play’s own decade",
     "content": "Named AO3 bullets are \"Ideas about the effects of society on family and relationships\" and \"Comments on Russell’s concerns about Thatcherite principles of the 1980s\". The student must be able to argue how the play sets the blood bond and the friendship against the economic pressures on the family, and to use unemployment, housing and opportunity as context rather than as background detail."
    },
    {
     "code": "3.2.1 Blood Brothers — Form and structure",
     "q": "What must be said about the way Blood Brothers is written?",
     "idea": "The methods of Blood Brothers: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Blood Brothers that means the \"use of dialogue and action to highlight contrast between the boys’ experiences\", the \"Contrast between language between the two women and what this represents about their level of education / lifestyle etc\", the \"Dramatic effect of contrast between the presentation of the two boys’ backgrounds\", the \"Use and effect of dramatic devices to present childhood: use of games, pacts etc\", the \"Presentation of passage of time on stage\", and, in the musical version, the Narrator and the songs. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Blood Brothers — Context (AO3)",
     "q": "What counts as context for Blood Brothers?",
     "idea": "AO3: the ideas, perspectives and contextual factors Blood Brothers explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for this play are \"The use of both women to explore ideas about class and social mobility\", \"Ideas about snobbery / privilege (or lack of)\", \"The difference between how both women are treated by the police and how this highlights social attitudes towards privilege\", \"Ideas about the effects of society on family and relationships\", \"Attitudes / influences of background and social factors towards successful futures\", \"Ideas about the contrasting experience of the boys linked to social concerns\" and \"Comments on Russell’s concerns about Thatcherite principles of the 1980s\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Blood Brothers — The question and its marks",
     "q": "What does the Blood Brothers question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Blood Brothers",
     "content": "The specimen paper sets two questions on Blood Brothers, and students \"will answer one essay question from a choice of two\": (3) \"How does Russell use the characters of Mrs Johnstone and Mrs Lyons in Blood Brothers to explore ideas about class?\" with \"Write about: • how Russell presents Mrs Johnstone and Mrs Lyons • how Russell uses these characters to explore ideas about class\" and (4) \"How does Willy Russell present childhood and growing up in Blood Brothers?\" with \"Write about: • the ways particular characters change as they grow up • how Russell presents childhood and growing up by the ways he writes\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-dna",
   "component": "C2",
   "option": "modernText",
   "name": "Dennis Kelly: DNA",
   "caseStudies": [
    "Dennis Kelly | DNA — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 7: \"In DNA, Phil says: ‘I’m in charge. Everyone is happier.’  How does Kelly present Phil as a leader?\" Write about: • how Kelly presents the character of Phil • how Kelly uses the character of Phil to explore ideas about leadership [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 8: \"How does Kelly explore the effects of peer pressure in DNA?\" Write about: • how some of the characters respond to peer pressure • how Kelly presents the effects of peer pressure [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 DNA — Phil",
     "q": "How does Kelly present Phil as a leader?",
     "idea": "Phil: silence, logic and the authority nobody questions",
     "content": "The first specimen question is on him. The indicative content asks \"How Phil demonstrates particular qualities of leadership\", \"How other characters respond to Phil, in particular Leah, John Tate, Cathy and Richard\", \"Phil’s control of the situation at crisis moments in the play\", \"Phil’s motivation for certain decisions\" and \"Phil’s gradual removal from the group and possible reasons for this\". A student must be able to argue the paradox Kelly builds: a leader who says almost nothing until he issues instructions, and whose plans are morally monstrous and practically perfect."
    },
    {
     "code": "3.2.1 DNA — Leah",
     "q": "How does Kelly present Leah?",
     "idea": "Leah: the talker beside the silent leader",
     "content": "Leah speaks most of the play’s words and receives no answers. The indicative content names the \"Contrast between Leah and Phil\" as an AO2 bullet. A strong answer argues what Kelly gains from the pairing — a running moral commentary that changes nothing — and analyses her monologues as the play’s conscience, tied to the AO3 bullets on \"morality and social conscience\" and characters \"operating as choral function\"."
    },
    {
     "code": "3.2.1 DNA — John Tate, Cathy and Richard",
     "q": "How does Kelly present the group’s other leaders?",
     "idea": "John Tate, Cathy and Richard: the leaders before and after Phil",
     "content": "The play stages a sequence of regimes: the one that collapses under pressure, the one that becomes casually violent, and the one that inherits what is left. The indicative content names the dominant characters \"such as Phil, John Tate and Cathy\" and \"Cathy’s use of threats and violent language\". A student must be able to argue what Kelly shows by making the succession so easy."
    },
    {
     "code": "3.2.1 DNA — Adam, Brian and the dominated",
     "q": "How does Kelly present those who are dominated?",
     "idea": "Adam, Brian and Lou: what the group does to its weakest members",
     "content": "The indicative content names \"The behaviour of some of the characters who are dominated, such as Adam, Brian and Lou\" and \"How Leah and Richard respond to peer pressure\". A strong answer argues the play’s bleakest point — that the group’s second crime is deliberate where the first was accidental — and how Kelly withholds the scene itself so that the audience hears only decisions."
    },
    {
     "code": "3.2.1 DNA — Peer pressure and the group",
     "q": "How does Kelly explore peer pressure?",
     "idea": "The group: belonging, pressure and the loss of individual responsibility",
     "content": "The second specimen question. The AO3 bullets name \"Groups as representation of society\", \"humanity’s need for belonging / acceptance\" and \"The social construct of ‘group’ and how the behaviour of members of the group changes\". A student must be able to argue how Kelly makes ordinary teenagers commit what none of them would commit alone, and to use \"The consequences of peer pressure to the events in the play\" as evidence."
    },
    {
     "code": "3.2.1 DNA — Leadership, power and morality",
     "q": "What does the play say about leadership?",
     "idea": "Leadership and morality: order bought with a lie",
     "content": "The AO3 bullets name \"Ideas about human nature and the need for leadership\", \"social attitudes towards power and leadership\" and \"Ideas about good / evil\". A strong answer argues the play’s uncomfortable proposition — that the group really is happier once Phil takes charge — and what Kelly is asking the audience to conclude from that."
    },
    {
     "code": "3.2.1 DNA — Truth, lies and consequences",
     "q": "How does the play present the cover-up?",
     "idea": "Lies and consequences: the invention of a story to fit the evidence",
     "content": "The plot is a sequence of fabrications, each more elaborate than the last, and the play’s title points at the forensic detail the children think they have covered. A student must be able to argue how Kelly uses the mechanics of the cover-up to explore responsibility, and to analyse the cold, procedural register in which the plans are made."
    },
    {
     "code": "3.2.1 DNA — Structure, staging and society in miniature",
     "q": "How does the play’s form carry its meaning?",
     "idea": "Form and staging: short scenes, offstage events and \"characters as microcosm for society\"",
     "content": "The play has no set, three recurring locations, and every violent event happens offstage and is reported. A strong answer argues that as method — the audience is given deliberation instead of action — and connects it to the AO3 bullet \"How certain characters are representative of particular aspects of society\" and to Kelly’s \"use of characters as microcosm for society\"."
    },
    {
     "code": "3.2.1 DNA — Form and structure",
     "q": "What must be said about the way DNA is written?",
     "idea": "The methods of DNA: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For DNA that means the \"Contrast between Leah and Phil\", the \"Use of dramatic devices such as food\", stage directions such as \"‘places can of coke on the floor’\", the \"Contrast between Phil’s silence / instructions / orders\", \"Phil’s use of language to suggest forensic, logical thought\", \"Phil’s use of long speeches to dominate and control\", \"Cathy’s use of threats and violent language\", and \"Kelly’s use of characters as microcosm for society\" in a play built of short scenes with no stage setting. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 DNA — Context (AO3)",
     "q": "What counts as context for DNA?",
     "idea": "AO3: the ideas, perspectives and contextual factors DNA explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for this play are \"Ideas about human nature and the need for leadership\", \"How certain characters are representative of particular aspects of society\", \"Ideas about good / evil and how these are represented through Phil and others’ reactions to him\", \"Ideas about morality and social conscience\", \"Groups as representation of society\", \"characters operating as choral function, outside the events of the play\", \"social attitudes towards power and leadership\", \"humanity’s need for belonging / acceptance\" and \"The social construct of ‘group’ and how the behaviour of members of the group changes\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 DNA — The question and its marks",
     "q": "What does the DNA question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on DNA",
     "content": "The specimen paper sets two questions on DNA, and students \"will answer one essay question from a choice of two\": (7) \"In DNA, Phil says: ‘I’m in charge. Everyone is happier.’  How does Kelly present Phil as a leader?\" with \"Write about: • how Kelly presents the character of Phil • how Kelly uses the character of Phil to explore ideas about leadership\" and (8) \"How does Kelly explore the effects of peer pressure in DNA?\" with \"Write about: • how some of the characters respond to peer pressure • how Kelly presents the effects of peer pressure\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-a-taste-of-honey",
   "component": "C2",
   "option": "modernText",
   "name": "Shelagh Delaney: A Taste of Honey",
   "caseStudies": [
    "Shelagh Delaney | A Taste of Honey — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 11: \"How does Delaney present the character of Helen as a mother in A Taste of Honey?\" Write about: • how Delaney presents the character of Helen • how Delaney uses the character of Helen to explore ideas about motherhood [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 12: \"How does Delaney present prejudice in A Taste of Honey?\" Write about: • the ideas about prejudice in A Taste of Honey • how Delaney presents these ideas by the ways she writes [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 A Taste of Honey — Helen",
     "q": "How does Delaney present Helen as a mother?",
     "idea": "Helen: the mother who leaves, and what motherhood is made to mean",
     "content": "The first specimen question is on her. The indicative content asks for \"Helen’s relationship with Jo and how this is shown through dialogue and action\", \"Helen’s behaviour and what this demonstrates about her attitude towards being a mother\", \"Helen’s relationship with Peter, attitude towards Geoff, reactions to the news of Jo’s pregnancy and the father of her baby\" and a \"Response to Helen as a mother, possibly involving treatment of reactions to Helen as a woman as well as a mother\". A student must be able to argue both the neglect and the reasons for it, which the mark scheme invites as \"Possible reasons for Helen’s behaviour and attitudes\"."
    },
    {
     "code": "3.2.1 A Taste of Honey — Jo",
     "q": "How does Delaney present Jo?",
     "idea": "Jo: adolescence, pregnancy and the refusal to be pitied",
     "content": "Jo is on stage almost throughout and grows up across the play’s two acts. A strong answer argues how Delaney gives her wit and defiance rather than victimhood, analyses the shifts in her dialogue with each of the other characters, and shows how her situation is used to test every attitude the play examines."
    },
    {
     "code": "3.2.1 A Taste of Honey — Geoff",
     "q": "How does Delaney present Geoff?",
     "idea": "Geoff: the friend who stays, and the prejudice he meets",
     "content": "The indicative content names \"Geoff’s treatment by others\" among the examples of prejudice. A student must be able to argue what Delaney does with a character who supplies the care Jo’s mother does not, and how the play makes the audience notice the hostility he attracts from characters they may otherwise like."
    },
    {
     "code": "3.2.1 A Taste of Honey — Peter and the boy",
     "q": "How does Delaney present the men who come and go?",
     "idea": "Peter and the sailor: the men who pass through the flat",
     "content": "The indicative content names Helen’s relationship with Peter and the \"use of scenes between Jo and the boyfriend to report / provide perspective on Helen’s behaviour\", and includes among the play’s prejudices \"racist views towards Jo’s relationship\". A strong answer argues how Delaney uses these figures structurally — arriving, promising and leaving — and how the audience’s view of each woman is refracted through them."
    },
    {
     "code": "3.2.1 A Taste of Honey — Motherhood",
     "q": "What does the play suggest about motherhood?",
     "idea": "Motherhood: two mothers and the role neither will perform as expected",
     "content": "The AO3 bullets ask directly for \"The kind of mother Helen portrays and what this suggests about the role of ‘motherhood’\" and a \"Possible evaluation of the attitudes towards motherhood explored through this presentation\". A student must be able to argue the pattern the play sets up — a daughter repeating and refusing her mother’s position — and what Delaney is claiming against the conventional picture."
    },
    {
     "code": "3.2.1 A Taste of Honey — Prejudice",
     "q": "How does Delaney present prejudice?",
     "idea": "Prejudice: racism, sexual orientation and class",
     "content": "The second specimen question. The indicative content lists \"Examples of the different types of prejudice: racism, sexual orientation, class prejudice\" and asks about \"Different characters’ prejudice about / towards each other\". A strong answer argues that the play puts prejudice in the mouths of sympathetic characters, and weighs \"the extent to which the audience is invited to censure / observe aspects of prejudice\"."
    },
    {
     "code": "3.2.1 A Taste of Honey — Class, poverty and place",
     "q": "How does the play present class and its setting?",
     "idea": "Class and place: the rented flat, the money and the city outside it",
     "content": "The whole play happens in one poor flat that the characters cannot afford to leave. A student must be able to argue how Delaney uses the setting and the talk of rent, work and moving on to make economic pressure the condition of everything else, and to treat class as one of the \"Different kinds of prejudice examined in the play\"."
    },
    {
     "code": "3.2.1 A Taste of Honey — Staging, and how audiences receive the play",
     "q": "How do form and reception matter?",
     "idea": "Form and reception: direct address, reported action, and a \"more modern production\"",
     "content": "The AO3 bullets include \"Ideas about prejudice relevant to a contemporary audience and how these might be altered by a more modern production\", and the AO2 bullets name the \"Contrast between on-stage and reported action and effects of either / both on audience\". A strong answer analyses those staging choices and argues how a play from 1958 is received now — exactly the contextual reading the mark scheme licenses."
    },
    {
     "code": "3.2.1 A Taste of Honey — Form and structure",
     "q": "What must be said about the way A Taste of Honey is written?",
     "idea": "The methods of A Taste of Honey: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For A Taste of Honey that means the \"use of dialogue to present the relationship between Helen and Jo\", the \"differences between on-stage and off-stage action to report Helen’s behaviour\", the \"use of scenes between Jo and the boyfriend to report / provide perspective on Helen’s behaviour\", the \"Use of scene structure to present ideas / alternate points of view\", the \"Contrast between on-stage and reported action and effects of either / both on audience\", and the \"Use and effects of particular stage directions / actions to suggest meaning\". Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 A Taste of Honey — Context (AO3)",
     "q": "What counts as context for A Taste of Honey?",
     "idea": "AO3: the ideas, perspectives and contextual factors A Taste of Honey explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for this play are \"The kind of mother Helen portrays and what this suggests about the role of ‘motherhood’\", \"Treatment of Helen’s moral behaviour and how this might differ from traditional societal views of motherhood\", \"Possible reasons for Helen’s behaviour and attitudes\", \"Possible evaluation of the attitudes towards motherhood explored through this presentation of Helen\", \"Different kinds of prejudice examined in the play: racism, sexism, class prejudice\", \"Treatment of presentation of particular characters and the extent to which the audience is invited to censure / observe aspects of prejudice\" and \"Ideas about prejudice relevant to a contemporary audience and how these might be altered by a more modern production\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 A Taste of Honey — The question and its marks",
     "q": "What does the A Taste of Honey question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on A Taste of Honey",
     "content": "The specimen paper sets two questions on A Taste of Honey, and students \"will answer one essay question from a choice of two\": (11) \"How does Delaney present the character of Helen as a mother in A Taste of Honey?\" with \"Write about: • how Delaney presents the character of Helen • how Delaney uses the character of Helen to explore ideas about motherhood\" and (12) \"How does Delaney present prejudice in A Taste of Honey?\" with \"Write about: • the ideas about prejudice in A Taste of Honey • how Delaney presents these ideas by the ways she writes\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-princess-and-the-hustler",
   "component": "C2",
   "option": "modernText",
   "name": "Chinonyerem Odimba: Princess & The Hustler (First teaching 2023, first exam 2025)",
   "caseStudies": [
    "Chinonyerem Odimba | Princess & The Hustler (First teaching 2023, first exam 2025) — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "No specimen question exists for this text: the specification marks it \"First teaching 2023, first exam 2025\" and the specimen paper and mark scheme date from 2014, so AQA prints no stem and no indicative content for it. The question will take the standard Section A form — one essay from a choice of two, 30 marks (AO1=12, AO2=12, AO3=6) plus AO4 4 marks, with two \"Write about:\" bullets, the second on the writer’s methods.",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Princess & The Hustler — Princess",
     "q": "How does Odimba present Princess?",
     "idea": "Princess: a child’s imagination against the world she is growing into",
     "content": "Princess is the play’s centre and its point of view: a young girl whose daydreams of being admired collide with a city that has decided what she may be. A student must be able to argue how the play uses her age — what she understands, what she mishears and what the audience understands over her head — and to analyse the staging of her imagined world as a method, not a decoration."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Wendell Sr, the Hustler",
     "q": "How does Odimba present the returning father?",
     "idea": "The Hustler: the father who comes back, and what he brings with him",
     "content": "The absent father’s return sets the play going and unsettles a household that had arranged itself without him. A strong answer argues what Odimba does with him — charm, unreliability, and a claim on the family that is also a claim on the audience’s sympathy — and how his arrival forces every other character to declare a position."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Mavis and Wendell Jr",
     "q": "How does Odimba present the mother and the older brother?",
     "idea": "Mavis and Wendell Jr: the ones who held the household together",
     "content": "The mother’s work and pride and the son’s protectiveness are the ground the play disturbs. A student must be able to argue how the dialogue distinguishes the generation that arrived from the generation born here, and how the play sets the effort of respectability against the treatment the family receives outside the door."
    },
    {
     "code": "3.2.1 Princess & The Hustler — the half-sister and the outsider in the family",
     "q": "How does the play use the newcomer?",
     "idea": "The half-sister: the arrival that exposes what the family will not say",
     "content": "The play brings a child from the father’s other life into the house, and the household has to decide what it owes her. A strong answer argues why Odimba chooses that device — it makes questions of colour, belonging and family loyalty concrete inside one room — rather than narrating the plot."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Race, prejudice and the colour bar",
     "q": "How does the play present prejudice?",
     "idea": "Race and the colour bar: the city outside the front door",
     "content": "The play is set against the Bristol Bus Boycott of 1963 and the refusal to employ Black drivers and conductors. A student must be able to argue how Odimba keeps that public campaign at the edge of a domestic play and lets it press inward, and to use it as AO3 — \"the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\"."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Family, belonging and home",
     "q": "What does the play say about family?",
     "idea": "Family and belonging: who counts as ours",
     "content": "Every relationship in the play is a question about belonging — to a family, to a street, to a country. A strong answer argues how Odimba makes the two scales answer each other, so that the negotiation inside the house is also a negotiation about who belongs in the city."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Beauty, colour and self-image",
     "q": "How does the play present ideas about beauty?",
     "idea": "Beauty and self-image: a child measuring herself against what she is shown",
     "content": "The play sets a young girl’s longing to be judged beautiful against a culture whose standards exclude her. A student must be able to argue that as one of the play’s central ideas rather than a subplot, and to show how the writing makes the audience feel the cost of it."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Dreams, resistance and hope",
     "q": "How does the play balance hardship and hope?",
     "idea": "Dreams and resistance: imagination as a way of refusing",
     "content": "The play keeps a child’s fantasy and a community’s organised protest in the same frame. A strong answer argues that Odimba presents imagination and collective action as two forms of the same refusal, and analyses how the ending places the family in relation to the campaign’s outcome."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Form and structure",
     "q": "What must be said about the way Princess & The Hustler is written?",
     "idea": "The methods of Princess & The Hustler: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Princess & The Hustler that means the dialogue and its shifts of register between generations, the way a child’s imagination is staged, the use of one domestic set with a street and a city beyond it, the structure of scenes that move between the family and the campaign outside, and the choice to filter public history through a young girl’s point of view. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Princess & The Hustler — Context (AO3)",
     "q": "What counts as context for Princess & The Hustler?",
     "idea": "AO3: the ideas, perspectives and contextual factors Princess & The Hustler explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". No indicative content exists for this text, because it postdates the 2014 specimen materials; the contexts a student can argue are the ones the mark scheme itself defines — \"the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\" — which for this play means Bristol in 1963, the colour bar in employment and the Bristol Bus Boycott, the experience of the Windrush generation and their British-born children, and the ideas about beauty, belonging and family the play sets against them. Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Princess & The Hustler — The question and its marks",
     "q": "What does the Princess & The Hustler question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Princess & The Hustler",
     "content": "Princess & The Hustler carries \"First teaching 2023, first exam 2025\" in the specification, so the 2014 specimen paper and mark scheme set no question on it and print no indicative content for it; the question will take the same form as every other Section A question — one essay from a choice of two, each with two \"Write about:\" bullets, the first on the substance and the second on \"how … presents these ideas by the ways he writes\" — and will be marked on the same grid, 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-leave-taking",
   "component": "C2",
   "option": "modernText",
   "name": "Winsome Pinnock: Leave Taking (First teaching 2023, first exam 2025)",
   "caseStudies": [
    "Winsome Pinnock | Leave Taking (First teaching 2023, first exam 2025) — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "No specimen question exists for this text: the specification marks it \"First teaching 2023, first exam 2025\" and the specimen paper and mark scheme date from 2014, so AQA prints no stem and no indicative content for it. The question will take the standard Section A form — one essay from a choice of two, 30 marks (AO1=12, AO2=12, AO3=6) plus AO4 4 marks, with two \"Write about:\" bullets, the second on the writer’s methods.",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Leave Taking — Enid",
     "q": "How does Pinnock present Enid?",
     "idea": "Enid: the mother who came, worked and kept her grief private",
     "content": "Enid holds the play together: a woman who left Jamaica, works hard, insists on respectability and cannot say what it has cost her. A student must be able to argue how Pinnock reveals her by increments — what she will not discuss, the letters and the money, the moment her composure breaks — and to analyse the language in which she talks to her daughters against the language she uses with someone of her own generation."
    },
    {
     "code": "3.2.1 Leave Taking — Del",
     "q": "How does Pinnock present Del?",
     "idea": "Del: the daughter who leaves, and what she finds instead",
     "content": "Del is the play’s rebellion and its second centre. A strong answer argues her refusal of her mother’s terms, the alternative household she moves into, and the way Pinnock makes her inheritance reach her anyway — so that the leave-taking of the title is neither a clean break nor a defeat."
    },
    {
     "code": "3.2.1 Leave Taking — Viv",
     "q": "How does Pinnock present Viv?",
     "idea": "Viv: the daughter who complies, and the cost of doing so",
     "content": "Viv carries her mother’s ambitions in the form of examinations and expectations. A student must be able to argue the pairing of the two sisters — one refusing, one performing, both dissatisfied — and to show how the play uses education as the place where the generations’ hopes and disappointments meet."
    },
    {
     "code": "3.2.1 Leave Taking — Mai and Brod",
     "q": "How does Pinnock use the characters outside the family?",
     "idea": "Mai and Brod: the obeah woman and the old friend who tell the truth",
     "content": "The play sets two older figures beside the mother: one who reads people and will not be lied to, one who remembers what was left behind. A strong answer argues them as dramatic devices as well as characters — they license the confidences the family scenes cannot hold — and connects them to the play’s treatment of inherited belief and of memory."
    },
    {
     "code": "3.2.1 Leave Taking — Migration, home and return",
     "q": "How does the play present migration?",
     "idea": "Migration and home: the country left, the country arrived in, and neither",
     "content": "The play’s subject is what happens to a family between two places. A student must be able to argue the different relations to home the characters hold — a mother who cannot go back, daughters who have never been — and to use the Windrush generation’s experience as context in the mark scheme’s sense: social structures, cultural contexts and periods in time."
    },
    {
     "code": "3.2.1 Leave Taking — Mothers and daughters",
     "q": "How does the play present the generations?",
     "idea": "Mothers and daughters: duty, disappointment and inheritance",
     "content": "Every scene is in some way a negotiation between a mother and a daughter, or between a woman and the mother she left. A strong answer argues the pattern across the generations rather than the individual quarrels, and shows how Pinnock makes the same demand look like love from one side and control from the other."
    },
    {
     "code": "3.2.1 Leave Taking — Identity, belonging and Britishness",
     "q": "What does the play say about belonging?",
     "idea": "Identity and belonging: being of a place that does not claim you",
     "content": "The daughters are British and are treated as though they were not; the mother is not and has made a life here. A student must be able to argue how the play uses speech, work and expectation to dramatise that, and to weigh what it suggests about who is allowed to belong."
    },
    {
     "code": "3.2.1 Leave Taking — Language, ritual and the play’s form",
     "q": "How do form and language carry meaning?",
     "idea": "Language and ritual: Creole and London speech, and the shape of a leave-taking",
     "content": "Pinnock writes two Englishes into one family and builds the play out of short scenes in two homes. A strong answer analyses the code-switching as method — what each register can and cannot say — and argues how the title’s ritual of departure structures the ending."
    },
    {
     "code": "3.2.1 Leave Taking — Form and structure",
     "q": "What must be said about the way Leave Taking is written?",
     "idea": "The methods of Leave Taking: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Leave Taking that means the contrast between the Jamaican Creole of the older characters and the London speech of the daughters, the two-hander scenes in which a confidence is extracted, the structure of short scenes moving between two households, and the use of a figure outside the family to draw out what cannot be said inside it. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Leave Taking — Context (AO3)",
     "q": "What counts as context for Leave Taking?",
     "idea": "AO3: the ideas, perspectives and contextual factors Leave Taking explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". No indicative content exists for this text, because it postdates the 2014 specimen materials; the contexts a student can argue are those the mark scheme defines — \"the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\" — which for this play means the experience of the Windrush generation in Britain, the position of their British-born daughters, migration and the idea of return, obeah and inherited belief, and the pressures of work, money and respectability on a single-parent household in London. Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Leave Taking — The question and its marks",
     "q": "What does the Leave Taking question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Leave Taking",
     "content": "Leave Taking carries \"First teaching 2023, first exam 2025\" in the specification, so the 2014 specimen paper and mark scheme set no question on it and print no indicative content for it; the question will take the same form as every other Section A question — one essay from a choice of two, each with two \"Write about:\" bullets, the first on the substance and the second on \"how … presents these ideas by the ways he writes\" — and will be marked on the same grid, 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-lord-of-the-flies",
   "component": "C2",
   "option": "modernText",
   "name": "William Golding: Lord of the Flies",
   "caseStudies": [
    "William Golding | Lord of the Flies — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 13: \"Do you think Piggy is an important character in Lord of the Flies?\" Write about: • how Golding presents the character of Piggy • how Golding uses Piggy to present ideas about people and society [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 14: \"What do you think is the importance of the ‘beast’ in Lord of the Flies?\" Write about: • how different characters respond to the ‘beast’ • how Golding uses the ‘beast’ to explore ideas about society and people in Lord of the Flies [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Lord of the Flies — Piggy",
     "q": "Is Piggy an important character?",
     "idea": "Piggy: reason, weakness and the treatment of the outsider",
     "content": "The first specimen question is on him. The indicative content asks for \"Examples of Piggy’s behaviour and relationships with others\", \"What Piggy says and does\", \"How other characters behave towards Piggy\" and \"Piggy’s attitude towards life on the island\", with, as AO2, \"The symbolism of Piggy’s glasses\" and \"How Golding creates sympathy for Piggy\". A student must be able to argue importance in terms of what Golding uses him for — the AO3 bullets call him a \"representation of outsider in society\", a \"victim of prejudice\" and the voice of \"‘inconvenient truth’\"."
    },
    {
     "code": "3.2.1 Lord of the Flies — Ralph",
     "q": "How does Golding present Ralph?",
     "idea": "Ralph: elected leader, and the difficulty of holding a group together",
     "content": "Ralph begins with the conch and ends being hunted. A strong answer argues the whole trajectory — rules, shelters, the fire, the failing assemblies — as Golding’s account of how fragile consent is, and analyses how the narration keeps the reader with Ralph so that the collapse is experienced rather than described."
    },
    {
     "code": "3.2.1 Lord of the Flies — Jack",
     "q": "How does Golding present Jack?",
     "idea": "Jack: hunting, fear and a power that does not need consent",
     "content": "Jack offers meat, ritual and protection from the beast, and wins. A student must be able to argue how Golding makes that appeal credible rather than merely wicked, and to connect it to the AO3 bullet \"The beast as symbol of the ways authorities instil fear using threat\"."
    },
    {
     "code": "3.2.1 Lord of the Flies — Simon and Roger",
     "q": "How does Golding use Simon and Roger?",
     "idea": "Simon and Roger: the one who understands, and the one who enjoys the cruelty",
     "content": "Simon works out what the beast is and is killed for coming to say so; Roger tests how far he can go and finds there is no limit. A strong answer argues the pairing as the novel’s two poles, and analyses how Golding writes the scene of Simon’s death so that the reader can see what the boys cannot."
    },
    {
     "code": "3.2.1 Lord of the Flies — The beast",
     "q": "What is the importance of the beast?",
     "idea": "The beast: fear made into a thing, and what it does to a group",
     "content": "The second specimen question. The indicative content asks for \"The little ’uns’ fear of the beast\", \"The use of the beast to control and dominate\", \"Jack’s need to hunt and dominate the beast\" and \"Other characters’ more rational responses\", and the AO3 bullets call it \"a metaphor of external threat\", \"exemplification of primitive fear\" and \"representation of the fear in humanity\". A student must be able to argue that the beast is not on the island."
    },
    {
     "code": "3.2.1 Lord of the Flies — Civilisation and savagery",
     "q": "How does the novel present the breakdown of order?",
     "idea": "Civilisation and savagery: rules, the conch and the fire",
     "content": "A named AO3 bullet is \"Ideas about the way society breaks down without external control\". A strong answer argues the pattern of the collapse — the assemblies that stop working, the fire that goes out, the objects that lose their authority — and asks whether Golding presents civilisation as something learned and lost or as a thin covering over what was always there."
    },
    {
     "code": "3.2.1 Lord of the Flies — Human nature and violence",
     "q": "What does the novel claim about people?",
     "idea": "Human nature: the argument the island is designed to test",
     "content": "The AO3 bullets ask about \"how this is used to explore ideas about human nature\" and \"how different characters’ response to the beast demonstrates different aspects of human behaviour\". A student must be able to argue the novel as a proposition and to weigh it — including the objection that the experiment is arranged to produce its result — which is exactly the \"informed personal response\" AO1 requires."
    },
    {
     "code": "3.2.1 Lord of the Flies — Symbol, setting and the ending",
     "q": "How do the novel’s methods carry its ideas?",
     "idea": "Symbol and structure: conch, glasses, fire, and the naval officer",
     "content": "Golding gives almost every object a second meaning and ends by having an adult arrive to end the hunt. A strong answer analyses that symbolic economy without reducing the novel to a code, and argues the effect of the final rescue — a reversal that changes the scale of the book and implicates the world the boys are returning to."
    },
    {
     "code": "3.2.1 Lord of the Flies — Form and structure",
     "q": "What must be said about the way Lord of the Flies is written?",
     "idea": "The methods of Lord of the Flies: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Lord of the Flies that means \"The symbolism of Piggy’s glasses\", \"How Golding describes significant events\", \"The language used to describe\" a character, \"How Golding creates sympathy\", \"The ways in which the beast is described\", \"The beast as a metaphor of external threat\", \"The beast as exemplification of primitive fear\", and the third-person narration that withholds judgement while arranging the evidence. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Lord of the Flies — Context (AO3)",
     "q": "What counts as context for Lord of the Flies?",
     "idea": "AO3: the ideas, perspectives and contextual factors Lord of the Flies explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for this novel are \"Piggy as representation of outsider in society\", \"Piggy’s role as victim of prejudice\", \"Others’ reaction to Piggy’s perceived weakness and how this is used to explore ideas about human nature\", \"Piggy’s speech as representative of ‘inconvenient truth’\", \"The beast as symbol of the ways authorities instil fear using threat\", \"Ideas about the way society breaks down without external control\", \"How different characters’ response to the beast demonstrates different aspects of human behaviour\" and \"The beast as representation of the fear in humanity\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Lord of the Flies — The question and its marks",
     "q": "What does the Lord of the Flies question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Lord of the Flies",
     "content": "The specimen paper sets two questions on Lord of the Flies, and students \"will answer one essay question from a choice of two\": (13) \"Do you think Piggy is an important character in Lord of the Flies?\" with \"Write about: • how Golding presents the character of Piggy • how Golding uses Piggy to present ideas about people and society\" and (14) \"What do you think is the importance of the ‘beast’ in Lord of the Flies?\" with \"Write about: • how different characters respond to the ‘beast’ • how Golding uses the ‘beast’ to explore ideas about society and people in Lord of the Flies\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-telling-tales",
   "component": "C2",
   "option": "modernText",
   "name": "AQA Anthology: Telling Tales",
   "caseStudies": [
    "AQA Anthology | Telling Tales — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 15: \"How do writers present characters losing their innocence in ‘The Darkness Out There’ and in one other story from Telling Tales?\" Write about: • some of the ideas about loss of innocence that are presented in the two stories • how the writers present these ideas by the ways they write [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 16: \"How do writers present conflict in ‘A Family Supper’ and in one other story from Telling Tales?\" Write about: • some of the ideas about conflict that are presented in the two stories • how the writers present these ideas by the ways they write [30 marks] AO4 [4 marks]",
    "The mark scheme prints a rubric for this text that applies to no other: \"Examiners are reminded that while a comparatively structured response is permitted, comparative skills are not being assessed and should not be rewarded.\" and \"Students are required to write about two stories from Telling Tales. In reference to questions 15 and 16 therefore where ‘whole text’ is referred to in the mark scheme it means two full stories.\" The stories the specimen questions and indicative content name are ‘The Darkness Out There’, ‘A Family Supper’, ‘Chemistry’, ‘The Invisible Mass of the Back Row’, ‘Korea’ and ‘My Polish Teacher’s Tie’, with the instruction that \"any other suitable story\" may be used.",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Telling Tales — Two stories, not one text",
     "q": "What exactly does a student have to write about?",
     "idea": "The two-story rule that governs every Telling Tales answer",
     "content": "Uniquely among the set texts, this one is an anthology, and the question always names one story and asks for \"one other story from Telling Tales\". The mark scheme states: \"Students are required to write about two stories from Telling Tales. In reference to questions 15 and 16 therefore where ‘whole text’ is referred to in the mark scheme it means two full stories.\" The strategic consequence is that a student must know several stories well enough to pair any named one with a strong partner, and must divide the answer between them."
    },
    {
     "code": "3.2.1 Telling Tales — Comparison is not assessed",
     "q": "Should the two stories be compared?",
     "idea": "The warning that comparative skill earns nothing here",
     "content": "The mark scheme prints a rubric that applies to no other Section A text: \"Examiners are reminded that while a comparatively structured response is permitted, comparative skills are not being assessed and should not be rewarded.\" A student may organise the essay comparatively, but the marks come from the same AO1, AO2 and AO3 strands as any other modern text, applied to each story — a point worth knowing, because Section B of the same paper rewards comparison and this section does not."
    },
    {
     "code": "3.2.1 Telling Tales — ‘The Darkness Out There’",
     "q": "What does the specimen ask of this story?",
     "idea": "Penelope Lively, ‘The Darkness Out There’: naivety and the late revelation",
     "content": "The specimen question names it for loss of innocence. The indicative content asks for \"What Sandra / Kerry say and do at the start and how this changes\", \"Sandra’s and Kerry’s reactions to Mrs Rutter\", \"The contrast between how Sandra and Kerry change / don’t change\" and \"How Sandra loses her innocence and how first impressions can be wrong\", with, as AO2, the \"Description of Sandra’s initial journey to Packer’s End\", \"What Packer’s End is used to represent to Sandra over time\" and \"How Lively uses the surprise revelation to demonstrate Sandra’s naivety\"."
    },
    {
     "code": "3.2.1 Telling Tales — ‘A Family Supper’",
     "q": "What does the specimen ask of this story?",
     "idea": "Kazuo Ishiguro, ‘A Family Supper’: conflict withheld and tension built",
     "content": "The second specimen question names it for conflict. The indicative content asks for the \"Treatment of the character of the father, the son and the daughter\", \"The lack of communication between father and son\", \"The conflict, or perceived conflict, between how the father, the son, the daughter and the absent mother view ‘good’ parenting\", with, as AO2, the \"Use of dialogue\", \"Use of hints / references to mother\", the \"Treatment of the meal / fish as metaphor for conflict / opportunity to resolve conflict\" and the \"Ways in which tension is increased throughout the story\"."
    },
    {
     "code": "3.2.1 Telling Tales — Choosing the second story",
     "q": "How should the second story be chosen?",
     "idea": "The partner story: the named alternatives and \"any other suitable story\"",
     "content": "The indicative content names the stories examiners expect to see paired with the set one: for loss of innocence, \"‘A Family Supper’ or ‘Chemistry’ or ‘The Invisible Mass of the Back Row’ or any other suitable story\"; for conflict, \"‘The Darkness Out There’ or ‘Korea’ or ‘My Polish Teacher’s Tie’ or any other suitable story\". A student must be able to choose a partner that genuinely carries the idea in the question and gives them something to say about method, not simply the story they remember best."
    },
    {
     "code": "3.2.1 Telling Tales — Innocence, experience and cruelty",
     "q": "Which ideas run across the collection?",
     "idea": "Loss of innocence and the motive for cruelty",
     "content": "The AO3 bullets include \"Ideas about youth and naivety compared to attitudes towards the elderly\", \"How society judges on appearances and surface features\" and \"Exploration of motivation for cruelty in certain circumstances\". A strong answer traces these as ideas the writers explore rather than as events in a plot, and argues what each story concludes about them."
    },
    {
     "code": "3.2.1 Telling Tales — Family, generation and duty",
     "q": "How do the stories handle family and generation?",
     "idea": "Parents, children and the generational divide",
     "content": "The AO3 bullets for the conflict question name \"Comments related to the ways parenthood is viewed by father and son\", \"Exploration of different attitudes / expectations of parent and child and how these are altered by generational divide\", \"Ideas about cultural attitudes towards expressions of affection\" and \"Ideas about filial duty\". A student must be able to argue how differently the stories in the collection handle what is owed between generations, and what cultural expectations shape that."
    },
    {
     "code": "3.2.1 Telling Tales — The short story as a form",
     "q": "What is distinctive about writing on short stories?",
     "idea": "Short story method: compression, point of view and the ending",
     "content": "The AO2 marks here reward the techniques peculiar to the form: a narrow point of view, information withheld, a symbol carried through a few pages, a final turn that reinterprets everything before it. A strong answer argues those as choices — what a writer can do in ten pages that a novelist cannot — and uses precise reference despite the closed-book exam."
    },
    {
     "code": "3.2.1 Telling Tales — Form and structure",
     "q": "What must be said about the way Telling Tales is written?",
     "idea": "The methods of Telling Tales: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Telling Tales that means the handling of a first-person or limited point of view, the withholding of information until a late revelation (\"How Lively uses the surprise revelation to demonstrate Sandra’s naivety\"), the \"Use of dialogue to present the relationship between father and son\", the \"Use of hints / references\" to an absent character, the \"Treatment of the meal / fish as metaphor\", and the \"Ways in which tension is increased throughout the story\" — the concentrated methods of the short story form. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Telling Tales — Context (AO3)",
     "q": "What counts as context for Telling Tales?",
     "idea": "AO3: the ideas, perspectives and contextual factors Telling Tales explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for these questions include \"Ideas about youth and naivety compared to attitudes towards the elderly\", \"How society judges on appearances and surface features\", \"Any comments related to ideas about Germans as ‘enemy’ – changing attitudes across time\", \"Exploration of motivation for cruelty in certain circumstances\", \"Comments related to the ways parenthood is viewed by father and son\", \"Exploration of different attitudes / expectations of parent and child and how these are altered by generational divide\", \"Ideas about cultural attitudes towards expressions of affection\", \"Ideas about filial duty\", and \"Societal / cultural influences\" and \"Relevant treatment of contextual factors\" in whichever second story is chosen. Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Telling Tales — The question and its marks",
     "q": "What does the Telling Tales question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Telling Tales",
     "content": "The specimen paper sets two questions on Telling Tales, and students \"will answer one essay question from a choice of two\": (15) \"How do writers present characters losing their innocence in ‘The Darkness Out There’ and in one other story from Telling Tales?\" with \"Write about: • some of the ideas about loss of innocence that are presented in the two stories • how the writers present these ideas by the ways they write\" and (16) \"How do writers present conflict in ‘A Family Supper’ and in one other story from Telling Tales?\" with \"Write about: • some of the ideas about conflict that are presented in the two stories • how the writers present these ideas by the ways they write\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-animal-farm",
   "component": "C2",
   "option": "modernText",
   "name": "George Orwell: Animal Farm",
   "caseStudies": [
    "George Orwell | Animal Farm — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 17: \"How does Orwell use the character of Napoleon to explore ideas about power and control in Animal Farm?\" Write about: • how Orwell presents the character of Napoleon • how Orwell uses the character of Napoleon to present ideas about power and control in the novel [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 18: \"‘All animals are equal, but some are more equal than others.’  How far is this idea important in Animal Farm?\" Write about: • what you think Orwell is saying about equality and inequality • how Orwell presents these ideas through the events of the novel [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Animal Farm — Napoleon",
     "q": "How does Orwell use Napoleon to explore power and control?",
     "idea": "Napoleon: how power is taken quietly and kept by force",
     "content": "The first specimen question is on him. The indicative content asks for \"Exploration of Napoleon’s behaviour\", \"What other characters think of Napoleon\", \"How Napoleon manipulates and controls other characters\" and \"How Napoleon changes\". A student must be able to argue the method as well as the man — the dogs, the expulsion of a rival, the rewriting of the past — and to use the AO3 bullets \"Napoleon as symbol of tyranny\" and \"Exploration of the ways in which power and control can be gained and maintained\"."
    },
    {
     "code": "3.2.1 Animal Farm — Squealer and propaganda",
     "q": "How does Orwell present propaganda?",
     "idea": "Squealer: language as an instrument of control",
     "content": "A named AO3 bullet is \"The use of propaganda to control\". A strong answer analyses how Squealer works — statistics nobody can check, appeals to the fear of the farmer’s return, the steady revision of what everyone remembers — and argues that Orwell makes language, not violence, the pigs’ most effective weapon."
    },
    {
     "code": "3.2.1 Animal Farm — Snowball and Old Major",
     "q": "How does Orwell present the other pigs?",
     "idea": "Old Major and Snowball: the ideal, and the rival who is erased",
     "content": "The revolution begins with a vision and acquires a second leader who is then expelled and turned into an enemy. A student must be able to argue what Orwell does with them — how quickly a principle becomes a slogan, and how thoroughly a person can be removed from the record — and to connect it to \"How the ideals of a political system are eroded over time by those with more power\"."
    },
    {
     "code": "3.2.1 Animal Farm — Boxer, Clover and the other animals",
     "q": "How does Orwell present the workers?",
     "idea": "Boxer, Clover, Benjamin and Mollie: the governed",
     "content": "The indicative content names \"How Orwell presents characters with, and without, power / equality such as the hens and Boxer\". A strong answer argues why the book’s most sympathetic character is also the one whose loyalty makes the tyranny possible, and sets Benjamin’s knowing inaction and Mollie’s desertion beside him as other ways of failing to resist."
    },
    {
     "code": "3.2.1 Animal Farm — The commandments and the rewriting of history",
     "q": "How does Orwell present the commandments?",
     "idea": "The Seven Commandments: a structure that records the corruption",
     "content": "The second specimen question quotes the last of them. The indicative content asks for \"What the commandments are\", \"Why the commandments exist and what they represent\", \"How the commandments are used / manipulated for personal gain\", and, as AO2, \"The change in the commandments as a structural feature to highlight the decay of corrupt power\" and \"The ending of the novel and how the one commandment left is linked to the pigs inside the house\". A student must be able to argue that structural device as the novel’s cleverest method."
    },
    {
     "code": "3.2.1 Animal Farm — Equality and inequality",
     "q": "How far is the idea of equality important?",
     "idea": "Equality: the promise and its reversal",
     "content": "The second specimen question asks exactly this. A strong answer argues what Orwell is saying about the difference between a principle and its administration — the pigs’ milk and apples in the early chapters as the first breach — and weighs how far the book blames individuals and how far it blames the structure they inherit."
    },
    {
     "code": "3.2.1 Animal Farm — Allegory, fable and the political context",
     "q": "How does the novel work as allegory?",
     "idea": "Allegory: a \"fairy story\" about real events",
     "content": "The AO3 bullets name \"Examination of / reference to novel as allegory\", \"The idea of novel as allegory – ‘fairy story’\", \"How political ideas / events influenced the production of the novel\" and \"Animal Farm as a warning about totalitarianism\". A student must be able to explain the historical parallel without reducing the book to a key, and to argue why Orwell chose a form that children can read."
    },
    {
     "code": "3.2.1 Animal Farm — Language, narration and tone",
     "q": "How does Orwell’s narration work?",
     "idea": "Plain narration and irony: a tone that never protests",
     "content": "The novel reports appalling things in a calm, simple voice and leaves the reader to object. A strong answer analyses that restraint — short sentences, the animals’ limited point of view, the refusal to editorialise — and argues how it produces an effect stronger than denunciation would."
    },
    {
     "code": "3.2.1 Animal Farm — Form and structure",
     "q": "What must be said about the way Animal Farm is written?",
     "idea": "The methods of Animal Farm: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Animal Farm that means \"How Orwell portrays Napoleon\", \"How Orwell portrays other animals’ reactions to Napoleon\", \"The ways in which Napoleon uses specific methods of control and how this is presented\", \"The contrast between the ways Napoleon and other pigs behave towards the other animals\", \"The change in the commandments as a structural feature to highlight the decay of corrupt power\", \"The ending of the novel and how the one commandment left is linked to the pigs inside the house\", and the deadpan fable narration that reports without comment. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Animal Farm — Context (AO3)",
     "q": "What counts as context for Animal Farm?",
     "idea": "AO3: the ideas, perspectives and contextual factors Animal Farm explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for this novel are \"Napoleon as symbol of tyranny\", \"Exploration of the ways in which power and control can be gained and maintained\", \"Animal Farm as a warning about totalitarianism\", \"The use of propaganda to control\", \"Examination of / reference to novel as allegory\", \"How the ideals of a political system are eroded over time by those with more power\", \"How political ideas / events influenced the production of the novel\" and \"The idea of novel as allegory – ‘fairy story’\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Animal Farm — The question and its marks",
     "q": "What does the Animal Farm question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Animal Farm",
     "content": "The specimen paper sets two questions on Animal Farm, and students \"will answer one essay question from a choice of two\": (17) \"How does Orwell use the character of Napoleon to explore ideas about power and control in Animal Farm?\" with \"Write about: • how Orwell presents the character of Napoleon • how Orwell uses the character of Napoleon to present ideas about power and control in the novel\" and (18) \"‘All animals are equal, but some are more equal than others.’  How far is this idea important in Animal Farm?\" with \"Write about: • what you think Orwell is saying about equality and inequality • how Orwell presents these ideas through the events of the novel\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-anita-and-me",
   "component": "C2",
   "option": "modernText",
   "name": "Meera Syal: Anita and Me",
   "caseStudies": [
    "Meera Syal | Anita and Me — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 21: \"How does Syal present the ways Meena’s attitude towards Anita changes during the course of the novel?\" Write about: • how Syal presents Meena’s changing attitude towards Anita • how Meena’s attitude towards Anita is influenced by the world she lives in [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 22: \"How does Syal present family relationships in Anita and Me?\" Write about: • how Syal presents some of the relationships • how Syal uses these relationships to explore ideas about family [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Anita and Me — Meena",
     "q": "How does Syal present Meena and her changing attitudes?",
     "idea": "Meena: the narrator growing up inside her own story",
     "content": "Both specimen questions depend on her. The indicative content asks for \"What some of Meena’s feelings towards Anita are\", \"How Meena feels about Anita at the start and how / why this attitude changes as the novel develops\" and \"What affects Meena’s attitude towards Anita\", with the AO2 bullets on narrative perspective, first-person reflection and \"The increasingly reflective tone and how this demonstrates Meena’s growing maturity\". A student must be able to argue that the voice itself matures across the book."
    },
    {
     "code": "3.2.1 Anita and Me — Anita",
     "q": "How does Syal present Anita?",
     "idea": "Anita: the glamour of the older girl, and what she really offers",
     "content": "Anita is the object of the friendship and the vehicle of the disillusion. A strong answer argues why Meena is drawn to her — the mark scheme names \"rebellion against her race which attracts her to Anita, desire for social identity\" — and how Syal lets the reader see what Meena cannot until she can."
    },
    {
     "code": "3.2.1 Anita and Me — Meena’s parents",
     "q": "How does Syal present Meena’s parents?",
     "idea": "Mama and Papa: the generation that arrived, and what they carry",
     "content": "The indicative content asks for \"Meena’s relationship with her parents, her parents’ relationship with each other\", and the AO3 bullet names \"Meena’s parents’ feelings about family and belonging linked to their Punjabi roots\". A student must be able to argue how Syal shows their private history breaking through the comedy, and how the \"use and effect of language as a barrier and as a means of connection\" works inside the family."
    },
    {
     "code": "3.2.1 Anita and Me — Nanima and Sunil",
     "q": "How does Syal use the grandmother and the baby?",
     "idea": "Nanima and Sunil: heritage arriving, and the family changing",
     "content": "The indicative content names \"the influence of Nanima\" and \"The influence and effect of Sunil’s arrival on Meena’s relationships with her family\", and the AO3 bullet asks \"What Nanima represents in terms of roots / heritage and identity\". A strong answer argues both as turning points in Meena’s relation to her own family rather than as incidents."
    },
    {
     "code": "3.2.1 Anita and Me — Race, prejudice and belonging",
     "q": "How does the novel present racism?",
     "idea": "Race and belonging: casual prejudice in a village Meena calls home",
     "content": "The AO3 bullets name \"Societal factors such as class, racism (casual or otherwise), ideas about femininity\" and \"Meena’s growing realisation of class / racial prejudice in society\". A student must be able to argue how Syal builds that realisation gradually — jokes, remarks and finally violence — and how the comedy of the early chapters makes the recognition sharper."
    },
    {
     "code": "3.2.1 Anita and Me — Family",
     "q": "How does Syal present family relationships?",
     "idea": "Family as a construct: love, duty, guilt and acceptance",
     "content": "The second specimen question is on this, and the AO3 bullet spells it out: \"Ideas related to family as a construct, including love, responsibility, guilt, acceptance, understanding\". A strong answer contrasts the households the novel sets side by side — including \"Anita’s relationship with her mother\" and Meena’s \"wider extended family\" — and argues what the comparison is for."
    },
    {
     "code": "3.2.1 Anita and Me — Class, community and the village",
     "q": "How does the novel present its setting?",
     "idea": "Tollington: class, community and a place that is changing",
     "content": "A named AO3 bullet is the \"Possible contrast between values of Meena’s family and those of others in her local area\". A student must be able to argue how Syal uses the mining village, the new motorway and the shop as more than background — an economy and a community under pressure, which shapes how the family is received."
    },
    {
     "code": "3.2.1 Anita and Me — Comedy, voice and the rite of passage",
     "q": "How do form and tone work?",
     "idea": "Comedy and the coming-of-age narrative",
     "content": "The AO3 bullet names the \"treatment of the novel as a rite of passage\", and the AO2 bullets name \"The use and effect of comedy such as the incident at the family party\". A strong answer argues how Syal uses comic set pieces to carry serious material, and how the retrospective first person lets the book be funny and unsparing at once."
    },
    {
     "code": "3.2.1 Anita and Me — Form and structure",
     "q": "What must be said about the way Anita and Me is written?",
     "idea": "The methods of Anita and Me: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Anita and Me that means \"The use and effect of narrative perspective to present Meena as a reliable, truthful narrator\", \"The use of particular events to highlight Meena’s changing attitude\", \"The use of first person reflection\", \"The increasingly reflective tone and how this demonstrates Meena’s growing maturity\", \"Structural elements such as Meena’s increasing appreciation of her family\", \"The use and effect of comedy such as the incident at the family party\" and \"The use and effect of language as a barrier and as a means of connection\". Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Anita and Me — Context (AO3)",
     "q": "What counts as context for Anita and Me?",
     "idea": "AO3: the ideas, perspectives and contextual factors Anita and Me explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for this novel are \"Comments on / treatment of the novel as a rite of passage\", \"Treatment of contextual factors which influence Meena’s attitude: rebellion against her race which attracts her to Anita, desire for social identity\", \"Societal factors such as class, racism (casual or otherwise), ideas about femininity\", \"Meena’s growing realisation of class / racial prejudice in society\", \"Ideas related to family as a construct, including love, responsibility, guilt, acceptance, understanding\", \"Meena’s parents’ feelings about family and belonging linked to their Punjabi roots\", \"What Nanima represents in terms of roots / heritage and identity\" and \"Possible contrast between values of Meena’s family and those of others in her local area\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Anita and Me — The question and its marks",
     "q": "What does the Anita and Me question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Anita and Me",
     "content": "The specimen paper sets two questions on Anita and Me, and students \"will answer one essay question from a choice of two\": (21) \"How does Syal present the ways Meena’s attitude towards Anita changes during the course of the novel?\" with \"Write about: • how Syal presents Meena’s changing attitude towards Anita • how Meena’s attitude towards Anita is influenced by the world she lives in\" and (22) \"How does Syal present family relationships in Anita and Me?\" with \"Write about: • how Syal presents some of the relationships • how Syal uses these relationships to explore ideas about family\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-pigeon-english",
   "component": "C2",
   "option": "modernText",
   "name": "Stephen Kelman: Pigeon English",
   "caseStudies": [
    "Stephen Kelman | Pigeon English — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "Specimen Paper 2 (8702/2) Question 23: \"In Pigeon English, Harrison says, ‘Somebody dies on the news every day.  It’s nearly always a child.’ How does Kelman present Harrison’s daily life?\" Write about: • what we learn about Harrison’s daily life • how Kelman presents Harrison’s daily life by the ways he writes [30 marks] AO4 [4 marks]",
    "Specimen Paper 2 (8702/2) Question 24: \"How does Kelman present ideas about being a teenager in the modern world in Pigeon English?\" Write about: • how Kelman presents being a teenager • how Kelman uses some of the teenagers to explore ideas about the modern world [30 marks] AO4 [4 marks]",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 Pigeon English — Harrison Opoku",
     "q": "How does Kelman present Harrison and his daily life?",
     "idea": "Harrison: the narrator whose innocence is the novel’s instrument",
     "content": "The first specimen question is on him. The indicative content asks for the \"Treatment of Harrison’s relationship with / feelings for his mother and sister\", \"Harrison’s feelings towards his absent family\", \"Harrison at school, with his friends and with Poppy\" and \"Harrison’s lack of awareness of the dangers of his daily life, including members of the gang, reports in the press and his aunt’s situation\". A student must be able to argue that the gap between what Harrison notices and what the reader understands is the whole design of the book."
    },
    {
     "code": "3.2.1 Pigeon English — Harrison’s family",
     "q": "How does Kelman present the family?",
     "idea": "Mamma, Lydia and the family split between two countries",
     "content": "The household in the flat is half a family; the rest is in Ghana. A strong answer argues how Kelman uses the separation — the money sent, the phone calls, the sister’s different adaptation — and connects it to the AO3 bullets \"Ideas about integration and nationality\" and \"the contrast between teenage life in Britain and in Ghana\"."
    },
    {
     "code": "3.2.1 Pigeon English — Dean, Jordan and the gang",
     "q": "How does Kelman present the other young people?",
     "idea": "Dean, Jordan and the Dell Farm Crew: friendship, pressure and threat",
     "content": "The indicative content names \"Incidents related to ‘teenager behaviour’ such as his mother’s attitude towards Harrison’s relationship with Jordan / the gang etc\" and the \"Contrast between Harrison’s use of language and that of other teenagers, such as his sister’s friends / members of the gang / Jordan\". A student must be able to argue how Kelman distinguishes the detective game from the real danger, and what the difference costs."
    },
    {
     "code": "3.2.1 Pigeon English — The pigeon",
     "q": "How does Kelman use the pigeon?",
     "idea": "The pigeon: a second voice above the estate",
     "content": "A named AO2 bullet is \"The use of the pigeon to present a third person perspective on Harrison in his world\". A strong answer argues why Kelman interrupts a first-person narrative with a watching, knowing voice — what it lets the novel say that Harrison cannot — and weighs whether the device earns its place."
    },
    {
     "code": "3.2.1 Pigeon English — Childhood innocence and violence",
     "q": "How does the novel set innocence against violence?",
     "idea": "Innocence and violence: a child’s account of a killing",
     "content": "The AO3 bullets name \"Ideas about childhood innocence and the extent to which modern society is causing its erosion\" and \"the contrast between the violence of modern life and Harrison’s innocence\". A student must be able to argue how the cheerful narration makes the violence more shocking, and how the novel’s ending forces the reader to reread the tone of everything before it."
    },
    {
     "code": "3.2.1 Pigeon English — Being a teenager in the modern world",
     "q": "What does the novel say about teenage life?",
     "idea": "Teenagers and the modern world: trainers, phones, status and fear",
     "content": "The second specimen question. The indicative content asks about the \"objects of desire of a typical or atypical teenager, such as his trainers, his attitude towards modern music / TV / mobile phones etc\", \"Harrison’s relationship with Poppy\" and \"Treatment of school life\", and the AO3 bullet names \"the negative view of teenage culture and what this suggests about modern life for teenagers\". A strong answer argues what Kelman is criticising and who he holds responsible."
    },
    {
     "code": "3.2.1 Pigeon English — Race, class and modern Britain",
     "q": "How does the novel present the estate and the city?",
     "idea": "Race and class: \"the class / race divide in parts of modern Britain\"",
     "content": "That phrase is a named AO3 bullet. A student must be able to argue how Kelman presents the estate — the flats, the school, the police, the press — as a place the wider society has decided about in advance, and to connect the AO3 bullet on \"integration and nationality\" to Harrison’s reading of what it takes to belong here."
    },
    {
     "code": "3.2.1 Pigeon English — Voice and unreliable narration",
     "q": "How does Kelman’s narration create meaning?",
     "idea": "Voice: invented idiom, repeated phrases and an unreliable narrator",
     "content": "The AO2 bullets name \"The presentation of Harrison as optimistic character, including repeated phraseology\", the \"contrast between Harrison’s internal linguistic style and that of those around him\" and the \"Use of unreliable narrator\". A strong answer analyses the language as a construction — what the vocabulary and the refrains are doing — rather than treating it as a transcript of how a child speaks."
    },
    {
     "code": "3.2.1 Pigeon English — Form and structure",
     "q": "What must be said about the way Pigeon English is written?",
     "idea": "The methods of Pigeon English: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For Pigeon English that means \"The use and effect of narrative perspective\", \"The presentation of Harrison as optimistic character, including repeated phraseology\", \"The contrast between Harrison’s internal linguistic style and that of those around him, including the use of violent language\", \"The use of the pigeon to present a third person perspective on Harrison in his world\", \"Use of language to highlight Harrison’s lack of familiarity with teenage culture\" and the \"Use of unreliable narrator to highlight Harrison’s atypical ideas\". Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 Pigeon English — Context (AO3)",
     "q": "What counts as context for Pigeon English?",
     "idea": "AO3: the ideas, perspectives and contextual factors Pigeon English explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". The AO3 bullets printed for this novel are \"Comments related to Harrison’s lack of familiarity with this new society, enabling the reader to look at aspects of modern life from a different perspective\", \"Ideas about integration and nationality\", \"Authorial ideas about the class / race divide in parts of modern Britain\", \"Ideas about childhood innocence and the extent to which modern society is causing its erosion\", \"Comments related to the negative view of teenage culture and what this suggests about modern life for teenagers\", \"Any ideas related to the contrast between the violence of modern life and Harrison’s innocence\" and \"Any treatment of the contrast between teenage life in Britain and in Ghana\". Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 Pigeon English — The question and its marks",
     "q": "What does the Pigeon English question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on Pigeon English",
     "content": "The specimen paper sets two questions on Pigeon English, and students \"will answer one essay question from a choice of two\": (23) \"In Pigeon English, Harrison says, ‘Somebody dies on the news every day.  It’s nearly always a child.’ How does Kelman present Harrison’s daily life?\" with \"Write about: • what we learn about Harrison’s daily life • how Kelman presents Harrison’s daily life by the ways he writes\" and (24) \"How does Kelman present ideas about being a teenager in the modern world in Pigeon English?\" with \"Write about: • how Kelman presents being a teenager • how Kelman uses some of the teenagers to explore ideas about the modern world\". Each is \"[30 marks] AO4 [4 marks]\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "modern-my-name-is-leon",
   "component": "C2",
   "option": "modernText",
   "name": "Kit de Waal: My Name is Leon (First teaching 2023, first exam 2025)",
   "caseStudies": [
    "Kit de Waal | My Name is Leon (First teaching 2023, first exam 2025) — One of the twelve set texts of 3.2.1 Modern texts: \"Students will study one from a choice of 12 set texts, which include post-1914 prose fiction and drama. Students should study the whole text.\" Drama: JB Priestley, An Inspector Calls; Willy Russell, Blood Brothers (musical version); Alan Bennett, The History Boys (Last exam 2024); Dennis Kelly, DNA; Simon Stephens, The Curious Incident of the Dog in the Night-Time (play script) (Last exam 2024); Shelagh Delaney, A Taste of Honey; Chinonyerem Odimba, Princess & The Hustler (First teaching 2023, first exam 2025); Winsome Pinnock, Leave Taking (First teaching 2023, first exam 2025). Prose: William Golding, Lord of the Flies; AQA Anthology, Telling Tales; George Orwell, Animal Farm; Kazuo Ishiguro, Never Let Me Go (Last exam 2024); Meera Syal, Anita and Me; Stephen Kelman, Pigeon English; Kit de Waal, My Name is Leon (First teaching 2023, first exam 2025).",
    "No specimen question exists for this text: the specification marks it \"First teaching 2023, first exam 2025\" and the specimen paper and mark scheme date from 2014, so AQA prints no stem and no indicative content for it. The question will take the standard Section A form — one essay from a choice of two, 30 marks (AO1=12, AO2=12, AO3=6) plus AO4 4 marks, with two \"Write about:\" bullets, the second on the writer’s methods.",
    "Section A sets an essay, not an extract question: \"students will answer one essay question from a choice of two on their studied modern prose or drama text\", and \"All assessments are closed book\" — the text is not printed and not allowed in the exam room, so references must be recalled."
   ],
   "ideas": [
    {
     "code": "3.2.1 My Name is Leon — Leon",
     "q": "How does de Waal present Leon?",
     "idea": "Leon: a boy holding a family together with no power to do it",
     "content": "Leon is the novel’s consciousness, and the narration stays inside what a nine-year-old can grasp. A student must be able to argue how de Waal uses that limit — the reader infers the adult catastrophe from what the child notices — and to analyse the objects, routines and promises Leon holds on to as the method by which his feeling is shown rather than stated."
    },
    {
     "code": "3.2.1 My Name is Leon — Jake and the separation",
     "q": "How does the novel present the separation of the brothers?",
     "idea": "Jake: the baby brother taken away, and the loss the book is built around",
     "content": "The adoption of the white baby and the retention of the older mixed-race child is the novel’s central wound and its sharpest social point. A strong answer argues how de Waal makes the reader feel the injustice through Leon’s incomprehension, and connects it to the contextual question of how the care system treated children of different appearance."
    },
    {
     "code": "3.2.1 My Name is Leon — Carol",
     "q": "How does de Waal present Leon’s mother?",
     "idea": "Carol: illness, love and a parent who cannot cope",
     "content": "The novel refuses to make her a villain. A student must be able to argue how de Waal presents her collapse through a child’s eyes — the missed meals, the closed door, the visits that hurt — and how that sustains sympathy for both mother and son at once."
    },
    {
     "code": "3.2.1 My Name is Leon — Maureen, Sylvia and Tufty",
     "q": "How does the novel present the adults who take Leon in?",
     "idea": "Maureen, Sylvia and the men at the allotment: the substitute family",
     "content": "Leon is passed between foster carers and finds, on the allotment, men who treat him as a person. A strong answer argues why de Waal balances institutional care against informal kindness, and how those relationships give the novel its route out of despair without pretending the loss has been repaired."
    },
    {
     "code": "3.2.1 My Name is Leon — Race and identity",
     "q": "How does the novel present race?",
     "idea": "Race and identity: a child learning how he is seen",
     "content": "The difference in how the two brothers are treated is the book’s argument. A student must be able to argue how de Waal presents a child working out that the world sorts people by colour, and to use the period’s racial tension as context in the mark scheme’s sense — social structures, cultural contexts and periods in time."
    },
    {
     "code": "3.2.1 My Name is Leon — Family, care and belonging",
     "q": "What does the novel say about family?",
     "idea": "Family and care: who belongs to whom, and who decides",
     "content": "The novel sets biological family, the care system and chosen family against each other. A strong answer argues that comparison rather than narrating the placements, and shows how the title’s insistence on a name is a claim about being known."
    },
    {
     "code": "3.2.1 My Name is Leon — Anger, injustice and the riots",
     "q": "How does the novel handle public disorder?",
     "idea": "Anger and injustice: private grief against public unrest",
     "content": "The unrest of the early 1980s runs alongside Leon’s story and finally touches it. A student must be able to argue why de Waal places a child’s private anger inside a moment of public anger, and what the parallel claims about the causes of both."
    },
    {
     "code": "3.2.1 My Name is Leon — Point of view and the child’s narration",
     "q": "How does the novel’s narration work?",
     "idea": "Point of view: what a child sees and what the reader understands",
     "content": "The whole effect of the book depends on a narration limited to a child’s comprehension while the reader supplies the rest. A strong answer analyses that as a deliberate technique — dramatic irony sustained over a novel — and argues what it gains over an adult telling of the same events."
    },
    {
     "code": "3.2.1 My Name is Leon — Form and structure",
     "q": "What must be said about the way My Name is Leon is written?",
     "idea": "The methods of My Name is Leon: the second bullet of every question",
     "content": "Section A questions are essays, not extract questions: the text is not printed and the exam is closed book, so the whole text must be held in memory. The second \"Write about:\" bullet is always the writer's methods, and it carries the AO2 strand — 12 of the 30 marks. For My Name is Leon that means the close third-person narration tied to a child’s understanding, the gap between what the boy registers and what the reader infers, the patterning of objects a child values, the use of the allotment and the city as contrasting settings, and the placing of public disorder at the edge of a private story. Level 1 credits only \"Awareness of writer making deliberate choices\"; Level 4 wants \"Clear explanation of writer's methods with appropriate use of relevant subject terminology\"; Level 6 wants \"Analysis of writer's methods with subject terminology used judiciously\" and \"Exploration of effects of writer's methods on reader\"."
    },
    {
     "code": "3.2.1 My Name is Leon — Context (AO3)",
     "q": "What counts as context for My Name is Leon?",
     "idea": "AO3: the ideas, perspectives and contextual factors My Name is Leon explores",
     "content": "AO3 — \"Show understanding of the relationships between texts and the contexts in which they were written\" — is 6 of the 30 marks, and the mark scheme's AO3 strand references \"ideas/perspectives/contextual factors\": the contexts \"may also relate to the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\", and to \"literary contexts such as genres\" and the way texts \"are engaged with by different audiences\". No indicative content exists for this text, because it postdates the 2014 specimen materials; the contexts a student can argue are those the mark scheme defines — \"the context within which the text is set: location, social structures and features, cultural contexts, and periods in time\" — which for this novel means England in the early 1980s, the care and adoption system and its treatment of mixed-race children, the pressures of poverty and of mental illness on a family, and the racial tension and unrest of the period. Level 6 requires \"Exploration of ideas/perspectives/contextual factors shown by specific, detailed links between context/text/task\", so the argument must run from the writing to the idea and back."
    },
    {
     "code": "3.2.1 My Name is Leon — The question and its marks",
     "q": "What does the My Name is Leon question look like and what is it worth?",
     "idea": "One 34-mark essay from a choice of two on My Name is Leon",
     "content": "My Name is Leon carries \"First teaching 2023, first exam 2025\" in the specification, so the 2014 specimen paper and mark scheme set no question on it and print no indicative content for it; the question will take the same form as every other Section A question — one essay from a choice of two, each with two \"Write about:\" bullets, the first on the substance and the second on \"how … presents these ideas by the ways he writes\" — and will be marked on the same grid, 30 marks (AO1=12, AO2=12, AO3=6) plus 4 marks for AO4. Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\"; Section A is worth 34 of those 96 marks, so about 48 minutes of the 135 available (the specification sets no per-question time). \"AO4 will be assessed on Section A only\": 4 further marks on three performance descriptors, from \"Threshold performance\" (1 mark) to \"High performance\" (4 marks) for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\". The 30 marks are awarded on six levels of five marks each, \"best fit\", and \"An answer which contains nothing of relevance to the question must be awarded no marks.\""
    }
   ]
  },
  {
   "id": "poetry-love-and-relationships",
   "component": "C2",
   "option": "cluster",
   "name": "Poetry: Love and Relationships",
   "caseStudies": [
    "AQA Anthology: Poems Past and Present — the Love and Relationships cluster, one of the three clusters of 3.2.2 Poetry. \"Students will study one cluster of poems taken from the AQA poetry anthology, Poems Past and Present. There is a choice of three clusters, each containing 15 poems. The poems in each cluster are thematically linked and were written between 1789 and the present day.\" \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\"",
    "The fifteen poems, as the specimen paper prints them under \"Love and relationships\": Lord Byron, When We Two Parted; Percy Bysshe Shelley, Love’s Philosophy; Robert Browning, Porphyria’s Lover; Elizabeth Barrett Browning, Sonnet 29 – ‘I think of thee!’; Thomas Hardy, Neutral Tones; Charlotte Mew, The Farmer’s Bride; C Day Lewis, Walking Away; Maura Dooley, Letters From Yorkshire; Charles Causley, Eden Rock; Seamus Heaney, Follower; Simon Armitage, Mother, any distance; Carol Ann Duffy, Before You Were Mine; Owen Sheers, Winter Swans; Daljit Nagra, Singh Song!; Andrew Waterhouse, Climbing My Grandfather.",
    "Specimen Paper 2 (8702/2) Question 25: \"Compare how poets present attitudes towards a parent in ‘Follower’ and in one other poem from ‘Love and relationships’.\" [30 marks] The text of ‘Follower’ is printed on the paper with the lines numbered.",
    "The printed poem is provided; the second poem is not. \"All assessments are closed book: any stimulus materials required will be provided as part of the assessment.\""
   ],
   "ideas": [
    {
     "code": "3.2.2 Love and Relationships — When We Two Parted",
     "q": "What must be known about When We Two Parted for the comparison question?",
     "idea": "When We Two Parted — Lord Byron",
     "content": "Byron’s poem looks back on a secret love affair that ended and on hearing the lover’s name spoken by others; the feeling is grief mixed with shame and resentment. The methods the comparison question rewards are the cold, physical language of the parting, the repetition that binds the first stanza to the last, the short lines and hushed rhythm, and the way the secrecy of the relationship shapes what the speaker is allowed to feel in public. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Love’s Philosophy",
     "q": "What must be known about Love’s Philosophy for the comparison question?",
     "idea": "Love’s Philosophy — Percy Bysshe Shelley",
     "content": "Shelley’s speaker argues that because everything in nature mingles, the beloved should return his love. The rewarding methods are the argumentative structure of two stanzas, each building to a rhetorical question, the catalogue of natural images used as evidence, the regular rhyme and the conversational tone that makes a piece of persuasion sound like a law of nature. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Porphyria’s Lover",
     "q": "What must be known about Porphyria’s Lover for the comparison question?",
     "idea": "Porphyria’s Lover — Robert Browning",
     "content": "Browning’s dramatic monologue is spoken by a man who murders the woman who loves him in order to keep the moment fixed. The methods to analyse are the single unbroken stanza, the calm, reasonable voice against the horror of what is described, the pathetic fallacy of the storm outside, and the dramatic irony that lets the reader judge a speaker who believes he has been rewarded. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Sonnet 29 – ‘I think of thee!’",
     "q": "What must be known about Sonnet 29 – ‘I think of thee!’ for the comparison question?",
     "idea": "Sonnet 29 – ‘I think of thee!’ — Elizabeth Barrett Browning",
     "content": "A sonnet in which thought about the absent beloved is compared to vines covering a tree, and the speaker asks for the real presence instead. The methods are the sonnet form and its turn, the sustained extended metaphor of the tree and the vine, the enjambment and dashes that make thought run on, and the shift from imagination to physical presence. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Neutral Tones",
     "q": "What must be known about Neutral Tones for the comparison question?",
     "idea": "Neutral Tones — Thomas Hardy",
     "content": "Hardy’s speaker remembers a winter scene by a pond at the end of a love, and the memory has become the image of all later disappointment. The methods are the drained, colourless setting used as pathetic fallacy, the circular structure that returns to the pond, the flat diction and the negative comparisons, and the retrospective frame that makes one afternoon stand for a lifetime. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — The Farmer’s Bride",
     "q": "What must be known about The Farmer’s Bride for the comparison question?",
     "idea": "The Farmer’s Bride — Charlotte Mew",
     "content": "Mew’s poem is spoken by a farmer about the young wife who fled from him and now will not come near; the reader hears her fear through his bewilderment. The methods are the dramatic monologue and its unreliable sympathy, the dialect voice, the animal imagery used of the woman, the irregular rhyme and line length, and the shift of tense that leaves the situation unresolved. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Walking Away",
     "q": "What must be known about Walking Away for the comparison question?",
     "idea": "Walking Away — C Day Lewis",
     "content": "A father watches his son go off alone for the first time and reflects, years later, on what letting go means. The methods are the controlled five-line stanzas and their rhyme, the extended similes drawn from nature and sport, the movement from a single remembered afternoon to a general statement, and the tone of rueful acceptance in the closing lines. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Letters From Yorkshire",
     "q": "What must be known about Letters From Yorkshire for the comparison question?",
     "idea": "Letters From Yorkshire — Maura Dooley",
     "content": "A poem about a relationship kept up at a distance by letters between someone in the country and someone in a city. The methods are the contrast between physical outdoor work and the indoor life of words, the everyday details that stand for two ways of living, the tercet structure, the questions, and the sense of connection maintained across distance. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Eden Rock",
     "q": "What must be known about Eden Rock for the comparison question?",
     "idea": "Eden Rock — Charles Causley",
     "content": "Causley’s speaker sees his parents as young adults picnicking by a stream and is called to cross over to them. The methods are the precise, ordinary domestic detail, the bright, dreamlike light, the plain quatrains, and the final short line that reframes the whole poem, so that a memory turns out to be about death and reunion. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Follower",
     "q": "What must be known about Follower for the comparison question?",
     "idea": "Follower — Seamus Heaney",
     "content": "The poem set on the specimen paper. Heaney’s speaker remembers following his father at the plough, admiring his expertise, and ends with the reversal in which the father now stumbles behind him. The methods the indicative content rewards are the imagery of the land and of the working horse, the technical vocabulary of ploughing, the controlled quatrains and half-rhyme, and the final reversal of positions. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Mother, any distance",
     "q": "What must be known about Mother, any distance for the comparison question?",
     "idea": "Mother, any distance — Simon Armitage",
     "content": "A son measures a new house with his mother holding the other end of the tape, and the tape becomes the connection between them as he moves away. The methods are the sustained metaphor of measuring, the imagery of anchorage and flight, the loosening of the sonnet form, and the unfinished final line that leaves the outcome open. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Before You Were Mine",
     "q": "What must be known about Before You Were Mine for the comparison question?",
     "idea": "Before You Were Mine — Carol Ann Duffy",
     "content": "Duffy’s speaker imagines her mother’s glamorous life ten years before the speaker was born, and the possessive of the title cuts both ways. The methods are the direct address to the mother, the cinematic imagery and period detail, the shifts of tense between the imagined past and the remembered childhood, and the tone that mixes admiration with the knowledge of what was given up. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Winter Swans",
     "q": "What must be known about Winter Swans for the comparison question?",
     "idea": "Winter Swans — Owen Sheers",
     "content": "A couple walking by a lake after a quarrel watch swans dive and surface, and find their hands joined again. The methods are the natural world used as an image of partnership, the tercets and their broken lines, the movement from separation to reunion across the poem’s structure, and the closing simile that makes the reconciliation wordless. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Singh Song!",
     "q": "What must be known about Singh Song! for the comparison question?",
     "idea": "Singh Song! — Daljit Nagra",
     "content": "A newly married shopkeeper neglects his father’s shop to be with his wife; the poem is comic, affectionate and set between two cultures. The methods are the phonetic rendering of the speaker’s voice, the refrains and song-like repetition, the customers’ complaints as a chorus, the mixture of registers, and the tender final exchange that gives the poem its turn. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Climbing My Grandfather",
     "q": "What must be known about Climbing My Grandfather for the comparison question?",
     "idea": "Climbing My Grandfather — Andrew Waterhouse",
     "content": "The speaker climbs his grandfather as if he were a mountain, reaching the summit at last. The methods are the single sustained extended metaphor held for the whole poem, the free verse and continuous form that enact the climb, the physical detail of skin, hands and clothes, and the final image of rest and safety at the top. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Love and Relationships — Comparing poems",
     "q": "How should the two poems be compared?",
     "idea": "The comparison method Section B rewards",
     "content": "Every AO1 descriptor in the Section B grid is written in terms of comparison: \"Simple comments relevant to comparison\" at Level 1, \"Supported comparison\" at Level 2, \"Some explained comparison\" at Level 3, \"Clear comparison\" at Level 4, \"Thoughtful, developed comparison\" at Level 5 and \"Critical, exploratory comparison\" at Level 6, with the top level described as \"a critical, exploratory, well-structured comparison … a conceptualised approach to the full task supported by a range of judicious references\". The answer must therefore be organised by points of comparison, not poem by poem: state the link or contrast, analyse how each poet’s language, form and structure produces it, and weigh the two. Choosing the second poem well matters more than knowing it best — it must genuinely carry the idea the question names. The specimen indicative content shows the level of specificity expected, comparing \"use of imagery of nature to present parent in ‘Letters From Yorkshire’\", the \"Use of metaphor in ‘Climbing My Grandfather’ or ‘Mother, Any Distance’\", the \"Comparison between perspective of child / parent in ‘Walking Away’\" and the \"Use of language to suggest strength / vulnerability of parent / child\", with AO3 points such as \"Any valid treatment of use of nature as image in poetry\" and \"Ideas about the passage of time and how this is presented\"."
    },
    {
     "code": "3.2.2 Love and Relationships — The question and its marks",
     "q": "What does the Section B question look like and what is it worth?",
     "idea": "One 30-mark comparative question on a named printed poem and one other",
     "content": "\"Students will answer one comparative question on one named poem printed on the paper and one other poem from their chosen anthology cluster.\" The specimen question is \"Compare how poets present attitudes towards a parent in ‘Follower’ and in one other poem from ‘Love and relationships’.\" Section B is worth 30 marks — AO1=12, AO2=12, AO3=6 — and no AO4 marks are awarded here: \"AO4 will be assessed on Section A only.\" \"There are 30 marks for Section B.\" The named poem is reproduced on the paper; the second is not, so it must be recalled from memory, since \"All assessments are closed book\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\", so this question takes about 42 minutes of the 135 available (the specification sets no per-question time). Marking is on six levels of five marks each, \"best fit\", and examiners are \"encouraged to reward any valid interpretations\"."
    }
   ]
  },
  {
   "id": "poetry-power-and-conflict",
   "component": "C2",
   "option": "cluster",
   "name": "Poetry: Power and Conflict",
   "caseStudies": [
    "AQA Anthology: Poems Past and Present — the Power and Conflict cluster, one of the three clusters of 3.2.2 Poetry. \"Students will study one cluster of poems taken from the AQA poetry anthology, Poems Past and Present. There is a choice of three clusters, each containing 15 poems. The poems in each cluster are thematically linked and were written between 1789 and the present day.\" \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\"",
    "The fifteen poems, as the specimen paper prints them under \"Power and conflict\": Percy Bysshe Shelley, Ozymandias; William Blake, London; William Wordsworth, The Prelude: stealing the boat; Robert Browning, My Last Duchess; Alfred Lord Tennyson, The Charge of the Light Brigade; Wilfred Owen, Exposure; Seamus Heaney, Storm on the Island; Ted Hughes, Bayonet Charge; Simon Armitage, Remains; Jane Weir, Poppies; Carol Ann Duffy, War Photographer; Imtiaz Dharker, Tissue; Carol Rumens, The émigree; Beatrice Garland, Kamikaze; John Agard, Checking Out Me History.",
    "Specimen Paper 2 (8702/2) Question 26: \"Compare the ways poets present ideas about power in ‘Ozymandias’ and in one other poem from ‘Power and conflict’.\" [30 marks] The text of ‘Ozymandias’ is printed on the paper with the lines numbered.",
    "The printed poem is provided; the second poem is not. \"All assessments are closed book: any stimulus materials required will be provided as part of the assessment.\""
   ],
   "ideas": [
    {
     "code": "3.2.2 Power and Conflict — Ozymandias",
     "q": "What must be known about Ozymandias for the comparison question?",
     "idea": "Ozymandias — Percy Bysshe Shelley",
     "content": "The poem set on the specimen paper. A traveller describes the ruined statue of a boastful ancient king, whose inscription is now mocked by the empty desert. The methods the indicative content rewards are the sonnet form and its structural elements — \"use / effect of volta, rhyming couplet, line lengthening to stress particular ideas\" — the framed narration at two removes, the irony of the inscription, and the sculptor’s reading of the tyrant’s face. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — London",
     "q": "What must be known about London for the comparison question?",
     "idea": "London — William Blake",
     "content": "Blake walks the streets of the city and finds misery in every face, blaming church, monarchy and commerce. The methods are the relentless quatrains and regular rhyme, the repetition and anaphora that make the oppression sound inescapable, the auditory imagery of cries, and the charged words that turn ownership and law into the causes of suffering. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — The Prelude: stealing the boat",
     "q": "What must be known about The Prelude: stealing the boat for the comparison question?",
     "idea": "The Prelude: stealing the boat — William Wordsworth",
     "content": "A boy takes a boat out on a lake and a mountain seems to rise and stride after him, leaving him troubled for days. The methods are the blank verse and its long, unfolding sentences, the personification of the mountain, the shift from confidence to fear, and the Romantic idea of nature as a moral force greater than the human will. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — My Last Duchess",
     "q": "What must be known about My Last Duchess for the comparison question?",
     "idea": "My Last Duchess — Robert Browning",
     "content": "A duke shows an envoy the portrait of his dead wife and reveals, without meaning to, that he had her killed for not valuing his name highly enough. The methods are the dramatic monologue, the enjambed rhyming couplets that hide the rhyme under speech, the controlled politeness of a man discussing a murder, and the final turn to another artwork and another marriage. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — The Charge of the Light Brigade",
     "q": "What must be known about The Charge of the Light Brigade for the comparison question?",
     "idea": "The Charge of the Light Brigade — Alfred Lord Tennyson",
     "content": "Tennyson commemorates a cavalry charge made under a mistaken order in which most of the men were killed. The methods are the driving dactylic rhythm, the repetition and refrain, the biblical and heroic diction, the shift between celebration of courage and acknowledgement of the blunder, and the direct instruction to the reader to honour them. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Exposure",
     "q": "What must be known about Exposure for the comparison question?",
     "idea": "Exposure — Wilfred Owen",
     "content": "Soldiers in the trenches are killed not by the enemy but by the cold and the waiting. The methods are the half-rhyme and the long, dragging lines, the refrain that insists nothing happens, the personification of the weather as the real attacker, and the bitter questioning of what the men are dying for. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Storm on the Island",
     "q": "What must be known about Storm on the Island for the comparison question?",
     "idea": "Storm on the Island — Seamus Heaney",
     "content": "Islanders prepare for a storm they think they can withstand, and find the sea and air more frightening than expected. The methods are the conversational blank verse, the military and violent vocabulary used of weather, the reversal from confidence to fear, and the final paradox about being afraid of nothing at all. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Bayonet Charge",
     "q": "What must be known about Bayonet Charge for the comparison question?",
     "idea": "Bayonet Charge — Ted Hughes",
     "content": "A soldier runs across a field in the middle of an attack, and the poem stays inside the panic of a few seconds. The methods are the in medias res opening, the confused syntax and dashes that reproduce disorientation, the imagery of machinery and of a wounded hare, and the collapse of patriotic ideas into pure instinct. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Remains",
     "q": "What must be known about Remains for the comparison question?",
     "idea": "Remains — Simon Armitage",
     "content": "A soldier recalls shooting a looter and finds that the memory follows him home. The methods are the colloquial, spoken voice and short stanzas, the repetition of the act, the shift from the street to the mind, the enjambment across stanza breaks, and the blunt final image of the guilt that cannot be washed away. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Poppies",
     "q": "What must be known about Poppies for the comparison question?",
     "idea": "Poppies — Jane Weir",
     "content": "A mother remembers her son leaving — for the army, and before that for school — in a poem that mixes domestic detail with grief. The methods are the free verse and long sentences, the textile and sewing imagery, the shifts of time between memories, and the second-person address to an absent son whose fate is never stated. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — War Photographer",
     "q": "What must be known about War Photographer for the comparison question?",
     "idea": "War Photographer — Carol Ann Duffy",
     "content": "A photographer develops his pictures at home in England and reflects on the gulf between the suffering he records and the readers who glance at it. The methods are the ordered quatrains and rhyme against the disorder described, the religious imagery of the darkroom, the contrast between English fields and foreign wars, and the final distancing image of the man who does not care. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Tissue",
     "q": "What must be known about Tissue for the comparison question?",
     "idea": "Tissue — Imtiaz Dharker",
     "content": "The poem turns paper — maps, receipts, holy books, architects’ plans — into an image of how fragile the structures of power and record really are. The methods are the short unrhymed quatrains and the light, airy diction, the extended metaphor of paper and skin, the enjambment that lets the argument drift, and the single closing line that lands the idea on the human body. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — The émigree",
     "q": "What must be known about The émigree for the comparison question?",
     "idea": "The émigree — Carol Rumens",
     "content": "A speaker remembers a city she left as a child, which she cannot return to and which remains bright in her memory despite what has happened to it. The methods are the repeated phrase that opens stanzas, the imagery of sunlight against the dark of tyranny, the personification of the city as a beloved figure, and the threatening final stanza that leaves the speaker watched and accused. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Kamikaze",
     "q": "What must be known about Kamikaze for the comparison question?",
     "idea": "Kamikaze — Beatrice Garland",
     "content": "A kamikaze pilot turns back from his mission and is shunned by his family and community for the rest of his life. The methods are the narrative told at second hand by a daughter, the shift between reported and direct speech, the shimmering imagery of the sea and childhood remembered mid-flight, and the structural irony that survival is punished more harshly than death. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Checking Out Me History",
     "q": "What must be known about Checking Out Me History for the comparison question?",
     "idea": "Checking Out Me History — John Agard",
     "content": "The speaker attacks an education that taught him British history and left out the Black figures of his own heritage. The methods are the phonetic spelling of a Caribbean voice, the alternation between mocking short rhymes for the imposed curriculum and freer, lyrical sections for the figures reclaimed, the typographical separation of the two strands, and the closing act of self-definition. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Power and Conflict — Comparing poems",
     "q": "How should the two poems be compared?",
     "idea": "The comparison method Section B rewards",
     "content": "Every AO1 descriptor in the Section B grid is written in terms of comparison: \"Simple comments relevant to comparison\" at Level 1, \"Supported comparison\" at Level 2, \"Some explained comparison\" at Level 3, \"Clear comparison\" at Level 4, \"Thoughtful, developed comparison\" at Level 5 and \"Critical, exploratory comparison\" at Level 6, with the top level described as \"a critical, exploratory, well-structured comparison … a conceptualised approach to the full task supported by a range of judicious references\". The answer must therefore be organised by points of comparison, not poem by poem: state the link or contrast, analyse how each poet’s language, form and structure produces it, and weigh the two. Choosing the second poem well matters more than knowing it best — it must genuinely carry the idea the question names. The specimen indicative content shows the level of specificity expected, comparing \"Any valid comparisons dealing with despotism, such as ‘My Last Duchess’\", \"Possible comparisons between effects of individual / state power such as ‘Charge of the Light Brigade’ or ‘Exposure’ or ‘Bayonet Charge’\", \"Possible comparisons between human and natural power, such as ‘Extract from The Prelude’ or ‘Storm on the Island’\", the \"Use of sonnet to explore ideas, possibly dealing with structural elements, such as use / effect of volta, rhyming couplet, line lengthening to stress particular ideas\", and AO3 points such as \"Any valid points related to Romantic ideas about rulership\"."
    },
    {
     "code": "3.2.2 Power and Conflict — The question and its marks",
     "q": "What does the Section B question look like and what is it worth?",
     "idea": "One 30-mark comparative question on a named printed poem and one other",
     "content": "\"Students will answer one comparative question on one named poem printed on the paper and one other poem from their chosen anthology cluster.\" The specimen question is \"Compare the ways poets present ideas about power in ‘Ozymandias’ and in one other poem from ‘Power and conflict’.\" Section B is worth 30 marks — AO1=12, AO2=12, AO3=6 — and no AO4 marks are awarded here: \"AO4 will be assessed on Section A only.\" \"There are 30 marks for Section B.\" The named poem is reproduced on the paper; the second is not, so it must be recalled from memory, since \"All assessments are closed book\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\", so this question takes about 42 minutes of the 135 available (the specification sets no per-question time). Marking is on six levels of five marks each, \"best fit\", and examiners are \"encouraged to reward any valid interpretations\"."
    }
   ]
  },
  {
   "id": "poetry-worlds-and-lives",
   "component": "C2",
   "option": "cluster",
   "name": "Poetry: Worlds and Lives (First teaching 2023, first exam 2025)",
   "caseStudies": [
    "AQA Anthology: Poems Past and Present — the Worlds and Lives cluster, one of the three clusters of 3.2.2 Poetry, marked in the specification \"Worlds and Lives (First teaching 2023, first exam 2025)\". \"Students will study one cluster of poems taken from the AQA poetry anthology, Poems Past and Present. There is a choice of three clusters, each containing 15 poems. The poems in each cluster are thematically linked and were written between 1789 and the present day.\" \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\"",
    "The fifteen poems, in AQA’s order, transcribed on 15 September 2026 from AQA’s own page aqa.org.uk/spark-something/poetry/worlds-and-lives (the 2014 specimen paper predates this cluster and lists only Love and relationships and Power and conflict): William Wordsworth, Lines Written in Early Spring; Percy Bysshe Shelley, England in 1819; Emily Brontë, Shall earth no more inspire thee; George Eliot, In a London Drawingroom; James Berry, On an Afternoon Train from Purley to Victoria, 1955; Raman Mundair, Name Journeys; Shamshad Khan, pot; Seni Seneviratne, A Wider View; Liz Berry, Homing; Imtiaz Dharker, A Century Later; Louisa Adjoa Parker, The Jewellery Maker; Raymond Antrobus, With Birds You’re Never Lonely; Roger Robinson, A Portable Paradise; Grace Nichols, Like an Heiress; Caleb Femi, Thirteen.",
    "AQA’s own statement about the cluster: \"The collection is both personal and political and explores concerns about the world we live in. It also looks at relatable universal themes, including our relationship with place and ideas about home, heritage, belonging and connection.\"",
    "No specimen question exists for this cluster: the specimen paper and mark scheme date from 2014 and the cluster carries \"First teaching 2023, first exam 2025\". The question will take the same form as Questions 25 and 26 — \"Compare how poets present …\" or \"Compare the ways poets present … in ‘<named poem>’ and in one other poem from ‘Worlds and Lives’\" [30 marks] — with the named poem printed on the paper and marked on the Section B grid, AO1=12, AO2=12, AO3=6."
   ],
   "ideas": [
    {
     "code": "3.2.2 Worlds and Lives — Lines Written in Early Spring",
     "q": "What must be known about Lines Written in Early Spring for the comparison question?",
     "idea": "Lines Written in Early Spring — William Wordsworth",
     "content": "Wordsworth sits in a grove in spring, delighting in the natural world and grieving over \"what man has made of man\". The methods the comparison question rewards are the simple ballad quatrains and regular rhyme, the personification of flowers, birds and budding twigs as creatures that take pleasure, and the structural movement by which each stanza of delight returns to the same human lament. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — England in 1819",
     "q": "What must be known about England in 1819 for the comparison question?",
     "idea": "England in 1819 — Percy Bysshe Shelley",
     "content": "A furious sonnet cataloguing a dying king, contemptuous rulers, a starved people and a corrupt church and army, which ends with the possibility that something might yet burst out of them. The methods are the sonnet form driven as one long sentence, the accumulation of contemptuous images, the repeated grammatical pattern, and the volta that turns a list of abuses into a hope. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — Shall earth no more inspire thee",
     "q": "What must be known about Shall earth no more inspire thee for the comparison question?",
     "idea": "Shall earth no more inspire thee — Emily Brontë",
     "content": "The earth itself speaks, reproaching someone who has turned away from nature and promising comfort if they return. The methods are the address of an imagined natural voice to a human listener, the questions and commands, the regular hymn-like stanzas and rhyme, and the contrast drawn between human sorrow and the constancy of the moors. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — In a London Drawingroom",
     "q": "What must be known about In a London Drawingroom for the comparison question?",
     "idea": "In a London Drawingroom — George Eliot",
     "content": "The speaker looks out on a London of fog, identical houses and hurrying people who notice nothing, and finds the whole city joyless. The methods are the unrhymed blank verse, the imagery of grey, of prison and of machinery, the lack of any single human face in the crowd, and the way the poem moves outward from a window to an indictment of a whole way of living. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — On an Afternoon Train from Purley to Victoria, 1955",
     "q": "What must be known about On an Afternoon Train from Purley to Victoria, 1955 for the comparison question?",
     "idea": "On an Afternoon Train from Purley to Victoria, 1955 — James Berry",
     "content": "A Black speaker and an elderly white Englishwoman share a railway carriage and a conversation that is friendly, awkward and full of the assumptions of its year. The methods are the conversational dialogue and the exchange of questions, the precise period and place in the title, the restrained register that leaves the reader to weigh what is said, and the quiet dignity of the ending. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — Name Journeys",
     "q": "What must be known about Name Journeys for the comparison question?",
     "idea": "Name Journeys — Raman Mundair",
     "content": "The poem follows a name across a migration, and what happens to it and to its owner in a new country. The methods are the imagery of water, journey and crossing, the disruption of the poem’s shape on the page, the sound of a name mispronounced, and the connection made between language and a sense of self. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — pot",
     "q": "What must be known about pot for the comparison question?",
     "idea": "pot — Shamshad Khan",
     "content": "A small domestic object becomes the focus of a poem about inheritance, culture and how things are handled and valued. The methods are the deliberately lower-case title and spare, short lines, the close attention to one object, the double meaning drawn out of everyday words, and the turn by which the object comes to stand for a relationship. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — A Wider View",
     "q": "What must be known about A Wider View for the comparison question?",
     "idea": "A Wider View — Seni Seneviratne",
     "content": "The speaker looks out over a city and back through a family’s working history, joining a personal inheritance to the landscape in front of her. The methods are the imagery of height, distance and looking, the movement between present view and remembered ancestry, the free verse that widens and narrows, and the sense of a self placed in a longer story. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — Homing",
     "q": "What must be known about Homing for the comparison question?",
     "idea": "Homing — Liz Berry",
     "content": "The poem is about a Black Country accent put away to get on in the world, and reclaimed. The methods are the dialect words set into the poem as treasures, the bird imagery of the title and of homing, the direct address to a mother or grandmother, and the structural movement from concealment to return. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — A Century Later",
     "q": "What must be known about A Century Later for the comparison question?",
     "idea": "A Century Later — Imtiaz Dharker",
     "content": "A girl goes to school in a place where being educated is dangerous, and the poem makes her walk to the classroom an act of courage. The methods are the imagery of flight, birds and battle set against the schoolroom, the short, broken lines that hold the tension, the repetition that builds defiance, and the title’s claim that a century has changed less than it should. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — The Jewellery Maker",
     "q": "What must be known about The Jewellery Maker for the comparison question?",
     "idea": "The Jewellery Maker — Louisa Adjoa Parker",
     "content": "A craftsman’s work with small, precious things becomes a way of talking about making, patience and what survives of a life. The methods are the close physical detail of hands and materials, the extended attention to a single process, the quiet free verse, and the way the poem lets a craft carry a larger claim about value. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — With Birds You’re Never Lonely",
     "q": "What must be known about With Birds You’re Never Lonely for the comparison question?",
     "idea": "With Birds You’re Never Lonely — Raymond Antrobus",
     "content": "The poem sets a deaf speaker’s experience of sound, language and the natural world against other people’s assumptions about both. The methods are the interplay of silence and sound, the questioning of what listening means, the shifting line lengths and pauses on the page, and the wry tone that refuses to be pitied. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — A Portable Paradise",
     "q": "What must be known about A Portable Paradise for the comparison question?",
     "idea": "A Portable Paradise — Roger Robinson",
     "content": "A grandmother’s advice is to carry paradise with you and take it out in private when the world is hard. The methods are the single extended metaphor of a paradise kept in a pocket, the inherited voice of the grandmother framing the poem, the block of unbroken free verse, and the domestic imagery of light that turns comfort into resistance. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — Like an Heiress",
     "q": "What must be known about Like an Heiress for the comparison question?",
     "idea": "Like an Heiress — Grace Nichols",
     "content": "The speaker walks her island landscape as though inheriting it, while the sea encroaches and the land is under threat. The methods are the imagery of ownership and inheritance set against erosion, the rhythms of Caribbean speech, the free verse and its long breath, and the double feeling of belonging to a place that may not last. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — Thirteen",
     "q": "What must be known about Thirteen for the comparison question?",
     "idea": "Thirteen — Caleb Femi",
     "content": "A thirteen-year-old boy is stopped and treated as a suspect, and the poem stays with what that does to a child’s sense of himself. The methods are the second-person address that puts the reader in the boy’s position, the compressed narrative of a single incident, the tonal shift from play to fear, and the way the age in the title holds the poem’s accusation. Every poem in the cluster must be studied, because the printed poem is chosen by the examiner and the second by the student: \"Students should study all 15 poems in their chosen cluster and be prepared to write about any of them in the examination.\""
    },
    {
     "code": "3.2.2 Worlds and Lives — Comparing poems",
     "q": "How should the two poems be compared?",
     "idea": "The comparison method Section B rewards",
     "content": "Every AO1 descriptor in the Section B grid is written in terms of comparison: \"Simple comments relevant to comparison\" at Level 1, \"Supported comparison\" at Level 2, \"Some explained comparison\" at Level 3, \"Clear comparison\" at Level 4, \"Thoughtful, developed comparison\" at Level 5 and \"Critical, exploratory comparison\" at Level 6, with the top level described as \"a critical, exploratory, well-structured comparison … a conceptualised approach to the full task supported by a range of judicious references\". The answer must therefore be organised by points of comparison, not poem by poem: state the link or contrast, analyse how each poet’s language, form and structure produces it, and weigh the two. Choosing the second poem well matters more than knowing it best — it must genuinely carry the idea the question names. The specimen indicative content shows the level of specificity expected, comparing at that level of detail — naming the second poem, the specific method (a form, a structural feature, an image) and the effect, rather than asserting a general similarity. For this cluster the obvious groupings are the Romantic and Victorian poems about nature, the city and the state; the poems of arrival, naming and belonging; and the poems about home as something carried rather than owned."
    },
    {
     "code": "3.2.2 Worlds and Lives — The question and its marks",
     "q": "What does the Section B question look like and what is it worth?",
     "idea": "One 30-mark comparative question on a named printed poem and one other",
     "content": "\"Students will answer one comparative question on one named poem printed on the paper and one other poem from their chosen anthology cluster.\" No specimen question exists for this cluster, which the specification marks \"First teaching 2023, first exam 2025\"; the stem will follow the pattern of Questions 25 and 26 — \"Compare how poets present …\" / \"Compare the ways poets present … in ‘<named poem>’ and in one other poem from ‘Worlds and Lives’\". Section B is worth 30 marks — AO1=12, AO2=12, AO3=6 — and no AO4 marks are awarded here: \"AO4 will be assessed on Section A only.\" \"There are 30 marks for Section B.\" The named poem is reproduced on the paper; the second is not, so it must be recalled from memory, since \"All assessments are closed book\". Paper 2 is \"written exam: 2 hour 15 minutes; 96 marks; 60% of GCSE\", so this question takes about 42 minutes of the 135 available (the specification sets no per-question time). Marking is on six levels of five marks each, \"best fit\", and examiners are \"encouraged to reward any valid interpretations\"."
    }
   ]
  },
  {
   "id": "unseen-poetry",
   "component": "C2",
   "option": null,
   "name": "3.2.3 Unseen poetry",
   "caseStudies": [
    "3.2.3 Unseen poetry: \"In preparing for the unseen poetry section of the examination students should experience a wide range of poetry in order to develop their ability to closely analyse unseen poems. They should be able to analyse and compare key features such as their content, theme, structure and use of language.\"",
    "Specimen Paper 2 (8702/2) Question 27.1, on Linda Pastan’s ‘To a Daughter Leaving Home’, printed on the paper: \"In ‘To a Daughter Leaving Home’, how does the poet present the speaker’s feelings about her daughter?\" [24 marks] (24 marks – AO1=12, AO2=12)",
    "Specimen Paper 2 (8702/2) Question 27.2, on Liz Lochhead’s ‘Poem for My Sister’, also printed: \"In both ‘Poem for My Sister’ and ‘To a Daughter Leaving Home’ the speakers describe feelings about watching someone they love grow up. What are the similarities and/or differences between the ways the poets present those feelings?\" [8 marks]",
    "Both poems are printed on the paper and both questions are compulsory: \"Answer one question from Section A, one question from Section B and both questions in Section C.\" \"There are … 32 marks for Section C.\" No poems are set for this section — the preparation is wide reading."
   ],
   "ideas": [
    {
     "code": "3.2.3 Unseen poetry — Wide reading as the preparation",
     "q": "How does a student prepare for a poem they have never seen?",
     "idea": "A wide range of poetry, read in order to build the skill of close analysis",
     "content": "The specification sets no texts for this section. It says: \"In preparing for the unseen poetry section of the examination students should experience a wide range of poetry in order to develop their ability to closely analyse unseen poems.\" The preparation is therefore practice rather than knowledge: enough poems read and analysed that an unfamiliar one can be read confidently under time, with no biographical or historical information available and none required, because Section C carries no AO3 marks at all."
    },
    {
     "code": "3.2.3 Unseen poetry — Content, theme, structure and use of language",
     "q": "What exactly must a student be able to analyse and compare?",
     "idea": "The four key features the specification names",
     "content": "The document names them: students \"should be able to analyse and compare key features such as their content, theme, structure and use of language\". Content is what happens and who speaks; theme is what the poem is about beneath that; structure is the shape — stanzas, line lengths, the turn, the ending; use of language is diction, imagery and sound. Both verbs matter: 27.1 asks the student to analyse one poem, 27.2 to compare two."
    },
    {
     "code": "3.2.3 Unseen poetry — Question 27.1: one poem, 24 marks",
     "q": "What does the first unseen question ask, and how is it marked?",
     "idea": "The 24-mark analysis of a single unseen poem",
     "content": "The specimen stem is \"In ‘To a Daughter Leaving Home’, how does the poet present the speaker’s feelings about her daughter?\" [24 marks], marked \"(24 marks – AO1=12, AO2=12)\" — an even split between response to the poem and analysis of its methods, with no AO3 and no AO4. The six levels run 1–4, 5–8, 9–12, 13–16, 17–20 and 21–24 marks. Level 6 wants \"a critical, exploratory, well-structured argument … a conceptualised approach to the task supported by a range of judicious references\" and \"a fine-grained and insightful analysis of language and form and structure supported by judicious use of subject terminology\"."
    },
    {
     "code": "3.2.3 Unseen poetry — Question 27.2: the comparison, 8 marks",
     "q": "What does the second unseen question ask, and how is it marked?",
     "idea": "The 8-mark comparison of the two unseen poems, AO2 only",
     "content": "A second unseen poem is printed and the question names the shared subject: \"In both ‘Poem for My Sister’ and ‘To a Daughter Leaving Home’ the speakers describe feelings about watching someone they love grow up. What are the similarities and/or differences between the ways the poets present those feelings?\" [8 marks]. It is marked on four levels of two marks each — 1–2, 3–4, 5–6, 7–8 — all AO2, and the mark scheme instructs: \"Examiners must only credit points which are comparative.\" Level 4 requires \"Exploratory comparison of writers’ use of language, structure and form with subject terminology used judiciously\" and \"Convincing comparison of effects of writers’ methods on reader\"."
    },
    {
     "code": "3.2.3 Unseen poetry — What the indicative content shows",
     "q": "What kind of points does the mark scheme reward?",
     "idea": "The level of specificity an examiner expects from an unseen answer",
     "content": "For 27.1 the indicative content lists feelings — \"Feelings of love / admiration/pride for her daughter\", \"Feelings of fear for her daughter\", \"Feelings of loss about her daughter growing up\" — and then the methods that produce them: \"Use and effects of vulnerable imagery: ‘wobbled’, ‘smaller’, ‘breakable’\", \"Use of assonance in ‘rounded’, ‘wobbled’\", \"Contrast of ‘screaming’ and ‘laughter’\", \"Use of structure to create sense of journey / distance\", \"Use of present participles to create sense of life force\", \"Effects of last line\". For 27.2 the points are all comparative: \"Any valid comparisons between the use of imagery such as images of play\", \"Any valid comparisons between language used to present confidence of child\", \"Any valid comparisons between form or structural features.\""
    },
    {
     "code": "3.2.3 Unseen poetry — No context, no AO3",
     "q": "Why is contextual material worth nothing here?",
     "idea": "The one section of the qualification with no AO3 strand",
     "content": "Every other extended answer in this qualification carries 6 marks of AO3, and the Section C grids carry none: 27.1 is \"(24 marks – AO1=12, AO2=12)\" and 27.2 is AO2 alone. Speculation about when a poem was written or who wrote it earns nothing and wastes the section’s limited time. The only exception to the rule that ignoring context is penalised — \"If a candidate does not address a defining feature of the task outside AO1 and AO2 – context for example – this would be classed as a rubric infringement\" — is Section C, where context is not a feature of the task."
    },
    {
     "code": "3.2.3 Unseen poetry — Timing and the shape of the section",
     "q": "How should the 32 marks of Section C be handled in the time?",
     "idea": "Both questions compulsory, 24 + 8 marks, about 45 minutes",
     "content": "\"Students will answer one question on one unseen poem and one question comparing this poem with a second unseen poem\", and \"Answer … both questions in Section C\". \"There are … 32 marks for Section C\" of the 96 on a 2 hour 15 minute paper, so about 45 minutes in all — roughly 34 minutes on 27.1 and 11 on 27.2 if the time is divided by marks, with the reading of two unseen poems included. The specification sets no per-question time; the split is pro rata."
    }
   ]
  },
  {
   "id": "skills",
   "component": "C1",
   "option": null,
   "name": "3.3 Skills (both papers)",
   "caseStudies": [
    "3.3 Skills: \"In studying the set texts students should have the opportunity to develop the following skills.\" The skills are grouped under two headings, \"Reading comprehension and reading critically\" (four bullets) and \"Writing\" (two bullets); they are not a separate paper but the abilities every question on both papers tests. The room is attached to Paper 1 in this map only so that it has a place in the timetable; the skills are examined on both papers.",
    "The skills map onto the four assessment objectives: AO1 \"Read, understand and respond to texts\", AO2 \"Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate\", AO3 \"Show understanding of the relationships between texts and the contexts in which they were written\", AO4 \"Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.\""
   ],
   "ideas": [
    {
     "code": "3.3 In studying the set texts",
     "q": "What is section 3.3 for?",
     "idea": "The skills the set texts are the occasion for developing",
     "content": "The specification introduces the section: \"In studying the set texts students should have the opportunity to develop the following skills.\" The skills are therefore not extra content but the abilities the six set-text rooms and the unseen section exist to build, and they are what every level descriptor on both papers is written to measure — from \"Simple comments relevant to task and text\" at Level 1 to \"Critical, exploratory, conceptualised response to task and whole text\" at Level 6."
    },
    {
     "code": "3.3 literal and inferential comprehension",
     "q": "What does the specification mean by comprehension?",
     "idea": "Literal and inferential comprehension",
     "content": "The document’s own statement: \"literal and inferential comprehension: understanding a word, phrase or sentence in context; exploring aspects of plot, characterisation, events and settings; distinguishing between what is stated explicitly and what is implied; explaining motivation, sequence of events, and the relationship between actions or events\". This is the base of AO1 and the skill an extract question tests first: the mark scheme’s lowest levels reward \"Simple comments relevant to task and text\" and \"Reference to relevant details\", while higher levels depend on reading what is implied rather than stated."
    },
    {
     "code": "3.3 critical reading",
     "q": "What does reading critically require?",
     "idea": "Critical reading: theme, evidence, alternative responses and personal response",
     "content": "The document’s own statement: \"critical reading: identifying the theme and distinguishing between themes; supporting a point of view by referring to evidence in the text; recognising the possibility of and evaluating different responses to a text; using understanding of writers’ social, historical and cultural contexts to inform evaluation; making an informed personal response that derives from analysis and evaluation of the text\". This statement contains both AO1 (\"maintain a critical style and develop an informed personal response\"; \"use textual references, including quotations, to support and illustrate interpretations\") and the AO3 requirement to use context to inform evaluation."
    },
    {
     "code": "3.3 evaluation of a writer’s choice of vocabulary, grammatical and structural features",
     "q": "What does the specification require by way of analysis?",
     "idea": "Evaluating a writer’s choices of vocabulary, grammar and structure",
     "content": "The document’s own statement: \"evaluation of a writer’s choice of vocabulary, grammatical and structural features: analysing and evaluating how language, structure, form and presentation contribute to quality and impact; using linguistic and literary terminology for such evaluation\". This is AO2 exactly — \"Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate\" — and the mark scheme’s AO2 strand rises from \"Awareness of writer making deliberate choices\" to \"Analysis of writer’s methods with subject terminology used judiciously\"."
    },
    {
     "code": "3.3 comparing texts",
     "q": "Where is comparison required and what does it involve?",
     "idea": "Comparing texts critically",
     "content": "The document’s own statement: \"comparing texts: comparing and contrasting texts studied, referring where relevant to theme, characterisation, context (where known), style and literary quality; comparing two texts critically with respect to the above\". Comparison is assessed in Section B of Paper 2, where the whole AO1 strand is written in comparative terms, and in Question 27.2, where \"Examiners must only credit points which are comparative\" — but not in Section A, where the Telling Tales rubric warns that \"comparative skills are not being assessed and should not be rewarded\"."
    },
    {
     "code": "3.3 producing clear and coherent text",
     "q": "What kind of writing does the exam require?",
     "idea": "Producing clear and coherent text about literature",
     "content": "The document’s own statement: \"producing clear and coherent text: writing effectively about literature for a range of purposes such as: to describe, explain, summarise, argue, analyse and evaluate; discussing and maintaining a point of view; selecting and emphasising key points; using relevant quotation and using detailed textual references\". The mark scheme rewards exactly this shape: at the top of the range the response is \"a critical, exploratory, well-structured argument\", and \"Judicious use of precise references to support interpretation(s)\" is the AO1 bullet at Level 6."
    },
    {
     "code": "3.3 accurate Standard English",
     "q": "How is accuracy of writing assessed?",
     "idea": "Accurate Standard English: the AO4 marks",
     "content": "The document’s own statement: \"accurate Standard English: accurate spelling, punctuation and grammar.\" This is AO4 — \"Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation\" — worth 5% of the qualification and assessed on Section A of each paper only, 4 marks each time, on three performance descriptors: \"High performance\" 4 marks for spelling and punctuation of \"consistent accuracy\" and vocabulary and sentence structures that \"achieve effective control of meaning\"; \"Intermediate performance\" 2–3 marks; \"Threshold performance\" 1 mark, where \"any errors do not hinder meaning in the response\"; 0 marks where a candidate \"writes nothing or fails to meet threshold performance\"."
    },
    {
     "code": "3.3 Reading comprehension and reading critically / Writing",
     "q": "How are the skills grouped, and where are they examined?",
     "idea": "The two headings, and the papers that test them",
     "content": "The specification divides section 3.3 under two headings: \"Reading comprehension and reading critically\", which holds the four reading bullets, and \"Writing\", which holds the two writing bullets. Every one of them is examined through the set texts and the unseen poems rather than separately: Paper 1 tests them on an extract and a whole text, Paper 2 on an essay, a comparison and two poems nobody has seen. The aims of the course say why: students should \"read in depth, critically and evaluatively, so that they are able to discuss and explain their understanding and ideas\" and \"write accurately, effectively and analytically about their reading, using Standard English\"."
    }
   ]
  }
 ]
};
module.exports = { SPEC_8702 };
