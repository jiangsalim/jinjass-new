import { client } from "@/lib/sanity";
import { sportsQuery } from "@/lib/queries";
import SportsPageClient from "./SportsPageClient";

export default async function SportsPage() {
  const sports = await client.fetch(sportsQuery).catch(() => []);
  return <SportsPageClient sports={sports} />;
}