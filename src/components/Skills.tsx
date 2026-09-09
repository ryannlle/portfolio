import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "C++",
      "SQL",
      "HTML/CSS",
      "DAX",
    ],
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
      "Data Transformation",
      "Data Processing",
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
      "SQLiteStudio",
      "Django",
      "Flask",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Skills" title="Tools of the trade." />

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.1}>
              <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-sm rounded-full border border-white/10 text-foreground/80 hover:border-accent/30 hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
