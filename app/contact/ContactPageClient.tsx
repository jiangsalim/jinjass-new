"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ContactPageClient({ contactPage, siteSettings }: any) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => { e.preventDefault(); setLoading(true);
    try { const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }); const d = await r.json();
      if (r.ok) { setStatus({ type: "success", message: d.message }); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); } else setStatus({ type: "error", message: d.error });
    } catch { setStatus({ type: "error", message: "Failed to send." }); } finally { setLoading(false); } };

  return (
    <PageTransition>
      <PageHero title={contactPage?.pageTitle || "Contact Us"} subtitle={contactPage?.pageSubtitle || ""} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <section className="section-white py-12 sm:py-16 md:py-20">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} className="lg:col-span-1 space-y-5 sm:space-y-6">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white mb-4 sm:mb-6">Get in Touch</h2>
              {(contactPage?.contactCards || []).map((c: any, i: number) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-navy dark:text-white text-sm mb-1">{c.label}</h3>
                    {c.href ? <a href={c.href} className="text-charcoal dark:text-gray-300 hover:text-teal transition-colors text-sm break-all">{c.value}</a> : <p className="text-charcoal dark:text-gray-300 text-sm break-words">{c.value}</p>}
                    {c.secondary && <p className="text-gray-medium dark:text-gray-400 text-xs sm:text-sm mt-0.5">{c.secondary}</p>}
                  </div>
                </div>
              ))}
              {siteSettings?.googleMapsEmbed && (
                <div className="mt-6 sm:mt-8 rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64 w-full">
                  <iframe src={siteSettings.googleMapsEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location" />
                </div>
              )}
            </motion.div>

            {/* Right Column - Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} className="lg:col-span-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white mb-4 sm:mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div><label className="block text-sm font-medium text-navy dark:text-white mb-1.5 sm:mb-2">Full Name *</label><input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm" placeholder="Your full name" /></div>
                  <div><label className="block text-sm font-medium text-navy dark:text-white mb-1.5 sm:mb-2">Email *</label><input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm" placeholder="your@email.com" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div><label className="block text-sm font-medium text-navy dark:text-white mb-1.5 sm:mb-2">Phone</label><input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm" placeholder="+256 7XX XXXXXX" /></div>
                  <div><label className="block text-sm font-medium text-navy dark:text-white mb-1.5 sm:mb-2">Subject</label><input type="text" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm" placeholder="How can we help?" /></div>
                </div>
                <div><label className="block text-sm font-medium text-navy dark:text-white mb-1.5 sm:mb-2">Message *</label><textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none text-sm" placeholder="Type your message..." /></div>
                {status && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400" : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"}`}>{status.message}</motion.div>}
                <button type="submit" disabled={loading} className="btn-primary text-sm sm:text-base w-full sm:w-auto disabled:opacity-60">{loading ? "Sending..." : "Send Message"}</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <BreadcrumbSchema
                   items={[
                    { name: "Home", url: "/" },
                    { name: "About", url: "/about" },
                    { name: "School History", url: "/about/history" },
                    { name: "Contact", url: "/contact" }
                 ]}
      />
    </PageTransition>
  );
}