"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { contactFormServices, emirates } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Dubai, United Arab Emirates",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+971 52 972 4924",
    href: "tel:+971529724924",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "team@geniusfixer.ae",
    href: "mailto:team@geniusfixer.ae",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 8AM – 8PM",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    emirate: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
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
            <span className="text-white">Contact Us</span>
          </div>
          <BlurFade inView>
            <h1
              className="font-heading font-extrabold text-white mb-4"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Get In Touch
            </h1>
            <div className="w-16 h-1 rounded-full mb-5" style={{ background: "var(--color-brand-red)" }} />
            <p
              className="max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)", fontSize: "var(--text-body-lg)" }}
            >
              Request a free quote, book a service, or simply ask us a question.
              Our team responds within minutes.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-y bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-[38%_60%] gap-14 items-start">
            {/* Contact Info */}
            <BlurFade inView>
              <div className="relative mb-7 aspect-[16/9] overflow-hidden rounded-xl border border-gray-light shadow-sm">
                <Image
                  src="/assets/images/contact-support.jpg"
                  alt="Customer support team at Genius Fixer office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 460px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/65 via-navy/20 to-transparent" />
              </div>

              <div className="overline mb-4">Contact Details</div>
              <h2
                className="font-heading font-extrabold text-navy mb-6"
                style={{ fontSize: "var(--text-h2)" }}
              >
                We&apos;re Here
                <br />
                to Help You
              </h2>
              <p className="text-gray-mid leading-relaxed mb-8">
                Call us now for best Technical Services in Dubai. Our certified team is ready
                to assist you 24/7 for emergency requests.
              </p>

              {/* Contact cards */}
              <div className="flex flex-col gap-4 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-light bg-off-white"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--color-brand-red)" }}
                    >
                      <Icon size={17} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-gray-mid mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="font-semibold text-navy hover:text-brand-red transition-colors text-[15px]"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="font-semibold text-navy text-[15px]">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency box */}
              <div
                className="relative rounded-xl p-6 overflow-hidden"
                style={{ background: "var(--color-brand-red)" }}
              >
                <div className="relative z-10">
                  <div className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-2">
                    24/7 Emergency Line
                  </div>
                  <a
                    href="tel:+971529724924"
                    className="text-white font-heading font-black text-2xl hover:text-yellow-300 transition-colors block mb-2"
                  >
                    +971 52 972 4924
                  </a>
                  <p className="text-white/70 text-sm">
                    AC breakdown? Electrical fault? Call us now — we respond fast.
                  </p>
                </div>
                <BorderBeam size={200} duration={8} colorFrom="rgba(255,255,255,0.5)" colorTo="transparent" />
              </div>
            </BlurFade>

            {/* Contact Form */}
            <BlurFade inView delay={0.15}>
              <div className="relative rounded-2xl p-8 md:p-10 border border-gray-light bg-white shadow-sm overflow-hidden">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                      style={{ background: "var(--color-brand-red-light)" }}
                    >
                      <CheckCircle2 size={36} className="text-brand-red" />
                    </div>
                    <h3
                      className="font-heading font-bold text-navy mb-3"
                      style={{ fontSize: "var(--text-h3)" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-gray-mid max-w-sm">
                      Thank you for reaching out. Our team will contact you within minutes.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", emirate: "", service: "", message: "" }); }}
                      className="mt-8 rounded-sm bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3
                      className="font-heading font-bold text-navy mb-2"
                      style={{ fontSize: "var(--text-h3)" }}
                    >
                      Request a Free Quote
                    </h3>
                    <p className="text-gray-mid text-sm mb-8">
                      Fill in your details and we&apos;ll get back to you within 30 minutes.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label className="mb-1.5 block text-[12px] font-bold uppercase tracking-wide text-navy">
                            Full Name *
                          </Label>
                          <Input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="h-11 rounded-sm border-gray-light text-navy placeholder:text-gray-mid focus-visible:ring-brand-red/25"
                          />
                        </div>
                        <div>
                          <Label className="mb-1.5 block text-[12px] font-bold uppercase tracking-wide text-navy">
                            Phone Number *
                          </Label>
                          <Input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+971 XX XXX XXXX"
                            className="h-11 rounded-sm border-gray-light text-navy placeholder:text-gray-mid focus-visible:ring-brand-red/25"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label className="mb-1.5 block text-[12px] font-bold uppercase tracking-wide text-navy">
                            Select Emirate *
                          </Label>
                          <select
                            name="emirate"
                            value={form.emirate}
                            onChange={handleChange}
                            required
                            className="h-11 w-full rounded-sm border border-gray-light bg-white px-3 text-sm font-medium text-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                          >
                            <option value="">Select your Emirate</option>
                            {emirates.map((e) => (
                              <option key={e} value={e}>{e}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <Label className="mb-1.5 block text-[12px] font-bold uppercase tracking-wide text-navy">
                            Select Service *
                          </Label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className="h-11 w-full rounded-sm border border-gray-light bg-white px-3 text-sm font-medium text-navy transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                          >
                            <option value="">Select a service</option>
                            {contactFormServices.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label className="mb-1.5 block text-[12px] font-bold uppercase tracking-wide text-navy">
                          Message (Optional)
                        </Label>
                        <Textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe your issue or service requirement..."
                          className="min-h-28 rounded-sm border-gray-light text-navy placeholder:text-gray-mid focus-visible:ring-brand-red/25"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="mt-2 h-12 w-full justify-center gap-2 bg-brand-red text-[14px] font-bold text-white hover:bg-brand-red-hover"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Request
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
                <BorderBeam size={400} duration={15} delay={2} />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-gray-light relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
          <div className="text-center">
            <MapPin size={40} className="text-brand-red mx-auto mb-3" />
            <p className="font-heading font-bold text-navy text-lg">Dubai, United Arab Emirates</p>
            <a
              href="https://maps.google.com/?q=Dubai,UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-blue hover:text-brand-red transition-colors mt-1 block"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
