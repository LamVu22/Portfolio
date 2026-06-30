import { BrainCircuit, Code, User } from "lucide-react";

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
              AI & Data-Focused Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science student specializing in Computational Data
              Science. I like building practical AI and data tools, from
              LLM-powered applications to dashboards that turn messy
              information into something people can actually use.
            </p>

            <p className="text-muted-foreground">
              I also enjoy the full-stack side of the work: designing APIs,
              connecting data pipelines, and shipping clean interfaces that make
              the underlying intelligence easy to understand. My goal is to build
              systems that are technically solid, useful, and clear.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch with meee
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
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development </h4>
                  <p className="text-muted-foreground">
                    Building end-to-end web apps with efficient APIs, 
                    secure authentication, and responsive UIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics & Dashboards</h4>
                  <p className="text-muted-foreground">
                    Delivering clear insights through KPI dashboards, 
                    SQL pipelines, and real-time tracking systems.
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
                  <h4 className="font-semibold text-lg">AI & ML Systems</h4>
                  <p className="text-muted-foreground">
                    Applying machine learning, computer vision, and AI APIs to
                    build tools that solve real problems.
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
