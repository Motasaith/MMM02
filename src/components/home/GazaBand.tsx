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
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-28">
      {/* No large Gaza photograph exists in the library, so the ground is
          built from light rather than a stretched low resolution image. */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(75% 60% at 12% 0%, rgba(0,146,221,0.28), transparent 62%), radial-gradient(60% 55% at 92% 12%, rgba(221,18,123,0.2), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="shell-wide grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="text-[clamp(1.9rem,4vw,3.15rem)] text-white">
              The same teams, four thousand kilometres away
            </h2>
            <p className="mt-6 max-w-2xl text-[1.06rem] leading-relaxed text-navy-100">
              Our Gaza operation runs on the logic that keeps people alive when a health system has
              stopped functioning. Water before medicine, food before comfort, and a heavy quilt
              before the cold arrives rather than after it.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <dl className="grid grid-cols-3 gap-5 border-t border-white/15 pt-6">
              {[
                { k: "Water", v: "Trucked daily" },
                { k: "Food", v: "Parcels and hot meals" },
                { k: "Winter", v: "Quilts and clothing" },
              ].map((x) => (
                <div key={x.k}>
                  <dt className="font-display text-[1rem] font-extrabold text-cyan-accent">{x.k}</dt>
                  <dd className="mt-1.5 text-[0.88rem] leading-snug text-navy-100">{x.v}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/what-we-do/gaza-field-clinics"
              className="group mt-7 inline-flex items-center gap-2 font-display font-bold text-white"
            >
              <span className="link-underline">See the Gaza programmes</span>
              <Arrow className="text-cyan-accent transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Continuous photo rail */}
        <div className="relative mt-16 overflow-hidden" aria-hidden>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent"
          />
          <ul className="animate-marquee flex w-max gap-4" style={{ "--marquee-duration": "58s" } as React.CSSProperties}>
            {loop.map((img, i) => (
              <li key={i} className="w-[260px] shrink-0 sm:w-[300px]">
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover opacity-85 grayscale-[0.15] transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
