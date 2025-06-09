"use client";

import { ReactNode, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Create a custom useIsomorphicLayoutEffect hook to avoid SSR issues
const useIsomorphicLayoutEffect = 
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface GSAPProviderProps {
  children: ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  useIsomorphicLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Tell ScrollTrigger to use the document body as scroller
    ScrollTrigger.defaults({
      scroller: document.body,
      markers: false, // Set to true for debugging
    });

    // Add a class to the body for styling
    if (typeof document !== 'undefined') {
      document.body.classList.add('gsap-enabled');
    }

    // Refresh ScrollTrigger and clear matchMedia when the component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      ScrollTrigger.clearMatchMedia();
      
      if (typeof document !== 'undefined') {
        document.body.classList.remove('gsap-enabled');
      }
    };
  }, []);

  // Simply return children without wrapping them
  return <>{children}</>;
} 