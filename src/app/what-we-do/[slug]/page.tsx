import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs, programBySlug } from "@/data/site";
import { ProgramCard } from "@/components/ProgramCard";
import { Reveal } from "@/components/Reveal";
import { Arrow, PageHeader, accentBar } from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) return { title: "Programme not found" };

  return {
    title: program.title,
    description: program.summary,
    openGraph: {
      title: program.title,
      description: program.summary,
      ...(program.image ? { images: [program.image] } : {}),
    },
  };
}

export default async function ProgramPage({ params }: Params) {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "What we do", href: "/what-we-do" },
          { label: program.title, href: `/what-we-do/${program.slug}` },
        ]}
        title={program.title}
        lead={program.summary}
        image={program.image}
      />

      {/* Facts strip */}
      <section className="relative z-10 -mt-14">
        <div className="shell-wide">
          <dl className="grid overflow-hidden rounded-2xl bg-white shadow-[0_28px_60px_-28px_rgba(10,23,48,0.45)] sm:grid-cols-3 sm:divide-x sm:divide-line">
            {program.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 80} as="div" className="p-7">
                <dt className="text-[0.88rem] text-slate-muted">{h.label}</dt>
                <dd className="mt-2.5 font-display text-[1.35rem] font-extrabold text-navy-800">
                  {h.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 lg:py-28">
        <div className="shell-wide grid gap-14 lg:grid-cols-12">
          <div className={program.gallery.length ? "lg:col-span-7" : "lg:col-span-8"}>
            <Reveal>
              <span className={`block h-1 w-16 ${accentBar[program.accent]}`} aria-hidden />
            </Reveal>
            <div className="rich mt-8 text-[1.06rem]">
              {program.body.map((para, i) => (
                <Reveal key={i} delay={i * 60} as="p" className="mb-5">
                  {para}
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/donate"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#046BD2] px-7 py-3.5 font-display font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003475]"
                >
                  Fund this programme
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-slate-300 px-7 py-3.5 font-display font-bold text-[#003475] transition-colors hover:border-[#046BD2] hover:text-[#046BD2] hover:bg-blue-50/50"
                >
                  Join a deployment
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Gallery rail, only where real photographs of this work exist */}
          <div className={`lg:col-span-4 lg:col-start-9 ${program.gallery.length ? "" : "hidden"}`}>
            <Reveal from="right">
              <h2 className="font-display text-[1.15rem] font-extrabold text-[#003475]">
                From this programme
              </h2>
              <span className="mt-3 block h-0.5 w-10 bg-[#046BD2]" aria-hidden />
            </Reveal>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {program.gallery.map((src, i) => (
                <Reveal key={src} delay={i * 70} amount={0.05} className="overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="shell-wide">
          <Reveal>
            <div className="flex items-center gap-5">
              <h2 className="font-display text-[1.5rem] font-extrabold text-[#003475]">
                Other programmes
              </h2>
              <span className="h-px flex-1 bg-slate-200" aria-hidden />
              <Link
                href="/what-we-do"
                className="group inline-flex items-center gap-2 font-display text-[0.9rem] font-bold text-[#046BD2]"
              >
                <span className="link-underline">See all</span>
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70} amount={0.08}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
