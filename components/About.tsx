"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Check } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer, textReveal } from "@/lib/motion";
import { RevealText } from "@/components/RevealText";

export function About() {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"
    >
      <motion.div
        variants={fadeIn}
        className="glass-panel relative overflow-hidden p-8"
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-16 left-0 h-44 w-44 rounded-full bg-accent/25 blur-[120px]" />
        <div className="relative space-y-5 text-base leading-relaxed text-slate-200">
          <RevealText
            text="About"
            as="h2"
            direction="left"
            className="text-3xl font-semibold text-white"
          />
          <motion.p variants={fadeUp}>
            I design, build, and deploy AI solutions that solve real business problems. With 3+ years of hands-on experience in Artificial Intelligence, I&apos;ve delivered multiple end-to-end AI projects—from data strategy and model development to scalable deployment—enabling intelligent automation and measurable business outcomes.
          </motion.p>
          <motion.p variants={fadeUp}>
            My expertise spans Machine Learning, Deep Learning, NLP, Generative AI, and Prompt Engineering, with strong experience in building production-ready pipelines, AI agents, and reliable systems with observability and performance in mind.
          </motion.p>
          <motion.p variants={fadeUp}>
            I have also worked on outsourced AI projects, collaborating with multiple companies and cross-functional teams, understanding client requirements, delivering solutions on time, and ensuring production-quality results. I focus on building resilient, user-centered AI systems that create real impact at scale.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        className="glass-panel relative flex flex-col gap-4 overflow-hidden p-8"
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        <div className="absolute -top-24 right-0 h-44 w-44 rounded-full bg-primary-500/30 blur-3xl" />
        <motion.div variants={staggerContainer(0.12)} className="relative space-y-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h3 variants={textReveal} className="text-lg font-semibold text-white">
            Highlights
          </motion.h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {profile.highlights.map((highlight) => (
              <motion.li
                key={highlight}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-white/10"
                whileHover={{ x: 4 }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <Check className="h-4 w-4 text-accent" />
                </span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
