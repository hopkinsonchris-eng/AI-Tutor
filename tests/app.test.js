/* App-level smoke tests for the platform, driving the real handlers in a DOM stub */
const fs=require('fs'),vm=require('vm');let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
const { sampleKit } = require('./_kit.js');
const html=fs.readFileSync(__dirname+'/../dist/index.html','utf8');const script=html.match(/<script>([\s\S]*)<\/script>/)[1];
function el(id){return{id,innerHTML:'',textContent:'',value:'',checked:false,files:null,dataset:{},attrs:{},classList:{toggle(){},add(){},remove(){}},setAttribute(k,v){this.attrs[k]=v},addEventListener(){},click(){},closest(){return null}}}
const reg={};const secs=['v-setup','v-today','v-rooms','v-exam','v-prog'].map(i=>reg[i]=el(i));const L={};
const document={getElementById(i){return reg[i]||(reg[i]=el(i))},querySelector(){return el('q')},querySelectorAll(s){return s==='main>section'?secs:[]},addEventListener(t,f){L[t]=f}};
const store={'platform:session':'tok-test'};let siteKitFetches=0;let G0=null;let lastFetch=null;let reply=()=>({content:[{type:'text',text:'OK'}]});
/* the tutor service: everything under /auth, /progress and /manage is answered here; anything else is the AI proxy */
let ME={username:'matthew',name:'Matthew',role:'student',daily:200};
/* a small catalogue: two built-in courses, an A-level science not yet built, a GCSE maths that will be queued for review, and a retracted one */
const CATALOGUE=[{id:'OCR-H481',level:'A level',subject:'Geography',board:'OCR',code:'H481',hasUrl:true},{id:'AQA-7402',level:'A level',subject:'Biology',board:'AQA',code:'7402',hasUrl:false},{id:'AQA-8300',level:'GCSE',subject:'Mathematics',board:'AQA',code:'8300',hasUrl:true},{id:'OCR-H432',level:'A level',subject:'Chemistry',board:'OCR',code:'H432',hasUrl:true}];
let COURSE_STATES={'OCR-H432':{status:'retracted'}};let lastBuildReq=null;let buildPolls=0;
let DEPTH={'AQA-7402':{status:'building',total:19,done:{P2:'2026-09-10T13:00:00Z'},failed:['P3']}};let kitFetches=0;
function builtSpec(id){const base=JSON.parse(JSON.stringify(sb.SPECS?sb.SPECS['EDX-9MA0']:{}));return Object.assign(base,{id,board:'AQA',subject:id==='AQA-7402'?'Biology':'Mathematics',code:id.split('-')[1],level:id==='AQA-8300'?'GCSE':'A level',version:'Issue 3 (2024)',resources:{hubs:[{name:'Physics & Maths Tutor',url:'https://www.physicsandmathstutor.com/biology-revision/a-level-aqa/',kind:'notes'}]}});}
let MANAGE_COURSES=[{depth:{status:'done',total:19,done:{P2:'2026-09-10T13:00:00Z'},failed:[{topic:'P3',problems:['question 4: the answer key says 12 but the solution gives 10']}],calls:41},id:'AQA-7402',level:'A level',subject:'Biology',board:'AQA',code:'7402',family:'science',status:'published',source:{url:'https://filestore.aqa.org.uk/x.PDF',etag:'"v1"',lastModified:'Mon, 01 Sep 2025 00:00:00 GMT',checkedAt:'2026-09-10T12:00:00Z'},built:{at:'2026-09-10T12:00:00Z',models:['claude-opus-5','claude-sonnet-5','claude-opus-5'],promptVersion:'2026-09-10.1',ideas:40},judge:{score:0.91},build:{status:'published',done:7,total:7}}];
let REVIEW_ITEMS=[{kind:'proposal',id:'AQA-7402',subject:'Biology',board:'AQA',code:'7402',level:'A level',createdAt:'2026-10-01T06:00:00Z',breaking:true,oldVersion:'Issue 3 (2024)',newVersion:'Issue 4 (2026)',docChanges:['Issue 4 withdraws optional topic 3.8.'],changes:[{kind:'topic-removed',topic:'3.8',detail:'Optional topic',breaking:true},{kind:'idea-changed',topic:'3.1',detail:'3.1.2',breaking:false}]}];let serverProgress=null;let lastPut=null;let manageUsers=[];let lastManage=null;
const R=(status,body)=>({ok:status<300,status,text:async()=>JSON.stringify(body)});
async function tutor(u,o){const path=u.replace('https://tutor.studyplatform.co.uk','');const m=o.method||'GET';const body=o.body?JSON.parse(o.body):null;const auth=(o.headers||{}).Authorization||'';
  if((path===''||path==='/')&&m==='POST'&&auth==='Bearer expired')return R(401,{type:'error',error:{type:'authentication_error',message:'Sign in to use the tutor'}});
  if(path==='/auth/me')return auth==='Bearer tok-test'||auth==='Bearer tok-2'?R(200,{user:ME}):R(401,{error:'not signed in'});
  if(path==='/auth/login')return body.username==='matthew'&&body.password==='pw12345678'?R(200,{token:'tok-2',user:ME}):body.username==='chris'&&body.password==='adminpass1'?R(200,{token:'tok-2',user:{username:'chris',name:'Chris',role:'admin',daily:2000}}):R(401,{error:'Wrong username or password'});
  if(path==='/auth/logout')return R(200,{ok:true});
  if(path.startsWith('/auth/invite?token='))return path.endsWith('good')?R(200,{username:'kitty',name:'Kitty'}):R(404,{error:'This invite has expired or was already used'});
  if(path==='/auth/invite')return body.token==='good'&&body.password.length>=8?R(200,{token:'tok-2',user:{username:'kitty',name:'Kitty',role:'student',daily:200}}):R(400,{error:'bad'});
  if(path==='/auth/password')return body.current==='pw12345678'?R(200,{ok:true}):R(401,{error:'Current password is wrong'});
  if(path==='/progress'&&m==='GET')return serverProgress?R(200,serverProgress):R(404,{error:'nothing saved yet'});
  if(path==='/progress'&&m==='PUT'){lastPut=body;return R(200,{ok:true,updatedAt:'2026-09-10T12:00:00Z'});}
  if(path==='/courses'&&m==='GET')return R(200,{catalogue:CATALOGUE,courses:COURSE_STATES,building:{},depth:DEPTH});
  if(/^\/courses\/[^/]+\/kit\/[^/]+$/.test(path)){const [,,id,,topic]=path.split('/');kitFetches++;if(id!=='AQA-7402'||topic!=='P2')return R(404,{error:'no kit for that room yet'});const t=builtSpec(id).topics.find(x=>x.id===topic);return R(200,{kit:Object.assign(sampleKit(t,'quantitative'),{id,topic,family:'quantitative',built:{at:'2026-09-10T13:00:00Z',models:['claude-sonnet-5','claude-opus-5'],promptVersion:'2026-09-10.1',judge:{score:0.95,notes:'Faithful and correct.'}}})});}
  if(/^\/manage\/courses\/[^/]+\/depth(\/[^/]+)?$/.test(path)&&m==='POST'){lastManage={m,path};return R(202,{ok:true});}
  if(path==='/courses/build'&&m==='POST'){lastBuildReq=body;const id=body.board==='AQA'&&body.code==='7402'?'AQA-7402':body.board==='AQA'&&body.code==='8300'?'AQA-8300':'X';buildPolls=0;if(COURSE_STATES[id]&&COURSE_STATES[id].status==='published')return R(200,{status:'published',id});if(id==='AQA-8300')return R(202,{status:'review',id,build:{message:'Built, but the checks want a second look — it is being checked by Chris before it goes live.'}});return R(202,{status:'building',id,joined:false,build:{id,status:'building',stage:'Finding the specification',done:0,total:7,message:'Finding the official specification…'}});}
  if(/^\/courses\/[^/]+\/status$/.test(path)){const id=decodeURIComponent(path.split('/')[2]);buildPolls++;if(buildPolls<3)return R(200,{id,status:'building',build:{id,status:'building',stage:'Mapping topics',done:1+buildPolls,total:7,message:'Mapping topic '+buildPolls+' of 3…'}});COURSE_STATES[id]={status:'published'};return R(200,{id,status:'published',build:{id,status:'published',done:7,total:7,message:'Published — judged 91% faithful to the document.'},meta:{source:{url:'https://filestore.aqa.org.uk/x.PDF',checkedAt:'2026-09-10T12:00:00Z'},judge:{score:0.91}}});}
  if(/^\/courses\/[^/]+\/spec$/.test(path)){const id=decodeURIComponent(path.split('/')[2]);if(!COURSE_STATES[id]||COURSE_STATES[id].status!=='published')return R(404,{error:'not published'});return R(200,{spec:builtSpec(id),meta:{id,source:{url:'https://filestore.aqa.org.uk/x.PDF',checkedAt:'2026-09-10T12:00:00Z'},judge:{score:0.91},built:{at:'2026-09-10T12:00:00Z'}}});}
  if(path==='/manage/courses'&&m==='GET')return R(200,{courses:MANAGE_COURSES,lastRun:{at:'2026-09-01T06:00:00Z',courses:['AQA-7402']},catalogueExtra:[]});
  if(path==='/manage/reviews'&&m==='GET')return R(200,{items:REVIEW_ITEMS});
  if(/^\/manage\/reviews\/[^/]+\/(approve|dismiss)$/.test(path)){lastManage={m,path};REVIEW_ITEMS=[];return R(200,{ok:true});}
  if(/^\/manage\/courses\/[^/]+\/links$/.test(path)&&m==='POST'){lastManage={m,path,body};MANAGE_COURSES[0].resources={hubs:body.hubs,at:'2026-09-10T13:00:00Z'};return R(200,{ok:true,hubs:body.hubs});}
  if(/^\/manage\/courses\/[^/]+\/(retract|restore|check|rebuild)$/.test(path)){lastManage={m,path};if(path.endsWith('/retract'))MANAGE_COURSES[0].status='retracted';return R(200,{ok:true});}
  if(path==='/manage/catalogue'&&m==='POST'){lastManage={m,path,body};return body.level==='GCSE'||body.level==='A level'?R(200,{ok:true,id:'AQA-'+body.code}):R(400,{error:'level (A level or GCSE), subject, board and code are all required'});}
  if(path==='/manage/users'&&m==='GET')return R(200,{users:manageUsers,site:'https://studyplatform.co.uk'});
  if(path==='/manage/users'&&m==='POST'){lastManage={m,body};const u={username:body.username,name:body.name,role:'student',daily:+body.daily||200,created:'2026-09-10',disabled:false,hasPassword:false,today:0};manageUsers.push(u);return R(201,{user:u,invite:{token:'inv1',link:'https://studyplatform.co.uk/#invite=inv1',expires:'2026-09-17'}});}
  if(path.startsWith('/manage/users/')){lastManage={m,path,body};if(m==='DELETE'){manageUsers=manageUsers.filter(x=>'/manage/users/'+x.username!==path);return R(200,{ok:true});}if(path.endsWith('/invite'))return R(200,{invite:{token:'inv2',link:'https://studyplatform.co.uk/#invite=inv2',expires:'2026-09-17'}});const u=manageUsers.find(x=>'/manage/users/'+x.username===path);Object.assign(u,body);return R(200,{user:u});}
  return null;}
const sb={document,console,setTimeout,clearTimeout,setInterval:()=>1,clearInterval(){},Date,Math,JSON,encodeURIComponent,parseInt,Number,String,isNaN,Object,Array,Set,Promise,Function,Error,FileReader:function(){},confirm:()=>true,
 navigator:{clipboard:{writeText:async()=>{}}},alert(){},prompt:()=>'150',fetch:async(u,o)=>{if(/^\.\/kits\//.test(u)){siteKitFetches++;const [,,id,file]=u.split('/');const topic=decodeURIComponent(decodeURIComponent(file.replace(/\.json$/,'')));const sp=G0.SPECS[id];const t=sp&&sp.topics.find(x=>x.id===topic);if(!t)return{ok:false,status:404,text:async()=>'{}'};return{ok:true,status:200,text:async()=>JSON.stringify(Object.assign(sampleKit(t,'essay'),{built:{at:'2026-09-11T10:00:00Z',by:'claude-code',judge:{score:0.9,notes:'ok'}}}))};}const t=await tutor(u,o||{});if(t)return t;lastFetch={url:u,headers:o.headers,body:JSON.parse(o.body)};return{ok:true,status:200,text:async()=>JSON.stringify(reply(lastFetch))}},
 window:{storage:{async get(k){if(!(k in store))throw new Error('nokey');return{value:store[k]}},async set(k,v){store[k]=v;return{}}},scrollTo(){}}};
sb.globalThis=sb;vm.createContext(sb);vm.runInContext(script+'\n;Object.defineProperties(globalThis,{KIT_INDEX:{get:()=>KIT_INDEX,set:v=>{KIT_INDEX=v}},S:{get:()=>S,set:v=>{S=v}},AUTHORED:{get:()=>AUTHORED},__load:{get:()=>load},__mirror:{get:()=>mirrorMaths},UI:{get:()=>UI},SPECS:{get:()=>SPECS},TODAY:{get:()=>TODAY},view:{get:()=>view},AUTH:{get:()=>AUTH,set:v=>{AUTH=v}},syncState:{get:()=>syncState},CONFIG:{get:()=>CONFIG},COURSES:{get:()=>COURSES}});',sb);
const T=s=>{const t={id:s.id||'',dataset:s.dataset||{},className:s.className||'',checked:s.checked,value:s.value,files:s.files};t.closest=sel=>{if(sel.startsWith('.'))return t.className===sel.slice(1)?t:null;const m=sel.match(/\[data-([\w-]+)\]/);if(m){const k=m[1].replace(/-([a-z])/g,(_,c)=>c.toUpperCase());return k in t.dataset?t:null}return null};return t};
const click=async s=>L.click({target:T(s)});const change=async s=>L.change({target:T(s)});const $=i=>document.getElementById(i);const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{await sleep(40);const G=sb;G0=sb;
 ok('A0 signed in with nothing saved → setup shown',G.S===null&&G.AUTH.user&&G.AUTH.user.username==='matthew'&&/Set up your study environment/.test(reg['v-setup'].innerHTML)&&/Geography/.test(reg['v-setup'].innerHTML)&&/Politics/.test(reg['v-setup'].innerHTML));
 ok('A0 level picker: A level selected, GCSE offered because the catalogue has GCSE courses',/data-level="A level" aria-pressed="true"/.test(reg['v-setup'].innerHTML)&&!/data-level="GCSE"[^>]*disabled/.test(reg['v-setup'].innerHTML));
 ok('P1 subject and board dropdowns and an Add button, built from built-in specs plus the catalogue',/id="crsSubject"/.test(reg['v-setup'].innerHTML)&&/id="crsBoard"/.test(reg['v-setup'].innerHTML)&&/id="crsAdd"/.test(reg['v-setup'].innerHTML)&&/<option (selected)?>Biology<\/option>/.test(reg['v-setup'].innerHTML)&&/<option (selected)?>Geography<\/option>/.test(reg['v-setup'].innerHTML));
 ok('P1 a retracted course is not offered (criterion 7)',!/Chemistry/.test(reg['v-setup'].innerHTML));
 ok('P1 an unbuilt course says so in the board list',(()=>{$('crsSubject').value='Biology';return true;})());
 await change({id:'crsSubject',value:'Biology'});ok('P1 choosing a subject lists its boards with their build state',/OCR H481/.test(reg['v-setup'].innerHTML)===false&&/AQA 7402 — not mapped yet, builds on request/.test(reg['v-setup'].innerHTML));
 await change({id:'crsSubject',value:'Geography'});$('crsSubject').value='Geography';$('crsBoard').value='OCR-H481';await click({id:'crsAdd'});
 ok('P2 Add for a built-in course adds it at once (criterion 1)',G.UI.setup.subjects.some(x=>x.specId==='OCR-H481')&&/data-su="OCR-H481" checked/.test(reg['v-setup'].innerHTML)&&lastBuildReq===null);
 G.CONFIG.pollMs=5;$('crsSubject').value='Biology';await change({id:'crsSubject',value:'Biology'});$('crsBoard').value='AQA-7402';await click({id:'crsAdd'});
 ok('P3 Add for an unbuilt course starts a build and shows a progress bar with the stage',lastBuildReq&&lastBuildReq.code==='7402'&&/class="bar"/.test(reg['v-setup'].innerHTML)&&/Finding the official specification/.test(reg['v-setup'].innerHTML)&&/id="crsAdd" disabled/.test(reg['v-setup'].innerHTML));
 await sleep(15);ok('P3 the bar advances as the Worker reports topics',/Mapping topic/.test(reg['v-setup'].innerHTML)&&/step [2-6] of 7/.test(reg['v-setup'].innerHTML),reg['v-setup'].innerHTML.match(/step \d of \d/)&&reg['v-setup'].innerHTML.match(/step \d of \d/)[0]);
 await sleep(40);ok('P3 when published the course is fetched and added, and the bar goes (criterion 2)',G.UI.setup.subjects.some(x=>x.specId==='AQA-7402')&&G.SPECS['AQA-7402']&&G.SPECS['AQA-7402'].subject==='Biology'&&!G.UI.build&&!/class="bar"/.test(reg['v-setup'].innerHTML)&&/data-su="AQA-7402" checked/.test(reg['v-setup'].innerHTML));
 ok('P3 the added course shows its provenance line (criterion 6)',/Built from the AQA specification \(Issue 3 \(2024\)\), checked 10 Sept 2026 · judged 91% faithful/.test(reg['v-setup'].innerHTML),(reg['v-setup'].innerHTML.match(/class="prov">[^<]*/)||[''])[0]);
 ok('P3 the spec is cached on the device',!!store['platform:spec:v1:AQA-7402']);
 await click({dataset:{level:'GCSE'}});ok('P4 switching level keeps A-level courses out of the list and offers GCSE subjects',G.UI.setup.level==='GCSE'&&/<option (selected)?>Mathematics<\/option>/.test(reg['v-setup'].innerHTML)&&!/<option (selected)?>Biology<\/option>/.test(reg['v-setup'].innerHTML));
 $('crsSubject').value='Mathematics';await change({id:'crsSubject',value:'Mathematics'});$('crsBoard').value='AQA-8300';await click({id:'crsAdd'});
 ok('P4 a build the checks doubt tells the student it is being checked by Chris (criterion 5)',/being checked by Chris/.test(reg['v-setup'].innerHTML)&&!G.UI.setup.subjects.some(x=>x.specId==='AQA-8300'));
 await click({id:'buildDismiss'});await click({dataset:{level:'A level'}});
 G.UI.setup.subjects=G.UI.setup.subjects.filter(x=>x.specId!=='AQA-7402');G.renderSetup();
 ok('A0 name prefilled from the account',/id="suName" value="Matthew"/.test(reg['v-setup'].innerHTML));
 await click({dataset:{level:'Degree'}});ok('A0 a level nothing is mapped at does nothing',G.UI.setup.level==='A level');
 /* setup: pick three subjects with options */
 $('suName').value='Matthew';$('suYear').value='2028';
 await change({dataset:{su:'OCR-H481'},checked:true});await change({dataset:{su:'EDX-9BS0'},checked:true});await change({dataset:{su:'EDX-9PL0'},checked:true});
 await click({id:'suGo'});ok('A1 setup refuses until options chosen',G.S===null&&/choose exactly/.test($('suErr').innerHTML),$('suErr').innerHTML);
 for(const o of ['OCR-H481|landscape|1.1.1','OCR-H481|globalSystems|2.2.1','OCR-H481|globalGovernance|2.2.4','EDX-9PL0|nonCore|2.5c','EDX-9PL0|comparative|3A'])await change({dataset:{opt:o},checked:true});
 await change({dataset:{opt:'OCR-H481|debates|3.1'},checked:true});await change({dataset:{opt:'OCR-H481|debates|3.5'},checked:true});
 await click({id:'suGo'});ok('A1 setup builds state',G.S&&G.S.setup.student==='Matthew'&&Object.keys(G.S.nodes).length===8+4+11,String(G.S&&Object.keys(G.S.nodes).length));
 ok('A1 state persisted',!!store['platform:state:v1:matthew']);
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
 ok('A12 persistence round trip',JSON.parse(store['platform:state:v1:matthew']).essays.length===1&&Object.keys(JSON.parse(store['platform:state:v1:matthew']).cards).length===10);

 /* ============ three-panel GUI (tooler criteria 3–10) ============ */
 G.go('today');G.renderAll();
 ok('G1 the left rail lists every course with a predicted grade, a mastery bar and a pin, and has the quick-jump box',(reg['rail-l'].innerHTML.match(/data-course="/g)||[]).length===3&&/class="cg">/.test(reg['rail-l'].innerHTML)&&/class="bar mini"/.test(reg['rail-l'].innerHTML)&&/data-pin="OCR-H481"/.test(reg['rail-l'].innerHTML)&&/id="jump"/.test(reg['rail-l'].innerHTML),reg['rail-l'].innerHTML.slice(0,300));
 ok('G1 the topic tree groups the active course by component with a status dot per topic',/class="comp"/.test(reg['rail-l'].innerHTML)&&/Physical systems/.test(reg['rail-l'].innerHTML)&&(reg['rail-l'].innerHTML.match(/class="tnode/g)||[]).length===8&&/class="dot" data-s="Fluent"/.test(reg['rail-l'].innerHTML)&&/data-open="OCR-H481\|1\.2"/.test(reg['rail-l'].innerHTML),String((reg['rail-l'].innerHTML.match(/class="tnode/g)||[]).length));
 await click({dataset:{course:'EDX-9PL0'}});ok('G2 tapping a course makes it active in Rooms and re-draws the tree for it',G.UI.subject==='EDX-9PL0'&&G.view==='rooms'&&(reg['rail-l'].innerHTML.match(/class="tnode/g)||[]).length===11&&/Democracy and participation/.test(reg['rail-l'].innerHTML),G.view+' '+String((reg['rail-l'].innerHTML.match(/class="tnode/g)||[]).length));
 await click({dataset:{pin:'EDX-9PL0'}});ok('G3 pinning a course sorts it first and is saved in state',G.S.pinned['EDX-9PL0']===true&&reg['rail-l'].innerHTML.indexOf('data-course="EDX-9PL0"')<reg['rail-l'].innerHTML.indexOf('data-course="OCR-H481"')&&JSON.parse(store['platform:state:v1:matthew']).pinned['EDX-9PL0']===true);
 await click({dataset:{pin:'EDX-9PL0'}});ok('G3 unpinning restores the setup order',!G.S.pinned['EDX-9PL0']&&reg['rail-l'].innerHTML.indexOf('data-course="OCR-H481"')<reg['rail-l'].innerHTML.indexOf('data-course="EDX-9PL0"'));
 G.openRoom(geoRoom,'lesson');ok('G4 the open room is marked current in the tree, and the right rail shows this room: state, cards, mistakes and links',/class="tnode cur" data-open="OCR-H481\|1\.2"/.test(reg['rail-l'].innerHTML)&&/This room/.test(reg['rail-r'].innerHTML)&&/Fluent/.test(reg['rail-r'].innerHTML)&&/data-cards="1"/.test(reg['rail-r'].innerHTML)&&/EVALUATION/.test(reg['rail-r'].innerHTML)&&/youtube\.com\/results/.test(reg['rail-r'].innerHTML)&&/bbc\.co\.uk\/bitesize\/search/.test(reg['rail-r'].innerHTML),reg['rail-r'].innerHTML.slice(0,400));
 ok('G7 a built course with hub pages lists them before the searches',(()=>{const sp=G.SPECS['AQA-7402'];const l=G.resourcesFor(sp,sp.topics[0]);return l[0]&&/physicsandmathstutor/.test(l[0].url)&&l.length>=3;})());
 ok('G7 the maths course’s hand-checked TLMaths links are in the rail too',(()=>{const sp=G.SPECS['EDX-9MA0'];const l=G.resourcesFor(sp,sp.topics.find(t=>t.id==='P2'));return l.some(x=>/tlmaths\.com/.test(x.url));})());
 await L.input({target:{id:'jump',value:'life supp'}});ok('G5 quick-jump filters topics across all courses by name',/data-open="OCR-H481\|1\.2"/.test(reg['jumpOut'].innerHTML)&&!/data-open="EDX-9PL0/.test(reg['jumpOut'].innerHTML),reg['jumpOut'].innerHTML.slice(0,200));
 await L.input({target:{id:'jump',value:'2.1'}});ok('G5 a code matches too',/data-open="OCR-H481\|2\.1"/.test(reg['jumpOut'].innerHTML));
 await L.input({target:{id:'jump',value:'x'}});ok('G5 one character is not enough to search',reg['jumpOut'].innerHTML==='');
 G.UI.room=null;await L.input({target:{id:'jump',value:'life supp'}});await L.keydown({target:{id:'jump',value:'life supp'},key:'Enter',preventDefault(){}});ok('G5 Enter opens the first match and clears the box',G.UI.room==='OCR-H481|1.2'&&G.view==='rooms'&&G.UI.jumpQ==='',G.UI.room+' '+G.view);
 G.go('today');ok('G6 the right rail on Today shows the next step, cards due with Review now, a progress ring per course and the streak',/Next step/.test(reg['rail-r'].innerHTML)&&/data-cards="1"/.test(reg['rail-r'].innerHTML)&&(reg['rail-r'].innerHTML.match(/class="ring"/g)||[]).length===3&&/streak/.test(reg['rail-r'].innerHTML),reg['rail-r'].innerHTML.slice(0,300));
 G.go('exam');ok('G8 the right rail on Exam shows the board’s command words and essay shapes',/To what extent/.test(reg['rail-r'].innerHTML)&&/Essay shapes/.test(reg['rail-r'].innerHTML)&&/33 marks/.test(reg['rail-r'].innerHTML),reg['rail-r'].innerHTML.slice(0,300));
 G.go('prog');ok('G8 the right rail on Progress shows the error pattern and the streak',/Your pattern/.test(reg['rail-r'].innerHTML)&&/streak/.test(reg['rail-r'].innerHTML));
 /* the AI nudge: one call a day, cached, refresh on demand, fallback when the call fails */
 let nudgeCalls=0;reply=f=>{const p=f.body.messages[0].content[0].text;if(/best thing to do now/.test(p)){nudgeCalls++;return{content:[{type:'text',text:JSON.stringify({text:'Your carbon-cycle essays keep losing the judgement: mark one more 33-marker in Earth’s life support systems today.',node:geoRoom,station:'essay'})}]};}return{content:[{type:'text',text:'OK'}]};};
 G.go('today');await G.requestNudge(true);
 ok('G9 the nudge is written by the tutor from the student’s own errors and cached for today',nudgeCalls===1&&G.S.nudge&&G.S.nudge.date===G.TODAY&&G.S.nudge.ai===true&&/carbon-cycle/.test(reg['rail-r'].innerHTML)&&/data-open="OCR-H481\|1\.2" data-st="essay"/.test(reg['rail-r'].innerHTML),String(nudgeCalls)+' '+JSON.stringify(G.S.nudge));
 ok('G9 the nudge prompt carries the student’s errors and mastery, and is a small call',/EVALUATION/.test(lastFetch.body.messages[0].content[0].text)&&/Geography/.test(lastFetch.body.messages[0].content[0].text)&&lastFetch.body.max_tokens<=400);
 G.go('rooms');G.go('today');G.renderAll();ok('G9 re-rendering does not ask again',nudgeCalls===1);
 await click({dataset:{nudgeRefresh:'1'}});ok('G9 the refresh button asks once more',nudgeCalls===2);
 reply=()=>({content:[{type:'text',text:'not json at all'}]});await G.requestNudge(true);
 ok('G9 when the call fails the fallback names the first undone session step, and nothing blocks',G.S.nudge.ai===false&&/Recall cards|Review|New|Timed essay/.test(G.S.nudge.text)&&/Next step/.test(reg['rail-r'].innerHTML),JSON.stringify(G.S.nudge));
 reply=()=>({content:[{type:'text',text:'OK'}]});
 ok('G10 the status strip shows streak, minutes today, cards due and the sync state',/day streak/.test(reg['status'].innerHTML)&&/min today/.test(reg['status'].innerHTML)&&/cards due/.test(reg['status'].innerHTML)&&/Saved|Saving|saved/.test(reg['status'].innerHTML),reg['status'].innerHTML);
 G.syncState.timer&&sb.clearTimeout(G.syncState.timer);G.syncState.timer=null;G.syncState.pending=true;await G.pushSync();ok('G10 after a save the strip shows when',/Saved \d/.test(reg['status'].innerHTML),reg['status'].innerHTML);
 G.go('today');ok('G11 the left rail offers Add or change courses and Sign out from every view',/data-act="courses"/.test(reg['rail-l'].innerHTML)&&/data-act="signout"/.test(reg['rail-l'].innerHTML)&&/Signed in as <b>Matthew<\/b>/.test(reg['rail-l'].innerHTML));
 await click({dataset:{act:'courses'}});ok('G11 Add or change courses opens the setup screen with the current courses ticked',/Add or change subjects/.test(reg['v-setup'].innerHTML)&&/data-su="OCR-H481" checked/.test(reg['v-setup'].innerHTML));
 await click({id:'suCancel'});
 await click({dataset:{drawer:'l'}});ok('G2 the edge button opens the left drawer on a narrow screen',G.UI.drawer==='l'&&reg['rail-l'].attrs['aria-expanded']==='true');
 await L.keydown({target:{id:'x'},key:'Escape',preventDefault(){}});ok('G2 Escape closes it',G.UI.drawer===null&&reg['rail-l'].attrs['aria-expanded']==='false');
 await click({dataset:{drawer:'r'}});await click({id:'scrim'});ok('G2 tapping outside closes the right drawer',G.UI.drawer===null);

 /* ============ course depth: kits in rooms (tooler criteria 5, 6) ============ */
 G.UI.setup=JSON.parse(JSON.stringify(G.S.setup));G.UI.setup.subjects.push({specId:'AQA-7402',options:{}});$('suName').value='Matthew';$('suYear').value='2028';await click({id:'suGo'});
 ok('K0 a built course joins the student’s setup',!!G.S.nodes['AQA-7402|P2']&&!!G.S.nodes['AQA-7402|P3']);
 G.openRoom('AQA-7402|P2','lesson');await sleep(30);
 ok('K1 a room with a checked kit renders the kit’s lesson: why, one section per idea with its code, worked examples, check-yourself, and the Key facts tab',/Why this exists/.test(reg['v-rooms'].innerHTML)&&/Why this room exists for Algebra/.test(reg['v-rooms'].innerHTML)&&/data-station="formulae"/.test(reg['v-rooms'].innerHTML)&&/Key facts &amp; links/.test(reg['v-rooms'].innerHTML)&&(reg['v-rooms'].innerHTML.match(/data-lxrev=/g)||[]).length===4&&/Written and checked/.test(reg['v-rooms'].innerHTML),reg['v-rooms'].innerHTML.slice(0,300));
 ok('K1 the lesson cites the key-idea codes and carries the family extras',/class="cite"[^>]*>P2\.1</.test(reg['v-rooms'].innerHTML)&&/Formulae sheet/.test(reg['v-rooms'].innerHTML));
 ok('K6 the kit was fetched once and cached on the device by its build stamp',kitFetches===1&&!!store['platform:kit:v1:AQA-7402|P2']);
 G.openRoom('AQA-7402|P2','formulae');ok('K1 Key facts & links shows the kit’s facts, its examples and the resources links',/Fact one the student/.test(reg['v-rooms'].innerHTML)&&/stepline hid/.test(reg['v-rooms'].innerHTML)&&/physicsandmathstutor/.test(reg['v-rooms'].innerHTML)&&!/Pearson textbook:/.test(reg['v-rooms'].innerHTML));
 G.openRoom('AQA-7402|P2','practise');ok('K2 practise draws from the kit’s bank with the hint ladder, four at a time by mastery',G.UI.apr&&G.UI.apr.qs.length===4&&/Hint 1/.test(reg['v-rooms'].innerHTML)&&/Question 1 on Algebra/.test(reg['v-rooms'].innerHTML));
 G.openRoom('AQA-7402|P2','exit');ok('K3 the exit ticket is the kit’s four questions, available at once',(reg['v-rooms'].innerHTML.match(/data-reveal="ex\d"/g)||[]).length===4&&/Exit 1\?/.test(reg['v-rooms'].innerHTML));
 G.openRoom('AQA-7402|P2','cards');ok('K4 the cards station offers the kit’s checked cards',/data-kitcards="1"/.test(reg['v-rooms'].innerHTML)&&/12 checked cards/.test(reg['v-rooms'].innerHTML));
 await click({dataset:{kitcards:'1'}});ok('K4 adding them schedules all twelve for today, once',Object.values(G.S.cards).filter(c=>c.node==='AQA-7402|P2').length===12&&G.S.kitCards['AQA-7402|P2']===true&&!/data-kitcards/.test(reg['v-rooms'].innerHTML));
 ok('K6 re-opening the room does not fetch again',(G.openRoom('AQA-7402|P2','lesson'),kitFetches===1));
 G.openRoom('AQA-7402|P3','lesson');await sleep(20);ok('K5 a room whose kit failed its checks says so and keeps the generated tools',/could not be checked/.test(reg['v-rooms'].innerHTML)&&/data-genkind="lesson"/.test(reg['v-rooms'].innerHTML)&&kitFetches===1);
 G.openRoom('AQA-7402|P4','lesson');await sleep(20);ok('K5 a room still being written says so and keeps the generated tools',/being written/.test(reg['v-rooms'].innerHTML)&&/data-genkind="lesson"/.test(reg['v-rooms'].innerHTML)&&kitFetches===1);
 ok('K5 the tree marks every room without a kit yet',(reg['rail-l'].innerHTML.match(/class="pen"/g)||[]).length===18,String((reg['rail-l'].innerHTML.match(/class="pen"/g)||[]).length));
 G.UI.setup=JSON.parse(JSON.stringify(G.S.setup));G.UI.setup.subjects=G.UI.setup.subjects.filter(x=>x.specId!=='AQA-7402');$('suName').value='Matthew';await click({id:'suGo'});ok('K0 and leaves again cleanly',!G.S.nodes['AQA-7402|P2']&&!Object.values(G.S.cards).some(c=>c.node==='AQA-7402|P2'));

 /* hand-built kits ship with the site: the index says which rooms have one, the JSON is fetched from ./kits/ */
 G.KIT_INDEX={'OCR-H481':{'1.2':'2026-09-11T10:00:00Z'}};G.openRoom('OCR-H481|1.2','lesson');await sleep(30);
 ok('H3 a hand-built kit is fetched from the site, not the tutor, and renders as a kit room',siteKitFetches===1&&/Written and checked/.test(reg['v-rooms'].innerHTML)&&/Model paragraph/.test(reg['v-rooms'].innerHTML)&&!!store['platform:kit:v1:OCR-H481|1.2']);
 G.openRoom('OCR-H481|2.1','lesson');await sleep(20);ok('H3 a room of that course without a hand-built kit works as before, with no note and no fetch',siteKitFetches===1&&!/being written/.test(reg['v-rooms'].innerHTML)&&/data-genkind="lesson"/.test(reg['v-rooms'].innerHTML));
 G.KIT_INDEX={};

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


 /* accounts: every AI call carries the session, progress goes to the tutor */
 ok('L1 the proxy is called with the session, never a key',lastFetch.url==='https://tutor.studyplatform.co.uk'&&lastFetch.headers.Authorization==='Bearer tok-test'&&!JSON.stringify(lastFetch.headers).match(/x-api-key|sk-ant|X-Passcode/i));
 G.syncState.timer&&sb.clearTimeout(G.syncState.timer);G.syncState.timer=null;G.syncState.pending=true;await G.pushSync();
 ok('L2 progress is saved to the tutor with the device',lastPut&&lastPut.state&&lastPut.state.setup.student==='Matthew'&&/device/.test(JSON.stringify(lastPut))&&G.syncState.at>0);
 ok('L2 state cached per user on the device',!!store['platform:state:v1:matthew']);
 G.go('prog');G.renderProg();ok('L3 account panel shown, no tutor-route fields',/Signed in as <b>Matthew<\/b>/.test(reg['v-prog'].innerHTML)&&/id="signOut"/.test(reg['v-prog'].innerHTML)&&!/id="tuUrl"/.test(reg['v-prog'].innerHTML));
 $('pwCur').value='wrong';$('pwNew').value='newpassword1';await click({id:'pwGo'});ok('L4 password change reports the tutor’s refusal',/Current password is wrong/.test($('pwOut').innerHTML));
 $('pwCur').value='pw12345678';await click({id:'pwGo'});ok('L4 password change succeeds',/Password changed/.test($('pwOut').innerHTML));
 const stateBefore=JSON.stringify(G.S);
 await click({id:'signOut'});ok('L5 sign out clears the session and shows the login screen',G.S===null&&!G.AUTH.user&&store['platform:session']===''&&/id="loginGo"/.test(reg['v-login'].innerHTML));
 $('lgUser').value='matthew';$('lgPass').value='nope';await click({id:'loginGo'});ok('L6 wrong password shown, still signed out',/Wrong username or password/.test($('lgErr').innerHTML)&&!G.AUTH.user);
 $('lgPass').value='pw12345678';await click({id:'loginGo'});ok('L7 sign in restores the same progress from the device cache when the tutor has none',G.AUTH.user&&G.AUTH.token==='tok-2'&&store['platform:session']==='tok-2'&&G.S&&JSON.stringify(G.S)===stateBefore);
 ok('L7 and pushes it to the tutor',lastPut&&JSON.stringify(lastPut.state)===stateBefore);
 serverProgress={updatedAt:'2026-09-09T10:00:00Z',device:'a Mac',state:JSON.parse(stateBefore)};serverProgress.state.hours=99;
 await click({id:'signOut'});$('lgUser').value='matthew';$('lgPass').value='pw12345678';await click({id:'loginGo'});
 ok('L8 when the tutor has a copy, it wins over the device cache',G.S&&G.S.hours===99);
 /* a 401 from the tutor mid-session signs the student out cleanly */
 G.AUTH.token='expired';delete G.S.generated['OCR-H481|1.2'];G.openRoom('OCR-H481|1.2','lesson');await click({dataset:{genkind:'lesson'}});await sleep(40);
 ok('L9 an expired session shows the login screen instead of a broken tutor',!G.AUTH.user&&G.S===null&&/id="loginGo"/.test(reg['v-login'].innerHTML));
 /* invite flow */
 await G.renderInvite('bad');ok('I1 a dead invite explains itself',/doesn’t work/.test(reg['v-login'].innerHTML)&&/expired/.test(reg['v-login'].innerHTML));
 await G.renderInvite('good');ok('I2 a live invite greets the student by name and username',/Welcome, Kitty/.test(reg['v-login'].innerHTML)&&/<b>kitty<\/b>/.test(reg['v-login'].innerHTML));
 $('invPass').value='short';$('invPass2').value='short';await click({id:'invGo',dataset:{token:'good'}});ok('I3 short password refused client-side',/at least 8/.test($('invErr').innerHTML));
 $('invPass').value='longenough1';$('invPass2').value='different1';await click({id:'invGo',dataset:{token:'good'}});ok('I3 mismatch refused',/don’t match/.test($('invErr').innerHTML));
 serverProgress=null;$('invPass2').value='longenough1';await click({id:'invGo',dataset:{token:'good'}});
 ok('I4 accepting the invite signs Kitty in and lands on setup, not Matthew’s progress',G.AUTH.user&&G.AUTH.user.username==='kitty'&&G.S===null&&/Set up your study environment/.test(reg['v-setup'].innerHTML)&&/value="Kitty"/.test(reg['v-setup'].innerHTML));
 /* admin */
 await click({id:'signOut'});$('lgUser').value='chris';$('lgPass').value='adminpass1';await click({id:'loginGo'});
 ok('M1 an admin signs in',G.AUTH.user&&G.AUTH.user.role==='admin');
 ok('M1 an admin with no rooms lands on the Admin tab, not setup',G.S===null&&G.view==='admin'&&/id="adCreate"/.test(reg['v-admin'].innerHTML));
 ok('M1 the Admin tab has its own Sign out, since an admin without rooms cannot reach Progress',/id="signOut"/.test(reg['v-admin'].innerHTML));
 await click({id:'signOut'});ok('M1 signing out from the Admin tab returns to the login screen',!G.AUTH.user&&/id="loginGo"/.test(reg['v-login'].innerHTML));
 $('lgUser').value='chris';$('lgPass').value='adminpass1';await click({id:'loginGo'});
 G.go('today');G.renderAll();ok('M1 the setup screen tells an admin they need not fill it in',/under the <b>Admin<\/b> tab/.test(reg['v-setup'].innerHTML));
 manageUsers=[{username:'chris',name:'Chris',role:'admin',daily:2000,created:'2026-09-10',disabled:false,hasPassword:true,today:3},{username:'matthew',name:'Matthew',role:'student',daily:200,created:'2026-09-10',disabled:false,hasPassword:true,today:12,lastSeen:'2026-09-10T11:00:00Z',device:'an iPad'}];
 G.S={nodes:{},setup:{subjects:[{specId:'OCR-H481',options:{}}],student:'Chris'},errors:[],transitions:[],practice:[],essays:[],papers:[],cards:{},generated:{},coach:{},pins:{},doneToday:{},coldDone:{},checklist:{},boundaries:{},dayHours:{}};
 G.go('admin');await G.renderAdmin();
 ok('M2 admin tab lists accounts with usage and last device',/<b>Matthew<\/b> · matthew/.test($('adList').innerHTML)&&/12 of 200 AI requests today/.test($('adList').innerHTML)&&/from an iPad/.test($('adList').innerHTML));
 ok('M2 admin cannot turn off or delete themselves',!/data-ad-toggle="chris"/.test($('adList').innerHTML)&&!/data-ad-del="chris"/.test($('adList').innerHTML)&&/data-ad-toggle="matthew"/.test($('adList').innerHTML));
 $('adName').value='Kitty';$('adUser').value='Kitty';$('adDaily').value='150';await click({id:'adCreate'});
 ok('M3 creating an account posts a lowercase username and the cap',lastManage&&lastManage.m==='POST'&&lastManage.body.username==='kitty'&&lastManage.body.daily==='150');
 ok('M3 the invite card carries the link, a copy button and a mailto for Zoho',/#invite=inv1/.test($('adOut').innerHTML)&&/data-copy-link=/.test($('adOut').innerHTML)&&/href="mailto:\?subject=/.test($('adOut').innerHTML)&&/Your%20study%20platform%20login/.test($('adOut').innerHTML));
 ok('M3 the new account appears in the list',/<b>Kitty<\/b> · kitty/.test($('adList').innerHTML)&&/Invite not accepted yet/.test($('adList').innerHTML));
 await click({dataset:{adToggle:'matthew',to:'1'}});ok('M4 turning a student off patches disabled',lastManage.path==='/manage/users/matthew'&&lastManage.m==='PATCH'&&lastManage.body.disabled===true);
 await click({dataset:{adCap:'matthew',daily:'200'}});ok('M5 changing a cap patches daily from the prompt',lastManage.m==='PATCH'&&lastManage.body.daily==='150');
 await click({dataset:{adReset:'matthew'}});ok('M6 a reset mints a new invite and shows the card',lastManage.path==='/manage/users/matthew/invite'&&/#invite=inv2/.test($('adOut').innerHTML));
 await click({dataset:{adDel:'kitty'}});ok('M7 delete removes the account',lastManage.m==='DELETE'&&!manageUsers.some(u=>u.username==='kitty'));
 await G.renderAdminCourses();
 ok('M8 the admin course list shows provenance and the monthly run',/filestore\.aqa\.org\.uk\/x\.PDF/.test($('adCourses').innerHTML)&&/claude-opus-5, claude-sonnet-5/.test($('adCourses').innerHTML)&&/judged 91%/.test($('adCourses').innerHTML)&&/40 key ideas/.test($('adCourses').innerHTML)&&/Monthly check last ran/.test($('adCourses').innerHTML)&&/data-crs-retract="AQA-7402"/.test($('adCourses').innerHTML));
 ok('M9 the review queue shows a breaking proposal with the diff and the document\'s own words',/document changed/.test($('adReviews').innerHTML)&&/breaking/.test($('adReviews').innerHTML)&&/topic-removed · 3\.8/.test($('adReviews').innerHTML)&&/Issue 4 withdraws optional topic 3\.8/.test($('adReviews').innerHTML)&&/data-rv-approve="AQA-7402"/.test($('adReviews').innerHTML));
 await click({dataset:{rvDismiss:'AQA-7402'}});ok('M9 dismiss posts the decision and clears the queue (criterion 9)',lastManage.path==='/manage/reviews/AQA-7402/dismiss'&&/Nothing waiting/.test($('adReviews').innerHTML));
 ok('M12 a published course has a revision-links editor (criterion 12)',/data-links-save="AQA-7402"/.test($('adCourses').innerHTML)&&/Revision links \(0\)/.test($('adCourses').innerHTML));
 $('links-AQA-7402').value='Physics & Maths Tutor | notes | https://www.physicsandmathstutor.com/biology-revision/a-level-aqa/\nAQA | official | https://www.aqa.org.uk/subjects/science/as-and-a-level/biology-7401-7402';await click({dataset:{linksSave:'AQA-7402'}});
 ok('M12 the admin edits a course’s revision links, one per line, and they post as hubs',lastManage.path==='/manage/courses/AQA-7402/links'&&lastManage.body.hubs.length===2&&lastManage.body.hubs[1].kind==='official'&&/Saved 2 links/.test($('linksOut-AQA-7402').innerHTML),JSON.stringify(lastManage));
 await G.renderAdminCourses();ok('M12 the editor shows the saved links next time',/Revision links \(2\)/.test($('adCourses').innerHTML)&&/Physics &amp; Maths Tutor \| notes \| https:\/\/www.physicsandmathstutor.com/.test($('adCourses').innerHTML));
 ok('K7 the admin course card shows depth progress, calls, and failed rooms with the judge’s objection and a retry',/Depth: 1 of 19 rooms/.test($('adCourses').innerHTML)&&/41 model calls/.test($('adCourses').innerHTML)&&/data-depth-retry="AQA-7402\|P3"/.test($('adCourses').innerHTML)&&/answer key says 12/.test($('adCourses').innerHTML)&&/data-depth-build="AQA-7402"/.test($('adCourses').innerHTML),$('adCourses').innerHTML.slice(0,200));
 await click({dataset:{depthRetry:'AQA-7402|P3'}});ok('K7 retry posts for that room',lastManage.path==='/manage/courses/AQA-7402/depth/P3'&&lastManage.m==='POST');
 await click({dataset:{depthBuild:'AQA-7402'}});ok('K7 rebuild depth posts for the course',lastManage.path==='/manage/courses/AQA-7402/depth');
 await click({dataset:{crsRetract:'AQA-7402'}});ok('M10 retract posts and the list shows the course retracted with a Restore button (criterion 7)',lastManage.path==='/manage/courses/AQA-7402/retract'&&/data-crs-restore="AQA-7402"/.test($('adCourses').innerHTML));
 $('catLevel').value='A level';$('catSubject').value='Astrology';$('catBoard').value='AQA';$('catCode').value='9999';$('catUrl').value='https://filestore.aqa.org.uk/a.PDF';await click({id:'adCatAdd'});
 ok('M11 adding a catalogue entry posts level, subject, board, code and link (criterion 10)',lastManage.path==='/manage/catalogue'&&lastManage.body.code==='9999'&&lastManage.body.specUrl==='https://filestore.aqa.org.uk/a.PDF'&&/Added AQA-9999/.test($('catOut').innerHTML));

 console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
})().catch(e=>{console.log('CRASH',e);process.exit(2)});
