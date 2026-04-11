"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wind, Zap, Hammer, Layers, Droplets, PaintBucket, Building2, SquareDashed, FileText } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { services } from "@/lib/services-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Wind,
  Zap,
  Hammer,
  Layers,
  Droplets,
  PaintBucket,
  Building2,
  SquareDashed,
  FileText,
};

export default function ServicesSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-main">
        <BlurFade inView delay={0} className="mb-16 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-brand-red-light text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
            Our services
          </Badge>
          <h2 className="mb-4 font-heading text-navy" style={{ fontSize: "var(--text-h2)", fontWeight: 800 }}>
            What We Fix and Install
          </h2>
          <p className="max-w-2xl text-gray-mid" style={{ fontSize: "var(--text-body-lg)", lineHeight: "1.7" }}>
            Comprehensive technical services delivered by certified professionals across Dubai and UAE.
          </p>
        </BlurFade>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <BlurFade key={service.slug} inView delay={i * 0.06}>
                <Card className="group flex h-full flex-col overflow-hidden border-gray-light shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-red hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} by Genius Fixer`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-lg p-2.5 text-white" style={{ background: service.color }}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="font-heading text-navy" style={{ fontSize: "var(--text-h4)" }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 pb-4">
                    <p className="mb-4 text-sm leading-relaxed text-gray-mid">{service.shortDesc}</p>
                    <ul className="flex flex-col gap-1.5">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[13px] text-navy">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: service.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button asChild className="w-full bg-brand-red text-white hover:bg-brand-red-hover">
                      <Link href={`/services/${service.slug}`}>
                        Learn more
                        <ArrowRight />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade inView delay={0.25} className="flex justify-center">
          <Button asChild variant="outline" className="border-brand-blue px-8 text-brand-blue hover:bg-brand-blue hover:text-white">
            <Link href="/services">
              View all services
              <ArrowRight />
            </Link>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
}
