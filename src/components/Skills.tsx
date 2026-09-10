import FadeIn from "./FadeIn";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "SQL", "HTML/CSS", "DAX"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "scikit-learn",
      "YOLOv8",
      "Hugging Face",
      "FinBERT",
      "LLMs",
      "Neural Networks",
      "Computer Vision",
      "SARIMAX",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Data Modeling",
      "Geospatial Analysis",
      "Business Intelligence",
      "Matplotlib",
      "Seaborn",
      "PostgreSQL",
      "SQLite",
      "Pydantic",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Databricks",
      "MLflow",
      "Azure DevOps",
      "VS Code",
      "Power BI",
      "Microsoft Fabric",
      "Google Cloud",
      "BigQuery",
      "Django",
      "Flask",
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" size="sm" divider>
      <SectionHeading label="Skills" title="Tools of the trade." />

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 0.06}>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-foreground/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
