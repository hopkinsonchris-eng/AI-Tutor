const fs=require('fs'),path=require('path');
const css=fs.readFileSync(path.join(__dirname,'src','styles.css'),'utf8');
const core=fs.readFileSync(path.join(__dirname,'src','core.js'),'utf8'),gen=fs.readFileSync(path.join(__dirname,'src','gen.js'),'utf8');
const specs={...require('./src/specs/ocr-h481.js'),...require('./src/specs/edexcel-9bs0.js'),...require('./src/specs/edexcel-9pl0.js'),...require('./src/specs/edexcel-9ma0.js'),...require('./src/specs/aqa-8464.js'),...require('./src/specs/edexcel-4et1.js'),...require('./src/specs/edexcel-4ea1.js')};const byId={};for(const s of Object.values(specs))byId[s.id]=s;
const {AUTHORED}=require('./src/authored/index.js');
const {collectKits,kitIndex,writeKits}=require('./scripts/kits-bundle.js');const KITS=collectKits(path.join(__dirname,'src','kits'));
// Where the app talks to. config.json sets it for the site; TUTOR_URL in the environment overrides;
// an empty value builds the older route-less app (used when published inside claude.ai).
const cfg=JSON.parse(fs.readFileSync(path.join(__dirname,'config.json'),'utf8'));
const tutorUrl=(process.env.TUTOR_URL!==undefined?process.env.TUTOR_URL:cfg.tutorUrl||'').replace(/\/$/,'');
let html=fs.readFileSync(path.join(__dirname,'src','template.html'),'utf8');
html=html.replace('/*__CONFIG__*/',()=>'const CONFIG='+JSON.stringify({tutorUrl})+';').replace('/*__CSS__*/',()=>css).replace('/*__CORE__*/',()=>core).replace('/*__GEN__*/',()=>gen).replace('/*__SPECS__*/',()=>'const SPECS='+JSON.stringify(byId)+';').replace('/*__KITS__*/',()=>'let KIT_INDEX='+JSON.stringify(kitIndex(KITS))+';').replace('/*__AUTHORED__*/',()=>'const AUTHORED='+JSON.stringify(AUTHORED)+';');
new Function(html.match(/<script>([\s\S]*)<\/script>/)[1]);
if(/claude\.ai\//.test(html))throw new Error('BUILD REFUSED: artifact contains a claude.ai URL string, which disables the built-in AI route');
fs.mkdirSync(path.join(__dirname,'dist'),{recursive:true});fs.writeFileSync(path.join(__dirname,'dist','index.html'),html);const nk=writeKits(KITS,path.join(__dirname,'dist'));
console.log('built dist/index.html',(html.length/1024).toFixed(0)+' KB','· '+nk+' hand-built room kits',tutorUrl?'· accounts via '+tutorUrl:'· no tutor route (legacy build)');
