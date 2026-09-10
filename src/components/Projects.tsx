"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import Card from "./Card";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

// Featured card counts as one, so 4 here keeps the section at five projects
// until the reader opts into the rest.
const INITIAL_VISIBLE = 4;

type Metric = { value: string; label: string };
type Cta = { label: string; href: string };

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  period: string;
  org?: string;
  orgUrl?: string;
  repo?: string;
  cta?: Cta;
  metrics?: Metric[];
};

const featuredProject: Project = {
  title: "Market Sentiment Analysis",
  subtitle: "Tenant & Location Scoring Engine for Commercial Real Estate",
  description:
    "A decision engine that grades commercial real estate tenants and properties on a 0 to 100 scale, split into a tenant financial-health sub-score and a location economic-health sub-score with a confidence rating for data completeness. It draws on SEC EDGAR, FRED, Census ACS, yfinance, and local news RSS, and scores filing and news sentiment with FinBERT in batched inference on Databricks. A trade-area mode evaluates a property's full economic catchment with an equal-area geospatial buffer and spatial SQL. Query tuning (column pruning, restoring Parquet predicate pushdown, session caching) cut a single evaluation from about 15 minutes to under a minute over a 44GB, ~837K-row offline store.",
  tags: [
    "Python",
    "Databricks",
    "FinBERT",
    "MLflow",
    "Geospatial Analysis",
    "NLP",
  ],
  period: "Jun — Aug 2026",
  org: "Realty Income",
  orgUrl: "https://www.realtyincome.com/",
  metrics: [
    { value: "0–100", label: "composite score" },
    { value: "15m → <60s", label: "per evaluation" },
    { value: "837K", label: "rows · 44GB store" },
    { value: "MLflow", label: "every run logged" },
  ],
};

const projects: Project[] = [
  {
    title: "Failures at the Seam",
    subtitle: "A Socio-Technical Survey of LLM-Generated Code Risks",
    description:
      "A six-author survey, submitted to HICSS, that maps the failure modes of LLM-generated code onto Socio-Technical Systems theory: inherent model limitations, the human behaviors that trigger them, and the technical and societal consequences that follow. I led the technical consequences section, covering bugs, API misuse, package hallucination and slopsquatting, insecure code, and performance issues, drawn from peer-reviewed work across ACM, IEEE, USENIX, and AAAI venues.",
    tags: [
      "Technical Writing",
      "LLMs",
      "Socio-Technical Systems",
      "Secure Code",
      "Research",
    ],
    period: "2026",
    org: "AI4Business, SDSU",
    orgUrl: "https://business.sdsu.edu/centers-institutes/ai4business",
    cta: {
      label: "Request the draft",
      href: "mailto:ryankle71@gmail.com?subject=Failures%20at%20the%20Seam%20%E2%80%94%20draft%20request",
    },
  },
  {
    title: "Malicious URL Detection",
    subtitle: "Feed-Forward Neural Network Classifier",
    description:
      "An MLP neural network achieving 0.92 weighted F1-score on 128,224 URLs for 4-class classification, built with a full preprocessing pipeline using Shannon entropy, lexical features, and structural URL analysis.",
    tags: ["Python", "Neural Networks", "scikit-learn", "Feature Engineering", "Pandas"],
    period: "Aug — Dec 2025",
    repo: "https://github.com/ryannlle/MaliciousUrlDetection",
  },
  {
    title: "Benefit Hours Forecasting",
    subtitle: "SARIMAX Time Series for SWCA",
    description:
      "SARIMAX forecasting models processing 3.5M+ employee records to predict benefit hours across demographics, delivered via interactive Power BI dashboards to C-suite leadership for financial and workforce planning.",
    tags: ["Python", "SARIMAX", "Power BI", "Microsoft Fabric", "Data Pipelines"],
    period: "Jun — Aug 2025",
    org: "SWCA",
    orgUrl: "https://www.swca.com/",
  },
  {
    title: "Basketball AI Assistant",
    subtitle: "Computer Vision for SDSU Athletics",
    description:
      "A YOLOv8 model trained on 2,000 labeled image pairs for player detection and pose estimation, enabling dribble counting and in-game event recognition for SDSU Men’s Basketball.",
    tags: ["Python", "YOLOv8", "PyTorch", "Computer Vision", "Pose Estimation"],
    period: "Mar — Jul 2025",
    repo: "https://github.com/ryannlle/SDSU_Basketball_AI_Project",
  },
  {
    title: "Movie Rental Dashboard",
    subtitle: "Full-Stack Database & Reporting App",
    description:
      "An 11-entity relational database with a Flask web application for dynamic reporting, featuring 20+ optimized SQL queries and Jinja2 templates for interactive business insights.",
    tags: ["Python", "Flask", "SQL", "SQLite", "ER Modeling"],
    period: "Aug — Dec 2024",
    repo: "https://github.com/ryannlle/ReportingDashboard",
  },
];

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalGlyph({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
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

function OrgLink({ org, orgUrl }: { org: string; orgUrl?: string }) {
  if (!orgUrl) return <span className="text-xs text-muted">{org}</span>;
  return (
    <a
      href={orgUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
    >
      {org}
      <ExternalGlyph className="h-3 w-3" />
    </a>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = projects.length - INITIAL_VISIBLE;
  const visibleProjects =
    showAll || hiddenCount <= 0 ? projects : projects.slice(0, INITIAL_VISIBLE);

  return (
    <Section id="projects" size="lg" panel divider>
      <SectionHeading label="Projects" title="What I've built." />

      {/* Featured */}
      <FadeIn>
        <Card className="mb-5 p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full border border-accent/25 px-2.5 py-0.5 text-xs font-medium text-accent">
              Flagship
            </span>
            <span className="text-xs text-muted">{featuredProject.period}</span>
            {featuredProject.org && (
              <>
                <span className="text-xs text-white/20">·</span>
                <OrgLink
                  org={featuredProject.org}
                  orgUrl={featuredProject.orgUrl}
                />
              </>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_240px] md:gap-12">
            <div>
              <h3 className="text-chrome text-2xl font-semibold">
                {featuredProject.title}
              </h3>
              <p className="mb-4 mt-1 text-sm text-accent/80">
                {featuredProject.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {featuredProject.description}
              </p>
              <TagRow tags={featuredProject.tags} />
            </div>

            {featuredProject.metrics && (
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 self-start rounded-xl border border-white/10 bg-white/[0.02] p-5 md:grid-cols-1">
                {featuredProject.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-chrome text-lg font-semibold tabular-nums">
                      {m.value}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </FadeIn>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, i) => (
          <FadeIn key={project.title} delay={Math.min(i, INITIAL_VISIBLE) * 0.05}>
            <Card className="p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-xs text-muted">{project.period}</span>
                  {project.org && (
                    <>
                      <span className="text-xs text-white/20">·</span>
                      <OrgLink org={project.org} orgUrl={project.orgUrl} />
                    </>
                  )}
                </div>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mb-3 mt-1 text-sm text-accent/80">
                {project.subtitle}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <TagRow tags={project.tags} />

              {project.cta && (
                <a
                  href={project.cta.href}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm text-accent transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                >
                  {project.cta.label}
                  <span aria-hidden>&#8594;</span>
                </a>
              )}
            </Card>
          </FadeIn>
        ))}
      </div>

      {hiddenCount > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-foreground transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
          >
            {showAll ? "Show less" : `Show ${hiddenCount} more`}
            <svg
              aria-hidden
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </Section>
  );
}
