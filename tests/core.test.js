const C=require('../src/core.js');const {SPEC_H481}=require('../src/specs/ocr-h481.js');const {SPEC_9BS0,SPEC_9PL0}=require('../src/specs/edexcel-9bs0-9pl0.js');
const SPECS={[SPEC_H481.id]:SPEC_H481,[SPEC_9BS0.id]:SPEC_9BS0,[SPEC_9PL0.id]:SPEC_9PL0};
let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
const setup={student:'Matthew',examYear:2028,subjects:[
 {specId:'OCR-H481',options:{landscape:'1.1.1',globalSystems:'2.2.1',globalGovernance:'2.2.4',debates:['3.1','3.5']}},
 {specId:'EDX-9BS0',options:{}},
 {specId:'EDX-9PL0',options:{nonCore:'2.5c',comparative:'3A'}}]};
/* setup → nodes */
const s=C.newState(setup,SPECS);
const geo=Object.values(s.nodes).filter(n=>n.spec==='OCR-H481'),bus=Object.values(s.nodes).filter(n=>n.spec==='EDX-9BS0'),pol=Object.values(s.nodes).filter(n=>n.spec==='EDX-9PL0');
ok('N1 geography resolves options: 1.1.1,1.2,2.1,2.2.1,2.2.4,3.1,3.5,4 = 8 topics',geo.length===8&&geo.some(n=>n.topic==='1.1.1')&&!geo.some(n=>n.topic==='1.1.2')&&geo.filter(n=>n.topic.startsWith('3.')).length===2,String(geo.length));
ok('N2 business has 4 themes',bus.length===4);
ok('N3 politics resolves feminism + USA',pol.some(n=>n.topic==='2.5c')&&!pol.some(n=>n.topic==='2.5a')&&pol.some(n=>n.topic==='3A')&&!pol.some(n=>n.topic==='3B'));
/* weights */
const wG=C.topicWeights(SPEC_H481,setup.subjects[0].options);ok('W1 geography weights sum to 100',Math.abs(Object.values(wG).reduce((a,b)=>a+b,0)-100)<0.01);
ok('W1 debates carry 18 each',Math.abs(wG['3.1']-18)<0.01&&Math.abs(wG['3.5']-18)<0.01);
const wB=C.topicWeights(SPEC_9BS0,{});ok('W2 business synoptic P3 spread over themes; sums to 100',Math.abs(Object.values(wB).reduce((a,b)=>a+b,0)-100)<0.01&&Math.abs(wB.T1-(17.5+7.5))<0.01,JSON.stringify(wB));
const wP=C.topicWeights(SPEC_9PL0,setup.subjects[2].options);ok('W3 politics sums to 100',Math.abs(Object.values(wP).reduce((a,b)=>a+b,0)-100)<0.01);
/* mastery rules */
const id=C.nodeId('OCR-H481','1.2');
C.recordResult(s,id,{taught:true},'2026-09-10');ok('M1 taught → Learning',s.nodes[id].state==='Learning');
C.recordResult(s,id,{recall:{correct:7,total:10}},'2026-09-12');ok('M2 7/10 stays Learning',s.nodes[id].state==='Learning');
C.recordResult(s,id,{essayLevel:3},'2026-09-14');ok('M3 essay at level 3 → Fluent',s.nodes[id].state==='Fluent');
C.recordResult(s,id,{examStandard:true,allCorrect:true,interleaved:true},'2026-09-20');ok('M4 one pass not yet Secure',s.nodes[id].state==='Fluent');
C.recordResult(s,id,{examStandard:true,allCorrect:true},'2026-10-15');ok('M5 second pass ≥21 days later → Secure',s.nodes[id].state==='Secure');
C.recordWrong(s,id,'ANALYSIS','2026-10-16');ok('M6 wrong in Secure → Fluent',s.nodes[id].state==='Fluent');
C.recordWrong(s,id,'KNOWLEDGE-GAP','2026-10-17');ok('M7 knowledge gap → Learning',s.nodes[id].state==='Learning');
s.nodes[id].state='Fluent';s.nodes[id].lastPractised='2026-08-01';ok('M8 decay after 8 weeks',C.applyDecay(s,'2026-10-01').includes(id)&&s.nodes[id].state==='Learning');
/* cards */
const card={node:id,front:'Store: oceans',back:'~97% of water',due:null};C.scheduleCard(card,true,'2026-09-10');ok('K1 correct card doubles interval',card.ease===2&&card.due==='2026-09-12');C.scheduleCard(card,false,'2026-09-12');ok('K2 wrong resets to 1 day',card.ease===1&&card.due==='2026-09-13');
s.cards.c1=card;ok('K3 due cards on the day',C.dueCards(s,'2026-09-13').length===1&&C.dueCards(s,'2026-09-12').length===0);
/* scheduling */
const s2=C.newState(setup,SPECS);
const term=C.buildSession(s2,SPECS,'2026-09-15');ok('S1 term session has cards, new, log',term.steps[0].kind==='cards'&&term.steps.some(x=>x.kind==='new')&&term.steps[term.steps.length-1].kind==='log');
ok('S1 no essay in term midweek with nothing fluent',!term.steps.some(x=>x.kind==='essay'));
const hol=C.buildSession(s2,SPECS,'2026-10-26');ok('S2 holiday new step is 60 min',hol.steps.find(x=>x.kind==='new').minutes===60);
const busId=C.nodeId('EDX-9BS0','T1');s2.nodes[busId].state='Fluent';s2.nodes[busId].lastPractised='2026-10-01';
const hol2=C.buildSession(s2,SPECS,'2026-10-27');ok('S3 holiday adds a timed essay from a fluent essay-subject topic',hol2.steps.some(x=>x.kind==='essay'&&x.nodes[0]===busId));
ok('S4 review step appears for a stale fluent node',hol2.steps.some(x=>x.kind==='review'&&x.nodes[0]===busId));
const prio=C.subjectPriority(s2,SPECS,'2026-10-27');ok('S5 priority ranks all three subjects',prio.length===3&&prio[0].score>=prio[2].score);
/* prediction */
const p0=C.predictSubject(s2,SPEC_H481,setup.subjects[0].options);ok('P1 fresh geography predicts U with estimated bounds',p0.grade==='U'&&p0.estimatedBounds);
for(const n of Object.values(s2.nodes))if(n.spec==='OCR-H481')n.state='Secure';
const p1=C.predictSubject(s2,SPEC_H481,setup.subjects[0].options);ok('P2 all secure → 85% → A*',p1.pct===85&&p1.grade==='A*',JSON.stringify(p1));
s2.boundaries['OCR-H481']={'A*':86,A:76,B:66,C:56,D:46,E:36};const p2=C.predictSubject(s2,SPEC_H481,setup.subjects[0].options);ok('P3 real boundaries override estimates',p2.grade==='A'&&!p2.estimatedBounds);
s2.papers.push({spec:'OCR-H481',component:'C1',score:60,total:66,date:'2027-05-01'});const p3=C.predictSubject(s2,SPEC_H481,setup.subjects[0].options);ok('P4 paper blends and narrows band',p3.papersUsed===1&&(p3.high-p3.low)<(p2.high-p2.low));
/* report */
s2.setup=setup;s2.dayHours={'2026-10-25':2};s2.errors=[{date:'2026-10-25',mode:'EVALUATION',node:busId}];s2.essays=[{date:'2026-10-26',level:3,node:busId}];
const r=C.weeklyReport(s2,SPECS,'2026-10-27');ok('R1 report covers all subjects and essays',/Geography \(OCR\)/.test(r.text)&&/Business/.test(r.text)&&/Politics/.test(r.text)&&/Essays marked: 1/.test(r.text)&&/EVALUATION/.test(r.text));
console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
