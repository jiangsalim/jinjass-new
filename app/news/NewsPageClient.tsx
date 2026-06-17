"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

export default function NewsPageClient({ newsArticles }: any) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const cats = ["All", ...new Set((newsArticles || []).map((a: any) => a.category))];
  const filtered = (newsArticles || []).filter((a: any) => {
    const mc = cat === "All" || a.category === cat;
    const ms = !q || a.title?.toLowerCase().includes(q.toLowerCase()) || a.category?.toLowerCase().includes(q.toLowerCase()) || a.excerpt?.toLowerCase().includes(q.toLowerCase());
    return mc && ms;
  });

  return (
    <PageTransition>
      <PageHero title="News & Events" subtitle="Stay updated with the latest from Jinja Senior Secondary School" breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Events" }]} />
      <section className="section-white py-8 border-b border-gray-100 dark:border-navy-light">
        <div className="container-custom">
          <div className="max-w-md mx-auto mb-6"><div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search articles..." value={q} onChange={e => setQ(e.target.value)} className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white placeholder-gray-medium focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm" />
            {q && <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-medium hover:text-charcoal dark:hover:text-white transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>}
          </div></div>
          <div className="flex flex-wrap justify-center gap-3">{cats.map((c: any) => (
            <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${cat === c ? "bg-teal text-white shadow-md" : "bg-gray-light dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"}`}>{c}</button>
          ))}</div>
        </div>
      </section>
      <section className="section-gray py-16"><div className="container-custom">
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a: any, i: number) => (
              <motion.article key={a._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -8 }}
                className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light">
                <div className="relative h-52 overflow-hidden">
                  {a.featuredImage && <img src={urlFor(a.featuredImage).width(400).url()} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />}
                  <div className="absolute top-3 left-3"><span className="bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">{a.category}</span></div>
                </div>
                <div className="p-6"><p className="text-gray-medium dark:text-gray-400 text-xs mb-2">{a.publishedDate}</p>
                  <h3 className="font-heading font-bold text-navy dark:text-white text-xl mb-3 group-hover:text-teal transition-colors duration-300 line-clamp-2">{a.title}</h3>
                  <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">{a.excerpt}</p>
                  <Link href={`/news/${a.slug?.current}`} className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all duration-300">Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20"><p className="text-gray-medium dark:text-gray-400 text-lg">No articles found.</p></div>
        )}
      </div></section>
    </PageTransition>
  );
}