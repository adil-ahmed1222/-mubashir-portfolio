"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import {
  fadeIn,
  springCard,
  staggerContainer,
  textReveal,
} from "@/lib/motion";

export function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isInView) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    const fallback = window.setTimeout(() => controls.start("show"), 1600);
    return () => window.clearTimeout(fallback);
  }, [isInView, controls]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={staggerContainer(0.18, 0.1)}
      className="space-y-8"
    >
      <motion.div variants={staggerContainer(0.08, 0)} className="space-y-2">
        <motion.h2 variants={textReveal} className="text-3xl font-semibold text-white">
          Projects
        </motion.h2>
        <motion.p variants={fadeIn} className="text-base text-slate-300">
          Selected work showcasing applied AI engineering across platforms and experiences.
        </motion.p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={springCard}
            whileHover={{ y: -12, transition: { type: "spring", stiffness: 260, damping: 22 } }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-[1px]"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-full flex-col gap-6 rounded-[1.75rem] bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8 backdrop-blur-xl transition-all duration-300 group-hover:bg-white/10"
            >
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-glow opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:-translate-y-1 group-hover:bg-white/10">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <p className="relative text-sm text-slate-300">{project.description}</p>
              <div className="relative flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
