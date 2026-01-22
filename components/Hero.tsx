"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, FileDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const cardParallax = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? 0 : value * -80
  );
  const glowParallax = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? 0 : value * 60
  );
  const imageTilt = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? 0 : value * 4
  );

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <motion.div
        variants={itemVariants}
        style={{ y: cardParallax }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] shadow-glow"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/70 p-10 backdrop-blur-xl transition-all duration-500 hover:bg-slate-950/80 dark:bg-slate-900/60">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-accent/30 blur-[140px]" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ y: glowParallax }}
            animate=
              {prefersReducedMotion
                ? { opacity: 0.25 }
                : { opacity: [0.25, 0.4, 0.3, 0.25], scale: [1, 1.04, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute -top-32 left-1/2 h-72 w-[140%] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500/25 via-accent/30 to-transparent blur-3xl"
              animate=
                {prefersReducedMotion
                  ? { opacity: 0.25 }
                  : { x: ["-10%", "10%", "-10%"], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-40 right-1/2 h-72 w-[120%] translate-x-1/2 rounded-full bg-gradient-to-l from-accent/25 via-white/10 to-transparent blur-[120px]"
              animate=
                {prefersReducedMotion
                  ? { opacity: 0.2 }
                  : { x: ["6%", "-12%", "6%"], opacity: [0.18, 0.3, 0.2] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>

          <motion.div
            className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"
            variants={itemVariants}
            whileHover={{ rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div className="flex flex-col gap-8">
              <motion.div
                className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                variants={itemVariants}
              >
                <Sparkles className="h-4 w-4 text-accent" />
                <motion.span
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, x: 0, filter: "blur(0px)" }
                      : {
                          opacity: 0,
                          x: -25,
                          filter: "blur(6px)",
                          letterSpacing: "0.5em",
                        }
                  }
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)", letterSpacing: "0.35em" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", letterSpacing: "0.35em" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 90,
                          damping: 18,
                          delay: 0.15,
                        }
                  }
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400"
                >
                  {profile.role.toUpperCase()}
                </motion.span>
              </motion.div>
              <motion.div className="max-w-3xl space-y-6" variants={itemVariants}>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
                <p className="gradient-text text-lg font-medium uppercase tracking-[0.35em]">
                  {profile.role}
                </p>
                <p className="text-lg text-slate-200 sm:text-xl">
                  {profile.tagline}
                </p>
                <p className="text-base text-slate-300 sm:text-lg">
                  {profile.intro}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-4"
                variants={itemVariants}
              >
                <Link
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
                <Link
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
                <Link
                  href={profile.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium-light"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
              style={{ rotate: imageTilt }}
            >
              <motion.div
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-2 sm:p-3 md:p-4 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_0_25px_rgba(15,23,42,0.35)] transition-all duration-500"
                animate={
                  prefersReducedMotion
                    ? { y: 0 }
                    : { y: [0, -8, 0, 6, 0], opacity: [0.92, 1, 0.95, 1] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }
                }
                whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(56,189,248,0.35)" }}
              >
                <div className="flex h-[140px] w-[140px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 via-primary-500/20 to-white/10 text-4xl font-semibold text-white shadow-inner sm:h-[160px] sm:w-[160px] md:h-[180px] md:w-[180px] lg:h-[220px] lg:w-[220px]">
                  {imageError ? (
                    <span aria-label="Mohammed Mubashir Ahmed" className="tracking-wide">
                      MA
                    </span>
                  ) : (
                    <Image
                      src="/profile.jpeg"
                      alt="Portrait of Mohammed Mubashir Ahmed"
                      width={220}
                      height={220}
                      className="h-full w-full rounded-[1.5rem] object-cover"
                      priority
                      onError={() => setImageError(true)}
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
