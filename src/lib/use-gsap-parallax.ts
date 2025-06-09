"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ParallaxOptions = {
  speed?: number;        // Parallax speed factor (0-1 is normal, negative reverses)
  direction?: "vertical" | "horizontal"; // Direction of parallax effect
  ease?: string;         // GSAP easing function
  scrub?: boolean | number; // Whether animation should be scrubbed or a number for smoothing
  markers?: boolean;     // Show ScrollTrigger markers for debugging
  start?: string;        // ScrollTrigger start position
  end?: string;          // ScrollTrigger end position
  id?: string;           // Optional ID for the GSAP animation
};

const defaultOptions: ParallaxOptions = {
  speed: 0.5,
  direction: "vertical",
  ease: "none",
  scrub: true,
  markers: false,
  start: "top bottom",
  end: "bottom top",
};

/**
 * Enhanced hook for creating parallax effects using useGSAP
 */
export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const opts = { ...defaultOptions, ...options };
  
  useGSAP(() => {
    if (!elementRef.current) return;
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    const element = elementRef.current;
    
    // Calculate the animation values
    const direction = opts.direction === "horizontal" ? "x" : "y";
    const distance = opts.direction === "horizontal" 
      ? element.offsetWidth * opts.speed! 
      : element.offsetHeight * opts.speed!;
    
    // Create the animation
    gsap.fromTo(
      element,
      { [direction]: 0 },
      {
        [direction]: -distance,
        ease: opts.ease,
        id: opts.id,
        scrollTrigger: {
          trigger: element,
          start: opts.start,
          end: opts.end,
          scrub: opts.scrub,
          markers: opts.markers,
          id: opts.id ? `${opts.id}-scrollTrigger` : undefined,
        },
      }
    );
    
    // No need to handle cleanup as useGSAP does this automatically
  }, { scope: elementRef, dependencies: [opts] });
  
  return elementRef;
} 