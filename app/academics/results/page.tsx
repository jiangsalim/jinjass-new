"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";

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
    { label: "Total Candidates", value: 624 },
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

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<"uce" | "uace">("uce");

  return (
    <>
      <PageHero
        title="UNEB Results"
        subtitle="Academic performance in national examinations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics" },
          { label: "UNEB Results" },
        ]}
      />

      <section className="section-gray py-16">
        <div className="container-custom">
          <div className="flex justify-center mb-10">
            <div className="bg-white dark:bg-navy-light rounded-full p-1 shadow-md inline-flex">
              <button
                onClick={() => setActiveTab("uce")}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "uce"
                    ? "bg-teal text-white shadow-md"
                    : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"
                }`}
              >
                UCE Results
              </button>
              <button
                onClick={() => setActiveTab("uace")}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "uace"
                    ? "bg-teal text-white shadow-md"
                    : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"
                }`}
              >
                UACE Results
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {activeTab === "uce" ? (
                <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                  <div className="bg-navy px-6 py-4">
                    <h3 className="text-white font-heading font-bold text-xl">{uceData.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {uceData.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className={`text-center p-4 rounded-xl ${
                            stat.label === "Total Candidates"
                              ? "bg-teal/10 border border-teal"
                              : "bg-gray-light dark:bg-navy"
                          }`}
                        >
                          <p className="text-3xl font-heading font-bold text-navy dark:text-white">{stat.value}</p>
                          <p className="text-gray-medium dark:text-gray-400 text-xs uppercase mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-navy rounded-2xl p-6 mb-6">
                    <h3 className="text-teal font-heading font-bold text-lg mb-4">Best Performers</h3>
                    <div className="space-y-3">
                      {uaceData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-teal mt-1 flex-shrink-0">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <p className="text-white text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                    <div className="bg-navy px-6 py-4">
                      <h3 className="text-white font-heading font-bold text-xl">{uaceData.title}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {uaceData.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className={`text-center p-4 rounded-xl ${
                              stat.label === "Total Candidates"
                                ? "bg-teal/10 border border-teal sm:col-span-3 lg:col-span-1"
                                : "bg-gray-light dark:bg-navy"
                            }`}
                          >
                            <p className="text-3xl font-heading font-bold text-navy dark:text-white">{stat.value}</p>
                            <p className="text-gray-medium dark:text-gray-400 text-xs uppercase mt-1">{stat.label}</p>
                          </div>
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
    </>
  );
}