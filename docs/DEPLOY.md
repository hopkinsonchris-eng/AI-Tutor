# Deploying on your own domain

The README covers the shape of the deployment. This is the ordered checklist for a
domain you have not bought yet, plus the design for issuing user keys from inside
the app instead of by editing a secret.

Two things get deployed:

| Piece | What it is | Where it lives |
| --- | --- | --- |
| The site | `dist/index.html`, built from `src/` | A Cloudflare Worker serving static assets, on your domain |
| The tutor service | `worker/index.js` | Cloudflare Worker, on a subdomain of your domain |

The Anthropic API key only ever exists as a Worker secret. The browser holds a
session token from signing in, which the Worker checks on every request.

## 1. Buy the domain

Register it through **Cloudflare Registrar** (Cloudflare dashboard → *Domain
Registration → Register Domain*). Bought there, the domain is already on your
account with nameservers set and DNS pointed at Cloudflare — nothing to delegate.

If you buy elsewhere, add the domain under *Add a site*, then change the
nameservers at the registrar to the two Cloudflare gives you. Propagation is
usually minutes, occasionally a day. Everything below waits until the domain
shows **Active**.

A `.com` or `.co.uk` is around £10/year. Pages, Workers and KV all have free
tiers that comfortably cover a handful of students; the Anthropic API is the
only real running cost.

## 2. Deploy the site

Cloudflare dashboard -> **Compute -> Workers & Pages -> Create -> Import a repository**,
authorise GitHub, pick this repository.

- Production branch: `main`
- Build command: `npm run build`
- Build output / assets directory: `dist`

Save and deploy. You get a `<name>.workers.dev` address. Every push to `main`
rebuilds it -- and because `npm run build` runs the same code path as `npm test`,
a build that breaks the app fails the deploy rather than shipping it.

Then on that Worker: **Domains -> Add -> Custom domain** -> your domain.
Cloudflare writes the DNS record and issues the certificate itself; a few minutes
later the site is live on it.

Do not add DNS records by hand for any of this. Cloudflare refuses to create a
custom domain on a hostname that already has a conflicting record, so a
hand-written A or CNAME blocks the step it was meant to help.

(Cloudflare Pages is the older path to the same result -- build command
`npm run build`, output directory `dist`. Either works; new projects get Workers.)

## 3. Deploy the Worker

The proxy is a **second, separate Worker**. Do not paste it over the site --
that would replace the site with the proxy.

### From GitHub (no copy-paste)

**Create -> Import a repository -> this repo**, and set:

- Root directory: `worker`
- Build command: leave empty
- Deploy command: `npx wrangler deploy` (the default)

Cloudflare reads `worker/wrangler.toml` and deploys `worker/index.js`. Pushes to
`main` redeploy it. Set `ALLOWED_ORIGIN` and the KV id in that file rather than in
the dashboard: a Git deploy applies what the file says and drops bindings added
by hand in the dashboard.

### Or with Wrangler, from `worker/`

```
npx wrangler kv namespace create USAGE     # note the id it prints
npx wrangler deploy
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put USER_KEYS
```

Paste the namespace id into the `kv_namespaces` block in `wrangler.toml` and
uncomment it before deploying, so the daily caps are enforced. Without KV the
Worker still authenticates keys but cannot count usage.

### Or in the dashboard

**Create -> Create Worker**, deploy the Hello World placeholder, then **Edit
code**, paste `worker/index.js` over it, **Deploy**. Add the KV binding under
**Bindings**, and the values under **Settings -> Variables and Secrets**. Leave
**Protect with Cloudflare Access** off during creation -- it puts a login in
front of the Worker and every API call from the app would fail.

### Values, whichever route

- `ANTHROPIC_API_KEY` -- **secret** -- from console.anthropic.com. Set a monthly
  spend limit there first; that limit is your real ceiling.
- `ALLOWED_ORIGIN` and `SITE_ORIGIN` -- plain text, in `wrangler.toml` -- your
  site's origin, exact, no trailing slash. `*` lets any site on the internet spend
  your API credit.
- `ADMIN_USERNAME` -- plain text -- the account the recovery console can mint an
  invite for.
- KV namespace `USAGE` -- bound as the variable `USAGE`. Accounts, sessions,
  invites, progress and usage counts all live there.

### Put the Worker on your domain

Worker -> **Domains -> Add -> Custom domain** -> `tutor.your-domain`. DNS is
created for you. Students then enter `https://tutor.your-domain` as the Tutor
route.

Health check: open `https://tutor.your-domain` in a browser. You want
`{"ok":true,"service":"tutor-proxy"}`. If you get a 503 saying the KV namespace
is not bound, that is exactly what is wrong.

If the site and the Worker are on different origins -- `www.your-domain` versus
`your-domain`, say -- the browser sends the other origin and the Worker rejects
it. Pick one hostname for the site and use it everywhere, or redirect `www` to
the apex with a redirect rule.

## 4. Your account first

The Worker will not create an admin out of thin air. It has a **recovery
console** at `/admin`, behind Cloudflare Access, whose one job is to mint an
invite for the account named in `ADMIN_USERNAME`.

1. **Zero Trust → Access controls → Applications → Add an application →
   Self-hosted.** Subdomain `tutor`, domain `your-domain`, path `admin`. The path
   matters: left empty, Access would put a login in front of every student's
   request.
2. Policy: Allow, Include → Emails → your address. Type it in lowercase -- a
   phone keyboard capitalises the first letter, and Access will not match it.
3. Copy the application's **Audience (AUD) tag** -- the 64-character hex string,
   not the UUID-shaped application id -- into `ACCESS_AUD` in `wrangler.toml`,
   and your team domain into `ACCESS_TEAM_DOMAIN`. Push.
4. Open `https://tutor.your-domain/admin`, sign in through Access, press **Mint
   an invite**. Open the link on your site, choose a password. You are signed in
   as admin.

Keep the console: it is also how you reset your own password. Everything else
happens inside the app.

## 5. Then theirs

In the app, **Admin → Add a student**: name, username, AI requests a day. You
get an invite link, a copy button and an *Email invite* button that opens a
prefilled message in whatever handles mail on your device -- send it from Zoho
or paste it into a text. The link works once, for seven days. The student opens
it, chooses a password, picks a level, subjects and boards, and builds their
rooms.

From the same tab: turn an account off (their session ends at once), delete it
(progress goes too), change the cap, or mint a fresh invite -- which is how a
forgotten password is reset, since you never see passwords.

## 6. Before real students

- Spend limit set at console.anthropic.com, or prepaid credits with auto-reload
  off.
- `ALLOWED_ORIGIN` is your domain, not `*`.
- Anthropic's usage policy has requirements for products used by minors. Read it
  before inviting anyone under 18.

---

# Courses: what to set up, and what the free plan can do

The Worker's `wrangler.toml` now declares three Workflows (build, monthly review, depth) and a Cron
Trigger; a Git deploy creates all four. Nothing else to configure — the same `ANTHROPIC_API_KEY`
secret pays for builds.

- **Workflows** (free plan): 1,024 steps per instance, unlimited wall-clock per step, 100 concurrent
  instances, 10 ms of CPU per step. A course build is 5 + topics steps (the last finds revision hub
  pages with a web search and checks each one; it never fails a build); model calls are I/O and do
  not count against CPU. If a step ever trips the CPU limit, the Workers Paid plan ($5/month) raises
  it to 30 seconds — that is the fix, not code.
- **Cron Triggers** (free plan): five per account; this uses one, `0 6 1 * *`.
- **Cost**: roughly £2–4 per course at API rates, mostly the per-topic calls reading a cached copy of
  the document. Your credit balance is still the ceiling. Builds are coalesced, capped at 40 topics,
  and the monthly pass costs nothing for an unchanged document.
- **Depth**: a published course's rooms are written and checked automatically (about £12 to £20 and
  20 to 30 minutes for 34 topics; rooms fill in as they land). The Admin course card shows rooms
  done, model calls, and any room the second model refused twice, with Retry and Rebuild depth. Depth
  only starts on publish, approval, or those buttons, so cost is never open-ended.
- **Revision links**: each built course carries the hub pages the builder found. Edit them under the
  course in the Admin tab (one per line, `name | kind | https://…`); students see them in every room.
  The four built-in courses get search links only, plus the maths course's hand-checked videos.
- **The next-step nudge**: one small Sonnet call per student per day, counted against their daily
  cap, cached in their progress. If it fails the app shows the first undone session step instead.
- **Watching a build**: `GET https://tutor.your-domain/courses/<id>/status` with a session, or the
  Admin tab. Cloudflare's dashboard also lists Workflow instances under the Worker.

# How accounts work

**Storage.** Everything is in the `USAGE` KV namespace:
`user:<username>` holds the account -- name, role, daily cap, a salted PBKDF2
hash of the password (100,000 iterations, the Workers ceiling), never the
password. `session:<token>` maps a sign-in to a username and expires after 30
days. `invite:<token>` is single-use and expires after 7 days.
`progress:<username>` is the student's state with a timestamp and the device it
came from.

**Sign-in.** The app posts username and password, gets a session token, and
sends it as `Authorization: Bearer` on every request after that -- the AI proxy,
progress, and the admin API alike. A 401 from any of them signs the student out
cleanly rather than leaving a broken tutor. Ten wrong passwords against one
account, or thirty from one address, stop further attempts for the day.

**Roles.** An `admin` sees the Admin tab and can use `/manage/*`; a `student`
cannot, and the Worker enforces that, not the tab. An admin cannot turn off or
delete their own account.

**Progress.** The copy on the Worker is the truth. On sign-in the app loads it;
if there is none yet but the device has a cached copy for that user, it adopts
that and pushes it. Saves go to the device and, throttled to one every fifteen
seconds and flushed when the page is hidden, to the Worker. Last write wins: one
student on two devices *at the same time* would lose the earlier push. Moving
between devices is fine.

**Moving from the old passcode model.** Passcodes stop working on deploy. Create
each student an account with the same first name they used in the app; on their
first sign-in on the same device the app recognises the old local progress by
that name, adopts it, and pushes it. A different name, or a different device,
starts fresh -- their old *Copy backup* text can be pasted into *Restore*.

**Limits.** KV's free tier allows 1,000 writes a day per namespace. A sign-in
writes one record, each AI request one usage count, each sync one progress
record. A handful of students is nowhere near it; a class of thirty would want
the paid tier.

## What is still worth building

- **Usage over time.** Usage counts are kept for 100 days; the Admin tab could
  draw a per-student sparkline from them.
- **Self-serve signup with an invite code**, if you ever have more students than
  you want to add by hand.
- **A version counter on progress**, if a student ever works on two devices at
  once.

---

# Notes from the first deployment

Things that cost time doing this for real, worth knowing before the next one.

**The two build surfaces look alike.** "Import a repository" under Workers gives
a build with a **Deploy command** field. The "Continue to Pages" link on the same
screen gives a Pages build, which has only a build command and an output
directory. A Pages build that runs `npx wrangler deploy` fails asking for
`CLOUDFLARE_API_TOKEN`, because in a Pages build wrangler runs as an
unauthenticated user command. If you see that error, you are on the Pages path --
recreate the project under Workers rather than supplying a token.

**Production and branch builds use different deploy commands.** Production runs
the Deploy command (`npx wrangler deploy`); every other branch runs the
non-production one (`npx wrangler versions upload`). A push to a feature branch
therefore fails differently from a push to `main`, and retrying a branch build
never tests a production setting. Check which command a log ran before reading
anything into it.

**Deploying a subdirectory: prefer `--config` over Root directory.** Root
directory is a case-sensitive path (`worker`, never `Worker`), and phone
keyboards capitalise the first letter of a text field. Setting the deploy command
to

```
npx wrangler deploy --config worker/wrangler.toml
```

leaves Root directory empty and reads the config directly. `main` resolves
relative to the config file, so `index.js` there means `worker/index.js`.

**The Worker name in the config decides what gets overwritten.** `wrangler
deploy` deploys to the `name` in `wrangler.toml`, not to the build project's
name. Keep them the same, and keep the site's Worker on a different name -- a
mismatch either fails or replaces the wrong Worker.

**Plain variables come from the repo; secrets do not.** A Git deploy applies the
`[vars]` block and the bindings in `wrangler.toml` and drops anything added by
hand in the dashboard, so set `ALLOWED_ORIGIN` and the KV binding in the file.
Secrets live outside the repo and survive deploys, so set those in the dashboard
once.

**The first real build (AQA Combined Science 8464, 10 Sep).** 34 topics, 416 key ideas, 52 minutes, and
the judge scored it 0.4: every content statement was there in the board's wording, but the draft
invented paper codes the document never prints, rounded six 16.7% papers to 17/16, split single
statements into "a/b" codes, appended "HT" to codes, listed the 21 required practicals twice (inside
their topics and again in three aggregate "RP-" topics), and put apparatus in caseStudies that the
specification does not mention. Prompt version 2026-09-10.4 forbids each of these by name, the
validator accepts the document's own percentages within rounding, and the science family rule now
says a practical appears once, under its content statement, with only what the document lists.
Reject a 0.4 build from the review queue and press Rebuild once the new Worker is deployed.

## The desktop's storage (R2)

The per-room desktop stores students' photos and PDFs in an R2 bucket. In the Cloudflare dashboard open
R2 → Create bucket → name it `studyplatform-desk` (the name `worker/wrangler.toml` binds as `DESK`), then
redeploy the Worker. Until the bucket exists the desktop tab says "not set up yet" and everything else
works as before. Create the bucket before the Worker's Git deploy runs: a deploy that names a bucket which does
not exist yet fails, and the old Worker stays live until the next push to `main` (or a retry under
Workers → Builds). R2 is billed per GB stored (pennies at this scale); the 250 MB per-student quota keeps it
bounded. Each student's index and quota live in the same KV namespace as their progress.
