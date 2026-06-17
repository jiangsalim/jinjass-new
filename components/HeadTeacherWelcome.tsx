"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { urlFor } from "@/lib/sanity";

export default function HeadTeacherWelcome({ staff }: any) {
  const ht = staff?.find((s: any) => s.title?.toLowerCase().includes("head teacher"));
  if (!ht) return null;
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.7 }} className="md:col-span-2">
            <div className="relative">
              <div className="w-full aspect-[3/4] bg-gray-light rounded-2xl overflow-hidden shadow-xl">
                {ht.photo && <img src={urlFor(ht.photo).width(400).url()} alt={ht.fullName} className="w-full h-full object-cover" />}
                <div className="absolute bottom-0 left-0 right-0 bg-navy/80 backdrop-blur-sm w-full p-4 text-center">
                  <p className="text-white font-heading font-bold text-lg">{ht.fullName}</p>
                  <p className="text-teal text-sm">{ht.title}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal rounded-2xl -z-10" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: 0.2, duration: 0.7 }} className="md:col-span-3">
            <SectionHeading title="Welcome to Jinja SS" subtitle="A Message from Our Head Teacher" centered={false} />
            <p className="text-charcoal dark:text-gray-300 leading-relaxed">{ht.bio}</p>
            <Link href={`/administration/${ht.slug?.current}`} className="btn-secondary mt-6 inline-block">Read More</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}