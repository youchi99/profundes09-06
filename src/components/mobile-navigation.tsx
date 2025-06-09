"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

type menuItems = {
  label: string;
  url: string;
};

// Using the same menu items as in the header component
interface MobileNavigationProps {
  menuItems: menuItems[];
  isActive: boolean;
  setIsActive: (args: boolean) => void;
  pathname: string;
}

export default function MobileNavigation({
  menuItems,
  isActive,
  setIsActive,
  pathname,
}: MobileNavigationProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    if (isActive) {
      // Animate menu container from left to right
      gsap.fromTo(
        menuRef.current,
        {
          y: "-100%",
        },
        {
          y: "0%",
          duration: 0.5,
          ease: "power4.inOut",
        }
      );

      // Animate menu items with stagger effect and delay
      gsap.fromTo(
        menuItemsRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.3, // Add initial delay before items start appearing
          ease: "power4.out",
        }
      );
    } else {
      // Animate menu container out
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power4.inOut",
      });

      // Animate menu items out with reverse stagger
      gsap.to(menuItemsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: -0.05,
        ease: "power4.in",
      });
    }
  }, [isActive]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isActive) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [isActive]);

  return (
    <div>
      {/* Overlay */}
      {isActive && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-500"
          onClick={() => setIsActive(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-screen flex-col items-center justify-center bg-background/95 backdrop-blur-md px-7.5 -translate-y-[100%]"
        )}
      >
        <div className="flex flex-col gap-5 w-full max-w-md">
          {menuItems.map(({ label, url }, index) => (
            <Link
              key={index}
              href={url}
              ref={(el) => {
                menuItemsRef.current[index] = el;
              }}
              className={cn(
                "block text-[2em] leading-[1.1em] font-figtree transition-all duration-300 capitalize hover:!scale-105 text-muted-foreground hover:text-accent-foreground relative group",
                pathname === url && "text-accent-foreground"
              )}
              onClick={() => setIsActive(false)}
            >
              {label}
              {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-foreground transition-all duration-300 group-hover:w-full" /> */}
            </Link>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground/50 uppercase">
          © {new Date().getFullYear()} Profundes
        </div>
      </div>
    </div>
  );
}
