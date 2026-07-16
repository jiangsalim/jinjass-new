export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Jinja Senior Secondary School",
    alternateName: "Jinja SS",
    url: "https://jinjass-new.vercel.app",
    logo: "https://jinjass-new.vercel.app/badge.png",
    description:
      "Jinja Senior Secondary School (JINJA SS) is a government school offering O'Level and A'Level education to day and boarding scholars. Founded in 1948.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "School Lane, Plot 124 Madhvani Market",
      addressLocality: "Jinja City",
      postalCode: "P.O. Box 255",
      addressCountry: "UG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+256701044833",
      contactType: "admissions",
    },
    sameAs: ["https://jinjass-new.vercel.app"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}