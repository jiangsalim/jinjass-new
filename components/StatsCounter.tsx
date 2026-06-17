"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (isInView && !hasAnimated.current) { hasAnimated.current = true; const d = 2000, s = 60, inc = target / s; let c = 0; const t = setInterval(() => { c += inc; if (c >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(c)); }, d / s); return () => clearInterval(t); }
    if (!isInView) { hasAnimated.current = false; setCount(0); }
  }, [isInView, target]);
  return <span>{count}{suffix}</span>;
}

export default function StatsCounter({ homePage }: any) {
  const stats = [
    { label: homePage?.statsStudentsSuffix ? "Students" : "Students", value: homePage?.statsStudents || 0, suffix: homePage?.statsStudentsSuffix || "" },
    { label: "Teachers", value: homePage?.statsTeachers || 0, suffix: homePage?.statsTeachersSuffix || "" },
    { label: "Activities", value: homePage?.statsActivities || 0, suffix: homePage?.statsActivitiesSuffix || "" },
    { label: "Years", value: homePage?.statsYears || 0, suffix: homePage?.statsYearsSuffix || "" },
  ];
  return (
    <section className="section-navy py-16">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">{homePage?.statsSectionTitle || ""}</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">{homePage?.statsSectionSubtitle || ""}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { margin: "-100px" });
            return (
              <motion.div key={i} ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.1, duration: 0.6 }} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-teal mb-2"><CountUp target={stat.value} suffix={stat.suffix} isInView={isInView} /></div>
                <p className="text-gray-medium text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}