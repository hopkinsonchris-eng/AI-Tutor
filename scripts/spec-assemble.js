#!/usr/bin/env node
/* Assemble a hand-built specification map from its scratch files:
     scratch/courses/<id>/front.json      identity, components, options, ao, markConventions, topicPlan (from the outline step)
     scratch/courses/<id>/topics/<t>.json one file per topic in topicPlan: { id, name, caseStudies, ideas, skills? }
     scratch/courses/<id>/provenance.json the document as fetched (npm run course -- fetch)
   and write src/specs/<file>.js exporting SPEC_<CODE>, then validate it against src/spec-validator.js.

   node scripts/spec-assemble.js <id> [--file <name.js>] */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const { validateSpec } = require(path.join(ROOT, 'src', 'spec-validator.js'));
const id = process.argv[2]; if (!id) { console.log('usage: spec-assemble <id>'); process.exit(1); }
const fi = process.argv.indexOf('--file');
const SCRATCH = process.env.COURSE_SCRATCH || path.join(ROOT, 'scratch', 'courses');
const D = path.join(SCRATCH, id);
const front = JSON.parse(fs.readFileSync(path.join(D, 'front.json'), 'utf8'));
const prov = fs.existsSync(path.join(D, 'provenance.json')) ? JSON.parse(fs.readFileSync(path.join(D, 'provenance.json'), 'utf8')) : null;
const plan = front.topicPlan || [];
const topics = []; const missing = [];
for (const p of plan) {
  const f = path.join(D, 'topics', p.id + '.json'); if (!fs.existsSync(f)) { missing.push(p.id); continue; }
  const t = JSON.parse(fs.readFileSync(f, 'utf8'));
  const topic = { id: p.id, component: p.component, option: p.option || null, name: p.name || t.name, caseStudies: t.caseStudies || [], ideas: t.ideas || [] };
  if (t.skills && t.skills.length) topic.skills = t.skills;
  topics.push(topic);
}
const { topicPlan, notes, family, ...head } = front;
const spec = { ...head, source: prov ? { url: prov.url, etag: prov.etag, lastModified: prov.lastModified, length: prov.length, checkedAt: prov.checkedAt } : (front.source || null), topics };
if (!spec.source) delete spec.source;
const code = String(spec.code).replace(/[^A-Za-z0-9]/g, '').toUpperCase();
const exportName = 'SPEC_' + code;
const boardSlug = { 'AQA': 'aqa', 'OCR': 'ocr', 'Pearson Edexcel': 'edexcel', 'Edexcel': 'edexcel', 'Eduqas': 'eduqas', 'WJEC': 'wjec' }[spec.board] || String(spec.board).toLowerCase().replace(/[^a-z]/g, '');
const file = fi > 0 ? process.argv[fi + 1] : `${boardSlug}-${code.toLowerCase()}.js`;
const title = `${spec.board} ${spec.level} ${spec.subject} (${spec.code})`;
const out = `/* ${title} — built by hand in a Claude Code session from the official specification PDF\n   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.\n   Content statements are the board's own, condensed; codes are copied character for character. */\nconst ${exportName} = ${JSON.stringify(spec, null, 1)};\nmodule.exports = { ${exportName} };\n`;
fs.writeFileSync(path.join(ROOT, 'src', 'specs', file), out);
const r = validateSpec(spec);
console.log(r.ok ? 'VALID' : 'REFUSED', 'src/specs/' + file, '·', spec.topics.length, 'topics ·', r.ideas, 'ideas', missing.length ? '· MISSING topic files: ' + missing.join(', ') : '');
for (const p of r.problems) console.log(' - ' + p);
for (const t of spec.topics) console.log(String(t.id).padEnd(8), String(t.ideas.length).padStart(3), 'ideas', String(t.caseStudies.length).padStart(2), 'cases ', t.name);
process.exitCode = r.ok && !missing.length ? 0 : 1;
