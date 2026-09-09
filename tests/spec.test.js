/* Spec validator — every qualification file must pass this before the platform loads it */
const fs=require('fs'),path=require('path');
let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
function validate(spec){
  const t=`[${spec.id}]`;
  ok(`${t} identity`, spec.id&&spec.board&&spec.subject&&spec.code&&spec.level&&spec.version);
  const w=spec.components.reduce((a,c)=>a+c.weight,0); ok(`${t} weights sum to 100`, w===100, String(w));
  ok(`${t} components have marks`, spec.components.every(c=>c.marks>0&&(c.minutes>0||c.nea)));
  ok(`${t} AOs present`, spec.ao.length>=2&&spec.ao.every(a=>a.id&&a.text));
  ok(`${t} mark conventions`, spec.markConventions&&spec.markConventions.style&&spec.markConventions.commandWords.length>=5);
  ok(`${t} essay shapes if essay subject`, !spec.essaySubject||(spec.markConventions.essayShapes&&spec.markConventions.essayShapes.length>=3));
  const compIds=new Set(spec.components.map(c=>c.id));
  ok(`${t} topics reference real components`, spec.topics.every(tp=>compIds.has(tp.component)));
  const topicIds=new Set(spec.topics.map(tp=>tp.id)); ok(`${t} topic ids unique`, topicIds.size===spec.topics.length);
  for(const opt of spec.options){ ok(`${t} option ${opt.id} choices exist`, opt.from.every(f=>topicIds.has(f)), JSON.stringify(opt.from.filter(f=>!topicIds.has(f)))); ok(`${t} option ${opt.id} choose ≤ from`, opt.choose<=opt.from.length); }
  const optIds=new Set(spec.options.map(o=>o.id));
  ok(`${t} topic.option values valid`, spec.topics.every(tp=>tp.option===null||optIds.has(tp.option)));
  let ideas=0;
  for(const tp of spec.topics){
    ok(`${t} ${tp.id} has ideas`, Array.isArray(tp.ideas)&&tp.ideas.length>=2, String((tp.ideas||[]).length));
    for(const k of tp.ideas){ ideas++; ok(`${t} ${tp.id} ${k.code} complete`, k.code&&k.q&&k.idea&&k.content&&k.content.length>=30); }
    const codes=new Set(tp.ideas.map(k=>k.code)); ok(`${t} ${tp.id} codes unique`, codes.size===tp.ideas.length);
    ok(`${t} ${tp.id} caseStudies array`, Array.isArray(tp.caseStudies));
  }
  // every component has at least one topic
  for(const c of spec.components) ok(`${t} ${c.id} has topics or covers all`, c.coversAll||spec.topics.some(tp=>tp.component===c.id));
  return ideas;
}
const dir=require('path').join(__dirname,'..','src','specs'); let total=0;
for(const f of fs.readdirSync(dir).filter(f=>/\.js$/.test(f)&&!/test/.test(f))){ const m=require(path.join(dir,f)); for(const spec of Object.values(m)) total+=validate(spec); }
console.log(`key ideas indexed: ${total}`);
console.log(`PASSED: ${pass}`); fails.forEach(f=>console.log('FAILED: '+f));
console.log('-'.repeat(50)); console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN'); process.exit(fails.length?1:0);
