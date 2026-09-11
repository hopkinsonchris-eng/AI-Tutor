/* Pearson Edexcel GCSE Mathematics (International GCSE, Specification A, Foundation tier) (4MA1) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_4MA1 = {
 "id": "EDX-4MA1",
 "board": "Pearson Edexcel",
 "subject": "Mathematics (International GCSE, Specification A, Foundation tier)",
 "code": "4MA1",
 "level": "GCSE",
 "version": "Specification – Issue 2 – November 2017; for first teaching September 2016, first examination June 2018",
 "firstExam": 2018,
 "essaySubject": false,
 "components": [
  {
   "id": "P1F",
   "name": "Paper 1F (Foundation Tier)",
   "paperCode": "4MA1/1F",
   "marks": 100,
   "weight": 50,
   "minutes": 120,
   "coversAll": true,
   "sections": [
    "Content summary: Number, Algebra, Geometry, Statistics.",
    "Assessed through a 2-hour examination set and marked by Pearson. The total number of marks for the paper is 100. The paper is weighted at 50% of the qualification, targeted at grades 5–1.",
    "Each paper will assess the full range of targeted grades at Foundation Tier (5–1) and will have approximately equal marks available for each of the targeted grades. There will be approximately 40% of questions targeted at grades 5 and 4, across papers 1F and 1H to aid standardisation and comparability of award between tiers.",
    "Externally assessed; availability January and June; first assessment June 2018. Both examinations must be taken in the same series at the end of the course of study.",
    "A Foundation Tier formulae sheet (Appendix 4: area of trapezium = ½(a + b)h; volume of prism = area of cross section × length; volume of cylinder = πr²h; curved surface area of cylinder = 2πrh) is included in the written examinations. Tracing paper may be used. A calculator may be used. Questions will be set in SI units. Students may be required to use mathematical instruments, e.g. pair of compasses, ruler, protractor. Diagrams will not necessarily be drawn to scale and measurements should not be taken from diagrams unless instructions to this effect are given."
   ]
  },
  {
   "id": "P2F",
   "name": "Paper 2F (Foundation Tier)",
   "paperCode": "4MA1/2F",
   "marks": 100,
   "weight": 50,
   "minutes": 120,
   "coversAll": true,
   "sections": [
    "Content summary: Number, Algebra, Geometry, Statistics.",
    "Assessed through a 2-hour examination set and marked by Pearson. The total number of marks for the paper is 100. The paper is weighted at 50% of the qualification, targeted at grades 5–1.",
    "Each paper will assess the full range of targeted grades at Foundation Tier (5–1) and will have approximately equal marks available for each of the targeted grades. There will be approximately 40% of questions targeted at grades 5 and 4, across papers 2F and 2H, to aid standardisation and comparability of award between tiers.",
    "Externally assessed; availability January and June; first assessment June 2018. The qualification is linear: both papers are taken in the same series at the end of the course of study.",
    "A Foundation Tier formulae sheet (Appendix 4) is included in the written examinations. Tracing paper may be used. A calculator may be used. Questions will be set in SI units."
   ]
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Numbers and algebra",
   "text": "Demonstrate knowledge, understanding and skills in number and algebra: numbers and the numbering system; calculations; solving numerical problems; equations, formulae and identities; sequences, functions and graphs. 57–63% of the International GCSE (28.5–31.5% on papers 1F and 2F together).",
   "weight": 60,
   "byComponent": {
    "P1F": 30,
    "P2F": 30
   }
  },
  {
   "id": "AO2",
   "label": "Shape, space and measures",
   "text": "Demonstrate knowledge, understanding and skills in shape, space and measures: geometry and trigonometry; vectors and transformation geometry. 22–28% of the International GCSE (11–14% on papers 1F and 2F together).",
   "weight": 25,
   "byComponent": {
    "P1F": 12.5,
    "P2F": 12.5
   }
  },
  {
   "id": "AO3",
   "label": "Handling data",
   "text": "Demonstrate knowledge, understanding and skills in handling data: statistics; probability. 12–18% of the International GCSE (6–9% on papers 1F and 2F together).",
   "weight": 15,
   "byComponent": {
    "P1F": 7.5,
    "P2F": 7.5
   }
  }
 ],
 "markConventions": {
  "style": "points",
  "summary": "Every question is point-marked against Pearson's mark scheme, which awards M (method) marks for a correct method or one that would lead to the answer, A (accuracy) marks that are only available once the matching method mark has been earned, and B marks for an independent correct statement or answer that needs no method; dependent marks (dM, dA) are only available if the earlier named mark has been scored, follow-through (ft) credits correct work carried out on an earlier wrong value, cao and cso tighten what is accepted, awrt sets the rounding accepted and isw protects a correct answer from later spoiling. The specification says the mark schemes are deliberately straightforward, so that the assessment requirements are clear. Each paper carries 100 marks in 2 hours (1.2 minutes per mark) and assesses the full range of targeted Foundation Tier grades 5–1, with approximately equal marks available for each targeted grade; approximately 40% of questions are targeted at grades 5 and 4 across papers 1F and 1H (and 2F and 2H) to aid comparability between tiers. Across the qualification AO1 (number and algebra) carries 57–63%, AO2 (shape, space and measures) 22–28% and AO3 (handling data) 12–18%. Of the Foundation Tier marks, 25% assess problem solving and 15% assess mathematical reasoning: students must translate problems in mathematical or non-mathematical contexts into a process or a series of mathematical processes, and must make deductions and draw conclusions from mathematical information, construct chains of reasoning, present arguments and proofs, and interpret and communicate information accurately. A calculator may be used on both papers, so an answer with no working scores only what the scheme allows for the answer alone; a Foundation Tier formulae sheet (Appendix 4) is provided and every other formula must be recalled. Questions are set in SI units, diagrams are not necessarily drawn to scale and measurements must not be taken from them unless the question says so. For level fields, report level 1 for below half marks, 2 for half to two-thirds, 3 for the top third, with maxLevel 3.",
  "commandWords": [
   {
    "word": "Calculate",
    "means": "Work the answer out with a method that can be followed: the method marks sit in the working, and the accuracy mark on the final value, given to the accuracy the question sets. Used throughout the Foundation content — 'calculate a given fraction of a given quantity' (1.2 D), 'Calculate the original price of the item' (1.6 F), 'calculate the exact solution of two simultaneous equations' (2.6 A), 'calculate interior and exterior angles of regular polygons' (4.2 D)."
   },
   {
    "word": "Find",
    "means": "Produce the value asked for, showing enough working for the method mark: 'Find the value of a' (2.4 B), 'Find the missing value in a table' (1.7 D), 'find highest common factors (HCF) and lowest common multiples (LCM)' (1.4 E), 'find the gradient of a straight line' (3.3 G), 'find the area of parallelograms and trapezia' (4.9 D)."
   },
   {
    "word": "Solve",
    "means": "Find every value of the unknown that satisfies the equation or inequality. For a quadratic (2.7 A) both roots are required and the factorised form is the method mark; for an inequality (2.8 C) the solution set must be given in the same inequality notation and, where asked, represented on a number line with the correct open or closed convention."
   },
   {
    "word": "Express / Write as",
    "means": "Rewrite the quantity in the form the question names, with no other change: 'Express in the form 1 : n' (1.7 A), 'express a given number as a fraction of another number' (1.2 E), 'express a given number as a percentage of another number' (1.6 B), 'express integers as a product of powers of prime factors' (1.4 D, e.g. 720 = 2⁴ × 3² × 5). A different form loses the accuracy mark."
   },
   {
    "word": "Factorise / Factorise fully",
    "means": "Write the expression as a product. 'Factorise fully 8xy + 12y²' (2.2 D) means the highest common factor must be taken out — a partial factorisation scores no accuracy mark; 'Factorise x² + 10x + 24' (2.2 F) means the pair of brackets, limited at this tier to x² + bx + c."
   },
   {
    "word": "Expand and simplify",
    "means": "Multiply out the brackets and then collect like terms: 'Expand and simplify (x + 8)(x − 5)' (2.2 E). The expansion earns the method mark and the collected form the accuracy mark, so an unsimplified answer is not complete."
   },
   {
    "word": "Make … the subject",
    "means": "Rearrange the formula so the named letter stands alone on one side, the subject appearing once: 'Make r the subject of A = πr²', 'Make t the subject of v = u + at' (2.3 F). Each correct inverse operation is a method step."
   },
   {
    "word": "Estimate",
    "means": "Give an approximate value by a stated approximating method, not an exact calculation: 'use estimation to evaluate approximations to numerical calculations … by rounding values to 1 significant figure' (1.8 D), 'calculate an estimate for the mean for grouped data' (6.2 C, using midpoints), 'make sensible estimates of a range of measures' (4.4 C), 'estimate probabilities from previously collected data' (6.3 G)."
   },
   {
    "word": "Give reasons",
    "means": "Give informal reasons, where required, when arriving at numerical solutions to geometrical problems (4.7 A). Reasons will only be required for geometrical calculations based on lines (including chords and tangents), triangles or polygons, and each named property quoted (for example 'alternate angles are equal') is what the scheme credits."
   },
   {
    "word": "Construct",
    "means": "Draw accurately with the instruments named and leave the construction arcs visible: 'construct triangles and other two-dimensional shapes using a combination of a ruler, a protractor and compasses' (4.5 B), and 'use straight edge and compasses to construct the perpendicular bisector of a line segment / the bisector of an angle' (4.5 D). Lines are measured and drawn to the nearest millimetre and angles to the nearest degree; a freehand or measured-only answer scores nothing."
   },
   {
    "word": "Interpret",
    "means": "Say what the diagram, graph or number means: 'interpret statistical diagrams' (6.1 C), 'interpret information presented in a range of linear and non-linear graphs' (3.3 A, to include speed/time and distance/time graphs), 'calculate with and interpret numbers in the form a × 10ⁿ' (1.9 A), 'use and interpret maps and scale drawings' (4.11 B). The answer is a statement in the context of the data, with units where they apply."
   },
   {
    "word": "Describe (a transformation)",
    "means": "Identify and give complete descriptions of transformations (5.2 M): the scheme requires the name of the transformation and every element that specifies it — centre and angle and direction for a rotation, the equation of the mirror line for a reflection, the column vector for a translation, and centre and scale factor for an enlargement. A description naming two transformations scores nothing."
   },
   {
    "word": "Shade / Represent",
    "means": "Mark the region or solution set on the given diagram: 'Shade the region defined by the inequalities x ⩾ 0, y ⩾ 1, x + y ⩽ 5' (2.8 D), and represent the solution set of a linear inequality on a number line (2.8 C). Conventions for the inclusion of boundaries are not required on Cartesian graphs (2.8 E), but the open and closed interval convention is required on a number line (2.8 B)."
   },
   {
    "word": "Write down / Name / Identify",
    "means": "A one-step answer read off, recalled or named, carrying B marks only and needing no working: 'Write down the gradient and coordinates of the y intercept of y = 3x + 5' (3.3 H), 'Name a quadrilateral with no lines of symmetry and order of rotational symmetry of 2' (4.3 A), 'identify the modal class for grouped data' (6.2 D), 'recognise and give the names of solids' (4.10 A)."
   },
   {
    "word": "Convert",
    "means": "Change the quantity into the unit or form named, using the correct conversion factor: 'convert a fraction to a decimal or a percentage' (1.2 G), 'convert measurements within the metric system to include linear and area units, e.g. cm² to m²' (4.9 A), 'convert between units of volume within the metric system, e.g. cm³ to m³ and 1 litre = 1000 cm³' (4.10 F), and converting between currencies (1.10 C). Area and volume conversions square and cube the linear factor."
   }
  ],
  "essayShapes": [
   {
    "marks": 3,
    "minutes": 4,
    "structure": "A routine single-technique question (AO1): one content statement, applied directly — factorise, round to 2 significant figures, find the mean of a list, work out an angle from one property. Show the method line the scheme awards the M mark for and give the answer to the accuracy asked for, with units. Minutes are pro rata from the paper: 100 marks in 120 minutes (1.2 minutes per mark)."
   },
   {
    "marks": 5,
    "minutes": 6,
    "structure": "A problem in two or three parts that combines two content statements, typically in a real-life context — a reverse percentage, a ratio share followed by a proportion calculation, an area found from a compound shape, a probability read from a two-way table. Translating the situation into the calculation is the first method mark; each further correct step is another; the final accuracy mark needs the answer in context with its unit. Minutes are pro rata: 100 marks in 120 minutes."
   },
   {
    "marks": 6,
    "minutes": 7,
    "structure": "A multi-step problem-solving and reasoning question, the kind that carries the 25% of Foundation marks for problem solving and the 15% for mathematical reasoning: the problem must be translated into a series of mathematical processes, each stage set out as a chain of reasoning, and the conclusion stated as an answer to the question asked — with the informal geometrical reasons quoted where the question is geometrical (4.7 A) and the deduction drawn explicitly where it is not. Unstructured, so no part-marks are signposted: every intermediate result must be seen. Minutes are pro rata: 100 marks in 120 minutes."
   }
  ]
 },
 "judged": {
  "score": 0.9,
  "coverage": 1,
  "fidelity": 0.9,
  "options": 1,
  "familyFit": 0.9,
  "at": "2026-09-11",
  "by": "self-judged in session against the PDF (Issue 2, November 2017), Foundation Tier content pages 11–25 read page by page and the tables re-read as rendered images"
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf",
  "etag": "W/\"1768a5-65aabda370222\"",
  "lastModified": "Fri, 04 Sep 2026 17:46:47 GMT",
  "length": 1534117,
  "checkedAt": "2026-09-11T17:00:13.943Z"
 },
 "topics": [
  {
   "id": "1.1",
   "component": "P1F",
   "option": null,
   "name": "Integers",
   "caseStudies": [
    "[1.1 C] Use directed numbers in a practical situation, e.g. temperatures: the temperature is −6 °C at midnight and rises by 9 °C by noon — what is the temperature at noon?",
    "[1.1 F] Use brackets and the hierarchy of operations to work out a calculation such as 3 + 4 × (7 − 2)",
    "[1.1 H] Identify the prime factors of a number, and the common factors and common multiples of two numbers"
   ],
   "ideas": [
    {
     "code": "1.1 A",
     "q": "What are the integers and how are they used?",
     "idea": "Integers, positive, negative and zero",
     "content": "Understand and use integers (positive, negative and zero) — the whole numbers with their signs, including zero, used as counts and as directed quantities."
    },
    {
     "code": "1.1 B",
     "q": "What does each digit in a whole number stand for?",
     "idea": "Place value in integers",
     "content": "Understand place value: the value of a digit depends on its position (units, tens, hundreds, thousands …), which is what makes ordering, rounding and column arithmetic work."
    },
    {
     "code": "1.1 C",
     "q": "How are negative numbers used in real situations?",
     "idea": "Directed numbers in practical situations",
     "content": "Use directed numbers in practical situations, e.g. temperatures — also gains and losses, heights above and below sea level; adding and subtracting across zero and interpreting the sign of the result in context."
    },
    {
     "code": "1.1 D",
     "q": "How are integers put in order?",
     "idea": "Ordering integers",
     "content": "Order integers, including negative integers, placing them on a number line and using the symbols for greater than and less than; −7 is less than −3."
    },
    {
     "code": "1.1 E",
     "q": "How are the four operations carried out on integers?",
     "idea": "The four rules with integers",
     "content": "Use the four rules of addition, subtraction, multiplication and division with integers, including negatives, by written method and by calculator, with correct handling of signs."
    },
    {
     "code": "1.1 F",
     "q": "In what order is a calculation carried out?",
     "idea": "Brackets and the hierarchy of operations",
     "content": "Use brackets and the hierarchy of operations: brackets first, then indices, then multiplication and division, then addition and subtraction, so that a multi-step calculation is evaluated in the correct order."
    },
    {
     "code": "1.1 G",
     "q": "What do the number words mean?",
     "idea": "Odd, even, prime, factors and multiples",
     "content": "Use the terms ‘odd’, ‘even’, ’prime numbers’, ‘factors’ and ‘multiples’ correctly, recognising that a prime number has exactly two factors and that 1 is not prime."
    },
    {
     "code": "1.1 H",
     "q": "What do two numbers have in common?",
     "idea": "Prime factors, common factors and common multiples",
     "content": "Identify prime factors, common factors and common multiples of given numbers — the basis of cancelling fractions, of HCF and LCM, and of finding common denominators."
    }
   ]
  },
  {
   "id": "1.2",
   "component": "P1F",
   "option": null,
   "name": "Fractions",
   "caseStudies": [
    "[1.2 A] Write 8/60 in its simplest form (lowest terms): 8/60 = 2/15",
    "[1.2 D] Order a set of fractions and calculate a given fraction of a given quantity",
    "[1.2 F] Work out 2/3 + 5/7, and 3⅕ − 2⅔, using common denominators",
    "[1.2 G] Convert 3/5 to a decimal and a percentage (3/5 = 0.6 = 60%), and 4/9 (4/9 = 0.4444… = 44.4…%)",
    "[1.2 H] Show that 3 ÷ 5 = 3 × 1/5",
    "[1.2 I] Work out 2/3 × 5/7, and 3⅕ ÷ 2⅔"
   ],
   "ideas": [
    {
     "code": "1.2 A",
     "q": "When are two fractions the same, and how is a fraction simplified?",
     "idea": "Equivalent fractions and simplifying",
     "content": "Understand and use equivalent fractions, simplifying a fraction by cancelling common factors: 8/60 = 2/15 in its simplest form (lowest terms)."
    },
    {
     "code": "1.2 B",
     "q": "How are numbers bigger than one written as fractions?",
     "idea": "Mixed numbers and vulgar fractions",
     "content": "Understand and use mixed numbers and vulgar fractions, and convert between them, so that a mixed number can be used in a calculation as an improper (vulgar) fraction."
    },
    {
     "code": "1.2 C",
     "q": "What denominator lets two fractions be combined?",
     "idea": "Common denominators",
     "content": "Identify common denominators of two or more fractions — a common multiple of the denominators, usually the lowest — which is the first step in ordering, adding and subtracting fractions."
    },
    {
     "code": "1.2 D",
     "q": "Which fraction is larger, and what is a fraction of a quantity?",
     "idea": "Ordering fractions and fractions of a quantity",
     "content": "Order fractions and calculate a given fraction of a given quantity, using a common denominator to compare and multiplying by the fraction to find the part of the quantity."
    },
    {
     "code": "1.2 E",
     "q": "How is one number written as a fraction of another?",
     "idea": "One number as a fraction of another",
     "content": "Express a given number as a fraction of another number, writing the part over the whole and cancelling to lowest terms."
    },
    {
     "code": "1.2 F",
     "q": "How are fractions and mixed numbers added and subtracted?",
     "idea": "Adding and subtracting fractions and mixed numbers",
     "content": "Use common denominators to add and subtract fractions and mixed numbers, e.g. 2/3 + 5/7 and 3⅕ − 2⅔; convert mixed numbers to vulgar fractions or deal with the whole-number parts separately."
    },
    {
     "code": "1.2 G",
     "q": "How is a fraction written as a decimal or a percentage?",
     "idea": "Converting a fraction to a decimal or percentage",
     "content": "Convert a fraction to a decimal or a percentage: 3/5 = 0.6 = 60%, 4/9 = 0.4444… = 44.4…%, by dividing numerator by denominator and multiplying by 100."
    },
    {
     "code": "1.2 H",
     "q": "What does dividing by a number do?",
     "idea": "Unit fractions as multiplicative inverses",
     "content": "Understand and use unit fractions as multiplicative inverses: 3 ÷ 5 = 3 × 1/5, so dividing by a number is the same as multiplying by its reciprocal."
    },
    {
     "code": "1.2 I",
     "q": "How are fractions and mixed numbers multiplied and divided?",
     "idea": "Multiplying and dividing fractions and mixed numbers",
     "content": "Multiply and divide fractions and mixed numbers, e.g. 2/3 × 5/7 and 3⅕ ÷ 2⅔: multiply numerators and denominators, and divide by multiplying by the reciprocal, converting mixed numbers first."
    }
   ]
  },
  {
   "id": "1.3",
   "component": "P1F",
   "option": null,
   "name": "Decimals",
   "caseStudies": [
    "[1.3 C] Put a set of decimals in order of size",
    "[1.3 D] Convert a terminating decimal to a fraction and to a percentage",
    "[1.3 E] Show that 0.65 = 65/100 = 13/20"
   ],
   "ideas": [
    {
     "code": "1.3 A",
     "q": "How are decimal numbers written?",
     "idea": "Decimal notation",
     "content": "Use decimal notation, reading and writing numbers with a decimal point and using them in calculation and in measurement."
    },
    {
     "code": "1.3 B",
     "q": "What is each digit after the point worth?",
     "idea": "Place value in decimals",
     "content": "Understand place value in decimals: tenths, hundredths, thousandths, so that digits are aligned correctly when decimals are compared, added or subtracted."
    },
    {
     "code": "1.3 C",
     "q": "Which decimal is larger?",
     "idea": "Ordering decimals",
     "content": "Order decimals by comparing digits from the highest place value downwards, filling in trailing zeros where the numbers have different numbers of decimal places."
    },
    {
     "code": "1.3 D",
     "q": "How is a decimal written as a fraction or percentage?",
     "idea": "Converting a decimal to a fraction or percentage",
     "content": "Convert a decimal to a fraction or a percentage — terminating decimals only at this tier: write the decimal over the matching power of 10 and cancel, or multiply by 100 for a percentage."
    },
    {
     "code": "1.3 E",
     "q": "Why is every terminating decimal a fraction?",
     "idea": "A terminating decimal is a fraction",
     "content": "Recognise that a terminating decimal is a fraction: 0.65 = 65/100 = 13/20, i.e. a fraction whose denominator is a power of ten, cancelled to its simplest form."
    }
   ]
  },
  {
   "id": "1.4",
   "component": "P1F",
   "option": null,
   "name": "Powers and roots",
   "caseStudies": [
    "[1.4 D] Express 720 as a product of powers of prime factors: 720 = 2⁴ × 3² × 5",
    "[1.4 E] Find the highest common factor (HCF) and the lowest common multiple (LCM) of two numbers",
    "[1.4 B] Calculate the square, square root, cube and cube root of a number"
   ],
   "ideas": [
    {
     "code": "1.4 A",
     "q": "Which numbers are squares and cubes?",
     "idea": "Square numbers and cube numbers",
     "content": "Identify square numbers and cube numbers, recognising the sequences 1, 4, 9, 16, … and 1, 8, 27, 64, … and knowing them as the results of squaring and cubing integers."
    },
    {
     "code": "1.4 B",
     "q": "How are squares, cubes and roots worked out?",
     "idea": "Squares, square roots, cubes and cube roots",
     "content": "Calculate squares, square roots, cubes and cube roots, by recall of the common results and with a scientific calculator for the rest."
    },
    {
     "code": "1.4 C",
     "q": "How are powers written and combined?",
     "idea": "Index notation and index laws",
     "content": "Use index notation and index laws for multiplication and division of positive and negative integer powers including zero — add indices when multiplying, subtract when dividing, and use that any non-zero number to the power zero is 1."
    },
    {
     "code": "1.4 D",
     "q": "What are a number's prime building blocks?",
     "idea": "Product of powers of prime factors",
     "content": "Express integers as a product of powers of prime factors, e.g. 720 = 2⁴ × 3² × 5, usually by a factor tree or repeated division by primes."
    },
    {
     "code": "1.4 E",
     "q": "How are the HCF and LCM found?",
     "idea": "Highest common factor and lowest common multiple",
     "content": "Find highest common factors (HCF) and lowest common multiples (LCM) of two or more numbers, from lists of factors and multiples or from their prime factorisations."
    }
   ]
  },
  {
   "id": "1.5",
   "component": "P1F",
   "option": null,
   "name": "Set language and notation",
   "caseStudies": [
    "[1.5 B] Use the set notation ∪, ∩, ∈ and ∉ in a statement about two sets, with E for the universal set and ∅ for the empty set",
    "[1.5 D] Use the notation A′ for the complement of the set A",
    "[1.5 E] Use a Venn diagram to represent two sets and shade the region described"
   ],
   "ideas": [
    {
     "code": "1.5 A",
     "q": "What is a set?",
     "idea": "Definition of a set",
     "content": "Understand the definition of a set — a collection of elements, listed in braces or described by a rule, with n(A) the number of elements in the set A."
    },
    {
     "code": "1.5 B",
     "q": "What do the set symbols mean?",
     "idea": "Set notation ∪, ∩, ∈ and ∉",
     "content": "Use the set notation ∪ (union), ∩ (intersection) and ∈ (is an element of) and ∉ (is not an element of); E = universal set and ∅ = empty set."
    },
    {
     "code": "1.5 C",
     "q": "What are the universal set and the empty set?",
     "idea": "Universal set and empty set",
     "content": "Understand the concept of the universal set and the empty set and the symbols for these sets: E contains every element under consideration and ∅ contains none."
    },
    {
     "code": "1.5 D",
     "q": "What is everything outside a set?",
     "idea": "Complement of a set",
     "content": "Understand and use the complement of a set — use the notation A′ for the elements of the universal set that are not in A, so that n(A) + n(A′) = n(E)."
    },
    {
     "code": "1.5 E",
     "q": "How are sets pictured?",
     "idea": "Venn diagrams to represent sets",
     "content": "Use Venn diagrams to represent sets, with the universal set as the enclosing rectangle, and read unions, intersections and complements as regions of the diagram."
    }
   ]
  },
  {
   "id": "1.6",
   "component": "P1F",
   "option": null,
   "name": "Percentages",
   "caseStudies": [
    "[1.6 D] Show that 15% of 120 = (15/100) × 120",
    "[1.6 F] In a sale, prices were reduced by 30%. The sale price of an item was £17.50. Calculate the original price of the item",
    "[1.6 G] Use compound interest and depreciation to find a value after several years",
    "[1.6 E] Solve a simple percentage increase and decrease problem"
   ],
   "ideas": [
    {
     "code": "1.6 A",
     "q": "What does a percentage mean?",
     "idea": "Percentage as parts per 100",
     "content": "Understand that ‘percentage’ means ‘number of parts per 100’, so a percentage is a fraction with denominator 100 and can be treated as such in any calculation."
    },
    {
     "code": "1.6 B",
     "q": "How is one number written as a percentage of another?",
     "idea": "One number as a percentage of another",
     "content": "Express a given number as a percentage of another number: divide the part by the whole and multiply by 100."
    },
    {
     "code": "1.6 C",
     "q": "How is a percentage written as a fraction or decimal?",
     "idea": "Percentage as a fraction and as a decimal",
     "content": "Express a percentage as a fraction and as a decimal — divide by 100, so 30% = 30/100 = 3/10 = 0.3."
    },
    {
     "code": "1.6 D",
     "q": "How is a percentage of a quantity worked out?",
     "idea": "Percentages as multiplicative operators",
     "content": "Understand the multiplicative nature of percentages as operators: 15% of 120 = (15/100) × 120, so a percentage of a quantity is found by multiplying by the decimal or fractional equivalent."
    },
    {
     "code": "1.6 E",
     "q": "How do percentage increase and decrease work?",
     "idea": "Percentage increase and decrease",
     "content": "Solve simple percentage problems, including percentage increase and decrease, by finding the change and adding or subtracting it, or by a single multiplier such as 1.15 or 0.85."
    },
    {
     "code": "1.6 F",
     "q": "How is the original amount recovered?",
     "idea": "Reverse percentages",
     "content": "Use reverse percentages: in a sale, prices were reduced by 30%; the sale price of an item was £17.50 — calculate the original price of the item by dividing by the multiplier, not by adding the percentage back."
    },
    {
     "code": "1.6 G",
     "q": "What happens when a percentage change repeats?",
     "idea": "Compound interest and depreciation",
     "content": "Use compound interest and depreciation: apply the multiplier once for each period, so the change is calculated on the new amount each time rather than on the original."
    }
   ]
  },
  {
   "id": "1.7",
   "component": "P1F",
   "option": null,
   "name": "Ratio and proportion",
   "caseStudies": [
    "[1.7 A] Express a ratio in the form 1 : n",
    "[1.7 B] Share £416 in the ratio 5 : 3 or 4 : 3 : 1",
    "[1.7 D] s varies directly as t — find the missing value in a table",
    "[1.7 E] Solve a word problem about ratio and proportion, including maps and scale diagrams"
   ],
   "ideas": [
    {
     "code": "1.7 A",
     "q": "How is a ratio written and simplified?",
     "idea": "Ratio notation and its link to fractions",
     "content": "Use ratio notation, including reduction to its simplest form and its various links to fraction notation — express in the form 1 : n, and read a ratio a : b as the fractions a/(a+b) and b/(a+b) of the whole."
    },
    {
     "code": "1.7 B",
     "q": "How is an amount shared in a ratio?",
     "idea": "Dividing a quantity in a given ratio",
     "content": "Divide a quantity in a given ratio or ratios: share £416 in the ratio 5 : 3 or 4 : 3 : 1 — add the parts, divide to find one part, then multiply."
    },
    {
     "code": "1.7 C",
     "q": "How are unknown quantities found by proportion?",
     "idea": "The process of proportionality",
     "content": "Use the process of proportionality to evaluate unknown quantities, for example by the unitary method (find the value of one, then scale) or by a scale factor between the two quantities."
    },
    {
     "code": "1.7 D",
     "q": "What happens when one quantity varies directly as another?",
     "idea": "Direct proportion",
     "content": "Calculate an unknown quantity from quantities that vary in direct proportion — s varies directly as t, so s/t is constant; find the missing value in a table by multiplying by that constant."
    },
    {
     "code": "1.7 E",
     "q": "How are ratio and proportion used in context?",
     "idea": "Word problems about ratio and proportion",
     "content": "Solve word problems about ratio and proportion, including maps and scale diagrams — convert between the scale ratio and real distances, and between recipe quantities for different numbers."
    }
   ]
  },
  {
   "id": "1.8",
   "component": "P1F",
   "option": null,
   "name": "Degree of accuracy",
   "caseStudies": [
    "[1.8 D] Use estimation to evaluate an approximation to a numerical calculation by rounding values to 1 significant figure",
    "[1.8 B] Round a number to a given number of significant figures or decimal places",
    "[1.8 C] Identify the upper and lower bounds of a value given to a degree of accuracy"
   ],
   "ideas": [
    {
     "code": "1.8 A",
     "q": "How are large numbers rounded?",
     "idea": "Rounding to a power of 10",
     "content": "Round integers to a given power of 10 — to the nearest 10, 100, 1000 and so on, looking at the digit to the right of the rounding place."
    },
    {
     "code": "1.8 B",
     "q": "How are numbers rounded to a stated accuracy?",
     "idea": "Significant figures and decimal places",
     "content": "Round to a given number of significant figures or decimal places, counting significant figures from the first non-zero digit and keeping place-holding zeros."
    },
    {
     "code": "1.8 C",
     "q": "How far out can a rounded value be?",
     "idea": "Upper and lower bounds",
     "content": "Identify upper and lower bounds where values are given to a degree of accuracy: a value rounded to the nearest unit lies within half a unit of the stated value, giving a lower bound and an upper bound."
    },
    {
     "code": "1.8 D",
     "q": "How is an answer checked for size?",
     "idea": "Estimation and approximation",
     "content": "Use estimation to evaluate approximations to numerical calculations, by rounding values to 1 significant figure and then calculating, so that a calculator answer can be checked for order of magnitude."
    }
   ]
  },
  {
   "id": "1.9",
   "component": "P1F",
   "option": null,
   "name": "Standard form",
   "caseStudies": [
    "[1.9 A] Write 150 000 000 in standard form: 150 000 000 = 1.5 × 10⁸",
    "[1.9 A Notes] Calculate with numbers written in the form a × 10ⁿ and give the answer in standard form"
   ],
   "ideas": [
    {
     "code": "1.9 A",
     "q": "How are very large and very small numbers calculated with?",
     "idea": "Calculating with numbers in standard form",
     "content": "Calculate with numbers in the form a × 10ⁿ where n is an integer and 1 ⩽ a < 10: multiply and divide by handling the numbers and the powers of ten separately, and add and subtract by first writing both numbers to the same power of ten."
    },
    {
     "code": "1.9 A Notes",
     "q": "How is a number written in, and read from, standard form?",
     "idea": "Interpreting and writing standard form",
     "content": "Interpret numbers in the form a × 10ⁿ, converting between standard form and ordinary form — 150 000 000 = 1.5 × 10⁸ — and check that the answer obeys the conditions 1 ⩽ a < 10 and n an integer, negative n giving a number smaller than 1."
    }
   ]
  },
  {
   "id": "1.10",
   "component": "P1F",
   "option": null,
   "name": "Applying number",
   "caseStudies": [
    "[1.10 B] Carry out a calculation using standard metric units of mass, length, area, volume and capacity",
    "[1.10 C] Carry out a calculation using time, and a calculation using money, including converting between currencies",
    "[1.10 A] Use and apply number in everyday personal, domestic or community life, such as a household bill"
   ],
   "ideas": [
    {
     "code": "1.10 A",
     "q": "Where is number used outside the classroom?",
     "idea": "Number in everyday life",
     "content": "Use and apply number in everyday personal, domestic or community life — bills, wages, best buys, budgets and similar contexts in which the calculation has to be chosen as well as carried out."
    },
    {
     "code": "1.10 B",
     "q": "How are measurements calculated with?",
     "idea": "Calculations with standard units",
     "content": "Carry out calculations using standard units of mass, length, area, volume and capacity — metric units only at this tier — keeping the units consistent through the calculation and stating them in the answer."
    },
    {
     "code": "1.10 C",
     "q": "How are time and money handled?",
     "idea": "Calculations with time, money and currency",
     "content": "Understand and carry out calculations using time, and carry out calculations using money, including converting between currencies — time in hours and minutes rather than decimal hours, and currency by multiplying or dividing by the exchange rate."
    }
   ]
  },
  {
   "id": "1.11",
   "component": "P1F",
   "option": null,
   "name": "Electronic calculators",
   "caseStudies": [
    "[1.11 A] Use a scientific electronic calculator to determine a numerical result, using the memory and brackets to keep a multi-step calculation in one line",
    "[Calculators — Foundation Tier] Check that the calculator has the minimum functions required for papers 1F and 2F, including x², √x, xʸ, x^(1/y), x̄, Σx, Σfx, and sine, cosine and tangent with their inverses"
   ],
   "ideas": [
    {
     "code": "1.11 A",
     "q": "How is a scientific calculator used correctly?",
     "idea": "Using a scientific calculator",
     "content": "Use a scientific electronic calculator to determine numerical results, entering the calculation with brackets so the hierarchy of operations is preserved, using the memory for intermediate values, and rounding only at the end to the accuracy the question asks for."
    },
    {
     "code": "Calculators — Foundation Tier",
     "q": "What must the calculator be able to do?",
     "idea": "Minimum calculator functions for papers 1F and 2F",
     "content": "Students will be expected to have access to a suitable electronic calculator for all examination papers. The electronic calculator to be used by students attempting Foundation Tier examination papers (1F and 2F) should have these functions as a minimum: +, −, ×, ÷, x², √x, memory, brackets, xʸ, x^(1/y), x̄, Σx, Σfx, sine, cosine, tangent and their inverses."
    },
    {
     "code": "Calculators — Prohibitions",
     "q": "Which calculators are not allowed?",
     "idea": "Prohibited calculator facilities",
     "content": "Calculators with any of the following facilities are prohibited in all examinations: databanks; retrieval of text or formulae; QWERTY keyboards; built-in symbolic algebra manipulations; symbolic differentiation or integration."
    }
   ]
  },
  {
   "id": "2.1",
   "component": "P1F",
   "option": null,
   "name": "Use of symbols",
   "caseStudies": [
    "[2.1 C] Write a × a × a as a³, and show that a⁻⁵ = 1/a⁵ and a⁰ = 1",
    "[2.1 D] Use the index laws xᵐ × xⁿ = x^(m+n), xᵐ ÷ xⁿ = x^(m−n) and (xᵐ)ⁿ = x^(mn) to simplify an expression",
    "[2.1 A] Write an expression, an equation and a formula using symbols for the numbers or variables described in words"
   ],
   "ideas": [
    {
     "code": "2.1 A",
     "q": "What do the letters in algebra stand for?",
     "idea": "Symbols for numbers and variables",
     "content": "Understand that symbols may be used to represent numbers in equations or variables in expressions and formulae — a letter in an equation stands for a particular unknown number, while a letter in a formula or expression stands for a quantity that can vary."
    },
    {
     "code": "2.1 B",
     "q": "Why do the rules of arithmetic still apply to letters?",
     "idea": "Algebra as generalised arithmetic",
     "content": "Understand that algebraic expressions follow the generalised rules of arithmetic, so the commutative, associative and distributive rules and the hierarchy of operations apply to letters exactly as they do to numbers."
    },
    {
     "code": "2.1 C",
     "q": "How are repeated products and negative powers written?",
     "idea": "Index notation for integer powers",
     "content": "Use index notation for positive and negative integer powers (including zero): a × a × a = a³; a⁻⁵ = 1/a⁵; a⁰ = 1."
    },
    {
     "code": "2.1 D",
     "q": "How are powers combined?",
     "idea": "The index laws",
     "content": "Use index laws in simple cases: xᵐ × xⁿ = x^(m+n), xᵐ ÷ xⁿ = x^(m−n) and (xᵐ)ⁿ = x^(mn), applied to terms with the same base."
    }
   ]
  },
  {
   "id": "2.2",
   "component": "P1F",
   "option": null,
   "name": "Algebraic manipulation",
   "caseStudies": [
    "[2.2 C] Multiply out 3x(2x + 5)",
    "[2.2 D] Factorise fully 8xy + 12y²",
    "[2.2 E] Expand and simplify (x + 8)(x − 5)",
    "[2.2 F] Factorise x² + 10x + 24",
    "[2.2 A] Evaluate an expression by substituting numerical values for the letters"
   ],
   "ideas": [
    {
     "code": "2.2 A",
     "q": "What is an expression worth for given values?",
     "idea": "Evaluating expressions by substitution",
     "content": "Evaluate expressions by substituting numerical values for letters, replacing each letter by its value in brackets and then applying the hierarchy of operations."
    },
    {
     "code": "2.2 B",
     "q": "Which terms can be added together?",
     "idea": "Collecting like terms",
     "content": "Collect like terms — terms with exactly the same letters and powers — adding and subtracting their coefficients while leaving unlike terms separate."
    },
    {
     "code": "2.2 C",
     "q": "How is a bracket multiplied out?",
     "idea": "Multiplying a single term over a bracket",
     "content": "Multiply a single term over a bracket, e.g. 3x(2x + 5) = 6x² + 15x: every term inside the bracket is multiplied by the term outside, with the index laws applied to the letters."
    },
    {
     "code": "2.2 D",
     "q": "How is a common factor taken out?",
     "idea": "Taking out common factors",
     "content": "Take out common factors: factorise fully 8xy + 12y² = 4y(2x + 3y) — the highest common factor of the coefficients and of the letters must be taken outside the bracket for the answer to be fully factorised."
    },
    {
     "code": "2.2 E",
     "q": "How are two brackets multiplied together?",
     "idea": "Expanding the product of two linear expressions",
     "content": "Expand the product of two simple linear expressions: expand and simplify (x + 8)(x − 5) = x² + 3x − 40, multiplying every term of the first bracket by every term of the second and then collecting like terms."
    },
    {
     "code": "2.2 F",
     "q": "How is a quadratic expression factorised?",
     "idea": "Factorising a quadratic expression",
     "content": "Understand the concept of a quadratic expression and be able to factorise such expressions (limited to x² + bx + c): factorise x² + 10x + 24 = (x + 4)(x + 6) by finding the pair of numbers whose product is c and whose sum is b."
    }
   ]
  },
  {
   "id": "2.3",
   "component": "P1F",
   "option": null,
   "name": "Expressions and formulae",
   "caseStudies": [
    "[2.3 C] Evaluate 2x − 3y when x = 4 and y = −5",
    "[2.3 F] Make r the subject of A = πr²; make t the subject of v = u + at",
    "[2.3 D] Take a formula expressed in words or diagrammatic form and convert it to letters and symbols",
    "[2.3 E] Derive a formula or expression from a described situation"
   ],
   "ideas": [
    {
     "code": "2.3 A",
     "q": "Is the letter an unknown or a variable?",
     "idea": "A letter as an unknown or a variable",
     "content": "Understand that a letter may represent an unknown number or a variable — an unknown has one value to be found, a variable takes a range of values, and which it is depends on whether the statement is an equation or a formula."
    },
    {
     "code": "2.3 B",
     "q": "How is algebra written correctly?",
     "idea": "Notational conventions for algebra",
     "content": "Use correct notational conventions for algebraic expressions and formulae: write 3a rather than a3 or 3 × a, write a² for a × a, and write division as a fraction."
    },
    {
     "code": "2.3 C",
     "q": "What is the value of a formula for given values?",
     "idea": "Substituting into expressions and formulae",
     "content": "Substitute positive and negative integers, decimals and fractions for words and letters in expressions and formulae — evaluate 2x − 3y when x = 4 and y = −5 — using brackets so that signs and powers are handled correctly."
    },
    {
     "code": "2.3 D",
     "q": "How is a rule in words turned into a formula?",
     "idea": "Formulae from mathematics and real-life contexts",
     "content": "Use formulae from mathematics and other real-life contexts expressed initially in words or diagrammatic form and convert to letters and symbols, choosing a letter for each quantity and stating what it represents."
    },
    {
     "code": "2.3 E",
     "q": "How is a formula built from a situation?",
     "idea": "Deriving a formula or expression",
     "content": "Derive a formula or expression from a described situation — identify the quantities, express the relationship between them in symbols, and simplify the result."
    },
    {
     "code": "2.3 F",
     "q": "How is a formula rearranged?",
     "idea": "Changing the subject of a formula",
     "content": "Change the subject of a formula where the subject appears once: make r the subject of A = πr², make t the subject of v = u + at — apply inverse operations to both sides in the reverse of the order in which they were applied."
    }
   ]
  },
  {
   "id": "2.4",
   "component": "P1F",
   "option": null,
   "name": "Linear equations",
   "caseStudies": [
    "[2.4 A] Solve 5x + 8 = 12; solve 7(x + 3) = 5x − 8; solve (4x + 5)/2 = 3",
    "[2.4 B] The three angles of a triangle are a°, (a + 10)°, (a + 20)°. Find the value of a"
   ],
   "ideas": [
    {
     "code": "2.4 A",
     "q": "How is a linear equation solved?",
     "idea": "Solving linear equations in one unknown",
     "content": "Solve linear equations, with integer or fractional coefficients, in one unknown in which the unknown appears on either side or both sides of the equation — 5x + 8 = 12; 7(x + 3) = 5x − 8; (4x + 5)/2 = 3 — by expanding brackets, clearing fractions, collecting the unknown on one side and then using inverse operations."
    },
    {
     "code": "2.4 B",
     "q": "How is an equation built from a problem?",
     "idea": "Setting up linear equations from given data",
     "content": "Set up simple linear equations from given data: the three angles of a triangle are a°, (a + 10)°, (a + 20)° — form an equation from the known total, solve it, and interpret the solution back in the context of the problem."
    }
   ]
  },
  {
   "id": "2.6",
   "component": "P1F",
   "option": null,
   "name": "Simultaneous linear equations",
   "caseStudies": [
    "[2.6 A] Calculate the exact solution of x + y = 14, x − y = 2",
    "[2.6 A Notes] Calculate the exact solution of 2a + 5b = 12, 3a + b = 5"
   ],
   "ideas": [
    {
     "code": "2.6 A",
     "q": "How are two equations in two unknowns solved together?",
     "idea": "Solving two simultaneous equations in two unknowns",
     "content": "Calculate the exact solution of two simultaneous equations in two unknowns, e.g. x + y = 14, x − y = 2: eliminate one unknown by adding or subtracting the equations, solve for the other, then substitute back to find the first. ‘Exact’ means an algebraic solution, not a value read off a graph or found by trial."
    },
    {
     "code": "2.6 A Notes",
     "q": "What if the coefficients do not match?",
     "idea": "Scaling the equations before eliminating",
     "content": "Where neither unknown has matching coefficients, as in 2a + 5b = 12, 3a + b = 5, multiply one or both equations through by a constant so that one unknown has coefficients of equal size, then eliminate as before; both values must be given and can be checked in the equation that was not used for the substitution."
    }
   ]
  },
  {
   "id": "2.7",
   "component": "P1F",
   "option": null,
   "name": "Quadratic equations",
   "caseStudies": [
    "[2.7 A] Solve x² + x − 30 = 0",
    "[2.7 A Notes] Solve a quadratic equation of the form x² + bx + c = 0 by factorisation, giving both roots"
   ],
   "ideas": [
    {
     "code": "2.7 A",
     "q": "How is a quadratic equation solved by factorising?",
     "idea": "Solving quadratic equations by factorisation",
     "content": "Solve quadratic equations by factorisation (limited to x² + bx + c = 0): solve x² + x − 30 = 0 by writing it as (x + 6)(x − 5) = 0 and using that a product is zero only when one of its factors is zero."
    },
    {
     "code": "2.7 A Notes",
     "q": "How many solutions are there, and what counts as a complete answer?",
     "idea": "Both roots of x² + bx + c = 0",
     "content": "At this tier the equation is limited to x² + bx + c = 0, so the coefficient of x² is 1 and the factorisation is a pair of brackets; each bracket gives one root and both roots must be stated. The factorised form is the method the mark scheme looks for, and the roots can be checked by substitution."
    }
   ]
  },
  {
   "id": "2.8",
   "component": "P1F",
   "option": null,
   "name": "Inequalities",
   "caseStudies": [
    "[2.8 A] Write a double-ended inequality such as 1 < x ⩽ 5",
    "[2.8 C] Solve 3x − 2 < 10, so x < 4; solve 7 − x ⩽ 5, so x ⩾ 2; solve 3 < x + 2 ⩽ 5, so 1 < x ⩽ 3",
    "[2.8 D] Shade the region defined by the inequalities x ⩾ 0, y ⩾ 1, x + y ⩽ 5",
    "[2.8 E] Identify the region on a Cartesian graph defined by given simple linear inequalities"
   ],
   "ideas": [
    {
     "code": "2.8 A",
     "q": "What do the inequality symbols mean?",
     "idea": "The symbols >, <, ⩾ and ⩽",
     "content": "Understand and use the symbols >, <, ⩾ and ⩽, to include double-ended inequalities, e.g. 1 < x ⩽ 5, where the strict and non-strict symbols say whether each end value is itself included."
    },
    {
     "code": "2.8 B",
     "q": "How is a solution set drawn on a number line?",
     "idea": "Open and closed intervals on a number line",
     "content": "Understand and use the convention for open and closed intervals on a number line: an open circle for a strict inequality (> or <) where the end value is excluded, a closed circle for ⩾ or ⩽ where it is included."
    },
    {
     "code": "2.8 C",
     "q": "How is a linear inequality solved?",
     "idea": "Solving simple linear inequalities",
     "content": "Solve simple linear inequalities in one variable and represent the solution set on a number line: 3x − 2 < 10, so x < 4; 7 − x ⩽ 5, so x ⩾ 2; 3 < x + 2 ⩽ 5 so 1 < x ⩽ 3 — treat it like an equation, but reverse the inequality symbol if both sides are multiplied or divided by a negative number."
    },
    {
     "code": "2.8 D",
     "q": "How are inequalities shown on a graph?",
     "idea": "Representing linear inequalities on Cartesian graphs",
     "content": "Represent simple linear inequalities on rectangular Cartesian graphs: shade the region defined by the inequalities x ⩾ 0, y ⩾ 1, x + y ⩽ 5 — draw each boundary line and shade the side of it that satisfies the inequality."
    },
    {
     "code": "2.8 E",
     "q": "Which inequalities define a given region?",
     "idea": "Identifying regions defined by inequalities",
     "content": "Identify regions on rectangular Cartesian graphs defined by simple linear inequalities: name the boundary lines by their equations and give the inequality that holds on the shaded side. Conventions for the inclusion of boundaries are not required."
    }
   ]
  },
  {
   "id": "3.1",
   "component": "P1F",
   "option": null,
   "name": "Sequences",
   "caseStudies": [
    "[3.1 B] Find the next terms of 5, 9, 13, 17, … (add 4) and of 1, 2, 4, 8, … (multiply by 2), and state the rule for generating each",
    "[3.1 C] The sequence 1, 3, 5, 7, 9, … has nth term 2n − 1 — find the nth term of a given arithmetic sequence",
    "[3.1 C] The nth term is 4n + 3: write down the first 3 terms of the sequence",
    "[3.1 A] Generate terms of a sequence from a term-to-term and from a position-to-term definition, including odd, even, squares, multiples and powers"
   ],
   "ideas": [
    {
     "code": "3.1 A",
     "q": "How are the terms of a sequence produced?",
     "idea": "Term-to-term and position-to-term definitions",
     "content": "Generate terms of a sequence using term-to-term and position-to-term definitions of the sequence, including odd, even, squares, multiples and powers — a term-to-term rule works from the previous term, a position-to-term rule works from the term number."
    },
    {
     "code": "3.1 B",
     "q": "What comes next, and what is the rule?",
     "idea": "Continuing an integer sequence and finding its rule",
     "content": "Find subsequent terms of an integer sequence and the rule for generating it: 5, 9, 13, 17, … (add 4); 1, 2, 4, 8, … (multiply by 2) — look at the differences or the ratios between consecutive terms."
    },
    {
     "code": "3.1 C",
     "q": "How is the nth term of an arithmetic sequence written?",
     "idea": "The nth term of an arithmetic sequence",
     "content": "Use linear expressions to describe the nth term of arithmetic sequences: 1, 3, 5, 7, 9, … has nth term 2n − 1, where the coefficient of n is the common difference; and, given that the nth term is 4n + 3, write down the first 3 terms of the sequence by substituting n = 1, 2, 3."
    }
   ]
  },
  {
   "id": "3.3",
   "component": "P1F",
   "option": null,
   "name": "Graphs",
   "caseStudies": [
    "[3.3 A] Interpret a speed/time and a distance/time graph",
    "[3.3 E] Determine the coordinates of the midpoint of a line segment, given the coordinates of the two end points",
    "[3.3 F] Draw and interpret a straight line conversion graph, to include currency conversion graphs",
    "[3.3 G] Find the gradient of a straight line as (increase in y) ÷ (increase in x)",
    "[3.3 H] Write down the gradient and coordinates of the y intercept of y = 3x + 5; write down the equation of the straight line with gradient 6 that passes through the point (0, 2)",
    "[3.3 I] Complete a table of values and plot the graph of a linear and of a quadratic function, to include x = k, y = c, y = x, y − x = 0 and equations of the form ax + by = c"
   ],
   "ideas": [
    {
     "code": "3.3 A",
     "q": "What does a graph tell you about the situation?",
     "idea": "Interpreting linear and non-linear graphs",
     "content": "Interpret information presented in a range of linear and non-linear graphs, to include speed/time and distance/time graphs — read values off, describe what a steep, shallow, rising, falling or horizontal section means, and use the gradient as a rate."
    },
    {
     "code": "3.3 B",
     "q": "How are points located on a grid?",
     "idea": "Conventions for rectangular Cartesian coordinates",
     "content": "Understand and use conventions for rectangular Cartesian coordinates: the x coordinate first, then the y coordinate, measured from the origin along the x axis and the y axis."
    },
    {
     "code": "3.3 C",
     "q": "How are points plotted and read off?",
     "idea": "Plotting and locating points in four quadrants",
     "content": "Plot points (x, y) in any of the four quadrants or locate points with given coordinates, handling negative coordinates correctly."
    },
    {
     "code": "3.3 D",
     "q": "What are the coordinates of a point described geometrically?",
     "idea": "Coordinates from geometrical information",
     "content": "Determine the coordinates of points identified by geometrical information — for example the fourth vertex of a rectangle or parallelogram, or a point given by a symmetry or a distance along a line."
    },
    {
     "code": "3.3 E",
     "q": "Where is the middle of a line segment?",
     "idea": "Midpoint of a line segment",
     "content": "Determine the coordinates of the midpoint of a line segment, given the coordinates of the two end points: take the mean of the x coordinates and the mean of the y coordinates."
    },
    {
     "code": "3.3 F",
     "q": "How is a conversion graph used?",
     "idea": "Straight line conversion graphs",
     "content": "Draw and interpret straight line conversion graphs, to include currency conversion graphs — plot two known equivalent values, join them with a straight line through the origin where appropriate, and read conversions off in both directions."
    },
    {
     "code": "3.3 G",
     "q": "How steep is a straight line?",
     "idea": "Gradient of a straight line",
     "content": "Find the gradient of a straight line: gradient = (increase in y) ÷ (increase in x), taken between two points on the line; a line sloping downwards from left to right has a negative gradient."
    },
    {
     "code": "3.3 H",
     "q": "What do m and c tell you about y = mx + c?",
     "idea": "y = mx + c as a straight line",
     "content": "Recognise that equations of the form y = mx + c are straight line graphs with gradient m and intercept on the y-axis at the point (0, c): write down the gradient and coordinates of the y intercept of y = 3x + 5, and write down the equation of the straight line with gradient 6 that passes through the point (0, 2)."
    },
    {
     "code": "3.3 I",
     "q": "How are linear and quadratic graphs drawn?",
     "idea": "Plotting graphs of linear and quadratic functions",
     "content": "Recognise, generate points and plot graphs of linear and quadratic functions, to include x = k, y = c, y = x and y − x = 0, including completion of values in tables and equations of the form ax + by = c; a quadratic gives a smooth parabola through the plotted points."
    }
   ]
  },
  {
   "id": "4.1",
   "component": "P1F",
   "option": null,
   "name": "Angles, lines and triangles",
   "caseStudies": [
    "[4.1 B] Use angles at a point, vertically opposite angles, alternate angles, corresponding angles and allied angles to find a missing angle",
    "[4.1 C] Use the exterior angle of a triangle property and the angle sum of a triangle property to find a missing angle",
    "[4.1 D] Find the missing angles of an isosceles triangle, giving the property used"
   ],
   "ideas": [
    {
     "code": "4.1 A",
     "q": "What are the different kinds of angle called?",
     "idea": "Acute, obtuse, reflex and right angles",
     "content": "Distinguish between acute, obtuse, reflex and right angles — less than 90°, between 90° and 180°, greater than 180°, and exactly 90°."
    },
    {
     "code": "4.1 B",
     "q": "Which angles are equal when lines meet or are parallel?",
     "idea": "Angle properties of intersecting and parallel lines",
     "content": "Use angle properties of intersecting lines, parallel lines and angles on a straight line: angles at a point (360°), angles on a straight line (180°), vertically opposite angles, alternate angles, corresponding angles and allied angles."
    },
    {
     "code": "4.1 C",
     "q": "How do the angles of a triangle relate?",
     "idea": "Angle sum and exterior angle of a triangle",
     "content": "Understand the exterior angle of a triangle property and the angle sum of a triangle property: the three interior angles total 180°, and an exterior angle equals the sum of the two opposite interior angles."
    },
    {
     "code": "4.1 D",
     "q": "What is special about isosceles, equilateral and right-angled triangles?",
     "idea": "Properties of special triangles",
     "content": "Understand the terms ‘isosceles’, ‘equilateral’ and ‘right-angled triangles’ and the angle properties of these triangles: two equal sides and two equal base angles; three equal sides and three 60° angles; one angle of 90° with the other two summing to 90°."
    }
   ]
  },
  {
   "id": "4.2",
   "component": "P1F",
   "option": null,
   "name": "Polygons",
   "caseStudies": [
    "[4.2 B] The four angles of a quadrilateral are 90°, (x + 15)°, (x + 25)° and (x + 35)°. Find the value of x",
    "[4.2 D] Calculate the interior and exterior angles of a regular polygon",
    "[4.2 E] For a polygon with n sides, the sum of the interior angles is (2n − 4) right angles — use this to find a missing angle",
    "[4.2 A] Name the polygons: parallelogram, rectangle, square, rhombus, trapezium, kite, pentagon, hexagon and octagon"
   ],
   "ideas": [
    {
     "code": "4.2 A",
     "q": "What are the polygons called?",
     "idea": "Naming polygons",
     "content": "Recognise and give the names of polygons, to include parallelogram, rectangle, square, rhombus, trapezium, kite, pentagon, hexagon and octagon."
    },
    {
     "code": "4.2 B",
     "q": "What do the angles of a quadrilateral add up to?",
     "idea": "Angle sum of a quadrilateral",
     "content": "Understand and use the term ‘quadrilateral’ and the angle sum property of quadrilaterals — the four interior angles total 360°: the four angles of a quadrilateral are 90°, (x + 15)°, (x + 25)° and (x + 35)°; find the value of x."
    },
    {
     "code": "4.2 C",
     "q": "What are the properties of the special quadrilaterals?",
     "idea": "Properties of the special quadrilaterals",
     "content": "Understand and use the properties of the parallelogram, rectangle, square, rhombus, trapezium and kite — their equal sides, parallel sides, equal angles, diagonals and lines of symmetry."
    },
    {
     "code": "4.2 D",
     "q": "What are the angles of a regular polygon?",
     "idea": "Interior and exterior angles of regular polygons",
     "content": "Understand the term ‘regular polygon’ and calculate interior and exterior angles of regular polygons: the exterior angles total 360°, so each is 360° ÷ n, and each interior angle is 180° − the exterior angle."
    },
    {
     "code": "4.2 E",
     "q": "What do the interior angles of any polygon add up to?",
     "idea": "Angle sum of a polygon",
     "content": "Understand and use the angle sum of polygons: for a polygon with n sides, the sum of the interior angles is (2n − 4) right angles."
    },
    {
     "code": "4.2 F",
     "q": "What does congruent mean?",
     "idea": "Congruence as same shape and size",
     "content": "Understand congruence as meaning the same shape and size — corresponding sides equal and corresponding angles equal, whatever the position or orientation of the shapes."
    },
    {
     "code": "4.2 G",
     "q": "When are two polygons congruent to each other?",
     "idea": "Congruent polygons",
     "content": "Understand that two or more polygons with the same shape and size are said to be congruent to each other, including where one is a reflection or rotation of the other."
    }
   ]
  },
  {
   "id": "4.3",
   "component": "P1F",
   "option": null,
   "name": "Symmetry",
   "caseStudies": [
    "[4.3 A] Name a quadrilateral with no lines of symmetry and order of rotational symmetry of 2",
    "[4.3 A Notes] Identify the lines of symmetry and state the order of rotational symmetry of a given two-dimensional figure"
   ],
   "ideas": [
    {
     "code": "4.3 A",
     "q": "Where are a shape's lines of symmetry?",
     "idea": "Lines of symmetry of a 2D figure",
     "content": "Identify any lines of symmetry of a given two-dimensional figure — each mirror line about which the figure maps onto itself, drawn on the figure; a shape may have none, one or several."
    },
    {
     "code": "4.3 A Notes",
     "q": "How many times does a shape fit onto itself in a turn?",
     "idea": "Order of rotational symmetry",
     "content": "Identify the order of rotational symmetry of a given two-dimensional figure — the number of positions in a full turn in which the figure looks the same, which is at least 1. For example, name a quadrilateral with no lines of symmetry and order of rotational symmetry of 2."
    }
   ]
  },
  {
   "id": "4.4",
   "component": "P1F",
   "option": null,
   "name": "Measures",
   "caseStudies": [
    "[4.4 A] Interpret the scale on a measuring instrument and read off a value",
    "[4.4 B] Calculate a time interval in terms of the 24-hour and the 12-hour clock, using am and pm",
    "[4.4 D] Understand angle measure including three-figure bearings, and give a bearing as a three-figure value",
    "[4.4 F] Use the relationship between average speed, distance and time to find a missing quantity",
    "[4.4 G] Use a compound measure such as speed, density or pressure — the formula for pressure will be given"
   ],
   "ideas": [
    {
     "code": "4.4 A",
     "q": "How is a scale read?",
     "idea": "Interpreting scales on measuring instruments",
     "content": "Interpret scales on a range of measuring instruments, working out the value of each division before reading off, and giving the reading with its unit."
    },
    {
     "code": "4.4 B",
     "q": "How are times and time intervals calculated?",
     "idea": "The 24-hour and 12-hour clock",
     "content": "Calculate time intervals in terms of the 24-hour and the 12-hour clock, using am and pm — counting on in hours and minutes rather than treating times as decimals."
    },
    {
     "code": "4.4 C",
     "q": "Is the measurement reasonable?",
     "idea": "Sensible estimates of measures",
     "content": "Make sensible estimates of a range of measures — lengths, masses, capacities, times and angles — by comparison with a familiar benchmark, and choose an appropriate unit."
    },
    {
     "code": "4.4 D",
     "q": "How is a direction given as an angle?",
     "idea": "Angle measure and three-figure bearings",
     "content": "Understand angle measure including three-figure bearings: a bearing is measured clockwise from north and is always written with three figures, e.g. 075°."
    },
    {
     "code": "4.4 E",
     "q": "How is an angle measured?",
     "idea": "Measuring an angle",
     "content": "Measure an angle to the nearest degree, using a protractor placed with its centre on the vertex and its zero line along one arm, and reading the correct scale."
    },
    {
     "code": "4.4 F",
     "q": "How are speed, distance and time related?",
     "idea": "Average speed, distance and time",
     "content": "Understand and use the relationship between average speed, distance and time: speed = distance ÷ time, with distance = speed × time and time = distance ÷ speed, keeping the units of distance and time consistent."
    },
    {
     "code": "4.4 G",
     "q": "What is a compound measure?",
     "idea": "Compound measures: speed, density and pressure",
     "content": "Use compound measure such as speed, density and pressure — density = mass ÷ volume and pressure = force ÷ area; the formula for pressure will be given. Compound units such as km/h, g/cm³ and N/m² show how the measure is built."
    }
   ]
  },
  {
   "id": "4.5",
   "component": "P1F",
   "option": null,
   "name": "Construction",
   "caseStudies": [
    "[4.5 A] Measure and draw a line to the nearest millimetre",
    "[4.5 B] Construct a triangle from given sides and angles using a combination of a ruler, a protractor and compasses",
    "[4.5 C] Solve a problem using a scale drawing",
    "[4.5 D] Use straight edge and compasses to construct (i) the perpendicular bisector of a line segment and (ii) the bisector of an angle"
   ],
   "ideas": [
    {
     "code": "4.5 A",
     "q": "How accurately must lines be drawn?",
     "idea": "Measuring and drawing lines",
     "content": "Measure and draw lines to the nearest millimetre, using a ruler placed with its zero at the start of the line."
    },
    {
     "code": "4.5 B",
     "q": "How is a shape constructed from given measurements?",
     "idea": "Constructing triangles and other 2D shapes",
     "content": "Construct triangles and other two-dimensional shapes using a combination of a ruler, a protractor and compasses — for example from three sides, from two sides and the included angle, or from two angles and a side."
    },
    {
     "code": "4.5 C",
     "q": "How is a scale drawing used to solve a problem?",
     "idea": "Problems using scale drawings",
     "content": "Solve problems using scale drawings: draw the situation to a stated scale, measure the required length or bearing from the drawing, and convert back to the real quantity using the scale."
    },
    {
     "code": "4.5 D",
     "q": "Which constructions use only straight edge and compasses?",
     "idea": "Perpendicular bisector and angle bisector",
     "content": "Use straight edge and compasses to: (i) construct the perpendicular bisector of a line segment; (ii) construct the bisector of an angle. The construction arcs must be left visible, as they are what shows the method."
    }
   ]
  },
  {
   "id": "4.6",
   "component": "P1F",
   "option": null,
   "name": "Circle properties",
   "caseStudies": [
    "[4.6 A] Label the centre, radius, chord, diameter, circumference, tangent, arc, sector and segment on a circle diagram",
    "[4.6 B] Use the chord and tangent properties: two tangents from a point to a circle are equal in length; tangents are perpendicular to the radius at the point of contact; the line from the centre of a circle which is perpendicular to a chord bisects the chord (and the converse)"
   ],
   "ideas": [
    {
     "code": "4.6 A",
     "q": "What are the parts of a circle called?",
     "idea": "The language of the circle",
     "content": "Recognise the terms ‘centre’, ‘radius’, ‘chord’, ‘diameter’, ‘circumference’, ‘tangent’, ‘arc’, ‘sector’ and ‘segment’ of a circle, and identify each on a diagram."
    },
    {
     "code": "4.6 B",
     "q": "What is true about chords and tangents?",
     "idea": "Chord and tangent properties of circles",
     "content": "Understand chord and tangent properties of circles: two tangents from a point to a circle are equal in length; tangents are perpendicular to the radius at the point of contact; the line from the centre of a circle which is perpendicular to a chord bisects the chord (and the converse)."
    }
   ]
  },
  {
   "id": "4.7",
   "component": "P1F",
   "option": null,
   "name": "Geometrical reasoning",
   "caseStudies": [
    "[4.7 A] Give informal reasons when arriving at a numerical solution to a geometrical problem, naming the property used at each step",
    "[4.7 A Notes] Give reasons for a geometrical calculation based on lines (including chords and tangents), triangles or polygons"
   ],
   "ideas": [
    {
     "code": "4.7 A",
     "q": "How is a geometrical answer justified?",
     "idea": "Giving informal reasons for geometrical solutions",
     "content": "Give informal reasons, where required, when arriving at numerical solutions to geometrical problems — name the property used at each step, for example ‘alternate angles are equal’ or ‘base angles of an isosceles triangle are equal’, so that the chain of reasoning can be followed."
    },
    {
     "code": "4.7 A Notes",
     "q": "Which problems will ask for reasons?",
     "idea": "Where reasons are required",
     "content": "Reasons will only be required for geometrical calculations based on lines (including chords and tangents), triangles or polygons — so the properties to quote are those of 4.1 angles, lines and triangles, 4.2 polygons and 4.6 circle properties, and the reasoning is presented as a chain of deductions leading to the stated conclusion."
    }
   ]
  },
  {
   "id": "4.8",
   "component": "P1F",
   "option": null,
   "name": "Trigonometry and Pythagoras' theorem",
   "caseStudies": [
    "[4.8 A] Use Pythagoras' theorem in two dimensions to find a missing side of a right-angled triangle",
    "[4.8 B] Use sine, cosine and tangent of acute angles to determine a length and an angle of a right-angled triangle",
    "[4.8 C] Apply trigonometrical methods to solve a problem in two dimensions, to include bearings"
   ],
   "ideas": [
    {
     "code": "4.8 A",
     "q": "How are the sides of a right-angled triangle related?",
     "idea": "Pythagoras' theorem in two dimensions",
     "content": "Know, understand and use Pythagoras’ theorem in two dimensions: in a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides, so a missing side is found by adding or subtracting the squares and taking the square root."
    },
    {
     "code": "4.8 B",
     "q": "How are angles and sides linked in a right-angled triangle?",
     "idea": "Sine, cosine and tangent of acute angles",
     "content": "Know, understand and use sine, cosine and tangent of acute angles to determine lengths and angles of a right-angled triangle — label the sides opposite, adjacent and hypotenuse relative to the angle, choose the ratio that uses the two quantities involved, and use the inverse function to find an angle."
    },
    {
     "code": "4.8 C",
     "q": "How is trigonometry used in a problem?",
     "idea": "Trigonometrical methods in two dimensions",
     "content": "Apply trigonometrical methods to solve problems in two dimensions, to include bearings — draw or identify the right-angled triangle in the situation, mark the known sides and angles, and interpret the answer back as a distance, a height or a three-figure bearing."
    }
   ]
  },
  {
   "id": "4.9",
   "component": "P1F",
   "option": null,
   "name": "Mensuration of 2D shapes",
   "caseStudies": [
    "[4.9 A] Convert a measurement within the metric system to include linear and area units, e.g. cm² to m² and vice versa",
    "[4.9 B] Find the perimeter of a shape made from triangles and rectangles",
    "[4.9 C] Find the area of a simple shape using the formulae for the areas of triangles and rectangles",
    "[4.9 D] Find the area of a parallelogram and of a trapezium — area of trapezium = ½(a + b)h is on the Foundation Tier formulae sheet",
    "[4.9 E] Find the circumference and area of a circle using the relevant formulae, and the perimeter and area of a semicircle"
   ],
   "ideas": [
    {
     "code": "4.9 A",
     "q": "How do metric units of length and area convert?",
     "idea": "Converting linear and area units",
     "content": "Convert measurements within the metric system to include linear and area units, e.g. cm² to m² and vice versa — the area conversion factor is the square of the linear one, so 1 m² = 10 000 cm²."
    },
    {
     "code": "4.9 B",
     "q": "How is a perimeter found?",
     "idea": "Perimeter of compound shapes",
     "content": "Find the perimeter of shapes made from triangles and rectangles — the total distance round the outside, working out any unmarked lengths from the ones given."
    },
    {
     "code": "4.9 C",
     "q": "How are the areas of triangles and rectangles found?",
     "idea": "Area of triangles and rectangles",
     "content": "Find the area of simple shapes using the formulae for the areas of triangles and rectangles: area of a rectangle = length × width, area of a triangle = ½ × base × perpendicular height; a compound shape is split into these pieces."
    },
    {
     "code": "4.9 D",
     "q": "How are the areas of parallelograms and trapezia found?",
     "idea": "Area of parallelograms and trapezia",
     "content": "Find the area of parallelograms and trapezia: area of a parallelogram = base × perpendicular height; area of trapezium = ½(a + b)h, which is given on the Foundation Tier formulae sheet (Appendix 4)."
    },
    {
     "code": "4.9 E",
     "q": "How are circumference and area of a circle found?",
     "idea": "Circumference and area of circles and semicircles",
     "content": "Find circumferences and areas of circles using relevant formulae — circumference = πd = 2πr, area = πr² — and find perimeters and areas of semicircles, remembering that the perimeter of a semicircle includes the diameter."
    }
   ]
  },
  {
   "id": "4.10",
   "component": "P1F",
   "option": null,
   "name": "3D shapes and volume",
   "caseStudies": [
    "[4.10 A] Name the solids: cube, cuboid, prism, pyramid, cylinder, sphere and cone",
    "[4.10 C] Find the surface area of a simple solid using the area formulae for triangles and rectangles",
    "[4.10 D] Find the surface area of a cylinder — curved surface area of cylinder = 2πrh is on the Foundation Tier formulae sheet",
    "[4.10 E] Find the volume of a prism, a cuboid and a cylinder using an appropriate formula — volume of prism = area of cross section × length and volume of cylinder = πr²h are on the formulae sheet",
    "[4.10 F] Convert between units of volume within the metric system, e.g. cm³ to m³ and vice versa, and 1 litre = 1000 cm³"
   ],
   "ideas": [
    {
     "code": "4.10 A",
     "q": "What are the solids called?",
     "idea": "Naming solids",
     "content": "Recognise and give the names of solids, to include cube, cuboid, prism, pyramid, cylinder, sphere and cone."
    },
    {
     "code": "4.10 B",
     "q": "What are the parts of a solid called?",
     "idea": "Faces, edges and vertices",
     "content": "Understand the terms ‘face’, ‘edge’ and ‘vertex’ in the context of 3D solids — a face is a flat or curved surface, an edge is where two faces meet and a vertex is a corner where edges meet."
    },
    {
     "code": "4.10 C",
     "q": "How is surface area found?",
     "idea": "Surface area of simple solids",
     "content": "Find the surface area of simple shapes using the area formulae for triangles and rectangles — add the areas of all the faces, using a net or a systematic list so that no face is missed."
    },
    {
     "code": "4.10 D",
     "q": "What is the surface area of a cylinder?",
     "idea": "Surface area of a cylinder",
     "content": "Find the surface area of a cylinder: curved surface area of cylinder = 2πrh, given on the Foundation Tier formulae sheet, plus the two circular ends of area πr² each where the cylinder is closed."
    },
    {
     "code": "4.10 E",
     "q": "How is the volume of a prism found?",
     "idea": "Volume of prisms, cuboids and cylinders",
     "content": "Find the volume of prisms, including cuboids and cylinders, using an appropriate formula: volume of prism = area of cross section × length and volume of cylinder = πr²h, both given on the Foundation Tier formulae sheet."
    },
    {
     "code": "4.10 F",
     "q": "How do metric units of volume convert?",
     "idea": "Converting units of volume",
     "content": "Convert between units of volume within the metric system, e.g. cm³ to m³ and vice versa, and 1 litre = 1000 cm³ — the volume conversion factor is the cube of the linear one, so 1 m³ = 1 000 000 cm³."
    }
   ]
  },
  {
   "id": "4.11",
   "component": "P1F",
   "option": null,
   "name": "Similarity",
   "caseStudies": [
    "[4.11 A] Use the fact that similar figures have corresponding lengths in the same ratio but corresponding angles unchanged to find a missing length",
    "[4.11 B] Use and interpret a map and a scale drawing to find a real distance"
   ],
   "ideas": [
    {
     "code": "4.11 A",
     "q": "What stays the same when a shape is scaled?",
     "idea": "Geometrical properties of similar figures",
     "content": "Understand and use the geometrical properties that similar figures have corresponding lengths in the same ratio but corresponding angles remain unchanged — so a missing length is found by multiplying by the scale factor between corresponding sides."
    },
    {
     "code": "4.11 B",
     "q": "How are maps and scale drawings used?",
     "idea": "Maps and scale drawings",
     "content": "Use and interpret maps and scale drawings — a map or scale drawing is similar to the real situation, so lengths are converted by the scale, expressed as a ratio such as 1 : 25 000 or as a statement such as 1 cm represents 2 km."
    }
   ]
  },
  {
   "id": "5.2",
   "component": "P1F",
   "option": null,
   "name": "Transformation geometry",
   "caseStudies": [
    "[5.2 B] Rotate a shape about a point through a given angle, stating the direction",
    "[5.2 D] Reflect a shape in a mirror line such as x = 1, y = 2, y = x or y − x = 0",
    "[5.2 E] Construct a mirror line given an object and its image, e.g. reflect a triangle in the line y = x",
    "[5.2 H] Translate a shape using a column vector",
    "[5.2 L] Enlarge a shape given the scale factor, with or without a centre given",
    "[5.2 M] Identify and give a complete description of a transformation shown on a grid"
   ],
   "ideas": [
    {
     "code": "5.2 A",
     "q": "What specifies a rotation?",
     "idea": "Rotations specified by a centre and an angle",
     "content": "Understand that rotations are specified by a centre and an angle, so a complete description of a rotation must give both, together with the direction of turn."
    },
    {
     "code": "5.2 B",
     "q": "How is a shape rotated?",
     "idea": "Rotating a shape about a point",
     "content": "Rotate a shape about a point through a given angle, using tracing paper or by rotating each vertex about the centre through the same angle."
    },
    {
     "code": "5.2 C",
     "q": "Which way is a positive rotation?",
     "idea": "The sign convention for rotations",
     "content": "Recognise that an anti-clockwise rotation is a positive angle of rotation and a clockwise rotation is a negative angle of rotation."
    },
    {
     "code": "5.2 D",
     "q": "What specifies a reflection?",
     "idea": "Reflections specified by a mirror line",
     "content": "Understand that reflections are specified by a mirror line, such as x = 1, y = 2, y = x, y − x = 0 — the description must give the equation of that line."
    },
    {
     "code": "5.2 E",
     "q": "How is a reflection carried out or identified?",
     "idea": "Constructing a mirror line and reflecting a shape",
     "content": "Construct a mirror line given an object and reflect a shape given a mirror line, e.g. reflect a triangle in the line y = x — each image point is the same perpendicular distance from the mirror line as its object point, on the opposite side."
    },
    {
     "code": "5.2 F",
     "q": "What specifies a translation?",
     "idea": "Translations specified by distance and direction",
     "content": "Understand that translations are specified by a distance and direction, so the whole shape moves without turning or changing size."
    },
    {
     "code": "5.2 G",
     "q": "How is a shape translated?",
     "idea": "Translating a shape",
     "content": "Translate a shape by moving every vertex the same distance in the same direction, and joining the image points in the same order."
    },
    {
     "code": "5.2 H",
     "q": "How is a translation written down?",
     "idea": "Column vectors in translations",
     "content": "Understand and use column vectors in translations: the top number gives the movement in the x direction and the bottom number the movement in the y direction, negative values meaning left and down."
    },
    {
     "code": "5.2 I",
     "q": "Which transformations leave a shape congruent?",
     "idea": "Rotations, reflections and translations preserve length and angle",
     "content": "Understand that rotations, reflections and translations preserve length and angle so that a transformed shape under any of these transformations remains congruent to the original shape."
    },
    {
     "code": "5.2 J",
     "q": "What specifies an enlargement?",
     "idea": "Enlargements specified by a centre and a scale factor",
     "content": "Understand that enlargements are specified by a centre and a scale factor — positive scale factor only (including fractions), so a fractional scale factor makes the image smaller."
    },
    {
     "code": "5.2 K",
     "q": "What changes and what stays the same in an enlargement?",
     "idea": "Enlargements preserve angles, not lengths",
     "content": "Understand that enlargements preserve angles and not lengths, so the image is similar to the object: every length is multiplied by the scale factor while every angle is unchanged."
    },
    {
     "code": "5.2 L",
     "q": "How is a shape enlarged?",
     "idea": "Enlarging a shape by a scale factor",
     "content": "Enlarge a shape given the scale factor, with or without a centre given: where a centre is given, the distance from the centre to each image point is the scale factor times the distance to the object point."
    },
    {
     "code": "5.2 M",
     "q": "How is a transformation described completely?",
     "idea": "Identifying and describing transformations",
     "content": "Identify and give complete descriptions of transformations: name the transformation and every element that specifies it — centre, angle and direction for a rotation; the equation of the mirror line for a reflection; the column vector for a translation; centre and scale factor for an enlargement."
    }
   ]
  },
  {
   "id": "6.1",
   "component": "P1F",
   "option": null,
   "name": "Graphical representation of data",
   "caseStudies": [
    "[6.1 A] Present a set of data using pictograms, bar charts and pie charts, and only two-way tables",
    "[6.1 B] Tabulate a set of raw data so that a statistical diagram can be constructed from it",
    "[6.1 C] Interpret a statistical diagram and write down what it shows about the data"
   ],
   "ideas": [
    {
     "code": "6.1 A",
     "q": "How can a set of data be displayed?",
     "idea": "Methods of presenting data",
     "content": "Use different methods of presenting data: pictograms, bar charts and pie charts, and only two-way tables — each with a title, labelled axes or a key, and, for a pie chart, angles found from the proportion of the total (fraction of 360°)."
    },
    {
     "code": "6.1 B",
     "q": "How is raw data organised before it is drawn?",
     "idea": "Tabulation for statistical diagrams",
     "content": "Use appropriate methods of tabulation to enable the construction of statistical diagrams — tally charts and frequency tables, grouping continuous data into equal classes, so that the frequencies needed for the diagram are available."
    },
    {
     "code": "6.1 C",
     "q": "What does the diagram tell you?",
     "idea": "Interpreting statistical diagrams",
     "content": "Interpret statistical diagrams: read values off, compare categories or groups, identify the largest and smallest, and state what the diagram shows about the data in context rather than simply describing the picture."
    }
   ]
  },
  {
   "id": "6.2",
   "component": "P1F",
   "option": null,
   "name": "Statistical measures",
   "caseStudies": [
    "[6.2 B] Calculate the mean, median, mode and range for a discrete data set, in a list or in a frequency table",
    "[6.2 C] Calculate an estimate for the mean for grouped data",
    "[6.2 D] Identify the modal class for grouped data",
    "[6.2 A] Solve a simple problem using an average, where the data could be in a list or tabulated form"
   ],
   "ideas": [
    {
     "code": "6.2 A",
     "q": "What is an average for?",
     "idea": "The concept of average",
     "content": "Understand the concept of average as a single value that represents a set of data, where the data could be in a list or tabulated form, and recognise that the mean, median and mode each summarise the data in a different way."
    },
    {
     "code": "6.2 B",
     "q": "How are the averages and the range worked out?",
     "idea": "Mean, median, mode and range for discrete data",
     "content": "Calculate the mean, median, mode and range for a discrete data set — mean = total ÷ number of values, median = the middle value when the data are ordered, mode = the most common value, range = largest − smallest. Includes simple problems using these measures, such as finding a missing value from a given mean."
    },
    {
     "code": "6.2 C",
     "q": "How is the mean found when the data are grouped?",
     "idea": "Estimated mean for grouped data",
     "content": "Calculate an estimate for the mean for grouped data: use the midpoint of each class as the representative value, multiply by the frequency, total these products and divide by the total frequency. It is an estimate because the individual values within each class are not known."
    },
    {
     "code": "6.2 D",
     "q": "Which class is the most common?",
     "idea": "Modal class for grouped data",
     "content": "Identify the modal class for grouped data — the class with the highest frequency, quoted as the class interval rather than as a single value."
    }
   ]
  },
  {
   "id": "6.3",
   "component": "P1F",
   "option": null,
   "name": "Probability",
   "caseStudies": [
    "[6.3 A] Use the language of probability — outcomes, equal likelihood, events, random — to describe a situation",
    "[6.3 B] Place an event on the probability scale, where P(certainty) = 1 and P(impossibility) = 0",
    "[6.3 D] Find a probability from a Venn diagram",
    "[6.3 E] For the tossing of two coins, list the sample space as Heads (H), Tails (T): (H, H), (H, T), (T, H), (T, T), and find the probability of an event from it",
    "[6.3 H] Use P(A′) = 1 − P(A) to calculate the probability of the complement of an event happening",
    "[6.3 I] Use P(Either A or B occurring) = P(A) + P(B) when A and B are mutually exclusive",
    "[6.3 J] Determine an estimate of the number of times an event with a probability of 0.4 will happen over 300 tries"
   ],
   "ideas": [
    {
     "code": "6.3 A",
     "q": "What words are used to talk about chance?",
     "idea": "The language of probability",
     "content": "Understand the language of probability: outcomes, equal likelihood, events, random — an outcome is a single possible result, an event is a set of outcomes, and ‘at random’ means every outcome is equally likely."
    },
    {
     "code": "6.3 B",
     "q": "How is a probability measured?",
     "idea": "The probability scale",
     "content": "Understand and use the probability scale from 0 to 1: P(certainty) = 1 and P(impossibility) = 0, with probabilities written as fractions, decimals or percentages and never outside this range."
    },
    {
     "code": "6.3 C",
     "q": "How is a theoretical probability worked out?",
     "idea": "Probability from theoretical models",
     "content": "Understand and use estimates or measures of probability from theoretical models — for equally likely outcomes, the probability of an event is the number of favourable outcomes divided by the total number of outcomes."
    },
    {
     "code": "6.3 D",
     "q": "How is a probability read from a Venn diagram?",
     "idea": "Probabilities from a Venn diagram",
     "content": "Find probabilities from a Venn diagram: count the elements in the region that matches the event — the intersection, the union or a complement — and divide by the total number in the universal set."
    },
    {
     "code": "6.3 E",
     "q": "What are all the possible outcomes?",
     "idea": "Sample space and event",
     "content": "Understand the concepts of a sample space and an event, and how the probability of an event happening can be determined from the sample space: for the tossing of two coins, the sample space can be listed as Heads (H), Tails (T): (H, H), (H, T), (T, H), (T, T)."
    },
    {
     "code": "6.3 F",
     "q": "How are outcomes listed without missing any?",
     "idea": "Listing outcomes systematically",
     "content": "List all the outcomes for single events and for two successive events in a systematic way — a systematic list, a two-way table or a sample space diagram — so that no outcome is repeated or left out."
    },
    {
     "code": "6.3 G",
     "q": "How is probability estimated from data?",
     "idea": "Estimating probability from collected data",
     "content": "Estimate probabilities from previously collected data: relative frequency = number of times the event happened ÷ total number of trials, an estimate which becomes more reliable as the number of trials increases."
    },
    {
     "code": "6.3 H",
     "q": "What is the probability that an event does not happen?",
     "idea": "Probability of the complement",
     "content": "Calculate the probability of the complement of an event happening: P(A′) = 1 − P(A), because the event either happens or it does not."
    },
    {
     "code": "6.3 I",
     "q": "How are the probabilities of two events combined?",
     "idea": "The addition rule for mutually exclusive events",
     "content": "Use the addition rule of probability for mutually exclusive events: P(Either A or B occurring) = P(A) + P(B) when A and B are mutually exclusive, i.e. when they cannot both happen."
    },
    {
     "code": "6.3 J",
     "q": "How often will the event happen in many trials?",
     "idea": "Expected frequency",
     "content": "Understand and use the term ‘expected frequency’: expected frequency = probability × number of trials — for example, determine an estimate of the number of times an event with a probability of 0.4 will happen over 300 tries."
    }
   ]
  }
 ]
};
module.exports = { SPEC_4MA1 };
