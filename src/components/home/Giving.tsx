import Link from "next/link";
import { givingTiers, org } from "@/data/site";
import { Reveal } from "../Reveal";
import { Arrow, SectionHead } from "../ui";

const tierColors = [
  { border: "bg-[#075BD6]", text: "text-[#075BD6]" },
  { border: "bg-[#EF3B19]", text: "text-[#EF3B19]" },
  { border: "bg-[#EF3B19]", text: "text-[#EF3B19]" },
  { border: "bg-[#0649B8]", text: "text-[#0649B8]" },
];

export function Giving() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-white to-[#F5F7FA] py-14 sm:py-16 lg:py-20 border-b border-[#DCE2EA]">
      <div className="shell-wide">
        <SectionHead
          title="What a donation actually buys"
          lead="No abstractions and no percentages you cannot check. These are the real unit costs our field teams work to, in the currency we buy in."
        />

        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {givingTiers.map((tier, i) => {
            const isFeatured = i === 2; // Family fed for a month
            const styling = tierColors[i % tierColors.length];

            return (
              <Reveal key={tier.amount} delay={i * 70} amount={0.08}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 sm:p-7 border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(6,73,184,0.15)] ${
                    isFeatured
                      ? "border-[#EF3B19]/40 ring-2 ring-[#EF3B19]/15 shadow-[0_6px_20px_rgba(239,59,25,0.08)] hover:border-[#EF3B19]"
                      : "border-[#DCE2EA] shadow-[0_4px_16px_rgba(10,16,32,0.04)] hover:border-[#075BD6]/50"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5 ${styling.border}`}
                    aria-hidden
                  />

                  {isFeatured && (
                    <span className="mb-3 self-start inline-flex items-center gap-1 rounded-full bg-[#EF3B19]/10 border border-[#EF3B19]/30 px-2.5 py-0.5 text-[0.72rem] font-black uppercase tracking-wider text-[#EF3B19]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EF3B19] animate-pulse" />
                      Critical Need
                    </span>
                  )}

                  <p className="flex items-baseline gap-1.5">
                    <span className="font-display text-[0.84rem] font-bold text-[#6B7280]">
                      PKR
                    </span>
                    <span
                      className={`font-display text-[2.2rem] sm:text-[2.45rem] leading-none font-black transition-transform duration-300 origin-left group-hover:scale-105 ${styling.text}`}
                    >
                      {tier.amount}
                    </span>
                  </p>

                  <h3 className="mt-4 font-display text-[1.2rem] sm:text-[1.3rem] font-black text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                    {tier.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.94rem] sm:text-[0.98rem] leading-relaxed text-[#4B5563]">
                    {tier.body}
                  </p>

                  <Link
                    href="/donate"
                    className="mt-6 flex items-center justify-between rounded-xl bg-[#F5F7FA] border border-[#DCE2EA] px-4 py-3 font-display text-[0.9rem] font-bold text-[#0A1020] transition-all duration-200 group-hover:bg-[#075BD6] group-hover:border-[#075BD6] group-hover:text-white"
                  >
                    <span>Donate PKR {tier.amount}</span>
                    <Arrow className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div className="mt-9 grid gap-7 rounded-2xl border border-[#DCE6FB] bg-gradient-to-br from-[#F3F7FF] via-[#F8FAFC] to-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(6,73,184,0.06)] lg:grid-cols-12 lg:items-center lg:p-8">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 font-display text-[0.82rem] font-extrabold uppercase tracking-wider text-[#075BD6]">
                <svg className="h-3.5 w-3.5 text-[#075BD6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                Zero Intermediary Deductions
              </span>
              <h3 className="mt-2 font-display text-[1.4rem] sm:text-[1.55rem] font-black text-[#0A1020]">
                Direct bank transfer to field accounts
              </h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-[#4B5563]">
                A direct transfer carries zero merchant processing cuts, ensuring every rupee delivers medicine, food, and water. Send the receipt via WhatsApp and our dispatch coordinator will link it directly to the active clinic it funds.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={org.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#075BD6] px-6 py-2.5 font-display text-[0.88rem] font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#0649B8] hover:shadow-md"
                >
                  <span>WhatsApp a transfer slip</span>
                  <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DCE2EA] bg-white px-5 py-2.5 font-display text-[0.88rem] font-bold text-[#0A1020] transition-colors hover:border-[#075BD6] hover:bg-[#F3F7FF]"
                >
                  All donation methods
                </Link>
              </div>
            </div>

            <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {[
                { k: "Account Title", v: org.bank.title },
                { k: "Bank", v: org.bank.bank },
                { k: "Account Number", v: org.bank.account, mono: true },
                { k: "IBAN", v: org.bank.iban, mono: true },
              ].map((row) => (
                <div key={row.k} className="rounded-xl border border-[#DCE2EA] bg-white/95 p-3.5 shadow-xs transition-colors hover:border-[#075BD6]/40">
                  <dt className="text-[0.76rem] font-bold text-[#6B7280] uppercase tracking-wider">{row.k}</dt>
                  <dd
                    className={`mt-1 text-[0.92rem] font-bold break-all text-[#0A1020] ${
                      row.mono ? "font-mono text-[0.88rem] text-[#075BD6]" : ""
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
