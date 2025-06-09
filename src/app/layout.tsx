import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { NewsletterBanner } from "@/components/newsletter-banner";
import PrivacyBanner from "@/components/privacy-banner";
import { LenisProvider } from "@/components/ui/lenis-provider";
import WhatsappWidget from "@/components/whatsapp-widget";
import type { Metadata } from "next";
import { Figtree, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agence de Design d'Intérieur | Services Professionnels de Décoration",
  description:
    "Donnez vie à votre espace avec notre expertise en design d'intérieur. Nous créons des ambiances élégantes et fonctionnelles qui reflètent votre personnalité et répondent à vos besoins quotidiens.",
  keywords: [
    "design d'intérieur",
    "décoration d'intérieur",
    "design professionnel",
    "architecte d'intérieur",
    "décoration résidentielle",
    "design commercial",
    "aménagement intérieur",
    "stylisme d'intérieur",
  ],
  openGraph: {
    title: "Agence de Design d'Intérieur | Services Professionnels de Décoration",
    description:
      "Donnez vie à votre espace avec notre expertise en design d'intérieur. Nous créons des ambiances élégantes et fonctionnelles qui reflètent votre personnalité et répondent à vos besoins quotidiens.",
    url: "https://profundes.ma",
    siteName: "Agence de Design d'Intérieur",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Présentation de l'Agence de Design d'Intérieur",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence de Design d'Intérieur | Services Professionnels de Décoration",
    description:
      "Donnez vie à votre espace avec notre expertise en design d'intérieur. Des solutions sur mesure pour des intérieurs d'exception.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://profundes.ma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${figtree.variable} antialiased`}>
        <LenisProvider>
          <Navbar />

          {/* className="min-h-screen bg-black text-white" */}
          <main>
            {children}

            {/* Newsletter Banner */}
            <NewsletterBanner />

            {/* Whatsapp Widget */}
            <WhatsappWidget
              phoneNumber="+212664084234"
              // message="Hi! I saw your website and I'm interested in your services."
            />

            {/* Privacy Banner */}
            <PrivacyBanner />
          </main>

          <Footer />

          {/* Structured data for SEO */}
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Agence de Design d'Intérieur",
                description:
                  "Donnez vie à votre espace avec notre expertise en design d'intérieur. Nous créons des ambiances élégantes et fonctionnelles qui reflètent votre personnalité et répondent à vos besoins quotidiens. Notre équipe de designers passionnés transforme vos espaces en lieux d'exception.",
                url: "https://profundes.ma",
                logo: "https://profundes.ma/images/logo.png",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Imm 33, appt 3, 1er etage rue loubnane",
                  addressLocality: "Rabat",
                  addressRegion: "Océan",
                  postalCode: "10000",
                  addressCountry: "MA",
                },
                telephone: "+212664084234",
                email: "contact@profundes.ma",
                priceRange: "MAD",
                serviceArea: {
                  "@type": "GeoCircle",
                  // geoMidpoint: {
                  //   "@type": "GeoCoordinates",
                  //   latitude: 48.8566,
                  //   longitude: 2.3522,
                  // },
                  geoRadius: "50000",
                },
                sameAs: [
                  "https://web.facebook.com/profile.php?id=61575818141981",
                  "https://www.linkedin.com/in/profundes-sarl-01600335b/",
                  "https://www.instagram.com/profundes_design/",
                  "https://www.youtube.com/@profundes"
                ],
              }),
            }}
          />
        </LenisProvider>
      </body>
    </html>
  );
}
