const G=require('../src/gen.js');const {SPEC_H481}=require('../src/specs/ocr-h481.js');const {SPEC_9PL0}=require('../src/specs/edexcel-9bs0-9pl0.js');
let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
const t=G.topicOf(SPEC_H481,'1.2');const pt=G.topicOf(SPEC_9PL0,'2.3');
/* prompts carry the anchoring */
const lp=G.lessonPrompt(SPEC_H481,t,'Matthew');
ok('G1 lesson prompt names board, code, topic',/OCR A level Geography \(H481\)/.test(lp)&&/1\.2 Earth/.test(lp));
ok('G1 lesson prompt lists every key idea code',t.ideas.every(i=>lp.includes(i.code+' — ')));
ok('G1 lesson prompt forbids copying spec wording',/Do not copy the specification wording/.test(lp));
const mp=G.markEssayPrompt(SPEC_9PL0,pt,'Evaluate the view that the Prime Minister is now presidential.',30,'',true);
ok('G2 marking prompt is levels-based and AO-aware',/levels against the assessment objectives/.test(mp)&&/AO1 Knowledge/.test(mp)&&/transcribe it faithfully/.test(mp));
ok('G2 marking prompt carries the board summary',mp.includes(SPEC_9PL0.markConventions.summary.slice(0,60)));
const cp=G.coachPrompt(SPEC_9PL0,pt,'Matthew','none','Matthew: help',true);
ok('G3 coach prompt: no model essay, teaching mode stages',/never write a model essay/.test(cp)&&/TEACHING MODE/.test(cp)&&/Refer to the student as Matthew/.test(cp));
const eq=G.essayQuestionPrompt(SPEC_H481,t,33);ok('G4 essay prompt uses the 33-mark shape',/Component 3 Section C/.test(eq)&&/"marks":33/.test(eq));
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
console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
