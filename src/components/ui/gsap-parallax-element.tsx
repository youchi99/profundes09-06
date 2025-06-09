"use client";

import { ElementType, ComponentPropsWithoutRef } from "react";
import { useParallax } from "@/lib/use-gsap-parallax";
import { cn } from "@/lib/utils";

// Direction of parallax effect
export type ParallaxDirection = "vertical" | "horizontal";

// Parallax element props
export interface ParallaxElementProps extends ComponentPropsWithoutRef<"div"> {
  as?: ElementType;
  speed?: number; // Speed of parallax effect (0.1 to 1 is normal, negative reverses)
  direction?: ParallaxDirection;
  ease?: string; // GSAP easing function
  scrub?: boolean | number; // Whether animation should be tied to scroll position
  markers?: boolean; // Show ScrollTrigger markers (for debugging)
  start?: string; // ScrollTrigger start position
  end?: string; // ScrollTrigger end position
  overflow?: boolean; // Whether to show overflow (default: hidden)
  id?: string; // Optional ID for the GSAP animation
}

export function ParallaxElement({
  as: Component = "div",
  speed = 0.5,
  direction = "vertical",
  ease = "none",
  scrub = true,
  markers = false,
  start = "top bottom",
  end = "bottom top",
  overflow = false,
  id,
  className,
  children,
  ...props
}: ParallaxElementProps) {
  const ref = useParallax({
    speed,
    direction,
    ease,
    scrub,
    markers,
    start,
    end,
    id,
  });

  return (
    <Component
      ref={ref}
      className={cn(
        "relative",
        overflow ? "overflow-visible" : "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Convenient pre-configured parallax elements with different speeds
export function ParallaxSlow(props: ParallaxElementProps) {
  return <ParallaxElement speed={0.2} {...props} />;
}

export function ParallaxMedium(props: ParallaxElementProps) {
  return <ParallaxElement speed={0.5} {...props} />;
}

export function ParallaxFast(props: ParallaxElementProps) {
  return <ParallaxElement speed={0.8} {...props} />;
}

// Reverse parallax effects (move opposite to scroll direction)
export function ParallaxReverse(props: ParallaxElementProps) {
  return <ParallaxElement speed={-0.5} {...props} />;
}

// Horizontal parallax movements
export function ParallaxHorizontal(props: ParallaxElementProps) {
  return <ParallaxElement direction="horizontal" {...props} />;
} 