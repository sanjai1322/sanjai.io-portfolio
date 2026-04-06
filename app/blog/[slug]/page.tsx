import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Sanjai K`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="bg-bg-primary min-h-screen">
      <Navbar />

      <article className="pt-40 pb-24 px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="font-jetbrains text-xs text-text-secondary"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
          <span
            className="font-jetbrains text-xs text-accent-blue/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {post.readTime}
          </span>
        </div>

        <h1
          className="font-space font-bold text-3xl md:text-5xl text-text-primary leading-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {post.title}
        </h1>

        <div className="h-px bg-white/5 mb-10" />

        <div className="font-dm text-base text-text-secondary leading-relaxed space-y-6 prose prose-invert max-w-none">
          <p className="text-text-primary text-lg">{post.excerpt}</p>
          <p>
            This article is a placeholder. Full content will be added soon. Stay tuned for
            in-depth technical writing on AI, web development, and building at the intersection
            of technology and design.
          </p>
          <p>
            In the meantime, check out the other posts on the{" "}
            <a href="/blog" className="text-accent-red hover:underline">
              blog page
            </a>{" "}
            or{" "}
            <a href="/#contact" className="text-accent-blue hover:underline">
              get in touch
            </a>{" "}
            to discuss a project.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <a
            href="/blog"
            className="font-space font-semibold text-sm text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ← Back to Blog
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
