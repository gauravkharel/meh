'use client';

/**
 * Placeholder "product photo": a flat garment silhouette on a studio tile.
 * Original line art, drawn here, so no third-party imagery is needed.
 */
const PATHS: Record<string, string> = {
  Tees: 'M30 12 L43 6 Q50 14 57 6 L70 12 L86 28 L76 37 L70 31 L70 92 L30 92 L30 31 L24 37 L14 28 Z',
  Hoodies:
    'M36 14 Q50 2 64 14 L72 16 L90 50 L80 55 L72 38 L72 92 L28 92 L28 38 L20 55 L10 50 L28 16 Z M42 16 Q50 26 58 16',
  Bottoms: 'M30 8 L70 8 L74 92 L56 92 L50 34 L44 92 L26 92 Z',
  Headwear: 'M24 62 Q24 30 50 30 Q76 30 76 62 Z M18 62 L88 62 Q86 70 76 70 L18 70 Z',
  Bags: 'M22 36 L78 36 L82 88 L18 88 Z M38 36 Q38 16 50 16 Q62 16 62 36',
  Accessories: 'M50 20 A30 30 0 1 1 49.9 20 Z',
};

export function GarmentGlyph({category, isDark}: {category: string; isDark: boolean}) {
  const d = PATHS[category] ?? PATHS.Tees;
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className="absolute inset-[18%] h-[64%] w-[64%] drop-shadow-[0_18px_24px_rgb(0_0_0/0.25)]">
      <path
        d={d}
        fill={isDark ? 'rgb(245 245 245 / 0.9)' : 'rgb(17 17 17 / 0.88)'}
        stroke={isDark ? 'rgb(245 245 245 / 0.9)' : 'rgb(17 17 17 / 0.88)'}
        strokeWidth={category === 'Bags' ? 3 : 0}
        strokeLinejoin="round"
        fillRule="evenodd"
      />
    </svg>
  );
}
