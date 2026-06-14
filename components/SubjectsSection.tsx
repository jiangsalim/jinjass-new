"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const subjects = {
  sciences: {
    title: "Sciences",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "Developing analytical and practical problem-solving skills through:",
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
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description: "Building communication, critical thinking and social awareness through:",
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
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    description: "Promoting fitness, teamwork and talent development through:",
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

export default function SubjectsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("sciences");

  const current = subjects[activeTab];

  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading
          title="What We Teach"
          subtitle="A wide range of academic subjects and co-curricular activities designed to nurture knowledge, skills, talent, leadership and character"
        />

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-teal text-white shadow-lg shadow-teal/25"
                  : "bg-white text-charcoal hover:text-navy hover:shadow-md"
              }`}
            >
              <span className="hidden sm:inline">
                {subjects[tab.key].icon}
              </span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-navy px-8 py-6 flex items-center gap-4">
                <div className="text-teal hidden sm:block">
                  {current.icon}
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-xl">
                    {current.title}
                  </h3>
                  <p className="text-gray-medium text-sm mt-1">
                    {current.description}
                  </p>
                </div>
              </div>

              {/* Subject List */}
              <div className="p-8">
                <div className="grid sm:grid-cols-2 gap-3">
                  {current.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 bg-gray-light rounded-xl px-4 py-3 hover:bg-teal/5 hover:border-teal/20 border border-transparent transition-all duration-300 group"
                    >
                      <span className="w-2 h-2 bg-teal rounded-full group-hover:scale-125 transition-transform" />
                      <span className="text-charcoal text-sm font-medium">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}