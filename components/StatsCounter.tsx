"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Students", value: 5000, suffix: "+" },
  { label: "Teachers", value: 185, suffix: "+" },
  { label: "Co-curricular Activities", value: 15, suffix: "+" },
  { label: "Years of Excellence", value: 77, suffix: "" },
];

function CountUp({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }

    if (!isInView) {
      hasAnimated.current = false;
      setCount(0);
    }
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-heading font-bold text-teal mb-2">
        <CountUp target={value} suffix={suffix} isInView={isInView} />
      </div>
      <p className="text-gray-medium text-sm uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="section-navy py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            The Mighty School in Numbers
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Over 77 years of academic excellence, shaping Uganda&apos;s future
            leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}