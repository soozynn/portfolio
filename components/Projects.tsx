"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { projectKeys } from "@/lib/portfolio-data";
import Image from "next/image";

const placeholderImage = "/next.svg";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectKeys.map((key, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-[var(--card)] overflow-hidden border border-white/5 shadow-lg"
            >
              <div className="aspect-video bg-white/5 flex items-center justify-center p-6">
                <Image
                  src={placeholderImage}
                  alt=""
                  className="object-contain max-h-full w-auto h-20"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
