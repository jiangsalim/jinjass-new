"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "News & Events", href: "/news" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact" },
      { label: "Admissions", href: "/admissions" },
      { label: "E-Learning", href: "/e-learn" },
      { label: "E-Report", href: "/e-report" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "School History", href: "/about/history" },
      { label: "Head Teacher", href: "/about/head-teacher" },
      { label: "School Anthem", href: "/about/anthem" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Academics Overview", href: "/academics" },
      { label: "Subjects", href: "/academics/subjects" },
      { label: "UNEB Results", href: "/academics/results" },
      { label: "Timetable", href: "/academics/timetable" },
    ],
  },
  {
    title: "Sports",
    links: [
      { label: "Sports Overview", href: "/sports" },
      { label: "Football", href: "/sports/football" },
      { label: "Netball", href: "/sports/netball" },
      { label: "Cricket", href: "/sports/cricket" },
      { label: "Volleyball", href: "/sports/volleyball" },
    ],
  },
  {
    title: "Student Clubs",
    links: [
      { label: "Clubs Overview", href: "/clubs" },
      { label: "Debate Club", href: "/clubs/debate" },
      { label: "Scripture Union", href: "/clubs/scripture-union" },
      { label: "Writers Club", href: "/clubs/writers" },
      { label: "Wildlife Club", href: "/clubs/wildlife" },
      { label: "Science Club", href: "/clubs/science" },
      { label: "ICT Club", href: "/clubs/ict" },
      { label: "Red Cross Club", href: "/clubs/red-cross" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        title="Sitemap"
        subtitle="Find every page on our website"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <section className="section-gray py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sitemapData.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-navy-light rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-navy-light"
              >
                <h3 className="font-heading font-bold text-lg text-navy dark:text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-charcoal dark:text-gray-300 hover:text-teal transition-colors text-sm flex items-center gap-2 group"
                      >
                        <svg
                          className="w-3 h-3 text-teal opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}