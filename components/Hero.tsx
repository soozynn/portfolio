"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Hello, I&apos;m <span className="gradient-text">soozynn</span>,{" "}
              <span className="block mt-1">frontend developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[var(--muted)] text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
            >
              {t("summary")}
            </motion.p>
            <motion.a
              href="/resume.pdf"
              download="resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mt-8 px-8 py-3 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
            >
              {t("downloadCv")}
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div
              className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full gradient-bg opacity-80 blur-xl"
              aria-hidden
            />
            <div
              className="absolute inset-0 w-52 h-52 sm:w-60 sm:h-60 rounded-full border-2 border-[var(--accent-ring)]/50"
              aria-hidden
            />
            <div
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-[var(--accent-ring)]/70 bg-[var(--card)] flex items-center justify-center overflow-hidden"
              aria-label={t("photoLabel")}
            >
              <span className="text-[var(--muted)] text-sm text-center px-2">
                Photo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
