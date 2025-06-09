import FAQSection, { FaqItem } from "@/components/faq-section";
import PageHeading from "@/components/page-heading";   

const faqData: FaqItem[] = [
  {
    question: "Quel est le processus de conception d'un projet d'aménagement intérieur ?",
    answer:
      "Notre processus commence par une consultation approfondie pour comprendre vos besoins et aspirations. Nous élaborons ensuite des concepts 3D, créons des plans détaillés, et vous accompagnons tout au long de la réalisation. Chaque étape est validée avec vous pour garantir un résultat parfaitement adapté à vos attentes.",
  },
  {
    question: "Quelle est la durée moyenne d'un projet d'aménagement intérieur ?",
    answer:
      "La durée varie selon l'ampleur du projet, allant généralement de 2 à 6 mois. Les petits projets peuvent être réalisés en quelques semaines, tandis que les rénovations complètes nécessitent plus de temps. Nous établissons un calendrier précis dès le début du projet et vous tenons informés à chaque étape.",
  },
  {
    question: "Comment gérez-vous le budget d'un projet d'aménagement ?",
    answer:
      "Nous établissons un budget détaillé dès le début du projet, incluant tous les coûts (matériaux, main-d'œuvre, frais de conception). Notre approche transparente vous permet de suivre chaque dépense. Nous proposons également différentes options pour adapter le projet à votre budget tout en maintenant une qualité exceptionnelle.",
  },
  {
    question: "Proposez-vous des solutions sur mesure pour les petits espaces ?",
    answer:
      "Absolument. Notre expertise en optimisation d'espace nous permet de créer des solutions ingénieuses pour les petits espaces. Nous utilisons des techniques innovantes de rangement, des meubles sur mesure et des astuces visuelles pour maximiser l'espace disponible tout en conservant esthétique et fonctionnalité.",
  },
  {
    question: "Quelle est votre approche en matière de design durable ?",
    answer:
      "Nous privilégions les matériaux écologiques, les fournisseurs locaux et les solutions énergétiquement efficaces. Notre approche durable intègre également la réutilisation d'éléments existants et le choix de matériaux recyclables. Nous vous guidons vers des options respectueuses de l'environnement sans compromettre le design.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeading title="FAQ" actionText="FAQ" />

      <FAQSection faqData={faqData} />
    </>
  );
}
