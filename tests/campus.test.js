/* Smokes for the campus drawing: one building per subject, lit windows for progress, one flag per building, the Exam Hall and Office, time-of-day tint. */
const { campusSvg, CAMPUS_SHAPES } = require('../src/campus.js');
let pass = 0; const fails = []; const ok = (l, c, d = '') => c ? pass++ : fails.push(l + ' ' + d);
const subs = (n) => Array.from({ length: n }, (_, i) => ({ id: 'S' + i, name: 'Subject ' + i, short: 'Subject ' + i, sub: 'Board ' + i, colour: ['#2B4C7E', '#2E6B4E', '#A8761B', '#8E3B5C', '#2E6B6B', '#B3372B', '#5C5B8E', '#7A6A2E'][i % 8], pct: 0, marker: null }));
const group = (svg, id) => { const m = svg.match(new RegExp('<g class="bldg" data-bldg="' + id + '"[\\s\\S]*?</g>')); return m ? m[0] : ''; };
const lit = g => (g.match(/fill="#F6DE9A"/g) || []).length, dark = g => (g.match(/fill="#E7EEF3"/g) || []).length;

let svg = campusSvg({ subjects: subs(5), exam: {}, office: {}, hour: 11 });
ok('C1 one building per subject, numbered in portfolio order, plus the Exam Hall and the Office', (svg.match(/data-bldg="S\d"/g) || []).map(x => x.slice(11, -1)).sort().join(',') === 'S0,S1,S2,S3,S4' && /data-bldg="S3" data-i="3"/.test(svg) && /data-bldg-view="exam"/.test(svg) && /data-bldg-view="office"/.test(svg) && /Exam Hall/.test(svg) && />Office</.test(svg));
ok('C1 each door wears its subject’s colour', /fill="#2B4C7E"/.test(group(svg, 'S0')) && /fill="#2E6B4E"/.test(group(svg, 'S1')) && /fill="#8E3B5C"/.test(group(svg, 'S3')));
ok('C1 every building has a name label and a sub line', /Subject 3/.test(svg) && /Board 3/.test(svg));
ok('C1 the drawing is one SVG with a viewBox and an accessible label', /^<svg class="campus" viewBox="[-\d. ]+" role="group" aria-label="Your campus"/.test(svg) && /aria-label="Subject 0: /.test(svg));

const model = { subjects: subs(3), exam: {}, office: {}, hour: 11 }; model.subjects[0].pct = 0; model.subjects[1].pct = 0.5; model.subjects[2].pct = 1;
svg = campusSvg(model);
ok('C2 no progress lights no windows', lit(group(svg, 'S0')) === 0 && dark(group(svg, 'S0')) > 0);
ok('C2 full progress lights every window', dark(group(svg, 'S2')) === 0 && lit(group(svg, 'S2')) > 0);
{ const g = group(svg, 'S1'); const n = lit(g) + dark(g); ok('C2 half progress lights half the windows, within one', Math.abs(lit(g) - n / 2) <= 1, lit(g) + ' of ' + n); }

const flags = { subjects: subs(4), exam: { marker: 'red' }, office: {}, hour: 11 }; flags.subjects[0].marker = 'red'; flags.subjects[1].marker = 'amber'; flags.subjects[2].marker = 'blue';
svg = campusSvg(flags);
const flagOf = g => { const m = g.match(/<polygon points="[\d.,\- ]+" fill="(#B3372B|#A8761B|#2B4C7E)" stroke="#191D23" stroke-width="1"\/>/g) || []; return m.filter(x => !/opacity/.test(x)); };
ok('C2 one flag per building in the marker’s colour, none without a marker', /#B3372B/.test(group(svg, 'S0')) && /#A8761B/.test(group(svg, 'S1')) && /#2B4C7E/.test(group(svg, 'S2')) && !/<line x1="[\d.\-]+" y1="[\d.\-]+" x2="[\d.\-]+" y2="[\d.\-]+" stroke="#191D23" stroke-width="1.2"\/><polygon/.test(group(svg, 'S3')));
ok('C2 the Exam Hall can carry a flag too', /#B3372B/.test(svg.match(/<g class="bldg" data-bldg-view="exam"[\s\S]*?<\/g>/)[0]));

svg = campusSvg({ subjects: subs(8), exam: {}, office: {}, hour: 11 });
ok('C1 eight subjects draw eight distinct building shapes without overlapping labels being lost', (svg.match(/data-bldg="S\d"/g) || []).length === 8 && CAMPUS_SHAPES.length === 8 && new Set(CAMPUS_SHAPES).size === 8);
ok('C12 the drawing carries no wash at midday', !/opacity=".08" pointer-events="none"/.test(svg) && !/opacity=".06" pointer-events="none"/.test(svg));
ok('C12 late afternoon is washed warm, night cool, with no text', /fill="#A8761B" opacity=".06" pointer-events="none"/.test(campusSvg({ subjects: subs(1), hour: 17 })) && /fill="#2B4C7E" opacity=".08" pointer-events="none"/.test(campusSvg({ subjects: subs(1), hour: 21 })) && !/evening|night/i.test(campusSvg({ subjects: subs(1), hour: 21 })));
ok('C8 the Office says admin only for an admin', />admin</.test(campusSvg({ subjects: subs(1), admin: true })) && !/>admin</.test(campusSvg({ subjects: subs(1), admin: false })));
{ const s = subs(1); s[0].name = 'Maths <b>&</b>'; s[0].short = s[0].name; ok('names are escaped', /Maths &lt;b&gt;&amp;/.test(campusSvg({ subjects: s })) && !/<b>&<\/b>/.test(campusSvg({ subjects: s }))); }
ok('a portfolio with no subjects still draws the Exam Hall and the Office', /data-bldg-view="exam"/.test(campusSvg({ subjects: [] })) && /data-bldg-view="office"/.test(campusSvg({ subjects: [] })));

ok('C13 calm mode: the drawing carries no time-of-day wash, and everything else is still there', (() => { const c = campusSvg({ subjects: subs(2), exam: {}, office: {}, hour: 17, calm: true }); const n = campusSvg({ subjects: subs(2), exam: {}, office: {}, hour: 17 }); return !/opacity="\.0[68]" pointer-events="none"/.test(c) && /opacity="\.06" pointer-events="none"/.test(n) && (c.match(/data-bldg="S\d"/g) || []).length === 2 && /data-bldg-view="exam"/.test(c); })());
ok('C14 no gate marker: the foot of the path carries no stray line or GATE label', !/GATE/.test(campusSvg({ subjects: subs(2), exam: {}, office: {} })));


/* buildings grow a floor per share of rooms completed; finished floors are lit */
{const windows=g=>lit(g)+dark(g);const mk=(done,rooms)=>{const m={subjects:subs(3),exam:{},office:{},hour:11};m.subjects[1].rooms=rooms;m.subjects[1].done=done;m.subjects[1].pct=0.9;return group(campusSvg(m),'S1');};
 const g0=mk(0,8),g1=mk(2,8),g2=mk(4,8),g3=mk(8,8),gp=mk(8,8);
 ok('C15 a subject with nothing completed is a single storey with no lights, whatever its pct',/data-storeys="1" data-lit="0"/.test(g0)&&lit(g0)===0&&windows(g0)>0,g0.match(/data-storeys[^>]*/)+'');
 ok('C15 completing a quarter of the rooms (one of four floors’ worth) adds a second floor and lights the first',/data-storeys="2" data-lit="1"/.test(g1)&&windows(g1)===2*windows(g0)&&lit(g1)===windows(g0),g1.match(/data-storeys[^>]*/)+' '+lit(g1)+'/'+windows(g1));
 ok('C15 half the rooms: three floors, two lit',/data-storeys="3" data-lit="2"/.test(g2)&&windows(g2)===3*windows(g0)&&lit(g2)===2*windows(g0));
 ok('C15 every room completed: the tower’s full four floors, all lit',/data-storeys="4" data-lit="4"/.test(g3)&&windows(g3)===4*windows(g0)&&dark(g3)===0);
 const hallDone=(()=>{const m={subjects:subs(1),exam:{},office:{},hour:11};m.subjects[0].rooms=9;m.subjects[0].done=9;return group(campusSvg(m),'S0');})();
 ok('C15 a two-storey shape never grows past two',/data-storeys="2" data-lit="2"/.test(hallDone));
 ok('C15 a model without room counts keeps the old fixed height lit by pct',!/data-storeys/.test(group(campusSvg({subjects:subs(2),exam:{},office:{},hour:11}),'S0')));}

console.log(`PASSED: ${pass}`); fails.forEach(f => console.log('FAILED: ' + f)); console.log('-'.repeat(50)); console.log(fails.length ? `RESULT: ${fails.length} FAILURE(S)` : 'RESULT: ALL GREEN'); process.exit(fails.length ? 1 : 0);
