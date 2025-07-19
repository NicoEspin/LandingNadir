// lib/mockData.ts
export type Product = {
  id: number
  name: string
  description: string
  fullDescription?: string
  price: number
  category: string
  image: string
  inStock: boolean
  features?: string[]
  specifications?: Record<string, string>
  rating?: number
  reviews?: number
}

export type Course = {
  id: number
  name: string
  description: string
  fullDescription?: string
  price: number
  priceOnline?: number
  location: string
  duration: string
  level: string
  image: string
  available: boolean
  category: string
  modalidad: string
  fechaInicio?: string
  fechaFin?: string
  horario?: string
  dias?: string
  incluye?: string
  instructor?: string
  experiencia?: string
  maxStudents?: number
  currentStudents?: number
  features?: string[]
  specifications?: Record<string, string>
  rating?: number
  reviews?: number
  contenido?: string[]
  requisitos?: string[]
  beneficios?: string[]
}

// Función helper para formatear precios de manera consistente
export const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// Mock data centralizado para cursos
export const mockCourses: Course[] = [
  {
    id: 1,
    name: "Curso de Atado Módulo 1 - Streamers",
    description: "Curso introductorio al atado de moscas. Aprende herramientas, materiales, técnicas básicas y ata moscas como Wolly Bugers, Leonis Barbarus, Bichon Fly y más.",
    fullDescription: "Este curso está diseñado para quienes se inician en el fascinante mundo del atado de moscas. A lo largo de 6 clases intensivas, aprenderás desde los conceptos más básicos hasta técnicas avanzadas para crear streamers efectivos. Nuestro enfoque práctico te permitirá dominar las herramientas, conocer los materiales y desarrollar la destreza necesaria para atar moscas que realmente pescan.",
    price: 15000,
    priceOnline: 10000,
    location: "Neuquén Capital / Online",
    duration: "6 clases",
    level: "Principiante",
    image: "/placeholder.svg?height=300&width=400",
    available: true,
    category: "atado",
    modalidad: "presencial-online",
    fechaInicio: "9 de Julio",
    fechaFin: "1 de Septiembre",
    horario: "21:00 hs",
    dias: "Lunes, Miércoles y Jueves",
    incluye: "Materiales y herramientas incluidos",
    instructor: "Carlos Mendoza",
    experiencia: "15 años de experiencia",
    maxStudents: 8,
    currentStudents: 5,
    rating: 4.9,
    reviews: 32,
    contenido: [
      "Introducción al atado - Wolly Bugers",
      "Patas de goma y movimientos - Leonis Barbarus, Patudas, Yuk Bug",
      "Lastres y equilibrio - Bichon Fly, Thin Mint",
      "Lacas UV y ojos 3D - Rabbit, Zonkers, Buney Leech",
      "Imitaciones de peces - Matuka, Mikey Fin, Martin Minnow",
      "Cabezas especiales - Peje de Craft, Sunrray, Rabbit Muddler"
    ],
    requisitos: [
      "No se requiere experiencia previa",
      "Ganas de aprender y paciencia",
      "Puntualidad en las clases"
    ],
    beneficios: [
      "Materiales y herramientas incluidos",
      "Certificado de finalización",
      "Acceso a grupo privado de WhatsApp",
      "Descuentos en productos de la tienda",
      "Videos de repaso disponibles 24/7"
    ]
  },
  {
    id: 2,
    name: "Curso de Atado Módulo 2 - Ninfas Buscadoras y Terrestres",
    description: "Especialízate en ninfas atractoras, secas atractoras y terrestres. Moscas probadas en el río con excelentes resultados para pescadores exigentes.",
    fullDescription: "Continuando con la formación en atado de moscas, este módulo se enfoca en técnicas más avanzadas para crear ninfas buscadoras y terrestres altamente efectivos. Aprenderás a trabajar con materiales especializados y técnicas que marcan la diferencia entre una mosca común y una verdaderamente irresistible para las truchas.",
    price: 12500,
    priceOnline: 10000,
    location: "Neuquén Capital / Online",
    duration: "5 clases",
    level: "Intermedio",
    image: "/placeholder.svg?height=300&width=400",
    available: true,
    category: "atado",
    modalidad: "presencial-online",
    fechaInicio: "9 de Julio",
    fechaFin: "1 de Septiembre",
    horario: "21:00 hs",
    dias: "Lunes, Miércoles y Jueves",
    incluye: "Materiales y herramientas incluidos",
    instructor: "Carlos Mendoza",
    experiencia: "15 años de experiencia",
    maxStudents: 8,
    currentStudents: 3,
    rating: 4.8,
    reviews: 28,
    contenido: [
      "Terrestres grandes - Madame X, Fat Albert, Chubby Chernobyl",
      "Insectos terrestres - Foam Cicada, Rosaura, Hopper",
      "Atractoras especiales - Estimulator, PMX, San Juan Worm",
      "Ninfas clásicas - Zug Bug, Prince, Copper John",
      "Terrestres pequeños - Beetle, Hormiga, Irresistible Adams"
    ],
    requisitos: [
      "Haber completado Módulo 1 o experiencia equivalente",
      "Conocimientos básicos de herramientas",
      "Compromiso con la práctica"
    ],
    beneficios: [
      "Materiales premium incluidos",
      "Certificado de nivel intermedio",
      "Acceso a biblioteca de patrones",
      "Descuentos especiales en tienda",
      "Soporte técnico permanente"
    ]
  },
  {
    id: 3,
    name: "Curso de Atado Módulo 3 - Ninfas y Secas (Entomología Aplicada)",
    description: "Curso avanzado orientado a la imitación de insectos acuáticos. Incluye entomología básica aplicada a la pesca y técnicas de pesca específicas.",
    fullDescription: "El nivel más avanzado de nuestros cursos de atado, donde la técnica se encuentra con la ciencia. Aprenderás entomología aplicada para crear imitaciones precisas de insectos acuáticos, combinando conocimiento teórico con habilidades prácticas avanzadas de atado.",
    price: 15000,
    priceOnline: 10000,
    location: "Neuquén Capital / Online",
    duration: "6 clases",
    level: "Avanzado",
    image: "/placeholder.svg?height=300&width=400",
    available: true,
    category: "atado",
    modalidad: "presencial-online",
    fechaInicio: "9 de Julio",
    fechaFin: "1 de Septiembre",
    horario: "21:00 hs",
    dias: "Lunes, Miércoles y Jueves",
    incluye: "Materiales y herramientas incluidos",
    instructor: "Dr. Ana García",
    experiencia: "20 años de experiencia en entomología",
    maxStudents: 6,
    currentStudents: 2,
    rating: 4.9,
    reviews: 21,
    contenido: [
      "Entomología básica - Tricópteros larvales (Larva Lice, Larva, Brassie)",
      "Pupas y adultos - Pupa de Caddis, Soft Hackle, Elk Caddis, CDC",
      "Efemerópteros - Pheasantail, Massarta (ninfas), Adams, Varón, CDC (secas)",
      "Odonatos - Dragon Fly, Damsel Fly (ninfas), Dragon Fly adulto",
      "Plecópteros - Stonefly (ninfas), CDC adultos, Triple Daker",
      "Dípteros - Pupas emergentes, Griffin Gnat, Perdigones"
    ],
    requisitos: [
      "Completar Módulo 1 y 2, o experiencia equivalente",
      "Conocimientos básicos de biología",
      "Dedicación a la práctica intensiva"
    ],
    beneficios: [
      "Kit completo de materiales premium",
      "Certificado de especialización",
      "Guía de entomología patagónica",
      "Acceso a biblioteca científica",
      "Mentoría personalizada"
    ]
  },
  {
    id: 4,
    name: "Curso Completo de Atado - 3 Módulos",
    description: "Curso integral que incluye los 3 módulos completos. Desde principiante hasta experto en atado de moscas con entomología aplicada.",
    fullDescription: "La formación más completa en atado de moscas disponible en la región. Este curso combo te llevará desde los fundamentos básicos hasta técnicas avanzadas de entomología aplicada, todo en un programa integral diseñado para formar verdaderos expertos en el arte del atado.",
    price: 40000,
    priceOnline: 28000,
    location: "Neuquén Capital / Online",
    duration: "17 clases",
    level: "Todos los niveles",
    image: "/placeholder.svg?height=300&width=400",
    available: true,
    category: "combo",
    modalidad: "presencial-online",
    fechaInicio: "9 de Julio",
    fechaFin: "1 de Septiembre",
    horario: "21:00 hs",
    dias: "Lunes, Miércoles y Jueves",
    incluye: "Todos los materiales y herramientas incluidos",
    instructor: "Equipo de instructores",
    experiencia: "Más de 50 años de experiencia combinada",
    maxStudents: 8,
    currentStudents: 1,
    rating: 4.9,
    reviews: 45,
    contenido: [
      "Módulo 1 completo - Streamers (6 clases)",
      "Módulo 2 completo - Ninfas Buscadoras y Terrestres (5 clases)",
      "Módulo 3 completo - Ninfas y Secas con Entomología (6 clases)"
    ],
    requisitos: [
      "No se requiere experiencia previa",
      "Compromiso con el curso completo",
      "Dedicación a la práctica regular"
    ],
    beneficios: [
      "Kit completo de herramientas profesionales",
      "Todos los materiales incluidos",
      "Certificado de especialización completa",
      "Descuento significativo vs cursos individuales",
      "Acceso de por vida a recursos",
      "Mentoría personalizada",
      "Grupo exclusivo de graduados"
    ]
  },
  {
    id: 5,
    name: "Técnicas de Pesca con Mosca - Patagonia",
    description: "Curso práctico de técnicas de pesca específicas para ríos patagónicos. Aprende a leer el agua, técnicas europeas y estrategias de pesca.",
    fullDescription: "Curso eminentemente práctico donde aplicarás todo el conocimiento teórico en los mejores ríos de la Patagonia. Aprenderás a leer el agua como un experto, dominarás las técnicas europeas más efectivas y desarrollarás estrategias específicas para diferentes condiciones de pesca.",
    price: 18000,
    priceOnline: 12000,
    location: "Río Neuquén / Online",
    duration: "4 salidas prácticas",
    level: "Intermedio",
    image: "/placeholder.svg?height=300&width=400",
    available: true,
    category: "tecnicas",
    modalidad: "presencial-online",
    fechaInicio: "15 de Julio",
    fechaFin: "15 de Agosto",
    horario: "08:00 hs",
    dias: "Sábados",
    incluye: "Equipo de pesca incluido",
    instructor: "Martín Rodriguez",
    experiencia: "25 años guiando en Patagonia",
    maxStudents: 4,
    currentStudents: 2,
    rating: 4.8,
    reviews: 17,
    contenido: [
      "Lectura del agua y comportamiento de truchas",
      "Técnicas europeas de ninfeo",
      "Pesca con moscas secas en Patagonia",
      "Estrategias para diferentes condiciones climáticas"
    ],
    requisitos: [
      "Conocimientos básicos de pesca con mosca",
      "Condición física para caminar en ríos",
      "Seguro personal vigente"
    ],
    beneficios: [
      "Equipo completo de pesca incluido",
      "Transporte a los ríos",
      "Almuerzo campestre",
      "Fotos y videos de la experiencia",
      "Certificado de técnicas avanzadas"
    ]
  },
  {
    id: 6,
    name: "Taller de Entomología Aplicada",
    description: "Taller especializado en identificación de insectos acuáticos y su importancia en la pesca con mosca. Ideal para perfeccionar la selección de moscas.",
    fullDescription: "Sumérgete en el fascinante mundo de la entomología aplicada a la pesca con mosca. Este taller intensivo te dará las herramientas científicas para entender el comportamiento de los insectos acuáticos y optimizar tu selección de moscas según las condiciones específicas del momento.",
    price: 8000,
    priceOnline: 6000,
    location: "Neuquén Capital / Online",
    duration: "2 clases intensivas",
    level: "Todos los niveles",
    image: "/placeholder.svg?height=300&width=400",
    available: true,
    category: "entomologia",
    modalidad: "presencial-online",
    fechaInicio: "20 de Julio",
    fechaFin: "27 de Julio",
    horario: "18:00 hs",
    dias: "Sábados",
    incluye: "Material de estudio incluido",
    instructor: "Dr. Ana García",
    experiencia: "PhD en Entomología Acuática",
    maxStudents: 12,
    currentStudents: 8,
    rating: 4.7,
    reviews: 23,
    contenido: [
      "Ciclos de vida de insectos acuáticos",
      "Identificación de especies patagónicas",
      "Momento óptimo para cada imitación",
      "Comportamiento de insectos y técnicas de pesca"
    ],
    requisitos: [
      "Interés en la biología acuática",
      "Conocimientos básicos de pesca con mosca",
      "Curiosidad científica"
    ],
    beneficios: [
      "Manual de entomología patagónica",
      "Kit de identificación de campo",
      "Acceso a base de datos digital",
      "Certificado de especialización",
      "Red de contactos científicos"
    ]
  }
]

// Mock data para productos (mantenemos el existente)
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Caña Sage X 9' #5",
    description: "Caña de pesca con mosca profesional, diseñada para precisión y control en técnicas europeas",
    fullDescription: "La Caña Sage X 9' #5 representa la culminación de décadas de innovación en el diseño de cañas de pesca con mosca. Fabricada con la más alta tecnología de carbono, esta caña ofrece una combinación perfecta de potencia, precisión y sensibilidad que la convierte en la herramienta ideal para pescadores exigentes.",
    price: 85000,
    category: "cañas",
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    features: [
      "Construcción en carbono de alta modularidad",
      "Acción rápida para máximo control",
      "Anillas Snake Brand de acero inoxidable",
      "Mango de corcho AAA seleccionado",
      "Peso optimizado para técnicas europeas",
      "Garantía de por vida del fabricante"
    ],
    specifications: {
      "Longitud": "9 pies (2.74m)",
      "Peso de línea": "#5",
      "Piezas": "4 piezas",
      "Peso": "125g",
      "Acción": "Rápida",
      "Tubo": "Incluido"
    },
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: "Reel Abel SDS 5/6",
    description: "Reel de alta gama con sistema de freno sellado, ideal para truchas de gran tamaño",
    fullDescription: "El Reel Abel SDS 5/6 es reconocido mundialmente como uno de los reels más precisos y duraderos del mercado. Su sistema de freno sellado garantiza un rendimiento constante en cualquier condición climática.",
    price: 120000,
    category: "reels",
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    features: [
      "Sistema de freno sellado Cork/Rulon",
      "Construcción en aluminio aeroespacial",
      "Carrete de arranque rápido",
      "Resistente a la corrosión",
      "Peso ultra liviano",
      "Garantía de por vida"
    ],
    specifications: {
      "Peso línea": "5/6",
      "Capacidad": "WF5F + 150yds 20lb",
      "Peso": "140g",
      "Material": "Aluminio 6061-T6",
      "Freno": "Cork/Rulon sellado",
      "Made in": "USA"
    },
    rating: 4.9,
    reviews: 18
  },
  {
    id: 3,
    name: "Set de Ninfas Europeas",
    description: "Colección de 24 moscas especializadas en técnicas europeas y francesas",
    fullDescription: "Este set exclusivo incluye las moscas más efectivas para la pesca con técnicas europeas. Cada mosca ha sido seleccionada y atada a mano por expertos, garantizando la máxima calidad y efectividad en ríos patagónicos.",
    price: 8500,
    category: "señuelos",
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    features: [
      "24 moscas de diferentes patrones",
      "Atadas a mano con materiales premium",
      "Anzuelos barbless de alta calidad",
      "Patrones específicos para Patagonia",
      "Incluye caja organizadora",
      "Guía de uso incluida"
    ],
    specifications: {
      "Cantidad": "24 unidades",
      "Tallas": "#12 a #18",
      "Anzuelos": "Barbless premium",
      "Caja": "Compartimentada",
      "Patrones": "Europeos clásicos",
      "Origen": "Artesanal"
    },
    rating: 4.7,
    reviews: 32
  },
  {
    id: 4,
    name: "Caña Orvis Helios 3D 10' #3",
    description: "Caña europea especializada para ninfeo, máxima sensibilidad y control",
    fullDescription: "La Orvis Helios 3D representa la evolución de las cañas para técnicas europeas. Su longitud de 10 pies y peso #3 la convierten en la herramienta perfecta para ninfeo de precisión en aguas técnicas.",
    price: 95000,
    category: "cañas",
    image: "/placeholder.svg?height=300&width=400",
    inStock: false,
    features: [
      "Diseño específico para técnicas europeas",
      "Acción progresiva ultra sensible",
      "Construcción Helios 3D technology",
      "Mango extendido para control total",
      "Anillas de titanio ultralivianas",
      "Tubo de aluminio incluido"
    ],
    specifications: {
      "Longitud": "10 pies (3.05m)",
      "Peso de línea": "#3",
      "Piezas": "4 piezas",
      "Peso": "98g",
      "Acción": "Progresiva",
      "Garantía": "25 años"
    },
    rating: 4.9,
    reviews: 15
  },
  {
    id: 5,
    name: "Línea Scientific Anglers Euro Nymph",
    description: "Línea especializada para técnicas europeas de ninfeo, máxima precisión",
    fullDescription: "Diseñada específicamente para técnicas de ninfeo europeo, esta línea ofrece la precisión y control necesarios para presentaciones delicadas y detección de picadas sutiles.",
    price: 12000,
    category: "accesorios",
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    features: [
      "Perfil especializado para ninfeo",
      "Cabeza corta para máximo control",
      "Acabado textureado antideslizante",
      "Colores de alta visibilidad",
      "Conexiones soldadas",
      "Resistente a la abrasión"
    ],
    specifications: {
      "Peso": "WF3F",
      "Longitud": "27.4 metros",
      "Cabeza": "6 metros",
      "Color": "Amarillo/Naranja",
      "Núcleo": "Multifilamento",
      "Flotabilidad": "Flotante"
    },
    rating: 4.6,
    reviews: 28
  },
  {
    id: 6,
    name: "Set Moscas Secas Patagónicas",
    description: "Imitaciones perfectas de los insectos más efectivos de la Patagonia",
    fullDescription: "Colección exclusiva de moscas secas diseñadas específicamente para imitar los insectos más comunes en ríos patagónicos. Perfectas para la pesca durante las eclosiones de temporada.",
    price: 7500,
    category: "señuelos",
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    features: [
      "18 patrones específicos de Patagonia",
      "Materiales de flotación premium",
      "Hackles de gallo selectos",
      "Anzuelos de alta penetración",
      "Resistentes a múltiples pescas",
      "Caja estanca incluida"
    ],
    specifications: {
      "Cantidad": "18 unidades",
      "Tallas": "#14 a #20",
      "Tipos": "Mayflies, Caddis, Midges",
      "Anzuelos": "Premium dry fly",
      "Flotación": "Excelente",
      "Durabilidad": "Alta"
    },
    rating: 4.8,
    reviews: 41
  },
  {
    id: 7,
    name: "Chaleco Fishpond Thunderhead",
    description: "Chaleco técnico con múltiples bolsillos y sistema de hidratación",
    fullDescription: "El chaleco más avanzado para el pescador moderno. Diseñado para largas jornadas de pesca, combina funcionalidad, comodidad y organización en un solo producto.",
    price: 25000,
    category: "accesorios",
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    features: [
      "14 bolsillos organizadores",
      "Sistema de hidratación integrado",
      "Malla transpirable en espalda",
      "Anillos para accesorios",
      "Tallas ajustables",
      "Resistente al agua"
    ],
    specifications: {
      "Bolsillos": "14 compartimentos",
      "Material": "Nylon ripstop",
      "Tallas": "S, M, L, XL",
      "Peso": "650g",
      "Hidratación": "2L compatible",
      "Color": "Olive"
    },
    rating: 4.5,
    reviews: 22
  },
  {
    id: 8,
    name: "Reel Lamson Guru S 3.5",
    description: "Reel ultraliviano para técnicas delicadas, perfecto para #3 y #4",
    fullDescription: "El Lamson Guru S combina peso ultraliviano con un sistema de freno suave y progresivo, ideal para la pesca delicada con líneas livianas en aguas técnicas.",
    price: 45000,
    category: "reels",
    image: "/placeholder.svg?height=300&width=400",
    inStock: true,
    features: [
      "Peso ultraliviano",
      "Sistema de freno conical-drag",
      "Construcción en aluminio forjado",
      "Carrete de arranque grande",
      "Anodizado duro",
      "Garantía de por vida"
    ],
    specifications: {
      "Peso línea": "3-4",
      "Capacidad": "WF4F + 100yds",
      "Peso": "95g",
      "Diámetro": "3.5 pulgadas",
      "Material": "Aluminio 6061",
      "Freno": "Conical drag"
    },
    rating: 4.7,
    reviews: 19
  }
]