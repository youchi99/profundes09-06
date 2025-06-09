import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SocialMediaLinkProps = {
  platform: string;
  url: string;
  Icon: React.ElementType;
};

export default function SocialMediaLink({
  platform,
  url,
  Icon,
}: SocialMediaLinkProps) {
  return (
    <span className="translate-x-[40px] opacity-0">
      <span className="sr-only">{platform}</span>
      <a
        href={url}
        target="_blank"
        className={cn(
          buttonVariants({
            variant: "default",
            size: "icon",
            className:
              "size-10 rounded-full font-figtree text-[20px] leading-[20px] bg-white/15 text-white hover:text-black hover:bg-white hover:opacity-90 duration-300",
          })
        )}
      >
        {/* <Icon icon={icon} className="size-[1em]" /> */}
        <Icon className="size-[1em]" />
      </a>
    </span>
  );
}
