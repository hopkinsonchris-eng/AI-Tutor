# Study Platform

A single-file web app for A level study, anchored to exam-board specifications. One room per topic the student actually studies; hand-authored depth where it exists (Edexcel Mathematics today), specification-anchored generated content everywhere else; spaced recall cards; essay and photo marking to each board's own conventions; a Socratic coach that never gives the answer; one scheduler across all subjects.

Subjects and boards currently mapped: **OCR Geography H481**, **Edexcel Business 9BS0**, **Edexcel Politics 9PL0**, **Edexcel Mathematics 9MA0**. Adding another is a spec file (see *Extending*).

## Layout

```
src/
  template.html        the app shell (HTML + JS); placeholders are filled by build.js
  styles.css           stylesheet
  core.js              engine: state, mastery rules, scheduling, prediction, reports (pure logic)
  gen.js               generator: spec-anchored prompts + validators for lessons, cards, questions, essays, marking, coach
  specs/               one file per qualification — components, weights, AOs, command words, topics, key ideas
  authored/            hand-authored content (maths: 19 lessons, 262 questions, exit tickets, dojo, verified links)
worker/
  index.js             Cloudflare Worker: accounts, sessions, invites, daily caps, progress, the admin API,
                       and the forward to Anthropic with your API key
  wrangler.toml
tests/                 spec validator, engine, generator, worker (accounts, sessions, invites, caps, admin),
                       and app-level smoke tests (a DOM stub drives the real handlers)
config.json            where the app talks to (the tutor Worker); empty builds the route-less app
build.js               assembles dist/index.html
```

`npm test` runs everything and builds. `npm run serve` builds and serves locally.

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

## Extending

**A new subject or board:** add `src/specs/<board>-<code>.js` exporting a spec object (copy `ocr-h481.js` for the shape), require it in `build.js`, run `npm test` — the spec validator has to pass before anything ships. The app generates that subject's rooms from the key ideas.

**Hand-authored depth for a subject:** add `src/authored/<subject>.js` and register it in `src/authored/index.js` under the spec id, keyed by topic id. Rooms with authored content get the authored lesson, a Formulae & links station, a checked question set with a hint ladder, and an authored exit ticket; everything else stays generated. Maths is the reference.

**Mark conventions:** each spec carries `markConventions` (levels or points, command words, essay shapes). The marking prompt reads them, so a new board's conventions are data, not code.

## Rules baked into the build
- The build refuses if the file contains a `https://claude.ai/` string — one disabled the built-in AI route in September 2026.
- Every generated object is validated against the spec (real key-idea codes, minimum sizes, marks in range) before it is shown; one corrective retry, then a clear error.
- Retries with jittered back-off on transient failures; the Progress tab has a connection tester that reports the route and any failure verbatim.

## Under-18 users
Anthropic's usage policy has requirements for products used by minors. Read it before issuing keys to anyone under 18.
