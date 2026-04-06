"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Zap, 
  Cpu, 
  Brain, 
  Database, 
  Cloud, 
  Palette, 
  ChevronRight 
} from "lucide-react";
import { staggerItemVariants } from "@/lib/animations";

interface SkillCardProps {
  category: string;
  icon: string;
  skills: string[];
  color: "red" | "blue";
}

const IconMap: Record<string, any> = {
  "⚡": Zap,
  "🔧": Cpu,
  "🧠": Brain,
  "🗄️": Database,
  "☁️": Cloud,
  "🎨": Palette,
};

export default function SkillCard({ category, icon, skills, color }: SkillCardProps) {
  const IconComponent = IconMap[icon] || Zap;
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowColor = color === "red" ? "rgba(255, 26, 26, 0.15)" : "rgba(26, 143, 255, 0.15)";
  const accentColor = color === "red" ? "#FF1A1A" : "#1A8FFF";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={staggerItemVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-8 bg-bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl transition-colors duration-500 hover:bg-bg-card/60 hover:border-white/10"
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <div 
          className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/20 transition-all duration-500"
          style={{ transform: "translateZ(30px)" }}
        >
          <IconComponent size={24} className="text-text-primary group-hover:text-accent-red transition-colors" style={{ color: accentColor }} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-4" />
        <span className="font-jetbrains text-[10px] text-text-secondary uppercase tracking-[0.2em]">01</span>
      </div>

      {/* Category Name */}
      <div className="relative z-10 mb-6" style={{ transform: "translateZ(40px)" }}>
        <h3 className="font-bebas text-3xl tracking-wider text-text-primary mb-1">
          {category}
        </h3>
        <div className="w-8 h-1 bg-accent-red rounded-full overflow-hidden" style={{ backgroundColor: accentColor }}>
          <motion.div 
            className="w-full h-full bg-white/30"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="relative z-10 flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-jetbrains text-text-secondary transition-all hover:bg-white/10 hover:text-text-primary group/pill"
          >
            <ChevronRight size={10} className="text-accent-red opacity-50 group-hover/pill:opacity-100 transition-opacity" style={{ color: accentColor }} />
            {skill}
          </div>
        ))}
      </div>

      {/* Tech corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/20 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </motion.div>
  );
}
