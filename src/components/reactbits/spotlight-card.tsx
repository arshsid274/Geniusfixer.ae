"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(204, 36, 32, 0.06)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "before:absolute before:inset-0 before:z-10 before:opacity-0 before:transition-opacity before:duration-500",
        "before:[background:radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),var(--spotlight-color,rgba(204,36,32,0.06)),transparent_60%)]",
        "hover:before:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}
