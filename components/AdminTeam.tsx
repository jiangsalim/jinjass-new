"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const adminMembers = [
  {
    name: "Balimusangayo Isaac",
    title: "Head Teacher",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    slug: "/administration/head-teacher",
  },
  {
    name: "Khaweka Sam Wabomba Benard",
    title: "Deputy H/M I/C Academics O'Level & Boys' Hostel",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    slug: "/administration/deputy-academics",
  },
  {
    name: "Erangu Simon",
    title: "Deputy HM I/C Discipline",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    slug: "/administration/deputy-discipline",
  },
  {
    name: "Ongom William Olara",
    title: "Deputy HM I/C Administration",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    slug: "/administration/deputy-admin",
  },
  {
    name: "Kisire Farida Tabandika",
    title: "Deputy H/M I/C A'Level & Girls' Hostel",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    slug: "/administration/deputy-alevel",
  },
  {
    name: "Mugabi Samuel",
    title: "Deputy H/M I/C Health, Sanitation, Estates & Co-Curricular",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    slug: "/administration/deputy-health",
  },
];

export default function AdminTeam() {
  return (
    <section className="section-navy py-20">
      <div className="container-custom">
        {/* Heading + View All Link */}
        <div className="flex flex-col sm:flex-row items-end justify-between mb-12">
          <div className="flex-1">
            <SectionHeading
              title="Our Administration"
              subtitle="The team spearheading the progress of the mighty school"
              light
              centered={false}
            />
          </div>
          <Link
            href="/administration"
            className="btn-outline-light text-sm whitespace-nowrap mb-6 sm:mb-0"
          >
            View All Members
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminMembers.map((member, index) => (
            <Link href={member.slug} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="font-heading font-bold text-navy dark:text-white text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-medium dark:text-gray-400 text-sm leading-snug">
                    {member.title}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}