"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, ChevronRight } from "lucide-react";

interface TimelineItem {
  id: number;
  type: "work" | "education" | "award";
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  skills: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "work",
    title: "AI Research Intern",
    subtitle: "AI Startup Lab",
    date: "June 2025 - Present",
    description: [
      "Architected and deployed multi-agent planning frameworks (utilizing LangGraph and AutoGen) for automated code auditing and analysis.",
      "Optimized Retrieval-Augmented Generation (RAG) chunking strategy and fine-tuned domain-specific embeddings, improving context precision by 28%.",
      "Integrated vector indexes (Pinecone/Qdrant) with semantic reranking models to reduce answer generation latency."
    ],
    skills: ["LangGraph", "RAG", "Qdrant", "FastAPI", "Python"],
  },
  {
    id: 2,
    type: "work",
    title: "Machine Learning Intern",
    subtitle: "Cognitive Tech Solutions",
    date: "Dec 2024 - May 2025",
    description: [
      "Fine-tuned YOLOv8 and RT-DETR models for high-speed industrial object detection, achieving 95.8% mAP on custom manufacturing datasets.",
      "Optimized inference pipelines with ONNX Runtime and TensorRT, reducing latency from 45ms to 12ms per frame on edge nodes.",
      "Built automated data annotation helper loops utilizing Segment Anything Model (SAM) to reduce labeling time by 60%."
    ],
    skills: ["PyTorch", "YOLOv8", "TensorRT", "ONNX", "OpenCV"],
  },
  {
    id: 3,
    type: "education",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    subtitle: "Engineering University",
    date: "Aug 2023 - Expected May 2027",
    description: [
      "Core Coursework: Deep Learning architectures, Natural Language Processing, Statistical ML, Vector Algebra, Probability & Random Processes, and MLOps.",
      "Projects Lead: Built end-to-end sentiment analyzer and automated stock trend predictor using LSTM models.",
      "Co-curriculum: Core Member of the AI & Robotics Student Club, leading workshops on neural network basics."
    ],
    skills: ["Deep Learning", "Mathematics for ML", "NLP", "Data Structures"],
  },
  {
    id: 4,
    type: "award",
    title: "Professional Developer Certifications",
    subtitle: "DeepLearning.AI & AWS",
    date: "2024 - 2025",
    description: [
      "Completed DeepLearning.AI 'Generative AI with Large Language Models' Specialization (understanding pre-training, instruction tuning, RLHF, and PEFT methods).",
      "Acquired AWS Certified Cloud Practitioner credentials, demonstrating foundation understanding of cloud ML deployments."
    ],
    skills: ["LLM Fine-tuning", "AWS", "RLHF", "Prompt Engineering"],
  },
];

export default function Timeline() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const getIcon = (type: TimelineItem["type"]) => {
    switch (type) {
      case "work":
        return <Briefcase size={16} />;
      case "education":
        return <GraduationCap size={16} />;
      case "award":
        return <Award size={16} />;
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 md:px-8 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-16 justify-center">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Calendar size={20} />
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Timeline & Journey</h2>
          <p className="text-sm text-muted-foreground">My academic, professional, and milestone path</p>
        </div>
      </div>

      {/* Vertical Timeline Thread */}
      <div className="relative border-l border-border md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[1px] md:before:bg-border/80">
        {timelineData.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={item.id}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row md:justify-between items-start w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Central Circle Pin Indicator */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-10 flex items-center justify-center w-4 h-4 rounded-full bg-background border-2 border-primary shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping absolute"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              </div>

              {/* Spacing alignment helper for desktop layout grid */}
              <div className="hidden md:block w-[45%]" />

              {/* Timeline Info Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-[45%] pl-6 md:pl-0"
              >
                <div className="glass-card p-5 md:p-6 hover:scale-[1.01] hover:border-primary/30 transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg text-xs ${
                        item.type === "work" 
                          ? "bg-indigo-500/10 text-indigo-400" 
                          : item.type === "education" 
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-purple-500/10 text-purple-400"
                      }`}>
                        {getIcon(item.type)}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base md:text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <h4 className="text-xs md:text-sm font-semibold text-primary mb-4">
                    {item.subtitle}
                  </h4>

                  {/* Description points */}
                  <ul className="space-y-2 mb-4 text-xs md:text-sm text-muted-foreground">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-2 items-start leading-relaxed">
                        <ChevronRight size={14} className="text-primary shrink-0 mt-1" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-muted text-[10px] md:text-xs font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
