"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { timelineKeys } from "@/lib/portfolio-data";

export function AboutMe() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16"
        >
          {t("title")}
        </motion.h2>

        <div className="hidden md:block">
          <div className="relative">
            <div
              className="absolute top-6 left-0 right-0 h-0.5 gradient-bar rounded-full"
              aria-hidden
            />
            <div className="grid grid-cols-4 gap-4 relative">
              {timelineKeys.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="w-4 h-4 rounded-full gradient-bg border-4 border-[var(--background)] z-10 flex-shrink-0"
                    aria-hidden
                  />
                  <span className="mt-4 text-lg font-bold text-white">
                    {t(`timeline.${key}.year`)}
                  </span>
                  <h3 className="mt-1 text-white font-medium">
                    {t(`timeline.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">
                    {t(`timeline.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-0">
          {timelineKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex gap-4 pb-12 last:pb-0"
            >
              {i < timelineKeys.length - 1 && (
                <div
                  className="absolute left-[7px] top-6 bottom-0 w-0.5 gradient-bar"
                  aria-hidden
                />
              )}
              <div
                className="w-4 h-4 rounded-full gradient-bg flex-shrink-0 z-10 mt-0.5"
                aria-hidden
              />
              <div>
                <span className="text-lg font-bold text-white">
                  {t(`timeline.${key}.year`)}
                </span>
                <h3 className="mt-1 text-white font-medium">
                  {t(`timeline.${key}.title`)}
                </h3>
                <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">
                  {t(`timeline.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
