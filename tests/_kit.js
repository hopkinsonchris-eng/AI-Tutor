/* A kit that meets the contract, for the tests that need one: the depth smokes, the Worker's routes and
   the app's rooms. Deterministic, valid for any topic and family; `over` patches it to make it invalid. */
function sampleKit(topic, family, over = {}) {
  const code0 = topic.ideas[0].code;
  const kit = {
    lesson: {
      why: `Why this room exists for ${topic.name}: `.padEnd(220, 'because it is examined in every series and lost for avoidable reasons. '),
      idea: topic.ideas.map(i => ({ h: `${i.idea}`, t: `${i.content} `.padEnd(180, 'In the exam this is tested by asking you to apply it to an unfamiliar case, so learn the form and the reason. '), code: i.code })),
      examples: [1, 2, 3, 4].map(n => ({ title: `Worked example ${n} for ${topic.name}`, setup: `A student is given the full situation for ${topic.name}: the values 4, 8 and 12 and is asked for the mean.`, steps: ['The three values are 4, 8 and 12, so the total is 24.', 'Mean = total ÷ count = 24 ÷ 3 = 8.', 'Check: 8 sits between 4 and 12, so the answer is sensible.'], cues: ['What is the total of the three values?', 'How do you turn the total into a mean?', 'How would you check the answer is sensible?'] })),
      check: [1, 2, 3].map(n => ({ q: `Check ${n}?`, a: `Answer ${n}.` })),
    },
    room: {
      facts: ['Fact one the student must be able to write from memory.', 'Fact two.', 'Fact three.'],
      questions: Array.from({ length: 12 }, (_, i) => ({ q: `Question ${i + 1} on ${topic.name}?`, a: `Answer ${i + 1}`, sol: `Full solution ${i + 1}: apply the idea, then check.`, m: 2 + (i % 3), d: 1 + (i % 3), hints: ['Hint one.', 'Hint two.', 'Hint three.'], codes: [code0] })),
      exit: [1, 2, 3, 4].map(n => ({ q: `Exit ${n}?`, a: `Exit answer ${n}.` })),
    },
    cards: Array.from({ length: 12 }, (_, i) => ({ front: `Card ${i + 1} front`, back: `Card ${i + 1} back`, code: code0 })),
    extras: { quantitative: [{ kind: 'formulae', title: 'Formulae sheet', items: ['a² + b² = c²'] }],
      science: [{ kind: 'practical', title: 'Required practical', items: ['Method step one', 'Independent variable: x'] }, { kind: 'extended', title: '6-mark model answer', items: ['Point, evidence, link.'] }],
      essay: [{ kind: 'paragraph', title: 'Model paragraph — Level 4', items: ['A developed paragraph.'] }, { kind: 'paragraph', title: 'Model paragraph — Level 2', items: ['A thinner paragraph and why it scores less.'] }, { kind: 'factfile', title: 'Case study fact file', items: ['Fact.'] }, { kind: 'plan', title: 'Essay plan', items: ['Intro', 'P1', 'P2', 'Conclusion'] }],
      language: [{ kind: 'vocab', title: 'Vocabulary: family', items: ['la famille'] }, { kind: 'vocab', title: 'Vocabulary: relationships', items: ['l’amitié'] }, { kind: 'grammar', title: 'Grammar: the perfect tense', items: ['avoir + past participle'] }] }[family] || [],
  };
  const apply = (o, patch) => { for (const [k, v] of Object.entries(patch)) { if (v && typeof v === 'object' && !Array.isArray(v) && o[k] && typeof o[k] === 'object' && !Array.isArray(o[k])) apply(o[k], v); else o[k] = v; } return o; };
  return apply(kit, over);
}
module.exports = { sampleKit };
