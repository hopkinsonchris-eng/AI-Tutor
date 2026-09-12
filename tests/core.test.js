const C=require('../src/core.js');const {SPEC_H481}=require('../src/specs/ocr-h481.js');const {SPEC_9BS0}=require('../src/specs/edexcel-9bs0.js');const {SPEC_9PL0}=require('../src/specs/edexcel-9pl0.js');
const SPECS={[SPEC_H481.id]:SPEC_H481,[SPEC_9BS0.id]:SPEC_9BS0,[SPEC_9PL0.id]:SPEC_9PL0};
let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
const setup={student:'Matthew',examYear:2028,subjects:[
 {specId:'OCR-H481',options:{landscape:'1.1.1',globalSystems:'2.2.1',globalGovernance:'2.2.4',debates:['3.1','3.5']}},
 {specId:'EDX-9BS0',options:{}},
 {specId:'EDX-9PL0',options:{nonCore:'C2.Feminism',comparative:'3A'}}]};
/* setup → nodes */
const s=C.newState(setup,SPECS);
const geo=Object.values(s.nodes).filter(n=>n.spec==='OCR-H481'),bus=Object.values(s.nodes).filter(n=>n.spec==='EDX-9BS0'),pol=Object.values(s.nodes).filter(n=>n.spec==='EDX-9PL0');
ok('N1 geography resolves options: 1.1.1,1.2,2.1,2.2.1,2.2.4,3.1,3.5,4,2e = 9 topics',geo.length===9&&geo.some(n=>n.topic==='2e')&&geo.some(n=>n.topic==='1.1.1')&&!geo.some(n=>n.topic==='1.1.2')&&geo.filter(n=>n.topic.startsWith('3.')).length===2,String(geo.length));
ok('N2 business has 20 topics (every sub-section of the four themes)',bus.length===20);
ok('N3 politics resolves feminism + the USA route (six topics, none of Global)',pol.some(n=>n.topic==='C2.Feminism')&&!pol.some(n=>n.topic==='C2.Anarchism')&&pol.filter(n=>n.topic.startsWith('3A.')).length===6&&!pol.some(n=>n.topic.startsWith('3B.')),String(pol.length));
/* weights */
const wG=C.topicWeights(SPEC_H481,setup.subjects[0].options);ok('W1 geography weights sum to 100',Math.abs(Object.values(wG).reduce((a,b)=>a+b,0)-100)<0.01);
ok('W1 debates carry 18 each',Math.abs(wG['3.1']-18)<0.01&&Math.abs(wG['3.5']-18)<0.01);
const wB=C.topicWeights(SPEC_9BS0,{});ok('W2 business synoptic P3 spread over every topic; sums to 100',Math.abs(Object.values(wB).reduce((a,b)=>a+b,0)-100)<0.01&&Math.abs(wB['1.1']-(35/9+30/20))<0.01,JSON.stringify(wB));
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
const busId=C.nodeId('EDX-9BS0','1.1');s2.nodes[busId].state='Fluent';s2.nodes[busId].lastPractised='2026-10-01';
const hol2=C.buildSession(s2,SPECS,'2026-10-27');ok('S3 holiday adds a timed essay from a fluent essay-subject topic',hol2.steps.some(x=>x.kind==='essay'&&x.nodes[0]===busId));
ok('S4 review step appears for a stale fluent node',hol2.steps.some(x=>x.kind==='review'&&x.nodes[0]===busId));
/* several courses share each day: new topics come from more than one subject, and the lead subject rotates */
const s4=C.newState(setup,SPECS);const t1=C.buildSession(s4,SPECS,'2026-09-15'),t2=C.buildSession(s4,SPECS,'2026-09-16'),h1=C.buildSession(s4,SPECS,'2026-10-26');
const subjOf=st=>s4.nodes[st.nodes[0]].spec;const news=st=>st.steps.filter(x=>x.kind==='new');
ok('S6 a term day with nothing due opens new topics in two different subjects',news(t1).length===2&&subjOf(news(t1)[0])!==subjOf(news(t1)[1]),JSON.stringify(news(t1).map(subjOf)));
ok('S6 the lead subject rotates from one day to the next while priorities tie',subjOf(news(t1)[0])!==subjOf(news(t2)[0]),subjOf(news(t1)[0])+' / '+subjOf(news(t2)[0]));
ok('S6 a holiday day opens new topics in all three subjects',news(h1).length===3&&new Set(news(h1).map(subjOf)).size===3);
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
/* three-panel GUI: streak, fallback nudge, nudge prompt, per-topic links */
s2.dayHours={'2026-10-25':1,'2026-10-26':0.5,'2026-10-27':0.2};ok('G1 streak counts consecutive study days ending today',C.streakDays(s2,'2026-10-27')===3,String(C.streakDays(s2,'2026-10-27')));
ok('G1 a day not yet studied today keeps the streak; a gap breaks it; nothing is 0',C.streakDays({dayHours:{'2026-10-25':1,'2026-10-26':1}},'2026-10-27')===2&&C.streakDays({dayHours:{'2026-10-24':1,'2026-10-26':1}},'2026-10-27')===1&&C.streakDays({dayHours:{}},'2026-10-27')===0);
const nf=C.nudgeFallback(s2,SPECS,'2026-10-27');ok('G2 the fallback nudge names the first undone session step and points at its room',/Recall cards|Review|New|Timed essay/.test(nf.text)&&nf.text.length<220&&(nf.node===null||!!s2.nodes[nf.node])&&typeof nf.station==='string',JSON.stringify(nf));
s2.doneToday={'2026-10-27':[0]};const nf2=C.nudgeFallback(s2,SPECS,'2026-10-27');ok('G2 a step already done is skipped',nf2.text!==nf.text);
const np=C.nudgePrompt(s2,SPECS,'2026-10-27');ok('G3 the nudge prompt carries the session, mastery, errors and due cards, and asks for JSON with a node id and station',/EVALUATION/.test(np)&&/Business/.test(np)&&/"node"/.test(np)&&/"station"/.test(np)&&np.includes(busId)&&/best thing to do now/.test(np));
const links=C.topicLinks(SPEC_H481,SPEC_H481.topics[3]);ok('G4 every topic gets a Bitesize search link and never a bare YouTube search — videos are found and checked by the Worker instead',links.length>=1&&!links.some(l=>/youtube\.com\/results/.test(l.url))&&links.some(l=>/bbc\.co\.uk\/bitesize\/search/.test(l.url))&&links.every(l=>/^https:\/\//.test(l.url)&&l.t&&l.kind),JSON.stringify(links));
const withHubs=Object.assign({},SPEC_H481,{resources:{hubs:[{name:'Physics & Maths Tutor',url:'https://www.physicsandmathstutor.com/geography-revision/a-level-ocr/',kind:'notes'}]}});const topicWithLinks=Object.assign({},SPEC_H481.topics[3],{links:[{t:'Carbon cycle video',url:'https://www.youtube.com/watch?v=abc',kind:'video'}]});
const l2=C.topicLinks(withHubs,topicWithLinks);ok('G4 the topic’s own links come first, then the course’s hub pages, then the searches',l2[0].url==='https://www.youtube.com/watch?v=abc'&&l2[1].url==='https://www.physicsandmathstutor.com/geography-revision/a-level-ocr/'&&l2.length===3,JSON.stringify(l2.map(l=>l.url)));
const dAll={rooms:{'R|1':{count:3,latest:[{id:'a',kind:'photo',at:'2026-10-06T09:00:00Z'},{id:'b',kind:'link',at:'2026-10-24T09:00:00Z'},{id:'c',kind:'note',at:'2026-08-28T09:00:00Z'}]}}};
const rs=C.deskResurface(dAll,'2026-10-27');ok('D7 desktop items resurface at 7, 21 and 60 days and not otherwise',rs.length===2&&rs.map(x=>x.item.id).join()==='a,c'&&rs[0].age===21&&rs[1].age===60,JSON.stringify(rs));
/* the drawn desk: exam countdown and pile heights */
ok('X1 days to the exam count to the first day of the exam term in the chosen year',C.daysToExam({examYear:2028},'2026-09-11')===584&&C.daysToExam({examYear:2028},'2028-04-17')===0&&C.daysToExam({examYear:2028},'2028-05-01')===0&&C.daysToExam({},'2026-09-11')===null,String(C.daysToExam({examYear:2028},'2026-09-11')));
ok('X1 a year the calendar does not reach falls back to mid-May of that year',C.daysToExam({examYear:2029},'2029-05-01')===10);
const bank=[{d:1},{d:1},{d:1},{d:2},{d:2},{d:3}];const prac=[{node:'R|1',ok:true,d:1},{node:'R|1',ok:true,d:1},{node:'R|1',ok:false,d:1},{node:'R|2',ok:true,d:2},{node:'R|1',ok:true},{node:'R|1',ok:true,d:3},{node:'R|1',ok:true,d:3}];
const pc=C.pileCounts(bank,prac,'R|1');ok('X2 a pile holds the bank minus the questions got right there in this room, never below one sheet while the bank has any',pc.map(x=>x.left).join()==='1,2,1'&&pc.map(x=>x.bank).join()==='3,2,1'&&pc.map(x=>x.done).join()==='2,0,2',JSON.stringify(pc));
ok('X2 no bank, no sheets',C.pileCounts([],prac,'R|1').map(x=>x.left).join()==='0,0,0'&&C.pileCounts(undefined,undefined,'R|1').every(x=>x.left===0));
/* ---------- real papers: damped moves, errors, re-tests, priority, boundaries ---------- */
{
const sp=C.newState(setup,SPECS);const T='2026-09-12';const g=(tid)=>sp.nodes[C.nodeId('OCR-H481',tid)];
g('1.2').state='Secure';g('2.1').state='Fluent';g('2.2.1').state='Learning';g('3.1').state='Fluent';g('3.5').state='Learning';
const paper={id:'p1',spec:'OCR-H481',series:'2025-06',seriesName:'June 2025',paper:'01',component:'C1',name:'Paper 1',total:66,questions:[
 {q:'1',marks:10,awarded:4,topic:'1.2',attempted:true,failureMode:'ANALYSIS',comment:'Chains of reasoning stop after one link.',confidence:'sure'},
 {q:'2',marks:8,awarded:8,topic:'2.1',attempted:true},
 {q:'3',marks:6,awarded:6,topic:'2.2.1',attempted:true},
 {q:'4',marks:12,awarded:7,codes:['3.1.a'],attempted:true,failureMode:'EVALUATION',comment:'No judgement.'},
 {q:'5',marks:8,awarded:0,topic:'3.5',attempted:false},
 {q:'6',marks:6,awarded:0,topic:'2e',legibility:'unreadable',attempted:true}]};
ok('P0 a question names its topic directly, or by a code that only one topic carries; an unknown code is null',C.questionTopic(SPEC_H481,{topic:'1.2'})==='1.2'&&C.questionTopic(SPEC_H481,{codes:['3.1.a']})==='3.1'&&C.questionTopic(SPEC_H481,{codes:['1.a']})===null,String(C.questionTopic(SPEC_H481,{codes:['1.a']})));
const pt=C.paperTopics(SPEC_H481,paper);
ok('P1 marks roll up by topic and an unreadable answer earns nothing but keeps its marks available',pt.find(x=>x.topic==='2e').awarded===0&&pt.find(x=>x.topic==='2e').marks===6&&pt.find(x=>x.topic==='1.2').awarded===4,JSON.stringify(pt));
const moves=C.applyPaper(sp,SPEC_H481,paper,T);
ok('P2 below 70% drops one state and only one: Secure → Fluent (1.2 at 40%), Fluent → Learning (3.1 at 58%), Learning stays (3.5 at 0%)',g('1.2').state==='Fluent'&&g('3.1').state==='Learning'&&g('3.5').state==='Learning',JSON.stringify(moves));
ok('P2 full marks on at least four marks lifts Learning → Fluent (2.2.1) and is a fluent pass for a Fluent room (2.1)',g('2.2.1').state==='Fluent'&&g('2.1').state==='Fluent'&&g('2.1').fluentPasses.length===1);
ok('P2 an untouched room becomes Learning when a paper reaches it (2e was Unassessed, unreadable)',g('2e').state==='Learning'&&moves.find(m=>m.topic==='2e').before==='Unassessed');
const errs=sp.errors.filter(e=>e.paper==='p1');
ok('P3 every lost-mark question logs one error with its failure mode, paper reference and a re-test date a week on; unreadable and full-mark questions do not',errs.length===3&&errs.every(e=>e.retestDue==='2026-09-19')&&errs.some(e=>e.q==='1'&&e.mode==='ANALYSIS'&&/Q1 · Paper 1 · June 2025/.test(e.ref))&&errs.some(e=>e.q==='5'&&e.mode==='KNOWLEDGE-GAP'),JSON.stringify(errs.map(e=>[e.q,e.mode])));
ok('P3 nothing is due for re-test before the week is up',C.retestQueue(sp,'2026-09-18').length===0&&C.retestQueue(sp,'2026-09-19').length===3);
const pr=C.paperPriority(sp,SPEC_H481,paper,setup.subjects[0].options);
ok('P4 the report orders topics by marks lost × weight: 3.5 (8 lost, 18%) leads 3.1 (5 lost, 18%), then 1.2 (6 lost, 11%); full-mark topics sit last',pr[0].topic==='3.5'&&pr[1].topic==='3.1'&&pr[2].topic==='1.2'&&pr[pr.length-1].lost===0,JSON.stringify(pr.map(x=>[x.topic,x.lost,Math.round(x.priority*100)/100])));
const e1=errs.find(e=>e.q==='1');
C.recordRetest(sp,e1,true,'2026-09-19');ok('P5 one clean pass is not enough: it comes back a week later',!e1.resolved&&e1.retestDue==='2026-09-26'&&e1.passes===1);
C.recordRetest(sp,e1,true,'2026-09-26');ok('P5 two clean passes clear the error',e1.resolved===true&&!e1.retestDue);
const e5=errs.find(e=>e.q==='5');
C.recordRetest(sp,e5,false,'2026-09-19');C.recordRetest(sp,e5,false,'2026-09-26');ok('P5 a miss resets the passes and comes back in a week',e5.attempts===2&&e5.retestDue==='2026-10-03'&&!e5.relearn);
C.recordRetest(sp,e5,false,'2026-10-03');ok('P5 the third miss escalates to relearning: out of the queue, room to Learning',e5.relearn===true&&C.retestQueue(sp,'2026-10-20').every(e=>e!==e5)&&g('3.5').state==='Learning');
const sess=C.buildSession(sp,SPECS,'2026-09-22');const rt=sess.steps.find(x=>x.kind==='retest');
ok('P6 the daily plan carries a re-test step while paper questions are due, naming the rooms',rt&&/Re-test: 1 question/.test(rt.title)&&rt.nodes.includes(C.nodeId('OCR-H481','3.1')),JSON.stringify(sess.steps.map(x=>x.kind)));
const many=C.newState(setup,SPECS);for(let i=0;i<14;i++)many.errors.push({date:T,node:C.nodeId('OCR-H481','1.2'),mode:'APPLICATION',paper:'px',q:String(i),retestDue:'2026-09-19',attempts:0,passes:0});
ok('P6 the re-test queue is capped at ten questions',C.retestQueue(many,'2026-09-19').length===10);
ok('P7 grade from a series’ published boundaries works for 9–1 and A*–E labels and gives U below the lowest',C.gradeFromBoundaries(45,{9:78,7:64,5:45,4:36,1:10})==='5'&&C.gradeFromBoundaries(35,{9:78,7:64,5:45,4:36,1:10})==='1'&&C.gradeFromBoundaries(9,{9:78,1:10})==='U'&&C.gradeFromBoundaries(50,{'A*':60,A:50,E:20})==='A'&&C.gradeFromBoundaries(50,null)===null);
}

console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
