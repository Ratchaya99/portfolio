export function Contact() {
  return (
    <section id="contact" className="border-b border-black/10 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end">
        {/* Header */}
        <div>
          <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold">
            GET IN TOUCH
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Let&apos;s talk
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-black/60">
            I&apos;m open to new opportunities, interesting projects, and
            conversations about building better digital experiences.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:ratchaya.gun@gmail.com"
            className="group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />

            <div className="relative flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-black/40">
                Email
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                →
              </span>
            </div>

            <div className="relative">
              <p className="break-all text-base font-semibold">
                ratchaya.gun@gmail.com
              </p>

              <p className="mt-1 text-xs text-black/40">Send me an email</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:0969413606"
            className="group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />

            <div className="relative flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-black/40">
                Phone
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                →
              </span>
            </div>

            <div className="relative">
              <p className="text-lg font-semibold md:text-xl">096-941-3606</p>

              <p className="mt-1 text-xs text-black/40">Give me a call</p>
            </div>
          </a>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-10 flex items-center gap-3 border-t border-black/10 pt-6">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />

        <span className="text-sm text-black/50">Open to new opportunities</span>
      </div>
    </section>
  );
}
