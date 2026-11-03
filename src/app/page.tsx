import {SiteHeader} from '@/components/storefront/SiteHeader';
import {EditorialHero} from '@/components/storefront/EditorialHero';
import {ProductGrid} from '@/components/storefront/ProductGrid';
import {CollectionRail} from '@/components/storefront/CollectionRail';
import {CampaignBanner} from '@/components/storefront/CampaignBanner';
import {CollectionsGrid} from '@/components/storefront/CollectionsGrid';
import {SpacesPanel} from '@/components/storefront/SpacesPanel';
import {SearchStrip} from '@/components/storefront/SearchStrip';
import {SiteFooter} from '@/components/storefront/SiteFooter';
import {CartDrawer} from '@/components/storefront/CartDrawer';
import {PRODUCTS, RAIL_ITEMS} from '@/data/products';

/**
 * meh v3 home page. Layout rhythm inspired by editorial streetwear stores
 * (see docs/moodboard/bluorng/README.md): gray page, white rounded panels,
 * full-bleed campaign art, tight product grids. All content is placeholder.
 */
export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-body">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper focus:not-sr-only focus:fixed focus:start-2 focus:top-2">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="flex flex-col gap-section px-2 pt-2 pb-section outline-none">
        <EditorialHero />
        <ProductGrid id="new-in" title="New in" products={PRODUCTS} />
        <CollectionRail id="bags" title="Bags & carry" items={RAIL_ITEMS} />
        <CampaignBanner />
        <ProductGrid id="essentials" title="Essentials" products={[...PRODUCTS].reverse()} action={{label: 'Shop bags', href: '#bags'}} />
        <CollectionsGrid />
        <SpacesPanel />
        <SearchStrip />
      </main>
      <div className="px-2 pb-2">
        <SiteFooter />
      </div>
      <CartDrawer />
    </div>
  );
}
