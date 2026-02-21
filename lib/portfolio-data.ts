// Resume-based config: keys match messages.technologies.items & levels
export const technologyConfig = [
  { id: 'javascript', percent: 80 as const },
  { id: 'typescript', percent: 80 as const },
  { id: 'react', percent: 80 as const },
  { id: 'vue', percent: 80 as const },
  { id: 'pinia', percent: 80 as const },
  { id: 'tailwind', percent: 80 as const },
  { id: 'nextjs', percent: 65 as const },
  { id: 'zustandRedux', percent: 70 as const },
  { id: 'tanstackQuery', percent: 65 as const },
] as const;

export const projectKeys = ['adminB2c', 'adminB2b', 'hyatt'] as const;

export const timelineKeys = ['edu1', 'edu2', 'edu3', 'career'] as const;

export const socialLinks = [
  {
    href: 'https://github.com/soozynn',
    label: 'GitHub',
    icon: 'github' as const,
  },
  {
    href: 'https://soozynn.github.io',
    label: 'Blog',
    icon: 'blog' as const,
  },
] as const;

export const contact = {
  email: 'junsuejin98@gmail.com',
};
