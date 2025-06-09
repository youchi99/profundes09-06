import PageHeading from "@/components/page-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { ProjectItem, projects } from "@/lib/constants";
import Image from "next/image";
import { notFound } from "next/navigation";

// interface ProjectDetails {
//   slug: string;
//   title: string;
//   description: string;
//   recentProjectText: string;
//   images: {
//     src: string;
//     alt: string;
//   }[];
//   challengeText: string;
//   resultText: string;
//   category: string;
//   completionDate: string;
//   features: string[];
// }

// This would typically come from your API or database
async function getProjectDetails(slug: string): Promise<ProjectItem | null> {
  // Mock data for demonstration
  // const project: ProjectDetails = {
  //   slug,
  //   title: "Modern Minimalist Living Room Design",
  //   description:
  //     "A contemporary living room design that combines comfort with style. Features clean lines, neutral colors, and natural materials to create a serene and welcoming space that reflects modern aesthetic sensibilities.",
  //   recentProjectText:
  //     "This project showcases our latest work in contemporary interior design, where we transformed a traditional space into a modern sanctuary that perfectly balances aesthetics with functionality.",
  //   images: [
  //     {
  //       src: "/30-14.jpg",
  //       alt: "Modern living room with minimalist furniture and natural light",
  //     },
  //     {
  //       src: "/31-18.jpg",
  //       alt: "Contemporary dining area with designer lighting",
  //     },
  //     {
  //       src: "/1-58.jpg",
  //       alt: "Elegant workspace corner with custom furniture",
  //     },
  //   ],
  //   challengeText:
  //     "The main challenge was to create a space that felt both luxurious and welcoming while maintaining the minimalist aesthetic. We needed to carefully balance the use of materials, lighting, and spatial arrangement to achieve this delicate harmony.",
  //   resultText:
  //     "The final design exceeded expectations, creating a space that feels both sophisticated and comfortable. The careful selection of materials and thoughtful space planning resulted in a living area that perfectly serves both aesthetic and functional purposes.",
  //   category: "Living Room",
  //   completionDate: "March 2024",
  //   features: [
  //     "Custom-designed furniture",
  //     "Natural lighting optimization",
  //     "Sustainable materials",
  //     "Smart home integration",
  //   ],
  // };

  const project = projects.find((project) => project.slug === slug);

  return project ?? null;
}

type Params = Promise<{ slug: string }>;

// export async function generateMetadata({ params }: { params: Params }) {
//   const { slug } = await params
// }

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = await getProjectDetails(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHeading title="Détails du Projet" actionText="Détails du Projet" />

      <section className="w-full py-20">
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0">
          {/* Header Section */}
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-5">
            <FadeIn className="w-full md:w-[51%] lg:w-[48%] flex justify-center lg:justify-start mb-[30px] xl:mb-0">
              <div className="w-[58%] md:w-[50%] lg:w-[40%] translate-y-[40px] opacity-0">
                <div className="pb-[11px] border-b border-white/70 text-center lg:text-left">
                  <h6 className="text-[1.5em] xl:text-[1.6em] leading-[1.1em] font-figtree capitalize">
                    Détails du Projet
                  </h6>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="w-full lg:w-[73%] flex flex-col items-start gap-5">
              <div className="m-[0px_0px_0px_0px] lg:m-[0px_0px_10px_0px] xl:m-[-12px_0px_-9px_0px] translate-y-[40px] opacity-0">
                <div className="text-center lg:text-start">
                  <h1 className="text-[3em] lg:text-[2.8em] xl:text-[4em] leading-[1.1em] font-figtree mb-5 capitalize">
                    <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                      {project.title}
                    </span>
                  </h1>
                </div>
              </div>

              <div className=" flex flex-col gap-5 translate-y-[40px] opacity-0">
                {project.description.map((description, index) => (
                  <div
                    key={index}
                    className="-mb-3.75 text-center lg:text-start"
                  >
                    <p className="text-[1em] leading-normal font-figtree text-muted-foreground">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Project Box */}
              {/* <SlideUp
                className=""
                animation={{ effect: "slide-up", duration: 1.2 }}
              >
                <div className="bg-[#1e1e1e] p-5 mt-6.5 text-center lg:text-start">
                  <h6 className="text-[1.4em] lg:text-[1.6em] leading-[1.1em] font-figtree mb-5 capitalize">
                    Projet Récent
                  </h6>

                  <p className="text-[1em] leading-normal font-figtree text-muted-foreground">
                    {project.recentProjectText}
                  </p>
                </div>
              </SlideUp> */}
            </FadeIn>
          </div>

          {/* Image Gallery */}
          <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 mb-16">
            {project.images.map((image, index) => (
              <div key={index} className="translate-y-[40px] opacity-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-square overflow-hidden cursor-pointer">
                      <Image
                        src={image}
                        alt={project.title}
                        width={800}
                        height={560}
                        sizes="(max-width: 800px) 100vw, 800px"
                        className="w-full h-full inline-block brightness-61 contrast-119 blur-0 saturate-0 hue-rotate-0 align-middle duration-300 hover:brightness-100 hover:contrast-100 hover:saturate-100 shadow hover:scale-110"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="md:max-w-[900px] bg-[#282828] p-0 rounded-none border-none flex items-center justify-center">
                    <DialogTitle className="sr-only">
                      Image du Projet
                    </DialogTitle>
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={project.title}
                        width={800}
                        height={560}
                        sizes="(max-width: 800px) 100vw, 800px"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </FadeIn>

          {/* Challenge and Results Section */}
          {/* <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[57%] border-b mb-2.5 pb-5 lg:pb-0 lg:mb-0 lg:border-b-0 lg:pr-11.5 lg:mr-7 lg:border-r border-white/10 text-center lg:text-start">
              <h6 className="text-[1.4em] lg:text-[1.6em] leading-[1.1em] font-figtree mb-5 capitalize">
                Défis & Solutions
              </h6>

              <p className="text-[1em] leading-normal font-figtree text-muted-foreground">{project.challengeText}</p>
            </div>

            <div className="w-full text-center lg:text-start">
              <h6 className="text-[1.4em] lg:text-[1.6em] leading-[1.1em] font-figtree mb-5 capitalize">
                Résultats & Impact
              </h6>

              <p className="text-[1em] leading-normal font-figtree text-muted-foreground">{project.resultText}</p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
