'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Technologies } from '@/components/Technologies';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen ${sidebarOpen && 'bg-black'} `}
    >
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Footer />
    </motion.main>
  );
}
