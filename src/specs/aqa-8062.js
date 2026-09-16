/* AQA GCSE Religious Studies A (8062) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_8062 = {
 "id": "AQA-8062",
 "board": "AQA",
 "subject": "Religious Studies A",
 "code": "8062",
 "level": "GCSE",
 "version": "Version 1.2 10 November 2017",
 "firstExam": 2018,
 "firstTeaching": 2016,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Component 1: The study of religions: beliefs, teachings and practices",
   "paperCode": "8062/11–17",
   "marks": 96,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "Paper 1 Section A — one from 8062/11 to 8062/17 (the scaling table on page 30 names the papers this way; the qualification entry codes on pages 33–34 run from 8062AA to 8062UA and name the permitted religion pairs, each in an 'excluding textual studies' and, where the pair includes Christianity or Catholic Christianity, an 'including textual studies' form). \"What's assessed: Beliefs, teachings and practices of two from: • Buddhism • Christianity • Catholic Christianity • Hinduism • Islam • Judaism • Sikhism.\" The first of the two chosen religions. \"Two compulsory five-part questions will be set on each religion\" — one on Beliefs and teachings, one on Practices. \"Each five-part question is worth 24 marks, with 12 marks for AO1 and 12 marks for AO2\"; \"The structure of the five-part questions will be identical across all religions; marks will be allocated as follows: 1, 2, 4, 5 and 12.\" \"Each religion is marked out of 48.\" Maximum raw mark 51 (48 + 3 SPaG), scaling factor 1, maximum scaled mark 51.",
    "Paper 1 Section B — one from 8062/11 to 8062/17. The second of the two chosen religions, examined in exactly the same way: two compulsory five-part questions of 1, 2, 4, 5 and 12 marks, 24 marks each, 48 marks for the religion. \"Christianity and Catholic Christianity is a prohibited combination.\" Maximum raw mark 51 (48 + 3 SPaG), scaling factor 1, maximum scaled mark 51.",
    "Across both sections: \"In each five-part question, AO1 is tested in the first four questions; AO2 is assessed through the 12 mark question.\" \"Up to three marks are awarded in respect of spelling, punctuation and grammar (SPaG) based on performance in the 12 mark extended writing questions. Marks will be awarded on the basis of a student's performance on these questions in the Beliefs section.\" Two religions × 3 SPaG marks = the \"6 marks for spelling, punctuation and grammar (SPaG)\" the at-a-glance page advertises."
   ],
   "note": "How it's assessed (the document's three bullets, page 7): \"Written exam: 1 hour 45 minutes\"; \"96 marks, plus 6 marks for spelling, punctuation and grammar (SPaG)\"; \"50% of GCSE\". The two religions are sat as two separate question paper/answer books in the one 1 hour 45 minute session; the June 2023 8062/13 paper tells the student \"You will have 1 hour 45 minutes to complete both Question Paper/Answer Books\" and advises \"spend 50 minutes on this religion option and 50 minutes on your other religion option\". Under the Textual studies route this component is entered as Component 1B and one of the two religions must be Christianity or Catholic Christianity; under the non-Textual studies route it is entered as Component 1A."
  },
  {
   "id": "C2",
   "name": "Component 2: Thematic studies",
   "paperCode": "8062/2A or 8062/2B",
   "marks": 96,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "8062/2A — the non-Textual studies route. \"Students must answer questions on … four from six religious, philosophical and ethical studies themes in Component 2A\" (Themes A–F). \"Themes A–F are examined in Component 2A.\" One compulsory five-part question per theme, 1, 2, 4, 5 and 12 marks, \"Each theme is marked out of 24\", 12 marks AO1 and 12 marks AO2.",
    "8062/2B — the Textual studies route. \"two from six religious, philosophical and ethical studies themes, plus both textual studies themes in Component 2B\"; the June 2023 paper puts it as \"Choose two themes from Section A and both themes from Section B. Answer all questions on the four themes you have chosen.\" \"Themes A–H are examined in Component 2B.\" The same five-part question of 1, 2, 4, 5 and 12 marks on each of the four themes, 24 marks each.",
    "Across both papers: \"One compulsory five-part question will be set per theme\"; \"In each five-part question, AO1 is tested in the first four questions; AO2 is assessed through the 12 mark question.\" \"Up to three marks are awarded in respect of spelling, punctuation and grammar (SPaG) based on performance in the 12 mark extended writing questions.\" Four themes × 24 = 96 marks, plus the single best 3-mark SPaG award = 99 raw marks, scaling factor 1.03, maximum scaled mark 102."
   ],
   "note": "How it's assessed (the document's three bullets, page 8): \"Written exam: 1 hour 45 minutes\"; \"96 marks, plus 3 marks for spelling, punctuation and grammar (SPaG)\"; \"50% of GCSE\". The June 2023 8062/2B paper advises \"spend 25 minutes on each theme\" and says of SPaG \"The marks for SPaG are shown below the mark allocation for each question. The best of these marks will be included in your total for the paper.\" \"There are two routes through this specification. Students should enter the qualification either including or excluding Textual studies.\""
  }
 ],
 "options": [
  {
   "id": "religions",
   "choose": 2,
   "label": "Component 1 (page 7): \"Beliefs, teachings and practices of two from: • Buddhism • Christianity • Catholic Christianity • Hinduism • Islam • Judaism • Sikhism.\" Section 3.1 (page 9) repeats it: \"Students should study any two of the following\". TWO RESTRICTIONS THE PLATFORM CANNOT ENFORCE, so read them here: (1) \"Christianity and Catholic Christianity is a prohibited combination\" — printed on pages 7, 9 and 31 — so that pair may not be chosen; the entry-code table on pages 33–34 lists every permitted pair and no code exists for it. (2) If the Textual studies themes (G and H) are taken in Component 2, then \"students must answer questions on either Christianity or Catholic Christianity, plus one religion from the other five specified religions in Component 1B\" (pages 8 and 30) — so one of the two religions must be Christianity or Catholic Christianity, and section 3.2.2 adds \"Students entering for textual studies themes must also study Christianity (page 11) or Catholic Christianity (page 12) in Component 1. There is a separate entry code for this route.\"",
   "from": [
    "3.1.1",
    "3.1.2",
    "3.1.3",
    "3.1.4",
    "3.1.5",
    "3.1.6",
    "3.1.7"
   ]
  },
  {
   "id": "themes",
   "choose": 4,
   "label": "Component 2 (page 8): \"Either four religious, philosophical and ethical studies themes or two religious, philosophical and ethical studies themes and two textual studies themes.\" Section 3.2 repeats it: \"Students should study a total of four themes from Component 2.\" THE TWO ROUTES, WHICH THE PLATFORM CANNOT ENFORCE (pages 8 and 30–31): \"There are two routes through this specification. Students should enter the qualification either including or excluding Textual studies.\" (1) NON-TEXTUAL STUDIES ROUTE — \"four from six religious, philosophical and ethical studies themes in Component 2A\", that is four of Theme A: Relationships and families; Theme B: Religion and life; Theme C: The existence of God and revelation; Theme D: Religion, peace and conflict; Theme E: Religion, crime and punishment; Theme F: Religion, human rights and social justice. \"Themes A–F are examined in Component 2A.\" (2) TEXTUAL STUDIES ROUTE — \"two from six religious, philosophical and ethical studies themes, plus both textual studies themes in Component 2B\"; \"Students electing for this route must study both textual studies themes (Themes G and H)\", so Theme G: St Mark's Gospel – the life of Jesus and Theme H: St Mark's Gospel as a source of religious, moral and spiritual truths must be taken together, never one without the other; and this route also requires that one of the two Component 1 religions is Christianity or Catholic Christianity, with a separate entry code. \"Themes A–H are examined in Component 2B.\"",
   "from": [
    "3.2.1.1",
    "3.2.1.2",
    "3.2.1.3",
    "3.2.1.4",
    "3.2.1.5",
    "3.2.1.6",
    "3.2.2.1",
    "3.2.2.2"
   ]
  }
 ],
 "ao": [
  {
   "id": "AO1",
   "label": "Demonstrate knowledge and understanding of religion and beliefs",
   "text": "AO1: Demonstrate knowledge and understanding of religion and beliefs including: beliefs, practices and sources of authority; influence on individuals, communities and societies; similarities and differences within and/or between religions and beliefs. (Page 30. The mark schemes split it into the three strands the specification lists — AO1:1 \"beliefs, practices and sources of authority\", AO1:2 \"influence on individuals, communities and societies\" and AO1:3 \"similarities and differences within and/or between religions and beliefs\" — and print the relevant one as the target of each of the first four parts of every five-part question.)",
   "weight": 50,
   "byComponent": {
    "C1": 25,
    "C2": 25
   }
  },
  {
   "id": "AO2",
   "label": "Analyse and evaluate aspects of religion and belief",
   "text": "AO2: Analyse and evaluate aspects of religion and belief, including their significance and influence. (Page 30. \"In each five-part question, AO1 is tested in the first four questions; AO2 is assessed through the 12 mark question.\")",
   "weight": 50,
   "byComponent": {
    "C1": 25,
    "C2": 25
   }
  }
 ],
 "aoNote": "\"Assessment objectives (AOs) are set by Ofqual and are the same across all GCSE Religious Studies A specifications and all exam boards.\" The weighting table on page 30 gives, as approximate percentages: AO1 — Paper 1 25, Paper 2 25, overall 50; AO2 — Paper 1 25, Paper 2 25, overall 50; \"Overall weighting of components\" Paper 1 50, Paper 2 50, total 100.",
 "markConventions": {
  "style": "levels",
  "summary": "Every question in this qualification belongs to one five-part question of 1, 2, 4, 5 and 12 marks — \"The structure of the five-part questions will be identical across all religions; marks will be allocated as follows: 1, 2, 4, 5 and 12\" (4.4.1, page 31), and 4.4.2 says the same of the themes. Each five-part question is worth 24 marks, 12 for AO1 and 12 for AO2, and \"AO1 is tested in the first four questions; AO2 is assessed through the 12 mark question\". THE FIVE PARTS. (1) The 1-mark question is recall, set as multiple choice: \"Which one of the following …\" with four alternatives A–D and a tick in one box; the mark scheme prints one answer with its letter. (2) The 2-mark question is \"Give two …\" — two correct points, one mark each, no explanation required; only the first two answers are marked. (3) The 4-mark question asks for two things with development, most often \"Explain two contrasting …\" (AO1:3) or \"Explain two ways in which … influences … today\" (AO1:2): for each of the two, a simple explanation earns 1 mark and a detailed explanation 2, so 2 + 2; \"If similar beliefs are given only one of them may be credited up to 2 marks max\", and on an influence question \"To be a 'detailed explanation', the 'influence' of the way must be included\". (4) The 5-mark question is the same 2 + 2 for two beliefs, teachings, ways or lessons, plus a fifth mark for a source: \"Refer to sacred writings or another source of religious belief and teaching in your answer\" (on the textual themes, \"You must refer to St Mark's Gospel in your answer\") — \"Relevant and accurate reference to sacred writings or another source of religious belief and teaching – 1 mark\". (5) The 12-mark question is the evaluation: a statement in quotation marks, then \"Evaluate this statement.\" and the printed bullets — on Component 2, \"should give reasoned arguments in support of this statement; should give reasoned arguments to support a different point of view; should refer to religious arguments; may refer to non-religious arguments; should reach a justified conclusion\"; on Component 1, \"refer to Christian teaching\" (or the teaching of the religion being examined) in place of the religious/non-religious pair. It is marked by levels of response on the whole answer: Level 4 (10–12) \"A well-argued response, reasoned consideration of different points of view. Logical chains of reasoning leading to judgement(s) supported by knowledge and understanding of relevant evidence and information. References to religion applied to the issue.\"; Level 3 (7–9) \"Reasoned consideration of different points of view. Logical chains of reasoning that draw on knowledge and understanding of relevant evidence and information. Clear reference to religion.\"; Level 2 (4–6) \"Reasoned consideration of a point of view … OR Recognition of different points of view, each supported by relevant reasons/evidence. Maximum of Level 2 if there is no reference to religion.\"; Level 1 (1–3) \"Point of view with reason(s) stated in support.\"; Level 0 \"Nothing worthy of credit.\" Marking is best fit — \"It is essential that the whole response is read and then allocated to the level it best fits\", and \"Indicative content in the mark scheme is provided as a guide for examiners. It is not intended to be exhaustive and you must credit other valid points.\" SPaG. \"Spelling, punctuation and grammar will be assessed in 12 mark questions\" (4.5, page 31) on four performance descriptors — High performance 3 (\"spell and punctuate with consistent accuracy\", \"rules of grammar with effective control of meaning overall\", \"a wide range of specialist terms as appropriate\"), Intermediate 2 (\"considerable accuracy\", \"general control of meaning\", \"a good range of specialist terms\"), Threshold 1 (\"reasonable accuracy\", \"some control of meaning and any errors do not significantly hinder meaning overall\", \"a limited range of specialist terms\"), 0 for nothing written, a response that does not relate to the question, or errors that \"severely hinder meaning\". Component 1 carries 6 SPaG marks in all — 3 per religion, awarded \"on the basis of a student's performance on these questions in the Beliefs section\"; Component 2 carries 3, the best of the four themes' 12-mark answers. SCALING. \"The marks awarded on the papers will be scaled to meet the weighting of the components\" (4.3, page 30): Paper 1 Section A, one from 8062/11 to 8062/17, maximum raw mark 51, scaling factor 1, maximum scaled mark 51; Paper 1 Section B, one from 8062/11 to 8062/17, 51, 1, 51; Paper 2, 8062/2A or 8062/2B, maximum raw mark 99, scaling factor 1.03, maximum scaled mark 102; \"Total scaled mark: 204\". \"Students' final marks will be calculated by adding together the scaled marks for each component. Grade boundaries will be set using this total scaled mark.\" The qualification is graded 1 to 9, \"where 9 is the best grade\".",
  "commandWords": [
   {
    "word": "Which one of the following …?",
    "means": "The 1-mark opening question, always multiple choice with four alternatives A–D and a tick in one box (\"Which one of the following is not part of the Christian Trinity?\"; \"Which one of the following means an unmarried couple living together?\"). Target AO1:1. Pure recall of a term: \"Such questions have four alternatives and the one correct answer will be given together with the correct letter, eg 'Answer: D Trinity'.\" No credit for explanation, and nothing else on the page can rescue a wrong tick.",
    "marks": 1,
    "aoAssessed": "AO1:1"
   },
   {
    "word": "Give two …",
    "means": "The 2-mark question (\"Give two Christian beliefs about Jesus' Incarnation\"; \"Give two reasons why many religious believers accept remarriage\"; \"Give two things Jesus said when he prayed in Gethsemane\"). Target AO1:1. \"One mark for each of two correct points\" — two separate points, each a mark, with no development required and none rewarded. Only the first two answers count: \"Award for the first two answers only, wherever they appear\", and a third correct answer after two weak ones \"must be ignored and no mark given for it\".",
    "marks": 2,
    "aoAssessed": "AO1:1"
   },
   {
    "word": "Explain two contrasting …",
    "means": "The commonest 4-mark question (\"Explain two contrasting religious beliefs about gender equality\"; \"Explain two contrasting types of baptism\"; \"Explain two contrasting Christian beliefs about the Feeding of the Five Thousand\"). Target AO1:3 — \"similarities and differences within and/or between religions and beliefs\". Marked 2 + 2: \"Simple explanation of a relevant and accurate contrast – 1 mark\" and \"Detailed explanation of a relevant and accurate contrast – 2 marks\" for each of the two. \"Contrast may mean opposing or mean different views in terms of either belief or issue.\" The trap is agreement: \"If similar beliefs are given only one of them may be credited up to 2 marks max.\"",
    "marks": 4,
    "aoAssessed": "AO1:3"
   },
   {
    "word": "Explain two ways in which … influences … today",
    "means": "The influence form of the 4-mark question (\"Explain two ways in which the problem of evil and suffering influences Christians today\"). Target AO1:2 — \"influence on individuals, communities and societies\". Marked 2 + 2 on \"Simple explanation of a relevant and accurate influence – 1 mark\" and \"Detailed explanation of a relevant and accurate influence – 2 marks\", and the second mark is only earned if the answer says what believers actually do or think differently because of it: \"To be a 'detailed explanation', the 'influence' of the way must be included.\"",
    "marks": 4,
    "aoAssessed": "AO1:2"
   },
   {
    "word": "In your answer you must refer to one or more religious traditions.",
    "means": "The instruction attached to the 4-mark contrasting question on Component 2, where the student chooses the traditions: the themes papers are not set on one named religion, so the answer must name the tradition it is drawing on. The Component 2 mark schemes print general content first and then \"under separate headings, Content sections for each of the six religions allowed within the Specifications\". Section 3.2.1 sets the wider requirement: students \"should be aware of different religious perspectives on the issues studied within and / or between religious and non-religious beliefs such as atheism and humanism\", with three named issues per theme to be contrasted \"with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions\" (or, in Theme C, \"and non-religious beliefs such as atheism and humanism\").",
    "marks": 4,
    "aoAssessed": "AO1:3"
   },
   {
    "word": "Explain two … Refer to sacred writings or another source of religious belief and teaching in your answer.",
    "means": "The 5-mark question (\"Explain two Christian teachings about life after death\"; \"Explain two religious beliefs about the role of children within the family\"; \"Explain two ways in which CAFOD or Christian Aid or Tearfund helps the poor\"). Target AO1:1. Four of the five marks are the familiar 2 + 2 — simple explanation 1, detailed explanation 2, for each of the two teachings, beliefs or ways — and the fifth is separate and unmissable: \"Relevant and accurate reference to sacred writings or another source of religious belief and teaching – 1 mark\". The specification builds the whole subject on this: students \"should be able to refer to scripture and/or sacred texts where appropriate\" and must \"make specific references to sources of wisdom and authority including scripture and/or sacred texts\".",
    "marks": 5,
    "aoAssessed": "AO1:1"
   },
   {
    "word": "You must refer to St Mark's Gospel in your answer.",
    "means": "The textual studies form of the 5-mark instruction, on Themes G and H (\"Explain two lessons Christians might learn from Jesus' reply to the request made by James and John. You must refer to St Mark's Gospel in your answer.\"). The fifth mark is for the Gospel reference itself, and because the specification prints the passages by chapter and verse the reference is expected to be to a set passage. Section 3.2.2 asks students to \"show knowledge of the set texts for study and an understanding of their importance for Jesus, for his early followers and for people of the 21st century\".",
    "marks": 5,
    "aoAssessed": "AO1:1, AO1:2"
   },
   {
    "word": "Evaluate this statement.",
    "means": "The 12-mark question, the only AO2 question on the paper and the only one carrying SPaG. It always follows a statement printed in quotation marks (\"'Belief in Jesus is all that Christians need to be saved from sin.'\"; \"'Married couples should not use contraception.'\"; \"'Euthanasia is never the best option.'\"). Target: \"AO2 Analyse and evaluate aspects of religion and belief, including their significance and influence.\" It is marked by levels on the whole answer, not point by point, and the top level asks for \"A well-argued response, reasoned consideration of different points of view. Logical chains of reasoning leading to judgement(s) supported by knowledge and understanding of relevant evidence and information. References to religion applied to the issue.\" An answer that never mentions religion is capped: \"Maximum of Level 2 if there is no reference to religion.\"",
    "marks": 12,
    "aoAssessed": "AO2"
   },
   {
    "word": "In your answer you: should give reasoned arguments in support of this statement; should give reasoned arguments to support a different point of view; should refer to religious arguments; may refer to non-religious arguments; should reach a justified conclusion.",
    "means": "The five bullets printed under every Component 2 evaluation question — in effect the mark scheme in the open. They map onto the levels: two sides of the argument, each reasoned, is what lifts an answer out of Level 1 into Level 2 and 3; \"refer to religious arguments\" is the reference to religion without which Level 2 is the ceiling; \"may refer to non-religious arguments\" invites the atheist and humanist views section 3.2.1 requires awareness of; and \"reach a justified conclusion\" is the \"judgement(s) supported by knowledge and understanding\" of Level 4 — a conclusion that follows from the arguments already made, not a fresh opinion bolted on at the end.",
    "marks": 12,
    "aoAssessed": "AO2"
   },
   {
    "word": "In your answer you should: refer to Christian teaching; give reasoned arguments to support this statement; give reasoned arguments to support a different point of view; reach a justified conclusion.",
    "means": "The Component 1 form of the same bullets. Because Paper 1 is set on one named religion, the first bullet is not optional and not a choice of tradition: the answer must argue from the teaching of the religion in the question (Christian, Buddhist, Hindu, Muslim, Jewish or Sikh teaching as the paper requires), so the 'different point of view' is usually a divergent view within that religion — which is why the specification says \"Common and divergent views within [the religion] in the way beliefs and teachings are understood and expressed should be included throughout\" for all seven.",
    "marks": 12,
    "aoAssessed": "AO2"
   }
  ],
  "essayShapes": [
   {
    "marks": 12,
    "minutes": 12,
    "paper": "The 12-mark evaluation with SPaG — the last part of every five-part question, on both components (Component 1: 12 marks + 3 SPaG on the Beliefs question of each religion; Component 2: 12 marks + 3 SPaG, best of the four themes)",
    "structure": "A statement is quoted and the instruction is \"Evaluate this statement.\" This is the only AO2 question and the only levels-marked one, so it is where the grade is won. Do not open with a definition paragraph: the levels reward argument, not exposition. Take the statement seriously first — build one developed chain of reasoning in support of it, grounded in named religious teaching (a scriptural reference, a doctrine, a named tradition's position), because Level 3 needs \"Logical chains of reasoning that draw on knowledge and understanding of relevant evidence and information\" and \"Clear reference to religion\", and \"Maximum of Level 2 if there is no reference to religion\". Then build the opposing case to the same standard — Level 2 is the ceiling for \"Reasoned consideration of a point of view\" alone, and Levels 3 and 4 both require \"different points of view\". On Component 2 the printed bullets allow non-religious arguments (\"may refer to non-religious arguments\"), and section 3.2.1 expects awareness of \"non-religious beliefs such as atheism and humanism\"; on Component 1 the first bullet instead requires reference to the religion's own teaching, so the second view is usually a divergent view within that religion. Close with the judgement the last bullet demands: \"should reach a justified conclusion\" — Level 4 wants \"judgement(s) supported by knowledge and understanding of relevant evidence and information\", which means the conclusion must say which arguments were stronger and why, not merely that both sides have a point. Two or three developed arguments each way beat six assertions. SPaG is marked on this answer alone: 3 marks for spelling and punctuation \"with consistent accuracy\", grammar used \"with effective control of meaning overall\" and \"a wide range of specialist terms as appropriate\" — so the technical vocabulary of the topic (atonement, samsara, Shekhinah, ummah) earns marks twice over. (Time: about 12 minutes. The paper allows 25 minutes for a 24-mark five-part question, so roughly a minute a mark.)"
   },
   {
    "marks": 5,
    "minutes": 5,
    "paper": "The 5-mark source question — the fourth part of every five-part question, on both components",
    "structure": "\"Explain two … Refer to sacred writings or another source of religious belief and teaching in your answer\" (or, on Themes G and H, \"You must refer to St Mark's Gospel in your answer\"). Marked 2 + 2 + 1, so the shape is fixed and should be written in that shape: one paragraph per teaching, belief, way or lesson, each stating the point (1 mark) and then developing it — \"example or evidence\", \"reference to different views\" or \"detailed information\" (the second mark) — and then, unmistakably, the source. The fifth mark is awarded once, for a \"Relevant and accurate reference to sacred writings or another source of religious belief and teaching\", so quote or cite it plainly: 'The Apostles' Creed says \"I believe in the resurrection of the body and the life everlasting\"'; Qur'an Surah 112; Genesis 12:1-3; Dhammapada 190–191; Guru Granth Sahib 1a. A paraphrase attributed to a named text counts; an unattributed idea does not. Never give three teachings hoping one lands — only two are marked. (Time: about 5 minutes.)"
   },
   {
    "marks": 4,
    "minutes": 4,
    "paper": "The 4-mark contrasting or influence question — the third part of every five-part question, on both components",
    "structure": "Two forms, both marked 2 + 2 with no fifth mark and no source required. CONTRASTING (AO1:3): \"Explain two contrasting …\" — the two views must genuinely differ, because \"If similar beliefs are given only one of them may be credited up to 2 marks max\"; \"Contrast may mean opposing or mean different views in terms of either belief or issue\". Write two short paragraphs whose first words set them against each other (\"Some Christians believe … whereas other Christians believe …\"), and develop each with a reason, an example or a named tradition to turn the simple explanation into the \"Detailed explanation of a relevant and accurate contrast\". On Component 2 the instruction \"In your answer you must refer to one or more religious traditions\" means the tradition has to be named. INFLUENCE (AO1:2): \"Explain two ways in which … influences … today\" — the development mark is only given if the answer shows the effect on how people actually live, worship, give or campaign: \"To be a 'detailed explanation', the 'influence' of the way must be included\". A belief stated without its consequence scores 1, not 2. (Time: about 4 minutes.)"
   },
   {
    "marks": 24,
    "minutes": 25,
    "paper": "The whole five-part question — one per theme in Component 2, two per religion in Component 1 (one on Beliefs and teachings, one on Practices)",
    "structure": "\"Each five-part question is worth 24 marks, with 12 marks for AO1 and 12 marks for AO2\"; the parts run 1, 2, 4, 5 and 12 in that order, and the paper advises 25 minutes on a theme and 50 minutes on a religion option (two five-part questions). The half of the marks sitting in the first four parts is won quickly and lost carelessly: a tick, two bare points, two contrasts with development, two teachings with development and a source — about 13 minutes' work for 12 AO1 marks, none of it requiring an essay. The remaining 12 minutes belong to the evaluation, which carries the other 12 marks plus SPaG. The commonest way to lose the grade is to over-write the 4- and 5-mark parts and run out of time on the 12. Answer every part: \"Two compulsory five-part questions will be set on each religion\" and \"Answer all questions\" — there is no choice within a chosen religion or theme."
   }
  ],
  "timingNote": "Both papers are 1 hour 45 minutes (105 minutes). Component 1: two religion booklets in one session — \"You will have 1 hour 45 minutes to complete both Question Paper/Answer Books\", advice \"spend 50 minutes on this religion option and 50 minutes on your other religion option\", which is 50 minutes for two five-part questions worth 48 marks. Component 2: \"You are advised to spend 25 minutes on each theme\", which is 25 minutes for one five-part question worth 24 marks. Either way it is about a minute a mark, with a little in hand."
 },
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/rs/specifications/AQA-8062-SP-2016.PDF",
  "etag": "\"15f334-5c5fba4cc5847\"",
  "lastModified": "Wed, 30 Jun 2021 13:24:35 GMT",
  "length": 1438516,
  "checkedAt": "2026-09-16T09:02:03.202Z"
 },
 "topics": [
  {
   "id": "3.1.1",
   "component": "C1",
   "option": "religions",
   "name": "Buddhism",
   "caseStudies": [
    "Buddhist sources of wisdom and authority: \"Students should study the beliefs, teachings and practices of Buddhism specified below and their basis in Buddhist sources of wisdom and authority. They should be able to refer to scripture and/or sacred texts where appropriate. Some texts are prescribed for study in the content set out below and questions may be set on them.\"",
    "Jataka 075 — prescribed against \"the Four Sights: illness, old age, death, holy man\" (3.1.1.1).",
    "Dhammapada 190–191 — prescribed against the Eightfold Path (magga) and the Threefold Way of ethics (sila), meditation (samadhi) and wisdom (panna) (3.1.1.1).",
    "The Buddhist traditions the document names for common and divergent views: \"Theravada, Mahayana, Zen and Pure Land\". \"They must study the specific differences identified below.\"",
    "Places of worship named: \"temples, shrines, monasteries (viharas), halls for meditation or learning (gompas) and their key features including Buddha rupa, artefacts and offerings\".",
    "Festivals named: Wesak; Parinirvana Day — \"Festivals and retreats and their importance to Buddhists in Great Britain today, including the celebrations, origins and significance of\".",
    "\"Students may refer to any relevant text in their answers and AQA will publish a list of appropriate texts as part of the supporting material for this specification. These additional texts will not be required for study, alternatives may be used, and questions will not be set on them.\""
   ],
   "ideas": [
    {
     "code": "3.1.1 — Sources of wisdom and authority, influence, and common and divergent views within Buddhism",
     "q": "What does the specification require of every answer on Buddhism, whatever the question?",
     "idea": "The three standing requirements: sources, influence and divergence",
     "content": "\"Students should be aware that Buddhism is one of the diverse religious traditions and beliefs in Great Britain today and that the main religious tradition in Great Britain is Christianity.\" Every belief and practice below must be traced to \"their basis in Buddhist sources of wisdom and authority\" — students \"should be able to refer to scripture and/or sacred texts where appropriate\", and the fifth mark of every 5-mark question is for exactly that. \"Students should study the influence of the beliefs, teachings and practices studied on individuals, communities and societies.\" And: \"Common and divergent views within Buddhism in the way beliefs and teachings are understood and expressed should be included throughout. Students may refer to a range of Buddhist perspectives in their answers, for example, Theravada, Mahayana, Zen and Pure Land. They must study the specific differences identified below.\""
    },
    {
     "code": "3.1.1.1 — The concept of Dhamma (Dharma)",
     "q": "What do Buddhists mean by the Dhamma?",
     "idea": "Dhamma (Dharma): the Buddha's teaching and the truth it describes",
     "content": "Listed first under the heading \"The Dhamma (Dharma)\" in 3.1.1.1 Key Beliefs: \"The concept of Dhamma (Dharma).\" It is the organising idea of the whole Key Beliefs section — the teaching of the Buddha, and the way things actually are, which that teaching sets out. Everything that follows (dependent arising, the Three Marks, the Four Noble Truths) is content of the Dhamma, and the Dhamma is one of the refuges a Buddhist takes."
    },
    {
     "code": "3.1.1.1 — The concept of dependent arising (paticcasamupada)",
     "q": "What is dependent arising and why does it matter?",
     "idea": "Dependent arising (paticcasamupada): nothing exists on its own",
     "content": "\"The concept of dependent arising (paticcasamupada).\" Everything that exists arises in dependence on conditions and ceases when those conditions cease, so nothing has independent, permanent existence of its own. It underwrites anicca and anatta, and it explains how craving leads to suffering and how removing the cause removes the effect — which is what makes the third Noble Truth possible."
    },
    {
     "code": "3.1.1.1 — The Three Marks of Existence: anicca, anatta, dukkha",
     "q": "What are the Three Marks of Existence?",
     "idea": "The Three Marks: impermanence, no fixed self, unsatisfactoriness",
     "content": "\"The Three Marks of Existence: anicca (impermanence); anatta (no fixed self); dukkha (unsatisfactoriness of life, suffering).\" The document's own glosses are the ones to use: anicca is impermanence, anatta is no fixed self (not 'no self at all' in every reading), and dukkha covers both the unsatisfactoriness of life and suffering proper. These three are marks of all conditioned existence, which is why they are stated as facts about the world rather than as beliefs about it."
    },
    {
     "code": "3.1.1.1 — The human personality, in the Theravada and Mahayana traditions",
     "q": "How do Theravada and Mahayana Buddhists understand the human person?",
     "idea": "The Five Aggregates and sunyata: two accounts of the person",
     "content": "\"The human personality, in the Theravada and Mahayana traditions: Theravada: the Five Aggregates (skandhas) of form, sensation, perception, mental formations, consciousness; Mahayana: sunyata, the possibility of attaining Buddhahood and Buddha-nature.\" This is one of the \"specific differences\" the document says must be studied, so it is prime material for the AO1:3 \"Explain two contrasting…\" question: the person analysed into five changing aggregates on one side, and emptiness with the Buddha-nature present in all beings on the other."
    },
    {
     "code": "3.1.1.1 — Human destiny",
     "q": "What are Buddhists ultimately aiming at?",
     "idea": "Human destiny: Arhat and Bodhisattva, Buddhahood and the Pure Land",
     "content": "\"Human destiny: different ideals in Theravada and Mahayana traditions: Arhat (a 'perfected person') and Bodhisattva ideals; Buddhahood and the Pure Land.\" Another of the specified differences: the Arhat as the perfected person who has reached the goal, against the Bodhisattva who postpones it for the sake of others; and beyond both, Buddhahood itself and the Pure Land into which devotees hope to be reborn."
    },
    {
     "code": "3.1.1.1 — The Buddha's life and its significance",
     "q": "Why does the story of the Buddha's life matter to Buddhists?",
     "idea": "The Buddha's life: luxury, the Four Sights, asceticism, Enlightenment",
     "content": "Under the heading \"The Buddha and the Four Noble Truths\": \"The Buddha's life and its significance: the birth of the Buddha and his life of luxury; the Four Sights: illness, old age, death, holy man (Jataka 075); the Buddha's ascetic life; the Buddha's Enlightenment.\" Jataka 075 is prescribed here, so questions may be set on it. The life is not biography for its own sake — each stage teaches something: luxury does not satisfy, the Four Sights show dukkha, asceticism fails too, and the Middle Way ends in Enlightenment."
    },
    {
     "code": "3.1.1.1 — The Four Noble Truths",
     "q": "What are the Four Noble Truths and what do they prescribe?",
     "idea": "The Four Noble Truths and the Eightfold Path",
     "content": "\"The Four Noble Truths: suffering (dukkha) including different types of suffering; the causes of suffering (samudaya); the Three Poisons, ignorance, greed and hate; the end of craving (tanha), interpretations of nibbana (nirvana) and Enlightenment; the Eightfold Path (magga) to nibbana/nirvana; the path as the Threefold Way: ethics (sila), meditation (samadhi) and wisdom (panna). Dhammapada 190–191.\" Note what the document asks for beyond the list: different types of suffering, the Three Poisons as the cause, and \"interpretations of nibbana\" in the plural — divergence is built into the content."
    },
    {
     "code": "3.1.1.2 — The nature, use and importance of Buddhist places of worship",
     "q": "Where do Buddhists worship and what is in those places?",
     "idea": "Temples, shrines, viharas and gompas",
     "content": "First bullet of Practices under \"Worship and festivals\": \"The nature, use and importance of Buddhist places of worship including temples, shrines, monasteries (viharas), halls for meditation or learning (gompas) and their key features including Buddha rupa, artefacts and offerings.\" Three things are asked for each place — its nature, its use and its importance — and the key features are named, so an answer that lists buildings without the Buddha rupa, the artefacts and the offerings has missed the specified content."
    },
    {
     "code": "3.1.1.2 — Puja, the significance and role of puja/devotional ritual",
     "q": "What happens in puja and why do Buddhists do it?",
     "idea": "Puja: devotion in the home and the temple",
     "content": "\"Puja, the significance and role of puja/devotional ritual in the home and in the temple, including chanting, both as a devotional practice and as an aid to mental concentration, mantra recitation, use of malas.\" The document makes the double purpose explicit — chanting is devotion and it is a means to mental concentration — which is the natural contrast for a 4-mark question, and mantra recitation and malas are named practices questions may be set on."
    },
    {
     "code": "3.1.1.2 — Meditation, the different aims, significance and methods of meditation",
     "q": "What kinds of meditation do Buddhists practise, and to what end?",
     "idea": "Samatha, Vipassana and visualisation",
     "content": "\"Meditation, the different aims, significance and methods of meditation: Samatha (concentration and tranquillity) including mindfulness of breathing; Vipassana (insight) including zazen; the visualisation of Buddhas and Bodhisattvas.\" The aims differ, not just the techniques: calm and concentration in Samatha, insight into the Three Marks in Vipassana, and devotional visualisation in the Mahayana traditions — three genuinely contrasting practices within one religion."
    },
    {
     "code": "3.1.1.2 — Ceremonies and rituals associated with death and mourning",
     "q": "How do Buddhists mark death?",
     "idea": "Death and mourning in Theravada communities and in Japan and Tibet",
     "content": "\"The practice and significance of different ceremonies and rituals associated with death and mourning in Theravada communities and in Japan and Tibet.\" The document names three settings and asks for the practice and its significance in each, so the contrast is geographical and traditional as well as ritual — and it connects back to anicca, kamma and rebirth."
    },
    {
     "code": "3.1.1.2 — Festivals and retreats and their importance to Buddhists in Great Britain today",
     "q": "Which festivals do Buddhists keep and why?",
     "idea": "Wesak and Parinirvana Day",
     "content": "\"Festivals and retreats and their importance to Buddhists in Great Britain today, including the celebrations, origins and significance of: Wesak; Parinirvana Day.\" Three things are asked of each festival — the celebrations, the origins and the significance — and the frame is \"in Great Britain today\", matching the specification's opening insistence that students \"consider different beliefs and attitudes to religious and non-religious issues in contemporary British society\". Retreats belong to this bullet too."
    },
    {
     "code": "3.1.1.2 — Ethical teaching: kamma and rebirth, compassion, loving kindness",
     "q": "What are the foundations of Buddhist ethics?",
     "idea": "Kamma and rebirth, karuna and metta",
     "content": "First bullet under \"Buddhist ethics\": \"Ethical teaching: kamma (karma) and rebirth; compassion (karuna); loving kindness (metta).\" Kamma and rebirth supply the consequences of action; karuna and metta supply the motive. Together they explain why Buddhist ethics is usually argued from intention and its effects rather than from command."
    },
    {
     "code": "3.1.1.2 — The five moral precepts",
     "q": "What are the five moral precepts?",
     "idea": "The five precepts",
     "content": "\"The five moral precepts: do not take life; do not take what is not given; do not misuse the senses; do not speak falsehoods; do not take intoxicants that cloud the mind.\" The document's wording matters — these are undertakings rather than commandments, and 'do not misuse the senses' and 'intoxicants that cloud the mind' are the phrases to use. They are the obvious source for a 2-mark \"Give two…\" and the backbone of any evaluation about Buddhist conduct."
    },
    {
     "code": "3.1.1.2 — The six perfections in the Mahayanan tradition",
     "q": "What are the six perfections and how are they developed?",
     "idea": "The six perfections (Mahayana)",
     "content": "\"The six perfections in the Mahayanan tradition: generosity; morality; patience; energy; meditation; wisdom, including how the individual develops these perfections within themselves.\" The last clause is examinable content, not decoration: the question can ask how a Buddhist develops them, not only what they are. They belong to the Bodhisattva path, so they pair naturally with the Arhat/Bodhisattva contrast in Key Beliefs."
    }
   ]
  },
  {
   "id": "3.1.2",
   "component": "C1",
   "option": "religions",
   "name": "Christianity",
   "caseStudies": [
    "Christian sources of wisdom and authority: \"Students should study the beliefs, teachings and practices of Christianity specified below and their basis in Christian sources of wisdom and authority. They should be able to refer to scripture and/or sacred texts where appropriate. Some texts are prescribed for study in the content set out below and questions may be set on them.\"",
    "John 1:1-3 and Genesis 1:1-3 — prescribed against \"Different Christian beliefs about creation including the role of Word and Spirit\" (3.1.2.1).",
    "The Bible — named in \"liturgical, non-liturgical and informal, including the use of the Bible\" (3.1.2.2).",
    "The Lord's Prayer — named in \"Prayer and its significance, including the Lord's Prayer, set prayers and informal prayer\" (3.1.2.2).",
    "The sacraments named: baptism (infant and believers' baptism) and Holy Communion/Eucharist (3.1.2.2).",
    "\"two contrasting examples of Christian pilgrimage: Lourdes and Iona\" (3.1.2.2).",
    "\"the celebrations of Christmas and Easter, including their importance for Christians in Great Britain today\" (3.1.2.2).",
    "Local church work named: \"food banks and street pastors\" (3.1.2.2).",
    "\"the work of one of the following: Catholic Agency For Overseas Development (CAFOD), Christian Aid, Tearfund\" (3.1.2.2).",
    "The Christian perspectives the document names for common and divergent views: \"Catholic, Orthodox and Protestant\". \"They must study the specific differences identified below.\""
   ],
   "ideas": [
    {
     "code": "3.1.2 — Sources of wisdom and authority, influence, and common and divergent views within Christianity",
     "q": "What does the specification require of every answer on Christianity, whatever the question?",
     "idea": "The three standing requirements: sources, influence and divergence",
     "content": "\"Students should be aware that Christianity is one of the diverse religious traditions and beliefs in Great Britain today and that the main religious tradition in Great Britain is Christianity.\" Beliefs and practices must be traced to \"their basis in Christian sources of wisdom and authority\", with students \"able to refer to scripture and/or sacred texts where appropriate\" — the fifth mark of every 5-mark question. \"Students should study the influence of the beliefs, teachings and practices studied on individuals, communities and societies.\" And: \"Common and divergent views within Christianity in the way beliefs and teachings are understood and expressed should be included throughout. Students may refer to a range of different Christian perspectives in their answers including Catholic, Orthodox and Protestant. They must study the specific differences identified below.\""
    },
    {
     "code": "3.1.2.1 — The nature of God: God as omnipotent, loving and just",
     "q": "What do Christians believe God is like, and how can such a God allow suffering?",
     "idea": "The nature of God: omnipotent, loving and just — and the Trinity",
     "content": "First bullet of 3.1.2.1 Beliefs and teachings, under \"Key beliefs\": \"The nature of God: God as omnipotent, loving and just, and the problem of evil and suffering; the oneness of God and the Trinity: Father, Son and Holy Spirit.\" The problem of evil is put inside the doctrine of God, not in a separate section — the three attributes together are what make evil a problem. The Trinity is stated as oneness and threeness at once: one God, Father, Son and Holy Spirit."
    },
    {
     "code": "3.1.2.1 — Different Christian beliefs about creation including the role of Word and Spirit",
     "q": "How do Christians understand creation, and what parts do the Word and the Spirit play?",
     "idea": "Creation, with the Word and the Spirit (John 1:1-3; Genesis 1:1-3)",
     "content": "\"Different Christian beliefs about creation including the role of Word and Spirit (John 1:1-3 and Genesis 1:1-3).\" Both texts are prescribed and questions may be set on them: Genesis 1:1-3 for the Spirit moving over the waters and God speaking creation into being, John 1:1-3 for the Word who was with God, was God, and through whom all things were made. \"Different Christian beliefs\" is part of the content — literal and non-literal readings of Genesis are both examinable."
    },
    {
     "code": "3.1.2.1 — Different Christian beliefs about the afterlife and their importance",
     "q": "What do Christians believe happens after death?",
     "idea": "Resurrection, judgement, heaven and hell",
     "content": "\"Different Christian beliefs about the afterlife and their importance, including: resurrection and life after death; judgement, heaven and hell.\" Two things are asked — the beliefs and their importance, that is, what difference they make to how a Christian lives now. The plural \"Different Christian beliefs\" again licenses contrast: bodily resurrection against the immortality of the soul, hell as everlasting punishment against hell as separation from God or as a state few or none enter."
    },
    {
     "code": "3.1.2.1 — Jesus Christ and salvation: beliefs and teachings about the incarnation, crucifixion, resurrection, sin and salvation",
     "q": "What did Jesus do, and how does it save?",
     "idea": "Incarnation, cross, resurrection, sin and atonement",
     "content": "The whole of the second heading of 3.1.2.1: \"Beliefs and teachings about: the incarnation and Jesus as the Son of God; the crucifixion, resurrection and ascension; sin, including original sin; the means of salvation, including law, grace and Spirit; the role of Christ in salvation including the idea of atonement.\" Five named topics, each examinable in its own right: God become human; the events of Good Friday, Easter and the Ascension; sin and the original sin inherited from Adam and Eve; the three means of salvation the document names — law, grace and Spirit; and atonement, the reconciling of humanity to God through Christ's death."
    },
    {
     "code": "3.1.2.2 — Different forms of worship and their significance",
     "q": "How do Christians worship, and why in such different ways?",
     "idea": "Liturgical, non-liturgical, informal and private worship",
     "content": "First bullet of 3.1.2.2 Practices, under \"Worship and festivals\": \"Different forms of worship and their significance: liturgical, non-liturgical and informal, including the use of the Bible; private worship.\" Four forms are named and the significance of each is asked for, which makes this the standing source for the 4-mark contrasting question on Practices — a set liturgy with the same words every week against free, spontaneous worship, and public worship against private."
    },
    {
     "code": "3.1.2.2 — Prayer and its significance, including the Lord's Prayer",
     "q": "How and why do Christians pray?",
     "idea": "The Lord's Prayer, set prayers and informal prayer",
     "content": "\"Prayer and its significance, including the Lord's Prayer, set prayers and informal prayer.\" The Lord's Prayer is named, so it can be quoted as the source of wisdom and authority in a 5-mark answer; and the contrast between using words given to you and finding your own is one of the clearest 'contrasting' pairs in the whole religion."
    },
    {
     "code": "3.1.2.2 — The role and meaning of the sacraments",
     "q": "What are the sacraments and what do Christians disagree about in them?",
     "idea": "Sacrament, baptism and Holy Communion/Eucharist",
     "content": "\"The role and meaning of the sacraments: the meaning of sacrament; the sacrament of baptism and its significance for Christians; infant and believers' baptism; different beliefs about infant baptism; the sacrament of Holy Communion/Eucharist and its significance for Christians, including different ways in which it is celebrated and different interpretations of its meaning.\" Divergence is written into the bullet twice — \"different beliefs about infant baptism\" and \"different ways in which it is celebrated and different interpretations of its meaning\" — so a top answer names positions, not just practices."
    },
    {
     "code": "3.1.2.2 — The role and importance of pilgrimage and celebrations",
     "q": "Why do Christians go on pilgrimage and keep Christmas and Easter?",
     "idea": "Lourdes and Iona; Christmas and Easter",
     "content": "\"The role and importance of pilgrimage and celebrations including: two contrasting examples of Christian pilgrimage: Lourdes and Iona; the celebrations of Christmas and Easter, including their importance for Christians in Great Britain today.\" The two places are prescribed and the document itself calls them contrasting — a Marian shrine of healing against a Celtic island of retreat and community — so they are the ready-made answer to a 4-mark contrasting question. The festivals are asked for with their importance in Great Britain today, not merely their stories."
    },
    {
     "code": "3.1.2.2 — The role of the Church in the local community",
     "q": "What does a church actually do where it stands?",
     "idea": "Food banks and street pastors",
     "content": "First bullet under \"The role of the church in the local and worldwide community\": \"The role of the Church in the local community, including food banks and street pastors.\" Both examples are named by the document, so they can be used in an answer without risk, and both are the kind of concrete detail the AO1:2 influence question rewards — what Christians do differently because of what they believe."
    },
    {
     "code": "3.1.2.2 — The place of mission, evangelism and Church growth",
     "q": "Why do Christians try to spread their faith?",
     "idea": "Mission, evangelism and Church growth",
     "content": "\"The place of mission, evangelism and Church growth.\" The three are distinguishable and all examinable: being sent into the world, sharing the good news, and the growth of the Church that follows. The commonest evaluation statement in this area asks whether Christians should try to convert other people, which needs both the teaching that commands it and the objections to it."
    },
    {
     "code": "3.1.2.2 — The importance of the worldwide Church",
     "q": "What does the Church do beyond Britain?",
     "idea": "Reconciliation, persecution and CAFOD, Christian Aid or Tearfund",
     "content": "\"The importance of the worldwide Church including: working for reconciliation; how Christian churches respond to persecution; the work of one of the following: Catholic Agency For Overseas Development (CAFOD), Christian Aid, Tearfund.\" Only one of the three agencies has to be studied, but it must be studied in enough detail to answer \"Explain two ways in which CAFOD or Christian Aid or Tearfund helps the poor\" with a source of Christian teaching attached. Reconciliation and the response to persecution are separate examinable strands, not background."
    }
   ]
  },
  {
   "id": "3.1.3",
   "component": "C1",
   "option": "religions",
   "name": "Catholic Christianity",
   "caseStudies": [
    "Catholic Christian sources of wisdom and authority: \"Students should study the beliefs, teachings and practices of Catholic Christianity specified below and their basis in Catholic Christian sources of wisdom and authority. They should be able to refer to scripture and/or sacred texts where appropriate. Some texts are prescribed for study in the content set out below and questions may be set on them.\"",
    "The Nicene Creed, and the Council of Nicaea — named against the Trinity (3.1.3.1).",
    "Genesis 1 and 2 — \"Biblical accounts of creation (Genesis 1 and 2)\" (3.1.3.1).",
    "The seven sacraments: baptism; confirmation; reconciliation; anointing of the sick; matrimony; holy orders; the eucharist, \"its status as 'the source and summit of Christian life'\" (3.1.3.1).",
    "Prayer as \"'the raising of the mind and heart to God'\"; the Lord's Prayer (3.1.3.2).",
    "Forms of popular piety named: the Rosary and the Stations of the Cross (3.1.3.2).",
    "\"a study of one place of Roman Catholic pilgrimage\" (3.1.3.2).",
    "\"Catholic social teaching including Gaudium et Spes paragraph 26\" (3.1.3.2).",
    "Catholic agencies named: CAFOD, Trocaire, Missio; the Society of Saint Vincent de Paul (SVP); \"either the Corrymeela community or Pax Christi\" (3.1.3.2).",
    "The Christian perspectives the document names here for common and divergent views: \"Orthodox and Protestant\"."
   ],
   "ideas": [
    {
     "code": "3.1.3 — Sources of wisdom and authority, influence, and common and divergent views",
     "q": "What does the specification require of every answer on Catholic Christianity?",
     "idea": "The three standing requirements: sources, influence and divergence",
     "content": "\"Students should be aware that Catholic Christianity is one of the diverse religious traditions and beliefs in Great Britain today and that the main religious tradition in Great Britain is Christianity.\" Beliefs and practices rest on \"their basis in Catholic Christian sources of wisdom and authority\", and students should \"be able to refer to scripture and/or sacred texts where appropriate\". \"Students should study the influence of the beliefs, teachings and practices studied on individuals, communities and societies.\" \"Common and divergent views within Christianity in the way beliefs and teachings are understood and expressed should be included throughout. Students may refer to a range of Christian perspectives in their answers including Orthodox and Protestant. They must study the specific differences identified below.\" Note that this room may not be combined with 3.1.2 Christianity: \"Christianity and Catholic Christianity is a prohibited combination.\""
    },
    {
     "code": "3.1.3.1 — One God as a Trinity of persons: Father, Son and Holy Spirit",
     "q": "How did the Church arrive at the doctrine of the Trinity?",
     "idea": "The Trinity, the Nicene Creed and the Council of Nicaea",
     "content": "\"One God as a Trinity of persons: Father, Son and Holy Spirit, as expressed in the Nicene Creed; the scriptural origins of this belief and its development in the Council of Nicaea.\" Three things are examinable: the doctrine itself, the Creed that states it (which can serve as the source of authority in a 5-mark answer), and the history — scriptural origins worked out and defined at Nicaea. The Catholic room asks for the development of doctrine in a way the Christianity room does not."
    },
    {
     "code": "3.1.3.1 — Creation: Biblical accounts of creation (Genesis 1 and 2)",
     "q": "What do the creation accounts teach Catholics about God and about people?",
     "idea": "Genesis 1 and 2: God, human dignity and creation",
     "content": "\"Creation: Biblical accounts of creation (Genesis 1 and 2) and their significance for an understanding of the nature of God, the dignity of human beings and of humanity's relationship with creation. Different Christian beliefs about creation.\" The accounts are prescribed, and the document names three things they are significant for — the nature of God, human dignity, and humanity's relationship with creation. Human dignity grounded in Genesis is the root of the social teaching later in this room."
    },
    {
     "code": "3.1.3.1 — Incarnation: the belief in Jesus as incarnate Son, divine Word",
     "q": "What does the Church mean by the Incarnation?",
     "idea": "Incarnation: fully God and fully human",
     "content": "\"Incarnation: the belief in Jesus as incarnate Son, divine Word, both fully God and fully human and the scriptural origins of this belief.\" The two natures are stated without qualification — fully God and fully human, not part of each — and the scriptural origins are part of the content, so an answer should be able to point to where the belief comes from as well as state it."
    },
    {
     "code": "3.1.3.1 — Redemption: the significance of the life, death, resurrection and ascension of Jesus",
     "q": "How does Christ's life and death save?",
     "idea": "Redemption, salvation and grace",
     "content": "\"Redemption: the significance of the life, death, resurrection and ascension of Jesus for Catholic beliefs about salvation and grace.\" The four events are taken together as one saving act, and the two doctrines they bear on are named: salvation and grace. The Catholic emphasis on grace — given, not earned, and mediated through the sacraments — links this belief directly to the seven sacraments below."
    },
    {
     "code": "3.1.3.1 — Beliefs about life after death: resurrection, judgement, heaven, hell and purgatory",
     "q": "What do Catholics believe happens after death?",
     "idea": "Resurrection, judgement, heaven, hell and purgatory",
     "content": "\"Beliefs about life after death: resurrection, judgement, heaven, hell and purgatory.\" Purgatory is the distinctively Catholic term in this list and is named by the document, so it is examinable content here in a way it is not in 3.1.2 — a state of purification for those who die in God's grace but are not yet ready for heaven. It supports prayer for the dead and the funeral rite in the Practices section."
    },
    {
     "code": "3.1.3.1 — The meaning and significance of 'sacrament' and the sacramental nature of reality",
     "q": "What is a sacrament?",
     "idea": "Sacrament and the sacramental nature of reality",
     "content": "First bullet under \"The seven sacraments\": \"The meaning and significance of 'sacrament' and the importance of the sacramental nature of reality.\" Two ideas: a sacrament as an outward sign of inward grace, and the wider Catholic conviction that the material world itself can carry and communicate God — which is why water, oil, bread and wine do real work in this tradition."
    },
    {
     "code": "3.1.3.1 — The names, meanings and effects of the seven sacraments",
     "q": "What are the seven sacraments and what does each do?",
     "idea": "The seven sacraments, and the eucharist as source and summit",
     "content": "\"The names, meanings and effects of the seven sacraments: baptism; confirmation; reconciliation; anointing of the sick; matrimony; holy orders; the eucharist: its status as 'the source and summit of Christian life'; different Christian views about its meaning and importance.\" Three things are asked of each — name, meaning and effect. The eucharist is singled out twice: for the quoted phrase 'the source and summit of Christian life', which is ready-made source material, and for the divergence in \"different Christian views about its meaning and importance\"."
    },
    {
     "code": "3.1.3.2 — Prayer: formal prayers and informal prayer, and the Lord's Prayer",
     "q": "How do Catholics pray, and which kind of prayer matters most?",
     "idea": "Prayer as 'the raising of the mind and heart to God'",
     "content": "First bullet of 3.1.3.2 Practices under \"Worship\": \"Prayer: prayer as 'the raising of the mind and heart to God'; formal prayers and informal prayer, including different views about their relative importance; the meaning and importance of the Lord's Prayer.\" The definition is quoted by the document and can be quoted back as a source. \"Different views about their relative importance\" is the built-in contrast, and the Lord's Prayer is asked for by meaning as well as by importance."
    },
    {
     "code": "3.1.3.2 — The role and importance of forms of popular piety",
     "q": "What are the Rosary and the Stations of the Cross for?",
     "idea": "Popular piety: the Rosary and the Stations of the Cross",
     "content": "\"The role and importance of forms of popular piety including the Rosary and the Stations of the Cross.\" Both are named, so both are examinable in detail: the Rosary as meditation on the mysteries of Christ's life told on beads, the Stations as walking the way of the cross in fourteen stages. These are devotions rather than sacraments — a distinction worth making in an evaluation of what matters most in Catholic practice."
    },
    {
     "code": "3.1.3.2 — The role and importance of pilgrimage",
     "q": "Why do Catholics go on pilgrimage, and does it matter?",
     "idea": "Pilgrimage, and one place of Roman Catholic pilgrimage",
     "content": "\"The role and importance of pilgrimage, including a study of one place of Roman Catholic pilgrimage, and different Christian views about the importance of pilgrimage.\" One place must be studied in depth — the document leaves the choice open but requires the study — and the divergence clause invites the Protestant objection that God is equally present everywhere, which is exactly what a 12-mark evaluation on pilgrimage needs."
    },
    {
     "code": "3.1.3.2 — The funeral rite and its significance",
     "q": "What happens at a Catholic funeral and what does it express?",
     "idea": "The funeral rite",
     "content": "\"The funeral rite and its significance.\" A short bullet with a lot inside it: the rite expresses the beliefs about resurrection, judgement and purgatory stated in 3.1.3.1, and prayer for the dead only makes sense given them. Significance, not just description, is what is asked for."
    },
    {
     "code": "3.1.3.2 — Catholic beliefs about the essential duty to 'love our neighbour'",
     "q": "How do Catholics turn love of neighbour into action?",
     "idea": "Catholic social teaching, Gaudium et Spes 26, and the Catholic agencies",
     "content": "First bullet under \"The work of the Church\": \"Catholic beliefs about the essential duty to 'love our neighbour' in concrete ways locally, nationally and globally and how these beliefs are reflected in: Catholic social teaching including Gaudium et Spes paragraph 26; Catholic teaching on justice, peace and reconciliation; The work of Catholic agencies including CAFOD, Trocaire, Missio.\" Gaudium et Spes paragraph 26 is prescribed by paragraph number, so it is a source of authority a student can cite precisely; the three agencies are named by the document; and the duty is specified at three scales — locally, nationally and globally."
    },
    {
     "code": "3.1.3.2 — The meaning and significance of mission and evangelism for Catholics today",
     "q": "What do mission and evangelism mean for Catholics now?",
     "idea": "Mission and evangelism, globally and in Great Britain",
     "content": "\"The meaning and significance of mission and evangelism for Catholics today, globally and in Great Britain, both nationally and locally.\" The document insists on the contemporary and the British framing as well as the global, which matches the specification's opening requirement to \"consider different beliefs and attitudes to religious and non-religious issues in contemporary British society\"."
    },
    {
     "code": "3.1.3.2 — The aims and importance of the Society of Saint Vincent de Paul (SVP)",
     "q": "What is the SVP and why does it matter?",
     "idea": "The Society of Saint Vincent de Paul",
     "content": "\"The aims and importance of the Society of Saint Vincent de Paul (SVP).\" Named in the document and therefore examinable by name: a lay Catholic organisation whose aims and importance both have to be known. It is the local, person-to-person end of the duty to love our neighbour, where CAFOD and Missio are the global end."
    },
    {
     "code": "3.1.3.2 — The aims and importance of either the Corrymeela community or Pax Christi",
     "q": "What does Catholic peace and reconciliation work look like?",
     "idea": "Corrymeela or Pax Christi",
     "content": "\"The aims and importance of either the Corrymeela community or Pax Christi.\" One of the two must be studied, and the document asks for aims and importance, not history. Both carry the teaching on \"justice, peace and reconciliation\" into practice — Corrymeela in reconciliation across the divide in Northern Ireland, Pax Christi as the international Catholic movement for peace."
    }
   ]
  },
  {
   "id": "3.1.4",
   "component": "C1",
   "option": "religions",
   "name": "Hinduism",
   "caseStudies": [
    "Hindu sources of wisdom and authority: \"Students should study the beliefs, teachings and practices of Hinduism specified below and their basis in Hindu sources of wisdom and authority. They should be able to refer to scripture and/or sacred texts where appropriate. Some texts are prescribed for study in the content set out below and questions may be set on them.\"",
    "Brihadaranyaka Upanishad 391 — prescribed against \"Different understandings of the three features of the divine\" (3.1.4.1).",
    "Rig Veda 10.129.6-7 — prescribed against cosmology (3.1.4.1).",
    "Deities and forms named: the Tri-murti — Brahma, Vishnu and Shiva; \"male and female deities, including Ganesha, Lakshmi, Hanuman, Saraswati\"; \"the concept of avatara, including Krishna, Rama\" (3.1.4.1).",
    "Forms of worship named: havan, puja, arati, darshan, bhajan/kirtan, japa/mantra (3.1.4.2).",
    "Festivals named: Diwali; Holi — \"Sacred festivals and their importance for Hindus in Great Britain today, including the origins and meaning of\" (3.1.4.2).",
    "The four paths towards yoga: action (karma yoga), knowledge (jnana yoga), meditation (astanga yoga), devotion (bhakti yoga) (3.1.4.2).",
    "Pilgrimage: \"sacred sites, including Varanasi\"; Kumbh Mela (3.1.4.2).",
    "\"Hindu environmental projects including 'cow protection' and their significance\"; \"Charities that promote well-being, social inclusion and women's rights\" (3.1.4.2).",
    "The Hindu perspectives the document names for common and divergent views: \"Shaivism and Vaishnavism\"."
   ],
   "ideas": [
    {
     "code": "3.1.4 — Sources of wisdom and authority, influence, and common and divergent views within Hinduism",
     "q": "What does the specification require of every answer on Hinduism?",
     "idea": "The three standing requirements: sources, influence and divergence",
     "content": "\"Students should be aware that Hinduism is one of the diverse religious traditions and beliefs in Great Britain today and that the main religious tradition in Great Britain is Christianity.\" Beliefs and practices must rest on \"their basis in Hindu sources of wisdom and authority\", with students \"able to refer to scripture and/or sacred texts where appropriate\" — the Brihadaranyaka Upanishad and Rig Veda references below are prescribed and questions may be set on them. \"Students should study the influence of the beliefs, teachings and practices studied on individuals, communities and societies.\" \"Common and divergent views within Hinduism in the way beliefs and teachings are understood and expressed should be included throughout. Students may refer to a range of different Hindu perspectives in their answers, including Shaivism and Vaishnavism. They must study the specific differences identified below.\""
    },
    {
     "code": "3.1.4.1 — Brahman: different Hindu understandings of brahman",
     "q": "What is brahman, and can God be both formless and personal?",
     "idea": "Brahman: nirguna and saguna",
     "content": "First bullet of 3.1.4.1, under \"Ideas about the nature of God and existence\": \"Brahman: different Hindu understandings of brahman; ultimate reality as divine consciousness (nirguna) and manifestation of God in form (saguna); spiritual worlds.\" The document's own terms are the ones to use: nirguna for ultimate reality as divine consciousness without form, saguna for God manifested in form. Both are affirmed, which is why Hinduism can be described as one and as many at once. \"Spiritual worlds\" belongs to this bullet too."
    },
    {
     "code": "3.1.4.1 — Different understandings of the three features of the divine",
     "q": "Where is the divine to be found?",
     "idea": "Everywhere, within the heart, and beyond as a personal loving God",
     "content": "\"Different understandings of the three features of the divine: everywhere, as non-personal (brahman); within the heart; beyond, as a personal loving God; Brihadaranyaka Upanishad 391.\" Three locations of the divine, each with its own practice: the impersonal reality of everything, the antaryami within, and the personal God who can be loved and served. The Upanishad reference is prescribed and can be cited for the fifth mark of a 5-mark answer."
    },
    {
     "code": "3.1.4.1 — How the divine presents: the Tri-murti, deities and avatara",
     "q": "How does the one divine reality appear in many forms?",
     "idea": "Tri-murti, male and female deities, and avatara",
     "content": "\"How the divine presents: the Tri-murti: Brahma, Vishnu and Shiva; male and female deities, including Ganesha, Lakshmi, Hanuman, Saraswati; the concept of avatara, including Krishna, Rama.\" All the names are the document's own. The Tri-murti gives creation, preservation and destruction; the named deities give the forms most worshipped in Britain; and avatara is the concept of God descending into the world, with Krishna and Rama named as instances."
    },
    {
     "code": "3.1.4.1 — Matter (prakriti); the three qualities (tri-guna); illusion (maya); cosmology",
     "q": "What kind of place is the material world?",
     "idea": "Prakriti, tri-guna, maya and the cycle of four ages",
     "content": "\"Matter (prakriti); the three qualities (tri-guna); illusion (maya); cosmology (Rig Veda 10.129.6-7); the cycle of four ages; many worlds and their diverse inhabitants.\" Rig Veda 10.129.6-7 is prescribed here — the creation hymn that asks who really knows how creation came to be. The bullet packs in the analysis of matter into three qualities, the doctrine that appearances mislead, and a cosmology of vast repeating ages and many inhabited worlds."
    },
    {
     "code": "3.1.4.1 — The concept of atman",
     "q": "What is the self, really?",
     "idea": "Atman: the eternal inner self",
     "content": "First bullet under \"Beliefs about the nature of human life\": \"The concept of atman, as individual, eternal inner self, distinct from material mind and body.\" Three qualifications in one line — individual, eternal, and distinct from mind and body. It is the belief that makes rebirth intelligible and moksha desirable, and it is the sharpest contrast available with the Buddhist anatta."
    },
    {
     "code": "3.1.4.1 — Cycle of birth and death: samsara; the law of karma; moksha",
     "q": "What drives rebirth and how does it end?",
     "idea": "Samsara, karma and moksha",
     "content": "\"Cycle of birth and death: samsara; moral action and reaction: the law of karma; types of liberation: moksha.\" The document's gloss of karma is worth keeping — \"moral action and reaction\" — and it asks for \"types of liberation\" in the plural, so moksha is not a single undifferentiated state. Together these three make the frame within which every Hindu ethical question is argued."
    },
    {
     "code": "3.1.4.1 — Individual free will and responses to suffering; knowledge and ignorance",
     "q": "If karma governs everything, are Hindus free? And why is there suffering?",
     "idea": "Free will, suffering, knowledge and ignorance",
     "content": "\"Individual free will and responses to suffering; knowledge and ignorance.\" A short bullet carrying the whole problem of evil for this room: karma explains suffering as consequence, yet free will must be real for action to be moral, and ignorance (not knowing the atman for what it is) is itself the root condition to be escaped. \"Responses to suffering\" is examinable — what Hindus do about it, not only how they explain it."
    },
    {
     "code": "3.1.4.1 — Personal virtues",
     "q": "What kind of person should a Hindu become?",
     "idea": "Ahimsa, respect, empathy, self-control, humility, love",
     "content": "\"Personal virtues including ahimsa, respect, empathy, mind/sense control, humility, love.\" Six virtues named by the document, with ahimsa (non-violence) first — the one that does most work in the Component 2 themes, from animal experimentation to pacifism to the death penalty. \"Including\" means the list is not closed, but these are the ones questions may be set on."
    },
    {
     "code": "3.1.4.1 — The four aims of human life",
     "q": "What is a human life for?",
     "idea": "Dharma, artha, kama, moksha",
     "content": "\"The four aims of human life: dharma, artha, kama, moksha.\" Duty, prosperity, pleasure and liberation — a scheme that makes wealth and pleasure legitimate goals rather than temptations, provided they are pursued within dharma and subordinated to moksha. It is directly useful in Theme F on the uses of wealth and Theme A on marriage and family."
    },
    {
     "code": "3.1.4.1 — The meaning of dharma; sanatana dharma; varnashrama dharma",
     "q": "What does dharma mean, and does it mean the same for everyone?",
     "idea": "Dharma, sanatana dharma and varnashrama dharma",
     "content": "\"The meaning of dharma; sanatana dharma; varnashrama dharma.\" Three terms, deliberately distinguished: dharma as duty, law and the way things should be; sanatana dharma as the eternal, universal religion Hindus often call their tradition; and varnashrama dharma as the duties particular to a person's varna and stage of life. The last is where Hindu ethics becomes situational rather than uniform."
    },
    {
     "code": "3.1.4.2 — Places of worship and their importance",
     "q": "Where do Hindus worship?",
     "idea": "Home, temple, outdoors and the space of the heart",
     "content": "First bullet of 3.1.4.2 Practices, under \"Worship and festivals\": \"Places of worship and their importance: home; temple; outdoors (such as shrines); the space of the heart.\" Four places, and the fourth is not a building at all — the space of the heart, which is where the 'within the heart' understanding of the divine is worshipped. The importance of each is asked for, so a comparison between home shrine and mandir is standard 4-mark material."
    },
    {
     "code": "3.1.4.2 — Different forms of worship/meditation and their significance",
     "q": "What does Hindu worship actually consist of?",
     "idea": "Havan, puja, arati, darshan, bhajan/kirtan, japa/mantra",
     "content": "\"Different forms of worship/meditation and their significance: havan, puja, arati, darshan, bhajan/kirtan, japa/mantra; key differences in worship in Shaivism and Vaishnavism and different Hindu views about the importance of worship.\" Six named forms, each with its significance; plus two explicit divergences — between Shaivism and Vaishnavism, and over how important worship is at all — which are exactly what the AO1:3 contrasting question wants."
    },
    {
     "code": "3.1.4.2 — Focuses of worship and representations of the divine",
     "q": "What do Hindus worship, and is the murti God?",
     "idea": "One God, many deities, holy places, sacred plants and animals, the murti",
     "content": "\"Focuses of worship and representations of the divine and their importance: one God (personal or non-personal); the many deities, guru and other elders; holy land, hills and rivers; sacred plants and animals; the murti as a representation of God.\" Five focuses. The document's phrasing of the last is careful and should be kept: the murti is \"a representation of God\", which is the answer to the standard evaluation about whether Hindus worship statues."
    },
    {
     "code": "3.1.4.2 — Sacred festivals and their importance for Hindus in Great Britain today",
     "q": "Which festivals do Hindus keep and what do they mean?",
     "idea": "Diwali and Holi",
     "content": "\"Sacred festivals and their importance for Hindus in Great Britain today, including the origins and meaning of: Diwali; Holi.\" Both are named, and for each the origins and the meaning are asked for, framed by their importance in Britain today — so an answer should reach what the festival does for a Hindu community here, not stop at the story behind it."
    },
    {
     "code": "3.1.4.2 — The four paths towards yoga (union with the divine)",
     "q": "How many ways are there to reach union with the divine?",
     "idea": "Karma, jnana, astanga and bhakti yoga",
     "content": "First bullet under \"Lifestyle\": \"The four paths towards yoga (union with the divine), their differences and their importance: action (karma yoga); knowledge (jnana yoga); meditation (astanga yoga); devotion (bhakti yoga).\" The document asks for their differences and their importance, so the four are set up to be compared — and the fact that four different paths lead to one goal is itself the strongest evidence for Hindu inclusivity in an evaluation."
    },
    {
     "code": "3.1.4.2 — Pilgrimage",
     "q": "Why do Hindus go on pilgrimage?",
     "idea": "Sacred sites, Varanasi and the Kumbh Mela",
     "content": "\"Pilgrimage: the role of pilgrimage; practices and purposes; sacred sites, including Varanasi; Kumbh Mela.\" Varanasi and the Kumbh Mela are named by the document, so both can be used as the concrete example an examiner rewards — the city on the Ganges where Hindus come to die and be cremated, and the vast periodic gathering at the river confluences."
    },
    {
     "code": "3.1.4.2 — The work and significance of environmental projects and charities",
     "q": "How does Hindu belief show itself in action?",
     "idea": "Cow protection, environmental projects and charities",
     "content": "\"The work and significance of: Hindu environmental projects including 'cow protection' and their significance; Charities that promote well-being, social inclusion and women's rights.\" Both strands are the document's own, and both are AO1:2 influence material — ahimsa and the sacredness of the cow turning into environmental action, and the aims of social inclusion and women's rights turning into charitable work."
    }
   ]
  },
  {
   "id": "3.1.5",
   "component": "C1",
   "option": "religions",
   "name": "Islam",
   "caseStudies": [
    "Islamic sources of wisdom and authority: \"Students should study the beliefs, teachings and practices of Islam specified below and their basis in Islamic sources of wisdom and authority. They should be able to refer to scripture and other writings where appropriate. Some texts are prescribed for study in the content set out below and questions may be set on them.\"",
    "Qur'an Surah 112 — prescribed against Tawhid, the Oneness of God (3.1.5.1).",
    "Qur'an 96:1-5 — prescribed against Sawm and the Night of Power (3.1.5.2).",
    "The holy books named: \"Qur'an: revelation and authority; the Torah, the Psalms, the Gospel, the Scrolls of Abraham and their authority\" (3.1.5.1).",
    "Prophets named: Adam, Ibrahim and Muhammad; angels named: Jibril and Mika'il (3.1.5.1).",
    "\"Five Pillars of Sunni Islam and the Ten Obligatory Acts of Shi'a Islam (students should study the Five Pillars and jihad in both Sunni and Shi'a Islam and the additional duties of Shi'a Islam)\" (3.1.5.2).",
    "Hajj sites named: \"the Ka'aba at Makkah, Mina, Arafat, Muzdalifah\" (3.1.5.2).",
    "Festivals and commemorations named: Id-ul-Adha, Id-ul-Fitr, Ashura (3.1.5.2).",
    "The Muslim perspectives the document names for common and divergent views: \"those from Sunni and Shi'a Islam\". \"They must study the specific differences identified below.\""
   ],
   "ideas": [
    {
     "code": "3.1.5 — Sources of wisdom and authority, influence, and common and divergent views within Islam",
     "q": "What does the specification require of every answer on Islam?",
     "idea": "The three standing requirements: sources, influence and divergence",
     "content": "\"Students should be aware that Islam is one of the diverse religious traditions and beliefs in Great Britain today and that the main religious tradition in Great Britain is Christianity.\" Beliefs and practices rest on \"their basis in Islamic sources of wisdom and authority\" and students should \"be able to refer to scripture and other writings where appropriate\" — the document's wording here is 'other writings' rather than 'sacred texts', which lets Hadith as well as Qur'an serve as the source in a 5-mark answer. \"Students should study the influence of the beliefs, teachings and practices studied on individuals, communities and societies.\" \"Common and divergent views within Islam … should be included throughout. Students may refer to a range of different Muslim perspectives in their answers, including those from Sunni and Shi'a Islam. They must study the specific differences identified below.\""
    },
    {
     "code": "3.1.5.1 — The six articles of faith in Sunni Islam and five roots of Usul ad-Din in Shi'a Islam",
     "q": "What must a Muslim believe, and do Sunni and Shi'a Muslims list it the same way?",
     "idea": "Six articles of faith and five roots of Usul ad-Din",
     "content": "First bullet of 3.1.5.1 Key Beliefs: \"The six articles of faith in Sunni Islam and five roots of Usul ad-Din in Shi'a Islam, including key similarities and differences.\" The document asks explicitly for \"key similarities and differences\", so this is the room's designated AO1:3 content — the same faith organised into two different lists, with a great deal shared and real differences of emphasis."
    },
    {
     "code": "3.1.5.1 — Tawhid (the Oneness of God), Qur'an Surah 112",
     "q": "What is Tawhid?",
     "idea": "Tawhid: the Oneness of God",
     "content": "\"Tawhid (the Oneness of God), Qur'an Surah 112.\" The central doctrine of Islam, with a prescribed text attached that a student can cite exactly — questions may be set on it. Everything else about God follows from it: no partners, no division, no image, and shirk (associating anything with God) as the gravest wrong."
    },
    {
     "code": "3.1.5.1 — The nature of God: omnipotence, beneficence, mercy, fairness and justice/Adalat",
     "q": "What is God like in Islam?",
     "idea": "God's attributes, and immanence and transcendence",
     "content": "\"The nature of God: omnipotence, beneficence, mercy, fairness and justice/Adalat in Shi'a Islam, including different ideas about God's relationship with the world: immanence and transcendence.\" Five attributes, with Adalat named as the Shi'a term for divine justice; and a built-in contrast over God's relationship with the world — near and involved, or utterly beyond — which is the standing question behind the problem of evil in this room."
    },
    {
     "code": "3.1.5.1 — Angels, their nature and role",
     "q": "What are angels and what do they do?",
     "idea": "Angels, including Jibril and Mika'il",
     "content": "\"Angels, their nature and role, including Jibril and Mika'il.\" Two angels are named: Jibril, through whom the Qur'an was revealed, and Mika'il. The bullet asks for nature as well as role — beings created from light, without free will, who carry out God's commands — and belief in them is one of the six articles of faith."
    },
    {
     "code": "3.1.5.1 — Predestination and human freedom and its relationship to the Day of Judgement",
     "q": "If God has decreed everything, how can anyone be judged?",
     "idea": "Predestination, free will and the Day of Judgement",
     "content": "\"Predestination and human freedom and its relationship to the Day of Judgement.\" The document ties the three together deliberately: al-Qadr is an article of faith, yet judgement presupposes responsibility. The relationship between them — not each on its own — is what the content asks for, and it is fertile ground for a 12-mark evaluation."
    },
    {
     "code": "3.1.5.1 — Akhirah (life after death), human responsibility and accountability",
     "q": "What happens after death in Islam?",
     "idea": "Akhirah: resurrection, heaven and hell",
     "content": "\"Akhirah (life after death), human responsibility and accountability, resurrection, heaven and hell.\" The bullet names the belief and its moral point in one line: because there is a resurrection and a judgement, every person is responsible and accountable now. Akhirah is the term to use, and it is one of the six articles of faith."
    },
    {
     "code": "3.1.5.1 — Risalah (Prophethood)",
     "q": "Why does Islam need prophets?",
     "idea": "Risalah: Adam, Ibrahim and Muhammad",
     "content": "First bullet under \"Authority\": \"Risalah (Prophethood) including the role and importance of Adam, Ibrahim and Muhammad.\" Three prophets are named and both the role and the importance of each is asked for: Adam as the first man and first prophet, Ibrahim as the model of submission whose actions are re-enacted at Hajj and at Id-ul-Adha, and Muhammad as the Seal of the Prophets through whom the Qur'an was revealed."
    },
    {
     "code": "3.1.5.1 — The holy books",
     "q": "Which books do Muslims accept, and what authority does each have?",
     "idea": "Qur'an, Torah, Psalms, Gospel and the Scrolls of Abraham",
     "content": "\"The holy books: Qur'an: revelation and authority; the Torah, the Psalms, the Gospel, the Scrolls of Abraham and their authority.\" The Qur'an is asked for under two headings — how it was revealed and what authority it carries — and the four earlier scriptures are named and their authority is examinable too, which is the basis for Muslim views of Jews and Christians as People of the Book."
    },
    {
     "code": "3.1.5.1 — The imamate in Shi'a Islam: its role and significance",
     "q": "What is the imamate and why does it divide Sunni and Shi'a Muslims?",
     "idea": "The imamate in Shi'a Islam",
     "content": "\"The imamate in Shi'a Islam: its role and significance.\" One of the \"specific differences\" the document requires, and the deepest of them: divinely appointed leadership of the community descending from the Prophet's family, against the Sunni account of the caliphate. Role and significance are both asked for."
    },
    {
     "code": "3.1.5.2 — Five Pillars of Sunni Islam and the Ten Obligatory Acts of Shi'a Islam",
     "q": "What must a Muslim do, and how do Sunni and Shi'a lists differ?",
     "idea": "The Five Pillars and the Ten Obligatory Acts",
     "content": "First bullet of 3.1.5.2 Practices, under \"Worship\": \"Five Pillars of Sunni Islam and the Ten Obligatory Acts of Shi'a Islam (students should study the Five Pillars and jihad in both Sunni and Shi'a Islam and the additional duties of Shi'a Islam).\" The bracket is an instruction, not a gloss: the Five Pillars and jihad must be studied in both traditions, and the additional Shi'a duties as well. This bullet frames the six that follow it."
    },
    {
     "code": "3.1.5.2 — Shahadah: declaration of faith and its place in Muslim practice",
     "q": "What is the Shahadah and where does it appear in a Muslim life?",
     "idea": "Shahadah: the declaration of faith",
     "content": "\"Shahadah: declaration of faith and its place in Muslim practice.\" The first Pillar, and the document asks not just what it says but its place in practice — recited in the call to prayer and in salah, spoken at conversion, whispered to a newborn and hoped for as the last words before death. Shi'a Muslims add a third clause about Ali."
    },
    {
     "code": "3.1.5.2 — Salah and its significance",
     "q": "How and why do Muslims pray?",
     "idea": "Salah: times, wudu, rak'ahs, mosque and Jummah",
     "content": "\"Salah and its significance: how and why Muslims pray including times, directions, ablution (wudu), movements (rak'ahs) and recitations; salah in the home and mosque and elsewhere; Friday prayer: Jummah; key differences in the practice of salah in Sunni and Shi'a Islam, and different Muslim views about the importance of prayer.\" The longest bullet in the room, and it names its own divergences twice — Sunni and Shi'a practice, and disagreement over importance — so it is prime 4-mark contrasting material as well as 5-mark explanation."
    },
    {
     "code": "3.1.5.2 — Sawm: the role and significance of fasting during the month of Ramadan",
     "q": "Why do Muslims fast, and who is excused?",
     "idea": "Sawm, Ramadan and the Night of Power (Qur'an 96:1-5)",
     "content": "First bullet under \"Duties and festivals\": \"Sawm: the role and significance of fasting during the month of Ramadan including origins, duties, benefits of fasting, the exceptions and their reasons, and the Night of Power, Qur'an 96:1-5.\" Five things are named as examinable — origins, duties, benefits, the exceptions with their reasons, and Laylat al-Qadr — and Qur'an 96:1-5, the first revelation, is prescribed and can be cited for the source mark."
    },
    {
     "code": "3.1.5.2 — Zakah: the role and significance of giving alms",
     "q": "Why must Muslims give, and to whom?",
     "idea": "Zakah, and Khums in Shi'a Islam",
     "content": "\"Zakah: the role and significance of giving alms including origins, how and why it is given, benefits of receipt, Khums in Shi'a Islam.\" Note \"benefits of receipt\" — the document asks about the effect on the recipient, not only the giver. Khums, the additional Shi'a payment of a fifth, is one of the \"additional duties of Shi'a Islam\" the Pillars bullet requires."
    },
    {
     "code": "3.1.5.2 — Hajj: the role and significance of the pilgrimage to Makkah",
     "q": "What happens on Hajj and what does each action mean?",
     "idea": "Hajj: the Ka'aba, Mina, Arafat and Muzdalifah",
     "content": "\"Hajj: the role and significance of the pilgrimage to Makkah including origins, how hajj is performed, the actions pilgrims perform at sites including the Ka'aba at Makkah, Mina, Arafat, Muzdalifah and their significance.\" Four sites are named by the document and the significance of the actions at each is examinable — so an answer needs the meaning of standing at Arafat or stoning at Mina, not just the itinerary."
    },
    {
     "code": "3.1.5.2 — Jihad: different understandings of jihad",
     "q": "What does jihad mean, and when may lesser jihad be declared?",
     "idea": "Greater and lesser jihad",
     "content": "\"Jihad: different understandings of jihad: the meaning and significance of greater and lesser jihad; origins, influence and conditions for the declaration of lesser jihad.\" The document puts \"different understandings\" first, and asks specifically for the conditions under which lesser jihad may be declared — which is what allows a student to argue against the equation of jihad with terrorism in Theme D. The Pillars bullet requires jihad to be studied in both Sunni and Shi'a Islam."
    },
    {
     "code": "3.1.5.2 — Festivals and commemorations and their importance for Muslims in Great Britain today",
     "q": "Which days do Muslims mark and why?",
     "idea": "Id-ul-Adha, Id-ul-Fitr and Ashura",
     "content": "\"Festivals and commemorations and their importance for Muslims in Great Britain today, including the origins and meanings of Id-ul-Adha, Id-ul-Fitr, Ashura.\" Three are named, with origins and meanings asked for, framed by importance in Britain today. Ashura is itself a point of divergence — marked very differently by Sunni and Shi'a Muslims — which the room's 'specific differences' requirement makes examinable."
    }
   ]
  },
  {
   "id": "3.1.6",
   "component": "C1",
   "option": "religions",
   "name": "Judaism",
   "caseStudies": [
    "Jewish sources of wisdom and authority: \"Students should study the beliefs, teachings and practices of Judaism specified below and their basis in Jewish sources of wisdom and authority. They should be able to refer to scripture and/or sacred texts where appropriate. Some texts are prescribed for study in the content set out below and questions may be set on them.\"",
    "Genesis 12:1-3 — prescribed against \"The promised land and the Covenant with Abraham\" (3.1.6.1).",
    "Exodus 20:1-17 — prescribed against \"The Covenant at Sinai … the role of Moses and the Ten Commandments\" (3.1.6.1).",
    "\"Tenakh (the written law) and Talmud (the oral law), and their study, use and significance in daily life\" (3.1.6.2).",
    "\"the concept of 'saving a life' (Pikuach Nefesh)\"; \"the 613 mitzvot\" (3.1.6.1).",
    "Features of the synagogue named: \"bimah (reading platform), aron hakodesh (ark), ner tamid (ever burning light)\" (3.1.6.2).",
    "\"the significance of prayer, including the Amidah, the standing prayer\" (3.1.6.2).",
    "Rituals named: \"ceremonies associated with birth including Brit Milah\"; \"Bar and Bat Mitzvah\"; \"the marriage ceremony\"; \"mourning rituals\" (3.1.6.2).",
    "Dietary law terms named: \"kosher and trefah\"; \"separation of milk and meat\" (3.1.6.2).",
    "Festivals named: \"Rosh Hashanah and Yom Kippur\"; \"Pesach\" (3.1.6.2).",
    "The Jewish perspectives the document names for common and divergent views: \"Orthodox, Reform and Liberal Judaism\"."
   ],
   "ideas": [
    {
     "code": "3.1.6 — Sources of wisdom and authority, influence, and common and divergent views within Judaism",
     "q": "What does the specification require of every answer on Judaism?",
     "idea": "The three standing requirements: sources, influence and divergence",
     "content": "\"Students should be aware that Judaism is one of the diverse religious traditions and beliefs in Great Britain today and that the main religious tradition in Great Britain is Christianity.\" Beliefs and practices rest on \"their basis in Jewish sources of wisdom and authority\", with students \"able to refer to scripture and/or sacred texts where appropriate\" — Genesis 12:1-3 and Exodus 20:1-17 are prescribed below and questions may be set on them. \"Students should study the influence of the beliefs, teachings and practices studied on individuals, communities and societies.\" \"Common and divergent views within Judaism … should be included throughout. Students may refer to a range of different Jewish perspectives in their answers, for example, Orthodox, Reform and Liberal Judaism. They must study the specific differences identified below.\""
    },
    {
     "code": "3.1.6.1 — The nature of God: God as one, as Creator, as Law-Giver and Judge",
     "q": "What do Jews believe God is like?",
     "idea": "God as one, Creator, Law-Giver, Judge, loving and merciful",
     "content": "First bullet of 3.1.6.1 Key beliefs: \"The nature of God: God as one; God as Creator; God as Law-Giver and Judge, loving and merciful.\" Four descriptions in one bullet, and the last pairs judgement with love and mercy deliberately — the God who gives the law and judges by it is the same God who is merciful, which is the tension the High Holy Days are built on."
    },
    {
     "code": "3.1.6.1 — The divine presence (Shekhinah)",
     "q": "What do Jews mean by the divine presence?",
     "idea": "Shekhinah",
     "content": "\"The divine presence (Shekhinah).\" God's presence dwelling with the people — in the Tabernacle and Temple, and wherever Jews gather to pray or study. It is the belief that makes a synagogue more than a meeting hall and gives the ner tamid its meaning, and it sits alongside the conviction that God cannot be contained or represented."
    },
    {
     "code": "3.1.6.1 — Beliefs about life after death, including judgement and resurrection",
     "q": "What do Jews believe happens after death?",
     "idea": "Life after death, judgement and resurrection",
     "content": "\"Beliefs about life after death, including judgement and resurrection.\" Judaism is less specified here than Christianity or Islam, and that itself is examinable: the emphasis falls on this life and on the keeping of the mitzvot, while beliefs about what follows range from bodily resurrection in the messianic age to a reticence about detail. Orthodox, Reform and Liberal positions differ, which is the contrast the room's divergence requirement expects."
    },
    {
     "code": "3.1.6.1 — The nature and role of the Messiah",
     "q": "Who or what is the Messiah?",
     "idea": "The Messiah: different views on the role and importance",
     "content": "\"The nature and role of the Messiah, including different views on the role and importance of the Messiah.\" Divergence is written into the bullet: a personal Messiah of the line of David who will come and gather the exiles, against a messianic age brought about by human effort and the keeping of the mitzvot; and the question of how central the belief is at all, which Orthodox and Reform Jews answer differently."
    },
    {
     "code": "3.1.6.1 — The promised land and the Covenant with Abraham, Genesis 12:1-3",
     "q": "What did God promise Abraham?",
     "idea": "The Covenant with Abraham and the promised land",
     "content": "First bullet under \"The Covenant and the mitzvot\": \"The promised land and the Covenant with Abraham, Genesis 12:1-3.\" The text is prescribed, so it can be quoted for the source mark: God's call to Abraham, the promise of a great nation, a land, and blessing for all the families of the earth. The covenant is the beginning of Jewish identity as a people, and circumcision is its sign."
    },
    {
     "code": "3.1.6.1 — The Covenant at Sinai and its importance, Exodus 20:1-17",
     "q": "What happened at Sinai and what did it establish?",
     "idea": "Sinai, Moses and the Ten Commandments",
     "content": "\"The Covenant at Sinai and its importance including the role of Moses and the Ten Commandments, Exodus 20:1-17.\" Prescribed text again, and three examinable elements — the covenant itself, Moses' role in mediating it, and the Ten Commandments as its terms. The importance, not just the narrative, is what the bullet asks for: a people bound to God by law."
    },
    {
     "code": "3.1.6.1 — Key moral principles",
     "q": "What are the great moral principles of Judaism?",
     "idea": "Justice, healing the world, charity and kindness",
     "content": "\"Key moral principles including justice, healing the world, charity and kindness to others.\" Four are named, and the document's English phrases stand for the Hebrew terms behind them — tzedek, tikkun olam, tzedakah and gemilut hasadim. They are the natural material for every Component 2 theme a Jewish answer touches, from wealth and poverty to crime and punishment."
    },
    {
     "code": "3.1.6.1 — The importance of the sanctity of human life, including Pikuach Nefesh",
     "q": "How far does the duty to save a life go?",
     "idea": "Sanctity of life and Pikuach Nefesh",
     "content": "\"The importance of the sanctity of human life, including the concept of 'saving a life' (Pikuach Nefesh).\" The principle that saving a life overrides almost every other commandment — including Shabbat observance — which makes it the sharpest tool a Jewish answer has in Theme B on abortion and euthanasia and in Theme D on war."
    },
    {
     "code": "3.1.6.1 — The relationship between free will and the 613 mitzvot",
     "q": "If God commands 613 things, where is human freedom?",
     "idea": "Free will and the 613 mitzvot",
     "content": "\"The relationship between free will and the 613 mitzvot.\" The bullet asks for the relationship, not the list: the commandments are given, but keeping them is chosen, and the choice is what makes obedience meaningful. Orthodox and Reform Jews differ over how far the 613 bind today, which is examinable divergence."
    },
    {
     "code": "3.1.6.1 — Mitzvot between man and God and mitzvot between man and man",
     "q": "How are the commandments divided, and does one kind matter more?",
     "idea": "Mitzvot bein adam laMakom and bein adam lachavero",
     "content": "\"Mitzvot between man and God and mitzvot between man and man, including the difference between them and their importance.\" Both the difference and the importance are asked for — ritual duties owed to God against ethical duties owed to other people — and the question of which matters more is a standing 12-mark evaluation in this room."
    },
    {
     "code": "3.1.6.2 — The synagogue and its importance",
     "q": "What is a synagogue for?",
     "idea": "The synagogue",
     "content": "First bullet of 3.1.6.2 Practices, under \"The synagogue and worship\": \"The synagogue and its importance.\" House of prayer, house of study and house of assembly in one — the bullet asks for importance, which means what the building does for the community rather than what it contains (the features are the next bullet)."
    },
    {
     "code": "3.1.6.2 — The design and religious features of synagogues",
     "q": "What is inside a synagogue and why?",
     "idea": "Bimah, aron hakodesh, ner tamid; Orthodox and Reform differences",
     "content": "\"The design and religious features of synagogues including bimah (reading platform), aron hakodesh (ark), ner tamid (ever burning light) and associated practices; differences between Orthodox and Reform synagogues.\" The three features are named with the document's own glosses, \"and associated practices\" makes the use of each examinable, and the Orthodox/Reform difference — seating, language, the role of women, musical instruments — is specified content, ready for a 4-mark contrasting question."
    },
    {
     "code": "3.1.6.2 — Public acts of worship",
     "q": "What happens at a synagogue service?",
     "idea": "Services in Orthodox and Reform synagogues; the Amidah",
     "content": "\"Public acts of worship including: synagogue services in both Orthodox and Reform synagogues; the significance of prayer, including the Amidah, the standing prayer.\" Both traditions' services must be known, and the Amidah is named with its English description — the standing prayer — so it can serve as the named source of practice in a 5-mark answer."
    },
    {
     "code": "3.1.6.2 — Shabbat in the home and synagogue and its significance",
     "q": "How is Shabbat kept and what does it mean?",
     "idea": "Shabbat at home and in the synagogue",
     "content": "\"Shabbat in the home and synagogue and its significance.\" Two settings, deliberately paired: candles, kiddush, challot and the family meal on one side, the service and the reading of the Torah on the other. Its significance rests on the fourth commandment and on God's rest at creation, and Pikuach Nefesh is the standing exception to its rules."
    },
    {
     "code": "3.1.6.2 — Worship in the home and private prayer",
     "q": "How do Jews worship outside the synagogue?",
     "idea": "The home and private prayer",
     "content": "\"Worship in the home and private prayer.\" The document gives the home its own bullet, separate from Shabbat: the mezuzah on the doorpost, daily prayer, blessings over food, and the teaching of children. The contrast between public and private, communal and domestic worship is available here for the 4-mark question."
    },
    {
     "code": "3.1.6.2 — Tenakh and Talmud, and their study, use and significance in daily life",
     "q": "What are the written and the oral law, and how are they used?",
     "idea": "Tenakh (the written law) and Talmud (the oral law)",
     "content": "\"Tenakh (the written law) and Talmud (the oral law), and their study, use and significance in daily life.\" The document's own glosses fix the terms. Three things are asked — study, use, and significance in daily life — so this is where a student learns that study is itself an act of worship in Judaism, and where the sources for every other answer in this room come from."
    },
    {
     "code": "3.1.6.2 — Rituals and their significance",
     "q": "How does Judaism mark the stages of a life?",
     "idea": "Brit Milah, Bar and Bat Mitzvah, marriage and mourning",
     "content": "First bullet under \"Family life and festivals\": \"Rituals and their significance: ceremonies associated with birth including Brit Milah; Bar and Bat Mitzvah; the marriage ceremony; mourning rituals.\" Four life-cycle rituals, all named, and significance is asked for in each case — Brit Milah as the sign of the covenant with Abraham, Bar and Bat Mitzvah as taking on the mitzvot, the marriage ceremony under the chuppah, and the staged mourning that follows a death."
    },
    {
     "code": "3.1.6.2 — Dietary laws and their significance",
     "q": "What are the dietary laws and how far do Jews agree about them?",
     "idea": "Kosher and trefah; the separation of milk and meat",
     "content": "\"Dietary laws and their significance, including different Jewish views about their importance: kosher and trefah; separation of milk and meat.\" The divergence clause is in the bullet itself — Orthodox, Reform and Liberal Jews differ over how binding kashrut is today — so the 4-mark contrasting question and the 12-mark evaluation are both set up by the specification here."
    },
    {
     "code": "3.1.6.2 — Festivals and their importance for Jews in Great Britain today",
     "q": "Which festivals do Jews keep and what do they mean?",
     "idea": "Rosh Hashanah and Yom Kippur; Pesach",
     "content": "\"Festivals and their importance for Jews in Great Britain today, including the origins and meaning of: Rosh Hashanah and Yom Kippur; Pesach.\" Three festivals grouped into two bullets, with origins and meaning asked for and importance framed in Britain today. The High Holy Days carry judgement, repentance and atonement; Pesach carries the Exodus, the covenant and freedom, retold at the seder."
    }
   ]
  },
  {
   "id": "3.1.7",
   "component": "C1",
   "option": "religions",
   "name": "Sikhism",
   "caseStudies": [
    "Sikh sources of wisdom and authority: \"Students should study the beliefs, teachings and practices of Sikhism specified below and their basis in Sikh sources of wisdom and authority. They should be able to refer to scripture and/or sacred texts as appropriate. Some texts are prescribed for study in the content set out below and questions may be set on them.\"",
    "Guru Granth Sahib (GGS) 1a — prescribed against the Mool Mantra (3.1.7.1).",
    "GGS 305:4 — prescribed against \"The role of prayer in the home\" (3.1.7.2).",
    "The Guru Granth Sahib itself, and \"the stories of the lives of Gurus, including Guru Nanak and Guru Gobind Singh\" (3.1.7.1).",
    "Gurdwara features named: \"design, furniture, and artefacts … including the palki and takht\" (3.1.7.2).",
    "Practices named: akhand path; langar; nam japna; sewa as physical (tan), mental (man) and material (dhan) (3.1.7.1–2).",
    "Festivals named: \"Vaisakhi (Baisakhi); Divali; Gurpurbs, including Guru Nanak's birthday and differences in the way gurpurbs are celebrated in India and Great Britain\" (3.1.7.2).",
    "\"Sikh historical gurdwaras, including the Golden Temple (Harimandir Sahib) in Amritsar\" (3.1.7.2).",
    "\"The initiation ceremony (Amrit Sanskar), including the meaning and importance of the Khalsa and the five Ks\"; \"the names Singh and Kaur\" (3.1.7.2).",
    "The Sikh perspectives the document names for common and divergent views: \"the perspective of sahajdhari and amritdhari Sikhs and the different emphases in different texts\"."
   ],
   "ideas": [
    {
     "code": "3.1.7 — Sources of wisdom and authority, influence, and common and divergent views within Sikhism",
     "q": "What does the specification require of every answer on Sikhism?",
     "idea": "The three standing requirements: sources, influence and divergence",
     "content": "\"Students should be aware that Sikhism is one of the diverse religious traditions and beliefs in Great Britain today and that the main religious tradition in Great Britain is Christianity.\" Beliefs and practices rest on \"their basis in Sikh sources of wisdom and authority\", with students \"able to refer to scripture and/or sacred texts as appropriate\" — GGS 1a and GGS 305:4 are prescribed below and questions may be set on them. \"Students should study the influence of the beliefs, teachings and practices studied on individuals, communities and societies.\" \"Common and divergent views within Sikhism … should be included throughout. Students may refer to a range of Sikh perspectives in their answers, for example to the perspective of sahajdhari and amritdhari Sikhs and the different emphases in different texts. They must study the specific differences identified below.\""
    },
    {
     "code": "3.1.7.1 — The nature of God as expressed in the Mool Mantra",
     "q": "What does the Mool Mantra say about God?",
     "idea": "The Mool Mantra (GGS 1a)",
     "content": "First bullet of 3.1.7.1 Key beliefs: \"The nature of God as expressed in the Mool Mantra: the content and significance of the Mool Mantra, Guru Granth Sahib (GGS) 1a.\" Both the content and the significance are examinable, and the reference is prescribed to the page — GGS 1a — so it is the most quotable source in the room: the opening statement of the Guru Granth Sahib, declaring one God, the eternal truth, creator, without fear or hatred, beyond time, unborn, self-existent, known by the Guru's grace."
    },
    {
     "code": "3.1.7.1 — God as Creator",
     "q": "How is God related to the universe?",
     "idea": "God in and through the universe, and beyond it",
     "content": "\"God as Creator, including different aspects of God's relationship with creation: God shown in and through the universe; God as separate from the universe.\" Two aspects held together — immanence and transcendence in the document's own plainer words — and the bullet asks for both, which is why Sikh answers can speak of seeing God in creation and of God being beyond all form at the same time."
    },
    {
     "code": "3.1.7.1 — The nature of human life as an opportunity to unite with God",
     "q": "What is human life for, and what virtues does it need?",
     "idea": "Human life as the chance to unite with God; the Sikh virtues",
     "content": "\"The nature of human life as an opportunity to unite with God, including the development of Sikh virtues such as wisdom, truthful living, justice, temperance, self-control, patience, courage, humility, contentment.\" Nine virtues are named by the document. The framing matters: human birth is the opportunity, not a punishment, and the virtues are what is developed within it."
    },
    {
     "code": "3.1.7.1 — Beliefs in karma and rebirth, and the aim of mukti",
     "q": "What is liberation in Sikhism?",
     "idea": "Karma, rebirth and mukti",
     "content": "\"Beliefs in karma and rebirth, and the aim of mukti; the meaning of mukti, including the different aspects of mukti – positive and negative.\" The document asks for the meaning of mukti and for its positive and negative aspects — release from the cycle of rebirth on one hand, union with God on the other — so a bare definition will not reach the second mark of a 5-mark answer."
    },
    {
     "code": "3.1.7.1 — The five stages of liberation (five khands) and barriers to mukti",
     "q": "What stands between a Sikh and liberation?",
     "idea": "The five khands and the five barriers",
     "content": "\"The five stages of liberation (five khands) and barriers to mukti (illusion, self-centredness, lust, anger, greed, worldly attachment, pride).\" The document lists the barriers by name, so they are examinable individually as well as together; the five khands are the stages of the journey through which a soul passes towards union with God."
    },
    {
     "code": "3.1.7.1 — The importance of being gurmukh rather than manmukh",
     "q": "What is the difference between a God-centred and a self-centred life?",
     "idea": "Gurmukh, manmukh and haumai",
     "content": "\"The importance of being gurmukh (God-centred) rather than manmukh (man-centred) and the elimination of pride or ego (haumai).\" The document supplies the translations. This is the pivot of Sikh ethics: everything that is wrong is traced to haumai, and every practice — nam japna, sewa, langar — is a way of dismantling it."
    },
    {
     "code": "3.1.7.1 — Belief in the oneness of humanity and in the equality of all",
     "q": "How far does Sikh equality go?",
     "idea": "The oneness of humanity and the equality of women with men",
     "content": "First bullet under \"Beliefs about the nature of human life\": \"Belief in the oneness of humanity and in the equality of all, including complete equality of women with men.\" The document's word is \"complete\", and it is the one to quote in Theme F on the status of women in religion — a religion whose scripture and founding practice put equality at the centre rather than at the margin."
    },
    {
     "code": "3.1.7.1 — The expression of the equality of all",
     "q": "Where is Sikh equality actually visible?",
     "idea": "In the lives of the Gurus, in the Guru Granth Sahib, and in Sikhism today",
     "content": "\"The expression of the equality of all in: the stories of the lives of Gurus, including Guru Nanak and Guru Gobind Singh; the Guru Granth Sahib; in Sikhism today.\" Three places to look, all examinable: the Gurus' own acts (Guru Nanak's rejection of caste distinction, Guru Gobind Singh's founding of the Khalsa), the scripture itself — which contains the writings of Hindus and Muslims as well as Sikhs — and present-day practice in the gurdwara and langar."
    },
    {
     "code": "3.1.7.1 — Sewa: the importance and priority of service to others",
     "q": "What is sewa and what forms does it take?",
     "idea": "Sewa: tan, man and dhan",
     "content": "\"Sewa: the importance and priority of service to others, including physical (tan), mental (man) and material (dhan).\" Three forms, each named with its Punjabi term: giving labour, giving thought and skill, and giving wealth. The document says \"importance and priority\", which is strong wording — service is not an optional extra to Sikh practice, and langar is its standing demonstration."
    },
    {
     "code": "3.1.7.1 — The role and importance of the sangat (religious community)",
     "q": "Why does a Sikh need the community?",
     "idea": "The sangat",
     "content": "\"The role and importance of the sangat (religious community).\" The congregation gathered in the presence of the Guru Granth Sahib: it is where kirtan is sung, where langar is eaten together regardless of status, and where decisions are taken. Role and importance are both asked for."
    },
    {
     "code": "3.1.7.2 — Religious features of the gurdwara",
     "q": "What is in a gurdwara and what is it for?",
     "idea": "Design, furniture and artefacts: the palki and the takht",
     "content": "First bullet of 3.1.7.2 Practices, under \"Worship and service\": \"Religious features of the gurdwara: design, furniture, and artefacts; the practices associated with these features and their importance, including the palki and takht.\" Two features are named — the palki, the canopied structure over the scripture, and the takht, the throne on which it rests — and \"the practices associated with these features\" makes the treatment of the Guru Granth Sahib as a living Guru examinable, not just the furniture."
    },
    {
     "code": "3.1.7.2 — The role of the gurdwara within the Sikh community",
     "q": "What does a gurdwara do for Sikhs in Britain?",
     "idea": "The gurdwara in the community",
     "content": "\"The role of the gurdwara within the Sikh community.\" A separate bullet from the features: worship, langar, education, welcome to anyone who comes, and a centre for a community's life — the social and communal role, which is where the AO1:2 influence question lands."
    },
    {
     "code": "3.1.7.2 — The role of prayer in the home, GGS 305:4",
     "q": "How do Sikhs pray at home?",
     "idea": "Prayer in the home (GGS 305:4)",
     "content": "\"The role of prayer in the home, GGS 305:4.\" A prescribed reference, and questions may be set on it: it describes the discipline of the gursikh who rises in the early hours and meditates on the Lord's name. Daily prayer at home — morning, evening and before sleep — is the everyday counterpart to congregational worship in the gurdwara."
    },
    {
     "code": "3.1.7.2 — The role and importance of the akhand path",
     "q": "What is the akhand path?",
     "idea": "Akhand path: the continuous reading",
     "content": "\"The role and importance of the akhand path.\" The unbroken reading of the whole Guru Granth Sahib, taking about forty-eight hours and shared between readers, held at festivals and at the great moments of family life. Role and importance are both asked for, and it demonstrates the status of the scripture as the living Guru more forcefully than any statement about it."
    },
    {
     "code": "3.1.7.2 — The meaning and significance of langar as an expression of sewa",
     "q": "Why is langar so important?",
     "idea": "Langar: the free kitchen",
     "content": "\"The meaning and significance of langar as an expression of sewa.\" The document ties it to sewa explicitly. The free kitchen attached to every gurdwara, where anyone may eat, sitting together on the floor — it enacts the equality of all and the priority of service in a single practice, which is why it appears in evaluations about whether belief or action matters more."
    },
    {
     "code": "3.1.7.2 — The significance of meditating on the name of God (nam japna)",
     "q": "What is nam japna and where does it belong?",
     "idea": "Nam japna in daily life and in the gurdwara",
     "content": "\"The significance of meditating on the name of God (nam japna) in daily life and in the gurdwara.\" One of the three daily duties of a Sikh, alongside kirat karna and vand chhakna, and the direct remedy for haumai. The document asks for it in both settings — private and congregational."
    },
    {
     "code": "3.1.7.2 — Festivals and their importance for Sikhs in Great Britain today",
     "q": "Which festivals do Sikhs keep and how are they celebrated here?",
     "idea": "Vaisakhi, Divali and the gurpurbs",
     "content": "First bullet under \"Festivals and lifestyle\": \"Festivals and their importance for Sikhs in Great Britain today, including the origins and significance of the following: Vaisakhi (Baisakhi); Divali; Gurpurbs, including Guru Nanak's birthday and differences in the way gurpurbs are celebrated in India and Great Britain.\" Origins and significance are asked for in each case, and the document specifies a comparison — how gurpurbs are kept in India against how they are kept in Britain — which is ready-made 4-mark contrasting material."
    },
    {
     "code": "3.1.7.2 — The importance of visiting Sikh historical gurdwaras",
     "q": "Do Sikhs go on pilgrimage?",
     "idea": "Historical gurdwaras and the Golden Temple (Harimandir Sahib)",
     "content": "\"The importance of visiting Sikh historical gurdwaras, including the Golden Temple (Harimandir Sahib) in Amritsar.\" The document names the place and gives both its names. The importance is the question — Sikhism does not require pilgrimage, and Guru Nanak taught that God is not found in particular places, so the visit is valued without being obligatory, which makes it a good 12-mark evaluation."
    },
    {
     "code": "3.1.7.2 — Birth and naming ceremonies including their meaning and significance",
     "q": "How is a Sikh child welcomed and named?",
     "idea": "Birth and naming ceremonies",
     "content": "\"Birth and naming ceremonies including their meaning and significance.\" The child is brought to the gurdwara, amrit is prepared, the Guru Granth Sahib is opened at random and the first letter of the first word of the hymn gives the initial of the child's name — the scripture itself naming the child. Meaning and significance are both required."
    },
    {
     "code": "3.1.7.2 — The initiation ceremony (Amrit Sanskar)",
     "q": "What does it mean to take amrit?",
     "idea": "Amrit Sanskar, the Khalsa and the five Ks",
     "content": "\"The initiation ceremony (Amrit Sanskar), including the meaning and importance of the Khalsa and the five Ks, and the different perspectives of sahajdhari and amritdhari Sikhs.\" Three strands in one bullet: the ceremony, the Khalsa founded by Guru Gobind Singh with the five Ks its members wear, and the specified divergence between amritdhari Sikhs who have been initiated and sahajdhari Sikhs who have not — the room's clearest contrasting pair."
    },
    {
     "code": "3.1.7.2 — The significance and use of the names Singh and Kaur",
     "q": "Why do Sikhs take the names Singh and Kaur?",
     "idea": "Singh and Kaur",
     "content": "\"The significance and use of the names Singh and Kaur.\" Lion and princess, taken by Sikhs at initiation in place of family names that carried caste — so the names themselves express the equality of all and the equality of women with men that the Key beliefs section insists on. Significance and use are both examinable."
    }
   ]
  },
  {
   "id": "3.2.1.1",
   "component": "C2",
   "option": "themes",
   "name": "Theme A: Relationships and families",
   "caseStudies": [
    "The three prescribed contrasting issues: \"They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: • Contraception. • Sexual relationships before marriage. • Homosexual relationships.\"",
    "Sources of wisdom and authority a student may cite (3.2.1): \"the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib\". \"As part of the supporting material for this specification, AQA will publish a list of appropriate texts; alternatives may be used and no questions will be set on them.\"",
    "\"Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse.\" \"Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\" (3.2.1)"
   ],
   "ideas": [
    {
     "code": "3.2.1.1 — The theme's own requirement: religious teachings, contrasting perspectives, and the three prescribed issues",
     "q": "What must every answer on this theme be able to do, whatever the question asks?",
     "idea": "Teachings, arguments, contrasting perspectives — and the three named issues",
     "content": "\"Students should study religious teachings, and religious, philosophical and ethical arguments, relating to the issues that follow, and their impact and influence in the modern world. They should be aware of contrasting perspectives in contemporary British society on all of these issues. They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: Contraception; Sexual relationships before marriage; Homosexual relationships.\" Those three are the ones a 4-mark contrasting question is most likely to name, and the rubric is fixed: Christianity plus at least one other religious tradition. Section 3.2.1 governs all six religious, philosophical and ethical studies themes: \"Students should be aware of different religious perspectives on the issues studied within and / or between religious and non-religious beliefs such as atheism and humanism. Students must also study religious, philosophical and ethical arguments related to the issues raised, and their impact and influence on the modern world. Students will be expected to show their understanding of religion through the application of teachings from religion and beliefs. They will also be expected to make specific references to sources of wisdom and authority including scripture and/or sacred texts. They may refer to any relevant religious text such as the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib. … Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse. Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\""
    },
    {
     "code": "3.2.1.1 Sex, marriage and divorce — Human sexuality including: heterosexual and homosexual relationships",
     "q": "What do religions teach about human sexuality?",
     "idea": "Heterosexual and homosexual relationships",
     "content": "First bullet under \"Sex, marriage and divorce\": \"Human sexuality including: heterosexual and homosexual relationships.\" Homosexual relationships are also one of the three prescribed contrasting issues, so both the teachings and the range of views within each religion must be known — traditional teaching that sexual relationships belong in heterosexual marriage, and the positions of those within the same religions who accept same-sex relationships, together with the ethical and philosophical arguments on each side."
    },
    {
     "code": "3.2.1.1 Sex, marriage and divorce — Sexual relationships before and outside of marriage",
     "q": "What do religions teach about sex before and outside marriage?",
     "idea": "Sex before and outside marriage",
     "content": "\"Sexual relationships before and outside of marriage.\" The document distinguishes the two: sex before marriage, one of the three prescribed contrasting issues, and adultery, on which religious teaching is far more uniformly negative. An answer needs the teachings, the reasons behind them (chastity, the purposes of marriage, promises made), and the contrasting perspectives in contemporary British society the theme requires."
    },
    {
     "code": "3.2.1.1 Sex, marriage and divorce — Contraception and family planning",
     "q": "May religious believers use contraception?",
     "idea": "Contraception and family planning",
     "content": "\"Contraception and family planning.\" One of the three prescribed contrasting issues, so it must be arguable with reference to Christianity and one or more other religious traditions — and the sharpest contrasts run inside Christianity as much as between religions, between those who hold that procreation may not be deliberately prevented and those who accept planning within marriage as responsible."
    },
    {
     "code": "3.2.1.1 Sex, marriage and divorce — The nature and purpose of marriage",
     "q": "What is marriage for?",
     "idea": "The nature and purpose of marriage",
     "content": "\"The nature and purpose of marriage.\" The foundation the rest of the section argues from: the purposes religions give marriage — lifelong union, procreation, the raising of children, mutual support and companionship — and its status, whether as a covenant, a sacrament, a contract or a social institution. Whatever a religion says about divorce, cohabitation or same-sex marriage follows from what it says here."
    },
    {
     "code": "3.2.1.1 Sex, marriage and divorce — Same-sex marriage and cohabitation",
     "q": "What do religions say about same-sex marriage and about living together?",
     "idea": "Same-sex marriage and cohabitation",
     "content": "\"Same-sex marriage and cohabitation.\" Two contemporary British issues in one bullet, both requiring \"contrasting perspectives in contemporary British society\": the legal availability of same-sex marriage alongside religious bodies that will and will not conduct it, and cohabitation as the commonest alternative to marriage. The contrast within Christianity here is as important as the contrast between religions."
    },
    {
     "code": "3.2.1.1 Sex, marriage and divorce — Divorce, including reasons for divorce, and remarrying",
     "q": "When, if ever, may a marriage end?",
     "idea": "Divorce and remarriage",
     "content": "\"Divorce, including reasons for divorce, and remarrying.\" Three things are named: divorce itself, the reasons for it, and remarriage — which several traditions treat as a separate question from divorce. Positions range from marriage as indissoluble, through annulment, to religious divorce procedures that regulate rather than forbid it."
    },
    {
     "code": "3.2.1.1 Sex, marriage and divorce — Ethical arguments related to divorce",
     "q": "How is divorce argued about ethically?",
     "idea": "The sanctity of marriage vows against compassion",
     "content": "\"Ethical arguments related to divorce, including those based on the sanctity of marriage vows and compassion.\" The document names the two arguments, and they are a matched pair — promises made before God that were meant to be permanent, against compassion for people trapped in a marriage that has failed or become abusive. A 12-mark evaluation on divorce is largely the weighing of these two."
    },
    {
     "code": "3.2.1.1 Families and gender equality — The nature of families",
     "q": "What counts as a family?",
     "idea": "Parents and children; extended and nuclear families",
     "content": "First bullet under \"Families and gender equality\": \"The nature of families, including: the role of parents and children; extended families and the nuclear family.\" Two strands: what each member of a family owes the others — the duties of parents to raise and of children to honour — and the forms a family takes, with religious communities in Britain often keeping extended-family patterns where the wider society has moved to the nuclear family."
    },
    {
     "code": "3.2.1.1 Families and gender equality — The purpose of families",
     "q": "What are families for?",
     "idea": "Procreation, stability and protection, and educating children in a faith",
     "content": "\"The purpose of families, including: procreation; stability and the protection of children; educating children in a faith.\" Three purposes, all named by the document. The third is the one that makes the family a religious institution rather than a social one: it is where the faith is passed on, which is why religions care about the form the family takes."
    },
    {
     "code": "3.2.1.1 Families and gender equality — Contemporary family issues",
     "q": "How do religions respond to families that are not the traditional model?",
     "idea": "Same-sex parents and polygamy",
     "content": "\"Contemporary family issues including: same-sex parents; polygamy.\" Both are named by the document and both require contrasting perspectives — same-sex parenting, on which religious opinion is divided within as well as between traditions, and polygamy, permitted under conditions in some traditions and rejected in others, and not lawful in Britain."
    },
    {
     "code": "3.2.1.1 Families and gender equality — The roles of men and women",
     "q": "Do men and women have different roles in religious teaching?",
     "idea": "The roles of men and women",
     "content": "\"The roles of men and women.\" Distinguished by the document from gender equality in the next bullet: the question here is whether different roles are taught — in the home, in worship and in leadership — and whether different roles amount to unequal worth. Several traditions argue that they do not; others reject role differentiation altogether."
    },
    {
     "code": "3.2.1.1 Families and gender equality — Gender equality",
     "q": "What do religions teach about the equality of men and women?",
     "idea": "Gender equality",
     "content": "\"Gender equality.\" The principle itself, and its grounds: creation in the image of God, the complete equality of women with men taught in the Guru Granth Sahib, the equal capacity of women and men to practise and attain in Buddhism. An answer should be able to set the teaching of equality against the practices that have sat alongside it, which is exactly what a 12-mark evaluation on this theme usually asks."
    },
    {
     "code": "3.2.1.1 Families and gender equality — Gender prejudice and discrimination, including examples",
     "q": "Where does gender prejudice show itself, and how do religions respond?",
     "idea": "Gender prejudice and discrimination",
     "content": "\"Gender prejudice and discrimination, including examples.\" The document requires examples, so a prepared answer carries concrete ones — pay and promotion, access to education, the ordination or leadership of women, expectations in the home. The distinction between prejudice (an attitude) and discrimination (an act) is worth making, and it recurs in Theme F."
    }
   ]
  },
  {
   "id": "3.2.1.2",
   "component": "C2",
   "option": "themes",
   "name": "Theme B: Religion and life",
   "caseStudies": [
    "The three prescribed contrasting issues: \"They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: • Abortion. • Euthanasia. • Animal experimentation.\"",
    "Scientific views the document names: \"the Big Bang theory\" (origins of the universe) and \"evolution\" (origins of life).",
    "Religious teachings the document names about the environment: \"stewardship, dominion, responsibility, awe and wonder\".",
    "Sources of wisdom and authority a student may cite (3.2.1): \"the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib\". \"As part of the supporting material for this specification, AQA will publish a list of appropriate texts; alternatives may be used and no questions will be set on them.\"",
    "\"Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse.\" \"Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\" (3.2.1)"
   ],
   "ideas": [
    {
     "code": "3.2.1.2 — The theme's own requirement: religious teachings, contrasting perspectives, and the three prescribed issues",
     "q": "What must every answer on this theme be able to do?",
     "idea": "Teachings, arguments, contrasting perspectives — and the three named issues",
     "content": "\"Students should study religious teachings, and religious, philosophical and ethical arguments, relating to the issues that follow, and their impact and influence in the modern world. They should be aware of contrasting perspectives in contemporary British society on all of these issues. They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: Abortion; Euthanasia; Animal experimentation.\" Section 3.2.1 governs all six religious, philosophical and ethical studies themes: \"Students should be aware of different religious perspectives on the issues studied within and / or between religious and non-religious beliefs such as atheism and humanism. Students must also study religious, philosophical and ethical arguments related to the issues raised, and their impact and influence on the modern world. Students will be expected to show their understanding of religion through the application of teachings from religion and beliefs. They will also be expected to make specific references to sources of wisdom and authority including scripture and/or sacred texts. They may refer to any relevant religious text such as the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib. … Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse. Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\""
    },
    {
     "code": "3.2.1.2 The origins and value of the universe — The origins of the universe",
     "q": "Where did the universe come from, and do science and religion disagree?",
     "idea": "Religious teachings about origins, and the Big Bang",
     "content": "\"The origins of the universe, including: religious teachings about the origins of the universe, and different interpretations of these; the relationship between scientific views, such as the Big Bang theory, and religious views.\" Two examinable strands: the teachings themselves with \"different interpretations\" of them — literal, symbolic, and everything between — and the relationship with science, which may be conflict, independence or complement. The Big Bang is the document's named example."
    },
    {
     "code": "3.2.1.2 The origins and value of the universe — The value of the world and the duty to protect it",
     "q": "Why should religious believers care for the world?",
     "idea": "Stewardship, dominion, responsibility, awe and wonder",
     "content": "\"The value of the world and the duty of human beings to protect it, including religious teaching about stewardship, dominion, responsibility, awe and wonder.\" Five terms are named. Stewardship and dominion are the pair to argue with: dominion read as rule has been blamed for exploitation, while stewardship reads the same texts as a trust to be answered for. Awe and wonder supply a non-utilitarian reason for valuing creation at all."
    },
    {
     "code": "3.2.1.2 The origins and value of the universe — The use and abuse of the environment",
     "q": "What counts as abusing the environment?",
     "idea": "Natural resources and pollution",
     "content": "\"The use and abuse of the environment, including the use of natural resources, pollution.\" The document's framing is 'use and abuse' — using the world is not itself the problem, so the question is where use becomes abuse. Both named examples should be argued with religious teaching applied: the depletion of finite resources, and pollution of air, land and water."
    },
    {
     "code": "3.2.1.2 The origins and value of the universe — The use and abuse of animals",
     "q": "How should animals be treated?",
     "idea": "Animal experimentation and the use of animals for food",
     "content": "\"The use and abuse of animals, including: animal experimentation; the use of animals for food.\" Animal experimentation is one of the three prescribed contrasting issues, so contrasting beliefs on it must be arguable with reference to Christianity and one or more other traditions — human benefit and human stewardship on one side, ahimsa, compassion and the avoidance of unnecessary suffering on the other. The use of animals for food brings in vegetarianism and the religious rules for slaughter."
    },
    {
     "code": "3.2.1.2 The origins and value of human life — The origins of life",
     "q": "Where did human life come from, and how does evolution bear on that?",
     "idea": "Religious teachings about the origins of human life, and evolution",
     "content": "First bullet under \"The origins and value of human life\": \"The origins of life, including: religious teachings about the origins of human life, and different interpretations of these; the relationship between scientific views, such as evolution, and religious views.\" The same structure as the origins of the universe, with evolution as the named scientific view — and the same range of positions, from rejection of evolution to the view that it is the means by which God created."
    },
    {
     "code": "3.2.1.2 The origins and value of human life — The concepts of sanctity of life and the quality of life",
     "q": "What makes a human life valuable?",
     "idea": "Sanctity of life against quality of life",
     "content": "\"The concepts of sanctity of life and the quality of life.\" The pivot of the whole second half of this theme. Sanctity of life holds that human life is God-given and therefore inviolable whatever its condition; quality of life judges by what the life is actually like. Both the abortion and the euthanasia bullets below turn on which of the two is given priority, and the document names both as ethical arguments again under abortion."
    },
    {
     "code": "3.2.1.2 The origins and value of human life — Abortion, including situations when the mother's life is at risk",
     "q": "When, if ever, is abortion acceptable?",
     "idea": "Abortion",
     "content": "\"Abortion, including situations when the mother's life is at risk.\" One of the three prescribed contrasting issues. The document singles out the hard case — risk to the mother's life — because it is where traditions that oppose abortion in general make distinctions, whether by the doctrine of double effect or by ruling that the mother's life takes precedence. An answer needs when life is held to begin, as well as the teachings themselves."
    },
    {
     "code": "3.2.1.2 The origins and value of human life — Ethical arguments related to abortion",
     "q": "How is abortion argued about ethically?",
     "idea": "Sanctity of life against quality of life, applied to abortion",
     "content": "\"Ethical arguments related to abortion, including those based on the sanctity of life and quality of life.\" The document names the two arguments it wants: the sanctity of life from conception, and the quality of the life the child and the mother would have. A Level 4 evaluation weighs them against each other rather than listing what each religion says."
    },
    {
     "code": "3.2.1.2 The origins and value of human life — Euthanasia",
     "q": "Should a person be helped to die?",
     "idea": "Euthanasia",
     "content": "\"Euthanasia.\" One of the three prescribed contrasting issues, and the counterpart to abortion at the other end of life. The same sanctity of life and quality of life arguments apply, along with the questions of autonomy, suffering, the role of doctors and the availability of palliative care, and the legal position in Britain, which contrasting perspectives in contemporary British society requires."
    },
    {
     "code": "3.2.1.2 The origins and value of human life — Beliefs about death and an afterlife",
     "q": "Does what you believe about death change what you think life is worth?",
     "idea": "Death, the afterlife, and the value of human life",
     "content": "\"Beliefs about death and an afterlife, and their impact on beliefs about the value of human life.\" The document asks for the impact, not just the beliefs — which cuts both ways in argument: a life that continues after death may make this life less absolute, or an afterlife in which one is judged for what was done here may make it far more serious. It links this theme directly to the afterlife content of every religion room."
    }
   ]
  },
  {
   "id": "3.2.1.3",
   "component": "C2",
   "option": "themes",
   "name": "Theme C: The existence of God and revelation",
   "caseStudies": [
    "The three prescribed contrasting issues, and note the second tradition required here is non-religious: \"They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and non-religious beliefs such as atheism and humanism: • Visions. • Miracles. • Nature as general revelation.\"",
    "\"one example of a miracle\" and \"one example of a vision\" — the document requires a named example of each (3.2.1.3).",
    "The arguments named: the Design argument; the First Cause argument; the argument from miracles; evil and suffering as an argument against the existence of God; arguments based on science against the existence of God.",
    "Sources of wisdom and authority a student may cite (3.2.1): \"the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib\". \"As part of the supporting material for this specification, AQA will publish a list of appropriate texts; alternatives may be used and no questions will be set on them.\"",
    "\"Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse.\" \"Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\" (3.2.1)"
   ],
   "ideas": [
    {
     "code": "3.2.1.3 — The theme's own requirement: religious and philosophical arguments, and the three prescribed issues",
     "q": "What must every answer on this theme be able to do?",
     "idea": "Teachings, philosophical arguments, and Christianity set against atheism and humanism",
     "content": "\"Students should study religious teachings, and religious and philosophical arguments, relating to the issues that follow, and their impact and influence in the modern world. They should be aware of contrasting perspectives in contemporary British society on all of these issues. They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and non-religious beliefs such as atheism and humanism: Visions; Miracles; Nature as general revelation.\" This theme is the one where the document names 'ethical' nowhere and names atheism and humanism as the required contrast instead of a second religion — so the contrasting question here is Christianity against the non-religious view. Section 3.2.1 governs all six religious, philosophical and ethical studies themes: \"Students should be aware of different religious perspectives on the issues studied within and / or between religious and non-religious beliefs such as atheism and humanism. Students must also study religious, philosophical and ethical arguments related to the issues raised, and their impact and influence on the modern world. Students will be expected to show their understanding of religion through the application of teachings from religion and beliefs. They will also be expected to make specific references to sources of wisdom and authority including scripture and/or sacred texts. They may refer to any relevant religious text such as the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib. … Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse. Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\""
    },
    {
     "code": "3.2.1.3 Philosophical arguments for and against the existence of God — The Design argument",
     "q": "Does the order of the universe point to a designer?",
     "idea": "The Design argument and its strengths and weaknesses",
     "content": "\"The Design argument, including its strengths and weaknesses.\" Both are required by the document, so an answer that only states the argument cannot reach the top marks. The argument moves from apparent order, purpose and fine-tuning in the natural world to a designer; the standard weaknesses are evolution as an alternative explanation, the poor quality of some 'design', and the gap between a designer and the God of a religion."
    },
    {
     "code": "3.2.1.3 Philosophical arguments for and against the existence of God — The First Cause argument",
     "q": "Must something have started the universe off?",
     "idea": "The First Cause argument and its strengths and weaknesses",
     "content": "\"The First Cause argument, including its strengths and weaknesses.\" Everything that exists has a cause; the chain cannot go back for ever; therefore there is a first, uncaused cause, which is God. Strengths and weaknesses are both required: it takes seriously the question why anything exists at all, but it can be met with the objection that it exempts God from the very rule it relies on, or that the Big Bang needs no personal cause."
    },
    {
     "code": "3.2.1.3 Philosophical arguments for and against the existence of God — The argument from miracles",
     "q": "Do miracles prove that God exists?",
     "idea": "The argument from miracles, and one example of a miracle",
     "content": "\"The argument from miracles, including its strengths and weaknesses, and one example of a miracle.\" The document requires a named example, so one must be prepared in detail. Miracles are also one of the three prescribed contrasting issues on which Christian belief must be set against atheist and humanist views — coincidence, misreporting, or a natural explanation not yet known."
    },
    {
     "code": "3.2.1.3 Philosophical arguments for and against the existence of God — Evil and suffering as an argument against the existence of God",
     "q": "Does suffering count against God's existence?",
     "idea": "The problem of evil and suffering",
     "content": "\"Evil and suffering as an argument against the existence of God.\" The strongest argument on the atheist side and the one every religion room has a response to: an all-powerful, all-loving God would prevent suffering; suffering exists; so such a God does not. The replies — free will, soul-making, a test, a limit on what we can see — belong here as much as the argument does."
    },
    {
     "code": "3.2.1.3 Philosophical arguments for and against the existence of God — Arguments based on science against the existence of God",
     "q": "Has science made God unnecessary?",
     "idea": "Scientific arguments against the existence of God",
     "content": "\"Arguments based on science against the existence of God.\" The claim that natural explanations — the Big Bang, evolution, neuroscience — now do the work God was once invoked to do, and that religious claims are unverifiable. The counter-arguments (that science answers 'how' and not 'why', that many scientists are believers) are part of the contrasting perspectives the theme requires."
    },
    {
     "code": "3.2.1.3 The nature of the divine and revelation — Special revelation",
     "q": "Can God be known through direct experience?",
     "idea": "Special revelation, visions, and one example of a vision",
     "content": "First bullet under \"The nature of the divine and revelation\": \"Special revelation as a source of knowledge about the divine (God, gods or ultimate reality) including visions and one example of a vision.\" The document requires one named example. Note its careful phrase \"God, gods or ultimate reality\" — the theme is not written for monotheism alone. Visions are one of the three prescribed contrasting issues."
    },
    {
     "code": "3.2.1.3 The nature of the divine and revelation — Enlightenment as a source of knowledge about the divine",
     "q": "Is enlightenment a kind of revelation?",
     "idea": "Enlightenment",
     "content": "\"Enlightenment as a source of knowledge about the divine.\" Given its own bullet by the document, alongside special and general revelation: knowledge reached through insight and practice rather than given from outside, as in the Buddha's Enlightenment. It stretches the word 'revelation' and is the obvious material for arguing that not all religions locate knowledge of the ultimate in the same place."
    },
    {
     "code": "3.2.1.3 The nature of the divine and revelation — General revelation: nature and scripture",
     "q": "Can God be known through the world and through scripture?",
     "idea": "General revelation: nature and scripture",
     "content": "\"General revelation: nature and scripture as a way of understanding the divine.\" Available to everyone rather than given to individuals. Nature as general revelation is one of the three prescribed contrasting issues — the sense of awe at the natural world read as evidence of God against the humanist view that wonder needs no such explanation."
    },
    {
     "code": "3.2.1.3 The nature of the divine and revelation — Different ideas about the divine that come from these sources",
     "q": "What picture of God do these sources produce?",
     "idea": "Omnipotent and omniscient; personal and impersonal; immanent and transcendent",
     "content": "\"Different ideas about the divine that come from these sources: omnipotent and omniscient; personal and impersonal; immanent and transcendent.\" Three matched pairs of terms that recur in every religion room and should be used precisely: all-powerful and all-knowing; a God who can be addressed against an ultimate reality that cannot; and God present within the world against God beyond it."
    },
    {
     "code": "3.2.1.3 The nature of the divine and revelation — The value of general and special revelation and enlightenment",
     "q": "How reliable are religious experiences as evidence?",
     "idea": "The value of revelation, and the objections to it",
     "content": "\"The value of general and special revelation and enlightenment as sources of knowledge about the divine, including: the problems of different ideas about the divine arising from these experiences; alternative explanations for the experiences, and the possibility that the people who claimed to have them were lying or mistaken.\" The document writes the objections into the content: revelations conflict with each other, and the witness may have been lying or mistaken. This is the bullet that makes a genuinely two-sided 12-mark answer possible on any revelation question."
    }
   ]
  },
  {
   "id": "3.2.1.4",
   "component": "C2",
   "option": "themes",
   "name": "Theme D: Religion, peace and conflict",
   "caseStudies": [
    "The three prescribed contrasting issues: \"They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: • Violence. • Weapons of mass destruction. • Pacifism.\"",
    "\"the work of individuals influenced by religious teaching\" — required under religion and peace-making in the contemporary world (3.2.1.4).",
    "\"the work of one present day religious organisation\" — required under religious responses to the victims of war (3.2.1.4).",
    "\"The just war theory, including the criteria for a just war\"; \"Holy war\"; \"Nuclear weapons, including nuclear deterrence\" (3.2.1.4).",
    "Sources of wisdom and authority a student may cite (3.2.1): \"the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib\". \"As part of the supporting material for this specification, AQA will publish a list of appropriate texts; alternatives may be used and no questions will be set on them.\"",
    "\"Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\" (3.2.1)"
   ],
   "ideas": [
    {
     "code": "3.2.1.4 — The theme's own requirement: religious teachings, contrasting perspectives, and the three prescribed issues",
     "q": "What must every answer on this theme be able to do?",
     "idea": "Teachings, arguments, contrasting perspectives — and the three named issues",
     "content": "\"Students should study religious teachings, and religious, philosophical and ethical arguments, relating to the issues that follow, and their impact and influence in the modern world. They should be aware of contrasting perspectives in contemporary British society on all of these issues. They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: Violence; Weapons of mass destruction; Pacifism.\" Section 3.2.1 governs all six religious, philosophical and ethical studies themes: \"Students should be aware of different religious perspectives on the issues studied within and / or between religious and non-religious beliefs such as atheism and humanism. Students must also study religious, philosophical and ethical arguments related to the issues raised, and their impact and influence on the modern world. … They will also be expected to make specific references to sources of wisdom and authority including scripture and/or sacred texts. … Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse.\""
    },
    {
     "code": "3.2.1.4 Religion, violence, terrorism and war — The meaning and significance of peace, justice, forgiveness and reconciliation",
     "q": "What do the key words of this theme actually mean?",
     "idea": "Peace, justice, forgiveness and reconciliation",
     "content": "First bullet of the theme's content: \"The meaning and significance of: peace; justice; forgiveness; reconciliation.\" Four terms, and both meaning and significance are required for each. They are not synonyms: peace may be the absence of war or a positive condition of right relations; justice may demand what forgiveness sets aside; reconciliation is the repair of a relationship that justice alone does not achieve. Every evaluation in this theme is argued with these four."
    },
    {
     "code": "3.2.1.4 Religion, violence, terrorism and war — Violence, including violent protest",
     "q": "Is violence ever justified in a cause?",
     "idea": "Violence and violent protest",
     "content": "\"Violence, including violent protest.\" Violence is one of the three prescribed contrasting issues. Violent protest is the specified sub-case: whether a religious believer may use force against an unjust law or regime, which sets teachings of non-violence against the duty to resist injustice, and connects to the 'opposition to an unjust law' reason for crime in Theme E."
    },
    {
     "code": "3.2.1.4 Religion, violence, terrorism and war — Terrorism",
     "q": "How do religions respond to terrorism?",
     "idea": "Terrorism",
     "content": "\"Terrorism.\" Given its own bullet. Two things are needed: religious teaching condemning the killing of the innocent and the coercion of a population by fear, and the ability to distinguish terrorism from concepts it is often confused with — in particular jihad, whose greater and lesser forms and conditions for declaration are specified content in the Islam room."
    },
    {
     "code": "3.2.1.4 Religion, violence, terrorism and war — Reasons for war",
     "q": "Why do wars happen?",
     "idea": "Greed, self-defence and retaliation",
     "content": "\"Reasons for war, including greed, self-defence and retaliation.\" Three reasons are named, and they differ morally: greed is condemned by every tradition, self-defence is the one reason most traditions allow, and retaliation sits between the two — which is exactly the distinction the just war criteria are built to make."
    },
    {
     "code": "3.2.1.4 Religion, violence, terrorism and war — The just war theory",
     "q": "When may a war be fought justly?",
     "idea": "Just war theory and the criteria for a just war",
     "content": "\"The just war theory, including the criteria for a just war.\" The criteria are required by name, so they must be known as a list that can be applied — just cause, lawful authority, right intention, last resort, reasonable chance of success, proportionality, and the sparing of civilians. It is the standard framework for arguing against weapons of mass destruction, since indiscriminate weapons fail the criteria directly."
    },
    {
     "code": "3.2.1.4 Religion, violence, terrorism and war — Holy war",
     "q": "What is a holy war and do religions still teach it?",
     "idea": "Holy war",
     "content": "\"Holy war.\" A war fought for religious reasons, or believed to be commanded or sanctioned by God — distinguished in the document from both just war and terrorism. An answer needs the historical instances, the conditions traditions attach to it, and the strong contemporary view within those same traditions that it cannot be justified now."
    },
    {
     "code": "3.2.1.4 Religion, violence, terrorism and war — Pacifism",
     "q": "Is it always wrong to fight?",
     "idea": "Pacifism",
     "content": "\"Pacifism.\" One of the three prescribed contrasting issues, so contrasting beliefs on it must be arguable with reference to Christianity and one or more other traditions — absolute pacifism, the Quaker and Buddhist positions, ahimsa, and conscientious objection on one side, against the just war tradition and the duty to protect the innocent on the other."
    },
    {
     "code": "3.2.1.4 Religion and belief in 21st century conflict — Religion and belief as a cause of war and violence",
     "q": "Does religion cause war?",
     "idea": "Religion as a cause of war and violence in the contemporary world",
     "content": "First bullet under \"Religion and belief in 21st century conflict\": \"Religion and belief as a cause of war and violence in the contemporary world.\" The document puts the charge directly, and it is one of the commonest 12-mark statements in this theme. A Level 4 answer handles both sides: conflicts in which religion is genuinely the driver, and the argument that religion is used as a banner for political, ethnic or economic causes."
    },
    {
     "code": "3.2.1.4 Religion and belief in 21st century conflict — Nuclear weapons, including nuclear deterrence",
     "q": "Can holding nuclear weapons be justified?",
     "idea": "Nuclear weapons and deterrence",
     "content": "\"Nuclear weapons, including nuclear deterrence.\" Deterrence is named separately because it is a distinct argument: possessing the weapons in order never to use them, which some religious authorities have accepted conditionally and others reject as threatening what it would be wrong to do. It is a live issue in British politics, which suits the theme's demand for contrasting perspectives in contemporary British society."
    },
    {
     "code": "3.2.1.4 Religion and belief in 21st century conflict — The use of weapons of mass destruction",
     "q": "Could weapons of mass destruction ever be used justly?",
     "idea": "Weapons of mass destruction",
     "content": "\"The use of weapons of mass destruction.\" One of the three prescribed contrasting issues, and distinguished by the document from mere possession in the previous bullet. Chemical, biological and nuclear weapons cannot discriminate between combatants and civilians, so they fail the just war criteria — the most direct route from religious teaching to a conclusion anywhere in this theme."
    },
    {
     "code": "3.2.1.4 Religion and belief in 21st century conflict — Religion and peace-making in the contemporary world",
     "q": "What does religious peace-making look like?",
     "idea": "Peace-making, and the work of individuals influenced by religious teaching",
     "content": "\"Religion and peace-making in the contemporary world including the work of individuals influenced by religious teaching.\" The document requires the work of named individuals, so specific people and what they actually did must be prepared — that concrete detail is what turns a simple explanation into the 'detailed explanation' the 4- and 5-mark grids reward."
    },
    {
     "code": "3.2.1.4 Religion and belief in 21st century conflict — Religious responses to the victims of war",
     "q": "What do religions do for those harmed by war?",
     "idea": "Victims of war, and the work of one present day religious organisation",
     "content": "\"Religious responses to the victims of war including the work of one present day religious organisation.\" One organisation must be studied — present day, not historical — in enough detail to explain two ways in which it helps, with a source of religious teaching attached for the fifth mark of a 5-mark question."
    }
   ]
  },
  {
   "id": "3.2.1.5",
   "component": "C2",
   "option": "themes",
   "name": "Theme E: Religion, crime and punishment",
   "caseStudies": [
    "The three prescribed contrasting issues: \"They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: • Corporal punishment. • Death penalty. • Forgiveness.\"",
    "The aims of punishment named: retribution; deterrence; reformation (3.2.1.5).",
    "The treatments named: prison; corporal punishment; community service (3.2.1.5).",
    "The reasons for crime named: \"poverty and upbringing; mental illness and addiction; greed and hate; opposition to an unjust law\" (3.2.1.5).",
    "The types of crime named: \"hate crimes, theft and murder\" (3.2.1.5).",
    "The ethical arguments named on the death penalty: \"the principle of utility and sanctity of life\" (3.2.1.5).",
    "Sources of wisdom and authority a student may cite (3.2.1): \"the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib\". \"As part of the supporting material for this specification, AQA will publish a list of appropriate texts; alternatives may be used and no questions will be set on them.\"",
    "\"Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\" (3.2.1)"
   ],
   "ideas": [
    {
     "code": "3.2.1.5 — The theme's own requirement: religious teachings, contrasting perspectives, and the three prescribed issues",
     "q": "What must every answer on this theme be able to do?",
     "idea": "Teachings, arguments, contrasting perspectives — and the three named issues",
     "content": "\"Students should study religious teachings, and religious, philosophical and ethical arguments, relating to the issues that follow, and their impact and influence in the modern world. They should be aware of contrasting perspectives in contemporary British society on all of these issues. They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: Corporal punishment; Death penalty; Forgiveness.\" Section 3.2.1 governs all six religious, philosophical and ethical studies themes: \"Students should be aware of different religious perspectives on the issues studied within and / or between religious and non-religious beliefs such as atheism and humanism. Students must also study religious, philosophical and ethical arguments related to the issues raised, and their impact and influence on the modern world. … They will also be expected to make specific references to sources of wisdom and authority including scripture and/or sacred texts. … Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse.\""
    },
    {
     "code": "3.2.1.5 Religion, crime and the causes of crime — Good and evil intentions and actions",
     "q": "Can it ever be good to cause suffering?",
     "idea": "Good and evil intentions and actions",
     "content": "First bullet of the theme: \"Good and evil intentions and actions, including whether it can ever be good to cause suffering.\" The document puts the hard question inside the bullet. It is the philosophical foundation of the theme: whether an action is judged by its intention or its consequences decides how punishment itself is justified, since all punishment causes suffering deliberately."
    },
    {
     "code": "3.2.1.5 Religion, crime and the causes of crime — Reasons for crime",
     "q": "Why do people commit crime?",
     "idea": "Poverty, upbringing, mental illness, addiction, greed, hate, unjust law",
     "content": "\"Reasons for crime, including: poverty and upbringing; mental illness and addiction; greed and hate; opposition to an unjust law.\" Four pairs, named by the document and morally quite different from one another — which is the point of the next bullet. Religions that teach a duty to tackle poverty have a stake in the first; the last raises whether breaking a law can be right."
    },
    {
     "code": "3.2.1.5 Religion, crime and the causes of crime — Views about people who break the law for these reasons",
     "q": "Does the reason for a crime change how the criminal should be treated?",
     "idea": "Views about people who break the law",
     "content": "\"Views about people who break the law for these reasons.\" Tied directly to the previous bullet: religious attitudes differ sharply between a crime driven by poverty or addiction and one driven by greed or hate, and between a criminal and the crime. The teaching to hate the sin and love the sinner belongs here, as does the case for treating mental illness and addiction as conditions rather than choices."
    },
    {
     "code": "3.2.1.5 Religion, crime and the causes of crime — Views about different types of crime",
     "q": "Are some crimes worse than others?",
     "idea": "Hate crimes, theft and murder",
     "content": "\"Views about different types of crime, including hate crimes, theft and murder.\" Three types are named. Murder is condemned outright across the traditions through the sanctity of life; theft is condemned but argued about where need is extreme; hate crime is the contemporary category, and religious teaching on equality and on the treatment of minorities bears on it directly."
    },
    {
     "code": "3.2.1.5 Religion and punishment — The aims of punishment",
     "q": "What is punishment for?",
     "idea": "Retribution, deterrence and reformation",
     "content": "First bullet under \"Religion and punishment\": \"The aims of punishment, including: retribution; deterrence; reformation.\" Three aims, named by the document, and they pull in different directions — paying back what is deserved, discouraging others, and changing the offender. Religious traditions can be sorted by which they emphasise, and the death penalty debate turns on which of the three is given priority."
    },
    {
     "code": "3.2.1.5 Religion and punishment — The treatment of criminals",
     "q": "How should criminals be treated?",
     "idea": "Prison, corporal punishment and community service",
     "content": "\"The treatment of criminals, including: prison; corporal punishment; community service.\" Three methods, named. Corporal punishment is also one of the three prescribed contrasting issues, so contrasting beliefs on it must be arguable with Christianity and at least one other tradition. Each method is best argued against the three aims: which does prison serve, and which does community service serve better?"
    },
    {
     "code": "3.2.1.5 Religion and punishment — Forgiveness",
     "q": "Should a criminal be forgiven?",
     "idea": "Forgiveness",
     "content": "\"Forgiveness.\" One of the three prescribed contrasting issues and given its own bullet. The tension the examiner is looking for is between forgiveness as a central religious duty and justice as an equally religious demand — whether forgiving means not punishing, who has the standing to forgive, and whether repentance is required first."
    },
    {
     "code": "3.2.1.5 Religion and punishment — The death penalty",
     "q": "Should the state execute?",
     "idea": "The death penalty",
     "content": "\"The death penalty.\" One of the three prescribed contrasting issues. Traditions divide, and so do believers within them: scriptural passages appearing to sanction it, the sanctity of life, the risk of executing the innocent, the impossibility of reformation once the sentence is carried out, and the position in Britain, where it is abolished — which is what \"contrasting perspectives in contemporary British society\" asks about."
    },
    {
     "code": "3.2.1.5 Religion and punishment — Ethical arguments related to the death penalty",
     "q": "How is the death penalty argued about ethically?",
     "idea": "The principle of utility against the sanctity of life",
     "content": "\"Ethical arguments related to the death penalty, including those based on the principle of utility and sanctity of life.\" The document names both arguments and they are the two the examiner expects: utility — whether executing produces the greatest good, chiefly through deterrence — and sanctity of life, which holds that a God-given life may not be taken whatever the benefit. A Level 4 evaluation weighs them rather than reporting them."
    }
   ]
  },
  {
   "id": "3.2.1.6",
   "component": "C2",
   "option": "themes",
   "name": "Theme F: Religion, human rights and social justice",
   "caseStudies": [
    "The three prescribed contrasting issues: \"They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: • Status of women in religion. • The uses of wealth. • Freedom of religious expression.\"",
    "\"the status and treatment within religion of women and homosexuals\" — named under prejudice and discrimination (3.2.1.6).",
    "\"Ethical arguments related to racial discrimination (including positive discrimination), including those based on the ideals of equality and justice\" (3.2.1.6).",
    "The forms of exploitation named: \"fair pay; excessive interest on loans; people-trafficking\" (3.2.1.6).",
    "Sources of wisdom and authority a student may cite (3.2.1): \"the Pali Canon, the sermons of the Buddha, the Bible, the Catechism of the Catholic Church, the Vedas and Upanishads, the Qur'an and Hadith, the Torah and Talmud, and the Guru Granth Sahib\". \"As part of the supporting material for this specification, AQA will publish a list of appropriate texts; alternatives may be used and no questions will be set on them.\"",
    "\"Students may draw upon Christianity, Buddhism, Hinduism, Islam, Judaism and Sikhism, as well as other religions and non-religious beliefs such as atheism and humanism.\" (3.2.1)"
   ],
   "ideas": [
    {
     "code": "3.2.1.6 — The theme's own requirement: religious teachings, contrasting perspectives, and the three prescribed issues",
     "q": "What must every answer on this theme be able to do?",
     "idea": "Teachings, arguments, contrasting perspectives — and the three named issues",
     "content": "\"Students should study religious teachings, and religious, philosophical and ethical arguments, relating to the issues that follow, and their impact and influence in the modern world. They should be aware of contrasting perspectives in contemporary British society on all of these issues. They must be able to explain contrasting beliefs on the following three issues with reference to the main religious tradition in Britain (Christianity) and one or more other religious traditions: Status of women in religion; The uses of wealth; Freedom of religious expression.\" Section 3.2.1 governs all six religious, philosophical and ethical studies themes: \"Students should be aware of different religious perspectives on the issues studied within and / or between religious and non-religious beliefs such as atheism and humanism. Students must also study religious, philosophical and ethical arguments related to the issues raised, and their impact and influence on the modern world. … They will also be expected to make specific references to sources of wisdom and authority including scripture and/or sacred texts. … Students must demonstrate knowledge and understanding that: the religious traditions of Great Britain are, in the main, Christian; the religious traditions in Great Britain are diverse.\""
    },
    {
     "code": "3.2.1.6 Human rights — Prejudice and discrimination in religion and belief",
     "q": "How are women and homosexuals treated within religions?",
     "idea": "Prejudice and discrimination, and the status and treatment of women and homosexuals",
     "content": "First bullet under \"Human rights\": \"Prejudice and discrimination in religion and belief, including the status and treatment within religion of women and homosexuals.\" The document points the question inwards — discrimination *within* religion, not only discrimination against religious people — and the status of women in religion is one of the three prescribed contrasting issues. Distinguish prejudice as an attitude from discrimination as an act, and contrast positions within one religion as well as between religions."
    },
    {
     "code": "3.2.1.6 Human rights — Issues of equality, freedom of religion and belief",
     "q": "How free should people be to practise and express a religion?",
     "idea": "Equality, freedom of religion and freedom of religious expression",
     "content": "\"Issues of equality, freedom of religion and belief including freedom of religious expression.\" Freedom of religious expression is one of the three prescribed contrasting issues: the wearing of religious dress and symbols, speaking about one's faith at work, and where that freedom meets other people's rights — a live question in contemporary British society, which is the framing the theme demands."
    },
    {
     "code": "3.2.1.6 Human rights — Human rights and the responsibilities that come with rights",
     "q": "Do rights bring duties?",
     "idea": "Rights and responsibilities",
     "content": "\"Human rights and the responsibilities that come with rights, including the responsibility to respect the rights of others.\" The document pairs them deliberately. Religious traditions more often speak of duties than of rights, so a strong answer can argue both that religious teaching supports human rights (equal worth, made in God's image, the oneness of humanity) and that it frames them differently."
    },
    {
     "code": "3.2.1.6 Human rights — Social justice",
     "q": "What does social justice mean and why do religions demand it?",
     "idea": "Social justice",
     "content": "\"Social justice.\" Given its own bullet: fairness in how a society distributes wealth, opportunity and power, and the religious duty to work for it — Catholic social teaching, tzedek and tikkun olam, zakah, sewa and langar. It is the bridge between the human rights half of the theme and the wealth and poverty half."
    },
    {
     "code": "3.2.1.6 Human rights — Racial prejudice and discrimination",
     "q": "What do religions teach about race?",
     "idea": "Racial prejudice and discrimination",
     "content": "\"Racial prejudice and discrimination.\" Every tradition studied teaches the equal worth of all people — one human family, one creation, the oneness of humanity — and an answer should be able to cite the teaching and name where discrimination still appears, including where religious communities themselves have failed by their own standard."
    },
    {
     "code": "3.2.1.6 Human rights — Ethical arguments related to racial discrimination",
     "q": "Is positive discrimination justified?",
     "idea": "Positive discrimination, equality and justice",
     "content": "\"Ethical arguments related to racial discrimination (including positive discrimination), including those based on the ideals of equality and justice.\" Positive discrimination is named by the document, and it is the interesting case: treating people differently in order to correct past unfairness, which equality seems to forbid and justice seems to require — exactly the kind of tension a 12-mark evaluation rewards."
    },
    {
     "code": "3.2.1.6 Wealth and poverty — Wealth",
     "q": "Is it wrong to be rich?",
     "idea": "The right attitude to wealth and the uses of wealth",
     "content": "First bullet under \"Wealth and poverty\": \"Wealth, including: the right attitude to wealth; the uses of wealth.\" The uses of wealth is one of the three prescribed contrasting issues. The document's phrasing is careful: the question is the attitude to wealth and what is done with it, not simply whether wealth is permitted — which is how traditions that allow prosperity (artha among the four aims of life) and traditions that warn against it can both be represented."
    },
    {
     "code": "3.2.1.6 Wealth and poverty — The responsibilities of wealth",
     "q": "What does having money oblige a person to do?",
     "idea": "The duty to tackle poverty and its causes",
     "content": "\"The responsibilities of wealth, including the duty to tackle poverty and its causes.\" Note \"and its causes\" — the document asks for more than almsgiving: the duty extends to the structures that produce poverty, which is where Catholic social teaching, the prophets' demand for justice and the zakah system all go beyond individual charity."
    },
    {
     "code": "3.2.1.6 Wealth and poverty — Exploitation of the poor",
     "q": "How are the poor exploited?",
     "idea": "Fair pay, excessive interest on loans and people-trafficking",
     "content": "\"Exploitation of the poor including issues relating to: fair pay; excessive interest on loans; people-trafficking.\" Three named forms. Each connects to specific religious teaching — the wages of a labourer not to be held back overnight, the prohibitions on usury and riba, and the sanctity and dignity of the human person against the buying and selling of people."
    },
    {
     "code": "3.2.1.6 Wealth and poverty — The responsibilities of those living in poverty",
     "q": "What can those in poverty be expected to do for themselves?",
     "idea": "The responsibilities of those living in poverty",
     "content": "\"The responsibilities of those living in poverty to help themselves overcome the difficulties they face.\" The document deliberately asks the question from the other side, and it is the one students most often miss. It supports arguments about dignity, work and self-reliance, and about the limits of what can fairly be expected of people whose difficulties are not of their own making."
    },
    {
     "code": "3.2.1.6 Wealth and poverty — Charity",
     "q": "Is giving money to the poor always the right thing to do?",
     "idea": "Charity and the problems of giving",
     "content": "\"Charity, including issues related to giving money to the poor.\" The document's phrase \"issues related to\" signals the argument: whether money given directly helps or creates dependence, whether it should go to individuals or to organisations, whether charity lets the causes of poverty go unaddressed — set against the clear religious duty to give, from zakah and tzedakah to almsgiving and dana."
    }
   ]
  },
  {
   "id": "3.2.2.1",
   "component": "C2",
   "option": "themes",
   "name": "Theme G: St Mark's gospel: the life of Jesus",
   "caseStudies": [
    "The set texts for Theme G, as the specification lists them. The early ministry of Jesus: \"John's preparation for Jesus' ministry: 1:1–8\"; \"Jesus' baptism and temptation: 1:9–13\"; \"The paralysed man: 2:1–12\"; \"Jairus' daughter: 5:21–24a, 35–43\"; \"The rejection at Nazareth: 6:1–6\"; \"The feeding of the five thousand: 6:30–44\".",
    "The later ministry of Jesus: \"The conversation at Caesarea Philippi: 8:27–33\"; \"The transfiguration of Jesus: 9:2–9\"; \"Jesus' passion prediction: 10:32–34\"; \"The request of James and John: 10:35–45\"; \"Bartimaeus: 10:46–52\"; \"The entry into Jerusalem: 11:1–11\".",
    "The final days in Jerusalem: \"The Last Supper: 14:12–26\"; \"Jesus in Gethsemane: 14:32–52\"; \"The trial before the Jewish authorities: 14:53, 57–65\"; \"The trial before Pilate: 15:1–15\"; \"The crucifixion and burial: 15:21–47\"; \"The empty tomb: 16:1–8\".",
    "The titles studied under Significance: \"Son of Man, Son of God, Christ (Messiah) and Son of David\".",
    "Section 3.2.2 Textual studies governs both Theme G and Theme H: \"Students entering for textual studies themes must also study Christianity (page 11) or Catholic Christianity (page 12) in Component 1. There is a separate entry code for this route (see Entries and codes (page 33)). Students electing for this route must study both textual studies themes (Themes G and H). In studying these themes, students should be aware of the significance, importance and influence of St Mark's Gospel for individuals, communities and societies. They should understand how varied interpretations of the meaning of passages from St Mark's Gospel may give rise to diversity within Christian traditions and consider how far Christian and non-religious communities give authority to St Mark's Gospel, especially in relation to other sources of contemporary authority. Students should be able to show knowledge of the set texts for study and an understanding of their importance for Jesus, for his early followers and for people of the 21st century. Students should be able to consider the authority of the Gospel and the relevance of Jesus' example and teaching.\""
   ],
   "ideas": [
    {
     "code": "3.2.2.1 — The textual studies requirement: the set texts, their interpretation and the authority of the Gospel",
     "q": "What does the specification require of every answer on St Mark's Gospel?",
     "idea": "Set texts, varied interpretations, and the authority of the Gospel",
     "content": "Section 3.2.2 Textual studies governs both Theme G and Theme H: \"Students entering for textual studies themes must also study Christianity (page 11) or Catholic Christianity (page 12) in Component 1. There is a separate entry code for this route (see Entries and codes (page 33)). Students electing for this route must study both textual studies themes (Themes G and H). In studying these themes, students should be aware of the significance, importance and influence of St Mark's Gospel for individuals, communities and societies. They should understand how varied interpretations of the meaning of passages from St Mark's Gospel may give rise to diversity within Christian traditions and consider how far Christian and non-religious communities give authority to St Mark's Gospel, especially in relation to other sources of contemporary authority. Students should be able to show knowledge of the set texts for study and an understanding of their importance for Jesus, for his early followers and for people of the 21st century. Students should be able to consider the authority of the Gospel and the relevance of Jesus' example and teaching.\" Note the two consequences for how this room is used: Themes G and H must be taken together, and one of the two Component 1 religions must be Christianity or Catholic Christianity. In the exam, the 5-mark question on these themes carries the instruction \"You must refer to St Mark's Gospel in your answer\", so the passages below have to be known closely enough to be cited, not just summarised."
    },
    {
     "code": "3.2.2.1 The early ministry of Jesus — John's preparation for Jesus' ministry: 1:1–8",
     "q": "How does Mark open his Gospel, and what does John the Baptist do?",
     "idea": "John's preparation for Jesus' ministry (1:1–8)",
     "content": "Set text: \"John's preparation for Jesus' ministry: 1:1–8.\" The opening of the Gospel: the good news of Jesus Christ, the Son of God, the prophecy of a messenger sent ahead, and John baptising in the wilderness, preaching repentance and the forgiveness of sins, and saying that one more powerful is coming who will baptise with the Holy Spirit. Students must know the passage itself and \"an understanding of [its] importance for Jesus, for his early followers and for people of the 21st century\"."
    },
    {
     "code": "3.2.2.1 The early ministry of Jesus — Jesus' baptism and temptation: 1:9–13",
     "q": "What happens at Jesus' baptism and in the wilderness?",
     "idea": "Jesus' baptism and temptation (1:9–13)",
     "content": "Set text: \"Jesus' baptism and temptation: 1:9–13.\" Jesus is baptised by John, the heavens are torn open, the Spirit descends like a dove and a voice says 'You are my Son, whom I love; with you I am well pleased'; then the Spirit sends him into the wilderness for forty days, tempted by Satan, with the wild animals, and the angels attending him. The declaration of sonship bears directly on the titles studied under Significance."
    },
    {
     "code": "3.2.2.1 The early ministry of Jesus — The paralysed man: 2:1–12",
     "q": "Why does this healing cause a row about blasphemy?",
     "idea": "The paralysed man (2:1–12)",
     "content": "Set text: \"The paralysed man: 2:1–12.\" Four men dig through the roof to lower their friend; Jesus, seeing their faith, says 'Son, your sins are forgiven'; the teachers of the law think this is blasphemy, since only God can forgive sins; Jesus heals the man to show 'that the Son of Man has authority on earth to forgive sins'. The passage is about authority as much as about healing, and it introduces the title Son of Man."
    },
    {
     "code": "3.2.2.1 The early ministry of Jesus — Jairus' daughter: 5:21–24a, 35–43",
     "q": "What does the raising of Jairus' daughter show?",
     "idea": "Jairus' daughter (5:21–24a, 35–43)",
     "content": "Set text: \"Jairus' daughter: 5:21–24a, 35–43\" — note the verse selection, which sets aside the story of the woman with a haemorrhage sandwiched inside it (that passage is a set text in Theme H). A synagogue leader begs for his dying daughter; word comes that she has died; Jesus says 'Don't be afraid; just believe', takes Peter, James and John, and says 'Talitha koum!' The crowd is astonished and he orders them to tell no one — the messianic secret."
    },
    {
     "code": "3.2.2.1 The early ministry of Jesus — The rejection at Nazareth: 6:1–6",
     "q": "Why is Jesus rejected in his home town?",
     "idea": "The rejection at Nazareth (6:1–6)",
     "content": "Set text: \"The rejection at Nazareth: 6:1–6.\" Teaching in the synagogue of his home town, Jesus is met with 'Isn't this the carpenter? Isn't this Mary's son?' and they take offence at him. 'A prophet is not without honour except in his own town, among his relatives and in his own home.' He could do no miracle there except heal a few sick people, and he was amazed at their lack of faith — the Gospel's plainest statement of the link between faith and what Jesus is able to do."
    },
    {
     "code": "3.2.2.1 The early ministry of Jesus — The feeding of the five thousand: 6:30–44",
     "q": "What kind of miracle is the feeding of the five thousand?",
     "idea": "The feeding of the five thousand (6:30–44)",
     "content": "Set text: \"The feeding of the five thousand: 6:30–44.\" Jesus has compassion on the crowd because they are like sheep without a shepherd; five loaves and two fish are taken, blessed, broken and given; all eat and are satisfied, and twelve baskets are left over. The actions anticipate the Last Supper, and the passage is the document's own example of a text on which \"contrasting views on the historicity of the miracle stories\" can be set — a nature miracle, a Eucharistic sign, or a sharing of what the crowd already had."
    },
    {
     "code": "3.2.2.1 The later ministry of Jesus — The conversation at Caesarea Philippi: 8:27–33",
     "q": "Who do the disciples say Jesus is, and why does Peter get rebuked?",
     "idea": "The conversation at Caesarea Philippi (8:27–33)",
     "content": "Set text: \"The conversation at Caesarea Philippi: 8:27–33.\" 'Who do people say I am?' … 'But what about you?' Peter answers 'You are the Messiah'; Jesus warns them to tell no one, then teaches that the Son of Man must suffer, be rejected, be killed and rise again. Peter rebukes him and Jesus replies 'Get behind me, Satan! … you do not have in mind the concerns of God, but merely human concerns.' The turning point of the Gospel, and central to the meaning of the title Christ (Messiah)."
    },
    {
     "code": "3.2.2.1 The later ministry of Jesus — The transfiguration of Jesus: 9:2–9",
     "q": "What is revealed at the transfiguration?",
     "idea": "The transfiguration of Jesus (9:2–9)",
     "content": "Set text: \"The transfiguration of Jesus: 9:2–9.\" On a high mountain with Peter, James and John, Jesus is transfigured, his clothes dazzling white; Elijah and Moses appear; Peter offers to put up three shelters; a cloud covers them and a voice says 'This is my Son, whom I love. Listen to him!' Coming down, he orders them to tell no one until the Son of Man has risen from the dead."
    },
    {
     "code": "3.2.2.1 The later ministry of Jesus — Jesus' passion prediction: 10:32–34",
     "q": "What does Jesus say is going to happen to him?",
     "idea": "Jesus' passion prediction (10:32–34)",
     "content": "Set text: \"Jesus' passion prediction: 10:32–34.\" On the road up to Jerusalem, with the disciples astonished and afraid, Jesus takes the Twelve aside and tells them in detail what will happen: the Son of Man handed over to the chief priests and teachers of the law, condemned, handed to the Gentiles, mocked, spat on, flogged and killed, and after three days rising. It sets the pattern the final days fulfil."
    },
    {
     "code": "3.2.2.1 The later ministry of Jesus — The request of James and John: 10:35–45",
     "q": "What do James and John ask for, and what does Jesus say greatness is?",
     "idea": "The request of James and John (10:35–45)",
     "content": "Set text: \"The request of James and John: 10:35–45.\" They ask to sit at his right and left in glory; Jesus asks whether they can drink the cup he drinks; the ten are indignant; and Jesus contrasts the rulers of the Gentiles who lord it over people with his own community: 'whoever wants to become great among you must be your servant … For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.' The clearest statement of service and of the meaning of his death."
    },
    {
     "code": "3.2.2.1 The later ministry of Jesus — Bartimaeus: 10:46–52",
     "q": "What is significant about blind Bartimaeus?",
     "idea": "Bartimaeus (10:46–52)",
     "content": "Set text: \"Bartimaeus: 10:46–52.\" A blind beggar outside Jericho shouts 'Jesus, Son of David, have mercy on me!' and will not be silenced; Jesus calls him, he throws off his cloak, and to 'What do you want me to do for you?' he answers 'Rabbi, I want to see.' 'Go … your faith has healed you' — and he follows Jesus along the road. He is the one who uses the title Son of David, and the only healed person in Mark who is named and who then follows."
    },
    {
     "code": "3.2.2.1 The later ministry of Jesus — The entry into Jerusalem: 11:1–11",
     "q": "What does Jesus claim by riding into Jerusalem?",
     "idea": "The entry into Jerusalem (11:1–11)",
     "content": "Set text: \"The entry into Jerusalem: 11:1–11.\" The colt that no one has ever ridden, cloaks and branches spread on the road, and the shouts of 'Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the coming kingdom of our father David!' A deliberate, public and royal act, done on a colt rather than a warhorse — which is exactly the point of dispute about what kind of Messiah he claimed to be."
    },
    {
     "code": "3.2.2.1 The final days in Jerusalem — The Last Supper: 14:12–26",
     "q": "What does Jesus say and do at the Last Supper?",
     "idea": "The Last Supper (14:12–26)",
     "content": "Set text: \"The Last Supper: 14:12–26.\" The preparation for the Passover, the prediction that one of the Twelve will betray him, and the words over the bread — 'Take it; this is my body' — and over the cup — 'This is my blood of the covenant, which is poured out for many.' The specification asks separately for \"Differing beliefs about the meaning of Jesus' words and actions at the Last Supper\", which ties this passage to the eucharistic divergences studied in Component 1."
    },
    {
     "code": "3.2.2.1 The final days in Jerusalem — Jesus in Gethsemane: 14:32–52",
     "q": "What happens in Gethsemane?",
     "idea": "Jesus in Gethsemane (14:32–52)",
     "content": "Set text: \"Jesus in Gethsemane: 14:32–52.\" Jesus is deeply distressed and troubled, prays 'Abba, Father … everything is possible for you. Take this cup from me. Yet not what I will, but what you will', finds the disciples asleep three times — 'the spirit is willing, but the flesh is weak' — and is then betrayed by Judas with a kiss and arrested, while the disciples desert him and flee. The fullest picture in Mark of Jesus' humanity and obedience."
    },
    {
     "code": "3.2.2.1 The final days in Jerusalem — The trial before the Jewish authorities: 14:53, 57–65",
     "q": "On what charge is Jesus condemned by the Sanhedrin?",
     "idea": "The trial before the Jewish authorities (14:53, 57–65)",
     "content": "Set text: \"The trial before the Jewish authorities: 14:53, 57–65\" — note the verse selection. The false witnesses do not agree; the high priest asks 'Are you the Messiah, the Son of the Blessed One?'; Jesus answers 'I am … And you will see the Son of Man sitting at the right hand of the Mighty One and coming on the clouds of heaven.' The high priest tears his clothes, calls it blasphemy, and they all condemn him as worthy of death. Three of the four titles appear in this one exchange."
    },
    {
     "code": "3.2.2.1 The final days in Jerusalem — The trial before Pilate: 15:1–15",
     "q": "Why does Pilate condemn a man he thinks is innocent?",
     "idea": "The trial before Pilate (15:1–15)",
     "content": "Set text: \"The trial before Pilate: 15:1–15.\" 'Are you the king of the Jews?' — 'You have said so'; Jesus then makes no reply, and Pilate is amazed. The crowd, stirred up by the chief priests, asks for Barabbas; 'What shall I do, then, with the one you call the king of the Jews?'; 'Crucify him!'; and Pilate, 'wanting to satisfy the crowd', releases Barabbas, has Jesus flogged and hands him over to be crucified. Political power, crowd pressure and the title king of the Jews all meet here."
    },
    {
     "code": "3.2.2.1 The final days in Jerusalem — The crucifixion and burial: 15:21–47",
     "q": "How does Mark tell the death of Jesus?",
     "idea": "The crucifixion and burial (15:21–47)",
     "content": "Set text: \"The crucifixion and burial: 15:21–47.\" Simon of Cyrene carries the cross; the written charge is 'The King of the Jews'; passers-by and chief priests mock him; darkness covers the land; Jesus cries 'Eloi, Eloi, lema sabachthani?' — 'My God, my God, why have you forsaken me?' — and dies; the curtain of the temple is torn in two from top to bottom; and the centurion says 'Surely this man was the Son of God!' Joseph of Arimathea asks Pilate for the body and lays it in a tomb cut out of rock. The centurion's words are the human confession of the title with which the Gospel opened."
    },
    {
     "code": "3.2.2.1 The final days in Jerusalem — The empty tomb: 16:1–8",
     "q": "What do the women find, and why does Mark end there?",
     "idea": "The empty tomb (16:1–8)",
     "content": "Set text: \"The empty tomb: 16:1–8.\" The women come with spices, worrying who will roll away the stone, and find it already rolled back; a young man in a white robe says 'He has risen! He is not here. See the place where they laid him' and tells them to go to the disciples and Peter, that he is going ahead of them into Galilee; 'Trembling and bewildered, the women went out and fled from the tomb. They said nothing to anyone, because they were afraid.' The abrupt ending is itself part of the content — \"different explanations given for the empty tomb\" is a named requirement below."
    },
    {
     "code": "3.2.2.1 Significance — The titles Son of Man, Son of God, Christ (Messiah) and Son of David",
     "q": "What did the four titles mean to 1st century Jews and to Jesus?",
     "idea": "The four titles and their 1st century meaning",
     "content": "\"The titles Son of Man, Son of God, Christ (Messiah) and Son of David, including their meaning for 1st century Jews and Jesus.\" Four titles, and the document asks for two readings of each — what a 1st century Jew would have heard in it, and what Jesus appears to mean by it in Mark, which is often not the same thing. Son of Man is the one Jesus uses of himself; Christ is the one he accepts but silences; Son of David is Bartimaeus's and the crowd's."
    },
    {
     "code": "3.2.2.1 Significance — The significance for 21st century Christians of Jesus' understanding of the titles",
     "q": "What do the titles mean for Christians now?",
     "idea": "The titles for 21st century Christians",
     "content": "\"The significance for 21st century Christians of Jesus' understanding of the titles Son of Man, Son of God, Christ (Messiah) and Son of David.\" A separate bullet from the 1st century meaning, and examinable in its own right: what it means now to confess Jesus as Son of God or Messiah, and how the suffering Son of Man reshapes Christian ideas of power, leadership and service."
    },
    {
     "code": "3.2.2.1 Significance — St Mark's portrayal of Jesus as a teacher and miracle worker",
     "q": "Did the miracles happen?",
     "idea": "Teacher and miracle worker, and the historicity of the miracles",
     "content": "\"St Mark's portrayal of Jesus as a teacher and miracle worker, including contrasting views on the historicity of the miracle stories.\" The document writes the contrast into the content: miracles as events that happened, as stories shaped to make a theological point, as natural events understood in the terms of the time, or as later additions. This is the bullet that supplies a genuinely two-sided 12-mark answer on any miracle in the Gospel."
    },
    {
     "code": "3.2.2.1 Significance — Differing beliefs about the meaning of Jesus' words and actions at the Last Supper",
     "q": "What did Jesus mean by 'this is my body'?",
     "idea": "The meaning of the Last Supper",
     "content": "\"Differing beliefs about the meaning of Jesus' words and actions at the Last Supper.\" The words over the bread and the cup are read very differently across the Christian traditions — as a real presence, as a spiritual presence, or as a memorial — and the specification's Component 1 rooms require \"different interpretations of its meaning\" too, so the two halves of the course meet here."
    },
    {
     "code": "3.2.2.1 Significance — Differing beliefs about the significance of Jesus' death and resurrection",
     "q": "What do Christians make of the death and the empty tomb?",
     "idea": "The significance of the death and resurrection, and explanations of the empty tomb",
     "content": "\"Differing beliefs about the significance of Jesus' death and resurrection, and different explanations given for the empty tomb.\" Two strands: what the death achieved — atonement, ransom, the example of obedient love — and what happened at the tomb, where the document expects the alternatives to be known: bodily resurrection, the wrong tomb, a removed body, a visionary experience."
    },
    {
     "code": "3.2.2.1 Significance — Differing views on the authority of St Mark's Gospel relating to the life of Jesus",
     "q": "How much authority does the Gospel carry today?",
     "idea": "The authority of the Gospel against secular sources of authority",
     "content": "\"Differing views on the authority of St Mark's Gospel relating to the life of Jesus in relation to the challenges posed by secular sources of contemporary authority.\" The framing question of the whole textual route, stated in 3.2.2 as considering \"how far Christian and non-religious communities give authority to St Mark's Gospel, especially in relation to other sources of contemporary authority\" — science, history, law and public opinion among them."
    }
   ]
  },
  {
   "id": "3.2.2.2",
   "component": "C2",
   "option": "themes",
   "name": "Theme H: St Mark's Gospel as a source of religious, moral and spiritual truths",
   "caseStudies": [
    "The set texts for Theme H, as the specification lists them. The Kingdom of God: \"Parable of the sower: 4:1–9, 14–20\"; \"Parable of the growing seed: 4:26–29\"; \"Parable of the mustard seed: 4:30–32\"; \"Jesus and the children: 10:13–16\"; \"The rich man: 10:17–27\"; \"The greatest commandment: 12:28–34\".",
    "Jesus' relationships with those disregarded by society: \"The man with leprosy: 1:40–45\"; \"The call of Levi: 2:13–17\"; \"The Greek (Syro-Phoenician) woman's daughter: 7:24–30\"; \"The epileptic (demon-possessed) boy: 9:14–29\"; \"The widow at the treasury: 12:41–44\"; \"The anointing at Bethany: 14:1–9\".",
    "Faith and discipleship: \"The call of the first disciples: 1:16–20\"; \"The woman with a haemorrhage: 5:24b–34\"; \"The mission of the Twelve: 6:7–13\"; \"The cost and rewards of discipleship: 8:34–38; 10:28–31\"; \"Peter's denials: 14:27–31, 66–72\"; \"The commission and ascension: 16:14–20\".",
    "Section 3.2.2 Textual studies governs both Theme G and Theme H: \"Students entering for textual studies themes must also study Christianity (page 11) or Catholic Christianity (page 12) in Component 1. There is a separate entry code for this route (see Entries and codes (page 33)). Students electing for this route must study both textual studies themes (Themes G and H). In studying these themes, students should be aware of the significance, importance and influence of St Mark's Gospel for individuals, communities and societies. They should understand how varied interpretations of the meaning of passages from St Mark's Gospel may give rise to diversity within Christian traditions and consider how far Christian and non-religious communities give authority to St Mark's Gospel, especially in relation to other sources of contemporary authority. Students should be able to show knowledge of the set texts for study and an understanding of their importance for Jesus, for his early followers and for people of the 21st century. Students should be able to consider the authority of the Gospel and the relevance of Jesus' example and teaching.\""
   ],
   "ideas": [
    {
     "code": "3.2.2.2 — The textual studies requirement: the set texts, their interpretation and the authority of the Gospel",
     "q": "What does the specification require of every answer on this theme?",
     "idea": "Set texts, varied interpretations, and the authority of the Gospel",
     "content": "Section 3.2.2 Textual studies governs both Theme G and Theme H: \"Students entering for textual studies themes must also study Christianity (page 11) or Catholic Christianity (page 12) in Component 1. There is a separate entry code for this route (see Entries and codes (page 33)). Students electing for this route must study both textual studies themes (Themes G and H). In studying these themes, students should be aware of the significance, importance and influence of St Mark's Gospel for individuals, communities and societies. They should understand how varied interpretations of the meaning of passages from St Mark's Gospel may give rise to diversity within Christian traditions and consider how far Christian and non-religious communities give authority to St Mark's Gospel, especially in relation to other sources of contemporary authority. Students should be able to show knowledge of the set texts for study and an understanding of their importance for Jesus, for his early followers and for people of the 21st century. Students should be able to consider the authority of the Gospel and the relevance of Jesus' example and teaching.\" Themes G and H are taken together or not at all, and the route requires Christianity or Catholic Christianity in Component 1. Where Theme G follows the life of Jesus, Theme H reads the same Gospel for what it teaches — the Kingdom of God, Jesus' treatment of the disregarded, and faith and discipleship — so the 5-mark instruction \"You must refer to St Mark's Gospel in your answer\" is best met by the set passages themselves."
    },
    {
     "code": "3.2.2.2 The Kingdom of God — Parable of the sower: 4:1–9, 14–20",
     "q": "What does the parable of the sower teach about hearing the word?",
     "idea": "Parable of the sower (4:1–9, 14–20)",
     "content": "Set text: \"Parable of the sower: 4:1–9, 14–20\" — the parable and its explanation, with the verses between omitted. Seed falls on the path, on rocky ground, among thorns and on good soil; the explanation identifies the seed as the word, and the four soils as those who hear and lose it to Satan, those who fall away under trouble or persecution, those choked by 'the worries of this life, the deceitfulness of wealth and the desires for other things', and those who hear, accept and produce a crop thirty, sixty or a hundredfold."
    },
    {
     "code": "3.2.2.2 The Kingdom of God — Parable of the growing seed: 4:26–29",
     "q": "How does the Kingdom grow?",
     "idea": "Parable of the growing seed (4:26–29)",
     "content": "Set text: \"Parable of the growing seed: 4:26–29.\" A man scatters seed, sleeps and rises night and day, and the seed sprouts and grows though he does not know how; the soil produces by itself, first the stalk, then the head, then the full kernel; and when the grain is ripe he puts the sickle to it, 'because the harvest has come'. The Kingdom grows by its own power rather than by human effort, and it ends in harvest — an image of judgement."
    },
    {
     "code": "3.2.2.2 The Kingdom of God — Parable of the mustard seed: 4:30–32",
     "q": "What does the mustard seed say about small beginnings?",
     "idea": "Parable of the mustard seed (4:30–32)",
     "content": "Set text: \"Parable of the mustard seed: 4:30–32.\" 'It is like a mustard seed, which is the smallest of all seeds on earth. Yet when planted, it grows and becomes the largest of all garden plants, with such big branches that the birds can perch in its shade.' The smallest beginning becomes the largest shelter — read of the Church's growth from twelve disciples, and of the Kingdom's unimpressive start in Galilee."
    },
    {
     "code": "3.2.2.2 The Kingdom of God — Jesus and the children: 10:13–16",
     "q": "Why must the Kingdom be received like a child?",
     "idea": "Jesus and the children (10:13–16)",
     "content": "Set text: \"Jesus and the children: 10:13–16.\" People bring children for Jesus to touch and the disciples rebuke them; Jesus is indignant: 'Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these. Truly I tell you, anyone who will not receive the kingdom of God like a little child will never enter it.' He takes them in his arms, puts his hands on them and blesses them — the Kingdom received as a gift, by those with no status to claim it."
    },
    {
     "code": "3.2.2.2 The Kingdom of God — The rich man: 10:17–27",
     "q": "Why is it so hard for the rich to enter the Kingdom?",
     "idea": "The rich man (10:17–27)",
     "content": "Set text: \"The rich man: 10:17–27.\" 'Good teacher, what must I do to inherit eternal life?' Jesus lists the commandments; the man has kept them since he was a boy; Jesus looks at him and loves him — 'One thing you lack. Go, sell everything you have and give to the poor … Then come, follow me.' He goes away sad, because he had great wealth. 'How hard it is for the rich to enter the kingdom of God! … It is easier for a camel to go through the eye of a needle.' 'With man this is impossible, but not with God.' The passage anchors Theme F's teaching on wealth."
    },
    {
     "code": "3.2.2.2 The Kingdom of God — The greatest commandment: 12:28–34",
     "q": "What does Jesus say is the greatest commandment?",
     "idea": "The greatest commandment (12:28–34)",
     "content": "Set text: \"The greatest commandment: 12:28–34.\" A teacher of the law asks which commandment is most important; Jesus answers with the Shema — 'Hear, O Israel: the Lord our God, the Lord is one. Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength' — and with 'Love your neighbour as yourself. There is no commandment greater than these.' The teacher agrees that this is more important than all burnt offerings, and Jesus tells him 'You are not far from the kingdom of God.'"
    },
    {
     "code": "3.2.2.2 Jesus' relationships with those disregarded by society — The man with leprosy: 1:40–45",
     "q": "What does Jesus do that no one else would do?",
     "idea": "The man with leprosy (1:40–45)",
     "content": "Set text: \"The man with leprosy: 1:40–45.\" 'If you are willing, you can make me clean.' Jesus is indignant — or filled with compassion — reaches out his hand and touches the man, saying 'I am willing. Be clean!' He sends him to the priest as Moses commanded, and tells him to say nothing; the man talks freely instead, so that Jesus can no longer enter a town openly. Touching a leper is the whole point: the excluded man is not just healed but contacted."
    },
    {
     "code": "3.2.2.2 Jesus' relationships with those disregarded by society — The call of Levi: 2:13–17",
     "q": "Why does Jesus eat with tax collectors and sinners?",
     "idea": "The call of Levi (2:13–17)",
     "content": "Set text: \"The call of Levi: 2:13–17.\" Jesus calls Levi son of Alphaeus from the tax collector's booth — 'Follow me' — and eats at his house with many tax collectors and sinners. The teachers of the law ask the disciples why; Jesus replies 'It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners.' Calling a collaborator and eating with the disreputable was a public act with a public meaning."
    },
    {
     "code": "3.2.2.2 Jesus' relationships with those disregarded by society — The Greek (Syro-Phoenician) woman's daughter: 7:24–30",
     "q": "What happens when a Gentile woman argues with Jesus?",
     "idea": "The Greek (Syro-Phoenician) woman's daughter (7:24–30)",
     "content": "Set text: \"The Greek (Syro-Phoenician) woman's daughter: 7:24–30.\" She begs him to drive a demon out of her daughter; 'First let the children eat all they want … for it is not right to take the children's bread and toss it to the dogs.' She replies 'Lord, even the dogs under the table eat the children's crumbs.' 'For such a reply, you may go; the demon has left your daughter.' The one exchange in Mark that Jesus appears to lose — and the opening of his ministry beyond Israel."
    },
    {
     "code": "3.2.2.2 Jesus' relationships with those disregarded by society — The epileptic (demon-possessed) boy: 9:14–29",
     "q": "What does the father's cry teach about faith?",
     "idea": "The epileptic (demon-possessed) boy (9:14–29)",
     "content": "Set text: \"The epileptic (demon-possessed) boy: 9:14–29.\" The disciples cannot drive out the spirit; the father says 'if you can do anything, take pity on us and help us'; Jesus answers \"'If you can'? Everything is possible for one who believes.\" The father exclaims 'I do believe; help me overcome my unbelief!' Jesus rebukes the spirit and lifts the boy up. Afterwards, privately: 'This kind can come out only by prayer.' Faith here is honest and partial, not complete."
    },
    {
     "code": "3.2.2.2 Jesus' relationships with those disregarded by society — The widow at the treasury: 12:41–44",
     "q": "Why is the widow's offering the largest?",
     "idea": "The widow at the treasury (12:41–44)",
     "content": "Set text: \"The widow at the treasury: 12:41–44.\" Many rich people throw in large amounts; a poor widow puts in two very small copper coins. Jesus calls his disciples and says 'this poor widow has put more into the treasury than all the others. They all gave out of their wealth; but she, out of her poverty, put in everything — all she had to live on.' Giving is measured by what is kept back, not by what is handed over — the text that governs Theme F on charity and the uses of wealth."
    },
    {
     "code": "3.2.2.2 Jesus' relationships with those disregarded by society — The anointing at Bethany: 14:1–9",
     "q": "Why does Jesus defend the woman who anoints him?",
     "idea": "The anointing at Bethany (14:1–9)",
     "content": "Set text: \"The anointing at Bethany: 14:1–9.\" A woman breaks an alabaster jar of very expensive perfume over his head; some rebuke her harshly, saying it could have been sold for more than a year's wages and given to the poor; Jesus says 'Leave her alone … She has done a beautiful thing to me … She poured perfume on my body beforehand to prepare for my burial. Truly I tell you, wherever the gospel is preached throughout the world, what she has done will also be told, in memory of her.' A woman, unnamed, understands his death before the Twelve do."
    },
    {
     "code": "3.2.2.2 Faith and discipleship — The call of the first disciples: 1:16–20",
     "q": "What does Jesus ask of the first disciples?",
     "idea": "The call of the first disciples (1:16–20)",
     "content": "Set text: \"The call of the first disciples: 1:16–20.\" By the Sea of Galilee, Simon and Andrew are casting a net: 'Come, follow me … and I will send you out to fish for people.' At once they leave their nets and follow him. A little further on, James and John are in the boat preparing their nets with their father Zebedee and the hired men; he calls them, and they leave their father in the boat and follow. The immediacy and the cost — work and family both left — are the content of the passage."
    },
    {
     "code": "3.2.2.2 Faith and discipleship — The woman with a haemorrhage: 5:24b–34",
     "q": "What does this healing say about faith?",
     "idea": "The woman with a haemorrhage (5:24b–34)",
     "content": "Set text: \"The woman with a haemorrhage: 5:24b–34\" — the story Mark sets inside the Jairus narrative, here given as a set text in its own right. Twelve years of bleeding, all her money spent on doctors, and she is worse; she touches his cloak from behind in the crowd, saying to herself 'If I just touch his clothes, I will be healed.' Jesus knows power has gone out from him; she comes trembling and tells him the whole truth; 'Daughter, your faith has healed you. Go in peace and be freed from your suffering.' Ritually unclean and unnamed, she is called daughter."
    },
    {
     "code": "3.2.2.2 Faith and discipleship — The mission of the Twelve: 6:7–13",
     "q": "How does Jesus send the Twelve out?",
     "idea": "The mission of the Twelve (6:7–13)",
     "content": "Set text: \"The mission of the Twelve: 6:7–13.\" He sends them out two by two with authority over impure spirits, and instructs them to take nothing for the journey except a staff — no bread, no bag, no money in their belts; to wear sandals but not an extra shirt; to stay in whatever house receives them; and to shake the dust off their feet where they are not welcomed. They preach repentance, drive out demons and anoint many sick people with oil and heal them. Dependence is built into the method."
    },
    {
     "code": "3.2.2.2 Faith and discipleship — The cost and rewards of discipleship: 8:34–38; 10:28–31",
     "q": "What does discipleship cost, and what does it gain?",
     "idea": "The cost and rewards of discipleship (8:34–38; 10:28–31)",
     "content": "Set text: \"The cost and rewards of discipleship: 8:34–38; 10:28–31\" — two passages taken together. 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me. For whoever wants to save their life will lose it, but whoever loses their life for me and for the gospel will save it. What good is it for someone to gain the whole world, yet forfeit their soul?' And to Peter's 'We have left everything to follow you!': no one who has left home or family or fields for Jesus and the gospel will fail to receive a hundred times as much in this present age — 'along with persecutions' — and in the age to come, eternal life."
    },
    {
     "code": "3.2.2.2 Faith and discipleship — Peter's denials: 14:27–31, 66–72",
     "q": "What does Peter's failure teach?",
     "idea": "Peter's denials (14:27–31, 66–72)",
     "content": "Set text: \"Peter's denials: 14:27–31, 66–72\" — the prediction and the event. 'You will all fall away … today — yes, tonight — before the rooster crows twice you yourself will disown me three times.' Peter insists: 'Even if I have to die with you, I will never disown you.' In the courtyard he denies knowing Jesus three times, to a servant girl and to those standing by; the rooster crows the second time, he remembers, and he breaks down and weeps. The Gospel's most honest picture of a disciple — and Peter is named again by the young man at the tomb."
    },
    {
     "code": "3.2.2.2 Faith and discipleship — The commission and ascension: 16:14–20",
     "q": "What are the disciples finally sent to do?",
     "idea": "The commission and ascension (16:14–20)",
     "content": "Set text: \"The commission and ascension: 16:14–20.\" Jesus appears to the Eleven as they are eating and rebukes their lack of faith and their stubborn refusal to believe those who had seen him; 'Go into all the world and preach the gospel to all creation. Whoever believes and is baptised will be saved, but whoever does not believe will be condemned', with the signs that will accompany those who believe; then he is taken up into heaven and sits at the right hand of God, and the disciples go out and preach everywhere, the Lord working with them."
    },
    {
     "code": "3.2.2.2 Significance — The significance and importance of key events in the life of Jesus recorded in St Mark",
     "q": "Why do these events matter, then and now?",
     "idea": "Key events, for Jesus, for his contemporaries and for the 21st century",
     "content": "\"The significance and importance for Jesus, for the people of his day and for people in the 21st century, of key events in the life of Jesus recorded St Mark.\" Three audiences are named, and the document asks for all three — which is the structure of a good answer on any set passage in either textual theme: what it meant to Jesus, what it meant to those who saw it, and what it means now."
    },
    {
     "code": "3.2.2.2 Significance — Different ways in which the Kingdom of God might be understood",
     "q": "What is the Kingdom of God?",
     "idea": "Present reality and future hope; inner state and community",
     "content": "\"Different ways in which the Kingdom of God might be understood, including as a present reality and a future hope, and as a personal inner state and a community.\" Two pairs of readings, all four named by the document — already here and still to come, within a person and among people. The parables of the sower, the growing seed and the mustard seed can be read on any of them, which is what makes this the theme's richest 12-mark material."
    },
    {
     "code": "3.2.2.2 Significance — Reasons for 1st century attitudes and those of Jesus to those disregarded by society",
     "q": "Why were these people disregarded, and why did Jesus treat them differently?",
     "idea": "1st century attitudes and Jesus' attitudes",
     "content": "\"Reasons for 1 st century attitudes and those of Jesus to those disregarded by society.\" The document asks for the reasons on both sides: purity laws, disease, collaboration with Rome, gender, poverty and foreignness on one side, and on the other Jesus' reasons — 'It is not the healthy who need a doctor, but the sick.' Without the 1st century attitudes, the touch of the leper and the meal with Levi lose their force."
    },
    {
     "code": "3.2.2.2 Significance — The significance and importance for Christians of Jesus' attitudes to those disregarded",
     "q": "What difference do those attitudes make to Christians?",
     "idea": "Jesus' attitudes to the disregarded, for Christians",
     "content": "\"The significance and importance for Christians of Jesus' attitudes to those disregarded by the society of his day.\" The AO1:2 influence bullet of this theme: the practical consequence — hospitals and hospices, food banks and street pastors, the work of CAFOD, Christian Aid or Tearfund, and the argument that the Church must side with the excluded in its own society."
    },
    {
     "code": "3.2.2.2 Significance — Different views on the significance and importance of discipleship",
     "q": "What does discipleship demand of Christians today?",
     "idea": "Discipleship, for Jesus' disciples and for 21st century Christians",
     "content": "\"Different views on the significance and importance for Jesus' disciples and for 21st century Christians of discipleship as seen in incidents relating to Jesus' disciples and in Jesus' teaching.\" Both the incidents (the call by the lake, the mission of the Twelve, the request of James and John, Peter's denials) and the teaching (taking up the cross, losing life to save it) are the evidence; \"different views\" invites the argument over how literally the cost is to be taken now."
    },
    {
     "code": "3.2.2.2 Significance — Different views on the nature and importance of faith",
     "q": "What is faith, as St Mark's Gospel shows it?",
     "idea": "The nature and importance of faith",
     "content": "\"Different views on the nature and importance of faith as seen in St Mark's Gospel.\" The Gospel's own examples are various and not all alike: the four men who dig through a roof, the woman who touches a cloak, the father who says 'I do believe; help me overcome my unbelief!', Bartimaeus who will not be silenced, and the people of Nazareth whose lack of faith limits what Jesus can do. Whether faith is trust, obedience, belief or persistence is exactly the \"different views\" the document wants."
    },
    {
     "code": "3.2.2.2 Significance — Differing views on the authority of Jesus' teaching as recorded by St Mark",
     "q": "How much authority does Jesus' teaching carry now?",
     "idea": "The authority of Jesus' teaching against secular sources of authority",
     "content": "\"Differing views on the authority of Jesus' teaching as recorded by St Mark in relation to the challenges posed by secular sources of contemporary authority.\" The counterpart in Theme H to the authority bullet in Theme G, and the question 3.2.2 sets for the whole route: how far Christian and non-religious communities give authority to the Gospel \"especially in relation to other sources of contemporary authority\" — law, science, the state and public opinion."
    }
   ]
  }
 ]
};
module.exports = { SPEC_8062 };
