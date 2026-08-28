import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-12 flex flex-wrap items-center justify-between border-t border-border bg-card px-4 py-8 font-mono">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <a
        href="#hero"
        className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-primary/10 text-primary transition-colors hover:border-primary"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
