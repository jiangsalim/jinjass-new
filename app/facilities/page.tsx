export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { facilitiesQuery } from "@/lib/queries";
import FacilitiesPageClient from "./FacilitiesPageClient";

export default async function FacilitiesPage() {
  const facilities = await client.fetch(facilitiesQuery).catch(() => []);
  return <FacilitiesPageClient facilities={facilities} />;
}