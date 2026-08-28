import { Bot, BrainCircuit, DatabaseZap } from "lucide-react";
import resume from "./CV/LamVu_Resume.pdf";

export const AboutSection = () => {
  const profileData = [
    ["Current focus", "RAG + agent systems"],
    ["Working style", "Build · test · iterate"],
    ["Home base", "Santa Clara, California"],
  ];

  return (
    <section id="about" className="relative border-y border-border bg-card/40 px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-left">
          <p className="section-kicker">Player profile</p>
          <h2 className="text-3xl font-bold md:text-4xl">Human behind the system</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              AI Engineer building practical LLM applications
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science graduate specializing in Computational Data
              Science. I focus on building LLM-powered products that connect
              models with real workflows, from RAG search and multi-agent tools
              to intelligent dashboards that turn messy information into useful
              decisions.
            </p>

            <p className="text-muted-foreground">
              I enjoy the engineering layer around AI: designing APIs, building
              retrieval pipelines, evaluating model behavior, and shipping clean
              interfaces that make intelligent systems reliable and easy to use.
              My goal is to build AI applications that are useful, explainable,
              and ready for real users.
            </p>

            <div className="flex flex-col gap-3 border-y border-border py-4 font-mono text-xs">
              {profileData.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <span className="uppercase text-muted-foreground">{label}</span>
                  <span className="text-right text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a href="#contact" className="lab-button lab-button-primary">
                Get in touch
              </a>

              <a
                href={resume}
                download="LamVu_Resume.pdf"
                className="lab-button"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="mission-panel p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">LLM Applications</h4>
                  <p className="text-muted-foreground">
                    Building AI assistants, semantic search, study planners, and
                    domain-specific tools powered by LLM APIs and agent
                    workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="mission-panel p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10">
                  <DatabaseZap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Retrieval & Data Pipelines
                  </h4>
                  <p className="text-muted-foreground">
                    Connecting structured data, documents, embeddings, and APIs
                    so models can answer with useful context instead of generic
                    output.
                  </p>
                </div>
              </div>
            </div>
            <div className="mission-panel p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack AI Products
                  </h4>
                  <p className="text-muted-foreground">
                    Shipping responsive interfaces, backend services, and model
                    integrations that make AI capabilities clear, testable, and
                    usable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
