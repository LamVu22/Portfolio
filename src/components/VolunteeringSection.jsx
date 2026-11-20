import { HeartHandshake } from "lucide-react";
import dev_club from "../assets/companies/dev_club.jpeg";
import tpp from "../assets/companies/tpp.jpeg"; 

const volunteerRoles = [
  {
    organization: "BGSU Developer Club",
    logo: dev_club,
    role: "Secretary",
    nodeClass: "bg-coral",
    highlights: [
      "Helped organize the BGSU Hackathon and club meetings where members shared project ideas and discussed current AI developments.",
      "Hosted LeetCode nights for first- and second-year students, helping them get more comfortable with coding interview problems.",
    ],
    tools: [],
  },
  {
    organization: "the Prosecution Project",
    logo: tpp,
    role: "Full Stack developer",
    nodeClass: "bg-coral",
    highlights: [
      "Supported moving tPP's research out of Google Sheets and into a proper full-stack platform.",
      "Building tools that turn complex justice data into usable research.",
      "Keeping complex data work simple for non-technical teammates.",
    ],
    tools: [],
  },
];

const LoadingDots = () => (
  <span className="inline-flex h-3 items-end gap-1" aria-hidden="true">
    {[0, 1, 2].map((dot) => (
      <span
        key={dot}
        className="h-1 w-1 animate-bounce rounded-full bg-coral motion-reduce:animate-none"
        style={{ animationDelay: `${dot * 120}ms` }}
      />
    ))}
  </span>
);

const VolunteerMark = ({ role }) => (
  <span className="company-mark flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-white text-coral shadow-sm">
    {role.logo ? (
      <img
        src={role.logo}
        alt=""
        className="h-full w-full object-contain"
      />
    ) : (
      <HeartHandshake className="h-6 w-6" aria-hidden="true" />
    )}
  </span>
);

export const VolunteeringSection = () => {
  const roles = volunteerRoles.map((role) => ({
    ...role,
    isPlaceholder:
      !role.organization ||
      !role.role ||
      role.highlights.length === 0,
  }));

  return (
    <section
      id="volunteering"
      className="day-band-white relative border-b border-border px-4 py-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 grid gap-4 text-left md:grid-cols-[0.38fr_0.62fr] md:items-end">
          <p className="section-kicker mb-0 text-coral-text">Volunteering log</p>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Beyond the job, for <span className="text-coral-text">the community.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Organizations, causes, and communities I have contributed to.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-border md:left-[38%]" />

          {roles.map((role, index) => (
            <article
              key={`${role.organization}-${role.role}-${index}`}
              className="experience-entry relative grid gap-7 border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[0.38fr_0.62fr] md:gap-0"
            >
              <span
                aria-hidden="true"
                className={`absolute left-[14px] z-10 h-3 w-3 rounded-full border-[3px] border-background md:left-[calc(38%_-_5px)] ${role.nodeClass} ${
                  index === 0 ? "top-1" : "top-12"
                }`}
              />

              <div className="pl-12 text-left md:pl-0 md:pr-12">
                <div className="flex items-center gap-3">
                  <VolunteerMark role={role} />
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-foreground">
                      {role.organization || "Organization to be added"}
                      {role.isPlaceholder && <LoadingDots />}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="pl-12 text-left md:pl-12">
                <div className="mb-5 flex items-center gap-3">
                  <HeartHandshake className="h-5 w-5 shrink-0 text-coral" />
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {role.role || "Volunteer position"}
                  </h3>
                </div>

                {role.isPlaceholder ? (
                  <div className="border border-dashed border-coral/40 bg-coral/5 p-5">
                    <p className="flex items-center gap-2 font-mono text-xs uppercase text-coral-text">
                      Highlights loading <LoadingDots />
                    </p>
                    <div className="mt-4 grid grid-cols-8 gap-1" aria-hidden="true">
                      {Array.from({ length: 8 }, (_, slot) => (
                        <span
                          key={slot}
                          className="loading-segment h-2 rounded-[1px] bg-coral"
                          style={{ animationDelay: `${slot * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <ul className="space-y-3">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-5 leading-7 text-muted-foreground before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rotate-45 before:bg-coral"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {role.tools?.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {role.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-sm border border-border bg-card px-2.5 py-1.5 font-mono text-[10px] uppercase text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
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
