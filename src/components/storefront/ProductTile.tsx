'use client';

import {useState} from 'react';
import Image from 'next/image';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {ToggleButton} from '@astryxdesign/core/ToggleButton';
import {Icon} from '@astryxdesign/core/Icon';
import {useToast} from '@astryxdesign/core/Toast';
import {PlusIcon, BookmarkIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon as BookmarkSolidIcon} from '@heroicons/react/24/solid';
import {formatPrice, type Product} from '@/data/products';
import {useCart} from '@/lib/cart';

/** Grid: 2-up on phones, 4-up once four 165px columns fit. Rail: fixed card widths. */
const SIZES = {
  grid: '(min-width: 680px) 25vw, 50vw',
  rail: '(min-width: 640px) 260px, 200px',
} as const;

/**
 * Editorial product tile: 3:4 photo (next/image, fill + object-cover, blur
 * placeholder, lazy), save toggle, quiet name/price, and a "+" quick add.
 * `variant="rail"` rounds the media for carousels.
 */
export function ProductTile({product, variant = 'grid'}: {product: Product; variant?: 'grid' | 'rail'}) {
  const {add, setOpen} = useCart();
  const toast = useToast();
  const [isSaved, setSaved] = useState(false);
  const {image} = product;
  const rounded = variant === 'rail' ? 'rounded-[var(--radius-element)]' : 'rounded-[var(--radius-inner)]';

  return (
    <article className="group/tile flex min-w-0 flex-col bg-surface" aria-label={product.name}>
      <div className={`relative overflow-hidden bg-muted ${rounded}`}>
        <AspectRatio ratio={3 / 4}>
          <div className="relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={SIZES[variant]}
            placeholder="blur"
            className={`object-cover transition-[filter,opacity,scale] duration-500 motion-safe:group-hover/tile:scale-[1.03] ${
              product.isSoldOut ? 'opacity-60 grayscale' : ''
            }`}
            style={{objectPosition: image.position ?? '50% 50%'}}
          />
          {/* Hairline edge so light studio backdrops don't melt into the page. */}
          <span aria-hidden className={`pointer-events-none absolute inset-0 outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10 ${rounded}`} />
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
