'use client';

import {Drawer, DrawerHeader} from '@astryxdesign/core/Drawer';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {List, ListItem} from '@astryxdesign/core/List';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Icon} from '@astryxdesign/core/Icon';
import {Divider} from '@astryxdesign/core/Divider';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {MinusIcon, PlusIcon, TrashIcon, ShoppingBagIcon} from '@heroicons/react/20/solid';
import {formatPrice} from '@/data/products';
import {useCart} from '@/lib/cart';

export function CartDrawer() {
  const {lines, count, subtotal, isOpen, setOpen, add, decrement, remove, clear} = useCart();

  return (
    <Drawer isOpen={isOpen} onOpenChange={setOpen} label="Shopping cart" width={420}>
      <VStack gap={4}>
        <DrawerHeader
          title="Your cart"
          subtitle={`${count} ${count === 1 ? 'item' : 'items'}`}
          onOpenChange={setOpen}
        />
        {lines.length === 0 ? (
          <EmptyState
            icon={<Icon icon={ShoppingBagIcon} />}
            title="Your cart is empty"
            description="Add something from New in."
          />
        ) : (
          <>
            <List hasDividers>
              {lines.map(({product, qty}) => (
                <ListItem
                  key={product.id}
                  label={product.name}
                  description={`${formatPrice(product.price)} × ${qty}`}
                  endContent={
                    <HStack gap={1} vAlign="center">
                      <IconButton label={`Remove one ${product.name}`} size="sm" variant="ghost" icon={<Icon icon={MinusIcon} />} onClick={() => decrement(product.id)} />
                      <Text type="label">{qty}</Text>
                      <IconButton label={`Add one ${product.name}`} size="sm" variant="ghost" icon={<Icon icon={PlusIcon} />} onClick={() => add(product)} />
                      <IconButton label={`Remove ${product.name} from cart`} size="sm" variant="ghost" icon={<Icon icon={TrashIcon} />} onClick={() => remove(product.id)} />
                    </HStack>
                  }
                />
              ))}
            </List>
            <Divider />
            <HStack hAlign="between" vAlign="center">
              <Text type="large">Subtotal</Text>
              <Text type="large" weight="bold">
                {formatPrice(subtotal)}
              </Text>
            </HStack>
            <VStack gap={2}>
              <Button label="Checkout (demo)" variant="primary" width="100%" isDisabled tooltip="Checkout is not wired up yet" />
              <Button label="Clear cart" variant="ghost" width="100%" onClick={clear} />
            </VStack>
          </>
        )}
      </VStack>
    </Drawer>
  );
}
