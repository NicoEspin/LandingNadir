"use client";

import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "./about/components/ServicesOverview";
import { AppWrapper } from "./AppWrapper";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "courses", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppWrapper activeSection="home">
      <Header activeSection={activeSection} />

      <main>
        <section id="home">
          <HeroSection onSectionChange={scrollToSection} />
             
          <ServicesOverview />
        </section>
      </main>

      <Footer />
    </AppWrapper>
  );
}
