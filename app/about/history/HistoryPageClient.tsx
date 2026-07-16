"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const timelineEvents = [
  {
    year: "1948",
    title: "Founded",
    description:
      "Jinja Senior Secondary School was established as a government school to serve the growing educational needs of Jinja District and surrounding areas.",
  },
  {
    year: "1960s",
    title: "Early Growth",
    description:
      "The school expanded its infrastructure and academic programs, introducing both O'Level and A'Level curricula to cater to the increasing student population.",
  },
  {
    year: "1980s",
    title: "Academic Excellence",
    description:
      "Jinja SS cemented its reputation as a center of academic excellence, consistently producing top performers in national examinations.",
  },
  {
    year: "2000s",
    title: "Modernization",
    description:
      "The school underwent significant modernization, including the establishment of ICT laboratories, expanded science facilities, and improved boarding amenities.",
  },
  {
    year: "2010s",
    title: "Sports Dominance",
    description:
      "Jinja SS emerged as a powerhouse in co-curricular activities, particularly in football, rugby, athletics, and music, dance & drama competitions.",
  },
  {
    year: "2020s",
    title: "Digital Transformation",
    description:
      "The school embraced digital learning platforms, e-reporting systems, and modern teaching methodologies to prepare students for the 21st century.",
  },
  {
    year: "Today",
    title: "The Mighty School",
    description:
      "With over 185 teachers and thousands of students, Jinja SS continues to nurture future leaders through academic excellence, discipline, and innovation.",
  },
];

export default function HistoryPageClient({ page }: any) {
  return (
    <PageTransition>
      <PageHero
        title={page?.title || "School History"}
        subtitle={page?.subtitle || "Over 75 years of academic excellence and holistic education"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "School History" },
        ]}
      />

      <section className="section-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Our Journey"
                subtitle="From humble beginnings to becoming one of Uganda's most respected secondary schools"
                centered={false}
              />
              <p className="text-charcoal dark:text-gray-300 leading-relaxed mb-4">
                Jinja Senior Secondary School (JINJA SS) was founded in 1948 as
                a government school to provide quality secondary education to
                the growing population of Jinja District and beyond.
              </p>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed mb-4">
                For over seven decades, the school has remained committed to its
                founding principles of academic excellence, discipline, and
                holistic development. From a modest beginning, Jinja SS has
                grown into one of the largest and most respected secondary
                schools in Uganda.
              </p>
              <p className="text-charcoal dark:text-gray-300 leading-relaxed">
                Today, the school proudly serves both day and boarding scholars
                at O&apos;Level and A&apos;Level, with a teaching staff of over
                185 dedicated professionals and a student population in the
                thousands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-gray py-20">
        <div className="container-custom">
          <SectionHeading
            title="Key Milestones"
            subtitle="A timeline of our growth and achievements"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal/30 dark:bg-teal/20 transform md:-translate-x-px" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex items-start mb-10 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-teal rounded-full transform -translate-x-1/2 mt-1.5 z-10 shadow-lg shadow-teal/25" />

                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-lg border border-gray-100 dark:border-navy-light hover:shadow-xl transition-shadow duration-300">
                      <span className="text-teal font-heading font-bold text-lg">
                        {event.year}
                      </span>
                      <h3 className="font-heading font-bold text-navy dark:text-white text-xl mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-navy py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "75+", label: "Years of Excellence" },
              { value: "185+", label: "Teachers" },
              { value: "5000+", label: "Students" },
              { value: "100%", label: "Commitment" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-4xl font-heading font-bold text-teal mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-medium dark:text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BreadcrumbSchema
       items={[
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "School History", url: "/about/history" },
      ]}
      />
    </PageTransition>
  );
}