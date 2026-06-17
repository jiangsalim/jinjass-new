"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

export default function AdministrationPageClient({ staff }: any) {
  return (
    <PageTransition>
      <PageHero title="Our Administration" subtitle="The team spearheading the progress of the mighty school" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Administration" }]} />
      <section className="section-gray py-16"><div className="container-custom"><div className="space-y-8 max-w-5xl mx-auto">
        {(staff || []).map((m: any, i: number) => (
          <Link href={`/administration/${m.slug?.current}`} key={m._id}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light group hover:shadow-xl transition-shadow cursor-pointer">
              <div className="grid md:grid-cols-3">
                <div className="relative h-64 md:h-full min-h-[250px] overflow-hidden">
                  {m.photo && <img src={urlFor(m.photo).width(400).url()} alt={m.fullName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden"><h3 className="text-white font-heading font-bold text-xl">{m.fullName}</h3><p className="text-teal text-sm">{m.title}</p></div>
                </div>
                <div className="md:col-span-2 p-6 md:p-8">
                  <div className="hidden md:block mb-4"><h3 className="font-heading font-bold text-2xl text-navy dark:text-white">{m.fullName}</h3><p className="text-teal font-medium text-sm mt-1">{m.title}</p></div>
                  <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-6">{m.bio}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {m.email && <div className="flex items-center gap-2 text-gray-medium"><svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span className="text-charcoal dark:text-gray-300">{m.email}</span></div>}
                    {m.phone && <div className="flex items-center gap-2 text-gray-medium"><svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span className="text-charcoal dark:text-gray-300">{m.phone}</span></div>}
                  </div>
                  <div className="mt-4"><span className="inline-flex items-center gap-1 text-teal font-semibold text-sm group-hover:gap-2 transition-all">View Full Profile <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span></div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div></div></section>
    </PageTransition>
  );
}