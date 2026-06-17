"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

export default function SingleSportClient({ sport }: any) {
  if (!sport) return <PageTransition><PageHero title="Not Found" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sports", href: "/sports" }]} /><section className="section-white py-20"><div className="container-custom text-center"><Link href="/sports" className="btn-primary">Back to Sports</Link></div></section></PageTransition>;
  return (
    <PageTransition>
      <PageHero title={sport.name} subtitle="" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sports", href: "/sports" }, { label: sport.name }]} bgImage={sport.image ? urlFor(sport.image).url() : undefined} />
      <section className="section-white py-16"><div className="container-custom max-w-4xl mx-auto"><div className="grid md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} className="md:col-span-2">
          <h2 className="font-heading text-2xl font-bold text-navy dark:text-white mb-4">{sport.name} at Jinja SS</h2>
          <p className="text-charcoal dark:text-gray-300 leading-relaxed">{sport.description}</p>
          {(sport.achievements || []).length > 0 && <><h3 className="font-heading font-bold text-lg text-navy dark:text-white mt-6">Achievements</h3><ul className="space-y-2 mt-2">{(sport.achievements || []).map((a: string, i: number) => (<li key={i} className="flex items-start gap-2"><span className="text-teal mt-1">🏆</span><span className="text-charcoal dark:text-gray-300 text-sm">{a}</span></li>))}</ul></>}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: 0.2 }} className="bg-gray-light dark:bg-navy-light rounded-2xl p-6 h-fit">
          <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-4">Quick Info</h3>
          <ul className="space-y-3 text-sm">
            {sport.coachName && <li className="flex justify-between"><span className="text-gray-medium">Coach</span><span className="text-navy dark:text-white font-medium">{sport.coachName}</span></li>}
            {sport.trainingDays && <li className="flex justify-between"><span className="text-gray-medium">Training</span><span className="text-navy dark:text-white font-medium">{sport.trainingDays}</span></li>}
            {sport.venue && <li className="flex justify-between"><span className="text-gray-medium">Venue</span><span className="text-navy dark:text-white font-medium">{sport.venue}</span></li>}
            {sport.season && <li className="flex justify-between"><span className="text-gray-medium">Season</span><span className="text-navy dark:text-white font-medium">{sport.season}</span></li>}
          </ul>
        </motion.div>
      </div>
      <div className="mt-10"><Link href="/sports" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">← Back to All Sports</Link></div>
      </div></section>
    </PageTransition>
  );
}