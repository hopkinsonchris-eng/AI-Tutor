/* Hand-authored depth. Keyed by spec id → topic id. Currently: Edexcel Mathematics 9MA0 (19 rooms). */
const a = require('./content-a.js'), b = require('./content-b.js'), c = require('./content-c.js');
const l1 = require('./lessons-a.js'), l2 = require('./lessons-b.js'), l3 = require('./lessons-c.js');
const rooms = {}; for (const r of [...a.ROOMS, ...b.ROOMS, ...c.ROOMS]) rooms[r.id] = r;
const lessons = { ...l1.LESSONS, ...l2.LESSONS, ...l3.LESSONS };
module.exports = { AUTHORED: { 'EDX-9MA0': { rooms, lessons, sources: l3.SOURCES, official: l3.OFFICIAL, dojo: c.DOJO, read: c.READ, boundaries: c.BOUNDARIES } } };
