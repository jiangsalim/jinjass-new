"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function FeesSection({ feeStructure }: any) {
  const [tab, setTab] = useState<"o" | "a">("o");
  if (!feeStructure) return null;
  const d = tab === "o" ? { newDay: feeStructure.oLevelNewDay, newHostel: feeStructure.oLevelNewHostel, newUBoys: feeStructure.oLevelNewUniformBoys, newUGirls: feeStructure.oLevelNewUniformGirls, newUHostel: feeStructure.oLevelNewHostelUniform, contDay: feeStructure.oLevelContinuingDay, contHostel: feeStructure.oLevelContinuingHostel }
    : { newDay: feeStructure.aLevelNewDay, newHostel: feeStructure.aLevelNewHostel, newUBoys: feeStructure.aLevelNewUniformBoys, newUGirls: feeStructure.aLevelNewUniformGirls, newUHostel: feeStructure.aLevelNewHostelUniform, contDay: feeStructure.aLevelContinuingDay, contHostel: feeStructure.aLevelContinuingHostel };

  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading title="School Fees Structure" subtitle={`Academic Year ${feeStructure.year || ""}`} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} className="flex justify-center mb-10">
          <div className="bg-white dark:bg-navy-light rounded-full p-1 shadow-md inline-flex">
            <button onClick={() => setTab("o")} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${tab === "o" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"}`}>O'Level</button>
            <button onClick={() => setTab("a")} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${tab === "a" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"}`}>A'Level</button>
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
              <div className="bg-navy px-6 py-4"><h3 className="text-white font-heading font-bold text-xl">New Students</h3></div>
              <div className="p-6 space-y-3">
                <FeeRow label="Day Scholars" value={d.newDay} />
                <FeeRow label="Uniform (Boys)" value={d.newUBoys} opt />
                <FeeRow label="Uniform (Girls)" value={d.newUGirls} opt />
                <FeeRow label="Hostel Uniform" value={d.newUHostel} opt />
                <div className="border-t border-gray-100 dark:border-navy-light pt-3"><FeeRow label="Hostel (Boarding)" value={d.newHostel} bold /></div>
              </div>
            </div>
            <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
              <div className="bg-navy px-6 py-4"><h3 className="text-white font-heading font-bold text-xl">Continuing Students</h3></div>
              <div className="p-6 space-y-3">
                <FeeRow label="Day Scholars" value={d.contDay} />
                <div className="border-t border-gray-100 dark:border-navy-light pt-3"><FeeRow label="Hostel (Boarding)" value={d.contHostel} bold /></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeeRow({ label, value, opt, bold }: any) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-charcoal dark:text-gray-300 text-sm">{label}{opt && <span className="text-xs text-gray-medium"> (optional)</span>}</span>
      <span className={`text-navy dark:text-white font-mono ${bold ? "font-bold text-lg text-teal" : "font-semibold"}`}>UGX {value?.toLocaleString() || 0}</span>
    </div>
  );
}