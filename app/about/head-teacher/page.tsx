"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function HeadTeacherPage() {
  return (
    <>
      <PageHero
        title="Head Teacher"
        subtitle="Meet the leader of the mighty school"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Head Teacher" },
        ]}
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2"
            >
              <div className="relative">
                <div className="w-full aspect-[3/4] bg-gray-light rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal rounded-2xl -z-10" />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="md:col-span-3"
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
                  educational leadership and administration to the mighty
                  school.
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-gray py-16">
        <div className="container-custom text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about/history" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
              School History
            </Link>
            <Link href="/about/anthem" className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy">
              School Anthem
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}