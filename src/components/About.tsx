import Image from "next/image";
import FadeIn from "./FadeIn";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm text-accent tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            A bit about me.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          <FadeIn delay={0.1}>
            <div className="relative aspect-square w-full max-w-xs mx-auto md:mx-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 to-purple-500/10 rounded-2xl blur-2xl" />
              <Image
                src="/headshot.png"
                alt="Ryan Le"
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.15}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-xs text-muted">
                  Incoming ML Intern @ Realty Income &middot; Summer 2026
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed mb-6">
                I&apos;m a junior at San Diego State University studying
                Management Information Systems with a minor in Computer Science.
                My work spans artificial intelligence, machine learning, and
                data-driven systems&mdash;from training neural networks and
                computer vision models to building time series forecasting
                pipelines and multi-agent LLM frameworks.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Currently, I serve as an AI4Business Research Assistant at the
                SDSU Research Foundation, where I contribute to research on LLM
                hallucination detection and HPC benchmark development. This
                summer, I&apos;ll be joining{" "}
                <span className="text-foreground font-medium">
                  Realty Income
                </span>{" "}
                as an Applied Machine Learning Intern.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-muted leading-relaxed mb-10">
                I thrive in collaborative, leadership-oriented environments and
                bring a distinct blend of business acumen and technical depth to
                every project I take on.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold tabular-nums">
                    <Counter target={3.8} decimals={1} />
                  </p>
                  <p className="text-sm text-muted mt-1">GPA</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">May &apos;27</p>
                  <p className="text-sm text-muted mt-1">
                    Expected Graduation
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
