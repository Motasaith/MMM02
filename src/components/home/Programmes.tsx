import { programs } from "@/data/site";
import { ProgramCard } from "../ProgramCard";
import { Reveal } from "../Reveal";
import { SectionHead } from "../ui";

export function Programmes() {
  const [lead, ...rest] = programs;
  const shown = rest.slice(0, 4);

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="shell-wide">
        <SectionHead
          title="Eleven programmes, one standard of care"
          lead="Some of this work is clinical and some of it is a sack of flour carried up a broken road. All of it is free at the point of delivery, and all of it is counted."
          link={{ href: "/what-we-do", label: "All programmes" }}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-12">
          <Reveal
            amount={0.08}
            className="sm:col-span-12 lg:col-span-6 lg:row-span-2"
          >
            <ProgramCard program={lead} size="feature" />
          </Reveal>

          {shown.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={60 + i * 60}
              amount={0.08}
              className="sm:col-span-6 lg:col-span-3"
            >
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
