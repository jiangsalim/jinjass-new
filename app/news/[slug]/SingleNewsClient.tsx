"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export default function SingleNewsClient({ article, recent, slug }: any) {
  if (!article) return <PageTransition><PageHero title="Not Found" breadcrumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }]} /><section className="section-white py-20"><div className="container-custom text-center"><Link href="/news" className="btn-primary">Back to News</Link></div></section></PageTransition>;
  return (
    <PageTransition>
      <PageHero title={article.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }, { label: article.title }]} bgImage={article.featuredImage ? urlFor(article.featuredImage).url() : undefined} />
      <section className="section-white py-16"><div className="container-custom"><div className="grid lg:grid-cols-3 gap-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-navy-light">
            <span className="bg-teal/10 text-teal text-sm font-semibold px-4 py-1.5 rounded-full">{article.category}</span>
            <span className="text-gray-medium dark:text-gray-400 text-sm">{article.publishedDate}</span>
            <span className="text-gray-medium dark:text-gray-400 text-sm">By {article.author}</span>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none"><PortableText value={article.body} /></div>
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-navy-light"><Link href="/news" className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all">← Back to News</Link></div>
        </motion.div>
        <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="lg:col-span-1">
          <div className="sticky top-24"><h3 className="font-heading font-bold text-navy dark:text-white text-xl mb-6">Recent Posts</h3>
            <div className="space-y-4">{(recent || []).slice(0, 4).map((p: any) => (
              <Link key={p._id} href={`/news/${p.slug?.current}`} className={`block p-4 rounded-xl transition-all ${p.slug?.current === slug ? "bg-teal/10 border border-teal/20" : "bg-gray-light dark:bg-navy-light hover:bg-teal/5 border border-transparent"}`}>
                <p className="text-navy dark:text-white font-medium text-sm line-clamp-2 mb-1">{p.title}</p><p className="text-gray-medium dark:text-gray-400 text-xs">{p.publishedDate}</p>
              </Link>
            ))}</div>
          </div>
        </motion.aside>
      </div></div></section>
    </PageTransition>
  );
}