import ProjectItem from "@/components/project-item";
import { FadeIn } from "@/components/ui/gsap-animated-element";
import { projects } from "@/lib/constants";

export default function ProjectSection() {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-[70px] pb-[80px]">
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div>
            <div className="max-w-full">
              <div className="-mt-[29px] -mb-[32px] h-full">
                <FadeIn>
                  <div className="text-center translate-y-[40px] opacity-0">
                    <h2 className="text-[4em] md:text-[5em] xl:text-[8em] leading-[1.1em] font-figtree mb-5 capitalize">
                      <span className="bg-transparent bg-linear-[137deg] from-[#8C8B8B] from-0% to-[#FFFFFF] to-100% bg-clip-text [-webkit-text-fill-color:_transparent]">
                        Voir Notre Projet
                      </span>
                    </h2>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Project Items */}
          <FadeIn animation={{ stagger: 0.2, duration: 1.5 }} className="flex flex-col md:flex-row gap-5 mt-[86px]">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.slug}
                className="w-full last:ml-0 last:mt-[60px] last:lg:ml-[60px] last:lg:mt-[70px] translate-y-[100px] opacity-0"
              >
                <ProjectItem
                  title={project.title}
                  imageUrl={project.imageUrl}
                  description={project.shortDescription}
                  tags={project.tags}
                  slug={project.slug}
                />
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
