import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialUrl?: string;
  skills: string[];
};

const certifications: Certification[] = [
  {
    title: "Google Cloud Data Analytics Certificate",
    issuer: "Google Cloud",
    issued: "March 2026",
    expires: "March 2029",
    credentialUrl:
      "https://www.credly.com/badges/31cd534e-9220-4e9e-a350-3b5e802a3584/public_url",
    skills: [
      "BigQuery",
      "Cloud Computing",
      "Data Analysis",
      "Data Visualization",
      "Business Intelligence",
      "Data Modeling",
      "Data Transformation",
      "Google Cloud",
    ],
  },
  {
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google",
    issued: "May 2026",
    credentialUrl:
      "https://www.credly.com/badges/16048188-0270-4df8-b753-6936b1b7a3f4",
    skills: [
      "Network Security",
      "Machine Learning",
      "Google Cloud",
      "Cloud Computing",
      "Cloud Infrastructure",
    ],
  },
];

function ExternalLinkIcon() {
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
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Certifications" title="Credentials." />

        <div className="space-y-5">
          {certifications.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative rounded-2xl transition-transform duration-500 ease-out hover:-translate-y-1">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 55% at 50% 0%, rgba(150,210,255,0.10) 0%, transparent 70%)",
                  }}
                />
                <div className="relative rounded-2xl bg-card p-6 md:p-8 border border-card-border transition-colors duration-300 group-hover:border-white/20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <svg
                          className="w-6 h-6 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-accent"
                          />
                        </svg>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm ml-9">
                        Issued by{" "}
                        <span className="text-foreground/80">{cert.issuer}</span>{" "}
                        &middot; {cert.issued}
                        {cert.expires && <> &middot; Expires {cert.expires}</>}
                      </p>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors shrink-0"
                      >
                        Show Credential
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-5 ml-9">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
