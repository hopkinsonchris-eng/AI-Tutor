/* App-level smoke tests for the platform, driving the real handlers in a DOM stub */
const fs=require('fs'),vm=require('vm');let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
const html=fs.readFileSync(__dirname+'/../dist/index.html','utf8');const script=html.match(/<script>([\s\S]*)<\/script>/)[1];
function el(id){return{id,innerHTML:'',textContent:'',value:'',checked:false,files:null,dataset:{},attrs:{},classList:{toggle(){},add(){},remove(){}},setAttribute(k,v){this.attrs[k]=v},addEventListener(){},click(){},closest(){return null}}}
const reg={};const secs=['v-setup','v-today','v-rooms','v-exam','v-prog'].map(i=>reg[i]=el(i));const L={};
const document={getElementById(i){return reg[i]||(reg[i]=el(i))},querySelector(){return el('q')},querySelectorAll(s){return s==='main>section'?secs:[]},addEventListener(t,f){L[t]=f}};
const store={};let lastFetch=null;let reply=()=>({content:[{type:'text',text:'OK'}]});
const sb={document,console,setTimeout,clearTimeout,setInterval:()=>1,clearInterval(){},Date,Math,JSON,encodeURIComponent,parseInt,Number,String,isNaN,Object,Array,Set,Promise,Function,Error,FileReader:function(){},confirm:()=>true,
 navigator:{clipboard:{writeText:async()=>{}}},fetch:async(u,o)=>{lastFetch={url:u,body:JSON.parse(o.body)};return{ok:true,status:200,text:async()=>JSON.stringify(reply(lastFetch))}},
 window:{storage:{async get(k){if(!(k in store))throw new Error('nokey');return{value:store[k]}},async set(k,v){store[k]=v;return{}}},scrollTo(){}}};
sb.globalThis=sb;vm.createContext(sb);vm.runInContext(script+'\n;Object.defineProperties(globalThis,{S:{get:()=>S,set:v=>{S=v}},AUTHORED:{get:()=>AUTHORED},__load:{get:()=>load},__mirror:{get:()=>mirrorMaths},UI:{get:()=>UI},SPECS:{get:()=>SPECS},TODAY:{get:()=>TODAY},view:{get:()=>view}});',sb);
const T=s=>{const t={id:s.id||'',dataset:s.dataset||{},className:s.className||'',checked:s.checked,value:s.value,files:s.files};t.closest=sel=>{if(sel.startsWith('.'))return t.className===sel.slice(1)?t:null;const m=sel.match(/\[data-([\w-]+)\]/);if(m){const k=m[1].replace(/-([a-z])/g,(_,c)=>c.toUpperCase());return k in t.dataset?t:null}return null};return t};
const click=async s=>L.click({target:T(s)});const change=async s=>L.change({target:T(s)});const $=i=>document.getElementById(i);const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{await sleep(40);const G=sb;
 ok('A0 no state → setup shown',G.S===null&&/Set up your study environment/.test(reg['v-setup'].innerHTML)&&/Geography/.test(reg['v-setup'].innerHTML)&&/Politics/.test(reg['v-setup'].innerHTML));
 /* setup: pick three subjects with options */
 $('suName').value='Matthew';$('suYear').value='2028';
 await change({dataset:{su:'OCR-H481'},checked:true});await change({dataset:{su:'EDX-9BS0'},checked:true});await change({dataset:{su:'EDX-9PL0'},checked:true});
 await click({id:'suGo'});ok('A1 setup refuses until options chosen',G.S===null&&/choose exactly/.test($('suErr').innerHTML),$('suErr').innerHTML);
 for(const o of ['OCR-H481|landscape|1.1.1','OCR-H481|globalSystems|2.2.1','OCR-H481|globalGovernance|2.2.4','EDX-9PL0|nonCore|2.5c','EDX-9PL0|comparative|3A'])await change({dataset:{opt:o},checked:true});
 await change({dataset:{opt:'OCR-H481|debates|3.1'},checked:true});await change({dataset:{opt:'OCR-H481|debates|3.5'},checked:true});
 await click({id:'suGo'});ok('A1 setup builds state',G.S&&G.S.setup.student==='Matthew'&&Object.keys(G.S.nodes).length===8+4+11,String(G.S&&Object.keys(G.S.nodes).length));
 ok('A1 state persisted',!!store['platform:state:v1']);
 /* today */
 ok('A2 today lists steps across subjects with open buttons',/Today/.test(reg['v-today'].innerHTML)&&/data-open=/.test(reg['v-today'].innerHTML));
 /* rooms: subject chips and topic grid */
 G.renderRooms();ok('A3 rooms grid shows 8 geography rooms',(reg['v-rooms'].innerHTML.match(/class="tcell"/g)||[]).length===8);
 await click({dataset:{subject:'EDX-9PL0'}});ok('A3 switching subject shows 11 politics rooms',(reg['v-rooms'].innerHTML.match(/class="tcell"/g)||[]).length===11);
 /* lesson generation with validation + retry */
 const geoRoom='OCR-H481|1.2';G.openRoom(geoRoom,'lesson');
 const topic=G.SPECS['OCR-H481'].topics.find(t=>t.id==='1.2');let calls=0;
 reply=f=>{calls++;const p=f.body.messages[0].content[0].text;if(/previous attempt was rejected/.test(p)||calls>1)return{content:[{type:'text',text:JSON.stringify({why:'w'.repeat(220),sections:topic.ideas.map(i=>({code:i.code,heading:'H',text:'t'.repeat(450)})),examTips:['a','b','c'],checks:[{q:'Q1',a:'A1',code:'1.a'},{q:'Q2',a:'A2',code:'1.b'},{q:'Q3',a:'A3',code:'2.a'},{q:'Q4',a:'A4',code:'3.a'}]})}]};return{content:[{type:'text',text:JSON.stringify({why:'short',sections:[]})}]};};
 await click({dataset:{genkind:'lesson'}});await sleep(50);
 ok('A4 invalid lesson triggers one corrective retry then succeeds',calls===2&&G.S.generated[geoRoom]&&G.S.generated[geoRoom].lesson,`calls=${calls}`);
 ok('A4 lesson prompt anchored to spec codes',/1\.2 Earth/.test(lastFetch.body.messages[0].content[0].text)&&/4\.b —/.test(lastFetch.body.messages[0].content[0].text));
 ok('A4 lesson rendered with citations',(reg['v-rooms'].innerHTML.match(/class="cite"/g)||[]).length>=topic.ideas.length);
 /* exit ticket gates taught */
 G.UI.station='exit';G.renderRooms();for(let i=0;i<4;i++){await click({dataset:{exit:String(i),res:i===3?'0':'1'}});}
 ok('A5 3/4 exit → Learning',G.S.nodes[geoRoom].state==='Learning'&&G.S.transitions.some(t=>t.node===geoRoom));
 ok('A5 missed exit question logged as RECALL-GAP',G.S.errors.some(e=>e.mode==='RECALL-GAP'&&/Exit:/.test(e.ref)));
 /* cards */
 reply=()=>({content:[{type:'text',text:JSON.stringify({cards:Array.from({length:10},(_,i)=>({front:'F'+i,back:'B'+i,code:'1.a'}))})}]});
 G.UI.station='cards';G.renderRooms();await click({dataset:{genkind:'cards'}});await sleep(30);
 ok('A6 10 cards created, due today',Object.values(G.S.cards).filter(c=>c.node===geoRoom).length===10);
 await click({dataset:{cards:'1'}});ok('A6 card review shown',/Recall · 10 due/.test(reg['v-today'].innerHTML));
 const cid=Object.keys(G.S.cards)[0];await click({dataset:{reveal:'card'}});await click({dataset:{cardres:'0',card:cid}});ok('A6 wrong card reset and logged',G.S.cards[cid].ease===1&&G.S.errors[0].mode==='RECALL-GAP');
 await click({dataset:{reveal:'card'}});const c2=Object.keys(G.S.cards)[1];await click({dataset:{cardres:'1',card:c2}});ok('A6 right card doubles',G.S.cards[c2].ease===2);
 /* practise */
 reply=()=>({content:[{type:'text',text:JSON.stringify({questions:[1,2,3].map(i=>({q:'Explain Q'+i,command:'Explain',marks:8,indicative:['i1','i2'],codes:['1.c']}))})}]});
 G.openRoom(geoRoom,'practise');await click({dataset:{genkind:'questions'}});await sleep(30);
 ok('A7 questions cached under state key',!!G.S.generated[geoRoom]['questions-Learning']);
 await click({dataset:{reveal:'pq0'}});$('pMode').value='ANALYSIS';await click({dataset:{pres:'missConfirm'}});ok('A7 miss logs ANALYSIS with indicative fix',G.S.errors[0].mode==='ANALYSIS'&&G.S.errors[0].fix==='i1');
 /* essay: set question, mark typed essay */
 reply=f=>{const p=f.body.messages[0].content[0].text;if(/Write ONE 33-mark/.test(p))return{content:[{type:'text',text:JSON.stringify({q:'To what extent are the water and carbon cycles linked?',marks:33,command:'To what extent',decode:'d',points:[{point:'p1',evidence:'e1',code:'4.a'},{point:'p2',evidence:'e2',code:'3.a'},{point:'p3',evidence:'e3',code:'4.b'}],evaluation:'ev',conclusion:'c',codes:['4.a']})}]};
   if(/senior examiner/.test(p))return{content:[{type:'text',text:JSON.stringify({transcription:'',level:3,maxLevel:4,mark:24,max:33,byAO:[{ao:'AO1',comment:'good'},{ao:'AO2',comment:'ok'}],strengths:['s'],weaknesses:['w'],feedback:'f',failureMode:'EVALUATION',fix:'x',followUp:'u',codes:['4.a']})}]};return{content:[{type:'text',text:'OK'}]};};
 G.openRoom(geoRoom,'essay');$('esMarks').value='33';await click({id:'esStart'});await sleep(30);
 ok('A8 essay frame set with 33-mark shape',G.UI.essay&&G.UI.essay.frame.marks===33&&/Show the planning frame/.test(reg['v-rooms'].innerHTML));
 $('esText').value='My essay text';await click({id:'esMark'});await sleep(30);
 ok('A8 marking prompt levels-based, includes essay text',/levels against the assessment objectives/.test(lastFetch.body.messages[0].content[0].text)&&/My essay text/.test(lastFetch.body.messages[0].content[0].text));
 ok('A8 result rendered and logged',/Level 3/.test(reg['v-rooms'].innerHTML)&&G.S.essays.length===1&&G.S.essays[0].mark===24&&G.S.errors[0].mode==='EVALUATION');
 ok('A8 level 3 promotes Learning → Fluent',G.S.nodes[geoRoom].state==='Fluent',G.S.nodes[geoRoom].state);
 /* coach */
 reply=()=>({content:[{type:'text',text:'Which case study would you use, Matthew?'}]});G.openRoom(geoRoom,'coach');$('coachIn').value='help me plan';await click({id:'coachGo'});await sleep(30);
 const cp=lastFetch.body.messages[0].content[0].text;ok('A9 coach prompt: board, topic, no model essay, Matthew',/OCR/.test(cp)&&/1\.2 Earth/.test(cp)&&/never write a model essay/.test(cp)&&/Refer to the student as Matthew/.test(cp)&&/EVALUATION/.test(cp));
 ok('A9 reply stored',G.S.coach[geoRoom].length===2);
 /* exam hall + boundaries */
 G.go('exam');await click({dataset:{subject:'OCR-H481'}});$('rpComp').value='C1';$('rpScore').value='50';$('rpTotal').value='66';$('rpSeries').value='June 2024';await click({id:'rpSave'});
 ok('A10 paper saved and prediction uses it',G.S.papers.length===1&&G.predictSubject(G.S,G.SPECS['OCR-H481'],G.S.setup.subjects[0].options).papersUsed===1);
 ok('A10 command words shown for the board',/To what extent/.test(reg['v-exam'].innerHTML)&&/With reference to/.test(reg['v-exam'].innerHTML));
 /* progress + report */
 G.renderProg();ok('A11 progress per subject, report, error log',(reg['v-prog'].innerHTML.match(/<h2>(Geography|Business|Politics)/g)||[]).length===3&&/Week to/.test(reg['v-prog'].innerHTML)&&/EVALUATION/.test(reg['v-prog'].innerHTML));
 ok('A12 persistence round trip',JSON.parse(store['platform:state:v1']).essays.length===1&&Object.keys(JSON.parse(store['platform:state:v1']).cards).length===10);

 /* v1.1 — manage subjects, maths mirror, mark station */
 ok('B0 Mathematics available at setup',!!G.SPECS['EDX-9MA0']&&G.SPECS['EDX-9MA0'].topics.length===19);
 // seed a Maths Companion state in storage, then add Mathematics via manage-subjects
 store['companion:state:v2']=JSON.stringify({nodes:{P2:{state:'Fluent',lastPractised:'2026-09-08'},P5:{state:'Learning',lastPractised:'2026-09-01'}},papers:[{kind:'real',key:'P1',score:80,total:100,date:'2026-09-05',series:'June 2023'}],dayHours:{}});
 G.renderProg();ok('B1 manage-subjects button present',/id="suEdit"/.test(reg['v-prog'].innerHTML));
 await click({id:'suEdit'});ok('B1 setup reopens in edit mode with existing subjects ticked',/Add or change subjects/.test(reg['v-setup'].innerHTML)&&/data-su="OCR-H481" checked/.test(reg['v-setup'].innerHTML));
 await change({dataset:{su:'EDX-9MA0'},checked:true});$('suName').value='Matthew';$('suYear').value='2028';
 const before=G.S.nodes['OCR-H481|1.2'].state;await click({id:'suGo'});
 ok('B1 mathematics rooms added, existing progress kept',Object.keys(G.S.nodes).length===23+19&&G.S.nodes['OCR-H481|1.2'].state===before&&G.S.essays.length===1,String(Object.keys(G.S.nodes).length));
 // mirror happened at merge (load() ran before the maths state existed, so reload the mirror by calling load again)
 await G.__load();await G.__mirror();
 ok('B2 old companion progress imported once',G.S.nodes['EDX-9MA0|P2'].state==='Fluent'&&G.S.nodes['EDX-9MA0|P5'].state==='Learning'&&G.S.nodes['EDX-9MA0|P2'].imported);
 ok('B2 maths paper mirrored once',G.S.papers.filter(p=>p.spec==='EDX-9MA0').length===1);
 await G.__mirror();ok('B2 re-mirror does not duplicate papers',G.S.papers.filter(p=>p.spec==='EDX-9MA0').length===1);
 G.openRoom('EDX-9MA0|P2','lesson');ok('M1 maths room shows the hand-authored lesson',/Why this exists/.test(reg['v-rooms'].innerHTML)&&/Indices and surds are one system/.test(reg['v-rooms'].innerHTML)&&/data-station="formulae"/.test(reg['v-rooms'].innerHTML));
 G.openRoom('EDX-9MA0|P2','formulae');ok('M2 formulae station: formulae, faded examples, verified TLMaths links',(reg['v-rooms'].innerHTML.match(/class="formula"/g)||[]).length>=6&&/tlmaths\.com\/home\/a-level-maths\/full-a-level\/b-algebra-functions/.test(reg['v-rooms'].innerHTML)&&/stepline hid/.test(reg['v-rooms'].innerHTML));
 G.openRoom('EDX-9MA0|P2','practise');ok('M3 authored practise set with hint ladder',G.UI.apr&&G.UI.apr.qs.length===4&&/Hint 1/.test(reg['v-rooms'].innerHTML));
 await click({dataset:{ahint:'1'}});await click({dataset:{ahint:'1'}});await click({dataset:{reveal:'aq0'}});await click({dataset:{apres:'ok'}});
 ok('M3 got-it after two hints recorded',G.S.practice.slice(-1)[0].hints===2&&G.S.practice.slice(-1)[0].node==='EDX-9MA0|P2');
 await click({dataset:{reveal:'aq1'}});$('pMode').value='RECALL-GAP';await click({dataset:{apres:'missConfirm'}});ok('M3 miss logged with the authored solution as the fix',G.S.errors[0].mode==='RECALL-GAP'&&G.S.errors[0].fix.length>5);
 G.openRoom('EDX-9MA0|P3','exit');ok('M4 authored exit ticket has 3 questions',(reg['v-rooms'].innerHTML.match(/data-reveal="ex\d"/g)||[]).length===3);
 for(let i=0;i<3;i++)await click({dataset:{exit:String(i),res:'1'}});ok('M4 3/3 authored exit → taught (Learning)',G.S.nodes['EDX-9MA0|P3'].state==='Learning');
 G.go('exam');await click({dataset:{subject:'EDX-9MA0'}});ok('M5 maths Exam Hall has the lost-mark dojo and real boundaries',/Spot the lost mark/.test(reg['v-exam'].innerHTML)&&G.S.boundaries['EDX-9MA0']&&G.S.boundaries['EDX-9MA0']['A*']===86);
 await click({dataset:{dl:'0'}});await click({id:'dojoCheck'});ok('M5 dojo marks the lost line',/class="dline hit"/.test(reg['v-exam'].innerHTML)&&/Exactly right/.test(reg['v-exam'].innerHTML));
 ok('M6 no maths-companion link plumbing left',!/Maths Companion/.test(reg['v-prog'].innerHTML)&&!/mathsLink/.test(reg['v-prog'].innerHTML));
 // remove a subject: nodes and dependent records go
 await click({id:'suEdit'});await change({dataset:{su:'EDX-9BS0'},checked:false});await click({id:'suGo'});
 ok('B1 removing a subject removes its rooms',!Object.keys(G.S.nodes).some(k=>k.startsWith('EDX-9BS0')));
 // mark station
 reply=f=>{const p=f.body.messages[0].content[0].text;if(/senior examiner/.test(p))return{content:[{type:'text',text:JSON.stringify({transcription:'dy/dx = 3x^2 - 12x',level:2,maxLevel:3,mark:3,max:4,byAO:[{ao:'AO1',comment:'method shown'}],strengths:['s'],weaknesses:['w'],feedback:'f',failureMode:'EXAM-TECHNIQUE',fix:'write y-values',followUp:'u',codes:['P7.3']})}]};return{content:[{type:'text',text:'OK'}]};};
 G.openRoom('EDX-9MA0|P7','mark');ok('B3 mark station present with photo + marks',/Photograph the question and your answer/.test(reg['v-rooms'].innerHTML)&&/id="mkMarks"/.test(reg['v-rooms'].innerHTML));
 $('mkQ').value='Find the stationary points of y = x^3 - 6x^2 + 5';$('mkText').value='dy/dx = 3x^2 - 12x';$('mkMarks').value='4';await click({id:'mkGo'});await sleep(30);
 ok('B3 maths marking prompt carries M/A/B conventions',/M \(method\), A \(accuracy/.test(lastFetch.body.messages[0].content[0].text));
 ok('B3 result rendered and logged to the room',/3<small>\/4/.test(reg['v-rooms'].innerHTML)&&G.S.errors[0].mode==='EXAM-TECHNIQUE'&&G.S.errors[0].node==='EDX-9MA0|P7');
 ok('B3 essay tab renamed for non-essay subject',/>Exam question</.test(reg['v-rooms'].innerHTML));


 /* v1.4 — configurable tutor route */
 G.go('prog');G.renderProg();ok('R1 route fields present',/id="tuUrl"/.test(reg['v-prog'].innerHTML)&&/id="tuPass"/.test(reg['v-prog'].innerHTML));
 $('tuUrl').value='http://insecure.example';await click({id:'tuSave'});ok('R1 refuses non-https proxy',!G.S.tutor&&/must start with https/.test($('apiOut').innerHTML));
 $('tuUrl').value='https://tutor.example.workers.dev/';$('tuPass').value='sesame';await click({id:'tuSave'});ok('R2 saves route without trailing slash',G.S.tutor&&G.S.tutor.url==='https://tutor.example.workers.dev'&&G.S.tutor.pass==='sesame');
 let hdr=null,url=null;sb.fetch=async(u,o)=>{url=u;hdr=o.headers;return{ok:true,status:200,text:async()=>JSON.stringify({content:[{type:'text',text:'OK'}]})}};
 await click({id:'apiTest'});await sleep(30);ok('R3 calls the proxy with the passcode header',url==='https://tutor.example.workers.dev'&&hdr['X-Passcode']==='sesame'&&/Connected/.test($('apiOut').innerHTML));
 ok('R3 no api key anywhere in the request',!JSON.stringify(hdr).match(/x-api-key|sk-ant/i));
 await click({id:'tuClear'});await click({id:'apiTest'});await sleep(30);ok('R4 clearing route returns to built-in',!G.S.tutor&&url==='https://api.anthropic.com/v1/messages'&&!hdr['X-Passcode']);
 sb.fetch=async(u,o)=>{lastFetch={url:u,body:JSON.parse(o.body)};return{ok:true,status:200,text:async()=>JSON.stringify(reply(lastFetch))}};

 console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
})().catch(e=>{console.log('CRASH',e);process.exit(2)});
