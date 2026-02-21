'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { timelineKeys } from '@/lib/portfolio-data';

export function Timeline() {
  const t = useTranslations('timeline');

  return (
    <section id="timeline" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-3xl font-bold text-white sm:text-4xl"
        >
          {t('title')}
        </motion.h2>

        <div className="hidden md:block">
          <div className="relative">
            <div
              className="gradient-bar absolute top-6 right-0 left-0 h-0.5 rounded-full"
              aria-hidden
            />
            <div className="relative grid grid-cols-4 gap-4">
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
                    className="gradient-bg border-background z-10 h-4 w-4 shrink-0 rounded-full border-4"
                    aria-hidden
                  />
                  <span className="mt-4 text-lg font-bold text-white">
                    {t(`timeline.${key}.year`)}
                  </span>
                  <h3 className="mt-1 font-medium text-white">
                    {t(`timeline.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed whitespace-pre-line text-(--muted)">
                    {t(`timeline.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-0 md:hidden">
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
                  className="gradient-bar absolute top-6 bottom-0 left-[7px] w-0.5"
                  aria-hidden
                />
              )}
              <div
                className="gradient-bg z-10 mt-0.5 h-4 w-4 shrink-0 rounded-full"
                aria-hidden
              />
              <div>
                <span className="text-lg font-bold text-white">
                  {t(`timeline.${key}.year`)}
                </span>
                <h3 className="mt-1 font-medium text-white">
                  {t(`timeline.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed whitespace-pre-line text-(--muted)">
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
