"use client";

// Re-export from original package
export * from "lenis/react";
import { initGSAPLenisIntegration } from "./gsap-lenis-integration";
import Lenis from 'lenis';

// Add a useful utility function to optimize Lenis instances
export function getOptimalLenisConfig() {
  return {
    duration: 1.2,                   // Slightly longer for smoother feel
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Improved ease-out
    smoothWheel: true,               // Enable smooth scrolling for mouse wheel
    wheelMultiplier: 1.0,            // Default sensitivity for mouse wheel
    smoothTouch: true,               // Enable smooth scrolling for touch devices
    touchMultiplier: 2.0,            // Higher touch sensitivity for mobile
    infinite: false,                 // Disable infinite scrolling effects
    gestureOrientation: "vertical" as const,  // Default scroll orientation
    normalizeWheel: true,            // Normalize wheel inputs across browsers
    syncTouch: true,                 // Keep touch and wheel scrolling in sync
    
    // Advanced settings for performance
    renderByPixels: false,           // More precise rendering for retina displays
    syncTouchLerp: 0.1,              // Lower value for more consistent touch movement
    touchInertiaMultiplier: 35,      // Higher value for better momentum on touch devices
    wheelDeltaMultiplier: 1.15,      // Slightly higher for better wheel control
  };
}

// Monitor resizing for responsive adjustments
export function setupLenisResponsive(lenis: Lenis) {
  if (typeof window !== 'undefined') {
    // Initialize GSAP integration
    const cleanupGSAP = initGSAPLenisIntegration(lenis);
    
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      // Update ScrollTrigger when window resizes
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('resize'));
      }
    });
    
    resizeObserver.observe(document.body);
    
    return () => {
      resizeObserver.disconnect();
      cleanupGSAP();
    };
  }
  
  return () => {};
}
