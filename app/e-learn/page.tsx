"use client";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function ELearnPage() {
  return (
    <PageTransition>
      <PageHero title="E-Learning" subtitle="Access digital learning resources and online classes" breadcrumbs={[{ label: "Home", href: "/" }, { label: "E-Learning" }]} />
      <section className="section-white py-20"><div className="container-custom max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }}>
          <div className="w-20 h-20 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg></div>
          <h2 className="font-heading text-3xl font-bold text-navy dark:text-white mb-4">Digital Learning Platform</h2>
          <p className="text-charcoal dark:text-gray-300 mb-8">Our e-learning portal provides students with access to digital learning materials, online assignments, and virtual classrooms.</p>
          <a href="#" className="btn-primary inline-flex items-center gap-2">Access E-Learning Portal <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
        </motion.div>
      </div></section>
    </PageTransition>
  );
}