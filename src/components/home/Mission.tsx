import Link from "next/link";
import { values } from "@/data/site";
import { Reveal } from "../Reveal";
import { Arrow } from "../ui";

export function Mission() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell-wide grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Photograph column */}
        <Reveal from="left" className="lg:col-span-5">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/media/disaster/disaster-01.jpg"
                alt="A Muslim Medical Mission doctor distributing relief supplies to women waiting in a courtyard"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlapping card, deliberately off grid */}
            <div className="absolute -right-4 -bottom-8 w-[min(300px,82%)] rounded-2xl bg-navy-900 p-6 shadow-[0_28px_56px_-22px_rgba(10,23,48,0.7)] sm:-right-8">
              <p className="font-quote text-[1.12rem] leading-snug text-white italic">
                To become dynamic Muslim healthcare professionals who pioneer social change through
                knowledge, wisdom and practice.
              </p>
              <p className="mt-4 text-[0.92rem] text-cyan-accent">
                Our mission, written in 2006 and unchanged since
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy column */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,4vw,3.15rem)] text-navy-800">
              A hospital cannot come to the village. A doctor can.
            </h2>
          </Reveal>

          <Reveal delay={80} className="rich mt-7 max-w-xl">
            <p>
              Muslim Medical Mission began with a small group of Lahore doctors who kept meeting the
              same problem. The medicine existed, the expertise existed, and none of it was reaching
              the people who needed it most.
            </p>
            <p>
              Nearly two decades later the answer has not changed. We load a team into a vehicle,
              drive to the district that has been waiting longest, and treat everyone who comes,
              free, until the medicine runs out. Then we work out how to come back sooner.
            </p>
          </Reveal>

          {/* Values, laid out as an editorial list rather than four identical cards */}
          <ul className="mt-10 divide-y divide-line border-t border-line">
            {values.map((v, i) => (
              <Reveal as="li" key={v.key} delay={i * 70} className="group py-5">
                <div className="grid gap-2 sm:grid-cols-12 sm:gap-6">
                  <h3 className="font-display text-[1.05rem] font-extrabold text-navy-800 sm:col-span-4">
                    <span className="inline-flex items-center gap-2.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-magenta-brand transition-transform duration-300 group-hover:scale-150"
                        aria-hidden
                      />
                      {v.key}
                    </span>
                  </h3>
                  <p className="text-[0.97rem] leading-relaxed text-slate-body sm:col-span-8">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2 font-display font-bold text-blue-brand"
            >
              <span className="link-underline">More about who we are</span>
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
