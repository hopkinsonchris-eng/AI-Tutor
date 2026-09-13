const G=require('../src/gen.js');const {SPEC_H481}=require('../src/specs/ocr-h481.js');const {SPEC_9PL0}=require('../src/specs/edexcel-9pl0.js');
let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
const t=G.topicOf(SPEC_H481,'1.2');const pt=G.topicOf(SPEC_9PL0,'C2.3');
/* prompts carry the anchoring */
const lp=G.lessonPrompt(SPEC_H481,t,'Matthew');
ok('G1 lesson prompt names board, code, topic',/OCR A level Geography \(H481\)/.test(lp)&&/1\.2 Earth/.test(lp));
ok('G1 lesson prompt lists every key idea code',t.ideas.every(i=>lp.includes(i.code+' — ')));
ok('G1 lesson prompt forbids copying spec wording',/Do not copy the specification wording/.test(lp));
const mp=G.markEssayPrompt(SPEC_9PL0,pt,'Evaluate the view that the Prime Minister is now presidential.',30,'',true);
ok('G2 marking prompt is levels-based and AO-aware',/levels against the assessment objectives/.test(mp)&&/AO1 Knowledge/.test(mp)&&/transcribe it faithfully/.test(mp));
ok('G2 marking prompt carries the board summary',mp.includes(SPEC_9PL0.markConventions.summary.slice(0,60)));
const cp=G.coachPrompt(SPEC_9PL0,pt,'Matthew','none','Matthew: help',true);
const np=G.weeklyNotePrompt(SPEC_H481,t,'Matthew','Ms Rowe','State: Fluent.\nHard questions (30 days): 1 right of 4, 6 hints.');ok('G10 the weekly note prompt names the coach and student, carries the log and asks for one short post-it as JSON',/You are Ms Rowe, Matthew/.test(np)&&/1 right of 4, 6 hints/.test(np)&&/at most 14 words/.test(np)&&/\{"text":"\.\.\."\}/.test(np));
ok('G10 the coach prompt takes the coach’s name',/You are Ms Rowe, a Socratic tutor/.test(G.coachPrompt(SPEC_9PL0,pt,'Matthew','none','',false,'Ms Rowe'))&&/You are Coach, a Socratic/.test(cp));
ok('G3 coach prompt: no model essay, teaching mode stages',/never write a model essay/.test(cp)&&/TEACHING MODE/.test(cp)&&/Refer to the student as Matthew/.test(cp));
const eq=G.essayQuestionPrompt(SPEC_H481,t,33);ok('G4 essay prompt uses the 33-mark shape',/Section C/.test(eq)&&/"marks":33/.test(eq));
/* validators accept good output and reject bad */
const goodLesson={why:'w'.repeat(220),sections:t.ideas.map(i=>({code:i.code,heading:'h',text:'x'.repeat(450)})),examTips:['a','b','c'],checks:[{q:'q',a:'a',code:'1.a'},{q:'q',a:'a',code:'1.b'},{q:'q',a:'a',code:'2.a'},{q:'q',a:'a',code:'4.b'}]};
ok('V1 good lesson passes',G.validateLesson(t,goodLesson)===null,G.validateLesson(t,goodLesson));
ok('V1 lesson with invented code rejected',/unknown code/.test(G.validateLesson(t,{...goodLesson,sections:[{code:'9.z',heading:'h',text:'x'.repeat(450)},...goodLesson.sections.slice(1)]})));
ok('V1 short section rejected',/too short/.test(G.validateLesson(t,{...goodLesson,sections:[{code:'1.a',heading:'h',text:'short'},...goodLesson.sections.slice(1)]})));
const cards={cards:[1,2,3,4,5].map(i=>({front:'f',back:'b',code:'1.a'}))};ok('V2 good cards pass',G.validateCards(t,cards)===null);
ok('V2 wordy card rejected',/too long/.test(G.validateCards(t,{cards:[...cards.cards.slice(1),{front:'f',back:Array(45).fill('w').join(' '),code:'1.a'}]})));
ok('V2 uncited card rejected',/unknown code/.test(G.validateCards(t,{cards:[...cards.cards.slice(1),{front:'f',back:'b'}]})));
const qs={questions:[1,2,3].map(()=>({q:'Explain…',command:'Explain',marks:8,indicative:['a','b'],codes:['3.a']}))};ok('V3 good questions pass',G.validateQuestions(t,qs)===null);
ok('V3 question with foreign code rejected',/unknown code/.test(G.validateQuestions(t,{questions:[{q:'q',command:'Explain',marks:8,indicative:['a','b'],codes:['2.5c.1']},...qs.questions.slice(1)]})));
const ef={q:'To what extent…',marks:33,command:'To what extent',decode:'d',points:[{point:'p',evidence:'e',code:'3.a'},{point:'p',evidence:'e',code:'4.a'},{point:'p',evidence:'e',code:'4.b'}],evaluation:'ev',conclusion:'c',codes:['3.a']};
ok('V4 good essay frame passes',G.validateEssayQ(t,ef,33)===null);ok('V4 wrong marks rejected',G.validateEssayQ(t,ef,16)!==null);
const mk={transcription:'t',level:3,maxLevel:4,mark:24,max:30,failureMode:'ANALYSIS',byAO:[{ao:'AO1',comment:'c'}],strengths:['s'],weaknesses:['w'],feedback:'f',fix:'x',followUp:'u',codes:['2.3.1']};
ok('V5 good marking passes',G.validateMarking(pt,mk,30)===null);ok('V5 mark above max rejected',G.validateMarking(pt,{...mk,mark:31},30)!==null);ok('V5 bad failure mode rejected',G.validateMarking(pt,{...mk,failureMode:'SLOPPY'},30)!==null);
/* ---- support: the literal register, the floating coach, chunking ---- */
{ const lit={support:{literal:true}};
 const plain=[G.lessonPrompt(SPEC_H481,t,'Matthew'),G.cardsPrompt(SPEC_H481,t,10),G.questionsPrompt(SPEC_H481,t,'Learning'),G.essayQuestionPrompt(SPEC_H481,t,16),G.markEssayPrompt(SPEC_9PL0,pt,'Q',30,'',true),G.coachPrompt(SPEC_9PL0,pt,'Matthew','none','',false,'Coach'),G.weeklyNotePrompt(SPEC_H481,t,'Matthew','Coach','log')];
 const literal=[G.lessonPrompt(SPEC_H481,t,'Matthew',lit),G.cardsPrompt(SPEC_H481,t,10,lit),G.questionsPrompt(SPEC_H481,t,'Learning',lit),G.essayQuestionPrompt(SPEC_H481,t,16,lit),G.markEssayPrompt(SPEC_9PL0,pt,'Q',30,'',true,lit),G.coachPrompt(SPEC_9PL0,pt,'Matthew','none','',false,'Coach',lit),G.weeklyNotePrompt(SPEC_H481,t,'Matthew','Coach','log',lit)];
 ok('S1 the literal register is absent by default and present in every prompt when the profile asks',plain.every(p=>!/no idioms/.test(p))&&literal.every(p=>/no idioms/.test(p)&&/literal/i.test(p)&&/what will happen next/i.test(p)));
 ok('S1 the register block itself is short, plain and says what it forbids',G.registerBlock({literal:true}).length<700&&/idioms/.test(G.registerBlock({literal:true}))&&/sarcasm/.test(G.registerBlock({literal:true}))&&G.registerBlock({literal:false})===''&&G.registerBlock(undefined)==='');
 const sc={view:'rooms',spec:SPEC_H481,topic:t,state:'Learning',station:'practise',item:{kind:'question',text:'Explain two ways carbon moves between stores.',marks:6,command:'Explain',hints:1,n:2,of:4},mistakes:['2026-09-10 practise: RECALL-GAP'],dueHere:3,minutesOnItem:7,step:{title:'Review: Geography — Coasts',minutes:15}};
 const fp=G.floatingCoachPrompt(sc,'Matthew','Matthew: I am stuck','Ms Rowe');
 ok('S2 the floating coach prompt carries the scene: place, the item on screen, hints and minutes on it, mistakes here, the plan step, and the spec block',/You are Ms Rowe/.test(fp)&&/Practise/.test(fp)&&/Explain two ways carbon/.test(fp)&&/6 marks/.test(fp)&&/1 hint/.test(fp)&&/7 minutes/.test(fp)&&/RECALL-GAP/.test(fp)&&/Review: Geography/.test(fp)&&/OCR A level Geography \(H481\)/.test(fp)&&/KEY IDEAS/.test(fp)&&/3 flash cards due/.test(fp),fp.slice(0,700));
 ok('S2 it keeps the Socratic rules, answers about the item on screen, and asks for JSON with one door',/never write a model essay/.test(fp)&&/Under 90 words/.test(fp)&&/"text"/.test(fp)&&/"open"/.test(fp)&&/"view"/.test(fp)&&/on screen/.test(fp)&&/Matthew: I am stuck/.test(fp));
 ok('S2 teaching mode carries into the floating prompt',/TEACHING MODE/.test(G.floatingCoachPrompt(Object.assign({},sc,{teaching:true}),'Matthew','','Coach'))&&!/TEACHING MODE/.test(fp));
 const so=G.floatingCoachPrompt({view:'campus',map:[{id:'OCR-H481|1.2',subject:'Geography',topic:'1.2 Earth’s life support systems',state:'Learning'}],due:5,retests:['OCR-H481|2.1'],step:{title:'Recall cards',minutes:10}},'Matthew','','Coach');
 ok('S2 outside a room the prompt carries the map, what is due and the re-tests instead of a spec block',/OCR-H481\|1\.2 \|/.test(so)&&/5 flash cards due/.test(so)&&/OCR-H481\|2\.1/.test(so)&&!/KEY IDEAS/.test(so)&&/campus/i.test(so)&&/Recall cards/.test(so),so.slice(0,500));
 ok('S2 the register reaches the floating coach too',/no idioms/.test(G.floatingCoachPrompt(sc,'Matthew','','Coach',lit)));
 ok('S2 replies are validated: text required, a door must name a room string, a view must be a known place',G.validateCoachReply({text:'Try the first store.'})===null&&G.validateCoachReply({text:'x',open:{room:'OCR-H481|1.2',station:'cards'}})===null&&G.validateCoachReply({text:'x',open:null,view:'exam'})===null&&G.validateCoachReply({text:''})!==null&&G.validateCoachReply({text:'x',open:{room:5}})!==null&&G.validateCoachReply({text:'x',view:'moon'})!==null&&G.validateCoachReply(null)!==null);
 ok('S2 the scene line says what the coach can see in one short line',/^Geography · 1\.2 Earth.+ · Practise · question 2 of 4$/.test(G.sceneSummary(sc))&&G.sceneSummary({view:'campus'})==='Campus · the notice board'&&G.sceneSummary({view:'exam',subject:'Geography'})==='Exam Hall · Geography'&&G.sceneSummary({view:'prog'})==='Progress'&&/Lesson$/.test(G.sceneSummary(Object.assign({},sc,{station:'lesson',item:null}))),G.sceneSummary(sc));
 const cp2=G.chunkPrompt({title:'Review: Geography — Coasts',minutes:15,detail:'Learning. Short questions and one case-study recall.'},sc,3,'Matthew');
 ok('S3 the chunk prompt asks for 8 to 12 steps at level 3, each under 14 words, minutes adding to 15, as JSON',/8 to 12/.test(cp2)&&/14 words/.test(cp2)&&/15 minutes/.test(cp2)&&/"steps"/.test(cp2)&&/Review: Geography/.test(cp2)&&/Matthew/.test(cp2)&&/3 to 4/.test(G.chunkPrompt({title:'x',minutes:10,detail:''},sc,1,'Matthew'))&&/5 to 7/.test(G.chunkPrompt({title:'x',minutes:10,detail:''},sc,2,'Matthew')),cp2.slice(0,400));
 ok('S3 the register reaches chunking',/no idioms/.test(G.chunkPrompt({title:'x',minutes:10,detail:''},sc,1,'Matthew',lit)));
 ok('S3 chunk replies are validated by count, length and minutes',G.validateChunks({steps:[{text:'Read the question once',minutes:2},{text:'Underline the command word',minutes:1},{text:'Write the first line',minutes:12}]},1,15)===null&&G.validateChunks({steps:[{text:'a',minutes:15}]},1,15)!==null&&G.validateChunks({steps:[{text:'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen',minutes:5},{text:'b',minutes:5},{text:'c',minutes:5}]},1,15)!==null&&G.validateChunks({steps:[{text:'a',minutes:1},{text:'b',minutes:1},{text:'c',minutes:1}]},1,15)!==null&&G.validateChunks(null,1,15)!==null);
}


/* the first week: the caretaker's ten lines */
{const names={student:'Matthew',coach:'Coach',subjects:[{subject:'Geography',short:'Geography',topic:'1.1 Earth’s life support systems'},{subject:'Politics',short:'Politics',topic:'1.1 Democracy and participation'}]};
 const tp=G.tourPrompt(names);
 ok('G8 the tour prompt names the student, the coach, every subject with its first room, and all ten steps with what each must mention',/Student: Matthew/.test(tp)&&/Coach's name: Coach/.test(tp)&&/Geography — first room: 1.1 Earth’s life support systems/.test(tp)&&/Politics — first room/.test(tp)&&G.TOUR_STEPS.every(s=>tp.includes(s.key+' — '+s.meaning))&&/at most 90 characters/.test(tp)&&/"building": "<line>"/.test(tp));
 ok('G8 ten steps in three groups, each with fixed text',G.TOUR_STEPS.length===10&&G.TOUR_GROUPS.length===3&&G.TOUR_STEPS.every(s=>s.text&&G.TOUR_GROUPS.some(g=>g[0]===s.group)));
 const v=G.validateTour({lines:{building:'Open your Geography building on the campus',lesson:'Go through the first door and read the lesson',caretaker:'Ask the caretaker where coasts live',cards:'Turn a flash card over in Earth’s life support systems',question:'Answer one question and mark it',exit:'Take the exit ticket at the end of the room',coach:'Ask Coach what a spit is',exam:'x'.repeat(120),progress:'Check Progress to see the week',office:'Try a helper in the Office',bogus:'Look round the Office'}},names);
 ok('G9 validateTour keeps short lines that are about their step, drops a 120-character line and an unknown key',Object.keys(v).length===9&&v.exam===undefined&&v.bogus===undefined&&v.cards==='Turn a flash card over in Earth’s life support systems',JSON.stringify(Object.keys(v)));
 const v2=G.validateTour({lines:{building:'Open a building!',lesson:'Read it',cards:'Look at the deck',coach:'Ask your tutor'}},names);
 ok('G9 an exclamation mark, a line too short, a line that never says flash card, and a coach line without the coach’s name are all dropped',Object.keys(v2).length===0,JSON.stringify(v2));
 ok('G9 a partial reply is a partial set, never an error',Object.keys(G.validateTour({lines:{office:'Try a helper in the Office'}},names)).length===1&&Object.keys(G.validateTour(null,names)).length===0&&Object.keys(G.validateTour({lines:'x'},names)).length===0);}

console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
