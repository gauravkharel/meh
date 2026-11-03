'use client';

import NextLink from 'next/link';
import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/Layout';
import {COLLECTIONS} from '@/data/products';
import {GarmentGlyph} from './GarmentGlyph';
import {Panel} from './Panel';
import {SectionHeader} from './SectionHeader';
import {TILE, isDarkTone} from './tiles';

/** Shop-by-collection tiles: square studio shots with a label pill. */
export function CollectionsGrid() {
  return (
    <Panel id="collections" label="Collections" padding={3}>
      <VStack gap={3}>
        <SectionHeader title="Collections" actionLabel="Find a space" actionHref="#spaces" />
        <Grid columns={{minWidth: 150, max: 6}} gap={2}>
          {COLLECTIONS.map(c => (
            <NextLink
              key={c.id}
              href="#new-in"
              className={`group/col relative block aspect-square overflow-hidden rounded-[var(--radius-container)] ${TILE[c.tone]} focus-visible:outline-2 focus-visible:outline-offset-2`}>
              <span className="absolute inset-0 transition-[scale] duration-500 motion-safe:group-hover/col:scale-105">
                <GarmentGlyph category={c.name} isDark={isDarkTone(c.tone)} />
              </span>
              <span className="absolute start-2 bottom-2 rounded-full bg-paper px-3 py-1 text-[12px] font-medium text-ink">
                {c.name}
              </span>
            </NextLink>
          ))}
        </Grid>
      </VStack>
    </Panel>
  );
}
