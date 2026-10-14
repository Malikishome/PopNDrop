# Fix: success message shows "Thanks, !" instead of the submitter's name

**Type:** Fix

## The problem

In `PopNDrop/src/RequestMachineForm.jsx`, after a successful submission the
confirmation screen is supposed to read "Thanks, <Name>!" but always shows
"Thanks, !" with the name missing.

Root cause: `handleSubmit` calls `setSubmitted(true)` and `setName('')` (plus
the other field resets) in the same synchronous block. React batches all
`setState` calls from one event handler into a single render, so by the time
the success screen renders, `name` has already been reset to `''`. The
success JSX reads the live `name` state (line 98), which is the same state
the reset just cleared - there's no independent record of what was actually
submitted.

Confirmed live via browser testing during the production-deployment feature
(both local preview and https://popndrop-three.vercel.app/).

## The fix

Capture the submitted name into its own piece of state before clearing the
form, and have the success message read that captured copy instead of the
live `name` state. Introduce `submittedName` (string), set it from `name`
right before (or instead of) the reset, and swap line 98's `{name...}` for
`{submittedName...}`. Don't change the reset behavior for the other fields -
the form must still clear so "Submit another request" starts blank.

Must not break: the existing capitalization formatting
(`name.charAt(0).toUpperCase() + name.slice(1)`), the "Submit another
request" flow (clicking it sets `submitted` back to `false`, which should
still show a blank form), and the Supabase insert / EmailJS send, both of
which still use the live field values and are unaffected by this fix.

## Build steps

- [x] **Step 1 - Capture and use the submitted name** - add
  `const [submittedName, setSubmittedName] = useState('')`, set
  `setSubmittedName(name)` in `handleSubmit` before/alongside the other reset
  calls, and change the success message to read `submittedName` instead of
  `name`. *Done when:* submitting the form with a real name shows "Thanks,
  <Name>!" with the correct capitalized name, verified by a real browser
  submission (screenshot of the success screen), and clicking "Submit
  another request" still returns to a blank form.

## Files / areas

- `PopNDrop/src/RequestMachineForm.jsx`

## Verify

Run the dev/preview server, fill out the request form with a real name
(e.g. "jordan"), submit, and confirm the success screen reads "Thanks,
Jordan!" (capitalized, not blank). Click "Submit another request" and
confirm the form is empty again. No test runner is configured, so this
rides on browser evidence, not a unit test.
