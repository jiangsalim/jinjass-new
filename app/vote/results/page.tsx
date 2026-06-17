import type { Metadata } from "next";
import ResultsPageClient from "./ResultsPageClient";

export const metadata: Metadata = {
  title: "Voting Results",
  description: "Jinja SS Student Voting Results",
};

export default function ResultsPage() {
  return <ResultsPageClient />;
}