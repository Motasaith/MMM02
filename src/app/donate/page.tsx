import type { Metadata } from "next";
import { allocation, org } from "@/data/site";
import { DonationPlanner } from "@/components/DonationPlanner";
import { Reveal } from "@/components/Reveal";
import { PageHeader, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Fund free medical camps, ration packs, clean water and winter relief. Bank transfer, JazzCash and EasyPaisa details for Muslim Medical Mission Foundation.",
};

const methods = [
  {
    title: "Bank transfer",
    body: "The lowest processing cost, so the largest share reaches the district. Details are on this page and can be copied in one tap.",
    detail: org.bank.bank,
  },
  {
    title: "JazzCash and EasyPaisa",
    body: "Send from a mobile wallet in seconds. Useful for smaller regular gifts and for Zakat paid in instalments.",
    detail: org.mobileWallets,
  },
  {
    title: "Cash or cheque",
    body: "Message the team on WhatsApp and a volunteer will arrange collection or confirm where to deliver it.",
    detail: org.phone,
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "Donate", href: "/donate" },
        ]}
        title="Give to a specific thing, and we will tell you what it did"
        lead="Every programme has a real unit cost. Choose one, choose an amount, and see exactly what it buys before you send anything."
        image="/media/ration/ration-01.jpg"
      />

      {/* Planner */}
      <section className="py-20 lg:py-24">
        <div className="shell-wide">
          <DonationPlanner />
        </div>
      </section>

      {/* Zakat */}
      <section className="pb-20 lg:pb-24">
        <div className="shell-wide">
          <Reveal>
            <div className="grid gap-8 rounded-2xl bg-surface p-8 lg:grid-cols-12 lg:items-center lg:p-10">
              <div className="lg:col-span-7">
                <h2 className="font-display text-[1.6rem] font-extrabold text-navy-800">
                  Zakat eligible programmes
                </h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-body">
                  Food parcels, winter packages, clean water and free medical treatment for the poor
                  are all applied to households that meet the criteria for Zakat. Tell us when you
                  send it and your gift is kept in a separate pool and distributed accordingly.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
                {["Food parcels", "Winter packages", "Water for Life", "Medical treatment"].map(
                  (x) => (
                    <li
                      key={x}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-display text-[0.93rem] font-bold text-navy-800"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-magenta-brand" aria-hidden />
                      {x}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Allocation */}
      <section id="allocation" className="bg-navy-900 py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            tone="light"
            title="Where the money goes"
            lead="The organisation runs on volunteer clinical time and has no paid fundraising arm, which is the only reason these proportions are possible."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ul className="space-y-7">
                {allocation.map((a, i) => (
                  <Reveal key={a.label} delay={i * 90} as="li">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-[1.02rem] font-bold text-white">
                        {a.label}
                      </span>
                      <span className="font-display text-[1.5rem] font-extrabold text-cyan-accent">
                        {a.value}%
                      </span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/12">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-brand to-cyan-accent transition-[width] duration-1000 ease-out"
                        style={{ width: `${a.value}%` }}
                      />
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-white/12 bg-white/[0.045] p-7">
                <h3 className="font-display text-[1.15rem] font-extrabold text-white">
                  Ask us for the count
                </h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-navy-100">
                  Send your transfer receipt on WhatsApp and a volunteer will tell you which
                  deployment your gift went into and how many people it reached.
                </p>
                <a
                  href={org.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-display text-[0.9rem] font-bold text-navy-900 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Message the team
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            title="Ways to give"
            lead="All of them reach the same account and the same field teams."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {methods.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-line transition-all duration-400 hover:-translate-y-1 hover:shadow-lift hover:ring-transparent">
                  <h3 className="font-display text-[1.2rem] font-extrabold text-navy-800">
                    {m.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-body">
                    {m.body}
                  </p>
                  <p className="mt-5 border-t border-line pt-4 font-display text-[0.9rem] font-bold text-blue-brand">
                    {m.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <dl className="mt-10 grid gap-x-8 gap-y-6 rounded-2xl bg-surface p-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Account title", v: org.bank.title },
                { k: "Bank", v: org.bank.bank },
                { k: "Account number", v: org.bank.account },
                { k: "IBAN", v: org.bank.iban },
                { k: "Branch", v: org.bank.branch },
                { k: "Mobile wallets", v: org.mobileWallets },
                { k: "Phone", v: org.phone },
                { k: "Email", v: org.email },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-[0.88rem] text-slate-muted">{row.k}</dt>
                  <dd className="mt-1 text-[0.92rem] font-semibold break-all text-navy-800">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
