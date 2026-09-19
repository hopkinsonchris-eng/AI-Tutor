# Course roadmap — every remaining specification, most popular first

Sixteen courses are built (specification map from the board's PDF, judged room kits for every room). This is the order for the
other 140 in the boards' own catalogues, ranked by how many students sat each specification in summer 2025.
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

## Catalogue corrections before starting

| Course | Change | Why |
|---|---|---|
| AQA French | 8652 → 8658 | the 2024 specification; first exams summer 2026 |
| AQA Spanish | 8692 → 8698 | as above |
| AQA German | 8662 → 8668 | as above |

Specifications in the top 50 that are not yet in `data/catalogue.json` (add from the Admin tab or the file):
- GCSE Spanish — AQA 8698 (102,687 entries)
- GCSE French — AQA 8658 (97,806 entries)
- GCSE English Language 2.0 — Pearson Edexcel 1EN2 (66,425 entries)
- GCSE Mathematics — Eduqas C300 (49,187 entries)
- GCSE Religious Studies — Eduqas C120 (48,447 entries)
- GCSE Geography B — Pearson Edexcel 1GB0 (29,430 entries)
- GCSE Statistics — Pearson Edexcel 1ST0 (28,776 entries)
- GCSE German — AQA 8668 (25,392 entries)
- GCSE Religious Studies B — Pearson Edexcel 1RB0 (23,481 entries)
- GCSE Geography B (Enquiring Minds) — OCR J384 (19,293 entries)
- GCSE Media Studies — Eduqas C680 (18,554 entries)
- GCSE History B (Schools History Project) — OCR J411 (17,477 entries)
- GCSE Religious Studies A — Pearson Edexcel 1RA0 (17,143 entries)

## Already built

| Level | Subject | Board | Code | Entries 2025 |
|---|---|---|---|---|
| GCSE | Combined Science: Trilogy | AQA | 8464 | 740,000 |
| GCSE | English Language | AQA | 8700 | 593,963 |
| GCSE | Mathematics | Pearson Edexcel | 1MA1 | 521,132 |
| GCSE | English Literature | AQA | 8702 | 498,874 |
| GCSE | Geography | AQA | 8035 | 202,553 |
| GCSE | Mathematics | AQA | 8300 | 189,529 |
| GCSE | Biology | AQA | 8461 | 141,274 |
| GCSE | Chemistry | AQA | 8462 | 134,482 |
| A level | Mathematics | Pearson Edexcel | 9MA0 | 75,079 |
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
| 1 | GCSE | History | Pearson Edexcel | 1HI0 | 167,004 | 6% | option-heavy: schools pick 4 of many studies |
| 2 | GCSE | Physics | AQA | 8463 | 134,975 | 11% | shares most content with 8464 |
| 3 | GCSE | Religious Studies A | AQA | 8062 | 112,987 | 16% | schools pick 2 religions and 4 themes |
| 4 | GCSE | Combined Science | Pearson Edexcel | 1SC0 | 110,000 | 20% | estimate: ~12% of the double award |
| 5 | GCSE | Spanish | AQA | 8698 | 102,687 | 24% | not in the catalogue. new spec, first exams 2026; catalogue lists the old 8692 |
| 6 | GCSE | French | AQA | 8658 | 97,806 | 27% | not in the catalogue. new spec, first exams 2026; catalogue lists the old 8652 |
| 7 | GCSE | English Language | Eduqas | C700 | 97,094 | 31% |  |
| 8 | GCSE | History | AQA | 8145 | 93,746 | 34% | option-heavy |
| 9 | GCSE | Mathematics | OCR | J560 | 74,199 | 37% |  |
| 10 | GCSE | Business | Pearson Edexcel | 1BS0 | 73,184 | 40% |  |

### Wave 2 — Ranks 11 to 20, where the first A level (AQA Psychology) appears

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 11 | GCSE | Computer Science | OCR | J277 | 66,716 | 42% |  |
| 12 | GCSE | English Language 2.0 | Pearson Edexcel | 1EN2 | 66,425 | 45% | not in the catalogue. the post-16 resit spec; not in the catalogue |
| 13 | A level | Psychology | AQA | 7182 | 63,378 | 47% | the second-biggest A level, one board has 85% of it |
| 14 | GCSE | English Literature | Eduqas | C720 | 59,417 | 49% |  |
| 15 | GCSE | Mathematics | Eduqas | C300 | 49,187 | 51% | not in the catalogue.  |
| 16 | GCSE | Religious Studies | Eduqas | C120 | 48,447 | 53% | not in the catalogue.  |
| 17 | GCSE | English Literature | Pearson Edexcel | 1ET0 | 46,358 | 55% |  |
| 18 | GCSE | Combined Science A (Gateway) | OCR | J250 | 45,000 | 57% | estimate: ~5% of the double award |
| 19 | GCSE | English Language | Pearson Edexcel | 1EN0 | 41,565 | 58% |  |
| 20 | A level | Biology | AQA | 7402 | 37,825 | 60% | the app already carries fixtures for this code |

### Wave 3 — Ranks 21 to 30

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 21 | A level | Sociology | AQA | 7192 | 37,236 | 61% |  |
| 22 | GCSE | Geography B | Pearson Edexcel | 1GB0 | 29,430 | 62% | not in the catalogue. the bigger Edexcel geography; catalogue has only A (1GA0) |
| 23 | GCSE | Business | AQA | 8132 | 29,094 | 63% |  |
| 24 | GCSE | Statistics | Pearson Edexcel | 1ST0 | 28,776 | 64% | not in the catalogue.  |
| 25 | A level | Chemistry | AQA | 7405 | 28,455 | 65% |  |
| 26 | GCSE | French | Pearson Edexcel | 1FR1 | 27,258 | 66% | new spec from 2026 (2025 entries were 1FR0) |
| 27 | GCSE | Spanish | Pearson Edexcel | 1SP1 | 26,797 | 67% | new spec from 2026 (2025 entries were 1SP0) |
| 28 | A level | Chemistry A | OCR | H432 | 25,528 | 68% | requested in the admin queue |
| 29 | GCSE | German | AQA | 8668 | 25,392 | 69% | not in the catalogue. new spec, first exams 2026; catalogue lists the old 8662 |
| 30 | GCSE | Religious Studies B | Pearson Edexcel | 1RB0 | 23,481 | 70% | not in the catalogue.  |

### Wave 4 — Ranks 31 to 50 — together with the first thirty, nine in ten remaining entries

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 31 | A level | Physics | AQA | 7408 | 23,469 | 71% |  |
| 32 | GCSE | Business | OCR | J204 | 23,198 | 72% |  |
| 33 | GCSE | Sociology | AQA | 8192 | 22,258 | 73% |  |
| 34 | GCSE | Biology | Pearson Edexcel | 1BI0 | 21,830 | 74% |  |
| 35 | A level | Economics A | Pearson Edexcel | 9EC0 | 21,476 | 74% |  |
| 36 | A level | Biology A | OCR | H420 | 21,295 | 75% |  |
| 37 | GCSE | Chemistry | Pearson Edexcel | 1CH0 | 20,909 | 76% |  |
| 38 | GCSE | Physics | Pearson Edexcel | 1PH0 | 20,762 | 77% |  |
| 39 | GCSE | Geography B (Enquiring Minds) | OCR | J384 | 19,293 | 77% | not in the catalogue. the bigger OCR geography; catalogue has only A (J383) |
| 40 | A level | History | AQA | 7042 | 18,587 | 78% | option-heavy: schools pick 1 breadth + 1 depth study of many |
| 41 | GCSE | Media Studies | Eduqas | C680 | 18,554 | 79% | not in the catalogue.  |
| 42 | GCSE | Geography A | Pearson Edexcel | 1GA0 | 18,271 | 79% |  |
| 43 | GCSE | History B (Schools History Project) | OCR | J411 | 17,477 | 80% | not in the catalogue. the bigger OCR history; catalogue has only A (J410) |
| 44 | GCSE | Religious Studies A | Pearson Edexcel | 1RA0 | 17,143 | 81% | not in the catalogue.  |
| 45 | A level | Business | AQA | 7132 | 15,578 | 81% |  |
| 46 | A level | Mathematics | AQA | 7357 | 15,532 | 82% | same content as 9MA0 (the DfE content is common); rooms can be re-keyed |
| 47 | A level | Economics | AQA | 7136 | 15,469 | 83% |  |
| 48 | A level | Physics A | OCR | H556 | 13,909 | 83% |  |
| 49 | A level | Computer Science | OCR | H446 | 13,797 | 84% |  |
| 50 | GCSE | Computer Science | AQA | 8525 | 13,420 | 84% |  |

### Wave 5 — The long tail — build on request from the admin queue

| # | Level | Subject | Board | Code | Entries 2025 | Cumulative | Note |
|---|---|---|---|---|---|---|---|
| 51 | A level | Geography | AQA | 7037 | 13,070 | 85% |  |
| 52 | A level | Further Mathematics | Pearson Edexcel | 9FM0 | 12,970 | 85% | option papers |
| 53 | A level | Geography | Pearson Edexcel | 9GE0 | 12,789 | 86% |  |
| 54 | A level | History | Pearson Edexcel | 9HI0 | 12,547 | 86% | option-heavy |
| 55 | GCSE | Psychology | AQA | 8182 | 12,422 | 86% |  |
| 56 | GCSE | Religious Studies B | AQA | 8063 | 11,723 | 87% | not in the catalogue.  |
| 57 | GCSE | Citizenship Studies | AQA | 8100 | 11,201 | 87% | not in the catalogue.  |
| 58 | A level | English Literature | Pearson Edexcel | 9ET0 | 10,137 | 88% | set texts |
| 59 | A level | History | OCR | H505 | 10,021 | 88% | option-heavy |
| 60 | GCSE | Computer Science | Pearson Edexcel | 1CP2 | 9,656 | 88% |  |
| 61 | GCSE | History | Eduqas | C100 | 9,474 | 89% | not in the catalogue.  |
| 62 | GCSE | Geography B | Eduqas | C112 | 9,235 | 89% | not in the catalogue.  |
| 63 | GCSE | Music | Pearson Edexcel | 1MU0 | 9,000 | 89% | not in the catalogue.  |
| 64 | GCSE | Sociology | Eduqas | C200 | 8,951 | 90% | not in the catalogue.  |
| 65 | A level | English Language | AQA | 7702 | 8,765 | 90% |  |
| 66 | A level | English Literature | OCR | H472 | 8,716 | 90% | set texts |
| 67 | A level | Law | OCR | H418 | 7,806 | 91% | not in the catalogue.  |
| 68 | A level | Mathematics A | OCR | H240 | 7,653 | 91% | common content with 9MA0 |
| 69 | A level | Religious Studies | OCR | H573 | 7,492 | 91% |  |
| 70 | GCSE | Biology A (Gateway) | OCR | J247 | 7,317 | 92% |  |
| 71 | A level | English Literature A | AQA | 7712 | 7,281 | 92% | set texts |
| 72 | GCSE | Music | OCR | J536 | 7,226 | 92% | not in the catalogue.  |
| 73 | GCSE | Chemistry A (Gateway) | OCR | J248 | 6,630 | 92% |  |
| 74 | A level | English Literature B | AQA | 7717 | 6,584 | 93% | not in the catalogue.  |
| 75 | GCSE | Physics A (Gateway) | OCR | J249 | 6,477 | 93% |  |
| 76 | GCSE | Media Studies | AQA | 8572 | 6,377 | 93% | not in the catalogue.  |
| 77 | A level | Mathematics B (MEI) | OCR | H640 | 6,307 | 93% | not in the catalogue. not in the catalogue; common content with 9MA0 |
| 78 | GCSE | English Literature | OCR | J352 | 6,158 | 94% |  |
| 79 | GCSE | German | Pearson Edexcel | 1GN1 | 6,158 | 94% | new spec from 2026 |
| 80 | A level | Law | AQA | 7162 | 5,957 | 94% | not in the catalogue.  |
| 81 | GCSE | English Language | OCR | J351 | 5,723 | 94% |  |
| 82 | GCSE | Statistics | AQA | 8382 | 5,689 | 94% | not in the catalogue.  |
| 83 | A level | Computer Science | AQA | 7517 | 5,675 | 95% |  |
| 84 | GCSE | Geography A (Geographical Themes) | OCR | J383 | 5,674 | 95% |  |
| 85 | GCSE | Geography A | Eduqas | C111 | 5,458 | 95% | not in the catalogue.  |
| 86 | GCSE | Psychology | OCR | J203 | 5,432 | 95% |  |
| 87 | A level | Psychology | OCR | H567 | 5,121 | 96% |  |
| 88 | A level | Chemistry | Pearson Edexcel | 9CH0 | 5,059 | 96% |  |
| 89 | A level | Politics | AQA | 7152 | 4,673 | 96% |  |
| 90 | GCSE | Business | Eduqas | C510 | 4,537 | 96% | not in the catalogue.  |
| 91 | A level | Physics | Pearson Edexcel | 9PH0 | 4,536 | 96% |  |
| 92 | GCSE | Music | AQA | 8271 | 4,506 | 96% | not in the catalogue.  |
| 93 | GCSE | Religious Studies | OCR | J625 | 4,436 | 97% |  |
| 94 | GCSE | Economics | OCR | J205 | 4,415 | 97% | not in the catalogue.  |
| 95 | A level | Psychology | Pearson Edexcel | 9PS0 | 4,031 | 97% |  |
| 96 | A level | Biology (Salters-Nuffield) | Pearson Edexcel | 9BN0 | 3,934 | 97% |  |
| 97 | GCSE | Psychology | Pearson Edexcel | 1PS0 | 3,898 | 97% | not in the catalogue.  |
| 98 | A level | Business | Eduqas | A510 | 3,820 | 97% | not in the catalogue.  |
| 99 | A level | Sociology | OCR | H580 | 3,489 | 97% |  |
| 100 | GCSE | Media Studies | OCR | J200 | 3,249 | 98% | not in the catalogue.  |
| 101 | GCSE | Economics | AQA | 8136 | 3,029 | 98% | not in the catalogue.  |
| 102 | GCSE | French | Eduqas | C800 | 2,995 | 98% | not in the catalogue.  |
| 103 | A level | Religious Studies | AQA | 7062 | 2,917 | 98% |  |
| 104 | A level | English Language and Literature | AQA | 7707 | 2,861 | 98% | not in the catalogue.  |
| 105 | A level | Religious Studies | Eduqas | A120 | 2,835 | 98% | not in the catalogue.  |
| 106 | GCSE | History A (Explaining the Modern World) | OCR | J410 | 2,635 | 98% |  |
| 107 | GCSE | Spanish | Eduqas | C810 | 2,548 | 98% | not in the catalogue.  |
| 108 | A level | Economics | OCR | H460 | 2,526 | 98% |  |
| 109 | A level | English Literature | Eduqas | A720 | 2,518 | 99% |  |
| 110 | A level | English Language and Literature | Pearson Edexcel | 9EL0 | 2,176 | 99% | not in the catalogue.  |
| 111 | GCSE | Chemistry B (Twenty First Century) | OCR | J258 | 2,097 | 99% | not in the catalogue.  |
| 112 | A level | Further Mathematics B (MEI) | OCR | H645 | 1,984 | 99% | not in the catalogue.  |
| 113 | A level | Biology | Eduqas | A400 | 1,979 | 99% | not in the catalogue.  |
| 114 | A level | Further Mathematics A | OCR | H245 | 1,967 | 99% |  |
| 115 | GCSE | Biology B (Twenty First Century) | OCR | J257 | 1,961 | 99% | not in the catalogue.  |
| 116 | A level | Psychology | Eduqas | A290 | 1,922 | 99% | not in the catalogue.  |
| 117 | A level | Economics B | Pearson Edexcel | 9EB0 | 1,865 | 99% | not in the catalogue.  |
| 118 | A level | Chemistry B (Salters) | OCR | H433 | 1,860 | 99% | not in the catalogue.  |
| 119 | A level | Biology B | Pearson Edexcel | 9BI0 | 1,857 | 99% | not in the catalogue.  |
| 120 | GCSE | Physics B (Twenty First Century) | OCR | J259 | 1,737 | 99% | not in the catalogue.  |
| 121 | GCSE | Citizenship Studies | OCR | J270 | 1,728 | 99% | not in the catalogue.  |
| 122 | A level | Further Mathematics | AQA | 7367 | 1,688 | 99% |  |
| 123 | A level | Sociology | Eduqas | A200 | 1,624 | 99% | not in the catalogue.  |
| 124 | A level | English Language | Pearson Edexcel | 9EN0 | 1,483 | 100% |  |
| 125 | A level | English Language and Literature | OCR | H474 | 1,297 | 100% | not in the catalogue.  |
| 126 | A level | Religious Studies | Pearson Edexcel | 9RS0 | 1,277 | 100% | not in the catalogue.  |
| 127 | A level | English Language | OCR | H470 | 1,275 | 100% | not in the catalogue.  |
| 128 | A level | Geography | Eduqas | A110 | 1,124 | 100% |  |
| 129 | A level | English Language | Eduqas | A700 | 1,038 | 100% | not in the catalogue.  |
| 130 | A level | Business | OCR | H431 | 966 | 100% |  |
| 131 | GCSE | German | Eduqas | C820 | 856 | 100% | not in the catalogue.  |
| 132 | A level | Law | Eduqas | A150 | 833 | 100% | not in the catalogue.  |
| 133 | A level | Economics | Eduqas | A520 | 636 | 100% | not in the catalogue.  |
| 134 | A level | Physics | Eduqas | A420 | 618 | 100% | not in the catalogue.  |
| 135 | GCSE | Computer Science | Eduqas | C500 | 545 | 100% | not in the catalogue.  |
| 136 | A level | Computer Science | Eduqas | A500 | 485 | 100% | not in the catalogue.  |
| 137 | A level | Physics B (Advancing Physics) | OCR | H557 | 450 | 100% | not in the catalogue.  |
| 138 | A level | English Language and Literature | Eduqas | A710 | 391 | 100% | not in the catalogue.  |
| 139 | A level | Chemistry | Eduqas | A410 | 113 | 100% | not in the catalogue.  |
| 140 | A level | Biology B (Advancing Biology) | OCR | H422 | 74 | 100% | not in the catalogue.  |

