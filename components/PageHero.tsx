"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  bgImage = "https://images.unsplash.com/photo-1523050854058-8df90910ec5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
}: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-3 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/90 text-lg max-w-xl mx-auto mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-sm"
        >
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className="w-3 h-3 text-white/60"
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
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-white/80 hover:text-teal transition-colors drop-shadow-md"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold drop-shadow-md">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}