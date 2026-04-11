import { cn } from "@/lib/utils";
import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export function ShinyText({ text, disabled = false, speed = 5, className }: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "bg-clip-text text-transparent",
        "bg-[linear-gradient(120deg,var(--color-navy)_33%,var(--color-brand-red)_50%,var(--color-navy)_66%)]",
        "bg-[size:300%_100%]",
        !disabled && "animate-[shimmer_var(--speed,5s)_linear_infinite]",
        className
      )}
      style={{ "--speed": animationDuration } as React.CSSProperties}
    >
      {text}
    </span>
  );
}
