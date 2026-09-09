# Deploying on your own domain

The README covers the shape of the deployment. This is the ordered checklist for a
domain you have not bought yet, plus the design for issuing user keys from inside
the app instead of by editing a secret.

Two things get deployed:

| Piece | What it is | Where it lives |
| --- | --- | --- |
| The site | `dist/index.html`, built from `src/` | Cloudflare Pages, on your domain |
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

## 2. Deploy the site to Pages

Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**,
authorise GitHub, pick this repository.

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

Save and deploy. You get `<project>.pages.dev`. Every push to `main` rebuilds —
and because `npm run build` runs the same code path as `npm test`, a build that
breaks the app fails the deploy rather than shipping it.

Then *Custom domains → Set up a domain* → enter your domain (and `www` if you
want it). Cloudflare writes the DNS records itself and issues the certificate;
give it a few minutes.

## 3. Deploy the Worker

From `worker/`, with Wrangler:

```
npx wrangler kv namespace create USAGE     # note the id it prints
npx wrangler deploy
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put USER_KEYS
```

Uncomment the `kv_namespaces` block in `wrangler.toml` and paste the id before
deploying, so the daily caps are actually enforced. Without KV the Worker still
authenticates keys but cannot count usage.

Or in the dashboard: *Workers & Pages → Create → Create Worker*, paste
`worker/index.js`, deploy, then *Settings → Variables and Secrets* for the two
secrets and *Settings → Bindings* for the KV namespace bound as `USAGE`.

Values:

- `ANTHROPIC_API_KEY` — **secret** — from console.anthropic.com. Set a monthly
  spend limit there first; that limit is your real ceiling.
- `USER_KEYS` — **secret** — `{"granite-otter-42":{"name":"Matthew","daily":200}}`
- `ALLOWED_ORIGIN` — plain text — `https://your-domain`, exact, no trailing slash.
  Leaving it `*` lets any site call your Worker on your API key.

### Put the Worker on your domain

Worker → *Settings → Domains & Routes → Add → Custom domain* →
`tutor.your-domain`. DNS is created for you. Students then enter
`https://tutor.your-domain` as the Tutor route, and the same-origin cookie story
below stays simple if you later add the admin panel.

Health check: open `https://tutor.your-domain` in a browser. You want
`{"ok":true,"service":"tutor-proxy"}`.

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

# Issuing keys from inside the app

Editing a JSON secret and redeploying to add a student works, but it does not
scale past a few people and gives you no record of who is using what. The
progression below moves the key list out of the secret and puts it behind a login
of your own, one step at a time. Each step is deployable on its own.

## Step 1 — move the key list into KV

The single change everything else builds on: keys stop living in a secret and
start living in data you can write at runtime.

Store one record per key, `key:<the key>` → `{"name":"Matthew","daily":200,"created":"2026-09-09","disabled":false}`,
in the same KV namespace as usage. `userFor()` in `worker/index.js` becomes an
`await env.USAGE.get(...)` with a JSON parse, and keeps falling back to the
`USER_KEYS` secret so existing keys carry on working while you migrate. Revoking
becomes a KV write instead of a redeploy — no downtime, immediate effect.

KV is eventually consistent (a write can take up to a minute to be visible
everywhere). That is fine for issuing and fine for revoking a key from a student
who has stopped studying; if you ever need a revoke to be instant and global,
that is the point to move to D1.

## Step 2 — an admin login for you

You want one account, not a user system. Keep it that way — the smallest thing
that is genuinely safe:

Add `/admin/login` to the Worker. It takes a password, compares it against a
hash you hold as a secret (`ADMIN_PASSWORD_HASH`, PBKDF2 or scrypt via WebCrypto
— never the password in plain text), and on success sets a signed session cookie:
`HttpOnly`, `Secure`, `SameSite=Strict`, a week's expiry, signed with an
`ADMIN_SECRET` using HMAC so it cannot be forged. Every `/admin/*` route checks
that cookie first and 401s without it. Rate-limit failed logins in KV — five
attempts per IP per fifteen minutes — so the password cannot be ground down.

Two upgrades worth taking, in order of value per hour spent:

- **A second factor.** TOTP (an authenticator app) is about thirty lines with
  WebCrypto and turns a guessed password into a non-event.
- **Cloudflare Access instead of writing any of this.** *Zero Trust → Access →
  Applications*, put the policy in front of `tutor.your-domain/admin/*`, allow
  one email — yours. Cloudflare handles the login and the Worker just reads the
  `Cf-Access-Jwt-Assertion` header. It is free at your scale, and it is the
  option I would take: no password handling of your own, no session code, and
  you get an audit log. The only reason to hand-roll Step 2 is if you want the
  admin panel to work without a Cloudflare login prompt.

## Step 3 — the admin panel

A new tab in the app, or a small separate page the Worker serves at `/admin`.
Either way it is a thin client over four routes:

| Route | Does |
| --- | --- |
| `GET /admin/keys` | List keys — name, daily cap, created, usage today, last seen |
| `POST /admin/keys` | Issue a key: you type a name and a cap, the Worker generates the key |
| `PATCH /admin/keys/:key` | Change the cap, disable or re-enable |
| `DELETE /admin/keys/:key` | Revoke |

Let the Worker generate the key rather than typing one:
`crypto.getRandomValues` over a wordlist gives `granite-otter-42` — readable
enough to dictate over the phone, random enough not to be guessed. Show the key
once, on creation, with a copy button and a share link that pre-fills the Tutor
route (`https://your-domain/#route=https://tutor.your-domain&key=<key>`) so a
student is set up in one tap instead of typing two fields correctly.

If you build the panel into the app rather than serving it from the Worker,
remember the admin cookie is scoped to the Worker's origin, so the panel's fetches
need `credentials: 'include'` and the Worker's CORS headers need
`Access-Control-Allow-Credentials: true` with `ALLOWED_ORIGIN` set to your exact
site origin — a credentialed request will not accept `*`. Serving the panel from
the Worker itself avoids that entirely, which is the simpler choice.

## Step 4 — what you will want once it is running

- **Usage per student over time.** You already write `usage:<key>:<day>`. Keep
  those keys for ninety days instead of two and the panel can draw a sparkline
  per student — which is also how you notice a key that has leaked.
- **Self-serve signup with an invite code.** One-time codes you generate; the
  student redeems one and gets their own key without you being at a keyboard.
- **Progress that follows the student between devices.** The real limitation
  today is that progress is browser-local. Once keys are in KV, the key is
  already an identity: `POST /progress` and `GET /progress` on the Worker,
  storing the same JSON the backup button produces under `progress:<key>`, gives
  sync and a server-side backup for a modest amount of code. This is the change
  students will feel most.
- **D1 instead of KV** when you want to ask questions across the data ("who has
  not studied this week"). KV answers by key; SQL answers by question. Not before
  you need it.

A rough ordering by value: Step 1 and Cloudflare Access get you safe key
management in an evening. The panel is a weekend. Progress sync is the one that
changes what the product is.
