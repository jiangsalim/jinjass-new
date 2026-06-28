export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { subjectCategoriesQuery } from "@/lib/queries";
import SubjectsPageClient from "./SubjectsPageClient";

export default async function SubjectsPage() {
  const categories = await client.fetch(subjectCategoriesQuery).catch(() => []);
  return <SubjectsPageClient categories={categories} />;
}