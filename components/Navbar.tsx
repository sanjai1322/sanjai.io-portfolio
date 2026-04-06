"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const scrollPos = window.scrollY;
      const vh = window.innerHeight;
      
      // Update background/scrolled state
      setScrolled(scrollPos > 40);

      // Hide logic: Between 50px and end of Hero (600vh)
      // We explicitly check if scroll is between 50 and 550vh (leaving some room at the end)
      const isInsideHero = scrollPos > 50 && scrollPos < (vh * 5.5);
      setVisible(!isInsideHero);
    };

    window.addEventListener("scroll", handleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: visible ? 1 : 0, 
          y: visible ? 0 : -100,
          pointerEvents: visible ? "auto" : "none" 
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeInOut",
          opacity: { duration: 0.3 }
        }}
        style={{
          backgroundColor: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,26,26,0.15)"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-bebas text-2xl tracking-[0.25em] text-text-primary hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          aria-label="Home"
        >
          SANJAI
          <span
            className="text-accent-red animate-pulse-glow"
            style={{ textShadow: "0 0 10px rgba(255,26,26,0.8)" }}
          >
            .
          </span>
          IO
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-dm text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wider uppercase relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-red group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <MagneticButton
            href="#contact"
            className="font-space font-semibold text-sm px-6 py-2.5 border border-accent-red text-text-primary rounded hover:bg-accent-red hover:text-white transition-all duration-300"
          >
            Hire Me
          </MagneticButton>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-8 h-6 flex flex-col justify-between"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-full bg-text-primary transition-transform duration-300 origin-center"
            style={{
              transform: mobileOpen ? "translateY(11px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-full bg-text-primary transition-opacity duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-full bg-text-primary transition-transform duration-300 origin-center"
            style={{
              transform: mobileOpen ? "translateY(-11px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-bebas text-4xl text-text-primary tracking-widest hover:text-accent-red transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 font-space font-semibold px-8 py-3 border border-accent-red text-text-primary rounded hover:bg-accent-red transition-all"
                >
                  Hire Me
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
