import type {StaticImageData} from 'next/image';
import fieldBomber from '@/assets/images/products/field-bomber-olive.webp';
import leatherJacket from '@/assets/images/products/leather-jacket-black.webp';
import motoJacket from '@/assets/images/products/moto-jacket-burgundy.webp';
import wideTrouser from '@/assets/images/products/belted-wide-trouser-taupe.webp';
import heavyTee from '@/assets/images/products/heavy-tee-mustard.webp';
import oversizedTee from '@/assets/images/products/oversized-tee-forest.webp';
import sweatsFour from '@/assets/images/campaign/sweats-four.webp';

/**
 * Sample catalogue for the "meh" storefront. Photos are the owner's sample
 * shots (src/assets/images, pre-sized WebP, imported statically so Next knows
 * width/height and generates a blur placeholder). Names and prices are
 * placeholders.
 *
 * `position` is the CSS object-position used inside the 3:4 tile, tuned so the
 * garment stays centred. `isDarkBackdrop` flips overlay colours (dots).
 */
export type ProductImage = {
  src: StaticImageData;
  alt: string;
  position?: string;
  isDarkBackdrop?: boolean;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: ProductImage;
  tag?: 'New' | 'Last few';
  isSoldOut?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1', name: 'Field Bomber / Olive', category: 'Outerwear', price: 148, tag: 'New',
    description: 'Washed cotton shell, ribbed collar.',
    image: {src: fieldBomber, alt: 'Olive field bomber jacket held up against a pale grey backdrop', position: '50% 40%'},
  },
  {
    id: 'p2', name: 'Leather Jacket / Black', category: 'Outerwear', price: 260, tag: 'Last few',
    description: 'Cropped, buffed leather, patch pockets.',
    image: {src: leatherJacket, alt: 'Black cropped leather jacket on a hanger against a white backdrop', position: '50% 45%'},
  },
  {
    id: 'p3', name: 'Heavy Tee / Mustard', category: 'Tees', price: 42,
    description: 'Heavyweight jersey, tight rib neck.',
    image: {src: heavyTee, alt: 'Close-up of a mustard heavyweight tee neckline', position: '50% 50%', isDarkBackdrop: true},
  },
  {
    id: 'p4', name: 'Belted Wide Trouser / Taupe', category: 'Trousers', price: 118, tag: 'New',
    description: 'Wide leg, self-tie belt.',
    image: {src: wideTrouser, alt: 'Taupe wide-leg trousers with a tie belt held up against a light backdrop', position: '50% 40%'},
  },
  {
    id: 'p5', name: 'Moto Jacket / Burgundy', category: 'Outerwear', price: 290,
    description: 'Oil-waxed leather, asymmetric zip.',
    image: {src: motoJacket, alt: 'Burgundy leather moto jacket held up against a pale grey wall', position: '50% 35%'},
  },
  {
    id: 'p6', name: 'Oversized Tee / Forest', category: 'Tees', price: 46,
    description: 'Boxy fit, dropped shoulder.',
    image: {src: oversizedTee, alt: 'Dark green oversized tee held up by four hands against a beige backdrop', position: '50% 45%'},
  },
];

/** New in grid: four pieces, so the 4-up desktop row and 2-up mobile grid stay full. */
export const NEW_IN: Product[] = PRODUCTS.slice(0, 4);

/** Whole drop for the carousel, leading with the two pieces not in the grid. */
export const FULL_DROP: Product[] = [PRODUCTS[4], PRODUCTS[5], ...PRODUCTS.slice(0, 4)];

export type Collection = {id: string; name: string; image: ProductImage};

export const COLLECTIONS: Collection[] = [
  {id: 'c1', name: 'Outerwear', image: {...PRODUCTS[0].image, position: '50% 35%'}},
  {id: 'c2', name: 'Leather', image: {...PRODUCTS[4].image, position: '50% 30%'}},
  {id: 'c3', name: 'Tees', image: {...PRODUCTS[5].image, position: '50% 40%'}},
  {id: 'c4', name: 'Trousers', image: {...PRODUCTS[3].image, position: '50% 35%'}},
  {id: 'c5', name: 'Basics', image: PRODUCTS[2].image},
  {id: 'c6', name: 'Sweats', image: {src: sweatsFour, alt: 'Two men in grey and cream sweats', position: '12% 50%'}},
];

export const SPACES = [
  {id: 's1', name: 'meh / North', address: 'Placeholder Street 12, Unit 3'},
  {id: 's2', name: 'meh / Central', address: 'Example Avenue 48, Ground floor'},
  {id: 's3', name: 'meh / Pop-up', address: 'Sample Market, Hall B'},
];

export const POPULAR_SEARCHES = [
  'Oversized tees', 'Leather jackets', 'Bombers', 'Wide trousers', 'Heavy tees',
  'Outerwear', 'Sweats', 'New in', 'Gift cards',
];

export const NAV_LINKS = [
  {label: 'New in', href: '#new-in'},
  {label: 'Collections', href: '#collections'},
  {label: 'Full drop', href: '#drop'},
  {label: 'Spaces', href: '#spaces'},
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(n);
