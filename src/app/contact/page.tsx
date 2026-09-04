import type { Metadata } from "next";
import { org } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Arrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Muslim Medical Mission Foundation in Model Town, Lahore, by phone, WhatsApp or email.",
};

const channels = [
  {
    title: "WhatsApp",
    body: "The fastest route to a coordinator, for volunteering, donations and press.",
    action: org.phone,
    href: org.whatsapp,
    external: true,
  },
  {
    title: "Phone",
    body: "Office hours, Monday to Saturday. If nobody answers we are usually on a deployment.",
    action: org.phone,
    href: org.phoneHref,
    external: false,
  },
  {
    title: "Email",
    body: "For partnerships, supplier offers, documentation requests and media enquiries.",
    action: org.email,
    href: `mailto:${org.email}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        title="Talk to a person, not a ticketing system"
        lead="There is no call centre. The number below reaches a volunteer coordinator who is usually a practising clinician."
        image="/media/brand/community-gathering.jpg"
      />

      <section className="py-24 lg:py-28">
        <div className="shell-wide grid gap-14 lg:grid-cols-12">
          {/* Channels */}
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 80} as="li">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-white p-7 ring-1 ring-line transition-all duration-400 hover:-translate-y-1 hover:shadow-lift hover:ring-transparent"
                  >
                    <div className="min-w-0">
                      <h2 className="font-display text-[1.2rem] font-extrabold text-navy-800">
                        {c.title}
                      </h2>
                      <p className="mt-2 max-w-md text-[0.94rem] leading-relaxed text-slate-body">
                        {c.body}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2.5 font-display text-[1rem] font-bold break-all text-blue-brand">
                      {c.action}
                      <Arrow className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={100}>
              <div className="mt-8 rounded-2xl bg-surface p-7">
                <h2 className="font-display text-[1.15rem] font-extrabold text-navy-800">
                  Sending a donation receipt
                </h2>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-body">
                  Send the screenshot on WhatsApp with the programme name. A volunteer will confirm
                  it and, once the deployment closes, tell you what it funded and how many people it
                  reached.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Address card */}
          <Reveal from="right" className="lg:col-span-4 lg:col-start-9">
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft">
              <img
                src="/media/brand/mmm-lahore-2015.jpg"
                alt="Muslim Medical Mission volunteers in Lahore"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-7">
                <h2 className="font-display text-[1.2rem] font-extrabold text-[#003475]">
                  {org.legalName}
                </h2>
                <address className="mt-4 space-y-1 text-[0.95rem] not-italic text-[#334155]">
                  <p>{org.address.line1}</p>
                  <p>{org.address.line2}</p>
                  <p>{org.address.country}</p>
                </address>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-display text-[0.95rem] font-bold text-[#003475]">Follow the work</p>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {org.social.map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-display text-[0.9rem] font-bold text-[#046BD2] transition-colors hover:text-[#003475]"
                        >
                          {s.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
