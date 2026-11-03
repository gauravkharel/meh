'use client';

import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {NavIcon} from '@astryxdesign/core/NavIcon';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {Icon} from '@astryxdesign/core/Icon';
import {ShoppingBagIcon, SparklesIcon} from '@heroicons/react/24/outline';
import {useCart} from '@/lib/cart';

export function SiteHeader() {
  const {count, setOpen} = useCart();
  return (
    <TopNav
      label="Main navigation"
      heading={
        <TopNavHeading
          heading="meh"
          headingHref="#"
          logo={<NavIcon icon={<Icon icon={SparklesIcon} size="sm" />} />}
        />
      }
      startContent={
        <>
          <TopNavItem label="Shop" href="#featured" className="max-sm:hidden" />
          <TopNavItem label="Categories" href="#categories" className="max-sm:hidden" />
          <TopNavItem label="Newsletter" href="#newsletter" className="max-md:hidden" />
        </>
      }
      endContent={
        <Button
          label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}
          variant="secondary"
          icon={<Icon icon={ShoppingBagIcon} />}
          endContent={<Badge label={count} variant={count > 0 ? 'info' : 'neutral'} />}
          onClick={() => setOpen(true)}>
          Cart
        </Button>
      }
    />
  );
}
