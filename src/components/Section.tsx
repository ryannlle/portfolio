import { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

const padding: Record<Size, string> = {
  sm: "py-16 md:py-20",
  md: "py-24 md:py-28",
  lg: "py-28 md:py-40",
};

interface SectionProps {
  id: string;
  children: ReactNode;
  size?: Size;
  /** subtle raised panel background (#08090b) */
  panel?: boolean;
  /** hairline fading rule along the top edge */
  divider?: boolean;
  className?: string;
}

/**
 * Standard section shell: consistent max width and horizontal padding, a
 * configurable vertical rhythm, and optional chapter cues (panel tint +
 * hairline divider) so the long dark scroll reads in parts.
 */
export default function Section({
  id,
  children,
  size = "md",
  panel = false,
  divider = false,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${padding[size]} ${panel ? "bg-panel" : ""} ${className}`}
    >
      {divider && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      )}
      <div className="relative mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
