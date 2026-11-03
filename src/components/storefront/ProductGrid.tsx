'use client';

import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/Layout';
import type {Product} from '@/data/products';
import {ProductTile} from './ProductTile';
import {SectionHeader} from './SectionHeader';

/** Edge-to-edge product grid with hairline gutters: 2 columns on phones, 4 on desktop. */
export function ProductGrid({
  id,
  title,
  products,
  action = {label: 'Browse collections', href: '#collections'},
}: {
  id: string;
  title: string;
  products: Product[];
  /** Pill action. It points somewhere else on the page, never back at this section. */
  action?: {label: string; href: string} | null;
}) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-28">
      <VStack gap={2}>
        <div className="pt-3">
          <SectionHeader title={title} actionLabel={action?.label} actionHref={action?.href} />
        </div>
        <Grid columns={{minWidth: 165, max: 4}} gap={1}>
          {products.map(p => (
            <ProductTile key={p.id} product={p} />
          ))}
        </Grid>
      </VStack>
    </section>
  );
}
