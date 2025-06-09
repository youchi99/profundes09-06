"use client";

import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface PrivacyBannerProps {
  privacyPolicyUrl?: string;
}

export default function PrivacyBanner({
  privacyPolicyUrl = "/politiques",
}: PrivacyBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check if user has already made a choice
  useEffect(() => {
    const consentStatus = localStorage.getItem("cookieConsent");
    if (!consentStatus) {
      // If no consent has been given yet, show the banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
        // Add a small delay before showing the banner to allow for smooth animation
        setTimeout(() => setIsVisible(true), 50);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle accept
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    // Wait for the fade-out animation to complete before hiding the banner
    setTimeout(() => setShowBanner(false), 300);
    // Here you would initialize any tracking scripts
  };

  // Handle decline
  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
    // Wait for the fade-out animation to complete before hiding the banner
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      data-privacy-banner
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg",
        "transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <div className="max-w-[1300px] mx-auto py-4 px-7.5 2xl:px-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-1.5 rounded-md">
              <Shield className="size-5 text-primary" />
            </div>
            <p className="text-[1em] text-muted-foreground font-figtree">
              En continuant votre navigation sur ce site, vous acceptez nos{" "}
              <Link
                href={privacyPolicyUrl}
                className="text-accent-foreground underline-offset-4 hover:underline transition-colors capitalize"
              >
                politiques
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={handleDecline}
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                  className:
                    "px-7.5 has-[>svg]:px-7.5 py-5 rounded-full font-figtree text-[15px] leading-none capitalize text-muted-foreground hover:text-foreground transition-colors bg-transparent hover:bg-transparent",
                })
              )}
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                  className:
                    "px-7.5 has-[>svg]:px-7.5 py-5 rounded-full font-figtree text-[15px] leading-none capitalize",
                })
              )}
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
