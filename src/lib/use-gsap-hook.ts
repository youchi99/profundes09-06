"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  delay: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    start: "top 80%",
    end: "bottom 20%",
    scrub: false,
    toggleActions: "play none none none",
    markers: false,
  },
});

// Animation options
export type AnimationEffect = "fade-in" | "zoom" | "rotate" | "bounce";

export type AnimationOptions = {
  effect?: AnimationEffect;
  delay?: number;
  duration?: number;
  start?: string; // ScrollTrigger start position (e.g., "top 80%")
  end?: string; // ScrollTrigger end position
  scrub?: boolean | number; // Whether animation should be tied to scroll position
  toggleActions?: string; // ScrollTrigger toggleActions (e.g., "play pause reverse reset")
  markers?: boolean; // Show ScrollTrigger markers (for debugging)
  stagger?: number; // Stagger delay for multiple elements
  // Add more GSAP specific options
  ease?: string;
  id?: string;
  y?: number;
  x?: number;
};

gsap.registerEffect({
  name: "fade-in",
  extendTimeline: true,
  effect: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
    return gsap.to(targets, {
      y: 0,
      x: 0,
      opacity: 1,
      ...config,
    });
  },
});

gsap.registerEffect({
  name: "zoom",
  extendTimeline: true,
  effect: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
    return gsap.to(targets, {
      scale: 1,
      opacity: 1,
      ...config,
    });
  },
});

const defaultOptions: AnimationOptions = {
  effect: "fade-in",
  delay: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out",
  start: "top 80%",
  end: "bottom 20%",
  scrub: false,
  toggleActions: "play none none none",
  markers: false,
};

/**
 * Enhanced animation hook using useGSAP from @gsap/react
 */
export function useAnimationHook(options: AnimationOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const opts = { ...defaultOptions, ...options };

  useGSAP(
    () => {
      if (!elementRef.current) return;

      const effect = opts.effect || "fade-in";

      gsap.effects[effect](elementRef.current.children, {
        duration: opts.duration,
        delay: opts.delay,
        ease: opts.ease,
        stagger: opts.stagger,
        id: opts.id,
        scrollTrigger: {
          trigger: elementRef.current,
          start: opts.start,
          end: opts.end,
          scrub: opts.scrub,
          toggleActions: opts.toggleActions,
          markers: opts.markers,
          id: opts.id ? `${opts.id}-scrollTrigger` : undefined,
        },
      });
    },
    { scope: elementRef, dependencies: [opts] }
  );

  return elementRef;
}
