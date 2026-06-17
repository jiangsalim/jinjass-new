"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const icons: any = {
  star: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  trophy: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  computer: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
};

export default function WhyChooseUs({ whyChooseUs }: any) {
  if (!whyChooseUs) return null;
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <SectionHeading title="Why Choose Us?" subtitle="We offer a balanced curriculum with a well-equipped teaching task force" />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {(whyChooseUs.reasons || []).map((r: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ delay: i * 0.15, duration: 0.6 }} whileHover={{ y: -10 }}
              className="bg-white dark:bg-navy-light rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-navy-light group">
              <div className="w-20 h-20 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal group-hover:scale-110 transition-all duration-300">
                <div className="text-teal group-hover:text-white transition-colors duration-300">{icons[r.icon] || icons.star}</div>
              </div>
              <h3 className="font-heading font-bold text-navy dark:text-white text-xl mb-3 group-hover:text-teal transition-colors duration-300">{r.title}</h3>
              <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}