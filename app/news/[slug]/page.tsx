import { client } from "@/lib/sanity";
import { singleNewsArticleQuery, newsArticlesQuery } from "@/lib/queries";
import SingleNewsClient from "./SingleNewsClient";

export default async function SingleNewsPage({ params }: any) {
  const { slug } = await params;
  const article = await client.fetch(singleNewsArticleQuery(slug)).catch(() => null);
  const recent = await client.fetch(newsArticlesQuery).catch(() => []);
  return <SingleNewsClient article={article} recent={recent} slug={slug} />;
}