import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, Heart, Mail, MapPin, Phone, Target, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const credentials = [
    "Guía de pesca profesional de la Provincia de Neuquén",
    "Instructor de pesca y lanzamiento nivel 1 y 2 - Escuela Andes Anglers",
    "Instructor de lanzamiento a nivel nacional - AAPM",
    "Especialista en técnicas europeas de ninfas y secas",
    "Atador profesional de moscas"
  ]

  const values = [
    {
      icon: Heart,
      title: "Pasión",
      description: "20 años dedicados a la pesca con mosca en la Patagonia argentina.",
    },
    {
      icon: GraduationCap,
      title: "Formación",
      description: "Capacitación continua con los mejores instructores nacionales e internacionales.",
    },
    {
      icon: Target,
      title: "Especialización",
      description: "Experto en técnicas europeas, francesas y tradicionales de pesca.",
    },
    {
      icon: Users,
      title: "Enseñanza",
      description: "Instructor certificado con metodología personalizada para cada pescador.",
    },
  ]

  const destinations = [
    { name: "Junín de los Andes", rivers: ["Chimehuín", "Malleo", "Collón Curá", "Aluminé"] },
    { name: "Aluminé", rivers: ["Pulmarí", "Ruca Choroy", "Litrán", "Quillén"] },
    { name: "Limay Medio", rivers: ["Picún Leufú", "Piedra del Águila"] },
    { name: "Limay Inferior", rivers: ["Arroyito", "Senillosa", "China Muerta"] }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4444] to-red-600 bg-clip-text text-transparent">
            Nadir Luna
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Guía e Instructor de Pesca con Mosca
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {credentials.map((credential, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1">
                {credential}
              </Badge>
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Nadir Luna - Guía de Pesca Profesional"
                width={500}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Contact Info Card */}
            <Card className="absolute -bottom-8 -right-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-[#FF4444]/20">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-[#FF4444]" />
                    <span>+549-2994022167</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-[#FF4444]" />
                    <span>nadirmoscas@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-[#FF4444]" />
                    <span>Neuquén, Argentina</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                Mi Trayectoria
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Desde 2005, mi pasión por la pesca con mosca me ha llevado por un camino de 
                  aprendizaje continuo y dedicación absoluta. Comencé con capacitaciones básicas 
                  de lanzamiento y, a lo largo de casi dos décadas, he perfeccionado mi técnica 
                  con los mejores instructores de Argentina y España.
                </p>
                <p>
                  Mi formación incluye técnicas tradicionales, europeas y francesas de pesca, 
                  entomología acuática, atado profesional de moscas y pedagogía especializada 
                  para la enseñanza. Esta combinación me permite ofrecer una experiencia 
                  integral y personalizada a cada pescador.
                </p>
                <p>
                  Como guía profesional certificado de la Provincia de Neuquén e instructor 
                  nacional de la AAPM, mi compromiso es transmitir no solo técnicas de pesca, 
                  sino también el respeto y la conservación de nuestros ecosistemas patagónicos.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#FF4444]" />
                Experiencia
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Instructor Certificado</span>
                  <span className="text-[#FF4444]">2017 - Presente</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Guía Profesional</span>
                  <span className="text-[#FF4444]">2015 - Presente</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Atador Profesional</span>
                  <span className="text-[#FF4444]">2013 - Presente</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
            Mi Enfoque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#FF4444]">
                <CardContent className="p-6">
                  <div className="bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[#FF4444]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-100">{value.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
            Destinos de Pesca
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-lg mb-3 text-[#FF4444]">{destination.name}</h4>
                <div className="space-y-1">
                  {destination.rivers.map((river, riverIndex) => (
                    <Badge key={riverIndex} variant="secondary" className="text-xs mr-1 mb-1">
                      {river}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}