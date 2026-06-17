"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

export default function SingleClubClient({ club }: any) {
  if (!club) return <PageTransition><PageHero title="Not Found" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clubs", href: "/clubs" }]} /><section className="section-white py-20"><div className="container-custom text-center"><Link href="/clubs" className="btn-primary">Back to Clubs</Link></div></section></PageTransition>;
  return (
    <PageTransition>
      <PageHero title={club.name} subtitle={club.category} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Clubs", href: "/clubs" }, { label: club.name }]} bgImage={club.image ? urlFor(club.image).url() : undefined} />
      <section className="section-white py-16"><div className="container-custom max-w-4xl mx-auto"><div className="grid md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} className="md:col-span-2">
          <h2 className="font-heading text-2xl font-bold text-navy dark:text-white mb-4">About {club.name}</h2>
          <p className="text-charcoal dark:text-gray-300 leading-relaxed">{club.description}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: 0.2 }} className="bg-gray-light dark:bg-navy-light rounded-2xl p-6 h-fit">
          {club.image && <div className="rounded-xl overflow-hidden mb-4"><img src={urlFor(club.image).width(400).url()} alt={club.name} className="w-full h-48 object-cover" /></div>}
          <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-4">Quick Info</h3>
          <ul className="space-y-3 text-sm">
            {club.meetingDays && <li className="flex justify-between"><span className="text-gray-medium">Meetings</span><span className="text-navy dark:text-white font-medium">{club.meetingDays}</span></li>}
            {club.venue && <li className="flex justify-between"><span className="text-gray-medium">Venue</span><span className="text-navy dark:text-white font-medium">{club.venue}</span></li>}
            {club.openTo && <li className="flex justify-between"><span className="text-gray-medium">Open To</span><span className="text-navy dark:text-white font-medium">{club.openTo}</span></li>}
          </ul>
        </motion.div>
      </div>
      <div className="mt-10"><Link href="/clubs" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">← Back to All Clubs</Link></div>
      </div></section>
    </PageTransition>
  );
}