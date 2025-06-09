"use client";

import { Logo } from "@/components/logo";
import SocialMediaLink from "@/components/social-media-link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Clock, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Accueil", url: "/" },
  { label: "Produit", url: "#produit" },
  { label: "Services", url: "services" },
];

const contactDetails = [
  {
    Icon: Mail,
    label: "contactprofundes@gmail.com",
  },
  {
    Icon: PhoneCall,
    label: "+212 664-084234",
  },
  {
    Icon: Clock,
    label: "Tous les jours, 08h - 21h",
  },
];

const adresses = [
  {
    city: "Rabat",
    address: "Imm 33, appt 3,1er etage rue loubnane,oceon-rabat",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-25">
        <div className="flex flex-col gap-5">
          {/* Top */}
          <div className="pb-20 flex flex-col lg:flex-row gap-5">
            {/* Left */}
            <FadeIn className="w-full lg:w-[74%] flex flex-col gap-5">
              <div className="mb-7.5 flex flex-col gap-5 translate-y-[40px] opacity-0">
                <div className="w-full flex justify-center md:justify-start">
                  <Logo imageWidth="w-[50%] sm:w-[50%] md:w-[40%] lg:w-[50%] xl:w-[40%]" />
                </div>

                <div>
                  <div className="mr-0 mb-0 md:mr-20 lg:mr-18 md:-mb-4.75 xl:mr-80 xl:-mb-3.25 text-center md:text-left">
                    <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                      Profundes transforme vos espaces en lieux modernes et
                      fonctionnels. Notre expertise en design d&apos;intérieur
                      allie innovation et savoir-faire pour créer des
                      environnements uniques qui reflètent votre personnalité.
                    </p>
                  </div>
                </div>

                <div>
                  {/* Social Media */}
                  <FadeIn className="w-full flex items-center justify-center md:items-start md:justify-normal gap-1.25">
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

              <div className="flex flex-col md:flex-row gap-5 translate-y-[40px] opacity-0">
                <div className="w-full lg:w-[65%] mb-5 lg:mb-0 text-center md:text-left">
                  <ul className="space-y-1">
                    {footerLinks.map(({ label, url }, index) => (
                      <li key={index}>
                        <Link
                          href={url}
                          className="text-[1em] leading-normal font-figtree text-muted-foreground hover:text-accent-foreground block duration-150 capitalize"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Address */}
                <div className="w-full mb-10 md:mb-0">
                  <ul className="space-y-1">
                    {contactDetails.map(({ Icon, label }, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center md:justify-normal text-[1em] leading-normal font-figtree"
                      >
                        <span className="text-accent-foreground">
                          <Icon className="size-4" />
                        </span>
                        <span className="pl-2 text-muted-foreground">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Right */}
            <div className="w-full lg:w-[78%] xl:w-[48%]">
              <FadeIn className="flex flex-col gap-5">
                <div className="mb-0 lg:mb-13.75 flex flex-col items-center lg:items-start gap-5 translate-y-[40px] opacity-0">
                  <div>
                    <div>
                      <div className="mb-4.5 h-full text-center md:text-left">
                        <h2 className="text-[1.7em] md:text-[2.2em] xl:text-[3em] leading-[1.1em] font-figtree capitalize">
                          <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                            Parlons de vos projets avec nous
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="w-[65%] md:w-[50%] lg:w-[63%] xl:w-[41%]">
                    <Link
                      href="/demandez-un-devis"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          size: "default",
                          className:
                            "w-full h-auto px-7.5 py-4.75 rounded-full font-figtree text-[15px] leading-none capitalize",
                        })
                      )}
                    >
                      <div className="relative flex items-center gap-2">
                        Démarrer le projet
                        <ArrowRight className="size-[1em]" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5 mb-10.25 -mt-3.75 lg:mb-0 md:mt-0 order-first lg:order-last translate-y-[40px] opacity-0">
                  {adresses.map(({ city, address }, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-col gap-5 mb-7.5 md:mb-0 text-center md:text-left"
                    >
                      <div>
                        <h2 className="text-[1.2em] leading-[1.1em] font-figtree capitalize">
                          {city}
                        </h2>
                      </div>
                      <div className="ml-10 mr-10 -mb-3 md:mr-15 lg:mr-3.25 md:ml-0 md:mb-0">
                        <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                          {address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn>
            {/* separator */}
            <div className="w-full">
              <Separator
                orientation="horizontal"
                className="h-px w-full md:data-[orientation=horizontal]:w-full bg-white/15"
              />
            </div>

            {/* Bottom */}
            <div className="pt-5.5 pb-5">
              <div className="flex items-center justify-center lg:justify-start gap-5 flex-col lg:flex-row">
                <div className="w-full">
                  <div className="-mb-3 text-center lg:text-left">
                    <p className="text-[1em] leading-normal font-figtree text-accent-foreground mb-[.9rem]">
                      Copyright © {new Date().getFullYear()} Profundes | Tous
                      droits réservés
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <ul className="flex items-center justify-center lg:justify-end space-x-2.75 md:space-x-4.25">
                    <li>
                      <Link
                        href="/politiques"
                        className="text-[1em] leading-normal font-figtree text-muted-foreground hover:text-secondary block duration-150 capitalize"
                      >
                        Politiques
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
