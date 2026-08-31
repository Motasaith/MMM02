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

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`h-[18px] w-[18px] ${className}`} fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Mega panel                                                          */
/*                                                                     */
/* Dark, full bleed, and cut at the bottom on the same angle the rest  */
/* of the page uses, so the menu reads as part of the header rather    */
/* than a white box dropped on top of it.                              */
/* ------------------------------------------------------------------ */

function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const cols = item.columns ?? [];

  // Three link columns need the extra width; two breathe better without it.
  const linkSpan = item.feature ? "lg:col-span-7" : "lg:col-span-10";
  const linkCols = cols.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <div className="animate-drift-up border-t border-white/10 bg-navy-900">
      <div className="shell-wide grid gap-x-10 gap-y-10 py-11 lg:grid-cols-12">
        {/* Section framing, so the menu says something rather than only listing */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-[1.35rem] leading-tight font-extrabold text-white">
            {item.label}
          </h2>
          <span className="mt-3 block h-1 w-10 bg-magenta-brand" aria-hidden />
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
            className="group relative isolate flex min-h-[230px] flex-col justify-end overflow-hidden p-6 lg:col-span-3"
          >
            <img
              src={item.feature.image}
              alt=""
              aria-hidden
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55 transition-transform duration-[900ms] group-hover:scale-105"
            />
            <span
              className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10"
              aria-hidden
            />
            <h3 className="font-display text-[1.1rem] font-extrabold text-white">
              {item.feature.title}
            </h3>
            <p className="mt-2 text-[0.86rem] leading-snug text-navy-100">{item.feature.body}</p>
            <span className="mt-3 inline-flex items-center gap-2 font-display text-[0.83rem] font-bold text-cyan-accent">
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
    <div className="animate-drift-up border-t border-white/10 bg-navy-900">
      <div className="shell-wide py-9">
        <label className="flex items-center gap-4 border-b-2 border-white/25 pb-4 focus-within:border-cyan-accent">
          <SearchIcon className="h-6 w-6 shrink-0 text-cyan-accent" />
          <span className="sr-only">Search this site</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programmes, reports and pages"
            className="w-full bg-transparent font-display text-[1.3rem] font-bold text-white outline-none placeholder:font-normal placeholder:text-navy-300"
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
                    className="group flex items-baseline justify-between gap-4 px-4 py-3 transition-colors hover:bg-white/8"
                  >
                    <span className="font-display text-[1rem] font-bold text-white group-hover:text-cyan-accent">
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
/* Header                                                              */
/* ------------------------------------------------------------------ */

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerSection, setDrawerSection] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const overHero = pathname === "/";

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
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  }, [cancelClose]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const panelOpen = Boolean(openMenu) || searchOpen;
  const solid = scrolled || panelOpen || !overHero;

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        onMouseLeave={scheduleClose}
      >
        {/* Ground. Translucent over the hero photograph, solid everywhere else. */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-500 ${
            solid
              ? "bg-navy-900 shadow-[0_14px_40px_-22px_rgba(6,14,30,0.9)]"
              : "bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-transparent"
          }`}
          aria-hidden
        />

        <div className="flex items-stretch">
          {/* Brand plaque, cut on the diagonal into the navy */}
          <Link
            href="/"
            aria-label={`${org.name}, home`}
            className={`relative z-10 flex shrink-0 items-center bg-white pr-10 pl-5 transition-all duration-400 sm:pr-14 sm:pl-8 ${
              scrolled ? "py-2.5" : "py-3.5 sm:py-5"
            }`}
            style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)" }}
          >
            <img
              src="/media/brand/logo.png"
              alt={org.name}
              className={`w-auto transition-all duration-400 ${
                scrolled ? "h-[38px] sm:h-[42px]" : "h-[42px] sm:h-[56px]"
              }`}
            />
          </Link>

          <div className="flex min-w-0 flex-1 flex-col">
            {/* Utility row, actions flush to the right edge of the viewport */}
            <div
              className={`flex items-stretch justify-end overflow-hidden transition-all duration-400 ${
                scrolled ? "max-h-0 opacity-0" : "max-h-24 min-h-[52px] opacity-100"
              }`}
            >
              <div className="hidden items-center gap-6 pr-6 text-[0.8rem] text-navy-100 xl:flex">
                <a href={org.phoneHref} className="font-semibold transition-colors hover:text-white">
                  {org.phone}
                </a>
                <a
                  href={`mailto:${org.email}`}
                  className="transition-colors hover:text-white"
                >
                  {org.email}
                </a>
              </div>

              <Link
                href="/get-involved"
                className="hidden items-center bg-blue-brand px-7 font-display text-[0.9rem] font-bold text-white transition-colors hover:bg-blue-bright sm:flex"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="flex items-center gap-2 bg-magenta-brand px-6 font-display text-[0.9rem] font-bold text-white transition-colors hover:bg-magenta-deep sm:px-8"
              >
                Donate
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Navigation row */}
            <div className="flex flex-1 items-center justify-end gap-1 pr-4 sm:pr-6">
              <nav className="hidden items-center lg:flex" aria-label="Main">
                <ul className="flex items-center">
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
                            className={`relative flex items-center gap-2 px-4 py-4 font-display text-[0.95rem] font-bold transition-colors ${
                              open || active ? "text-cyan-accent" : "text-white hover:text-cyan-accent"
                            }`}
                          >
                            {item.label}
                            <Chevron open={open} />
                            <span
                              className={`absolute inset-x-3 bottom-2 h-0.5 origin-left bg-cyan-accent transition-transform duration-300 ${
                                open || active ? "scale-x-100" : "scale-x-0"
                              }`}
                              aria-hidden
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={`relative block px-4 py-4 font-display text-[0.95rem] font-bold transition-colors ${
                              active ? "text-cyan-accent" : "text-white hover:text-cyan-accent"
                            }`}
                          >
                            {item.label}
                            <span
                              className={`absolute inset-x-3 bottom-2 h-0.5 origin-left bg-cyan-accent transition-transform duration-300 ${
                                active ? "scale-x-100" : "scale-x-0"
                              }`}
                              aria-hidden
                            />
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex items-center gap-1">
              <a
                href={org.phoneHref}
                aria-label={`Call ${org.phone}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10 lg:hidden"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px]" fill="none">
                  <path
                    d="M6.6 3.5 9 3.9l1 3.4-1.9 1.4a12.6 12.6 0 0 0 6.2 6.2l1.4-1.9 3.4 1 .4 2.4a1.6 1.6 0 0 1-1.6 1.8A15.6 15.6 0 0 1 4.8 5.1 1.6 1.6 0 0 1 6.6 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => {
                  setOpenMenu(null);
                  setSearchOpen((s) => !s);
                }}
                aria-expanded={searchOpen}
                aria-label="Search"
                className={`ml-1 grid h-11 w-11 place-items-center rounded-full border transition-colors ${
                  searchOpen
                    ? "border-cyan-accent bg-cyan-accent text-navy-950"
                    : "border-white/25 text-white hover:border-white hover:bg-white/10"
                }`}
              >
                <SearchIcon />
              </button>

              {/* Mobile trigger */}
              <button
                type="button"
                onClick={() => setDrawer(true)}
                aria-label="Open menu"
                className="relative ml-1 h-11 w-11 shrink-0 rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 lg:hidden"
              >
                <span className="absolute top-[15px] right-3 left-3 h-0.5 rounded bg-current" />
                <span className="absolute top-[21px] right-3 left-3 h-0.5 rounded bg-current" />
                <span className="absolute top-[27px] right-3 left-3 h-0.5 rounded bg-current" />
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Panels */}
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

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        <div
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[min(420px,92vw)] flex-col bg-navy-900 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            drawer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="rounded bg-white px-3 py-2">
              <img src="/media/brand/logo.png" alt="" className="h-9 w-auto" />
            </span>
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-3" aria-label="Mobile">
            <ul className="divide-y divide-white/10">
              {nav.map((item) => {
                const open = drawerSection === item.label;
                if (!item.columns) {
                  return (
                    <li key={item.label}>
                      <Link href={item.href} className="block py-4 font-display text-lg font-bold text-white">
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
                      className="flex w-full items-center justify-between py-4 font-display text-lg font-bold text-white"
                    >
                      {item.label}
                      <Chevron open={open} />
                    </button>
                    <div
                      className={`grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.columns.map((col) => (
                          <div key={col.heading} className="mb-4">
                            <p className="font-display text-[0.9rem] font-extrabold text-cyan-accent">
                              {col.heading}
                            </p>
                            <ul className="mt-2 space-y-1 border-l border-white/15 pl-4">
                              {col.links.map((l) => (
                                <li key={l.href + l.label}>
                                  <Link
                                    href={l.href}
                                    className="block py-1.5 text-[0.96rem] font-semibold text-navy-100"
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

          <div className="grid gap-2.5 border-t border-white/10 p-5">
            <Link
              href="/donate"
              className="bg-magenta-brand px-6 py-3.5 text-center font-display font-bold text-white"
            >
              Donate
            </Link>
            <Link
              href="/get-involved"
              className="bg-blue-brand px-6 py-3.5 text-center font-display font-bold text-white"
            >
              Volunteer with us
            </Link>
            <a href={org.phoneHref} className="pt-2 text-center text-sm font-semibold text-navy-300">
              {org.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
