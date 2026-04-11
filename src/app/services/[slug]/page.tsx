import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Wind, Zap, Hammer, Layers, Droplets, PaintBucket, Building2, SquareDashed, FileText } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { services, getServiceBySlug } from "@/lib/services-data";
import CTABanner from "@/components/sections/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Wind, Zap, Hammer, Layers, Droplets, PaintBucket, Building2, SquareDashed, FileText,
};

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: svc.metaTitle,
    description: svc.metaDesc,
    alternates: { canonical: `https://geniusfixer.ae/services/${svc.slug}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const Icon = iconMap[svc.icon];

  const relatedServices = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{svc.title}</span>
          </div>

          <div className="grid lg:grid-cols-[60%_38%] gap-12 items-center">
            <BlurFade inView>
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: svc.color }}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <div>
                  <div
                    className="text-[11px] font-bold tracking-widest uppercase mb-1"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                  >
                    Our Services
                  </div>
                  <h1
                    className="font-heading font-extrabold text-white leading-tight"
                    style={{ fontSize: "var(--text-h1)" }}
                  >
                    {svc.title}
                  </h1>
                </div>
              </div>
              <div className="w-16 h-1 rounded-full mb-6" style={{ background: svc.color }} />
              <p
                className="leading-relaxed"
                style={{ color: "rgba(255,255,255,0.70)", fontSize: "var(--text-body-lg)" }}
              >
                {svc.shortDesc}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <ShimmerButton
                  as="a"
                  href="/contact"
                  background="var(--color-brand-red)"
                  className="text-[13px] px-7 py-3.5 gap-2"
                >
                  Request a Quote
                  <ArrowRight size={14} />
                </ShimmerButton>
                <a
                  href="tel:+971529724924"
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-[13px] rounded-sm transition-all hover:-translate-y-0.5"
                  style={{ border: "2px solid rgba(255,255,255,0.30)", color: "white" }}
                >
                  <Phone size={14} />
                  +971 52 972 4924
                </a>
              </div>
            </BlurFade>

            {/* Visual */}
            <BlurFade inView delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={svc.image}
                  alt={`${svc.title} by Genius Fixer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/65 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-2 shadow-md">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-red">Certified service</p>
                  <p className="text-sm font-semibold text-navy">{svc.title}</p>
                </div>
                <BorderBeam size={300} duration={10} colorFrom={svc.color} colorTo="#CC2420" />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section-y bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-[60%_38%] gap-14 items-start">
            <BlurFade inView>
              <div className="overline mb-4">Service Overview</div>
              <h2
                className="font-heading font-extrabold text-navy mb-6"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Expert {svc.title} in Dubai
              </h2>
              <p
                className="text-gray-mid leading-relaxed mb-8"
                style={{ fontSize: "var(--text-body-lg)" }}
              >
                {svc.description}
              </p>

              {/* Process steps */}
              <div className="space-y-4">
                {["Initial Assessment", "Professional Execution", "Quality Inspection", "Client Approval"].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: svc.color }}
                      >
                        {i + 1}
                      </div>
                      <span className="font-medium text-navy">{step}</span>
                    </div>
                  )
                )}
              </div>
            </BlurFade>

            {/* Features card */}
            <BlurFade inView delay={0.15}>
              <div
                className="relative rounded-xl p-8 border border-gray-light bg-off-white sticky top-24 overflow-hidden"
              >
                <h3
                  className="font-heading font-bold text-navy mb-6"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  What&apos;s Included
                </h3>
                <ul className="flex flex-col gap-3 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: svc.color }} />
                      <span className="text-navy font-medium text-[14px]">{f}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-lg p-4 mb-6"
                  style={{ background: `${svc.color}10`, border: `1px solid ${svc.color}20` }}
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: svc.color }}>
                    Starting Price
                  </div>
                  <div className="font-heading font-black text-2xl" style={{ color: svc.color }}>
                    AED 150
                  </div>
                  <div className="text-gray-mid text-[12px] mt-0.5">Final price after site assessment</div>
                </div>

                <ShimmerButton
                  as="a"
                  href="/contact"
                  background={svc.color}
                  className="w-full justify-center text-[13px] py-3.5 gap-2"
                >
                  Book This Service
                  <ArrowRight size={14} />
                </ShimmerButton>

                <a
                  href="tel:+971529724924"
                  className="flex items-center justify-center gap-2 mt-3 py-3 border-2 font-bold text-[13px] rounded-sm transition-all hover:text-white hover:bg-navy"
                  style={{ borderColor: "var(--color-navy)", color: "var(--color-navy)" }}
                >
                  <Phone size={14} />
                  Call +971 52 972 4924
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-y" style={{ background: "var(--color-off-white)" }}>
        <div className="container-main">
          <BlurFade inView className="flex flex-col items-center text-center mb-12">
            <div className="overline justify-center mb-4">More Services</div>
            <h2
              className="font-heading font-extrabold text-navy"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Related Services
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel, i) => {
              const RelIcon = iconMap[rel.icon];
              return (
                <BlurFade key={rel.slug} inView delay={i * 0.1}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="flex flex-col p-6 bg-white rounded-xl border border-gray-light hover:border-brand-red hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: rel.color }}
                    >
                      <RelIcon size={20} className="text-white" />
                    </div>
                    <h3
                      className="font-heading font-bold text-navy mb-2 group-hover:text-brand-red transition-colors"
                      style={{ fontSize: "var(--text-h4)" }}
                    >
                      {rel.title}
                    </h3>
                    <p className="text-gray-mid text-sm leading-relaxed mb-4 flex-1">{rel.shortDesc}</p>
                    <div className="flex items-center gap-1 text-brand-red text-[13px] font-semibold">
                      Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          <BlurFade inView delay={0.3} className="flex justify-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 font-bold text-[13px] rounded-sm transition-all hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white hover:border-brand-blue"
              style={{ borderColor: "var(--color-brand-blue)", color: "var(--color-brand-blue)" }}
            >
              View All Services
              <ArrowRight size={13} />
            </Link>
          </BlurFade>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
