import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  link?: string;
};

const experiences: Experience[] = [
  {
    role: "AI4Business Research Assistant, Teaching Assistant & Lab Coordinator",
    company: "SDSU Research Foundation",
    period: "January 2026 — Present",
    type: "Current",
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
    type: "",
    link: "https://www.linkedin.com/company/sdsuaiforall/",
    description: [],
  },
  {
    role: "Applied Machine Learning Intern",
    company: "Realty Income",
    period: "June — August 2026",
    type: "",
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
    type: "",
    description: [
      "Trained SARIMAX time series models to forecast benefit hour trends using historical data, seasonality, and regional variables.",
      "Partnered with stakeholders across 4 business units to define requirements and track benchmarks in Microsoft Azure.",
      "Delivered interactive Power BI dashboards to C-suite leadership for workforce planning and revenue forecasting.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Experience" title="Where I've worked." />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-white/5 first:pt-0 last:border-b-0 transition-colors duration-300 hover:border-white/15">
                <div className="text-sm text-muted">
                  <p>{exp.period}</p>
                  {exp.type && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 text-xs font-medium rounded-full border border-accent/25 text-accent">
                      {exp.type}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                    >
                      {exp.company}
                      <svg
                        className="h-3.5 w-3.5"
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
                    </a>
                  ) : (
                    <p className="text-muted mt-1">{exp.company}</p>
                  )}
                  {exp.description.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, j) => (
                        <li
                          key={j}
                          className="text-muted text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:bg-accent/50 before:rounded-full"
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
      </div>
    </section>
  );
}
