import FadeIn from "./FadeIn";
import Section from "./Section";
import EmailCopy from "./EmailCopy";

const RESUME_HREF = "/Ryan-Le-Resume.pdf";

const links = [
  { label: "Résumé", href: RESUME_HREF, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/leryan2027", external: true },
  { label: "GitHub", href: "https://github.com/ryannlle", external: true },
];

export default function Contact() {
  return (
    <Section id="contact" size="md" divider>
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent/90">
            Contact
          </p>
          <h2 className="text-chrome mb-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s connect.
          </h2>
          <p className="mb-8 text-lg text-muted">
            Graduating May 2027 and open to full-time roles in applied ML and
            data starting that summer. Based in San Diego &amp; Irvine.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex flex-col items-center gap-5">
            <EmailCopy />

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:ryankle71@gmail.com"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
              >
                Email me
              </a>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                >
                  {l.label}
                  <svg
                    aria-hidden
                    className="h-3 w-3 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H8M17 7v9"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <footer className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-sm text-muted sm:flex-row">
        <p>&copy; 2026 Ryan Le</p>
        <p className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/leryan2027"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ryannlle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="mailto:ryankle71@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </p>
      </footer>
    </Section>
  );
}
