"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const sports = [
  {
    name: "Football",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "/sports/football",
  },
  {
    name: "Netball",
    image:
      "https://images.unsplash.com/photo-1519748771451-a94c9565e3b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "/sports/netball",
  },
  {
    name: "Cricket",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "/sports/cricket",
  },
  {
    name: "Volleyball",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "/sports/volleyball",
  },
];

const clubs = [
  { name: "Debate Club", slug: "/clubs/debate" },
  { name: "Scripture Union", slug: "/clubs/scripture-union" },
  { name: "Writers Club", slug: "/clubs/writers" },
  { name: "Wildlife Club", slug: "/clubs/wildlife" },
  { name: "Science Club", slug: "/clubs/science" },
  { name: "ICT Club", slug: "/clubs/ict" },
  { name: "Red Cross Club", slug: "/clubs/red-cross" },
];

export default function SportsSection() {
  return (
    <section className="section-navy py-20">
      <div className="container-custom">
        <SectionHeading
          title="Sports & MDD"
          subtitle="Football, Netball, Basketball, Rugby, Cricket, Tennis, Handball, Athletics, Mind Games and Music Dance & Drama (MDD)"
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${sport.image}')` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-heading font-bold text-2xl mb-3 group-hover:text-teal transition-colors duration-300">
                  {sport.name}
                </h3>
                <Link
                  href={sport.slug}
                  className="inline-flex items-center gap-1 text-teal font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Learn More
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
            </motion.div>
          ))}
        </div>

        {/* Student Clubs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-white font-heading font-bold text-xl mb-4">
            Student Clubs
          </h3>
          <p className="text-gray-medium text-sm mb-6">
            Encouraging leadership, innovation and personal growth through:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clubs.map((club) => (
              <Link
                key={club.name}
                href={club.slug}
                className="bg-teal/10 text-teal border border-teal/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal/20 hover:border-teal/40 transition-all duration-300"
              >
                {club.name}
              </Link>
            ))}
            <Link
              href="/clubs"
              className="bg-teal/10 text-teal border border-teal/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal/20 hover:border-teal/40 transition-all duration-300"
            >
              And Many More...
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}