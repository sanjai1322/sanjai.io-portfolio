"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import { LucideIcon, Zap, Wrench, Brain, Database, Cloud, Palette } from "lucide-react";

const iconMap: Record<string, any> = {
  "Frontend": Zap,
  "Backend": Wrench,
  "AI / ML": Brain,
  "Database": Database,
  "Cloud & DevOps": Cloud,
  "Creative & Tools": Palette,
};

const SkillCard = ({ category, skills, icon, color, index }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[category] || Zap;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const accentColor = color === "red" ? "rgba(255, 26, 26, 0.4)" : "rgba(26, 143, 255, 0.4)";
  const borderColor = color === "red" ? "border-accent-red/20" : "border-accent-blue/20";
  const glowShadow = color === "red" ? "shadow-[0_0_20px_rgba(255,26,26,0.1)]" : "shadow-[0_0_20px_rgba(26,143,255,0.1)]";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={`relative group overflow-hidden rounded-2xl border ${borderColor} bg-bg-card/40 backdrop-blur-md p-8 transition-all duration-300 hover:bg-bg-card/60 ${glowShadow}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${accentColor}, transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl bg-bg-secondary border ${borderColor} group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className={`w-6 h-6 ${color === "red" ? "text-accent-red" : "text-accent-blue"}`} />
          </div>
          <span className="font-jetbrains text-[10px] text-text-secondary tracking-widest uppercase">
            {index + 1 < 10 ? `0${index + 1}` : index + 1} // MASTER_LEVEL
          </span>
        </div>

        <h3 className="font-space text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {category}
        </h3>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-jetbrains rounded-full bg-bg-primary/60 border border-white/5 text-text-accent group-hover:border-white/10 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Animated corner accent */}
      <div className={`absolute top-0 right-0 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden`}>
          <div className={`absolute top-[-10px] right-[-10px] w-5 h-5 rotate-45 ${color === "red" ? "bg-accent-red" : "bg-accent-blue"}`}></div>
      </div>
    </motion.div>
  );
};

export default function TechMastery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bg-primary overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionTitle title="TECHNOLOGIES I MASTER" accent="red" />
          </motion.div>
          <motion.p
            className="font-jetbrains text-sm text-text-secondary mt-6 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-accent-red">{"root@sanjai:~# "}</span>
            cat skills.json | jq '.technical_expertise'
            <br />
            <span className="text-text-accent mt-2 block">
              Architecting high-performance systems with modern AI-driven tech stacks and cinematic user experiences.
            </span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.category}
              {...skill}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Floating background decorative text */}
      <div className="absolute -bottom-10 -left-10 font-space text-[12vw] font-black text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
        EXPERTISE // INNOVATION // MASTERY
      </div>
    </section>
  );
}
