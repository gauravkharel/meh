import {Layout, LayoutContent, LayoutHeader, VStack} from '@astryxdesign/core/Layout';
import {SiteHeader} from '@/components/storefront/SiteHeader';
import {Hero} from '@/components/storefront/Hero';
import {FeaturedProducts} from '@/components/storefront/FeaturedProducts';
import {Categories} from '@/components/storefront/Categories';
import {Newsletter} from '@/components/storefront/Newsletter';
import {SiteFooter} from '@/components/storefront/SiteFooter';
import {CartDrawer} from '@/components/storefront/CartDrawer';

export default function Home() {
  return (
    <Layout
      height="auto"
      contentWidth={1200}
      header={
        <LayoutHeader hasDivider padding={0}>
          <SiteHeader />
        </LayoutHeader>
      }
      content={
        <LayoutContent padding={6}>
          <VStack gap={10} as="main">
            <Hero />
            <FeaturedProducts />
            <Categories />
            <Newsletter />
            <SiteFooter />
          </VStack>
          <CartDrawer />
        </LayoutContent>
      }
    />
  );
}
