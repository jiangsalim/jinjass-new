import { client } from "@/lib/sanity";
import { singleSportQuery } from "@/lib/queries";
import SingleSportClient from "./SingleSportClient";

export default async function SingleSportPage({ params }: any) {
  const { slug } = await params;
  const sport = await client.fetch(singleSportQuery(slug)).catch(() => null);
  return <SingleSportClient sport={sport} />;
}