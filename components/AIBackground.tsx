"use client";

import { useCallback, useMemo } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export function AIBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? 0 : value * -120
  );
  const shimmerParallax = useTransform(scrollYProgress, (value) =>
    prefersReducedMotion ? 0 : value * 90
  );

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      background: {
        color: "transparent",
      },
      particles: {
        number: {
          value: prefersReducedMotion ? 30 : 55,
          density: {
            enable: true,
            area: 900,
          },
        },
        size: {
          value: { min: 1, max: 5 },
          animation: prefersReducedMotion
            ? { enable: false }
            : {
                enable: true,
                speed: 4,
                minimumValue: 1,
                sync: false,
              },
        },
        color: {
          value: ["#6366F1", "#22D3EE", "#F8FAFC"],
        },
        move: {
          enable: true,
          speed: prefersReducedMotion ? 0.5 : 1.4,
          direction: "none" as const,
          outModes: "out" as const,
          trail: prefersReducedMotion
            ? { enable: false, length: 0, fillColor: "transparent" }
            : {
                enable: true,
                length: 6,
                fillColor: "rgba(15,23,42,0.32)",
              },
        },
        links: {
          enable: true,
          distance: 145,
          color: "#94A3B8",
          opacity: 0.2,
          width: 1,
        },
        opacity: {
          value: 0.6,
          animation: prefersReducedMotion
            ? { enable: false }
            : {
                enable: true,
                speed: 0.6,
                minimumValue: 0.2,
                sync: false,
              },
        },
        shape: {
          type: "circle",
        },
      },
      interactivity: {
        detectsOn: "window" as const,
        events: {
          onHover: {
            enable: !prefersReducedMotion,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.6,
          },
        },
      },
    }),
    [prefersReducedMotion]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]"
        style={{ y: parallaxY }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary-500/25 via-transparent to-transparent blur-3xl"
        animate={
          prefersReducedMotion
            ? { opacity: 0.25 }
            : { opacity: [0.15, 0.35, 0.18], scaleY: [1, 1.05, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-[-20%] bottom-[-30%] h-[60%] bg-gradient-to-t from-accent/25 via-transparent to-transparent blur-[160px]"
        style={{ y: shimmerParallax }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.15 }
            : { opacity: [0.12, 0.28, 0.16], x: ["-8%", "6%", "-8%"] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <Particles
        id="ai-background"
        className="absolute inset-0"
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
}
