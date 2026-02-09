"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import { AboutMe } from "@/components/AboutMe";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <AboutMe />
      <Footer />
    </motion.main>
  );
}
