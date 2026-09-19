/* Pearson Edexcel GCSE Combined Science (1SC0) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_1SC0 = {
 "id": "EDX-1SC0",
 "board": "Pearson Edexcel",
 "subject": "Combined Science",
 "code": "1SC0",
 "level": "GCSE",
 "version": "Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Combined Science (1SC0), Specification Issue 6, March 2024",
 "firstExam": 2018,
 "essaySubject": false,
 "components": [
  {
   "id": "1B",
   "name": "Paper 1: Biology 1",
   "marks": 60,
   "weight": 16.67,
   "minutes": 70,
   "sections": [
    "Paper code 1SC0/1BF (foundation tier) or 1SC0/1BH (higher tier); written examination 1 hour 10 minutes, 60 marks, 16.67% of the qualification",
    "Content assessed: Topic 1 Key concepts in biology, Topic 2 Cells and control, Topic 3 Genetics, Topic 4 Natural selection and genetic modification, Topic 5 Health, disease and the development of medicines",
    "Six questions, all answered: a mixture of multiple-choice, short answer questions, calculations and extended open-response questions; 16 marks are overlap questions that appear in both tiers; calculators may be used"
   ]
  },
  {
   "id": "2B",
   "name": "Paper 2: Biology 2",
   "marks": 60,
   "weight": 16.67,
   "minutes": 70,
   "sections": [
    "Paper code 1SC0/2BF or 1SC0/2BH; written examination 1 hour 10 minutes, 60 marks, 16.67% of the qualification",
    "Content assessed: Topic 1 Key concepts in biology, Topic 6 Plant structures and their functions, Topic 7 Animal coordination, control and homeostasis, Topic 8 Exchange and transport in animals, Topic 9 Ecosystems and material cycles",
    "Six questions, all answered: multiple-choice, short answer, calculations and extended open-response; 16 overlap marks; calculators may be used"
   ]
  },
  {
   "id": "1C",
   "name": "Paper 3: Chemistry 1",
   "marks": 60,
   "weight": 16.67,
   "minutes": 70,
   "sections": [
    "Paper code 1SC0/1CF or 1SC0/1CH; written examination 1 hour 10 minutes, 60 marks, 16.67% of the qualification",
    "Content assessed: Topic 1 Key concepts in chemistry, Topic 2 States of matter and mixtures, Topic 3 Chemical changes, Topic 4 Extracting metals and equilibria",
    "Six questions, all answered: multiple-choice, short answer, calculations and extended open-response; 16 overlap marks; calculators may be used; the periodic table (Appendix 3) is provided"
   ]
  },
  {
   "id": "2C",
   "name": "Paper 4: Chemistry 2",
   "marks": 60,
   "weight": 16.67,
   "minutes": 70,
   "sections": [
    "Paper code 1SC0/2CF or 1SC0/2CH; written examination 1 hour 10 minutes, 60 marks, 16.67% of the qualification",
    "Content assessed: Topic 1 Key concepts in chemistry, Topic 6 Groups in the periodic table, Topic 7 Rates of reaction and energy changes, Topic 8 Fuels and Earth science",
    "Six questions, all answered: multiple-choice, short answer, calculations and extended open-response; 16 overlap marks; calculators may be used; the periodic table (Appendix 3) is provided"
   ]
  },
  {
   "id": "1P",
   "name": "Paper 5: Physics 1",
   "marks": 60,
   "weight": 16.67,
   "minutes": 70,
   "sections": [
    "Paper code 1SC0/1PF or 1SC0/1PH; written examination 1 hour 10 minutes, 60 marks, 16.67% of the qualification",
    "Content assessed: Topic 1 Key concepts of physics, Topic 2 Motion and forces, Topic 3 Conservation of energy, Topic 4 Waves, Topic 5 Light and the electromagnetic spectrum, Topic 6 Radioactivity",
    "Six questions, all answered: multiple-choice, short answer, calculations and extended open-response; 16 overlap marks; calculators may be used; the Appendix 4 list b equations are given on a formulae sheet at the end of the paper"
   ]
  },
  {
   "id": "2P",
   "name": "Paper 6: Physics 2",
   "marks": 60,
   "weight": 16.67,
   "minutes": 70,
   "sections": [
    "Paper code 1SC0/2PF or 1SC0/2PH; written examination 1 hour 10 minutes, 60 marks, 16.67% of the qualification",
    "Content assessed: Topic 1 Key concepts of physics, Topic 8 Energy - forces doing work, Topic 9 Forces and their effects, Topic 10 Electricity and circuits, Topic 12 Magnetism and the motor effect, Topic 13 Electromagnetic induction, Topic 14 Particle model, Topic 15 Forces and matter",
    "Six questions, all answered: multiple-choice, short answer, calculations and extended open-response; 16 overlap marks; calculators may be used; the Appendix 4 list b equations are given on a formulae sheet at the end of the paper"
   ]
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge and understanding",
   "text": "Demonstrate knowledge and understanding of: scientific ideas; scientific techniques and procedures. 40% of the GCSE (6.67% on each of the six papers), ±3."
  },
  {
   "id": "AO2",
   "label": "Application",
   "text": "Apply knowledge and understanding of: scientific ideas; scientific enquiry, techniques and procedures. 40% of the GCSE (6.67% on each paper), ±3."
  },
  {
   "id": "AO3",
   "label": "Analysis and evaluation",
   "text": "Analyse information and ideas to: interpret and evaluate; make judgements and draw conclusions; develop and improve experimental procedures. 20% of the GCSE (3.33% on each paper), ±3."
  }
 ],
 "markConventions": {
  "style": "points",
  "summary": "Six externally examined papers (Biology 1 and 2, Chemistry 1 and 2, Physics 1 and 2), each 1 hour 10 minutes, 60 marks, six questions all answered, 16.67% of the qualification; first assessment May/June 2018, all sat in one May/June series. Every paper is available at foundation tier (targets grades 1-5) and higher tier (targets grades 4-9) and a student sits all six in the same tier; 16 marks of each paper are overlap questions that appear in both tiers. Each paper mixes multiple-choice, short answer questions, calculations and extended open-response questions; Pearson's papers mark the extended open-response questions (6 marks) with levels-based mark schemes for a sustained line of reasoning. Calculators may be used on every paper. Higher-tier-only content is printed in bold in the specification and is marked '(HT only)' in the ideas. Eighteen mandatory core practicals cover the apparatus and techniques of Appendix 6 and are examined on the papers. Mathematical skills (Appendix 1) are assessed within the content at a level not below Key Stage 3 on foundation tier and not below foundation GCSE Mathematics on higher tier; each topic's 'Maths skills' column and 'Use of mathematics' list say which skills it draws on. Appendix 4 list a: students must recall and apply these physics equations: distance travelled = average speed × time (2.6b); acceleration = change in velocity ÷ time taken, a = (v − u) / t (2.8); force = mass × acceleration, F = m × a (2.15); weight = mass × gravitational field strength, W = m × g (2.16); momentum = mass × velocity, p = m × v (2.24); change in gravitational potential energy = mass × gravitational field strength × change in vertical height, ΔGPE = m × g × Δh (3.1 and 8.8); kinetic energy = ½ × mass × (speed)², KE = ½ × m × v² (3.2 and 8.9); efficiency = useful energy transferred by the device ÷ total energy supplied to the device (3.11 and 8.15); wave speed = frequency × wavelength, v = f × λ, and wave speed = distance ÷ time, v = x / t (4.6); work done = force × distance moved in the direction of the force, E = F × d (8.6); power = work done ÷ time taken, P = E / t (8.13); energy transferred = charge moved × potential difference, E = Q × V (10.6); charge = current × time, Q = I × t (10.9); potential difference = current × resistance, V = I × R (10.13); power = energy transferred ÷ time taken, P = E / t (10.29); electrical power = current × potential difference, P = I × V, and electrical power = (current)² × resistance, P = I² × R (10.31); density = mass ÷ volume, ρ = m / V (14.2); force exerted on a spring = spring constant × extension, F = k × x (15.3). Appendix 4 list b: these are given on a formulae sheet at the end of the paper for students to select and apply: (final velocity)² − (initial velocity)² = 2 × acceleration × distance, v² − u² = 2 × a × x (2.9); force = change in momentum ÷ time, F = (mv − mu) / t (2.26, higher tier only); energy transferred = current × potential difference × time, E = I × V × t (10.27); force on a conductor at right angles to a magnetic field carrying a current = magnetic flux density × current × length, F = B × I × l (12.13, higher tier only); higher-tier-only equations are not given on the foundation formulae sheet. SI base units metre, kilogram, second, ampere, kelvin and mole and the derived units hertz, newton, joule, watt, pascal, coulomb, volt, ohm and tesla (Appendix 5) are used throughout. The periodic table (Appendix 3) is provided in the chemistry papers.",
  "commandWords": [
   {
    "word": "Add/Label",
    "means": "Requires the addition or labelling to a stimulus material given in the question, for example labelling a diagram or adding units to a table."
   },
   {
    "word": "Assess",
    "means": "Give careful consideration to all the factors or events that apply and identify which are the most important or relevant. Make a judgement on the importance of something, and come to a conclusion where needed."
   },
   {
    "word": "Calculate",
    "means": "Obtain a numerical answer, showing relevant working. If the answer has a unit, this must be included. This can include using an equation to calculate a numerical answer."
   },
   {
    "word": "Comment on",
    "means": "Requires the synthesis of a number of variables from data/information to form a judgement."
   },
   {
    "word": "Compare",
    "means": "Looking for the similarities or differences of two (or more) things. Should not require the drawing of a conclusion. Answer must relate to both (or all) things mentioned in the question."
   },
   {
    "word": "Compare and contrast",
    "means": "Looking for the similarities and differences of two (or more) things. Should not require the drawing of a conclusion. Answer must relate to both (or all) things mentioned in the question, and must include at least one similarity and one difference."
   },
   {
    "word": "Complete",
    "means": "Requires the completion of a table/diagram."
   },
   {
    "word": "Deduce",
    "means": "Draw/reach conclusion(s) from the information provided."
   },
   {
    "word": "Describe",
    "means": "To give an account of something. Statements in the response need to be developed as they are often linked but do not need to include a justification or reason."
   },
   {
    "word": "Determine",
    "means": "The answer must have an element which is quantitative from the stimulus provided, or must show how the answer can be reached quantitatively. To gain maximum marks there must be a quantitative element to the answer."
   },
   {
    "word": "Devise",
    "means": "Plan or invent a procedure from existing principles/ideas."
   },
   {
    "word": "Discuss",
    "means": "Identify the issue/situation/problem/argument that is being assessed within the question. Explore all aspects of an issue/situation/problem/argument. Investigate the issue/situation etc. by reasoning or argument."
   },
   {
    "word": "Draw",
    "means": "Produce a diagram either using a ruler or using freehand."
   },
   {
    "word": "Estimate",
    "means": "Find an approximate value, number, or quantity from a diagram/given data or through a calculation."
   },
   {
    "word": "Evaluate",
    "means": "Review information (e.g. data, methods) then bring it together to form a conclusion, drawing on evidence including strengths, weaknesses, alternative actions, relevant data or information. Come to a supported judgement of a subject's qualities and relation to its context."
   },
   {
    "word": "Explain",
    "means": "An explanation requires a justification/exemplification of a point. The answer must contain some element of reasoning/justification; this can include mathematical explanations."
   },
   {
    "word": "Give/State/Name",
    "means": "All of these command words are really synonyms. They generally all require recall of one or more pieces of information."
   },
   {
    "word": "Give a reason/reasons",
    "means": "When a statement has been made and the requirement is only to give the reasons why."
   },
   {
    "word": "Identify",
    "means": "Usually requires some key information to be selected from a given stimulus/resource."
   },
   {
    "word": "Justify",
    "means": "Give evidence to support (either the statement given in the question or an earlier answer)."
   },
   {
    "word": "Measure",
    "means": "To determine the dimensions or angle from a diagram using an instrument such as a ruler or protractor."
   },
   {
    "word": "Plot",
    "means": "Produce a graph by marking points accurately on a grid from data that is provided and then drawing a line of best fit through these points. A suitable scale and appropriately labelled axes must be included if these are not provided in the question."
   },
   {
    "word": "Predict",
    "means": "Give an expected result."
   },
   {
    "word": "Show that",
    "means": "Verify the statement given in the question."
   },
   {
    "word": "Sketch",
    "means": "Produce a freehand drawing. For a graph this would need a line and labelled axis with important features indicated; the axes are not scaled."
   },
   {
    "word": "State and explain",
    "means": "Make a point and link ideas to justify that point. An explanation requires a justification/exemplification of a point, with some element of reasoning/justification, which can include mathematical explanations."
   },
   {
    "word": "State what is meant by",
    "means": "When the meaning of a term is expected but there are different ways of how these can be described."
   },
   {
    "word": "Write",
    "means": "When the question asks for an equation."
   },
   {
    "word": "Suggest",
    "means": "A verb preceding a command word: suggest an explanation or suggest a description, applying knowledge to an unfamiliar situation."
   }
  ],
  "essayShapes": [
   {
    "marks": 6,
    "minutes": 8,
    "structure": "Extended open-response question. The specification says every paper includes extended open-response questions; Pearson's papers set them at 6 marks with a levels-based mark scheme (the tariff and levels come from the sample assessment materials, not the specification). A Level 3 (5-6 mark) answer is a sustained line of reasoning that is coherent, relevant, substantiated and logically structured: for a core practical, the method step by step with the variables controlled and how the measurements are used; for an explanation, cause to effect to consequence in the specification's own terms, linked throughout; for a comparison or evaluation, both sides weighed with a justified conclusion. Level 2 (3-4) has relevant, partly linked points; Level 1 (1-2) is fragmentary."
   }
  ]
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-combinedscience-spec.pdf",
  "etag": "W/\"2a78dc-65b809edf4af3\"",
  "lastModified": "Tue, 15 Sep 2026 07:37:19 GMT",
  "length": 2783452,
  "checkedAt": "2026-09-19T17:54:36.144Z"
 },
 "topics": [
  {
   "id": "B1",
   "component": "1B",
   "option": null,
   "name": "Biology Topic 1 – Key concepts in biology",
   "caseStudies": [
    "Core Practical: Investigate biological specimens using microscopes, including magnification calculations and labelled scientific drawings from observations",
    "Core Practical: Investigate the effect of pH on enzyme activity",
    "Core Practical: Investigate osmosis in potatoes"
   ],
   "ideas": [
    {
     "code": "1.1",
     "q": "How are the sub-cellular structures of animal, plant and bacterial cells related to their functions?",
     "idea": "Sub-cellular structures and function",
     "content": "Explain how the sub-cellular structures of eukaryotic and prokaryotic cells are related to their functions, including: a animal cells – nucleus, cell membrane, mitochondria and ribosomes; b plant cells – nucleus, cell membrane, cell wall, chloroplasts, mitochondria, vacuole and ribosomes; c bacteria – chromosomal DNA, plasmid DNA, cell membrane, ribosomes and flagella."
    },
    {
     "code": "1.2",
     "q": "How are sperm cells, egg cells and ciliated epithelial cells adapted to their function?",
     "idea": "Specialised cells",
     "content": "Describe how specialised cells are adapted to their function, including: a sperm cells – acrosome, haploid nucleus, mitochondria and tail; b egg cells – nutrients in the cytoplasm, haploid nucleus and changes in the cell membrane after fertilisation; c ciliated epithelial cells."
    },
    {
     "code": "1.3",
     "q": "How has microscope technology changed what we know about cells?",
     "idea": "Microscopy and cell discovery",
     "content": "Explain how changes in microscope technology, including electron microscopy, have enabled us to see cell structures and organelles with more clarity and detail than in the past and increased our understanding of the role of sub-cellular structures."
    },
    {
     "code": "1.4",
     "q": "Why do scientists use estimation when working with number, size and scale?",
     "idea": "Number, size and scale",
     "content": "Demonstrate an understanding of number, size and scale, including the use of estimations and explain when they should be used. Maths skills: 1d, 2h."
    },
    {
     "code": "1.5",
     "q": "What do the prefixes milli, micro, nano and pico mean, and how are standard-form numbers used for cells?",
     "idea": "Quantitative units for cells",
     "content": "Demonstrate an understanding of the relationship between quantitative units in relation to cells, including: a milli (10⁻³); b micro (10⁻⁶); c nano (10⁻⁹); d pico (10⁻¹²); e (HT only) calculations with numbers written in standard form. Maths skills: 1b, 2a, 2h."
    },
    {
     "code": "1.6",
     "q": "How do you use a microscope to observe biological specimens and calculate magnification?",
     "idea": "Core Practical: Investigate biological specimens using microscopes",
     "content": "Core Practical: Investigate biological specimens using microscopes, including magnification calculations and labelled scientific drawings from observations. Maths skills: 1d, 2a, 2h."
    },
    {
     "code": "1.7",
     "q": "How do enzymes catalyse reactions at their active site?",
     "idea": "Enzyme action",
     "content": "Explain the mechanism of enzyme action including the active site and enzyme specificity."
    },
    {
     "code": "1.8",
     "q": "Why do enzymes stop working when they are denatured?",
     "idea": "Enzyme denaturation",
     "content": "Explain how enzymes can be denatured due to changes in the shape of the active site."
    },
    {
     "code": "1.9",
     "q": "How do temperature, substrate concentration and pH affect enzyme activity?",
     "idea": "Factors affecting enzyme activity",
     "content": "Explain the effects of temperature, substrate concentration and pH on enzyme activity. Maths skills: 2c, 2f, 4a, 4c."
    },
    {
     "code": "1.10",
     "q": "How do you investigate the effect of pH on enzyme activity?",
     "idea": "Core Practical: Investigate the effect of pH on enzyme activity",
     "content": "Core Practical: Investigate the effect of pH on enzyme activity. Maths skills: 2c, 2f, 4a, 4c."
    },
    {
     "code": "1.11",
     "q": "How is the rate of an enzyme-catalysed reaction calculated?",
     "idea": "Rate calculations for enzyme activity",
     "content": "Demonstrate an understanding of rate calculations for enzyme activity. Maths skills: 1a, 1c."
    },
    {
     "code": "1.12",
     "q": "Why are enzymes important as biological catalysts in building up and breaking down food molecules?",
     "idea": "Enzymes in synthesis and breakdown",
     "content": "Explain the importance of enzymes as biological catalysts in the synthesis of carbohydrates, proteins and lipids and their breakdown into sugars, amino acids and fatty acids and glycerol."
    },
    {
     "code": "1.15",
     "q": "How are diffusion, osmosis and active transport used to move substances into and out of cells?",
     "idea": "Transport into and out of cells",
     "content": "Explain how substances are transported into and out of cells, including by diffusion, osmosis and active transport."
    },
    {
     "code": "1.16",
     "q": "How do you investigate osmosis using potatoes?",
     "idea": "Core Practical: Investigate osmosis in potatoes",
     "content": "Core Practical: Investigate osmosis in potatoes. Maths skills: 1c, 2b, 2f, 4a, 4c."
    },
    {
     "code": "1.17",
     "q": "How is the percentage gain or loss of mass calculated in an osmosis investigation?",
     "idea": "Percentage mass change in osmosis",
     "content": "Calculate percentage gain and loss of mass in osmosis. Maths skills: 1a, 1c, 4a, 4c."
    }
   ],
   "skills": [
    "Demonstrate an understanding of number, size and scale and the quantitative relationship between units (2a and 2h).",
    "Use estimations and explain when they should be used (1d).",
    "Carry out rate calculations for chemical reactions (1a and 1c).",
    "Calculate with numbers written in standard form (1b).",
    "Plot, draw and interpret appropriate graphs (4a, 4b, 4c and 4d).",
    "Translate information between numerical and graphical forms (4a).",
    "Construct and interpret frequency tables and diagrams, bar charts and histograms (2c).",
    "Use a scatter diagram to identify a correlation between two variables (2g).",
    "Understand and use simple compound measures such as the rate of a reaction (1a and 1c).",
    "Calculate the percentage gain and loss of mass (1c).",
    "Calculate arithmetic means (2b).",
    "Carry out rate calculations (1a and 1c)."
   ]
  },
  {
   "id": "B2",
   "component": "1B",
   "option": null,
   "name": "Biology Topic 2 – Cells and control",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.1",
     "q": "What happens during mitosis and the cell cycle?",
     "idea": "Mitosis and the cell cycle",
     "content": "Describe mitosis as part of the cell cycle, including the stages interphase, prophase, metaphase, anaphase and telophase and cytokinesis."
    },
    {
     "code": "2.2",
     "q": "Why is mitosis important for growth, repair and asexual reproduction?",
     "idea": "Importance of mitosis",
     "content": "Describe the importance of mitosis in growth, repair and asexual reproduction."
    },
    {
     "code": "2.3",
     "q": "What cells does mitosis produce?",
     "idea": "Products of mitosis",
     "content": "Describe the division of a cell by mitosis as the production of two daughter cells, each with identical sets of chromosomes in the nucleus to the parent cell, and that this results in the formation of two genetically identical diploid body cells."
    },
    {
     "code": "2.4",
     "q": "What is cancer, in terms of cell division?",
     "idea": "Cancer and uncontrolled cell division",
     "content": "Describe cancer as the result of changes in cells that lead to uncontrolled cell division."
    },
    {
     "code": "2.5",
     "q": "How do animals and plants grow?",
     "idea": "Growth in animals and plants",
     "content": "Describe growth in organisms, including: a cell division and differentiation in animals; b cell division, elongation and differentiation in plants."
    },
    {
     "code": "2.6",
     "q": "Why is cell differentiation important in developing specialised cells?",
     "idea": "Importance of cell differentiation",
     "content": "Explain the importance of cell differentiation in the development of specialised cells."
    },
    {
     "code": "2.7",
     "q": "How are percentile charts used to monitor growth?",
     "idea": "Percentile charts and growth",
     "content": "Demonstrate an understanding of the use of percentiles charts to monitor growth. Maths skills: 1c, 4a."
    },
    {
     "code": "2.8",
     "q": "What is the function of embryonic stem cells, animal stem cells and plant meristems?",
     "idea": "Function of stem cells",
     "content": "Describe the function of embryonic stem cells, stem cells in animals and meristems in plants. Maths skills: 1d."
    },
    {
     "code": "2.9",
     "q": "What are the potential benefits and risks of using stem cells in medicine?",
     "idea": "Benefits and risks of stem cells",
     "content": "Discuss the potential benefits and risks associated with the use of stem cells in medicine."
    },
    {
     "code": "2.13",
     "q": "How are sensory receptors, sensory neurones, relay neurones, motor neurones and synapses involved in transmitting electrical impulses?",
     "idea": "The nervous system and synapses",
     "content": "Explain the structure and function of sensory receptors, sensory neurones, relay neurones in the CNS, motor neurones and synapses in the transmission of electrical impulses, including the axon, dendron, myelin sheath and the role of neurotransmitters. Maths skills: 2g, 4a, 4c."
    },
    {
     "code": "2.14",
     "q": "How does a reflex arc work?",
     "idea": "Reflex arcs",
     "content": "Explain the structure and function of a reflex arc including sensory, relay and motor neurones."
    }
   ],
   "skills": [
    "Use estimations and explain when they should be used (1d).",
    "Use percentiles and calculate percentage gain and loss of mass (1c).",
    "Translate information between numerical and graphical forms (4a).",
    "Use a scatter diagram to identify a correlation between two variables (2g).",
    "Extract and interpret information from graphs, charts and tables (2c and 4a).",
    "Understand and use percentiles (1c)."
   ]
  },
  {
   "id": "B3",
   "component": "1B",
   "option": null,
   "name": "Biology Topic 3 – Genetics",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.3",
     "q": "What happens during meiosis and what cells does it produce?",
     "idea": "Meiosis",
     "content": "Explain the role of meiotic cell division, including the production of four daughter cells, each with half the number of chromosomes, and that this results in the formation of genetically different haploid gametes. The stages of meiosis are not required."
    },
    {
     "code": "3.4",
     "q": "What is the structure of DNA?",
     "idea": "DNA structure",
     "content": "Describe DNA as a polymer made up of: a two strands coiled to form a double helix; b strands linked by a series of complementary base pairs joined together by weak hydrogen bonds; c nucleotides that consist of a sugar and phosphate group with one of the four different bases attached to the sugar."
    },
    {
     "code": "3.5",
     "q": "What is a genome and what is a gene?",
     "idea": "Genome and gene",
     "content": "Describe the genome as the entire DNA of an organism and a gene as a section of a DNA molecule that codes for a specific protein."
    },
    {
     "code": "3.6",
     "q": "How can DNA be extracted from fruit?",
     "idea": "Extracting DNA",
     "content": "Explain how DNA can be extracted from fruit."
    },
    {
     "code": "3.12",
     "q": "Why are there differences in inherited characteristics?",
     "idea": "Alleles and inherited variation",
     "content": "Explain why there are differences in the inherited characteristics as a result of alleles."
    },
    {
     "code": "3.13",
     "q": "What do the terms chromosome, gene, allele, dominant, recessive, homozygous, heterozygous, genotype, phenotype, gamete and zygote mean?",
     "idea": "Genetics key terms",
     "content": "Explain the terms: chromosome, gene, allele, dominant, recessive, homozygous, heterozygous, genotype, phenotype, gamete and zygote."
    },
    {
     "code": "3.14",
     "q": "How do genetic diagrams, Punnett squares and family pedigrees show monohybrid inheritance?",
     "idea": "Monohybrid inheritance",
     "content": "Explain monohybrid inheritance using genetic diagrams, Punnett squares and family pedigrees. Maths skills: 1c, 2c, 2e, 4a."
    },
    {
     "code": "3.15",
     "q": "How is the sex of offspring determined at fertilisation?",
     "idea": "Sex determination",
     "content": "Describe how the sex of offspring is determined at fertilisation, using genetic diagrams. Maths skills: 1c, 2c, 2e, 4a."
    },
    {
     "code": "3.16",
     "q": "How are probabilities, ratios and percentages used to analyse monohybrid crosses and pedigrees?",
     "idea": "Analysing monohybrid crosses",
     "content": "Calculate and analyse outcomes (using probabilities, ratios and percentages) from monohybrid crosses and pedigree analysis for dominant and recessive traits. Maths skills: 1c, 2c, 2e, 4a."
    },
    {
     "code": "3.19",
     "q": "Why do most phenotypic features result from multiple genes rather than one?",
     "idea": "Polygenic inheritance",
     "content": "State that most phenotypic features are the result of multiple genes rather than single gene inheritance."
    },
    {
     "code": "3.20",
     "q": "What causes genetic and environmental variation in phenotype?",
     "idea": "Causes of variation",
     "content": "Describe the causes of variation that influence phenotype, including: a genetic variation – different characteristics as a result of mutation and sexual reproduction; b environmental variation – different characteristics caused by an organism's environment (acquired characteristics)."
    },
    {
     "code": "3.21",
     "q": "What did the Human Genome Project find, and how could it be applied in medicine?",
     "idea": "The Human Genome Project",
     "content": "Discuss the outcomes of the Human Genome Project and its potential applications within medicine."
    },
    {
     "code": "3.22",
     "q": "Why is there usually extensive genetic variation within a population?",
     "idea": "Genetic variation within a population",
     "content": "State that there is usually extensive genetic variation within a population of a species and that these arise through mutations."
    },
    {
     "code": "3.23",
     "q": "What effect do most genetic mutations have on phenotype?",
     "idea": "Effects of mutations on phenotype",
     "content": "State that most genetic mutations have no effect on the phenotype, some mutations have a small effect on the phenotype and, rarely, a single mutation will significantly affect the phenotype."
    }
   ],
   "skills": [
    "Use estimations and explain when they should be used (1d).",
    "Translate information between numerical and graphical forms (4a).",
    "Extract and interpret information from graphs, charts and tables (2c and 4a).",
    "Understand and use direct proportions and simple ratios in genetic crosses (1c).",
    "Understand and use the concept of probability in predicting the outcome of genetic crosses (2e).",
    "Calculate arithmetic means (2b)."
   ]
  },
  {
   "id": "B4",
   "component": "1B",
   "option": null,
   "name": "Biology Topic 4 – Natural selection and genetic modification",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.2",
     "q": "What is Darwin's theory of evolution by natural selection?",
     "idea": "Darwin's theory of evolution",
     "content": "Explain Charles Darwin's theory of evolution by natural selection."
    },
    {
     "code": "4.3",
     "q": "How does antibiotic resistance in bacteria support Darwin's theory?",
     "idea": "Evidence from antibiotic resistance",
     "content": "Explain how the emergence of resistant organisms supports Charles Darwin's theory of evolution including antibiotic resistance in bacteria. Maths skills: 2c, 4a."
    },
    {
     "code": "4.4",
     "q": "What fossil evidence supports human evolution?",
     "idea": "Fossil evidence for human evolution",
     "content": "Describe the evidence for human evolution, based on fossils, including: a Ardi from 4.4 million years ago; b Lucy from 3.2 million years ago; c Richard Leakey's discovery of fossils from 1.6 million years ago. Maths skills: 1a, 1b, 1c, 4a."
    },
    {
     "code": "4.5",
     "q": "What evidence from stone tools supports human evolution?",
     "idea": "Stone tool evidence for human evolution",
     "content": "Describe the evidence for human evolution based on stone tools, including: a the development of stone tools over time; b how these can be dated from their environment."
    },
    {
     "code": "4.7",
     "q": "Why has genetic analysis led to a three-domain classification rather than five kingdoms?",
     "idea": "Classification and genetic analysis",
     "content": "Describe how genetic analysis has led to the suggestion of the three domains rather than the five kingdoms classification method."
    },
    {
     "code": "4.8",
     "q": "How has selective breeding affected food plants and domesticated animals?",
     "idea": "Selective breeding",
     "content": "Explain selective breeding and its impact on food plants and domesticated animals."
    },
    {
     "code": "4.10",
     "q": "What is genetic engineering?",
     "idea": "Genetic engineering",
     "content": "Describe genetic engineering as a process which involves modifying the genome of an organism to introduce desirable characteristics."
    },
    {
     "code": "4.11",
     "q": "What are the main stages of genetic engineering?",
     "idea": "Stages of genetic engineering",
     "content": "(HT only) Describe the main stages of genetic engineering including the use of: a restriction enzymes; b ligase; c sticky ends; d vectors."
    },
    {
     "code": "4.14",
     "q": "What are the benefits and risks of genetic engineering and selective breeding in agriculture and medicine?",
     "idea": "Evaluating genetic engineering and selective breeding",
     "content": "Evaluate the benefits and risks of genetic engineering and selective breeding in modern agriculture and medicine, including practical and ethical implications. Maths skills: 2c, 4a, 4c."
    }
   ],
   "skills": [
    "Translate information between numerical and graphical forms (4a).",
    "Construct and interpret frequency tables and diagrams, bar charts and histograms (2c).",
    "Plot and draw appropriate graphs, selecting appropriate scales for axes (4a and 4c).",
    "Extract and interpret information from graphs, charts and tables (2c and 4a).",
    "Understand and use direct proportions and simple ratios in genetic crosses (1c).",
    "Understand and use the concept of probability in predicting the outcome of genetic crosses (2e)."
   ]
  },
  {
   "id": "B5",
   "component": "1B",
   "option": null,
   "name": "Biology Topic 5 – Health, disease and the development of medicines",
   "caseStudies": [],
   "ideas": [
    {
     "code": "5.1",
     "q": "How does the WHO define health?",
     "idea": "Definition of health",
     "content": "Describe health as a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity, as defined by the World Health Organization (WHO)."
    },
    {
     "code": "5.2",
     "q": "What is the difference between communicable and non-communicable diseases?",
     "idea": "Communicable and non-communicable disease",
     "content": "Describe the difference between communicable and non-communicable diseases."
    },
    {
     "code": "5.3",
     "q": "Why can having one disease make you more likely to get another?",
     "idea": "Interaction between diseases",
     "content": "Explain why the presence of one disease can lead to a higher susceptibility to other diseases. Maths skills: 2c, 2d, 2g, 4a, 4c."
    },
    {
     "code": "5.4",
     "q": "What is a pathogen?",
     "idea": "Pathogens",
     "content": "Describe a pathogen as a disease-causing organism, including viruses, bacteria, fungi and protists."
    },
    {
     "code": "5.5",
     "q": "What causes cholera, tuberculosis, Chalara ash dieback, malaria and HIV/AIDS?",
     "idea": "Common infections",
     "content": "Describe some common infections, including: a cholera (bacteria) causes diarrhoea; b tuberculosis (bacteria) causes lung damage; c Chalara ash dieback (fungi) causes leaf loss and bark lesions; d malaria (protists) causes damage to blood and liver; e HIV (virus) destroys white blood cells, leading to the onset of AIDS."
    },
    {
     "code": "5.6",
     "q": "How are cholera, tuberculosis, Chalara ash dieback and malaria spread, and how can this be reduced?",
     "idea": "Spread and prevention of disease",
     "content": "Explain how pathogens are spread and how this spread can be reduced or prevented, including: a cholera (bacteria) – water; b tuberculosis (bacteria) – airborne; c Chalara ash dieback (fungi) – airborne; d malaria (protists) – animal vectors."
    },
    {
     "code": "5.8",
     "q": "How are STIs such as Chlamydia and HIV spread, and how can this be reduced?",
     "idea": "Sexually transmitted infections",
     "content": "Explain how sexually transmitted infections (STIs) are spread and how this spread can be reduced or prevented, including: a Chlamydia (bacteria); b HIV (virus)."
    },
    {
     "code": "5.12",
     "q": "How do physical barriers and chemical defences protect the body from pathogens?",
     "idea": "Physical and chemical defences",
     "content": "Describe how the physical barriers and chemical defences of the human body provide protection from pathogens, including: a physical barriers, including mucus, cilia and skin; b chemical defence, including lysozymes and hydrochloric acid. Maths skills: 5c."
    },
    {
     "code": "5.13",
     "q": "How does the specific immune system defend the body against disease?",
     "idea": "The specific immune response",
     "content": "Explain the role of the specific immune system of the human body in defence against disease, including: a exposure to pathogen; b the antigens trigger an immune response which causes the production of antibodies; c the antigens also trigger production of memory lymphocytes; d the role of memory lymphocytes in the secondary response to the antigen."
    },
    {
     "code": "5.14",
     "q": "How does immunisation with an inactive pathogen protect the body?",
     "idea": "Immunisation",
     "content": "Explain the body's response to immunisation using an inactive form of a pathogen. Maths skills: 2c, 2g, 4a, 4c."
    },
    {
     "code": "5.16",
     "q": "Why can antibiotics only treat bacterial infections?",
     "idea": "Antibiotics and bacterial infections",
     "content": "Explain that antibiotics can only be used to treat bacterial infections because they inhibit cell processes in the bacterium but not the host organism."
    },
    {
     "code": "5.20",
     "q": "What stages does the development of a new medicine go through?",
     "idea": "Developing new medicines",
     "content": "Describe that the process of developing new medicines, including antibiotics, has many stages, including discovery, development, preclinical and clinical testing. Maths skills: 5c."
    },
    {
     "code": "5.23",
     "q": "What factors interact to cause non-communicable diseases?",
     "idea": "Causes of non-communicable disease",
     "content": "Describe that many non-communicable human diseases are caused by the interaction of a number of factors, including cardiovascular diseases, many forms of cancer, some lung and liver diseases and diseases influenced by nutrition."
    },
    {
     "code": "5.24",
     "q": "How do exercise, diet, alcohol and smoking affect non-communicable disease?",
     "idea": "Lifestyle factors and non-communicable disease",
     "content": "Explain the effect of lifestyle factors on non-communicable diseases at local, national and global levels, including: a exercise and diet on obesity and malnutrition, including BMI and waist : hip calculations, using the BMI equation: BMI = mass (kg) / height (m)²; b alcohol on liver diseases; c smoking on cardiovascular diseases. Maths skills: 1a, 1c, 2c, 2d, 2g, 4a, 4c."
    },
    {
     "code": "5.25",
     "q": "What are the different treatments for cardiovascular disease?",
     "idea": "Treating cardiovascular disease",
     "content": "Evaluate some different treatments for cardiovascular disease, including: a life-long medication; b surgical procedures; c lifestyle changes. Maths skills: 1c, 1d, 2c, 4a, 4c."
    }
   ],
   "skills": [
    "Plot, draw and interpret appropriate graphs (4a, 4b, 4c and 4d).",
    "Construct and interpret frequency tables and diagrams, bar charts and histograms (2c).",
    "Understand the principles of sampling as applied to scientific data (2d).",
    "Use a scatter diagram to identify a correlation between two variables (2g).",
    "Calculate cross-sectional areas of bacterial cultures and clear agar jelly using πr² (5c)."
   ]
  },
  {
   "id": "B6",
   "component": "2B",
   "option": null,
   "name": "Biology Topic 6 – Plant structures and their functions",
   "caseStudies": [
    "Core Practical: Investigate the effect of light intensity on the rate of photosynthesis"
   ],
   "ideas": [
    {
     "code": "6.1",
     "q": "Why are photosynthetic organisms the main producers of food and biomass?",
     "idea": "Photosynthetic organisms as producers",
     "content": "Describe photosynthetic organisms as the main producers of food and therefore biomass."
    },
    {
     "code": "6.2",
     "q": "What happens during photosynthesis?",
     "idea": "The photosynthesis reaction",
     "content": "Describe photosynthesis in plants and algae as an endothermic reaction that uses light energy to react carbon dioxide and water to produce glucose and oxygen."
    },
    {
     "code": "6.3",
     "q": "How do temperature, light intensity and carbon dioxide concentration limit the rate of photosynthesis?",
     "idea": "Limiting factors of photosynthesis",
     "content": "Explain the effect of temperature, light intensity and carbon dioxide concentration as limiting factors on the rate of photosynthesis. Maths skills: 2c, 2d, 2g, 4a, 4c."
    },
    {
     "code": "6.4",
     "q": "How do temperature, light intensity and carbon dioxide concentration interact to limit photosynthesis?",
     "idea": "Interacting limiting factors",
     "content": "(HT only) Explain the interactions of temperature, light intensity and carbon dioxide concentration in limiting the rate of photosynthesis. Maths skills: 4b, 4c, 4d."
    },
    {
     "code": "6.5",
     "q": "How do you investigate the effect of light intensity on the rate of photosynthesis?",
     "idea": "Core Practical: Investigate the effect of light intensity on the rate of photosynthesis",
     "content": "Core Practical: Investigate the effect of light intensity on the rate of photosynthesis. Maths skills: 2c, 2f, 2g, 4a, 4c."
    },
    {
     "code": "6.6",
     "q": "How does the rate of photosynthesis relate to light intensity and distance from a light source?",
     "idea": "Photosynthesis rate, light intensity and the inverse square law",
     "content": "(HT only) Explain how the rate of photosynthesis is directly proportional to light intensity and inversely proportional to the distance from a light source, including the use of the inverse square law calculation. Maths skills: 2g, 3a, 4a, 4b, 4c, 4d."
    },
    {
     "code": "6.7",
     "q": "How are root hair cells adapted to absorb water and mineral ions?",
     "idea": "Root hair cells",
     "content": "Explain how the structure of the root hair cells is adapted to absorb water and mineral ions."
    },
    {
     "code": "6.8",
     "q": "How are xylem and phloem adapted to their functions?",
     "idea": "Xylem and phloem",
     "content": "Explain how the structures of the xylem and phloem are adapted to their function in the plant, including: a lignified dead cells in xylem transporting water and minerals through the plant; b living cells in phloem using energy to transport sucrose around the plant."
    },
    {
     "code": "6.9",
     "q": "How are water and mineral ions transported through a plant by transpiration?",
     "idea": "Transpiration",
     "content": "Explain how water and mineral ions are transported through the plant by transpiration, including the structure and function of the stomata."
    },
    {
     "code": "6.10",
     "q": "How is sucrose transported around a plant?",
     "idea": "Translocation",
     "content": "Describe how sucrose is transported around the plant by translocation."
    },
    {
     "code": "6.12",
     "q": "How do light intensity, air movement and temperature affect the rate of water uptake by a plant?",
     "idea": "Environmental factors and water uptake",
     "content": "Explain the effect of environmental factors on the rate of water uptake by a plant, to include light intensity, air movement and temperature. Maths skills: 1a, 1c, 2b, 2c, 4a, 4b, 4c, 4d."
    },
    {
     "code": "6.13",
     "q": "How is the rate of transpiration calculated?",
     "idea": "Rate calculations for transpiration",
     "content": "Demonstrate an understanding of rate calculations for transpiration. Maths skills: 1a, 1c, 2b, 2c, 4a, 4b, 4c, 4d."
    }
   ],
   "skills": [
    "Carry out rate calculations for chemical reactions (1a and 1c).",
    "Use simple compound measures such as rate (1a, 1c).",
    "Plot, draw and interpret appropriate graphs (4a, 4b, 4c and 4d).",
    "Construct and interpret frequency tables and diagrams, bar charts and histograms (2c).",
    "Understand the principles of sampling as applied to scientific data (2d).",
    "Use a scatter diagram to identify a correlation between two variables (2g).",
    "Understand and use simple compound measures such as the rate of a reaction (1a and 1c).",
    "Understand and use inverse proportion – the inverse square law and light intensity in the context of factors affecting photosynthesis.",
    "Use percentiles and calculate percentage gain and loss of mass (1c).",
    "Calculate arithmetic means (2b).",
    "Carry out rate calculations (1a and 1c)."
   ]
  },
  {
   "id": "B7",
   "component": "2B",
   "option": null,
   "name": "Biology Topic 7 – Animal coordination, control and homeostasis",
   "caseStudies": [],
   "ideas": [
    {
     "code": "7.1",
     "q": "Where are hormones produced and how do they get to their target organs?",
     "idea": "Endocrine glands and hormones",
     "content": "Describe where hormones are produced and how they are transported from endocrine glands to their target organs, including the pituitary gland, thyroid gland, pancreas, adrenal glands, ovaries and testes."
    },
    {
     "code": "7.2",
     "q": "What does adrenalin do to prepare the body for fight or flight?",
     "idea": "Adrenalin and the fight-or-flight response",
     "content": "(HT only) Explain that adrenalin is produced by the adrenal glands to prepare the body for fight or flight, including: a increased heart rate; b increased blood pressure; c increased blood flow to the muscles; d raised blood sugar levels by stimulating the liver to change glycogen into glucose. Maths skills: 2c, 4a, 4c."
    },
    {
     "code": "7.3",
     "q": "How does thyroxine control metabolic rate by negative feedback?",
     "idea": "Thyroxine and negative feedback",
     "content": "(HT only) Explain how thyroxine controls metabolic rate as an example of negative feedback, including: a low levels of thyroxine stimulates production of TRH in hypothalamus; b this causes release of TSH from the pituitary gland; c TSH acts on the thyroid to produce thyroxine; d when thyroxine levels are normal thyroxine inhibits the release of TRH and the production of TSH. Maths skills: 2c, 4a, 4c."
    },
    {
     "code": "7.4",
     "q": "What are the stages of the menstrual cycle and what roles do oestrogen and progesterone play?",
     "idea": "The menstrual cycle",
     "content": "Describe the stages of the menstrual cycle, including the roles of the hormones oestrogen and progesterone, in the control of the menstrual cycle. Maths skills: 4a."
    },
    {
     "code": "7.5",
     "q": "How do oestrogen, progesterone, FSH and LH interact to control the menstrual cycle?",
     "idea": "Hormone interactions in the menstrual cycle",
     "content": "(HT only) Explain the interactions of oestrogen, progesterone, FSH and LH in the control of the menstrual cycle, including the repair and maintenance of the uterus wall, ovulation and menstruation. Maths skills: 4a, 4c."
    },
    {
     "code": "7.6",
     "q": "How does hormonal contraception prevent pregnancy?",
     "idea": "Hormonal contraception",
     "content": "Explain how hormonal contraception influences the menstrual cycle and prevents pregnancy."
    },
    {
     "code": "7.7",
     "q": "How effective are hormonal and barrier methods of contraception?",
     "idea": "Evaluating contraception methods",
     "content": "Evaluate hormonal and barrier methods of contraception. Maths skills: 2c, 2d, 4a."
    },
    {
     "code": "7.8",
     "q": "How are hormones used in Assisted Reproductive Technology such as IVF and clomifene therapy?",
     "idea": "Hormones in fertility treatment",
     "content": "(HT only) Explain the use of hormones in Assisted Reproductive Technology (ART) including IVF and clomifene therapy."
    },
    {
     "code": "7.9",
     "q": "Why is it important to maintain a constant internal environment?",
     "idea": "Homeostasis",
     "content": "Explain the importance of maintaining a constant internal environment in response to internal and external change."
    },
    {
     "code": "7.13",
     "q": "How does insulin control blood glucose concentration?",
     "idea": "Insulin and blood glucose",
     "content": "Explain how the hormone insulin controls blood glucose concentration."
    },
    {
     "code": "7.14",
     "q": "How does glucagon regulate blood glucose concentration?",
     "idea": "Glucagon and blood glucose",
     "content": "(HT only) Explain how blood glucose concentration is regulated by glucagon."
    },
    {
     "code": "7.15",
     "q": "What causes type 1 diabetes and how is it controlled?",
     "idea": "Type 1 diabetes",
     "content": "Explain the cause of type 1 diabetes and how it is controlled."
    },
    {
     "code": "7.16",
     "q": "What causes type 2 diabetes and how is it controlled?",
     "idea": "Type 2 diabetes",
     "content": "Explain the cause of type 2 diabetes and how it is controlled."
    },
    {
     "code": "7.17",
     "q": "How is body mass linked to the risk of type 2 diabetes?",
     "idea": "Body mass and type 2 diabetes",
     "content": "Evaluate the correlation between body mass and type 2 diabetes including waist:hip calculations and BMI, using the BMI equation: BMI = mass (kg) / height (m)². Maths skills: 1a, 1c, 2c, 2e, 3a."
    }
   ],
   "skills": [
    "Use simple compound measures such as rate (1a, 1c).",
    "Plot, draw and interpret appropriate graphs (4a, 4b, 4c and 4d).",
    "Translate information between numerical and graphical forms (4a).",
    "Construct and interpret frequency tables and diagrams, bar charts and histograms (2c).",
    "Understand and use percentiles (1c).",
    "Extract and interpret data from graphs, charts and tables (1c)."
   ]
  },
  {
   "id": "B8",
   "component": "2B",
   "option": null,
   "name": "Biology Topic 8 – Exchange and transport in animals",
   "caseStudies": [
    "Core Practical: Investigate the rate of respiration in living organisms"
   ],
   "ideas": [
    {
     "code": "8.1",
     "q": "Why do organisms need to transport substances into and out of the body?",
     "idea": "The need for transport",
     "content": "Describe the need to transport substances into and out of a range of organisms, including oxygen, carbon dioxide, water, dissolved food molecules, mineral ions and urea."
    },
    {
     "code": "8.2",
     "q": "Why do multicellular organisms need exchange surfaces and transport systems?",
     "idea": "Exchange surfaces and surface area to volume ratio",
     "content": "Explain the need for exchange surfaces and a transport system in multicellular organisms including the calculation of surface area : volume ratio. Maths skills: 1a, 1c, 5c."
    },
    {
     "code": "8.3",
     "q": "How are alveoli adapted for gas exchange?",
     "idea": "Alveoli and gas exchange",
     "content": "Explain how alveoli are adapted for gas exchange by diffusion between air in the lungs and blood in capillaries."
    },
    {
     "code": "8.6",
     "q": "How are red blood cells, white blood cells, plasma and platelets structured for their functions?",
     "idea": "Components of blood",
     "content": "Explain how the structure of the blood is related to its function: a red blood cells (erythrocytes); b white blood cells (phagocytes and lymphocytes); c plasma; d platelets. Maths skills: 1b, 2h."
    },
    {
     "code": "8.7",
     "q": "How is the structure of blood vessels related to their function?",
     "idea": "Blood vessels",
     "content": "Explain how the structure of the blood vessels is related to their function. Maths skills: 1a."
    },
    {
     "code": "8.8",
     "q": "How is the structure of the heart and circulatory system related to its function?",
     "idea": "The heart and circulatory system",
     "content": "Explain how the structure of the heart and circulatory system is related to its function, including the role of the major blood vessels, the valves and the relative thickness of chamber walls."
    },
    {
     "code": "8.9",
     "q": "What is cellular respiration?",
     "idea": "Cellular respiration",
     "content": "Describe cellular respiration as an exothermic reaction which occurs continuously in living cells to release energy for metabolic processes, including aerobic and anaerobic respiration."
    },
    {
     "code": "8.10",
     "q": "How does aerobic respiration compare with anaerobic respiration?",
     "idea": "Aerobic vs anaerobic respiration",
     "content": "Compare the process of aerobic respiration with the process of anaerobic respiration."
    },
    {
     "code": "8.11",
     "q": "How do you investigate the rate of respiration in living organisms?",
     "idea": "Core Practical: Investigate the rate of respiration in living organisms",
     "content": "Core Practical: Investigate the rate of respiration in living organisms. Maths skills: 1a, 2a, 2c, 2f, 4a, 4c."
    },
    {
     "code": "8.12",
     "q": "How are heart rate, stroke volume and cardiac output calculated?",
     "idea": "Cardiac output calculations",
     "content": "Calculate heart rate, stroke volume and cardiac output, using the equation cardiac output = stroke volume × heart rate. Maths skills: 1a, 2a, 2c, 3a, 4a, 4c."
    }
   ],
   "skills": [
    "Demonstrate an understanding of number, size and scale and the quantitative relationship between units (2a and 2h).",
    "Calculate with numbers written in standard form (1b).",
    "Calculate surface area : volume ratios (1c).",
    "Plot, draw and interpret appropriate graphs (4a, 4b, 4c and 4d).",
    "Translate information between numerical and graphical forms (4a).",
    "Construct and interpret frequency tables and diagrams, bar charts and histograms (2c).",
    "Extract and interpret information from graphs, charts and tables (2c and 4a).",
    "Use percentiles and calculate percentage gain and loss of mass (1c)."
   ]
  },
  {
   "id": "B9",
   "component": "2B",
   "option": null,
   "name": "Biology Topic 9 – Ecosystems and material cycles",
   "caseStudies": [
    "Core Practical: Investigate the relationship between organisms and their environment using field-work techniques, including quadrats and belt transects"
   ],
   "ideas": [
    {
     "code": "9.1",
     "q": "What are the different levels of organisation from organism to ecosystem?",
     "idea": "Levels of ecological organisation",
     "content": "Describe the different levels of organisation from individual organisms, populations, communities, to the whole ecosystem."
    },
    {
     "code": "9.2",
     "q": "How do abiotic and biotic factors affect communities?",
     "idea": "Abiotic and biotic factors",
     "content": "Explain how communities can be affected by abiotic and biotic factors, including: a temperature, light, water, pollutants; b competition, predation. Maths skills: 4a, 4c."
    },
    {
     "code": "9.3",
     "q": "Why is interdependence important in a community?",
     "idea": "Interdependence",
     "content": "Describe the importance of interdependence in a community."
    },
    {
     "code": "9.4",
     "q": "How do parasitism and mutualism show that some organisms depend on others?",
     "idea": "Parasitism and mutualism",
     "content": "Describe how the survival of some organisms is dependent on other species, including parasitism and mutualism."
    },
    {
     "code": "9.5",
     "q": "How do you investigate organisms and their environment using quadrats and belt transects?",
     "idea": "Core Practical: Investigate the relationship between organisms and their environment",
     "content": "Core Practical: Investigate the relationship between organisms and their environment using field-work techniques, including quadrats and belt transects. Maths skills: 1c, 1d, 2b, 2c, 2d, 2f, 2g, 4a, 4c."
    },
    {
     "code": "9.6",
     "q": "How is the number of organisms in an area determined from field-work data?",
     "idea": "Estimating population size from field-work",
     "content": "Explain how to determine the number of organisms in a given area using raw data from field-work techniques, including quadrats and belt transects. Maths skills: 1c, 1d, 2b, 2c, 2d, 2g, 4a, 4c."
    },
    {
     "code": "9.9",
     "q": "How do fish farming, non-indigenous species and eutrophication affect biodiversity?",
     "idea": "Human impacts on ecosystems",
     "content": "Explain the positive and negative human interactions within ecosystems and their impacts on biodiversity, including: a fish farming; b introduction of non-indigenous species; c eutrophication. Maths skills: 2c, 2g, 4a, 4c."
    },
    {
     "code": "9.10",
     "q": "Why is it important to maintain local and global biodiversity?",
     "idea": "Maintaining biodiversity",
     "content": "Explain the benefits of maintaining local and global biodiversity, including the conservation of animal species and the impact of reforestation."
    },
    {
     "code": "9.12",
     "q": "How do materials cycle through the abiotic and biotic parts of an ecosystem?",
     "idea": "Material cycling in ecosystems",
     "content": "Describe how different materials cycle through the abiotic and biotic components of an ecosystem."
    },
    {
     "code": "9.13",
     "q": "How does the carbon cycle work and what role do decomposers play?",
     "idea": "The carbon cycle",
     "content": "Explain the importance of the carbon cycle, including the processes involved and the role of microorganisms as decomposers."
    },
    {
     "code": "9.14",
     "q": "How does the water cycle work and how can potable water be produced in dry areas?",
     "idea": "The water cycle and potable water",
     "content": "Explain the importance of the water cycle, including the processes involved and the production of potable water in areas of drought including desalination."
    },
    {
     "code": "9.15",
     "q": "How do fertilisers, crop rotation and nitrogen-cycle bacteria make nitrates available to plants?",
     "idea": "The nitrogen cycle",
     "content": "Explain how nitrates are made available for plant uptake, including the use of fertilisers, crop rotation and the role of bacteria in the nitrogen cycle."
    }
   ],
   "skills": [
    "Calculate surface area : volume ratios (1c).",
    "Plot, draw and interpret appropriate graphs (4a, 4b, 4c and 4d).",
    "Understand and use percentiles and calculate percentage gain and loss of mass (1c).",
    "Translate information between numerical and graphical forms (4a).",
    "Construct and interpret frequency tables and diagrams, bar charts and histograms (2c).",
    "Understand the principles of sampling as applied to scientific data (2d).",
    "Use a scatter diagram to identify a correlation between two variables (2g).",
    "Calculate the percentage of mass (1c).",
    "Calculate arithmetic means (2b).",
    "Extract and interpret information from charts, graphs and tables (2c, 4a)."
   ]
  },
  {
   "id": "C1",
   "component": "1C",
   "option": null,
   "name": "Chemistry Topic 1 – Key concepts in chemistry",
   "caseStudies": [],
   "ideas": [
    {
     "code": "0.1",
     "q": "How do you recall the formulae of common elements, compounds and ions?",
     "idea": "Formulae of elements, compounds and ions",
     "content": "Recall the formulae of elements, simple compounds and ions."
    },
    {
     "code": "0.2",
     "q": "How do you write a word equation for a reaction?",
     "idea": "Word equations",
     "content": "Write word equations (Formulae, equations and hazards: content common to Paper 3 and Paper 4)."
    },
    {
     "code": "0.3",
     "q": "How do you write a balanced chemical equation with state symbols?",
     "idea": "Balanced symbol equations and state symbols",
     "content": "Write balanced chemical equations, including the use of the state symbols (s), (l), (g) and (aq). Maths skills: 1c."
    },
    {
     "code": "0.4",
     "q": "How do you write a balanced ionic equation?",
     "idea": "Balanced ionic equations",
     "content": "(HT only) Write balanced ionic equations. Maths skills: 1c."
    },
    {
     "code": "0.5",
     "q": "What do hazard symbols on containers tell you?",
     "idea": "Hazard symbols",
     "content": "Describe the use of hazard symbols on containers: a) to indicate the dangers associated with the contents; b) to inform people about safe-working precautions with these substances in the laboratory."
    },
    {
     "code": "0.6",
     "q": "How do you evaluate the risks of a practical procedure and suggest precautions?",
     "idea": "Evaluating practical risks",
     "content": "Evaluate the risks in a practical procedure and suggest suitable precautions for a range of practicals including those mentioned in the specification."
    },
    {
     "code": "1.1",
     "q": "How has the model of the atom changed since Dalton's model, because of subatomic particles?",
     "idea": "The changing atomic model",
     "content": "Describe how the Dalton model of an atom has changed over time because of the discovery of subatomic particles."
    },
    {
     "code": "1.2",
     "q": "What is the structure of an atom?",
     "idea": "Structure of the atom",
     "content": "Describe the structure of an atom as a nucleus containing protons and neutrons, surrounded by electrons in shells."
    },
    {
     "code": "1.3",
     "q": "What are the relative charge and mass of a proton, neutron and electron?",
     "idea": "Relative charges and masses of subatomic particles",
     "content": "Recall the relative charge and relative mass of: a) a proton; b) a neutron; c) an electron."
    },
    {
     "code": "1.4",
     "q": "Why do atoms have equal numbers of protons and electrons?",
     "idea": "Equal protons and electrons",
     "content": "Explain why atoms contain equal numbers of protons and electrons."
    },
    {
     "code": "1.5",
     "q": "How does the size of the nucleus compare with the size of the atom?",
     "idea": "Size of the nucleus",
     "content": "Describe the nucleus of an atom as very small compared to the overall size of the atom. Maths skills: 1d."
    },
    {
     "code": "1.6",
     "q": "Where is most of an atom's mass located?",
     "idea": "Mass concentrated in the nucleus",
     "content": "Recall that most of the mass of an atom is concentrated in the nucleus."
    },
    {
     "code": "1.7",
     "q": "What does 'mass number' mean?",
     "idea": "Mass number",
     "content": "Recall the meaning of the term mass number of an atom."
    },
    {
     "code": "1.8",
     "q": "Why does the number of protons define which element an atom is?",
     "idea": "Atomic number defines the element",
     "content": "Describe atoms of a given element as having the same number of protons in the nucleus and that this number is unique to that element."
    },
    {
     "code": "1.9",
     "q": "What are isotopes?",
     "idea": "Isotopes",
     "content": "Describe isotopes as different atoms of the same element containing the same number of protons but different numbers of neutrons in their nuclei."
    },
    {
     "code": "1.10",
     "q": "How do you calculate the numbers of protons, neutrons and electrons in an atom from its atomic and mass numbers?",
     "idea": "Calculating subatomic particle numbers",
     "content": "Calculate the numbers of protons, neutrons and electrons in atoms given the atomic number and mass number. Maths skills: 3b."
    },
    {
     "code": "1.11",
     "q": "Why are the relative atomic masses of some elements not whole numbers?",
     "idea": "Isotopes and non-whole-number relative atomic mass",
     "content": "Explain how the existence of isotopes results in relative atomic masses of some elements not being whole numbers. Maths skills: 1a, 1c."
    },
    {
     "code": "1.12",
     "q": "How do you calculate an element's relative atomic mass from its isotopes' masses and abundances?",
     "idea": "Calculating relative atomic mass from isotope abundances",
     "content": "(HT only) Calculate the relative atomic mass of an element from the relative masses and abundances of its isotopes. Maths skills: 1a, 1c, 3a, 3c."
    },
    {
     "code": "1.13",
     "q": "How did Mendeleev arrange the elements known at the time into a periodic table?",
     "idea": "Mendeleev's periodic table",
     "content": "Describe how Dmitri Mendeleev arranged the elements, known at that time, in a periodic table by using properties of these elements and their compounds."
    },
    {
     "code": "1.14",
     "q": "How did Mendeleev use his table to predict undiscovered elements?",
     "idea": "Mendeleev's predictions",
     "content": "Describe how Dmitri Mendeleev used his table to predict the existence and properties of some elements not then discovered."
    },
    {
     "code": "1.15",
     "q": "Why did Mendeleev's ordering by atomic mass not always hold, given isotope abundances?",
     "idea": "Limits of Mendeleev's ordering",
     "content": "Explain that Dmitri Mendeleev thought he had arranged elements in order of increasing relative atomic mass but this was not always true because of the relative abundance of isotopes of some pairs of elements in the periodic table."
    },
    {
     "code": "1.16",
     "q": "What does atomic number mean in terms of the periodic table and protons?",
     "idea": "Atomic number and position in the table",
     "content": "Explain the meaning of atomic number of an element in terms of position in the periodic table and number of protons in the nucleus."
    },
    {
     "code": "1.17",
     "q": "How are elements arranged into periods and groups in the periodic table?",
     "idea": "Periods and groups",
     "content": "Describe that in the periodic table: a) elements are arranged in order of increasing atomic number, in rows called periods; b) elements with similar properties are placed in the same vertical columns called groups."
    },
    {
     "code": "1.18",
     "q": "How does position in the periodic table show whether an element is a metal or non-metal?",
     "idea": "Metals and non-metals in the periodic table",
     "content": "Identify elements as metals or non-metals according to their position in the periodic table, explaining this division in terms of the atomic structures of the elements."
    },
    {
     "code": "1.19",
     "q": "How do you work out and represent the electronic configuration of one of the first 20 elements?",
     "idea": "Electronic configurations of the first 20 elements",
     "content": "Predict the electronic configurations of the first 20 elements in the periodic table as diagrams and in the form, for example 2.8.1. Maths skills: 4a, 5b."
    },
    {
     "code": "1.20",
     "q": "How does an element's electronic configuration relate to its position in the periodic table?",
     "idea": "Electronic configuration and periodic table position",
     "content": "Explain how the electronic configuration of an element is related to its position in the periodic table. Maths skills: 4a."
    },
    {
     "code": "1.21",
     "q": "How are ionic bonds formed by electron transfer, and how are they shown in dot and cross diagrams?",
     "idea": "Formation of ionic bonds",
     "content": "Explain how ionic bonds are formed by the transfer of electrons between atoms to produce cations and anions, including the use of dot and cross diagrams. Maths skills: 5b."
    },
    {
     "code": "1.22",
     "q": "What is an ion?",
     "idea": "Definition of an ion",
     "content": "Recall that an ion is an atom or group of atoms with a positive or negative charge."
    },
    {
     "code": "1.23",
     "q": "How do you calculate the numbers of protons, neutrons and electrons in a simple ion?",
     "idea": "Subatomic particles in ions",
     "content": "Calculate the numbers of protons, neutrons and electrons in simple ions given the atomic number and mass number. Maths skills: 3b."
    },
    {
     "code": "1.24",
     "q": "How do atoms in Groups 1, 2, 6 and 7 form ions in ionic compounds?",
     "idea": "Formation of ions in Groups 1, 2, 6 and 7",
     "content": "Explain the formation of ions in ionic compounds from their atoms, limited to compounds of elements in groups 1, 2, 6 and 7. Maths skills: 1c, 5b."
    },
    {
     "code": "1.25",
     "q": "What do the endings -ide and -ate tell you about a compound's name?",
     "idea": "Naming compounds: -ide and -ate",
     "content": "Explain the use of the endings –ide and –ate in the names of compounds."
    },
    {
     "code": "1.26",
     "q": "How do you work out the formula of an ionic compound from the formulae of its ions?",
     "idea": "Formulae of ionic compounds",
     "content": "Deduce the formulae of ionic compounds (including oxides, hydroxides, halides, nitrates, carbonates and sulfates) given the formulae of the constituent ions. Maths skills: 1c."
    },
    {
     "code": "1.27",
     "q": "What is the structure of an ionic compound, and what holds it together?",
     "idea": "Ionic lattice structure",
     "content": "Explain the structure of an ionic compound as a lattice structure: a) consisting of a regular arrangement of ions; b) held together by strong electrostatic forces (ionic bonds) between oppositely-charged ions. Maths skills: 5b."
    },
    {
     "code": "1.28",
     "q": "How is a covalent bond formed?",
     "idea": "Formation of covalent bonds",
     "content": "Explain how a covalent bond is formed when a pair of electrons is shared between two atoms."
    },
    {
     "code": "1.29",
     "q": "What does covalent bonding produce?",
     "idea": "Covalent bonding forms molecules",
     "content": "Recall that covalent bonding results in the formation of molecules."
    },
    {
     "code": "1.30",
     "q": "What is the typical size of atoms and small molecules?",
     "idea": "Size of atoms and small molecules",
     "content": "Recall the typical size (order of magnitude) of atoms and small molecules. Maths skills: 1d."
    },
    {
     "code": "1.31",
     "q": "How do you draw dot and cross diagrams for hydrogen, hydrogen chloride, water, methane, oxygen and carbon dioxide?",
     "idea": "Dot and cross diagrams for simple molecules",
     "content": "Explain the formation of simple molecular, covalent substances, using dot and cross diagrams, including: a) hydrogen; b) hydrogen chloride; c) water; d) methane; e) oxygen; f) carbon dioxide. Maths skills: 5b."
    },
    {
     "code": "1.32",
     "q": "How do the four types of structure and bonding explain differences in melting point, solubility and conductivity?",
     "idea": "Classifying substances by structure and bonding",
     "content": "Explain why elements and compounds can be classified as: a) ionic; b) simple molecular (covalent); c) giant covalent; d) metallic, and how the structure and bonding of these types of substances results in different physical properties, including relative melting point and boiling point, relative solubility in water and ability to conduct electricity (as solids and in solution)."
    },
    {
     "code": "1.33",
     "q": "Why do ionic compounds have high melting points, and when do they conduct electricity?",
     "idea": "Properties of ionic compounds",
     "content": "Explain the properties of ionic compounds limited to: a) high melting points and boiling points, in terms of forces between ions; b) whether or not they conduct electricity as solids, when molten and in aqueous solution. Maths skills: 4a."
    },
    {
     "code": "1.34",
     "q": "Why do simple covalent compounds have low melting points and not conduct electricity?",
     "idea": "Properties of simple molecular compounds",
     "content": "Explain the properties of typical covalent, simple molecular compounds limited to: a) low melting points and boiling points, in terms of forces between molecules (intermolecular forces); b) poor conduction of electricity. Maths skills: 4a."
    },
    {
     "code": "1.35",
     "q": "What are graphite and diamond, in terms of carbon and bonding type?",
     "idea": "Graphite and diamond as giant covalent carbon",
     "content": "Recall that graphite and diamond are different forms of carbon and that they are examples of giant covalent substances."
    },
    {
     "code": "1.36",
     "q": "What are the structures of graphite and diamond?",
     "idea": "Structures of graphite and diamond",
     "content": "Describe the structures of graphite and diamond. Maths skills: 5b."
    },
    {
     "code": "1.37",
     "q": "Why is graphite used as electrodes and a lubricant, while diamond is used in cutting tools?",
     "idea": "Uses of graphite and diamond",
     "content": "Explain, in terms of structure and bonding, why graphite is used to make electrodes and as a lubricant, whereas diamond is used in cutting tools. Maths skills: 5b."
    },
    {
     "code": "1.38",
     "q": "How do the structures of fullerenes (including C60) and graphene explain their properties?",
     "idea": "Fullerenes and graphene",
     "content": "Explain the properties of fullerenes including C60 and graphene in terms of their structures and bonding. Maths skills: 5b."
    },
    {
     "code": "1.39",
     "q": "What is a simple polymer, using poly(ethene) as the example?",
     "idea": "Simple polymers",
     "content": "Describe, using poly(ethene) as the example, that simple polymers consist of large molecules containing chains of carbon atoms. Maths skills: 5b."
    },
    {
     "code": "1.40",
     "q": "Why are metals malleable and able to conduct electricity?",
     "idea": "Properties of metals",
     "content": "Explain the properties of metals, including malleability and the ability to conduct electricity. Maths skills: 5b."
    },
    {
     "code": "1.41",
     "q": "What are the limitations of dot and cross diagrams, ball and stick models, and two- and three-dimensional representations?",
     "idea": "Limitations of chemical models",
     "content": "Describe the limitations of particular representations and models, to include dot and cross, ball and stick models and two- and three-dimensional representations. Maths skills: 5b."
    },
    {
     "code": "1.42",
     "q": "How do the general physical properties of metals and non-metals differ?",
     "idea": "General physical properties of metals and non-metals",
     "content": "Describe most metals as shiny solids which have high melting points, high density and are good conductors of electricity whereas most non-metals have low boiling points and are poor conductors of electricity."
    },
    {
     "code": "1.43",
     "q": "How do you calculate relative formula mass and the percentage by mass of an element in a compound?",
     "idea": "Relative formula mass and percentage mass",
     "content": "Calculate: a) relative formula mass given relative atomic masses; b) percentage by mass of an element in a compound given relative atomic masses. Maths skills: 1a, 1c."
    },
    {
     "code": "1.44",
     "q": "How do you calculate an empirical formula from reacting masses or percentage composition?",
     "idea": "Empirical formulae from reacting masses",
     "content": "Calculate the formulae of simple compounds from reacting masses or percentage composition and understand that these are empirical formulae. Maths skills: 1a, 1c, 2a."
    },
    {
     "code": "1.45",
     "q": "How do you convert between empirical and molecular formula?",
     "idea": "Empirical and molecular formulae",
     "content": "Deduce: a) the empirical formula of a compound from the formula of its molecule; b) the molecular formula of a compound from its empirical formula and its relative molecular mass. Maths skills: 1c."
    },
    {
     "code": "1.46",
     "q": "How can you determine the empirical formula of a simple compound such as magnesium oxide experimentally?",
     "idea": "Determining empirical formula experimentally",
     "content": "Describe an experiment to determine the empirical formula of a simple compound such as magnesium oxide. Maths skills: 1a, 1c, 2a."
    },
    {
     "code": "1.47",
     "q": "How does the law of conservation of mass apply to closed and open reaction systems?",
     "idea": "Conservation of mass",
     "content": "Explain the law of conservation of mass applied to: a) a closed system including a precipitation reaction in a closed flask; b) a non-enclosed system including a reaction in an open flask that takes in or gives out a gas. Maths skills: 1a."
    },
    {
     "code": "1.48",
     "q": "How do you calculate the mass of a reactant or product from a balanced equation?",
     "idea": "Reacting mass calculations",
     "content": "Calculate masses of reactants and products from balanced equations, given the mass of one substance. Maths skills: 1a, 1c, 2a."
    },
    {
     "code": "1.49",
     "q": "How do you calculate the concentration of a solution in g dm-3?",
     "idea": "Concentration of solutions",
     "content": "Calculate the concentration of solutions in g dm–3. Maths skills: 1a, 1c, 2a, 3b, 3c."
    },
    {
     "code": "1.50",
     "q": "What is a mole of a substance, in terms of the Avogadro constant and mass?",
     "idea": "The mole and the Avogadro constant",
     "content": "(HT only) Recall that one mole of particles of a substance is defined as: a) the Avogadro constant number of particles (6.02 × 10^23 atoms, molecules, formulae or ions) of that substance; b) a mass of 'relative particle mass' g. Maths skills: 1b."
    },
    {
     "code": "1.51",
     "q": "How do you convert between mass, moles and number of particles of a substance?",
     "idea": "Mole, mass and particle-number calculations",
     "content": "(HT only) Calculate the number of: a) moles of particles of a substance in a given mass of that substance and vice versa; b) particles of a substance in a given number of moles of that substance and vice versa; c) particles of a substance in a given mass of that substance and vice versa. Maths skills: 1a, 1b, 1c, 3a, 3b, 3c."
    },
    {
     "code": "1.52",
     "q": "Why does the reactant that is not in excess control the mass of product formed?",
     "idea": "The limiting reactant",
     "content": "(HT only) Explain why, in a reaction, the mass of product formed is controlled by the mass of the reactant which is not in excess. Maths skills: 1c."
    },
    {
     "code": "1.53",
     "q": "How do you work out the stoichiometry of a reaction from the masses of reactants and products?",
     "idea": "Deducing stoichiometry from masses",
     "content": "(HT only) Deduce the stoichiometry of a reaction from the masses of the reactants and products. Maths skills: 1a, 1c."
    }
   ],
   "skills": [
    "Arithmetic computation, ratio when balancing equations (1a and 1c).",
    "Relate size and scale of atoms to objects in the physical world (1d).",
    "Estimate size and scale of atoms (1d).",
    "Represent three dimensional shapes in two dimensions and vice versa when looking at chemical structures (5b).",
    "Represent three dimensional shapes in two dimensions and vice versa when looking at chemical structures, e.g. allotropes of carbon (5b).",
    "Translate information between diagrammatic and numerical forms (4a).",
    "Arithmetic computation and ratio when determining empirical formulae, balancing equations (1a and 1c).",
    "Arithmetic computation, ratio, percentage and multistep calculations permeates quantitative chemistry (1a, 1c and 1d).",
    "Calculations with numbers written in standard form when using the Avogadro constant (1b).",
    "Change the subject of a mathematical equation (3b and 3c).",
    "Provide answers to an appropriate number of significant figures (2a).",
    "Convert units where appropriate particularly from mass to moles (1c)."
   ]
  },
  {
   "id": "C2",
   "component": "1C",
   "option": null,
   "name": "Chemistry Topic 2 – States of matter and mixtures",
   "caseStudies": [
    "Investigate the composition of inks using simple distillation and paper chromatography"
   ],
   "ideas": [
    {
     "code": "2.1",
     "q": "How are particles arranged, moving and energised in solids, liquids and gases?",
     "idea": "States of matter",
     "content": "Describe the arrangement, movement and the relative energy of particles in each of the three states of matter: solid, liquid and gas. Maths skills: 5b."
    },
    {
     "code": "2.2",
     "q": "What are the names for changes between solid, liquid and gas, and how do they differ from chemical reactions?",
     "idea": "Interconversions between states",
     "content": "Recall the names used for the interconversions between the three states of matter, recognising that these are physical changes contrasted with chemical reactions that result in chemical changes."
    },
    {
     "code": "2.3",
     "q": "What happens to the arrangement, movement and energy of particles when a substance changes state?",
     "idea": "Particle changes during interconversions",
     "content": "Explain the changes in arrangement, movement and energy of particles during these interconversions. Maths skills: 5b."
    },
    {
     "code": "2.4",
     "q": "How can you predict whether a substance will be solid, liquid or gas under given conditions?",
     "idea": "Predicting physical state from data",
     "content": "Predict the physical state of a substance under specified conditions, given suitable data. Maths skills: 1d, 4a."
    },
    {
     "code": "2.5",
     "q": "What does 'pure' mean in chemistry, and how is a pure substance different from a mixture?",
     "idea": "Pure substances and mixtures",
     "content": "Explain the difference between the use of 'pure' in chemistry compared with its everyday use and the differences in chemistry between a pure substance and a mixture."
    },
    {
     "code": "2.6",
     "q": "How can melting point data show whether a substance is pure or a mixture?",
     "idea": "Melting point data and purity",
     "content": "Interpret melting point data to distinguish between pure substances, which have a sharp melting point, and mixtures, which melt over a range of temperatures. Maths skills: 1a."
    },
    {
     "code": "2.7",
     "q": "Which separation technique suits which type of mixture?",
     "idea": "Separation techniques",
     "content": "Explain the types of mixtures that can be separated by using the following experimental techniques: a) simple distillation; b) fractional distillation; c) filtration; d) crystallisation; e) paper chromatography."
    },
    {
     "code": "2.8",
     "q": "How do you choose the right technique to separate a given mixture?",
     "idea": "Choosing a separation technique",
     "content": "Describe an appropriate experimental technique to separate a mixture, knowing the properties of the components of the mixture."
    },
    {
     "code": "2.9",
     "q": "How does paper chromatography separate a mixture of soluble substances?",
     "idea": "Paper chromatography",
     "content": "Describe paper chromatography as the separation of mixtures of soluble substances by running a solvent (mobile phase) through the mixture on the paper (the paper contains the stationary phase), which causes the substances to move at different rates over the paper."
    },
    {
     "code": "2.10",
     "q": "How do you read a chromatogram to identify substances, including using Rf values?",
     "idea": "Interpreting chromatograms and Rf values",
     "content": "Interpret a paper chromatogram: a) to distinguish between pure and impure substances; b) to identify substances by comparison with known substances; c) to identify substances by calculation and use of Rf values. Maths skills: 3a, 3c, 4a."
    },
    {
     "code": "2.11",
     "q": "How do you investigate what an ink is made of using distillation and chromatography?",
     "idea": "Core Practical: Investigate the composition of inks using simple distillation and paper chromatography",
     "content": "Core Practical: Investigate the composition of inks using simple distillation and paper chromatography. This core practical is in two parts: a simple chromatography practical to obtain a chromatogram of the dyes in ink, and using simple distillation apparatus to separate pure water from ink. It needs to cover the use of a Bunsen burner, the methods used in chromatography and distillation, and the safe handling of liquids."
    },
    {
     "code": "2.12",
     "q": "How is water made safe to drink, and why must analytical water be free of dissolved salts?",
     "idea": "Producing potable water",
     "content": "Describe how: a) waste and ground water can be made potable, including the need for sedimentation, filtration and chlorination; b) sea water can be made potable by using distillation; c) water used in analysis must not contain any dissolved salts."
    }
   ],
   "skills": [
    "Translate information between diagrammatic and numerical forms (4a).",
    "Interpret charts (4a)."
   ]
  },
  {
   "id": "C3",
   "component": "1C",
   "option": null,
   "name": "Chemistry Topic 3 – Chemical changes",
   "caseStudies": [
    "Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid",
    "Investigate the preparation of pure, dry hydrated copper sulfate crystals starting from copper oxide including the use of a water bath",
    "Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes"
   ],
   "ideas": [
    {
     "code": "3.1",
     "q": "What ions do acids and alkalis release in solution?",
     "idea": "Acids and alkalis as ion sources",
     "content": "Recall that acids in solution are sources of hydrogen ions and alkalis in solution are sources of hydroxide ions."
    },
    {
     "code": "3.2",
     "q": "What pH values count as neutral, acidic and alkaline?",
     "idea": "The pH scale",
     "content": "Recall that a neutral solution has a pH of 7 and that acidic solutions have lower pH values and alkaline solutions have higher pH values."
    },
    {
     "code": "3.3",
     "q": "How do litmus, methyl orange and phenolphthalein change with acids and alkalis?",
     "idea": "Indicators",
     "content": "Recall the effect of acids and alkalis on indicators, including litmus, methyl orange and phenolphthalein."
    },
    {
     "code": "3.4",
     "q": "How does the concentration of hydrogen or hydroxide ions relate to pH?",
     "idea": "Ion concentration and pH",
     "content": "(HT only) Recall that the higher the concentration of hydrogen ions in an acidic solution, the lower the pH; and the higher the concentration of hydroxide ions in an alkaline solution, the higher the pH. Maths skills: 1c."
    },
    {
     "code": "3.5",
     "q": "What happens to pH when hydrogen ion concentration increases tenfold?",
     "idea": "pH and the logarithmic hydrogen ion scale",
     "content": "(HT only) Recall that as hydrogen ion concentration in a solution increases by a factor of 10, the pH of the solution decreases by 1. Maths skills: 1c."
    },
    {
     "code": "3.6",
     "q": "How does the pH change as you add calcium hydroxide or calcium oxide to hydrochloric acid?",
     "idea": "Core Practical: Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid",
     "content": "Core Practical: Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid. Maths skills: 4a, 4c. This practical focuses on recording the pH at intervals as calcium hydroxide or calcium oxide reacts with dilute hydrochloric acid: an initial mass of the solid is added to a fixed volume of the acid, and the pH is recorded each time more of the solid is added, using a pH meter or universal indicator paper with a glass rod."
    },
    {
     "code": "3.7",
     "q": "What do 'dilute' and 'concentrated' mean for a solution?",
     "idea": "Dilute and concentrated",
     "content": "(HT only) Explain the terms dilute and concentrated, with respect to the amount of substance in solution."
    },
    {
     "code": "3.8",
     "q": "What makes an acid weak or strong in terms of ionisation?",
     "idea": "Weak and strong acids",
     "content": "(HT only) Explain the terms weak and strong acids, with respect to the degree of dissociation into ions."
    },
    {
     "code": "3.9",
     "q": "What is a base?",
     "idea": "Definition of a base",
     "content": "Recall that a base is any substance that reacts with an acid to form a salt and water only."
    },
    {
     "code": "3.10",
     "q": "How do alkalis relate to bases?",
     "idea": "Alkalis as soluble bases",
     "content": "Recall that alkalis are soluble bases."
    },
    {
     "code": "3.11",
     "q": "What do acids produce when they react with metals, metal oxides, metal hydroxides and metal carbonates?",
     "idea": "Reactions of acids with metals and metal compounds",
     "content": "Explain the general reactions of aqueous solutions of acids with: a) metals; b) metal oxides; c) metal hydroxides; d) metal carbonates, to produce salts."
    },
    {
     "code": "3.12",
     "q": "How do you test for hydrogen and carbon dioxide gas?",
     "idea": "Tests for hydrogen and carbon dioxide",
     "content": "Describe the chemical test for: a) hydrogen; b) carbon dioxide (using limewater)."
    },
    {
     "code": "3.13",
     "q": "What is a neutralisation reaction?",
     "idea": "Neutralisation",
     "content": "Describe a neutralisation reaction as a reaction between an acid and a base."
    },
    {
     "code": "3.14",
     "q": "What happens to H+ and OH– ions during acid-alkali neutralisation?",
     "idea": "Acid-alkali neutralisation at the ion level",
     "content": "Explain an acid-alkali neutralisation as a reaction in which hydrogen ions (H+) from the acid react with hydroxide ions (OH–) from the alkali to form water."
    },
    {
     "code": "3.15",
     "q": "Why is excess insoluble reactant used and then removed when preparing a soluble salt?",
     "idea": "Preparing a soluble salt from an insoluble reactant",
     "content": "Explain why, if soluble salts are prepared from an acid and an insoluble reactant: a) excess of the reactant is added; b) the excess reactant is removed; c) the solution remaining is only salt and water."
    },
    {
     "code": "3.16",
     "q": "Why is titration needed when preparing a soluble salt from two soluble reactants?",
     "idea": "Preparing a soluble salt from a soluble reactant",
     "content": "Explain why, if soluble salts are prepared from an acid and a soluble reactant: a) titration must be used; b) the acid and the soluble reactant are then mixed in the correct proportions; c) the solution remaining, after reaction, is only salt and water."
    },
    {
     "code": "3.17",
     "q": "How do you prepare pure, dry hydrated copper sulfate crystals from copper oxide?",
     "idea": "Core Practical: Investigate the preparation of pure, dry hydrated copper sulfate crystals starting from copper oxide including the use of a water bath",
     "content": "Core Practical: Investigate the preparation of pure, dry hydrated copper sulfate crystals starting from copper oxide including the use of a water bath. Excess copper oxide is added to warm dilute sulfuric acid (warmed using a water bath) to produce a blue solution of copper(II) sulfate; the solution is then filtered, evaporated using an evaporating basin and Bunsen burner, and finally dried using a watch glass to allow all the water to evaporate."
    },
    {
     "code": "3.18",
     "q": "How is a titration carried out to prepare a pure, dry salt?",
     "idea": "Acid-alkali titration",
     "content": "Describe how to carry out an acid-alkali titration, using a burette, pipette and a suitable indicator, to prepare a pure, dry salt."
    },
    {
     "code": "3.19",
     "q": "Which common salts are soluble or insoluble in water?",
     "idea": "Solubility rules",
     "content": "Recall the general rules which describe the solubility of common types of substances in water: a) all common sodium, potassium and ammonium salts are soluble; b) all nitrates are soluble; c) common chlorides are soluble except those of silver and lead; d) common sulfates are soluble except those of lead, barium and calcium; e) common carbonates and hydroxides are insoluble except those of sodium, potassium and ammonium."
    },
    {
     "code": "3.20",
     "q": "How can solubility rules predict whether mixing two solutions forms a precipitate?",
     "idea": "Predicting precipitates",
     "content": "Predict, using solubility rules, whether or not a precipitate will be formed when named solutions are mixed together, naming the precipitate if any."
    },
    {
     "code": "3.21",
     "q": "How is a pure, dry sample of an insoluble salt prepared?",
     "idea": "Preparing an insoluble salt",
     "content": "Describe the method used to prepare a pure, dry sample of an insoluble salt."
    },
    {
     "code": "3.22",
     "q": "What is an electrolyte?",
     "idea": "Electrolytes",
     "content": "Recall that electrolytes are ionic compounds in the molten state or dissolved in water."
    },
    {
     "code": "3.23",
     "q": "What is electrolysis?",
     "idea": "Electrolysis",
     "content": "Describe electrolysis as a process in which electrical energy, from a direct current supply, decomposes electrolytes."
    },
    {
     "code": "3.24",
     "q": "Which way do cations and anions move during electrolysis?",
     "idea": "Ion movement in electrolysis",
     "content": "Explain the movement of ions during electrolysis, in which: a) positively charged cations migrate to the negatively charged cathode; b) negatively charged anions migrate to the positively charged anode."
    },
    {
     "code": "3.25",
     "q": "What products form at the electrodes when copper chloride, sodium chloride, sodium sulfate solutions, acidified water and molten lead bromide are electrolysed?",
     "idea": "Products of electrolysis with inert electrodes",
     "content": "Explain the formation of the products in the electrolysis, using inert electrodes, of some electrolytes, including: a) copper chloride solution; b) sodium chloride solution; c) sodium sulfate solution; d) water acidified with sulfuric acid; e) molten lead bromide (demonstration)."
    },
    {
     "code": "3.26",
     "q": "How do you predict the products of electrolysing other molten binary ionic compounds?",
     "idea": "Predicting electrolysis products of molten binary compounds",
     "content": "Predict the products of electrolysis of other binary, ionic compounds in the molten state."
    },
    {
     "code": "3.27",
     "q": "How do you write half equations for the anode and cathode reactions in electrolysis?",
     "idea": "Half equations for electrolysis",
     "content": "(HT only) Write half equations for reactions occurring at the anode and cathode in electrolysis. Maths skills: 1c."
    },
    {
     "code": "3.28",
     "q": "How are oxidation and reduction defined in terms of electrons?",
     "idea": "Oxidation and reduction as electron transfer",
     "content": "(HT only) Explain oxidation and reduction in terms of loss or gain of electrons."
    },
    {
     "code": "3.29",
     "q": "Where do oxidation and reduction happen during electrolysis?",
     "idea": "Oxidation and reduction at the electrodes",
     "content": "(HT only) Recall that reduction occurs at the cathode and that oxidation occurs at the anode in electrolysis reactions."
    },
    {
     "code": "3.30",
     "q": "How does electrolysis with copper electrodes purify copper?",
     "idea": "Purifying copper by electrolysis",
     "content": "Explain the formation of the products in the electrolysis of copper sulfate solution, using copper electrodes, and how this electrolysis can be used to purify copper."
    },
    {
     "code": "3.31",
     "q": "How does the electrolysis of copper sulfate solution differ between inert electrodes and copper electrodes?",
     "idea": "Core Practical: Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes",
     "content": "Core Practical: Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes. Maths skills: 1a, 4a, 4b, 4c, 4d. This involves setting up an electrolysis to investigate the effect of changing the current on the mass of the copper electrodes, and a second part covering the products formed during electrolysis of copper sulfate solution using inert (graphite) electrodes; quantitative analysis is expected when using copper electrodes."
    }
   ]
  },
  {
   "id": "C4",
   "component": "1C",
   "option": null,
   "name": "Chemistry Topic 4 – Extracting metals and equilibria",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.1",
     "q": "How can reactions with water, acids and salt solutions show which metals are more reactive?",
     "idea": "Relative reactivity of metals",
     "content": "Deduce the relative reactivity of some metals, by their reactions with water, acids and salt solutions."
    },
    {
     "code": "4.2",
     "q": "Why are displacement reactions redox reactions?",
     "idea": "Displacement reactions as redox",
     "content": "(HT only) Explain displacement reactions as redox reactions, in terms of gain or loss of electrons."
    },
    {
     "code": "4.3",
     "q": "What is the order of the reactivity series and what does it show about metal atoms forming cations?",
     "idea": "The reactivity series",
     "content": "Explain the reactivity series of metals (potassium, sodium, calcium, magnesium, aluminium, (carbon), zinc, iron, (hydrogen), copper, silver, gold) in terms of the reactivity of the metals with water and dilute acids, and that these reactions show the relative tendency of metal atoms to form cations."
    },
    {
     "code": "4.4",
     "q": "Where do reactive and unreactive metals occur in the Earth's crust?",
     "idea": "Metal ores and native metals",
     "content": "Recall that: a) most metals are extracted from ores found in the Earth's crust; b) unreactive metals are found in the Earth's crust as the uncombined elements."
    },
    {
     "code": "4.5",
     "q": "How are oxidation and reduction defined in terms of oxygen?",
     "idea": "Oxidation and reduction in terms of oxygen",
     "content": "Explain oxidation as the gain of oxygen and reduction as the loss of oxygen."
    },
    {
     "code": "4.6",
     "q": "What chemical process is metal extraction from ore?",
     "idea": "Metal extraction as reduction",
     "content": "Recall that the extraction of metals involves reduction of ores."
    },
    {
     "code": "4.7",
     "q": "Why are some metals extracted by heating with carbon and others by electrolysis?",
     "idea": "Choosing a metal extraction method",
     "content": "Explain why the method used to extract a metal from its ore is related to its position in the reactivity series and the cost of the extraction process, illustrated by: a) heating with carbon (including iron); b) electrolysis (including aluminium) (knowledge of the blast furnace is not required)."
    },
    {
     "code": "4.8",
     "q": "What are bacterial extraction and phytoextraction, and what are their advantages?",
     "idea": "Biological metal extraction",
     "content": "(HT only) Evaluate alternative biological methods of metal extraction (bacterial and phytoextraction)."
    },
    {
     "code": "4.9",
     "q": "Why do less reactive metals resist oxidation better?",
     "idea": "Resistance to oxidation and reactivity",
     "content": "Explain how a metal's relative resistance to oxidation is related to its position in the reactivity series."
    },
    {
     "code": "4.10",
     "q": "What are the advantages of recycling metals?",
     "idea": "Recycling metals",
     "content": "Evaluate the advantages of recycling metals, including economic implications and how recycling can preserve both the environment and the supply of valuable raw materials."
    },
    {
     "code": "4.11",
     "q": "What stages does a life-cycle assessment of a product consider?",
     "idea": "Life-cycle assessment",
     "content": "Describe that a life-cycle assessment for a product involves consideration of the effect on the environment of obtaining the raw materials, manufacturing the product, using the product and disposing of the product when it is no longer useful."
    },
    {
     "code": "4.12",
     "q": "How do you evaluate life-cycle assessment data for a product?",
     "idea": "Evaluating life-cycle assessment data",
     "content": "Evaluate data from a life cycle assessment of a product."
    },
    {
     "code": "4.13",
     "q": "What does the ⇌ symbol mean and how can the direction of a reversible reaction be changed?",
     "idea": "Reversible reactions",
     "content": "Recall that chemical reactions are reversible, the use of the symbol ⇌ in equations, and that the direction of some reversible reactions can be altered by changing the reaction conditions."
    },
    {
     "code": "4.14",
     "q": "What is a dynamic equilibrium?",
     "idea": "Dynamic equilibrium",
     "content": "Explain what is meant by dynamic equilibrium."
    },
    {
     "code": "4.15",
     "q": "How is ammonia formed and why is the reaction a dynamic equilibrium?",
     "idea": "Formation of ammonia",
     "content": "Describe the formation of ammonia as a reversible reaction between nitrogen (extracted from the air) and hydrogen (obtained from natural gas) and that it can reach a dynamic equilibrium."
    },
    {
     "code": "4.16",
     "q": "What temperature, pressure and catalyst are used in the Haber process?",
     "idea": "Conditions for the Haber process",
     "content": "Recall the conditions for the Haber process as: a) temperature 450 °C; b) pressure 200 atmospheres; c) iron catalyst."
    },
    {
     "code": "4.17",
     "q": "How do changes in temperature, pressure and concentration shift a dynamic equilibrium?",
     "idea": "Shifting a dynamic equilibrium",
     "content": "(HT only) Predict how the position of a dynamic equilibrium is affected by changes in: a) temperature; b) pressure; c) concentration."
    }
   ]
  },
  {
   "id": "C6",
   "component": "2C",
   "option": null,
   "name": "Chemistry Topic 6 – Groups in the periodic table",
   "caseStudies": [],
   "ideas": [
    {
     "code": "6.1",
     "q": "Why are certain elements classed as alkali metals, halogens or noble gases?",
     "idea": "Groups 1, 7 and 0",
     "content": "Explain why some elements can be classified as alkali metals (group 1), halogens (group 7) or noble gases (group 0), based on their position in the periodic table."
    },
    {
     "code": "6.2",
     "q": "What are the physical properties of alkali metals?",
     "idea": "Physical properties of alkali metals",
     "content": "Recall that alkali metals: a) are soft; b) have relatively low melting points."
    },
    {
     "code": "6.3",
     "q": "How do lithium, sodium and potassium react with water?",
     "idea": "Group 1 metals reacting with water",
     "content": "Describe the reactions of lithium, sodium and potassium with water."
    },
    {
     "code": "6.4",
     "q": "How does reactivity with water change going down Group 1, and how can this predict other alkali metals?",
     "idea": "Reactivity trend in Group 1",
     "content": "Describe the pattern in reactivity of the alkali metals, lithium, sodium and potassium, with water; and use this pattern to predict the reactivity of other alkali metals."
    },
    {
     "code": "6.5",
     "q": "Why does reactivity increase down Group 1 in terms of electron configuration?",
     "idea": "Explaining Group 1 reactivity by electron configuration",
     "content": "Explain this pattern in reactivity in terms of electronic configurations."
    },
    {
     "code": "6.6",
     "q": "What colour and physical state are chlorine, bromine and iodine at room temperature?",
     "idea": "Appearance of chlorine, bromine and iodine",
     "content": "Recall the colours and physical states of chlorine, bromine and iodine at room temperature."
    },
    {
     "code": "6.7",
     "q": "How do the physical properties of the halogens change down the group?",
     "idea": "Physical property trends in Group 7",
     "content": "Describe the pattern in the physical properties of the halogens, chlorine, bromine and iodine, and use this pattern to predict the physical properties of other halogens. Maths skills: 1d, 2c."
    },
    {
     "code": "6.8",
     "q": "How do you test for chlorine gas?",
     "idea": "Test for chlorine",
     "content": "Describe the chemical test for chlorine."
    },
    {
     "code": "6.9",
     "q": "What do halogens form when they react with metals, and how can this predict other halogens' reactions?",
     "idea": "Halogens reacting with metals",
     "content": "Describe the reactions of the halogens, chlorine, bromine and iodine, with metals to form metal halides, and use this pattern to predict the reactions of other halogens."
    },
    {
     "code": "6.10",
     "q": "What do halogens form with hydrogen, and what happens when these dissolve in water?",
     "idea": "Hydrogen halides",
     "content": "Recall that the halogens, chlorine, bromine and iodine, form hydrogen halides which dissolve in water to form acidic solutions, and use this pattern to predict the reactions of other halogens."
    },
    {
     "code": "6.11",
     "q": "How do displacement reactions with halide ions show the relative reactivity of the halogens?",
     "idea": "Halogen displacement reactions",
     "content": "Describe the relative reactivity of the halogens chlorine, bromine and iodine, as shown by their displacement reactions with halide ions in aqueous solution, and use this pattern to predict the reactions of astatine."
    },
    {
     "code": "6.12",
     "q": "Why are halogen displacement reactions redox reactions, and which species are oxidised or reduced?",
     "idea": "Halogen displacement as redox",
     "content": "(HT only) Explain why these displacement reactions are redox reactions in terms of gain and loss of electrons, identifying which of the substances are oxidised and which are reduced."
    },
    {
     "code": "6.13",
     "q": "Why does reactivity decrease down Group 7 in terms of electron configuration?",
     "idea": "Explaining Group 7 reactivity by electron configuration",
     "content": "Explain the relative reactivity of the halogens in terms of electronic configurations."
    },
    {
     "code": "6.14",
     "q": "Why are the noble gases so unreactive?",
     "idea": "Inertness of noble gases",
     "content": "Explain why the noble gases are chemically inert, compared with the other elements, in terms of their electronic configurations."
    },
    {
     "code": "6.15",
     "q": "How do the properties of noble gases explain their uses?",
     "idea": "Uses of noble gases",
     "content": "Explain how the uses of noble gases depend on their inertness, low density and/or non-flammability."
    },
    {
     "code": "6.16",
     "q": "How do the physical properties of the noble gases change down the group?",
     "idea": "Physical property trends in Group 0",
     "content": "Describe the pattern in the physical properties of some noble gases and use this pattern to predict the physical properties of other noble gases. Maths skills: 1d, 2c."
    }
   ]
  },
  {
   "id": "C7",
   "component": "2C",
   "option": null,
   "name": "Chemistry Topic 7 – Rates of reaction and energy changes",
   "caseStudies": [
    "Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions"
   ],
   "ideas": [
    {
     "code": "7.1",
     "q": "How do you measure the effect of changing conditions on reaction rate using gas production and a colour change?",
     "idea": "Core Practical: Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions",
     "content": "Core Practical: Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions by: a) measuring the production of a gas (in the reaction between hydrochloric acid and marble chips); b) observing a colour change (in the reaction between sodium thiosulfate and hydrochloric acid). Maths skills: 1a, 1c, 4a, 4b, 4c, 4d, 4e. In the first part, marble chips are added to hydrochloric acid and the volume of gas collected is measured over time, leading to graphical analysis of rate and an appreciation of how rate changes with concentration, temperature or surface area. In the second part, sodium thiosulfate reacts with dilute hydrochloric acid to produce a precipitate, observed using a 'disappearing cross' at different temperatures, with a graph drawn of time taken against temperature."
    },
    {
     "code": "7.2",
     "q": "What practical methods can be used to determine the rate of a reaction?",
     "idea": "Methods for measuring reaction rate",
     "content": "Suggest practical methods for determining the rate of a given reaction. Maths skills: 4b, 4c, 4d, 4e."
    },
    {
     "code": "7.3",
     "q": "Why does increasing collision frequency or energy increase reaction rate?",
     "idea": "Collision theory",
     "content": "Explain how reactions occur when particles collide and that rates of reaction are increased when the frequency and/or energy of collisions is increased. Maths skills: 1c."
    },
    {
     "code": "7.4",
     "q": "How do temperature, concentration, surface area and pressure affect reaction rate, in terms of collisions?",
     "idea": "Factors affecting reaction rate",
     "content": "Explain the effects on rates of reaction of changes in temperature, concentration, surface area to volume ratio of a solid and pressure (on reactions involving gases) in terms of frequency and/or energy of collisions between particles. Maths skills: 1c, 1d, 5c."
    },
    {
     "code": "7.5",
     "q": "How do you read a graph of mass, volume or concentration against time to find the rate?",
     "idea": "Interpreting rate graphs",
     "content": "Interpret graphs of mass, volume or concentration of reactant or product against time. Maths skills: 1c, 4a, 4d, 4e."
    },
    {
     "code": "7.6",
     "q": "What is a catalyst?",
     "idea": "Catalysts",
     "content": "Describe a catalyst as a substance that speeds up the rate of a reaction without altering the products of the reaction, being itself unchanged chemically and in mass at the end of the reaction."
    },
    {
     "code": "7.7",
     "q": "How does a catalyst increase reaction rate in terms of activation energy?",
     "idea": "How catalysts work",
     "content": "Explain how the addition of a catalyst increases the rate of a reaction in terms of activation energy."
    },
    {
     "code": "7.8",
     "q": "What are enzymes and how are they used in making alcoholic drinks?",
     "idea": "Enzymes as biological catalysts",
     "content": "Recall that enzymes are biological catalysts and that enzymes are used in the production of alcoholic drinks."
    },
    {
     "code": "7.9",
     "q": "Which types of reaction are accompanied by heat energy changes, and how can these be measured?",
     "idea": "Heat energy changes in reactions",
     "content": "Recall that changes in heat energy accompany the following changes: a) salts dissolving in water; b) neutralisation reactions; c) displacement reactions; d) precipitation reactions, and that, when these reactions take place in solution, temperature changes can be measured to reflect the heat changes."
    },
    {
     "code": "7.10",
     "q": "What is an exothermic reaction?",
     "idea": "Exothermic reactions",
     "content": "Describe an exothermic change or reaction as one in which heat energy is given out."
    },
    {
     "code": "7.11",
     "q": "What is an endothermic reaction?",
     "idea": "Endothermic reactions",
     "content": "Describe an endothermic change or reaction as one in which heat energy is taken in."
    },
    {
     "code": "7.12",
     "q": "Why is breaking bonds endothermic and making bonds exothermic?",
     "idea": "Bond breaking and bond making",
     "content": "Recall that the breaking of bonds is endothermic and the making of bonds is exothermic."
    },
    {
     "code": "7.13",
     "q": "How do you tell whether a reaction is overall exothermic or endothermic from its bond energies?",
     "idea": "Overall energy change of a reaction",
     "content": "Recall that the overall heat energy change for a reaction is: a) exothermic if more heat energy is released in forming bonds in the products than is required in breaking bonds in the reactants; b) endothermic if less heat energy is released in forming bonds in the products than is required in breaking bonds in the reactants."
    },
    {
     "code": "7.14",
     "q": "How do you calculate the energy change of a reaction from bond energies?",
     "idea": "Calculating energy change from bond energies",
     "content": "(HT only) Calculate the energy change in a reaction given the energies of bonds (in kJ mol–1). Maths skills: 1a, 1c."
    },
    {
     "code": "7.15",
     "q": "What is activation energy?",
     "idea": "Activation energy",
     "content": "Explain the term activation energy."
    },
    {
     "code": "7.16",
     "q": "How do you draw and label a reaction profile for an endothermic or exothermic reaction?",
     "idea": "Reaction profiles",
     "content": "Draw and label reaction profiles for endothermic and exothermic reactions, identifying activation energy. Maths skills: 4a."
    }
   ],
   "skills": [
    "Arithmetic computation, ratio when measuring rates of reaction (1a and 1c).",
    "Drawing and interpreting appropriate graphs from data to determine rate of reaction (4b and 4c).",
    "Determining gradients of graphs as a measure of rate of change to determine rate (4d and 4e).",
    "Proportionality when comparing factors affecting rate of reaction (1c).",
    "Arithmetic computation when calculating energy changes (1a).",
    "Interpretation of charts and graphs when dealing with reaction profiles (4a)."
   ]
  },
  {
   "id": "C8",
   "component": "2C",
   "option": null,
   "name": "Chemistry Topic 8 – Fuels and Earth science",
   "caseStudies": [],
   "ideas": [
    {
     "code": "8.1",
     "q": "What is a hydrocarbon?",
     "idea": "Hydrocarbons",
     "content": "Recall that hydrocarbons are compounds that contain carbon and hydrogen only."
    },
    {
     "code": "8.2",
     "q": "What is crude oil and why is it important?",
     "idea": "Crude oil",
     "content": "Describe crude oil as: a) a complex mixture of hydrocarbons; b) containing molecules in which carbon atoms are in chains or rings (names, formulae and structures of specific ring molecules not required); c) an important source of useful substances (fuels and feedstock for the petrochemical industry); d) a finite resource."
    },
    {
     "code": "8.3",
     "q": "How is crude oil separated into fractions by fractional distillation?",
     "idea": "Fractional distillation of crude oil",
     "content": "Describe and explain the separation of crude oil into simpler, more useful mixtures by the process of fractional distillation."
    },
    {
     "code": "8.4",
     "q": "What are the main fractions of crude oil and what is each one used for?",
     "idea": "Fractions of crude oil and their uses",
     "content": "Recall the names and uses of the following fractions: a) gases, used in domestic heating and cooking; b) petrol, used as fuel for cars; c) kerosene, used as fuel for aircraft; d) diesel oil, used as fuel for some cars and trains; e) fuel oil, used as fuel for large ships and in some power stations; f) bitumen, used to surface roads and roofs."
    },
    {
     "code": "8.5",
     "q": "How do the fractions of crude oil differ in molecule size, boiling point, ease of ignition and viscosity?",
     "idea": "How the fractions differ",
     "content": "Explain how hydrocarbons in different fractions differ from each other in: a) the number of carbon and hydrogen atoms their molecules contain; b) boiling points; c) ease of ignition; d) viscosity, and are mostly members of the alkane homologous series. Maths skills: 4a, 4c."
    },
    {
     "code": "8.6",
     "q": "What makes a set of compounds a homologous series?",
     "idea": "Homologous series",
     "content": "Explain an homologous series as a series of compounds which: a) have the same general formula; b) differ by CH2 in molecular formulae from neighbouring compounds; c) show a gradual variation in physical properties, as exemplified by their boiling points; d) have similar chemical properties. Maths skills: 1c, 1d, 4a."
    },
    {
     "code": "8.7",
     "q": "What are the products of complete combustion of a hydrocarbon fuel?",
     "idea": "Complete combustion",
     "content": "Describe the complete combustion of hydrocarbon fuels as a reaction in which: a) carbon dioxide and water are produced; b) energy is given out."
    },
    {
     "code": "8.8",
     "q": "Why does incomplete combustion of hydrocarbons produce carbon and carbon monoxide?",
     "idea": "Incomplete combustion",
     "content": "Explain why the incomplete combustion of hydrocarbons can produce carbon and carbon monoxide."
    },
    {
     "code": "8.9",
     "q": "Why is carbon monoxide toxic?",
     "idea": "Toxicity of carbon monoxide",
     "content": "Explain how carbon monoxide behaves as a toxic gas."
    },
    {
     "code": "8.10",
     "q": "What problems does incomplete combustion cause in fuel-burning appliances?",
     "idea": "Problems from incomplete combustion in appliances",
     "content": "Describe the problems caused by incomplete combustion producing carbon monoxide and soot in appliances that use carbon compounds as fuels."
    },
    {
     "code": "8.11",
     "q": "Why does burning some hydrocarbon fuels produce sulfur dioxide?",
     "idea": "Sulfur dioxide from fuel impurities",
     "content": "Explain how impurities in some hydrocarbon fuels result in the production of sulfur dioxide."
    },
    {
     "code": "8.12",
     "q": "What problems does acid rain cause?",
     "idea": "Acid rain",
     "content": "Explain some problems associated with acid rain caused when sulfur dioxide dissolves in rain water."
    },
    {
     "code": "8.13",
     "q": "Why do engines produce oxides of nitrogen, and why are they pollutants?",
     "idea": "Oxides of nitrogen from engines",
     "content": "Explain why, when fuels are burned in engines, oxygen and nitrogen can react together at high temperatures to produce oxides of nitrogen, which are pollutants."
    },
    {
     "code": "8.14",
     "q": "What are the advantages and disadvantages of using hydrogen instead of petrol as a car fuel?",
     "idea": "Hydrogen as a fuel",
     "content": "Evaluate the advantages and disadvantages of using hydrogen, rather than petrol, as a fuel in cars."
    },
    {
     "code": "8.15",
     "q": "Which fuels are non-renewable fossil fuels, and where do they come from?",
     "idea": "Fossil fuels",
     "content": "Recall that petrol, kerosene and diesel oil are non-renewable fossil fuels obtained from crude oil and methane is a non-renewable fossil fuel found in natural gas."
    },
    {
     "code": "8.16",
     "q": "What is cracking, and what kinds of molecules does it produce?",
     "idea": "Cracking",
     "content": "Explain why cracking involves the breaking down of larger, saturated hydrocarbon molecules (alkanes) into smaller, more useful ones, some of which are unsaturated (alkenes). Maths skills: 1c."
    },
    {
     "code": "8.17",
     "q": "Why is cracking necessary?",
     "idea": "Why cracking is needed",
     "content": "Explain why cracking is necessary. Maths skills: 2c."
    },
    {
     "code": "8.18",
     "q": "How did volcanic activity form the Earth's early atmosphere?",
     "idea": "Origin of the early atmosphere",
     "content": "Recall that the gases produced by volcanic activity formed the Earth's early atmosphere."
    },
    {
     "code": "8.19",
     "q": "What gases did the Earth's early atmosphere probably contain?",
     "idea": "Composition of the early atmosphere",
     "content": "Describe that the Earth's early atmosphere was thought to contain: a) little or no oxygen; b) a large amount of carbon dioxide; c) water vapour; d) small amounts of other gases, and interpret evidence relating to this. Maths skills: 2c, 3a, 4a."
    },
    {
     "code": "8.20",
     "q": "How did the oceans form from water vapour?",
     "idea": "Formation of the oceans",
     "content": "Explain how condensation of water vapour formed oceans."
    },
    {
     "code": "8.21",
     "q": "How did the formation of the oceans reduce atmospheric carbon dioxide?",
     "idea": "Carbon dioxide dissolving in the oceans",
     "content": "Explain how the amount of carbon dioxide in the atmosphere was decreased when carbon dioxide dissolved as the oceans formed."
    },
    {
     "code": "8.22",
     "q": "How did early plants change the atmosphere's oxygen and carbon dioxide levels?",
     "idea": "Photosynthesis and the rise of oxygen",
     "content": "Explain how the growth of primitive plants used carbon dioxide and released oxygen by photosynthesis and consequently the amount of oxygen in the atmosphere gradually increased."
    },
    {
     "code": "8.23",
     "q": "How do you test for oxygen gas?",
     "idea": "Test for oxygen",
     "content": "Describe the chemical test for oxygen."
    },
    {
     "code": "8.24",
     "q": "How do greenhouse gases keep the Earth warm?",
     "idea": "The greenhouse effect",
     "content": "Describe how various gases in the atmosphere, including carbon dioxide, methane and water vapour, absorb heat radiated from the Earth, subsequently releasing energy which keeps the Earth warm: this is known as the greenhouse effect."
    },
    {
     "code": "8.25",
     "q": "What evidence links human activity to climate change, and what uncertainties affect it?",
     "idea": "Evidence for human-caused climate change",
     "content": "Evaluate the evidence for human activity causing climate change, considering: a) the correlation between the change in atmospheric carbon dioxide concentration, the consumption of fossil fuels and temperature change; b) the uncertainties caused by the location where these measurements are taken and historical accuracy. Maths skills: 2c, 2h, 4a."
    },
    {
     "code": "8.26",
     "q": "What is in today's atmosphere, and how might the climate effects of human activity be mitigated?",
     "idea": "Today's atmosphere and mitigating climate change",
     "content": "Describe: a) the composition of today's atmosphere; b) the potential effects on the climate of increased levels of carbon dioxide and methane generated by human activity, including burning fossil fuels and livestock farming; c) that these effects may be mitigated, considering scale, risk and environmental implications."
    }
   ],
   "skills": [
    "Extract and interpret information from charts, graphs and tables (2c and 4a).",
    "Use orders of magnitude to evaluate the significance of data (2h)."
   ]
  },
  {
   "id": "P1",
   "component": "1P",
   "option": null,
   "name": "Physics Topic 1 – Key concepts of physics",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1.1",
     "q": "What SI units are used for physical quantities in physics?",
     "idea": "SI units",
     "content": "Recall and use the SI unit for physical quantities, as listed in Appendix 5."
    },
    {
     "code": "1.2",
     "q": "What do prefixes like kilo, milli and micro mean when attached to a unit?",
     "idea": "Multiples and sub-multiples of units",
     "content": "Recall and use multiples and sub-multiples of units, including giga (G), mega (M), kilo (k), centi (c), milli (m), micro (μ) and nano (n). Maths skills: 3c."
    },
    {
     "code": "1.3",
     "q": "How do you convert between different units, such as hours and seconds?",
     "idea": "Converting units",
     "content": "Be able to convert between different units, including hours to seconds. Maths skills: 1c."
    },
    {
     "code": "1.4",
     "q": "When should you use significant figures and standard form in an answer?",
     "idea": "Significant figures and standard form",
     "content": "Use significant figures and standard form where appropriate. Maths skills: 1b."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c)."
   ]
  },
  {
   "id": "P2",
   "component": "1P",
   "option": null,
   "name": "Physics Topic 2 – Motion and forces",
   "caseStudies": [
    "Investigate the relationship between force, mass and acceleration by varying the masses added to trolleys."
   ],
   "ideas": [
    {
     "code": "2.1",
     "q": "What is a scalar quantity?",
     "idea": "Scalar quantities",
     "content": "Explain that a scalar quantity has magnitude (size) but no specific direction."
    },
    {
     "code": "2.2",
     "q": "What is a vector quantity?",
     "idea": "Vector quantities",
     "content": "Explain that a vector quantity has both magnitude (size) and a specific direction. Maths skills: 5b."
    },
    {
     "code": "2.3",
     "q": "What is the difference between a vector and a scalar quantity?",
     "idea": "Vector vs scalar",
     "content": "Explain the difference between vector and scalar quantities. Maths skills: 5b."
    },
    {
     "code": "2.4",
     "q": "Which quantities in physics are vectors and which are scalars?",
     "idea": "Classifying vector and scalar quantities",
     "content": "Recall vector and scalar quantities, including: a displacement/distance; b velocity/speed; c acceleration; d force; e weight/mass; f momentum; g energy."
    },
    {
     "code": "2.5",
     "q": "How does velocity differ from speed?",
     "idea": "Velocity as speed in a direction",
     "content": "Recall that velocity is speed in a stated direction. Maths skills: 5b."
    },
    {
     "code": "2.6",
     "q": "How do you calculate average speed and distance travelled?",
     "idea": "Speed and distance equations",
     "content": "Recall and use the equations: a (average) speed (metre per second, m/s) = distance (metre, m) ÷ time (s); b distance travelled (metre, m) = average speed (metre per second, m/s) × time (s). Maths skills: 1a, 1c, 1d, 2a, 3a, 3c, 3d."
    },
    {
     "code": "2.7",
     "q": "How do you find speed from a distance/time graph?",
     "idea": "Distance/time graphs",
     "content": "Analyse distance/time graphs including determination of speed from the gradient. Maths skills: 2a, 4a, 4b, 4d, 4e."
    },
    {
     "code": "2.8",
     "q": "How do you calculate acceleration from a change in velocity?",
     "idea": "Acceleration equation",
     "content": "Recall and use the equation: acceleration (metre per second squared, m/s²) = change in velocity (metre per second, m/s) ÷ time taken (second, s); a = (v − u) / t. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "2.9",
     "q": "How do you find the distance travelled when you know the initial and final velocity and the acceleration?",
     "idea": "The v² − u² = 2ax equation",
     "content": "Use the equation: (final velocity)² ((metre/second)², (m/s)²) – (initial velocity)² ((metre/second)², (m/s)²) = 2 × acceleration (metre per second squared, m/s²) × distance (metre, m); v² − u² = 2 × a × x (given on the formulae sheet). Maths skills: 1a, 1c, 1d, 2a, 3a, 3c, 3d."
    },
    {
     "code": "2.10",
     "q": "What can you work out from a velocity/time graph?",
     "idea": "Velocity/time graphs",
     "content": "Analyse velocity/time graphs to: a compare acceleration from gradients qualitatively; b calculate the acceleration from the gradient (for uniform acceleration only); c determine the distance travelled using the area between the graph line and the time axis (for uniform acceleration only). Maths skills: 1a, 1c, 1d, 2a, 4a, 4b, 4c, 4d, 4e, 4f, 5c."
    },
    {
     "code": "2.11",
     "q": "How can you measure the speed of a moving object in the lab?",
     "idea": "Measuring speed",
     "content": "Describe a range of laboratory methods for determining the speeds of objects such as the use of light gates. Maths skills: 1a, 1d, 2a, 2b, 2c, 2f, 2h, 3a, 3c, 3d, 4a, 4c."
    },
    {
     "code": "2.12",
     "q": "What are typical everyday speeds?",
     "idea": "Typical speeds",
     "content": "Recall some typical speeds encountered in everyday experience for wind and sound, and for walking, running, cycling and other transportation systems."
    },
    {
     "code": "2.13",
     "q": "What is the acceleration due to free fall, and how big are everyday accelerations?",
     "idea": "Acceleration in free fall",
     "content": "Recall that the acceleration, g, in free fall is 10 m/s² and be able to estimate the magnitudes of everyday accelerations. Maths skills: 1d, 2h."
    },
    {
     "code": "2.14",
     "q": "What does Newton's first law say about a body with zero resultant force?",
     "idea": "Newton's first law",
     "content": "Recall Newton's first law and use it in the following situations: a where the resultant force on a body is zero, i.e. the body is moving at a constant velocity or is at rest; b where the resultant force is not zero, i.e. the speed and/or direction of the body change(s). Maths skills: 1a, 1d, 2a, 3a, 3c, 3d."
    },
    {
     "code": "2.15",
     "q": "How do you calculate the force needed to accelerate a mass?",
     "idea": "Newton's second law",
     "content": "Recall and use Newton's second law as: force (newton, N) = mass (kilogram, kg) × acceleration (metre per second squared, m/s²); F = m × a. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "2.16",
     "q": "How is the weight of an object calculated from its mass?",
     "idea": "Weight equation",
     "content": "Define weight, recall and use the equation: weight (newton, N) = mass (kilogram, kg) × gravitational field strength (newton per kilogram, N/kg); W = m × g. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "2.17",
     "q": "How is the weight of an object measured?",
     "idea": "Measuring weight",
     "content": "Describe how weight is measured."
    },
    {
     "code": "2.18",
     "q": "How does an object's weight relate to the gravitational field strength it is in?",
     "idea": "Weight and gravitational field strength",
     "content": "Describe the relationship between the weight of a body and the gravitational field strength. Maths skills: 1c."
    },
    {
     "code": "2.19",
     "q": "How do force, mass and acceleration relate to each other for a trolley?",
     "idea": "Core Practical: Investigating force, mass and acceleration",
     "content": "Core Practical: Investigate the relationship between force, mass and acceleration by varying the masses added to trolleys. Different masses must be used to investigate the effect of varying masses on the acceleration of a trolley down a ramp. Appropriate methods must be used to measure the force and time taken for the trolley to travel down the ramp, and data analysis must include calculating the acceleration. Maths skills: 1a, 1c, 1d, 2a, 2b, 2f, 3a, 3b, 3c, 3d, 4a, 4b, 4c, 4d."
    },
    {
     "code": "2.20",
     "q": "Why does an object moving at constant speed in a circle still have a changing velocity?",
     "idea": "Circular motion and changing velocity",
     "content": "(HT only) Explain that an object moving in a circular orbit at constant speed has a changing velocity (qualitative only). Maths skills: 5b."
    },
    {
     "code": "2.21",
     "q": "What force keeps an object moving in a circle?",
     "idea": "Centripetal force",
     "content": "(HT only) Explain that for motion in a circle there must be a resultant force known as a centripetal force that acts towards the centre of the circle. Maths skills: 5b."
    },
    {
     "code": "2.22",
     "q": "What is inertial mass?",
     "idea": "Inertial mass",
     "content": "(HT only) Explain that inertial mass is a measure of how difficult it is to change the velocity of an object (including from rest) and know that it is defined as the ratio of force over acceleration. Maths skills: 1c."
    },
    {
     "code": "2.23",
     "q": "How does Newton's third law apply to collisions and equilibrium?",
     "idea": "Newton's third law",
     "content": "(HT only) Recall and apply Newton's third law both to equilibrium situations and to collision interactions and relate it to the conservation of momentum in collisions. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "2.24",
     "q": "How is the momentum of a moving object calculated?",
     "idea": "Momentum equation",
     "content": "(HT only) Define momentum, recall and use the equation: momentum (kilogram metre per second, kg m/s) = mass (kilogram, kg) × velocity (metre per second, m/s); p = m × v. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "2.25",
     "q": "What are some examples of momentum in collisions?",
     "idea": "Momentum in collisions",
     "content": "(HT only) Describe examples of momentum in collisions. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "2.26",
     "q": "How is force related to the rate of change of momentum?",
     "idea": "Force as rate of change of momentum",
     "content": "(HT only) Use Newton's second law as: force (newton, N) = change in momentum (kilogram metre per second, kg m/s) ÷ time (second, s); F = (mv − mu) / t (given on the formulae sheet). Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "2.27",
     "q": "How can human reaction times be measured?",
     "idea": "Measuring reaction times",
     "content": "Explain methods of measuring human reaction times and recall typical results. Maths skills: 2a, 2b, 2c, 2g."
    },
    {
     "code": "2.28",
     "q": "What makes up the total stopping distance of a vehicle?",
     "idea": "Stopping distance",
     "content": "Recall that the stopping distance of a vehicle is made up of the sum of the thinking distance and the braking distance. Maths skills: 1a."
    },
    {
     "code": "2.29",
     "q": "What factors affect a vehicle's stopping distance?",
     "idea": "Factors affecting stopping distance",
     "content": "Explain that the stopping distance of a vehicle is affected by a range of factors including: a the mass of the vehicle; b the speed of the vehicle; c the driver's reaction time; d the state of the vehicle's brakes; e the state of the road; f the amount of friction between the tyre and the road surface. Maths skills: 1c, 1d, 2b, 2c, 2h, 3b, 3c."
    },
    {
     "code": "2.30",
     "q": "What affects how quickly a driver reacts?",
     "idea": "Factors affecting reaction time",
     "content": "Describe the factors affecting a driver's reaction time including drugs and distractions. Maths skills: 1d, 2h."
    },
    {
     "code": "2.31",
     "q": "Why are large decelerations dangerous, and how can the forces involved be estimated?",
     "idea": "Dangers of large decelerations",
     "content": "(HT only) Explain the dangers caused by large decelerations and estimate the forces involved in typical situations on a public road. Maths skills: 1d, 2b, 2h, 3c."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Relate changes and differences in motion to appropriate distance-time, and velocity-time graphs, and interpret lines and slopes (4a, 4b, 4c, 4d).",
    "Interpret enclosed areas in velocity-time graphs (4a, 4b, 4c, 4d, 4f).",
    "Apply formulae relating distance, time and speed, for uniform motion, and for motion with uniform acceleration, and calculate average speed for non-uniform motion (1a, 1c, 2b, 3c)."
   ]
  },
  {
   "id": "P3",
   "component": "1P",
   "option": null,
   "name": "Physics Topic 3 – Conservation of energy",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.1",
     "q": "How is the gravitational potential energy gained by a raised object calculated?",
     "idea": "Gravitational potential energy equation",
     "content": "Recall and use the equation to calculate the change in gravitational PE when an object is raised above the ground: change in gravitational potential energy (joule, J) = mass (kilogram, kg) × gravitational field strength (newton per kilogram, N/kg) × change in vertical height (metre, m); ΔGPE = m × g × Δh. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "3.2",
     "q": "How is the kinetic energy of a moving object calculated?",
     "idea": "Kinetic energy equation",
     "content": "Recall and use the equation to calculate the amounts of energy associated with a moving object: kinetic energy (joule, J) = 0.5 × mass (kilogram, kg) × (speed)² ((metre/second)², (m/s)²); KE = ½ × m × v². Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "3.3",
     "q": "How can energy transfers in a process be represented?",
     "idea": "Energy transfer diagrams",
     "content": "Draw and interpret diagrams to represent energy transfers. Maths skills: 1c, 2c."
    },
    {
     "code": "3.4",
     "q": "What does the conservation of energy mean?",
     "idea": "Conservation of energy",
     "content": "Explain what is meant by conservation of energy."
    },
    {
     "code": "3.5",
     "q": "How is energy stored differently when a system changes, in common situations?",
     "idea": "Analysing energy changes in a system",
     "content": "Analyse the changes involved in the way energy is stored when a system changes, including: a an object projected upwards or up a slope; b a moving object hitting an obstacle; c an object being accelerated by a constant force; d a vehicle slowing down; e bringing water to a boil in an electric kettle."
    },
    {
     "code": "3.6",
     "q": "Does the total energy in a closed system change when energy is transferred within it?",
     "idea": "Energy in a closed system",
     "content": "Explain that where there are energy transfers in a closed system there is no net change to the total energy in that system."
    },
    {
     "code": "3.7",
     "q": "Why do mechanical processes become wasteful when they heat up?",
     "idea": "Wasteful mechanical processes",
     "content": "Explain that mechanical processes become wasteful when they cause a rise in temperature so dissipating energy in heating the surroundings."
    },
    {
     "code": "3.8",
     "q": "What happens to energy that is dissipated in a system change?",
     "idea": "Dissipated energy",
     "content": "Explain, using examples, how in all system changes energy is dissipated so that it is stored in less useful ways."
    },
    {
     "code": "3.9",
     "q": "How can unwanted energy transfers be reduced?",
     "idea": "Reducing unwanted energy transfers",
     "content": "Explain ways of reducing unwanted energy transfer including through lubrication, thermal insulation."
    },
    {
     "code": "3.10",
     "q": "How do the thickness and thermal conductivity of a building's walls affect how fast it cools?",
     "idea": "Walls and rate of cooling",
     "content": "Describe the effects of the thickness and thermal conductivity of the walls of a building on its rate of cooling qualitatively."
    },
    {
     "code": "3.11",
     "q": "How is the efficiency of an energy transfer calculated?",
     "idea": "Efficiency equation",
     "content": "Recall and use the equation: efficiency = useful energy transferred by the device ÷ total energy supplied to the device. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "3.12",
     "q": "How can the efficiency of an energy transfer be increased?",
     "idea": "Increasing efficiency",
     "content": "(HT only) Explain how efficiency can be increased."
    },
    {
     "code": "3.13",
     "q": "What are the main energy resources used on Earth, and how do renewable and non-renewable resources compare?",
     "idea": "National and global energy resources",
     "content": "Describe the main energy sources available for use on Earth (including fossil fuels, nuclear fuel, bio-fuel, wind, hydro-electricity, the tides and the Sun), and compare the ways in which both renewable and non-renewable sources are used. Maths skills: 2c, 2g."
    },
    {
     "code": "3.14",
     "q": "What trends are there in how energy resources are used?",
     "idea": "Trends in energy resource use",
     "content": "Explain patterns and trends in the use of energy resources. Maths skills: 2c, 2g."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Calculate relevant values of stored energy and energy transfers; convert between newton-metres and joules (1c, 3c).",
    "Make calculations of the energy changes associated with changes in a system, recalling or selecting the relevant equations for mechanical, electrical, and thermal processes; thereby express in quantitative form and on a common scale the overall redistribution of energy in the system (1a, 1c, 3c)."
   ]
  },
  {
   "id": "P4",
   "component": "1P",
   "option": null,
   "name": "Physics Topic 4 – Waves",
   "caseStudies": [
    "Investigate the suitability of equipment to measure the speed, frequency and wavelength of a wave in a solid and a fluid."
   ],
   "ideas": [
    {
     "code": "4.1",
     "q": "What do waves transfer as they travel?",
     "idea": "What waves transfer",
     "content": "Recall that waves transfer energy and information without transferring matter."
    },
    {
     "code": "4.2",
     "q": "How do we know it is the wave, not the water or air, that travels?",
     "idea": "Evidence that it is the wave that travels",
     "content": "Describe evidence that with water and sound waves it is the wave and not the water or air itself that travels."
    },
    {
     "code": "4.3",
     "q": "What are frequency and wavelength?",
     "idea": "Frequency and wavelength",
     "content": "Define and use the terms frequency and wavelength as applied to waves."
    },
    {
     "code": "4.4",
     "q": "What do amplitude, period, wave velocity and wavefront mean?",
     "idea": "Amplitude, period, wave velocity and wavefront",
     "content": "Use the terms amplitude, period, wave velocity and wavefront as applied to waves."
    },
    {
     "code": "4.5",
     "q": "What is the difference between a longitudinal and a transverse wave?",
     "idea": "Longitudinal and transverse waves",
     "content": "Describe the difference between longitudinal and transverse waves by referring to sound, electromagnetic, seismic and water waves."
    },
    {
     "code": "4.6",
     "q": "How is wave speed calculated from frequency and wavelength, or from distance and time?",
     "idea": "Wave speed equations",
     "content": "Recall and use both the equations below for all waves: wave speed (metre/second, m/s) = frequency (hertz, Hz) × wavelength (metre, m); v = f × λ. wave speed (metre/second, m/s) = distance (metre, m) ÷ time (second, s); v = x / t. Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "4.7",
     "q": "How can the velocity of sound in air, or of ripples on water, be measured?",
     "idea": "Measuring wave velocity",
     "content": "Describe how to measure the velocity of sound in air and ripples on water surfaces. Maths skills: 2g."
    },
    {
     "code": "4.10",
     "q": "What happens to a wave's direction and speed when it is refracted at a boundary?",
     "idea": "Refraction at a boundary",
     "content": "Explain how waves will be refracted at a boundary in terms of the change of direction and speed. Maths skills: 1c, 3c, 5b."
    },
    {
     "code": "4.11",
     "q": "Does how a substance absorbs, transmits, refracts or reflects a wave depend on the wave's wavelength?",
     "idea": "Absorption, transmission, refraction and reflection by wavelength",
     "content": "(HT only) Recall that different substances may absorb, transmit, refract or reflect waves in ways that vary with wavelength."
    },
    {
     "code": "4.17",
     "q": "How can you check whether equipment is suitable for measuring the speed, frequency and wavelength of a wave?",
     "idea": "Core Practical: Suitability of equipment for measuring waves",
     "content": "Core Practical: Investigate the suitability of equipment to measure the speed, frequency and wavelength of a wave in a solid and a fluid. This investigation involves looking at the characteristics of waves and using the equation v = f × λ. It is expected that students will have looked at waves in a liquid using a ripple tank, and waves in a solid using a metal rod and a method of measuring the frequency. Suitability of apparatus to take these measurements must also be considered. Maths skills: 2g."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Apply formulae relating velocity, frequency and wavelength (1c, 3c)."
   ]
  },
  {
   "id": "P5",
   "component": "1P",
   "option": null,
   "name": "Physics Topic 5 – Light and the electromagnetic spectrum",
   "caseStudies": [
    "Investigate refraction in rectangular glass blocks in terms of the interaction of electromagnetic waves with matter."
   ],
   "ideas": [
    {
     "code": "5.7",
     "q": "What kind of wave is an electromagnetic wave, and how fast do they travel in a vacuum?",
     "idea": "Electromagnetic waves are transverse",
     "content": "Recall that all electromagnetic waves are transverse, that they travel at the same speed in a vacuum."
    },
    {
     "code": "5.8",
     "q": "What do electromagnetic waves transfer from a source to an observer?",
     "idea": "Electromagnetic waves transfer energy",
     "content": "Explain, with examples, that all electromagnetic waves transfer energy from source to observer."
    },
    {
     "code": "5.9",
     "q": "How does light refract when it passes through a rectangular glass block?",
     "idea": "Core Practical: Refraction in a glass block",
     "content": "Core Practical: Investigate refraction in rectangular glass blocks in terms of the interaction of electromagnetic waves with matter. A light source with grating must be used to produce a beam of light, which must then be used to investigate the effect of refraction using a glass block. An appreciation of the interaction of the light ray with the glass block and the effect of changing medium on the light ray (moving towards and away from the normal) must be included."
    },
    {
     "code": "5.10",
     "q": "What are the main groups of the electromagnetic spectrum, in order?",
     "idea": "Groups of the electromagnetic spectrum",
     "content": "Recall the main groupings of the continuous electromagnetic spectrum including (in order) radio waves, microwaves, infrared, visible (including the colours of the visible spectrum), ultraviolet, x-rays and gamma rays."
    },
    {
     "code": "5.11",
     "q": "How does wavelength and frequency change across the electromagnetic spectrum?",
     "idea": "The spectrum as continuous",
     "content": "Describe the electromagnetic spectrum as continuous from radio waves to gamma rays and that the radiations within it can be grouped in order of decreasing wavelength and increasing frequency. Maths skills: 1a, 1c, 3c."
    },
    {
     "code": "5.12",
     "q": "Can our eyes detect all electromagnetic radiation?",
     "idea": "Limited range detected by the eye",
     "content": "Recall that our eyes can only detect a limited range of frequencies of electromagnetic radiation."
    },
    {
     "code": "5.13",
     "q": "Does how a substance absorbs, transmits, refracts or reflects an electromagnetic wave depend on wavelength?",
     "idea": "Absorption, transmission, refraction and reflection of EM waves by wavelength",
     "content": "(HT only) Recall that different substances may absorb, transmit, refract or reflect electromagnetic waves in ways that vary with wavelength."
    },
    {
     "code": "5.14",
     "q": "What happens to the velocity of an electromagnetic wave as it passes into a different substance?",
     "idea": "Velocity of EM waves in different substances",
     "content": "(HT only) Explain the effects of differences in the velocities of electromagnetic waves in different substances. Maths skills: 1a, 1c, 3c."
    },
    {
     "code": "5.20",
     "q": "How does the danger of an electromagnetic wave change with its frequency?",
     "idea": "Danger increases with frequency",
     "content": "Recall that the potential danger associated with an electromagnetic wave increases with increasing frequency."
    },
    {
     "code": "5.21",
     "q": "What harm can excessive exposure to electromagnetic radiation cause?",
     "idea": "Harmful effects of electromagnetic radiation",
     "content": "Describe the harmful effects on people of excessive exposure to electromagnetic radiation, including: a microwaves: internal heating of body cells; b infrared: skin burns; c ultraviolet: damage to surface cells and eyes, leading to skin cancer and eye conditions; d x-rays and gamma rays: mutation or damage to cells in the body."
    },
    {
     "code": "5.22",
     "q": "What are electromagnetic waves used for?",
     "idea": "Uses of electromagnetic radiation",
     "content": "Describe some uses of electromagnetic radiation: a radio waves: including broadcasting, communications and satellite transmissions; b microwaves: including cooking, communications and satellite transmissions; c infrared: including cooking, thermal imaging, short range communications, optical fibres, television remote controls and security systems; d visible light: including vision, photography and illumination; e ultraviolet: including security marking, fluorescent lamps, detecting forged bank notes and disinfecting water; f x-rays: including observing the internal structure of objects, airport security scanners and medical x-rays; g gamma rays: including sterilising food and medical equipment, and the detection of cancer and its treatment."
    },
    {
     "code": "5.23",
     "q": "How can radio waves be produced or detected using electrical circuits?",
     "idea": "Radio waves and electrical circuits",
     "content": "(HT only) Recall that radio waves can be produced by, or can themselves induce, oscillations in electrical circuits."
    },
    {
     "code": "5.24",
     "q": "How are radiations generated by, or absorbed by, changes in atoms and nuclei?",
     "idea": "Radiation from changes in atoms and nuclei",
     "content": "Recall that changes in atoms and nuclei can: a generate radiations over a wide frequency range; b be caused by absorption of a range of radiations."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Apply the relationships between frequency and wavelength across the electromagnetic spectrum (1a, 1c, 3c)."
   ]
  },
  {
   "id": "P6",
   "component": "1P",
   "option": null,
   "name": "Physics Topic 6 – Radioactivity",
   "caseStudies": [],
   "ideas": [
    {
     "code": "6.1",
     "q": "What is the structure of an atom?",
     "idea": "Structure of the atom",
     "content": "Describe an atom as a positively charged nucleus, consisting of protons and neutrons, surrounded by negatively charged electrons, with the nuclear radius much smaller than that of the atom and with almost all of the mass in the nucleus. Maths skills: 5b."
    },
    {
     "code": "6.2",
     "q": "How big are atoms and small molecules?",
     "idea": "Size of atoms and molecules",
     "content": "Recall the typical size (order of magnitude) of atoms and small molecules."
    },
    {
     "code": "6.3",
     "q": "How is the structure of an isotope's nucleus described using atomic and mass number?",
     "idea": "Atomic and mass number notation",
     "content": "Describe the structure of nuclei of isotopes using the terms atomic (proton) number and mass (nucleon) number and using symbols in the format ¹³₆C. Maths skills: 1a, 3a."
    },
    {
     "code": "6.4",
     "q": "Why do isotopes of the same element have different masses?",
     "idea": "Isotopes and neutron number",
     "content": "Recall that the nucleus of each element has a characteristic positive charge, but that isotopes of an element differ in mass by having different numbers of neutrons. Maths skills: 2g, 5b."
    },
    {
     "code": "6.5",
     "q": "What are the relative masses and charges of protons, neutrons, electrons and positrons?",
     "idea": "Relative masses and charges of particles",
     "content": "Recall the relative masses and relative electric charges of protons, neutrons, electrons and positrons."
    },
    {
     "code": "6.6",
     "q": "Why is an atom electrically neutral?",
     "idea": "Neutral atoms",
     "content": "Recall that in an atom the number of protons equals the number of electrons and is therefore neutral."
    },
    {
     "code": "6.7",
     "q": "How are electrons arranged around the nucleus?",
     "idea": "Electron orbits",
     "content": "Recall that in each atom its electrons orbit the nucleus at different set distances from the nucleus. Maths skills: 5b."
    },
    {
     "code": "6.8",
     "q": "When do electrons change orbit?",
     "idea": "Electrons changing orbit",
     "content": "Explain that electrons change orbit when there is absorption or emission of electromagnetic radiation. Maths skills: 5b."
    },
    {
     "code": "6.9",
     "q": "How can an atom become a positive ion?",
     "idea": "Forming positive ions",
     "content": "Explain how atoms may form positive ions by losing outer electrons. Maths skills: 5b."
    },
    {
     "code": "6.10",
     "q": "What types of radiation are emitted from unstable nuclei?",
     "idea": "Types of radioactive emission",
     "content": "Recall that alpha, β– (beta minus), β+ (positron), gamma rays and neutron radiation are emitted from unstable nuclei in a random process."
    },
    {
     "code": "6.11",
     "q": "Which types of radiation are ionising?",
     "idea": "Ionising radiations",
     "content": "Recall that alpha, β– (beta minus), β+ (positron) and gamma rays are ionising radiations."
    },
    {
     "code": "6.12",
     "q": "What is background radiation?",
     "idea": "Background radiation",
     "content": "Explain what is meant by background radiation."
    },
    {
     "code": "6.13",
     "q": "Where does background radiation come from?",
     "idea": "Origins of background radiation",
     "content": "Describe the origins of background radiation from Earth and space."
    },
    {
     "code": "6.14",
     "q": "How can radioactivity be measured and detected?",
     "idea": "Measuring and detecting radioactivity",
     "content": "Describe methods for measuring and detecting radioactivity limited to photographic film and a Geiger–Müller tube."
    },
    {
     "code": "6.15",
     "q": "What are alpha, beta and gamma radiation made of?",
     "idea": "Nature of alpha, beta and gamma radiation",
     "content": "Recall that an alpha particle is equivalent to a helium nucleus, a beta particle is an electron emitted from the nucleus and a gamma ray is electromagnetic radiation."
    },
    {
     "code": "6.16",
     "q": "How do alpha, beta and gamma radiation compare in penetration and ionisation?",
     "idea": "Comparing alpha, beta and gamma radiation",
     "content": "Compare alpha, beta and gamma radiations in terms of their abilities to penetrate and ionise."
    },
    {
     "code": "6.17",
     "q": "How has the model of the atom changed over time?",
     "idea": "The changing atomic model",
     "content": "Describe how and why the atomic model has changed over time including reference to the plum pudding model and Rutherford alpha particle scattering leading to the Bohr model. Maths skills: 5b."
    },
    {
     "code": "6.18",
     "q": "What happens to a neutron in β– decay?",
     "idea": "Beta minus decay",
     "content": "Describe the process of β– decay (a neutron becomes a proton plus an electron). Maths skills: 1b, 1c, 3c."
    },
    {
     "code": "6.19",
     "q": "What happens to a proton in β+ decay?",
     "idea": "Beta plus decay",
     "content": "Describe the process of β+ decay (a proton becomes a neutron plus a positron). Maths skills: 1b, 1c, 3c."
    },
    {
     "code": "6.20",
     "q": "How do the atomic number and mass number change during radioactive decay?",
     "idea": "Changes in atomic and mass number in decay",
     "content": "Explain the effects on the atomic (proton) number and mass (nucleon) number of radioactive decays (α, β, γ and neutron emission). Maths skills: 1b, 1c, 3c."
    },
    {
     "code": "6.21",
     "q": "What often happens to a nucleus after it has undergone radioactive decay?",
     "idea": "Nuclear rearrangement and gamma emission",
     "content": "Recall that nuclei that have undergone radioactive decay often undergo nuclear rearrangement with a loss of energy as gamma radiation."
    },
    {
     "code": "6.22",
     "q": "How do you balance a nuclear equation for mass and charge?",
     "idea": "Balancing nuclear equations",
     "content": "Use given data to balance nuclear equations in terms of mass and charge. Maths skills: 1b, 1c, 3c."
    },
    {
     "code": "6.23",
     "q": "How does the activity of a radioactive source change over time?",
     "idea": "Activity decreasing over time",
     "content": "Describe how the activity of a radioactive source decreases over a period of time. Maths skills: 2g, 4c."
    },
    {
     "code": "6.24",
     "q": "What is the unit of radioactive activity?",
     "idea": "The becquerel",
     "content": "Recall that the unit of activity of a radioactive isotope is the Becquerel, Bq."
    },
    {
     "code": "6.25",
     "q": "What is meant by the half-life of a radioactive isotope?",
     "idea": "Half-life",
     "content": "Explain that the half-life of a radioactive isotope is the time taken for half the undecayed nuclei to decay or the activity of a source to decay by half. Maths skills: 1c, 1d, 2a."
    },
    {
     "code": "6.26",
     "q": "Can you predict when a particular nucleus will decay?",
     "idea": "Randomness and half-life",
     "content": "Explain that it cannot be predicted when a particular nucleus will decay but half-life enables the activity of a very large number of nuclei to be predicted during the decay process. Maths skills: 1c, 3d."
    },
    {
     "code": "6.27",
     "q": "How do you use half-life to calculate how a radioactive isotope decays?",
     "idea": "Half-life calculations",
     "content": "Use the concept of half-life to carry out simple calculations on the decay of a radioactive isotope, including graphical representations. Maths skills: 1a, 1b, 1c, 1d, 2a, 2g, 3a, 3b, 3c, 3d."
    },
    {
     "code": "6.29",
     "q": "What dangers does ionising radiation pose to living tissue?",
     "idea": "Dangers of ionising radiation",
     "content": "Describe the dangers of ionising radiation in terms of tissue damage and possible mutations and relate this to the precautions needed."
    },
    {
     "code": "6.31",
     "q": "What precautions keep people safe from radiation exposure?",
     "idea": "Radiation safety precautions",
     "content": "Explain the precautions taken to ensure the safety of people exposed to radiation, including limiting the dose for patients and the risks to medical personnel."
    },
    {
     "code": "6.32",
     "q": "What is the difference between contamination and irradiation?",
     "idea": "Contamination vs irradiation",
     "content": "Describe the differences between contamination and irradiation effects and compare the hazards associated with these two."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Balance equations representing alpha-, beta- or gamma-radiations in terms of the masses and charges of the atoms involved (1b, 1c, 3c).",
    "Calculate the net decline, expressed as a ratio, in a radioactive emission after a given number of half-lives (1c, 3d)."
   ]
  },
  {
   "id": "P8",
   "component": "2P",
   "option": null,
   "name": "Physics Topic 8 – Energy – forces doing work",
   "caseStudies": [],
   "ideas": [
    {
     "code": "8.1",
     "q": "How does the way energy is stored change when a system changes?",
     "idea": "Energy stores and system changes",
     "content": "Describe the changes involved in the way energy is stored when systems change."
    },
    {
     "code": "8.2",
     "q": "How can energy transfers be represented in a diagram?",
     "idea": "Energy transfer diagrams",
     "content": "Draw and interpret diagrams to represent energy transfers. Maths skills: 1c, 2c."
    },
    {
     "code": "8.3",
     "q": "Does the total energy in a closed system change?",
     "idea": "Energy in a closed system",
     "content": "Explain that where there are energy transfers in a closed system there is no net change to the total energy in that system."
    },
    {
     "code": "8.4",
     "q": "In what ways can the energy of a system be changed?",
     "idea": "Ways of changing a system's energy",
     "content": "Identify the different ways that the energy of a system can be changed: a through work done by forces; b in electrical equipment; c in heating."
    },
    {
     "code": "8.5",
     "q": "How is the work done by a force measured, and how does it relate to energy transferred?",
     "idea": "Work done and energy transferred",
     "content": "Describe how to measure the work done by a force and understand that energy transferred (joule, J) is equal to work done (joule, J)."
    },
    {
     "code": "8.6",
     "q": "How is the work done by a force calculated?",
     "idea": "Work done equation",
     "content": "Recall and use the equation: work done (joule, J) = force (newton, N) × distance moved in the direction of the force (metre, m); E = F × d. Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d, 4f."
    },
    {
     "code": "8.7",
     "q": "How are the changes in energy calculated when a system is changed by work done by forces?",
     "idea": "Energy changes from work done by forces",
     "content": "Describe and calculate the changes in energy involved when a system is changed by work done by forces."
    },
    {
     "code": "8.8",
     "q": "How is the gravitational potential energy gained by a raised object calculated?",
     "idea": "Gravitational potential energy equation",
     "content": "Recall and use the equation to calculate the change in gravitational PE when an object is raised above the ground: change in gravitational potential energy (joule, J) = mass (kilogram, kg) × gravitational field strength (newton per kilogram, N/kg) × change in vertical height (metre, m); ΔGPE = m × g × Δh. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "8.9",
     "q": "How is the kinetic energy of a moving object calculated?",
     "idea": "Kinetic energy equation",
     "content": "Recall and use the equation to calculate the amounts of energy associated with a moving object: kinetic energy (joule, J) = 0.5 × mass (kilogram, kg) × (speed)² ((metre/second)², (m/s)²); KE = ½ × m × v². Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "8.10",
     "q": "What happens to energy that is dissipated in a system change?",
     "idea": "Dissipated energy",
     "content": "Explain, using examples, how in all system changes energy is dissipated so that it is stored in less useful ways."
    },
    {
     "code": "8.11",
     "q": "Why do mechanical processes become wasteful when they heat up?",
     "idea": "Wasteful mechanical processes",
     "content": "Explain that mechanical processes become wasteful when they cause a rise in temperature so dissipating energy in heating the surroundings."
    },
    {
     "code": "8.12",
     "q": "What is power?",
     "idea": "Definition of power",
     "content": "Define power as the rate at which energy is transferred and use examples to explain this definition. Maths skills: 1c."
    },
    {
     "code": "8.13",
     "q": "How is power calculated from the work done and the time taken?",
     "idea": "Power equation",
     "content": "Recall and use the equation: power (watt, W) = work done (joule, J) ÷ time taken (second, s); P = E / t. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "8.14",
     "q": "What is one watt equal to?",
     "idea": "The watt",
     "content": "Recall that one watt is equal to one joule per second, J/s. Maths skills: 1c."
    },
    {
     "code": "8.15",
     "q": "How is the efficiency of an energy transfer calculated?",
     "idea": "Efficiency equation",
     "content": "Recall and use the equation: efficiency = useful energy transferred by the device ÷ total energy supplied to the device. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Make calculations of the energy changes associated with changes in a system, recalling or selecting the relevant equations for mechanical, electrical, and thermal processes; thereby express in quantitative form and on a common scale the overall redistribution of energy in the system (1a, 1c, 3c).",
    "Calculate relevant values of stored energy and energy transfers; convert between newton-metres and joules (1c, 3c)."
   ]
  },
  {
   "id": "P9",
   "component": "2P",
   "option": null,
   "name": "Physics Topic 9 – Forces and their effects",
   "caseStudies": [],
   "ideas": [
    {
     "code": "9.1",
     "q": "How can objects interact with each other?",
     "idea": "Ways objects can interact",
     "content": "Describe, with examples, how objects can interact: a at a distance without contact, linking these to the gravitational, electrostatic and magnetic fields involved; b by contact, including normal contact force and friction; c producing pairs of forces which can be represented as vectors."
    },
    {
     "code": "9.2",
     "q": "What is the difference between a vector and a scalar quantity?",
     "idea": "Vector vs scalar quantities",
     "content": "Explain the difference between vector and scalar quantities using examples."
    },
    {
     "code": "9.3",
     "q": "How can vector diagrams show the resolution of forces, a net force or equilibrium?",
     "idea": "Vector diagrams for forces",
     "content": "Use vector diagrams to illustrate resolution of forces, a net force, and equilibrium situations (scale drawings only). Maths skills: 4a, 5a, 5b."
    },
    {
     "code": "9.4",
     "q": "How do you draw a free body force diagram?",
     "idea": "Free body force diagrams",
     "content": "Draw and use free body force diagrams. Maths skills: 4a, 5a, 5b."
    },
    {
     "code": "9.5",
     "q": "What happens when several forces act on an object, including the special case where they balance?",
     "idea": "Resultant and balanced forces",
     "content": "Explain examples of the forces acting on an isolated solid object or a system where several forces lead to a resultant force on an object and the special case of balanced forces when the resultant force is zero. Maths skills: 5a."
    },
    {
     "code": "9.10",
     "q": "How does lubrication reduce unwanted energy transfer?",
     "idea": "Reducing energy transfer with lubrication",
     "content": "Explain ways of reducing unwanted energy transfer through lubrication."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Use vector diagrams to illustrate resolution of forces, a net force, and equilibrium situations (scale drawings only) (4a, 5a, 5b)."
   ]
  },
  {
   "id": "P10",
   "component": "2P",
   "option": null,
   "name": "Physics Topic 10 – Electricity and circuits",
   "caseStudies": [
    "Construct electrical circuits to investigate the relationship between potential difference, current and resistance for a resistor and a filament lamp, and to test series and parallel circuits using resistors and filament lamps."
   ],
   "ideas": [
    {
     "code": "10.1",
     "q": "What is the structure of an atom, in terms of protons, neutrons and electrons?",
     "idea": "Structure of the atom",
     "content": "Describe the structure of the atom, limited to the position, mass and charge of protons, neutrons and electrons. Maths skills: 5b."
    },
    {
     "code": "10.2",
     "q": "What are the circuit symbols used in electric circuit diagrams?",
     "idea": "Circuit diagrams and symbols",
     "content": "Draw and use electric circuit diagrams representing them with the conventions of positive and negative terminals, and the symbols that represent cells, including batteries, switches, voltmeters, ammeters, resistors, variable resistors, lamps, motors, diodes, thermistors, LDRs and LEDs. Maths skills: 5b."
    },
    {
     "code": "10.3",
     "q": "What is the difference between series and parallel circuits?",
     "idea": "Series vs parallel circuits",
     "content": "Describe the differences between series and parallel circuits."
    },
    {
     "code": "10.4",
     "q": "How is a voltmeter connected, and what does it measure?",
     "idea": "Voltmeters",
     "content": "Recall that a voltmeter is connected in parallel with a component to measure the potential difference (voltage), in volt, across it."
    },
    {
     "code": "10.5",
     "q": "What is potential difference, and why is the volt a joule per coulomb?",
     "idea": "Potential difference",
     "content": "Explain that potential difference (voltage) is the energy transferred per unit charge passed and hence that the volt is a joule per coulomb. Maths skills: 1a, 1c, 3c."
    },
    {
     "code": "10.6",
     "q": "How is the energy transferred by a charge moving through a potential difference calculated?",
     "idea": "Energy transferred equation",
     "content": "Recall and use the equation: energy transferred (joule, J) = charge moved (coulomb, C) × potential difference (volt, V); E = Q × V. Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "10.7",
     "q": "How is an ammeter connected, and what does it measure?",
     "idea": "Ammeters",
     "content": "Recall that an ammeter is connected in series with a component to measure the current, in amp, in the component."
    },
    {
     "code": "10.8",
     "q": "What is electric current, and what carries it in a metal?",
     "idea": "Electric current as flow of charge",
     "content": "Explain that an electric current as the rate of flow of charge and the current in metals is a flow of electrons."
    },
    {
     "code": "10.9",
     "q": "How is the charge that flows in a circuit calculated?",
     "idea": "Charge equation",
     "content": "Recall and use the equation: charge (coulomb, C) = current (ampere, A) × time (second, s); Q = I × t. Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "10.10",
     "q": "What is needed in a closed circuit for there to be a current?",
     "idea": "Current needs a source of p.d.",
     "content": "Describe that when a closed circuit includes a source of potential difference there will be a current in the circuit."
    },
    {
     "code": "10.11",
     "q": "Is current conserved at a junction in a circuit?",
     "idea": "Current at a junction",
     "content": "Recall that current is conserved at a junction in a circuit."
    },
    {
     "code": "10.12",
     "q": "How does changing resistance affect the current in a circuit?",
     "idea": "Resistance and current",
     "content": "Explain how changing the resistance in a circuit changes the current and how this can be achieved using a variable resistor."
    },
    {
     "code": "10.13",
     "q": "How is potential difference related to current and resistance?",
     "idea": "Potential difference equation",
     "content": "Recall and use the equation: potential difference (volt, V) = current (ampere, A) × resistance (ohm, Ω); V = I × R. Maths skills: 1a, 1d, 2a, 3a, 3c, 3d."
    },
    {
     "code": "10.14",
     "q": "How does adding resistors in series or in parallel change the net resistance?",
     "idea": "Net resistance in series and parallel",
     "content": "Explain why, if two resistors are in series, the net resistance is increased, whereas with two in parallel the net resistance is decreased."
    },
    {
     "code": "10.15",
     "q": "How do you calculate the current, potential difference and resistance in a series circuit?",
     "idea": "Calculations in series circuits",
     "content": "Calculate the currents, potential differences and resistances in series circuits. Maths skills: 1a, 1d, 2a, 3a, 3c, 3d."
    },
    {
     "code": "10.16",
     "q": "How are series circuits designed and built for testing and measuring?",
     "idea": "Designing series circuits",
     "content": "Explain the design and construction of series circuits for testing and measuring."
    },
    {
     "code": "10.17",
     "q": "How do current, potential difference and resistance vary for a resistor and a filament lamp, in series and parallel circuits?",
     "idea": "Core Practical: Investigating circuits",
     "content": "Core Practical: Construct electrical circuits to: a investigate the relationship between potential difference, current and resistance for a resistor and a filament lamp; b test series and parallel circuits using resistors and filament lamps. A series circuit should be set up initially with a resistor, ammeter and voltmeter, and the current recorded at different voltages; this must then be repeated using a filament lamp instead of a resistor. To investigate series and parallel circuits, a parallel circuit must be set up with ammeters, voltmeters, and filament lamps, and readings from this circuit compared with the series circuits used initially. Analysis must include use of the equation V = I × R. Maths skills: 1a, 1c, 1d, 2a, 2b, 2f, 3a, 3b, 3c, 3d, 4a, 4b, 4c, 4d, 4e."
    },
    {
     "code": "10.18",
     "q": "How does the current through a filament lamp, a diode and a fixed resistor vary with potential difference?",
     "idea": "Current/p.d. behaviour of circuit devices",
     "content": "Explain how current varies with potential difference for the following devices and how this relates to resistance: a filament lamps; b diodes; c fixed resistors. Maths skills: 2g, 4a, 4b, 4c, 4d, 4e."
    },
    {
     "code": "10.19",
     "q": "How does the resistance of an LDR change with light intensity?",
     "idea": "LDR resistance and light intensity",
     "content": "Describe how the resistance of a light-dependent resistor (LDR) varies with light intensity. Maths skills: 4c, 4d."
    },
    {
     "code": "10.20",
     "q": "How does the resistance of a thermistor change with temperature?",
     "idea": "Thermistor resistance and temperature",
     "content": "Describe how the resistance of a thermistor varies with change of temperature (negative temperature coefficient thermistors only). Maths skills: 4c, 4d."
    },
    {
     "code": "10.21",
     "q": "How can circuits be used to explore how the resistance of a filament lamp, diode, thermistor or LDR varies?",
     "idea": "Exploring resistance with circuits",
     "content": "Explain how the design and use of circuits can be used to explore the variation of resistance in the following devices: a filament lamps; b diodes; c thermistors; d LDRs. Maths skills: 5b."
    },
    {
     "code": "10.22",
     "q": "What happens when there is a current in a resistor?",
     "idea": "Heating effect of current",
     "content": "Recall that, when there is an electric current in a resistor, there is an energy transfer which heats the resistor."
    },
    {
     "code": "10.23",
     "q": "Why is electrical energy dissipated as thermal energy when current flows against resistance?",
     "idea": "Dissipation as thermal energy",
     "content": "Explain that electrical energy is dissipated as thermal energy in the surroundings when an electrical current does work against electrical resistance."
    },
    {
     "code": "10.24",
     "q": "What causes the energy transfer that heats a resistor, at the level of electrons and ions?",
     "idea": "Electron-ion collisions",
     "content": "Explain the energy transfer (in 10.22 above) as the result of collisions between electrons and the ions in the lattice."
    },
    {
     "code": "10.25",
     "q": "How does using low resistance wires reduce unwanted energy transfer?",
     "idea": "Reducing energy transfer with low resistance wires",
     "content": "(HT only) Explain ways of reducing unwanted energy transfer through low resistance wires."
    },
    {
     "code": "10.26",
     "q": "What are the advantages and disadvantages of the heating effect of an electric current?",
     "idea": "Advantages and disadvantages of the heating effect",
     "content": "Describe the advantages and disadvantages of the heating effect of an electric current."
    },
    {
     "code": "10.27",
     "q": "How is the energy transferred by a current calculated from current, potential difference and time?",
     "idea": "Energy transferred equation (current, p.d., time)",
     "content": "Use the equation: energy transferred (joule, J) = current (ampere, A) × potential difference (volt, V) × time (second, s); E = I × V × t (given on the formulae sheet). Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "10.28",
     "q": "What is power, in terms of energy transferred per second?",
     "idea": "Power as energy per second",
     "content": "Describe power as the energy transferred per second and recall that it is measured in watt. Maths skills: 1c."
    },
    {
     "code": "10.29",
     "q": "How is electrical power calculated from energy transferred and time?",
     "idea": "Power equation (energy and time)",
     "content": "Recall and use the equation: power (watt, W) = energy transferred (joule, J) ÷ time taken (second, s); P = E / t. Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "10.30",
     "q": "How is the power transfer in a circuit device related to potential difference and current?",
     "idea": "Power, p.d. and current in a circuit device",
     "content": "Explain how the power transfer in any circuit device is related to the potential difference across it and the current in it. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "10.31",
     "q": "How is electrical power calculated from current and potential difference, or from current and resistance?",
     "idea": "Electrical power equations",
     "content": "Recall and use the equations: electrical power (watt, W) = current (ampere, A) × potential difference (volt, V); P = I × V. electrical power (watt, W) = current squared (ampere², A²) × resistance (ohm, Ω); P = I² × R. Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "10.32",
     "q": "How is energy transferred from batteries and the mains to motors and heating devices?",
     "idea": "Energy transfer in domestic devices",
     "content": "Describe how, in different domestic devices, energy is transferred from batteries and the a.c. mains to the energy of motors and heating devices."
    },
    {
     "code": "10.33",
     "q": "What is the difference between direct and alternating voltage?",
     "idea": "Direct vs alternating voltage",
     "content": "Explain the difference between direct and alternating voltage. Maths skills: 4c."
    },
    {
     "code": "10.34",
     "q": "What is direct current, and what supplies it?",
     "idea": "Direct current",
     "content": "Describe direct current (d.c.) as movement of charge in one direction only and recall that cells and batteries supply direct current (d.c.)."
    },
    {
     "code": "10.35",
     "q": "What happens to the movement of charge in alternating current?",
     "idea": "Alternating current",
     "content": "Describe that in alternating current (a.c.) the movement of charge changes direction."
    },
    {
     "code": "10.36",
     "q": "What is the frequency and voltage of the UK domestic electricity supply?",
     "idea": "UK mains supply",
     "content": "Recall that in the UK the domestic supply is a.c., at a frequency of 50 Hz and a voltage of about 230 V."
    },
    {
     "code": "10.37",
     "q": "What is the difference in function between the live and neutral wires?",
     "idea": "Live and neutral wires",
     "content": "Explain the difference in function between the live and the neutral mains input wires."
    },
    {
     "code": "10.38",
     "q": "What do the earth wire and fuses or circuit breakers do?",
     "idea": "Earth wire, fuses and circuit breakers",
     "content": "Explain the function of an earth wire and of fuses or circuit breakers in ensuring safety."
    },
    {
     "code": "10.39",
     "q": "Why should switches and fuses be connected in the live wire?",
     "idea": "Switches and fuses in the live wire",
     "content": "Explain why switches and fuses should be connected in the live wire of a domestic circuit."
    },
    {
     "code": "10.40",
     "q": "What are the potential differences between the live, neutral and earth wires?",
     "idea": "Potential differences of mains wires",
     "content": "Recall the potential differences between the live, neutral and earth mains wires."
    },
    {
     "code": "10.41",
     "q": "Why is a connection between the live wire and earth dangerous?",
     "idea": "Dangers of live-to-earth connections",
     "content": "Explain the dangers of providing any connection between the live wire and earth."
    },
    {
     "code": "10.42",
     "q": "How do the power ratings of domestic appliances relate to the energy they store or transfer when in use?",
     "idea": "Power ratings of domestic appliances",
     "content": "Describe, with examples, the relationship between the power ratings for domestic electrical appliances and the changes in stored energy when they are in use. Maths skills: 1c, 2c."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Apply the equations relating p.d., current, quantity of charge, resistance, power, energy, and time, and solve problems for circuits which include resistors in series, using the concept of equivalent resistance (1c, 3b, 3c, 3d).",
    "Use graphs to explore whether circuit elements are linear or non-linear and relate the curves produced to their function and properties (4c, 4d).",
    "Make calculations of the energy changes associated with changes in a system, recalling or selecting the relevant equations for mechanical, electrical, and thermal processes; thereby express in quantitative form and on a common scale the overall redistribution of energy in the system (1a, 1c, 3c)."
   ]
  },
  {
   "id": "P12",
   "component": "2P",
   "option": null,
   "name": "Physics Topic 12 – Magnetism and the motor effect",
   "caseStudies": [],
   "ideas": [
    {
     "code": "12.1",
     "q": "How do magnetic poles interact?",
     "idea": "Attraction and repulsion of magnetic poles",
     "content": "Recall that unlike magnetic poles attract and like magnetic poles repel."
    },
    {
     "code": "12.2",
     "q": "What are permanent and temporary magnetic materials used for?",
     "idea": "Uses of magnetic materials",
     "content": "Describe the uses of permanent and temporary magnetic materials including cobalt, steel, iron and nickel."
    },
    {
     "code": "12.3",
     "q": "What is the difference between a permanent and an induced magnet?",
     "idea": "Permanent vs induced magnets",
     "content": "Explain the difference between permanent and induced magnets."
    },
    {
     "code": "12.4",
     "q": "What does the magnetic field around a bar magnet look like, and how does field line concentration relate to field strength?",
     "idea": "Magnetic field shape and strength",
     "content": "Describe the shape and direction of the magnetic field around bar magnets and for a uniform field, and relate the strength of the field to the concentration of lines. Maths skills: 5b."
    },
    {
     "code": "12.5",
     "q": "How can a plotting compass be used to show the shape of a magnetic field?",
     "idea": "Plotting compasses",
     "content": "Describe the use of plotting compasses to show the shape and direction of the field of a magnet and the Earth's magnetic field. Maths skills: 5b."
    },
    {
     "code": "12.6",
     "q": "What does the behaviour of a compass tell us about the Earth's core?",
     "idea": "Evidence for the Earth's magnetic core",
     "content": "Explain how the behaviour of a magnetic compass is related to evidence that the core of the Earth must be magnetic. Maths skills: 5b."
    },
    {
     "code": "12.7",
     "q": "How can you show that a current creates a magnetic field, and what shape is that field around a straight wire?",
     "idea": "Magnetic effect of a current",
     "content": "Describe how to show that a current can create a magnetic effect and relate the shape and direction of the magnetic field around a long straight conductor to the direction of the current. Maths skills: 5b."
    },
    {
     "code": "12.8",
     "q": "What affects the strength of the magnetic field around a long straight conductor?",
     "idea": "Strength of the field around a conductor",
     "content": "Recall that the strength of the field depends on the size of the current and the distance from the long straight conductor."
    },
    {
     "code": "12.9",
     "q": "How do the magnetic fields inside and outside a solenoid compare?",
     "idea": "Magnetic field of a solenoid",
     "content": "Explain how inside a solenoid (an example of an electromagnet) the fields from individual coils: a add together to form a very strong almost uniform field along the centre of the solenoid; b cancel to give a weaker field outside the solenoid. Maths skills: 5b."
    },
    {
     "code": "12.10",
     "q": "What happens when a current-carrying conductor is placed near a magnet?",
     "idea": "Force on a conductor near a magnet",
     "content": "(HT only) Recall that a current carrying conductor placed near a magnet experiences a force and that an equal and opposite force acts on the magnet. Maths skills: 5b."
    },
    {
     "code": "12.11",
     "q": "What causes magnetic forces?",
     "idea": "Magnetic forces as field interactions",
     "content": "(HT only) Explain that magnetic forces are due to interactions between magnetic fields."
    },
    {
     "code": "12.12",
     "q": "How does Fleming's left-hand rule relate the directions of force, current and magnetic field?",
     "idea": "Fleming's left-hand rule",
     "content": "(HT only) Recall and use Fleming's left-hand rule to represent the relative directions of the force, the current and the magnetic field for cases where they are mutually perpendicular. Maths skills: 5b."
    },
    {
     "code": "12.13",
     "q": "How is the force on a current-carrying conductor in a magnetic field calculated?",
     "idea": "Force on a conductor equation",
     "content": "(HT only) Use the equation: force on a conductor at right angles to a magnetic field carrying a current (newton, N) = magnetic flux density (tesla, T or newton per ampere metre, N/A m) × current (ampere, A) × length (metre, m); F = B × I × l (given on the formulae sheet; higher tier only, not given on the foundation tier formulae sheet). Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c)."
   ]
  },
  {
   "id": "P13",
   "component": "2P",
   "option": null,
   "name": "Physics Topic 13 – Electromagnetic induction",
   "caseStudies": [],
   "ideas": [
    {
     "code": "13.2",
     "q": "What affects the size and direction of an induced potential difference?",
     "idea": "Factors affecting induced potential difference",
     "content": "(HT only) Recall the factors that affect the size and direction of an induced potential difference, and describe how the magnetic field produced opposes the original change. Maths skills: 5b."
    },
    {
     "code": "13.5",
     "q": "How does an alternating current in one circuit induce a current in another circuit?",
     "idea": "Induction in a transformer",
     "content": "(HT only) Explain how an alternating current in one circuit can induce a current in another circuit in a transformer."
    },
    {
     "code": "13.6",
     "q": "What can a transformer do to the size of an alternating voltage?",
     "idea": "Transformers changing voltage",
     "content": "(HT only) Recall that a transformer can change the size of an alternating voltage."
    },
    {
     "code": "13.8",
     "q": "Why is electrical energy transferred at high voltage in the national grid?",
     "idea": "High-voltage transmission in the national grid",
     "content": "Explain why, in the national grid, electrical energy is transferred at high voltages from power stations, and then transferred at lower voltages in each locality for domestic uses as it improves the efficiency by reducing heat loss in transmission lines."
    },
    {
     "code": "13.9",
     "q": "Where and why are step-up and step-down transformers used in the national grid?",
     "idea": "Step-up and step-down transformers",
     "content": "Explain where and why step-up and step-down transformers are used in the transmission of electricity in the national grid."
    },
    {
     "code": "13.10",
     "q": "How is the power equation for a transformer with 100% efficiency written?",
     "idea": "Transformer power equation",
     "content": "Use the power equation (for transformers with 100% efficiency): potential difference across primary coil (volt, V) × current in primary coil (ampere, A) = potential difference across secondary coil (volt, V) × current in secondary coil (ampere, A); Vp × Ip = Vs × Is (given on the formulae sheet). Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Make calculations of the energy changes associated with changes in a system, recalling or selecting the relevant equations for mechanical, electrical, and thermal processes; thereby express in quantitative form and on a common scale the overall redistribution of energy in the system (1a, 1c, 3c)."
   ]
  },
  {
   "id": "P14",
   "component": "2P",
   "option": null,
   "name": "Physics Topic 14 – Particle model",
   "caseStudies": [
    "Investigate the densities of solid and liquids.",
    "Investigate the properties of water by determining the specific heat capacity of water and obtaining a temperature-time graph for melting ice."
   ],
   "ideas": [
    {
     "code": "14.1",
     "q": "How does kinetic theory explain solids, liquids and gases?",
     "idea": "Kinetic theory of matter",
     "content": "Use a simple kinetic theory model to explain the different states of matter (solids, liquids and gases) in terms of the movement and arrangement of particles."
    },
    {
     "code": "14.2",
     "q": "How is the density of a material calculated?",
     "idea": "Density equation",
     "content": "Recall and use the equation: density (kilogram per cubic metre, kg/m³) = mass (kilogram, kg) ÷ volume (cubic metre, m³); ρ = m / V. Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d, 5c."
    },
    {
     "code": "14.3",
     "q": "How can the density of a solid or a liquid be measured?",
     "idea": "Core Practical: Investigating densities",
     "content": "Core Practical: Investigate the densities of solid and liquids. The density of a solid object must be determined by measuring the mass and volume of the object, using the equation ρ = m / V, with the volume found from the water displaced when the object is submerged. The density of a liquid can be calculated by weighing the liquid using a balance, determining the volume, and using the same equation ρ = m / V. Maths skills: 1a, 1b, 1c, 1d, 2a, 2c, 2f, 3a, 3b, 3c, 3d, 4a, 4c, 5c."
    },
    {
     "code": "14.4",
     "q": "Why does density differ between the states of matter?",
     "idea": "Density and particle arrangement",
     "content": "Explain the differences in density between the different states of matter in terms of the arrangements of the atoms or molecules. Maths skills: 5b."
    },
    {
     "code": "14.5",
     "q": "Is mass conserved when a substance changes state, and how does this differ from a chemical change?",
     "idea": "Conservation of mass in changes of state",
     "content": "Describe that when substances melt, freeze, evaporate, boil, condense or sublimate mass is conserved and that these physical changes differ from some chemical changes because the material recovers its original properties if the change is reversed."
    },
    {
     "code": "14.6",
     "q": "What happens to a system's stored energy and temperature when it is heated?",
     "idea": "Heating, temperature and change of state",
     "content": "Explain how heating a system will change the energy stored within the system and raise its temperature or produce changes of state."
    },
    {
     "code": "14.7",
     "q": "What is the difference between specific heat capacity and specific latent heat?",
     "idea": "Specific heat capacity vs specific latent heat",
     "content": "Define the terms specific heat capacity and specific latent heat and explain the differences between them."
    },
    {
     "code": "14.8",
     "q": "How is the change in thermal energy of a substance calculated as its temperature changes?",
     "idea": "Change in thermal energy equation",
     "content": "Use the equation: change in thermal energy (joule, J) = mass (kilogram, kg) × specific heat capacity (joule per kilogram degree Celsius, J/kg °C) × change in temperature (degree Celsius, °C); ΔQ = m × c × Δθ (given on the formulae sheet). Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "14.9",
     "q": "How is the thermal energy needed for a change of state calculated?",
     "idea": "Specific latent heat equation",
     "content": "Use the equation: thermal energy for a change of state (joule, J) = mass (kilogram, kg) × specific latent heat (joule per kilogram, J/kg); Q = m × L (given on the formulae sheet). Maths skills: 1a, 1b, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "14.10",
     "q": "How does thermal insulation reduce unwanted energy transfer?",
     "idea": "Reducing energy transfer with thermal insulation",
     "content": "Explain ways of reducing unwanted energy transfer through thermal insulation."
    },
    {
     "code": "14.11",
     "q": "How can the specific heat capacity of water be found, and how does the temperature of melting ice change over time?",
     "idea": "Core Practical: Specific heat capacity of water and melting ice",
     "content": "Core Practical: Investigate the properties of water by determining the specific heat capacity of water and obtaining a temperature-time graph for melting ice. The temperature of crushed ice must be recorded and then melted using a Bunsen burner and beaker of water as a water bath, monitoring the temperature as the ice melts. To determine the specific heat capacity of water, the temperature of water must be monitored while heating it using a heat supply connected to a joulemeter, and this used to calculate the specific heat capacity. Maths skills: 1a, 1b, 1c, 1d, 2a, 2b, 2f, 3a, 3b, 3c, 3d, 4a, 4c, 4e."
    },
    {
     "code": "14.12",
     "q": "What causes the pressure of a gas?",
     "idea": "Pressure of a gas",
     "content": "Explain the pressure of a gas in terms of the motion of its particles. Maths skills: 5b."
    },
    {
     "code": "14.13",
     "q": "How does changing the temperature of a gas affect the pressure it produces at constant volume?",
     "idea": "Temperature, particle velocity and pressure",
     "content": "Explain the effect of changing the temperature of a gas on the velocity of its particles and hence on the pressure produced by a fixed mass of gas at constant volume (qualitative only). Maths skills: 5b."
    },
    {
     "code": "14.14",
     "q": "What is absolute zero?",
     "idea": "Absolute zero",
     "content": "Describe the term absolute zero, −273 °C, in terms of the lack of movement of particles."
    },
    {
     "code": "14.15",
     "q": "How do you convert between kelvin and Celsius?",
     "idea": "Kelvin and Celsius scales",
     "content": "Convert between the kelvin and Celsius scales. Maths skills: 1a, 2a."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Make calculations of the energy changes associated with changes in a system, recalling or selecting the relevant equations for mechanical, electrical, and thermal processes; thereby express in quantitative form and on a common scale the overall redistribution of energy in the system (1a, 1c, 3c).",
    "Calculate relevant values of stored energy and energy transfers; convert between newton-metres and joules (1c, 3c).",
    "Apply the relationship between density, mass and volume to changes where mass is conserved (1a, 1b, 1c, 3c).",
    "Apply the relationship between change in internal energy of a material and its mass, specific heat capacity and temperature change to calculate the energy change involved; apply the relationship between specific latent heat and mass to calculate the energy change involved in a change of state (1a, 3c, 3d)."
   ]
  },
  {
   "id": "P15",
   "component": "2P",
   "option": null,
   "name": "Physics Topic 15 – Forces and matter",
   "caseStudies": [
    "Investigate the extension and work done when applying forces to a spring."
   ],
   "ideas": [
    {
     "code": "15.1",
     "q": "Why does stretching, bending or compressing an object require more than one force?",
     "idea": "Forces needed to distort an object",
     "content": "Explain, using springs and other elastic objects, that stretching, bending or compressing an object requires more than one force."
    },
    {
     "code": "15.2",
     "q": "What is the difference between elastic and inelastic distortion?",
     "idea": "Elastic vs inelastic distortion",
     "content": "Describe the difference between elastic and inelastic distortion."
    },
    {
     "code": "15.3",
     "q": "How is the force on a stretched spring calculated, and how is the spring constant found?",
     "idea": "Spring force equation",
     "content": "Recall and use the equation for linear elastic distortion including calculating the spring constant: force exerted on a spring (newton, N) = spring constant (newton per metre, N/m) × extension (metre, m); F = k × x. Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d."
    },
    {
     "code": "15.4",
     "q": "How is the work done in stretching a spring calculated?",
     "idea": "Elastic energy equation",
     "content": "Use the equation to calculate the work done in stretching a spring: energy transferred in stretching (joule, J) = 0.5 × spring constant (newton per metre, N/m) × (extension (metre, m))²; E = ½ × k × x² (given on the formulae sheet). Maths skills: 1a, 1c, 1d, 2a, 3a, 3b, 3c, 3d, 4c, 4e, 4f."
    },
    {
     "code": "15.5",
     "q": "What is the difference between a linear and a non-linear force-extension relationship?",
     "idea": "Linear vs non-linear force-extension",
     "content": "Describe the difference between linear and non-linear relationships between force and extension. Maths skills: 4c, 4e."
    },
    {
     "code": "15.6",
     "q": "How is the extension and work done when stretching a spring investigated?",
     "idea": "Core Practical: Extension and work done in a spring",
     "content": "Core Practical: Investigate the extension and work done when applying forces to a spring. The stretching of a spring must be investigated by measuring the length of a spring with no weights, followed by adding varying masses and measuring the new length; this must include calculating the work done and an appreciation of the forces involved. Maths skills: 1a, 1c, 1d, 2a, 2b, 2c, 2f, 3a, 3b, 3c, 3d, 4a, 4b, 4c, 4d."
    }
   ],
   "skills": [
    "Make calculations using ratios and proportional reasoning to convert units and to compute rates (1c, 3c).",
    "Calculate relevant values of stored energy and energy transfers; convert between newton-metres and joules (1c, 3c).",
    "Make calculations of the energy changes associated with changes in a system, recalling or selecting the relevant equations for mechanical, electrical, and thermal processes; thereby express in quantitative form and on a common scale the overall redistribution of energy in the system (1a, 1c, 3c)."
   ]
  },
  {
   "id": "A1",
   "component": "1B",
   "option": null,
   "name": "Appendix 1 – Mathematical skills (assessed on every paper)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1a",
     "q": "How do you recognise and use a number written in decimal form?",
     "idea": "Decimal form",
     "content": "Arithmetic and numerical computation: recognise and use expressions in decimal form."
    },
    {
     "code": "1b",
     "q": "How do you recognise and use a number written in standard form?",
     "idea": "Standard form",
     "content": "Arithmetic and numerical computation: recognise and use expressions in standard form."
    },
    {
     "code": "1c",
     "q": "How do you use ratios, fractions and percentages in a calculation?",
     "idea": "Ratios, fractions and percentages",
     "content": "Arithmetic and numerical computation: use ratios, fractions and percentages."
    },
    {
     "code": "1d",
     "q": "How do you make an estimate of the result of a simple calculation?",
     "idea": "Estimating calculation results",
     "content": "Arithmetic and numerical computation: make estimates of the results of simple calculations."
    },
    {
     "code": "2a",
     "q": "How many significant figures should you use in an answer?",
     "idea": "Significant figures",
     "content": "Handling data: use an appropriate number of significant figures."
    },
    {
     "code": "2b",
     "q": "How do you find the arithmetic mean of a set of results?",
     "idea": "Arithmetic means",
     "content": "Handling data: find arithmetic means."
    },
    {
     "code": "2c",
     "q": "How do you construct and interpret frequency tables, bar charts and histograms?",
     "idea": "Frequency tables and diagrams",
     "content": "Handling data: construct and interpret frequency tables and diagrams, bar charts and histograms."
    },
    {
     "code": "2d",
     "q": "What are the principles of sampling as applied to scientific data?",
     "idea": "Sampling",
     "content": "Handling data: understand the principles of sampling as applied to scientific data."
    },
    {
     "code": "2e",
     "q": "What is meant by simple probability?",
     "idea": "Simple probability",
     "content": "Handling data: understand simple probability."
    },
    {
     "code": "2f",
     "q": "What do the terms mean, mode and median describe?",
     "idea": "Mean, mode and median",
     "content": "Handling data: understand the terms mean, mode and median."
    },
    {
     "code": "2g",
     "q": "How does a scatter diagram show a correlation between two variables?",
     "idea": "Scatter diagrams and correlation",
     "content": "Handling data: use a scatter diagram to identify a correlation between two variables."
    },
    {
     "code": "2h",
     "q": "How do you make an order of magnitude calculation?",
     "idea": "Order of magnitude calculations",
     "content": "Handling data: make order of magnitude calculations."
    },
    {
     "code": "3a",
     "q": "What do the symbols =, <, ≪, ≫, >, ∝ and ~ mean?",
     "idea": "Algebraic symbols",
     "content": "Algebra: understand and use the symbols: =, <, ≪, ≫, >, ∝, ~."
    },
    {
     "code": "3b",
     "q": "How do you change the subject of an equation?",
     "idea": "Changing the subject of an equation",
     "content": "Algebra: change the subject of an equation."
    },
    {
     "code": "3c",
     "q": "How do you substitute numerical values, with the correct units, into an algebraic equation?",
     "idea": "Substituting values into equations",
     "content": "Algebra: substitute numerical values into algebraic equations using appropriate units for physical quantities."
    },
    {
     "code": "3d",
     "q": "How do you solve a simple algebraic equation?",
     "idea": "Solving algebraic equations",
     "content": "Algebra: solve simple algebraic equations."
    },
    {
     "code": "4a",
     "q": "How do you translate information between a graph and a table of numbers?",
     "idea": "Graphical and numeric form",
     "content": "Graphs: translate information between graphical and numeric form."
    },
    {
     "code": "4b",
     "q": "What does y = mx + c represent?",
     "idea": "Linear relationships",
     "content": "Graphs: understand that y = mx + c represents a linear relationship."
    },
    {
     "code": "4c",
     "q": "How do you plot two variables from experimental or other data?",
     "idea": "Plotting data",
     "content": "Graphs: plot two variables from experimental or other data."
    },
    {
     "code": "4d",
     "q": "How do you find the slope and intercept of a linear graph?",
     "idea": "Slope and intercept",
     "content": "Graphs: determine the slope and intercept of a linear graph."
    },
    {
     "code": "4e",
     "q": "How do you use the slope of a tangent to a curve to find a rate of change?",
     "idea": "Tangents and rate of change",
     "content": "Graphs: draw and use the slope of a tangent to a curve as a measure of rate of change."
    },
    {
     "code": "4f",
     "q": "What does the area between a curve and the x-axis represent, and how do you measure it?",
     "idea": "Area under a graph",
     "content": "Graphs: understand the physical significance of area between a curve and the x-axis and measure it by counting squares as appropriate."
    },
    {
     "code": "5a",
     "q": "How are angular measures given in degrees used?",
     "idea": "Angular measures",
     "content": "Geometry and trigonometry: use angular measures in degrees."
    },
    {
     "code": "5b",
     "q": "How do you visualise and represent 2D and 3D forms, including 2D representations of 3D objects?",
     "idea": "2D and 3D forms",
     "content": "Geometry and trigonometry: visualise and represent 2D and 3D forms, including two dimensional representations of 3D objects."
    },
    {
     "code": "5c",
     "q": "How do you calculate the areas of triangles and rectangles, and the surface areas and volumes of cubes?",
     "idea": "Areas, surface areas and volumes",
     "content": "Geometry and trigonometry: calculate areas of triangles and rectangles, surface areas and volumes of cubes."
    }
   ]
  },
  {
   "id": "A6B",
   "component": "1B",
   "option": null,
   "name": "Appendix 6 – Apparatus and techniques: Biology",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1",
     "q": "What apparatus and measurements must you be able to use accurately in biology practicals?",
     "idea": "Making accurate measurements",
     "content": "Use of appropriate apparatus to make and record a range of measurements accurately, including length, area, mass, time, temperature, volume of liquids and gases, and pH. Core practicals: 1.6 Investigate biological specimens using microscopes, including magnification calculations and labelled scientific drawings from observations; 1.10 Investigate the effect of pH on enzyme activity; 1.16 Investigate osmosis in potatoes; 6.5 Investigate the effect of light intensity on the rate of photosynthesis; 8.11 Investigate the rate of respiration in living organisms; 9.5 Investigate the relationship between organisms and their environment using field-work techniques, including quadrats and belt transects."
    },
    {
     "code": "2",
     "q": "How do you safely use heating devices such as a Bunsen burner or water bath in biology practicals?",
     "idea": "Safe use of heating devices",
     "content": "Safe use of appropriate heating devices and techniques, including use of a Bunsen burner and a water bath or electric heater. Core practicals: 1.10 Investigate the effect of pH on enzyme activity; 6.5 Investigate the effect of light intensity on the rate of photosynthesis; 8.11 Investigate the rate of respiration in living organisms."
    },
    {
     "code": "3",
     "q": "What apparatus and techniques are used to observe and measure biological changes or processes?",
     "idea": "Observing and measuring biological changes",
     "content": "Use of appropriate apparatus and techniques for the observation and measurement of biological changes and/or processes. Core practicals: 1.6 Investigate biological specimens using microscopes, including magnification calculations and labelled scientific drawings from observations; 1.10 Investigate the effect of pH on enzyme activity; 1.16 Investigate osmosis in potatoes; 6.5 Investigate the effect of light intensity on the rate of photosynthesis; 8.11 Investigate the rate of respiration in living organisms."
    },
    {
     "code": "4",
     "q": "How do you use living organisms safely and ethically to measure physiological functions and responses?",
     "idea": "Safe and ethical use of living organisms",
     "content": "Safe and ethical use of living organisms (plants or animals) to measure physiological functions and responses to the environment. Core practicals: 6.5 Investigate the effect of light intensity on the rate of photosynthesis; 8.11 Investigate the rate of respiration in living organisms; 9.5 Investigate the relationship between organisms and their environment using field-work techniques, including quadrats and belt transects."
    },
    {
     "code": "5",
     "q": "What methods are used to measure rates of reaction, such as gas production, water uptake and indicator colour change?",
     "idea": "Measuring rates of reaction",
     "content": "Measurement of rates of reaction by a variety of methods, including production of gas, uptake of water and colour change of indicator. Core practicals: 1.10 Investigate the effect of pH on enzyme activity; 1.16 Investigate osmosis in potatoes; 6.5 Investigate the effect of light intensity on the rate of photosynthesis; 8.11 Investigate the rate of respiration in living organisms."
    },
    {
     "code": "6",
     "q": "What sampling techniques are used to investigate the distribution and abundance of organisms in an ecosystem?",
     "idea": "Sampling techniques in the field",
     "content": "Application of appropriate sampling techniques to investigate the distribution and abundance of organisms in an ecosystem via direct use in the field. Core practicals: 9.5 Investigate the relationship between organisms and their environment using field-work techniques, including quadrats and belt transects."
    },
    {
     "code": "7",
     "q": "How do you use microscopes and magnification to observe biological specimens and produce labelled drawings?",
     "idea": "Microscopy and scientific drawings",
     "content": "Use of appropriate apparatus, techniques and magnification, including microscopes, to make observations of biological specimens and produce labelled scientific drawings. Core practicals: 1.6 Investigate biological specimens using microscopes, including magnification calculations and labelled scientific drawings from observations; 9.5 Investigate the relationship between organisms and their environment using field-work techniques, including quadrats and belt transects."
    }
   ]
  },
  {
   "id": "A6C",
   "component": "1C",
   "option": null,
   "name": "Appendix 6 – Apparatus and techniques: Chemistry",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1",
     "q": "What apparatus and measurements does this cover, and which core practicals use it?",
     "idea": "Apparatus for making and recording measurements",
     "content": "Use of appropriate apparatus to make and record a range of measurements accurately, including mass, time, temperature, and volume of liquids and gases. Core practical references: 2.11 Investigate the composition of inks using simple distillation and paper chromatography; 3.6 Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid; 3.17 Investigate the preparation of pure, dry hydrated copper sulfate crystals starting from copper oxide including the use of a water bath; 3.31 Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes; 7.1 Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions."
    },
    {
     "code": "2",
     "q": "Which heating apparatus and techniques must be used safely, and in which core practicals?",
     "idea": "Safe use of heating devices",
     "content": "Safe use of appropriate heating devices and techniques including use of a Bunsen burner and a water bath or electric heater. Core practical references: 2.11 Investigate the composition of inks using simple distillation and paper chromatography; 3.17 Investigate the preparation of pure, dry hydrated copper sulfate crystals starting from copper oxide including the use of a water bath; 7.1 Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions."
    },
    {
     "code": "3",
     "q": "What techniques are used to conduct, monitor and measure the pH of chemical reactions?",
     "idea": "Conducting and monitoring reactions, including pH measurement",
     "content": "Use of appropriate apparatus and techniques for conducting and monitoring chemical reactions, including appropriate reagents and/or techniques for the measurement of pH in different situations. Core practical references: 3.6 Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid; 3.31 Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes; 7.1 Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions."
    },
    {
     "code": "4",
     "q": "Which equipment and techniques purify or separate chemical mixtures?",
     "idea": "Purifying and separating chemical mixtures",
     "content": "Safe use of a range of equipment to purify and/or separate chemical mixtures including evaporation, filtration, crystallisation, chromatography and distillation. Core practical references: 2.11 Investigate the composition of inks using simple distillation and paper chromatography; 3.17 Investigate the preparation of pure, dry hydrated copper sulfate crystals starting from copper oxide including the use of a water bath."
    },
    {
     "code": "5",
     "q": "How do you make and record observations of temperature change and reaction rate?",
     "idea": "Observing and recording changes during reactions",
     "content": "Making and recording of appropriate observations during chemical reactions including changes in temperature and the measurement of rates of reaction by a variety of methods such as production of gas and colour change. Core practical references: 3.6 Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid; 7.1 Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions."
    },
    {
     "code": "6",
     "q": "How should gases, liquids and solids be safely mixed and handled to explore chemical changes?",
     "idea": "Safe handling of gases, liquids and solids in reactions",
     "content": "Safe use and careful handling of gases, liquids and solids, including careful mixing of reagents under controlled conditions, using appropriate apparatus to explore chemical changes and/or products. Core practical references: 2.11 Investigate the composition of inks using simple distillation and paper chromatography; 3.6 Investigate the change in pH on adding powdered calcium hydroxide or calcium oxide to a fixed volume of dilute hydrochloric acid; 3.17 Investigate the preparation of pure, dry hydrated copper sulfate crystals starting from copper oxide including the use of a water bath; 3.31 Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes; 7.1 Investigate the effects of changing the conditions of a reaction on the rates of chemical reactions."
    },
    {
     "code": "7",
     "q": "How do you set up and use an electrochemical cell to separate or produce elements and compounds?",
     "idea": "Setting up electrochemical cells",
     "content": "Use of appropriate apparatus and techniques to draw, set up and use electrochemical cells for separation and production of elements and compounds. Core practical references: 3.31 Investigate the electrolysis of copper sulfate solution with inert electrodes and copper electrodes."
    }
   ]
  },
  {
   "id": "A6P",
   "component": "1P",
   "option": null,
   "name": "Appendix 6 – Apparatus and techniques: Physics",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1",
     "q": "What apparatus and measurements must you be able to use accurately in physics practicals, and how are they used to find density?",
     "idea": "Accurate measurement, including finding density",
     "content": "Use of appropriate apparatus to make and record a range of measurements accurately, including length, area, mass, time, volume and temperature. Use of such measurements to determine densities of solid and liquid objects. Core practicals: 2.19 Investigate the relationship between force, mass and acceleration by varying the masses added to trolleys; 4.17 Investigate the suitability of equipment to measure the speed, frequency and wavelength of a wave in a solid and a fluid; 14.3 Investigate the densities of solid and liquids; 14.11 Investigate the properties of water by determining the specific heat capacity of water and obtaining a temperature-time graph for melting ice."
    },
    {
     "code": "2",
     "q": "What apparatus is used to measure and observe the effects of forces, including stretching a spring?",
     "idea": "Measuring the effects of forces, including spring extension",
     "content": "Use of appropriate apparatus to measure and observe the effects of forces including the extension of springs. Core practicals: 2.19 Investigate the relationship between force, mass and acceleration by varying the masses added to trolleys; 15.6 Investigate the extension and work done when applying forces to a spring."
    },
    {
     "code": "3",
     "q": "What apparatus and techniques are used to measure motion, speed and acceleration?",
     "idea": "Measuring motion, speed and acceleration",
     "content": "Use of appropriate apparatus and techniques for measuring motion, including determination of speed and rate of change of speed (acceleration/deceleration). Core practicals: 2.19 Investigate the relationship between force, mass and acceleration by varying the masses added to trolleys."
    },
    {
     "code": "4",
     "q": "How are observations made of waves in fluids and solids, and of electromagnetic waves interacting with matter?",
     "idea": "Observing waves and their interaction with matter",
     "content": "Making observations of waves in fluids and solids to identify the suitability of apparatus to measure speed/frequency/wavelength. Making observations of the effects of the interaction of electromagnetic waves with matter. Core practicals: 4.17 Investigate the suitability of equipment to measure the speed, frequency and wavelength of a wave in a solid and a fluid; 5.9 Investigate refraction in rectangular glass blocks in terms of the interaction of electromagnetic waves with matter."
    },
    {
     "code": "5",
     "q": "What apparatus is used to measure energy changes and transfers, such as work done?",
     "idea": "Measuring energy changes and transfers",
     "content": "Safe use of appropriate apparatus in a range of contexts to measure energy changes/transfers and associated values such as work done. Core practicals: 14.11 Investigate the properties of water by determining the specific heat capacity of water and obtaining a temperature-time graph for melting ice; 15.6 Investigate the extension and work done when applying forces to a spring."
    },
    {
     "code": "6",
     "q": "What apparatus is used to measure current, potential difference and resistance, and to explore circuit elements?",
     "idea": "Measuring current, potential difference and resistance",
     "content": "Use of appropriate apparatus to measure current, potential difference (voltage) and resistance, and to explore the characteristics of a variety of circuit elements. Core practical: 10.17 Construct electrical circuits to: a investigate the relationship between potential difference, current and resistance for a resistor and a filament lamp; b test series and parallel circuits using resistors and filament lamps."
    },
    {
     "code": "7",
     "q": "How are circuit diagrams used to construct and check series and parallel circuits?",
     "idea": "Constructing and checking circuits from diagrams",
     "content": "Use of circuit diagrams to construct and check series and parallel circuits including a variety of common circuit elements. Core practical: 10.17 Construct electrical circuits to: a investigate the relationship between potential difference, current and resistance for a resistor and a filament lamp; b test series and parallel circuits using resistors and filament lamps."
    }
   ]
  },
  {
   "id": "A4",
   "component": "2P",
   "option": null,
   "name": "Appendix 4 – Equations in Combined Science (recall and apply)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.6b",
     "q": "How is distance travelled calculated from average speed and time?",
     "idea": "Distance travelled",
     "content": "distance travelled = average speed × time (recall and apply)."
    },
    {
     "code": "2.8",
     "q": "How is acceleration calculated from the change in velocity and the time taken?",
     "idea": "Acceleration",
     "content": "acceleration = change in velocity ÷ time taken; a = (v − u) / t (recall and apply)."
    },
    {
     "code": "2.15",
     "q": "How is force calculated from mass and acceleration?",
     "idea": "Force",
     "content": "force = mass × acceleration; F = m × a (recall and apply)."
    },
    {
     "code": "2.16",
     "q": "How is weight calculated from mass and gravitational field strength?",
     "idea": "Weight",
     "content": "weight = mass × gravitational field strength; W = m × g (recall and apply)."
    },
    {
     "code": "2.24",
     "q": "How is momentum calculated from mass and velocity?",
     "idea": "Momentum",
     "content": "momentum = mass × velocity; p = m × v (recall and apply)."
    },
    {
     "code": "3.1 and 8.8",
     "q": "How is the change in gravitational potential energy calculated?",
     "idea": "Change in gravitational potential energy",
     "content": "change in gravitational potential energy = mass × gravitational field strength × change in vertical height; ΔGPE = m × g × Δh (recall and apply)."
    },
    {
     "code": "3.2 and 8.9",
     "q": "How is kinetic energy calculated?",
     "idea": "Kinetic energy",
     "content": "kinetic energy = 0.5 × mass × (speed)²; KE = ½ × m × v² (recall and apply)."
    },
    {
     "code": "3.11 and 8.15",
     "q": "How is the efficiency of an energy transfer calculated?",
     "idea": "Efficiency",
     "content": "efficiency = useful energy transferred by the device ÷ total energy supplied to the device (recall and apply)."
    },
    {
     "code": "4.6",
     "q": "How is wave speed calculated from frequency and wavelength, or from distance and time?",
     "idea": "Wave speed",
     "content": "wave speed = frequency × wavelength; v = f × λ. wave speed = distance ÷ time; v = x / t (recall and apply)."
    },
    {
     "code": "8.6",
     "q": "How is work done calculated?",
     "idea": "Work done",
     "content": "work done = force × distance moved in the direction of the force; E = F × d (recall and apply)."
    },
    {
     "code": "8.13",
     "q": "How is power calculated from work done and time taken?",
     "idea": "Power (work done)",
     "content": "power = work done ÷ time taken; P = E / t (recall and apply)."
    },
    {
     "code": "10.6",
     "q": "How is energy transferred calculated from charge moved and potential difference?",
     "idea": "Energy transferred (charge and p.d.)",
     "content": "energy transferred = charge moved × potential difference; E = Q × V (recall and apply)."
    },
    {
     "code": "10.9",
     "q": "How is charge calculated from current and time?",
     "idea": "Charge",
     "content": "charge = current × time; Q = I × t (recall and apply)."
    },
    {
     "code": "10.13",
     "q": "How is potential difference calculated from current and resistance?",
     "idea": "Potential difference",
     "content": "potential difference = current × resistance; V = I × R (recall and apply)."
    },
    {
     "code": "10.29",
     "q": "How is power calculated from energy transferred and time taken?",
     "idea": "Power (energy transferred)",
     "content": "power = energy transferred ÷ time taken; P = E / t (recall and apply)."
    },
    {
     "code": "10.31",
     "q": "How is electrical power calculated?",
     "idea": "Electrical power",
     "content": "electrical power = current × potential difference; P = I × V. electrical power = (current)² × resistance; P = I² × R (recall and apply)."
    },
    {
     "code": "14.2",
     "q": "How is density calculated from mass and volume?",
     "idea": "Density",
     "content": "density = mass ÷ volume; ρ = m / V (recall and apply)."
    },
    {
     "code": "15.3",
     "q": "How is the force exerted on a spring calculated?",
     "idea": "Force on a spring",
     "content": "force exerted on a spring = spring constant × extension; F = k × x (recall and apply)."
    },
    {
     "code": "2.9",
     "q": "How do you find the distance travelled given the initial and final velocity and the acceleration?",
     "idea": "Velocity-squared equation",
     "content": "(final velocity)² − (initial velocity)² = 2 × acceleration × distance; v² − u² = 2 × a × x (select and apply; given on the formulae sheet)."
    },
    {
     "code": "2.26",
     "q": "How is force related to the rate of change of momentum?",
     "idea": "Force and change in momentum",
     "content": "(HT only) force = change in momentum ÷ time; F = (mv − mu) / t (select and apply; given on the formulae sheet, higher tier only)."
    },
    {
     "code": "10.27",
     "q": "How is energy transferred calculated from current, potential difference and time?",
     "idea": "Energy transferred (current, p.d., time)",
     "content": "energy transferred = current × potential difference × time; E = I × V × t (select and apply; given on the formulae sheet)."
    },
    {
     "code": "12.13",
     "q": "How is the force on a current-carrying conductor in a magnetic field calculated?",
     "idea": "Force on a conductor in a magnetic field",
     "content": "(HT only) force on a conductor at right angles to a magnetic field carrying a current = magnetic flux density × current × length; F = B × I × l (select and apply; given on the formulae sheet, higher tier only)."
    },
    {
     "code": "13.10",
     "q": "How is the power equation for a transformer with 100% efficiency written?",
     "idea": "Transformer equation",
     "content": "For transformers with 100% efficiency, potential difference across primary coil × current in primary coil = potential difference across secondary coil × current in secondary coil; Vp × Ip = Vs × Is (select and apply; given on the formulae sheet)."
    },
    {
     "code": "14.8",
     "q": "How is the change in thermal energy of a substance calculated?",
     "idea": "Change in thermal energy",
     "content": "change in thermal energy = mass × specific heat capacity × change in temperature; ΔQ = m × c × Δθ (select and apply; given on the formulae sheet)."
    },
    {
     "code": "14.9",
     "q": "How is the thermal energy needed for a change of state calculated?",
     "idea": "Thermal energy for a change of state",
     "content": "thermal energy for a change of state = mass × specific latent heat; Q = m × L (select and apply; given on the formulae sheet)."
    },
    {
     "code": "15.4",
     "q": "How is the energy transferred in stretching a spring calculated?",
     "idea": "Energy transferred in stretching",
     "content": "energy transferred in stretching = 0.5 × spring constant × (extension)²; E = ½ × k × x² (select and apply; given on the formulae sheet)."
    }
   ]
  }
 ]
};
module.exports = { SPEC_1SC0 };
