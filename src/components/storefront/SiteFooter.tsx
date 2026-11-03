'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Divider} from '@astryxdesign/core/Divider';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';

const COLUMNS = [
  {title: 'Shop', links: ['New arrivals', 'Bestsellers', 'Sale']},
  {title: 'Help', links: ['Shipping', 'Returns', 'Contact']},
  {title: 'Company', links: ['About', 'Careers', 'Press']},
];

export function SiteFooter() {
  return (
    <VStack gap={6}>
      <Divider />
      <Grid columns={{minWidth: 160}} gap={6}>
        <VStack gap={2}>
          <Heading level={3}>meh</Heading>
          <Text type="supporting">A design-system storefront prototype.</Text>
        </VStack>
        {COLUMNS.map(col => (
          <VStack key={col.title} gap={2}>
            <Text type="label">{col.title}</Text>
            {col.links.map(l => (
              <Link key={l} href="#" color="secondary">
                {l}
              </Link>
            ))}
          </VStack>
        ))}
      </Grid>
      <HStack gap={2} hAlign="between" wrap="wrap">
        <Text type="supporting">© 2026 meh. Placeholder content.</Text>
        <Text type="supporting">Built with Next.js, Tailwind CSS and Astryx.</Text>
      </HStack>
    </VStack>
  );
}
