"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";

const navLinks = [
  { label: "Projekte", href: "#projekte" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out",
        {
          "bg-white/95 dark:bg-blox-black/95 supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-blox-black/50 border-light-gray dark:border-white/10 backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow-sm":
            scrolled && !open,
          "bg-white/90 dark:bg-blox-black/90": open,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          }
        )}
      >
        {/* Logo */}
        <a href="/" className="shrink-0 flex items-center">
          <img
            src="/blox_logo_final.png"
            alt="blox"
            className="h-8 w-auto dark:invert"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-mid-gray hover:text-near-black dark:hover:text-white"
              )}
              href={link.href}
            >
              {link.label}
            </a>
          ))}

          {/* Dark mode toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Hellmodus aktivieren"
                : "Dunkelmodus aktivieren"
            }
            className="text-mid-gray hover:text-near-black dark:hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Sun size={16} strokeWidth={1.75} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -30, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Moon size={16} strokeWidth={1.75} />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>

        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            size="icon"
            variant="outline"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Hellmodus aktivieren"
                : "Dunkelmodus aktivieren"
            }
            className="text-mid-gray hover:text-near-black dark:hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Sun size={16} strokeWidth={1.75} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -30, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Moon size={16} strokeWidth={1.75} />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "bg-white/90 dark:bg-blox-black/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-light-gray dark:border-white/10 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out",
            "flex h-full w-full flex-col justify-between gap-y-2 p-4"
          )}
        >
          <div className="grid gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    className: "justify-start",
                  }),
                  "text-near-black dark:text-white text-base"
                )}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2" />
        </div>
      </div>
    </header>
  );
}
