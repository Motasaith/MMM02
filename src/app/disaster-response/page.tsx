import type { Metadata } from "next";
import { reports } from "@/data/site";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { Button, PageHeader, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Disaster response",
  description:
    "How Muslim Medical Mission mobilises for floods and emergencies across Pakistan, from first assessment to sustained medical camps and ration distribution.",
};

const phases = [
  {
    n: "01",
    hours: "First 24 hours",
    title: "Assessment, not announcement",
    body: "Two people go in before anything is loaded. They confirm which roads hold, where displaced families have actually gathered and what the district health office still has. Nothing is procured until that report comes back.",
  },
  {
    n: "02",
    hours: "Day 2 to day 7",
    title: "Clinic and clean water",
    body: "A medical team deploys with a standing drug list built for what floods produce, gastroenteritis, skin infection, snakebite, respiratory illness and untreated chronic disease. Clean water goes in alongside it, because the outbreak follows the water, not the injury.",
  },
  {
    n: "03",
    hours: "Week 2 onward",
    title: "Food that lasts a month",
    body: "Ration distribution is run through local volunteers who know which households have lost everything. Bulk purchase before the local market price climbs is the difference between feeding one family and three.",
  },
  {
    n: "04",
    hours: "The months after",
    title: "The part nobody photographs",
    body: "Camps continue after the water recedes, when the coverage has moved on and the illness has not. This is the phase most appeals never fund, and the phase that decides whether people recover.",
  },
];

export default function DisasterResponsePage() {
  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "Disaster response", href: "/disaster-response" },
        ]}
        title="We move in the first week, and we are still there in the third month"
        lead="Flood response in Pakistan is not one operation. It is four, run in sequence, and most organisations only fund the first two."
        image="/media/disaster/disaster-09.jpg"
      />

      {/* Numbers */}
      <section className="relative z-10 -mt-14">
        <div className="shell-wide">
          <dl className="grid overflow-hidden rounded-2xl bg-white shadow-[0_28px_60px_-28px_rgba(10,23,48,0.45)] sm:grid-cols-3 sm:divide-x sm:divide-line">
            {[
              { v: 4, s: "", k: "Camps run back to back", d: "Dera Ghazi Khan deployment" },
              { v: 500, s: "+", k: "Patients seen", d: "Free consultation and medicine" },
              { v: 2, s: "", k: "Provinces covered", d: "South Punjab and Balochistan" },
            ].map((x, i) => (
              <Reveal key={x.k} delay={i * 80} as="div" className="p-7">
                <dt className="sr-only">{x.k}</dt>
                <dd>
                  <span className="font-display text-[2.4rem] leading-none font-extrabold text-navy-800">
                    <CountUp to={x.v} suffix={x.s} />
                  </span>
                  <span className="mt-3 block font-display text-[0.97rem] font-bold text-navy-800">
                    {x.k}
                  </span>
                  <span className="mt-1 block text-[0.86rem] text-slate-muted">{x.d}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            title="How a deployment actually runs"
            lead="Written down because improvising each time costs days, and in a flood response days are measured in cases of cholera."
          />

          <ol className="mt-14 grid gap-6 lg:grid-cols-2">
            {phases.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} as="li">
                <div className="relative h-full overflow-hidden rounded-2xl bg-surface p-8">
                  <span
                    className="absolute -top-4 right-5 font-display text-[5.5rem] leading-none font-extrabold text-navy-100/70 select-none"
                    aria-hidden
                  >
                    {p.n}
                  </span>
                  <p className="relative font-display text-[1rem] font-bold text-magenta-brand">
                    {p.hours}
                  </p>
                  <h3 className="relative mt-2.5 font-display text-[1.35rem] font-extrabold text-navy-800">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-[0.98rem] leading-relaxed text-slate-body">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Field record */}
      <section className="border-y border-slate-200/80 bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            tone="dark"
            title="The record from the last flood"
            lead="Places, not percentages. These are the districts our teams worked in and what they did there."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {reports.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80} amount={0.08}>
                <article className="group h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft transition-all duration-400 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={r.image}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-[1.2rem] leading-snug font-extrabold text-[#003475] transition-colors group-hover:text-[#046BD2]">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-[0.93rem] leading-relaxed text-[#334155]">{r.excerpt}</p>
                    <p className="mt-4 text-[0.9rem] font-semibold text-[#046BD2]">{r.place}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/donate" variant="donate">
                Fund the next deployment
              </Button>
              <Button href="/get-involved" variant="outline">
                Join a response team
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
