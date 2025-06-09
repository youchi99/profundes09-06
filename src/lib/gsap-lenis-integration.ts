"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Initialize the integration between GSAP and Lenis
export function initGSAPLenisIntegration(lenis: Lenis) {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Create an animation frame that will update Lenis and tell
  // ScrollTrigger to update too
  function raf(time: number) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  
  // Start the animation frame loop
  requestAnimationFrame(raf);
  
  // Update ScrollTrigger when Lenis scrolls
  lenis.on("scroll", () => {
    ScrollTrigger.update();
  });
  
  // Tell ScrollTrigger to normalize scroll values
  ScrollTrigger.normalizeScroll(true);
  
  // Create a ticker that updates on every GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  
  return () => {
    // Cleanup function
    gsap.ticker.remove((time) => {
      lenis.raf(time * 1000);
    });
    
    lenis.destroy();
    
    // Kill all ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Clean up all media queries used by ScrollTrigger
    ScrollTrigger.clearMatchMedia();
  };
} 