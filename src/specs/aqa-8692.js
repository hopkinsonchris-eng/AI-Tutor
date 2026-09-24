/* AQA GCSE Spanish (8692) — built on the Message Batches API from the official specification PDF (see spec.source for
   provenance) with the Worker's own pipeline: claude-opus-5 outlined, claude-sonnet-5 mapped each topic, claude-opus-5 judged the map
   against the document at 80% (coverage 0.85, fidelity 0.85, options 0.9, family fit 0.8).
   Family: language. Content statements are the board's own, condensed; codes are copied character for character.
   Judge's notes: The map is accurate where it matters: all four skills are present as components with the document's own 25% weights, both tiers' marks and minutes disclosed in sections (Paper 1 40/35 min F, 50/45 min H with the x1.25 scaling; Paper 2 50 marks NEA with the 10/15/25 split; Paper 3 40+10; Paper 4's five Foundation and three Higher questions), AO wording is verbatim, and the per-question essayShape minutes are honestly flagged as pro-rata splits of the printed 70- and 75-minute whole-paper times. Topics follow the family shape: the three themes with their printed Topic 1–3 lists, the four numbere */
const SPEC_8692 = {
 "id": "AQA-8692",
 "board": "AQA",
 "subject": "Spanish",
 "code": "8692",
 "level": "GCSE",
 "version": "Version 1.0 8 December 2023",
 "firstExam": 2026,
 "essaySubject": false,
 "components": [
  {
   "id": "paper1",
   "name": "Paper 1: Listening (Foundation tier and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 45,
   "sections": [
    "What's assessed: Understanding and responding to spoken extracts comprising the defined vocabulary and grammar for each tier; Dictation of short, spoken extracts",
    "Section A – listening comprehension questions in English, to be answered in English or non-verbally (32 marks at Foundation tier and 40 marks at Higher tier)",
    "Section B – dictation where students transcribe short sentences, including a small number of words from outside the prescribed vocabulary list (8 marks at Foundation tier and 10 marks at Higher tier)",
    "Foundation tier 40 marks; 35 minutes approximately (including five minutes' reading time at the start of the test and two minutes' checking time at the end of the test); raw mark scaled x1.25 to a maximum scaled mark of 50",
    "Higher tier 50 marks; 45 minutes approximately (including five minutes' reading time at the start and two minutes' checking time at the end); scaling factor x1",
    "Assessment is set in the context of the three themes, which apply to all four question papers"
   ],
   "coversAll": true
  },
  {
   "id": "paper2",
   "name": "Paper 2: Speaking (Foundation tier and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 12,
   "sections": [
    "What's assessed: Speaking using clear and comprehensible language to undertake a Role-play; Carry out a Reading aloud task; Talk about visual stimuli",
    "Non-exam assessment (NEA): 7–9 minutes (Foundation tier) + 15 minutes' supervised preparation time; 10–12 minutes (Higher tier) + 15 minutes' supervised preparation time",
    "Part 1: Role-play – 10 marks (recommended to last between 1 and 1.5 minutes at both tiers)",
    "Part 2: Reading aloud task and short conversation – 15 marks (minimum 35 words of text at Foundation tier and 50 words at Higher tier, plus a short unprepared conversation)",
    "Part 3: Photo card discussion – 25 marks (response to the content of the photos on the card and unprepared conversation)",
    "The Photo card will contain two photos from one of the three themes; the Reading aloud card and the Photo card will always be from different themes"
   ],
   "nea": true,
   "coversAll": true
  },
  {
   "id": "paper3",
   "name": "Paper 3: Reading (Foundation tier and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 60,
   "sections": [
    "What's assessed: Understanding and responding to written texts which focus predominantly on the vocabulary and grammar at each tier; Inferring plausible meanings of single words when they are embedded in written sentences; Translating from Spanish into English",
    "Section A – reading comprehension questions in English, to be answered in English or non-verbally (40 marks)",
    "Section B – translation from Spanish into English, minimum of 35 words at Foundation tier and 50 words at Higher tier (10 marks)",
    "Written exam: 45 minutes (Foundation tier), 1 hour (Higher tier); 50 marks for each of Foundation tier and Higher tier",
    "Derivational morphology laid out in the grammar annex can only be included for Paper 3 Reading"
   ],
   "coversAll": true
  },
  {
   "id": "paper4",
   "name": "Paper 4: Writing (Foundation tier and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 75,
   "sections": [
    "What's assessed: Writing text in the language in a lexically and grammatically accurate way in response to simple and familiar stimuli; Translating from English into Spanish",
    "Foundation tier: Question 1 – five short sentences in response to a photo (10 marks); Question 2 – short piece of writing, five compulsory bullet points, approximately 50 words (10 marks); Question 3 – five short grammar tasks (5 marks); Question 4 – translation from English into Spanish, minimum 35 words (10 marks); Question 5 (overlap question) – piece of writing, three compulsory bullet points, approximately 90 words, choice from two questions (15 marks)",
    "Higher tier: Question 1 – translation from English into Spanish, minimum 50 words (10 marks); Question 2 (overlap question) – piece of writing, three compulsory bullet points, approximately 90 words, choice from two questions (15 marks); Question 3 – open-ended writing task, two bullets, approximately 150 words, choice from two questions (25 marks)",
    "Written exam: 1 hour 10 minutes (Foundation tier), 1 hour 15 minutes (Higher tier); 50 marks for each tier",
    "All instructions are in English. All questions are in English. Students are required to write in Spanish"
   ],
   "coversAll": true
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "AO1",
   "text": "understand and respond to spoken language in speaking and in writing"
  },
  {
   "id": "AO2",
   "label": "AO2",
   "text": "understand and respond to written language in speaking and in writing"
  },
  {
   "id": "AO3",
   "label": "AO3",
   "text": "demonstrate understanding and accurate application of the grammar and vocabulary prescribed in the specification"
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Receptive papers are point-marked: for Paper 1 Section A (listening comprehension) and for Paper 3 Reading, responses are assessed according to a detailed mark scheme published each year and the appropriate mark(s) are awarded if the student has satisfactorily communicated his or her understanding; Paper 4 Question 3 (Foundation tier grammar task) is also marked point by point against the published mark scheme, and the translations use a tick-count grid (15 elements converted to a mark out of five) alongside a levels grid. Productive work is marked by levels: Paper 1 Section B dictation is assessed for Communication of meaning (AO1) and Transcription and grammatical accuracy (AO3) in 4-mark (Foundation) or 5-mark (Higher) level grids; Paper 2 uses a 2/1/0 grid for each of the five Role-play tasks and 5-level grids for Reading aloud (AO3), Response to compulsory questions (AO1), Response to the content of the photos (AO2) and the unprepared conversation (AO1 and AO3); Paper 4 writing tasks use 5-level AO2 and AO3 grids, with Higher Question 3 splitting AO3 between Range and use of language and Accuracy. A mark of zero for AO1 (or AO2 in writing) automatically results in a mark of zero for AO3; a major error is one which adversely affects communication, a minor error is one which does not affect communication. Raw marks are scaled so each component is worth 50 scaled marks out of a total of 200.",
  "commandWords": [
   {
    "word": "Tell me about the photos",
    "means": "Teacher's prompt for the AO2 part of the Photo card task: the student must talk about both photos (coverage need not be equal, minimum one thing about each); only speaking about one photo costs one mark"
   },
   {
    "word": "Translate",
    "means": "Give an appropriate and sufficient rendering of the meaning of the original language, from Spanish into English (Paper 3 Section B) or from English into Spanish (Paper 4)"
   },
   {
    "word": "Read aloud",
    "means": "Read the prepared short text out loud, demonstrating the sound symbol correspondences; minor errors do not affect communication, major errors adversely affect it"
   },
   {
    "word": "Dictation (transcribe)",
    "means": "Write down short spoken sentences heard three times, including words from outside the vocabulary list, with credit for accurate spelling"
   },
   {
    "word": "Answer in English or non-verbally",
    "means": "Listening and reading comprehension responses are given in English or by a non-verbal response (eg letter, box, number)"
   },
   {
    "word": "Ask a question",
    "means": "In the Role-play, the student is required to ask a question as part of the task, following the unambiguous English instructions on the Candidate card"
   },
   {
    "word": "Bullet points (compulsory)",
    "means": "All bullet points must be covered in the writing task, but there is no need for equal coverage; marks reward coverage plus clarity and development"
   }
  ],
  "essayShapes": [
   {
    "marks": 10,
    "minutes": 14,
    "structure": "Foundation tier Question 1: five short sentences about a photo, using the prescribed vocabulary and grammar in a familiar context; each sentence marked separately out of 2 for AO2"
   },
   {
    "marks": 10,
    "minutes": 14,
    "structure": "Foundation tier Question 2: short text of approximately 50 words answering five compulsory bullet points; AO2 (5 marks) for coverage and clarity, AO3 (5 marks) for variety and accuracy"
   },
   {
    "marks": 5,
    "minutes": 7,
    "structure": "Foundation tier Question 3: complete five short sentences with a missing word selected from three options (AO3)"
   },
   {
    "marks": 10,
    "minutes": 14,
    "structure": "Foundation tier Question 4: translation of sentences from English into Spanish, minimum 35 words; Grid one (15 ticks to a mark out of 5) plus Grid two knowledge of vocabulary and grammar"
   },
   {
    "marks": 15,
    "minutes": 21,
    "structure": "Foundation tier Question 5 (overlap with Higher Question 2): approximately 90 words on three compulsory bullet points, choice of 5.1 or 5.2; AO2 (10 marks) and AO3 (5 marks, including reference to time frames)"
   },
   {
    "marks": 10,
    "minutes": 15,
    "structure": "Higher tier Question 1: translation of sentences from English into Spanish, minimum 50 words; Grid one (15 ticks to a mark out of 5) plus Grid two knowledge of vocabulary and grammar"
   },
   {
    "marks": 15,
    "minutes": 22,
    "structure": "Higher tier Question 2 (overlap with Foundation Question 5): approximately 90 words on three compulsory bullet points, choice of 2.1 or 2.2; AO2 (10 marks) and AO3 (5 marks, including reference to all three time frames)"
   },
   {
    "marks": 25,
    "minutes": 38,
    "structure": "Higher tier Question 3: open-ended writing task of approximately 150 words on two compulsory bullet points, choice of 3.1 or 3.2; AO2 (15 marks) and AO3 (10 marks split between Range and use of language and Accuracy)"
   }
  ],
  "timingNote": "The specification prints only whole-paper times for Paper 4 (1 hour 10 minutes and 50 marks at Foundation tier; 1 hour 15 minutes and 50 marks at Higher tier) and no time per question. The minutes shown for each essayShape are those totals divided in proportion to each question's marks: Foundation 70 minutes over 50 marks = 1.4 minutes per mark (14 + 14 + 7 + 14 + 21 = 70); Higher 75 minutes over 50 marks = 1.5 minutes per mark, rounded to whole minutes (15 + 22 + 38 = 75)."
 },
 "topics": [
  {
   "id": "3.1.1",
   "component": "paper2",
   "option": null,
   "name": "Theme 1: People and lifestyle",
   "caseStudies": [
    "Role-play: a stimulus card in English with unambiguous instructions about what to say, prepared by the student in supervised preparation time, requiring the student to answer questions, convey information and ask a question, adapting language to suit the purpose of the task",
    "Photo card discussion: a card containing two photos from one of the three themes (which may include Theme 1: People and lifestyle), prepared in supervised preparation time, on which the student first responds to the content of the photos and then takes part in an unprepared conversation based on any or all of the three topics from the specified theme"
   ],
   "ideas": [
    {
     "code": "Topic 1",
     "q": "What is the first topic listed under Theme 1: People and lifestyle?",
     "idea": "Identity and relationships with others",
     "content": "The specification states that Theme 1: People and lifestyle covers three topics, the first being 'Identity and relationships with others'. As the themes apply to all four question papers, in Paper 2: Speaking the Role-play, Reading aloud task and Photo card discussion draw on this topic, with students responding using the prescribed vocabulary and grammar for their tier of entry; the specification notes that in the Speaking assessment students will be able to respond according to their own interests and experiences, and that it is not intended the themes and topics will be specifically referenced in all assessment tasks."
    },
    {
     "code": "Topic 2",
     "q": "What is the second topic listed under Theme 1: People and lifestyle?",
     "idea": "Healthy living and lifestyle",
     "content": "The specification states that Theme 1: People and lifestyle covers three topics, the second being 'Healthy living and lifestyle'. This topic falls within the range of content that Paper 2: Speaking may draw its Role-play, Reading aloud and Photo card tasks from, with students expected to use the prescribed vocabulary and grammar across a range of contexts and assessment tasks rather than the topic being referenced in every task."
    },
    {
     "code": "Topic 3",
     "q": "What is the third topic listed under Theme 1: People and lifestyle?",
     "idea": "Education and work",
     "content": "The specification states that Theme 1: People and lifestyle covers three topics, the third being 'Education and work'. This topic is part of the content on which the Speaking assessment's Role-play, Reading aloud task and Photo card discussion may be based, with texts and tasks built on the prescribed vocabulary list in Appendix 2 and the prescribed grammar in Section 3.2, and with students in the Speaking assessment able to respond according to their own interests and experiences."
    }
   ],
   "skills": [
    "Speaking using clear and comprehensible language to undertake a Role-play, including asking and answering questions and simulating a context such as a social conversation",
    "Talking about visual stimuli (the Photo card) and extending this into a short unprepared interaction",
    "Responding according to own interests and experiences within the topics of Theme 1: People and lifestyle",
    "Using the prescribed vocabulary lists and adapting language to suit the purpose of the task"
   ]
  },
  {
   "id": "3.1.2",
   "component": "paper2",
   "option": null,
   "name": "Theme 2: Popular culture",
   "caseStudies": [
    "Role-play",
    "Photo card"
   ],
   "ideas": [
    {
     "code": "Topic 1",
     "q": "What does Topic 1 of Theme 2: Popular culture cover?",
     "idea": "Free-time activities",
     "content": "The specification states that Theme 2: Popular culture covers the following three topics, the first of which is Topic 1: Free-time activities."
    },
    {
     "code": "Topic 2",
     "q": "What does Topic 2 of Theme 2: Popular culture cover?",
     "idea": "Customs, festivals and celebrations",
     "content": "The specification states that Theme 2: Popular culture covers the following three topics, the second of which is Topic 2: Customs, festivals and celebrations."
    },
    {
     "code": "Topic 3",
     "q": "What does Topic 3 of Theme 2: Popular culture cover?",
     "idea": "Celebrity culture",
     "content": "The specification states that Theme 2: Popular culture covers the following three topics, the third of which is Topic 3: Celebrity culture."
    }
   ],
   "skills": [
    "Speaking using clear and comprehensible language to undertake a Role-play",
    "Carry out a Reading aloud task",
    "Talk about visual stimuli"
   ]
  },
  {
   "id": "3.1.3",
   "component": "paper2",
   "option": null,
   "name": "Theme 3: Communication and the world around us",
   "caseStudies": [
    "Role-play",
    "Photo card"
   ],
   "ideas": [
    {
     "code": "Topic 1",
     "q": "What does Theme 3 Topic 1 cover, and how does it feed into the Speaking paper?",
     "idea": "Travel and tourism, including places of interest",
     "content": "Theme 3: Communication and the world around us covers Topic 1: Travel and tourism, including places of interest, as one of the three topics within this theme; for Paper 2: Speaking, the Photo card contains two photos from one of the three themes, and the unprepared conversation can be based on any or all of the three topics from the theme specified on the Candidate's card and in the Teacher's Notes, enabling students to develop personalised responses on this topic."
    },
    {
     "code": "Topic 2",
     "q": "What does Theme 3 Topic 2 cover, and how does it feed into the Speaking paper?",
     "idea": "Media and technology",
     "content": "Theme 3: Communication and the world around us covers Topic 2: Media and technology, as one of the three topics within this theme; for Paper 2: Speaking, the Photo card contains two photos from one of the three themes, and the unprepared conversation can be based on any or all of the three topics from the theme specified on the Candidate's card and in the Teacher's Notes, enabling students to develop personalised responses on this topic."
    },
    {
     "code": "Topic 3",
     "q": "What does Theme 3 Topic 3 cover, and how does it feed into the Speaking paper?",
     "idea": "The environment and where people live",
     "content": "Theme 3: Communication and the world around us covers Topic 3: The environment and where people live, as one of the three topics within this theme; for Paper 2: Speaking, the Photo card contains two photos from one of the three themes, and the unprepared conversation can be based on any or all of the three topics from the theme specified on the Candidate's card and in the Teacher's Notes, enabling students to develop personalised responses on this topic."
    }
   ]
  },
  {
   "id": "3.2.1.1",
   "component": "paper4",
   "option": null,
   "name": "Foundation tier: Noun phrases",
   "caseStudies": [],
   "ideas": [
    {
     "code": "Formation of feminine nouns",
     "q": "How are feminine nouns formed at Foundation tier?",
     "idea": "Feminine noun formation patterns",
     "content": "Nouns ending in -o change to -a (eg, vecino/vecina); nouns ending in -or add -a (eg, profesor/profesora); no change for nouns ending in -ante/-ente and -ista (eg, estudiante, artista). Irregular feminine nouns and nouns where the different genders have different English equivalents (eg, hijo, son and hija, daughter) are listed as individual items in the vocabulary list. Feminised forms of nouns with biological gender relating to jobs are in flux and will be shown appropriate tolerance, reflecting standard and widespread usage (eg, el jefe, la jefe/jefa)."
    },
    {
     "code": "Formation of plural nouns",
     "q": "How are plural nouns formed at Foundation tier?",
     "idea": "Plural noun formation patterns",
     "content": "Nouns ending in a vowel add -s; nouns ending in a consonant add -es; nouns ending in -z change -z to -c and add -es; nouns ending in -(i)ón add -es and drop the written accent. Highly frequent irregulars are listed in the vocabulary list."
    },
    {
     "code": "Infinitive used as a noun",
     "q": "How is the infinitive used as a noun, and how are nationality adjectives nominalised?",
     "idea": "Infinitive as noun and nominalisation of adjectives",
     "content": "The infinitive used as a noun is, ie, the equivalent of the -ing (gerund) in English. Nominalisation of masculine adjectives for languages (eg, francés ➜ (el) francés) and inflected forms of regular and the highly frequent patterns of nationality adjectives listed in the annex (eg, (la) inglesa, (los) españoles) are also required."
    },
    {
     "code": "Articles",
     "q": "What must students know about the use of articles?",
     "idea": "Article agreement and function",
     "content": "Agreement of articles with noun for gender and number is required (el, la, los, las and un, una, unos, unas). Students must know the functions of definite and indefinite articles, including where their use or omission differs from English (eg, La educación es importante). Contraction of the definite article el after the prepositions de and a (ie, del, al) is listed in the vocabulary list."
    },
    {
     "code": "Other determiners",
     "q": "Which other determiners must show agreement for gender and number?",
     "idea": "Determiner agreement for gender and number",
     "content": "Agreement with nouns for gender and number is required of demonstrative adjectives (este, esta, ese, esa, plus irregular plural forms estos, esos and regular plurals estas, esas); indefinite adjectives (cada (invariant), mismo, otro, todo, alguno*, ninguno*, plus irregular forms algún and ningún — these starred forms are listed as determiners rather than as postnominal adjectives, meaning these specific forms will not be tested and are listed only as the base for the other forms with gender and number agreement); and possessive adjectives (mi, tu, su, nuestro, vuestro) as the equivalent of English me, you, his/her/its/their/your-formal singular and plural, our, your-informal plural. Only the base form will be listed in the vocabulary list, unless otherwise stated, and all English equivalents will be listed."
    },
    {
     "code": "Pronouns",
     "q": "What pronoun forms, agreement and word order must students know at Foundation tier?",
     "idea": "Pronoun forms, agreement and word order",
     "content": "Subject pronouns (yo, tú, él, ella, nosotros, nosotras, vosotros, vosotras, ellos, ellas, usted and ustedes) and invariable pronouns (algo and alguien) are listed in the vocabulary list, with default omission of subject pronouns and contexts where overt use is appropriate (ie, change of subject and emphasis). Word order of direct object pronouns (me, te, lo, la, los, las), indirect object pronouns (me, te, le, les) and singular reflexive pronouns (me, te, se) is required in one- and two-verb constructions (eg, lo miro, lo puedo mirar, puedo mirarlo, ¡Míralo!; te doy, te quiero dar, quiero darte, ¡Dame!; se lava, se debe lavar, debe lavarse, ¡Lávate!), in which only a single pronoun is used. Interrogative pronouns (cuál, cuánto, quién) and their inflected forms for gender and number; use of the relative pronoun que in subject relative clauses; neuter demonstrative pronouns (esto, eso); and use of the pronouns alguno and ninguno, including their inflected forms for gender, are also required."
    }
   ]
  },
  {
   "id": "3.2.1.2",
   "component": "paper4",
   "option": null,
   "name": "Foundation tier: Verb phrases (including adjectival phrases, adverbial phrases, prepositions and derivational morphology (Reading only))",
   "caseStudies": [],
   "ideas": [
    {
     "code": "Negation",
     "q": "How is verbal negation formed at Foundation tier?",
     "idea": "Verbal negation word order",
     "content": "Word order of verbal negation, with no, (no) nada, (no) nunca, (no) nadie, (no) ninguno."
    },
    {
     "code": "Interrogatives",
     "q": "How are interrogatives expressed at Foundation tier?",
     "idea": "Forming questions",
     "content": "Interrogatives are expressed through intonation, including when using a wh-word (qué, quién, cuándo, por qué, cómo, cuál, cuánto, dónde); and through a wh-word (ie, question words including 'how') followed by subject verb word order, including where the overt subject is only sometimes required (eg, ¿Dónde está (Daniel)? and ¿Qué hace (la chica)?)."
    },
    {
     "code": "Inflectional morphology",
     "q": "Which verb tenses, persons and irregular forms must Foundation tier students know?",
     "idea": "Verb tense and person forms",
     "content": "Specific irregular inflected forms (eg, doy, digo), as a minimum those specified, are listed in the vocabulary list; spelling changes in stems to preserve pronunciation (eg, present: g→j; preterite: c→qu, g→gu, addition of y to 3rd persons, and z→c) are not credit-bearing. Regular -ar, -er, -ir verbs in 1st, 2nd, 3rd persons singular and plural are required for: Present indicative with both simple (I walk) and ongoing (I am walking) functions, including five clusters of high frequency verbs patterning on encontrar (o→ue), pensar (e→ie), pedir (e→i), conocer (c→zc) and poner (add -g to 1st person singular), with omission of 'u' in the pedir cluster's first person not credit-bearing; irregular forms of estar, hacer, ir, ser, tener listed in full in the vocabulary list, including use of tener + noun where the English equivalent is 'BE + adjective' (eg, + frío, + calor, + año(s), + hambre, + sed, + miedo); Present continuous (estar + present participle), as equivalent of 'BE + -ing', including spelling changes for verbs whose stems end in a vowel (eg, leer, construir) and for verbs in the pedir cluster; Preterite tense (equivalent of the English simple past), with irregular forms of ir, ser, dar listed in full, irregular preterite stems (tuve, pude, hice, vine, estuve, puse, quise, dije, traje) and irregular form hizo listed in the vocabulary list, stem-changes (o→u, e→i) to 3rd person singular and plural in -IR verbs in the preterite not credit-bearing, and small changes to preterite stems or inflections (eg, vi, vio (no accent), empecé (z→c), dijeron (no 'i' in inflection)) not credit-bearing; Present perfect tense (haber + past participle, -AR stem + ado, -ER/IR stem + ido), with irregular past participles listed in the vocabulary list; Periphrastic future (ir a + infinitive), as equivalent of 'BE + going to + verb' and 'will + verb'. Regular -ar, -er, -ir verbs for 1st, 2nd and 3rd persons singular only are required for: Imperfect for habitual (only for equivalent of English 'used to + verb') and ongoing (BE + ing) functions, with three irregular verbs ser (era, eras), ir (iba, ibas) and ver (veía, veías) listed, and other English equivalent functions listed as tenía, tenías ('had'), había ('there was/were'), estaba, estabas ('was/were + state/location') / era, eras ('was/were + trait'); Imperfect continuous (estar + present participle) for ongoing functions; Inflectional future, plus five irregular verbs tener (tendr-), hacer (har-), poder (podr-), poner (pondr-) of which the 1st person singular stems are listed, and habrá ('there will be'); Conditional, plus the same five irregular verbs and habría ('there would be'); Imperative (affirmative, 2nd singular only) and irregular tú commands (sé, ve, ten, ven, haz, di, pon and sal) listed in the vocabulary list."
    },
    {
     "code": "Syntax of interesar-type verbs",
     "q": "What word order applies to interesar-type verbs?",
     "idea": "Object Verb Subject word order for gustar-type verbs",
     "content": "Ie, interesar-type verbs which tend to occur in Object Verb Subject word order, as listed on the vocabulary list."
    },
    {
     "code": "Modals, for 1st, 2nd and 3rd persons in singular and plural",
     "q": "Which modal verb constructions are required at Foundation tier?",
     "idea": "Modal verb + infinitive constructions",
     "content": "Use of modals (deber, poder, querer, tener que, saber) + infinitive, for 1st, 2nd and 3rd persons in singular and plural, including two multi-word complex fixed phrases (quisiera + infinitive and me/te/le gustaría + infinitive)."
    },
    {
     "code": "Reflexive use of verbs",
     "q": "How are reflexive verb forms used and listed at Foundation tier?",
     "idea": "Singular reflexive verb forms",
     "content": "Reflexive use of verbs, singular only, for 1st, 2nd, 3rd persons. Reflexive verb forms (eg, lavarse) with the same meaning as a listed base verb (eg, lavar) are not listed. Reflexive verb forms with different meanings from a listed base verb (eg, poner, ponerse) are listed on the same line. When reflexive verb forms with different meanings from a listed base verb are not listed, they will not be tested."
    },
    {
     "code": "Impersonal verbs",
     "q": "Which impersonal verb forms are required at Foundation tier?",
     "idea": "Impersonal verb forms",
     "content": "Use of impersonal verb hay. Use of hay que. Impersonal use of se for generalised 'you/one' function with se puede/se necesita. Hace + noun (weather, with the relevant words eg, sol, listed in the vocabulary list)."
    },
    {
     "code": "Adjectival phrases",
     "q": "How do adjectives agree, position themselves and compare at Foundation tier?",
     "idea": "Adjective agreement, position and comparison",
     "content": "Agreement for gender and number with nouns following regular patterns (of adjectives listed in the vocabulary list): Gender and number: -o, -a, -os, -as; Number only: -e, -es; -z, -ces; -ista, -istas; Highly frequent patterns of adjectives for nationality: ending in consonant (eg, francés, -esa, -es (no accent), -esas (no accent), español, -a, -es, -as). Position of adjectives in relation to the nouns they refer to: mostly after nouns, a defined set of prenominal adjectives (algún, ningún, primer, segundo, tercer, buen, mal, gran) and a set that changes meaning depending on whether prenominal or postnominal (eg, único), as listed in the vocabulary list. Different uses of ser and estar with adjectives as listed in the vocabulary list (including where meanings differ when used with ser and estar, eg, listo/a). Use of regular comparative structure menos…que with irregular forms (mejor and peor) listed in the vocabulary list."
    },
    {
     "code": "Adverbial phrases",
     "q": "How are adverbs positioned and compared at Foundation tier?",
     "idea": "Adverb position and comparative structures",
     "content": "Adverbs and adverbial phrases are listed in the vocabulary list. Position of adverbs of time, manner, place. Use of regular comparative structures (más…que/de, menos…que/de, tan…como), with irregular forms (mejor and peor) listed in the vocabulary list."
    },
    {
     "code": "Prepositions",
     "q": "Which prepositions and preposition uses are required at Foundation tier?",
     "idea": "Preposition use, including personal a and verb + preposition combinations",
     "content": "Prepositions are listed in the vocabulary list. Use of the personal a. De to indicate possession (eg, la casa de Hugo). Para, sin + infinitive. Prepositions as needed in certain verb phrases before an infinitive or noun are listed in the vocabulary list alongside the verb entry (eg, dejar 'to leave', dejar de + infinitive 'to stop + verb', ir 'to go', ir de + noun 'to go (for/on) + noun, to go + -ing'). Where the preposition changes or adds to the meaning of the verb, English translations are listed (eg, llegar 'to arrive', llegar a 'to manage to')."
    },
    {
     "code": "Derivational morphology (Reading only)",
     "q": "What derivational morphology may appear in reading texts only?",
     "idea": "Derived word forms permitted in reading texts",
     "content": "Derivational morphology listed here indicates that even if only the base form (eg, libro) is listed in the vocabulary list, a derived form that follows one of the patterns listed here (eg, librito) may be included in reading texts. Or, if only the specific affixed form is listed, the base form may be included in reading texts. Note, if derived forms are included in listening material or required for production, they will be listed separately in the vocabulary list."
    },
    {
     "code": "Uniformly applicable derivational morphology that changes meaning",
     "q": "Which suffixes uniformly change meaning?",
     "idea": "Meaning-changing suffixes -ito/-ita and -ísimo/-ísima",
     "content": "Suffixes: adding -ito, -ita to nouns, or to nouns with -o / -a removed, only where the English meaning is 'little' (eg, librito) or implies endearment (eg, hermanito). Adding -ísimo, -ísima to adjectives, or to adjectives with -o / -a removed, only where the English meaning is 'very' (eg, facilísimo)."
    },
    {
     "code": "Other high frequency patterns",
     "q": "Which suffixes change part of speech?",
     "idea": "Part-of-speech-changing suffixes -mente, -idad and -able",
     "content": "Other high frequency patterns of morphology that changes the part of speech, by suffixes: adverbs created by adding -mente to singular invariable adjectives (eg, alegre-) or the singular feminine form of adjectives ending in -o / -a (eg, absoluta-), only where the English equivalent is '-ly' (eg, normalmente). Nouns created by adding -idad to singular adjectives ending in a consonant (eg, real) or with the final vowel removed (eg, segur-), only where the English equivalent is '-(i)ty' (eg, seguridad). Adjectives created by adding -able to a verb stem, only where the English equivalent is '-able' (eg, evitable)."
    }
   ]
  },
  {
   "id": "3.2.2.1",
   "component": "paper4",
   "option": null,
   "name": "Higher tier: Noun phrases",
   "caseStudies": [],
   "ideas": [
    {
     "code": "Determiners",
     "q": "What determiner does the specification add for Higher tier noun phrases?",
     "idea": "Demonstrative adjective aquel",
     "content": "Demonstrative adjective aquel, with agreement for gender and number, to mean 'that' and 'those', with tolerance for using ese etc as alternatives for aquel etc in production. Higher tier only."
    },
    {
     "code": "Pronouns",
     "q": "What additional pronoun forms and word order does the specification require for Higher tier noun phrases?",
     "idea": "Higher tier pronoun forms and word order",
     "content": "Word order of the direct and indirect object pronouns nos, os in one- and two-verb constructions (such as os veo, os puedo ver, puedo veros) and plural reflexive pronouns nos, os, se; relative pronouns lo que (invariable) and el que, el cual (and their inflected forms for gender and number) in subject relative clauses; relative clauses using wh- pronouns cuando, donde, que; possessive pronouns, agreement for gender and number, for singular and plural possessors (el mío, el tuyo, el suyo, el nuestro, el vuestro); neuter demonstrative pronoun (aquello); use of pronouns after prepositions (mí, ti, él, ella, usted, nosotros, vosotros, ellos, with agreement for gender and number), irregular forms (conmigo, contigo), and emphatic use of pronouns after 'a'; reflexive use of plural forms of pronouns (including with reciprocal function) (eg, nos vemos, os entendéis, se besan). Higher tier only."
    }
   ]
  },
  {
   "id": "3.2.2.2",
   "component": "paper4",
   "option": null,
   "name": "Higher tier: Verb phrases (including adjectival phrases, adverbial phrases and prepositions)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "Negation",
     "q": "How is negation formed at Higher tier, beyond the Foundation list?",
     "idea": "Verbal negation with ya no, tampoco, ni...ni",
     "content": "Word order of verbal negation with ya no, (no) tampoco, (no)…ni…, including the use of (no) ni… ni… for emphasis."
    },
    {
     "code": "Inflectional morphology",
     "q": "What additional inflectional morphology of verbs is required at Higher tier?",
     "idea": "Plural persons of future/conditional/imperfect, credit-bearing spelling and stem changes, imperative, present subjunctive",
     "content": "Highly irregular specific verb forms are listed in the vocabulary list. Plural forms in 1st, 2nd, 3rd persons are required for: the inflectional future, plus irregular verbs saber (sabr-), querer (querr-), venir (vendr-), decir (dir-), salir (saldr-), of which the 1st person singular stems are listed in the vocabulary list; the conditional, with the same irregular verbs (in singular and plural), of which the 1st person singular stems are listed in the vocabulary list; and the imperfect, for habitual (equivalent only of English 'used to + verb') and ongoing ('BE + ing') functions, including the plural forms of the three very high frequency irregular verbs ir, ser, ver. Some verb forms change the spelling in their stems to preserve pronunciation (eg, present: g → j, preterite: c → qu, z → c, g → gu and addition of y to 3rd persons); such spelling changes will be credit-bearing (unlike at Foundation tier). Preterite stem changes (o → u, e → i) in 3rd person singular and plural for -IR verbs, where the verbs are part of an anchor group in the present tense, will be credit-bearing. Stem changes in the present participle form of some -ir verbs, ie o → u (eg, muriendo), e → i (eg, advirtiendo), will not be credit-bearing (the pedir cluster will be credit-bearing as at Foundation). The imperative is required for affirmative commands in 2nd person singular and plural only. The subjunctive mood in the present is required, for singular persons only, with five high frequency verbs: hacer, ser, ir, venir, tener (inflected forms as listed in the vocabulary list), with the following functions and contexts of use: future after conjunction of time cuando; after verbs of wishing, command, request, and emotion; after conjunction que; to express purpose after para que."
    },
    {
     "code": "Multi-verb expressions",
     "q": "Which multi-verb expressions are required at Higher tier?",
     "idea": "Acabar de, passive voice, seguir/llevar + gerund, desde hace",
     "content": "Acabar de + infinitive (as equivalent of 'HAVE just done + verb'). Passive voice: ser + past participle + por, se + 3rd person singular or plural. Use of seguir + present participle and llevar + time period + present participle for ongoing actions in the present. Present tense with desde hace (as equivalent of 'have been + ing for x time')."
    },
    {
     "code": "Impersonal verbs",
     "q": "Which impersonal verbs are required at Higher tier?",
     "idea": "Impersonal verbs listed in the vocabulary list",
     "content": "Listed in the vocabulary list: parece, basta, falta, hace falta, vale la pena."
    },
    {
     "code": "Adjectival phrases",
     "q": "What Higher tier adjectival phrase structures are required?",
     "idea": "Neuter lo as noun, post-verbal possessive adjectives, superlative adjectives",
     "content": "Adjectives with neuter article lo used as nouns (eg, lo bueno). Possessive adjectives as post-verbal complement for singular and plural possessors (eg, mío/a/os/as, tuyo, suyo, nuestro, vuestro). Use of regular superlative adjectives (and irregulars (el mejor, el peor) as listed in the vocabulary list)."
    },
    {
     "code": "Adverbial phrases",
     "q": "What Higher tier adverbial phrase structures are required?",
     "idea": "Superlative adverb structures",
     "content": "Use of regular superlative adverb structures (and irregulars as listed in the vocabulary list)."
    },
    {
     "code": "Prepositions",
     "q": "What Higher tier preposition use is required?",
     "idea": "Antes de/después de + infinitive; preposition placement in questions",
     "content": "Antes de, después de + infinitive. Syntax of prepositions in questions (eg, ¿Con quién hablas?)."
    }
   ]
  },
  {
   "id": "3.2.3",
   "component": "paper2",
   "option": null,
   "name": "Spanish sound symbol correspondences (including key stress positions and associated spelling rules, Higher tier only)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.2.3",
     "q": "Which sound-spelling correspondences between Spanish and English must students learn to read aloud and transcribe accurately at GCSE?",
     "idea": "Spanish sound-symbol correspondences differing from English",
     "content": "This list specifies key differences in sound spelling correspondences between Spanish and English which students will need to learn at GCSE to be able to read out loud and transcribe with sufficient accuracy at this level; it is not an exhaustive list of all the sound-spelling correspondences in the Spanish language, and where a letter or combination of letters is pronounced (or a sound spelt) in approximately the same way in Spanish as in English, it is not listed. The correspondences listed are: [a], [o], [e], [i], [u], [ll], [ch], [ca], [co], [cu], [cu] + vowel, [ce], [ci], [z], [que], [qui], [ga], [go], [gu], [ge], [gi], [gue], [gui], [j], [ñ], [v], [-r-]/[-r], [rr]/[r-]/[-r-], and silent h, each demonstrated in Appendix 1 with two example words (e.g. alto/antes for [a]; llamar/calle for [ll]; guitarra/seguir for [gui]; hospital/hoy for silent h). Word initial [r-] and [-r-] following the consonants n, l or s is the same sound-symbol correspondence (SSC) as [rr]."
    },
    {
     "code": "3.2.3.1",
     "q": "What spelling rules follow from the position of stress in Spanish words, and to which tier do they apply?",
     "idea": "Stress position and accent placement rules",
     "content": "Higher tier only. This list specifies key spelling rules determined by the position of stress, which students will need to learn at GCSE. When reading words aloud in Spanish: stress any vowel that has a written accent; stress the final syllable in a word, except stress the penultimate syllable for any word ending in a vowel, 'n', or 's' (unless there is a written accent). When transcribing Spanish, only write an accent on the stressed vowel for: words with stress on a final syllable ending in a vowel, 'n', or 's'; words with stress on the penultimate (second to last) syllable for a word ending in a consonant (other than 'n' or 's'). All words with stress on the antepenultimate (third to last) syllable also take a written accent."
    }
   ]
  },
  {
   "id": "3.3.1",
   "component": "paper3",
   "option": null,
   "name": "Composition of vocabulary content",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1",
     "q": "How many lexical items must students know for GCSE Spanish, and what else is implied?",
     "idea": "Vocabulary size by tier plus inflected/derived words",
     "content": "Students are expected to know 1,200 lexical items for Foundation tier, and a further 500 lexical items for Higher tier. Students are also required to know words which can be regularly inflected and (for Paper 3 Reading only) regularly derived from listed lexical items using the grammar specified in section 3.3."
    },
    {
     "code": "2",
     "q": "Does the vocabulary list assume prior KS2 or KS3 vocabulary?",
     "idea": "Comprehensive list, no assumed prior vocabulary",
     "content": "Because no vocabulary is specified for KS2 or KS3, the vocabulary list is comprehensive and makes no assumptions about vocabulary previously taught."
    },
    {
     "code": "3",
     "q": "What DfE-referenced words are included within the 1,200/1,700 items?",
     "idea": "Inclusion of DfE subject content Annex E words",
     "content": "The vocabulary lists include, as part of the 1,200 or 1,700 items, the words listed in the DfE subject content Annex E. These are the words which are referenced in the grammar in section 3. They include irregular forms of high frequency verbs and other parts of speech."
    },
    {
     "code": "4",
     "q": "What is added on top of the 1,200/1,700 core items?",
     "idea": "Multi-word phrases and geographical/cultural items",
     "content": "In addition to the 1,200 and 1,700 items, the vocabulary lists contain: (a) 30 short phrases that are multi-word phrases in Spanish; and (b) 20 items to refer to relevant geographical or cultural places/events, including the names of countries to be known receptively and productively."
    },
    {
     "code": "5",
     "q": "What special allowances apply to words outside the vocabulary list in the Reading paper?",
     "idea": "Reading-only glossing, proper noun and cognate allowances",
     "content": "For Reading only: (a) Higher and overlapping tier texts in Paper 3 may include a small number of words outside the vocabulary list, with English meanings supplied adjacent to the text for reference, and no more than 2% of words (rounded to the nearest whole word) in any given text may be glossed in this way; (b) for both Foundation and Higher tiers, all proper nouns (such as cities or countries) that are not on the vocabulary list and are not deemed to be easily understood can be glossed or explained in an adjacent note; (c) up to 2% of words (rounded to the nearest whole word) of any given text can be comprised of cognates which are not included in the vocabulary list. Cognates are words in which the substantial majority of letters are the same in English and the assessed language; they have the same meaning in both languages and any difference in spelling should not impede understanding for students entered for GCSE Spanish."
    },
    {
     "code": "6",
     "q": "How are words with more than one English meaning treated in the vocabulary list?",
     "idea": "Single entry for words with multiple meanings but the same part of speech",
     "content": "Words with multiple meanings but with the same part of speech (eg, the Spanish noun historia that can be translated by the different English words 'story' and 'history') will be listed as one entry in the vocabulary list. All English equivalents that could be tested (eg, in questions that require working from English to Spanish) are provided."
    },
    {
     "code": "7",
     "q": "On what basis was the vocabulary to be learned compiled?",
     "idea": "Compilation with explicit reference to frequency of occurrence",
     "content": "The vocabulary which students will be expected to know, for both comprehension and production, will be compiled with close and explicit reference for each item on the list to frequency of occurrence in the language. This information about frequency has been taken from Davies, M., & Davies, K. (2018). A frequency dictionary of Spanish: Core vocabulary for learners (2nd ed.). London: Routledge."
    },
    {
     "code": "8",
     "q": "What proportion of the vocabulary is high-frequency, how is spelling variation treated, and how are compound words and multi-word phrases counted?",
     "idea": "85% top-2,000-word threshold, spelling tolerance, and compound word/phrase counting rules",
     "content": "At least 85% of the 1,200 and 1,700 words selected has been drawn from the 2,000 most frequent words occurring in the most widely used standard forms of the language. In some cases, more than one spelling is in common use, including where recent spelling reforms have taken place. In such cases, tolerance is shown for both versions of the spelling, eg sólo/solo. The vast majority of lexical items listed as vocabulary are single word vocabulary items. Where a compound word or multi-word phrase translates a single English word, it is counted either as a separate lexical item in the main vocabulary list, or as one of the 30 multi-word phrases. However, where a compound word or phrase can easily be understood from its components, and where the components are already included in the list, the compound word will not be included. Easily understood from its components means that the literal translation of the component parts unambiguously gives the meaning in English. An example of an easily understood compound word or phrase in Spanish is bajo control. An example of a compound word/phrase in Spanish that is not easily understood is no pasa nada."
    }
   ]
  },
  {
   "id": "Foundation tier vocabulary",
   "component": "paper3",
   "option": null,
   "name": "Appendix 2: GCSE Spanish (8692) – Foundation tier vocabulary",
   "caseStudies": [],
   "ideas": [
    {
     "code": "Tier F",
     "q": "How does the appendix mark which words belong to which tier?",
     "idea": "Tiering column of the appendix",
     "content": "The appendix's Tier column marks Foundation tier headwords with 'F'; items required for both tiers (mainly the 30 multi-word phrases and 20 geographical/cultural items) are marked 'F/H', showing they must be known productively and receptively at Foundation tier and carried forward unchanged into Higher tier."
    },
    {
     "code": "Selection principle",
     "q": "What do the letters in the Selection principle column mean?",
     "idea": "Selection principle key for each headword",
     "content": "The Selection principle column marks each headword R (Required, ie part of the DfE Annex E grammar-linked words), O (Optional, drawn from within the top 2000 most frequent words), O> (Optional, drawn from outside the top 2000 most frequent words), or C (the culturally/geographically specific items, such as festival names, listed regardless of frequency), as set out in the key printed beneath the vocabulary table."
    }
   ]
  },
  {
   "id": "Higher tier vocabulary",
   "component": "paper3",
   "option": null,
   "name": "GCSE Spanish (8692) – Higher tier vocabulary",
   "caseStudies": [],
   "ideas": [
    {
     "code": "Tier H",
     "q": "How does the appendix show whether a headword belongs to Higher tier alone or is shared with Foundation tier?",
     "idea": "Tier column distinguishes Higher-only from shared Foundation/Higher items",
     "content": "In the Higher tier vocabulary appendix the Tier column prints \"H\" against headwords, phrases and inflected/irregular forms required only at Higher tier, and prints \"F/H\" against multi-word phrases and items (such as hay que, tener que, hace + noun, se puede, me/te/le gustaría, se necesita, tan…como, and the cultural items such as plaza de toros, fuegos artificiales, Semana Santa, España, Sudamérica, Bachillerato) that are required at both Foundation and Higher tier, showing that a Higher tier candidate must know all Foundation tier vocabulary in addition to the further items marked H."
    },
    {
     "code": "Selection principle",
     "q": "What do the R, O, O> and C entries in the Selection principle column mean?",
     "idea": "Selection principle key explains the status of each listed item",
     "content": "The appendix's key states R = Required, O = Optional within the top 2000 words, and O> = Optional outside the top 2000 words; a further code, C, is used against the cultural and geographical items printed at the end of the list (for example corrida, Día de Reyes, Día de Muertos, Nochevieja, paella, tapas, disfraz, Las Fallas, Tomatina, Sanfermines, flamenco, ayuntamiento), marking them as the culturally-themed items included alongside the required and optional headwords."
    }
   ],
   "skills": [
    "Recognising and understanding Higher tier headwords, including their English equivalents, when listening and reading",
    "Using Higher tier headwords productively, with accurate spelling and grammatical form, when speaking and writing"
   ]
  },
  {
   "id": "6",
   "component": "paper2",
   "option": null,
   "name": "Appendix 1: Sound symbol correspondences",
   "caseStudies": [],
   "ideas": [
    {
     "code": "a",
     "q": "Which example words demonstrate the sound symbol correspondence 'a'?",
     "idea": "SSC example: a",
     "content": "Appendix 1 gives alto and antes as the two example words demonstrating the sound symbol correspondence 'a'."
    },
    {
     "code": "o",
     "q": "Which example words demonstrate the sound symbol correspondence 'o'?",
     "idea": "SSC example: o",
     "content": "Appendix 1 gives dos and cinco as the two example words demonstrating the sound symbol correspondence 'o'."
    },
    {
     "code": "e",
     "q": "Which example words demonstrate the sound symbol correspondence 'e'?",
     "idea": "SSC example: e",
     "content": "Appendix 1 gives español and medio as the two example words demonstrating the sound symbol correspondence 'e'."
    },
    {
     "code": "i",
     "q": "Which example words demonstrate the sound symbol correspondence 'i'?",
     "idea": "SSC example: i",
     "content": "Appendix 1 gives idea and iglesia as the two example words demonstrating the sound symbol correspondence 'i'."
    },
    {
     "code": "u",
     "q": "Which example words demonstrate the sound symbol correspondence 'u'?",
     "idea": "SSC example: u",
     "content": "Appendix 1 gives universidad and instituto as the two example words demonstrating the sound symbol correspondence 'u'."
    },
    {
     "code": "ll",
     "q": "Which example words demonstrate the sound symbol correspondence 'll'?",
     "idea": "SSC example: ll",
     "content": "Appendix 1 gives llamar and calle as the two example words demonstrating the sound symbol correspondence 'll'."
    },
    {
     "code": "ch",
     "q": "Which example words demonstrate the sound symbol correspondence 'ch'?",
     "idea": "SSC example: ch",
     "content": "Appendix 1 gives leche and ocho as the two example words demonstrating the sound symbol correspondence 'ch'."
    },
    {
     "code": "ca",
     "q": "Which example words demonstrate the sound symbol correspondence 'ca'?",
     "idea": "SSC example: ca",
     "content": "Appendix 1 gives casa and chica as the two example words demonstrating the sound symbol correspondence 'ca'."
    },
    {
     "code": "co",
     "q": "Which example words demonstrate the sound symbol correspondence 'co'?",
     "idea": "SSC example: co",
     "content": "Appendix 1 gives coche and cocina as the two example words demonstrating the sound symbol correspondence 'co'."
    },
    {
     "code": "cu",
     "q": "Which example words demonstrate the sound symbol correspondence 'cu'?",
     "idea": "SSC example: cu",
     "content": "Appendix 1 gives escuchar and concurso as the two example words demonstrating the sound symbol correspondence 'cu'."
    },
    {
     "code": "cu + vowel",
     "q": "Which example words demonstrate the sound symbol correspondence 'cu + vowel'?",
     "idea": "SSC example: cu + vowel",
     "content": "Appendix 1 gives cuerpo and cuidado as the two example words demonstrating the sound symbol correspondence 'cu + vowel'."
    },
    {
     "code": "ce",
     "q": "Which example words demonstrate the sound symbol correspondence 'ce'?",
     "idea": "SSC example: ce",
     "content": "Appendix 1 gives cerca and doce as the two example words demonstrating the sound symbol correspondence 'ce'."
    },
    {
     "code": "ci",
     "q": "Which example words demonstrate the sound symbol correspondence 'ci'?",
     "idea": "SSC example: ci",
     "content": "Appendix 1 gives concierto and diecisiete as the two example words demonstrating the sound symbol correspondence 'ci'."
    },
    {
     "code": "z",
     "q": "Which example words demonstrate the sound symbol correspondence 'z'?",
     "idea": "SSC example: z",
     "content": "Appendix 1 gives zona and manzana as the two example words demonstrating the sound symbol correspondence 'z'."
    },
    {
     "code": "que",
     "q": "Which example words demonstrate the sound symbol correspondence 'que'?",
     "idea": "SSC example: que",
     "content": "Appendix 1 gives porque and querer as the two example words demonstrating the sound symbol correspondence 'que'."
    },
    {
     "code": "qui",
     "q": "Which example words demonstrate the sound symbol correspondence 'qui'?",
     "idea": "SSC example: qui",
     "content": "Appendix 1 gives tranquilo and equilibrado as the two example words demonstrating the sound symbol correspondence 'qui'."
    },
    {
     "code": "ga",
     "q": "Which example words demonstrate the sound symbol correspondence 'ga'?",
     "idea": "SSC example: ga",
     "content": "Appendix 1 gives ganar and gato as the two example words demonstrating the sound symbol correspondence 'ga'."
    },
    {
     "code": "go",
     "q": "Which example words demonstrate the sound symbol correspondence 'go'?",
     "idea": "SSC example: go",
     "content": "Appendix 1 gives largo and tengo as the two example words demonstrating the sound symbol correspondence 'go'."
    },
    {
     "code": "gu",
     "q": "Which example words demonstrate the sound symbol correspondence 'gu'?",
     "idea": "SSC example: gu",
     "content": "Appendix 1 gives preguntar and alguno as the two example words demonstrating the sound symbol correspondence 'gu'."
    },
    {
     "code": "ge",
     "q": "Which example words demonstrate the sound symbol correspondence 'ge'?",
     "idea": "SSC example: ge",
     "content": "Appendix 1 gives gente and imagen as the two example words demonstrating the sound symbol correspondence 'ge'."
    },
    {
     "code": "gi",
     "q": "Which example words demonstrate the sound symbol correspondence 'gi'?",
     "idea": "SSC example: gi",
     "content": "Appendix 1 gives gimnasio and región as the two example words demonstrating the sound symbol correspondence 'gi'."
    },
    {
     "code": "gue",
     "q": "Which example words demonstrate the sound symbol correspondence 'gue'?",
     "idea": "SSC example: gue",
     "content": "Appendix 1 gives hamburguesa and juguete as the two example words demonstrating the sound symbol correspondence 'gue'; the document marks juguete as Higher tier only."
    },
    {
     "code": "gui",
     "q": "Which example words demonstrate the sound symbol correspondence 'gui'?",
     "idea": "SSC example: gui",
     "content": "Appendix 1 gives guitarra and seguir as the two example words demonstrating the sound symbol correspondence 'gui'."
    },
    {
     "code": "j",
     "q": "Which example words demonstrate the sound symbol correspondence 'j'?",
     "idea": "SSC example: j",
     "content": "Appendix 1 gives ojo and naranja as the two example words demonstrating the sound symbol correspondence 'j'."
    },
    {
     "code": "ñ",
     "q": "Which example words demonstrate the sound symbol correspondence 'ñ'?",
     "idea": "SSC example: ñ",
     "content": "Appendix 1 gives mañana and cumpleaños as the two example words demonstrating the sound symbol correspondence 'ñ'."
    },
    {
     "code": "v",
     "q": "Which example words demonstrate the sound symbol correspondence 'v'?",
     "idea": "SSC example: v",
     "content": "Appendix 1 gives verde and verdad as the two example words demonstrating the sound symbol correspondence 'v'."
    },
    {
     "code": "-r-, -r",
     "q": "Which example words demonstrate the sound symbol correspondence '-r-, -r'?",
     "idea": "SSC example: -r-, -r",
     "content": "Appendix 1 gives pero and hablar as the two example words demonstrating the sound symbol correspondence '-r-, -r'."
    },
    {
     "code": "rr, r-, -r-",
     "q": "Which example words demonstrate the sound symbol correspondence 'rr, r-, -r-'?",
     "idea": "SSC example: rr, r-, -r-",
     "content": "Appendix 1 gives cerrar and sonreír as the two example words demonstrating the sound symbol correspondence 'rr, r-, -r-'."
    },
    {
     "code": "silent h",
     "q": "Which example words demonstrate the sound symbol correspondence 'silent h'?",
     "idea": "SSC example: silent h",
     "content": "Appendix 1 gives hospital and hoy as the two example words demonstrating the sound symbol correspondence 'silent h'."
    }
   ]
  }
 ],
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/spanish/specifications/AQA-8692-SP-2024.PDF",
  "etag": "\"1d5eca-6141972060900\"",
  "lastModified": "Wed, 20 Mar 2024 15:43:00 GMT",
  "length": 1924810,
  "checkedAt": "2026-09-21T08:44:04.837Z"
 }
};
module.exports = { SPEC_8692 };
