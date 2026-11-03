'use client';

const MESSAGES = [
  'Free shipping over $100 (placeholder)',
  'Drop 01 is live',
  'Easy 14-day returns',
  'New pop-up opening soon',
];

/**
 * Black announcement bar with a slow, looping marquee.
 * Astryx has no marquee, so this is a small project component. Motion stops
 * under prefers-reduced-motion (see tokens.css).
 */
export function AnnouncementMarquee() {
  const row = [...MESSAGES, ...MESSAGES];
  return (
    <div className="overflow-hidden bg-ink text-paper" role="region" aria-label="Announcements">
      <p className="sr-only">{MESSAGES.join('. ')}</p>
      <div aria-hidden className="flex w-max animate-marquee gap-12 py-1.5 pl-12 text-[11px] font-medium tracking-[0.08em] uppercase">
        {row.map((m, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            {m}
            <span className="opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
