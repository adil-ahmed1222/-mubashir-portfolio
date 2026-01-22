"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { fadeIn, fadeUp, springCard, staggerContainer } from "@/lib/motion";
import { RevealText } from "@/components/RevealText";

export function Skills() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer()}
      className="space-y-8"
    >
      <div className="flex flex-col gap-2">
        <RevealText
          text="Skills"
          as="h2"
          direction="left"
          className="text-3xl font-semibold text-white"
        />
        <motion.p variants={fadeIn} className="text-base text-slate-300">
          A toolset crafted for building production-grade AI systems and premium experiences.
        </motion.p>
      </div>
      <motion.div
        variants={staggerContainer(0.12, 0.05)}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={springCard}
            whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 260, damping: 22 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px]"
          >
            <div className="relative flex items-center gap-3 rounded-3xl bg-gradient-to-br from-white/5 via-white/0 to-white/5 px-6 py-5 backdrop-blur-xl transition-all duration-300 group-hover:bg-white/10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-glow opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative text-sm font-semibold text-white">{skill}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
