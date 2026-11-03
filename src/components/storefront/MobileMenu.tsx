'use client';

import {useState} from 'react';
import NextLink from 'next/link';
import {Drawer, DrawerHeader} from '@astryxdesign/core/Drawer';
import {VStack} from '@astryxdesign/core/Layout';
import {Divider} from '@astryxdesign/core/Divider';
import {Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {COLLECTIONS, NAV_LINKS} from '@/data/products';

/** Start-side Astryx Drawer: search field, big nav links, collection list. */
export function MobileMenu({isOpen, onOpenChange}: {isOpen: boolean; onOpenChange: (o: boolean) => void}) {
  const [query, setQuery] = useState('');
  const close = () => onOpenChange(false);
  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} label="Menu" side="start" width={380}>
      <VStack gap={5}>
        <DrawerHeader title="Menu" onOpenChange={onOpenChange} />
        <TextInput
          label="Search the store"
          isLabelHidden
          placeholder="Search tees, hoodies, bags…"
          value={query}
          onChange={setQuery}
          width="100%"
          data-autofocus
        />
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
            <NextLink key={c.id} href="#collections" onClick={close} className="px-1 text-[14px] text-secondary hover:text-primary">
              {c.name}
            </NextLink>
          ))}
        </VStack>
      </VStack>
    </Drawer>
  );
}
