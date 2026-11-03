# Interface review: meh home page (v3)

Skills from [`jakubkrehel/skills`](https://github.com/jakubkrehel/skills) (vendored in `.agents/skills`), applied to the Bluorng-inspired home page from v2. The direction, layout and Astryx components stay. This pass is polish, not a redesign.

## Scope and coverage

| Skill | Applied to | Coverage |
| --- | --- | --- |
| better-interface | Whole home page | Ranked list below drove the order of work |
| accessibility | Header, marquee, banner, tiles, drawers, forms | axe (desktop + 320px), tab order, focus rings, reduced motion |
| layout | Hero, grids, newsletter, cart drawer | 320 / 390 / 1440 px, logical (`start`/`end`) offsets |
| typography | Theme scale, headings, prices | Type scale rebuilt, `text-balance`/`text-pretty`, `tabular-nums` |
| colors | Text, dots, eyebrows, dark mode | Contrast measured on every text/background pair |
| ui | Buttons, icons, hover, touch | Hit areas, `pointer-coarse`, hover-only controls |
| writing | Labels, empty states, errors, CTAs | All visible and accessible strings on the page |
| break | `ProductTile` | 11 scenarios + flex squeeze (local harness) |
| state-machine | `CartDrawer` | empty, one, typical, many, long names, high qty, dark (local harness) |

Skipped on purpose: teardown, variant, build-design, explain-interface.

## Findings

| # | Severity | Domain | Location | Before | After | Why |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | HIGH | typography | Theme scale / `ProductTile` | Tile name and price rendered at **8px** (`xsm` on a 13px / 1.25 scale) | 14px base, 1.15 ratio; tiles 14px, badges 12px | Text below 12px can't be read on phones |
| 2 | HIGH | state-machine | `CartDrawer` | Undo lived in a toast behind the modal drawer, so it couldn't be clicked | Inline status row with **Undo** under the drawer header, for remove and clear | A recovery action you can't reach doesn't count as recovery |
| 3 | HIGH | break | `ProductTile` | A long unbroken name pushed the **+** button out of the tile | `min-w-0` + `overflow-wrap:anywhere` | Real catalogue data will break the grid |
| 4 | HIGH | accessibility | Marquee | Endless motion, no way to stop it; ran under reduced motion | Pause button (24px, `aria-pressed`); pauses on hover/focus; doesn't run at all under `prefers-reduced-motion` | WCAG 2.2.2 Pause, Stop, Hide |
| 5 | MED | accessibility | Page shell | No skip link; footer inside `<main>`; duplicate landmark names | "Skip to content" → `#main`; footer moved out; carousels labelled "{Rail} products" | Keyboard and screen reader users can reach the content directly; axe clean |
| 6 | MED | colors | Banner + tile dots | Inactive dots at 1.97:1 and 2.58:1 | Raised to ≥3:1 (`ink/45`, opacity-60) | WCAG 1.4.11 non-text contrast |
| 7 | MED | ui | `ProductTile` image arrows | Shown only on hover, so touch users never saw them | Always visible on `pointer-coarse` | Touch has no hover |
| 8 | MED | state-machine | `CartDrawer` | Names truncated to identical "Boxy Tee…" lines; no thumbnail; summary scrolled away; dead Checkout | Names wrap, thumbnails, `tabular-nums` qty, sticky summary, honest "Checkout isn’t connected in this demo" note, empty state with "Shop new in" | Each state now tells you what you have and what you can do |
| 9 | MED | ui | Header | Disabled "Account (demo)" button that did nothing; hand-rolled cart plural | Removed it; label "Cart, 2 items" via shared `Intl.PluralRules` helper | Don't show controls that do nothing; one plural rule everywhere |
| 10 | MED | ui | Mobile menu | Search field did nothing | Live product search: result count, up to 6 links, "No results for “q”", Clear search; `type=search`, `enterKeyHint`, autofocus | A search box that doesn't search breaks trust |
| 11 | MED | layout | Newsletter | Subscribe button clipped at 320px | Row wraps; input keeps `min-w-[12rem]` | No horizontal overflow at 320px |
| 12 | MED | layout | Hero | Absolutely positioned content could overlap at short heights | Flex column, `min-h-[max(520px,100svh-96px)]`, content in normal flow | Holds up on short laptop screens and mobile browsers with toolbars |
| 13 | LOW | writing | Section pills, forms | Every section pill said "View all"; vague errors | Pills name where they go ("Shop bags", "Browse collections", "Find a space"); error "Enter an email address like name@example.com"; curly quotes | Links should say where they lead |
| 14 | LOW | accessibility | Banner dots, Read more, directions | Unlabelled dots; Read more without state; "Get directions" ×3 | "Show banner N: title" + `aria-pressed`; `aria-expanded`/`aria-controls`; hidden " to {store}" | Unique, meaningful names |
| 15 | LOW | typography | Headings, body copy | Ragged headings; long body lines | `text-balance` on headings, `max-w-[65ch] text-pretty` on copy, non-breaking hyphen in "in‑between" | Cleaner rag; the hero line doesn't split at the hyphen |

### Break: `ProductTile`

| Scenario | Observed | Owner |
| --- | --- | --- |
| Long unbroken name | Overflowed and pushed out **+** → now wraps | Fixed in component |
| Very long name (normal words) | Wraps, card height grows evenly | OK |
| Huge price (`$12,345`) | Fits; `tabular-nums` | OK |
| Sold out | Overlay text "X is sold out", add disabled | Fixed label |
| Single image | Arrows hidden, no dots | OK |
| Many images (8) | Dots fit | OK |
| Missing badge / two badges | Layout stable | OK |
| Saved state | Fixed label + `aria-pressed` | Fixed in component |
| Touch device | Arrows visible on coarse pointers | Fixed in component |
| Dark mode | Outline `black/10` reads on both | OK |
| Squeezed flex parent (160px) | Holds with `min-w-0` | Fixed in component |

### State machine: `CartDrawer`

`empty` → `one` → `typical` → `many` (summary sticks) → `long-names` (wrap) → `high-qty` (`tabular-nums`) → removed / cleared with **Undo** → `checkout-note`. Not modelled yet: sold-out line, loading, checkout error. There's no backend for these.

## Fixed vs deferred

**Fixed:** 1–15 above.

**Deferred:**
- Footer links and collection tiles are still placeholders (`#top`, `#new-in`). They need real routes.
- Each product has 4 tab stops (save, prev, next, add). It would be better to group the image arrows into one roving control.
- The bookmark icon swaps without a cross-fade, and custom controls have no press-scale (0.96).
- The marquee, ink and paper colours use project primitives rather than Astryx semantic tokens.
- The Spaces card radius isn't concentric on mobile.
- The hero display line-height is 0.9, and the headline overlaps a figure's head. Both are kept as editorial choices.
- Cart states: sold-out line, loading and checkout error.

## Verification

**Passed**
- `npm run build` and `npm run lint`.
- axe-core: 0 violations at 1440px and at 320px.
- No horizontal overflow at 320px.
- Tab order starts with the skip link, and every stop has a visible ring.
- Inputs are 16px on touch, so there's no iOS zoom.
- Drawers use `overscroll-behavior: contain`.
- Scripted in Playwright against `next start`:
  - marquee pause
  - remove → Undo restores
  - clear → Undo restores
  - the Checkout note appears
  - under reduced motion, the marquee doesn't run and scroll isn't smooth
- Dark mode (system) renders correctly.
- Screenshots are in `docs/moodboard/meh-v3/`.

**Not verified**
- Real-device VoiceOver and NVDA passes.
- Manual 200% browser zoom.
- Windows forced-colors mode.
- Frame-by-frame motion in the DevTools Animations panel.

The break and state-machine harness pages (`/dev-harness/...`) exist only in the local checkout. They aren't committed, because `main` deploys publicly.

## Verdict

**Approve.** No HIGH findings remain open. The deferred items are polish or need real data and routes.
