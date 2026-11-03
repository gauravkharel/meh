// meh theme: monochrome streetwear mood, derived from Astryx Neutral.
// Build with: npm run theme:build (font is loaded in src/app/globals.css)
import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';

const grotesk =
  '"Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, sans-serif';

export const mehTheme = defineTheme({
  name: 'meh',
  extends: neutralTheme,
  typography: {
    // 14px base, tight 1.15 steps: small labels and badges stay at 12px or more.
    scale: {base: 14, ratio: 1.15},
    body: {
      family: 'Inter Tight',
      fallbacks: grotesk,
    },
    heading: {
      family: 'Inter Tight',
      fallbacks: grotesk,
      weights: {1: 'bold', 2: 'bold', 3: 'semibold', 4: 'semibold'},
    },
  },
  tokens: {
    // Gray page, white rounded panels, ink-black accent.
    '--color-background-body': ['#efefef', '#0a0a0a'],
    '--color-background-surface': ['#ffffff', '#151515'],
    '--color-background-card': ['#ffffff', '#151515'],
    '--color-background-muted': ['#f5f5f5', '#1d1d1d'],
    '--color-accent': ['#0a0a0a', '#f5f5f5'],
    '--color-accent-muted': ['#e6e6e6', '#2a2a2a'],
    '--color-on-accent': ['#ffffff', '#0a0a0a'],
    '--color-text-accent': ['#0a0a0a', '#f5f5f5'],
    '--color-icon-accent': ['#0a0a0a', '#f5f5f5'],
    '--color-text-primary': ['#0a0a0a', '#f5f5f5'],
    '--color-text-secondary': ['#6b6b6b', '#a3a3a3'],
    '--color-border': ['#e4e4e4', '#2a2a2a'],
    // Large, soft panel corners; tight inner corners.
    '--radius-inner': '0.25rem',
    '--radius-element': '0.5rem',
    '--radius-container': '1.25rem',
    '--radius-page': '1.5rem',
  },
});
