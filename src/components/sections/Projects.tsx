"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Search, ExternalLink, X, 
  BrainCircuit, ShieldAlert, Award, ArrowRight 
} from "lucide-react";

interface Project {
  id: number;
  title: string;
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
    title: "Agentic RAG Document Assistant",
    shortDesc: "An Agentic RAG data analytics platform enabling conversational AI-driven data analysis through a full-stack web application.",
    gradient: "from-indigo-600 to-violet-600",
    problem: "Manual analysis of structured data requires programming expertise. Standard LLM queries lack real-time context and structured retrieval validation, leading to query-document semantic mismatch.",
    solution: "Designed an intelligent agentic routing system that automatically classifies user queries and executes dynamic data filtering workflows with structured JSON-based parameter extraction.",
    techStack: ["Python", "Flask", "Pandas", "Groq LLM", "LangChain", "Vector DB"],
    architecture: "User Query -> Agentic Router -> [Pandas Query Tool] -> Structured Output\n                                      \\-> [Vector Retrieve Tool] -> Context-Aware Response",
    features: [
      "Built an end-to-end Agentic RAG data analytics platform enabling conversational AI-driven data analysis.",
      "Developed an intelligent agentic routing system that automatically classified user queries and executed dynamic data-filtering workflows.",
      "Solved reliable query-routing and response-accuracy challenges by implementing prompt-engineered function calling, modular AI workflows, and context-aware data processing pipelines."
    ],
    github: "https://github.com/prakashkmb12-afk",
    challenges: "Ensuring reliable parameter extraction from unstructured user inputs. Resolved by implementing structured schema parsers and prompt-engineered fallback routes.",
    lessons: "Understood the value of structured parsing layers and agent routing boundaries in complex LLM-driven applications.",
    impact: "Reduced data query times by 75% for non-technical users and secured 100% processing boundaries."
  },
  {
    id: 2,
    title: "AI-Powered Cattle Breed Identification",
    shortDesc: "A Deep Learning computer vision platform fine-tuning ResNet18 to identify cattle breeds in real-time.",
    gradient: "from-emerald-600 to-teal-600",
    problem: "Visually identifying cattle breeds on farms is manual and error-prone due to lighting variations and visually similar features.",
    solution: "Trained a ResNet18 transfer-learning model on 23,000+ images across 86 breeds and served it via a low-latency FastAPI server with Gemini breed descriptions.",
    techStack: ["Python", "PyTorch", "ResNet18", "FastAPI", "Google Gemini AI", "OpenCV"],
    architecture: "Image Capture -> OpenCV Prep -> ResNet18 Model -> FastAPI Inference -> [Confidence Check] -> Gemini Descriptions",
    features: [
      "Built an AI-powered cattle breed identification system for real-time image-based breed classification.",
      "Trained a ResNet18 transfer-learning model on 23,000+ images across 86 breeds with data augmentation for improved accuracy.",
      "Solved visually similar breed-classification challenges by integrating confidence-based predictions and Gemini AI-powered breed insights."
    ],
    github: "https://github.com/prakashkmb12-afk",
    challenges: "Classifying visually similar breeds under varying farm conditions. Resolved by integrating custom synthetic Mosaic data augmentations and weight optimizers.",
    lessons: "Gained hands-on experience in computer vision model training, transfer-learning parameter tuning, and low-latency API serving.",
    impact: "Achieved an accuracy score of 94.2% on test datasets with sub-20ms model execution rates."
  },
  {
    id: 3,
    title: "AI-Powered Smart Recipe Generator",
    shortDesc: "A fully offline web application running Gemma:2B via Ollama to generate recipes locally with complete data privacy and zero API costs.",
    gradient: "from-purple-600 to-pink-600",
    problem: "Most AI-powered recipe generation platforms depend on commercial APIs, leading to API quota limitations, recurring subscription costs, internet dependency, and limited control over the underlying AI model. Additionally, users often spend significant time searching multiple websites for recipes that match their available ingredients.",
    solution: "Designed an AI-powered recipe generation system that runs entirely on a local machine using the Gemma:2B open-source LLM via Ollama. Users provide ingredients, cooking time, servings, and preferred cuisine, and the application generates structured, personalized recipes with clear step-by-step cooking instructions through an intuitive Flask-based web interface.",
    techStack: ["Python", "Flask", "Gemma:2B", "Ollama", "HTML/CSS", "python-dotenv"],
    architecture: "User Preferences -> Flask Controller -> Prompt Constructor -> Ollama Runtime (Gemma:2B) -> Structured Output",
    features: [
      "AI-generated personalized recipes using a locally hosted LLM.",
      "Ingredient-based recipe generation with customizable cooking time, servings, and cuisine.",
      "Fully offline execution without API keys or internet dependency.",
      "Secure user authentication with session-based login management.",
      "Clean and responsive web interface built using HTML and CSS.",
      "Structured recipe output with organized cooking steps and ingredient lists."
    ],
    github: "https://github.com/prakashkmb12-afk",
    challenges: "Integrating a locally hosted LLM into a Flask web application while maintaining responsive user interaction. Used Ollama as the model runtime for efficient local inference and optimized prompt construction for consistent recipe generation. Implemented secure Flask session management using a secret key to protect authenticated user sessions. Managed sensitive configurations using environment variables instead of hardcoding credentials.",
    lessons: "Learned how to integrate open-source Large Language Models into real-world web applications without relying on commercial APIs. Gained practical experience in prompt engineering for generating structured and context-aware AI responses. Understood the importance of secure session management and environment-based configuration in Flask applications. Explored how lightweight LLMs like Gemma:2B can power practical AI applications efficiently on local hardware.",
    impact: "Eliminated API usage costs by utilizing an open-source LLM running locally. Reduced dependency on external cloud services, ensuring uninterrupted recipe generation. Improved user privacy by processing all requests locally without transmitting data to third-party APIs. Delivered personalized recipes in real time with minimal latency on consumer hardware."
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<"overview" | "arch" | "lessons">("overview");

  // Filtering Logic based only on search query
  const filteredProjects = projectsData.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.shortDesc.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query))
    );
  });

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <BrainCircuit size={20} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Featured Projects</h2>
            <p className="text-sm text-muted-foreground">Production-grade AI engineering implementations</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            type="text"
            placeholder="Search by title, stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-border bg-card/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none"
          />
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
              className="glass-card flex flex-col justify-between overflow-hidden h-[380px] cursor-pointer group hover:border-primary/20 hover:scale-[1.01]"
              onClick={() => {
                setSelectedProject(project);
                setModalTab("overview");
              }}
            >
              <div>
                {/* Image Placeholder with Gradient */}
                <div className={`h-32 w-full bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between relative`}>
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
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-pre-line">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">Lessons Learned</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-pre-line">
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
