"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextElement = "h1" | "h2" | "p" | "span";
type Direction = "left" | "right" | "up" | "down";

type RevealTextProps = {
  text: string;
  as?: TextElement;
  delay?: number;
  duration?: number;
  direction?: Direction;
  once?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

const motionElements: Record<TextElement, any> = {
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
};

const directionOffsets: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -32 },
  right: { x: 32 },
  up: { y: 28 },
  down: { y: -28 },
};

export const RevealText = forwardRef<HTMLElement, RevealTextProps>(
  (
    {
      text,
      as = "span",
      delay = 0,
      duration,
      direction = "left",
      once = true,
      className,
      ...rest
    },
    ref
  ) => {
    const MotionComponent = motionElements[as] ?? motion.span;
    const prefersReducedMotion = useReducedMotion();

    const initialState = prefersReducedMotion
      ? { opacity: 1, filter: "blur(0px)" }
      : {
          opacity: 0,
          filter: "blur(12px)",
          ...directionOffsets[direction],
        };

    const animateState = prefersReducedMotion
      ? { opacity: 1, filter: "blur(0px)" }
      : {
          opacity: 1,
          filter: "blur(0px)",
          x: 0,
          y: 0,
        };

    const transition = prefersReducedMotion
      ? undefined
      : {
          type: "spring" as const,
          stiffness: 90,
          damping: 18,
          mass: 0.9,
          ...(delay ? { delay } : {}),
          ...(duration ? { duration } : {}),
        };

    return (
      <MotionComponent
        ref={ref as never}
        initial={initialState}
        animate={animateState}
        whileInView={animateState}
        viewport={{ once, amount: 0.25 }}
        transition={transition}
        className={cn("inline-block", className)}
        {...rest}
      >
        {text}
      </MotionComponent>
    );
  }
);

RevealText.displayName = "RevealText";
