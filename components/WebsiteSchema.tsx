export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jinja Senior Secondary School",
    url: "https://jinjass-new.vercel.app",
    description:
      "Jinja Senior Secondary School (JINJA SS) — Nurturing future leaders through academic excellence, discipline, and innovation since 1948.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://jinjass-new.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}