import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Wrench,
} from "lucide-react";

const skillStacks = [
  {
    title: "AI + Machine Learning",
    icon: BrainCircuit,
    items: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "YOLO",
      "Pandas",
      "NumPy",
      "RAG",
      "LangChain",
    ],
  },
  {
    title: "Full-Stack Web",
    icon: Code2,
    reverse: true,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Data + Analytics",
    icon: Database,
    items: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Power BI",
      "DAX",
      "Power Query",
      "Dashboards",
      "ETL",
      "Data Modeling",
    ],
  },
  {
    title: "AI Product Tools",
    icon: Bot,
    reverse: true,
    items: [
      "OpenAI",
      "Gemini",
      "ElevenLabs",
      "CrewAI",
      "Ollama",
      "Pinecone",
      "FAISS",
      "Tavily",
      "Fetch.ai",
      "uAgents",
    ],
  },
  {
    title: "Cloud + Developer Workflow",
    icon: Cloud,
    items: [
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "CUDA",
      "FastAPI",
      "Streamlit",
      "Canvas API",
      "Expo",
      "AsyncStorage",
    ],
  },
  {
    title: "Core Toolkit",
    icon: Wrench,
    reverse: true,
    items: [
      "HTML/CSS",
      "Figma",
      "VS Code",
      "React Native",
      "API Design",
      "Authentication",
      "Responsive UI",
      "Automation",
      "Prototyping",
      "Debugging",
    ],
  },
];

const SkillBelt = ({ stack }) => {
  const Icon = stack.icon;
  const repeatedItems = [...stack.items, ...stack.items];

  return (
    <div className="group relative overflow-hidden border-y border-border/70 bg-card/70 py-5 shadow-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3 text-left">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {stack.title}
          </h3>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />

        <div
          className={
            stack.reverse
              ? "flex min-w-max animate-skill-belt-reverse gap-3 px-3 group-hover:[animation-play-state:paused]"
              : "flex min-w-max animate-skill-belt gap-3 px-3 group-hover:[animation-play-state:paused]"
          }
        >
          {repeatedItems.map((item, index) => (
            <span
              key={`${stack.title}-${item}-${index}`}
              className="inline-flex h-11 min-w-28 items-center justify-center rounded-md border border-border bg-background/85 px-5 text-sm font-medium text-foreground shadow-xs transition-colors duration-300 hover:border-primary/60 hover:text-primary"
              aria-hidden={index >= stack.items.length}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Toolkit
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Tools I use to <span className="text-primary">build AI products</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          A moving stack of the languages, frameworks, data tools, and AI
          services I reach for across full-stack apps, analytics, and applied ML.
        </p>
      </div>

      <div className="space-y-5">
        {skillStacks.map((stack) => (
          <SkillBelt key={stack.title} stack={stack} />
        ))}
      </div>
    </section>
  );
};
