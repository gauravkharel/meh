'use client';

import {useState} from 'react';
import {Drawer, DrawerHeader} from '@astryxdesign/core/Drawer';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {List, ListItem} from '@astryxdesign/core/List';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Icon} from '@astryxdesign/core/Icon';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {MinusIcon, PlusIcon, TrashIcon, ShoppingBagIcon} from '@heroicons/react/24/outline';
import {formatPrice} from '@/data/products';
import {useCart, type CartLine} from '@/lib/cart';
import {formatItems} from '@/lib/plural';
import {GarmentGlyph} from './GarmentGlyph';
import {TILE, isDarkTone} from './tiles';

/**
 * Cart drawer. Removing a line or clearing the cart happens at once and offers
 * Undo inline, instead of asking for confirmation first.
 */
export function CartDrawer() {
  const {lines, count, subtotal, isOpen, setOpen, add, decrement, remove, clear, restore} = useCart();
  const [isCheckoutNoteShown, setCheckoutNoteShown] = useState(false);

  // Undo lives inside the drawer: the drawer is modal, so a toast behind it
  // would be inert and unreachable.
  const [undo, setUndo] = useState<{message: string; snapshot: CartLine[]} | null>(null);
  const offerUndo = (message: string, snapshot: CartLine[]) => setUndo({message, snapshot});
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setUndo(null);
      setCheckoutNoteShown(false);
    }
  };

  const removeLine = (line: CartLine) => {
    const snapshot = lines;
    remove(line.product.id);
    offerUndo(`Removed ${line.product.name}.`, snapshot);
  };

  return (
    <Drawer isOpen={isOpen} onOpenChange={handleOpenChange} label="Shopping cart" width={420}>
      <VStack gap={4} className="min-h-full">
        <DrawerHeader title="Your cart" subtitle={formatItems(count)} onOpenChange={handleOpenChange} />
        <div role="status">
          {undo ? (
            <HStack gap={2} hAlign="between" vAlign="center" className="rounded-[var(--radius-element)] border border-[var(--color-border)] py-1 ps-3 pe-1">
              <Text type="supporting" color="primary" className="min-w-0 break-words">
                {undo.message}
              </Text>
              <Button
                label="Undo"
                size="sm"
                variant="secondary"
                onClick={() => {
                  restore(undo.snapshot);
                  setUndo(null);
                }}
              />
            </HStack>
          ) : null}
        </div>
        {lines.length === 0 ? (
          <EmptyState
            icon={<Icon icon={ShoppingBagIcon} />}
            title="Your cart is empty"
            description="New pieces drop every season. Start with what just landed."
            actions={<Button label="Shop new in" variant="primary" href="#new-in" onClick={() => handleOpenChange(false)} />}
          />
        ) : (
          <>
            <List hasDividers>
              {lines.map(line => {
                const {product, qty} = line;
                return (
                  <ListItem
                    key={product.id}
                    align="start"
                    startContent={
                      <span
                        aria-hidden
                        className={`relative block h-14 w-11 shrink-0 overflow-hidden rounded-[var(--radius-inner)] outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10 ${TILE[product.tone]}`}>
                        <GarmentGlyph category={product.category} isDark={isDarkTone(product.tone)} />
                      </span>
                    }
                    label={
                      <Text type="body" weight="medium" className="break-words [overflow-wrap:anywhere]">
                        {product.name}
                      </Text>
                    }
                    description={
                      <Text type="supporting" className="tabular-nums">
                        {formatPrice(product.price)} × {qty}
                      </Text>
                    }
                    endContent={
                      <HStack gap={0.5} vAlign="center">
                        <IconButton
                          label={qty === 1 ? `Remove ${product.name}` : `Remove one ${product.name}`}
                          size="sm"
                          variant="ghost"
                          icon={<Icon icon={MinusIcon} />}
                          onClick={() => (qty === 1 ? removeLine(line) : decrement(product.id))}
                        />
                        <Text type="label" className="min-w-[2ch] text-center tabular-nums">
                          {qty}
                        </Text>
                        <IconButton label={`Add one ${product.name}`} size="sm" variant="ghost" icon={<Icon icon={PlusIcon} />} onClick={() => add(product)} />
                        <IconButton
                          label={`Remove ${product.name} from cart`}
                          size="sm"
                          variant="ghost"
                          icon={<Icon icon={TrashIcon} />}
                          onClick={() => removeLine(line)}
                        />
                      </HStack>
                    }
                  />
                );
              })}
            </List>
            {/* Summary stays in view while a long cart scrolls. */}
            <div className="sticky -bottom-4 mt-auto -mx-4 -mb-4 border-t border-[var(--color-border)] bg-surface px-4 pt-4 pb-4">
              <VStack gap={3}>
                <HStack hAlign="between" vAlign="center">
                  <Text type="large">Subtotal</Text>
                  <Text type="large" weight="bold" className="tabular-nums">
                    {formatPrice(subtotal)}
                  </Text>
                </HStack>
                <VStack gap={2}>
                  <Button label="Check out" variant="primary" width="100%" onClick={() => setCheckoutNoteShown(true)} />
                  <p role="status" className="min-h-5 text-center text-[13px] text-secondary">
                    {isCheckoutNoteShown ? 'Checkout isn’t connected in this demo. Your cart stays here.' : ''}
                  </p>
                  <Button
                    label="Clear cart"
                    variant="ghost"
                    width="100%"
                    onClick={() => {
                      const snapshot = lines;
                      clear();
                      offerUndo('Cart cleared.', snapshot);
                    }}
                  />
                </VStack>
              </VStack>
            </div>
          </>
        )}
      </VStack>
    </Drawer>
  );
}
