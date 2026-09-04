import Link from "next/link";
import { Reveal } from "../Reveal";
import { Arrow } from "../ui";

const strip = [
  { src: "/media/gaza-water/gaza-water-03.jpg", alt: "Water tanker filling containers in Gaza" },
  { src: "/media/gaza-food/gaza-food-02.png", alt: "Food parcels handed to a family in Gaza" },
  { src: "/media/gaza-winter/gaza-winter-11.jpg", alt: "A winter package delivered to a tent shelter" },
  { src: "/media/gaza-water/gaza-water-05.jpg", alt: "Drinking water delivered to a displacement camp" },
  { src: "/media/gaza-food/gaza-food-07.png", alt: "Hot meals prepared for displaced families" },
  { src: "/media/gaza-winter/gaza-winter-06.jpg", alt: "Blankets distributed before winter" },
  { src: "/media/gaza-water/gaza-water-06.jpg", alt: "Communal water tank being refilled" },
  { src: "/media/gaza-winter/gaza-winter-08.jpg", alt: "Warm clothing sized for children" },
];

export function GazaBand() {
  const loop = [...strip, ...strip];

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-20 border-b border-[#DCE2EA]">
      <div className="relative">
        <div className="shell-wide grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="text-[clamp(1.75rem,2.8vw,2.4rem)] leading-tight font-black text-[#0A1020]">
              The same teams, four thousand kilometres away
            </h2>
            <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-[#4B5563] sm:text-[1.05rem]">
              Our Gaza operation runs on the logic that keeps people alive when a health system has
              stopped functioning. Water before medicine, food before comfort, and a heavy quilt
              before the cold arrives rather than after it.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5 lg:pl-6">
            <dl className="grid grid-cols-3 gap-3 rounded-2xl border border-[#DCE2EA] bg-[#F5F7FA] p-4 shadow-xs">
              {[
                { k: "Water", v: "Trucked daily", icon: "💧" },
                { k: "Food", v: "Parcels & hot meals", icon: "🍲" },
                { k: "Winter", v: "Quilts & coats", icon: "🧥" },
              ].map((x) => (
                <div key={x.k} className="group rounded-xl p-2.5 transition-colors duration-200 hover:bg-white">
                  <span className="text-base" aria-hidden>{x.icon}</span>
                  <dt className="mt-1 font-display text-[0.94rem] font-bold text-[#075BD6]">{x.k}</dt>
                  <dd className="mt-0.5 text-xs font-medium leading-snug text-[#4B5563]">{x.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/what-we-do/gaza-field-clinics"
                className="group inline-flex items-center gap-2 rounded-full bg-[#075BD6] px-6 py-3 font-display text-[0.9rem] font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#0649B8] hover:shadow-md"
              >
                <span>Support the Gaza relief effort</span>
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/donate"
                className="font-display text-[0.88rem] font-bold text-[#075BD6] hover:text-[#0649B8] transition-colors underline underline-offset-4"
              >
                Direct emergency bank transfer
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Continuous photo rail with interactive pause on hover */}
        <div className="relative mt-12 overflow-hidden hover-pause" aria-label="Gaza operation photographs">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 sm:w-40 bg-gradient-to-r from-white to-transparent"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 sm:w-40 bg-gradient-to-l from-white to-transparent"
          />
          <ul
            className="animate-marquee flex w-max gap-4"
            style={{ "--marquee-duration": "55s" } as React.CSSProperties}
          >
            {loop.map((img, i) => (
              <li key={i} className="w-[240px] shrink-0 sm:w-[280px]">
                <div className="group relative overflow-hidden rounded-2xl border border-[#DCE2EA] bg-[#F5F7FA] shadow-sm transition-all duration-500 hover:border-[#075BD6] hover:shadow-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3.5">
                    <p className="text-xs font-semibold text-white drop-shadow-sm">{img.alt}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
