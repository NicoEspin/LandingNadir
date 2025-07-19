import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, Briefcase } from "lucide-react"

export function ExperienceTimeline() {
  const experiences = [
    {
      year: "2005",
      title: "Inicio en la Pesca con Mosca",
      description: "Primeras capacitaciones de lanzamiento básico",
      location: "Casa de Pesca Arco Iris, Plottier",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2006-2014",
      title: "Formación Integral",
      description: "Capacitaciones en atado de moscas, técnicas de lanzamiento y entomología",
      location: "Con Rubén Martin, Efraín Castro y Pablo Saracco",
      icon: GraduationCap,
      type: "education",
      highlights: ["Atado de moscas", "Técnicas de pesca", "Entomología acuática", "Lectura de aguas"]
    },
    {
      year: "2015",
      title: "Guía Profesional",
      description: "Certificación como guía de pesca profesional",
      location: "Provincia de Neuquén",
      icon: Award,
      type: "certification"
    },
    {
      year: "2016",
      title: "Técnicas Europeas",
      description: "Capacitación en técnicas españolas de competición",
      location: "Con Fernando Mosso (MCI - IFFF)",
      icon: GraduationCap,
      type: "education",
      highlights: ["Técnicas francesas", "Pesca al hilo", "Pedagogía de enseñanza"]
    },
    {
      year: "2017",
      title: "Instructor Certificado",
      description: "Certificación en Escuela Andes Anglers",
      location: "Mendoza",
      icon: Award,
      type: "certification"
    },
    {
      year: "2019",
      title: "Perfeccionamiento Avanzado",
      description: "Capacitación con el campeón mundial",
      location: "Con David García Ferreras",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2020-2021",
      title: "Instructor Nacional",
      description: "Certificación nivel 1 y 2, AAPM Nacional",
      location: "Escuela Andes Anglers / AAPM",
      icon: Award,
      type: "certification"
    },
    {
      year: "2013-Presente",
      title: "Actividad Profesional",
      description: "Atado, guiado e instrucción independiente",
      location: "Neuquén y Mendoza",
      icon: Briefcase,
      type: "work"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education": return "bg-blue-100 dark:bg-blue-900 border-blue-200 dark:border-blue-700"
      case "certification": return "bg-[#FF4444]/10 dark:bg-[#FF4444]/20 border-[#FF4444]/20"
      case "work": return "bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-700"
      default: return "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "education": return "text-blue-600 dark:text-blue-400"
      case "certification": return "text-[#FF4444]"
      case "work": return "text-green-600 dark:text-green-400"
      default: return "text-slate-600 dark:text-slate-400"
    }
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Trayectoria Profesional
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Dos décadas de formación continua y dedicación a la pesca con mosca
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF4444] to-red-600 transform md:-translate-x-px"></div>

            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#FF4444] rounded-full border-4 border-white dark:border-slate-900 transform md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 ml-16 md:ml-0' : 'md:pl-8 ml-16 md:ml-0'}`}>
                  <Card className={`${getTypeColor(experience.type)} hover:shadow-lg transition-shadow`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${getTypeColor(experience.type)}`}>
                          <experience.icon className={`h-5 w-5 ${getIconColor(experience.type)}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs font-semibold text-[#FF4444] border-[#FF4444]/30">
                              {experience.year}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
                            {experience.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 mb-2">
                            {experience.description}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                            {experience.location}
                          </p>
                          {experience.highlights && (
                            <div className="flex flex-wrap gap-1">
                              {experience.highlights.map((highlight, highlightIndex) => (
                                <Badge key={highlightIndex} variant="secondary" className="text-xs">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}