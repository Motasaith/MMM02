"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { nav, org, type NavItem } from "@/data/site";
import { search } from "@/data/search";
import { Arrow } from "./ui";

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

function PhoneIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function HeartIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ChevronDown({ className = "h-3 w-3", open = false }: { className?: string; open?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${className} transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ChevronRight({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SearchIcon({ className = "h-[19px] w-[19px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" strokeWidth="2.2" />
      <path d="M16.5 16.5L21 21" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Mega panel                                                          */
/* ------------------------------------------------------------------ */

function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const cols = item.columns ?? [];
  const linkSpan = item.feature ? "lg:col-span-7" : "lg:col-span-10";
  const linkCols = cols.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <div className="animate-drift-up border-t border-white/10 bg-navy-950/98 shadow-2xl backdrop-blur-xl">
      <div className="shell-wide grid gap-x-10 gap-y-10 py-10 lg:grid-cols-12">
        {/* Section framing */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-[1.3rem] leading-tight font-extrabold text-white">
            {item.label}
          </h2>
          <span className="mt-3 block h-1 w-10 bg-red-brand" aria-hidden />
          {item.blurb ? (
            <p className="mt-4 text-[0.87rem] leading-relaxed text-navy-300">{item.blurb}</p>
          ) : null}
          <Link
            href={item.href}
            onClick={onNavigate}
            className="group mt-5 inline-flex items-center gap-2 font-display text-[0.88rem] font-bold text-cyan-accent"
          >
            <span className="link-underline">Overview</span>
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className={`grid gap-x-8 gap-y-8 sm:grid-cols-2 ${linkSpan} ${linkCols}`}>
          {cols.map((col) => (
            <div key={col.heading}>
              <h3 className="border-b border-white/12 pb-3 font-display text-[0.95rem] font-extrabold text-white">
                {col.heading}
              </h3>
              <ul className="mt-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      onClick={onNavigate}
                      className="group flex items-center gap-2 py-2 text-[0.94rem] font-semibold text-navy-100 transition-colors hover:text-cyan-accent"
                    >
                      <span
                        className="h-px w-0 bg-cyan-accent transition-all duration-300 group-hover:w-4"
                        aria-hidden
                      />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {item.feature ? (
          <Link
            href={item.feature.href}
            onClick={onNavigate}
            className="group relative isolate flex min-h-[220px] flex-col justify-end overflow-hidden rounded-md border border-white/10 p-6 lg:col-span-3"
          >
            <img
              src={item.feature.image}
              alt=""
              aria-hidden
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
            />
            <span
              className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/20"
              aria-hidden
            />
            <h3 className="font-display text-[1.08rem] font-extrabold text-white">
              {item.feature.title}
            </h3>
            <p className="mt-2 text-[0.85rem] leading-snug text-navy-200">{item.feature.body}</p>
            <span className="mt-3 inline-flex items-center gap-2 font-display text-[0.82rem] font-bold text-cyan-accent">
              {item.feature.cta}
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Search overlay                                                      */
/* ------------------------------------------------------------------ */

function SearchPanel({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => search(query), [query]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="animate-drift-up border-t border-white/10 bg-navy-950/98 shadow-2xl backdrop-blur-xl">
      <div className="shell-wide py-8">
        <label className="flex items-center gap-4 border-b-2 border-white/20 pb-4 focus-within:border-cyan-accent">
          <SearchIcon className="h-6 w-6 shrink-0 text-cyan-accent" />
          <span className="sr-only">Search this site</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programmes, reports, disaster relief..."
            className="w-full bg-transparent font-display text-[1.2rem] font-bold text-white outline-none placeholder:font-normal placeholder:text-navy-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 font-display text-[0.85rem] font-bold text-navy-300 transition-colors hover:text-white"
          >
            Close
          </button>
        </label>

        {query.trim().length >= 2 && (
          <ul className="mt-6 grid gap-1 sm:grid-cols-2">
            {results.length ? (
              results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="group flex items-baseline justify-between gap-4 rounded px-4 py-3 transition-colors hover:bg-white/8"
                  >
                    <span className="font-display text-[0.98rem] font-bold text-white group-hover:text-cyan-accent">
                      {r.title}
                    </span>
                    <span className="shrink-0 text-[0.78rem] font-semibold text-navy-300">
                      {r.section}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-[0.95rem] text-navy-300">
                Nothing matched that. Try flood, Gaza, water, Zakat or volunteer.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header Component                                                    */
/* ------------------------------------------------------------------ */

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerSection, setDrawerSection] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setDrawer(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setDrawer(false);
      setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 180);
  }, [cancelClose]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const panelOpen = Boolean(openMenu) || searchOpen;
  const solid = scrolled || panelOpen || !isHome;

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        onMouseLeave={scheduleClose}
      >
        {/* Background translucent sheet - strictly sized to navbar height (90px) */}
        <div
          className={`absolute inset-x-0 top-0 -z-10 transition-all duration-300 ${
            scrolled ? "h-[56px]" : "h-[90px]"
          } ${
            solid
              ? "bg-[#071328]/95 backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)]"
              : "bg-gradient-to-b from-[#071328]/90 via-[#071328]/70 to-[#071328]/45 backdrop-blur-sm"
          }`}
          aria-hidden
        />

        <div className="flex items-start">
          {/* ------------------------------------------------------------- */}
          {/* Logo Badge: 116px height with 26px chamfer corner cut         */}
          {/* Vertical edge is 90px, perfectly meeting the 90px navbar line */}
          {/* ------------------------------------------------------------- */}
          <div className="relative z-20 shrink-0 filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
            <Link
              href="/"
              aria-label={`${org.name}, home`}
              className={`flex items-center justify-center bg-white px-5 sm:px-7 lg:px-8 transition-all duration-300 ${
                scrolled
                  ? "h-[82px] pb-2.5 pt-1.5"
                  : "h-[116px] pb-3.5 pt-2"
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 26px), calc(100% - 26px) 100%, 0 100%)",
              }}
            >
              <img
                src="/media/brand/logo-trim.png"
                alt={org.name}
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled
                    ? "h-[58px] sm:h-[64px]"
                    : "h-[86px] sm:h-[92px]"
                }`}
              />
            </Link>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Right Header Section: 90px Navbar (36px utility + 54px nav)   */}
          {/* ------------------------------------------------------------- */}
          <div
            className={`flex min-w-0 flex-1 flex-col justify-between transition-all duration-300 ${
              scrolled ? "h-[56px]" : "h-[90px]"
            }`}
          >
            {/* Upper Tier: Utility Row (36px) */}
            <div
              className={`flex items-center justify-end border-b border-white/10 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
                scrolled ? "max-h-0 opacity-0 overflow-hidden py-0 border-b-0" : "h-[36px] opacity-100"
              }`}
            >
              {/* Contact info: Phone & Email */}
              <div className="hidden items-center gap-6 text-[0.82rem] text-slate-200 md:flex">
                <a
                  href={org.phoneHref}
                  className="flex items-center gap-2 font-medium text-slate-200 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-3.5 w-3.5 text-slate-300" />
                  <span>{org.phone}</span>
                </a>
                <a
                  href={`mailto:${org.email}`}
                  className="flex items-center gap-2 font-medium text-slate-200 transition-colors hover:text-white"
                >
                  <MailIcon className="h-3.5 w-3.5 text-slate-300" />
                  <span>{org.email}</span>
                </a>
              </div>

              {/* Action Buttons: Volunteer & Donate */}
              <div className="flex items-center gap-4 sm:gap-5 md:ml-8">
                <Link
                  href="/get-involved"
                  className="font-display text-[0.86rem] font-bold text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
                >
                  Volunteer
                </Link>

                <Link
                  href="/donate"
                  className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#e01f26] px-4 py-1.5 font-display text-[0.84rem] font-bold text-white shadow-sm transition-all hover:bg-[#c9181f] active:scale-95"
                >
                  <span>Donate</span>
                  <HeartIcon className="h-3.5 w-3.5" />
                  <ChevronRight className="h-3 w-3 stroke-[3]" />
                </Link>
              </div>
            </div>

            {/* Lower Tier: Main Navigation Bar (54px) */}
            <div className="flex h-[54px] items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Navigation links (Left Aligned on desktop) */}
              <nav className="hidden items-center lg:flex" aria-label="Main">
                <ul className="flex items-center gap-1 xl:gap-2">
                  {/* Home Item */}
                  <li>
                    <Link
                      href="/"
                      className={`relative block px-3.5 py-2.5 font-display text-[0.92rem] font-bold transition-colors ${
                        isHome ? "text-cyan-400" : "text-slate-100 hover:text-white"
                      }`}
                    >
                      Home
                      {isHome && (
                        <span
                          className="absolute inset-x-3.5 bottom-1 h-[2.5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                          aria-hidden
                        />
                      )}
                    </Link>
                  </li>

                  {/* Navigation Items with Dropdowns */}
                  {nav.map((item) => {
                    const hasPanel = Boolean(item.columns);
                    const open = openMenu === item.label;
                    const active = isActive(item.href);

                    return (
                      <li
                        key={item.label}
                        onMouseEnter={() => {
                          cancelClose();
                          setSearchOpen(false);
                          setOpenMenu(hasPanel ? item.label : null);
                        }}
                      >
                        {hasPanel ? (
                          <button
                            type="button"
                            aria-expanded={open}
                            onClick={() => setOpenMenu(open ? null : item.label)}
                            className={`group relative flex items-center gap-1.5 px-3.5 py-2.5 font-display text-[0.92rem] font-bold transition-colors ${
                              open || active ? "text-white" : "text-slate-100 hover:text-white"
                            }`}
                          >
                            <span>{item.label}</span>
                            <ChevronDown className="h-3 w-3 text-slate-300 group-hover:text-white" open={open} />
                            {active && !isHome && (
                              <span
                                className="absolute inset-x-3.5 bottom-1 h-[2.5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                                aria-hidden
                              />
                            )}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={`relative block px-3.5 py-2.5 font-display text-[0.92rem] font-bold transition-colors ${
                              active ? "text-white" : "text-slate-100 hover:text-white"
                            }`}
                          >
                            {item.label}
                            {active && (
                              <span
                                className="absolute inset-x-3.5 bottom-1 h-[2.5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                                aria-hidden
                              />
                            )}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Right Side Icons: Search & Mobile Menu Trigger */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => {
                    setOpenMenu(null);
                    setSearchOpen((s) => !s);
                  }}
                  aria-expanded={searchOpen}
                  aria-label="Search site"
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                    searchOpen
                      ? "bg-white/20 text-cyan-400"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <SearchIcon className="h-[19px] w-[19px]" />
                </button>

                {/* Mobile Drawer Trigger */}
                <button
                  type="button"
                  onClick={() => setDrawer(true)}
                  aria-label="Open menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Panels & Overlays */}
        <div className="hidden lg:block" onMouseEnter={cancelClose}>
          {nav.map((item) =>
            item.columns && openMenu === item.label ? (
              <MegaPanel key={item.label} item={item} onNavigate={() => setOpenMenu(null)} />
            ) : null,
          )}
          {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
        </div>
        <div className="lg:hidden">
          {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
        </div>
      </header>

      {/* --------------------------------------------------------------- */}
      {/* Mobile Drawer Navigation                                        */}
      {/* --------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        {/* Backdrop */}
        <div
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Slide-out Sheet */}
        <div
          className={`absolute inset-y-0 right-0 flex w-[min(380px,88vw)] flex-col bg-[#071328] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            drawer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-md">
              <img src="/media/brand/logo-trim.png" alt={org.name} className="h-10 w-auto object-contain" />
            </span>
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile Navigation">
            <ul className="divide-y divide-white/10">
              <li>
                <Link
                  href="/"
                  onClick={() => setDrawer(false)}
                  className="block py-3.5 font-display text-[1.05rem] font-bold text-cyan-400"
                >
                  Home
                </Link>
              </li>

              {nav.map((item) => {
                const open = drawerSection === item.label;
                if (!item.columns) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setDrawer(false)}
                        className="block py-3.5 font-display text-[1.05rem] font-bold text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setDrawerSection(open ? null : item.label)}
                      className="flex w-full items-center justify-between py-3.5 font-display text-[1.05rem] font-bold text-white"
                    >
                      <span>{item.label}</span>
                      <ChevronDown open={open} className="h-4 w-4 text-slate-300" />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.columns.map((col) => (
                          <div key={col.heading} className="mb-4">
                            <p className="font-display text-[0.88rem] font-extrabold text-cyan-accent">
                              {col.heading}
                            </p>
                            <ul className="mt-2 space-y-1.5 border-l border-white/15 pl-4">
                              {col.links.map((l) => (
                                <li key={l.href + l.label}>
                                  <Link
                                    href={l.href}
                                    onClick={() => setDrawer(false)}
                                    className="block py-1 text-[0.92rem] font-semibold text-slate-200 hover:text-cyan-accent"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer CTA footer */}
          <div className="grid gap-3 border-t border-white/10 p-5">
            <Link
              href="/donate"
              onClick={() => setDrawer(false)}
              className="flex items-center justify-center gap-2 rounded bg-red-brand py-3 text-center font-display font-bold text-white shadow hover:bg-red-deep"
            >
              <span>Donate</span>
              <HeartIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/get-involved"
              onClick={() => setDrawer(false)}
              className="rounded border border-cyan-400/40 bg-cyan-400/10 py-3 text-center font-display font-bold text-cyan-300 hover:bg-cyan-400/20"
            >
              Volunteer with us
            </Link>
            <a
              href={org.phoneHref}
              className="flex items-center justify-center gap-2 pt-2 text-center text-xs font-semibold text-slate-300 hover:text-white"
            >
              <PhoneIcon className="h-3 w-3" />
              <span>{org.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
