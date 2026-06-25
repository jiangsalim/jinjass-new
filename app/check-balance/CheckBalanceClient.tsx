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

type PaymentMethod = "mtn" | "airtel" | null;

const mtnSteps = [
  { step: 1, text: "Dial", code: "*165#" },
  { step: 2, text: "Select", code: "Payments (4)" },
  { step: 3, text: "Select", code: "School Fees (3)" },
  { step: 4, text: "Select", code: "School Pay" },
  { step: 5, text: "Select", code: "Pay School Fees" },
  { step: 6, text: "Enter Student Payment Code" },
  { step: 7, text: "Enter Amount" },
  { step: 8, text: "Enter PIN to confirm" },
];

const airtelSteps = [
  { step: 1, text: "Dial", code: "*185#" },
  { step: 2, text: "Select", code: "School Fees" },
  { step: 3, text: "Select", code: "School Pay" },
  { step: 4, text: "Select", code: "Pay School Fees" },
  { step: 5, text: "Enter Payment Code" },
  { step: 6, text: "Enter Amount" },
  { step: 7, text: "Enter PIN to confirm" },
];

export default function CheckBalanceClient() {
  const [activeTab, setActiveTab] = useState<"code" | "qr">("code");
  const [paymentCode, setPaymentCode] = useState("");
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);
  const [paymentChecking, setPaymentChecking] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const code = activeTab === "code" ? paymentCode.trim() : studentId.trim();
  const steps = paymentMethod === "mtn" ? mtnSteps : airtelSteps;

  const handleQRScan = (scannedId: string) => {
    setStudentId(scannedId);
  };

  const handleCheck = async () => {
    if (!code) {
      setError(activeTab === "code" ? "Please enter your payment code" : "Please enter or scan your Student ID");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setShowPayment(false);
    setPaymentMethod(null);
    setShowInstructions(false);
    setPaymentSuccess(false);
    setImgError(false);
    setImgLoading(true);

    try {
      const params = activeTab === "code" ? `payment_code=${code}` : `student_id=${code}`;
      const response = await fetch(`/api/check-balance?${params}`);
      const data: ResultData = await response.json();

      if (data.success) {
        console.log("PHOTO URL:", data.student.photo_url);
        console.log("PHOTO URL LENGTH:", data.student.photo_url?.length);
        setResult(data);
        setPaymentAmount(data.fees.balance);
        setTimeout(() => setShowPayment(true), 500);
      } else {
        setError(data.error || "No record found");
      }
    } catch {
      setError("Cannot connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToPay = () => {
    if (!paymentMethod || paymentAmount <= 0) return;
    setShowInstructions(true);
  };

  const handleCheckPaymentStatus = async () => {
    setPaymentChecking(true);
    try {
      const params = activeTab === "code" ? `payment_code=${code}` : `student_id=${code}`;
      const response = await fetch(`/api/check-balance?${params}`);
      const data: ResultData = await response.json();

      if (data.success) {
        const oldBalance = result?.fees.balance || 0;
        const newBalance = data.fees.balance || 0;

        if (newBalance < oldBalance) {
          setPaymentSuccess(true);
          setResult(data);
          setShowInstructions(false);
        }
      }
    } catch {
      // Silently fail
    } finally {
      setPaymentChecking(false);
    }
  };

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = ["bg-teal", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-pink-500", "bg-indigo-500", "bg-red-500"];
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
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
      <PageHero title="Check Fee Balance & Pay" subtitle="Look up your balance and pay school fees" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Check Balance & Pay" }]} bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" />

      <section className="section-white py-16">
        <div className="container-custom max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.6 }}>

            <div className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-gray-100 dark:border-navy-light p-8 mb-8">
              <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-2 text-center">Student Fee Balance Checker</h2>
              <p className="text-gray-medium dark:text-gray-400 text-sm text-center mb-6">Check your fee balance using payment code or student card</p>
              <div className="flex justify-center mb-6">
                <div className="bg-gray-light dark:bg-navy rounded-full p-1 inline-flex">
                  <button onClick={() => { setActiveTab("code"); setError(""); setResult(null); setShowPayment(false); }} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "code" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"}`}>Payment Code</button>
                  <button onClick={() => { setActiveTab("qr"); setError(""); setResult(null); setShowPayment(false); }} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "qr" ? "bg-teal text-white shadow-md" : "text-charcoal dark:text-gray-300 hover:text-navy dark:hover:text-white"}`}>Student ID / QR</button>
                </div>
              </div>
              <div className="flex gap-3">
                <input type="text" value={activeTab === "code" ? paymentCode : studentId} onChange={(e) => activeTab === "code" ? setPaymentCode(e.target.value) : setStudentId(e.target.value)} onKeyDown={handleKeyDown} placeholder={activeTab === "code" ? "Enter payment code" : "Enter Student ID or scan QR"} className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-navy-light bg-gray-light dark:bg-navy text-charcoal dark:text-white placeholder-gray-medium focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-sm font-mono tracking-wide" maxLength={30} />
                {activeTab === "qr" && (
                  <motion.button onClick={() => setShowScanner(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-xl bg-teal/10 hover:bg-teal/20 flex items-center justify-center text-teal transition-colors flex-shrink-0" title="Scan QR Code">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9V7a2 2 0 012-2h1m10-2h1a2 2 0 012 2v2m0 6v1a2 2 0 01-2 2h-1m-10 0H5a2 2 0 01-2-2v-1m2-6h.01" /></svg>
                  </motion.button>
                )}
                <motion.button onClick={handleCheck} disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary px-8 py-3.5 text-base disabled:opacity-60 flex items-center gap-2 flex-shrink-0">
                  {loading ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Checking...</> : <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>Check</>}
                </motion.button>
              </div>
              {activeTab === "qr" && <p className="text-gray-medium dark:text-gray-400 text-xs text-center mt-3">Tap the QR icon to scan your student card</p>}
              {error && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm text-center">{error}</motion.div>}
            </div>

            <AnimatePresence>
              {result && (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }} className="space-y-6">
                  <div className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-gray-100 dark:border-navy-light p-8">
                    <div className="text-center mb-6 pb-6 border-b border-gray-100 dark:border-navy-light">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                        {result.student.photo_url && result.student.photo_url.length > 10 ? (
                          <>
                            {imgLoading && !imgError && (
                              <div className={`w-full h-full ${getAvatarColor(result.student.name)} flex items-center justify-center`}>
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              </div>
                            )}
                            <img
                              key={code}
                              src={result.student.photo_url}
                              alt={result.student.name}
                              className={`w-full h-full object-cover ${imgLoading && !imgError ? 'hidden' : 'block'}`}
                              onLoad={() => setImgLoading(false)}
                              onError={() => { setImgError(true); setImgLoading(false); }}
                              referrerPolicy="no-referrer"
                            />
                            {imgError && (
                              <div className={`w-full h-full ${getAvatarColor(result.student.name)} flex items-center justify-center`}>
                                <span className="text-white font-heading font-bold text-2xl">{getInitials(result.student.name)}</span>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className={`w-full h-full ${getAvatarColor(result.student.name)} flex items-center justify-center`}>
                            <span className="text-white font-heading font-bold text-2xl">{getInitials(result.student.name)}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-navy dark:text-white mb-1">{result.student.name}</h3>
                      <p className="text-gray-medium dark:text-gray-400 text-sm">{result.student.class} {result.student.stream} | {result.student.category}</p>
                    </div>
                    <div className="bg-gray-light dark:bg-navy rounded-xl p-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm"><span className="text-gray-medium dark:text-gray-400">Total Fees</span><span className="text-navy dark:text-white font-semibold">{result.fees.total.toLocaleString()} UGX</span></div>
                        <div className="flex justify-between text-sm"><span className="text-gray-medium dark:text-gray-400">Amount Paid</span><span className="text-green-600 dark:text-green-400 font-semibold">{result.fees.paid.toLocaleString()} UGX</span></div>
                        <div className="flex justify-between text-sm pt-3 border-t border-gray-200 dark:border-navy-light"><span className="text-navy dark:text-white font-bold">Balance</span><span className="text-teal font-bold text-lg">{result.fees.balance.toLocaleString()} UGX</span></div>
                      </div>
                      <div className="mt-4 flex items-center gap-3"><span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(result.fees.status)}`}>{result.fees.status}</span></div>
                      <div className="mt-4"><div className="h-3 bg-gray-200 dark:bg-navy-light rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${result.fees.percentage}%` }} transition={{ duration: 1, ease: "easeOut" }} className="h-full bg-teal rounded-full" /></div><p className="text-xs text-gray-medium dark:text-gray-400 mt-2">{result.fees.percentage}% paid</p></div>
                    </div>
                    {result.history && result.history.length > 0 && (
                      <div className="mb-6"><h4 className="font-heading font-bold text-navy dark:text-white mb-3">Payment History</h4><div className="overflow-x-auto -mx-4 sm:mx-0"><table className="w-full text-xs sm:text-sm min-w-[400px]"><thead><tr className="bg-navy text-white"><th className="p-3 text-left rounded-l-lg">Date</th><th className="p-3 text-left">Method</th><th className="p-3 text-right rounded-r-lg">Amount</th></tr></thead><tbody>{result.history.map((h: any, i: number) => (<tr key={i} className="border-b border-gray-100 dark:border-navy-light"><td className="p-3 text-charcoal dark:text-gray-300">{h.date}</td><td className="p-3 text-charcoal dark:text-gray-300">{h.method}</td><td className="p-3 text-right text-navy dark:text-white font-medium">{h.amount.toLocaleString()} UGX</td></tr>))}</tbody></table></div></div>
                    )}
                    <motion.a href={`/api/check-balance/statement?payment_code=${activeTab === "code" ? paymentCode : ""}&student_id=${activeTab === "qr" ? studentId : ""}`} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 w-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>Download PDF Statement
                    </motion.a>
                  </div>

                  {showPayment && !paymentSuccess && (
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-teal/20 dark:border-teal/10 p-8">
                      <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center"><svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="font-heading font-bold text-xl text-navy dark:text-white">Pay Fees Now</h3></div>
                      <div className="mb-6"><label className="block text-sm font-medium text-navy dark:text-white mb-2">Amount to Pay (UGX)</label><input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(Number(e.target.value))} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-navy-light bg-gray-light dark:bg-navy text-charcoal dark:text-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all text-lg font-bold" min={1000} max={result.fees.balance} /><p className="text-gray-medium dark:text-gray-400 text-xs mt-2">Balance: {result.fees.balance.toLocaleString()} UGX</p></div>
                      <div className="mb-6"><label className="block text-sm font-medium text-navy dark:text-white mb-3">Select Payment Method</label>
                        <div className="grid grid-cols-2 gap-3">
                          {[{ id: "mtn" as PaymentMethod, label: "MTN Mobile Money", color: "border-yellow-400", ussd: "*165#" }, { id: "airtel" as PaymentMethod, label: "Airtel Money", color: "border-red-400", ussd: "*185#" }].map((m) => (
                            <button key={m.id} onClick={() => setPaymentMethod(m.id)} className={`p-4 rounded-xl border-2 transition-all text-center ${paymentMethod === m.id ? `${m.color} bg-teal/5 dark:bg-teal/10` : "border-gray-200 dark:border-navy-light hover:border-gray-300"}`}><span className="text-lg font-bold text-navy dark:text-white block mb-1">{m.ussd}</span><span className="text-xs font-medium text-navy dark:text-white">{m.label}</span></button>
                          ))}
                        </div>
                      </div>
                      <motion.button onClick={handleProceedToPay} disabled={!paymentMethod || paymentAmount <= 0} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed">Proceed to Pay {paymentAmount.toLocaleString()} UGX</motion.button>
                    </motion.div>
                  )}

                  {showInstructions && paymentMethod && (
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-teal/20 dark:border-teal/10 p-8">
                      <h3 className="font-heading font-bold text-xl text-navy dark:text-white mb-4 text-center">{paymentMethod === "mtn" ? "MTN Mobile Money" : "Airtel Money"} Payment</h3>
                      <div className="bg-gray-light dark:bg-navy rounded-xl p-6 mb-4"><p className="text-sm text-charcoal dark:text-gray-300 mb-4">Follow these steps on your phone:</p><ol className="space-y-3 text-sm">{steps.map((s, i) => (<li key={i} className="flex gap-3"><span className="w-6 h-6 bg-teal text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{s.step}</span><span className="text-charcoal dark:text-gray-300">{s.text} {s.code ? (s.step === 6 && paymentMethod === "mtn" ? <strong className="text-teal">{code}</strong> : s.step === 5 && paymentMethod === "airtel" ? <strong className="text-teal">{code}</strong> : s.step === 7 && paymentMethod === "mtn" ? <strong className="text-teal">{paymentAmount.toLocaleString()} UGX</strong> : s.step === 6 && paymentMethod === "airtel" ? <strong className="text-teal">{paymentAmount.toLocaleString()} UGX</strong> : <strong className="text-teal">{s.code}</strong>) : (s.text.includes("Amount") ? <strong className="text-teal">{paymentAmount.toLocaleString()} UGX</strong> : s.text.includes("Payment Code") ? <strong className="text-teal">{code}</strong> : null)}</span></li>))}</ol></div>
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl text-sm text-yellow-700 dark:text-yellow-400 mb-4">Wait for confirmation SMS before checking status below.</div>
                      <motion.button onClick={handleCheckPaymentStatus} disabled={paymentChecking} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full py-4 text-base disabled:opacity-60">{paymentChecking ? <span className="flex items-center justify-center gap-2"><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Checking Payment...</span> : "I've Paid — Check Status"}</motion.button>
                      <button onClick={() => { setShowInstructions(false); setPaymentMethod(null); }} className="w-full text-center text-sm text-gray-medium hover:text-charcoal dark:hover:text-white mt-3 transition-colors">← Choose different method</button>
                    </motion.div>
                  )}

                  {paymentSuccess && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                      <h3 className="font-heading font-bold text-xl text-green-700 dark:text-green-400 mb-2">Payment Confirmed!</h3>
                      <p className="text-green-600 dark:text-green-400 text-sm mb-4">Your payment has been received. Balance updated successfully.</p>
                      <button onClick={() => { setPaymentSuccess(false); setShowPayment(false); }} className="text-teal font-medium text-sm hover:underline">Make Another Payment</button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section-gray py-12"><div className="container-custom max-w-xl mx-auto text-center"><p className="text-gray-medium dark:text-gray-400 text-sm">Need help? Contact the Bursar&apos;s Office at <a href="tel:+256752811017" className="text-teal font-medium hover:underline">0752811017</a> or email <a href="mailto:jinjass1948@gmail.com" className="text-teal font-medium hover:underline">jinjass1948@gmail.com</a></p></div></section>

      <QRScanner isOpen={showScanner} onScan={handleQRScan} onClose={() => setShowScanner(false)} />
    </PageTransition>
  );
}