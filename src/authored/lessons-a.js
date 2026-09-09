/* Written lessons — Pure P1–P5. Each: why it exists, the idea in sections, two worked examples, check-yourself. */
const LESSONS = {};

LESSONS.P2 = {
 why:'Every question in this course, including statistics and mechanics, ends in algebra. If manipulation is slow or unreliable, you lose time on every paper and accuracy marks on most questions. This room is not about learning new ideas so much as making old ones automatic — and then extending them to functions and partial fractions, which Year 2 leans on heavily.',
 idea:[
  {h:'Indices and surds are one system', t:'Every rule of indices is a statement about repeated multiplication. a^m × a^n = a^(m+n) because you are counting factors. From that, a^0 = 1 (no factors), a^(−n) = 1/a^n (undoing factors) and a^(1/n) = ⁿ√a (a number that gives a when multiplied by itself n times). Surds are just irrational numbers written exactly. Simplify by pulling out square factors — √50 = √(25 × 2) = 5√2 — and rationalise denominators by multiplying by the conjugate, so that (a − √b)(a + √b) = a² − b leaves no root underneath.'},
  {h:'Three ways to read a quadratic', t:'ax² + bx + c tells you three things once you know how to look. Factorised, (x − p)(x − q), it shows the roots. Completed square, a(x + h)² + k, it shows the vertex at (−h, k) and therefore the minimum or maximum. The discriminant b² − 4ac tells you how many real roots there are without finding them: positive means two, zero means one repeated, negative means none. Exam questions about "the line meets the curve", "the equation has real roots" or "k such that…" are discriminant questions in disguise.'},
  {h:'Inequalities need a sketch', t:'To solve x² − 4x − 5 > 0, find the roots (−1 and 5), sketch the parabola, and read off where it is above the axis: x < −1 or x > 5. Never divide an inequality by something that might be negative. For a modulus inequality like |2x − 1| < 5, unpack to −5 < 2x − 1 < 5. The picture prevents the classic error of writing −1 < x < 5 when the answer is the outside region.'},
  {h:'Functions as objects', t:'A function is a rule with a domain. fg(x) means apply g first, then f. An inverse f⁻¹ undoes f and exists only if f is one-to-one; its graph is the reflection of f in y = x, and its domain is the range of f. Partial fractions split a fraction with a factorised denominator into simpler pieces — cover-up or substitution finds the constants — and you will meet them again in integration and binomial expansions, which is why they live here.'}],
 examples:[
  {title:'Find the values of k for which kx² − 4x + k = 0 has real roots',
   steps:['Real roots means the discriminant is at least zero: b² − 4ac ≥ 0.','Here a = k, b = −4, c = k: 16 − 4k² ≥ 0.','Rearrange: k² ≤ 4.','So −2 ≤ k ≤ 2. (Check k ≠ 0 if the question insists on a quadratic.)']},
  {title:'f(x) = 3x − 2, x ∈ ℝ. Find f⁻¹(x) and state its domain',
   steps:['Write y = 3x − 2 and make x the subject: x = (y + 2)/3.','Swap letters: f⁻¹(x) = (x + 2)/3.','The domain of f⁻¹ is the range of f. f is a straight line taking every real value, so the domain is x ∈ ℝ.','Check: f(f⁻¹(x)) = 3(x + 2)/3 − 2 = x. ✓']}],
 check:[{q:'Simplify (3√2)².',a:'18'},{q:'Write x² − 8x + 3 in completed-square form.',a:'(x − 4)² − 13'},{q:'For what values of k does x² + kx + 9 = 0 have no real roots?',a:'−6 < k < 6'}]
};

LESSONS.P1 = {
 why:'Mathematics is the one subject where you can be certain. Proof is how. In this exam, proof questions are short, worth between two and five marks, and are lost for reasons that have nothing to do with the maths: skipped steps, a conclusion never stated, or a special case passed off as a general argument. Learn the four methods and the exact form the examiner wants, and these become the surest marks on the paper.',
 idea:[
  {h:'Deduction: start general, stay general', t:'Represent the general object algebraically — an even number is 2k, an odd number is 2k + 1, consecutive integers are n and n + 1 — then manipulate until the result is visible, and end with a sentence saying so. Two things score the marks: correct algebra and a stated conclusion. Testing three examples proves nothing; "let n = 4" is a check, not a proof.'},
  {h:'Exhaustion: when the cases are finite', t:'If a statement has only a few possible cases, check every one. The classic is anything about last digits or remainders. Show that you have covered all cases explicitly; "and similarly for the others" is not exhaustive.'},
  {h:'Counter-example: one is enough', t:'To disprove "for all n…", find a single n that fails and show the failure with arithmetic. Common counter-examples to have ready: 2 is an even prime; 1 is neither prime nor composite; 0 breaks many claims about division; negative numbers break claims about squares being bigger.'},
  {h:'Contradiction: assume the opposite', t:'State clearly what you are assuming — the negation of the claim — then derive something impossible. The set-piece proofs are √2 is irrational and there are infinitely many primes, and both must be reproducible from memory. The structure is always: "Assume, for contradiction, that … Then … This contradicts … Therefore the original statement is true."'}],
 examples:[
  {title:'Prove that the product of two odd numbers is odd',
   steps:['Let the numbers be 2m + 1 and 2n + 1, for integers m and n.','Product: (2m + 1)(2n + 1) = 4mn + 2m + 2n + 1.','Factorise the even part: 2(2mn + m + n) + 1.','This is 2(integer) + 1, which is odd. So the product of two odd numbers is odd.']},
  {title:'Prove by contradiction that if n² is even, then n is even',
   steps:['Assume, for contradiction, that n² is even but n is odd.','Then n = 2k + 1, so n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1.','This is odd, contradicting the assumption that n² is even.','So the assumption fails: if n² is even, n must be even.']}],
 check:[{q:'Write down a counter-example to "every odd number is prime".',a:'9 (or 1, 15, 21…)'},{q:'How do you represent a general multiple of 3?',a:'3k for integer k'},{q:'What is the first line of a proof by contradiction?',a:'Assume the negation of the statement'}]
};

LESSONS.P3 = {
 why:'Coordinate geometry turns shapes into equations so that algebra can answer geometric questions: where lines meet, whether they are perpendicular, where a tangent touches. Exam questions here are long, multi-part and heavily weighted towards method marks, so a clear diagram and a clean layout earn as much as the arithmetic.',
 idea:[
  {h:'Lines', t:'A straight line is fixed by a gradient and a point. Gradient is rise over run; parallel lines share it, perpendicular lines have gradients that multiply to −1. Use y − y₁ = m(x − x₁) — it needs no rearranging for the intercept — and convert to ax + by + c = 0 only when asked. The midpoint and the distance formula are Pythagoras dressed up.'},
  {h:'Circles', t:'(x − a)² + (y − b)² = r² is a circle of centre (a, b) and radius r. If the equation is given expanded, complete the square in x and in y to recover the centre and radius. Three facts drive the questions: a tangent is perpendicular to the radius at the point of contact; the perpendicular from the centre to a chord bisects it; the angle in a semicircle is a right angle, so a triangle with a right angle sits on a circle whose diameter is the hypotenuse.'},
  {h:'Lines meeting curves', t:'Substitute the line into the curve and solve the resulting quadratic. Two solutions: it crosses twice. One repeated solution: it is a tangent. No real solutions: it misses. That is the discriminant from P2 doing geometric work.'},
  {h:'Parametric equations', t:'Sometimes a curve is easier to describe by a third variable, t: x = f(t), y = g(t). To get the Cartesian equation, eliminate t — make it the subject of the simpler equation and substitute, or use an identity like sin²t + cos²t = 1. The domain of the Cartesian curve may be restricted by the range of t; say so.'}],
 examples:[
  {title:'Show that the line y = 2x + 5 is a tangent to the circle x² + y² = 5',
   steps:['Substitute: x² + (2x + 5)² = 5.','Expand: x² + 4x² + 20x + 25 = 5, so 5x² + 20x + 20 = 0, i.e. x² + 4x + 4 = 0.','Discriminant: 16 − 16 = 0, so exactly one solution.','One point of contact means the line is a tangent. (The point is x = −2, y = 1.)']},
  {title:'Convert x = 3cos t, y = 3sin t to Cartesian form',
   steps:['cos t = x/3 and sin t = y/3.','Use sin²t + cos²t = 1: (y/3)² + (x/3)² = 1.','Multiply by 9: x² + y² = 9.','A circle of radius 3 centred at the origin.']}],
 check:[{q:'Gradient of the line perpendicular to y = −¼x + 2?',a:'4'},{q:'Distance from (0, 0) to (6, 8)?',a:'10'},{q:'Centre of x² + y² + 4x − 10y = 7?',a:'(−2, 5)'}]
};

LESSONS.P4 = {
 why:'Sequences describe anything that changes in steps — savings, populations, repayments — and the binomial expansion is the single most useful approximation tool in the course. This room is formula-heavy, but the formulae all follow from two ideas: repeated addition and repeated multiplication.',
 idea:[
  {h:'Arithmetic sequences: add a constant', t:'uₙ = a + (n − 1)d. The sum of the first n terms is n/2 × (first + last), which is the average term times the number of terms — that is where n/2(2a + (n − 1)d) comes from. If you forget a formula, you can rebuild it from that picture.'},
  {h:'Geometric sequences: multiply by a constant', t:'uₙ = arⁿ⁻¹ and Sₙ = a(1 − rⁿ)/(1 − r). When |r| < 1, rⁿ → 0 as n grows, so the sum settles to S∞ = a/(1 − r). Check the condition before you use it — a question giving r = 1.2 and asking for the sum to infinity is testing whether you notice it does not exist.'},
  {h:'Sigma notation', t:'Σ_{r=1}^{n} f(r) means add up f(1), f(2), …, f(n). Split sums across addition, factor out constants, and remember Σ 1 = n. The limits may not start at 1: Σ_{r=5}^{20} has 16 terms, not 20.'},
  {h:'Binomial expansion', t:'For positive integer n, (a + b)ⁿ has coefficients from Pascal\'s triangle, C(n, r). For other n, (1 + x)ⁿ = 1 + nx + n(n − 1)/2! x² + … and the series is infinite, valid only for |x| < 1. To expand (2 + x)⁻¹, factor out the 2 first: 2⁻¹(1 + x/2)⁻¹, valid for |x| < 2. Partial fractions often feed into this in a final part.'}],
 examples:[
  {title:'A geometric series has second term 6 and fifth term 48. Find a and r, and S₁₀',
   steps:['ar = 6 and ar⁴ = 48.','Divide: r³ = 8, so r = 2.','Then a = 3.','S₁₀ = 3(2¹⁰ − 1)/(2 − 1) = 3 × 1023 = 3069.']},
  {title:'Expand (4 + x)^(1/2) up to the x² term and state the validity',
   steps:['Factor out 4: (4 + x)^(1/2) = 2(1 + x/4)^(1/2).','Expand the bracket: 1 + (1/2)(x/4) + (1/2)(−1/2)/2 (x/4)² = 1 + x/8 − x²/128.','Multiply by 2: 2 + x/4 − x²/64.','Valid for |x/4| < 1, i.e. |x| < 4.']}],
 check:[{q:'10th term of 5, 8, 11, …?',a:'32'},{q:'Does 3 + 4.5 + 6.75 + … have a sum to infinity?',a:'No: r = 1.5 > 1'},{q:'Coefficient of x³ in (1 + x)⁷?',a:'35'}]
};

LESSONS.P5 = {
 why:'Trigonometry is the language of anything that repeats or rotates, from tides to alternating current, and in this exam it is the largest single topic by marks after calculus. It is also the one most students find slips fastest. The fix is not more theory but a small set of habits: exact values known cold, a sketch or CAST diagram for every equation, and identities derived rather than memorised.',
 idea:[
  {h:'Radians and the unit circle', t:'A radian is the angle that gives an arc equal to the radius, so 2π radians is a full turn and π = 180°. Arc length s = rθ and sector area ½r²θ only work in radians. Small-angle approximations — sin θ ≈ θ, cos θ ≈ 1 − θ²/2, tan θ ≈ θ — also need radians and appear in "show that" questions about limits.'},
  {h:'Solving equations: find them all', t:'The calculator gives one solution, the principal value. The graph or CAST diagram gives the rest: sine repeats with 180° − θ, cosine with 360° − θ, tangent with 180° + θ, then add or subtract full periods until you leave the interval. If the equation is in 2x + 30°, change the interval for 2x + 30° first, solve, then convert back — that is where solutions get lost.'},
  {h:'Identities', t:'sin²θ + cos²θ = 1 is Pythagoras. Divide it by cos² for 1 + tan² = sec², by sin² for 1 + cot² = cosec². The compound angle formulae for sin(A ± B) and cos(A ± B) give the double-angle formulae by setting A = B. Proving an identity means transforming one side into the other, one justified step at a time, never working on both sides at once.'},
  {h:'The R-form', t:'a sin θ + b cos θ = R sin(θ + α) with R = √(a² + b²). Expanding the right side and matching coefficients gives R cos α = a and R sin α = b, so tan α = b/a. The point of the form is that the maximum of R sin(θ + α) is simply R, and the equation R sin(θ + α) = c is solvable when a sin θ + b cos θ = c was not.'}],
 examples:[
  {title:'Solve 2 sin²x + 3 cos x = 3 for 0 ≤ x ≤ 2π',
   steps:['Replace sin²x with 1 − cos²x: 2 − 2cos²x + 3cos x = 3.','Rearrange: 2cos²x − 3cos x + 1 = 0.','Factorise: (2cos x − 1)(cos x − 1) = 0.','cos x = 1/2 gives x = π/3, 5π/3. cos x = 1 gives x = 0, 2π.','Solutions: 0, π/3, 5π/3, 2π.']},
  {title:'Prove that (1 − cos 2θ)/sin 2θ ≡ tan θ',
   steps:['Left side numerator: 1 − cos 2θ = 1 − (1 − 2sin²θ) = 2sin²θ.','Denominator: sin 2θ = 2 sin θ cos θ.','So the expression is 2sin²θ / (2 sin θ cos θ).','Cancel 2 sin θ: sin θ / cos θ = tan θ. ✓']}],
 check:[{q:'Exact value of tan(π/3)?',a:'√3'},{q:'How many solutions does sin x = 0.3 have for 0 ≤ x < 720°?',a:'4'},{q:'R for 5 sin θ + 12 cos θ?',a:'13'}]
};

module.exports = { LESSONS };
