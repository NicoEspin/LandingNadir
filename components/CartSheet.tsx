"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ExternalLink, ShoppingBag, GraduationCap, MapPin, Clock, TrendingUp } from "lucide-react"
import { useCart } from "@/hooks/useCart"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, updateQuantity, removeItem, totalPrice, generateWhatsAppMessage, clearCart, itemCount } = useCart()

  const handleCheckout = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/542994022167?text=${message}`, "_blank")
    clearCart()
    onOpenChange(false)
  }

  // Separar productos y cursos para mejor organización
  const products = items.filter(item => item.type === 'product')
  const courses = items.filter(item => item.type === 'course')

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col overflow-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            Carrito de Compras
            {itemCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-slate-400" />
              </div>
              <div>
                <p className="text-lg font-medium text-slate-600 dark:text-slate-300">Tu carrito está vacío</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Agrega productos o cursos para comenzar
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-6">
                  {/* Sección de Productos */}
                  {products.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <ShoppingBag className="h-5 w-5 text-[#FF4444]" />
                        <h3 className="font-semibold text-lg">Productos ({products.length})</h3>
                      </div>
                      <div className="space-y-3">
                        {products.map((item) => (
                          <div key={`product-${item.id}`} className="flex items-start space-x-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-800/50">
                            <div className="flex-1">
                              <h4 className="font-medium text-slate-800 dark:text-slate-100">{item.name}</h4>
                              <div className="flex items-center space-x-2 mt-2">
                                <Badge variant="outline" className="text-xs">
                                  <ShoppingBag className="h-3 w-3 mr-1" />
                                  Producto
                                </Badge>
                                {item.category && (
                                  <Badge variant="secondary" className="text-xs">
                                    {item.category}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-sm font-semibold text-[#FF4444]">
                                  ${item.price.toLocaleString()}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  Subtotal: ${(item.price * item.quantity).toLocaleString()}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:bg-destructive/10"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Separador */}
                  {products.length > 0 && courses.length > 0 && <Separator />}

                  {/* Sección de Cursos */}
                  {courses.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-lg">Cursos ({courses.length})</h3>
                      </div>
                      <div className="space-y-3">
                        {courses.map((item) => (
                          <div key={`course-${item.id}`} className="flex items-start space-x-4 p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
                            <div className="flex-1">
                              <h4 className="font-medium text-slate-800 dark:text-slate-100">{item.name}</h4>
                              <div className="flex items-center space-x-2 mt-2">
                                <Badge variant="outline" className="text-xs border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-300">
                                  <GraduationCap className="h-3 w-3 mr-1" />
                                  Curso
                                </Badge>
                                {item.level && (
                                  <Badge variant="secondary" className="text-xs">
                                    {item.level}
                                  </Badge>
                                )}
                              </div>
                              
                              {/* Información adicional del curso */}
                              <div className="mt-2 space-y-1">
                                {item.location && (
                                  <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
                                    <MapPin className="h-3 w-3" />
                                    {item.location}
                                  </div>
                                )}
                                {item.duration && (
                                  <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
                                    <Clock className="h-3 w-3" />
                                    {item.duration}
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-sm font-semibold text-blue-600">
                                  ${item.price.toLocaleString()}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  Subtotal: ${(item.price * item.quantity).toLocaleString()}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:bg-destructive/10"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t pt-4 space-y-4 bg-white dark:bg-slate-900">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-[#FF4444]">${totalPrice.toLocaleString()}</span>
                </div>

                <Button 
                  onClick={handleCheckout} 
                  className="w-full bg-[#FF4444] hover:bg-[#FF4444]/90 text-white font-semibold" 
                  size="lg"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Finalizar Compra en WhatsApp
                </Button>

                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  Te redirigiremos a WhatsApp para completar tu compra de forma segura
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}