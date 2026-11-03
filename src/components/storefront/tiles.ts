import type {Tone} from '@/data/products';

/** Static class map so Tailwind can see every tile utility at build time. */
export const TILE: Record<Tone, string> = {
  1: 'tile-1', 2: 'tile-2', 3: 'tile-3', 4: 'tile-4',
  5: 'tile-5', 6: 'tile-6', 7: 'tile-7', 8: 'tile-8',
};

/** Tones dark enough to need light foreground art. */
export const isDarkTone = (tone: Tone) => tone === 2 || tone === 6 || tone === 8;
