"use client";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="relative flex-shrink-0 w-80 md:w-96 p-6 bg-bg-card border border-white/5 rounded-xl mx-4">
      {/* Big quotation mark */}
      <span
        className="absolute top-4 left-4 font-bebas text-7xl leading-none text-accent-red opacity-15 pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        aria-hidden
      >
        &ldquo;
      </span>

      <p className="font-dm text-sm md:text-base text-text-primary leading-relaxed italic mb-6 pt-4 relative z-10">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="border-t border-white/5 pt-4">
        <p
          className="font-space font-semibold text-sm text-text-primary mb-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {name}
        </p>
        <p
          className="font-jetbrains text-xs text-text-secondary"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}
