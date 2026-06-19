"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function VotePageClient() {
  return (
    <PageTransition>
      <PageHero
        title="Voting Portal"
        subtitle="Student Leadership Elections"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Voting Portal" },
        ]}
        bgImage="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-16 md:py-20">
        <div className="container-custom max-w-2xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-teal/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
              Student Voting Portal
            </h2>
            <p className="text-charcoal dark:text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Cast your vote for student leadership positions. Your voice matters in shaping the future of Jinja SS.
            </p>

            {/* Login Button */}
            <motion.a
              href="https://jinjass-voting-portal.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 inline-flex items-center gap-3 shadow-xl shadow-teal/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login to Vote
            </motion.a>

            {/* Admin Notice */}
            <p className="text-gray-medium dark:text-gray-400 text-sm mt-4">
              Only for administrators, teachers, and registered students
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 my-10 sm:my-12">
              <div className="flex-1 h-px bg-gray-200 dark:bg-navy-light" />
              <span className="text-gray-medium dark:text-gray-400 text-sm font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-navy-light" />
            </div>

            {/* View Results */}
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy dark:text-white mb-3">
              View Live Results
            </h3>
            <p className="text-charcoal dark:text-gray-300 text-sm mb-6">
              Students, parents, and the public can view ongoing election results in real-time.
            </p>
            <Link
              href="/vote/results"
              className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy text-sm"
            >
              View Live Results
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-gray py-16">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Secure Voting",
                desc: "Your vote is encrypted and anonymous. Only registered students can vote once.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Real-Time Results",
                desc: "Watch results update live as votes are cast. Transparent and fair elections.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: "Fair Process",
                desc: "Every candidate has an equal chance. Results are verified by the electoral commission.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-navy-light rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-navy-light"
              >
                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-teal">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-navy dark:text-white mb-2">{card.title}</h3>
                <p className="text-charcoal dark:text-gray-300 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}