"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

const terms = ["All", "Term 1", "Term 2", "Term 3"];
const classes = ["All", "S1", "S2", "S3", "S4", "S5", "S6"];

export default function TimetablePageClient({ timetables }: any) {
  const [search, setSearch] = useState("");
  const [termFilter, setTermFilter] = useState("All");
  const [classFilter, setClassFilter] = useState("All");
  const [selected, setSelected] = useState<any>(null);

  const filtered = (timetables || []).filter((t: any) => {
    const matchSearch = !search || 
      t.title?.toLowerCase().includes(search.toLowerCase()) ||
      `${t.classLevel}${t.stream}`.toLowerCase().includes(search.toLowerCase());
    const matchTerm = termFilter === "All" || t.term === termFilter;
    const matchClass = classFilter === "All" || t.classLevel === classFilter;
    return matchSearch && matchTerm && matchClass;
  });

  return (
    <PageTransition>
      <PageHero
        title="School Timetable"
        subtitle="View and download class timetables"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics", href: "/academics" },
          { label: "Timetable" },
        ]}
      />

      {/* Search & Filters */}
      <section className="section-white py-8 border-b border-gray-100 dark:border-navy-light">
        <div className="container-custom">
          {/* Search */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by class + stream (e.g., S1A)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white placeholder-gray-medium focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-medium hover:text-charcoal dark:hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={termFilter}
              onChange={(e) => setTermFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white text-sm focus:outline-none focus:border-teal"
            >
              {terms.map((t) => <option key={t} value={t}>{t === "All" ? "All Terms" : t}</option>)}
            </select>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white text-sm focus:outline-none focus:border-teal"
            >
              {classes.map((c) => <option key={c} value={c}>{c === "All" ? "All Classes" : c}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Timetable Grid */}
      <section className="section-gray py-16">
        <div className="container-custom">
          {filtered.length > 0 ? (
            <>
              <p className="text-center text-sm text-gray-medium mb-8">
                {filtered.length} timetable{filtered.length !== 1 ? "s" : ""} found
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((t: any, i: number) => (
                  <motion.div
                    key={t._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 dark:border-navy-light"
                    onClick={() => setSelected(t)}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-navy">
                      {t.image ? (
                        <img
                          src={urlFor(t.image).width(500).url()}
                          alt={t.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-medium">
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      )}
                      {/* View Button */}
                      <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm bg-teal px-4 py-2 rounded-full">View Full Size</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-navy dark:text-white text-lg mb-2">
                        {t.title || `${t.classLevel}${t.stream} - ${t.term}`}
                      </h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-teal font-medium">{t.term} | {t.year}</p>
                        {t.uploadedBy && <p className="text-gray-medium dark:text-gray-400">By: {t.uploadedBy}</p>}
                        {t.uploadDate && <p className="text-gray-medium dark:text-gray-400">📅 {t.uploadDate}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-medium mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-medium dark:text-gray-400 text-lg mb-2">No timetables found</p>
              <p className="text-gray-medium dark:text-gray-400 text-sm">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-navy-light rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-navy/80 hover:bg-navy rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              {selected.image && (
                <img
                  src={urlFor(selected.image).url()}
                  alt={selected.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}

              {/* Info Bar */}
              <div className="p-4 border-t border-gray-100 dark:border-navy-light">
                <h3 className="font-heading font-bold text-navy dark:text-white text-lg">
                  {selected.title || `${selected.classLevel}${selected.stream} - ${selected.term}`}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm mt-1">
                  <span className="text-teal font-medium">{selected.term} | {selected.year}</span>
                  {selected.uploadedBy && <span className="text-gray-medium">By: {selected.uploadedBy}</span>}
                  {selected.uploadDate && <span className="text-gray-medium">📅 {selected.uploadDate}</span>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}