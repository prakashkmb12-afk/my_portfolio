"use client";

import { motion, Variants } from "framer-motion";
import { 
  Award, Calendar, ShieldCheck, Brain, Database, Cloud, 
  RefreshCw, Eye, Sparkles, ExternalLink, Terminal, Cpu, 
  Binary, MessageSquare 
} from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  pdfUrl?: string;
}

const certificationsData: Certification[] = [
  {
    title: "Artificial Intelligence Primer Certification",
    issuer: "Infosys Springboard",
    date: "April 12, 2026",
    icon: <Sparkles size={18} />,
    color: "from-violet-500 to-indigo-500",
    pdfUrl: "/certs/ai_primer.pdf",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "April 12, 2026",
    icon: <Brain size={18} />,
    color: "from-blue-500 to-purple-500",
    pdfUrl: "/certs/artificial_intelligence.pdf",
  },
  {
    title: "Principles of Generative AI Certification",
    issuer: "Infosys Springboard",
    date: "April 12, 2026",
    icon: <Sparkles size={18} />,
    color: "from-fuchsia-500 to-pink-500",
    pdfUrl: "/certs/generative_ai_principles.pdf",
  },
  {
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "April 12, 2026",
    icon: <Terminal size={18} />,
    color: "from-indigo-500 to-cyan-500",
    pdfUrl: "/certs/prompt_engineering.pdf",
  },
  {
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard",
    date: "April 9, 2026",
    icon: <MessageSquare size={18} />,
    color: "from-teal-500 to-emerald-500",
    pdfUrl: "/certs/nlp_intro.pdf",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    date: "April 9, 2026",
    icon: <Binary size={18} />,
    color: "from-amber-500 to-orange-500",
    pdfUrl: "/certs/deep_learning_intro.pdf",
  },
  {
    title: "Computer Vision 101",
    issuer: "Infosys Springboard",
    date: "April 10, 2026",
    icon: <Eye size={18} />,
    color: "from-emerald-500 to-teal-500",
    pdfUrl: "/certs/computer_vision.pdf",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    date: "April 8, 2026",
    icon: <Database size={18} />,
    color: "from-pink-500 to-rose-500",
    pdfUrl: "/certs/data_science.pdf",
  },
  {
    title: "Introduction to Robotic Process Automation",
    issuer: "Infosys Springboard",
    date: "April 10, 2026",
    icon: <Cpu size={18} />,
    color: "from-rose-500 to-red-500",
    pdfUrl: "/certs/rpa_intro.pdf",
  },
  {
    title: "Agile Scrum in Practice",
    issuer: "Infosys Springboard",
    date: "April 12, 2026",
    icon: <RefreshCw size={18} />,
    color: "from-cyan-500 to-blue-500",
    pdfUrl: "/certs/agile_scrum.pdf",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "2026",
    icon: <Award size={18} />,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL — IIT Kharagpur",
    date: "2025",
    icon: <Cloud size={18} />,
    color: "from-sky-500 to-blue-600",
  },
];

export default function Certifications() {
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
    <section id="certifications" className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12" aria-labelledby="certifications-heading">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Award size={20} />
        </div>
        <div>
          <h2 id="certifications-heading" className="text-2xl md:text-3xl font-extrabold tracking-tight">Certifications</h2>
          <p className="text-sm text-muted-foreground">Professional credentials and academic accomplishments</p>
        </div>
      </div>

      {/* Grid of Certifications */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glass-card p-6 flex flex-col justify-between hover:border-primary/20 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.15)] transition-all duration-300 group cursor-default"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-sm shrink-0`}>
                  {cert.icon}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 shrink-0">
                  <ShieldCheck size={11} />
                  <span>Verified</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="font-bold text-sm md:text-base text-foreground mb-1 leading-tight group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground font-medium mb-4">
                {cert.issuer}
              </p>
            </div>

            {/* Date & Action Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-border/40 text-[10px] md:text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} className="shrink-0" />
                <span>Issued: {cert.date}</span>
              </div>
              
              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline font-bold transition-all shrink-0 cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
