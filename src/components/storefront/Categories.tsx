'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {CATEGORIES} from '@/data/products';
import {ProductMedia} from './ProductMedia';

export function Categories() {
  return (
    <VStack gap={6} id="categories">
      <Heading level={2}>Shop by category</Heading>
      <Grid columns={{minWidth: 200}} gap={4}>
        {CATEGORIES.map(c => (
          <Card key={c.name} padding={3} variant="muted">
            <VStack gap={3}>
              <ProductMedia swatch={c.swatch} label={c.name} ratio={16 / 10} />
              <VStack gap={0.5}>
                <Link href="#featured" color="primary">
                  <Text type="large" weight="semibold">
                    {c.name}
                  </Text>
                </Link>
                <Text type="supporting">{c.count} products</Text>
              </VStack>
            </VStack>
          </Card>
        ))}
      </Grid>
    </VStack>
  );
}
