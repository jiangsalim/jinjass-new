export const revalidate = 60; // Revalidate every 60 seconds

import { client } from "@/lib/sanity";
import { unebResultsQuery, subjectCategoriesQuery } from "@/lib/queries";
import AcademicsPageClient from "./AcademicsPageClient";

export default async function AcademicsPage() {
  const [unebResults, subjectCategories] = await Promise.all([
    client.fetch(unebResultsQuery).catch(() => null),
    client.fetch(subjectCategoriesQuery).catch(() => []),
  ]);
  return <AcademicsPageClient unebResults={unebResults} subjectCategories={subjectCategories} />;
}