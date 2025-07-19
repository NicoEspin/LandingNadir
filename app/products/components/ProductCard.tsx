"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, AlertCircle, Star, MapPin, Clock, TrendingUp, Check, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "@/hooks/useCart"

// Función helper para formatear precios de manera consistente
const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// Tipos para productos y cursos
type Product = {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  inStock: boolean
}

type Course = {
  id: number
  name: string
  description: string
  price: number
  priceOnline?: number
  location: string
  duration: string
  level: string
  image: string
  available: boolean
  modalidad?: string
  fechaInicio?: string
  fechaFin?: string
  horario?: string
  dias?: string
  incluye?: string
}

interface ProductCardProps {
  item: Product | Course
  type: "product" | "course"
}

export function ProductCard({ item, type }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const isAvailable = type === "product" ? (item as Product).inStock : (item as Course).available

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id.toString(), // Convertir a string para compatibilidad
      name: item.name,
      price: item.price,
      type: type as "product" | "course",
      image: item.image,
      ...(type === "course" && {
        location: (item as Course).location,
        duration: (item as Course).duration,
        level: (item as Course).level,
        modalidad: (item as Course).modalidad
      }),
      ...(type === "product" && {
        category: (item as Product).category
      })
    }

    addItem(cartItem)
    
    // Mostrar feedback visual
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={400}
            height={250}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Stock/Availability badge */}
          {!isAvailable && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <Badge variant="destructive" className="text-sm font-semibold px-4 py-2">
                <AlertCircle className="h-4 w-4 mr-2" />
                {type === "product" ? "Sin Stock" : "No Disponible"}
              </Badge>
            </div>
          )}

          {/* Price badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-[#FF4444] hover:bg-[#FF4444]/90 text-white font-bold px-3 py-1 text-lg">
              ${formatPrice(item.price)}
            </Badge>
          </div>

          {/* Category badge for products */}
          {type === "product" && (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 font-medium">
                {(item as Product).category}
              </Badge>
            </div>
          )}

          {/* Course type badge */}
          {type === "course" && (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium">
                Curso
              </Badge>
            </div>
          )}

          {/* Ver detalles button - aparece en hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={`/${type === "product" ? "products" : "courses"}/${item.id}`}>
              <Button 
                variant="secondary" 
                className="bg-white/90 hover:bg-white text-slate-800 font-semibold shadow-lg backdrop-blur-sm"
              >
                <Eye className="h-4 w-4 mr-2" />
                Ver Detalles
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-3 line-clamp-2 text-slate-800 dark:text-slate-100 group-hover:text-[#FF4444] transition-colors duration-300">
          {item.name}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {item.description}
        </p>

        {/* Course specific information */}
        {type === "course" && (
          <div className="space-y-3 mb-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg border-l-4 border-l-[#FF4444]">
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-[#FF4444] flex-shrink-0" />
              <span className="font-medium text-slate-600 dark:text-slate-300">Ubicación:</span>
              <span className="text-slate-800 dark:text-slate-100 font-semibold">{(item as Course).location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4 text-[#FF4444] flex-shrink-0" />
              <span className="font-medium text-slate-600 dark:text-slate-300">Duración:</span>
              <span className="text-slate-800 dark:text-slate-100 font-semibold">{(item as Course).duration}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <TrendingUp className="h-4 w-4 text-[#FF4444] flex-shrink-0" />
              <span className="font-medium text-slate-600 dark:text-slate-300">Nivel:</span>
              <Badge variant="outline" className="text-xs border-[#FF4444] text-[#FF4444]">
                {(item as Course).level}
              </Badge>
            </div>
            {(item as Course).modalidad && (
              <div className="flex items-center gap-3 text-sm">
                <span className="font-medium text-slate-600 dark:text-slate-300">Modalidad:</span>
                <span className="text-slate-800 dark:text-slate-100 font-semibold">{(item as Course).modalidad}</span>
              </div>
            )}
          </div>
        )}

        {/* Rating stars (mock) */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-400">(4.8)</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <Button
          onClick={handleAddToCart}
          disabled={!isAvailable}
          className={`
            w-full font-semibold py-3 text-base transition-all duration-300 transform
            ${isAvailable 
              ? isAdded
                ? "bg-green-500 hover:bg-green-600 text-white scale-105 shadow-lg"
                : "bg-[#FF4444] hover:bg-[#FF4444]/90 hover:scale-105 hover:shadow-lg text-white"
              : "bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed"
            }
          `}
        >
          {!isAvailable ? (
            <>
              <AlertCircle className="h-5 w-5 mr-2" />
              {type === "product" ? "Sin Stock" : "No Disponible"}
            </>
          ) : isAdded ? (
            <>
              <Check className="h-5 w-5 mr-2" />
              ¡Agregado!
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Agregar al Carrito
            </>
          )}
        </Button>
        
        <Link href={`/${type === "product" ? "products" : "courses"}/${item.id}`} className="w-full">
          <Button 
            variant="outline" 
            className="w-full font-semibold py-3 text-base border-[#FF4444] text-[#FF4444] hover:bg-[#FF4444] hover:text-white transition-all duration-300"
          >
            <Eye className="h-5 w-5 mr-2" />
            Ver Detalles
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}