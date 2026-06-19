"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";

export default function HeadTeacherPageClient({ headTeacher }: any) {
  const name = headTeacher?.fullName || "Head Teacher";
  const title = headTeacher?.title || "Head Teacher — Jinja Senior Secondary School";
  const bio = headTeacher?.bio || "";
  const photo = headTeacher?.photo ? urlFor(headTeacher.photo).width(400).url() : null;
  const email = headTeacher?.email || "";
  const phone = headTeacher?.phone || "";

  return (
    <PageTransition>
      <PageHero
        title="Head Teacher"
        subtitle="Meet the leader of the mighty school"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Head Teacher" },
        ]}
        bgImage={photo || "https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"}
      />

      <section className="section-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2"
            >
              <div className="relative">
                <div className="w-full aspect-[3/4] bg-gray-light dark:bg-navy rounded-2xl overflow-hidden shadow-xl">
                  {photo ? (
                    <img src={photo} alt={name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-20 h-20 text-gray-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal rounded-2xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="md:col-span-3"
            >
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-2">
                {name}
              </h1>
              <p className="text-teal font-semibold text-lg mb-6">
                {title}
              </p>

              <div className="space-y-4 text-charcoal dark:text-gray-300 leading-relaxed">
                {bio ? (
                  <p>{bio}</p>
                ) : (
                  <>
                    <p>
                      Serving as the Head Teacher of Jinja Senior Secondary School,
                      bringing experience in educational leadership and administration
                      to the mighty school.
                    </p>
                    <p>
                      Under this leadership, Jinja SS has continued to excel
                      academically, recording outstanding results in both UCE and
                      UACE national examinations.
                    </p>
                  </>
                )}

                {(email || phone) && (
                  <div className="flex flex-wrap gap-4 mt-6">
                    {email && (
                      <a href={`mailto:${email}`} className="flex items-center gap-2 bg-gray-light dark:bg-navy-light rounded-xl px-4 py-3 text-sm text-charcoal dark:text-gray-300 hover:text-teal transition-colors border border-gray-100 dark:border-navy-light">
                        <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {email}
                      </a>
                    )}
                    {phone && (
                      <a href={`tel:${phone}`} className="flex items-center gap-2 bg-gray-light dark:bg-navy-light rounded-xl px-4 py-3 text-sm text-charcoal dark:text-gray-300 hover:text-teal transition-colors border border-gray-100 dark:border-navy-light">
                        <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {phone}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-gray py-16">
        <div className="container-custom text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about/history" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
              School History
            </Link>
            <Link href="/about/anthem" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
              School Anthem
            </Link>
            <Link href="/administration" className="btn-primary">
              View Administration
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}