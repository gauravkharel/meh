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
 * meh v2 home page. Layout rhythm inspired by editorial streetwear stores
 * (see docs/moodboard/bluorng/README.md): gray page, white rounded panels,
 * full-bleed campaign art, tight product grids. All content is placeholder.
 */
export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-body">
      <SiteHeader />
      <main className="flex flex-col gap-2 p-2">
        <EditorialHero />
        <ProductGrid id="new-in" title="New in" products={PRODUCTS} />
        <CollectionRail id="bags" title="Bags & carry" items={RAIL_ITEMS} />
        <CampaignBanner />
        <ProductGrid id="essentials" title="Essentials" products={[...PRODUCTS].reverse()} actionLabel="Shop essentials" />
        <CollectionsGrid />
        <SpacesPanel />
        <SearchStrip />
        <SiteFooter />
      </main>
      <CartDrawer />
    </div>
  );
}
