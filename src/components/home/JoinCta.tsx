import Link from "next/link";
import { Reveal } from "../Reveal";
import { Arrow } from "../ui";

const paths = [
  {
    title: "Come on a deployment",
    body: "Doctors, dentists, nurses, paramedics and pharmacists. Students are welcome and are given real responsibility.",
    href: "/get-involved",
    cta: "Volunteer with us",
  },
  {
    title: "Fund a district",
    body: "Cover the cost of a full camp, a water run or a winter distribution, and receive the count of who it reached.",
    href: "/donate",
    cta: "Give to a programme",
  },
  {
    title: "Work with us",
    body: "Hospitals, pharmaceutical suppliers, mosques and community organisations who can move faster together.",
    href: "/get-involved#partners",
    cta: "Partner with us",
  },
];

export function JoinCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-800 py-24 lg:py-32">
      <img
        src="/media/disaster/disaster-07.jpg"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-navy-950/88"
        aria-hidden
      />

      <div className="shell-wide">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(1.9rem,4vw,3.15rem)] text-white">
            Every camp we run is limited by two things, and neither of them is willingness
          </h2>
          <p className="mt-6 text-[1.08rem] leading-relaxed text-navy-100">
            It is hands and it is medicine. If you can give either, there is a district waiting.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} amount={0.1}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.045] p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.09]"
              >
                <h3 className="font-display text-[1.25rem] font-extrabold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-100">{p.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.9rem] font-bold text-cyan-accent">
                  {p.cta}
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
