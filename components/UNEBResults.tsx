"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const uceData = {
  title: "UCE Performance 2025",
  stats: [
    { label: "Result 1", value: 622 },
    { label: "Result 2", value: 0 },
    { label: "Result 3", value: 0 },
    { label: "Result 4", value: 2 },
    { label: "Result 7", value: 0 },
    { label: "Result 9", value: 0 },
    { label: "Absent", value: 0 },
    { label: "Total", value: 624 },
  ],
};

const uaceData = {
  title: "UACE Performance 2025",
  highlights: [
    "Our best student got 20 points doing BCM",
    "Our best 3 candidates in Arts got 18 points doing LEG & HDL",
    "Our 5 best Science students got 20-19 points doing BCM",
  ],
  stats: [
    { label: "Principle Passes", value: 594 },
    { label: "Subsidiary Passes", value: 167 },
    { label: "Absent", value: 0 },
    { label: "Fail", value: 3 },
    { label: "Total Candidates", value: 764 },
  ],
};

function CountUp({ target, isInView }: { target: number; isInView: boolean }) {
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

  return <span>{count}</span>;
}

function ResultStat({
  label,
  value,
  highlighted = false,
  index,
}: {
  label: string;
  value: number;
  highlighted?: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`text-center p-4 rounded-xl ${
        highlighted ? "bg-teal/10 border border-teal" : "bg-gray-light dark:bg-navy"
      }`}
    >
      <p className="text-3xl font-heading font-bold text-navy dark:text-white">
        <CountUp target={value} isInView={isInView} />
      </p>
      <p className="text-gray-medium dark:text-gray-400 text-xs uppercase tracking-wider mt-1">
        {label}
      </p>
    </motion.div>
  );
}

function UCEResults({ data }: { data: typeof uceData }) {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light"
      >
        <div className="bg-navy px-6 py-4">
          <h3 className="text-white font-heading font-bold text-xl">{data.title}</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.stats.map((stat, index) => (
              <ResultStat
                key={stat.label}
                label={stat.label}
                value={stat.value}
                highlighted={stat.label === "Total"}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function UACEResults({ data }: { data: typeof uaceData }) {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-navy rounded-2xl p-6 mb-6"
      >
        <h3 className="text-teal font-heading font-bold text-lg mb-4">Best Performers</h3>
        <div className="space-y-3">
          {data.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-teal mt-1 flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="text-white text-sm">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light"
      >
        <div className="bg-navy px-6 py-4">
          <h3 className="text-white font-heading font-bold text-xl">{data.title}</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {data.stats.map((stat, index) => (
              <ResultStat
                key={stat.label}
                label={stat.label}
                value={stat.value}
                highlighted={stat.label === "Total Candidates"}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function UNEBResults() {
  const [activeTab, setActiveTab] = useState<"uce" | "uace">("uce");

  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading
          title="UNEB Results 2025"
          subtitle="Check out our performance in the 2025 national examinations"
        />

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex justify-center mb-10"
        >
          <div className="bg-white dark:bg-navy-light rounded-full p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveTab("uce")}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "uce"
                  ? "bg-teal text-white shadow-md"
                  : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"
              }`}
            >
              UCE
            </button>
            <button
              onClick={() => setActiveTab("uace")}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "uace"
                  ? "bg-teal text-white shadow-md"
                  : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"
              }`}
            >
              UACE
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "uce" ? (
              <UCEResults data={uceData} />
            ) : (
              <UACEResults data={uaceData} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}