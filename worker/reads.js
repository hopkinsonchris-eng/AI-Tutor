/* Pages to read for a room: the trusted UK sites the search is fenced to, and the pure helpers around them.
   Nothing here fetches or calls a model; the route in index.js does that, so these parts are tested on their own.
   A site is a host, the name a student sees, whether it is free or freemium, and the subject families it serves. */
export const READ_SITES = [
  { host: 'physicsandmathstutor.com', name: 'PMT', free: 'free', fam: ['all'] },
  { host: 'senecalearning.com', name: 'Seneca', free: 'freemium', fam: ['all'] },
  { host: 'savemyexams.com', name: 'Save My Exams', free: 'freemium', fam: ['all'] },
  { host: 'corbettmaths.com', name: 'Corbettmaths', free: 'free', fam: ['maths'] },
  { host: 'mathsgenie.co.uk', name: 'Maths Genie', free: 'free', fam: ['maths'] },
  { host: 'drfrost.org', name: 'Dr Frost', free: 'free', fam: ['maths'] },
  { host: 'isaacscience.org', name: 'Isaac Science', free: 'free', fam: ['maths', 'science'] },
  { host: 'cognitoedu.org', name: 'Cognito', free: 'free', fam: ['science', 'maths'] },
  { host: 'chemguide.co.uk', name: 'Chemguide', free: 'free', fam: ['science'] },
  { host: 'edu.rsc.org', name: 'RSC Education', free: 'free', fam: ['science'] },
  { host: 'spark.iop.org', name: 'IOP Spark', free: 'free', fam: ['science'] },
  { host: 'internetgeography.net', name: 'Internet Geography', free: 'free', fam: ['geography'] },
  { host: 'tutor2u.net', name: 'tutor2u', free: 'free', fam: ['social'] },
  { host: 'learning.parliament.uk', name: 'UK Parliament', free: 'free', fam: ['social'] },
  { host: 'businesscasestudies.co.uk', name: 'Business Case Studies', free: 'free', fam: ['social'] },
  { host: 'learngerman.dw.com', name: 'DW Learn German', free: 'free', fam: ['german'] },
  { host: 'goethe.de', name: 'Goethe-Institut', free: 'free', fam: ['german'] },
  { host: 'poetryfoundation.org', name: 'Poetry Foundation', free: 'free', fam: ['english'] }
];
/* the course's own board is always on the list */
export const BOARD_HOSTS = [['AQA', 'aqa.org.uk'], ['Pearson', 'qualifications.pearson.com'], ['Edexcel', 'qualifications.pearson.com'], ['OCR', 'ocr.org.uk'], ['WJEC', 'wjec.co.uk'], ['Eduqas', 'eduqas.co.uk']];
export const READ_KINDS = ['notes', 'practice', 'official'];

/* which family of sites a subject belongs to, from its name */
export function readFamily(subject) {
  const s = String(subject || '').toLowerCase();
  if (/math|further/.test(s)) return 'maths';
  if (/biolog|chemist|physic|science/.test(s)) return 'science';
  if (/geograph/.test(s)) return 'geography';
  if (/politic|business|econom|sociolog|law|psycholog|history/.test(s)) return 'social';
  if (/german/.test(s)) return 'german';
  if (/english|literature|language/.test(s)) return 'english';
  return 'other';
}
/* the sites the search is fenced to for a room: the family's sites, the sites for every subject, and the board */
export function sitesFor(ctx) {
  const fam = readFamily(ctx.subject);
  const out = READ_SITES.filter(s => s.fam.includes('all') || s.fam.includes(fam)).map(s => ({ ...s }));
  const board = String(ctx.board || '');
  for (const [name, host] of BOARD_HOSTS) if (board.includes(name) && !out.some(s => s.host === host)) { out.push({ host, name: board, free: 'free', fam: ['board'], official: true }); break; }
  return out;
}
export function hostOf(url) { try { return new URL(url).hostname.toLowerCase().replace(/^www\./, ''); } catch (e) { return ''; } }
export function siteFor(url, sites) { const h = hostOf(url); if (!h) return null; return sites.find(s => h === s.host || h.endsWith('.' + s.host)) || null; }
/* a url stripped of fragments and tracking so two mentions of one page count once */
export function cleanUrl(url) {
  try { const u = new URL(url); if (u.protocol !== 'https:') return null; u.hash = ''; for (const k of [...u.searchParams.keys()]) if (/^utm_|^fbclid$|^gclid$/.test(k)) u.searchParams.delete(k); return u.href; } catch (e) { return null; }
}
/* the model's answer, one page per line as url | title | kind, kept only when the page is https and on the list */
export function readCandidates(text, sites, max = 12) {
  const out = [], seen = new Set();
  for (const line of String(text || '').split('\n')) {
    const m = line.match(/(https?:\/\/[^\s|]+)/); if (!m) continue;
    const url = cleanUrl(m[1]); if (!url) continue;
    const site = siteFor(url, sites); if (!site) continue;
    if (seen.has(url)) continue; seen.add(url);
    const parts = line.split('|').map(x => x.trim()); const title = (parts[1] || '').slice(0, 160); const kind = READ_KINDS.includes((parts[2] || '').toLowerCase()) ? parts[2].toLowerCase() : site.official ? 'official' : 'notes';
    out.push({ url, title, kind, site: site.name, free: site.free });
    if (out.length >= max) break;
  }
  return out;
}
/* the page's own title, from its head */
export function pageTitle(html) {
  const m = String(html || '').match(/<title[^>]*>([\s\S]{0,300}?)<\/title>/i); if (!m) return '';
  return m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, '’').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
}
/* a page that answers 200 but says it is gone */
export function looksDead(title) { return /\b(not found|404|page cannot be found|page doesn.t exist|no longer available|access denied)\b/i.test(String(title || '')); }
/* the pages the model picked, matched back to the verified list, at most `max`, each with a short why */
export function matchPicks(picks, verified, max = 4) {
  const items = [], seen = new Set();
  for (const p of Array.isArray(picks) ? picks : []) {
    const url = cleanUrl(p && p.url); if (!url || seen.has(url)) continue;
    const v = verified.find(x => x.url === url); if (!v) continue; seen.add(url);
    items.push({ ...v, why: String(p.why || '').replace(/\s+/g, ' ').trim().slice(0, 120) });
    if (items.length >= max) break;
  }
  return items;
}
