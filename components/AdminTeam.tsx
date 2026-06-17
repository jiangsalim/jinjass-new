"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { urlFor } from "@/lib/sanity";

export default function AdminTeam({ staff }: any) {
  if (!staff || staff.length === 0) return null;
  return (
    <section className="section-navy py-20">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-end justify-between mb-12">
          <div className="flex-1"><SectionHeading title="Our Administration" subtitle="The team spearheading the progress of the mighty school" light centered={false} /></div>
          <Link href="/administration" className="btn-outline-light text-sm whitespace-nowrap mb-6 sm:mb-0">View All Members</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.slice(0, 6).map((m: any, i: number) => (
            <Link href={`/administration/${m.slug?.current}`} key={m._id}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.1, duration: 0.6 }} whileHover={{ y: -8 }}
                className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  {m.photo && <img src={urlFor(m.photo).width(400).url()} alt={m.fullName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 text-center"><h3 className="font-heading font-bold text-navy dark:text-white text-lg mb-1">{m.fullName}</h3><p className="text-gray-medium dark:text-gray-400 text-sm leading-snug">{m.title}</p></div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}