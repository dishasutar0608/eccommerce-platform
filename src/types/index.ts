export type Category = 'Electronics' | 'Clothing' | 'Shoes' | 'Accessories' | 'Home'
export interface Product { id: string; name: string; description: string; price: number; category: Category; image: string; rating: number; stock: number }
export interface CartItem { product: Product; quantity: number }
export interface Customer { fullName: string; email: string; phone: string; address: string; city: string; state: string; postalCode: string }
export interface Order { number: string; items: CartItem[]; total: number; customer: Customer }
export type FormErrors = Partial<Record<keyof Customer, string>>
