import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/shares/mocks/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);
  const projectIndex = projects.findIndex(
    (item) => item.slug === project?.slug,
  );
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const imageSrc = project?.banner ?? project?.thumbnail;

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Back */}
      <div className="mb-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/40 transition-colors hover:text-black"
        >
          <span>←</span>
          <span>Back to projects</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="border-b border-black/10 pb-16">
        <div className="flex flex-col gap-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-base text-black/50">
            <span>{project.year}</span>

            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="font-medium text-black/70">{project.role}</span>

            <span className="h-1.5 w-1.5 rounded-full bg-black/20" />

            <span>{project.company}</span>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {project.title}
            <span className="text-primary">.</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-base leading-7 text-black/60 md:text-lg">
            {project.description}
          </p>

          {/* Context */}
          {project.context && (
            <p className="text-sm text-black/40">{project.context}</p>
          )}
        </div>
      </section>

      {/* Preview */}
      {imageSrc && (
        <section className="py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-black/5">
            <Image
              src={imageSrc}
              alt={`${project.title} preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </section>
      )}

      {/* Project Information */}
      <section className="border-t border-black/10">
        {/* About */}
        {project.about && (
          <div className="grid gap-6 border-b border-black/10 py-12 md:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-wider text-black/40">
              About
            </span>

            <p className="max-w-2xl text-base leading-7 text-black/70">
              {project.about}
            </p>
          </div>
        )}

        {/* My Role */}
        {(project.role || project.roleDescription) && (
          <div className="grid gap-8 border-b border-black/10 py-12 md:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-wider text-black/40">
              My Role
            </span>

            <div className="max-w-3xl">
              {project.role && (
                <h2 className="text-xl font-bold tracking-tight">
                  {project.role}
                </h2>
              )}

              {project.roleDescription && (
                <p className="mt-3 text-base leading-7 text-black/60">
                  {project.roleDescription}
                </p>
              )}

              {project.responsibilities &&
                project.responsibilities.length > 0 && (
                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
                      Key Responsibilities
                    </p>

                    <ul className="mt-4 space-y-3">
                      {project.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex gap-3 text-sm leading-6 text-black/70"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.technologies?.length > 0 && (
          <div className="grid gap-6 py-12 md:grid-cols-[180px_1fr]">
            <span className="text-sm font-semibold uppercase tracking-wider text-black/40">
              Tech Stack
            </span>

            <div className="flex max-w-2xl flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-primary hover:bg-primary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Project Navigation */}
      <section className="border-t border-black/10 py-10">
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="text-sm font-medium text-black/50 transition-colors hover:text-black"
          >
            ← All projects
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group text-right"
          >
            <span className="text-sm font-medium text-black/50 transition-colors group-hover:text-black">
              Next project
            </span>

            <span className="ml-2 text-lg transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
