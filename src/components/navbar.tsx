"use client";

import { Logo } from "@/components/logo";
import MobileNavigation from "@/components/mobile-navigation";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation.js";
import { useState } from "react";

const menuItems = [
  { label: "Accueil", url: "/" },
  { label: "À propos", url: "/a-propos" },
  { label: "Nos Services", url: "/services" },
  { label: "Nos Projets", url: "/projets" },
  { label: "FAQ's", url: "/faq" },
];

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  return (
    <FadeIn>
      <div className="relative z-50 opacity-0">
        <nav className="w-full">
          <div className="relative z-60 max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-10 pb-7.5 -mb-35">
            <div className="flex items-center gap-5">
              <div className="w-[40%] flex z-60">
                <Logo />
              </div>

              {/* m-auto */}
              <div className="w-full hidden size-fit items-center justify-end xl:flex">
                <ul className="flex items-center gap-10">
                  {menuItems.map(({ label, url }, index) => (
                    <li key={index}>
                      <Link
                        href={url}
                        className={cn(
                          "text-[1em] leading-[1.1em] font-figtree font-medium capitalize text-muted-foreground hover:text-accent-foreground block duration-150",
                          pathname === url && "text-accent-foreground"
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/*  */}
              <div
                className="ml-auto w-10 h-10 z-60 flex xl:hidden flex-col justify-center items-center cursor-pointer"
                onClick={() => setIsActive(!isActive)}
                aria-label={isActive ? "Close menu" : "Open menu"}
              >
                <span
                  className={cn(
                    "w-6 h-[2px] bg-foreground mb-1.5 block origin-center transition-transform duration-300",
                    isActive && "rotate-45 translate-y-2"
                  )}
                />
                <span
                  className={cn(
                    "w-6 h-[2px] bg-foreground block origin-center transition-transform duration-300",
                    isActive && "-rotate-45 -translate-y-2"
                  )}
                />
              </div>
            </div>
          </div>
        </nav>

        {isActive && (
          <MobileNavigation
            menuItems={menuItems}
            isActive={isActive}
            setIsActive={setIsActive}
            pathname={pathname}
          />
        )}
      </div>
    </FadeIn>
  );
}
