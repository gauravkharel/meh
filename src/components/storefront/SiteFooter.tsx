'use client';

import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Newsletter} from './Newsletter';
import {Panel} from './Panel';
import {Wordmark} from './Wordmark';

const COLUMNS = [
  {title: 'Connect', links: ['Instagram', 'TikTok', 'Newsletter', 'Contact']},
  {title: 'Order support', links: ['Shipping', 'Returns & exchanges', 'Size guide', 'Track order']},
  {title: 'We are meh', links: ['About', 'Spaces', 'Careers', 'Terms & privacy']},
];

/** Rounded footer panel: link columns, newsletter, oversized wordmark. */
export function SiteFooter() {
  return (
    <footer>
      <Panel label="Footer" padding={6}>
        <VStack gap={8}>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <Grid columns={{minWidth: 150, max: 3}} gap={6}>
              {COLUMNS.map(col => (
                <VStack key={col.title} gap={2}>
                  <Text type="label">{col.title}</Text>
                  {col.links.map(l => (
                    <Link key={l} href="#top" color="secondary">
                      <span className="text-[13px]">{l}</span>
                    </Link>
                  ))}
                </VStack>
              ))}
            </Grid>
            <Newsletter />
          </div>
          <Wordmark size="xl" />
          <HStack gap={2} hAlign="between" wrap="wrap">
            <Text type="supporting">© 2026 meh. Placeholder brand and content.</Text>
            <Text type="supporting">Built with Next.js, Tailwind CSS and Astryx.</Text>
          </HStack>
        </VStack>
      </Panel>
    </footer>
  );
}
