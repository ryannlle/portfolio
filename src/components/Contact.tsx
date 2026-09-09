import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent/90 mb-4">
            Contact
          </p>
          <h2 className="text-chrome text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Let&apos;s connect.
          </h2>
          <p className="text-lg text-muted max-w-md mx-auto mb-12">
            Always open to discussing new opportunities, research
            collaborations, or interesting projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:ryankle71@gmail.com"
              className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/leryan2027"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:border-white/40 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ryannlle"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:border-white/40 transition-colors"
            >
              GitHub
            </a>
          </div>
        </FadeIn>

        <div className="mt-24 pt-8 border-t border-white/5 text-sm text-muted">
          <p>&copy; 2026 Ryan Le</p>
        </div>
      </div>
    </section>
  );
}
