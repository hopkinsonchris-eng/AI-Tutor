/* AQA GCSE Combined Science: Trilogy (8464) — built by hand in a Claude Code session from the official
   specification PDF (see spec.source for provenance) to the contract in src/spec-validator.js.
   Content statements are the board's own, condensed; codes are copied character for character.
   Required practicals sit inside the content statement the document lists them under.
   Judged 0.9 against the document by a fresh-context subagent: 225 of 225 content statements covered, nothing
   invented, all 21 required practicals placed; five fidelity notes corrected. Every room has a hand-built kit,
   judged 0.80–0.93 by a second model, in src/kits/AQA-8464.js. */
const SPEC_8464 = {
 "id": "AQA-8464",
 "board": "AQA",
 "subject": "Combined Science",
 "code": "8464",
 "level": "GCSE",
 "version": "AQA GCSE Combined Science: Trilogy 8464, Version 1.1, 04 October 2019",
 "firstExam": 2018,
 "essaySubject": false,
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/science/specifications/AQA-8464-SP-2016.PDF",
  "etag": "\"2de2d6-5c8906941c5c4\"",
  "lastModified": "Mon, 02 Aug 2021 09:44:10 GMT",
  "length": 3007190,
  "checkedAt": "2026-09-10T16:53:47.096Z"
 },
 "components": [
  {
   "id": "B1",
   "name": "Biology Paper 1",
   "marks": 70,
   "weight": 16.7,
   "minutes": 75,
   "sections": [
    "Biology topics 1–4: Cell biology; Organisation; Infection and response; Bioenergetics",
    "Working scientifically, mathematical requirements and apparatus and techniques are assessed on every paper",
    "Written exam 1 hour 15 minutes, Foundation and Higher Tier, 70 marks, 16.7% of GCSE; multiple choice, structured, closed short answer and open response"
   ]
  },
  {
   "id": "B2",
   "name": "Biology Paper 2",
   "marks": 70,
   "weight": 16.7,
   "minutes": 75,
   "sections": [
    "Biology topics 5–7: Homeostasis and response; Inheritance, variation and evolution; Ecology",
    "Written exam 1 hour 15 minutes, Foundation and Higher Tier, 70 marks, 16.7% of GCSE"
   ]
  },
  {
   "id": "C1",
   "name": "Chemistry Paper 1",
   "marks": 70,
   "weight": 16.7,
   "minutes": 75,
   "sections": [
    "Chemistry topics 8–12: Atomic structure and the periodic table; Bonding, structure, and the properties of matter; Quantitative chemistry; Chemical changes; Energy changes",
    "Appendix A: a periodic table is supplied in the exam",
    "Written exam 1 hour 15 minutes, Foundation and Higher Tier, 70 marks, 16.7% of GCSE"
   ]
  },
  {
   "id": "C2",
   "name": "Chemistry Paper 2",
   "marks": 70,
   "weight": 16.7,
   "minutes": 75,
   "sections": [
    "Chemistry topics 13–17: The rate and extent of chemical change; Organic chemistry; Chemical analysis; Chemistry of the atmosphere; Using resources",
    "Questions in Paper 2 may draw on fundamental concepts and principles from Sections 5.1 to 5.3",
    "Appendix A: a periodic table is supplied in the exam",
    "Written exam 1 hour 15 minutes, Foundation and Higher Tier, 70 marks, 16.7% of GCSE"
   ]
  },
  {
   "id": "P1",
   "name": "Physics Paper 1",
   "marks": 70,
   "weight": 16.7,
   "minutes": 75,
   "sections": [
    "Physics topics 18–21: Energy; Electricity; Particle model of matter; Atomic structure",
    "Appendix B: equations 1–21 must be recalled; the Physics equation sheet (v² − u² = 2as, Ee = ½ke², ΔE = mcΔθ, period = 1/frequency, F = BIl (HT), E = mL, VpIp = VsIs (HT)) is supplied",
    "Written exam 1 hour 15 minutes, Foundation and Higher Tier, 70 marks, 16.7% of GCSE"
   ]
  },
  {
   "id": "P2",
   "name": "Physics Paper 2",
   "marks": 70,
   "weight": 16.7,
   "minutes": 75,
   "sections": [
    "Physics topics 22–24: Forces; Waves; Magnetism and electromagnetism",
    "Appendix B: equations 1–21 must be recalled; the Physics equation sheet is supplied",
    "Written exam 1 hour 15 minutes, Foundation and Higher Tier, 70 marks, 16.7% of GCSE"
   ]
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge and understanding",
   "text": "Demonstrate knowledge and understanding of: scientific ideas; scientific techniques and procedures. 37–43% of each paper, 40% overall."
  },
  {
   "id": "AO2",
   "label": "Application",
   "text": "Apply knowledge and understanding of: scientific ideas; scientific enquiry, techniques and procedures. 37–43% of each paper, 40% overall."
  },
  {
   "id": "AO3",
   "label": "Analysis and evaluation",
   "text": "Analyse information and ideas to: interpret and evaluate; make judgments and draw conclusions; develop and improve experimental procedures. 17–23% of each paper, 20% overall."
  }
 ],
 "markConventions": {
  "style": "points",
  "summary": "Six papers, each 70 raw marks scaled ×1; total scaled mark 420 and grade boundaries set on that total. Graded on the 17-point scale 1–1 to 9–9; Foundation Tier 1–1 to 5–5, Higher Tier 4–4 to 9–9 with an allowed grade 4–3. Question types: multiple choice, structured, closed short answer and open response. Extended-response questions require a sustained line of reasoning which is coherent, relevant, substantiated and logically structured, and may be prose, extended calculations or both (AQA’s mark schemes for these questions are levels-based — from the papers, not stated in the specification). Questions on the 21 required practical activities count for at least 15% of the marks. Mathematical skills are targeted at KS3 level at Foundation and Foundation GCSE Mathematics level at Higher. Each paper is 16.7% of the GCSE at a glance (the AO weighting table prints 16.6). Chemistry papers supply a periodic table; physics papers supply the equation sheet and require equations 1–21 to be recalled.",
  "commandWords": [
   {
    "word": "Describe",
    "means": "Recall facts, events or processes in an accurate way — for example describe a practical procedure for a specified purpose, or describe patterns and trends in data."
   },
   {
    "word": "Explain",
    "means": "Give reasons: a statement of what happens and why, using scientific ideas — for example explain why new data led to changes in a model, or explain the need to control variables."
   },
   {
    "word": "Evaluate",
    "means": "Use the information supplied and your own knowledge to consider evidence for and against, then reach a judgement — for example evaluate methods to decide whether they are valid, or evaluate risks against benefits."
   },
   {
    "word": "Calculate",
    "means": "Use numbers given to work out an answer, showing working, substituting values with appropriate units, giving an appropriate number of significant figures."
   },
   {
    "word": "Determine",
    "means": "Use given data or information to obtain an answer — for example determine the slope and intercept of a linear graph."
   },
   {
    "word": "Suggest",
    "means": "Apply knowledge and understanding to a new situation — for example suggest a hypothesis to explain given observations, or suggest methods of reducing risk."
   },
   {
    "word": "Compare",
    "means": "Describe the similarities and/or differences between things, not just write about one."
   },
   {
    "word": "Identify",
    "means": "Name or otherwise characterise — for example identify the independent, dependent and control variables in a given context, or identify hazards."
   },
   {
    "word": "Predict",
    "means": "Give a plausible outcome from a model or from data — for example use data to make predictions."
   },
   {
    "word": "Plot",
    "means": "Mark points accurately on a graph from data, with suitable scales and labelled axes; draw a line of best fit where appropriate."
   }
  ],
  "essayShapes": [
   {
    "marks": 6,
    "minutes": 8,
    "structure": "Extended response (the specification describes the demand; the six-mark tariff and levels marking come from AQA’s papers). A Level 3 (5–6 mark) answer gives a coherent, logically structured chain of reasoning that covers every part of the question with relevant, substantiated scientific points — for a practical, the method in order with variables and how the results are used; for an explanation, cause → effect → consequence in the board’s own terms. Level 2 (3–4) has relevant points with some structure or gaps; Level 1 (1–2) is fragmentary. Calculations may be part of the response."
   }
  ]
 },
 "topics": [
  {
   "id": "3",
   "component": "B1",
   "option": null,
   "name": "Working scientifically (assessed on every paper)",
   "ideas": [
    {
     "code": "WS 1.1",
     "q": "How do scientific methods and theories develop over time?",
     "idea": "Development of scientific methods and theories",
     "content": "Understand how scientific methods and theories develop over time. In the exam: give examples to show how scientific methods and theories have changed over time; explain, with an example, why new data from experiments or observations led to changes in models or theories; decide whether or not given data supports a particular theory."
    },
    {
     "code": "WS 1.2",
     "q": "How are models used to solve problems and make predictions?",
     "idea": "Using models",
     "content": "Use a variety of models such as representational, spatial, descriptive, computational and mathematical to solve problems, make predictions and develop scientific explanations and understanding of familiar and unfamiliar facts. In the exam: recognise, draw and interpret diagrams; translate from data to a representation with a model; use models in explanations, or match features of a model to the data it describes; make predictions or calculate quantities based on the model or show its limitations; give examples of ways a model can be tested by observation or experiment."
    },
    {
     "code": "WS 1.3",
     "q": "What are the power and limitations of science, and what ethical issues arise?",
     "idea": "Power and limitations of science; ethical issues",
     "content": "Appreciate the power and limitations of science and consider any ethical issues which may arise. In the exam: explain why data is needed to answer scientific questions, and why it may be uncertain, incomplete or not available; outline a simple ethical argument about the rights and wrongs of a new technology."
    },
    {
     "code": "WS 1.4",
     "q": "How are applications of science explained and their implications evaluated?",
     "idea": "Applications of science and their implications",
     "content": "Explain everyday and technological applications of science; evaluate associated personal, social, economic and environmental implications; and make decisions based on the evaluation of evidence and arguments. In the exam: describe and explain specified examples of the technological applications of science; describe and evaluate, with the help of data, methods that can be used to tackle problems caused by human impacts on the environment."
    },
    {
     "code": "WS 1.5",
     "q": "How are risks evaluated in practical science and in society?",
     "idea": "Evaluating risks",
     "content": "Evaluate risks both in practical science and the wider societal context, including perception of risk in relation to data and consequences. In the exam: give examples to show that there are hazards associated with science-based technologies which have to be considered alongside the benefits; suggest reasons why the perception of risk is often very different from the measured risk (eg voluntary vs imposed risks, familiar vs unfamiliar risks, visible vs invisible hazards)."
    },
    {
     "code": "WS 1.6",
     "q": "Why do peer review and communication of results matter?",
     "idea": "Peer review and communicating results",
     "content": "Recognise the importance of peer review of results and of communicating results to a range of audiences. In the exam: explain that the process of peer review helps to detect false claims and to establish a consensus about which claims should be regarded as valid; explain that reports of scientific developments in the popular media are not subject to peer review and may be oversimplified, inaccurate or biased."
    },
    {
     "code": "WS 2.1",
     "q": "How are hypotheses developed?",
     "idea": "Developing hypotheses",
     "content": "Use scientific theories and explanations to develop hypotheses. In the exam: suggest a hypothesis to explain given observations or data."
    },
    {
     "code": "WS 2.2",
     "q": "How are experiments planned and variables controlled?",
     "idea": "Planning experiments and devising procedures",
     "content": "Plan experiments or devise procedures to make observations, produce or characterise a substance, test hypotheses, check data or explore phenomena. In the exam: describe a practical procedure for a specified purpose; explain why a given practical procedure is well designed for its specified purpose; explain the need to manipulate and control variables; identify in a given context the independent variable (the one changed or selected by the investigator), the dependent variable (measured for each change in the independent variable) and control variables (and explain why they are kept the same); apply understanding of apparatus and techniques to suggest a procedure for a specified purpose."
    },
    {
     "code": "WS 2.3",
     "q": "How is the right technique, instrument, apparatus or material chosen?",
     "idea": "Selecting techniques, instruments, apparatus and materials",
     "content": "Apply a knowledge of a range of techniques, instruments, apparatus, and materials to select those appropriate to the experiment. In the exam: describe, suggest or select the technique, instrument, apparatus or material that should be used for a particular purpose, and explain why."
    },
    {
     "code": "WS 2.4",
     "q": "How are experiments carried out safely and accurately?",
     "idea": "Carrying out experiments safely and accurately",
     "content": "Carry out experiments appropriately having due regard for the correct manipulation of apparatus, the accuracy of measurements and health and safety considerations. In the exam: identify the main hazards in specified practical contexts; suggest methods of reducing the risk of harm in practical contexts."
    },
    {
     "code": "WS 2.5",
     "q": "When are sampling techniques needed?",
     "idea": "Sampling techniques",
     "content": "Recognise when to apply a knowledge of sampling techniques to ensure any samples collected are representative. In the exam: suggest and describe an appropriate sampling technique in a given context."
    },
    {
     "code": "WS 2.6",
     "q": "How are observations and measurements made and recorded?",
     "idea": "Making and recording observations and measurements",
     "content": "Make and record observations and measurements using a range of apparatus and methods. In the exam: read measurements off a scale in a practical context and record appropriately."
    },
    {
     "code": "WS 2.7",
     "q": "How are methods evaluated and improved?",
     "idea": "Evaluating methods",
     "content": "Evaluate methods and suggest possible improvements and further investigations. In the exam: assess whether sufficient, precise measurements have been taken in an experiment; evaluate methods with a view to determining whether or not they are valid."
    },
    {
     "code": "WS 3.1",
     "q": "How are observations and data presented?",
     "idea": "Presenting observations and data",
     "content": "Presenting observations and other data using appropriate methods. In the exam: construct and interpret frequency tables and diagrams, bar charts and histograms; plot two variables from experimental or other data."
    },
    {
     "code": "WS 3.2",
     "q": "How is data translated between forms?",
     "idea": "Translating data",
     "content": "Translating data from one form to another. In the exam: translate data between graphical and numeric form."
    },
    {
     "code": "WS 3.3",
     "q": "What mathematical and statistical analysis is expected?",
     "idea": "Mathematical and statistical analysis",
     "content": "Carrying out and represent mathematical and statistical analysis: use an appropriate number of significant figures; find the arithmetic mean and range of a set of data; construct and interpret frequency tables and diagrams, bar charts and histograms; make order of magnitude calculations; change the subject of an equation; substitute numerical values into algebraic equations using appropriate units for physical quantities; determine the slope and intercept of a linear graph; draw and use the slope of a tangent to a curve as a measure of rate of change; understand the physical significance of area between a curve and the x-axis and measure it by counting squares as appropriate."
    },
    {
     "code": "WS 3.4",
     "q": "How is uncertainty estimated?",
     "idea": "Distributions of results and uncertainty",
     "content": "Representing distributions of results and make estimations of uncertainty. In the exam: apply the idea that whenever a measurement is made, there is always some uncertainty about the result obtained; use the range of a set of measurements about the mean as a measure of uncertainty."
    },
    {
     "code": "WS 3.5",
     "q": "How are patterns, trends and conclusions drawn from data?",
     "idea": "Interpreting observations and data",
     "content": "Interpreting observations and other data (presented in verbal, diagrammatic, graphical, symbolic or numerical form), including identifying patterns and trends, making inferences and drawing conclusions. In the exam: use data to make predictions; recognise or describe patterns and trends in data presented in a variety of tabular, graphical and other forms; draw conclusions from given observations."
    },
    {
     "code": "WS 3.6",
     "q": "How are explanations related to hypotheses?",
     "idea": "Reasoned explanations and hypotheses",
     "content": "Presenting reasoned explanations including relating data to hypotheses. In the exam: comment on the extent to which data is consistent with a given hypothesis; identify which of two or more hypotheses provides a better explanation of data in a given context."
    },
    {
     "code": "WS 3.7",
     "q": "How is data evaluated for accuracy, precision, repeatability and reproducibility?",
     "idea": "Accuracy, precision, repeatability, reproducibility and errors",
     "content": "Being objective, evaluating data in terms of accuracy, precision, repeatability and reproducibility and identifying potential sources of random and systematic error. Apply these ideas to evaluate data and suggest improvements: an accurate measurement is one that is close to the true value; measurements are precise if they cluster closely; measurements are repeatable when repetition, under the same conditions by the same investigator, gives similar results; measurements are reproducible if similar results are obtained by different investigators with different equipment; random error makes results vary in unpredictable ways and can be reduced by making more measurements and reporting a mean value; systematic error is due to measurement results differing from the true value by a consistent amount each time; anomalous values should be examined to try to identify the cause and, if a product of a poor measurement, ignored."
    },
    {
     "code": "WS 3.8",
     "q": "How should investigations and conclusions be communicated?",
     "idea": "Communicating the scientific rationale",
     "content": "Communicating the scientific rationale for investigations, methods used, findings and reasoned conclusions through paper-based and electronic reports and presentations using verbal, diagrammatic, graphical, numerical and symbolic forms. In the exam: present coherent and logically structured responses, using the ideas in 2 Experimental skills and strategies and 3 Analysis and evaluation, applied to the required practicals and other practical investigations given appropriate information."
    },
    {
     "code": "WS 4.1",
     "q": "What vocabulary and definitions must be used?",
     "idea": "Scientific vocabulary, terminology and definitions",
     "content": "Use scientific vocabulary, terminology and definitions. The knowledge and skills in section 4 apply across the specification, including the required practicals."
    },
    {
     "code": "WS 4.2",
     "q": "How are scientific quantities determined?",
     "idea": "Scientific quantities",
     "content": "Recognise the importance of scientific quantities and understand how they are determined."
    },
    {
     "code": "WS 4.3",
     "q": "Which units and nomenclature are used?",
     "idea": "SI units and IUPAC nomenclature",
     "content": "Use SI units (eg kg, g, mg; km, m, mm; kJ, J) and IUPAC chemical nomenclature unless inappropriate."
    },
    {
     "code": "WS 4.4",
     "q": "How are prefixes and powers of ten used?",
     "idea": "Prefixes and powers of ten",
     "content": "Use prefixes and powers of ten for orders of magnitude (eg tera, giga, mega, kilo, centi, milli, micro and nano)."
    },
    {
     "code": "WS 4.5",
     "q": "How are units interconverted?",
     "idea": "Interconverting units",
     "content": "Interconvert units, for example between the SI units and prefixed forms used across the specification."
    },
    {
     "code": "WS 4.6",
     "q": "How many significant figures?",
     "idea": "Significant figures",
     "content": "Use an appropriate number of significant figures in calculation."
    }
   ],
   "caseStudies": [],
   "skills": []
  },
  {
   "id": "9",
   "component": "P1",
   "option": null,
   "name": "Mathematical requirements (assessed on every paper)",
   "ideas": [
    {
     "code": "MS 1a",
     "q": "Decimal form",
     "idea": "Recognise and use expressions in decimal form",
     "content": "Recognise and use expressions in decimal form. Questions target maths skills at a level of demand appropriate to each subject: Foundation Tier not lower than Key Stage 3, Higher Tier not lower than Foundation Tier GCSE Mathematics."
    },
    {
     "code": "MS 1b",
     "q": "Standard form",
     "idea": "Recognise and use expressions in standard form",
     "content": "Recognise and use expressions in standard form."
    },
    {
     "code": "MS 1c",
     "q": "Ratios, fractions and percentages",
     "idea": "Use ratios, fractions and percentages",
     "content": "Use ratios, fractions and percentages — a Handling data skill that questions in all three sciences may target."
    },
    {
     "code": "MS 1d",
     "q": "Estimates",
     "idea": "Make estimates of the results of simple calculations",
     "content": "Make estimates of the results of simple calculations."
    },
    {
     "code": "MS 2a",
     "q": "Significant figures",
     "idea": "Use an appropriate number of significant figures",
     "content": "Use an appropriate number of significant figures."
    },
    {
     "code": "MS 2b",
     "q": "Arithmetic means",
     "idea": "Find arithmetic means",
     "content": "Find arithmetic means — a Handling data skill that questions in all three sciences may target."
    },
    {
     "code": "MS 2c",
     "q": "Frequency tables, bar charts and histograms",
     "idea": "Construct and interpret frequency tables and diagrams, bar charts and histograms",
     "content": "Construct and interpret frequency tables and diagrams, bar charts and histograms."
    },
    {
     "code": "MS 2d",
     "q": "Sampling",
     "idea": "Principles of sampling (biology only)",
     "content": "Understand the principles of sampling as applied to scientific data (biology questions only)."
    },
    {
     "code": "MS 2e",
     "q": "Probability",
     "idea": "Simple probability (biology only)",
     "content": "Understand simple probability (biology questions only)."
    },
    {
     "code": "MS 2f",
     "q": "Mean, mode and median",
     "idea": "Mean, mode and median",
     "content": "Understand the terms mean, mode and median."
    },
    {
     "code": "MS 2g",
     "q": "Scatter diagrams and correlation",
     "idea": "Scatter diagrams (biology and physics only)",
     "content": "Use a scatter diagram to identify a correlation between two variables (biology and physics questions only)."
    },
    {
     "code": "MS 2h",
     "q": "Order of magnitude",
     "idea": "Order of magnitude calculations",
     "content": "Make order of magnitude calculations — a Handling data skill that questions in all three sciences may target."
    },
    {
     "code": "MS 3a",
     "q": "Symbols",
     "idea": "Use the symbols =, <, <<, >>, >, ∝, ~",
     "content": "Understand and use the symbols: =, <, <<, >>, >, ∝, ~."
    },
    {
     "code": "MS 3b",
     "q": "Rearranging equations",
     "idea": "Change the subject of an equation",
     "content": "Change the subject of an equation — a Handling data skill that questions in all three sciences may target."
    },
    {
     "code": "MS 3c",
     "q": "Substitution with units",
     "idea": "Substitute values into equations (chemistry and physics only)",
     "content": "Substitute numerical values into algebraic equations using appropriate units for physical quantities (chemistry and physics questions only)."
    },
    {
     "code": "MS 3d",
     "q": "Simple algebraic equations",
     "idea": "Solve simple algebraic equations (biology and physics only)",
     "content": "Solve simple algebraic equations (biology and physics questions only)."
    },
    {
     "code": "MS 4a",
     "q": "Graph to number and back",
     "idea": "Translate between graphical and numeric form",
     "content": "Translate information between graphical and numeric form."
    },
    {
     "code": "MS 4b",
     "q": "Linear relationships",
     "idea": "y = mx + c",
     "content": "Understand that y = mx + c represents a linear relationship."
    },
    {
     "code": "MS 4c",
     "q": "Plotting",
     "idea": "Plot two variables",
     "content": "Plot two variables from experimental or other data."
    },
    {
     "code": "MS 4d",
     "q": "Slope and intercept",
     "idea": "Determine the slope and intercept of a linear graph",
     "content": "Determine the slope and intercept of a linear graph."
    },
    {
     "code": "MS 4e",
     "q": "Tangents",
     "idea": "Slope of a tangent as a rate of change (chemistry and physics only)",
     "content": "Draw and use the slope of a tangent to a curve as a measure of rate of change (chemistry and physics questions only)."
    },
    {
     "code": "MS 4f",
     "q": "Area under a curve",
     "idea": "Area between a curve and the x-axis (physics only)",
     "content": "Understand the physical significance of area between a curve and the x-axis and measure it by counting squares as appropriate (physics questions only)."
    },
    {
     "code": "MS 5a",
     "q": "Angles",
     "idea": "Angular measures in degrees (physics only)",
     "content": "Use angular measures in degrees (physics questions only)."
    },
    {
     "code": "MS 5b",
     "q": "2D and 3D forms",
     "idea": "Visualise 2D and 3D forms (chemistry and physics only)",
     "content": "Visualise and represent 2D and 3D forms including two dimensional representations of 3D objects (chemistry and physics questions only)."
    },
    {
     "code": "MS 5c",
     "q": "Areas and volumes",
     "idea": "Areas of triangles and rectangles, surface areas and volumes of cubes",
     "content": "Calculate areas of triangles and rectangles, surface areas and volumes of cubes."
    }
   ],
   "caseStudies": [],
   "skills": []
  },
  {
   "id": "4.1",
   "component": "B1",
   "option": null,
   "name": "Cell biology",
   "ideas": [
    {
     "code": "4.1.1.1",
     "q": "How do the structures of prokaryotic and eukaryotic cells differ?",
     "idea": "Eukaryotes and prokaryotes",
     "content": "Plant and animal cells (eukaryotic) have a cell membrane, cytoplasm and genetic material enclosed in a nucleus. Bacterial cells (prokaryotic) are much smaller: they have cytoplasm and a cell membrane surrounded by a cell wall, and their genetic material is not enclosed in a nucleus but forms a single DNA loop, with one or more small rings of DNA called plasmids. Students should understand the scale and size of cells and make order of magnitude calculations, including standard form, using the prefixes centi, milli, micro and nano."
    },
    {
     "code": "4.1.1.2",
     "q": "What sub-cellular structures do animal and plant cells contain and how do they relate to function?",
     "idea": "Animal and plant cells (Required practical activity 1)",
     "content": "Explain how the main sub-cellular structures - nucleus, cell membrane, mitochondria, chloroplasts (plant cells) and plasmids (bacterial cells) - relate to their functions. Most animal cells have a nucleus, cytoplasm, cell membrane, mitochondria and ribosomes; plant cells additionally have chloroplasts and a permanent vacuole filled with cell sap, and plant and algal cells have a cellulose cell wall. Use estimations to judge the relative size or area of sub-cellular structures. Required practical activity 1: use a light microscope to observe, draw and label a selection of plant and animal cells, including a magnification scale. AT skills covered: biology AT 1 and 7; this practical also develops WS and MS skills."
    },
    {
     "code": "4.1.1.3",
     "q": "How does the structure of a specialised cell relate to its function?",
     "idea": "Cell specialisation",
     "content": "When provided with appropriate information, explain how the structure of different types of cell relates to their function in a tissue, an organ or organ system, or the whole organism. Cells may be specialised to carry out a particular function, e.g. sperm cells, nerve cells and muscle cells in animals, and root hair cells, xylem and phloem cells in plants."
    },
    {
     "code": "4.1.1.4",
     "q": "Why is cell differentiation important?",
     "idea": "Cell differentiation",
     "content": "Explain the importance of cell differentiation. As an organism develops, cells differentiate to form different types of cells. Most types of animal cell differentiate at an early stage, whereas many types of plant cell retain the ability to differentiate throughout life. In mature animals cell division is mainly restricted to repair and replacement. As a cell differentiates it acquires different sub-cellular structures to enable it to carry out its function, becoming a specialised cell."
    },
    {
     "code": "4.1.1.5",
     "q": "How has microscopy developed and what has electron microscopy revealed about sub-cellular structures?",
     "idea": "Microscopy",
     "content": "Understand how microscopy techniques have developed over time, and explain how electron microscopy has increased understanding of sub-cellular structures, limited to differences in magnification and resolution: an electron microscope has much higher magnification and resolving power than a light microscope, allowing biologists to see and understand many more sub-cellular structures. Carry out calculations involving magnification, real size and image size using the formula magnification = size of image / size of real object, expressing answers in standard form where appropriate."
    },
    {
     "code": "4.1.2.1",
     "q": "What is the structure of chromosomes in the nucleus?",
     "idea": "Chromosomes",
     "content": "The nucleus of a cell contains chromosomes made of DNA molecules. Each chromosome carries a large number of genes. In body cells the chromosomes are normally found in pairs."
    },
    {
     "code": "4.1.2.2",
     "q": "What happens during the cell cycle and mitosis, and why is mitosis important?",
     "idea": "Mitosis and the cell cycle",
     "content": "Describe the stages of the cell cycle, including mitosis. During the cell cycle genetic material is doubled and then divided into two identical cells. Before dividing, a cell grows and increases the number of sub-cellular structures such as ribosomes and mitochondria, and DNA replicates to form two copies of each chromosome. In mitosis one set of chromosomes is pulled to each end of the cell and the nucleus divides; then the cytoplasm and cell membranes divide to form two identical cells. Students need to understand the three overall stages of the cell cycle but not the different phases of mitosis. Cell division by mitosis is important in growth and development of multicellular organisms; recognise and describe situations in given contexts where mitosis is occurring."
    },
    {
     "code": "4.1.2.3",
     "q": "What are stem cells and how are they used in medicine and agriculture?",
     "idea": "Stem cells",
     "content": "A stem cell is an undifferentiated cell capable of giving rise to many more cells of the same type, from which other cells can arise by differentiation. Describe the function of stem cells in embryos, in adult animals and in meristems in plants. Embryonic stem cells can be cloned and made to differentiate into most human cell types; adult bone marrow stem cells can form many cell types including blood cells; meristem tissue can differentiate into any plant cell type throughout the plant's life. Knowledge of stem cell techniques is not required. Stem cell treatment may help conditions such as diabetes and paralysis; in therapeutic cloning an embryo with the patient's genes is produced so its stem cells are not rejected by the patient's body. Risks include transfer of viral infection, and some people have ethical or religious objections. Meristem stem cells can be used to clone plants quickly and economically, e.g. to protect rare species from extinction or to produce disease-resistant crop plants for farmers."
    },
    {
     "code": "4.1.3.1",
     "q": "What is diffusion and what factors affect its rate?",
     "idea": "Diffusion",
     "content": "Substances move into and out of cells across cell membranes by diffusion: the net movement of particles of a substance in solution, or of a gas, from an area of higher to lower concentration. Examples: oxygen and carbon dioxide in gas exchange, and urea from cells into blood plasma for excretion. Explain how concentration gradient, temperature and membrane surface area affect the rate of diffusion. A single-celled organism has a relatively large surface area to volume ratio, allowing sufficient transport for its needs. Calculate and compare surface area to volume ratios; explain the need for exchange surfaces and transport systems in multicellular organisms, and how the small intestine and lungs in mammals, gills in fish, and roots and leaves in plants are adapted for exchanging materials. The effectiveness of an exchange surface is increased by a large surface area, a thin membrane giving a short diffusion path, and, in animals, an efficient blood supply and, for gas exchange, ventilation."
    },
    {
     "code": "4.1.3.2",
     "q": "What is osmosis and how is water movement across membranes investigated?",
     "idea": "Osmosis (Required practical activity 2)",
     "content": "Water moves across cell membranes by osmosis: the diffusion of water from a dilute to a concentrated solution through a partially permeable membrane. Use simple compound measures of rate of water uptake, use percentages, and calculate percentage gain and loss of mass of plant tissue; plot, draw and interpret appropriate graphs. Required practical activity 2: investigate the effect of a range of concentrations of salt or sugar solutions on the mass of plant tissue. AT skills covered: biology AT 1, 3 and 5; this practical also develops WS and MS skills."
    },
    {
     "code": "4.1.3.3",
     "q": "What is active transport and how does it differ from diffusion and osmosis?",
     "idea": "Active transport",
     "content": "Active transport moves substances from a more dilute to a more concentrated solution (against a concentration gradient), requiring energy from respiration. It allows mineral ions to be absorbed into plant root hairs from very dilute soil solutions, and sugar molecules to be absorbed from lower concentrations in the gut into blood with a higher sugar concentration, for use in cell respiration. Describe how substances are transported into and out of cells by diffusion, osmosis and active transport, and explain the differences between the three processes."
    }
   ],
   "caseStudies": [
    "Required practical activity 1: use a light microscope to observe, draw and label a selection of plant and animal cells.",
    "Required practical activity 2: investigate the effect of a range of concentrations of salt or sugar solutions on the mass of plant tissue."
   ],
   "skills": [
    "MS 1b",
    "MS 2a",
    "MS 2h",
    "WS 4.4",
    "WS 1.2",
    "MS 1d",
    "MS 3a",
    "AT 7",
    "AT 1",
    "WS 1.1",
    "MS 1a",
    "MS 3b",
    "WS 1.3",
    "WS 1.5",
    "MS 1c",
    "MS 5c",
    "MS 4a",
    "MS 4b",
    "MS 4c",
    "MS 4d",
    "AT 3",
    "AT 5"
   ]
  },
  {
   "id": "4.2",
   "component": "B1",
   "option": null,
   "name": "Organisation",
   "ideas": [
    {
     "code": "4.2.1",
     "q": "How are cells organised into tissues, organs and organ systems?",
     "idea": "Principles of organisation",
     "content": "Cells are the basic building blocks of all living organisms. A tissue is a group of cells with a similar structure and function. Organs are aggregations of tissues performing specific functions. Organs are organised into organ systems, which work together to form organisms. Students should develop an understanding of size and scale in relation to cells, tissues, organs and systems."
    },
    {
     "code": "4.2.2.1",
     "q": "How do the organs of the digestive system and digestive enzymes work together to digest food?",
     "idea": "The human digestive system (Required practical activity 3 and 4)",
     "content": "Digestive enzymes convert food into small soluble molecules that can be absorbed into the bloodstream. The digestive system is an organ system in which several organs work together to digest and absorb food, assuming knowledge from Key Stage 3. Relate knowledge of enzymes to Metabolism. Describe the nature of enzyme molecules and relate their activity to temperature and pH changes; carry out rate calculations for chemical reactions. Enzymes catalyse specific reactions due to the shape of their active site; use the 'lock and key theory' as a simplified model to explain enzyme action, and other models. Recall the sites of production and action of amylase, proteases and lipases, using simple word equations only (no chemical symbol equations required): carbohydrases (e.g. amylase) break down carbohydrates/starch to simple sugars; proteases break down proteins to amino acids; lipases break down lipids to glycerol and fatty acids. Digestion products are used to build new carbohydrates, lipids and proteins; some glucose is used in respiration. Bile, made in the liver and stored in the gall bladder, is alkaline to neutralise stomach hydrochloric acid and emulsifies fat to form small droplets, increasing surface area; the alkaline conditions and large surface area increase the rate of fat breakdown by lipase. Required practical activity 3: use qualitative reagents to test for a range of carbohydrates, lipids and proteins, including Benedict's test for sugars, iodine test for starch, and Biuret reagent for protein (AT skills covered: biology AT 2). Required practical activity 4: investigate the effect of pH on the rate of reaction of amylase enzyme, using a continuous sampling technique to determine the time to completely digest a starch solution at a range of pH values, testing for starch with iodine reagent every 30 seconds, with temperature controlled by a water bath or electric heater (AT skills covered: biology AT 1, 2 and 5). Both practicals also develop WS and MS skills."
    },
    {
     "code": "4.2.2.2",
     "q": "How are the heart and blood vessels structured and adapted to their functions?",
     "idea": "The heart and blood vessels",
     "content": "Know the structure and functioning of the human heart and lungs, including how lungs are adapted for gaseous exchange. The heart is an organ that pumps blood around the body in a double circulatory system: the right ventricle pumps blood to the lungs for gas exchange, the left ventricle pumps blood around the rest of the body. Knowledge of blood vessels is limited to the aorta, vena cava, pulmonary artery, pulmonary vein and coronary arteries (heart valve names not required). Knowledge of the lungs is restricted to the trachea, bronchi, alveoli and the capillary network surrounding the alveoli. Resting heart rate is controlled by a group of pacemaker cells in the right atrium; artificial pacemakers are electrical devices used to correct heart rate irregularities. The body contains three types of blood vessel - arteries, veins and capillaries - explain how their structure relates to function. Use simple compound measures such as rate and carry out rate calculations for blood flow."
    },
    {
     "code": "4.2.2.3",
     "q": "What are the components of blood and how are blood cells adapted to their functions?",
     "idea": "Blood",
     "content": "Blood is a tissue consisting of plasma, in which red blood cells, white blood cells and platelets are suspended. Know the functions of each of these blood components. Recognise different types of blood cells in a photograph or diagram, and explain how they are adapted to their functions."
    },
    {
     "code": "4.2.2.4",
     "q": "How is coronary heart disease treated, and what are the risks and benefits of the treatments?",
     "idea": "Coronary heart disease: a non-communicable disease",
     "content": "Evaluate the advantages and disadvantages of treating cardiovascular diseases by drugs, mechanical devices or transplant. In coronary heart disease, layers of fatty material build up inside the coronary arteries, narrowing them and reducing blood flow, causing a lack of oxygen for the heart muscle; stents keep the coronary arteries open, and statins reduce blood cholesterol levels to slow the rate of fatty material deposit. In some people heart valves may become faulty (not opening fully, or developing a leak); faulty valves can be replaced using biological or mechanical valves. In heart failure a donor heart, or heart and lungs, can be transplanted; artificial hearts are occasionally used to keep patients alive while awaiting a transplant, or to allow the heart to rest as an aid to recovery."
    },
    {
     "code": "4.2.2.5",
     "q": "How are health and disease related, and how do different types of disease interact?",
     "idea": "Health issues",
     "content": "Describe the relationship between health and disease and the interactions between different types of disease. Health is the state of physical and mental well-being. Communicable and non-communicable diseases are major causes of ill health; diet, stress and life situations may also have a profound effect on physical and mental health. Different types of disease may interact: defects in the immune system mean an individual is more likely to suffer infectious diseases; viruses living in cells can trigger cancers; immune reactions initially caused by a pathogen can trigger allergies such as skin rashes and asthma; severe physical ill health can lead to depression and other mental illness. Translate disease incidence information between graphical and numerical forms, construct and interpret frequency tables and diagrams, bar charts and histograms, and use a scatter diagram to identify a correlation between two variables. Understand the principles of sampling as applied to scientific data, including epidemiological data."
    },
    {
     "code": "4.2.2.6",
     "q": "How do lifestyle factors and risk factors affect the incidence of non-communicable diseases?",
     "idea": "The effect of lifestyle on some non-communicable diseases",
     "content": "Discuss the human and financial cost of non-communicable diseases to an individual, a local community, a nation or globally, and explain the effect of lifestyle factors including diet, alcohol and smoking on their incidence at local, national and global levels. Risk factors (aspects of a person's lifestyle, or substances in the body or environment) are linked to an increased rate of disease; a causal mechanism has been proven for some risk factors but not others, including: diet, smoking and exercise effects on cardiovascular disease; obesity as a risk factor for Type 2 diabetes; alcohol's effect on the liver and brain function; smoking's effect on lung disease and lung cancer; effects of smoking and alcohol on unborn babies; carcinogens, including ionising radiation, as risk factors in cancer. Many diseases are caused by the interaction of a number of factors. Understand the principles of sampling as applied to scientific data in terms of risk factors; translate information between graphical and numerical forms and extract and interpret information from charts, graphs and tables in terms of risk factors; use a scatter diagram to identify a correlation between two variables in terms of risk factors."
    },
    {
     "code": "4.2.2.7",
     "q": "What causes cancer and how do benign and malignant tumours differ?",
     "idea": "Cancer",
     "content": "Describe cancer as the result of changes in cells that lead to uncontrolled growth and division. Benign tumours are growths of abnormal cells which are contained in one area, usually within a membrane, and do not invade other parts of the body. Malignant tumour cells are cancers: they invade neighbouring tissues and spread to different parts of the body in the blood, where they form secondary tumours. Scientists have identified lifestyle risk factors for various types of cancer; there are also genetic risk factors for some cancers."
    },
    {
     "code": "4.2.3.1",
     "q": "What are the plant tissues and how are their structures related to their functions?",
     "idea": "Plant tissues",
     "content": "Explain how the structures of plant tissues are related to their functions. Plant tissues include epidermal tissues, palisade mesophyll, spongy mesophyll, xylem and phloem, and meristem tissue found at the growing tips of shoots and roots. The leaf is a plant organ; knowledge is limited to the epidermis, palisade and spongy mesophyll, xylem and phloem, and guard cells surrounding stomata."
    },
    {
     "code": "4.2.3.2",
     "q": "How are root hair cells, xylem and phloem adapted for transport, and what affects the rate of transpiration?",
     "idea": "Plant organ system",
     "content": "Explain how the structure of root hair cells, xylem and phloem are adapted to their functions, and explain the effect of changing temperature, humidity, air movement and light intensity on the rate of transpiration. Understand and use simple compound measures such as the rate of transpiration; translate information between graphical and numerical form, plot and draw appropriate graphs selecting appropriate scales, and extract and interpret information from graphs, charts and tables. The roots, stem and leaves form a plant organ system for transport of substances around the plant. Describe the process of transpiration and translocation, including the structure and function of the stomata. Root hair cells are adapted for the efficient uptake of water by osmosis, and mineral ions by active transport. Xylem tissue transports water and mineral ions from the roots to the stems and leaves; it is composed of hollow tubes strengthened by lignin, adapted for transport of water in the transpiration stream. Stomata and guard cells control gas exchange and water loss. Phloem tissue transports dissolved sugars from the leaves to the rest of the plant for immediate use or storage (translocation); phloem is composed of tubes of elongated cells, and cell sap can move from one phloem cell to the next through pores in the end walls. Detailed structure of phloem tissue or the mechanism of transport is not required."
    }
   ],
   "caseStudies": [
    "Required practical activity 3: use qualitative reagents to test for a range of carbohydrates, lipids and proteins.",
    "Required practical activity 4: investigate the effect of pH on the rate of reaction of amylase enzyme."
   ],
   "skills": [
    "MS 1c",
    "MS 1a",
    "WS 1.2",
    "AT 2",
    "AT 1",
    "AT 5",
    "AT 7",
    "WS 1.5",
    "WS 3.5",
    "WS 1.4",
    "WS 1.3",
    "MS 2c",
    "MS 2g",
    "MS 4a",
    "MS 2d",
    "AT 3",
    "AT 4",
    "AT 6",
    "MS 2a",
    "MS 5c",
    "MS 4c"
   ]
  },
  {
   "id": "4.3",
   "component": "B1",
   "option": null,
   "name": "Infection and response",
   "ideas": [
    {
     "code": "4.3.1.1",
     "q": "What are pathogens and how are infectious diseases spread and their spread reduced?",
     "idea": "Communicable (infectious) diseases",
     "content": "Explain how diseases caused by viruses, bacteria, protists and fungi are spread in animals and plants, and explain how the spread of diseases can be reduced or prevented. Pathogens are microorganisms that cause infectious disease; they may be viruses, bacteria, protists or fungi, may infect plants or animals, and can be spread by direct contact, by water or by air. Bacteria and viruses may reproduce rapidly inside the body; bacteria may produce poisons (toxins) that damage tissues and make us feel ill; viruses live and reproduce inside cells, causing cell damage."
    },
    {
     "code": "4.3.1.2",
     "q": "What are the causes, symptoms and spread of measles, HIV and tobacco mosaic virus?",
     "idea": "Viral diseases",
     "content": "Measles is a viral disease showing symptoms of fever and a red skin rash; it can be fatal if complications arise, which is why most young children are vaccinated against it; the measles virus is spread by inhalation of droplets from sneezes and coughs. HIV initially causes a flu-like illness; unless successfully controlled with antiretroviral drugs the virus attacks the body's immune cells, and late-stage HIV infection, or AIDS, occurs when the immune system is so badly damaged it can no longer deal with other infections or cancers; HIV is spread by sexual contact or exchange of body fluids such as blood, which occurs when drug users share needles. Tobacco mosaic virus (TMV) is a widespread plant pathogen affecting many species including tomatoes, giving a distinctive 'mosaic' pattern of leaf discolouration that affects plant growth due to lack of photosynthesis."
    },
    {
     "code": "4.3.1.3",
     "q": "What are the causes, symptoms and spread of salmonella food poisoning and gonorrhoea?",
     "idea": "Bacterial diseases",
     "content": "Salmonella food poisoning is spread by bacteria ingested in food, or on food prepared in unhygienic conditions; in the UK poultry are vaccinated against salmonella to control its spread; fever, abdominal cramps, vomiting and diarrhoea are caused by the bacteria and the toxins they secrete. Gonorrhoea is a sexually transmitted disease with symptoms of a thick yellow or green discharge from the vagina or penis and pain on urinating; it is caused by a bacterium and was easily treated with the antibiotic penicillin until many resistant strains appeared; gonorrhoea is spread by sexual contact and its spread can be controlled by treatment with antibiotics or the use of a barrier method of contraception such as a condom."
    },
    {
     "code": "4.3.1.4",
     "q": "What causes rose black spot and how does it spread and get treated?",
     "idea": "Fungal diseases",
     "content": "Rose black spot is a fungal disease where purple or black spots develop on leaves, which often turn yellow and drop early; it affects the growth of the plant as photosynthesis is reduced. It is spread in the environment by water or wind. Rose black spot can be treated by using fungicides and/or removing and destroying the affected leaves."
    },
    {
     "code": "4.3.1.5",
     "q": "How is malaria caused and controlled?",
     "idea": "Protist diseases",
     "content": "The pathogens that cause malaria are protists. The malarial protist has a life cycle that includes the mosquito. Malaria causes recurrent episodes of fever and can be fatal. The spread of malaria is controlled by preventing the vectors, mosquitos, from breeding, and by using mosquito nets to avoid being bitten."
    },
    {
     "code": "4.3.1.6",
     "q": "How does the body defend itself against pathogens?",
     "idea": "Human defence systems",
     "content": "Describe the non-specific defence systems of the human body against pathogens, including the skin, nose, trachea and bronchi, and stomach. Explain the role of the immune system in the defence against disease: if a pathogen enters the body the immune system tries to destroy the pathogen. White blood cells help to defend against pathogens by phagocytosis, antibody production and antitoxin production."
    },
    {
     "code": "4.3.1.7",
     "q": "How does vaccination prevent illness in an individual and reduce the spread of disease in a population?",
     "idea": "Vaccination",
     "content": "Explain how vaccination will prevent illness in an individual, and how the spread of pathogens can be reduced by immunising a large proportion of the population. Vaccination involves introducing small quantities of dead or inactive forms of a pathogen into the body to stimulate the white blood cells to produce antibodies. If the same pathogen re-enters the body the white blood cells respond quickly to produce the correct antibodies, preventing infection. Details of vaccination schedules and side effects associated with specific vaccines are not required."
    },
    {
     "code": "4.3.1.8",
     "q": "How do antibiotics and painkillers treat disease, and what are the limits of antibiotics?",
     "idea": "Antibiotics and painkillers",
     "content": "Explain the use of antibiotics and other medicines in treating disease. Antibiotics, such as penicillin, are medicines that help cure bacterial disease by killing infective bacteria inside the body; it is important that specific bacteria are treated with specific antibiotics. The use of antibiotics has greatly reduced deaths from infectious bacterial diseases; however, the emergence of antibiotic-resistant strains is of great concern. Antibiotics cannot kill viral pathogens. Painkillers and other medicines are used to treat the symptoms of disease but do not kill pathogens; it is difficult to develop drugs that kill viruses without also damaging the body's tissues."
    },
    {
     "code": "4.3.1.9",
     "q": "How are new medicinal drugs discovered, developed and tested?",
     "idea": "Discovery and development of drugs",
     "content": "Describe the process of discovery and development of potential new medicines, including preclinical and clinical testing. Traditionally drugs were extracted from plants and microorganisms: the heart drug digitalis originates from foxgloves, the painkiller aspirin from willow, and penicillin was discovered by Alexander Fleming from the Penicillium mould. Most new drugs are now synthesised by chemists in the pharmaceutical industry, though the starting point may still be a chemical extracted from a plant. New drugs are extensively tested for toxicity, efficacy and dose. Preclinical testing is done in a laboratory using cells, tissues and live animals. Clinical trials use healthy volunteers and patients: very low doses are given at the start; if the drug is found safe, further trials find the optimum dose; in double blind trials some patients are given a placebo. Results of testing and trials are published only after scrutiny by peer review."
    }
   ],
   "caseStudies": [],
   "skills": [
    "WS 1.4",
    "WS 1.6"
   ]
  },
  {
   "id": "4.4",
   "component": "B1",
   "option": null,
   "name": "Bioenergetics",
   "ideas": [
    {
     "code": "4.4.1.1",
     "q": "What is the equation for photosynthesis and what type of reaction is it?",
     "idea": "Photosynthetic reaction",
     "content": "Photosynthesis is represented by the equation: carbon dioxide + water --(light)--> glucose + oxygen. Students should recognise the chemical symbols CO2, H2O, O2 and C6H12O6. Describe photosynthesis as an endothermic reaction in which energy is transferred from the environment to the chloroplasts by light."
    },
    {
     "code": "4.4.1.2",
     "q": "What factors limit the rate of photosynthesis and how is the rate measured?",
     "idea": "Rate of photosynthesis (Required practical activity 5)",
     "content": "Explain the effects of temperature, light intensity, carbon dioxide concentration, and the amount of chlorophyll on the rate of photosynthesis. Measure and calculate rates of photosynthesis; extract and interpret graphs of photosynthesis rate involving one limiting factor; plot and draw appropriate graphs selecting appropriate scale for axes; translate information between graphical and numeric form. Higher tier only: these factors interact and any one of them may be the factor that limits photosynthesis; explain graphs of photosynthesis rate involving two or three factors and decide which is the limiting factor; understand and use inverse proportion - the inverse square law and light intensity - in the context of photosynthesis; limiting factors are important in the economics of enhancing the conditions in greenhouses to gain the maximum rate of photosynthesis while still maintaining profit, using data to relate limiting factors to the cost effectiveness of adding heat, light or carbon dioxide to greenhouses. Required practical activity 5: investigate the effect of light intensity on the rate of photosynthesis using an aquatic organism such as pondweed. AT skills covered: biology AT 1, 2, 3, 4 and 5; this practical also develops WS and MS skills."
    },
    {
     "code": "4.4.1.3",
     "q": "What is the glucose produced in photosynthesis used for?",
     "idea": "Uses of glucose from photosynthesis",
     "content": "The glucose produced in photosynthesis may be used for respiration, converted into insoluble starch for storage, used to produce fat or oil for storage, used to produce cellulose which strengthens the cell wall, or used to produce amino acids for protein synthesis. To produce proteins, plants also use nitrate ions that are absorbed from the soil."
    },
    {
     "code": "4.4.2.1",
     "q": "How do aerobic and anaerobic respiration compare, and what are their equations?",
     "idea": "Aerobic and anaerobic respiration",
     "content": "Describe cellular respiration as an exothermic reaction which is continuously occurring in living cells; the energy transferred supplies all the energy needed for living processes. Respiration in cells can take place aerobically (using oxygen) or anaerobically (without oxygen). Compare the processes of aerobic and anaerobic respiration with regard to the need for oxygen, the differing products and the relative amounts of energy transferred. Organisms need energy for chemical reactions to build larger molecules, movement, and keeping warm. Aerobic respiration is represented by the equation: glucose + oxygen -> carbon dioxide + water; recognise the chemical symbols C6H12O6, O2, CO2 and H2O. Anaerobic respiration in muscles is represented by the equation: glucose -> lactic acid; as the oxidation of glucose is incomplete in anaerobic respiration, much less energy is transferred than in aerobic respiration. Anaerobic respiration in plant and yeast cells is represented by the equation: glucose -> ethanol + carbon dioxide; anaerobic respiration in yeast cells is called fermentation and has economic importance in the manufacture of bread and alcoholic drinks."
    },
    {
     "code": "4.4.2.2",
     "q": "How does the body respond to exercise, and what causes oxygen debt?",
     "idea": "Response to exercise",
     "content": "During exercise the human body reacts to the increased demand for energy: heart rate, breathing rate and breath volume increase to supply the muscles with more oxygenated blood. If insufficient oxygen is supplied, anaerobic respiration takes place in muscles; the incomplete oxidation of glucose causes a build-up of lactic acid and creates an oxygen debt; during long periods of vigorous activity muscles become fatigued and stop contracting efficiently. Higher tier only: blood flowing through the muscles transports the lactic acid to the liver where it is converted back into glucose; oxygen debt is the amount of extra oxygen the body needs after exercise to react with the accumulated lactic acid and remove it from the cells."
    },
    {
     "code": "4.4.2.3",
     "q": "What is metabolism and what processes does it include?",
     "idea": "Metabolism",
     "content": "Explain the importance of sugars, amino acids, fatty acids and glycerol in the synthesis and breakdown of carbohydrates, proteins and lipids. Metabolism is the sum of all the reactions in a cell or the body; the energy transferred by respiration in cells is used by the organism for the continual enzyme-controlled processes of metabolism that synthesise new molecules. Metabolism includes: conversion of glucose to starch, glycogen and cellulose; the formation of lipid molecules from a molecule of glycerol and three molecules of fatty acids; the use of glucose and nitrate ions to form amino acids which are used to synthesise proteins; respiration; and breakdown of excess proteins to form urea for excretion."
    }
   ],
   "caseStudies": [
    "Required practical activity 5: investigate the effect of light intensity on the rate of photosynthesis using an aquatic organism such as pondweed."
   ],
   "skills": [
    "MS 3d",
    "MS 1a",
    "MS 1c",
    "MS 2c",
    "MS 4a",
    "MS 4c",
    "MS 3a",
    "WS 1.4",
    "AT 1",
    "AT 2",
    "AT 3",
    "AT 4",
    "AT 5"
   ]
  },
  {
   "id": "4.5",
   "component": "B2",
   "option": null,
   "name": "Homeostasis and response",
   "ideas": [
    {
     "code": "4.5.1",
     "q": "What is homeostasis and what body conditions does it control?",
     "idea": "Homeostasis",
     "content": "Homeostasis is the regulation of the internal conditions of a cell or organism to maintain optimum conditions for function in response to internal and external changes; it maintains optimal conditions for enzyme action and all cell functions. In the human body this includes control of blood glucose concentration, body temperature and water levels. These automatic control systems may involve nervous responses or chemical responses. All control systems include: cells called receptors, which detect stimuli (changes in the environment); coordination centres (such as the brain, spinal cord and pancreas) that receive and process information from receptors; and effectors, muscles or glands, which bring about responses which restore optimum levels."
    },
    {
     "code": "4.5.2",
     "q": "How is the nervous system structured to enable fast responses, including reflex actions, and how is reaction time investigated? (Required practical activity 6)",
     "idea": "The human nervous system (Required practical activity 6)",
     "content": "The structure of the nervous system is adapted to its functions: it enables humans to react to their surroundings and coordinate behaviour. Information from receptors passes along neurones as electrical impulses to the central nervous system (CNS, the brain and spinal cord), which coordinates the response of effectors (muscles contracting or glands secreting hormones), following the pathway stimulus - receptor - coordinator - effector - response. The structures in a reflex arc (sensory neurone, synapse, relay neurone, motor neurone) relate to their function; reflex actions are automatic and rapid and do not involve the conscious part of the brain, and students should understand why reflex actions are important. Students should be able to extract and interpret data from graphs, charts and tables about the functioning of the nervous system, and translate information about reaction times between numerical and graphical forms. Required practical activity 6: plan and carry out an investigation into the effect of a factor on human reaction time. AT skills covered: biology AT 1, 3 and 4; this practical also develops WS and MS skills."
    },
    {
     "code": "4.5.3.1",
     "q": "How does the human endocrine system provide hormonal coordination, and where are the main glands located?",
     "idea": "Human endocrine system",
     "content": "The endocrine system is composed of glands which secrete chemicals called hormones directly into the bloodstream; the blood carries the hormone to a target organ where it produces an effect. Compared to the nervous system, hormonal effects are slower but act for longer. The pituitary gland in the brain is a 'master gland' which secretes several hormones into the blood in response to body conditions; these hormones act on other glands to stimulate other hormones to be released to bring about effects. Students should be able to identify the position of the pituitary gland, pancreas, thyroid, adrenal gland, ovary and testes on a diagram of the human body."
    },
    {
     "code": "4.5.3.2",
     "q": "How is blood glucose concentration monitored and controlled, and how do Type 1 and Type 2 diabetes differ and get treated?",
     "idea": "Control of blood glucose concentration",
     "content": "Blood glucose concentration is monitored and controlled by the pancreas. If blood glucose concentration is too high, the pancreas produces insulin, which causes glucose to move from the blood into cells; in liver and muscle cells excess glucose is converted to glycogen for storage. Students should be able to explain how insulin controls blood glucose levels. Type 1 diabetes is a disorder in which the pancreas fails to produce sufficient insulin, characterised by uncontrolled high blood glucose levels, normally treated with insulin injections. In Type 2 diabetes body cells no longer respond to insulin produced by the pancreas; a carbohydrate-controlled diet and exercise regime are common treatments, and obesity is a risk factor. Students should be able to compare Type 1 and Type 2 diabetes and explain their treatment, and extract and interpret data from graphs showing the effect of insulin on blood glucose levels in people with and without diabetes. Higher tier only: if blood glucose concentration is too low, the pancreas produces glucagon, which causes glycogen to be converted into glucose and released into the blood; students should be able to explain how glucagon interacts with insulin in a negative feedback cycle to control blood glucose levels."
    },
    {
     "code": "4.5.3.3",
     "q": "What roles do hormones play in human reproduction and the menstrual cycle?",
     "idea": "Hormones in human reproduction",
     "content": "Students should be able to describe the roles of hormones in human reproduction, including the menstrual cycle. During puberty, reproductive hormones cause secondary sex characteristics to develop. Oestrogen is the main female reproductive hormone, produced in the ovary; at puberty eggs begin to mature and one is released approximately every 28 days (ovulation). Testosterone is the main male reproductive hormone, produced by the testes, and stimulates sperm production. In the menstrual cycle: follicle stimulating hormone (FSH) causes maturation of an egg in the ovary; luteinising hormone (LH) stimulates release of the egg; oestrogen and progesterone are involved in maintaining the uterus lining. Higher tier only: students should be able to explain the interactions of FSH, oestrogen, LH and progesterone in the control of the menstrual cycle, and to extract and interpret data from graphs showing hormone levels during the menstrual cycle."
    },
    {
     "code": "4.5.3.4",
     "q": "What hormonal and non-hormonal methods can be used to control fertility?",
     "idea": "Contraception",
     "content": "Students should be able to evaluate different hormonal and non-hormonal methods of contraception. These include: oral contraceptives that contain hormones to inhibit FSH production so no eggs mature; injection, implant or skin patch of slow-release progesterone to inhibit egg maturation and release for months or years; barrier methods such as condoms and diaphragms which prevent sperm reaching an egg; intrauterine devices which prevent implantation of an embryo or release a hormone; spermicidal agents which kill or disable sperm; abstaining from intercourse when an egg may be in the oviduct; and surgical methods of male and female sterilisation."
    },
    {
     "code": "4.5.3.5",
     "q": "How are hormones used in reproductive technology to treat infertility, and what are the risks of such treatment?",
     "idea": "The use of hormones to treat infertility (HT only)",
     "content": "Higher tier only: students should be able to explain the use of hormones in modern reproductive technologies to treat infertility. This includes giving FSH and LH in a 'fertility drug' to a woman, who may then become pregnant in the normal way. In Vitro Fertilisation (IVF) treatment: IVF involves giving a mother FSH and LH to stimulate the maturation of several eggs; the eggs are collected from the mother and fertilised by sperm from the father in the laboratory; the fertilised eggs develop into embryos; at the stage when they are tiny balls of cells, one or two embryos are inserted into the mother's uterus. Although fertility treatment gives a woman the chance to have a baby of her own: it is very emotionally and physically stressful; success rates are not high; and it can lead to multiple births which are a risk to both the babies and the mother."
    },
    {
     "code": "4.5.3.6",
     "q": "What roles do adrenaline and thyroxine play in the body, and how is thyroxine controlled?",
     "idea": "Feedback systems (HT only)",
     "content": "Higher tier only: students should be able to explain the roles of thyroxine and adrenaline in the body. Adrenaline is produced by the adrenal glands in times of fear or stress; it increases heart rate and boosts the delivery of oxygen and glucose to the brain and muscles, preparing the body for 'fight or flight'. Thyroxine from the thyroid gland stimulates the basal metabolic rate and plays an important role in growth and development. Thyroxine levels are controlled by negative feedback; students should be able to interpret and explain simple diagrams of negative feedback control."
    }
   ],
   "caseStudies": [
    "Required practical activity 6: plan and carry out an investigation into the effect of a factor on human reaction time."
   ],
   "skills": [
    "AT 1",
    "AT 3",
    "AT 4",
    "MS 2c",
    "MS 4a",
    "WS 1.1",
    "WS 1.2",
    "WS 1.3",
    "WS 1.4"
   ]
  },
  {
   "id": "4.6",
   "component": "B2",
   "option": null,
   "name": "Inheritance, variation and evolution",
   "ideas": [
    {
     "code": "4.6.1.1",
     "q": "How do sexual and asexual reproduction differ in terms of cell division and genetic variation?",
     "idea": "Sexual and asexual reproduction",
     "content": "Meiosis leads to non-identical cells being formed while mitosis leads to identical cells being formed. Sexual reproduction involves the joining (fusion) of male and female gametes: sperm and egg cells in animals, pollen and egg cells in flowering plants. In sexual reproduction there is mixing of genetic information which leads to variety in the offspring; the formation of gametes involves meiosis. Asexual reproduction involves only one parent and no fusion of gametes; there is no mixing of genetic information, leading to genetically identical offspring (clones); only mitosis is involved. There are links with this content to Mitosis and the cell cycle."
    },
    {
     "code": "4.6.1.2",
     "q": "How does meiosis produce genetically different gametes, and how is the chromosome number restored at fertilisation?",
     "idea": "Meiosis",
     "content": "Explain how meiosis halves the number of chromosomes in gametes and fertilisation restores the full number of chromosomes. Cells in reproductive organs divide by meiosis to form gametes. When a cell divides to form gametes: copies of the genetic information are made; the cell divides twice to form four gametes, each with a single set of chromosomes; all gametes are genetically different from each other. Gametes join at fertilisation to restore the normal number of chromosomes; the new cell divides by mitosis, the number of cells increases, and as the embryo develops cells differentiate. Knowledge of the stages of meiosis is not required."
    },
    {
     "code": "4.6.1.3",
     "q": "What is the structure of DNA, what is a genome, and why is understanding the human genome important?",
     "idea": "DNA and the genome",
     "content": "Describe the structure of DNA and define genome. The genetic material in the nucleus of a cell is DNA, a polymer made of two strands forming a double helix, contained in structures called chromosomes. A gene is a small section of DNA on a chromosome; each gene codes for a particular sequence of amino acids to make a specific protein. The genome of an organism is its entire genetic material; the whole human genome has now been studied. Discuss the importance of understanding the human genome, limited to: the search for genes linked to different types of disease; understanding and treatment of inherited disorders; and use in tracing human migration patterns from the past."
    },
    {
     "code": "4.6.1.4",
     "q": "What do the key genetics terms mean, and how are the outcomes of genetic crosses predicted and represented?",
     "idea": "Genetic inheritance",
     "content": "Explain the terms gamete, chromosome, gene, allele, dominant, recessive, homozygous, heterozygous, genotype and phenotype. Some characteristics are controlled by a single gene, such as fur colour in mice and red-green colour blindness in humans; each gene may have different forms called alleles. The genotype (alleles present) operates at a molecular level to develop characteristics expressed as a phenotype. A dominant allele is always expressed, even if only one copy is present; a recessive allele is only expressed if two copies are present. If the two alleles present are the same the organism is homozygous for that trait; if different, heterozygous. Most characteristics result from multiple genes interacting rather than a single gene. Understand the concept of probability in predicting the results of a single gene cross, but recall that most phenotype features result from multiple gene inheritance; use direct proportion and simple ratios to express the outcome of a genetic cross; complete a Punnett square diagram and extract and interpret information from genetic crosses and family trees. Higher tier only: construct a genetic cross by Punnett square diagram and use it to make predictions using the theory of probability."
    },
    {
     "code": "4.6.1.5",
     "q": "What are Polydactyly and Cystic fibrosis, and what issues does embryo screening raise?",
     "idea": "Inherited disorders",
     "content": "Some disorders are inherited, caused by the inheritance of certain alleles. Polydactyly (having extra fingers or toes) is caused by a dominant allele. Cystic fibrosis (a disorder of cell membranes) is caused by a recessive allele. Students should make informed judgements about the economic, social and ethical issues concerning embryo screening, given appropriate information."
    },
    {
     "code": "4.6.1.6",
     "q": "How is the sex of a human offspring determined, and how can a genetic cross show this inheritance?",
     "idea": "Sex determination",
     "content": "Ordinary human body cells contain 23 pairs of chromosomes; 22 pairs control characteristics only, but one pair carries the genes that determine sex. In females the sex chromosomes are the same (XX); in males the chromosomes are different (XY). Students should be able to carry out a genetic cross to show sex inheritance, and understand and use direct proportion and simple ratios in genetic crosses."
    },
    {
     "code": "4.6.2.1",
     "q": "What causes variation between individuals of a species, and what effect do most mutations have on phenotype?",
     "idea": "Variation",
     "content": "Describe simply how the genome and its interaction with the environment influence the development of the phenotype of an organism. Differences in the characteristics of individuals in a population (variation) may be due to genetic causes, environmental causes, or a combination of genes and the environment. There is usually extensive genetic variation within a population of a species; all variants arise from mutations, and most have no effect on the phenotype, some influence phenotype, and very few determine phenotype. Mutations occur continuously; very rarely a mutation will lead to a new phenotype, and if the new phenotype is suited to an environmental change it can lead to a relatively rapid change in the species."
    },
    {
     "code": "4.6.2.2",
     "q": "How does evolution by natural selection occur, and how can it lead to the formation of a new species?",
     "idea": "Evolution",
     "content": "Describe evolution as a change in the inherited characteristics of a population over time through a process of natural selection which may result in the formation of a new species. The theory of evolution by natural selection states that all species of living things have evolved from simple life forms that first developed more than three billion years ago. Explain how evolution occurs through natural selection of variants that give rise to phenotypes best suited to their environment. If two populations of one species become so different in phenotype that they can no longer interbreed to produce fertile offspring, they have formed two new species."
    },
    {
     "code": "4.6.2.3",
     "q": "What is selective breeding, what is it used for, and what risk does it carry?",
     "idea": "Selective breeding",
     "content": "Explain the impact of selective breeding of food plants and domesticated animals. Selective breeding (artificial selection) is the process by which humans breed plants and animals for particular genetic characteristics, done for thousands of years. It involves choosing parents with the desired characteristic from a mixed population, breeding them together, then breeding the offspring with the desired characteristic together, continuing over many generations until all offspring show the desired characteristic. The characteristic can be chosen for usefulness or appearance, e.g. disease resistance in food crops, animals producing more meat or milk, domestic dogs with a gentle nature, large or unusual flowers. Selective breeding can lead to 'inbreeding' where some breeds are particularly prone to disease or inherited defects."
    },
    {
     "code": "4.6.2.4",
     "q": "What is genetic engineering, what is it used for, and what are its main steps and risks?",
     "idea": "Genetic engineering",
     "content": "Describe genetic engineering as a process which involves modifying the genome of an organism by introducing a gene from another organism to give a desired characteristic. Plant crops have been engineered to be resistant to diseases or to produce bigger, better fruits; bacterial cells have been engineered to produce useful substances such as human insulin to treat diabetes. Explain the potential benefits and risks of genetic engineering in agriculture and medicine and that some people have objections. Genes from chromosomes of humans and other organisms can be cut out and transferred to cells of other organisms; genetically modified (GM) crops include ones resistant to insect attack or herbicides and generally show increased yields. Concerns about GM crops include effects on populations of wild flowers and insects, and unexplored effects of eating GM crops on human health. Modern medical research is exploring genetic modification to overcome some inherited disorders. Higher tier only: describe the main steps in the process of genetic engineering: enzymes are used to isolate the required gene; this gene is inserted into a vector, usually a bacterial plasmid or a virus; the vector is used to insert the gene into the required cells; genes are transferred to the cells of animals, plants or microorganisms at an early stage in their development so they develop with desired characteristics."
    },
    {
     "code": "4.6.3.1",
     "q": "What evidence supports the theory of evolution by natural selection?",
     "idea": "Evidence for evolution",
     "content": "Describe the evidence for evolution including fossils and antibiotic resistance in bacteria. The theory of evolution by natural selection is now widely accepted; evidence for Darwin's theory is now available as it has been shown that characteristics are passed on to offspring in genes. There is further evidence in the fossil record and in the knowledge of how resistance to antibiotics evolves in bacteria."
    },
    {
     "code": "4.6.3.2",
     "q": "How are fossils formed, and what do they show about how life has changed over time?",
     "idea": "Fossils",
     "content": "Fossils are the 'remains' of organisms from millions of years ago, found in rocks. Fossils may be formed: from parts of organisms that have not decayed because conditions needed for decay are absent; when parts of the organism are replaced by minerals as they decay; or as preserved traces of organisms, such as footprints, burrows and rootlet traces. Many early forms of life were soft-bodied and left few traces, mostly destroyed by geological activity, which is why scientists cannot be certain about how life began on Earth. Fossils show how much or how little different organisms have changed as life developed on Earth. Students should be able to extract and interpret information from charts, graphs and tables such as evolutionary trees."
    },
    {
     "code": "4.6.3.3",
     "q": "What is extinction and what factors can contribute to it?",
     "idea": "Extinction",
     "content": "Extinctions occur when there are no remaining individuals of a species still alive. Students should be able to describe factors which may contribute to the extinction of a species."
    },
    {
     "code": "4.6.3.4",
     "q": "How do bacteria evolve antibiotic resistance, and what steps can reduce the rate of resistant strains developing?",
     "idea": "Resistant bacteria",
     "content": "Bacteria can evolve rapidly because they reproduce at a fast rate. Mutations of bacterial pathogens produce new strains; some strains might be resistant to antibiotics and are not killed, so they survive and reproduce, and the population of the resistant strain rises; the resistant strain then spreads because people are not immune to it and there is no effective treatment. MRSA is resistant to antibiotics. To reduce the rate of development of antibiotic resistant strains: doctors should not prescribe antibiotics inappropriately, such as treating non-serious or viral infections; patients should complete their course of antibiotics so all bacteria are killed and none survive to mutate and form resistant strains; the agricultural use of antibiotics should be restricted. The development of new antibiotics is costly and slow, and unlikely to keep up with the emergence of new resistant strains. There are links with this content to Antibiotics and painkillers."
    },
    {
     "code": "4.6.4",
     "q": "How are living organisms classified, and how has classification changed with new scientific evidence?",
     "idea": "Classification of living organisms",
     "content": "Traditionally living things have been classified into groups depending on their structure and characteristics in a system developed by Carl Linnaeus, who classified living things into kingdom, phylum, class, order, family, genus and species; organisms are named by the binomial system of genus and species. Use information given to show understanding of the Linnaean system, and describe the impact of developments in biology on classification systems. As evidence of internal structures became more developed due to improvements in microscopes, and understanding of biochemical processes progressed, new models of classification were proposed. Due to evidence available from chemical analysis there is now a 'three-domain system' developed by Carl Woese, in which organisms are divided into: Archaea (primitive bacteria usually living in extreme environments); Bacteria (true bacteria); Eukaryota (which includes protists, fungi, plants and animals). Evolutionary trees are a method used by scientists to show how they believe organisms are related, using current classification data for living organisms and fossil data for extinct organisms; students should be able to interpret evolutionary trees."
    }
   ],
   "caseStudies": [],
   "skills": [
    "WS 1.1",
    "WS 1.2",
    "WS 1.3",
    "WS 1.4",
    "MS 1c",
    "MS 2c",
    "MS 2e",
    "MS 3a",
    "MS 4a"
   ]
  },
  {
   "id": "4.7",
   "component": "B2",
   "option": null,
   "name": "Ecology",
   "ideas": [
    {
     "code": "4.7.1.1",
     "q": "What are the levels of organisation in an ecosystem, and why do interdependence and competition matter within a community?",
     "idea": "Communities",
     "content": "Describe different levels of organisation in an ecosystem from individual organisms to the whole ecosystem, and the importance of interdependence and competition in a community. When provided with appropriate information, suggest the factors for which organisms are competing in a given habitat, and suggest how organisms are adapted to the conditions in which they live. An ecosystem is the interaction of a community of living organisms (biotic) with the non-living (abiotic) parts of their environment. To survive and reproduce, organisms require a supply of materials from their surroundings and from other living organisms. Plants often compete for light, space, water and mineral ions from the soil; animals often compete for food, mates and territory. Within a community each species depends on other species for food, shelter, pollination, seed dispersal etc; if one species is removed it can affect the whole community (interdependence). A stable community is one where all the species and environmental factors are in balance so that population sizes remain fairly constant. Extract and interpret information from charts, graphs and tables relating to the interaction of organisms within a community."
    },
    {
     "code": "4.7.1.2",
     "q": "How can a change in an abiotic factor affect a community?",
     "idea": "Abiotic factors",
     "content": "Explain how a change in an abiotic factor would affect a given community given appropriate data or context. Abiotic (non-living) factors which can affect a community are: light intensity; temperature; moisture levels; soil pH and mineral content; wind intensity and direction; carbon dioxide levels for plants; oxygen levels for aquatic animals. Extract and interpret information from charts, graphs and tables relating to the effect of abiotic factors on organisms within a community."
    },
    {
     "code": "4.7.1.3",
     "q": "How can a change in a biotic factor affect a community?",
     "idea": "Biotic factors",
     "content": "Explain how a change in a biotic factor might affect a given community given appropriate data or context. Biotic (living) factors which can affect a community are: availability of food; new predators arriving; new pathogens; one species outcompeting another so the numbers are no longer sufficient to breed. Extract and interpret information from charts, graphs and tables relating to the effect of biotic factors on organisms within a community."
    },
    {
     "code": "4.7.1.4",
     "q": "How are organisms adapted to their natural environment, including extreme environments?",
     "idea": "Adaptations",
     "content": "Explain how organisms are adapted to live in their natural environment, given appropriate information. Organisms have features (adaptations) that enable them to survive in the conditions in which they normally live; these adaptations may be structural, behavioural or functional. Some organisms live in environments that are very extreme, such as at high temperature, pressure, or salt concentration; these organisms are called extremophiles. Bacteria living in deep sea vents are extremophiles."
    },
    {
     "code": "4.7.2.1",
     "q": "How is feeding organised into food chains, and how is the population size and distribution of a species measured? (Required practical activity 7)",
     "idea": "Levels of organisation (Required practical activity 7)",
     "content": "Understand that photosynthetic organisms are the producers of biomass for life on Earth. Feeding relationships within a community can be represented by food chains; all food chains begin with a producer which synthesises molecules, usually a green plant or alga which makes glucose by photosynthesis. A range of experimental methods using transects and quadrats are used by ecologists to determine the distribution and abundance of species in an ecosystem; in relation to abundance of organisms students should understand the terms mean, mode and median, calculate arithmetic means, and plot and draw appropriate graphs selecting appropriate scales for the axes. Producers are eaten by primary consumers, which in turn may be eaten by secondary consumers and then tertiary consumers; consumers that kill and eat other animals are predators, and those eaten are prey; in a stable community the numbers of predators and prey rise and fall in cycles, and students should be able to interpret graphs used to model these cycles. Required practical activity 7: measure the population size of a common species in a habitat. Use sampling techniques to investigate the effect of a factor on the distribution of this species. AT skills covered: biology AT 1, 3, 4 and 6; this practical also develops WS and MS skills."
    },
    {
     "code": "4.7.2.2",
     "q": "How are materials such as carbon and water cycled through an ecosystem, and what role do microorganisms play?",
     "idea": "How materials are cycled",
     "content": "Recall that many different materials cycle through the abiotic and biotic components of an ecosystem, and explain the importance of the carbon and water cycles to living organisms. All materials in the living world are recycled to provide the building blocks for future organisms. The carbon cycle returns carbon from organisms to the atmosphere as carbon dioxide to be used by plants in photosynthesis. The water cycle provides fresh water for plants and animals on land before draining into the seas; water is continuously evaporated and precipitated. Students are not expected to study the nitrogen cycle. Explain the role of microorganisms in cycling materials through an ecosystem by returning carbon to the atmosphere as carbon dioxide and mineral ions to the soil."
    },
    {
     "code": "4.7.3.1",
     "q": "What is biodiversity, and why is maintaining it important?",
     "idea": "Biodiversity",
     "content": "Biodiversity is the variety of all the different species of organisms on earth, or within an ecosystem. Great biodiversity ensures the stability of ecosystems by reducing the dependence of one species on another for food, shelter and the maintenance of the physical environment. The future of the human species on Earth relies on maintaining a good level of biodiversity; many human activities are reducing biodiversity and only recently have measures been taken to try to stop this reduction."
    },
    {
     "code": "4.7.3.2",
     "q": "How does human waste production lead to pollution, and how does pollution affect biodiversity?",
     "idea": "Waste management",
     "content": "Rapid growth in the human population and an increase in the standard of living mean that increasingly more resources are used and more waste is produced; unless waste and chemical materials are properly handled, more pollution will be caused. Pollution can occur in water (from sewage, fertiliser or toxic chemicals), in air (from smoke and acidic gases), and on land (from landfill and from toxic chemicals). Pollution kills plants and animals, which can reduce biodiversity."
    },
    {
     "code": "4.7.3.3",
     "q": "How does human land use, including peat extraction, affect habitats and biodiversity?",
     "idea": "Land use",
     "content": "Humans reduce the amount of land available for other animals and plants by building, quarrying, farming and dumping waste. The destruction of peat bogs, and other areas of peat to produce garden compost, reduces the area of this habitat and thus the variety of different plant, animal and microorganism species that live there (biodiversity); the decay or burning of the peat releases carbon dioxide into the atmosphere. Understand the conflict between the need for cheap available compost to increase food production and the need to conserve peat bogs and peatlands as habitats for biodiversity and to reduce carbon dioxide emissions."
    },
    {
     "code": "4.7.3.4",
     "q": "Why has large-scale deforestation occurred in tropical areas, and what are its environmental implications?",
     "idea": "Deforestation",
     "content": "Large-scale deforestation in tropical areas has occurred to provide land for cattle and rice fields, and to grow crops for biofuels. Evaluate the environmental implications of deforestation."
    },
    {
     "code": "4.7.3.5",
     "q": "What biological consequences does global warming have, and why is the evidence for it sometimes described as uncertain?",
     "idea": "Global warming",
     "content": "Describe some of the biological consequences of global warming. Levels of carbon dioxide and methane in the atmosphere are increasing, and contribute to 'global warming'. Understand that the scientific consensus about global warming and climate change is based on systematic reviews of thousands of peer reviewed publications, and explain why evidence is uncertain or incomplete in a complex context."
    },
    {
     "code": "4.7.3.6",
     "q": "What programmes help maintain biodiversity in the face of human impacts on ecosystems?",
     "idea": "Maintaining biodiversity",
     "content": "Describe both positive and negative human interactions in an ecosystem and explain their impact on biodiversity. Scientists and concerned citizens have put in place programmes to reduce the negative effects of humans on ecosystems and biodiversity. These include: breeding programmes for endangered species; protection and regeneration of rare habitats; reintroduction of field margins and hedgerows in agricultural areas where farmers grow only one type of crop; reduction of deforestation and carbon dioxide emissions by some governments; recycling resources rather than dumping waste in landfill. Evaluate given information about methods that can be used to tackle problems caused by human impacts on the environment, and explain and evaluate the conflicting pressures on maintaining biodiversity given appropriate information."
    }
   ],
   "caseStudies": [
    "Required practical activity 7: measure the population size of a common species in a habitat. Use sampling techniques to investigate the effect of a factor on the distribution of this species."
   ],
   "skills": [
    "WS 1.2",
    "WS 1.3",
    "WS 1.4",
    "WS 1.5",
    "WS 1.6",
    "WS 2.6",
    "MS 2b",
    "MS 2c",
    "MS 2f",
    "MS 4a",
    "MS 4c",
    "AT 1",
    "AT 3",
    "AT 4",
    "AT 6"
   ]
  },
  {
   "id": "10.1.1",
   "component": "B1",
   "option": null,
   "name": "Use of apparatus and techniques: Biology",
   "ideas": [
    {
     "code": "AT 1",
     "q": "Measuring",
     "idea": "Apparatus for a range of measurements",
     "content": "Use of appropriate apparatus to make and record a range of measurements accurately, including length, area, mass, time, temperature, volume of liquids and gases, and pH (links to A-level AT a)."
    },
    {
     "code": "AT 2",
     "q": "Heating safely",
     "idea": "Heating devices and techniques",
     "content": "Safe use of appropriate heating devices and techniques including use of a Bunsen burner and a water bath or electric heater (links to A-level AT a)."
    },
    {
     "code": "AT 3",
     "q": "Observing biological change",
     "idea": "Observation and measurement of biological changes and processes",
     "content": "Use of appropriate apparatus and techniques for the observation and measurement of biological changes and/or processes."
    },
    {
     "code": "AT 4",
     "q": "Living organisms",
     "idea": "Safe and ethical use of living organisms",
     "content": "Safe and ethical use of living organisms (plants or animals) to measure physiological functions and responses to the environment (links to A-level AT h)."
    },
    {
     "code": "AT 5",
     "q": "Rates of reaction",
     "idea": "Measuring rates of reaction",
     "content": "Measurement of rates of reaction by a variety of methods including production of gas, uptake of water and colour change of indicator."
    },
    {
     "code": "AT 6",
     "q": "Sampling in the field",
     "idea": "Sampling techniques in an ecosystem",
     "content": "Application of appropriate sampling techniques to investigate the distribution and abundance of organisms in an ecosystem via direct use in the field (links to A-level AT k)."
    },
    {
     "code": "AT 7",
     "q": "Microscopes and drawings",
     "idea": "Microscopes, magnification and scientific drawings",
     "content": "Use of appropriate apparatus, techniques and magnification, including microscopes, to make observations of biological specimens and produce labelled scientific drawings (links to A-level AT d and e)."
    }
   ],
   "caseStudies": [],
   "skills": []
  },
  {
   "id": "5.1",
   "component": "C1",
   "option": null,
   "name": "Atomic structure and the periodic table",
   "ideas": [
    {
     "code": "5.1.1.1",
     "q": "What are atoms, elements and compounds, and how are they represented?",
     "idea": "Atoms, elements and compounds",
     "content": "All substances are made of atoms; an atom is the smallest part of an element that can exist. Atoms of each element are represented by a chemical symbol (eg O for oxygen, Na for sodium). There are about 100 different elements, shown in the periodic table. Compounds are formed from elements by chemical reactions, which always form one or more new substances and often involve a detectable energy change. Compounds contain two or more elements chemically combined in fixed proportions, represented by formulae, and can only be separated into elements by chemical reactions. Chemical reactions can be represented by word equations or by symbol/formulae equations. Students will be supplied with a periodic table and should be able to use names and symbols of the first 20 elements, Groups 1 and 7, and other elements in the specification; name compounds from given formulae or symbol equations; write word equations and balanced chemical equations/formulae for the reactions in the specification. Higher tier only: write balanced half equations and ionic equations where appropriate."
    },
    {
     "code": "5.1.1.2",
     "q": "How can mixtures be separated?",
     "idea": "Mixtures",
     "content": "A mixture consists of two or more elements or compounds not chemically combined together; the chemical properties of each substance in the mixture are unchanged. Mixtures can be separated by physical processes such as filtration, crystallisation, simple distillation, fractional distillation and chromatography, which do not involve chemical reactions and produce no new substances. Students should be able to describe, explain and give examples of these separation processes, and suggest suitable separation and purification techniques for mixtures when given appropriate information."
    },
    {
     "code": "5.1.1.3",
     "q": "How did the model of the atom develop over time?",
     "idea": "The development of the model of the atom (common content with physics)",
     "content": "New experimental evidence may lead to a scientific model being changed or replaced. Before the discovery of the electron, atoms were thought to be tiny spheres that could not be divided. The discovery of the electron led to the plum pudding model (a ball of positive charge with negative electrons embedded in it). The alpha particle scattering experiment showed the mass of an atom was concentrated at a charged centre (nucleus), replacing the plum pudding model with the nuclear model. Niels Bohr adapted the nuclear model, suggesting electrons orbit the nucleus at specific distances; his theoretical calculations agreed with experimental observations. Later experiments showed the positive charge of the nucleus could be subdivided into particles of equal positive charge, named protons. James Chadwick's experimental work provided evidence for the existence of neutrons within the nucleus, about 20 years after the nucleus became accepted. Students should be able to describe why the scattering experiment evidence led to a change in the atomic model, and the difference between the plum pudding model and the nuclear model. Details of experimental work supporting the Bohr model and of Chadwick's experimental work are not required."
    },
    {
     "code": "5.1.1.4",
     "q": "What are the relative electrical charges of subatomic particles?",
     "idea": "Relative electrical charges of subatomic particles",
     "content": "The relative electrical charges of the particles in atoms are given (proton, neutron, electron). In an atom the number of electrons equals the number of protons in the nucleus, so atoms have no overall electrical charge. The number of protons in an atom of an element is its atomic number; all atoms of a particular element have the same number of protons, and atoms of different elements have different numbers of protons. Students should be able to use the nuclear model to describe atoms."
    },
    {
     "code": "5.1.1.5",
     "q": "How big and how massive are atoms, and what are isotopes?",
     "idea": "Size and mass of atoms",
     "content": "Atoms are very small, with a radius of about 0.1 nm (1 x 10^-10 m); the radius of a nucleus is less than 1/10 000 of that of the atom (about 1 x 10^-14 m). Almost all of the mass of an atom is in the nucleus. The relative masses of protons, neutrons and electrons are given. The sum of the protons and neutrons in an atom is its mass number. Atoms of the same element can have different numbers of neutrons; these are isotopes of that element. Students should be able to calculate the numbers of protons, neutrons and electrons in an atom or ion, given its atomic number and mass number, and relate the size and scale of atoms to objects in the physical world."
    },
    {
     "code": "5.1.1.6",
     "q": "What is relative atomic mass and how is it calculated?",
     "idea": "Relative atomic mass",
     "content": "The relative atomic mass of an element is an average value that takes account of the abundance of the isotopes of the element. Students should be able to calculate the relative atomic mass of an element given the percentage abundance of its isotopes."
    },
    {
     "code": "5.1.1.7",
     "q": "How is the electronic structure of an atom worked out and represented?",
     "idea": "Electronic structure",
     "content": "The electrons in an atom occupy the lowest available energy levels (innermost available shells). Electronic structure can be represented by numbers or by a diagram, eg sodium is 2,8,1, showing two electrons in the lowest energy level, eight in the second and one in the third. Students may answer questions in terms of either energy levels or shells and should be able to represent the electronic structures of the first twenty elements of the periodic table in both forms."
    },
    {
     "code": "5.1.2.1",
     "q": "How is the periodic table arranged and what does an element's position tell us?",
     "idea": "The periodic table",
     "content": "Elements in the periodic table are arranged in order of atomic (proton) number and so that elements with similar properties are in columns called groups; it is called a periodic table because similar properties occur at regular intervals. Elements in the same group have the same number of electrons in their outer shell (outer electrons), giving them similar chemical properties. Students should be able to explain how the position of an element in the periodic table is related to the arrangement of electrons in its atoms and hence to its atomic number, and predict possible reactions and probable reactivity of elements from their positions in the periodic table."
    },
    {
     "code": "5.1.2.2",
     "q": "How did the periodic table develop historically?",
     "idea": "Development of the periodic table",
     "content": "Before the discovery of protons, neutrons and electrons, scientists attempted to classify elements by arranging them in order of atomic weights. Early periodic tables were incomplete and some elements were placed in inappropriate groups if strict atomic weight order was followed. Mendeleev overcame some problems by leaving gaps for undiscovered elements and, in some places, changed the order based on atomic weights. Elements with properties predicted by Mendeleev were later discovered and filled the gaps. Knowledge of isotopes made it possible to explain why the order based on atomic weights was not always correct. Students should be able to describe these steps in the development of the periodic table."
    },
    {
     "code": "5.1.2.3",
     "q": "How do metals and non-metals differ in terms of properties and position in the periodic table?",
     "idea": "Metals and non-metals",
     "content": "Elements that react to form positive ions are metals; elements that do not form positive ions are non-metals. The majority of elements are metals, found to the left and towards the bottom of the periodic table; non-metals are found towards the right and top. Students should be able to explain the differences between metals and non-metals on the basis of their characteristic physical and chemical properties, explain how the atomic structure of metals and non-metals relates to their position in the periodic table, and explain how the reactions of elements are related to the arrangement of electrons in their atoms and hence to their atomic number."
    },
    {
     "code": "5.1.2.4",
     "q": "Why are the Group 0 elements unreactive, and how do their properties change down the group?",
     "idea": "Group 0",
     "content": "The elements in Group 0 are called the noble gases. They are unreactive and do not easily form molecules because their atoms have stable arrangements of electrons; noble gases have eight electrons in their outer shell, except helium, which has only two. The boiling points of the noble gases increase with increasing relative atomic mass (going down the group). Students should be able to explain how properties of Group 0 elements depend on the outer shell of electrons of the atoms, and predict properties from given trends down the group."
    },
    {
     "code": "5.1.2.5",
     "q": "What are the characteristic properties and reactions of Group 1 elements?",
     "idea": "Group 1",
     "content": "The elements in Group 1 are known as the alkali metals and have characteristic properties because of the single electron in their outer shell. Students should be able to describe the reactions of the first three alkali metals with oxygen, chlorine and water. In Group 1, reactivity of the elements increases going down the group. Students should be able to explain how properties of Group 1 elements depend on the outer shell of electrons of the atoms, and predict properties from given trends down the group."
    },
    {
     "code": "5.1.2.6",
     "q": "What are the characteristic properties and reactions of Group 7 elements?",
     "idea": "Group 7",
     "content": "The elements in Group 7 are known as the halogens and have similar reactions because they all have seven electrons in their outer shell; halogens are non-metals and consist of molecules made of pairs of atoms. Students should be able to describe the nature of the compounds formed when chlorine, bromine and iodine react with metals and non-metals. Further down the group, an element has higher relative molecular mass, melting point and boiling point, but reactivity decreases going down the group. A more reactive halogen can displace a less reactive halogen from an aqueous solution of its salt. Students should be able to explain how properties of Group 7 elements depend on the outer shell of electrons of the atoms, and predict properties from given trends down the group."
    }
   ],
   "caseStudies": [],
   "skills": [
    "WS 2.2",
    "WS 2.3",
    "AT 4",
    "WS 1.1",
    "WS 1.6",
    "WS 1.2",
    "WS 4.3",
    "WS 4",
    "MS 1b",
    "MS 1d",
    "MS 5b",
    "AT 6"
   ]
  },
  {
   "id": "5.2",
   "component": "C1",
   "option": null,
   "name": "Bonding, structure, and the properties of matter",
   "ideas": [
    {
     "code": "5.2.1.1",
     "q": "What are the three types of strong chemical bond and where does each occur?",
     "idea": "Chemical bonds",
     "content": "There are three types of strong chemical bonds: ionic, covalent and metallic. For ionic bonding the particles are oppositely charged ions; for covalent bonding the particles are atoms which share pairs of electrons; for metallic bonding the particles are atoms which share delocalised electrons. Ionic bonding occurs in compounds formed from metals combined with non-metals. Covalent bonding occurs in most non-metallic elements and in compounds of non-metals. Metallic bonding occurs in metallic elements and alloys. Students should be able to explain chemical bonding in terms of electrostatic forces and the transfer or sharing of electrons."
    },
    {
     "code": "5.2.1.2",
     "q": "How does ionic bonding form, and what charges do the resulting ions carry?",
     "idea": "Ionic bonding",
     "content": "When a metal atom reacts with a non-metal atom, electrons in the outer shell of the metal atom are transferred: metal atoms lose electrons to become positively charged ions and non-metal atoms gain electrons to become negatively charged ions. Ions produced by metals in Groups 1 and 2 and by non-metals in Groups 6 and 7 have the electronic structure of a noble gas (Group 0). Electron transfer can be represented by a dot and cross diagram, eg for sodium chloride. Students should be able to draw dot and cross diagrams for ionic compounds formed by metals in Groups 1 and 2 with non-metals in Groups 6 and 7. The charge on the ions relates to the group number of the element; students should be able to work out the charge on the ions of metals and non-metals from the group number, limited to metals in Groups 1 and 2 and non-metals in Groups 6 and 7."
    },
    {
     "code": "5.2.1.3",
     "q": "What is the structure of an ionic compound and how can it be represented?",
     "idea": "Ionic compounds",
     "content": "An ionic compound is a giant structure of ions, held together by strong electrostatic forces of attraction between oppositely charged ions acting in all directions in the lattice (ionic bonding). The structure of sodium chloride can be represented in several forms. Students should be able to deduce that a compound is ionic from a diagram of its structure in one of the specified forms, describe the limitations of using dot and cross, ball and stick, and two- and three-dimensional diagrams to represent a giant ionic structure, and work out the empirical formula of an ionic compound from a given model or diagram showing the ions in the structure. Students should be familiar with the structure of sodium chloride but do not need to know the structures of other ionic compounds."
    },
    {
     "code": "5.2.1.4",
     "q": "How does covalent bonding form small molecules, polymers and giant structures?",
     "idea": "Covalent bonding",
     "content": "When atoms share pairs of electrons they form strong covalent bonds. Covalently bonded substances may consist of small molecules (students should recognise common substances that consist of small molecules from their chemical formula), very large molecules such as polymers, or giant covalent structures such as diamond and silicon dioxide. Covalent bonds in molecules and giant structures, and polymers (as a repeating unit where n is a large number), can be represented in specified forms. Students should be able to draw dot and cross diagrams for the molecules of hydrogen, chlorine, oxygen, nitrogen, hydrogen chloride, water, ammonia and methane; represent covalent bonds in small molecules, polymer repeating units and giant covalent structures using a line for a single bond; describe the limitations of dot and cross, ball and stick, and 2D/3D diagrams for molecules or giant structures; and deduce the molecular formula of a substance from a given model or diagram."
    },
    {
     "code": "5.2.1.5",
     "q": "What is metallic bonding and why are metallic bonds strong?",
     "idea": "Metallic bonding",
     "content": "Metals consist of giant structures of atoms arranged in a regular pattern. The electrons in the outer shell of metal atoms are delocalised and free to move through the whole structure; the sharing of delocalised electrons gives rise to strong metallic bonds. The bonding in metals may be represented in a specified diagrammatic form."
    },
    {
     "code": "5.2.2.1",
     "q": "What are the three states of matter and how does particle theory explain changes of state?",
     "idea": "The three states of matter",
     "content": "The three states of matter are solid, liquid and gas. Melting and freezing take place at the melting point; boiling and condensing take place at the boiling point. The states can be represented by a simple model in which particles are small solid spheres; particle theory can help explain melting, boiling, freezing and condensing. The energy needed to change state depends on the strength of the forces between particles, which depends on the type of bonding and structure; stronger forces mean higher melting and boiling points. Higher tier only: limitations of the simple model include that there are no forces in the model, all particles are represented as spheres, and the spheres are solid. Students should be able to predict states of substances at different temperatures given data, explain the different temperatures at which changes of state occur in terms of energy transfers and types of bonding, recognise that atoms themselves do not have the bulk properties of materials, and (Higher tier only) explain the limitations of the particle theory in relation to changes of state when particles are represented by solid inelastic spheres with no forces between them."
    },
    {
     "code": "5.2.2.2",
     "q": "How are the states of matter shown in chemical equations?",
     "idea": "State symbols",
     "content": "In chemical equations, the three states of matter are shown as (s), (l) and (g), with (aq) for aqueous solutions. Students should be able to include appropriate state symbols in chemical equations for the reactions in this specification."
    },
    {
     "code": "5.2.2.3",
     "q": "Why do ionic compounds have high melting and boiling points and conduct electricity when molten or dissolved?",
     "idea": "Properties of ionic compounds",
     "content": "Ionic compounds have regular structures (giant ionic lattices) with strong electrostatic forces of attraction in all directions between oppositely charged ions. These compounds have high melting points and high boiling points because of the large amounts of energy needed to break the many strong bonds. When melted or dissolved in water, ionic compounds conduct electricity because the ions are free to move so charge can flow. Knowledge of the structures of specific ionic compounds other than sodium chloride is not required."
    },
    {
     "code": "5.2.2.4",
     "q": "Why do substances made of small molecules have low melting and boiling points and not conduct electricity?",
     "idea": "Properties of small molecules",
     "content": "Substances that consist of small molecules are usually gases or liquids with relatively low melting and boiling points, because there are only weak forces between the molecules (intermolecular forces); it is these intermolecular forces, not the covalent bonds, that are overcome when the substance melts or boils. Intermolecular forces increase with the size of the molecules, so larger molecules have higher melting and boiling points. These substances do not conduct electricity because the molecules do not have an overall electric charge. Students should be able to use the idea that intermolecular forces are weak compared with covalent bonds to explain the bulk properties of molecular substances."
    },
    {
     "code": "5.2.2.5",
     "q": "Why are polymers solid at room temperature?",
     "idea": "Polymers",
     "content": "Polymers have very large molecules. The atoms in polymer molecules are linked to other atoms by strong covalent bonds. The intermolecular forces between polymer molecules are relatively strong, so these substances are solids at room temperature. Students should be able to recognise polymers from diagrams showing their bonding and structure."
    },
    {
     "code": "5.2.2.6",
     "q": "Why do giant covalent structures have very high melting points?",
     "idea": "Giant covalent structures",
     "content": "Substances that consist of giant covalent structures are solids with very high melting points; all of the atoms in these structures are linked to other atoms by strong covalent bonds, which must be overcome to melt or boil these substances. Diamond and graphite (forms of carbon) and silicon dioxide (silica) are examples of giant covalent structures. Students should be able to recognise giant covalent structures from diagrams showing their bonding and structure."
    },
    {
     "code": "5.2.2.7",
     "q": "Why do pure metals bend and why are alloys harder than pure metals?",
     "idea": "Properties of metals and alloys",
     "content": "Metals have giant structures of atoms with strong metallic bonding, so most metals have high melting and boiling points. In pure metals, atoms are arranged in layers, which allows metals to be bent and shaped. Pure metals are too soft for many uses and so are mixed with other metals to make alloys, which are harder. Students should be able to explain why alloys are harder than pure metals in terms of distortion of the layers of atoms in the structure of a pure metal."
    },
    {
     "code": "5.2.2.8",
     "q": "Why are metals good conductors of electricity and thermal energy?",
     "idea": "Metals as conductors",
     "content": "Metals are good conductors of electricity because the delocalised electrons in the metal carry electrical charge through the metal. Metals are good conductors of thermal energy because energy is transferred by the delocalised electrons."
    },
    {
     "code": "5.2.3.1",
     "q": "How does the structure of diamond explain its properties?",
     "idea": "Diamond",
     "content": "In diamond, each carbon atom forms four covalent bonds with other carbon atoms in a giant covalent structure, so diamond is very hard, has a very high melting point and does not conduct electricity. Students should be able to explain the properties of diamond in terms of its structure and bonding."
    },
    {
     "code": "5.2.3.2",
     "q": "How does the structure of graphite explain its properties?",
     "idea": "Graphite",
     "content": "In graphite, each carbon atom forms three covalent bonds with three other carbon atoms, forming layers of hexagonal rings which have no covalent bonds between the layers. One electron from each carbon atom is delocalised. Students should be able to explain the properties of graphite in terms of its structure and bonding, and should know that graphite is similar to metals in that it has delocalised electrons."
    },
    {
     "code": "5.2.3.3",
     "q": "What are graphene and fullerenes, and what are they used for?",
     "idea": "Graphene and fullerenes",
     "content": "Graphene is a single layer of graphite and has properties that make it useful in electronics and composites; students should be able to explain the properties of graphene in terms of its structure and bonding. Fullerenes are molecules of carbon atoms with hollow shapes, based on hexagonal rings of carbon atoms but may also contain rings with five or seven carbon atoms. The first fullerene discovered was Buckminsterfullerene (C60), which has a spherical shape. Carbon nanotubes are cylindrical fullerenes with very high length to diameter ratios, useful for nanotechnology, electronics and materials. Students should be able to recognise graphene and fullerenes from diagrams and descriptions of their bonding and structure, and give examples of the uses of fullerenes, including carbon nanotubes."
    }
   ],
   "caseStudies": [],
   "skills": [
    "MS 5b",
    "WS 1.2",
    "MS 4a",
    "MS 1a",
    "MS 1c",
    "WS 1.4"
   ]
  },
  {
   "id": "5.3",
   "component": "C1",
   "option": null,
   "name": "Quantitative chemistry",
   "ideas": [
    {
     "code": "5.3.1.1",
     "q": "Why is mass conserved in a chemical reaction and how is this shown in equations?",
     "idea": "Conservation of mass and balanced chemical equations",
     "content": "The law of conservation of mass states that no atoms are lost or made during a chemical reaction, so the mass of the products equals the mass of the reactants. This means chemical reactions can be represented by symbol equations balanced in terms of the numbers of atoms of each element on both sides. Students should understand the use of multipliers in equations in normal script before a formula and in subscript within a formula."
    },
    {
     "code": "5.3.1.2",
     "q": "What is relative formula mass and how is it used to calculate percentage composition?",
     "idea": "Relative formula mass",
     "content": "The relative formula mass (Mr) of a compound is the sum of the relative atomic masses of the atoms in the numbers shown in the formula. In a balanced chemical equation, the sum of the relative formula masses of the reactants in the quantities shown equals the sum of the relative formula masses of the products in the quantities shown. Students should be able to calculate the percentage by mass in a compound given the relative formula mass and the relative atomic masses."
    },
    {
     "code": "5.3.1.3",
     "q": "Why might mass appear to change during a reaction involving a gas?",
     "idea": "Mass changes when a reactant or product is a gas",
     "content": "Some reactions may appear to involve a change in mass, but this can usually be explained because a reactant or product is a gas and its mass has not been taken into account, eg when a metal reacts with oxygen the mass of the oxide produced is greater than the mass of the metal, or in thermal decomposition of metal carbonates carbon dioxide escapes into the atmosphere leaving the metal oxide as the only solid product. Students should be able to explain any observed changes in mass in non-enclosed systems during a chemical reaction given the balanced symbol equation, and explain these changes in terms of the particle model."
    },
    {
     "code": "5.3.1.4",
     "q": "How is uncertainty in chemical measurements represented and estimated?",
     "idea": "Chemical measurements",
     "content": "Whenever a measurement is made there is always some uncertainty about the result obtained. Students should be able to represent the distribution of results and make estimations of uncertainty, and use the range of a set of measurements about the mean as a measure of uncertainty."
    },
    {
     "code": "5.3.2.1",
     "q": "What is a mole and how does it relate to relative formula mass and the Avogadro constant?",
     "idea": "Moles",
     "content": "Higher tier only: chemical amounts are measured in moles (symbol mol). The mass of one mole of a substance in grams is numerically equal to its relative formula mass. One mole of a substance contains the same number of the stated particles, atoms, molecules or ions as one mole of any other substance. The number of atoms, molecules or ions in a mole of a given substance is the Avogadro constant, value 6.02 x 10^23 per mole. Students should understand that the measurement of amounts in moles can apply to atoms, molecules, ions, electrons, formulae and equations, eg one mole of carbon (C) has the same number of atoms as the number of molecules in one mole of carbon dioxide (CO2). Students should be able to use the relative formula mass of a substance to calculate the number of moles in a given mass of that substance and vice versa (moles = mass ÷ Mr)."
    },
    {
     "code": "5.3.2.2",
     "q": "How can the masses of reactants and products be calculated from balanced symbol equations using moles?",
     "idea": "Amounts of substances in equations",
     "content": "Higher tier only: the masses of reactants and products can be calculated from balanced symbol equations. Chemical equations can be interpreted in terms of moles, eg Mg + 2HCl -> MgCl2 + H2 shows one mole of magnesium reacts with two moles of hydrochloric acid to produce one mole of magnesium chloride and one mole of hydrogen gas. Students should be able to calculate the masses of substances shown in a balanced symbol equation, and calculate the masses of reactants and products from the balanced symbol equation and the mass of a given reactant or product."
    },
    {
     "code": "5.3.2.3",
     "q": "How can the masses of reactants and products be used to work out the balancing numbers in an equation?",
     "idea": "Using moles to balance equations",
     "content": "Higher tier only: the balancing numbers in a symbol equation can be calculated from the masses of reactants and products by converting the masses in grams to amounts in moles and converting the numbers of moles to simple whole number ratios. Students should be able to balance an equation given the masses of reactants and products, and should be able to change the subject of a mathematical equation."
    },
    {
     "code": "5.3.2.4",
     "q": "What is a limiting reactant and how does it affect the amount of product formed?",
     "idea": "Limiting reactants",
     "content": "Higher tier only: in a chemical reaction involving two reactants, it is common to use an excess of one reactant to ensure all of the other reactant is used; the reactant that is completely used up is called the limiting reactant because it limits the amount of products. Students should be able to explain the effect of a limiting quantity of a reactant on the amount of products it is possible to obtain in terms of amounts in moles or masses in grams."
    },
    {
     "code": "5.3.2.5",
     "q": "How is the concentration of a solution measured and calculated?",
     "idea": "Concentration of solutions",
     "content": "Many chemical reactions take place in solutions. The concentration of a solution can be measured in mass per given volume of solution, eg grams per dm3 (g/dm3). Students should be able to calculate the mass of solute in a given volume of solution of known concentration in terms of mass per given volume of solution. Higher tier only: explain how the mass of a solute and the volume of a solution is related to the concentration of the solution."
    }
   ],
   "caseStudies": [],
   "skills": [
    "AT 1",
    "AT 2",
    "AT 6",
    "WS 3.4",
    "WS 4.1",
    "WS 4.2",
    "WS 4.3",
    "WS 4.5",
    "WS 4.6",
    "MS 1a",
    "MS 1b",
    "MS 2a",
    "MS 3a",
    "MS 3b",
    "MS 1c",
    "MS 3c"
   ]
  },
  {
   "id": "5.4",
   "component": "C1",
   "option": null,
   "name": "Chemical changes",
   "ideas": [
    {
     "code": "5.4.1.1",
     "q": "What happens when metals react with oxygen?",
     "idea": "Metal oxides",
     "content": "Metals react with oxygen to produce metal oxides. The reactions are oxidation reactions because the metals gain oxygen. Students should be able to explain reduction and oxidation in terms of loss or gain of oxygen."
    },
    {
     "code": "5.4.1.2",
     "q": "How can metals be arranged in a reactivity series?",
     "idea": "The reactivity series",
     "content": "When metals react with other substances the metal atoms form positive ions; the reactivity of a metal is related to its tendency to form positive ions. Metals can be arranged in a reactivity series. Potassium, sodium, lithium, calcium, magnesium, zinc, iron and copper can be put in order of reactivity from their reactions with water and dilute acids. The non-metals hydrogen and carbon are often included in the reactivity series. A more reactive metal can displace a less reactive metal from a compound. Students should be able to recall and describe the reactions, if any, of potassium, sodium, lithium, calcium, magnesium, zinc, iron and copper with water or dilute acids and, where appropriate, place these metals in order of reactivity; explain how the reactivity of metals with water or dilute acids is related to the tendency of the metal to form its positive ion; and deduce an order of reactivity of metals based on experimental results. Reactions of metals with water and acids are limited to room temperature and do not include reactions with steam."
    },
    {
     "code": "5.4.1.3",
     "q": "How are metals extracted from their compounds by reduction?",
     "idea": "Extraction of metals and reduction",
     "content": "Unreactive metals such as gold are found in the Earth as the metal itself, but most metals are found as compounds that require chemical reactions to extract the metal. Metals less reactive than carbon can be extracted from their oxides by reduction with carbon; reduction involves the loss of oxygen. Knowledge and understanding are limited to the reduction of oxides using carbon; knowledge of the details of processes used in the extraction of metals is not required. Students should be able to interpret or evaluate specific metal extraction processes when given appropriate information, and identify the substances which are oxidised or reduced in terms of gain or loss of oxygen."
    },
    {
     "code": "5.4.1.4",
     "q": "How are oxidation and reduction defined in terms of electrons?",
     "idea": "Oxidation and reduction in terms of electrons",
     "content": "Higher tier only: oxidation is the loss of electrons and reduction is the gain of electrons. Students should be able to write ionic equations for displacement reactions, and identify in a given reaction, symbol equation or half equation which species are oxidised and which are reduced."
    },
    {
     "code": "5.4.2.1",
     "q": "What happens when acids react with metals, and what is the redox nature of these reactions?",
     "idea": "Reactions of acids with metals",
     "content": "Acids react with some metals to produce salts and hydrogen. Higher tier only: students should be able to explain in terms of gain or loss of electrons that these are redox reactions, and identify which species are oxidised and which are reduced in given chemical equations. Knowledge of reactions is limited to those of magnesium, zinc and iron with hydrochloric and sulfuric acids."
    },
    {
     "code": "5.4.2.2",
     "q": "How are acids neutralised and what determines the salt produced?",
     "idea": "Neutralisation of acids and salt production",
     "content": "Acids are neutralised by alkalis (eg soluble metal hydroxides) and bases (eg insoluble metal hydroxides and metal oxides) to produce salts and water, and by metal carbonates to produce salts, water and carbon dioxide. The particular salt produced depends on the acid used (hydrochloric acid produces chlorides, nitric acid produces nitrates, sulfuric acid produces sulfates) and the positive ions in the base, alkali or carbonate. Students should be able to predict products from given reactants and use the formulae of common ions to deduce the formulae of salts."
    },
    {
     "code": "5.4.2.3",
     "q": "How can a pure, dry sample of a soluble salt be prepared? (Required practical activity 8)",
     "idea": "Soluble salts (Required practical activity 8)",
     "content": "Soluble salts can be made from acids by reacting them with solid insoluble substances, such as metals, metal oxides, hydroxides or carbonates. The solid is added to the acid until no more reacts and the excess solid is filtered off to produce a solution of the salt; salt solutions can be crystallised to produce solid salts. Students should be able to describe how to make pure, dry samples of named soluble salts from information provided. Required practical activity 8: preparation of a pure, dry sample of a soluble salt from an insoluble oxide or carbonate, using a Bunsen burner to heat dilute acid and a water bath or electric heater to evaporate the solution. AT skills covered by this practical activity: chemistry AT 2, 3, 4 and 6. This practical activity also provides opportunities to develop WS and MS."
    },
    {
     "code": "5.4.2.4",
     "q": "What is the pH scale and how does it relate hydrogen and hydroxide ion concentration to neutralisation?",
     "idea": "The pH scale and neutralisation",
     "content": "Acids produce hydrogen ions (H+) in aqueous solutions. Aqueous solutions of alkalis contain hydroxide ions (OH-). The pH scale, from 0 to 14, is a measure of the acidity or alkalinity of a solution, measured using universal indicator or a pH probe. A solution with pH 7 is neutral; aqueous solutions of acids have pH less than 7 and aqueous solutions of alkalis have pH greater than 7. In neutralisation reactions between an acid and an alkali, hydrogen ions react with hydroxide ions to produce water (represented by an equation). Students should be able to describe the use of universal indicator or a wide range indicator to measure the approximate pH of a solution, and use the pH scale to identify acidic or alkaline solutions."
    },
    {
     "code": "5.4.2.5",
     "q": "What is the difference between strong and weak acids, and how does pH relate to hydrogen ion concentration?",
     "idea": "Strong and weak acids",
     "content": "Higher tier only: a strong acid is completely ionised in aqueous solution (examples: hydrochloric, nitric and sulfuric acids); a weak acid is only partially ionised in aqueous solution (examples: ethanoic, citric and carbonic acids). For a given concentration of aqueous solutions, the stronger an acid, the lower the pH. As the pH decreases by one unit, the hydrogen ion concentration of the solution increases by a factor of 10. Students should be able to use and explain the terms dilute and concentrated (in terms of amount of substance) and weak and strong (in terms of degree of ionisation) in relation to acids, and describe neutrality and relative acidity in terms of the effect on hydrogen ion concentration and the numerical value of pH (whole numbers only)."
    },
    {
     "code": "5.4.3.1",
     "q": "What is electrolysis and how do ions behave at the electrodes?",
     "idea": "The process of electrolysis",
     "content": "When an ionic compound is melted or dissolved in water, the ions are free to move about within the liquid or solution; these liquids and solutions are able to conduct electricity and are called electrolytes. Passing an electric current through electrolytes causes the ions to move to the electrodes: positively charged ions move to the negative electrode (the cathode), and negatively charged ions move to the positive electrode (the anode). Ions are discharged at the electrodes producing elements; this process is called electrolysis. Higher tier only: throughout electrolysis, Higher tier students should be able to write half equations for the reactions occurring at the electrodes during electrolysis, and may be required to complete and balance supplied half equations."
    },
    {
     "code": "5.4.3.2",
     "q": "What products form when a molten ionic compound is electrolysed?",
     "idea": "Electrolysis of molten ionic compounds",
     "content": "When a simple ionic compound (eg lead bromide) is electrolysed in the molten state using inert electrodes, the metal (lead) is produced at the cathode and the non-metal (bromine) is produced at the anode. Students should be able to predict the products of the electrolysis of binary ionic compounds in the molten state. A safer alternative for practical work is anhydrous zinc chloride."
    },
    {
     "code": "5.4.3.3",
     "q": "How is electrolysis used to extract reactive metals such as aluminium?",
     "idea": "Using electrolysis to extract metals",
     "content": "Metals can be extracted from molten compounds using electrolysis; this is used if the metal is too reactive to be extracted by reduction with carbon or if the metal reacts with carbon. Large amounts of energy are used in the extraction process to melt the compounds and to produce the electrical current. Aluminium is manufactured by the electrolysis of a molten mixture of aluminium oxide and cryolite using carbon as the positive electrode (anode). Students should be able to explain why a mixture is used as the electrolyte, and explain why the positive electrode must be continually replaced."
    },
    {
     "code": "5.4.3.4",
     "q": "What determines which ions are discharged when an aqueous solution is electrolysed? (Required practical activity 9)",
     "idea": "Electrolysis of aqueous solutions (Required practical activity 9)",
     "content": "The ions discharged when an aqueous solution is electrolysed using inert electrodes depend on the relative reactivity of the elements involved. At the negative electrode (cathode), hydrogen is produced if the metal is more reactive than hydrogen. At the positive electrode (anode), oxygen is produced unless the solution contains halide ions, when the halogen is produced; this happens because in the aqueous solution water molecules break down producing hydrogen ions and hydroxide ions that are discharged. Students should be able to predict the products of the electrolysis of aqueous solutions containing a single ionic compound. Required practical activity 9: investigate what happens when aqueous solutions are electrolysed using inert electrodes; this should be an investigation involving developing a hypothesis. AT skills covered by this practical activity: chemistry AT 3 and 7. This practical activity also provides opportunities to develop WS and MS."
    },
    {
     "code": "5.4.3.5",
     "q": "How are the reactions at each electrode during electrolysis represented as half equations?",
     "idea": "Representation of reactions at electrodes as half equations",
     "content": "Higher tier only: during electrolysis, at the cathode (negative electrode), positively charged ions gain electrons and so the reactions are reductions. At the anode (positive electrode), negatively charged ions lose electrons and so the reactions are oxidations. Reactions at electrodes can be represented by half equations, for example 2H+ + 2e- -> H2 and 4OH- -> O2 + 2H2O + 4e- (or 4OH- - 4e- -> O2 + 2H2O)."
    }
   ],
   "caseStudies": [
    "Required practical activity 8: preparation of a pure, dry sample of a soluble salt from an insoluble oxide or carbonate, using a Bunsen burner to heat dilute acid and a water bath or electric heater to evaporate the solution.",
    "Required practical activity 9: investigate what happens when aqueous solutions are electrolysed using inert electrodes. This should be an investigation involving developing a hypothesis."
   ],
   "skills": [
    "AT 6",
    "AT 2",
    "AT 3",
    "AT 4",
    "AT 7",
    "WS 1.2",
    "MS 2h"
   ]
  },
  {
   "id": "5.5",
   "component": "C1",
   "option": null,
   "name": "Energy changes",
   "ideas": [
    {
     "code": "5.5.1.1",
     "q": "What is the difference between exothermic and endothermic reactions, and what are they used for? (Required practical activity 10)",
     "idea": "Energy transfer during exothermic and endothermic reactions (Required practical activity 10)",
     "content": "Energy is conserved in chemical reactions: the amount of energy in the universe at the end of a chemical reaction is the same as before it took place. If a reaction transfers energy to the surroundings, the product molecules must have less energy than the reactants, by the amount transferred. An exothermic reaction transfers energy to the surroundings so the temperature of the surroundings increases; exothermic reactions include combustion, many oxidation reactions and neutralisation. Everyday uses of exothermic reactions include self-heating cans and hand warmers. An endothermic reaction takes in energy from the surroundings so the temperature of the surroundings decreases; endothermic reactions include thermal decompositions and the reaction of citric acid and sodium hydrogencarbonate. Some sports injury packs are based on endothermic reactions. Students should be able to distinguish between exothermic and endothermic reactions on the basis of the temperature change of the surroundings, and evaluate uses and applications of exothermic and endothermic reactions given appropriate information. Limited to measurement of temperature change; calculation of energy changes or delta H is not required. Required practical activity 10: investigate the variables that affect temperature changes in reacting solutions such as, eg acid plus metals, acid plus carbonates, neutralisations, displacement of metals. AT skills covered by this practical activity: chemistry AT 1, 3, 5 and 6. This practical activity also provides opportunities to develop WS and MS."
    },
    {
     "code": "5.5.1.2",
     "q": "How do reaction profiles show the energy changes and activation energy of a reaction?",
     "idea": "Reaction profiles",
     "content": "Chemical reactions can occur only when reacting particles collide with each other with sufficient energy; the minimum amount of energy that particles must have to react is called the activation energy. Reaction profiles can be used to show the relative energies of reactants and products, the activation energy and the overall energy change of a reaction. Students should be able to draw simple reaction profiles (energy level diagrams) for exothermic and endothermic reactions showing the relative energies of reactants and products, the activation energy and the overall energy change, with a curved line to show the energy as the reaction proceeds; use reaction profiles to identify reactions as exothermic or endothermic; and explain that the activation energy is the energy needed for a reaction to occur."
    },
    {
     "code": "5.5.1.3",
     "q": "How can the overall energy change of a reaction be calculated from bond energies?",
     "idea": "The energy change of reactions",
     "content": "Higher tier only: during a chemical reaction, energy must be supplied to break bonds in the reactants, and energy is released when bonds in the products are formed. The energy needed to break bonds and the energy released when bonds are formed can be calculated from bond energies. The difference between the sum of the energy needed to break bonds in the reactants and the sum of the energy released when bonds in the products are formed is the overall energy change of the reaction. In an exothermic reaction, the energy released from forming new bonds is greater than the energy needed to break existing bonds; in an endothermic reaction, the energy needed to break existing bonds is greater than the energy released from forming new bonds. Students should be able to calculate the energy transferred in chemical reactions using bond energies supplied."
    }
   ],
   "caseStudies": [
    "Required practical activity 10: investigate the variables that affect temperature changes in reacting solutions such as, eg acid plus metals, acid plus carbonates, neutralisations, displacement of metals."
   ],
   "skills": [
    "AT 5",
    "AT 1",
    "AT 3",
    "AT 6",
    "MS 1a"
   ]
  },
  {
   "id": "5.6",
   "component": "C2",
   "option": null,
   "name": "The rate and extent of chemical change",
   "ideas": [
    {
     "code": "5.6.1.1",
     "q": "How is the rate of a chemical reaction calculated?",
     "idea": "Calculating rates of reactions",
     "content": "Rate can be found by measuring the quantity of a reactant used or product formed over time: mean rate of reaction = quantity of reactant used / time taken; mean rate of reaction = quantity of product formed / time taken. Quantity is measured as mass in grams or volume in cm3; units of rate may be g/s or cm3/s. Higher tier only: quantity of reactants may be given in moles and rate in mol/s. Students should be able to: calculate the mean rate of a reaction from given data; draw and interpret graphs of quantity of product/reactant against time; draw tangents to the curves and use the slope as a measure of rate. Higher tier only: calculate the gradient of a tangent to the curve as a measure of rate at a specific time."
    },
    {
     "code": "5.6.1.2",
     "q": "What factors affect the rate of a chemical reaction, and how is this investigated? (Required practical activity 11)",
     "idea": "Factors which affect the rates of chemical reactions (Required practical activity 11)",
     "content": "Factors affecting rate include: concentration of reactants in solution, pressure of reacting gases, surface area of solid reactants, temperature, and presence of catalysts. Students should recall how changing these factors affects rate. Required practical activity 11: investigate how changes in concentration affect the rates of reactions, using a method involving measuring the volume of a gas produced and a method involving a change in colour or turbidity; should be an investigation involving developing a hypothesis. AT skills covered: chemistry AT 1, 3, 5 and 6; also provides opportunities to develop WS and MS."
    },
    {
     "code": "5.6.1.3",
     "q": "How does collision theory explain the effect of concentration, pressure and temperature on rate?",
     "idea": "Collision theory and activation energy",
     "content": "Collision theory: reactions occur only when particles collide with sufficient energy; the minimum energy needed to react is the activation energy. Increasing concentration of reactants in solution, pressure of reacting gases, and surface area of solid reactants increases the frequency of collisions and so increases rate. Increasing temperature increases both the frequency and energy of collisions, so increases rate. Students should be able to: predict and explain, using collision theory, the effects of changing concentration, pressure and temperature on rate; predict and explain the effect of changes in the size of pieces of a reacting solid in terms of surface area to volume ratio; use simple ideas about proportionality when using collision theory to explain the effect of a factor on rate."
    },
    {
     "code": "5.6.1.4",
     "q": "How do catalysts affect the rate of a reaction, and how can catalytic action be explained?",
     "idea": "Catalysts",
     "content": "Catalysts change the rate of chemical reactions but are not used up during the reaction; different reactions need different catalysts; enzymes act as catalysts in biological systems. Catalysts increase rate by providing a different pathway with a lower activation energy; this can be shown on a reaction profile for a catalysed reaction. Students should identify catalysts from their effect on rate and because they are not included in the chemical equation for the reaction, and explain catalytic action in terms of activation energy. Students do not need to know names of catalysts other than those specified in the subject content."
    },
    {
     "code": "5.6.2.1",
     "q": "What is a reversible reaction and how can its direction be changed?",
     "idea": "Reversible reactions",
     "content": "In some chemical reactions the products can react to produce the original reactants; such reactions are called reversible reactions and are represented A + B ⇌ C + D. The direction of reversible reactions can be changed by changing the conditions."
    },
    {
     "code": "5.6.2.2",
     "q": "How are energy changes related in a reversible reaction?",
     "idea": "Energy changes and reversible reactions",
     "content": "If a reversible reaction is exothermic in one direction, it is endothermic in the opposite direction, and the same amount of energy is transferred in each case."
    },
    {
     "code": "5.6.2.3",
     "q": "What is equilibrium in a reversible reaction?",
     "idea": "Equilibrium",
     "content": "When a reversible reaction occurs in apparatus that prevents the escape of reactants and products, equilibrium is reached when the forward and reverse reactions occur at exactly the same rate."
    },
    {
     "code": "5.6.2.4",
     "q": "How does changing conditions affect a system at equilibrium?",
     "idea": "The effect of changing conditions on equilibrium (HT only)",
     "content": "Higher tier only: the relative amounts of all reactants and products at equilibrium depend on the conditions of the reaction. If a system at equilibrium has a condition changed, the system responds to counteract the change. The effects of changing conditions on a system at equilibrium can be predicted using Le Chatelier's Principle. Students should be able to make qualitative predictions about the effect of changes on systems at equilibrium when given appropriate information."
    },
    {
     "code": "5.6.2.5",
     "q": "How does changing concentration affect a system at equilibrium?",
     "idea": "The effect of changing concentration (HT only)",
     "content": "Higher tier only: if the concentration of a reactant or product is changed, the system is no longer at equilibrium and the concentrations of all substances change until equilibrium is reached again. If the concentration of a reactant is increased, more products form until equilibrium is reached again. If the concentration of a product is decreased, more reactants react until equilibrium is reached again. Students should be able to interpret appropriate given data to predict the effect of a change in concentration of a reactant or product on given reactions at equilibrium."
    },
    {
     "code": "5.6.2.6",
     "q": "How does changing temperature affect a system at equilibrium?",
     "idea": "The effect of temperature changes on equilibrium (HT only)",
     "content": "Higher tier only: if temperature of a system at equilibrium is increased, the relative amount of products increases for an endothermic reaction and decreases for an exothermic reaction. If temperature is decreased, the relative amount of products decreases for an endothermic reaction and increases for an exothermic reaction. Students should be able to interpret appropriate given data to predict the effect of a change in temperature on given reactions at equilibrium."
    },
    {
     "code": "5.6.2.7",
     "q": "How does changing pressure affect a system at equilibrium?",
     "idea": "The effect of pressure changes on equilibrium (HT only)",
     "content": "Higher tier only: for gaseous reactions at equilibrium, an increase in pressure causes the equilibrium position to shift towards the side with the smaller number of molecules as shown by the symbol equation for that reaction; a decrease in pressure causes the equilibrium position to shift towards the side with the larger number of molecules. Students should be able to interpret appropriate given data to predict the effect of pressure changes on given reactions at equilibrium."
    }
   ],
   "caseStudies": [
    "Required practical activity 11: investigate how changes in concentration affect the rates of reactions by a method involving measuring the volume of a gas produced and a method involving a change in colour or turbidity."
   ],
   "skills": [
    "MS 1a",
    "MS 1c",
    "MS 1d",
    "MS 4a",
    "MS 4b",
    "MS 4c",
    "MS 4d",
    "MS 4e",
    "WS 1.2",
    "MS 5c",
    "AT 5"
   ]
  },
  {
   "id": "5.7",
   "component": "C2",
   "option": null,
   "name": "Organic chemistry",
   "ideas": [
    {
     "code": "5.7.1.1",
     "q": "What is crude oil made of, and what are alkanes?",
     "idea": "Crude oil, hydrocarbons and alkanes",
     "content": "Crude oil is a finite resource found in rocks; it is the remains of an ancient biomass consisting mainly of plankton buried in mud. Crude oil is a mixture of a very large number of compounds, most of which are hydrocarbons (molecules made of hydrogen and carbon atoms only). Most of the hydrocarbons in crude oil are alkanes, with general formula CnH2n+2. The first four alkanes are methane, ethane, propane and butane; alkane molecules can be represented in molecular formula form (e.g. C2H6) or structural form. Students should be able to recognise substances as alkanes given their formulae in these forms. Students do not need to know the names of specific alkanes other than methane, ethane, propane and butane."
    },
    {
     "code": "5.7.1.2",
     "q": "How is crude oil separated into useful fractions?",
     "idea": "Fractional distillation and petrochemicals",
     "content": "The many hydrocarbons in crude oil may be separated into fractions, each containing molecules with a similar number of carbon atoms, by fractional distillation. The fractions can be processed to produce fuels and feedstock for the petrochemical industry, including petrol, diesel oil, kerosene, heavy fuel oil and liquefied petroleum gases, and materials such as solvents, lubricants, polymers and detergents. The variety of carbon compounds arises from the ability of carbon atoms to form families of similar compounds. Students should be able to explain how fractional distillation works in terms of evaporation and condensation. Knowledge of the names of other specific fractions or fuels is not required."
    },
    {
     "code": "5.7.1.3",
     "q": "How do the properties of hydrocarbons depend on molecular size, and what happens when they combust?",
     "idea": "Properties of hydrocarbons",
     "content": "Some properties of hydrocarbons depend on the size of their molecules, including boiling point, viscosity and flammability; these influence how hydrocarbons are used as fuels. Students should be able to recall how boiling point, viscosity and flammability change with increasing molecular size, limited to these three properties. Combustion of hydrocarbon fuels releases energy; carbon and hydrogen are oxidised, and complete combustion of a hydrocarbon produces carbon dioxide and water. Students should be able to write balanced equations for the complete combustion of hydrocarbons with a given formula."
    },
    {
     "code": "5.7.1.4",
     "q": "How is cracking carried out, and why are alkenes important products of it?",
     "idea": "Cracking and alkenes",
     "content": "Hydrocarbons can be broken down (cracked) to produce smaller, more useful molecules, by methods including catalytic cracking and steam cracking. Students should be able to describe in general terms the conditions used for catalytic cracking and steam cracking. Products of cracking include alkanes and alkenes; alkenes are more reactive than alkanes and react with bromine water (used as a test for alkenes), giving a colour change students should recall. There is high demand for fuels with small molecules, so some cracking products are useful as fuels; alkenes are used to produce polymers and as starting materials for other chemicals. Students should be able to balance chemical equations for cracking given the formulae of reactants and products, and give examples to illustrate the usefulness of cracking and how modern life depends on the uses of hydrocarbons. Students do not need to know the formulae or names of individual alkenes."
    }
   ],
   "caseStudies": [],
   "skills": [
    "WS 1.2",
    "WS 4.1"
   ]
  },
  {
   "id": "5.8",
   "component": "C2",
   "option": null,
   "name": "Chemical analysis",
   "ideas": [
    {
     "code": "5.8.1.1",
     "q": "What is a pure substance in chemistry, and how can purity be tested?",
     "idea": "Pure substances",
     "content": "In chemistry, a pure substance is a single element or compound, not mixed with any other substance. Pure elements and compounds melt and boil at specific temperatures; melting point and boiling point data can be used to distinguish pure substances from mixtures. In everyday language, 'pure' can mean a substance with nothing added, unadulterated and in its natural state (e.g. pure milk). Students should be able to use melting point and boiling point data to distinguish pure from impure substances."
    },
    {
     "code": "5.8.1.2",
     "q": "What is a formulation?",
     "idea": "Formulations",
     "content": "A formulation is a mixture that has been designed as a useful product; many products are complex mixtures in which each chemical has a particular purpose. Formulations are made by mixing the components in carefully measured quantities to ensure the product has the required properties. Formulations include fuels, cleaning agents, paints, medicines, alloys, fertilisers and foods. Students should be able to identify formulations given appropriate information. Students do not need to know the names of components in proprietary products."
    },
    {
     "code": "5.8.1.3",
     "q": "How does paper chromatography separate and help identify substances? (Required practical activity 12)",
     "idea": "Chromatography (Required practical activity 12)",
     "content": "Chromatography can be used to separate mixtures and give information to help identify substances; it involves a stationary phase and a mobile phase, and separation depends on the distribution of substances between the phases. The ratio of the distance moved by a compound (centre of spot from origin) to the distance moved by the solvent is its Rf value: Rf = distance moved by substance / distance moved by solvent. Different compounds have different Rf values in different solvents; a mixture may separate into different spots depending on solvent, but a pure compound produces a single spot in all solvents. Students should be able to: explain how paper chromatography separates mixtures; suggest how chromatographic methods can be used for distinguishing pure from impure substances; interpret chromatograms and determine Rf values from chromatograms; provide answers to an appropriate number of significant figures. Required practical activity 12: investigate how paper chromatography can be used to separate and tell the difference between coloured substances. Students should calculate Rf values. AT skills covered by this practical activity: chemistry AT 1 and 4; also provides opportunities to develop WS and MS."
    },
    {
     "code": "5.8.2.1",
     "q": "How is hydrogen gas tested for?",
     "idea": "Test for hydrogen",
     "content": "The test for hydrogen uses a burning splint held at the open end of a test tube of the gas. Hydrogen burns rapidly with a pop sound."
    },
    {
     "code": "5.8.2.2",
     "q": "How is oxygen gas tested for?",
     "idea": "Test for oxygen",
     "content": "The test for oxygen uses a glowing splint inserted into a test tube of the gas. The splint relights in oxygen."
    },
    {
     "code": "5.8.2.3",
     "q": "How is carbon dioxide gas tested for?",
     "idea": "Test for carbon dioxide",
     "content": "The test for carbon dioxide uses an aqueous solution of calcium hydroxide (limewater). When carbon dioxide is shaken with or bubbled through limewater, the limewater turns milky (cloudy)."
    },
    {
     "code": "5.8.2.4",
     "q": "How is chlorine gas tested for?",
     "idea": "Test for chlorine",
     "content": "The test for chlorine uses litmus paper. When damp litmus paper is put into chlorine gas, the litmus paper is bleached and turns white."
    }
   ],
   "caseStudies": [
    "Required practical activity 12: investigate how paper chromatography can be used to separate and tell the difference between coloured substances. Students should calculate Rf values."
   ],
   "skills": [
    "WS 2.2",
    "WS 4.1",
    "WS 1.4",
    "WS 3.1",
    "WS 3.2",
    "WS 3.3",
    "MS 1a",
    "MS 1c",
    "MS 1d",
    "MS 2a"
   ]
  },
  {
   "id": "5.9",
   "component": "C2",
   "option": null,
   "name": "Chemistry of the atmosphere",
   "ideas": [
    {
     "code": "5.9.1.1",
     "q": "What is the composition of today's atmosphere?",
     "idea": "The proportions of different gases in the atmosphere",
     "content": "For 200 million years, the proportions of different gases in the atmosphere have been much the same as today: about four-fifths (approximately 80%) nitrogen; about one-fifth (approximately 20%) oxygen; small proportions of various other gases, including carbon dioxide, water vapour and noble gases."
    },
    {
     "code": "5.9.1.2",
     "q": "What was the Earth's early atmosphere like, and how do we know?",
     "idea": "The Earth's early atmosphere",
     "content": "Theories about the Earth's early atmosphere and its formation have changed and developed over time; evidence is limited because of the 4.6 billion year timescale. One theory suggests that during the first billion years there was intense volcanic activity that released gases forming the early atmosphere, and water vapour that condensed to form the oceans; at the start of this period the atmosphere may have been like Mars and Venus today, mainly carbon dioxide with little or no oxygen. Volcanoes also produced nitrogen, which gradually built up in the atmosphere, and there may have been small proportions of methane and ammonia. When the oceans formed, carbon dioxide dissolved in the water and carbonates were precipitated, producing sediments and reducing atmospheric carbon dioxide. No knowledge of other theories is required. Students should be able to, given appropriate information, interpret evidence and evaluate different theories about the Earth's early atmosphere."
    },
    {
     "code": "5.9.1.3",
     "q": "How did oxygen levels in the atmosphere increase?",
     "idea": "How oxygen increased",
     "content": "Algae and plants produced the oxygen now in the atmosphere by photosynthesis (represented by the photosynthesis equation). Algae first produced oxygen about 2.7 billion years ago, and soon after this oxygen appeared in the atmosphere. Over the next billion years plants evolved and the percentage of oxygen gradually increased to a level that enabled animals to evolve."
    },
    {
     "code": "5.9.1.4",
     "q": "How and why did carbon dioxide levels in the atmosphere decrease?",
     "idea": "How carbon dioxide decreased",
     "content": "Algae and plants decreased the percentage of carbon dioxide in the atmosphere by photosynthesis. Carbon dioxide was also decreased by the formation of sedimentary rocks and fossil fuels that contain carbon. Students should be able to: describe the main changes in the atmosphere over time and some of the likely causes of these changes; describe and explain the formation of deposits of limestone, coal, crude oil and natural gas."
    },
    {
     "code": "5.9.2.1",
     "q": "What are greenhouse gases and how do they affect Earth's temperature?",
     "idea": "Greenhouse gases",
     "content": "Greenhouse gases in the atmosphere maintain temperatures on Earth high enough to support life. Water vapour, carbon dioxide and methane are greenhouse gases. Students should be able to describe the greenhouse effect in terms of the interaction of short and long wavelength radiation with matter."
    },
    {
     "code": "5.9.2.2",
     "q": "Which human activities increase greenhouse gases, and how reliable is the evidence for climate change?",
     "idea": "Human activities which contribute to an increase in greenhouse gases in the atmosphere",
     "content": "Some human activities increase the amounts of greenhouse gases in the atmosphere, including carbon dioxide and methane. Students should be able to recall two human activities that increase the amounts of each of carbon dioxide and methane. Based on peer-reviewed evidence, many scientists believe human activities will cause the temperature of the Earth's atmosphere to increase at the surface, resulting in global climate change; however, it is difficult to model such complex systems, leading to simplified models, speculation and opinions in the media that may be based on only parts of the evidence and may be biased. Students should be able to: evaluate the quality of evidence in a report about global climate change given appropriate information; describe uncertainties in the evidence base; recognise the importance of peer review of results and of communicating results to a wide range of audiences."
    },
    {
     "code": "5.9.2.3",
     "q": "What are the potential effects of global climate change?",
     "idea": "Global climate change",
     "content": "An increase in average global temperature is a major cause of climate change; there are several potential effects of global climate change. Students should be able to: describe briefly four potential effects of global climate change; discuss the scale, risk and environmental implications of global climate change."
    },
    {
     "code": "5.9.2.4",
     "q": "What is a carbon footprint and how can it be reduced?",
     "idea": "The carbon footprint and its reduction",
     "content": "The carbon footprint is the total amount of carbon dioxide and other greenhouse gases emitted over the full life cycle of a product, service or event; it can be reduced by reducing emissions of carbon dioxide and methane. Students should be able to: describe actions to reduce emissions of carbon dioxide and methane; give reasons why actions may be limited."
    },
    {
     "code": "5.9.3.1",
     "q": "What atmospheric pollutants are produced by burning fuels?",
     "idea": "Atmospheric pollutants from fuels",
     "content": "Combustion of fuels is a major source of atmospheric pollutants. Most fuels, including coal, contain carbon and/or hydrogen and may also contain some sulfur. Gases released when a fuel is burned may include carbon dioxide, water vapour, carbon monoxide, sulfur dioxide and oxides of nitrogen; solid particles and unburned hydrocarbons may also be released, forming particulates. Students should be able to: describe how carbon monoxide, soot (carbon particles), sulfur dioxide and oxides of nitrogen are produced by burning fuels; predict the products of combustion of a fuel given appropriate information about its composition and the conditions in which it is used."
    },
    {
     "code": "5.9.3.2",
     "q": "What are the properties and effects of the main atmospheric pollutants?",
     "idea": "Properties and effects of atmospheric pollutants",
     "content": "Carbon monoxide is a toxic gas; it is colourless and odourless, so not easily detected. Sulfur dioxide and oxides of nitrogen cause respiratory problems in humans and cause acid rain. Particulates cause global dimming and health problems for humans. Students should be able to describe and explain the problems caused by increased amounts of these pollutants in the air."
    }
   ],
   "caseStudies": [],
   "skills": [
    "MS 1c",
    "WS 1.1",
    "WS 1.2",
    "WS 1.3",
    "WS 3.5",
    "WS 3.6",
    "WS 4.1",
    "WS 1.6",
    "WS 1.5",
    "WS 1.4"
   ]
  },
  {
   "id": "5.10",
   "component": "C2",
   "option": null,
   "name": "Using resources",
   "ideas": [
    {
     "code": "5.10.1.1",
     "q": "How do humans use the Earth's resources, and what is sustainable development?",
     "idea": "Using the Earth's resources and sustainable development",
     "content": "Humans use the Earth's resources to provide warmth, shelter, food and transport. Natural resources, supplemented by agriculture, provide food, timber, clothing and fuels. Finite resources from the Earth, oceans and atmosphere are processed to provide energy and materials. Chemistry plays an important role in improving agricultural and industrial processes to provide new products and in sustainable development, which meets the needs of current generations without compromising the ability of future generations to meet their own needs. Students should be able to: state examples of natural products that are supplemented or replaced by agricultural and synthetic products; distinguish between finite and renewable resources given appropriate information; extract and interpret information about resources from charts, graphs and tables; use orders of magnitude to evaluate the significance of data."
    },
    {
     "code": "5.10.1.2",
     "q": "How is potable water produced, and why is it needed? (Required practical activity 13)",
     "idea": "Potable water (Required practical activity 13)",
     "content": "Water of appropriate quality is essential for life; drinking water should have sufficiently low levels of dissolved salts and microbes. Water that is safe to drink is called potable water; it is not pure water in the chemical sense because it contains dissolved substances. The methods used to produce potable water depend on available supplies of water and local conditions. In the UK, rain provides fresh water with low levels of dissolved substances that collects in the ground, lakes and rivers, and most potable water is produced by choosing an appropriate source of fresh water, passing the water through filter beds, and sterilising (using chlorine, ozone or ultraviolet light). If supplies of fresh water are limited, desalination of salty water or sea water may be required, by distillation or by processes using membranes such as reverse osmosis; these require large amounts of energy. Students should be able to: distinguish between potable water and pure water; describe the differences in treatment of ground water and salty water; give reasons for the steps used to produce potable water. Required practical activity 13: analysis and purification of water samples from different sources, including pH, dissolved solids and distillation. AT skills covered by this practical activity: chemistry AT 2, 3 and 4; also provides opportunities to develop WS and MS."
    },
    {
     "code": "5.10.1.3",
     "q": "How is waste water treated before being released into the environment?",
     "idea": "Waste water treatment",
     "content": "Urban lifestyles and industrial processes produce large amounts of waste water requiring treatment before release into the environment. Sewage and agricultural waste water require removal of organic matter and harmful microbes; industrial waste water may require removal of organic matter and harmful chemicals. Sewage treatment includes: screening and grit removal; sedimentation to produce sewage sludge and effluent; anaerobic digestion of sewage sludge; aerobic biological treatment of effluent. Students should be able to comment on the relative ease of obtaining potable water from waste, ground and salt water."
    },
    {
     "code": "5.10.1.4",
     "q": "How can copper be extracted from low-grade ores by alternative biological methods?",
     "idea": "Alternative methods of extracting metals (HT only)",
     "content": "Higher tier only: the Earth's resources of metal ores are limited. Copper ores are becoming scarce, and new ways of extracting copper from low-grade ores include phytomining and bioleaching, which avoid traditional mining methods of digging, moving and disposing of large amounts of rock. Phytomining uses plants to absorb metal compounds; the plants are harvested and burned to produce ash containing metal compounds. Bioleaching uses bacteria to produce leachate solutions containing metal compounds. The metal compounds can be processed to obtain the metal; for example, copper can be obtained from solutions of copper compounds by displacement using scrap iron or by electrolysis. Students should be able to evaluate alternative biological methods of metal extraction, given appropriate information."
    },
    {
     "code": "5.10.2.1",
     "q": "What is a life cycle assessment and how is it used to evaluate a product's environmental impact?",
     "idea": "Life cycle assessment",
     "content": "Life cycle assessments (LCAs) are carried out to assess the environmental impact of products at each stage: extracting and processing raw materials; manufacturing and packaging; use and operation during its lifetime; disposal at the end of its useful life, including transport and distribution at each stage. Use of water, resources, energy sources and production of some wastes can be fairly easily quantified; allocating numerical values to pollutant effects is less straightforward and requires value judgements, so LCA is not a purely objective process. Selective or abbreviated LCAs can be devised to evaluate a product but can be misused to reach pre-determined conclusions, e.g. in support of advertising claims. Students should be able to carry out simple comparative LCAs for shopping bags made from plastic and paper; LCAs should compare the impact on the environment of the stages in the life of a product, only quantified where data is readily available for energy, water, resources and wastes; students should be able to interpret LCAs of materials or products given appropriate information."
    },
    {
     "code": "5.10.2.2",
     "q": "How does reducing, reusing and recycling materials lessen environmental impact?",
     "idea": "Ways of reducing the use of resources",
     "content": "The reduction in use, reuse and recycling of materials by end users reduces the use of limited resources, use of energy sources, waste and environmental impacts. Metals, glass, building materials, clay ceramics and most plastics are produced from limited raw materials, and much of the energy for the processes comes from limited resources; obtaining raw materials from the Earth by quarrying and mining causes environmental impacts. Some products, such as glass bottles, can be reused; glass bottles can be crushed and melted to make different glass products. Other products cannot be reused and so are recycled for a different use; metals can be recycled by melting and recasting or reforming into different products. The amount of separation required for recycling depends on the material and the properties required of the final product; for example, some scrap steel can be added to iron from a blast furnace to reduce the amount of iron that needs to be extracted from iron ore. Students should be able to evaluate ways of reducing the use of limited resources, given appropriate information."
    }
   ],
   "caseStudies": [
    "Required practical activity 13: analysis and purification of water samples from different sources, including pH, dissolved solids and distillation."
   ],
   "skills": [
    "WS 3.2",
    "MS 2c",
    "MS 4a",
    "MS 2h",
    "WS 1.3",
    "WS 1.4",
    "WS 1.5",
    "MS 1a",
    "MS 1c",
    "MS 1d",
    "MS 2a"
   ]
  },
  {
   "id": "10.1.2",
   "component": "C1",
   "option": null,
   "name": "Use of apparatus and techniques: Chemistry",
   "ideas": [
    {
     "code": "AT 1",
     "q": "Measuring",
     "idea": "Apparatus for a range of measurements",
     "content": "Use of appropriate apparatus to make and record a range of measurements accurately, including mass, time, temperature, and volume of liquids and gases (links to A-level AT a)."
    },
    {
     "code": "AT 2",
     "q": "Heating safely",
     "idea": "Heating devices and techniques",
     "content": "Safe use of appropriate heating devices and techniques including use of a Bunsen burner and a water bath or electric heater (links to A-level AT b)."
    },
    {
     "code": "AT 3",
     "q": "Monitoring reactions and pH",
     "idea": "Conducting and monitoring chemical reactions",
     "content": "Use of appropriate apparatus and techniques for conducting and monitoring chemical reactions, including appropriate reagents and/or techniques for the measurement of pH in different situations (links to A-level AT a and d)."
    },
    {
     "code": "AT 4",
     "q": "Separating mixtures",
     "idea": "Purifying and separating chemical mixtures",
     "content": "Safe use of a range of equipment to purify and/or separate chemical mixtures including evaporation, filtration, crystallisation, chromatography and distillation (links to A-level AT d and g)."
    },
    {
     "code": "AT 5",
     "q": "Observations and rates",
     "idea": "Observations during reactions and rates of reaction",
     "content": "Making and recording of appropriate observations during chemical reactions including changes in temperature and the measurement of rates of reaction by a variety of methods such as production of gas and colour change (links to A-level AT a and l)."
    },
    {
     "code": "AT 6",
     "q": "Handling substances",
     "idea": "Handling gases, liquids and solids",
     "content": "Safe use and careful handling of gases, liquids and solids, including careful mixing of reagents under controlled conditions, using appropriate apparatus to explore chemical changes and/or products (links to A-level AT a and k)."
    },
    {
     "code": "AT 7",
     "q": "Electrochemical cells",
     "idea": "Electrochemical cells",
     "content": "Use of appropriate apparatus and techniques to draw, set up and use electrochemical cells for separation and production of elements and compounds (links to A-level AT d and j)."
    }
   ],
   "caseStudies": [],
   "skills": []
  },
  {
   "id": "6.1",
   "component": "P1",
   "option": null,
   "name": "Energy",
   "ideas": [
    {
     "code": "6.1.1.1",
     "q": "What happens to the way energy is stored when a system changes?",
     "idea": "Energy stores and systems",
     "content": "A system is an object or group of objects. There are changes in the way energy is stored when a system changes. Students should be able to describe all the changes involved in the way energy is stored when a system changes, for common situations, for example: an object projected upwards; a moving object hitting an obstacle; an object accelerated by a constant force; a vehicle slowing down; bringing water to a boil in an electric kettle. Students should be able to calculate the changes in energy involved when a system is changed by heating, work done by forces, and work done when a current flows, and use calculations to show on a common scale how the overall energy in a system is redistributed when the system is changed."
    },
    {
     "code": "6.1.1.2",
     "q": "How is the energy of a moving object, a stretched spring or a raised object calculated?",
     "idea": "Changes in energy",
     "content": "Students should be able to calculate the amount of energy associated with a moving object, a stretched spring and an object raised above ground level. Kinetic energy: kinetic energy = 0.5 × mass × speed²; Ek = ½ m v²; kinetic energy, Ek, in joules, J; mass, m, in kilograms, kg; speed, v, in metres per second, m/s. Elastic potential energy (assuming the limit of proportionality has not been exceeded): elastic potential energy = 0.5 × spring constant × extension²; Ee = ½ k e²; elastic potential energy, Ee, in joules, J; spring constant, k, in newtons per metre, N/m; extension, e, in metres, m. Gravitational potential energy: g.p.e. = mass × gravitational field strength × height; Ep = m g h; gravitational potential energy, Ep, in joules, J; mass, m, in kilograms, kg; gravitational field strength, g, in newtons per kilogram, N/kg (the value of g will be given in any calculation); height, h, in metres, m. Students should be able to recall and apply the kinetic and elastic potential energy equations, and apply the gravitational potential energy equation, which is given on the Physics equation sheet."
    },
    {
     "code": "6.1.1.3",
     "q": "How is the change in thermal energy of a system calculated as its temperature changes, and how is specific heat capacity measured?",
     "idea": "Energy changes in systems (Required practical activity 14)",
     "content": "The amount of energy stored in or released from a system as its temperature changes can be calculated using the equation: change in thermal energy = mass × specific heat capacity × temperature change; ∆E = m c ∆θ; change in thermal energy, ∆E, in joules, J; mass, m, in kilograms, kg; specific heat capacity, c, in joules per kilogram per degree Celsius, J/kg °C; temperature change, ∆θ, in degrees Celsius, °C. The specific heat capacity of a substance is the amount of energy required to raise the temperature of one kilogram of the substance by one degree Celsius. Students should be able to apply this equation, given on the Physics equation sheet. Required practical activity 14: an investigation to determine the specific heat capacity of one or more materials, linking the decrease of one energy store (or work done) to the increase in temperature and subsequent increase in thermal energy stored. AT skills covered by this practical activity: physics AT 1 and 5; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.1.1.4",
     "q": "What is power and how is it calculated?",
     "idea": "Power",
     "content": "Power is defined as the rate at which energy is transferred or the rate at which work is done. power = energy transferred / time; P = E/t. power = work done / time; P = W/t. power, P, in watts, W; energy transferred, E, in joules, J; time, t, in seconds, s; work done, W, in joules, J. An energy transfer of 1 joule per second is equal to a power of 1 watt. Students should be able to give examples that illustrate the definition of power, eg comparing two electric motors that both lift the same weight through the same height but one does it faster than the other, and should be able to recall and apply both equations."
    },
    {
     "code": "6.1.2.1",
     "q": "How is energy conserved and dissipated when a system changes?",
     "idea": "Energy transfers in a system",
     "content": "Energy can be transferred usefully, stored or dissipated, but cannot be created or destroyed. Students should be able to describe with examples where there are energy transfers in a closed system, that there is no net change to the total energy, and describe, with examples, how in all system changes energy is dissipated, so that it is stored in less useful ways (often described as 'wasted'). Students should be able to explain ways of reducing unwanted energy transfers, for example through lubrication and the use of thermal insulation. The higher the thermal conductivity of a material the higher the rate of energy transfer by conduction across the material. Students should be able to describe how the rate of cooling of a building is affected by the thickness and thermal conductivity of its walls; the definition of thermal conductivity itself is not required."
    },
    {
     "code": "6.1.2.2",
     "q": "How is the efficiency of an energy transfer calculated, and how can it be increased?",
     "idea": "Efficiency",
     "content": "The energy efficiency for any energy transfer can be calculated using the equation: efficiency = useful output energy transfer / total input energy transfer. Efficiency may also be calculated using: efficiency = useful power output / total power input. Students should be able to recall and apply both equations, and may be required to calculate or use efficiency values as a decimal or as a percentage. Higher tier only: Students should be able to describe ways to increase the efficiency of an intended energy transfer."
    },
    {
     "code": "6.1.3",
     "q": "What are the main energy resources, how are they used, and what issues arise from their use?",
     "idea": "National and global energy resources",
     "content": "The main energy resources available for use on Earth include: fossil fuels (coal, oil and gas), nuclear fuel, bio-fuel, wind, hydro-electricity, geothermal, the tides, the Sun and water waves. A renewable energy resource is one that is being (or can be) replenished as it is used. The uses of energy resources include transport, electricity generation and heating. Students should be able to: describe the main energy sources available; distinguish between renewable and non-renewable energy resources; compare ways that different energy resources are used (transport, electricity generation, heating); understand why some energy resources are more reliable than others; describe the environmental impact arising from the use of different energy resources; and explain patterns and trends in the use of energy resources. Descriptions of how energy resources are used to generate electricity are not required. Students should be able to consider the environmental issues that may arise from the use of different energy resources, and show that science has the ability to identify environmental issues arising from the use of energy resources but not always the power to deal with the issues because of political, social, ethical or economic considerations."
    }
   ],
   "caseStudies": [
    "Required practical activity 14: an investigation to determine the specific heat capacity of one or more materials."
   ],
   "skills": [
    "WS 1.2",
    "WS 1.3",
    "WS 1.4",
    "WS 3.5",
    "WS 4.3",
    "WS 4.4",
    "WS 4.5",
    "WS 4.6",
    "MS 1a",
    "MS 1c",
    "MS 2c",
    "MS 3b",
    "MS 3c",
    "MS 4a",
    "AT 1",
    "AT 5"
   ]
  },
  {
   "id": "6.2",
   "component": "P1",
   "option": null,
   "name": "Electricity",
   "ideas": [
    {
     "code": "6.2.1.1",
     "q": "What standard symbols are used in circuit diagrams?",
     "idea": "Standard circuit diagram symbols",
     "content": "Circuit diagrams use standard symbols. Students should be able to draw and interpret circuit diagrams."
    },
    {
     "code": "6.2.1.2",
     "q": "What is electric current, and how are charge flow, current and time related?",
     "idea": "Electrical charge and current",
     "content": "For electrical charge to flow through a closed circuit the circuit must include a source of potential difference. Electric current is a flow of electrical charge. The size of the electric current is the rate of flow of electrical charge. Charge flow, current and time are linked by the equation: charge flow = current × time; Q = I t; charge flow, Q, in coulombs, C; current, I, in amperes, A (amp is acceptable for ampere); time, t, in seconds, s. A current has the same value at any point in a single closed loop. Students should be able to recall and apply this equation."
    },
    {
     "code": "6.2.1.3",
     "q": "How are current, resistance and potential difference related, and how is resistance investigated experimentally?",
     "idea": "Current, resistance and potential difference (Required practical activity 15)",
     "content": "The current (I) through a component depends on both the resistance (R) of the component and the potential difference (V) across it; the greater the resistance the smaller the current for a given potential difference. Questions will use the term potential difference; students gain credit for using either potential difference or voltage. Current, potential difference or resistance can be calculated using: potential difference = current × resistance; V = I R; potential difference, V, in volts, V; current, I, in amperes, A; resistance, R, in ohms, Ω. Students should be able to recall and apply this equation. Required practical activity 15: use circuit diagrams to set up and check appropriate circuits to investigate the factors affecting the resistance of electrical circuits, including the length of a wire at constant temperature and combinations of resistors in series and parallel. AT skills covered by this practical activity: physics AT 1, 6 and 7; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.2.1.4",
     "q": "How does the resistance of different circuit components vary, and how are I–V characteristics investigated?",
     "idea": "Resistors (Required practical activity 16)",
     "content": "Students should be able to explain that, for some resistors, the value of R remains constant but that in others it changes as the current changes. The current through an ohmic conductor (at constant temperature) is directly proportional to the potential difference across it, so resistance remains constant as current changes. The resistance of components such as lamps, diodes, thermistors and LDRs is not constant. The resistance of a filament lamp increases as the temperature of the filament increases. The current through a diode flows in one direction only; the diode has a very high resistance in the reverse direction. The resistance of a thermistor decreases as temperature increases (application eg a thermostat). The resistance of an LDR decreases as light intensity increases (application eg switching lights on when it gets dark). Students should be able to explain the design and use of a circuit to measure the resistance of a component by measuring the current through, and potential difference across, it, draw an appropriate circuit diagram, and use graphs to explore whether circuit elements are linear or non-linear and relate the curves to their function and properties. Required practical activity 16: use circuit diagrams to construct appropriate circuits to investigate the I–V characteristics of a variety of circuit elements, including a filament lamp, a diode and a resistor at constant temperature. AT skills covered by this practical activity: physics AT 6 and 7; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.2.2",
     "q": "How do current, potential difference and resistance behave in series and parallel circuits?",
     "idea": "Series and parallel circuits",
     "content": "There are two ways of joining electrical components: in series and in parallel; some circuits include both. For components in series: there is the same current through each component; the total potential difference of the power supply is shared between the components; the total resistance of two components is the sum of the resistance of each: Rtotal = R1 + R2 (resistance, R, in ohms, Ω). For components in parallel: the potential difference across each component is the same; the total current through the circuit is the sum of the currents through the separate components; the total resistance of two resistors is less than the resistance of the smallest individual resistor. Students should be able to use circuit diagrams to construct and check series and parallel circuits with a variety of common components, describe the difference between series and parallel circuits, explain qualitatively why adding resistors in series increases total resistance while adding resistors in parallel decreases it, explain the design and use of dc series circuits for measurement and testing purposes, calculate the currents, potential differences and resistances in dc series circuits, and solve problems for series circuits using the concept of equivalent resistance. Students are not required to calculate the total resistance of two resistors joined in parallel."
    },
    {
     "code": "6.2.3.1",
     "q": "What is the difference between direct and alternating potential difference, and what is the UK mains supply?",
     "idea": "Direct and alternating potential difference",
     "content": "Mains electricity is an ac supply. In the United Kingdom the domestic electricity supply has a frequency of 50 Hz and is about 230 V. Students should be able to explain the difference between direct and alternating potential difference."
    },
    {
     "code": "6.2.3.2",
     "q": "How is a UK domestic appliance wired for safety, and why can the wires be dangerous?",
     "idea": "Mains electricity",
     "content": "Most electrical appliances are connected to the mains using three-core cable. The insulation covering each wire is colour coded: live wire – brown; neutral wire – blue; earth wire – green and yellow stripes. The live wire carries the alternating potential difference from the supply. The neutral wire completes the circuit. The earth wire is a safety wire to stop the appliance becoming live. The potential difference between the live wire and earth (0 V) is about 230 V. The neutral wire is at, or close to, earth potential (0 V). The earth wire is at 0 V and only carries a current if there is a fault. Students should be able to explain that a live wire may be dangerous even when a switch in the mains circuit is open, and the dangers of providing any connection between the live wire and earth."
    },
    {
     "code": "6.2.4.1",
     "q": "How is electrical power related to potential difference, current and resistance?",
     "idea": "Power",
     "content": "Students should be able to explain how the power transfer in any circuit device is related to the potential difference across it and the current through it, and to the energy changes over time: power = potential difference × current; P = V I. power = current² × resistance; P = I² R. power, P, in watts, W; potential difference, V, in volts, V; current, I, in amperes, A; resistance, R, in ohms, Ω. Students should be able to recall and apply both equations."
    },
    {
     "code": "6.2.4.2",
     "q": "How much energy do electrical appliances transfer, and how is this calculated?",
     "idea": "Energy transfers in everyday appliances",
     "content": "Everyday electrical appliances are designed to bring about energy transfers. The amount of energy an appliance transfers depends on how long it is switched on for and its power. Students should be able to describe how different domestic appliances transfer energy from batteries or ac mains to the kinetic energy of electric motors or the energy of heating devices. Work is done when charge flows in a circuit. The amount of energy transferred by electrical work can be calculated using: energy transferred = power × time; E = P t. energy transferred = charge flow × potential difference; E = Q V. energy transferred, E, in joules, J; power, P, in watts, W; time, t, in seconds, s; charge flow, Q, in coulombs, C; potential difference, V, in volts, V. Students should be able to recall and apply both equations, explain how the power of a circuit device is related to the potential difference across it and current through it, and to the energy transferred over a given time, and describe, with examples, the relationship between power ratings for domestic appliances and the changes in stored energy when they are in use."
    },
    {
     "code": "6.2.4.3",
     "q": "How does the National Grid transfer electrical power efficiently from power stations to consumers?",
     "idea": "The National Grid",
     "content": "The National Grid is a system of cables and transformers linking power stations to consumers. Electrical power is transferred from power stations to consumers using the National Grid. Step-up transformers are used to increase the potential difference from the power station to the transmission cables, then step-down transformers are used to decrease it to a much lower value for domestic use. Students should be able to explain why the National Grid system is an efficient way to transfer energy. Higher tier only: Students should be able to select and use the equation: potential difference across primary coil × current in primary coil = potential difference across secondary coil × current in secondary coil, as given on the equation sheet. Detailed knowledge of the structure of a transformer is not required."
    }
   ],
   "caseStudies": [
    "Required practical activity 15: use circuit diagrams to set up and check appropriate circuits to investigate the factors affecting the resistance of electrical circuits.",
    "Required practical activity 16: use circuit diagrams to construct appropriate circuits to investigate the I–V characteristics of a variety of circuit elements, including a filament lamp, a diode and a resistor at constant temperature."
   ],
   "skills": [
    "WS 1.2",
    "WS 1.4",
    "WS 1.5",
    "MS 1c",
    "MS 3b",
    "MS 3c",
    "MS 3d",
    "MS 4c",
    "MS 4d",
    "MS 4e",
    "AT 1",
    "AT 6",
    "AT 7"
   ]
  },
  {
   "id": "6.3",
   "component": "P1",
   "option": null,
   "name": "Particle model of matter",
   "ideas": [
    {
     "code": "6.3.1.1",
     "q": "How is the density of a material defined and calculated, and how is it measured experimentally?",
     "idea": "Density of materials (Required practical activity 17)",
     "content": "The density of a material is defined by the equation: density = mass / volume; ρ = m/V; density, ρ, in kilograms per metre cubed, kg/m³; mass, m, in kilograms, kg; volume, V, in metres cubed, m³. The particle model can be used to explain the different states of matter and differences in density. Students should be able to recall and apply this equation to changes where mass is conserved, recognise/draw simple diagrams to model the difference between solids, liquids and gases, and explain the differences in density between the different states of matter in terms of the arrangement of atoms or molecules. Required practical activity 17: use appropriate apparatus to make and record the measurements needed to determine the densities of regular and irregular solid objects and liquids. Volume should be determined from the dimensions of regularly shaped objects, and by a displacement technique for irregularly shaped objects, with dimensions measured using appropriate apparatus such as a ruler, micrometer or Vernier callipers. AT skills covered by this practical activity: physics AT 1; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.3.1.2",
     "q": "What happens to mass when a substance changes state, and how do physical and chemical changes differ?",
     "idea": "Changes of state",
     "content": "Students should be able to describe how, when substances change state (melt, freeze, boil, evaporate, condense or sublimate), mass is conserved. Changes of state are physical changes which differ from chemical changes because the material recovers its original properties if the change is reversed."
    },
    {
     "code": "6.3.2.1",
     "q": "What is internal energy and how does heating change it?",
     "idea": "Internal energy",
     "content": "Energy is stored inside a system by the particles (atoms and molecules) that make up the system; this is called internal energy. Internal energy is the total kinetic energy and potential energy of all the particles that make up a system. Heating changes the energy stored within the system by increasing the energy of the particles that make up the system. This either raises the temperature of the system or produces a change of state."
    },
    {
     "code": "6.3.2.2",
     "q": "How is the change in thermal energy of a system calculated when its temperature increases?",
     "idea": "Temperature changes in a system and specific heat capacity",
     "content": "If the temperature of the system increases, the increase depends on the mass of the substance heated, the type of material and the energy input to the system. The equation: change in thermal energy = mass × specific heat capacity × temperature change; ∆E = m c ∆θ; change in thermal energy, ∆E, in joules, J; mass, m, in kilograms, kg; specific heat capacity, c, in joules per kilogram per degree Celsius, J/kg °C; temperature change, ∆θ, in degrees Celsius, °C. The specific heat capacity of a substance is the amount of energy required to raise the temperature of one kilogram of the substance by one degree Celsius. Students should be able to apply this equation, given on the Physics equation sheet, to calculate the energy change involved when the temperature of a material changes."
    },
    {
     "code": "6.3.2.3",
     "q": "How is the energy needed to change the state of a substance calculated, and what is specific latent heat?",
     "idea": "Changes of state and specific latent heat",
     "content": "If a change of state happens, the energy needed is called latent heat. When a change of state occurs, the energy supplied changes the energy stored (internal energy) but not the temperature. The specific latent heat of a substance is the amount of energy required to change the state of one kilogram of the substance with no change in temperature. energy for a change of state = mass × specific latent heat; E = m L; energy, E, in joules, J; mass, m, in kilograms, kg; specific latent heat, L, in joules per kilogram, J/kg. Specific latent heat of fusion is the change of state from solid to liquid; specific latent heat of vaporisation is the change of state from liquid to vapour. Students should be able to apply this equation, given on the Physics equation sheet, to calculate the energy change involved in a change of state, interpret heating and cooling graphs that include changes of state, and distinguish between specific heat capacity and specific latent heat. A suggested skills activity is to perform an experiment to measure the latent heat of fusion of water (AT 5)."
    },
    {
     "code": "6.3.3.1",
     "q": "How is the motion of gas molecules related to temperature and pressure?",
     "idea": "Particle motion in gases",
     "content": "The molecules of a gas are in constant random motion. The temperature of the gas is related to the average kinetic energy of the molecules. Changing the temperature of a gas, held at constant volume, changes the pressure exerted by the gas. Students should be able to explain how the motion of the molecules in a gas is related to both its temperature and its pressure, and explain qualitatively the relation between the temperature of a gas and its pressure at constant volume."
    }
   ],
   "caseStudies": [
    "Required practical activity 17: use appropriate apparatus to make and record the measurements needed to determine the densities of regular and irregular solid objects and liquids."
   ],
   "skills": [
    "WS 1.2",
    "WS 3.5",
    "MS 1a",
    "MS 1b",
    "MS 1c",
    "MS 3b",
    "MS 3c",
    "MS 3d",
    "MS 4a",
    "AT 1",
    "AT 5"
   ]
  },
  {
   "id": "6.4",
   "component": "P1",
   "option": null,
   "name": "Atomic structure",
   "ideas": [
    {
     "code": "6.4.1.1",
     "q": "What is the basic structure of an atom, and how do electron arrangements change?",
     "idea": "The structure of an atom",
     "content": "Atoms are very small, having a radius of about 1 × 10⁻¹⁰ metres. The basic structure of an atom is a positively charged nucleus composed of both protons and neutrons surrounded by negatively charged electrons. The radius of a nucleus is less than 1/10 000 of the radius of an atom; most of the mass of an atom is concentrated in the nucleus. The electrons are arranged at different distances from the nucleus (different energy levels). The electron arrangements may change with the absorption of electromagnetic radiation (move further from the nucleus; a higher energy level) or by the emission of electromagnetic radiation (move closer to the nucleus; a lower energy level). Students should be able to recognise expressions given in standard form."
    },
    {
     "code": "6.4.1.2",
     "q": "What are atomic number, mass number and isotopes?",
     "idea": "Mass number, atomic number and isotopes",
     "content": "In an atom the number of electrons is equal to the number of protons in the nucleus; atoms have no overall electrical charge. All atoms of a particular element have the same number of protons. The number of protons in an atom of an element is called its atomic number. The total number of protons and neutrons in an atom is called its mass number. Atoms of the same element can have different numbers of neutrons; these atoms are called isotopes of that element. Atoms turn into positive ions if they lose one or more outer electron(s). Students should be able to relate differences between isotopes to differences in conventional representations of their identities, charges and masses."
    },
    {
     "code": "6.4.1.3",
     "q": "How did the scientific model of the atom develop over time?",
     "idea": "The development of the model of the atom (common content with chemistry)",
     "content": "New experimental evidence may lead to a scientific model being changed or replaced. Before the discovery of the electron, atoms were thought to be tiny spheres that could not be divided. The discovery of the electron led to the plum pudding model of the atom (a ball of positive charge with negative electrons embedded in it). The results from the alpha particle scattering experiment led to the conclusion that the mass of an atom was concentrated at the centre (nucleus) and that the nucleus was charged; this nuclear model replaced the plum pudding model. Niels Bohr adapted the nuclear model by suggesting that electrons orbit the nucleus at specific distances; the theoretical calculations of Bohr agreed with experimental observations. Later experiments led to the idea that the positive charge of any nucleus could be subdivided into a whole number of smaller particles, each having the same amount of positive charge, named protons. The experimental work of James Chadwick provided the evidence to show the existence of neutrons within the nucleus, about 20 years after the nucleus became an accepted scientific idea. Students should be able to describe why the new evidence from the scattering experiment led to a change in the atomic model, and the difference between the plum pudding model and the nuclear model. Details of experimental work supporting the Bohr model, and of Chadwick's experimental work, are not required."
    },
    {
     "code": "6.4.2.1",
     "q": "Why do unstable nuclei decay, and what types of nuclear radiation can be emitted?",
     "idea": "Radioactive decay and nuclear radiation",
     "content": "Some atomic nuclei are unstable. The nucleus gives out radiation as it changes to become more stable; this is a random process called radioactive decay. Activity is the rate at which a source of unstable nuclei decays, measured in becquerel (Bq). Count-rate is the number of decays recorded each second by a detector (eg Geiger-Muller tube). The nuclear radiation emitted may be: an alpha particle (α) – two neutrons and two protons, the same as a helium nucleus; a beta particle (β) – a high speed electron ejected from the nucleus as a neutron turns into a proton; a gamma ray (γ) – electromagnetic radiation from the nucleus; a neutron (n). Required knowledge of the properties of alpha particles, beta particles and gamma rays is limited to their penetration through materials, their range in air and their ionising power. Students should be able to apply their knowledge to the uses of radiation and evaluate the best sources of radiation to use in a given situation."
    },
    {
     "code": "6.4.2.2",
     "q": "How are nuclear equations written to represent radioactive decay?",
     "idea": "Nuclear equations",
     "content": "Nuclear equations are used to represent radioactive decay. In a nuclear equation an alpha particle and a beta particle are each represented by their own symbol. The emission of different types of nuclear radiation may cause a change in the mass and/or charge of the nucleus: alpha decay causes both the mass and charge of the nucleus to decrease; beta decay does not cause the mass of the nucleus to change but does cause the charge to increase (students are not required to recall these two examples). The emission of a gamma ray does not cause the mass or the charge of the nucleus to change. Students should be able to use the names and symbols of common nuclei and particles to write balanced equations that show single alpha (α) and beta (β) decay, limited to balancing the atomic numbers and mass numbers; the identification of daughter elements from such decays is not required."
    },
    {
     "code": "6.4.2.3",
     "q": "What is half-life, and how can it be used to calculate the decline in a radioactive emission?",
     "idea": "Half-lives and the random nature of radioactive decay",
     "content": "Radioactive decay is random. The half-life of a radioactive isotope is the time it takes for the number of nuclei of the isotope in a sample to halve, or the time it takes for the count rate (or activity) from a sample containing the isotope to fall to half its initial level. Students should be able to explain the concept of half-life and how it is related to the random nature of radioactive decay, and determine the half-life of a radioactive isotope from given information. Higher tier only: Students should be able to calculate the net decline, expressed as a ratio, in a radioactive emission after a given number of half-lives."
    },
    {
     "code": "6.4.2.4",
     "q": "What is the difference between radioactive contamination and irradiation, and how are the hazards managed?",
     "idea": "Radioactive contamination",
     "content": "Radioactive contamination is the unwanted presence of materials containing radioactive atoms on other materials; the hazard from contamination is due to the decay of the contaminating atoms, and the type of radiation emitted affects the level of hazard. Irradiation is the process of exposing an object to nuclear radiation; the irradiated object does not become radioactive. Students should be able to compare the hazards associated with contamination and irradiation. Suitable precautions must be taken to protect against any hazard that the radioactive source used in the process of irradiation may present. Students should understand that it is important for the findings of studies into the effects of radiation on humans to be published and shared with other scientists so that the findings can be checked by peer review."
    }
   ],
   "caseStudies": [],
   "skills": [
    "WS 1.1",
    "WS 1.2",
    "WS 1.4",
    "WS 1.5",
    "WS 1.6",
    "WS 4.1",
    "WS 4.4",
    "MS 1b",
    "MS 1c",
    "MS 3c",
    "MS 3d",
    "MS 4a"
   ]
  },
  {
   "id": "6.5",
   "component": "P2",
   "option": null,
   "name": "Forces",
   "ideas": [
    {
     "code": "6.5.1.1",
     "q": "What is the difference between a scalar and a vector quantity?",
     "idea": "Scalar and vector quantities",
     "content": "Scalar quantities have magnitude only. Vector quantities have magnitude and an associated direction. A vector quantity may be represented by an arrow: the length of the arrow represents the magnitude, and the direction of the arrow the direction of the vector quantity."
    },
    {
     "code": "6.5.1.2",
     "q": "What is the difference between contact and non-contact forces?",
     "idea": "Contact and non-contact forces",
     "content": "A force is a push or pull that acts on an object due to the interaction with another object. All forces between objects are either contact forces (the objects are physically touching) or non-contact forces (the objects are physically separated). Contact forces include friction, air resistance, tension and normal contact force. Non-contact forces include gravitational force, electrostatic force and magnetic force. Force is a vector quantity. Students should be able to describe the interaction between pairs of objects which produce a force on each object, with the forces represented as vectors."
    },
    {
     "code": "6.5.1.3",
     "q": "What is weight and how is it calculated?",
     "idea": "Gravity",
     "content": "Weight is the force acting on an object due to gravity. The force of gravity close to the Earth is due to the gravitational field around the Earth. The weight of an object depends on the gravitational field strength at the point where the object is. weight = mass × gravitational field strength; W = m g; weight, W, in newtons, N; mass, m, in kilograms, kg; gravitational field strength, g, in newtons per kilogram, N/kg (in any calculation the value of g will be given). The weight of an object may be considered to act at a single point referred to as the object's 'centre of mass'. Weight and mass are directly proportional (students should recognise and use the symbol for proportionality, ∝). Weight is measured using a calibrated spring-balance (a newtonmeter)."
    },
    {
     "code": "6.5.1.4",
     "q": "How can several forces acting on an object be combined into a resultant force?",
     "idea": "Resultant forces",
     "content": "A number of forces acting on an object may be replaced by a single force, the resultant force, that has the same effect as all the original forces acting together. Students should be able to calculate the resultant of two forces that act in a straight line. Higher tier only: students should be able to describe examples of the forces acting on an isolated object or system, and use free body diagrams to describe qualitatively examples where several forces lead to a resultant force on an object, including balanced forces when the resultant force is zero. A single force can be resolved into two components acting at right angles to each other, which together have the same effect as the single force. Students should be able to use vector diagrams to illustrate resolution of forces, equilibrium situations and determine the resultant of two forces, to include both magnitude and direction (scale drawings only)."
    },
    {
     "code": "6.5.2",
     "q": "What is work done and how does it relate to energy transfer?",
     "idea": "Work done and energy transfer",
     "content": "When a force causes an object to move through a distance, work is done on the object: a force does work on an object when the force causes a displacement of the object. work done = force × distance moved along the line of action of the force; W = F s; work done, W, in joules, J; force, F, in newtons, N; distance, s, in metres. One joule of work is done when a force of one newton causes a displacement of one metre: 1 joule = 1 newton-metre. Students should be able to describe the energy transfer involved when work is done, and convert between newton-metres and joules. Work done against the frictional forces acting on an object causes a rise in the temperature of the object."
    },
    {
     "code": "6.5.3",
     "q": "How do forces cause elastic and inelastic deformation, and how is elastic potential energy calculated?",
     "idea": "Forces and elasticity (Required practical activity 18)",
     "content": "Students should be able to give examples of the forces involved in stretching, bending or compressing an object; explain why, to change the shape of a stationary object (by stretching, bending or compressing), more than one force has to be applied; and describe the difference between elastic deformation and inelastic deformation caused by stretching forces. The extension of an elastic object, such as a spring, is directly proportional to the force applied, provided the limit of proportionality is not exceeded. force = spring constant × extension; F = k e; force, F, in newtons, N; spring constant, k, in newtons per metre, N/m; extension, e, in metres, m. This relationship also applies to compression, where 'e' is the compression of the object. A force that stretches (or compresses) a spring does work, and elastic potential energy is stored in the spring; provided the spring is not inelastically deformed, the work done on the spring and the elastic potential energy stored are equal. Students should be able to describe the difference between a linear and non-linear relationship between force and extension; calculate a spring constant in linear cases; interpret data from an investigation of the relationship between force and extension; and calculate work done in stretching (or compressing) a spring (up to the limit of proportionality) using: elastic potential energy = 0.5 × spring constant × extension²; Ee = 1/2 k e² (given on the Physics equation sheet). Students should be able to calculate relevant values of stored energy and energy transfers. Required practical activity 18: investigate the relationship between force and extension for a spring. AT skills covered by this practical activity: physics AT 1 and 2; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.5.4.1.1",
     "q": "What is the difference between distance and displacement?",
     "idea": "Distance and displacement",
     "content": "Distance is how far an object moves; distance does not involve direction and is a scalar quantity. Displacement includes both the distance an object moves, measured in a straight line from the start point to the finish point, and the direction of that straight line; displacement is a vector quantity. Students should be able to express a displacement in terms of both magnitude and direction. Throughout the Forces and motion section, students should be able to use ratios and proportional reasoning to convert units and to compute rates."
    },
    {
     "code": "6.5.4.1.2",
     "q": "What is speed and how is distance travelled calculated from it?",
     "idea": "Speed",
     "content": "Speed does not involve direction and is a scalar quantity. The speed of a moving object is rarely constant. The speed at which a person can walk, run or cycle depends on factors including age, terrain, fitness and distance travelled. Typical values: walking ≈1.5 m/s, running ≈3 m/s, cycling ≈6 m/s. Students should be able to recall typical values of speed for a person walking, running and cycling as well as typical values for different types of transportation systems. The speed of sound and of the wind also vary; a typical value for the speed of sound in air is 330 m/s. Students should be able to make measurements of distance and time and calculate speeds of objects. For an object moving at constant speed: distance travelled = speed × time; s = v t; distance, s, in metres, m; speed, v, in metres per second, m/s; time, t, in seconds, s. Students should be able to calculate average speed for non-uniform motion."
    },
    {
     "code": "6.5.4.1.3",
     "q": "What is velocity and how does it differ from speed?",
     "idea": "Velocity",
     "content": "The velocity of an object is its speed in a given direction. Velocity is a vector quantity. Students should be able to explain the vector-scalar distinction as it applies to displacement, distance, velocity and speed. Higher tier only: students should be able to explain qualitatively, with examples, that motion in a circle involves constant speed but changing velocity."
    },
    {
     "code": "6.5.4.1.4",
     "q": "How can distance-time graphs be used to find the speed of an object?",
     "idea": "The distance-time relationship",
     "content": "If an object moves along a straight line, the distance travelled can be represented by a distance-time graph. The speed of an object can be calculated from the gradient of its distance-time graph. Higher tier only: if an object is accelerating, its speed at any particular time can be determined by drawing a tangent and measuring the gradient of the distance-time graph at that time. Students should be able to draw distance-time graphs from measurements and extract and interpret lines and slopes of distance-time graphs, translating information between graphical and numerical form, and determine speed from a distance-time graph."
    },
    {
     "code": "6.5.4.1.5",
     "q": "How is acceleration calculated and related to velocity-time graphs?",
     "idea": "Acceleration",
     "content": "The average acceleration of an object can be calculated using: acceleration = change in velocity / time taken; a = Δv / t; acceleration, a, in metres per second squared, m/s²; change in velocity, Δv, in metres per second, m/s; time, t, in seconds, s. An object that slows down is decelerating. Students should be able to estimate the magnitude of everyday accelerations. The acceleration of an object can be calculated from the gradient of a velocity-time graph. Higher tier only: the distance travelled by an object (or displacement) can be calculated from the area under a velocity-time graph. Students should be able to draw velocity-time graphs from measurements and interpret lines and slopes to determine acceleration; Higher tier only: interpret enclosed areas in velocity-time graphs to determine distance travelled (or displacement), and measure, when appropriate, the area under a velocity-time graph by counting squares. The following equation applies to uniform acceleration: final velocity² − initial velocity² = 2 × acceleration × distance; v² − u² = 2 a s; final velocity, v, in metres per second, m/s; initial velocity, u, in metres per second, m/s; acceleration, a, in metres per second squared, m/s²; distance, s, in metres, m (given on the Physics equation sheet). Near the Earth's surface any object falling freely under gravity has an acceleration of about 9.8 m/s². An object falling through a fluid initially accelerates due to the force of gravity; eventually the resultant force will be zero and the object will move at its terminal velocity."
    },
    {
     "code": "6.5.4.2.1",
     "q": "What does Newton's First Law say about objects with zero resultant force?",
     "idea": "Newton's First Law",
     "content": "Newton's First Law: if the resultant force acting on an object is zero and the object is stationary, the object remains stationary; if the object is moving, it continues to move at the same speed and in the same direction (the same velocity). So when a vehicle travels at a steady speed the resistive forces balance the driving force, and the velocity of an object will only change if a resultant force is acting on it. Students should be able to apply Newton's First Law to explain the motion of objects moving with a uniform velocity and objects where the speed and/or direction changes. Higher tier only: the tendency of objects to continue in their state of rest or of uniform motion is called inertia."
    },
    {
     "code": "6.5.4.2.2",
     "q": "What does Newton's Second Law say about the relationship between force, mass and acceleration? (Required practical activity 19)",
     "idea": "Newton's Second Law (Required practical activity 19)",
     "content": "Newton's Second Law: the acceleration of an object is proportional to the resultant force acting on the object, and inversely proportional to the mass of the object (students should recognise and use the symbol for proportionality, ∝). resultant force = mass × acceleration; F = m a; force, F, in newtons, N; mass, m, in kilograms, kg; acceleration, a, in metres per second squared, m/s². Higher tier only: inertial mass is a measure of how difficult it is to change the velocity of an object; inertial mass is defined as the ratio of force over acceleration. Students should be able to estimate the speed, accelerations and forces involved in large accelerations for everyday road transport, and recognise and use the symbol that indicates an approximate value or approximate answer, ≈. Required practical activity 19: investigate the effect of varying the force on the acceleration of an object of constant mass, and the effect of varying the mass of an object on the acceleration produced by a constant force. AT skills covered by this practical activity: physics AT 1, 2 and 3; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.5.4.2.3",
     "q": "What does Newton's Third Law say about interacting objects?",
     "idea": "Newton's Third Law",
     "content": "Newton's Third Law: whenever two objects interact, the forces they exert on each other are equal and opposite. Students should be able to apply Newton's Third Law to examples of equilibrium situations."
    },
    {
     "code": "6.5.4.3.1",
     "q": "What is the stopping distance of a vehicle made up of?",
     "idea": "Stopping distance",
     "content": "The stopping distance of a vehicle is the sum of the distance the vehicle travels during the driver's reaction time (thinking distance) and the distance it travels under the braking force (braking distance). For a given braking force, the greater the speed of the vehicle, the greater the stopping distance."
    },
    {
     "code": "6.5.4.3.2",
     "q": "What affects a driver's reaction time and thinking distance?",
     "idea": "Reaction time",
     "content": "Reaction times vary from person to person; typical values range from 0.2 s to 0.9 s. A driver's reaction time can be affected by tiredness, drugs and alcohol; distractions may also affect a driver's ability to react. Students should be able to explain methods used to measure human reaction times and recall typical results; interpret and evaluate measurements from simple methods to measure the different reaction times of students; and evaluate the effect of various factors on thinking distance based on given data."
    },
    {
     "code": "6.5.4.3.3",
     "q": "What factors affect the braking distance of a vehicle?",
     "idea": "Factors affecting braking distance 1",
     "content": "The braking distance of a vehicle can be affected by adverse road and weather conditions (wet or icy conditions) and poor condition of the vehicle (limited to the vehicle's brakes or tyres). Students should be able to explain the factors which affect the distance required for road transport vehicles to come to rest in emergencies, and the implications for safety, and estimate how the distance required for road vehicles to stop in an emergency varies over a range of typical speeds."
    },
    {
     "code": "6.5.4.3.4",
     "q": "How does braking affect a vehicle's kinetic energy and brake temperature, and what are the dangers of large decelerations?",
     "idea": "Factors affecting braking distance 2",
     "content": "When a force is applied to the brakes of a vehicle, work done by the friction force between the brakes and the wheel reduces the kinetic energy of the vehicle and the temperature of the brakes increases. The greater the speed of a vehicle the greater the braking force needed to stop it in a certain distance; the greater the braking force the greater the deceleration, and large decelerations may lead to brakes overheating and/or loss of control. Students should be able to explain the dangers caused by large decelerations. Higher tier only: estimate the forces involved in the deceleration of road vehicles in typical situations on a public road."
    },
    {
     "code": "6.5.5.1",
     "q": "What is momentum?",
     "idea": "Momentum is a property of moving objects",
     "content": "Higher tier only: momentum is defined by the equation: momentum = mass × velocity; p = m v; momentum, p, in kilograms metre per second, kg m/s; mass, m, in kilograms, kg; velocity, v, in metres per second, m/s."
    },
    {
     "code": "6.5.5.2",
     "q": "What is conservation of momentum?",
     "idea": "Conservation of momentum",
     "content": "Higher tier only: in a closed system, the total momentum before an event is equal to the total momentum after the event — this is called conservation of momentum. Students should be able to use the concept of momentum as a model to describe and explain examples of momentum in an event, such as a collision (e.g. investigating collisions between laboratory trolleys using light gates, data loggers or ticker timers to measure and record data)."
    }
   ],
   "caseStudies": [
    "Required practical activity 18: investigate the relationship between force and extension for a spring.",
    "Required practical activity 19: investigate the effect of varying the force on the acceleration of an object of constant mass, and the effect of varying the mass of an object on the acceleration produced by a constant force."
   ],
   "skills": [
    "WS 1.2",
    "MS 4a",
    "MS 1c, 3d",
    "MS 3b, c",
    "MS 3a",
    "MS 4a, 5a, b",
    "WS 4.5",
    "MS 1c",
    "MS 3b, c, 4a",
    "WS 3.5",
    "MS 3c",
    "AT 1, 2",
    "MS 1, 3c",
    "MS 1a, c, 2f",
    "MS 3b, 3c",
    "MS 4a, b, c, d, f",
    "MS 1d, 3b, 3c",
    "WS 3.3",
    "WS 4.2",
    "MS 1d",
    "AT 1, 2, 3",
    "WS 3.5, 3.7",
    "WS 1.5, 2.2",
    "AT 1",
    "MS 1c, 1d, 2c, 2d, 2f, 2h, 3b, 3c",
    "WS 1.5"
   ]
  },
  {
   "id": "6.6",
   "component": "P2",
   "option": null,
   "name": "Waves",
   "ideas": [
    {
     "code": "6.6.1.1",
     "q": "What is the difference between transverse and longitudinal waves?",
     "idea": "Transverse and longitudinal waves",
     "content": "Waves may be either transverse or longitudinal. The ripples on a water surface are an example of a transverse wave. Longitudinal waves show areas of compression and rarefaction; sound waves travelling through air are longitudinal. Students should be able to describe the difference between longitudinal and transverse waves, and describe evidence that, for both ripples on a water surface and sound waves in air, it is the wave and not the water or air itself that travels."
    },
    {
     "code": "6.6.1.2",
     "q": "How are amplitude, wavelength, frequency, period and speed defined for a wave, and how are they measured? (Required practical activity 20)",
     "idea": "Properties of waves (Required practical activity 20)",
     "content": "Students should be able to describe wave motion in terms of amplitude, wavelength, frequency and period. The amplitude of a wave is the maximum displacement of a point on a wave away from its undisturbed position. The wavelength of a wave is the distance from a point on one wave to the equivalent point on the adjacent wave. The frequency of a wave is the number of waves passing a point each second. period = 1 / frequency; T = 1/f; period, T, in seconds, s; frequency, f, in hertz, Hz. The wave speed is the speed at which the energy is transferred (or the wave moves) through the medium. All waves obey the wave equation: wave speed = frequency × wavelength; v = f λ; wave speed, v, in metres per second, m/s; frequency, f, in hertz, Hz; wavelength, λ, in metres, m (given on the Physics equation sheet). Students should be able to identify amplitude and wavelength from given diagrams; describe a method to measure the speed of sound waves in air; and describe a method to measure the speed of ripples on a water surface. Required practical activity 20: make observations to identify the suitability of apparatus to measure the frequency, wavelength and speed of waves in a ripple tank and waves in a solid, and take appropriate measurements. AT skills covered by this practical activity: physics AT 4; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.6.2.1",
     "q": "What are the types of electromagnetic wave and how are they grouped?",
     "idea": "Types of electromagnetic waves",
     "content": "Electromagnetic waves are transverse waves that transfer energy from the source of the waves to an absorber. Electromagnetic waves form a continuous spectrum and all types of electromagnetic wave travel at the same velocity through a vacuum (space) or air. The waves that form the electromagnetic spectrum are grouped in terms of their wavelength and frequency. Going from long to short wavelength (or low to high frequency): radio, microwave, infrared, visible light (red to violet), ultraviolet, X-rays and gamma rays. Our eyes only detect visible light and so detect a limited range of electromagnetic waves. Students should be able to give examples that illustrate the transfer of energy by electromagnetic waves."
    },
    {
     "code": "6.6.2.2",
     "q": "How do substances absorb, transmit, refract or reflect electromagnetic waves? (Required practical activity 21)",
     "idea": "Properties of electromagnetic waves 1 (Required practical activity 21)",
     "content": "Higher tier only: different substances may absorb, transmit, refract or reflect electromagnetic waves in ways that vary with wavelength; some effects, for example refraction, are due to the difference in velocity of the waves in different substances. Students should be able to construct ray diagrams to illustrate the refraction of a wave at the boundary between two different media. Higher tier only: students should be able to use wave front diagrams to explain refraction in terms of the change of speed that happens when a wave travels from one medium to a different medium. Required practical activity 21: investigate how the amount of infrared radiation absorbed or radiated by a surface depends on the nature of that surface. AT skills covered by this practical activity: physics AT 1 and 4; it also provides opportunities to develop WS and MS."
    },
    {
     "code": "6.6.2.3",
     "q": "How are electromagnetic waves generated by atoms and nuclei, and what hazards do some carry?",
     "idea": "Properties of electromagnetic waves 2",
     "content": "Higher tier only: radio waves can be produced by oscillations in electrical circuits; when radio waves are absorbed they may create an alternating current with the same frequency as the radio wave itself, so radio waves can themselves induce oscillations in an electrical circuit. Changes in atoms and the nuclei of atoms can result in electromagnetic waves being generated or absorbed over a wide frequency range; gamma rays originate from changes in the nucleus of an atom. Ultraviolet waves, X-rays and gamma rays can have hazardous effects on human body tissue; the effects depend on the type of radiation and the size of the dose. Radiation dose (in sieverts) is a measure of the risk of harm resulting from an exposure of the body to the radiation. 1000 millisieverts (mSv) = 1 sievert (Sv); students will not be required to recall the unit of radiation dose. Students should be able to draw conclusions from given data about the risks and consequences of exposure to radiation. Ultraviolet waves can cause skin to age prematurely and increase the risk of skin cancer. X-rays and gamma rays are ionising radiation that can cause the mutation of genes and cancer."
    },
    {
     "code": "6.6.2.4",
     "q": "What practical applications do the different types of electromagnetic wave have?",
     "idea": "Uses and applications of electromagnetic waves",
     "content": "Electromagnetic waves have many practical applications, for example: radio waves – television and radio; microwaves – satellite communications, cooking food; infrared – electrical heaters, cooking food, infrared cameras; visible light – fibre optic communications; ultraviolet – energy efficient lamps, sun tanning; X-rays and gamma rays – medical imaging and treatments. Higher tier only: students should be able to give brief explanations why each type of electromagnetic wave is suitable for the practical application."
    }
   ],
   "caseStudies": [
    "Required practical activity 20: make observations to identify the suitability of apparatus to measure the frequency, wavelength and speed of waves in a ripple tank and waves in a solid and take appropriate measurements.",
    "Required practical activity 21: investigate how the amount of infrared radiation absorbed or radiated by a surface depends on the nature of that surface."
   ],
   "skills": [
    "WS 1.2",
    "WS 1.2, 2.2",
    "MS 1c, 3b, c",
    "MS 1c, 3b, 3c",
    "AT 1",
    "WS 2.3, 2.4, 2.6, 2.7, 3.1, 3.5",
    "AT 1, AT 4",
    "WS 1.5",
    "WS 1.4"
   ]
  },
  {
   "id": "6.7",
   "component": "P2",
   "option": null,
   "name": "Magnetism and electromagnetism",
   "ideas": [
    {
     "code": "6.7.1.1",
     "q": "How do the poles of a magnet interact, and what is the difference between a permanent and an induced magnet?",
     "idea": "Poles of a magnet",
     "content": "The poles of a magnet are the places where the magnetic forces are strongest. When two magnets are brought close together they exert a force on each other. Two like poles repel each other; two unlike poles attract each other. Attraction and repulsion between two magnetic poles are examples of non-contact force. A permanent magnet produces its own magnetic field. An induced magnet is a material that becomes a magnet when it is placed in a magnetic field; induced magnetism always causes a force of attraction. When removed from the magnetic field an induced magnet loses most/all of its magnetism quickly. Students should be able to describe the attraction and repulsion between unlike and like poles for permanent magnets, and the difference between permanent and induced magnets."
    },
    {
     "code": "6.7.1.2",
     "q": "What is a magnetic field and how can its pattern be found?",
     "idea": "Magnetic fields",
     "content": "The region around a magnet where a force acts on another magnet or on a magnetic material (iron, steel, cobalt and nickel) is called the magnetic field. The force between a magnet and a magnetic material is always one of attraction. The strength of the magnetic field depends on the distance from the magnet; the field is strongest at the poles of the magnet. The direction of the magnetic field at any point is given by the direction of the force that would act on another north pole placed at that point; the direction of a magnetic field line is from the north (seeking) pole of a magnet to the south (seeking) pole. A magnetic compass contains a small bar magnet. The Earth has a magnetic field, and the compass needle points in the direction of the Earth's magnetic field. Students should be able to describe how to plot the magnetic field pattern of a magnet using a compass; draw the magnetic field pattern of a bar magnet showing how strength and direction change from one point to another; and explain how the behaviour of a magnetic compass is related to evidence that the core of the Earth must be magnetic."
    },
    {
     "code": "6.7.2.1",
     "q": "How does a current-carrying wire or solenoid produce a magnetic field?",
     "idea": "Electromagnetism",
     "content": "When a current flows through a conducting wire a magnetic field is produced around the wire. The strength of the magnetic field depends on the current through the wire and the distance from the wire. Shaping a wire to form a solenoid increases the strength of the magnetic field created by a current through the wire; the magnetic field inside a solenoid is strong and uniform. The magnetic field around a solenoid has a similar shape to that of a bar magnet. Adding an iron core increases the strength of the magnetic field of a solenoid; an electromagnet is a solenoid with an iron core. Students should be able to describe how the magnetic effect of a current can be demonstrated; draw the magnetic field pattern for a straight wire carrying a current and for a solenoid (showing the direction of the field); and explain how a solenoid arrangement can increase the magnetic effect of the current."
    },
    {
     "code": "6.7.2.2",
     "q": "How does Fleming's left-hand rule relate the force, current and magnetic field in the motor effect, and how is the force on a current-carrying conductor calculated?",
     "idea": "Fleming's left-hand rule (HT only)",
     "content": "Higher tier only: when a conductor carrying a current is placed in a magnetic field, the magnet producing the field and the conductor exert a force on each other — this is called the motor effect. Students should be able to show that Fleming's left-hand rule represents the relative orientation of the force, the current in the conductor and the magnetic field, and should be able to recall the factors that affect the size of the force on the conductor. For a conductor at right angles to a magnetic field and carrying a current: force = magnetic flux density × current × length; F = B I l; force, F, in newtons, N; magnetic flux density, B, in tesla, T; current, I, in amperes, A (amp is acceptable for ampere); length, l, in metres, m (given on the Physics equation sheet)."
    },
    {
     "code": "6.7.2.3",
     "q": "How does the motor effect cause a current-carrying coil in a magnetic field to rotate?",
     "idea": "Electric motors (HT only)",
     "content": "Higher tier only: a coil of wire carrying a current in a magnetic field tends to rotate — this is the basis of an electric motor. Students should be able to explain how the force on a conductor in a magnetic field causes the rotation of the coil in an electric motor."
    }
   ],
   "caseStudies": [],
   "skills": [
    "WS 2.2",
    "MS 3b, c"
   ]
  },
  {
   "id": "10.1.3",
   "component": "P1",
   "option": null,
   "name": "Use of apparatus and techniques: Physics",
   "ideas": [
    {
     "code": "AT 1",
     "q": "Measuring and density",
     "idea": "Apparatus for measurements and densities",
     "content": "Use of appropriate apparatus to make and record a range of measurements accurately, including length, area, mass, time, volume and temperature. Use of such measurements to determine densities of solid and liquid objects (links to A-level AT a and b)."
    },
    {
     "code": "AT 2",
     "q": "Forces",
     "idea": "Measuring the effects of forces",
     "content": "Use of appropriate apparatus to measure and observe the effects of forces including the extension of springs (links to A-level AT a)."
    },
    {
     "code": "AT 3",
     "q": "Motion",
     "idea": "Measuring motion",
     "content": "Use of appropriate apparatus and techniques for measuring motion, including determination of speed and rate of change of speed (acceleration/deceleration) (links to A-level AT a, b and d)."
    },
    {
     "code": "AT 4",
     "q": "Waves",
     "idea": "Observing waves and electromagnetic interactions",
     "content": "Making observations of waves in fluids and solids to identify the suitability of apparatus to measure speed/frequency/wavelength. Making observations of the effects of the interaction of electromagnetic waves with matter (links to A-level AT i and j)."
    },
    {
     "code": "AT 5",
     "q": "Energy transfers",
     "idea": "Measuring energy changes and transfers",
     "content": "Safe use of appropriate apparatus in a range of contexts to measure energy changes/transfers and associated values such as work done (links to A-level AT a, b)."
    },
    {
     "code": "AT 6",
     "q": "Electrical measurements",
     "idea": "Measuring current, potential difference and resistance",
     "content": "Use of appropriate apparatus to measure current, potential difference (voltage) and resistance, and to explore the characteristics of a variety of circuit elements (links to A-level AT f)."
    },
    {
     "code": "AT 7",
     "q": "Circuits",
     "idea": "Constructing and checking circuits",
     "content": "Use of circuit diagrams to construct and check series and parallel circuits including a variety of common circuit elements (links to A-level AT g)."
    }
   ],
   "caseStudies": [],
   "skills": []
  },
  {
   "id": "12",
   "component": "P2",
   "option": null,
   "name": "Appendix B: Physics equations (recall)",
   "ideas": [
    {
     "code": "1",
     "q": "What is the equation for weight?",
     "idea": "Equation 1: weight",
     "content": "Recall and apply, using standard SI units: weight = mass × gravitational field strength (g); W = m g. (Appendix B, equations required for recall.)"
    },
    {
     "code": "2",
     "q": "What is the equation for work done?",
     "idea": "Equation 2: work done",
     "content": "Recall and apply, using standard SI units: work done = force × distance along the line of action of the force; W = F s. (Appendix B, equations required for recall.)"
    },
    {
     "code": "3",
     "q": "What is the equation for spring force?",
     "idea": "Equation 3: spring force",
     "content": "Recall and apply, using standard SI units: force applied to a spring = spring constant × extension; F = k e. (Appendix B, equations required for recall.)"
    },
    {
     "code": "4",
     "q": "What is the equation for distance?",
     "idea": "Equation 4: distance",
     "content": "Recall and apply, using standard SI units: distance travelled = speed × time; s = v t. (Appendix B, equations required for recall.)"
    },
    {
     "code": "5",
     "q": "What is the equation for acceleration?",
     "idea": "Equation 5: acceleration",
     "content": "Recall and apply, using standard SI units: acceleration = change in velocity ÷ time taken; a = Δv / t. (Appendix B, equations required for recall.)"
    },
    {
     "code": "6",
     "q": "What is the equation for resultant force?",
     "idea": "Equation 6: resultant force",
     "content": "Recall and apply, using standard SI units: resultant force = mass × acceleration; F = m a. (Appendix B, equations required for recall.)"
    },
    {
     "code": "7",
     "q": "What is the equation for momentum (HT)?",
     "idea": "Equation 7: momentum (HT)",
     "content": "Recall and apply, using standard SI units: Higher tier only: momentum = mass × velocity; p = m v. (Appendix B, equations required for recall.)"
    },
    {
     "code": "8",
     "q": "What is the equation for kinetic energy?",
     "idea": "Equation 8: kinetic energy",
     "content": "Recall and apply, using standard SI units: kinetic energy = 0.5 × mass × speed²; Ek = ½ m v². (Appendix B, equations required for recall.)"
    },
    {
     "code": "9",
     "q": "What is the equation for gravitational potential energy?",
     "idea": "Equation 9: gravitational potential energy",
     "content": "Recall and apply, using standard SI units: gravitational potential energy = mass × gravitational field strength (g) × height; Ep = m g h. (Appendix B, equations required for recall.)"
    },
    {
     "code": "10",
     "q": "What is the equation for power (energy)?",
     "idea": "Equation 10: power (energy)",
     "content": "Recall and apply, using standard SI units: power = energy transferred ÷ time; P = E / t. (Appendix B, equations required for recall.)"
    },
    {
     "code": "11",
     "q": "What is the equation for power (work)?",
     "idea": "Equation 11: power (work)",
     "content": "Recall and apply, using standard SI units: power = work done ÷ time; P = W / t. (Appendix B, equations required for recall.)"
    },
    {
     "code": "12",
     "q": "What is the equation for efficiency (energy)?",
     "idea": "Equation 12: efficiency (energy)",
     "content": "Recall and apply, using standard SI units: efficiency = useful output energy transfer ÷ total input energy transfer. (Appendix B, equations required for recall.)"
    },
    {
     "code": "13",
     "q": "What is the equation for efficiency (power)?",
     "idea": "Equation 13: efficiency (power)",
     "content": "Recall and apply, using standard SI units: efficiency = useful power output ÷ total power input. (Appendix B, equations required for recall.)"
    },
    {
     "code": "14",
     "q": "What is the equation for wave speed?",
     "idea": "Equation 14: wave speed",
     "content": "Recall and apply, using standard SI units: wave speed = frequency × wavelength; v = f λ. (Appendix B, equations required for recall.)"
    },
    {
     "code": "15",
     "q": "What is the equation for charge flow?",
     "idea": "Equation 15: charge flow",
     "content": "Recall and apply, using standard SI units: charge flow = current × time; Q = I t. (Appendix B, equations required for recall.)"
    },
    {
     "code": "16",
     "q": "What is the equation for potential difference?",
     "idea": "Equation 16: potential difference",
     "content": "Recall and apply, using standard SI units: potential difference = current × resistance; V = I R. (Appendix B, equations required for recall.)"
    },
    {
     "code": "17",
     "q": "What is the equation for power (electrical)?",
     "idea": "Equation 17: power (electrical)",
     "content": "Recall and apply, using standard SI units: power = potential difference × current; P = V I. (Appendix B, equations required for recall.)"
    },
    {
     "code": "18",
     "q": "What is the equation for power (resistive)?",
     "idea": "Equation 18: power (resistive)",
     "content": "Recall and apply, using standard SI units: power = current² × resistance; P = I² R. (Appendix B, equations required for recall.)"
    },
    {
     "code": "19",
     "q": "What is the equation for energy transferred (power)?",
     "idea": "Equation 19: energy transferred (power)",
     "content": "Recall and apply, using standard SI units: energy transferred = power × time; E = P t. (Appendix B, equations required for recall.)"
    },
    {
     "code": "20",
     "q": "What is the equation for energy transferred (charge)?",
     "idea": "Equation 20: energy transferred (charge)",
     "content": "Recall and apply, using standard SI units: energy transferred = charge flow × potential difference; E = Q V. (Appendix B, equations required for recall.)"
    },
    {
     "code": "21",
     "q": "What is the equation for density?",
     "idea": "Equation 21: density",
     "content": "Recall and apply, using standard SI units: density = mass ÷ volume; ρ = m / V. (Appendix B, equations required for recall.)"
    }
   ],
   "caseStudies": [],
   "skills": []
  }
 ]
};
module.exports = { SPEC_8464 };
