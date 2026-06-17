import { client } from "@/lib/sanity";
import { staffQuery } from "@/lib/queries";
import AdministrationPageClient from "./AdministrationPageClient";

export default async function AdministrationPage() {
  const staff = await client.fetch(staffQuery).catch(() => []);
  return <AdministrationPageClient staff={staff} />;
}