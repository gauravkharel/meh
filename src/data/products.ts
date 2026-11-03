/**
 * Placeholder catalogue for the "meh" storefront. All names, prices and
 * imagery are placeholders. Replace with real data or an API later.
 *
 * `tone` / `altTone` pick one of the monochrome art-direction tiles defined in
 * src/styles/tokens.css (`tile-1` … `tile-8`). The alt tone is the
 * "second photo" revealed on hover.
 */
export type Tone = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  tone: Tone;
  altTone: Tone;
  tag?: 'New' | 'Last few';
  isSoldOut?: boolean;
};

export const PRODUCTS: Product[] = [
  {id: 'p1', name: 'Boxy Tee 01 / Ash', category: 'Tees', price: 38, description: 'Heavyweight cotton, dropped shoulder.', tone: 1, altTone: 5, tag: 'New'},
  {id: 'p2', name: 'Heavy Hoodie 02 / Ink', category: 'Hoodies', price: 96, description: 'Brushed fleece, oversized hood.', tone: 2, altTone: 6},
  {id: 'p3', name: 'Cargo Pant 03 / Stone', category: 'Bottoms', price: 84, description: 'Relaxed leg, six pockets.', tone: 3, altTone: 7},
  {id: 'p4', name: 'Washed Cap 04 / Bone', category: 'Headwear', price: 32, description: 'Six-panel, garment-washed.', tone: 4, altTone: 8, tag: 'Last few'},
  {id: 'p5', name: 'Longsleeve 05 / Smoke', category: 'Tees', price: 46, description: 'Rib cuffs, boxy fit.', tone: 5, altTone: 1},
  {id: 'p6', name: 'Zip Hoodie 06 / Charcoal', category: 'Hoodies', price: 104, description: 'Two-way zip, kangaroo pocket.', tone: 6, altTone: 2, isSoldOut: true},
  {id: 'p7', name: 'Track Short 07 / Fog', category: 'Bottoms', price: 52, description: 'Nylon shell, mesh lining.', tone: 7, altTone: 3, tag: 'New'},
  {id: 'p8', name: 'Knit Beanie 08 / Coal', category: 'Headwear', price: 28, description: 'Merino blend, one size.', tone: 8, altTone: 4},
];

export const RAIL_ITEMS: Product[] = [
  {id: 'r1', name: 'Sling Bag 09 / Ink', category: 'Bags', price: 58, description: 'Cross-body, water-resistant.', tone: 2, altTone: 6},
  {id: 'r2', name: 'Tote 10 / Bone', category: 'Bags', price: 34, description: 'Canvas, inner pocket.', tone: 4, altTone: 8, isSoldOut: true},
  {id: 'r3', name: 'Duffel 11 / Charcoal', category: 'Bags', price: 120, description: '40 L, padded straps.', tone: 6, altTone: 2},
  {id: 'r4', name: 'Pouch 12 / Ash', category: 'Bags', price: 22, description: 'Zip pouch, nylon.', tone: 1, altTone: 5},
  {id: 'r5', name: 'Backpack 13 / Coal', category: 'Bags', price: 88, description: 'Laptop sleeve, 22 L.', tone: 8, altTone: 4},
  {id: 'r6', name: 'Belt Bag 14 / Fog', category: 'Bags', price: 40, description: 'Adjustable strap.', tone: 7, altTone: 3, isSoldOut: true},
];

export const COLLECTIONS = [
  {id: 'c1', name: 'Tees', tone: 1 as Tone},
  {id: 'c2', name: 'Hoodies', tone: 2 as Tone},
  {id: 'c3', name: 'Bottoms', tone: 3 as Tone},
  {id: 'c4', name: 'Headwear', tone: 4 as Tone},
  {id: 'c5', name: 'Bags', tone: 6 as Tone},
  {id: 'c6', name: 'Accessories', tone: 8 as Tone},
];

export const SPACES = [
  {id: 's1', name: 'meh / North', address: 'Placeholder Street 12, Unit 3'},
  {id: 's2', name: 'meh / Central', address: 'Example Avenue 48, Ground floor'},
  {id: 's3', name: 'meh / Pop-up', address: 'Sample Market, Hall B'},
];

export const POPULAR_SEARCHES = [
  'Oversized tees', 'Heavy hoodies', 'Cargo pants', 'Washed caps', 'Sling bags',
  'Knit beanies', 'Track shorts', 'Zip hoodies', 'New in', 'Gift cards',
];

export const NAV_LINKS = [
  {label: 'New in', href: '#new-in'},
  {label: 'Collections', href: '#collections'},
  {label: 'Bags', href: '#bags'},
  {label: 'Spaces', href: '#spaces'},
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(n);
