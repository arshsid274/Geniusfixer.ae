"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Star, Clock } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Aurora } from "@/components/reactbits/aurora";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.19, 1, 0.22, 1] },
});

const trust = [
  { icon: Shield, text: "Licensed and insured" },
  { icon: Star, text: "5-star rated service" },
  { icon: Clock, text: "24/7 emergency response" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      <Aurora
        colors={[
          "rgba(26,99,176,0.08)",
          "rgba(204,36,32,0.05)",
          "rgba(27,43,75,0.06)",
          "rgba(26,99,176,0.04)",
        ]}
        blur={90}
      />

      <div className="absolute right-0 top-0 hidden h-full w-[45%] bg-off-white lg:block" />

      <div className="container-main relative z-10 w-full py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[58%_42%] xl:gap-16">
          <div className="flex flex-col items-start">
            <motion.div {...fadeUp(0)}>
              <Badge className="mb-6 border border-brand-red/20 bg-brand-red-light px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
                Trusted home services in Dubai
              </Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="mb-5 font-heading text-navy"
              style={{ fontSize: "var(--text-display)", fontWeight: 800, lineHeight: "1.08" }}
            >
              One Stop Solution
              <br />
              For Technical Services
              <br />
              Across Dubai and UAE
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mb-8 max-w-lg text-gray-mid"
              style={{ fontSize: "var(--text-body-lg)", lineHeight: "1.7" }}
            >
              Expert HVAC, electrical, plumbing, painting, gypsum, masonry, and glass and aluminum work
              delivered by certified professionals.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mb-9 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-brand-red px-7 py-6 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-hover"
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-navy px-7 py-6 text-[13px] font-bold uppercase tracking-wide text-navy hover:bg-navy hover:text-white"
              >
                <a href="tel:+971529724924">
                  <Phone className="text-brand-red" />
                  +971 52 972 4924
                </a>
              </Button>
            </motion.div>

            <motion.ul {...fadeUp(0.4)} className="flex flex-wrap items-center gap-5">
              {trust.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon size={15} className="text-brand-red" />
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-navy">{text}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <BlurFade delay={0.2} inView className="relative">
            <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border-gray-light shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/assets/images/hero-main.jpg"
                  alt="Genius Fixer technician performing home maintenance work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
                    Licensed and trusted
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white">Expert technicians on demand</h3>
                </div>
              </div>
            </Card>

            <Card className="absolute -right-5 bottom-6 border-gray-light bg-white px-4 py-3 shadow-lg">
              <p className="font-heading text-2xl font-black text-brand-red">15+</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-mid">Years experience</p>
            </Card>

            <Card className="absolute -left-5 top-8 border-gray-light bg-brand-blue px-4 py-2.5 text-white shadow-blue">
              <p className="text-[11px] font-bold uppercase tracking-wider">24/7 emergency support</p>
            </Card>
          </BlurFade>
        </div>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-9 w-px bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  );
}
