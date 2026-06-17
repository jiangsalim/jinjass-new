"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function VotePageClient() {
  const [loading, setLoading] = useState(true);

  return (
    <PageTransition>
      <PageHero
        title="Voting Portal"
        subtitle="Cast your vote for student leadership"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Voting Portal" },
        ]}
        bgImage="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-navy-light"
            style={{ minHeight: "80vh" }}
          >
            {/* Loading State */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-light dark:bg-navy-light z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-teal border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-navy dark:text-white font-heading">Loading Voting Portal...</p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              src="https://jinjass-voting-portal.vercel.app"
              className="w-full border-0"
              style={{ minHeight: "80vh" }}
              onLoad={() => setLoading(false)}
              title="Student Voting Portal"
              allow="camera; microphone; autoplay"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-gray py-10">
        <div className="container-custom text-center">
          <p className="text-charcoal dark:text-gray-300 text-sm mb-4">
            Having trouble voting? Contact the ICT Department for assistance.
          </p>
          <a
            href="https://jinjass-voting-portal.vercel.app/public/results"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            View Public Results
          </a>
        </div>
      </section>
    </PageTransition>
  );
}