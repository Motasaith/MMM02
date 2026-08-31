import type { MetadataRoute } from "next";
import { programs } from "@/data/site";

const BASE = "https://mmm.org.pk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/what-we-do", priority: 0.9 },
    { path: "/disaster-response", priority: 0.8 },
    { path: "/donate", priority: 0.9 },
    { path: "/get-involved", priority: 0.8 },
    { path: "/media", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified: new Date(),
      priority: p.priority,
    })),
    ...programs.map((p) => ({
      url: `${BASE}/what-we-do/${p.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
