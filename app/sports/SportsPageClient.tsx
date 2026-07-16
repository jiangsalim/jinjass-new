"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function SportsPageClient({ sports }: any) {
  return (
    <PageTransition>
      <PageHero title="Sports & Co-Curricular" subtitle="Developing talent, fitness, and teamwork through competitive sports" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sports" }]} bgImage="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />
      <section className="section-gray py-16"><div className="container-custom"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(sports || []).map((s: any, i: number) => (
          <motion.div key={s._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -8 }}
            className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light">
            <div className="relative h-48 overflow-hidden">
              {s.image && <img src={urlFor(s.image).width(400).url()} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
            <div className="p-5"><h3 className="font-heading font-bold text-navy dark:text-white text-lg mb-2">{s.name}</h3><p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{s.description}</p>
              <Link href={`/sports/${s.slug?.current}`} className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
            </div>
          </motion.div>
        ))}
      </div></div></section>
      <BreadcrumbSchema
                   items={[
                    { name: "Home", url: "/" },
                    { name: "About", url: "/about" },
                    { name: "School History", url: "/about/history" },
                    { name: "Sports", url: "/sports" }
                 ]}
      />
    </PageTransition>
  );
}