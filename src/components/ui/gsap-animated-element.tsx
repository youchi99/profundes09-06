"use client";

import { AnimationOptions, useAnimationHook } from "@/lib/use-gsap-hook";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType } from "react";

export interface AnimatedElementProps extends ComponentPropsWithoutRef<"div"> {
  as?: ElementType;
  animation?: AnimationOptions;
}

export function AnimatedElement({
  as: Component = "div",
  animation = {},
  className,
  children,
  ...props
}: AnimatedElementProps) {
  const ref = useAnimationHook(animation);

  return (
    <Component ref={ref} className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

// Convenient pre-configured animated elements
export function FadeIn(props: AnimatedElementProps) {
  return <AnimatedElement animation={{ effect: "fade-in" }} {...props} />;
}