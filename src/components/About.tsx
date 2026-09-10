import Image from "next/image";
import FadeIn from "./FadeIn";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "GPA", value: "3.8" },
  { label: "Graduating", value: "May 2027" },
  { label: "Based in", value: "San Diego & Irvine" },
  { label: "Open to", value: "Full-time, Summer 2027" },
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
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I came into tech through{" "}
              <span className="text-foreground">
                Management Information Systems
              </span>
              , which is about matching technology to how a business actually
              runs. My{" "}
              <span className="text-foreground">Computer Science</span> minor and
              coursework in machine learning, data structures, and databases gave
              me the other half: building the system myself. Most of what I&apos;ve
              made lives in that overlap, from a URL-classification neural network
              to a commercial real estate scoring engine. I&apos;m aiming for
              applied machine learning and data roles where the work is as much
              about the people who use a model as the model itself.
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
      </div>

      <FadeIn delay={0.15}>
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-white/[0.02] px-5 py-6 sm:px-6">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                {f.label}
              </dt>
              <dd className="text-chrome mt-2 text-xl font-semibold tracking-tight">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </Section>
  );
}
