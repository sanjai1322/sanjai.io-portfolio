"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { BLOG_POSTS } from "@/lib/constants";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";

export default function BlogPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="blog"
      ref={ref}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="LATEST POSTS" accent="blue" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.slug}
              variants={staggerItemVariants}
              className="group relative p-6 bg-bg-card border border-white/5 rounded-xl hover:border-accent-blue/20 hover:shadow-[0_0_30px_rgba(26,143,255,0.07)] transition-all duration-300"
            >
              {/* Date + read time */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-jetbrains text-xs text-text-secondary"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {post.date}
                </span>
                <span
                  className="font-jetbrains text-xs text-accent-blue/60"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-space font-bold text-base text-text-primary mb-3 leading-snug group-hover:text-white transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-dm text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read link */}
              <a
                href={`/blog/${post.slug}`}
                className="font-space font-semibold text-xs text-accent-red inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Read
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7H12M12 7L8 3M12 7L8 11"
                    stroke="#FF1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(90deg, transparent, #1A8FFF, transparent)" }} />
            </motion.article>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/blog"
            className="font-space font-semibold text-sm text-text-secondary border border-white/10 px-6 py-3 rounded-lg hover:border-accent-blue/40 hover:text-text-primary transition-all duration-300 inline-block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            View All Posts →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
