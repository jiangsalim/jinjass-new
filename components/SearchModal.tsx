"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const searchLinks = [
  { label: "Home", href: "/", category: "Pages" },
  { label: "About — School History", href: "/about/history", category: "About" },
  { label: "About — Head Teacher", href: "/about/head-teacher", category: "About" },
  { label: "About — School Anthem", href: "/about/anthem", category: "About" },
  { label: "Academics — Subjects", href: "/academics/subjects", category: "Academics" },
  { label: "Academics — UNEB Results", href: "/academics/results", category: "Academics" },
  { label: "Academics — Timetable", href: "/academics/timetable", category: "Academics" },
  { label: "News & Events", href: "/news", category: "Pages" },
  { label: "Gallery", href: "/gallery", category: "Pages" },
  { label: "Contact Us", href: "/contact", category: "Pages" },
  { label: "Admissions", href: "/admissions", category: "Pages" },
  { label: "Fees Structure", href: "/#fees", category: "Pages" },
  { label: "Sports — Football", href: "/sports/football", category: "Sports" },
  { label: "Sports — Netball", href: "/sports/netball", category: "Sports" },
  { label: "Sports — Cricket", href: "/sports/cricket", category: "Sports" },
  { label: "Sports — Volleyball", href: "/sports/volleyball", category: "Sports" },
  { label: "Clubs — Debate", href: "/clubs/debate", category: "Clubs" },
  { label: "Clubs — Scripture Union", href: "/clubs/scripture-union", category: "Clubs" },
  { label: "Clubs — Writers", href: "/clubs/writers", category: "Clubs" },
  { label: "Clubs — Wildlife", href: "/clubs/wildlife", category: "Clubs" },
  { label: "Clubs — Science", href: "/clubs/science", category: "Clubs" },
  { label: "Clubs — ICT", href: "/clubs/ict", category: "Clubs" },
  { label: "Clubs — Red Cross", href: "/clubs/red-cross", category: "Clubs" },
  { label: "E-Learning", href: "/e-learn", category: "Pages" },
  { label: "E-Report", href: "/e-report", category: "Pages" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const filteredLinks = query
    ? searchLinks.filter(
        (link) =>
          link.label.toLowerCase().includes(query.toLowerCase()) ||
          link.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchLinks;

  const groupedLinks = filteredLinks.reduce(
    (acc, link) => {
      if (!acc[link.category]) acc[link.category] = [];
      acc[link.category].push(link);
      return acc;
    },
    {} as Record<string, typeof searchLinks>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-navy/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-navy-light rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100 dark:border-navy-light"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-navy-light">
              <svg
                className="w-5 h-5 text-gray-medium flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, sports, clubs..."
                className="flex-1 bg-transparent text-navy dark:text-white placeholder-gray-medium outline-none text-sm"
              />
              <button
                onClick={onClose}
                className="text-gray-medium hover:text-charcoal dark:hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto p-2">
              {Object.keys(groupedLinks).length > 0 ? (
                Object.entries(groupedLinks).map(([category, links]) => (
                  <div key={category} className="mb-2">
                    <p className="text-xs text-gray-medium uppercase tracking-wider px-3 py-2 font-semibold">
                      {category}
                    </p>
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-light dark:hover:bg-navy transition-colors group"
                      >
                        <svg
                          className="w-4 h-4 text-gray-medium group-hover:text-teal transition-colors flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        <span className="text-sm text-charcoal dark:text-gray-300 group-hover:text-teal transition-colors">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-medium text-sm">
                    No results found for &quot;{query}&quot;
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 dark:border-navy-light px-4 py-3 flex items-center justify-between text-xs text-gray-medium">
              <span>Press ESC to close</span>
              <span>{filteredLinks.length} results</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}