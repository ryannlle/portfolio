import FadeIn from "./FadeIn";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Experience = {
  role: string;
  company: string;
  period: string;
  type?: string;
  description: string[];
  link?: string;
};

const experiences: Experience[] = [
  {
    role: "AI4Business Research Assistant, Teaching Assistant & Lab Coordinator",
    company: "SDSU Research Foundation",
    period: "January 2026 — Present",
    type: "Current",
    link: "https://business.sdsu.edu/centers-institutes/ai4business",
    description: [
      "Co-authored “Failures at the Seam,” a socio-technical survey of LLM-generated code risks submitted to HICSS, leading the technical consequences section: bugs, API misuse, package hallucination and slopsquatting, insecure code, and performance issues, synthesized from peer-reviewed literature.",
      "Contributing to AgentCode and HPC-Eval, multi-agent LLM frameworks for detecting hallucinations in AI-generated code and benchmarking HPC coding tasks.",
      "Supporting lab operations through research paper reviews, sponsor outreach, conducting interviews, and drafting monthly newsletters.",
      "Grading and preparing course materials for 36 students across 2 sections of MIS515.",
    ],
  },
  {
    role: "Secretary",
    company: "AI For All, San Diego State University",
    period: "August 2026 — Present",
    link: "https://www.linkedin.com/company/sdsuaiforall/",
    description: [
      "Officer for a new AI-focused student organization at San Diego State.",
    ],
  },
  {
    role: "Applied Machine Learning Intern",
    company: "Realty Income",
    period: "June — August 2026",
    link: "https://www.realtyincome.com/",
    description: [
      "Built a cross-functional view of Realty Income's triple-net lease model and used it to score and pitch an acquisition, weighing business risk, location risk, and fungibility to produce a risk-adjusted, asset-level IRR.",
      "Identified electrical equipment manufacturing as a sale-leaseback investment thesis, backed by supply chain and data-center demand analysis, and presented it to company leadership.",
      "Worked across the Predictive Analytics, Private Fund, and Portfolio Management teams to define the scoring methodology, feature variables, and deployment architecture for a new tenant and property risk assessment tool.",
    ],
  },
  {
    role: "Business Data Solutions Architect Intern",
    company: "SWCA Environmental Consultants",
    period: "June — August 2025",
    link: "https://www.swca.com/",
    description: [
      "Trained SARIMAX time series models to forecast benefit hour trends using historical data, seasonality, and regional variables.",
      "Partnered with stakeholders across 4 business units to define requirements and track benchmarks in Microsoft Azure.",
      "Delivered interactive Power BI dashboards to C-suite leadership for workforce planning and revenue forecasting.",
    ],
  },
];

function ExternalGlyph() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 opacity-30 transition-opacity duration-200 group-hover/row:opacity-80"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function Experience() {
  return (
    <Section id="experience" size="md" divider>
      <SectionHeading label="Experience" title="Where I've worked." />

      <div>
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div
              className="group/row -mx-4 grid gap-2 rounded-xl px-4 py-9 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[150px_1fr] md:gap-10 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/5"
            >
              <div className="text-sm text-muted md:text-right">
                <p>{exp.period}</p>
                {exp.type && (
                  <span className="mt-2 inline-block rounded-full border border-accent/25 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {exp.type}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {exp.role}
                </h3>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                >
                  {exp.company}
                  <ExternalGlyph />
                </a>
                {exp.description.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-accent/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
