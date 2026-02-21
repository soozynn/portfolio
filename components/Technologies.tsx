'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { technologyConfig } from '@/lib/portfolio-data';

export function Technologies() {
  const t = useTranslations('technologies');

  return (
    <section id="technologies" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-white sm:text-4xl"
        >
          {t('title')}
        </motion.h2>
        <ul className="space-y-5">
          {technologyConfig.map((tech, i) => (
            <motion.li
              key={tech.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="min-w-[180px] font-medium text-white">
                {t(`items.${tech.id}`)}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                  className="gradient-bar h-full rounded-full"
                />
              </div>
            </motion.li>
          ))}
        </ul>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-6 text-xl font-bold text-white"
        >
          {t('additionalTitle')}
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {(['0', '1', '2', '3', '4', '5', '6'] as const).map((i) => (
            <li key={i} className="flex items-center gap-2 text-(--muted)">
              <span
                className="gradient-bg h-2 w-2 shrink-0 rounded-full"
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
