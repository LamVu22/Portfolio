import { useState } from "react";
import {
  Bot,
  BrainCircuit,
  Database,
  FileSearch,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

const workflowSteps = [
  {
    id: "prompt",
    label: "Prompt",
    icon: MessageSquareText,
    detail:
      "User asks a domain-specific question with files, deadlines, or business context attached.",
    output: "Intent, constraints, and task shape",
  },
  {
    id: "retrieve",
    label: "Retrieve",
    icon: FileSearch,
    detail:
      "The app searches documents, APIs, vector indexes, and structured data before the model answers.",
    output: "Relevant chunks, metadata, and citations",
  },
  {
    id: "reason",
    label: "Reason",
    icon: BrainCircuit,
    detail:
      "The LLM combines retrieved context with instructions, plans tool use, and checks for missing information.",
    output: "Grounded reasoning path",
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    detail:
      "Agents call APIs, run calculations, query databases, or draft actions when the workflow needs more than text.",
    output: "Tool results and updated state",
  },
  {
    id: "guard",
    label: "Guard",
    icon: ShieldCheck,
    detail:
      "Validation, formatting, and safety checks keep responses useful, consistent, and easier to trust.",
    output: "Validated AI response",
  },
  {
    id: "ship",
    label: "Ship",
    icon: Send,
    detail:
      "The final answer lands in a clean interface with enough context for a real person to act on it.",
    output: "Actionable product experience",
  },
];

const supportingSystems = [
  { label: "Vector Store", icon: Database },
  { label: "LLM API", icon: Bot },
  { label: "Evaluator", icon: Sparkles },
];

export const AIWorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(workflowSteps[1]);
  const ActiveIcon = activeStep.icon;

  return (
    <section id="workflow" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 text-left md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              AI workflow
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              How I think about{" "}
              <span className="text-primary">LLM applications</span>
            </h2>
          </div>
          <p className="text-muted-foreground">
            A practical AI product is more than a prompt. It needs retrieval,
            tools, validation, and a clean interface so the model can solve a
            real workflow reliably.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[430px] overflow-hidden rounded-md border border-border bg-card/70 p-5 shadow-sm">
            <div className="ai-network opacity-80" />
            <div className="relative grid gap-4 sm:grid-cols-3">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id === activeStep.id;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(step)}
                    className={cn(
                      "group relative min-h-32 rounded-md border bg-background/90 p-4 text-left shadow-xs transition-all duration-300",
                      isActive
                        ? "border-primary text-primary shadow-[0_0_24px_rgba(20,184,166,0.18)]"
                        : "border-border text-foreground hover:border-primary/60"
                    )}
                  >
                    <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-current/25 bg-current/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Step {index + 1}
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-foreground">
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
              {supportingSystems.map((system) => {
                const Icon = system.icon;

                return (
                  <div
                    key={system.label}
                    className="flex items-center gap-3 rounded-md border border-border bg-background/80 px-4 py-3 text-left"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{system.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-md border border-border bg-card p-6 text-left shadow-sm">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
              <ActiveIcon className="h-6 w-6" />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Active layer
            </p>
            <h3 className="mb-4 text-2xl font-semibold">{activeStep.label}</h3>
            <p className="mb-6 text-muted-foreground">{activeStep.detail}</p>

            <div className="rounded-md border border-border bg-background/80 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Output
              </p>
              <p className="font-medium">{activeStep.output}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["RAG", "Agents", "APIs", "Evaluation"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
