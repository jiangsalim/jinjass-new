"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function SubjectsSection({ subjectCategories }: any) {
  const [tab, setTab] = useState(0);
  if (!subjectCategories || subjectCategories.length === 0) return null;
  const current = subjectCategories[tab];
  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading title="What We Teach" subtitle="A wide range of academic subjects and co-curricular activities" />
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {subjectCategories.map((cat: any, i: number) => (
            <button key={i} onClick={() => setTab(i)} className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${i === tab ? "bg-teal text-white shadow-lg shadow-teal/25" : "bg-white dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"}`}>{cat.title}</button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
              <div className="bg-navy px-8 py-6"><h3 className="text-white font-heading font-bold text-xl">{current.title}</h3><p className="text-gray-medium text-sm mt-1">{current.description}</p></div>
              <div className="p-8">
                <div className="grid sm:grid-cols-2 gap-3">{(current.subjects || []).map((s: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-light dark:bg-navy rounded-xl px-4 py-3 hover:bg-teal/5 dark:hover:bg-navy-light hover:border-teal/20 border border-transparent transition-all duration-300 group">
                    <span className="w-2 h-2 bg-teal rounded-full group-hover:scale-125 transition-transform" /><span className="text-charcoal dark:text-gray-300 text-sm font-medium">{s}</span>
                  </div>
                ))}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}