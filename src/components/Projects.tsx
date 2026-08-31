import Image from "next/image";
import Link from "next/link";
import { projects } from "@/shares/mocks/data/projects";

export function Projects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section id="projects" className="border-b border-black/10 py-24">
      {/* Section Header */}
      <div className="mb-12">
        <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold">
          SELECTED WORK
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Projects I&apos;ve worked on<span className="text-primary">.</span>
        </h2>
      </div>

      {/* Projects */}
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
            <article className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black/20">
              {/* Thumbnail */}
              <div
                className={`relative w-full overflow-hidden bg-black/5 transition-all duration-500 ${
                  project.thumbnail ? "h-0 group-hover:h-44" : "hidden"
                }`}
              >
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                {/* Company / Year */}
                <div className="flex items-center justify-between gap-4">
                  {project.logo && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white p-1.5">
                      <Image
                        src={project.logo}
                        alt={`${project.title} company logo`}
                        width={28}
                        height={28}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <span className="ml-auto text-sm text-black/40">
                    {project.year}
                  </span>
                </div>

                {/* Project Info */}
                <div className="mt-7 flex-1">
                  <h3 className="text-xl font-bold leading-snug tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-black/60">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/60 transition-colors duration-300 group-hover:border-primary group-hover:text-black"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="text-sm font-medium">View project</span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* View More */}
      <div className="mt-8 flex justify-end">
        <Link
          href="/projects"
          className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-black hover:text-white"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
