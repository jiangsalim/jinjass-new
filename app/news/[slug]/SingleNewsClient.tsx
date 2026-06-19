"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export default function SingleNewsClient({ article, recent, slug }: any) {
  if (!article) return (
    <PageTransition>
      <PageHero title="Not Found" breadcrumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }]} />
      <section className="section-white py-12 sm:py-20">
        <div className="container-custom text-center px-4">
          <Link href="/news" className="btn-primary">Back to News</Link>
        </div>
      </section>
    </PageTransition>
  );

  return (
    <PageTransition>
      <PageHero title={article.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }, { label: article.title }]} bgImage={article.featuredImage ? urlFor(article.featuredImage).url() : undefined} />
      
      <section className="section-white py-10 sm:py-16">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2 min-w-0">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100 dark:border-navy-light">
                <span className="bg-teal/10 text-teal text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">{article.category}</span>
                <span className="text-gray-medium dark:text-gray-400 text-xs sm:text-sm">{article.publishedDate}</span>
                <span className="text-gray-medium dark:text-gray-400 text-xs sm:text-sm">By {article.author}</span>
              </div>
              <div className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none overflow-x-auto">
                <PortableText value={article.body} />
              </div>
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 dark:border-navy-light">
                <Link href="/news" className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all text-sm sm:text-base">← Back to News</Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <h3 className="font-heading font-bold text-navy dark:text-white text-lg sm:text-xl mb-4 sm:mb-6">Recent Posts</h3>
                <div className="space-y-3 sm:space-y-4">
                  {(recent || []).slice(0, 4).map((p: any) => (
                    <Link key={p._id} href={`/news/${p.slug?.current}`} className={`block p-3 sm:p-4 rounded-xl transition-all ${p.slug?.current === slug ? "bg-teal/10 border border-teal/20" : "bg-gray-light dark:bg-navy-light hover:bg-teal/5 border border-transparent"}`}>
                      <p className="text-navy dark:text-white font-medium text-xs sm:text-sm line-clamp-2 mb-1">{p.title}</p>
                      <p className="text-gray-medium dark:text-gray-400 text-xs">{p.publishedDate}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}