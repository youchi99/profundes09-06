import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/gsap-animated-element";

const heroImage = {
  src: "/images/1-57.jpg",
  alt: "Espace de vie élégant avec design d'intérieur contemporain et aménagement luxueux",
};

const galleryImages = [
  {
    src: "/images/0.-gallery1.jpg",
    alt: "Design d'intérieur moderne avec mobilier contemporain et éclairage élégant",
  },
  {
    src: "/images/0.gallery2.jpg",
    alt: "Espace de vie luxueux avec aménagement intérieur haut de gamme et décoration raffinée",
  },
  {
    src: "/images/0.-gallery3.jpg",
    alt: "Intérieur résidentiel élégant avec design contemporain et ambiance chaleureuse",
  },
];

export default function HeroSection() {
  return (
    <section className="relative pt-60 pb-25">
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col gap-5 lg:overflow-visible">
            <div className="mt-5 lg:mt-0 flex flex-col gap-5">
              {/* Headline */}
              <FadeIn className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-5">
                <div className="relative -z-20 translate-y-[40px] opacity-0">
                  <div className="mt-[50px] -mb-4.25 lg:-mb-10 lg:-mt-5.5 xl:-mb-14.5 xl:-mt-5.5">
                    <div className="m-[-7px_-7px_-39px_-7px] lg:m-0">
                      <h1 className="font-figtree text-[3.5em] sm:text-[4em] md:text-[4.5em] lg:text-[9em] xl:text-[10.3em] leading-[1.1em] whitespace-nowrap mb-5">
                        <span className="bg-transparent bg-linear-[137deg] from-[#282828] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                          Transformez
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="translate-y-[40px] opacity-0">
                  <div className="-mb-[22px] lg:-mb-8.5 lg:-mr-44.25 xl:-mb-11.75 xl:-mr-46.25">
                    <div className="relative z-10">
                      <h1 className="font-figtree text-[3.5em] sm:text-[4em] md:text-[4.5em] lg:text-[9em] xl:text-[10.3em] leading-[1.1em] whitespace-nowrap mb-5">
                        <span className="bg-transparent bg-linear-[137deg] from-[#282828] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                          Votre Espace
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* CTA */}
              <FadeIn className="mt-5 lg:mt-12 xl:mt-14 flex flex-col lg:flex-row gap-5 flex-nowrap items-center lg:justify-between">
                <div className="w-full lg:w-[42%] xl:w-[81%] -translate-x-[40px] opacity-0">
                  <div>
                    <div className="-mb-3.5 lg:mr-9 xl:mr-[150px] xl:-mb-3.75 text-center lg:text-left">
                      <p className="text-[1em] leading-normal text-foreground font-figtree mb-[.9rem]">
                        Intérieurs de luxe façonnés pour les propriétaires les
                        plus exigeants.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[94%] xl:w-[81%] z-10 flex flex-col lg:flex-row items-center gap-5 lg:justify-end mt-2.25 lg:-mr-[264px] xl:mt-0 xl:-mr-[61px] translate-x-[40px] opacity-0">
                  <div className="w-[66%] lg:w-[75%]">
                    <Link
                      href="/demandez-un-devis"
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
                        Démarrer le projet
                        <ArrowRight className="size-[1em]" />
                      </div>
                    </Link>
                  </div>

                  <div className="w-[66%] lg:w-[64%]">
                    <Link
                      href="#"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "default",
                          className:
                            "relative w-full h-auto px-7.5 py-5 rounded-full font-figtree text-[15px] leading-none capitalize border-white/30 bg-white/10 before:content-[''] before:w-full before:h-full before:bg-inherit before:absolute before:inset-0 before:backdrop-blur-[2.4px] before:rounded-full before:mix-blend-[initial] before:border before:border-white/30 hover:bg-secondary hover:text-secondary-foreground",
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

            <div className="relative z-10 flex flex-nowrap justify-center lg:justify-center lg:mt-14 2xl:mt-14.5 mr-0 lg:mr-3 xl:mr-10 order-first lg:order-last">
              <FadeIn className="grid grid-cols-3 gap-5 w-full lg:w-5/6 xl:w-3/4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="translate-x-[40px] opacity-0">
                    <Image
                      width={800}
                      height={800}
                      alt={image.alt}
                      sizes="(max-width: 800px) 100vw, 800px"
                      src={image.src}
                      className="w-full inline-block md:brightness-61 md:contrast-119 md:blur-0 md:saturate-0 md:hue-rotate-0 align-middle md:duration-300 md:hover:brightness-100 md:hover:contrast-100 md:hover:saturate-100 shadow"
                    />
                  </div>
                ))}
              </FadeIn>
            </div>
          </div>

          <div className="relative w-full lg:w-[67%] order-first lg:order-last">
            <FadeIn className="relative -z-10">
              <div className="w-full lg:-ml-9 lg:mt-28 xl:-ml-32 xl:mt-35 2xl:-ml-26 2xl:mt-32 translate-y-[40px] opacity-0">
                <div>
                  <Image
                    width={800}
                    height={960}
                    alt={heroImage.alt}
                    sizes="(max-width: 800px) 100vw, 800px"
                    src={heroImage.src}
                    className="w-full inline-block md:brightness-61 md:contrast-119 md:blur-0 md:saturate-0 md:hue-rotate-0 align-middle"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn className="absolute top-[300px] 2xl:top-[370px] right-0 hidden xl:block">
              <div className="w-[220px] translate-x-[40px] opacity-0">
                <p className="text-[1em] text-right leading-normal text-foreground font-figtree mb-[.9rem]">
                  L&apos;esprit crée la beauté, le cœur crée la maison. Douce
                  maison, doux foyer.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
