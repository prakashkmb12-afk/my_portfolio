"use client";

import { motion, Variants } from "framer-motion";
import { User, Brain, Cpu, Code2, BookOpen, Terminal, CheckCircle2 } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const facts = [
    { emoji: "🎓", label: "Degree", text: "Final-year B.Tech – Artificial Intelligence & Machine Learning" },
    { emoji: "💼", label: "Role", text: "Aspiring AI/ML Engineer" },
    { emoji: "🧠", label: "Focus", text: "Interested in LLMs, RAG, AI Agents & Generative AI" },
    { emoji: "🐍", label: "Language", text: "Primary Language: Python" },
    { emoji: "🚀", label: "Building", text: "Currently Building Production-Ready AI Applications" },
    { emoji: "🌱", label: "Learning", text: "Always Learning & Exploring Emerging AI Technologies" },
  ];

  const highlights = [
    {
      icon: <Brain className="text-indigo-400" size={18} />,
      title: "AI & Machine Learning",
      desc: "Designing intelligent systems using Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI.",
    },
    {
      icon: <Cpu className="text-purple-400" size={18} />,
      title: "LLM & AI Agents",
      desc: "Building production-ready applications using Large Language Models, RAG pipelines, Vector Databases, and AI Agents.",
    },
    {
      icon: <Code2 className="text-emerald-400" size={18} />,
      title: "Software Engineering",
      desc: "Developing scalable backend services and AI applications using Python, FastAPI, REST APIs, and modern development practices.",
    },
    {
      icon: <BookOpen className="text-amber-400" size={18} />,
      title: "Continuous Learning",
      desc: "Actively exploring emerging AI technologies, open-source frameworks, and industry best practices to grow as an AI Engineer.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <User size={20} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">About Me</h2>
          <p className="text-sm text-muted-foreground">My values, core focus, and background</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Biography */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Background Overview</span>
            <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Building AI Solutions That Solve Real-World Problems
            </h3>
          </div>
          
          <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm Prakash, a Final-year B.Tech student in Artificial Intelligence and Machine Learning with a strong passion for designing intelligent systems that solve real-world challenges.
            </p>
            <p>
              My primary interests lie in Machine Learning, Deep Learning, Computer Vision, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and AI Agents. I enjoy transforming complex AI concepts into practical, production-ready applications that deliver meaningful impact.
            </p>
            <p>
              Over the course of my learning journey, I have built projects ranging from predictive machine learning models to end-to-end AI applications powered by LLMs, FastAPI, vector databases, and modern AI frameworks. Each project has strengthened my understanding of designing scalable, efficient, and user-focused AI systems.
            </p>
            <p>
              I believe that successful AI products require more than accurate models—they require thoughtful system design, clean software engineering, and a focus on solving real business problems. This mindset drives me to continuously learn emerging technologies, experiment with new ideas, and build solutions that bridge research and real-world applications.
            </p>
            <p>
              As an aspiring AI/ML Engineer, my goal is to contribute to innovative teams, develop intelligent software, and create AI systems that make technology more useful, accessible, and impactful.
            </p>
          </div>
        </div>

        {/* Right Column: Quick Facts Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="lg:col-span-5 w-full glass-card p-6 shadow-xl"
        >
          <div className="flex items-center gap-2 border-b border-border/60 pb-4 mb-6">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <Terminal size={14} />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              system_specs.config
            </span>
          </div>

          <ul className="space-y-4">
            {facts.map((fact, index) => (
              <li key={index} className="flex gap-3.5 items-start text-xs sm:text-sm">
                <span className="text-base select-none mt-0.5">{fact.emoji}</span>
                <div className="leading-relaxed">
                  <span className="text-foreground font-semibold block">{fact.label}</span>
                  <span className="text-muted-foreground">{fact.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Grid: Focus Highlight Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
      >
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass-card p-5 hover:border-primary/20 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3.5">
              <div className="p-2 rounded-lg bg-primary/5 text-primary self-start inline-block">
                {item.icon}
              </div>
              <h4 className="font-bold text-sm md:text-base text-foreground">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-primary/80 font-mono mt-4 pt-3 border-t border-border/40">
              <CheckCircle2 size={10} className="text-primary" />
              <span>Core competency</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
