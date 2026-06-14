"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";

const subjects = {
  sciences: {
    title: "Sciences",
    icon: "🔬",
    description: "Developing analytical and practical problem-solving skills",
    items: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Agriculture",
      "Information & Communication Technology (ICT)",
      "Technical Drawing",
      "Home Management & Food Nutrition",
    ],
  },
  arts: {
    title: "Arts & Humanities",
    icon: "📚",
    description: "Building communication, critical thinking and social awareness",
    items: [
      "History",
      "Geography",
      "Christian Religious Education (CRE)",
      "Islamic Religious Education (IRE)",
      "Literature in English",
      "English Language",
      "Kiswahili",
      "Chinese Language",
      "Lusoga Language",
      "Economics",
      "Entrepreneurship",
    ],
  },
  cocurricular: {
    title: "Co-Curricular",
    icon: "🏆",
    description: "Promoting fitness, teamwork and talent development",
    items: [
      "Football",
      "Netball",
      "Volleyball",
      "Basketball",
      "Rugby",
      "Cricket",
      "Athletics & Track Events",
      "Music, Dance & Drama",
    ],
  },
};

type TabKey = "sciences" | "arts" | "cocurricular";

const tabs: { key: TabKey; label: string }[] = [
  { key: "sciences", label: "Sciences" },
  { key: "arts", label: "Arts & Humanities" },
  { key: "cocurricular", label: "Co-Curricular" },
];

export default function SubjectsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("sciences");
  const current = subjects[activeTab];

  return (
    <>
      <PageHero
        title="Subjects"
        subtitle="A wide range of academic subjects and co-curricular activities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics" },
          { label: "Subjects" },
        ]}
      />

      <section className="section-white py-16">
        <div className="container-custom">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.key
                    ? "bg-teal text-white shadow-lg shadow-teal/25"
                    : "bg-gray-light dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"
                }`}
              >
                <span className="text-lg">{subjects[tab.key].icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light">
                <div className="bg-navy px-8 py-6">
                  <h2 className="text-white font-heading font-bold text-2xl">
                    {current.title}
                  </h2>
                  <p className="text-gray-medium text-sm mt-1">
                    {current.description}
                  </p>
                </div>
                <div className="p-8">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {current.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 bg-gray-light dark:bg-navy rounded-xl px-4 py-3 hover:bg-teal/5 dark:hover:bg-navy-light hover:border-teal/20 border border-transparent transition-all duration-300 group"
                      >
                        <span className="w-2 h-2 bg-teal rounded-full group-hover:scale-125 transition-transform" />
                        <span className="text-charcoal dark:text-gray-300 text-sm font-medium">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Student Clubs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 bg-navy rounded-2xl p-8 text-center"
              >
                <h3 className="text-white font-heading font-bold text-xl mb-4">
                  Student Clubs
                </h3>
                <p className="text-gray-medium text-sm mb-6">
                  Encouraging leadership, innovation and personal growth through:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Debate Club",
                    "Scripture Union",
                    "Writers Club",
                    "Wildlife Club",
                    "Science Club",
                    "ICT Club",
                    "Red Cross Club",
                    "And Many More...",
                  ].map((club) => (
                    <span
                      key={club}
                      className="bg-teal/10 text-teal border border-teal/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal/20 transition-colors"
                    >
                      {club}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}