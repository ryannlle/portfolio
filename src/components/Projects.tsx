import FadeIn from "./FadeIn";

const featuredProject = {
  title: "HPC-Eval",
  subtitle: "LLM-generated HPC Hallucination & Performance Benchmark",
  description:
    "Developing a synthetically generated benchmark of HPC coding tasks spanning 4 mathematical domains (Linear Algebra, Grids & Stencils, Graph Theory, Monte Carlo) across 3 difficulty tiers. Evaluates LLM-generated C++, Julia, and Fortran code for correctness and the presence of API, syntactic, and semantic hallucinations using CodeBLEU, TSED, Pass@K, and runtime performance across 4\u201332 CPU threads.",
  tags: [
    "Python",
    "LLMs",
    "C++",
    "Julia",
    "Fortran",
    "HPC",
    "Parallel Programming",
    "Benchmark Design",
    "Scientific Writing",
  ],
  link: null,
  period: "Jan 2026 \u2014 Present",
  association: "SDSU Research Foundation",
};

const projects = [
  {
    title: "Market Sentiment Analysis",
    subtitle: "Tenant & Location Scoring Engine for Commercial Real Estate",
    description:
      "A decision engine that grades commercial real estate tenants and properties on a 0 to 100 scale, split into a tenant financial-health sub-score and a location economic-health sub-score with a confidence rating for data completeness. It draws on SEC EDGAR filings, FRED, Census ACS, yfinance, and local news RSS, and scores filing and news sentiment with FinBERT in batched inference on Databricks. A trade-area mode evaluates a property's full economic catchment using an equal-area geospatial buffer and spatial SQL. Query tuning (column pruning, restoring Parquet predicate pushdown, and session caching) cut a single evaluation from about 15 minutes to under a minute over a 44GB, ~837K-row offline store, with every run logged to MLflow.",
    tags: [
      "Python",
      "Databricks",
      "FinBERT",
      "Hugging Face",
      "PyTorch",
      "MLflow",
      "Pandas",
      "Geospatial Analysis",
      "Pydantic",
      "NLP",
    ],
    link: null,
    period: "Jun — Aug 2026",
  },
  {
    title: "Malicious URL Detection",
    subtitle: "Feed-Forward Neural Network Classifier",
    description:
      "An MLP neural network achieving 0.92 weighted F1-score on 128,224 URLs for 4-class classification, built with a full preprocessing pipeline using Shannon entropy, lexical features, and structural URL analysis.",
    tags: [
      "Python",
      "Neural Networks",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Matplotlib",
    ],
    link: "https://github.com/ryannlle/MaliciousUrlDetection",
    period: "Aug \u2014 Dec 2025",
  },
  {
    title: "Benefit Hours Forecasting",
    subtitle: "SARIMAX Time Series for SWCA",
    description:
      "SARIMAX forecasting models processing 3.5M+ employee records to predict benefit hours across demographics, delivered via interactive Power BI dashboards to C-suite leadership for financial and workforce planning.",
    tags: [
      "Python",
      "SARIMAX",
      "Power BI",
      "Microsoft Fabric",
      "Pandas",
      "DAX",
      "Data Pipelines",
    ],
    link: null,
    period: "Jun \u2014 Aug 2025",
  },
  {
    title: "Basketball AI Assistant",
    subtitle: "Computer Vision for SDSU Athletics",
    description:
      "A YOLOv8 model trained on 2,000 labeled image pairs for player detection and pose estimation, enabling dribble counting and in-game event recognition for SDSU Men\u2019s Basketball.",
    tags: [
      "Python",
      "YOLOv8",
      "PyTorch",
      "Computer Vision",
      "Pose Estimation",
      "OpenCV",
    ],
    link: null,
    period: "Mar \u2014 Jul 2025",
  },
  {
    title: "Movie Rental Dashboard",
    subtitle: "Full-Stack Database & Reporting App",
    description:
      "An 11-entity relational database with a Flask web application for dynamic reporting, featuring 20+ optimized SQL queries and Jinja2 templates for interactive business insights.",
    tags: [
      "Python",
      "Flask",
      "SQLite",
      "SQL",
      "HTML/CSS",
      "Jinja2",
      "REST API",
      "ER Modeling",
    ],
    link: "https://github.com/ryannlle/ReportingDashboard",
    period: "Aug \u2014 Dec 2024",
  },
];

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`group relative rounded-2xl ${className}`}>
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/0 via-purple-500/0 to-accent/0 group-hover:from-accent/30 group-hover:via-purple-500/15 group-hover:to-accent/5 transition-all duration-500 blur-sm" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/0 via-purple-500/0 to-accent/0 group-hover:from-accent/15 group-hover:via-purple-500/10 group-hover:to-transparent transition-all duration-500" />
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-sm text-accent tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            What I&apos;ve built.
          </h2>
        </FadeIn>

        {/* Featured project */}
        <FadeIn>
          <GlowCard className="mb-5">
            <div className="relative rounded-2xl bg-card p-8 border border-card-border group-hover:border-white/10 transition-colors duration-300">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                    Current Research
                  </span>
                  <span className="text-xs text-muted">
                    {featuredProject.period}
                  </span>
                </div>
                <span className="text-xs text-muted">
                  {featuredProject.association}
                </span>
              </div>

              <div className="mt-5 md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-accent/80 mb-4">
                    {featuredProject.subtitle}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlowCard>
        </FadeIn>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <GlowCard className="h-full">
                <div className="relative h-full flex flex-col rounded-2xl bg-card p-6 border border-card-border group-hover:border-white/10 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-xs text-muted">{project.period}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitHubIcon />
                        <ArrowIcon />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent/80 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
