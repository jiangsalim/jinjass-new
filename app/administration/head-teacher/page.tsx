"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

export default function HeadTeacherProfilePage() {
  return (
    <PageTransition>
      <PageHero
        title="Balimusangayo Isaac"
        subtitle="Head Teacher"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Balimusangayo Isaac" },
        ]}
        bgImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-16">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Photos */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Balimusangayo Isaac"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="At school assembly"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="md:col-span-2"
            >
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy dark:text-white mb-2">
                Balimusangayo Isaac
              </h1>
              <p className="text-teal font-semibold text-lg mb-6">
                Head Teacher — Jinja Senior Secondary School
              </p>

              <div className="space-y-4 text-charcoal dark:text-gray-300 leading-relaxed">
                <p>
                  Mr. Balimusangayo Isaac serves as the Head Teacher of Jinja
                  Senior Secondary School, bringing decades of experience in
                  educational leadership and administration to the mighty school.
                </p>
                <p>
                  Under his leadership, Jinja SS has continued to excel
                  academically, recording outstanding results in both UCE and
                  UACE national examinations. The school has also maintained
                  its dominance in co-curricular activities including sports,
                  music, dance, and drama.
                </p>
                <p>
                  Mr. Balimusangayo is committed to the school&apos;s vision of
                  being a center of excellence in producing the best-informed
                  competent citizens for national and global service. He
                  believes in holistic education that nurtures not just academic
                  ability but also character, discipline, and leadership.
                </p>

                <div className="bg-gray-light dark:bg-navy-light rounded-xl p-6 mt-6 border border-gray-100 dark:border-navy-light">
                  <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-3">
                    Message to Students
                  </h3>
                  <p className="italic text-charcoal dark:text-gray-300">
                    &ldquo;At Jinja SS, we believe every student has the
                    potential for greatness. Our role is to provide the
                    environment, guidance, and opportunities for that potential
                    to flourish. I encourage all our students to embrace hard
                    work, discipline, and the pursuit of excellence in
                    everything they do.&rdquo;
                  </p>
                </div>

                {/* Contact Info */}
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-gray-light dark:bg-navy-light rounded-xl p-4 border border-gray-100 dark:border-navy-light">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-charcoal dark:text-gray-300 text-sm">0200911740 (HM)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-light dark:bg-navy-light rounded-xl p-4 border border-gray-100 dark:border-navy-light">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-charcoal dark:text-gray-300 text-sm">headteacher@jinjass.sc.ug</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <Link href="/administration" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
              ← Back to Administration
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}