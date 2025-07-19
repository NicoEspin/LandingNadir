export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: "cañas" | "reels" | "señuelos" | "accesorios"
  description: string
  inStock: boolean
}

export interface Course {
  id: string
  name: string
  price: number
  image: string
  location: string
  season: string
  description: string
  duration: string
  level: "Inicial" | "Intermedio" | "Avanzado"
  available: boolean
}

export interface CartItem {
  id: string
  name: string
  price: number
  type: "product" | "course"
  quantity: number
}
