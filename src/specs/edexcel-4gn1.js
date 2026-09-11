/* Pearson Edexcel GCSE German (International GCSE) (4GN1) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_4GN1 = {
 "id": "EDX-4GN1",
 "board": "Pearson Edexcel",
 "subject": "German (International GCSE)",
 "code": "4GN1",
 "level": "GCSE",
 "version": "Specification Issue 1 – November 2016; for first teaching September 2017, first examination June 2019",
 "firstExam": 2019,
 "essaySubject": false,
 "components": [
  {
   "id": "P1",
   "name": "Paper 1: Listening",
   "paperCode": "4GN1/01",
   "marks": 40,
   "weight": 25,
   "minutes": 30,
   "coversAll": true,
   "sections": [
    "Externally assessed; availability June; first assessment June 2019. 25% of the total International GCSE.",
    "This paper assesses listening skills across five topic areas: Home and abroad; Education and employment; Personal life and relationships; The world around us; Social activities, fitness and health.",
    "Assessment is through a 30-minute examination paper set and marked by Pearson, plus five minutes' reading time. The total number of marks for the paper is 40.",
    "This paper will consist of seven tasks, each based on a single recorded text. Students will hear each text twice. Students may not bring a dictionary into the examination room."
   ]
  },
  {
   "id": "P2",
   "name": "Paper 2: Reading and Writing",
   "paperCode": "4GN1/02",
   "marks": 80,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "Externally assessed; availability June; first assessment June 2019. 50% of the total International GCSE.",
    "This paper assesses reading and writing skills in separate sections across five topic areas: Home and abroad; Education and employment; Personal life and relationships; The world around us; Social activities, fitness and health.",
    "Assessment is through a 1-hour and 45-minute examination paper set and marked by Pearson. The total number of marks for the paper is 80, with 40 marks for reading and 40 marks for writing.",
    "Reading: students should spend approximately 52 minutes of the 1-hour and 45-minute exam on this section, which is worth 50% of the paper and 25% of the qualification; five tasks, each based around a collection of short texts or a longer single text.",
    "Writing: students should spend approximately 52 minutes of the 1-hour and 45-minute exam on this section, which is worth 50% of the paper and 25% of the qualification; two writing tasks and a third grammar-based task."
   ]
  },
  {
   "id": "P3",
   "name": "Paper 3: Speaking",
   "paperCode": "4GN1/03",
   "marks": 40,
   "weight": 25,
   "minutes": 10,
   "coversAll": true,
   "sections": [
    "Externally assessed; availability June; first assessment June 2019. 25% of the total International GCSE.",
    "This paper assesses speaking skills across five topic areas, however sub-topics A3, C3, C5, D2 and E4 will not be assessed in this paper.",
    "The examination is made up of three tasks (A, B and C). Students will present and answer questions on a picture. They will also discuss two different topics, chosen at random by Pearson.",
    "Total assessment time is 8–10 minutes (Task A: 2 to 3 minutes; Task B: 3 to 3 minutes 30 seconds; Task C: 3 to 3 minutes 30 seconds; Tasks B and C should not exceed 7 minutes). The total number of marks for the paper is 40."
   ]
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Listening",
   "text": "Understand and respond, in writing, to spoken language. 25% in International GCSE; assessed wholly on Paper 1 (Paper 1: AO1 25%, AO2 0%, AO3 0%, AO4 0%).",
   "weight": 25,
   "byComponent": {
    "P1": 25
   }
  },
  {
   "id": "AO2",
   "label": "Writing",
   "text": "Communicate in writing, using a register appropriate to the situation, showing knowledge of a range of vocabulary in common usage and of the grammar and structures prescribed in the specification, and using them accurately. 25% in International GCSE; assessed wholly on Paper 2.",
   "weight": 25,
   "byComponent": {
    "P2": 25
   }
  },
  {
   "id": "AO3",
   "label": "Reading",
   "text": "Understand and respond, in writing, to written language. 25% in International GCSE; assessed wholly on Paper 2 (Paper 2: AO2 25%, AO3 25%).",
   "weight": 25,
   "byComponent": {
    "P2": 25
   }
  },
  {
   "id": "AO4",
   "label": "Speaking",
   "text": "Communicate in speech, showing knowledge of a range of vocabulary in common usage and of the grammar and structures prescribed in the specification, and using them accurately. 25% in International GCSE; assessed wholly on Paper 3.",
   "weight": 25,
   "byComponent": {
    "P3": 25
   }
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "The productive skills are marked against the levels grids printed in the specification, and each grid is applied separately. Paper 2, Question 6 (the 60–75 word task) carries two grids of 5 marks, Communication and content and Linguistic knowledge and accuracy: 5 needs a 'detailed and fully relevant response to the task', 'a clear ability to express ideas and opinions and to describe or inform' and language 'manipulated to produce fluent sentences', 'very accurate with only isolated minor errors, e.g. spellings, genders and agreements'; 2 is 'very familiar and predictable vocabulary and structures, often repetitive' with 'frequent misspellings, inaccurate genders and incorrect verb forms'. Question 7 (the 130–150 word task) carries two grids of 10 marks in bands of two: 9–10 for 'an excellent ability to express ideas in a logical sequence' that is 'confident, fluent, pertinent and purposeful', with an 'excellent range of vocabulary and grammatical structures, and secure use of at least three tenses, including some complex lexical items'; 7–8 requires 'secure use of at least two tenses'; 5–6 'unsteady use of two tenses'; 1–2 'use of only one tense'. Paper 3, Task A is marked out of 8 for Communication and content and 4 for Linguistic knowledge and accuracy; Tasks B and C together out of 12 for Communication and content, 8 for Interaction and spontaneity and 8 for Linguistic knowledge and accuracy — 40 marks in all. The speaking grids reward developed responses without prompting, opinions with justification, spontaneity and 'successful references to past, present and future events'; pronunciation and intonation are part of the Communication and content grid. Grammatical accuracy, punctuation and spelling are assessed in the writing section only. The document prints no levels grid for listening or for reading: those sections are 40 marks each of multiple-choice, multiple-matching, note-taking, table-completion, gap-fill and (in reading) short-answer questions, so they are point-marked; grammatical accuracy is not assessed in the reading section, and correct spelling is not a requirement in either as long as the student's response is comprehensible. For level fields, report the mark against the band descriptors of the grid being used.",
  "commandWords": [
   {
    "word": "beschreiben – to describe",
    "means": "Speaking Task A question type 1 is 'a description of what you can see in the picture'; the Paper 2 writing grids reward the ability 'to describe or inform, as appropriate to the task'. Naming objects alone is 'isolated words and phrases'; the marks come from detail, connected sentences and logical sequence."
   },
   {
    "word": "was? / wer? – what? / who?",
    "means": "Task A question type 2 asks for specific factual information about the picture, for example selecting a person or persons in the picture and stating what they are doing. A single-word answer is bottom band; the grid rewards responses 'with some development'."
   },
   {
    "word": "wann? – when?",
    "means": "Elicits time reference. Task A question type 3 must ask the candidate to imagine a possible past or potential future event relating to the picture, and Tasks B and C must 'elicit a range of tenses (past, present and future)'; the Linguistic knowledge and accuracy grids credit 'successful references to past, present and future events'."
   },
   {
    "word": "warum (nicht)? / wieso? – why (not)? / for what reason?",
    "means": "'Why (not)?' is one of only three prompts a teacher/examiner may use in Task A. Opinions expressed 'generally without justification' stay in the bottom band of Communication and content; 'fully-developed justification' is the top band."
   },
   {
    "word": "Anything else? / Is that all?",
    "means": "The other two permitted Task A prompts, printed in the specification in English. There must be no other supplementary questions and teachers/examiners must not deviate from these prompts, so a candidate who waits to be prompted loses marks for development and spontaneity."
   },
   {
    "word": "wie? – how?",
    "means": "Opens out an answer rather than closing it; examiners are told to avoid yes/no questions except as a lead-in to something more challenging, and to ask open questions that let candidates produce extended sequences of speech."
   },
   {
    "word": "welcher? – which?",
    "means": "Signals a choice: multiple-choice and multiple-matching tasks in Papers 1 and 2, and Question 7, where the student chooses one of three questions drawn from different topics."
   },
   {
    "word": "inwieweit? – to what extent?",
    "means": "Task A question type 5 (Evaluation): the question 'will move away from the content of the picture and exploit the wider topic area', so the answer must weigh the issue, not describe the picture again."
   },
   {
    "word": "wie viel(e)? – how much, how many?",
    "means": "Asks for specific detail; in listening and reading, the mark depends on extracting the exact figure, and correct spelling is not required as long as the response is comprehensible."
   },
   {
    "word": "wo? / wohin? – where? / where to?",
    "means": "Asks for place or destination; a staple of the directions, travel and transport sub-topics and of note-taking and table-completion tasks, where one detail earns one mark."
   },
   {
    "word": "besprechen – to discuss",
    "means": "Tasks B and C are spontaneous conversations on two topics not specifically prepared, selected at random from the randomisation grid; the candidate must initiate and develop the conversation independently, using rephrasing/repair strategies to sustain it."
   },
   {
    "word": "erzählen – to tell (a story)",
    "means": "Question 7 is marked for 'the narrative, report or description required'; ideas must follow a logical sequence and digression that obscures the theme or purpose is penalised."
   },
   {
    "word": "ausfüllen – to complete, to fill in",
    "means": "Names the receptive task types the specification lists: note-taking, table-completion and gap-fill in listening and reading. The response must be comprehensible; grammatical accuracy is not assessed in the reading section."
   },
   {
    "word": "wählen – to choose",
    "means": "The student selects their own picture for Task A before the exam; it must contain people, objects and interactions and must not contain any text that could support the responses. The topic chosen for Task A must differ from those drawn for Tasks B and C, or the task is discounted and scores zero."
   },
   {
    "word": "meiner Meinung nach – in my opinion",
    "means": "The speaking and writing grids both require opinions to be expressed and justified: 'expresses opinions with ease and gives fully-developed justification' is the top Task A band, and Tasks B and C reward using language creatively 'to express and justify a wide variety of individual thoughts, ideas and opinions'."
   },
   {
    "word": "Change the words in brackets",
    "means": "The instruction for the third, grammar-based writing task: change the words in brackets so that they correctly fit the sentences. This will involve the need to manipulate, for example, verbs and adjectives, into their correct word form."
   }
  ],
  "essayShapes": [
   {
    "marks": 10,
    "structure": "Question 6, the first writing task: 60–75 words including four prescribed words or short phrases, which must all be used. Marked on two 5-mark grids (Communication and content; Linguistic knowledge and accuracy). Five marks needs a detailed and fully relevant response with a clear ability to express ideas and opinions and to describe or inform, coherent with logical flow and sequence of ideas, and language manipulated into fluent sentences that is very accurate apart from isolated minor errors of spelling, gender and agreement. Grammatical accuracy, punctuation and spelling are assessed."
   },
   {
    "marks": 20,
    "structure": "Question 7, the second writing task: 130–150 words on one of three questions drawn from different topics, addressing four bullet points. Marked on two 10-mark grids in bands of two. The top band (9–10) needs ideas in a logical sequence, entirely coherent, confident, fluent, pertinent and purposeful, with an excellent range of vocabulary and grammatical structures, secure use of at least three tenses including some complex lexical items and no noticeable repetition; 7–8 requires secure use of at least two tenses, 5–6 unsteady use of two, 1–2 only one tense. Digression that obscures the theme or purpose is penalised."
   },
   {
    "marks": 10,
    "structure": "The third, grammar-based task: change the words in brackets so that they correctly fit the sentences, manipulating for example verbs and adjectives into their correct word form. The document prints no separate mark total for this task; the writing section is 40 marks and the assessment criteria print 5 + 5 for Question 6 and 10 + 10 for Question 7, so 10 marks remain for it. The grammar list in Section 2 is the syllabus for it: adjectival endings, cases, tenses, separable verbs and word order."
   }
  ]
 },
 "judged": {
  "score": 0.92,
  "coverage": 1,
  "fidelity": 0.92,
  "options": 1,
  "familyFit": 0.95,
  "at": "2026-09-11",
  "by": "a fresh Opus subagent reading the PDF page by page; see scratch/courses/EDX-4GN1/spec.verdict.json"
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/German/2017/specification-and-sample-assessments/International-GCSE-German-Specification.pdf",
  "etag": "W/\"17e0e6-65ab0d88fa7d4\"",
  "lastModified": "Fri, 04 Sep 2026 23:44:14 GMT",
  "length": 1564902,
  "checkedAt": "2026-09-11T17:00:07.427Z"
 },
 "topics": [
  {
   "id": "A",
   "component": "P2",
   "option": null,
   "name": "A. Home and abroad",
   "caseStudies": [
    "Appendix 1: Minimum core vocabulary list, Theme A – Home and abroad, sub-topics 1 Life in the town and rural life, 2 Holidays, tourist information and directions, 3 Services (e.g. bank, post office), 4 Customs, 5 Everyday life, traditions and communities",
    "Paper 3, Task A (picture-based discussion): a student-selected picture from a Theme A sub-topic, containing people, objects and interactions and no text, with five questions — description, specific factual information, past or future hypothesis, opinions, evaluation",
    "Paper 3, Tasks B and C (conversations): Theme A may be drawn at random from the randomisation grid; sub-topic A3 Services will not be assessed in Paper 3",
    "Paper 2, Question 6: a 60–75 word writing task including four prescribed words or short phrases",
    "Paper 2, Question 7: 130–150 words on one of three questions drawn from different topics, addressing four bullet points",
    "Paper 1: seven listening tasks and Paper 2 reading: five tasks on advertisements, short passages, letters, information leaflets, faxes, emails, website pages, newspaper and magazine articles and literary texts"
   ],
   "ideas": [
    {
     "code": "A1",
     "q": "How do I describe a town or the countryside, and say what there is to do there?",
     "idea": "Life in the town and rural life",
     "content": "Stadt (f) – town; Stadtmitte (f) – town centre; Dorf (n) – village; auf dem Lande – in the country; Vorort (m) – suburb; Gegend (f) – area; Landschaft (f) – landscape, scenery, countryside; Gebäude (n) – building; Rathaus (n) – town hall; Bibliothek (f) – library; Sehenswürdigkeit (f) – sight, place of interest; Fußgängerzone (f) – pedestrian precinct; Verkehr (m) – traffic; Bauernhof (m) – farm; Berg (m) – mountain; Fluss (m) – river; ruhig (ad) – quiet, peaceful; malerisch (ad) – picturesque; langweilig (adj) – boring; wohnen (v) – to live."
    },
    {
     "code": "A2",
     "q": "How do I book, describe and ask my way around a holiday?",
     "idea": "Holidays, tourist information and directions",
     "content": "Urlaub (m) – holiday; Ferien (pl) – holidays; Unterkunft (f) – accommodation; Jugendherberge (f) – youth hostel; Campingplatz (m) – campsite; Pension (f) – guest house; Halbpension (f) – half-board; Vollpension (f) – full board; buchen (v) – to book; reservieren (v) – to reserve; übernachten (v) – to spend the night, stay; Aufenthalt (m) – stay; Verkehrsamt (n) – tourist office; Stadtplan (m) – street map; besichtigen (v) – to visit, to look round; Aussicht (f) – view; Strand (m) – beach; Küste (f) – coast, seaside; Zelt (n) – tent; verbringen (v) – to spend (time); beschreiben (v) – to describe."
    },
    {
     "code": "A3",
     "q": "How do I deal with the bank, the post office and other services — including when something goes wrong?",
     "idea": "Services (e.g. bank, post office) — not assessed in Paper 3: Speaking",
     "content": "Postamt (n) – post office; Briefmarke (f) – postage stamp; Briefkasten (m) – letter box; abschicken (v) – to send, to post; schicken (v) – to send; Wechselstube (f) – bureau de change; Geld (n) – money; Auskunft (f) – information; Informationsbüro (n) – information office; Fundbüro (n) – lost property office; verlieren (v) – to lose; Verlust (m) – loss; Dieb/in (m/f) – thief; Polizeiwache (f) – police station; anrufen (v) – to ring, to phone; wählen (v) – to dial; Bleiben Sie bitte am Apparat – please hold the line; ausfüllen (v) – to complete, to fill in; reparieren (v) – to repair; es tut mir leid – I'm sorry. Sub-topic A3 will not be assessed in Paper 3: Speaking."
    },
    {
     "code": "A4",
     "q": "How do I talk about festivals and how people celebrate them?",
     "idea": "Customs",
     "content": "Fest (n) – celebration, festivity; feiern (v) – to celebrate; Weihnachten (n) – Christmas; frohe/fröhliche Weihnachten – merry Christmas; Weihnachtsbaum (m) – Christmas tree; Weihnachtsmann (m) – Father Christmas; Ostern (n) – Easter; Silvester (m) – New Year's Eve; ein glückliches neues Jahr – happy new year; Neujahr (n) – new year, New Year's Day; Karneval (m) – carnival; Geburtstag (m) – birthday; Geschenk (n) – present, gift; Geschenke austauschen (v) – to exchange gifts; Glückwunschkarte (f) – greetings card; Kerze (f) – candle; Feuerwerk (n) – fireworks; Kirche (f) – church; Moschee (f) – mosque; Valentinstag (m) – Valentine's Day."
    },
    {
     "code": "A5",
     "q": "What traditions and everyday customs belong to German-speaking communities?",
     "idea": "Everyday life, traditions and communities",
     "content": "Tradition (f) – tradition; Tracht (f) – traditional costume; Feiertag (m) – bank holiday; Tag der Deutschen Einheit (m) – Day of German Unity (3 October); Karneval (m), Fasching (m), Fastnacht (f) – Shrovetide, carnival; Umzug (m) – parade; Ostereier suchen (v) – to hunt for Easter eggs; Osterhase (m) – Easter bunny; Weihnachtslieder singen (v) – to sing carols; Kaffee und Kuchen (m) – afternoon coffee and cake; Currywurst (f) – traditional German sausage in curry sauce; Kuckucksuhr (f) – cuckoo clock; Kurort (m) – spa town; Nachbarschaft (f) – neighbourhood; Nachbar/Nachbarin (m/f) – neighbour; Wanderung (f) – walk, hike; Wintersport (m) – winter sports."
    }
   ]
  },
  {
   "id": "B",
   "component": "P2",
   "option": null,
   "name": "B. Education and employment",
   "caseStudies": [
    "Appendix 1: Minimum core vocabulary list, Theme B – Education and employment, sub-topics 1 School life and routine, 2 School rules and pressures, 3 School trips, events and exchanges, 4 Work, careers and volunteering, 5 Future plans",
    "Paper 3, Task A (picture-based discussion): a student-selected picture from a Theme B sub-topic, containing people, objects and interactions and no text, with five questions — description, specific factual information, past or future hypothesis, opinions, evaluation",
    "Paper 3, Tasks B and C (conversations): Theme B may be drawn at random from the randomisation grid; no Theme B sub-topic is excluded from Paper 3",
    "Paper 2, Question 6: a 60–75 word writing task including four prescribed words or short phrases",
    "Paper 2, Question 7: 130–150 words on one of three questions drawn from different topics, addressing four bullet points",
    "Paper 1 and Paper 2 reading: texts from both everyday life and academic contexts with which students will be familiar"
   ],
   "ideas": [
    {
     "code": "B1",
     "q": "How do I describe my school, my subjects and my school day?",
     "idea": "School life and routine",
     "content": "Schule (f) – school; Gymnasium (n) – grammar school; Grundschule (f) – primary school; Fach (n) – subject; Lieblingsfach (n) – favourite subject; Erdkunde (f) – geography; Naturwissenschaften (pl) – sciences; Stundenplan (m) – timetable; Stunde (f) – lesson; Unterricht (m) – lesson; Pause (f) – break, playtime; Hausaufgabe (f) – homework; Note (f) – mark, grade; Zeugnis (n) – report; Prüfung (f) – exam; Abitur (n) – equivalent to A Levels; Mittlere Reife (f) – equivalent to GCSEs; Klassenzimmer (n) – classroom; Schulhof (m) – playground; Lehrer/in (m/f) – teacher; Schüler/in (m/f) – pupil; lernen (v) – to learn; üben (v) – to practise; Arbeitspraktikum (n) / Berufspraktikum (n) – work experience; Studium (n) – university studies."
    },
    {
     "code": "B2",
     "q": "What are the rules and the pressures of school, and how do I give my opinion on them?",
     "idea": "School rules and pressures",
     "content": "Schulregel (f) – school rule; streng (ad) – strict; pünktlich (ad) – on time; nachsitzen – to be in detention; Pflichtfach (n) – compulsory, core subject; Wahlfach (n) – optional subject; freiwillig (ad) – optional; abwählen (v) – to drop/give up (a subject); eine Prüfung machen – to take an exam; eine Prüfung bestehen – to pass an exam; durchfallen – to fail an exam; eine Note bekommen – to get a grade/mark; Schularbeit (f) – test (in class); mündlich – oral (exam); schwer, schwierig (ad) – difficult; leicht, einfach (ad) – easy; Fehler (m) – mistake; etwas begabt, gut in sein – to be good at; Schuluniform items such as Krawatte (f) – tie; Schultasche (f) – rucksack/school bag; Gesamtschule (f) – comprehensive school."
    },
    {
     "code": "B3",
     "q": "How do I talk about a school trip, an exchange or a school event I have taken part in?",
     "idea": "School trips, events and exchanges",
     "content": "Klassenfahrt (f) – school trip; Ausflug (m) – excursion; Schulaustausch (m) – school exchange; Austauschpartner/-in (m/f) – exchange partner; Gastfamilie (f) – host family; gastfreundlich (ad) – welcoming; Heimweh (n) – homesickness; Aufenthalt (m) – stay; Erlebnis (n) – experience; erfahren, erleben – to experience; Schulfest (n) – school festival; Sportfest (n) – sports' day; Wettbewerb (m) – competition; konkurrieren (v) – to compete; Preisverleihung (f) – prize giving; Theaterstück (n) – play, theatre show; Zeremonie (f) – ceremony; Abiturfeier (f) – school leavers' party; Schultüte (f) – school cone (given on the first day of school); erfolgreich (ad) – successful."
    },
    {
     "code": "B4",
     "q": "How do I talk about jobs, work experience and applying for work?",
     "idea": "Work, careers and volunteering",
     "content": "Beruf (m) – occupation, profession; Stelle (f) – job, post, position; Arbeit (f) – work; arbeiten (v) – to work; arbeitslos (ad) – unemployed; Arbeitslosigkeit (f) – unemployment; Arbeitgeber/in (m/f) – employer; Angestellte(r) (f/m) – employee; Lehre (f) / Ausbildung (f) – apprenticeship; Lehrling (m) – apprentice; Ferienjob (m) – holiday job; sich bewerben um (v) – to apply for; Bewerbung (f) – application; Stellenanzeige (f) – job advertisement; verdienen (v) – to earn; Lohn (m) – wage(s), pay; Gehalt (n) – salary; gut/schlecht bezahlt – well/poorly paid; Wohltatsorganisation (f) – charity organisation; jobs such as Arzt/Ärztin, Kellner/in, Mechaniker/in, Verkäufer/in."
    },
    {
     "code": "B5",
     "q": "How do I say what I plan to do after school, using future and conditional forms?",
     "idea": "Future plans",
     "content": "Zukunft (f) – future; vorhaben (v) – to intend to; beschließen (v) – to decide; hoffen – to hope; wollen (v) – to want; brauchen (v) – to need; studieren (v) – to study for (an exam); Universität (f) – university; Universitätsabschluss (m) – university degree; Fachhochschule (f) – technical college; Jura (pl) – law (as a subject); Diplom (n) – diploma; Lehrlingsstelle (f) – an apprenticeship; sich um einen Platz bewerben (v) – to apply for a place; Vorstellungsgespräch (n) / Interview (n) – interview; Karriere (f) – career; leisten (v) – to achieve; qualifiziert (ad) – qualified; verlassen (v) – to leave; suchen (v) – to look for."
    }
   ]
  },
  {
   "id": "C",
   "component": "P2",
   "option": null,
   "name": "C. Personal life and relationships",
   "caseStudies": [
    "Appendix 1: Minimum core vocabulary list, Theme C – Personal life and relationships, sub-topics 1 House and home, 2 Daily routines and helping at home, 3 Role models, 4 Relationships with family and friends, 5 Childhood",
    "Paper 3, Task A (picture-based discussion): a student-selected picture from a Theme C sub-topic, containing people, objects and interactions and no text, with five questions — description, specific factual information, past or future hypothesis, opinions, evaluation",
    "Paper 3, Tasks B and C (conversations): Theme C may be drawn at random from the randomisation grid; sub-topics C3 Role models and C5 Childhood will not be assessed in Paper 3",
    "Paper 2, Question 6: a 60–75 word writing task including four prescribed words or short phrases",
    "Paper 2, Question 7: 130–150 words on one of three questions drawn from different topics, addressing four bullet points",
    "Paper 2 reading: a short literary extract, which may have been adapted and abridged from authentic sources — letters, short stories, novels or plays"
   ],
   "ideas": [
    {
     "code": "C1",
     "q": "How do I describe where I live, room by room?",
     "idea": "House and home",
     "content": "Haus (n) – house; Wohnung (f) – flat; Einfamilienhaus (n) – detached house; Zimmer (n) – room; Wohnzimmer (n) – sitting room, living room; Schlafzimmer (n) – bedroom; Esszimmer (n) – dining room; Küche (f) – kitchen; Badezimmer (n) – bathroom; Keller (m) – cellar; Erdgeschoss (n) – ground floor; im ersten Stock – on the first floor; Treppe (f) – stairs; Möbel (pl) – furniture; Sessel (m) – armchair; Kühlschrank (m) – fridge; Herd (m) – cooker; Waschmaschine (f) – washing machine; Spülmaschine (f) – dishwasher; Garten (m) – garden; Terrasse (f) – patio, terrace; bequem (ad) – comfortable; wohnen (v) / leben (v) – to live."
    },
    {
     "code": "C2",
     "q": "How do I describe my daily routine and the jobs I do at home, using reflexive and separable verbs?",
     "idea": "Daily routines and helping at home",
     "content": "aufstehen (v) – to get up; aufwachen (v) – to wake up; sich anziehen (v) – to get dressed; sich duschen – to shower; sich die Zähne putzen – to clean one's teeth; frühstücken (v) – to have breakfast; ins Bett gehen (v) – to go to bed; Wecker (m) – alarm clock; helfen (v) – to help; aufräumen (v) – to tidy up; abwaschen (v) / abspülen (v) – to wash up; den Tisch decken (v) – to set/lay the table; das Bett machen (v) – to make the bed; bügeln (v) – to iron; Staub saugen – to vacuum; Müll (m) – rubbish, refuse; Mülleimer (m) – dustbin; kochen (v) – to cook; einkaufen gehen (v) – to go shopping; oft (ad) – often; manchmal (ad) – sometimes; selten (ad) – rare(ly); früh (ad) – early; spät (ad) – late; Schrank (m) – cupboard."
    },
    {
     "code": "C3",
     "q": "Who are my role models and how do they influence people?",
     "idea": "Role models — not assessed in Paper 3: Speaking",
     "content": "(gutes/schlechtes) Vorbild – (good/bad) example, role model; Idol (n) – idol; berühmt (ad) – famous; Stars (pl) – celebrities; Popstar (m) – popstar; Schauspieler/in (m/f) – actor; Sportler/in (m/f) – sportsman/woman; Fußballspieler/in (m/f) – footballer; Unternehmer/in (m/f) – entrepreneur; Einfluss (m) – influence; beeinflussen (v) – to influence; nachmachen (v) – to copy, imitate; folgen – to follow; streben nach (v) – to aspire to; Verhalten (n) – behaviour; sich gut/schlecht verhalten (v) – to behave well/badly; verantwortlich (ad) – responsible; Presse (f) – press; soziale Netzwerke (pl) – social networks; Werbung (f) – adverts. Sub-topic C3 will not be assessed in Paper 3: Speaking; Fernsehen (n) – television."
    },
    {
     "code": "C4",
     "q": "How do I describe my family and friends, and say how I get on with them?",
     "idea": "Relationships with family and friends",
     "content": "Familie (f) – family; Eltern (pl) – parents; Bruder (m) – brother; Schwester (f) – sister; Halbbruder (m) – half-brother; Einzelkind (n) – only child; Zwilling (m) – twin; Verwandte (pl) – relatives; Freund/in (m/f) – friend; Freundschaft (f) – friendship; verheiratet (ad) – married; geschieden (ad) – divorced; ledig (ad) – single, unmarried; heiraten (v) – to marry; verliebt sein (v) – to be in love; teilen (v) – to share; treffen (v) – to meet; kennen lernen (v) – to meet (become acquainted with); character adjectives: freundlich – friendly, kind, nice, großzügig (ad) – generous, selbstsüchtig (ad) – selfish, schüchtern (ad) – shy, geschwätzig (ad) – chatty, faul (ad) – lazy, klug (ad) – clever, sympathisch (ad) – nice; appearance: groß, schlank, blond, lockig, Bart (m) – beard, Brille (f) – glasses."
    },
    {
     "code": "C5",
     "q": "How do I talk about my childhood using the imperfect and perfect tenses?",
     "idea": "Childhood — not assessed in Paper 3: Speaking",
     "content": "Kindheit (f) – childhood; Kind (n) – child; Baby (n) – baby; jung (ad) – young; aufwachsen (v) – to grow up; Jugendliche (m/f) – young person; Erwachsene (m/f) – grown-up; Spielzeug (n) – toy; Puppe (f) – doll; Spiel (n) – game; spielen, klettern (v) – to climb; springen (v) – to jump; laufen (v) – to run; weinen (v) – to cry; lachen; erzählen (v) – to tell (a story); ausschimpfen (v) – to tell off; mögen (v) – to like; gern haben (v) – to like; lieber haben (v) / vorziehen (v) / bevorzugen (v) – to prefer; hassen (v) – to hate; gefallen (v) – to like, to please; wiederholen (v) – to repeat. Sub-topic C5 will not be assessed in Paper 3: Speaking."
    }
   ]
  },
  {
   "id": "D",
   "component": "P2",
   "option": null,
   "name": "D. The world around us",
   "caseStudies": [
    "Appendix 1: Minimum core vocabulary list, Theme D – The world around us, sub-topics 1 Environmental issues, 2 Weather and climate, 3 Travel and transport, 4 The media, 5 Information and communication technology",
    "Paper 3, Task A (picture-based discussion): a student-selected picture from a Theme D sub-topic, containing people, objects and interactions and no text, with five questions — description, specific factual information, past or future hypothesis, opinions, evaluation",
    "Paper 3, Tasks B and C (conversations): Theme D may be drawn at random from the randomisation grid; sub-topic D2 Weather and climate will not be assessed in Paper 3",
    "Paper 2, Question 6: a 60–75 word writing task including four prescribed words or short phrases",
    "Paper 2, Question 7: 130–150 words on one of three questions drawn from different topics, addressing four bullet points",
    "Paper 1: recorded texts in the form of short statements, monologues and dialogues between two or three speakers, heard twice"
   ],
   "ideas": [
    {
     "code": "D1",
     "q": "How do I discuss environmental problems and what can be done about them?",
     "idea": "Environmental issues",
     "content": "Umwelt (f) – environment; umweltbewusst (ad) – environmentally aware; verschmutzt (ad) – polluted; schmutzig (ad) – dirty; sauber (ad) – clean; Recycling (n) – recycling; retten (v) – to save; zerstören (v) – to destroy; Erwärmung (f) – warming; global (ad) – global; Treibhauseffekt (m) – greenhouse effect; saurer Regen (m) – acid rain; Regenwald (m) – rainforest; Erde (f) – earth, world; Welt (f) – world; Energie (f) – energy; (Atom)kraft (f) – (nuclear) energy; Kohle (f) – coal; Erdöl (n) – crude oil; Benzin (n) – petrol; Katastrophe (f) – catastrophe; Überschwemmung (f) – flood; Dürre (f) – drought; Erdbeben (n) – earthquake; (Wald)brand (m) – (forest) fire; vom Aussterben bedroht (ad) – endangered; Tierart (f) – animal species; Verkehrsstau (m) – traffic jam."
    },
    {
     "code": "D2",
     "q": "How do I describe the weather and talk about the climate?",
     "idea": "Weather and climate — not assessed in Paper 3: Speaking",
     "content": "Wetter (n) – weather; Wetterbericht (m) – weather report; Wettervorhersage (f) – weather forecast; Klima (n) – climate; Klimaänderung (f) – climate change; Jahreszeit (f) – season; Temperatur (f) – temperature; Grad (m) – degree; heiß (ad) – hot; warm (ad) – warm; kalt (ad) – cold; Hitze (f) – heat; Kälte (f) – cold; Sonne (f) – sun; sonnig (ad) – sunny; Regen (m) – rain; regnen (v) – to rain; Regenschauer (m) – shower; Schnee (m) – snow; schneien (v) – to snow; Wolke (f) – cloud; wolkig/bewölkt (ad) – cloudy; bedeckt (ad) – overcast; Nebel (m) – fog; nebelig (ad) – foggy; Wind (m) – wind; windig (ad) – windy; Sturm (m) – storm; Donner (m) – thunder; Nord, Süd, Ost, West. Sub-topic D2 will not be assessed in Paper 3: Speaking."
    },
    {
     "code": "D3",
     "q": "How do I travel, buy a ticket and ask for directions?",
     "idea": "Travel and transport",
     "content": "Verkehrsmittel (n) – means of transport; Zug (m) – train; Bahnhof (m) – (railway) station; Bahnsteig (m) – platform; Gleis (n) – track, platform; Fahrkarte (f) – ticket; Einzelfahrkarte (f) – single ticket; Rückfahrkarte (f) – return ticket; hin und zurück – return, there and back; einsteigen (v) – to get on; aussteigen (v) – to get off; umsteigen (v) – to change; Verspätung (f) – delay; verpassen (v) – to miss (train, bus); Flughafen (m) – airport; Flugzeug (n) – plane; abfliegen (v) – to depart (by plane); landen (v) – to land; Fähre (f) – ferry; U-Bahn (f) – underground, tube; Straßenbahn (f) – tram; Haltestelle (f) – stop; Autobahn (f) – motorway; Panne (f) – breakdown, puncture; Tankstelle (f) – petrol station; Führerschein (m) – driving licence; directions: links, rechts, geradeaus, Kreuzung (f) – crossroads, Kreisverkehr (m) – roundabout, in der Nähe von – near, wie komme ich…? – How do I get (to …)?"
    },
    {
     "code": "D4",
     "q": "How do I talk about television, film, music and the press, and give my opinion of them?",
     "idea": "The media",
     "content": "fernsehen (v) – to watch television; Sendung (f) – programme, broadcast; Programm (n) – programme, channel; Sender (m) – broadcaster, station; Nachrichten (pl) – news; Tagesschau (f) – television news; Seifenoper (f) – soap opera; Dokumentation (Doku) (f) – documentary; Reality-TV (n) – reality television; Gameshow (f) – game show; Trickfilm (m) – cartoon; Gruselfilm (m) – horror film; Komödie (f) – comedy; Spezialeffekte (pl) – special effects; mit Untertiteln – subtitled; synchronisiert (ad) – dubbed; herumzappen (v) – to channel hop; Zeitung (f) – newspaper; Werbespot (m) – advertisement; Vorstellung (f) – performance, showing; Eintritt (m) – admission; Schauspieler/in (m/f) – actor/actress; opinion adjectives: lustig – funny, komisch – funny, spannend, traurig – sad, rührend (ad) – moving."
    },
    {
     "code": "D5",
     "q": "How do I talk about phones, the internet and social networks?",
     "idea": "Information and communication technology",
     "content": "Computer (m) – computer; Laptop (m, n) – laptop; Bildschirm (m) – screen, monitor; Tastatur (f) – keyboard; Maus (f) – mouse; Handy (n) / Mobiltelefon (n) – mobile phone; Smartphone (n) – smartphone; SMS (f) – text message; E-mail (f or n) – email; Passwort (n) – password; Website (f) – website; Homepage (f) – homepage; surfen (v) – to surf (browse) the internet; klicken (v) – to click; herunterladen/downloaden (v) – to download; hochladen (v) – to upload; kopieren (v) – to copy; ausschneiden (v) – to cut (text); einfügen (v) – to paste (text); chatten (v) – to chat (online); Chatroom (m) – chat room; plaudern (v) – to chat; skypen (v) – to skype; soziales Netz (n) – social network; Wifi (n) – Wi-Fi; Software (f) – software; Satellitenfernsehen (n) – satellite TV."
    }
   ]
  },
  {
   "id": "E",
   "component": "P2",
   "option": null,
   "name": "E. Social activities, fitness and health",
   "caseStudies": [
    "Appendix 1: Minimum core vocabulary list, Theme E – Social activities, fitness and health, sub-topics 1 Special occasions, 2 Hobbies, interests, sports and exercise, 3 Shopping and money matters, 4 Accidents, injuries, common ailments and health issues, 5 Food and drink",
    "Paper 3, Task A (picture-based discussion): a student-selected picture from a Theme E sub-topic, containing people, objects and interactions and no text, with five questions — description, specific factual information, past or future hypothesis, opinions, evaluation",
    "Paper 3, Tasks B and C (conversations): Theme E may be drawn at random from the randomisation grid; sub-topic E4 Accidents, injuries, common ailments and health issues will not be assessed in Paper 3",
    "Paper 2, Question 6: a 60–75 word writing task including four prescribed words or short phrases",
    "Paper 2, Question 7: 130–150 words on one of three questions drawn from different topics, addressing four bullet points",
    "Paper 2 reading: advertisements, short passages, letters, information leaflets, faxes, emails, website pages, and newspaper and magazine articles"
   ],
   "ideas": [
    {
     "code": "E1",
     "q": "How do I describe a celebration, a party or a day out, and the social language that goes with it?",
     "idea": "Special occasions",
     "content": "Geburtstag (m) – birthday; Party, Fete (f) – party; Hochzeit (f) – wedding; Braut (f) – bride; Bräutigam (m) – bridegroom; Verlobung (f) – engagement; Verlobte (m/f) – fiancé(e); Zeremonie (f) – ceremony; Geschenk (n) – present; Schmuck (m) – jewellery; Kuchen (m) – cake; Picknick (n) – picnic; Ausflug (m) – outing, excursion; Freizeitpark (m) – theme park; Wasserpark (m) – water park; Zoo (m) / Tiergarten (m) – zoo; Zirkus (m) – circus; Museum (n) – museum; begrüßen (v) – to welcome; herzlichen Glückwunsch (m) – congratulations; guten Appetit – enjoy your meal; vorstellen (v) – to introduce; umarmen (v) – to hug, embrace; küssen (v) – to kiss; duzen (v) – to address with the familiar 'du'; siezen (v) – to use the polite form of address; spannend (ad) – exciting, gripping; eindrucksvoll (ad) – impressive."
    },
    {
     "code": "E2",
     "q": "How do I talk about what I do in my free time and how much sport I do?",
     "idea": "Hobbies, interests, sports and exercise",
     "content": "Freizeit (f) – free time, spare time; Hobby (n) – hobby, pastime; Sport treiben (v) – to do/play sport; spielen (v) – to play; Mannschaft (f) – team; Spiel (n) – game, match; Spieler/in (m/f) – player; Schläger (m) – racket; Fußball (m) – football; Leichtathletik (f) – athletics; Turnen (n) – gymnastics; schwimmen (v) – to swim; Rad fahren (v) – to ride a bike, go cycling; reiten (v) – to ride (a horse); segeln (v) – to sail; Ski laufen (v) – to ski; wandern (v) – to hike, to go rambling; joggen (v) – to jog; tauchen (v) – to dive; tanzen (v) – to dance; musizieren (v) – to play a musical instrument; Klavier (n) – piano; Geige (f) – violin; Schlagzeug (n) – drums; Brettspiel (n) – board game; Schach (n) – chess; Lesen (n) – reading; Roman (m) – novel; Jugendklub (m) – youth club; sich amüsieren (v) – to enjoy oneself; sich ausruhen, relaxen (v) – to rest, relax."
    },
    {
     "code": "E3",
     "q": "How do I shop, ask the price and talk about money?",
     "idea": "Shopping and money matters",
     "content": "einkaufen gehen (v) – to go shopping; Einkäufe machen – to do one's shopping; kaufen (v) – to buy; verkaufen (v) – to sell; bestellen (v) – to order; Geschäft, Laden (m) – small shop; Kaufhaus (n) – department store; Einkaufszentrum (n) – shopping centre, mall; Markt (m) – market; Bäckerei (f) – baker's shop; Metzgerei (f) – butcher's shop; Apotheke (f) – chemist's (dispensing); Drogerie (f) – chemist's (non-dispensing); Abteilung (f) – department; Kasse (f) – till, cash desk, checkout; Selbstbedienung (f) – self-service; Preis (m) – price; kosten (v) – to cost; teuer (ad) – expensive; billig (ad) – cheap; preiswert (ad) – good value, inexpensive; Ausverkauf (m) – clearance sale; Schlussverkauf (m) – end of season sale; Rechnung (f) – bill; Kreditkarte (f) – credit card; Kleingeld (n) – (small or loose) change; Taschengeld (n) – pocket money; sparen (v) – to save; ausgeben – to spend (money); Größe (f) – size; wie viel(e) – how much, how many."
    },
    {
     "code": "E4",
     "q": "How do I say what is wrong with me and describe an accident or a healthy lifestyle?",
     "idea": "Accidents, injuries, common ailments and health issues — not assessed in Paper 3: Speaking",
     "content": "Gesundheit (f) – health; gesund (ad) – healthy; krank (ad) – ill, sick; Krankheit (f) – illness; sich krank fühlen – to feel ill, sick; weh tun (sich) – to hurt (oneself); Schmerzen: Kopfschmerzen (pl) – headache, Halsschmerzen (pl) – sore throat, Bauchschmerzen (pl) – tummy ache, Zahnschmerzen (pl) – toothache; Fieber (n) – temperature, fever; Grippe (f) – flu; erkältet sein (v) – to have a cold; husten (v) – to cough; Unfall (m) – accident; verletzt (ad) – injured; verletzen (v) – to injure, to hurt; gebrochen – broken; Erste Hilfe leisten (v) – to give first aid; Krankenwagen (m) – ambulance; Krankenhaus (n) – hospital; Arzt/Ärztin (m/f) – doctor; Sprechstunde (f) – surgery; Termin (m) – appointment; Rezept (n) – prescription; Tablette (f) – tablet; Spritze (f) – injection; rauchen (v) – to smoke; Alkohol (m) – alcohol; abnehmen (v) – to lose weight; zunehmen (v) – to put on weight; Übung (f) – exercise; Stress (m) – stress; body parts: Arm, Bein, Kopf, Hals, Auge, Ohr, Rücken. Sub-topic E4 will not be assessed in Paper 3: Speaking."
    },
    {
     "code": "E5",
     "q": "How do I talk about meals, order food and say what I like to eat?",
     "idea": "Food and drink",
     "content": "Essen (n) – food; Mahlzeit (f) – meal; Frühstück (n) – breakfast; Mittagessen (n) – lunch; Abendessen (n) – evening meal, supper; Hauptgericht (n) – main course; Nachspeise (f) – dessert; Tagesgericht (n) – today's special; essen (v) – to eat; trinken (v) – to drink; schmecken – to taste; lecker (ad) – delicious, tasty; Geschmack (m) – flavour; Brot (n) – bread; Brötchen (n) – bread roll; Butterbrot (n) – sandwich; Fleisch (n) – meat; Rindfleisch (n) – beef; Schweinefleisch (n) – pork; Schinken (m) – ham; Bratwurst (f) – fried sausage; Fisch (m) – fish; Gemüse (n) – vegetables; Kartoffel (f) – potato; Nudeln (pl) – pasta, noodles; Reis (m) – rice; Apfel (m) – apple; Birne (f) – pear; Erdbeere (f) – strawberry; Traube (f) – grape; Milch (f) – milk; Saft (m) – juice; Mineralwasser (n) – mineral water; Sahne (f) – cream; Salz (n) – salt; Pfeffer (m) – pepper; bedienen (v) – to serve; Vegetarier/in (m/f) – vegetarian; Rezept (n) – recipe."
    }
   ]
  },
  {
   "id": "non-topic-specific",
   "component": "P2",
   "option": null,
   "name": "Non-topic-specific vocabulary (Appendix 1)",
   "caseStudies": [
    "Appendix 1: Minimum core vocabulary list — 'Non-topic-specific vocabulary', the section that follows Themes A–E: Abbreviations/acronyms, Social conventions, Prepositions, Coordinating conjunctions, Subordinating conjunctions, Adjectives, Verbs, Adverbs, Colours, Quantities, Connecting words, Time expressions, Question words, Other general expressions, Other words, Countries and continents, Nationalities, Geographical areas and mountains",
    "Assessment tasks targeted at grades 1 to 5 will be based on this vocabulary list, although they may include some unfamiliar vocabulary; occasional glossing of individual words may occur",
    "As well as specified vocabulary, students will be expected to have knowledge of numbers, times, days of the week, months etc.",
    "The list does not include easily recognisable cognates or near cognates, words in common use in English, or English words in common use in German",
    "Paper 3, Tasks A, B and C and Paper 2, Questions 6 and 7: the connecting words, question words and general expressions that turn short answers into extended sequences of speech and writing"
   ],
   "ideas": [
    {
     "code": "Abbreviations/acronyms",
     "q": "Which German abbreviations should I recognise?",
     "idea": "Abbreviations and acronyms",
     "content": "ADAC (m) – General German Automobile Association; ARD (f) – first German national TV channel; ZDF (n) – second German national TV channel; BRD (f) (Bundesrepublik Deutschland) – FRG (Federal Republic of Germany); DB (f) (Deutsche Bahn) – German railways; DFB (m) (Deutscher Fußballbund) – German Football Association; ICE (m) (Intercityexpress) – German high-speed train; LKW (m) (Lastkraftwagen) – lorry, HGV, truck; PKW (m) (Personenkraftwagen) – car; MWSt (f) (Mehrwertsteuer) – VAT."
    },
    {
     "code": "Social conventions",
     "q": "How do I greet, thank and take leave of someone?",
     "idea": "Social conventions",
     "content": "guten Morgen – good morning; guten Tag – good day, hello; gute Nacht – good-night; auf Wiedersehen – goodbye; tschüs/tschüss – bye; bis bald – see you later; bis morgen – see you tomorrow; bitte – please; danke schön – thanks very much; Entschuldigung – excuse me, sorry; alles Gute – all the best; hilfe – help."
    },
    {
     "code": "Prepositions",
     "q": "Which prepositions must I know, and what do they mean?",
     "idea": "Prepositions",
     "content": "an – on; auf – on; aus – from, out of; außer – except for; bei – at, with, at the home of; bis – until, by, up to; durch – through; für – for; gegen – against; gegenüber – opposite; hinter – behind; in – in; in der Nähe von – close to; im Falle von – in case of; mit – with; nach – after, according to; neben – next to, beside; oben – at the top, upstairs; ohne – without; seit – since, for; statt – instead of; über – over, about (a subject); um – at, round, around; unter – under, among; von – of, from; vor – in front of, before; während – during; wegen – because of; weit von – far from; zu – to, toward; zwischen – between. The Grammar list requires fixed case and dual case with accusative and/or dative, and the genitive prepositions."
    },
    {
     "code": "Coordinating conjunctions",
     "q": "Which conjunctions join clauses without changing the word order?",
     "idea": "Coordinating conjunctions",
     "content": "aber – but; denn – because; oder – or; und – and. The Grammar list requires co-ordinating and subordinating conjunctions, and main clause word order is unaffected by these four."
    },
    {
     "code": "Subordinating conjunctions",
     "q": "Which conjunctions send the verb to the end?",
     "idea": "Subordinating conjunctions",
     "content": "als – when, as; bevor – before; bis – until; da – because, as; damit – so that (purpose); dass – that; nachdem – after; obwohl – although; sobald – as soon as; so dass – so that (result); während – while; weil – because; wenn – if, when; wo – where. The Grammar list requires subordinate clauses, including relative clauses."
    },
    {
     "code": "Adjectives",
     "q": "Which general adjectives should I be able to use and compare?",
     "idea": "Adjectives",
     "content": "allein – alone; alt – old; ander/andere – other; bequem – comfortable; besser – better; böse – angry, bad; brav – well behaved; dankbar – thankful, grateful; dick – fat; dünn – thin; echt – real, genuine; ekelhaft – disgusting; ernst – serious; erschöpft – exhausted; falsch – incorrect, false; früh – early; gebrochen – broken; letzt – last; Lieblings – favourite; müde – tired; nächst – next; nah – near; neu – new; nötig/notwendig – necessary; nützlich – useful; perfekt – perfect; prima – great; reif – mature, ripe; richtig – correct, true; ruhig – quiet, peaceful; sauber – clean; satt – full (after eating); schlecht – bad; schlimm – bad; schmutzig – dirty; schrecklich – terrible, dreadful."
    },
    {
     "code": "Verbs",
     "q": "Which general verbs must I be able to conjugate in every tense?",
     "idea": "Verbs",
     "content": "abnehmen – to lose weight; ändern – to change, to alter; bezahlen – to pay (for); bitten um – to ask for; bleiben – to stay; brauchen – to need; buchen – to book, reserve; dauern – to last; denken – to think; drucken – to print; erklären – to explain; erzählen – to tell; fragen – to ask; finden – to find; fliegen – to fly; folgen – to follow; gehören – to belong to; glauben – to believe; halten – to stop, to hold; hören – to hear, listen to; kommen – to come; laufen – to run, walk; leben – to live; leiden – to suffer; meinen – to think; sollen – to be supposed to, ought, should; sparen – to save (money); sprechen – to speak; üben – to practise; verbessern – to improve, correct; verbringen – to spend (time); verdienen – to earn; vergessen – to forget; verkaufen – to sell; sich vorbereiten auf – to prepare for; wählen – to choose, to dial, to vote; werfen – to throw; zuhören – to listen."
    },
    {
     "code": "Adverbs",
     "q": "Which adverbs qualify what I say, and how do they compare?",
     "idea": "Adverbs",
     "content": "bald – soon; besonders – above all, especially; besser – better; dort – there; (da) drüben – (over) there; draußen – outside; fast – almost; gut – well; her – here (toward); hier – here; hin – there (outward); immer (noch) – always, still; lange – long, a long time; lieber – rather; manchmal – sometimes; mehr – more; neulich – recently; (dort) oben – up (there); oft – often; schlecht – badly; schon – already; sehr – very; sofort – immediately; überall – everywhere; unten – down, down there; vielleicht – perhaps; ziemlich – quite, fairly, rather."
    },
    {
     "code": "Colours",
     "q": "Which colours must I know, and how do they take endings?",
     "idea": "Colours",
     "content": "blau – blue; braun – brown; dunkel – dark; gelb – yellow; grau – grey; grün – green; hell – bright, light; lila – lilac, purple; orange – orange; rosa – pink; rot – red; schwarz – black; weiß – white. Used attributively they take the adjectival endings the Grammar list requires."
    },
    {
     "code": "Quantities",
     "q": "How do I say how much of something there is?",
     "idea": "Quantities",
     "content": "ein bisschen – a bit; einige – some; genug – enough; mehrere – several; viel(e) – a lot of, many, much; wenig(e) – few, little; Hälfte (f) – half; Drittel (n) – third; Viertel (n) – quarter; Dutzend (n) – dozen; Hundert – hundred; Tausend – thousand; Dose (f) – tin, can; Flasche (f) – bottle; Kännchen (n) – jug, pot; Päckchen (n) – packet; Packung (f) – pack, packet; Paket (n) – pack, packet; Schachtel (f) – box, packet; Scheibe (f) – slice; Stück (n) – piece."
    },
    {
     "code": "Connecting words",
     "q": "How do I sequence what I say?",
     "idea": "Connecting words",
     "content": "aber – but; also – so, therefore, well; auch – also, too; dann – then; erst – first; oder – or; und – and; zuerst – first (of all). The speaking and writing grids reward a logical flow and sequence of ideas, which these words signal."
    },
    {
     "code": "Time expressions",
     "q": "How do I place an event in time?",
     "idea": "Time expressions",
     "content": "heute – today; gestern – yesterday; morgen – tomorrow; morgen früh – tomorrow morning; übermorgen – the day after tomorrow; am nächsten Tag – on the following day; jeden Tag – every day; täglich – daily, every day; jetzt – now; bald – soon, shortly; am Anfang – at the beginning; Anfang (m) – beginning; Morgen (m) – morning; Vormittag (m) – morning; Mittag (m) – midday; Nachmittag (m) – afternoon; Abend (m) – evening; Nacht (f) – night; Mitternacht (f) – midnight; halb – half; pünktlich – punctual(ly), on time; Woche (f) – week; zwei Wochen – fortnight; Monat (m) – month; Jahr (n) – year; im Frühling, im Sommer, im Herbst, im Winter – in the spring, summer, autumn, winter."
    },
    {
     "code": "Question words",
     "q": "How do I ask a question in German?",
     "idea": "Question words",
     "content": "inwieweit – to what extent?; wann? – when?; warum? – why?; was? – what?; welcher? – which?; wer? – who?; wie? – how?; wieso? – why, for what reason?; wieviel(e)? – how much/many?; wo? – where?; wohin? – where to? The Grammar list also requires interrogative pronouns (wer, wen, wem), interrogative adjectives (e.g. welcher) and interrogative adverbs (e.g. wie, wann)."
    },
    {
     "code": "Other general expressions",
     "q": "Which set phrases lift a response above the predictable?",
     "idea": "Other general expressions",
     "content": "meiner Meinung nach – in my opinion; das kommt darauf an – it depends; das ist mir egal / es ist mir egal – I don't mind, I don't care; es gibt – there is/there are; gewöhnlich – usually; im Begriff sein – to be about to; mit großem Vergnügen – with great pleasure; natürlich – of course, naturally; noch einmal – once again; schade – shame, pity; umso besser – so much the better; umso schlimmer – so much the worse; viel Glück – good luck; bitte schön/sehr – you're welcome; Wie geht's? – How are you?; Wie schreibt man das? – How do you spell …?; etwas/jemanden satt haben – to have had enough of something/someone."
    },
    {
     "code": "Other words",
     "q": "Which small words hold a sentence together?",
     "idea": "Other words",
     "content": "auf diese Weise – in this way; Art (f) – sort, type; da – as, because; daher – so, therefore; Ding (n) – thing; Ende (n) – end; etwas – something; Frau – Mrs, Ms; Herr – Mr; gern – with pleasure; ja – yes; nein – no; jedermann – everyone; jemand – someone; jen – that, those; Mitte (f) – middle, centre; Nachteil (m) – disadvantage; Vorteil (m) – advantage; Nummer (f) – number; Sache (f) – thing; Schluss (m) – end; so – so (intensifier); weil – because; Zahl (f) – number, figure; Zeit (f) – time; zum Beispiel – for example."
    },
    {
     "code": "Countries and continents",
     "q": "How do I name countries and continents in German?",
     "idea": "Countries and continents",
     "content": "Deutschland – Germany; Österreich – Austria; die Schweiz – Switzerland; das Vereinigte Königreich – United Kingdom; Großbritannien – Great Britain; England – England; Schottland – Scotland; Wales – Wales; Irland – Ireland; Frankreich – France; Spanien – Spain; Italien – Italy; Portugal – Portugal; Griechenland – Greece; die Niederlande – the Netherlands; Belgien – Belgium; Luxemburg – Luxembourg; Liechtenstein – Liechtenstein; Dänemark – Denmark; Norwegen – Norway; Schweden – Sweden; Island – Iceland; Polen – Poland; Ungarn – Hungary; Russland – Russia; die Türkei – Turkey; China – China; Japan – Japan; Indien – India; Pakistan – Pakistan; Bangladesch – Bangladesh; Kanada – Canada; die Vereinigten Staaten – United States; Nordamerika, Südamerika, Afrika, Asien, Australien, Europa."
    },
    {
     "code": "Nationalities",
     "q": "How do I say what nationality someone is?",
     "idea": "Nationalities",
     "content": "Deutsche/r (f/m) – German; Österreicher/in (m/f) – Austrian; Schweizer/in (m/f) – Swiss; Engländer/in (m/f) – Englishman/Englishwoman; Schotte/Schottin (m/f) – Scot; Waliser/in (m/f) – Welshman/Welshwoman; Ire/Irin (m/f) – Irishman/Irishwoman; Franzose (m)/Französin (f) – Frenchman/Frenchwoman; Spanier/in (m/f) – Spaniard; Italiener/in (m/f) – Italian; Portugiese/Portugiesin (m/f) – Portuguese; Grieche/Griechin (m/f) – Greek; Holländer/in (m/f) – Dutchman/Dutchwoman; Belgier/in (m/f) – Belgian; Däne/Dänin (m/f) – Dane; Norweger/in (m/f) – Norwegian; Schwede/Schwedin (m/f) – Swede; Türke/Türkin (m/f) – Turk; Amerikaner/in, Kanadier/in, Chinese/Chinesin, Japaner/in, Inder/in, Bangladescher/in, Afrikaner/in, Asiat/in, Europäer/in. The Grammar list notes adjectives used as nouns (e.g. ein Deutscher)."
    },
    {
     "code": "Geographical areas and mountains",
     "q": "Which German place names should I recognise?",
     "idea": "Geographical areas and mountains",
     "content": "Bayern – Bavaria; der Bodensee – Lake Constance; der Schwarzwald – the Black Forest; die Alpen – the Alps; Genf – Geneva; Köln – Cologne; München – Munich; Wien – Vienna."
    }
   ]
  },
  {
   "id": "grammar-list",
   "component": "P2",
   "option": null,
   "name": "Grammar list",
   "caseStudies": [
    "Paper 2, the third grammar-based task: change the words in brackets so that they correctly fit the sentences, manipulating for example verbs and adjectives into their correct word form",
    "Paper 2, Question 6 (60–75 words including four prescribed words or short phrases) and Question 7 (130–150 words, four bullet points): grammatical accuracy, punctuation and spelling are assessed in this section",
    "Paper 2, Question 7 top band: secure use of at least three tenses, including some complex lexical items",
    "Paper 3, Tasks A, B and C: questions must elicit a range of tenses (past, present and future); the grids credit successful references to past, present and future events",
    "Structures marked (R) in the list require receptive knowledge only; the examples in brackets are indicative, not exclusive"
   ],
   "ideas": [
    {
     "code": "Nouns",
     "q": "What must I know about German nouns?",
     "idea": "Nouns: gender, plurals, cases, weak nouns",
     "content": "Gender; singular and plural forms, including genitive singular and dative plural; weak nouns; adjectives used as nouns (e.g. ein Deutscher). Students are expected to have acquired this knowledge during the course and to apply it to the examination tasks."
    },
    {
     "code": "Articles",
     "q": "Which articles must I be able to use, and in which cases?",
     "idea": "Articles: definite, indefinite and kein",
     "content": "Definite and indefinite articles, and kein — in the nominative, accusative, dative and genitive cases required by the nouns, prepositions and clause structures elsewhere in the list."
    },
    {
     "code": "Adjectives",
     "q": "How do adjective endings and comparisons work?",
     "idea": "Adjectives: endings, comparison, demonstrative, possessive, interrogative",
     "content": "Adjectival endings: predicative and attributive usage, singular and plural, used after definite and indefinite articles, demonstrative and possessive adjectives; adjectival endings after etwas, nichts, viel, wenig, alles; comparative and superlative, regular and common irregular forms, including besser, höher, näher; demonstrative (dieser, jener, etc.); possessive; interrogative (e.g. welcher)."
    },
    {
     "code": "Adverbs",
     "q": "How do I form and compare adverbs, and which adverbs must I know?",
     "idea": "Adverbs: comparison, interrogative, time and place, adverbial phrases",
     "content": "Comparative and superlative: regular and common irregular forms, including besser, am besten; interrogative (e.g. wie, wann); adverbs of time and place (e.g. heute, morgen, hier, dort); common adverbial phrases."
    },
    {
     "code": "Quantifiers/intensifiers",
     "q": "How do I make a statement stronger or weaker?",
     "idea": "Quantifiers and intensifiers",
     "content": "Quantifiers and intensifiers, e.g. sehr, ziemlich, viel, wenig, ein bisschen. The examples in brackets are indicative, not exclusive."
    },
    {
     "code": "Pronouns",
     "q": "Which pronouns must I use, and in what order?",
     "idea": "Pronouns: personal, reflexive, object, possessive, relative, indefinite, interrogative",
     "content": "Personal: all subjects, including man; reflexive: accusative and dative; object: direct and indirect; position and order of object pronouns; possessive (e.g. meiner, meine, meins); relative: all cases, including use of was; indefinite (e.g. jemand); interrogative (e.g. wer, wen, wem)."
    },
    {
     "code": "Verbs",
     "q": "Which verb forms and tenses must I be able to use?",
     "idea": "Verbs: forms, modals, infinitive constructions and the tenses",
     "content": "Regular and irregular forms of verbs, including reflexive verbs; all persons of verbs, singular and plural; negative forms; interrogative forms; modes of address: du, ihr, Sie; impersonal verbs (e.g. es gibt, es geht, es tut weh); infinitive constructions (e.g. ohne… zu…; um… zu…); verbs with zu…; separable and inseparable verbs; modal verbs: present and imperfect tenses; subjunctive of mögen, können and sollen. Tenses: present; perfect, excluding modals; imperfect; future; conditional: würde with infinitive; imperfect subjunctive in conditional clauses: haben and sein; pluperfect; imperative forms."
    },
    {
     "code": "Prepositions",
     "q": "Which case does each preposition take?",
     "idea": "Prepositions: fixed case, dual case and genitive",
     "content": "Fixed case and dual case with accusative and/or dative; with genitive (e.g. außerhalb, statt, trotz, während, wegen). Appendix 1 lists the prepositions themselves under 'Non-topic-specific vocabulary', e.g. an, auf, aus, außer, bei, durch, für, gegen, gegenüber, hinter, in, mit, nach, neben, ohne, seit, über, um, unter, von, vor, während, wegen, zu, zwischen."
    },
    {
     "code": "Clause structures",
     "q": "Where does the verb go in a German sentence?",
     "idea": "Clause structures: main and subordinate word order",
     "content": "Main clause word order; subordinate clauses, including relative clauses. This is what the third, grammar-based writing task manipulates, and what the Linguistic knowledge and accuracy grids mean by 'language manipulated to produce fluent sentences'."
    },
    {
     "code": "Conjunctions",
     "q": "How do I join clauses without breaking the word order?",
     "idea": "Conjunctions: co-ordinating and subordinating",
     "content": "Co-ordinating and subordinating conjunctions. Appendix 1 lists them: co-ordinating aber, denn, oder, und; subordinating als, bevor, bis, da, damit, dass, nachdem, obwohl, sobald, so dass, während, weil, wenn, wo."
    },
    {
     "code": "Numbers, quantity, dates and time",
     "q": "How do I handle numbers, dates, times and 'for how long'?",
     "idea": "Numbers, quantity, dates and time, including seit",
     "content": "Numbers, quantity, dates and time, including use of seit with present and imperfect tenses. Appendix 1 adds that, as well as specified vocabulary, students will be expected to have knowledge of numbers, times, days of the week, months etc."
    }
   ]
  },
  {
   "id": "1.2",
   "component": "P1",
   "option": null,
   "name": "Paper 1: Listening — 1.1 Introduction and 1.2 Content",
   "caseStudies": [
    "Seven listening tasks, each based on a single recorded text, heard twice",
    "Task types: multiple-choice, multiple-matching, note-taking, table-completion and gap-fill questions",
    "Recorded texts: short statements, monologues, and dialogues between two or three speakers, with each speaker clearly signposted",
    "The five topic areas: Home and abroad; Education and employment; Personal life and relationships; The world around us; Social activities, fitness and health",
    "Appendix 1: Minimum core vocabulary list — assessment tasks targeted at grades 1 to 5 will be based on this vocabulary list, although they may include some unfamiliar vocabulary"
   ],
   "ideas": [
    {
     "code": "1.1",
     "q": "What must I be able to do with spoken German?",
     "idea": "Listening skills the paper tests",
     "content": "Students are required to convey their understanding of spoken German through a series of listening tasks. Students must be able to: identify and note main points; deduce the meaning of words from context; extract specific details; identify points of view; show some understanding of unfamiliar language; recognise attitudes, emotions and opinions. Specialist and/or technical German vocabulary or detailed specialist knowledge of the topics are not required."
    },
    {
     "code": "1.2",
     "q": "What is the shape of the listening paper?",
     "idea": "Format: 30 minutes, 40 marks, seven tasks",
     "content": "The listening examination lasts 30 minutes and is worth a quarter (25%) of the qualification. It consists of 40 marks. This paper will consist of seven tasks, each based on a single recorded text. Students will be given five minutes to read the questions before the paper begins and will be expected to respond to the questions as they listen. Students will hear each text twice. Students may not bring a dictionary into the examination room."
    },
    {
     "code": "1.2 Recorded texts",
     "q": "What will I actually hear?",
     "idea": "The recorded texts and their contexts",
     "content": "Recorded texts may be in the form of short statements, monologues, and dialogues between two or three speakers. Where there are two or three speakers, the identity of each speaker will be clearly signposted. Recordings and tasks will always be contextualised and, where appropriate, a purpose for the task will be identified. The topics of the listening texts will be taken from a range of different situations, from both everyday life and academic contexts with which students will be familiar."
    },
    {
     "code": "1.2 Task types",
     "q": "How am I asked to answer, and does spelling count?",
     "idea": "Task types and the marking of responses",
     "content": "The examination will begin with shorter statements, which build into short paragraphs and longer conversations. One task type may be used with each listening text. Task types demand a variety of input from students and include multiple-choice, multiple-matching, note-taking, table-completion and gap-fill questions. Correct spelling will not be a requirement as long as the student's response is comprehensible."
    }
   ]
  },
  {
   "id": "2.2-reading",
   "component": "P2",
   "option": null,
   "name": "Paper 2: Reading and Writing — 2.2 Content: Reading",
   "caseStudies": [
    "Five reading tasks, each based around a collection of short texts or a longer single text",
    "A short literary extract, adapted and abridged from authentic sources — letters, short stories, novels or plays, contemporary and historical",
    "Sources: advertisements, short passages, letters, information leaflets, faxes, emails, website pages, and newspaper and magazine articles and literary texts",
    "Task types: multiple-choice, multiple-matching, note-taking, table-completion, gap-fill and short-answer questions",
    "The five topic areas, tested through non-verbal responses and answers in German"
   ],
   "ideas": [
    {
     "code": "2.1 Reading",
     "q": "What must I be able to do with written German?",
     "idea": "Reading skills the section tests",
     "content": "Students are required to convey their understanding of written German through a series of reading tasks. Students must be able to: identify and note main points; deduce the meaning of words from context; extract specific details; identify points of view; show some understanding of unfamiliar language; recognise attitudes, emotions and opinions. Specialist and/or technical German vocabulary or detailed specialist knowledge of the topics are not required."
    },
    {
     "code": "2.2 Reading",
     "q": "What is the shape of the reading section?",
     "idea": "Format: approximately 52 minutes, 40 marks, five tasks",
     "content": "Students should spend approximately 52 minutes of the 1-hour and 45-minute exam on this section, which is worth 50% of the paper and 25% of the qualification. It consists of 40 marks. This section will consist of five tasks, each based around a collection of short texts or a longer single text."
    },
    {
     "code": "2.2 The literary text",
     "q": "What is the literary text, and where does it come from?",
     "idea": "The literary extract and the range of authentic sources",
     "content": "The literary text consists of a short extract from a text that may have been adapted and abridged from authentic sources to be appropriate to this level — from letters, short stories, novels or plays to contemporary and historical sources. Students will be required to read a range of authentic factual and non-factual written material of varying length, in different registers and contexts, and from different sources. These may include advertisements, short passages, letters, information leaflets, faxes, emails, website pages, and newspaper and magazine articles and literary texts."
    },
    {
     "code": "2.2 The questions",
     "q": "How do I answer, and what is and is not marked here?",
     "idea": "Responses, reading techniques and what is not assessed",
     "content": "The questions will require a combination of non-verbal responses and answers in German. In order to answer the questions, students will need to use a range of reading techniques such as skimming, scanning and in-depth reading for details. Grammatical accuracy will not be assessed in this section of the paper. Correct spelling will not be a requirement as long as the student's response is comprehensible. Task types demand a variety of input from students and include multiple-choice, multiple-matching, note-taking, table-completion, gap-fill and short-answer questions."
    }
   ]
  },
  {
   "id": "2.2-writing",
   "component": "P2",
   "option": null,
   "name": "Paper 2: Reading and Writing — 2.2 Content: Writing",
   "caseStudies": [
    "Question 6: the first writing task — 60–75 words, including four prescribed words or short phrases",
    "Question 7: the second writing task — one of three questions drawn from different topics, 130–150 words, addressing four bullet points",
    "The third grammar-based task: change the words in brackets so that they correctly fit the sentences",
    "Audiences the section names: friends and acquaintances, teachers, family members, groups and professional bodies",
    "2.3 Assessment criteria: the Question 6 grids (Communication and content 0–5; Linguistic knowledge and accuracy 0–5) and the Question 7 grids (Communication and content 0–10; Linguistic knowledge and accuracy 0–10)"
   ],
   "ideas": [
    {
     "code": "2.1 Writing and grammar",
     "q": "What is this section asking me to do as a writer?",
     "idea": "Writing and grammar: audiences, forms and vocabulary",
     "content": "Students need to draw on their knowledge of German language, grammar and lexis in selecting appropriate forms of words to complete sentences, and demonstrate an ability to manipulate German language in continuous writing. As part of their International GCSE, students should undertake regular writing activities. This section will require students to: write for a variety of audiences, such as friends and acquaintances, teachers, family members, groups and professional bodies; write using a wide range of grammatical forms and structures; write using a wide range of relevant and appropriate vocabulary."
    },
    {
     "code": "2.2 Writing",
     "q": "What is the shape of the writing section?",
     "idea": "Format: approximately 52 minutes, 40 marks, three tasks",
     "content": "Students should spend approximately 52 minutes of the 1-hour and 45-minute exam on this section, which is worth 50% of the paper and 25% of the qualification. It consists of 40 marks. This section will consist of two writing tasks and a third grammar-based task. Grammatical accuracy, punctuation and spelling will be assessed in this section of the paper."
    },
    {
     "code": "2.2 The first writing task",
     "q": "What does the short writing task require?",
     "idea": "Question 6: 60–75 words with four prescribed words or short phrases",
     "content": "The first writing task is short, and the student will be asked to write 60–75 words, including four prescribed words or short phrases. It is marked on two 5-mark grids. Five marks for Communication and content needs a detailed and fully relevant response showing a clear ability to express ideas and opinions and to describe or inform, coherent with logical flow and sequence of ideas; five for Linguistic knowledge and accuracy needs a range of vocabulary and grammatical structures, language manipulated to produce fluent sentences, and very accurate writing with only isolated minor errors, e.g. spellings, genders and agreements."
    },
    {
     "code": "2.2 The second writing task",
     "q": "What does the longer writing task require?",
     "idea": "Question 7: 130–150 words on one of three questions, four bullet points",
     "content": "The second writing task is longer than the first and contains an element of choice. The student will be able to choose from three questions that are drawn from different topics, and they will need to write between 130 and 150 words in response to the question, addressing four bullet points. It is marked on two 10-mark grids in bands of two: 9–10 needs an excellent ability to express ideas in a logical sequence, a response that is entirely coherent, confident, fluent, pertinent and purposeful, an excellent range of vocabulary and grammatical structures and secure use of at least three tenses, including some complex lexical items and no noticeable repetition; 7–8 requires secure use of at least two tenses; 5–6 unsteady use of two tenses; 1–2 use of only one tense."
    },
    {
     "code": "2.2 In the third grammar-based task",
     "q": "What does the grammar task ask me to manipulate?",
     "idea": "The third, grammar-based task: words in brackets into their correct form",
     "content": "In the third grammar-based task students will be asked to change the words in brackets so that they correctly fit the sentences. This will involve the need to manipulate, for example, verbs and adjectives, into their correct word form. The Grammar list in Section 2 is its syllabus: adjectival endings after definite and indefinite articles, cases after prepositions, verb tenses including perfect, imperfect, future and conditional, separable verbs, and main and subordinate clause word order."
    }
   ]
  },
  {
   "id": "3.2",
   "component": "P3",
   "option": null,
   "name": "Paper 3: Speaking — 3.2 Content: Tasks A, B and C",
   "caseStudies": [
    "Task A (picture-based discussion), 2 to 3 minutes: a student-selected picture that must contain people, objects and interactions and must not contain any text that could support the student's responses",
    "Task A question types, in order: 1 a description of what you can see in the picture; 2 specific factual information about the picture; 3 past or future hypothesis; 4 opinions about the picture; 5 evaluation, moving away from the picture to the wider topic area",
    "The only permitted prompts: Why (not)? · Anything else? · Is that all?",
    "Tasks B and C (conversations on topics), 3 to 3 minutes 30 seconds each, not exceeding 7 minutes together, on two topics selected at random from Pearson's randomisation grid",
    "Three distinct topics must be examined across Tasks A, B and C; if any topics are the same the task(s) are discounted and the candidate receives zero marks for that task(s)",
    "Sub-topics A3, C3, C5, D2 and E4 will not be assessed in Paper 3",
    "Appendix 6: Candidate cover sheet (Paper 3: Speaking), with the declaration of authentication the candidate and teacher/examiner must sign"
   ],
   "ideas": [
    {
     "code": "3.1",
     "q": "What must I be able to do in the speaking test?",
     "idea": "Speaking skills the paper tests",
     "content": "Students are required to convey their understanding of spoken German through three speaking tasks. Students must be able to: describe the contents of a picture; describe possible past or future events related to people in the picture; respond to questions about the picture and its related topic; take part in a spontaneous conversation on two further topics. In each conversation students must develop their responses, show initiative, express and justify points of view and refer to past, present and future events."
    },
    {
     "code": "3.2 Task A",
     "q": "How does the picture-based discussion work?",
     "idea": "Task A (picture-based discussion)",
     "content": "The intention of this task is to enable students to speak about a situation or scenario with which they have some familiarity. Students will have to select a picture before the exam, from any sub-topic area excluding sub-topics A3, C3, C5, D2 and E4. The assessment must be conducted entirely in German; students must not take notes into the examination but should bring their picture. Task A lasts 2 to 3 minutes and the tasks must be conducted in consecutive order."
    },
    {
     "code": "3.2 Tasks B and C",
     "q": "How do the two conversations work, and how are the topics chosen?",
     "idea": "Tasks B and C (conversations on topics)",
     "content": "The intention of Tasks B and C is to test students on two topics that have not been specifically prepared so as to test spontaneity of response. The teacher/examiner uses the randomisation grid provided by Pearson to determine which topic is to be examined in Tasks B and C. Sub-topics A3, C3, C5, D2 and E4 will not be assessed. Three distinct topics must be examined across Tasks A, B and C: the topic for Task A must differ from the topic drawn for Task B, and the topic for Task C must differ from both. If any topics are the same, the task(s) will be discounted and the candidate will receive zero marks for that task(s)."
    },
    {
     "code": "3.3 Picture selection in Task A",
     "q": "What must my picture contain?",
     "idea": "Preparation: choosing a picture that gives access to the full range of criteria",
     "content": "To ensure students have access to the full range of assessment criteria and the opportunity to score well in Task A, it is essential they select a picture which follows the guidelines. The picture MUST contain the following elements: people; objects; interactions. The picture must not contain any text that could support students in their responses. Students must provide a copy of the picture for the teacher/examiner in advance of the test. Teachers/examiners may not practise Task A with their students using the picture they will be using in the test; they may use other pictures on the same topic."
    },
    {
     "code": "3.4 Timings of the tasks",
     "q": "How long does each task last?",
     "idea": "Conduct of the test: timings, language and recording",
     "content": "The total assessment time is 8–10 minutes. Students are assessed on the quality of responses so the length of tasks is representative of their relative demand. Task A: 2 to 3 minutes; Task B: 3 to 3 minutes 30 seconds; Task C: 3 to 3 minutes 30 seconds. Task C should continue without a pause or interruption from Task B, and Tasks B and C should not exceed 7 minutes. Excess candidate material will not be assessed. The assessment must be conducted entirely in German, in one continuous session, and all candidates' speaking tests must be recorded; the recording must not be paused or stopped during a test."
    },
    {
     "code": "3.4 Instructions for Task A",
     "q": "What five questions will I be asked about my picture?",
     "idea": "The five Task A question types, asked in order",
     "content": "Teachers/examiners must ask each candidate five questions in total (plus the allowed prompts), one from each question type and in this order. Question type 1: a description of what you can see in the picture. Question type 2: specific factual information about the picture, for example select a person or persons in the picture and state what they are doing. Question type 3: past or future hypothesis — the question must ask the candidate to imagine a possible past or potential future event relating to the picture, supporting the use of additional tenses and time frames. Question type 4: opinions about the picture and the topic. Question type 5: evaluation, moving away from the content of the picture to exploit the wider topic area."
    },
    {
     "code": "3.4 Prompts",
     "q": "What help can the examiner give me?",
     "idea": "The three permitted prompts",
     "content": "In order to enable candidates to develop their responses teachers/examiners are allowed to use prompts for questions. Only the following three prompts may be used: Why (not)?; Anything else?; Is that all? There must be no other supplementary questions and teachers/examiners must not deviate from these prompts. Examiners must never correct a candidate's language, however inaccurate, during a test, and must not point at anything in the picture."
    },
    {
     "code": "3.4 Instructions for Tasks B and C",
     "q": "What will the examiner do in the conversations?",
     "idea": "How the conversations are conducted",
     "content": "For each conversation teachers/examiners should: ask open questions; ask questions at an appropriate level of the candidate's ability; link the questions to the previous response as far as possible; elicit a range of tenses (past, present and future), structures and vocabulary; elicit opinions and justifications; provide candidates with an opportunity to expand; respect timings. Yes/no questions are avoided except as a lead-in to something more challenging, and candidates who repeat pre-learned or memorised material should be encouraged to produce more spontaneous discourse."
    },
    {
     "code": "3.5 Task A",
     "q": "How is Task A marked?",
     "idea": "Task A criteria: Communication and content (0–8) and Linguistic knowledge and accuracy (0–4)",
     "content": "Task A carries two grids, both AO4. Communication and content 7–8: responds to questions with consistently fluent and developed responses; consistently effective adaptation of language to describe, narrate and inform; expresses opinions with ease and gives fully-developed justification; pronunciation and intonation are consistently accurate and intelligible. Linguistic knowledge and accuracy 4: consistently accurate grammatical structures, successful references to past, present and/or future events; responses are fully coherent and any errors do not hinder the clarity of communication. At 1–2 for Communication and content, responses may be single words with much hesitation and continuous prompting."
    },
    {
     "code": "3.5 Tasks B and C",
     "q": "How are the conversations marked?",
     "idea": "Tasks B and C criteria: Communication and content (0–12), Interaction and spontaneity (0–8), Linguistic knowledge and accuracy (0–8)",
     "content": "Tasks B and C carry three grids, all AO4. Communication and content 10–12: communicates detailed information relevant to the topics and questions, consistently extended sequences of speech, consistently uses language creatively to express and justify a wide variety of individual thoughts, ideas and opinions, and a wide variety of vocabulary including uncommon language. Interaction and spontaneity 7–8: responds spontaneously and with ease, consistently able to initiate and develop the conversation independently, able to sustain communication throughout using rephrasing/repair strategies. Linguistic knowledge and accuracy 7–8: manipulates a wide variety of grammatical structures, frequent use of complex structures, consistently successful references to past, present and future events, fully coherent speech."
    }
   ]
  }
 ]
};
module.exports = { SPEC_4GN1 };
