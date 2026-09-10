import Image from "next/image";
import FadeIn from "./FadeIn";
import Counter from "./Counter";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const glance = [
  { k: "Role", v: "AI4Business Research Assistant, SDSU" },
  { k: "Focus", v: "Applied ML & decision systems" },
  { k: "Based in", v: "San Diego & Irvine" },
  { k: "Graduating", v: "May 2027" },
  { k: "Open to", v: "Full-time roles starting Summer 2027" },
  { k: "Community", v: "AI For All (Secretary), APSA & ABA mentor" },
];

const stats = [
  { value: 3.8, decimals: 1, label: "GPA" },
  { value: 2, decimals: 0, label: "Internships" },
  { value: 1, decimals: 0, label: "Paper (HICSS)" },
  { value: 5, decimals: 0, label: "Projects" },
];

export default function About() {
  return (
    <Section id="about" size="md" panel>
      <SectionHeading label="About" title="A bit about me." />

      <div className="grid gap-12 md:grid-cols-[300px_1fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <FadeIn delay={0.05}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] md:mx-0">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.25rem] blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 15%, rgba(150,210,255,0.25), rgba(232,180,255,0.12) 45%, transparent 75%)",
                }}
              />
              <Image
                src="/headshot.png"
                alt="Ryan Le"
                fill
                sizes="(max-width: 768px) 80vw, 300px"
                className="rounded-2xl object-cover object-[50%_18%] ring-1 ring-white/10"
                priority
              />
            </div>

            <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
              {glance.map((row) => (
                <div key={row.k} className="grid grid-cols-[84px_1fr] gap-3">
                  <dt className="text-muted">{row.k}</dt>
                  <dd className="text-foreground/85">{row.v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a senior at{" "}
                <span className="text-foreground">
                  San Diego State University
                </span>{" "}
                studying Management Information Systems with a minor in Computer
                Science, graduating May 2027. I work like a forward-deployed
                engineer: I build the models and pipelines (neural networks,
                natural language processing decision engines, time series
                forecasting) and I sit with the non-technical teams who use them
                to define requirements and architecture.
              </p>
              <p>
                As a research assistant with SDSU&apos;s AI4Business group I study
                the risks in LLM-generated code, work that became a co-authored
                paper,{" "}
                <span className="text-foreground">
                  &ldquo;Failures at the Seam,&rdquo;
                </span>{" "}
                submitted to HICSS. Over summer 2026 I was an Applied Machine
                Learning Intern at{" "}
                <span className="text-foreground">Realty Income</span>, where I
                built a market-sentiment scoring pipeline for commercial real
                estate and helped shape an investment thesis presented to company
                leadership.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-chrome text-3xl font-semibold tabular-nums">
                    <Counter target={s.value} decimals={s.decimals} />
                  </p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
