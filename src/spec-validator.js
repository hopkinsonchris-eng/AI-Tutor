/* The contract every specification map must meet before the platform will load it — the four
   hand-written specs and every generated one alike. Used by tests/spec.test.js and by the Worker's
   course builder, so a generated spec is held to exactly the standard a hand-written one is.

   validateSpec(spec) -> { ok, problems: [string], ideas: number }
   Problems are written so a model can act on them: each names the topic or field concerned. */

const REQUIRED_TOP = ['id', 'board', 'subject', 'code', 'level', 'version'];

function validateSpec(spec) {
  const problems = [];
  const bad = (msg) => problems.push(msg);
  if (!spec || typeof spec !== 'object') return { ok: false, problems: ['spec is not an object'], ideas: 0 };

  for (const k of REQUIRED_TOP) if (!spec[k]) bad(`missing top-level field "${k}"`);
  if (spec.level && !['A level', 'GCSE'].includes(spec.level)) bad(`level must be "A level" or "GCSE", got "${spec.level}"`);

  const comps = Array.isArray(spec.components) ? spec.components : [];
  if (!comps.length) bad('components: at least one is required');
  const w = comps.reduce((a, c) => a + (Number(c.weight) || 0), 0);
  if (comps.length && Math.abs(w - 100) > 1) bad(`components: weights must sum to 100 (the document's own percentages, within 1), they sum to ${Math.round(w * 100) / 100}`);
  for (const c of comps) {
    if (!c.id || !c.name) bad(`component "${c.id || '?'}": needs id and name`);
    if (!(c.marks > 0)) bad(`component "${c.id}": marks must be > 0`);
    if (!(c.minutes > 0) && !c.nea) bad(`component "${c.id}": minutes must be > 0 unless nea`);
  }
  const compIds = new Set(comps.map(c => c.id));

  const ao = Array.isArray(spec.ao) ? spec.ao : [];
  if (ao.length < 2) bad('ao: at least two assessment objectives are required');
  for (const a of ao) if (!a.id || !a.text) bad(`ao "${a.id || '?'}": needs id and text`);

  const mc = spec.markConventions;
  if (!mc || !mc.style) bad('markConventions.style is required ("levels" or "points")');
  else if (!['levels', 'points'].includes(mc.style)) bad(`markConventions.style must be "levels" or "points", got "${mc.style}"`);
  if (!mc || !Array.isArray(mc.commandWords) || mc.commandWords.length < 5) bad('markConventions.commandWords: at least five are required');
  else for (const cw of mc.commandWords) if (!cw.word || !cw.means) bad(`commandWords entry "${cw.word || '?'}": needs word and means`);
  if (spec.essaySubject && !(mc && Array.isArray(mc.essayShapes) && mc.essayShapes.length >= 3)) bad('essaySubject is true, so markConventions.essayShapes needs at least three shapes');
  if (mc && Array.isArray(mc.essayShapes)) for (const sh of mc.essayShapes) if (!(sh.marks > 0) || !sh.structure) bad(`essayShapes entry (${sh.marks} marks): needs marks and structure`);

  const topics = Array.isArray(spec.topics) ? spec.topics : [];
  if (!topics.length) bad('topics: at least one is required');
  const topicIds = new Set();
  for (const tp of topics) {
    if (!tp.id) { bad('a topic has no id'); continue; }
    if (topicIds.has(tp.id)) bad(`topic "${tp.id}": id is duplicated`);
    topicIds.add(tp.id);
    if (!tp.name) bad(`topic "${tp.id}": needs a name`);
    if (!compIds.has(tp.component)) bad(`topic "${tp.id}": component "${tp.component}" is not one of ${[...compIds].join(', ')}`);
    if (!Array.isArray(tp.caseStudies)) bad(`topic "${tp.id}": caseStudies must be an array (empty is fine)`);
    if (tp.links !== undefined) { if (!Array.isArray(tp.links)) bad(`topic "${tp.id}": links must be an array`); else for (const l of tp.links) { if (!l || !l.t || !l.url) bad(`topic "${tp.id}": each link needs t (a title) and url`); else if (!/^https:\/\//.test(l.url)) bad(`topic "${tp.id}": link "${l.t}" must start with https://`); } }
    const ideas = Array.isArray(tp.ideas) ? tp.ideas : [];
    if (ideas.length < 2) bad(`topic "${tp.id}": needs at least two key ideas, has ${ideas.length}`);
    const codes = new Set();
    for (const k of ideas) {
      if (!k.code || !k.q || !k.idea || !k.content) bad(`topic "${tp.id}" idea "${k.code || '?'}": needs code, q, idea and content`);
      else if (String(k.content).length < 30) bad(`topic "${tp.id}" idea "${k.code}": content is too thin (under 30 characters)`);
      if (k.code) { if (codes.has(k.code)) bad(`topic "${tp.id}": idea code "${k.code}" is duplicated`); codes.add(k.code); }
    }
  }

  const options = Array.isArray(spec.options) ? spec.options : [];
  const optIds = new Set(options.map(o => o.id));
  for (const o of options) {
    if (!o.id || !o.label) bad(`option "${o.id || '?'}": needs id and label`);
    const from = Array.isArray(o.from) ? o.from : [];
    const missing = from.filter(f => !topicIds.has(f));
    if (missing.length) bad(`option "${o.id}": choices ${JSON.stringify(missing)} are not topic ids`);
    if (!(o.choose >= 1) || o.choose > from.length) bad(`option "${o.id}": choose must be between 1 and ${from.length}`);
  }
  for (const tp of topics) if (tp.option !== undefined && tp.option !== null && !optIds.has(tp.option)) bad(`topic "${tp.id}": option "${tp.option}" does not exist`);

  for (const c of comps) if (!c.coversAll && !topics.some(tp => tp.component === c.id)) bad(`component "${c.id}": has no topics and is not marked coversAll`);

  /* resources are optional: checked hub pages the rail shows in every room of the course */
  if (spec.resources !== undefined) {
    const res = spec.resources;
    if (!res || typeof res !== 'object' || !Array.isArray(res.hubs)) bad('resources: must be an object with a hubs array');
    else for (const h of res.hubs) { if (!h || !h.name || !h.url) bad(`resources hub "${(h && h.name) || '?'}": needs name and url`); else if (!/^https:\/\//.test(h.url)) bad(`resources hub "${h.name}": url must start with https://`); }
  }

  const ideas = topics.reduce((n, tp) => n + (Array.isArray(tp.ideas) ? tp.ideas.length : 0), 0);
  return { ok: problems.length === 0, problems, ideas };
}

module.exports = { validateSpec, REQUIRED_TOP };
