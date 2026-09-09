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
                <span className="text-xs text-muted">
                  AI4Business Research Assistant @ SDSU Research Foundation
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed mb-6">
                I&apos;m a senior at San Diego State University studying
                Management Information Systems with a minor in Computer Science,
                graduating in May 2027. My work sits between machine learning and
                the teams that rely on it: I train neural networks and natural
                language processing decision engines and build time series
                forecasting pipelines, all with a focus on real-world
                applicability. I work like a forward-deployed engineer, turning
                technical systems into something a non-technical audience can act
                on and partnering with them to define requirements and
                architecture.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-muted leading-relaxed mb-6">
                I work as an undergraduate research assistant, teaching
                assistant, and lab coordinator with the AI4Business group at the
                SDSU Research Foundation, studying the risks in LLM-generated
                code and helping build HPC benchmarks. Over summer 2026 I was an
                Applied Machine Learning Intern at{" "}
                <span className="text-foreground font-medium">
                  Realty Income
                </span>
                , where I built a market-sentiment scoring pipeline for
                commercial real estate and helped shape an investment thesis
                presented to company leadership.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-muted leading-relaxed mb-10">
                That research became a co-authored paper, &ldquo;Failures at the
                Seam,&rdquo; submitted to HICSS. Outside coursework I&apos;m
                secretary of AI For All, a new student organization at SDSU, and
                mentor with the Asian Pacific Student Alliance and Asian Business
                Association.
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
