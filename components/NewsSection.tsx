"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { urlFor } from "@/lib/sanity";

export default function NewsSection({ newsArticles }: any) {
  if (!newsArticles || newsArticles.length === 0) return null;
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-end justify-between mb-12">
          <div className="flex-1"><SectionHeading title="News & Blog" subtitle="Stay updated with the latest school events, sports achievements, and official announcements" centered={false} /></div>
          <Link href="/news" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy text-sm whitespace-nowrap mb-6 sm:mb-0">View All News</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.slice(0, 4).map((a: any, i: number) => (
            <motion.article key={a._id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.1, duration: 0.6 }} whileHover={{ y: -8 }}
              className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100 dark:border-navy-light">
              <div className="relative h-48 overflow-hidden">
                {a.featuredImage && <img src={urlFor(a.featuredImage).width(400).url()} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />}
                <div className="absolute top-3 left-3"><span className="bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">{a.category}</span></div>
              </div>
              <div className="p-5">
                <p className="text-gray-medium dark:text-gray-400 text-xs mb-2">{a.publishedDate}</p>
                <h3 className="font-heading font-bold text-navy dark:text-white text-lg mb-2 group-hover:text-teal transition-colors duration-300 line-clamp-2">{a.title}</h3>
                <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">{a.excerpt}</p>
                <Link href={`/news/${a.slug?.current}`} className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all duration-300">Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}