'use client';

import {Carousel} from '@astryxdesign/core/Carousel';
import {VStack} from '@astryxdesign/core/Layout';
import type {Product} from '@/data/products';
import {Panel} from './Panel';
import {ProductTile} from './ProductTile';
import {SectionHeader} from './SectionHeader';

/** Rounded white panel holding a horizontal product carousel (Astryx Carousel). */
export function CollectionRail({id, title, items}: {id: string; title: string; items: Product[]}) {
  return (
    <Panel id={id} label={title} padding={3}>
      <VStack gap={3}>
        <SectionHeader title={title} actionLabel="Discover more" actionHref={`#${id}`} />
        <Carousel aria-label={`${title} products`} gap={2} hasSnap hasEdgeFade={false}>
          {items.map(p => (
            <div key={p.id} className="w-[200px] sm:w-[260px]">
              <ProductTile product={p} variant="rail" />
            </div>
          ))}
        </Carousel>
      </VStack>
    </Panel>
  );
}
