import { programs } from "./site";

export type SearchEntry = {
  title: string;
  href: string;
  section: string;
  terms: string;
};

const pages: SearchEntry[] = [
  {
    title: "Who we are",
    href: "/about",
    section: "About",
    terms: "history mission vision means values founded lahore volunteer network",
  },
  {
    title: "Where we work",
    href: "/about#reach",
    section: "About",
    terms: "punjab sindh balochistan khyber pakhtunkhwa gaza districts regions",
  },
  {
    title: "Disaster response",
    href: "/disaster-response",
    section: "Response",
    terms: "flood emergency indus taunsa dera ghazi khan mangrotha deployment phases",
  },
  {
    title: "Donate",
    href: "/donate",
    section: "Give",
    terms: "zakat sadaqah bank transfer iban ubl jazzcash easypaisa unit cost",
  },
  {
    title: "How your donation is spent",
    href: "/donate#allocation",
    section: "Give",
    terms: "allocation transparency overhead administration percentage accountability",
  },
  {
    title: "Volunteer with us",
    href: "/get-involved",
    section: "Take part",
    terms: "doctor nurse paramedic pharmacist student deployment join team",
  },
  {
    title: "Partner with us",
    href: "/get-involved#partners",
    section: "Take part",
    terms: "hospital supplier pharmaceutical mosque company foundation partnership",
  },
  {
    title: "Field reports",
    href: "/media",
    section: "Media",
    terms: "news updates deployments stories reports",
  },
  {
    title: "Photo library",
    href: "/media#gallery",
    section: "Media",
    terms: "photographs gallery images pictures",
  },
  {
    title: "Contact",
    href: "/contact",
    section: "About",
    terms: "phone whatsapp email address model town lahore",
  },
];

export const searchIndex: SearchEntry[] = [
  ...programs.map((p) => ({
    title: p.title,
    href: `/what-we-do/${p.slug}`,
    section: p.region,
    terms: `${p.summary} ${p.highlights.map((h) => h.value).join(" ")}`.toLowerCase(),
  })),
  ...pages,
];

export function search(query: string, limit = 7): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const words = q.split(/\s+/);

  return searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${title} ${entry.section.toLowerCase()} ${entry.terms}`;
      let score = 0;

      for (const w of words) {
        if (title.startsWith(w)) score += 6;
        else if (title.includes(w)) score += 4;
        else if (haystack.includes(w)) score += 1;
      }

      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
