"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function EReportPage() {
  return (
    <PageTransition>
      <PageHero
        title="E-Report"
        subtitle="Access student report cards and academic results online"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "E-Report" },
        ]}
      />

      <section className="section-white py-20">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl font-bold text-navy dark:text-white mb-4">
                Results Portal
              </h2>
              <p className="text-charcoal dark:text-gray-300 mb-8 max-w-xl mx-auto">
                Access your academic results and download report cards. Students
                and parents can view term performance, exam scores, and teacher
                comments.
              </p>
            </div>

            {/* Steps */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  step: "1",
                  title: "Enter Details",
                  desc: "Enter your student ID and PIN provided by the school.",
                },
                {
                  step: "2",
                  title: "View Results",
                  desc: "Access your complete academic results for the current term.",
                },
                {
                  step: "3",
                  title: "Download",
                  desc: "Download and print your official report card as a PDF.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-navy dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-medium dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <a
                href="#"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Access Results Portal
              </a>
              <p className="text-gray-medium dark:text-gray-400 text-sm">
                Need help? Contact the ICT Department at{" "}
                <span className="text-teal font-medium">0759669212</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}