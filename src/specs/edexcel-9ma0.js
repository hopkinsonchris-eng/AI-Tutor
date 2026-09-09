/* Edexcel A level Mathematics 9MA0 — spec map. Topic ids match the Maths Companion's node ids (P1…M9)
   so the platform can mirror that app's mastery states. Content paraphrased from the Pearson specification. */
const T = (id, comp, name, ideas) => ({ id, component: comp, option: null, name, caseStudies: [], ideas, skills: [] });
const I = (code, idea, content) => ({ code, q: idea, idea, content });
const SPEC_9MA0 = {
  id: 'EDX-9MA0', board: 'Pearson Edexcel', subject: 'Mathematics', code: '9MA0', level: 'A level',
  version: 'Specification Issue 4 structure; boundaries June 2024–25 known; verify against Pearson', firstExam: 2018, essaySubject: false,
  components: [
    { id: 'P12', name: 'Papers 1 and 2: Pure Mathematics', paperCode: '9MA0/01 and /02', marks: 200, weight: 66.67, minutes: 240, sections: ['Each paper 100 marks, 2 hours; any pure topic on either paper'] },
    { id: 'P3', name: 'Paper 3: Statistics and Mechanics', paperCode: '9MA0/03', marks: 100, weight: 33.33, minutes: 120, sections: ['A: Statistics 50 marks', 'B: Mechanics 50 marks'] }
  ],
  options: [],
  ao: [
    { id: 'AO1', label: 'Use and apply standard techniques', text: 'Select and correctly carry out routine procedures; accurately recall facts, terminology and definitions.' },
    { id: 'AO2', label: 'Reason, interpret and communicate', text: 'Construct rigorous arguments and proofs; make deductions and inferences; explain reasoning; use mathematical language and notation correctly.' },
    { id: 'AO3', label: 'Solve problems in context', text: 'Translate problems into mathematical processes; interpret solutions in context; evaluate and refine models.' }
  ],
  markConventions: {
    style: 'points',
    summary: 'Point-marked with M (method), A (accuracy, dependent on the M mark) and B (independent) marks. Unshown method earns nothing even when the answer is right. "Show that" earns marks only for the working; "hence" requires the previous part; "exact" forbids decimals. For level fields, report level 1 for below half marks, 2 for half to two-thirds, 3 for the top third, with maxLevel 3.',
    commandWords: [
      { word: 'Show that', means: 'The answer is given; every intermediate line is where the marks are.' },
      { word: 'Hence', means: 'Use the previous part; another method can score zero.' },
      { word: 'Hence or otherwise', means: 'Any valid method; hence is usually faster.' },
      { word: 'Exact', means: 'Surds, π, e, ln, fractions — never rounded decimals.' },
      { word: 'State', means: 'Write the answer; no working needed.' },
      { word: 'Find', means: 'Working expected; method marks available.' },
      { word: 'Verify', means: 'Substitute the given value and show it satisfies the equation.' },
      { word: 'Interpret', means: 'Say what the number means in the context, in a sentence.' }
    ],
    essayShapes: [
      { marks: 12, minutes: 14, structure: 'Multi-part modelling question: set up, solve, interpret, evaluate the model.' },
      { marks: 8, minutes: 10, structure: 'Extended problem with a "show that" and a final "hence".' },
      { marks: 4, minutes: 5, structure: 'Routine technique with full method shown.' }
    ]
  },
  topics: [
    T('P1', 'P12', 'Proof', [I('P1.1', 'Deduction and exhaustion', 'Proving statements from general algebraic starting points; checking every case when the cases are finite.'), I('P1.2', 'Counter-example', 'Disproving a general claim with one specific failing case, shown by arithmetic.'), I('P1.3', 'Contradiction', 'Assume the negation, derive an impossibility; √2 irrational and infinitely many primes.')]),
    T('P2', 'P12', 'Algebra and functions', [I('P2.1', 'Indices and surds', 'Laws of indices including fractional and negative powers; simplifying and rationalising surds.'), I('P2.2', 'Quadratics and the discriminant', 'Factorising, completing the square, the formula; discriminant conditions; sketching.'), I('P2.3', 'Inequalities and polynomials', 'Linear and quadratic inequalities, set notation; factor theorem, algebraic division.'), I('P2.4', 'Functions, transformations and partial fractions', 'Composite and inverse functions, modulus, graph transformations; partial fractions with linear and repeated factors.')]),
    T('P3', 'P12', 'Coordinate geometry', [I('P3.1', 'Straight lines', 'Gradient, equations of lines, parallel and perpendicular, distance and midpoint.'), I('P3.2', 'Circles', 'Equation from centre and radius, completing the square, tangents and chords, circle theorems.'), I('P3.3', 'Parametric equations', 'Converting to Cartesian form; sketching; parametric modelling.')]),
    T('P4', 'P12', 'Sequences and series', [I('P4.1', 'Binomial expansion', 'Positive integer powers; general rational powers with validity conditions.'), I('P4.2', 'Arithmetic and geometric sequences', 'nth terms, sums, sum to infinity, sigma notation, recurrence relations, modelling.')]),
    T('P5', 'P12', 'Trigonometry', [I('P5.1', 'Radians, arcs and sectors', 'Radian measure, arc length, sector area, small-angle approximations.'), I('P5.2', 'Equations and identities', 'Exact values, CAST/graphs for all solutions, Pythagorean identities, reciprocal and inverse functions.'), I('P5.3', 'Compound angles and R-form', 'Addition and double-angle formulae; a sin x + b cos x as R sin(x + α); proving identities.')]),
    T('P6', 'P12', 'Exponentials and logarithms', [I('P6.1', 'Laws of logs and exponential equations', 'Converting between forms, solving with logs, quadratics in disguise.'), I('P6.2', 'e, ln and modelling', 'Growth and decay models, doubling and half-life, linearising y = axⁿ and y = abˣ.')]),
    T('P7', 'P12', 'Differentiation', [I('P7.1', 'First principles and standard results', 'Definition of the derivative; powers, e, ln, trig.'), I('P7.2', 'Chain, product, quotient rules', 'Selecting and applying the rules; implicit and parametric differentiation.'), I('P7.3', 'Applications', 'Tangents and normals, stationary points and their nature, convexity and inflection, connected rates of change.')]),
    T('P8', 'P12', 'Integration', [I('P8.1', 'Standard integrals and areas', 'Reverse power rule, definite integrals, areas under and between curves.'), I('P8.2', 'Techniques', 'Substitution, by parts, partial fractions, recognising f′/f.'), I('P8.3', 'Differential equations', 'Separable equations, initial conditions, interpretation in context.')]),
    T('P9', 'P12', 'Numerical methods', [I('P9.1', 'Locating roots and iteration', 'Change of sign, x = g(x) iteration and convergence, staircase and cobweb diagrams.'), I('P9.2', 'Newton–Raphson and the trapezium rule', 'Formula, failure cases, numerical integration and over/under-estimates.')]),
    T('P10', 'P12', 'Vectors', [I('P10.1', 'Vectors in 2D and 3D', 'Components, magnitude, unit vectors, position and displacement vectors.'), I('P10.2', 'Geometric problems', 'Parallel and collinear points, ratios along lines, proofs about shapes.')]),
    T('S1', 'P3', 'Statistical sampling', [I('S1.1', 'Sampling methods', 'Census and sample; random, systematic, stratified, quota and opportunity sampling with advantages and disadvantages.'), I('S1.2', 'The large data set', 'Structure, variables, coded values and cleaning of Pearson\u2019s data set.')]),
    T('S2', 'P3', 'Data presentation and interpretation', [I('S2.1', 'Location and spread', 'Mean, median, quartiles, variance and standard deviation; interpolation; coding.'), I('S2.2', 'Representations', 'Histograms, box plots, outliers, cumulative frequency.'), I('S2.3', 'Correlation and regression', 'PMCC interpretation, regression lines, interpolation versus extrapolation.')]),
    T('S3', 'P3', 'Probability', [I('S3.1', 'Rules and diagrams', 'Addition and multiplication rules, Venn and tree diagrams, mutually exclusive and independent events.'), I('S3.2', 'Conditional probability', 'P(A|B), testing independence, without replacement.')]),
    T('S4', 'P3', 'Statistical distributions', [I('S4.1', 'Discrete and binomial', 'Discrete random variables; binomial conditions, probabilities, mean and variance.'), I('S4.2', 'The normal distribution', 'Standardising, inverse normal, unknown μ and σ, normal approximation to the binomial.')]),
    T('S5', 'P3', 'Hypothesis testing', [I('S5.1', 'Binomial tests', 'Hypotheses, critical regions, actual significance level, conclusions in context.'), I('S5.2', 'Correlation and mean tests', 'Testing ρ = 0 with tables; testing a normal mean with σ/√n.')]),
    T('M6', 'P3', 'Quantities and units in mechanics', [I('M6.1', 'Units, scalars and vectors', 'SI units, derived units, scalar and vector quantities.'), I('M6.2', 'Modelling assumptions', 'Particle, light, inextensible, smooth, rough, uniform, rigid — and the effect of removing each.')]),
    T('M7', 'P3', 'Kinematics', [I('M7.1', 'Graphs and constant acceleration', 'Motion graphs; suvat equations; vertical motion under gravity.'), I('M7.2', 'Variable acceleration', 'Differentiating and integrating displacement, velocity and acceleration.'), I('M7.3', 'Projectiles and 2D motion', 'Independent horizontal and vertical components; time of flight and range; vector forms.')]),
    T('M8', 'P3', 'Forces and Newton\u2019s laws', [I('M8.1', 'Newton\u2019s laws and connected particles', 'F = ma, third law, pulleys and tow bars, tension and thrust.'), I('M8.2', 'Friction and inclined planes', 'F ≤ μR, limiting equilibrium, resolving along and perpendicular to slopes.')]),
    T('M9', 'P3', 'Moments', [I('M9.1', 'Moments and equilibrium', 'Moment as force × perpendicular distance; conditions for equilibrium; choosing the pivot.'), I('M9.2', 'Rods and tilting', 'Uniform and non-uniform rods, hidden centres of mass, tilting problems.')])
  ],
  skills: { quantitative: ['Calculator: solver, statistics distributions, numerical integration'], qualitative: ['Interpreting models in context'], geoLocated: [] }
};
if (typeof module !== 'undefined') module.exports = { SPEC_9MA0 };
