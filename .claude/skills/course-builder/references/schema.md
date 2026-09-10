# The specification map

One object per qualification. `src/spec-validator.js` is the contract; this is what each field
means. Study `src/specs/ocr-h481.js` (essay) and `src/specs/edexcel-9ma0.js` (quantitative) for the
tone — the content is written in the board's own terms, not paraphrased.

```js
{
  id: 'OCR-H481',              // <board prefix>-<code>: AQA-, EDX- (Pearson Edexcel), OCR-, EDQ- (Eduqas), WJEC-
  board: 'OCR', subject: 'Geography', code: 'H481',
  level: 'A level',            // or 'GCSE'
  version: 'Specification v1.4 (June 2023); verify against ocr.org.uk',   // the document's issue and date
  firstExam: 2018,
  essaySubject: true,          // essay family only

  components: [                // every paper, weights are the document's own percentages and sum to 100 within rounding
    { id: 'C1', name: 'Physical systems', paperCode: 'H481/01', marks: 66, weight: 22, minutes: 90,
      sections: ['A: Landscape systems (the chosen option)', 'B: Earth’s life support systems'],
      resourceBooklet: true },
    { id: 'NEA', name: 'Independent investigation', marks: 60, weight: 20, nea: true, coversAll: true },
  ],

  options: [                   // where the document says "choose one of"
    { id: 'landscape', label: 'Landscape system (Component 1, Section A)', choose: 1, from: ['1.1.1', '1.1.2', '1.1.3'] },
  ],

  ao: [ { id: 'AO1', label: 'Knowledge and understanding', text: '…the document’s wording…' }, /* ≥ 2 */ ],

  markConventions: {
    style: 'levels',           // 'levels' (essay, language) or 'points' (quantitative, science)
    summary: '…how marks are awarded, in a paragraph…',           // optional but expected
    commandWords: [ { word: 'Explain', means: 'Give reasons and mechanisms…' }, /* ≥ 5 */ ],
    essayShapes: [ { marks: 33, minutes: 45, structure: '…what the examiner rewards…' } ],   // ≥ 3 if essaySubject; sciences give their 6/9-markers; quantitative gives []
  },

  topics: [                    // the document's own sections, in its order
    { id: '1.1.1', component: 'C1', option: 'landscape',       // option: null when not optional
      name: 'Landscape systems — Option A: Coastal landscapes',
      caseStudies: ['One high-energy coastline', '…'],          // required examples / worked-example prompts / practicals, per family
      ideas: [                                                 // ≥ 2, the document decides the real number
        { code: '1.a', q: 'How can coastal landscapes be viewed as systems?',
          idea: 'Coastal landscapes as systems',
          content: 'Inputs, processes and outputs; flows of energy and material; sediment cells.' },  // ≥ 30 characters, the board’s terms
      ],
      skills: ['Observation and measurement', '…'] },           // optional
  ],
}
```

## Provenance (Worker-built courses)

Stored alongside the spec, shown in Admin and as one line in the app:

```
sourceUrl, etag, lastModified, length     — the document, as fetched
builtAt, models, promptVersion            — how it was built
judge: { score, coverage, invented, notes } — the judge's verdict
family                                    — which rules were applied
```
