"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

export default function StaffProfileClient({ member }: any) {
  if (!member) return <PageTransition><PageHero title="Not Found" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Administration", href: "/administration" }]} /><section className="section-white py-20"><div className="container-custom text-center"><Link href="/administration" className="btn-primary">Back to Administration</Link></div></section></PageTransition>;
  return (
    <PageTransition>
      <PageHero title={member.fullName} subtitle={member.title} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Administration", href: "/administration" }, { label: member.fullName }]} bgImage={member.photo ? urlFor(member.photo).url() : undefined} />
      <section className="section-white py-16"><div className="container-custom max-w-5xl mx-auto"><div className="grid md:grid-cols-3 gap-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} className="space-y-4">
          {member.photo && <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]"><img src={urlFor(member.photo).width(400).url()} alt={member.fullName} className="w-full h-full object-cover" /></div>}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: 0.2 }} className="md:col-span-2">
          <h1 className="font-heading text-3xl font-bold text-navy dark:text-white mb-2">{member.fullName}</h1>
          <p className="text-teal font-semibold text-lg mb-6">{member.title}</p>
          <p className="text-charcoal dark:text-gray-300 leading-relaxed">{member.bio}</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {member.email && <div className="flex items-center gap-3 bg-gray-light dark:bg-navy-light rounded-xl p-4"><svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span className="text-charcoal dark:text-gray-300 text-sm">{member.email}</span></div>}
            {member.phone && <div className="flex items-center gap-3 bg-gray-light dark:bg-navy-light rounded-xl p-4"><svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span className="text-charcoal dark:text-gray-300 text-sm">{member.phone}</span></div>}
          </div>
        </motion.div>
      </div>
      <div className="mt-10"><Link href="/administration" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">← Back to Administration</Link></div>
      </div></section>
    </PageTransition>
  );
}