"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

export default function Footer({ siteSettings, footerSettings }: any) {
  const schoolName = siteSettings?.schoolName || "";
  const tagline = siteSettings?.schoolTagline || "";
  const logo = siteSettings?.logo;
  const aboutText = footerSettings?.aboutText || "";
  const quickLinks = footerSettings?.quickLinks || [];
  const devName = footerSettings?.developerName || "";
  const devUrl = footerSettings?.developerUrl || "#";
  const address = siteSettings?.address || "";
  const email = siteSettings?.contactEmail || "";
  const phone = siteSettings?.contactPhone || "";

  return (
    <footer className="bg-navy-dark">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                {logo ? <img src={urlFor(logo).width(40).height(40).url()} alt={schoolName} className="w-8 h-8 object-contain" />
                  : <img src="/school-badge.png" alt="Logo" className="w-8 h-8 object-contain" />}
              </div>
              <div><h3 className="text-white font-heading font-bold text-lg">{schoolName}</h3><p className="text-teal text-xs tracking-wider uppercase">{tagline}</p></div>
            </div>
            <p className="text-gray-medium text-sm leading-relaxed mb-6">{aboutText}</p>
            <div className="flex items-center gap-3">
              <a href={`mailto:${email}`} className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-medium hover:text-teal hover:border-teal/30 hover:bg-teal/10 transition-all duration-300" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <a href={`tel:${phone}`} className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-medium hover:text-teal hover:border-teal/30 hover:bg-teal/10 transition-all duration-300" aria-label="Phone">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1, duration: 0.6 }}>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link: any) => (
                <li key={link.label}><Link href={link.href} className="text-gray-medium hover:text-teal transition-colors duration-300 text-sm flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />{link.label}</Link></li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2, duration: 0.6 }}>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div className="min-w-0"><p className="text-white text-sm font-medium">Address</p><p className="text-gray-medium text-sm whitespace-pre-line break-words">{address}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div className="min-w-0"><p className="text-white text-sm font-medium">Email</p><a href={`mailto:${email}`} className="text-gray-medium text-sm hover:text-teal transition-colors break-all">{email}</a></div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="min-w-0"><p className="text-white text-sm font-medium">Phone</p><a href={`tel:${phone}`} className="text-gray-medium text-sm hover:text-teal transition-colors">{phone}</a></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left sm:gap-4">
           <p suppressHydrationWarning className="text-gray-medium text-sm flex-shrink-0">&copy; {new Date().getFullYear()} {schoolName}. All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <Link href="/privacy" className="text-gray-medium hover:text-teal transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-medium hover:text-teal transition-colors text-sm">Terms</Link>
              <Link href="/sitemap" className="text-gray-medium hover:text-teal transition-colors text-sm">Sitemap</Link>
            </div>
            <p className="text-gray-medium text-sm flex-shrink-0">Developed by <a href={devUrl} target="_blank" rel="noopener noreferrer" className="text-teal font-semibold hover:text-white transition-colors duration-300">{devName}</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}