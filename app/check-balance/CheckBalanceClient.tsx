"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import QRScanner from "@/components/QRScanner";

interface StudentData {
  name: string;
  class: string;
  stream: string;
  category: string;
  photo_url: string;
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
  const [activeTab, setActiveTab] = useState<"code" | "qr">("code");
  const [paymentCode, setPaymentCode] = useState("");
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState("");
  const [showScanner, setShowScanner] = useState(false);

  const handleQRScan = (scannedId: string) => {
    setStudentId(scannedId);
  };

  const handleCheck = async () => {
    const code = activeTab === "code" ? paymentCode.trim() : studentId.trim();

    if (!code) {
      setError(activeTab === "code" ? "Please enter your payment code" : "Please enter or scan your Student ID");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const params = activeTab === "code"
        ? `payment_code=${code}`
        : `student_id=${code}`;

      const response = await fetch(`/api/check-balance?${params}`);
      const data: ResultData = await response.json();

      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || "No record found");
      }
    } catch {
      setError("Cannot connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-teal", "bg-blue-500", "bg-green-500", "bg-purple-500",
      "bg-orange-500", "bg-pink-500", "bg-indigo-500", "bg-red-500",
    ];
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheck();
  };

  const getStatusColor = (status: string) => {
    if (status?.toLowerCase().includes("cleared"))
      return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
    if (status?.toLowerCase().includes("not"))
      return "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
  };

  return (
    <PageTransition>
      <PageHero
        title="Check Fee Balance"
        subtitle="Enter your payment code or scan QR card to view your fee balance"
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
            <div className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-gray-100 dark:border-navy-light p-4 sm:p-8 mb-8">
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-2 text-center">
                Student Fee Balance Checker
              </h2>
              <p className="text-gray-medium dark:text-gray-400 text-sm text-center mb-6">
                Check your fee balance using payment code or student card
              </p>

              {/* Tabs */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-light dark:bg-navy rounded-full p-1 inline-flex">
                  <button
                    onClick={() => { setActiveTab("code"); setError(""); setResult(null); }}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      activeTab === "code"
                        ? "bg-teal text-white shadow-md"
                        : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"
                    }`}
                  >
                    Payment Code
                  </button>
                  <button
                    onClick={() => { setActiveTab("qr"); setError(""); setResult(null); }}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      activeTab === "qr"
                        ? "bg-teal text-white shadow-md"
                        : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"
                    }`}
                  >
                    Student ID / QR
                  </button>
                </div>
              </div>

              {/* Input with Scan Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={activeTab === "code" ? paymentCode : studentId}
                  onChange={(e) => activeTab === "code" ? setPaymentCode(e.target.value) : setStudentId(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={activeTab === "code" ? "Enter payment code (e.g., 1011101001)" : "Enter Student ID (e.g., STU-001) or scan QR"}
                  className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-navy-light bg-gray-light dark:bg-navy text-charcoal dark:text-white placeholder-gray-medium focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm font-mono tracking-wide w-full"
                  maxLength={30}
                />
                <div className="flex gap-3">
                  {activeTab === "qr" && (
                    <motion.button
                      onClick={() => setShowScanner(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-teal/10 hover:bg-teal/20 flex items-center justify-center text-teal transition-colors flex-shrink-0"
                      title="Scan QR Code"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9V7a2 2 0 012-2h1m10-2h1a2 2 0 012 2v2m0 6v1a2 2 0 01-2 2h-1m-10 0H5a2 2 0 01-2-2v-1m2-6h.01" />
                      </svg>
                    </motion.button>
                  )}
                  <motion.button
                    onClick={handleCheck}
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary px-6 sm:px-8 py-3.5 text-sm sm:text-base disabled:opacity-60 flex items-center gap-2 flex-shrink-0"
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
              </div>

              {activeTab === "qr" && (
                <p className="text-gray-medium dark:text-gray-400 text-xs text-center mt-3">
                  Tap the QR icon to scan your student card camera
                </p>
              )}

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
                  className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-gray-100 dark:border-navy-light p-4 sm:p-8"
                >
                  <div className="text-center mb-6 pb-6 border-b border-gray-100 dark:border-navy-light">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                      {result.student.photo_url ? (
                        <img
                          src={result.student.photo_url}
                          alt={result.student.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full ${getAvatarColor(result.student.name)} flex items-center justify-center`}>
                          <span className="text-white font-heading font-bold text-2xl">
                            {getInitials(result.student.name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy dark:text-white mb-1">
                      {result.student.name}
                    </h3>
                    <p className="text-gray-medium dark:text-gray-400 text-sm">
                      {result.student.class} {result.student.stream} | {result.student.category}
                    </p>
                  </div>

                  <div className="bg-gray-light dark:bg-navy rounded-xl p-4 sm:p-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-medium dark:text-gray-400">Total Fees</span>
                        <span className="text-navy dark:text-white font-semibold">
                          {result.fees.total.toLocaleString()} UGX
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-medium dark:text-gray-400">Amount Paid</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          {result.fees.paid.toLocaleString()} UGX
                        </span>
                      </div>
                      <div className="flex justify-between text-sm pt-3 border-t border-gray-200 dark:border-navy-light">
                        <span className="text-navy dark:text-white font-bold">Balance</span>
                        <span className="text-teal font-bold text-lg">
                          {result.fees.balance.toLocaleString()} UGX
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(result.fees.status)}`}>
                        {result.fees.status}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="h-3 bg-gray-200 dark:bg-navy-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.fees.percentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-teal rounded-full"
                        />
                      </div>
                      <p className="text-xs text-gray-medium dark:text-gray-400 mt-2">
                        {result.fees.percentage}% paid
                      </p>
                    </div>
                  </div>

                  {result.history && result.history.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-heading font-bold text-navy dark:text-white mb-3">Payment History</h4>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <table className="w-full text-sm min-w-[400px]">
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
                                <td className="p-3 text-charcoal dark:text-gray-300 whitespace-nowrap">{h.date}</td>
                                <td className="p-3 text-charcoal dark:text-gray-300 whitespace-nowrap">{h.method}</td>
                                <td className="p-3 text-right text-navy dark:text-white font-medium whitespace-nowrap">
                                  {h.amount.toLocaleString()} UGX
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <motion.a
                    href={`/api/check-balance/statement?payment_code=${activeTab === "code" ? paymentCode : ""}&student_id=${activeTab === "qr" ? studentId : ""}`}
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

      <section className="section-gray py-12">
        <div className="container-custom max-w-xl mx-auto text-center px-4">
          <p className="text-gray-medium dark:text-gray-400 text-sm">
            Need help? Contact the Bursar&apos;s Office at{" "}
            <a href="tel:+256752811017" className="text-teal font-medium hover:underline">
              0752811017
            </a>{" "}
            or email{" "}
            <a href="mailto:jinjass1948@gmail.com" className="text-teal font-medium hover:underline">
              jinjass1948@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* QR Scanner Modal */}
      <QRScanner
        isOpen={showScanner}
        onScan={handleQRScan}
        onClose={() => setShowScanner(false)}
      />
    </PageTransition>
  );
}