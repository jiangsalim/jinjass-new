"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ClubsPageClient({ clubs }: any) {
  return (
    <PageTransition>
      <PageHero title="Student Clubs" subtitle="Encouraging leadership, innovation and personal growth" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Clubs" }]} />
      <section className="section-gray py-12 sm:py-16">
        <div className="container-custom px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} className="text-center mb-10 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-4">Explore Our Clubs</h2>
            <p className="text-charcoal dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">Join a club that matches your interests and discover new talents while making lifelong friendships</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {(clubs || []).map((c: any, i: number) => (
              <motion.div key={c._id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: i * 0.08, duration: 0.5 }} whileHover={{ y: -8 }}>
                <Link href={`/clubs/${c.slug?.current}`} className="block bg-white dark:bg-navy-light rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {c.image ? <img src={urlFor(c.image).width(56).height(56).url()} alt={c.name} className="w-7 h-7 sm:w-8 sm:h-8 object-cover rounded-lg" /> : <svg className="w-7 h-7 sm:w-8 sm:h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-navy dark:text-white mb-2 group-hover:text-teal transition-colors">{c.name}</h3>
                  <p className="text-charcoal dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">{c.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BreadcrumbSchema
                   items={[
                    { name: "Home", url: "/" },
                    { name: "About", url: "/about" },
                    { name: "School History", url: "/about/history" },
                    { name: "Student Clubs", url: "/clubs" },
                 ]}
                 />
    </PageTransition>
  );
}