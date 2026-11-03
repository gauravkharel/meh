'use client';

import NextLink from 'next/link';

/** Heights (rem) and tones for the placeholder "campaign lineup" figures. */
const FIGURES = [
  {h: 'h-[58%]', shade: 'from-neutral-500/50'},
  {h: 'h-[66%]', shade: 'from-neutral-400/60'},
  {h: 'h-[72%]', shade: 'from-neutral-300/70'},
  {h: 'h-[64%]', shade: 'from-neutral-400/60'},
  {h: 'h-[56%]', shade: 'from-neutral-500/50'},
];

/**
 * Full-bleed editorial hero: a dark, smoky campaign frame with a lineup of
 * abstract figures and one quiet underlined CTA at the bottom. Pure CSS art,
 * a stand-in for campaign photography.
 */
export function EditorialHero() {
  return (
    <section
      aria-label="Season campaign"
      className="relative isolate flex min-h-[max(520px,calc(100svh-96px))] flex-col justify-between overflow-hidden rounded-[var(--radius-page)] tile-hero text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-x-[6%] bottom-0 flex h-full items-end justify-center gap-[2.5%]">
        {FIGURES.map((f, i) => (
          <div key={i} className={`relative w-[14%] max-w-[180px] ${f.h} ${i % 2 ? 'max-sm:hidden' : ''}`}>
            <div className={`mx-auto aspect-square w-[34%] rounded-full bg-gradient-to-b ${f.shade} to-transparent`} />
            <div className={`mt-[6%] h-full rounded-t-[40%] bg-gradient-to-b ${f.shade} to-transparent`} />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 pt-[clamp(48px,11svh,120px)] text-center">
        <span className="relative z-10 text-[12px] font-medium tracking-[0.2em] text-paper uppercase opacity-70">Season 01 · Placeholder campaign</span>
        <h1 className="relative z-10 max-w-[14ch] text-paper text-[clamp(44px,8vw,120px)] leading-[0.9] text-balance font-extrabold tracking-[-0.05em]">
          Uniform for the in‑between
        </h1>
      </div>

      <div className="relative z-10 flex justify-center px-6 pt-10 pb-8">
        <NextLink
          href="#new-in"
          className="inline-flex min-h-8 items-center text-[14px] font-medium text-paper underline decoration-1 underline-offset-[6px] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper">
          Shop the drop
        </NextLink>
      </div>
    </section>
  );
}
