'use client';

import { useTranslations } from 'next-intl';

type Props = { slug: string };

export default function ProjectDetailClient({ slug }: Props) {
  const t = useTranslations('projects');
  /** TODO: 카드 작업 추가 예정.. */
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{t(`items.${slug}.title`)}</h1>
      <p className="mt-4 whitespace-pre-line text-white/70">
        {t(`items.${slug}.detail`)}
      </p>
    </main>
  );
}
