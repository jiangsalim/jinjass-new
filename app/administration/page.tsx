"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const adminMembers = [
  {
    name: "Balimusangayo Isaac",
    title: "Head Teacher",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bio: "Mr. Balimusangayo Isaac serves as the Head Teacher of Jinja Senior Secondary School, bringing decades of experience in educational leadership and administration to the mighty school. Under his leadership, Jinja SS has continued to excel academically and in co-curricular activities.",
    email: "headteacher@jinjass.sc.ug",
    phone: "0200911740",
  },
  {
    name: "Khaweka Sam Wabomba Benard",
    title: "Deputy H/M I/C Academics O'Level & Boys' Hostel",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bio: "Mr. Khaweka oversees the academic program for O'Level students and manages the boys' hostel. He ensures that academic standards are maintained and that boarding students have a conducive living environment.",
    email: "academics.o@jinjass.sc.ug",
    phone: "0705402678",
  },
  {
    name: "Erangu Simon",
    title: "Deputy HM I/C Discipline",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bio: "Mr. Erangu Simon is responsible for maintaining discipline across the school. He works closely with students, teachers, and parents to ensure a safe and orderly learning environment.",
    email: "discipline@jinjass.sc.ug",
    phone: "0779202915",
  },
  {
    name: "Ongom William Olara",
    title: "Deputy HM I/C Administration",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bio: "Mr. Ongom William Olara handles the administrative operations of the school including records, logistics, and day-to-day management of school resources.",
    email: "admin@jinjass.sc.ug",
    phone: "0759669212",
  },
  {
    name: "Kisire Farida Tabandika",
    title: "Deputy H/M I/C A'Level & Girls' Hostel",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bio: "Mrs. Kisire Farida Tabandika oversees the A'Level academic program and manages the girls' hostel. She is dedicated to ensuring female students have a supportive and empowering environment.",
    email: "academics.a@jinjass.sc.ug",
    phone: "0759510070",
  },
  {
    name: "Mugabi Samuel",
    title: "Deputy H/M I/C Health, Sanitation, Estates & Co-Curricular",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bio: "Mr. Mugabi Samuel manages health services, sanitation standards, school estates, and co-curricular activities. He ensures the school environment is clean, safe, and conducive for both academic and extracurricular pursuits.",
    email: "cocurricular@jinjass.sc.ug",
    phone: "0752811017",
  },
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        title="Our Administration"
        subtitle="The team spearheading the progress of the mighty school"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Administration" },
        ]}
        bgImage="https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-gray py-16">
        <div className="container-custom">
          <div className="space-y-8 max-w-5xl mx-auto">
            {adminMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-navy-light rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-navy-light group hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3">
                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[250px] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent md:bg-gradient-to-r" />
                    {/* Mobile Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
                      <h3 className="text-white font-heading font-bold text-xl">
                        {member.name}
                      </h3>
                      <p className="text-teal text-sm">{member.title}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="hidden md:block mb-4">
                      <h3 className="font-heading font-bold text-2xl text-navy dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-teal font-medium text-sm mt-1">
                        {member.title}
                      </p>
                    </div>

                    <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-medium">
                        <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-charcoal dark:text-gray-300">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-medium">
                        <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-charcoal dark:text-gray-300">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}