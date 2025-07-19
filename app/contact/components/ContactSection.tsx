
"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Navigation, Calendar } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "2994022167",
      action: "tel:2994022167",
      description: "Llamada directa"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "2994022167",
      action: "https://wa.link/2994022167",
      description: "Respuesta inmediata"
    },
    {
      icon: Mail,
      title: "Email",
      content: "nadirmoscas@gmail.com",
      action: "mailto:nadirmoscas@gmail.com",
      description: "Consultas detalladas"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Neuquén, Argentina",
      action: null,
      description: "Patagonia Argentina"
    },
  ]

  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 - 18:00" },
    { day: "Sábados", hours: "9:00 - 15:00" },
    { day: "Domingos", hours: "Cerrado" },
  ]

  const services = [
    "Consultas sobre productos y disponibilidad",
    "Reservas de cursos y fechas disponibles", 
    "Asesoramiento personalizado para equipamiento",
    "Información sobre ubicaciones de pesca",
    "Planificación de jornadas de pesca guiada",
    "Técnicas de lanzamiento y perfeccionamiento"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4444] to-red-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="outline" className="text-sm py-1">
              Johann Nadir - Guía Profesional
            </Badge>
            <Badge variant="outline" className="text-sm py-1">
              Respuesta garantizada en 24hs
            </Badge>
            <Badge variant="outline" className="text-sm py-1">
              Consultas sin compromiso
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                Información de Contacto
              </h3>
              
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#FF4444] group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-[#FF4444]/20 dark:group-hover:bg-[#FF4444]/30 transition-colors">
                          <info.icon className="h-6 w-6 text-[#FF4444]" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{info.title}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{info.description}</div>
                          {info.action ? (
                            <a
                              href={info.action}
                              className="text-[#FF4444] hover:text-red-600 transition-colors font-medium"
                              target={info.action.startsWith("http") ? "_blank" : undefined}
                              rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <div className="text-slate-600 dark:text-slate-300 font-medium">{info.content}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <Card className="border-l-4 border-l-[#FF4444]">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#FF4444]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">Horarios de Atención</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Tiempo de respuesta garantizado</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">{item.day}</span>
                      <Badge variant="secondary" className="bg-[#FF4444]/10 text-[#FF4444] hover:bg-[#FF4444]/20">
                        {item.hours}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA and Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                ¿Listo para tu próxima aventura?
              </h3>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-br from-[#FF4444] to-red-600 text-white mb-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Contáctanos por WhatsApp</h4>
                  <p className="mb-6 text-red-100 leading-relaxed">
                    La forma más rápida de resolver tus dudas y hacer tu reserva. 
                    Respuesta inmediata de Johann Nadir.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#FF4444] hover:bg-gray-100 hover:text-red-600 font-semibold"
                    onClick={() => window.open("https://wa.link/2994022167", "_blank")}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Email CTA */}
              <Card className="border-l-4 border-l-[#FF4444] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full w-12 h-12 flex items-center justify-center">
                      <Send className="h-6 w-6 text-[#FF4444]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">Consultas por Email</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Para consultas más detalladas</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#FF4444] text-[#FF4444] hover:bg-[#FF4444] hover:text-white"
                    onClick={() => window.open("mailto:nadirmoscas@gmail.com", "_blank")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Services */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl">
              <CardContent className="p-8">
                <h4 className="font-bold text-xl mb-6 text-slate-800 dark:text-slate-100 flex items-center gap-3">
                  <Navigation className="h-6 w-6 text-[#FF4444]" />
                  ¿En qué podemos ayudarte?
                </h4>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <div className="w-2 h-2 bg-[#FF4444] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-slate-100 dark:bg-slate-800 border-l-4 border-l-[#FF4444]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-[#FF4444]" />
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">Tiempo de Respuesta</h4>
                </div>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">Inmediato</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">24 horas</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Llamadas:</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">Horario comercial</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}