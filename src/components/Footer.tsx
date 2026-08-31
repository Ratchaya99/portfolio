import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ratchaya99",
  },
  {
    label: "LinkedIn",
    href: "https://th.linkedin.com/in/ratchaya-suradecharitthikul-83b261323",
  },
  {
    label: "Email",
    href: "mailto:ratchaya.gun@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="px-4 py-6 sm:px-6 lg:px-8 border-t border-black/10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 pt-6 md:flex-row md:items-end md:justify-between">
          {/* Identity */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight transition-opacity hover:opacity-60"
            >
              Ratchaya<span className="text-primary">.</span>
            </Link>

            <p className="mt-2 text-sm text-black/50">Software Engineer</p>
          </div>

          {/* Social Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm font-medium text-black/60 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center gap-2 text-xs text-black/35">
          <span>© 2026 Ratchaya Suradecharitthikul</span>
          <span className="text-primary">●</span>
          <span>Bangkok, Thailand</span>
        </div>
      </div>
    </footer>
  );
}
