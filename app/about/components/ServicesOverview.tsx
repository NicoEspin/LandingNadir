import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Fish, 
  GraduationCap, 
  Map, 
  Camera, 
  Users, 
  Clock, 
  MapPin, 
  DollarSign,
  Compass,
  Target,
  BookOpen
} from "lucide-react"

export function ServicesOverview() {
  const serviceTypes = [
    {
      icon: Fish,
      title: "Salidas Guiadas",
      description: "Experiencias personalizadas de pesca en los mejores ríos patagónicos",
      features: ["Vadeo y Flotada", "Equipamiento incluido", "Almuerzo en el río", "Transfer incluido"],
      price: "Desde USD 250",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Instrucción Técnica",
      description: "Capacitaciones especializadas en técnicas de pesca y lanzamiento",
      features: ["Técnicas europeas", "Lectura de aguas", "Configuración de equipo", "Metodología personalizada"],
      price: "Consultar",
      color: "bg-[#FF4444]"
    },
    {
      icon: Target,
      title: "Moscas Artesanales",
      description: "Atado profesional de moscas para todas las técnicas y ambientes",
      features: ["Moscas secas", "Ninfas", "Terrestres", "Streamers"],
      price: "Desde USD 3",
      color: "bg-green-500"
    }
  ]

  const techniques = [
    "Secas con tippet compuesto de 20 pies",
    "Pesca con terrestres y tándem",
    "Seca ninfas con hilo y línea",
    "Dual nymph",
    "Técnicas francesas de ninfa",
    "Pesca al hilo",
    "New Zealand con línea e hilo",
    "Técnicas con streamers"
  ]

  const destinations = [
    {
      name: "Junín de los Andes",
      price: { vadeo: 250, flotada: 350 },
      rivers: ["Chimehuín", "Malleo", "Collón Curá", "Aluminé inferior"]
    },
    {
      name: "Aluminé",
      price: { vadeo: 250, flotada: 350 },
      rivers: ["Pulmarí", "Ruca Choroy", "Litrán", "Quillén"]
    },
    {
      name: "Limay Medio",
      price: { vadeo: 300, flotada: 400 },
      rivers: ["Picún Leufú", "Piedra del Águila"]
    },
    {
      name: "Limay Inferior",
      price: { vadeo: 100, flotada: 200 },
      rivers: ["Arroyito", "Senillosa", "China Muerta"]
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            Servicios Especializados
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Experiencias diseñadas a medida para cada pescador, desde principiantes hasta expertos
          </p>
        </div>

        {/* Service Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {serviceTypes.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-[#FF4444]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${service.color} bg-opacity-10`}>
                    <service.icon className={`h-6 w-6 ${service.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{service.title}</h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#FF4444] rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-[#FF4444] border-[#FF4444]/30">
                    {service.price}
                  </Badge>
                  <Button variant="outline" size="sm" className="border-[#FF4444] text-[#FF4444] hover:bg-[#FF4444] hover:text-white">
                    Consultar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Techniques Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Técnicas Especializadas
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Dominio de las técnicas más avanzadas y efectivas para cada situación de pesca
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techniques.map((technique, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                  <BookOpen className="h-4 w-4 text-[#FF4444] flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{technique}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Destinations and Pricing */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Destinos y Tarifas
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Precios en base doble (USD Blue) - Sin alojamiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-[#FF4444]" />
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                      {destination.name}
                    </h4>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-300">Vadeo</span>
                      <Badge variant="secondary">USD {destination.price.vadeo}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-300">Flotada</span>
                      <Badge variant="secondary">USD {destination.price.flotada}</Badge>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Ríos disponibles:</p>
                    <div className="flex flex-wrap gap-1">
                      {destination.rivers.map((river, riverIndex) => (
                        <Badge key={riverIndex} variant="outline" className="text-xs">
                          {river}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              * Precios con alojamiento: +USD 100 por día
            </p>
            <Button className="bg-[#FF4444] hover:bg-red-600 text-white">
              Ver Detalles Completos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}