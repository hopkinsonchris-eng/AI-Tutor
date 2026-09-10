/* AQA GCSE Mathematics (8300) — built by hand in a Claude Code session from the official specification PDF
   (Version 1.0, 12 September 2014; see spec.source for provenance) to the contract in src/spec-validator.js.
   Rooms are the document's own sub-sections of section 3 (Subject content) plus the formulae appendix (section 6);
   key ideas are the DfE references N1–N16, A1–A25, R1–R16, G1–G25, P1–P9 and S1–S6, copied character for character,
   each statement labelled with the column the document places it in (basic foundation, additional foundation,
   higher only) followed by the document's Notes. Content from any part of the specification may be assessed on any
   of the three papers, so the papers are one component (as src/specs/edexcel-9ma0.js merges its two pure papers),
   with each paper's marks, minutes and weight given in its sections.
   Judged 0.9 against the document by a fresh-context subagent: coverage 1.0 (all 97 references once, in order, every
   column and Notes line carried), fidelity 0.93, nothing invented, nothing missing; its ten wording corrections are
   applied (approximate weightings, the appendix sentence verbatim, mark-scheme practice attributed in the command
   words, Find added, one prompt re-tiered). */
const SPEC_8300 = {
 id: 'AQA-8300',
 board: 'AQA',
 subject: 'Mathematics',
 code: '8300',
 level: 'GCSE',
 version: 'AQA GCSE Mathematics 8300, Version 1.0, 12 September 2014 (for teaching from September 2015, exams from May/June 2017)',
 firstExam: 2017,
 essaySubject: false,
 source: {
  url: 'https://filestore.aqa.org.uk/resources/mathematics/specifications/AQA-8300-SP-2015.PDF',
  etag: '"c9db5-5a0f80fe5587f"',
  lastModified: 'Mon, 16 Mar 2020 12:36:02 GMT',
  length: 826805,
  checkedAt: '2026-09-10T19:14:09.908Z'
 },
 components: [
  {
   id: 'P123',
   name: 'Papers 1, 2 and 3',
   marks: 240,
   weight: 100,
   minutes: 270,
   sections: [
    'Paper 1: non-calculator — written exam 1 hour 30 minutes, 80 marks, 33⅓% of the GCSE Mathematics assessment',
    'Paper 2: calculator — written exam 1 hour 30 minutes, 80 marks, 33⅓% of the GCSE Mathematics assessment',
    'Paper 3: calculator — written exam 1 hour 30 minutes, 80 marks, 33⅓% of the GCSE Mathematics assessment',
    'Content from any part of the specification may be assessed on any paper: a mix of question styles, from short single-mark questions to multi-step problems, with the mathematical demand increasing as a student progresses through the paper',
    'Foundation tier (grades 1–5, entry code 8300F) or Higher tier (grades 4–9, entry code 8300H): all three papers at the same tier in the same series; each paper is scaled ×1 and the total scaled mark is 240'
   ]
  }
 ],
 options: [],
 ao: [
  {
   id: 'AO1',
   label: 'Use and apply standard techniques',
   text: 'Students should be able to: accurately recall facts, terminology and definitions; use and interpret notation correctly; accurately carry out routine procedures or set tasks requiring multi-step solutions. Overall weighting (approx) 50% at Foundation tier, with component weightings (approx) of 40–60% on each paper; overall weighting (approx) 40% at Higher tier, with component weightings (approx) of 30–50% on each paper.'
  },
  {
   id: 'AO2',
   label: 'Reason, interpret and communicate mathematically',
   text: 'Students should be able to: make deductions, inferences and draw conclusions from mathematical information; construct chains of reasoning to achieve a given result; interpret and communicate information accurately; present arguments and proofs; assess the validity of an argument and critically evaluate a given way of presenting information. Overall weighting (approx) 25% at Foundation tier, with component weightings (approx) of 15–35% on each paper; overall weighting (approx) 30% at Higher tier, with component weightings (approx) of 20–40% on each paper.'
  },
  {
   id: 'AO3',
   label: 'Solve problems within mathematics and in other contexts',
   text: 'Students should be able to: translate problems in mathematical or non-mathematical contexts into a process or a series of mathematical processes; make and use connections between different parts of mathematics; interpret results in the context of the given problem; evaluate methods used and results obtained; evaluate solutions to identify how they may have been affected by assumptions made. Overall weighting (approx) 25% at Foundation tier, with component weightings (approx) of 15–35% on each paper; overall weighting (approx) 30% at Higher tier, with component weightings (approx) of 20–40% on each paper.'
  }
 ],
 markConventions: {
  style: 'points',
  summary: 'Three papers of 80 raw marks each, scaled ×1 to a total scaled mark of 240 on which grade boundaries are set; graded on a nine-point scale 1 to 9 where 9 is the best grade (Foundation tier grades 1–5, Higher tier grades 4–9; below grade 1 is unclassified). Every paper can assess content from any part of the specification, and all GCSE exams in mathematics must include questions that allow students to draw on elements from within and across different topic areas, and questions that allow students to provide extended responses. Each content statement sits in one of three columns: basic foundation content (all students develop confidence and competence with it), additional foundation content (all students are assessed on it; more highly attaining students develop confidence and competence with all of it) and higher content only (assessed only at Higher tier, where all content can be assessed). Approximate topic-area weightings, prescribed by Ofqual, for the overall tier of assessment, not for each individual question paper: Number 25% Foundation / 15% Higher; Algebra 20% / 30%; Ratio, proportion and rates of change 25% / 20%; Geometry and measures 15% / 20%; Probability and statistics combined 15% / 15%. No calculator on Paper 1; a calculator is required on Papers 2 and 3. Pencil (for diagrams only), ruler, pair of compasses and protractor are expected on every paper. Students must recall, select and apply the formulae in the Appendix: those they must know (quadratic formula, circumference and area of a circle, Pythagoras’ theorem, the trigonometric ratios, the sine and cosine rules and Area = ½ab sin C), those they must know or be able to derive (area of a trapezium, volume of a prism, compound interest, the probability addition and multiplication formulae), and those given in the question (curved surface area of a cone, surface area and volume of a sphere, volume of a cone, the kinematics formulae). Marking conventions come from AQA’s published mark schemes, not the specification: M marks for a correct method which could lead to a correct answer, A marks for accuracy following a correct method (the method may be implied by a correct answer), B marks independent of method, ft for follow-through from an earlier error, oe for an equivalent form, SC for a special case; where a question says working must be shown, a correct answer with no working earns nothing.',
  commandWords: [
   { word: 'Solve', means: 'Find every value of the unknown that satisfies the equation or inequality (A17–A22). In AQA’s mark schemes (not the specification) a correct method earns M marks and the values A marks; all solutions are required, and for an inequality the answer must keep the inequality sign.' },
   { word: 'Find', means: 'Work out the value, equation or solution asked for and show the working: “find the equation of the line through two given points, or through one point with a given gradient” (A9), “find the equation of a tangent to a circle at a given point” (A16), “find approximate solutions using a graph” (A17–A19), “find approximate solutions to equations numerically using iteration” (A20), “find angles and lengths” (G20), “find unknown lengths and angles” (G22). That a graphical reading is accepted within a tolerance, and that an unsupported answer risks the method marks, is AQA mark-scheme practice, not specification text.' },
   { word: 'Show that', means: 'The result is printed, so the marks are for the working: each line must follow from the last (A6 “argue mathematically to show algebraic expressions are equivalent”, and at Higher tier “to include proofs”). That the working to a printed answer is checked line by line, and that a proof needs a general argument rather than examples, is AQA mark-scheme practice, not specification text.' },
   { word: 'Prove', means: 'Give a chain of reasoning that establishes a general result: A6 “to include proofs”, G6 “use known results to obtain simple proofs”, G10 “apply and prove the standard circle theorems”, G25 “use vectors to construct geometric arguments and proofs”. Name the fact or theorem used at every step; colloquial terms such as Z angles are not accepted.' },
   { word: 'Calculate', means: 'Work out a numerical value and show the method (N7–N9, A15, G16–G18, G23, P2, P7–P9); give the answer to the accuracy asked for or an appropriate degree of accuracy (N15), with units where they apply, and do not round during intermediate steps.' },
   { word: 'Estimate', means: 'Approximate before calculating (N14 “estimate answers; check calculations using approximation and estimation”), or read an approximate value from a graph (A15 “calculate or estimate gradients of graphs and areas under graphs”). Rounding each value to one significant figure, and a range of accepted answers, are AQA mark-scheme practice, not specification text.' },
   { word: 'Sketch', means: 'Draw the shape of a graph showing its key features — intercepts, turning points, asymptotes, the effect of a transformation — without plotting points (A12, A13); in AQA’s mark schemes the marks are for the features, not for accuracy.' },
   { word: 'Plot', means: 'Mark points accurately from a table of values or a set of data and join or complete them appropriately (A9, A14; “interpret and construct tables, charts and diagrams” is S2); accuracy is checked against a tolerance (AQA mark-scheme practice).' },
   { word: 'Construct', means: 'Produce an accurate ruler-and-compass drawing (G2), a plan or elevation (G13), a possibility space (P7), or an equation describing direct or inverse proportion (R13). That the construction arcs must be left visible is AQA mark-scheme practice, not specification text.' },
   { word: 'Interpret', means: 'Say what a value, gradient, intercept, graph or statistic means in the context of the question (A10, A14, R14, S4, S6); a number on its own is not an interpretation.' },
   { word: 'Simplify', means: 'Write an expression, ratio, fraction or surd in its simplest form (N8, A4, R4). Answers are expected in their simplest form even without an explicit instruction (A1 Notes).' },
   { word: 'Expand', means: 'Multiply out the brackets, including products of two binomials at Foundation tier and of two or more at Higher tier (A4), collecting like terms afterwards.' },
   { word: 'Factorise', means: 'Write an expression as a product: take out common factors, factorise quadratics of the form x² + bx + c including the difference of two squares, and at Higher tier ax² + bx + c (A4). That a partial factorisation can earn the method mark only is AQA mark-scheme practice, not specification text.' },
   { word: 'Rearrange', means: 'Change the subject of a formula (A5) by applying inverse operations to both sides in order; AQA’s mark schemes look for each step and the final subject on its own.' },
   { word: 'Describe', means: 'Give the defining features in words. G7 says only “identify, describe and construct congruent and similar shapes … by considering rotation, reflection, translation and enlargement”; AQA’s mark schemes, not the specification, require a transformation to be described fully — a rotation with its centre, angle and direction, a reflection with its mirror line, a translation as a column vector, an enlargement with its centre and scale factor. Also “describe translations as 2D vectors” (G24), and describe correlation with the document’s terms positive, negative, no, weak and strong (S6).' },
   { word: 'Compare', means: 'Make a statement about each quantity or data set and the difference between them (R9, R12, S4): for distributions, compare a measure of central tendency and a measure of spread and say what each means in context.' },
   { word: 'Deduce', means: 'Reach a result from what has already been established — “deduce roots algebraically” (A11), “deduce expressions to calculate the nth term” (A25), “deduce and use the angle sum in any polygon” (G3); the deduction must be shown, not just stated.' }
  ],
  essayShapes: []
 },
 topics: [
  {
   id: '3.1.1',
   component: 'P123',
   option: null,
   name: 'Number: Structure and calculation',
   caseStudies: [
    'N1: Write −3.5, −3¼, −3.05 and 3.2 in order, smallest first, and show them on a number line',
    'N2: Work out 3⅔ − 1⅘ and 4.62 × 0.35 by formal written methods; from a bank statement of debits and credits, find the closing balance',
    'N3: Evaluate 3 + 4 × 2² − (8 − 5), and explain why 17 × 23 ÷ 23 needs no calculating',
    'N4: Write 360 as a product of prime factors in index form, then find the HCF and LCM of 360 and 84',
    'N5: How many different three-course meals can be chosen from 4 starters, 5 mains and 3 desserts (product rule for counting, Higher)',
    'N6: Write down √169, ∛64 and 2⁵; estimate √50 to one decimal place (Higher)',
    'N7: Work out 2⁻³ × 8 and √81 ÷ 3; at Higher tier work out 27^(2/3)',
    'N8: Give the exact area of a circle of radius 3 cm in terms of π; simplify √48 and rationalise the denominator of 6/√3 (Higher)',
    'N9: Write 0.000 072 in standard form; work out (3 × 10⁴) × (2 × 10⁻²) without a calculator and interpret a calculator display of 4.5E8'
   ],
   ideas: [
    { code: 'N1', q: 'How are numbers ordered and compared?', idea: 'Ordering numbers and the comparison symbols', content: 'Basic foundation: order positive and negative integers, decimals and fractions; use the symbols =, ≠, <, >, ≤, ≥. Notes: including use of a number line. See also A22.' },
    { code: 'N2', q: 'How are the four operations applied to integers, decimals, fractions and mixed numbers?', idea: 'The four operations and place value', content: 'Basic foundation: apply the four operations, including formal written methods, to integers, decimals and simple fractions (proper and improper), and mixed numbers – all both positive and negative; understand and use place value (eg when working with very large or very small numbers, and when calculating with decimals). Notes: including questions set in context. Knowledge and understanding of terms used in household finance, for example profit, loss, cost price, selling price, debit, credit, balance, income tax, VAT and interest rate. See also R9.' },
    { code: 'N3', q: 'How do inverse operations and the priority of operations work?', idea: 'Relationships between operations and priority of operations', content: 'Basic foundation: recognise and use relationships between operations, including inverse operations (eg cancellation to simplify calculations and expressions); use conventional notation for priority of operations, including brackets, powers, roots and reciprocals.' },
    { code: 'N4', q: 'What are primes, factors, multiples, HCF, LCM and prime factorisation?', idea: 'Primes, factors, multiples and prime factorisation', content: 'Basic foundation: use the concepts and vocabulary of prime numbers, factors (divisors), multiples, common factors, common multiples, highest common factor, lowest common multiple, prime factorisation, including using product notation and the unique factorisation theorem. Notes: prime factor decomposition including product of prime factors written in index form.' },
    { code: 'N5', q: 'How are outcomes listed systematically and counted?', idea: 'Systematic listing and the product rule for counting', content: 'Basic foundation: apply systematic listing strategies. Higher only: including use of the product rule for counting. Notes: including using lists, tables and diagrams.' },
    { code: 'N6', q: 'Which powers and roots must be known, and how are others estimated?', idea: 'Integer powers and real roots', content: 'Basic foundation: use positive integer powers and associated real roots (square, cube and higher), recognise powers of 2, 3, 4, 5. Higher only: estimate powers and roots of any given positive number. Notes: including square numbers up to 15 × 15. Students should know that 1000 = 10³ and 1 million = 10⁶.' },
    { code: 'N7', q: 'How are roots and indices calculated with?', idea: 'Calculating with roots and indices', content: 'Additional foundation: calculate with roots, and with integer indices. Higher only: calculate with fractional indices.' },
    { code: 'N8', q: 'How are exact calculations with fractions, multiples of π and surds done?', idea: 'Exact calculation: fractions, multiples of π and surds', content: 'Basic foundation: calculate exactly with fractions. Additional foundation: calculate exactly with multiples of π. Higher only: calculate exactly with surds; simplify surd expressions involving squares (eg √12 = √(4 × 3) = √4 × √3 = 2√3) and rationalise denominators. Notes: see also G17 and G18.' },
    { code: 'N9', q: 'How is standard form used and interpreted?', idea: 'Standard form', content: 'Basic foundation: calculate with and interpret standard form A × 10ⁿ, where 1 ≤ A < 10 and n is an integer. Notes: with and without a calculator. Interpret calculator displays.' }
   ]
  },
  {
   id: '3.1.2',
   component: 'P123',
   option: null,
   name: 'Number: Fractions, decimals and percentages',
   caseStudies: [
    'N10: Write 0.375 as a fraction in its simplest form and 7/8 as a decimal, then order 0.6, 5/8 and 0.65; write 0.4̇5̇ as a fraction (Higher)',
    'N11: In a class the ratio of boys to girls is 3 : 5 — what fraction of the class are girls, and what fraction of the boys’ number is the girls’ number?',
    'N12: Find 35% of £240 using the multiplier 0.35, find 3/8 of 96, and find the multiplier for a 12% decrease'
   ],
   ideas: [
    { code: 'N10', q: 'How are terminating and recurring decimals converted to and from fractions?', idea: 'Decimals and their corresponding fractions', content: 'Basic foundation: work interchangeably with terminating decimals and their corresponding fractions (such as 3.5 and 7/2 or 0.375 and 3/8). Higher only: change recurring decimals into their corresponding fractions and vice versa. Notes: including ordering.' },
    { code: 'N11', q: 'How do fractions appear in ratio problems?', idea: 'Fractions in ratio problems', content: 'Basic foundation: identify and work with fractions in ratio problems. Notes: See also R8.' },
    { code: 'N12', q: 'How are fractions and percentages used as operators?', idea: 'Fractions and percentages as operators', content: 'Basic foundation: interpret fractions and percentages as operators. Notes: including interpreting percentage problems using a multiplier. See also R9.' }
   ]
  },
  {
   id: '3.1.3',
   component: 'P123',
   option: null,
   name: 'Number: Measures and accuracy',
   caseStudies: [
    'N13: Convert 2.5 m² to cm² and 0.75 litres to cm³; a car uses 6.4 litres of fuel per 100 km — how far does it travel on 48 litres?',
    'N14: Estimate (4.86 × 19.7) ÷ 0.51 by rounding each number to one significant figure, and say whether the estimate is bigger or smaller than the exact value',
    'N15: Round 0.030 461 to 3 significant figures; a length is 8.3 cm to 1 decimal place — write the error interval 8.25 ≤ l < 8.35',
    'N16: A rectangle measures 6.4 cm by 3.2 cm, each to 2 significant figures — find the upper bound of its area, then give the area to a suitable degree of accuracy (Higher)'
   ],
   ideas: [
    { code: 'N13', q: 'Which standard units and compound measures must be used?', idea: 'Standard units and compound measures', content: 'Basic foundation: use standard units of mass, length, time, money and other measures (including standard compound measures) using decimal quantities where appropriate. Notes: know and use metric conversion factors for length, area, volume and capacity. Imperial/metric conversions will be given in the question.' },
    { code: 'N14', q: 'How are answers estimated and calculations checked?', idea: 'Estimation and checking', content: 'Basic foundation: estimate answers; check calculations using approximation and estimation, including answers obtained using technology. Notes: including evaluation of results obtained. See also N15.' },
    { code: 'N15', q: 'How are numbers rounded, and how are error intervals written?', idea: 'Rounding and error intervals', content: 'Basic foundation: round numbers and measures to an appropriate degree of accuracy (eg to a specified number of decimal places or significant figures). Additional foundation: use inequality notation to specify simple error intervals due to truncation or rounding. Notes: including appropriate rounding for questions set in context. Students should know not to round values during intermediate steps of a calculation. See also N14.' },
    { code: 'N16', q: 'How are limits of accuracy and bounds applied?', idea: 'Limits of accuracy and upper and lower bounds', content: 'Additional foundation: apply and interpret limits of accuracy. Higher only: including upper and lower bounds.' }
   ]
  },
  {
   id: '3.2.1',
   component: 'P123',
   option: null,
   name: 'Algebra: Notation, vocabulary and manipulation',
   caseStudies: [
    'A1: Write 3 × a × a × b ÷ 2 in algebraic notation, and simplify 5x + 3y − 2x + y',
    'A2: Find v when u = 4, a = −2 and t = 3 in v = u + at; evaluate 3x² − 2x when x = −2',
    'A3: Say which of 2(x + 3) ≡ 2x + 6, 2x + 6 = 10, P = 2l + 2w and 2x + 6 is an identity, an equation, a formula or an expression',
    'A4: Expand and simplify (x + 3)(x − 5); factorise x² − 9; at Higher tier factorise 2x² + 7x + 3 and simplify (x² − 4)/(x² + 5x + 6)',
    'A5: Make r the subject of A = πr², and make x the subject of y = 3x − 7',
    'A6: Show that (n + 1)² − (n − 1)² is a multiple of 4 for every integer n; at Higher tier prove that the sum of three consecutive integers is a multiple of 3',
    'A7: For f(x) = 3x + 2 and g(x) = x², find f(4), fg(2) and f⁻¹(x) (Higher)'
   ],
   ideas: [
    { code: 'A1', q: 'What does algebraic notation mean?', idea: 'Algebraic notation', content: 'Basic foundation: use and interpret algebraic notation, including: ab in place of a × b; 3y in place of y + y + y and 3 × y; a² in place of a × a, a³ in place of a × a × a, a²b in place of a × a × b; a/b in place of a ÷ b; coefficients written as fractions rather than as decimals; brackets. Notes: it is expected that answers will be given in their simplest form without an explicit instruction to do so.' },
    { code: 'A2', q: 'How are values substituted into formulae and expressions?', idea: 'Substitution into formulae and expressions', content: 'Basic foundation: substitute numerical values into formulae and expressions, including scientific formulae. Notes: unfamiliar formulae will be given in the question. See the Appendix for a full list of the prescribed formulae. See also A5.' },
    { code: 'A3', q: 'What are expressions, equations, formulae, identities, inequalities, terms and factors?', idea: 'Algebraic vocabulary', content: 'Basic foundation: understand and use the concepts and vocabulary of expressions, equations, formulae, inequalities, terms and factors. Additional foundation: to include identities. Notes: this will be implicitly and explicitly assessed.' },
    { code: 'A4', q: 'How are algebraic expressions simplified, expanded and factorised?', idea: 'Simplifying and manipulating expressions', content: 'Basic foundation: simplify and manipulate algebraic expressions by: collecting like terms; multiplying a single term over a bracket; taking out common factors; simplifying expressions involving sums, products and powers, including the laws of indices. Additional foundation: simplify and manipulate algebraic expressions (including those involving surds) by: expanding products of two binomials; factorising quadratic expressions of the form x² + bx + c, including the difference of two squares. Higher only: simplify and manipulate algebraic expressions (including those involving surds and algebraic fractions) by: expanding products of two or more binomials; factorising quadratic expressions of the form ax² + bx + c.' },
    { code: 'A5', q: 'How are standard formulae used and rearranged?', idea: 'Standard formulae and changing the subject', content: 'Basic foundation: understand and use standard mathematical formulae; rearrange formulae to change the subject. Notes: including use of formulae from other subjects in words and using symbols. See the Appendix for a full list of the prescribed formulae. See also A2.' },
    { code: 'A6', q: 'How is algebra used to argue and prove?', idea: 'Equations, identities and algebraic argument', content: 'Additional foundation: know the difference between an equation and an identity; argue mathematically to show algebraic expressions are equivalent, and use algebra to support and construct arguments. Higher only: to include proofs.' },
    { code: 'A7', q: 'How are expressions interpreted as functions, inverses and composites?', idea: 'Functions, inverse functions and composite functions', content: 'Basic foundation: where appropriate, interpret simple expressions as functions with inputs and outputs. Higher only: interpret the reverse process as the ‘inverse function’; interpret the succession of two functions as a ‘composite function’. Notes: understanding and use of f(x), fg(x) and f⁻¹(x) notation is expected at Higher tier.' }
   ]
  },
  {
   id: '3.2.2',
   component: 'P123',
   option: null,
   name: 'Algebra: Graphs',
   caseStudies: [
    'A8: Plot A(−3, 2) and B(4, −1), and find the coordinates of the midpoint of AB',
    'A9: Draw y = 2x − 1 for −2 ≤ x ≤ 3; find the equation of the line through (1, 5) and (3, 11); at Higher tier find the line perpendicular to y = ½x + 4 through (2, 3)',
    'A10: From a graph of a taxi fare against distance, interpret the gradient and the intercept in context',
    'A11: For y = x² − 4x − 5, find the roots by factorising and the y-intercept; at Higher tier find the turning point by completing the square',
    'A12: Match sketches to y = x², y = x³ and y = 1/x; at Higher tier also match y = 2ˣ and y = sin x, and sketch y = cos x for 0° ≤ x ≤ 360°',
    'A13: Given the graph of y = f(x), sketch y = f(x) + 3, y = f(x − 2) and y = −f(x) (Higher)',
    'A14: Draw the distance–time graph of a journey with a stop and find the speed of each stage; draw y = 3/x for 0.5 ≤ x ≤ 6 from a table',
    'A15: From a velocity–time graph, estimate the distance travelled using the area under the curve and the acceleration at t = 4 s from a tangent (Higher)',
    'A16: Find the equation of the tangent to the circle x² + y² = 25 at the point (3, 4) (Higher)'
   ],
   ideas: [
    { code: 'A8', q: 'How are coordinates used in all four quadrants?', idea: 'Coordinates in all four quadrants', content: 'Basic foundation: work with coordinates in all four quadrants.' },
    { code: 'A9', q: 'How are straight-line graphs plotted and their equations found?', idea: 'Straight-line graphs and y = mx + c', content: 'Basic foundation: plot graphs of equations that correspond to straight-line graphs in the coordinate plane. Additional foundation: use the form y = mx + c to identify parallel lines; find the equation of the line through two given points, or through one point with a given gradient. Higher only: use the form y = mx + c to identify perpendicular lines.' },
    { code: 'A10', q: 'What do the gradient and intercepts of a linear function tell you?', idea: 'Gradients and intercepts of linear functions', content: 'Basic foundation: identify and interpret gradients and intercepts of linear functions graphically and algebraically.' },
    { code: 'A11', q: 'How are the roots, intercepts and turning points of a quadratic found?', idea: 'Roots, intercepts and turning points of quadratic functions', content: 'Additional foundation: identify and interpret roots, intercepts and turning points of quadratic functions graphically; deduce roots algebraically. Higher only: deduce turning points by completing the square. Notes: including the symmetrical property of a quadratic. See also A18.' },
    { code: 'A12', q: 'Which graphs must be recognised, sketched and interpreted?', idea: 'Recognising and sketching standard graphs', content: 'Basic foundation: recognise, sketch and interpret graphs of linear functions and quadratic functions. Additional foundation: including simple cubic functions and the reciprocal function y = 1/x with x ≠ 0. Higher only: including exponential functions y = kˣ for positive values of k, and the trigonometric functions (with arguments in degrees) y = sin x, y = cos x and y = tan x for angles of any size. Notes: see also G21.' },
    { code: 'A13', q: 'How are translations and reflections of a graph sketched?', idea: 'Translations and reflections of a function', content: 'Higher only: sketch translations and reflections of a given function.' },
    { code: 'A14', q: 'How are graphs in real contexts plotted and read?', idea: 'Graphs in real contexts, including kinematics', content: 'Basic foundation: plot and interpret graphs, and graphs of non-standard functions in real contexts, to find approximate solutions to problems such as simple kinematic problems involving distance, speed and acceleration. Additional foundation: including reciprocal graphs. Higher only: including exponential graphs. Notes: including problems requiring a graphical solution. See also A15.' },
    { code: 'A15', q: 'How are gradients of graphs and areas under graphs found and interpreted?', idea: 'Gradients of curves and areas under graphs', content: 'Higher only: calculate or estimate gradients of graphs and areas under graphs (including quadratic and other non-linear graphs), and interpret results in cases such as distance-time graphs, velocity-time graphs and graphs in financial contexts. Notes: see also A14, R14 and R15.' },
    { code: 'A16', q: 'What is the equation of a circle centred at the origin, and how is its tangent found?', idea: 'The circle with centre at the origin and its tangents', content: 'Higher only: recognise and use the equation of a circle with centre at the origin; find the equation of a tangent to a circle at a given point.' }
   ]
  },
  {
   id: '3.2.3',
   component: 'P123',
   option: null,
   name: 'Algebra: Solving equations and inequalities',
   caseStudies: [
    'A17: Solve 3(2x − 1) = 4x + 7, and read the solution of 2x + 1 = 7 from the graph of y = 2x + 1',
    'A18: Solve x² − 5x + 6 = 0 by factorising; at Higher tier solve 2x² + 3x − 4 = 0 to 2 decimal places with the formula and x² + 6x + 2 = 0 by completing the square',
    'A19: Solve 3x + 2y = 12 and 5x − 2y = 4 algebraically; at Higher tier solve y = x + 1 and x² + y² = 25',
    'A20: Show that x³ + x = 7 has a solution between 1 and 2, then use xₙ₊₁ = ∛(7 − xₙ) from x₀ = 1.5 to find it to 3 decimal places (Higher)',
    'A21: A rectangle has sides x + 3 and 2x − 1 and perimeter 34 cm — form an equation, solve it and find the area',
    'A22: Solve 2x + 5 < 13 and show the solution on a number line; at Higher tier solve x² − 4x − 12 ≤ 0 and give the answer in set notation, and shade the region satisfying y > x − 1 and x + y ≤ 4'
   ],
   ideas: [
    { code: 'A17', q: 'How are linear equations solved?', idea: 'Linear equations in one unknown', content: 'Basic foundation: solve linear equations in one unknown algebraically; find approximate solutions using a graph. Additional foundation: including those with the unknown on both sides of the equation. Notes: including use of brackets.' },
    { code: 'A18', q: 'How are quadratic equations solved?', idea: 'Quadratic equations', content: 'Additional foundation: solve quadratic equations algebraically by factorising; find approximate solutions using a graph. Higher only: including those that require rearrangement; including completing the square and by using the quadratic formula. Notes: see also A11.' },
    { code: 'A19', q: 'How are simultaneous equations solved?', idea: 'Simultaneous equations', content: 'Additional foundation: solve two simultaneous equations in two variables (linear/linear) algebraically; find approximate solutions using a graph. Higher only: including linear/quadratic.' },
    { code: 'A20', q: 'How are equations solved numerically by iteration?', idea: 'Iteration', content: 'Higher only: find approximate solutions to equations numerically using iteration. Notes: including the use of suffix notation in recursive formulae.' },
    { code: 'A21', q: 'How are situations translated into equations and solved?', idea: 'Setting up and solving equations from situations', content: 'Additional foundation: translate simple situations or procedures into algebraic expressions or formulae; derive an equation (or two simultaneous equations), solve the equation(s) and interpret the solution. Notes: including the solution of geometrical problems and problems set in context.' },
    { code: 'A22', q: 'How are inequalities solved and their solution sets represented?', idea: 'Inequalities', content: 'Additional foundation: solve linear inequalities in one variable; represent the solution set on a number line. Higher only: solve linear inequalities in one or two variable(s), and quadratic inequalities in one variable; represent the solution set on a number line, using set notation and on a graph. Notes: students should know the conventions of an open circle on a number line for a strict inequality and a closed circle for an included boundary. See also N1. In graphical work the convention of a dashed line for strict inequalities and a solid line for an included inequality will be required.' }
   ]
  },
  {
   id: '3.2.4',
   component: 'P123',
   option: null,
   name: 'Algebra: Sequences',
   caseStudies: [
    'A23: Write the first five terms of the sequence with nth term 3n − 1, and of the sequence “start at 5, multiply by 2 and subtract 1”; find the next pattern in a sequence of matchstick diagrams',
    'A24: Continue 1, 1, 2, 3, 5, 8, …; write the next two terms of 3, 6, 12, 24, …; explain why 2, 6, 12, 20, … is a quadratic sequence; at Higher tier find the next term of 1, √2, 2, 2√2, …',
    'A25: Find the nth term of 7, 11, 15, 19, … and decide whether 203 is a term; at Higher tier find the nth term of 3, 8, 15, 24, …'
   ],
   ideas: [
    { code: 'A23', q: 'How are the terms of a sequence generated?', idea: 'Term-to-term and position-to-term rules', content: 'Basic foundation: generate terms of a sequence from either a term-to-term or a position-to-term rule. Notes: including from patterns and diagrams.' },
    { code: 'A24', q: 'Which special sequences must be recognised and used?', idea: 'Special sequences', content: 'Basic foundation: recognise and use sequences of triangular, square and cube numbers and simple arithmetic progressions. Additional foundation: including Fibonacci-type sequences, quadratic sequences, and simple geometric progressions (rⁿ where n is an integer and r is a rational number > 0). Higher only: including other sequences; including where r is a surd. Notes: other recursive sequences will be defined in the question.' },
    { code: 'A25', q: 'How is the nth term of a sequence found?', idea: 'The nth term', content: 'Basic foundation: deduce expressions to calculate the nth term of linear sequences. Higher only: including quadratic sequences.' }
   ]
  },
  {
   id: '3.3',
   component: 'P123',
   option: null,
   name: 'Ratio, proportion and rates of change',
   caseStudies: [
    'R1: Convert 72 km/h to m/s and 2.5 hours to minutes; convert 3.2 g/cm³ to kg/m³; write a speed of x km/h in m/s (additional foundation)',
    'R2: A map has scale 1 : 25 000 — find the real distance, in km, for 6.4 cm on the map, and the map length of a 3 km path',
    'R3: Write 45 minutes as a fraction of 2 hours, and £150 as a fraction of £120',
    'R4: Simplify 24 : 36 : 60, and write 0.4 : 1.2 and 2½ : 1¾ as ratios of integers',
    'R5: Share £84 in the ratio 3 : 4; a drink is made from squash and water in the ratio 1 : 6 — how much squash in 1.4 litres; which is better value, 500 g for £2.40 or 750 g for £3.45',
    'R6: Two lengths are 40 cm and 100 cm — write the relationship as a ratio and each as a fraction of the other',
    'R7: If 3 : 5 = x : 40, find x; check whether 4 : 6 and 10 : 15 are in proportion',
    'R8: The ratio of x to y is 2 : 7 — write y as a fraction of x + y, and write the equation linking y and x',
    'R9: Increase £64 by 15% using a multiplier; a coat costs £45 after a 25% reduction — find the original price; find the simple interest on £800 at 3% per year for 4 years; express 18 as a percentage of 40',
    'R10: 5 workers take 12 days — how long do 8 workers take at the same rate; y is directly proportional to x and y = 20 when x = 4 — find y when x = 7',
    'R11: A car travels 150 miles in 2 hours 30 minutes — find its average speed; find the density of a block of mass 540 g and volume 200 cm³; compare two rates of pay',
    'R12: Two similar cylinders have heights 4 cm and 10 cm — write the ratio of their heights as a scale factor and link it to the ratio of their surface areas',
    'R13: y is inversely proportional to x² and y = 2 when x = 3 — find the equation and the value of y when x = 6 (Higher); say whether y = 3/x describes direct or inverse proportion',
    'R14: From a graph of cost against number of units, interpret the gradient as a rate; decide which of the sketched graphs shows direct proportion and which inverse',
    'R15: Estimate the rate of change of a population at t = 5 from the gradient of the tangent, and the average rate over 0 ≤ t ≤ 10 from the chord (Higher)',
    'R16: £2000 is invested at 2.5% compound interest for 3 years — find the total; a car loses 12% of its value each year — after how many whole years is it worth less than half its price (Higher: iterative process)'
   ],
   ideas: [
    { code: 'R1', q: 'How are standard and compound units converted?', idea: 'Changing between standard and compound units', content: 'Basic foundation: change freely between related standard units (eg time, length, area, volume/capacity, mass) and compound units (eg speed, rates of pay, prices) in numerical contexts. Additional foundation: compound units (eg density, pressure); in numerical and algebraic contexts.' },
    { code: 'R2', q: 'How are scale factors, scale diagrams and maps used?', idea: 'Scale factors, scale diagrams and maps', content: 'Basic foundation: use scale factors, scale diagrams and maps. Notes: including geometrical problems.' },
    { code: 'R3', q: 'How is one quantity expressed as a fraction of another?', idea: 'One quantity as a fraction of another', content: 'Basic foundation: express one quantity as a fraction of another, where the fraction is less than 1 or greater than 1.' },
    { code: 'R4', q: 'How is ratio notation used and reduced to simplest form?', idea: 'Ratio notation and simplest form', content: 'Basic foundation: use ratio notation, including reduction to simplest form.' },
    { code: 'R5', q: 'How are quantities divided in a ratio and ratios applied to real problems?', idea: 'Dividing in a ratio and applying ratio to real contexts', content: 'Basic foundation: divide a given quantity into two parts in a given part : part or part : whole ratio; express the division of a quantity into two parts as a ratio; apply ratio to real contexts and problems (such as those involving conversion, comparison, scaling, mixing, concentrations). Notes: including better value or best-buy problems.' },
    { code: 'R6', q: 'How is a multiplicative relationship expressed as a ratio or a fraction?', idea: 'Multiplicative relationships as ratios or fractions', content: 'Basic foundation: express a multiplicative relationship between two quantities as a ratio or a fraction.' },
    { code: 'R7', q: 'What does proportion as equality of ratios mean?', idea: 'Proportion as equality of ratios', content: 'Basic foundation: understand and use proportion as equality of ratios.' },
    { code: 'R8', q: 'How do ratios relate to fractions and to linear functions?', idea: 'Ratios, fractions and linear functions', content: 'Basic foundation: relate ratios to fractions and to linear functions. Notes: see also N11, R14.' },
    { code: 'R9', q: 'How are percentages defined, interpreted and used to solve problems?', idea: 'Percentages and percentage change', content: 'Basic foundation: define percentage as ‘number of parts per hundred’; interpret percentages and percentage changes as a fraction or a decimal, and interpret these multiplicatively; express one quantity as a percentage of another; compare two quantities using percentages; work with percentages greater than 100%; solve problems involving percentage change, including percentage increase/decrease and original value problems, and simple interest including in financial mathematics. Notes: see also N2, N12.' },
    { code: 'R10', q: 'How are direct and inverse proportion problems solved?', idea: 'Direct and inverse proportion', content: 'Basic foundation: solve problems involving direct and inverse proportion, including graphical and algebraic representations.' },
    { code: 'R11', q: 'How are compound units such as speed, density and pressure used?', idea: 'Compound units: speed, rates of pay, unit pricing, density and pressure', content: 'Basic foundation: use compound units such as speed, rates of pay, unit pricing. Additional foundation: use compound units such as density and pressure. Notes: including making comparisons.' },
    { code: 'R12', q: 'How are lengths, areas and volumes compared using ratio and scale factors?', idea: 'Comparing lengths, areas and volumes; links to similarity', content: 'Basic foundation: compare lengths, areas and volumes using ratio notation; scale factors. Additional foundation: make links to similarity (including trigonometric ratios). Notes: see also G19, G20.' },
    { code: 'R13', q: 'How are equations describing direct and inverse proportion interpreted and constructed?', idea: 'Equations of direct and inverse proportion', content: 'Additional foundation: understand that X is inversely proportional to Y is equivalent to X is proportional to 1/Y; interpret equations that describe direct and inverse proportion. Higher only: construct and interpret equations that describe direct and inverse proportion.' },
    { code: 'R14', q: 'What does the gradient of a straight-line graph mean as a rate of change?', idea: 'Gradient as a rate of change; graphs of proportion', content: 'Additional foundation: interpret the gradient of a straight-line graph as a rate of change; recognise and interpret graphs that illustrate direct and inverse proportion. Notes: see also A15, R8.' },
    { code: 'R15', q: 'How is the gradient at a point on a curve interpreted as a rate of change?', idea: 'Instantaneous and average rates of change', content: 'Higher only: interpret the gradient at a point on a curve as the instantaneous rate of change; apply the concepts of average and instantaneous rate of change (gradients of chords and tangents) in numerical, algebraic and graphical contexts. Notes: see also A15.' },
    { code: 'R16', q: 'How are growth and decay problems, including compound interest, set up and solved?', idea: 'Growth and decay, compound interest and iterative processes', content: 'Additional foundation: set up, solve and interpret the answers in growth and decay problems, including compound interest. Higher only: and work with general iterative processes.' }
   ]
  },
  {
   id: '3.4.1',
   component: 'P123',
   option: null,
   name: 'Geometry and measures: Properties and constructions',
   caseStudies: [
    'G1: Draw triangle ABC with AB = 6 cm, angle ABC = 40° and BC = 5 cm from the written description, and name the side opposite angle B',
    'G2: Construct the perpendicular bisector of a 7 cm line segment and the bisector of a 70° angle; shade the region of points within 3 cm of A and closer to AB than to AC',
    'G3: Find the missing angle where two lines cross a pair of parallel lines, naming alternate and corresponding angles; show that each interior angle of a regular hexagon is 120°',
    'G4: Name the quadrilateral whose diagonals bisect each other at right angles but are not equal, and give two more of its properties; name a triangle with one obtuse angle and two equal sides',
    'G5: State which condition — SSS, SAS, ASA or RHS — proves that two given triangles are congruent, and say why AAA does not',
    'G6: Prove that the base angles of an isosceles triangle are equal by drawing the line of symmetry and using congruent triangles',
    'G7: Rotate a shape 90° clockwise about (1, 0); enlarge it by scale factor ½ from (0, 0); at Higher tier enlarge it by scale factor −2 from (2, 1)',
    'G8: Reflect a shape in x = 2 and then in x = 5 — describe the single equivalent transformation and say which points are invariant (Higher)',
    'G9: Label the chord, tangent, arc, sector and segment on a circle diagram, and explain the difference between a radius and a diameter',
    'G10: Find angle x in a cyclic quadrilateral with reasons; prove that the angle at the centre is twice the angle at the circumference (Higher)',
    'G11: Find the area of the triangle with vertices (1, 2), (7, 2) and (4, 6); show that ABCD with given coordinates is a parallelogram',
    'G12: State how many faces, edges and vertices a triangular prism has, and describe the surfaces of a cylinder',
    'G13: Draw the plan, front elevation and side elevation of a solid made from six centimetre cubes'
   ],
   ideas: [
    { code: 'G1', q: 'Which terms, notation and labelling conventions must be used in geometry?', idea: 'Geometrical terms, notation and conventions', content: 'Basic foundation: use conventional terms and notations: points, lines, vertices, edges, planes, parallel lines, perpendicular lines, right angles, polygons, regular polygons and polygons with reflection and/or rotation symmetries; use the standard conventions for labelling and referring to the sides and angles of triangles; draw diagrams from written description.' },
    { code: 'G2', q: 'Which ruler and compass constructions and loci must be done?', idea: 'Ruler and compass constructions and loci', content: 'Additional foundation: use the standard ruler and compass constructions (perpendicular bisector of a line segment, constructing a perpendicular to a given line from/at a given point, bisecting a given angle); use these to construct given figures and solve loci problems; know that the perpendicular distance from a point to a line is the shortest distance to the line. Notes: including constructing an angle of 60°.' },
    { code: 'G3', q: 'Which angle facts must be applied and derived?', idea: 'Angle facts, parallel lines and angle sums', content: 'Basic foundation: apply the properties of angles at a point, angles at a point on a straight line, vertically opposite angles; understand and use alternate and corresponding angles on parallel lines; derive and use the sum of angles in a triangle (eg to deduce and use the angle sum in any polygon, and to derive properties of regular polygons). Notes: colloquial terms such as Z angles are not acceptable and should not be used.' },
    { code: 'G4', q: 'What are the properties of the special quadrilaterals, triangles and polygons?', idea: 'Properties of quadrilaterals, triangles and other plane figures', content: 'Basic foundation: derive and apply the properties and definitions of: special types of quadrilaterals, including square, rectangle, parallelogram, trapezium, kite and rhombus; and triangles and other plane figures using appropriate language. Notes: including knowing names and properties of isosceles, equilateral, scalene, right-angled, acute-angled, obtuse-angled triangles. Including knowing names and using the polygons: pentagon, hexagon, octagon and decagon.' },
    { code: 'G5', q: 'What are the congruence criteria for triangles?', idea: 'Congruence criteria: SSS, SAS, ASA, RHS', content: 'Additional foundation: use the basic congruence criteria for triangles (SSS, SAS, ASA, RHS).' },
    { code: 'G6', q: 'How are geometrical results conjectured, derived and proved?', idea: 'Deriving results and simple proofs', content: 'Additional foundation: apply angle facts, triangle congruence, similarity and properties of quadrilaterals to conjecture and derive results about angles and sides, including Pythagoras’ theorem and the fact that the base angles of an isosceles triangle are equal, and use known results to obtain simple proofs.' },
    { code: 'G7', q: 'How are congruent and similar shapes identified, described and constructed?', idea: 'Transformations: rotation, reflection, translation and enlargement', content: 'Basic foundation: identify, describe and construct congruent and similar shapes, including on coordinate axes, by considering rotation, reflection, translation and enlargement. Additional foundation: including fractional scale factors. Higher only: including negative scale factors.' },
    { code: 'G8', q: 'What changes and what is invariant under combinations of transformations?', idea: 'Combinations of transformations and invariance', content: 'Higher only: describe the changes and invariance achieved by combinations of rotations, reflections and translations. Notes: including using column vector notation for translations. See also G24.' },
    { code: 'G9', q: 'What are the parts of a circle?', idea: 'Circle definitions and properties', content: 'Basic foundation: identify and apply circle definitions and properties, including: centre, radius, chord, diameter, circumference. Additional foundation: including: tangent, arc, sector and segment.' },
    { code: 'G10', q: 'Which circle theorems must be applied and proved?', idea: 'Circle theorems', content: 'Higher only: apply and prove the standard circle theorems concerning angles, radii, tangents and chords, and use them to prove related results. Notes: including angle subtended by an arc at the centre is equal to twice the angle subtended at any point on the circumference, angle subtended at the circumference by a semicircle is 90°, angles in the same segment are equal, opposite angles in a cyclic quadrilateral sum to 180°, tangent at any point on a circle is perpendicular to the radius at that point, tangents from an external point are equal in length, the perpendicular from the centre to a chord bisects the chord, alternate segment theorem.' },
    { code: 'G11', q: 'How are geometrical problems on coordinate axes solved?', idea: 'Geometrical problems on coordinate axes', content: 'Basic foundation: solve geometrical problems on coordinate axes.' },
    { code: 'G12', q: 'What are the properties of the standard 3D shapes?', idea: 'Faces, surfaces, edges and vertices of 3D shapes', content: 'Basic foundation: identify properties of the faces, surfaces, edges and vertices of: cubes, cuboids, prisms, cylinders, pyramids, cones and spheres.' },
    { code: 'G13', q: 'How are plans and elevations interpreted and constructed?', idea: 'Plans and elevations', content: 'Basic foundation: interpret plans and elevations of 3D shapes. Additional foundation: construct and interpret plans and elevations of 3D shapes.' }
   ]
  },
  {
   id: '3.4.2',
   component: 'P123',
   option: null,
   name: 'Geometry and measures: Mensuration and calculation',
   caseStudies: [
    'G14: A tank holds 2.5 m³ of water — how many litres is that; a journey of 1 hour 45 minutes starting at 20:35 ends at what time?',
    'G15: Measure the bearing of B from A on a scale drawing, then find the bearing of A from B; draw the position of a ship 6 km from a port on a bearing of 130° at 1 cm to 1 km',
    'G16: Find the area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm; find the volume of a cylinder of radius 3 cm and height 10 cm',
    'G17: Find the perimeter and the area of a semicircle of diameter 10 cm, leaving π in the answer; find the volume of a cone of radius 4 cm and height 9 cm using the formula given; find the volume of a frustum by subtraction',
    'G18: Find the arc length and the area of a sector of radius 6 cm and angle 50°; find the angle of a sector of radius 5 cm and area 20 cm²',
    'G19: Two similar triangles have corresponding sides 6 cm and 9 cm — find a missing length; at Higher tier two similar solids have surface areas in the ratio 4 : 9 — find the ratio of their volumes',
    'G20: Find the hypotenuse of a right-angled triangle with legs 5 cm and 12 cm; find angle θ when the opposite side is 4 and the adjacent side is 7; at Higher tier find the angle between a diagonal of a cuboid and its base',
    'G21: Without a calculator, find the exact height of an equilateral triangle of side 8 cm using sin 60° = √3/2, and the exact value of cos 45° × tan 45°',
    'G22: In triangle ABC, a = 7 cm, b = 9 cm and angle C = 50° — find c with the cosine rule; given a = 8, b = 11 and angle B = 70°, find angle A with the sine rule (Higher)',
    'G23: Find the area of a triangle with sides 8 cm and 11 cm and included angle 35°; find the included angle when the area is 30 cm² (Higher)'
   ],
   ideas: [
    { code: 'G14', q: 'Which standard units of measure must be used?', idea: 'Standard units of measure', content: 'Basic foundation: use standard units of measure and related concepts (length, area, volume/capacity, mass, time, money etc.).' },
    { code: 'G15', q: 'How are lengths and angles measured, and how are bearings used?', idea: 'Measuring, scale drawings and bearings', content: 'Basic foundation: measure line segments and angles in geometric figures, including interpreting maps and scale drawings and use of bearings. Notes: including the eight compass point bearings and three-figure bearings.' },
    { code: 'G16', q: 'Which area and volume formulae must be known and applied?', idea: 'Areas of triangles, parallelograms and trapezia; volumes of cuboids and prisms', content: 'Basic foundation: know and apply formulae to calculate: area of triangles, parallelograms, trapezia; volume of cuboids and other right prisms (including cylinders).' },
    { code: 'G17', q: 'How are circles, composite shapes and solids measured?', idea: 'Circumference and area of a circle; composite shapes; spheres, pyramids and cones', content: 'Basic foundation: know the formulae: circumference of a circle = 2πr = πd, area of a circle = πr²; calculate perimeters of 2D shapes, including circles; areas of circles and composite shapes. Additional foundation: surface area and volume of spheres, pyramids, cones and composite solids. Notes: including frustums. Solutions in terms of π may be asked for. See also N8, G18.' },
    { code: 'G18', q: 'How are arc lengths and sector areas calculated?', idea: 'Arcs and sectors of circles', content: 'Additional foundation: calculate arc lengths, angles and areas of sectors of circles. Notes: see also N8, G17.' },
    { code: 'G19', q: 'How are congruence and similarity applied to lengths, areas and volumes?', idea: 'Similarity: lengths, areas and volumes', content: 'Additional foundation: apply the concepts of congruence and similarity, including the relationships between lengths in similar figures. Higher only: including the relationships between lengths, areas and volumes in similar figures. Notes: see also R12.' },
    { code: 'G20', q: 'How are Pythagoras’ theorem and the trigonometric ratios applied?', idea: 'Pythagoras’ theorem and the trigonometric ratios', content: 'Additional foundation: know the formulae for: Pythagoras’ theorem, a² + b² = c², and the trigonometric ratios, sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse and tan θ = opposite/adjacent; apply them to find angles and lengths in right-angled triangles in two dimensional figures. Higher only: apply them to find angles and lengths in right-angled triangles and, where possible, general triangles in two and three dimensional figures. Notes: see also R12.' },
    { code: 'G21', q: 'Which exact trigonometric values must be known?', idea: 'Exact values of sin, cos and tan', content: 'Additional foundation: know the exact values of sin θ and cos θ for θ = 0°, 30°, 45°, 60° and 90°; know the exact value of tan θ for θ = 0°, 30°, 45°, 60°. Notes: see also A12.' },
    { code: 'G22', q: 'How are the sine rule and the cosine rule applied?', idea: 'The sine rule and the cosine rule', content: 'Higher only: know and apply the sine rule, a/sin A = b/sin B = c/sin C, and cosine rule, a² = b² + c² − 2bc cos A, to find unknown lengths and angles.' },
    { code: 'G23', q: 'How is the area of any triangle found from two sides and the included angle?', idea: 'Area = ½ab sin C', content: 'Higher only: know and apply Area = ½ab sin C to calculate the area, sides or angles of any triangle.' }
   ]
  },
  {
   id: '3.4.3',
   component: 'P123',
   option: null,
   name: 'Geometry and measures: Vectors',
   caseStudies: [
    'G24: Describe the translation that maps triangle A onto triangle B as a column vector, and draw the image of a shape after the translation (−3, 2)',
    'G25: Given a = (3, −1) and b = (−2, 4), find 2a − b as a column vector and draw it; in triangle OAB with M the midpoint of AB, express OM in terms of a and b; at Higher tier prove that three points are collinear'
   ],
   ideas: [
    { code: 'G24', q: 'How is a translation described as a vector?', idea: 'Translations as 2D vectors', content: 'Basic foundation: describe translations as 2D vectors. Notes: see also G8.' },
    { code: 'G25', q: 'How are vectors added, subtracted, multiplied by a scalar and used in proofs?', idea: 'Vector arithmetic and geometric arguments', content: 'Additional foundation: apply addition and subtraction of vectors, multiplication of vectors by a scalar, and diagrammatic and column representations of vectors. Higher only: use vectors to construct geometric arguments and proofs.' }
   ]
  },
  {
   id: '3.5',
   component: 'P123',
   option: null,
   name: 'Probability',
   caseStudies: [
    'P1: Complete a frequency tree for 80 students by gender and whether they cycle to school, then give the relative frequency of cyclists as a fraction, a decimal and a percentage',
    'P2: A spinner lands on red with probability 0.3 — how many reds are expected in 200 spins; explain what “fair” means for a dice',
    'P3: A drawing pin landed point-up 37 times in 50 throws — estimate the probability of point-up and place it on the 0 to 1 scale',
    'P4: The probabilities that a counter is red, blue or green are 0.3, x and 2x — find x; the probability of rain is 0.35 — find the probability of no rain',
    'P5: Explain why the relative frequency after 1000 throws is a better estimate of a probability than after 10 throws',
    'P6: Draw a Venn diagram for 30 students who study French and/or Spanish and find how many study neither; list the outcomes of tossing two coins using a tree diagram',
    'P7: Draw the sample space for the total of two dice and find the probability of a total of 7 and of a total less than 5',
    'P8: Two counters are taken without replacement from a bag of 3 red and 5 blue — draw a tree diagram and find the probability of two different colours; state the assumption behind multiplying the probabilities',
    'P9: From a two-way table, find the probability that a student is left-handed given that they are a girl; from a Venn diagram find P(A given B) (Higher)'
   ],
   ideas: [
    { code: 'P1', q: 'How are the outcomes of probability experiments recorded and analysed?', idea: 'Recording outcomes with tables and frequency trees', content: 'Basic foundation: record, describe and analyse the frequency of outcomes of probability experiments using tables and frequency trees. Notes: probabilities should be written as fractions, decimals or percentages.' },
    { code: 'P2', q: 'How are expected outcomes of repeated experiments calculated?', idea: 'Randomness, fairness and expected outcomes', content: 'Basic foundation: apply ideas of randomness, fairness and equally likely events to calculate expected outcomes of multiple future experiments.' },
    { code: 'P3', q: 'How do relative frequencies relate to theoretical probability?', idea: 'Relative frequency, theoretical probability and the 0 to 1 scale', content: 'Basic foundation: relate relative expected frequencies to theoretical probability, using appropriate language and the 0 to 1 probability scale.' },
    { code: 'P4', q: 'Why do the probabilities of an exhaustive set of outcomes sum to 1?', idea: 'Probabilities summing to 1', content: 'Basic foundation: apply the property that the probabilities of an exhaustive set of outcomes sum to 1; apply the property that the probabilities of an exhaustive set of mutually exclusive events sum to 1.' },
    { code: 'P5', q: 'What happens to empirical results as the sample size increases?', idea: 'Empirical samples and theoretical distributions', content: 'Additional foundation: understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size.' },
    { code: 'P6', q: 'How are sets and combinations of sets enumerated?', idea: 'Enumerating sets: tables, grids, Venn diagrams and tree diagrams', content: 'Basic foundation: enumerate sets and combinations of sets systematically, using tables, grids, Venn diagrams. Additional foundation: including using tree diagrams.' },
    { code: 'P7', q: 'How are possibility spaces constructed and used?', idea: 'Theoretical possibility spaces', content: 'Basic foundation: construct theoretical possibility spaces for single and combined experiments with equally likely outcomes and use these to calculate theoretical probabilities.' },
    { code: 'P8', q: 'How are the probabilities of combined events calculated?', idea: 'Independent and dependent combined events', content: 'Additional foundation: calculate the probability of independent and dependent combined events, including using tree diagrams and other representations, and know the underlying assumptions. Notes: including knowing when to add and when to multiply two or more probabilities.' },
    { code: 'P9', q: 'How are conditional probabilities calculated and interpreted?', idea: 'Conditional probability', content: 'Higher only: calculate and interpret conditional probabilities through representation using expected frequencies with two-way tables, tree diagrams and Venn diagrams.' }
   ]
  },
  {
   id: '3.6',
   component: 'P123',
   option: null,
   name: 'Statistics',
   caseStudies: [
    'S1: A school surveys the first 50 students to arrive — say why the sample may be biased, suggest a better method, and say what can and cannot be inferred about all 1200 students',
    'S2: Draw a pie chart from a frequency table of 72 pets; read a time series graph of monthly sales and describe the trend; choose a suitable diagram for a set of categorical data',
    'S3: Draw a histogram from a grouped frequency table with unequal class widths; estimate the median and interquartile range from a cumulative frequency graph (Higher)',
    'S4: Estimate the mean from a grouped frequency table and give the modal class; compare two classes’ marks using the median and range in context; at Higher tier compare two box plots using medians and interquartile ranges',
    'S5: Use the mean and range of a sample of light bulbs to describe the lifetime of the whole batch',
    'S6: Plot a scatter graph of hours revised against marks, describe the correlation, draw a line of best fit, predict the mark for 6 hours, and say why predicting for 20 hours is unreliable'
   ],
   ideas: [
    { code: 'S1', q: 'What can be inferred from a sample, and what are the limitations of sampling?', idea: 'Sampling and inference about populations', content: 'Additional foundation: infer properties of populations or distributions from a sample, whilst knowing the limitations of sampling.' },
    { code: 'S2', q: 'Which tables, charts and diagrams must be constructed and interpreted?', idea: 'Tables, charts and diagrams for categorical and discrete data', content: 'Basic foundation: interpret and construct tables, charts and diagrams, including frequency tables, bar charts, pie charts and pictograms for categorical data, vertical line charts for ungrouped discrete numerical data, and know their appropriate use. Additional foundation: including tables and line graphs for time series data. Notes: including choosing suitable statistical diagrams.' },
    { code: 'S3', q: 'How are histograms and cumulative frequency graphs constructed and interpreted?', idea: 'Histograms and cumulative frequency graphs', content: 'Higher only: construct and interpret diagrams for grouped discrete data and continuous data, ie histograms with equal and unequal class intervals and cumulative frequency graphs, and know their appropriate use.' },
    { code: 'S4', q: 'How are distributions interpreted, analysed and compared?', idea: 'Measures of central tendency and spread; comparing distributions', content: 'Basic foundation: interpret, analyse and compare the distributions of data sets from univariate empirical distributions through: appropriate graphical representation involving discrete, continuous and grouped data; appropriate measures of central tendency (median, mean, mode and modal class) and spread (range, including consideration of outliers). Higher only: including box plots; including quartiles and inter-quartile range. Notes: students should know and understand the terms: primary data, secondary data, discrete data and continuous data.' },
    { code: 'S5', q: 'How are statistics used to describe a population?', idea: 'Describing a population with statistics', content: 'Basic foundation: apply statistics to describe a population.' },
    { code: 'S6', q: 'How are scatter graphs used, and what do correlation and lines of best fit show?', idea: 'Scatter graphs, correlation and lines of best fit', content: 'Basic foundation: use and interpret scatter graphs of bivariate data; recognise correlation. Additional foundation: know that it does not indicate causation; draw estimated lines of best fit; make predictions; interpolate and extrapolate apparent trends whilst knowing the dangers of so doing. Notes: students should know and understand the terms: positive correlation, negative correlation, no correlation, weak correlation and strong correlation.' }
   ]
  },
  {
   id: '6',
   component: 'P123',
   option: null,
   name: 'Appendix: mathematical formulae',
   caseStudies: [
    '1: Solve 3x² − 5x − 1 = 0 with the quadratic formula to 2 decimal places; find the circumference of a circle of diameter 9 cm; find the third side of a triangle from two sides and the included angle with the cosine rule',
    '2: Find the area of a trapezium and the volume of a prism from its cross-section; find the total after £500 is invested at 4% compound interest for 3 years; given P(A) = 0.5, P(B) = 0.4 and P(A and B) = 0.2, find P(A or B)',
    '3: Using the formulae given in the question, find the volume of a sphere of radius 6 cm and the total surface area of a cone; a ball is thrown with u = 12 m/s and a = −10 m/s² — find v after 1 s from v = u + at'
   ],
   ideas: [
    { code: '1', q: 'Which formulae must be known and will not be given in the exam?', idea: 'Formulae to know: the quadratic formula, circles, Pythagoras’ theorem and trigonometry', content: 'Students are expected to know the following formulae included in the subject content; they will not be given in the exam. Refer to the Subject content section to determine the tier at which these formulae could be used. The quadratic formula: the solutions of ax² + bx + c = 0, where a ≠ 0, are x = (−b ± √(b² − 4ac)) / 2a. Circumference and area of a circle, where r is the radius and d is the diameter: circumference of a circle = 2πr = πd; area of a circle = πr². Pythagoras’ theorem: in any right-angled triangle where a, b and c are lengths of the sides and c is the hypotenuse, a² + b² = c². Trigonometry formulae: in any right-angled triangle ABC where a, b and c are lengths of the sides and c is the hypotenuse, sin A = a/c, cos A = b/c, tan A = a/b; in any triangle ABC where a, b and c are lengths of the sides: sine rule a/sin A = b/sin B = c/sin C; cosine rule a² = b² + c² − 2bc cos A; Area = ½ab sin C.' },
    { code: '2', q: 'Which formulae must be known or derived, and will not be given?', idea: 'Formulae to know or derive: trapezium, prism, compound interest and probability', content: 'Students are expected to know the following formulae or be able to derive them; they will not be given in the exam. Refer to the Subject content section to determine the tier at which these formulae could be used. Perimeter, area, surface area and volume formulae: where a and b are the lengths of the parallel sides and h is their perpendicular separation, area of a trapezium = ½(a + b)h; volume of a prism = area of cross section × length. Compound interest: where P is the principal amount, r is the interest rate over a given period and n is the number of times that the interest is compounded, total accrued = P(1 + r/100)ⁿ. Probability: where P(A) is the probability of outcome A and P(B) is the probability of outcome B, P(A or B) = P(A) + P(B) − P(A and B); P(A and B) = P(A given B) P(B).' },
    { code: '3', q: 'Which formulae are given in the exam in the relevant question?', idea: 'Formulae given in the question: cone, sphere and kinematics', content: 'Students are not expected to memorise the following formulae; they will be given in the exam in the relevant question. Refer to the Subject content section to determine the tier at which these formulae could be used. Perimeter, area, surface area and volume formulae, where r is the radius of the sphere or cone, l is the slant height of a cone and h is the perpendicular height of a cone: curved surface area of a cone = πrl; surface area of a sphere = 4πr²; volume of a sphere = 4/3 πr³; volume of a cone = 1/3 πr²h. Kinematics formulae, where a is constant acceleration, u is initial velocity, v is final velocity, s is displacement from the position when t = 0 and t is time taken: v = u + at; s = ut + ½at²; v² = u² + 2as.' }
   ]
  }
 ]
};
module.exports = { SPEC_8300 };
