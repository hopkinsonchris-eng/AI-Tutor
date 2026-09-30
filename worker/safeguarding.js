/**
 * A deterministic backstop for pupil safety on the tutor proxy, alongside (never instead of) the model's
 * own TUTOR_SYSTEM guardrail in index.js. A school reviewing this platform put its objection plainly: "it
 * is not sufficient for an AI system simply to contain its own guardrails" — a concerning message has to
 * be caught even when the model would have handled it well on its own, a human has to be able to see it
 * happened, and in the clearest cases the pupil's answer must not depend on the model improvising well in
 * the moment.
 *
 * This is deliberately a small, readable set of first-person phrasings, not a clinical classifier: it
 * exists to guarantee two things — the pupil is pointed at real help, and a human sees the exchange —
 * never to itself decide whether a pupil is at risk. Two tiers:
 *
 *   'alert'    — named self-harm/suicidal intent or an abuse disclosure. The model is never called:
 *                SAFE_RESPONSE is returned directly, so a pupil in the worst moments never depends on the
 *                model's own judgement, and the flag raised is marked urgent.
 *   'signpost' — broader distress language (bullying, hopelessness, not coping) where the tutor still
 *                answers the study question, but SUPPORT_LINES is appended to what it says so the pupil
 *                sees real support resources regardless of how the model responded, and the flag raised is
 *                marked routine.
 *
 * Every match is logged by the caller (see notifySafeguarding in index.js) whether or not it changes the
 * reply, because reviewing what the filter catches — and misses — is how it gets better, and because a
 * routine flag can still be the first sign of something that needs a human's attention.
 */

export const TERMS = [
  /* ---- alert: named self-harm / suicidal intent, first person ---- */
  { tier: 'alert', category: 'suicide-or-self-harm', re: /\b(i|i'm|im|i am|i've|ive)\b[^.!?\n]{0,40}\b(want(ed)? to|going to|gonna|thinking (about|of)|plan(ning)? to|about to)\b[^.!?\n]{0,40}\b(kill(ing)? myself|end(ing)? my life|end(ing)? it all|hurt(ing)? myself|harm(ing)? myself|cut(ting)? myself|die|dying)\b/i },
  { tier: 'alert', category: 'suicide-or-self-harm', re: /\b(how (do|can|would) i|ways? to)\b[^.!?\n]{0,30}\b(kill myself|end (my life|it all)|hurt myself|harm myself)\b/i },
  { tier: 'alert', category: 'suicide-or-self-harm', re: /\bi don'?t want to (be here|live|wake up)\s*(any\s?more)?\b/i },
  { tier: 'alert', category: 'suicide-or-self-harm', re: /\bi('m| am) going to kill myself\b/i },
  /* ---- alert: disclosure of abuse, first person ---- */
  { tier: 'alert', category: 'abuse-disclosure', re: /\b(my |our )?(dad|mum|mother|father|stepdad|stepmum|stepfather|stepmother|brother|sister|uncle|aunt|cousin|teacher|coach|carer|guardian)\b[^.!?\n]{0,30}\b(hits?|hurts?|touches?|touched|abuses?|abused)\s+me\b/i },
  { tier: 'alert', category: 'abuse-disclosure', re: /\bi('m| am) being abused\b/i },
  { tier: 'alert', category: 'abuse-disclosure', re: /\bi don'?t feel safe at home\b/i },
  /* ---- signpost: broader distress, first person ---- */
  { tier: 'signpost', category: 'distress', re: /\bi hate (my life|myself)\b/i },
  { tier: 'signpost', category: 'distress', re: /\bno\s?one (would care|cares) if i (disappeared|wasn'?t here|was gone)\b/i },
  { tier: 'signpost', category: 'distress', re: /\bi can'?t (cope|take (it|this) any\s?more)\b/i },
  { tier: 'signpost', category: 'bullying', re: /\bi('m| am) being bullied\b/i },
  { tier: 'signpost', category: 'bullying', re: /\beveryone (at school )?(hates|bullies) me\b/i },
  { tier: 'signpost', category: 'eating', re: /\bi('m| am|'ve| have) (been )?(starving myself|not eating|making myself (sick|throw up))\b/i },
];

export const SUPPORT_LINES = `If things feel like too much right now, please tell a parent, teacher or another adult you trust — you don't have to carry it alone. You can also contact Childline free, any time, on 0800 1111 or at childline.org.uk, or text SHOUT to 85258 to talk to a trained volunteer.`;

/* The fixed reply for an 'alert' match: always this text, never the model's own words, so it never
   depends on the model improvising well in the worst moments. */
export const SAFE_RESPONSE = `I'm really glad you told me, and I want you to get the right support — that's not something I can help with as a study tool. ${SUPPORT_LINES}`;

/* The first (or, once one is found, the most severe) concern in some free text, or null. Every category a
   text matches is available by scanning TERMS directly; a caller acting on the result only needs the one
   most severe match. */
export function scanForConcern(text) {
  const t = String(text || '');
  if (!t) return null;
  let best = null;
  for (const term of TERMS) {
    if (!term.re.test(t)) continue;
    if (term.tier === 'alert') return { tier: term.tier, category: term.category };
    best = best || { tier: term.tier, category: term.category };
  }
  return best;
}
