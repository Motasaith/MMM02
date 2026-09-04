import Link from "next/link";
import { Reveal } from "../Reveal";
import { Arrow } from "../ui";

const paths = [
  {
    title: "Come on a deployment",
    body: "Doctors, dentists, nurses, paramedics and pharmacists. Students are welcome and are given real clinical responsibility.",
    href: "/get-involved",
    cta: "Volunteer with us",
    badge: "Clinical & Field",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Fund a district",
    body: "Cover the cost of a full medical camp, a clean water tanker or winter survival packs, and receive verified dispatch reporting.",
    href: "/donate",
    cta: "Sponsor a program",
    badge: "Direct Sponsorship",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Partner with us",
    body: "Hospitals, pharmaceutical distributors, mosques and international NGOs who can accelerate relief delivery together.",
    href: "/get-involved#partners",
    cta: "Explore partnerships",
    badge: "Institutional",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function JoinCta() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#F3F7FF] via-[#F5F7FA] to-white py-14 sm:py-16 lg:py-20 border-b border-[#DCE2EA]">
      <div className="shell-wide">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(1.75rem,2.8vw,2.4rem)] leading-tight font-black text-[#0A1020]">
            Every camp we run is limited by two things, and neither of them is willingness.
          </h2>
          <p className="mt-3 text-[1rem] sm:text-[1.05rem] leading-relaxed text-[#4B5563]">
            It is hands and it is medicine. If you can contribute either, there is a remote district waiting.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} amount={0.08} className="h-full">
              <Link
                href={p.href}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#DCE2EA] bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(10,16,32,0.04)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#075BD6]/50 hover:shadow-[0_20px_40px_-12px_rgba(6,73,184,0.14)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-[#DCE6FB] bg-[#F3F7FF] px-2.5 py-1 text-[0.74rem] font-bold text-[#075BD6]">
                      {p.badge}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#075BD6] transition-all duration-300 group-hover:bg-[#075BD6] group-hover:text-white">
                      {p.icon}
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-[1.2rem] font-extrabold text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-[#4B5563]">
                    {p.body}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#DCE2EA] flex items-center justify-between">
                  <span className="font-display text-[0.88rem] font-bold text-[#075BD6] transition-colors group-hover:text-[#0649B8]">
                    {p.cta}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F7FA] text-[#075BD6] transition-all duration-300 group-hover:bg-[#075BD6] group-hover:text-white group-hover:translate-x-1">
                    <Arrow className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
