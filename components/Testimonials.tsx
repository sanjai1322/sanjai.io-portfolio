"use client";

import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  // Duplicate for seamless infinite scroll
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-16">
        <SectionTitle title="WHAT PEOPLE SAY" accent="blue" />
      </div>

      {/* Marquee */}
      <div className="marquee-container relative overflow-hidden">
        {/* Edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, var(--bg-primary), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, var(--bg-primary), transparent)" }} />

        <div className="flex marquee-inner animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <TestimonialCard
              key={`${t.name}-${i}`}
              quote={t.quote}
              name={t.name}
              role={t.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
