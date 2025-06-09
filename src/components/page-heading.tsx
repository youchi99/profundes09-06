import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/gsap-animated-element";

type PageHeaderProps = {
  title: string;
  actionText?: string;
};

export default function PageHeading({ title, actionText = "contact us" }: PageHeaderProps) {
  return (
    <div className="relative pt-55.25 pb-31.25">
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0">
        <FadeIn className="w-full flex flex-col items-center justify-center gap-5">
          <div className="m-[-22px_0px_-14px_0px] translate-y-[40px] opacity-0">
            <h1 className="font-figtree text-[3em] sm:text-[4em] md:text-[5em] lg:text-[8em] leading-[1.1em] whitespace-nowrap mb-5">
              <span className="bg-transparent bg-linear-[137deg] from-[#282828] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent] capitalize">
                {title}
              </span>
            </h1>
          </div>

          <div className="w-full flex items-center justify-center translate-y-[40px] opacity-0">
            <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex items-center justify-center gap-5 border relative py-2.75 rounded-full font-figtree text-[1em] leading-normal capitalize border-white/11 bg-white/5 before:content-[''] before:w-full before:h-full before:bg-inherit before:absolute before:inset-0 before:backdrop-blur-[3.3px] before:rounded-full before:mix-blend-[initial] before:border before:border-white/11">
              <div className="relative">
                <div>
                  <p className="text-foreground font-medium">{actionText}</p>
                </div>
              </div>

              <div className="relative">
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-4 text-muted-foreground transition-colors duration-300 hover:text-secondary"
                  >
                    <span>
                      {/* <Icon
                        icon="fa-solid:arrow-circle-right"
                        className="size-[1em]"
                      /> */}
                      <ArrowRight className="size-[1em]"/>
                    </span>
                    <span>retour à l&apos;accueil</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
