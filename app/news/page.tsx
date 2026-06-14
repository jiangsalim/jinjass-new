"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

const allNews = [
  {
    title: "Jinja SSS Rugby 15s Champions 2026",
    excerpt:
      "Celebrating our rugby team's outstanding achievement in the USSSA competitions. The team showed remarkable determination and skill throughout the tournament.",
    date: "April 15, 2026",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1544621678-2cc1e4e72728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "rugby-champions-2026",
  },
  {
    title: "Jinja District USSSA Football Finals",
    excerpt:
      "Our football team faced JIPRA in a thrilling district final held at Kakindu Stadium. The match ended 1-1 before penalties, where JIPRA narrowly won 4-2.",
    date: "April 3, 2026",
    category: "Football",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "football-finals-2026",
  },
  {
    title: "A Big Win in Athletics!",
    excerpt:
      "Jinja SSS emerged victorious in the 15km municipal marathon, outperforming 8 secondary schools across Jinja District in a stunning display of endurance.",
    date: "March 20, 2026",
    category: "Athletics",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "athletics-win-2026",
  },
  {
    title: "Students Shine in Co-curricular Activities",
    excerpt:
      "Students showcased exceptional talent and teamwork during inter-school competitions and co-curricular activities held this term.",
    date: "March 12, 2026",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "co-curricular-2026",
  },
  {
    title: "School Hosts Inter-House Science Fair",
    excerpt:
      "Students from all houses presented innovative science projects at the annual inter-house science fair. The event showcased creativity and scientific thinking.",
    date: "February 28, 2026",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "science-fair-2026",
  },
  {
    title: "Term One Academic Excellence Awards",
    excerpt:
      "Top-performing students were recognized at the term one academic excellence awards ceremony. Parents and guardians attended the colorful event.",
    date: "February 15, 2026",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "excellence-awards-2026",
  },
  {
    title: "New ICT Laboratory Officially Opened",
    excerpt:
      "The new state-of-the-art ICT laboratory was officially opened by the Minister of Education. The lab features 100 computers and high-speed internet.",
    date: "January 25, 2026",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "ict-lab-opening-2026",
  },
  {
    title: "Cultural Gala Day Celebrations",
    excerpt:
      "Students celebrated cultural diversity through traditional dances, music, food, and fashion. The event promoted unity and cultural appreciation.",
    date: "January 10, 2026",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "cultural-gala-2026",
  },
  {
    title: "Parents Day & Career Guidance Workshop",
    excerpt:
      "Parents gathered at the school for an interactive career guidance workshop featuring professionals from various fields mentoring students.",
    date: "December 5, 2025",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "parents-day-2025",
  },
];

const categories = [
  "All",
  "Sports",
  "Football",
  "Athletics",
  "Academics",
  "Activities",
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNews.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <PageHero
        title="News & Events"
        subtitle="Stay updated with the latest from Jinja Senior Secondary School"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News & Events" },
        ]}
      />

      {/* Search + Category Filter */}
      <section className="section-white py-8 border-b border-gray-100 dark:border-navy-light">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-medium"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles by title, category, or date..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 dark:border-navy-light bg-white dark:bg-navy-light text-charcoal dark:text-white placeholder-gray-medium dark:placeholder-gray-500 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-medium hover:text-charcoal dark:hover:text-white transition-colors"
                  aria-label="Clear search"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-teal text-white shadow-md"
                    : "bg-gray-light dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Count */}
      {searchQuery && (
        <section className="section-gray pt-8 pb-0">
          <div className="container-custom">
            <p className="text-center text-sm text-gray-medium">
              {filteredNews.length} result{filteredNews.length !== 1 ? "s" : ""} found
              {searchQuery && (
                <>
                  {" "}for &quot;<span className="text-teal font-medium">{searchQuery}</span>&quot;
                </>
              )}
            </p>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="section-gray py-16">
        <div className="container-custom">
          {filteredNews.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
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
                  <div className="p-6">
                    <p className="text-gray-medium dark:text-gray-400 text-xs mb-2">
                      {item.date}
                    </p>
                    <h3 className="font-heading font-bold text-navy dark:text-white text-xl mb-3 group-hover:text-teal transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.slug}`}
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
          ) : (
            <div className="text-center py-20">
              <svg
                className="w-16 h-16 text-gray-medium mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-gray-medium dark:text-gray-400 text-lg mb-2">
                No articles found
              </p>
              <p className="text-gray-medium dark:text-gray-400 text-sm">
                Try adjusting your search or category filter
              </p>
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 text-teal font-medium text-sm hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}