import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ imageWidth }: { imageWidth?: string }) => {
  return (
    <>
      <Link
        href="/"
        aria-label="home"
        className={cn(
          "flex items-center w-full sm:w-[81%] md:w-[60%] lg:w-[50%] xl:w-[60%] h-auto",
          imageWidth
        )}
      >
        <Image
          src="/images/logo/logo.png"
          alt=""
          sizes="(max-width: 800px) 100vw, 800px"
          width={800}
          height={204}
          className="inline-block w-full align-middle object-contain"
        />
      </Link>
    </>
  );
};
