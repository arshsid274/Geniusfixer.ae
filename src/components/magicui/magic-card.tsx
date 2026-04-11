"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#CC2420",
  gradientOpacity = 0.08,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!cardRef.current) return;
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseOut);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOut]);

  const background = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}${Math.round(gradientOpacity * 255).toString(16).padStart(2, "0")}, transparent 100%)`;

  return (
    <div
      ref={cardRef}
      className={cn("group relative flex size-full overflow-hidden rounded-xl", className)}
    >
      <div className="relative z-10 flex size-full flex-col">{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
    </div>
  );
}
