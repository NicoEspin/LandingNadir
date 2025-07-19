"use client";

import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AppWrapper } from "@/app/AppWrapper";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Star, 
  ArrowLeft, 
  Check, 
  AlertCircle,
  Truck,
  Shield,
  RefreshCw,
  Heart
} from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { mockProducts, formatPrice, type Product } from "@/lib/mockData";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Unwrap params usando React.use()
  const resolvedParams = use(params);
  const product = mockProducts.find(p => p.id === parseInt(resolvedParams.id));
  
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      type: "product" as const,
      image: product.image,
      category: product.category,
      quantity: quantity
    };

    for (let i = 0; i < quantity; i++) {
      addItem(cartItem);
    }
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  // Mock de imágenes adicionales usando la misma imagen base
  const productImages = [
    product.image,
    product.image.replace("400", "400&text=Vista+2"),
    product.image.replace("400", "400&text=Vista+3"),
    product.image.replace("400", "400&text=Detalles")
  ];

  return (
    <AppWrapper activeSection="products">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb y botón volver */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/products">
              <Button variant="ghost" className="text-[#FF4444] hover:text-[#FF4444]/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a Productos
              </Button>
            </Link>
            <span className="text-slate-500 dark:text-slate-400">/</span>
            <span className="text-slate-600 dark:text-slate-300 font-medium">{product.category}</span>
            <span className="text-slate-500 dark:text-slate-400">/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-2xl">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg font-semibold px-6 py-3">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Sin Stock
                    </Badge>
                  </div>
                )}
              </div>
              
              {/* Miniaturas */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-[#FF4444] shadow-lg scale-105' 
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Vista ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-[#FF4444] hover:bg-[#FF4444]/90 text-white mb-4">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                {product.rating && product.reviews && (
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= Math.floor(product.rating!)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                      {product.rating}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      ({product.reviews} reseñas)
                    </span>
                  </div>
                )}

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {product.fullDescription || product.description}
                </p>
              </div>

              {/* Precio y acciones */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-[#FF4444]">
                      ${formatPrice(product.price)}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 ml-2">ARS</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-500 hover:text-[#FF4444]">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Selector de cantidad */}
                {product.inStock && (
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Cantidad:</span>
                    <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3"
                      >
                        -
                      </Button>
                      <span className="px-4 py-2 font-semibold">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`
                    w-full font-semibold py-4 text-lg transition-all duration-300
                    ${product.inStock 
                      ? isAdded
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-[#FF4444] hover:bg-[#FF4444]/90 text-white hover:scale-105"
                      : "bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                    }
                  `}
                >
                  {!product.inStock ? (
                    <>
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Sin Stock
                    </>
                  ) : isAdded ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      ¡Agregado al Carrito!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Agregar al Carrito
                    </>
                  )}
                </Button>

                {/* Beneficios */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <Truck className="h-6 w-6 text-[#FF4444] mx-auto mb-2" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Envío Gratis</span>
                  </div>
                  <div className="text-center">
                    <Shield className="h-6 w-6 text-[#FF4444] mx-auto mb-2" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Garantía</span>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="h-6 w-6 text-[#FF4444] mx-auto mb-2" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">30 días</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Características y especificaciones */}
          {(product.features || product.specifications) && (
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Características */}
              {product.features && (
                <Card className="p-6 bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                    Características Principales
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#FF4444] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Especificaciones */}
              {product.specifications && (
                <Card className="p-6 bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                    Especificaciones Técnicas
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{key}:</span>
                          <span className="text-slate-600 dark:text-slate-400 font-semibold">{value}</span>
                        </div>
                        {index < Object.entries(product.specifications!).length - 1 && (
                          <Separator className="bg-slate-200 dark:bg-slate-700" />
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </AppWrapper>
  );
}