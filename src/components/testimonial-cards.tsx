"use client";

import { Testimonial } from "@/components/testimonial-section";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type TestimonialCardsProps = {
  testimonialData: Testimonial[];
};

export default function TestimonialCards({
  testimonialData,
}: TestimonialCardsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderStars = (rating: number) => {
    return (
      <ul className="block space-x-1.5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <li key={i} className="inline-block">
              <span className="block text-[18px]">
                <Star
                  key={i}
                  className={`size-[1em] ${
                    i < rating
                      ? "fill-[#ffc107] text-[#ffc107]"
                      : "text-gray-300"
                  }`}
                />
              </span>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div className="relative mt-10.5 translate-y-[40px] opacity-0">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonialData.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 xl:basis-1/3"
            >
              <div className="relative p-7.5 shadow-md bg-[#282828] h-full flex flex-col">
                <div className="">{renderStars(testimonial.rating)}</div>

                <div className="flex-grow">
                  <p className="text-[1em] leading-normal font-figtree text-[#8C8B8B] mt-4 mb-6 line-clamp-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="mr-5">
                      <Image
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                        width={1000}
                        height={1000}
                        className="size-14.25 rounded-full object-cover"
                      />
                    </div>

                    <div>
                      <h6 className="text-[1.3em] leading-[1.1em] font-figtree">
                        {testimonial.author.name}
                      </h6>

                      <span className="text-[13px] text-[#8C8B8B]">
                        {testimonial.author.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            // onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current - 1 === index ? "bg-white w-5" : "bg-[#505050]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
