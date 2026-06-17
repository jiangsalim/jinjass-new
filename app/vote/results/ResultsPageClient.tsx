"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function ResultsPageClient() {
  const [loading, setLoading] = useState(true);

  return (
    <PageTransition>
      <PageHero
        title="Live Voting Results"
        subtitle="Real-time student leadership election results"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Voting Portal", href: "/vote" },
          { label: "Results" },
        ]}
        bgImage="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-navy-light"
            style={{ minHeight: "80vh" }}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-light dark:bg-navy-light z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-teal border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-navy dark:text-white font-heading">Loading Live Results...</p>
                </div>
              </div>
            )}
            <iframe
              src="https://jinjass-voting-portal.vercel.app/public/results"
              className="w-full border-0"
              style={{ minHeight: "80vh" }}
              onLoad={() => setLoading(false)}
              title="Live Voting Results"
            />
          </motion.div>

          <div className="text-center mt-8">
            <Link href="/vote" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy text-sm">
              ← Back to Voting Portal
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}