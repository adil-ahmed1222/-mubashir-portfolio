"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import { fadeIn, fadeUp, staggerContainer, textReveal } from "@/lib/motion";

export function Contact() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.12, 0.08)}
      className="glass-panel relative overflow-hidden p-10"
    >
      <div className="absolute -left-20 top-6 h-40 w-40 rounded-full bg-primary-500/30 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-accent/25 blur-[120px]" />
      <motion.div variants={staggerContainer(0.1, 0)} className="relative flex flex-col gap-6 text-center sm:text-left">
        <motion.h2 variants={textReveal} className="text-3xl font-semibold text-white">
          Let&apos;s build something in AI.
        </motion.h2>
        <motion.p variants={fadeIn} className="text-base text-slate-300">
          Ready to enter AI? Join NeuralVarsity.ai and learn AI the right way — practical, structured, and career-focused.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 sm:justify-start"
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
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-2 text-sm text-slate-400 sm:justify-start"
        >
          <Mail className="h-4 w-4" />
          <span>adilahmed7118@gmail.com</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
