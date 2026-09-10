/* Hand-built room kits live in src/kits/<course id>.js, one file per course, exporting { KITS: { <topic id>: kit } }.
   build.js writes each kit to dist/kits/<course>/<topic>.json and injects a small index into the app, so the
   page stays small and a room fetches its kit from the site on first open. */
const fs = require('fs'), path = require('path');
function collectKits(dir) {
  const out = {};
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).filter(f => /\.js$/.test(f) && !/test/.test(f))) {
    const m = require(path.resolve(dir, f));
    const id = m.ID || path.basename(f, '.js').toUpperCase();
    out[id] = m.KITS || {};
  }
  return out;
}
/* { course: { topic: builtAt } } — what the app needs to know which rooms have a kit and when it was written. */
function kitIndex(all) {
  const idx = {};
  for (const [id, kits] of Object.entries(all)) { idx[id] = {}; for (const [t, k] of Object.entries(kits)) idx[id][t] = (k.built && k.built.at) || '1970-01-01T00:00:00Z'; }
  return idx;
}
function writeKits(all, distDir) {
  let n = 0;
  for (const [id, kits] of Object.entries(all)) {
    const d = path.join(distDir, 'kits', id); fs.mkdirSync(d, { recursive: true });
    for (const [t, k] of Object.entries(kits)) { fs.writeFileSync(path.join(d, encodeURIComponent(t) + '.json'), JSON.stringify(k)); n++; }
  }
  return n;
}
module.exports = { collectKits, kitIndex, writeKits };
