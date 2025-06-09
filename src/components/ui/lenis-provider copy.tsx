"use client";

import React, { createContext, useContext, useRef, useEffect } from "react";
import Lenis from "lenis";
import { getOptimalLenisConfig, setupLenisResponsive } from "@/lib/lenis";

// Create a context to provide Lenis instance across the app
const LenisContext = createContext<Lenis | null>(null);

// Hook to access Lenis instance
export const useLenis = () => useContext(LenisContext);

interface ReactLenisProps {
  children: React.ReactNode;
  root?: boolean;
  options?: Partial<Lenis["options"]>;
}

export function ReactLenisProvider({
  children,
  root = false,
  options = {},
}: ReactLenisProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize Lenis with optimal configuration
    const lenisOptions = {
      ...getOptimalLenisConfig(),
      ...options,
      wrapper: root ? window : wrapperRef.current || undefined,
      content: root ? document.documentElement : rootRef.current || undefined,
    };

    lenisRef.current = new Lenis(lenisOptions);

    // Setup responsive handling and GSAP integration
    const cleanup = setupLenisResponsive(lenisRef.current);

    return () => {
      cleanup();
      lenisRef.current?.destroy();
    };
  }, [options, root]);

  // For root level usage (typically at RootLayout), don't wrap in additional divs
  if (root) {
    return (
      <LenisContext.Provider value={lenisRef.current}>
        {children}
      </LenisContext.Provider>
    );
  }

  // For non-root usage, provide the wrapper divs for proper Lenis functionality
  return (
    <LenisContext.Provider value={lenisRef.current}>
      <div ref={wrapperRef} style={{ height: "100%", overflow: "hidden" }}>
        <div ref={rootRef}>{children}</div>
      </div>
    </LenisContext.Provider>
  );
}
