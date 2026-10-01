import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { CartItem, Product } from '../types'
const KEY = 'lumin-cart'
type CartApi = { items: CartItem[]; add: (p: Product, q?: number) => void; update: (id: string, q: number) => void; remove: (id: string) => void; clear: () => void; count: number; total: number }
const CartContext = createContext<CartApi | null>(null)
function read(): CartItem[] { try { const value = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(value) ? value.filter(x => x?.product?.id && Number.isFinite(x.quantity) && x.quantity > 0) : [] } catch { return [] } }
export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(read)
    useEffect(() => localStorage.setItem(KEY, JSON.stringify(items)), [items])
    const api = useMemo(() => ({ items, add: (product: Product, quantity = 1) => setItems(old => { const i = old.findIndex(x => x.product.id === product.id); if (i < 0) return [...old, { product, quantity: Math.min(quantity, product.stock) }]; return old.map((x, n) => n === i ? { ...x, quantity: Math.min(x.quantity + quantity, product.stock) } : x) }), update: (id: string, quantity: number) => setItems(old => old.map(x => x.product.id === id ? { ...x, quantity: Math.max(1, Math.min(quantity, x.product.stock)) } : x)), remove: (id: string) => setItems(old => old.filter(x => x.product.id !== id)), clear: () => setItems([]), count: items.reduce((s, x) => s + x.quantity, 0), total: items.reduce((s, x) => s + x.quantity * x.product.price, 0) }), [items])
    return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}
export const useCart = () => { const ctx = useContext(CartContext); if (!ctx) throw new Error('Cart context missing'); return ctx }
