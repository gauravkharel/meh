'use client';

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';

const SLIDES = [
  {id: 'b1', eyebrow: 'Headwear', title: 'Caps, washed twice', tile: 'tile-campaign', dark: false},
  {id: 'b2', eyebrow: 'Outerwear', title: 'Layers for late nights', tile: 'tile-hero', dark: true},
  {id: 'b3', eyebrow: 'Carry', title: 'Bags that go everywhere', tile: 'tile-spaces', dark: false},
];

/**
 * Full-width collection banner with pill-shaped slide indicators (the active
 * dot stretches into a pill). Manual navigation only, no auto-advance.
 */
export function CampaignBanner() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  return (
    <section
      aria-roledescription="carousel"
      aria-label="Collection banners"
      className={`relative isolate flex min-h-[max(380px,min(70dvh,640px))] flex-col justify-end overflow-hidden rounded-[var(--radius-page)] transition-colors duration-500 ${slide.tile} ${
        slide.dark ? 'text-paper' : 'text-ink'
      }`}>
      <div
        aria-hidden
        className="pointer-events-none absolute end-[-8%] bottom-[-30%] text-[clamp(200px,40vw,560px)] leading-none font-extrabold tracking-[-0.08em] opacity-[0.08] select-none">
        meh
      </div>
      <div aria-live="polite" className="relative px-6 pt-16 pb-16 sm:px-10">
      <div
        key={slide.id}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${SLIDES.length}`}
        className="flex max-w-[22ch] flex-col items-start gap-4">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase opacity-70">{slide.eyebrow}</span>
        <h2 className={`text-[clamp(32px,5vw,72px)] ${slide.dark ? 'text-paper' : 'text-ink'} leading-[0.95] font-extrabold tracking-[-0.04em]`}>{slide.title}</h2>
        <Button
          label="Discover more"
          variant={slide.dark ? 'secondary' : 'primary'}
          size="sm"
          href="#collections"
          className="rounded-full px-4"
        />
      </div>
      </div>
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Show banner ${i + 1}: ${s.title}`}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
            className="group/dot grid h-6 min-w-6 cursor-pointer place-items-center rounded-full px-1 focus-visible:outline-2 focus-visible:-outline-offset-2">
            <span
              aria-hidden
              className={`block h-1.5 rounded-full transition-[width,opacity] duration-300 ${
                i === index ? 'w-6' : 'w-1.5 opacity-40 group-hover/dot:opacity-70'
              } ${slide.dark ? 'bg-paper' : 'bg-ink'}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
