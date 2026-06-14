"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "E-Learning", href: "/e-learn" },
  { label: "Results Portal", href: "/e-report" },
  { label: "Gallery", href: "/gallery" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:jinjass1948@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+256701044833",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/school-badge.png"
                  alt="Jinja SS Badge"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-lg">
                  Jinja SS
                </h3>
                <p className="text-teal text-xs tracking-wider uppercase">
                  The Mighty School
                </p>
              </div>
            </div>
            <p className="text-gray-medium text-sm leading-relaxed mb-6">
              We are Jinja Senior Secondary School (JINJA SS), a government
              school offering both O&apos;Level and A&apos;Level education to
              day and boarding scholars. Founded in 1948, the school has proudly
              served Uganda for over 75 years through academic excellence,
              discipline, leadership, sports, innovation, and holistic
              education.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-medium hover:text-teal hover:border-teal/30 hover:bg-teal/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white font-heading font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-medium hover:text-teal transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white font-heading font-bold text-lg mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">Address</p>
                  <p className="text-gray-medium text-sm">
                    School Lane, Plot 124 Madhvani Market
                    <br />
                    Jinja City, P.O. Box 255
                    <br />
                    Jinja, Uganda
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <a
                    href="mailto:jinjass1948@gmail.com"
                    className="text-gray-medium text-sm hover:text-teal transition-colors"
                  >
                    jinjass1948@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <a
                    href="tel:+256701044833"
                    className="text-gray-medium text-sm hover:text-teal transition-colors"
                  >
                    0701044833 (FEES)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-medium text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Jinja Senior Secondary School. All
              Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-gray-medium hover:text-teal transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/terms"
                className="text-gray-medium hover:text-teal transition-colors text-sm"
              >
                Terms
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/sitemap"
                className="text-gray-medium hover:text-teal transition-colors text-sm"
              >
                Sitemap
              </Link>
            </div>

            {/* Developer Credit */}
            <p className="text-gray-medium text-sm text-center sm:text-right">
              Developed by{" "}
              <a
                href="https://herman-software-website.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal font-semibold hover:text-white transition-colors duration-300"
              >
                Herman Software Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}