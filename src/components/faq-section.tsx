"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData?: FaqItem[];
}

const defaultFaqData: FaqItem[] = [
  {
    question:
      "Quel est le processus de conception d'un projet d'aménagement intérieur ?",
    answer:
      "Notre processus commence par une consultation approfondie pour comprendre vos besoins et aspirations. Nous élaborons ensuite des concepts 3D, créons des plans détaillés, et vous accompagnons tout au long de la réalisation. Chaque étape est validée avec vous pour garantir un résultat parfaitement adapté à vos attentes.",
  },
  {
    question:
      "Quelle est la durée moyenne d'un projet d'aménagement intérieur ?",
    answer:
      "La durée varie selon l'ampleur du projet, allant généralement de 2 à 6 mois. Les petits projets peuvent être réalisés en quelques semaines, tandis que les rénovations complètes nécessitent plus de temps. Nous établissons un calendrier précis dès le début du projet et vous tenons informés à chaque étape.",
  },
  {
    question: "Comment gérez-vous le budget d'un projet d'aménagement ?",
    answer:
      "Nous établissons un budget détaillé dès le début du projet, incluant tous les coûts (matériaux, main-d'œuvre, frais de conception). Notre approche transparente vous permet de suivre chaque dépense. Nous proposons également différentes options pour adapter le projet à votre budget tout en maintenant une qualité exceptionnelle.",
  },
];

export default function FAQSection({
  faqData = defaultFaqData,
}: FAQSectionProps) {
  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-[100px] pb-[127px]">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Header */}
          <div className="w-full lg:w-[75%] mb-7.5 lg:mb-0 flex flex-col gap-5">
            <FadeIn className="w-full flex flex-col items-center lg:items-start gap-5">
              <div className="text-center lg:text-start translate-y-[40px] opacity-0">
                <h1 className="text-[3em] lg:text-[2.8em] xl:text-[4em] leading-[1.1em] font-figtree mb-5 capitalize">
                  <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                    Questions Fréquemment Posées
                  </span>
                </h1>
              </div>

              <div className="mr-0 mb-0 lg:mr-[61px] lg:-mb-[10px] text-center lg:text-start translate-y-[40px] opacity-0">
                <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
                  Découvrez les réponses aux questions les plus fréquentes
                  concernant nos services d&apos;aménagement intérieur. Notre
                  expertise et notre approche personnalisée vous garantissent
                  une expérience transparente et satisfaisante à chaque étape de
                  votre projet.
                </p>
              </div>

              <div className="w-[49%] xl:w-[33%] flex  mx-auto lg:mx-0 translate-y-[40px] opacity-0">
                <div className="w-full">
                  <Link
                    href="/faq"
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

          {/* FAQ Items */}
          <FadeIn className="w-full  ml-0 lg:ml-7.5">
            <Accordion
              type="single"
              collapsible
              className="w-full translate-y-[40px] opacity-0"
              defaultValue="item-0"
            >
              {faqData.map((faq, index) => (
                <div key={index}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none mb-2.5"
                  >
                    <AccordionTrigger className="text-left text-[1.2em] xl:text-[1.3em] leading-[1.1em] font-figtree hover:no-underline border-b border-white/11">
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-[24px] font-figtree text-muted-foreground p-[27px_30px_37px_48px] border-b border-white/11">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
