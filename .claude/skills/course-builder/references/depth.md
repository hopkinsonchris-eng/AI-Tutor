# Building a course at full depth by hand (in a Claude Code session)

The Worker builds on the API. A session builds on the subscription, with the same contracts and the
same two-model check, and ships the result in the repository so the site serves it. Use this when
the API path is too expensive or a course should be kept in Git.

## What gets produced

- `src/specs/<board>-<code>.js` — the specification map (contract `src/spec-validator.js`), with
  `source: { url, etag, lastModified, length, checkedAt }` copied from `scratch/courses/<id>/provenance.json`.
- `src/kits/<id>.js` — `module.exports = { ID: '<id>', KITS: { '<topic id>': kit, … } }`, one kit per
  topic (contract `src/kit-validator.js`), each with `built: { at, by: 'claude-code', judge: { score, notes } }`.
- `build.js` requires the spec (`npm run course -- install <id>` adds it); the kits are picked up by
  name and written to `dist/kits/<id>/<topic>.json` with an index the app reads.

## Models

Run the session on Opus 5 (`/model`). Write kits with Sonnet 5 subagents (`model: "sonnet"` on the
Agent tool) — the Worker uses the same model for the same job and the validator refuses malformed
work. Judge with Opus 5 subagents (`model: "opus"`): re-solving every question is where the stronger
model earns its cost. Fable is not needed; reach for it only if a course keeps failing the judge on
subject matter.

## Procedure

1. **Fetch.** `npm run course -- fetch <board> <code>` (add `--url` if the catalogue has no verified
   link). It records provenance and extracts the text to `scratch/courses/<id>/spec.txt`, with
   `===== page N =====` markers. Read the PDF itself for tables the text mangles (the Read tool, 20 pages at a time).
2. **Spec.** Follow the main procedure (outline, then each topic) writing the file by hand from the
   document. `npm run course -- validate <id>` until it passes. Judge it against `references/judge.md`
   with a fresh subagent that has the text and the draft, and fix what it finds; record the score in
   a comment at the top of the file.
3. **Kits, four at a time.** For each topic, one subagent writes the kit from the topic's spec entry,
   the mark conventions and the family kit rules (`references/families.md`), to the shape in
   `src/kit-validator.js` — the `sampleKit` in `tests/_kit.js` shows the exact keys. Run up to four
   writers in parallel; give each the topic JSON and the relevant pages of `spec.txt`, not the whole
   document. Validate each kit before judging it.
4. **Judge with a fresh context.** `npm run course -- judge-prompt <id> <topic>` prints the same
   brief the Worker gives Opus. Give it to a new subagent with no memory of writing the kit; it re-solves
   every question. Anything in `wrong` or a score under 0.8 goes back to a writer once, with the
   objections; a second failure means the room ships without a kit and is listed in the file's header
   comment for a later pass. Record `built.judge` from the verdict.
5. **Ship.** `npm run course -- validate <id>`, `npm test` (tests/kits.test.js checks every kit and
   that it was judged), commit, push, merge to main. The site serves the kits; students see them on
   the next load.

## Keeping courses current

- `npm run course -- current` HEAD-checks every hand-built spec's document against its recorded
  provenance and exits 2 if any changed. Run it monthly, or when a board announces a change.
- For a changed document: fetch again, diff the topics (`diffSpecs` in `worker/builder.js` works on
  any two spec objects), and follow `references/review.md`: additive changes are applied; renaming or
  removing a topic is breaking and needs the admin's say-so. Rebuild only the kits of topics whose key
  ideas changed, judge them again, update `source.checkedAt`.
- Worker-built courses are checked by the monthly cron; hand-built ones are checked by this command.

## Budget

A 34-topic course is roughly 34 writer runs and 34 judge runs plus a few rewrites: expect several
hours of session time and a large token budget, spread over more than one session if the
subscription's limits bite. Commit after every few topics so nothing is lost; partial depth ships fine.

## Worked examples and open cards (contract since 11 Sept 2026)

Every worked example carries a `setup` (the complete problem the student sees before predicting: every
value, statement, source or scenario, and what is asked) and `cues` (one short question per step, asked
before that step is revealed and answerable from the setup and the steps shown so far). The app shows the
setup at once and puts each cue above its Reveal button, so the student always knows what to predict.
A card whose front asks for an example, or for one of several acceptable answers, is `open: true` and
its back lists two or three acceptable answers separated by semicolons; the app tells the student any
sound example scores. `scripts/kit-refine.js` retrofits both onto a shipped kit with a writer agent.

