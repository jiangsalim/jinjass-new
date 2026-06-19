"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";

interface StudentData {
  name: string;
  class: string;
  stream: string;
  category: string;
}

interface FeeData {
  total: number;
  paid: number;
  balance: number;
  status: string;
  percentage: number;
}

interface PaymentHistory {
  date: string;
  method: string;
  amount: number;
}

interface ResultData {
  success: boolean;
  student: StudentData;
  fees: FeeData;
  history: PaymentHistory[];
  error?: string;
}

export default function CheckBalanceClient() {
  const [paymentCode, setPaymentCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    const code = paymentCode.trim();
    if (!code) {
      setError("Please enter your payment code");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `https://onecard.jinjasss.sc.ug/api/public/balance/?payment_code=${code}`,
        {
          headers: {
            "X-API-Key": "oc_688a9a64223ff54c33322aab88dc8ad832bff0a46afbdfe8",
          },
        }
      );

      const data: ResultData = await response.json();

      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || "No record found for this payment code");
      }
    } catch {
      setError("Cannot connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheck();
  };

  const getStatusColor = (status: string) => {
    if (status?.toLowerCase().includes("cleared")) return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
    if (status?.toLowerCase().includes("not")) return "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
  };

  return (
    <PageTransition>
      <PageHero
        title="Check Fee Balance"
        subtitle="Enter your payment code to view your fee balance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Check Balance" },
        ]}
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section-white py-16">
        <div className="container-custom max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Search Box */}
            <div className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-gray-100 dark:border-navy-light p-8 mb-8">
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-2 text-center">
                Student Fee Balance Checker
              </h2>
              <p className="text-gray-medium dark:text-gray-400 text-sm text-center mb-6">
                Enter the payment code found on your student&apos;s school card
              </p>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={paymentCode}
                  onChange={(e) => setPaymentCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter payment code (e.g., 1011101001)"
                  className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-navy-light bg-gray-light dark:bg-navy text-charcoal dark:text-white placeholder-gray-medium focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm font-mono tracking-wide"
                  maxLength={20}
                />
                <motion.button
                  onClick={handleCheck}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary px-8 py-3.5 text-base disabled:opacity-60 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Checking...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Check
                    </>
                  )}
                </motion.button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm text-center"
                >
                  {error}
                </motion.div>
              )}
            </div>

            {/* Result */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-gray-100 dark:border-navy-light p-8"
                >
                  {/* Student Info */}
                  <div className="text-center mb-6 pb-6 border-b border-gray-100 dark:border-navy-light">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-navy dark:text-white mb-1">
                      {result.student.name}
                    </h3>
                    <p className="text-gray-medium dark:text-gray-400 text-sm">
                      {result.student.class} {result.student.stream} | {result.student.category}
                    </p>
                  </div>

                  {/* Fees Box */}
                  <div className="bg-gray-light dark:bg-navy rounded-xl p-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-medium dark:text-gray-400">Total Fees</span>
                        <span className="text-navy dark:text-white font-semibold">{result.fees.total.toLocaleString()} UGX</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-medium dark:text-gray-400">Amount Paid</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold">{result.fees.paid.toLocaleString()} UGX</span>
                      </div>
                      <div className="flex justify-between text-sm pt-3 border-t border-gray-200 dark:border-navy-light">
                        <span className="text-navy dark:text-white font-bold">Balance</span>
                        <span className="text-teal font-bold text-lg">{result.fees.balance.toLocaleString()} UGX</span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="mt-4 flex items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(result.fees.status)}`}>
                        {result.fees.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="h-3 bg-gray-200 dark:bg-navy-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.fees.percentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-teal rounded-full"
                        />
                      </div>
                      <p className="text-xs text-gray-medium dark:text-gray-400 mt-2">{result.fees.percentage}% paid</p>
                    </div>
                  </div>

                  {/* Payment History */}
                  {result.history && result.history.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-heading font-bold text-navy dark:text-white mb-3">Payment History</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-navy text-white">
                              <th className="p-3 text-left rounded-l-lg">Date</th>
                              <th className="p-3 text-left">Method</th>
                              <th className="p-3 text-right rounded-r-lg">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.history.map((h, i) => (
                              <tr key={i} className="border-b border-gray-100 dark:border-navy-light">
                                <td className="p-3 text-charcoal dark:text-gray-300">{h.date}</td>
                                <td className="p-3 text-charcoal dark:text-gray-300">{h.method}</td>
                                <td className="p-3 text-right text-navy dark:text-white font-medium">{h.amount.toLocaleString()} UGX</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Download Button */}
                  <motion.a
                    href={`https://onecard.jinjasss.sc.ug/api/public/statement/?payment_code=${paymentCode}&api_key=oc_688a9a64223ff54c33322aab88dc8ad832bff0a46afbdfe8`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 w-full"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF Statement
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-gray py-12">
        <div className="container-custom max-w-xl mx-auto text-center">
          <p className="text-gray-medium dark:text-gray-400 text-sm">
            Need help? Contact the Bursar&apos;s Office at{" "}
            <a href="tel:+256752811017" className="text-teal font-medium hover:underline">
              0752811017
            </a>
            {" "}or email{" "}
            <a href="mailto:jinjass1948@gmail.com" className="text-teal font-medium hover:underline">
              jinjass1948@gmail.com
            </a>
          </p>
        </div>
      </section>
    </PageTransition>
  );
}