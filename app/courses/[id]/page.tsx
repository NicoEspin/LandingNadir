"use client";

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AppWrapper } from "@/app/AppWrapper";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Star, 
  ArrowLeft, 
  Check, 
  AlertCircle,
  MapPin,
  Clock,
  Calendar,
  Users,
  TrendingUp,
  BookOpen,
  Award,
  Monitor,
  User
} from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { mockCourses, formatPrice } from "@/lib/mockData";

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = mockCourses.find(c => c.id === parseInt(params.id));
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [selectedModalidad, setSelectedModalidad] = useState<'presencial' | 'online'>('presencial');

  if (!course) {
    notFound();
  }

  const handleAddToCart = () => {
    const price = selectedModalidad === 'online' ? (course.priceOnline || course.price) : course.price;
    const cartItem = {
      id: `${course.id}-${selectedModalidad}`,
      name: `${course.name} (${selectedModalidad === 'online' ? 'Online' : 'Presencial'})`,
      price: price,
      type: "course" as const,
      image: course.image,
      location: course.location,
      duration: course.duration,
      level: course.level,
      modalidad: selectedModalidad
    };

    addItem(cartItem);
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  const currentPrice = selectedModalidad === 'online' ? (course.priceOnline || course.price) : course.price;
  const availableSpots = (course.maxStudents || 10) - (course.currentStudents || 0);

  return (
    <AppWrapper activeSection="courses">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb y botón volver */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/courses">
              <Button variant="ghost" className="text-[#FF4444] hover:text-[#FF4444]/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a Cursos
              </Button>
            </Link>
            <span className="text-slate-500 dark:text-slate-400">/</span>
            <span className="text-slate-600 dark:text-slate-300 font-medium">{course.category}</span>
            <span className="text-slate-500 dark:text-slate-400">/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">{course.name}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Imagen y info básica */}
              <Card className="overflow-hidden bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-2">
                      Curso {course.level}
                    </Badge>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {course.name}
                    </h1>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Rating e instructor */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(course.rating || 4.5)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {course.rating || 4.5}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        ({course.reviews || 0} reseñas)
                      </span>
                    </div>
                    {course.instructor && (
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {course.fullDescription || course.description}
                  </p>
                </CardContent>
              </Card>

              {/* Información del curso */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-[#FF4444]" />
                    Detalles del Curso
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[#FF4444]" />
                      <span className="text-slate-600 dark:text-slate-300">Ubicación:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">{course.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-[#FF4444]" />
                      <span className="text-slate-600 dark:text-slate-300">Duración:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">{course.duration}</span>
                    </div>
                    {course.horario && (
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-[#FF4444]" />
                        <span className="text-slate-600 dark:text-slate-300">Horario:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-100">{course.horario}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-4 w-4 text-[#FF4444]" />
                      <span className="text-slate-600 dark:text-slate-300">Nivel:</span>
                      <Badge variant="outline" className="border-[#FF4444] text-[#FF4444]">
                        {course.level}
                      </Badge>
                    </div>
                    {course.maxStudents && (
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-[#FF4444]" />
                        <span className="text-slate-600 dark:text-slate-300">Cupos:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-100">
                          {availableSpots} disponibles de {course.maxStudents}
                        </span>
                      </div>
                    )}
                  </div>
                </Card>

                <Card className="p-6 bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#FF4444]" />
                    Incluye
                  </h3>
                  <ul className="space-y-2">
                    {(course.beneficios || [course.incluye || "Materiales incluidos"]).map((beneficio, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-[#FF4444] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Contenido del curso */}
              {course.contenido && course.contenido.length > 0 && (
                <Card className="p-6 bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                    Contenido del Curso
                  </h3>
                  <div className="space-y-3">
                    {course.contenido.map((tema, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#FF4444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{tema}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Requisitos */}
              {course.requisitos && course.requisitos.length > 0 && (
                <Card className="p-6 bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                    Requisitos
                  </h3>
                  <ul className="space-y-2">
                    {course.requisitos.map((requisito, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-[#FF4444] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{requisito}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>

            {/* Sidebar de inscripción */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="p-6 bg-white dark:bg-slate-800 shadow-lg border-slate-200 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                    Inscríbete Ahora
                  </h3>

                  {/* Selector de modalidad */}
                  {course.priceOnline && course.priceOnline !== course.price && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Elige tu modalidad:
                      </h4>
                      <div className="space-y-3">
                        <button
                          onClick={() => setSelectedModalidad('presencial')}
                          className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                            selectedModalidad === 'presencial'
                              ? 'border-[#FF4444] bg-[#FF4444]/5'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Users className="h-5 w-5 text-[#FF4444]" />
                              <span className="font-medium">Presencial</span>
                            </div>
                            <span className="font-bold text-[#FF4444]">
                              ${formatPrice(course.price)}
                            </span>
                          </div>
                        </button>
                        
                        <button
                          onClick={() => setSelectedModalidad('online')}
                          className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                            selectedModalidad === 'online'
                              ? 'border-[#FF4444] bg-[#FF4444]/5'
                              : 'border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Monitor className="h-5 w-5 text-[#FF4444]" />
                              <span className="font-medium">Online</span>
                            </div>
                            <span className="font-bold text-[#FF4444]">
                              ${formatPrice(course.priceOnline)}
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Precio y descuento */}
                  <div className="mb-6">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-[#FF4444]">
                        ${formatPrice(currentPrice)}
                      </span>
                      {selectedModalidad === 'online' && course.priceOnline && course.priceOnline < course.price && (
                        <div className="mt-2">
                          <span className="text-lg text-slate-500 line-through">
                            ${formatPrice(course.price)}
                          </span>
                          <Badge className="ml-2 bg-green-500 text-white">
                            ${formatPrice(course.price - course.priceOnline)} OFF
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Información de fechas */}
                  {course.fechaInicio && (
                    <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                          Inicia el {course.fechaInicio}
                        </p>
                        {course.dias && course.horario && (
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {course.dias} - {course.horario}
                          </p>
                        )}
                        {availableSpots <= 3 && course.maxStudents && (
                          <Badge variant="destructive" className="mt-2">
                            ¡Solo {availableSpots} cupos disponibles!
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={handleAddToCart}
                    disabled={!course.available || availableSpots === 0}
                    className={`
                      w-full font-semibold py-4 text-lg transition-all duration-300
                      ${course.available && availableSpots > 0
                        ? isAdded
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-[#FF4444] hover:bg-[#FF4444]/90 text-white hover:scale-105"
                        : "bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                      }
                    `}
                  >
                    {!course.available || availableSpots === 0 ? (
                      <>
                        <AlertCircle className="h-5 w-5 mr-2" />
                        No Disponible
                      </>
                    ) : isAdded ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        ¡Inscrito!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Inscribirse
                      </>
                    )}
                  </Button>

                  <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                    Pago seguro • Garantía de satisfacción
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </AppWrapper>
  );
}