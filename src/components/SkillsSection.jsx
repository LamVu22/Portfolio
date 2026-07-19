const skillBelts = [
  {
    label: "Languages + Data",
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
    <span className="mr-2 inline-flex h-10 items-center rounded-md border border-primary/25 bg-primary/10 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      {belt.label}
    </span>

    {belt.items.map((item) => (
      <span
        key={`${belt.label}-${groupIndex}-${item}`}
        className="inline-flex h-10 items-center rounded-md border border-border bg-card/85 px-4 text-sm font-medium text-foreground shadow-xs transition-colors duration-300 hover:border-primary/60 hover:text-primary"
      >
        {item}
      </span>
    ))}
  </div>
);

const SkillBelt = ({ belt }) => {
  return (
    <div className="group relative overflow-hidden border-y border-border/70 bg-background py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />

      <div
        className={
          belt.reverse
            ? "flex w-max animate-skill-belt-reverse group-hover:[animation-play-state:paused]"
            : "flex w-max animate-skill-belt group-hover:[animation-play-state:paused]"
        }
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
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Toolkit
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Tools I reach for <span className="text-primary">often</span>
        </h2>
      </div>

      <div className="mt-12 space-y-4">
        {skillBelts.map((belt) => (
          <SkillBelt key={belt.label} belt={belt} />
        ))}
      </div>
    </section>
  );
};
