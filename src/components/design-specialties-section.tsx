"use client";

import type React from "react";
import { Building2, Home, Building, Warehouse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DesignSpecialty {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  backgroundImage?: string;
}

export default function DesignSpecialtiesSection() {
  const specialties: DesignSpecialty[] = [
    {
      id: "luxury",
      title: "Design de Luxe",
      description:
        "Créez des espaces d'exception qui incarnent l'élégance et le raffinement à travers l'utilisation de matériaux prestigieux et une attention méticuleuse aux détails.",
      icon: <Building2 className="h-8 w-8" />,
      link: "#",
      backgroundImage: "/images/luxury-design.jpg",
    },
    {
      id: "commercial",
      title: "Design Commercial",
      description:
        "Transformez votre espace professionnel en un environnement captivant qui stimule la productivité et laisse une impression durable sur vos clients.",
      icon: <Building className="h-8 w-8" />,
      link: "#",
      backgroundImage: "/images/commercial-design.jpg",
    },
    {
      id: "universal",
      title: "Design Universel",
      description:
        "Concevez des espaces inclusifs accessibles et fonctionnels pour tous, favorisant le confort et l'autonomie de chaque utilisateur.",
      icon: <Warehouse className="h-8 w-8" />,
      link: "#",
      backgroundImage: "/images/universal-design.jpg",
    },
    {
      id: "residential",
      title: "Design Résidentiel",
      description:
        "Transformez votre habitat en un espace de vie sur mesure qui reflète votre personnalité tout en optimisant le confort et la fonctionnalité.",
      icon: <Home className="h-8 w-8" />,
      link: "#",
      backgroundImage: "/images/residential-design.jpg",
    },
  ];

  return (
    // className="w-full bg-gradient-to-b from-gray-900 to-black py-24"
    <section>
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-[80px] pb-[120px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Header */}
          <div className="h-fit lg:sticky lg:top-8 w-full lg:w-[64%] mb-7.5 lg:mb-0 flex flex-col gap-5">
            <FadeIn className="w-full flex flex-col items-center lg:items-start gap-5">
              <div className="translate-y-[40px] opacity-0">
                <div className="text-center lg:text-start">
                  <h1 className="text-[2.6em] lg:text-[3em] leading-[1.1em] font-figtree mb-5 capitalize">
                    <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                      Nos Domaines d&apos;Expertise
                    </span>
                  </h1>
                </div>
              </div>

              <div className="mr-0 mb-0 lg:mr-[61px] lg:-mb-[10px] text-center lg:text-start translate-y-[40px] opacity-0">
                <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                  Découvrez notre expertise dans la création d&apos;espaces
                  exceptionnels qui allient fonctionnalité et esthétique
                  raffinée. Des résidences de luxe aux espaces commerciaux, nous
                  donnons vie à votre vision.
                </p>
              </div>

              <div className="w-[49%] xl:w-[37%] flex  mx-auto lg:mx-0 mt-5 translate-y-[40px] opacity-0">
                <div className="w-full">
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

          {/* Right column - Grid of specialties */}
          <FadeIn className="w-full ml-0 lg:ml-7.5">
            <div className="translate-y-[40px] opacity-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {specialties.map((specialty) => (
                  <div
                    key={specialty.id}
                    className="w-full h-full first:bg-black first:hover:bg-white/3 border-white/11 p-8 relative overflow-hidden border first:border-b-0 lg:first:border-b lg:first:border-r-0 last:border-t-0 nth-last-2:border-t-0 lg:nth-last-2:border-r-0 group transition-all duration-300 first:before:content-[''] first:before:absolute first:before:inset-0 first:before:bg-[url('https://kitpro.site/architera/wp-content/uploads/sites/324/2025/02/19-13.jpg')] first:before:bg-cover first:before:bg-center first:before:bg-no-repeat first:before:opacity-15"
                  >
                    <div className="relative z-10 h-full flex flex-col gap-5">
                      <div className="flex-grow flex flex-col gap-5">
                        <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                          <div className="text-black">{specialty.icon}</div>
                        </div>

                        <div>
                          <h3 className="text-[2.6em] lg:text-[1.3em] leading-[1.1em] font-figtree capitalize">
                            {specialty.title}
                          </h3>
                        </div>

                        <div>
                          <p className="text-[1em] leading-normal font-figtree text-muted-foreground group-first:text-white mb-[.9rem]">
                            {specialty.description}
                          </p>
                        </div>
                      </div>

                      <div>
                        <Link
                          href={specialty.link}
                          className={cn(
                            buttonVariants({
                              variant: "link",
                              size: "default",
                              className:
                                "h-fit py-0 px-0 has-[>svg]:px-0 font-figtree text-[15px] leading-none capitalize",
                            })
                          )}
                        >
                          En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
