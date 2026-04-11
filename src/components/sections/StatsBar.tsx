"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  { value: 1200, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 150, suffix: "+", label: "Expert Technicians" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "var(--color-navy)" }} className="py-12">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-4 text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.10)"
                    : "none",
              }}
            >
              <div
                className="font-heading font-black text-white leading-none mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                <NumberTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-white"
                />
              </div>
              <div
                className="text-[13px] font-medium"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
