import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link.js";

export default function NotFound() {
  return (
    <>
      <div className="relative pt-55.25 pb-31.25">
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="w-full">
              <div className="m-[-66px_0px_-40px_0px]">
                <div className="text-center">
                  <h1 className="font-figtree text-[9.7em] md:text-[12em] lg:text-[14em] leading-[1.1em] mb-5 whitespace-nowrap">
                    <span className="bg-transparent bg-linear-[137deg] from-[#282828] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent] capitalize">
                      404
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="text-center">
                <h4 className="font-figtree text-[2.6em] lg:text-[3em] leading-[1.1em] whitespace-nowrap capitalize">
                  Oups, Page Introuvable !
                </h4>
              </div>
            </div>

            <div className="w-full lg:w-[45%] flex flex-col items-center justify-center gap-5">
              <div className="text-center">
                <p className="text-[1em] leading-normal font-figtree text-muted-foreground">
                  Nous avons cherché partout, mais cette page semble s&apos;être égarée dans notre univers de design. 
                  Ne vous inquiétez pas, notre équipe de créateurs est là pour vous guider vers des espaces plus inspirants.
                </p>
              </div>

              <div className="w-full">
                <div className="w-[35%] mx-auto">
                  <Link
                    href="/"
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
                      Retour à l&apos;Accueil <Home className="size-[1em]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
