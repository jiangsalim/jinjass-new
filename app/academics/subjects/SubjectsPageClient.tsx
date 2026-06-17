"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function SubjectsPageClient({ categories }: any) {
  const [tab, setTab] = useState(0);
  if (!categories || categories.length === 0) return null;
  const c = categories[tab];
  return (
    <PageTransition>
      <PageHero title="Subjects" subtitle="A wide range of academic subjects and co-curricular activities" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics", href: "/academics" }, { label: "Subjects" }]} />
      <section className="section-white py-16"><div className="container-custom">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat: any, i: number) => (
            <button key={i} onClick={() => setTab(i)} className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${i === tab ? "bg-teal text-white shadow-lg shadow-teal/25" : "bg-gray-light dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"}`}>{cat.title}</button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }} className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
              <div className="bg-navy px-8 py-6"><h2 className="text-white font-heading font-bold text-2xl">{c.title}</h2><p className="text-gray-medium text-sm mt-1">{c.description}</p></div>
              <div className="p-8"><div className="grid sm:grid-cols-2 gap-3">{(c.subjects || []).map((s: string, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-gray-light dark:bg-navy rounded-xl px-4 py-3 hover:bg-teal/5 dark:hover:bg-navy-light hover:border-teal/20 border border-transparent transition-all duration-300 group"><span className="w-2 h-2 bg-teal rounded-full group-hover:scale-125 transition-transform" /><span className="text-charcoal dark:text-gray-300 text-sm font-medium">{s}</span></div>
              ))}</div></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div></section>
    </PageTransition>
  );
}