"use client";

import { motion } from "framer-motion";
import { User, Terminal, Cpu, FileText, Code2, GraduationCap } from "lucide-react";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <User size={20} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">About Me</h2>
          <p className="text-sm text-muted-foreground">Academic background and engineering philosophy</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="lg:col-span-5 w-full glass-card overflow-hidden shadow-xl"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border/80">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Terminal size={12} />
              <span>balaji@ai-workspace:~</span>
            </div>
            <div className="w-10"></div> {/* Spacer to center title */}
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed space-y-4 text-foreground/90 overflow-x-auto">
            <div>
              <span className="text-emerald-400 font-bold">balaji@ai-workspace</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-indigo-400">~</span>
              <span className="text-foreground">$</span> neofetch
            </div>

            <div className="flex gap-4 items-start whitespace-pre">
              {/* ASCII Art of Brain/Graph */}
              <div className="text-primary font-bold hidden sm:block text-[10px] leading-3 select-none">
{`   _---~~---_
  /   /|  \\   \\
 /   / |   \\   \\
|   /  |    \\   |
|  /   |     \\  |
|  \\   |     /  |
|   \\  |    /   |
 \\   \\ |   /   /
  \\   \\|  /   /
   \`---~~---\'`}
              </div>
              
              <div className="space-y-1">
                <p><span className="text-indigo-400 font-semibold">User:</span> Balaji</p>
                <p><span className="text-indigo-400 font-semibold">Degree:</span> B.Tech in AI & ML</p>
                <p><span className="text-indigo-400 font-semibold">Graduation:</span> Expected May 2027</p>
                <p><span className="text-indigo-400 font-semibold">Focus:</span> LLMs, RAG, AI Agents</p>
                <p><span className="text-indigo-400 font-semibold">Core Stack:</span> PyTorch, Python, Docker</p>
                <p><span className="text-indigo-400 font-semibold">Libraries:</span> LangChain, HuggingFace</p>
                <p><span className="text-indigo-400 font-semibold">Shell:</span> bash / zsh</p>
                <p><span className="text-indigo-400 font-semibold">Status:</span> Seeking AI/ML Intern/Full-time Roles</p>
              </div>
            </div>
            
            <div className="pt-2">
              <span className="text-emerald-400 font-bold">balaji@ai-workspace</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-indigo-400">~</span>
              <span className="text-foreground">$</span> <span className="animate-pulse bg-foreground w-2 h-4 inline-block align-middle"></span>
            </div>
          </div>
        </motion.div>

        {/* Right: Narrative Description */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-4"
          >
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
              <GraduationCap className="text-primary" size={18} />
              <span>Academic Foundation in Artificial Intelligence</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As a final-year B.Tech student in Artificial Intelligence and Machine Learning, I have spent the last few years bridging the gap between theoretical math and production software engineering. I don't just build wrappers; I focus on understanding the underlying transformer architectures, vector similarity mathematics, and model optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My engineering philosophy revolves around building **deterministic outcomes from non-deterministic models**. I specialize in developing agents using cognitive loops (like ReAct or Plan-and-Solve) and architecting robust Retrieval-Augmented Generation (RAG) systems that resolve hallucination problems and handle complex business logic.
            </p>
          </motion.div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl border border-border bg-card/30 flex gap-3 items-start"
            >
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                <Cpu size={16} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">System Architect</h4>
                <p className="text-xs text-muted-foreground mt-1">Designing agentic workflows, multi-vector retrieval pipelines, and graph-based models.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl border border-border bg-card/30 flex gap-3 items-start"
            >
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5">
                <Code2 size={16} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Clean MLOps</h4>
                <p className="text-xs text-muted-foreground mt-1">Containerizing models with Docker, tracking experiments with MLflow, and deploying via APIs.</p>
              </div>
            </motion.div>
          </div>

          {/* Action Call */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/10 cursor-pointer"
            >
              <FileText size={16} />
              <span>Download Full CV</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
