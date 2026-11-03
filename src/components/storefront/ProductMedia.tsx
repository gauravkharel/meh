'use client';

import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Center} from '@astryxdesign/core/Center';
import {Icon} from '@astryxdesign/core/Icon';
import {PhotoIcon} from '@heroicons/react/24/outline';

/**
 * Placeholder product media: a token-coloured tile with an icon.
 * Replace with <img>/<Image> once real product photography exists.
 */
export function ProductMedia({
  swatch,
  label,
  ratio = 1,
}: {
  swatch: string;
  label: string;
  ratio?: number;
}) {
  return (
    <AspectRatio ratio={ratio} className="overflow-hidden rounded-lg">
      <Center width="100%" height="100%" className={swatch}>
        <Icon icon={PhotoIcon} size="lg" color="secondary" label={`${label} (placeholder image)`} />
      </Center>
    </AspectRatio>
  );
}
