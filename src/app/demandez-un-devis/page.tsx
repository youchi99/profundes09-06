import ContactForm from "@/components/contact-form";
import FAQSection, { FaqItem } from "@/components/faq-section";
import PageHeading from "@/components/page-heading";
import SocialMediaLink from "@/components/social-media-link";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { socialLinks } from "@/lib/constants";
import { Clock, Mail, PhoneCall, ShieldCheck, Users } from "lucide-react";

const faqData: FaqItem[] = [
  {
    question: "Quel est le délai pour recevoir un devis personnalisé ?",
    answer:
      "Nous nous engageons à vous fournir un devis détaillé et personnalisé dans les 48 heures ouvrables suivant votre demande complète.",
  },
  {
    question: "Le devis est-il gratuit et sans engagement ?",
    answer:
      "Absolument. Notre devis est entièrement gratuit et sans engagement. Nous vous accompagnons dans chaque étape de votre projet avec transparence.",
  },
  {
    question: "Quels éléments sont inclus dans le devis ?",
    answer:
      "Notre devis comprend une analyse détaillée des coûts de conception, des matériaux sélectionnés, de la main-d'œuvre qualifiée, ainsi qu'un planning précis pour chaque phase de votre projet.",
  },
  {
    question: "Quelle est la durée de validité du devis ?",
    answer:
      "Nos devis sont valables pendant 30 jours, vous offrant ainsi le temps nécessaire pour prendre une décision éclairée concernant votre projet.",
  },
];

export default function DemandezUnDevisPage() {
  return (
    <>
      <PageHeading title="Contactez nous" actionText="Contactez nous" />

      {/* Map Section */}
      {/* <div className="w-full h-[300px] bg-gray-800">
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div> */}

      {/* Contact Form and Info Section */}
      <section>
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 py-25">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Contact Form */}
            <FadeIn className="w-full mr-0 lg:mr-7.5">
              <ContactForm />
            </FadeIn>

            {/* Contact Info */}
            <div className="w-full">
              <FadeIn className="sticky top-8 flex flex-col justify-center gap-5">
                <div className="translate-y-[40px] opacity-0">
                  <div className="text-center lg:text-start">
                    <h1 className="text-[2.6em] lg:text-[3em] leading-[1.1em] font-figtree mb-5 capitalize">
                      <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                        Demandez votre devis
                      </span>
                    </h1>
                  </div>
                </div>

                <div className="translate-y-[40px] opacity-0">
                  <div className="text-center lg:text-start">
                    <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                      Vous avez un projet d&apos;aménagement ou de rénovation ?
                      Notre équipe d&apos;experts est à votre disposition pour
                      vous accompagner. Demandez un devis personnalisé et
                      gratuit pour concrétiser vos idées.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-6 rounded-lg border border-border translate-y-[40px] opacity-0">
                  {/* Phone */}
                  <div className="w-full flex flex-col lg:flex-row items-center gap-5 pb-6 xl:pb-0 border-b xl:border-b-0 xl:border-r border-white/15">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <PhoneCall className="size-6 text-primary" />
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-2">
                      <div>
                        <h6 className="text-[1.3em] leading-[1.1em] font-figtree capitalize font-medium">
                          Contactez-nous
                        </h6>
                      </div>

                      <div>
                        <p className="text-[1em] leading-normal font-figtree text-muted-foreground">
                          Tél: +212 664-084234
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full flex flex-col lg:flex-row items-center gap-5">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="size-6 text-primary" />
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-2">
                      <div>
                        <h6 className="text-[1.3em] leading-[1.1em] font-figtree capitalize font-medium">
                          Écrivez-nous
                        </h6>
                      </div>

                      <div>
                        <p className="text-[1em] leading-normal font-figtree text-muted-foreground">
                          contactprofundes@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 md:mt-6.5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 translate-y-[40px] opacity-0">
                  <div className="w-full text-center md:text-start">
                    <h6 className="text-[1.2em] leading-[1.1em] font-figtree capitalize font-medium">
                      Suivez-nous :
                    </h6>
                  </div>

                  {/* Social media */}
                  <FadeIn className="w-full flex items-center justify-center md:items-start md:justify-end gap-1.25 ">
                    {socialLinks.map(({ platform, url, Icon }, index) => (
                      <SocialMediaLink
                        key={index}
                        platform={platform}
                        url={url}
                        Icon={Icon}
                      />
                    ))}
                  </FadeIn>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 py-[50px]">
          <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-5">
              <FadeIn className="w-full md:w-[51%] xl:w-[70%] flex justify-center lg:justify-start mb-[30px] xl:mb-0">
                <div className="w-[70%] sm:w-[58%] lg:w-[80%] 2xl:w-[50%] translate-y-[40px] opacity-0">
                  <div className="pb-[11px] border-b border-white/70 text-center lg:text-left">
                    <h6 className="text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree capitalize">
                      Nos Engagements
                    </h6>
                  </div>
                </div>
              </FadeIn>

              <FadeIn className="w-full flex flex-col items-start gap-5">
                <div className="m-[0px_0px_0px_0px] lg:m-[0px_0px_10px_0px] xl:m-[-12px_0px_-9px_0px] translate-y-[40px] opacity-0">
                  <div className="text-center lg:text-start">
                    <h1 className="text-[3em] lg:text-[2.8em] xl:text-[4em] leading-[1.1em] font-figtree mb-5 capitalize">
                      <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                        Pourquoi Nous Faire Confiance ?
                      </span>
                    </h1>
                  </div>
                </div>

                <div className="translate-y-[40px] opacity-0">
                  <div className="-mb-3.75 text-center lg:text-start">
                    <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                      Notre expertise et notre engagement envers
                      l&apos;excellence font de nous le partenaire idéal pour
                      vos projets d&apos;aménagement. Nous transformons vos
                      espaces avec passion et professionnalisme.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10.5">
              <div className="bg-background p-6 rounded-lg border border-border flex flex-col translate-y-[40px] opacity-0">
                <div className="bg-primary/10 p-3 rounded-lg self-start mb-3">
                  <Clock className="size-5 text-primary" />
                </div>
                <h4 className="text-foreground font-medium mb-3">
                  Réactivité Garantie
                </h4>
                <p className="flex-grow">
                  Un devis détaillé sous 48h et un suivi personnalisé tout au
                  long de votre projet pour une tranquillité d&apos;esprit.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border flex flex-col translate-y-[40px] opacity-0">
                <div className="bg-primary/10 p-3 rounded-lg self-start mb-3">
                  <ShieldCheck className="size-5 text-primary" />
                </div>
                <h4 className="text-foreground font-medium mb-3">
                  Transparence Totale
                </h4>
                <p className="flex-grow">
                  Des devis clairs et détaillés sans surprise, avec une
                  communication transparente sur chaque aspect de votre projet.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border flex flex-col translate-y-[40px] opacity-0">
                <div className="bg-primary/10 p-3 rounded-lg self-start mb-3">
                  <Users className="size-5 text-primary" />
                </div>
                <h4 className="text-foreground font-medium mb-3">
                  Expertise Confirmée
                </h4>
                <p className="flex-grow">
                  Une équipe de professionnels qualifiés à votre service pour
                  concrétiser vos projets avec excellence et créativité.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FAQSection faqData={faqData} />
    </>
  );
}
