"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

export default function FacilitiesPageClient({ facilities }: any) {
  return (
    <PageTransition>
      <PageHero
        title="School Facilities"
        subtitle="Explore our state-of-the-art facilities and learning environments"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Facilities" },
        ]}
        bgImage="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-gray py-16">
        <div className="container-custom">
          {facilities && facilities.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {facilities.map((f: any, i: number) => (
                <motion.div
                  key={f._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light"
                >
                  <div className="relative h-64 overflow-hidden">
                    {f.image ? (
                      <img
                        src={urlFor(f.image).width(800).url()}
                        alt={f.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-light dark:bg-navy flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-white font-heading font-bold text-2xl">{f.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {f.description}
                    </p>
                    {f.features && f.features.length > 0 && (
                      <div className="space-y-2 mb-4">
                        <h4 className="font-heading font-bold text-navy dark:text-white text-sm">Features:</h4>
                        <ul className="space-y-1">
                          {f.features.map((feature: string, j: number) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-charcoal dark:text-gray-300">
                              <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-medium dark:text-gray-400 text-lg">
                No facilities found. Please add them in Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section-white py-12">
        <div className="container-custom text-center">
          <Link href="/" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
            ← Back to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}