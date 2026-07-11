"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Search, Filter, ExternalLink, X, 
  BrainCircuit, ShieldAlert, Award, FileText, ArrowRight 
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "genai" | "mldl" | "mlops";
  categoryLabel: string;
  shortDesc: string;
  gradient: string;
  problem: string;
  solution: string;
  techStack: string[];
  architecture: string;
  features: string[];
  github: string;
  demo?: string;
  challenges: string;
  lessons: string;
  impact: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "NexusRAG: Self-Rerouting Multi-Document Agent",
    category: "genai",
    categoryLabel: "Generative AI / LLM",
    shortDesc: "A self-corrective RAG agent built with LangGraph that dynamically evaluates retrieval quality and falls back to web-search parameters.",
    gradient: "from-indigo-600 to-violet-600",
    problem: "Standard RAG configurations suffer from query-document semantic mismatch, fail on complex multi-document synthesis, and generate hallucinations when the target context is missing.",
    solution: "Designed a graph-based agent using LangGraph. The workflow expands user query vectors, retrieves context from Qdrant, grades the relevance of document nodes using a structured Pydantic evaluator, and if relevance is below a threshold, automatically triggers Tavily Web Search. If hallucinations are detected by a self-grading node, the agent rewrites the query and reroutes.",
    techStack: ["LangGraph", "LlamaIndex", "Qdrant Vector DB", "GPT-4o", "FastAPI", "Pydantic"],
    architecture: "User Query -> Vector Router -> Retrieval -> Node Grader -> [Pass] -> Hallucination Grader -> Output\n                                      \\-> [Fail] -> Tavily Web Search -> Context Aggregator",
    features: [
      "Dynamic routing based on semantic intent classification.",
      "Self-corrective evaluation loops (hallucination & relevance grading).",
      "Hybrid search index (sparse + dense) with Cohere ReRank.",
      "Asynchronous streaming endpoints built in FastAPI."
    ],
    github: "https://github.com",
    demo: "https://github.com",
    challenges: "Handling infinite loop state routing when the LLM gets stuck in correcting its own inputs. Resolved by implementing a Max-Hop counter (limit to 3 routing iterations) and default semantic fallbacks.",
    lessons: "Structured outputs via Instructor/Pydantic are essential for building deterministic graph transition logic. Unstructured outputs cause parser failures in multi-agent states.",
    impact: "Boosted RAGAS Faithfulness score from 0.64 to 0.91, and decreased answer hallucination rates by 42% on evaluation datasets."
  },
  {
    id: 2,
    title: "SentinelCV: Edge-Optimized Defect Inspection Pipeline",
    category: "mldl",
    categoryLabel: "Deep Learning / Vision",
    shortDesc: "A production-grade Computer Vision pipeline fine-tuning YOLOv8-segmentation and compiling with TensorRT for sub-15ms edge inference.",
    gradient: "from-emerald-600 to-teal-600",
    problem: "Real-time industrial manufacturing defects must be captured on high-speed conveyor belts. The inference budget is strictly sub-15ms on power-constrained edge computing boards.",
    solution: "Fine-tuned a YOLOv8-seg architecture on custom stamped metal defect datasets. Implemented pre-processing crops to isolate Region of Interest (ROI) and exported the model weights to TensorRT engines. Built a multi-threaded Python pipeline using Gstreamer and OpenCV for parallel frame ingestion.",
    techStack: ["PyTorch", "YOLOv8-Segmentation", "TensorRT", "OpenCV", "Docker", "Gstreamer"],
    architecture: "Conveyor Camera Feed -> Gstreamer Thread -> GPU Shared Memory -> TensorRT Engine -> Defect Overlay -> WebSocket Alert",
    features: [
      "Sub-pixel defect dimension mapping and segmentation masking.",
      "FP16 Quantization yielding 3.2x speedup with <0.4% mAP degradation.",
      "WebSocket-based alerting system pushing defect images to operators.",
      "Complete model-training logs using Weights & Biases (W&B)."
    ],
    github: "https://github.com",
    challenges: "Extreme class imbalance (99.4% frames were defect-free) and varying ambient lighting conditions. Resolved by integrating custom synthetic Mosaic data augmentation and Focal Loss function.",
    lessons: "Edge hardware constraints require optimizing preprocessing in CUDA. Standard CPU-bound resizing (OpenCV) was the primary latency bottleneck, not the model inference.",
    impact: "Achieved an average inference time of 11.2ms per frame on Nvidia Jetson Nano; reduced missed stamping defects by 78%."
  },
  {
    id: 3,
    title: "LogiOps: GitOps Prompt Evaluation & Deployment",
    category: "mlops",
    categoryLabel: "MLOps & Infrastructure",
    shortDesc: "An automated CI/CD pipeline evaluating LLM prompt versions via MLflow and packaging verified updates into Dockerized API servers.",
    gradient: "from-purple-600 to-pink-600",
    problem: "Updating prompts in production is highly manual. Lacking structured testing leads to unexpected regression and degradation of agentic capabilities.",
    solution: "Created a GitOps pipeline where developers push prompt templates as YAML files. GitHub Actions triggers evaluation runs using LangChain evaluation harnesses against historical datasets. Results (faithfulness, correctness, similarity) are logged to MLflow. If metrics exceed base benchmarks, the prompt version is approved and packaged into a Docker container.",
    techStack: ["MLflow", "Docker", "GitHub Actions", "LangChain Evaluators", "Prometheus", "FastAPI"],
    architecture: "Prompt PR -> GitHub Actions -> Evaluation Job -> log to MLflow -> [Pass] -> Build Docker -> Rollout API\n                                                                    \\-> [Fail] -> Block PR",
    features: [
      "Automated prompt versioning and semantic drift validation.",
      "Prometheus metrics scraping for active tokens, latency, and costs.",
      "Instant rollback to prior prompt files without rebuilds.",
      "Isolated prompt-serving Docker images."
    ],
    github: "https://github.com",
    challenges: "High API costs when evaluating prompts with GPT-4 over large datasets in the CI/CD pipeline. Resolved by implementing local prompt evaluations using Llama-3-8B-Instruct via vLLM first.",
    lessons: "Evaluating LLM prompts requires statistical testing. A prompt that improves a specific edge case often degrades general performance across other classes.",
    impact: "Reduced prompt update deployment cycles from 4 days to 9 minutes while ensuring zero regression in agent accuracy."
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<"overview" | "arch" | "lessons">("overview");

  // Filtering Logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <BrainCircuit size={20} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Featured Projects</h2>
          <p className="text-sm text-muted-foreground">Production-grade AI engineering implementations</p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            type="text"
            placeholder="Search by title, stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-card/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none"
          />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {["all", "genai", "mldl", "mlops"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 text-xs md:text-sm font-semibold rounded-xl cursor-pointer transition-all uppercase tracking-wide ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/10"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat === "all" ? "All Projects" : cat === "genai" ? "GenAI/LLM" : cat === "mldl" ? "Deep Learning" : "MLOps"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card flex flex-col justify-between overflow-hidden h-[400px] cursor-pointer group hover:border-primary/20 hover:scale-[1.01]"
              onClick={() => {
                setSelectedProject(project);
                setModalTab("overview");
              }}
            >
              <div>
                {/* Image Placeholder with Gradient */}
                <div className={`h-36 w-full bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between relative`}>
                  <span className="px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-sm text-[10px] md:text-xs font-semibold text-white/90 uppercase tracking-wide self-start">
                    {project.categoryLabel}
                  </span>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-base md:text-lg mb-2 leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Stack tags & Arrow */}
              <div className="p-5 pt-0 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-muted-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-primary self-end group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Dynamic Project Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl h-[85vh] md:h-[75vh] glass rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
            >
              {/* Header Banner */}
              <div className={`p-6 bg-gradient-to-r ${selectedProject.gradient} text-white flex justify-between items-start`}>
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2 py-0.5 rounded-md">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-lg md:text-2xl font-extrabold mt-2 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-xl bg-black/20 hover:bg-black/30 text-white/90 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Tabs Select */}
              <div className="flex border-b border-border/80 bg-muted/30 px-4">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "arch", label: "Architecture & Stack" },
                  { id: "lessons", label: "Impact & Learnings" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setModalTab(tab.id as any)}
                    className={`px-4 py-3 text-xs md:text-sm font-semibold border-b-2 cursor-pointer transition-colors ${
                      modalTab === tab.id
                        ? "border-primary text-primary font-bold"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents (Scrollable Container) */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                {modalTab === "overview" && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <ShieldAlert size={14} />
                        <span>Problem Statement</span>
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Award size={14} />
                        <span>Proposed Solution</span>
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Code size={14} />
                        <span>Key Features</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground list-disc pl-4">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="leading-relaxed">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {modalTab === "arch" && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground border border-border/40">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Architecture Schema</h4>
                      <pre className="bg-muted p-4 rounded-xl font-mono text-[10px] md:text-xs text-foreground/90 overflow-x-auto border border-border leading-relaxed whitespace-pre-wrap">
                        {selectedProject.architecture}
                      </pre>
                    </div>
                  </div>
                )}

                {modalTab === "lessons" && (
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Award size={14} />
                        <span>Measurable Impact</span>
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.impact}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">Key Challenges & Safeguards</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">Lessons Learned</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.lessons}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer CTA Links */}
              <div className="p-4 border-t border-border/80 bg-muted/20 flex justify-end gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl border border-border hover:bg-muted text-foreground transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
