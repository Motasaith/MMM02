"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";

type Slide = {
  id: string;
  image: string;
  alt: string;
  operation: string;
  place: string;
  href: string;
};

const slides: Slide[] = [
  {
    id: "camps",
    image: "/media/disaster/disaster-11.jpg",
    alt: "A Muslim Medical Mission doctor dispensing medicine at a flood relief camp in Punjab",
    operation: "Flood emergency camps",
    place: "Dera Ghazi Khan",
    href: "/what-we-do/flood-medical-camps",
  },
  {
    id: "rations",
    image: "/media/disaster/disaster-13.jpg",
    alt: "Ration sacks laid out for distribution to flood affected families",
    operation: "Relief distribution",
    place: "South Punjab",
    href: "/what-we-do/flood-relief",
  },
  {
    id: "water",
    image: "/media/gaza-water/gaza-water-01.jpg",
    alt: "A Muslim Medical Mission water tanker delivering drinking water in Gaza",
    operation: "Water for Life",
    place: "Gaza",
    href: "/what-we-do/water-for-life",
  },
];

const DURATION = 7000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timer.current = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), DURATION);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused]);

  return (
    <section
      /* Sized to the viewport so the whole thing is visible on landing.
         svh rather than vh so mobile browser chrome does not crop it. */
      className="relative isolate flex h-[100svh] max-h-[1100px] min-h-[600px] flex-col overflow-hidden bg-navy-950"
      aria-label="Muslim Medical Mission"
    >
      {/* Photography */}
      <div className="absolute inset-0 -z-20">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <img
              src={s.image}
              alt={i === active ? s.alt : ""}
              className={`h-full w-full object-cover brightness-[1.07] saturate-[1.06] ${
                i === active ? "animate-slow-zoom" : ""
              }`}
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>

      {/* Light-touch scrims: a soft anchor on the left for the headline and a
         gentle fade at the foot for the operations bar. The photograph itself
         stays clearly visible across the rest of the frame. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/72 via-navy-950/28 to-navy-950/5"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/15"
        aria-hidden
      />

      {/* Statement */}
      <div className="flex flex-1 items-center pt-28 sm:pt-32">
        <div className="shell-wide">
          <h1 className="text-[clamp(2.05rem,4.9vw,3.9rem)] leading-[1.04] text-white [text-shadow:0_2px_24px_rgba(10,23,48,0.55)]">
            <span className="block max-w-[15ch]">The nearest doctor is four hours away.</span>
            <span className="mt-1 block text-cyan-accent [text-shadow:0_2px_24px_rgba(10,23,48,0.55)]">
              So we bring the clinic.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(0.98rem,1.2vw,1.12rem)] leading-relaxed text-white/95 [text-shadow:0_1px_14px_rgba(10,23,48,0.6)]">
            A volunteer network of Muslim doctors, paramedics and students, running free medical
            camps where the health system does not reach and moving first when a district floods.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2.5 bg-magenta-brand px-8 py-4 font-display font-bold text-white shadow-[0_18px_40px_-16px_rgba(224,31,38,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-magenta-deep"
            >
              Fund a camp
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/what-we-do"
              className="group inline-flex items-center gap-2.5 border-2 border-white/40 px-8 py-4 font-display font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              See the work
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Operations bar, pinned to the foot of the viewport */}
      <div
        className="relative border-t border-white/15 bg-navy-950/45 backdrop-blur-md"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="shell-wide">
          <ul className="no-scrollbar flex overflow-x-auto">
            {slides.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.id} className="shrink-0 border-r border-white/10 last:border-r-0 sm:min-w-0 sm:flex-1">
                  <div className="flex h-full items-stretch">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={on}
                      aria-label={`Show ${s.operation}, ${s.place}`}
                      className="relative w-[190px] px-4 py-4 text-left transition-colors duration-300 hover:bg-white/8 sm:w-auto sm:flex-1 sm:px-6 sm:py-5"
                    >
                      <span
                        className={`block font-display text-[0.95rem] font-bold whitespace-nowrap transition-colors sm:text-[1.02rem] ${
                          on ? "text-white" : "text-navy-100"
                        }`}
                      >
                        {s.operation}
                      </span>
                      <span className="mt-0.5 block text-[0.8rem] whitespace-nowrap text-navy-300">
                        {s.place}
                      </span>

                      <span
                        className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-white/10"
                        aria-hidden
                      >
                        <span
                          key={`${s.id}-${active}-${paused}`}
                          className="block h-full origin-left bg-cyan-accent"
                          style={
                            on
                              ? {
                                  animation: `hero-progress ${DURATION}ms linear forwards`,
                                  animationPlayState: paused ? "paused" : "running",
                                }
                              : { transform: "scaleX(0)" }
                          }
                        />
                      </span>
                    </button>

                    <Link
                      href={s.href}
                      aria-label={`Open ${s.operation}`}
                      className={`hidden shrink-0 items-center px-4 transition-colors sm:flex ${
                        on ? "text-cyan-accent" : "text-navy-300"
                      } hover:bg-white/8 hover:text-white`}
                    >
                      <Arrow />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
