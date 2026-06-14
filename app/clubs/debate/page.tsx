"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function DebateClubPage() {
  return (
    <>
      <PageHero
        title="Debate Club"
        subtitle="Developing the leaders and orators of tomorrow"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Clubs", href: "/clubs" },
          { label: "Debate Club" },
        ]}
        bgImage="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                About Debate Club
              </h2>
              <div className="space-y-4 text-charcoal dark:text-gray-300 leading-relaxed">
                <p>
                  The Debate Club at Jinja Senior Secondary School is one of the most active and successful clubs. Students develop critical thinking, public speaking, research, and argumentation skills through regular practice sessions and competitions.
                </p>
                <p>
                  Our debaters compete at inter-house, district, regional, and national levels, consistently bringing home trophies and recognition for the school.
                </p>
                <h3 className="font-heading font-bold text-lg text-navy dark:text-white mt-6">What You&apos;ll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal">✅</span>
                    Public speaking and confidence building
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal">✅</span>
                    Research and evidence gathering
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal">✅</span>
                    Logical reasoning and argument structure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal">✅</span>
                    Teamwork and quick thinking under pressure
                  </li>
                </ul>
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
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Debate Club"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-gray-light dark:bg-navy-light rounded-2xl p-6 mt-4 border border-gray-100 dark:border-navy-light">
                <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-4">Quick Info</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-medium">Meetings</span>
                    <span className="text-navy dark:text-white font-medium">Wednesdays</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-medium">Venue</span>
                    <span className="text-navy dark:text-white font-medium">Main Hall</span>
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