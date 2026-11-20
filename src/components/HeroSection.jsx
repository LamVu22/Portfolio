import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Braces,
  CircleDot,
  Github,
  Sparkles,
} from "lucide-react";
import portrait from "../assets/lam-portrait.jpg";

const transmissions = [
  {
    label: "What I build",
    message:
      "I turn LLMs, retrieval, and agents into products people can actually use.",
  },
  {
    label: "Current quest",
    message:
      "Making AI systems more grounded, observable, and useful in real workflows.",
  },
  {
    label: "My approach",
    message:
      "Prototype quickly, test the behavior, then engineer the rough edges away.",
  },
];

export const HeroSection = () => {
  const [activeTransmission, setActiveTransmission] = useState(0);

  const cycleTransmission = () => {
    setActiveTransmission((current) => (current + 1) % transmissions.length);
  };

  return (
    <section
      id="hero"
      className="lab-grid relative min-h-[94svh] overflow-hidden px-4 pt-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/50" />
      <div className="container relative z-10 mx-auto grid min-h-[calc(94svh-7rem)] max-w-6xl items-center gap-8 pb-32 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:pb-16">
        <div className="text-left">
          <div className="mb-7 inline-flex items-center gap-3 border border-border bg-background/80 px-3 py-2 font-mono text-xs uppercase text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
            </span>
            System online
            <span className="text-border">/</span>
            Open to opportunities
          </div>

          <p className="mb-3 font-mono text-sm font-semibold uppercase text-primary opacity-0 animate-fade-in">
            Player 01 · AI Engineer
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] opacity-0 animate-fade-in-delay-1 sm:text-6xl lg:text-7xl">
            I build AI that gets out of the demo.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground opacity-0 animate-fade-in-delay-2 sm:text-lg">
            I'm Lam Vu aka Tony, an AI engineer (or trying to be) focused on LLM applications, retrieval
            systems, and agent workflows designed for real people and real work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="lab-button lab-button-primary">
              Explore missions <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/LamVu22"
              target="_blank"
              rel="noreferrer"
              className="lab-button"
            >
              <Github className="h-4 w-4" /> GitHub
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-border py-4 opacity-0 animate-fade-in-delay-4">
            {[
              ["09", "Projects shipped"],
              ["03", "AI specialties"],
              ["∞", "Ideas queued"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-border px-3 first:pl-0 last:border-0">
                <p className="font-mono text-xl font-semibold text-foreground">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[590px] items-center justify-center lg:min-h-[650px]">
          <div className="avatar-orbit absolute left-[8%] top-[12%] h-[76%] w-[82%] rounded-full border border-dashed border-primary/30" aria-hidden="true" />
          <div className="absolute right-0 top-[4%] z-30 hidden w-48 border border-border bg-background/90 p-3 text-left backdrop-blur-sm sm:block">
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground">
              <span>Runtime</span>
              <CircleDot className="h-3 w-3 text-status" />
            </div>
            <div className="space-y-2 font-mono text-xs">
              <p className="flex justify-between"><span>RAG</span><span className="text-status-text">READY</span></p>
              <p className="flex justify-between"><span>AGENTS</span><span className="text-status-text">READY</span></p>
              <p className="flex justify-between"><span>EVALS</span><span className="text-accent-text">LEARNING</span></p>
            </div>
          </div>

          <button
            type="button"
            onClick={cycleTransmission}
            className="avatar-stage group relative z-10 w-[84%] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label="Show next message"
          >
            <img
              src={portrait}
              alt="Illustrated portrait of Lam Vu at his workspace"
              className="avatar-idle relative z-10 aspect-square w-full select-none rounded-sm border border-border object-cover shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
            />
            <span aria-hidden="true" className="absolute -bottom-8 -left-7 z-20 max-w-[280px] border border-border bg-background/95 p-4 text-left shadow-lg backdrop-blur-sm max-sm:-bottom-20 max-sm:left-1/2 max-sm:w-[92%] max-sm:-translate-x-1/2">
              <span className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase text-primary">
                <Bot className="h-3.5 w-3.5" />
                {transmissions[activeTransmission].label}
              </span>
              <span className="block text-xs leading-5 text-foreground sm:text-sm">
                {transmissions[activeTransmission].message}
              </span>
              <span className="mt-2 flex items-center gap-1 font-mono text-[9px] uppercase text-muted-foreground">
                Click avatar to continue <Sparkles className="h-3 w-3 text-accent" />
              </span>
            </span>
          </button>
          <p className="sr-only" aria-live="polite">
            {transmissions[activeTransmission].label}:{" "}
            {transmissions[activeTransmission].message}
          </p>

          <Braces className="data-float absolute left-[3%] top-[8%] h-7 w-7 text-accent" />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};
