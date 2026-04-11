import { Marquee } from "@/components/magicui/marquee";
import { ShieldCheck, Clock, Award, ThumbsUp, Wrench, Star } from "lucide-react";

const badges = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Clock, text: "24/7 Emergency Service" },
  { icon: Award, text: "ISO Certified Quality" },
  { icon: ThumbsUp, text: "98% Satisfaction Rate" },
  { icon: Wrench, text: "Certified Technicians" },
  { icon: Star, text: "5-Star Rated Service" },
  { icon: ShieldCheck, text: "No Hidden Fees" },
  { icon: Award, text: "15+ Years Experience" },
];

export default function TrustMarquee() {
  return (
    <section className="py-8 border-y border-gray-light bg-off-white overflow-hidden">
      <Marquee pauseOnHover duration={35} className="gap-0">
        {badges.map(({ icon: Icon, text }, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-6 py-2 rounded-full mx-3 flex-shrink-0"
            style={{
              background: "white",
              border: "1px solid var(--color-gray-light)",
            }}
          >
            <Icon size={14} className="text-brand-red" />
            <span className="text-[13px] font-semibold text-navy whitespace-nowrap">{text}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
