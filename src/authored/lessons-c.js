/* Written lessons — Statistics and Mechanics, plus verified external sources. */
const LESSONS = {};

LESSONS.S1 = {
 why:'Statistics begins with a question you cannot ask everyone, so you ask some of them. How you choose those "some" decides whether the answer means anything. This room is the vocabulary of that choice, and it also introduces Edexcel\'s large data set, which is examined directly.',
 idea:[
  {h:'Census or sample', t:'A census collects data from every member of the population — accurate but expensive, slow, and sometimes destructive (you cannot test every match to see how long it burns). A sample is a subset. The sampling frame is the list you actually draw from, and it may not cover the whole population; that gap is a source of bias.'},
  {h:'Random methods', t:'Simple random sampling gives every possible sample of size n the same chance — number the frame, use random numbers. Systematic sampling takes every kth item from a random start; it is quick but biased if the list has a pattern with period k. Stratified sampling divides the population into groups and samples each in proportion, guaranteeing representation of each stratum.'},
  {h:'Non-random methods', t:'Quota sampling fills preset group sizes by interviewer choice — no sampling frame needed, but interviewer bias creeps in. Opportunity sampling takes whoever is available — cheap and almost certainly unrepresentative. For each method you must be able to give one advantage and one disadvantage in the exam\'s own words.'},
  {h:'The large data set', t:'Pearson prescribes a data set (weather readings from several UK and overseas stations) that Paper 3 may reference directly. Know its structure: locations, months, variables, units, and the coded entries such as "tr" for trace rainfall and "n/a". Questions assume you have worked with it, so spend an hour in the spreadsheet early and note anything odd.'}],
 examples:[
  {title:'A factory has 1200 day-shift and 300 night-shift workers. Describe how to take a stratified sample of 50',
   steps:['Sampling fraction 50/1500 = 1/30.','Day shift: 1200/30 = 40. Night shift: 300/30 = 10.','Number the day-shift workers 1–1200 and select 40 using random numbers; repeat for 10 night-shift workers.','State why: the proportions of the two shifts in the sample match the population.']},
  {title:'Explain why an opportunity sample of shoppers at 10 am on a Tuesday may be biased',
   steps:['The people available at that time are not typical of all shoppers.','Working people and students are under-represented; retired people and shift workers over-represented.','Conclusions about "shoppers" would therefore not generalise.']}],
 check:[{q:'One advantage of stratified over simple random sampling?',a:'Guarantees each group is represented in proportion'},{q:'Why does systematic sampling need a random start?',a:'To avoid bias from always selecting the same positions'},{q:'What does "tr" mean in the large data set?',a:'Trace rainfall, less than 0.05 mm, treated as 0'}]
};

LESSONS.S2 = {
 why:'A thousand numbers mean nothing until you summarise them. Measures of location say where the data sit; measures of spread say how tightly. Diagrams show shape. Correlation and regression describe how two variables move together. The exam rewards two things equally: getting the calculation right, and saying in plain words what it means for the situation described.',
 idea:[
  {h:'Location and spread', t:'Mean, median and mode locate the data; range, interquartile range, variance and standard deviation measure spread. The IQR is robust to outliers; standard deviation is not. For grouped data, the median and quartiles are found by linear interpolation within the class. Coding y = (x − a)/b shifts and scales: undo it for the mean, but only the scale affects the standard deviation.'},
  {h:'Outliers and box plots', t:'An outlier is usually defined as more than 1.5 × IQR beyond a quartile, or more than 2 standard deviations from the mean — the question tells you which. Box plots show minimum, Q₁, median, Q₃, maximum, and mark outliers separately. Compare two box plots on location (medians), spread (IQR) and skew.'},
  {h:'Histograms and cumulative frequency', t:'In a histogram the area of a bar is the frequency, so the height is frequency density = frequency ÷ class width. Cumulative frequency curves let you read the median at n/2 and the quartiles at n/4 and 3n/4, and estimate how many values exceed a threshold.'},
  {h:'Correlation and regression', t:'The product moment correlation coefficient r, between −1 and 1, measures linear association; describe it by strength and direction, in context. A regression line y = a + bx predicts y from x; b is the change in y per unit x. Only predict within the data range — extrapolation is unreliable — and remember correlation is not causation. Which variable is explanatory decides which regression line is meaningful.'}],
 examples:[
  {title:'Times (minutes) for 60 runners are grouped: 20–30 (8), 30–40 (22), 40–50 (20), 50–60 (10). Estimate the median',
   steps:['Cumulative frequencies: 8, 30, 50, 60. The median is the 30th value.','The 30th value is the last in the 30–40 class, which starts at cumulative 8 and holds 22.','Position within class: (30 − 8)/22 = 1, i.e. the top of the class.','Median ≈ 30 + 1 × 10 = 40 minutes. (Interpolation gives exactly the class boundary here.)']},
  {title:'Interpret the regression line C = 15 + 2.4h for cost C (£) against hours h, fitted from data with 2 ≤ h ≤ 10',
   steps:['Intercept 15: the fixed cost when no hours are worked — but h = 0 is outside the data, so treat it cautiously.','Gradient 2.4: each extra hour adds £2.40 to the cost.','Predicting C at h = 6 is interpolation and reasonable; at h = 40 it is extrapolation and unreliable.']}],
 check:[{q:'Frequency density for class 5–15 with frequency 40?',a:'4'},{q:'x has mean 50, sd 8; y = (x − 50)/2. Mean and sd of y?',a:'0 and 4'},{q:'Describe r = 0.12.',a:'Very weak positive correlation'}]
};

LESSONS.S3 = {
 why:'Probability measures uncertainty on a scale from 0 to 1, and almost every statistical idea that follows — distributions, hypothesis tests — is built on it. The questions look simple and are lost through carelessness: mixing up "and" with "or", forgetting that without replacement changes the second probability, or asserting independence without checking.',
 idea:[
  {h:'The two big rules', t:'P(A or B) = P(A) + P(B) − P(A and B); the subtraction stops the overlap being counted twice. P(A and B) = P(A) × P(B) only if A and B are independent. Mutually exclusive means no overlap, so P(A and B) = 0. Independent and mutually exclusive are different things; a common trap is to assume one from the other.'},
  {h:'Diagrams do the thinking', t:'Venn diagrams for overlapping events: fill the intersection first, then the rest. Tree diagrams for sequences: multiply along a branch, add across branches. Two-way tables for two categorical variables. Set notation — A ∩ B, A ∪ B, A′ — is examinable, so read and write it fluently.'},
  {h:'Conditional probability', t:'P(A | B) = P(A ∩ B)/P(B) is the probability of A given that B has happened: you restrict attention to B. Independence can now be stated exactly: A and B are independent if P(A | B) = P(A). To test for independence, compute P(A)P(B) and compare with P(A ∩ B), or compute P(A | B) and compare with P(A).'},
  {h:'Without replacement', t:'Drawing two items without replacement changes the probabilities on the second draw. "At least one" is often quickest via the complement: 1 − P(none). Write the question\'s words as an event before you compute anything.'}],
 examples:[
  {title:'In a class, 60% study French, 40% study German and 25% study both. A student is chosen at random. Find P(French | German) and decide whether the subjects are independent',
   steps:['P(F ∩ G) = 0.25, P(G) = 0.4.','P(F | G) = 0.25/0.4 = 0.625.','P(F) = 0.6 ≠ 0.625, so French and German are not independent.','(Studying German makes studying French slightly more likely.)']},
  {title:'A bag has 4 white and 6 black balls. Two are drawn without replacement. Find P(different colours)',
   steps:['P(W then B) = 4/10 × 6/9 = 24/90.','P(B then W) = 6/10 × 4/9 = 24/90.','Add the two branches: 48/90 = 8/15.']}],
 check:[{q:'P(A) = 0.5, P(B) = 0.3, P(A ∪ B) = 0.65. Find P(A ∩ B).',a:'0.15'},{q:'Are the events in the previous question independent?',a:'Yes: 0.5 × 0.3 = 0.15'},{q:'P(A′ | B) in terms of P(A | B)?',a:'1 − P(A | B)'}]
};

LESSONS.S4 = {
 why:'A probability distribution is a model: a mathematical description of a random process that lets you calculate the chance of any outcome. Two models dominate this course. The binomial counts successes in repeated trials; the normal describes measurements that cluster around a mean. Knowing when each applies is examined as heavily as using them.',
 idea:[
  {h:'Discrete random variables', t:'A discrete random variable takes separate values, each with a probability; the probabilities sum to 1. Tables or formulae define them. The mean of a distribution is Σ x P(X = x); you will not need the general variance formula in this course, only for the binomial.'},
  {h:'The binomial', t:'X ~ B(n, p) counts successes in n independent trials each with probability p. P(X = r) = C(n, r) pʳ (1 − p)ⁿ⁻ʳ; mean np, variance np(1 − p). Conditions: fixed number of trials, two outcomes, constant probability, independence. Use the calculator\'s binomial PD for exact values and CD for cumulative ones, and convert "at least" and "more than" into "≤" statements first.'},
  {h:'The normal', t:'X ~ N(μ, σ²) is the bell curve, symmetric about μ, with about 68% within one standard deviation and 95% within two. Standardise with Z = (X − μ)/σ to compare with N(0, 1). The calculator gives probabilities directly; the inverse normal gives a value from a probability. When μ or σ is unknown, standardise, set equal to the z-value, and solve — two unknowns need two equations.'},
  {h:'Approximating and choosing', t:'When n is large and p is near ½, B(n, p) is approximately N(np, np(1 − p)); apply a continuity correction of ±0.5 because you are approximating a discrete variable with a continuous one. To choose a model, ask: is the variable a count of successes (binomial) or a continuous measurement clustered around a mean (normal)? Say why.'}],
 examples:[
  {title:'Heights are N(170, 8²). Find the height exceeded by 10% of the population',
   steps:['We want a with P(X > a) = 0.1, so P(X < a) = 0.9.','Inverse normal: z = 1.2816.','a = 170 + 1.2816 × 8 = 180.25.','About 180 cm.']},
  {title:'X ~ N(μ, σ²) with P(X < 20) = 0.2 and P(X > 35) = 0.1. Find μ and σ',
   steps:['P(X < 20) = 0.2: z = −0.8416, so (20 − μ)/σ = −0.8416.','P(X > 35) = 0.1: z = 1.2816, so (35 − μ)/σ = 1.2816.','Subtract: 15/σ = 2.1232, so σ = 7.065.','μ = 20 + 0.8416 × 7.065 = 25.95. So μ ≈ 26.0, σ ≈ 7.07.']}],
 check:[{q:'Variance of B(40, 0.25)?',a:'7.5'},{q:'P(X ≥ 3) in terms of a cumulative probability?',a:'1 − P(X ≤ 2)'},{q:'Continuity correction for P(X ≤ 30) using a normal approximation?',a:'P(Y < 30.5)'}]
};

LESSONS.S5 = {
 why:'A hypothesis test is how science decides whether an observation is evidence or coincidence. You assume nothing has changed, calculate how surprising your data would be under that assumption, and reject the assumption only if the data are surprising enough. Every test in this course follows one template, and most lost marks are in the wording of the conclusion.',
 idea:[
  {h:'The template', t:'Define the parameter (p, ρ or μ). State H₀ (no change) and H₁ (the claimed direction, or ≠ for two-tailed). Fix the significance level. Under H₀, state the distribution of the test statistic. Compute the probability of a result at least as extreme as the one observed, or find the critical region. Compare with the level. Conclude: reject H₀ or do not reject H₀, then say what that means in context.'},
  {h:'Binomial tests', t:'H₀: p = p₀, with X ~ B(n, p₀). One-tailed: is P(X ≥ x) (or ≤) less than the level? Two-tailed: compare with half the level in each tail. The critical region is the set of values that would lead to rejection; its probability is the actual significance level, usually a little under the nominal one because the distribution is discrete.'},
  {h:'Correlation tests', t:'H₀: ρ = 0. Compare the sample r with the critical value from the table for that n and level (one- or two-tailed). If |r| exceeds it, there is evidence of correlation. Say "evidence of positive correlation between … and …", naming the variables.'},
  {h:'Testing a mean', t:'For a normal population with known σ, the sample mean X̄ ~ N(μ, σ²/n). Standardise: z = (x̄ − μ₀)/(σ/√n). Compare with the critical z (1.6449 one-tailed at 5%, 1.96 two-tailed at 5%), or find the p-value. The √n is the part students forget.'}],
 examples:[
  {title:'A machine fills bags with mean 500 g, σ = 6 g. A sample of 25 has mean 497.2 g. Test at 5% whether the mean has decreased',
   steps:['H₀: μ = 500, H₁: μ < 500. X̄ ~ N(500, 36/25) under H₀, so σ/√n = 1.2.','z = (497.2 − 500)/1.2 = −2.333.','Critical value (one-tailed, 5%): −1.6449. −2.333 < −1.6449, so the result is significant.','Reject H₀: there is evidence at the 5% level that the mean fill has decreased.']},
  {title:'Find the critical region for X ~ B(20, 0.4), H₁: p > 0.4, at the 5% level',
   steps:['We need the smallest c with P(X ≥ c) ≤ 0.05, i.e. P(X ≤ c − 1) ≥ 0.95.','P(X ≤ 11) = 0.9435; P(X ≤ 12) = 0.9790.','So c − 1 = 12, c = 13: critical region X ≥ 13.','Actual significance level = 1 − 0.9790 = 0.021 = 2.1%.']}],
 check:[{q:'Which hypothesis do you assume true to calculate the test statistic?',a:'H₀'},{q:'Two-tailed test at 10%: how much probability in each tail?',a:'5%'},{q:'Correct phrasing when p-value > level?',a:'Insufficient evidence to reject H₀ (not "H₀ is true")'}]
};

LESSONS.M6 = {
 why:'Mechanics is applied mathematics: you build a model of a physical situation, solve the model, and interpret the answer. The model is only as good as its assumptions, and this short room teaches the words those assumptions are written in. Get them exact and you bank easy marks throughout Paper 3.',
 idea:[
  {h:'Units', t:'SI base units: metre, kilogram, second. Derived: velocity m s⁻¹, acceleration m s⁻², force in newtons where 1 N = 1 kg m s⁻², moment in N m. Convert everything to SI before calculating — 72 km h⁻¹ is 20 m s⁻¹ — and quote g = 9.8 m s⁻² unless told otherwise. Final answers to 2 or 3 significant figures, matching the accuracy of g.'},
  {h:'Scalars and vectors', t:'Scalars have size only: mass, time, speed, distance. Vectors have size and direction: displacement, velocity, acceleration, force, weight. Speed is the magnitude of velocity; distance is the total path length while displacement is the straight-line change of position.'},
  {h:'Modelling words', t:'Particle: size ignored, all mass at a point, no rotation, no air resistance from shape. Light: mass ignored. Inextensible: constant length, so connected objects share acceleration. Smooth: no friction. Rough: friction present. Uniform: mass evenly distributed, centre of mass at the middle. Rigid: does not bend. Each word tells you which force or effect to leave out.'},
  {h:'Refining a model', t:'Questions ask what would change if an assumption were removed. Include air resistance: the object accelerates less and does not reach as high. String has mass: tension differs along it. Surface is rough: friction opposes motion and reduces acceleration. Always name the effect and its direction.'}],
 examples:[
  {title:'A ball is thrown upwards. State two modelling assumptions and how removing each would affect the maximum height',
   steps:['Assumption 1: the ball is a particle, so air resistance is ignored.','With air resistance, an extra downward force acts on the way up, so the deceleration is greater and the maximum height is lower.','Assumption 2: g is constant at 9.8 m s⁻².','In reality g decreases slightly with height, so the true maximum height would be marginally higher — negligible at these scales, but worth stating.']},
  {title:'Convert 54 km h⁻¹ to m s⁻¹ and find the weight of a 2.5 kg mass',
   steps:['54 km = 54 000 m and 1 hour = 3600 s.','54 000 / 3600 = 15, so 54 km h⁻¹ = 15 m s⁻¹.','Weight is a force: W = mg = 2.5 × 9.8 = 24.5 N.']}],
 check:[{q:'Is weight a scalar or a vector?',a:'Vector (a force)'},{q:'What does "smooth pulley" allow you to assume?',a:'Tension is the same on both sides of the pulley'},{q:'1 N in base units?',a:'1 kg m s⁻²'}]
};

LESSONS.M7 = {
 why:'Kinematics describes how things move — position, velocity, acceleration and how they relate over time — without yet asking why. It is where the calculus you learned in pure gets a physical meaning: velocity is the derivative of displacement, acceleration the derivative of velocity, and integration goes back the other way.',
 idea:[
  {h:'Motion graphs', t:'On a displacement–time graph, gradient is velocity. On a velocity–time graph, gradient is acceleration and area is displacement (with area below the axis negative). Draw the graph from the description first; many questions are solved by geometry alone.'},
  {h:'Constant acceleration', t:'The five suvat equations each omit one of s, u, v, a, t. List what you know and what you want, choose the equation containing exactly those, and solve. Choose a positive direction and stick to it: for vertical motion under gravity with upwards positive, a = −9.8. At maximum height v = 0. Returning to the start means s = 0.'},
  {h:'Variable acceleration', t:'If acceleration is not constant, use calculus. v = ds/dt, a = dv/dt. Going back: v = ∫ a dt, s = ∫ v dt, with constants fixed by initial conditions. Displacement over an interval is the definite integral of v; distance travelled requires you to split at any time v changes sign.'},
  {h:'Projectiles and 2D motion', t:'Treat horizontal and vertical motion separately, linked only by time. Horizontally: no acceleration, x = (u cos θ)t. Vertically: a = −g, y = (u sin θ)t − ½gt². Time of flight comes from y = 0; range from substituting that time into x. In vector form, r = r₀ + ut + ½at² does both at once.'}],
 examples:[
  {title:'A stone is thrown horizontally at 12 m s⁻¹ from a cliff 20 m high. Find how far from the base it lands',
   steps:['Vertical (down positive): u = 0, a = 9.8, s = 20. s = ½at² gives 20 = 4.9t², t = 2.02 s.','Horizontal: constant 12 m s⁻¹ for 2.02 s.','Distance = 12 × 2.02 = 24.2 m.']},
  {title:'A particle moves with a = 6t − 2. At t = 0 it is at the origin with velocity 3 m s⁻¹. Find its displacement at t = 2',
   steps:['v = ∫(6t − 2) dt = 3t² − 2t + c. v(0) = 3 gives c = 3, so v = 3t² − 2t + 3.','s = ∫ v dt = t³ − t² + 3t + k. s(0) = 0 gives k = 0.','s(2) = 8 − 4 + 6 = 10 m.']}],
 check:[{q:'Area under a velocity–time graph gives…?',a:'Displacement'},{q:'Time to reach maximum height with u = 19.6 m s⁻¹?',a:'2 s'},{q:'Horizontal acceleration of a projectile?',a:'Zero'}]
};

LESSONS.M8 = {
 why:'Forces explain why things move. Newton\'s second law, F = ma, is one equation, but applying it well is a discipline: draw every force, choose a direction, resolve, write the equation for each body separately. Half the mechanics marks in Paper 3 live in this room, and the method is the same for a book on a table and a car towing a caravan up a hill.',
 idea:[
  {h:'The forces you will meet', t:'Weight mg, always vertically down. Normal reaction, perpendicular to the surface. Tension along a string or rod, pulling; thrust along a rod, pushing. Friction, along the surface, opposing motion or attempted motion. Driving force or resistance along the direction of travel. Draw them all, labelled, before writing anything — a diagram earns a mark on its own.'},
  {h:'Newton\'s laws', t:'First: no resultant force means constant velocity (including rest). Second: resultant force = ma, applied along the chosen direction. Third: if A pushes on B, then B pushes on A equally and oppositely — this is what makes the tension the same at both ends of a light string and what connects two bodies in a system.'},
  {h:'Resolving and slopes', t:'On a slope of angle α, weight has components mg sin α down the slope and mg cos α into it. Resolve perpendicular to the slope to find the normal reaction (nothing accelerates that way), then along the slope for the motion. The mistake to guard against is mixing sin and cos: the component along the slope grows as the slope steepens, so it is the sine.'},
  {h:'Friction and connected particles', t:'Friction is at most μR, and equals μR only when the object is moving or on the point of moving (limiting equilibrium). For connected particles, write F = ma for each body with the same magnitude of acceleration and the same tension; adding the equations eliminates T. Over a smooth pulley the string simply changes direction.'}],
 examples:[
  {title:'A car of mass 1000 kg tows a trailer of mass 400 kg. The engine provides 3500 N; resistances are 500 N on the car and 300 N on the trailer. Find the acceleration and the tension in the tow bar',
   steps:['Whole system: 3500 − 500 − 300 = 1400a, so a = 1.93 m s⁻² (2700/1400).','Trailer alone: T − 300 = 400a = 771.4.','T = 1071 N ≈ 1070 N.','Check with the car: 3500 − 500 − T = 1000a → 3000 − 1071 = 1929 ✓.']},
  {title:'A 5 kg block rests on a rough slope at 25°. It is on the point of slipping. Find μ',
   steps:['Perpendicular: R = 5g cos 25 = 44.41 N.','Along the slope, limiting equilibrium: F = 5g sin 25 = 20.71 N, and F = μR.','μ = 20.71/44.41 = 0.466.','(Note μ = tan 25° — a useful check for a block on the point of slipping.)']}],
 check:[{q:'Direction of friction on a block sliding down a slope?',a:'Up the slope'},{q:'Component of weight along a slope of angle α?',a:'mg sin α'},{q:'When does F = μR hold exactly?',a:'Moving or in limiting equilibrium'}]
};

LESSONS.M9 = {
 why:'Forces do not only push and pull; they turn. A moment measures that turning effect, and rigid bodies in equilibrium must balance moments as well as forces. This is the one Year 2 mechanics topic that is entirely new, and its questions follow a small number of patterns — reactions at supports, hidden centres of mass, tilting — that repay direct practice.',
 idea:[
  {h:'What a moment is', t:'Moment = force × perpendicular distance from the pivot, in N m, with a sense (clockwise or anticlockwise). If the force is not perpendicular to the rod, use the perpendicular component or the perpendicular distance — not both. The sum of moments about any point is the total turning effect about that point.'},
  {h:'Equilibrium of a rigid body', t:'Two conditions: the resultant force is zero, and the resultant moment about any point is zero. Take moments about the point that eliminates the unknown you do not want — usually a support, so its reaction has zero moment. Then use vertical equilibrium for the other reaction. Two equations, two unknowns.'},
  {h:'Uniform and non-uniform rods', t:'A uniform rod has its weight at the midpoint. A non-uniform rod has its centre of mass somewhere else, and the question either tells you where or asks you to find it — introduce x for its distance from one end and take moments.'},
  {h:'Tilting', t:'When a load is increased until a rod on two supports is about to tip, it pivots about the support nearer the load and the reaction at the far support becomes zero. Set that reaction to zero and take moments about the pivot to find the critical load or position.'}],
 examples:[
  {title:'A uniform plank AB of length 5 m and mass 20 kg rests on supports at A and at C where AC = 4 m. A boy of mass 40 kg walks from A towards B. How far past C can he go before the plank tips?',
   steps:['On the point of tipping, the reaction at A is zero and the plank pivots about C.','Weight of plank 20g acts at 2.5 m from A, i.e. 1.5 m from C on the A side.','Let the boy be x m past C. Moments about C: 40g × x = 20g × 1.5.','x = 0.75 m. He can walk 0.75 m past C, to 4.75 m from A.']},
  {title:'A non-uniform beam AB of length 6 m and weight 120 N rests horizontally on supports at A and B. The reaction at A is 80 N. Find the distance of the centre of mass from A',
   steps:['Vertical equilibrium: R_B = 120 − 80 = 40 N.','Let the centre of mass be x m from A. Moments about A: 120x = 40 × 6.','x = 2 m.','Sensible: the centre of mass is nearer A, which carries the larger reaction.']}],
 check:[{q:'Moment of 15 N at 0.4 m perpendicular?',a:'6 N m'},{q:'Which reaction is zero at the point of tilting?',a:'The one at the support further from the pivot/load'},{q:'Two conditions for equilibrium of a rigid body?',a:'Resultant force zero; resultant moment zero'}]
};

/* Verified external sources: TLMaths spec pages and ExamSolutions section indexes (fetched 6 Sep 2026) */
const TL = 'https://www.tlmaths.com/home/a-level-maths/full-a-level/';
const ES = 'https://www.examsolutions.net/a-level-maths/edexcel/';
const SOURCES = {
 P1:{tl:[['A1 Proof','a-proof/a1-proof']],es:'pure-maths-a-level-tutorials/'},
 P2:{tl:[['B1 Indices','b-algebra-functions/b1-indices'],['B2 Surds','b-algebra-functions/b2-surds'],['B3 Quadratics','b-algebra-functions/b3-quadratics'],['B5 Inequalities','b-algebra-functions/b5-inequalities'],['B6 Polynomials & rational expressions','b-algebra-functions/b6-polynomials-rational-expressions'],['B8 Functions','b-algebra-functions/b8-functions'],['B9 Graph transformations','b-algebra-functions/b9-graph-transformations'],['B10 Algebraic fractions','b-algebra-functions/b10-algebraic-fractions']],es:'pure-maths-a-level-tutorials/'},
 P3:{tl:[['C1 Coordinate geometry','c-coordinate-geometry/c1-coordinate-geometry'],['C2 Circles','c-coordinate-geometry/c2-circles'],['C3 Parametric equations','c-coordinate-geometry/c3-parametric-equations'],['C4 Parametric modelling','c-coordinate-geometry/c4-parametric-equation-modelling']],es:'pure-maths-a-level-tutorials/'},
 P4:{tl:[['D1 Binomial expansion','d-sequences-series/d1-binomial-expansion'],['D2 Sequences','d-sequences-series/d2-sequences'],['D3 Sigma notation','d-sequences-series/d3-sigma-notation'],['D4 Arithmetic sequences','d-sequences-series/d4-arithmetic-sequences'],['D5 Geometric sequences','d-sequences-series/d5-geometric-sequences'],['D6 Modelling with sequences','d-sequences-series/d6-modelling-with-sequences']],es:'pure-maths-a-level-tutorials/'},
 P5:{tl:[['E1 Trigonometry','e-trigonometry/e1-trigonometry'],['E2 Small angle approximation','e-trigonometry/e2-small-angle-approximation'],['E3 Trig graphs','e-trigonometry/e3-trig-graphs'],['E4 Further trigonometry','e-trigonometry/e4-further-trigonometry'],['E5 Identities','e-trigonometry/e5-trigonometric-identities'],['E6 Compound angles & R-form','e-trigonometry/e6-compound-angles-equivalent-forms'],['E7 Trig equations','e-trigonometry/e7-trig-equations'],['E8 Proving identities','e-trigonometry/e8-proving-trigonometric-identities']],es:'pure-maths-a-level-tutorials/'},
 P6:{tl:[['F1 Exponentials','f-exponentials-logarithms/f1-exponentials'],['F3 Logarithms','f-exponentials-logarithms/f3-logarithms'],['F4 Laws of logarithms','f-exponentials-logarithms/f4-laws-of-logarithms'],['F5 Exponential & log equations','f-exponentials-logarithms/f5-exponential-logarithmic-equations'],['F6 Reduction to linear form','f-exponentials-logarithms/f6-reduction-to-linear-form'],['F7 Growth & decay','f-exponentials-logarithms/f7-exponential-growth-decay']],es:'pure-maths-a-level-tutorials/'},
 P7:{tl:[['G1 First principles','g-differentiation/g1-differentiation-from-first-principles'],['G2 Differentiation','g-differentiation/g2-differentiation'],['G3 Gradients','g-differentiation/g3-gradients'],['G4 Further differentiation','g-differentiation/g4-further-differentiation'],['G5 Implicit & parametric','g-differentiation/g5-implicit-differentiation-parametric-differentiation'],['G6 Forming differential equations','g-differentiation/g6-forming-differential-equations']],es:'pure-maths-a-level-tutorials/'},
 P8:{tl:[['H1 Fundamental theorem','h-integration/h1-fundamental-theorem-of-calculus'],['H2 Indefinite integrals','h-integration/h2-indefinite-integrals'],['H3 Definite & parametric integration','h-integration/h3-definite-integrals-parametric-integration'],['H5 Further integration','h-integration/h5-further-integration'],['H6 Partial fractions','h-integration/h6-integration-with-partial-fractions'],['H7 Differential equations','h-integration/h7-differential-equations'],['H8 DEs in context','h-integration/h8-differential-equations-in-context']],es:'pure-maths-a-level-tutorials/'},
 P9:{tl:[['I1 Change of sign','i-numerical-methods/i1-the-change-of-sign-method'],['I2 x = g(x) & Newton–Raphson','i-numerical-methods/i2-the-xgx-method-the-newton-raphson-method'],['I3 Numerical integration','i-numerical-methods/i3-numerical-integration'],['I4 In context','i-numerical-methods/i4-numerical-methods-in-context']],es:'pure-maths-a-level-tutorials/'},
 P10:{tl:[['J1 Introducing vectors','j-vectors/j1-introducing-vectors'],['J2 Magnitude & direction','j-vectors/j2-magnitude-direction-of-a-vector'],['J3 Resultant & parallel','j-vectors/j3-resultant-parallel-vectors'],['J4 Position vectors','j-vectors/j4-position-vectors'],['J5 Vector problems','j-vectors/j5-vector-problems']],es:'pure-maths-a-level-tutorials/'},
 S1:{tl:[['K1 Large data set & sampling','k-statistical-sampling/k1-the-large-data-set-sampling-methods']],es:'statistics-a-level-tutorials/'},
 S2:{tl:[['L1 Box plots, CF & histograms','l-data-presentation-interpretation/l1-box-plots-cumulative-frequency-histograms'],['L2 Scatter graphs','l-data-presentation-interpretation/l2-scatter-graphs'],['L3 Central tendency & variation','l-data-presentation-interpretation/l3-central-tendency-variation'],['L4 Outliers & cleaning data','l-data-presentation-interpretation/l4-outliers-cleaning-data']],es:'statistics-a-level-tutorials/'},
 S3:{tl:[['M1 Venn, tree & two-way tables','m-probability/m1-venn-diagrams-tree-diagrams-two-way-tables'],['M2 Conditional probability','m-probability/m2-conditional-probability'],['M3 Modelling with probability','m-probability/m3-modelling-with-probability']],es:'statistics-a-level-tutorials/'},
 S4:{tl:[['N1 DRVs & binomial','n-statistical-distributions/n1-discrete-random-variables-the-binomial-distribution'],['N2 Normal distribution','n-statistical-distributions/n2-the-normal-distribution'],['N3 Appropriate distributions','n-statistical-distributions/n3-appropriate-distributions']],es:'statistics-a-level-tutorials/'},
 S5:{tl:[['O1 Introducing hypothesis testing','o-hypothesis-testing/o1-introducing-hypothesis-testing'],['O2 Binomial tests','o-hypothesis-testing/o2-binomial-hypothesis-testing'],['O3 Sample mean tests','o-hypothesis-testing/o3-sample-means-hypothesis-testing']],es:'statistics-a-level-tutorials/'},
 M6:{tl:[['P1 Quantities & units','p-quantities-units-in-mechanics/p1-quantities-units-in-mechanics']],es:'mechanics-a-level-tutorials/'},
 M7:{tl:[['Q1 Displacement, velocity & acceleration','q-kinematics/q1-displacement-velocity-acceleration'],['Q2 Graphs of motion','q-kinematics/q2-graphs-of-motion'],['Q3 SUVAT','q-kinematics/q3-suvat'],['Q4 Calculus in kinematics','q-kinematics/q4-calculus-in-kinematics'],['Q5 Projectiles','q-kinematics/q5-projectiles']],es:'mechanics-a-level-tutorials/'},
 M8:{tl:[['R1 Forces & Newton I','r-forces-and-newtons-laws/r1-introducing-forces-newtons-first-law'],['R2 Newton II','r-forces-and-newtons-laws/r2-newtons-second-law'],['R3 Weight & tension','r-forces-and-newtons-laws/r3-weight-tension'],['R4 Newton III & pulleys','r-forces-and-newtons-laws/r4-newtons-third-law-and-pulleys'],['R6 Coefficient of friction','r-forces-and-newtons-laws/r6-the-coefficient-of-friction']],es:'mechanics-a-level-tutorials/'},
 M9:{tl:[['S1 Moments','s-moments/s1-moments']],es:'mechanics-a-level-tutorials/'}
};
for (const k of Object.keys(SOURCES)) { SOURCES[k].tl = SOURCES[k].tl.map(([t, p]) => ({ t, url: TL + p })); SOURCES[k].es = ES + SOURCES[k].es; }
const OFFICIAL = {
 spec:'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf',
 formulae:'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/pearson-edexcel-a-level-gce-in-mathematics-formulae-book.pdf',
 dataset:'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/Pearson%20Edexcel%20GCE%20AS%20and%20AL%20Mathematics%20data%20set%20-%20Issue%201%20(1).xls',
 papersES:'https://www.examsolutions.net/a-level-maths/edexcel/edexcel-a-level-maths-past-papers/',
 papersRM:'https://revisionmaths.com/level-maths/level-maths-past-papers/edexcel-level-maths-past-papers',
 solutionBank:'https://www.examsolutions.net/a-level-maths/edexcel/edexcel-solution-bank/'
};

module.exports = { LESSONS, SOURCES, OFFICIAL };
