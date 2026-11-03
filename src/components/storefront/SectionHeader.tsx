'use client';

import {HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';

/** Small title on the left, black pill "discover" action on the right. */
export function SectionHeader({
  title,
  actionLabel,
  actionHref,
}: {
  title: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <HStack hAlign="between" vAlign="center" gap={2} className="px-1">
      <Heading level={2} className="text-[15px] font-semibold tracking-[-0.01em] text-balance">
        {title}
      </Heading>
      {actionLabel ? (
        <Button label={actionLabel} variant="primary" size="sm" href={actionHref ?? '#'} className="rounded-full px-4" />
      ) : null}
    </HStack>
  );
}
