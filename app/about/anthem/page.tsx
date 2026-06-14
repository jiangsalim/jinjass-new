"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

export default function SchoolAnthemPage() {
  return (
    <>
      <PageHero
        title="School Anthem"
        subtitle="The song that unites the mighty school"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "School Anthem" },
        ]}
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-20">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-bold text-navy dark:text-white mb-4">
              Jinja SS Anthem
            </h2>
            <p className="text-charcoal dark:text-gray-300">
              Our school anthem reflects our values, our pride, and our
              commitment to excellence. It is sung with pride at every
              assembly, sports event, and school ceremony.
            </p>
          </motion.div>

          {/* Anthem Lyrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-navy rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="space-y-6 text-white/90 font-heading text-lg md:text-xl leading-relaxed italic">
              <p>Lift high the banner of our school,</p>
              <p>Jinja Senior Secondary,</p>
              <p>With reverence and questioning,</p>
              <p>We serve with dignity.</p>
              <p className="pt-4">Through discipline and hard work,</p>
              <p>We strive for excellence,</p>
              <p>Building future leaders,</p>
              <p>For Uganda and beyond.</p>
              <p className="pt-4 text-teal font-bold not-italic text-sm uppercase tracking-wider">
                — Jinja SS Anthem
              </p>
            </div>
          </motion.div>

          {/* Motto Reminder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-10"
          >
            <p className="text-gray-medium dark:text-gray-400 text-sm">
              School Motto: &ldquo;By Reverence, By Questioning, By
              Service&rdquo;
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}