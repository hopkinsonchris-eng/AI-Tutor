/* AQA GCSE Chemistry (8462) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_8462 = {
 "id": "AQA-8462",
 "board": "AQA",
 "subject": "Chemistry",
 "code": "8462",
 "level": "GCSE",
 "version": "AQA GCSE Chemistry 8462. GCSE exams June 2018 onwards. Version 1.1 04 October 2019",
 "firstExam": 2018,
 "essaySubject": false,
 "components": [
  {
   "id": "P1",
   "name": "Paper 1",
   "marks": 100,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "What's assessed: Topics 1–5: Atomic structure and the periodic table; Bonding, structure, and the properties of matter; Quantitative chemistry, Chemical changes; and Energy changes.",
    "How it's assessed: written exam 1 hour 45 minutes; Foundation and Higher Tier; 100 marks; 50% of GCSE.",
    "Questions: multiple choice, structured, closed short answer and open response.",
    "Working scientifically (section 3), Mathematical requirements (section 7) and Use of apparatus and techniques (section 8.1) skills are assessed across all papers; questions on the eight required practical activities count for at least 15% of the overall marks.",
    "Appendix A: a periodic table is supplied for the exam."
   ]
  },
  {
   "id": "P2",
   "name": "Paper 2",
   "marks": 100,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "What's assessed: Topics 6–10: The rate and extent of chemical change; Organic chemistry; Chemical analysis, Chemistry of the atmosphere; and Using resources.",
    "Questions in Paper 2 may draw on fundamental concepts and principles from sections 4.1 to 4.3.",
    "How it's assessed: written exam 1 hour 45 minutes; Foundation and Higher Tier; 100 marks; 50% of GCSE.",
    "Questions: multiple choice, structured, closed short answer and open response.",
    "Working scientifically (section 3), Mathematical requirements (section 7) and Use of apparatus and techniques (section 8.1) skills are assessed across all papers.",
    "Appendix A: a periodic table is supplied for the exam."
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
  "summary": "Two written papers, each 100 raw marks with a scaling factor of ×1, giving a total scaled mark of 200 on which grade boundaries are set; the overall weighting of each component is 50%. Both papers are sat at the end of the course (the qualification is linear) and both are available at Foundation and Higher Tier. The qualification is graded on the nine-point scale 1–9, where 9 is the best grade: a Foundation Tier student is awarded a grade in the range 1 to 5, a Higher Tier student a grade in the range 4 to 9, with an allowed grade 3 for a Higher Tier student who just fails to achieve grade 4; below that the result is U. Entry codes are 8462F (Foundation) and 8462H (Higher). Question types are multiple choice, structured, closed short answer and open response. Extended response questions are of sufficient length to allow students to construct and develop a sustained line of reasoning which is coherent, relevant, substantiated and logically structured, and may be prose, extended calculations, or a combination of both; AQA marks these by levels in its mark schemes, which the specification itself does not set out. Questions drawing on the knowledge and understanding gained from the eight required practical activities count for at least 15% of the overall marks. Maths questions are targeted at a level of demand appropriate to the subject: not lower than Key Stage 3 at Foundation Tier and not lower than Foundation Tier GCSE Mathematics at Higher Tier (the DfE subject criteria set a 20% minimum weighting of mathematics for GCSE Chemistry; this specification states only the level of demand). A periodic table (Appendix A) is supplied for both papers. Content marked (chemistry only) is examined in this qualification but not in GCSE Combined Science: Trilogy; content marked (HT only) is examined on Higher Tier papers only. Section 4.11 Key ideas is not a separate room: the specification embeds its eight key ideas throughout the subject content of 4.1 to 4.10 and states that they underpin many aspects of the science assessment and will therefore be assessed across all papers.",
  "commandWords": [
   {
    "word": "Describe",
    "means": "Recall facts, events or processes in an accurate way — for example describe a practical procedure for a specified purpose, or describe patterns and trends in data."
   },
   {
    "word": "Explain",
    "means": "Give reasons: a statement of what happens and why, using scientific ideas — for example explain why new evidence led to a change in the atomic model, or explain the need to control variables."
   },
   {
    "word": "Evaluate",
    "means": "Use the information supplied and your own knowledge to consider the evidence for and against, then reach a judgement — for example evaluate the use of nanoparticles for a specified purpose, or evaluate the quality of evidence in a report about global climate change."
   },
   {
    "word": "Calculate",
    "means": "Use numbers given to work out an answer, showing working, substituting values with appropriate units and giving an appropriate number of significant figures — for example calculate the percentage yield or the atom economy of a reaction."
   },
   {
    "word": "Determine",
    "means": "Use given data or information to obtain an answer — for example determine Rf values from chromatograms, or determine the slope and intercept of a linear graph."
   },
   {
    "word": "Suggest",
    "means": "Apply knowledge and understanding to a new or unfamiliar situation — for example suggest suitable separation and purification techniques for a mixture when given appropriate information."
   },
   {
    "word": "Compare",
    "means": "Describe the similarities and/or differences between things, not just write about one — for example compare the industrial production of fertilisers with laboratory preparations of the same compounds."
   },
   {
    "word": "Identify",
    "means": "Name or otherwise characterise — for example identify which species are oxidised and which are reduced in a given equation, or identify catalysts from their effect on rate."
   },
   {
    "word": "Predict",
    "means": "Give a plausible outcome from a model, a trend or given data — for example predict the products of the electrolysis of an aqueous solution, or predict properties from given trends down a group."
   },
   {
    "word": "Plot",
    "means": "Mark points accurately on a graph from data, with suitable scales and labelled axes, and draw a curve or line of best fit where appropriate — for example plot the quantity of product formed against time."
   },
   {
    "word": "Draw",
    "means": "Produce a diagram or graph — for example draw dot and cross diagrams for ionic and covalent substances, draw simple reaction profiles, or draw tangents to curves on rate graphs."
   },
   {
    "word": "Write",
    "means": "Give the required equation — word equations, balanced symbol equations with state symbols, and (HT only) balanced half equations and ionic equations for the reactions in this specification."
   }
  ],
  "essayShapes": [
   {
    "marks": 6,
    "minutes": 8,
    "structure": "Extended response. The specification requires an answer of sufficient length to construct and develop a sustained line of reasoning which is coherent, relevant, substantiated and logically structured, in prose, extended calculation, or both (the six-mark tariff and levels marking come from AQA's papers and mark schemes, not from the specification). A Level 3 (5–6 mark) answer covers every part of the question with relevant, substantiated chemistry in a logical order — for a practical, the method in sequence with the independent, dependent and control variables and how the results are used; for an explanation, structure → bonding → property, or change → collision theory → effect on rate. Level 2 (3–4 marks) makes relevant points with gaps or weak structure; Level 1 (1–2 marks) is fragmentary."
   }
  ]
 },
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/chemistry/specifications/AQA-8462-SP-2016.PDF",
  "etag": "\"2935a4-5c89066c693fa\"",
  "lastModified": "Mon, 02 Aug 2021 09:43:28 GMT",
  "length": 2700708,
  "checkedAt": "2026-09-16T09:01:54.544Z"
 },
 "topics": [
  {
   "id": "3",
   "component": "P1",
   "option": null,
   "name": "Working scientifically (assessed on every paper)",
   "caseStudies": [],
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
     "content": "Interconvert units. The knowledge and skills in this section apply across the specification, including the required practicals."
    },
    {
     "code": "WS 4.6",
     "q": "How many significant figures?",
     "idea": "Significant figures",
     "content": "Use an appropriate number of significant figures in calculation."
    }
   ]
  },
  {
   "id": "4.1",
   "component": "P1",
   "option": null,
   "name": "Atomic structure and the periodic table",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.1.1.1",
     "q": "What are atoms, elements and compounds, and how are they represented?",
     "idea": "Atoms, elements and compounds",
     "content": "All substances are made of atoms; an atom is the smallest part of an element that can exist. Atoms of each element are represented by a chemical symbol (eg O for oxygen, Na for sodium). There are about 100 different elements, shown in the periodic table. Compounds are formed from elements by chemical reactions, which always form one or more new substances and often involve a detectable energy change. Compounds contain two or more elements chemically combined in fixed proportions, represented by formulae, and can only be separated into elements by chemical reactions. Chemical reactions can be represented by word equations or by symbol/formulae equations. Students will be supplied with a periodic table and should be able to use names and symbols of the first 20 elements, Groups 1 and 7, and other elements in the specification; name compounds from given formulae or symbol equations; write word equations and balanced chemical equations/formulae for the reactions in the specification. (HT only) Write balanced half equations and ionic equations where appropriate."
    },
    {
     "code": "4.1.1.2",
     "q": "How can mixtures be separated?",
     "idea": "Mixtures",
     "content": "A mixture consists of two or more elements or compounds not chemically combined together; the chemical properties of each substance in the mixture are unchanged. Mixtures can be separated by physical processes such as filtration, crystallisation, simple distillation, fractional distillation and chromatography, which do not involve chemical reactions and produce no new substances. Students should be able to describe, explain and give examples of these separation processes, and suggest suitable separation and purification techniques for mixtures when given appropriate information."
    },
    {
     "code": "4.1.1.3",
     "q": "How did the model of the atom develop over time?",
     "idea": "The development of the model of the atom (common content with physics)",
     "content": "New experimental evidence may lead to a scientific model being changed or replaced. Before the discovery of the electron, atoms were thought to be tiny spheres that could not be divided. The discovery of the electron led to the plum pudding model (a ball of positive charge with negative electrons embedded in it). The alpha particle scattering experiment showed the mass of an atom was concentrated at a charged centre (nucleus), replacing the plum pudding model with the nuclear model. Niels Bohr adapted the nuclear model, suggesting electrons orbit the nucleus at specific distances; his theoretical calculations agreed with experimental observations. Later experiments showed the positive charge of the nucleus could be subdivided into particles of equal positive charge, named protons. James Chadwick's experimental work provided evidence for the existence of neutrons within the nucleus, about 20 years after the nucleus became accepted. Students should be able to describe why the scattering experiment evidence led to a change in the atomic model, and the difference between the plum pudding model and the nuclear model. Details of experimental work supporting the Bohr model and of Chadwick's experimental work are not required."
    },
    {
     "code": "4.1.1.4",
     "q": "What are the relative electrical charges of subatomic particles?",
     "idea": "Relative electrical charges of subatomic particles",
     "content": "The relative electrical charges of the particles in atoms are given (proton, neutron, electron). In an atom the number of electrons equals the number of protons in the nucleus, so atoms have no overall electrical charge. The number of protons in an atom of an element is its atomic number; all atoms of a particular element have the same number of protons, and atoms of different elements have different numbers of protons. Students should be able to use the nuclear model to describe atoms."
    },
    {
     "code": "4.1.1.5",
     "q": "How big and how massive are atoms, and what are isotopes?",
     "idea": "Size and mass of atoms",
     "content": "Atoms are very small, with a radius of about 0.1 nm (1 x 10⁻¹⁰ m); the radius of a nucleus is less than 1/10 000 of that of the atom (about 1 x 10⁻¹⁴ m). Almost all of the mass of an atom is in the nucleus. The relative masses of protons, neutrons and electrons are given. The sum of the protons and neutrons in an atom is its mass number. Atoms of the same element can have different numbers of neutrons; these are isotopes of that element. Students should be able to calculate the numbers of protons, neutrons and electrons in an atom or ion, given its atomic number and mass number, and relate the size and scale of atoms to objects in the physical world."
    },
    {
     "code": "4.1.1.6",
     "q": "What is relative atomic mass and how is it calculated?",
     "idea": "Relative atomic mass",
     "content": "The relative atomic mass of an element is an average value that takes account of the abundance of the isotopes of the element. Students should be able to calculate the relative atomic mass of an element given the percentage abundance of its isotopes."
    },
    {
     "code": "4.1.1.7",
     "q": "How is the electronic structure of an atom worked out and represented?",
     "idea": "Electronic structure",
     "content": "The electrons in an atom occupy the lowest available energy levels (innermost available shells). Electronic structure can be represented by numbers or by a diagram, eg sodium is 2,8,1, showing two electrons in the lowest energy level, eight in the second and one in the third. Students may answer questions in terms of either energy levels or shells and should be able to represent the electronic structures of the first twenty elements of the periodic table in both forms."
    },
    {
     "code": "4.1.2.1",
     "q": "How is the periodic table arranged and what does an element's position tell us?",
     "idea": "The periodic table",
     "content": "Elements in the periodic table are arranged in order of atomic (proton) number and so that elements with similar properties are in columns called groups; it is called a periodic table because similar properties occur at regular intervals. Elements in the same group have the same number of electrons in their outer shell (outer electrons), giving them similar chemical properties. Students should be able to explain how the position of an element in the periodic table is related to the arrangement of electrons in its atoms and hence to its atomic number, and predict possible reactions and probable reactivity of elements from their positions in the periodic table."
    },
    {
     "code": "4.1.2.2",
     "q": "How did the periodic table develop historically?",
     "idea": "Development of the periodic table",
     "content": "Before the discovery of protons, neutrons and electrons, scientists attempted to classify elements by arranging them in order of atomic weights. Early periodic tables were incomplete and some elements were placed in inappropriate groups if strict atomic weight order was followed. Mendeleev overcame some problems by leaving gaps for undiscovered elements and, in some places, changed the order based on atomic weights. Elements with properties predicted by Mendeleev were later discovered and filled the gaps. Knowledge of isotopes made it possible to explain why the order based on atomic weights was not always correct. Students should be able to describe these steps in the development of the periodic table."
    },
    {
     "code": "4.1.2.3",
     "q": "How do metals and non-metals differ in terms of properties and position in the periodic table?",
     "idea": "Metals and non-metals",
     "content": "Elements that react to form positive ions are metals; elements that do not form positive ions are non-metals. The majority of elements are metals, found to the left and towards the bottom of the periodic table; non-metals are found towards the right and top. Students should be able to explain the differences between metals and non-metals on the basis of their characteristic physical and chemical properties, explain how the atomic structure of metals and non-metals relates to their position in the periodic table, and explain how the reactions of elements are related to the arrangement of electrons in their atoms and hence to their atomic number."
    },
    {
     "code": "4.1.2.4",
     "q": "Why are the Group 0 elements unreactive, and how do their properties change down the group?",
     "idea": "Group 0",
     "content": "The elements in Group 0 are called the noble gases. They are unreactive and do not easily form molecules because their atoms have stable arrangements of electrons; noble gases have eight electrons in their outer shell, except helium, which has only two. The boiling points of the noble gases increase with increasing relative atomic mass (going down the group). Students should be able to explain how properties of Group 0 elements depend on the outer shell of electrons of the atoms, and predict properties from given trends down the group."
    },
    {
     "code": "4.1.2.5",
     "q": "What are the characteristic properties and reactions of Group 1 elements?",
     "idea": "Group 1",
     "content": "The elements in Group 1 are known as the alkali metals and have characteristic properties because of the single electron in their outer shell. Students should be able to describe the reactions of the first three alkali metals with oxygen, chlorine and water. In Group 1, reactivity of the elements increases going down the group. Students should be able to explain how properties of Group 1 elements depend on the outer shell of electrons of the atoms, and predict properties from given trends down the group."
    },
    {
     "code": "4.1.2.6",
     "q": "What are the characteristic properties and reactions of Group 7 elements?",
     "idea": "Group 7",
     "content": "The elements in Group 7 are known as the halogens and have similar reactions because they all have seven electrons in their outer shell; halogens are non-metals and consist of molecules made of pairs of atoms. Students should be able to describe the nature of the compounds formed when chlorine, bromine and iodine react with metals and non-metals. Further down the group, an element has higher relative molecular mass, melting point and boiling point, but reactivity decreases going down the group. A more reactive halogen can displace a less reactive halogen from an aqueous solution of its salt. Students should be able to explain how properties of Group 7 elements depend on the outer shell of electrons of the atoms, and predict properties from given trends down the group."
    },
    {
     "code": "4.1.3.1",
     "q": "How do the transition elements compare with the Group 1 metals?",
     "idea": "Comparison with Group 1 elements (chemistry only)",
     "content": "(chemistry only) The transition elements are metals with similar properties which are different from those of the elements in Group 1. Students should be able to describe the difference compared with Group 1 in melting points, densities, strength, hardness and reactivity with oxygen, water and halogens, and to exemplify these general properties by reference to Cr, Mn, Fe, Co, Ni, Cu."
    },
    {
     "code": "4.1.3.2",
     "q": "What are the typical properties of the transition elements?",
     "idea": "Typical properties of transition metals (chemistry only)",
     "content": "(chemistry only) Many transition elements have ions with different charges, form coloured compounds and are useful as catalysts. Students should be able to exemplify these general properties by reference to compounds of Cr, Mn, Fe, Co, Ni, Cu."
    }
   ],
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
   "id": "4.2",
   "component": "P1",
   "option": null,
   "name": "Bonding, structure, and the properties of matter",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.2.1.1",
     "q": "What are the three types of strong chemical bond and where does each occur?",
     "idea": "Chemical bonds",
     "content": "There are three types of strong chemical bonds: ionic, covalent and metallic. For ionic bonding the particles are oppositely charged ions; for covalent bonding the particles are atoms which share pairs of electrons; for metallic bonding the particles are atoms which share delocalised electrons. Ionic bonding occurs in compounds formed from metals combined with non-metals. Covalent bonding occurs in most non-metallic elements and in compounds of non-metals. Metallic bonding occurs in metallic elements and alloys. Students should be able to explain chemical bonding in terms of electrostatic forces and the transfer or sharing of electrons."
    },
    {
     "code": "4.2.1.2",
     "q": "How does ionic bonding form, and what charges do the resulting ions carry?",
     "idea": "Ionic bonding",
     "content": "When a metal atom reacts with a non-metal atom, electrons in the outer shell of the metal atom are transferred: metal atoms lose electrons to become positively charged ions and non-metal atoms gain electrons to become negatively charged ions. Ions produced by metals in Groups 1 and 2 and by non-metals in Groups 6 and 7 have the electronic structure of a noble gas (Group 0). Electron transfer can be represented by a dot and cross diagram, eg for sodium chloride. Students should be able to draw dot and cross diagrams for ionic compounds formed by metals in Groups 1 and 2 with non-metals in Groups 6 and 7. The charge on the ions relates to the group number of the element; students should be able to work out the charge on the ions of metals and non-metals from the group number, limited to metals in Groups 1 and 2 and non-metals in Groups 6 and 7."
    },
    {
     "code": "4.2.1.3",
     "q": "What is the structure of an ionic compound and how can it be represented?",
     "idea": "Ionic compounds",
     "content": "An ionic compound is a giant structure of ions, held together by strong electrostatic forces of attraction between oppositely charged ions acting in all directions in the lattice (ionic bonding). The structure of sodium chloride can be represented in several forms. Students should be able to deduce that a compound is ionic from a diagram of its structure in one of the specified forms, describe the limitations of using dot and cross, ball and stick, and two- and three-dimensional diagrams to represent a giant ionic structure, and work out the empirical formula of an ionic compound from a given model or diagram showing the ions in the structure. Students should be familiar with the structure of sodium chloride but do not need to know the structures of other ionic compounds."
    },
    {
     "code": "4.2.1.4",
     "q": "How does covalent bonding form small molecules, polymers and giant structures?",
     "idea": "Covalent bonding",
     "content": "When atoms share pairs of electrons they form strong covalent bonds. Covalently bonded substances may consist of small molecules (students should recognise common substances that consist of small molecules from their chemical formula), very large molecules such as polymers, or giant covalent structures such as diamond and silicon dioxide. Covalent bonds in molecules and giant structures, and polymers (as a repeating unit where n is a large number), can be represented in specified forms. Students should be able to draw dot and cross diagrams for the molecules of hydrogen, chlorine, oxygen, nitrogen, hydrogen chloride, water, ammonia and methane; represent covalent bonds in small molecules, polymer repeating units and giant covalent structures using a line for a single bond; describe the limitations of dot and cross, ball and stick, and 2D/3D diagrams for molecules or giant structures; and deduce the molecular formula of a substance from a given model or diagram."
    },
    {
     "code": "4.2.1.5",
     "q": "What is metallic bonding and why are metallic bonds strong?",
     "idea": "Metallic bonding",
     "content": "Metals consist of giant structures of atoms arranged in a regular pattern. The electrons in the outer shell of metal atoms are delocalised and free to move through the whole structure; the sharing of delocalised electrons gives rise to strong metallic bonds. The bonding in metals may be represented in a specified diagrammatic form."
    },
    {
     "code": "4.2.2.1",
     "q": "What are the three states of matter and how does particle theory explain changes of state?",
     "idea": "The three states of matter",
     "content": "The three states of matter are solid, liquid and gas. Melting and freezing take place at the melting point; boiling and condensing take place at the boiling point. The states can be represented by a simple model in which particles are small solid spheres; particle theory can help explain melting, boiling, freezing and condensing. The energy needed to change state depends on the strength of the forces between particles, which depends on the type of bonding and structure; stronger forces mean higher melting and boiling points. (HT only) Limitations of the simple model include that there are no forces in the model, all particles are represented as spheres, and the spheres are solid. Students should be able to predict states of substances at different temperatures given data, explain the different temperatures at which changes of state occur in terms of energy transfers and types of bonding, recognise that atoms themselves do not have the bulk properties of materials, and (HT only) explain the limitations of the particle theory in relation to changes of state when particles are represented by solid inelastic spheres with no forces between them."
    },
    {
     "code": "4.2.2.2",
     "q": "How are the states of matter shown in chemical equations?",
     "idea": "State symbols",
     "content": "In chemical equations, the three states of matter are shown as (s), (l) and (g), with (aq) for aqueous solutions. Students should be able to include appropriate state symbols in chemical equations for the reactions in this specification."
    },
    {
     "code": "4.2.2.3",
     "q": "Why do ionic compounds have high melting and boiling points and conduct electricity when molten or dissolved?",
     "idea": "Properties of ionic compounds",
     "content": "Ionic compounds have regular structures (giant ionic lattices) with strong electrostatic forces of attraction in all directions between oppositely charged ions. These compounds have high melting points and high boiling points because of the large amounts of energy needed to break the many strong bonds. When melted or dissolved in water, ionic compounds conduct electricity because the ions are free to move so charge can flow. Knowledge of the structures of specific ionic compounds other than sodium chloride is not required."
    },
    {
     "code": "4.2.2.4",
     "q": "Why do substances made of small molecules have low melting and boiling points and not conduct electricity?",
     "idea": "Properties of small molecules",
     "content": "Substances that consist of small molecules are usually gases or liquids with relatively low melting and boiling points, because there are only weak forces between the molecules (intermolecular forces); it is these intermolecular forces, not the covalent bonds, that are overcome when the substance melts or boils. Intermolecular forces increase with the size of the molecules, so larger molecules have higher melting and boiling points. These substances do not conduct electricity because the molecules do not have an overall electric charge. Students should be able to use the idea that intermolecular forces are weak compared with covalent bonds to explain the bulk properties of molecular substances."
    },
    {
     "code": "4.2.2.5",
     "q": "Why are polymers solid at room temperature?",
     "idea": "Polymers",
     "content": "Polymers have very large molecules. The atoms in polymer molecules are linked to other atoms by strong covalent bonds. The intermolecular forces between polymer molecules are relatively strong, so these substances are solids at room temperature. Students should be able to recognise polymers from diagrams showing their bonding and structure."
    },
    {
     "code": "4.2.2.6",
     "q": "Why do giant covalent structures have very high melting points?",
     "idea": "Giant covalent structures",
     "content": "Substances that consist of giant covalent structures are solids with very high melting points; all of the atoms in these structures are linked to other atoms by strong covalent bonds, which must be overcome to melt or boil these substances. Diamond and graphite (forms of carbon) and silicon dioxide (silica) are examples of giant covalent structures. Students should be able to recognise giant covalent structures from diagrams showing their bonding and structure."
    },
    {
     "code": "4.2.2.7",
     "q": "Why do pure metals bend and why are alloys harder than pure metals?",
     "idea": "Properties of metals and alloys",
     "content": "Metals have giant structures of atoms with strong metallic bonding, so most metals have high melting and boiling points. In pure metals, atoms are arranged in layers, which allows metals to be bent and shaped. Pure metals are too soft for many uses and so are mixed with other metals to make alloys, which are harder. Students should be able to explain why alloys are harder than pure metals in terms of distortion of the layers of atoms in the structure of a pure metal."
    },
    {
     "code": "4.2.2.8",
     "q": "Why are metals good conductors of electricity and thermal energy?",
     "idea": "Metals as conductors",
     "content": "Metals are good conductors of electricity because the delocalised electrons in the metal carry electrical charge through the metal. Metals are good conductors of thermal energy because energy is transferred by the delocalised electrons."
    },
    {
     "code": "4.2.3.1",
     "q": "How does the structure of diamond explain its properties?",
     "idea": "Diamond",
     "content": "In diamond, each carbon atom forms four covalent bonds with other carbon atoms in a giant covalent structure, so diamond is very hard, has a very high melting point and does not conduct electricity. Students should be able to explain the properties of diamond in terms of its structure and bonding."
    },
    {
     "code": "4.2.3.2",
     "q": "How does the structure of graphite explain its properties?",
     "idea": "Graphite",
     "content": "In graphite, each carbon atom forms three covalent bonds with three other carbon atoms, forming layers of hexagonal rings which have no covalent bonds between the layers. One electron from each carbon atom is delocalised. Students should be able to explain the properties of graphite in terms of its structure and bonding, and should know that graphite is similar to metals in that it has delocalised electrons."
    },
    {
     "code": "4.2.3.3",
     "q": "What are graphene and fullerenes, and what are they used for?",
     "idea": "Graphene and fullerenes",
     "content": "Graphene is a single layer of graphite and has properties that make it useful in electronics and composites; students should be able to explain the properties of graphene in terms of its structure and bonding. Fullerenes are molecules of carbon atoms with hollow shapes, based on hexagonal rings of carbon atoms but may also contain rings with five or seven carbon atoms. The first fullerene discovered was Buckminsterfullerene (C60), which has a spherical shape. Carbon nanotubes are cylindrical fullerenes with very high length to diameter ratios, useful for nanotechnology, electronics and materials. Students should be able to recognise graphene and fullerenes from diagrams and descriptions of their bonding and structure, and give examples of the uses of fullerenes, including carbon nanotubes."
    },
    {
     "code": "4.2.4.1",
     "q": "How big are nanoparticles and why does size change their properties?",
     "idea": "Sizes of particles and their properties (chemistry only)",
     "content": "(chemistry only) Nanoscience refers to structures that are 1–100 nm in size, of the order of a few hundred atoms. Nanoparticles are smaller than fine particles (PM2.5), which have diameters between 100 and 2500 nm (1 x 10-7 m and 2.5 x 10-6 m). Coarse particles (PM10) have diameters between 1 x 10-5 m and 2.5 x 10-6 m and are often referred to as dust. As the side of a cube decreases by a factor of 10 the surface area to volume ratio increases by a factor of 10. Nanoparticles may have properties different from those for the same materials in bulk because of their high surface area to volume ratio; it may also mean that smaller quantities are needed to be effective than for materials with normal particle sizes. Students should be able to compare ‘nano’ dimensions to typical dimensions of atoms and molecules."
    },
    {
     "code": "4.2.4.2",
     "q": "What are nanoparticles used for, and what are the risks?",
     "idea": "Uses of nanoparticles (chemistry only)",
     "content": "(chemistry only) Nanoparticles have many applications in medicine, in electronics, in cosmetics and sun creams, as deodorants, and as catalysts; new applications for nanoparticulate materials are an important area of research. Students should consider advantages and disadvantages of the applications of these nanoparticulate materials, but do not need to know specific examples or properties other than those specified. Students should be able to, given appropriate information, evaluate the use of nanoparticles for a specified purpose, and explain that there are possible risks associated with the use of nanoparticles."
    }
   ],
   "skills": [
    "MS 5b",
    "WS 1.2",
    "MS 4a",
    "MS 1a",
    "MS 1c",
    "WS 1.4",
    "MS 2h",
    "MS 5c",
    "MS 1b",
    "MS 1d",
    "WS 1.3",
    "WS 1.5",
    "WS 4.1",
    "WS 4.2",
    "WS 4.3",
    "WS 4.4",
    "WS 4.5"
   ]
  },
  {
   "id": "4.3",
   "component": "P1",
   "option": null,
   "name": "Quantitative chemistry",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.3.1.1",
     "q": "Why is mass conserved in a chemical reaction and how is this shown in equations?",
     "idea": "Conservation of mass and balanced chemical equations",
     "content": "The law of conservation of mass states that no atoms are lost or made during a chemical reaction, so the mass of the products equals the mass of the reactants. This means chemical reactions can be represented by symbol equations balanced in terms of the numbers of atoms of each element on both sides. Students should understand the use of multipliers in equations in normal script before a formula and in subscript within a formula."
    },
    {
     "code": "4.3.1.2",
     "q": "What is relative formula mass and how is it used to calculate percentage composition?",
     "idea": "Relative formula mass",
     "content": "The relative formula mass (Mr) of a compound is the sum of the relative atomic masses of the atoms in the numbers shown in the formula. In a balanced chemical equation, the sum of the relative formula masses of the reactants in the quantities shown equals the sum of the relative formula masses of the products in the quantities shown. Students should be able to calculate the percentage by mass in a compound given the relative formula mass and the relative atomic masses."
    },
    {
     "code": "4.3.1.3",
     "q": "Why might mass appear to change during a reaction involving a gas?",
     "idea": "Mass changes when a reactant or product is a gas",
     "content": "Some reactions may appear to involve a change in mass, but this can usually be explained because a reactant or product is a gas and its mass has not been taken into account, eg when a metal reacts with oxygen the mass of the oxide produced is greater than the mass of the metal, or in thermal decomposition of metal carbonates carbon dioxide escapes into the atmosphere leaving the metal oxide as the only solid product. Students should be able to explain any observed changes in mass in non-enclosed systems during a chemical reaction given the balanced symbol equation, and explain these changes in terms of the particle model."
    },
    {
     "code": "4.3.1.4",
     "q": "How is uncertainty in chemical measurements represented and estimated?",
     "idea": "Chemical measurements",
     "content": "Whenever a measurement is made there is always some uncertainty about the result obtained. Students should be able to represent the distribution of results and make estimations of uncertainty, and use the range of a set of measurements about the mean as a measure of uncertainty."
    },
    {
     "code": "4.3.2.1",
     "q": "What is a mole and how does it relate to relative formula mass and the Avogadro constant?",
     "idea": "Moles (HT only)",
     "content": "(HT only) Chemical amounts are measured in moles (symbol mol). The mass of one mole of a substance in grams is numerically equal to its relative formula mass. One mole of a substance contains the same number of the stated particles, atoms, molecules or ions as one mole of any other substance. The number of atoms, molecules or ions in a mole of a given substance is the Avogadro constant, value 6.02 x 10²³ per mole. Students should understand that the measurement of amounts in moles can apply to atoms, molecules, ions, electrons, formulae and equations, eg one mole of carbon (C) has the same number of atoms as the number of molecules in one mole of carbon dioxide (CO2). Students should be able to use the relative formula mass of a substance to calculate the number of moles in a given mass of that substance and vice versa (moles = mass ÷ Mr)."
    },
    {
     "code": "4.3.2.2",
     "q": "How can the masses of reactants and products be calculated from balanced symbol equations using moles?",
     "idea": "Amounts of substances in equations (HT only)",
     "content": "(HT only) The masses of reactants and products can be calculated from balanced symbol equations. Chemical equations can be interpreted in terms of moles, eg Mg + 2HCl -> MgCl2 + H2 shows one mole of magnesium reacts with two moles of hydrochloric acid to produce one mole of magnesium chloride and one mole of hydrogen gas. Students should be able to calculate the masses of substances shown in a balanced symbol equation, and calculate the masses of reactants and products from the balanced symbol equation and the mass of a given reactant or product."
    },
    {
     "code": "4.3.2.3",
     "q": "How can the masses of reactants and products be used to work out the balancing numbers in an equation?",
     "idea": "Using moles to balance equations (HT only)",
     "content": "(HT only) The balancing numbers in a symbol equation can be calculated from the masses of reactants and products by converting the masses in grams to amounts in moles and converting the numbers of moles to simple whole number ratios. Students should be able to balance an equation given the masses of reactants and products, and should be able to change the subject of a mathematical equation."
    },
    {
     "code": "4.3.2.4",
     "q": "What is a limiting reactant and how does it affect the amount of product formed?",
     "idea": "Limiting reactants (HT only)",
     "content": "(HT only) In a chemical reaction involving two reactants, it is common to use an excess of one reactant to ensure all of the other reactant is used; the reactant that is completely used up is called the limiting reactant because it limits the amount of products. Students should be able to explain the effect of a limiting quantity of a reactant on the amount of products it is possible to obtain in terms of amounts in moles or masses in grams."
    },
    {
     "code": "4.3.2.5",
     "q": "How is the concentration of a solution measured and calculated?",
     "idea": "Concentration of solutions",
     "content": "Many chemical reactions take place in solutions. The concentration of a solution can be measured in mass per given volume of solution, eg grams per dm3 (g/dm3). Students should be able to calculate the mass of solute in a given volume of solution of known concentration in terms of mass per given volume of solution. (HT only) Explain how the mass of a solute and the volume of a solution is related to the concentration of the solution."
    },
    {
     "code": "4.3.3.1",
     "q": "Why is the yield of a reaction less than the calculated amount, and how is percentage yield found?",
     "idea": "Percentage yield (chemistry only)",
     "content": "(chemistry only) Even though no atoms are gained or lost in a chemical reaction, it is not always possible to obtain the calculated amount of a product because the reaction may not go to completion because it is reversible, some of the product may be lost when it is separated from the reaction mixture, or some of the reactants may react in ways different to the expected reaction. The amount of a product obtained is known as the yield; when compared with the maximum theoretical amount as a percentage it is called the percentage yield: % yield = (mass of product actually made ÷ maximum theoretical mass of product) × 100. Students should be able to calculate the percentage yield of a product from the actual yield of a reaction, and (HT only) calculate the theoretical mass of a product from a given mass of reactant and the balanced equation for the reaction."
    },
    {
     "code": "4.3.3.2",
     "q": "What is atom economy and why does it matter?",
     "idea": "Atom economy (chemistry only)",
     "content": "(chemistry only) The atom economy (atom utilisation) is a measure of the amount of starting materials that end up as useful products. It is important for sustainable development and for economic reasons to use reactions with high atom economy. The percentage atom economy of a reaction is calculated using the balanced equation: (relative formula mass of desired product from equation ÷ sum of relative formula masses of all reactants from equation) × 100. Students should be able to calculate the atom economy of a reaction to form a desired product from the balanced equation, and (HT only) explain why a particular reaction pathway is chosen to produce a specified product given appropriate data such as atom economy (if not calculated), yield, rate, equilibrium position and usefulness of by-products."
    },
    {
     "code": "4.3.4",
     "q": "How is concentration in mol/dm3 used in calculations?",
     "idea": "Using concentrations of solutions in mol/dm3 (chemistry only) (HT only)",
     "content": "(chemistry only) (HT only) The concentration of a solution can be measured in mol/dm3. The amount in moles of solute or the mass in grams of solute in a given volume of solution can be calculated from its concentration in mol/dm3. If the volumes of two solutions that react completely are known and the concentration of one solution is known, the concentration of the other solution can be calculated. Students should be able to explain how the concentration of a solution in mol/dm3 is related to the mass of the solute and the volume of the solution."
    },
    {
     "code": "4.3.5",
     "q": "How are volumes of gases calculated from amounts of substance?",
     "idea": "Use of amount of substance in relation to volumes of gases (chemistry only) (HT only)",
     "content": "(chemistry only) (HT only) Equal amounts in moles of gases occupy the same volume under the same conditions of temperature and pressure. The volume of one mole of any gas at room temperature and pressure (20°C and 1 atmosphere pressure) is 24 dm3. The volumes of gaseous reactants and products can be calculated from the balanced equation for the reaction. Students should be able to calculate the volume of a gas at room temperature and pressure from its mass and relative formula mass, calculate volumes of gaseous reactants and products from a balanced equation and a given volume of a gaseous reactant or product, and change the subject of a mathematical equation."
    }
   ],
   "skills": [
    "AT 1",
    "AT 2",
    "AT 3",
    "AT 6",
    "AT 8",
    "WS 1.2",
    "WS 3.4",
    "WS 4.1",
    "WS 4.2",
    "WS 4.3",
    "WS 4.5",
    "WS 4.6",
    "MS 1a",
    "MS 1b",
    "MS 1c",
    "MS 2a",
    "MS 3a",
    "MS 3b",
    "MS 3c"
   ]
  },
  {
   "id": "4.4",
   "component": "P1",
   "option": null,
   "name": "Chemical changes",
   "caseStudies": [
    "Required practical activity 1: preparation of a pure, dry sample of a soluble salt from an insoluble oxide or carbonate, using a Bunsen burner to heat dilute acid and a water bath or electric heater to evaporate the solution.",
    "Required practical activity 2: (chemistry only) determination of the reacting volumes of solutions of a strong acid and a strong alkali by titration. (HT only) determination of the concentration of one of the solutions in mol/dm3 and g/dm3 from the reacting volumes and the known concentration of the other solution.",
    "Required practical activity 3: investigate what happens when aqueous solutions are electrolysed using inert electrodes. This should be an investigation involving developing a hypothesis."
   ],
   "ideas": [
    {
     "code": "4.4.1.1",
     "q": "What happens when metals react with oxygen?",
     "idea": "Metal oxides",
     "content": "Metals react with oxygen to produce metal oxides. The reactions are oxidation reactions because the metals gain oxygen. Students should be able to explain reduction and oxidation in terms of loss or gain of oxygen."
    },
    {
     "code": "4.4.1.2",
     "q": "How can metals be arranged in a reactivity series?",
     "idea": "The reactivity series",
     "content": "When metals react with other substances the metal atoms form positive ions; the reactivity of a metal is related to its tendency to form positive ions. Metals can be arranged in a reactivity series. Potassium, sodium, lithium, calcium, magnesium, zinc, iron and copper can be put in order of reactivity from their reactions with water and dilute acids. The non-metals hydrogen and carbon are often included in the reactivity series. A more reactive metal can displace a less reactive metal from a compound. Students should be able to recall and describe the reactions, if any, of potassium, sodium, lithium, calcium, magnesium, zinc, iron and copper with water or dilute acids and, where appropriate, place these metals in order of reactivity; explain how the reactivity of metals with water or dilute acids is related to the tendency of the metal to form its positive ion; and deduce an order of reactivity of metals based on experimental results. Reactions of metals with water and acids are limited to room temperature and do not include reactions with steam."
    },
    {
     "code": "4.4.1.3",
     "q": "How are metals extracted from their compounds by reduction?",
     "idea": "Extraction of metals and reduction",
     "content": "Unreactive metals such as gold are found in the Earth as the metal itself, but most metals are found as compounds that require chemical reactions to extract the metal. Metals less reactive than carbon can be extracted from their oxides by reduction with carbon; reduction involves the loss of oxygen. Knowledge and understanding are limited to the reduction of oxides using carbon; knowledge of the details of processes used in the extraction of metals is not required. Students should be able to interpret or evaluate specific metal extraction processes when given appropriate information, and identify the substances which are oxidised or reduced in terms of gain or loss of oxygen."
    },
    {
     "code": "4.4.1.4",
     "q": "How are oxidation and reduction defined in terms of electrons?",
     "idea": "Oxidation and reduction in terms of electrons (HT only)",
     "content": "(HT only) Oxidation is the loss of electrons and reduction is the gain of electrons. Students should be able to write ionic equations for displacement reactions, and identify in a given reaction, symbol equation or half equation which species are oxidised and which are reduced."
    },
    {
     "code": "4.4.2.1",
     "q": "What happens when acids react with metals, and what is the redox nature of these reactions?",
     "idea": "Reactions of acids with metals",
     "content": "Acids react with some metals to produce salts and hydrogen. (HT only) Students should be able to explain in terms of gain or loss of electrons that these are redox reactions, and identify which species are oxidised and which are reduced in given chemical equations. Knowledge of reactions is limited to those of magnesium, zinc and iron with hydrochloric and sulfuric acids."
    },
    {
     "code": "4.4.2.2",
     "q": "How are acids neutralised and what determines the salt produced?",
     "idea": "Neutralisation of acids and salt production",
     "content": "Acids are neutralised by alkalis (eg soluble metal hydroxides) and bases (eg insoluble metal hydroxides and metal oxides) to produce salts and water, and by metal carbonates to produce salts, water and carbon dioxide. The particular salt produced depends on the acid used (hydrochloric acid produces chlorides, nitric acid produces nitrates, sulfuric acid produces sulfates) and the positive ions in the base, alkali or carbonate. Students should be able to predict products from given reactants and use the formulae of common ions to deduce the formulae of salts."
    },
    {
     "code": "4.4.2.3",
     "q": "How can a pure, dry sample of a soluble salt be prepared? (Required practical activity 8)",
     "idea": "Soluble salts",
     "content": "Soluble salts can be made from acids by reacting them with solid insoluble substances, such as metals, metal oxides, hydroxides or carbonates. The solid is added to the acid until no more reacts and the excess solid is filtered off to produce a solution of the salt; salt solutions can be crystallised to produce solid salts. Students should be able to describe how to make pure, dry samples of named soluble salts from information provided."
    },
    {
     "code": "4.4.2.3 (Required practical 1)",
     "q": "How do you prepare a pure, dry sample of a soluble salt?",
     "idea": "Required practical activity 1: preparation of a pure, dry sample of a soluble salt",
     "content": "Required practical 1: preparation of a pure, dry sample of a soluble salt from an insoluble oxide or carbonate, using a Bunsen burner to heat dilute acid and a water bath or electric heater to evaporate the solution. AT skills covered by this practical activity: 2, 3, 4 and 6 — AT 2 safe use of appropriate heating devices and techniques including use of a Bunsen burner and a water bath or electric heater; AT 3 use of appropriate apparatus and techniques for conducting chemical reactions, including appropriate reagents; AT 4 safe use of a range of equipment to purify and/or separate chemical mixtures including evaporation, filtration, crystallisation; AT 6 safe use and careful handling of liquids and solids, including careful mixing of reagents under controlled conditions. Key opportunities for skills development: WS 2.3 and WS 2.4."
    },
    {
     "code": "4.4.2.4",
     "q": "What is the pH scale and how does it relate hydrogen and hydroxide ion concentration to neutralisation?",
     "idea": "The pH scale and neutralisation",
     "content": "Acids produce hydrogen ions (H+) in aqueous solutions. Aqueous solutions of alkalis contain hydroxide ions (OH-). The pH scale, from 0 to 14, is a measure of the acidity or alkalinity of a solution, measured using universal indicator or a pH probe. A solution with pH 7 is neutral; aqueous solutions of acids have pH less than 7 and aqueous solutions of alkalis have pH greater than 7. In neutralisation reactions between an acid and an alkali, hydrogen ions react with hydroxide ions to produce water (represented by an equation). Students should be able to describe the use of universal indicator or a wide range indicator to measure the approximate pH of a solution, and use the pH scale to identify acidic or alkaline solutions."
    },
    {
     "code": "4.4.2.5",
     "q": "How are the reacting volumes of an acid and an alkali found by titration?",
     "idea": "Titrations (chemistry only)",
     "content": "(chemistry only) The volumes of acid and alkali solutions that react with each other can be measured by titration using a suitable indicator. Students should be able to describe how to carry out titrations using strong acids and strong alkalis only (sulfuric, hydrochloric and nitric acids only) to find the reacting volumes accurately, and (HT only) calculate the chemical quantities in titrations involving concentrations in mol/dm3 and in g/dm3."
    },
    {
     "code": "4.4.2.5 (Required practical 2)",
     "q": "How is a titration carried out and used to find a concentration?",
     "idea": "Required practical activity 2: determination of reacting volumes by titration (chemistry only)",
     "content": "Required practical 2: (chemistry only) determination of the reacting volumes of solutions of a strong acid and a strong alkali by titration. (HT only) Determination of the concentration of one of the solutions in mol/dm3 and g/dm3 from the reacting volumes and the known concentration of the other solution. AT skills covered by this practical activity: 1 and 8 — AT 1 use of appropriate apparatus to make and record a range of measurements accurately, including volume of liquids; AT 8 the determination of concentrations of strong acids and strong alkalis. Key opportunities and skills development: WS 2.4, WS 2.6, MS 1a, MS 1c, MS 2a."
    },
    {
     "code": "4.4.2.6",
     "q": "What is the difference between strong and weak acids, and how does pH relate to hydrogen ion concentration?",
     "idea": "Strong and weak acids (HT only)",
     "content": "(HT only) A strong acid is completely ionised in aqueous solution (examples: hydrochloric, nitric and sulfuric acids); a weak acid is only partially ionised in aqueous solution (examples: ethanoic, citric and carbonic acids). For a given concentration of aqueous solutions, the stronger an acid, the lower the pH. As the pH decreases by one unit, the hydrogen ion concentration of the solution increases by a factor of 10. Students should be able to use and explain the terms dilute and concentrated (in terms of amount of substance) and weak and strong (in terms of degree of ionisation) in relation to acids, and describe neutrality and relative acidity in terms of the effect on hydrogen ion concentration and the numerical value of pH (whole numbers only)."
    },
    {
     "code": "4.4.3.1",
     "q": "What is electrolysis and how do ions behave at the electrodes?",
     "idea": "The process of electrolysis",
     "content": "When an ionic compound is melted or dissolved in water, the ions are free to move about within the liquid or solution; these liquids and solutions are able to conduct electricity and are called electrolytes. Passing an electric current through electrolytes causes the ions to move to the electrodes: positively charged ions move to the negative electrode (the cathode), and negatively charged ions move to the positive electrode (the anode). Ions are discharged at the electrodes producing elements; this process is called electrolysis. (HT only) Throughout Section 4.4.3 Higher Tier students should be able to write half equations for the reactions occurring at the electrodes during electrolysis, and may be required to complete and balance supplied half equations."
    },
    {
     "code": "4.4.3.2",
     "q": "What products form when a molten ionic compound is electrolysed?",
     "idea": "Electrolysis of molten ionic compounds",
     "content": "When a simple ionic compound (eg lead bromide) is electrolysed in the molten state using inert electrodes, the metal (lead) is produced at the cathode and the non-metal (bromine) is produced at the anode. Students should be able to predict the products of the electrolysis of binary ionic compounds in the molten state. A safer alternative for practical work is anhydrous zinc chloride."
    },
    {
     "code": "4.4.3.3",
     "q": "How is electrolysis used to extract reactive metals such as aluminium?",
     "idea": "Using electrolysis to extract metals",
     "content": "Metals can be extracted from molten compounds using electrolysis; this is used if the metal is too reactive to be extracted by reduction with carbon or if the metal reacts with carbon. Large amounts of energy are used in the extraction process to melt the compounds and to produce the electrical current. Aluminium is manufactured by the electrolysis of a molten mixture of aluminium oxide and cryolite using carbon as the positive electrode (anode). Students should be able to explain why a mixture is used as the electrolyte, and explain why the positive electrode must be continually replaced."
    },
    {
     "code": "4.4.3.4",
     "q": "What determines which ions are discharged when an aqueous solution is electrolysed? (Required practical activity 9)",
     "idea": "Electrolysis of aqueous solutions",
     "content": "The ions discharged when an aqueous solution is electrolysed using inert electrodes depend on the relative reactivity of the elements involved. At the negative electrode (cathode), hydrogen is produced if the metal is more reactive than hydrogen. At the positive electrode (anode), oxygen is produced unless the solution contains halide ions, when the halogen is produced; this happens because in the aqueous solution water molecules break down producing hydrogen ions and hydroxide ions that are discharged. Students should be able to predict the products of the electrolysis of aqueous solutions containing a single ionic compound."
    },
    {
     "code": "4.4.3.4 (Required practical 3)",
     "q": "What happens when aqueous solutions are electrolysed using inert electrodes?",
     "idea": "Required practical activity 3: electrolysis of aqueous solutions using inert electrodes",
     "content": "Required practical 3: investigate what happens when aqueous solutions are electrolysed using inert electrodes. This should be an investigation involving developing a hypothesis. AT skills covered by this practical activity: 3, 7 and 8 — AT 3 use of appropriate apparatus and techniques for conducting and monitoring chemical reactions; AT 7 use of appropriate apparatus and techniques to draw, set up and use electrochemical cells for separation and production of elements and compounds; AT 8 use of appropriate qualitative reagents and techniques to analyse and identify unknown samples or products including gas tests for hydrogen, oxygen and chlorine. Key opportunities and skills development: WS 2.1, WS 2.2, WS 2.3, WS 2.4, WS 2.6."
    },
    {
     "code": "4.4.3.5",
     "q": "How are the reactions at each electrode during electrolysis represented as half equations?",
     "idea": "Representation of reactions at electrodes as half equations (HT only)",
     "content": "(HT only) During electrolysis, at the cathode (negative electrode), positively charged ions gain electrons and so the reactions are reductions. At the anode (positive electrode), negatively charged ions lose electrons and so the reactions are oxidations. Reactions at electrodes can be represented by half equations, for example 2H+ + 2e- -> H2 and 4OH- -> O2 + 2H2O + 4e- (or 4OH- - 4e- -> O2 + 2H2O)."
    }
   ],
   "skills": [
    "AT 2",
    "AT 3",
    "AT 4",
    "AT 6",
    "AT 7",
    "AT 8",
    "AT 1",
    "WS 1.2",
    "WS 2.1",
    "WS 2.2",
    "WS 2.3",
    "WS 2.4",
    "WS 2.6",
    "MS 1a",
    "MS 1c",
    "MS 2a",
    "MS 2h"
   ]
  },
  {
   "id": "4.5",
   "component": "P1",
   "option": null,
   "name": "Energy changes",
   "caseStudies": [
    "Required practical activity 4: investigate the variables that affect temperature changes in reacting solutions such as, eg acid plus metals, acid plus carbonates, neutralisations, displacement of metals."
   ],
   "ideas": [
    {
     "code": "4.5.1.1",
     "q": "What is the difference between exothermic and endothermic reactions, and what are they used for? (Required practical activity 10)",
     "idea": "Energy transfer during exothermic and endothermic reactions",
     "content": "Energy is conserved in chemical reactions: the amount of energy in the universe at the end of a chemical reaction is the same as before it took place. If a reaction transfers energy to the surroundings, the product molecules must have less energy than the reactants, by the amount transferred. An exothermic reaction transfers energy to the surroundings so the temperature of the surroundings increases; exothermic reactions include combustion, many oxidation reactions and neutralisation. Everyday uses of exothermic reactions include self-heating cans and hand warmers. An endothermic reaction takes in energy from the surroundings so the temperature of the surroundings decreases; endothermic reactions include thermal decompositions and the reaction of citric acid and sodium hydrogencarbonate. Some sports injury packs are based on endothermic reactions. Students should be able to distinguish between exothermic and endothermic reactions on the basis of the temperature change of the surroundings, and evaluate uses and applications of exothermic and endothermic reactions given appropriate information. Limited to measurement of temperature change; calculation of energy changes or ΔH is not required."
    },
    {
     "code": "4.5.1.1 (Required practical 4)",
     "q": "Which variables affect the temperature change in a reacting solution?",
     "idea": "Required practical activity 4: variables that affect temperature changes in reacting solutions",
     "content": "Required practical 4: investigate the variables that affect temperature changes in reacting solutions such as, eg acid plus metals, acid plus carbonates, neutralisations, displacement of metals. AT skills covered by this practical activity: 1, 3, 5 and 6 — AT 1 use of appropriate apparatus to make and record a range of measurements accurately, including mass, temperature, and volume of liquids; AT 3 use of appropriate apparatus and techniques for conducting and monitoring chemical reactions; AT 5 making and recording of appropriate observations during chemical reactions including changes in temperature; AT 6 safe use and careful handling of gases, liquids and solids, including careful mixing of reagents under controlled conditions, using appropriate apparatus to explore chemical changes. Key opportunities and skills development: WS 2.1, WS 2.2, WS 2.3, WS 2.4, WS 2.6, WS 2.7, MS 1a, MS 2a, MS 2b, MS 4a, MS 4c."
    },
    {
     "code": "4.5.1.2",
     "q": "How do reaction profiles show the energy changes and activation energy of a reaction?",
     "idea": "Reaction profiles",
     "content": "Chemical reactions can occur only when reacting particles collide with each other with sufficient energy; the minimum amount of energy that particles must have to react is called the activation energy. Reaction profiles can be used to show the relative energies of reactants and products, the activation energy and the overall energy change of a reaction. Students should be able to draw simple reaction profiles (energy level diagrams) for exothermic and endothermic reactions showing the relative energies of reactants and products, the activation energy and the overall energy change, with a curved line to show the energy as the reaction proceeds; use reaction profiles to identify reactions as exothermic or endothermic; and explain that the activation energy is the energy needed for a reaction to occur."
    },
    {
     "code": "4.5.1.3",
     "q": "How can the overall energy change of a reaction be calculated from bond energies?",
     "idea": "The energy change of reactions (HT only)",
     "content": "(HT only) During a chemical reaction, energy must be supplied to break bonds in the reactants, and energy is released when bonds in the products are formed. The energy needed to break bonds and the energy released when bonds are formed can be calculated from bond energies. The difference between the sum of the energy needed to break bonds in the reactants and the sum of the energy released when bonds in the products are formed is the overall energy change of the reaction. In an exothermic reaction, the energy released from forming new bonds is greater than the energy needed to break existing bonds; in an endothermic reaction, the energy needed to break existing bonds is greater than the energy released from forming new bonds. Students should be able to calculate the energy transferred in chemical reactions using bond energies supplied."
    },
    {
     "code": "4.5.2.1",
     "q": "How do cells and batteries produce electricity?",
     "idea": "Cells and batteries (chemistry only)",
     "content": "(chemistry only) Cells contain chemicals which react to produce electricity. The voltage produced by a cell is dependent upon a number of factors including the type of electrode and electrolyte. A simple cell can be made by connecting two different metals in contact with an electrolyte. Batteries consist of two or more cells connected together in series to provide a greater voltage. In non-rechargeable cells and batteries the chemical reactions stop when one of the reactants has been used up; alkaline batteries are non-rechargeable. Rechargeable cells and batteries can be recharged because the chemical reactions are reversed when an external electrical current is supplied. Students should be able to interpret data for relative reactivity of different metals and evaluate the use of cells. Students do not need to know details of cells and batteries other than those specified."
    },
    {
     "code": "4.5.2.2",
     "q": "How does a fuel cell work and how does it compare with a battery?",
     "idea": "Fuel cells (chemistry only)",
     "content": "(chemistry only) Fuel cells are supplied by an external source of fuel (eg hydrogen) and oxygen or air. The fuel is oxidised electrochemically within the fuel cell to produce a potential difference. The overall reaction in a hydrogen fuel cell involves the oxidation of hydrogen to produce water. Hydrogen fuel cells offer a potential alternative to rechargeable cells and batteries. Students should be able to evaluate the use of hydrogen fuel cells in comparison with rechargeable cells and batteries, and (HT only) write the half equations for the electrode reactions in the hydrogen fuel cell."
    }
   ],
   "skills": [
    "AT 5",
    "AT 1",
    "AT 3",
    "AT 6",
    "MS 1a",
    "WS 2.1",
    "WS 2.2",
    "WS 2.3",
    "WS 2.4",
    "WS 2.6",
    "WS 2.7",
    "MS 2a",
    "MS 2b",
    "MS 4a",
    "MS 4c"
   ]
  },
  {
   "id": "4.6",
   "component": "P2",
   "option": null,
   "name": "The rate and extent of chemical change",
   "caseStudies": [
    "Required practical activity 5: investigate how changes in concentration affect the rates of reactions by a method involving measuring the volume of a gas produced and a method involving a change in colour or turbidity. This should be an investigation involving developing a hypothesis."
   ],
   "ideas": [
    {
     "code": "4.6.1.1",
     "q": "How is the rate of a chemical reaction calculated?",
     "idea": "Calculating rates of reactions",
     "content": "Rate can be found by measuring the quantity of a reactant used or product formed over time: mean rate of reaction = quantity of reactant used / time taken; mean rate of reaction = quantity of product formed / time taken. Quantity is measured as mass in grams or volume in cm3; units of rate may be g/s or cm3/s. (HT only) Quantity of reactants may be given in moles and rate in mol/s. Students should be able to: calculate the mean rate of a reaction from given data; draw and interpret graphs of quantity of product/reactant against time; draw tangents to the curves and use the slope as a measure of rate. (HT only) Calculate the gradient of a tangent to the curve as a measure of rate at a specific time."
    },
    {
     "code": "4.6.1.2",
     "q": "What factors affect the rate of a chemical reaction, and how is this investigated? (Required practical activity 11)",
     "idea": "Factors which affect the rates of chemical reactions",
     "content": "Factors affecting rate include: concentration of reactants in solution, pressure of reacting gases, surface area of solid reactants, temperature, and presence of catalysts. Students should recall how changing these factors affects rate."
    },
    {
     "code": "4.6.1.2 (Required practical 5)",
     "q": "How does changing concentration affect the rate of a reaction?",
     "idea": "Required practical activity 5: how changes in concentration affect the rates of reactions",
     "content": "Required practical 5: investigate how changes in concentration affect the rates of reactions by a method involving measuring the volume of a gas produced and a method involving a change in colour or turbidity. This should be an investigation involving developing a hypothesis. AT skills covered by this practical activity: 1, 3, 5 and 6 — AT 1 use of appropriate apparatus to make and record a range of measurements accurately, including mass, time, temperature, and volume of liquids and gases; AT 3 use of appropriate apparatus and techniques for conducting and monitoring chemical reactions; AT 5 making and recording of appropriate observations during chemical reactions including the measurement of rates of reaction by a variety of methods such as production of gas and colour change; AT 6 safe use and careful handling of gases, liquids and solids, including careful mixing of reagents under controlled conditions, using appropriate apparatus to explore chemical changes. Key opportunities for skills development: WS 2.1, WS 2.2, WS 2.3, WS 2.4, WS 2.6, WS 2.7, MS 1a, MS 1c, MS 1d, MS 2a, MS 2b, MS 4a, MS 4b, MS 4c, MS 4d, MS 4e."
    },
    {
     "code": "4.6.1.3",
     "q": "How does collision theory explain the effect of concentration, pressure and temperature on rate?",
     "idea": "Collision theory and activation energy",
     "content": "Collision theory: reactions occur only when particles collide with sufficient energy; the minimum energy needed to react is the activation energy. Increasing concentration of reactants in solution, pressure of reacting gases, and surface area of solid reactants increases the frequency of collisions and so increases rate. Increasing temperature increases both the frequency and energy of collisions, so increases rate. Students should be able to: predict and explain, using collision theory, the effects of changing concentration, pressure and temperature on rate; predict and explain the effect of changes in the size of pieces of a reacting solid in terms of surface area to volume ratio; use simple ideas about proportionality when using collision theory to explain the effect of a factor on rate."
    },
    {
     "code": "4.6.1.4",
     "q": "How do catalysts affect the rate of a reaction, and how can catalytic action be explained?",
     "idea": "Catalysts",
     "content": "Catalysts change the rate of chemical reactions but are not used up during the reaction; different reactions need different catalysts; enzymes act as catalysts in biological systems. Catalysts increase rate by providing a different pathway with a lower activation energy; this can be shown on a reaction profile for a catalysed reaction. Students should identify catalysts from their effect on rate and because they are not included in the chemical equation for the reaction, and explain catalytic action in terms of activation energy. Students do not need to know names of catalysts other than those specified in the subject content."
    },
    {
     "code": "4.6.2.1",
     "q": "What is a reversible reaction and how can its direction be changed?",
     "idea": "Reversible reactions",
     "content": "In some chemical reactions the products can react to produce the original reactants; such reactions are called reversible reactions and are represented A + B ⇌ C + D. The direction of reversible reactions can be changed by changing the conditions."
    },
    {
     "code": "4.6.2.2",
     "q": "How are energy changes related in a reversible reaction?",
     "idea": "Energy changes and reversible reactions",
     "content": "If a reversible reaction is exothermic in one direction, it is endothermic in the opposite direction, and the same amount of energy is transferred in each case."
    },
    {
     "code": "4.6.2.3",
     "q": "What is equilibrium in a reversible reaction?",
     "idea": "Equilibrium",
     "content": "When a reversible reaction occurs in apparatus that prevents the escape of reactants and products, equilibrium is reached when the forward and reverse reactions occur at exactly the same rate."
    },
    {
     "code": "4.6.2.4",
     "q": "How does changing conditions affect a system at equilibrium?",
     "idea": "The effect of changing conditions on equilibrium (HT only)",
     "content": "(HT only) The relative amounts of all reactants and products at equilibrium depend on the conditions of the reaction. If a system at equilibrium has a condition changed, the system responds to counteract the change. The effects of changing conditions on a system at equilibrium can be predicted using Le Chatelier's Principle. Students should be able to make qualitative predictions about the effect of changes on systems at equilibrium when given appropriate information."
    },
    {
     "code": "4.6.2.5",
     "q": "How does changing concentration affect a system at equilibrium?",
     "idea": "The effect of changing concentration (HT only)",
     "content": "(HT only) If the concentration of a reactant or product is changed, the system is no longer at equilibrium and the concentrations of all substances change until equilibrium is reached again. If the concentration of a reactant is increased, more products form until equilibrium is reached again. If the concentration of a product is decreased, more reactants react until equilibrium is reached again. Students should be able to interpret appropriate given data to predict the effect of a change in concentration of a reactant or product on given reactions at equilibrium."
    },
    {
     "code": "4.6.2.6",
     "q": "How does changing temperature affect a system at equilibrium?",
     "idea": "The effect of temperature changes on equilibrium (HT only)",
     "content": "(HT only) If temperature of a system at equilibrium is increased, the relative amount of products increases for an endothermic reaction and decreases for an exothermic reaction. If temperature is decreased, the relative amount of products decreases for an endothermic reaction and increases for an exothermic reaction. Students should be able to interpret appropriate given data to predict the effect of a change in temperature on given reactions at equilibrium."
    },
    {
     "code": "4.6.2.7",
     "q": "How does changing pressure affect a system at equilibrium?",
     "idea": "The effect of pressure changes on equilibrium (HT only)",
     "content": "(HT only) For gaseous reactions at equilibrium, an increase in pressure causes the equilibrium position to shift towards the side with the smaller number of molecules as shown by the symbol equation for that reaction; a decrease in pressure causes the equilibrium position to shift towards the side with the larger number of molecules. Students should be able to interpret appropriate given data to predict the effect of pressure changes on given reactions at equilibrium."
    }
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
    "AT 5",
    "AT 1",
    "AT 3",
    "AT 6",
    "WS 2.1",
    "WS 2.2",
    "WS 2.3",
    "WS 2.4",
    "WS 2.6",
    "WS 2.7",
    "MS 2a",
    "MS 2b"
   ]
  },
  {
   "id": "4.7",
   "component": "P2",
   "option": null,
   "name": "Organic chemistry",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.7.1.1",
     "q": "What is crude oil made of, and what are alkanes?",
     "idea": "Crude oil, hydrocarbons and alkanes",
     "content": "Crude oil is a finite resource found in rocks; it is the remains of an ancient biomass consisting mainly of plankton buried in mud. Crude oil is a mixture of a very large number of compounds, most of which are hydrocarbons (molecules made of hydrogen and carbon atoms only). Most of the hydrocarbons in crude oil are alkanes, with general formula CnH2n+2. The first four alkanes are methane, ethane, propane and butane; alkane molecules can be represented in molecular formula form (e.g. C2H6) or structural form. Students should be able to recognise substances as alkanes given their formulae in these forms. Students do not need to know the names of specific alkanes other than methane, ethane, propane and butane."
    },
    {
     "code": "4.7.1.2",
     "q": "How is crude oil separated into useful fractions?",
     "idea": "Fractional distillation and petrochemicals",
     "content": "The many hydrocarbons in crude oil may be separated into fractions, each containing molecules with a similar number of carbon atoms, by fractional distillation. The fractions can be processed to produce fuels and feedstock for the petrochemical industry, including petrol, diesel oil, kerosene, heavy fuel oil and liquefied petroleum gases, and materials such as solvents, lubricants, polymers and detergents. The variety of carbon compounds arises from the ability of carbon atoms to form families of similar compounds. Students should be able to explain how fractional distillation works in terms of evaporation and condensation. Knowledge of the names of other specific fractions or fuels is not required."
    },
    {
     "code": "4.7.1.3",
     "q": "How do the properties of hydrocarbons depend on molecular size, and what happens when they combust?",
     "idea": "Properties of hydrocarbons",
     "content": "Some properties of hydrocarbons depend on the size of their molecules, including boiling point, viscosity and flammability; these influence how hydrocarbons are used as fuels. Students should be able to recall how boiling point, viscosity and flammability change with increasing molecular size, limited to these three properties. Combustion of hydrocarbon fuels releases energy; carbon and hydrogen are oxidised, and complete combustion of a hydrocarbon produces carbon dioxide and water. Students should be able to write balanced equations for the complete combustion of hydrocarbons with a given formula."
    },
    {
     "code": "4.7.1.4",
     "q": "How is cracking carried out, and why are alkenes important products of it?",
     "idea": "Cracking and alkenes",
     "content": "Hydrocarbons can be broken down (cracked) to produce smaller, more useful molecules, by methods including catalytic cracking and steam cracking. Students should be able to describe in general terms the conditions used for catalytic cracking and steam cracking. Products of cracking include alkanes and alkenes; alkenes are more reactive than alkanes and react with bromine water (used as a test for alkenes), giving a colour change students should recall. There is high demand for fuels with small molecules, so some cracking products are useful as fuels; alkenes are used to produce polymers and as starting materials for other chemicals. Students should be able to balance chemical equations for cracking given the formulae of reactants and products, and give examples to illustrate the usefulness of cracking and how modern life depends on the uses of hydrocarbons. (For Combined Science: Trilogy and Synergy students do not need to know the formulae or names of individual alkenes.)"
    },
    {
     "code": "4.7.2.1",
     "q": "What are alkenes and how are they represented?",
     "idea": "Structure and formulae of alkenes (chemistry only)",
     "content": "(chemistry only) Alkenes are hydrocarbons with a double carbon-carbon bond. The general formula for the homologous series of alkenes is CnH2n. Alkene molecules are unsaturated because they contain two fewer hydrogen atoms than the alkane with the same number of carbon atoms. The first four members of the homologous series of alkenes are ethene, propene, butene and pentene. Alkene molecules can be represented by a molecular formula such as C3H6 or by a displayed structural formula. Students should be able to recognise substances that are alkenes from their names or from given formulae in these forms; they do not need to know the names of individual alkenes other than ethene, propene, butene and pentene."
    },
    {
     "code": "4.7.2.2",
     "q": "How do alkenes react?",
     "idea": "Reactions of alkenes (chemistry only)",
     "content": "(chemistry only) Alkenes are hydrocarbons with the functional group C=C. It is the generality of reactions of functional groups that determine the reactions of organic compounds. Alkenes react with oxygen in combustion reactions in the same way as other hydrocarbons, but they tend to burn in air with smoky flames because of incomplete combustion. Alkenes react with hydrogen, water and the halogens, by the addition of atoms across the carbon-carbon double bond so that the double bond becomes a single carbon-carbon bond. Students should be able to describe the reactions and conditions for the addition of hydrogen, water and halogens to alkenes, and draw fully displayed structural formulae of the first four members of the alkenes and the products of their addition reactions with hydrogen, water, chlorine, bromine and iodine."
    },
    {
     "code": "4.7.2.3",
     "q": "What are alcohols and how do they react?",
     "idea": "Alcohols (chemistry only)",
     "content": "(chemistry only) Alcohols contain the functional group –OH. Methanol, ethanol, propanol and butanol are the first four members of a homologous series of alcohols, and can be represented as CH3CH2OH or by a displayed structural formula. Students should be able to describe what happens when any of the first four alcohols react with sodium, burn in air, are added to water, react with an oxidising agent, and recall the main uses of these alcohols. Aqueous solutions of ethanol are produced when sugar solutions are fermented using yeast, and students should know the conditions used for fermentation of sugar using yeast. Students should be able to recognise alcohols from their names or from given formulae. They do not need to know the names of individual alcohols other than methanol, ethanol, propanol and butanol, and are not expected to write balanced chemical equations for the reactions of alcohols other than for combustion reactions."
    },
    {
     "code": "4.7.2.4",
     "q": "What are carboxylic acids and how do they react?",
     "idea": "Carboxylic acids (chemistry only)",
     "content": "(chemistry only) Carboxylic acids have the functional group –COOH. The first four members of a homologous series of carboxylic acids are methanoic acid, ethanoic acid, propanoic acid and butanoic acid, and can be represented as CH3COOH or by a displayed structural formula. Students should be able to describe what happens when any of the first four carboxylic acids react with carbonates, dissolve in water, react with alcohols, and (HT only) explain why carboxylic acids are weak acids in terms of ionisation and pH. Students should be able to recognise carboxylic acids from their names or from given formulae; they do not need to know the names of individual carboxylic acids other than the first four, are not expected to write balanced chemical equations for their reactions, and do not need to know the names of esters other than ethyl ethanoate."
    },
    {
     "code": "4.7.3.1",
     "q": "How are addition polymers made from alkenes?",
     "idea": "Addition polymerisation (chemistry only)",
     "content": "(chemistry only) Alkenes can be used to make polymers such as poly(ethene) and poly(propene) by addition polymerisation. In addition polymerisation reactions, many small molecules (monomers) join together to form very large molecules (polymers). In addition polymers the repeating unit has the same atoms as the monomer because no other molecule is formed in the reaction. Students should be able to recognise addition polymers and monomers from diagrams in the forms shown and from the presence of the functional group C=C in the monomers, draw diagrams to represent the formation of a polymer from a given alkene monomer, and relate the repeating unit to the monomer."
    },
    {
     "code": "4.7.3.2",
     "q": "How does condensation polymerisation differ from addition polymerisation?",
     "idea": "Condensation polymerisation (chemistry only) (HT only)",
     "content": "(chemistry only) (HT only) Condensation polymerisation involves monomers with two functional groups. When these types of monomers react they join together, usually losing small molecules such as water, and so the reactions are called condensation reactions. The simplest polymers are produced from two different monomers with two of the same functional groups on each monomer; for example ethanediol and hexanedioic acid polymerise to produce a polyester. Students should be able to explain the basic principles of condensation polymerisation by reference to the functional groups in the monomers and the repeating units in the polymers."
    },
    {
     "code": "4.7.3.3",
     "q": "How do amino acids polymerise?",
     "idea": "Amino acids (chemistry only) (HT only)",
     "content": "(chemistry only) (HT only) Amino acids have two different functional groups in a molecule. Amino acids react by condensation polymerisation to produce polypeptides; for example glycine is H2NCH2COOH and polymerises to produce a polypeptide. Different amino acids can be combined in the same chain to produce proteins."
    },
    {
     "code": "4.7.3.4",
     "q": "What are DNA and the other naturally occurring polymers made from?",
     "idea": "DNA and other naturally occurring polymers (chemistry only)",
     "content": "(chemistry only) DNA (deoxyribonucleic acid) is a large molecule essential for life; it encodes genetic instructions for the development and functioning of living organisms and viruses. Most DNA molecules are two polymer chains, made from four different monomers called nucleotides, in the form of a double helix. Other naturally occurring polymers important for life include proteins, starch and cellulose. Students should be able to name the types of monomers from which these naturally occurring polymers are made."
    }
   ],
   "skills": [
    "WS 1.2",
    "WS 4.1",
    "MS 5b",
    "AT 2",
    "AT 5",
    "AT 6"
   ]
  },
  {
   "id": "4.8",
   "component": "P2",
   "option": null,
   "name": "Chemical analysis",
   "caseStudies": [
    "Required practical activity 6: investigate how paper chromatography can be used to separate and tell the difference between coloured substances. Students should calculate Rf values.",
    "Required practical activity 7: use of chemical tests to identify the ions in unknown single ionic compounds covering the ions from sections Flame tests (page 73) to Sulfates (page 74)."
   ],
   "ideas": [
    {
     "code": "4.8.1.1",
     "q": "What is a pure substance in chemistry, and how can purity be tested?",
     "idea": "Pure substances",
     "content": "In chemistry, a pure substance is a single element or compound, not mixed with any other substance. Pure elements and compounds melt and boil at specific temperatures; melting point and boiling point data can be used to distinguish pure substances from mixtures. In everyday language, 'pure' can mean a substance with nothing added, unadulterated and in its natural state (e.g. pure milk). Students should be able to use melting point and boiling point data to distinguish pure from impure substances."
    },
    {
     "code": "4.8.1.2",
     "q": "What is a formulation?",
     "idea": "Formulations",
     "content": "A formulation is a mixture that has been designed as a useful product; many products are complex mixtures in which each chemical has a particular purpose. Formulations are made by mixing the components in carefully measured quantities to ensure the product has the required properties. Formulations include fuels, cleaning agents, paints, medicines, alloys, fertilisers and foods. Students should be able to identify formulations given appropriate information. Students do not need to know the names of components in proprietary products."
    },
    {
     "code": "4.8.1.3",
     "q": "How does paper chromatography separate and help identify substances? (Required practical activity 12)",
     "idea": "Chromatography",
     "content": "Chromatography can be used to separate mixtures and give information to help identify substances; it involves a stationary phase and a mobile phase, and separation depends on the distribution of substances between the phases. The ratio of the distance moved by a compound (centre of spot from origin) to the distance moved by the solvent is its Rf value: Rf = distance moved by substance / distance moved by solvent. Different compounds have different Rf values in different solvents; a mixture may separate into different spots depending on solvent, but a pure compound produces a single spot in all solvents. Students should be able to: explain how paper chromatography separates mixtures; suggest how chromatographic methods can be used for distinguishing pure from impure substances; interpret chromatograms and determine Rf values from chromatograms; provide answers to an appropriate number of significant figures."
    },
    {
     "code": "4.8.1.3 (Required practical 6)",
     "q": "How does paper chromatography separate coloured substances, and how are Rf values found?",
     "idea": "Required practical activity 6: paper chromatography and Rf values",
     "content": "Required practical 6: investigate how paper chromatography can be used to separate and tell the difference between coloured substances. Students should calculate Rf values. AT skills covered by this practical activity: 1 and 4 — AT 1 use of appropriate apparatus to make and record a range of measurements accurately; AT 4 safe use of a range of equipment to purify and/or separate chemical mixtures including chromatography. Key opportunities for skills development: WS 2.4 and WS 2.6."
    },
    {
     "code": "4.8.2.1",
     "q": "How is hydrogen gas tested for?",
     "idea": "Test for hydrogen",
     "content": "The test for hydrogen uses a burning splint held at the open end of a test tube of the gas. Hydrogen burns rapidly with a pop sound."
    },
    {
     "code": "4.8.2.2",
     "q": "How is oxygen gas tested for?",
     "idea": "Test for oxygen",
     "content": "The test for oxygen uses a glowing splint inserted into a test tube of the gas. The splint relights in oxygen."
    },
    {
     "code": "4.8.2.3",
     "q": "How is carbon dioxide gas tested for?",
     "idea": "Test for carbon dioxide",
     "content": "The test for carbon dioxide uses an aqueous solution of calcium hydroxide (limewater). When carbon dioxide is shaken with or bubbled through limewater, the limewater turns milky (cloudy)."
    },
    {
     "code": "4.8.2.4",
     "q": "How is chlorine gas tested for?",
     "idea": "Test for chlorine",
     "content": "The test for chlorine uses litmus paper. When damp litmus paper is put into chlorine gas, the litmus paper is bleached and turns white."
    },
    {
     "code": "4.8.3.1",
     "q": "Which metal ions can be identified by flame tests?",
     "idea": "Flame tests (chemistry only)",
     "content": "(chemistry only) Flame tests can be used to identify some metal ions (cations). Lithium, sodium, potassium, calcium and copper compounds produce distinctive colours in flame tests: lithium compounds result in a crimson flame, sodium compounds a yellow flame, potassium compounds a lilac flame, calcium compounds an orange-red flame and copper compounds a green flame. If a sample containing a mixture of ions is used some flame colours can be masked. Students should be able to identify species from the results of the tests in 4.8.3.1 to 4.8.3.5. Flame colours of other metal ions are not required knowledge."
    },
    {
     "code": "4.8.3.2",
     "q": "How does sodium hydroxide solution identify metal ions?",
     "idea": "Metal hydroxides (chemistry only)",
     "content": "(chemistry only) Sodium hydroxide solution can be used to identify some metal ions (cations). Solutions of aluminium, calcium and magnesium ions form white precipitates when sodium hydroxide solution is added but only the aluminium hydroxide precipitate dissolves in excess sodium hydroxide solution. Solutions of copper(II), iron(II) and iron(III) ions form coloured precipitates when sodium hydroxide solution is added: copper(II) forms a blue precipitate, iron(II) a green precipitate and iron(III) a brown precipitate. Students should be able to write balanced equations for the reactions to produce the insoluble hydroxides; they are not expected to write equations for the production of sodium aluminate."
    },
    {
     "code": "4.8.3.3",
     "q": "How are carbonates identified?",
     "idea": "Carbonates (chemistry only)",
     "content": "(chemistry only) Carbonates react with dilute acids to form carbon dioxide gas. Carbon dioxide can be identified with limewater."
    },
    {
     "code": "4.8.3.4",
     "q": "How are halide ions identified?",
     "idea": "Halides (chemistry only)",
     "content": "(chemistry only) Halide ions in solution produce precipitates with silver nitrate solution in the presence of dilute nitric acid. Silver chloride is white, silver bromide is cream and silver iodide is yellow."
    },
    {
     "code": "4.8.3.5",
     "q": "How are sulfate ions identified?",
     "idea": "Sulfates (chemistry only)",
     "content": "(chemistry only) Sulfate ions in solution produce a white precipitate with barium chloride solution in the presence of dilute hydrochloric acid."
    },
    {
     "code": "4.8.3.5 (Required practical 7)",
     "q": "How are the ions in an unknown ionic compound identified?",
     "idea": "Required practical activity 7: chemical tests to identify ions in unknown ionic compounds (chemistry only)",
     "content": "Required practical 7: use of chemical tests to identify the ions in unknown single ionic compounds covering the ions from sections Flame tests (page 73) to Sulfates (page 74). AT skills covered by this practical activity: 1 and 8 (section 8.2.7 lists these as AT 2 – safe use of a Bunsen burner, and AT 8 – use of appropriate qualitative reagents and techniques to analyse and identify unknown samples or products including gas tests, flame tests, precipitation reactions). Key opportunities for skills development: WS 2.4 and WS 2.6. Practicals 2 and 7 are GCSE Chemistry only."
    },
    {
     "code": "4.8.3.6",
     "q": "Why are instrumental methods used?",
     "idea": "Instrumental methods (chemistry only)",
     "content": "(chemistry only) Elements and compounds can be detected and identified using instrumental methods. Instrumental methods are accurate, sensitive and rapid. Students should be able to state advantages of instrumental methods compared with the chemical tests in this specification."
    },
    {
     "code": "4.8.3.7",
     "q": "How does flame emission spectroscopy identify and measure metal ions?",
     "idea": "Flame emission spectroscopy (chemistry only)",
     "content": "(chemistry only) Flame emission spectroscopy is an example of an instrumental method used to analyse metal ions in solutions. The sample is put into a flame and the light given out is passed through a spectroscope. The output is a line spectrum that can be analysed to identify the metal ions in the solution and measure their concentrations. Students should be able to interpret an instrumental result given appropriate data in chart or tabular form, when accompanied by a reference set in the same form, limited to flame emission spectroscopy."
    }
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
    "MS 2a",
    "AT 1",
    "AT 4",
    "AT 8",
    "WS 2.4",
    "WS 2.6",
    "WS 3.6",
    "MS 4a"
   ]
  },
  {
   "id": "4.9",
   "component": "P2",
   "option": null,
   "name": "Chemistry of the atmosphere",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.9.1.1",
     "q": "What is the composition of today's atmosphere?",
     "idea": "The proportions of different gases in the atmosphere",
     "content": "For 200 million years, the proportions of different gases in the atmosphere have been much the same as today: about four-fifths (approximately 80%) nitrogen; about one-fifth (approximately 20%) oxygen; small proportions of various other gases, including carbon dioxide, water vapour and noble gases."
    },
    {
     "code": "4.9.1.2",
     "q": "What was the Earth's early atmosphere like, and how do we know?",
     "idea": "The Earth's early atmosphere",
     "content": "Theories about the Earth's early atmosphere and its formation have changed and developed over time; evidence is limited because of the 4.6 billion year timescale. One theory suggests that during the first billion years there was intense volcanic activity that released gases forming the early atmosphere, and water vapour that condensed to form the oceans; at the start of this period the atmosphere may have been like Mars and Venus today, mainly carbon dioxide with little or no oxygen. Volcanoes also produced nitrogen, which gradually built up in the atmosphere, and there may have been small proportions of methane and ammonia. When the oceans formed, carbon dioxide dissolved in the water and carbonates were precipitated, producing sediments and reducing atmospheric carbon dioxide. No knowledge of other theories is required. Students should be able to, given appropriate information, interpret evidence and evaluate different theories about the Earth's early atmosphere."
    },
    {
     "code": "4.9.1.3",
     "q": "How did oxygen levels in the atmosphere increase?",
     "idea": "How oxygen increased",
     "content": "Algae and plants produced the oxygen now in the atmosphere by photosynthesis (represented by the photosynthesis equation). Algae first produced oxygen about 2.7 billion years ago, and soon after this oxygen appeared in the atmosphere. Over the next billion years plants evolved and the percentage of oxygen gradually increased to a level that enabled animals to evolve."
    },
    {
     "code": "4.9.1.4",
     "q": "How and why did carbon dioxide levels in the atmosphere decrease?",
     "idea": "How carbon dioxide decreased",
     "content": "Algae and plants decreased the percentage of carbon dioxide in the atmosphere by photosynthesis. Carbon dioxide was also decreased by the formation of sedimentary rocks and fossil fuels that contain carbon. Students should be able to: describe the main changes in the atmosphere over time and some of the likely causes of these changes; describe and explain the formation of deposits of limestone, coal, crude oil and natural gas."
    },
    {
     "code": "4.9.2.1",
     "q": "What are greenhouse gases and how do they affect Earth's temperature?",
     "idea": "Greenhouse gases",
     "content": "Greenhouse gases in the atmosphere maintain temperatures on Earth high enough to support life. Water vapour, carbon dioxide and methane are greenhouse gases. Students should be able to describe the greenhouse effect in terms of the interaction of short and long wavelength radiation with matter."
    },
    {
     "code": "4.9.2.2",
     "q": "Which human activities increase greenhouse gases, and how reliable is the evidence for climate change?",
     "idea": "Human activities which contribute to an increase in greenhouse gases in the atmosphere",
     "content": "Some human activities increase the amounts of greenhouse gases in the atmosphere, including carbon dioxide and methane. Students should be able to recall two human activities that increase the amounts of each of carbon dioxide and methane. Based on peer-reviewed evidence, many scientists believe human activities will cause the temperature of the Earth's atmosphere to increase at the surface, resulting in global climate change; however, it is difficult to model such complex systems, leading to simplified models, speculation and opinions in the media that may be based on only parts of the evidence and may be biased. Students should be able to: evaluate the quality of evidence in a report about global climate change given appropriate information; describe uncertainties in the evidence base; recognise the importance of peer review of results and of communicating results to a wide range of audiences."
    },
    {
     "code": "4.9.2.3",
     "q": "What are the potential effects of global climate change?",
     "idea": "Global climate change",
     "content": "An increase in average global temperature is a major cause of climate change; there are several potential effects of global climate change. Students should be able to: describe briefly four potential effects of global climate change; discuss the scale, risk and environmental implications of global climate change."
    },
    {
     "code": "4.9.2.4",
     "q": "What is a carbon footprint and how can it be reduced?",
     "idea": "The carbon footprint and its reduction",
     "content": "The carbon footprint is the total amount of carbon dioxide and other greenhouse gases emitted over the full life cycle of a product, service or event; it can be reduced by reducing emissions of carbon dioxide and methane. Students should be able to: describe actions to reduce emissions of carbon dioxide and methane; give reasons why actions may be limited."
    },
    {
     "code": "4.9.3.1",
     "q": "What atmospheric pollutants are produced by burning fuels?",
     "idea": "Atmospheric pollutants from fuels",
     "content": "Combustion of fuels is a major source of atmospheric pollutants. Most fuels, including coal, contain carbon and/or hydrogen and may also contain some sulfur. Gases released when a fuel is burned may include carbon dioxide, water vapour, carbon monoxide, sulfur dioxide and oxides of nitrogen; solid particles and unburned hydrocarbons may also be released, forming particulates. Students should be able to: describe how carbon monoxide, soot (carbon particles), sulfur dioxide and oxides of nitrogen are produced by burning fuels; predict the products of combustion of a fuel given appropriate information about its composition and the conditions in which it is used."
    },
    {
     "code": "4.9.3.2",
     "q": "What are the properties and effects of the main atmospheric pollutants?",
     "idea": "Properties and effects of atmospheric pollutants",
     "content": "Carbon monoxide is a toxic gas; it is colourless and odourless, so not easily detected. Sulfur dioxide and oxides of nitrogen cause respiratory problems in humans and cause acid rain. Particulates cause global dimming and health problems for humans. Students should be able to describe and explain the problems caused by increased amounts of these pollutants in the air."
    }
   ],
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
   "id": "4.10",
   "component": "P2",
   "option": null,
   "name": "Using resources",
   "caseStudies": [
    "Required practical activity 8: analysis and purification of water samples from different sources, including pH, dissolved solids and distillation."
   ],
   "ideas": [
    {
     "code": "4.10.1.1",
     "q": "How do humans use the Earth's resources, and what is sustainable development?",
     "idea": "Using the Earth's resources and sustainable development",
     "content": "Humans use the Earth's resources to provide warmth, shelter, food and transport. Natural resources, supplemented by agriculture, provide food, timber, clothing and fuels. Finite resources from the Earth, oceans and atmosphere are processed to provide energy and materials. Chemistry plays an important role in improving agricultural and industrial processes to provide new products and in sustainable development, which meets the needs of current generations without compromising the ability of future generations to meet their own needs. Students should be able to: state examples of natural products that are supplemented or replaced by agricultural and synthetic products; distinguish between finite and renewable resources given appropriate information; extract and interpret information about resources from charts, graphs and tables; use orders of magnitude to evaluate the significance of data."
    },
    {
     "code": "4.10.1.2",
     "q": "How is potable water produced, and why is it needed? (Required practical activity 13)",
     "idea": "Potable water",
     "content": "Water of appropriate quality is essential for life; drinking water should have sufficiently low levels of dissolved salts and microbes. Water that is safe to drink is called potable water; it is not pure water in the chemical sense because it contains dissolved substances. The methods used to produce potable water depend on available supplies of water and local conditions. In the UK, rain provides fresh water with low levels of dissolved substances that collects in the ground, lakes and rivers, and most potable water is produced by choosing an appropriate source of fresh water, passing the water through filter beds, and sterilising (using chlorine, ozone or ultraviolet light). If supplies of fresh water are limited, desalination of salty water or sea water may be required, by distillation or by processes using membranes such as reverse osmosis; these require large amounts of energy. Students should be able to: distinguish between potable water and pure water; describe the differences in treatment of ground water and salty water; give reasons for the steps used to produce potable water."
    },
    {
     "code": "4.10.1.2 (Required practical 8)",
     "q": "How are water samples analysed and purified?",
     "idea": "Required practical activity 8: analysis and purification of water samples",
     "content": "Required practical 8: analysis and purification of water samples from different sources, including pH, dissolved solids and distillation. AT skills covered by this practical activity: 2, 3 and 4 — AT 2 safe use of appropriate heating devices and techniques including use of a Bunsen burner and a water bath or electric heater; AT 3 use of appropriate apparatus and techniques for the measurement of pH in different situations; AT 4 safe use of a range of equipment to purify and/or separate chemical mixtures including evaporation, distillation. Key opportunities and skills development: WS 2.3, WS 2.4, WS 2.5, WS 2.6, WS 2.7."
    },
    {
     "code": "4.10.1.3",
     "q": "How is waste water treated before being released into the environment?",
     "idea": "Waste water treatment",
     "content": "Urban lifestyles and industrial processes produce large amounts of waste water requiring treatment before release into the environment. Sewage and agricultural waste water require removal of organic matter and harmful microbes; industrial waste water may require removal of organic matter and harmful chemicals. Sewage treatment includes: screening and grit removal; sedimentation to produce sewage sludge and effluent; anaerobic digestion of sewage sludge; aerobic biological treatment of effluent. Students should be able to comment on the relative ease of obtaining potable water from waste, ground and salt water."
    },
    {
     "code": "4.10.1.4",
     "q": "How can copper be extracted from low-grade ores by alternative biological methods?",
     "idea": "Alternative methods of extracting metals (HT only)",
     "content": "(HT only) The Earth's resources of metal ores are limited. Copper ores are becoming scarce, and new ways of extracting copper from low-grade ores include phytomining and bioleaching, which avoid traditional mining methods of digging, moving and disposing of large amounts of rock. Phytomining uses plants to absorb metal compounds; the plants are harvested and burned to produce ash containing metal compounds. Bioleaching uses bacteria to produce leachate solutions containing metal compounds. The metal compounds can be processed to obtain the metal; for example, copper can be obtained from solutions of copper compounds by displacement using scrap iron or by electrolysis. Students should be able to evaluate alternative biological methods of metal extraction, given appropriate information."
    },
    {
     "code": "4.10.2.1",
     "q": "What is a life cycle assessment and how is it used to evaluate a product's environmental impact?",
     "idea": "Life cycle assessment",
     "content": "Life cycle assessments (LCAs) are carried out to assess the environmental impact of products at each stage: extracting and processing raw materials; manufacturing and packaging; use and operation during its lifetime; disposal at the end of its useful life, including transport and distribution at each stage. Use of water, resources, energy sources and production of some wastes can be fairly easily quantified; allocating numerical values to pollutant effects is less straightforward and requires value judgements, so LCA is not a purely objective process. Selective or abbreviated LCAs can be devised to evaluate a product but can be misused to reach pre-determined conclusions, e.g. in support of advertising claims. Students should be able to carry out simple comparative LCAs for shopping bags made from plastic and paper; LCAs should compare the impact on the environment of the stages in the life of a product, only quantified where data is readily available for energy, water, resources and wastes; students should be able to interpret LCAs of materials or products given appropriate information."
    },
    {
     "code": "4.10.2.2",
     "q": "How does reducing, reusing and recycling materials lessen environmental impact?",
     "idea": "Ways of reducing the use of resources",
     "content": "The reduction in use, reuse and recycling of materials by end users reduces the use of limited resources, use of energy sources, waste and environmental impacts. Metals, glass, building materials, clay ceramics and most plastics are produced from limited raw materials, and much of the energy for the processes comes from limited resources; obtaining raw materials from the Earth by quarrying and mining causes environmental impacts. Some products, such as glass bottles, can be reused; glass bottles can be crushed and melted to make different glass products. Other products cannot be reused and so are recycled for a different use; metals can be recycled by melting and recasting or reforming into different products. The amount of separation required for recycling depends on the material and the properties required of the final product; for example, some scrap steel can be added to iron from a blast furnace to reduce the amount of iron that needs to be extracted from iron ore. Students should be able to evaluate ways of reducing the use of limited resources, given appropriate information."
    },
    {
     "code": "4.10.3.1",
     "q": "What causes corrosion and how can it be prevented?",
     "idea": "Corrosion and its prevention (chemistry only)",
     "content": "(chemistry only) Corrosion is the destruction of materials by chemical reactions with substances in the environment. Rusting is an example of corrosion; both air and water are necessary for iron to rust. Corrosion can be prevented by applying a coating that acts as a barrier, such as greasing, painting or electroplating; aluminium has an oxide coating that protects the metal from further corrosion. Some coatings are reactive and contain a more reactive metal to provide sacrificial protection, eg zinc is used to galvanise iron. Students should be able to describe experiments and interpret results to show that both air and water are necessary for rusting, and explain sacrificial protection in terms of relative reactivity."
    },
    {
     "code": "4.10.3.2",
     "q": "What are the common alloys and what are they used for?",
     "idea": "Alloys as useful materials (chemistry only)",
     "content": "(chemistry only) Most metals in everyday use are alloys. Bronze is an alloy of copper and tin; brass is an alloy of copper and zinc. Gold used as jewellery is usually an alloy with silver, copper and zinc, and the proportion of gold in the alloy is measured in carats, 24 carat being 100% (pure gold) and 18 carat being 75% gold. Steels are alloys of iron that contain specific amounts of carbon and other metals: high carbon steel is strong but brittle, low carbon steel is softer and more easily shaped, and steels containing chromium and nickel (stainless steels) are hard and resistant to corrosion. Aluminium alloys are low density. Students should be able to recall a use of each of the alloys specified, and interpret and evaluate the composition and uses of alloys other than those specified given appropriate information."
    },
    {
     "code": "4.10.3.3",
     "q": "How are ceramics, polymers and composites made and what are their properties?",
     "idea": "Ceramics, polymers and composites (chemistry only)",
     "content": "(chemistry only) Most of the glass we use is soda-lime glass, made by heating a mixture of sand, sodium carbonate and limestone; borosilicate glass, made from sand and boron trioxide, melts at higher temperatures than soda-lime glass. Clay ceramics, including pottery and bricks, are made by shaping wet clay and then heating in a furnace. The properties of polymers depend on what monomers they are made from and the conditions under which they are made: for example low density (LD) and high density (HD) poly(ethene) are produced from ethene. Thermosoftening polymers melt when they are heated; thermosetting polymers do not. Most composites are made of two materials, a matrix or binder surrounding and binding together fibres or fragments of the other material, called the reinforcement. Students should be able to explain how LD and HD poly(ethene) are both produced from ethene, explain the difference between thermosoftening and thermosetting polymers in terms of their structures, recall some examples of composites, and given appropriate information compare quantitatively the physical properties of glass and clay ceramics, polymers, composites and metals and explain how the properties of materials are related to their uses and select appropriate materials."
    },
    {
     "code": "4.10.4.1",
     "q": "How is ammonia manufactured in the Haber process?",
     "idea": "The Haber process (chemistry only)",
     "content": "(chemistry only) The Haber process is used to manufacture ammonia, which can be used to produce nitrogen-based fertilisers. The raw materials are nitrogen and hydrogen, and students should be able to recall a source for each. The purified gases are passed over a catalyst of iron at a high temperature (about 450°C) and a high pressure (about 200 atmospheres). Some of the hydrogen and nitrogen reacts to form ammonia; the reaction is reversible so some of the ammonia produced breaks down into nitrogen and hydrogen. On cooling, the ammonia liquefies and is removed, and the remaining hydrogen and nitrogen are recycled. (HT only) Students should be able to interpret graphs of reaction conditions versus rate, apply the principles of dynamic equilibrium to the Haber process, explain the trade-off between rate of production and position of equilibrium, and explain how the commercially used conditions are related to the availability and cost of raw materials and energy supplies, control of equilibrium position and rate."
    },
    {
     "code": "4.10.4.2",
     "q": "How are NPK fertilisers produced and used?",
     "idea": "Production and uses of NPK fertilisers (chemistry only)",
     "content": "(chemistry only) Compounds of nitrogen, phosphorus and potassium are used as fertilisers to improve agricultural productivity; NPK fertilisers contain compounds of all three elements. Industrial production of NPK fertilisers can be achieved using a variety of raw materials in several integrated processes, and NPK fertilisers are formulations of various salts containing appropriate percentages of the elements. Ammonia can be used to manufacture ammonium salts and nitric acid. Potassium chloride, potassium sulfate and phosphate rock are obtained by mining, but phosphate rock cannot be used directly as a fertiliser: it is treated with nitric acid or sulfuric acid to produce soluble salts that can be used as fertilisers. Students should be able to recall the names of the salts produced when phosphate rock is treated with nitric acid, sulfuric acid and phosphoric acid, and compare the industrial production of fertilisers with laboratory preparations of the same compounds, given appropriate information."
    }
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
    "MS 2a",
    "WS 2.2",
    "WS 2.3",
    "WS 2.4",
    "WS 2.5",
    "WS 2.6",
    "WS 2.7",
    "WS 3.5",
    "WS 3.8",
    "AT 2",
    "AT 3",
    "AT 4"
   ]
  },
  {
   "id": "9",
   "component": "P1",
   "option": null,
   "name": "7 Mathematical requirements (assessed on every paper; the room id 9 is kept for parity with the sibling AQA science courses)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "MS 1a",
     "q": "Decimal form",
     "idea": "Recognise and use expressions in decimal form",
     "content": "Arithmetic and numerical computation: recognise and use expressions in decimal form. Questions target maths skills at a level of demand appropriate to the subject: in Foundation Tier papers not lower than that expected at Key Stage 3, in Higher Tier papers not lower than that of questions and tasks in assessments for the Foundation Tier in a GCSE Qualification in Mathematics."
    },
    {
     "code": "MS 1b",
     "q": "Standard form",
     "idea": "Recognise and use expressions in standard form",
     "content": "Arithmetic and numerical computation: recognise and use expressions in standard form, for example the radius of an atom as 1 x 10-10 m."
    },
    {
     "code": "MS 1c",
     "q": "Ratios, fractions and percentages",
     "idea": "Use ratios, fractions and percentages",
     "content": "Arithmetic and numerical computation: use ratios, fractions and percentages, for example percentage by mass in a compound, percentage yield and atom economy."
    },
    {
     "code": "MS 1d",
     "q": "Estimates",
     "idea": "Make estimates of the results of simple calculations",
     "content": "Arithmetic and numerical computation: make estimates of the results of simple calculations, for example when comparing nano dimensions with the dimensions of atoms and molecules."
    },
    {
     "code": "MS 2a",
     "q": "Significant figures",
     "idea": "Use an appropriate number of significant figures",
     "content": "Handling data: use an appropriate number of significant figures, for example when providing answers from titrations and chromatograms."
    },
    {
     "code": "MS 2b",
     "q": "Arithmetic means",
     "idea": "Find arithmetic means",
     "content": "Handling data: find arithmetic means, for example of repeat measurements of a temperature change or a reaction time."
    },
    {
     "code": "MS 2c",
     "q": "Frequency tables, bar charts and histograms",
     "idea": "Construct and interpret frequency tables and diagrams, bar charts and histograms",
     "content": "Handling data: construct and interpret frequency tables and diagrams, bar charts and histograms, for example when extracting and interpreting information about resources from charts, graphs and tables."
    },
    {
     "code": "MS 2h",
     "q": "Order of magnitude",
     "idea": "Make order of magnitude calculations",
     "content": "Handling data: make order of magnitude calculations, for example the change in hydrogen ion concentration as pH decreases by one unit, and the use of orders of magnitude to evaluate the significance of data about resources."
    },
    {
     "code": "MS 3a",
     "q": "Symbols",
     "idea": "Understand and use the symbols =, <, <<, >>, >, ∝, ~",
     "content": "Algebra: understand and use the symbols: =, <, <<, >>, >, ∝ , ~ (used, for example, in work on moles at Higher Tier)."
    },
    {
     "code": "MS 3b",
     "q": "Rearranging equations",
     "idea": "Change the subject of an equation",
     "content": "Algebra: change the subject of an equation, for example rearranging the relationships between mass, relative formula mass and amount in moles, or between mass of solute, volume and concentration."
    },
    {
     "code": "MS 3c",
     "q": "Substitution with units",
     "idea": "Substitute numerical values into algebraic equations using appropriate units",
     "content": "Algebra: substitute numerical values into algebraic equations using appropriate units for physical quantities, for example in calculations of reacting masses, gas volumes and concentrations in mol/dm3."
    },
    {
     "code": "MS 4a",
     "q": "Graph to number and back",
     "idea": "Translate information between graphical and numeric form",
     "content": "Graphs: translate information between graphical and numeric form, for example reading a rate graph or an instrumental result presented in chart or tabular form."
    },
    {
     "code": "MS 4b",
     "q": "Linear relationships",
     "idea": "Understand that y = mx + c represents a linear relationship",
     "content": "Graphs: understand that y = mx + c represents a linear relationship, used when drawing and interpreting appropriate graphs from data to determine rate of reaction."
    },
    {
     "code": "MS 4c",
     "q": "Plotting",
     "idea": "Plot two variables from experimental or other data",
     "content": "Graphs: plot two variables from experimental or other data, for example quantity of product formed or reactant used up against time."
    },
    {
     "code": "MS 4d",
     "q": "Slope and intercept",
     "idea": "Determine the slope and intercept of a linear graph",
     "content": "Graphs: determine the slope and intercept of a linear graph."
    },
    {
     "code": "MS 4e",
     "q": "Tangents",
     "idea": "Draw and use the slope of a tangent to a curve as a measure of rate of change",
     "content": "Graphs: draw and use the slope of a tangent to a curve as a measure of rate of change; (HT only) calculate the gradient of a tangent to the curve on a rate graph as a measure of rate of reaction at a specific time."
    },
    {
     "code": "MS 5b",
     "q": "2D and 3D forms",
     "idea": "Visualise and represent 2D and 3D forms",
     "content": "Geometry and trigonometry: visualise and represent 2D and 3D forms including two dimensional representations of 3D objects, for example dot and cross, ball and stick and displayed structural formulae."
    },
    {
     "code": "MS 5c",
     "q": "Areas and volumes",
     "idea": "Calculate areas of triangles and rectangles, surface areas and volumes of cubes",
     "content": "Geometry and trigonometry: calculate areas of triangles and rectangles, surface areas and volumes of cubes, used in work on surface area to volume ratio for nanoparticles and for the size of pieces of a reacting solid."
    }
   ]
  },
  {
   "id": "10.1",
   "component": "P1",
   "option": null,
   "name": "8.1 Use of apparatus and techniques (assessed on every paper)",
   "caseStudies": [],
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
    },
    {
     "code": "AT 8",
     "q": "Qualitative analysis",
     "idea": "Qualitative reagents and techniques (chemistry only)",
     "content": "(chemistry only) Use of appropriate qualitative reagents and techniques to analyse and identify unknown samples or products including gas tests, flame tests, precipitation reactions, and the determination of concentrations of strong acids and strong alkalis (links to A-level AT d). AT 1–7 are common with combined science; AT 8 is chemistry only."
    }
   ]
  }
 ]
};
module.exports = { SPEC_8462 };
