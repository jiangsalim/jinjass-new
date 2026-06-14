"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const contacts = [
  {
    label: "Email",
    value: "jinjass1948@gmail.com",
    secondary: "jinjasss1948@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Fees & Finance",
    value: "0701044833 (FEES)",
    secondary: "0754447818 (FEES)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    label: "Bursar",
    value: "0752811017",
    secondary: "0741970632 (AS. BURSAR)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Administration",
    value: "0759669212 (SYST. ADMIN)",
    secondary: "0200911740 (HM)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Academics",
    value: "0779202915 (ADMIN)",
    secondary: "0705402678 (ACADEMICS)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <SectionHeading
          title="Get in Touch"
          subtitle="We'd love to hear from you. Reach out through any of the channels below."
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Address */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Our Location</h3>
                  <p className="text-gray-medium text-sm leading-relaxed">
                    School Lane, Plot 124 Madhvani Market
                    <br />
                    Jinja City
                    <br />
                    P.O. Box 255, Jinja, Uganda
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-light dark:bg-navy-light rounded-xl p-5 hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-navy-light"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center text-teal flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy dark:text-white text-sm mb-1">
                      {contact.label}
                    </h4>
                    <p className="text-charcoal dark:text-gray-300 text-sm font-medium">
                      {contact.value}
                    </p>
                    {contact.secondary && (
                      <p className="text-gray-medium dark:text-gray-400 text-sm mt-0.5">
                        {contact.secondary}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Download Report Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href="/e-report"
                className="flex items-center justify-center gap-2 bg-teal text-white text-center font-semibold py-4 px-6 rounded-xl hover:bg-teal-dark transition-colors duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Report Card
              </Link>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[500px]"
          >
            <div className="bg-gray-light dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg h-full border border-gray-100 dark:border-navy-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7535627061494!2d33.204876!3d0.434478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e7b9f7e7d9d6b%3A0x7c5a4b7c9d7b6c1e!2sJinja%20Senior%20Secondary%20School!5e0!3m2!1sen!2sug!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jinja Senior Secondary School Location"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}