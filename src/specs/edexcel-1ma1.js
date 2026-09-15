/* Pearson Edexcel GCSE Mathematics (1MA1) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_1MA1 = {
 "id": "EDX-1MA1",
 "board": "Pearson Edexcel",
 "subject": "Mathematics",
 "code": "1MA1",
 "level": "GCSE",
 "version": "Specification – Issue 2 – June 2015; Pearson Edexcel Level 1/Level 2 GCSE (9–1) in Mathematics (1MA1), first teaching from September 2015, first certification from June 2017",
 "firstExam": 2017,
 "essaySubject": false,
 "components": [
  {
   "id": "C1",
   "name": "Paper 1 (non-calculator)",
   "paperCode": "1MA1/1F or 1MA1/1H",
   "marks": 80,
   "weight": 33.33,
   "minutes": 90,
   "coversAll": true,
   "sections": [
    "Overview of content: 1. Number; 2. Algebra; 3. Ratio, proportion and rates of change; 4. Geometry and measures; 5. Probability; 6. Statistics. The content outlined for each tier will be assessed across all three papers, so this paper may assess any of the content areas.",
    "No calculator is allowed.",
    "1 hour and 30 minutes (both Foundation and Higher tier papers); 80 marks available; 33.33% of the total GCSE.",
    "Externally assessed. Availability: May/June and November (entry to the November series is restricted to students who are at least 16 on the preceding 31st August). First assessment: May/June 2017.",
    "Written examination papers with a range of question types; some questions will be set in both mathematical and non-mathematical contexts. Each paper will cover all Assessment Objectives, in the percentages outlined for each tier.",
    "All three papers must be at the same tier of entry and must be completed in the same assessment series. Individual papers are not graded: the qualification is graded on the total mark across all three papers."
   ]
  },
  {
   "id": "C2",
   "name": "Paper 2 (calculator)",
   "paperCode": "1MA1/2F or 1MA1/2H",
   "marks": 80,
   "weight": 33.33,
   "minutes": 90,
   "coversAll": true,
   "sections": [
    "Overview of content: 1. Number; 2. Algebra; 3. Ratio, proportion and rates of change; 4. Geometry and measures; 5. Probability; 6. Statistics. The content outlined for each tier will be assessed across all three papers, so this paper may assess any of the content areas.",
    "Calculator allowed.",
    "1 hour and 30 minutes (both Foundation and Higher tier papers); 80 marks available; 33.33% of the total GCSE.",
    "Externally assessed. Availability: May/June and November (entry to the November series is restricted to students who are at least 16 on the preceding 31st August). First assessment: May/June 2017.",
    "Written examination papers with a range of question types; some questions will be set in both mathematical and non-mathematical contexts. Each paper will cover all Assessment Objectives, in the percentages outlined for each tier.",
    "All three papers must be at the same tier of entry and must be completed in the same assessment series. Individual papers are not graded: the qualification is graded on the total mark across all three papers."
   ]
  },
  {
   "id": "C3",
   "name": "Paper 3 (calculator)",
   "paperCode": "1MA1/3F or 1MA1/3H",
   "marks": 80,
   "weight": 33.33,
   "minutes": 90,
   "coversAll": true,
   "sections": [
    "Overview of content: 1. Number; 2. Algebra; 3. Ratio, proportion and rates of change; 4. Geometry and measures; 5. Probability; 6. Statistics. The content outlined for each tier will be assessed across all three papers, so this paper may assess any of the content areas.",
    "Calculator allowed.",
    "1 hour and 30 minutes (both Foundation and Higher tier papers); 80 marks available; 33.33% of the total GCSE.",
    "Externally assessed. Availability: May/June and November (entry to the November series is restricted to students who are at least 16 on the preceding 31st August). First assessment: May/June 2017.",
    "Written examination papers with a range of question types; some questions will be set in both mathematical and non-mathematical contexts. Each paper will cover all Assessment Objectives, in the percentages outlined for each tier.",
    "All three papers must be at the same tier of entry and must be completed in the same assessment series. Individual papers are not graded: the qualification is graded on the total mark across all three papers."
   ]
  }
 ],
 "options": [
  {
   "id": "tier",
   "label": "Tier — each student takes all three papers at either Foundation tier or Higher tier",
   "choose": 1,
   "from": [
    "number-structure",
    "number-fdp",
    "number-measures",
    "algebra-notation",
    "algebra-graphs",
    "algebra-equations",
    "algebra-sequences",
    "ratio",
    "geometry-properties",
    "geometry-mensuration",
    "geometry-vectors",
    "probability",
    "statistics",
    "number-structure-higher",
    "number-fdp-higher",
    "number-measures-higher",
    "algebra-notation-higher",
    "algebra-graphs-higher",
    "algebra-equations-higher",
    "algebra-sequences-higher",
    "ratio-higher",
    "geometry-properties-higher",
    "geometry-mensuration-higher",
    "geometry-vectors-higher",
    "probability-higher",
    "statistics-higher"
   ],
   "routes": {
    "foundation": {
     "name": "Foundation tier (grades 1 to 5): Papers 1F, 2F, 3F",
     "topics": [
      "number-structure",
      "number-fdp",
      "number-measures",
      "algebra-notation",
      "algebra-graphs",
      "algebra-equations",
      "algebra-sequences",
      "ratio",
      "geometry-properties",
      "geometry-mensuration",
      "geometry-vectors",
      "probability",
      "statistics"
     ]
    },
    "higher": {
     "name": "Higher tier (grades 4 to 9): Papers 1H, 2H, 3H",
     "topics": [
      "number-structure",
      "number-fdp",
      "number-measures",
      "algebra-notation",
      "algebra-graphs",
      "algebra-equations",
      "algebra-sequences",
      "ratio",
      "geometry-properties",
      "geometry-mensuration",
      "geometry-vectors",
      "probability",
      "statistics",
      "number-structure-higher",
      "number-fdp-higher",
      "number-measures-higher",
      "algebra-notation-higher",
      "algebra-graphs-higher",
      "algebra-equations-higher",
      "algebra-sequences-higher",
      "ratio-higher",
      "geometry-properties-higher",
      "geometry-mensuration-higher",
      "geometry-vectors-higher",
      "probability-higher",
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
   "text": "Use and apply standard techniques. Students should be able to: accurately recall facts, terminology and definitions; use and interpret notation correctly; accurately carry out routine procedures or set tasks requiring multi-step solutions. Weighting: 50% Foundation, 40% Higher. Strands and elements assessed in every series: 1 accurately recall facts, terminology and definitions (no more than 10% of AO1); 2 use and interpret notation correctly; 3a accurately carry out routine procedures; 3b accurately carry out set tasks requiring multi-step solutions.",
   "byTier": {
    "foundation": 50,
    "higher": 40
   }
  },
  {
   "id": "AO2",
   "label": "Reason, interpret and communicate mathematically",
   "text": "Reason, interpret and communicate mathematically. Students should be able to: make deductions, inferences and draw conclusions from mathematical information; construct chains of reasoning to achieve a given result; interpret and communicate information accurately; present arguments and proofs; assess the validity of an argument and critically evaluate a given way of presenting information. Where problems require students to ‘use and apply standard techniques’ or to independently ‘solve problems’ a proportion of those marks should be attributed to the corresponding Assessment Objective. Weighting: 25% Foundation, 30% Higher. Element 4b, present proofs, is higher tier only.",
   "byTier": {
    "foundation": 25,
    "higher": 30
   }
  },
  {
   "id": "AO3",
   "label": "Solve problems within mathematics and in other contexts",
   "text": "Solve problems within mathematics and in other contexts. Students should be able to: translate problems in mathematical or non-mathematical contexts into a process or a series of mathematical processes; make and use connections between different parts of mathematics; interpret results in the context of the given problem; evaluate methods used and results obtained; evaluate solutions to identify how they may have been affected by assumptions made. Where problems require students to ‘use and apply standard techniques’ or to ‘reason, interpret and communicate mathematically’ a proportion of those marks should be attributed to the corresponding Assessment Objective. Weighting: 25% Foundation, 30% Higher.",
   "byTier": {
    "foundation": 25,
    "higher": 30
   }
  }
 ],
 "markConventions": {
  "style": "points",
  "summary": "The document defines three type styles for its content statements (Content, document page 3 / PDF page 15), and all three are modelled here: “All students will develop confidence and competence with the content identified by standard type”; “All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content”; “Only the more highly attaining students will be assessed on the content identified by bold type. The highest attaining students will develop confidence and competence with the bold content”; and “The distinction between standard, underlined and bold type applies to the content statements only, not to the Assessment Objectives or to the mathematical formulae”. Bold is the Foundation/Higher line and is carried by the thirteen ‘-higher’ rooms; underlining is the stretch line inside the content both tiers are assessed on, and the 41 statements the two tier lists underline (27 wholly, 14 in part — identically in both lists, and none of them a Higher-only statement) carry underlined: true on the idea and a tag at the end of the idea's content quoting that definition and, where the underlining is partial, the clause it covers. Every question is point-marked; there are no levels-marked essays, and the specification prints no question tariffs, so the three essayShapes (3, 5 and 6 marks, minutes pro rata at 1.125 minutes per mark from 80 marks in 90 minutes) are the app's Exam question timing shapes rather than shapes the document sets. The qualification is tiered: Foundation tier makes grades 1 to 5 available and Higher tier grades 4 to 9 (grade 3 allowed), and a student takes all three papers at the same tier in the same assessment series. Each paper is 1 hour 30 minutes, carries 80 marks and is 33.33% of the total GCSE (1.125 minutes per mark); the content outlined for each tier is assessed across all three papers, and every paper covers all Assessment Objectives in the percentages set for the tier. Paper 1 (1MA1/1F or 1MA1/1H) is a non-calculator assessment; a calculator is allowed for Paper 2 (1MA1/2F or 1MA1/2H) and Paper 3 (1MA1/3F or 1MA1/3H), so on Paper 1 exact answers — fractions in lowest terms, multiples of π, surds and the exact trigonometric values of N8, G17 and G21 — and the written method must both be shown. Assessment Objective weightings: AO1 50% Foundation / 40% Higher, AO2 25% / 30%, AO3 25% / 30%. Topic area weightings differ by tier: Foundation — Number 22–28%, Algebra 17–23%, Ratio, Proportion and Rates of change 22–28%, Geometry and Measures 12–18%, Statistics & Probability 12–18%; Higher — Number 12–18%, Algebra 27–33%, Ratio, Proportion and Rates of change 17–23%, Geometry and Measures 17–23%, Statistics & Probability 12–18%. The specification itself defines no mark types; the M, A and B marks described here are Pearson's published mark-scheme practice for this qualification, in which M (method) marks are awarded for a correct method or one that would lead to the answer, A (accuracy) marks are only available once the matching method mark has been earned, and B marks are for an independent correct statement or answer that needs no method, with dependent marks (dM, dA) available only if the earlier named mark has been scored, follow-through (ft) crediting correct work carried out on an earlier wrong value, cao and cso tightening what is accepted, awrt setting the rounding accepted and isw protecting a correct answer from later spoiling. Any correct method scores: a mark scheme lists the expected approach but an unexpected method that is mathematically correct and complete earns the same marks, which is why the method line, not the presentation, is what is credited — and why an answer with no working can lose every method mark. Formulae: Appendix 3 of the specification lists the formulae that can be provided in the examination as part of the relevant question — curved surface area of a cone = πrl, surface area of a sphere = 4πr², volume of a sphere = 4/3 πr³, volume of a cone = 1/3 πr²h — and the specification says the distinction between standard, underlined and bold type applies to the content statements only, not to the mathematical formulae, so Appendix 3 is not divided by tier. Pearson also issues a tiered Exam Aid formulae sheet for each assessment series, supplied as an insert in the question paper on the day: the Exam Aid states that “A formula sheet will be provided for foundation tier and for higher tier students” and that it “provides students with additional exam formulae which they may refer to in their examinations”, and the 2026 Assessment Window issue is transcribed in appendix3.md. The room kits' Formulae sheets follow the Exam Aid, marking which results are given and which must be recalled. Every other formula in the content — the area of a triangle, parallelogram and trapezium and the volume of a prism (G16), circumference and area of a circle (G17), Pythagoras' theorem and the trigonometric ratios (G20) and, at Higher tier, the quadratic formula, the sine and cosine rules and ½ab sin C (A18, G22, G23) — must be known to the extent the current Exam Aid does not provide it. For level fields, report level 1 for below half marks, 2 for half to two-thirds, 3 for the top third, with maxLevel 3.",
  "commandWords": [
   {
    "word": "Calculate",
    "means": "Work the answer out by a method that can be followed; the method marks sit in the working and the accuracy mark on the final value, given to the accuracy the question sets and with its unit. Used throughout the content — 'calculate exactly with fractions and multiples of π' (N8), 'calculate with and interpret standard form' (N9), 'calculate arc lengths, angles and areas of sectors of circles' (G18), 'calculate the probability of independent and dependent combined events' (P8). On Paper 1 no calculator is allowed, so the written method is part of what is credited."
   },
   {
    "word": "Solve",
    "means": "Find every value of the unknown that satisfies the equation or inequality. For a linear equation (A17) the inverse operations are the method; for a quadratic (A18) both roots are required and the factorised form, the completed square or the substitution into the formula is the method mark; for simultaneous equations (A19) both values must be given and paired; for an inequality (A22) the solution set must be given in inequality or set notation and, where asked, shown on a number line with the correct open or closed convention or shaded on a graph."
   },
   {
    "word": "Simplify / Simplify fully",
    "means": "Rewrite in the shortest equivalent form with no further step available: collect like terms, apply the laws of indices, cancel an algebraic fraction, or take out the largest square factor of a surd (A4, N8). 'Fully' means a partly simplified answer scores no accuracy mark."
   },
   {
    "word": "Expand / Expand and simplify",
    "means": "Multiply out the brackets, and where 'and simplify' is added, collect the like terms afterwards (A4). The expansion earns the method mark and the collected form the accuracy mark, so an unsimplified expansion is not a complete answer; at Higher tier products of two or more binomials are expanded in stages."
   },
   {
    "word": "Factorise / Factorise fully",
    "means": "Write the expression as a product (A4). 'Fully' means the highest common factor must be taken out and the remaining bracket factorised if it can be; x² + bx + c and the difference of two squares are required at both tiers and ax² + bx + c at Higher tier. A partial factorisation scores no accuracy mark, and the answer can always be checked by expanding."
   },
   {
    "word": "Estimate",
    "means": "Give an approximate value by a stated approximating method, not an exact calculation: 'estimate answers; check calculations using approximation and estimation' (N14) by rounding each value to one significant figure and showing the rounded calculation; 'estimate powers and roots of any given positive number' (N6, Higher); 'calculate or estimate gradients of graphs and areas under graphs' (A15, Higher) by drawing a tangent or splitting the area into strips. The method must be visible; a bare answer scores nothing."
   },
   {
    "word": "Construct",
    "means": "Draw accurately with the instruments named and leave the construction arcs visible: 'use the standard ruler and compass constructions (perpendicular bisector of a line segment, constructing a perpendicular to a given line from/at a given point, bisecting a given angle); use these to construct given figures and solve loci problems' (G2), 'construct and interpret plans and elevations of 3D shapes' (G13), 'construct theoretical possibility spaces' (P7). Lines are drawn to the nearest millimetre and angles to the nearest degree; a freehand or measured-only construction scores nothing."
   },
   {
    "word": "Prove / Show that",
    "means": "Set out a complete chain of reasoning from what is given to the stated result, with no gaps and with the conclusion written down. Because the answer is given, every step must be seen: 'use known results to obtain simple proofs' (G6), 'use algebra to support and construct arguments and proofs' (A6, Higher), 'apply and prove the standard circle theorems … and use them to prove related results' (G10, Higher), 'use vectors to construct geometric arguments and proofs' (G25, Higher). Working back from the answer, or verifying one case, does not prove a general statement."
   },
   {
    "word": "Interpret",
    "means": "Say what the number, diagram or graph means in the situation: 'calculate with and interpret standard form' (N9), 'identify and interpret gradients and intercepts of linear functions' (A10), 'interpret the gradient of a straight line graph as a rate of change' (R14), 'interpret and construct tables, charts and diagrams' (S2), 'apply and interpret limits of accuracy' (N16). The mark is for a statement in the context of the data, with units where they apply, not for the value alone."
   },
   {
    "word": "Describe",
    "means": "Give every element that specifies the thing named, and nothing else. A transformation (G7) needs its name and its defining data — centre, angle and direction for a rotation, the mirror line for a reflection, the column vector for a translation, centre and scale factor for an enlargement — and naming two transformations for one mapping scores nothing. 'Describe translations as 2D vectors' (G24) means the column vector; at Higher tier G8 asks for the changes and the invariance achieved by a combination."
   },
   {
    "word": "Draw",
    "means": "Produce an accurate drawing to the instruction given: 'draw diagrams from written description' (G1) and 'draw estimated lines of best fit' (S6). A line of best fit must follow the trend of the points with roughly equal numbers each side and pass through the region of the data; accuracy is judged against a tolerance, so a sketch will not do where a drawing is asked for."
   },
   {
    "word": "Plot",
    "means": "Mark the given points accurately on the axes and join them as the situation requires: 'plot graphs of equations that correspond to straight-line graphs' (A9), 'plot and interpret graphs (including reciprocal graphs) … in real contexts' (A14), plotting a scatter graph of bivariate data (S6). A misplotted point loses the accuracy mark even when the rest of the curve is right; a curve is drawn as a smooth curve, not as line segments."
   },
   {
    "word": "Write down / State / Know",
    "means": "A one-step answer recalled or read off, carrying B marks and needing no working: 'know the exact values of sin θ and cos θ for θ = 0°, 30°, 45°, 60° and 90°' (G21), 'know the formulae: circumference of a circle = 2πr = πd, area of a circle = πr²' (G17), writing down the gradient and intercept of a line from y = mx + c (A10). Working is not required and cannot rescue a wrong value."
   },
   {
    "word": "Give reasons / Justify",
    "means": "Quote the named property that each step rests on: the angle facts of G3 ('alternate angles are equal', 'angles on a straight line sum to 180°'), the congruence criterion of G5 (SSS, SAS, ASA, RHS), or the circle theorem of G10 at Higher tier. The reasoning marks belong to AO2 — construct chains of reasoning to achieve a given result — and a correct answer with no reason scores only the calculation marks."
   }
  ],
  "essayShapes": [
   {
    "marks": 3,
    "minutes": 3,
    "structure": "A routine single-technique question (AO1: use and apply standard techniques): one content statement applied directly — simplify, factorise, round to a given number of significant figures, find the mean of a list, work out an angle from one property. A full-marks answer shows the one line of working the scheme awards the method mark for, then gives the answer in the form the question asks for (a fraction in lowest terms, a multiple of π or a surd on Paper 1, a decimal to the stated accuracy on Papers 2 and 3) with its unit. A bare answer scores only the B mark where the scheme allows one, so the working is written down even when it is short. The specification sets no essay and prints no question tariffs: every question on all three papers is point-marked, so this is one of the app's Exam question timing shapes, not a tariff from the document. Minutes are pro rata from the paper — 80 marks in 90 minutes, 1.125 minutes per mark."
   },
   {
    "marks": 5,
    "minutes": 6,
    "structure": "A structured problem in two or three parts combining two content statements, usually in a real-life context — a reverse percentage, a ratio share followed by a proportion calculation, an area found from a composite shape, a probability read from a two-way table or a frequency tree. A full-marks answer translates the situation into the calculation (the first method mark), shows every intermediate value so that each further method mark is available, and states the final answer in context to the accuracy asked, with its unit; a correct method carried through an earlier wrong value still earns the follow-through marks, which is why the intermediate values must be seen. The specification sets no essay and prints no question tariffs: every question on all three papers is point-marked, so this is one of the app's Exam question timing shapes, not a tariff from the document. Minutes are pro rata from the paper — 80 marks in 90 minutes, 1.125 minutes per mark."
   },
   {
    "marks": 6,
    "minutes": 7,
    "structure": "An unstructured multi-step problem-solving and reasoning question (AO2 and AO3), the kind that carries 50% of the Foundation marks and 60% of the Higher marks between them: no part-marks are signposted, so the problem must be translated into a series of mathematical processes and each stage set out as a chain of reasoning. A full-marks answer shows every intermediate result, quotes the named property at each geometrical step (for example 'alternate angles are equal', the congruence criterion, or the circle theorem at Higher tier), makes the deduction explicit where the question is not geometrical, and ends with a sentence that answers the question asked — the value in context, in the form and to the accuracy required, with its unit. Where the question says 'show that' or 'prove', the answer is given, so every step must be present and the conclusion written out. The specification sets no essay and prints no question tariffs: every question on all three papers is point-marked, so this is one of the app's Exam question timing shapes, not a tariff from the document. Minutes are pro rata from the paper — 80 marks in 90 minutes, 1.125 minutes per mark."
   }
  ]
 },
 "judged": {
  "score": 0.9,
  "coverage": 1,
  "fidelity": 0.9,
  "options": 1,
  "familyFit": 1,
  "at": "2026-09-15",
  "by": "an examiner reading the PDF against the draft; verdict in scratch/courses/EDX-1MA1/spec.verdict.json",
  "notes": "Scored 0.90 (coverage 1.0, fidelity 0.9, options 1.0, family fit 1.0) with no invented codes and no missing document sections. All four of the examiner's errors have been applied: (1) the document's third type style is now modelled — the 41 underlined statements (27 wholly, 14 in part, read from the PDF's line graphics and identical in both tier lists) carry underlined: true and a content tag quoting the Content section's definition, and markConventions.summary now quotes all three type bullets; (2) the invented paper restriction on G21 is gone, since the document assesses the content of each tier across all three papers; (3) R13 now uses the document's own X and Y (X = kY, X = k/Y); (4) the unsupported ‘Since 2022 Ofqual has required a formulae sheet’ claim is replaced by what the Exam Aid itself says, that a formula sheet will be provided for foundation tier and for higher tier students, in markConventions.summary and in appendix3.md. Two findings from the examiner's notes are left for the admin: commandWords omits ‘Sketch’ (A12, A13) and ‘Find’/‘Work out’, and the monthly pass should file the examiner's reading of the Issue 2 sidelines — the four change bars all concern the introduction of Appendix 3 and the note that the type distinction does not extend to the formulae, with no sideline anywhere on either tier content list, so no code, weighting, paper structure or content statement is marked as changed from Issue 1. The tiered Exam Aid is reissued every series and is the one part of this course that needs re-fetching rather than re-reading."
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf",
  "etag": "W/\"104230-65b8058657a67\"",
  "lastModified": "Tue, 15 Sep 2026 07:17:37 GMT",
  "length": 1065520,
  "checkedAt": "2026-09-15T11:11:41.064Z"
 },
 "topics": [
  {
   "id": "number-structure",
   "component": "C1",
   "option": null,
   "name": "1. Number — Structure and calculation",
   "caseStudies": [
    "[N1] Order −3, 0.35, −1/2, 2.5 and 7/4 from smallest to largest, then write the comparison of the smallest and largest pair using < and >",
    "[N2] Work out 3.42 × 0.8 and −7 − (−12) by formal written methods, and add 2/5 + 1 3/4 as mixed numbers",
    "[N3] Use conventional notation for priority of operations to evaluate 5 + 2 × 3², and use the inverse operation to check that 372 ÷ 12 = 31",
    "[N4] Write 720 as a product of powers of its prime factors in product notation, then use the prime factorisations of 720 and 168 to find their HCF and LCM",
    "[N5] Apply a systematic listing strategy to list every three-digit number that can be made from the digits 1, 2 and 3 without repetition",
    "[N6] Evaluate 2⁶ and recognise it as a power of 2; find the cube root of 343 and the fourth root of 81",
    "[N7] Calculate with integer indices to simplify 3⁵ × 3⁻² and evaluate 4⁻², and work out √50 ÷ √2",
    "[N8] Calculate exactly with fractions and multiples of π: give the area of a circle of radius 3 cm as 9π cm² and work out 2/3 × 9π",
    "[N9] Write 0.00045 in standard form A × 10ⁿ, calculate (3 × 10⁵) × (4 × 10⁻²) and interpret the answer"
   ],
   "ideas": [
    {
     "code": "N1",
     "q": "How are numbers put in order and how is a comparison written down?",
     "idea": "Ordering numbers and the inequality symbols",
     "content": "Order positive and negative integers, decimals and fractions; use the symbols =, ≠, <, >, ≤, ≥. Compare by place value, or by writing fractions over a common denominator or as decimals, and state the comparison with the correct symbol."
    },
    {
     "code": "N2",
     "q": "How are the four operations carried out on any kind of number?",
     "idea": "The four operations and place value",
     "content": "Apply the four operations, including formal written methods, to integers, decimals and simple fractions (proper and improper), and mixed numbers – all both positive and negative; understand and use place value (e.g. when working with very large or very small numbers, and when calculating with decimals)."
    },
    {
     "code": "N3",
     "q": "How do operations relate to each other, and in what order are they done?",
     "idea": "Inverse operations and priority of operations",
     "content": "Recognise and use relationships between operations, including inverse operations (e.g. cancellation to simplify calculations and expressions); use conventional notation for priority of operations, including brackets, powers, roots and reciprocals."
    },
    {
     "code": "N4",
     "q": "How is a number built out of primes, and what do two numbers share?",
     "idea": "Primes, factors, multiples, HCF and LCM",
     "content": "Use the concepts and vocabulary of prime numbers, factors (divisors), multiples, common factors, common multiples, highest common factor, lowest common multiple, prime factorisation, including using product notation and the unique factorisation theorem: every integer has one prime factorisation, from which HCF and LCM are read off."
    },
    {
     "code": "N5",
     "q": "How is every possibility counted without missing or repeating one?",
     "idea": "Systematic listing strategies",
     "content": "Apply systematic listing strategies: work through the possibilities in a fixed order — holding one choice and varying the next — so that the list of outcomes, combinations or arrangements is complete and has no repeats."
    },
    {
     "code": "N6",
     "q": "What do powers and roots mean, and which powers should be recognised on sight?",
     "idea": "Positive integer powers and real roots",
     "content": "Use positive integer powers and associated real roots (square, cube and higher), recognise powers of 2, 3, 4, 5: a root undoes the matching power, and the powers of 2, 3, 4 and 5 should be recognised when they appear in a calculation."
    },
    {
     "code": "N7",
     "q": "How are calculations done with roots and with indices?",
     "idea": "Calculating with roots and integer indices",
     "content": "Calculate with roots, and with integer indices: multiply and divide powers of the same base by adding and subtracting indices, interpret a negative index as a reciprocal, and combine and simplify roots in a calculation. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "N8",
     "q": "How is an exact answer given without a decimal?",
     "idea": "Exact calculation with fractions and multiples of π",
     "content": "Calculate exactly with fractions and multiples of π: leave an answer as a fraction in lowest terms, or as a multiple of π (for example an area of 9π cm² rather than 28.3 cm²), which is the form a non-calculator paper expects. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "N9",
     "q": "How are very large and very small numbers written and calculated with?",
     "idea": "Standard form",
     "content": "Calculate with and interpret standard form A × 10ⁿ, where 1 ≤ A < 10 and n is an integer: convert to and from ordinary numbers, multiply and divide by handling A and the powers of 10 separately, and adjust the answer back into standard form."
    }
   ]
  },
  {
   "id": "number-fdp",
   "component": "C1",
   "option": null,
   "name": "1. Number — Fractions, decimals and percentages",
   "caseStudies": [
    "[N10] Write 3.5 as the fraction 7/2 and 0.375 as 3/8, and give 3/8 as a terminating decimal",
    "[N11] A bag holds red and blue counters in the ratio 2 : 3 — work out the fraction of the counters that are red",
    "[N12] Interpret 'of' as an operator: find 3/4 of 60 kg and increase 240 by 15% using a multiplier"
   ],
   "ideas": [
    {
     "code": "N10",
     "q": "How do terminating decimals and fractions correspond?",
     "idea": "Terminating decimals and their fractions",
     "content": "Work interchangeably with terminating decimals and their corresponding fractions (such as 3.5 and 7/2 or 0.375 or 3/8): read the decimal place value as the denominator and cancel, and divide numerator by denominator to return to the decimal."
    },
    {
     "code": "N11",
     "q": "Where do fractions appear inside a ratio problem?",
     "idea": "Fractions in ratio problems",
     "content": "Identify and work with fractions in ratio problems: a part of a ratio is a fraction of the whole (2 : 3 makes 2/5 and 3/5), and a fraction can be rewritten as a ratio, so ratio and fraction questions can be solved by the same working."
    },
    {
     "code": "N12",
     "q": "What does it mean to treat a fraction or a percentage as something that acts on a quantity?",
     "idea": "Fractions and percentages as operators",
     "content": "Interpret fractions and percentages as operators: multiplying by 3/4 or by 1.15 acts on a quantity to scale it, so 'of', a fraction increase and a percentage change are all one multiplication by the right multiplier."
    }
   ]
  },
  {
   "id": "number-measures",
   "component": "C1",
   "option": null,
   "name": "1. Number — Measures and accuracy",
   "caseStudies": [
    "[N13] Work with standard compound measures: a car travels 150 km in 2.5 hours — give its average speed in km/h, using decimal quantities",
    "[N14] Estimate the answer to 39.7 × 5.13 ÷ 0.48 by approximating each value, and use it to check a calculator answer",
    "[N15] Round 3.14159 to 2 decimal places and to 3 significant figures, and write the error interval for a length given as 8 cm to the nearest centimetre using inequality notation",
    "[N16] A time is measured as 12.5 seconds to the nearest 0.1 second — apply and interpret the limits of accuracy of the measurement"
   ],
   "ideas": [
    {
     "code": "N13",
     "q": "What units are used, and how are compound measures handled?",
     "idea": "Standard units and compound measures",
     "content": "Use standard units of mass, length, time, money and other measures (including standard compound measures) using decimal quantities where appropriate: name the unit with every answer, and treat a compound measure such as speed, density or price per unit as one quantity divided by another."
    },
    {
     "code": "N14",
     "q": "How is an answer checked for being about right?",
     "idea": "Estimating and checking by approximation",
     "content": "Estimate answers; check calculations using approximation and estimation, including answers obtained using technology: round each value to a convenient figure, do the easy calculation, and compare the estimate with the answer obtained to see whether it is sensible."
    },
    {
     "code": "N15",
     "q": "How accurately should a number be given, and what does that accuracy allow?",
     "idea": "Rounding and error intervals",
     "content": "Round numbers and measures to an appropriate degree of accuracy (e.g. to a specified number of decimal places or significant figures); use inequality notation to specify simple error intervals due to truncation or rounding, so a length of 8 cm to the nearest cm is written 7.5 ≤ x < 8.5. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"(e.g. to a specified number of decimal places or significant figures); use inequality notation to specify simple error intervals due to truncation or rounding\".",
     "underlined": true
    },
    {
     "code": "N16",
     "q": "What follows from a measurement only being accurate to a point?",
     "idea": "Limits of accuracy",
     "content": "Apply and interpret limits of accuracy: a rounded or truncated measurement stands for every value in its interval, so state the limits the accuracy implies and say what they mean for the quantity being measured. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "algebra-notation",
   "component": "C1",
   "option": null,
   "name": "2. Algebra — Notation, vocabulary and manipulation",
   "caseStudies": [
    "[A1] Write a × b, y + y + y, a × a × b and a ÷ b in the conventional algebraic notation, and explain what the brackets in 3(x + 2) mean",
    "[A2] Substitute numerical values into a formula: find the value of 5x² − 3y when x = −2 and y = 4, and use a scientific formula such as v = u + at",
    "[A3] Decide, for each of 3x + 1 = 7, 2(x + 3) = 2x + 6, A = πr² and x > 5, whether it is an equation, an identity, a formula or an inequality, and name its terms and factors",
    "[A4] Simplify and manipulate: collect 5a + 3b − 2a, expand 4(2x − 3), take out the common factor in 8xy + 12y², expand (x + 3)(x − 5), factorise x² + 7x + 12 and x² − 16, and simplify x⁵ × x² ÷ x³",
    "[A5] Rearrange a standard formula to change the subject: make r the subject of A = πr², and make t the subject of v = u + at",
    "[A6] Argue mathematically to show that 2(x + 3) + 4 and 2x + 10 are equivalent, and say why that makes the statement an identity rather than an equation",
    "[A7] Interpret x → 3x − 1 as a function with inputs and outputs, and give the output when the input is 4"
   ],
   "ideas": [
    {
     "code": "A1",
     "q": "What do the conventions of algebraic notation stand for?",
     "idea": "Algebraic notation and its conventions",
     "content": "Use and interpret algebraic manipulation, including: ab in place of a × b; 3y in place of y + y + y and 3 × y; a² in place of a × a, a³ in place of a × a × a, a²b in place of a × a × b; a/b in place of a ÷ b; coefficients written as fractions rather than as decimals; brackets."
    },
    {
     "code": "A2",
     "q": "How is a value worked out from a formula or an expression?",
     "idea": "Substituting numerical values",
     "content": "Substitute numerical values into formulae and expressions, including scientific formulae: replace each letter by its value — keeping brackets round a negative value — and then apply the priority of operations to evaluate."
    },
    {
     "code": "A3",
     "q": "What is the difference between an expression, an equation, a formula, an identity and an inequality?",
     "idea": "The vocabulary of algebra",
     "content": "Understand and use the concepts and vocabulary of expressions, equations, formulae, identities, inequalities, terms and factors: an expression has no equals sign, an equation is true for particular values, an identity for all values, a formula gives a rule for a quantity, and an inequality compares. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"formulae, identities, inequalities, terms and factors\".",
     "underlined": true
    },
    {
     "code": "A4",
     "q": "How is an algebraic expression tidied up or rewritten?",
     "idea": "Simplifying and manipulating expressions",
     "content": "Simplify and manipulate algebraic expressions (including those involving surds) by: collecting like terms; multiplying a single term over a bracket; taking out common factors; expanding products of two binomials; factorising quadratic expressions of the form x² + bx + c, including the difference of two squares; simplifying expressions involving sums, products and powers, including the laws of indices. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"simplify and manipulate algebraic expressions (including those involving surds) by: … expanding products of two binomials … factorising quadratic expressions of the form x² + bx + c, including the difference of two squares\".",
     "underlined": true
    },
    {
     "code": "A5",
     "q": "How is a formula turned round to give a different letter?",
     "idea": "Standard formulae and changing the subject",
     "content": "Understand and use standard mathematical formulae; rearrange formulae to change the subject: apply the inverse operation to both sides in turn until the required letter stands alone on one side, appearing once."
    },
    {
     "code": "A6",
     "q": "How is it shown that two expressions are always equal?",
     "idea": "Equations, identities and algebraic argument",
     "content": "Know the difference between an equation and an identity; argue mathematically to show algebraic expressions are equivalent, and use algebra to support and construct arguments: expand and collect both sides to show they agree for all values, and set out the argument as a chain of equivalent expressions. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "A7",
     "q": "How can an expression be read as a machine with an input and an output?",
     "idea": "Simple expressions as functions",
     "content": "Where appropriate, interpret simple expressions as functions with inputs and outputs: an expression such as 3x − 1 takes an input x and returns an output, so a value can be substituted in or an output traced back to its input."
    }
   ]
  },
  {
   "id": "algebra-graphs",
   "component": "C1",
   "option": null,
   "name": "2. Algebra — Graphs",
   "caseStudies": [
    "[A8] Plot and read coordinates in all four quadrants, and give the coordinates of the point reached from (3, 2) by moving 5 left and 4 down",
    "[A9] Plot the graph of y = 2x − 3, use y = mx + c to write down the equation of a line parallel to it through (0, 5), and find the equation of the line through (1, 4) and (3, 10)",
    "[A10] Identify the gradient and the y intercept of y = 4 − 3x algebraically, and find the gradient of a drawn straight line from the graph",
    "[A11] From the graph of y = x² − 4x + 3 identify the roots, the y intercept and the turning point, and deduce the roots algebraically by factorising",
    "[A12] Recognise and sketch the graphs of y = 2x + 1, y = x², y = x³ and y = 1/x with x ≠ 0, and describe the shape of each",
    "[A14] Plot and interpret a distance–time graph for a journey to find the speed, and use a graph to find an approximate solution to a kinematic problem involving distance, speed and acceleration"
   ],
   "ideas": [
    {
     "code": "A8",
     "q": "How are points located on the whole coordinate plane?",
     "idea": "Coordinates in all four quadrants",
     "content": "Work with coordinates in all four quadrants: read and plot (x, y) with either or both coordinates negative, and use the axes to find distances, midpoints and the position of a point after a described move."
    },
    {
     "code": "A9",
     "q": "How is the graph of a straight line drawn, and how is its equation found?",
     "idea": "Straight-line graphs and their equations",
     "content": "Plot graphs of equations that correspond to straight-line graphs in the coordinate plane; use the form y = mx + c to identify parallel lines; find the equation of the line through two given points or through one point with a given gradient — parallel lines have equal gradient m. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"coordinate plane; use the form y = mx + c to identify parallel lines; find the equation of the line through two given points or through one point with a given gradient\".",
     "underlined": true
    },
    {
     "code": "A10",
     "q": "What do the numbers in y = mx + c mean on the picture?",
     "idea": "Gradients and intercepts of linear functions",
     "content": "Identify and interpret gradients and intercepts of linear functions graphically and algebraically: the gradient is the change in y over the change in x and the rate the line represents, and the intercept is the value where the line crosses the axis."
    },
    {
     "code": "A11",
     "q": "What can be read off a quadratic graph, and what can be found without it?",
     "idea": "Roots, intercepts and turning points of quadratics",
     "content": "Identify and interpret roots, intercepts, turning points of quadratic functions graphically; deduce roots algebraically: the roots are where the curve meets the x axis, the y intercept is the value at x = 0, the turning point is the vertex on the line of symmetry, and factorising gives the roots exactly. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "A12",
     "q": "What shape does each standard function have?",
     "idea": "Recognising and sketching standard graphs",
     "content": "Recognise, sketch and interpret graphs of linear functions, quadratic functions, simple cubic functions, the reciprocal function y = 1/x with x ≠ 0: a line, a parabola, a cubic with its double bend, and the two-branch reciprocal curve that never meets either axis. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"functions, simple cubic functions, the reciprocal function y = 1/x with x ≠ 0\".",
     "underlined": true
    },
    {
     "code": "A14",
     "q": "How is a graph used to answer a question about a real situation?",
     "idea": "Graphs in real contexts",
     "content": "Plot and interpret graphs (including reciprocal graphs) and graphs of non-standard functions in real contexts to find approximate solutions to problems such as simple kinematic problems involving distance, speed and acceleration: read values off the axes, use the gradient as a rate, and quote the answer with its unit. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"plot and interpret graphs (including reciprocal graphs) and graphs of\".",
     "underlined": true
    }
   ]
  },
  {
   "id": "algebra-equations",
   "component": "C1",
   "option": null,
   "name": "2. Algebra — Solving equations and inequalities",
   "caseStudies": [
    "[A17] Solve 5x − 3 = 2x + 9 algebraically, and find an approximate solution to 3x − 1 = 5 using a graph",
    "[A18] Solve x² + 5x + 6 = 0 algebraically by factorising, and find approximate solutions to x² − 3x − 1 = 0 using a graph",
    "[A19] Solve the simultaneous equations 3x + 2y = 12 and x − y = 1 algebraically, and check by finding the approximate solution from the graphs of the two lines",
    "[A21] A rectangle is 3 cm longer than it is wide and has perimeter 26 cm — translate the situation into an equation, solve it and interpret the solution as the two side lengths",
    "[A22] Solve the linear inequality 4x − 5 ⩽ 11 and represent the solution set on a number line"
   ],
   "ideas": [
    {
     "code": "A17",
     "q": "How is an equation with one unknown solved?",
     "idea": "Solving linear equations",
     "content": "Solve linear equations in one unknown algebraically (including those with the unknown on both sides of the equation); find approximate solutions using a graph: collect the unknowns on one side and the numbers on the other by inverse operations, or read the solution off where two graphs cross. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "A18",
     "q": "How are the solutions of a quadratic equation found?",
     "idea": "Solving quadratic equations by factorising",
     "content": "Solve quadratic equations algebraically by factorising; find approximate solutions using a graph: write the equation as a product equal to zero, set each bracket to zero to give the two roots, or read the roots off the points where the curve crosses the x axis. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "A19",
     "q": "How are two equations in two unknowns solved together?",
     "idea": "Simultaneous linear equations",
     "content": "Solve two simultaneous equations in two variables (linear/linear) algebraically; find approximate solutions using a graph: eliminate one variable by adding or subtracting matched multiples, or substitute, then back-substitute for the second — or read off the point of intersection of the two lines. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "A21",
     "q": "How does a worded situation become algebra that can be solved?",
     "idea": "Deriving and solving equations from a situation",
     "content": "Translate simple situations or procedures into algebraic expressions or formulae; derive an equation (or two simultaneous equations), solve the equation(s) and interpret the solution: name the unknown, write the relation the situation states, solve, and answer the question asked in context. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "A22",
     "q": "How is a range of values solved for and shown?",
     "idea": "Linear inequalities and the solution set",
     "content": "Solve linear inequalities in one variable; represent the solution set on a number line: work as for an equation, keeping the inequality sign (reversing it if multiplying or dividing by a negative), and mark the solution set with the open or closed circle convention. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "algebra-sequences",
   "component": "C1",
   "option": null,
   "name": "2. Algebra — Sequences",
   "caseStudies": [
    "[A23] Generate the first five terms of a sequence from the term-to-term rule 'start at 4, add 3', and from the position-to-term rule nth term = 2n + 1",
    "[A24] Continue the triangular numbers 1, 3, 6, 10, …, identify 2, 4, 8, 16, … as the geometric progression rⁿ with r = 2, and continue the Fibonacci type sequence 1, 1, 2, 3, 5, …",
    "[A25] Deduce an expression for the nth term of the linear sequence 5, 8, 11, 14, … and use it to find the 50th term"
   ],
   "ideas": [
    {
     "code": "A23",
     "q": "How are the terms of a sequence produced from a rule?",
     "idea": "Generating terms from a rule",
     "content": "Generate terms of a sequence from either a term-to-term or a position-to-term rule: a term-to-term rule needs the previous term and is applied repeatedly, while a position-to-term rule gives any term directly from its position n."
    },
    {
     "code": "A24",
     "q": "Which sequences should be recognised, and how do they carry on?",
     "idea": "Recognising special sequences",
     "content": "Recognise and use sequences of triangular, square and cube numbers, simple arithmetic progressions, Fibonacci type sequences, quadratic sequences, and simple geometric progressions (rⁿ where n is an integer, and r is a rational number > 0): identify the pattern behind the terms and use it to continue the sequence or find a missing term. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"simple arithmetic progressions, Fibonacci type sequences, quadratic sequences, and simple geometric progressions (rⁿ where n is an integer, and r is a rational number > 0)\".",
     "underlined": true
    },
    {
     "code": "A25",
     "q": "How is a rule for the nth term of a linear sequence found?",
     "idea": "The nth term of a linear sequence",
     "content": "Deduce expressions to calculate the nth term of linear sequences: the common difference is the coefficient of n, and the constant is the term that would sit at position zero, giving an expression that produces any term and tests whether a value is in the sequence."
    }
   ]
  },
  {
   "id": "ratio",
   "component": "C1",
   "option": null,
   "name": "3. Ratio, proportion and rates of change",
   "caseStudies": [
    "[R1] Change freely between related standard units: convert 2.5 hours to minutes, 3 m² to cm² and 4.2 kg to grams, and convert a speed of 12 m/s into km/h",
    "[R2] Use the scale of a map (1 : 25 000) to find the real distance between two points 6 cm apart on the map, and find a length on a scale drawing",
    "[R3] Express 7 as a fraction of 4 and 3 as a fraction of 8, giving one fraction greater than 1 and one less than 1",
    "[R4] Write the ratio 18 : 24 in its simplest form, and write 0.5 m : 75 cm as a ratio of two integers in simplest form",
    "[R5] Share £45 in the ratio 4 : 5, express the division of 60 into 24 and 36 as a ratio, and work out how much orange squash is needed to mix a drink in the ratio 1 : 4 with 500 ml of water",
    "[R6] B is 1.5 times A — express the multiplicative relationship between A and B as a ratio and as a fraction",
    "[R7] Decide whether 3 : 5 and 12 : 20 are in proportion by testing them as equal ratios, and use the equality to find the missing value in 3 : 5 = x : 35",
    "[R8] For the ratio 2 : 3, write the fraction one quantity is of the other and the linear function y = 1.5x that links them",
    "[R9] Express 18 as a percentage of 40, increase £250 by 12% and decrease it by 12%, find the original price of an item that cost £84 after a 20% reduction, work with a percentage greater than 100%, and calculate the simple interest on £800 at 3% for 4 years",
    "[R10] Solve a direct proportion problem — 5 pens cost £1.75, find the cost of 8 — and an inverse proportion problem where 4 workers take 9 days and 6 workers are used, using graphical and algebraic representations",
    "[R11] Use compound units: find the density of an object of mass 240 g and volume 30 cm³, the pay for 7 hours at £9.20 an hour, and the unit price that makes a 750 ml bottle at £1.80 better value than a 500 ml bottle at £1.30",
    "[R12] Two similar solids have lengths in the ratio 2 : 3 — compare their areas and their volumes using ratio notation and link the ratios to the scale factor",
    "[R13] X is inversely proportional to Y and X = 12 when Y = 3 — interpret the equation that describes the relationship and use it to find X when Y = 9",
    "[R14] Interpret the gradient of a straight line graph of cost against quantity as a rate of change, and identify from two graphs which illustrates direct and which inverse proportion",
    "[R16] Set up and solve a growth problem: £2000 invested at 3% compound interest for 5 years — find the value and interpret the answer, and do the same for a decay problem"
   ],
   "ideas": [
    {
     "code": "R1",
     "q": "How is a quantity moved from one unit to another?",
     "idea": "Converting standard and compound units",
     "content": "Change freely between related standard units (e.g. time, length, area, volume/capacity, mass) and compound units (e.g. speed, rates of pay, prices, density, pressure) in numerical and algebraic contexts — area and volume conversions square and cube the linear factor, and a compound unit is converted one part at a time. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"prices, density, pressure) in numerical and algebraic contexts\".",
     "underlined": true
    },
    {
     "code": "R2",
     "q": "How is a real length recovered from a drawing or a map?",
     "idea": "Scale factors, scale diagrams and maps",
     "content": "Use scale factors, scale diagrams and maps: multiply a measured length by the scale factor to get the real length and divide to go the other way, reading a scale given as a ratio such as 1 : 25 000 or as a statement of equivalent lengths."
    },
    {
     "code": "R3",
     "q": "How is one quantity written as a fraction of another?",
     "idea": "One quantity as a fraction of another",
     "content": "Express one quantity as a fraction of another, where the fraction is less than 1 or greater than 1: put the first quantity over the second in the same units and cancel, accepting an improper fraction when the first is the larger."
    },
    {
     "code": "R4",
     "q": "How is a ratio written and simplified?",
     "idea": "Ratio notation and simplest form",
     "content": "Use ratio notation, including reduction to simplest form: write the parts separated by a colon in the same units, then divide every part by their highest common factor, giving integer parts or the form 1 : n."
    },
    {
     "code": "R5",
     "q": "How is a quantity shared in a given ratio?",
     "idea": "Dividing a quantity in a given ratio",
     "content": "Divide a given quantity into two parts in a given part:part or part:whole ratio; express the division of a quantity into two parts as a ratio; apply ratio to real contexts and problems (such as those involving conversion, comparison, scaling, mixing, concentrations): find the value of one part by dividing by the total number of parts, then multiply."
    },
    {
     "code": "R6",
     "q": "How is 'one quantity is so many times another' written?",
     "idea": "Multiplicative relationships as ratios or fractions",
     "content": "Express a multiplicative relationship between two quantities as a ratio or a fraction: if one quantity is 1.5 times the other the relationship is 3 : 2 or the fraction 3/2, and either form can be used in the calculation that follows."
    },
    {
     "code": "R7",
     "q": "When are two ratios in proportion?",
     "idea": "Proportion as equality of ratios",
     "content": "Understand and use proportion as equality of ratios: two quantities are in proportion when their ratios are equal, so a missing value is found by scaling one ratio up or down until it matches the other."
    },
    {
     "code": "R8",
     "q": "How do ratios, fractions and straight-line graphs describe the same thing?",
     "idea": "Ratios, fractions and linear functions",
     "content": "Relate ratios to fractions and to linear functions: a ratio a : b gives the fraction a/b and the function y = (b/a)x, whose straight-line graph through the origin has the ratio as its gradient."
    },
    {
     "code": "R9",
     "q": "What is a percentage, and how are percentage problems solved?",
     "idea": "Percentages and percentage change",
     "content": "Define percentage as 'number of parts per hundred'; interpret percentages and percentage changes as a fraction or a decimal, and interpret these multiplicatively; express one quantity as a percentage of another; compare two quantities using percentages; work with percentages greater than 100%; solve problems involving percentage change, including percentage increase/decrease and original value problems, and simple interest including in financial mathematics."
    },
    {
     "code": "R10",
     "q": "How are direct and inverse proportion problems solved?",
     "idea": "Direct and inverse proportion",
     "content": "Solve problems involving direct and inverse proportion, including graphical and algebraic representations: in direct proportion the quantities scale together and the unitary value is the method step, while in inverse proportion their product is constant, so one rises as the other falls."
    },
    {
     "code": "R11",
     "q": "How are speed, density, pressure and rates of pay handled?",
     "idea": "Compound units",
     "content": "Use compound units such as speed, rates of pay, unit pricing, density and pressure: each is one quantity per unit of another, so the three quantities in the relation give two rearrangements, and the unit written on the answer states which. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"density and pressure\".",
     "underlined": true
    },
    {
     "code": "R12",
     "q": "What happens to length, area and volume when a shape is scaled?",
     "idea": "Comparing lengths, areas and volumes by ratio",
     "content": "Compare lengths, areas and volumes using ratio notation; make links to similarity (including trigonometric ratios) and scale factors: corresponding lengths of similar figures are in a fixed ratio, and that ratio is what a trigonometric ratio and a scale factor also record. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "R13",
     "q": "What does inverse proportion mean algebraically?",
     "idea": "Inverse proportion and its equation",
     "content": "Understand that X is inversely proportional to Y is equivalent to X is proportional to 1/Y; interpret equations that describe direct and inverse proportion: X = kY for direct and X = k/Y for inverse, with k the constant of proportionality found from a given pair of values. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "R14",
     "q": "What does the steepness of a graph tell you about a rate?",
     "idea": "Gradient as a rate of change",
     "content": "Interpret the gradient of a straight line graph as a rate of change; recognise and interpret graphs that illustrate direct and inverse proportion: direct proportion is a straight line through the origin whose gradient is the rate, inverse proportion a curve falling away from both axes. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "R16",
     "q": "How do repeated percentage changes build up over time?",
     "idea": "Growth and decay problems",
     "content": "Set up, solve and interpret the answers in growth and decay problems, including compound interest: apply the multiplier once per period, so n periods give the multiplier raised to the power n, and interpret the answer as the final amount or the total change. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "geometry-properties",
   "component": "C1",
   "option": null,
   "name": "4. Geometry and measures — Properties and constructions",
   "caseStudies": [
    "[G1] Draw a diagram from a written description — two parallel lines crossed by a transversal, with the right angles and equal sides marked — and label the sides and angles of triangle ABC by the standard convention",
    "[G2] Use a straight edge and compasses to construct the perpendicular bisector of a line segment, a perpendicular to a line from a point, and the bisector of an angle, then use them to shade the locus of points less than 4 cm from A and nearer to AB than to AC",
    "[G3] Find the missing angle at a point on a straight line, identify a pair of alternate angles on parallel lines, and use the angle sum of a triangle to deduce the sum of the interior angles of a hexagon and the size of each exterior angle of a regular polygon",
    "[G4] Derive and apply the properties of a rhombus and a kite to find the missing angles in a given quadrilateral, using the correct name for each property",
    "[G5] Decide which congruence criterion — SSS, SAS, ASA or RHS — proves that two given triangles are congruent",
    "[G6] Use angle facts, congruence and the properties of quadrilaterals to prove that the base angles of an isosceles triangle are equal, and conjecture and derive a result about the angles in a given figure",
    "[G7] Construct the image of a shape after a rotation of 90° about the origin, a reflection in the line x = 1, a translation and an enlargement of scale factor 1/2, and describe the transformation that maps one given shape onto another",
    "[G9] Label the centre, radius, chord, diameter, circumference, tangent, arc, sector and segment on a circle diagram and apply the definitions to a given circle",
    "[G11] Solve a geometrical problem on coordinate axes: show that the quadrilateral with vertices (0, 0), (4, 1), (5, 5) and (1, 4) is a rhombus",
    "[G12] Identify the number of faces, edges and vertices of a cuboid, a triangular prism, a square-based pyramid, a cylinder, a cone and a sphere",
    "[G13] Construct the plan and the front and side elevations of a solid made from cubes, and interpret a given set of plans and elevations to identify the solid"
   ],
   "ideas": [
    {
     "code": "G1",
     "q": "What are the standard names, notations and labelling conventions?",
     "idea": "Conventional terms, notation and diagrams",
     "content": "Use conventional terms and notation: points, lines, vertices, edges, planes, parallel lines, perpendicular lines, right angles, polygons, regular polygons and polygons with reflection and/or rotation symmetries; use the standard conventions for labelling and referring to the sides and angles of triangles; draw diagrams from written description."
    },
    {
     "code": "G2",
     "q": "What can be constructed with only a straight edge and compasses?",
     "idea": "Ruler and compass constructions and loci",
     "content": "Use the standard ruler and compass constructions (perpendicular bisector of a line segment, constructing a perpendicular to a given line from/at a given point, bisecting a given angle); use these to construct given figures and solve loci problems; know that the perpendicular distance from a point to a line is the shortest distance to the line — construction arcs must be left visible. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "G3",
     "q": "Which angle facts let a missing angle be found and justified?",
     "idea": "Angle properties and the angle sum",
     "content": "Apply the properties of angles at a point, angles at a point on a straight line, vertically opposite angles; understand and use alternate and corresponding angles on parallel lines; derive and use the sum of angles in a triangle (e.g. to deduce and use the angle sum in any polygon, and to derive properties of regular polygons)."
    },
    {
     "code": "G4",
     "q": "What defines each special quadrilateral and plane figure?",
     "idea": "Properties of quadrilaterals and plane figures",
     "content": "Derive and apply the properties and definitions of special types of quadrilaterals, including square, rectangle, parallelogram, trapezium, kite and rhombus; and triangles and other plane figures using appropriate language — the sides, angles, diagonals and symmetry each name implies."
    },
    {
     "code": "G5",
     "q": "When are two triangles certainly identical?",
     "idea": "Congruence criteria for triangles",
     "content": "Use the basic congruence criteria for triangles (SSS, SAS, ASA, RHS): name the criterion and match the corresponding sides and angles in the right order, since these four sets of information fix a triangle exactly. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "G6",
     "q": "How is a geometrical result argued from what is already known?",
     "idea": "Conjecture, derivation and simple proof",
     "content": "Apply angle facts, triangle congruence, similarity and properties of quadrilaterals to conjecture and derive results about angles and sides, including Pythagoras' theorem and the fact that the base angles of an isosceles triangle are equal, and use known results to obtain simple proofs — each step quoting the property it rests on. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "G7",
     "q": "How are the four transformations carried out and described?",
     "idea": "Congruent and similar shapes by transformation",
     "content": "Identify, describe and construct congruent and similar shapes, including on coordinate axes, by considering rotation, reflection, translation and enlargement (including fractional scale factors): a complete description gives centre and angle and direction for a rotation, the mirror line for a reflection, the column vector for a translation, and centre and scale factor for an enlargement. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"enlargement (including fractional scale factors)\".",
     "underlined": true
    },
    {
     "code": "G9",
     "q": "What are the parts of a circle called?",
     "idea": "Circle definitions and properties",
     "content": "Identify and apply circle definitions and properties, including: centre, radius, chord, diameter, circumference, tangent, arc, sector and segment — each named part being used correctly in the working of a circle problem. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"chord, diameter, circumference, tangent, arc, sector and segment\".",
     "underlined": true
    },
    {
     "code": "G11",
     "q": "How is geometry done with coordinates?",
     "idea": "Geometrical problems on coordinate axes",
     "content": "Solve geometrical problems on coordinate axes: use coordinates to find lengths, midpoints, gradients and the positions of vertices, and use them to establish that a figure drawn on the axes has a named geometrical property."
    },
    {
     "code": "G12",
     "q": "What are the surfaces, edges and vertices of the standard solids?",
     "idea": "Properties of 3D shapes",
     "content": "Identify properties of the faces, surfaces, edges and vertices of: cubes, cuboids, prisms, cylinders, pyramids, cones and spheres — counting and naming them, and recognising which faces are congruent or which surfaces are curved."
    },
    {
     "code": "G13",
     "q": "How is a solid shown on paper from each direction?",
     "idea": "Plans and elevations",
     "content": "Construct and interpret plans and elevations of 3D shapes: the plan is the view from above and the elevations the views from the front and the side, drawn to scale on squared paper, and a given set of views can be read back to identify the solid. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "geometry-mensuration",
   "component": "C1",
   "option": null,
   "name": "4. Geometry and measures — Mensuration and calculation",
   "caseStudies": [
    "[G14] Use standard units of measure: give the area of a room in m², the capacity of a bottle in litres and the mass of a parcel in kg, converting where the units given do not match",
    "[G15] Measure a line segment to the nearest millimetre and an angle to the nearest degree on a scale drawing, and use a three-figure bearing to describe the direction of B from A",
    "[G16] Apply the formulae to calculate the area of a triangle, a parallelogram and a trapezium, and the volume of a cuboid and of a cylinder as a right prism",
    "[G17] Know circumference = 2πr = πd and area = πr² — calculate the perimeter and area of a circle of radius 6 cm, the area of a composite shape made of a rectangle and a semicircle, and the surface area and volume of a sphere and a cone",
    "[G18] Calculate the arc length and the area of a sector of a circle of radius 9 cm with angle 40°, and find the angle of a sector from its area",
    "[G19] Two triangles are similar with corresponding sides 6 cm and 9 cm — apply the relationship between the lengths to find the remaining side, and use congruence to justify that two others are identical",
    "[G20] Use a² + b² = c² to find the third side of a right-angled triangle, and use sin θ, cos θ and tan θ to find a missing length and a missing angle in a two-dimensional figure",
    "[G21] Write down the exact values of sin 30°, cos 60°, sin 45°, cos 0°, sin 90° and tan 60° and use them in a non-calculator calculation"
   ],
   "ideas": [
    {
     "code": "G14",
     "q": "What units measure length, area, volume, mass, time and money?",
     "idea": "Standard units of measure",
     "content": "Use standard units of measure and related concepts (length, area, volume/capacity, mass, time, money, etc.): choose the unit that suits the quantity, keep every quantity in a calculation in the same unit, and state the unit with the answer."
    },
    {
     "code": "G15",
     "q": "How are lengths, angles and directions measured off a figure?",
     "idea": "Measuring, scale drawings and bearings",
     "content": "Measure line segments and angles in geometric figures, including interpreting maps and scale drawings and use of bearings: measure to the nearest millimetre and the nearest degree, convert by the scale, and give a bearing as a three-figure angle measured clockwise from north."
    },
    {
     "code": "G16",
     "q": "Which formulae give the area of the standard shapes and the volume of a prism?",
     "idea": "Areas of triangles and quadrilaterals, volumes of prisms",
     "content": "Know and apply formulae to calculate: area of triangles, parallelograms, trapezia; volume of cuboids and other right prisms (including cylinders) — the volume of any right prism being the area of its cross section multiplied by its length."
    },
    {
     "code": "G17",
     "q": "How are circles, composite shapes and curved solids measured?",
     "idea": "Circles, composite shapes and curved solids",
     "content": "Know the formulae: circumference of a circle = 2πr = πd, area of a circle = πr²; calculate: perimeters of 2D shapes, including circles; areas of circles and composite shapes; surface area and volume of spheres, pyramids, cones and composite solids — splitting a composite shape or solid into parts whose measures are known. (The cone and sphere formulae are provided within the relevant examination questions; see Appendix 3.) Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"surface area and volume of spheres, pyramids, cones and composite solids\".",
     "underlined": true
    },
    {
     "code": "G18",
     "q": "How much of a circle is a sector, and how long is its arc?",
     "idea": "Arcs and sectors",
     "content": "Calculate arc lengths, angles and areas of sectors of circles: the sector is the fraction of the whole circle given by its angle over 360°, so arc length and area are that fraction of the circumference and of the area, and the relation can be reversed to find the angle. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "G19",
     "q": "What do congruence and similarity let you calculate?",
     "idea": "Applying congruence and similarity",
     "content": "Apply the concepts of congruence and similarity, including the relationships between lengths, in similar figures: corresponding lengths of similar figures are in the same ratio, so the scale factor found from one pair gives every other length, while congruent figures are identical in every measurement. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "G20",
     "q": "How are the sides and angles of a right-angled triangle found?",
     "idea": "Pythagoras' theorem and the trigonometric ratios",
     "content": "Know the formulae for: Pythagoras' theorem a² + b² = c², and the trigonometric ratios, sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse and tan θ = opposite/adjacent; apply them to find angles and lengths in right-angled triangles in two-dimensional figures — labelling the sides relative to the angle, and using the inverse function to find an angle. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "G21",
     "q": "Which trigonometric values must be known without a calculator?",
     "idea": "Exact values of sine, cosine and tangent",
     "content": "Know the exact values of sin θ and cos θ for θ = 0°, 30°, 45°, 60° and 90°; know the exact value of tan θ for θ = 0°, 30°, 45° and 60° — needed above all on the non-calculator paper, and quoted as exact fractions or surds, not decimals. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "geometry-vectors",
   "component": "C1",
   "option": null,
   "name": "4. Geometry and measures — Vectors",
   "caseStudies": [
    "[G24] Describe the translation that maps triangle A onto triangle B as a 2D column vector, and carry out the translation given by the vector (3, −2)",
    "[G25] Given a = (2, 1) and b = (−1, 4), work out a + b, a − b and 3a, and draw each result as a directed line segment on a grid"
   ],
   "ideas": [
    {
     "code": "G24",
     "q": "How is a translation written down?",
     "idea": "Translations as 2D vectors",
     "content": "Describe translations as 2D vectors: the column vector records the movement across the page on top and the movement up the page beneath, with negatives for left and down, so one vector fixes the translation completely."
    },
    {
     "code": "G25",
     "q": "How are vectors combined and drawn?",
     "idea": "Adding, subtracting and scaling vectors",
     "content": "Apply addition and subtraction of vectors, multiplication of vectors by a scalar, and diagrammatic and column representations of vectors: add and subtract the components separately, multiply every component by the scalar, and show the result either as a column vector or as a directed line segment. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "probability",
   "component": "C1",
   "option": null,
   "name": "5. Probability",
   "caseStudies": [
    "[P1] Record the outcomes of 50 rolls of a dice in a frequency table, and complete a frequency tree for 60 students who either do or do not walk to school and are or are not in Year 11",
    "[P2] A fair spinner has four equal sections — calculate the expected number of times it lands on red in 200 spins",
    "[P3] Relate the relative frequency of a biased coin landing heads in 500 throws to its theoretical probability, and place both on the 0–1 probability scale using the words impossible, unlikely, even chance, likely and certain",
    "[P4] The probability of rain is 0.35 — use the property that an exhaustive set of outcomes sums to one to find the probability of no rain, and find the missing probability in a table of four mutually exclusive outcomes",
    "[P5] Explain why the relative frequency of a head from a fair coin gets closer to 0.5 as the number of throws increases",
    "[P6] Enumerate the sets systematically for 30 students who study French or Spanish using a Venn diagram, and list every outcome of two coins with a table and a tree diagram",
    "[P7] Construct the possibility space for the total when two fair dice are rolled and use it to calculate the theoretical probability of a total of 7",
    "[P8] A bag holds 5 red and 3 blue counters — use a tree diagram to calculate the probability of two reds when the first is replaced (independent) and when it is not (dependent), stating the assumption made"
   ],
   "ideas": [
    {
     "code": "P1",
     "q": "How are the results of an experiment recorded and read?",
     "idea": "Recording and analysing frequencies",
     "content": "Record, describe and analyse the frequency of outcomes of probability experiments using tables and frequency trees: enter the counts against the outcomes, and use a frequency tree to split a total by one attribute and then another so that every branch total agrees."
    },
    {
     "code": "P2",
     "q": "How many times would an outcome be expected to happen?",
     "idea": "Expected outcomes of future experiments",
     "content": "Apply ideas of randomness, fairness and equally likely events to calculate expected outcomes of multiple future experiments: multiply the probability of the outcome by the number of trials, and read the answer as an expectation rather than a guarantee."
    },
    {
     "code": "P3",
     "q": "How does what actually happens relate to what theory predicts?",
     "idea": "Relative frequency and the probability scale",
     "content": "Relate relative expected frequencies to theoretical probability, using appropriate language and the 0–1 probability scale: express a probability as a fraction, decimal or percentage between 0 and 1, and compare the relative frequency found from trials with the theoretical value."
    },
    {
     "code": "P4",
     "q": "What do all the probabilities of a situation add up to?",
     "idea": "Exhaustive and mutually exclusive outcomes",
     "content": "Apply the property that the probabilities of an exhaustive set of outcomes sum to one; apply the property that the probabilities of an exhaustive set of mutually exclusive events sum to one — so a missing probability is found by subtracting the rest from 1, and the probability of an event not happening is 1 minus its probability."
    },
    {
     "code": "P5",
     "q": "Why do more trials give a better estimate?",
     "idea": "Sample size and theoretical distributions",
     "content": "Understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size: relative frequency from a small sample can differ widely from the theoretical probability, but settles towards it as the number of trials grows. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "P6",
     "q": "How is every possibility listed without missing any?",
     "idea": "Enumerating sets and combinations",
     "content": "Enumerate sets and combinations of sets systematically, using tables, grids, Venn diagrams and tree diagrams: choose the representation that fits the situation, work through the possibilities in a fixed order, and check that the totals in the diagram account for everything. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"Venn diagrams and tree diagrams\".",
     "underlined": true
    },
    {
     "code": "P7",
     "q": "How is a probability calculated when every outcome is equally likely?",
     "idea": "Possibility spaces and theoretical probability",
     "content": "Construct theoretical possibility spaces for single and combined experiments with equally likely outcomes and use these to calculate theoretical probabilities: list or tabulate every equally likely outcome, then divide the number of outcomes in the event by the total number of outcomes."
    },
    {
     "code": "P8",
     "q": "How are the probabilities of two events happening together worked out?",
     "idea": "Combined events, independent and dependent",
     "content": "Calculate the probability of independent and dependent combined events, including using tree diagrams and other representations, and know the underlying assumptions: multiply along the branches and add between them, and for a dependent event change the second set of probabilities because the first has altered what is left. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "statistics",
   "component": "C1",
   "option": null,
   "name": "6. Statistics",
   "caseStudies": [
    "[S1] A sample of 40 of the 800 members of a club is surveyed — infer a property of the whole club from the sample and state one limitation of doing so",
    "[S2] Interpret and construct a frequency table, a bar chart and a pie chart for a set of categorical data, a vertical line chart for ungrouped discrete data, and a line graph for a time series, saying which is appropriate for which data",
    "[S4] Interpret, analyse and compare two data sets: work out the mean, median, mode and range, identify the modal class of grouped data, consider an outlier, and compare the two distributions using an average and the spread",
    "[S5] Apply statistics to describe a population: use the average and spread of a sample of rainfall figures to describe the climate of a place",
    "[S6] Plot a scatter graph of height against arm span, describe the correlation, draw a line of best fit, use it to predict a value by interpolation, and explain the danger of extrapolating beyond the data and why correlation does not indicate causation"
   ],
   "ideas": [
    {
     "code": "S1",
     "q": "What can a sample tell you about the whole population?",
     "idea": "Sampling and its limitations",
     "content": "Infer properties of populations or distributions from a sample, while knowing the limitations of sampling: a sample is used to estimate a property of the population, and the conclusion is only as good as the size and fairness of the sample, which should be stated. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    },
    {
     "code": "S2",
     "q": "Which table, chart or diagram suits which kind of data?",
     "idea": "Tables, charts and diagrams",
     "content": "Interpret and construct tables, charts and diagrams, including frequency tables, bar charts, pie charts and pictograms for categorical data, vertical line charts for ungrouped discrete numerical data, tables and line graphs for time series data and know their appropriate use — reading values off accurately and labelling scales, axes and keys. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the underlined part is \"line charts for ungrouped discrete numerical data, tables and line graphs for time series data and know their appropriate use\".",
     "underlined": true
    },
    {
     "code": "S4",
     "q": "How are two sets of data compared?",
     "idea": "Comparing distributions: averages and spread",
     "content": "Interpret, analyse and compare the distributions of data sets from univariate empirical distributions through: appropriate graphical representation involving discrete, continuous and grouped data; appropriate measures of central tendency (median, mean, mode and modal class) and spread (range, including consideration of outliers) — a comparison quotes one average and one measure of spread, in context."
    },
    {
     "code": "S5",
     "q": "How is a population summarised by statistics?",
     "idea": "Using statistics to describe a population",
     "content": "Apply statistics to describe a population: choose the average and the measure of spread that suit the data, and use them together to say what the population is typically like and how much it varies."
    },
    {
     "code": "S6",
     "q": "How is a relationship between two variables seen and used?",
     "idea": "Scatter graphs, correlation and lines of best fit",
     "content": "Use and interpret scatter graphs of bivariate data; recognise correlation and know that it does not indicate causation; draw estimated lines of best fit; make predictions; interpolate and extrapolate apparent trends while knowing the dangers of so doing — a prediction inside the data is interpolation and is safer than one outside it. Underlined type in the document: \"All students will be assessed on the content identified by the standard and the underlined type; more highly attaining students will develop confidence and competence with all of this content\" (Content, document page 3 / PDF page 15) — here the whole statement is underlined.",
     "underlined": true
    }
   ]
  },
  {
   "id": "number-structure-higher",
   "component": "C1",
   "option": "tier",
   "name": "1. Number — Structure and calculation — Higher tier additions",
   "caseStudies": [
    "[N5] There are 4 ways of doing one task and, for each of these, 7 ways of doing another — use the product rule for counting to find the total number of ways the two tasks can be done",
    "[N6] Estimate the value of √70 and of 3.1³ without a calculator, by placing each between the powers or roots that are known",
    "[N7] Evaluate 25^(1/2), 8^(2/3) and 16^(−1/2) using fractional indices",
    "[N8] Simplify √12 as √(4 × 3) = √4 × √3 = 2√3, work out √3 × √6, and rationalise the denominator of 6/√2 and of 1/(3 − √5)"
   ],
   "ideas": [
    {
     "code": "N5",
     "q": "How is the number of ways of doing two tasks counted?",
     "idea": "The product rule for counting",
     "content": "Higher tier addition to N5 (apply systematic listing strategies): '…including use of the product rule for counting (i.e. if there are m ways of doing one task and for each of these, there are n ways of doing another task, then the total number of ways the two tasks can be done is m × n ways)' — so a full list is replaced by multiplying the number of choices at each stage."
    },
    {
     "code": "N6",
     "q": "How is the size of a power or a root judged without working it out?",
     "idea": "Estimating powers and roots",
     "content": "Higher tier addition to N6 (positive integer powers and associated real roots, recognising powers of 2, 3, 4, 5): '…estimate powers and roots of any given positive number' — trap the number between the two nearest known powers or squares and state the estimate between them."
    },
    {
     "code": "N7",
     "q": "What does a fractional index mean?",
     "idea": "Fractional indices",
     "content": "Higher tier addition to N7 (calculate with roots, and with integer indices): the Higher list reads 'calculate with roots, and with integer and fractional indices' — a denominator of n in the index is the nth root and a numerator is the power, so x^(m/n) is the nth root of x raised to the power m, and a negative fractional index also takes the reciprocal."
    },
    {
     "code": "N8",
     "q": "How are surds simplified and removed from a denominator?",
     "idea": "Surds and rationalising denominators",
     "content": "Higher tier addition to N8 (calculate exactly with fractions and multiples of π): the Higher list adds 'surds' to the exact calculation and then 'simplify surd expressions involving squares (e.g. √12 = √(4 × 3) = √4 × √3 = 2√3) and rationalise denominators' — take out the largest square factor, and multiply numerator and denominator by the surd, or by the conjugate, to clear the surd from the bottom."
    }
   ]
  },
  {
   "id": "number-fdp-higher",
   "component": "C1",
   "option": "tier",
   "name": "1. Number — Fractions, decimals and percentages — Higher tier additions",
   "caseStudies": [
    "[N10 (i)] Change the recurring decimal 0.4̇5̇ into a fraction by the multiply-and-subtract method",
    "[N10 (ii)] Show that 5/11 is the recurring decimal 0.4̇5̇ by division, and state which fractions give recurring rather than terminating decimals"
   ],
   "ideas": [
    {
     "code": "N10 (i)",
     "q": "How is a recurring decimal turned into a fraction?",
     "idea": "Recurring decimals into fractions",
     "content": "Higher tier addition to N10 (work interchangeably with terminating decimals and their corresponding fractions), first clause: 'change recurring decimals into their corresponding fractions' — multiply by the power of 10 that shifts the repeating block, subtract the original to remove the recurrence, and divide to give the fraction in lowest terms."
    },
    {
     "code": "N10 (ii)",
     "q": "How is a fraction shown to be a recurring decimal?",
     "idea": "Fractions into recurring decimals",
     "content": "Higher tier addition to N10, second clause: '…and vice versa' — divide numerator by denominator until the digits repeat, and write the answer with the dot or dots over the repeating block, recognising that a denominator with a prime factor other than 2 or 5 gives a recurring decimal."
    }
   ]
  },
  {
   "id": "number-measures-higher",
   "component": "C1",
   "option": "tier",
   "name": "1. Number — Measures and accuracy — Higher tier additions",
   "caseStudies": [
    "[N16 (i)] A length is measured as 24 cm to the nearest centimetre — write down its upper and lower bounds",
    "[N16 (ii)] A rectangle measures 8.2 cm by 5.6 cm, each to the nearest 0.1 cm — calculate the upper and lower bounds of its area and give the area to a suitable degree of accuracy"
   ],
   "ideas": [
    {
     "code": "N16 (i)",
     "q": "What are the largest and smallest values a rounded measurement could be?",
     "idea": "Upper and lower bounds of a measurement",
     "content": "Higher tier addition to N16 (apply and interpret limits of accuracy), first clause: '…including upper and lower bounds' — a measurement rounded to a given accuracy lies within half that accuracy of the stated value, giving the lower bound and the upper bound of the quantity."
    },
    {
     "code": "N16 (ii)",
     "q": "What happens to the bounds when the measurements are used in a calculation?",
     "idea": "Calculating with upper and lower bounds",
     "content": "Higher tier addition to N16, applied: the bounds must be carried through the calculation — use the upper bounds to maximise a product or sum, and the upper of the numerator with the lower of the denominator to maximise a quotient, then interpret the two answers as the limits of accuracy of the result."
    }
   ]
  },
  {
   "id": "algebra-notation-higher",
   "component": "C1",
   "option": "tier",
   "name": "2. Algebra — Notation, vocabulary and manipulation — Higher tier additions",
   "caseStudies": [
    "[A4] Simplify the algebraic fraction (x² − 9)/(x² + 7x + 12), expand (x + 1)(x − 2)(x + 3) as a product of three binomials, and factorise 6x² + 11x − 10",
    "[A6] Prove that the sum of any three consecutive integers is a multiple of 3, setting the argument out as an algebraic proof",
    "[A7] Given f(x) = 3x − 1 and g(x) = x², use formal function notation to work out gf(2), fg(2) and f⁻¹(x)"
   ],
   "ideas": [
    {
     "code": "A4",
     "q": "How are algebraic fractions, longer products and harder quadratics handled?",
     "idea": "Algebraic fractions, multiple binomials and ax² + bx + c",
     "content": "Higher tier additions to A4 (simplify and manipulate algebraic expressions): the bracket becomes '(including those involving surds and algebraic fractions)', the bullet becomes 'expanding products of two or more binomials', and a further bullet adds 'factorising quadratic expressions of the form ax² + bx + c' — so factorise numerator and denominator to cancel an algebraic fraction, expand three brackets in stages, and split the middle term when the coefficient of x² is not 1."
    },
    {
     "code": "A6",
     "q": "What turns an algebraic argument into a proof?",
     "idea": "Algebraic proof",
     "content": "Higher tier addition to A6 (argue mathematically to show algebraic expressions are equivalent, and use algebra to support and construct arguments): the Higher list ends 'arguments and proofs' — a proof represents the general case algebraically (n, n + 1, 2n for an even number), manipulates it, and states the conclusion as following for all values."
    },
    {
     "code": "A7",
     "q": "What is an inverse function and what is a composite function?",
     "idea": "Inverse and composite functions",
     "content": "Higher tier addition to A7 (interpret simple expressions as functions with inputs and outputs): '…interpret the reverse process as the ‘inverse function’; interpret the succession of two functions as a ‘composite function’ (the use of formal function notation is expected)' — so f⁻¹ undoes f, gf(x) means apply f first and then g, and answers are written in f(x) notation."
    }
   ]
  },
  {
   "id": "algebra-graphs-higher",
   "component": "C1",
   "option": "tier",
   "name": "2. Algebra — Graphs — Higher tier additions",
   "caseStudies": [
    "[A9] Find the equation of the line perpendicular to y = 2x + 1 passing through (4, 3), using the fact that the gradients multiply to −1",
    "[A11] Complete the square on y = x² − 6x + 11 to find the turning point, and state whether it is a minimum or a maximum",
    "[A12] Sketch y = 2ˣ for positive values of the base, and sketch y = sin x, y = cos x and y = tan x with arguments in degrees for angles of any size",
    "[A13] Sketch the translations y = f(x) + 3 and y = f(x − 2), and the reflections y = −f(x) and y = f(−x), of a given function",
    "[A14] Plot and interpret an exponential graph of the value of an investment against time to find approximate solutions in a financial context",
    "[A15] Estimate the gradient of a velocity–time graph at t = 4 by drawing a tangent, and estimate the area under it between t = 0 and t = 6, interpreting each result",
    "[A16] Write down the equation of the circle of radius 5 with centre at the origin, and find the equation of the tangent to it at the point (3, 4)"
   ],
   "ideas": [
    {
     "code": "A9",
     "q": "How is the equation of a perpendicular line found?",
     "idea": "Perpendicular lines",
     "content": "Higher tier addition to A9 (plot graphs of straight lines; use y = mx + c to identify parallel lines; find the equation of a line): the Higher list reads 'use the form y = mx + c to identify parallel and perpendicular lines' — perpendicular gradients have product −1, so one gradient is the negative reciprocal of the other."
    },
    {
     "code": "A11",
     "q": "How is the turning point of a quadratic found exactly?",
     "idea": "Turning points by completing the square",
     "content": "Higher tier addition to A11 (identify and interpret roots, intercepts, turning points of quadratic functions graphically; deduce roots algebraically): '…and turning points by completing the square' — writing the quadratic as (x + p)² + q gives the turning point (−p, q) and the line of symmetry x = −p exactly."
    },
    {
     "code": "A12",
     "q": "What do exponential and trigonometric graphs look like?",
     "idea": "Exponential and trigonometric graphs",
     "content": "Higher tier addition to A12 (recognise, sketch and interpret graphs of linear, quadratic, simple cubic and reciprocal functions): '…exponential functions y = kˣ for positive values of k, and the trigonometric functions (with arguments in degrees) y = sin x, y = cos x and y = tan x for angles of any size' — the exponential curve through (0, 1), the two waves of period 360° between −1 and 1, and the tangent graph with its asymptotes."
    },
    {
     "code": "A13",
     "q": "What happens to a graph when the function is changed?",
     "idea": "Translations and reflections of a function",
     "content": "Higher tier only statement A13, printed in bold in the Higher list and absent from the Foundation list: 'sketch translations and reflections of a given function' — f(x) + a moves the graph up, f(x + a) moves it left, −f(x) reflects it in the x axis and f(−x) in the y axis."
    },
    {
     "code": "A14",
     "q": "How is an exponential graph read in a real context?",
     "idea": "Exponential graphs in real contexts",
     "content": "Higher tier addition to A14 (plot and interpret graphs and graphs of non-standard functions in real contexts to find approximate solutions): the bracket becomes '(including reciprocal graphs and exponential graphs)' — so growth and decay situations are read off a curve whose steepness changes, taking values from the axes."
    },
    {
     "code": "A15",
     "q": "How steep is a curve, and how much is under it?",
     "idea": "Gradients of and areas under non-linear graphs",
     "content": "Higher tier only statement A15, printed in bold in the Higher list and absent from the Foundation list: 'calculate or estimate gradients of graphs and areas under graphs (including quadratic and other non-linear graphs), and interpret results in cases such as distance-time graphs, velocity-time graphs and graphs in financial contexts (this does not include calculus)' — draw a tangent for the gradient, and split the region into strips, triangles and trapezia for the area."
    },
    {
     "code": "A16",
     "q": "What is the equation of a circle, and of a tangent to it?",
     "idea": "The circle and its tangent",
     "content": "Higher tier only statement A16, printed in bold in the Higher list and absent from the Foundation list: 'recognise and use the equation of a circle with centre at the origin; find the equation of a tangent to a circle at a given point' — the circle is x² + y² = r², and the tangent at a point is perpendicular to the radius to that point, so its gradient is the negative reciprocal of the radius gradient."
    }
   ]
  },
  {
   "id": "algebra-equations-higher",
   "component": "C1",
   "option": "tier",
   "name": "2. Algebra — Solving equations and inequalities — Higher tier additions",
   "caseStudies": [
    "[A18] Solve 2x² − 7x + 3 = 0 by factorising, solve x² + 6x + 4 = 0 by completing the square, and solve 3x² + 5x − 1 = 0 using the quadratic formula, rearranging first where the equation requires it",
    "[A19] Solve the simultaneous equations y = x² + 1 and y = 3x + 5 algebraically as a linear/quadratic pair, and find the approximate solutions from the graphs",
    "[A20] Show that x³ − 3x − 7 = 0 has a solution between 2 and 3, and use the iterative formula xₙ₊₁ = ∛(3xₙ + 7) to find it to 3 decimal places",
    "[A22] Solve the quadratic inequality x² − 5x + 6 > 0, give the solution set in set notation, and show the region defined by two inequalities in two variables on a graph"
   ],
   "ideas": [
    {
     "code": "A18",
     "q": "How is any quadratic equation solved?",
     "idea": "Completing the square and the quadratic formula",
     "content": "Higher tier additions to A18 (solve quadratic equations algebraically by factorising; find approximate solutions using a graph): the Higher list reads 'solve quadratic equations (including those that require rearrangement) algebraically by factorising, by completing the square and by using the quadratic formula' — rearrange to the form ax² + bx + c = 0 first, then factorise if possible, or complete the square, or substitute into the formula."
    },
    {
     "code": "A19",
     "q": "How are a line and a curve solved together?",
     "idea": "Linear/quadratic simultaneous equations",
     "content": "Higher tier addition to A19 (solve two simultaneous equations in two variables (linear/linear) algebraically): the Higher list reads '(linear/linear or linear/quadratic)' — substitute the linear equation into the quadratic, solve the resulting quadratic, and give both pairs of values, which are the two points where the line meets the curve."
    },
    {
     "code": "A20",
     "q": "How is a solution found when the equation cannot be solved exactly?",
     "idea": "Numerical solution by iteration",
     "content": "Higher tier only statement A20, printed in bold in the Higher list and absent from the Foundation list: 'find approximate solutions to equations numerically using iteration' — show a sign change between two values to locate the root, then apply the iterative formula repeatedly, recording each xₙ until the values agree to the required accuracy."
    },
    {
     "code": "A22",
     "q": "How are harder inequalities solved and their solution sets written?",
     "idea": "Quadratic inequalities, set notation and regions",
     "content": "Higher tier additions to A22 (solve linear inequalities in one variable; represent the solution set on a number line): the Higher list reads 'solve linear inequalities in one or two variable(s), and quadratic inequalities in one variable; represent the solution set on a number line, using set notation and on a graph' — factorise the quadratic and use its sketch to decide which intervals satisfy it, write the set in set notation, and shade the region for inequalities in two variables."
    }
   ]
  },
  {
   "id": "algebra-sequences-higher",
   "component": "C1",
   "option": "tier",
   "name": "2. Algebra — Sequences — Higher tier additions",
   "caseStudies": [
    "[A24] Continue the geometric progression 2, 2√2, 4, … where r is a surd, and find the next term of the sequence 2, 6, 12, 20, 30, …",
    "[A25] Deduce an expression for the nth term of the quadratic sequence 3, 8, 15, 24, 35, … using its second difference"
   ],
   "ideas": [
    {
     "code": "A24",
     "q": "Which further sequences must be recognised at Higher tier?",
     "idea": "Geometric progressions with a surd ratio, and other sequences",
     "content": "Higher tier additions to A24 (recognise and use sequences of triangular, square and cube numbers, simple arithmetic progressions, Fibonacci type sequences, quadratic sequences, and simple geometric progressions rⁿ where n is an integer and r is a rational number > 0): the Higher list adds 'or a surd' to the common ratio and 'and other sequences' — so the ratio may be a surd such as √2, and any consistent rule may be set."
    },
    {
     "code": "A25",
     "q": "How is the nth term of a quadratic sequence found?",
     "idea": "The nth term of a quadratic sequence",
     "content": "Higher tier addition to A25 (deduce expressions to calculate the nth term of linear sequences): the Higher list reads 'the nth term of linear and quadratic sequences' — the second difference is twice the coefficient of n², so subtract that an² part and find the nth term of the linear sequence that remains."
    }
   ]
  },
  {
   "id": "ratio-higher",
   "component": "C1",
   "option": "tier",
   "name": "3. Ratio, proportion and rates of change — Higher tier additions",
   "caseStudies": [
    "[R13] y is inversely proportional to x² and y = 5 when x = 2 — construct the equation that describes the proportion and use it to find y when x = 10",
    "[R15] From a distance–time curve, find the average rate of change between t = 1 and t = 4 using the gradient of the chord, and the instantaneous rate of change at t = 3 using the gradient of the tangent",
    "[R16] Use a general iterative process to model the amount in an account after each year of compound interest, writing the relation that takes one year's amount to the next"
   ],
   "ideas": [
    {
     "code": "R13",
     "q": "How is the equation of a proportional relationship set up?",
     "idea": "Constructing equations of direct and inverse proportion",
     "content": "Higher tier addition to R13 (understand that X is inversely proportional to Y is equivalent to X is proportional to 1/Y; interpret equations that describe direct and inverse proportion): the Higher list reads 'construct and interpret equations that describe direct and inverse proportion' — write the relation with a constant of proportionality k, substitute the given pair of values to find k, and use the completed equation."
    },
    {
     "code": "R15",
     "q": "How fast is something changing at one instant rather than on average?",
     "idea": "Average and instantaneous rates of change",
     "content": "Higher tier only statement R15, printed in bold in the Higher list and absent from the Foundation list: 'interpret the gradient at a point on a curve as the instantaneous rate of change; apply the concepts of average and instantaneous rate of change (gradients of chords and tangents) in numerical, algebraic and graphical contexts (this does not include calculus)' — the chord between two points gives the average rate over an interval, the tangent at a point gives the rate at that instant."
    },
    {
     "code": "R16",
     "q": "How is repeated change written as a process that repeats?",
     "idea": "General iterative processes",
     "content": "Higher tier addition to R16 (set up, solve and interpret the answers in growth and decay problems, including compound interest): '…and work with general iterative processes' — express the situation as a rule that takes each value to the next, then apply it repeatedly and interpret the sequence of results."
    }
   ]
  },
  {
   "id": "geometry-properties-higher",
   "component": "C1",
   "option": "tier",
   "name": "4. Geometry and measures — Properties and constructions — Higher tier additions",
   "caseStudies": [
    "[G7] Enlarge a triangle by scale factor −2 about the origin, and describe fully the enlargement with a negative scale factor that maps one given shape onto another",
    "[G8] A shape is rotated 90° clockwise about the origin and then reflected in the y axis — describe the changes and the invariance achieved by the combination, and give the single transformation with the same effect",
    "[G10] Use the circle theorem that the angle at the centre is twice the angle at the circumference to find a missing angle, giving reasons, and prove that the angle in a semicircle is 90°"
   ],
   "ideas": [
    {
     "code": "G7",
     "q": "What does a negative scale factor do to a shape?",
     "idea": "Enlargement with a negative scale factor",
     "content": "Higher tier addition to G7 (identify, describe and construct congruent and similar shapes by considering rotation, reflection, translation and enlargement (including fractional scale factors)): the Higher list reads '(including fractional and negative scale factors)' — a negative scale factor puts the image on the opposite side of the centre and inverts it, and a full description still gives the centre and the scale factor."
    },
    {
     "code": "G8",
     "q": "What stays the same when transformations are combined?",
     "idea": "Combinations of transformations and invariance",
     "content": "Higher tier only statement G8, printed in bold in the Higher list and absent from the Foundation list: 'describe the changes and invariance achieved by combinations of rotations, reflections and translations' — say what each transformation changes, name the points, lines or properties left invariant, and where possible give the single transformation equivalent to the combination."
    },
    {
     "code": "G10",
     "q": "Which angle results hold in every circle, and how are they proved?",
     "idea": "The circle theorems",
     "content": "Higher tier only statement G10, printed in bold in the Higher list and absent from the Foundation list: 'apply and prove the standard circle theorems concerning angles, radii, tangents and chords, and use them to prove related results' — the angle at the centre is twice the angle at the circumference, the angle in a semicircle is 90°, angles in the same segment are equal, opposite angles of a cyclic quadrilateral sum to 180°, a tangent is perpendicular to the radius, tangents from a point are equal, the perpendicular from the centre bisects a chord, and the alternate segment theorem — each step of a solution quoting the theorem used."
    }
   ]
  },
  {
   "id": "geometry-mensuration-higher",
   "component": "C1",
   "option": "tier",
   "name": "4. Geometry and measures — Mensuration and calculation — Higher tier additions",
   "caseStudies": [
    "[G19] Two similar cones have heights in the ratio 2 : 5 — use the relationships between lengths, areas and volumes in similar figures to find the ratio of their surface areas and of their volumes, and hence the volume of the larger from the smaller",
    "[G20] Find the length of the diagonal of a cuboid 3 cm by 4 cm by 12 cm using Pythagoras' theorem in three dimensions, and find the angle that diagonal makes with the base",
    "[G22] Use the sine rule to find an unknown side of a triangle given two angles and a side, and the cosine rule to find an angle given all three sides",
    "[G23] Use Area = ½ab sin C to calculate the area of a triangle with sides 7 cm and 9 cm and included angle 52°, and reverse it to find an included angle from a given area"
   ],
   "ideas": [
    {
     "code": "G19",
     "q": "How do area and volume scale between similar figures?",
     "idea": "Area and volume in similar figures",
     "content": "Higher tier addition to G19 (apply the concepts of congruence and similarity, including the relationships between lengths, in similar figures): the Higher list reads 'the relationships between lengths, areas and volumes in similar figures' — if lengths are in the ratio a : b then areas are in the ratio a² : b² and volumes in the ratio a³ : b³."
    },
    {
     "code": "G20",
     "q": "How is trigonometry used beyond a right-angled triangle in a plane?",
     "idea": "Trigonometry in general triangles and in three dimensions",
     "content": "Higher tier additions to G20 (know and apply Pythagoras' theorem and the trigonometric ratios to find angles and lengths in right-angled triangles in two-dimensional figures): the Higher list reads '…in right-angled triangles and, where possible, general triangles in two and three dimensional figures' — identify the right-angled triangle inside the solid, work in stages, and find angles between a line and a plane."
    },
    {
     "code": "G22",
     "q": "How are sides and angles found in a triangle with no right angle?",
     "idea": "The sine rule and the cosine rule",
     "content": "Higher tier only statement G22, printed in bold in the Higher list and absent from the Foundation list: 'know and apply the sine rule a/sin A = b/sin B = c/sin C, and cosine rule a² = b² + c² − 2bc cos A, to find unknown lengths and angles' — the sine rule for a side and its opposite angle in pairs, the cosine rule when three sides, or two sides and the included angle, are known."
    },
    {
     "code": "G23",
     "q": "How is the area of any triangle calculated?",
     "idea": "Area of any triangle",
     "content": "Higher tier only statement G23, printed in bold in the Higher list and absent from the Foundation list: 'know and apply Area = ½ ab sin C to calculate the area, sides or angles of any triangle' — the angle used must be the one included between the two sides, and the formula can be rearranged to find a side or that angle from a given area."
    }
   ]
  },
  {
   "id": "geometry-vectors-higher",
   "component": "C1",
   "option": "tier",
   "name": "4. Geometry and measures — Vectors — Higher tier additions",
   "caseStudies": [
    "[G25 (i)] In a diagram where OA = a and OB = b, construct a geometric argument to express the vector AB and the position vector of the midpoint of AB in terms of a and b",
    "[G25 (ii)] Prove using vectors that the line joining the midpoints of two sides of a triangle is parallel to the third side and half its length"
   ],
   "ideas": [
    {
     "code": "G25 (i)",
     "q": "How are vectors used to argue about a geometrical figure?",
     "idea": "Geometric arguments with vectors",
     "content": "Higher tier addition to G25 (apply addition and subtraction of vectors, multiplication of vectors by a scalar, and diagrammatic and column representations of vectors), first part of the bold clause: 'use vectors to construct geometric arguments…' — route each journey round the figure through known vectors, so any vector in the diagram is expressed in terms of the given ones."
    },
    {
     "code": "G25 (ii)",
     "q": "How does a vector statement become a proof?",
     "idea": "Vector proof",
     "content": "Higher tier addition to G25, second part of the bold clause: '…and proofs' — a result is proved by showing one vector is a scalar multiple of another, which proves the lines are parallel and gives the ratio of their lengths, or by showing two routes give the same vector, which proves points are collinear."
    }
   ]
  },
  {
   "id": "probability-higher",
   "component": "C1",
   "option": "tier",
   "name": "5. Probability — Higher tier additions",
   "caseStudies": [
    "[P9 (i)] Of 40 students, 24 study French and 10 of those also study German — calculate the probability that a student studies German given that they study French, and interpret the answer",
    "[P9 (ii)] Represent the same information using expected frequencies in a two-way table, a tree diagram and a Venn diagram, and read the conditional probability off each"
   ],
   "ideas": [
    {
     "code": "P9 (i)",
     "q": "How is a probability worked out when something is already known?",
     "idea": "Conditional probability",
     "content": "Higher tier only statement P9, printed in bold in the Higher list and absent from the Foundation list, first clause: 'calculate and interpret conditional probabilities…' — the condition restricts the situation to the cases where it holds, so the probability is the number of favourable cases divided by the number of cases satisfying the condition, and the answer is interpreted in context."
    },
    {
     "code": "P9 (ii)",
     "q": "Which diagrams carry a conditional probability?",
     "idea": "Expected frequencies in tables, trees and Venn diagrams",
     "content": "Higher tier only statement P9, second clause: '…through representation using expected frequencies with two-way tables, tree diagrams and Venn diagrams' — fill each representation with expected frequencies out of the total rather than with probabilities, then read the conditional probability from the relevant row, branch or region."
    }
   ]
  },
  {
   "id": "statistics-higher",
   "component": "C1",
   "option": "tier",
   "name": "6. Statistics — Higher tier additions",
   "caseStudies": [
    "[S3] Construct a histogram with unequal class intervals from a grouped continuous frequency table using frequency density, and construct a cumulative frequency graph and use it to estimate the median",
    "[S4] Draw a box plot from a five-figure summary, calculate the quartiles and the inter-quartile range of a data set, and use them to compare two distributions"
   ],
   "ideas": [
    {
     "code": "S3",
     "q": "How is grouped and continuous data displayed?",
     "idea": "Histograms and cumulative frequency graphs",
     "content": "Higher tier only statement S3, printed in bold in the Higher list and absent from the Foundation list: 'construct and interpret diagrams for grouped discrete data and continuous data, i.e. histograms with equal and unequal class intervals and cumulative frequency graphs, and know their appropriate use' — with unequal intervals the bar height is the frequency density, frequency divided by class width, and a cumulative frequency graph is plotted at the upper class boundaries and read for medians, quartiles and numbers above or below a value."
    },
    {
     "code": "S4",
     "q": "How are quartiles and box plots used to compare distributions?",
     "idea": "Box plots, quartiles and the inter-quartile range",
     "content": "Higher tier additions to S4 (interpret, analyse and compare the distributions of data sets from univariate empirical distributions): the graphical bullet adds 'including box plots' and the spread bullet adds 'quartiles and inter-quartile range' — the box plot shows minimum, lower quartile, median, upper quartile and maximum, and the inter-quartile range measures the spread of the middle half, unaffected by outliers."
    }
   ]
  }
 ]
};
module.exports = { SPEC_1MA1 };
