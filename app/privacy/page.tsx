"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="section-white py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm mb-4">
                Last updated: June 2026
              </p>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed">
                Jinja Senior Secondary School (&ldquo;Jinja SS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy of our students, parents, staff, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                1. Information We Collect
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm mb-2">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-charcoal dark:text-gray-300 text-sm space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide through contact forms or admissions applications.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm mb-2">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-charcoal dark:text-gray-300 text-sm space-y-2 ml-4">
                <li>To respond to your inquiries and provide information about our school.</li>
                <li>To process admissions applications and communicate with applicants.</li>
                <li>To improve our website and enhance user experience.</li>
                <li>To send important updates, newsletters, and announcements.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                3. Information Sharing
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting school business, provided they agree to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                4. Data Security
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                5. Your Rights
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm mb-2">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-charcoal dark:text-gray-300 text-sm space-y-2 ml-4">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of receiving communications from us.</li>
                <li>Request information about how your data is processed.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                6. Contact Us
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-charcoal dark:text-gray-300 text-sm mt-2">
                <strong>Email:</strong> jinjass1948@gmail.com<br />
                <strong>Phone:</strong> 0701044833<br />
                <strong>Address:</strong> School Lane, Plot 124 Madhvani Market, Jinja City, P.O. Box 255, Jinja, Uganda
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}