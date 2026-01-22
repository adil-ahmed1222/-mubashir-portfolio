"use client";

import { motion } from "framer-motion";
import { dividerReveal } from "@/lib/motion";

interface SectionDividerProps {
  delay?: number;
}

export function SectionDivider({ delay = 0 }: SectionDividerProps) {
  return (
    <motion.div
      className="section-divider"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={dividerReveal}
      custom={delay}
    />
  );
}
