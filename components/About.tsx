"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { slideInLeftVariants, slideInRightVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "5+", label: "Tech Stacks Mastered" },
  { value: "1", label: "Studio Founded" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <SectionTitle title="ABOUT" accent="red" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={slideInLeftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="font-dm text-2xl md:text-3xl font-medium text-text-primary mb-8 leading-relaxed text-balance">
            I don&apos;t just write code —<br />
            <span
              className="text-gradient"
              style={{
                background: "linear-gradient(135deg, #FF1A1A 0%, #1A8FFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              I build digital empires.
            </span>
          </p>

          <p className="font-dm text-lg text-text-secondary leading-relaxed mb-12">
            CS student turned tech entrepreneur, building at the intersection of AI, web development,
            and space technology. I founded{" "}
            <span className="text-text-primary font-medium">Code Constellation</span> — a premium AI
            studio delivering cinematic digital experiences for clients globally. Passionate about
            learning by building, teaching by sharing, and pushing the boundaries of what&apos;s
            technically possible.
          </p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItemVariants} className="text-center">
                <p
                  className="font-bebas text-5xl md:text-7xl leading-none mb-2"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    background: "linear-gradient(135deg, #FF1A1A 0%, #1A8FFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p className="font-dm text-xs md:text-sm text-text-secondary tracking-widest uppercase leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Code comment tag */}
          <p
            className="font-jetbrains text-sm text-text-secondary mt-8"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-accent-blue">{"// "}</span>
            <span className="text-green-400/70">location:</span>
            <span className="text-text-secondary"> Chennai, India</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
