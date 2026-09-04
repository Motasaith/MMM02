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
    <footer className="relative border-t border-slate-300 bg-[#E8EFF6] pt-12 pb-8 text-[#334155]">
      <div className="shell-wide">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-2.5 sm:gap-3">
              <img src="/media/brand/circle-logo.png" alt={org.name} className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 object-contain" />
              <div className="flex flex-col">
                <span className="font-display text-[1.08rem] sm:text-[1.15rem] font-black text-[#003475] group-hover:text-[#046BD2] transition-colors leading-none">
                  Muslim Medical Mission
                </span>
                <span className="mt-1 font-display text-[0.65rem] sm:text-[0.7rem] font-bold text-[#E01F26] leading-none">
                  Wisdom, Action, Service for Allah for Right
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-[0.91rem] leading-relaxed text-[#334155]">
              A volunteer network of Muslim doctors, paramedics and students running free healthcare
              and relief operations across Pakistan and into Gaza.
            </p>

            <address className="mt-5 space-y-0.5 text-[0.88rem] not-italic text-[#7A7A7A]">
              <p className="font-bold text-[#003475]">{org.legalName}</p>
              <p>{org.address.line1}</p>
              <p>{org.address.line2}</p>
              <p>{org.address.country}</p>
            </address>

            <div className="mt-4 space-y-1 text-[0.91rem]">
              <a
                href={org.phoneHref}
                className="block font-display font-bold text-[#003475] transition-colors hover:text-[#046BD2]"
              >
                {org.phone}
              </a>
              <a
                href={`mailto:${org.email}`}
                className="block text-[#7A7A7A] transition-colors hover:text-[#046BD2]"
              >
                {org.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-display text-[0.96rem] font-extrabold text-[#003475]">
                  {col.heading}
                </h3>
                <span className="mt-2 block h-0.5 w-6 bg-[#046BD2]" aria-hidden />
                <ul className="mt-3.5 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.88rem] font-medium text-[#334155] transition-colors hover:text-[#046BD2]"
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
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-soft">
              <h3 className="font-display text-[1.05rem] font-extrabold text-[#003475]">
                Direct Bank Transfer
              </h3>
              <p className="mt-1.5 text-[0.84rem] leading-relaxed text-[#7A7A7A]">
                Bank transfer reaches the field with the least deducted along the way.
              </p>

              <dl className="mt-4 space-y-2 text-[0.86rem]">
                <div>
                  <dt className="text-[#7A7A7A]">Account title</dt>
                  <dd className="font-semibold text-[#003475]">{org.bank.title}</dd>
                </div>
                <div>
                  <dt className="text-[#7A7A7A]">Bank</dt>
                  <dd className="font-semibold text-[#003475]">{org.bank.bank}</dd>
                </div>
                <div>
                  <dt className="text-[#7A7A7A]">IBAN</dt>
                  <dd className="font-mono text-[0.82rem] font-semibold break-all text-[#046BD2]">
                    {org.bank.iban}
                  </dd>
                </div>
              </dl>

              <Link
                href="/donate"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#046BD2] px-6 py-3 font-display text-[0.9rem] font-bold text-white shadow-sm transition-all hover:bg-[#003475] hover:shadow-md"
              >
                All the ways to give
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200/80 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.83rem] text-[#7A7A7A]">
            &copy; {new Date().getFullYear()} {org.legalName}. Registered in Lahore, Pakistan.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {org.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.83rem] font-semibold text-[#334155] transition-colors hover:text-[#046BD2]"
              >
                {s.name}
              </a>
            ))}
            <span className="hidden h-3 w-px bg-slate-200 md:block" aria-hidden />
            <p className="text-[0.83rem] text-[#7A7A7A]">{org.motto}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
