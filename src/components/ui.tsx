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
    "bg-magenta-brand text-white hover:bg-magenta-deep shadow-[0_14px_30px_-12px_rgba(224,31,38,0.85)]",
  primary:
    "bg-blue-brand text-white hover:bg-navy-700 shadow-[0_14px_30px_-12px_rgba(0,146,221,0.8)]",
  ghost: "border-2 border-white/45 text-white hover:border-white hover:bg-white/12",
  outline: "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
  quiet: "bg-white text-navy-800 hover:bg-navy-100 shadow-soft",
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
          className={`text-[clamp(1.9rem,4vw,3.15rem)] ${isDark ? "text-navy-800" : "text-white"}`}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={`mt-5 text-[1.06rem] leading-relaxed ${
              isDark ? "text-slate-body" : "text-navy-100"
            }`}
          >
            {lead}
          </p>
        ) : null}
        {link ? (
          <Link
            href={link.href}
            className={`group mt-6 inline-flex items-center gap-2 font-display text-[0.95rem] font-bold ${
              isDark ? "text-blue-brand" : "text-cyan-accent"
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
      <Reveal>
        <div
          className={`h-px w-full ${isDark ? "bg-line" : "bg-white/20"}`}
          aria-hidden
        />
      </Reveal>
      <div className="grid gap-6 pt-9 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-6 lg:col-span-6">
          <h2
            className={`text-[clamp(1.9rem,4vw,3.15rem)] ${
              isDark ? "text-navy-800" : "text-white"
            }`}
          >
            {title}
          </h2>
        </Reveal>
        {(lead || link) && (
          <Reveal delay={90} className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            {lead ? (
              <p
                className={`text-[1.06rem] leading-relaxed ${
                  isDark ? "text-slate-body" : "text-navy-100"
                }`}
              >
                {lead}
              </p>
            ) : null}
            {link ? (
              <Link
                href={link.href}
                className={`group mt-5 inline-flex items-center gap-2 font-display text-[0.95rem] font-bold ${
                  isDark ? "text-blue-brand" : "text-cyan-accent"
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
/* Page header, used on every inner page                               */
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
    <header className="relative isolate overflow-hidden bg-navy-900 pt-36 pb-24 clip-down md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10">
        {image ? (
          <img
            src={image}
            alt=""
            aria-hidden
            className="h-full w-full scale-105 object-cover opacity-30"
          />
        ) : (
          <div
            className="h-full w-full"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(70% 80% at 82% 10%, rgba(0,146,221,0.5), transparent 62%), radial-gradient(55% 70% at 96% 70%, rgba(221,18,123,0.35), transparent 60%)",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-900/55" />
      </div>

      <div className="shell">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.86rem] font-semibold text-navy-300">
            {crumb.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-navy-300/50">/</span>}
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-7 max-w-4xl text-[clamp(2.3rem,5.4vw,4rem)] text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-navy-100">{lead}</p>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Accent helpers                                                      */
/* ------------------------------------------------------------------ */

export const accentBar = {
  blue: "bg-blue-brand",
  magenta: "bg-magenta-brand",
  navy: "bg-navy-700",
  cyan: "bg-cyan-accent",
} as const;

export const accentText = {
  blue: "text-blue-brand",
  magenta: "text-magenta-brand",
  navy: "text-navy-700",
  cyan: "text-cyan-accent",
} as const;

export const accentTint = {
  blue: "bg-blue-soft text-blue-brand",
  magenta: "bg-magenta-soft text-magenta-brand",
  navy: "bg-navy-100 text-navy-700",
  cyan: "bg-[#e2f9fd] text-[#0b8ea3]",
} as const;
