"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const values = [
  "God Fearing",
  "Self Respect, Respect for Others & School Property",
  "Integrity",
  "Hardwork",
];

export default function AboutSection() {
  return (
    <section className="section-navy py-20">
      <div className="container-custom">
        <SectionHeading
          title="About Us"
          subtitle="Learn more about our school"
          light
        />

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-gray-medium leading-relaxed">
            We are Jinja Senior Secondary School (JINJA SS), a government school
            offering education at the O&apos;Level & A&apos;Level to both day
            and boarding scholars. Founded in 1948, we have proudly served
            Uganda for over 75 years while remaining committed to our Vision,
            Mission and Core Values.
          </p>
        </motion.div>

        {/* Vision, Mission, Values Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-white font-heading font-bold text-xl mb-3">Vision</h3>
            <p className="text-gray-medium text-sm leading-relaxed">
              To be a center of excellence in producing the best-informed
              competent citizens for national and global service.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-heading font-bold text-xl mb-3">Mission</h3>
            <p className="text-gray-medium text-sm leading-relaxed">
              To provide quality all round education through teamwork,
              networking and faith.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-white font-heading font-bold text-xl mb-3">Core Values</h3>
            <ul className="text-gray-medium text-sm leading-relaxed space-y-1.5">
              {values.map((value) => (
                <li key={value} className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {value}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Teachers Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-xl mx-auto text-center mt-12 bg-teal/10 border border-teal/20 rounded-2xl p-6"
        >
          <p className="text-white font-heading font-bold text-2xl mb-2">
            Over 185 Teachers
          </p>
          <p className="text-gray-medium text-sm">
            With an equipped teaching staff force of over 185 teachers, we have
            continuously registered outstanding excellence with remarkable
            results in both UCE and UACE examinations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}