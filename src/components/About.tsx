export function About() {
  return (
    <section id="about" className="border-b border-black/10 px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        {/* Heading */}
        <div>
          <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold">
            ABOUT
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Building reliable digital experiences<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg leading-8 text-black/70">
          <p>
            I&apos;m a Software Engineer with 5+ years of experience building
            production web applications across banking, enterprise, and software
            house environments.
          </p>

          <p>
            My primary focus is frontend development, with strong experience in
            React, Next.js, and TypeScript. I also have experience building
            mobile applications with React Native and Flutter.
          </p>

          <p>
            Beyond the frontend, I have hands-on experience with Node.js,
            NestJS, Laravel, RESTful APIs, and relational databases, allowing me
            to work across the stack and build features end-to-end.
          </p>

          <p>
            I enjoy working on complex problems, modernizing legacy systems,
            improving code quality, and building software that is easier to
            maintain and scale.
          </p>
        </div>
      </div>
    </section>
  );
}
