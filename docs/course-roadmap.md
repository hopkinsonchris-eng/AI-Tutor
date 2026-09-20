# Course roadmap — every remaining specification, most popular first

21 courses are built (specification map from the board's PDF, judged room kits for every room). This is the order for the
other 135 in the boards' own catalogues, ranked by how many students sat each specification in summer 2025.
Top 25 covers 77% of the remaining entries; top 50 covers 89%.

Sources: the boards' published summer 2025 statistics for England as tabulated by arc exams
(https://arcexams.co.uk/gcse-grade-comparison-analysis-summer-2025/ and https://arcexams.co.uk/a-level-grade-comparison-analysis-summer-2025/),
and JCQ's A and AS level trends, summer 2025, for UK totals. Combined Science is not in arc's tabulation, so its three boards are
estimated from the separate-science shares (AQA about 80% of the 925,606 UK double-award entries). Entries count exam entries,
so Combined Science counts each student twice. Where a board rewrote a specification for first exams in 2026 (AQA and Edexcel
languages), the 2025 entries of the outgoing specification stand in.

## How a course gets built

The same procedure every time (see `.claude/skills/course-builder`): fetch the board's PDF with provenance, outline identity,
components, assessment objectives and options, write every topic's key ideas with the document's own codes, validate, judge
with a fresh model, then write and judge a room kit for every room. Siblings share work: the AQA separate sciences are the
Combined Science rooms plus the extra content; AQA and OCR A level Maths carry the same DfE content as Edexcel 9MA0, so their
rooms are re-keyed rather than rewritten; the Edexcel English Language 2.0 resit paper shares its skills with 1EN0.

## Catalogue corrections (applied 20 September 2026)

AQA's 2024 modern-language specifications, first taught September 2024 and first examined summer 2026, are **8692 Spanish**,
**8652 French** and **8662 German**; 8698, 8658 and 8668 are the outgoing 2016 specifications. An earlier note here had the
change the wrong way round and the catalogue was carrying the old codes; it now carries the 2024 ones. The 2025 entry counts
below are the outgoing specifications', which stand in for the new ones.

Every specification in the top 50 is in `data/catalogue.json`. Wave 1 has a verified PDF link for every course but
French, which AQA serves only from its content network (`cdn.sanity.io`), off the catalogue's domain list:

| Course | Verified specification PDF |
|---|---|
| AQA Spanish 8692 | https://filestore.aqa.org.uk/resources/spanish/specifications/AQA-8692-SP-2024.PDF |
| AQA French 8652 | not on AQA's own domain — pass `--url https://cdn.sanity.io/files/p28bar15/green/672787d9e5c10db595a68be124976cf5ea1c5ba6.pdf` (the link on aqa.org.uk/subjects/french/gcse/french-8652/specification) |
| Eduqas English Language C700 | https://www.eduqas.co.uk/media/10ea1en0/eduqas-gcse-english-language-from-2015-e.pdf |
| AQA History 8145 | https://filestore.aqa.org.uk/resources/history/specifications/AQA-8145-SP-2016.PDF |
| Pearson Edexcel Business 1BS0 | https://qualifications.pearson.com/content/dam/pdf/GCSE/Business/2017/specification-and-sample-assessments/gcse-business-spec-2017.pdf |
| OCR Computer Science J277 | https://www.ocr.org.uk/Images/558027-specification-gcse-computer-science-j277.pdf |
| Pearson Edexcel English Language 2.0 1EN2 | https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Language/2021/specification-and-sample-assessment/9781446966709-gcse-2021-l12-eng-lang-2-0.pdf |
| AQA Psychology 7182 | https://filestore.aqa.org.uk/resources/psychology/specifications/AQA-7181-7182-SP-2015.PDF |
| Eduqas English Literature C720 | https://www.eduqas.co.uk/media/x2zpzwgt/eduqas-gcse-english-lit-spec-from-2015-e.pdf |
| Eduqas Mathematics C300 | https://www.eduqas.co.uk/media/cosjcbs1/eduqas-gcse-maths-spec-from-2015-e.pdf |

AQA German 8662 (wave 3) is verified too: https://filestore.aqa.org.uk/resources/german/specifications/AQA-8662-SP-2024.PDF

## Building a wave on the batch API

`scripts/batch-course.js` runs the Worker's own pipeline through the Message Batches API: the same prompts, schemas,
validators and judge, Sonnet 5 writing and Opus 5 judging, at half the token price and on API credits rather than a
subscription. Every request's usage goes to a ledger, so a wave's cost is measured, not estimated.

```
export ANTHROPIC_API_KEY=…
node scripts/batch-course.js wave 1 --url AQA-8652=https://cdn.sanity.io/files/p28bar15/green/672787d9e5c10db595a68be124976cf5ea1c5ba6.pdf
node scripts/batch-course.js cost
npm test
```

A map the judge scores under 0.8, or whose mark style contradicts the family prior the tests enforce, is held in
`scratch/courses/<id>/batch/` with the judge's report instead of reaching `src/specs/`. Rooms refused twice ship without a
kit and are named in the kits file; a rerun retries only those. Details and the resume rules are in
`.claude/skills/course-builder/references/batch.md`.

## Already built

| Level | Subject | Board | Code | Entries 2025 |
|---|---|---|---|---|
| GCSE | Combined Science: Trilogy | AQA | 8464 | 740,000 |
| GCSE | English Language | AQA | 8700 | 593,963 |
| GCSE | Mathematics | Pearson Edexcel | 1MA1 | 521,132 |
| GCSE | English Literature | AQA | 8702 | 498,874 |
| GCSE | Geography | AQA | 8035 | 202,553 |
| GCSE | Mathematics | AQA | 8300 | 189,529 |
| GCSE | History | Pearson Edexcel | 1HI0 | 167,004 |
| GCSE | Biology | AQA | 8461 | 141,274 |
| GCSE | Physics | AQA | 8463 | 134,975 |
| GCSE | Chemistry | AQA | 8462 | 134,482 |
| GCSE | Religious Studies A | AQA | 8062 | 112,987 |
| GCSE | Combined Science | Pearson Edexcel | 1SC0 | 110,000 |
| A level | Mathematics | Pearson Edexcel | 9MA0 | 75,079 |
| GCSE | Mathematics | OCR | J560 | 74,199 |
| A level | Business | Pearson Edexcel | 9BS0 | 21,844 |
| A level | Politics | Pearson Edexcel | 9PL0 | 16,090 |
| A level | Geography | OCR | H481 | 4,641 |
| GCSE | Mathematics (International GCSE, Specification A, Foundation tier) | Pearson Edexcel | 4MA1 | — |
| GCSE | English Language (International GCSE, Specification A) | Pearson Edexcel | 4EA1 | — |
| GCSE | English Literature (International GCSE) | Pearson Edexcel | 4ET1 | — |
| GCSE | German (International GCSE) | Pearson Edexcel | 4GN1 | — |

## The order of work

### Wave 1 — The ten biggest GCSEs — start here

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 1 | GCSE | Spanish | AQA | 8692 | 102,687 | 5% | the 2024 specification, first exams 2026 (entries are the outgoing 8698's); verified link |
| 2 | GCSE | French | AQA | 8652 | 97,806 | 10% | the 2024 specification, first exams 2026 (entries are the outgoing 8658's); PDF only on AQA's content network — build with --url |
| 3 | GCSE | English Language | Eduqas | C700 | 97,094 | 14% |  |
| 4 | GCSE | History | AQA | 8145 | 93,746 | 19% | option-heavy |
| 5 | GCSE | Business | Pearson Edexcel | 1BS0 | 73,184 | 22% |  |
| 6 | GCSE | Computer Science | OCR | J277 | 66,716 | 26% |  |
| 7 | GCSE | English Language 2.0 | Pearson Edexcel | 1EN2 | 66,425 | 29% | the post-16 resit spec; verified link |
| 8 | A level | Psychology | AQA | 7182 | 63,378 | 32% | the second-biggest A level, one board has 85% of it |
| 9 | GCSE | English Literature | Eduqas | C720 | 59,417 | 35% |  |
| 10 | GCSE | Mathematics | Eduqas | C300 | 49,187 | 37% |  |

### Wave 2 — Ranks 11 to 20, where the first A level (AQA Psychology) appears

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 11 | GCSE | Religious Studies | Eduqas | C120 | 48,447 | 40% |  |
| 12 | GCSE | English Literature | Pearson Edexcel | 1ET0 | 46,358 | 42% |  |
| 13 | GCSE | Combined Science A (Gateway) | OCR | J250 | 45,000 | 44% | estimate: ~5% of the double award |
| 14 | GCSE | English Language | Pearson Edexcel | 1EN0 | 41,565 | 46% |  |
| 15 | A level | Biology | AQA | 7402 | 37,825 | 48% | the app already carries fixtures for this code |
| 16 | A level | Sociology | AQA | 7192 | 37,236 | 50% |  |
| 17 | GCSE | Geography B | Pearson Edexcel | 1GB0 | 29,430 | 51% | the bigger Edexcel geography; catalogue has only A (1GA0) |
| 18 | GCSE | Business | AQA | 8132 | 29,094 | 52% |  |
| 19 | GCSE | Statistics | Pearson Edexcel | 1ST0 | 28,776 | 54% |  |
| 20 | A level | Chemistry | AQA | 7405 | 28,455 | 55% |  |

### Wave 3 — Ranks 21 to 30

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 21 | GCSE | French | Pearson Edexcel | 1FR1 | 27,258 | 57% | new spec from 2026 (2025 entries were 1FR0) |
| 22 | GCSE | Spanish | Pearson Edexcel | 1SP1 | 26,797 | 58% | new spec from 2026 (2025 entries were 1SP0) |
| 23 | A level | Chemistry A | OCR | H432 | 25,528 | 59% | requested in the admin queue |
| 24 | GCSE | German | AQA | 8662 | 25,392 | 60% | the 2024 specification, first exams 2026 (entries are the outgoing 8668's); verified link |
| 25 | GCSE | Religious Studies B | Pearson Edexcel | 1RB0 | 23,481 | 61% |  |
| 26 | A level | Physics | AQA | 7408 | 23,469 | 63% |  |
| 27 | GCSE | Business | OCR | J204 | 23,198 | 64% |  |
| 28 | GCSE | Sociology | AQA | 8192 | 22,258 | 65% |  |
| 29 | GCSE | Biology | Pearson Edexcel | 1BI0 | 21,830 | 66% |  |
| 30 | A level | Economics A | Pearson Edexcel | 9EC0 | 21,476 | 67% |  |

### Wave 4 — Ranks 31 to 50 — together with the first thirty, nine in ten remaining entries

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 31 | A level | Biology A | OCR | H420 | 21,295 | 68% |  |
| 32 | GCSE | Chemistry | Pearson Edexcel | 1CH0 | 20,909 | 69% |  |
| 33 | GCSE | Physics | Pearson Edexcel | 1PH0 | 20,762 | 70% |  |
| 34 | GCSE | Geography B (Enquiring Minds) | OCR | J384 | 19,293 | 71% | the bigger OCR geography; catalogue has only A (J383) |
| 35 | A level | History | AQA | 7042 | 18,587 | 72% | option-heavy: schools pick 1 breadth + 1 depth study of many |
| 36 | GCSE | Media Studies | Eduqas | C680 | 18,554 | 73% |  |
| 37 | GCSE | Geography A | Pearson Edexcel | 1GA0 | 18,271 | 74% |  |
| 38 | GCSE | History B (Schools History Project) | OCR | J411 | 17,477 | 74% | the bigger OCR history; catalogue has only A (J410) |
| 39 | GCSE | Religious Studies A | Pearson Edexcel | 1RA0 | 17,143 | 75% |  |
| 40 | A level | Business | AQA | 7132 | 15,578 | 76% |  |
| 41 | A level | Mathematics | AQA | 7357 | 15,532 | 77% | same content as 9MA0 (the DfE content is common); rooms can be re-keyed |
| 42 | A level | Economics | AQA | 7136 | 15,469 | 77% |  |
| 43 | A level | Physics A | OCR | H556 | 13,909 | 78% |  |
| 44 | A level | Computer Science | OCR | H446 | 13,797 | 79% |  |
| 45 | GCSE | Computer Science | AQA | 8525 | 13,420 | 79% |  |
| 46 | A level | Geography | AQA | 7037 | 13,070 | 80% |  |
| 47 | A level | Further Mathematics | Pearson Edexcel | 9FM0 | 12,970 | 81% | option papers |
| 48 | A level | Geography | Pearson Edexcel | 9GE0 | 12,789 | 81% |  |
| 49 | A level | History | Pearson Edexcel | 9HI0 | 12,547 | 82% | option-heavy |
| 50 | GCSE | Psychology | AQA | 8182 | 12,422 | 83% |  |

### Wave 5 — The long tail — build on request from the admin queue

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 51 | GCSE | Religious Studies B | AQA | 8063 | 11,723 | 83% | not in the catalogue.  |
| 52 | GCSE | Citizenship Studies | AQA | 8100 | 11,201 | 84% | not in the catalogue.  |
| 53 | A level | English Literature | Pearson Edexcel | 9ET0 | 10,137 | 84% | set texts |
| 54 | A level | History | OCR | H505 | 10,021 | 85% | option-heavy |
| 55 | GCSE | Computer Science | Pearson Edexcel | 1CP2 | 9,656 | 85% |  |
| 56 | GCSE | History | Eduqas | C100 | 9,474 | 86% | not in the catalogue.  |
| 57 | GCSE | Geography B | Eduqas | C112 | 9,235 | 86% | not in the catalogue.  |
| 58 | GCSE | Music | Pearson Edexcel | 1MU0 | 9,000 | 86% | not in the catalogue.  |
| 59 | GCSE | Sociology | Eduqas | C200 | 8,951 | 87% | not in the catalogue.  |
| 60 | A level | English Language | AQA | 7702 | 8,765 | 87% |  |
| 61 | A level | English Literature | OCR | H472 | 8,716 | 88% | set texts |
| 62 | A level | Law | OCR | H418 | 7,806 | 88% |  |
| 63 | A level | Mathematics A | OCR | H240 | 7,653 | 88% | common content with 9MA0 |
| 64 | A level | Religious Studies | OCR | H573 | 7,492 | 89% |  |
| 65 | GCSE | Biology A (Gateway) | OCR | J247 | 7,317 | 89% |  |
| 66 | A level | English Literature A | AQA | 7712 | 7,281 | 90% | set texts |
| 67 | GCSE | Music | OCR | J536 | 7,226 | 90% | not in the catalogue.  |
| 68 | GCSE | Chemistry A (Gateway) | OCR | J248 | 6,630 | 90% |  |
| 69 | A level | English Literature B | AQA | 7717 | 6,584 | 91% |  |
| 70 | GCSE | Physics A (Gateway) | OCR | J249 | 6,477 | 91% |  |
| 71 | GCSE | Media Studies | AQA | 8572 | 6,377 | 91% | not in the catalogue.  |
| 72 | A level | Mathematics B (MEI) | OCR | H640 | 6,307 | 91% | common content with 9MA0 |
| 73 | GCSE | English Literature | OCR | J352 | 6,158 | 92% |  |
| 74 | GCSE | German | Pearson Edexcel | 1GN1 | 6,158 | 92% | new spec from 2026 |
| 75 | A level | Law | AQA | 7162 | 5,957 | 92% |  |
| 76 | GCSE | English Language | OCR | J351 | 5,723 | 93% |  |
| 77 | GCSE | Statistics | AQA | 8382 | 5,689 | 93% | not in the catalogue.  |
| 78 | A level | Computer Science | AQA | 7517 | 5,675 | 93% |  |
| 79 | GCSE | Geography A (Geographical Themes) | OCR | J383 | 5,674 | 93% |  |
| 80 | GCSE | Geography A | Eduqas | C111 | 5,458 | 94% | not in the catalogue.  |
| 81 | GCSE | Psychology | OCR | J203 | 5,432 | 94% |  |
| 82 | A level | Psychology | OCR | H567 | 5,121 | 94% |  |
| 83 | A level | Chemistry | Pearson Edexcel | 9CH0 | 5,059 | 94% |  |
| 84 | A level | Politics | AQA | 7152 | 4,673 | 95% |  |
| 85 | GCSE | Business | Eduqas | C510 | 4,537 | 95% | not in the catalogue.  |
| 86 | A level | Physics | Pearson Edexcel | 9PH0 | 4,536 | 95% |  |
| 87 | GCSE | Music | AQA | 8271 | 4,506 | 95% | not in the catalogue.  |
| 88 | GCSE | Religious Studies | OCR | J625 | 4,436 | 96% |  |
| 89 | GCSE | Economics | OCR | J205 | 4,415 | 96% | not in the catalogue.  |
| 90 | A level | Psychology | Pearson Edexcel | 9PS0 | 4,031 | 96% |  |
| 91 | A level | Biology (Salters-Nuffield) | Pearson Edexcel | 9BN0 | 3,934 | 96% |  |
| 92 | GCSE | Psychology | Pearson Edexcel | 1PS0 | 3,898 | 96% | not in the catalogue.  |
| 93 | A level | Business | Eduqas | A510 | 3,820 | 97% | not in the catalogue.  |
| 94 | A level | Sociology | OCR | H580 | 3,489 | 97% |  |
| 95 | GCSE | Media Studies | OCR | J200 | 3,249 | 97% | not in the catalogue.  |
| 96 | GCSE | Economics | AQA | 8136 | 3,029 | 97% | not in the catalogue.  |
| 97 | GCSE | French | Eduqas | C800 | 2,995 | 97% | not in the catalogue.  |
| 98 | A level | Religious Studies | AQA | 7062 | 2,917 | 97% |  |
| 99 | A level | English Language and Literature | AQA | 7707 | 2,861 | 97% | not in the catalogue.  |
| 100 | A level | Religious Studies | Eduqas | A120 | 2,835 | 98% | not in the catalogue.  |
| 101 | GCSE | History A (Explaining the Modern World) | OCR | J410 | 2,635 | 98% |  |
| 102 | GCSE | Spanish | Eduqas | C810 | 2,548 | 98% | not in the catalogue.  |
| 103 | A level | Economics | OCR | H460 | 2,526 | 98% |  |
| 104 | A level | English Literature | Eduqas | A720 | 2,518 | 98% |  |
| 105 | A level | English Language and Literature | Pearson Edexcel | 9EL0 | 2,176 | 98% | not in the catalogue.  |
| 106 | GCSE | Chemistry B (Twenty First Century) | OCR | J258 | 2,097 | 98% | not in the catalogue.  |
| 107 | A level | Further Mathematics B (MEI) | OCR | H645 | 1,984 | 98% | not in the catalogue.  |
| 108 | A level | Biology | Eduqas | A400 | 1,979 | 98% | not in the catalogue.  |
| 109 | A level | Further Mathematics A | OCR | H245 | 1,967 | 99% |  |
| 110 | GCSE | Biology B (Twenty First Century) | OCR | J257 | 1,961 | 99% | not in the catalogue.  |
| 111 | A level | Psychology | Eduqas | A290 | 1,922 | 99% | not in the catalogue.  |
| 112 | A level | Economics B | Pearson Edexcel | 9EB0 | 1,865 | 99% | not in the catalogue.  |
| 113 | A level | Chemistry B (Salters) | OCR | H433 | 1,860 | 99% | not in the catalogue.  |
| 114 | A level | Biology B | Pearson Edexcel | 9BI0 | 1,857 | 99% | not in the catalogue.  |
| 115 | GCSE | Physics B (Twenty First Century) | OCR | J259 | 1,737 | 99% | not in the catalogue.  |
| 116 | GCSE | Citizenship Studies | OCR | J270 | 1,728 | 99% | not in the catalogue.  |
| 117 | A level | Further Mathematics | AQA | 7367 | 1,688 | 99% |  |
| 118 | A level | Sociology | Eduqas | A200 | 1,624 | 99% | not in the catalogue.  |
| 119 | A level | English Language | Pearson Edexcel | 9EN0 | 1,483 | 99% |  |
| 120 | A level | English Language and Literature | OCR | H474 | 1,297 | 99% | not in the catalogue.  |
| 121 | A level | Religious Studies | Pearson Edexcel | 9RS0 | 1,277 | 100% | not in the catalogue.  |
| 122 | A level | English Language | OCR | H470 | 1,275 | 100% | not in the catalogue.  |
| 123 | A level | Geography | Eduqas | A110 | 1,124 | 100% |  |
| 124 | A level | English Language | Eduqas | A700 | 1,038 | 100% | not in the catalogue.  |
| 125 | A level | Business | OCR | H431 | 966 | 100% |  |
| 126 | GCSE | German | Eduqas | C820 | 856 | 100% | not in the catalogue.  |
| 127 | A level | Law | Eduqas | A150 | 833 | 100% | not in the catalogue.  |
| 128 | A level | Economics | Eduqas | A520 | 636 | 100% | not in the catalogue.  |
| 129 | A level | Physics | Eduqas | A420 | 618 | 100% | not in the catalogue.  |
| 130 | GCSE | Computer Science | Eduqas | C500 | 545 | 100% | not in the catalogue.  |
| 131 | A level | Computer Science | Eduqas | A500 | 485 | 100% | not in the catalogue.  |
| 132 | A level | Physics B (Advancing Physics) | OCR | H557 | 450 | 100% | not in the catalogue.  |
| 133 | A level | English Language and Literature | Eduqas | A710 | 391 | 100% | not in the catalogue.  |
| 134 | A level | Chemistry | Eduqas | A410 | 113 | 100% | not in the catalogue.  |
| 135 | A level | Biology B (Advancing Biology) | OCR | H422 | 74 | 100% | not in the catalogue.  |

