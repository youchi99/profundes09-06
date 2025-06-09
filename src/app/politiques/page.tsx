import PageHeading from "@/components/page-heading";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Clock,
  CreditCard,
  Edit,
  FileText,
  Lock,
  MessageSquare,
  PenTool,
  Scale,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function PolitiquesPage() {
  return (
    <>
      <PageHeading title="Politiques" actionText="Politiques" />

      <section>
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 py-25">
          {/* Hero section */}
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl mb-16 bg-background border border-border translate-y-[40px] opacity-0">
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-5">
                <div className="bg-primary/10 p-6 rounded-full">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <div className="text-center md:text-left font-figtree">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Politiques
                  </h2>
                  <p className="max-w-2xl">
                    Nous nous engageons à maintenir des relations transparentes
                    et équitables avec nos clients. Ce document détaille nos
                    politiques et procédures pour assurer une collaboration
                    harmonieuse.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="prose prose-invert max-w-none">
            {/* Section 1 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Devis et Estimation des Coûts
                </h2>
              </div>

              <div className="bg-background rounded-lg border border-border overflow-hidden">
                <div className="divide-y divide-border">
                  <div className="p-6">
                    <h4 className="text-foreground font-medium mb-3 flex items-center">
                      <span className="bg-primary/20 p-1.5 rounded-md mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </span>
                      Transparence des prix
                    </h4>
                    <p className="pl-10">
                      Tous les devis sont gratuits après consultation initiale,
                      avec un détail des coûts pour chaque phase du projet.
                    </p>
                  </div>

                  <div className="p-6">
                    <h4 className="text-foreground font-medium mb-3 flex items-center">
                      <span className="bg-primary/20 p-1.5 rounded-md mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </span>
                      Validité du devis
                    </h4>
                    <p className="pl-10">
                      Le devis est valable pendant 7 jours, après quoi un
                      nouveau devis sera nécessaire selon les conditions
                      actuelles.
                    </p>
                  </div>

                  <div className="p-6">
                    <h4 className="text-foreground font-medium mb-3 flex items-center">
                      <span className="bg-primary/20 p-1.5 rounded-md mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </span>
                      Modification des coûts
                    </h4>
                    <p className="pl-10">
                      Toute modification importante après acceptation du devis
                      entraînera un ajustement des coûts, soumis à
                      l&apos;approbation du client.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Commande et Paiement
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-background p-6 rounded-lg border border-border flex flex-col">
                  <div className="bg-primary/10 p-3 rounded-lg self-start mb-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-foreground font-medium mb-3">
                    Accompte initial
                  </h4>
                  <p className="flex-grow">
                    Un acompte de 50% est exigé avant le début des travaux pour
                    couvrir une partie des coûts liés aux matériaux et à la
                    planification.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border flex flex-col">
                  <div className="bg-primary/10 p-3 rounded-lg self-start mb-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-foreground font-medium mb-3">
                    Paiement échelonné
                  </h4>
                  <p className="flex-grow">
                    Le paiement peut être effectué en plusieurs fois : 25% mi-la
                    production 25% a la fin de projet.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border flex flex-col">
                  <div className="bg-primary/10 p-3 rounded-lg self-start mb-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-foreground font-medium mb-3">
                    Retard de paiement
                  </h4>
                  <p className="flex-grow">
                    En cas de retard de paiement excédant 7 jours, des frais
                    supplémentaires pourront être appliqués conformément aux
                    conditions établies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Livraison et Délais
                </h2>
              </div>

              <div className="bg-background rounded-lg border border-border overflow-hidden">
                <div className="divide-y divide-border">
                  <div className="p-6">
                    <h4 className="text-foreground font-medium mb-3 flex items-center">
                      <span className="bg-primary/20 p-1.5 rounded-md mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </span>
                      Délai de livraison
                    </h4>
                    <p className="pl-10">
                      Le délai est précisé dans le devis initial. Il peut être
                      modifié en cas de conditions imprévues, mais le client
                      sera informé.
                    </p>
                  </div>

                  <div className="p-6">
                    <h4 className="text-foreground font-medium mb-3 flex items-center">
                      <span className="bg-primary/20 p-1.5 rounded-md mr-3">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </span>
                      Retard de livraison
                    </h4>
                    <p className="pl-10">
                      Si le retard est dû à l&apos;entreprise, un geste
                      commercial ou une réduction sera envisagé. Les délais
                      externes ne sont pas sous contrôle de l&apos;entreprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Réclamations et Satisfaction Client
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Service après-vente
                    </h4>
                  </div>
                  <p>
                    L&apos;entreprise s&apos;engage à résoudre toute
                    problématique de qualité dans un délai de 30 jours après la
                    livraison.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Réclamations
                    </h4>
                  </div>
                  <p>
                    Le client doit informer l&apos;entreprise des réclamations
                    dans les 7 jours suivant le problème. Un suivi sera
                    effectué.
                  </p>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="text-foreground font-medium">Feedback</h4>
                </div>
                <p>
                  Les clients sont encouragés à donner leur avis pour améliorer
                  les services et assurer leur satisfaction.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Confidentialité
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Protection des données
                    </h4>
                  </div>
                  <p>
                    Les informations personnelles des clients sont protégées et
                    ne seront pas partagées sans consentement, sauf si requis
                    par la loi.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Accès aux projets
                    </h4>
                  </div>
                  <p>
                    Les détails des projets sont confidentiels et ne seront pas
                    partagés sans l&apos;accord du client, sauf si requis par la
                    loi.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded-full">
                  <Shield className="h-4 w-4 text-primary" />
                </div>

                <p className="text-foreground/90">
                  Nous prenons très au sérieux la protection de vos données
                  personnelles et la confidentialité de vos projets. Notre
                  politique complète de confidentialité est disponible sur
                  demande.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Edit className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Modifications et Annulations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Edit className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Modifications
                    </h4>
                  </div>
                  <p>
                    Le client peut demander des modifications, sous réserve de
                    disponibilité et d&apos;impact sur les coûts et délais. Les
                    modifications seront facturées.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <AlertTriangle className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Annulation de projet
                    </h4>
                  </div>
                  <p>
                    Si le projet est annulé avant le début des travaux,
                    l&apos;acompte n&apos;est pas remboursable. En cas
                    d&apos;annulation après le début des travaux, des frais
                    supplémentaires seront appliqués.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Responsabilité
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Scale className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Responsabilité de l&apos;entreprise
                    </h4>
                  </div>
                  <p>
                    L&apos;entreprise s&apos;engage à livrer un travail conforme
                    aux normes, mais n&apos;est pas responsable des facteurs
                    extérieurs.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Scale className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Responsabilité du client
                    </h4>
                  </div>
                  <p>
                    Le client doit respecter les conditions de paiement et
                    fournir l&apos;accès au site de travail, ainsi que toutes
                    les informations nécessaires à l&apos;exécution du projet.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Communication
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Canaux de communication
                    </h4>
                  </div>
                  <p>
                    Toutes les communications doivent être faites par écrit
                    (email ou WhatsApp).
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Réponse rapide
                    </h4>
                  </div>
                  <p>
                    L&apos;entreprise s&apos;engage à répondre à toutes les
                    demandes dans un délai de 48 heures ouvrables.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Sécurité et Accès
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Sécurité des équipements
                    </h4>
                  </div>
                  <p>
                    L&apos;entreprise n&apos;est pas responsable des dommages ou
                    pertes causés par des tiers ou des conditions inadéquates.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Accès aux locaux ou sites de travail
                    </h4>
                  </div>
                  <p>
                    Le client doit garantir l&apos;accès au site. Tout retard dû
                    à un accès restreint est sous sa responsabilité.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Garantie et Maintenance
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Garantie (60 jours)
                    </h4>
                  </div>
                  <p>
                    Les défauts liés au projet sont corrigés gratuitement
                    pendant 60 jours après livraison. Au-delà, toute
                    intervention est facturée.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <PenTool className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">Maintenance</h4>
                  </div>
                  <p>
                    Après la garantie, la maintenance ou les modifications
                    nécessitent un contrat payant.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique d&apos;Engagement et Éthique
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Scale className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">Conformité</h4>
                  </div>
                  <p>
                    L&apos;entreprise respecte toutes les normes légales et
                    éthiques de son secteur.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <AlertTriangle className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">
                      Refus de projet
                    </h4>
                  </div>
                  <p>
                    Elle peut refuser tout projet illégal ou contraire à ses
                    valeurs.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 */}
            <div className="mb-16 translate-y-[40px] opacity-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Politique de Litiges et Médiation
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">Médiation</h4>
                  </div>
                  <p>
                    Un règlement amiable sera tenté avant toute action légale.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Scale className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium">Juridiction</h4>
                  </div>
                  <p>
                    Les litiges relèvent de la juridiction du siège de
                    l&apos;entreprise, sauf mention contraire au contrat.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded-full">
                  <Scale className="h-4 w-4 text-primary" />
                </div>

                <p className="text-foreground/90">
                  Nous privilégions toujours une résolution à l&apos;amiable des
                  différends. Notre objectif est de maintenir une relation de
                  confiance avec nos clients.
                </p>
              </div>
            </div>

            {/* Contact section */}
            <div className="bg-gradient-to-br from-primary/10 to-background p-8 rounded-2xl border border-border translate-y-[40px] opacity-0">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    Des questions sur nos politiques?
                  </h3>
                  <p>
                    Notre équipe est disponible pour répondre à toutes vos
                    questions concernant nos politiques et procédures.
                  </p>
                </div>

                <div className="w-[50%] lg:w-[15%]">
                  <Link
                    href="/demandez-un-devis"
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        size: "default",
                        className:
                          "w-full h-auto px-7.5 py-5 rounded-full font-figtree text-[15px] leading-none capitalize",
                      })
                    )}
                  >
                    <span>Contactez-nous</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
