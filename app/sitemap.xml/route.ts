import { MetadataRoute } from "next";

export async function GET() {
  const baseUrl = "https://jinjass.sc.ug";

  const pages = [
    { url: "/", priority: 1.0 },
    { url: "/about/history", priority: 0.8 },
    { url: "/about/head-teacher", priority: 0.7 },
    { url: "/about/anthem", priority: 0.6 },
    { url: "/academics", priority: 0.9 },
    { url: "/academics/subjects", priority: 0.8 },
    { url: "/academics/results", priority: 0.8 },
    { url: "/academics/timetable", priority: 0.7 },
    { url: "/news", priority: 0.9 },
    { url: "/gallery", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/admissions", priority: 0.9 },
    { url: "/sports", priority: 0.7 },
    { url: "/sports/football", priority: 0.6 },
    { url: "/sports/netball", priority: 0.6 },
    { url: "/sports/cricket", priority: 0.6 },
    { url: "/sports/volleyball", priority: 0.6 },
    { url: "/clubs", priority: 0.7 },
    { url: "/clubs/debate", priority: 0.5 },
    { url: "/clubs/scripture-union", priority: 0.5 },
    { url: "/clubs/writers", priority: 0.5 },
    { url: "/clubs/wildlife", priority: 0.5 },
    { url: "/clubs/science", priority: 0.5 },
    { url: "/clubs/ict", priority: 0.5 },
    { url: "/clubs/red-cross", priority: 0.5 },
    { url: "/administration", priority: 0.7 },
    { url: "/e-learn", priority: 0.6 },
    { url: "/e-report", priority: 0.6 },
    { url: "/privacy", priority: 0.3 },
    { url: "/terms", priority: 0.3 },
    { url: "/sitemap", priority: 0.4 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}