import type { Variants } from "framer-motion";

export const staggerContainer = (stagger = 0.16, delayChildren = 0.08) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
      when: "beforeChildren",
    },
  },
});

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.52,
      ease: [0.3, 1, 0.6, 1],
    },
  },
};

export const springCard: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(14px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.9,
    },
  },
};

export const dividerReveal: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    filter: "blur(18px)",
    transformOrigin: "center",
  },
  show: (delay = 0) => ({
    opacity: 1,
    scaleX: 1,
    filter: "blur(0px)",
    transition: {
      delay,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};
