"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { urlFor } from "@/lib/sanity";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function GalleryPageClient({ images }: any) {
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState<any>(null);
  const cats = ["All", ...new Set((images || []).map((i: any) => i.category))];
  const filtered = cat === "All" ? images : (images || []).filter((i: any) => i.category === cat);

  return (
    <PageTransition>
      <PageHero title="Gallery" subtitle="Explore moments from Jinja Senior Secondary School" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
      
      {/* Category Filters */}
      <section className="section-white py-6 sm:py-8 border-b border-gray-100 dark:border-navy-light">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {cats.map((c: any) => (
              <button key={c} onClick={() => setCat(c)} 
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  cat === c ? "bg-teal text-white shadow-md" : "bg-gray-light dark:bg-navy-light text-charcoal dark:text-gray-300 hover:bg-teal/10 hover:text-teal"
                }`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-gray py-10 sm:py-16">
        <div className="container-custom px-4">
          {filtered.length > 0 ? (
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              <AnimatePresence>
                {filtered.map((i: any, idx: number) => (
                  <motion.div key={i._id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: idx * 0.05, duration: 0.4 }} whileHover={{ scale: 1.03 }} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg aspect-square" onClick={() => setSel(i)}>
                    <img src={urlFor(i.image).width(400).url()} alt={i.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div><p className="text-white font-semibold text-sm">{i.title}</p><p className="text-teal text-xs">{i.category}</p></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20"><p className="text-gray-medium dark:text-gray-400 text-lg">No images found.</p></div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSel(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
              <img src={urlFor(sel.image).url()} alt={sel.title} className="w-full h-full object-contain rounded-2xl max-h-[85vh]" />
              <button onClick={() => setSel(null)} className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-navy/80 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                <p className="text-white font-medium text-xs sm:text-sm">{sel.title}</p>
                <p className="text-teal text-xs">{sel.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BreadcrumbSchema
                   items={[
                    { name: "Home", url: "/" },
                    { name: "About", url: "/about" },
                    { name: "School History", url: "/about/history" },
                    { name: "Gallery", url: "/gallery" }
                 ]}
      />
    </PageTransition>
  );
}