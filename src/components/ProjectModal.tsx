"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Maximize2,
  Minimize2,
  Monitor,
  Smartphone,
  Tablet,
  BookOpen,
  Layers,
  Cpu,
  Gauge,
  Scale,
  Sparkles,
  ArrowUpRight,
  Zap,
  Database,
  Globe,
  Mic,
  Code2,
  BarChart3,
  Route,
  Server,
  Cloud,
  Eye,
} from "lucide-react";

type TabId = "overview" | "live" | "architecture" | "techstack" | "performance" | "tradeoffs";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: "overview", label: "Overview", icon: <BookOpen size={14} /> },
  { id: "live", label: "Live Demo", icon: <Monitor size={14} /> },
  { id: "architecture", label: "Architecture", icon: <Layers size={14} /> },
  { id: "techstack", label: "Tech Stack", icon: <Cpu size={14} /> },
  { id: "performance", label: "Performance", icon: <Gauge size={14} /> },
  { id: "tradeoffs", label: "Trade-offs", icon: <Scale size={14} /> },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
    {children}
  </h3>
);

const InfoCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white/[0.03] border border-[#232326] rounded-xl p-4 hover:bg-white/[0.05] hover:border-[#333] transition-all group">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-white/5 border border-[#232326] flex items-center justify-center shrink-0 text-[#a1a1aa] group-hover:text-white group-hover:border-[#444] transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-white text-sm font-medium mb-1">{title}</h4>
        <p className="text-[#a1a1aa] text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const ArchBlock = ({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) => (
  <div className="bg-white/[0.02] border border-[#232326] rounded-xl p-4 relative overflow-hidden">
    <div
      className="absolute top-0 left-0 w-full h-[2px]"
      style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
    />
    <h4 className="text-white text-sm font-semibold mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-[#a1a1aa] text-xs flex items-center gap-2">
          <span
            className="w-1 h-1 rounded-full shrink-0"
            style={{ backgroundColor: accent }}
          />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const MetricCard = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-white/[0.03] border border-[#232326] rounded-xl p-4 text-center hover:border-[#333] transition-all">
    <div className="w-10 h-10 rounded-full bg-white/5 border border-[#232326] flex items-center justify-center mx-auto mb-3 text-[#a1a1aa]">
      {icon}
    </div>
    <p className="text-white text-lg font-bold font-mono">{value}</p>
    <p className="text-[#a1a1aa] text-[11px] mt-1">{label}</p>
  </div>
);

// ─── Viewport preset type ───
type ViewportPreset = "desktop" | "tablet" | "mobile";
const viewportSizes: Record<ViewportPreset, { w: string; icon: React.ReactNode; label: string }> = {
  desktop: { w: "100%", icon: <Monitor size={13} />, label: "Desktop" },
  tablet: { w: "768px", icon: <Tablet size={13} />, label: "Tablet" },
  mobile: { w: "375px", icon: <Smartphone size={13} />, label: "Mobile" },
};

export default function ProjectModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [viewport, setViewport] = useState<ViewportPreset>("desktop");
  const [iframeFullscreen, setIframeFullscreen] = useState(false);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (iframeFullscreen) setIframeFullscreen(false);
        else onClose();
      }
    },
    [onClose, iframeFullscreen]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-[96vw] h-[92vh] max-w-[1600px] bg-[#0A0A0C] border border-[#1a1a1e] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col"
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* ─── Top Bar ─── */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1e] bg-[#0A0A0C]/90 backdrop-blur-sm shrink-0">
              <div className="flex items-center gap-3">
                {/* Traffic lights */}
                <div className="flex gap-1.5">
                  <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all"
                    title="Close"
                  />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <button
                    onClick={() => setIframeFullscreen(!iframeFullscreen)}
                    className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-110 transition-all"
                    title="Fullscreen"
                  />
                </div>
                <div className="h-4 w-px bg-[#232326] mx-1" />
                <h2 className="text-white text-sm font-semibold tracking-tight">
                  ThinkAloud.ai
                </h2>
                <span className="bg-[#052e16] text-[#22c55e] text-[9px] px-2 py-0.5 rounded-full border border-[#14532d] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                  Live
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://thinkaloudai.vishal-saini.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#a1a1aa] hover:text-white text-xs bg-white/5 border border-[#232326] hover:border-[#444] px-3 py-1.5 rounded-lg transition-all"
                >
                  <ExternalLink size={12} />
                  Open Site
                </a>
                <a
                  href="https://github.com/itsVish16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#a1a1aa] hover:text-white text-xs bg-white/5 border border-[#232326] hover:border-[#444] px-3 py-1.5 rounded-lg transition-all"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#a1a1aa] hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* ─── Tab Navigation ─── */}
            <div className="flex items-center gap-1 px-5 py-2 border-b border-[#1a1a1e] bg-[#0A0A0C]/60 overflow-x-auto shrink-0 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-black"
                      : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ─── Content ─── */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
              {/* ═══ OVERVIEW TAB ═══ */}
              {activeTab === "overview" && (
                <div className="p-6 sm:p-8 space-y-8 max-w-5xl mx-auto">
                  {/* Hero */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#232326] bg-gradient-to-br from-[#0f0f14] to-[#0A0A0C] p-6 sm:p-8">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.08),_transparent_50%)]" />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">🧠</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          ThinkAloud.ai
                        </h2>
                      </div>
                      <p className="text-[#b3b3b8] text-sm sm:text-base leading-8 max-w-3xl">
                        ThinkAloud.ai is an <strong className="text-white">AI-powered interview preparation and learning platform</strong> that
                        helps software engineers and CS students practice technical interviews, behavioral rounds, system design
                        discussions, and coding assessments through{" "}
                        <strong className="text-white">real-time AI-driven voice interactions</strong>.
                      </p>
                      <p className="text-[#b3b3b8] text-sm sm:text-base leading-8 max-w-3xl mt-4">
                        The platform combines <strong className="text-white">distributed backend systems</strong>,{" "}
                        <strong className="text-white">event-driven architecture</strong>, and{" "}
                        <strong className="text-white">AI-powered voice agents</strong> to deliver an interactive interview experience
                        while continuously tracking user progress and learning outcomes.
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <SectionTitle>
                      <Sparkles size={16} className="text-[#8b5cf6]" />
                      Key Features
                    </SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      <InfoCard
                        icon={<Mic size={15} />}
                        title="AI Mock Interviews"
                        description="Real-time AI-powered interviews for DSA, System Design & Behavioral rounds with natural voice interactions."
                      />
                      <InfoCard
                        icon={<Globe size={15} />}
                        title="Voice Conversations"
                        description="Natural voice interactions with AI interviewers via LiveKit WebRTC with sub-2s response latency."
                      />
                      <InfoCard
                        icon={<BarChart3 size={15} />}
                        title="Smart Analytics"
                        description="Automated evaluation, skill scoring & personalized performance feedback after every session."
                      />
                      <InfoCard
                        icon={<Code2 size={15} />}
                        title="Secure Code Runner"
                        description="Sandboxed coding environment for live DSA practice during interviews with test case execution."
                      />
                      <InfoCard
                        icon={<Route size={15} />}
                        title="Learning Roadmaps"
                        description="AI-generated study plans with progress tracking tailored to your skill level and goals."
                      />
                      <InfoCard
                        icon={<Zap size={15} />}
                        title="Low Latency"
                        description="Sub-1s chatbot TTFT and sub-2s voice response latency for a natural conversational experience."
                      />
                    </div>
                  </div>

                  {/* Roadmap */}
                  <div className="border border-[#232326] rounded-xl p-5 bg-white/[0.02]">
                    <SectionTitle>
                      <Sparkles size={16} className="text-[#f59e0b]" />
                      Roadmap
                    </SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "🤖 Multi-agent interview simulations",
                        "📄 Resume-aware interview generation",
                        "🧠 Personalized learning recommendations",
                        "🏛️ Advanced system design interview support",
                        "👥 Team-based mock interview sessions",
                        "📚 AI-powered study planning",
                      ].map((item) => (
                        <div
                          key={item}
                          className="text-[#a1a1aa] text-xs flex items-center gap-2 bg-white/[0.02] border border-[#1a1a1e] rounded-lg px-3 py-2.5"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ LIVE DEMO TAB ═══ */}
              {activeTab === "live" && (
                <div className="h-full flex flex-col">
                  {/* Viewport Toolbar */}
                  <div className="flex items-center justify-between px-5 py-2 border-b border-[#1a1a1e] bg-[#080809] shrink-0">
                    <div className="flex items-center gap-1.5">
                      {(Object.keys(viewportSizes) as ViewportPreset[]).map((key) => (
                        <button
                          key={key}
                          onClick={() => setViewport(key)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                            viewport === key
                              ? "bg-white/10 text-white"
                              : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {viewportSizes[key].icon}
                          {viewportSizes[key].label}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#52525B]">
                        {viewport === "desktop"
                          ? "1440px"
                          : viewport === "tablet"
                          ? "768px"
                          : "375px"}
                      </span>
                      <button
                        onClick={() => setIframeFullscreen(!iframeFullscreen)}
                        className="text-[#a1a1aa] hover:text-white p-1 rounded transition-colors"
                      >
                        {iframeFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                      </button>
                    </div>
                  </div>

                  {/* Iframe Container */}
                  <div className="flex-1 bg-[#080809] flex items-start justify-center p-4 overflow-auto">
                    <div
                      className="bg-[#0A0A0C] border border-[#232326] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 h-full"
                      style={{
                        width: viewportSizes[viewport].w,
                        maxWidth: "100%",
                      }}
                    >
                      <iframe
                        src="https://thinkaloudai.tech/"
                        title="ThinkAloud.ai - Live Demo"
                        className="w-full h-full border-0"
                        style={{ minHeight: "calc(92vh - 160px)" }}
                        allow="accelerometer; camera; microphone; fullscreen"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ ARCHITECTURE TAB ═══ */}
              {activeTab === "architecture" && (
                <div className="p-6 sm:p-8 space-y-8 max-w-5xl mx-auto">
                  {/* Architecture Intro */}
                  <div>
                    <SectionTitle>
                      <Layers size={16} className="text-[#8b5cf6]" />
                      Distributed Microservices Architecture
                    </SectionTitle>
                    <p className="text-[#a1a1aa] text-sm leading-7 mb-6">
                      ThinkAloud follows a <strong className="text-white">distributed microservices architecture</strong> with three
                      independently deployable services communicating through{" "}
                      <strong className="text-white">asynchronous events via Redis Pub/Sub</strong>.
                    </p>

                    {/* Service Blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <ArchBlock
                        title="User Service"
                        accent="#8b5cf6"
                        items={[
                          "Auth & JWT Management",
                          "User Profiles & Progress",
                          "Skill Scoring System",
                          "Progress Tracking",
                          "Event Consumption",
                        ]}
                      />
                      <ArchBlock
                        title="Main Service"
                        accent="#22c55e"
                        items={[
                          "DSA Practice Engine",
                          "AI Roadmap Generation",
                          "Dashboard & Analytics",
                          "Secure Code Execution",
                          "Progress Visualization",
                        ]}
                      />
                      <ArchBlock
                        title="AI Interviewer Service"
                        accent="#f59e0b"
                        items={[
                          "Realtime AI Interviews",
                          "Voice Agent (LiveKit)",
                          "LangGraph Workflows",
                          "Interview Grading",
                          "Transcript Analysis",
                        ]}
                      />
                    </div>
                  </div>

                  {/* Event Flow */}
                  <div className="border border-[#232326] rounded-xl p-5 bg-white/[0.02]">
                    <SectionTitle>
                      <Zap size={16} className="text-[#f59e0b]" />
                      Event-Driven Workflow
                    </SectionTitle>
                    <div className="flex flex-col gap-3">
                      {[
                        { step: "1", text: "User completes an AI interview session", color: "#8b5cf6" },
                        { step: "2", text: "AI Service publishes InterviewCompleted event to Redis Pub/Sub", color: "#22c55e" },
                        { step: "3", text: "User Service consumes the event asynchronously", color: "#f59e0b" },
                        { step: "4", text: "Skills, history & analytics updated in real-time", color: "#ef4444" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-center gap-3">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 border"
                            style={{
                              backgroundColor: `${item.color}20`,
                              borderColor: `${item.color}40`,
                            }}
                          >
                            {item.step}
                          </div>
                          <p className="text-[#b3b3b8] text-sm">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-white/[0.03] border border-[#232326] rounded-lg px-4 py-3">
                      <p className="text-[#a1a1aa] text-xs leading-relaxed italic">
                        Services are <strong className="text-white not-italic">loosely coupled</strong> via Redis Pub/Sub, enabling
                        independent scaling and deployment of each microservice.
                      </p>
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div>
                    <SectionTitle>
                      <Cloud size={16} className="text-[#3b82f6]" />
                      Infrastructure & Observability
                    </SectionTitle>
                    <p className="text-[#a1a1aa] text-sm leading-7 mb-4">
                      Deployed across <strong className="text-white">AWS + Azure</strong> with production-grade monitoring:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white/[0.02] border border-[#232326] rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Server size={14} className="text-[#f59e0b]" />
                          <h4 className="text-white text-sm font-medium">Compute</h4>
                        </div>
                        <p className="text-[#a1a1aa] text-xs leading-relaxed">AWS EC2 · Azure VM · Docker containers</p>
                      </div>
                      <div className="bg-white/[0.02] border border-[#232326] rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Database size={14} className="text-[#8b5cf6]" />
                          <h4 className="text-white text-sm font-medium">Data Layer</h4>
                        </div>
                        <p className="text-[#a1a1aa] text-xs leading-relaxed">PostgreSQL · Redis · Amazon SQS</p>
                      </div>
                      <div className="bg-white/[0.02] border border-[#232326] rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap size={14} className="text-[#22c55e]" />
                          <h4 className="text-white text-sm font-medium">Serverless</h4>
                        </div>
                        <p className="text-[#a1a1aa] text-xs leading-relaxed">AWS Lambda for async tasks & notifications</p>
                      </div>
                      <div className="bg-white/[0.02] border border-[#232326] rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Eye size={14} className="text-[#ef4444]" />
                          <h4 className="text-white text-sm font-medium">Monitoring</h4>
                        </div>
                        <p className="text-[#a1a1aa] text-xs leading-relaxed">Datadog (infra/API) · Opik (LLM tracing)</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ TECH STACK TAB ═══ */}
              {activeTab === "techstack" && (
                <div className="p-6 sm:p-8 space-y-6 max-w-5xl mx-auto">
                  <SectionTitle>
                    <Cpu size={16} className="text-[#8b5cf6]" />
                    Complete Tech Stack
                  </SectionTitle>

                  {[
                    {
                      category: "Backend",
                      accent: "#22c55e",
                      techs: [
                        { name: "FastAPI", desc: "High-performance async Python web framework" },
                        { name: "SQLAlchemy", desc: "ORM for database modeling & queries" },
                        { name: "PostgreSQL", desc: "Primary relational database" },
                        { name: "Redis", desc: "Caching, Pub/Sub event bus, session store" },
                        { name: "Celery", desc: "Distributed task queue for background jobs" },
                      ],
                    },
                    {
                      category: "AI / ML",
                      accent: "#8b5cf6",
                      techs: [
                        { name: "LangGraph", desc: "Stateful multi-step interview workflow orchestration" },
                        { name: "LangChain", desc: "LLM integration & chain-of-thought prompting" },
                        { name: "LLM APIs", desc: "GPT-4, Mistral, and other model providers" },
                        { name: "Whisper", desc: "Speech-to-text transcription for voice interviews" },
                      ],
                    },
                    {
                      category: "Realtime",
                      accent: "#f59e0b",
                      techs: [
                        { name: "LiveKit", desc: "WebRTC infrastructure for low-latency audio/video" },
                        { name: "VAD", desc: "Voice Activity Detection for natural conversation flow" },
                        { name: "Streaming TTS", desc: "Real-time text-to-speech for AI voice responses" },
                      ],
                    },
                    {
                      category: "Infrastructure",
                      accent: "#ef4444",
                      techs: [
                        { name: "Docker", desc: "Container orchestration for all services" },
                        { name: "AWS EC2 + SQS + Lambda", desc: "Compute, messaging & serverless functions" },
                        { name: "Azure VM", desc: "Additional compute for AI services" },
                      ],
                    },
                    {
                      category: "Frontend",
                      accent: "#3b82f6",
                      techs: [
                        { name: "React + Vite", desc: "Fast SPA with hot module replacement" },
                        { name: "Glassmorphism UI", desc: "Modern luxury dark theme with depth effects" },
                        { name: "SVG Analytics", desc: "Custom-built data visualization components" },
                      ],
                    },
                    {
                      category: "Observability",
                      accent: "#ec4899",
                      techs: [
                        { name: "Datadog", desc: "Infrastructure & API performance monitoring" },
                        { name: "Opik", desc: "LLM tracing, prompt evaluation & cost tracking" },
                      ],
                    },
                  ].map((section) => (
                    <div key={section.category} className="border border-[#232326] rounded-xl overflow-hidden">
                      <div className="px-4 py-3 border-b border-[#232326] bg-white/[0.02] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: section.accent }} />
                        <h4 className="text-white text-sm font-semibold">{section.category}</h4>
                      </div>
                      <div className="divide-y divide-[#1a1a1e]">
                        {section.techs.map((tech) => (
                          <div key={tech.name} className="px-4 py-3 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                            <span className="text-white text-sm font-medium">{tech.name}</span>
                            <span className="text-[#a1a1aa] text-xs text-right max-w-[60%]">{tech.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ═══ PERFORMANCE TAB ═══ */}
              {activeTab === "performance" && (
                <div className="p-6 sm:p-8 space-y-8 max-w-5xl mx-auto">
                  <SectionTitle>
                    <Gauge size={16} className="text-[#22c55e]" />
                    Performance Targets
                  </SectionTitle>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <MetricCard icon={<Zap size={18} />} value="< 1s" label="Chatbot TTFT (Time to First Token)" />
                    <MetricCard icon={<Mic size={18} />} value="< 2s" label="Voice Response Latency" />
                    <MetricCard icon={<Globe size={18} />} value="Natural" label="Conversational Flow" />
                  </div>

                  {/* Real-time AI Infrastructure */}
                  <div>
                    <SectionTitle>
                      <Cpu size={16} className="text-[#f59e0b]" />
                      Real-time AI Infrastructure
                    </SectionTitle>
                    <div className="border border-[#232326] rounded-xl overflow-hidden">
                      <div className="grid grid-cols-3 gap-px bg-[#232326] text-[11px] font-semibold uppercase tracking-wider text-[#a1a1aa]">
                        <div className="bg-[#0e0e11] px-4 py-2.5">Component</div>
                        <div className="bg-[#0e0e11] px-4 py-2.5">Technology</div>
                        <div className="bg-[#0e0e11] px-4 py-2.5">Purpose</div>
                      </div>
                      {[
                        { comp: "WebRTC Communication", tech: "LiveKit", purpose: "Low-latency audio/video streaming" },
                        { comp: "Interview Orchestration", tech: "LangGraph", purpose: "Stateful multi-step workflows" },
                        { comp: "Voice Detection", tech: "VAD", purpose: "Real-time voice activity detection" },
                        { comp: "Speech Synthesis", tech: "Streaming TTS", purpose: "Natural AI voice responses" },
                        { comp: "Interview Logic", tech: "LLM + Tool Calling", purpose: "Context-aware reasoning & evaluation" },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 gap-px bg-[#1a1a1e]">
                          <div className="bg-[#0A0A0C] px-4 py-3 text-white text-xs font-medium">{row.comp}</div>
                          <div className="bg-[#0A0A0C] px-4 py-3 text-[#8b5cf6] text-xs font-semibold">{row.tech}</div>
                          <div className="bg-[#0A0A0C] px-4 py-3 text-[#a1a1aa] text-xs">{row.purpose}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ TRADE-OFFS TAB ═══ */}
              {activeTab === "tradeoffs" && (
                <div className="p-6 sm:p-8 space-y-6 max-w-5xl mx-auto">
                  <SectionTitle>
                    <Scale size={16} className="text-[#f59e0b]" />
                    Architecture Trade-offs & Design Decisions
                  </SectionTitle>

                  {[
                    {
                      title: "Microservices vs Monolith",
                      decision: "Chose microservices",
                      why: "Each service (User, Main, AI Interviewer) has vastly different scaling needs. The AI interview service is GPU/compute-heavy and needs independent scaling, while the User service is lightweight CRUD.",
                      tradeoff: "Adds operational complexity with inter-service communication, but Redis Pub/Sub keeps it manageable. The loose coupling allows deploying AI model updates without touching auth/user flows.",
                    },
                    {
                      title: "Redis Pub/Sub vs Message Queue (RabbitMQ/Kafka)",
                      decision: "Chose Redis Pub/Sub + Amazon SQS",
                      why: "Redis was already in the stack for caching and sessions. Using it for events reduces infrastructure overhead. SQS handles durable message delivery for critical paths.",
                      tradeoff: "Redis Pub/Sub doesn't persist messages — if a consumer is down, events are lost. Mitigated by using SQS for critical events (interview completions, skill updates) and Redis for real-time notifications.",
                    },
                    {
                      title: "LiveKit WebRTC vs WebSocket Audio",
                      decision: "Chose LiveKit",
                      why: "WebRTC provides sub-200ms audio latency compared to 500ms+ with WebSocket-based audio streaming. For a natural interview conversation, this latency difference is critical.",
                      tradeoff: "LiveKit adds infrastructure cost and complexity compared to simple WebSocket streaming. However, the UX improvement in voice naturalness justifies it for the interview use case.",
                    },
                    {
                      title: "LangGraph vs Simple Chain",
                      decision: "Chose LangGraph for interview orchestration",
                      why: "Interviews are inherently stateful with branching logic — follow-up questions depend on previous answers, difficulty adapts in real-time, and the AI needs to track context across multiple turns.",
                      tradeoff: "LangGraph has a steeper learning curve than simple LangChain chains, but the state management and conditional branching it provides are essential for realistic interview flows.",
                    },
                    {
                      title: "Multi-Cloud (AWS + Azure) vs Single Provider",
                      decision: "Chose multi-cloud deployment",
                      why: "Azure provides better GPU VM pricing for AI inference workloads, while AWS has superior managed services (SQS, Lambda) for the backend. Using both optimizes cost-performance.",
                      tradeoff: "Cross-cloud networking adds latency and complexity. Mitigated by keeping latency-sensitive paths (voice ↔ AI) within the same cloud, and using async events for cross-cloud communication.",
                    },
                    {
                      title: "Sandboxed Code Execution",
                      decision: "Custom Docker-based sandbox",
                      why: "Running user-submitted code requires strict isolation. Docker containers provide process-level isolation with resource limits (CPU, memory, time) to prevent abuse.",
                      tradeoff: "Cold-start time for containers adds ~1-2s to first code execution. Mitigated by pre-warming a pool of containers and using lightweight base images.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-[#232326] rounded-xl overflow-hidden hover:border-[#333] transition-colors">
                      <div className="px-5 py-4 border-b border-[#1a1a1e] bg-white/[0.02]">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                          <span className="bg-[#8b5cf6]/10 text-[#a78bfa] text-[10px] px-2.5 py-0.5 rounded-full border border-[#8b5cf6]/20 font-medium">
                            {item.decision}
                          </span>
                        </div>
                      </div>
                      <div className="px-5 py-4 space-y-3">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52525B] mb-1.5">Why</p>
                          <p className="text-[#b3b3b8] text-xs leading-relaxed">{item.why}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#52525B] mb-1.5">Trade-off</p>
                          <p className="text-[#a1a1aa] text-xs leading-relaxed">{item.tradeoff}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
