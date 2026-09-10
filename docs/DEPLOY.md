# Deploying on your own domain

The README covers the shape of the deployment. This is the ordered checklist for a
domain you have not bought yet, plus the design for issuing user keys from inside
the app instead of by editing a secret.

Two things get deployed:

| Piece | What it is | Where it lives |
| --- | --- | --- |
| The site | `dist/index.html`, built from `src/` | A Cloudflare Worker serving static assets, on your domain |
| The proxy | `worker/index.js` | Cloudflare Worker, on a subdomain of your domain |

The Anthropic API key only ever exists as a Worker secret. The browser holds a
per-user key that the Worker trades for access.

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
- `USER_KEYS` -- **secret** -- `{"granite-otter-42":{"name":"Matthew","daily":200}}`
- `ALLOWED_ORIGIN` -- plain text, in `wrangler.toml` -- your site's origin, exact,
  no trailing slash. `*` lets any site on the internet spend your API credit.
- KV namespace `USAGE` -- bound as the variable `USAGE`.

### Put the Worker on your domain

Worker -> **Domains -> Add -> Custom domain** -> `tutor.your-domain`. DNS is
created for you. Students then enter `https://tutor.your-domain` as the Tutor
route.

Health check: open `https://tutor.your-domain` in a browser. You want
`{"ok":true,"service":"tutor-proxy"}`. Then
`https://tutor.your-domain/usage?key=<a key>` should report `today: 0` -- if it
reports `null`, the KV binding is not attached.

If the site and the Worker are on different origins -- `www.your-domain` versus
`your-domain`, say -- the browser sends the other origin and the Worker rejects
it. Pick one hostname for the site and use it everywhere, or redirect `www` to
the apex with a redirect rule.

## 4. Hand out access

Each student needs the site address, the Worker address and their own key. They
enter the last two once under *Progress → Tutor connection → Tutor route* and
press *Test the connection*. Progress lives in their browser on their device;
*Back up and restore* under Progress is the only copy, so tell them to use it.

- Usage today: `GET https://tutor.your-domain/usage?key=<their key>`
- Revoke: remove the key from `USER_KEYS` and redeploy the secret.

## 5. Before real students

- Spend limit set at console.anthropic.com.
- `ALLOWED_ORIGIN` is your domain, not `*`.
- KV bound, so `daily` caps bite.
- Anthropic's usage policy has requirements for products used by minors. Read it
  before issuing a key to anyone under 18.

---

# Issuing keys, and progress that follows the student

Both are built. Student keys live in the `USAGE` KV namespace, the Worker serves
an admin panel at `/admin`, and the app copies each student's progress to the
Worker so they can carry on from another device.

## Student keys

A key is a KV record, `key:<passcode>` -> `{name, daily, created, disabled}`.
Issuing one is a KV write, so a new student works immediately with no redeploy,
and turning a key off takes effect on their next request.

The `USER_KEYS` secret still works as a fallback for keys issued before the
panel existed — the panel lists those names and tells you to reissue them. Once
nobody is using them, delete the secret.

Passcodes are generated by the Worker: two words and six random characters, for
example `granite-otter-7k3m9x`. Readable enough to dictate over the phone, and
about 10^12 combinations, which matters because anyone can POST a guess. Wrong
keys are also counted per address, and an address that has had 50 wrong guesses
in a day stops being counted further.

## The admin panel

`https://tutor.your-domain/admin` lists every key with the student's name, their
usage today against their cap, when it was issued, and whether their progress is
synced. You can issue a key, change a cap, turn a key off and on, and delete one.
"Copy link" gives a setup link — `https://your-site/#route=...&key=...` — which
sets the student's tutor route in one tap instead of them typing two fields
correctly. The app clears the link from the address bar once it has read it.

### Putting Cloudflare Access in front of it

**The panel is off until you do this.** With `ACCESS_TEAM_DOMAIN` and
`ACCESS_AUD` unset, `/admin` returns 503 and explains itself. This is deliberate:
an admin panel that is open by default is worse than no panel.

1. Cloudflare dashboard -> **Zero Trust -> Access -> Applications -> Add an
   application -> Self-hosted**.
2. Application domain: `tutor.your-domain`, path `admin`.
3. Policy: Action **Allow**, Include -> **Emails** -> your email address.
4. Save, then open the application's **Overview** and copy the **Application
   Audience (AUD) tag**.
5. Put that tag in `ACCESS_AUD` and your team domain
   (`<team>.cloudflareaccess.com`) in `ACCESS_TEAM_DOMAIN`, in the `[vars]` block
   of `worker/wrangler.toml`, and push.

The Worker does not trust the header on its own. On every `/admin` request it
fetches your team's public keys, verifies the token's RS256 signature, and checks
the issuer, the audience tag and the expiry. A request without a valid token gets
a 401 whatever it claims. The test suite signs its own tokens and checks that
forged signatures, expired tokens, tokens for another application and tokens from
another issuer are all refused.

Nothing else on the Worker is behind Access — students never see a login, they
just send their passcode.

## Progress sync

Progress is stored per key at `progress:<passcode>`, holding the same JSON the
"Copy backup" button produces, plus a timestamp and which kind of device it came
from.

The app pushes automatically. Every save marks the state dirty; a push follows at
most once a minute, and one is flushed when the page is hidden — so the copy on
the Worker is current without a write on every keystroke. Pulling is always
manual: **Progress -> Tutor backup -> Load from tutor** names the device and the
time and asks before replacing what is on the device.

That asymmetry is the point. Automatic pushes mean nobody has to remember to back
up; a manual pull means no student ever loses an afternoon's work to a silent
restore.

**The one sharp edge:** last write wins. If the same student works on two devices
at once, the second push overwrites the first. For one student moving between an
iPad and a laptop this is fine. If it ever matters, the fix is a version counter
on the record and a merge when they diverge.

**On KV write limits:** the free tier allows 1,000 writes a day per namespace.
Each AI request writes a usage count, and each sync writes a progress record —
which is why the sync is throttled to a minute. One student is nowhere near the
limit; a class of thirty would want the paid tier.

## What is still worth building

- **Self-serve signup.** One-time invite codes so a student can claim their own
  key without you at a keyboard.
- **Usage over time.** The usage counters are kept for 100 days, so the panel
  could draw a sparkline per student — which is also how you would notice a key
  that has leaked.
- **D1 instead of KV**, when you want to ask questions across the data ("who has
  not studied this week"). KV answers by key; SQL answers by question. Not before
  you need it.


---


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
