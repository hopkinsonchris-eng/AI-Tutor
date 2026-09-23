# Study Platform — Data Protection Impact Assessment

*Follows the ICO's seven-step DPIA process (ico.org.uk). Prepared by the controller, Chris Hopkinson, for Study
Platform (studyplatform.co.uk). Cross-references worker/index.js, worker/safeguarding.js and docs/SCHOOL-PACK.md
as committed. If the code changes, re-check this document against it, the same way SCHOOL-PACK.md is kept in
sync. Sections marked **[ACTION — Chris]** are judgement calls for the controller, not something written from
the code, and are left open on purpose rather than guessed at.*

## Step 1: Identify the need for a DPIA

Study Platform processes personal data belonging to children (GCSE, iGCSE and A level students, typically aged
14 to 18) through an AI system, for a purpose that touches how a child learns and, through the safeguarding
filter, may touch a child's disclosure of a personal or safety concern.

Under UK GDPR, a DPIA is required whenever processing is likely to result in high risk. The ICO treats new or
innovative technology (an AI/LLM system) combined with children's data as an automatic trigger, not a judgement
call. This DPIA is mandatory rather than precautionary, and it exists because a school asked what safeguards
were in place before allowing the platform: a working example of the assessment doing its job before a decision
got made on incomplete information.

## Step 2: Describe the processing

**Nature.** A single-person-operated (Chris Hopkinson) revision platform. One static web app and one Cloudflare
Worker handle accounts, sessions, saved progress, an AI tutoring and marking proxy, and, as of this DPIA, a
safeguarding filter in front of that proxy.

**Scope.** Invite-only. Accounts are created by the controller for named individuals he knows personally: family
and a small number of invited students. There is no public sign-up. The realistic population is a handful of
named children and young adults, not the general public.

**Context.** Used from home and, where a school permits it, from a school network. A child's use isn't watched
by an adult in real time, which is why the safeguarding filter exists: nobody is reading every exchange as it
happens.

**Purpose.** Exam revision — lessons, worked examples, question practice, marking of a student's own answers to
the exam board's conventions, and a coach that prompts rather than answers. The safeguarding filter has a
narrower, separate purpose: catching a message that isn't a study question at all.

**What is collected, where it goes, and how long it's kept**, from the KV/R2 layout documented at the top of
worker/index.js:

| Data | Purpose | Where it goes | Retention |
|---|---|---|---|
| Username, display name, salted password hash, role, daily cap | Sign-in and account administration | Cloudflare KV only | Until the account is deleted |
| Session token | Keeps a student signed in | Cloudflare KV; browser local storage | 30 days, then expires automatically |
| Invite token | One-time account setup | Cloudflare KV | 7 days, then expires automatically |
| Saved progress (rooms studied, scores, cards due) | Lets revision resume across devices | Cloudflare KV | Until the account is deleted |
| Desk items a student adds (links, notes, photos, files) | A student's own working notes for a topic | Cloudflare KV (index) and Cloudflare R2 (files) | Until the account is deleted or the item removed |
| Photographed exam answers and derived marking data | AI marking of a student's own work | Cloudflare KV/R2; the image and question context go to Anthropic's API for marking, once, and are not stored by Anthropic for training | Until the account is deleted or the attempt removed |
| The text (and any image) of a tutor message | Producing the AI's reply | Sent to Anthropic's API for that one call; the platform itself doesn't store the message text, only that a call happened (see the usage counter below) | Not stored, except the excerpt kept when the safeguarding filter matches (below) |
| Safeguarding flag: username, category, a short excerpt (at most 500 characters), timestamp, review state | Lets a human check what the filter caught, and is the evidence that it happened | Cloudflare KV; optionally also posted once to a webhook the controller configures | No expiry is currently set. See the risk and action below |
| Daily usage count per account | Enforcing the daily cap | Cloudflare KV | 100 days, then expires automatically |
| Failed sign-in counts, per account and per network address | Lock-out after repeated failures | Cloudflare KV | 2 days, then expires automatically |
| Cached video/reading-list picks for a topic | Avoids repeating an AI or search call for the same topic | Cloudflare KV, not linked to any one student | 7 to 60 days, then expires automatically |
| Audio sent for dictation or the read-aloud voice | Optional accessibility features | Cloudflare Workers AI (Whisper, Deepgram Aura): Cloudflare's own infrastructure, not a separate third party. The resulting voice clip is cached in R2; the dictated text is not stored | Cached audio kept until manually cleared, not linked to a transcript store |

**Who else can see it.** Anthropic gets the message and image content of one call, tagged with a username, not
used to train models (anthropic.com/legal/commercial-terms). Cloudflare is the infrastructure the whole service
runs on. No advertising, analytics or tracking third party ever receives anything. Nothing here is sold or
shared beyond what this table lists.

## Step 3: Consultation

**[ACTION — Chris.]** The ICO expects the views of the people affected, here the students and, for the younger
ones, their parents, to be sought and recorded, or a documented reason given for why not. For an invite-only
platform used by family and a small number of known students, this is realistic to do directly: a short
conversation with each family about what's collected, why, and what the safeguarding filter does, recorded here
with the date and who was spoken to. Nothing has been recorded yet.

## Step 4: Necessity and proportionality

**Lawful basis.** The controller's relationship with every data subject is direct and personal: each account is
created by Chris for someone he knows, not the public. That supports legitimate interests as the basis for the
core service, balanced against the interests of the children involved. That balancing is what sections 5 and 6
of this document, and the safeguards in docs/SCHOOL-PACK.md, exist to support. **[ACTION — Chris: confirm this
is the basis you intend to rely on, and for which purposes. The AI tutoring itself may sit better on legitimate
interests, while an optional feature like the read-aloud voice could sit on consent instead, switched on only
when a student turns it on, which the code already reflects.]**

**Could the same purpose be achieved with less data?** Broadly yes, and mostly already is: message text isn't
retained after the AI call unless the safeguarding filter matches it; photographed answers keep only derived
marking data, not a permanent image archive; no email address is required to hold an account. The one gap found
here is the safeguarding flag's indefinite retention, covered in Steps 5 and 6.

**Transparency.** UK GDPR requires the people affected to be told, in an accessible way, what's collected and
why (Article 13/14). This doesn't yet exist as a plain-English notice a student or parent can read.
docs/SCHOOL-PACK.md is written for a school's network team, not for a student or parent, and isn't linked from
the app itself. **[ACTION — Chris: write and link a short privacy notice from the app's sign-in/setup screen,
covering what this table covers in plain language, including what the safeguarding filter does and why.]**

## Step 5: Identify and assess risks

| Risk | Likelihood | Severity | High risk? |
|---|---|---|---|
| A student in genuine crisis (self-harm, abuse) sends a message and gets an unhelpful or unpredictable AI reply, with nobody aware it happened | Was plausible, given only a prompt-level guardrail with no logging. Now low, given the deterministic filter and logging in worker/safeguarding.js | Severe | Was high risk; substantially mitigated (Step 6) |
| A safeguarding flag, containing a distress-related excerpt, is kept indefinitely with no review or deletion point | Certain, as currently built. No code path removes one | Moderate: a sensitive record outliving any justified purpose | Yes, until fixed |
| A safeguarding flag survives even after the account it names is deleted, because `safeguard:<day>:<id>` keys aren't linked to the account-erasure routine | Certain, as currently built | Low to moderate: an orphaned record naming a since-deleted account, with no route to also remove it on request | Worth fixing, not on its own high risk |
| The AI is given, or infers, more about a student than intended (over-sharing in a message) | Possible. The system prompt limits what the AI is told to ask for, not what a student volunteers | Low to moderate | No |
| A message meant as an exam-style question about a sensitive topic, a history question about war deaths, an essay on Hamlet, is misread as a genuine disclosure and triggers an unwanted safe-reply | Low. The filter is scoped to first-person, intent-bearing phrasing, and tested against exactly this kind of example (tests/safeguarding.test.js) | Low: a false positive is a wrong tutor reply, not a safety failure | No |
| Account or session compromise (a shared device, a guessed password) exposes a child's saved work | Low. Salted PBKDF2 hashes, session expiry, lock-out after repeated failures | Moderate | No |
| Data held by a sub-processor (Anthropic, Cloudflare) is mishandled | Low. Reputable providers, contractual terms already reviewed for the "no training on inputs" claim in docs/SCHOOL-PACK.md | Moderate | No, but worth a documented sub-processor check (Step 7) |

## Step 6: Identify measures to reduce risk

| Risk | Measure | Status |
|---|---|---|
| Crisis message unhandled or unlogged | Deterministic pre-model filter; fixed safe-reply for the clearest cases; support message appended for broader distress; every match logged with an admin review endpoint; optional webhook to alert a nominated contact immediately | Done. worker/safeguarding.js, worker/index.js `proxy`/`manageSafeguarding`, tested in tests/safeguarding.test.js and tests/worker.test.js SG1–SG8 |
| Safeguarding flags kept indefinitely | Set a defined retention period on `safeguard:<day>:<id>` (an `expirationTtl` on the KV write) | Not done. **[ACTION — Chris: decide the retention period before this is coded. Long enough that a pattern of concern across weeks is still visible to a reviewer, short enough to be defensible. 12 months is a reasonable starting point, but the call is yours, not a technical one.]** |
| Flags outlive a deleted account | Extend `eraseUser` to also remove that username's `safeguard:` records, or deliberately keep them for the same retention period regardless of account deletion (safeguarding records are one of the few things schools themselves keep past a pupil's departure) and say so in the privacy notice | Not done. **[ACTION — Chris: decide which behaviour is intended before this is coded. The two options above aren't the same decision.]** |
| No plain-English privacy notice | Write one, link it from the app | Not done. See Step 4 |
| Sub-processor risk | Record Anthropic's and Cloudflare's own data-processing terms against this DPIA once, rather than relying on this document's summary of them | Not done |
| False positives in the safeguarding filter getting in the way of legitimate study | Scope the filter to first-person, intent-bearing phrasing only; test it against realistic exam content in the same subject areas | Done. tests/safeguarding.test.js section E |
| Account compromise | Salted PBKDF2 password hashing, 30-day session expiry, per-account and per-address lock-out after repeated failures | Done. worker/index.js, existing tests |

## Step 7: Conclude the DPIA

**[ACTION — Chris.]** Record here, once Steps 3, 4 and 6's open items are settled:

- Which risks are accepted as residual and why, which are reduced, and which are eliminated.
- That there's no separate Data Protection Officer for a sole-controller platform this size, and that the
  controller has read and applied the ICO's DPIA and Children's Code guidance directly instead.
- A review date. Suggested: whenever the processing changes materially (a new AI feature, a new data category),
  and at least annually regardless, given how fast guidance in this area is moving.
- Sign-off: name, role and date.

## Related, not duplicated here

The ICO's separate Age Appropriate Design Code (the Children's Code) sets 15 standards for services likely to be
accessed by children, and has been confirmed to apply to edtech providers even where it doesn't bind the school
using them. Several of its standards, data minimisation, no engagement-maximising design, high privacy by
default, are already reflected in the measures above, but a standard-by-standard assessment against all 15
hasn't been done. That's a natural next document, not a repeat of this one.
