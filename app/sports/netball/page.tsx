"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NetballPage() {
  return (
    <>
      <PageHero
        title="Netball"
        subtitle="Excellence on the court"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sports", href: "/sports" },
          { label: "Netball" },
        ]}
        bgImage="https://images.unsplash.com/photo-1519748771451-a94c9565e3b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
              <h2 className="font-heading text-2xl font-bold text-navy dark:text-white mb-4">
                Netball at Jinja SS
              </h2>
              <div className="space-y-4 text-charcoal dark:text-gray-300 leading-relaxed">
                <p>
                  Netball is a flagship sport for our female students at Jinja Senior Secondary School. The netball team consistently ranks among the best in Jinja District and beyond.
                </p>
                <p>
                  Our players receive professional coaching focused on ball handling, footwork, defensive strategies, and team coordination. The team practices regularly and participates in multiple tournaments each term.
                </p>
                <h3 className="font-heading font-bold text-lg text-navy dark:text-white mt-6">Program Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal mt-1">🏅</span>
                    Regular participants in USSSA Netball competitions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal mt-1">👥</span>
                    Junior and senior teams for all age groups
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal mt-1">🏟️</span>
                    Well-maintained netball courts on campus
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="bg-gray-light dark:bg-navy-light rounded-2xl p-6 h-fit border border-gray-100 dark:border-navy-light"
            >
              <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-4">Quick Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-medium">Coach</span>
                  <span className="text-navy dark:text-white font-medium">Available</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-medium">Training</span>
                  <span className="text-navy dark:text-white font-medium">Tue, Thu</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-medium">Venue</span>
                  <span className="text-navy dark:text-white font-medium">Netball Court</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-medium">Season</span>
                  <span className="text-navy dark:text-white font-medium">Term 1 & 2</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-gray py-12">
        <div className="container-custom text-center">
          <Link href="/sports" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
            ← Back to All Sports
          </Link>
        </div>
      </section>
    </>
  );
}