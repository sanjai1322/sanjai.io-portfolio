"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/constants";
import { staggerContainerVariants } from "@/lib/animations";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="PROJECTS" accent="red" />

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={
                project.span === "col-span-2"
                  ? "md:col-span-2 lg:col-span-2"
                  : "col-span-1"
              }
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                tags={project.tags}
                color={project.color}
                gradient={project.gradient}
                span="col-span-1"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
