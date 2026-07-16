"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ResultsPageClient({ data }: any) {
  const [tab, setTab] = useState<"uce" | "uace">("uce");
  if (!data) return null;

  return (
    <PageTransition>
      <PageHero
        title="UNEB Results"
        subtitle="Academic performance in national examinations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "UNEB Results" },
        ]}
      />
      <section className="section-gray py-16">
        <div className="container-custom">
          <div className="flex justify-center mb-10">
            <div className="bg-white dark:bg-navy-light rounded-full p-1 shadow-md inline-flex">
              <button
                onClick={() => setTab("uce")}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  tab === "uce" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300"
                }`}
              >
                UCE Results
              </button>
              <button
                onClick={() => setTab("uace")}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  tab === "uace" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300"
                }`}
              >
                UACE Results
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {tab === "uce" ? (
                <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                  <div className="bg-navy px-6 py-4">
                    <h3 className="text-white font-heading font-bold text-xl">{data.uceTitle}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {(data.uceStats || []).map((s: any, i: number) => (
                        <div
                          key={`uce-${i}`}
                          className={`text-center p-4 rounded-xl ${
                            s.label === "Total Candidates"
                              ? "bg-teal/10 border border-teal"
                              : "bg-gray-light dark:bg-navy"
                          }`}
                        >
                          <p className="text-3xl font-heading font-bold text-navy dark:text-white">{s.value}</p>
                          <p className="text-gray-medium dark:text-gray-400 text-xs uppercase mt-1">{s.label}</p>
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
                      {(data.uaceHighlights || []).map((h: string, i: number) => (
                        <div key={`highlight-${i}`} className="flex items-start gap-3">
                          <span className="text-teal mt-1 flex-shrink-0">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <p className="text-white text-sm">{h}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                    <div className="bg-navy px-6 py-4">
                      <h3 className="text-white font-heading font-bold text-xl">{data.uaceTitle}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {(data.uaceStats || []).map((s: any, i: number) => (
                          <div
                            key={`uace-${i}`}
                            className={`text-center p-4 rounded-xl ${
                              s.label === "Total Candidates"
                                ? "bg-teal/10 border border-teal sm:col-span-3 lg:col-span-1"
                                : "bg-gray-light dark:bg-navy"
                            }`}
                          >
                            <p className="text-3xl font-heading font-bold text-navy dark:text-white">{s.value}</p>
                            <p className="text-gray-medium dark:text-gray-400 text-xs uppercase mt-1">{s.label}</p>
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
      <BreadcrumbSchema
                    items={[
                     { name: "Home", url: "/" },
                     { name: "About", url: "/about" },
                     { name: "School History", url: "/about/history" },
                  ]}
                  />
    </PageTransition>
  );
}