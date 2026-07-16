import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy">
      <div className="text-center px-4">
        <div className="w-24 h-24 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth={1.5} />
            <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={1.5} />
          </svg>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-charcoal dark:text-gray-300 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}