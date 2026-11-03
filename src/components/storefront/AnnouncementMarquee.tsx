'use client';

import {useState} from 'react';
import {PauseIcon, PlayIcon} from '@heroicons/react/20/solid';

const MESSAGES = [
  'Free shipping over $100 (placeholder)',
  'Drop 01 is live',
  'Easy 14-day returns',
  'New pop-up opening soon',
];

/**
 * Black announcement bar with a slow, looping marquee.
 * Astryx has no marquee, so this is a small project component. It only moves
 * under prefers-reduced-motion: no-preference, pauses on hover and focus, and
 * has a visible pause control (WCAG 2.2.2).
 */
export function AnnouncementMarquee() {
  const [isPaused, setPaused] = useState(false);
  const row = [...MESSAGES, ...MESSAGES];
  return (
    <div className="group/marquee flex items-center bg-ink text-paper" role="region" aria-label="Announcements">
      <p className="sr-only">{MESSAGES.join('. ')}</p>
      <div className="min-w-0 flex-1 overflow-hidden">
        <div
          aria-hidden
          className={`flex w-max gap-12 py-1.5 ps-12 text-[12px] font-medium tracking-[0.08em] uppercase motion-safe:animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] ${
            isPaused ? '[animation-play-state:paused]' : ''
          }`}>
          {row.map((m, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap">
              {m}
              <span className="opacity-50">✦</span>
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-pressed={isPaused}
        aria-label="Pause announcements"
        onClick={() => setPaused(p => !p)}
        className="grid size-6 shrink-0 cursor-pointer place-items-center rounded-full text-paper/80 hover:text-paper focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-paper motion-reduce:hidden me-1">
        {isPaused ? <PlayIcon aria-hidden className="size-3.5" /> : <PauseIcon aria-hidden className="size-3.5" />}
      </button>
    </div>
  );
}
