"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

const FRAME_COUNT = 194;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index (1-194)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/images/hero-sequence/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Draw current frame to canvas
  useEffect(() => {
    const handleDraw = (v: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const index = Math.floor(v) - 1;
      const currentImage = imagesRef.current[index];

      if (ctx && canvas && currentImage) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const imgRatio = currentImage.width / currentImage.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(currentImage, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const unsubscribe = frameIndex.on("change", handleDraw);

    // Initial draw
    if (imagesLoaded) {
      handleDraw(frameIndex.get());
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        handleDraw(frameIndex.get());
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, frameIndex]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[300vh]"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            opacity: imagesLoaded ? 1 : 0, 
            transition: "opacity 1s",
            imageRendering: "crisp-edges",
          }}
        />
        
        {/* Fallback & Preloader */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-primary">
            <div className="w-12 h-12 border-4 border-accent-red border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Global Overlays - Premium minimal feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-bg-primary/90" />
        
        {/* Subtle lens flares */}
        <div
          className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,26,26,0.15) 0%, transparent 70%)",
          }}
        />
        
        <div
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(26,143,255,0.1) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}
