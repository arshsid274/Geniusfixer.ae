"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const steps = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Call or fill our online form. Our team confirms your booking within minutes.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "We Assess the Job",
    desc: "Our certified technician arrives on time, inspects the issue, and gives you a clear quote.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "We Get to Work",
    desc: "Our experts complete the job with quality materials and professional standards.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Final Inspection",
    desc: "We verify everything is working perfectly before leaving, ensuring your satisfaction.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-main">
        {/* Header */}
        <BlurFade inView className="flex flex-col items-center text-center mb-16">
          <div className="overline justify-center mb-4">How It Works</div>
          <h2
            className="font-heading font-extrabold text-navy mb-4"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Our Simple 4-Step Process
          </h2>
          <p className="text-gray-mid max-w-xl" style={{ fontSize: "var(--text-body-lg)" }}>
            Getting your technical issues fixed is quick and hassle-free. Here&apos;s how we work.
          </p>
        </BlurFade>

        {/* Steps */}
        <div className="relative">
          {/* Connecting dashed line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              backgroundImage: "linear-gradient(to right, var(--color-brand-red) 50%, transparent 50%)",
              backgroundSize: "16px 1px",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <BlurFade key={step.step} inView delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center relative">
                    {/* Number circle */}
                    <div className="relative z-10 mb-6">
                      <div
                        className="w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-red"
                        style={{ background: "var(--color-brand-red)" }}
                      >
                        <span className="text-white font-heading font-black text-[10px] tracking-widest uppercase opacity-70">
                          Step
                        </span>
                        <span className="text-white font-heading font-black text-2xl leading-tight">
                          {step.step}
                        </span>
                      </div>
                      {/* Icon below */}
                      <div
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-light"
                      >
                        <Icon size={14} className="text-brand-red" />
                      </div>
                    </div>

                    {/* Arrow (desktop) */}
                    {i < steps.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="hidden lg:block absolute top-8 -right-4 text-brand-red z-20"
                      />
                    )}

                    <h3
                      className="font-heading font-bold text-navy mb-3"
                      style={{ fontSize: "var(--text-h4)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-mid text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <BlurFade inView delay={0.4} className="flex justify-center mt-14">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white text-[13px] font-bold rounded-sm transition-all duration-300 hover:bg-brand-blue"
          >
            Start Your Service Request
            <ArrowRight size={14} />
          </motion.a>
        </BlurFade>
      </div>
    </section>
  );
}
