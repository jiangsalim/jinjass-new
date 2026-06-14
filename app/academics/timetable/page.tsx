"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const schedule = [
  { time: "5:30 AM — 6:00 AM", activity: "Wake Up & Personal Preparation", category: "Morning" },
  { time: "6:00 AM — 7:00 AM", activity: "Morning Preps", category: "Morning" },
  { time: "7:00 AM — 7:30 AM", activity: "Breakfast", category: "Morning" },
  { time: "7:30 AM — 8:00 AM", activity: "Assembly / Parade", category: "Morning" },
  { time: "8:00 AM — 10:30 AM", activity: "Morning Lessons (3 periods)", category: "Academic" },
  { time: "10:30 AM — 11:00 AM", activity: "Break Time", category: "Break" },
  { time: "11:00 AM — 1:00 PM", activity: "Mid-Morning Lessons (2 periods)", category: "Academic" },
  { time: "1:00 PM — 2:00 PM", activity: "Lunch Break", category: "Break" },
  { time: "2:00 PM — 4:30 PM", activity: "Afternoon Lessons (3 periods)", category: "Academic" },
  { time: "4:30 PM — 5:30 PM", activity: "Games & Sports / Clubs", category: "Co-Curricular" },
  { time: "5:30 PM — 6:30 PM", activity: "Personal Time / Cleaning", category: "Evening" },
  { time: "6:30 PM — 7:30 PM", activity: "Supper", category: "Evening" },
  { time: "7:30 PM — 10:00 PM", activity: "Evening Preps", category: "Academic" },
  { time: "10:00 PM", activity: "Lights Out", category: "Evening" },
];

const categoryColors: Record<string, string> = {
  Morning: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400",
  Academic: "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400",
  Break: "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400",
  "Co-Curricular": "bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400",
  Evening: "bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400",
};

export default function TimetablePage() {
  return (
    <>
      <PageHero
        title="School Timetable"
        subtitle="Daily schedule for students at Jinja Senior Secondary School"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Academics" },
          { label: "Timetable" },
        ]}
      />

      <section className="section-white py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className="flex items-center gap-4 bg-gray-light dark:bg-navy-light rounded-xl p-4 border border-gray-100 dark:border-navy-light hover:shadow-md transition-shadow"
              >
                <div className="w-32 sm:w-40 flex-shrink-0">
                  <p className="text-navy dark:text-white font-semibold text-sm">
                    {item.time}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-charcoal dark:text-gray-300 text-sm">
                    {item.activity}
                  </p>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                    categoryColors[item.category]
                  }`}
                >
                  {item.category}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-navy rounded-2xl p-6 text-center"
          >
            <p className="text-gray-medium text-sm">
              ⚠️ This timetable is subject to change. Students should check the
              notice board for daily updates and special schedules.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}