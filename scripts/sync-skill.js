/* Regenerates the course-builder skill's family reference from src/families.js — the single source.
   `node scripts/sync-skill.js` writes it; `node scripts/sync-skill.js --check` fails if it is stale,
   and tests/builder.test.js runs the check, so the skill and the Worker's prompts cannot drift apart. */
const fs=require('fs'),path=require('path');
const {FAMILIES,familyText,kitText}=require('../src/families.js');
const out=path.join(__dirname,'..','.claude','skills','course-builder','references','families.md');
const text=`# Subject families\n\nGenerated from \`src/families.js\` by \`scripts/sync-skill.js\` — edit the source, not this file.\nOne schema (see schema.md), four ways of filling it in. The Worker composes its build prompts from\nthe same text, so what you read here is exactly what the builder is told.\n\n`+
  Object.keys(FAMILIES).map(id=>`## ${FAMILIES[id].name} — \`${id}\`\n\n\`\`\`\n${familyText(id)}\n\`\`\`\n\nRoom kit (the depth the Worker writes and checks for every room of a course in this family; src/kit-validator.js is the contract):\n\n\`\`\`\n${kitText(id)}\n\`\`\`\n`).join('\n');
if(process.argv.includes('--check')){const cur=fs.existsSync(out)?fs.readFileSync(out,'utf8'):'';if(cur!==text){console.error('families.md is out of date with src/families.js — run: node scripts/sync-skill.js');process.exit(1);}console.log('families.md in sync');}
else{fs.writeFileSync(out,text);console.log('wrote',path.relative(process.cwd(),out));}
