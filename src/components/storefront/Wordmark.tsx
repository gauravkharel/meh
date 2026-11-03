'use client';

import NextLink from 'next/link';

/** Placeholder brand mark: lowercase, heavy, tightly tracked. */
export function Wordmark({size = 'md', href = '#top'}: {size?: 'md' | 'xl'; href?: string}) {
  return (
    <NextLink
      href={href}
      aria-label="meh, home"
      className={
        size === 'xl'
          ? 'block w-fit text-[clamp(96px,22vw,320px)] leading-[0.8] font-extrabold tracking-[-0.07em] text-primary'
          : 'inline-flex min-h-6 items-center text-[22px] leading-none font-extrabold tracking-[-0.06em] text-primary'
      }>
      meh
    </NextLink>
  );
}
