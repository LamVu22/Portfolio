import { BriefcaseBusiness, MapPin } from "lucide-react";
import magicHourLogo from "../assets/companies/MH.png";
import bgsuLogo from "../assets/companies/bgsu.svg";
import senecioLogo from "../assets/companies/senecio.png";
import KPMGlogo from "../assets/companies/KPMG.png";
import ThunderSoftlogo from "../assets/companies/ThunderSoft.jpg";

const experiences = [
  {
    company: "ThunderSoft",
    logo: ThunderSoftlogo,
    role: "Agentic AI Developer",
    dates: "Present",
    location: "Santa Clara, California",
    nodeClass: "bg-accent",
    highlights: [
      "Work on improving and integrating open-sourced agentic software stack",
      "Run benchmark tests on local workstation with different LLM models",
    ],
    tools: [],
  },
  {
    company: "Magic Hour (YC W24)",
    logo: magicHourLogo,
    role: "Machine Learning Engineer Intern",
    dates: "January 2026 - May 2026",
    location: "Oakland, California",
    nodeClass: "bg-primary",
    highlights: [
      "Improved multilingual video dubbing accuracy to 95% by optimizing an LLM-based translation and lip-sync pipeline.",
      "Reached a 97% hit rate across benchmark cases by researching multimodal video generation workflows and reference-image compatibility.",
    ],
    tools: ["LLMs", "Multimodal AI", "Video Generation", "Localization"],
  },
  {
    company: "Senecio Corp.",
    logo: senecioLogo,
    role: "Software Engineer Intern",
    dates: "August 2025 - December 2025",
    location: "Bowling Green, Ohio",
    nodeClass: "bg-coral",
    highlights: [
      "Built Node.js and MongoDB APIs for geolocation-based event discovery, supporting real-time queries for more than 50 users.",
      "Reduced API latency by 35% by improving MongoDB geospatial queries and indexing for faster proximity search.",
    ],
    tools: ["Node.js", "MongoDB", "REST APIs", "Geospatial Data"],
  },
  {
    company: "BGSU Campus Operations",
    logo: bgsuLogo,
    role: "Data Analytics Intern",
    dates: "April 2024 - January 2026",
    location: "Bowling Green, Ohio",
    nodeClass: "bg-accent",
    highlights: [
      "Increased data-processing throughput by 50% by building automated ETL pipelines with Python and SQL.",
      "Created Power BI dashboards for more than five departments with role-based access control.",
    ],
    tools: ["Python", "SQL", "Power BI", "ETL", "Data Modeling"],
  },
  {
    company: "BGSU Bursar Office",
    logo: bgsuLogo,
    role: "Clerical Assistant",
    dates: "October 2023 - April 2024",
    location: "Bowling Green, Ohio",
    nodeClass: "bg-accent",
    highlights: [
      "Maintained student account documentation through accurate data entry and organized financial records.",
      "Assisted students and staff with billing and payment questions while handling sensitive information confidentially.",
    ],
    tools: [
      "Microsoft Excel",
      "Data Entry",
      "Records Management",
      "Customer Service",
    ],
  },
  {
    company: "KPMG",
    logo: KPMGlogo,
    role: "Data Engineer Intern",
    dates: "May 2023 - August 2023",
    location: "Hanoi, Vietnam",
    nodeClass: "bg-status",
    highlights: [
      "Built automated Python and SQL pipelines for risk reporting across large financial datasets.",
      "Cut data processing and model training time by 25% by optimizing SQL queries and preprocessing.",
    ],
    tools: ["Python", "SQL", "ETL", "Financial Data"],
  },
];

const CompanyMark = ({ experience }) => (
  <span
    className={`company-mark flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border shadow-sm ${
      experience.isLoading ? "bg-card text-primary" : "bg-white"
    }`}
  >
    {experience.logo ? (
      <img
        src={experience.logo}
        alt={`${experience.company} logo`}
        className="h-full w-full object-contain"
      />
    ) : experience.isLoading ? (
      <span className="animate-pulse font-mono text-lg font-semibold motion-reduce:animate-none">
        {experience.mark}
      </span>
    ) : (
      <span className="font-mono text-[9px] font-bold text-[#00338d]">
        {experience.mark}
      </span>
    )}
  </span>
);

const LoadingDots = () => (
  <span className="inline-flex h-3 items-end gap-1" aria-hidden="true">
    {[0, 1, 2].map((dot) => (
      <span
        key={dot}
        className="h-1 w-1 animate-bounce rounded-full bg-primary motion-reduce:animate-none"
        style={{ animationDelay: `${dot * 120}ms` }}
      />
    ))}
  </span>
);

export const ExperienceSection = () => {
  return (
    <section id="experience" className="day-band-cool relative border-y border-border px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 grid gap-4 text-left md:grid-cols-[0.38fr_0.62fr] md:items-end">
          <p className="section-kicker mb-0">Experience log</p>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              In production, on <span className="text-primary">real teams.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Places where I contributed/shipped
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-border md:left-[38%]" />

          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="experience-entry relative grid gap-7 border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[0.38fr_0.62fr] md:gap-0"
            >
              <span
                className={`absolute left-[14px] z-10 h-3 w-3 rounded-full border-[3px] border-background md:left-[calc(38%_-_5px)] ${experience.nodeClass} ${
                  index === 0 ? "top-1" : "top-12"
                }`}
              />

              <div className="pl-12 text-left md:pl-0 md:pr-12">
                <div className="mb-5 flex min-h-5 items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span>{experience.dates}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CompanyMark experience={experience} />
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-foreground">
                      {experience.company}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {experience.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pl-12 text-left md:pl-12">
                <div className="mb-5 flex items-center gap-3">
                  <BriefcaseBusiness className="h-5 w-5 shrink-0 text-primary" />
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {experience.role}
                  </h3>
                </div>

                {experience.isLoading ? (
                  <div className="future-loader">
                    <p className="flex items-center gap-2 font-mono text-xs uppercase text-primary">
                      Future mission loading <LoadingDots />
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      The next role, team, and problems are still to be discovered.
                    </p>
                    <div className="mt-4 grid grid-cols-10 gap-1" aria-hidden="true">
                      {Array.from({ length: 10 }, (_, segment) => (
                        <span
                          key={segment}
                          className="loading-segment h-2 rounded-[1px] bg-primary"
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-5 leading-7 text-muted-foreground before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rotate-45 before:bg-accent"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-sm border border-border bg-card px-2.5 py-1.5 font-mono text-[10px] uppercase text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
