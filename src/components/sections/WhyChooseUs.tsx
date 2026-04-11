"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const reasons = [
  "Licensed and insured professionals",
  "Same-day service availability",
  "Transparent pricing with no hidden fees",
  "100% satisfaction guarantee",
  "24/7 emergency support",
  "Coverage across all UAE emirates",
];

export default function WhyChooseUs() {
  return (
    <section className="section-y bg-off-white">
      <div className="container-main">
        <div className="grid items-center gap-14 lg:grid-cols-[42%_58%] xl:gap-20">
          <div>
            <BlurFade inView>
              <Badge className="mb-4 bg-brand-red-light text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
                Why genius fixer
              </Badge>
              <h2 className="mb-5 font-heading text-navy" style={{ fontSize: "var(--text-h2)", fontWeight: 800 }}>
                Why Homeowners Trust
                <br />
                Genius Fixer
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <p className="mb-4 text-gray-mid" style={{ fontSize: "var(--text-body-lg)", lineHeight: "1.75" }}>
                Genius Fixer Technical Services LLC combines technical management excellence with strict
                safety standards and responsive customer support.
              </p>
              <p className="mb-8 text-gray-mid" style={{ fontSize: "var(--text-body)", lineHeight: "1.75" }}>
                Our experts are trained, qualified, and committed to delivering reliable service for homes
                and businesses with consistent quality.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.18}>
              <ul className="mb-9 flex flex-col gap-3">
                {reasons.map((reason, i) => (
                  <motion.li
                    key={reason}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.22 + i * 0.06, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-brand-red" />
                    <span className="text-[15px] font-medium text-navy">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <Button
                asChild
                className="bg-brand-red px-7 py-6 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-brand-red-hover"
              >
                <Link href="/contact">
                  Get a free estimate
                  <ArrowRight />
                </Link>
              </Button>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.15}>
            <div className="relative">
              <Card className="relative overflow-hidden rounded-2xl border-gray-light shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/assets/images/why-choose-us.jpg"
                    alt="Genius Fixer team discussing service details with a homeowner"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 95vw, 720px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/70 via-navy/25 to-transparent" />
                </div>
              </Card>

              <Card className="absolute -right-5 -top-5 border-gray-light bg-white px-4 py-3 shadow-lg">
                <p className="font-heading text-2xl font-black text-brand-red">98%</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-mid">Satisfaction rate</p>
              </Card>

              <Card className="absolute -bottom-5 right-10 border-gray-light bg-white px-4 py-3 shadow-lg">
                <p className="font-heading text-2xl font-black text-brand-blue">24/7</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-mid">Emergency support</p>
              </Card>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
