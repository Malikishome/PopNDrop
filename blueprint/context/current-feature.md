# Fix: location card images leave white gaps, and are oversized

**Type:** Fix

## The problem

In `src/Locations.jsx`, each location card's image leaves white
space on its left and right edges instead of filling the card. Confirmed
persistent (not a loading flash) and identical on both `npm run dev` and
the live Vercel site at desktop width.

Root cause, two separate issues in the same markup:

1. The image's wrapper `<div className="h-48 relative">` sets a height but
   no width. It's a flex child of `flex justify-center items-center` on the
   card, so it doesn't stretch to fill the card - it shrinks to the image's
   own intrinsic width at that height, leaving empty space on narrower
   images.
2. The outer card has `h-50` in its className, which isn't a real Tailwind
   class (the default scale jumps from `h-48` to `h-52`), so it's a silent
   no-op.

Separately, the six location images are far larger than they need to be:

| File | Dimensions | Size |
|---|---|---|
| officeCard.jpg | 5842x3895 | 3.3M |
| gymCard.jpg | 7580x5056 | 5.2M |
| aptCard.jpg | 4000x3000 | 2.8M |
| schoolCard.jpg | 2896x1944 | 988K |
| WarehouseCard.jpg | 8368x5584 | 8.3M |
| hospitalsCard.jpg | 4032x3024 | 1.7M |

They render at roughly 384x192 CSS px (w-96 h-48) per card, so even at 2x
for retina displays, ~768x384 is plenty. Shipping multi-megabyte originals
adds real load time for no visual benefit.

## The fix

**Layout:** give the image wrapper an explicit width so it fills the card
instead of shrinking to content, and drop the invalid `h-50` class in favor
of a real one (or remove it, since the inner `h-48` div already controls
the visible height). The simplest correct version: make the wrapper
`w-full h-48 relative` and drop `flex justify-center items-center` from the
card (or keep it; it becomes a no-op once the child fills the width).

**Images:** resize all six to a max width of ~1200px (comfortable retina
headroom for a 384px-wide card) and re-compress as JPEG, using macOS's
built-in `sips` (no new dependency). Replace the files in place at the same
paths/filenames so `Locations.jsx` needs no changes for this part.

Must not break: the hover scale/translate effect on the card, the dark
overlay + location name label (the `absolute inset-0` div), the existing
responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), and the
scroll-reveal animation on the section.

## Build steps

- [ ] **Step 1 - Fix the image wrapper so it fills the card** - update the
  wrapper div's className in `Locations.jsx` so the image covers the full
  384x192 card area edge-to-edge, and remove the invalid `h-50` class.
  *Done when:* a browser screenshot of the Locations section shows all six
  images filling their cards with no white gaps on the sides, hover effect
  and name overlay still work.
- [ ] **Step 2 - Resize and compress the six location images** - use `sips`
  to resize each of `officeCard.jpg`, `gymCard.jpg`, `aptCard.jpg`,
  `schoolCard.jpg`, `WarehouseCard.jpg`, `hospitalsCard.jpg` in
  `public/` to max width ~1200px, re-saved in place. *Done when:*
  all six files are under ~300KB each, still look sharp at their rendered
  card size (visual check), and the build/dev server still serves them
  correctly.

## Files / areas

- `src/Locations.jsx`
- `public/officeCard.jpg`, `gymCard.jpg`, `aptCard.jpg`,
  `schoolCard.jpg`, `WarehouseCard.jpg`, `hospitalsCard.jpg`

## Verify

Run the dev/preview server, scroll to the Locations section, and confirm
each of the six cards shows its image filling the card with no white
margin, the dark overlay + name still readable, and hover still
scales/lifts the card. Check file sizes in `public/` dropped
substantially. No test runner is configured, so this rides on browser and
build evidence, not a unit test.
