"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "What We Do",
    href: "/services",
    children: [
      { label: "HVAC Maintenance & Installation", href: "/services/hvac" },
      { label: "Electrical Services", href: "/services/electrical" },
      { label: "Handymen Services", href: "/services/handymen" },
      { label: "Gypsum Partition & Ceiling", href: "/services/gypsum" },
      { label: "Plumbing Services", href: "/services/plumbing" },
      { label: "Painting Services", href: "/services/painting" },
      { label: "Mason & Tiling Work", href: "/services/mason-tiling" },
      { label: "Glass & Aluminum Work", href: "/services/glass-aluminum" },
      { label: "Annual Maintenance Contract", href: "/services/amc" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-light"
            : "bg-white border-b border-gray-light"
        )}
        style={{ height: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
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
            <div className="leading-none">
              <div
                className="font-heading font-black text-[15px] tracking-tight"
                style={{ color: "var(--color-navy)" }}
              >
                GENIUS FIXER
              </div>
              <div
                className="text-[9px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "var(--color-gray-mid)" }}
              >
                Technical Services
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className={cn(
                      "flex items-center gap-1.5 text-[14px] font-semibold transition-colors duration-200",
                      "hover:text-brand-red",
                      pathname.startsWith("/services")
                        ? "text-brand-red"
                        : "text-navy"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-xl shadow-xl border border-gray-light py-2 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium transition-colors duration-150",
                              pathname === child.href
                                ? "text-brand-red bg-brand-red-light"
                                : "text-navy hover:text-brand-red hover:bg-brand-red-light"
                            )}
                          >
                            <div className="w-1 h-1 rounded-full bg-brand-red opacity-60 flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                        <div className="px-5 pt-2 pb-1 mt-1 border-t border-gray-light">
                          <Link
                            href="/services"
                            className="text-[12px] font-semibold text-brand-blue hover:text-brand-red transition-colors flex items-center gap-1"
                          >
                            View All Services <ArrowRight size={11} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-semibold transition-colors duration-200",
                    "hover:text-brand-red",
                    pathname === link.href ? "text-brand-red" : "text-navy"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971529724924"
              className="flex items-center gap-2 text-[13px] font-semibold text-navy hover:text-brand-red transition-colors"
            >
              <Phone size={14} className="text-brand-red" />
              +971 52 972 4924
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-[13px] font-bold rounded-sm transition-all duration-300 hover:bg-brand-red-hover hover:-translate-y-0.5 hover:shadow-red"
            >
              Get Free Quote
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-navy hover:text-brand-red transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col overflow-y-auto"
            style={{ background: "var(--color-dark)", paddingTop: "80px" }}
          >
            <div className="flex-1 flex flex-col px-8 py-8">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 text-2xl font-heading font-bold text-white hover:text-brand-red transition-colors border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-[15px] text-gray-mid hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a
                  href="tel:+971529724924"
                  className="flex items-center justify-center gap-3 py-4 bg-brand-red text-white font-bold rounded text-lg"
                >
                  <Phone size={20} />
                  +971 52 972 4924
                </a>
                <Link
                  href="/contact"
                  className="py-4 border-2 border-brand-blue text-brand-blue font-bold rounded text-center text-lg hover:bg-brand-blue hover:text-white transition-all"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
