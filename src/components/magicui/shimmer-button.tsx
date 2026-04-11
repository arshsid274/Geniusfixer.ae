"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  as?: "button" | "a";
  href?: string;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "4px",
  shimmerDuration = "2.5s",
  background = "var(--color-brand-red)",
  className,
  children,
  as: Tag = "button",
  href,
  ...props
}: ShimmerButtonProps) {
  const style = {
    "--shimmer-color": shimmerColor,
    "--radius": borderRadius,
    "--speed": shimmerDuration,
    "--cut": shimmerSize,
    "--bg": background,
  } as CSSProperties;

  const classes = cn(
    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
    "border border-white/10 px-8 py-3.5",
    "text-white text-sm font-bold tracking-wide",
    "[background:var(--bg)] [border-radius:var(--radius)]",
    "transition-all duration-300 hover:-translate-y-0.5",
    "before:absolute before:inset-0 before:rounded-[inherit]",
    "before:[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]",
    "before:[--spread:90deg]",
    "before:animate-[spin_var(--speed)_linear_infinite]",
    "before:[mask:linear-gradient(white,white)_content-box,linear-gradient(white,white)]",
    "before:[mask-composite:xor] before:p-[var(--cut)]",
    className
  );

  if (Tag === "a" && href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  );
}
