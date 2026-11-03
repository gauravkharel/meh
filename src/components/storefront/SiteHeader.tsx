'use client';

import {useState} from 'react';
import {TopNav, TopNavItem} from '@astryxdesign/core/TopNav';
import {HStack} from '@astryxdesign/core/Layout';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Icon} from '@astryxdesign/core/Icon';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import {NAV_LINKS} from '@/data/products';
import {useCart} from '@/lib/cart';
import {AnnouncementMarquee} from './AnnouncementMarquee';
import {MobileMenu} from './MobileMenu';
import {Wordmark} from './Wordmark';

/**
 * Sticky header: marquee bar + Astryx TopNav in its three-column mode
 * (links | centred wordmark | icon actions). The menu button opens the
 * MobileMenu drawer; on small screens it replaces the text links.
 */
export function SiteHeader() {
  const {count, setOpen} = useCart();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30">
      <AnnouncementMarquee />
      <div className="bg-surface">
        <TopNav
          label="Main navigation"
          startContent={
            <HStack gap={1} vAlign="center">
              <IconButton
                label="Open menu"
                icon={<Icon icon={Bars3Icon} />}
                variant="ghost"
                onClick={() => setMenuOpen(true)}
              />
              {NAV_LINKS.slice(0, 2).map(l => (
                <TopNavItem key={l.href} label={l.label} href={l.href} className="max-md:hidden" />
              ))}
            </HStack>
          }
          centerContent={<Wordmark />}
          endContent={
            <HStack gap={0.5} vAlign="center">
              <span className="max-lg:hidden">
                <IconButton label="Find a space" icon={<Icon icon={MapPinIcon} />} variant="ghost" onClick={() => { window.location.hash = 'spaces'; }} />
              </span>
              <span className="max-sm:hidden">
                <IconButton label="Search" icon={<Icon icon={MagnifyingGlassIcon} />} variant="ghost" onClick={() => setMenuOpen(true)} />
              </span>
              <span className="max-sm:hidden">
                <IconButton label="Account (demo)" icon={<Icon icon={UserIcon} />} variant="ghost" isDisabled />
              </span>
              <span className="relative">
                <IconButton
                  label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}
                  icon={<Icon icon={ShoppingBagIcon} />}
                  variant="ghost"
                  onClick={() => setOpen(true)}
                />
                {count > 0 ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-0.5 right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-ink px-1 text-[10px] font-semibold text-paper">
                    {count}
                  </span>
                ) : null}
              </span>
            </HStack>
          }
        />
      </div>
      <MobileMenu isOpen={isMenuOpen} onOpenChange={setMenuOpen} />
    </header>
  );
}
