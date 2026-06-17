import { client } from "@/lib/sanity";
import { singlePageQuery } from "@/lib/queries";
import HeadTeacherPageClient from "./HeadTeacherPageClient";

export default async function HeadTeacherPage() {
  const page = await client.fetch(singlePageQuery("head-teacher")).catch(() => null);
  return <HeadTeacherPageClient page={page} />;
}