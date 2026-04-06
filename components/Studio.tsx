"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import MagneticButton from "./MagneticButton";
import { SERVICES } from "@/lib/constants";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export default function Studio() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="studio"
      ref={ref}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bg-secondary overflow-hidden"
    >
      {/* Constellation dot background */}
      <div
        className="absolute inset-0 opacity-30 animate-drift"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          width: "200%",
        }}
      />

      {/* Gradient ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,26,26,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title="THE STUDIO" accent="gradient" />

        {/* Studio logo */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-3xl">✦</span>
            <h2
              className="font-bebas text-3xl md:text-4xl tracking-[0.3em] text-text-primary"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              CODE CONSTELLATION
            </h2>
            <span className="text-3xl">✦</span>
          </div>
          <p className="font-dm text-text-secondary text-sm md:text-base tracking-wider">
            Premium AI Studio — Building Tomorrow&apos;s Digital Experiences
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-dm text-center text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
        >
          Code Constellation is a premium AI studio offering SaaS development, animated landing pages,
          AI/ML projects, IEEE paper writing, and engineering project services for students and global
          clients. We don&apos;t build websites — we build experiences.
        </motion.p>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.label}
              variants={staggerItemVariants}
              className="group flex items-center gap-3 px-5 py-4 rounded-xl bg-bg-card border border-white/5 hover:border-accent-blue/30 hover:shadow-[0_0_20px_rgba(26,143,255,0.1)] transition-all duration-300"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </span>
              <span
                className="font-space font-medium text-sm text-text-secondary group-hover:text-text-primary transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <MagneticButton
            href="https://codeconstellation.in"
            className="font-space font-semibold px-8 py-4 bg-accent-red text-white rounded hover:scale-105 transition-transform duration-200 text-sm tracking-wider inline-flex items-center gap-2"
          >
            Visit codeconstellation.in
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
