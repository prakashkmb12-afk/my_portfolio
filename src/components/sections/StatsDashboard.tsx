"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Star, GitBranch, Users, Calendar, Award, ExternalLink } from "lucide-react";

interface StatsData {
  github: {
    username: string;
    publicRepos: number;
    followers: number;
    totalStars: number;
    contributions: number;
  };
  leetcode: {
    username: string;
    solvedTotal: number;
    solvedEasy: number;
    solvedMedium: number;
    solvedHard: number;
    acceptanceRate: number;
  };
  isMock?: boolean;
}

export default function StatsDashboard() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/stats?github=prakashkmb12-afk&leetcode=prakashkmb12-afk");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to load live stats", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="py-12 px-4 md:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="glass-card p-6 h-64 animate-pulse flex flex-col justify-between">
            <div className="h-6 bg-muted rounded w-1/3"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
            <div className="h-10 bg-muted rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  const github = stats?.github;
  const leetcode = stats?.leetcode;

  return (
    <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-xl md:text-2xl font-bold">Coding Activity & Live Metrics</h3>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">Real-time metrics fetched from GitHub and LeetCode APIs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* GitHub Stats Card */}
        {github && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-2xl rounded-full group-hover:bg-indigo-500/10 transition-colors duration-300" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">GitHub Profile</h4>
                    <p className="text-xs text-muted-foreground">@{github.username}</p>
                  </div>
                </div>
                <a
                  href={`https://github.com/${github.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View GitHub Profile"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg border border-border/50 bg-card/20">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                    <Star size={14} className="text-amber-400 shrink-0" />
                    <span>Stars Earned</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold">{github.totalStars}</p>
                </div>
                <div className="p-3 rounded-lg border border-border/50 bg-card/20">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                    <GitBranch size={14} className="text-indigo-400 shrink-0" />
                    <span>Repositories</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold">{github.publicRepos}</p>
                </div>
                <div className="p-3 rounded-lg border border-border/50 bg-card/20">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                    <Users size={14} className="text-emerald-400 shrink-0" />
                    <span>Followers</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold">{github.followers}</p>
                </div>
                <div className="p-3 rounded-lg border border-border/50 bg-card/20">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-1">
                    <Calendar size={14} className="text-purple-400 shrink-0" />
                    <span>Contributions</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold">{github.contributions}+</p>
                </div>
              </div>
            </div>

            {/* Micro Contribution Mock Grid */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-1 text-[10px] text-muted-foreground">
              <span>Contribution Activity</span>
              <div className="flex gap-[3px]">
                {[1, 2, 4, 2, 0, 1, 3, 5, 2, 1, 4, 3, 0, 2, 4].map((level, idx) => (
                  <span
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-sm ${
                      level === 0
                        ? "bg-muted"
                        : level === 1
                        ? "bg-indigo-900/40"
                        : level === 2
                        ? "bg-indigo-800/60"
                        : level === 3
                        ? "bg-indigo-600/80"
                        : "bg-indigo-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* LeetCode Stats Card */}
        {leetcode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full group-hover:bg-emerald-500/10 transition-colors duration-300" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">LeetCode Stats</h4>
                    <p className="text-xs text-muted-foreground">@{leetcode.username}</p>
                  </div>
                </div>
                <a
                  href={`https://leetcode.com/${leetcode.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View LeetCode Profile"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Solved Summary */}
              <div className="flex items-end gap-2 mb-5">
                <span className="text-3xl md:text-4xl font-extrabold text-foreground">{leetcode.solvedTotal}</span>
                <span className="text-xs text-muted-foreground mb-1.5">Problems Solved</span>
              </div>

              {/* Progress bars by Difficulty */}
              <div className="space-y-3.5 mb-2">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-emerald-500">Easy</span>
                    <span className="text-muted-foreground">{leetcode.solvedEasy} solved</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500"
                      style={{ width: `${Math.min(100, (leetcode.solvedEasy / 150) * 100)}%` }}
                    />
                  </div>
                </div>
                
                {/* Medium */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-amber-500">Medium</span>
                    <span className="text-muted-foreground">{leetcode.solvedMedium} solved</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500"
                      style={{ width: `${Math.min(100, (leetcode.solvedMedium / 250) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-rose-500">Hard</span>
                    <span className="text-muted-foreground">{leetcode.solvedHard} solved</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rose-500"
                      style={{ width: `${Math.min(100, (leetcode.solvedHard / 80) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer metrics */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Award size={12} className="text-emerald-400" />
                <span>Accuracy Rate: {leetcode.acceptanceRate}%</span>
              </span>
              <span>Top 15% of Solvers</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
