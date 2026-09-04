import Link from "next/link";
import type { Program } from "@/data/site";
import { Arrow } from "./ui";

const categoryMap: Record<string, string> = {
  "flood-medical-camps": "Emergency Relief",
  "flood-relief": "Disaster Response",
  "gaza-field-clinics": "Trauma & Lifeline",
  "water-for-life": "Clean Water",
  "food-parcels-gaza": "Nutrition & Food",
  "winter-packages": "Winter Survival",
  "diagnostic-camps": "Diagnostic Care",
  "health-education": "Preventive Health",
  "save-vision": "Eye Surgery",
  "prison-healthcare": "Vulnerable Care",
  "training": "Paramedic Training",
  "professional-development": "Medical Education",
};

export function ProgramCard({
  program,
  size = "standard",
}: {
  program: Program;
  size?: "standard" | "feature";
}) {
  const feature = size === "feature";
  const category = categoryMap[program.slug] || "Healthcare Relief";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-[#DCE2EA] shadow-[0_4px_16px_rgba(10,16,32,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#075BD6]/50 hover:shadow-[0_20px_40px_-12px_rgba(6,73,184,0.16)]">
      {/* Image Container with UNDA Dark Overlay & Green Badge */}
      <div
        className={`relative overflow-hidden ${
          feature ? "min-h-[260px] sm:min-h-[320px]" : "aspect-[16/10] shrink-0"
        }`}
      >
        <img
          src={program.image || "/media/medical/medical-02.jpg"}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A1020]/80 via-transparent to-[#0A1020]/30"
          aria-hidden
        />

        {/* Dark Badge with Brand Red Text */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-[#0A1020]/90 px-2.5 py-1 font-display text-[0.72rem] font-black uppercase tracking-wider text-[#EF3B19] shadow-sm backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EF3B19]" />
            {category}
          </span>
        </div>

        {/* Region Tag */}
        <span className="absolute bottom-3.5 right-4 rounded-md bg-white/90 px-2.5 py-0.5 font-display text-[0.76rem] font-bold text-[#0A1020] shadow-xs backdrop-blur-xs">
          {program.region}
        </span>
      </div>

      {/* Content Area */}
      <div className={`flex flex-col flex-1 ${feature ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
        <h3
          className={`font-display font-black text-[#0A1020] transition-colors duration-200 group-hover:text-[#075BD6] ${
            feature ? "text-[1.48rem] sm:text-[1.72rem] leading-tight" : "text-[1.22rem] sm:text-[1.32rem] leading-snug"
          }`}
        >
          {program.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-[#4B5563] ${
            feature ? "text-[1.02rem] sm:text-[1.08rem]" : "text-[0.92rem] sm:text-[0.96rem]"
          }`}
        >
          {program.summary}
        </p>

        {feature && (
          <dl className="mt-6 grid gap-x-5 gap-y-3.5 border-t border-[#DCE2EA] pt-5 sm:grid-cols-3">
            {program.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-[0.8rem] leading-snug text-[#6B7280]">{h.label}</dt>
                <dd className="mt-1 font-display text-[1.12rem] font-black text-[#0A1020]">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* Bottom Action Row with Donation Pill & Learn More Button */}
        <div className="mt-auto pt-6 border-t border-[#DCE2EA]/80 flex items-center justify-between gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DCE2EA] bg-[#F5F7FA] px-3.5 py-2 font-display text-xs sm:text-[0.82rem] font-bold text-[#0A1020] transition-colors hover:border-[#EF3B19] hover:bg-[#EF3B19]/10 hover:text-[#EF3B19]"
          >
            <svg className="h-3.5 w-3.5 text-[#EF3B19]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>Support</span>
          </Link>

          <Link
            href={`/what-we-do/${program.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#075BD6] px-4.5 py-2 font-display text-xs sm:text-[0.85rem] font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#0649B8] hover:shadow-sm group/btn"
          >
            <span>Learn More</span>
            <Arrow className="h-3 w-3 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
