import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Arrow                                                               */
/* ------------------------------------------------------------------ */

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`h-4 w-4 ${className}`} fill="none">
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "donate" | "primary" | "ghost" | "outline" | "quiet";
  className?: string;
  external?: boolean;
};

const variants = {
  donate:
    "bg-red-brand text-white hover:bg-red-deep shadow-[0_10px_24px_-8px_rgba(224,31,38,0.4)]",
  primary:
    "bg-[#046BD2] text-white hover:bg-[#003475] shadow-[0_10px_24px_-8px_rgba(4,107,210,0.4)]",
  ghost: "border-2 border-[#003475] text-[#003475] hover:bg-[#003475] hover:text-white",
  outline: "border-2 border-slate-300 text-[#334155] hover:border-[#046BD2] hover:text-[#046BD2] hover:bg-blue-50/60",
  quiet: "bg-slate-100 text-[#334155] hover:bg-slate-200 shadow-soft",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-display text-[0.95rem] font-bold tracking-tight transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  const inner = (
    <>
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/*                                                                     */
/* Deliberately built without a pill or kicker label above the title.   */
/* The hairline rule and the two column split carry the hierarchy.      */
/* ------------------------------------------------------------------ */

type SectionHeadProps = {
  title: ReactNode;
  lead?: ReactNode;
  link?: { href: string; label: string };
  tone?: "dark" | "light";
  align?: "split" | "stacked";
  className?: string;
};

export function SectionHead({
  title,
  lead,
  link,
  tone = "dark",
  align = "split",
  className = "",
}: SectionHeadProps) {
  const isDark = tone === "dark";

  if (align === "stacked") {
    return (
      <Reveal className={`max-w-3xl ${className}`}>
        <h2
          className={`text-[clamp(1.55rem,2.6vw,2.15rem)] leading-tight font-black ${isDark ? "text-[#0A1020]" : "text-white"}`}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={`mt-4 text-[0.96rem] leading-relaxed sm:text-[1.02rem] ${
              isDark ? "text-[#4B5563]" : "text-slate-100"
            }`}
          >
            {lead}
          </p>
        ) : null}
        {link ? (
          <Link
            href={link.href}
            className={`group mt-5 inline-flex items-center gap-2 font-display text-[0.9rem] font-bold ${
              isDark ? "text-[#075BD6]" : "text-[#EF3B19]"
            }`}
          >
            <span className="link-underline">{link.label}</span>
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ) : null}
      </Reveal>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-4 md:grid-cols-12 md:gap-8 md:items-end">
        <Reveal className="md:col-span-6 lg:col-span-6">
          <h2
            className={`text-[clamp(1.55rem,2.6vw,2.15rem)] leading-tight font-black ${
              isDark ? "text-[#0A1020]" : "text-white"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        {(lead || link) && (
          <Reveal delay={90} className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            {lead ? (
              <p
                className={`text-[0.96rem] leading-relaxed sm:text-[1.02rem] ${
                  isDark ? "text-[#4B5563]" : "text-slate-100"
                }`}
              >
                {lead}
              </p>
            ) : null}
            {link ? (
              <Link
                href={link.href}
                className={`group mt-4 inline-flex items-center gap-2 font-display text-[0.9rem] font-bold ${
                  isDark ? "text-[#075BD6]" : "text-[#EF3B19]"
                }`}
              >
                <span className="link-underline">{link.label}</span>
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : null}
          </Reveal>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page header, used on every inner page (Luminous Light Design)       */
/* ------------------------------------------------------------------ */

export function PageHeader({
  title,
  lead,
  image,
  crumb,
}: {
  title: string;
  lead: string;
  /** Empty when no honest photograph exists for this page. */
  image?: string;
  crumb: { label: string; href: string }[];
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F6FC] via-[#F8FAFC] to-white pt-30 pb-14 md:pt-34 md:pb-18">
      <div className="absolute inset-0 -z-10">
        {image ? (
          <img
            src={image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-15"
          />
        ) : (
          <div
            className="h-full w-full opacity-60"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(60% 70% at 85% 20%, rgba(4,107,210,0.12), transparent 70%), radial-gradient(40% 50% at 10% 80%, rgba(243,230,230,0.8), transparent 60%)",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
      </div>

      <div className="shell">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.84rem] font-semibold text-[#7A7A7A]">
            {crumb.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-300">/</span>}
                <Link href={c.href} className="transition-colors hover:text-[#046BD2]">
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-5 max-w-3xl text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.12] font-extrabold text-[#003475] tracking-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-[#334155] sm:text-[1.04rem]">{lead}</p>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Accent helpers                                                      */
/* ------------------------------------------------------------------ */

export const accentBar = {
  blue: "bg-[#046BD2]",
  magenta: "bg-red-brand",
  navy: "bg-[#003475]",
  cyan: "bg-[#008DC9]",
} as const;

export const accentText = {
  blue: "text-[#046BD2]",
  magenta: "text-red-brand",
  navy: "text-[#003475]",
  cyan: "text-[#008DC9]",
} as const;

export const accentTint = {
  blue: "bg-blue-50 text-[#046BD2]",
  magenta: "bg-red-50 text-red-brand",
  navy: "bg-slate-100 text-[#003475]",
  cyan: "bg-[#e0f4fc] text-[#008DC9]",
} as const;
