"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const catColors: any = { Academic: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400", Sports: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400", Finance: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400", General: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400" };

export default function AnnouncementsSection({ announcements }: any) {
  if (!announcements || announcements.length === 0) return null;
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <SectionHeading title="Daily Announcements" subtitle="Important updates and notices from the administration" />
        <div className="max-w-3xl mx-auto space-y-4">
          {announcements.slice(0, 4).map((a: any, i: number) => (
            <motion.div key={a._id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-white dark:bg-navy-light rounded-2xl p-6 border transition-shadow hover:shadow-lg ${a.pinned ? "border-teal/30 dark:border-teal/20 shadow-md" : "border-gray-100 dark:border-navy-light shadow-sm"}`}>
              <div className="flex items-start gap-4">
                {a.pinned && <div className="flex-shrink-0 mt-1"><svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></div>}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading font-bold text-navy dark:text-white text-lg">{a.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${catColors[a.category] || catColors.General}`}>{a.category}</span>
                    {a.pinned && <span className="text-xs text-teal font-medium flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Pinned</span>}
                  </div>
                  <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-3">{a.message}</p>
                  <p className="text-gray-medium dark:text-gray-400 text-xs">Posted: {a.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: 0.5 }} className="text-center mt-8">
          <Link href="/announcements" className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-300">View All Announcements <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
        </motion.div>
      </div>
    </section>
  );
}