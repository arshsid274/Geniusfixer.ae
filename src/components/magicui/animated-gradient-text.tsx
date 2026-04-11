import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-full bg-white/40 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-md dark:bg-black/40",
        "border border-gray-light",
        className
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-[shimmer_3s_linear_infinite] rounded-full bg-gradient-to-r from-transparent via-brand-red/20 to-transparent [background-size:var(--bg-size)_100%]`}
        style={{ "--bg-size": "300%" } as React.CSSProperties}
      />
      {children}
    </div>
  );
}
