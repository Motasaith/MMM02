import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F6FC] via-[#F8FAFC] to-white pt-24">
      <img
        src="/media/disaster/disaster-13.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
      />
      <div className="shell-wide py-24">
        <h1 className="max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold text-[#003475]">
          This road does not go through
        </h1>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[#334155]">
          The page you were looking for has moved or never existed. The work carries on either way.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Back to the home page
          </Button>
          <Button href="/what-we-do" variant="outline">
            See the programmes
          </Button>
        </div>
      </div>
    </section>
  );
}
