import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, ArrowRight, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book Now", href: "/contact" },
];

const serviceLinks = [
  { label: "HVAC Maintenance", href: "/services/hvac" },
  { label: "Electrical Services", href: "/services/electrical" },
  { label: "Plumbing Services", href: "/services/plumbing" },
  { label: "Painting Services", href: "/services/painting" },
  { label: "Mason & Tiling Work", href: "/services/mason-tiling" },
  { label: "Glass & Aluminum Work", href: "/services/glass-aluminum" },
  { label: "Annual Maintenance Contract", href: "/services/amc" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/971529724924" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)" }}>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div
                  className="absolute inset-0 rounded flex items-center justify-center text-white font-black text-xl"
                  style={{ background: "var(--color-brand-red)" }}
                >
                  G
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-sm"
                  style={{ background: "var(--color-brand-blue)" }}
                />
              </div>
              <div>
                <div className="font-heading font-black text-white text-[14px] tracking-tight">
                  GENIUS FIXER
                </div>
                <div className="text-[9px] font-semibold tracking-widest uppercase text-gray-mid">
                  Technical Services LLC
                </div>
              </div>
            </div>

            <p className="text-[14px] text-gray-mid leading-relaxed mb-6">
              One Stop Solution for all your technical services in Dubai, UAE. We are experts you can trust.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-brand-red"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <Icon size={15} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4
              className="text-white text-[11px] font-bold tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-[14px] text-gray-mid hover:text-white transition-colors group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-brand-red opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4
              className="text-white text-[11px] font-bold tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-[14px] text-gray-mid hover:text-white transition-colors group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-brand-red opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4
              className="text-white text-[11px] font-bold tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-gray-mid leading-relaxed">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-red flex-shrink-0" />
                <a
                  href="tel:+971529724924"
                  className="text-[14px] text-gray-mid hover:text-white transition-colors"
                >
                  +971 52 972 4924
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-red flex-shrink-0" />
                <a
                  href="mailto:team@geniusfixer.ae"
                  className="text-[14px] text-gray-mid hover:text-white transition-colors"
                >
                  team@geniusfixer.ae
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-brand-red flex-shrink-0" />
                <span className="text-[14px] text-gray-mid">
                  Mon–Sat: 8AM – 8PM
                </span>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-lg" style={{ background: "rgba(204,36,32,0.12)", border: "1px solid rgba(204,36,32,0.20)" }}>
              <div className="text-[11px] font-bold text-brand-red uppercase tracking-widest mb-1">24/7 Emergency</div>
              <a href="tel:+971529724924" className="text-white font-bold text-[15px] hover:text-brand-red transition-colors">
                +971 52 972 4924
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ background: "#0D1117", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-dark">
            © 2024 Genius Fixer Technical Services LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-[12px] text-gray-dark hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[12px] text-gray-dark hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
