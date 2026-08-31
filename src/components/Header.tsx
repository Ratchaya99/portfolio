"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between rounded-full border border-black/10 bg-white/85 px-4 shadow-sm backdrop-blur-md sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold tracking-tight transition-opacity hover:opacity-60"
          >
            Ratchaya<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition-colors duration-200 hover:bg-black/5 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black/5 md:hidden"
            >
              <span className="relative block h-4 w-4">
                <span
                  className={`absolute left-0 top-1/2 h-px w-4 bg-current transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "-translate-y-1"
                  }`}
                />

                <span
                  className={`absolute left-0 top-1/2 h-px w-4 bg-current transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 top-1/2 h-px w-4 bg-current transition-transform duration-300 ${
                    isOpen ? "-rotate-45" : "translate-y-1"
                  }`}
                />
              </span>
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-black/10 bg-white/95 p-2 shadow-sm backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-black/70 transition-colors hover:bg-primary/20 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
