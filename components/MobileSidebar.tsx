'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { socialLinks } from '@/lib/portfolio-data';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const socialIcons: Record<string, React.ReactNode> = {
  github: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  blog: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm3.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
};

const navIcons: Record<
  'projects' | 'technologies' | 'timeline',
  React.ReactNode
> = {
  projects: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h16M4 12h16M4 17h16"
      />
    </svg>
  ),
  technologies: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
      />
    </svg>
  ),
  timeline: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
      />
    </svg>
  ),
};

const navAnchors = [
  { href: '#projects', key: 'projects' as const },
  { href: '#technologies', key: 'technologies' as const },
  { href: '#timeline', key: 'timeline' as const },
] as const;

export function MobileSidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const t = useTranslations('nav');

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 right-0 left-0 z-30 h-[calc(100dvh-4rem)] bg-black/45 backdrop-blur-[2px] md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden
          />

          {/* Sidebar panel */}
          <motion.aside
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
            className="bg-background/95 fixed top-16 right-0 z-40 h-[calc(100dvh-4rem)] w-2/3 overflow-y-auto border-l border-white/10 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex min-h-full flex-col px-6 py-8">
              <ul className="flex flex-col gap-5">
                {navAnchors.map(({ href, key }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setSidebarOpen(false)}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 text-white/90 hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-white/70 group-hover:text-white">
                        {navIcons[key]}
                      </span>
                      <span className="text-base">{t(key)}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 sm:hidden">
                <div className="flex flex-col gap-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.icon}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                    >
                      <span className="text-white/70 group-hover:text-white">
                        {socialIcons[link.icon]}
                      </span>
                      <span className="text-sm">
                        {link.icon === 'github' ? 'GitHub' : 'Blog'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
