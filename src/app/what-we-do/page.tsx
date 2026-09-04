import type { Metadata } from "next";
import { programs } from "@/data/site";
import { ProgramCard } from "@/components/ProgramCard";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Free medical camps, Save Vision, prison healthcare, health education, disaster relief, rations, clean water, winter packages and paramedic training.",
};

const groups = [
  { region: "Pakistan", heading: "In Pakistan" },
  { region: "Gaza", heading: "In Gaza" },
  { region: "Pakistan and Gaza", heading: "Across both" },
] as const;

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        crumb={[
          { label: "Home", href: "/" },
          { label: "What we do", href: "/what-we-do" },
        ]}
        title="Eleven programmes, run by people who show up in person"
        lead="Each one exists because a team came back from a district and said the thing we were doing was not enough. None of them charge a patient anything."
        image="/media/disaster/disaster-06.jpg"
      />

      <div className="py-24 lg:py-28">
        {groups.map((group, gi) => {
          const items = programs.filter((p) => p.region === group.region);
          if (!items.length) return null;

          return (
            <section key={group.region} className={gi > 0 ? "mt-20" : ""}>
              <div className="shell-wide">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <h2 className="font-display text-[1.6rem] font-extrabold text-[#003475]">
                      {group.heading}
                    </h2>
                    <span className="h-px flex-1 bg-slate-200" aria-hidden />
                    <span className="font-display text-[0.8rem] font-bold text-[#7A7A7A]">
                      {items.length} {items.length === 1 ? "programme" : "programmes"}
                    </span>
                  </div>
                </Reveal>

                <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 70} amount={0.08}>
                      <ProgramCard program={p} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
