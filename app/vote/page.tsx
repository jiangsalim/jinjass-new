import type { Metadata } from "next";
import VotePageClient from "./VotePageClient";

export const metadata: Metadata = {
  title: "Voting Portal",
  description: "Jinja Senior Secondary School Student Voting Portal",
};

export default function VotePage() {
  return <VotePageClient />;
}