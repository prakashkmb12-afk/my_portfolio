"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, BrainCircuit, Download } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT SIDE: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 space-y-6">
            
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold tracking-wide text-primary shadow-sm shadow-primary/5">
                <BrainCircuit size={14} className="text-primary animate-pulse" />
                <span>Aspiring AI/ML Engineer</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground"
            >
              Building Intelligent Systems
              <br className="hidden sm:inline" />
              with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                AI, LLMs &amp; AI Agents
              </span>
            </motion.h1>

            {/* Subtitle / Intro */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Final-year B.Tech Artificial Intelligence &amp; Machine Learning student passionate about building production-ready AI applications using Machine Learning, Deep Learning, Large Language Models, Retrieval-Augmented Generation (RAG), and AI Agents.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-95 shadow-lg shadow-primary/25 hover:scale-[1.02] cursor-pointer transition-all duration-300 group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-muted text-foreground font-semibold hover:scale-[1.02] cursor-pointer transition-all duration-300 border border-border"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/prakash-k-239846283/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full glass border border-border hover:border-primary/40 hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer text-muted-foreground"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/prakashkmb12-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full glass border border-border hover:border-primary/40 hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer text-muted-foreground"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Prakash_K66/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full glass border border-border hover:border-primary/40 hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer text-muted-foreground"
                aria-label="LeetCode Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.71 11.59a1.375 1.375 0 0 0 0 1.956l.008.009a1.375 1.375 0 0 0 1.956 0l11.71-11.59a1.375 1.375 0 0 0 0-1.956l-.008-.009A1.374 1.374 0 0 0 13.483 0zm.01 4.544a1.374 1.374 0 0 0-.96.413l-8.08 7.993a1.375 1.375 0 0 0 0 1.956l.008.009a1.375 1.375 0 0 0 1.956 0l8.08-7.993a1.375 1.375 0 0 0 0-1.956l-.008-.009a1.374 1.374 0 0 0-.96-.413z" />
                  <path d="M17.426 3.246a1.374 1.374 0 0 0-.96.413l-4.43 4.383a1.375 1.375 0 0 0 0 1.956l.008.009a1.375 1.375 0 0 0 1.956 0l4.43-4.383a1.375 1.375 0 0 0 0-1.956l-.008-.009a1.374 1.374 0 0 0-.96-.413zM22.078 12.006a1.375 1.375 0 0 0-1.375-1.375h-7.85a1.375 1.375 0 0 0-1.375 1.375v4.225a1.375 1.375 0 0 0 1.375 1.375h7.85a1.375 1.375 0 0 0 1.375-1.375v-4.225z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Animated Profile Picture */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.3 }}
              className="relative"
            >
              {/* Floating Animation Wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.03 }}
                className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center"
              >
                {/* 1. Animated Outer Gradient Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[8px] opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* 2. Glassmorphic Background Ring */}
                <div className="absolute inset-[3px] rounded-full bg-background/95 dark:bg-background/95 backdrop-blur-xl" />

                {/* 3. Inner circular image container */}
                <div className="absolute inset-[8px] rounded-full overflow-hidden border border-white/10 dark:border-white/5 flex items-center justify-center bg-muted/20">
                  <img
                    src="/prakash.jpg"
                    alt="Prakash - AI Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 4. Glowing Shadow Overlay */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.25)] pointer-events-none group-hover:shadow-[0_0_55px_rgba(99,102,241,0.45)] transition-all duration-500" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Glows (background visual anchors) */}
      <div className="absolute top-[80%] left-[50%] -translate-x-[50%] w-[80%] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
