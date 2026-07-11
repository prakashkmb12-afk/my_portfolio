"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Cpu, Brain, GitFork, Code2, Sparkles, CheckCircle2 } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0 to 100
  label: "Advanced" | "Intermediate" | "Familiar";
  details: string[];
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    id: "genai",
    title: "Generative AI & LLMs",
    icon: <Sparkles size={16} />,
    skills: [
      { name: "RAG Architectures", level: 90, label: "Advanced", details: ["LangChain", "LlamaIndex", "Hybrid Search", "Metadata Filtering"] },
      { name: "Agentic Frameworks", level: 85, label: "Advanced", details: ["LangGraph", "AutoGen", "Tool Calling", "State Management"] },
      { name: "Vector Databases", level: 88, label: "Advanced", details: ["Qdrant", "Pinecone", "Milvus", "ChromaDB"] },
      { name: "Model Tuning & Prompting", level: 80, label: "Intermediate", details: ["PEFT/LoRA", "SFT", "Few-shot Prompting", "DSPy"] },
    ],
  },
  {
    id: "mldl",
    title: "Machine Learning & DL",
    icon: <Brain size={16} />,
    skills: [
      { name: "Deep Learning & Vision", level: 85, label: "Advanced", details: ["PyTorch", "CNNs", "Transformers", "YOLOv8", "SAM"] },
      { name: "Natural Language Processing", level: 82, label: "Advanced", details: ["Hugging Face", "Tokenizers", "BERT", "Named Entity Recognition"] },
      { name: "Classical Machine Learning", level: 88, label: "Advanced", details: ["Scikit-Learn", "XGBoost", "Feature Engineering", "Pandas"] },
      { name: "Model Optimization", level: 75, label: "Intermediate", details: ["ONNX", "TensorRT", "Quantization (AWQ/GGUF)"] },
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Infra",
    icon: <GitFork size={16} />,
    skills: [
      { name: "Containerization", level: 85, label: "Advanced", details: ["Docker", "Docker Compose", "Multi-stage Builds"] },
      { name: "Pipeline Orchestration", level: 78, label: "Intermediate", details: ["MLflow", "DVC", "GitHub Actions CI/CD"] },
      { name: "Cloud Deployments", level: 80, label: "Intermediate", details: ["AWS SageMaker", "EC2", "S3", "Vercel"] },
      { name: "Inference Server Deployment", level: 82, label: "Advanced", details: ["FastAPI", "Triton Server", "Gunicorn/Uvicorn"] },
    ],
  },
  {
    id: "core",
    title: "Core Dev & Systems",
    icon: <Code2 size={16} />,
    skills: [
      { name: "Python Programming", level: 92, label: "Advanced", details: ["Object-Oriented Python", "Asyncio", "Pytest", "Numpy"] },
      { name: "SQL & Databases", level: 80, label: "Intermediate", details: ["PostgreSQL", "SQLite", "Vector Extensions (pgvector)"] },
      { name: "Web Stack Foundations", level: 75, label: "Intermediate", details: ["TypeScript", "Next.js", "Tailwind CSS", "React"] },
      { name: "Algorithms & Structures", level: 85, label: "Advanced", details: ["Graph Traversal", "Dynamic Programming", "Complexity Analysis"] },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("genai");

  const activeCategory = skillsData.find((cat) => cat.id === activeTab) || skillsData[0];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Cpu size={20} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Technical Skills</h2>
          <p className="text-sm text-muted-foreground">My specialized domains and technologies</p>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border/60 pb-4">
        {skillsData.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === category.id
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/15"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {category.icon}
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Grid of skills */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {activeCategory.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="glass-card p-5 hover:border-primary/20 hover:scale-[1.01] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-sm md:text-base text-foreground">{skill.name}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                  skill.label === "Advanced" 
                    ? "bg-indigo-500/10 text-indigo-400"
                    : skill.label === "Intermediate"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {skill.label}
                </span>
              </div>

              {/* Progress bar container */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  className="h-full bg-primary"
                />
              </div>

              {/* Tags / Sub-technologies */}
              <div className="flex flex-wrap gap-1.5">
                {skill.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-secondary text-[10px] md:text-xs font-medium text-secondary-foreground"
                  >
                    <CheckCircle2 size={10} className="text-primary shrink-0" />
                    <span>{detail}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
