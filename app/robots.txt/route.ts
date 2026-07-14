export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jinjass-new.vercel.app";

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml

# Disallow admin areas
Disallow: /api/
Disallow: /admin/
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}