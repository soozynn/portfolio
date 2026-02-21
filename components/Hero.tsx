'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="flex min-h-screen items-center pt-16 pb-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl"
            >
              Hello, I&apos;m <span className="gradient-text">soozynn</span>,{' '}
              <span className="mt-1 block">frontend developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-xl text-base whitespace-pre-line text-(--muted) sm:text-lg lg:mx-0"
            >
              {t('summary')}
            </motion.p>
            {/* <motion.a
              href="/resume.pdf"
              download="resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gradient-bg mt-8 inline-block rounded-lg px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              {t('downloadCv')}
            </motion.a> */}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative shrink-0"
          >
            <div
              className="gradient-bg absolute inset-0 h-48 w-48 rounded-full opacity-80 blur-xl sm:h-56 sm:w-56"
              aria-hidden
            />
            <div
              className="absolute inset-0 h-52 w-52 rounded-full border-2 border-(--accent-ring)/50 sm:h-60 sm:w-60"
              aria-hidden
            />
            <div
              className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-(--accent-ring)/70 bg-(--card) sm:h-48 sm:w-48"
              aria-label={t('photoLabel')}
            >
              <span className="px-2 text-center text-sm text-(--muted)">
                <Image
                  src={'/photo.jpeg'}
                  alt="Profile photo"
                  fill
                  className="rounded-full object-cover"
                />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
