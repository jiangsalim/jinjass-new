"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

export default function Hero({ homePage }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroTitle = homePage?.heroTitle || "";
  const heroSubtitle = homePage?.heroSubtitle || "";
  const heroMotto = homePage?.heroMotto || "";
  const heroLocation = homePage?.heroLocation || "";
  const heroImage = homePage?.heroImage ? urlFor(homePage.heroImage).url() : "";
  const ctaButtons = homePage?.heroCta || [];

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        {heroImage && <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${heroImage}')` }} />}
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-hero-gradient" />
      <div className="container-custom relative z-10 text-center text-white pt-20 px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-teal tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base mb-4 font-medium">Since 1948</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white break-words">
          {heroTitle}<br /><span className="text-gradient">{heroSubtitle}</span>
        </motion.h1>
        {heroMotto && <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-white/70 italic text-base sm:text-lg md:text-xl mb-3 font-heading">&ldquo;{heroMotto}&rdquo;</motion.p>}
        {heroLocation && <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-gray-medium text-xs sm:text-sm mb-8 sm:mb-10 flex items-center justify-center gap-1">
          <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {heroLocation}
        </motion.p>}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          {ctaButtons.map((btn: any, i: number) => (
            <Link key={i} href={btn.link || "/"} className={btn.style === "outline" ? "btn-outline-light text-base sm:text-lg" : "btn-primary text-base sm:text-lg"}>{btn.text}</Link>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div className="w-1.5 h-1.5 bg-teal rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}