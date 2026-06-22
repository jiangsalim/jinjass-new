import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { siteSettingsQuery, navigationQuery, footerSettingsQuery } from "@/lib/queries";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: { default: "Jinja Senior Secondary School | Excellence in Education", template: "%s | Jinja Senior Secondary School" },
  description: "Jinja Senior Secondary School (JINJA SS) — Nurturing future leaders since 1948.",
  icons: { icon: "/badge.png", apple: "/badge.png" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [siteSettings, navigation, footerSettings] = await Promise.all([
    client.fetch(siteSettingsQuery).catch(() => null),
    client.fetch(navigationQuery).catch(() => null),
    client.fetch(footerSettingsQuery).catch(() => null),
  ]);
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-body bg-white dark:bg-navy text-charcoal dark:text-gray-300 antialiased transition-colors duration-300">
        <LayoutWrapper siteSettings={siteSettings} navigation={navigation} footerSettings={footerSettings}>
          {children}
        </LayoutWrapper>
        <BackToTop />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}