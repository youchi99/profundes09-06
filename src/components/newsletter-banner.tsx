"use client";

import { NewsletterForm } from "@/components/newsletter-form";
import { FadeIn } from "@/components/ui/gsap-animated-element";

export function NewsletterBanner() {
  return (
    <div className="relative w-full [background-image:url('https://kitpro.site/architera/wp-content/uploads/sites/324/2025/01/6-32.jpg')] bg-no-repeat bg-center bg-cover bg-fixed before:[content:''] before:absolute before:block before:inset-0 before:bg-black before:opacity-70">
      <div className="max-w-[1300px] mx-auto px-5 2xl:px-0">
        <FadeIn className="relative overflow-hidden flex flex-col lg:flex-row gap-5 items-center py-20">
          <div className="w-full md:w-[72%] relative text-center lg:text-left translate-y-[40px] opacity-0">
            <h2 className="text-[3em] lg:text-[2.8em] xl:text-[4em] leading-[1.1em] font-figtree mb-5 capitalize">
              Abonnez-vous à notre newsletter
            </h2>
          </div>

          <NewsletterForm />
        </FadeIn>
      </div>
    </div>
  );
}
