# The monthly update pass

Boards change specifications every five to ten years, with notice, and correct small things
between. The pass exists to notice, not to rebuild; most months it should touch nothing.

## Steps

1. **Compare provenance first.** HEAD the recorded `sourceUrl`. If `ETag`, `Last-Modified` and
   `Content-Length` all match what was recorded, mark `checkedAt` and stop. No model call, no cost.
   If the document has moved (404), or the catalogue now holds a different URL for the code, treat
   that as changed.
2. **If changed, read the new document** and produce a proposal against the published spec:
   - topics added, removed, renamed (id or name), or moved between components
   - ideas added, removed, or with changed content
   - components, weights, options, command words, essay shapes that differ
   - what the document itself says changed (errata, "changes from issue N", first-assessment dates)
3. **Classify.** A proposal is **breaking** if any published topic id is removed or renamed, or an
   option's choices change. Everything else is **additive**.
4. **File it.** The proposal goes to the admin's review queue with the diff at topic level and the
   document's own statement of changes. Nothing is applied.

## Applying a proposal (admin)

Approve replaces the published spec with the proposed one and records the decision; dismiss
records the decision and keeps the current spec. Either way `checkedAt` moves on and the next pass
starts from the new provenance.

A student's progress is keyed to topic ids. When a breaking proposal is approved, rooms for removed
topics stay in their state with their history; new topics appear as new rooms. Nothing is deleted.

## Running it by hand

From the Admin tab, **Check now** runs the pass for one course. From Claude Code, follow the steps
above for a hand-written spec in `src/specs/` and open a pull request with the changes and the
document's statement of changes in the description.
