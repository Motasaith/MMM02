import Link from "next/link";
import { givingTiers, org } from "@/data/site";
import { Reveal } from "../Reveal";
import { Arrow, SectionHead, accentBar, accentText } from "../ui";

export function Giving() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell-wide">
        <SectionHead
          title="What a donation actually buys"
          lead="No abstractions and no percentages you cannot check. These are the real unit costs our field teams work to, in the currency we buy in."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {givingTiers.map((tier, i) => (
            <Reveal key={tier.amount} delay={i * 80} amount={0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-transparent">
                <span
                  className={`absolute inset-x-0 top-0 h-1 ${accentBar[tier.accent]}`}
                  aria-hidden
                />

                <p className="flex items-baseline gap-1.5">
                  <span className="font-display text-[0.85rem] font-bold text-slate-muted">
                    PKR
                  </span>
                  <span
                    className={`font-display text-[2.1rem] leading-none font-extrabold ${accentText[tier.accent]}`}
                  >
                    {tier.amount}
                  </span>
                </p>

                <h3 className="mt-5 font-display text-[1.15rem] font-extrabold text-navy-800">
                  {tier.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-slate-body">
                  {tier.body}
                </p>

                <Link
                  href="/donate"
                  className="mt-6 inline-flex items-center gap-2 font-display text-[0.88rem] font-bold text-navy-800 transition-colors group-hover:text-magenta-brand"
                >
                  Give this
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Transfer details, kept on the page rather than behind a form */}
        <Reveal delay={80}>
          <div className="mt-8 grid gap-8 rounded-2xl bg-navy-900 p-8 lg:grid-cols-12 lg:items-center lg:p-10">
            <div className="lg:col-span-5">
              <h3 className="font-display text-[1.5rem] font-extrabold text-white">
                Transfer straight to the field account
              </h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-navy-100">
                A bank transfer carries the lowest processing cost, so more of it reaches the
                district. Send the receipt on WhatsApp and we will tell you which deployment it
                funded.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={org.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display text-[0.9rem] font-bold text-navy-900 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send a receipt
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/35 px-6 py-3 font-display text-[0.9rem] font-bold text-white transition-colors hover:border-white"
                >
                  Other ways to give
                </Link>
              </div>
            </div>

            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {[
                { k: "Account title", v: org.bank.title },
                { k: "Bank", v: org.bank.bank },
                { k: "Account number", v: org.bank.account, mono: true },
                { k: "IBAN", v: org.bank.iban, mono: true },
              ].map((row) => (
                <div key={row.k} className="border-l-2 border-cyan-accent/50 pl-4">
                  <dt className="text-[0.86rem] text-navy-300">{row.k}</dt>
                  <dd
                    className={`mt-1 text-[0.95rem] font-semibold break-all text-white ${
                      row.mono ? "font-mono text-[0.88rem]" : ""
                    }`}
                  >
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
