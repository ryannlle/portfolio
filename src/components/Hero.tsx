"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduced = useReducedMotion();

  const drift = (extra: Record<string, number[]>) =>
    reduced ? undefined : { ...extra };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Ambient light */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(150,210,255,0.16) 0%, rgba(178,184,255,0.09) 35%, transparent 65%)",
        }}
        animate={drift({ scale: [1, 1.1, 1], opacity: [0.65, 1, 0.65] })}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,180,255,0.11) 0%, transparent 65%)",
        }}
        animate={drift({ x: [0, 40, 0], y: [0, -32, 0], scale: [1, 1.12, 1] })}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 right-1/5 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(150,210,255,0.1) 0%, transparent 65%)",
        }}
        animate={drift({ x: [0, -30, 0], y: [0, 26, 0], scale: [1, 1.15, 1] })}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-6 text-sm uppercase tracking-widest text-muted md:text-base"
        >
          AI &middot; Machine Learning &middot; Data Science
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="bg-clip-text text-6xl font-semibold tracking-tighter text-transparent md:text-8xl lg:text-9xl"
          style={{
            backgroundImage:
              "linear-gradient(100deg, #ffffff, #dbe6f0, #9fb1c2, #ffffff, #cddff0)",
            backgroundSize: "300% 100%",
            animation: reduced ? undefined : "gradient-shift 7s ease infinite",
          }}
        >
          Ryan Le
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
        >
          Building intelligent systems at the intersection of
          <br className="hidden sm:block" /> business, data, and artificial
          intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.34 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-white/40" />
        </motion.span>
      </motion.a>
    </section>
  );
}
