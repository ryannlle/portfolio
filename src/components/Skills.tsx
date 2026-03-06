import FadeIn from "./FadeIn";

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
      "Business Intelligence",
      "Matplotlib",
      "Seaborn",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
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
        <FadeIn>
          <p className="text-sm text-accent tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Tools of the trade.
          </h2>
        </FadeIn>

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
