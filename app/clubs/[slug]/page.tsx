export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { singleClubQuery } from "@/lib/queries";
import SingleClubClient from "./SingleClubClient";

export default async function SingleClubPage({ params }: any) {
  const { slug } = await params;
  const club = await client.fetch(singleClubQuery(slug)).catch(() => null);
  return <SingleClubClient club={club} />;
}