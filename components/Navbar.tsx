"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import HoverSearch from "@/components/HoverSearch";
import SearchModal from "@/components/SearchModal";
import { urlFor } from "@/lib/sanity";

export default function Navbar({ siteSettings, navigation }: any) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileOpen]);

  const schoolName = siteSettings?.schoolName || "";
  const tagline = siteSettings?.schoolTagline || "";
  const logo = siteSettings?.logo;
  const navLinks = navigation?.navItems || [];
  const ctaText = navigation?.ctaText || "";
  const ctaLink = navigation?.ctaLink || "/";

  return (
    <>
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-2" : "bg-transparent py-4"}`}>
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
              {logo ? <img src={urlFor(logo).width(80).height(80).url()} alt={schoolName} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                : <img src="/school-badge.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />}
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-heading font-bold leading-tight transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"} text-white`}>{schoolName}</h1>
              <p className="text-teal text-xs tracking-wider uppercase">{tagline}</p>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link: any) => (
              <div key={link.label} className="relative" onMouseEnter={() => setActiveDropdown(link.label)} onMouseLeave={() => setActiveDropdown(null)}>
                {link.dropdown && link.dropdown.length > 0 ? (
                  <button className="px-3 py-2 text-white/80 hover:text-teal transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link href={link.href || "/"} className="px-3 py-2 text-white/80 hover:text-teal transition-colors duration-300 text-sm font-medium relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
                <AnimatePresence>
                  {link.dropdown && link.dropdown.length > 0 && activeDropdown === link.label && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white dark:bg-navy-light rounded-xl shadow-2xl overflow-hidden min-w-[180px] max-w-[280px] border border-gray-100 dark:border-navy-light">
                      {link.dropdown.map((item: any) => (
                        <Link key={item.label} href={item.href || "/"} className="block px-5 py-3 text-charcoal dark:text-gray-300 hover:bg-gray-light dark:hover:bg-navy hover:text-navy dark:hover:text-teal transition-colors duration-200 text-sm whitespace-nowrap">{item.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <HoverSearch />
            <ThemeToggle />
            <Link href={ctaLink} className="btn-primary text-sm whitespace-nowrap">{ctaText}</Link>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={() => setIsSearchOpen(true)} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="Search">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="flex flex-col gap-1.5 p-2 z-50 relative" aria-label="Toggle menu">
              <motion.span animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block transition-colors" />
              <motion.span animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-0.5 bg-white block transition-colors" />
              <motion.span animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-5 h-0.5 bg-white block transition-colors" />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-lg lg:hidden flex items-center justify-center overflow-y-auto">
            <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: 0.1 }} className="flex flex-col items-center gap-6 py-20 px-4">
              {navLinks.map((link: any, index: number) => (
                <motion.div key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.05 }}>
                  <Link href={link.href || "/"} onClick={() => setIsMobileOpen(false)} className="text-2xl text-white hover:text-teal transition-colors duration-300 font-heading text-center">{link.label}</Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}><ThemeToggle /></motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href={ctaLink} onClick={() => setIsMobileOpen(false)} className="btn-primary text-lg mt-4 inline-block">{ctaText}</Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}