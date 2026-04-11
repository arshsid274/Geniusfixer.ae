"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const testimonials = [
  {
    id: 1,
    text: "Genius Fixer fixed my AC within hours of calling. The technician was professional, on time, and cleaned up after the work. Excellent service!",
    name: "Mohammed Al Rashidi",
    role: "Homeowner",
    location: "Dubai Marina",
    rating: 5,
  },
  {
    id: 2,
    text: "We hired Genius Fixer for our office electrical work. The team was certified, transparent about pricing, and completed everything ahead of schedule.",
    name: "Sarah Johnson",
    role: "Business Owner",
    location: "Business Bay",
    rating: 5,
  },
  {
    id: 3,
    text: "The plumbing team was fantastic. They explained every step, fixed the leak quickly, and the pricing was very fair. Will definitely use again!",
    name: "Ahmed Hassan",
    role: "Villa Owner",
    location: "Jumeirah",
    rating: 5,
  },
  {
    id: 4,
    text: "Outstanding painting job on our villa. The team's attention to detail and fine finish exceeded our expectations. Highly recommend Genius Fixer!",
    name: "Fatima Al Maktoum",
    role: "Property Owner",
    location: "Arabian Ranches",
    rating: 5,
  },
  {
    id: 5,
    text: "Signed an annual maintenance contract with Genius Fixer. The peace of mind is incredible — they respond within an hour to any issue.",
    name: "David Chen",
    role: "Facilities Manager",
    location: "DIFC",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAuto]);

  const prev = () => {
    setIsAuto(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIsAuto(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section className="section-y overflow-hidden" style={{ background: "var(--color-navy)" }}>
      <div className="container-main">
        {/* Header */}
        <BlurFade inView className="flex flex-col items-center text-center mb-16">
          <div
            className="text-[11px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            <div className="w-6 h-px" style={{ background: "rgba(255,255,255,0.30)" }} />
            Client Testimonials
            <div className="w-6 h-px" style={{ background: "rgba(255,255,255,0.30)" }} />
          </div>
          <h2
            className="font-heading font-extrabold text-white mb-4"
            style={{ fontSize: "var(--text-h2)" }}
          >
            What Our Clients Say
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "var(--text-body-lg)" }}>
            Over 1,200 happy clients across Dubai and UAE trust Genius Fixer.
          </p>
        </BlurFade>

        {/* Slider */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="text-brand-red mb-6 opacity-80"
                fill="currentColor"
              />

              {/* Text */}
              <p
                className="text-white leading-relaxed mb-8 italic"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: "var(--color-brand-red)" }}
                >
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-[15px]">
                    {testimonials[current].name}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.50)", fontSize: "var(--text-sm)" }}>
                    {testimonials[current].role} · {testimonials[current].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-brand-red"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAuto(false); setCurrent(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "var(--color-brand-red)" : "rgba(255,255,255,0.25)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-brand-red"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
