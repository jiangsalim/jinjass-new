import { client } from "@/lib/sanity";
import { singlePageQuery } from "@/lib/queries";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import HistoryPageClient from "./HistoryPageClient";

export default async function HistoryPage() {
  const page = await client.fetch(singlePageQuery("school-history")).catch(() => null);
  return <HistoryPageClient page={page} />;
}