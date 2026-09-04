import type { Metadata } from "next";
import { org } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Button, PageHeader, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Volunteer as a doctor, nurse, paramedic, pharmacist or student, or partner with Muslim Medical Mission as a hospital, supplier or community organisation.",
};

const roles = [
  {
    title: "Doctors and consultants",
    body: "General medicine, paediatrics, ophthalmology, dermatology and orthopaedics are the specialties a camp needs most. A single day given is a district covered.",
    image: "/media/disaster/disaster-05.jpg",
  },
  {
    title: "Nurses and paramedics",
    body: "Triage, dressings, observations and the entire flow of a camp. Nothing runs without this and it is the hardest role to fill.",
    image: "/media/medical/medical-01.jpg",
  },
  {
    title: "Pharmacists",
    body: "Stock planning, dispensing and counselling patients who have never been told how to take a course of antibiotics properly.",
    image: "/media/medical/medical-45.jpg",
  },
  {
    title: "Students",
    body: "Registration, crowd flow, translation and assisting clinicians. You will be given real responsibility and you will be supervised properly.",
    image: "/media/disaster/disaster-01.jpg",
  },
];

const steps = [
  {
    n: "01",
    title: "Send a message",
    body: "Tell us your profession, your city and roughly how much time you can give. WhatsApp is fastest.",
  },
  {
    n: "02",
    title: "Briefing",
    body: "A coordinator walks you through what a deployment involves, what to bring and what the district you are going to actually needs.",
  },
  {
    n: "03",
    title: "First deployment",
    body: "You go out with an experienced team. Nobody is sent into a district alone on a first visit.",
  },
];

const partners = [
  {
    title: "Hospitals and clinics",
    body: "Accept surgical referrals from Save Vision, or release clinical staff for scheduled deployment days.",
  },
  {
    title: "Pharmaceutical suppliers",
    body: "Donate stock at cost or near it. Medicine is the single largest recurring expense in every camp we run.",
  },
  {
    title: "Mosques and community groups",
    body: "Host a camp, identify the households that need rations, and give the team a place to work from.",
  },
  {
    title: "Companies and foundations",
    body: "Fund a full deployment or a season of one programme, and receive the delivery record for it.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "Get involved", href: "/get-involved" },
        ]}
        title="The medicine is fundable. The hands are not."
        lead="Every deployment is capped by how many trained people can take a day away from their own work. If you are one of them, we have a district waiting."
        image="/media/disaster/disaster-06.jpg"
      />

      {/* Roles */}
      <section className="py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            title="Who we need on a deployment"
            lead="You do not need previous field experience. You do need to be able to work a long day in heat, in a room with no air conditioning and a queue that does not shorten."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} amount={0.08}>
                <article className="group flex h-full overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-transparent">
                  <div className="w-[38%] shrink-0 overflow-hidden">
                    <img
                      src={r.image}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6">
                    <h3 className="font-display text-[1.18rem] font-extrabold text-navy-800">
                      {r.title}
                    </h3>
                    <p className="mt-2.5 text-[0.93rem] leading-relaxed text-slate-body">
                      {r.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-y border-slate-200/80 bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            tone="dark"
            title="How joining works"
            lead="Three steps, no application form, and no waiting list."
          />

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} as="li">
                <div className="h-full rounded-2xl border border-blue-100 bg-white p-8 shadow-soft">
                  <span className="font-display text-[2.6rem] leading-none font-extrabold text-[#046BD2]/25">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-[1.25rem] font-extrabold text-[#003475]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#334155]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={org.whatsapp} variant="primary" external>
                Message us on WhatsApp
              </Button>
              <Button href={`mailto:${org.email}`} variant="outline" external>
                Email the coordinator
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            title="Partner with us"
            lead="The organisations below shorten the distance between a donation and a treated patient more than any amount of marketing does."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partners.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-surface p-7 transition-all duration-400 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                  <span className="block h-1 w-10 bg-magenta-brand" aria-hidden />
                  <h3 className="mt-5 font-display text-[1.15rem] font-extrabold text-navy-800">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-slate-body">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-12">
              <Button href="/contact" variant="outline">
                Start a conversation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
