"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

const allAnnouncements = [
  {
    id: 1,
    title: "Term Two Opening Date",
    message:
      "All students are reminded that Term Two opens on Monday, 25th May 2026. Hostel students should report between 7:20 AM and 4:40 PM. Day scholars should arrive by 7:30 AM for the opening assembly.",
    date: "June 14, 2026",
    category: "Academic",
    pinned: true,
    author: "Head Teacher's Office",
  },
  {
    id: 2,
    title: "Sports Day This Friday",
    message:
      "Inter-house sports competition will take place this Friday at the main field starting at 9:00 AM. All students should wear their house colors. Parents and guardians are welcome to attend and cheer for their children.",
    date: "June 13, 2026",
    category: "Sports",
    pinned: false,
    author: "Sports Department",
  },
  {
    id: 3,
    title: "School Fees Deadline Extended",
    message:
      "Parents and guardians are informed that the deadline for Term Two school fees has been extended to 15th July 2026. Please clear all outstanding balances before this date to avoid late payment penalties.",
    date: "June 12, 2026",
    category: "Finance",
    pinned: true,
    author: "Bursar's Office",
  },
  {
    id: 4,
    title: "UNEB Registration Ongoing",
    message:
      "All UCE and UACE candidates are informed that UNEB registration is currently ongoing. Please visit the academics office to verify your personal details and subject combinations before Friday 20th June 2026.",
    date: "June 10, 2026",
    category: "Academic",
    pinned: false,
    author: "Academics Office",
  },
  {
    id: 5,
    title: "Parents Meeting This Saturday",
    message:
      "There will be a general parents meeting this Saturday at 10:00 AM in the main hall. All parents and guardians of S3 and S5 students are required to attend. Important academic matters will be discussed.",
    date: "June 8, 2026",
    category: "General",
    pinned: false,
    author: "Administration",
  },
  {
    id: 6,
    title: "New ICT Laboratory Equipment",
    message:
      "The school has received new computers and equipment for the ICT laboratory. Students are encouraged to make use of these facilities during their free time. The lab is open from 8:00 AM to 6:00 PM on weekdays.",
    date: "June 5, 2026",
    category: "General",
    pinned: false,
    author: "ICT Department",
  },
  {
    id: 7,
    title: "Inter-House Debate Competition",
    message:
      "The annual inter-house debate competition will be held next Wednesday at 2:00 PM in the main hall. All houses should submit their teams to the Debate Club patron by Monday.",
    date: "June 3, 2026",
    category: "Academic",
    pinned: false,
    author: "Debate Club",
  },
  {
    id: 8,
    title: "Medical Check-up Camp",
    message:
      "A free medical check-up camp will be held at the school sick bay this Saturday from 8:00 AM to 3:00 PM. All students are encouraged to participate. Parents are also welcome.",
    date: "June 1, 2026",
    category: "General",
    pinned: false,
    author: "Health Department",
  },
];

const categories = ["All", "Academic", "Sports", "Finance", "General"];

const categoryColors: Record<string, string> = {
  Academic: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  Sports: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  Finance: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400",
  General: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400",
};

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAnnouncements =
    selectedCategory === "All"
      ? allAnnouncements
      : allAnnouncements.filter((a) => a.category === selectedCategory);

  return (
    <PageTransition>
      <PageHero
        title="Announcements"
        subtitle="Important updates and notices from the administration"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Announcements" },
        ]}
      />

      {/* Category Filter */}
      <section className="section-white py-8 border-b border-gray-100 dark:border-navy-light">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-teal text-white shadow-md"
                    : "bg-gray-light dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="section-gray py-16">
        <div className="container-custom">
          {filteredAnnouncements.length > 0 ? (
            <div className="max-w-3xl mx-auto space-y-4">
              {filteredAnnouncements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`bg-white dark:bg-navy-light rounded-2xl p-6 border transition-shadow hover:shadow-lg ${
                    announcement.pinned
                      ? "border-teal/30 dark:border-teal/20 shadow-md"
                      : "border-gray-100 dark:border-navy-light shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Pin Icon */}
                    {announcement.pinned && (
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-navy dark:text-white text-lg">
                          {announcement.title}
                        </h3>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[announcement.category] || categoryColors.General}`}>
                          {announcement.category}
                        </span>
                        {announcement.pinned && (
                          <span className="text-xs text-teal font-medium flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Pinned
                          </span>
                        )}
                      </div>
                      <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-3">
                        {announcement.message}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-medium dark:text-gray-400">
                        <span>Posted: {announcement.date}</span>
                        <span>By: {announcement.author}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-medium dark:text-gray-400 text-lg">
                No announcements in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}