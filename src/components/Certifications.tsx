import FadeIn from "./FadeIn";
import Card from "./Card";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialUrl?: string;
};

const certifications: Certification[] = [
  {
    title: "Google Cloud Data Analytics Certificate",
    issuer: "Google Cloud",
    issued: "March 2026",
    expires: "March 2029",
    credentialUrl:
      "https://www.credly.com/badges/31cd534e-9220-4e9e-a350-3b5e802a3584/public_url",
  },
  {
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google",
    issued: "May 2026",
    credentialUrl:
      "https://www.credly.com/badges/16048188-0270-4df8-b753-6936b1b7a3f4",
  },
];

function CapIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Certifications() {
  return (
    <Section id="certifications" size="sm" panel divider>
      <SectionHeading label="Certifications" title="Credentials." />

      <FadeIn>
        <Card interactive={false} className="divide-y divide-white/5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <div className="flex items-center gap-3">
                <CapIcon />
                <div>
                  <p className="font-medium tracking-tight">{cert.title}</p>
                  <p className="text-sm text-muted">
                    {cert.issuer} &middot; {cert.issued}
                    {cert.expires && <> &middot; expires {cert.expires}</>}
                  </p>
                </div>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 pl-8 text-sm text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none sm:pl-0"
                >
                  Credential
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
              )}
            </div>
          ))}
        </Card>
      </FadeIn>
    </Section>
  );
}
