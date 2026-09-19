/* OCR GCSE Mathematics (J560) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_J560 = {
 "id": "OCR-J560",
 "board": "OCR",
 "subject": "Mathematics",
 "code": "J560",
 "level": "GCSE",
 "version": "Cambridge OCR Level 1/Level 2 GCSE (9-1) in Mathematics J560, Specification Version 2.1 (August 2026)",
 "firstExam": 2017,
 "essaySubject": false,
 "components": [
  {
   "id": "C1",
   "name": "Paper 1 (Foundation) / Paper 4 (Higher): calculator",
   "paperCode": "J560/01 or J560/04",
   "marks": 100,
   "weight": 33.33,
   "minutes": 90,
   "coversAll": true,
   "sections": [
    "Written paper, 100 marks, 1 hour 30 minutes, calculator permitted, 33⅓% of the total GCSE (2a). Foundation tier learners sit Paper 1 (J560/01); Higher tier learners sit Paper 4 (J560/04).",
    "Any topic area may be assessed on any component, as relevant at that tier (2b), so every room of this course is attached to this component; no room belongs to one paper.",
    "Three papers at each tier, of equal length with identical mark allocations and identical weightings of assessment objectives and subject content (1c). Learners must take all three papers for the appropriate tier in the same series; learners answer all questions on each paper; learners are expected to support their answers with appropriate working; some questions require an extended response to allow learners to demonstrate the ability to construct and develop a sustained line of mathematical reasoning (3a).",
    "Mark distribution of AO weightings (3g): Foundation papers AO1 50, AO2 25, AO3 25 marks of 100; Higher papers AO1 40, AO2 30, AO3 30 marks of 100.",
    "Tiers (3h): Foundation tier assesses grades 5 to 1 and Higher tier grades 9 to 4; an allowed grade 3 may be awarded on the Higher tier for learners a small number of marks below the grade 3/4 boundary; learners must be entered for either the Foundation tier or the Higher tier.",
    "Learners should have the usual geometric instruments available; tracing paper may also be used to aid with transformations (3a).",
    "Formulae (2b): the assessment will not include a formula sheet; all formulae which learners are required to know are given in the specification under 6.02d, and all other formulae required will be given in the assessment.",
    "Availability (3e): one examination series each year in May/June to all learners, and one in November each year available only to learners who have reached at least the age of 16 on or before 31 August of that calendar year; certificated from the June 2017 series onwards."
   ]
  },
  {
   "id": "C2",
   "name": "Paper 2 (Foundation) / Paper 5 (Higher): non-calculator",
   "paperCode": "J560/02 or J560/05",
   "marks": 100,
   "weight": 33.33,
   "minutes": 90,
   "coversAll": true,
   "sections": [
    "Written paper, 100 marks, 1 hour 30 minutes, calculator NOT permitted, 33⅓% of the total GCSE (2a). Foundation tier learners sit Paper 2 (J560/02); Higher tier learners sit Paper 5 (J560/05).",
    "Learners are not permitted to use a calculator for Paper 2 on the Foundation tier or Paper 5 on the Higher tier (3a); if no reference is made in the specification to calculator use then learners are expected to be able to use both calculator and non-calculator methods, and all content may be assessed on either the calculator or non-calculator papers (2b).",
    "Any topic area may be assessed on any component, as relevant at that tier (2b), so every room of this course is attached to C1; no room belongs to one paper.",
    "Mark distribution of AO weightings (3g): Foundation papers AO1 50, AO2 25, AO3 25 marks of 100; Higher papers AO1 40, AO2 30, AO3 30 marks of 100.",
    "Learners answer all questions and are expected to support their answers with appropriate working; some questions require an extended response (3a)."
   ]
  },
  {
   "id": "C3",
   "name": "Paper 3 (Foundation) / Paper 6 (Higher): calculator",
   "paperCode": "J560/03 or J560/06",
   "marks": 100,
   "weight": 33.33,
   "minutes": 90,
   "coversAll": true,
   "sections": [
    "Written paper, 100 marks, 1 hour 30 minutes, calculator permitted, 33⅓% of the total GCSE (2a). Foundation tier learners sit Paper 3 (J560/03); Higher tier learners sit Paper 6 (J560/06).",
    "Learners are permitted to use a scientific or graphical calculator for Paper 1 and Paper 3 on the Foundation tier or Paper 4 and Paper 6 on the Higher tier, subject to the rules in the JCQ document Instructions for Conducting Examinations (3a).",
    "Any topic area may be assessed on any component, as relevant at that tier (2b), so every room of this course is attached to C1; no room belongs to one paper.",
    "Mark distribution of AO weightings (3g): Foundation papers AO1 50, AO2 25, AO3 25 marks of 100; Higher papers AO1 40, AO2 30, AO3 30 marks of 100.",
    "Calculating qualification results (3j): a learner's overall grade is calculated by adding together the marks from the three components taken to give a total weighted mark out of 300, compared with the qualification-level grade boundaries for the entry option taken."
   ]
  }
 ],
 "options": [
  {
   "id": "tier",
   "label": "Tier — each learner is entered for either Foundation tier (Papers 1, 2 and 3) or Higher tier (Papers 4, 5 and 6)",
   "choose": 1,
   "from": [
    "number-operations",
    "fractions-decimals-percentages",
    "fractions-decimals-percentages-higher",
    "indices-surds",
    "indices-surds-higher",
    "approximation-estimation",
    "ratio-proportion",
    "ratio-proportion-higher",
    "algebra",
    "algebra-higher",
    "graphs",
    "graphs-higher",
    "basic-geometry",
    "basic-geometry-higher",
    "congruence-similarity",
    "congruence-similarity-higher",
    "mensuration",
    "mensuration-higher",
    "probability",
    "probability-higher",
    "statistics",
    "statistics-higher"
   ],
   "routes": {
    "foundation": {
     "name": "Foundation tier (grades 5 to 1): Papers 1, 2 and 3 (J560/01, J560/02, J560/03)",
     "topics": [
      "number-operations",
      "fractions-decimals-percentages",
      "indices-surds",
      "approximation-estimation",
      "ratio-proportion",
      "algebra",
      "graphs",
      "basic-geometry",
      "congruence-similarity",
      "mensuration",
      "probability",
      "statistics"
     ]
    },
    "higher": {
     "name": "Higher tier (grades 9 to 4): Papers 4, 5 and 6 (J560/04, J560/05, J560/06)",
     "topics": [
      "number-operations",
      "fractions-decimals-percentages",
      "fractions-decimals-percentages-higher",
      "indices-surds",
      "indices-surds-higher",
      "approximation-estimation",
      "ratio-proportion",
      "ratio-proportion-higher",
      "algebra",
      "algebra-higher",
      "graphs",
      "graphs-higher",
      "basic-geometry",
      "basic-geometry-higher",
      "congruence-similarity",
      "congruence-similarity-higher",
      "mensuration",
      "mensuration-higher",
      "probability",
      "probability-higher",
      "statistics",
      "statistics-higher"
     ]
    }
   }
  }
 ],
 "ao": [
  {
   "id": "AO1",
   "label": "Use and apply standard techniques",
   "text": "AO1: Use and apply standard techniques. Learners should be able to: accurately recall facts, terminology and definitions; use and interpret notation correctly; accurately carry out routine procedures or set tasks requiring multi-step solutions. Weighting 40% Higher, 50% Foundation (3g); 40 or 50 marks of each 100-mark paper.",
   "byTier": {
    "foundation": 50,
    "higher": 40
   }
  },
  {
   "id": "AO2",
   "label": "Reason, interpret and communicate mathematically",
   "text": "AO2: Reason, interpret and communicate mathematically. Learners should be able to: make deductions, inferences and draw conclusions from mathematical information; construct chains of reasoning to achieve a given result; interpret and communicate information accurately; present arguments and proofs; assess the validity of an argument and critically evaluate a given way of presenting information. Where problems require learners to 'use and apply standard techniques' or to independently 'solve problems' a proportion of those marks should be attributed to the corresponding assessment objective. Weighting 30% Higher, 25% Foundation.",
   "byTier": {
    "foundation": 25,
    "higher": 30
   }
  },
  {
   "id": "AO3",
   "label": "Solve problems within mathematics and in other contexts",
   "text": "AO3: Solve problems within mathematics and in other contexts. Learners should be able to: translate problems in mathematical or non-mathematical contexts into a process or a series of mathematical processes; make and use connections between different parts of mathematics; interpret results in the context of the given problem; evaluate methods used and results obtained; evaluate solutions to identify how they may have been affected by assumptions made. Where problems require learners to 'use and apply standard techniques' or to 'reason, interpret and communicate mathematically' a proportion of those marks should be attributed to the corresponding assessment objective. Weighting 30% Higher, 25% Foundation.",
   "byTier": {
    "foundation": 25,
    "higher": 30
   }
  }
 ],
 "markConventions": {
  "style": "points",
  "summary": "Cover: 'For first assessment in 2017', Specification Version 2.1 (August 2026); the qualification is certificated from the June 2017 series onwards (3e). Six examined components: Papers 1, 2 and 3 at Foundation tier (J560/01, /02, /03) and Papers 4, 5 and 6 at Higher tier (J560/04, /05, /06), each a written paper of 100 marks and 1 hour 30 minutes carrying one third of the marks for that tier (2a, 3a); a learner's total weighted mark is the sum of the three papers, out of 300 (3j). Paper 2 (Foundation) and Paper 5 (Higher) are non-calculator; a scientific or graphical calculator is permitted on Papers 1 and 3 (Foundation) and 4 and 6 (Higher) under the JCQ rules (3a). All content may be assessed on either the calculator or non-calculator papers; where the specification makes no reference to calculator use, both calculator and non-calculator methods are expected (2b). Tiers: Foundation tier assesses grades 5 to 1, Higher tier grades 9 to 4, with an allowed grade 3 on Higher for learners a small number of marks below the 3/4 boundary; a learner is entered for one tier only and takes all three papers of that tier in the same series (3h, 3a). Assessment objectives and their mark distribution on every 100-mark paper: Foundation AO1 50, AO2 25, AO3 25; Higher AO1 40, AO2 30, AO3 30 (3g). Columns and tiers: the content is presented in three cumulative columns — 'Initial learning for this qualification will enable learners to…', 'Foundation tier learners should also be able to…' and 'Higher tier learners should additionally be able to…' — so a Foundation tier learner's expectation is the first two columns and a Higher tier learner's is all three (2b); where content in one column is not further exemplified to its right it may be assessed at a higher level of demand, and exemplars are for illustration only. The twelve Foundation rooms of this course carry the first two columns of each OCR content area; the ten 'Higher tier additions' rooms carry the third column only (OCR 1 Number operations and integers has no Higher-tier-only statements, and OCR 4 Approximation and estimation has a single one, 4.01c bounds of a calculation, which is carried in its Foundation room marked \"(Higher tier additionally: …)\" rather than in a room of its own). Formulae: 'The assessment for this specification will not include a formula sheet. All formulae which learners are required to know are given in the specification under 6.02d. All other formulae required will be given in the assessment' (2b) — 6.02d Recall and use standard formulae lists, by column: Initial learning the circumference (2πr = πd) and area (πr²) of a circle; Foundation also Pythagoras' theorem (a² + b² = c²) and the trigonometry formulae sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent; Higher additionally the quadratic formula x = (−b ± √(b² − 4ac)) / 2a, the sine rule a/sin A = b/sin B = c/sin C, the cosine rule a² = b² + c² − 2bc cos A and Area of a triangle = ½ ab sin C. Outside this document: since 2022 Ofqual has required a formulae sheet to be provided in GCSE Mathematics exams and OCR issues one for each tier for every series; the room kits' Formulae sheets follow 6.02d and the later published sheet together, marking for each result whether it must be recalled, and labelling anything that comes from the post-2022 sheet as coming from outside this specification. Units and measures (2b): learners calculate with 24-hour and 12-hour clock; seconds, minutes, hours, days, months and years (1 year = 365 days); £ and pence, $ and cents, € and cents; degrees; standard units of mass, length, area, volume and capacity and related compound units; and use rulers and protractors to measure lines and angles. Learners answer all questions, are expected to support answers with appropriate working, and some questions require an extended response for a sustained line of mathematical reasoning (3a); questions that draw together different aspects of the subject are synoptic (3i). Marking is by points — there are no levels-marked essays and the specification prints no question tariffs, so essayShapes is empty. The specification prints no command-word list (its page 6 points to OCR's Exploring Our Question Papers guide) and defines no mark types; the command-word meanings below and the mark codes are OCR's published examining practice for this qualification, not the document's own text: M is a method mark, awarded for a correct method or one that would lead to the answer; A is an accuracy mark, dependent on the matching method mark; B is an independent mark for a correct answer or statement needing no method; FT is follow through, crediting correct work on an earlier wrong value; SC is a special case, stated partial credit for a specified wrong response; oe means 'or equivalent', so any equivalent correct form is accepted; dep marks a mark dependent on a named earlier mark; soi means 'seen or implied'. Any correct method scores: an unexpected method that is mathematically correct and complete earns the same marks, so the method line rather than the presentation is credited, and an answer with no working can lose every method mark, particularly on the non-calculator paper. For level fields, report level 1 for below half marks, 2 for half to two-thirds, 3 for the top third, with maxLevel 3.",
  "commandWords": [
   {
    "word": "Calculate",
    "means": "Work the answer out by a method that can be followed; the method marks sit in the working, so show every line, and on the non-calculator paper the written method itself is what is credited."
   },
   {
    "word": "Work out",
    "means": "The same demand as Calculate: obtain the value by a method that can be followed, with the answer in the form and units the question asks for."
   },
   {
    "word": "Solve",
    "means": "Find every value of the unknown that satisfies the equation or inequality, and give them all; for a quadratic that means both roots, for an inequality the full solution set."
   },
   {
    "word": "Simplify",
    "means": "Rewrite in the shortest equivalent form with no further step available: collect like terms, cancel common factors, write surds and fractions in their simplest form."
   },
   {
    "word": "Expand",
    "means": "Multiply out the brackets and collect the like terms afterwards."
   },
   {
    "word": "Factorise",
    "means": "Write the expression as a product, taking out the highest common factor or, for a quadratic, finding the pair of brackets; 'fully' means no further factor can be taken out."
   },
   {
    "word": "Estimate",
    "means": "Give an approximate value by a stated approximating method, usually rounding each number to one significant figure first, rather than an exact calculation."
   },
   {
    "word": "Construct",
    "means": "Draw accurately with the named instruments and leave the construction arcs visible; a construction with no arcs scores no marks."
   },
   {
    "word": "Prove",
    "means": "Set out a complete chain of reasoning from what is given to the stated result, with every step justified; reasons for angle facts must be stated in words."
   },
   {
    "word": "Show that",
    "means": "The same demand as Prove with the result already printed, so nothing may be quoted back: every line of the working that reaches the printed result is needed."
   },
   {
    "word": "Interpret",
    "means": "Say what the number, diagram or graph means in the situation given, in a sentence that refers to the context."
   },
   {
    "word": "Describe",
    "means": "Give every element that specifies the thing named, and nothing else: for a transformation, its type and every parameter (centre, scale factor, vector, angle, direction, line of reflection) in a single description."
   },
   {
    "word": "Draw",
    "means": "Produce an accurate drawing to the instruction given, with instruments where the figure needs them; for a graph, plot accurately and join as the situation requires."
   },
   {
    "word": "Plot",
    "means": "Mark the given points accurately on the axes and join them as the situation requires."
   },
   {
    "word": "Sketch",
    "means": "Show the shape and the key features of a graph without plotting it accurately: intercepts, turning points and asymptotes are what earn the marks."
   },
   {
    "word": "Explain",
    "means": "Give a reason in words, referring to the mathematics that decides it; a bare assertion earns nothing."
   },
   {
    "word": "Write down",
    "means": "State the answer without working; the answer alone carries the mark."
   },
   {
    "word": "Give a reason",
    "means": "State the fact or property that justifies the answer, in the standard wording (for angles, the angle fact by name)."
   }
  ],
  "essayShapes": []
 },
 "source": {
  "url": "https://www.ocr.org.uk/Images/168982-specification-gcse-mathematics.pdf",
  "etag": "\"64e944278446dd1:0\"",
  "lastModified": "Thu, 17 Sep 2026 09:08:49 GMT",
  "length": 19815305,
  "checkedAt": "2026-09-19T17:54:12.168Z"
 },
 "topics": [
  {
   "id": "number-operations",
   "component": "C1",
   "option": null,
   "name": "OCR 1 Number operations and integers",
   "caseStudies": [
    "[1.01a] Work out −8 + 15 − (−6) and 7 × (−4) ÷ 2 without a calculator, showing each step.",
    "[1.02a] State whether 51 is odd, even or prime, then list the factors and the first three multiples of 18.",
    "[1.02b] Express 600 as a product of its prime factors, giving the answer in index form.",
    "[1.02c] Find the HCF and LCM of 24 and 36 by listing their factors and multiples.",
    "[1.03a] Evaluate 5 + 2 × 3² using the correct order of operations, showing which operation is done first.",
    "[1.04a] Use inverse operations to work out 223 − 98 by adding 2 then subtracting 100, and check 25 × 12 by rewriting it as 50 × 6."
   ],
   "ideas": [
    {
     "code": "1.01a",
     "q": "How do I add, subtract, multiply and divide positive and negative whole numbers without a calculator?",
     "idea": "Calculations with integers — Four rules",
     "content": "Initial learning: Use non-calculator methods to calculate the sum, difference, product and quotient of positive and negative whole numbers. DfE ref: N2."
    },
    {
     "code": "1.02a",
     "q": "What do odd, even, prime, factor, multiple and place value actually mean?",
     "idea": "Whole number theory — Definitions and terms",
     "content": "Initial learning: Understand and use the terms odd, even, prime, factor (divisor), multiple, common factor (divisor), common multiple, square, cube, root. Understand and use place value. DfE ref: N2, N4, N6."
    },
    {
     "code": "1.02b",
     "q": "How do I write a number as a product of its prime factors?",
     "idea": "Whole number theory — Prime numbers",
     "content": "Initial learning: Identify prime numbers less than 20. Express a whole number as a product of its prime factors. e.g. 24 = 2 × 2 × 2 × 3 Understand that each number can be expressed as a product of prime factors in only one way. Foundation tier also: Identify prime numbers. Use power notation in expressing a whole number as a product of its prime factors. e.g. 600 = 2³ × 3 × 5² DfE ref: N4, N6."
    },
    {
     "code": "1.02c",
     "q": "How do I find the HCF and LCM of two numbers?",
     "idea": "Whole number theory — Highest Common Factor (HCF) and Lowest Common Multiple (LCM)",
     "content": "Initial learning: Find the HCF and LCM of two whole numbers by listing. Foundation tier also: Find the HCF and LCM of two whole numbers from their prime factorisations. DfE ref: N4."
    },
    {
     "code": "1.03a",
     "q": "What order do I do brackets, powers, roots and the four operations in?",
     "idea": "Combining arithmetic operations — Priority of operations",
     "content": "Initial learning: Know the conventional order for performing calculations involving brackets, four rules and powers, roots and reciprocals. DfE ref: N3."
    },
    {
     "code": "1.04a",
     "q": "How do inverse operations help me check or simplify a calculation?",
     "idea": "Inverse operations — Inverse operations",
     "content": "Initial learning: Know that addition and subtraction, multiplication and division, and powers and roots, are inverse operations and use this to simplify and check calculations, for example, in reversing arithmetic in “I’m thinking of a number” or “missing digit” problems. e.g. 223 – 98 = 223 + 2 – 100 = 125 25 × 12 = 50 × 6 = 100 × 3 = 300 [see also Calculation and estimation of powers and roots, 3.01b] DfE ref: N3, N6."
    }
   ]
  },
  {
   "id": "fractions-decimals-percentages",
   "component": "C1",
   "option": null,
   "name": "OCR 2 Fractions, decimals and percentages",
   "caseStudies": [
    "[2.01a] Show that 2/6 is equivalent to 1/3, and write 2 1/2 as an improper fraction.",
    "[2.01b] Work out 2/5 + 5/6 and 2/3 + 1/2 × 3/5, giving each answer as a fraction in its simplest form.",
    "[2.01c] Find 2/5 of £3.50, then express £6 as a fraction of £15.",
    "[2.02a] Convert 1/6 to a decimal using division, giving the answer with recurring dots.",
    "[2.02b] Work out 4.7 + 2.35 and 3.2 × 0.6 without a calculator.",
    "[2.02c] Work out 0.3 ÷ 0.6 without a calculator, showing the method.",
    "[2.03a] Convert 1/4 to a decimal and a percentage, and write 1 1/2 as a percentage.",
    "[2.03b] Find 15% of £80, then express £12 as a percentage of £40.",
    "[2.03c] Express a 20% price increase as a multiplier, then use it to find the new price of a £45 jacket.",
    "[2.04a] Order 4/5, 3/4, 0.72 and −0.9 from smallest to largest.",
    "[2.04b] Write down whether 3/4 < 0.8 or 3/4 ≥ 0.8 is true, using the correct inequality symbol."
   ],
   "ideas": [
    {
     "code": "2.01a",
     "q": "How do I convert between mixed numbers and equivalent fractions?",
     "idea": "Fractions — Equivalent fractions",
     "content": "Initial learning: Recognise and use equivalence between simple fractions and mixed numbers. e.g. 2/6 = 1/3; 2 1/2 = 5/2. DfE ref: N3."
    },
    {
     "code": "2.01b",
     "q": "How do I add, subtract, multiply and divide fractions, including mixed numbers and negative fractions?",
     "idea": "Fractions — Calculations with fractions",
     "content": "Initial learning: Add, subtract, multiply and divide simple fractions (proper and improper), including mixed numbers and negative fractions. e.g. 1 1/2 + 3/4; 5/6 × 3/10; −3 × 4/5. Foundation tier also: Carry out more complex calculations, including the use of improper fractions. e.g. 2/5 + 5/6; 2/3 + 1/2 × 3/5. DfE ref: N2, N8."
    },
    {
     "code": "2.01c",
     "q": "How do I find a fraction of a quantity, or express one quantity as a fraction of another?",
     "idea": "Fractions — Fractions of a quantity",
     "content": "Initial learning: Calculate a fraction of a quantity. e.g. 2/5 of £3.50. Express one quantity as a fraction of another. [see also Ratios and fractions, 5.01c] Foundation tier also: Calculate with fractions greater than 1. DfE ref: N12, R3, R6."
    },
    {
     "code": "2.02a",
     "q": "How do I convert between a fraction and a decimal?",
     "idea": "Decimal fractions — Decimals and fractions",
     "content": "Initial learning: Express a simple fraction as a terminating decimal or vice versa, without a calculator. e.g. 0.4 = 2/5. Understand and use place value in decimals. Foundation tier also: Use division to convert a simple fraction to a decimal. e.g. 1/6 = 0.16666… DfE ref: N10, N2."
    },
    {
     "code": "2.02b",
     "q": "How do I add, subtract and multiply decimals without a calculator?",
     "idea": "Decimal fractions — Addition, subtraction and multiplication of decimals",
     "content": "Initial learning: Add, subtract and multiply decimals including negative decimals, without a calculator. DfE ref: N2."
    },
    {
     "code": "2.02c",
     "q": "How do I divide by a decimal without a calculator?",
     "idea": "Decimal fractions — Division of decimals",
     "content": "Initial learning: Divide a decimal by a whole number, including negative decimals, without a calculator. e.g. 0.24 ÷ 6. Foundation tier also: Without a calculator, divide a decimal by a decimal. e.g. 0.3 ÷ 0.6. DfE ref: N2."
    },
    {
     "code": "2.03a",
     "q": "How do I convert between fractions, decimals and percentages?",
     "idea": "Percentages — Percentage conversions",
     "content": "Initial learning: Convert between fractions, decimals and percentages. e.g. 1/4 = 0.25 = 25%; 1 1/2 = 150%. DfE ref: R9."
    },
    {
     "code": "2.03b",
     "q": "How do I calculate a percentage of a quantity, or express one quantity as a percentage of another?",
     "idea": "Percentages — Percentage calculations",
     "content": "Initial learning: Understand percentage is ‘number of parts per hundred’. Calculate a percentage of a quantity, and express one quantity as a percentage of another, with or without a calculator. DfE ref: R9, N12."
    },
    {
     "code": "2.03c",
     "q": "How do I increase or decrease a quantity by a percentage, and find an original value?",
     "idea": "Percentages — Percentage change",
     "content": "Initial learning: Increase or decrease a quantity by a simple percentage, including simple decimal or fractional multipliers. Apply this to simple original value problems and simple interest. e.g. Add 10% to £2.50 by either finding 10% and adding, or by multiplying by 1.1 or 110/100. Calculate original price of an item costing £10 after a 50% discount. Foundation tier also: Express percentage change as a decimal or fractional multiplier. Apply this to percentage change problems (including original value problems). [see also Growth and decay, 5.03a] DfE ref: R9, N12."
    },
    {
     "code": "2.04a",
     "q": "How do I put a mix of fractions, decimals and percentages in order of size?",
     "idea": "Ordering fractions, decimals and percentages — Ordinality",
     "content": "Initial learning: Order integers, fractions, decimals and percentages. e.g. 4/5, 3/4, 0.72, −0.9 DfE ref: N1, N2, R9."
    },
    {
     "code": "2.04b",
     "q": "What do the inequality symbols <, >, ≤, ≥, = and ≠ mean?",
     "idea": "Ordering fractions, decimals and percentages — Symbols",
     "content": "Initial learning: Use <, >, ≤, ≥, =, ≠. DfE ref: N1."
    }
   ]
  },
  {
   "id": "fractions-decimals-percentages-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 2 Fractions, decimals and percentages — Higher tier additions",
   "caseStudies": [
    "[2.01b] Simplify 1/(n − 1) + n/(n + 1) as a single fraction in its simplest form.",
    "[2.02a] Convert the recurring decimal 0.4̇1̇ to a fraction in its simplest form."
   ],
   "ideas": [
    {
     "code": "2.01b",
     "q": "How do algebraic fractions build on calculations with numerical fractions?",
     "idea": "Fractions — Calculations with fractions",
     "content": "Higher tier additionally: [see also Algebraic fractions, 6.01g] DfE ref: N2, N8."
    },
    {
     "code": "2.02a",
     "q": "How do I convert a recurring decimal to an exact fraction?",
     "idea": "Decimal fractions — Decimals and fractions",
     "content": "Higher tier additionally: Convert a recurring decimal to an exact fraction or vice versa. e.g. 0.4̇1̇ = 41/99. DfE ref: N10, N2."
    }
   ]
  },
  {
   "id": "indices-surds",
   "component": "C1",
   "option": null,
   "name": "OCR 3 Indices and surds",
   "caseStudies": [
    "[3.01a] Write 2 × 2 × 2 × 2 in index form, then write 5⁻² as a fraction.",
    "[3.01b] Work out 2⁴, √9, ∛8 and 2⁻³, giving each answer as a whole number or fraction.",
    "[3.01c] Simplify a⁵ × a³, b⁷ ÷ b² and (c⁴)³ using the laws of indices.",
    "[3.02a] Write 1320 in standard form, and write 9.43 × 10⁻³ as an ordinary number.",
    "[3.02b] Without a calculator, work out (3.2 × 10⁴) × (2 × 10³), giving the answer in standard form.",
    "[3.03a] Give the circumference of a circle of radius 5 cm as an exact multiple of π."
   ],
   "ideas": [
    {
     "code": "3.01a",
     "q": "How do positive and negative indices work?",
     "idea": "Powers and roots — Index notation",
     "content": "Initial learning: Use positive integer indices to write, for example, 2 × 2 × 2 × 2 = 2⁴. Foundation tier also: Use negative integer indices to represent reciprocals. DfE ref: N6, N7."
    },
    {
     "code": "3.01b",
     "q": "How do I calculate powers and roots, including negative powers?",
     "idea": "Powers and roots — Calculation and estimation of powers and roots",
     "content": "Initial learning: Calculate positive integer powers and exact roots. e.g. 2⁴ = 16, √9 = 3, ∛8 = 2. Recognise simple powers of 2, 3, 4 and 5. e.g. 27 = 3³ [see also Inverse operations, 1.04a] Foundation tier also: Calculate with integer powers. e.g. 2⁻³ = 1/8. Calculate with roots. DfE ref: N6, N7."
    },
    {
     "code": "3.01c",
     "q": "What are the laws of indices for multiplying, dividing and raising a power to a power?",
     "idea": "Powers and roots — Laws of indices",
     "content": "Initial learning: [see also Simplifying products and quotients, 6.01c] Foundation tier also: Know and apply: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ [see also Calculations with numbers in standard form, 3.02b, Simplifying products and quotients, 6.01c] DfE ref: N7, A4."
    },
    {
     "code": "3.02a",
     "q": "How do I convert a number to and from standard form?",
     "idea": "Standard form — Standard form",
     "content": "Initial learning: Interpret and order numbers expressed in standard form. Convert numbers to and from standard form. e.g. 1320 = 1.32 × 10³, 0.00943 = 9.43 × 10⁻³. DfE ref: N9."
    },
    {
     "code": "3.02b",
     "q": "How do I calculate with numbers written in standard form?",
     "idea": "Standard form — Calculations with numbers in standard form",
     "content": "Initial learning: Use a calculator to perform calculations with numbers in standard form. Foundation tier also: Add, subtract, multiply and divide numbers in standard form, without a calculator. [see also Laws of indices, 3.01c] DfE ref: N9."
    },
    {
     "code": "3.03a",
     "q": "How do I keep an answer exact rather than rounding it?",
     "idea": "Exact calculations — Exact calculations",
     "content": "Initial learning: Use fractions in exact calculations without a calculator. Foundation tier also: Use multiples of π in exact calculations without a calculator. DfE ref: N2, N8."
    }
   ]
  },
  {
   "id": "indices-surds-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 3 Indices and surds — Higher tier additions",
   "caseStudies": [
    "[3.01a] Simplify 8^(2/3) using fractional indices, showing the root and power steps.",
    "[3.01b] Evaluate 16^(−3/4) exactly, and estimate √51 to the nearest whole number.",
    "[3.03a] Find the exact area of a right triangle with legs √2 cm and √8 cm, giving the answer in simplified surd form.",
    "[3.03b] Simplify √12 to 2√3, and rationalise the denominators of 1/√3 and 1/(√3 + 1)."
   ],
   "ideas": [
    {
     "code": "3.01a",
     "q": "How do fractional indices represent roots and combinations of powers and roots?",
     "idea": "Powers and roots — Index notation",
     "content": "Higher tier additionally: Use fractional indices to represent roots and combinations of powers and roots. DfE ref: N6, N7."
    },
    {
     "code": "3.01b",
     "q": "How do I calculate a fractional power, or estimate a power or root?",
     "idea": "Powers and roots — Calculation and estimation of powers and roots",
     "content": "Higher tier additionally: Calculate fractional powers. e.g. 16^(−3/4) = 1/(∜16)³ = 1/8. Estimate powers and roots. e.g. √51 to the nearest whole number. DfE ref: N6, N7."
    },
    {
     "code": "3.03a",
     "q": "How do I use surds to keep a calculation exact?",
     "idea": "Exact calculations — Exact calculations",
     "content": "Higher tier additionally: Use surds in exact calculations without a calculator. DfE ref: N2, N8."
    },
    {
     "code": "3.03b",
     "q": "How do I simplify a surd or rationalise a denominator?",
     "idea": "Exact calculations — Manipulating surds",
     "content": "Higher tier additionally: Simplify expressions with surds, including rationalising denominators. e.g. √12 = 2√3; 1/√3 = √3/3; 1/(√3 + 1) = (√3 − 1)/2. DfE ref: N8."
    }
   ]
  },
  {
   "id": "approximation-estimation",
   "component": "C1",
   "option": null,
   "name": "OCR 4 Approximation and estimation",
   "caseStudies": [
    "[4.01a] Round 3846 to the nearest hundred, and round 6.482 to 2 significant figures.",
    "[4.01b] Estimate, to one significant figure, the cost of 2.8 kg of potatoes at 68p per kg, without a calculator.",
    "[4.01c] A length x = 2.1 cm is rounded to 1 dp; write down the error interval for x using inequality notation."
   ],
   "ideas": [
    {
     "code": "4.01a",
     "q": "How do I round a number to a given accuracy?",
     "idea": "Approximation and estimation — Rounding",
     "content": "Initial learning: Round numbers to the nearest whole number, ten, hundred, etc. or to a given number of significant figures (sf) or decimal places (dp). Foundation tier also: Round answers to an appropriate level of accuracy. DfE ref: N15."
    },
    {
     "code": "4.01b",
     "q": "How do I estimate the answer to a calculation without a calculator?",
     "idea": "Approximation and estimation — Estimation",
     "content": "Initial learning: Estimate or check, without a calculator, the result of a calculation by using suitable approximations. e.g. Estimate, to one significant figure, the cost of 2.8 kg of potatoes at 68p per kg. Foundation tier also: Estimate or check, without a calculator, the result of more complex calculations including roots. Use the symbol ≈ appropriately. e.g. √(2.9 / (0.051 × 0.62)) ≈ 10 DfE ref: N14."
    },
    {
     "code": "4.01c",
     "q": "How do I write down the error interval for a rounded or truncated number?",
     "idea": "Approximation and estimation — Upper and lower bounds",
     "content": "Foundation tier also: Use inequality notation to write down an error interval for a number or measurement rounded or truncated to a given degree of accuracy. e.g. If x = 2.1 rounded to 1 dp, then 2.05 ≤ x < 2.15. If x = 2.1 truncated to 1 dp, then 2.1 ≤ x < 2.2. Apply and interpret limits of accuracy. e.g. Determine whether an object can fit into a space, where the width of the object and the width of the space are given to the nearest centimetre. (Higher tier additionally: Calculate the upper and lower bounds of a calculation using numbers rounded to a known degree of accuracy. e.g. Calculate the upper bound of the area of a rectangle, where length and width are given to 1 decimal place. Understand the difference between bounds of discrete and continuous quantities. e.g. If you have 200 cars to the nearest hundred then the number of cars n satisfies: 150 ≤ n < 250 and 150 ≤ n ≤ 249.) DfE ref: N15, N16. Note: OCR 4 has this single Higher-tier statement, so it is carried here, marked, rather than in a Higher-additions room of its own."
    }
   ]
  },
  {
   "id": "ratio-proportion",
   "component": "C1",
   "option": null,
   "name": "OCR 5 Ratio, proportion and rates of change",
   "caseStudies": [
    "[5.01a] Write 50 cm : 1.5 m as a ratio in its simplest form.",
    "[5.01b] Divide £2.50 in the ratio 2 : 3, then divide £60 in the ratio 2 : 3 : 5.",
    "[5.01c] Split £9 in the ratio 2 : 1, expressing each part as a fraction of the whole.",
    "[5.01d] A recipe for 6 people uses 300 g of flour; work out how much flour is needed for 4 people.",
    "[5.02a] Given that y is directly proportional to x and y = 20 when x = 4, find the value of y when x = 9.",
    "[5.02b] Given that y is inversely proportional to x and y = 6 when x = 2, find y when x = 3.",
    "[5.03a] A car worth £15 000 depreciates by 30%, then 20%, then 15% over three years; find its value at the end."
   ],
   "ideas": [
    {
     "code": "5.01a",
     "q": "How do I simplify a ratio, including writing it in the form 1 : n?",
     "idea": "Calculations with ratio — Equivalent ratios",
     "content": "Initial learning: Find the ratio of quantities in the form a : b and simplify. Find the ratio of quantities in the form 1 : n. e.g. \t50 cm : 1.5 m = 50 : 150 = 1 : 3 DfE ref: R5."
    },
    {
     "code": "5.01b",
     "q": "How do I split a quantity into two or more parts in a given ratio?",
     "idea": "Calculations with ratio — Division in a given ratio",
     "content": "Initial learning: Split a quantity into two parts given the ratio of the parts. e.g. £2.50 in the ratio 2 : 3 Express the division of a quantity into two parts as a ratio. Calculate one quantity from another, given the ratio of the two quantities. Foundation tier also: Split a quantity into three or more parts given the ratio of the parts. DfE ref: R5, R6."
    },
    {
     "code": "5.01c",
     "q": "How do I write each part of a ratio as a fraction of the whole?",
     "idea": "Calculations with ratio — Ratios and fractions",
     "content": "Initial learning: Interpret a ratio of two parts as a fraction of a whole. e.g. £9 split in the ratio 2 : 1 gives parts 2/3 × £9 and 1/3 × £9. [see also Fractions of a quantity, 2.01c] DfE ref: N11, R5, R6, R8."
    },
    {
     "code": "5.01d",
     "q": "How do I solve a simple ratio or proportion problem?",
     "idea": "Calculations with ratio — Solve ratio and proportion problems",
     "content": "Initial learning: Solve simple ratio and proportion problems. e.g. Adapt a recipe for 6 for 4 people. Understand the relationship between ratio and linear functions. DfE ref: R5, R8."
    },
    {
     "code": "5.02a",
     "q": "How do I solve a problem where two quantities are in direct proportion?",
     "idea": "Direct and inverse proportion — Direct proportion",
     "content": "Initial learning: Solve simple problems involving quantities in direct proportion including algebraic proportions. e.g. Using equality of ratios, if y ∝ x, then y₁/y₂ = x₁/x₂ or y₁/x₁ = y₂/x₂. Currency conversion problems. [see also Similar shapes, 9.04c] Foundation tier also: Solve more formal problems involving quantities in direct proportion (i.e. where y ∝ x). Recognise that if y = kx, where k is a constant, then y is proportional to x. DfE ref: R7, R10, R13."
    },
    {
     "code": "5.02b",
     "q": "How do I solve a problem where two quantities are in inverse proportion?",
     "idea": "Direct and inverse proportion — Inverse proportion",
     "content": "Initial learning: Solve simple word problems involving quantities in inverse proportion or simple algebraic proportions. e.g. speed–time contexts (if speed is doubled, time is halved). Foundation tier also: Solve more formal problems involving quantities in inverse proportion (i.e. where y ∝ 1/x). Recognise that if y = k/x, where k is a constant, then y is inversely proportional to x. DfE ref: R10, R13."
    },
    {
     "code": "5.03a",
     "q": "How do I calculate simple interest and solve step-by-step growth or decay problems?",
     "idea": "Discrete growth and decay — Growth and decay",
     "content": "Initial learning: Calculate simple interest including in financial contexts. Foundation tier also: Solve problems step-by- step involving multipliers over a given interval, for example, compound interest, depreciation, etc. e.g. A car worth £15 000 new depreciating by 30%, 20% and 15% respectively in three years. [see also Percentage change, 2.03c] DfE ref: R9, R16."
    }
   ]
  },
  {
   "id": "ratio-proportion-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 5 Ratio, proportion and rates of change — Higher tier additions",
   "caseStudies": [
    "[5.02a] Given that y is directly proportional to x² and y = 18 when x = 3, find y when x = 5.",
    "[5.02b] Given that y is inversely proportional to √x and y = 4 when x = 9, find y when x = 25.",
    "[5.03a] Write a formula for £100 invested at 10% p.a. compound interest after n years, then use it to find the value after 5 years."
   ],
   "ideas": [
    {
     "code": "5.02a",
     "q": "How do I solve a problem where one quantity is directly proportional to a power or root of another?",
     "idea": "Direct and inverse proportion — Direct proportion",
     "content": "Higher tier additionally: Formulate equations and solve problems involving a quantity in direct proportion to a power or root of another quantity. DfE ref: R7, R10, R13."
    },
    {
     "code": "5.02b",
     "q": "How do I solve a problem where one quantity is inversely proportional to a power or root of another?",
     "idea": "Direct and inverse proportion — Inverse proportion",
     "content": "Higher tier additionally: Formulate equations and solve problems involving a quantity in inverse proportion to a power or root of another quantity. DfE ref: R10, R13."
    },
    {
     "code": "5.03a",
     "q": "How do I write exponential growth or decay as a formula?",
     "idea": "Discrete growth and decay — Growth and decay",
     "content": "Higher tier additionally: Express exponential growth or decay as a formula. e.g. Amount £A subject to compound interest of 10% p.a. on £100 as A = 100 × 1.1ⁿ. Solve and interpret answers in growth and decay problems. [see also Exponential functions, 7.01d, Formulate algebraic expressions, 6.02a] DfE ref: R9, R16."
    }
   ]
  },
  {
   "id": "algebra",
   "component": "C1",
   "option": null,
   "name": "OCR 6 Algebra",
   "caseStudies": [
    "[6.01a] Show that (x + 1)² + 2 is identically equal to x² + 2x + 3.",
    "[6.01b] Simplify the expression 4a + 3b − a + 2b by collecting like terms.",
    "[6.01c] Simplify a² × a³ and 3a³ ÷ a, showing the index laws used.",
    "[6.01d] Expand and simplify 2(a + 3b) + 3(a − 2b), then expand (x − 1)(x − 2).",
    "[6.01e] Factorise 3a − 9b, then factorise x² − x − 6 fully.",
    "[6.02a] Write a formula for the cost of hiring a car at £50 per day plus 10p per mile driven.",
    "[6.02b] Given v = u + at, find v when u = 7, a = 2 and t = 1.",
    "[6.02c] Make x the subject of the formula y = 3x − 2.",
    "[6.02d] Find the circumference and area of a circle with radius 5 cm, using 2πr and πr².",
    "[6.02e] Given u = 5, a = 2 and t = 3, use v = u + at to find v, then use s = ut + 1/2at² to find s.",
    "[6.03a] Solve the equation 3x − 1 = 5 algebraically.",
    "[6.03b] Solve x² − 5x + 6 = 0 by factorising.",
    "[6.03c] Solve the simultaneous equations 2x + 3y = 18 and y = 3x − 5.",
    "[6.03d] Draw the graph of y = 2x − 1 and use it to find the approximate solution of 2x − 1 = 0.",
    "[6.04a] Solve the inequality 2x + 1 ≥ 7 and show the solution on a number line.",
    "[6.05a] Represent y = 2x + 3 as a function machine, showing the input, the two operations and the output.",
    "[6.06a] Find the next two terms of the sequence 2, 4, 6, …, then find its nth term.",
    "[6.06b] List the first five triangular numbers and the first five square numbers."
   ],
   "ideas": [
    {
     "code": "6.01a",
     "q": "What do expression, equation, formula, identity, term and factor mean, and how do I show two expressions are equivalent?",
     "idea": "Algebraic expressions — Algebraic terminology and proofs",
     "content": "Initial learning: Understand and use the concepts and vocabulary of expressions, equations, formulae, inequalities, terms and factors. Foundation tier also: Recognise the difference between an equation and an identity, and show algebraic expressions are equivalent. e.g. show that (x + 1)² + 2 = x² + 2x + 3. Use algebra to construct arguments. DfE ref: A3, A6."
    },
    {
     "code": "6.01b",
     "q": "How do I simplify an expression by collecting like terms?",
     "idea": "Algebraic expressions — Collecting like terms in sums and differences of terms",
     "content": "Initial learning: Simplify algebraic expressions by collecting like terms. e.g. 2a + 3a = 5a. DfE ref: A1, A3, A4."
    },
    {
     "code": "6.01c",
     "q": "How do I simplify an algebraic product or quotient?",
     "idea": "Algebraic expressions — Simplifying products and quotients",
     "content": "Initial learning: Simplify algebraic products and quotients. e.g. a × a × a = a³; 2a × 3b = 6ab; a² × a³ = a⁵; 3a³ ÷ a = 3a². [see also Laws of indices, 3.01c] DfE ref: N3, A1, A4."
    },
    {
     "code": "6.01d",
     "q": "How do I multiply out a bracket, including a product of two brackets?",
     "idea": "Algebraic expressions — Multiplying out brackets",
     "content": "Initial learning: Simplify algebraic expressions by multiplying a single term over a bracket. e.g. 2(a + 3b) = 2a + 6b; 2(a + 3b) + 3(a − 2b) = 5a. Foundation tier also: Expand products of two binomials. e.g. (x − 1)(x − 2) = x² − 3x + 2; (a + 2b)(a − b) = a² + ab − 2b². DfE ref: A1, A3, A4."
    },
    {
     "code": "6.01e",
     "q": "How do I factorise an expression, including a quadratic?",
     "idea": "Algebraic expressions — Factorising",
     "content": "Initial learning: Take out common factors. e.g. 3a − 9b = 3(a − 3b); 2x + 3x² = x(2 + 3x). Foundation tier also: Factorise quadratic expressions of the form x² + bx + c. e.g. x² − x − 6 = (x − 3)(x + 2); x² − 16 = (x − 4)(x + 4); x² − 3 = (x − √3)(x + √3). DfE ref: A1, A3, A4."
    },
    {
     "code": "6.02a",
     "q": "How do I turn a real-world description into a formula or expression?",
     "idea": "Algebraic formulae — Formulate algebraic expressions",
     "content": "Foundation tier also: Formulate simple formulae and expressions from real- world contexts. e.g.\t \u0007Cost of car hire at £50 per day plus 10p per mile. \u0007The perimeter of a rectangle when the length is 2 cm more than the width. DfE ref: A3, A5, A21, R10."
    },
    {
     "code": "6.02b",
     "q": "How do I substitute numbers into a formula to find its value?",
     "idea": "Algebraic formulae — Substitute numerical values into formulae and expressions",
     "content": "Initial learning: Substitute positive numbers into simple expressions and formulae to find the value of the subject. e.g. Given that v = u + at, find v when t = 1, a = 2 and u = 7. Foundation tier also: Substitute positive or negative numbers into more complex formulae, including powers, roots and algebraic fractions. e.g. v = √(u² + 2as) with u = 2.1, s = 0.18, a = −9.8. DfE ref: A2, A5."
    },
    {
     "code": "6.02c",
     "q": "How do I rearrange a formula to change its subject?",
     "idea": "Algebraic formulae — Change the subject of a formula",
     "content": "Initial learning: Rearrange formulae to change the subject, where the subject appears once only. e.g. Make d the subject of the formula c = πd. Make x the subject of the formula y = 3x − 2. Foundation tier also: Rearrange formulae to change the subject, including cases where the subject appears twice, or where a power or reciprocal of the subject appears. e.g. Make t the subject of the formulae (i) s = (1/2)at² (ii) v = x/t (iii) 2ty = t + 1 DfE ref: A4, A5."
    },
    {
     "code": "6.02d",
     "q": "Which formulae do I need to know by heart for circles, Pythagoras and trigonometry?",
     "idea": "Algebraic formulae — Recall and use standard formulae",
     "content": "Initial learning: Recall and use: Circumference of a circle 2πr = πd; Area of a circle πr². Foundation tier also: Recall and use: Pythagoras’ theorem a² + b² = c²; Trigonometry formulae sin θ = o/h, cos θ = a/h, tan θ = o/a. DfE ref: A2, A3, A5."
    },
    {
     "code": "6.02e",
     "q": "Which kinematics formulae do I need to know for constant acceleration?",
     "idea": "Algebraic formulae — Use kinematics formulae",
     "content": "Initial learning: Use: v = u + at; s = ut + (1/2)at²; v² = u² + 2as; where a is constant acceleration, u is initial velocity, v is final velocity, s is displacement from position when t = 0 and t is time taken. [Knowledge of the definition of each letter will not be required.] DfE ref: A2, A3, A5."
    },
    {
     "code": "6.03a",
     "q": "How do I set up and solve a linear equation, including one with the unknown on both sides?",
     "idea": "Algebraic equations — Linear equations in one unknown",
     "content": "Initial learning: Solve linear equations in one unknown algebraically. e.g. Solve 3x − 1 = 5. Foundation tier also: Set up and solve linear equations in mathematical and non-mathematical contexts, including those with the unknown on both sides of the equation. e.g. Solve 5(x − 1) = 4 − x. Interpret solutions in context. DfE ref: A3, A17, A21."
    },
    {
     "code": "6.03b",
     "q": "How do I solve a quadratic equation by factorising?",
     "idea": "Algebraic equations — Quadratic equations",
     "content": "Foundation tier also: Solve quadratic equations with coefficient of x² equal to 1 by factorising. e.g. Solve x² − 5x + 6 = 0. Find x for an x cm by (x + 3) cm rectangle of area 40cm². DfE ref: A18."
    },
    {
     "code": "6.03c",
     "q": "How do I set up and solve two simultaneous linear equations?",
     "idea": "Algebraic equations — Simultaneous equations",
     "content": "Foundation tier also: Set up and solve two linear simultaneous equations in two variables algebraically. e.g. Solve simultaneously 2x + 3y = 18 and y = 3x − 5. DfE ref: A19, A21."
    },
    {
     "code": "6.03d",
     "q": "How do I use a graph to find an approximate solution to an equation?",
     "idea": "Algebraic equations — Approximate solutions using a graph",
     "content": "Initial learning: Use a graph to find the approximate solution of a linear equation. Foundation tier also: Use graphs to find approximate roots of quadratic equations and the approximate solution of two linear simultaneous equations. DfE ref: A11, A17, A18, A19."
    },
    {
     "code": "6.04a",
     "q": "How do I solve and show a linear inequality on a number line?",
     "idea": "Algebraic inequalities — Inequalities in one variable",
     "content": "Initial learning: Understand and use the symbols <, ≤, > and ≥. Foundation tier also: Solve linear inequalities in one variable, expressing solutions on a number line using the conventional notation. e.g. 2x + 1 ≥ 7; 1 < 3x − 5 ≤ 10. DfE ref: N1, A3, A22."
    },
    {
     "code": "6.05a",
     "q": "How do I read an expression as a function with an input and an output?",
     "idea": "Language of functions — Functions",
     "content": "Initial learning: Interpret, where appropriate, simple expressions as functions with inputs and outputs. e.g. y = 2x + 3 as x → ×2 → +3 → y. DfE ref: A7."
    },
    {
     "code": "6.06a",
     "q": "How do I find a term-to-term or position-to-term rule for a sequence?",
     "idea": "Sequences — Generate terms of a sequence",
     "content": "Initial learning: Generate a sequence by spotting a pattern or using a term-to-term rule given algebraically or in words. e.g. Continue the sequences 1, 4, 7, 10, … ; 1, 4, 9, 16, … Find a position-to-term rule for simple arithmetic sequences, algebraically or in words. e.g. 2, 4, 6, … → 2n; 3, 4, 5, … → n + 2. Foundation tier also: Generate a sequence from a formula for the nth term. e.g. nth term = n² + 2n gives 3, 8, 15, … Find a formula for the nth term of an arithmetic sequence. e.g. 40, 37, 34, 31, … → 43 − 3n. DfE ref: A23, A25."
    },
    {
     "code": "6.06b",
     "q": "How do I recognise a triangular, square, cube, Fibonacci or geometric sequence?",
     "idea": "Sequences — Special sequences",
     "content": "Initial learning: Recognise sequences of triangular, square and cube numbers, and simple arithmetic progressions. Foundation tier also: Recognise Fibonacci and quadratic sequences, and simple geometric progressions (rn where n is an integer and r is a rational number > 0). DfE ref: A24."
    }
   ]
  },
  {
   "id": "algebra-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 6 Algebra — Higher tier additions",
   "caseStudies": [
    "[6.01a] Prove algebraically that the sum of three consecutive integers is always a multiple of 3.",
    "[6.01c] Simplify a^(1/2) × 2a⁻³, and simplify 2a²b³ ÷ 4a⁻³b, using the laws of indices.",
    "[6.01d] Expand and simplify (x + 1)(x − 1)(2x + 1).",
    "[6.01e] Factorise 2x² + 3x − 2 fully.",
    "[6.01f] Complete the square for x² + 4x − 6, giving the answer in the form (x + p)² + q.",
    "[6.01g] Write 1/(n − 1) + n/(n + 1) as a single fraction in its simplest form.",
    "[6.02a] Formulate a formula for a quantity inversely proportional to the square of another, then use given values to find the constant of proportionality.",
    "[6.02c] Make x the subject of the formula y = 3/(x − 2), simplifying the algebraic fraction that results.",
    "[6.02d] State the quadratic formula, then use it to solve 2x² − 5x + 1 = 0.",
    "[6.03a] Solve the equation 3/(x + 1) + 2/(x − 1) = 1, simplifying the algebraic fractions first.",
    "[6.03b] Solve 2x² = 3x + 5, rearranging into the form ax² + bx + c = 0 and using the quadratic formula.",
    "[6.03c] Solve simultaneously x² + y² = 50 and 2y = x + 5.",
    "[6.03d] Find the coordinates where the line y = x + 1 intersects the curve y = x² − 2 by solving the equations simultaneously.",
    "[6.03e] Use a decimal search between x = 1 and x = 2 to find an approximate solution to x³ − x − 1 = 0 to 2 decimal places.",
    "[6.04a] Solve the inequality x² − 2x < 3, giving the answer in set notation.",
    "[6.04b] Represent the solution set of y ≥ x + 1 and y < 2x on a graph, shading the required region.",
    "[6.05a] Given the function that doubles a number then adds 3, find the inverse function that reverses this process.",
    "[6.06a] Find the nth term of the quadratic sequence 0, 3, 10, 21, …",
    "[6.06b] Find the next two terms and the nth term of the sequence 1, √2, 2, 2√2, …"
   ],
   "ideas": [
    {
     "code": "6.01a",
     "q": "How do I use algebra to prove a general result?",
     "idea": "Algebraic expressions — Algebraic terminology and proofs",
     "content": "Higher tier additionally: Use algebra to construct proofs and arguments. e.g.\t \u0007prove that the sum of three consecutive integers is a multiple of 3. DfE ref: A3, A6."
    },
    {
     "code": "6.01c",
     "q": "How do I simplify a product or quotient using the laws of indices with negative and fractional powers?",
     "idea": "Algebraic expressions — Simplifying products and quotients",
     "content": "Higher tier additionally: Simplify algebraic products and quotients using the laws of indices. e.g. a^(1/2) × 2a⁻³ = 2a^(−5/2); 2a²b³ ÷ 4a⁻³b = (1/2)a⁵b². DfE ref: N3, A1, A4."
    },
    {
     "code": "6.01d",
     "q": "How do I expand a product of more than two brackets?",
     "idea": "Algebraic expressions — Multiplying out brackets",
     "content": "Higher tier additionally: Expand products of more than two binomials. e.g. (x + 1)(x − 1)(2x + 1) = 2x³ + x² − 2x − 1. DfE ref: A1, A3, A4."
    },
    {
     "code": "6.01e",
     "q": "How do I factorise a quadratic where the coefficient of x² isn't 1?",
     "idea": "Algebraic expressions — Factorising",
     "content": "Higher tier additionally: Factorise quadratic expressions of the form ax² + bx + c (where a ≠ 0 or 1). e.g. 2x² + 3x − 2 = (2x − 1)(x + 2). DfE ref: A1, A3, A4."
    },
    {
     "code": "6.01f",
     "q": "How do I complete the square on a quadratic expression?",
     "idea": "Algebraic expressions — Completing the square",
     "content": "Higher tier additionally: Complete the square on a quadratic expression. e.g. x² + 4x − 6 = (x + 2)² − 10; 2x² + 5x + 1 = 2(x + 5/4)² − 17/8. DfE ref: A11, A18."
    },
    {
     "code": "6.01g",
     "q": "How do I simplify or combine algebraic fractions?",
     "idea": "Algebraic expressions — Algebraic fractions",
     "content": "Higher tier additionally: Simplify and manipulate algebraic fractions. e.g. Write 1/(n − 1) + n/(n + 1) as a single fraction. Simplify (n² + 2n)/(n² + n − 2). DfE ref: A1, A4."
    },
    {
     "code": "6.02a",
     "q": "How does formulating a formula link to proportion and growth and decay problems?",
     "idea": "Algebraic formulae — Formulate algebraic expressions",
     "content": "Higher tier additionally: [see, for example, Direct proportion, 5.02a, Inverse proportion, 5.02b, Growth and decay, 5.03a] DfE ref: A3, A5, A21, R10."
    },
    {
     "code": "6.02c",
     "q": "How does rearranging a formula involve manipulating an algebraic fraction?",
     "idea": "Algebraic formulae — Change the subject of a formula",
     "content": "Higher tier additionally: [Examples may include manipulation of algebraic fractions, 6.01g] DfE ref: A4, A5."
    },
    {
     "code": "6.02d",
     "q": "Which formulae do I need to know by heart for the quadratic formula, the sine and cosine rules, and the area of a triangle?",
     "idea": "Algebraic formulae — Recall and use standard formulae",
     "content": "Higher tier additionally: Recall and use: The quadratic formula x = (−b ± √(b² − 4ac)) / 2a; Sine rule a/sin A = b/sin B = c/sin C; Cosine rule a² = b² + c² − 2bc cos A; Area of a triangle (1/2)ab sin C. DfE ref: A2, A3, A5."
    },
    {
     "code": "6.03a",
     "q": "How does solving a linear equation involve manipulating an algebraic fraction?",
     "idea": "Algebraic equations — Linear equations in one unknown",
     "content": "Higher tier additionally: [Examples may include manipulation of algebraic fractions, 6.01g] DfE ref: A3, A17, A21."
    },
    {
     "code": "6.03b",
     "q": "How do I solve a quadratic equation by completing the square or using the quadratic formula?",
     "idea": "Algebraic equations — Quadratic equations",
     "content": "Higher tier additionally: Know the quadratic formula. Rearrange and solve quadratic equations by factorising, completing the square or using the quadratic formula. e.g. 2x² = 3x + 5; 2/x − 2/(x + 1) = 1. DfE ref: A18."
    },
    {
     "code": "6.03c",
     "q": "How do I set up and solve two simultaneous equations when one is a quadratic?",
     "idea": "Algebraic equations — Simultaneous equations",
     "content": "Higher tier additionally: Set up and solve two simultaneous equations in two variables algebraically (including where one is a quadratic or that result in a quadratic). e.g. Solve simultaneously x² + y² = 50 and 2y = x + 5. DfE ref: A19, A21."
    },
    {
     "code": "6.03d",
     "q": "How do the points where a line crosses a curve relate to a pair of simultaneous equations?",
     "idea": "Algebraic equations — Approximate solutions using a graph",
     "content": "Higher tier additionally: Know that the coordinates of the points of intersection of a curve and a straight line are the solutions to the simultaneous equations for the line and curve. DfE ref: A11, A17, A18, A19."
    },
    {
     "code": "6.03e",
     "q": "How do I find an approximate solution to an equation by decimal search or interval bisection?",
     "idea": "Algebraic equations — Approximate solutions by iteration",
     "content": "Higher tier additionally: Find approximate solutions to equations using systematic sign-change methods (for example, decimal search or interval bisection) when there is no simple analytical method of solving them. Specific methods will not be requested in the assessment. DfE ref: A20, R16."
    },
    {
     "code": "6.04a",
     "q": "How do I solve a quadratic inequality and write the solution in set notation?",
     "idea": "Algebraic inequalities — Inequalities in one variable",
     "content": "Higher tier additionally: Solve quadratic inequalities in one variable. e.g. x² − 2x < 3. Express solutions in set notation. e.g. {x : x ≥ 3}; {x : 2 < x ≤ 5}. [see also Polynomial and reciprocal functions, 7.01c] DfE ref: N1, A3, A22."
    },
    {
     "code": "6.04b",
     "q": "How do I show the solution to several linear inequalities in two variables on a graph?",
     "idea": "Algebraic inequalities — Inequalities in two variables",
     "content": "Higher tier additionally: Solve (several) linear inequalities in two variables, representing the solution set on a graph. [see also Straight line graphs, 7.02a] DfE ref: A22."
    },
    {
     "code": "6.05a",
     "q": "What is an inverse function, and what is a composite function?",
     "idea": "Language of functions — Functions",
     "content": "Higher tier additionally: Interpret the reverse process as the ‘inverse function’. Interpret the succession of two functions as a ‘composite function’. [Knowledge of function notation will not be required] [see also Translations and reflections, 7.03a] DfE ref: A7."
    },
    {
     "code": "6.06a",
     "q": "How do I use subscript notation for a sequence, and find the nth term of a quadratic sequence?",
     "idea": "Sequences — Generate terms of a sequence",
     "content": "Higher tier additionally: Use subscript notation for position-to-term and term-to-term rules. e.g. xₙ = n + 2; xₙ₊₁ = 2xₙ − 3. Find a formula for the nth term of a quadratic sequence. e.g. 0, 3, 10, 21, … → uₙ = 2n² − 3n + 1. DfE ref: A23, A25."
    },
    {
     "code": "6.06b",
     "q": "How do I find the nth term of a sequence that isn't arithmetic, quadratic or geometric?",
     "idea": "Sequences — Special sequences",
     "content": "Higher tier additionally: Generate and find nth terms of other sequences. e.g. 1, √2, 2, 2√2, …; 1/2, 2/3, 3/4, … DfE ref: A24."
    }
   ]
  },
  {
   "id": "graphs",
   "component": "C1",
   "option": null,
   "name": "OCR 7 Graphs of equations and functions",
   "caseStudies": [
    "[7.01a] Plot the point (−3, 2) on a coordinate grid and state which quadrant it lies in.",
    "[7.01b] Draw up a table of values and plot the graph of y = 2x² + 1 for x from −3 to 3.",
    "[7.01c] Sketch the graph of y = x², labelling its turning point, then find the roots of x² − 5x + 6 = 0 algebraically.",
    "[7.02a] Find the gradient and y-intercept of the line y = 3x − 2, then find the equation of the line through (1, 4) with gradient 2.",
    "[7.02b] Find the equation of the line through (0, 3) that is parallel to y = 2x − 1.",
    "[7.04a] Sketch a distance-time graph for a car travelling at constant speed, stopping, then returning at a different constant speed.",
    "[7.04b] Find the gradient of a distance-time graph over the interval 0 to 4 seconds and interpret it as a velocity in m/s."
   ],
   "ideas": [
    {
     "code": "7.01a",
     "q": "How do I read and plot coordinates in all four quadrants?",
     "idea": "Graphs of equations and functions — x- and y-coordinates",
     "content": "Initial learning: Work with x- and y-coordinates in all four quadrants. DfE ref: A8."
    },
    {
     "code": "7.01b",
     "q": "How do I plot a graph from a table of values?",
     "idea": "Graphs of equations and functions — Graphs of equations and functions",
     "content": "Initial learning: Use a table of values to plot graphs of linear and quadratic functions. e.g. y = 2x + 3; y = 2x² + 1. Foundation tier also: Use a table of values to plot other polynomial graphs and reciprocals. e.g. y = x³ − 2x; y = x + 1/x; 2x + 3y = 6. DfE ref: A9, A14."
    },
    {
     "code": "7.01c",
     "q": "How do I recognise and sketch the graph of a linear, quadratic, cubic or reciprocal function from its equation?",
     "idea": "Graphs of equations and functions — Polynomial and reciprocal functions",
     "content": "Initial learning: Recognise and sketch the graphs of simple linear and quadratic functions. e.g. y = 2; x = 1; y = 2x; y = x². Foundation tier also: Recognise and sketch graphs of: y = x³, y = 1/x. Identify intercepts and, using symmetry, the turning point of graphs of quadratic functions. Find the roots of a quadratic equation algebraically. DfE ref: A11, A12."
    },
    {
     "code": "7.02a",
     "q": "How do I find the gradient and intercept of a straight line and use y = mx + c?",
     "idea": "Straight line graphs — Straight line graphs",
     "content": "Initial learning: Find and interpret the gradient and intercept of straight lines, graphically and using y = mx + c. Foundation tier also: Use the form y = mx + c to find and sketch equations of straight lines. Find the equation of a line through two given points, or through one point with a given gradient. DfE ref: A9, A10, A22."
    },
    {
     "code": "7.02b",
     "q": "How do I identify and find the equation of a line parallel to a given line?",
     "idea": "Straight line graphs — Parallel and perpendicular lines",
     "content": "Foundation tier also: Identify and find equations of parallel lines. DfE ref: A9, A16."
    },
    {
     "code": "7.04a",
     "q": "How do I construct and interpret graphs of real-world situations like distance-time or conversion graphs?",
     "idea": "Interpreting graphs — Graphs of real-world contexts",
     "content": "Initial learning: Construct and interpret graphs in real-world contexts. e.g.\t distance-time money conversion temperature conversion [see also Direct proportion, 5.02a, Inverse proportion, 5.02b] Foundation tier also: Recognise and interpret graphs that illustrate direct and inverse proportion. DfE ref: A14, R10, R14."
    },
    {
     "code": "7.04b",
     "q": "What does the gradient of a graph represent, and how is it linked to ratio and rate of change?",
     "idea": "Interpreting graphs — Gradients",
     "content": "Initial learning: Understand the relationship between gradient and ratio. Foundation tier also: Interpret straight line gradients as rates of change. e.g.\t \u0007Gradient of a distance- time graph as a velocity. DfE ref: A14, A15, R8, R14, R15."
    }
   ]
  },
  {
   "id": "graphs-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 7 Graphs of equations and functions — Higher tier additions",
   "caseStudies": [
    "[7.01b] Draw up a table of values and plot the graph of y = 3 × 1.1ˣ for x from 0 to 5.",
    "[7.01c] Sketch the graph of y = x² − 6x + 5 by completing the square to find its turning point.",
    "[7.01d] Sketch the graph of y = 2ˣ, marking where it crosses the y-axis and its behaviour as x → −∞.",
    "[7.01e] Sketch the graph of y = sin x for 0° ≤ x ≤ 360°, marking its maximum, minimum and zeros.",
    "[7.01f] Write down the equation of a circle centred at the origin with radius 5, then state whether the point (3, 4) lies on it.",
    "[7.02a] Shade the region satisfying y < 2x + 1 on a graph, using a dashed line for the boundary.",
    "[7.02b] Find the equation of the line through (2, 5) perpendicular to y = 2x − 1.",
    "[7.03a] Sketch the graph of y = (x + 2)² − 1 as a translation of y = x².",
    "[7.04b] Estimate the gradient of a velocity-time graph at t = 3 seconds by drawing a tangent, and interpret it as acceleration.",
    "[7.04c] Estimate the area under a velocity-time graph between t = 0 and t = 10 seconds and interpret it as the distance travelled."
   ],
   "ideas": [
    {
     "code": "7.01b",
     "q": "How do I use a table of values to plot an exponential graph?",
     "idea": "Graphs of equations and functions — Graphs of equations and functions",
     "content": "Higher tier additionally: Use a table of values to plot exponential graphs. e.g. y = 3 × 1.1ˣ. DfE ref: A9, A14."
    },
    {
     "code": "7.01c",
     "q": "How do I find the turning point of a quadratic graph by completing the square?",
     "idea": "Graphs of equations and functions — Polynomial and reciprocal functions",
     "content": "Higher tier additionally: Sketch graphs of quadratic functions, identifying the turning point by completing the square. DfE ref: A11, A12."
    },
    {
     "code": "7.01d",
     "q": "What does the graph of an exponential function y = kˣ look like?",
     "idea": "Graphs of equations and functions — Exponential functions",
     "content": "Higher tier additionally: Recognise and sketch graphs of exponential functions in the form y = kˣ for positive k. DfE ref: A12."
    },
    {
     "code": "7.01e",
     "q": "What do the graphs of y = sin x, y = cos x and y = tan x look like?",
     "idea": "Graphs of equations and functions — Trigonometric functions",
     "content": "Higher tier additionally: Recognise and sketch the graphs of y = sin x, y = cos x and y = tan x. DfE ref: A12."
    },
    {
     "code": "7.01f",
     "q": "How do I recognise and use the equation of a circle centred at the origin?",
     "idea": "Graphs of equations and functions — Equations of circles",
     "content": "Higher tier additionally: Recognise and use the equation of a circle with centre at the origin. DfE ref: A16."
    },
    {
     "code": "7.02a",
     "q": "How do I show the solution set of a linear inequality in two variables on a graph?",
     "idea": "Straight line graphs — Straight line graphs",
     "content": "Higher tier additionally: Identify the solution sets of linear inequalities in two variables, using the convention of dashed and solid lines. DfE ref: A9, A10, A22."
    },
    {
     "code": "7.02b",
     "q": "How do I find the equation of a line perpendicular to a given line, or a tangent to a circle?",
     "idea": "Straight line graphs — Parallel and perpendicular lines",
     "content": "Higher tier additionally: Identify and find equations of perpendicular lines. Calculate the equation of a tangent to a circle at a given point. [see also Equations of circles, 7.01f] DfE ref: A9, A16."
    },
    {
     "code": "7.03a",
     "q": "How does changing a function's equation translate or reflect its graph?",
     "idea": "Transformations of curves and their equations — Translations and reflections",
     "content": "Higher tier additionally: Identify and sketch translations and reflections of a given graph (or the graph of a given equation). [Knowledge of function notation will not be required] [see also Functions, 6.05a] e.g. Sketch the graph of y = sin x + 2; y = (x + 2)² − 1; y = −x². DfE ref: A13."
    },
    {
     "code": "7.04b",
     "q": "How do I calculate or estimate a gradient, including the rate of change at a point using a tangent?",
     "idea": "Interpreting graphs — Gradients",
     "content": "Higher tier additionally: Calculate or estimate gradients of graphs, and interpret in contexts such as distance-time graphs, velocity-time graphs and financial graphs. Apply the concepts of average and instantaneous rate of change (gradients of chords or tangents) in numerical, algebraic and graphical contexts. DfE ref: A14, A15, R8, R14, R15."
    },
    {
     "code": "7.04c",
     "q": "How do I estimate the area under a graph and interpret what it represents?",
     "idea": "Interpreting graphs — Areas",
     "content": "Higher tier additionally: Calculate or estimate areas under graphs, and interpret in contexts such as distance-time graphs, velocity-time graphs and financial graphs. DfE ref: A15."
    }
   ]
  },
  {
   "id": "basic-geometry",
   "component": "C1",
   "option": null,
   "name": "OCR 8 Basic geometry",
   "caseStudies": [
    "[8.01a] Identify, from a diagram, a pair of parallel lines and a pair of perpendicular line segments.",
    "[8.01b] Classify a marked angle as acute, obtuse, right or reflex, and label side a as the side opposite angle A in triangle ABC.",
    "[8.01c] Name a quadrilateral from its diagram as a kite, rhombus, parallelogram or trapezium, giving a reason.",
    "[8.01d] Label the vertices, edges and faces of a triangular prism from a diagram.",
    "[8.01e] Draw a diagram, from a written description, of a rectangular garden 8 m by 5 m with a circular pond of radius 1 m in one corner.",
    "[8.01f] Use compasses to construct a circle of radius 4 cm, then use a protractor to measure an angle in it to the nearest degree.",
    "[8.01g] Reflect the triangle with vertices (1, 1), (3, 1), (1, 4) in the line x = 2, giving the coordinates of the image.",
    "[8.02a] Use ruler and compasses to construct the perpendicular bisector of a line segment AB of length 8 cm.",
    "[8.02b] Use ruler and compasses to construct the bisector of a 70° angle formed by two lines.",
    "[8.02c] Construct the perpendicular from a point P to a line, and state why it gives the shortest distance from P to the line.",
    "[8.02d] A goat is tied to a post in a field; construct the locus of points it can reach on a rope of length 3 m.",
    "[8.03a] Three angles meet at a point and measure 130°, 95° and x°; use the angles at a point fact to find x.",
    "[8.03b] Two angles on a straight line are 3x° and 2x° + 30°; use the angles on a line fact to find x.",
    "[8.03c] Two parallel lines are cut by a transversal; identify a pair of alternate angles and a pair of corresponding angles and state their sizes.",
    "[8.03d] Find the sum of the interior angles of a hexagon, then find the size of one interior angle of a regular hexagon.",
    "[8.04a] An isosceles triangle has a base angle of 50°; find the other two angles, giving a geometrical reason.",
    "[8.04b] A parallelogram has one angle of 65°; find its other three angles, giving geometrical reasons.",
    "[8.04c] State the order of rotational symmetry and the number of lines of symmetry of a regular pentagon.",
    "[8.05a] Label the radius, chord, tangent and a minor sector on a diagram of a circle.",
    "[8.06a] State the number of faces, edges and vertices of a triangular-based pyramid.",
    "[8.06b] Draw the plan and front elevation of a cuboid measuring 4 cm by 3 cm by 2 cm."
   ],
   "ideas": [
    {
     "code": "8.01a",
     "q": "What do the terms point, line, vertex, edge, plane, parallel and perpendicular mean?",
     "idea": "Conventions, notation and terms Learners will be expected to be familiar with the following geometrical skills, conventions, notation and terms, which will be assessed in questions at both tiers. — 2D and 3D shapes",
     "content": "Initial learning: Use the terms points, lines, line segments, vertices, edges, planes, parallel lines, perpendicular lines. DfE ref: G1."
    },
    {
     "code": "8.01b",
     "q": "What are acute, obtuse, right and reflex angles, and how are the sides and angles of a triangle labelled?",
     "idea": "Conventions, notation and terms Learners will be expected to be familiar with the following geometrical skills, conventions, notation and terms, which will be assessed in questions at both tiers. — Angles",
     "content": "Initial learning: Know the terms acute, obtuse, right and reflex angles. Use the standard conventions for labelling and referring to the sides and angles of triangles. e.g. AB, ∠ABC, angle ABC, a is the side opposite angle A. DfE ref: G1."
    },
    {
     "code": "8.01c",
     "q": "What do the terms regular polygon, scalene/isosceles/equilateral triangle, and the quadrilateral and polygon names mean?",
     "idea": "Conventions, notation and terms Learners will be expected to be familiar with the following geometrical skills, conventions, notation and terms, which will be assessed in questions at both tiers. — Polygons",
     "content": "Initial learning: Know the terms: • regular polygon • scalene, isosceles and equilateral triangle • quadrilateral, square, rectangle, kite, rhombus, parallelogram, trapezium • pentagon, hexagon, octagon. DfE ref: G1."
    },
    {
     "code": "8.01d",
     "q": "What do the terms face, edge, vertex, cube, cuboid, prism, cylinder, pyramid, cone and sphere mean?",
     "idea": "Conventions, notation and terms Learners will be expected to be familiar with the following geometrical skills, conventions, notation and terms, which will be assessed in questions at both tiers. — Polyhedra and other solids",
     "content": "Initial learning: Recognise the terms face, surface, edge, and vertex, cube, cuboid, prism, cylinder, pyramid, cone and sphere. DfE ref: G12."
    },
    {
     "code": "8.01e",
     "q": "How do I draw an accurate diagram from a written description?",
     "idea": "Conventions, notation and terms Learners will be expected to be familiar with the following geometrical skills, conventions, notation and terms, which will be assessed in questions at both tiers. — Diagrams",
     "content": "Initial learning: Draw diagrams from written descriptions as required by questions. DfE ref: G1."
    },
    {
     "code": "8.01f",
     "q": "How do I use a ruler, protractor and compasses to draw and measure lines, angles and circles?",
     "idea": "Conventions, notation and terms Learners will be expected to be familiar with the following geometrical skills, conventions, notation and terms, which will be assessed in questions at both tiers. — Geometrical instruments",
     "content": "Initial learning: Use a ruler to construct and measure straight lines. Use a protractor to construct and measure angles. Use compasses to construct circles. DfE ref: G2, G15."
    },
    {
     "code": "8.01g",
     "q": "How do I use coordinates to work with shapes and transformations?",
     "idea": "Conventions, notation and terms Learners will be expected to be familiar with the following geometrical skills, conventions, notation and terms, which will be assessed in questions at both tiers. — x- and y-coordinates",
     "content": "Initial learning: Use x- and y-coordinates in plane geometry problems, including transformations of simple shapes. DfE ref: G7, G11."
    },
    {
     "code": "8.02a",
     "q": "How do I construct the perpendicular bisector and midpoint of a line segment?",
     "idea": "Ruler and compass constructions — Perpendicular bisector",
     "content": "Foundation tier also: Construct the perpendicular bisector and midpoint of a line segment. DfE ref: G2."
    },
    {
     "code": "8.02b",
     "q": "How do I construct the bisector of an angle?",
     "idea": "Ruler and compass constructions — Angle bisector",
     "content": "Foundation tier also: Construct the bisector of an angle formed from two lines. DfE ref: G2."
    },
    {
     "code": "8.02c",
     "q": "How do I construct the perpendicular from a point to a line?",
     "idea": "Ruler and compass constructions — Perpendicular from a point to a line",
     "content": "Foundation tier also: Construct the perpendicular from a point to a line. Construct the perpendicular to a line at a point. Know that the perpendicular distance from a point to a line is the shortest distance to the line. DfE ref: G2."
    },
    {
     "code": "8.02d",
     "q": "How do I construct and identify the locus of points satisfying a rule?",
     "idea": "Ruler and compass constructions — Loci",
     "content": "Foundation tier also: Apply ruler and compass constructions to construct figures and identify the loci of points, to include real-world problems. Understand the term ‘equidistant’. DfE ref: G2."
    },
    {
     "code": "8.03a",
     "q": "Why do angles at a point add up to 360°, and how do I use this to find angles?",
     "idea": "Angles — Angles at a point",
     "content": "Initial learning: Know and use the sum of the angles at a point is 360°. Foundation tier also: Apply these angle facts to find angles in rectilinear figures, and to justify results in simple proofs. e.g. The sum of the interior angles of a triangle is 180°. DfE ref: G3, G6."
    },
    {
     "code": "8.03b",
     "q": "Why do angles on a straight line add up to 180°, and how do I use this to find angles?",
     "idea": "Angles — Angles on a line",
     "content": "Initial learning: Know that the sum of the angles at a point on a line is 180°. Foundation tier also: Apply these angle facts to find angles in rectilinear figures, and to justify results in simple proofs. e.g. The sum of the interior angles of a triangle is 180°. DfE ref: G3, G6."
    },
    {
     "code": "8.03c",
     "q": "How do vertically opposite, alternate and corresponding angles relate on intersecting and parallel lines?",
     "idea": "Angles — Angles between intersecting and parallel lines",
     "content": "Initial learning: Know and use: vertically opposite angles are equal; alternate angles on parallel lines are equal; corresponding angles on parallel lines are equal. Foundation tier also: Apply these angle facts to find angles in rectilinear figures, and to justify results in simple proofs. e.g. The sum of the interior angles of a triangle is 180°. DfE ref: G3, G6."
    },
    {
     "code": "8.03d",
     "q": "How do I find the sum of the interior and exterior angles of a polygon, and the interior angle of a regular polygon?",
     "idea": "Angles — Angles in polygons",
     "content": "Initial learning: Derive and use the sum of the interior angles of a triangle is 180°. Derive and use the sum of the exterior angles of a polygon is 360°. Find the sum of the interior angles of a polygon. Find the interior angle of a regular polygon. Foundation tier also: Apply these angle facts to find angles in rectilinear figures, and to justify results in simple proofs. e.g. The sum of the interior angles of a triangle is 180°. DfE ref: G3, G6."
    },
    {
     "code": "8.04a",
     "q": "What are the properties of isosceles, equilateral and right-angled triangles?",
     "idea": "Properties of polygons — Properties of a triangle",
     "content": "Initial learning: Know the basic properties of isosceles, equilateral and right- angled triangles. Give geometrical reasons to justify these properties. Foundation tier also: Use these facts to find lengths and angles in rectilinear figures and in simple proofs. DfE ref: G4, G6."
    },
    {
     "code": "8.04b",
     "q": "What are the properties of a square, rectangle, parallelogram, trapezium, kite and rhombus?",
     "idea": "Properties of polygons — Properties of quadrilaterals",
     "content": "Initial learning: Know the basic properties of the square, rectangle, parallelogram, trapezium, kite and rhombus. Give geometrical reasons to justify these properties. Foundation tier also: Use these facts to find lengths and angles in rectilinear figures and in simple proofs. DfE ref: G4, G6."
    },
    {
     "code": "8.04c",
     "q": "How do I identify the reflection and rotation symmetries of a polygon?",
     "idea": "Properties of polygons — Symmetry",
     "content": "Initial learning: Identify reflection and rotation symmetries of triangles, quadrilaterals and other polygons. DfE ref: G1, G4."
    },
    {
     "code": "8.05a",
     "q": "What do the terms centre, radius, chord, diameter, circumference, tangent, arc, sector and segment mean?",
     "idea": "Circles — Circle nomenclature",
     "content": "Initial learning: Understand and use the terms centre, radius, chord, diameter and circumference. Foundation tier also: Understand and use the terms tangent, arc, sector and segment. DfE ref: G9."
    },
    {
     "code": "8.06a",
     "q": "What are the properties of a cube, cuboid, prism, cylinder, pyramid, cone and sphere?",
     "idea": "Three-dimensional shapes — 3-dimensional solids",
     "content": "Initial learning: Recognise and know the properties of the cube, cuboid, prism, cylinder, pyramid, cone and sphere. DfE ref: G12."
    },
    {
     "code": "8.06b",
     "q": "How do I interpret and construct the plan and elevations of a 3D solid?",
     "idea": "Three-dimensional shapes — Plans and elevations",
     "content": "Initial learning: Interpret plans and elevations of simple 3D solids. Foundation tier also: Construct plans and elevations of simple 3D solids, and representations (e.g. using isometric paper) of solids from plans and elevations. DfE ref: G1, G13."
    }
   ]
  },
  {
   "id": "basic-geometry-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 8 Basic geometry — Higher tier additions",
   "caseStudies": [
    "[8.03a] Prove formally, using angles on a straight line and vertically opposite angles, that the three angles of a triangle sum to 180°.",
    "[8.03b] Two parallel lines are cut by a transversal; prove that co-interior angles sum to 180°, using angles on a line.",
    "[8.03c] Prove that alternate angles on parallel lines are equal, using vertically opposite and corresponding angle facts.",
    "[8.03d] Prove that the exterior angle of a triangle equals the sum of the two interior opposite angles.",
    "[8.04a] Prove that a triangle inscribed in a semicircle is right-angled, using the isosceles triangles formed by the radii.",
    "[8.04b] Prove that the diagonals of a rhombus bisect each other at right angles, using its properties as a parallelogram.",
    "[8.05b] The angle at the centre of a circle is 130°; use the circle theorem to find the angle at the circumference subtended by the same arc.",
    "[8.05c] A triangle is inscribed in a circle with one side as the diameter; use the circle theorem to find the angle opposite the diameter.",
    "[8.05d] Two angles in the same segment of a circle are 3x° and 40°; use the circle theorem to find x.",
    "[8.05e] A chord of length 10 cm is 4 cm from the centre of a circle; use the perpendicular bisector property to find the radius.",
    "[8.05f] A tangent touches a circle at point P; given the radius to P, find the angle between the tangent and a chord using the perpendicular property.",
    "[8.05g] The angle between a tangent and a chord at P is 55°; use the alternate segment theorem to find the angle in the opposite segment.",
    "[8.05h] A cyclic quadrilateral has opposite angles 4x° and 2x° + 30°; use the fact they are supplementary to find x."
   ],
   "ideas": [
    {
     "code": "8.03a",
     "q": "How do I use angle facts about a point in a more formal geometric proof?",
     "idea": "Angles — Angles at a point",
     "content": "Higher tier additionally: Apply these angle properties in more formal proofs of geometrical results. DfE ref: G3, G6."
    },
    {
     "code": "8.03b",
     "q": "How do I use angle facts about a line in a more formal geometric proof?",
     "idea": "Angles — Angles on a line",
     "content": "Higher tier additionally: Apply these angle properties in more formal proofs of geometrical results. DfE ref: G3, G6."
    },
    {
     "code": "8.03c",
     "q": "How do I use vertically opposite, alternate and corresponding angles in a formal geometrical proof?",
     "idea": "Angles — Angles on parallel lines and at a point in formal proofs",
     "content": "Higher tier additionally: Apply these angle properties in more formal proofs of geometrical results. DfE ref: G3, G6."
    },
    {
     "code": "8.03d",
     "q": "How do I use polygon angle facts in a more formal geometric proof?",
     "idea": "Angles — Angles in polygons",
     "content": "Higher tier additionally: Apply these angle properties in more formal proofs of geometrical results. DfE ref: G3, G6."
    },
    {
     "code": "8.04a",
     "q": "How do I use triangle properties in a formal proof, such as a circle theorem?",
     "idea": "Properties of polygons — Properties of a triangle",
     "content": "Higher tier additionally: Use these facts in more formal proofs of geometrical results, for example circle theorems. DfE ref: G4, G6."
    },
    {
     "code": "8.04b",
     "q": "How do I use quadrilateral properties in a formal proof, such as a circle theorem?",
     "idea": "Properties of polygons — Properties of quadrilaterals",
     "content": "Higher tier additionally: Use these facts in more formal proofs of geometrical results, for example circle theorems. DfE ref: G4, G6."
    },
    {
     "code": "8.05b",
     "q": "Why is the angle at the centre of a circle twice the angle at the circumference on the same arc?",
     "idea": "Circles — Angles subtended at centre and circumference",
     "content": "Higher tier additionally: Apply and prove: the angle subtended by an arc at the centre is twice the angle at the circumference. DfE ref: G10."
    },
    {
     "code": "8.05c",
     "q": "Why is the angle in a semicircle always a right angle?",
     "idea": "Circles — Angle in a semicircle",
     "content": "Higher tier additionally: Apply and prove: the angle on the circumference subtended by a diameter is a right angle. DfE ref: G10."
    },
    {
     "code": "8.05d",
     "q": "Why are angles in the same segment of a circle equal?",
     "idea": "Circles — Angles in the same segment",
     "content": "Higher tier additionally: Apply and prove: two angles in the same segment are equal. DfE ref: G10."
    },
    {
     "code": "8.05e",
     "q": "Why does a radius bisect a chord exactly when it is perpendicular to it?",
     "idea": "Circles — Angle between radius and chord",
     "content": "Higher tier additionally: Apply and prove: a radius or diameter bisects a chord if and only if it is perpendicular to the chord. DfE ref: G10."
    },
    {
     "code": "8.05f",
     "q": "Why is the radius always perpendicular to the tangent at the point of contact?",
     "idea": "Circles — Angle between radius and tangent",
     "content": "Higher tier additionally: Apply and prove: for a point P on the circumference, the radius or diameter through P is perpendicular to the tangent at P. DfE ref: G10."
    },
    {
     "code": "8.05g",
     "q": "What does the alternate segment theorem say about the angle between a tangent and a chord?",
     "idea": "Circles — The alternate segment theorem",
     "content": "Higher tier additionally: Apply and prove: for a point P on the circumference, the angle between the tangent and a chord through P equals the angle subtended by the chord in the opposite segment. DfE ref: G10."
    },
    {
     "code": "8.05h",
     "q": "Why do opposite angles in a cyclic quadrilateral add up to 180°?",
     "idea": "Circles — Cyclic quadrilaterals",
     "content": "Higher tier additionally: Apply and prove: the opposite angles of a cyclic quadrilateral are supplementary. DfE ref: G10."
    }
   ]
  },
  {
   "id": "congruence-similarity",
   "component": "C1",
   "option": null,
   "name": "OCR 9 Congruence and similarity",
   "caseStudies": [
    "[9.01a] Reflect a triangle in the line y = x, and describe the mirror line from a shape and its image.",
    "[9.01b] Rotate a shape 90° clockwise about the point (2, 1), and describe the centre and angle of a rotation from a shape and its image.",
    "[9.01c] Translate a triangle by the column vector (3, −2), giving the coordinates of the image.",
    "[9.02a] Prove that two triangles with sides 5 cm, 7 cm, 9 cm and 5 cm, 7 cm, 9 cm are congruent, stating the SSS case.",
    "[9.02b] Use congruent triangles to prove that the base angles of an isosceles triangle are equal.",
    "[9.03a] Given vectors a and b, find 2a − 3b as a single vector.",
    "[9.03b] Represent the vector from (1, 2) to (4, 6) as a column vector and draw it on a coordinate grid.",
    "[9.04a] Prove that two triangles with angles 40°, 60°, 80° and 40°, 60°, 80° are similar.",
    "[9.04b] Enlarge a triangle by scale factor 3 from centre (0, 0), then identify the scale factor of an enlargement from a shape and its image.",
    "[9.04c] Two similar triangles have corresponding sides 4 cm and 10 cm; find the length of the side that corresponds to a 6 cm side in the smaller triangle."
   ],
   "ideas": [
    {
     "code": "9.01a",
     "q": "How do I reflect a shape in a mirror line, and find the equation of a mirror line?",
     "idea": "Plane isometric transformations — Reflection",
     "content": "Initial learning: Reflect a simple shape in a given mirror line, and identify the mirror line from a shape and its image. Foundation tier also: Identify a mirror line x = a, y = b or y = ± x from a simple shape and its image under reflection. DfE ref: G7."
    },
    {
     "code": "9.01b",
     "q": "How do I rotate a shape about a centre, and describe a given rotation?",
     "idea": "Plane isometric transformations — Rotation",
     "content": "Initial learning: Rotate a simple shape clockwise or anti-clockwise through a multiple of 90° about a given centre of rotation. Foundation tier also: Identify the centre, angle and sense of a rotation from a simple shape and its image under rotation. DfE ref: G7."
    },
    {
     "code": "9.01c",
     "q": "How do I use a column vector to translate a shape?",
     "idea": "Plane isometric transformations — Translation",
     "content": "Initial learning: Use a column vector to describe a translation of a simple shape, and perform a specified translation. DfE ref: G7, G24."
    },
    {
     "code": "9.02a",
     "q": "How do I identify and prove that two triangles are congruent (SSS, ASA, SAS, RHS)?",
     "idea": "Congruence — Congruent triangles",
     "content": "Initial learning: Identify congruent triangles. Foundation tier also: Prove that two triangles are congruent using the cases: 3 sides (SSS) 2 angles, 1 side (ASA) 2 sides, included angle (SAS) Right angle, hypotenuse, side (RHS). DfE ref: G5, G7."
    },
    {
     "code": "9.02b",
     "q": "How do I use congruent triangles to prove a geometric result, such as base angles of an isosceles triangle?",
     "idea": "Congruence — Applying congruent triangles",
     "content": "Foundation tier also: Apply congruent triangles in calculations and simple proofs. e.g.\t \u0007The base angles of an isosceles triangle are equal. DfE ref: G6, G19."
    },
    {
     "code": "9.03a",
     "q": "How do I add, subtract and scalar-multiply vectors?",
     "idea": "Plane vector geometry — Vector arithmetic",
     "content": "Foundation tier also: Understand addition, subtraction and scalar multiplication of vectors. DfE ref: G25."
    },
    {
     "code": "9.03b",
     "q": "How do I represent and draw a vector as a column vector?",
     "idea": "Plane vector geometry — Column vectors",
     "content": "Foundation tier also: Represent a 2-dimensional vector as a column vector, and draw column vectors on a square or coordinate grid. DfE ref: G25."
    },
    {
     "code": "9.04a",
     "q": "How do I identify and prove that two triangles are similar?",
     "idea": "Similarity — Similar triangles",
     "content": "Initial learning: Identify similar triangles. Foundation tier also: Prove that two triangles are similar. DfE ref: G6, G7."
    },
    {
     "code": "9.04b",
     "q": "How do I enlarge a shape from a centre using a scale factor, and find the scale factor of an enlargement?",
     "idea": "Similarity — Enlargement",
     "content": "Initial learning: Enlarge a simple shape from a given centre using a whole number scale factor, and identify the scale factor of an enlargement. Foundation tier also: Identify the centre and scale factor (including fractional scale factors) of an enlargement of a simple shape, and perform such an enlargement on a simple shape. DfE ref: R2, R12, G7."
    },
    {
     "code": "9.04c",
     "q": "How do I compare and calculate lengths, areas and volumes of similar shapes?",
     "idea": "Similarity — Similar shapes",
     "content": "Initial learning: Compare lengths, areas and volumes using ratio notation and scale factors. Foundation tier also: Apply similarity to calculate unknown lengths in similar figures. [see also Direct proportion, 5.02a] DfE ref: R12, G19."
    }
   ]
  },
  {
   "id": "congruence-similarity-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 9 Congruence and similarity — Higher tier additions",
   "caseStudies": [
    "[9.01d] Reflect a shape in the x-axis then rotate the image 90° clockwise about the origin; describe the single transformation equivalent to both.",
    "[9.03a] Use vectors a = OA and b = OB to prove that the midpoint M of AB satisfies OM = 1/2(a + b).",
    "[9.04b] Enlarge a triangle by scale factor −2 from centre (1, 1), and describe the effect on its orientation and size.",
    "[9.04c] Two similar cuboids have corresponding lengths in the ratio 2 : 5; find the ratio of their surface areas and the ratio of their volumes."
   ],
   "ideas": [
    {
     "code": "9.01d",
     "q": "How do I describe the single transformation equivalent to a sequence of reflections, rotations or translations?",
     "idea": "Plane isometric transformations — Combinations of transformations",
     "content": "Higher tier additionally: Perform a sequence of isometric transformations (reflections, rotations or translations), on a simple shape. Describe the resulting transformation and the changes and invariance achieved. DfE ref: G8."
    },
    {
     "code": "9.03a",
     "q": "How do I use vectors to prove a geometric result?",
     "idea": "Plane vector geometry — Vector arithmetic",
     "content": "Higher tier additionally: Use vectors in geometric arguments and proofs. DfE ref: G25."
    },
    {
     "code": "9.04b",
     "q": "What happens to a shape when it is enlarged by a negative scale factor?",
     "idea": "Similarity — Enlargement",
     "content": "Higher tier additionally: Perform and recognise enlargements with negative scale factors. DfE ref: R2, R12, G7."
    },
    {
     "code": "9.04c",
     "q": "How are the length, area and volume scale factors of similar shapes related?",
     "idea": "Similarity — Similar shapes",
     "content": "Higher tier additionally: Understand the relationship between lengths, areas and volumes of similar shapes. [see also Direct proportion, 5.02a] DfE ref: R12, G19."
    }
   ]
  },
  {
   "id": "mensuration",
   "component": "C1",
   "option": null,
   "name": "OCR 10 Mensuration",
   "caseStudies": [
    "[10.01a] Convert 2.5 kg to grams, and convert 3 m² to cm².",
    "[10.01b] Convert a speed of 72 km/h into m/s.",
    "[10.01c] On a map with scale 1 : 25000, a distance measures 6 cm; find the real distance in km, and state the bearing of B from A as 070°.",
    "[10.02a] Find the perimeter of an L-shaped room made from two rectangles, given the side lengths.",
    "[10.02b] Find the circumference of a circle of radius 6 cm, then find the arc length of a sector with angle 60° and radius 6 cm.",
    "[10.02c] Find the perimeter of a composite shape made from a rectangle and a semicircle, given its dimensions.",
    "[10.03a] Find the area of a triangle with base 8 cm and height 5 cm.",
    "[10.03b] Find the area of a parallelogram with base 10 cm and height 4 cm.",
    "[10.03c] Find the area of a trapezium with parallel sides 5 cm and 9 cm and height 4 cm.",
    "[10.03d] Find the area of a circle of radius 7 cm, then find the area of a sector with angle 90° and radius 7 cm.",
    "[10.03e] Find the area of a composite shape made from a rectangle and a quarter circle, given its dimensions.",
    "[10.04a] Find the surface area and volume of a cuboid measuring 5 cm by 4 cm by 3 cm, then find the volume of a cylinder of radius 3 cm and height 10 cm.",
    "[10.04b] Using the given formulae, find the volume and surface area of a sphere of radius 6 cm.",
    "[10.04c] Using the formula V = 1/3 × base area × height, find the volume of a pyramid with a square base of side 6 cm and height 8 cm.",
    "[10.05a] Find the length of the hypotenuse of a right-angled triangle with the other two sides 6 cm and 8 cm.",
    "[10.05b] In a right-angled triangle, the hypotenuse is 10 cm and one angle is 35°; find the length of the side opposite that angle.",
    "[10.05c] Without a calculator, write down the exact values of sin 30°, cos 45° and tan 60°."
   ],
   "ideas": [
    {
     "code": "10.01a",
     "q": "How do I convert between standard units of length, area, volume, mass, time and money?",
     "idea": "Units and measurement — Units of measurement",
     "content": "Initial learning: Use and convert standard units of measurement for length, area, volume/capacity, mass, time and money. Foundation tier also: Use and convert standard units in algebraic contexts. DfE ref: N13, R1, G14."
    },
    {
     "code": "10.01b",
     "q": "How do I use and convert compound units like speed and density?",
     "idea": "Units and measurement — Compound units",
     "content": "Initial learning: Use and convert simple compound units (e.g. for speed, rates of pay, unit pricing). Know and apply in simple cases: speed = distance ÷ time Foundation tier also: Use and convert other compound units (e.g. density, pressure). Know and apply: density = mass ÷ volume Use and convert compound units in algebraic contexts. DfE ref: N13, R1, R11, G14."
    },
    {
     "code": "10.01c",
     "q": "How do I use map scales and bearings, and make a scale drawing?",
     "idea": "Units and measurement — Maps and scale drawings",
     "content": "Initial learning: Use the scale of a map, and work with bearings. Construct and interpret scale drawings. DfE ref: R2, G15."
    },
    {
     "code": "10.02a",
     "q": "How do I calculate the perimeter of a rectilinear shape?",
     "idea": "Perimeter calculations — Perimeter of rectilinear shapes",
     "content": "Initial learning: Calculate the perimeter of rectilinear shapes. DfE ref: G17."
    },
    {
     "code": "10.02b",
     "q": "How do I calculate the circumference of a circle, and the arc length of a sector?",
     "idea": "Perimeter calculations — Circumference of a circle",
     "content": "Initial learning: Know and apply the formula circumference = 2πr = πd to calculate the circumference of a circle. Foundation tier also: Calculate the arc length of a sector of a circle given its angle and radius. DfE ref: G17, G18."
    },
    {
     "code": "10.02c",
     "q": "How do I find the perimeter of a shape made from several simpler shapes?",
     "idea": "Perimeter calculations — Perimeter of composite shapes",
     "content": "Initial learning: Apply perimeter formulae in calculations involving the perimeter of composite 2D shapes. DfE ref: G17, G18."
    },
    {
     "code": "10.03a",
     "q": "How do I calculate the area of a triangle from its base and height?",
     "idea": "Area calculations — Area of a triangle",
     "content": "Initial learning: Know and apply the formula: area = 1/2 × base × height. DfE ref: G16, G23."
    },
    {
     "code": "10.03b",
     "q": "How do I calculate the area of a parallelogram or rectangle?",
     "idea": "Area calculations — Area of a parallelogram",
     "content": "Initial learning: Know and apply the formula: area = base × height. [Includes area of a rectangle] DfE ref: G16."
    },
    {
     "code": "10.03c",
     "q": "How do I calculate the area of a trapezium?",
     "idea": "Area calculations — Area of a trapezium",
     "content": "Initial learning: Calculate the area of a trapezium. DfE ref: G16."
    },
    {
     "code": "10.03d",
     "q": "How do I calculate the area of a circle, and the area of a sector?",
     "idea": "Area calculations — Area of a circle",
     "content": "Initial learning: Know and apply the formula area = πr² to calculate the area of a circle. Foundation tier also: Calculate the area of a sector of a circle given its angle and radius. DfE ref: G17, G18."
    },
    {
     "code": "10.03e",
     "q": "How do I find the area of a shape made from several simpler shapes?",
     "idea": "Area calculations — Area of composite shapes",
     "content": "Initial learning: Apply area formulae in calculations involving the area of composite 2D shapes. DfE ref: G17, G18."
    },
    {
     "code": "10.04a",
     "q": "How do I calculate the surface area and volume of a cuboid, prism or cylinder?",
     "idea": "Volume and surface area calculations — Polyhedra",
     "content": "Initial learning: Calculate the surface area and volume of cuboids and other right prisms (including cylinders). DfE ref: G16."
    },
    {
     "code": "10.04b",
     "q": "How do I calculate the surface area and volume of a cone, sphere or composite solid?",
     "idea": "Volume and surface area calculations — Cones and spheres",
     "content": "Foundation tier also: Calculate the surface area and volume of spheres, cones and simple composite solids (formulae will be given). DfE ref: N8, G17."
    },
    {
     "code": "10.04c",
     "q": "How do I calculate the surface area and volume of a pyramid?",
     "idea": "Volume and surface area calculations — Pyramids",
     "content": "Foundation tier also: Calculate the surface area and volume of a pyramid (the formula 1/3 × area of base × height will be given). DfE ref: G17."
    },
    {
     "code": "10.05a",
     "q": "How do I use Pythagoras' theorem to find a missing length in a right-angled triangle?",
     "idea": "Triangle mensuration — Pythagoras’ theorem",
     "content": "Foundation tier also: Know, derive and apply Pythagoras’ theorem a² + b² = c² to find lengths in right-angled triangles in 2D figures. DfE ref: G6, G20."
    },
    {
     "code": "10.05b",
     "q": "How do I use sin, cos and tan to find a missing angle or length in a right-angled triangle?",
     "idea": "Triangle mensuration — Trigonometry in right-angled triangles",
     "content": "Foundation tier also: Know and apply the trigonometric ratios, sin θ, cos θ and tan θ and apply them to find angles and lengths in right-angled triangles in 2D figures. [see also Similar shapes, 9.04c] DfE ref: R12, G20."
    },
    {
     "code": "10.05c",
     "q": "What are the exact values of sin, cos and tan for 0°, 30°, 45°, 60° and 90°?",
     "idea": "Triangle mensuration — Exact trigonometric ratios",
     "content": "Foundation tier also: Know the exact values of sin θ and cos θ for θ = 0°, 30°, 45°, 60° and 90°. Know the exact value of tan θ for θ = 0°, 30°, 45° and 60°. DfE ref: R12, G21."
    }
   ]
  },
  {
   "id": "mensuration-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 10 Mensuration — Higher tier additions",
   "caseStudies": [
    "[10.03a] Find the area of a triangle with sides 8 cm and 6 cm and an included angle of 50°, using area = 1/2 × ab sin C.",
    "[10.05a] Find the length of the diagonal of a cuboid measuring 4 cm by 3 cm by 12 cm using Pythagoras' theorem in 3D.",
    "[10.05b] Find the angle between the diagonal and the base of a cuboid measuring 6 cm by 8 cm by 10 cm using trigonometry.",
    "[10.05d] In a triangle, angle A = 40°, angle B = 65° and side a = 7 cm; use the sine rule to find side b.",
    "[10.05e] In a triangle, sides b = 8 cm, c = 6 cm and angle A = 60°; use the cosine rule to find side a."
   ],
   "ideas": [
    {
     "code": "10.03a",
     "q": "How do I find the area of a triangle when I know two sides and the included angle?",
     "idea": "Area calculations — Area of a triangle",
     "content": "Higher tier additionally: Know and apply the formula: area = 1/2 × ab sin C. DfE ref: G16, G23."
    },
    {
     "code": "10.05a",
     "q": "How do I apply Pythagoras' theorem in a 3D figure?",
     "idea": "Triangle mensuration — Pythagoras’ theorem",
     "content": "Higher tier additionally: Apply Pythagoras’ theorem in more complex figures, including 3D figures. DfE ref: G6, G20."
    },
    {
     "code": "10.05b",
     "q": "How do I apply right-angled trigonometry in a 3D figure?",
     "idea": "Triangle mensuration — Trigonometry in right-angled triangles",
     "content": "Higher tier additionally: Apply the trigonometry of right-angled triangles in more complex figures, including 3D figures. DfE ref: R12, G20."
    },
    {
     "code": "10.05d",
     "q": "How do I use the sine rule to find a missing side or angle in any triangle?",
     "idea": "Triangle mensuration — Sine rule",
     "content": "Higher tier additionally: Know and apply the sine rule, a/sin A = b/sin B = c/sin C, to find lengths and angles. DfE ref: G22."
    },
    {
     "code": "10.05e",
     "q": "How do I use the cosine rule to find a missing side or angle in any triangle?",
     "idea": "Triangle mensuration — Cosine rule",
     "content": "Higher tier additionally: Know and apply the cosine rule, a² = b² + c² − 2bc cos A, to find lengths and angles. DfE ref: G22."
    }
   ]
  },
  {
   "id": "probability",
   "component": "C1",
   "option": null,
   "name": "OCR 11 Probability",
   "caseStudies": [
    "[11.01a] Mark 'evens' at 0.5 and 'impossible' at 0 on a 0–1 probability scale, and estimate where an unlikely event lies.",
    "[11.01b] Record the outcomes of 50 spins of a spinner in a frequency table, and use a frequency tree to show pass/fail results split by gender.",
    "[11.01c] A coin is flipped 200 times and lands heads 108 times; use the relative frequency to estimate the probability of heads.",
    "[11.01d] Two fair dice are rolled and the scores added; find the probability that the total is 7, and the expected number of 7s in 90 rolls.",
    "[11.02a] List all the ways the letters E, F and G can be arranged, and use the list to find the probability of E appearing first.",
    "[11.02b] List the outcomes of flipping two coins and rolling a die together, using a systematic strategy.",
    "[11.02c] Draw a Venn diagram for 30 students, where 18 study French, 12 study German and 5 study both, then find P(studies neither).",
    "[11.02d] Draw a tree diagram for picking two balls without replacement from a bag of 5 red and 3 blue balls, and use it to find P(both red).",
    "[11.02e] Given P(rain) = 0.3, find P(no rain); given P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.1, find P(A or B).",
    "[11.02f] Use a tree diagram to find the probability of drawing two red counters in a row from a bag of 5 red and 4 blue counters without replacement."
   ],
   "ideas": [
    {
     "code": "11.01a",
     "q": "How does the 0 to 1 probability scale describe how likely an event is?",
     "idea": "Basic probability and experiments — The probability scale",
     "content": "Initial learning: Use the 0-1 probability scale as a measure of likelihood of random events, for example, ‘impossible’ with 0, ‘evens’ with 0.5, ‘certain’ with 1. DfE ref: P3."
    },
    {
     "code": "11.01b",
     "q": "How do I record and analyse the relative frequency of outcomes from a repeated experiment?",
     "idea": "Basic probability and experiments — Relative frequency",
     "content": "Initial learning: Record, describe and analyse the relative frequency of outcomes of repeated experiments using tables and frequency trees. DfE ref: P1."
    },
    {
     "code": "11.01c",
     "q": "How does relative frequency give an estimate of probability?",
     "idea": "Basic probability and experiments — Relative frequency and probability",
     "content": "Initial learning: Use relative frequency as an estimate of probability. Foundation tier also: Understand that relative frequencies approach the theoretical probability as the number of trials increases. DfE ref: P3, P5."
    },
    {
     "code": "11.01d",
     "q": "How do I calculate the probability of an outcome when all outcomes are equally likely?",
     "idea": "Basic probability and experiments — Equally likely outcomes and probability",
     "content": "Initial learning: Calculate probabilities, expressed as fractions or decimals, in simple experiments with equally likely outcomes, for example flipping coins, rolling dice, etc. Apply ideas of randomness and fairness in simple experiments. Calculate probabilities of simple combined events, for example rolling two dice and looking at the totals. Use probabilities to calculate the number of expected outcomes in repeated experiments. DfE ref: P2, P7."
    },
    {
     "code": "11.02a",
     "q": "How do I use a table or grid to list all the outcomes of one or more events?",
     "idea": "Combined events and probability diagrams — Sample spaces",
     "content": "Initial learning: Use tables and grids to list the outcomes of single events and simple combinations of events, and to calculate theoretical probabilities. e.g. \t \u0007Flipping two coins. Finding the number of orders in which the letters E, F and G can be written. Foundation tier also: Use sample spaces for more complex combinations of events. e.g. \u0007Recording the outcomes for sum of two dice. Problems with two spinners. DfE ref: N5, P6, P7."
    },
    {
     "code": "11.02b",
     "q": "How do I systematically list every possible outcome?",
     "idea": "Combined events and probability diagrams — Enumeration",
     "content": "Initial learning: Use systematic listing strategies. DfE ref: N5."
    },
    {
     "code": "11.02c",
     "q": "How do I use a Venn diagram and set notation to find probabilities?",
     "idea": "Combined events and probability diagrams — Venn diagrams and sets",
     "content": "Initial learning: Use a two-circle Venn diagram to enumerate sets, and use this to calculate related probabilities. Use simple set notation to describe simple sets of numbers or objects. e.g. A = {even numbers}; B = {mathematics learners}; C = {isosceles triangles}. Foundation tier also: Construct a Venn diagram to classify outcomes and calculate probabilities. Use set notation to describe a set of numbers or objects. e.g. D = {x : 1 < x < 3}; E = {x : x is a factor of 280}. [Knowledge of intersection (∩), union (∪) and complement (′) notation will not be required.] DfE ref: P6, P9."
    },
    {
     "code": "11.02d",
     "q": "How do I use a tree diagram to record the probabilities of a sequence of events?",
     "idea": "Combined events and probability diagrams — Tree diagrams",
     "content": "Foundation tier also: Use tree diagrams to enumerate sets and to record the probabilities of successive events (tree frames may be given and in some cases will be partly completed). DfE ref: P6, P9."
    },
    {
     "code": "11.02e",
     "q": "How do I add probabilities for mutually exclusive events, or events that overlap?",
     "idea": "Combined events and probability diagrams — The addition law of probability",
     "content": "Initial learning: Use the addition law for mutually exclusive events. Use p(A) + p(not A) = 1 Foundation tier also: Derive or informally understand and apply the formula p(A or B) = p(A) + p(B) – p(A and B). DfE ref: P4."
    },
    {
     "code": "11.02f",
     "q": "How do I use a tree diagram to find the probability of two combined events?",
     "idea": "Combined events and probability diagrams — The multiplication law of probability and conditional probability",
     "content": "Foundation tier also: Use tree diagrams and other representations to calculate the probability of independent and dependent combined events. DfE ref: P8, P9."
    }
   ]
  },
  {
   "id": "probability-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 11 Probability — Higher tier additions",
   "caseStudies": [
    "[11.02a] A bag has 3 red, 4 blue and 5 green counters; choose the most appropriate diagram and use it to find P(two different colours) when two are drawn.",
    "[11.02b] Use the product rule to find the number of possible 4-digit PINs using the digits 0–9 with no repeats.",
    "[11.02c] Construct a Venn diagram for 100 people where 40 own a cat, 35 own a dog, 15 own both, and use it to find P(owns a dog | owns a cat).",
    "[11.02f] A card is drawn at random from a pack of 52; given it is red, find the probability it is a diamond, using P(A and B) = P(A given B)P(B)."
   ],
   "ideas": [
    {
     "code": "11.02a",
     "q": "How do I choose the most appropriate diagram to solve a complex probability problem?",
     "idea": "Combined events and probability diagrams — Sample spaces",
     "content": "Higher tier additionally: Recognise when a sample space is the most appropriate form to use when solving a complex probability problem. Use the most appropriate diagrams to solve unstructured questions where the route to the solution is less obvious. DfE ref: N5, P6, P7."
    },
    {
     "code": "11.02b",
     "q": "How do I use the product rule to count the number of outcomes of combined events?",
     "idea": "Combined events and probability diagrams — Enumeration",
     "content": "Higher tier additionally: Use the product rule for counting numbers of outcomes of combined events. DfE ref: N5."
    },
    {
     "code": "11.02c",
     "q": "How do I construct my own tree diagram, two-way table or Venn diagram to solve a complex or conditional probability problem?",
     "idea": "Combined events and probability diagrams — Venn diagrams and sets",
     "content": "Higher tier additionally: Construct tree diagrams, two-way tables or Venn diagrams to solve more complex probability problems (including conditional probabilities; structure for diagrams may not be given). [Knowledge of intersection (∩), union (∪) and complement (′) notation will not be required.] DfE ref: P6, P9."
    },
    {
     "code": "11.02f",
     "q": "What is conditional probability, and how do I calculate p(A and B) = p(A given B) × p(B)?",
     "idea": "Combined events and probability diagrams — The multiplication law of probability and conditional probability",
     "content": "Higher tier additionally: Understand the concept of conditional probability, and calculate it from first principles in known contexts. e.g.\t \u0007In a random cut of a pack of 52 cards, calculate the probability of drawing a diamond, given a red card is drawn. Derive or informally understand and apply the formula p(A and B) = p(A given B)p(B). Know that events A and B are independent if and only if p(A given B) = p(A). DfE ref: P8, P9."
    }
   ]
  },
  {
   "id": "statistics",
   "component": "C1",
   "option": null,
   "name": "OCR 12 Statistics",
   "caseStudies": [
    "[12.01a] A survey samples 50 of a school's 1200 students; state the population and the sample, and explain why picking only one tutor group is biased.",
    "[12.02a] Draw a pie chart to show favourite subjects from a frequency table of 60 students, then compare two years' sales on a composite bar chart.",
    "[12.03a] Find the mean, median, mode and range of the data set 4, 7, 7, 9, 12, 15, then estimate the mean from a grouped frequency table.",
    "[12.03b] Explain how a bar chart with a y-axis starting at 50 instead of 0 misrepresents the difference between two bars.",
    "[12.03c] Plot a scatter diagram for height and shoe size, draw a line of best fit, and use it to predict the shoe size for a height of 165 cm.",
    "[12.03d] Identify an outlier in the data set 12, 14, 13, 15, 47, 14, and suggest a reason it should be excluded from the mean."
   ],
   "ideas": [
    {
     "code": "12.01a",
     "q": "What is the difference between a population and a sample, and what makes a sample biased?",
     "idea": "Sampling — Populations and samples",
     "content": "Foundation tier also: Define the population in a study, and understand the difference between population and sample. Infer properties of populations or distributions from a sample. Understand what is meant by simple random sampling, and bias in sampling. DfE ref: S1."
    },
    {
     "code": "12.02a",
     "q": "Which chart should I use for categorical data, discrete numerical data or time series data?",
     "idea": "Interpreting and representing data — Categorical and numerical data",
     "content": "Initial learning: Interpret and construct charts appropriate to the data type; including frequency tables, bar charts, pie charts and pictograms for categorical data, vertical line charts for ungrouped discrete numerical data. Interpret multiple and composite bar charts. Foundation tier also: Design tables to classify data. Interpret and construct line graphs for time series data, and identify trends (e.g. seasonal variations). DfE ref: S2."
    },
    {
     "code": "12.03a",
     "q": "How do I calculate and compare the mean, mode, median and range of a data set?",
     "idea": "Analysing data — Summary statistics",
     "content": "Initial learning: Calculate the mean, mode, median and range for ungrouped data. Find the modal class, and calculate estimates of the range, mean and median for grouped data, and understand why they are estimates. Describe a population using statistics. Make simple comparisons. Compare data sets using ‘like for like’ summary values. Understand the advantages and disadvantages of summary values. DfE ref: S4, S5."
    },
    {
     "code": "12.03b",
     "q": "How can a graph's scale or labels be used to misrepresent data?",
     "idea": "Analysing data — Misrepresenting data",
     "content": "Initial learning: Recognise graphical misrepresentation through incorrect scales, labels, etc. DfE ref: S4."
    },
    {
     "code": "12.03c",
     "q": "How do I plot and interpret a scatter diagram, and use a line of best fit?",
     "idea": "Analysing data — Bivariate data",
     "content": "Initial learning: Plot and interpret scatter diagrams for bivariate data. Recognise correlation. Foundation tier also: Interpret correlation within the context of the variables, and appreciate the distinction between correlation and causation. Draw a line of best fit by eye, and use it to make predictions. Interpolate and extrapolate from data, and be aware of the limitations of these techniques. DfE ref: S6."
    },
    {
     "code": "12.03d",
     "q": "How do I identify an outlier in a data set or on a scatter graph?",
     "idea": "Analysing data — Outliers",
     "content": "Initial learning: Identify an outlier in simple cases. Foundation tier also: Appreciate there may be errors in data from values (outliers) that do not ‘fit’. Recognise outliers on a scatter graph. DfE ref: S4."
    }
   ]
  },
  {
   "id": "statistics-higher",
   "component": "C1",
   "option": "tier",
   "name": "OCR 12 Statistics — Higher tier additions",
   "caseStudies": [
    "[12.02b] Draw a cumulative frequency graph from a grouped frequency table of exam marks, and use it to estimate the median and interquartile range.",
    "[12.03a] Draw a box plot from the quartiles Q1 = 12, median = 18, Q3 = 25, and use it to compare with another distribution's median and IQR."
   ],
   "ideas": [
    {
     "code": "12.02b",
     "q": "How do I construct and interpret a cumulative frequency graph or histogram for grouped data?",
     "idea": "Interpreting and representing data — Grouped data",
     "content": "Higher tier additionally: Interpret and construct diagrams for grouped data as appropriate, i.e. cumulative frequency graphs and histograms (with either equal or unequal class intervals). DfE ref: S3 S4."
    },
    {
     "code": "12.03a",
     "q": "How do I estimate the mean, median, quartiles and interquartile range from grouped data, and use a box plot to compare distributions?",
     "idea": "Analysing data — Summary statistics",
     "content": "Higher tier additionally: Calculate estimates of mean, median, mode, range, quartiles and interquartile range from graphical representation of grouped data. Draw and interpret box plots. Use the median and interquartile range to compare distributions. DfE ref: S4, S5."
    }
   ]
  }
 ]
};
module.exports = { SPEC_J560 };
