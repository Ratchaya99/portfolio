import { engineeringSkills, skillGroups } from "@/shares/mocks/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-b border-black/10 py-24">
      {/* Section Header */}
      <div className="mb-14">
        <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold">
          SKILLS
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          What I work with
          <span className="text-primary">.</span>
        </h2>
      </div>

      {/* Main Skills */}
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className={`
              group relative overflow-hidden rounded-2xl border
              border-black/10 bg-white p-7
              transition-all duration-300
              hover:-translate-y-1 hover:border-primary
              ${index === 0 ? "md:col-span-2" : ""}
            `}
          >
            {/* Accent */}
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/20 blur-2xl transition-all duration-500 group-hover:bg-primary/40" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-black/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3
                    className={`mt-2 font-bold tracking-tight ${
                      index === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                    }`}
                  >
                    {group.title}
                  </h3>
                </div>

                {index === 0 && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold">
                    Primary
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-black/50">{group.description}</p>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition-colors duration-200 group-hover:border-black/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Engineering Practices */}
      <div className="mt-8 overflow-hidden rounded-2xl bg-black">
        <div className="p-7 md:p-8">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Engineering Practices
                </p>

                <p className="mt-2 text-sm text-white">
                  Practices I use to build reliable and maintainable software.
                </p>
              </div>

              <span className="text-sm text-white/50">
                {engineeringSkills.length} areas
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {engineeringSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
