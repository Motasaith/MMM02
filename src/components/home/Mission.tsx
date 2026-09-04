import Link from "next/link";
import { values } from "@/data/site";
import { Reveal } from "../Reveal";
import { Arrow } from "../ui";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20 border-b border-[#DCE2EA]">
      <div className="shell-wide grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Photograph column */}
        <Reveal from="left" className="lg:col-span-5">
          <div className="group relative">
            <div className="overflow-hidden rounded-2xl border border-[#DCE2EA] shadow-[0_12px_36px_-12px_rgba(10,16,32,0.1)]">
              <img
                src="/media/field/free-medical-camp-doctors.jpg"
                alt="Muslim Medical Mission doctors conducting outpatient consultations and providing free medicine at a rural camp"
                className="aspect-[4/3] w-full object-cover max-h-[420px] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>

            {/* Overlapping card with brand red accent bar & crisp white surface */}
            <div className="absolute -right-3 -bottom-6 w-[min(300px,88%)] rounded-2xl border-l-4 border-l-[#EF3B19] border-y border-r border-[#DCE2EA] bg-white/95 p-5 shadow-[0_20px_40px_-15px_rgba(10,16,32,0.15)] backdrop-blur-sm sm:-right-6 sm:p-5.5 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#EF3B19] uppercase tracking-wider">
                <svg className="h-4 w-4 shrink-0 text-[#EF3B19]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <span>Foundational Creed</span>
              </div>
              <p className="mt-2.5 font-quote text-[1.05rem] sm:text-[1.12rem] leading-snug text-[#0A1020] italic">
                To become dynamic Muslim healthcare professionals who pioneer social change through
                knowledge, wisdom and practice.
              </p>
              <p className="mt-3 text-[0.82rem] font-bold text-[#6B7280]">
                Drafted 2005 • Over 20 years of service
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy column */}
        <div className="lg:col-span-7 lg:pl-4">
          <Reveal>
            <h2 className="font-display text-[clamp(2.1rem,3.4vw,2.85rem)] leading-[1.1] font-black text-[#0A1020]">
              A hospital cannot come to the village. A doctor can.
            </h2>
          </Reveal>

          <Reveal delay={80} className="rich mt-6 max-w-2xl text-[1.04rem] sm:text-[1.12rem] leading-relaxed text-[#4B5563]">
            <p>
              Muslim Medical Mission began with a dedicated group of Pakistani doctors who kept meeting the
              same problem. The medicine existed, the expertise existed, and none of it was reaching
              the families who needed it most.
            </p>
            <p className="mt-3">
              Since our founding response following the October 2005 Kashmir earthquake, the answer has not changed.
              We load a volunteer medical team into a vehicle, drive to the district that has been waiting longest,
              and treat everyone who comes, free, until the medicine runs out.
            </p>
          </Reveal>

          {/* Values with interactive row hover */}
          <ul className="mt-9 divide-y divide-[#DCE2EA] border-t border-[#DCE2EA]">
            {values.map((v, i) => (
              <Reveal as="li" key={v.key} delay={i * 60} className="group rounded-xl p-3.5 transition-colors duration-200 hover:bg-[#F3F7FF]">
                <div className="grid gap-2 sm:grid-cols-12 sm:gap-6 items-center">
                  <h3 className="font-display text-[1.08rem] sm:text-[1.15rem] font-black text-[#0A1020] sm:col-span-4 transition-colors group-hover:text-[#075BD6]">
                    <span className="inline-flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 rounded-full bg-[#EF3B19] transition-transform duration-300 group-hover:scale-125"
                        aria-hidden
                      />
                      {v.key}
                    </span>
                  </h3>
                  <p className="text-[0.98rem] sm:text-[1.02rem] leading-relaxed text-[#4B5563] sm:col-span-8">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 font-display text-[0.94rem] font-bold text-[#075BD6] transition-colors hover:text-[#0649B8]"
            >
              <span className="link-underline">Learn more about our organizational structure</span>
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
