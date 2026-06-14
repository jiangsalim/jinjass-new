"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function RedCrossClubPage() {
  return (
    <>
      <PageHero
        title="Red Cross Club"
        subtitle="Serving humanity with compassion and care"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Clubs", href: "/clubs" },
          { label: "Red Cross Club" },
        ]}
        bgImage="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              className="md:col-span-2"
            >
              <h2 className="font-heading text-3xl font-bold text-navy dark:text-white mb-4">
                About Red Cross Club
              </h2>
              <div className="space-y-4 text-charcoal dark:text-gray-300 leading-relaxed">
                <p>
                  The Red Cross Club trains students in first aid, health awareness, and humanitarian service. Members provide first aid coverage at school events and participate in community health outreach programs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Red Cross Club"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-gray-light dark:bg-navy-light rounded-2xl p-6 mt-4 border border-gray-100 dark:border-navy-light">
                <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-4">Quick Info</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-medium">Meetings</span>
                    <span className="text-navy dark:text-white font-medium">Tuesdays</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-medium">Venue</span>
                    <span className="text-navy dark:text-white font-medium">Sick Bay</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-medium">Open To</span>
                    <span className="text-navy dark:text-white font-medium">All Students</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mt-8">
            <Link href="/clubs" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
              ← Back to All Clubs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}