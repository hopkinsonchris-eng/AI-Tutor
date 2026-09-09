/* Written lessons — Pure P6–P10. */
const LESSONS = {};

LESSONS.P6 = {
 why:'Growth and decay — money, populations, radioactivity, cooling coffee — all follow exponential laws, and logarithms are how you solve for the unknown that is stuck in a power. Beyond modelling, logs are also the tool that turns a curve into a straight line so that constants can be read from a graph. Expect one modelling question on nearly every pure paper.',
 idea:[
  {h:'What a log is', t:'log_a x asks: "a to what power gives x?" So log₂ 8 = 3 because 2³ = 8. Every statement about logs is a statement about powers read backwards, which is why the laws of logs mirror the laws of indices: adding logs multiplies, subtracting divides, a coefficient becomes a power. Logs of zero or negative numbers do not exist — always check solutions in the original equation.'},
  {h:'The number e', t:'e ≈ 2.718 is the base at which the gradient of aˣ equals aˣ itself. That property is why it appears throughout calculus and in every natural growth model. ln x means log_e x, and eˣ and ln x undo each other: e^(ln x) = x, ln(eˣ) = x.'},
  {h:'Solving exponential equations', t:'Unknown in the power? Take logs of both sides and bring the power down: 5ˣ = 30 becomes x ln 5 = ln 30. If the same base appears with two different exponents, it may be a quadratic in disguise: e²ˣ − 3eˣ + 2 = 0 is u² − 3u + 2 = 0 with u = eˣ.'},
  {h:'Modelling and linearising', t:'N = Ae^(kt): A is the starting value, k the rate, and the doubling or halving time is ln 2/|k|. If data fit y = axⁿ, then log y = log a + n log x — a straight line of gradient n and intercept log a when you plot log y against log x. If they fit y = abˣ, plot log y against x instead. Questions ask you to identify which, read the constants, and interpret them in context.'}],
 examples:[
  {title:'A cup of coffee cools according to T = 20 + 60e^(−0.05t) (°C, t in minutes). Find the initial temperature, the temperature after 20 minutes, and the time to reach 40°C',
   steps:['t = 0: T = 20 + 60 = 80°C.','t = 20: T = 20 + 60e^(−1) = 20 + 22.07 = 42.1°C.','T = 40: 60e^(−0.05t) = 20, so e^(−0.05t) = 1/3.','−0.05t = ln(1/3) = −1.0986, so t = 21.97 ≈ 22.0 minutes.']},
  {title:'Solve log₃(x + 6) − log₃ x = 2',
   steps:['Combine: log₃((x + 6)/x) = 2.','Undo the log: (x + 6)/x = 3² = 9.','x + 6 = 9x, so 8x = 6, x = 3/4.','Check: both x and x + 6 are positive, so the logs exist. x = 3/4.']}],
 check:[{q:'Solve 4ˣ = 32 exactly.',a:'x = 5/2'},{q:'Write ln 12 − ln 4 as a single log.',a:'ln 3'},{q:'A quantity halves every 7 years. What is k in Ae^(−kt)?',a:'k = ln 2 / 7 ≈ 0.099'}]
};

LESSONS.P7 = {
 why:'Differentiation is the mathematics of change. It tells you how fast something is growing, where a curve turns, and what the best value of a quantity is. It carries more marks than any other topic in pure maths and reappears inside mechanics. The good news is that the ideas are few — a derivative is a gradient — and the rest is technique that becomes automatic with repetition.',
 idea:[
  {h:'The derivative is a gradient', t:'The gradient of a curve at a point is the gradient of the tangent there. First principles defines it as the limit of (f(x + h) − f(x))/h as h → 0, and you must be able to reproduce this for a simple polynomial. The power rule, d/dx(xⁿ) = nxⁿ⁻¹, follows from it, and with the standard results for eˣ, ln x, sin x and cos x it handles every function in the course once the three rules are added.'},
  {h:'The three rules', t:'Chain rule for a function of a function: differentiate the outside, multiply by the derivative of the inside. Product rule for u × v: u′v + uv′. Quotient rule for u/v: (u′v − uv′)/v². Deciding which applies is a METHOD-CHOICE skill — say to yourself what kind of expression you are looking at before you write anything.'},
  {h:'What the derivative tells you', t:'dy/dx = 0 at stationary points. The second derivative classifies them: positive means minimum, negative means maximum. A point of inflection is where the curve changes from concave to convex, so d²y/dx² = 0 and changes sign there. Increasing where dy/dx > 0; decreasing where dy/dx < 0. Tangent and normal at a point: gradient m for the tangent, −1/m for the normal.'},
  {h:'Implicit, parametric and connected rates', t:'If y is not given explicitly, differentiate every term with respect to x, remembering that a y term produces a dy/dx by the chain rule and an xy term needs the product rule. For parametric curves, dy/dx = (dy/dt)/(dx/dt). Connected rates of change are chain rules in the real world: dV/dt = dV/dr × dr/dt.'}],
 examples:[
  {title:'A closed cylinder has volume 500 cm³. Find the radius that minimises its surface area',
   steps:['Volume: πr²h = 500, so h = 500/(πr²).','Surface area A = 2πr² + 2πrh = 2πr² + 1000/r.','dA/dr = 4πr − 1000/r². Set to zero: 4πr³ = 1000, r³ = 250/π, r = 4.30 cm.','d²A/dr² = 4π + 2000/r³ > 0, so this is a minimum.']},
  {title:'Find the equation of the normal to y = x ln x at x = e',
   steps:['Product rule: dy/dx = ln x + x(1/x) = ln x + 1.','At x = e: gradient of tangent = 1 + 1 = 2, so normal gradient = −1/2.','Point: y = e ln e = e, so (e, e).','Normal: y − e = −½(x − e), i.e. y = −x/2 + 3e/2.']}],
 check:[{q:'Differentiate e^(3x²).',a:'6x e^(3x²)'},{q:'If y″ < 0 at a stationary point, what is it?',a:'A maximum'},{q:'x = 2t, y = t² − 1. Find dy/dx.',a:'t'}]
};

LESSONS.P8 = {
 why:'Integration answers two questions that differentiation cannot: what is the total when you know the rate, and what is the area under a curve. It also solves differential equations, which is how most of applied mathematics is written. It is the second-largest topic by marks, and the one where students most often know every technique yet fail to pick the right one under time pressure.',
 idea:[
  {h:'Reverse the power rule', t:'∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c for n ≠ −1; the exception is ∫ 1/x dx = ln|x| + c. Indefinite integrals always carry + c. A definite integral ∫ₐᵇ f(x) dx is a number: evaluate at b, subtract the value at a, and never write + c. Area below the axis comes out negative, so split integrals at any crossing point.'},
  {h:'Recognise the pattern', t:'Standard results: ∫ eᵏˣ = eᵏˣ/k, ∫ sin = −cos, ∫ cos = sin, ∫ sec² = tan. Reverse chain rule: if the integrand is f′(x) times a function of f(x), substitute u = f(x). In particular ∫ f′/f = ln|f|. Recognising these on sight is the skill; write down "u = …" even when you can see the answer.'},
  {h:'Two big techniques', t:'Substitution changes the variable to simplify: replace x, dx and, for definite integrals, the limits. Integration by parts handles products: ∫ u v′ = uv − ∫ u′ v. Choose u to be the factor that gets simpler when differentiated — usually the polynomial — except with ln x, where u = ln x always. Partial fractions convert a rational integrand into logs.'},
  {h:'Differential equations', t:'dy/dx = f(x)g(y) is separable: write dy/g(y) = f(x) dx and integrate both sides. Find the constant from the initial condition and rearrange for y if asked. In context questions, translate the words first — "rate of change proportional to" means dN/dt = kN — and interpret the answer at the end.'}],
 examples:[
  {title:'Find ∫ x² ln x dx',
   steps:['By parts with u = ln x (always), v′ = x².','u′ = 1/x, v = x³/3.','∫ x² ln x = (x³/3) ln x − ∫ (x³/3)(1/x) dx = (x³/3) ln x − ∫ x²/3 dx.','= (x³/3) ln x − x³/9 + c.']},
  {title:'Evaluate ∫₀^(π/6) sin 3x dx using the substitution u = 3x',
   steps:['u = 3x, du = 3 dx, so dx = du/3. Limits: x = 0 → u = 0; x = π/6 → u = π/2.','Integral becomes (1/3) ∫₀^(π/2) sin u du.','= (1/3)[−cos u]₀^(π/2) = (1/3)(0 − (−1)).','= 1/3.']}],
 check:[{q:'∫ (2x + 1)⁴ dx?',a:'(2x + 1)⁵/10 + c'},{q:'∫₁ᵉ 1/x dx?',a:'1'},{q:'Separate dy/dx = 3y.',a:'∫ dy/y = ∫ 3 dx'}]
};

LESSONS.P9 = {
 why:'Most equations that arise in practice cannot be solved exactly. Numerical methods find roots and areas to any accuracy you like, and this is how calculators and computers actually work. It is a small topic with a fixed set of question types, and precision of language is worth as much as the arithmetic.',
 idea:[
  {h:'Locating a root', t:'If f is continuous and f(a) and f(b) have opposite signs, there is a root between a and b. Say all three things — the two values, their signs, and that f is continuous. A change of sign can be missed if two roots lie in the interval, and a sign change can occur at an asymptote without any root: f(x) = 1/x changes sign across zero. Questions ask you to explain both.'},
  {h:'Fixed-point iteration', t:'Rearrange f(x) = 0 into x = g(x), pick x₀, and iterate xₙ₊₁ = g(xₙ). It converges to a root α if |g′(α)| < 1 near α, producing a staircase (g′ > 0) or cobweb (g′ < 0) diagram. Different rearrangements behave differently; a question may ask you to show why one diverges.'},
  {h:'Newton–Raphson', t:'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) follows the tangent to where it meets the axis. It converges fast when it works, and fails when f′(xₙ) = 0 or when the starting point is on the wrong side of a turning point so the tangent shoots off to another root or to infinity. Keep full calculator precision between steps and round only the values you write down.'},
  {h:'The trapezium rule', t:'Approximate an area with n trapezia of width h = (b − a)/n: h/2 × [y₀ + 2(y₁ + … + yₙ₋₁) + yₙ]. There are n + 1 ordinates. Sketch to decide whether it over- or underestimates: convex curves are overestimated, concave underestimated. More strips means more accuracy.'}],
 examples:[
  {title:'Show that x = ln(4x) has a root between 0.3 and 0.4, then find it with the iteration xₙ₊₁ = ln(4xₙ) starting from x₀ = 0.35',
   steps:['f(x) = x − ln(4x). f(0.3) = 0.3 − ln 1.2 = 0.3 − 0.182 = 0.118 > 0. f(0.4) = 0.4 − ln 1.6 = 0.4 − 0.470 = −0.070 < 0.','Change of sign and f continuous on [0.3, 0.4], so a root lies between.','x₁ = ln(1.4) = 0.3365; x₂ = ln(1.346) = 0.2972; x₃ = ln(1.189) = 0.1730.','The values move away from the root: |g′(x)| = |1/x| > 1 here, so this rearrangement diverges. Use Newton–Raphson instead.']},
  {title:'Use the trapezium rule with 3 strips to estimate ∫₁⁴ √x dx',
   steps:['h = (4 − 1)/3 = 1. Ordinates at x = 1, 2, 3, 4: 1, 1.4142, 1.7321, 2.','Estimate = ½[1 + 2(1.4142 + 1.7321) + 2] = ½[3 + 6.2926] = 4.646.','Exact: (2/3)(8 − 1) = 4.667. The estimate is low because √x is concave.']}],
 check:[{q:'Why might a sign change not indicate a root?',a:'The function may have an asymptote in the interval (discontinuity)'},{q:'How many ordinates for 5 strips?',a:'6'},{q:'Newton–Raphson fails when…?',a:'f′(xₙ) = 0 (turning point)'}]
};

LESSONS.P10 = {
 why:'Vectors carry both size and direction, which is exactly what forces, velocities and displacements need. In pure maths they let you prove geometric facts with algebra instead of diagrams, and in three dimensions they describe things you cannot draw. The mechanics half of Paper 3 is written in vectors, so this room pays twice.',
 idea:[
  {h:'Representing vectors', t:'Column form (a, b) or component form ai + bj, with k for the third dimension. Add and subtract component-wise; multiply by a scalar to scale. The magnitude is Pythagoras: |ai + bj + ck| = √(a² + b² + c²). A unit vector has magnitude 1: divide any vector by its own magnitude to get one in the same direction.'},
  {h:'Position and displacement', t:'The position vector of a point A is the vector from the origin, written a. The displacement from A to B is AB = b − a — the destination minus the start. This one line is the engine of every vector geometry question. Parallel vectors are scalar multiples of each other; the same test, applied to AB and BC, proves three points collinear.'},
  {h:'Geometry with vectors', t:'To find where a point divides a line in a given ratio, walk along it: P dividing AB in ratio m : n is at a + m/(m + n) (b − a). To prove a quadrilateral is a parallelogram, show one pair of opposite sides are equal vectors. Write every step as a vector equation; do not switch to lengths and angles unless asked.'},
  {h:'What is not here', t:'There is no scalar product and no vector equation of a line in A level Mathematics — both belong to Further Maths. If a question seems to need an angle between vectors, it wants trigonometry from the magnitudes or a right-angle argument, not a dot product.'}],
 examples:[
  {title:'OABC is a parallelogram with OA = a and OC = c. M is the midpoint of AB and N is the midpoint of BC. Show that MN is parallel to AC and half its length',
   steps:['In a parallelogram, b = a + c.','M is the midpoint of AB: m = ½(a + b) = a + ½c.','N is the midpoint of BC: n = ½(b + c) = ½a + c.','MN = n − m = (½a + c) − (a + ½c) = ½(c − a).','AC = c − a, so MN = ½AC: parallel and half the length. ✓']},
  {title:'Find a unit vector in the direction of 2i − 3j + 6k',
   steps:['Magnitude: √(4 + 9 + 36) = √49 = 7.','Divide each component by 7.','Unit vector: (2/7)i − (3/7)j + (6/7)k.','Check its magnitude: √(4 + 9 + 36)/7 = 1. ✓']}],
 check:[{q:'AB if a = (1, 2, 3) and b = (4, 0, 3)?',a:'(3, −2, 0)'},{q:'Is (2, 4, −6) parallel to (−1, −2, 3)?',a:'Yes: it is −2 times it'},{q:'|(−3, 4, 12)|?',a:'13'}]
};

module.exports = { LESSONS };
