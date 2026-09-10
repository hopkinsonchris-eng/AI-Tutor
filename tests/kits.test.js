/* Hand-built kits: every kit in src/kits/ meets the contract against its spec's topic, and the bundler
   writes one JSON per room plus the index the app reads. */
const fs=require('fs'),path=require('path'),os=require('os');
const {validateKit}=require('../src/kit-validator.js');const {familyFor}=require('../src/families.js');
const {collectKits,kitIndex,writeKits}=require('../scripts/kits-bundle.js');const {sampleKit}=require('./_kit.js');
let pass=0;const fails=[];const ok=(l,c,d='')=>c?pass++:fails.push(l+' '+d);
const specs={};for(const f of fs.readdirSync(path.join(__dirname,'..','src','specs')).filter(f=>/\.js$/.test(f)))for(const sp of Object.values(require(path.join(__dirname,'..','src','specs',f))))specs[sp.id]=sp;
const all=collectKits(path.join(__dirname,'..','src','kits'));let rooms=0;
for(const [id,kits] of Object.entries(all)){const sp=specs[id];ok(`H0 kits for ${id} belong to a spec that ships`,!!sp);if(!sp)continue;
  for(const [t,k] of Object.entries(kits)){const topic=sp.topics.find(x=>x.id===t);ok(`H1 ${id} ${t} has a topic`,!!topic);if(!topic)continue;const r=validateKit(k,topic,familyFor(sp.subject));ok(`H1 ${id} ${t} passes the kit contract`,r.ok,r.problems.slice(0,3).join(' | '));ok(`H1 ${id} ${t} was judged before shipping`,k.built&&k.built.judge&&k.built.judge.score>=0.8,JSON.stringify(k.built));rooms++;}}
console.log(`hand-built rooms: ${rooms}`);
/* the bundler, on a fixture */
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'kits-'));const kdir=path.join(tmp,'kits');fs.mkdirSync(kdir);
const maths=Object.values(require('../src/specs/edexcel-9ma0.js'))[0];const t=maths.topics.find(x=>x.id==='P2');
const kit=Object.assign(sampleKit(t,'quantitative'),{built:{at:'2026-09-11T10:00:00Z',by:'claude-code',judge:{score:0.9,notes:'ok'}}});
fs.writeFileSync(path.join(kdir,'EDX-9MA0.js'),'module.exports={ID:"EDX-9MA0",KITS:{"P2":'+JSON.stringify(kit)+'}};');
const got=collectKits(kdir);const idx=kitIndex(got);const dist=path.join(tmp,'dist');const n=writeKits(got,dist);
ok('H2 the bundler collects kits by course and topic',got['EDX-9MA0']&&got['EDX-9MA0'].P2&&got['EDX-9MA0'].P2.lesson);
ok('H2 the index carries the build stamp per room',idx['EDX-9MA0'].P2==='2026-09-11T10:00:00Z');
ok('H2 one JSON per room is written where the site serves it',n===1&&fs.existsSync(path.join(dist,'kits','EDX-9MA0','P2.json'))&&JSON.parse(fs.readFileSync(path.join(dist,'kits','EDX-9MA0','P2.json'),'utf8')).room.questions.length===12);
ok('H2 the built app declares the index',/let KIT_INDEX=\{/.test(fs.readFileSync(path.join(__dirname,'..','dist','index.html'),'utf8')));
console.log(`PASSED: ${pass}`);fails.forEach(f=>console.log('FAILED: '+f));console.log('-'.repeat(50));console.log(fails.length?`RESULT: ${fails.length} FAILURE(S)`:'RESULT: ALL GREEN');process.exit(fails.length?1:0);
