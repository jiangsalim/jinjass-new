import { client } from "@/lib/sanity";
import { announcementsQuery } from "@/lib/queries";
import AnnouncementsPageClient from "./AnnouncementsPageClient";

export default async function AnnouncementsPage() {
  const announcements = await client.fetch(announcementsQuery).catch(() => []);
  return <AnnouncementsPageClient announcements={announcements} />;
}