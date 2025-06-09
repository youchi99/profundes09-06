import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
  index: string;
  title: string;
  description: string;
  imageUrl: string;
  actionTitle: string;
}

export default function ServiceItem({
  index,
  actionTitle,
  title,
  description,
  imageUrl,
}: ServiceItemProps) {
  return (
    <div className="relative lg:mt-[50px] flex flex-col md:items-start lg:items-center lg:flex-row items-center gap-5 translate-y-[100px] opacity-0">
      <div className="w-[11%]">
        <div>
          <h5 className="text-[2em] xl:text-[2.5em] leading-[1.1em] font-figtree">
            {index}.
          </h5>
        </div>
      </div>

      <div className="w-full flex flex-col pt-[18px] gap-5">
        <div className="relative mb-0 mt-[7px] md:mt-0 md:-mb-[61px] order-last md:order-first">
          <div className="py-[15px]">
            <Separator
              orientation="horizontal"
              className="h-px w-full md:data-[orientation=horizontal]:w-[89%] bg-white/15"
            />
          </div>
        </div>

        <div className="flex items-center flex-col-reverse md:flex-row-reverse gap-5">
          <div className="w-full hidden md:flex items-end justify-center">
            <div className="-mb-[6px] ml-auto">
              <div className="text-[34px] leading-none inline-block">
                <ArrowRight className="size-[1em]" />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-normal -mt-[7px] -mb-[5px] md:mt-0 md:mb-0">
            <div className="w-[61%] lg:w-[46%] 2xl:w-[34%]">
              <div className="relative flex items-center justify-center border border-white/30 bg-white/5 rounded-full py-[13px] before:content-[''] before:w-full before:h-full before:bg-inherit before:absolute before:inset-0 before:backdrop-blur-[13.8px] before:rounded-full before:mix-blend-[initial] before:border before:border-white/30">
                <div className="relative w-full h-full text-center mb-[1px] lg:mb-0">
                  <h2 className="text-[1.2em] xl:text-[1.3em] leading-[1.1em] font-figtree">
                    {actionTitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 pt-[15px]">
          <div className="text-center md:text-start">
            <h6 className="text-[1.4em] lg:text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree font-medium">
              {title}
            </h6>
          </div>

          <div className="mr-0 md:mr-[200px] lg:mr-[349px] xl:mr-[603px] text-center md:text-start">
            <p className="text-[1em] leading-normal font-figtree text-muted-foreground mb-[.9rem]">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="group hidden md:block absolute left-[9px] top-[34px] lg:left-[73px] lg:-top-[30px] z-1 max-w-full w-full text-center cursor-pointer">
        <div className="mt-[6px] ml-[264px] 2xl:ml-[418px] text-center">
          <Link href="/services" className="inline-block w-full">
            <Image
              width={800}
              height={800}
              alt={title}
              src={imageUrl}
              sizes="(max-width: 800px) 100vw, 800px"
              className="w-[45%] lg:w-[33%] opacity-0 group-hover:opacity-100 inline-block h-full brightness-61 contrast-119 blur-0 saturate-0 hue-rotate-0 align-middle"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
