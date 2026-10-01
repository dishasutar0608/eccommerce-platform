import { createContext, useContext, useMemo, useState } from 'react'
type AuthState = { name: string; email: string }
type AuthApi = { user: AuthState | null; signIn: (email: string, name?: string) => void; signOut: () => void }
const AuthContext = createContext<AuthApi | null>(null)
const KEY = 'lumin-demo-user'
function readUser(): AuthState | null { try { const data = JSON.parse(sessionStorage.getItem(KEY) || 'null'); return data && typeof data.name === 'string' && typeof data.email === 'string' ? data : null } catch { return null } }
export function AuthProvider({ children }: { children: React.ReactNode }) { const [user, setUser] = useState<AuthState | null>(readUser); const api = useMemo(() => ({ user, signIn: (email: string, name?: string) => { const next = { email, name: name?.trim() || email.split('@')[0] || 'Member' }; setUser(next); sessionStorage.setItem(KEY, JSON.stringify(next)) }, signOut: () => { setUser(null); sessionStorage.removeItem(KEY) } }), [user]); return <AuthContext.Provider value={api}>{children}</AuthContext.Provider> }
export const useAuth = () => { const context = useContext(AuthContext); if (!context) throw new Error('Auth context missing'); return context }
