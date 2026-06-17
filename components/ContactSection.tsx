"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection({ siteSettings }: any) {
  const addr = siteSettings?.address || "";
  const email = siteSettings?.contactEmail || "";
  const phone = siteSettings?.contactPhone || "";
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <SectionHeading title="Get in Touch" subtitle="We'd love to hear from you. Reach out through any of the channels below." />
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.6 }} className="space-y-4">
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                <div><h3 className="font-heading font-bold text-lg mb-2">Our Location</h3><p className="text-gray-medium text-sm leading-relaxed whitespace-pre-line">{addr}</p></div>
              </div>
            </div>
            {[
              { label: "Email", value: email, href: `mailto:${email}`, icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
              { label: "Phone", value: phone, href: `tel:${phone}`, icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
            ].map((c, i) => (
              <div key={i} className="bg-gray-light dark:bg-navy-light rounded-xl p-5 hover:shadow-md transition-shadow border border-gray-100 dark:border-navy-light">
                <div className="flex items-start gap-4"><div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center text-teal flex-shrink-0">{c.icon}</div>
                  <div><h4 className="font-semibold text-navy dark:text-white text-sm mb-1">{c.label}</h4><a href={c.href} className="text-charcoal dark:text-gray-300 text-sm font-medium hover:text-teal transition-colors">{c.value}</a></div></div>
              </div>
            ))}
            <Link href="/e-report" className="flex items-center justify-center gap-2 bg-teal text-white text-center font-semibold py-4 px-6 rounded-xl hover:bg-teal-dark transition-colors duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Report Card
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.6 }} className="h-full min-h-[500px]">
            <div className="bg-gray-light dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg h-full border border-gray-100 dark:border-navy-light">
              {siteSettings?.googleMapsEmbed && <iframe src={siteSettings.googleMapsEmbed} width="100%" height="100%" style={{ border: 0, minHeight: "500px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="School Location" className="w-full h-full" />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}