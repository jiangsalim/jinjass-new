"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const academicLinks = [
  {
    title: "Subjects",
    description: "Explore our wide range of academic subjects and co-curricular activities",
    href: "/academics/subjects",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "UNEB Results",
    description: "View our outstanding performance in national examinations",
    href: "/academics/results",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Timetable",
    description: "View the daily schedule and class timetable",
    href: "/academics/timetable",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Teachers", value: 185, suffix: "+" },
  { label: "Students", value: 5000, suffix: "+" },
  { label: "Pass Rate", value: 95, suffix: "%" },
  { label: "Subjects", value: 20, suffix: "+" },
];

function CountUp({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }

    if (!isInView) {
      hasAnimated.current = false;
      setCount(0);
    }
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function StatItem({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <p className="text-4xl font-heading font-bold text-teal mb-2">
        <CountUp target={value} suffix={suffix} isInView={isInView} />
      </p>
      <p className="text-gray-medium text-sm">{label}</p>
    </motion.div>
  );
}

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="Excellence in education through a comprehensive curriculum"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics" },
        ]}
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
              Academic Excellence
            </h2>
            <p className="text-charcoal dark:text-gray-300 max-w-2xl mx-auto">
              Jinja Senior Secondary School offers a balanced curriculum at both
              O&apos;Level and A&apos;Level, designed to develop knowledge,
              critical thinking, and practical skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {academicLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={link.href}
                  className="block bg-white dark:bg-navy-light rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light h-full"
                >
                  <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                    {link.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy dark:text-white mb-3 group-hover:text-teal transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner with CountUp */}
      <section className="section-navy py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl font-bold text-white mb-3">
              By the Numbers
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}