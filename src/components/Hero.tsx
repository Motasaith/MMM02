"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";

const DURATION = 5000; // Exact 5 seconds automatic slide interval

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
    pillar: "Pillar A • Free Healthcare & Outpatient Care",
    badge: "Mercy in Motion",
    image: "/media/field/free-medical-camp-medicines.jpg",
    alt: "Muslim Medical Mission doctors providing free consultations and medicine at a rural outpatient medical camp with official banner",
    quote: "Whoever saves a life, it is as if he had saved all mankind.",
    quoteSource: "Surah Al-Ma'idah (5:32)",
    headline: "Mercy in Motion:",
    highlight: "Free healthcare for those in need.",
    subtext: "Free medical camps, welfare clinics and surgical care delivered to the doorstep of those who need it most — without discrimination of race, religion or region.",
    primaryCta: { label: "Explore Relief Work", href: "/what-we-do" },
    secondaryCta: { label: "Donate to Camps", href: "/donate" },
    operation: "Free Medical Camps",
    place: "South Punjab, Sindh & Rural Districts",
    href: "/what-we-do",
  },
  {
    id: "conference",
    pillar: "Pillar C • Educational & Professional Development",
    badge: "MMM Academy",
    image: "/media/field/national-conference-stage.jpg",
    alt: "Audience and delegates gathered at the Muslim Medical Mission National Medical Conference with grand official stage banner",
    quote: "The seeking of knowledge is an obligation upon every Muslim.",
    quoteSource: "Prophetic Tradition",
    headline: "Building Tomorrow's Healers",
    highlight: "with clinical excellence & ethics.",
    subtext: "Conferences, CME seminars, hands-on emergency training with Punjab Emergency Service (Rescue 1122), and scholarships cultivating compassionate healthcare leaders.",
    primaryCta: { label: "Discover MMM Academy", href: "/what-we-do/training" },
    secondaryCta: { label: "Join as Member", href: "/get-involved" },
    operation: "National Medical Conferences",
    place: "Lahore & Academic Centers",
    href: "/what-we-do/training",
  },
  {
    id: "disaster",
    pillar: "Pillar B • Disasters & Emergency Relief",
    badge: "First to Reach",
    image: "/media/field/hero-disaster-response.jpg",
    alt: "Muslim Medical Mission emergency rapid response team navigating flood waters with banner on rescue boat",
    quote: "The believer's shade on the Day of Resurrection will be his charity.",
    quoteSource: "Prophet Muhammad ﷺ (Tirmidhi)",
    headline: "When Calamity Strikes,",
    highlight: "we are already moving.",
    subtext: "From the 2005 Kashmir earthquake to the floods and droughts of today, MMM's emergency teams are pre-trained to deploy within hours, not days.",
    primaryCta: { label: "Emergency Response", href: "/disaster-response" },
    secondaryCta: { label: "Support Rapid Response", href: "/donate" },
    operation: "Rapid Emergency Response",
    place: "Kashmir to Indus Basin",
    href: "/disaster-response",
  },
  {
    id: "rescue",
    pillar: "Pillar B • Emergency Training",
    badge: "Life Support Training",
    image: "/media/field/bls-rescue-1122.jpg",
    alt: "Basic Life Support and First Responder Training in collaboration with Punjab Emergency Service Rescue 1122 and Muslim Medical Mission banner",
    quote: "The best of people are those that bring the most benefit to the rest of mankind.",
    quoteSource: "Prophetic Tradition (Daraqutni)",
    headline: "Equipping First Responders",
    highlight: "in collaboration with Rescue 1122.",
    subtext: "Hands-on basic life support, trauma response, haemorrhage control and disaster triage certifying everyday volunteers as frontline community lifesavers.",
    primaryCta: { label: "Explore Responder Courses", href: "/what-we-do/training" },
    secondaryCta: { label: "Volunteer with Us", href: "/get-involved" },
    operation: "BLS & Responders Training",
    place: "In collaboration with Rescue 1122",
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

  // Robust 5-second automatic sliding that resets whenever slide changes
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section
      className="relative isolate flex min-h-[100svh] h-[100svh] flex-col overflow-hidden bg-[#0A1020]"
      aria-label="Muslim Medical Mission"
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
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A1020]/95 via-[#0A1020]/65 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A1020]/95 via-transparent to-[#0A1020]/45"
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

                  {/* Islamic Teaching / Quranic Quote with Red Accent (Newsreader font) */}
                  <div className="border-l-2 border-[#EF3B19] pl-3.5 sm:pl-4">
                    <p className="font-quote text-[1.12rem] sm:text-[1.28rem] lg:text-[1.42rem] leading-snug italic font-normal text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
                      "{s.quote}"
                    </p>
                    <span className="mt-1 block text-xs sm:text-[0.84rem] font-bold uppercase tracking-wider text-slate-300 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                      — {s.quoteSource}
                    </span>
                  </div>

                  {/* Headline with Brand Red Highlight (Noto Serif font) */}
                  <h1 className="mt-5 font-display text-[clamp(2.35rem,4.4vw,3.75rem)] font-black leading-[1.08] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85)]">
                    {s.headline}{" "}
                    <span className="text-[#EF3B19] drop-shadow-[0_2px_14px_rgba(239,59,25,0.45)]">
                      {s.highlight}
                    </span>
                  </h1>

                  {/* Subtext (Noto Sans font) */}
                  <p className="mt-4 max-w-2xl text-[1.04rem] sm:text-[1.14rem] leading-relaxed text-slate-100 [text-shadow:0_1px_12px_rgba(0,0,0,0.85)]">
                    {s.subtext}
                  </p>

                  {/* Dual Call To Actions (UNDA Electric Blue + Glass Outline) */}
                  <div className="mt-8 flex flex-wrap items-center gap-3.5">
                    <Link
                      href={s.primaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-full bg-[#075BD6] px-7 py-3.5 font-display text-[0.98rem] font-bold text-white shadow-[0_12px_24px_-8px_rgba(7,91,214,0.7)] transition-all duration-300 hover:bg-[#0649B8] hover:shadow-[0_14px_28px_-6px_rgba(6,73,184,0.8)] sm:px-8"
                    >
                      <span>{s.primaryCta.label}</span>
                      <Arrow className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                    </Link>
                    <Link
                      href={s.secondaryCta.href}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/35 px-6 py-3.5 font-display text-[0.98rem] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20 sm:px-7"
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

      {/* Edge Navigation Arrows for desktop */}
      <div className="pointer-events-none absolute inset-y-0 inset-x-4 sm:inset-x-8 z-20 hidden md:flex items-center justify-between">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0A1020]/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#075BD6] hover:border-[#075BD6] active:scale-95 cursor-pointer shadow-lg"
        >
          <svg className="h-5 w-5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0A1020]/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#075BD6] hover:border-[#075BD6] active:scale-95 cursor-pointer shadow-lg"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Capsule Bar with 5-second Animated Progress Bar */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center px-4 sm:bottom-8">
        <div className="flex w-full max-w-2xl items-center justify-between gap-4 rounded-full border border-white/20 bg-[#0A1020]/85 px-5 py-2.5 backdrop-blur-md shadow-2xl sm:px-6 sm:py-3">
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

          {/* Sliding Indicator Dots with 5-second countdown progress bar */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-xs font-bold text-white/50 mr-1 hidden sm:inline">
              0{active + 1} / 0{slides.length}
            </span>

            {slides.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.operation}`}
                  className={`relative cursor-pointer rounded-full overflow-hidden transition-all duration-300 ${
                    on
                      ? "h-2.5 w-12 sm:w-14 bg-white/25 shadow-[0_0_10px_rgba(239,59,25,0.4)]"
                      : "h-2.5 w-2.5 bg-white/40 hover:bg-white/90"
                  }`}
                >
                  {on && (
                    <span
                      key={`progress-${active}`}
                      className="absolute inset-0 rounded-full bg-[#EF3B19] animate-hero-progress"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
