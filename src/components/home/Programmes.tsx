import Link from "next/link";
import { programs } from "@/data/site";
import { ProgramCard } from "../ProgramCard";
import { Reveal } from "../Reveal";
import { Arrow } from "../ui";

export function Programmes() {
  const [lead, ...rest] = programs;
  const shown = rest.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-14 sm:py-16 lg:py-20 border-b border-[#DCE2EA]">
      <div className="relative shell-wide">
        {/* UNDA Style Section Header with Title & Top-Right View All Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DCE2EA] pb-6">
          <div>
            <h2 className="text-[clamp(1.75rem,2.8vw,2.4rem)] leading-tight font-black tracking-tight text-[#0A1020]">
              Our Current Projects
            </h2>
            <p className="mt-2 max-w-2xl text-[0.95rem] text-[#4B5563]">
              From mobile mountain clinics in Balochistan to daily clean water runs and field surgery in Gaza, every project is free at the point of delivery.
            </p>
          </div>

          <Link
            href="/what-we-do"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#075BD6] transition-colors hover:text-[#0649B8] shrink-0"
          >
            <span>View All Projects</span>
            <Arrow className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-12">
          <Reveal
            amount={0.08}
            className="sm:col-span-12 lg:col-span-6 lg:row-span-2"
          >
            <ProgramCard program={lead} size="feature" />
          </Reveal>

          {shown.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={60 + i * 70}
              amount={0.08}
              className="sm:col-span-6 lg:col-span-3"
            >
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
