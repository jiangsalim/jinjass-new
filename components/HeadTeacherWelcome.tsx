"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function HeadTeacherWelcome() {
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-5 gap-10 items-center">
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
                <div className="w-full h-full bg-cover bg-center bg-no-repeat flex items-end"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                  }}
                >
                  <div className="bg-navy/80 backdrop-blur-sm w-full p-4 text-center">
                    <p className="text-white font-heading font-bold text-lg">
                      Balimusangayo Isaac
                    </p>
                    <p className="text-teal text-sm">Head Teacher</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="md:pl-4">
              <SectionHeading
                title="Welcome to Jinja SS"
                subtitle="A Message from Our Head Teacher"
                centered={false}
              />

              <div className="space-y-4 text-charcoal leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Welcome to Jinja Senior Secondary School, a government school
                  offering both O&apos;Level and A&apos;Level education to day
                  and boarding scholars. Founded in 1948, we have proudly
                  served Uganda for over 75 years.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Our commitment remains steadfast — to be a center of
                  excellence in producing the best-informed competent citizens
                  for national and global service. We achieve this through
                  quality all-round education, teamwork, networking, and faith.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  With over 185 dedicated teachers and a wide range of academic
                  subjects and co-curricular activities, we nurture knowledge,
                  skills, talent, leadership, and character in every student.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-6"
              >
                <Link href="/about/head-teacher" className="btn-secondary">
                  Read More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}