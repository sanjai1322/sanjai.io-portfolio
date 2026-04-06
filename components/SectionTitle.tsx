"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  title: string;
  accent?: "red" | "blue" | "gradient";
  className?: string;
}

export default function SectionTitle({ title, accent = "red", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const underlineColor =
    accent === "blue"
      ? "#1A8FFF"
      : accent === "gradient"
      ? "linear-gradient(90deg, #FF1A1A, #1A8FFF)"
      : "#FF1A1A";

  return (
    <div ref={ref} className={`mb-16 ${className}`}>
      <motion.h2
        className="font-bebas text-5xl md:text-6xl lg:text-7xl text-text-primary tracking-wide"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="mt-3 h-[3px] rounded-full"
        style={{
          background: underlineColor,
          originX: 0,
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
