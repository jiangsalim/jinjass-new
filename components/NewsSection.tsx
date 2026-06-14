"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const newsItems = [
  {
    title: "Jinja SSS Rugby 15s Champions 2026",
    excerpt:
      "Celebrating our rugby team's outstanding achievement in the USSSA competitions.",
    date: "15th April 2026",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1544621678-2cc1e4e72728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/news/rugby-champions-2026",
  },
  {
    title: "Jinja District USSSA Football Finals",
    excerpt:
      "Our football team faced JIPRA in a thrilling district final at Kakindu Stadium. The match ended 1-1 before penalties.",
    date: "3rd April 2023",
    category: "Football",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/news/football-finals-2026",
  },
  {
    title: "A Big Win in Athletics!",
    excerpt:
      "Jinja SSS emerged victorious in the 15km municipal marathon, outperforming 8 secondary schools across Jinja District.",
    date: "12th Feb 2022",
    category: "Athletics",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/news/athletics-win-2026",
  },
  {
    title: "Students Shine in Co-curricular Activities",
    excerpt:
      "Students showcased exceptional talent and teamwork during inter-school competitions and co-curricular activities.",
    date: "20th March 2022",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/news/co-curricular-2026",
  },
];

export default function NewsSection() {
  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-end justify-between mb-12">
          <div className="flex-1">
            <SectionHeading
              title="News & Blog"
              subtitle="Stay updated with the latest school events, sports achievements, and official announcements"
              centered={false}
            />
          </div>
          <Link
            href="/news"
            className="btn-secondary dark:border-teal dark:text-teal dark:hover:bg-teal dark:hover:text-navy text-sm whitespace-nowrap mb-6 sm:mb-0"
          >
            View All News
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100 dark:border-navy-light"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-medium dark:text-gray-400 text-xs mb-2">
                  {item.date}
                </p>
                <h3 className="font-heading font-bold text-navy dark:text-white text-lg mb-2 group-hover:text-teal transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  href={item.slug}
                  className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all duration-300"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}