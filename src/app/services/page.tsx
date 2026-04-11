import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wind, Zap, Hammer, Layers, Droplets, PaintBucket, Building2, SquareDashed, FileText, Phone } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { SpotlightCard } from "@/components/reactbits/spotlight-card";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Technical Services | Genius Fixer Dubai",
  description:
    "Comprehensive technical services in Dubai: HVAC, Electrical, Plumbing, Painting, Gypsum, Mason, Glass & Aluminum, Annual Maintenance. Licensed professionals. Call +971 52 972 4924.",
  alternates: { canonical: "https://geniusfixer.ae/services" },
};

const iconMap: Record<string, React.ElementType> = {
  Wind, Zap, Hammer, Layers, Droplets, PaintBucket, Building2, SquareDashed, FileText,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "var(--color-navy)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="container-main relative z-10">
          <div className="flex items-center gap-2 text-[12px] mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
          <BlurFade inView>
            <h1
              className="font-heading font-extrabold text-white mb-4"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Our Technical Services
            </h1>
            <div className="w-16 h-1 rounded-full mb-5" style={{ background: "var(--color-brand-red)" }} />
            <p
              className="max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)", fontSize: "var(--text-body-lg)" }}
            >
              Comprehensive home maintenance and repair solutions across Dubai and UAE.
              Certified professionals, transparent pricing, guaranteed satisfaction.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-y bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon];
              return (
                <BlurFade key={svc.slug} inView delay={i * 0.06}>
                  <SpotlightCard className="h-full border border-gray-light rounded-xl">
                    <MagicCard
                      gradientColor={svc.color}
                      gradientOpacity={0.05}
                      className="h-full"
                    >
                      <div className="flex flex-col h-full bg-white rounded-xl p-8">
                        <div className="relative mb-6 h-40 w-full overflow-hidden rounded-xl border border-gray-light">
                          <Image
                            src={svc.image}
                            alt={`${svc.title} service image`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent" />
                          <div
                            className="absolute left-3 top-3 rounded-lg p-2 text-white"
                            style={{ background: svc.color }}
                          >
                            <Icon size={16} />
                          </div>
                        </div>

                        {/* Icon + Title row */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: svc.color }}
                          >
                            <Icon size={18} className="text-white" />
                          </div>
                          <h2
                            className="font-heading font-bold text-navy"
                            style={{ fontSize: "var(--text-h4)" }}
                          >
                            {svc.title}
                          </h2>
                        </div>

                        <p className="text-gray-mid text-sm leading-relaxed mb-5 flex-1">
                          {svc.shortDesc}
                        </p>

                        {/* Features */}
                        <ul className="flex flex-col gap-1.5 mb-6">
                          {svc.features.slice(0, 3).map((f) => (
                            <li key={f} className="flex items-center gap-2 text-[13px] text-navy">
                              <div
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: svc.color }}
                              />
                              {f}
                            </li>
                          ))}
                        </ul>

                        {/* Starting price */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-light">
                          <span className="text-[12px] text-gray-mid">Starting from</span>
                          <span className="font-heading font-black text-[15px]" style={{ color: svc.color }}>
                            AED 150
                          </span>
                        </div>

                        {/* CTA */}
                        <Link
                          href={`/services/${svc.slug}`}
                          className="mt-4 flex items-center justify-center gap-2 py-3 text-white text-[13px] font-bold rounded-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                          style={{ background: svc.color }}
                        >
                          Book This Service
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </MagicCard>
                  </SpotlightCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #CC2420 0%, #A81D1A 100%)",
        }}
      >
        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2
                className="font-heading font-extrabold text-white mb-2"
                style={{ fontSize: "var(--text-h2)" }}
              >
                24/7 Emergency Services Available
              </h2>
              <p style={{ color: "rgba(255,255,255,0.80)" }}>
                AC breakdown? Electrical fault? Burst pipe? We respond fast, day or night.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <a
                href="tel:+971529724924"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-sm font-bold text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ color: "var(--color-brand-red)" }}
              >
                <Phone size={18} />
                Call Now: +971 52 972 4924
              </a>
              <ShimmerButton
                as="a"
                href="/contact"
                background="transparent"
                shimmerColor="rgba(255,255,255,0.3)"
                className="border-2 border-white/40 text-[13px] px-7 py-4"
              >
                Get Free Quote
              </ShimmerButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
