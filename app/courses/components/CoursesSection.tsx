"use client"

import { Button } from "@/components/ui/button"
import { mockCourses } from "@/lib/mockData"
import { Calendar, Clock, Filter, GraduationCap, MapPin, Users } from "lucide-react"
import { useState } from "react"
import { ProductCard } from "../../products/components/ProductCard"

export function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedModalidad, setSelectedModalidad] = useState<string>("all")

  const categories = [
    { id: "all", label: "Todos", icon: GraduationCap },
    { id: "atado", label: "Atado de Moscas", icon: GraduationCap },
    { id: "tecnicas", label: "Técnicas de Pesca", icon: GraduationCap },
    { id: "entomologia", label: "Entomología", icon: GraduationCap },
    { id: "combo", label: "Cursos Completos", icon: GraduationCap },
  ]

  const modalidades = [
    { id: "all", label: "Todas las modalidades" },
    { id: "presencial", label: "Presencial" },
    { id: "online", label: "Online" },
    { id: "presencial-online", label: "Presencial + Online" },
  ]

  const filteredCourses = mockCourses.filter((course) => {
    const categoryMatch = selectedCategory === "all" || course.category === selectedCategory
    const modalidadMatch = selectedModalidad === "all" || course.modalidad.includes(selectedModalidad)
    return categoryMatch && modalidadMatch
  })

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full mb-6">
            <GraduationCap className="h-8 w-8 text-[#FF4444]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4444] to-red-600 bg-clip-text text-transparent">
            Nuestros Cursos
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Aprende las mejores técnicas de pesca con mosca y atado. Cursos diseñados especialmente para la Patagonia argentina.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl mb-12">
          {/* Category Filter */}
          <div className="mb-8">
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

          {/* Modalidad Filter */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-5 w-5 text-[#FF4444]" />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Modalidad</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {modalidades.map((modalidad) => (
                <Button
                  key={modalidad.id}
                  variant={selectedModalidad === modalidad.id ? "default" : "outline"}
                  onClick={() => setSelectedModalidad(modalidad.id)}
                  className={`
                    transition-all duration-300 hover:scale-105
                    ${selectedModalidad === modalidad.id 
                      ? "bg-[#FF4444] hover:bg-[#FF4444]/90 text-white shadow-lg" 
                      : "hover:bg-[#FF4444]/10 hover:border-[#FF4444] hover:text-[#FF4444]"
                    }
                  `}
                >
                  {modalidad.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <ProductCard 
                key={course.id} 
                item={{
                  id: course.id,
                  name: course.name,
                  description: course.description,
                  price: course.price,
                  location: course.location,
                  duration: course.duration,
                  level: course.level,
                  image: course.image,
                  available: course.available
                }} 
                type="course" 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full mb-6">
              <GraduationCap className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">
              No hay cursos disponibles
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              No hay cursos disponibles con los filtros seleccionados en este momento.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FF4444] mb-2">{mockCourses.length}</div>
              <div className="text-slate-600 dark:text-slate-300">Cursos Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF4444] mb-2">3</div>
              <div className="text-slate-600 dark:text-slate-300">Modalidades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF4444] mb-2">500+</div>
              <div className="text-slate-600 dark:text-slate-300">Alumnos Formados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF4444] mb-2">10+</div>
              <div className="text-slate-600 dark:text-slate-300">Años de Experiencia</div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Presencial Info */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-[#FF4444]" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Clases Presenciales</h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#FF4444]" />
                <span>Horarios flexibles a elección del alumno</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#FF4444]" />
                <span>Clases personalizadas en Neuquén Capital</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-[#FF4444]" />
                <span>Materiales y herramientas incluidos</span>
              </div>
              <p className="text-sm mt-4">
                Sin límites de clases semanales. El alumno elige día y horario que más cómodo le quede.
              </p>
            </div>
          </div>

          {/* Online Info */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-[#FF4444]" />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Clases Online</h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#FF4444]" />
                <span>Lunes, Miércoles y Jueves a las 21:00 hs</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#FF4444]" />
                <span>Plataforma Zoom - Clases personalizadas</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-[#FF4444]" />
                <span>Lista de materiales proporcionada</span>
              </div>
              <p className="text-sm mt-4">
                El alumno deberá reunir o solicitarnos los materiales antes de cada clase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}