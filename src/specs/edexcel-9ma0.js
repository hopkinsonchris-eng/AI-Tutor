/* Pearson Edexcel A level Mathematics (9MA0) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_9MA0 = {
 "id": "EDX-9MA0",
 "board": "Pearson Edexcel",
 "subject": "Mathematics",
 "code": "9MA0",
 "level": "A level",
 "version": "Specification Issue 4 (February 2020); first assessment May/June 2018",
 "firstExam": 2018,
 "essaySubject": false,
 "components": [
  {
   "id": "P12",
   "name": "Papers 1 and 2: Pure Mathematics",
   "paperCode": "9MA0/01 and 9MA0/02",
   "marks": 200,
   "weight": 66.67,
   "minutes": 240,
   "sections": [
    "Paper 1: Pure Mathematics 1 (paper code 9MA0/01) — 2-hour written examination, 33.33% of the qualification, 100 marks.",
    "Paper 2: Pure Mathematics 2 (paper code 9MA0/02) — 2-hour written examination, 33.33% of the qualification, 100 marks.",
    "Paper 1 and Paper 2 may contain questions on any topics from the Pure Mathematics content (Topics 1–10). Students must answer all questions. Calculators can be used in the assessment. The booklet Mathematical Formulae and Statistical Tables is provided. These papers assess synopticity."
   ]
  },
  {
   "id": "P3",
   "name": "Paper 3: Statistics and Mechanics",
   "paperCode": "9MA0/03",
   "marks": 100,
   "weight": 33.33,
   "minutes": 120,
   "sections": [
    "Section A: Statistics — Topic 1 Statistical sampling, Topic 2 Data presentation and interpretation, Topic 3 Probability, Topic 4 Statistical distributions, Topic 5 Statistical hypothesis testing.",
    "Section B: Mechanics — Topic 6 Quantities and units in mechanics, Topic 7 Kinematics, Topic 8 Forces and Newton’s laws, Topic 9 Moments.",
    "All the Pure Mathematics content is assumed knowledge for Paper 3 and may be tested in parts of questions. Students must answer all questions. Calculators can be used. Questions in Section A assume knowledge and understanding of Pearson’s large data set, which students must become familiar with in advance (they are not required to have copies of it in the examination). This paper assesses synopticity."
   ]
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Use and apply standard techniques",
   "text": "Students should be able to: select and correctly carry out routine procedures; and accurately recall facts, terminology and definitions. 48–52% of the A level (16.00–17.33% on each paper).",
   "weight": 50,
   "byComponent": {
    "P12": 34,
    "P3": 16
   }
  },
  {
   "id": "AO2",
   "label": "Reason, interpret and communicate mathematically",
   "text": "Students should be able to: construct rigorous mathematical arguments (including proofs); make deductions and inferences; assess the validity of mathematical arguments; explain their reasoning; and use mathematical language and notation correctly. 23–27% of the A level (8.66–10% on each of Papers 1 and 2, 5.66–7.00% on Paper 3).",
   "weight": 25,
   "byComponent": {
    "P12": 19,
    "P3": 6
   }
  },
  {
   "id": "AO3",
   "label": "Solve problems within mathematics and in other contexts",
   "text": "Students should be able to: translate problems in mathematical and non-mathematical contexts into mathematical processes; interpret solutions to problems in their original context, and, where appropriate, evaluate their accuracy and limitations; translate situations in context into mathematical models; use mathematical models; and evaluate the outcomes of modelling in context, recognise the limitations of models and, where appropriate, explain how to refine them. 23–27% of the A level (6.33–7.67% on each of Papers 1 and 2, 10.33–11.67% on Paper 3).",
   "weight": 25,
   "byComponent": {
    "P12": 14,
    "P3": 11
   }
  }
 ],
 "markConventions": {
  "style": "points",
  "summary": "Every question is point-marked with M (method), A (accuracy) and B (independent) marks, as Pearson’s mark schemes set out: M marks are awarded for a correct method, or a method that would lead to the answer, even with arithmetic slips; A marks are accuracy marks that can only be awarded if the relevant M mark has been earned; B marks are unconditional accuracy marks, independent of any method; and dependent marks written dM or dA (only available if the earlier mark named has been scored). Follow-through (ft) marks credit correct work from an earlier wrong value where the scheme says so; cao (correct answer only), cso (correct solution only) and awrt (answers which round to) tighten what is accepted; isw (ignore subsequent working) protects a correct answer from later errors. Unshown method earns nothing even when the answer is right, and a calculator answer with no working can score only the B or final A marks the scheme allows. ‘Show that’ questions give the answer, so every mark is in the working; ‘hence’ ties the marks to the previous part; ‘exact’ forbids decimal approximations. Across the qualification AO1 (standard techniques) carries 48–52%, AO2 (reasoning and proof) 23–27% and AO3 (problem solving and modelling, heavier on Paper 3) 23–27% (Section 2, Assessment Objectives). For level fields, report level 1 for below half marks, 2 for half to two-thirds, 3 for the top third, with maxLevel 3.",
  "commandWords": [
   {
    "word": "Show that",
    "means": "The result is printed in the question, so no marks can be earned for stating it: every intermediate line of algebra is where the M and A marks sit, and the final line must be seen to match the given form exactly (cso). Working backwards from the answer without justification scores nothing."
   },
   {
    "word": "Hence",
    "means": "Use the result of the previous part. The mark scheme credits only a method that uses it; an independent method may score no marks for that part."
   },
   {
    "word": "Hence or otherwise",
    "means": "Any complete valid method scores; using the previous part is usually the intended, quicker route."
   },
   {
    "word": "Prove",
    "means": "AO2: construct a rigorous mathematical argument (including proofs) — state the assumption, proceed through a series of logical steps with correct symbols and connecting language, and end with a conclusion that names what has been proved (content statement 1.1: proof by deduction, exhaustion, counter example and contradiction)."
   },
   {
    "word": "Find",
    "means": "Working is expected and method marks are available; give the answer in the form asked for (exact, or to the accuracy stated, e.g. 3 significant figures)."
   },
   {
    "word": "Solve",
    "means": "Find every value that satisfies the equation or inequality in the given interval or domain, and reject any that do not (for example values outside the domain of a log, or trigonometric solutions outside the range set)."
   },
   {
    "word": "Sketch",
    "means": "Draw the curve with its shape, the coordinates of intersections with the axes, turning points and asymptotes marked, and the equations of asymptotes stated — B marks are awarded for each feature (content statements 2.7, 2.9 and 5.1)."
   },
   {
    "word": "Verify",
    "means": "Substitute the given value and show that it satisfies the equation or condition, with the substitution and the check both seen."
   },
   {
    "word": "State",
    "means": "Write the answer down; no working is required and only B marks are available."
   },
   {
    "word": "Exact",
    "means": "Leave surds, π, e, ln and fractions unsimplified to decimals — a rounded decimal loses the final A mark."
   },
   {
    "word": "Interpret",
    "means": "AO3: say what the number, gradient, area or parameter means in the context of the original problem, in a sentence, with units where they apply (Overarching theme 2.3 and 3.3)."
   },
   {
    "word": "Deduce",
    "means": "AO2: make a deduction from an earlier result without recalculating — a one-line justified statement is what the mark scheme rewards."
   },
   {
    "word": "Use",
    "means": "The method is prescribed (for example ‘use the trapezium rule’, ‘use the substitution u = …’, ‘use integration by parts’): a different method scores no method marks for that part."
   },
   {
    "word": "Criticise / Evaluate the model",
    "means": "AO3: recognise the limitations of the model or of a numerical solution, comment on a modelling assumption (e.g. a particle, a light inextensible string, g constant) and, where asked, explain how to refine it (Overarching theme 3.4 and 3.5)."
   },
   {
    "word": "Write down",
    "means": "A one-step answer read from the working, graph or calculator; no method mark is attached."
   }
  ],
  "essayShapes": [
   {
    "marks": 12,
    "minutes": 14,
    "structure": "A multi-part modelling or problem-solving question (AO3), the heaviest tariff on a paper: translate the situation into a model or an equation, carry out the technique with every line of method shown (M and A marks), interpret the result in context in a sentence, then evaluate or refine the model or comment on the accuracy of a numerical solution. Minutes are pro rata from the paper: 100 marks in 120 minutes."
   },
   {
    "marks": 8,
    "minutes": 10,
    "structure": "An extended question in two or three parts with a ‘show that’ or ‘prove’ and a following ‘hence’: the printed result is not credited, every algebraic step to it is; the ‘hence’ part must use it. Minutes are pro rata: 100 marks in 120 minutes."
   },
   {
    "marks": 4,
    "minutes": 5,
    "structure": "A routine technique question (AO1) with the method shown in full: a correct answer with no method scores only the marks the scheme allows for the answer alone. Minutes are pro rata: 100 marks in 120 minutes."
   }
  ]
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf",
  "etag": "W/\"1153d0-65aabc46a95ab\"",
  "lastModified": "Fri, 04 Sep 2026 17:40:41 GMT",
  "length": 1135568,
  "checkedAt": "2026-09-11T15:49:00.336Z"
 },
 "topics": [
  {
   "id": "P1",
   "component": "P12",
   "option": null,
   "name": "Proof",
   "caseStudies": [
    "[1.1] Prove that the sum of two consecutive odd numbers is a multiple of 4, setting out the assumption, the steps and the conclusion",
    "[1.1 Proof by deduction] Using completion of the square, prove that n² − 6n + 10 is positive for all values of n",
    "[1.1 Proof by exhaustion] Given that p is a prime number such that 3 < p < 25, prove by exhaustion that (p − 1)(p + 1) is a multiple of 12",
    "[1.1 Disproof by counter example] Show that the statement “n² − n + 1 is a prime number for all values of n” is untrue",
    "[1.1 Proof by contradiction] Prove by contradiction that √2 is irrational; prove that there are infinitely many primes"
   ],
   "ideas": [
    {
     "code": "1.1",
     "q": "How do I set out a mathematical proof so that every mark for the argument is earned?",
     "idea": "The structure of mathematical proof",
     "content": "Understand and use the structure of mathematical proof, proceeding from given assumptions through a series of logical steps to a conclusion. The examiner looks for: the assumption or definition stated at the start, each step following from the last with correct symbols and connecting language (⇒, ⇔, ‘hence’, ‘therefore’), and a closing line that states what has been proved. The methods of proof the specification names are proof by deduction, proof by exhaustion, disproof by counter example and proof by contradiction."
    },
    {
     "code": "1.1 Proof by deduction",
     "q": "How do I prove a general statement directly from algebra?",
     "idea": "Proof by deduction",
     "content": "Proof by deduction, e.g. using completion of the square, prove that n² − 6n + 10 is positive for all values of n; or differentiation from first principles for small positive integer powers of x; or proving results for arithmetic and geometric series. This is the most commonly used method of proof throughout the specification: start from a general algebraic form (2n for even, 2n + 1 for odd, (n + 1)² − 3 etc.), manipulate it, and finish with a conclusion that names the property proved."
    },
    {
     "code": "1.1 Proof by exhaustion",
     "q": "When can I prove something by checking every case?",
     "idea": "Proof by exhaustion",
     "content": "Proof by exhaustion: given that p is a prime number such that 3 < p < 25, prove by exhaustion that (p − 1)(p + 1) is a multiple of 12. The method is valid only when the cases are finite; the mark scheme expects every case listed and checked (here p = 5, 7, 11, 13, 17, 19, 23) and a concluding statement."
    },
    {
     "code": "1.1 Disproof by counter example",
     "q": "How do I show a general claim is false?",
     "idea": "Disproof by counter example",
     "content": "Disproof by counter example, e.g. show that the statement “n² − n + 1 is a prime number for all values of n” is untrue. One specific value that fails, with the working shown (n = 4 gives 13, prime; n = 5 gives 21 = 3 × 7, not prime), is a complete disproof; a general argument is not needed."
    },
    {
     "code": "1.1 Proof by contradiction",
     "q": "How does a proof by contradiction work, and which two must I know?",
     "idea": "Proof by contradiction",
     "content": "Proof by contradiction, including proof of the irrationality of √2 and the infinity of primes, and application to unfamiliar proofs. Assume the negation of the statement (√2 = p/q in lowest terms; there are finitely many primes p₁ … pₙ), deduce a contradiction (p and q both even; p₁p₂…pₙ + 1 has a prime factor not in the list), and conclude that the assumption was false so the statement is true. The mark scheme awards the opening assumption, the contradiction and the conclusion separately."
    }
   ]
  },
  {
   "id": "P2",
   "component": "P12",
   "option": null,
   "name": "Algebra and functions",
   "caseStudies": [
    "[2.1] Evaluate 8^(2/3) and write 1/√x as a single power of x, using the equivalence of a^(m/n) and ⁿ√(aᵐ)",
    "[2.2] Rationalise the denominator of 6/(3 − √2), and simplify algebraic surds using (√x)² = x, √(xy) = √x √y and (√x + √y)(√x − √y) = x − y",
    "[2.3] Write 2x² + 8x + 3 in the form a(x + b)² + c, use b² − 4ac to find the values of k for which x² + kx + 9 = 0 has repeated roots, and solve a quadratic in a function of the unknown such as 4^x − 5(2^x) + 4 = 0",
    "[2.4] Solve y = 2x + 3, y = x² − 4x + 8 simultaneously; and solve 2x − 3y = 6, x² − y² + 3x = 50",
    "[2.5] Solve px² + qx + r < ax + b, interpreting the solution as the range of x for which the curve y = px² + qx + r is below the line y = ax + b, and give the answer using ‘and’/‘or’ or set notation",
    "[2.6] Factorise the cubic expressions x³ + 3x² − 4 and 6x³ + 11x² − x − 6 using the factor theorem, then simplify a rational expression by factorising and cancelling",
    "[2.7] Sketch the graph with equation y = x²(2x − 1)²; sketch y = |2x − 1| and use the graph to solve the equation |2x − 1| = x or the inequality |2x − 1| > x",
    "[2.8] Given f and g, find fg(x) and its domain and range, find f⁻¹(x), and sketch y = f(x) and y = f⁻¹(x) showing the reflection in the line y = x",
    "[2.9] Given the graph of y = f(x), sketch y = 2f(3x) and y = f(−x) + 1, and sketch y = 3 + sin 2x and y = −cos(x + π/4)",
    "[2.10] Express a rational function with denominator (ax + b)(cx + d)² in partial fractions, and use the result in an integration or a series expansion",
    "[2.11] Use a trigonometric function to model the height of the tide (or the hours of sunlight) through the day, and comment on the limitations and refinements of the model"
   ],
   "ideas": [
    {
     "code": "2.1",
     "q": "How do I simplify expressions with fractional, negative and zero powers?",
     "idea": "Laws of indices for all rational exponents",
     "content": "Understand and use the laws of indices for all rational exponents. Students need to know and use aᵐ × aⁿ = a^(m + n), aᵐ ÷ aⁿ = a^(m − n) and (aᵐ)ⁿ = a^(mn). The equivalence of a^(m/n) and ⁿ√(aᵐ) should be known, so a rational power may be read either as a root of a power or as a power of a root. The laws hold for all rational values of m and n, so an expression involving fractional or negative powers can be written as a single power of a."
    },
    {
     "code": "2.2",
     "q": "How do I simplify surds and rationalise a denominator?",
     "idea": "Manipulating surds and rationalising the denominator",
     "content": "Use and manipulate surds, including rationalising the denominator. Students should be able to simplify algebraic surds using the results (√x)² = x, √(xy) = √x √y and (√x + √y)(√x − √y) = x − y. The last result is what clears a surd from a denominator: multiplying numerator and denominator by the conjugate of the denominator leaves a rational denominator, and the answer is then given in simplified surd form."
    },
    {
     "code": "2.3",
     "q": "How do I solve, complete the square for, and find the number of roots of a quadratic?",
     "idea": "Quadratic functions, the discriminant, completing the square and solving quadratics",
     "content": "Work with quadratic functions and their graphs; the notation f(x) may be used. The discriminant of a quadratic function, including the conditions for real and repeated roots: students need to know and to use b² − 4ac > 0, b² − 4ac = 0 and b² − 4ac < 0. Completing the square: ax² + bx + c = a(x + b/(2a))² + (c − b²/(4a)). Solution of quadratic equations by factorisation, use of the formula, use of a calculator or completing the square, including solving quadratic equations in a function of the unknown — these functions could include powers of x, trigonometric functions of x, and exponential and logarithmic functions of x."
    },
    {
     "code": "2.4",
     "q": "How do I solve a pair of simultaneous equations when one of them is quadratic?",
     "idea": "Simultaneous equations by elimination and substitution, including one linear and one quadratic",
     "content": "Solve simultaneous equations in two variables by elimination and by substitution, including one linear and one quadratic equation. This may involve powers of 2 in one unknown or in both unknowns, e.g. solve y = 2x + 3, y = x² − 4x + 8, or 2x − 3y = 6, x² − y² + 3x = 50. The usual step is to substitute the linear equation into the quadratic to form a single quadratic equation in one unknown, solve it, and then find the corresponding values of the other variable."
    },
    {
     "code": "2.5",
     "q": "How do I solve linear and quadratic inequalities and show the solution on a graph or in set notation?",
     "idea": "Linear and quadratic inequalities, their solution sets and graphical representation",
     "content": "Solve linear and quadratic inequalities in a single variable and interpret such inequalities graphically, e.g. solving ax + b > cx + d, px² + qx + r ≥ 0, px² + qx + r < ax + b, and interpreting the third inequality as the range of x for which the curve y = px² + qx + r is below the line with equation y = ax + b. Including inequalities with brackets and fractions; these would be reducible to linear or quadratic inequalities, e.g. a/x < b becomes ax < bx². Express solutions through correct use of ‘and’ and ‘or’, or through set notation: so, e.g. x < a or x > b is equivalent to {x : x < a} ∪ {x : x > b}, and {x : c < x} ∩ {x : x < d} is equivalent to x > c and x < d. Represent linear and quadratic inequalities such as y > x + 1 and y > ax² + bx + c graphically; shading and use of the dotted and solid line convention is required."
    },
    {
     "code": "2.6",
     "q": "How do I expand, factorise and divide polynomials, and simplify algebraic fractions?",
     "idea": "Polynomial algebra, algebraic division, the factor theorem and simplifying rational expressions",
     "content": "Manipulate polynomials algebraically, including expanding brackets and collecting like terms, factorisation and simple algebraic division; use of the factor theorem. Only division by (ax + b) or (ax − b) will be required. Students should know that if f(x) = 0 when x = b/a, then (ax − b) is a factor of f(x). Students may be required to factorise cubic expressions such as x³ + 3x² − 4 and 6x³ + 11x² − x − 6. Simplify rational expressions, including by factorising and cancelling, and algebraic division (by linear expressions only). Denominators of rational expressions will be linear or quadratic, e.g. 1/(ax + b), (ax + b)/(px² + qx + r), (x³ + a³)/(x² − a²)."
    },
    {
     "code": "2.7",
     "q": "How do I sketch curves such as cubics, quartics, modulus and reciprocal graphs, and use them to solve equations?",
     "idea": "Sketching graphs of functions, the modulus of a linear function, reciprocal curves with asymptotes, intersections and proportion",
     "content": "Understand and use graphs of functions; sketch curves defined by simple equations including polynomials. Graphs to include simple cubic and quartic functions, e.g. sketch the graph with equation y = x²(2x − 1)². The modulus of a linear function: students should be able to sketch the graph of y = |ax + b| and to use their graph — for example, sketch y = |2x − 1| and use the graph to solve the equation |2x − 1| = x or the inequality |2x − 1| > x. The curves y = a/x and y = a/x², including their vertical and horizontal asymptotes; the asymptotes will be parallel to the axes, e.g. the asymptotes of the curve with equation y = 2/(x + a) + b are the lines with equations y = b and x = −a. Interpret algebraic solution of equations graphically; use intersection points of graphs to solve equations. Understand and use proportional relationships and their graphs: express the relationship between two variables using the proportion symbol ∝ or using an equation involving a constant, e.g. the circumference of a semicircle is directly proportional to its diameter, so C ∝ d or C = kd, and the graph of C against d is a straight line through the origin with gradient k."
    },
    {
     "code": "2.8",
     "q": "What do fg(x) and f⁻¹(x) mean, and how do I find a domain, range and inverse?",
     "idea": "Composite and inverse functions, their domains, ranges and graphs",
     "content": "Understand and use composite functions; inverse functions and their graphs. The concept of a function as a one-one or many-one mapping from ℝ (or a subset of ℝ) to ℝ. The notation f : x ↦ and f(x) will be used. Domain and range of functions. Students should know that fg will mean ‘do g first, then f’, and that if f⁻¹ exists then f⁻¹f(x) = ff⁻¹(x) = x. They should also know that the graph of y = f⁻¹(x) is the image of the graph of y = f(x) after reflection in the line y = x."
    },
    {
     "code": "2.9",
     "q": "How does the graph of y = f(x) move or stretch when I change it to y = af(x), f(x) + a, f(x + a) or f(ax)?",
     "idea": "Transformations of graphs: translations, stretches, reflections and combinations",
     "content": "Understand the effect of simple transformations on the graph of y = f(x), including sketching associated graphs: y = af(x), y = f(x) + a, y = f(x + a), y = f(ax), and combinations of these transformations. Students should be able to find the graphs of y = |f(x)| and y = |f(−x)|, given the graph of y = f(x). Students should be able to apply a combination of these transformations to any of the functions in the A level specification (quadratics, cubics, quartics, reciprocal, a/x², |x|, sin x, cos x, tan x, e^x and a^x) and sketch the resulting graph. Given the graph of y = f(x), students should be able to sketch the graph of, e.g. y = 2f(3x), or y = f(−x) + 1, and should be able to sketch (for example) y = 3 + sin 2x, y = −cos(x + π/4)."
    },
    {
     "code": "2.10",
     "q": "How do I split a rational function into partial fractions?",
     "idea": "Decomposing rational functions into partial fractions",
     "content": "Decompose rational functions into partial fractions (denominators not more complicated than squared linear terms and with no more than 3 terms, numerators constant or linear). Partial fractions to include denominators such as (ax + b)(cx + d)(ex + f) and (ax + b)(cx + d)². Applications to integration, differentiation and series expansions."
    },
    {
     "code": "2.11",
     "q": "How do I choose a function to model a real situation, and what are the model’s limitations?",
     "idea": "Using functions in modelling, with limitations and refinements",
     "content": "Use of functions in modelling, including consideration of limitations and refinements of the models. For example, use of trigonometric functions for modelling tides, hours of sunlight, etc. Use of exponential functions for growth and decay (see Paper 1, Section 6.7). Use of reciprocal function for inverse proportion (e.g. pressure and volume)."
    }
   ]
  },
  {
   "id": "P3",
   "component": "P12",
   "option": null,
   "name": "Coordinate geometry in the (x, y) plane",
   "caseStudies": [
    "[3.1] Find the equation of the line through (−2, 5) that is perpendicular to 3x + 4y − 7 = 0, giving your answer in the form ax + by + c = 0; and use the straight line model for converting degrees Celsius to degrees Fahrenheit",
    "[3.2] The circle C has equation x² + y² − 6x + 8y − 11 = 0: complete the square to find its centre and radius, and find the equation of the tangent to C at a specified point on its circumference",
    "[3.3] A curve has parametric equations x = 2 + 5cos t, y = −4 + 5sin t: show that the curve is a circle centre (2, −4) with radius 5, and convert x = 5t, y = 5/t to the Cartesian form xy = 25",
    "[3.4] An object moves with constant velocity from (1, 8) at t = 0 to (6, 20) at t = 5: find parametric equations for its motion"
   ],
   "ideas": [
    {
     "code": "3.1",
     "q": "How do I find and use the equation of a straight line, and how do I tell whether two lines are parallel or perpendicular?",
     "idea": "Equations of straight lines, gradient conditions for parallel and perpendicular lines, and straight line models",
     "content": "Understand and use the equation of a straight line, including the forms y − y₁ = m(x − x₁) and ax + by + c = 0; gradient conditions for two straight lines to be parallel or perpendicular; be able to use straight line models in a variety of contexts. This is to include the equation of a line through two given points, and the equation of a line parallel (or perpendicular) to a given line through a given point. m′ = m for parallel lines and m′ = −1/m for perpendicular lines. For example, the line for converting degrees Celsius to degrees Fahrenheit, distance against time for constant speed, etc."
    },
    {
     "code": "3.2",
     "q": "How do I find the centre and radius of a circle, and how do I use circle properties to find tangents and circumcircles?",
     "idea": "Coordinate geometry of the circle: completing the square for centre and radius, and the circle theorems for chords, semicircles and tangents",
     "content": "Understand and use the coordinate geometry of the circle including using the equation of a circle in the form (x − a)² + (y − b)² = r²; completing the square to find the centre and radius of a circle; use of the following properties: the angle in a semicircle is a right angle; the perpendicular from the centre to a chord bisects the chord; the radius of a circle at a given point on its circumference is perpendicular to the tangent to the circle at that point. Students should be able to find the radius and the centre of the circle given its equation, and vice versa, and be familiar with the equation x² + y² + 2fx + 2gy + c = 0. Students should be able to find the equation of a circumcircle of a triangle with given vertices using these properties, and to find the equation of a tangent at a specified point, using the perpendicular property of tangent and radius."
    },
    {
     "code": "3.3",
     "q": "How do I work with curves given by parametric equations, and how do I convert between parametric and Cartesian forms?",
     "idea": "Parametric equations of curves and conversion between Cartesian and parametric forms",
     "content": "Understand and use the parametric equations of curves and conversion between Cartesian and parametric forms. For example: x = 3cos t, y = 3sin t describes a circle centre O radius 3; x = 2 + 5cos t, y = −4 + 5sin t describes a circle centre (2, −4) with radius 5; x = 5t, y = 5/t describes the curve xy = 25 (or y = 25/x); x = 5t, y = 3t² describes the quadratic curve 25y = 3x² and other familiar curves covered in the specification. Students should pay particular attention to the domain of the parameter t, as a specific section of a curve may be described."
    },
    {
     "code": "3.4",
     "q": "How do I use parametric equations to model a shape or a motion?",
     "idea": "Parametric equations in modelling",
     "content": "Use parametric equations in modelling in a variety of contexts. A shape may be modelled using parametric equations or students may be asked to find parametric equations for a motion. For example, an object moves with constant velocity from (1, 8) at t = 0 to (6, 20) at t = 5. This may also be tested in Paper 3, section 7 (kinematics)."
    }
   ]
  },
  {
   "id": "P4",
   "component": "P12",
   "option": null,
   "name": "Sequences and series",
   "caseStudies": [
    "[4.1] Expand (2 + 3x)⁵ in ascending powers of x using Pascal's triangle and ⁿCᵣ, then expand (1 + 4x)^(1/2) up to the term in x³ and state the range of validity |4x| < 1",
    "[4.2] Show that uₙ = 1/(3n + 1) describes a decreasing sequence, since uₙ₊₁ < uₙ for all integer n",
    "[4.3] Use the result Σ₁ⁿ 1 = n to evaluate a sum written in sigma notation, e.g. Σ from r = 1 to n of (4r + 3)",
    "[4.4] Prove the formula for the sum of the first n terms of an arithmetic series, then use Sₙ = ½n[2a + (n − 1)d] to find the sum",
    "[4.5] Given the sum of a geometric series, use logs to find the value of n; and find the sum to infinity S∞ of a convergent geometric series with |r| < 1",
    "[4.6] Money is paid into a savings scheme, increasing by the same amount each year (arithmetic) or by the same percentage each year (geometric): find the total paid in after n years"
   ],
   "ideas": [
    {
     "code": "4.1",
     "q": "How do I expand a bracket raised to a power, and what changes when the power is not a positive whole number?",
     "idea": "Binomial expansion of (a + bx)ⁿ, for positive integer n and extended to rational n",
     "content": "Understand and use the binomial expansion of (a + bx)ⁿ for positive integer n; the notations n! and ⁿCᵣ link to binomial probabilities. Use of Pascal's triangle. Relation between binomial coefficients. Also be aware of alternative notations such as (n over r) and ⁿCᵣ. Considered further in Paper 3 Section 4.1. Extend to any rational n, including its use for approximation; be aware that the expansion is valid for |bx/a| < 1 (proof not required). May be used with the expansion of rational functions by decomposition into partial fractions. May be asked to comment on the range of validity."
    },
    {
     "code": "4.2",
     "q": "How do I work with a sequence given by a formula or by a recurrence relation, and decide whether it increases, decreases or repeats?",
     "idea": "Sequences from an nth term formula or a relation xₙ₊₁ = f(xₙ); increasing, decreasing and periodic sequences",
     "content": "Work with sequences including those given by a formula for the nth term and those generated by a simple relation of the form xₙ₊₁ = f(xₙ); increasing sequences; decreasing sequences; periodic sequences. For example uₙ = 1/(3n + 1) describes a decreasing sequence as uₙ₊₁ < uₙ for all integer n; uₙ = 2ⁿ is an increasing sequence as uₙ₊₁ > uₙ for all integer n; uₙ₊₁ = 1/uₙ for n > 1 and u₁ = 3 describes a periodic sequence of order 2."
    },
    {
     "code": "4.3",
     "q": "What does the Σ symbol mean and how do I use it to write and evaluate the sum of a series?",
     "idea": "Sigma notation for sums of series",
     "content": "Understand and use sigma notation for sums of series. Knowledge that Σ from 1 to n of 1 = n is expected."
    },
    {
     "code": "4.4",
     "q": "How do I find the nth term and the sum of the first n terms of a sequence that goes up by a constant amount?",
     "idea": "Arithmetic sequences and series: nth term and sum to n terms",
     "content": "Understand and work with arithmetic sequences and series, including the formulae for nth term and the sum to n terms. The proof of the sum formula for an arithmetic sequence should be known, including the formula for the sum of the first n natural numbers."
    },
    {
     "code": "4.5",
     "q": "How do I handle a sequence that multiplies by a constant ratio, and when does its sum to infinity exist?",
     "idea": "Geometric sequences and series: nth term, sum of a finite series, and sum to infinity when |r| < 1",
     "content": "Understand and work with geometric sequences and series, including the formulae for the nth term and the sum of a finite geometric series; the sum to infinity of a convergent geometric series, including the use of |r| < 1; modulus notation. The proof of the sum formula should be known. Given the sum of a series students should be able to use logs to find the value of n. The sum to infinity may be expressed as S∞."
    },
    {
     "code": "4.6",
     "q": "How do I use a sequence or series to model a real situation such as savings or repayments?",
     "idea": "Sequences and series in modelling",
     "content": "Use sequences and series in modelling. Examples could include amounts paid into saving schemes, increasing by the same amount (arithmetic) or by the same percentage (geometric), or could include other series defined by a formula or a relation."
    }
   ]
  },
  {
   "id": "P5",
   "component": "P12",
   "option": null,
   "name": "Trigonometry",
   "caseStudies": [
    "[5.1] Find the area of a sector and the arc length of a circle of radius r subtending angle θ radians, using s = rθ and A = ½r²θ",
    "[5.2] Approximate (cos 3x − 1)/(x sin 4x) when x is small, to −9/8",
    "[5.3] Sketch y = sin x, y = cos(x + 30°) and y = tan 2x, and state the exact value of sin(π/3)",
    "[5.4] Sketch y = arcsin x and y = sec x, stating the domain and range of each",
    "[5.5] Use sin²θ + cos²θ = 1 and sec²θ = 1 + tan²θ to solve a trigonometric equation and to prove a further identity",
    "[5.6] Write a cos θ + b sin θ in the form r cos(θ ± α) and hence solve a cos θ + b sin θ = c in a given interval",
    "[5.7] Solve sin (x + 70°) = 0.5 for 0 < x < 360°; 3 + 5 cos 2x = 1 for −180° < x < 180°; 6 cos² x + sin x − 5 = 0, 0 ≤ x < 360°",
    "[5.8] Prove that cos x cos 2x + sin x sin 2x ≡ cos x",
    "[5.9] Model the height of a point on a vertical circular wheel (or the hours of sunlight through the year) with a trigonometric function and solve a problem in context"
   ],
   "ideas": [
    {
     "code": "5.1",
     "q": "How do I work with sine, cosine and tangent in any triangle, and how do I measure angles in radians?",
     "idea": "Trigonometric definitions for all arguments, sine and cosine rules, triangle area, and radian measure",
     "content": "Understand and use the definitions of sine, cosine and tangent for all arguments; the sine and cosine rules; the area of a triangle in the form ½ab sin C. Work with radian measure, including use for arc length and area of sector. Guidance: use of x and y coordinates of points on the unit circle to give cosine and sine respectively, including the ambiguous case of the sine rule. Use of the formulae s = rθ and A = ½r²θ for arc lengths and areas of sectors of a circle."
    },
    {
     "code": "5.2",
     "q": "What do sin, cos and tan become when the angle is very small?",
     "idea": "Standard small angle approximations for sine, cosine and tangent",
     "content": "Understand and use the standard small angle approximations of sine, cosine and tangent: sin θ ≈ θ, cos θ ≈ 1 − θ²/2, tan θ ≈ θ, where θ is in radians. Guidance: students should be able to approximate, e.g. (cos 3x − 1)/(x sin 4x) when x is small, to −9/8."
    },
    {
     "code": "5.3",
     "q": "What do the trigonometric graphs look like, and which exact values must I know?",
     "idea": "Graphs, symmetries and periodicity of sin, cos and tan, with exact values",
     "content": "Understand and use the sine, cosine and tangent functions; their graphs, symmetries and periodicity. Know and use exact values of sin and cos for 0, π/6, π/4, π/3, π/2, π and multiples thereof, and exact values of tan for 0, π/6, π/4, π/3, π and multiples thereof. Guidance: knowledge of graphs of curves with equations such as y = sin x, y = cos(x + 30°), y = tan 2x is expected."
    },
    {
     "code": "5.4",
     "q": "What are sec, cosec, cot, arcsin, arccos and arctan, and what are their graphs, domains and ranges?",
     "idea": "Reciprocal and inverse trigonometric functions",
     "content": "Understand and use the definitions of secant, cosecant and cotangent and of arcsin, arccos and arctan; their relationships to sine, cosine and tangent; understanding of their graphs; their ranges and domains. Guidance: angles measured in both degrees and radians."
    },
    {
     "code": "5.5",
     "q": "Which trigonometric identities do I use to simplify, solve and prove?",
     "idea": "The Pythagorean identities and tan θ = sin θ / cos θ",
     "content": "Understand and use tan θ = sin θ / cos θ. Understand and use sin²θ + cos²θ = 1, sec²θ = 1 + tan²θ and cosec²θ = 1 + cot²θ. Guidance: these identities may be used to solve trigonometric equations and angles may be in degrees or radians. They may also be used to prove further identities."
    },
    {
     "code": "5.6",
     "q": "How do I expand sin(A ± B) and cos(A ± B), and how do I combine a cos θ + b sin θ into a single trigonometric function?",
     "idea": "Compound and double angle formulae, and the harmonic form r cos(θ ± α)",
     "content": "Understand and use double angle formulae; use of formulae for sin (A ± B), cos (A ± B), and tan (A ± B); understand geometrical proofs of these formulae. Understand and use expressions for a cos θ + b sin θ in the equivalent forms of r cos (θ ± α) or r sin (θ ± α). Guidance: to include application to half angles. Knowledge of the tan(½θ) formulae will not be required. Students should be able to solve equations such as a cos θ + b sin θ = c in a given interval."
    },
    {
     "code": "5.7",
     "q": "How do I solve a trigonometric equation over a given interval and find every solution?",
     "idea": "Solving trigonometric equations, including quadratic and multiple-angle forms",
     "content": "Solve simple trigonometric equations in a given interval, including quadratic equations in sin, cos and tan and equations involving multiples of the unknown angle. Guidance: students should be able to solve equations such as sin (x + 70°) = 0.5 for 0 < x < 360°, 3 + 5 cos 2x = 1 for −180° < x < 180°, 6 cos² x + sin x − 5 = 0, 0 ≤ x < 360°. These may be in degrees or radians and this will be specified in the question."
    },
    {
     "code": "5.8",
     "q": "How do I prove a trigonometric identity rather than just solve an equation?",
     "idea": "Constructing proofs with trigonometric functions and identities",
     "content": "Construct proofs involving trigonometric functions and identities. Guidance: students need to prove identities such as cos x cos 2x + sin x sin 2x ≡ cos x."
    },
    {
     "code": "5.9",
     "q": "How are trigonometric functions used to model real situations?",
     "idea": "Trigonometric functions applied to problems in context",
     "content": "Use trigonometric functions to solve problems in context, including problems involving vectors, kinematics and forces. Guidance: problems could involve (for example) wave motion, the height of a point on a vertical circular wheel, or the hours of sunlight throughout the year. Angles may be measured in degrees or in radians."
    }
   ]
  },
  {
   "id": "P6",
   "component": "P12",
   "option": null,
   "name": "Exponentials and logarithms",
   "caseStudies": [
    "[6.1] Sketch the graph of y = e^(2x + 1) + 3, stating the coordinates of the y-intercept and the equation of the asymptote",
    "[6.2] Given y = 5e^(3x), write down the gradient dy/dx and explain why an exponential model is appropriate when the rate of change is proportional to y",
    "[6.3] Solve e^(2x + 1) = 5 and ln (3x − 4) = 2, giving your answers to 3 significant figures",
    "[6.4] Using the laws of logarithms, write log_a x + 2 log_a y − ½ log_a z as a single logarithm",
    "[6.5] Solve 2^(3x − 1) = 3, giving your answer to 3 significant figures",
    "[6.6] Given data for x and y believed to satisfy y = ax^n, plot log y against log x and use the straight line obtained to estimate the values of a and n",
    "[6.7] A population is modelled by P = P₀e^(kt); use the given data to find the constants, state the initial population, and comment on whether the model is appropriate for large values of t"
   ],
   "ideas": [
    {
     "code": "6.1",
     "q": "What do exponential graphs like y = aˣ and y = eˣ look like, and how do I sketch transformations of them?",
     "idea": "The graphs of aˣ and eˣ, including y = e^(ax + b) + c",
     "content": "Know and use the function aˣ and its graph, where a is positive. Understand the difference in shape between the graph for a < 1 and the graph for a > 1. Know and use the function eˣ and its graph. Graph work is to include the graph of y = e^(ax + b) + c, for constants a, b and c."
    },
    {
     "code": "6.2",
     "q": "Why is an exponential function the right model when something grows or decays at a rate proportional to its size?",
     "idea": "The gradient of e^(kx) is k e^(kx), and the proportional-rate condition for exponential models",
     "content": "Know that the gradient of e^(kx) is equal to k e^(kx), and hence understand why the exponential model is suitable in many applications. Realise that when the rate of change is proportional to the y value, an exponential model should be used: recognising that proportional-rate condition is the reason for choosing an exponential function in a modelling problem."
    },
    {
     "code": "6.3",
     "q": "What does log_a x mean, and how do I solve equations involving e^x and ln x?",
     "idea": "Logarithms as the inverse of exponentials; ln x as the inverse of eˣ",
     "content": "Know and use the definition of log_a x as the inverse of aˣ, where a is positive and x ≥ 0; here a ≠ 1. Know and use the function ln x and its graph. Know and use ln x as the inverse function of eˣ. Solution of equations of the form e^(ax + b) = p and ln (ax + b) = q is expected."
    },
    {
     "code": "6.4",
     "q": "How do I combine or split up logarithms using the log laws?",
     "idea": "Laws of logarithms: sum, difference and power rules",
     "content": "Understand and use the laws of logarithms: log_a x + log_a y = log_a (xy); log_a x − log_a y = log_a (x/y); k log_a x = log_a xᵏ (including, for example, k = −1 and k = −½). This includes log_a a = 1. The power law with fractional and negative k is what lets roots and reciprocals be written as logarithms."
    },
    {
     "code": "6.5",
     "q": "How do I solve an equation where the unknown is in the power, such as aˣ = b?",
     "idea": "Solving aˣ = b by taking logarithms",
     "content": "Solve equations of the form aˣ = b. The expected step is to take logarithms of both sides, giving x log a = log b and hence x = log b ÷ log a; students may use the change of base formula. Questions may be of the form, e.g. 2^(3x − 1) = 3, where the index is itself a linear expression in x."
    },
    {
     "code": "6.6",
     "q": "How do I use a logarithmic graph to find the constants in a law like y = axⁿ or y = kbˣ?",
     "idea": "Estimating parameters from logarithmic graphs",
     "content": "Use logarithmic graphs to estimate parameters in relationships of the form y = axⁿ and y = kbˣ, given data for x and y. For y = axⁿ, plot log y against log x and obtain a straight line where the intercept is log a and the gradient is n. For y = kbˣ, plot log y against x and obtain a straight line where the intercept is log k and the gradient is log b."
    },
    {
     "code": "6.7",
     "q": "How do I use exponential growth and decay to model a real situation, and how do I judge the model?",
     "idea": "Exponential growth and decay in modelling, and the limitations of such models",
     "content": "Understand and use exponential growth and decay; use in modelling. Examples may include the use of e in continuous compound interest, radioactive decay, drug concentration decay, and exponential growth as a model for population growth; with consideration of limitations and refinements of exponential models. Students may be asked to find the constants used in a model. They need to be familiar with terms such as initial, meaning when t = 0. They may need to explore the behaviour for large values of t, or to consider whether the range of values predicted is appropriate. Consideration of an improved model may be required."
    }
   ]
  },
  {
   "id": "P7",
   "component": "P12",
   "option": null,
   "name": "Differentiation",
   "caseStudies": [
    "[7.1] Use the gradient expression lim(h→0) (((x + h)ⁿ − xⁿ)/h) to differentiate from first principles for n = 2 and n = 3",
    "[7.2] Differentiate (2x + 5)(x − 1) and (x² + 3x − 5)/(4x^(1/2)), x > 0",
    "[7.3] Find the equations of the tangent and the normal at a given point on a curve, and locate its maxima, minima and points of inflection",
    "[7.4] Differentiate 2x⁴ sin x, e^(3x)/x, cos² x and tan² 2x, and use dV/dt = dV/dr × dr/dt for a connected rate of change",
    "[7.5] Find the equation of the tangent or normal to a curve given parametrically or implicitly, using the first derivative only",
    "[7.6] In a simple model, the rate of decrease of the radius of the mint is inversely proportional to the square of the radius — construct the differential equation"
   ],
   "ideas": [
    {
     "code": "7.1",
     "q": "What does the derivative actually mean, and how do I get it from first principles and read the second derivative?",
     "idea": "The derivative as gradient of the tangent and as a limit; gradient functions, first principles and second derivatives",
     "content": "Understand and use the derivative of f(x) as the gradient of the tangent to y = f(x) at a general point (x, y); the gradient of the tangent as a limit; interpretation as a rate of change; sketching the gradient function for a given curve; second derivatives; differentiation from first principles for small positive integer powers of x and for sin x and cos x. Understand and use the second derivative as the rate of change of gradient; connection to convex and concave sections of curves and points of inflection. Know that dy/dx is the rate of change of y with respect to x; f′(x) may denote the first derivative, f″(x) the second. Given the graph of y = f(x), sketch y = f′(x) on given axes and scale (could relate speed and acceleration). For n = 2 and n = 3 use the gradient expression lim(h→0) (((x + h)ⁿ − xⁿ)/h); δx or h may be used. f″(x) > 0 implies a minimum and f″(x) < 0 a maximum where f′(x) = 0; at an inflection point f″(x) changes sign. Consider cases where f″(x) = 0 and f′(x) = 0, where the point may be a minimum, maximum or point of inflection (e.g. y = xⁿ, n > 2)."
    },
    {
     "code": "7.2",
     "q": "Which standard functions do I need to be able to differentiate, and what are their derivatives?",
     "idea": "Differentiating xⁿ for rational n, and the standard exponential, logarithmic and trigonometric derivatives",
     "content": "Differentiate xⁿ, for rational values of n, and related constant multiples, sums and differences. Differentiate e^(kx) and a^(kx), sin kx, cos kx, tan kx and related sums, differences and constant multiples. Understand and use the derivative of ln x. For example, the ability to differentiate expressions such as (2x + 5)(x − 1) and (x² + 3x − 5)/(4x^(1/2)), x > 0, is expected — so expressions must first be multiplied out or written as sums of powers of x. Knowledge and use of the result d/dx (a^(kx)) = k a^(kx) ln a is expected."
    },
    {
     "code": "7.3",
     "q": "How do I use differentiation to find tangents, normals, turning points and where a curve is increasing?",
     "idea": "Applying differentiation to gradients, tangents and normals, stationary points and increasing/decreasing functions",
     "content": "Apply differentiation to find gradients, tangents and normals; maxima and minima and stationary points; points of inflection. Identify where functions are increasing or decreasing. Use of differentiation to find equations of tangents and normals at specific points on a curve. To include applications to curve sketching. Maxima and minima problems may be set in the context of a practical problem."
    },
    {
     "code": "7.4",
     "q": "How do I differentiate products, quotients and composite functions, and handle connected rates of change?",
     "idea": "Product, quotient and chain rules, inverse functions and connected rates of change",
     "content": "Differentiate using the product rule, the quotient rule and the chain rule, including problems involving connected rates of change and inverse functions. Differentiation of cosec x, cot x and sec x. Differentiation of functions of the form x = sin y, x = 3 tan 2y and the use of dy/dx = 1/(dx/dy). Use of connected rates of change in models, e.g. dV/dt = dV/dr × dr/dt. Skill will be expected in the differentiation of functions generated from standard forms using products, quotients and composition, such as 2x⁴ sin x, e^(3x)/x, cos² x and tan² 2x."
    },
    {
     "code": "7.5",
     "q": "How do I differentiate a curve that is given by an equation in x and y, or by parametric equations?",
     "idea": "Implicit and parametric differentiation for the first derivative",
     "content": "Differentiate simple functions and relations defined implicitly or parametrically, for first derivative only. The finding of equations of tangents and normals to curves given parametrically or implicitly is required."
    },
    {
     "code": "7.6",
     "q": "How do I turn a description of how something is changing into a differential equation?",
     "idea": "Constructing differential equations from given information, in pure mathematics and in context",
     "content": "Construct simple differential equations in pure mathematics and in context (contexts may include kinematics, population growth and modelling the relationship between price and demand). Set up a differential equation using given information. For example: in a simple model, the rate of decrease of the radius of the mint is inversely proportional to the square of the radius."
    }
   ]
  },
  {
   "id": "P8",
   "component": "P12",
   "option": null,
   "name": "Integration",
   "caseStudies": [
    "[8.1] Find ∫ (3x² + 2) dx, remembering the constant of integration, and check by differentiating the answer",
    "[8.2] Integrate ½x² − 3x^(−½), and integrate (x + 2)²/x^(½); also integrate sin 3x, sec² 2x, tan x, e^(5x) and 1/(2x)",
    "[8.3] Find the finite area bounded by the curve y = 6x − x² and the line y = 2x; or the finite area bounded by the curve y = x² − 5x + 6 and the curve y = 4 − x²",
    "[8.4] Show that ∫ₐᵇ f(x) dx = lim(δx→0) Σ(x=a to b) f(x) δx, and explain the area under a curve as the limit of a sum of strips",
    "[8.5] Use the substitution u = 2x + 1 to find ∫ x√(2x + 1) dx; find ∫ ln x dx by parts, and write ∫ f′(x)/f(x) dx as ln f(x) + c",
    "[8.6] Express 1/((x + 1)(2x − 3)) in partial fractions and hence find ∫ 1/((x + 1)(2x − 3)) dx; also integrate 2/(3x + 5), x/(x² + 5) and 2/(2x − 1)⁴",
    "[8.7] Solve dy/dx = xy + 2x by separating the variables, find the particular solution through a given point, and sketch members of the family of solution curves",
    "[8.8] Interpret the solution of a differential equation modelling population growth in context and state a limitation of the model for large values of t"
   ],
   "ideas": [
    {
     "code": "8.1",
     "q": "What is integration, and why does an indefinite integral always need \"+ c\"?",
     "idea": "The Fundamental Theorem of Calculus: integration as the reverse of differentiation",
     "content": "Know and use the Fundamental Theorem of Calculus. Integration is the reverse process of differentiation: if dy/dx = f(x) then y = ∫ f(x) dx, and differentiating the result returns the integrand. Students should know that for indefinite integrals a constant of integration is required, since any constant differentiates to zero, so the answer is a family of curves y = F(x) + c rather than a single curve."
    },
    {
     "code": "8.2",
     "q": "How do I integrate powers of x and the standard functions e^(kx), 1/x, sin kx and cos kx?",
     "idea": "Integrating xⁿ (n ≠ −1) and the standard exponential, reciprocal and trigonometric functions",
     "content": "Integrate xⁿ (excluding n = −1) and related sums, differences and constant multiples. For example, the ability to integrate expressions such as ½x² − 3x^(−½) and (x + 2)²/x^(½) is expected — terms must first be written as powers of x. Given f′(x) and a point on the curve, students should be able to find an equation of the curve in the form y = f(x), using the point to determine the constant of integration. Also integrate e^(kx), 1/x, sin kx and cos kx and related sums, differences and constant multiples, to include integration of standard functions such as sin 3x, sec² 2x, tan x, e^(5x) and 1/(2x). Students are expected to be able to use trigonometric identities to integrate, for example, sin² x, tan² x and cos² 3x."
    },
    {
     "code": "8.3",
     "q": "How do I use a definite integral to find the area under a curve or between two curves?",
     "idea": "Definite integrals and areas of regions bounded by curves and lines",
     "content": "Evaluate definite integrals; use a definite integral to find the area under a curve and the area between two curves. Students will be expected to be able to evaluate the area of a region bounded by a curve and given straight lines, or between two curves. This includes curves defined parametrically. For example, find the finite area bounded by the curve y = 6x − x² and the line y = 2x. Or find the finite area bounded by the curve y = x² − 5x + 6 and the curve y = 4 − x². The limits are normally found from the points of intersection of the two boundaries."
    },
    {
     "code": "8.4",
     "q": "Why does a definite integral give an area — what is it the limit of?",
     "idea": "Integration as the limit of a sum of rectangular strips",
     "content": "Understand and use integration as the limit of a sum. Recognise ∫ₐᵇ f(x) dx = lim(δx→0) Σ(x=a to b) f(x) δx. The region under the curve is divided into strips of width δx and approximate height f(x); summing the areas f(x) δx and letting the strip width tend to zero gives the definite integral, so students should be able to move between the sum notation and the integral notation."
    },
    {
     "code": "8.5",
     "q": "How do I integrate a product or a composite function using substitution or integration by parts?",
     "idea": "Integration by substitution and by parts as the inverses of the chain and product rules",
     "content": "Carry out simple cases of integration by substitution and integration by parts; understand these methods as the inverse processes of the chain and product rules respectively. Integration by substitution includes finding a suitable substitution and is limited to cases where one substitution will lead to a function which can be integrated; integration by parts includes more than one application of the method but excludes reduction formulae. Students should recognise integrals of the form ∫ f′(x)/f(x) dx = ln f(x) + c. The integral ∫ ln x dx is required."
    },
    {
     "code": "8.6",
     "q": "How do I integrate an algebraic fraction using partial fractions?",
     "idea": "Integration using partial fractions with linear denominators",
     "content": "Integrate using partial fractions that are linear in the denominator. Integration of rational expressions such as those arising from partial fractions, e.g. 2/(3x + 5). Note that the integration of other rational expressions, such as x/(x² + 5) and 2/(2x − 1)⁴, is also required (see the previous paragraph, i.e. by substitution or by recognising the ∫ f′(x)/f(x) dx = ln f(x) + c form). The expression is first split into partial fractions and each term integrated to give logarithmic or power terms."
    },
    {
     "code": "8.7",
     "q": "How do I solve a first order differential equation by separating the variables?",
     "idea": "Analytical solution of first order differential equations with separable variables",
     "content": "Evaluate the analytical solution of simple first order differential equations with separable variables, including finding particular solutions. Separation of variables may require factorisation involving a common factor. The variables are separated so that each side can be integrated with respect to its own variable, a constant of integration is included, and a given condition is used to find the particular solution. Students may be asked to sketch members of the family of solution curves."
    },
    {
     "code": "8.8",
     "q": "What does the solution of a differential equation tell me about the real situation, and where does the model break down?",
     "idea": "Interpreting and criticising the solution of a differential equation in context",
     "content": "Interpret the solution of a differential equation in the context of solving a problem, including identifying limitations of the solution; includes links to kinematics. The validity of the solution for large values should be considered — students should comment on what the model predicts as the variable becomes large and why that may be unrealistic."
    }
   ]
  },
  {
   "id": "P9",
   "component": "P12",
   "option": null,
   "name": "Numerical methods",
   "caseStudies": [
    "[9.1] Show that f(x) = 0 has a root between x = a and x = b by evaluating f(a) and f(b) and noting the change of sign, f(x) being continuous on that small interval, and explain why a sign change method can fail",
    "[9.2] Use an iteration of the form xₙ₊₁ = f(xₙ) with a given x₀ to find a root of x = f(x) to a required accuracy, and draw the cobweb or staircase diagram that shows the convergence",
    "[9.3] Apply the Newton-Raphson method from a given starting value to find a root of f(x) = 0, and explain in geometrical terms why the method fails near a point where the gradient is small",
    "[9.4] Evaluate ∫₀¹ √(2x + 1) dx using the values of √(2x + 1) at x = 0, 0.25, 0.5, 0.75 and 1, and use a sketch on a given graph to determine whether the trapezium rule gives an over-estimate or an under-estimate",
    "[9.5] A problem set in context leads to an equation not soluble by analytic means: use the suggested iteration to solve it and interpret the answer in the context"
   ],
   "ideas": [
    {
     "code": "9.1",
     "q": "How can I show that an equation has a root in a particular interval, and when does that test let me down?",
     "idea": "Locating roots by change of sign, and the ways change of sign methods fail",
     "content": "Locate roots of f(x) = 0 by considering changes of sign of f(x) in an interval of x on which f(x) is sufficiently well behaved. Understand how change of sign methods can fail. Students should know that sign change is appropriate for continuous functions in a small interval. When the interval is too large sign may not change as there may be an even number of roots. If the function is not continuous, sign may change but there may be an asymptote (not a root)."
    },
    {
     "code": "9.2",
     "q": "How do I solve an equation approximately by repeating a formula, and how do I show on a diagram that the values close in on the root?",
     "idea": "Simple iterative methods xₙ₊₁ = f(xₙ), with cobweb and staircase diagrams",
     "content": "Solve equations approximately using simple iterative methods; be able to draw associated cobweb and staircase diagrams. Understand that many mathematical problems cannot be solved analytically, but numerical methods permit solution to a required level of accuracy. Use an iteration of the form xₙ₊₁ = f(xₙ) to find a root of the equation x = f(x) and show understanding of the convergence in geometrical terms by drawing cobweb and staircase diagrams."
    },
    {
     "code": "9.3",
     "q": "How does the Newton-Raphson method find a root, and why does it sometimes go wrong?",
     "idea": "Newton-Raphson and other recurrence relations xₙ₊₁ = g(xₙ), and how they can fail",
     "content": "Solve equations using the Newton-Raphson method and other recurrence relations of the form xₙ₊₁ = g(xₙ). Understand how such methods can fail. For the Newton-Raphson method, students should understand its working in geometrical terms, so that they understand its failure near to points where the gradient is small."
    },
    {
     "code": "9.4",
     "q": "How do I estimate the area under a curve when I cannot integrate it, and can I tell whether my estimate is too big or too small?",
     "idea": "Numerical integration by the trapezium rule, and limits the true value must lie between",
     "content": "Understand and use numerical integration of functions, including the use of the trapezium rule and estimating the approximate area under a curve and limits that it must lie between. For example, evaluate ∫₀¹ √(2x + 1) dx using the values of √(2x + 1) at x = 0, 0.25, 0.5, 0.75 and 1 and use a sketch on a given graph to determine whether the trapezium rule gives an over-estimate or an under-estimate."
    },
    {
     "code": "9.5",
     "q": "How do I use numerical methods on a real problem rather than on a bare equation?",
     "idea": "Applying numerical methods to problems set in context",
     "content": "Use numerical methods to solve problems in context. Iterations may be suggested for the solution of equations not soluble by analytic means, so the methods of this section — change of sign to locate a root, an iteration of the form xₙ₊₁ = f(xₙ), the Newton-Raphson method and the trapezium rule — are applied to a problem set in a context, worked to the required level of accuracy and the result interpreted in that context."
    }
   ]
  },
  {
   "id": "P10",
   "component": "P12",
   "option": null,
   "name": "Vectors",
   "caseStudies": [
    "[10.1] Write a vector given as a column vector in the form ai + bj + ck, and write ai + bj + ck as a column vector",
    "[10.2] Find the magnitude |a| and the direction of a = 3i - 4j, and find a unit vector in the direction of a",
    "[10.3] Given a and b on a diagram, draw a + b by the triangle law and find 2a - 3b algebraically, stating whether it is parallel to a given vector",
    "[10.4] The points A and B have position vectors a and b; find AB = b - a and the distance AB",
    "[10.5] Finding the position vector of the fourth corner of a shape (e.g. parallelogram) ABCD with three given position vectors for the corners A, B and C"
   ],
   "ideas": [
    {
     "code": "10.1",
     "q": "How do I write and work with a vector in two and in three dimensions?",
     "idea": "Column vectors and i, j, k unit vector notation",
     "content": "Use vectors in two dimensions and in three dimensions. Students should be familiar with column vectors and with the use of i and j unit vectors in two dimensions and i, j and k unit vectors in three dimensions. Both notations are expected: a two-dimensional vector may be given as a column vector or in the form ai + bj, and a three-dimensional vector as a column vector or in the form ai + bj + ck, and students should be able to work in either form and move between them."
    },
    {
     "code": "10.2",
     "q": "How do I find the length and direction of a vector, and how do I go back to its components?",
     "idea": "Magnitude, direction and unit vectors; component form to magnitude/direction form",
     "content": "Calculate the magnitude and direction of a vector and convert between component form and magnitude/direction form. Students should be able to find a unit vector in the direction of a, and be familiar with the notation |a| for the magnitude of a. So from the components of a vector the magnitude |a| and the direction (as an angle) are found, and from a given magnitude and direction the components are recovered; the unit vector in the direction of a is a divided by |a|."
    },
    {
     "code": "10.3",
     "q": "How do I add vectors on a diagram and algebraically, and what does multiplying by a scalar do?",
     "idea": "Vector addition, scalar multiplication and their geometrical interpretation",
     "content": "Add vectors diagrammatically and perform the algebraic operations of vector addition and multiplication by scalars, and understand their geometrical interpretations. The triangle and parallelogram laws of addition. Parallel vectors. Students should be able to combine vectors on a diagram by the triangle law and the parallelogram law, add, subtract and take scalar multiples of vectors written in component or i, j, k form, and interpret the results geometrically - in particular that multiplying a vector by a scalar gives a parallel vector, so two vectors are parallel when one is a scalar multiple of the other."
    },
    {
     "code": "10.4",
     "q": "How do I use position vectors to find the vector between two points and the distance between them?",
     "idea": "Position vectors and the distance between two points",
     "content": "Understand and use position vectors; calculate the distance between two points represented by position vectors. For points A and B with position vectors a and b, OB - OA = AB = b - a (OA, OB and AB being the directed line segments). The distance d between two points (x₁, y₁) and (x₂, y₂) is given by d² = (x₁ - x₂)² + (y₁ - y₂)². In three dimensions, the distance d between two points (x₁, y₁, z₁) and (x₂, y₂, z₂) is given by d² = (x₁ - x₂)² + (y₁ - y₂)² + (z₁ - z₂)²."
    },
    {
     "code": "10.5",
     "q": "How do I use vectors to solve geometry problems and problems set in context?",
     "idea": "Vector methods in pure problems and in context, including forces",
     "content": "Use vectors to solve problems in pure mathematics and in context (including forces). For example, finding the position vector of the fourth corner of a shape (e.g. parallelogram) ABCD with three given position vectors for the corners A, B and C. Contexts such as velocity, displacement, kinematics and forces will be covered in Paper 3, Sections 6.1, 7.3 and 8.1 - 8.4."
    }
   ]
  },
  {
   "id": "S1",
   "component": "P3",
   "option": null,
   "name": "Statistical sampling",
   "caseStudies": [
    "[1.1] Explain one advantage and one disadvantage of taking a census rather than a sample of the daily rainfall readings at a weather station",
    "[1.1 Sampling techniques] Describe how a simple random sample of 20 days could be taken from the 184 days of summer 2015 in the large data set",
    "[1.1 Select or critique sampling techniques] A student uses an opportunity sample of the first 10 days of May to estimate mean temperature: criticise the method and suggest a better one"
   ],
   "ideas": [
    {
     "code": "1.1",
     "q": "What is the difference between a population, a census and a sample, and what can a sample tell me?",
     "idea": "Population and sample; informal inference",
     "content": "Understand and use the terms ‘population’ and ‘sample’. Use samples to make informal inferences about the population. Students will be expected to comment on the advantages and disadvantages associated with a census and a sample: a census uses every member of the population (complete, but costly, slow, and impossible if testing destroys the item); a sample uses part of it (cheaper and quicker, but may not represent the population and different samples can give different conclusions)."
    },
    {
     "code": "1.1 Sampling techniques",
     "q": "Which sampling methods must I be able to describe, and how is each carried out?",
     "idea": "Simple random, stratified, systematic, quota and opportunity sampling",
     "content": "Understand and use sampling techniques, including simple random sampling and opportunity sampling. Students will be expected to be familiar with: simple random sampling, stratified sampling, systematic sampling, quota sampling and opportunity (or convenience) sampling. A description for marks needs the mechanism: a sampling frame with each member numbered and random numbers used (simple random); the population split into strata and each sampled in proportion (stratified); every kth item from a random start (systematic); interviewer-filled quotas by characteristic (quota); whoever is available at the time (opportunity)."
    },
    {
     "code": "1.1 Select or critique sampling techniques",
     "q": "How do I choose a sampling method for a given problem, or criticise the one used?",
     "idea": "Selecting and critiquing a sampling technique in context",
     "content": "Select or critique sampling techniques in the context of solving a statistical problem, including understanding that different samples can lead to different conclusions about the population. Answers are expected in the context set (e.g. the large data set’s weather stations and months): name the technique, say why it suits or fails the context (bias, representativeness, cost, need for a sampling frame), and recognise that a conclusion drawn from one sample might not be repeated with another."
    }
   ]
  },
  {
   "id": "S2",
   "component": "P3",
   "option": null,
   "name": "Data presentation and interpretation",
   "caseStudies": [
    "[2.1] A histogram shows the times taken by 80 runners; estimate the number of runners taking between 25 and 32 minutes, using the fact that area represents frequency",
    "[2.2] Use knowledge of logarithms to reduce a relationship of the form y = axⁿ or y = kbˣ into linear form to estimate a and n or k and b from a scatter diagram",
    "[2.3] Given Σx = 140.8 and Σx² = 1088.6 for n = 20, calculate Sₓₓ and hence the standard deviation, and use linear interpolation to find the 65th percentile of the grouped data",
    "[2.4] Using the rule Q₁ − 1.5 × IQR and Q₃ + 1.5 × IQR, identify possible outliers on a box plot or scatter diagram and comment on whether they should be removed"
   ],
   "ideas": [
    {
     "code": "2.1",
     "q": "How do I read and interpret a histogram, box plot or cumulative frequency diagram for a single variable?",
     "idea": "Diagrams for single-variable data, with area in a histogram representing frequency",
     "content": "Interpret diagrams for single-variable data, including understanding that area in a histogram represents frequency. Connect to probability distributions. Students should be familiar with histograms, frequency polygons, box and whisker plots (including outliers) and cumulative frequency diagrams. Because area, not height, gives frequency in a histogram, frequency density must be used on the vertical axis and a scaling constant found (frequency = k × area) before estimating frequencies over part of a class; cumulative frequency diagrams are read to estimate the median, quartiles and percentiles, and box plots to compare location and spread of two distributions."
    },
    {
     "code": "2.2",
     "q": "How do I interpret a scatter diagram, a regression line and a correlation, and what can I safely predict from them?",
     "idea": "Scatter diagrams, regression lines and informal interpretation of correlation",
     "content": "Interpret scatter diagrams and regression lines for bivariate data, including recognition of scatter diagrams which include distinct sections of the population (calculations involving regression lines are excluded). Understand informal interpretation of correlation, and understand that correlation does not imply causation. Students should be familiar with the terms explanatory (independent) and response (dependent) variables. Use of interpolation and the dangers of extrapolation. Variables other than x and y may be used. Use to make predictions within the range of values of the explanatory variable. Change of variable may be required, e.g. using knowledge of logarithms to reduce a relationship of the form y = axⁿ or y = kbˣ into linear form to estimate a and n or k and b. Use of terms such as positive, negative, zero, strong and weak are expected."
    },
    {
     "code": "2.3",
     "q": "How do I calculate and interpret the mean, median, mode, variance and standard deviation, including from summary statistics?",
     "idea": "Measures of central tendency and variation, including standard deviation from Sₓₓ",
     "content": "Interpret measures of central tendency and variation, extending to standard deviation, and be able to calculate standard deviation, including from summary statistics. Data may be discrete, continuous, grouped or ungrouped. Understanding and use of coding. Measures of central tendency: mean, median, mode. Measures of variation: variance, standard deviation, range and interpercentile ranges. Use of linear interpolation to calculate percentiles from grouped data is expected. Students should be able to use the statistic Sₓₓ = Σ(x − x̄)² = Σx² − (Σx)²/n. Use of standard deviation = √(Sₓₓ/n) (or equivalent) is expected, but the use of S = √(Sₓₓ/(n − 1)) (as used on spreadsheets) will be accepted."
    },
    {
     "code": "2.4",
     "q": "How do I spot outliers, clean a data set and decide whether a way of presenting data is appropriate?",
     "idea": "Outliers, cleaning data and critiquing data presentation",
     "content": "Recognise and interpret possible outliers in data sets and statistical diagrams; select or critique data presentation techniques in the context of a statistical problem; and be able to clean data, including dealing with missing data, errors and outliers. Any rule needed to identify outliers will be specified in the question, for example use of Q₁ − 1.5 × IQR and Q₃ + 1.5 × IQR or mean ± 3 × standard deviation. Students will be expected to draw simple inferences and give interpretations to measures of central tendency and variation. Significance tests, other than those mentioned in Section 5, will not be expected. For example, students may be asked to identify possible outliers on a box plot or scatter diagram."
    }
   ]
  },
  {
   "id": "S3",
   "component": "P3",
   "option": null,
   "name": "Probability",
   "caseStudies": [
    "[3.1] A and B are independent events with P(A) = 0.4 and P(B) = 0.25; use P(A ∩ B) = P(A) P(B) to find P(A ∩ B) and P(A ∪ B)",
    "[3.2] Given P(A) = 0.6, P(B) = 0.5 and P(A ∩ B) = 0.3, use P(A|B) = P(A ∩ B)/P(B) to find P(A|B), and complete the Venn diagram",
    "[3.3] Question the assumption that a die or coin is fair, and state the likely effect on the model of a more realistic assumption"
   ],
   "ideas": [
    {
     "code": "3.1",
     "q": "How do I calculate probabilities when events are mutually exclusive or independent, and what does probability look like for a continuous distribution?",
     "idea": "Mutually exclusive and independent events; link to discrete and continuous distributions",
     "content": "Understand and use mutually exclusive and independent events when calculating probabilities. Link to discrete and continuous distributions. Venn diagrams or tree diagrams may be used, and set notation to describe events may be used. Use of P(B|A) = P(B), P(A|B) = P(A) and P(A ∩ B) = P(A) P(B) in connection with independent events. No formal knowledge of probability density functions is required, but students should understand that area under the curve represents probability in the case of a continuous distribution."
    },
    {
     "code": "3.2",
     "q": "How do I work out the probability of one event given that another has happened?",
     "idea": "Conditional probability and the formula P(A|B) = P(A ∩ B)/P(B)",
     "content": "Understand and use conditional probability, including the use of tree diagrams, Venn diagrams and two-way tables. Understand and use the conditional probability formula P(A|B) = P(A ∩ B)/P(B). Understanding and use of P(A′) = 1 − P(A), P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and P(A ∩ B) = P(A) P(B|A)."
    },
    {
     "code": "3.3",
     "q": "How do I build a probability model for a real situation and criticise the assumptions behind it?",
     "idea": "Modelling with probability and critiquing the assumptions made",
     "content": "Modelling with probability, including critiquing assumptions made and the likely effect of more realistic assumptions. So students must state the assumptions a probability model relies on, comment on whether they are reasonable in context, and say what effect a more realistic assumption would be likely to have. For example, questioning the assumption that a die or coin is fair."
    }
   ]
  },
  {
   "id": "S4",
   "component": "P3",
   "option": null,
   "name": "Statistical distributions",
   "caseStudies": [
    "[4.1] A fair spinner has 5 equal sectors: write down the discrete uniform distribution, then for X ~ B(20, 0.3) use your calculator to find P(X = 6) and P(X ≤ 6), commenting on whether the binomial model is appropriate",
    "[4.2] The heights of a population are modelled as X ~ N(μ, σ²): given P(X > 180) = 0.1 and P(X < 165) = 0.2, solve the resulting simultaneous equations for μ and σ, state where the points of inflection lie, and use N(np, np[1 − p]) with a continuity correction to approximate P(X ≥ 45) for B(100, 0.5)",
    "[4.3] A context is described (e.g. counting successes in a fixed number of independent trials, or a symmetric continuous measurement): select the binomial or Normal distribution, giving reasons, and explain why the chosen model may not be appropriate here"
   ],
   "ideas": [
    {
     "code": "4.1",
     "q": "How do I use a simple discrete probability distribution, and how do I calculate binomial probabilities?",
     "idea": "Simple discrete probability distributions and the binomial distribution as a model",
     "content": "Understand and use simple, discrete probability distributions (calculation of mean and variance of discrete random variables is excluded), including the binomial distribution, as a model; calculate probabilities using the binomial distribution. Students will be expected to use distributions to model a real-world situation and to comment critically on the appropriateness. Students should know and be able to identify the discrete uniform distribution. The notation X ~ B(n, p) may be used. Use of a calculator to find individual or cumulative binomial probabilities."
    },
    {
     "code": "4.2",
     "q": "How do I find probabilities from a Normal distribution, and when can I use it to approximate the binomial?",
     "idea": "The Normal distribution as a model, its shape and symmetry, and the Normal approximation to the binomial",
     "content": "Understand and use the Normal distribution as a model; find probabilities using the Normal distribution. Link to histograms, mean, standard deviation, points of inflection and the binomial distribution. The notation X ~ N(μ, σ²) may be used. Knowledge of the shape and the symmetry of the distribution is required. Knowledge of the probability density function is not required. Derivation of the mean, variance and cumulative distribution function is not required. Questions may involve the solution of simultaneous equations. Students will be expected to use their calculator to find probabilities connected with the normal distribution. Students should know that the points of inflection on the normal curve are at x = μ ± σ; the derivation of this result is not expected. Students should know that when n is large and p is close to 0.5 the distribution B(n, p) can be approximated by N(np, np[1 − p]). The application of a continuity correction is expected."
    },
    {
     "code": "4.3",
     "q": "How do I choose the right probability distribution for a situation, and how do I spot when it does not fit?",
     "idea": "Selecting an appropriate probability distribution and recognising when a model is unsuitable",
     "content": "Select an appropriate probability distribution for a context, with appropriate reasoning, including recognising when the binomial or Normal model may not be appropriate. Students should know under what conditions a binomial distribution or a Normal distribution might be a suitable model."
    }
   ]
  },
  {
   "id": "S5",
   "component": "P3",
   "option": null,
   "name": "Statistical hypothesis testing",
   "caseStudies": [
    "[5.1] Given r = 0.83 from a sample of size 12 and a table of critical values, test H₀: ρ = 0 against H₁: ρ ≠ 0 at the 5% significance level and interpret how close the data points lie to a straight line",
    "[5.2] A company claims 20% of its sweets are red; in a random sample of 30 sweets, 11 are red. Test at the 5% significance level whether the proportion of red sweets is greater than 0.20, stating your hypotheses in terms of p",
    "[5.3] The masses of items are modelled by N(μ, 4²). A random sample of 16 items has mean 52.3. Test at the 5% significance level whether the population mean has increased from 50, stating your hypotheses in terms of μ"
   ],
   "ideas": [
    {
     "code": "5.1",
     "q": "What do all the hypothesis-testing words mean, and how do I read a correlation coefficient against a p-value or critical value?",
     "idea": "Language of hypothesis testing through the binomial model, extended to correlation coefficients",
     "content": "Understand and apply the language of statistical hypothesis testing, developed through a binomial model: null hypothesis, alternative hypothesis, significance level, test statistic, 1-tail test, 2-tail test, critical value, critical region, acceptance region, p-value; extend to correlation coefficients as measures of how close data points lie to a straight line, and interpret a given correlation coefficient using a given p-value or critical value (calculation of correlation coefficients is excluded). An informal appreciation that the expected value of a binomial distribution is given by np may be required for a 2-tail test. Students should know that the product moment correlation coefficient r satisfies |r| ≤ 1 and that r = ±1 means the data points all lie on a straight line; r is found on a calculator, the formula is not required. Hypotheses should be stated in terms of ρ, with null hypothesis ρ = 0, where ρ is the population correlation coefficient. Tables of critical values or a p-value will be given."
    },
    {
     "code": "5.2",
     "q": "How do I test a claim about a proportion using the binomial distribution, and what does the significance level actually mean?",
     "idea": "Hypothesis test for the proportion p in a binomial distribution",
     "content": "Conduct a statistical hypothesis test for the proportion in the binomial distribution and interpret the results in context. Understand that a sample is being used to make an inference about the population and appreciate that the significance level is the probability of incorrectly rejecting the null hypothesis. Hypotheses should be expressed in terms of the population parameter p. A formal understanding of Type I errors is not expected."
    },
    {
     "code": "5.3",
     "q": "How do I test whether the mean of a Normal distribution has changed when the variance is known?",
     "idea": "Hypothesis test for the mean of a Normal distribution with known variance, using the distribution of the sample mean",
     "content": "Conduct a statistical hypothesis test for the mean of a Normal distribution with known, given or assumed variance and interpret the results in context. Students should know that: if X ~ N(μ, σ²) then X̄ ~ N(μ, σ²/n), and that a test for μ can be carried out using (X̄ − μ)/(σ/√n) ~ N(0, 1²). No proofs required. Hypotheses should be stated in terms of the population mean μ. Knowledge of the Central Limit Theorem or other large sample approximations is not required."
    }
   ]
  },
  {
   "id": "M6",
   "component": "P3",
   "option": null,
   "name": "Quantities and units in mechanics",
   "caseStudies": [
    "[6.1] Convert 72 km h⁻¹ into m s⁻¹",
    "[6.1 Derived quantities and units] State the S.I. units of force and of the moment of a force, and find the weight in newtons of a 5 kg mass"
   ],
   "ideas": [
    {
     "code": "6.1",
     "q": "Which fundamental quantities and units does mechanics use?",
     "idea": "Fundamental S.I. quantities and units: length, time, mass",
     "content": "Understand and use fundamental quantities and units in the S.I. system: length (metre, m), time (second, s), mass (kilogram, kg). Students may be required to convert one unit into another, e.g. km h⁻¹ into m s⁻¹ (multiply by 1000 and divide by 3600), and answers are expected in S.I. units unless the question says otherwise."
    },
    {
     "code": "6.1 Derived quantities and units",
     "q": "How are the derived quantities in mechanics defined, and what are their units?",
     "idea": "Derived quantities and units: velocity, acceleration, force, weight, moment",
     "content": "Understand and use derived quantities and units: velocity (m s⁻¹), acceleration (m s⁻²), force (newton, N = kg m s⁻²), weight (N, mass × g), moment (N m). Students may be required to convert one unit into another, e.g. km h⁻¹ into m s⁻¹; units must be stated with numerical answers and be consistent within a calculation."
    }
   ]
  },
  {
   "id": "M7",
   "component": "P3",
   "option": null,
   "name": "Kinematics",
   "caseStudies": [
    "[7.1] A particle travels 5 m east then 3 m west in 4 s: state its displacement, the distance travelled and its average speed, explaining why distance and speed must be positive",
    "[7.2] A velocity–time graph is drawn for a car that accelerates, travels at constant velocity then decelerates: find the acceleration from the gradient and the total displacement from the area under the graph",
    "[7.3] Use suvat formulae for constant acceleration in 2-D, e.g. v = u + at, r = ut + ½at² with vectors given in i − j or column vector form",
    "[7.4] Given r = t²i + t^(3/2)j, find ṙ and r̈ at a given time",
    "[7.5] A particle is projected with speed u at an angle α to the horizontal: derive formulae for the time of flight, the range, the greatest height and the equation of the path of the projectile"
   ],
   "ideas": [
    {
     "code": "7.1",
     "q": "What do position, displacement, distance, velocity, speed and acceleration each mean, and how do they differ?",
     "idea": "The language of kinematics: vector and scalar quantities of motion",
     "content": "Understand and use the language of kinematics: position; displacement; distance travelled; velocity; speed; acceleration. Students should know that distance and speed must be positive. Displacement, velocity and acceleration are vector quantities carrying a sign or direction, so a particle moving in a straight line may have negative displacement or velocity relative to the chosen positive direction, while the distance travelled and the speed (the magnitude of the velocity) are never negative. Position is measured from a stated origin; displacement is the change in position."
    },
    {
     "code": "7.2",
     "q": "How do I read a displacement–time or velocity–time graph, and what do the gradient and the area under it tell me?",
     "idea": "Interpreting displacement–time and velocity–time graphs for motion in a straight line",
     "content": "Understand, use and interpret graphs in kinematics for motion in a straight line: displacement against time and interpretation of gradient; velocity against time and interpretation of gradient and the area under the graph. The gradient of a displacement–time graph gives the velocity; the gradient of a velocity–time graph gives the acceleration; the area between a velocity–time graph and the time axis gives the displacement (areas below the axis counting as negative displacement). Graphical solutions to problems may be required, so students should be able to construct such graphs from a description of the motion and use them to find unknown times, velocities and distances."
    },
    {
     "code": "7.3",
     "q": "What are the constant acceleration (suvat) formulae, where do they come from, and how do I use them with vectors?",
     "idea": "Deriving and using the constant acceleration formulae, in one dimension and extended to two dimensions with vectors",
     "content": "Understand, use and derive the formulae for constant acceleration for motion in a straight line. Derivation may use knowledge of sections 7.2 (graphs in kinematics) and/or 7.4 (calculus in kinematics) — for example obtaining v = u + at from the gradient of a velocity–time graph and s = ½(u + v)t from the area of the trapezium beneath it, or by integrating a constant acceleration. Extend to 2 dimensions using vectors: understand and use suvat formulae for constant acceleration in 2-D, e.g. v = u + at, r = ut + ½at², with vectors given in i − j or column vector form. Use vectors to solve problems."
    },
    {
     "code": "7.4",
     "q": "How do I use differentiation and integration when the acceleration is not constant?",
     "idea": "Calculus in kinematics: differentiating and integrating displacement, velocity and acceleration with respect to time",
     "content": "Use calculus in kinematics for motion in a straight line: v = dr/dt, a = dv/dt = d²r/dt², r = ∫v dt, v = ∫a dt. The level of calculus required will be consistent with that in Sections 7 and 8 of the Pure Mathematics content, so constants of integration must be found from the given initial conditions. Extend to 2 dimensions using vectors: differentiation and integration of a vector with respect to time, component by component, e.g. given r = t²i + t^(3/2)j, find ṙ and r̈ at a given time."
    },
    {
     "code": "7.5",
     "q": "How do I model the flight of a projectile, and how do I find its time of flight, range, greatest height and path?",
     "idea": "Projectiles: motion under gravity in a vertical plane using vectors",
     "content": "Model motion under gravity in a vertical plane using vectors; projectiles. The horizontal and vertical components of the motion are treated separately, the horizontal velocity being constant and the vertical motion having constant acceleration g downwards. Derivation of formulae for the time of flight, the range and the greatest height, and the derivation of the equation of the path of a projectile, may be required."
    }
   ]
  },
  {
   "id": "M8",
   "component": "P3",
   "option": null,
   "name": "Forces and Newton’s laws",
   "caseStudies": [
    "[8.1] A book rests on a table and a crate hangs from a rope: identify the normal reaction, tension, thrust or compression and resistance acting, and use Newton's first law to explain why the body stays at rest or keeps moving at constant velocity",
    "[8.2] A car of mass 1200 kg is pulled along a straight horizontal road by a driving force of 2000 N against a resistance of 800 N; find the acceleration, then repeat for a particle on a plane inclined at 30° to the horizontal where the forces must be resolved",
    "[8.3] A stone is projected vertically upwards from ground level at 14 m s⁻¹; taking g = 9.8 m s⁻², find the greatest height reached and the time before it returns to the ground",
    "[8.4] Two particles of mass 3 kg and 5 kg are connected by a light inextensible string passing over a smooth pulley; find the acceleration of the system and the tension in the string, and state the force exerted on the pulley (extend to a lift problem, or to one particle on an inclined plane)",
    "[8.5] Two forces of magnitudes 8 N and 5 N act on a particle at an angle of 60° to each other; resolve into two components or use a vector diagram to find the magnitude and direction of the resultant force, and hence the acceleration of the particle",
    "[8.6] A block of mass 4 kg is pulled across a rough horizontal surface by a force at 20° to the horizontal; given the coefficient of friction is 0.3, use F = μR to find the acceleration, and use F ≤ μR to find the greatest force for which the block remains in equilibrium"
   ],
   "ideas": [
    {
     "code": "8.1",
     "q": "What exactly is a force, and what does Newton's first law tell me about a body that is at rest or moving steadily?",
     "idea": "Concept of a force and Newton's first law",
     "content": "Understand the concept of a force; understand and use Newton's first law. Students should be able to identify and name the forces acting on a body and show them on a force diagram: normal reaction, tension, thrust or compression, resistance. Newton's first law says a body stays at rest, or continues to move with constant velocity in a straight line, unless a resultant external force acts on it — so a body in equilibrium or moving at constant velocity has zero resultant force in every direction."
    },
    {
     "code": "8.2",
     "q": "How do I use F = ma to find the acceleration of a particle, including when it is on a slope?",
     "idea": "Newton's second law for motion in a straight line, in scalar and vector form",
     "content": "Understand and use Newton's second law for motion in a straight line (restricted to forces in two perpendicular directions or simple cases of forces given as 2-D vectors); extend to situations where forces need to be resolved (restricted to 2 dimensions). Problems will involve motion in a straight line with constant acceleration in scalar form, where the forces act either parallel or perpendicular to the motion. Problems may involve motion in a straight line with constant acceleration in vector form, where the forces are given in i − j form or as column vectors. Extend to problems where forces need to be resolved, e.g. a particle moving on an inclined plane."
    },
    {
     "code": "8.3",
     "q": "What is weight, and what value of g should I use for motion under gravity?",
     "idea": "Weight, motion under gravity and the value of g",
     "content": "Understand and use weight and motion in a straight line under gravity; gravitational acceleration, g, and its value in S.I. units to varying degrees of accuracy. (The inverse square law for gravitation is not required and g may be assumed to be constant, but students should be aware that g is not a universal constant but depends on location.) The default value of g will be 9.8 m s⁻² but some questions may specify another value, e.g. g = 10 m s⁻²."
    },
    {
     "code": "8.4",
     "q": "How do I handle two bodies that push or pull on each other, such as connected particles or a particle in a lift?",
     "idea": "Newton's third law, equilibrium of a particle and connected particles over smooth pulleys",
     "content": "Understand and use Newton's third law; equilibrium of forces on a particle and motion in a straight line (restricted to forces in two perpendicular directions or simple cases of forces given as 2-D vectors); application to problems involving smooth pulleys and connected particles; resolving forces in 2 dimensions; equilibrium of a particle under coplanar forces. Connected particle problems could include problems with particles in contact, e.g. lift problems. Problems may be set where forces need to be resolved, e.g. at least one of the particles is moving on an inclined plane."
    },
    {
     "code": "8.5",
     "q": "How do I combine several forces acting in different directions into a single resultant force?",
     "idea": "Addition of forces, resultant force and dynamics in a plane",
     "content": "Understand and use addition of forces; resultant forces; dynamics for motion in a plane. Students may be required to resolve a vector into two components or use a vector diagram, e.g. problems involving two or more forces, given in magnitude-direction form. The resultant of the forces acting on a particle gives its acceleration through Newton's second law applied in the plane."
    },
    {
     "code": "8.6",
     "q": "How do I deal with friction when a body slides on a rough surface, or is on the point of sliding?",
     "idea": "The F ≤ μR model for friction, coefficient of friction and limiting friction",
     "content": "Understand and use the F ≤ μR model for friction; coefficient of friction; motion of a body on a rough surface; limiting friction and statics. An understanding of F = μR when a particle is moving. An understanding of F ≤ μR in a situation of equilibrium, where the frictional force takes whatever value up to the limiting value μR is needed to maintain equilibrium, R being the normal reaction and μ the coefficient of friction."
    }
   ]
  },
  {
   "id": "M9",
   "component": "P3",
   "option": null,
   "name": "Moments",
   "caseStudies": [
    "[9.1] A uniform beam of length 4 m and weight 200 N rests on two supports; find the reactions and the position of a load that makes the beam about to tip",
    "[9.1 Equilibrium of rigid bodies] A uniform ladder rests against a smooth vertical wall on rough horizontal ground; take moments about the foot to find the reaction at the wall and the least possible coefficient of friction"
   ],
   "ideas": [
    {
     "code": "9.1",
     "q": "How do I calculate the moment of a force and use moments when a body is in equilibrium?",
     "idea": "Moments in simple static contexts",
     "content": "Understand and use moments in simple static contexts. The moment of a force about a point is force × perpendicular distance from the point to the line of action, measured in N m with a sense (clockwise or anticlockwise). For a rigid body in equilibrium the resultant force is zero and the total moment about any point is zero, so anticlockwise moments equal clockwise moments; taking moments about a well-chosen point eliminates an unknown force. The weight of a uniform rod or beam acts at its centre; a non-uniform body’s centre of mass may be the unknown."
    },
    {
     "code": "9.1 Equilibrium of rigid bodies",
     "q": "How do I solve a ladder problem or any equilibrium problem with non-parallel forces?",
     "idea": "Equilibrium of rigid bodies under parallel and non-parallel coplanar forces",
     "content": "Equilibrium of rigid bodies. Problems involving parallel and non-parallel coplanar forces, e.g. ladder problems. With parallel forces (a beam on two supports, a plank about to tip) resolve vertically and take moments about a support; with non-parallel forces (a ladder against a smooth wall on rough ground, a hinged rod held by a string) resolve in two perpendicular directions and take moments about the foot or hinge, using either the perpendicular distance or the components of each force; friction at the ground obeys F ≤ μR, with F = μR when the ladder is on the point of slipping."
    }
   ]
  }
 ]
};
module.exports = { SPEC_9MA0 };
