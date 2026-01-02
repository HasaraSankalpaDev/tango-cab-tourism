// app/sitemap.xml.js
import { allTours } from "@/Data/Tours"; // your tours data file

export async function GET() {
  const baseUrl = "https://tangocabssrilanka.com";

  // Static pages
  const staticPages = ["", "tour-packages", "custom-tours", "about", "contact"];

  const staticUrls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  // Dynamic tour pages
  const tourUrls = allTours
    .map(
      (tour) => `
  <url>
    <loc>${baseUrl}/tours/${tour.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${tourUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
