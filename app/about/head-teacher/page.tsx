import { client } from "@/lib/sanity";
import { staffQuery } from "@/lib/queries";
import HeadTeacherPageClient from "./HeadTeacherPageClient";

export default async function HeadTeacherPage() {
  const staff = await client.fetch(staffQuery).catch(() => []);
  const headTeacher = staff.find((s: any) => s.title?.toLowerCase().includes("head teacher")) || null;
  return <HeadTeacherPageClient headTeacher={headTeacher} />;
}