'use client';

import Link from 'next/link';
import {Theme} from '@astryxdesign/core/theme';
import {LinkProvider} from '@astryxdesign/core/Link';
import {mehTheme} from '@/themes/meh';
import {CartProvider} from '@/lib/cart';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={mehTheme}>
      <LinkProvider component={Link}>
        <CartProvider>{children}</CartProvider>
      </LinkProvider>
    </Theme>
  );
}
