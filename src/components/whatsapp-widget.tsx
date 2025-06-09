"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Icon } from "@iconify/react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  showPopup?: boolean
  popupText?: string
}

export default function WhatsappWidget({
  phoneNumber,
  message = "Bonjour ! Je souhaite en savoir plus sur vos services.",
  showPopup = true,
  popupText = "Besoin d'aide ? Discutez avec nous !",
}: WhatsAppButtonProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPrivacyBannerVisible, setIsPrivacyBannerVisible] = useState(false)

  // Show widget after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000) // Show after 1 second

    return () => clearTimeout(timer)
  }, [])

  // Show popup after a delay
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setIsPopupVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showPopup])

  // Listen for privacy banner visibility
  useEffect(() => {
    const checkPrivacyBanner = () => {
      const banner = document.querySelector('[data-privacy-banner]')
      setIsPrivacyBannerVisible(!!banner)
    }

    // Initial check
    checkPrivacyBanner()

    // Set up observer to watch for banner changes
    const observer = new MutationObserver(checkPrivacyBanner)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  // Close popup
  const handleClosePopup = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPopupVisible(false)
  }

  // Generate WhatsApp URL
  const getWhatsAppUrl = () => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodedMessage}`
  }

  return (
    <div 
      className={`fixed z-30 right-6 flex flex-col items-end gap-4 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isPrivacyBannerVisible ? 'bottom-40 md:bottom-24' : 'bottom-6'
      }`}
    >
      {/* Popup message */}
      {/* [#1e1e1e] */}
      {showPopup && isPopupVisible && (
        <div className="bg-background/95 backdrop-blur-sm text-white py-4 px-6 rounded-lg shadow-lg max-w-xs animate-fade-in relative border border-white/10">
          <button
            onClick={handleClosePopup}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Close popup"
          >
            <X size={16} />
          </button>
          <div className="pr-6">
            <p className="text-sm font-figtree leading-relaxed">{popupText}</p>
          </div>
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center size-14 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        onClick={() => setIsPopupVisible(false)}
      >
        <Icon 
          icon="mdi:whatsapp" 
          className="size-7 transition-transform duration-300 group-hover:scale-110" 
        />
        {/* Continuous ping animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        {/* Additional subtle pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10 [animation-delay:1s]" />
      </a>
    </div>
  )
}
