# Study Platform

A single-file web app for A level study, anchored to exam-board specifications. One room per topic the student actually studies; every built-in course carries a written and examiner-checked kit in every room (lesson, faded worked examples, question bank, exit ticket, flash cards), with specification-anchored generated content everywhere else; spaced recall cards; essay and photo marking to each board's own conventions; a Socratic coach that never gives the answer; one scheduler across all subjects.

Nine courses are hand-built from the board's own PDF and ship with a written and checked kit in every room: **OCR Geography H481**, **Edexcel Business 9BS0**, **Edexcel Politics 9PL0**, **Edexcel Mathematics 9MA0** (19 rooms, 299 questions re-solved by a second model, worked examples with cues, formulae sheets checked against Pearson's own booklet), **AQA Combined Science 8464**, **Edexcel International GCSE English Literature 4ET1** (20 rooms, one per set text, every quotation verified against the text by a second model) and **Edexcel International GCSE English Language A 4EA1** (7 rooms) and **Edexcel International GCSE German 4GN1** (11 rooms, every German word checked by a second model for gender, ending and word order) and **Edexcel International GCSE Mathematics A, Foundation tier 4MA1** (35 rooms, every answer re-solved by a second model, mark schemes reconciled to their tariffs, Higher-tier content kept out, the formulae sheet checked against the specification's Appendix 4). Every other GCSE and A level in the catalogue (97 qualifications across AQA, Pearson Edexcel, OCR and Eduqas) is built on request: a student picks level, subject and board, presses **Add**, and the Worker builds the specification map from the board's own PDF while a progress bar shows the stages — then it's theirs. Built courses are held to the same validator as the hand-written ones, judged against the document before they go live, and checked against the document again every month (see *Courses*).

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
                       courses, the Workflow classes, the monthly cron, the dictation fallback (Whisper on Workers AI), and the forward to Anthropic
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
  mistakes logged here, and *Watch and read* — real videos for this topic (the Worker searches YouTube
  with model-written queries, a model keeps only the ones that teach the topic at this level, each is
  checked to exist, and the list is cached per room; a room where nothing passes lists none), then the
  course's checked hub pages, the topic's own links and a Bitesize search. *Rooms grid*: papers and weights, rooms by state, the next room to
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

## Real papers, marked from a photograph, back into the rooms

The Exam page lists the board's own published papers for each course (`data/papers/<ID>.json`, built by
`scripts/papers-index.js` for AQA and OCR from their listing pages and `scripts/papers-pearson.js` for Pearson
by probing its deterministic filenames; `node scripts/papers-index.js check` HEAD-checks every address). A paper
opens on the board's site; the newest series stay locked until the board's own release date and say so. Nothing
of the board's is ever stored: the tutor passes the paper's and mark scheme's addresses to the model while it
works, and keeps only the student's photographs, the derived question map (numbers, marks, topic, marking mode),
the paraphrased mark points, the marks and the notes. An admin can switch a board off from the Admin tab.

*Mark my answers* is four steps: photograph the pages (straightened and sharpened as on the desk); tap a page,
then the questions it holds, and say how sure you were; confirm what the model read of each answer and tick the
paraphrased mark points you think you met; then the marks, point by point, quoting the student's own words as
evidence, with what was missing, where the checker differed from the student's ticks, and an unreadable answer
withheld rather than guessed (type it in or skip it). The examiner-style note on a lost-mark question stays hidden
until the student says where the marks went. The report orders topics by marks lost × weight, shows the grade on
that series' boundaries where the index carries them, and the coach's note. Rooms move by damped rules (below 70%
of a topic's marks is one state down, never more from one paper; full marks under exam conditions is a fluent
pass), every lost-mark question becomes a mistake with its failure mode and a re-test a week later — a fresh
question of the same shape, marked against its own points; two clean passes clear it, three misses send the room
back to its lesson. The daily plan carries the re-test step, capped at ten questions. Marks can also be typed in.

Worker routes: `POST /papers`, `GET /papers[/<id>]`, `PATCH /papers/<id>`, page upload/patch/delete under
`/papers/<id>/pages`, `POST /papers/<id>/questions` (question map, shared per paper), `/prepare` and `/mark`
(Workflows, one step per question), `/questions/<q>/mark`, `/status`, and `/papers/admin/boards`. Each model
call counts against the student's daily cap.

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

## Finding your way: the campus

After sign-in the student lands on the **campus**: an axonometric ink drawing with one building per subject in their portfolio (a different shape each, the subject's colour on the door), the **Exam Hall** and the **Office**. A building starts as a single storey and gains a floor for every share of its rooms the student has started, up to its shape's full height; finished floors have their windows lit. One flag per building says what needs attention (red: a re-test or an overdue review; amber: cards or a review due today; blue: a new lesson today). The drawing is tinted by the time of day. Beside it the **notice board** names the one thing to do now with a Go button that lands on the right desk, the coach's note, the rest of today, and **Ask the caretaker** — a question over the student's own map answered in one line with a door to open (`src/gen.js` `caretakerPrompt`, small model, under the daily cap).

A building opens its **corridor**: one door per topic under its component sign, a state strip on each door and a note saying what is due. A door opens the classroom: the desk and its stations as before, with the **wall** beside it (this room, cards due, the desktop, mistakes, watch and read). The **quick bar** under the date jumps to any subject's corridor from anywhere; a chip is dashed until that corridor has been walked once. The Office holds courses (with pins), the account and, for the admin, the Admin desk. The renderer is `src/campus.js` (`campusSvg(model)`), tested on its own in `tests/campus.test.js`.

### The first week: setup as a wizard, then a walkthrough that is the work

A brand-new student sets up through six screens, one question each: first name, exam summer, GCSE or A level, subjects with their boards (Add, one at a time; an unmapped course sends Chris a message exactly as before), the reading and focus helpers (optional, the same settings the Office holds), and the coach's name. The single form stays for editing courses from the Office. Build my rooms lands on the campus.

The notice board then carries the **First Week** card: ten things to do once, in three groups — find your way (open a building, go through a door and read the lesson, ask the caretaker), do the work (turn a flash card over, answer an exam question and mark it, take an exit ticket, ask the coach), see how you're doing (the Exam Hall, Progress, a helper in the Office). Each step ticks itself when the student really does it; nothing ticks from looking. **Show me** on any step goes to the right place and spotlights the one thing to press, with a one-line caption; the spotlight clears on the tick or on leaving. One small caretaker call after setup (`src/gen.js` `tourPrompt`, `validateTour`) rewrites the ten lines in the student's own subjects and rooms; a line that is too long or off the point keeps the fixed text, and a failed call is silent. From the second day, an untouched step becomes the caretaker's "Still to try" on the board. ✕ hides the card; **Show me around** in the Office restarts it, which is how existing accounts get it. The steps live in `TOUR_STEPS`; the state in `S.tour`.

### Read: checked pages from trusted UK sites

Under the videos, every room's wall lists two to four pages to read, found the way the videos are (`worker/reads.js`, `POST /reads`). The model's web search is fenced to a short list of trusted UK sites for the course's subject family — Physics & Maths Tutor, Cognito, Corbettmaths, Maths Genie, Chemguide, Isaac Science, Internet Geography, tutor2u, Parliament, DW and Goethe for German, Seneca and Save My Exams as freemium — plus the course's own board. Every page the model proposes is fetched like a browser sees it and must return a real HTML page at an address still on the list; a model then picks the best few with one line on what each gives the student. Each row shows the site, a free or freemium tag, the why and Pin to desk. Results are cached per room for 60 days. When nothing verifies, the course's hub pages and the Bitesize search stand as before. Nothing from any site is stored beyond its title.

### Predicted grades wait for the last year

A predicted grade is shown only once the exam is under 365 days away (`gradesShown` in `src/core.js`). Before that, being told you are on a U is only a fact about the calendar, so the header, the Office cards, the corridor plate, the Exam Hall, Progress and the paper report show a trend instead: ↗ when a room's state rose, practice went right or a paper was sat in the last fortnight, — otherwise (`subjectTrend`).

## Support: reading, attention and focus

Everything in the Office's **Support** panel is off until the student switches it on, and the choices travel with their progress. The panel names the JCQ access arrangement each aid mirrors, so a student who will sit the paper with a reader, a scribe, a prompter, rest breaks or extra time practises the same way every day — the "normal way of working" those arrangements require — and **Progress** shows what was used each week as evidence.

- **Reader.** A *Read this page* bar under the header and a 🔊 on each body paragraph (not on titles, sub-lines, captions or the wall). Each sentence is spoken by the browser's own voice (a British English voice is preferred) and highlighted inside its block as it is read; speed from 0.7× to 1.4×; the **Voice** list in the Support panel offers the device's own voices, British English first, with *Hear this voice* to try one; the choice is kept by name and falls back to the best British English voice on a device that lacks it. *Line focus* dims everything except a window of one, three or five lines that follows the pointer or the reading; *Wider spacing* applies the WCAG text-spacing values; *Coach speaks* reads each reply aloud.
- **Tutor voice.** Beside the device voices, the Support panel offers a natural British voice from the tutor service, Athena or Helios (Deepgram Aura on Workers AI). The reader fetches each sentence from `POST /tts` and plays it in order with the same highlight, the next sentence fetched while one plays, speed 0.7× to 1.4× with pitch kept. The Worker keeps every sentence's audio in R2 under the model, the voice and the sentence's hash, so a lesson is synthesised once for everyone who reads it; a hit is free, and fresh text counts one request per thousand characters against the daily cap. Any fault — the service down, no AI binding, the cap reached, an iPhone refusing to play without a tap — falls back to the device voice for that sentence and the bar says so; reading never stops. The text sent is the sentence on the page with only a small table of symbols swapped (×, ÷, →, ≥, ≤, °). A device-aware line under the voice list says where the best free voices are: Edge on Windows, the enhanced voices in Accessibility settings on a Mac or iPhone.
- **Dictation.** A 🎤 beside the coach box, the essay box, the marking box and desk notes. Chrome, Edge and Safari recognise speech themselves (the panel says where the audio goes); a browser that cannot, such as Firefox, records instead and the tutor service transcribes the recording with Whisper on Workers AI (`POST /speech`, one call against the daily cap, nothing stored). The words land in the box to edit before sending; nothing is recorded until the mic is pressed.
- **The coach floats on every page.** The button at the bottom right opens a panel that says what the coach can see — the room, the station, the question on screen with hints used and minutes on it, the mistakes logged here, today's step — and the prompt carries exactly that (`floatingCoachPrompt` in `src/gen.js`: the spec block in a room, the student's map elsewhere). Replies stay Socratic and can name one door, which renders as an Open button. History is kept per place; the room's Coach station opens the panel and keeps teaching mode; Escape closes it; on a phone it is a bottom sheet.
- **Prompter.** After 3, 5 or 8 quiet minutes at a desk the coach says the student's name, "back to question 2", or that the minutes have passed — the JCQ prompter's repertoire and nothing about the content, from a fixed list with no model call. *I'm here* clears it; *Break* stops the clock for five minutes.
- **Break steps down.** *Break it into steps* on the notice board's Now note and in the coach panel turns the step into 3–4, 5–7 or 8–12 steps (Haiku, validated for count, length and minutes, with a built-in sequence when the model's answer is unusable); only *Now* and *Next* are shown, and ticks are kept for the day.
- **Calm mode.** No animation or transition anywhere, no grid, no shadows or pulses, and the campus without its time-of-day tint. Nothing on the platform makes a sound.
- **Plain, literal language.** One register block (`registerBlock`) added to every prompt — lessons, cards, questions, essay frames, marking, the coach, the weekly note, the caretaker, the nudge, chunking — so the tutor writes without idioms, figures of speech, sarcasm or rhetorical questions, numbers its steps and says what will happen next.
- **Visible time.** A countdown ring at the bottom left for the step pressed Go on, timed essays, real papers and each practice question, with 25% or 50% extra time from the profile and rest breaks that stop the clock, as in a supervised rest break.

The Worker needs the `[ai]` binding in `worker/wrangler.toml` for the dictation fallback; without it the route answers 503 and the app tells the student which browsers can dictate on their own. `npm run proof` photographs the coach panel, the reader with line focus, calm mode, the Support panel, the phone sheet with the timer, and the prompter.

## Extending

**A new subject or board:** a student's Add for a course that is not mapped never starts a build; it sends a request to the Admin tab's review queue (a red count on the Admin tab), and only the admin presses *Build it now*, which spends the API. Once published the student adds it. To hand-write one instead (or to give a built course the depth of the built-in four), follow the course-builder skill: `src/specs/<board>-<code>.js` exporting a spec object, required in `build.js`, passing `npm test`. Hand-written and Worker-built courses are the same shape.

**Hand-authored extras for a subject:** `src/authored/index.js` can register, under a spec id, verified links per topic (`sources`), official documents (`official`), grade boundaries and a lost-mark dojo; the app adds them to that course’s rooms. It can also hold whole authored rooms, but a checked kit in `src/kits/` always takes precedence over them, so the kit pipeline is the way to give a course depth.

**Mark conventions:** each spec carries `markConventions` (levels or points, command words, essay shapes). The marking prompt reads them, so a new board's conventions are data, not code.

## Rules baked into the build
- The build refuses if the file contains a `https://claude.ai/` string — one disabled the built-in AI route in September 2026.
- Every generated object is validated against the spec (real key-idea codes, minimum sizes, marks in range) before it is shown; one corrective retry, then a clear error.
- Retries with jittered back-off on transient failures; the Progress tab has a connection tester that reports the route and any failure verbatim.

## Under-18 users
Anthropic's usage policy has requirements for products used by minors. Read it before issuing keys to anyone under 18.
