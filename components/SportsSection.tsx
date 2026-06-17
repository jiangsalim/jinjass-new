"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { urlFor } from "@/lib/sanity";

export default function SportsSection({ sports, clubs }: any) {
  return (
    <section className="section-navy py-20">
      <div className="container-custom">
        <SectionHeading title="Sports & MDD" subtitle="Football, Netball, Basketball, Rugby, Cricket, Tennis, Handball, Athletics, Mind Games and Music Dance & Drama (MDD)" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(sports || []).slice(0, 4).map((s: any, i: number) => (
            <motion.div key={s._id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.1, duration: 0.6 }} whileHover={{ y: -8 }}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              {s.image && <img src={urlFor(s.image).width(400).url()} alt={s.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-heading font-bold text-2xl mb-3 group-hover:text-teal transition-colors duration-300">{s.name}</h3>
                <Link href={`/sports/${s.slug?.current}`} className="inline-flex items-center gap-1 text-teal font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            </motion.div>
          ))}
        </div>
        {(clubs || []).length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-white font-heading font-bold text-xl mb-4">Student Clubs</h3>
            <p className="text-gray-medium text-sm mb-6">Encouraging leadership, innovation and personal growth through:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {(clubs || []).map((c: any) => (
                <Link key={c._id} href={`/clubs/${c.slug?.current}`} className="bg-teal/10 text-teal border border-teal/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal/20 transition-colors">{c.name}</Link>
              ))}
              <Link href="/clubs" className="bg-teal/10 text-teal border border-teal/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal/20 transition-colors">And Many More...</Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}