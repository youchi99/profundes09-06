"use client";

import TestimonialCards from "@/components/testimonial-cards";
import { FadeIn } from "@/components/ui/gsap-animated-element";

export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    text: "Une expertise remarquable dans la transformation de notre riad traditionnel. Leur compréhension de l'architecture marocaine et leur vision moderne ont créé un espace qui honore notre patrimoine tout en apportant un confort contemporain.",
    author: {
      name: "Fatima Benali",
      role: "Notre Client",
      avatar: "/images/0.Profil1.jpg",
    },
    rating: 5,
  },
  {
    id: 2,
    text: "Une équipe qui a su parfaitement marier l'authenticité marocaine avec le design moderne. Leur respect pour notre culture et leur créativité ont transformé notre espace en un lieu d'exception.",
    author: {
      name: "Karim Alami",
      role: "Notre Client",
      avatar: "/images/0.-profil4.jpg",
    },
    rating: 5,
  },
  {
    id: 3,
    text: "Leur approche unique a su capturer l'essence même du style marocain tout en y intégrant des éléments contemporains. Notre maison est devenue un véritable havre de paix qui reflète notre identité.",
    author: {
      name: "Laila Cherkaoui",
      role: "Notre Client",
      avatar: "/images/0.Profil2.jpg",
    },
    rating: 5,
  },
  {
    id: 5,
    text: "Une transformation qui respecte parfaitement l'âme de notre espace. Leur compréhension des motifs traditionnels marocains et leur vision moderne ont créé un équilibre parfait.",
    author: {
      name: "Youssef Mernissi",
      role: "Notre Client",
      avatar: "/images/0.-profil3.jpg",
    },
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 py-[50px]">
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-5">
            <div className="w-full md:w-[51%] xl:w-[70%] flex justify-center lg:justify-start mb-[30px] xl:mb-0">
              <FadeIn className="w-[70%] sm:w-[48%] md:w-[58%] lg:w-[80%] 2xl:w-[38%]">
                <div className="pb-[11px] border-b border-white/70 text-center lg:text-left translate-y-[40px] opacity-0">
                  <h6 className="text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree capitalize">
                    Témoignages
                  </h6>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="w-full flex flex-col items-start gap-5">
              <div className="m-[0px_0px_0px_0px] lg:m-[0px_0px_10px_0px] xl:m-[-12px_0px_-9px_0px] translate-y-[40px] opacity-0">
                <div className="text-center lg:text-start">
                  <h1 className="text-[3em] lg:text-[2.8em] xl:text-[4em] leading-[1.1em] font-figtree mb-5 capitalize">
                    <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                      Créer le Rêve, Gagner la Confiance
                    </span>
                  </h1>
                </div>
              </div>

              <div className="-mb-3.75 text-center lg:text-start translate-y-[40px] opacity-0">
                <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                  Nos clients sont la plus belle preuve de notre engagement.
                  Plus qu&apos;un service, nous offrons une expérience de
                  transformation sur mesure, émotionnelle et durable.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Testimonial Carousel */}
          <FadeIn>
            <TestimonialCards testimonialData={testimonialData} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
