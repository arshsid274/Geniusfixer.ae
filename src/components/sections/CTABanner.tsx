"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(135deg, #CC2420 0%, #A81D1A 50%, #8B1614 100%)",
      }}
    >
      <Image
        src="/assets/images/cta-team.jpg"
        alt="Genius Fixer service team ready to help"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/90 via-brand-red/80 to-brand-red-hover/90" />

      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <BlurFade inView className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4"
              style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Get Started Today
            </div>
            <h2
              className="font-heading font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Ready to Fix It Right?
            </h2>
            <p
              className="max-w-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.80)", fontSize: "var(--text-body-lg)" }}
            >
              Call us now or request a quote online. Our certified technicians are available
              24/7 across Dubai and UAE.
            </p>
          </BlurFade>

          {/* Right */}
          <BlurFade inView delay={0.15} className="flex flex-col items-center lg:items-end gap-5 flex-shrink-0">
            {/* Phone */}
            <a
              href="tel:+971529724924"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <div
                  className="text-[11px] font-bold tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  Call Us Now
                </div>
                <div className="text-white font-heading font-black text-2xl group-hover:text-yellow-300 transition-colors">
                  +971 52 972 4924
                </div>
              </div>
            </a>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white font-bold text-[13px] rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ color: "var(--color-brand-red)" }}
              >
                Get Free Quote
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/971529724924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-[13px] rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "2px solid rgba(255,255,255,0.5)",
                  color: "white",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
