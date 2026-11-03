'use client';

import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/Layout';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Token} from '@astryxdesign/core/Token';
import {Icon} from '@astryxdesign/core/Icon';
import {ArrowUpRightIcon, MapPinIcon} from '@heroicons/react/20/solid';
import {SPACES} from '@/data/products';

/**
 * Big pale panel for physical spaces: outlined label, headline, a decorative
 * CSS globe, and white store cards (Astryx Card) with a directions link.
 */
export function SpacesPanel() {
  return (
    <section
      id="spaces"
      aria-label="Spaces"
      className="relative isolate scroll-mt-28 overflow-hidden rounded-[var(--radius-page)] tile-spaces px-4 pt-10 pb-4 sm:px-8 sm:pt-14 sm:pb-8">
      <div
        aria-hidden
        className="absolute top-[-20%] left-1/2 -z-10 aspect-square w-[min(90vw,720px)] -translate-x-1/2 rounded-full border border-ink/10 bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#e8eef3_45%,#c3ced8_100%)] shadow-[inset_-40px_-40px_80px_rgb(0_0_0/0.08)]">
        <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(90deg,transparent_0_46px,rgb(10_10_10/0.06)_46px_47px)]" />
        <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(0deg,transparent_0_46px,rgb(10_10_10/0.06)_46px_47px)]" />
      </div>

      <VStack gap={3} hAlign="center">
        <Token label="Spaces in 3 places" icon={<Icon icon={MapPinIcon} />} size="sm" />
        <h2 className="max-w-[16ch] text-center text-[clamp(32px,5vw,64px)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance text-ink">
          Try it on in person
        </h2>
      </VStack>

      <div className="mt-[clamp(120px,22vw,300px)]">
        <Grid columns={{minWidth: 220, max: 3}} gap={2}>
          {SPACES.map(s => (
            <Card key={s.id} padding={4} className="rounded-[var(--radius-container)] border-0">
              <VStack gap={1}>
                <Text type="large" weight="semibold">
                  {s.name}
                </Text>
                <Text type="supporting">{s.address}</Text>
                <div className="pt-3">
                  <Link href="#spaces" color="primary">
                    <span className="inline-flex items-center gap-1 text-[13px] font-medium">
                      Get directions<span className="sr-only"> to {s.name}</span> <Icon icon={ArrowUpRightIcon} size="sm" />
                    </span>
                  </Link>
                </div>
              </VStack>
            </Card>
          ))}
        </Grid>
      </div>
    </section>
  );
}
