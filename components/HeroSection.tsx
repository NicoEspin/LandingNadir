"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Fish, Award, MapPin } from "lucide-react"

interface HeroSectionProps {
  onSectionChange: (section: string) => void
}

export function HeroSection({ onSectionChange }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-water-gradient">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Fish className="h-16 w-16 text-nadir-red" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nadir Pescas</h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200">Tu destino para la pesca deportiva en la Patagonia</p>

          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Descubre los mejores productos de pesca y aprende con Johann Nadir, instructor especializado con años de
            experiencia en aguas patagónicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-nadir-red hover:bg-nadir-red/90 text-white"
              onClick={() => onSectionChange("products")}
            >
              Ver Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              onClick={() => onSectionChange("courses")}
            >
              Explorar Cursos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Award className="h-8 w-8 text-nadir-red mx-auto mb-2" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-gray-300">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <Fish className="h-8 w-8 text-nadir-red mx-auto mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-gray-300">Productos Disponibles</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-nadir-red mx-auto mb-2" />
              <div className="text-2xl font-bold">10+</div>
              <div className="text-gray-300">Ubicaciones de Cursos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
