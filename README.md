# Study Platform

A single-file web app for GCSE and A level study, anchored to exam-board specifications. One room per topic the student actually studies; hand-authored depth where it exists (Edexcel Mathematics, and a written and checked kit in every room of AQA Combined Science 8464 and AQA Mathematics 8300), specification-anchored generated content everywhere else; spaced recall cards; essay and photo marking to each board's own conventions; a Socratic coach that never gives the answer; one scheduler across all subjects.

Six courses are hand-written and built in: **OCR Geography H481**, **Edexcel Business 9BS0**, **Edexcel Politics 9PL0** and **Edexcel Mathematics 9MA0** at A level, and **AQA Combined Science 8464** and **AQA Mathematics 8300** at GCSE — the last two built by hand from the board's specification PDFs, judged against the document, with a written and checked kit in every room (30 and 14 rooms; see *Course depth*). Every other GCSE and A level in the catalogue (97 qualifications across AQA, Pearson Edexcel, OCR and Eduqas) is built on request: a student picks level, subject and board, presses **Add**, and the Worker builds the specification map from the board's own PDF while a progress bar shows the stages — then it's theirs. Built courses are held to the same validator as the hand-written ones, judged against the document before they go live, and checked against the document again every month (see *Courses*).

## Layout

```
src/
  spec-validator.js    the contract every spec meets — shared by the tests and the Worker
  kit-validator.js     the contract every room kit meets — lesson, worked examples, question bank, exit ticket, cards, family extras
  families.js          essay / quantitative / science / language: how the same schema is filled differently
  template.html        the app shell (HTML + JS); placeholders are filled by build.js
  styles.css           stylesheet
  core.js              engine: state, mastery rules, scheduling, prediction, reports (pure logic)
  gen.js               generator: spec-anchored prompts + validators for lessons, cards, questions, essays, marking, coach
  specs/               one file per qualification — components, weights, AOs, command words, topics, key ideas
  authored/            hand-authored content (maths: 19 lessons, 262 questions, exit tickets, dojo, verified links)
  kits/                one file per hand-built course: a written and checked kit for every room (AQA 8464, 30 rooms; AQA 8300, 14 rooms),
                       served from dist/kits/ with an index the app reads
worker/
  index.js             Cloudflare Worker: accounts, sessions, invites, daily caps, progress, the admin API,
                       courses, the Workflow classes, the monthly cron, and the forward to Anthropic
  builder.js           the course builder: document → outline → topics → validate → judge → resources → publish; the monthly review
  depth.js             course depth: for every room, a kit written by one model and checked by another, four rooms at a time
scripts/
  course.js            the hand-built course toolkit: fetch the PDF and record provenance, validate, the judge's brief, current, install
  kits-bundle.js       collects src/kits/ for build.js: one JSON per room in dist/kits/ and the index
  visual-proof.js      drives the built app in Chromium against a stub Worker and writes docs/proof/
data/catalogue.json    qualification codes per board and level, with verified spec PDF links
.claude/skills/course-builder/  the same procedure for a person, and the family reference generated from src/families.js
  wrangler.toml
tests/                 spec validator, engine, generator, builder (families, retry, judge, provenance, monthly pass),
                       worker (accounts, sessions, invites, caps, admin, courses, cron),
                       and app-level smoke tests (a DOM stub drives the real handlers)
config.json            where the app talks to (the tutor Worker); empty builds the route-less app
build.js               assembles dist/index.html
```

`npm test` runs everything and builds. `npm run serve` builds and serves locally.

## Three panels

On a wide screen the app is three columns; on an iPad in portrait the left rail is part of the page and
the right rail is a drawer; on a phone both are drawers behind the two buttons in the header.

- **Left rail — where you are.** The nav, a quick-jump box (type a topic name, a code, or a word from a
  key idea; Enter opens the first match), the course switcher (predicted grade, mastery bar, pin to
  the top), and the active course's topics as a tree grouped by paper, a status dot on each room and a
  red ring when it is due. The open room is marked.
- **Right rail — what now.** It changes with the view. *Today*: the next step (one sentence the tutor
  writes from the student's own errors and mastery, once a day, with a deterministic fallback), cards
  due, a progress ring per course, the streak. *In a room*: state, key-idea codes, cards due here, the
  mistakes logged here, and *Watch and read* — the course's checked hub pages, the topic's own links,
  and searches that always exist. *Rooms grid*: papers and weights, rooms by state, the next room to
  start. *Exam*: the board's command words, essay shapes and assessment objectives. *Progress*: the
  error pattern and remedy, this week, the streak.
- **Status strip.** Streak, minutes today, cards due, and whether progress is saved.

The course builder's last stage finds hub pages for each built course (BBC Bitesize, Physics & Maths
Tutor, Save My Exams, Seneca, the board's own page), checks each exists, and stores them with the
spec; an admin can edit them per course from the Admin tab. `npm run proof` photographs all of this at
1280, 900 and 390 pixels wide and asserts the layout (`docs/proof/`).

## Course depth

A built course starts with the specification map alone. As soon as it is published, a second
Workflow writes a **kit** for every room, four rooms at a time: a lesson with one section per key
idea, four to six faded worked examples, 12 to 16 questions in three difficulty tiers with a
three-hint ladder, a marked answer and a full solution, a four-question exit ticket, 12 to 15 recall
cards, and the family's extras (a formulae sheet; required-practical method sheets and an
extended-response model; model paragraphs marked to the board's levels, case-study fact files and an
essay plan; vocabulary fields and a grammar sheet). Sonnet writes it, `src/kit-validator.js` proves
the shape, and Opus re-solves every question and reads the lesson against the key ideas before it is
stored. A kit that fails is rewritten once with the objections; a second failure leaves that room
spec-only and lists it on the Admin course card with a Retry.

Students see a room's kit the moment it lands: the same Lesson, Key facts & links, Practise, Exit
ticket and Cards stations the hand-authored maths rooms use, with a "being written" mark on rooms
still to come. Kits are fetched per room and cached on the device by build stamp. Approving a monthly
proposal that changes a topic's key ideas rebuilds only that room's kit. About £12 to £20 per
34-topic course; the Admin card shows the model-call count.

Courses can also be built at full depth by hand in a Claude Code session, on a subscription rather
than the API: `npm run course -- fetch <board> <code>` downloads the document and extracts its text,
the spec and the kits are written to `src/specs/` and `src/kits/` with the same contracts and the same
fresh-context judge, and `build.js` serves the kits from the site. `npm run course -- current`
checks every hand-built course's document for changes. The procedure is
`.claude/skills/course-builder/references/depth.md`.

AQA Combined Science 8464 is the first course built this way: 30 rooms and 319 key ideas from the specification
(Version 1.1, judged 0.9 against the document), a kit in every room judged 0.80–0.93 by a second model, shipped in
`src/kits/AQA-8464.js` and photographed in `docs/proof/12-hand-built-room.png`. AQA Mathematics 8300 followed: 14 rooms
(the document's own sub-sections plus its formulae appendix) and 100 key ideas, every statement labelled with the tier
column the document places it in (judged 0.9), a kit in every room judged 0.80–0.90, shipped in `src/kits/AQA-8300.js`.
On the way the toolkit gained `write-prompt`, `check-kit`, `judge-prompt --kit` and `ship-kit`, so a writer and a judge
get the Worker's own briefs from the command line and a kit is stored with its verdict. The four original hand-written A level
specs predate the toolkit: their content is paraphrased from the boards' published structures and they carry no
document provenance, so `npm run course -- current` lists them as unchecked until each is read against its PDF and
given a `source` block.

## How it works on your site

The site opens on a sign-in screen. A student signs in with a username and password, and everything after that -- the tutor, their progress, the admin tab -- is keyed to that sign-in. Progress is saved to the Worker as they go and cached on the device, so signing in on another device picks up where they left off.

The Worker holds your Anthropic API key and forwards each request under the student's session, counting it against their daily cap. The key never reaches a browser.

Accounts are created from the **Admin** tab inside the app, which only an admin sees. Creating one gives you an invite link; the student opens it, chooses a password, and is in. There is no self-signup and no email sending -- you pass the link on however you like (the tab offers a prefilled email).

Built with an empty `tutorUrl` in `config.json`, the app has no sign-in and talks to `/v1/messages` directly -- the shape it had when published inside claude.ai.

## Deploy on Cloudflare from GitHub

Step-by-step, including buying a domain and putting the site on it: **[docs/DEPLOY.md](docs/DEPLOY.md)**.

### 1. Repository
Push this folder to a new GitHub repository.

### 2. Pages (the site)
Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
- Build command: `npm run build`
- Build output directory: `dist`
Every push to `main` redeploys. Attach your domain under *Custom domains*.

### 3. Worker (the tutor service)
Deployed from `worker/` (see *docs/DEPLOY.md* for the Git route). Values in `worker/wrangler.toml`: `ALLOWED_ORIGIN` and `SITE_ORIGIN` (your site, exact), `ADMIN_USERNAME`, and the two Cloudflare Access values for the recovery console. One secret, set in the dashboard: `ANTHROPIC_API_KEY` (set a spend limit at console.anthropic.com first). One KV namespace bound as `USAGE` -- accounts, sessions, invites, progress and usage counts all live there.

Health check: open the Worker URL in a browser → `{"ok":true,"service":"tutor-proxy"}`.

### 4. Your account, then theirs
Put a Cloudflare Access policy in front of `/admin*` on the Worker (your email only). Open `<worker>/admin`, sign in through Access, and press the button: it mints an invite for the admin account named in `ADMIN_USERNAME`. Open that link on the site, choose a password, and you are signed in as admin -- the recovery console is also how you reset your own password if you ever forget it.

Then, in the app, **Admin → Add a student**: name, username, requests a day. Copy the invite link or press *Email invite*. The student opens it, chooses a password, picks their level, subjects and boards, and builds their rooms. Turn an account off, delete it, change its cap, or mint a fresh invite (which resets the password) from the same tab.

### Costs
Sonnet 5 at API rates ($2/$10 per million tokens in/out): coach turn well under 1p, lesson ≈ 2–3p, essay marked from photos ≈ 7–10p. One active student ≈ £3–10/month, and each account has a daily cap. Your console spend limit — or your prepaid credit balance with auto-reload off — is the ceiling.

## Courses

**How a build works.** `POST /courses/build` starts a Cloudflare Workflow (`CourseBuilder`): locate or verify the board's PDF (HEAD: must be a PDF on the board's domain) → outline with Opus 5 reading the document (identity, papers, weights, AOs, options, command words, mark style, topic list) → one call per topic with Sonnet 5 (key ideas in the board's terms, case studies / worked examples / practicals per family) → the shared validator, with one corrective retry per failing topic → a judge pass with Opus 5 against the document → publish at 0.8 or above, otherwise the admin's review queue. The document is cached for the hour so the per-topic calls are cheap; a course costs roughly £2–4 and takes 4–8 minutes. Two students asking for the same course share one build.

**Families.** `src/families.js` — essay, quantitative, science with practicals, modern language — is the one place a maths course differs from a history one. The Worker's prompts are built from it; the course-builder skill's reference is generated from it; a test fails if they diverge.

**Provenance.** Every built course records the document URL, ETag, size and date, the build date, the models and prompt version, the judge's score and notes. Students see one line; the Admin tab sees all of it.

**The monthly pass.** A Cron Trigger on the 1st starts a `CourseReview` per published course. It HEAD-checks the document; if nothing changed it records the check and stops. If the document changed it rebuilds to a draft, diffs it against the published course at topic level, asks the document what it says changed, and files a proposal. Nothing is applied: the admin approves or dismisses. A proposal that removes or moves a topic is marked **breaking**, because student progress is keyed to topic ids.

**The catalogue.** `data/catalogue.json` lists qualification codes per board and level, with the PDF URL where it was verified live. An admin can add a qualification or a link from the Admin tab; the builder finds the PDF on the board's domain when there is no link, and asks for one when it can't.

**The skill.** `.claude/skills/course-builder/` is the same procedure for a person: identify the document, choose the family, outline, topics, validate, judge, ship — and how to run the monthly pass by hand.

## Extending

**A new subject or board:** usually nothing — a student adds it and the Worker builds it. To hand-write one instead, or to build one at full depth in a session (AQA 8464 is the worked example), follow the course-builder skill: `src/specs/<board>-<code>.js` exporting a spec object, required in `build.js`, passing `npm test`. Hand-written and Worker-built courses are the same shape.

**Hand-authored depth for a subject:** add `src/authored/<subject>.js` and register it in `src/authored/index.js` under the spec id, keyed by topic id. Rooms with authored content get the authored lesson, a Formulae & links station, a checked question set with a hint ladder, and an authored exit ticket; everything else stays generated. Maths is the reference.

**Mark conventions:** each spec carries `markConventions` (levels or points, command words, essay shapes). The marking prompt reads them, so a new board's conventions are data, not code.

## Rules baked into the build
- The build refuses if the file contains a `https://claude.ai/` string — one disabled the built-in AI route in September 2026.
- Every generated object is validated against the spec (real key-idea codes, minimum sizes, marks in range) before it is shown; one corrective retry, then a clear error.
- Retries with jittered back-off on transient failures; the Progress tab has a connection tester that reports the route and any failure verbatim.

## Under-18 users
Anthropic's usage policy has requirements for products used by minors. Read it before issuing keys to anyone under 18.
