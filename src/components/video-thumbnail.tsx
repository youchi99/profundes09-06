import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoThumbnailProps {
  thumbnailSrc: string;
  videoSrc: string;
  alt: string;
}

export default function VideoThumbnail({
  thumbnailSrc,
  videoSrc,
  alt,
}: VideoThumbnailProps) {


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full relative group cursor-pointer">
            <Image
              width={800}
              height={560}
              alt={alt}
              sizes="(max-width: 800px) 100vw, 800px"
              src={thumbnailSrc}
              className="w-full inline-block brightness-61 contrast-119 blur-0 saturate-0 hue-rotate-0 align-middle duration-300 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="relative rounded-full bg-white/46 text-black hover:bg-black/42 hover:text-white size-20 flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/46 opacity-60 animate-ping"></span>
                <Play className="size-8" />
              </button>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="md:max-w-[900px] bg-[#282828] p-0 rounded-none border-none flex items-center justify-center">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          <div className="w-full flex items-center justify-center">
            <div className="aspect-video w-full">
              <iframe
                src={videoSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                title="Video content"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
