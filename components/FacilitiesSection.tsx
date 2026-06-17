"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { urlFor } from "@/lib/sanity";

export default function FacilitiesSection({ facilities }: any) {
  if (!facilities || facilities.length === 0) return null;
  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading title="School Facilities" subtitle="We have science and technology labs where students carry out scientific experiments and STEM (Robotics) activities" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {(facilities || []).map((f: any, i: number) => (
            <motion.div key={f._id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.2, duration: 0.6 }} whileHover={{ y: -8 }}
              className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light">
              <div className="relative h-56 overflow-hidden">
                {f.image && <img src={urlFor(f.image).width(600).url()} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4"><h3 className="text-white font-heading font-bold text-xl">{f.title}</h3></div>
              </div>
              <div className="p-6"><p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-4">{f.description}</p><Link href="/facilities" className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all duration-300">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}