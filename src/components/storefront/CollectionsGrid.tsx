'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/Layout';
import {COLLECTIONS} from '@/data/products';
import {Panel} from './Panel';
import {SectionHeader} from './SectionHeader';

/** Shop-by-collection tiles: square photo crops with a label pill (the link text names the tile). */
export function CollectionsGrid() {
  return (
    <Panel id="collections" label="Collections" padding={3}>
      <VStack gap={3}>
        <SectionHeader title="Collections" actionLabel="Find a space" actionHref="#spaces" />
        <Grid columns={{minWidth: 150, max: 6}} gap={2}>
          {COLLECTIONS.map(c => (
            <NextLink
              key={c.id}
              href="#drop"
              className="group/col relative block aspect-square overflow-hidden rounded-[var(--radius-container)] bg-muted focus-visible:outline-2 focus-visible:outline-offset-2">
              <Image
                src={c.image.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                placeholder="blur"
                className="object-cover transition-[scale] duration-500 motion-safe:group-hover/col:scale-105"
                style={{objectPosition: c.image.position ?? '50% 50%'}}
              />
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
