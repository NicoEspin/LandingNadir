"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'

export type CartItemType = 'product' | 'course'

export interface CartItem {
  id: string // Mantener como string para consistencia
  name: string
  price: number
  type: CartItemType
  quantity: number
  image?: string
  // Campos específicos para cursos
  location?: string
  duration?: string
  level?: string
  modalidad?: string
  // Campos específicos para productos
  category?: string
}

interface CartContextType {
  items: CartItem[]
  itemCount: number
  totalPrice: number
  total: number // Agregar alias para compatibilidad
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  generateWhatsAppMessage: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
  storageKey?: string
}

export function CartProvider({ 
  children, 
  storageKey = 'pescas-premium-cart' 
}: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(storageKey)
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart)
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart)
        }
      }
    } catch (error) {
      console.warn('Error loading cart from localStorage:', error)
    }
    setMounted(true)
  }, [storageKey])

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (!mounted) return
    
    try {
      localStorage.setItem(storageKey, JSON.stringify(items))
    } catch (error) {
      console.warn('Error saving cart to localStorage:', error)
    }
  }, [items, mounted, storageKey])

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    console.log('Adding item to cart:', newItem) // Debug log
    
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id)
      
      if (existingItem) {
        // Si el item ya existe, incrementar cantidad
        const updatedItems = currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
            : item
        )
        console.log('Updated existing item, new cart:', updatedItems) // Debug log
        return updatedItems
      } else {
        // Si es nuevo, agregarlo al carrito
        const newCartItems = [...currentItems, { ...newItem, quantity: newItem.quantity || 1 }]
        console.log('Added new item, new cart:', newCartItems) // Debug log
        return newCartItems
      }
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  // Calcular valores derivados
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  const generateWhatsAppMessage = useCallback(() => {
    // Calcular el total dentro de la función para mayor seguridad
    const currentTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
    
    let message = "Hola Nadir, voy a comprar:\n\n"
    
    // Separar productos y cursos
    const products = items.filter(item => item.type === 'product')
    const courses = items.filter(item => item.type === 'course')
    
    // Agregar productos
    if (products.length > 0) {
      message += "📦 *PRODUCTOS:*\n"
      products.forEach(item => {
        message += `• ${item.name}\n`
        if (item.category) message += `  Categoría: ${item.category}\n`
        message += `  Cantidad: ${item.quantity}\n`
        message += `  Precio unitario: $${item.price.toLocaleString()}\n`
        message += `  Subtotal: $${(item.price * item.quantity).toLocaleString()}\n\n`
      })
    }
    
    // Agregar cursos
    if (courses.length > 0) {
      message += "🎓 *CURSOS:*\n"
      courses.forEach(item => {
        message += `• ${item.name}\n`
        if (item.level) message += `  Nivel: ${item.level}\n`
        if (item.location) message += `  Ubicación: ${item.location}\n`
        if (item.duration) message += `  Duración: ${item.duration}\n`
        if (item.modalidad) message += `  Modalidad: ${item.modalidad}\n`
        message += `  Cantidad: ${item.quantity}\n`
        message += `  Precio unitario: $${item.price.toLocaleString()}\n`
        message += `  Subtotal: $${(item.price * item.quantity).toLocaleString()}\n\n`
      })
    }
    
    message += `💰 *TOTAL: $${currentTotal.toLocaleString()}*\n\n`
    message += "¡Quedo a la espera de más información para coordinar la compra! 😊"
    
    return encodeURIComponent(message)
  }, [items])

  // Prevenir hydration mismatch
  if (!mounted) {
    return (
      <CartContext.Provider value={{
        items: [],
        itemCount: 0,
        totalPrice: 0,
        total: 0,
        addItem: () => {},
        removeItem: () => {},
        updateQuantity: () => {},
        clearCart: () => {},
        generateWhatsAppMessage: () => '',
      }}>
        {children}
      </CartContext.Provider>
    )
  }

  return (
    <CartContext.Provider value={{
      items,
      itemCount,
      totalPrice,
      total: totalPrice, // Alias para compatibilidad
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      generateWhatsAppMessage,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}