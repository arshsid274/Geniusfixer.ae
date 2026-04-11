"use client";

import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#CC2420",
  colorTo = "#1A63B0",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "[background:linear-gradient(white,white)_padding-box,conic-gradient(from_calc(360deg*var(--anchor)/100),var(--color-from)_0%,var(--color-to)_calc(var(--size)*1%),transparent_calc(var(--size)*1%))_border-box]",
        "[animation:border-beam_calc(var(--duration)*1s)_linear_infinite]",
        "[animation-delay:var(--delay)]",
        className
      )}
    />
  );
}
