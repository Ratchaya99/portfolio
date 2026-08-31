import { experiences } from "@/shares/mocks/data/experiences";

export function Experience() {
  const data = experiences;

  return (
    <section id="experience" className="border-b border-black/10 py-24">
      {/* Section Header */}
      <div className="mb-12">
        <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold">
          EXPERIENCE
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Where I&apos;ve worked
          <span className="text-primary">.</span>
        </h2>
      </div>

      {/* Experience List */}
      <div>
        {data.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="grid gap-2 md:gap-6 border-t border-black/10 py-10 md:grid-cols-[160px_1fr]"
          >
            {/* Period */}
            <div>
              <span className="text-sm font-medium text-black/40">
                {experience.period}
              </span>
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              {/* Role & Company */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {experience.role}
                </h3>

                <p className="mt-1 text-base font-semibold text-black/70">
                  {experience.company}
                </p>

                {experience.context && (
                  <p className="mt-1 text-sm text-black/60">
                    {experience.context}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 text-base leading-7 text-black/65">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/60 transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-black"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
