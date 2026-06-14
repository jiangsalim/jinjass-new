"use client";

import { useRef, useState, useEffect } from "react";
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

export default function HoverSearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredLinks = query
    ? searchLinks.filter(
        (link) =>
          link.label.toLowerCase().includes(query.toLowerCase()) ||
          link.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const groupedLinks = filteredLinks.reduce(
    (acc, link) => {
      if (!acc[link.category]) acc[link.category] = [];
      acc[link.category].push(link);
      return acc;
    },
    {} as Record<string, typeof searchLinks>
  );

  const showDropdown = isExpanded && query.length > 0;

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  const handleCollapse = () => {
    if (!query) {
      setIsExpanded(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;

    const flatLinks = filteredLinks;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < flatLinks.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && flatLinks[selectedIndex]) {
        window.location.href = flatLinks[selectedIndex].href;
      } else if (flatLinks.length > 0) {
        window.location.href = flatLinks[0].href;
      }
    } else if (e.key === "Escape") {
      setIsExpanded(false);
      setQuery("");
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className="relative flex items-center"
        onMouseEnter={handleExpand}
        onMouseLeave={handleCollapse}
        animate={{
          width: isExpanded || query ? 280 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="relative flex items-center w-full">
          {/* Search Icon */}
          <div
            className={`absolute left-0 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isExpanded || query
                ? "bg-teal text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
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
          </div>

          {/* Expanding Input */}
          <motion.input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsExpanded(true)}
            placeholder="Search..."
            className="w-full h-10 pl-12 pr-10 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 text-sm outline-none border border-white/20 focus:border-teal focus:bg-white/20 transition-colors duration-300"
            animate={{
              opacity: isExpanded || query ? 1 : 0,
              pointerEvents: isExpanded || query ? "auto" : ("none" as const),
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedIndex(-1);
                inputRef.current?.focus();
              }}
              className="absolute right-2 z-10 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <svg
                className="w-3 h-3"
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
          )}
        </div>
      </motion.div>

      {/* Dropdown Results */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-navy-light rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-navy-light z-50"
          >
            <div className="max-h-72 overflow-y-auto p-2">
              {Object.keys(groupedLinks).length > 0 ? (
                Object.entries(groupedLinks).map(([category, links]) => (
                  <div key={category} className="mb-1">
                    <p className="text-xs text-gray-medium uppercase tracking-wider px-3 py-2 font-semibold">
                      {category}
                    </p>
                    {links.map((link, i) => {
                      const flatIndex = filteredLinks.indexOf(link);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setQuery("");
                            setIsExpanded(false);
                          }}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group ${
                            flatIndex === selectedIndex
                              ? "bg-teal/10 text-teal"
                              : "hover:bg-gray-light dark:hover:bg-navy text-charcoal dark:text-gray-300 hover:text-teal"
                          }`}
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 text-gray-medium group-hover:text-teal transition-colors"
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
                          <span className="text-sm">{link.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-medium text-sm">No results found</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 dark:border-navy-light px-4 py-2.5 flex items-center justify-between text-xs text-gray-medium">
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
              <span>ESC Close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}