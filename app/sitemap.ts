import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.libertybaptistpb.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/plan-your-visit",
    "/way-to-heaven",
    "/about-pastor",
    "/statement-of-faith",
    "/media",
    "/calendar",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
