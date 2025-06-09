"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";


interface CounterProps {
  format?: (value: number) => string;
  targetValue: number;
  startValue?: number;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
}

export const Formatter = {
  number: (value: number) =>
    Intl.NumberFormat("en-US").format(+value.toFixed(0)),
  currency: (value: number) =>
    Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
      +value.toFixed(0)
    ),
};

export default function Counter({
  format = Formatter.number,
  targetValue,
  startValue = 0,
  direction = "up",
  duration = 1.5,
  delay = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isGoingUp = direction === "up";
  const [count, setCount] = useState(startValue);
  const counterObj = useRef({ value: startValue });

  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create the scroll trigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      once: true,
      onEnter: () => {
        // Apply delay if needed
        setTimeout(() => {
          // Animate the counter
          gsap.to(counterObj.current, {
            value: isGoingUp ? targetValue : startValue,
            duration: 1.5,
            delay: delay,
            ease: "power4.inOut",
            onUpdate: () => {
              // Update the count state with the current value
              setCount(counterObj.current.value);
              // Update the DOM element text directly
              if (ref.current) {
                ref.current.textContent = format(counterObj.current.value);
              }
            }
          });
        }, delay);
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [targetValue, startValue, isGoingUp, delay, duration, format]);

  return (
    <span ref={ref} className={className}>
      {format(count)}
    </span>
  );
}
