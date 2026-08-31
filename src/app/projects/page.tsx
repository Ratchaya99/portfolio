import Image from "next/image";
import Link from "next/link";
import { projects } from "@/shares/mocks/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-14">
        <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold">
          PROJECTS
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Projects I&apos;ve worked on
          <span className="text-primary">.</span>
        </h1>
      </div>

      {/* Projects */}
      <div className="grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group border-b border-black/10 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
          >
            <article className="relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5">
              {/* Hover Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative flex h-full flex-col">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs text-black/40">{project.year}</span>
                </div>

                {/* Project */}
                <div className="mt-8">
                  {project.logo && (
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-white p-2.5">
                      <Image
                        src={project.logo}
                        alt=""
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}

                  <h2 className="mt-5 text-xl font-bold leading-snug tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/50">
                    {project.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-black/40 transition-colors group-hover:text-black">
                    View project
                  </span>

                  <span className="text-lg text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
                    →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Count */}
      <div className="pt-6">
        <span className="text-xs font-medium uppercase tracking-wider text-black/30">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </div>
    </main>
  );
}
