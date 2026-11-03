# meh

E-commerce storefront prototype for iterating on design systems.

**Stack:** Next.js (App Router, TypeScript) · Tailwind CSS v4 · [Astryx](https://astryx.atmeta.com) (Meta's open-source design system, beta) · deployed on Vercel.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## How the design system is wired

| Layer | Where | What it does |
| --- | --- | --- |
| Astryx components | `@astryxdesign/core/*` | Button, Card, TopNav, Drawer, TextInput, Toast, Grid/Stack layout… |
| Astryx theme | `src/themes/meh.theme.ts` (source) → `npm run theme:build` → `src/themes/meh.{css,js}`, used in `src/app/providers.tsx` | Custom `meh` theme extending Astryx Neutral (monochrome). All semantic tokens (color, type, spacing, radius, shadow) come from here. |
| Tailwind bridge | `src/app/globals.css` | Imports Astryx CSS + `@astryxdesign/core/tailwind-theme.css`, so Tailwind utilities like `bg-surface`, `text-secondary`, `rounded-lg` read Astryx tokens. Also declares the CSS layer order so Tailwind utilities can override Astryx via `className`. |
| Project tokens | `src/styles/tokens.css` | Storefront art direction Astryx doesn't model: placeholder image tiles (`tile-*`), ink/paper colours, marquee animation. |

### Swapping the design

1. **Try another stock theme:** `npm i @astryxdesign/theme-<slug> && npx astryx theme add <slug>`, then point `providers.tsx` at it and swap the CSS import in `globals.css` (slugs: neutral, butter, chocolate, matcha, stone, gothic, y2k).
2. **Brand it:** edit `src/themes/meh.theme.ts` (`defineTheme({extends: neutralTheme, ...})`) and run `npm run theme:build`. See `npx astryx docs author-a-theme`.
3. **Project-only tokens:** edit `src/styles/tokens.css`.

Components never hard-code colors or sizes, so a theme change restyles the whole page.

## Structure

```
src/
  app/
    layout.tsx          root layout
    providers.tsx       Astryx <Theme>, Next Link bridge, cart provider
    globals.css         CSS layer order + Astryx/Tailwind imports
    page.tsx            single-page storefront composition
  components/storefront/
    SiteHeader.tsx         sticky marquee + TopNav (links | wordmark | icons), cart count
    AnnouncementMarquee.tsx looping announcement bar (custom)
    MobileMenu.tsx         start-side Drawer menu with search
    Wordmark.tsx           placeholder "meh" logotype
    EditorialHero.tsx      full-viewport campaign hero (CSS art)
    ProductGrid.tsx        tight 4/2-column grid of ProductTiles
    ProductTile.tsx        3:4 tile: 2-shot gallery, save toggle, quick add
    CollectionRail.tsx     panel + Astryx Carousel of tiles
    CampaignBanner.tsx     full-bleed banner with pill dots
    CollectionsGrid.tsx    shop-by-collection tiles
    SpacesPanel.tsx        stores panel with CSS globe + cards
    SearchStrip.tsx        about blurb + popular searches
    SiteFooter.tsx         link columns, newsletter, big wordmark
    Newsletter.tsx         validated email signup (demo, sends nothing)
    CartDrawer.tsx         cart drawer: qty +/-, remove, subtotal
    Panel.tsx / SectionHeader.tsx / GarmentGlyph.tsx / tiles.ts  shared bits
  data/products.ts      placeholder catalogue
  lib/cart.tsx          client-side cart state (React context)
  styles/tokens.css     project tokens
  themes/               meh Astryx theme (source + built output)
docs/                   design specs & md docs; moodboard/ holds reference + our screenshots
```

## Astryx agent tooling

`AGENTS.md` contains the Astryx agent cheat sheet (from `npx astryx init`). Useful commands:

```bash
npx astryx component Button        # props & usage
npx astryx template --list         # page templates
npx astryx build "<page idea>"     # suggested template/blocks
npx astryx doctor --built .        # check setup & usage
```

All products, prices and images are placeholders.


## meh v2 design notes (Nov 2026)

The home page was rebuilt from a streetwear moodboard (`docs/moodboard/bluorng/`). It copies
**layout and patterns only**. Brand, names, copy and imagery are all placeholders, and the
"photos" are CSS gradient tiles with SVG garment silhouettes drawn in this repo.

**Theme.** `src/themes/meh.theme.ts` extends Astryx Neutral with `defineTheme`: a gray body
(`#efefef`), white surfaces, an ink-black accent (so `variant="primary"` buttons are black), quiet
secondary text, Inter Tight at a 13px base, and larger container and page radii. Build it with
`npm run theme:build`; this writes the `src/themes/meh.{css,js,d.ts}` files that are committed. The font
is loaded in `src/app/globals.css`. The art-direction tiles (`tile-1`…`tile-8`, `tile-hero`, …)
and the marquee animation live in `src/styles/tokens.css`.

| Moodboard pattern | meh implementation |
|---|---|
| Sticky white header: links, centred wordmark, icons | `SiteHeader` = Astryx `TopNav` (`centerContent` 3-column mode) + `IconButton`s + `Wordmark` |
| Hamburger menu | `MobileMenu` = Astryx `Drawer side="start"` + `TextInput` search + links |
| Announcement strip | `AnnouncementMarquee` (custom; stops under reduced motion) |
| Full-viewport editorial hero, underlined CTA | `EditorialHero` (custom CSS art) |
| 4/2-col grid with hairline gutters | `ProductGrid` = Astryx `Grid columns={{minWidth:165,max:4}} gap={1}` |
| Card: 3:4 image, save icon, hover arrows, dots, tiny name/price, `+` | `ProductTile` = `AspectRatio`, `ToggleButton`, `IconButton`, `Badge`, `Text`, `useToast` |
| White rounded panel + black pill "Discover more" | `Panel` (Astryx `Card`) + `SectionHeader` (`Button variant="primary"` pill) |
| Horizontal product carousel | `CollectionRail` = Astryx `Carousel hasSnap` |
| Full-bleed banner with pill dots | `CampaignBanner` (custom, manual navigation) |
| Stores panel with globe and cards | `SpacesPanel` = `Token`, `Card`, `Link` + CSS globe |
| SEO strip with popular searches | `SearchStrip` = `Panel`, `Text maxLines`, `Token href` |
| Footer columns | `SiteFooter` = `Grid`, `Link`, `Newsletter` (`TextInput`, `Banner`) + oversized wordmark |
| Cart | `CartDrawer` (Astryx `Drawer`, `List`, `EmptyState`) |
