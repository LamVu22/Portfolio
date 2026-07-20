import { Bot, BrainCircuit, DatabaseZap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Myself</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>

              <a
                href="./CV/Vu_Resume.pdf"
                download="Vu_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
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
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
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
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
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
