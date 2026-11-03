'use client';

import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import type {Product} from '@/data/products';

type CartLine = {product: Product; qty: number};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (product: Product) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

/** Client-side cart state. Swap for a server cart / API later. */
export function CartProvider({children}: {children: React.ReactNode}) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  const add = useCallback((product: Product) => {
    setLines(prev => {
      const existing = prev.find(l => l.product.id === product.id);
      if (existing) {
        return prev.map(l => (l.product.id === product.id ? {...l, qty: l.qty + 1} : l));
      }
      return [...prev, {product, qty: 1}];
    });
  }, []);

  const decrement = useCallback((id: string) => {
    setLines(prev =>
      prev
        .map(l => (l.product.id === id ? {...l, qty: l.qty - 1} : l))
        .filter(l => l.qty > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines(prev => prev.filter(l => l.product.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + l.qty * l.product.price, 0);
    return {lines, count, subtotal, isOpen, setOpen, add, decrement, remove, clear};
  }, [lines, isOpen, add, decrement, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
