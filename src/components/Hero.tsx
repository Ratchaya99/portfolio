"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Hero() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="group relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden border-b border-black/10 px-6 py-24"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed z-0 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl transition-opacity duration-500 lg:block"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: isInside ? 1 : 0,
        }}
      />

      {/* Custom Cursor */}
      <div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      >
        <div
          className={`h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/40 bg-primary transition-transform duration-200 ${
            isInside ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
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
          <Link
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            View My Work
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-black/5"
          >
            Get in Touch
          </Link>

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
