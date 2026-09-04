import Link from "next/link";
import { reports } from "@/data/site";
import { Reveal } from "../Reveal";
import { Arrow, SectionHead } from "../ui";

export function Reports() {
  const [lead, ...rest] = reports;

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20 border-b border-[#DCE2EA]">
      <div className="shell-wide">
        <SectionHead
          title="From the field"
          lead="Reports written by the teams who were there, not by a communications department that was not."
          link={{ href: "/media", label: "Browse all field logs" }}
        />

        <div className="mt-9 grid gap-6 lg:grid-cols-12">
          {/* Lead report */}
          <Reveal className="lg:col-span-7" amount={0.08}>
            <Link
              href="/media"
              className="group block overflow-hidden rounded-2xl bg-white border border-[#DCE2EA] shadow-[0_4px_16px_rgba(10,16,32,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#075BD6]/50 hover:shadow-[0_20px_40px_-12px_rgba(6,73,184,0.14)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={lead.image}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-md border border-white/20 bg-[#0A1020]/85 px-3 py-1 font-display text-[0.76rem] font-bold text-[#EF3B19] shadow-xs backdrop-blur-xs">
                  {lead.kind}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-[1.45rem] sm:text-[1.68rem] leading-tight font-black text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                  {lead.title}
                </h3>
                <p className="mt-3 text-[1.02rem] sm:text-[1.08rem] leading-relaxed text-[#4B5563]">{lead.excerpt}</p>
                <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.88rem] text-[#6B7280]">
                  <span className="font-bold text-[#075BD6]">{lead.place}</span>
                  <span className="h-3 w-px bg-[#DCE2EA]" aria-hidden />
                  <span>Deployment Report</span>
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.96rem] font-bold text-[#075BD6] transition-colors group-hover:text-[#0649B8]">
                  Read the complete report
                  <Arrow className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Secondary reports */}
          <div className="lg:col-span-5">
            <ul className="space-y-4">
              {rest.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={70 + i * 70} amount={0.08}>
                  <Link
                    href="/media"
                    className="group flex gap-4 rounded-2xl bg-white p-4.5 border border-[#DCE2EA] shadow-xs transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#075BD6]/50 hover:shadow-[0_12px_24px_-8px_rgba(6,73,184,0.1)]"
                  >
                    <div className="h-22 w-26 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-30">
                      <img
                        src={r.image}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 py-0.5 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-[1.05rem] sm:text-[1.12rem] leading-snug font-black text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                          {r.title}
                        </h3>
                        <p className="mt-1.5 text-[0.84rem] text-[#6B7280]">
                          <span className="font-bold text-[#075BD6]">{r.kind}</span>
                          <span className="px-2 text-slate-300" aria-hidden>•</span>
                          {r.place}
                        </p>
                      </div>
                      <span className="mt-2.5 inline-flex items-center gap-1 font-display text-[0.84rem] font-bold text-[#075BD6] group-hover:text-[#0649B8]">
                        View dispatch
                        <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
