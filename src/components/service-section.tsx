import ServiceItem from "@/components/service-item";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceItems = [
  {
    index: "01",
    title: "Conception et Design d'Intérieur",
    description:
      "Notre équipe d'experts élabore des concepts innovants en 3D, crée des plans d'aménagement optimisés et développe des designs sur mesure qui reflètent votre identité tout en maximisant l'espace disponible.",
    imageUrl: "/images/7-31.jpg",
    actionTitle: "Découvrir",
  },
  {
    index: "02",
    title: "Gestion et Supervision de Projet",
    description:
      "Nous assurons un suivi rigoureux de votre projet, de la planification initiale à la réalisation finale. Notre expertise garantit une exécution impeccable et le respect des délais impartis.",
    imageUrl: "/images/8-24.jpg",
    actionTitle: "Explorer",
  },
  {
    index: "03",
    title: "Réalisation et Exécution Complète",
    description:
      "Nous gérons l'ensemble du processus, de la sélection des matériaux premium à la réalisation finale. Notre approche intégrée assure une cohérence parfaite entre la conception et l'exécution.",
    imageUrl: "/images/9-24.jpg",
    actionTitle: "Planifier",
  },
];

export default function ServiceSection() {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-[80px] pb-[120px]">
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-5 mb-[50px]">
            <div className="w-full md:w-[51%] xl:w-[30%] flex justify-center lg:justify-start mb-[30px] xl:mb-0">
              <FadeIn className="w-[70%] sm:w-[48%] lg:w-[80%] 2xl:w-[61%] ">
                <div className="pb-[11px] border-b border-white/70 text-center lg:text-left translate-y-[40px] opacity-0">
                  <h6 className="text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree capitalize">
                    Nos Services
                  </h6>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="w-full flex flex-col items-center xl:flex-row lg:items-start gap-5">
              <div className="m-[0px_0px_30px_0px] lg:m-[0px_0px_10px_0px] xl:m-[-12px_-71px_-20px_0px] translate-y-[40px] opacity-0">
                <div className="text-center lg:text-start">
                  <h1 className="text-[3em] lg:text-[2.8em] xl:text-[4em] leading-[1.1em] font-figtree mb-5 capitalize">
                    <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                      Des designs créatifs pour des espaces inspirants
                    </span>
                  </h1>
                </div>
              </div>

              <div className="w-full md:w-[60%] flex justify-center lg:justify-start xl:justify-end translate-y-[40px] opacity-0">
                <div className="w-[56%] md:w-[67%] xl:w-[49%]">
                  <Link
                    href="/nos-services"
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        size: "default",
                        className:
                          "w-full h-auto px-7.5 py-5 rounded-full font-figtree text-[15px] leading-none capitalize",
                      })
                    )}
                  >
                    <div className="relative flex items-center gap-2">
                      En savoir plus <ArrowRight className="size-[1em]" />
                    </div>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Service Items */}
          <FadeIn animation={{ stagger: 0.2, duration: 1.5 }}>
            {serviceItems.map((item) => (
              <ServiceItem key={item.index} {...item} />
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
