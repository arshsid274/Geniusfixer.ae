"use client";

import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
  colors?: string[];
  blur?: number;
}

export function Aurora({
  className,
  colors = [
    "rgba(26,99,176,0.15)",
    "rgba(204,36,32,0.08)",
    "rgba(27,43,75,0.20)",
    "rgba(26,99,176,0.10)",
  ],
  blur = 70,
}: AuroraProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Gradient blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-60 animate-[spin-slow_20s_linear_infinite]"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />
      <div
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-50 animate-[spin-slow_25s_linear_infinite_reverse]"
        style={{
          background: `radial-gradient(circle, ${colors[1]} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-[700px] h-[400px] rounded-full opacity-40"
        style={{
          background: `radial-gradient(ellipse, ${colors[2]} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          animation: "aurora 15s ease infinite alternate",
        }}
      />
      <div
        className="absolute top-0 left-1/2 w-[400px] h-[300px] rounded-full opacity-30"
        style={{
          background: `radial-gradient(ellipse, ${colors[3]} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          animation: "aurora 18s ease infinite alternate-reverse",
        }}
      />
    </div>
  );
}
