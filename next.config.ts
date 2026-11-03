import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    // AVIF first, WebP fallback. Sources in src/assets/images are pre-sized
    // WebP (≤1600px long edge), so the optimizer only ever scales down.
    formats: ['image/avif', 'image/webp'],
    qualities: [75],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
