'use client';

import {useState} from 'react';
import NextLink from 'next/link';
import {Drawer, DrawerHeader} from '@astryxdesign/core/Drawer';
import {VStack} from '@astryxdesign/core/Layout';
import {Divider} from '@astryxdesign/core/Divider';
import {Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {COLLECTIONS, NAV_LINKS, PRODUCTS, RAIL_ITEMS, formatPrice} from '@/data/products';
import {formatItems} from '@/lib/plural';

const CATALOG = [
  ...PRODUCTS.map(p => ({...p, href: '#new-in'})),
  ...RAIL_ITEMS.map(p => ({...p, href: '#bags'})),
];

/** Start-side Astryx Drawer: product search, big nav links, collection list. */
export function MobileMenu({isOpen, onOpenChange}: {isOpen: boolean; onOpenChange: (o: boolean) => void}) {
  const [query, setQuery] = useState('');
  const close = () => onOpenChange(false);
  const q = query.trim().toLowerCase();
  const results = q ? CATALOG.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(q)) : [];
  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} label="Menu" side="start" width={380}>
      <VStack gap={5}>
        <DrawerHeader title="Menu" onOpenChange={onOpenChange} />
        <TextInput
          label="Search the store"
          isLabelHidden
          placeholder="Try “hoodie” or “bag”"
          value={query}
          onChange={setQuery}
          width="100%"
          type="search"
          enterKeyHint="search"
          hasClear
          hasAutoFocus
        />
        {q ? (
          <VStack gap={2}>
            <p role="status" className="text-[13px] text-secondary">
              {results.length ? `${formatItems(results.length)} for “${query.trim()}”` : `No results for “${query.trim()}”`}
            </p>
            {results.length ? (
              <ul className="flex flex-col">
                {results.slice(0, 6).map(p => (
                  <li key={p.id}>
                    <NextLink
                      href={p.href}
                      onClick={close}
                      className="flex min-h-10 items-center justify-between gap-3 rounded-[var(--radius-element)] px-1 text-[15px] text-primary hover:bg-[var(--color-background-muted)]">
                      <span className="min-w-0 break-words">{p.name}</span>
                      <span className="shrink-0 text-[13px] text-secondary tabular-nums">
                        {p.isSoldOut ? 'Sold out' : formatPrice(p.price)}
                      </span>
                    </NextLink>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <Button label="Clear search" variant="secondary" size="sm" onClick={() => setQuery('')} />
              </div>
            )}
          </VStack>
        ) : null}
        <nav aria-label="Menu">
          <VStack gap={1}>
            {NAV_LINKS.map(l => (
              <NextLink
                key={l.href}
                href={l.href}
                onClick={close}
                className="rounded-[var(--radius-element)] px-1 py-1.5 text-[28px] leading-tight font-bold tracking-[-0.03em] text-primary hover:opacity-60">
                {l.label}
              </NextLink>
            ))}
          </VStack>
        </nav>
        <Divider />
        <VStack gap={2}>
          <Text type="label">Collections</Text>
          {COLLECTIONS.map(c => (
            <NextLink key={c.id} href="#collections" onClick={close} className="flex min-h-8 items-center px-1 text-[15px] text-secondary hover:text-primary">
              {c.name}
            </NextLink>
          ))}
        </VStack>
      </VStack>
    </Drawer>
  );
}
