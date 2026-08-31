"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { onEnter, prefersReducedMotion } from "@/lib/inView";

type RevealProps = {
  children: ReactNode;
  /** Direction the element travels in from. */
  from?: "up" | "left" | "right" | "scale";
  /** Stagger, in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
  /**
   * How far up the viewport the element must travel before it fires,
   * as a fraction of viewport height. 0.15 fires at 85% down the screen.
   */
  amount?: number;
};

const fromClass = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
} as const;

export function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
  amount = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    return onEnter(el, amount, () => setVisible(true));
  }, [amount]);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${fromClass[from]} ${className}`}
    >
      {children}
    </Tag>
  );
}
