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

function SearchIcon({ className = "h-[19px] w-[19px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" strokeWidth="2.2" />
      <path d="M16.5 16.5L21 21" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Clean Light Dropdown Panel                                          */
/* ------------------------------------------------------------------ */

function DropdownPanel({
  item,
  align = "left",
  onNavigate,
}: {
  item: NavItem;
  align?: "left" | "right";
  onNavigate: () => void;
}) {
  const cols = item.columns ?? [];
  const isRight = align === "right";
  const isThreeCol = cols.length >= 3;

  return (
    <div
      className={`animate-drift-up absolute top-full z-50 mt-2 max-h-[calc(100vh-130px)] overflow-y-auto rounded-2xl border border-[#DCE2EA] bg-white p-5 sm:p-6 shadow-[0_20px_48px_-12px_rgba(10,16,32,0.18)] ${
        isRight
          ? "right-0"
          : isThreeCol
            ? "left-0 sm:-left-12 xl:left-0"
            : "left-0"
      } ${
        isThreeCol
          ? "w-[min(690px,calc(100vw-2rem))]"
          : "w-[min(480px,calc(100vw-2rem))]"
      }`}
    >
      <div
        className={`grid gap-5 sm:gap-6 ${
          isThreeCol ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {cols.map((col) => (
          <div key={col.heading}>
            <h3 className="border-b border-[#DCE2EA] pb-2 font-display text-[0.80rem] font-extrabold uppercase tracking-wider text-[#0A1020]">
              {col.heading}
            </h3>
            <ul className="mt-2.5 space-y-1">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    onClick={onNavigate}
                    className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-[0.84rem] font-semibold text-[#4B5563] transition-colors hover:bg-[#F3F7FF] hover:text-[#075BD6]"
                  >
                    <span className="leading-snug">{l.label}</span>
                    <Arrow className="h-3 w-3 shrink-0 text-slate-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#075BD6] group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {item.feature ? (
        <div className="mt-5 border-t border-[#DCE2EA] pt-4">
          <Link
            href={item.feature.href}
            onClick={onNavigate}
            className="group flex items-center justify-between gap-3 rounded-xl bg-[#F5F7FA] p-3.5 border border-[#DCE2EA]/70 transition-colors hover:bg-[#F3F7FF] hover:border-[#DCE6FB]"
          >
            <div className="min-w-0 pr-2">
              <span className="font-display text-[0.78rem] font-extrabold uppercase tracking-wider text-[#075BD6]">
                Featured Focus
              </span>
              <p className="mt-0.5 truncate font-display text-[0.92rem] font-bold text-[#0A1020]">
                {item.feature.title}
              </p>
            </div>
            <span className="shrink-0 inline-flex items-center gap-1.5 font-display text-[0.82rem] font-bold text-[#075BD6]">
              <span>{item.feature.cta}</span>
              <Arrow className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Search Overlay (Light theme)                                        */
/* ------------------------------------------------------------------ */

function SearchPanel({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => search(query), [query]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="animate-drift-up border-b border-slate-200 bg-white shadow-xl">
      <div className="shell-wide py-6">
        <label className="flex items-center gap-3 border-b-2 border-slate-200 pb-3 focus-within:border-[#046BD2]">
          <SearchIcon className="h-5 w-5 shrink-0 text-[#046BD2]" />
          <span className="sr-only">Search this site</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programmes, flood camps, Gaza relief, Zakat, reports..."
            className="w-full bg-transparent font-display text-[1.1rem] font-bold text-[#333333] outline-none placeholder:font-normal placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md px-3 py-1 font-display text-[0.85rem] font-bold text-[#7A7A7A] transition-colors hover:bg-slate-100 hover:text-[#333333]"
          >
            Esc / Close
          </button>
        </label>

        {query.trim().length >= 2 && (
          <ul className="mt-4 grid gap-1 sm:grid-cols-2">
            {results.length ? (
              results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="group flex items-baseline justify-between gap-4 rounded-lg px-3.5 py-2.5 transition-colors hover:bg-blue-50"
                  >
                    <span className="font-display text-[0.95rem] font-bold text-[#003475] group-hover:text-[#046BD2]">
                      {r.title}
                    </span>
                    <span className="shrink-0 text-[0.78rem] font-semibold text-[#7A7A7A]">
                      {r.section}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-3.5 py-3 text-[0.92rem] text-slate-500">
                Nothing matched that query. Try typing: flood, Gaza, water, camp, or volunteer.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Header Component (Simple Light Design)                         */
/* ------------------------------------------------------------------ */

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerSection, setDrawerSection] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const isHome = pathname === "/";

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

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-200"
        onMouseLeave={scheduleClose}
      >
        {/* Top Utility Row (Simple Light Strip) */}
        <div className="border-b border-[#DCE2EA] bg-[#F5F7FA] text-xs text-[#4B5563] backdrop-blur-sm">
          <div className="shell-header flex h-[34px] items-center justify-between">
            {/* Left: Contact Information */}
            <div className="flex items-center gap-6">
              <a
                href={org.phoneHref}
                className="flex items-center gap-1.5 font-medium transition-colors hover:text-[#075BD6]"
              >
                <PhoneIcon className="h-3 w-3 text-[#075BD6]" />
                <span>{org.phone}</span>
              </a>
              <a
                href={`mailto:${org.email}`}
                className="hidden items-center gap-1.5 font-medium transition-colors hover:text-[#075BD6] sm:flex"
              >
                <MailIcon className="h-3 w-3 text-[#075BD6]" />
                <span>{org.email}</span>
              </a>
            </div>

            {/* Right: Quick Links */}
            <div className="flex items-center gap-4">
              <span className="hidden text-[#6B7280] md:inline">
                Bank Transfer: UBL 0635338617189
              </span>
              <span className="hidden h-3 w-px bg-[#DCE2EA] md:inline" aria-hidden />
              <Link
                href="/get-involved"
                className="font-semibold text-[#075BD6] transition-colors hover:text-[#0649B8] hover:underline"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar (Clean Light Modern Design with Balanced Width) */}
        <div className="border-b border-[#DCE2EA] bg-white/95 shadow-[0_2px_12px_rgba(10,16,32,0.04)] backdrop-blur-md">
          <div className="shell-header flex h-[74px] sm:h-[80px] items-center justify-between gap-3 xl:gap-6">
            {/* Logo + Brand Lockup (Circle emblem + crisp typography) */}
            <Link
              href="/"
              aria-label={`${org.name}, home`}
              className="group flex shrink-0 items-center gap-2.5 sm:gap-3 transition-transform duration-200"
            >
              <img
                src="/media/brand/circle-logo.png"
                alt={org.name}
                className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="font-display text-[0.98rem] sm:text-[1.1rem] md:text-[1.18rem] font-black tracking-tight text-[#0A1020] group-hover:text-[#075BD6] transition-colors leading-[1.1]">
                  Muslim Medical Mission
                </span>
                <span className="mt-0.5 font-display text-[0.58rem] sm:text-[0.65rem] md:text-[0.68rem] font-bold tracking-tight text-[#EF3B19] leading-none">
                  Wisdom, Action, Service for Allah for Right
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (with whitespace-nowrap) */}
            <nav className="hidden items-center lg:flex" aria-label="Main Navigation">
              <ul className="flex items-center gap-0.5 xl:gap-1">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    className={`relative whitespace-nowrap rounded-md px-2.5 xl:px-3 py-2 font-display text-[0.86rem] xl:text-[0.91rem] font-bold transition-all ${
                      isHome
                        ? "text-[#075BD6] bg-[#F3F7FF]"
                        : "text-[#4B5563] hover:bg-[#F5F7FA] hover:text-[#075BD6]"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                {/* Dropdown Navigation Items */}
                {nav.map((item, idx) => {
                  const hasPanel = Boolean(item.columns);
                  const open = openMenu === item.label;
                  const active = isActive(item.href);
                  // Align right for items that appear towards the right side of the navbar (Disaster Response, Media, Get Involved)
                  const align = idx >= 2 ? "right" : "left";

                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        cancelClose();
                        setSearchOpen(false);
                        setOpenMenu(hasPanel ? item.label : null);
                      }}
                    >
                      {hasPanel ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={open}
                            onClick={() => setOpenMenu(open ? null : item.label)}
                            className={`group flex items-center gap-1 whitespace-nowrap rounded-md px-2 xl:px-3 py-2 font-display text-[0.86rem] xl:text-[0.91rem] font-bold transition-all ${
                              open || (active && !isHome)
                                ? "text-[#075BD6] bg-[#F3F7FF]"
                                : "text-[#4B5563] hover:bg-[#F5F7FA] hover:text-[#075BD6]"
                            }`}
                          >
                            <span className="whitespace-nowrap">{item.label}</span>
                            <ChevronDown
                              className={`h-3 w-3 shrink-0 transition-colors ${
                                open || (active && !isHome) ? "text-[#075BD6]" : "text-slate-400 group-hover:text-[#075BD6]"
                              }`}
                              open={open}
                            />
                          </button>

                          {open && (
                            <DropdownPanel
                              item={item}
                              align={align}
                              onNavigate={() => setOpenMenu(null)}
                            />
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block whitespace-nowrap rounded-md px-2 xl:px-3 py-2 font-display text-[0.86rem] xl:text-[0.91rem] font-bold transition-all ${
                            active
                              ? "text-[#075BD6] bg-[#F3F7FF]"
                              : "text-[#4B5563] hover:bg-[#F5F7FA] hover:text-[#075BD6]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right Side Actions: Search, Donate, Mobile Menu Trigger */}
            <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
              {/* Search Toggle */}
              <button
                type="button"
                onClick={() => setSearchOpen((s) => !s)}
                aria-label="Search programmes and field reports"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                  searchOpen
                    ? "bg-[#F3F7FF] text-[#075BD6]"
                    : "text-[#4B5563] hover:bg-[#F5F7FA] hover:text-[#075BD6]"
                }`}
              >
                <SearchIcon className="h-[18px] w-[18px]" />
              </button>

              {/* Direct Donate Button (UNDA Royal/Electric Blue Style) */}
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-[#075BD6] px-5 py-2.5 font-display text-[0.88rem] font-bold text-white shadow-[0_4px_14px_rgba(7,91,214,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0649B8] hover:shadow-[0_6px_18px_rgba(6,73,184,0.35)] active:scale-95"
              >
                <span>Donate Now</span>
                <HeartIcon className="h-3.5 w-3.5" />
              </Link>

              {/* Mobile Drawer Button */}
              <button
                type="button"
                onClick={() => setDrawer(true)}
                aria-label="Open navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#334155] transition-colors hover:bg-slate-100 lg:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
      </header>

      {/* --------------------------------------------------------------- */}
      {/* Mobile Drawer Navigation (Simple Light Sheet)                    */}
      {/* --------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        {/* Backdrop */}
        <div
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Slide-out Sheet */}
        <div
          className={`absolute inset-y-0 right-0 flex w-[min(380px,88vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            drawer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4">
            <Link href="/" onClick={() => setDrawer(false)} className="flex items-center gap-2.5">
              <img src="/media/brand/circle-logo.png" alt={org.name} className="h-10 w-10 shrink-0 object-contain" />
              <div className="flex flex-col">
                <span className="font-display text-[0.98rem] font-black text-[#003475] leading-none">
                  Muslim Medical Mission
                </span>
                <span className="mt-0.5 font-display text-[0.58rem] font-bold text-[#E01F26] leading-none">
                  Wisdom, Action, Service for Allah for Right
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-[#334155] transition-colors hover:bg-slate-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile Navigation">
            <ul className="divide-y divide-slate-100">
              <li>
                <Link
                  href="/"
                  onClick={() => setDrawer(false)}
                  className={`block py-3 font-display text-[1rem] font-bold ${
                    isHome ? "text-[#046BD2]" : "text-[#334155]"
                  }`}
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
                        className={`block py-3 font-display text-[1rem] font-bold ${
                          isActive(item.href) ? "text-[#046BD2]" : "text-[#334155]"
                        }`}
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
                      className="flex w-full items-center justify-between py-3 font-display text-[1rem] font-bold text-[#334155]"
                    >
                      <span className={isActive(item.href) ? "text-[#046BD2]" : ""}>{item.label}</span>
                      <ChevronDown open={open} className="h-4 w-4 text-slate-400" />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.columns.map((col) => (
                          <div key={col.heading} className="mb-3">
                            <p className="font-display text-[0.82rem] font-extrabold uppercase tracking-wider text-[#003475]">
                              {col.heading}
                            </p>
                            <ul className="mt-1.5 space-y-1 border-l-2 border-slate-100 pl-3">
                              {col.links.map((l) => (
                                <li key={l.href + l.label}>
                                  <Link
                                    href={l.href}
                                    onClick={() => setDrawer(false)}
                                    className="block py-1 text-[0.9rem] font-semibold text-[#334155] hover:text-[#046BD2]"
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
          <div className="grid gap-2.5 border-t border-slate-100 bg-slate-50 p-5">
            <Link
              href="/donate"
              onClick={() => setDrawer(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#046BD2] py-3 text-center font-display font-bold text-white shadow-sm transition-colors hover:bg-[#003475]"
            >
              <span>Donate Now</span>
              <HeartIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/get-involved"
              onClick={() => setDrawer(false)}
              className="rounded-xl border border-slate-200 bg-white py-2.5 text-center font-display font-bold text-[#003475] transition-colors hover:bg-slate-100"
            >
              Become a Volunteer
            </Link>
            <div className="pt-2 text-center text-xs text-[#7A7A7A]">
              <p>{org.phone}</p>
              <p className="mt-0.5">{org.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
