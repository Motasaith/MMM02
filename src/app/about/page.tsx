import type { Metadata } from "next";
import { org, regions, values } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { PageHeader, SectionHead, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "Muslim Medical Mission Foundation is a volunteer network of Muslim healthcare professionals delivering free medical care and relief across Pakistan and into Gaza.",
};

const timeline = [
  {
    year: "2006",
    title: "A meeting in Lahore",
    body: "A handful of doctors agree to run one free camp a month in districts with no functioning clinic. The rota holds.",
  },
  {
    year: "2010",
    title: "The first flood deployment",
    body: "Monsoon flooding pushes the group from monthly camps into sustained emergency response along the Indus.",
  },
  {
    year: "2015",
    title: "Training the responders",
    body: "Paramedic and first responder courses begin, so the first person to reach a casualty is trained rather than improvising.",
  },
  {
    year: "2022",
    title: "South Punjab and Balochistan",
    body: "Teams run camps and ration distributions across Taunsa Sharif, Dera Ghazi Khan, Mangrotha and into Balochistan.",
  },
  {
    year: "Now",
    title: "Pakistan and Gaza",
    body: "Water trucking, food parcels and winter packages run alongside the standing programme of free camps at home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "About us", href: "/about" },
        ]}
        title="A volunteer network of Muslim healthcare professionals"
        lead="No paid fundraising arm, no field office in a capital city. Doctors, paramedics, pharmacists and students who take leave from their own jobs to go where the clinic is not."
        image="/media/field/hero-humanitarian-relief.jpg"
      />

      {/* Story */}
      <section className="bg-white py-12 sm:py-14 lg:py-16 border-b border-slate-200/80">
        <div className="shell-wide grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(2.05rem,3.4vw,2.85rem)] leading-[1.1] font-black text-[#0A1020]">
                The problem was never the medicine
              </h2>
            </Reveal>
            <div className="rich mt-6 text-[1.04rem] sm:text-[1.12rem] leading-relaxed text-[#4B5563]">
              <Reveal as="p" delay={60}>
                Pakistan trains excellent doctors. It has pharmaceutical manufacturing, teaching
                hospitals and a diaspora of specialists. What it does not have is a way of getting
                any of that to a village four hours from a metalled road.
              </Reveal>
              <Reveal as="p" delay={100} className="mt-4">
                Muslim Medical Mission was formed to close that gap by the least sophisticated means
                available. We take the doctor to the village. We carry the medicine with us. We
                charge nothing, we treat whoever arrives, and we record what we did so the next
                deployment is better planned than the last.
              </Reveal>
              <Reveal as="p" delay={140} className="mt-4">
                The organisation has stayed deliberately light. Almost everyone involved is a
                practising clinician giving time they do not really have, which is why{" "}
                <strong className="text-[#0A1020]">the overwhelming share of every donation goes into the field</strong> rather
                than into running the organisation that sends it.
              </Reveal>
            </div>
          </div>

          <Reveal from="right" className="lg:col-span-4 lg:col-start-9">
            <img
              src="/media/field/hero-national-conference.jpg"
              alt="Muslim Medical Mission National Conference"
              className="w-full rounded-2xl object-cover shadow-md"
              loading="lazy"
            />
            <div className="mt-5 rounded-2xl border border-slate-200/80 bg-surface p-6">
              <p className="font-quote text-[1.18rem] leading-snug text-[#0A1020] italic">
                {org.motto}
              </p>
              <p className="mt-2.5 text-[0.88rem] text-[#6B7280]">
                The words the organisation was founded on, and the test applied to every deployment
                since.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission and vision */}
      <section id="mission" className="border-b border-slate-200/80 bg-[#F0F5FA] py-12 sm:py-14 lg:py-16">
        <div className="shell-wide">
          <SectionHead
            tone="dark"
            title="Mission and vision"
            lead="Both were written at the start and neither has been rewritten for a funding application since."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {[
              {
                k: "Mission",
                v: "To become dynamic Muslim healthcare professionals who will pioneer social change by acquiring knowledge and wisdom, and by practising Dawah.",
              },
              {
                k: "Vision",
                v: "That the conduct of a healthcare professional, at home and abroad, is answerable to a higher authority than an employer or a regulator, and should be practised accordingly.",
              },
            ].map((x, i) => (
              <Reveal key={x.k} delay={i * 90}>
                <div className="h-full rounded-2xl border border-blue-100 bg-white p-7 shadow-soft">
                  <h3 className="font-display text-[1.25rem] font-black text-[#075BD6]">{x.k}</h3>
                  <p className="mt-4 font-quote text-[1.18rem] sm:text-[1.28rem] leading-snug text-[#0A1020] italic">
                    {x.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Means */}
      <section id="means" className="bg-white py-12 sm:py-14 lg:py-16 border-b border-slate-200/80">
        <div className="shell-wide">
          <SectionHead
            title="Our means"
            lead="Four words carried in the logo. They are also the sequence a deployment actually follows."
          />

          <ol className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.key} delay={i * 80} as="li">
                <div className="h-full rounded-2xl bg-[#F0F5FA] border border-slate-200/80 p-6">
                  <span className="font-display text-[2.4rem] leading-none font-extrabold text-[#075BD6]/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.18rem] font-black text-[#0A1020]">
                    {v.key}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-relaxed text-[#4B5563]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F0F5FA] py-12 sm:py-14 lg:py-16 border-b border-slate-200/80">
        <div className="shell-wide">
          <SectionHead
            title="How the work grew"
            lead="From one camp a month to sustained emergency response in two countries, without ever adding a layer of management."
          />

          <ol className="mt-8 border-l-2 border-slate-300 pl-6 sm:pl-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 70} as="li" className="relative pb-8 last:pb-0">
                <span
                  className="absolute top-1.5 -left-[33px] h-3.5 w-3.5 rounded-full border-4 border-white bg-[#075BD6] sm:-left-[49px]"
                  aria-hidden
                />
                <p className="font-display text-[1.45rem] leading-none font-black text-[#075BD6]">
                  {t.year}
                </p>
                <h3 className="mt-2 font-display text-[1.24rem] font-black text-[#0A1020]">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[0.96rem] leading-relaxed text-slate-body">
                  {t.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Where we work */}
      <section id="reach" className="bg-white py-12 sm:py-14 lg:py-16 border-b border-slate-200/80">
        <div className="shell-wide">
          <SectionHead
            title="Where we work"
            lead="Districts are chosen on assessed need and on whether we can realistically return, because a single visit that is never repeated helps nobody."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {regions.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <div className="group flex h-full gap-6 rounded-2xl bg-white p-7 ring-1 ring-line transition-all duration-400 hover:-translate-y-1 hover:shadow-lift hover:ring-transparent">
                  <span
                    className="mt-1.5 h-full w-1 shrink-0 rounded bg-gradient-to-b from-blue-brand to-magenta-brand"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-[1.25rem] font-extrabold text-navy-800">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-[0.96rem] leading-relaxed text-slate-body">{r.detail}</p>
                    <p className="mt-4 font-display text-[0.92rem] font-bold text-blue-brand">
                      {r.focus}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/get-involved" variant="primary">
                Volunteer with us
              </Button>
              <Button href="/contact" variant="outline">
                Contact the team
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
