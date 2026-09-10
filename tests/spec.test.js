/* Spec validator — every qualification file must pass the shared contract before the platform loads it.
   The same validateSpec() gates specs the Worker builds from a board's PDF, so this suite is also the
   proof that the contract accepts the four hand-written specs and rejects what it should. */
const fs=require('fs'),path=require('path');
const {validateSpec}=require('../src/spec-validator.js');
const {FAMILIES,familyFor}=require('../src/families.js');
let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);

const dir=path.join(__dirname,'..','src','specs');let total=0;
for(const f of fs.readdirSync(dir).filter(f=>/\.js$/.test(f)&&!/test/.test(f))){
  const m=require(path.join(dir,f));
  for(const spec of Object.values(m)){const r=validateSpec(spec);ok(`[${spec.id}] passes the shared contract`,r.ok,r.problems.slice(0,5).join(' | '));total+=r.ideas;
    ok(`[${spec.id}] family prior matches its mark style`,FAMILIES[familyFor(spec.subject)].markStyle===spec.markConventions.style,familyFor(spec.subject));}
}
console.log(`key ideas indexed: ${total}`);

/* the contract rejects what it should, with problems a model can act on */
const good=JSON.parse(JSON.stringify(Object.values(require(path.join(dir,'edexcel-9ma0.js')))[0]));
const mut=(fn)=>{const s=JSON.parse(JSON.stringify(good));fn(s);return validateSpec(s);};
let r=mut(s=>{s.components[0].weight+=5;});ok('V1 weights off 100 are refused and named',!r.ok&&/sum to 100/.test(r.problems[0]),r.problems[0]);
r=mut(s=>{s.components=[1,2,3,4,5,6].map(i=>({id:'P'+i,name:'Paper '+i,marks:70,weight:16.7,minutes:75}));s.topics.forEach((t,i)=>{t.component='P'+(i%6+1);});});ok('V14 six papers at the document\'s own 16.7% each are accepted',r.ok,r.problems.join('|'));
r=mut(s=>{s.topics[0].ideas=[s.topics[0].ideas[0]];});ok('V2 a topic with one idea is refused',!r.ok&&/at least two key ideas/.test(r.problems.join()));
r=mut(s=>{s.topics[0].ideas[0].content='short';});ok('V3 thin content is refused',!r.ok&&/too thin/.test(r.problems.join()));
r=mut(s=>{s.topics[1].id=s.topics[0].id;});ok('V4 duplicate topic ids are refused',!r.ok&&/duplicated/.test(r.problems.join()));
r=mut(s=>{s.topics[0].component='NOPE';});ok('V5 a topic on a non-existent component is refused',!r.ok&&/not one of/.test(r.problems.join()));
r=mut(s=>{s.options=[{id:'o',label:'x',choose:1,from:['ghost']}];});ok('V6 an option over a missing topic is refused',!r.ok&&/not topic ids/.test(r.problems.join()));
r=mut(s=>{s.essaySubject=true;s.markConventions.essayShapes=[];});ok('V7 an essay subject without shapes is refused',!r.ok&&/essayShapes/.test(r.problems.join()));
r=mut(s=>{s.markConventions.style='vibes';});ok('V8 an unknown mark style is refused',!r.ok&&/levels|points/.test(r.problems.join()));
r=mut(s=>{s.level='Degree';});ok('V9 an unknown level is refused',!r.ok&&/level must be/.test(r.problems.join()));
ok('V10 problems are actionable (name the topic)',mut(s=>{s.topics[2].ideas[0].q='';}).problems[0].includes(`topic "${good.topics[2].id}"`));
ok('V11 family prior: sciences, languages, maths, essay',familyFor('Chemistry')==='science'&&familyFor('French')==='language'&&familyFor('Further Mathematics')==='quantitative'&&familyFor('Politics')==='essay'&&familyFor('English Language')==='essay');

/* three-panel GUI, criterion 11: resources are optional, and checked when present */
r=mut(s=>{s.resources={hubs:[{name:'Physics & Maths Tutor',url:'https://www.physicsandmathstutor.com/',kind:'notes'}]};s.topics[0].links=[{t:'Video',url:'https://www.youtube.com/watch?v=x',kind:'video'}];});ok('V12 a well-formed resources block and topic links are accepted',r.ok,r.problems.join('|'));
r=mut(s=>{s.resources={hubs:[{name:'Bad',url:'http://example.com/',kind:'notes'}]};});ok('V13 a hub page without an https link is refused and named',!r.ok&&/resources.*https/.test(r.problems.join()),r.problems.join('|'));
r=mut(s=>{s.topics[0].links=[{t:'',url:'https://x.example/',kind:'video'}];});ok('V13 a topic link without a title is refused and names the topic',!r.ok&&r.problems.join().includes(`topic "${good.topics[0].id}"`)&&/link/.test(r.problems.join()),r.problems.join('|'));
console.log(`PASSED: ${pass}`); fails.forEach(f=>console.log('FAILED: '+f));
console.log('-'.repeat(50)); console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN'); process.exit(fails.length?1:0);
