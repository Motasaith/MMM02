import Link from "next/link";
import { org, programs } from "@/data/site";
import { Arrow } from "./ui";

const columns = [
  {
    heading: "About",
    links: [
      { label: "Who we are", href: "/about" },
      { label: "Mission and vision", href: "/about#mission" },
      { label: "Where we work", href: "/about#reach" },
      { label: "Field reports", href: "/media" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    heading: "Programmes",
    links: programs.slice(0, 5).map((p) => ({
      label: p.title,
      href: `/what-we-do/${p.slug}`,
    })),
  },
  {
    heading: "Take part",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/get-involved" },
      { label: "Partner with us", href: "/get-involved#partners" },
      { label: "Disaster response", href: "/disaster-response" },
      { label: "How funds are spent", href: "/donate#allocation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-[-3.5vw] bg-navy-950 pt-[calc(3.5vw+5rem)] pb-10 text-navy-100 clip-up">
      <div className="shell-wide">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <span className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-[0_10px_30px_-12px_rgba(6,14,30,0.7)]">
              <img src="/media/brand/logo-trim.png" alt={org.name} className="h-14 w-auto" />
            </span>
            <p className="mt-6 max-w-sm text-[0.97rem] leading-relaxed text-navy-300">
              A volunteer network of Muslim doctors, paramedics and students running free healthcare
              and relief operations across Pakistan and into Gaza.
            </p>

            <address className="mt-7 space-y-1 text-[0.93rem] not-italic text-navy-300">
              <p className="font-semibold text-white">{org.legalName}</p>
              <p>{org.address.line1}</p>
              <p>{org.address.line2}</p>
              <p>{org.address.country}</p>
            </address>

            <div className="mt-6 space-y-1.5 text-[0.95rem]">
              <a
                href={org.phoneHref}
                className="block font-display font-bold text-white transition-colors hover:text-cyan-accent"
              >
                {org.phone}
              </a>
              <a
                href={`mailto:${org.email}`}
                className="block text-navy-300 transition-colors hover:text-white"
              >
                {org.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-display text-[1.05rem] font-extrabold text-white">
                  {col.heading}
                </h3>
                <span className="mt-3 block h-0.5 w-8 bg-magenta-brand" aria-hidden />
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.93rem] text-navy-300 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Donate panel */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
              <h3 className="font-display text-xl font-extrabold text-white">
                Give where it lands fastest
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-navy-300">
                Bank transfer reaches the field with the least deducted along the way.
              </p>

              <dl className="mt-5 space-y-2.5 text-[0.86rem]">
                <div>
                  <dt className="text-navy-300">Account title</dt>
                  <dd className="font-semibold text-white">{org.bank.title}</dd>
                </div>
                <div>
                  <dt className="text-navy-300">Bank</dt>
                  <dd className="font-semibold text-white">{org.bank.bank}</dd>
                </div>
                <div>
                  <dt className="text-navy-300">IBAN</dt>
                  <dd className="font-mono text-[0.82rem] font-semibold break-all text-cyan-accent">
                    {org.bank.iban}
                  </dd>
                </div>
              </dl>

              <Link
                href="/donate"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-magenta-brand px-6 py-3 font-display text-[0.92rem] font-bold text-white transition-colors hover:bg-magenta-deep"
              >
                All the ways to give
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.83rem] text-navy-300">
            &copy; {new Date().getFullYear()} {org.legalName}. Registered in Lahore, Pakistan.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {org.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.83rem] font-semibold text-navy-300 transition-colors hover:text-white"
              >
                {s.name}
              </a>
            ))}
            <span className="hidden h-3 w-px bg-white/20 md:block" aria-hidden />
            <p className="text-[0.83rem] text-navy-300">{org.motto}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
