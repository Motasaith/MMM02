/* ------------------------------------------------------------------ *
 * A single rAF throttled listener drives every scroll triggered effect
 * on the page.
 *
 * IntersectionObserver is the obvious choice here and it is the wrong
 * one: a fast scroll or an in page anchor jump can carry an element past
 * the viewport before the callback is delivered, and the element then
 * stays in its initial state forever. A rect check fires on anything at
 * or above the trigger line, including elements already scrolled past.
 * ------------------------------------------------------------------ */

type Entry = { el: HTMLElement; ratio: number; fire: () => void };

const watched = new Set<Entry>();
let frame = 0;
let listening = false;

function check() {
  frame = 0;
  const vh = window.innerHeight || 0;

  for (const entry of watched) {
    if (entry.el.getBoundingClientRect().top < vh * (1 - entry.ratio)) {
      watched.delete(entry);
      entry.fire();
    }
  }

  if (watched.size === 0) stop();
}

function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(check);
}

function start() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

function stop() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

/**
 * Fire `fire` once the element reaches the trigger line.
 *
 * @param ratio How far up the viewport the element must travel, as a
 *              fraction of viewport height. 0.15 fires at 85% down.
 * @returns A cleanup function.
 */
export function onEnter(el: HTMLElement, ratio: number, fire: () => void) {
  const entry: Entry = { el, ratio, fire };
  watched.add(entry);
  start();
  schedule();

  return () => {
    watched.delete(entry);
    if (watched.size === 0) stop();
  };
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
