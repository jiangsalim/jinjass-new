"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Rules and guidelines for using our website"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
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
                Welcome to the Jinja Senior Secondary School website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                2. Use of Website
              </h2>
              <ul className="list-disc list-inside text-charcoal dark:text-gray-300 text-sm space-y-2 ml-4">
                <li>The content of this website is for general information and use only. It is subject to change without notice.</li>
                <li>You may not reproduce, duplicate, copy, sell, or exploit any portion of the website without express written permission from Jinja SS.</li>
                <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                3. Intellectual Property
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Jinja Senior Secondary School or its content suppliers and is protected by applicable copyright and intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                4. Limitation of Liability
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                Jinja Senior Secondary School shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this website. We do not guarantee that the website will be error-free, secure, or continuously available.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                5. External Links
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                This website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and accept no responsibility for them.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                6. Changes to Terms
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
                7. Contact Information
              </h2>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm">
                For questions about these Terms & Conditions, please contact:
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