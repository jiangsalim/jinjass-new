"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

const catColors: any = { Academic: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400", Sports: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400", Finance: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400", General: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400" };

export default function AnnouncementsPageClient({ announcements }: any) {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set((announcements || []).map((a: any) => a.category))];
  const filtered = cat === "All" ? announcements : (announcements || []).filter((a: any) => a.category === cat);

  return (
    <PageTransition>
      <PageHero title="Announcements" subtitle="Important updates from the administration" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Announcements" }]} />
      <section className="section-white py-8 border-b border-gray-100 dark:border-navy-light"><div className="container-custom"><div className="flex flex-wrap justify-center gap-3">
        {cats.map((c: any) => (<button key={c} onClick={() => setCat(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${cat === c ? "bg-teal text-white shadow-md" : "bg-gray-light dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"}`}>{c}</button>))}
      </div></div></section>
      <section className="section-gray py-16"><div className="container-custom"><div className="max-w-3xl mx-auto space-y-4">
        {filtered.length > 0 ? filtered.map((a: any, i: number) => (
          <motion.div key={a._id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`bg-white dark:bg-navy-light rounded-2xl p-6 border transition-shadow hover:shadow-lg ${a.pinned ? "border-teal/30 shadow-md" : "border-gray-100 dark:border-navy-light shadow-sm"}`}>
            <div className="flex items-start gap-4">
              {a.pinned && <div className="flex-shrink-0 mt-1"><svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></div>}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2"><h3 className="font-heading font-bold text-navy dark:text-white text-lg">{a.title}</h3><span className={`text-xs font-medium px-2.5 py-1 rounded-full ${catColors[a.category] || catColors.General}`}>{a.category}</span></div>
                <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-3">{a.message}</p>
                <p className="text-gray-medium dark:text-gray-400 text-xs">Posted: {a.date} by {a.author}</p>
              </div>
            </div>
          </motion.div>
        )) : <div className="text-center py-20"><p className="text-gray-medium dark:text-gray-400 text-lg">No announcements.</p></div>}
      </div></div></section>
    </PageTransition>
  );
}