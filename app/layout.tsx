import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { CartProvider } from '@/providers/CartProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pescas Premium',
  description: 'Equipos profesionales de pesca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="light"
          storageKey="pescas-premium-theme"
        >
          <CartProvider storageKey="pescas-premium-cart">
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}