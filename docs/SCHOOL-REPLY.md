# Draft: reply to a school that declined Study Platform on safeguarding grounds

Send from your own address. Fill in the bracketed names. The claims about what the platform does are written to
match worker/safeguarding.js, worker/index.js and docs/SCHOOL-PACK.md exactly as committed — if either changes,
re-check this letter against them before sending, the same way docs/SCHOOL-PACK.md itself is kept in sync.

---

Dear [name],

Thank you for such a considered reply, and for setting out exactly what stood in the way rather than a general
no. I've taken each of the points in turn, and wanted to come back to you rather than let it rest there.

**On the age restriction.** The 18+ line you quite rightly picked up on is Anthropic's rule for people signing up
to their own consumer product, Claude.ai, directly. Study Platform doesn't do that: [my daughter] would never hold
an account with Anthropic, only with Study Platform, which calls Anthropic's API from its own server under my own
account. Anthropic's separate published guidance for organisations building products for under-18s doesn't
prohibit that; it sets out what has to be in place first — age-appropriate access control, content moderation,
monitoring, and compliance with child-privacy law. That's a checklist, not a wall, and it's the checklist I've
now built against.

**On the substance of your letter.** The part I took most seriously was this: *"it is not sufficient for an AI
system simply to contain its own guardrails."* You're right, and until this week that was a fair criticism of
Study Platform — the only thing standing between a student and a concerning conversation was the model's own
good judgement, with nothing logged and no way for anyone to see it had happened. I've since added a filtering
and monitoring layer that sits in front of the model, not inside it, so it holds regardless of what the model
would have done on its own:

- Any message naming suicidal or self-harm intent, or disclosing abuse, never reaches the AI model at all. The
  server intercepts it and answers with a fixed, human-written message pointing the student to Childline
  (0800 1111) and Shout (text 85258), and to telling a parent, teacher or trusted adult — the same message every
  time, not something generated on the fly.
- Broader signs of distress — bullying, hopelessness, not coping — still get the student's study question
  answered, but the same support message is appended underneath, so it reaches them regardless of how well the
  model itself responded.
- Every one of those matches is logged with a timestamp and a short excerpt, and can be posted immediately to a
  webhook I configure — which I would be glad to point at whoever your school nominates, so your own
  safeguarding lead has direct, real-time visibility rather than depending on me to pass things on. There's also
  an admin screen listing every flag raised each day, with a record of who reviewed it and when.
- The AI is now instructed to say plainly that it is a program, not a person, if a student asks, and to redirect
  a personal disclosure to a trusted adult rather than engage with it — on top of, not instead of, the filter
  above.

None of this is described only in this letter. It's in the code, and it's covered by automated tests that run on
every change — including tests that check the filter correctly leaves ordinary schoolwork alone (an essay
question about Ophelia's death, a history question about wartime casualties, a PSHE question about what Childline
does), so it doesn't become a nuisance filter that gets in the way of studying. I've attached (or can send) an
updated information pack, docs/SCHOOL-PACK.md, with the full detail and the exact test names, and the repository
itself is open to inspect at github.com/hopkinsonchris-eng/AI-Tutor if anyone technical at the school would find
that useful.

**What I haven't finished yet, in the interest of not overstating it to you.** I don't yet have a written data
protection impact assessment, a formal published complaints process, or a security certification such as Cyber
Essentials — all things your own list rightly asks for, and all things I intend to put together. I'd welcome
knowing which of those, if any, would actually move the needle for your governors, so I put my time into the
right one first rather than guessing.

**What I'd suggest.** Rather than asking you to reconsider the whole platform at once, would it help to start
narrower — the "teacher-directed use only" mode your own AI policy already allows for, where a student only gets
AI help on a task a teacher has set, not open-ended chat? That's a much smaller step than the full platform, and
would let us test the safeguarding path you've asked about in practice before asking you to trust it at scale.

I'd be glad to talk it through, by email or otherwise, whichever is easier for you.

Yours sincerely,

Chris Hopkinson
