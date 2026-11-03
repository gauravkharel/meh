'use client';

import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import type {Product} from '@/data/products';

export type CartLine = {product: Product; qty: number};

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
  /** Put removed lines back (undo for remove and clear). */
  restore: (lines: CartLine[]) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

/** Client-side cart state. Swap for a server cart / API later. */
export function CartProvider({
  children,
  initialLines = [],
  initialOpen = false,
}: {
  children: React.ReactNode;
  /** Seed lines, for previews and tests. Production starts empty. */
  initialLines?: CartLine[];
  initialOpen?: boolean;
}) {
  const [lines, setLines] = useState<CartLine[]>(initialLines);
  const [isOpen, setOpen] = useState(initialOpen);

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

  // Undo: put back any snapshot line that is missing now, at its old position,
  // without dropping lines added since.
  const restore = useCallback((snapshot: CartLine[]) => {
    setLines(cur => {
      const next = [...cur];
      snapshot.forEach((line, i) => {
        if (!next.some(l => l.product.id === line.product.id)) next.splice(Math.min(i, next.length), 0, line);
      });
      return next;
    });
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + l.qty * l.product.price, 0);
    return {lines, count, subtotal, isOpen, setOpen, add, decrement, remove, clear, restore};
  }, [lines, isOpen, add, decrement, remove, clear, restore]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
