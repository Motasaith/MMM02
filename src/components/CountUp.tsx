"use client";

import { useEffect, useRef, useState } from "react";
import { onEnter, prefersReducedMotion } from "@/lib/inView";

type CountUpProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({ to, suffix = "", duration = 1600, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    let frame = 0;

    const stop = onEnter(el, 0.2, () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(easeOut(progress) * to));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });

    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}
