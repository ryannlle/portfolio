import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** hover lift + cool halo + border brighten */
  interactive?: boolean;
}

/**
 * The single card surface used across Projects and Certifications so every
 * panel on the page shares one look.
 */
export default function Card({
  children,
  className = "",
  interactive = true,
}: CardProps) {
  return (
    <div
      className={`group relative h-full rounded-2xl ${
        interactive
          ? "transition-transform duration-500 ease-out hover:-translate-y-1"
          : ""
      }`}
    >
      {interactive && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(55% 55% at 50% 0%, rgba(150,210,255,0.12) 0%, transparent 70%)",
          }}
        />
      )}
      <div
        className={`relative flex h-full flex-col rounded-2xl border border-card-border bg-card ${
          interactive
            ? "transition-colors duration-300 group-hover:border-white/20"
            : ""
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
