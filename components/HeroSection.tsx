"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const phrases = [
  "Compartimos conocimiento para una pesca más consciente",
  "Impulsamos tu pasión con contenido de calidad",
  "Formamos a los pescadores del futuro, hoy",
];

export function HeroSection({ onSectionChange }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia el fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // inicia el fade-in
      }, 300); // duración del fade-out antes de cambiar la frase
    }, 2500); // velocidad del carrusel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo (puede ser una imagen o gradiente) */}
      <div className="absolute inset-0 bg-water-gradient">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {phrases[currentIndex]}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Una consultora diferente. Con raíces en la naturaleza y la
            tecnología.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
