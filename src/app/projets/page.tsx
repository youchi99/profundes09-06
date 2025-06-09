import PageHeading from "@/components/page-heading";
import ProjectItem from "@/components/project-item";
import TestimonialSection from "@/components/testimonial-section";
import { projects } from "@/lib/constants";

export default function ProjectPage() {
  return (
    <>
      <PageHeading title="Nos Projets" actionText="Nos Projets" />

      {/* Project Section */}
      <section>
        <div className="max-w-[1300px] mx-auto px-7.5 2xl:px-0 pt-[100px] pb-[80px]">
          <div className="flex flex-col gap-5">
            {/* Project Items */}
            <div className="flex flex-col md:flex-row gap-5">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.slug}
                  className="w-full last:ml-0 last:mt-[60px] last:lg:ml-[60px] last:lg:mt-[70px]"
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
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
    </>
  );
}
