"use client";

import { useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  type = "button",
  "aria-label": ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    setOffset({ x: distX * 0.3, y: distY * 0.3 });
  };

  const onMouseLeave = () => setOffset({ x: 0, y: 0 });

  const style = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform 0.2s ease-out",
  };

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-magnetic
      >
        <a
          href={href}
          className={`magnetic-btn inline-block ${className}`}
          style={style}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-magnetic
    >
      <button
        type={type}
        className={`magnetic-btn ${className}`}
        style={style}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
}
