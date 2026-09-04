"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { gallery, galleryGroups } from "@/data/gallery";

const filters = [{ key: "all", label: "Everything" }, ...galleryGroups] as const;

export function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [shown, setShown] = useState(24);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((g) => g.group === filter)),
    [filter],
  );

  const visible = items.slice(0, shown);

  const move = useCallback(
    (step: number) => {
      setLightbox((current) => {
        if (current === null) return current;
        return (current + step + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, move]);

  const label = (key: string) =>
    galleryGroups.find((g) => g.key === key)?.label ?? "Field work";

  return (
    <div>
      {/* Filters */}
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
        {filters.map((f) => {
          const on = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => {
                setFilter(f.key);
                setShown(24);
              }}
              aria-pressed={on}
              className={`shrink-0 rounded-full px-5 py-2.5 font-display text-[0.88rem] font-bold transition-all duration-300 ${
                on
                  ? "bg-[#046BD2] text-white shadow-sm"
                  : "bg-slate-100 text-[#334155] hover:bg-blue-50 hover:text-[#046BD2]"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Masonry style columns keep the portrait and landscape shots honest */}
      <div className="mt-9 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {visible.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid"
            aria-label={`Open photograph, ${label(item.group)}`}
          >
            <img
              src={item.src}
              alt=""
              loading="lazy"
              className="w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <span
              className="absolute inset-0 bg-[#003475]/0 transition-colors duration-400 group-hover:bg-[#003475]/40"
              aria-hidden
            />
            <span className="absolute bottom-3 left-3 translate-y-2 font-display text-[0.78rem] font-bold text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
              {label(item.group)}
            </span>
          </button>
        ))}
      </div>

      {shown < items.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShown((s) => s + 24)}
            className="rounded-full border-2 border-slate-300 px-8 py-3.5 font-display font-bold text-[#334155] transition-colors hover:border-[#046BD2] hover:text-[#046BD2] hover:bg-blue-50/50"
          >
            Show more photographs
            <span className="ml-2 text-slate-400">
              {visible.length} of {items.length}
            </span>
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/94 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:left-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={items[lightbox].src}
              alt=""
              className="mx-auto max-h-[78vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-[0.9rem] font-bold text-white">
              {label(items[lightbox].group)}
              <span className="ml-3 font-sans font-normal text-navy-300">
                {items[lightbox].region}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Next"
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:right-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
