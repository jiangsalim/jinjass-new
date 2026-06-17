"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

function CountUp({ target, isInView }: any) {
  const [c, s] = useState(0); const r = useRef(false);
  useEffect(() => { if (isInView && !r.current) { r.current = true; const d = 2000, st = 60, inc = target / st; let cur = 0; const t = setInterval(() => { cur += inc; if (cur >= target) { s(target); clearInterval(t); } else s(Math.floor(cur)); }, d / st); return () => clearInterval(t); } if (!isInView) { r.current = false; s(0); } }, [isInView, target]);
  return <span>{c}</span>;
}

export default function UNEBResults({ unebResults }: any) {
  const [tab, setTab] = useState<"uce" | "uace">("uce");
  if (!unebResults) return null;
  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading title={`UNEB Results ${unebResults.year || ""}`} subtitle="Check out our performance in the national examinations" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} className="flex justify-center mb-10">
          <div className="bg-white dark:bg-navy-light rounded-full p-1 shadow-md inline-flex">
            <button onClick={() => setTab("uce")} className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${tab === "uce" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300"}`}>UCE</button>
            <button onClick={() => setTab("uace")} className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${tab === "uace" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300"}`}>UACE</button>
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto">
            {tab === "uce" ? (
              <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                <div className="bg-navy px-6 py-4"><h3 className="text-white font-heading font-bold text-xl">{unebResults.uceTitle}</h3></div>
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(unebResults.uceStats || []).map((s: any, i: number) => {
                      const ref = useRef(null); const iv = useInView(ref, { margin: "-50px" });
                      return (
                        <motion.div key={i} ref={ref} initial={{ opacity: 0, scale: 0.8 }} animate={iv ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ delay: i * 0.05, duration: 0.4 }}
                          className={`text-center p-4 rounded-xl ${s.label === "Total Candidates" ? "bg-teal/10 border border-teal" : "bg-gray-light dark:bg-navy"}`}>
                          <p className="text-3xl font-heading font-bold text-navy dark:text-white"><CountUp target={s.value} isInView={iv} /></p>
                          <p className="text-gray-medium dark:text-gray-400 text-xs uppercase mt-1">{s.label}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-navy rounded-2xl p-6 mb-6">
                  <h3 className="text-teal font-heading font-bold text-lg mb-4">Best Performers</h3>
                  <div className="space-y-3">{(unebResults.uaceHighlights || []).map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-3"><span className="text-teal mt-1 flex-shrink-0"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span><p className="text-white text-sm">{h}</p></div>
                  ))}</div>
                </div>
                <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                  <div className="bg-navy px-6 py-4"><h3 className="text-white font-heading font-bold text-xl">{unebResults.uaceTitle}</h3></div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {(unebResults.uaceStats || []).map((s: any, i: number) => {
                        const ref = useRef(null); const iv = useInView(ref, { margin: "-50px" });
                        return (
                          <motion.div key={i} ref={ref} initial={{ opacity: 0, scale: 0.8 }} animate={iv ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ delay: i * 0.05, duration: 0.4 }}
                            className={`text-center p-4 rounded-xl ${s.label === "Total Candidates" ? "bg-teal/10 border border-teal sm:col-span-3 lg:col-span-1" : "bg-gray-light dark:bg-navy"}`}>
                            <p className="text-3xl font-heading font-bold text-navy dark:text-white"><CountUp target={s.value} isInView={iv} /></p>
                            <p className="text-gray-medium dark:text-gray-400 text-xs uppercase mt-1">{s.label}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}