"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children, siteSettings, navigation, footerSettings }: any) {
  return (
    <ThemeProvider>
      <Navbar siteSettings={siteSettings} navigation={navigation} />
      <main>{children}</main>
      <Footer siteSettings={siteSettings} footerSettings={footerSettings} />
    </ThemeProvider>
  );
}