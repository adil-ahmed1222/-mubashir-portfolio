"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const navParallax = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? 0 : value * -22
  );
  const glowShift = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? "0%" : `${value * 20}%`
  );
  const glowOpacity = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? 0.2 : 0.25 + value * 0.3
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const current = NAV_ITEMS.find((item) => {
        const element = document.querySelector(item.href);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current.label);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex justify-center px-4 transition-all",
        isScrolled ? "pt-4" : "pt-6"
      )}
      style={{ y: navParallax }}
    >
      <nav
        className={cn(
          "glass-panel relative flex w-full max-w-5xl items-center justify-between gap-6 overflow-hidden px-6 py-4",
          isScrolled ? "backdrop-blur-2xl" : "backdrop-blur-xl"
        )}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit]"
        >
          <motion.div
            className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-white/6 via-transparent to-white/6"
            animate={
              prefersReducedMotion
                ? { opacity: 0.22 }
                : { opacity: [0.18, 0.32, 0.2], scale: [1, 1.02, 1] }
            }
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-16 left-1/2 h-24 w-[140%] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500/25 via-accent/20 to-transparent blur-3xl"
            style={{ x: glowShift, opacity: glowOpacity }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-40%] right-[-20%] h-56 w-56 rounded-full bg-accent/10 blur-3xl"
            animate={
              prefersReducedMotion
                ? { opacity: 0.2 }
                : { opacity: [0.12, 0.28, 0.16], scale: [0.9, 1.1, 0.95] }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>
        <Link href="#home" className="text-lg font-semibold tracking-tight">
          <motion.span
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: [0.85, 1, 0.9], letterSpacing: [0, 1, 0] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            Mubashir.AI
          </motion.span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} item={item} active={active} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="glass-panel absolute top-[84px] w-full max-w-5xl px-6 py-6 md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base transition",
                    active === item.label ? "bg-white/10 text-white" : "hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({
  item,
  active,
}: {
  item: { label: string; href: string };
  active: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative rounded-full px-4 py-2 text-sm font-medium text-slate-100 transition",
        active === item.label ? "text-white" : "text-slate-300 hover:text-white"
      )}
    >
      <motion.span
        whileHover={
          active === item.label || prefersReducedMotion ? {} : { y: -2, scale: 1.02 }
        }
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
      >
        {item.label}
      </motion.span>
      <AnimatePresence>
        {active === item.label && (
          <motion.span
            layoutId="nav-underline"
            className="absolute left-1/2 top-full h-px w-8 -translate-x-1/2 bg-gradient-to-r from-primary-400 via-accent to-primary-500"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
      </AnimatePresence>
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-white/0"
        whileHover={prefersReducedMotion ? {} : { backgroundColor: "rgba(255,255,255,0.08)" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}

function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const prefersReducedMotion = useReducedMotion();
  const iconVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { y: 12, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -12, opacity: 0 },
      };
  const iconTransition = prefersReducedMotion
    ? { duration: 0.2, ease: "easeOut" }
    : { type: "spring", stiffness: 260, damping: 20 };
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10 text-white shadow-glow transition hover:-translate-y-1"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={iconVariants.initial}
            animate={iconVariants.animate}
            exit={iconVariants.exit}
            transition={iconTransition}
            className="absolute"
          >
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
