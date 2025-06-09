import AboutSection from "@/components/about-section";
import FAQSection from "@/components/faq-section";
import PageHeading from "@/components/page-heading";
import TeamSection from "@/components/team-section";

export default function AboutPage() {
  return (
    <>
      <PageHeading title="À propos" actionText="À propos" />

      <AboutSection />

      <TeamSection />

      <FAQSection />
    </>
  );
}
