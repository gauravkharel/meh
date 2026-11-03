'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {Grid} from '@astryxdesign/core/Grid';
import {Token} from '@astryxdesign/core/Token';
import {ArrowRightIcon} from '@heroicons/react/20/solid';
import {ProductMedia} from './ProductMedia';

export function Hero() {
  return (
    <Grid columns={{minWidth: 320, max: 2}} gap={10} align="center">
      <VStack gap={6} hAlign="start">
        <Token label="Autumn drop · placeholder" color="blue" />
        <VStack gap={3}>
          <Heading level={1} type="display-2" textWrap="balance">
            Everyday goods, designed with intent.
          </Heading>
          <Text type="large" color="secondary" textWrap="balance">
            A design-system-driven storefront prototype. Every colour, radius and
            type style on this page comes from tokens, so a new design is a theme
            swap, not a rewrite.
          </Text>
        </VStack>
        <HStack gap={3} wrap="wrap">
          <Button
            label="Shop the collection"
            variant="primary"
            size="lg"
            href="#featured"
            endContent={<Icon icon={ArrowRightIcon} size="sm" color="inherit" />}
          />
          <Button label="Browse categories" variant="secondary" size="lg" href="#categories" />
        </HStack>
      </VStack>
      <Grid columns={2} gap={4}>
        <ProductMedia swatch="bg-product-1" label="Hero image one" ratio={1 / 2} />
        <VStack gap={4}>
          <ProductMedia swatch="bg-product-3" label="Hero image two" />
          <ProductMedia swatch="bg-product-2" label="Hero image three" />
        </VStack>
      </Grid>
    </Grid>
  );
}
