/* OCR A level Geography (H481) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_H481 = {
 "id": "OCR-H481",
 "board": "OCR",
 "subject": "Geography",
 "code": "H481",
 "level": "A level",
 "version": "Specification v2.1 (June 2026)",
 "firstExam": 2018,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Physical systems",
   "paperCode": "H481/01",
   "marks": 66,
   "weight": 22,
   "minutes": 90,
   "sections": [
    "Section A: Questions on Landscape Systems, answering questions on either Option A, B or C.",
    "Section B: Questions on Earth’s Life Support Systems."
   ],
   "resourceBooklet": true
  },
  {
   "id": "C2",
   "name": "Human interactions",
   "paperCode": "H481/02",
   "marks": 66,
   "weight": 22,
   "minutes": 90,
   "sections": [
    "Section A: Questions on Changing Spaces; Making Places.",
    "Section B: Questions on Global Connections, answering questions on either Option A or B and Option C or D."
   ],
   "resourceBooklet": true
  },
  {
   "id": "C3",
   "name": "Geographical debates",
   "paperCode": "H481/03",
   "marks": 108,
   "weight": 36,
   "minutes": 150,
   "sections": [
    "Section A: Short answer and medium length questions on all topics",
    "Section B: Synoptic questions on all topics",
    "Section C: Extended response questions on all topics."
   ],
   "resourceBooklet": true
  },
  {
   "id": "C4",
   "name": "Investigative geography",
   "paperCode": "H481/04, 05",
   "marks": 60,
   "weight": 20,
   "minutes": null,
   "sections": [
    "Section 1: Planning, purpose and introduction. (8 marks)",
    "Section 2: Data, information collection methods and sampling framework. (7 marks)",
    "Section 3: Data presentation techniques. (9 marks)",
    "Section 4: Data analysis and explanation. (14 marks)",
    "Section 5: Conclusions and investigation evaluation. (12 marks)",
    "Section 6: Overall quality and communication of written work. (10 marks)"
   ],
   "resourceBooklet": false,
   "nea": true,
   "coversAll": false
  }
 ],
 "options": [
  {
   "id": "landscape",
   "label": "Topic 1.1 – Landscape Systems: answering questions on either Option A, B or C (Physical systems (01), Section A)",
   "choose": 1,
   "from": [
    "1.1.1",
    "1.1.2",
    "1.1.3"
   ]
  },
  {
   "id": "globalSystems",
   "label": "Topic 2.2 – Global Connections: learners must choose one of Option A or B within their study of Global Systems (Human interactions (02), Section B)",
   "choose": 1,
   "from": [
    "2.2.1",
    "2.2.2"
   ]
  },
  {
   "id": "globalGovernance",
   "label": "Topic 2.2 – Global Connections: learners must choose one of Options C or D for their study of Global Governance (Human interactions (02), Section B)",
   "choose": 1,
   "from": [
    "2.2.3",
    "2.2.4"
   ]
  },
  {
   "id": "debates",
   "label": "Geographical debates (03): Optionality – study 2 of 5. Learners answer questions from two topics out of Climate Change, Disease Dilemmas, Exploring Oceans, Future of Food and Hazardous Earth.",
   "choose": 2,
   "from": [
    "3.1",
    "3.2",
    "3.3",
    "3.4",
    "3.5"
   ]
  }
 ],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge and understanding",
   "text": "Demonstrate knowledge and understanding of places, environments, concepts, processes, interactions and change, at a variety of scales.",
   "weight": 34,
   "byComponent": {
    "C1": 10,
    "C2": 10,
    "C3": 14,
    "C4": 0
   }
  },
  {
   "id": "AO2",
   "label": "Application",
   "text": "Apply knowledge and understanding in different contexts to interpret, analyse and evaluate geographical information and issues.",
   "weight": 38,
   "byComponent": {
    "C1": 9,
    "C2": 9,
    "C3": 20,
    "C4": 0
   }
  },
  {
   "id": "AO3",
   "label": "Skills",
   "text": "Use a variety of relevant quantitative, qualitative and fieldwork skills to: investigate geographical questions and issues; interpret, analyse and evaluate data and evidence; construct arguments and draw conclusions.",
   "weight": 28,
   "byComponent": {
    "C1": 3,
    "C2": 3,
    "C3": 2,
    "C4": 20
   }
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Marking is by levels of response. The examined papers set a mix of tariffs the specification names in Section 3a: within Physical systems (01) and Human interactions (02) there is \"a combination of short answer questions which carry a low tariff, medium length questions of 6 to 10 marks and higher tariff extended response questions of 16 marks\"; within Geographical debates (03) there is \"a combination of short answer questions of 3 marks, medium length questions of 6 marks, synoptic questions of 12 marks and extended response questions of 33 marks\", set out in Section A (short answer and medium length questions on all topics), Section B (synoptic questions on all topics) and Section C (extended response questions on all topics). Section 3h states that the assessment materials \"provide learners with the opportunity to demonstrate their ability to construct and develop a sustained and coherent line of reasoning and marks for extended responses are integrated into the marking criteria\", and that there is assessment of extended responses within Physical systems (01), Human interactions (02) and Geographical debates (03). The three assessment objectives carry 34% (AO1), 38% (AO2) and 28% (AO3) of the qualification (Section 3b). Investigative geography (04/05) is internally assessed and externally moderated: 60 marks are \"broken down into six sections\" — planning, purpose and introduction (8); data, information collection methods and sampling framework (7); data presentation techniques (9); data analysis and explanation (14); conclusions and investigation evaluation (12); and overall quality and communication of written work (10). The NEA is marked on a \"best fit\" principle: \"if a learner’s work meets all criteria in a particular level this should be awarded the top mark in the level. An answer does not have to meet all the requirements of a level descriptor before being placed in that level. The extent to which it meets all of the requirements of a level descriptor will determine its placement within that level.\" A separate Resource Booklet is provided with each of the three question papers (Section 3a), and marks associated with geographical skills are assessed within all three.",
  "commandWords": [
   {
    "word": "Interpret",
    "means": "AO3: \"interpret, analyse and evaluate data and evidence\". Say what the data, map, image or source shows, including \"informed and critical questioning of data sources, analytical methodologies, data reporting and presentation\" (Section 2e, 4.1e)."
   },
   {
    "word": "Analyse",
    "means": "AO3: \"interpret, analyse and evaluate data and evidence\". Break the evidence down — patterns, anomalies, relationships — using \"suitable analytical approaches for the different information types\" (Section 2e, 4.1d), and link what is found back to the geography."
   },
   {
    "word": "Evaluate",
    "means": "AO2/AO3: \"interpret, analyse and evaluate geographical information and issues\" and \"communicate and evaluate findings, draw well-evidenced conclusions informed by wider theory\" (Section 2e, 4.1f). Weigh the evidence on both sides and reach a supported judgement; in the NEA the top level requires learners to \"evaluate the findings of their investigation and reach a balanced and supported conclusion\"."
   },
   {
    "word": "Explain",
    "means": "Give reasons and mechanisms: the specification’s content column repeatedly asks learners to \"Illustrate through economic, political and social factors to explain\" a pattern or change, and the NEA Level 3 criteria reward methodologies \"explained in detail\"."
   },
   {
    "word": "Justify",
    "means": "Give the reasons for a choice and defend it against alternatives: NEA Level 3 requires methodologies \"which are justified with limitations outlined\", a sampling framework that is \"appropriate, coherent and justified\", and \"a justification for the investigation provided in the introduction\"."
   },
   {
    "word": "Illustrate",
    "means": "Use the required named example or case study as the evidence for the point — the wording the content column uses throughout, e.g. \"Case study of one EDC to illustrate: direction and components of its current international trade patterns\"."
   },
   {
    "word": "Identify",
    "means": "Pick out and name the feature, pattern or source asked for, as in \"Identify how formal and statistical representations of a place, such as census and geospatial data, contrasts with informal representations\" (2.1, idea 2.b) and \"Identify a disease outbreak at a global scale\"; it includes \"the ability to identify sources of error in data and to identify the misuse of data\" (Section 2e, 4.1e)."
   },
   {
    "word": "Define",
    "means": "State precisely what the term or question covers: Section 2e, 5a requires learners to \"define the research questions which underpin field investigations\", and the NEA Level 3 criteria reward a topic or issue \"which is accurately and appropriately defined and within a research framework\"."
   },
   {
    "word": "Compare",
    "means": "Set the named cases against each other — the specification builds most of its higher-tariff demand on contrasts, e.g. \"Case studies of two contrasting countries at different stages of economic development\" and \"Case studies of two contrasting place profiles at a local scale\"; the answer must draw the comparison, not describe each in turn."
   },
   {
    "word": "Construct arguments and draw conclusions",
    "means": "AO3’s third strand, repeated in Section 2e, 4.1f (\"construct extended written argument about geographical matters\") and 5k (\"write a coherent analysis of fieldwork findings in order to answer a specific geographical question and to do this drawing effectively on evidence and theory to make a well-argued case\"). Section 3h adds that extended responses must show \"a sustained and coherent line of reasoning\"."
   },
   {
    "word": "To what extent",
    "means": "The stem of the specification's most open enquiry questions, e.g. \"To what extent are the water and carbon cycles linked?\" (1.2, section 4) and \"To what extent has intervention in human rights contributed to development?\" (2.2.3, section 4). A weighed-judgement answer at the top level needs \"a sustained and coherent line of reasoning\" (Section 3h), the evidence on both sides weighed rather than listed one-sidedly, and a qualified conclusion that states how far the claim holds."
   },
   {
    "word": "How far",
    "means": "The stem of the enquiry question \"How far can diseases be predicted and mitigated against?\" (3.2, section 4). As with \"To what extent\", the top level needs \"a sustained and coherent line of reasoning\" (Section 3h), the evidence weighed rather than merely listed, and a qualified conclusion rather than a one-sided assertion."
   },
   {
    "word": "How effective is / How effectively",
    "means": "The stem of the enquiry questions \"How effective is global governance of sovereignty and territorial integrity?\" (2.2.4, section 4) and \"How effectively are communicable and noncommunicable diseases dealt with?\" (3.2, section 3). The top level needs \"a sustained and coherent line of reasoning\" (Section 3h), evidence weighed for and against effectiveness, and a qualified conclusion on how effective the response or intervention has been."
   }
  ],
  "essayShapes": [
   {
    "marks": 33,
    "minutes": 46,
    "structure": "Geographical debates (03), Section C: \"extended response questions of 33 marks\", synoptic and set on all topics. The top level rewards a sustained and coherent line of reasoning throughout: an opening that defines the terms of the question and states the line the answer will take; paragraphs that each apply knowledge and understanding to a different context or scale, carrying named case-study evidence from the two chosen debate topics, analysing it rather than describing it, and closing with an interim judgement; explicit synoptic linkage between the debate and the wider specification (physical and human, and across scales); and a conclusion that answers the question directly with a qualified, evidence-weighted judgement. Marks for extended response are integrated into the marking criteria (Section 3h). (Minutes are pro rata from the paper: 150 minutes for 108 marks.)"
   },
   {
    "marks": 16,
    "minutes": 22,
    "structure": "Physical systems (01) and Human interactions (02): \"higher tariff extended response questions of 16 marks\". The top level rewards a short, disciplined argument: terms defined against the specification’s own wording, two or three developed paragraphs that each make a point, support it with the required named case study or example, and explain the process chain behind it, with evaluation woven in rather than bolted on; and a conclusion that takes a position. AO2 carries the larger share of these marks, so the case study must be used to answer the question set, not recited. (Minutes are pro rata from the paper: 90 minutes for 66 marks.)"
   },
   {
    "marks": 12,
    "minutes": 17,
    "structure": "Geographical debates (03), Section B: \"synoptic questions of 12 marks\". The top level rewards an answer that deliberately crosses topics — connecting the chosen debate to physical and human content elsewhere in the specification and to more than one scale — with a clear line of reasoning, evidence drawn from named case studies, and a judgement about the strength of the connection rather than a list of links."
   },
   {
    "marks": 6,
    "minutes": 8,
    "structure": "\"Medium length questions of 6 marks\" in Geographical debates (03), and part of the \"medium length questions of 6 to 10 marks\" in Physical systems (01) and Human interactions (02). The top level rewards two developed points rather than four undeveloped ones: each point explained as a cause-and-effect chain in the specification’s own terms, applied to the resource or context given in the question, with a named example where the content column requires one."
   },
   {
    "marks": 3,
    "minutes": 4,
    "structure": "\"Short answer questions of 3 marks\" in Geographical debates (03), and the \"short answer questions which carry a low tariff\" in Physical systems (01) and Human interactions (02). A separate Resource Booklet is provided with each paper (Section 3a), and marks associated with geographical skills are assessed within each component. The top level rewards precise use of the data, map or image supplied — quoted figures, units and directions — and the correct specification term, with no unrequested explanation."
   }
  ]
 },
 "source": {
  "url": "https://www.ocr.org.uk/Images/223012-specification-accredited-a-level-gce-geography-h481.pdf",
  "etag": "\"ccff546aa029dd1:0\"",
  "lastModified": "Tue, 11 Aug 2026 14:48:04 GMT",
  "length": 10672438,
  "checkedAt": "2026-09-11T06:08:43.290Z"
 },
 "topics": [
  {
   "id": "1.1.1",
   "component": "C1",
   "option": "landscape",
   "name": "Landscape systems — Option A: Coastal landscapes",
   "caseStudies": [
    "For all options within this topic, study must include at least two case studies from landscapes beyond the UK and at least one landscape from the UK.",
    "One high-energy coastline",
    "One low-energy coastline",
    "One coastal landscape that is being managed",
    "One coastal landscape that is being used by people"
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "How can coastal landscapes be viewed as systems?",
     "idea": "Coastal landscapes as systems",
     "content": "A conceptual overview of the components of coastal landscape systems, including inputs, processes and outputs; the flows of energy and material through coastal systems; and sediment cells."
    },
    {
     "code": "1.b",
     "q": "How can coastal landscapes be viewed as systems?",
     "idea": "Physical factors influencing coastal landscape systems",
     "content": "Potential influences on coastal landscape systems of winds (speed, direction, frequency), waves (formation, development, breaking), tides (cycles and range), geology (lithology and structure), and the global pattern of ocean currents."
    },
    {
     "code": "1.c",
     "q": "How can coastal landscapes be viewed as systems?",
     "idea": "Sources of coastal sediment",
     "content": "The various sources of coastal sediment: terrestrial (fluvial deposition, weathering and mass movement, marine erosion, aeolian deposition, longshore drift), offshore (marine deposition), and human (beach nourishment)."
    },
    {
     "code": "2.a",
     "q": "How are coastal landforms developed?",
     "idea": "Interconnected processes forming coastal landforms",
     "content": "The influence of flows of energy and materials on geomorphic processes (weathering, mass movement, wave, fluvial and aeolian erosion, transportation, deposition); erosional landforms including bays, headlands, cliffs, shore platforms, geos, blow holes, caves, arches, stacks and stumps; depositional landforms including beaches, spits, on-shore bars, tombolos and salt marshes."
    },
    {
     "code": "2.b",
     "q": "How are coastal landforms developed?",
     "idea": "Coastal landforms as inter-related characteristic landscapes",
     "content": "Case studies of one high energy coastline (such as rocky) and one low energy coastline (such as estuarine) to illustrate the physical factors influencing landform formation, the inter-relationship of landforms within the landscape system, and how and why the landscape system changes over time from millennia to seconds (such as cliff collapse in seconds, seasonal changes in beach profile, and spit growth over millennia). At least one of the case studies must be from beyond the UK."
    },
    {
     "code": "3.a",
     "q": "How do coastal landforms evolve over time as climate changes?",
     "idea": "Emergent coastal landscapes as sea level falls",
     "content": "How landforms in emergent landscapes are influenced by falling sea levels due to a cooling climate: climate changes during a previous time period and the resultant sea level fall; the influence of sea level fall and geomorphic processes in shaping raised beaches, marine terraces and abandoned cliffs; the modification of these landforms by processes associated with present and future climate and sea level changes."
    },
    {
     "code": "3.b",
     "q": "How do coastal landforms evolve over time as climate changes?",
     "idea": "Submergent coastal landscapes as sea level rises",
     "content": "How landforms in submergent landscapes are influenced by rising sea level due to a warming climate: climate changes during a previous time period and the resultant sea level rise; the influence of sea level rise and geomorphic processes in shaping rias, fjords and shingle beaches; the modification of these landforms by processes associated with present and future climate and sea level changes."
    },
    {
     "code": "4.a",
     "q": "How does human activity cause change within coastal landscape systems?",
     "idea": "Intentional human change within coastal landscape systems",
     "content": "Case study of one coastal landscape that is being managed, covering the management strategy and the reason for its implementation (such as groyne construction or off-shore dredging); its intentional impacts on flows of material and/or energy through the coastal system (such as effects on the sediment budget); the effect of these impacts in changing coastal landforms (such as changes in beach profile); and the consequence of these changes on the landscape (such as seaward extension of the coastal landscape)."
    },
    {
     "code": "4.b",
     "q": "How does human activity cause change within coastal landscape systems?",
     "idea": "Unintentional human change within coastal landscape systems from economic development",
     "content": "Case study of one coastal landscape that is being used by people, covering the economic development taking place and the reasons for it (such as trade routes, port or tourist resort development); its unintentional impacts on flows of material and/or energy through the coastal system (such as disturbance to the sediment cell balance); the effect on coastal landforms (such as beach profiles); and the consequence for the landscape (such as coastal retreat or protection)."
    }
   ],
   "skills": [
    "Observation skills",
    "Measurement and geo-spatial mapping skills",
    "Data manipulation and statistical skills applied to field measurements",
    "Sediment budget calculations",
    "Mass balance calculations"
   ]
  },
  {
   "id": "1.1.2",
   "component": "C1",
   "option": "landscape",
   "name": "Landscape systems — Option B: Glaciated landscapes",
   "caseStudies": [
    "For all options within this topic, study must include at least two case studies from landscapes beyond the UK and at least one landscape from the UK.",
    "One landscape associated with the action of valley glaciers",
    "One landscape associated with the action of ice sheets",
    "One periglacial landscape that is being used by people",
    "One glaciated landscape that is being used by people"
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "How can glaciated landscapes be viewed as systems?",
     "idea": "Glaciated landscapes as systems",
     "content": "A conceptual overview of the components of glaciated landscape systems, including inputs, processes and outputs; the flows of energy and material through glaciated systems; and glacier mass balance."
    },
    {
     "code": "1.b",
     "q": "How can glaciated landscapes be viewed as systems?",
     "idea": "Physical factors influencing glaciated landscape systems",
     "content": "Potential influences on glaciated landscape systems of climate (precipitation totals and patterns), geology (lithology and structure), latitude and altitude, and relief and aspect on microclimate and glacier movement."
    },
    {
     "code": "1.c",
     "q": "How can glaciated landscapes be viewed as systems?",
     "idea": "Types of glacier and glacier movement",
     "content": "The characteristics of different types of glacier and their movement: the formation of glacier ice; valley glaciers and ice sheets; warm-based and cold-based glaciers; basal sliding and internal deformation."
    },
    {
     "code": "2.a",
     "q": "How are glacial landforms developed?",
     "idea": "Interconnected processes forming glacial landforms",
     "content": "The influence of flows of energy and materials on geomorphic processes (weathering, mass movement, glacial erosion, nivation, transportation, deposition); erosional landforms including corries, arêtes, pyramidal peaks, troughs, roche moutonnée and striations; depositional landforms including terminal, lateral and recessional moraines, erratics, drumlins and till sheets."
    },
    {
     "code": "2.b",
     "q": "How are glacial landforms developed?",
     "idea": "Glacial landforms as inter-related characteristic landscapes",
     "content": "Case studies of one landscape associated with the action of valley glaciers and one associated with the action of ice sheets to illustrate the physical factors influencing landform formation, the inter-relationship of landforms within the landscape system, and how and why the landscape system changes over time from millennia to seconds (such as rock fall in seconds, seasonal changes in deposition rates, and erosion of basins over millennia). At least one of the case studies must be from beyond the UK."
    },
    {
     "code": "3.a",
     "q": "How do glacial landforms evolve over time as climate changes?",
     "idea": "Glacio-fluvial landforms from post-glacial climate change",
     "content": "How landforms in glaciated landscapes are influenced in post-glacial periods: climate changes during a post-glacial period and the effect on resultant geomorphic processes; the influence of these processes in forming kames, eskers and outwash plains; the modification of these landforms by processes associated with present and future climate changes."
    },
    {
     "code": "3.b",
     "q": "How do glacial landforms evolve over time as climate changes?",
     "idea": "Periglacial landforms from climate change before and/or after glacial periods",
     "content": "How landforms in periglacial landscapes are influenced by climate change: climate changes during a previous time period and the effect on resultant geomorphic processes; the influence of these processes in forming patterned ground and pingos; the modification of these landforms by processes associated with present and future climate changes."
    },
    {
     "code": "4.a",
     "q": "How does human activity cause change within glaciated and periglacial landscape systems?",
     "idea": "Human activity causing change within periglacial landscape systems",
     "content": "Case study of one periglacial landscape that is being used by people, covering the human activity and the reasons for it (such as resource extraction); the impacts on flows of material and/or energy through the periglacial system (such as increased heat produced by buildings); the effect on periglacial landforms (such as thawing of permafrost); and the consequence for the landscape (such as development of thermokarst)."
    },
    {
     "code": "4.b",
     "q": "How does human activity cause change within glaciated and periglacial landscape systems?",
     "idea": "Human activity causing change within glaciated landscape systems",
     "content": "Case study of one glaciated landscape that is being used by people, covering the human activity and the reasons for it (such as dam construction); the impacts on flows of material and/or energy through the glacial system (such as trapping of sediment); the effect on glacial landforms (such as increased channel scour below dams); and the consequence for the landscape (such as changes to the valley floor)."
    }
   ],
   "skills": [
    "Observation skills",
    "Measurement and geo-spatial mapping skills",
    "Data manipulation and statistical skills applied to field measurements",
    "Sediment budget calculations",
    "Mass balance calculations"
   ]
  },
  {
   "id": "1.1.3",
   "component": "C1",
   "option": "landscape",
   "name": "Landscape systems — Option C: Dryland landscapes",
   "caseStudies": [
    "For all options within this topic, study must include at least two case studies from landscapes beyond the UK and at least one landscape from the UK.",
    "One mid-latitude desert",
    "One low-latitude desert",
    "One dryland landscape that is being used by people (water supply issue)",
    "One dryland landscape that is being used by people (economic activity)"
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "How can dryland landscapes be viewed as systems?",
     "idea": "Dryland landscapes as systems",
     "content": "A conceptual overview of the components of dryland landscape systems, including inputs, processes and outputs; the flows of energy and material through dryland systems; and the aridity index, including UNEP."
    },
    {
     "code": "1.b",
     "q": "How can dryland landscapes be viewed as systems?",
     "idea": "Physical factors influencing dryland landscape systems",
     "content": "Potential influence on dryland systems of climate (precipitation totals and patterns), geology (lithology and structure), latitude and altitude, relief and aspect on microclimate, and the availability of sediment."
    },
    {
     "code": "1.c",
     "q": "How can dryland landscapes be viewed as systems?",
     "idea": "Types of dryland landscape",
     "content": "The characteristics of different types of dryland landscapes: polar drylands; mid- and low-latitude deserts; semi-arid environments."
    },
    {
     "code": "2.a",
     "q": "How are landforms of mid and low latitude deserts developed?",
     "idea": "Interconnected processes forming dryland landforms",
     "content": "The influence of flows of energy and materials on geomorphic processes (weathering, mass movement, fluvial and aeolian erosion, transportation, deposition); erosional landforms including wadis, canyons, pedestal rocks, ventifacts and desert pavements; depositional landforms including barchans, linear dunes, star dunes, alluvial fans and bajadas."
    },
    {
     "code": "2.b",
     "q": "How are landforms of mid and low latitude deserts developed?",
     "idea": "Dryland landforms as inter-related characteristic landscapes",
     "content": "Case studies of one mid-latitude desert and one low-latitude desert to illustrate the physical factors influencing landform formation, the inter-relationship of landforms within the landscape system, and how and why the landscape system changes over time from millennia to seconds (such as the impact of flash floods on alluvial fans in seconds, seasonal and ephemeral streams on canyons, and pediment development over millennia)."
    },
    {
     "code": "3.a",
     "q": "How do dryland landforms evolve over time as climate changes?",
     "idea": "Fluvial landforms from earlier pluvial periods",
     "content": "How dryland landforms have been influenced by previous pluvial conditions: climate changes during a previous time period and the resultant pluvial conditions; the influence of pluvial conditions and geomorphic processes in shaping inselbergs and pediments; the modification of these landforms by processes associated with present and future climate changes."
    },
    {
     "code": "3.b",
     "q": "How do dryland landforms evolve over time as climate changes?",
     "idea": "Periglacial landforms from earlier colder periods",
     "content": "How dryland landscapes have been influenced by colder climatic conditions: climate changes during a previous time period and the resultant colder conditions; the influence of colder climatic conditions and geomorphic processes in shaping frost shattered debris, nivation hollows and solifluction deposits; the modification of these landforms by processes associated with present and future climate changes."
    },
    {
     "code": "4.a",
     "q": "How does human activity cause change within dryland landscape systems?",
     "idea": "Water supply issues causing change within dryland landscape systems",
     "content": "Case study of one dryland landscape that is being used by people, covering the water supply issue and the reasons for it (such as water shortage due to drought); its impacts on flows of material and/or energy through the dryland landscape system (such as high rates of sediment trapping behind dams, or modifying rivers to distribute and store water); the effect on dryland landforms (such as decreased growth of wadis); and the consequence for the landscape (such as reducing depositional landforms like alluvial fans, or slowing pediment development)."
    },
    {
     "code": "4.b",
     "q": "How does human activity cause change within dryland landscape systems?",
     "idea": "Economic activity causing change within dryland landscape systems",
     "content": "Case study of one dryland landscape that is being used by people, covering the economic activity and the reasons for it (such as tourism); its impacts on flows of material and/or energy through the dryland landscape system (such as vegetation and cryptobiotic crust damage by dune buggy use); the effect on dryland landforms (such as higher erosion rates on dunes); and the consequence for the landscape (such as increased loess accumulation in marginal areas)."
    }
   ],
   "skills": [
    "Observation skills",
    "Measurement and geo-spatial mapping skills",
    "Data manipulation and statistical skills applied to field measurements",
    "Sediment budget calculations",
    "Mass balance calculations"
   ]
  },
  {
   "id": "1.2",
   "component": "C1",
   "option": null,
   "name": "Earth’s life support systems",
   "caseStudies": [
    "Case study of a tropical rainforest, including water and carbon cycles specific to tropical rainforests, the physical factors affecting flows and stores in both cycles, and, for one drainage basin in the tropical rainforest, the changes to the water and carbon cycles caused by human activity.",
    "Case study of the Arctic tundra, including water and carbon cycles specific to Arctic tundra, the physical factors affecting flows and stores in both cycles, seasonal changes in the water and carbon cycles, and the impact of the developing oil and gas industry."
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "How important are water and carbon to life on Earth?",
     "idea": "Water and carbon support life and move between the land, oceans and atmosphere",
     "content": "The importance of water to humans, flora and fauna; carbon as the building block of life, available in the natural world and to humans; water and carbon cycling between land, oceans and atmosphere through open and closed systems."
    },
    {
     "code": "1.b",
     "q": "How important are water and carbon to life on Earth?",
     "idea": "The carbon and water cycles are systems with inputs, outputs and stores",
     "content": "Distribution and size of the major stores — atmosphere, oceans, water bodies, cryosphere, soil, vegetation, groundwater; water cycle inputs/outputs including precipitation, snowmelt (ablation) and evapotranspiration; carbon cycle inputs/outputs including precipitation, photosynthesis, decomposition, chemical weathering, respiration and combustion."
    },
    {
     "code": "1.c",
     "q": "How important are water and carbon to life on Earth?",
     "idea": "The carbon and water cycles have distinctive processes and pathways",
     "content": "Water cycle processes: evaporation, transpiration, condensation and cloud formation, precipitation and its causes, interception, ablation, runoff (overland and saturated overland flow), catchment hydrology (infiltration, percolation, throughflow, groundwater flow, cryospheric processes). Carbon cycle processes: photosynthesis, respiration, decomposition, combustion (natural and fossil fuel), natural sequestration in oceans, vegetation, sediments and weathering."
    },
    {
     "code": "2.a",
     "q": "How do the water and carbon cycles operate in contrasting locations?",
     "idea": "Physical and human factors affect the water and carbon cycles in a tropical rainforest",
     "content": "Case study of a tropical rainforest, including: water and carbon cycles specific to tropical rainforests — rates of flow and distinct stores, and how an individual tree through to the rainforest as a whole influences these cycles; physical factors affecting flows and stores in the water cycle (temperature, rock permeability and porosity, relief); physical factors affecting flows and stores in the carbon cycle (temperature, vegetation, soil organic matter, mineral composition of rocks); for one drainage basin, the changes to water cycle flows and stores caused by natural and human factors such as deforestation and farming; the impact of human activity on carbon flows, soil and nutrient stores; management strategies such as afforestation and improved agriculture with positive effects on both cycles."
    },
    {
     "code": "2.b",
     "q": "How do the water and carbon cycles operate in contrasting locations?",
     "idea": "Physical and human factors affect the water and carbon cycles in an Arctic tundra area",
     "content": "Case study of the Arctic tundra, including: water and carbon cycles specific to Arctic tundra — rates of flow and distinct stores; physical factors affecting flows and stores in both cycles (temperature, rock permeability and porosity, relief, vegetation, soil organic matter, mineral composition of rocks); seasonal changes in the water and carbon cycles; the impact of the developing oil and gas industry on both cycles; management strategies used to moderate the impacts of the oil and gas industry."
    },
    {
     "code": "3.a",
     "q": "How much change occurs over time in the water and carbon cycles?",
     "idea": "Human factors can disturb and enhance the natural processes and stores in the cycles",
     "content": "Dynamic equilibrium and the balance between stores and flows; land use changes such as urban growth, farming and forestry as a catalyst for altering flows and stores; water extraction (surface and sub-surface groundwater extraction, including aquifers and artesian basins) impacting flows and stores; the impact of fossil fuel combustion and carbon sequestration on carbon flows and stores; positive and negative feedback loops within and between the cycles."
    },
    {
     "code": "3.b",
     "q": "How much change occurs over time in the water and carbon cycles?",
     "idea": "The pathways and processes controlling the cycling of water and carbon vary over time",
     "content": "Short-term changes and their significance, including diurnal and seasonal changes of climate, temperature, sunlight and foliage; long-term (millions of years) changes to stores and flows; the importance of research and monitoring techniques to identify and record changes to the global water and carbon cycles, and why this data is gathered."
    },
    {
     "code": "4.a",
     "q": "To what extent are the water and carbon cycles linked?",
     "idea": "The two cycles are linked and interdependent",
     "content": "The ways the two cycles link and are interdependent via oceans, atmosphere, cryosphere and vegetation; how human activities change the availability of water and carbon (including fossil and terrestrial) stores, such as their use as resources; the impact of long-term climate change on both cycles."
    },
    {
     "code": "4.b",
     "q": "To what extent are the water and carbon cycles linked?",
     "idea": "The global implications of water and carbon management",
     "content": "Global management strategies to protect the carbon cycle as regulator of the Earth’s climate, including afforestation, wetland restoration, improving agricultural practices and reducing emissions (carbon trading, international agreements); global management strategies to protect the water cycle, including improving forestry techniques, water allocations for domestic, industrial and agricultural use, and drainage basin planning (run-off, surface stores and groundwater)."
    }
   ],
   "skills": [
    "Climate graphs",
    "Simple mass balance",
    "Rates of flow",
    "Unit conversions",
    "Analysis and presentation of field data"
   ]
  },
  {
   "id": "2.1",
   "component": "C2",
   "option": null,
   "name": "Changing spaces; making places",
   "caseStudies": [
    "Case studies of two contrasting place profiles at a local scale, including their demographic, socio-economic, cultural, political, built and natural characteristics that shape their place identity.",
    "Case studies of two contrasting places to illustrate the types of evidence of social inequality that can be found there such as housing, environmental quality, crime rates, digital divide.",
    "Case study of one country or region that has been impacted by structural economic change, including its socio-economic, demographic, cultural and environmental characteristics.",
    "Case study of one place that has undergone rebranding, including why the place needed to rebrand and the strategy/strategies involved in the rebranding of the place."
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What’s in a place?",
     "idea": "Places are multi-faceted, shaped by shifting flows and connections which change over time",
     "content": "Case studies of two contrasting place profiles at a local scale, including: their demographic, socio-economic, cultural, political, built and natural characteristics that shape their place identity; their past and present connections that embed them in regional, national, international and global scales; how shifting flows of people (commuter, migration), resources (natural, technology), money and investment (EU funding, TNCs) and ideas (knowledge economy) have shaped their profile over time."
    },
    {
     "code": "2.a",
     "q": "How do we understand place?",
     "idea": "People see, experience and understand place in different ways, and this can change over time",
     "content": "The complexities of defining place, including the concept of space versus place; how and why people perceive places differently based on identity, including age, gender, sexuality, religion and role; how emotional attachment to place can influence behaviour and activities; how globalisation and time-space compression can influence a sense of place."
    },
    {
     "code": "2.b",
     "q": "How do we understand place?",
     "idea": "Places are represented through a variety of contrasting formal and informal agencies",
     "content": "How informal representations of a place differ through contrasting media such as TV, film, music, art, photography, literature, graffiti and blogs; how formal and statistical representations, such as census and geospatial data, contrast with informal representations."
    },
    {
     "code": "3.a",
     "q": "How does economic change influence patterns of social inequality in places?",
     "idea": "The distribution of resources, wealth and opportunities is not evenly spread within and between places",
     "content": "The concept of social inequality and how it is measured through indices such as housing, healthcare, education, employment and access to services; how and why spatial patterns of social inequality vary both within and between places."
    },
    {
     "code": "3.b",
     "q": "How does economic change influence patterns of social inequality in places?",
     "idea": "Processes of economic change can create opportunities for some while exacerbating social inequality for others",
     "content": "The influence of global connections and globalisation in driving structural economic change, such as de-industrialisation and the rise of the service industry; how structural economic change impacts patterns of social opportunity and inequality; how cyclical economic change (booms and recessions) has varied impacts; the role of government in reducing, reinforcing or creating inequality through spending or cuts in services such as education, healthcare, infrastructure and community services."
    },
    {
     "code": "3.c",
     "q": "How does economic change influence patterns of social inequality in places?",
     "idea": "Social inequality impacts people and places in different ways",
     "content": "Case studies of two contrasting places to illustrate: the types of evidence of social inequality found there, such as housing, environmental quality, crime rates and digital divide; the range of factors that influence people’s social inequality, such as income, gender, age, health, personal mobility, ethnicity and education; how social inequality impacts people’s daily lives in different ways."
    },
    {
     "code": "4.a",
     "q": "Who are the players that influence economic change in places?",
     "idea": "Places are influenced by a range of players operating at different scales",
     "content": "The role of players in driving economic change, including at least one of local and national government, MNCs or international institutions; case study of one country or region impacted by structural economic change, including: its socio-economic, demographic, cultural and environmental characteristics before the change; the economic change(s) that took place and the role of players involved; socio-economic, demographic, cultural and environmental impacts on people and place."
    },
    {
     "code": "5.a",
     "q": "How are places created through placemaking processes?",
     "idea": "Place is produced in a variety of ways at different scales",
     "content": "The concept of placemaking and how governments and organisations present places to the wider world to attract inward investment and regeneration; how architects and planners create meaningful and authentic places through design, such as mixed community use or the 24-hour city; how local community groups shape the place they live, such as residents associations, heritage associations and social media."
    },
    {
     "code": "5.b",
     "q": "How are places created through placemaking processes?",
     "idea": "The placemaking process of rebranding constructs a different place meaning through reimaging and regeneration",
     "content": "Why places rebrand through reimaging and regeneration to construct a different place meaning; how strategies such as sport, art, heritage, retail, architecture and food are used singularly or together to change a place meaning; the range of players and their role, including government/EU funding, corporate bodies, not-for-profit organisations and community groups; how and why some groups contest efforts to rebrand a place."
    },
    {
     "code": "5.c",
     "q": "How are places created through placemaking processes?",
     "idea": "Making a successful place requires planning and design",
     "content": "Case study of one place that has undergone rebranding, including: why the place needed to rebrand; the strategy/strategies involved; the role and influence of the range of players involved in the placemaking; how the rebranding has altered people’s perception of the place; the relative success of the rebranding."
    }
   ],
   "skills": [
    "Appreciate how qualitative approaches actively create particular place representations",
    "Analysing the impacts of different media on place meanings and perceptions",
    "The use of geospatial data to present place characteristics",
    "How quantitative data is used to present place characteristics"
   ]
  },
  {
   "id": "2.2.1",
   "component": "C2",
   "option": "globalSystems",
   "name": "Global systems — Option A: Trade in the contemporary world",
   "caseStudies": [
    "One EDC, to illustrate the direction and components of its current international trade patterns and changes in its international trade patterns over time",
    "One AC, to show how core economies have a strong influence and drive change in the global trade system to their own advantage, through economic, political and social factors",
    "One LIDC, to show how peripheral economies exert limited influence and can only respond to change in the global trade system, through economic, political and social factors"
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What are the contemporary patterns of international trade?",
     "idea": "International trade involves flows of merchandise, services and capital which vary spatially.",
     "content": "An understanding of the terms merchandise, services and capital as components of international trade; current spatial patterns in the direction and components of international trade, including examples of both inter-regional and intra-regional trade."
    },
    {
     "code": "1.b",
     "q": "What are the contemporary patterns of international trade?",
     "idea": "Current patterns of international trade are related to global patterns of socio-economic development.",
     "content": "The relationship between patterns of international trade and socio-economic development using national indices such as value of exports and Human Development Index; how international trade can promote stability, growth and development within and between countries through flows of people, money, ideas and technology; how international trade causes inequalities, conflicts and injustices for people and places through these flows."
    },
    {
     "code": "2.a",
     "q": "Why has trade become increasingly complex?",
     "idea": "Access to markets are influenced by a multitude of inter-related factors.",
     "content": "International trade has increased connectivity due to changes in the 21st century, including: technology, transport and communications increasing connectivity of global supply chains; the increasing influence of MNCs in EDCs, including outsourcing; the role of regional trading blocs such as the EU; growth of 'south-south' trade between developing countries; growth of services in the global economy; and increasing labour mobility and a new international division of labour."
    },
    {
     "code": "2.b",
     "q": "Why has trade become increasingly complex?",
     "idea": "There is interdependence between countries and their trading partners.",
     "content": "Case study of one EDC to illustrate the direction and components of its current international trade patterns; changes in its international trade patterns over time; its economic, political, social and environmental interdependence with trading partners; and the impacts of trade on the EDC, including economic development, political stability and social equality."
    },
    {
     "code": "3.a",
     "q": "What are the issues associated with unequal flows of international trade?",
     "idea": "International trade creates opportunities and challenges which reflect unequal power relations between countries.",
     "content": "Case study of one AC to show how core economies have a strong influence and drive change in the global trade system to their own advantage, through economic, political and social factors explaining its advantages for trade (patterns, partners, negotiations and agreements), opportunities such as sustained economic growth, and challenges such as trade deficit; and a case study of one LIDC to show how peripheral economies exert limited influence and can only respond to change in the global trade system, explaining its trade components, why it has limited access to global markets, opportunities such as diversification of economic activity, and challenges such as political instability."
    }
   ]
  },
  {
   "id": "2.2.2",
   "component": "C2",
   "option": "globalSystems",
   "name": "Global systems — Option B: Global migration",
   "caseStudies": [
    "One EDC, to illustrate current patterns of immigration and emigration and changes in immigration and emigration over time",
    "One AC, to show how it influences and drives change in the global migration system, through economic, political and social factors",
    "One LIDC, to show how it has limited influence over and restricted response to the global migration system, through economic, political and social factors"
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What are the contemporary patterns of global migration?",
     "idea": "Global migration involves dynamic flows of people between countries, regions and continents.",
     "content": "Current spatial patterns in the numbers, composition and direction of international migrant flows, including examples of both inter-regional and intra-regional migration."
    },
    {
     "code": "1.b",
     "q": "What are the contemporary patterns of global migration?",
     "idea": "Current patterns of international migration are related to global patterns of socio-economic development.",
     "content": "The relationship between patterns of international migration and socio-economic development, using national indices such as value of migrant remittances and Human Development Index; how global migration can promote stability, growth and development within and between countries through flows of people, money, ideas and technology; how global migration causes inequalities, conflicts and injustices for people and places through these flows."
    },
    {
     "code": "2.a",
     "q": "Why has migration become increasingly complex?",
     "idea": "Global migration patterns are influenced by a multitude of inter-related factors.",
     "content": "Changes in the 21st century have increased the complexity of global migration, including: economic globalisation leading to the emergence of new source areas and host destinations; a high concentration of young workers and female migrants; South-South migration corridors now equal in magnitude to South-North corridors; conflict and persecution increasing numbers of refugees; changes in national immigration and emigration policies; and the development of distinct corridors of bi-lateral flows."
    },
    {
     "code": "2.b",
     "q": "Why has migration become increasingly complex?",
     "idea": "Corridors of migrant flows create interdependence between countries.",
     "content": "Case study of one EDC to illustrate current patterns of immigration and emigration; changes in immigration and emigration over time; economic, political, social and environmental interdependence with countries connected to the EDC by migrant flows; and the impact of migration on the EDC's economic development, political stability and social equality."
    },
    {
     "code": "3.a",
     "q": "What are the issues associated with unequal flows of global migration?",
     "idea": "Global migration creates opportunities and challenges which reflect the unequal power relations between countries.",
     "content": "Case study of one AC to show how it influences and drives change in the global migration system, through economic, political and social factors explaining patterns of emigration and immigration, migration policies and interdependence with countries linked to it by migration, opportunities such as labour supply, and challenges such as border issues; and a case study of one LIDC to show how it has limited influence over and restricted response to the global migration system, explaining the same patterns and policies, opportunities such as migrant remittances, and challenges such as loss of skilled workers."
    }
   ]
  },
  {
   "id": "2.2.3",
   "component": "C2",
   "option": "globalGovernance",
   "name": "Global governance — Option C: Human rights",
   "caseStudies": [
    "Women's rights in a country, to illustrate the gender inequality issues apparent in that country and the consequences of gender inequality on society",
    "Strategies for global governance of human rights in one area of conflict, to illustrate contributions and interactions of different organisations at a range of scales",
    "The impact of global governance of human rights in an LIDC, including the human rights issue/issues"
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What is meant by human rights?",
     "idea": "There is global variation in human rights norms.",
     "content": "Understanding of what is meant by human rights; understanding of the terms norms, intervention and geopolitics and how they are fundamental in appreciating that human rights are complex issues."
    },
    {
     "code": "1.b",
     "q": "What is meant by human rights?",
     "idea": "Patterns of human rights violations are influenced by a range of factors.",
     "content": "Current spatial patterns of human rights issues, including forced labour, maternal mortality rates and capital punishment; factors that influence global variations of forced labour, maternal mortality rates and capital punishment."
    },
    {
     "code": "2.a",
     "q": "What are the variations in women's rights?",
     "idea": "The geography of gender inequality is complex and contested.",
     "content": "Economic, political and social factors to explain variation in the patterns of gender inequality, including the challenges of educational opportunity, access to reproductive health services and employment opportunity. Case study of women's rights in a country to illustrate the gender inequality issues apparent in that country, the consequences of gender inequality on society, and evidence of changing norms and strategies to address gender inequality issues."
    },
    {
     "code": "3.a",
     "q": "What are the strategies for global governance of human rights?",
     "idea": "Human rights violations can be a cause and consequence of conflict.",
     "content": "How the violation of human rights can be a cause of conflict, such as access to education and discrimination; how the violation of human rights can be a consequence of conflict and how this can be addressed through geopolitical intervention; the role of flows of people, money, ideas and technology in geopolitical intervention."
    },
    {
     "code": "3.b",
     "q": "What are the strategies for global governance of human rights?",
     "idea": "Global governance of human rights involves cooperation between organisations at scales from global to local, often in partnership.",
     "content": "How human rights are promoted and protected by institutions, treaties, laws and norms. Case study of strategies for global governance of human rights in one area of conflict to illustrate contributions and interactions of different organisations at a range of scales from global to local, including the United Nations, a national government and an NGO, and consequences of global governance of human rights for local communities."
    },
    {
     "code": "4.a",
     "q": "To what extent has intervention in human rights contributed to development?",
     "idea": "Global governance of human rights has consequences for citizens and places.",
     "content": "How the global governance of human rights issues has consequences for citizens and places, including short term effects such as immediate relief from NGOs and longer term effects such as changes in laws. Case study of the impact of global governance of human rights in an LIDC, including the human rights issue/issues, the global governance strategy/strategies used, opportunities for stability, growth and development, and challenges of inequality and injustice."
    }
   ]
  },
  {
   "id": "2.2.4",
   "component": "C2",
   "option": "globalGovernance",
   "name": "Global governance — Option D: Power and borders",
   "caseStudies": [
    "One country in which sovereignty has been challenged, including causes and challenges to the government",
    "Strategies for global governance in one area of conflict, to illustrate interventions and interactions of organisations at a range of scales",
    "The impact of global governance of sovereignty or territorial integrity in one LIDC, to illustrate and explain the sovereignty or territorial integrity issue/issues"
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What is meant by sovereignty and territorial integrity?",
     "idea": "The world political map of sovereign nation-states is dynamic.",
     "content": "Definitions of state, nation, sovereignty and territorial integrity and how they are fundamental in understanding the world political map; understanding of the terms norms, intervention and geopolitics and how they are fundamental in appreciating that sovereignty and territorial integrity are complex issues."
    },
    {
     "code": "2.a",
     "q": "What are the contemporary challenges to sovereign state authority?",
     "idea": "A multitude of factors pose challenges to sovereignty and territorial integrity.",
     "content": "Erosion of sovereignty and loss of territorial integrity are influenced by economic, political, social and environmental factors, including the challenges of current political boundaries, transnational corporations (TNCs), supranational institutions such as regional trading blocs, and the political dominance of ethnic groups. Case study of one country in which sovereignty has been challenged, including causes and challenges to the government and impacts on people and places."
    },
    {
     "code": "3.a",
     "q": "What is the role of global governance in conflict?",
     "idea": "Global governance provides a framework to regulate the challenge of conflict.",
     "content": "How challenges to sovereignty and territorial integrity can be a cause of conflict, such as access to natural resources; the role of institutions, treaties, laws and norms which are significant in regulating conflict and in reproducing the global system of sovereign nation-states; the role of flows of people, money, ideas and technology in geopolitical intervention."
    },
    {
     "code": "3.b",
     "q": "What is the role of global governance in conflict?",
     "idea": "Global governance involves cooperation between organisations at scales from global to local, often in partnership.",
     "content": "Case study of strategies for global governance in one area of conflict to illustrate interventions and interactions of organisations at a range of scales, including the United Nations, a national government and an NGO, and consequences of global governance of the conflict for local communities."
    },
    {
     "code": "4.a",
     "q": "How effective is global governance of sovereignty and territorial integrity?",
     "idea": "Global governance of sovereignty and territorial integrity has consequences for citizens and places.",
     "content": "How the global governance of sovereignty issues has consequences for citizens and places, including short term effects such as humanitarian aid and longer term effects such as changes in political regime; how the global governance of territorial integrity issues has consequences for citizens and places, including short term effects such as maintaining peace and longer term effects such as trade relationships. Case study of the impact of global governance of sovereignty or territorial integrity in one LIDC to illustrate and explain the sovereignty or territorial integrity issue/issues, the global governance strategy/strategies used, opportunities for stability, growth and development, and challenges of inequality and injustices."
    }
   ]
  },
  {
   "id": "3.1",
   "component": "C3",
   "option": "debates",
   "name": "Climate change",
   "caseStudies": [
    "Case studies of one AC and one EDC to illustrate their contribution to anthropogenic greenhouse gas emissions over time.",
    "Case studies of two contrasting countries at different stages of economic development to illustrate current socio-economic and environmental impacts and the opportunities and threats they present, and technological, socio-economic and political challenges associated with effective mitigation and adaptation."
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "How and why has climate changed in the geological past?",
     "idea": "The Earth’s climate is dynamic",
     "content": "Methods to reconstruct past climate (marine and lake sediments, ice cores, tree rings, fossils); periods of greenhouse and icehouse Earth including the long-term 100 million year transition to colder conditions, glaciation of Antarctica around 35 million years ago, quaternary glaciation and the Holocene interglacial; natural forcing by plate tectonics (volcanic activity, continental drift), Milankovitch cycles, solar output and natural atmospheric greenhouse gases."
    },
    {
     "code": "2.a",
     "q": "How and why has the era of industrialisation affected global climate?",
     "idea": "Humans have influenced the climate system, leading to a new epoch, the Anthropocene",
     "content": "Evidence the world has warmed since the late-19th century (rising surface, atmospheric and oceanic temperatures; shrinking valley glaciers and ice sheets; rising sea level; increasing atmospheric water vapour; decreasing snow cover and sea ice); reasons anthropogenic greenhouse gas emissions have increased since the pre-industrial era; the balance of anthropogenic emissions around the world and how this has changed in recent history; how additional greenhouse gases enhance the natural greenhouse effect; how humans influence the global mean energy balance. Case studies of one AC and one EDC to illustrate their contribution to anthropogenic greenhouse gas emissions over time."
    },
    {
     "code": "3.a",
     "q": "Why is there a debate over climate change?",
     "idea": "Debates of climate change are shaped by a variety of agendas",
     "content": "How humans have played a part in shaping the climate change debate: the historical background of the global warming debate and how it has evolved over time; the role of governments and international organisations, such as the EU or UN; the role and possible bias of the media and different interest groups in shaping the public image of climate change."
    },
    {
     "code": "4.a",
     "q": "In what ways can humans respond to climate change?",
     "idea": "An effective human response relies on knowing what the future will hold",
     "content": "Overview of climate modelling to illustrate the importance of the carbon cycle, the influence of positive and negative feedback, and future emission scenarios and their resulting impacts on global temperatures and sea levels."
    },
    {
     "code": "4.b",
     "q": "In what ways can humans respond to climate change?",
     "idea": "The impacts of climate change are global and dynamic",
     "content": "Implications of climate change currently being experienced by people and the environment, such as changes to ecosystems, health and extreme weather, and how these are projected to change in the future; the vulnerability of people and the environment to the impacts of climate change."
    },
    {
     "code": "4.c",
     "q": "In what ways can humans respond to climate change?",
     "idea": "Mitigation and adaptation are complementary strategies for reducing and managing the risks of climate change",
     "content": "Mitigation strategies to cut global emissions of greenhouse gases: energy efficiency and conservation, fuel shifts and low-carbon energy sources, carbon capture and storage, forestry strategies, geoengineering. Adaptation strategies to reduce the vulnerability of human populations at risk: the framework of adaptation (retreat, accommodate, protect) and its implementation across the development continuum; what future homes, offices, cities, transport and economies will look like following adaptation through the 21st century. Case studies of two contrasting countries at different stages of economic development to illustrate current socio-economic and environmental impacts and the opportunities and threats they present, and technological, socio-economic and political challenges associated with effective mitigation and adaptation."
    },
    {
     "code": "5.a",
     "q": "Can an international response to climate change ever work?",
     "idea": "Effective implementation depends on policies and co-operation at all scales",
     "content": "Geopolitics associated with the human response to climate change: the role of the Intergovernmental Panel on Climate Change in shaping policy making; the success of international directives, such as the Kyoto Protocol; the significance of carbon trading and carbon credits; the evolution of national and sub-national policy that extends beyond the vision of international directives."
    }
   ]
  },
  {
   "id": "3.2",
   "component": "C3",
   "option": "debates",
   "name": "Disease dilemmas",
   "caseStudies": [
    "Case study of one country which has experienced a natural hazard, such as an earthquake, drought or monsoon rains, and the implications this has on a named disease, such as cholera or typhoid.",
    "Case study of one country experiencing air pollution and the impact this has on incidences of cancers (such as lung or bladder), and the global and national solutions in dealing with this.",
    "Case study of one communicable disease, such as malaria or tuberculosis, at a country scale, either an LIDC or EDC.",
    "Case study of one noncommunicable disease, such as cardio-vascular disease or diabetes, at a country scale, either an AC or EDC.",
    "Case study of the role that one NGO has played in dealing with a disease outbreak within one country at national and local level.",
    "Case study of one medicinal plant, such as rosy periwinkle and opium poppy, including their growing conditions, international trade, medicinal importance for disease and sustainable use.",
    "Case study of the global impact of one pharmaceutical transnational, including scientific breakthroughs made, patents, drug manufacturing and their global flows for distribution."
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What are the global patterns of disease and can factors be identified that determine these?",
     "idea": "Diseases can be classified and their patterns mapped; the spread of disease is complex and influenced by a number of factors",
     "content": "How diseases can be classified, including infectious and non-infectious, communicable and noncommunicable, contagious and non-contagious, epidemic, endemic and pandemic; patterns of diseases, including global distributions of malaria, HIV, tuberculosis, diabetes and cardio-vascular disease; disease diffusion and spread to new areas (the Hägerstrand model), including the phases of diffusion and physical and socio-economic barriers."
    },
    {
     "code": "1.b",
     "q": "What are the global patterns of disease and can factors be identified that determine these?",
     "idea": "There is a relationship between physical factors and the prevalence of disease which can change over time",
     "content": "Global patterns of temperature, precipitation, relief and water sources and how they affect patterns of disease; physical factors influencing vectors of disease such as the prevalence of mosquitoes in warm, humid areas close to water sources; how seasonal variations influence disease outbreaks such as periods of drought or monsoon rains; climate change providing the conditions for emerging infectious diseases to spread to new places and new hosts such as West Nile virus, tsetse fly and tick seasons; the conditions for zoonotic infectious diseases such as bird flu or rabies to establish and spread from animals to humans."
    },
    {
     "code": "1.c",
     "q": "What are the global patterns of disease and can factors be identified that determine these?",
     "idea": "Natural hazards can influence the outbreak and spread of disease",
     "content": "Case study of one country which has experienced a natural hazard, such as an earthquake, drought or monsoon rains, and the implications this has on a named disease, such as cholera or typhoid: the geographical area covered by the hazard and its influence on the risk and outbreak of disease; environmental factors affecting the spread of disease such as climate, sanitation, water supply and food; human factors affecting the spread of the disease such as population density, access to clean water, immunisation programmes; impacts of the disease on resident populations; strategies used to minimise the impacts of the disease at national and international scales."
    },
    {
     "code": "2.a",
     "q": "Is there a link between disease and levels of economic development?",
     "idea": "As countries develop economically the frequency of communicable diseases decreases, while the prevalence of noncommunicable diseases rises",
     "content": "How rising standards of living, including access to food, clean water and sanitation, impact upon susceptibility to disease and influence a country’s epidemiological transition; the reasons why LIDCs have a higher prevalence for communicable diseases (diseases of poverty) and ACs have a higher prevalence for noncommunicable diseases (diseases of affluence). Case study of one country experiencing air pollution and the impact this has on incidences of cancers (such as lung or bladder), and the global and national solutions in dealing with this."
    },
    {
     "code": "3.a",
     "q": "How effectively are communicable and noncommunicable diseases dealt with?",
     "idea": "Communicable diseases have causes and impacts with mitigation and response strategies which have varying levels of success",
     "content": "Case study of one communicable disease, such as malaria or tuberculosis, at a country scale, either an LIDC or EDC, including: the environmental and human causes of the disease; prevalence, incidence and patterns of the disease; socio-economic impacts of the disease; direct and indirect strategies used by government and international agencies to mitigate against the disease and respond to outbreaks."
    },
    {
     "code": "3.b",
     "q": "How effectively are communicable and noncommunicable diseases dealt with?",
     "idea": "Noncommunicable diseases have causes and impacts with mitigation and response strategies which have varying levels of success",
     "content": "Case study of one noncommunicable disease, such as cardio-vascular disease or diabetes, at a country scale, either an AC or EDC, including: the social, economic and cultural causes of the disease; prevalence, incidence and patterns of the disease; socio-economic impacts of the disease; direct and indirect strategies used by government and international agencies to mitigate against the disease."
    },
    {
     "code": "4.a",
     "q": "How far can diseases be predicted and mitigated against?",
     "idea": "Increasing global mobility impacts the diffusion of disease and the ability to respond to it, at a variety of scales",
     "content": "The role of international organisations, such as the World Health Organization, in providing international strategies to combat disease, including predicting diseases, gathering data, research, support programmes and their work with agencies and governments; identifying a disease outbreak at a global scale, such as H1N1 or SARS, including its rate of spread and patterns of outbreak distribution. Case study of the role that one NGO has played in dealing with a disease outbreak within one country at national and local level."
    },
    {
     "code": "4.b",
     "q": "How far can diseases be predicted and mitigated against?",
     "idea": "Mitigation strategies to combat global pandemics and overcome physical barriers",
     "content": "Physical barriers, such as relief, natural hazards, excess water and remoteness of communities, have positive and negative effects on mitigation strategies and response efforts in dealing with diseases; mitigation strategies used by government and international agencies to combat global pandemics, such as HIV/AIDS, including screening, availability and funding of treatment and education programmes."
    },
    {
     "code": "5.a",
     "q": "Can diseases ever be fully eradicated?",
     "idea": "Nature has provided medicines to treat disease for thousands of years",
     "content": "Medicines from nature, their habitats and conditions for growth including the influence of soil type and climate. Case study of one medicinal plant, such as rosy periwinkle and opium poppy, including their growing conditions, international trade, medicinal importance for disease and sustainable use; conservation issues relating to the international trade in medicinal plants such as endangering species survival, erosion of genetic diversity, threats to the survival of natural ecosystems."
    },
    {
     "code": "5.b",
     "q": "Can diseases ever be fully eradicated?",
     "idea": "Top down and bottom up strategies that deal with disease risk and eradication",
     "content": "Case study of the global impact of one pharmaceutical transnational, including scientific breakthroughs made, patents, drug manufacturing and their global flows for distribution; strategies for disease eradication at a range of scales, including global and national campaigns; the impact of grassroots strategies in educating communities and the role of women in combating disease risk."
    }
   ]
  },
  {
   "id": "3.3",
   "component": "C3",
   "option": "debates",
   "name": "Exploring oceans",
   "caseStudies": [
    "Case study of the management of one renewable biological resource within oceans, such as krill or whale, including the use and management of this resource.",
    "Case study of one oil spill, including impacts on the physical environment and marine ecosystems and impacts on human activities such as fishing and tourism.",
    "Case study of the accumulation of plastic in one ocean gyre such as in the North Pacific, including causes of the accumulation.",
    "Case study of one island community in either the Indian Ocean, Pacific Ocean or the Caribbean Sea to illustrate the threats to island communities.",
    "Case study of the Arctic region, including the geo-political implications of changes in ice-cover in the Arctic region.",
    "The distribution of naval strongholds for one country, such as USA, Russia or China, including its home and overseas ports, and a marine conflict zone where countries dispute ocean territory areas."
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What are the main characteristics of oceans?",
     "idea": "The world’s oceans are a distinctive feature of the Earth",
     "content": "The global distribution of the world’s oceans, their areas and volumes; the relief of ocean basins, including continental shelf and slope, abyssal plain, ocean ridges and rifts, ocean trenches and guyots."
    },
    {
     "code": "1.b",
     "q": "What are the main characteristics of oceans?",
     "idea": "Water in the world’s oceans varies horizontally and vertically",
     "content": "Horizontal and vertical variations in salinity and temperature; the global distribution of warm and cold surface currents; the pattern of circulation in the North Atlantic, including both surface and deep currents."
    },
    {
     "code": "1.c",
     "q": "What are the main characteristics of oceans?",
     "idea": "Changes in light, temperature and nutrient supply influence the biodiversity of oceans",
     "content": "How and why ocean ecosystems are influenced by changes in light, temperature and nutrient supply, which vary with latitude and depth; a comparison of food chains, food webs and biodiversity in inter-tidal and deep-water ecosystems."
    },
    {
     "code": "2.a",
     "q": "What are the opportunities and threats arising from the use of ocean resources?",
     "idea": "Biological resources within oceans can be used in sustainable or unsustainable ways",
     "content": "Case study of the management of one renewable biological resource within oceans, such as krill or whale, including: the use and management of this resource; how the values, attitudes, socio-economic status and political context of the stake holders influence the use and management of the resource; the resilience of the resource and key thresholds to initiate management."
    },
    {
     "code": "2.b",
     "q": "What are the opportunities and threats arising from the use of ocean resources?",
     "idea": "The use of ocean energy and mineral resources is a contested issue",
     "content": "The use and management of ocean energy resources, including oil and gas (non-renewable resources) and wave and tidal energy (flow resources — renewable resources); the use of sea-bed minerals, including ferrous and non-ferrous minerals, as examples of non-renewable resource use."
    },
    {
     "code": "2.c",
     "q": "What are the opportunities and threats arising from the use of ocean resources?",
     "idea": "Governing the oceans poses issues for the management of resources",
     "content": "Oceans as part of the ‘global commons’, including the idea of the ‘tragedy of the commons’; a series of zones extending out from the land that aim to help manage the ocean, including territorial waters, contiguous zone, exclusive economic zone (EEZ) and high seas; resource management through frameworks such as the United Nations Convention on the Law of the Sea (UNCLOS) and marine reserves."
    },
    {
     "code": "3.a",
     "q": "How and in what ways do human activities pollute oceans?",
     "idea": "There are a variety of pollutants that affect the ocean system",
     "content": "The major sources of pollutants, including combustion of fossil fuels (such as carbon dioxide), and domestic and industrial pollutants (such as plastics, heavy metals or nuclear waste)."
    },
    {
     "code": "3.b",
     "q": "How and in what ways do human activities pollute oceans?",
     "idea": "Off-shore oil production and transport poses threats for people and the environment",
     "content": "Case study of one oil spill, including: impacts on the physical environment and marine ecosystems; impacts on human activities such as fishing and tourism; management of the oil spill and its impacts."
    },
    {
     "code": "3.c",
     "q": "How and in what ways do human activities pollute oceans?",
     "idea": "The pattern of global ocean currents can disperse and concentrate pollution",
     "content": "How pollution, such as plastic, can spread around the globe via oceanic circulation and its impact on marine ecosystems. Case study of the accumulation of plastic in one ocean gyre such as in the North Pacific, including: causes of the accumulation; the impacts on marine ecosystems."
    },
    {
     "code": "4.a",
     "q": "How is climate change impacting the ocean system?",
     "idea": "Climate change is altering the nature of the ocean’s water",
     "content": "How acidification of oceans contributes to depleting fish stocks and has resulting impacts for people; the rising temperature of the oceans and its threat to coral ecosystems, such as coral bleaching, loss in biodiversity and threats to local communities."
    },
    {
     "code": "4.b",
     "q": "How is climate change impacting the ocean system?",
     "idea": "Climate change is altering sea levels",
     "content": "The causes of sea level change due to climate change, the thermal expansion of water and the transfer of water from the land to the oceans. Case study of one island community in either the Indian Ocean, Pacific Ocean or the Caribbean Sea to illustrate: the threats to island communities; the impact on communities; the adaptations by governments and communities in both the short- and long-term."
    },
    {
     "code": "4.c",
     "q": "How is climate change impacting the ocean system?",
     "idea": "Climate change is altering high latitude oceans",
     "content": "The impact of global warming on the extent of sea ice, the feedback between the extent of ice cover and the degree of warming, and the concept of a threshold beyond which change becomes irreversible. Case study of the Arctic region, including: the geo-political implications of changes in ice-cover in the Arctic region; the impact on indigenous peoples; the threats and opportunities posed by the opening up of ocean route-ways and increasing access to ocean bed minerals; the management of the changing geography of the Arctic through international organisations."
    },
    {
     "code": "5.a",
     "q": "How have socio-economic and political factors influenced the use of the oceans?",
     "idea": "Oceans have been and continue to be vital elements in the process of globalisation",
     "content": "The pattern of principal shipping routes across the oceans, including the influence of changes in the scale of ocean shipping; the direction and type of trade across the oceans."
    },
    {
     "code": "5.b",
     "q": "How have socio-economic and political factors influenced the use of the oceans?",
     "idea": "Oceans are important spaces where countries challenge each other",
     "content": "The use of oceans by countries to exert their influence, including: the distribution of naval strongholds for one country, such as USA, Russia or China, including its home and overseas ports; a marine conflict zone where countries dispute ocean territory areas."
    },
    {
     "code": "5.c",
     "q": "How have socio-economic and political factors influenced the use of the oceans?",
     "idea": "Oceans present hazardous obstacles to human activities",
     "content": "The distribution of 21st century piracy and its management; the use of oceans as escape routes for migrants such as South East Asia to Australia or North Africa to Europe."
    }
   ]
  },
  {
   "id": "3.4",
   "component": "C3",
   "option": "debates",
   "name": "Future of food",
   "caseStudies": [
    "Case study of one place to illustrate how human and physical factors are/have combined to cause issues with food security.",
    "Case study of one dryland area including how food security risks and vulnerability are influenced by the specific ecosystem, climate and hydrology.",
    "Case study of one indigenous farming technique in an extreme environment, such as the Arctic, including the physical conditions of the environment.",
    "Case study of how one physical environment is/has been impacted by food production methods including the specific short- and long-term impacts on the environment.",
    "Case studies of two places at contrasting levels of economic development to illustrate the implications of poor food security on the lives of people.",
    "Case studies of two contrasting places at different levels of development and the strategies and techniques that have been used to ensure or improve food security."
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What is food security and why is it of global significance?",
     "idea": "Food security is a complex, spatially variable concept",
     "content": "Food security rests on three pillars — food access, food availability and food use; current trends shown by data such as undernourishment and hunger statistics and the Global Food Security Index; the pattern of food security is dynamic and varies both between and within countries."
    },
    {
     "code": "1.b",
     "q": "What is food security and why is it of global significance?",
     "idea": "Global food production as an interconnected system",
     "content": "The physical conditions required for growing food, including air, climate, soil and water; feeding the world as a complex system of growing, processing, transporting and disposing of consumer waste; food production methods vary from intensive to extensive and subsistence to commercial."
    },
    {
     "code": "1.c",
     "q": "What is food security and why is it of global significance?",
     "idea": "Globalisation is changing the food industry",
     "content": "The influence of globalisation on the food industry, such as increased demand and global tastes; issues created including food miles, inequality between TNCs and small suppliers, obesity and price crisis; opportunities created including technological innovation, short-term food relief and consumer choice."
    },
    {
     "code": "2.a",
     "q": "What are the causes of inequality in global food security?",
     "idea": "Interrelated factors that can influence food security",
     "content": "The range of physical factors affecting food security across the globe such as geology, soil and length of growing season; social, economic and political factors such as land ownership systems, competition and land grabbing, and how these vary place to place; theoretical positions including Malthusian and Boserupian scenarios. Case study of one place to illustrate how human and physical factors have combined to cause issues with food security."
    },
    {
     "code": "3.a",
     "q": "What are the threats to global food security?",
     "idea": "Identifying risks to food security highlights the most vulnerable societies",
     "content": "Regions, countries and people whose food security is most at risk across the development spectrum; geographical pinchpoints where food security is at risk from storage or distribution issues, such as the Suez Canal; the physical and human causes of desertification and how this changes ecosystems to increase risks. Case study of one dryland area including how food security risk and vulnerability are influenced by its ecosystem, climate and hydrology, and worsening factors such as population change, landgrabbing and climate change."
    },
    {
     "code": "3.b",
     "q": "What are the threats to global food security?",
     "idea": "The food system is vulnerable to shocks that can impact food security",
     "content": "Climate change leading to increasing frequency of extreme weather events such as wild-fire, El Nino, floods and drought that affect food production; how water scarcity can exacerbate food production issues; how tectonic hazards can influence food production and distribution. Case study of one indigenous farming technique in an extreme environment, such as the Arctic, including the physical conditions of the environment (ecosystems, terrain and climate), the food production methods used by indigenous people, and threats to that group's food security."
    },
    {
     "code": "4.a",
     "q": "How do food production and security issues impact people and the physical environment?",
     "idea": "Imbalance in the global food system has physical and human impacts",
     "content": "How attempts to increase food production and security can impact the physical environment, including irrigation and salinisation, deforestation and impacts on biodiversity, changing landscapes and water quality from agrochemicals. Case study of how one physical environment has been impacted by food production methods, including short- and long-term impacts. How food security issues impact people, including health issues from food shortages, health issues from food surpluses and poor diet, and harmful impacts on human health from increased use of chemicals and pesticides. Case studies of two places at contrasting levels of economic development to illustrate the implications of poor food security on the lives of people."
    },
    {
     "code": "5.a",
     "q": "Is there hope for the future of food?",
     "idea": "Food is a geopolitical commodity influenced by a number of key players",
     "content": "The opportunities between countries to ensure food security, including agricultural trading policies, the role of the World Trade Organization and appropriate aid; the role and responsibilities of agribusiness, Trans-National Corporations such as Unilever, food retailers such as Tesco, and fair trade organisations in influencing the global food system."
    },
    {
     "code": "5.b",
     "q": "Is there hope for the future of food?",
     "idea": "A spectrum of strategies exists to ensure and improve food security",
     "content": "Approaches to increasing food security vary from short-term relief to capacity building and long-term system redesign; the effectiveness and sustainability of techniques from large-scale technological techniques to small-scale bottom-up and appropriate approaches. Case studies of two contrasting places at different levels of development and the strategies and techniques used to ensure or improve food security."
    }
   ]
  },
  {
   "id": "3.5",
   "component": "C3",
   "option": "debates",
   "name": "Hazardous Earth",
   "caseStudies": [
    "Case studies of two countries at contrasting levels of economic development to illustrate reasons why people choose to live in tectonically active locations, in relation to volcanic activity.",
    "Case studies of two countries at contrasting levels of economic development to illustrate reasons why people choose to live in tectonically active locations, in relation to seismic activity.",
    "Case studies of two countries at contrasting levels of economic development to illustrate strategies used to cope with volcanic activity.",
    "Case studies of two countries at contrasting levels of economic development to illustrate strategies used to cope with hazards from earthquakes."
   ],
   "ideas": [
    {
     "code": "1.a",
     "q": "What is the evidence for continental drift and plate tectonics?",
     "idea": "Evidence for continental drift and plate tectonics",
     "content": "Theories of continental drift and plate tectonics including the basic structure of the Earth (lithosphere, asthenosphere and the role of convection currents); evidence for sea-floor spreading, paleomagnetism and the age of sea floor rocks; evidence from ancient glaciations; fossil records."
    },
    {
     "code": "1.b",
     "q": "What is the evidence for continental drift and plate tectonics?",
     "idea": "Distinctive features and processes at plate boundaries",
     "content": "Earth's crustal features and processes, including the global pattern of plates and plate boundaries; features and processes at divergent (constructive) plate boundaries; features and processes at convergent boundaries including oceanic-continental, oceanic-oceanic (destructive) and continental-continental (collision) boundaries; features and processes at conservative plate boundaries."
    },
    {
     "code": "2.a",
     "q": "What are the main hazards generated by volcanic activity?",
     "idea": "A variety of volcanic activity produces distinctive landforms and landscapes",
     "content": "Different types of volcanoes, their causes and features, including explosive eruptions (higher viscosity magma) at convergent (destructive) plate boundaries; effusive eruptions (lower viscosity magma) and landforms at divergent (constructive) plate boundaries; eruptions not at plate boundaries (hot spots) such as the Hawaiian chain and the East African Rift Valley; the size and shape of different volcano types including super-volcanoes; the volcanic explosive index (VEI) for assessing volcanic activity."
    },
    {
     "code": "2.b",
     "q": "What are the main hazards generated by volcanic activity?",
     "idea": "Volcanic eruptions generate distinctive hazards",
     "content": "Different types of volcanic eruptions and the hazards they generate, including lava flows, pyroclastic flows, gas emissions, tephra and ash; lahars and flooding associated with the melting of ice; tsunamis associated with explosive eruptions."
    },
    {
     "code": "3.a",
     "q": "What are the main hazards generated by seismic activity?",
     "idea": "A variety of earthquake activity produces distinctive landforms and landscapes",
     "content": "Earthquake characteristics, their causes and features, including shallow-focus earthquakes; deep-focus earthquakes; the different measures of assessing earthquake magnitude (Richter, moment magnitude scale, modified Mercalli intensity scale); the effects earthquakes have on landforms and landscapes including the development of escarpments and rift valleys."
    },
    {
     "code": "3.b",
     "q": "What are the main hazards generated by seismic activity?",
     "idea": "Earthquakes generate distinctive hazards",
     "content": "Hazards generated by earthquakes, including ground shaking and ground displacement; liquefaction; landslides and avalanches; tsunamis associated with sea-bed uplift and underwater landslides; flooding."
    },
    {
     "code": "4.a",
     "q": "What are the implications of living in tectonically active locations?",
     "idea": "People experience a range of impacts from volcanic eruptions",
     "content": "Case studies of two countries at contrasting levels of economic development to illustrate reasons why people choose to live in tectonically active locations, the impacts people experience as a result of volcanic eruptions, and the economic, environmental and political impacts on the country."
    },
    {
     "code": "4.b",
     "q": "What are the implications of living in tectonically active locations?",
     "idea": "People experience a range of impacts from earthquake activity",
     "content": "Case studies of two countries at contrasting levels of economic development to illustrate reasons why people choose to live in tectonically active locations, the impacts people experience as a result of earthquake activity, and the economic, environmental and political impacts on the country."
    },
    {
     "code": "5.a",
     "q": "What measures are available to help people cope with living in tectonically active locations?",
     "idea": "Various strategies exist to manage hazards from volcanic activity",
     "content": "Case studies of two countries at contrasting levels of economic development to illustrate strategies used to cope with volcanic activity, including attempts to mitigate against the event such as lava diversion channels; attempts to mitigate against vulnerability such as community preparedness; attempts to mitigate against losses such as rescue and emergency relief."
    },
    {
     "code": "5.b",
     "q": "What measures are available to help people cope with living in tectonically active locations?",
     "idea": "Various strategies exist to manage hazards from earthquakes",
     "content": "Case studies of two countries at contrasting levels of economic development to illustrate strategies used to cope with hazards from earthquakes, including attempts to mitigate against the event such as land-use zoning; attempts to mitigate against vulnerability such as building design; attempts to mitigate against losses such as insurance."
    },
    {
     "code": "5.c",
     "q": "What measures are available to help people cope with living in tectonically active locations?",
     "idea": "Exposure to risk and ability to cope with tectonic hazards changes over time",
     "content": "How and why the risks from tectonic hazards have changed over time, including changes in the frequency and impacts of tectonic hazards over time; the degree of risk posed by a hazard and the probability of the hazard event occurring (the disaster risk equation); possible future strategies to cope with risks from tectonic hazards. The relationship between disaster and response, including the Park model."
    }
   ]
  },
  {
   "id": "4",
   "component": "C4",
   "option": null,
   "name": "Investigative geography (NEA)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1",
     "q": "What must the investigation's plan, purpose and introduction establish, and what does the top level reward?",
     "idea": "Planning, purpose and introduction",
     "content": "The investigation must be based on a question or issue defined and developed by the learner individually, addressing aims, questions and/or hypotheses relating to any part of the specification; finalising the title, focus and purpose of the investigation is independent work, with clear justification and contextualisation in the introduction. The top level (6–8 marks) requires a clear, well-focused plan with aims/questions/hypotheses linked to the geographic purpose; an individual topic or issue accurately and appropriately defined within a research framework; justification and valid contextualisation of fieldwork and research; a precise, geo-located location at appropriately different scales; and clear evidence of valid individual literature research contextualising the investigation through wider geographical links, comparisons, models and theory."
    },
    {
     "code": "2",
     "q": "How must data collection methods and the sampling framework be devised, justified and carried out?",
     "idea": "Data, information collection methods and sampling framework",
     "content": "The investigation must incorporate data and/or evidence from field investigations, collected individually or in groups, and draw on the learner's own field data and, if relevant, secondary data sourced by the learner; devising methodology and sampling framework and primary data collection allow collaboration, but secondary data collection must be carried out independently. The top level (5–7 marks) requires good knowledge and understanding of a range of data collection methodologies, including suitable quantitative and/or qualitative approaches, justified with limitations outlined and explained in detail; clear evidence of personalised methodologies to observe and record primary data and incorporate secondary data; clear evidence of collecting and using digital, geo-located data; an appropriate, coherent and justified data design framework (sampling, frequency, range and location choice); and an understanding of the ethical and socio-political dimensions of the methodologies chosen."
    },
    {
     "code": "3",
     "q": "How should the collected data be selected and presented, and what does the top level reward?",
     "idea": "Data presentation techniques",
     "content": "Data/information presentation is independent work: learners select and use appropriate data presentation methods on their own. The top level (7–9 marks) requires appropriate and selective presentation of the most influential data collected directly related to the investigation; a range of presentation techniques that is appropriate and well selected, with good knowledge and understanding of the relevant techniques for representing results clearly; and an appropriate balance of simple and more sophisticated data representation methods relevant to the topic."
    },
    {
     "code": "4",
     "q": "How must the data be analysed, interpreted and explained, and what does the top level reward?",
     "idea": "Data analysis and explanation",
     "content": "Data analysis and explanation/interpretation is independent work: learners select and use appropriate data analysis techniques and independently interpret and analyse the results on their own, requiring the learner independently to contextualise, analyse and summarise findings and data. The top level (11–14 marks) requires data analysed and interpreted in an effective and coherent manner with evidence of independence; accurate and proficient statistical analysis and significance testing where appropriate; successfully and individually developed qualitative and non-numerical analysis techniques where appropriate; analysis and explanation that link effectively to the stated aims/questions/hypotheses; and effective use of appropriate knowledge, theory and geographical concepts to help explain findings."
    },
    {
     "code": "5",
     "q": "How must the investigation's conclusions and evaluation be reached and communicated, and what does the top level reward?",
     "idea": "Conclusions and investigation evaluation",
     "content": "Conclusions and evaluation is independent work: learners evaluate the findings of their investigation and reach a balanced and supported conclusion on their own, involving the individual drawing of conclusions and their communication by means of extended writing and the presentation of relevant data. The top level (10–12 marks) requires clear, accurate and thorough conclusions linked to the aims/questions/hypotheses, communicated by extended writing; effective use of primary and secondary evidence and theory to provide a very well-argued case; convincing evidence the investigation extended geographical understanding with clear reference to the wider geographical context; a strong evaluation of the investigation's overall success covering the reliability of data sources, data collection methods (including sampling), the accuracy and representativeness of data collected, and the validity of the analysis and conclusions; and a thorough understanding of the ethical and socio-political dimensions of field research and data presentation."
    },
    {
     "code": "6",
     "q": "What must the overall quality, structure and communication of the written report demonstrate, and what does the top level reward?",
     "idea": "Overall quality and communication of written work",
     "content": "The report must contain a clear structure and continuous prose, with any digital material referenced or evidenced through weblinks and/or screenshots, and a recommended length of between 3000 and 4000 words. The top level (7–10 marks) requires a high standard of communication relevant to the geographic purpose of the investigation; clear arguments demonstrating a strong degree of individuality; work that is very well structured, logical, concise, with text and figures appropriately integrated; sources and literature references clearly stated and accurately referenced throughout; and geographical terminology that is technical and used appropriately, with rare written-language errors."
    }
   ]
  },
  {
   "id": "2e",
   "component": "C1",
   "option": null,
   "name": "Geographical skills (all papers) and fieldwork skills (NEA)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.1",
     "q": "What must learners understand and be able to do with geographical information?",
     "idea": "Geographical information",
     "content": "With respect to geographical information, learners should: a) understand what makes data geographical; b) understand the ethical and socio-political implications of collecting, studying and representing geographical data, especially with regard to human communities; c) understand the nature of and use different types of geographical information, including qualitative and quantitative, primary and secondary, images, maps, diagrams and graphical representations, factual text and discursive/creative material, digital data, numerical and spatial data, and innovative forms of data including crowd-sourced and 'big data'; d) collect, analyse and interpret such information, and demonstrate the ability to understand and apply suitable analytical approaches for the different information types; e) undertake informed and critical questioning of data sources, analytical methodologies, data reporting and presentation, including the ability to identify sources of error in data and to identify the misuse of data; f) communicate and evaluate findings, draw well-evidenced conclusions informed by wider theory, and construct extended written argument about geographical matters."
    },
    {
     "code": "4.2",
     "q": "What must learners be able to do with geo-located data?",
     "idea": "Geo-located data",
     "content": "With respect to geo-located data, learners should: a) demonstrate an ability to collect and to use digital data through the use of geospatial technologies, such as smart phones and tablet devices; b) understand the opportunities and benefits of presenting and analysing geographical data through the use of Geographical Information Systems (GIS)."
    },
    {
     "code": "4.3",
     "q": "What qualitative skills must learners use and understand?",
     "idea": "Qualitative skills",
     "content": "With respect to qualitative skills, learners should: a) use and understand a mixture of methodological approaches, including using interviews; b) interpret, analyse and evaluate a range of source material including textual and visual sources; c) understand the opportunities and limitations of qualitative techniques such as coding and sampling."
    },
    {
     "code": "4.4",
     "q": "What quantitative skills must learners understand the purpose of and be able to use?",
     "idea": "Quantitative skills",
     "content": "With respect to quantitative skills, learners should understand the purposes and difference between the following and be able to use them in appropriate contexts: a) mean, median, mode, range, interquartile range and standard deviation; b) tests of association and significance tests, such as Chi-squared, Spearman's rank, Mann-Whitney U test and T-test; c) lines of best fit and correlation on graphical representations; d) measurement, measurement errors, and sampling."
    },
    {
     "code": "5",
     "q": "What fieldwork skills does A Level Geography require, and what is the minimum fieldwork requirement?",
     "idea": "Fieldwork skills",
     "content": "The assessment of fieldwork skills will be within Investigative geography (04/05) and there will be no assessment of fieldwork skills within the examinations for components Physical systems (01), Human interactions (02) and Geographical debates (03); marks associated with geographical skills (4.1–4.4) will be assessed within each of these three components. With respect to fieldwork skills, A Level Geography requires learners to: a) define the research questions which underpin field investigations; b) research relevant literature sources and understand and write up the theoretical or comparative context for a research question; c) observe and record phenomena in the field and devise and justify practical approaches taken in the field including frequency/timing of observation, sampling, and data collection approaches; d) demonstrate practical knowledge and understanding of appropriate field methodologies; e) implement chosen methodologies to collect data/information of good quality and relevant to the topic under investigation; f) demonstrate knowledge and understanding of the techniques appropriate for analysing field data and information and for representing results, and show ability to select suitable quantitative or qualitative approaches and to apply them; g) demonstrate the ability to interrogate and critically examine field data in order to comment on its accuracy and/or the extent to which it is representative, and use the experience to extend geographical understanding; h) apply existing knowledge, theory and concepts to order and understand field observations; i) show the ability to write up field results clearly and logically, using a range of presentation methods; j) evaluate and reflect on fieldwork investigations, explain how the results relate to the wider context and show an understanding of the ethical dimensions of field research; k) demonstrate the ability to write a coherent analysis of fieldwork findings in order to answer a specific geographical question and to do this drawing effectively on evidence and theory to make a well-argued case. Fieldwork is required to be undertaken for at least four days throughout the A Level course, including in relation to processes in both physical and human geography."
    }
   ]
  }
 ]
};
module.exports = { SPEC_H481 };
