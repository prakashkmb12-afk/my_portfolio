"use client";

import { motion, Variants } from "framer-motion";
import { 
  User, Brain, Cpu, Code2, BookOpen, Terminal, 
  GraduationCap, Briefcase 
} from "lucide-react";

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
    { icon: <GraduationCap size={16} />, label: "Education", text: "Final-year B.Tech – Artificial Intelligence & Machine Learning" },
    { icon: <Briefcase size={16} />, label: "Role", text: "Aspiring AI/ML Engineer" },
    { icon: <Brain size={16} />, label: "Skills", text: "LLMs, RAG, AI Agents & Generative AI" },
    { icon: <Code2 size={16} />, label: "Lang/Tech", text: "Primary Language: Python" },
    { icon: <Cpu size={16} />, label: "Projects", text: "Building Production-Ready AI Applications" },
    { icon: <BookOpen size={16} />, label: "Focus", text: "Exploring Emerging AI Technologies" },
  ];

  const highlights = [
    {
      icon: <Brain size={18} />,
      title: "AI & Machine Learning",
      desc: "Designing intelligent solutions using Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI.",
    },
    {
      icon: <Cpu size={18} />,
      title: "LLM & AI Agents",
      desc: "Building AI applications with LLMs, RAG, Vector Databases, AI Agents, and modern AI frameworks.",
    },
    {
      icon: <Code2 size={18} />,
      title: "Software Engineering",
      desc: "Developing scalable AI applications using Python, FastAPI, REST APIs, and clean software architecture.",
    },
    {
      icon: <BookOpen size={18} />,
      title: "Continuous Learning",
      desc: "Exploring emerging AI technologies, open-source frameworks, and production-ready AI development.",
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
              I'm Prakash, a Final-year B.Tech student in Artificial Intelligence and Machine Learning passionate about building intelligent AI solutions for real-world problems.
            </p>
            <p>
              My interests include Machine Learning, Deep Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, and Computer Vision. I enjoy developing scalable, production-ready AI applications by combining strong software engineering principles with modern AI technologies.
            </p>
            <p>
              I'm continuously learning, building innovative projects, and exploring emerging AI advancements to grow as a professional AI/ML Engineer.
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
                <div className="p-1.5 rounded-lg bg-primary/5 text-primary shrink-0 mt-0.5">
                  {fact.icon}
                </div>
                <div className="leading-relaxed">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/80 font-bold block mb-0.5">{fact.label}</span>
                  <span className="text-foreground/90 font-semibold">{fact.text}</span>
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
            className="glass-card p-6 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.2)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="p-2.5 rounded-lg bg-primary/5 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 self-start inline-block">
                {item.icon}
              </div>
              <h4 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
