export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { newsArticlesQuery } from "@/lib/queries";
import NewsPageClient from "./NewsPageClient";

export default async function NewsPage() {
  const newsArticles = await client.fetch(newsArticlesQuery).catch(() => []);
  return <NewsPageClient newsArticles={newsArticles} />;
}