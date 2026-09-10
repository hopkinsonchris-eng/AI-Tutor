---
name: course-builder
description: Build, review and update a Study Platform specification map ("course") for a UK qualification — GCSE or A level, any board — from the board's official specification PDF, to the same contract the hand-written specs meet. Use when asked to add a subject, write or fix a spec file under src/specs/, review a course the Worker built, run or check the monthly update pass, or explain why a build was refused. The Worker runs the same procedure automatically; this skill is the human-driven version and the reference the Worker's prompts are generated from.
---

# Course builder

A course is a specification map: one JavaScript object that the platform turns into rooms, a
scheduler, marking conventions and a coach. The contract is `src/spec-validator.js`; the four
hand-written specs in `src/specs/` pass it and so must anything you write. The Worker builds courses
on demand from the board's PDF with the same procedure (`worker/builder.js`), so a course built by
hand and a course built by the Worker are indistinguishable in shape.

## Procedure

1. **Identify the document.** Find the official specification PDF on the board's own domain
   (`data/catalogue.json` lists codes, and verified URLs where they exist — a verified URL beats a
   search). Record the URL, and the `ETag`, `Last-Modified` and `Content-Length` from a HEAD request:
   that is the provenance the monthly pass compares against.
2. **Choose the family** with `familyFor(subject)` from `src/families.js`, then confirm it from the
   document — a Psychology spec with a required-practical strand is `science`, not `essay`. The family
   rules are in `references/families.md`; they are the difference between a maths course and a
   history course and are the only thing that should differ between them.
3. **Outline first.** From the document: identity (board, subject, code, level, version string with
   the issue and date, first exam year), components with marks, minutes and weights that sum to 100,
   assessment objectives, options with the topics they choose between, command words with what each
   demands, mark style, and the list of topics with the component each belongs to. `references/schema.md`
   is the shape; the topic list must be the document's own sections in the document's own order.
4. **Then each topic.** Key ideas with the document's codes, a question the idea answers, the idea in a
   phrase, and content in the board's own terms; case studies, worked examples or practicals as the
   family says. Two ideas minimum; the document decides the real number.
5. **Validate.** `node -e "const {validateSpec}=require('./src/spec-validator.js');..."` — or add the
   file to `src/specs/`, require it in `build.js`, and run `npm test`. Fix every problem the validator
   names; it names the topic.
6. **Judge.** Read `references/judge.md` and score the draft against the document honestly: coverage,
   invented codes, option correctness, family fit. Below 0.8, the course is not ready.
7. **Ship.** Hand-written: the file goes in `src/specs/` and is required in `build.js`. Worker-built:
   it is published to KV and appears in the app's catalogue with its provenance line.

## Monthly update pass

`references/review.md`. The Worker does this on the first of the month; run it by hand when a board
announces a change. It compares the document's provenance, and only if the document changed does it
read it again and propose a topic-level diff. Renaming or removing a topic is **breaking** — student
progress is keyed to topic ids — and is never applied without the admin's approval.

## Never

- Never build from memory when the document is available. Codes and weightings come from the PDF, copied
  character for character: no invented sub-codes, no tier suffixes, no aggregate topics, no paper codes the
  document does not print, and nothing in caseStudies the document does not say.
- Never publish a spec the validator refuses, and never weaken the validator to let one through.
- Never rename a topic id in a published course as part of an update; add the new topic and leave
  the old one in place until the admin approves the proposal.
