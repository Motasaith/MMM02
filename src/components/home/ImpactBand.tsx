import { impactStats } from "@/data/site";
import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";

export function ImpactBand() {
  return (
    <section className="relative z-10 pt-16 lg:pt-20">
      <div className="shell-wide">
        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-line shadow-[0_28px_60px_-34px_rgba(10,23,48,0.4)]">
          <dl className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 90}
                className="p-7 lg:p-8"
                as="div"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[clamp(2.2rem,3.6vw,3rem)] leading-none font-extrabold text-navy-800">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span
                    className="mt-4 block h-0.5 w-9 bg-magenta-brand"
                    aria-hidden
                  />
                  <span className="mt-4 block font-display text-[0.98rem] font-bold text-navy-800">
                    {stat.label}
                  </span>
                  <span className="mt-1.5 block text-[0.87rem] leading-snug text-slate-muted">
                    {stat.detail}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
