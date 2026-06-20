"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[55] max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-navy-light rounded-2xl shadow-2xl border border-gray-100 dark:border-navy-light p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed">
                  We use cookies to analyze website traffic and improve your experience. By accepting, you agree to our{" "}
                  <Link href="/privacy" className="text-teal font-medium hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-medium hover:text-charcoal dark:hover:text-white border border-gray-200 dark:border-navy-light hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="btn-primary text-sm px-6 py-2.5"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}