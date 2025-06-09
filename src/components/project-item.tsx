import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
  slug: string;
}

export default function ProjectItem({
  title,
  imageUrl,
  description,
  tags,
  slug,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="mb-2.5 md:mb-[19px] text-center lg:text-start">
          <h6 className="text-[1.4em] md:text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree capitalize">
            {title}
          </h6>
        </div>

        <div className="relative w-full overflow-hidden">
          <div>
            <Image
              width={800}
              height={480}
              alt={title}
              src={imageUrl}
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-cover object-center w-full h-[400px] md:h-[460px] lg:h-[400px] brightness-61 contrast-119 blur-0 saturate-0 hue-rotate-0"
            />
          </div>

          <div className="absolute top-0 pt-[400px] transition-transform duration-300 md:pt-[460px] lg:pt-[400px] hover:left-0 hover:-translate-y-[400px] lg:hover:-translate-y-[400px] md:hover:-translate-y-[460px] w-full h-full">
            <div className="relative flex flex-col gap-5">
              <div className="-mx-5">
                <Image
                  width={800}
                  height={480}
                  alt={title}
                  src={imageUrl}
                  sizes="(max-width: 800px) 100vw, 800px"
                  className="object-cover object-center w-full h-[400px] md:h-[460px] lg:h-[400px]"
                />
              </div>

              {/* Description */}
              <div className="absolute w-full z-3 bottom-0 p-5">
                <div className="flex flex-col bg-[#282828] p-6.25">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1.2em] xl:text-[1.3em] leading-[1.1em] font-figtree capitalize text-center lg:text-start">
                      Description du projet
                    </h3>
                    <p className="text-[1em] leading-normal font-figtree text-muted-foreground text-center lg:text-start">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags  */}
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="w-full flex items-center gap-5">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`${
                index >= 2 ? "hidden 2xl:block" : ""
              } w-[64%] py-2.5 rounded-full`}
            >
              <div className="py-2.5 border border-white/10 rounded-full flex items-center justify-center">
                <div className="-mb-[15px] w-full text-center">
                  <p className="text-[14px] leading-normal font-medium capitalize font-figtree mb-[.9rem]">
                    {tag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-[17%] xl:w-[36%] flex items-center justify-center md:justify-end">
          <Link
            href={`/projets/${slug}`}
            className={cn(
              buttonVariants({
                variant: "default",
                size: "icon",
                className: "rounded-full size-12",
              })
            )}
          >
            <ArrowRight className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
