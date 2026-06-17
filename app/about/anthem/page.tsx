import { client } from "@/lib/sanity";
import { singlePageQuery } from "@/lib/queries";
import AnthemPageClient from "./AnthemPageClient";

export default async function AnthemPage() {
  const page = await client.fetch(singlePageQuery("school-anthem")).catch(() => null);
  return <AnthemPageClient page={page} />;
}