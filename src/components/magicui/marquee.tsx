import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{ "--duration": `${duration}s` } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around gap-[--gap]", {
              "animate-[marquee_var(--duration)_linear_infinite]": !vertical,
              "animate-[marquee-vertical_var(--duration)_linear_infinite]": vertical,
              "[animation-direction:reverse]": reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "flex-row": !vertical,
              "flex-col": vertical,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
