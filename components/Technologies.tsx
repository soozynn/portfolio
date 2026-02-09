"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { technologyConfig } from "@/lib/portfolio-data";

export function Technologies() {
  const t = useTranslations("technologies");

  return (
    <section id="technologies" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          {t("title")}
        </motion.h2>
        <ul className="space-y-5">
          {technologyConfig.map((tech, i) => (
            <motion.li
              key={tech.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <span className="text-white font-medium min-w-[180px]">
                {t(`items.${tech.id}`)}
              </span>
              <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                  className="h-full rounded-full gradient-bar"
                />
              </div>
              <span className="text-[var(--muted)] text-sm sm:w-24 text-right">
                {t(`levels.${tech.levelKey}`)}
              </span>
            </motion.li>
          ))}
        </ul>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-white mt-16 mb-6"
        >
          {t("additionalTitle")}
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {(["0", "1", "2", "3", "4", "5", "6"] as const).map((i) => (
            <li key={i} className="flex items-center gap-2 text-[var(--muted)]">
              <span
                className="w-2 h-2 rounded-full gradient-bg flex-shrink-0"
                aria-hidden
              />
              {t(`additional.${i}`)}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
