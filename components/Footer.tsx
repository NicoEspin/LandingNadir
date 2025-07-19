import { Fish, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-nadir-red" />
              <span className="text-xl font-bold">Nadir Pescas</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu destino para la pesca deportiva en la Patagonia. Productos de calidad y cursos con Johann Nadir.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-nadir-red transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-nadir-red transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-nadir-red transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-nadir-red transition-colors">
                  Cursos
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-nadir-red transition-colors">
                  Cañas de Pescar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-nadir-red transition-colors">
                  Reels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-nadir-red transition-colors">
                  Señuelos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-nadir-red transition-colors">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>2994022167</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nadirpescas.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bariloche, Río Negro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nadir Pescas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
