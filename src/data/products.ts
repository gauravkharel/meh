/**
 * Placeholder catalogue. Replace with real data / an API later.
 * `swatch` maps to a token-backed Tailwind class (see src/styles/tokens.css).
 */
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  swatch: string;
  tag?: 'New' | 'Bestseller' | 'Sale';
};

export const PRODUCTS: Product[] = [
  {id: 'p1', name: 'Everyday Tote', category: 'Bags', price: 48, description: 'Placeholder product. Canvas tote with an inner pocket.', swatch: 'bg-product-1', tag: 'New'},
  {id: 'p2', name: 'Ceramic Mug', category: 'Home', price: 22, description: 'Placeholder product. Matte glaze, 350 ml.', swatch: 'bg-product-2'},
  {id: 'p3', name: 'Linen Overshirt', category: 'Apparel', price: 89, description: 'Placeholder product. Relaxed fit, garment-washed.', swatch: 'bg-product-3', tag: 'Bestseller'},
  {id: 'p4', name: 'Desk Lamp', category: 'Home', price: 64, description: 'Placeholder product. Dimmable warm LED.', swatch: 'bg-product-4'},
  {id: 'p5', name: 'Trail Bottle', category: 'Outdoor', price: 28, description: 'Placeholder product. Insulated steel, 750 ml.', swatch: 'bg-product-5', tag: 'Sale'},
  {id: 'p6', name: 'Knit Beanie', category: 'Apparel', price: 26, description: 'Placeholder product. Merino blend, one size.', swatch: 'bg-product-6'},
  {id: 'p7', name: 'Notebook Set', category: 'Stationery', price: 18, description: 'Placeholder product. Three dot-grid A5 notebooks.', swatch: 'bg-product-7'},
  {id: 'p8', name: 'Weekender Bag', category: 'Bags', price: 120, description: 'Placeholder product. Water-resistant, 40 L.', swatch: 'bg-product-8', tag: 'New'},
];

export const CATEGORIES = [
  {name: 'Apparel', count: 24, swatch: 'bg-product-3'},
  {name: 'Bags', count: 12, swatch: 'bg-product-1'},
  {name: 'Home', count: 31, swatch: 'bg-product-2'},
  {name: 'Outdoor', count: 9, swatch: 'bg-product-5'},
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(n);
