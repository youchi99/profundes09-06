import SocialMediaLink from "@/components/social-media-link";
import { StatisticCounter } from "@/components/statistic-counter";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { Separator } from "@/components/ui/separator";
import VideoThumbnail from "@/components/video-thumbnail";
import { socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const statisticItems = [
  {
    target: {
      value: 300,
      suffix: "+",
    },
    label: "Projets Réussis",
  },
  {
    target: {
      value: 200,
      suffix: "+",
    },
    label: "Produits Lancés",
  },
  {
    target: {
      value: 180,
      suffix: "+",
    },
    label: "Clients Satisfaits",
  },
];

export default function AboutSection() {
  return (
    <>
      <section>
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-[100px] pb-[50px]">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full md:w-[46%] mx-auto flex justify-center lg:justify-start mb-[30px] xl:mb-0">
              <FadeIn className="w-[70%] sm:w-[48%] lg:w-[53%] 2xl:w-[31%]">
                <div className="w-full pb-[11px] border-b border-white/70 text-center lg:text-left translate-y-[40px] opacity-0">
                  <h6 className="text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree capitalize">
                    À propos
                  </h6>
                </div>
              </FadeIn>
            </div>

            <div className="w-full flex flex-col gap-5">
              <FadeIn className="mb-[21px] mt-[64px] md:mt-7.5 lg:-mb-[5px] lg:mt-0 text-center lg:text-left">
                <h2 className="text-[1.2em] md:text-[1.7em] 2xl:text-[2em] leading-[1.1em] text-muted-foreground font-figtree capitalize translate-y-[40px] opacity-0">
                  Profundes réinvente vos espaces en alliant modernité,
                  fonctionnalité et raffinement. De la conception 3D à la
                  réalisation sur mesure, notre équipe conjugue expertise
                  technique et savoir-faire artisanal pour donner vie à des
                  intérieurs uniques, fidèles à votre vision. Portés par
                  l&apos;innovation et l&apos;excellence, nous créons des lieux
                  qui vous ressemblent.
                </h2>
              </FadeIn>

              {/* border-b border-white/15 mb-[3px] pb-[40px] */}
              <FadeIn className="flex flex-col md:flex-row items-center gap-5 mt-7.5 space-y-7.5 md:space-y-0">
                {statisticItems.map(({ target, label }, index) => (
                  <div
                    key={index}
                    className="w-full flex justify-center lg:justify-start translate-y-[40px] opacity-0"
                  >
                    <div className="flex flex-col gap-5">
                      {/*  */}
                      <div className="w-full -mb-[12px] -mt-[3px] ml-[4px]">
                        <StatisticCounter
                          targetValue={target.value}
                          suffix={target.suffix}
                        />
                      </div>

                      <div className="w-full">
                        <div className="-mb-[17px]">
                          <p className="text-[1em] leading-normal font-medium font-figtree text-muted-foreground mb-[.9rem]">
                            {label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </FadeIn>

              {/* separator */}
              <FadeIn className="mt-10.75">
                <Separator
                  orientation="horizontal"
                  className="h-px w-full md:data-[orientation=horizontal]:w-full bg-white/15 opacity-0"
                />
              </FadeIn>

              <div className="flex flex-col lg:flex-row items-center gap-5 mt-[12px]">
                <FadeIn className="w-full md:w-[64%] 2xl:w-[25%] flex items-center justify-center lg:items-start lg:justify-normal">
                  <div className="w-[56%] md:w-full -translate-x-[40px] opacity-0">
                    <Link
                      href="/a-propos"
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
                </FadeIn>

                {/* Social media */}
                <FadeIn className="w-[67%] md:w-full flex items-center justify-center lg:items-start lg:justify-start gap-1.25">
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
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-[80px] pb-[50px]">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex gap-5 flex-col items-center lg:items-start lg:flex-row">
              <FadeIn className="lg:sticky lg:top-8 w-full lg:w-[91%] xl:w-[55%] flex flex-col gap-5 mb-10 lg:mb-0">
                <div className="translate-y-[40px] opacity-0">
                  <div className="text-center lg:text-left">
                    <h3 className="text-[2.6em] xl:text-[3em] leading-[1.1em] font-figtree text-white capitalize mb-5">
                      <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                        Capturez l&apos;esprit du printemps dans votre maison
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="translate-y-[40px] opacity-0">
                  <div className="mb-7.5 md:mb-7.75 text-center lg:text-left">
                    <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                      Apportez fraîcheur et élégance à votre intérieur avec des
                      touches printanières soigneusement sélectionnées. Nos
                      experts vous accompagnent dans le choix de couleurs,
                      textures et éléments naturels pour une atmosphère
                      harmonieuse et revitalisante.
                    </p>
                  </div>
                </div>

                <div className="w-[53%] md:w-[54%] xl:w-[38%] mx-auto lg:mx-0 translate-y-[40px] opacity-0">
                  <div className="w-full">
                    <Link
                      href="/a-propos"
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

              <FadeIn className="w-full">
                <div className="translate-x-[40px] opacity-0">
                  <VideoThumbnail
                    thumbnailSrc="/images/5-47.jpg"
                    videoSrc="https://www.youtube.com/embed/QOibS62xOPc?si=wZpreCBySHKkYctE"
                    alt="Un espace intérieur magnifiquement conçu"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
