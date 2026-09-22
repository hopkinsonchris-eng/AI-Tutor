# Building a course on the batch API

The third way to build a course, beside the Worker (on demand, synchronous API calls, published to KV) and a Claude Code
session (on a subscription, shipped in Git). `scripts/batch-course.js` runs the Worker's own pipeline through the
Message Batches API and ships the result in Git: the same prompts, schemas, validators and judge as `worker/builder.js`
and `worker/depth.js`, Sonnet 5 writing and Opus 5 judging, every token at half the standard price, and every request's
usage in a ledger. Use it when a wave of courses has to be built without a session's attention or a subscription's
weekly limit, and when the cost has to be a measured number.

## What runs

| Stage | Model | How | Why |
|---|---|---|---|
| Outline: identity, components, options, mark conventions, topic list | Opus 5 | one direct call | everything waits for it; it also writes the document into Opus's cache for the judge |
| First topic | Sonnet 5 | one direct call | writes the document into Sonnet's cache, so the batch that follows reads it at a tenth of the price |
| Every other topic | Sonnet 5 | one batch | up to two more corrective batches for whatever the validator refuses about a topic's own content — never for a topic whose problem is really about its place in the outline (its id, name or component), which no rewrite fixes |
| Judge of the map | Opus 5 | a batch of one | coverage, fidelity, options, family fit; overall score is the minimum |
| Re-outline and re-fill, if the judge scores under 0.8 | Opus 5, then Sonnet 5 | as above, up to 2 more times | the judge's own `invented` and `missing` go back as the outline's objection; a topic the new outline kept under the same id and name keeps its earlier answer rather than being rebilled |
| Every room's kit | Sonnet 5 | one batch | validated on collection |
| Judge of every kit | Opus 5 | one batch | re-solves every question in a fresh context |
| Rewrite of refused rooms | Sonnet 5, then Opus 5 | one batch each | once, with the objections; a second refusal ships the room without a kit |

The PDF goes up once through the Files API (seven-day expiry; re-uploaded automatically on a rerun after six days) and
every request references it as a cached document with a one-hour cache. `--doc url` sends the board's URL instead, which
is what the Worker does; use it if the Files API refuses a document.

Two deliberate differences from the Worker. A topic answered with fewer than two ideas gets its corrective round here,
where the Worker's gate lets it through to fail the whole map at the end. And a spec is held, not shipped, when the
repository's own tests would refuse it: a mark style that contradicts the family prior for the subject, or a power
written with a caret. The Worker publishes to KV, which those tests never see.

## Commands

```
export ANTHROPIC_API_KEY=…                                     # API credits; never a subscription
node scripts/batch-course.js spec <board> <code> [--url …]     # → src/specs/<board>-<code>.js, or held in scratch
node scripts/batch-course.js kits <id> [--only t1,t2]          # → src/kits/<id>.js
node scripts/batch-course.js course <board> <code> [--url …]   # spec, kits, then install in build.js
node scripts/batch-course.js wave 1 [--parallel 3] [--skip EDQ-C300] [--url AQA-8652=https://…pdf]
node scripts/batch-course.js cost [<id>]
npm test
```

`--dry-run` builds the requests and submits nothing (for a spec, only the outline is shown, since the topics are not
known until it exists). `--poll <seconds>` sets the polling interval (default 30). `--gbp <rate>` converts the report.
A course with no verified link in `data/catalogue.json` takes `--url`; on `wave`, as `--url <id>=<url>`. `--skip <id>,…`
leaves courses out of a wave — a maths course, which belongs on the session path (see the end of this file).

## The cost

The ledger (`scratch/courses/<id>/batch/ledger.jsonl`) has one row per answered request: stage, model, the API's own
`usage` object, and the price computed from it. Rates are the September 2026 list prices per million tokens, halved for
a batch; cache reads at a tenth of the input price; one-hour cache writes at double.

| Model | Input | Output | Batched input | Batched output |
|---|---|---|---|---|
| Sonnet 5 | $2 | $10 | $1 | $5 |
| Opus 5 | $5 | $25 | $2.50 | $12.50 |

`cost` prints the total by stage and model. The two direct calls are priced at full rate and marked `(direct)`. What a
course costs is what the ledger says; the README's £12 to £20 per 34-topic course is the Worker's synchronous figure,
which the batch halves before caching. Errored, expired and canceled requests are not billed and do not appear.

Batches are billed against the workspace's spend limit, which a batch can slightly overshoot; a batch that the API has
not finished within 24 hours expires and its requests come back as errors, which the corrective round retries once and a
rerun retries again.

## State and resuming

Everything a run knows is in `scratch/courses/<id>/batch/state.json`: the provenance, the file id, the current round, the
outline, every topic's answer, the judge's verdict, and for every batch its id and whether its results were collected. A
batch that was submitted and not collected is polled again by its id on the next run, never resubmitted; a stage whose
answer is in the state is not asked again. So an interrupted run is resumed by running the same command, including
mid-way through a corrective round. The kits pipeline numbers each run as an attempt, and a rerun after a finished run
writes and judges only the rooms without a kit.

To start a course over, delete its `batch/` directory. To retry one room, `kits <id> --only <topic>`.

## What is held and what to do

- **A map still judged under 0.8 after `JUDGE_ROUNDS` (3) attempts**, or one the ship checks refuse, is written to
  `scratch/courses/<id>/batch/` beside `judge.json` (each round's own verdict, so `judge.json` is the last one), and
  the command exits 2. The first two rounds already tried to fix themselves — every round after the first opens with
  the previous round's own `invented` and `missing` findings as the outline's objection, so what's left in the final
  `judge.json` is what the loop could not resolve on its own, not what nobody looked at. A judge is not perfectly
  consistent between rounds (it can reverse an earlier verdict, as it did on AQA-8692's stress-position topic), so
  read the full history in the log rather than trusting only the last round's wording. Fix the file by the main
  procedure (the document decides), move it to `src/specs/`, then `kits <id>`.
- **A map the validator refuses after the corrective round** stops the run; the draft and the problems are in
  `spec.refused.json`. Usually a topic the document numbers unusually: fix the outline by hand or build in a session.
- **A room refused twice** ships without a kit and is named in the header of `src/kits/<id>.js` with the objection.
  Students see the room spec-only, as on the Worker. `kits <id>` retries every such room in a new attempt.
- **A kit written with a caret power** is a problem the rewrite fixes; if it survives, the room is left out rather than
  breaking `npm test`.

The shipped kits carry `built.by: 'batch-api'`, the two models, the prompt version and the judge's score and notes, so
`tests/kits.test.js` accepts them as it does a hand-built kit, and `npm run course -- current` keeps the spec's document
checked because `spec.source` records the provenance.

## When not to use it

A maths course: the writers and judges need the board's formulae booklet in front of them (`depth.md`), which this path
does not fetch. A course whose document the outline keeps getting wrong: the session path lets the PDF's tables be read
page by page. And a course that must be live today: a batch can take up to 24 hours, though most finish within the hour.
