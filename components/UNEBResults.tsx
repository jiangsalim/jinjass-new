"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

function CountUp({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      timerRef.current = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          if (timerRef.current) clearInterval(timerRef.current);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }

    if (!isInView) {
      hasAnimated.current = false;
      setCount(0);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInView, target]);

  return <span>{count}</span>;
}

function ResultStat({
  label,
  value,
  highlighted = false,
}: {
  label: string;
  value: number;
  highlighted?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center p-4 rounded-xl ${
        highlighted
          ? "bg-teal/10 border border-teal"
          : "bg-gray-light dark:bg-navy"
      }`}
    >
      <p className="text-3xl font-heading font-bold text-navy dark:text-white">
        <CountUp target={value} isInView={isInView} />
      </p>
      <p className="text-gray-medium dark:text-gray-400 text-xs uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}

export default function UNEBResults({ unebResults }: any) {
  const [activeTab, setActiveTab] = useState<"uce" | "uace">("uce");

  if (!unebResults) return null;

  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading
          title={`UNEB Results ${unebResults.year || ""}`}
          subtitle="Check out our performance in the national examinations"
        />

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            {activeTab === "uce" ? (
              <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                <div className="bg-navy px-6 py-4">
                  <h3 className="text-white font-heading font-bold text-xl">
                    {unebResults.uceTitle || "UCE Performance"}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(unebResults.uceStats || []).map((stat: any, index: number) => (
                      <ResultStat
                        key={`uce-${index}`}
                        label={stat.label}
                        value={stat.value}
                        highlighted={stat.label === "Total Candidates"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {(unebResults.uaceHighlights || []).length > 0 && (
                  <div className="bg-navy rounded-2xl p-6 mb-6">
                    <h3 className="text-teal font-heading font-bold text-lg mb-4">
                      Best Performers
                    </h3>
                    <div className="space-y-3">
                      {(unebResults.uaceHighlights || []).map((highlight: string, index: number) => (
                        <motion.div
                          key={`highlight-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
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
                  </div>
                )}
                <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                  <div className="bg-navy px-6 py-4">
                    <h3 className="text-white font-heading font-bold text-xl">
                      {unebResults.uaceTitle || "UACE Performance"}
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {(unebResults.uaceStats || []).map((stat: any, index: number) => (
                        <ResultStat
                          key={`uace-${index}`}
                          label={stat.label}
                          value={stat.value}
                          highlighted={stat.label === "Total Candidates"}
                        />
                      ))}
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