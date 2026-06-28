export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { galleryQuery } from "@/lib/queries";
import GalleryPageClient from "./GalleryPageClient";

export default async function GalleryPage() {
  const images = await client.fetch(galleryQuery).catch(() => []);
  return <GalleryPageClient images={images} />;
}