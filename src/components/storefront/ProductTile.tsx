'use client';

import {useState} from 'react';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {ToggleButton} from '@astryxdesign/core/ToggleButton';
import {Icon} from '@astryxdesign/core/Icon';
import {useToast} from '@astryxdesign/core/Toast';
import {PlusIcon, ChevronLeftIcon, ChevronRightIcon, BookmarkIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon as BookmarkSolidIcon} from '@heroicons/react/24/solid';
import {formatPrice, type Product} from '@/data/products';
import {useCart} from '@/lib/cart';
import {GarmentGlyph} from './GarmentGlyph';
import {TILE, isDarkTone} from './tiles';

/**
 * Editorial product tile: tall 3:4 media, a two-shot gallery (arrows show on
 * hover or focus, and always on touch), save toggle, quiet name/price, and a
 * "+" quick add. `variant="rail"` rounds the media for carousels.
 */
export function ProductTile({product, variant = 'grid'}: {product: Product; variant?: 'grid' | 'rail'}) {
  const {add, setOpen} = useCart();
  const toast = useToast();
  const [shot, setShot] = useState(0);
  const [isSaved, setSaved] = useState(false);
  const shots = [product.tone, product.altTone];
  const tone = shots[shot];
  const rounded = variant === 'rail' ? 'rounded-[var(--radius-element)]' : 'rounded-[var(--radius-inner)]';

  return (
    <article className="group/tile flex min-w-0 flex-col bg-surface" aria-label={product.name}>
      <div className={`relative overflow-hidden ${rounded}`}>
        <AspectRatio ratio={3 / 4}>
          <div
            role="img"
            aria-label={`${product.name}, placeholder image ${shot + 1} of ${shots.length}`}
            className={`relative h-full w-full outline outline-1 -outline-offset-1 outline-black/10 transition-[filter,opacity] duration-500 dark:outline-white/10 ${rounded} ${TILE[tone]} ${
              product.isSoldOut ? 'opacity-60 grayscale' : ''
            }`}>
            <GarmentGlyph category={product.category} isDark={isDarkTone(tone)} />
          </div>
        </AspectRatio>

        <div className="pointer-events-none absolute start-2 top-2 flex gap-1">
          {product.isSoldOut ? <Badge label="Sold out" variant="neutral" /> : null}
          {!product.isSoldOut && product.tag ? <Badge label={product.tag} variant="neutral" /> : null}
        </div>

        <div className="absolute end-1.5 top-1.5 rounded-full bg-paper/85 backdrop-blur-sm">
          <ToggleButton
            label={`Save ${product.name}`}
            icon={<Icon icon={BookmarkIcon} />}
            pressedIcon={<Icon icon={BookmarkSolidIcon} />}
            isPressed={isSaved}
            onPressedChange={setSaved}
            isIconOnly
            size="sm"
          />
        </div>

        {/* Gallery arrows: shown on hover or focus, and always on touch screens. */}
        <div className="pointer-events-none absolute inset-x-1.5 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity duration-150 group-hover/tile:opacity-100 group-focus-within/tile:opacity-100 pointer-coarse:opacity-100">
          <IconButton
            label={`Previous image of ${product.name}`}
            icon={<Icon icon={ChevronLeftIcon} />}
            size="sm"
            variant="secondary"
            className="pointer-events-auto rounded-full"
            onClick={() => setShot(s => (s + shots.length - 1) % shots.length)}
          />
          <IconButton
            label={`Next image of ${product.name}`}
            icon={<Icon icon={ChevronRightIcon} />}
            size="sm"
            variant="secondary"
            className="pointer-events-auto rounded-full"
            onClick={() => setShot(s => (s + 1) % shots.length)}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1" aria-hidden>
          {shots.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-[width,background-color] duration-300 ${i === shot ? 'w-4' : 'w-1'} ${
                isDarkTone(tone) ? (i === shot ? 'bg-paper/90' : 'bg-paper/40') : i === shot ? 'bg-ink/80' : 'bg-ink/45'
              }`}
            />
          ))}
        </div>
      </div>

      <HStack hAlign="between" vAlign="start" gap={2} className="px-2 pt-2 pb-3">
        <VStack gap={0.5} className="min-w-0 flex-1">
          <Text type="supporting" color="primary" weight="medium" className="break-words [overflow-wrap:anywhere]">
            {product.name}
          </Text>
          <Text type="supporting" className="tabular-nums">
            {formatPrice(product.price)}
          </Text>
        </VStack>
        <IconButton
          label={product.isSoldOut ? `${product.name} is sold out` : `Add ${product.name} to cart`}
          icon={<Icon icon={PlusIcon} />}
          size="sm"
          variant="ghost"
          isDisabled={product.isSoldOut}
          className="shrink-0"
          onClick={() => {
            add(product);
            toast({
              body: `Added ${product.name} to your cart`,
              uniqueID: `add-${product.id}`,
              endContent: (
                <Button
                  label="View cart"
                  size="sm"
                  variant="secondary"
                  onClick={() => setOpen(true)}
                />
              ),
            });
          }}
        />
      </HStack>
    </article>
  );
}
