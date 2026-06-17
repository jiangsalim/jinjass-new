"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

function CountUp({ target, suffix, isInView }: any) {
  const [c, s] = useState(0); const r = useRef(false);
  useEffect(() => { if (isInView && !r.current) { r.current = true; const d = 2000, st = 60, inc = target / st; let cur = 0; const t = setInterval(() => { cur += inc; if (cur >= target) { s(target); clearInterval(t); } else s(Math.floor(cur)); }, d / st); return () => clearInterval(t); } if (!isInView) { r.current = false; s(0); } }, [isInView, target]);
  return <span>{c}{suffix}</span>;
}

export default function AcademicsPageClient({ unebResults, subjectCategories }: any) {
  const links = [
    { title: "Subjects", desc: "Explore our wide range of academic subjects and co-curricular activities", href: "/academics/subjects", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    { title: "UNEB Results", desc: "View our outstanding performance in national examinations", href: "/academics/results", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    { title: "Timetable", desc: "View the daily schedule and class timetable", href: "/academics/timetable", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  ];
  const stats = [
    { label: "Teachers", value: 185, suffix: "+" },
    { label: "Students", value: 5000, suffix: "+" },
    { label: "Pass Rate", value: 95, suffix: "%" },
    { label: "Subjects", value: subjectCategories?.length || 20, suffix: "+" },
  ];

  return (
    <PageTransition>
      <PageHero title="Academics" subtitle="Excellence in education through a comprehensive curriculum" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }]} />
      <section className="section-white py-20"><div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">Academic Excellence</h2>
          <p className="text-charcoal dark:text-gray-300 max-w-2xl mx-auto">Jinja Senior Secondary School offers a balanced curriculum at both O'Level and A'Level, designed to develop knowledge, critical thinking, and practical skills.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {links.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.15, duration: 0.6 }} whileHover={{ y: -8 }}>
              <Link href={l.href} className="block bg-white dark:bg-navy-light rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light h-full">
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">{l.icon}</div>
                <h3 className="font-heading font-bold text-xl text-navy dark:text-white mb-3 group-hover:text-teal transition-colors">{l.title}</h3>
                <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed">{l.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div></section>
      <section className="section-navy py-16"><div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} className="text-center mb-10"><h2 className="font-heading text-3xl font-bold text-white mb-3">By the Numbers</h2></motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const ref = useRef(null); const iv = useInView(ref, { margin: "-100px" });
            return <motion.div key={i} ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.1 }} className="text-center"><p className="text-4xl font-heading font-bold text-teal mb-2"><CountUp target={s.value} suffix={s.suffix} isInView={iv} /></p><p className="text-gray-medium text-sm">{s.label}</p></motion.div>;
          })}
        </div>
      </div></section>
    </PageTransition>
  );
}