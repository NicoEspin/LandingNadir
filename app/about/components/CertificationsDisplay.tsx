import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Star, Shield, Users, Globe } from "lucide-react"

export function CertificationsDisplay() {
  const mainCertifications = [
    {
      icon: Shield,
      title: "Guía Profesional",
      organization: "Provincia de Neuquén",
      year: "2015",
      description: "Habilitación oficial para guiar pesca deportiva en la provincia",
      level: "Profesional",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Instructor Nivel 1 y 2",
      organization: "Escuela Andes Anglers",
      year: "2017-2020",
      description: "Certificación en técnicas de lanzamiento y pesca con mosca",
      level: "Avanzado",
      color: "bg-[#FF4444]"
    },
    {
      icon: Globe,
      title: "Instructor Nacional",
      organization: "Asociación Argentina de Pesca con Mosca (AAPM)",
      year: "2021",
      description: "Certificación para instruir a nivel nacional en lanzamiento",
      level: "Nacional",
      color: "bg-green-500"
    },
    {
      icon: Star,
      title: "Técnicas Europeas",
      organization: "Fernando Mosso (MCI - IFFF)",
      year: "2016",
      description: "Especialización en técnicas españolas de competición",
      level: "Especialista",
      color: "bg-purple-500"
    }
  ]

  const specializations = [
    {
      category: "Técnicas de Pesca",
      skills: [
        "Técnicas europeas de ninfas",
        "Técnicas francesas",
        "Pesca con secas tradicionales",
        "Pesca al hilo",
        "New Zealand style",
        "Streamers con equipamiento de una mano"
      ]
    },
    {
      category: "Atado de Moscas",
      skills: [
        "Moscas secas clásicas",
        "Ninfas europeas",
        "Terrestres",
        "Streamers",
        "Moscas de competición",
        "Patrones patagónicos"
      ]
    },
    {
      category: "Enseñanza",
      skills: [
        "Pedagogía especializada",
        "Cursos personalizados",
        "Entomología acuática",
        "Lectura de aguas",
        "Configuración de equipos",
        "PNL aplicada a la enseñanza"
      ]
    }
  ]

  const achievements = [
    {
      year: "2019",
      title: "Capacitación con Campeón Mundial",
      description: "Entrenamiento con David García Ferreras, campeón mundial de pesca con mosca"
    },
    {
      year: "2018",
      title: "Formación en PNL",
      description: "Cursos online de Programación Neurolingüística y oratoria para grupos"
    },
    {
      year: "2016",
      title: "Único en Sudamérica",
      description: "Certificación con Fernando Mosso en técnicas españolas (único instructor en la región)"
    },
    {
      year: "2023",
      title: "Formación Continua",
      description: "Iniciando estudios de inglés para ampliar servicios internacionales"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            Certificaciones y Especialidades
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Formación continua y certificaciones que respaldan la excelencia en cada servicio
          </p>
        </div>

        {/* Main Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainCertifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#FF4444]">
              <CardContent className="p-6 text-center">
                <div className={`mx-auto w-16 h-16 ${cert.color} bg-opacity-10 rounded-full flex items-center justify-center mb-4`}>
                  <cert.icon className={`h-8 w-8 ${cert.color.replace('bg-', 'text-')}`} />
                </div>
                
                <Badge variant="outline" className="text-xs mb-3 text-[#FF4444] border-[#FF4444]/30">
                  {cert.year}
                </Badge>
                
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-medium text-[#FF4444] mb-2">
                  {cert.organization}
                </p>
                
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                  {cert.description}
                </p>
                
                <Badge className={`${cert.color} text-white text-xs`}>
                  {cert.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
            Áreas de Especialización
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 text-[#FF4444] flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {spec.category}
                  </h4>
                  
                  <div className="space-y-2">
                    {spec.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <div className="w-2 h-2 bg-[#FF4444] rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
            Logros Destacados
          </h3>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <Badge variant="outline" className="text-[#FF4444] border-[#FF4444]/30 flex-shrink-0">
                  {achievement.year}
                </Badge>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FF4444] to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experiencia que Marca la Diferencia
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Más de 18 años de formación continua al servicio de tu experiencia de pesca
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                +18 años de experiencia
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Certificaciones nacionales
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Técnicas internacionales
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}