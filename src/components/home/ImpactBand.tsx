"use client";

import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";

const stats = [
  {
    value: 2005,
    suffix: "",
    label: "Earthquake Founding",
    sublabel: "Founded in 2005",
    useGrouping: false,
    badgeColor: "bg-[#FFECE8] text-[#EF3B19]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7M4 21V4a1 1 0 011-1h14a1 1 0 011 1v17" />
      </svg>
    ),
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Service",
    sublabel: "Continuous frontline care",
    badgeColor: "bg-[#DCE6FB] text-[#0649B8]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    value: 6,
    suffix: "",
    label: "Gaza Relief Programs",
    sublabel: "Water, food & medicine",
    badgeColor: "bg-[#FFECE8] text-[#EF3B19]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    value: 4,
    suffix: "",
    label: "Membership Ranks",
    sublabel: "Students to consultants",
    badgeColor: "bg-[#DCE6FB] text-[#0649B8]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export function ImpactBand() {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#0649B8] via-[#075BD6] to-[#0649B8] py-9 sm:py-11 text-white shadow-xl border-y border-[#075BD6]/50">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(114,201,77,0.3) 0%, transparent 45%)",
        }}
      />

      <div className="relative shell-wide">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Left Title Lockup (UNDA Style "Our Impact") */}
          <div className="flex items-center gap-4 lg:col-span-4 xl:col-span-3.5 border-b border-white/20 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-white text-[#0649B8] shadow-md">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-[1.45rem] sm:text-[1.6rem] font-black tracking-tight text-white leading-none">
                Our Impact
              </h2>
              <p className="mt-1 text-xs sm:text-[0.82rem] leading-snug text-blue-100">
                Real change. Measurable impact. Two decades of verified front-line care.
              </p>
            </div>
          </div>

          {/* Right Metrics (UNDA Circular Stat Badges in Green & Blue) */}
          <dl className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:col-span-8 xl:col-span-8.5">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 60}
                className="h-full"
                as="div"
              >
                <div className="group flex items-center gap-3.5 transition-transform duration-300 hover:translate-x-1">
                  {/* UNDA style circular icon badge */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-110 ${stat.badgeColor}`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value & Label */}
                  <div className="min-w-0">
                    <span className="font-display text-[1.65rem] sm:text-[1.85rem] leading-none font-black tracking-tight text-white">
                      <CountUp to={stat.value} suffix={stat.suffix} useGrouping={stat.useGrouping} />
                    </span>
                    <dt className="mt-1 font-display text-[0.82rem] sm:text-[0.88rem] font-bold text-white leading-tight truncate">
                      {stat.label}
                    </dt>
                    <dd className="text-[0.72rem] text-blue-200/90 hidden sm:block truncate">
                      {stat.sublabel}
                    </dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
