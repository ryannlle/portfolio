import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  label: string;
  title: string;
}

/**
 * Shared eyebrow + title used by every section, so the page reads as one
 * piece. A faint cool light sits behind the title.
 */
export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="relative mb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-24 h-72 w-72 rounded-full opacity-50 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(150,210,255,0.32) 0%, rgba(178,184,255,0.16) 45%, transparent 72%)",
          }}
        />
        <p className="relative mb-4 text-xs font-medium uppercase tracking-[0.22em] text-accent/90">
          {label}
        </p>
        <h2 className="text-chrome relative text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
    </FadeIn>
  );
}
