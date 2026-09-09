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
  index.js             Cloudflare Worker: per-user keys, daily caps, forwards to Anthropic with your API key
  wrangler.toml
tests/                 spec validator, engine, generator, and app-level smoke tests (a DOM stub drives the real handlers)
build.js               assembles dist/index.html
```

`npm test` runs everything and builds. `npm run serve` builds and serves locally.

## How the AI route works

The app talks to `/v1/messages`. Inside claude.ai (as a published artifact) that call is proxied by Claude on the user's plan. On your own site, the user enters the **Tutor route** under *Progress → Tutor connection*: your Worker's address and their personal key. Every AI call then goes through the Worker, which adds your Anthropic API key server-side. The key never reaches the browser.

## Deploy on Cloudflare from GitHub

Step-by-step, including buying a domain and putting the site on it: **[docs/DEPLOY.md](docs/DEPLOY.md)**.

### 1. Repository
Push this folder to a new GitHub repository.

### 2. Pages (the site)
Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
- Build command: `npm run build`
- Build output directory: `dist`
Every push to `main` redeploys. Attach your domain under *Custom domains*.

### 3. Worker (the proxy)
Two routes. **Dashboard:** *Workers & Pages → Create → Create Worker*, paste `worker/index.js`, deploy, then *Settings → Variables and Secrets*:
- `ANTHROPIC_API_KEY` — **secret** — from console.anthropic.com (set a monthly spend limit there first)
- `USER_KEYS` — **secret** — JSON mapping key → user, e.g. `{"granite-otter-42":{"name":"Matthew","daily":200}}`
- `ALLOWED_ORIGIN` — text — `https://your-domain` (exact, no trailing slash)
Optional but recommended: *Settings → Bindings → KV namespace*, variable `USAGE` — enforces the per-user daily caps and keeps counts.

**Or with Wrangler** from `worker/`: `npx wrangler deploy`, then `npx wrangler secret put ANTHROPIC_API_KEY` and `npx wrangler secret put USER_KEYS`.

Health check: open the Worker URL in a browser → `{"ok":true,"service":"tutor-proxy"}`.

### 4. Users
Give each user (a) the site address, (b) the Worker address, (c) their key. They enter (b) and (c) once under *Progress → Tutor connection → Tutor route*, then *Test the connection*. Progress is stored in the browser on their device; *Back up and restore* is under Progress. To revoke a key, remove it from `USER_KEYS`. To see a user's usage today: `GET <worker>/usage?key=<their key>`.

### Costs
Sonnet 4.6 at API rates: coach turn ≈ 1p, lesson ≈ 3–5p, essay marked from photos ≈ 10–15p. One active student ≈ £5–15/month. Your console spend limit is the ceiling.

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
