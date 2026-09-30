/* AQA GCSE French (8652) — built on the Message Batches API from the official specification PDF (see spec.source for
   provenance) with the Worker's own pipeline: claude-opus-5 outlined, claude-sonnet-5 mapped each topic, claude-opus-5 judged the map
   against the document at 80% (coverage 0.87, fidelity 0.82, options 0.92, family fit 0.85).
   Family: language. Content statements are the board's own, condensed; codes are copied character for character.
   Judge's notes: A solid, largely faithful map. All four skills are modelled as components with the document's own 25% weightings, tiering flagged in the names, and both tiers' marks/minutes preserved in sections even though the numeric marks/minutes fields carry the Higher-tier figures (50 marks; 45/12/60/75 minutes) — defensible but worth stating that Foundation is 40 marks/35 min (Listening), 7–9 min (Speaking), 45 min (Reading) and 70 min (Writing). Paper 2 is correctly flagged nea. The paperCode field is missing from every component and should be an empty string, since AQA prints no paper codes. Topics fo */
const SPEC_8652 = {
 "id": "AQA-8652",
 "board": "AQA",
 "subject": "French",
 "code": "8652",
 "level": "GCSE",
 "version": "Version 1.2 August 2026",
 "firstExam": 2026,
 "essaySubject": false,
 "components": [
  {
   "id": "paper1",
   "name": "Paper 1: Listening (Foundation and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 45,
   "sections": [
    "Understanding and responding to spoken extracts comprising the defined vocabulary and grammar for each tier",
    "Dictation of short, spoken extracts",
    "Section A – listening comprehension questions in English, to be answered in English or non-verbally (32 marks at Foundation tier and 40 marks at Higher tier)",
    "Section B – dictation where students transcribe short sentences, including a small number of words from outside the prescribed vocabulary list (8 marks at Foundation tier and 10 marks at Higher tier)",
    "Written exam: 35 minutes (Foundation tier), 45 minutes (Higher tier); 40 marks (Foundation tier), 50 marks (Higher tier), including five minutes' reading time at the start and two minutes' checking time at the end",
    "Assessment is set in the context of the three themes, which apply to all four question papers"
   ],
   "coversAll": true
  },
  {
   "id": "paper2",
   "name": "Paper 2: Speaking (Foundation and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 12,
   "sections": [
    "Speaking using clear and comprehensible language to undertake a Role-play",
    "Carry out a Reading aloud task",
    "Talk about visual stimuli",
    "Role-play – 10 marks (recommended to last between 1 and 1.5 minutes at both tiers)",
    "Reading aloud task and short conversation – 15 marks (minimum 35 words of text at Foundation tier and 50 words at Higher tier, plus short unprepared conversation)",
    "Photo card discussion – 25 marks (response to the content of the photos on the card and unprepared conversation)",
    "Non-exam assessment (NEA): 7–9 minutes (Foundation tier) or 10–12 minutes (Higher tier) + 15 minutes' supervised preparation time",
    "Assessment is set in the context of the three themes, which apply to all four question papers"
   ],
   "nea": true,
   "coversAll": true
  },
  {
   "id": "paper3",
   "name": "Paper 3: Reading (Foundation and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 60,
   "sections": [
    "Understanding and responding to written texts which focus predominantly on the vocabulary and grammar at each tier",
    "Inferring plausible meanings of single words when they are embedded in written sentences",
    "Translating from French into English",
    "Section A – reading comprehension questions in English, to be answered in English or non-verbally (40 marks)",
    "Section B – translation from French into English, minimum of 35 words at Foundation tier and 50 words at Higher tier (10 marks)",
    "Written exam: 45 minutes (Foundation tier), 1 hour (Higher tier); 50 marks for each tier",
    "Assessment is set in the context of the three themes, which apply to all four question papers"
   ],
   "coversAll": true
  },
  {
   "id": "paper4",
   "name": "Paper 4: Writing (Foundation and Higher tier)",
   "marks": 50,
   "weight": 25,
   "minutes": 75,
   "sections": [
    "Writing text in the language in a lexically and grammatically accurate way in response to simple and familiar stimuli",
    "Translating from English into French",
    "Foundation tier: Question 1 five short sentences in response to a photo (10 marks); Question 2 short piece of writing in response to five compulsory bullet points, approximately 50 words (10 marks); Question 3 five short grammar tasks (5 marks); Question 4 translation of sentences from English into French, minimum 35 words (10 marks); Question 5 (overlap question) piece of writing in response to three compulsory bullet points, approximately 90 words, choice from two questions (15 marks)",
    "Higher tier: Question 1 translation of sentences from English into French, minimum 50 words (10 marks); Question 2 (overlap question) piece of writing in response to three compulsory bullet points, approximately 90 words, choice from two questions (15 marks); Question 3 open-ended writing task responding to two bullets, approximately 150 words, choice from two questions (25 marks)",
    "Written exam: 1 hour 10 minutes (Foundation tier), 1 hour 15 minutes (Higher tier); 50 marks for each tier",
    "Assessment is set in the context of the three themes, which apply to all four question papers"
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
  "summary": "Paper 1 Section A (listening comprehension) and Paper 3 (reading, including Section B translation into English) are point-marked: responses are assessed according to a detailed mark scheme published each year and the appropriate mark(s) are awarded if the student has satisfactorily communicated his or her understanding; Paper 4 Question 3 (Foundation) is also point-marked from the published mark scheme. The productive work is levels-marked: Paper 1 Section B dictation uses separate level grids for Communication of meaning (AO1) and Transcription and grammatical accuracy (AO3) (4+4 marks at Foundation, 5+5 at Higher), the Paper 2 Role-play awards 0–2 per task for AO2 while Reading aloud, response to compulsory questions and the Photo card discussion use level grids for AO1, AO2 and AO3, and the Paper 4 extended writing questions use level grids for AO2 (content/bullet coverage) and AO3 (range, accuracy, time frames), with the translations marked on Grid one (rendering of the original meaning, 15 ticks converted to a mark out of five) and Grid two (knowledge of vocabulary and grammar). A mark of zero for AO1/AO2 automatically results in a mark of zero for AO3; a major error is one which adversely affects communication, a minor error is one which does not affect communication; vocabulary and grammar not on the defined list are given equal credit.",
  "commandWords": [
   {
    "word": "Tell me about the photos",
    "means": "Teacher's prompt for the Photo card: convey information about both photos on the card (at least one thing about each) for approximately 1 minute at Foundation tier and 1.5 minutes at Higher tier; AO2 marks are awarded for this response"
   },
   {
    "word": "Read aloud",
    "means": "Pronounce a short prepared French text (minimum 35 words Foundation, 50 words Higher) applying the sound symbol correspondences so as to be understood by a native speaker; marked for AO3 pronunciation"
   },
   {
    "word": "Translate into English",
    "means": "Give an appropriate and sufficient rendering of the meaning of the original French (Paper 3 Section B)"
   },
   {
    "word": "Translate into French",
    "means": "Give an appropriate and sufficient rendering of the meaning of the original English using the prescribed vocabulary and grammatical structures (Paper 4 translation)"
   },
   {
    "word": "Write five sentences about the photo",
    "means": "Produce five separate short sentences, each marked out of 2 for AO2, clearly communicating a relevant message"
   },
   {
    "word": "Write approximately 50 / 90 / 150 words",
    "means": "Cover all compulsory bullet points; the word count is approximate and demonstration of the mark descriptors matters more"
   },
   {
    "word": "Complete the sentence",
    "means": "Write the correct word from three options to complete each short sentence, testing accurate application of the prescribed grammar (5 marks AO3)"
   },
   {
    "word": "Answer the question / ask a question",
    "means": "In the Role-play, convey the message on the Candidate card without ambiguity, including asking a question as instructed"
   },
   {
    "word": "Dictation",
    "means": "Transcribe short spoken sentences heard three times, with credit for accurate spelling (AO1 meaning and AO3 transcription)"
   }
  ],
  "essayShapes": [
   {
    "marks": 10,
    "minutes": 14,
    "structure": "Foundation Question 1: five short sentences about a photo, each worth up to 2 marks for AO2; language of limited complexity in a familiar context"
   },
   {
    "marks": 10,
    "minutes": 14,
    "structure": "Foundation Question 2: short text of approximately 50 words covering five compulsory bullet points; AO2 (5) for bullet coverage and clarity, AO3 (5) for variety and accuracy"
   },
   {
    "marks": 5,
    "minutes": 7,
    "structure": "Foundation Question 3: five short grammar tasks — complete each sentence with the correct word from three options (AO3)"
   },
   {
    "marks": 10,
    "minutes": 14,
    "structure": "Foundation Question 4: translation of sentences from English into French, minimum 35 words; Grid one rendering of meaning (15 ticks to 5 marks) plus Grid two knowledge of vocabulary and grammar (5 marks)"
   },
   {
    "marks": 15,
    "minutes": 21,
    "structure": "Foundation Question 5 (overlap with Higher Question 2): approximately 90 words on three compulsory bullet points, choice of 5.1 or 5.2; AO2 (10) coverage, clarity and development, AO3 (5) variety, complexity, time frames and accuracy"
   },
   {
    "marks": 10,
    "minutes": 15,
    "structure": "Higher Question 1: translation of sentences from English into French, minimum 50 words; Grid one rendering of meaning plus Grid two knowledge of vocabulary and grammar"
   },
   {
    "marks": 15,
    "minutes": 22,
    "structure": "Higher Question 2 (overlap with Foundation Question 5): approximately 90 words on three compulsory bullet points, choice of 2.1 or 2.2; AO2 (10) and AO3 (5)"
   },
   {
    "marks": 25,
    "minutes": 38,
    "structure": "Higher Question 3: open-ended writing task of approximately 150 words on two compulsory bullet points, choice of 3.1 or 3.2; AO2 (15) information and development, AO3 split between Grid one range and use of language (5) and Grid two accuracy (5); one bullet only caps AO2 at 12"
   }
  ],
  "timingNote": "The specification prints only whole-paper times for Paper 4 (Foundation tier 1 hour 10 minutes = 70 minutes for 50 marks; Higher tier 1 hour 15 minutes = 75 minutes for 50 marks) and no time per question. The minutes shown for each shape are therefore computed by splitting the paper's total time across its questions in proportion to marks: Foundation at 1.4 minutes per mark (14 + 14 + 7 + 14 + 21 = 70) and Higher at 1.5 minutes per mark, rounded to whole minutes (15 + 22 + 38 = 75)."
 },
 "topics": [
  {
   "id": "3.1.1",
   "component": "paper2",
   "option": null,
   "name": "Theme 1: People and lifestyle",
   "caseStudies": [
    "Role-play: based on a stimulus card prepared immediately before the test, with tasks on the Candidate card given in English containing unambiguous instructions about what to say; students must ask a question as part of the Role-play; recommended to last between 1 and 1.5 minutes at both tiers.",
    "Reading aloud task: based on a short text (minimum 35 words at Foundation tier, minimum 50 words at Higher tier) prepared in supervised preparation time and focusing on sound symbol correspondences, followed by a short unprepared conversation in response to four compulsory questions set on the topic of the text, asked exactly as written in the Teacher's Booklet.",
    "Photo card discussion: based on a Photo card containing two photos from one of the three themes, prepared in supervised preparation time; students respond to the content of the photos (saying at least one thing about each) and then take part in an unprepared conversation based on any or all of the three topics from the specified theme."
   ],
   "ideas": [
    {
     "code": "Topic 1",
     "q": "What is the first topic within Theme 1: People and lifestyle, as examined in Paper 2 Speaking?",
     "idea": "Identity and relationships with others",
     "content": "Theme 1: People and lifestyle covers the following three topics, of which the first is Topic 1: Identity and relationships with others; the specification states that these themes apply to all four question papers, and that in the Speaking assessment students will be able to respond according to their own interests and experiences within the Role-play, Reading aloud task and Photo card discussion."
    },
    {
     "code": "Topic 2",
     "q": "What is the second topic within Theme 1: People and lifestyle, as examined in Paper 2 Speaking?",
     "idea": "Healthy living and lifestyle",
     "content": "Theme 1: People and lifestyle covers Topic 2: Healthy living and lifestyle as one of its three topics; texts and tasks for the Speaking assessment are based on the prescribed vocabulary list and prescribed grammar, though it is not intended that themes and topics will be specifically referenced in all assessment tasks, and students are expected to use the prescribed vocabulary and grammar across a range of contexts and assessment tasks including the Photo card, which draws its two photos from one of the three themes."
    },
    {
     "code": "Topic 3",
     "q": "What is the third topic within Theme 1: People and lifestyle, as examined in Paper 2 Speaking?",
     "idea": "Education and work",
     "content": "Theme 1: People and lifestyle covers Topic 3: Education and work as its third topic; in the Speaking assessment, the unprepared conversation following the Photo card discussion can be based on any or all of the three topics from the theme specified on the Candidate's card and in the Teacher's Notes, enabling students to develop personalised responses."
    }
   ],
   "skills": [
    "Speaking using clear and comprehensible language to undertake a Role-play",
    "Carry out a Reading aloud task",
    "Talk about visual stimuli"
   ]
  },
  {
   "id": "3.1.2",
   "component": "paper2",
   "option": null,
   "name": "Theme 2: Popular culture",
   "caseStudies": [
    "Role-play: based on a stimulus card prepared in supervised preparation time, tasks in English with unambiguous instructions about what to say, recommended to last between 1 and 1.5 minutes at both tiers, worth 10 marks",
    "Reading aloud task: a short text of minimum 35 words at Foundation tier and minimum 50 words at Higher tier, followed by a short unprepared conversation with four compulsory questions asked exactly as written in the Teacher's Booklet, worth 15 marks",
    "Photo card discussion: a card containing two photos from one of the three themes, prepared in supervised preparation time, comprising a compulsory response to the content of the photos and an unprepared conversation based on any or all of the three topics from the specified theme, worth 25 marks"
   ],
   "ideas": [
    {
     "code": "Topic 1",
     "q": "Which Theme 2 topic supplies vocabulary and content for speaking tasks on leisure activities?",
     "idea": "Free-time activities",
     "content": "Theme 2: Popular culture covers Topic 1: Free-time activities, and as with all three themes it applies to Paper 2: Speaking, so students may be required to use language relating to free-time activities in the Role-play, Reading aloud task and unprepared conversation, responding according to their own interests and experiences."
    },
    {
     "code": "Topic 2",
     "q": "Which Theme 2 topic supplies vocabulary and content for speaking tasks on customs and festivals?",
     "idea": "Customs, festivals and celebrations",
     "content": "Theme 2: Popular culture covers Topic 2: Customs, festivals and celebrations, and as this theme applies to Paper 2: Speaking, students may be required to use language relating to customs, festivals and celebrations in the Role-play, Reading aloud task and unprepared conversation, responding according to their own interests and experiences."
    },
    {
     "code": "Topic 3",
     "q": "Which Theme 2 topic supplies vocabulary and content for speaking tasks on celebrity culture?",
     "idea": "Celebrity culture",
     "content": "Theme 2: Popular culture covers Topic 3: Celebrity culture, and as this theme applies to Paper 2: Speaking, students may be required to use language relating to celebrity culture in the Role-play, Reading aloud task and unprepared conversation, responding according to their own interests and experiences; it is not intended that the themes and topics will be specifically referenced in all assessment tasks, and students are expected to use the prescribed vocabulary and grammar across a range of contexts and assessment tasks."
    }
   ],
   "skills": [
    "Speaking using clear and comprehensible language to undertake a Role-play, including asking and answering questions",
    "Carrying out a Reading aloud task and taking part in a short unprepared conversation on its topic",
    "Talking about visual stimuli (Photo card) and extending this into a short unprepared interaction drawing on Theme 2 topics",
    "Adapting language to suit the purpose of the task and demonstrating knowledge of sound symbol correspondences so as to be understood by a native speaker"
   ]
  },
  {
   "id": "3.1.3",
   "component": "paper2",
   "option": null,
   "name": "Theme 3: Communication and the world around us",
   "caseStudies": [
    "Role-play",
    "Reading aloud task and short conversation",
    "Photo card discussion"
   ],
   "ideas": [
    {
     "code": "1",
     "q": "What must students be prepared to discuss under Theme 3, Topic 1 in the Speaking assessment?",
     "idea": "Travel and tourism, including places of interest",
     "content": "Theme 3: Communication and the world around us covers Topic 1: Travel and tourism, including places of interest. As stated for all themes, passages and tasks are based on the prescribed vocabulary list in Appendix 2 and the prescribed grammar in Section 3.2, and in the Speaking assessment students will be able to respond according to their own interests and experiences rather than the theme being specifically referenced in every task. This theme may be the one selected for a student's Photo card, which contains two photos from one of the three themes, and the unprepared conversation that follows can be based on any or all of the three topics from the theme specified on the Candidate's card and in the Teacher's Notes."
    },
    {
     "code": "2",
     "q": "What must students be prepared to discuss under Theme 3, Topic 2 in the Speaking assessment?",
     "idea": "Media and technology",
     "content": "Theme 3: Communication and the world around us covers Topic 2: Media and technology. As with the other topics, students will be expected to use the prescribed vocabulary and grammar across a range of contexts and assessment tasks rather than the topic being specifically referenced in every task, and in the Speaking assessment students respond according to their own interests and experiences. This theme may be the one selected for a student's Photo card (two photos from one of the three themes) and the unprepared conversation may draw on any or all of the three topics from the theme specified on the Candidate's card and in the Teacher's Notes."
    },
    {
     "code": "3",
     "q": "What must students be prepared to discuss under Theme 3, Topic 3 in the Speaking assessment?",
     "idea": "The environment and where people live",
     "content": "Theme 3: Communication and the world around us covers Topic 3: The environment and where people live. As with the other topics, students will be expected to use the prescribed vocabulary and grammar across a range of contexts and assessment tasks rather than the topic being specifically referenced in every task, and in the Speaking assessment students respond according to their own interests and experiences. This theme may be the one selected for a student's Photo card (two photos from one of the three themes) and the unprepared conversation may draw on any or all of the three topics from the theme specified on the Candidate's card and in the Teacher's Notes."
    }
   ],
   "skills": [
    "Speaking using clear and comprehensible language to undertake a Role-play",
    "Carry out a Reading aloud task",
    "Talk about visual stimuli"
   ]
  },
  {
   "id": "3.2.1",
   "component": "paper4",
   "option": null,
   "name": "Grammar: Foundation tier",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.2.1.1",
     "q": "What noun phrase grammar must Foundation tier students demonstrate receptive and productive knowledge of?",
     "idea": "Foundation tier noun phrases",
     "content": "Formation of feminine person nouns: add -e; no change (article changes only); -eur → -rice and/or -euse depending on which base words are listed; -en → -nne (highly frequent irregulars such as chef/cheffe, héros/héroïne, Juif/Juive are listed separately in the vocabulary list). Formation of plural nouns: add -s to most nouns; add -x to masculine nouns ending in -(e)au and -eu; no change for nouns ending in -s, -x (highly frequent irregulars such as madame/mesdames, monsieur/messieurs, œil/yeux are listed separately). Infinitive used as a noun, ie the equivalent of the -ing gerund in English. Determiners: Articles — agreement of le, la, les and un, une, des for gender and number; contraction of the definite article (le/la → l’) before singular nouns starting with a vowel or h muet; functions of definite and indefinite articles including where use or omission differs from English (eg La santé est importante, le mercredi); use of the definite article before an adjective to form a noun, including uninflected adjectives for languages and a capital letter for nationality nouns (eg seul → le seul, anglais → l’anglais, anglaise → l’Anglaise); partitive articles distinguishing parts from wholes (eg after jouer with musical instruments, after faire with sports); use of de (and omission of article) before nouns following a negative verb and after expressions of quantity; contraction of de to d’ before a vowel. Other determiners: demonstrative adjectives (ce, cet, cette, ces); possessive adjectives (mon, ma, mes, ton, ta, tes, son, sa, ses, notre, nos, votre, vos, leur, leurs); interrogative adjectives (quel, quelle, quels, quelles); agreement patterns for indefinite adjectives (chaque, plusieurs, même(s), autre(s), tout(e)(s), tous, quelque(s)). Pronouns: subject pronouns (je, tu, il, elle, on, nous, vous, ils, elles); preverbal position of singular direct object pronouns (me, te, vous, le, la); preverbal position of singular indirect object pronouns (me, te, vous, lui); verbs used with plural reflexive pronouns with reflexive and reciprocal meanings (eg nous nous écrivons; vous vous parlez; ils se regardent); preverbal position of reflexive pronouns (me, te, se, nous, vous, se); contraction of pronouns (me → m’, te → t’, le/la → l’, se → s’) before a vowel or h muet; use of emphatic pronouns moi and toi after prepositions; use of the relative pronoun qui in subject relative clauses."
    },
    {
     "code": "3.2.1.2",
     "q": "What verb phrase grammar must Foundation tier students demonstrate receptive and productive knowledge of?",
     "idea": "Foundation tier verb phrases",
     "content": "Negation: syntax of verbal negation with ne…pas, ne…jamais, ne…rien and ne…personne. Interrogatives expressed through intonation with subject verb (SV) word order, including when followed by a wh-word (qui, quand, quoi, pourquoi, comment, combien, où); wh-word followed by est-ce que followed by SV word order; and wh-word followed by verb subject (VS) word order. Inflectional morphology: regular and four very high frequency irregular patterns (aller, avoir, être, faire) in 1st, 2nd, 3rd persons singular and plural for -er verbs, for -ir verb clusters patterning on choisir, partir, venir, ouvrir, and for -re verb clusters patterning on entendre, prendre, traduire, covering the present indicative (simple and ongoing functions, and with time adverbs for future), the perfect tense (simple past and present perfect, including past participle formation, agreement of past participles, and irregular past participles été, eu, fait), the periphrastic future (aller + infinitive), the imperative (2nd person singular and plural only, including aller and faire, but not avoir, être, and not reflexive), and the imperfect for habitual and ongoing functions in 1st, 2nd, 3rd persons singular only (avais/avait, étais/était, faisais/faisait, with étais/était also meaning ‘was/were + adjectival complement’ and avais/avait meaning ‘had’). Other irregular inflected forms: present indicative forms for 1st, 2nd, 3rd persons singular of nine high frequency verbs (boire, connaître, courir, croire, écrire, recevoir, rire, suivre, voir), with their present indicative, past participle, imperative forms and infinitives listed in the vocabulary list, as are any other irregular present indicative forms. Impersonal verbs: il y a / il y avait / il y aura; il fait + adjective; il + weather-related expressions; il faut + infinitive; il est for telling the time. Modal verbs: present indicative forms for 1st, 2nd, 3rd persons singular and plural of devoir, pouvoir, savoir, vouloir followed by infinitive; conditional forms in 1st, 2nd, 3rd persons singular only of vouloir (voudrais, voudrait) as equivalent of ‘would like (to) + verb’. Reflexive use of verbs in 1st, 2nd, 3rd persons singular and plural, where reflexive forms with the same meaning as a listed base verb are not listed separately, reflexive forms with a different meaning are listed on the same line and only tested if listed, and reflexives are bound by the same tense rules as all other verbs."
    },
    {
     "code": "3.2.1.3",
     "q": "What adjectival phrase grammar must Foundation tier students demonstrate receptive and productive knowledge of?",
     "idea": "Foundation tier adjectival phrases",
     "content": "Agreement for gender and number with nouns following regular patterns of adjectives listed in the vocabulary list. Gender: add -e; no change with adjectives ending in mute -e; -x → -se; -el → -lle; -en → -nne; -f → -ve; -er → -ère (highly frequent irregulars such as net/te, bon/ne, nouveau/nouvelle, pareil/le, travailleur/travailleuse are listed separately). Number: add -s; no change for masculine forms already ending in -s and -x; -al → -aux for masculine (irregulars beau/x and nouveau/x are listed separately). Position of adjectives in relation to the nouns they refer to: mostly after nouns, before nouns only for the defined set in the vocabulary list. Use of regular (plus…que/de, moins…que/de, aussi…que) and irregular comparative structures, with the irregular adjectival forms meilleur(e)(s) and pire(s) listed in the vocabulary list."
    },
    {
     "code": "3.2.1.4",
     "q": "What adverbial phrase grammar must Foundation tier students demonstrate receptive and productive knowledge of?",
     "idea": "Foundation tier adverbial phrases",
     "content": "Adverbs and adverbial phrases are listed in the vocabulary list. Position of adverbs of time, manner, frequency and place is required. Use of regular (plus…que, moins…que, aussi…que) and irregular comparative structures is required, with the irregular adverbial form mieux listed in the vocabulary list."
    },
    {
     "code": "3.2.1.5",
     "q": "What preposition grammar must Foundation tier students demonstrate receptive and productive knowledge of?",
     "idea": "Foundation tier prepositions",
     "content": "À/de can be needed before a noun or a second verb following some verbs and adjectives; where the preposition changes or adds to the meaning of the verb, English translations are listed (eg arriver ‘to arrive’, arriver à ‘to manage to’). Appropriate use of en/à with proper nouns for places is required (eg countries, regions/states, cities). Contraction of the definite article when used with à and de to agree with gender and number is required (ie à, à la, au, aux; de, de la, du, des are listed in the vocabulary list). De is used to indicate possession (eg le sac de Léa). The prepositions pour and sans are used before an infinitive."
    },
    {
     "code": "3.2.1.6",
     "q": "What derivational morphology must Foundation tier students recognise, and for which skill only?",
     "idea": "Foundation tier derivational morphology (Reading only)",
     "content": "Reading only. Even if only the base form (eg rapide) is listed in the vocabulary list, a derived form that follows one of the listed patterns (eg rapidement) may be included in reading texts – or, if only the specific affixed form is listed, the base form may be included in reading texts; if derived forms are required for listening or production they must be listed separately in the vocabulary list unless clearly recognisable as derived from the base form. Uniformly applicable derivational morphology that changes meaning: ordinal numbers created by adding -ième (or dropping -e and adding -ième) to cardinal numbers, eg deux – deuxième, quatre – quatrième, with irregular forms premier and première listed in the vocabulary list. Other highly frequent patterns that change meaning: prefixes adding in- or im- to adjectives, adverbs and nouns, only where the English equivalent is un- or in- or means ‘opposite of’, eg également → inégalement, sécurité → insécurité, possible → impossible. Patterns that change the part of speech: adjectives created by adding -able or -eable to the verb stem, only where the English equivalent is -able or -ible, eg porter → portable, changer → changeable; nouns created by adding -ion or -ation to the verb stem, only where the English equivalent is -ion or -ation, eg progresser → progression, préparer → préparation; and adverbs ending in -ment, only where the English equivalent is -ly, created by adding -ment to the feminine form of adjectives (eg première → premièrement) or by dropping -ant(e)/-ent(e) and adding -amment/-emment (eg courant → couramment, patient → patiemment)."
    }
   ],
   "skills": [
    "Learn and use the grammar specified to understand and produce meaning in written and oral modalities",
    "Demonstrate understanding and accurate application of the grammar and vocabulary prescribed in the specification (AO3)",
    "Write text in French in a lexically and grammatically accurate way in response to simple and familiar stimuli",
    "Use the prescribed grammar receptively and productively across a range of contexts and assessment tasks"
   ]
  },
  {
   "id": "3.2.2",
   "component": "paper4",
   "option": null,
   "name": "Grammar: Higher tier",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.2.2.1",
     "q": "What noun phrase grammar is required at Higher tier?",
     "idea": "Higher tier noun phrase grammar: articles, determiners, pronouns, relative clauses",
     "content": "Higher tier only. Determiners: Articles — partitive articles with uncountable nouns; use of article with dans, omission of article with en. Other determiners — use of negative adjective determiner aucun(e). Pronouns — preverbal use of pronouns y and en (not juxtaposed with other object pronouns, except in the phrase 'il y en a', 'il y en avait' and 'il y en aura'); preverbal position of plural direct object pronouns (nous, vous, les) (not juxtaposed with indirect object pronouns); preverbal position of plural indirect object pronouns (nous, vous, leur) (not juxtaposed with direct object pronouns); use of emphatic pronouns (lui, elle, nous, vous, eux, elles), including after prepositions; preverbal position of plural reflexive pronouns (nous, vous, se); negative subject pronouns personne ne + verb and rien ne + verb (as equivalent of English 'nobody + verb' and 'nothing + verb'); relative clauses (with où and que)."
    },
    {
     "code": "3.2.2.2",
     "q": "What verb phrase grammar is required at Higher tier?",
     "idea": "Higher tier verb phrase grammar: negation, passive, impersonal verbs, periphrastic expressions, reflexives and inflectional morphology",
     "content": "Higher tier only. Syntax of negation with ne…plus, ne…ni…(ni…), ne…pas encore, ne…que. Passive voice in the present (full form only, ie with par). Impersonal verbs with adjectives + de (eg, il est difficile/facile/interdit de + infinitive); any adjectives used in impersonal phrases are listed in the vocabulary list. Impersonal verbs in phrases il manque + noun, il vaut mieux + infinitive, il vaut la peine de + infinitive. Periphrastic time expressions être en train de (as equivalent of 'BE [in the process of] + verb-ing') and venir de (as equivalent of 'HAVE just done + verb'). Verbs used with plural reflexive pronouns, with reflexive and reciprocal meanings (eg, nous nous écrivons, vous vous parlez, ils se regardent). Inflectional morphology: two additional clusters of high frequency verbs patterning on the 'anchor' verbs connaître and écrire, in the forms specified at Foundation (present indicative in 1st, 2nd, 3rd persons singular and plural, perfect tense, periphrastic future, imperative 2nd person singular and plural not reflexive, imperfect in 1st, 2nd, 3rd persons singular), plus additional forms for the anchor verbs; present tense with depuis (as equivalent of 'have been + ing' for 'x time'); perfect tense of modals (devoir, pouvoir, savoir, vouloir) with past participles listed in the vocabulary list; inflectional future for regular -er verbs (1st, 2nd, 3rd persons singular and plural) as equivalent of both 'will + verb' and 'BE + going to + verb', with singular forms of four high frequency irregular verbs (aurai/auras/aura, ferai/feras/fera, irai/iras/ira, serai/seras/sera) listed in the vocabulary list; conditional of regular -er forms only (1st, 2nd, 3rd persons) in singular and plural, with singular forms of four high frequency irregular verbs (aurais/aurait, ferais/ferait, irais/irait, serais/serait) listed in the vocabulary list; imperfect for regular (-er and the nine anchor verb patterns) verbs in 1st, 2nd and 3rd person plural forms for the equivalent of English habitual ('used to + verb') and ongoing ('BE -ing'), including the 1st, 2nd and 3rd person plural forms of avoir (to mean 'had'), être (to mean 'were + adjectival complement') and faire; imperative of 2nd person singular and plural of être (sois and soyez, each listed in the vocabulary list), and of regular (-er and the nine anchor verb patterns) verbs 1st person plural (not reflexive), with the function 'Let's + verb!'; present participle of regular (-er and the nine anchor verb patterns) verbs after en, including adjectival use where relevant, with irregular present participles of étant, ayant and faisant listed in the vocabulary list."
    },
    {
     "code": "3.2.2.3",
     "q": "What adjectival phrase grammar is required at Higher tier?",
     "idea": "Higher tier adjectival phrases: regular superlative structures",
     "content": "Higher tier only. Use of regular superlative adjective structures (irregulars le meilleur/la meilleure/les meilleurs/les meilleures, and le pire/la pire/les pires are listed in the vocabulary list)."
    },
    {
     "code": "3.2.2.4",
     "q": "What adverbial phrase grammar is required at Higher tier?",
     "idea": "Higher tier adverbial phrases: regular superlative structures",
     "content": "Higher tier only. Use of regular superlative adverb structures (irregular le mieux is listed in the vocabulary list)."
    },
    {
     "code": "3.2.2.5",
     "q": "What preposition grammar is required at Higher tier?",
     "idea": "Higher tier prepositions: avant de and après avoir constructions",
     "content": "Higher tier only. Preposition (avant de) + infinitive. Preposition (après avoir) + past participle."
    },
    {
     "code": "3.2.2.6",
     "q": "What derivational morphology is required at Higher tier for Reading only?",
     "idea": "Higher tier derivational morphology (Reading only): agent nouns",
     "content": "Higher tier only, for Paper 3 Reading only. Derivational morphology listed here indicates that even if only the base form (eg, porter) is listed in the vocabulary list, a derived form that follows one of the patterns listed here (eg, porteur) may be included in reading texts; or, if only the specific affixed form is listed, the base form may be included in reading texts. If derived forms are included in listening material or are required for production, they must be listed separately in the Vocabulary List, unless the derivation in its spoken/written form is clearly recognisable for learners at this level as being derived from the base form. Morphology that changes the part of speech: suffixes — agent nouns created by adding -eur or -ateur to a verb stem, eg, porter ➜ porteur, consommer ➜ consommateur."
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
     "q": "How many lexical items must students know at each tier?",
     "idea": "Vocabulary size by tier",
     "content": "Students are expected to know 1,200 lexical items for Foundation tier, and a further 500 lexical items for Higher tier; students are also required to know words which can be regularly inflected and (for Paper 3 Reading only) regularly derived from listed lexical items using the grammar specified in section 3.3."
    },
    {
     "code": "2",
     "q": "Does the vocabulary list assume prior KS2/KS3 vocabulary?",
     "idea": "Comprehensive list, no prior assumptions",
     "content": "Because no vocabulary is specified for KS2 or KS3, the vocabulary list is comprehensive and makes no assumptions about vocabulary previously taught."
    },
    {
     "code": "3",
     "q": "What is included within the 1,200/1,700 item counts from DfE guidance?",
     "idea": "Annex E words included in totals",
     "content": "The vocabulary lists include, as part of the 1,200 or 1,700 items, the words listed in the DfE subject content Annex E; these are the words which are referenced in the grammar in section 3 and they include irregular forms of high frequency verbs and other parts of speech."
    },
    {
     "code": "4a",
     "q": "What extra multi-word phrases are added beyond the core item counts?",
     "idea": "30 multi-word phrases",
     "content": "In addition to the 1,200 and 1,700 items, the vocabulary lists contain 30 short phrases that are multi-word phrases in French."
    },
    {
     "code": "4b",
     "q": "What extra geographical or cultural items are added beyond the core item counts, and how are compound words treated?",
     "idea": "20 geographical/cultural items and compound-word rule",
     "content": "In addition to the 1,200 and 1,700 items, the vocabulary lists contain 20 items to refer to relevant geographical or cultural places/events, including the names of countries to be known receptively and productively. The vast majority of lexical items listed as vocabulary are single-word items: where a compound word or multi-word phrase translates a single English word, it is counted either as a separate lexical item in the main vocabulary list or as one of the 30 multi-word phrases; however, where a compound word or phrase can easily be understood from its components already included in the list (an easily understood example being point de vue), the compound word will not be included, whereas a compound word/phrase that is not easily understood (eg petit déjeuner) is included."
    },
    {
     "code": "5a",
     "q": "What glossing of words outside the vocabulary list is permitted in Reading texts?",
     "idea": "2% gloss for words outside the list",
     "content": "For Reading only, Higher and overlapping tier texts in Paper 3 may include a small number of words outside the vocabulary list; English meanings of such words will be supplied adjacent to the text for reference, and no more than 2% of words (rounded to the nearest whole word) in any given text may be glossed in this way."
    },
    {
     "code": "5b",
     "q": "How are unfamiliar proper nouns treated in Reading texts?",
     "idea": "Glossing of proper nouns",
     "content": "For both Foundation and Higher tiers, all proper nouns (such as cities or countries) that are not on the vocabulary list and are not deemed to be easily understood can be glossed or explained in an adjacent note."
    },
    {
     "code": "5c",
     "q": "How many cognates outside the vocabulary list may appear in a Reading text?",
     "idea": "2% cognates allowance",
     "content": "Up to 2% of words (rounded to the nearest whole word) of any given text can be comprised of cognates which are not included in the vocabulary list; cognates are words in which the substantial majority of letters are the same in English and French, have the same meaning in both languages, and any difference in spelling should not impede understanding for students entered for GCSE French."
    },
    {
     "code": "6",
     "q": "How are words with multiple meanings or parts of speech listed?",
     "idea": "Single entry for multiple meanings",
     "content": "Words with multiple meanings and/or parts of speech (eg, the French noun histoire that can be translated by the different English words 'story' and 'history', or recycled as a past participle and recycled as an adjective) should be listed as one entry in the vocabulary list; all English equivalents that could be tested (eg, in questions that require working from English to French) should be explicitly provided."
    },
    {
     "code": "7",
     "q": "How is the vocabulary list compiled with reference to frequency?",
     "idea": "Frequency-based compilation",
     "content": "The vocabulary which students will be expected to know, for both comprehension and production, will be compiled with close and explicit reference for each item on the list to frequency of occurrence in the language; this information about frequency has been taken from Lonsdale, D. & Le Bras, Y. (2009), A frequency dictionary of French: Core vocabulary for learners."
    },
    {
     "code": "8",
     "q": "What proportion of the vocabulary list must come from the most frequent words, and how is spelling variation treated?",
     "idea": "85% from top 2,000 frequent words",
     "content": "At least 85% of the 1,200 and 1,700 words selected should be from the 2,000 most frequent words occurring in the most widely used standard forms of the language; in some cases more than one spelling is in common use, including where recent spelling reforms have taken place, and in such cases tolerance is shown for both versions of the spelling, eg coût/cout."
    }
   ]
  },
  {
   "id": "6",
   "component": "paper2",
   "option": null,
   "name": "Appendix 1: Sound symbol correspondences (SSCs)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "silent final consonant",
     "q": "What examples illustrate the silent final consonant sound-symbol correspondence?",
     "idea": "Silent final consonant",
     "content": "The specification's SSC table gives sommes and effort as examples of the silent final consonant sound-symbol correspondence that students must learn to read aloud and transcribe accurately at GCSE."
    },
    {
     "code": "a",
     "q": "What examples illustrate the sound-symbol correspondence for a?",
     "idea": "Vowel a",
     "content": "The specification's SSC table gives arriver and avec as examples of the a sound-symbol correspondence."
    },
    {
     "code": "i/y",
     "q": "What examples illustrate the sound-symbol correspondence for i/y?",
     "idea": "Vowel i/y",
     "content": "The specification's SSC table gives physique and public as examples of the i/y sound-symbol correspondence."
    },
    {
     "code": "eu",
     "q": "What examples illustrate the sound-symbol correspondence for eu?",
     "idea": "Vowel eu",
     "content": "The specification's SSC table gives deux and (un) peu as examples of the eu sound-symbol correspondence."
    },
    {
     "code": "e",
     "q": "What examples illustrate the sound-symbol correspondence for e?",
     "idea": "Vowel e",
     "content": "The specification's SSC table gives le and de as examples of the e sound-symbol correspondence."
    },
    {
     "code": "au/eau/closed o/ô",
     "q": "What examples illustrate the sound-symbol correspondence for au/eau/closed o/ô?",
     "idea": "Closed o family: au/eau/closed o/ô",
     "content": "The specification's SSC table gives sauf and beau as examples of the au/eau/closed o/ô sound-symbol correspondence."
    },
    {
     "code": "ou",
     "q": "What examples illustrate the sound-symbol correspondence for ou?",
     "idea": "Vowel ou",
     "content": "The specification's SSC table gives sous and toujours as examples of the ou sound-symbol correspondence."
    },
    {
     "code": "u",
     "q": "What examples illustrate the sound-symbol correspondence for u?",
     "idea": "Vowel u",
     "content": "The specification's SSC table gives dur and connu as examples of the u sound-symbol correspondence."
    },
    {
     "code": "silent final e",
     "q": "What examples illustrate the silent final e sound-symbol correspondence?",
     "idea": "Silent final e",
     "content": "The specification's SSC table gives jeune and chaque as examples of the silent final e sound-symbol correspondence."
    },
    {
     "code": "é (-er, -ez)",
     "q": "What examples illustrate the sound-symbol correspondence for é (-er, -ez)?",
     "idea": "Closed é including -er, -ez endings",
     "content": "The specification's SSC table gives moitié and région as examples of the é (-er, -ez) sound-symbol correspondence."
    },
    {
     "code": "en/an/em/am",
     "q": "What examples illustrate the sound-symbol correspondence for en/an/em/am?",
     "idea": "Nasal en/an/em/am",
     "content": "The specification's SSC table gives immédiatement and grand as examples of the en/an/em/am sound-symbol correspondence."
    },
    {
     "code": "on/om",
     "q": "What examples illustrate the sound-symbol correspondence for on/om?",
     "idea": "Nasal on/om",
     "content": "The specification's SSC table gives tomber and compétence as examples of the on/om sound-symbol correspondence."
    },
    {
     "code": "ain/in/aim/im",
     "q": "What examples illustrate the sound-symbol correspondence for ain/in/aim/im?",
     "idea": "Nasal ain/in/aim/im",
     "content": "The specification's SSC table gives matin and faim as examples of the ain/in/aim/im sound-symbol correspondence."
    },
    {
     "code": "è/ê/ai",
     "q": "What examples illustrate the sound-symbol correspondence for è/ê/ai?",
     "idea": "Open e family: è/ê/ai",
     "content": "The specification's SSC table gives vrai and collège as examples of the è/ê/ai sound-symbol correspondence."
    },
    {
     "code": "oi/oy",
     "q": "What examples illustrate the sound-symbol correspondence for oi/oy?",
     "idea": "Diphthong oi/oy",
     "content": "The specification's SSC table gives mois and moyen as examples of the oi/oy sound-symbol correspondence."
    },
    {
     "code": "ch",
     "q": "What examples illustrate the sound-symbol correspondence for ch?",
     "idea": "Consonant digraph ch",
     "content": "The specification's SSC table gives chose and marché as examples of the ch sound-symbol correspondence."
    },
    {
     "code": "ç (and soft 'c')",
     "q": "What examples illustrate the sound-symbol correspondence for ç (and soft 'c')?",
     "idea": "Soft c represented by ç",
     "content": "The specification's SSC table gives façon and français as examples of the ç (and soft 'c') sound-symbol correspondence."
    },
    {
     "code": "qu",
     "q": "What examples illustrate the sound-symbol correspondence for qu?",
     "idea": "Consonant cluster qu",
     "content": "The specification's SSC table gives banque and informatique as examples of the qu sound-symbol correspondence."
    },
    {
     "code": "j",
     "q": "What examples illustrate the sound-symbol correspondence for j?",
     "idea": "Consonant j",
     "content": "The specification's SSC table gives jusque and jeunesse as examples of the j sound-symbol correspondence."
    },
    {
     "code": "-tion",
     "q": "What examples illustrate the sound-symbol correspondence for -tion?",
     "idea": "Suffix -tion",
     "content": "The specification's SSC table gives construction and application as examples of the -tion sound-symbol correspondence."
    },
    {
     "code": "-ien",
     "q": "What examples illustrate the sound-symbol correspondence for -ien?",
     "idea": "Ending -ien",
     "content": "The specification's SSC table gives ne…rien and canadien as examples of the -ien sound-symbol correspondence."
    },
    {
     "code": "s-liaison",
     "q": "What examples illustrate s-liaison?",
     "idea": "Liaison with s",
     "content": "The specification's SSC table gives nos and les as examples of s-liaison."
    },
    {
     "code": "t-liaison",
     "q": "What examples illustrate t-liaison?",
     "idea": "Liaison with t",
     "content": "The specification's SSC table gives tout and petit as examples of t-liaison."
    },
    {
     "code": "n-liaison",
     "q": "What examples illustrate n-liaison?",
     "idea": "Liaison with n",
     "content": "The specification's SSC table gives bon and mon as examples of n-liaison."
    },
    {
     "code": "x-liaison",
     "q": "What examples illustrate x-liaison?",
     "idea": "Liaison with x",
     "content": "The specification's SSC table gives faux and nouveaux as examples of x-liaison."
    },
    {
     "code": "h",
     "q": "What examples illustrate the sound-symbol correspondence for h?",
     "idea": "Letter h",
     "content": "The specification's SSC table gives homme and hôpital as examples of the h sound-symbol correspondence."
    },
    {
     "code": "un",
     "q": "What examples illustrate the sound-symbol correspondence for un?",
     "idea": "Nasal un",
     "content": "The specification's SSC table gives lundi and emprunter as examples of the un sound-symbol correspondence."
    },
    {
     "code": "-gn-",
     "q": "What examples illustrate the sound-symbol correspondence for -gn-?",
     "idea": "Consonant cluster -gn-",
     "content": "The specification's SSC table gives campagne and gagner as examples of the -gn- sound-symbol correspondence."
    },
    {
     "code": "r",
     "q": "What examples illustrate the sound-symbol correspondence for r?",
     "idea": "Consonant r",
     "content": "The specification's SSC table gives rester and comprendre as examples of the r sound-symbol correspondence."
    },
    {
     "code": "open eu/œu",
     "q": "What examples illustrate the sound-symbol correspondence for open eu/œu?",
     "idea": "Open eu/œu",
     "content": "The specification's SSC table gives leur and cœur as examples of the open eu/œu sound-symbol correspondence."
    },
    {
     "code": "open o",
     "q": "What examples illustrate the sound-symbol correspondence for open o?",
     "idea": "Open o",
     "content": "The specification's SSC table gives porte and alors as examples of the open o sound-symbol correspondence."
    },
    {
     "code": "-s-",
     "q": "What examples illustrate the sound-symbol correspondence for -s-?",
     "idea": "Medial -s-",
     "content": "The specification's SSC table gives maison and cuisine as examples of the -s- sound-symbol correspondence."
    },
    {
     "code": "th",
     "q": "What examples illustrate the sound-symbol correspondence for th?",
     "idea": "Consonant digraph th",
     "content": "The specification's SSC table gives bibliothèque and thème as examples of the th sound-symbol correspondence."
    },
    {
     "code": "-ill-/-ille",
     "q": "What examples illustrate the sound-symbol correspondence for -ill-/-ille?",
     "idea": "Cluster -ill-/-ille",
     "content": "The specification's SSC table gives brouillard and famille as examples of the -ill-/-ille sound-symbol correspondence."
    },
    {
     "code": "-aill-/ail",
     "q": "What examples illustrate the sound-symbol correspondence for -aill-/ail?",
     "idea": "Cluster -aill-/ail",
     "content": "The specification's SSC table gives taille and travail as examples of the -aill-/ail sound-symbol correspondence."
    }
   ]
  }
 ],
 "source": {
  "url": "https://cdn.sanity.io/files/p28bar15/green/672787d9e5c10db595a68be124976cf5ea1c5ba6.pdf",
  "etag": "\"1082328693088fcc6fc335002df7a74b\"",
  "lastModified": "Thu, 13 Aug 2026 14:15:32 GMT",
  "length": 1056498,
  "checkedAt": "2026-09-21T18:09:11.695Z"
 }
};
module.exports = { SPEC_8652 };
