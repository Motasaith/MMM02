import type { Metadata } from "next";
import { reports } from "@/data/site";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { PageHeader, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Media and field reports",
  description:
    "Photographs and field reports from Muslim Medical Mission deployments across Pakistan and Gaza.",
};

const videos = [
  { thumb: "/media/video/video-01.jpg", title: "Medical camp, South Punjab" },
  { thumb: "/media/video/video-02.jpg", title: "Ration distribution in the flood belt" },
  { thumb: "/media/video/video-03.jpg", title: "Reaching Mangrotha after the water" },
  { thumb: "/media/video/video-04.jpg", title: "Inside a free clinic day" },
  { thumb: "/media/video/video-05.jpg", title: "Volunteers on deployment" },
  { thumb: "/media/video/video-06.jpg", title: "Winter relief handover" },
];

export default function MediaPage() {
  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "Media", href: "/media" },
        ]}
        title="What the work looks like when nobody is posing for it"
        lead="Photographs taken by our own teams on deployment, and reports written by the people who were standing in them."
        image="/media/field/national-conference-stage.jpg"
      />

      {/* Reports */}
      <section className="py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            title="Field reports"
            lead="Each one records a place, a date and a count of what was delivered."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {reports.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80} amount={0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-[#DCE2EA] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-[#075BD6]/50">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={r.image}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h3 className="font-display text-[1.35rem] sm:text-[1.48rem] leading-tight font-black text-[#0A1020] transition-colors group-hover:text-[#075BD6]">
                      {r.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[1rem] leading-relaxed text-[#4B5563]">
                      {r.excerpt}
                    </p>
                    <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.88rem] text-[#6B7280]">
                      <span className="font-bold text-[#EF3B19]">{r.kind}</span>
                      <span className="h-3 w-px bg-[#DCE2EA]" aria-hidden />
                      <span>{r.place}</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-surface py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            title="Photo library"
            lead="Over a hundred photographs from camps, distributions and emergency deployments. Select one to view it full size."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="py-24 lg:py-28">
        <div className="shell-wide">
          <SectionHead
            title="Video"
            lead="Footage from deployments, published on our YouTube channel."
            link={{ href: "https://youtube.com/@mmmpakofficial", label: "Open the channel" }}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal key={v.thumb} delay={i * 70} amount={0.08}>
                <a
                  href="https://youtube.com/@mmmpakofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lift"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={v.thumb}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <span className="absolute inset-0 grid place-items-center" aria-hidden>
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#046BD2]/90 shadow-lift transition-transform duration-400 group-hover:scale-110 group-hover:bg-[#003475]">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <p className="p-5 font-display text-[0.98rem] font-bold text-[#003475] transition-colors group-hover:text-[#046BD2]">
                    {v.title}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
