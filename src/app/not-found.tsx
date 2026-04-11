import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "var(--color-off-white)" }}
    >
      <div
        className="text-[120px] font-heading font-black leading-none mb-4"
        style={{ color: "var(--color-brand-red)", opacity: 0.15 }}
      >
        404
      </div>
      <div className="-mt-16">
        <h1
          className="font-heading font-extrabold text-navy mb-4"
          style={{ fontSize: "var(--text-h1)" }}
        >
          Page Not Found
        </h1>
        <p className="text-gray-mid mb-8 max-w-md" style={{ fontSize: "var(--text-body-lg)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red text-white font-bold text-[13px] rounded-sm hover:bg-brand-red-hover transition-all hover:-translate-y-0.5"
          >
            <Home size={15} />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-navy text-navy font-bold text-[13px] rounded-sm hover:bg-navy hover:text-white transition-all"
          >
            Our Services
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
