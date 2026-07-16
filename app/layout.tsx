import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { siteSettingsQuery, navigationQuery, footerSettingsQuery } from "@/lib/queries";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Jinja Senior Secondary School | Excellence in Education",
    template: "%s | Jinja Senior Secondary School",
  },
  description:
    "Jinja Senior Secondary School (JINJA SS) — Nurturing future leaders through academic excellence, discipline, and innovation since 1948.",
  icons: {
    icon: [
      { url: "/badge.png", sizes: "32x32", type: "image/png" },
      { url: "/badge.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/badge.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/badge.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  openGraph: {
    title: "Jinja Senior Secondary School | Excellence in Education",
    description: "Nurturing future leaders since 1948.",
    images: [{ url: "/badge.png", width: 512, height: 512 }],
    type: "website",
    locale: "en_UG",
    siteName: "Jinja Senior Secondary School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinja Senior Secondary School",
    description: "Nurturing future leaders since 1948.",
    images: ["/badge.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteSettings, navigation, footerSettings] = await Promise.all([
    client.fetch(siteSettingsQuery).catch(() => null),
    client.fetch(navigationQuery).catch(() => null),
    client.fetch(footerSettingsQuery).catch(() => null),
  ]);

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-body bg-white dark:bg-navy text-charcoal dark:text-gray-300 antialiased transition-colors duration-300">
        <LayoutWrapper
          siteSettings={siteSettings}
          navigation={navigation}
          footerSettings={footerSettings}
        >
          {children}
        </LayoutWrapper>
        <BackToTop />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}