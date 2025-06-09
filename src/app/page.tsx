import AboutSection from "@/components/about-section";
import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";
import ServiceSection from "@/components/service-section";
import TestimonialSection from "@/components/testimonial-section";

export default async function HomePage() {
  return (
    <>
      {/* Hero  */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Services */}
      <ServiceSection />

      {/* Projects */}
      <ProjectSection />

      <TestimonialSection />

      <FAQSection />
    </>
  );
}
