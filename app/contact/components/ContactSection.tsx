"use client";

import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "2994022167",
      action: "tel:2994022167",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "2994022167",
      action: "https://wa.link/2994022167",
    },
    {
      icon: Mail,
      title: "Email",
      content: "nadirmoscas@gmail.com",
      action: "mailto:nadirmoscas@gmail.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Neuquén, Argentina",
      action: null,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-[#FF4444]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4444] to-red-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte a planificar tu
            próxima aventura de pesca.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formulario (80%) */}
          <div className="lg:w-4/5 w-full">
            <Card className="border-l-4 border-l-[#FF4444] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                  Envíanos tu consulta
                </h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Asunto"
                    className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white"
                  />
                  <textarea
                    placeholder="Mensaje"
                    className="col-span-1 md:col-span-2 p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white h-40"
                  ></textarea>
                  <div className="col-span-1 md:col-span-2">
                    <Button
                      type="submit"
                      className="bg-[#FF4444] hover:bg-red-600 text-white w-full py-3 text-lg"
                    >
                      Enviar mensaje
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info + Mapa (20%) */}
          <div className="lg:w-1/5 w-full flex flex-col gap-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#FF4444] group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF4444]/10 dark:bg-[#FF4444]/20 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-[#FF4444]/20 transition-colors">
                      <info.icon className="h-6 w-6 text-[#FF4444]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-[#FF4444] hover:text-red-600 transition-colors text-sm font-medium"
                          target={
                            info.action.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            info.action.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Mapa */}
            <div className="rounded-xl overflow-hidden shadow-lg h-60 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.8898378652624!2d-68.05931592441035!3d-38.95160604968419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a332e8aa2a86b%3A0x75ff7b64fbdacb1e!2sNeuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1721650111111!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
