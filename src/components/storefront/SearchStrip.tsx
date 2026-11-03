'use client';

import {useState} from 'react';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Token} from '@astryxdesign/core/Token';
import {Button} from '@astryxdesign/core/Button';
import {POPULAR_SEARCHES} from '@/data/products';
import {Panel} from './Panel';

/** About blurb with "read more" plus popular-search tokens. */
export function SearchStrip() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Panel label="About meh" padding={4}>
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <VStack gap={2}>
          <Heading level={2} className="text-[15px] font-semibold">
            About meh
          </Heading>
          <Text id="about-meh-copy" type="supporting" maxLines={isOpen ? undefined : 2} className="max-w-[65ch] text-pretty">
            meh is a placeholder streetwear label used to test a design system. Everything on this page is
            sample content: heavyweight basics, quiet colours and a small set of pieces meant to be worn on
            repeat. Replace this copy with the real brand story when it lands.
          </Text>
          <div>
            <Button
              label={isOpen ? 'Read less' : 'Read more'}
              variant="ghost"
              size="sm"
              aria-expanded={isOpen}
              aria-controls="about-meh-copy"
              className="-ms-2"
              onClick={() => setOpen(o => !o)}
            />
          </div>
        </VStack>
        <VStack gap={2}>
          <Text type="label">Popular searches</Text>
          <HStack gap={1} wrap="wrap">
            {POPULAR_SEARCHES.map(s => (
              <Token key={s} label={s} href="#new-in" size="sm" />
            ))}
          </HStack>
        </VStack>
      </div>
    </Panel>
  );
}
