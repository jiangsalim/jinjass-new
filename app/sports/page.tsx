"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const sportsList = [
  {
    name: "Football",
    slug: "/sports/football",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our football teams compete at district, regional, and national levels with a proud history of success.",
  },
  {
    name: "Netball",
    slug: "/sports/netball",
    image: "https://images.unsplash.com/photo-1519748771451-a94c9565e3b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The netball team is a force to reckon with, consistently performing well in inter-school competitions.",
  },
  {
    name: "Cricket",
    slug: "/sports/cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Cricket is growing rapidly at Jinja SS with dedicated coaching and excellent facilities.",
  },
  {
    name: "Volleyball",
    slug: "/sports/volleyball",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our volleyball teams compete fiercely in both indoor and beach volleyball tournaments.",
  },
  {
    name: "Basketball",
    slug: "/sports/football",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Basketball is one of the fastest growing sports at Jinja SS with talented players emerging every year.",
  },
  {
    name: "Rugby",
    slug: "/sports/football",
    image: "https://images.unsplash.com/photo-1544621678-2cc1e4e72728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our rugby team are the USSSA Rugby 15s Champions 2026 — a historic achievement for the school.",
  },
  {
    name: "Athletics",
    slug: "/sports/football",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Jinja SS dominates in track and field events, winning multiple municipal and district marathons.",
  },
  {
    name: "Music, Dance & Drama",
    slug: "/sports/football",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Our MDD program nurtures creative talent through traditional and contemporary performances.",
  },
];

export default function SportsPage() {
  return (
    <>
      <PageHero
        title="Sports & Co-Curricular"
        subtitle="Developing talent, fitness, and teamwork through competitive sports"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sports" },
        ]}
        bgImage="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-gray py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsList.map((sport, index) => (
              <motion.div
                key={sport.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-navy-light"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${sport.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy dark:text-white text-lg mb-2">
                    {sport.name}
                  </h3>
                  <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {sport.description}
                  </p>
                  <Link
                    href={sport.slug}
                    className="inline-flex items-center gap-1 text-teal font-semibold text-sm hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}