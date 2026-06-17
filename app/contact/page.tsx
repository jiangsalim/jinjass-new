import { client } from "@/lib/sanity";
import { contactPageQuery, siteSettingsQuery } from "@/lib/queries";
import ContactPageClient from "./ContactPageClient";

export default async function ContactPage() {
  const [contactPage, siteSettings] = await Promise.all([
    client.fetch(contactPageQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);
  return <ContactPageClient contactPage={contactPage} siteSettings={siteSettings} />;
}