"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OneCardCTA() {
  return (
    <section className="section-navy py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1.5} />
              <path d="M8 2v4M16 2v4M2 10h20" strokeWidth={1.5} />
            </svg>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            OneCard Admin Portal
          </h2>
          <p className="text-gray-medium text-lg mb-8 max-w-xl mx-auto">
            School administrators — access the OneCard system for student
            management, fee tracking, attendance, and meal monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://onecard-system-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light text-lg"
            >
              Access OneCard →
            </a>
          </div>

          <p className="text-gray-medium text-sm mt-6">
            Powered by{" "}
            <a
              href="https://herman-software-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal font-medium hover:underline"
            >
              Herman Software Solutions
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}