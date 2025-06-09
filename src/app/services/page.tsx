import PageHeading from "@/components/page-heading";
import ServiceSection from "@/components/service-section";
import TestimonialSection from "@/components/testimonial-section";
import DesignSpecialtiesSection from "@/components/design-specialties-section";

export default function ServicesPage() {
  return (
    <>
      <PageHeading title="Nos Services" actionText="Nos Services" />

      <ServiceSection />

      <DesignSpecialtiesSection />

      <TestimonialSection />
    </>
  );
}
