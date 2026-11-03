# Moodboard: bluorng.com (captured 3 Nov 2026)

These are reference screenshots of https://bluorng.com/, used only for **layout and pattern inspiration**.
All brand assets, product photos and copy in them belong to Bluorng. None of it is used in the meh
storefront. meh uses its own placeholder brand, names, copy and CSS-drawn imagery.

Captured with headless Chrome (Playwright): desktop at 1440×900 and mobile at 390×844 @2x.

| File | What it shows |
|---|---|
| `desktop-full.jpg` | Full desktop page, top to bottom |
| `mobile-full.jpg` | Full mobile page (downscaled to 1×) |
| `desktop-01-header-nav.png` | Header and nav bar |
| `desktop-02-hero.jpg` | Above-the-fold hero |
| `desktop-03-latest-drop-grid.jpg` | First product row and a bag carousel panel |
| `desktop-04-product-card-hover.jpg` | Product card hover state (gallery arrows) |
| `desktop-05-collection-rail-and-banner.jpg` | Full-bleed collection banner with dot indicator |
| `desktop-06-product-grid.jpg` | 4-column product grid |
| `desktop-07-category-rail.jpg` | Grid plus a second carousel panel |
| `desktop-08-stores-banner.jpg` | Stores panel |
| `desktop-09-footer.jpg` | Stores cards, SEO strip and footer |
| `mobile-01-hero.jpg` | Mobile hero |
| `mobile-02-product-grid.jpg` | Mobile 2-column grid |

Not captured: the menu-open state. The hamburger selector couldn't be found reliably in headless mode.

## Observations

**Layout.** The page is a light gray canvas (`#efefef`). Content sits either full-bleed or in white
rounded panels (about 24px radius) separated by about 16px gaps. The rhythm alternates:
hero → product grid → carousel panel → full-bleed banner → grid → carousel → stores → SEO → footer.

**Header and nav.** A white sticky bar about 45px tall. It has small text links on the left
(New in / Collections), a centred bold wordmark, and a row of small line icons on the right
(location, search, account, wishlist, cart) plus a pill hamburger. It is minimal, with no visible mega menu.

**Hero.** One full-viewport editorial campaign photo: a dark, smoky lineup of models. The only
CTA is one small underlined text link at the bottom centre. On mobile the hero is portrait and fills the screen.

**Product grid.** 4 columns on desktop and 2 on mobile, with hairline gutters (about 4px). Tall 3:4
images with square-ish corners. Each image has dot indicators, a bookmark/save icon at the top right,
and left/right arrows on hover. Under the image is a tiny name (11–12px) with the price below it
and a `+` quick-add on the right.

**Collection rails.** White rounded panels with a small title at the top left and a black pill
"Discover more" button at the top right. A horizontal carousel of rounded tiles, with a "Sold out"
pill and greyed-out sold-out imagery.

**Banners.** Full-bleed image banners. The active dot stretches into a pill.

**Stores.** A large pale blue panel with a small outlined label, a 3D globe illustration, and three
white store cards (name, address, "Get direction ↗").

**SEO strip and footer.** A white panel with a short blurb and "Read more", plus popular-search links.
The footer is a white rounded panel with three link columns, a logo with an image, and a tiny copyright line.

**Typography.** A neo-grotesk (Neue Haas-like) used very small (11–14px) in the UI, with medium weight
and sentence case. Big type appears only inside imagery.

**Colour.** The UI is strictly monochrome: black, white and grays. All colour comes from the photography.

**Spacing.** Tight inside the grid, generous inside panels (16–24px), and panels float with small gaps.

**Motion.** Image carousels, banner slide dots, hover arrows on cards, a floating chat bubble
and a welcome toast on mobile.

## How this maps to meh v2

See the root README ("meh v2 design notes") for the mapping to Astryx components and tokens.
Our screenshots are in `../meh-v2/`.
