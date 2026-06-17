"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

function CountUp({ target, isInView }: any) {
  const [c, s] = useState(0); const r = useRef(false);
  useEffect(() => { if (isInView && !r.current) { r.current = true; const d = 1500, st = 30, inc = target / st; let cur = 0; const t = setInterval(() => { cur += inc; if (cur >= target) { s(target); clearInterval(t); } else s(Math.floor(cur)); }, d / st); return () => clearInterval(t); } if (!isInView) { r.current = false; s(0); } }, [isInView, target]);
  return <span>{c}</span>;
}

export default function TermDates({ termDates }: any) {
  if (!termDates) return null;
  const oRef = useRef(null); const cRef = useRef(null);
  const oInView = useInView(oRef, { margin: "-100px" }); const cInView = useInView(cRef, { margin: "-100px" });
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <SectionHeading title={termDates.termName || ""} subtitle={termDates.termSubtitle || ""} />
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div ref={oRef} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-navy rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal/10 rounded-bl-full" />
            <div className="relative z-10"><p className="text-teal text-sm uppercase tracking-wider mb-2">Opening</p>
              <p className="text-4xl font-heading font-bold text-white mb-1"><CountUp target={termDates.openingDay || 0} isInView={oInView} /></p>
              <p className="text-xl font-heading text-white mb-4">{termDates.openingMonth} {termDates.openingYear}</p>
              <p className="text-gray-medium text-sm">{termDates.openingNotes}</p><p className="text-teal font-semibold mt-2">{termDates.openingTime}</p></div>
          </motion.div>
          <motion.div ref={cRef} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-navy rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal/10 rounded-bl-full" />
            <div className="relative z-10"><p className="text-teal text-sm uppercase tracking-wider mb-2">Closing</p>
              <p className="text-4xl font-heading font-bold text-white mb-1"><CountUp target={termDates.closingDay || 0} isInView={cInView} /></p>
              <p className="text-xl font-heading text-white mb-4">{termDates.closingMonth} {termDates.closingYear}</p>
              <p className="text-gray-medium text-sm">{termDates.closingNotes}</p><p className="text-teal font-semibold mt-2">{termDates.closingTime}</p></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}