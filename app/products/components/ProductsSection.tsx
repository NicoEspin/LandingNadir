"use client"

import { Button } from "@/components/ui/button"
import { mockProducts } from "@/lib/mockData"
import { Filter, Package } from "lucide-react"
import { useState } from "react"
import { ProductCard } from "./ProductCard"

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "Todos", icon: Package },
    { id: "cañas", label: "Cañas", icon: Package },
    { id: "reels", label: "Reels", icon: Package },
    { id: "señuelos", label: "Señuelos", icon: Package },
    { id: "accesorios", label: "Accesorios", icon: Package },
  ]

  const filteredProducts =
    selectedCategory === "all" ? mockProducts : mockProducts.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full mb-6">
            <Package className="h-8 w-8 text-[#FF4444]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4444] to-red-600 bg-clip-text text-transparent">
            Nuestros Productos
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Equipamiento de primera calidad para pescadores exigentes. Seleccionados especialmente para la Patagonia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="h-5 w-5 text-[#FF4444]" />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Filtrar por categoría</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  transition-all duration-300 hover:scale-105
                  ${selectedCategory === category.id 
                    ? "bg-[#FF4444] hover:bg-[#FF4444]/90 text-white shadow-lg" 
                    : "hover:bg-[#FF4444]/10 hover:border-[#FF4444] hover:text-[#FF4444]"
                  }
                `}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} item={product} type="product" />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full mb-6">
              <Package className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">
              No hay productos disponibles
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              No hay productos disponibles en esta categoría en este momento.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FF4444] mb-2">{mockProducts.length}</div>
              <div className="text-slate-600 dark:text-slate-300">Productos Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF4444] mb-2">{categories.length - 1}</div>
              <div className="text-slate-600 dark:text-slate-300">Categorías</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF4444] mb-2">20+</div>
              <div className="text-slate-600 dark:text-slate-300">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}