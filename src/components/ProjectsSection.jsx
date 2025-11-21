import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "./projects/project1.png";
import project2 from "./projects/project2.png";
import project3 from "./projects/project3.png";
import project4 from "./projects/project4.png";
import project5 from "./projects/project5.png";
import project6 from "./projects/project6.png";
import project7 from "./projects/project7.png";


const projects = [
  {
    id: 1,
    title: "Customer Tracking System",
    description: "Built a full-stack platform to manage household data, donations, and client visits in real time, streamlining community service operations and reporting.",
    image: project1,
    tags: ["Next.js", "Node.js", "REST API", "SQLite", "React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Real-time Road Sign Detection System",
    description:
      "Designed and optimized a high-accuracy model to detect and classify road signs in real time, enhancing responsiveness in autonomous systems.",
    image: project2,
    tags: ["Python", "YOLO", "OpenCV", "TensorFlow", "CUDA"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "KPI Dashboard",
    description:
      "Developed and optimized a comprehensive KPI dashboard to track operational performance across departments, enhancing data-driven decision-making and reducing manual reporting effort.",
    image: project3,
    tags: ["Power BI", "SQL", "DAX", "Power Query"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "TinyTerms.ai",
    description: 
      "A website that explains complex tech terms in simple language like you're five.",
    image: project4,
    tags: ["React, TypeScript, TailwindCSS, Vite"],
    demoUrl: "https://tinyterms.ai.netlify.app",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "DreamScape",
    description: "DreamScape is an AI-driven sleep-learning engine that transforms uploaded documents into adaptive, voice-narrated cues designed to accelerate memory consolidation overnight.",
    image: project5,
    tags: ["React Native, Expo, Typescript, AsyncStorage, Gemini, ElevenLabs"],
    demoUrl: "#",
    githubUrl: "https://github.com/LamVu22/MakeUC-DreamScape"
  },
  {
    id: 6,
    title: "FalconGraph Search",
    description: "An AI-powered semantic search engine that combines web-scale graph navigation with vector embeddings and RAG pipelines to deliver accurate, context-aware answers from crawled BGSU resources.",
    image: project6,
    tags: ["Next.js, TailwinCSS, DaisyUI, Pinecone, OpenAI, Tavily, FastAPI, FAISS, RAG"],
    demoUrl: "#",
    githubUrl: "https://github.com/LamVu22/BGSUHackathon"
  },
  {
    id: 7,
    title: "EcoCT", 
    description: "An AI-driven environmental intelligence system that unifies real-time air, marine, and climate analytics through a multi-agent architecture built on Fetch.ai.",
    image: project7,
    tags: ["uAgents, Fetch.ai, Streamlit, Python, FastAPI, OpenMeteo API, OpenAQ, Gemini, OpenAI"],
    demoUrl: "#",
    githubUrl: "https://github.com/LamVu22/EcoCT"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/LamVu22"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};