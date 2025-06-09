import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    platform: string;
    url: string;
    Icon: React.ElementType;
  }[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Karim Benali",
    role: "Architecte Principal",
    imageUrl: "/images/25-24.jpg",
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com",
        Icon: Facebook,
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        Icon: Twitter,
      },
      {
        platform: "Youtube",
        url: "https://youtube.com",
        Icon: Youtube,
      },
    ],
  },
  {
    id: 2,
    name: "Laila El Fassi",
    role: "Architecte d'Intérieur",
    imageUrl: "/images/26-20.jpg",
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com",
        Icon: Facebook,
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        Icon: Twitter,
      },
    ],
  },
  {
    id: 3,
    name: "Younes Alaoui",
    role: "Chef de Projet",
    imageUrl: "/images/17-15.jpg",
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com",
        Icon: Facebook,
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        Icon: Twitter,
      },
      {
        platform: "Youtube",
        url: "https://youtube.com",
        Icon: Youtube,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 py-[50px]">
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-5 mb-10">
            <FadeIn className="w-full md:w-[51%] xl:w-[70%] flex justify-center lg:justify-start mb-[30px] xl:mb-0">
              <div
                className="w-[58%] lg:w-[80%] 2xl:w-[38%] translate-y-[40px] opacity-0"
              >
                <div className="pb-[11px] border-b border-white/70 text-center lg:text-left">
                  <h6 className="text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree capitalize">
                    Notre Équipe
                  </h6>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="w-full flex flex-col items-start gap-5">
              <div
                className="m-[0px_0px_0px_0px] lg:m-[0px_0px_10px_0px] xl:m-[-12px_0px_-9px_0px] translate-y-[40px] opacity-0"
              >
                <div className="text-center lg:text-start">
                  <h1 className="text-[3em] lg:text-[2.8em] xl:text-[4em] leading-[1.1em] font-figtree mb-5 capitalize">
                    <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                      Découvrez notre équipe créative
                    </span>
                  </h1>
                </div>
              </div>

              <div className="translate-y-[40px] opacity-0">
                <div className="-mb-3.75 text-center lg:text-start">
                  <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                    Notre équipe d&apos;experts passionnés combine créativité et
                    expertise technique pour transformer vos espaces. Chaque
                    membre apporte sa vision unique et son savoir-faire pour
                    créer des intérieurs exceptionnels qui reflètent votre
                    personnalité.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Teams Section */}

          <FadeIn
            className="flex flex-col md:flex-row gap-5"
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full translate-y-[40px] opacity-0">
                <div className="relative w-full overflow-hidden">
                  <div>
                    <Image
                      width={800}
                      height={800}
                      alt={member.name}
                      src={member.imageUrl}
                      sizes="(max-width: 800px) 100vw, 800px"
                      className="object-cover object-center w-full h-[400px] md:h-[460px] lg:h-[400px] brightness-61 contrast-119 blur-0 saturate-0 hue-rotate-0"
                    />
                  </div>

                  <div className="absolute top-0 pt-[400px] transition-transform duration-300 md:pt-[460px] lg:pt-[400px] hover:left-0 hover:-translate-y-[400px] lg:hover:-translate-y-[400px] md:hover:-translate-y-[460px] w-full h-full">
                    <div className="relative flex flex-col gap-5">
                      <div className="-mx-5">
                        <Image
                          width={800}
                          height={800}
                          alt={member.name}
                          src={member.imageUrl}
                          sizes="(max-width: 800px) 100vw, 800px"
                          className="object-cover object-center w-full h-[400px] md:h-[460px] lg:h-[400px]"
                        />
                      </div>

                      {/* Description  */}
                      <div className="absolute w-full z-3 bottom-0 p-5">
                        <div className="flex flex-col bg-[#282828] p-6.25">
                          <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
                            <div className="flex flex-col items-center lg:items-start gap-2">
                              <h3 className="text-[1.2em] xl:text-[1.3em] leading-[1.1em] font-figtree capitalize text-center lg:text-start">
                                {member.name}
                              </h3>
                              <p className="text-[1em] leading-normal font-figtree text-muted-foreground text-center lg:text-start">
                                {member.role}
                              </p>
                            </div>

                            <div className="flex space-x-2">
                              {member?.socialLinks.map(
                                ({ platform, url, Icon }) => (
                                  <span key={platform}>
                                    <span className="sr-only">{platform}</span>
                                    <a
                                      href={url}
                                      target="_blank"
                                      className={cn(
                                        buttonVariants({
                                          variant: "default",
                                          size: "icon",
                                          className:
                                            "size-8 rounded-full font-figtree text-[15px] leading-[15px] bg-white/15 text-white hover:text-black hover:bg-white hover:opacity-90 duration-300",
                                        })
                                      )}
                                    >
                                      <Icon className="size-[1em]" />
                                    </a>
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
