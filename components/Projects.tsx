'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { projectKeys } from '@/lib/portfolio-data';
import Image from 'next/image';
// import Link from 'next/link';

type ProjectKey = (typeof projectKeys)[number];

const projectImages: Record<ProjectKey, string> = {
  adminB2c: '/projects/admin-b2c.png',
  adminB2b: '/projects/admin-b2b.png',
  hyatt: '/projects/hyatt.jpg',
};

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
          {projectKeys.map((key, i) => {
            const src = projectImages[key] ?? placeholderImage;

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-xl border border-white/10 bg-(--card) shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              >
                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <Image
                    src={src}
                    alt={t(`items.${key}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i === 0}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="pointer-events-none absolute right-3 bottom-2 left-3">
                    <p className="text-[11px] leading-snug text-white/85">
                      {t(`imageNotice.${key}`)}
                    </p>
                  </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
