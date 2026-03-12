"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("theme");
      const saved: Theme | null = raw === "light" || raw === "dark" ? raw : null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const resolved: Theme = saved !== null ? saved : (prefersDark ? "dark" : "light");
      setTheme(resolved);
      document.documentElement.classList.toggle("dark", resolved === "dark");
    } catch {}
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme", next);
      } catch {}
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
