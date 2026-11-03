'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {Icon} from '@astryxdesign/core/Icon';
import {useToast} from '@astryxdesign/core/Toast';
import {PlusIcon} from '@heroicons/react/20/solid';
import {formatPrice, type Product} from '@/data/products';
import {useCart} from '@/lib/cart';
import {ProductMedia} from './ProductMedia';

const TAG_VARIANT = {New: 'blue', Bestseller: 'purple', Sale: 'orange'} as const;

export function ProductCard({product}: {product: Product}) {
  const {add} = useCart();
  const toast = useToast();

  return (
    <Card padding={3}>
      <VStack gap={3}>
        <ProductMedia swatch={product.swatch} label={product.name} />
        <VStack gap={1}>
          <HStack gap={2} vAlign="center" hAlign="between">
            <Text type="supporting">{product.category}</Text>
            {product.tag ? (
              <Badge label={product.tag} variant={TAG_VARIANT[product.tag]} />
            ) : null}
          </HStack>
          <Heading level={3}>{product.name}</Heading>
          <Text type="body" color="secondary" maxLines={2}>
            {product.description}
          </Text>
        </VStack>
        <HStack gap={2} vAlign="center" hAlign="between">
          <Text type="large" weight="bold">
            {formatPrice(product.price)}
          </Text>
          <Button
            label={`Add ${product.name} to cart`}
            variant="primary"
            size="sm"
            icon={<Icon icon={PlusIcon} />}
            onClick={() => {
              add(product);
              toast({body: `${product.name} added to cart`, uniqueID: `add-${product.id}`});
            }}>
            Add
          </Button>
        </HStack>
      </VStack>
    </Card>
  );
}
