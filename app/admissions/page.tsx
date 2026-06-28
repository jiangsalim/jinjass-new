export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { admissionsContentQuery } from "@/lib/queries";
import AdmissionsPageClient from "./AdmissionsPageClient";

export default async function AdmissionsPage() {
  const data = await client.fetch(admissionsContentQuery).catch(() => null);
  return <AdmissionsPageClient data={data} />;
}