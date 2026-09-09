import FadeIn from "./FadeIn";

const experiences = [
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
    role: "AI4Business Research Assistant, Teaching Assistant & Lab Coordinator",
    company: "SDSU Research Foundation",
    period: "January 2026 — Present",
    type: "Current",
    description: [
      "Co-authored “Failures at the Seam,” a socio-technical survey of LLM-generated code risks submitted to HICSS, writing the section on technical failure modes: bugs, API misuse, security and licensing risk, performance issues, and slopsquatting, drawn from peer-reviewed literature.",
      "Contributing to AgentCode and HPC-Eval, multi-agent LLM frameworks for detecting hallucinations in AI-generated code and benchmarking HPC coding tasks.",
      "Supporting lab operations through research paper reviews, sponsor outreach, conducting interviews, and drafting monthly newsletters.",
      "Grading and preparing course materials for 36 students across 2 sections of MIS515.",
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
        <FadeIn>
          <p className="text-sm text-accent tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Where I&apos;ve worked.
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-white/5 first:pt-0 last:border-b-0">
                <div className="text-sm text-muted">
                  <p>{exp.period}</p>
                  {exp.type && (
                    <span className="inline-block mt-2 px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">
                      {exp.type}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-muted mt-1">{exp.company}</p>
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
