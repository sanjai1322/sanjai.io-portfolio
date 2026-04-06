"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { SKILLS } from "@/lib/constants";
import { staggerContainerVariants } from "@/lib/animations";

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bg-secondary overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 constellation-bg" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent-red/20 to-transparent mix-blend-overlay animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <SectionTitle title="TECHNOLOGIES I MASTER" accent="blue" />
          <motion.p 
            className="font-jetbrains text-sm text-text-secondary mt-4 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-accent-blue">{"> "}</span>
            SYSTEMS_ARCHITECTURE // FULL_STACK_CAPABILITIES // AI_INTEGRATION
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              icon={skill.icon}
              skills={skill.skills}
              color={skill.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
