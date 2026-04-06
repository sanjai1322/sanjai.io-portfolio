import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Sanjai K",
  description: "Articles on AI, Full Stack Development, and building premium digital experiences.",
};

export default function BlogPage() {
  return (
    <main className="bg-bg-primary min-h-screen">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h1
          className="font-bebas text-6xl md:text-8xl text-text-primary tracking-wide mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          BLOG
        </h1>
        <div className="h-0.5 w-16 bg-accent-red mb-16 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group p-6 bg-bg-card border border-white/5 rounded-xl hover:border-accent-blue/20 transition-all duration-300"
            >
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
              <h2
                className="font-space font-bold text-lg text-text-primary mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {post.title}
              </h2>
              <p className="font-dm text-sm text-text-secondary leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <a
                href={`/blog/${post.slug}`}
                className="font-space font-semibold text-xs text-accent-red inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Read Article →
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
