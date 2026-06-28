export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { timetablesQuery } from "@/lib/queries";
import TimetablePageClient from "./TimetablePageClient";

export default async function TimetablePage() {
  const timetables = await client.fetch(timetablesQuery).catch(() => []);
  return <TimetablePageClient timetables={timetables} />;
}