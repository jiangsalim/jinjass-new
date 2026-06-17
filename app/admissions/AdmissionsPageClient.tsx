"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function AdmissionsPageClient({ data }: any) {
  if (!data) return null;
  return (
    <PageTransition>
      <PageHero title="Admissions" subtitle="Join the mighty school" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]} />
      <section className="section-white py-16"><div className="container-custom max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">{data.introTitle}</h2>
          <p className="text-charcoal dark:text-gray-300 leading-relaxed mb-6">{data.introText}</p>
          <Link href="/contact" className="btn-primary">Enquire Now</Link>
        </motion.div>
      </div></section>
      <section className="section-gray py-16"><div className="container-custom">
        <h2 className="font-heading text-3xl text-center font-bold text-navy dark:text-white mb-12">Admission Requirements</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[{ title: "O'Level Entry (S1)", items: data.oLevelRequirements }, { title: "A'Level Entry (S5)", items: data.aLevelRequirements }].map((r, i) => (
            <div key={i} className="bg-white dark:bg-navy-light rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-navy-light">
              <h3 className="font-heading font-bold text-xl text-navy dark:text-white mb-4">{r.title}</h3>
              <ul className="space-y-3">{(r.items || []).map((item: string, j: number) => (
                <li key={j} className="flex items-start gap-3 text-sm"><svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-charcoal dark:text-gray-300">{item}</span></li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div></section>
      <section className="section-white py-16"><div className="container-custom">
        <h2 className="font-heading text-3xl text-center font-bold text-navy dark:text-white mb-12">Application Process</h2>
        <div className="max-w-3xl mx-auto">{(data.applicationSteps || []).map((s: any, i: number) => (
          <div key={i} className="flex gap-6 mb-8"><div className="flex-shrink-0 w-14 h-14 bg-teal rounded-2xl flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg shadow-teal/25">{s.step}</div>
            <div className="bg-gray-light dark:bg-navy-light rounded-2xl p-6 flex-1"><h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-2">{s.title}</h3><p className="text-charcoal dark:text-gray-300 text-sm">{s.description}</p></div></div>
        ))}</div>
      </div></section>
      <section className="section-navy py-16"><div className="container-custom max-w-3xl">
        <h2 className="font-heading text-3xl text-center font-bold text-white mb-12">FAQs</h2>
        <div className="space-y-4">{(data.faqs || []).map((f: any, i: number) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"><h3 className="font-heading font-bold text-lg text-white mb-3">{f.question}</h3><p className="text-gray-medium text-sm">{f.answer}</p></div>
        ))}</div>
      </div></section>
      <section className="section-white py-16"><div className="container-custom text-center">
        <h2 className="font-heading text-3xl font-bold text-navy dark:text-white mb-4">{data.ctaTitle}</h2>
        <p className="text-charcoal dark:text-gray-300 max-w-xl mx-auto mb-8">{data.ctaText}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Contact Admissions</Link>
          <a href={`tel:${data.ctaPhone}`} className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">Call: {data.ctaPhone}</a>
        </div>
      </div></section>
    </PageTransition>
  );
}