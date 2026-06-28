export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { clubsQuery } from "@/lib/queries";
import ClubsPageClient from "./ClubsPageClient";

export default async function ClubsPage() {
  const clubs = await client.fetch(clubsQuery).catch(() => []);
  return <ClubsPageClient clubs={clubs} />;
}