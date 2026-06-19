import type { Metadata } from "next";
import CheckBalanceClient from "./CheckBalanceClient";

export const metadata: Metadata = {
  title: "Check Fee Balance",
  description: "Check your school fee balance using your payment code",
};

export default function CheckBalancePage() {
  return <CheckBalanceClient />;
}