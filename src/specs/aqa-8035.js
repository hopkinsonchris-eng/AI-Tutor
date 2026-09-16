/* AQA GCSE Geography (8035) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_8035 = {
 "id": "AQA-8035",
 "board": "AQA",
 "subject": "Geography",
 "code": "8035",
 "level": "GCSE",
 "version": "Version 1.1 12 September 2023",
 "firstExam": 2018,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Living with the physical environment",
   "paperCode": "8035/1",
   "marks": 88,
   "weight": 35,
   "minutes": 90,
   "resourceBooklet": false,
   "sections": [
    "What's assessed: 3.1.1 The challenge of natural hazards, 3.1.2 The living world, 3.1.3 Physical landscapes in the UK, 3.4 Geographical skills.",
    "Section A — The challenge of natural hazards (3.1.1): answer all questions (33 marks). In the specimen paper this is Question 1, 30 content marks plus 3 for SPaG on the 9-mark question.",
    "Section B — The living world (3.1.2): answer all questions (25 marks). In the specimen paper this is Question 2, with the 9-mark question set on “a hot desert/cold environment”, whichever option was studied.",
    "Section C — Physical landscapes in the UK (3.1.3): “answer any two questions from questions 3, 4 and 5” (30 marks). In the specimen paper question 3 is Coastal landscapes in the UK, question 4 River landscapes in the UK and question 5 Glacial landscapes in the UK, 15 marks each.",
    "Question types: multiple-choice, short answer, levels of response, extended prose. 88 marks including 3 marks for spelling, punctuation, grammar and specialist terminology (SPaG). Written exam: 1 hour 30 minutes. 35% of GCSE.",
    "The specification prints only the entry code 8035; the paper code 8035/1 is the one printed on the question papers and mark schemes."
   ]
  },
  {
   "id": "C2",
   "name": "Challenges in the human environment",
   "paperCode": "8035/2",
   "marks": 88,
   "weight": 35,
   "minutes": 90,
   "resourceBooklet": false,
   "sections": [
    "What's assessed: 3.2.1 Urban issues and challenges, 3.2.2 The changing economic world, 3.2.3 The challenge of resource management, 3.4 Geographical skills.",
    "Section A — Urban issues and challenges (3.2.1): answer all questions (33 marks). In the specimen paper this is Question 1, 30 content marks plus 3 for SPaG on the 9-mark question.",
    "Section B — The changing economic world (3.2.2): answer all questions (30 marks). In the specimen paper this is Question 2, ending in a 9-mark ‘justify’ question.",
    "Section C — The challenge of resource management (3.2.3): “answer question 3 and one from questions 4, 5 or 6” (25 marks). In the specimen paper question 3 is Resource management (compulsory, 14 marks) and questions 4, 5 and 6 are Food, Water and Energy (11 marks each).",
    "Question types: multiple-choice, short answer, levels of response, extended prose. 88 marks including 3 marks for SPaG. Written exam: 1 hour 30 minutes. 35% of GCSE.",
    "The specification prints only the entry code 8035; the paper code 8035/2 is the one printed on the question papers and mark schemes."
   ]
  },
  {
   "id": "C3",
   "name": "Geographical applications",
   "paperCode": "8035/3",
   "marks": 76,
   "weight": 30,
   "minutes": 90,
   "resourceBooklet": true,
   "sections": [
    "What's assessed: 3.3.1 Issue evaluation, 3.3.2 Fieldwork, 3.4 Geographical skills.",
    "Section A — Issue evaluation (3.3.1): answer all questions (37 marks). In the specimen paper this is questions 1–3 on the pre-release resources, ending in a 9-mark decision question carrying 3 SPaG marks.",
    "Section B — Fieldwork (3.3.2): answer all questions (39 marks). In the specimen paper this is question 4 on fieldwork materials from an unfamiliar context (16 marks) and question 5 on the student's own individual enquiries (23 marks), ending in a 9-mark evaluation carrying 3 SPaG marks.",
    "“Pre-release resources booklet made available 12 weeks before Paper 3 exam.” Students may not take the original booklet into the exam room but are issued with a clean copy.",
    "Question types: multiple-choice, short answer, levels of response, extended prose. 76 marks including 6 marks for SPaG. Written exam: 1 hour 30 minutes. 30% of GCSE.",
    "The specification prints only the entry code 8035; the paper code 8035/3 is the one printed on the question papers and mark schemes."
   ]
  }
 ],
 "options": [
  {
   "id": "livingWorld",
   "label": "3.1.2 Section B: The living world — “In this section, students are required to study Ecosystems (page 12), Tropical rainforests (page 12) and one from Hot deserts (page 13) or Cold environments (page 14).” Exam-day form: Paper 1 Section B is a single question (specimen question 2) on The living world in which the 9-mark extended question is set on “a hot desert/cold environment” — the student answers on whichever of the two was studied.",
   "choose": 1,
   "from": [
    "3.1.2.3",
    "3.1.2.4"
   ]
  },
  {
   "id": "landscapes",
   "label": "3.1.3 Section C: Physical landscapes in the UK — “In this section, students are required to study UK physical landscapes (page 14) and two from Coastal landscapes in the UK (page 15), River landscapes in the UK (page 16) and Glacial landscapes in the UK (page 17).” Exam-day form: Paper 1 Section C, “answer any two questions from questions 3, 4 and 5 (30 marks)” — question 3 Coastal landscapes in the UK, question 4 River landscapes in the UK, question 5 Glacial landscapes in the UK.",
   "choose": 2,
   "from": [
    "3.1.3.2",
    "3.1.3.3",
    "3.1.3.4"
   ]
  },
  {
   "id": "resource",
   "label": "3.2.3 Section C: The challenge of resource management — “In this section, students are required to study Resource management (page 22) and one from Food (page 23) or Water (page 24) or Energy (page 25).” Exam-day form: Paper 2 Section C, “answer question 3 and one from questions 4, 5 or 6 (25 marks)” — question 3 is the compulsory Resource management, question 4 Food, question 5 Water, question 6 Energy.",
   "choose": 1,
   "from": [
    "3.2.3.2",
    "3.2.3.3",
    "3.2.3.4"
   ]
  }
 ],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge",
   "text": "Demonstrate knowledge of locations, places, processes, environments and different scales (15%).",
   "weight": 15,
   "byComponent": {
    "C1": 7.5,
    "C2": 7.5,
    "C3": 0
   }
  },
  {
   "id": "AO2",
   "label": "Geographical understanding",
   "text": "Demonstrate geographical understanding of: concepts and how they are used in relation to places, environments and processes; the interrelationships between places, environments and processes (25%).",
   "weight": 25,
   "byComponent": {
    "C1": 11,
    "C2": 11,
    "C3": 3
   }
  },
  {
   "id": "AO3",
   "label": "Application, interpretation and judgement",
   "text": "Apply knowledge and understanding to interpret, analyse and evaluate geographical information and issues to make judgements (35%, including 10% applied to fieldwork context(s)).",
   "weight": 35,
   "byComponent": {
    "C1": 8.5,
    "C2": 8.5,
    "C3": 18
   }
  },
  {
   "id": "AO4",
   "label": "Skills and techniques",
   "text": "Select, adapt and use a variety of skills and techniques to investigate questions and issues and communicate findings (25%, including 5% used to respond to fieldwork data and context(s)).",
   "weight": 25,
   "byComponent": {
    "C1": 8,
    "C2": 8,
    "C3": 9
   }
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Every question on all three papers is examined by written exam — there is no non-exam assessment. “Question types: multiple-choice, short answer, levels of response, extended prose” on each paper. Short questions are point-marked: the specimen mark schemes award “one mark for the correct answer” on multiple choice (“no credit if two or more answers are shaded”), and on 2-mark questions “one mark for stating… second mark for developing the point”. Longer questions are levels-marked. The specimen papers use three tariffs: 4-mark questions with Levels 1–2 (Level 1 Basic 1–2, Level 2 Clear 3–4), 6-mark questions with Levels 1–3 (Level 1 Basic 1–2, Level 2 Clear 3–4, Level 3 Detailed 5–6), and 9-mark questions with Levels 1–3 (Level 1 Basic 1–3, Level 2 Clear 4–6, Level 3 Detailed 7–9); in every grid “0 – No relevant content”. Each level descriptor is written AO by AO, and every question ends by naming its split, for example “AO1 = 3 marks, AO2 = 3 marks, AO3 = 3 marks” on a Paper 1 nine-marker, “AO2 = 2 marks, AO3 = 4 marks” on a Paper 2 six-marker and “AO3 = 9 marks” on the Paper 3 fieldwork nine-marker. Marking is best fit: “Start at the lowest level of the mark scheme and use it as a ladder… if the response is predominantly level 2 with a small amount of level 3 material it would be placed in level 2 but be awarded a mark near the top of the level”; “Indicative content… is not intended to be exhaustive and you must credit other valid points”. SPaG is assessed “via the indicated 9 mark questions. In each of these questions, three marks are allocated for SPaG” — High performance 3, Intermediate 2, Threshold 1, with the specification's four-row descriptor table in section 4.4. That gives 3 SPaG marks on Paper 1 (88 marks including 3 for SPaG), 3 on Paper 2 (88 including 3) and 6 on Paper 3 (76 including 6, three on the Section A decision question and three on the Section B fieldwork evaluation). Paper 3 is supported by a “pre-release resources booklet made available 12 weeks before Paper 3 exam”; students sit the exam with a clean copy. Finally, “the marks awarded on the papers will be scaled to meet the weighting of the components”: Paper 1 88 raw ×1 = 88, Paper 2 88 ×1 = 88, Paper 3 76 ×1 = 76, total scaled mark 252, and “grade boundaries will be set using this total scaled mark” on the nine-point scale 1–9.",
  "commandWords": [
   {
    "word": "Describe",
    "means": "Say what the pattern, distribution or difference is, with no reasons. The mark schemes point-mark it from the resource: “Must be a description of distribution. Credit observations based on the map”, with “one mark for basic description relating to distribution shown on map” and a “second mark for developed point using detail from map”. Naming places alone scores nothing — “no credit for listing names of countries”, “no credit for simply listing continents or places where the deserts are found”."
   },
   {
    "word": "Explain",
    "means": "Give reasons and a mechanism, chained through to the effect. “No credit for answers that do not explain the mechanism, eg rocks break up.” On the 6-mark landform questions the mark scheme demands “a logical chain of reasoning” and warns that “emphasis is on explanation, so processes should be outlined as well as the sequence of formation”; Level 3 rewards “detailed explanation of formation of the features shown”."
   },
   {
    "word": "Suggest",
    "means": "Offer a reasoned possibility for an unfamiliar situation, usually from a resource. “Command word is ‘suggest’, so any reasonable effects in the environment shown may be credited”; “Answers must suggest one reason… based on an interpretation of the information provided”. It is AO3, so the answer has to apply knowledge to the figure rather than recite it."
   },
   {
    "word": "Outline",
    "means": "Give the essential steps or characteristics without full development. The specimen papers themselves are not published, so “outline” appears in the mark schemes as marking guidance rather than as a printed stem — “processes should be outlined as well as the sequence of formation” (Paper 1, questions 03.7, 04.7 and 05.6) — which is exactly the demand: the sequence, briefly, in order."
   },
   {
    "word": "Compare",
    "means": "Set the two places or figures against each other in the same sentence, not one after the other. “Only credit differences between Africa and South America, although these may be implied”; “one mark for comparison of percentage, eg the Fairtrade farmer receives double that of the non-Fairtrade producer”; on Paper 3, “responses should compare the relative ability of countries to prepare and respond to hazard events”."
   },
   {
    "word": "Analyse",
    "means": "Break the resource down, find the connections and say what they mean. Level 3 of the 6-mark resource questions reads “Demonstrates thorough application of knowledge and understanding to analyse geographical information… Makes full analysis of the resource, using evidence to support response”, and the indicative content adds “responses should analyse the map, finding connections and providing a logical chain of reasoning”."
   },
   {
    "word": "Discuss",
    "means": "Set out the case on both sides and develop it. Level 3 reads “Provides a balanced discussion with well-developed ideas through a detailed understanding of the issue”, and on the urban sprawl question “provide a well-developed discussion by analysing the issues… Answers may concentrate on negative effects but expect positive effects as well.”"
   },
   {
    "word": "Assess",
    "means": "Weigh the parts and give an informed overall judgement. “The command word is ‘Assess’ so candidates must provide an informed judgement relating to the overall effectiveness of their presentation technique(s) by examining the constituent part of the technique(s) involved. Evaluative comments leading to the overall judgements are credited at Levels 1 and 2”; Level 3 wants “a substantiated overall assessment”."
   },
   {
    "word": "Evaluate",
    "means": "Judge how well something works, with the evidence on both sides. Level 3 descriptors read “Demonstrates thorough application of knowledge and understanding in evaluating the effectiveness of an urban transport scheme(s)” and “Shows a comprehensive understanding… by demonstrating a detailed and balanced appreciation of its advantages and disadvantages”. “No credit for simply describing the problems.”"
   },
   {
    "word": "To what extent",
    "means": "Decide how far a claim holds, not simply whether it does. “The command phrase is ‘to what extent’, so the focus of the question is an evaluation of the relative importance of primary and secondary effects. There should be a discursive element which addresses whether, and to what extent, primary effects are more significant than secondary effects.” On Paper 2: “The command ‘to what extent’ requires an appraisal of the degree to which urban areas in LICs/NEEs provide social and economic opportunities for people.”"
   },
   {
    "word": "Justify",
    "means": "Choose, then defend the choice against the alternatives. “The command word is ‘justify’, so answers should reach a conclusion and substantiate the choice made. Credit responses which highlight one side of the argument, as well as those which take a more balanced approach before reaching a conclusion.” Level 3: “making a judgement about the issues and reaching a substantiated conclusion. Justification is detailed and balanced.” On fieldwork, “Candidates need to identify the data collection method but this is not credited as it involves no justification.”"
   },
   {
    "word": "State / Give",
    "means": "Name the thing, no explanation needed. “The process only has to be named. There is no requirement to explain or describe the process.” “Two causes of food insecurity should be stated.” “Only one condition is required.” Credit is usually capped — “credit one reason only”, “no credit for second way” — so extra answers do not earn extra marks."
   },
   {
    "word": "Complete / Shade / Draw",
    "means": "Finish the graph, map or multiple-choice grid exactly. “One mark for accurately completing isoline for 100 pedestrians. The line must pass to the right of numbers 93 and 95 and to the left of numbers 107, 106 and 117.” “Height of bar correctly drawn. Shading not needed.” “Data plot must be at exactly 7 cm.” On multiple choice, “no credit if two or more answers are shaded”. These are AO4 marks."
   },
   {
    "word": "Calculate",
    "means": "Work the figure out and show enough to prove it. “One mark for correct interquartile range: 6 cm (only possible answer). One mark for indication of calculation, eg upper quartile = 12, lower quartile = 6.” “One mark for correct calculation: £234.4 million (increase). Allow range of values from £234 million to £235 million.” Units can be required: “32 metres (m). Must include units.”"
   },
   {
    "word": "Using Figure … / Use the resource",
    "means": "Answer from the named figure; an answer that ignores it is capped or scores nothing. “There should be clear evidence that the photograph has been used… No credit for features not observed in the photograph.” “Answers must apply understanding of coastal factors to interpret the resource.” “No credit for simply describing one or both maps in isolation.” “No credit for generic factors which cannot be ascertained from the maps.” Level descriptors pair this with AO4: “Makes clear and effective use of the satellite image to support the forecast”."
   }
  ],
  "essayShapes": [
   {
    "marks": 9,
    "minutes": 10,
    "structure": "Papers 1 and 2, the extended question that closes a section: 9 marks plus 3 for SPaG, Levels 1–3 (Basic 1–3, Clear 4–6, Detailed 7–9) with an even AO split — “AO1 = 3 marks, AO2 = 3 marks, AO3 = 3 marks”. Level 3 (Detailed, 7–9) rewards all three strands at once: “Demonstrates detailed knowledge of the primary and secondary effects of a tectonic hazard on people and the environment… Shows thorough geographical understanding of the interrelationships between places, environments and processes… Demonstrates application of knowledge and understanding in a coherent and reasoned way in evaluating the relative significance of…”, and on Paper 2 “a detailed and balanced appreciation of its advantages and disadvantages” with “Justification is detailed and balanced”. Level 2 (Clear, 4–6) is the same answer with less of it — “clear knowledge”, “some geographical understanding”, “reasonable application… in evaluating”. So: define the terms, carry a named example or case study with its detail, build the reasoning rather than listing, weigh both sides explicitly, and finish with a conclusion that answers the question. Write it in accurate, well-punctuated prose with a wide range of specialist terms, because 3 marks ride on SPaG. (About one minute a mark: Paper 1 and Paper 2 allow 90 minutes for 88 marks.)"
   },
   {
    "marks": 6,
    "minutes": 7,
    "structure": "Papers 1, 2 and 3, the mid-tariff level-of-response question: 6 marks, Levels 1–3 (Basic 1–2, Clear 3–4, Detailed 5–6), usually two AOs, for example “AO1 = 2 marks, AO2 = 4 marks”, “AO2 = 2 marks, AO3 = 4 marks” or “AO1 = 2 marks, AO2 = 2 marks, AO3 = 2 marks”. Level 3 (Detailed, 5–6) reads “Provides a balanced discussion with well-developed ideas through a detailed understanding of the issue”, or on the resource questions “Demonstrates thorough application of knowledge and understanding to analyse geographical information, giving detailed explanation of formation of the features shown… Makes full analysis of the resource, using evidence to support response.” Level 2 (Clear, 3–4) gives “specific and accurate knowledge” and “clear geographical understanding of the interrelationships” but stops short of the analysis. Two or three developed points, each explained through to its consequence and tied to the figure, beat six undeveloped ones; where the question is set on a resource, the mark scheme caps a generic answer (“max level 1 for either description or explanation”)."
   },
   {
    "marks": 4,
    "minutes": 5,
    "structure": "Papers 1, 2 and 3, the short level-of-response question: 4 marks, only two levels (Basic 1–2, Clear 3–4) and normally two AOs — “AO2 = 2 marks, AO3 = 2 marks”, “AO3 = 2 marks, AO4 = 2 marks”. Level 2 (Clear, 3–4) reads “Demonstrates clear understanding of how coastal defence(s) work in defending the coast… Application is sound with clear interpretation of the strategies shown in the photograph”, or “Demonstrates application of knowledge and understanding [to] make full interpretation of the photograph, suggesting likely economic effects in the area shown”; Level 1 (Basic, 1–2) is “limited understanding” with “basic interpretation”. One or two points, each developed once and anchored in the resource, with no drift outside the focus the question names — “no credit for simply identifying the type of sea defence”, “no credit for… social and environmental effects, unless there is a related economic impact”."
   },
   {
    "marks": 9,
    "minutes": 11,
    "structure": "Paper 3 Section A, the issue-evaluation decision question: 9 marks plus 3 for SPaG, Levels 1–3 (Basic 1–3, Clear 4–6, Detailed 7–9), “AO3 = 6 marks, AO4 = 3 marks” — no AO1 at all, so unused knowledge earns nothing. Level 3 (Detailed, 7–9): “Demonstrates thorough application of knowledge and understanding in evaluating the effectiveness of the chosen project in terms of socio-economic and environmental benefits… Applies knowledge and understanding to make a decision based on a wide range of supportive evidence, making detailed links between content from different areas of the course of study… Communicates findings with clarity.” Level 2 (Clear, 4–6) is “reasonable application… a decision based on a reasonable range of supportive evidence, making clear links… Selects appropriate information in order to support judgement.” The shape: choose an option, evaluate it against the alternatives using the pre-release resources, cross-reference at least two themes from units 3.1 and 3.2, and justify the decision in terms of impact on both people and the physical environment. “Decision making requires a thorough evaluation of the full range of the data” and “an evaluation of the projects in relation to the challenges facing the city.” (Paper 3 allows 90 minutes for 76 marks.)"
   },
   {
    "marks": 9,
    "minutes": 11,
    "structure": "Paper 3 Section B, the fieldwork enquiry question on the student's own individual enquiry: 9 marks plus 3 for SPaG, Levels 1–3 (Basic 1–3, Clear 4–6, Detailed 7–9), “AO3 = 9 marks” — entirely application and judgement. Level 3 (Detailed, 7–9): “Provides detailed evaluation of results… Evaluates contribution made by results to the conclusion(s) reached in detail… Provides an informed judgement as to the extent to which the results contributed to reaching a reliable conclusion.” Level 2 (Clear, 4–6) is “a clear evaluation of results… a clear evaluation of the contribution made by results to the conclusion(s) reached… Makes a judgement…”, and Level 1 warns that “any judgement… will be weak and generic”. Three moves in order: evaluate the results themselves (accuracy, sample size, sampling strategy, the variables that interfered), evaluate what those results contributed to the conclusion, then judge how reliable the conclusion therefore is. Students “will have to identify the titles of their individual enquiries”, so the answer must be about real data the student collected."
   },
   {
    "marks": 6,
    "minutes": 7,
    "structure": "Paper 3 Section B, the fieldwork evaluation question on a named technique: 6 marks, Levels 1–3 (Basic 1–2, Clear 3–4, Detailed 5–6), “AO3 = 6 marks”. Level 3 (Detailed, 5–6): “Demonstrates a developed and balanced appreciation of the effectiveness of the components making up the named presentation technique(s)… Provides a substantiated overall assessment of the effectiveness of named presentation technique(s).” Level 2 (Clear, 3–4): “Specific components of named presentation technique(s) are evaluated with clear statements addressing effectiveness.” Level 1 is where “evaluation… is generic or incomplete. Example(s) of technique(s) may not be provided.” So name the technique, take it apart component by component (axes, scales, categories, proportionality, what the plot shows), judge each part, then give one overall verdict."
   }
  ]
 },
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/geography/specifications/AQA-8035-SP-2016.PDF",
  "etag": "\"d38e0-605250a7a4f78\"",
  "lastModified": "Tue, 12 Sep 2023 08:15:07 GMT",
  "length": 866528,
  "checkedAt": "2026-09-16T08:56:49.181Z"
 },
 "topics": [
  {
   "id": "3.1.1.1",
   "component": "C1",
   "option": null,
   "name": "Natural hazards",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.1.1.1 — Natural hazards pose major risks to people and property (definition)",
     "q": "What is a natural hazard?",
     "idea": "Natural hazards defined",
     "content": "Natural hazards pose major risks to people and property: definition of a natural hazard. This section sits within 3.1 Living with the physical environment, “concerned with the dynamic nature of physical processes and systems, and human interaction with them in a variety of places and at a range of scales”."
    },
    {
     "code": "3.1.1.1 — Natural hazards pose major risks to people and property (types)",
     "q": "What types of natural hazard are there?",
     "idea": "Types of natural hazard",
     "content": "Natural hazards pose major risks to people and property: types of natural hazard. The unit's aims are to develop “an understanding of the tectonic, geomorphological, biological and meteorological processes and features in different environments”, so the types studied run across those processes."
    },
    {
     "code": "3.1.1.1 — Natural hazards pose major risks to people and property (hazard risk)",
     "q": "What makes one place more at risk from a natural hazard than another?",
     "idea": "Factors affecting hazard risk",
     "content": "Natural hazards pose major risks to people and property: factors affecting hazard risk. In this section “students are required to study all the themes”, so hazard risk is compulsory content for Paper 1 Section A."
    }
   ]
  },
  {
   "id": "3.1.1.2",
   "component": "C1",
   "option": null,
   "name": "Tectonic hazards",
   "caseStudies": [
    "Use named examples to show how the effects and responses to a tectonic hazard vary between two areas of contrasting levels of wealth."
   ],
   "ideas": [
    {
     "code": "3.1.1.2 — Earthquakes and volcanic eruptions are the result of physical processes",
     "q": "Why do earthquakes and volcanic eruptions happen where they do?",
     "idea": "Plate tectonics and the global distribution of tectonic hazards",
     "content": "Plate tectonics theory. Global distribution of earthquakes and volcanic eruptions and their relationship to plate margins. Physical processes taking place at different types of plate margin (constructive, destructive and conservative) that lead to earthquakes and volcanic activity."
    },
    {
     "code": "3.1.1.2 — The effects of, and responses to, a tectonic hazard vary between areas of contrasting levels of wealth",
     "q": "Why do the effects of, and responses to, a tectonic hazard differ between a richer and a poorer area?",
     "idea": "Effects and responses vary with wealth",
     "content": "Primary and secondary effects of a tectonic hazard. Immediate and long-term responses to a tectonic hazard. Use named examples to show how the effects and responses to a tectonic hazard vary between two areas of contrasting levels of wealth."
    },
    {
     "code": "3.1.1.2 — Management can reduce the effects of a tectonic hazard",
     "q": "Why do people stay in tectonically active areas, and how can the risk be reduced?",
     "idea": "Living with and managing tectonic risk",
     "content": "Reasons why people continue to live in areas at risk from a tectonic hazard. How monitoring, prediction, protection and planning can reduce the risks from a tectonic hazard."
    }
   ]
  },
  {
   "id": "3.1.1.3",
   "component": "C1",
   "option": null,
   "name": "Weather hazards",
   "caseStudies": [
    "Use a named example of a tropical storm to show its effects and responses.",
    "An example of a recent extreme weather event in the UK to illustrate: causes; social, economic and environmental impacts; how management strategies can reduce risk."
   ],
   "ideas": [
    {
     "code": "3.1.1.3 — Global atmospheric circulation helps to determine patterns of weather and climate",
     "q": "How does global atmospheric circulation shape the world's patterns of weather and climate?",
     "idea": "General atmospheric circulation",
     "content": "General atmospheric circulation model: pressure belts and surface winds. This is the framework the rest of the section builds on, including the relationship between tropical storms and general atmospheric circulation."
    },
    {
     "code": "3.1.1.3 — Tropical storms (hurricanes, cyclones, typhoons) develop as a result of particular physical conditions",
     "q": "Where and why do tropical storms form, and how might climate change alter them?",
     "idea": "Formation, structure and distribution of tropical storms",
     "content": "Global distribution of tropical storms (hurricanes, cyclones, typhoons). An understanding of the relationship between tropical storms and general atmospheric circulation. Causes of tropical storms and the sequence of their formation and development. The structure and features of a tropical storm. How climate change might affect the distribution, frequency and intensity of tropical storms."
    },
    {
     "code": "3.1.1.3 — Tropical storms have significant effects on people and the environment",
     "q": "What are the effects of a tropical storm and how can they be reduced?",
     "idea": "Effects of, responses to and reduction of tropical storm risk",
     "content": "Primary and secondary effects of tropical storms. Immediate and long-term responses to tropical storms. Use a named example of a tropical storm to show its effects and responses. How monitoring, prediction, protection and planning can reduce the effects of tropical storms."
    },
    {
     "code": "3.1.1.3 — The UK is affected by a number of weather hazards",
     "q": "Which weather hazards affect the UK?",
     "idea": "UK weather hazards",
     "content": "An overview of types of weather hazard experienced in the UK. The specification pairs this overview with the requirement, in the next row, for an example of a recent extreme weather event in the UK."
    },
    {
     "code": "3.1.1.3 — Extreme weather events in the UK have impacts on human activity",
     "q": "What impact do extreme weather events have in the UK, and is UK weather becoming more extreme?",
     "idea": "Extreme weather in the UK",
     "content": "An example of a recent extreme weather event in the UK to illustrate: causes; social, economic and environmental impacts; how management strategies can reduce risk. Evidence that weather is becoming more extreme in the UK."
    }
   ]
  },
  {
   "id": "3.1.1.4",
   "component": "C1",
   "option": null,
   "name": "Climate change",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.1.1.4 — Climate change is the result of natural and human factors, and has a range of effects (evidence)",
     "q": "What is the evidence that the climate has changed?",
     "idea": "Evidence for climate change",
     "content": "Evidence for climate change from the beginning of the Quaternary period to the present day — the time frame the specification sets for the evidence a student must be able to use."
    },
    {
     "code": "3.1.1.4 — Climate change is the result of natural and human factors, and has a range of effects (causes)",
     "q": "What causes climate change?",
     "idea": "Natural and human causes of climate change",
     "content": "Possible causes of climate change: natural factors – orbital changes, volcanic activity and solar output; human factors – use of fossil fuels, agriculture and deforestation."
    },
    {
     "code": "3.1.1.4 — Climate change is the result of natural and human factors, and has a range of effects (effects)",
     "q": "What are the effects of climate change on people and the environment?",
     "idea": "Effects of climate change",
     "content": "Overview of the effects of climate change on people and the environment — the specification asks for an overview of both the human and the environmental effects, not a single case."
    },
    {
     "code": "3.1.1.4 — Managing climate change involves both mitigation (reducing causes) and adaptation (responding to change) (mitigation)",
     "q": "How can the causes of climate change be reduced?",
     "idea": "Mitigation of climate change",
     "content": "Managing climate change: mitigation – alternative energy production, carbon capture, planting trees, international agreements."
    },
    {
     "code": "3.1.1.4 — Managing climate change involves both mitigation (reducing causes) and adaptation (responding to change) (adaptation)",
     "q": "How can people adapt to a changing climate?",
     "idea": "Adaptation to climate change",
     "content": "Managing climate change: adaptation – change in agricultural systems, managing water supply, reducing risk from rising sea levels."
    }
   ]
  },
  {
   "id": "3.1.2.1",
   "component": "C1",
   "option": null,
   "name": "Ecosystems",
   "caseStudies": [
    "An example of a small scale UK ecosystem to illustrate the concept of interrelationships within a natural system, an understanding of producers, consumers, decomposers, food chain, food web and nutrient cycling."
   ],
   "ideas": [
    {
     "code": "3.1.2.1 — Ecosystems exist at a range of scales and involve the interaction between biotic and abiotic components (small scale UK ecosystem)",
     "q": "How do the parts of a small ecosystem work together?",
     "idea": "A small scale UK ecosystem as a natural system",
     "content": "An example of a small scale UK ecosystem to illustrate the concept of interrelationships within a natural system, an understanding of producers, consumers, decomposers, food chain, food web and nutrient cycling."
    },
    {
     "code": "3.1.2.1 — Ecosystems exist at a range of scales and involve the interaction between biotic and abiotic components (balance between components)",
     "q": "What happens to an ecosystem when one component changes?",
     "idea": "Balance between components",
     "content": "The balance between components. The impact on the ecosystem of changing one component — the specification requires students to be able to trace the knock-on effects of a single change through the whole system."
    },
    {
     "code": "3.1.2.1 — Ecosystems exist at a range of scales and involve the interaction between biotic and abiotic components (global ecosystems)",
     "q": "Where are the world's large scale natural ecosystems and what are they like?",
     "idea": "Global distribution of large scale ecosystems",
     "content": "An overview of the distribution and characteristics of large scale natural global ecosystems — the global frame within which the chosen ecosystems of this section (tropical rainforests and one of hot deserts or cold environments) are then studied."
    }
   ]
  },
  {
   "id": "3.1.2.2",
   "component": "C1",
   "option": null,
   "name": "Tropical rainforests",
   "caseStudies": [
    "A case study of a tropical rainforest to illustrate: causes of deforestation – subsistence and commercial farming, logging, road building, mineral extraction, energy development, settlement, population growth; impacts of deforestation – economic development, soil erosion, contribution to climate change."
   ],
   "ideas": [
    {
     "code": "3.1.2.2 — Tropical rainforest ecosystems have a range of distinctive characteristics",
     "q": "What makes a tropical rainforest distinctive?",
     "idea": "Characteristics, interdependence and adaptation in tropical rainforests",
     "content": "The physical characteristics of a tropical rainforest. The interdependence of climate, water, soils, plants, animals and people. How plants and animals adapt to the physical conditions. Issues related to biodiversity."
    },
    {
     "code": "3.1.2.2 — Deforestation has economic and environmental impacts (changing rates)",
     "q": "How fast is the rainforest being cleared?",
     "idea": "Changing rates of deforestation",
     "content": "Changing rates of deforestation — the specification opens this key idea with the rate of clearance before it turns to the required case study of causes and impacts."
    },
    {
     "code": "3.1.2.2 — Deforestation has economic and environmental impacts (case study of a tropical rainforest)",
     "q": "Why is a named tropical rainforest being cleared, and what are the consequences?",
     "idea": "Causes and impacts of deforestation in a named rainforest",
     "content": "A case study of a tropical rainforest to illustrate: causes of deforestation – subsistence and commercial farming, logging, road building, mineral extraction, energy development, settlement, population growth; impacts of deforestation – economic development, soil erosion, contribution to climate change."
    },
    {
     "code": "3.1.2.2 — Tropical rainforests need to be managed to be sustainable",
     "q": "Why are tropical rainforests valuable, and how can they be managed sustainably?",
     "idea": "Value and sustainable management of tropical rainforests",
     "content": "Value of tropical rainforests to people and the environment. Strategies used to manage the rainforest sustainably – selective logging and replanting, conservation and education, ecotourism and international agreements about the use of tropical hardwoods, debt reduction."
    }
   ]
  },
  {
   "id": "3.1.2.3",
   "component": "C1",
   "option": "livingWorld",
   "name": "Hot deserts",
   "caseStudies": [
    "A case study of a hot desert to illustrate: development opportunities in hot desert environments: mineral extraction, energy, farming, tourism; challenges of developing hot desert environments: extreme temperatures, water supply, inaccessibility."
   ],
   "ideas": [
    {
     "code": "3.1.2.3 — Hot desert ecosystems have a range of distinctive characteristics",
     "q": "What makes a hot desert distinctive?",
     "idea": "Characteristics, interdependence and adaptation in hot deserts",
     "content": "The physical characteristics of a hot desert. The interdependence of climate, water, soils, plants, animals and people. How plants and animals adapt to the physical conditions. Issues related to biodiversity."
    },
    {
     "code": "3.1.2.3 — Development of hot desert environments creates opportunities and challenges",
     "q": "What opportunities and challenges does development bring in a named hot desert?",
     "idea": "Opportunities and challenges of developing a hot desert",
     "content": "A case study of a hot desert to illustrate: development opportunities in hot desert environments: mineral extraction, energy, farming, tourism; challenges of developing hot desert environments: extreme temperatures, water supply, inaccessibility."
    },
    {
     "code": "3.1.2.3 — Areas on the fringe of hot deserts are at risk of desertification (causes)",
     "q": "Why does desertification happen on the fringes of hot deserts?",
     "idea": "Causes of desertification",
     "content": "Causes of desertification – climate change, population growth, removal of fuel wood, overgrazing, over-cultivation and soil erosion."
    },
    {
     "code": "3.1.2.3 — Areas on the fringe of hot deserts are at risk of desertification (strategies)",
     "q": "How can the risk of desertification be reduced?",
     "idea": "Strategies to reduce the risk of desertification",
     "content": "Strategies used to reduce the risk of desertification – water and soil management, tree planting and use of appropriate technology."
    }
   ]
  },
  {
   "id": "3.1.2.4",
   "component": "C1",
   "option": "livingWorld",
   "name": "Cold environments",
   "caseStudies": [
    "A case study of a cold environment to illustrate: development opportunities in cold environments: mineral extraction, energy, fishing and tourism; challenges of developing cold environments: extreme temperature, inaccessibility, provision of buildings and infrastructure."
   ],
   "ideas": [
    {
     "code": "3.1.2.4 — Cold environments (polar and tundra) have a range of distinctive characteristics",
     "q": "What makes a cold environment distinctive?",
     "idea": "Characteristics, interdependence and adaptation in cold environments",
     "content": "The physical characteristics of a cold environment. The interdependence of climate, permafrost, soils, plants, animals and people. How plants and animals adapt to the physical conditions. Issues related to biodiversity."
    },
    {
     "code": "3.1.2.4 — Development of cold environments creates opportunities and challenges",
     "q": "What opportunities and challenges does development bring in a named cold environment?",
     "idea": "Opportunities and challenges of developing a cold environment",
     "content": "A case study of a cold environment to illustrate: development opportunities in cold environments: mineral extraction, energy, fishing and tourism; challenges of developing cold environments: extreme temperature, inaccessibility, provision of buildings and infrastructure."
    },
    {
     "code": "3.1.2.4 — Cold environments are at risk from economic development (wilderness value)",
     "q": "Why should fragile cold environments be protected?",
     "idea": "The value of cold environments as wilderness areas",
     "content": "The value of cold environments as wilderness areas and why these fragile environments should be protected — the argument a student must be able to make before weighing it against economic development."
    },
    {
     "code": "3.1.2.4 — Cold environments are at risk from economic development (balancing development and conservation)",
     "q": "How can economic development and conservation be balanced in cold environments?",
     "idea": "Strategies to balance development and conservation",
     "content": "Strategies used to balance the needs of economic development and conservation in cold environments – use of technology, role of governments, international agreements and conservation groups."
    }
   ]
  },
  {
   "id": "3.1.3.1",
   "component": "C1",
   "option": null,
   "name": "UK physical landscapes",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.1.3.1 — The UK has a range of diverse landscapes (upland and lowland areas)",
     "q": "Where are the UK's major upland and lowland areas?",
     "idea": "The UK's major upland and lowland areas",
     "content": "An overview of the location of major upland/lowland areas and river systems: the location of the UK's major upland areas and major lowland areas, as the compulsory introduction to 3.1.3 Physical landscapes in the UK."
    },
    {
     "code": "3.1.3.1 — The UK has a range of diverse landscapes (river systems)",
     "q": "Where are the UK's major river systems?",
     "idea": "The UK's major river systems",
     "content": "An overview of the location of major upland/lowland areas and river systems: the location of the UK's major river systems, which the two landscape options chosen from coastal, river and glacial landscapes build on."
    }
   ]
  },
  {
   "id": "3.1.3.2",
   "component": "C1",
   "option": "landscapes",
   "name": "Coastal landscapes in the UK",
   "caseStudies": [
    "An example of a section of coastline in the UK to identify its major landforms of erosion and deposition.",
    "An example of a coastal management scheme in the UK to show: the reasons for management; the management strategy; the resulting effects and conflicts."
   ],
   "ideas": [
    {
     "code": "3.1.3.2 — The coast is shaped by a number of physical processes (waves)",
     "q": "How do waves shape the coast?",
     "idea": "Wave types and characteristics",
     "content": "Wave types and characteristics — the starting point of the specification's account of how the coast is shaped by a number of physical processes."
    },
    {
     "code": "3.1.3.2 — The coast is shaped by a number of physical processes (coastal processes)",
     "q": "Which processes erode, move and deposit material at the coast?",
     "idea": "Coastal processes",
     "content": "Coastal processes: weathering processes – mechanical, chemical; mass movement – sliding, slumping and rock falls; erosion – hydraulic power, abrasion and attrition; transportation – longshore drift; deposition – why sediment is deposited in coastal areas."
    },
    {
     "code": "3.1.3.2 — Distinctive coastal landforms are the result of rock type, structure and physical processes (erosion)",
     "q": "How do rock type, structure and erosion create coastal landforms?",
     "idea": "Geology and landforms of coastal erosion",
     "content": "How geological structure and rock type influence coastal forms. Characteristics and formation of landforms resulting from erosion – headlands and bays, cliffs and wave cut platforms, caves, arches and stacks."
    },
    {
     "code": "3.1.3.2 — Distinctive coastal landforms are the result of rock type, structure and physical processes (deposition)",
     "q": "How are depositional coastal landforms formed?",
     "idea": "Landforms of coastal deposition",
     "content": "Characteristics and formation of landforms resulting from deposition – beaches, sand dunes, spits and bars."
    },
    {
     "code": "3.1.3.2 — Distinctive coastal landforms are the result of rock type, structure and physical processes (example of a section of coastline)",
     "q": "Which landforms of erosion and deposition can be identified on a named UK coastline?",
     "idea": "A named section of UK coastline",
     "content": "An example of a section of coastline in the UK to identify its major landforms of erosion and deposition. Cartographic skills apply directly here: the specification requires students to “describe the physical features as they are shown on large scale maps” of coastlines."
    },
    {
     "code": "3.1.3.2 — Different management strategies can be used to protect coastlines from the effects of physical processes (costs and benefits)",
     "q": "What are the costs and benefits of the ways coastlines are defended?",
     "idea": "Hard engineering, soft engineering and managed retreat",
     "content": "The costs and benefits of the following management strategies: hard engineering – sea walls, rock armour, gabions and groynes; soft engineering – beach nourishment and reprofiling, dune regeneration; managed retreat – coastal realignment."
    },
    {
     "code": "3.1.3.2 — Different management strategies can be used to protect coastlines from the effects of physical processes (example of a coastal management scheme)",
     "q": "Why was a named UK coastal management scheme needed, and what did it cause?",
     "idea": "A named UK coastal management scheme",
     "content": "An example of a coastal management scheme in the UK to show: the reasons for management; the management strategy; the resulting effects and conflicts."
    }
   ]
  },
  {
   "id": "3.1.3.3",
   "component": "C1",
   "option": "landscapes",
   "name": "River landscapes in the UK",
   "caseStudies": [
    "An example of a river valley in the UK to identify its major landforms of erosion and deposition.",
    "An example of a flood management scheme in the UK to show: why the scheme was required; the management strategy; the social, economic and environmental issues."
   ],
   "ideas": [
    {
     "code": "3.1.3.3 — The shape of river valleys changes as rivers flow downstream (long and cross profiles)",
     "q": "How do the long profile and cross profile of a river and its valley change downstream?",
     "idea": "Long profile and changing cross profile",
     "content": "The long profile and changing cross profile of a river and its valley — the specification's frame for everything that follows about fluvial processes and landforms."
    },
    {
     "code": "3.1.3.3 — The shape of river valleys changes as rivers flow downstream (fluvial processes)",
     "q": "Which processes erode, transport and deposit material in a river?",
     "idea": "Fluvial processes",
     "content": "Fluvial processes: erosion – hydraulic action, abrasion, attrition, solution, vertical and lateral erosion; transportation – traction, saltation, suspension and solution; deposition – why rivers deposit sediment."
    },
    {
     "code": "3.1.3.3 — Distinctive fluvial landforms result from different physical processes (erosion)",
     "q": "How are river landforms of erosion formed?",
     "idea": "Landforms resulting from erosion",
     "content": "Characteristics and formation of landforms resulting from erosion – interlocking spurs, waterfalls and gorges."
    },
    {
     "code": "3.1.3.3 — Distinctive fluvial landforms result from different physical processes (erosion and deposition)",
     "q": "How are meanders, ox-bow lakes and the depositional landforms of the lower course formed?",
     "idea": "Landforms of erosion and deposition, and of deposition",
     "content": "Characteristics and formation of landforms resulting from erosion and deposition – meanders and ox-bow lakes. Characteristics and formation of landforms resulting from deposition – levées, flood plains and estuaries."
    },
    {
     "code": "3.1.3.3 — Distinctive fluvial landforms result from different physical processes (example of a river valley)",
     "q": "Which landforms of erosion and deposition can be identified in a named UK river valley?",
     "idea": "A named UK river valley",
     "content": "An example of a river valley in the UK to identify its major landforms of erosion and deposition. The cartographic skills list requires students to “describe the physical features as they are shown on large scale maps” of fluvial landscapes."
    },
    {
     "code": "3.1.3.3 — Different management strategies can be used to protect river landscapes from the effects of flooding (flood risk)",
     "q": "What makes a river more likely to flood, and how is that shown on a hydrograph?",
     "idea": "Factors affecting flood risk and the use of hydrographs",
     "content": "How physical and human factors affect the flood risk – precipitation, geology, relief and land use. The use of hydrographs to show the relationship between precipitation and discharge."
    },
    {
     "code": "3.1.3.3 — Different management strategies can be used to protect river landscapes from the effects of flooding (costs and benefits)",
     "q": "What are the costs and benefits of the ways rivers are managed against flooding?",
     "idea": "Hard and soft engineering against flooding",
     "content": "The costs and benefits of the following management strategies: hard engineering – dams and reservoirs, straightening, embankments, flood relief channels; soft engineering – flood warnings and preparation, flood plain zoning, planting trees and river restoration."
    },
    {
     "code": "3.1.3.3 — Different management strategies can be used to protect river landscapes from the effects of flooding (example of a flood management scheme)",
     "q": "Why was a named UK flood management scheme required, and what issues did it raise?",
     "idea": "A named UK flood management scheme",
     "content": "An example of a flood management scheme in the UK to show: why the scheme was required; the management strategy; the social, economic and environmental issues."
    }
   ]
  },
  {
   "id": "3.1.3.4",
   "component": "C1",
   "option": "landscapes",
   "name": "Glacial landscapes in the UK",
   "caseStudies": [
    "An example of an upland area in the UK affected by glaciation to identify its major landforms of erosion and deposition.",
    "An example of a glaciated upland area in the UK used for tourism to show: the attractions for tourists; social, economic and environmental impacts of tourism; strategies used to manage the impact of tourism."
   ],
   "ideas": [
    {
     "code": "3.1.3.4 — Ice was a powerful force in shaping the physical landscape of the UK (extent of ice cover)",
     "q": "How much of the UK was covered by ice in the last ice age?",
     "idea": "Maximum extent of ice cover across the UK",
     "content": "Maximum extent of ice cover across the UK during the last ice age — the specification's starting point for explaining why glacial landforms are found where they are in the UK."
    },
    {
     "code": "3.1.3.4 — Ice was a powerful force in shaping the physical landscape of the UK (glacial processes)",
     "q": "Which processes let a glacier erode, move and deposit material?",
     "idea": "Glacial processes",
     "content": "Glacial processes: freeze-thaw weathering; erosion – abrasion and plucking; movement and transportation – rotational slip and bulldozing; deposition – why glaciers deposit sediment (till and outwash)."
    },
    {
     "code": "3.1.3.4 — Distinctive glacial landforms result from different physical processes (erosion)",
     "q": "How are glacial landforms of erosion formed?",
     "idea": "Landforms resulting from glacial erosion",
     "content": "Characteristics and formation of landforms resulting from erosion – corries, arêtes, pyramidal peaks, truncated spurs, glacial troughs, ribbon lakes and hanging valleys."
    },
    {
     "code": "3.1.3.4 — Distinctive glacial landforms result from different physical processes (transportation and deposition)",
     "q": "How are glacial landforms of transportation and deposition formed?",
     "idea": "Landforms resulting from transportation and deposition",
     "content": "Characteristics and formation of landforms resulting from transportation and deposition – erratics, drumlins, types of moraine."
    },
    {
     "code": "3.1.3.4 — Distinctive glacial landforms result from different physical processes (example of an upland area)",
     "q": "Which glacial landforms can be identified in a named UK upland area?",
     "idea": "A named glaciated UK upland area",
     "content": "An example of an upland area in the UK affected by glaciation to identify its major landforms of erosion and deposition. The cartographic skills list requires students to “describe the physical features as they are shown on large scale maps” of glacial landscapes."
    },
    {
     "code": "3.1.3.4 — Glaciated upland areas provide opportunities for different economic activities, and management strategies can be used to reduce land use conflicts (economic activities)",
     "q": "What economic activities take place in glaciated upland areas?",
     "idea": "Economic activities in glaciated uplands",
     "content": "An overview of economic activities in glaciated upland areas – tourism, farming, forestry and quarrying."
    },
    {
     "code": "3.1.3.4 — Glaciated upland areas provide opportunities for different economic activities, and management strategies can be used to reduce land use conflicts (conflicts)",
     "q": "Why do land uses conflict in glaciated upland areas?",
     "idea": "Land use conflict in glaciated uplands",
     "content": "Conflicts between different land uses, and between development and conservation — the tension the specification asks students to weigh in glaciated upland areas."
    },
    {
     "code": "3.1.3.4 — Glaciated upland areas provide opportunities for different economic activities, and management strategies can be used to reduce land use conflicts (tourism example)",
     "q": "How is the impact of tourism managed in a named glaciated UK upland area?",
     "idea": "A named glaciated UK upland area used for tourism",
     "content": "An example of a glaciated upland area in the UK used for tourism to show: the attractions for tourists; social, economic and environmental impacts of tourism; strategies used to manage the impact of tourism."
    }
   ]
  },
  {
   "id": "3.2.1",
   "component": "C2",
   "option": null,
   "name": "Urban issues and challenges",
   "caseStudies": [
    "A case study of a major city in an LIC or NEE to illustrate: the location and importance of the city, regionally, nationally and internationally; causes of growth: natural increase and migration; how urban growth has created opportunities; how urban growth has created challenges.",
    "An example of how urban planning is improving the quality of life for the urban poor.",
    "A case study of a major city in the UK to illustrate: the location and importance of the city in the UK and the wider world; impacts of national and international migration on the growth and character of the city; how urban change has created opportunities; how urban change has created challenges.",
    "An example of an urban regeneration project to show: reasons why the area needed regeneration; the main features of the project."
   ],
   "ideas": [
    {
     "code": "3.2.1 — A growing percentage of the world’s population lives in urban areas",
     "q": "Why is a growing share of the world's population urban?",
     "idea": "Global urban change and urbanisation",
     "content": "The global pattern of urban change. Urban trends in different parts of the world including HICs and LICs. Factors affecting the rate of urbanisation – migration (push–pull theory), natural increase. The emergence of megacities."
    },
    {
     "code": "3.2.1 — Urban growth creates opportunities and challenges for cities in LICs and NEEs (location, importance and growth)",
     "q": "Where is your named LIC or NEE city, why does it matter, and why is it growing?",
     "idea": "A major LIC or NEE city: location, importance and causes of growth",
     "content": "A case study of a major city in an LIC or NEE to illustrate: the location and importance of the city, regionally, nationally and internationally; causes of growth: natural increase and migration."
    },
    {
     "code": "3.2.1 — Urban growth creates opportunities and challenges for cities in LICs and NEEs (opportunities)",
     "q": "What opportunities has urban growth created in your named LIC or NEE city?",
     "idea": "Social and economic opportunities of urban growth",
     "content": "A case study of a major city in an LIC or NEE to illustrate how urban growth has created opportunities: social: access to services – health and education; access to resources – water supply, energy; economic: how urban industrial areas can be a stimulus for economic development."
    },
    {
     "code": "3.2.1 — Urban growth creates opportunities and challenges for cities in LICs and NEEs (challenges)",
     "q": "What challenges has urban growth created in your named LIC or NEE city, and how is planning helping the urban poor?",
     "idea": "Challenges of urban growth, and urban planning for the urban poor",
     "content": "A case study of a major city in an LIC or NEE to illustrate how urban growth has created challenges: managing urban growth – slums, squatter settlements; providing clean water, sanitation systems and energy; providing access to services – health and education; reducing unemployment and crime; managing environmental issues – waste disposal, air and water pollution, traffic congestion. An example of how urban planning is improving the quality of life for the urban poor."
    },
    {
     "code": "3.2.1 — Urban change in cities in the UK leads to a variety of social, economic and environmental opportunities and challenges (distribution, location and migration)",
     "q": "Where do people live in the UK, and how has migration shaped your named UK city?",
     "idea": "UK population distribution and a major UK city",
     "content": "Overview of the distribution of population and the major cities in the UK. A case study of a major city in the UK to illustrate: the location and importance of the city in the UK and the wider world; impacts of national and international migration on the growth and character of the city."
    },
    {
     "code": "3.2.1 — Urban change in cities in the UK leads to a variety of social, economic and environmental opportunities and challenges (opportunities)",
     "q": "What opportunities has urban change created in your named UK city?",
     "idea": "Opportunities created by urban change in a UK city",
     "content": "A case study of a major city in the UK to illustrate how urban change has created opportunities: social and economic: cultural mix, recreation and entertainment, employment, integrated transport systems; environmental: urban greening."
    },
    {
     "code": "3.2.1 — Urban change in cities in the UK leads to a variety of social, economic and environmental opportunities and challenges (challenges and regeneration)",
     "q": "What challenges has urban change created in your named UK city, and why was an area regenerated?",
     "idea": "Challenges of urban change, urban sprawl and regeneration",
     "content": "A case study of a major city in the UK to illustrate how urban change has created challenges: social and economic: urban deprivation, inequalities in housing, education, health and employment; environmental: dereliction, building on brownfield and greenfield sites, waste disposal; the impact of urban sprawl on the rural–urban fringe, and the growth of commuter settlements. An example of an urban regeneration project to show: reasons why the area needed regeneration; the main features of the project."
    },
    {
     "code": "3.2.1 — Urban sustainability requires management of resources and transport (sustainable urban living)",
     "q": "What makes urban living sustainable?",
     "idea": "Features of sustainable urban living",
     "content": "Features of sustainable urban living: water and energy conservation; waste recycling; creating green space."
    },
    {
     "code": "3.2.1 — Urban sustainability requires management of resources and transport (transport)",
     "q": "How can urban transport strategies reduce traffic congestion?",
     "idea": "Urban transport strategies",
     "content": "How urban transport strategies are used to reduce traffic congestion — the specimen mark scheme sets this as a nine-mark evaluation of “the effectiveness of an urban transport scheme(s)”, so named schemes are expected."
    }
   ]
  },
  {
   "id": "3.2.2",
   "component": "C2",
   "option": null,
   "name": "The changing economic world",
   "caseStudies": [
    "An example of how the growth of tourism in an LIC or NEE helps to reduce the development gap.",
    "A case study of one LIC or NEE to illustrate: the location and importance of the country, regionally and globally; the wider political, social, cultural and environmental context within which the country is placed; the changing industrial structure; the role of transnational corporations (TNCs); the changing political and trading relationships with the wider world; international aid; the environmental impacts of economic development; the effects of economic development on quality of life for the population.",
    "An example of how modern industrial development can be more environmentally sustainable."
   ],
   "ideas": [
    {
     "code": "3.2.2 — There are global variations in economic development and quality of life (classifying and measuring development)",
     "q": "How is a country's level of development classified and measured?",
     "idea": "Classifying and measuring development",
     "content": "Different ways of classifying parts of the world according to their level of economic development and quality of life. Different economic and social measures of development: gross national income (GNI) per head, birth and death rates, infant mortality, life expectancy, people per doctor, literacy rates, access to safe water, Human Development Index (HDI)."
    },
    {
     "code": "3.2.2 — There are global variations in economic development and quality of life (limitations and the DTM)",
     "q": "Why can a single measure of development mislead, and how does the DTM relate to development?",
     "idea": "Limitations of measures and the Demographic Transition Model",
     "content": "Limitations of economic and social measures. Link between stages of the Demographic Transition Model and the level of development."
    },
    {
     "code": "3.2.2 — There are global variations in economic development and quality of life (causes and consequences of uneven development)",
     "q": "Why is development uneven, and what does that unevenness cause?",
     "idea": "Causes and consequences of uneven development",
     "content": "Causes of uneven development: physical, economic and historical. Consequences of uneven development: disparities in wealth and health, international migration."
    },
    {
     "code": "3.2.2 — Various strategies exist for reducing the global development gap (overview of strategies)",
     "q": "What strategies are used to close the development gap?",
     "idea": "Strategies for reducing the development gap",
     "content": "An overview of the strategies used to reduce the development gap: investment, industrial development and tourism, aid, using intermediate technology, fairtrade, debt relief, microfinance loans."
    },
    {
     "code": "3.2.2 — Various strategies exist for reducing the global development gap (tourism example)",
     "q": "How does the growth of tourism narrow the development gap in a named LIC or NEE?",
     "idea": "Tourism as a way of reducing the development gap",
     "content": "An example of how the growth of tourism in an LIC or NEE helps to reduce the development gap — one of the strategies above, required by the specification as a worked example rather than as generalisation."
    },
    {
     "code": "3.2.2 — Some LICs and NEEs are experiencing rapid economic development which leads to significant social, environmental and cultural change (location and context)",
     "q": "Where is your named LIC or NEE, and what is its wider context?",
     "idea": "A named LIC or NEE: location, importance and context",
     "content": "A case study of one LIC or NEE to illustrate: the location and importance of the country, regionally and globally; the wider political, social, cultural and environmental context within which the country is placed."
    },
    {
     "code": "3.2.2 — Some LICs and NEEs are experiencing rapid economic development which leads to significant social, environmental and cultural change (industrial structure and TNCs)",
     "q": "How is the economy of your named LIC or NEE changing, and what part do TNCs play?",
     "idea": "Changing industrial structure and the role of TNCs",
     "content": "A case study of one LIC or NEE to illustrate: the changing industrial structure. The balance between different sectors of the economy. How manufacturing industry can stimulate economic development; the role of transnational corporations (TNCs) in relation to industrial development. Advantages and disadvantages of TNC(s) to the host country."
    },
    {
     "code": "3.2.2 — Some LICs and NEEs are experiencing rapid economic development which leads to significant social, environmental and cultural change (trade, aid, environment and quality of life)",
     "q": "How have trade, aid and economic development changed life and the environment in your named LIC or NEE?",
     "idea": "Trading relationships, aid, environmental impacts and quality of life",
     "content": "A case study of one LIC or NEE to illustrate: the changing political and trading relationships with the wider world; international aid: types of aid, impacts of aid on the receiving country; the environmental impacts of economic development; the effects of economic development on quality of life for the population."
    },
    {
     "code": "3.2.2 — Major changes in the economy of the UK have affected, and will continue to affect, employment patterns and regional growth (causes of change and the post-industrial economy)",
     "q": "Why has the UK economy changed, and what is a post-industrial economy?",
     "idea": "Causes of economic change and the post-industrial economy",
     "content": "Economic futures in the UK: causes of economic change: de-industrialisation and decline of traditional industrial base, globalisation and government policies; moving towards a post-industrial economy: development of information technology, service industries, finance, research, science and business parks."
    },
    {
     "code": "3.2.2 — Major changes in the economy of the UK have affected, and will continue to affect, employment patterns and regional growth (environment and the rural landscape)",
     "q": "What has economic change done to the UK's physical environment and rural areas?",
     "idea": "Industry, the environment and rural change",
     "content": "Economic futures in the UK: impacts of industry on the physical environment. An example of how modern industrial development can be more environmentally sustainable; social and economic changes in the rural landscape in one area of population growth and one area of population decline."
    },
    {
     "code": "3.2.2 — Major changes in the economy of the UK have affected, and will continue to affect, employment patterns and regional growth (infrastructure, the north–south divide and the UK in the wider world)",
     "q": "How are transport, regional difference and the UK's global links changing?",
     "idea": "Infrastructure, regional difference and the UK in the wider world",
     "content": "Economic futures in the UK: improvements and new developments in road and rail infrastructure, port and airport capacity; the north–south divide. Strategies used in an attempt to resolve regional differences; the place of the UK in the wider world. Links through trade, culture, transport, and electronic communication. Economic and political links: the European Union (EU) and Commonwealth."
    }
   ]
  },
  {
   "id": "3.2.3.1",
   "component": "C2",
   "option": null,
   "name": "Resource management",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.2.3.1 — Food, water and energy are fundamental to human development",
     "q": "Why do food, water and energy matter so much, and why are they so unequally supplied?",
     "idea": "The significance of resources and global inequalities in them",
     "content": "The significance of food, water and energy to economic and social well-being. An overview of global inequalities in the supply and consumption of resources."
    },
    {
     "code": "3.2.3.1 — The changing demand and provision of resources in the UK create opportunities and challenges (overview)",
     "q": "What is the overall resource position of the UK?",
     "idea": "An overview of resources in relation to the UK",
     "content": "An overview of resources in relation to the UK — the specification's lead-in to the three UK strands (food, water and energy) that follow in the same content cell."
    },
    {
     "code": "3.2.3.1 — The changing demand and provision of resources in the UK create opportunities and challenges (Food)",
     "q": "How is the UK's demand for and provision of food changing?",
     "idea": "Food in the UK",
     "content": "Food: the growing demand for high-value food exports from low income countries and all-year demand for seasonal food and organic produce; larger carbon footprints due to the increasing number of ‘food miles’ travelled, and moves towards local sourcing of food; the trend towards agribusiness."
    },
    {
     "code": "3.2.3.1 — The changing demand and provision of resources in the UK create opportunities and challenges (Water)",
     "q": "How is the UK's demand for and provision of water changing?",
     "idea": "Water in the UK",
     "content": "Water: the changing demand for water; water quality and pollution management; matching supply and demand – areas of deficit and surplus; the need for transfer to maintain supplies."
    },
    {
     "code": "3.2.3.1 — The changing demand and provision of resources in the UK create opportunities and challenges (Energy)",
     "q": "How is the UK's demand for and provision of energy changing?",
     "idea": "Energy in the UK",
     "content": "Energy: the changing energy mix – reliance on fossil fuels, growing significance of renewables; reduced domestic supplies of coal, gas and oil; economic and environmental issues associated with exploitation of energy sources."
    }
   ]
  },
  {
   "id": "3.2.3.2",
   "component": "C2",
   "option": "resource",
   "name": "Food",
   "caseStudies": [
    "An example of a large scale agricultural development to show how it has both advantages and disadvantages.",
    "An example of a local scheme in an LIC or NEE to increase sustainable supplies of food."
   ],
   "ideas": [
    {
     "code": "3.2.3.2 — Demand for food resources is rising globally but supply can be insecure, which may lead to conflict (surplus and deficit)",
     "q": "Where is food secure and where is it not, and why is consumption rising?",
     "idea": "Areas of food surplus and deficit",
     "content": "Areas of surplus (security) and deficit (insecurity): global patterns of calorie intake and food supply; reasons for increasing food consumption: economic development, rising population; factors affecting food supply: climate, technology, pests and disease, water stress, conflict, poverty."
    },
    {
     "code": "3.2.3.2 — Demand for food resources is rising globally but supply can be insecure, which may lead to conflict (impacts of insecurity)",
     "q": "What happens where food is insecure?",
     "idea": "Impacts of food insecurity",
     "content": "Impacts of food insecurity – famine, undernutrition, soil erosion, rising prices, social unrest — the consequences that make food insecurity a potential source of conflict."
    },
    {
     "code": "3.2.3.2 — Different strategies can be used to increase food supply (increasing supply)",
     "q": "How can food supply be increased?",
     "idea": "Strategies to increase food supply",
     "content": "Overview of strategies to increase food supply: irrigation, aeroponics and hydroponics, the new green revolution and use of biotechnology, appropriate technology; an example of a large scale agricultural development to show how it has both advantages and disadvantages."
    },
    {
     "code": "3.2.3.2 — Different strategies can be used to increase food supply (sustainable resource future)",
     "q": "What would a sustainable food supply look like?",
     "idea": "Moving towards a sustainable food supply",
     "content": "Moving towards a sustainable resource future: the potential for sustainable food supplies: organic farming, permaculture, urban farming initiatives, fish and meat from sustainable sources, seasonal food consumption, reduced waste and losses; an example of a local scheme in an LIC or NEE to increase sustainable supplies of food."
    }
   ]
  },
  {
   "id": "3.2.3.3",
   "component": "C2",
   "option": "resource",
   "name": "Water",
   "caseStudies": [
    "An example of a large scale water transfer scheme to show how its development has both advantages and disadvantages.",
    "An example of a local scheme in an LIC or NEE to increase sustainable supplies of water."
   ],
   "ideas": [
    {
     "code": "3.2.3.3 — Demand for water resources is rising globally but supply can be insecure, which may lead to conflict (surplus and deficit)",
     "q": "Where is water secure and where is it not, and why is consumption rising?",
     "idea": "Areas of water surplus and deficit",
     "content": "Areas of surplus (security) and deficit (insecurity): global patterns of water surplus and deficit; reasons for increasing water consumption: economic development, rising population; factors affecting water availability: climate, geology, pollution of supply, over-abstraction, limited infrastructure, poverty."
    },
    {
     "code": "3.2.3.3 — Demand for water resources is rising globally but supply can be insecure, which may lead to conflict (impacts of insecurity)",
     "q": "What happens where water is insecure?",
     "idea": "Impacts of water insecurity",
     "content": "Impacts of water insecurity – waterborne disease and water pollution, food production, industrial output, potential for conflict where demand exceeds supply."
    },
    {
     "code": "3.2.3.3 — Different strategies can be used to increase water supply (increasing supply)",
     "q": "How can water supply be increased?",
     "idea": "Strategies to increase water supply",
     "content": "Overview of strategies to increase water supply: diverting supplies and increasing storage, dams and reservoirs, water transfers and desalination; an example of a large scale water transfer scheme to show how its development has both advantages and disadvantages."
    },
    {
     "code": "3.2.3.3 — Different strategies can be used to increase water supply (sustainable resource future)",
     "q": "What would a sustainable water supply look like?",
     "idea": "Moving towards a sustainable water supply",
     "content": "Moving towards a sustainable resource future: water conservation, groundwater management, recycling, ‘grey’ water; an example of a local scheme in an LIC or NEE to increase sustainable supplies of water."
    }
   ]
  },
  {
   "id": "3.2.3.4",
   "component": "C2",
   "option": "resource",
   "name": "Energy",
   "caseStudies": [
    "An example to show how the extraction of a fossil fuel has both advantages and disadvantages.",
    "An example of a local renewable energy scheme in an LIC or NEE to provide sustainable supplies of energy."
   ],
   "ideas": [
    {
     "code": "3.2.3.4 — Demand for energy resources is rising globally but supply can be insecure, which may lead to conflict (surplus and deficit)",
     "q": "Where is energy secure and where is it not, and why is consumption rising?",
     "idea": "Areas of energy surplus and deficit",
     "content": "Areas of surplus (security) and deficit (insecurity): global distribution of energy consumption and supply; reasons for increasing energy consumption: economic development, rising population, technology; factors affecting energy supply: physical factors, cost of exploitation and production, technology and political factors."
    },
    {
     "code": "3.2.3.4 — Demand for energy resources is rising globally but supply can be insecure, which may lead to conflict (impacts of insecurity)",
     "q": "What happens where energy is insecure?",
     "idea": "Impacts of energy insecurity",
     "content": "Impacts of energy insecurity – exploration of difficult and environmentally sensitive areas, economic and environmental costs, food production, industrial output, potential for conflict where demand exceeds supply."
    },
    {
     "code": "3.2.3.4 — Different strategies can be used to increase energy supply (increasing supply)",
     "q": "How can energy supply be increased?",
     "idea": "Strategies to increase energy supply",
     "content": "Overview of strategies to increase energy supply: renewable (biomass, wind, hydro, tidal, geothermal, wave and solar) and non-renewable (fossil fuels and nuclear power) sources of energy; an example to show how the extraction of a fossil fuel has both advantages and disadvantages."
    },
    {
     "code": "3.2.3.4 — Different strategies can be used to increase energy supply (sustainable resource future)",
     "q": "What would a sustainable energy future look like?",
     "idea": "Moving towards a sustainable energy supply",
     "content": "Moving towards a sustainable resource future: individual energy use and carbon footprints. Energy conservation: designing homes, workplaces and transport for sustainability, demand reduction, use of technology to increase efficiency in the use of fossil fuels; an example of a local renewable energy scheme in an LIC or NEE to provide sustainable supplies of energy."
    }
   ]
  },
  {
   "id": "3.3.1",
   "component": "C3",
   "option": null,
   "name": "Issue evaluation",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.3.1 — This section contributes a critical thinking and problem-solving element to the assessment structure",
     "q": "What is the issue evaluation, and what is it for?",
     "idea": "Issue evaluation as critical thinking and problem solving",
     "content": "This section contributes a critical thinking and problem-solving element to the assessment structure. The assessment will provide students with the opportunity to demonstrate geographical skills and applied knowledge and understanding by looking at a particular issue(s) derived from the specification using secondary sources. The Geographical applications unit as a whole “is designed to be synoptic in that students will be required to draw together knowledge, understanding and skills from the full course of study”."
    },
    {
     "code": "3.3.1 — The issue(s) will arise from any aspect of the compulsory sections of the subject content",
     "q": "Where does the issue come from, and how much of the course does it draw on?",
     "idea": "Where the issue comes from, and its synoptic reach",
     "content": "The issue(s) will arise from any aspect of the compulsory sections of the subject content but may extend beyond it through the use of resources in relation to specific unseen contexts. Students develop knowledge and understanding of physical geography themes in unit 3.1 and human geography themes in unit 3.2. This section is synoptic and the assessment will require students to use their learning of more than one of the themes in units 3.1 and 3.2 so that they can analyse a geographical issue at a range of scales, consider and select a possible option in relation to the issue(s) and justify their decision."
    },
    {
     "code": "3.3.1 — A resource booklet will be available twelve weeks before the date of the exam",
     "q": "What is the pre-release resource booklet, and how is it used?",
     "idea": "The pre-release resource booklet",
     "content": "A resource booklet will be available twelve weeks before the date of the exam so that students have the opportunity to work through the resources, enabling them to become familiar with the material. Students will not be allowed to take the original resource booklet into the examination room but will be issued with a clean copy in the exam. Sources could include maps at different scales, diagrams, graphs, statistics, photographs, satellite images, sketches, extracts from published materials, and quotes from different interest groups."
    },
    {
     "code": "3.3.1 — Assessment will consist of a series of questions related to a contemporary geographical issue(s)",
     "q": "What does the Paper 3 Section A exam actually ask students to do?",
     "idea": "The shape of the assessment",
     "content": "Assessment will consist of a series of questions related to a contemporary geographical issue(s), leading to a more extended piece of writing which will involve an evaluative judgement. Students will apply knowledge and understanding to interpret, analyse and evaluate the information and issue(s) in the pre-release resources booklet and the question paper. They will also use geographical skills to set the issue(s) in context and to examine conflicting viewpoints about the issue(s)."
    },
    {
     "code": "3.3.1 — Students will develop a critical perspective on the issue(s) studied",
     "q": "Whose points of view must be weighed, and how is a decision justified?",
     "idea": "Stakeholders, alternatives and reasoned justification",
     "content": "Students will develop a critical perspective on the issue(s) studied, consider the points of view of the stakeholders involved, make an appraisal of the advantages and disadvantages, and evaluate the alternatives. The exam will also require students to consider physical and human interrelationships and to make reasoned justifications for proposed solutions in terms of their likely impact on both people and the physical environment."
    }
   ]
  },
  {
   "id": "3.3.2",
   "component": "C3",
   "option": null,
   "name": "Fieldwork",
   "caseStudies": [
    "Two geographical enquiries, each including the use of primary data collected as part of a fieldwork exercise, carried out in contrasting environments and showing an understanding of both physical and human geography."
   ],
   "ideas": [
    {
     "code": "3.3.2 — Students need to undertake two geographical enquiries, each of which must include the use of primary data",
     "q": "What fieldwork must a student actually do?",
     "idea": "The two required enquiries",
     "content": "Students need to undertake two geographical enquiries, each of which must include the use of primary data, collected as part of a fieldwork exercise. There should be a clear link between the subject content and geographical enquiries, and the enquiries can be based on any part of the content addressed in units 3.1 and 3.2. Fieldwork must take place outside the classroom and school grounds on at least two occasions. The two enquiries must be carried out in contrasting environments and show an understanding of both physical and human geography. In at least one of the enquiries students are expected to show an understanding about the interaction between physical and human geography. Schools and colleges must submit a written statement as evidence that the fieldwork requirement has been met."
    },
    {
     "code": "3.3.2 — Students’ understanding of the enquiry process will be assessed in the following two ways",
     "q": "How is fieldwork examined on Paper 3 Section B?",
     "idea": "How fieldwork is assessed",
     "content": "Students’ understanding of the enquiry process will be assessed in the following two ways: 1. questions based on the use of fieldwork materials from an unfamiliar context; 2. questions based on students’ individual enquiry work. For these questions students will have to identify the titles of their individual enquiries. Students will be expected to: 1. apply knowledge and understanding to interpret, analyse and evaluate information and issues related to geographical enquiry; 2. select, adapt and use a variety of skills and techniques to investigate questions and issues and communicate findings in relation to geographical enquiry."
    },
    {
     "code": "3.3.2 — Suitable question for geographical enquiry",
     "q": "How is a suitable enquiry question chosen, and what risks does it carry?",
     "idea": "Enquiry strand 1: a suitable question for geographical enquiry",
     "content": "Geographical enquiry strand 1, Suitable question for geographical enquiry — application of knowledge and understanding, and skills: the factors that need to be considered when selecting suitable questions/hypotheses for geographical enquiry; the geographical theory/concept underpinning the enquiry; appropriate sources of primary and secondary evidence, including locations for fieldwork; the potential risks of both human and physical fieldwork and how these risks might be reduced."
    },
    {
     "code": "3.3.2 — Selecting, measuring and recording data appropriate to the chosen enquiry",
     "q": "How is fieldwork data selected, measured and recorded?",
     "idea": "Enquiry strand 2: selecting, measuring and recording data",
     "content": "Geographical enquiry strand 2, Selecting, measuring and recording data appropriate to the chosen enquiry: difference between primary and secondary data; identification and selection of appropriate physical and human data; measuring and recording data using different sampling methods; description and justification of data collection methods."
    },
    {
     "code": "3.3.2 — Selecting appropriate ways of processing and presenting fieldwork data",
     "q": "How should fieldwork data be processed and presented?",
     "idea": "Enquiry strand 3: processing and presenting fieldwork data",
     "content": "Geographical enquiry strand 3, Selecting appropriate ways of processing and presenting fieldwork data: appreciation that a range of visual, graphical and cartographic methods is available; selection and accurate use of appropriate presentation methods; description, explanation and adaptation of presentation methods."
    },
    {
     "code": "3.3.2 — Describing, analysing and explaining fieldwork data",
     "q": "How are fieldwork results described, analysed and explained?",
     "idea": "Enquiry strand 4: describing, analysing and explaining fieldwork data",
     "content": "Geographical enquiry strand 4, Describing, analysing and explaining fieldwork data: description, analysis and explanation of the results of fieldwork data; establish links between data sets; use appropriate statistical techniques; identification of anomalies in fieldwork data."
    },
    {
     "code": "3.3.2 — Reaching conclusions",
     "q": "What makes a fieldwork conclusion a good one?",
     "idea": "Enquiry strand 5: reaching conclusions",
     "content": "Geographical enquiry strand 5, Reaching conclusions: draw evidenced conclusions in relation to original aims of the enquiry — the conclusion must answer the question the enquiry set, on the evidence the enquiry collected."
    },
    {
     "code": "3.3.2 — Evaluation of geographical enquiry",
     "q": "How reliable was the enquiry, and what were its limitations?",
     "idea": "Enquiry strand 6: evaluation of geographical enquiry",
     "content": "Geographical enquiry strand 6, Evaluation of geographical enquiry: identification of problems of data collection methods; identification of limitations of data collected; suggestions for other data that might be useful; extent to which conclusions were reliable."
    }
   ]
  },
  {
   "id": "3.4",
   "component": "C3",
   "option": null,
   "name": "Geographical skills (assessed in all three written exams; filed here under Paper 3)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.4 — Students are required to develop and demonstrate a range of geographical skills",
     "q": "Which skills are assessed, and in which exams?",
     "idea": "The skills requirement and where it is examined",
     "content": "Students are required to develop and demonstrate a range of geographical skills, including cartographic, graphical, numerical and statistical skills, throughout their study of the specification. Skills will be assessed in all three written exams. Ordnance Survey (OS) maps or other map extracts may be used in any of the three exams. (In this course map the room is filed under Paper 3, where the fieldwork and issue-evaluation skills questions sit, but the content applies to Papers 1 and 2 as well.)"
    },
    {
     "code": "3.4.1 — Cartographic skills",
     "q": "What must a student be able to do with an atlas map, an OS map and a photograph?",
     "idea": "Cartographic skills",
     "content": "Cartographic skills relating to a variety of maps at different scales. Atlas maps: use and understand coordinates – latitude and longitude; recognise and describe distributions and patterns of both human and physical features; maps based on global and other scales may be used and students may be asked to identify and describe significant features of the physical and human landscape on them, eg population distribution, population movements, transport networks, settlement layout, relief and drainage; analyse the inter-relationship between physical and human factors on maps and establish associations between observed patterns on thematic maps. Ordnance Survey maps: use and interpret OS maps at a range of scales, including 1:50 000 and 1:25 000 and other maps appropriate to the topic; use and understand coordinates – four and six-figure grid references; use and understand scale, distance and direction – measure straight and curved line distances using a variety of scales; use and understand gradient, contour and spot height; numerical and statistical information; identify basic landscape features and describe their characteristics from map evidence; identify major relief features on maps and relate cross-sectional drawings to relief features; draw inferences about the physical and human landscape by interpretation of map evidence, including patterns of relief, drainage, settlement, communication and land-use; interpret cross sections and transects of physical and human landscapes; describe the physical features as they are shown on large scale maps of two of the following landscapes – coastlines, fluvial and glacial landscapes; infer human activity from map evidence, including tourism. Maps in association with photographs: be able to compare maps; sketch maps: draw, label, understand and interpret; photographs: use and interpret ground, aerial and satellite photographs; describe human and physical landscapes (landforms, natural vegetation, land-use and settlement) and geographical phenomena from photographs; draw sketches from photographs; label and annotate diagrams, maps, graphs, sketches and photographs."
    },
    {
     "code": "3.4.2 — Graphical skills",
     "q": "Which graphs and charts must a student be able to choose, build, complete and read?",
     "idea": "Graphical skills",
     "content": "Graphical skills to: select and construct appropriate graphs and charts to present data, using appropriate scales – line charts, bar charts, pie charts, pictograms, histograms with equal class intervals, divided bar, scattergraphs, and population pyramids; suggest an appropriate form of graphical representation for the data provided; complete a variety of graphs and maps – choropleth, isoline, dot maps, desire lines, proportional symbols and flow lines; use and understand gradient, contour and value on isoline maps; plot information on graphs when axes and scales are provided; interpret and extract information from different types of maps, graphs and charts, including population pyramids, choropleth maps, flow-line maps, dispersion graphs."
    },
    {
     "code": "3.4.3 — Numerical skills",
     "q": "What numerical work must a student be able to do?",
     "idea": "Numerical skills",
     "content": "Numerical skills to: demonstrate an understanding of number, area and scales, and the quantitative relationships between units; design fieldwork data collection sheets and collect data with an understanding of accuracy, sample size and procedures, control groups and reliability; understand and correctly use proportion and ratio, magnitude and frequency; draw informed conclusions from numerical data."
    },
    {
     "code": "3.4.4 — Statistical skills",
     "q": "Which statistics must a student be able to calculate and criticise?",
     "idea": "Statistical skills",
     "content": "Statistical skills to: use appropriate measures of central tendency, spread and cumulative frequency (median, mean, range, quartiles and inter-quartile range, mode and modal class); calculate percentage increase or decrease and understand the use of percentiles; describe relationships in bivariate data: sketch trend lines through scatter plots, draw estimated lines of best fit, make predictions, interpolate and extrapolate trends; be able to identify weaknesses in selective statistical presentation of data."
    },
    {
     "code": "3.4.5 — Use of qualitative and quantitative data",
     "q": "What kinds of data must a student be able to use, and what for?",
     "idea": "Use of qualitative and quantitative data",
     "content": "Use of qualitative and quantitative data from both primary and secondary sources to obtain, illustrate, communicate, interpret, analyse and evaluate geographical information. Examples of types of data: maps; fieldwork data; geo-spatial data presented in a geographical information system (GIS) framework; satellite imagery; written and digital sources; visual and graphical sources; numerical and statistical information."
    },
    {
     "code": "3.4.6 — Formulate enquiry and argument",
     "q": "What must a student be able to do with an extended written argument?",
     "idea": "Formulating enquiry and argument",
     "content": "Students should demonstrate the ability to: identify questions and sequences of enquiry; write descriptively, analytically and critically; communicate their ideas effectively; develop an extended written argument; draw well-evidenced and informed conclusions about geographical questions and issues."
    },
    {
     "code": "3.4.7 — Literacy",
     "q": "How much does written communication matter, and to whom is the student writing?",
     "idea": "Literacy",
     "content": "Most communication is through the written word, raising the importance of good literacy skills. Students should be able to communicate information in ways suitable for a range of target audiences. Spelling, punctuation, grammar and the use of specialist terminology are assessed directly on the indicated 9-mark questions – three marks on Paper 1, three on Paper 2 and six on Paper 3."
    }
   ]
  }
 ]
};
module.exports = { SPEC_8035 };
