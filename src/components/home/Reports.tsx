import Link from "next/link";
import { reports } from "@/data/site";
import { Reveal } from "../Reveal";
import { Arrow, SectionHead } from "../ui";

export function Reports() {
  const [lead, ...rest] = reports;

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="shell-wide">
        <SectionHead
          title="From the field"
          lead="Reports written by the teams who were there, not by a communications department that was not."
          link={{ href: "/media", label: "All field reports" }}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Lead report */}
          <Reveal className="lg:col-span-7" amount={0.08}>
            <Link
              href="/media"
              className="group block overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-line transition-all duration-500 hover:shadow-lift hover:ring-transparent"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={lead.image}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-[1.6rem] leading-tight font-extrabold text-navy-800 transition-colors group-hover:text-blue-brand">
                  {lead.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-body">{lead.excerpt}</p>
                <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9rem] text-slate-muted">
                  <span className="font-semibold text-magenta-brand">{lead.kind}</span>
                  <span className="h-3 w-px bg-line" aria-hidden />
                  <span>{lead.place}</span>
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.88rem] font-bold text-blue-brand">
                  Read the report
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Secondary reports */}
          <div className="lg:col-span-5">
            <ul className="space-y-5">
              {rest.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={70 + i * 70} amount={0.1}>
                  <Link
                    href="/media"
                    className="group flex gap-5 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-line transition-all duration-400 hover:-translate-y-1 hover:shadow-lift hover:ring-transparent"
                  >
                    <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-36">
                      <img
                        src={r.image}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 py-0.5">
                      <h3 className="font-display text-[1.02rem] leading-snug font-bold text-navy-800 transition-colors group-hover:text-blue-brand">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-[0.85rem] text-slate-muted">
                        <span className="font-semibold text-magenta-brand">{r.kind}</span>
                        <span className="px-2 text-line" aria-hidden>
                          /
                        </span>
                        {r.place}
                      </p>
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
