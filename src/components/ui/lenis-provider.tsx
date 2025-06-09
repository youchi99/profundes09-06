"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import React, { createContext, useContext, useEffect } from "react";

// Create a context to provide Lenis instance across the app
const LenisContext = createContext<Lenis | null>(null);

// Hook to access Lenis instance
export const useLenis = () => useContext(LenisContext);

interface ReactLenisProps {
  children: React.ReactNode;
  options?: Partial<Lenis["options"]>;
}

export function LenisProvider({
  children,
  options = {},
}: ReactLenisProps) {
  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis(options);

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }, [options]);

  return <>{children}</>;
}
