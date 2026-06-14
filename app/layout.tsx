import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jinja Senior Secondary School | Excellence in Education",
    template: "%s | Jinja Senior Secondary School",
  },
  description:
    "Jinja Senior Secondary School (JINJA SS) — Nurturing future leaders through academic excellence, discipline, and innovation since 1948. Government school offering O'Level and A'Level education in Jinja, Uganda.",
  keywords: [
    "Jinja SS",
    "Jinja Senior Secondary School",
    "school in Jinja",
    "Uganda secondary school",
    "best school Jinja",
    "O'Level",
    "A'Level",
    "boarding school Uganda",
    "government school Jinja",
  ],
  authors: [{ name: "Jinja SS ICT Department" }],
  creator: "Herman Software Solutions",
  publisher: "Jinja Senior Secondary School",
  metadataBase: new URL("https://jinjass.sc.ug"),
  openGraph: {
    type: "website",
    locale: "en_UG",
    siteName: "Jinja Senior Secondary School",
    title: "Jinja Senior Secondary School | Excellence in Education",
    description:
      "Nurturing future leaders through academic excellence, discipline, and innovation since 1948.",
    images: [
      {
        url: "/badge.png",
        width: 512,
        height: 512,
        alt: "Jinja SS Badge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinja Senior Secondary School",
    description:
      "Nurturing future leaders through academic excellence, discipline, and innovation since 1948.",
    images: ["/badge.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/badge.png",
    apple: "/badge.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body bg-white dark:bg-navy text-charcoal dark:text-gray-300 antialiased transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}