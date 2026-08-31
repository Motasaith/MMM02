import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-navy-950">
      <img
        src="/media/disaster/disaster-13.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="shell-wide py-24">
        <h1 className="max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] text-white">
          This road does not go through
        </h1>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-navy-100">
          The page you were looking for has moved or never existed. The work carries on either way.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/" variant="donate">
            Back to the home page
          </Button>
          <Button href="/what-we-do" variant="ghost">
            See the programmes
          </Button>
        </div>
      </div>
    </section>
  );
}
