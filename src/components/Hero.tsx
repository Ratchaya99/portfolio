export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center border-b border-black/10 px-6 py-24">
      <div className="w-full">
        {/* Label */}
        <div className="mb-8 inline-flex rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold tracking-tight text-primary-foreground">
          SOFTWARE ENGINEER
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl break-words text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
          Ratchaya
          <br />
          Suradecharitthikul<span className="text-primary">.</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
          Frontend-focused Software Engineer with 5+ years of experience
          building production web applications across banking, enterprise, and
          software house environments.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-black/5"
          >
            Get in Touch
          </a>

          <a
            href="https://github.com/Ratchaya99"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-black/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
