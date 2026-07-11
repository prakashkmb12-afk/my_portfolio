"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, BrainCircuit, ExternalLink } from "lucide-react";
import Typewriter from "src/components/visual/Typewriter";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold tracking-wide text-primary shadow-sm shadow-primary/5">
            <BrainCircuit size={14} className="text-primary animate-spin-[spin_3s_linear_infinite]" />
            <span>Aspiring AI/ML Engineer &middot; B.Tech B.Tech AIML</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-foreground"
        >
          Building Intelligent Systems
          <br className="hidden sm:inline" />
          With{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Typewriter
              words={[
                "Generative AI",
                "Large Language Models",
                "RAG Workflows",
                "Deep Learning",
                "MLOps Pipelines",
                "AI Agents",
              ]}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Final-year B.Tech Student in Artificial Intelligence and Machine Learning.
          Specializing in developing production-ready LLM agents, advanced retrieval pipelines,
          and robust deep learning models to solve complex engineering challenges.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-95 shadow-lg shadow-primary/25 hover:scale-[1.02] cursor-pointer transition-all duration-300 group"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-muted text-foreground font-semibold hover:scale-[1.02] cursor-pointer transition-all duration-300 border border-border"
          >
            <Mail size={16} />
            <span>Get in Touch</span>
          </button>
        </motion.div>

        {/* Social Badges / Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2 hover:bg-muted rounded-xl cursor-pointer"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2 hover:bg-muted rounded-xl cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors font-mono font-bold hover:bg-muted rounded-xl px-2.5 py-1 text-sm border border-border cursor-pointer flex items-center gap-1"
            aria-label="LeetCode Profile"
          >
            <span>LeetCode</span>
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Blur Glows (background visual anchors) */}
      <div className="absolute top-[80%] left-[50%] -translate-x-[50%] w-[80%] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
