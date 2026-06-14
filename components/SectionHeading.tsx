"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-heading font-bold mb-3 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl mx-auto ${
            light ? "text-gray-medium" : "text-charcoal"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-20 h-1 bg-teal mt-4 ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}