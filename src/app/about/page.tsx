import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Target, Eye, Heart } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Genius Fixer Technical Services",
  description:
    "Learn about Genius Fixer Technical Services LLC — Dubai's trusted technical services provider for 15+ years. Our story, mission, vision and expert team.",
  alternates: { canonical: "https://geniusfixer.ae/about" },
};

const timeline = [
  { year: "2010", title: "Company Founded", desc: "Genius Fixer Technical Services LLC established in Dubai, UAE." },
  { year: "2013", title: "HVAC Division Launched", desc: "Expanded to cover all major AC brands and refrigeration systems." },
  { year: "2016", title: "Commercial Services", desc: "Began serving commercial buildings, offices and business parks." },
  { year: "2019", title: "AMC Program Introduced", desc: "Launched Annual Maintenance Contracts for residential and commercial clients." },
  { year: "2022", title: "UAE-Wide Coverage", desc: "Extended services to all seven emirates across the UAE." },
  { year: "2025", title: "Digital Transformation", desc: "Online booking, real-time tracking and digital service reports." },
];

const values = [
  {
    icon: Target,
    color: "var(--color-brand-red)",
    title: "Our Mission",
    desc: "Genius Fixer believes in the significance of client satisfaction, quality-based management and a culture of progressive development in the field of Technical Services.",
  },
  {
    icon: Eye,
    color: "var(--color-brand-blue)",
    title: "Our Vision",
    desc: "Genius Fixer is committed to enabling all work activities to be carried out safely, removing or reducing risks to the health, safety and welfare of workers and clients.",
  },
  {
    icon: Heart,
    color: "var(--color-navy)",
    title: "Our Values",
    desc: "Honesty, reliability, quality and client focus are the cornerstones of everything we do. We treat every home and workplace with the respect it deserves.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "var(--color-navy)" }}
      >
        {/* Grid overlay */}
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
            <span className="text-white">About Us</span>
          </div>
          <BlurFade inView>
            <h1
              className="font-heading font-extrabold text-white mb-4"
              style={{ fontSize: "var(--text-h1)" }}
            >
              About Genius Fixer
            </h1>
            <div
              className="w-16 h-1 rounded-full mb-5"
              style={{ background: "var(--color-brand-red)" }}
            />
            <p
              className="max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)", fontSize: "var(--text-body-lg)" }}
            >
              15+ years of trusted technical services excellence in Dubai and across the UAE.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-y bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-[55%_43%] gap-14 items-center">
            <div>
              <BlurFade inView>
                <div className="overline mb-4">Our Story</div>
                <h2
                  className="font-heading font-extrabold text-navy mb-5"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  We Will Satisfy You
                  <br />
                  By Our Work &amp; Ideas
                </h2>
                <div className="space-y-4 text-gray-mid leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
                  <p>
                    Genius Fixer Technical Services LLC is a premier technical services provider in the UAE. Our root services are engraved in Technical Management, where we sustain best efficiency in our customers&apos; Technical facilities with complete safety regulations and comfort.
                  </p>
                  <p>
                    We improve to our clients&apos; needs through our streamlined process. Our trained experts are qualified and understand our company&apos;s commitment to the clients&apos; vision and goal.
                  </p>
                  <p>
                    No matter what level of Technical Services you require, we pride ourselves on giving our clients both the efficiency savings of outsourcing, tied with the same level of control you would have if you provided these services in-house.
                  </p>
                </div>

                {/* Quote block */}
                <div
                  className="mt-8 pl-5 py-4 border-l-4 rounded-r-xl"
                  style={{
                    borderColor: "var(--color-brand-red)",
                    background: "var(--color-brand-red-light)",
                  }}
                >
                  <p className="text-navy font-semibold italic" style={{ fontSize: "var(--text-body-lg)" }}>
                    &ldquo;Our trained experts are qualified and understand our company&apos;s commitment to the clients&apos; vision and goal.&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <ShimmerButton
                    as="a"
                    href="/contact"
                    background="var(--color-brand-red)"
                    className="text-[13px] px-7 py-3.5 gap-2"
                  >
                    Contact Us Now
                    <ArrowRight size={14} />
                  </ShimmerButton>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3.5 border-2 font-bold text-[13px] rounded-sm transition-all hover:-translate-y-0.5"
                    style={{ borderColor: "var(--color-brand-blue)", color: "var(--color-brand-blue)" }}
                  >
                    Our Services
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Visual */}
            <BlurFade inView delay={0.15}>
              <div className="relative">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src="/assets/images/about-team.jpg"
                    alt="Genius Fixer technical services team in planning meeting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/35 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h3 className="font-heading text-2xl font-bold">15+ Years of Technical Excellence</h3>
                    <p className="mt-1 text-white/80">Trusted by homeowners and businesses across UAE</p>
                    <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                      {[
                        { n: "1,200+", l: "Projects" },
                        { n: "150+", l: "Technicians" },
                        { n: "7", l: "Emirates" },
                        { n: "98%", l: "Satisfaction" },
                      ].map(({ n, l }) => (
                        <div key={l} className="bg-white/10 rounded-lg p-3">
                          <div className="font-heading font-black text-xl text-white">{n}</div>
                          <div className="text-[11px] text-white/60 uppercase tracking-wide">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <BorderBeam size={300} duration={12} />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl -z-10 opacity-15"
                  style={{ background: "var(--color-brand-red)" }}
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-y" style={{ background: "var(--color-off-white)" }}>
        <div className="container-main">
          <BlurFade inView className="flex flex-col items-center text-center mb-14">
            <div className="overline justify-center mb-4">Our Foundation</div>
            <h2
              className="font-heading font-extrabold text-navy"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Mission, Vision &amp; Values
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, color, title, desc }, i) => (
              <BlurFade key={title} inView delay={i * 0.1}>
                <div
                  className="flex flex-col p-8 rounded-xl bg-white shadow-sm border border-gray-light h-full"
                  style={{ borderTop: `4px solid ${color}` }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: color }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3
                    className="font-heading font-bold text-navy mb-3"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-gray-mid leading-relaxed">{desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y bg-white">
        <div className="container-main">
          <BlurFade inView className="flex flex-col items-center text-center mb-14">
            <div className="overline justify-center mb-4">Our Journey</div>
            <h2
              className="font-heading font-extrabold text-navy"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Company Timeline
            </h2>
          </BlurFade>

          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "var(--color-brand-red)", opacity: 0.25, transform: "translateX(-50%)" }}
            />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <BlurFade key={item.year} inView delay={i * 0.08}>
                  <div
                    className={`flex items-start gap-6 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div
                        className="inline-block px-3 py-1 rounded text-[11px] font-bold tracking-widest uppercase mb-2"
                        style={{ background: "var(--color-brand-red-light)", color: "var(--color-brand-red)" }}
                      >
                        {item.year}
                      </div>
                      <h3
                        className="font-heading font-bold text-navy mb-1"
                        style={{ fontSize: "var(--text-h4)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-mid text-sm">{item.desc}</p>
                    </div>

                    {/* Circle node */}
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[11px] font-bold z-10"
                      style={{ background: "var(--color-brand-red)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Checklist */}
      <section className="section-y" style={{ background: "var(--color-off-white)" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <BlurFade inView>
              <div className="overline mb-4">Our Commitment</div>
              <h2
                className="font-heading font-extrabold text-navy mb-5"
                style={{ fontSize: "var(--text-h2)" }}
              >
                What Sets Us Apart
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Licensed & Insured by UAE Authorities",
                  "Same-Day Service for Urgent Requests",
                  "Transparent Pricing — No Hidden Fees",
                  "100% Satisfaction Guarantee on All Work",
                  "24/7 Emergency Technical Support",
                  "Serving All 7 Emirates Across UAE",
                  "Eco-Friendly Service Practices",
                  "Post-Service Follow-Up Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={17} className="text-brand-red flex-shrink-0" />
                    <span className="text-navy font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            <BlurFade inView delay={0.15}>
              <div
                className="relative rounded-2xl p-8 overflow-hidden"
                style={{ background: "var(--color-navy)" }}
              >
                <div className="text-5xl mb-4">💡</div>
                <blockquote className="text-white font-heading font-bold text-2xl leading-snug mb-4">
                  &ldquo;Excellence is not a skill.
                  <br />
                  It&apos;s an attitude.&rdquo;
                </blockquote>
                <p style={{ color: "rgba(255,255,255,0.55)" }} className="text-sm">
                  — The Genius Fixer Team
                </p>
                <BorderBeam size={250} duration={10} />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
