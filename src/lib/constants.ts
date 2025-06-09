import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  Icon: React.ElementType;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://web.facebook.com/profile.php?id=61575818141981",
    Icon: Facebook,
  },
  {
    platform: "Linkedin",
    url: "https://www.linkedin.com/in/profundes-sarl-01600335b/",
    Icon: Linkedin,
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/profundes_design/",
    Icon: Instagram,
  },
  {
    platform: "Youtube",
    url: "https://www.youtube.com/@profundes",
    Icon: Youtube,
  },
];

export interface ProjectItem {
  title: string;
  imageUrl: string;
  shortDescription: string;
  description: string[];
  tags: string[];
  slug: string;
  images: string[];
}

export const projects: ProjectItem[] = [
  {
    title: "Etude de projet d'une hôpital",
    imageUrl: "/images/projets/hopital/hopital-22.png",
    shortDescription:
      "Une conception révolutionnaire d'établissement de santé qui redéfinit l'architecture médicale moderne. Ce projet hospitalier complet représente l'excellence en matière de design de santé.",
    description: [
      "Une conception révolutionnaire d'établissement de santé qui redéfinit l'architecture médicale moderne. Ce projet hospitalier complet représente l'excellence en matière de design de santé, où chaque élément a été méticuleusement planifié pour améliorer les soins aux patients et l'efficacité opérationnelle.",
      "L'établissement intègre des technologies médicales de pointe, des espaces de soins innovants et des principes de design durable qui créent des environnements thérapeutiques. La disposition optimise les flux de travail médicaux tout en garantissant le confort et l'intimité des patients.",
      "Les caractéristiques avancées comprennent des systèmes de bâtiment intelligents, une infrastructure écoénergétique et des espaces flexibles qui peuvent s'adapter aux besoins futurs de santé. Le design privilégie la lumière naturelle, les espaces verts et les environnements apaisants qui contribuent à la guérison des patients et au bien-être du personnel.",
      "Ce projet établit de nouvelles normes en architecture de santé en combinant fonctionnalité et excellence esthétique.",
    ],
    tags: ["Architecture Médicale", "Design Moderne"],
    slug: "conception-et-realisation-dune-hopital",
    images: [
      "/images/projets/hopital/hopital-22.png",
      "/images/projets/hopital/hopital-5.png",
      "/images/projets/hopital/hopital-2.png",
      "/images/projets/hopital/hopital-3.png",
      "/images/projets/hopital/hopital-4.png",
      "/images/projets/hopital/hopital-9.png",
      "/images/projets/hopital/hopital-10.png",
      "/images/projets/hopital/hopital-6.png",
      "/images/projets/hopital/hopital-7.png",
      "/images/projets/hopital/hopital-19.png",
      "/images/projets/hopital/hopital-1.png",
      "/images/projets/hopital/hopital-11.png",
      "/images/projets/hopital/hopital-13.png",
      "/images/projets/hopital/hopital-14.png",
      "/images/projets/hopital/hopital-18.png",
      "/images/projets/hopital/hopital-15.png",
      "/images/projets/hopital/hopital-17.png",
      "/images/projets/hopital/hopital-8.png",
      "/images/projets/hopital/hopital-12.png",
      "/images/projets/hopital/hopital-16.png",
      "/images/projets/hopital/hopital-21.png",
      "/images/projets/hopital/hopital-20.png",
      "/images/projets/hopital/hopital-23.png",
    ],
  },
  {
    title: "Etude de projet d'un hôtel de luxe",
    imageUrl: "/images/projets/hotel/hotel-1.png",
    shortDescription:
      "Une conception extraordinaire d'hôtel de luxe qui incarne l'excellence dans l'hospitalité. Ce projet visionnaire redéfinit l'hébergement de luxe grâce à sa fusion magistrale de grandeur architecturale.",
    description: [
      "Une conception extraordinaire d'hôtel de luxe qui incarne l'excellence dans l'hospitalité. Ce projet visionnaire redéfinit l'hébergement de luxe grâce à sa fusion magistrale de grandeur architecturale et de design intérieur sophistiqué.",
      "L'hôtel présente des espaces méticuleusement conçus qui créent une expérience inoubliable pour les clients, de l'entrée majestueuse aux chambres intimes. Les prestations haut de gamme comprennent des restaurants de classe mondiale, des installations de spa exclusives et des espaces de divertissement innovants.",
      "Le design intègre une technologie de pointe tout en maintenant une élégance intemporelle, avec une attention portée à chaque détail, de l'éclairage personnalisé au mobilier sur mesure. Le luxe durable est atteint grâce à des systèmes de bâtiment intelligents et des matériaux écologiques, assurant une responsabilité environnementale sans compromettre le confort.",
      "Ce projet illustre une planification spatiale innovante qui maximise l'intimité des clients tout en créant des opportunités d'interaction sociale. Cette conception d'hôtel représente l'avenir de l'hospitalité de luxe, où un service exceptionnel rencontre l'excellence architecturale.",
    ],
    tags: ["Design de Luxe", "Architecture Hôtelière"],
    slug: "conception-et-realisation-dun-hotel-de-luxe",
    images: [
      "/images/projets/hotel/hotel-1.png",
      "/images/projets/hotel/hotel-2.png",
      "/images/projets/hotel/hotel-3.png",
    ],
  },
];
