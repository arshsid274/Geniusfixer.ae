"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitBy?: "words" | "chars";
  from?: { opacity?: number; y?: number; x?: number; rotate?: number };
  to?: { opacity?: number; y?: number; x?: number; rotate?: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
}

export function SplitText({
  text,
  className,
  delay = 0.05,
  duration = 0.5,
  splitBy = "words",
  from = { opacity: 0, y: 30 },
  to = { opacity: 1, y: 0 },
}: SplitTextProps) {
  const tokens = splitBy === "words" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: from as Record<string, number>,
    visible: {
      ...(to as Record<string, number>),
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {tokens.map((token, i) => (
        <motion.span key={i} variants={itemVariants} className="inline-block">
          {token}
          {splitBy === "words" && i < tokens.length - 1 ? "" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
