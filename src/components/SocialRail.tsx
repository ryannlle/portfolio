const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/leryan2027",
    path: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21h-4z",
  },
  {
    label: "GitHub",
    href: "https://github.com/ryannlle",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.02 10.02 0 0022 12.25C22 6.58 17.52 2 12 2z",
  },
  {
    label: "Email",
    href: "mailto:ryankle71@gmail.com",
    path: "M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1.4 2L12 12.1 19.6 7H4.4zM20 8.3l-8 5.4-8-5.4V17h16z",
  },
];

/**
 * Fixed vertical social rail, desktop only. Gives every screen a way to reach
 * LinkedIn / GitHub / email without scrolling to Contact.
 */
export default function SocialRail() {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden flex-col items-center gap-4 lg:flex print:hidden">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={l.label}
          className="text-muted transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
        >
          <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
            <path d={l.path} />
          </svg>
        </a>
      ))}
      <span aria-hidden className="mt-1 h-16 w-px bg-white/15" />
    </div>
  );
}
