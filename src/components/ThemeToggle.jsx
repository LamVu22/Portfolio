import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const timers = timersRef.current;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const toggleTheme = () => {
    if (isPulling) return;

    setIsPulling(true);

    const themeTimer = window.setTimeout(() => {
      setIsDarkMode((currentMode) => {
        const nextMode = !currentMode;
        document.documentElement.classList.toggle("dark", nextMode);
        localStorage.setItem("theme", nextMode ? "dark" : "light");
        return nextMode;
      });
    }, 160);

    const resetTimer = window.setTimeout(() => setIsPulling(false), 440);
    timersRef.current.push(themeTimer, resetTimer);
  };

  return (
    <button
      onClick={toggleTheme}
      disabled={isPulling}
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? "Pull to turn the lights on" : "Pull to turn the lights off"}
      title={isDarkMode ? "Pull to turn the lights on" : "Pull to turn the lights off"}
      className={cn(
        "lamp-switch",
        isPulling && "is-pulling",
        isDarkMode ? "is-dark" : "is-light"
      )}
    >
      <span className="lamp-cord" aria-hidden="true" />
      <span className="lamp-handle" aria-hidden="true">
        {isDarkMode ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
};
