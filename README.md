# Study Platform

A single-file web app for A level study, anchored to exam-board specifications. One room per topic the student actually studies; every built-in course carries a written and examiner-checked kit in every room (lesson, faded worked examples, question bank, exit ticket, flash cards), with specification-anchored generated content everywhere else; spaced recall cards; essay and photo marking to each board's own conventions; a Socratic coach that never gives the answer; one scheduler across all subjects.

Seven courses are hand-built from the board's own PDF and ship with a written and examiner-checked kit in every room: **OCR Geography H481**, **Edexcel Business 9BS0**, **Edexcel Politics 9PL0**, **Edexcel Mathematics 9MA0** (19 rooms, 299 questions re-solved by a second model, worked examples with cues, formulae sheets checked against Pearson's own booklet), **AQA Combined Science 8464**, **Edexcel International GCSE English Literature 4ET1** (20 rooms, one per set text, every quotation verified against the text by a second model) and **Edexcel International GCSE English Language A 4EA1** (7 rooms). Edexcel International GCSE German 4GN1 and Mathematics A Foundation 4MA1 are being built the same way. Every other GCSE and A level in the catalogue (97 qualifications across AQA, Pearson Edexcel, OCR and Eduqas) is built on request: a student picks level, subject and board, presses **Add**, and the Worker builds the specification map from the board's own PDF while a progress bar shows the stages — then it's theirs. Built courses are held to the same validator as the hand-written ones, judged against the document before they go live, and checked against the document again every month (see *Courses*).

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
  authored/            the maths course’s verified links, official documents, grade boundaries and lost-mark dojo (its older hand-authored rooms are the fallback for any room without a kit)
worker/
  index.js             Cloudflare Worker: accounts, sessions, invites, daily caps, progress, the admin API,
                       courses, the Workflow classes, the monthly cron, and the forward to Anthropic
  builder.js           the course builder: document → outline → topics → validate → judge → resources → publish; the monthly review
  depth.js             course depth: for every room, a kit written by one model and checked by another, four rooms at a time
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

Students see a room's kit the moment it lands: the Lesson, Key facts (or Formulae) & links, Practise,
Exit ticket and Flash cards stations, with a "being written" mark on rooms still to come. Kits are fetched per room and cached on the device by build stamp. Approving a monthly
proposal that changes a topic's key ideas rebuilds only that room's kit. About £12 to £20 per
34-topic course; the Admin card shows the model-call count.

Courses can also be built at full depth by hand in a Claude Code session, on a subscription rather
than the API: `npm run course -- fetch <board> <code>` downloads the document and extracts its text,
the spec and the kits are written to `src/specs/` and `src/kits/` with the same contracts and the same
fresh-context judge, and `build.js` serves the kits from the site. `npm run course -- current`
checks every hand-built course's document for changes. The procedure is
`.claude/skills/course-builder/references/depth.md`.

## The desktop in every room

Every room has a Desktop tab: a wall of the student's own material, private to them and kept on the tutor
(the index in KV under `desk:<user>:<room>`, photos and PDFs in the R2 bucket `DESK`), never inside the
progress blob. A student can:

- photograph notes or classwork from the phone's camera — the photo is resized to 2,000 px on the device,
  a Straighten step lets them drag four corners onto the page and warps it flat with a levels clean-up,
  then the tutor transcribes it (Haiku, one call, counted against the daily cap) so the wall's search finds
  any word in it, and "Make cards" turns the transcription into checked cards for the room's deck;
- pin a YouTube or Vimeo video (YouTube resumes where they stopped), save a link (title and preview are
  fetched by the Worker, public http(s) only), write a card straight into the room's deck, keep a note,
  or attach a PDF;
- see items again: anything saved 7, 21 or 60 days ago comes back once in Today's plan as
  "From your desktop", and the next-step nudge can send them to a desktop.

Limits: 250 MB of files per student, 200 items per room, 8 MB per file. Without the R2 binding the
Worker answers the desktop routes with 503 and the tab says "not set up yet"; nothing else changes.
`npm run proof:desk` drives the whole flow in a browser against a stub tutor and writes `docs/proof/desk-*.png`.

## The desk at the top of every room

Above the station strip every room draws the student's desk: a flat hand-drawn scene whose objects are the
stations, and whose shapes are the room's state. Nothing on it needs reading as a number first:

- four post-its on a cork board: the tutor's next-step nudge (or where to start), the coach's weekly note,
  the student's own latest note, and today's numbers (cards due, days to the exams, the session's steps
  and minutes);
- a photo of the latest notes taped to the wall, or a dashed frame inviting the first one; a plant that
  grows through Unassessed, Learning, Fluent and Secure; a mortar board for the coach; an open textbook
  for the lesson with a bookmark for the key facts;
- three piles of practice questions (standard, exam-standard, hard) whose height is the questions still
  waiting in the room's bank at that difficulty, minus the ones the student has already got right there; a tablet showing the last pinned video and where it will resume; a box of flash cards for the room's
  deck with a red flag carrying the due count; a planner with today's date, the term, the countdown and
  today's steps; a notepad for essays with the last mark; an in-tray for marking; the exit ticket, ticked
  once passed; and a drawer for the desktop's saved photos, videos, links, notes and files.

Every object is a button with an accessible name; click, Enter or Space opens the station beneath. The
text strip under the desk still names every station for screen readers and narrow phones, where the
captions hide and every object keeps a hit area of at least 44 px. The desk is drawn from what the app
already holds (no extra network calls), motion is transform-only and off under `prefers-reduced-motion`,
and `DESK_ON=false` in `src/template.html` puts the plain strip back. The new Planner station shows the
countdown, today's session with ticks, and the year's terms and holidays.

**The coach's weekly note.** When a room with work in it is opened, and its log has changed since the
last note and the last note is a week old, the coach writes one post-it of at most 14 words from that
room's log (practice by difficulty with hints, marked answers, essays and their levels, mistakes, cards
due, the room's state). One Haiku call per room per week at most, none for an untouched room, kept in the
student's state under `coachNotes`, shown on the pink post-it and at the top of the Coach station.

**The coach's name.** Each student names their coach at setup or from the Coach station ("Your coach's
name"); it is kept in their own state and used on the tab, the desk, the chat and in every coach prompt.

## Worked examples you can actually predict, and cards with more than one right answer

Every worked example now opens with its **setup**: the whole problem as the student would see it (every
value, reading, statement or scenario, and what is asked). The steps stay faded, and before each one a
**cue** says what to predict ("Which reading does not fit the others, and why?"), answerable from the setup
and the steps already shown. A kit without setups (an older Worker build) shows its first line at once.

A flash card whose front asks for an example, or for one of several acceptable answers, is **open**: its
back lists two or three acceptable answers and the app says any sound example scores. The contract in
`src/kit-validator.js` requires both, the Worker's depth pipeline writes them, and
`node scripts/kit-refine.js <course> extract-all | apply <room> | assemble` retrofits a shipped kit with a
writer agent, refusing any rewrite that loses a value from the original steps.

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

**A new subject or board:** usually nothing — a student adds it and the Worker builds it. To hand-write one instead (or to give a built course the depth of the built-in four), follow the course-builder skill: `src/specs/<board>-<code>.js` exporting a spec object, required in `build.js`, passing `npm test`. Hand-written and Worker-built courses are the same shape.

**Hand-authored extras for a subject:** `src/authored/index.js` can register, under a spec id, verified links per topic (`sources`), official documents (`official`), grade boundaries and a lost-mark dojo; the app adds them to that course’s rooms. It can also hold whole authored rooms, but a checked kit in `src/kits/` always takes precedence over them, so the kit pipeline is the way to give a course depth.

**Mark conventions:** each spec carries `markConventions` (levels or points, command words, essay shapes). The marking prompt reads them, so a new board's conventions are data, not code.

## Rules baked into the build
- The build refuses if the file contains a `https://claude.ai/` string — one disabled the built-in AI route in September 2026.
- Every generated object is validated against the spec (real key-idea codes, minimum sizes, marks in range) before it is shown; one corrective retry, then a clear error.
- Retries with jittered back-off on transient failures; the Progress tab has a connection tester that reports the route and any failure verbatim.

## Under-18 users
Anthropic's usage policy has requirements for products used by minors. Read it before issuing keys to anyone under 18.
