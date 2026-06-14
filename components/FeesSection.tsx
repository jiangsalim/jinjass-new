"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const oLevel = {
  title: "O'Level (S1 - S4)",
  new: {
    day: "411,600",
    uniformBoys: "140,000",
    uniformGirls: "120,000",
    hostelUniform: "40,000",
    hostel: "731,600",
  },
  continuing: {
    day: "350,600",
    hostel: "670,600",
  },
};

const aLevel = {
  title: "A'Level (S5 - S6)",
  new: {
    day: "426,600",
    uniformBoys: "120,000",
    uniformGirls: "120,000",
    hostelUniform: "40,000",
    hostel: "746,600",
  },
  continuing: {
    day: "365,600",
    hostel: "685,600",
  },
};

export default function FeesSection() {
  const [activeTab, setActiveTab] = useState<"o" | "a">("o");

  const currentData = activeTab === "o" ? oLevel : aLevel;

  return (
    <section className="section-gray py-20">
      <div className="container-custom">
        <SectionHeading
          title="School Fees Structure"
          subtitle="Academic Year 2026"
        />

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex justify-center mb-10"
        >
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveTab("o")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "o"
                  ? "bg-teal text-white shadow-md"
                  : "text-charcoal hover:text-navy"
              }`}
            >
              O&apos;Level
            </button>
            <button
              onClick={() => setActiveTab("a")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "a"
                  ? "bg-teal text-white shadow-md"
                  : "text-charcoal hover:text-navy"
              }`}
            >
              A&apos;Level
            </button>
          </div>
        </motion.div>

        {/* Fees Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* New Students Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-navy px-6 py-4">
                <h3 className="text-white font-heading font-bold text-xl">
                  New Students
                </h3>
                <p className="text-teal text-sm">First-time enrollment</p>
              </div>
              <div className="p-6 space-y-3">
                <FeeRow label="Day Scholars" value={currentData.new.day} />
                <FeeRow
                  label="Uniform (Boys)"
                  value={currentData.new.uniformBoys}
                  optional
                />
                <FeeRow
                  label="Uniform (Girls)"
                  value={currentData.new.uniformGirls}
                  optional
                />
                <FeeRow
                  label="Hostel Uniform"
                  value={currentData.new.hostelUniform}
                  optional
                />
                <div className="border-t border-gray-100 pt-3">
                  <FeeRow
                    label="Hostel (Boarding)"
                    value={currentData.new.hostel}
                    bold
                  />
                </div>
              </div>
            </motion.div>

            {/* Continuing Students Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-navy px-6 py-4">
                <h3 className="text-white font-heading font-bold text-xl">
                  Continuing Students
                </h3>
                <p className="text-teal text-sm">Returning scholars</p>
              </div>
              <div className="p-6 space-y-3">
                <FeeRow
                  label="Day Scholars"
                  value={currentData.continuing.day}
                />
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <FeeRow
                    label="Hostel (Boarding)"
                    value={currentData.continuing.hostel}
                    bold
                  />
                </div>
                <p className="text-xs text-gray-medium italic pt-2">
                  * Uniform costs are for new students only
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center text-gray-medium text-sm mt-8"
        >
          All fees are in Uganda Shillings (UGX). Contact the bursar for
          payment plans and inquiries.
        </motion.p>
      </div>
    </section>
  );
}

function FeeRow({
  label,
  value,
  optional = false,
  bold = false,
}: {
  label: string;
  value: string;
  optional?: boolean;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-charcoal text-sm flex items-center gap-1">
        {label}
        {optional && (
          <span className="text-xs text-gray-medium">(optional)</span>
        )}
      </span>
      <span
        className={`text-navy font-mono ${
          bold ? "font-bold text-lg text-teal" : "font-semibold"
        }`}
      >
        UGX {value}
      </span>
    </div>
  );
}