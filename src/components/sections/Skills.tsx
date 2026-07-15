"use client";

import { motion, Variants } from "framer-motion";
import { 
  Cpu, Brain, Database, Globe, Layers, Wrench, Sparkles, 
  Search, Terminal, Binary, Network, GitFork, Link, BookOpen, Code2
} from "lucide-react";
import { 
  SiPython, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch,
  SiFastapi, SiFlask, SiMysql, SiPostgresql, SiDocker, SiGit, 
  SiGithub, SiJupyter, SiGooglecolab, SiHuggingface
} from "react-icons/si";

interface TechItem {
  name: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: TechItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Artificial Intelligence & ML",
    description: "Core statistical models, deep neural networks, and mathematical computing.",
    icon: <Brain size={18} />,
    skills: [
      { name: "Python" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "XGBoost" },
    ],
  },
  {
    title: "Generative AI & LLMs",
    description: "Large Language Model prompting, alignment, fine-tuning, and transformer pipelines.",
    icon: <Sparkles size={18} />,
    skills: [
      { name: "Transformers" },
      { name: "Hugging Face" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "LlamaIndex" },
      { name: "OpenAI API" },
      { name: "Ollama" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "RAG & Vector Databases",
    description: "Semantic information retrieval, database indexing, and hybrid search pipelines.",
    icon: <Database size={18} />,
    skills: [
      { name: "ChromaDB" },
      { name: "Pinecone" },
      { name: "FAISS" },
      { name: "Semantic Search" },
      { name: "Hybrid Search" },
    ],
  },
  {
    title: "AI Agents",
    description: "Autonomous cognitive loops, tool integrations, and collaborative agent execution.",
    icon: <Cpu size={18} />,
    skills: [
      { name: "LangGraph" },
      { name: "CrewAI" },
      { name: "AutoGen" },
      { name: "Model Context Protocol (MCP)" },
      { name: "Tool Calling" },
      { name: "Agent Memory" },
      { name: "Multi-Agent Systems" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Building secure, high-performance APIs and scalable structured data stores.",
    icon: <Globe size={18} />,
    skills: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Environment containerization, source control pipelines, and collaborative notebook hubs.",
    icon: <Wrench size={18} />,
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Jupyter Notebook" },
      { name: "Google Colab" },
    ],
  },
];

const getTechIcon = (name: string) => {
  const iconClass = "w-4 h-4 shrink-0 transition-colors duration-300";
  switch (name) {
    case "Python": return <SiPython className={`${iconClass} text-[#3776AB]`} />;
    case "NumPy": return <SiNumpy className={`${iconClass} text-[#013243]`} />;
    case "Pandas": return <SiPandas className={`${iconClass} text-[#150458] dark:text-[#E0ADFF]`} />;
    case "Scikit-learn": return <SiScikitlearn className={`${iconClass} text-[#F7931E]`} />;
    case "TensorFlow": return <SiTensorflow className={`${iconClass} text-[#FF6F00]`} />;
    case "PyTorch": return <SiPytorch className={`${iconClass} text-[#EE4C2C]`} />;
    case "XGBoost": return <Cpu className={`${iconClass} text-[#FF6F00]`} size={14} />;
    case "Transformers": return <SiHuggingface className={`${iconClass} text-[#FFD21E]`} />;
    case "Hugging Face": return <SiHuggingface className={`${iconClass} text-[#FFD21E]`} />;
    case "LangChain": return <Link className={`${iconClass} text-[#3b82f6]`} size={14} />;
    case "LangGraph": return <GitFork className={`${iconClass} text-[#6366f1]`} size={14} />;
    case "LlamaIndex": return <BookOpen className={`${iconClass} text-[#10b981]`} size={14} />;
    case "OpenAI API": return (
        <svg className={`${iconClass} text-[#00A67E]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.73 11.77a3.54 3.54 0 0 0-.8-2.3 3.55 3.55 0 0 0-.6-3.8 3.55 3.55 0 0 0-3.8-.6 3.57 3.57 0 0 0-3.1-2.4 3.6 3.6 0 0 0-3 1.25 3.58 3.58 0 0 0-2.4-.8 3.55 3.55 0 0 0-3.8 2.4 3.55 3.55 0 0 0-.6 3.8 3.55 3.55 0 0 0 .6 3.8 3.57 3.57 0 0 0 2.4.8 3.58 3.58 0 0 0 3-1.25 3.58 3.58 0 0 0 3.8.6 3.55 3.55 0 0 0 3.8-.6 3.55 3.55 0 0 0 .6-3.8 3.55 3.55 0 0 0 1.25-3zM10.87 3.86a2.44 2.44 0 0 1 1.72-.73 2.46 2.46 0 0 1 2.37 1.83l.06.27v2.96a.18.18 0 0 1-.18.18l-.27-.06a5.05 5.05 0 0 0-3.23.12l-.25.1-2.58-1.5a2.46 2.46 0 0 1 2.36-3.17zm-6.2 3.56a2.44 2.44 0 0 1 .74-1.72 2.46 2.46 0 0 1 3.17.65l.17.22 1.48 2.58a.18.18 0 0 1 0 .18l-.13.25a5.05 5.05 0 0 0-1.5 2.87l-.04.27-2.97-1.72a2.46 2.46 0 0 1-1.02-3.3zm2.58 11.23a2.44 2.44 0 0 1-.98-1.6 2.46 2.46 0 0 1 1.18-3l.24-.13 2.58-1.48a.18.18 0 0 1 .18 0l.13.24a5.05 5.05 0 0 0 1.73 2.75l.23.15-1.48 2.58a2.46 2.46 0 0 1-3.87.5zM13.13 20.14a2.44 2.44 0 0 1-1.72.73 2.46 2.46 0 0 1-2.37-1.83l-.06-.27v-2.96a.18.18 0 0 1 .18-.18l.27.06a5.05 5.05 0 0 0 3.23-.12l.25-.1-2.58 1.5a2.46 2.46 0 0 1-2.36 3.17zm6.2-3.56a2.44 2.44 0 0 1-.74 1.72 2.46 2.46 0 0 1-3.17-.65l-.17-.22-1.48-2.58a.18.18 0 0 1 0-.18l.13-.25a5.05 5.05 0 0 0 1.5-2.87l.04-.27 2.97 1.72a2.46 2.46 0 0 1 1.02 3.3zm-2.58-11.23a2.44 2.44 0 0 1 .98 1.6 2.46 2.46 0 0 1-1.18 3l-.24.13-2.58 1.48a.18.18 0 0 1-.18 0l-.13-.24a5.05 5.05 0 0 0-1.73-2.75l-.23-.15 1.48-2.58a2.46 2.46 0 0 1 3.87-.5zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
        </svg>
      );
    case "Ollama": return <Terminal className={`${iconClass} text-[#4f46e5]`} size={14} />;
    case "Prompt Engineering": return <Terminal className={`${iconClass} text-[#64748b]`} size={14} />;
    case "ChromaDB": return <Database className={`${iconClass} text-[#3b82f6]`} size={14} />;
    case "Pinecone": return <Database className={`${iconClass} text-[#10b981]`} size={14} />;
    case "FAISS": return <Search className={`${iconClass} text-[#f59e0b]`} size={14} />;
    case "Semantic Search": return <Search className={`${iconClass} text-[#3b82f6]`} size={14} />;
    case "Hybrid Search": return <Layers className={`${iconClass} text-[#a855f7]`} size={14} />;
    case "CrewAI": return <Network className={`${iconClass} text-[#ef4444]`} size={14} />;
    case "AutoGen": return <Cpu className={`${iconClass} text-[#6366f1]`} size={14} />;
    case "Model Context Protocol (MCP)": return <GitFork className={`${iconClass} text-[#10b981]`} size={14} />;
    case "Tool Calling": return <Wrench className={`${iconClass} text-[#f59e0b]`} size={14} />;
    case "Agent Memory": return <Binary className={`${iconClass} text-[#ec4899]`} size={14} />;
    case "Multi-Agent Systems": return <Network className={`${iconClass} text-[#6366f1]`} size={14} />;
    case "FastAPI": return <SiFastapi className={`${iconClass} text-[#009688]`} />;
    case "Flask": return <SiFlask className={`${iconClass} text-[#000000] dark:text-[#ffffff]`} />;
    case "REST APIs": return <Globe className={`${iconClass} text-[#6366f1]`} size={14} />;
    case "MySQL": return <SiMysql className={`${iconClass} text-[#4479A1]`} />;
    case "PostgreSQL": return <SiPostgresql className={`${iconClass} text-[#4169E1]`} />;
    case "Docker": return <SiDocker className={`${iconClass} text-[#2496ED]`} />;
    case "Git": return <SiGit className={`${iconClass} text-[#F05032]`} />;
    case "GitHub": return <SiGithub className={`${iconClass} text-[#181717] dark:text-[#ffffff]`} />;
    case "VS Code": return <Code2 className={`${iconClass} text-[#007ACC]`} />;
    case "Jupyter Notebook": return <SiJupyter className={`${iconClass} text-[#F37626]`} />;
    case "Google Colab": return <SiGooglecolab className={`${iconClass} text-[#F9AB00]`} />;
    default: return <Cpu className={`${iconClass} text-muted-foreground`} size={14} />;
  }
};

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12" aria-labelledby="skills-heading">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Cpu size={20} />
        </div>
        <div>
          <h2 id="skills-heading" className="text-2xl md:text-3xl font-extrabold tracking-tight">Technical Skills</h2>
          <p className="text-sm text-muted-foreground">Specialized AI systems engineering technologies</p>
        </div>
      </div>

      {/* Grid of Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glass-card p-6 flex flex-col justify-between hover:border-primary/20 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.15)] transition-all duration-300 group"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/5 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                {category.description}
              </p>
            </div>

            {/* Badges Flexbox */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  tabIndex={0}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] md:text-xs font-semibold bg-secondary/30 border border-border/60 text-foreground/80 hover:text-foreground hover:border-primary/30 hover:shadow-[0_0_12px_rgba(99,102,241,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary/40 select-none"
                  aria-label={`${skill.name} skill badge`}
                >
                  {getTechIcon(skill.name)}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
