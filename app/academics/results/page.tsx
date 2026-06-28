export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { unebResultsQuery } from "@/lib/queries";
import ResultsPageClient from "./ResultsPageClient";

export default async function ResultsPage() {
  const data = await client.fetch(unebResultsQuery).catch(() => null);
  return <ResultsPageClient data={data} />;
}