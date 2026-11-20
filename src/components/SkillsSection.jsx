import { useState } from "react";
import { Pause, Play } from "lucide-react";

const skillBelts = [
  {
    label: "Languages + Data",
    labelClass: "border-primary bg-primary/10 text-primary",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Pandas",
      "NumPy",
      "Power BI",
      "DAX",
      "Power Query",
    ],
  },
  {
    label: "AI + Product Stack",
    labelClass: "border-coral bg-coral/10 text-coral-text",
    reverse: true,
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "YOLO",
      "RAG",
      "LangChain",
      "OpenAI",
      "Gemini",
      "CrewAI",
      "Ollama",
      "Pinecone",
      "FAISS",
      "Docker",
      "FastAPI",
      "GitHub",
      "Expo",
    ],
  },
];

const BeltGroup = ({ belt, groupIndex }) => (
  <div
    className="flex shrink-0 items-center gap-3 px-3"
    aria-hidden={groupIndex > 0}
  >
    <span className={`mr-2 inline-flex h-10 items-center rounded-sm border px-4 text-xs font-semibold uppercase ${belt.labelClass}`}>
      {belt.label}
    </span>

    {belt.items.map((item) => (
      <span
        key={`${belt.label}-${groupIndex}-${item}`}
        className="skill-chip inline-flex h-10 items-center rounded-sm border bg-card/90 px-4 text-sm font-medium text-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:text-primary"
      >
        {item}
      </span>
    ))}
  </div>
);

const SkillBelt = ({ belt, isPaused }) => {
  return (
    <div className="group relative overflow-hidden border-y border-border/70 bg-background py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />

      <div
        className={`flex w-max ${
          belt.reverse ? "animate-skill-belt-reverse" : "animate-skill-belt"
        } group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] ${
          isPaused ? "[animation-play-state:paused]" : ""
        }`}
      >
        {[0, 1].map((groupIndex) => (
          <BeltGroup
            key={`${belt.label}-${groupIndex}`}
            belt={belt}
            groupIndex={groupIndex}
          />
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Toolkit
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Tools I reach for <span className="text-primary">often</span>
        </h2>
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-pressed={isPaused}
          aria-label="Pause skills animation"
          className="inline-flex items-center justify-center border border-border bg-background/80 p-2 font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      </div>

      <div className="mt-12 space-y-4">
        {skillBelts.map((belt) => (
          <SkillBelt key={belt.label} belt={belt} isPaused={isPaused} />
        ))}
      </div>
    </section>
  );
};
