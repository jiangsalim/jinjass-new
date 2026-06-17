import { client } from "@/lib/sanity";
import { singleStaffQuery } from "@/lib/queries";
import StaffProfileClient from "./StaffProfileClient";

export default async function StaffProfilePage({ params }: any) {
  const { slug } = await params;
  const member = await client.fetch(singleStaffQuery(slug)).catch(() => null);
  return <StaffProfileClient member={member} />;
}