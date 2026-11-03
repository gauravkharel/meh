'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading, Text} from '@astryxdesign/core/Text';
import {PRODUCTS} from '@/data/products';
import {ProductCard} from './ProductCard';

export function FeaturedProducts() {
  return (
    <VStack gap={6} id="featured">
      <VStack gap={1}>
        <Heading level={2}>Featured products</Heading>
        <Text type="body" color="secondary">
          Placeholder catalogue: names, prices and images are stand-ins.
        </Text>
      </VStack>
      <Grid columns={{minWidth: 240}} gap={6}>
        {PRODUCTS.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </VStack>
  );
}
