"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

function CountUp({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 1500;
      const steps = 30;
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

  return <span>{count}</span>;
}

export default function TermDates() {
  const openingRef = useRef(null);
  const closingRef = useRef(null);
  const openingInView = useInView(openingRef, { margin: "-100px" });
  const closingInView = useInView(closingRef, { margin: "-100px" });

  return (
    <section className="section-white py-20">
      <div className="container-custom">
        <SectionHeading
          title="Term Two (2) 2026"
          subtitle="Key dates for the current term"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Opening */}
          <motion.div
            ref={openingRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-navy rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal/10 rounded-bl-full" />
            <div className="relative z-10">
              <p className="text-teal text-sm uppercase tracking-wider mb-2">
                Opening
              </p>
              <p className="text-4xl font-heading font-bold text-white mb-1">
                <CountUp target={25} isInView={openingInView} />
              </p>
              <p className="text-xl font-heading text-white mb-4">May 2026</p>
              <p className="text-gray-medium text-sm">
                All hostel students expected during day time
              </p>
              <p className="text-teal font-semibold mt-2">
                7:20 AM — 4:40 PM
              </p>
            </div>
          </motion.div>

          {/* Closing */}
          <motion.div
            ref={closingRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal/10 rounded-bl-full" />
            <div className="relative z-10">
              <p className="text-teal text-sm uppercase tracking-wider mb-2">
                Closing
              </p>
              <p className="text-4xl font-heading font-bold text-white mb-1">
                <CountUp target={21} isInView={closingInView} />
              </p>
              <p className="text-xl font-heading text-white mb-4">
                August 2026
              </p>
              <p className="text-gray-medium text-sm">
                Pick up your child early from school
              </p>
              <p className="text-teal font-semibold mt-2">10:00 AM Prompt</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}