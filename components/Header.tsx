"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "@/hooks/useTheme"
import { useCart } from "@/providers/CartProvider"
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CartSheet } from "./CartSheet"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { itemCount } = useCart()
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  const navigation = [
    { id: "home", label: "Inicio", path: "/" },
    { id: "about", label: "Nosotros", path: "/about" },
    { id: "products", label: "Productos", path: "/products" },
    { id: "courses", label: "Cursos", path: "/courses" },
    { id: "contact", label: "Contacto", path: "/contact" },
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-800/30 shadow-lg shadow-black/5">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer transition-transform hover:scale-105 flex-shrink-0">
            <div className="relative h-8 sm:h-10 lg:h-12 w-auto flex-shrink-0">
       {/* logo */}
            </div>
            <div className="hidden sm:block min-w-0">
              <div className="text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent truncate">
                Pescas Premium
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium truncate">
                Equipos profesionales
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50/60 dark:bg-gray-800/60 rounded-xl lg:rounded-2xl p-1.5 lg:p-2 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 flex-shrink-0">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold rounded-lg lg:rounded-xl transition-all duration-300 relative overflow-hidden group whitespace-nowrap ${
                  activeSection === item.id 
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25 scale-105" 
                    : "text-gray-700 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-gray-700/80 hover:text-red-600 dark:hover:text-red-400 hover:scale-105"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection !== item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="hidden sm:flex h-9 w-9 lg:h-11 lg:w-11 rounded-lg lg:rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 hover:scale-110 transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm group"
            >
              <div className="relative">
                {theme === "light" ? (
                  <Moon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                ) : (
                  <Sun className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                )}
              </div>
            </Button>

            {/* Cart Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCartOpen(true)} 
              className="relative h-9 w-9 lg:h-11 lg:w-11 rounded-lg lg:rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 hover:scale-110 transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm group"
            >
              <ShoppingCart className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
              {itemCount > 0 && (
                <Badge className="absolute -top-0.5 -right-0.5 lg:-top-1 lg:-right-1 h-5 w-5 lg:h-6 lg:w-6 rounded-full p-0 text-xs bg-gradient-to-r from-red-500 to-red-600 border-2 border-white dark:border-gray-950 shadow-lg animate-pulse flex items-center justify-center">
                  {itemCount > 99 ? '99+' : itemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden h-9 w-9 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 hover:scale-110 transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm group"
                >
                  <Menu className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-l border-gray-200/60 dark:border-gray-800/60 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 p-6 border-b border-gray-200/60 dark:border-gray-700/60">
                    <div className="relative h-10 w-auto flex-shrink-0">
                      <Image
                        src="/logo.jpeg"
                        alt="ProFish Logo"
                        width={64}
                        height={40}
                        className="h-10 w-auto object-contain rounded-lg"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-gray-900 dark:text-white truncate">Pescas Premium</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Equipos profesionales</div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 px-6 py-4 overflow-y-auto">
                    <div className="space-y-2">
                      {navigation.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            handleNavigation(item.path)
                            setIsMenuOpen(false)
                          }}
                          className={`w-full text-left px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 group ${
                            activeSection === item.id 
                              ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg" 
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-red-600 dark:hover:text-red-400"
                          }`}
                        >
                          <span className="flex items-center justify-between">
                            <span className="truncate">{item.label}</span>
                            <div className={`w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all duration-300 ${activeSection === item.id ? 'w-4' : ''} flex-shrink-0 ml-2`} />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Theme Toggle */}
                  <div className="px-6 py-4 border-t border-gray-200/60 dark:border-gray-700/60 mt-auto">
                    <Button 
                      variant="ghost" 
                      onClick={toggleTheme} 
                      className="w-full justify-start px-4 py-3 text-base font-semibold rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300"
                    >
                      {theme === "light" ? (
                        <><Moon className="h-5 w-5 mr-3 flex-shrink-0" /> <span className="truncate">Modo Oscuro</span></>
                      ) : (
                        <><Sun className="h-5 w-5 mr-3 flex-shrink-0" /> <span className="truncate">Modo Claro</span></>
                      )}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  )
}