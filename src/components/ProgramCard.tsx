import Link from "next/link";
import type { Program } from "@/data/site";
import { Arrow, accentBar } from "./ui";

/* Programmes we hold no honest photography for get a drawn panel instead of
   a borrowed picture. Miscaptioning a Gaza clinic as a Pakistani prison
   round would be the exact kind of thing this site exists to avoid. */
const drawnGround: Record<Program["accent"], string> = {
  blue: "radial-gradient(120% 90% at 15% 0%, #0092dd 0%, #12417c 55%, #0f1f42 100%)",
  magenta: "radial-gradient(120% 90% at 15% 0%, #dd127b 0%, #7a1a5c 55%, #0f1f42 100%)",
  navy: "radial-gradient(120% 90% at 15% 0%, #2a4d8f 0%, #172d57 55%, #0a1730 100%)",
  cyan: "radial-gradient(120% 90% at 15% 0%, #40d9f1 0%, #0b7fa8 55%, #0f1f42 100%)",
};

function DrawnPanel({ program, feature }: { program: Program; feature: boolean }) {
  return (
    <div
      className={`relative overflow-hidden ${
        feature ? "min-h-[300px] flex-1" : "aspect-[16/11] shrink-0"
      }`}
      style={{ backgroundImage: drawnGround[program.accent] }}
      aria-hidden
    >
      {/* Concentric rings, a quiet nod to a stethoscope diaphragm */}
      <svg
        viewBox="0 0 400 260"
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="white" strokeWidth="1">
          {[36, 62, 88, 114, 140, 166].map((r) => (
            <circle key={r} cx="330" cy="46" r={r} strokeOpacity={0.55 - r / 420} />
          ))}
        </g>
      </svg>

      <span className="absolute bottom-4 left-4 bg-white/95 px-3.5 py-1.5 font-display text-[0.82rem] font-bold text-navy-800">
        {program.region}
      </span>
    </div>
  );
}

export function ProgramCard({
  program,
  size = "standard",
}: {
  program: Program;
  size?: "standard" | "feature";
}) {
  const feature = size === "feature";

  return (
    <Link
      href={`/what-we-do/${program.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-transparent"
    >
      {program.image ? (
        <div
          className={`relative overflow-hidden ${
            feature ? "min-h-[300px] flex-1" : "aspect-[16/11] shrink-0"
          }`}
        >
          <img
            src={program.image}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          />
          <span
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/70 to-transparent"
            aria-hidden
          />
          <span className="absolute bottom-4 left-4 bg-white/95 px-3.5 py-1.5 font-display text-[0.82rem] font-bold text-navy-800">
            {program.region}
          </span>
        </div>
      ) : (
        <DrawnPanel program={program} feature={feature} />
      )}

      <span className={`h-1 w-full shrink-0 ${accentBar[program.accent]}`} aria-hidden />

      <div className={`flex flex-col ${feature ? "shrink-0 p-8" : "flex-1 p-6"}`}>
        <h3
          className={`font-display font-extrabold text-navy-800 transition-colors group-hover:text-blue-brand ${
            feature ? "text-[1.55rem]" : "text-[1.2rem]"
          }`}
        >
          {program.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-slate-body ${
            feature ? "text-[1.02rem]" : "text-[0.93rem]"
          }`}
        >
          {program.summary}
        </p>

        {/* On the tall feature card the facts fill the space a stretched
            paragraph would otherwise leave empty. */}
        {feature && (
          <dl className="mt-7 grid gap-x-6 gap-y-4 border-t border-line pt-6 sm:grid-cols-3">
            {program.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-[0.78rem] leading-snug text-slate-muted">{h.label}</dt>
                <dd className="mt-1 font-display text-[1.05rem] font-extrabold text-navy-800">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <span className={`inline-flex items-center gap-2 font-display text-[0.88rem] font-bold text-blue-brand ${feature ? "mt-7" : "mt-auto pt-6"}`}>
          Read the programme
          <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
