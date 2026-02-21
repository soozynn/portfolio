'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { projectKeys } from '@/lib/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';

const placeholderImage = '/next.svg';

export function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectKeys.map((key, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-(--card) shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            >
              <div className="flex aspect-video items-center justify-center bg-white/5 p-6">
                <Image
                  src={placeholderImage}
                  alt="Project card image"
                  className="h-20 max-h-full w-auto object-contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 line-clamp-6 text-sm leading-relaxed text-(--muted)">
                  {t(`items.${key}.description`)}
                </p>
                {/* TODO: 프로젝트 별 상세보기 페이지 추가 작업 예정 */}
                {/* <Link
                  href={`/projects/${key}`}
                  className="mt-3 inline-flex items-center gap-1 self-start rounded-md border border-blue-400/30 px-3 py-1.5 text-sm font-medium text-blue-300 transition-all duration-200 ease-out hover:border-blue-300 hover:bg-blue-400/10 hover:text-blue-200 focus:ring-2 focus:ring-blue-400/40 focus:outline-none active:scale-[0.98]"
                >
                  {t('livePreview')}
                </Link> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
