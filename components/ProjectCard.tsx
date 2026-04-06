"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "@/lib/animations";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  color: "red" | "blue";
  gradient: string;
  span?: string;
}

export default function ProjectCard({ name, description, tags, color, gradient, span = "col-span-1" }: ProjectCardProps) {
  const glowColor =
    color === "red" ? "rgba(255,26,26,0.25)" : "rgba(26,143,255,0.25)";
  const borderGlow =
    color === "red" ? "rgba(255,26,26,0.4)" : "rgba(26,143,255,0.4)";

  return (
    <motion.article
      variants={staggerItemVariants}
      className={`group relative overflow-hidden rounded-xl bg-bg-card border border-white/5 transition-all duration-400 ${span}`}
      whileHover={{ y: -4, rotateX: 1, rotateY: -1 }}
      transition={{ duration: 0.2 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
    >
      {/* Preview area */}
      <div
        className={`relative w-full aspect-video bg-gradient-to-br ${gradient} overflow-hidden`}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        {/* Project name watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="font-bebas text-3xl md:text-4xl tracking-wider opacity-10 text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {name.split(" ").slice(0, 2).join(" ")}
          </p>
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, ${glowColor} 0%, transparent 60%)`,
          }}
        >
          <a
            href="#"
            className="font-space font-semibold text-sm text-white flex items-center gap-2 hover:gap-3 transition-all"
          >
            View Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-space font-bold text-lg text-text-primary mb-2 group-hover:text-white transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {name}
        </h3>
        <p className="font-dm text-sm text-text-secondary leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-jetbrains text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-secondary border border-white/5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${borderGlow}` }}
      />
    </motion.article>
  );
}
