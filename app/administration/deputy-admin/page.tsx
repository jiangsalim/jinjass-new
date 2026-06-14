"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function DeputyAdminProfilePage() {
  return (
    <PageTransition>
      <PageHero
        title="Ongom William Olara"
        subtitle="Deputy HM I/C Administration"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Ongom William Olara" },
        ]}
        bgImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-16">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Ongom William Olara" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: 0.2 }} className="md:col-span-2">
              <h1 className="font-heading text-3xl font-bold text-navy dark:text-white mb-2">Ongom William Olara</h1>
              <p className="text-teal font-semibold text-lg mb-6">Deputy HM I/C Administration</p>
              <div className="space-y-4 text-charcoal dark:text-gray-300 leading-relaxed">
                <p>Mr. Ongom handles the administrative operations of the school including records, logistics, and day-to-day management of school resources.</p>
                <div className="flex items-center gap-3 bg-gray-light dark:bg-navy-light rounded-xl p-4 mt-6">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-charcoal dark:text-gray-300 text-sm">0759669212</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-10"><Link href="/administration" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">← Back to Administration</Link></div>
        </div>
      </section>
    </PageTransition>
  );
}