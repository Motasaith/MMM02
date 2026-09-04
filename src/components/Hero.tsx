"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";

const DURATION = 6500;

type Slide = {
  id: string;
  pillar: string;
  badge: string;
  image: string;
  alt: string;
  quote: string;
  quoteSource: string;
  headline: string;
  highlight: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  operation: string;
  place: string;
  href: string;
};

const slides: Slide[] = [
  {
    id: "humanitarian",
    pillar: "Pillar A • Humanitarian Relief Work",
    badge: "Mercy in Motion",
    image: "/media/field/hero-humanitarian-relief.jpg",
    alt: "Muslim Medical Mission doctors providing free consultations and medicine at a rural outpatient medical camp",
    quote: "Whoever saves a life, it is as if he had saved all mankind.",
    quoteSource: "Surah Al-Ma'idah (5:32)",
    headline: "Mercy in Motion:",
    highlight: "Free healthcare for those in need.",
    subtext: "Free medical camps, welfare clinics and surgical care delivered to the doorstep of those who need it most — without discrimination of race, religion or region.",
    primaryCta: { label: "Explore Relief Work", href: "/what-we-do" },
    secondaryCta: { label: "Donate to Camps", href: "/donate" },
    operation: "Mercy in Motion",
    place: "Free Camps & Welfare Clinics",
    href: "/what-we-do",
  },
  {
    id: "disaster",
    pillar: "Pillar B • Disasters & Emergency Relief",
    badge: "First to Reach",
    image: "/media/field/hero-disaster-response.jpg",
    alt: "Muslim Medical Mission emergency rapid response team navigating flood waters to deliver medical aid",
    quote: "The believer's shade on the Day of Resurrection will be his charity.",
    quoteSource: "Prophet Muhammad ﷺ (Tirmidhi)",
    headline: "When Calamity Strikes,",
    highlight: "we are already moving.",
    subtext: "From the 2005 Kashmir earthquake to the floods and droughts of today, MMM's emergency teams are pre-trained to deploy within hours, not days.",
    primaryCta: { label: "Emergency Response", href: "/disaster-response" },
    secondaryCta: { label: "Support Rapid Response", href: "/donate" },
    operation: "First to Reach",
    place: "Kashmir to Indus Basin",
    href: "/disaster-response",
  },
  {
    id: "academy",
    pillar: "Pillar C • Educational & Professional Development",
    badge: "MMM Academy",
    image: "/media/field/hero-national-conference.jpg",
    alt: "Audience and delegates gathered at the Muslim Medical Mission National Medical Conference",
    quote: "The seeking of knowledge is an obligation upon every Muslim.",
    quoteSource: "Prophetic Tradition",
    headline: "Building Tomorrow's Healers",
    highlight: "with clinical excellence & ethics.",
    subtext: "Conferences, CME seminars, hands-on emergency training with Punjab Emergency Service (Rescue 1122), and scholarships cultivating compassionate healthcare leaders.",
    primaryCta: { label: "Discover MMM Academy", href: "/what-we-do/training" },
    secondaryCta: { label: "Join as Member", href: "/get-involved" },
    operation: "MMM Academy",
    place: "National Programs",
    href: "/what-we-do/training",
  },
  {
    id: "gaza",
    pillar: "Flagship Relief Mission",
    badge: "Gaza Relief",
    image: "/media/gaza-water/gaza-water-01.jpg",
    alt: "Muslim Medical Mission clean drinking water distribution tanker in Gaza",
    quote: "The best form of charity is giving water to drink.",
    quoteSource: "Prophet Muhammad ﷺ (Abu Dawud)",
    headline: "Gaza Relief Mission:",
    highlight: "Clean water & daily lifeline aid.",
    subtext: "Operating community water tankers, emergency nutrition packages, hot meals and tented field clinics to sustain displaced families in Gaza.",
    primaryCta: { label: "Support Gaza Relief", href: "/donate" },
    secondaryCta: { label: "Gaza Operations", href: "/what-we-do/gaza-field-clinics" },
    operation: "Water for Life & Clinics",
    place: "Displaced Camps in Gaza",
    href: "/what-we-do/gaza-field-clinics",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => {
    setActive((i) => (i + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timer.current = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), DURATION);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused]);

  return (
    <section
      className="relative isolate flex min-h-[100svh] h-[100svh] flex-col overflow-hidden bg-[#0A1020]"
      aria-label="Muslim Medical Mission"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full Viewport Sliding Carousel with slide-synchronized text */}
      <div
        className="absolute inset-0 flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={s.id} className="relative h-full w-full shrink-0">
            {/* Background Image */}
            <img
              src={s.image}
              alt={s.alt}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* Cinematic contrast scrims matching UNDA dark tones */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A1020]/90 via-[#0A1020]/60 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A1020]/90 via-transparent to-[#0A1020]/40"
              aria-hidden
            />

            {/* Slide Text Content */}
            <div className="absolute inset-0 flex items-center pt-28 pb-24 sm:pt-36 sm:pb-28">
              <div className="shell-wide">
                <div className="max-w-2xl">
                  {/* Pillar Category Badge */}
                  <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0A1020]/80 px-3 py-1 backdrop-blur-md shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EF3B19] animate-pulse" />
                    <span className="font-display text-[0.74rem] sm:text-[0.78rem] font-black uppercase tracking-wider text-white">
                      {s.badge}
                    </span>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="font-display text-[0.72rem] sm:text-[0.75rem] font-medium text-slate-300">
                      {s.pillar}
                    </span>
                  </div>

                  {/* Islamic Teaching / Quranic Quote with Red Accent */}
                  <div className="border-l-2 border-[#EF3B19] pl-3.5 sm:pl-4">
                    <p className="font-quote text-[1.05rem] sm:text-[1.2rem] lg:text-[1.32rem] leading-snug italic font-medium text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
                      "{s.quote}"
                    </p>
                    <span className="mt-1 block text-xs sm:text-[0.82rem] font-bold uppercase tracking-wider text-slate-300 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                      — {s.quoteSource}
                    </span>
                  </div>

                  {/* Headline with Brand Red Highlight */}
                  <h1 className="mt-4 font-display text-[clamp(1.95rem,3.5vw,3rem)] font-black leading-[1.12] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85)]">
                    {s.headline}{" "}
                    <span className="text-[#EF3B19] drop-shadow-[0_2px_14px_rgba(239,59,25,0.45)]">
                      {s.highlight}
                    </span>
                  </h1>

                  {/* Subtext */}
                  <p className="mt-3.5 max-w-xl text-[0.96rem] sm:text-[1.04rem] leading-relaxed text-slate-200 [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">
                    {s.subtext}
                  </p>

                  {/* Dual Call To Actions (UNDA Electric Blue + Glass Outline) */}
                  <div className="mt-7 flex flex-wrap items-center gap-3.5">
                    <Link
                      href={s.primaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-full bg-[#075BD6] px-6 py-3.5 font-display text-[0.92rem] font-bold text-white shadow-[0_12px_24px_-8px_rgba(7,91,214,0.7)] transition-all duration-300 hover:bg-[#0649B8] hover:shadow-[0_14px_28px_-6px_rgba(6,73,184,0.8)] sm:px-7"
                    >
                      <span>{s.primaryCta.label}</span>
                      <Arrow className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                    </Link>
                    <Link
                      href={s.secondaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/35 px-5 py-3.5 font-display text-[0.92rem] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20 sm:px-6"
                    >
                      <span>{s.secondaryCta.label}</span>
                      <Arrow className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Capsule Bar with Red Indicator Pill */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center px-4 sm:bottom-8">
        <div className="flex w-full max-w-2xl items-center justify-between gap-4 rounded-full border border-white/20 bg-[#0A1020]/75 px-5 py-2.5 backdrop-blur-md shadow-2xl sm:px-6 sm:py-3">
          {/* Operation & Location Link */}
          <Link
            href={slides[active].href}
            className="group flex min-w-0 items-center gap-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:text-[#EF3B19]"
          >
            <span className="truncate font-display font-bold text-white">
              {slides[active].operation}
            </span>
            <span className="text-white/40">•</span>
            <span className="truncate font-normal text-slate-300">{slides[active].place}</span>
            <Arrow className="h-3.5 w-3.5 shrink-0 text-[#EF3B19] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Sliding Indicator Dots with Brand Red Active Pill */}
          <div className="flex shrink-0 items-center gap-2">
            {slides.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.operation}`}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    on
                      ? "h-2.5 w-8 bg-[#EF3B19] shadow-[0_0_12px_rgba(239,59,25,0.7)]"
                      : "h-2.5 w-2.5 bg-white/40 hover:bg-white/90"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
