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

/* ---------- mistakes steer the review order and its wording ---------- */
{
const su=C.newState(setup,SPECS);const T='2026-09-12';const a=C.nodeId('OCR-H481','1.2'),b=C.nodeId('OCR-H481','2.1');
for(const id of [a,b]){su.nodes[id].state='Fluent';su.nodes[id].lastPractised='2026-08-20';}
su.errors.push({date:'2026-09-10',node:b,mode:'APPLICATION',paper:'p1',q:'2',retestDue:'2026-09-17'},{date:'2026-09-10',node:b,mode:'APPLICATION',paper:'p1',q:'4',retestDue:'2026-09-17'},{date:'2026-09-11',node:a,mode:'RECALL-GAP'});
const ua=C.errorUrgency(su,a,T),ub=C.errorUrgency(su,b,T);
ok('U1 a paper mistake with a re-test pending weighs three, a practice mistake one; the dominant mode is named',ua.urgency===1&&ua.mode==='RECALL-GAP'&&ub.urgency===6&&ub.count===2&&ub.mode==='APPLICATION',JSON.stringify([ua,ub]));
const sess=C.buildSession(su,SPECS,T);const revs=sess.steps.filter(x=>x.kind==='review');
ok('U2 the room with the paper mistakes is reviewed first, and the step says why in the failure mode’s own remedy',revs.length>=2&&revs[0].nodes[0]===b&&revs[0].mode==='APPLICATION'&&/2 mistakes here lately, mostly APPLICATION: Every paragraph must name/.test(revs[0].detail)&&revs[1].nodes[0]===a&&/1 mistake here lately, mostly RECALL-GAP/.test(revs[1].detail),JSON.stringify(revs.map(r=>[r.nodes[0],r.detail.slice(0,60)])));
ok('U3 a mistake older than thirty days or already cleared no longer pulls',(()=>{su.errors[0].resolved=true;su.errors[1].date='2026-07-01';return C.errorUrgency(su,b,T).urgency===0;})());
}

/* ---- support: the profile, sentences for the reader, the prompter, time, chunking, usage ---- */
{ const sup=C.normaliseSupport(undefined);
 ok('S1 a missing support profile normalises to every aid off, reader speed 0.85, prompter at 5 minutes, chunk level 2, no extra time',sup.reader===false&&sup.readerRate===0.85&&sup.lineFocus===0&&sup.spacing===false&&sup.readCoach===false&&sup.dictate===false&&sup.prompter===false&&sup.prompterMinutes===5&&sup.chunk===false&&sup.chunkLevel===2&&sup.calm===false&&sup.literal===false&&sup.timer===false&&sup.extra===0&&sup.breaks===false,JSON.stringify(sup));
 const p=C.normaliseSupport({reader:true,readerRate:9,rateSet:true,lineFocus:4,prompterMinutes:1,chunkLevel:7,extra:30,calm:'yes'});
 ok('S1 a partial profile keeps what it has and clamps the rest to the allowed values',p.reader===true&&p.readerRate===1.4&&p.lineFocus===0&&p.prompterMinutes===5&&p.chunkLevel===2&&p.extra===0&&p.calm===true&&p.literal===false,JSON.stringify(p));
 ok('S1 speed clamps low too, and every allowed value survives',C.normaliseSupport({readerRate:0.2,rateSet:true}).readerRate===0.7&&C.normaliseSupport({readerRate:1.2,rateSet:true}).readerRate===1.2&&C.normaliseSupport({lineFocus:3}).lineFocus===3&&C.normaliseSupport({lineFocus:5}).lineFocus===5&&C.normaliseSupport({prompterMinutes:8}).prompterMinutes===8&&C.normaliseSupport({chunkLevel:3}).chunkLevel===3&&C.normaliseSupport({extra:50}).extra===50);
 const sent=C.splitSentences('The mean is 2.5 km. Is that right? Yes! See 1.2.3 and e.g. Fig. 2 now.');
 ok('S2 sentences split on full stops, question and exclamation marks, not on decimals, codes or abbreviations',JSON.stringify(sent)===JSON.stringify(['The mean is 2.5 km.','Is that right?','Yes!','See 1.2.3 and e.g. Fig. 2 now.']),JSON.stringify(sent));
 ok('S2 empty text gives no sentences; a line without a stop is one sentence',C.splitSentences('   ').length===0&&JSON.stringify(C.splitSentences('Carbon stores'))===JSON.stringify(['Carbon stores']));
 const scene={view:'rooms',subject:'Geography',topic:'Coasts',station:'practise',item:{kind:'question',n:2,of:4}};
 const lines=[0,1,2,3,4,5].map(i=>C.prompterLine('Matthew',scene,i,5));
 ok('S3 the prompter uses the student’s name or the question number, rotates, and never offers content',lines.every(l=>/Matthew|question 2/.test(l))&&new Set(lines).size>=3&&lines.every(l=>!/answer|hint|because|should|try/i.test(l)),lines.join(' | '));
 const l1=C.prompterLine('Matthew',{view:'rooms',subject:'Geography',topic:'Coasts',station:'lesson'},1,5);
 ok('S3 outside a question it still names the student and the place',/Matthew/.test(l1)&&/lesson/.test(l1),l1);
 ok('S4 extra time: 25% on 90 minutes is 113, 50% on 30 is 45, none leaves it alone',C.timerMinutes(90,25)===113&&C.timerMinutes(30,50)===45&&C.timerMinutes(30,0)===30&&C.timerMinutes(30)===30);
 ok('S4 a question’s minutes follow the paper’s pace, or 1.2 a mark without a paper, never under 1',C.marksToMinutes(6,90,66)===8&&C.marksToMinutes(10)===12&&C.marksToMinutes(1,90,66)===1&&C.marksToMinutes(0)===1);
 const step={kind:'review',title:'Review: Geography — Coasts',minutes:15,nodes:['OCR-H481|1.2']};
 const f1=C.chunkFallback(step,1),f2=C.chunkFallback(step,2),f3=C.chunkFallback(step,3);
 ok('S5 the fallback breakdown has 3–4 steps at level 1, 5–7 at level 2, 8–12 at level 3',f1.length>=3&&f1.length<=4&&f2.length>=5&&f2.length<=7&&f3.length>=8&&f3.length<=12,[f1.length,f2.length,f3.length].join());
 ok('S5 every step is a short phrase with whole minutes, and the minutes add up to the step’s',[f1,f2,f3].every(f=>f.every(x=>x.text.split(/\s+/).length<=14&&Number.isInteger(x.minutes)&&x.minutes>=1)&&f.reduce((a,b)=>a+b.minutes,0)===15),JSON.stringify(f3));
 ok('S5 cards, essays and re-tests get their own sequences',/card/i.test(C.chunkFallback({kind:'cards',title:'Recall cards',minutes:10},2)[0].text)&&/question|command/i.test(C.chunkFallback({kind:'essay',title:'Essay',minutes:40},2).map(x=>x.text).join(' '))&&/re-test|question/i.test(C.chunkFallback({kind:'retest',title:'Re-test',minutes:15},1).map(x=>x.text).join(' ')));
 const log={supportLog:{'2026-09-12':{reader:7.5,dictations:2,prompts:3,breaks:1},'2026-09-08':{reader:4.5,dictations:1,prompts:1,breaks:1},'2026-08-01':{reader:99,dictations:9,prompts:9,breaks:9}}};
 ok('S6 the support usage line sums the last seven days only',C.supportUsageLine(log,'2026-09-12')==='Support this week: reader 12 min · dictated 3 times · 4 prompts · 2 rest breaks',C.supportUsageLine(log,'2026-09-12'));
 ok('S6 singulars are right, and nothing used means nothing said',C.supportUsageLine({supportLog:{'2026-09-12':{dictations:1,prompts:1,breaks:1}}},'2026-09-12')==='Support this week: dictated once · 1 prompt · 1 rest break'&&C.supportUsageLine({supportLog:{}},'2026-09-12')===''&&C.supportUsageLine({},'2026-09-12')==='');
 ok('S7 the nudge prompt takes an extra block for the register',/LITERAL RULES HERE/.test(C.nudgePrompt(s,SPECS,'2026-09-12','LITERAL RULES HERE'))&&!/LITERAL RULES HERE/.test(C.nudgePrompt(s,SPECS,'2026-09-12')));
}

/* the tutor voice: a profile field that only takes the two British voices, and the spoken form of a sentence */
{ ok('TV1 the tutor voice is off by default and only Athena or Helios can be chosen',C.normaliseSupport(undefined).tutorVoice===''&&C.normaliseSupport({tutorVoice:'athena'}).tutorVoice==='athena'&&C.normaliseSupport({tutorVoice:'helios'}).tutorVoice==='helios'&&C.normaliseSupport({tutorVoice:'zeus'}).tutorVoice===''&&C.normaliseSupport({tutorVoice:3}).tutorVoice==='');
  ok('TV1 the two voices are listed with plain labels',C.TUTOR_VOICES.length===2&&C.TUTOR_VOICES[0][0]==='athena'&&/British/.test(C.TUTOR_VOICES[0][1])&&C.TUTOR_VOICES[1][0]==='helios');
  ok('TV2 the spoken form only swaps symbols a voice would mangle, and leaves everything else exactly as written',C.speakable('Speed = distance ÷ time, so 3 × 4 → 12 at ≥ 20 °C.')==='Speed equals distance divided by time, so, 3 times 4, gives 12 at at least 20 degrees C.'&&C.speakable('Section 3.1.2 covers H2O and 45%.')==='Section 3.1.2 covers H2O and 45 percent.'&&C.speakable('  spaced   out ')==='spaced out'&&C.speakable('a ≤ b')==='a at most b');
}

/* predicted grades gated to the last year; the trend before that */
{const st=JSON.parse(JSON.stringify(s2));st.transitions=[];st.practice=[];st.papers=[];
 ok('T1 grades are shown only inside the last 365 days before the exam',C.gradesShown({examYear:2028},'2026-09-13')===false&&C.gradesShown({examYear:2027},'2026-09-13')===true&&C.gradesShown({examYear:2028},'2027-06-01')===true&&C.gradesShown({},'2026-09-13')===false);
 ok('T2 no work in a fortnight is flat',C.subjectTrend(st,SPEC_H481,'2026-09-13')==='flat');
 st.transitions.push({date:'2026-09-01',node:'OCR-H481|1.2',from:'Unassessed',to:'Learning'});ok('T2 a room whose state rose in the last fortnight is up',C.subjectTrend(st,SPEC_H481,'2026-09-13')==='up');
 ok('T2 the same rise a month ago is flat again',C.subjectTrend(st,SPEC_H481,'2026-10-13')==='flat');
 st.transitions=[{date:'2026-09-10',node:'OCR-H481|1.2',from:'Fluent',to:'Learning'}];ok('T2 a fall is not progress',C.subjectTrend(st,SPEC_H481,'2026-09-13')==='flat');
 st.practice.push({date:'2026-09-12',node:'OCR-H481|1.2',ok:true});ok('T2 a right answer in practice is up',C.subjectTrend(st,SPEC_H481,'2026-09-13')==='up');
 ok('T2 another subject’s work does not count',C.subjectTrend(st,SPEC_9PL0,'2026-09-13')==='flat');
 st.practice=[];st.papers.push({spec:'EDX-9PL0',score:10,total:30,date:'2026-09-05'});ok('T2 a paper sat this fortnight is up for its subject',C.subjectTrend(st,SPEC_9PL0,'2026-09-13')==='up');}


/* notation: one written form, and what the voice says */
ok('NT1 carets become superscripts: digits, minus, letters, bracketed products and fractions',C.notation('x^2 + 10^-3 + e^(kx) + x^(1/2) + a^{m+n} + 2^x + f(x)^2')==='x² + 10⁻³ + eᵏˣ + x¹⁄² + aᵐ⁺ⁿ + 2ˣ + f(x)²',C.notation('x^2 + 10^-3 + e^(kx) + x^(1/2) + a^{m+n} + 2^x + f(x)^2'));
ok('NT1 underscores become chemical and index subscripts, and identifiers are left alone',C.notation('H_2O, CO_2, C_6H_12O_6, x_1, x_12')==='H₂O, CO₂, C₆H₁₂O₆, x₁, x₁₂'&&C.notation('SPEC_4MA1 and some_var1')==='SPEC_4MA1 and some_var1',C.notation('SPEC_4MA1 and some_var1'));
ok('NT1 a power with no superscript form is left as written, and text without notation is untouched',C.notation('e^q and 58e^(−0.04t)')==='e^q and 58e^(−0.04t)'&&C.notation('The perfect tense: ich habe gekauft')==='The perfect tense: ich habe gekauft');
ok('NT1 the deep walker reaches every string and leaves numbers alone',JSON.stringify(C.notationDeep({a:'x^2',b:[{c:'H_2O',n:3}]}))===JSON.stringify({a:'x²',b:[{c:'H₂O',n:3}]}));
ok('NT2 the voice says squared, cubed and to the power of, and reads subscripts as digits',C.speakable('v^2 = u^2 + 2as; V = x³; 10^-3; e^(kx); x^(1/2); H_2O')==='v squared equals u squared plus 2 ay s; V equals x cubed; 10 to the power of minus 3; e to the power of k x; x to the power of 1 over 2; H 2 O',C.speakable('v^2 = u^2 + 2as; V = x³; 10^-3; e^(kx); x^(1/2); H_2O'));
ok('NT2 the voice names the symbols a voice would mangle',C.speakable('√16 ≠ 5, ΔH ≈ ±5 kJ, 25 °C, θ = π/2, ½')==='the square root of 16 is not equal to 5, delta H is approximately plus or minus 5 kJ, 25 degrees C, theta equals pi over 2, a half',C.speakable('√16 ≠ 5, ΔH ≈ ±5 kJ, 25 °C, θ = π/2, ½'));

/* levelled model answers: which sentences each level adds */
{const L=[{level:1,answer:'The rate rises. It then levels off.'},{level:2,answer:'The rate rises. Light is the limiting factor at first. It then levels off. Another factor limits it.'},{level:3,answer:'The rate rises. Light is the limiting factor at first. It then levels off. This is because carbon dioxide runs short. Another factor limits it.'}];
const tags=k=>C.levelWords(L,k).map(t=>t.tag).join('');
ok('ML1 level 1 is all base words; level 2 tags only the sentences it added; level 3 tags its own sentences 3 and keeps level 2’s as 2',tags(1)==='0000000'&&tags(2)==='000'+'2222222'+'0000'+'2222'&&tags(3)==='000'+'2222222'+'0000'+'3333333'+'2222',tags(1)+' '+tags(2)+' '+tags(3));
ok('ML1 the words come back in the level’s own order so the answer reads as written',C.levelWords(L,3).map(t=>t.w).join(' ')===L[2].answer);
ok('ML1 a two-level answer has no level 3 and a missing level reads as empty',C.levelWords(L.slice(0,2),2).filter(t=>t.tag===3).length===0&&C.levelWords([L[0]],3).length===0);}
/* the voice on expressions, units and formulae */
ok('NT3 an expression sits between pauses, its variables are spelled and = + are said; units inside it are words',C.speakable('Use F = ma, then E = ½mv² and KE = 0.5 × 2 × 3² = 9 J.')==='Use, F equals m ay, then, E equals a half m v squared, and, K E equals 0.5 times 2 times 3 squared equals 9 J.'&&C.speakable('Density = mass ÷ volume = 24 g ÷ 8 cm³ = 3 g/cm³.')==='Density equals mass divided by volume equals 24 g divided by 8 centimetres cubed equals 3 grams per centimetre cubed.',C.speakable('Use F = ma, then E = ½mv² and KE = 0.5 × 2 × 3² = 9 J.')+' | '+C.speakable('Density = mass ÷ volume = 24 g ÷ 8 cm³ = 3 g/cm³.'));
ok('NT3 units, ranges, e.g., percent and the minus sign are said; either/or and and/or are left as words',C.speakable('The car travels at 3 m/s for 1–2 minutes, e.g. 5 × 10⁻³ kg, i.e. 4 − 1 = 3.')==='The car travels at 3 metres per second for 1 to 2 minutes, for example, 5 times 10 to the power of minus 3 kg, that is, 4 minus 1 equals 3.'&&C.speakable('It is either/or (see and/or).')==='It is either/or (see and/or).',C.speakable('The car travels at 3 m/s for 1–2 minutes, e.g. 5 × 10⁻³ kg, i.e. 4 − 1 = 3.'));
ok('NT3 a chemical formula is spelled letter by letter with its subscripts and charge',C.speakable('Na⁺ and Cl⁻ form NaCl, and SO₄²⁻ carries two charges.')==='N a plus and C l minus form NaCl, and S O 4 2 minus carries two charges.'&&C.speakable('C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O')==='C 6 H 12 O 6 plus 6 O 2, gives, 6 C O 2 plus 6 H 2 O',C.speakable('Na⁺ and Cl⁻ form NaCl, and SO₄²⁻ carries two charges.')+' | '+C.speakable('C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O'));
ok('NT4 brackets are said, an implied product is times and the variable a is never the article',C.speakable('(a−b)(a+b) = a² − b²')==='open bracket ay minus b close bracket times open bracket ay plus b close bracket equals ay squared minus b squared'&&C.speakable('Check: (−9)² + 3(−9) − 54 = 0.')==='Check: open bracket minus 9 close bracket squared plus 3 times open bracket minus 9 close bracket minus 54 equals 0.',C.speakable('(a−b)(a+b) = a² − b²'));
ok('NT4 the reading speed is 0.85 for everyone until the student moves it, and a profile saved at the old 1.0 default is moved too',C.normaliseSupport({}).readerRate===0.85&&C.normaliseSupport({readerRate:1}).readerRate===0.85&&C.normaliseSupport({readerRate:1.2,rateSet:true}).readerRate===1.2&&C.SUPPORT_DEFAULTS.readerRate===0.85);
ok('NT3 a sentence with notation is marked for slower reading; plain prose is not',C.mathsHeavy('So F = ma.')&&C.mathsHeavy('The area is 3 cm².')&&!C.mathsHeavy('The rate rises then levels off.')&&!C.mathsHeavy('Section 3.1.2 covers 45%.'));
console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
