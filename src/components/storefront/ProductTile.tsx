'use client';

import {useState} from 'react';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {IconButton} from '@astryxdesign/core/IconButton';
import {ToggleButton} from '@astryxdesign/core/ToggleButton';
import {Icon} from '@astryxdesign/core/Icon';
import {useToast} from '@astryxdesign/core/Toast';
import {PlusIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid';
import {BookmarkIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon as BookmarkSolidIcon} from '@heroicons/react/24/solid';
import {formatPrice, type Product} from '@/data/products';
import {useCart} from '@/lib/cart';
import {GarmentGlyph} from './GarmentGlyph';
import {TILE, isDarkTone} from './tiles';

/**
 * Editorial product tile: tall 3:4 media, a two-shot gallery (hover or the
 * arrows reveal the second shot), save toggle, quiet name/price, and a "+"
 * quick add. `variant="rail"` rounds the media for carousels.
 */
export function ProductTile({product, variant = 'grid'}: {product: Product; variant?: 'grid' | 'rail'}) {
  const {add} = useCart();
  const toast = useToast();
  const [shot, setShot] = useState(0);
  const [isSaved, setSaved] = useState(false);
  const shots = [product.tone, product.altTone];
  const tone = shots[shot];
  const rounded = variant === 'rail' ? 'rounded-[var(--radius-container)]' : 'rounded-[var(--radius-inner)]';

  return (
    <article className="group/tile flex flex-col bg-surface" aria-label={product.name}>
      <div className={`relative overflow-hidden ${rounded}`}>
        <AspectRatio ratio={3 / 4}>
          <div
            className={`relative h-full w-full transition-[filter,opacity] duration-500 ${TILE[tone]} ${
              product.isSoldOut ? 'opacity-60 grayscale' : ''
            }`}>
            <GarmentGlyph category={product.category} isDark={isDarkTone(tone)} />
          </div>
        </AspectRatio>

        <div className="absolute top-2 left-2 flex gap-1">
          {product.isSoldOut ? <Badge label="Sold out" variant="neutral" /> : null}
          {!product.isSoldOut && product.tag ? <Badge label={product.tag} variant="neutral" /> : null}
        </div>

        <div className="absolute top-1.5 right-1.5 rounded-full bg-paper/85 backdrop-blur-sm">
          <ToggleButton
            label={isSaved ? `Remove ${product.name} from saved` : `Save ${product.name}`}
            icon={<Icon icon={BookmarkIcon} />}
            pressedIcon={<Icon icon={BookmarkSolidIcon} />}
            isPressed={isSaved}
            onPressedChange={setSaved}
            isIconOnly
            size="sm"
          />
        </div>

        {/* Gallery arrows appear on hover / focus, like a mini carousel. */}
        <div className="pointer-events-none absolute inset-x-1.5 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity duration-200 group-hover/tile:opacity-100 group-focus-within/tile:opacity-100">
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

        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1" aria-hidden>
          {shots.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === shot ? 'w-4 bg-ink/80' : 'w-1 bg-ink/30'
              } ${isDarkTone(tone) ? (i === shot ? 'bg-paper/90' : 'bg-paper/40') : ''}`}
            />
          ))}
        </div>
      </div>

      <HStack hAlign="between" vAlign="start" gap={2} className="px-2 pt-2 pb-3">
        <VStack gap={0.5}>
          <Text type="supporting" color="primary" weight="medium" size="xsm">
            {product.name}
          </Text>
          <Text type="supporting" size="xsm">
            {product.isSoldOut ? 'Sold out' : formatPrice(product.price)}
          </Text>
        </VStack>
        <IconButton
          label={`Add ${product.name} to cart`}
          icon={<Icon icon={PlusIcon} />}
          size="sm"
          variant="ghost"
          isDisabled={product.isSoldOut}
          onClick={() => {
            add(product);
            toast({body: `${product.name} added to cart`, uniqueID: `add-${product.id}`});
          }}
        />
      </HStack>
    </article>
  );
}
