"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Clock, MapPin } from "lucide-react";
import {
  SiCplusplus, SiPython, SiPostgresql, SiNumpy, SiPandas,
  SiScikitlearn, SiPytorch, SiLangchain, SiFastapi, SiRedis,
  SiDocker, SiGit, SiGithub
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import LeetcodeHeatmap from "../components/LeetcodeHeatmap";
import ProjectModal from "../components/ProjectModal";

const skillsList = [
  { label: "C++", Icon: SiCplusplus, color: "#00599C" },
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "SQL", Icon: TbSql, color: "#e38c00" },
  { label: "Machine Learning", Icon: null, color: "#a78bfa" },
  { label: "Deep Learning", Icon: null, color: "#f472b6" },
  { label: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
  { label: "Pandas", Icon: SiPandas, color: "#130654" },
  { label: "Scikit-Learn", Icon: SiScikitlearn, color: "#F7931E" },
  { label: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { label: "RAG", Icon: null, color: "#34d399" },
  { label: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { label: "Redis", Icon: SiRedis, color: "#DC382D" },
  { label: "AWS", Icon: FaAws, color: "#FF9900" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
  { label: "GitHub", Icon: SiGithub, color: "#ffffff" },
];


const SectionHeader = ({ title }: { title: string }) => (
  <div className="relative inline-flex items-center text-white font-bold text-sm mb-4">
    <div className="absolute left-0 top-0 w-1.5 h-1.5 border-t-2 border-l-2 border-[#52525B]"></div>
    <div className="absolute left-0 bottom-0 w-1.5 h-1.5 border-b-2 border-l-2 border-[#52525B]"></div>
    <div className="absolute right-0 top-0 w-1.5 h-1.5 border-t-2 border-r-2 border-[#52525B]"></div>
    <div className="absolute right-0 bottom-0 w-1.5 h-1.5 border-b-2 border-r-2 border-[#52525B]"></div>
    <span className="px-3 py-1 font-sans">{title}</span>
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Experience", "Education", "Certifications", "Hackathons", "Projects", "Blogs"];
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const format = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      const h12 = hours % 12 || 12;
      setCurrentTime(`${h12}:${minutes}:${seconds} ${ampm}`);
    };
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="w-full pb-10">
      {/* Hero Section (Leetcode Style) */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 text-left items-start w-full">
        {/* Left Column: Profile Info */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-[220px] shrink-0">

          {/* Animated Avatar Container */}
          <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] shrink-0 group rounded-2xl overflow-hidden bg-[#111111] shadow-2xl">
            {/* Spinning silver line */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_320deg,#e5e7eb_360deg)] animate-[spin_3s_linear_infinite]"></div>

            {/* Actual Image container masking the inside */}
            <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-[#000000] z-10">
              <Image
                src="/avatar.png"
                alt="Vishal Saini"
                fill
                className="object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center md:items-start mt-2 w-full text-center md:text-left">
            <h1 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
              Vishal Saini <span className="text-xl">🤟</span>
            </h1>
            <p className="text-[#a1a1aa] font-mono text-[15px] mb-2">@its_Vish</p>
            <div className="flex flex-col gap-2.5 text-[#a1a1aa] text-sm mt-1 border-t border-dashed border-[#232326] pt-4 w-full">
              <div className="flex flex-row items-center justify-center md:justify-start gap-2.5">
                <MapPin size={16} className="text-[#52525B]" /> India
              </div>
              <div className="flex flex-row items-center justify-center md:justify-start gap-2.5">
                <Clock size={16} className="text-[#52525B]" /> {currentTime || "--:--:-- --"}
              </div>
            </div>

            {/* Social & Contact Buttons inside Sidebar */}
            <div className="flex flex-col gap-3 w-full mt-6">
              <a href="mailto:vishalsaini160204@gmail.com" className="w-full flex items-center justify-center gap-2 bg-white text-black px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all shadow-[0_4px_14px_0_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Email Me
              </a>
              <div className="flex items-center gap-3 w-full">
                <a href="https://linkedin.com/in/itsVish" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#161618] border border-[#232326] hover:border-[#52525B] px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1f1f22] transition-all text-white">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/itsVish16" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#161618] border border-[#232326] hover:border-[#52525B] px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1f1f22] transition-all text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  GitHub
                </a>
              </div>
              <a href="https://drive.google.com/file/d/1ienCcMtcDprapzcDJDT5nROwrOIRZVN4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#161618] border border-[#232326] hover:border-[#52525B] px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1f1f22] transition-all text-[#a1a1aa] hover:text-white mt-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio / Description */}
        <div className="flex flex-col flex-1 w-full mt-4 md:mt-0 min-w-0">
          <SectionHeader title="About Me" />
          <div className="space-y-4 text-[#a1a1aa] leading-8 text-[15px] bg-[#111111]/40 border border-[#232326]/50 p-6 sm:p-8 rounded-2xl shadow-sm mb-8">
            <p className="text-justify sm:text-left">
              Hey! I&apos;m an <strong className="text-white font-medium">AI/ML Engineer</strong> who loves turning research into real products. I work with <strong className="text-white font-medium inline-flex items-center gap-1">🔥 PyTorch</strong> and <strong className="text-white font-medium">Scikit-Learn</strong> to build and train models, and I&apos;m deep into <strong className="text-white font-medium">LangChain</strong> &amp; <strong className="text-white font-medium">RAG</strong> pipelines for production-grade AI agents.
            </p>
            <p className="text-justify sm:text-left">
              On the backend I ship fast, scalable APIs with <strong className="text-white font-medium inline-flex items-center gap-1">⚡ FastAPI</strong> backed by <strong className="text-white font-medium">PostgreSQL</strong> and <strong className="text-white font-medium">Redis</strong>, deployed on <strong className="text-white font-medium inline-flex items-center gap-1">☁️ AWS</strong> via <strong className="text-white font-medium">Docker</strong>. I write clean <strong className="text-white font-medium">Python</strong> and <strong className="text-white font-medium">C++</strong>, wrangle data with <strong className="text-white font-medium">NumPy &amp; Pandas</strong>, and I ❤️  <strong className="text-white font-medium">GPUs</strong>.
            </p>
          </div>

          <LeetcodeHeatmap />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <SectionHeader title="My Skills" />
        <div
          className="relative w-full overflow-hidden mt-4 pb-2 pt-2 flex flex-col gap-3"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          {/* Row 1: Forward */}
          <div className="flex w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] gap-2.5">
            {[...skillsList.slice(0, 9), ...skillsList.slice(0, 9)].map(({ label, Icon, color }, index) => (
              <motion.div
                key={`${label}-${index}`}
                whileHover={{ scale: 1.05, translateY: -2 }}
                className="flex flex-row items-center gap-1.5 text-xs font-medium text-white px-3 py-1.5 rounded-full border border-[#232326] hover:border-[#52525B] cursor-pointer shadow-sm bg-white/5 backdrop-blur-md transition-all shrink-0"
              >
                {Icon && <Icon style={{ color }} className="w-3.5 h-3.5 shrink-0" />}
                {label}
              </motion.div>
            ))}
          </div>
          {/* Row 2: Reverse */}
          <div className="flex w-max animate-[marquee-reverse_50s_linear_infinite] hover:[animation-play-state:paused] gap-2.5">
            {[...skillsList.slice(9), ...skillsList.slice(9)].map(({ label, Icon, color }, index) => (
              <motion.div
                key={`${label}-${index}`}
                whileHover={{ scale: 1.05, translateY: -2 }}
                className="flex flex-row items-center gap-1.5 text-xs font-medium text-white px-3 py-1.5 rounded-full border border-[#232326] hover:border-[#52525B] cursor-pointer shadow-sm bg-white/5 backdrop-blur-md transition-all shrink-0"
              >
                {Icon && <Icon style={{ color }} className="w-3.5 h-3.5 shrink-0" />}
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Menu */}
      <div className="mb-12 flex flex-wrap gap-2 border-b border-dashed border-[#232326] pb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTab === tab
              ? "bg-white text-black"
              : "bg-[#111111] text-[#a1a1aa] hover:bg-[#232326] hover:text-white border border-[#232326]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {(activeTab === "All" || activeTab === "Experience") && (
        <div className="mb-12">
          {/* Work Experience Section */}
          <SectionHeader title="Work Experience" />
          <div className="mt-2 border border-dashed border-[#232326] p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:bg-[#111111]/50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-[#161618] rounded-lg border border-[#232326] flex items-center justify-center shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]"></div>
                <BriefcaseBusiness className="w-5 h-5 text-white relative z-10" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-medium text-[15px] hover:underline underline-offset-4 decoration-[#52525B]">Brudite Private Limited</h3>
                  <span className="text-[#52525B] text-xs">↗</span>
                  <span className="bg-[#052e16] text-[#22c55e] text-[10px] px-2 py-0.5 rounded-full border border-[#14532d] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full"></span> Completed
                  </span>
                </div>
                <p className="text-[#a1a1aa] text-sm mt-0.5">Associate intern</p>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-[#a1a1aa] flex flex-col gap-1 sm:gap-0.5 pl-16 sm:pl-0">
              <p>Jun 2025 - Aug 2025</p>
              <p>India</p>
            </div>
          </div>
        </div>
      )}

      {(activeTab === "All" || activeTab === "Education") && (
        <div className="mb-12">
          {/* Education Section */}
          <SectionHeader title="Education" />
          <div className="mt-2 border border-dashed border-[#232326] p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:bg-[#111111]/50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#161618] rounded-lg border border-[#232326] flex items-center justify-center shrink-0">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-medium text-[15px] hover:underline underline-offset-4 decoration-[#52525B]">Arya College of Engineering</h3>
                </div>
                <p className="text-[#a1a1aa] text-sm mt-0.5">B.Tech</p>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-[#a1a1aa] flex flex-col gap-1 sm:gap-0.5 pl-16 sm:pl-0">
              <p>Jaipur</p>
            </div>
          </div>
        </div>
      )}

      {(activeTab === "All" || activeTab === "Certifications") && (
        <div className="mb-12">
          {/* Certifications Section */}
          <SectionHeader title="Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {([
               {
                title: "AI CloudOps Engineer",
                org: "Nebius",
                desc: "Certified in AI CloudOps with expertise in GPU cluster management, environment deployment, access control, system monitoring, troubleshooting, and maintaining reliable AI cloud infrastructure.",
                issued: "2026",
                verifyUrl: "https://www.credly.com/badges/6df7862f-f4b8-4090-b9fe-70b870002ab3/public_url",
                image: "/AI_CloudOps_Engineer.png",
              },
              {
                title: "Agentic AI Builder",
                org: "Nebius",
                desc: "Certified in building agentic AI applications with Nebius Token Factory, including RAG pipelines, AI model integration, fine-tuning, and external tool connectivity for end-to-end AI workflows.",
                issued: "2026",
                verifyUrl: "https://www.credly.com/badges/d53739aa-aaf5-49e8-bf6a-895fd7459d9d/public_url",
                image: "/Agentic_AI_Builder.png",
              },
              {
                title: "Fine-tuning & RL for LLMs: Intro to Post-training",
                org: "DeepLearning.AI",
                desc: "Turn pretrained LLMs into production-ready models through post-training. Covered RLHF, Qunatization, DPO, PEFT, LoRA, QLoRA.",
                issued: "2026",
                verifyUrl: "https://learn.deeplearning.ai/certificates/84f55157-6eea-4f14-a6a7-c0f1f8a8bf81",
                image: "/post_training.png",
              },
              {
                title: "Foundation: Introduction to LangGraph - Python",
                org: "LangChain Academy",
                desc: "Built end-to-end AI agents using the LangGraph library, covering nodes, edges, and deployment patterns.",
                issued: "2026",
                verifyUrl: "https://academy.langchain.com/certificates/g6sck9wpul",
                image: "/langgraph_certificate.jpg",
              },
              {
                title: "Foundation: Introduction to LangChain - Python",
                org: "LangChain Academy",
                desc: "Master the fundamentals of the LangChain framework, from prompts and chains to agents and tools.",
                issued: "2026",
                verifyUrl: "https://academy.langchain.com/certificates/wos1f2v48l",
                image: "/langchain_certificate.jpg",
              },
              {
                title: "Machine Learning Specialization",
                org: "DeepLearning.AI",
                desc: "Focused on core machine learning workflows like model training, evaluation, and applied predictive systems.",
                issued: "2026",
                verifyUrl: "https://learn.deeplearning.ai/certificates/74dde174-de37-40e8-a66e-49ce0d2dad0b?usp=sharing",
                image: "/ml_certificate.png",
              },
              {
                title: "Deep Learning Specialization",
                org: "DeepLearning.AI",
                desc: "Covered neural networks, optimization techniques, and deep learning patterns used in practical AI development.",
                issued: "2026",
                verifyUrl: "https://learn.deeplearning.ai/certificates/c2abfa72-b229-473c-a1cf-9a4219ac9ab3",
                image: "/deepLearning_certificate.png",
              },
              {
                title: "Mathematics for Machine Learning",
                org: "DeepLearning.AI",
                desc: "Strengthened the math foundations behind modern ML models, including linear algebra, calculus, and probability.",
                issued: "2026",
                verifyUrl: "https://learn.deeplearning.ai/certificates/01cd2178-0811-4b2c-bf6a-31fc4609e730?usp=sharing",
                image: "/maths_ml_certificate.png",
              },
            ] as { title: string; org: string; desc: string; issued: string; verifyUrl: string; image: string | null }[]).map((cert, index) => (
              <a
                key={index}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-dashed border-[#232326] p-4 rounded-xl flex flex-col gap-4 transition-colors hover:bg-[#111111]/50 hover:border-[#52525B] cursor-pointer group"
              >
                {/* Certificate Image Preview */}
                <div className="w-full h-32 bg-[#161618] rounded-lg border border-[#232326] overflow-hidden relative">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#52525B]">
                      <span className="text-3xl">📜</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.5)]">View Certificate ↗</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col relative w-full h-full justify-between gap-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-medium text-[15px] group-hover:underline underline-offset-4 decoration-[#52525B] leading-tight pr-4">{cert.title}</h3>
                      <div className="flex gap-2 text-[#a1a1aa] shrink-0">
                        <svg className="w-4 h-4 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </div>
                    </div>
                    <p className="text-[#a1a1aa] text-xs leading-relaxed">{cert.org}</p>
                    <p className="text-[#a1a1aa] text-xs leading-relaxed mt-2 line-clamp-3">{cert.desc}</p>
                  </div>

                  <div className="flex items-center mt-2 w-full gap-2">
                    <span className="bg-[#161618] text-[#a1a1aa] font-mono text-[10px] px-2 py-0.5 rounded-sm border border-[#232326]">Issued {cert.issued}</span>
                    <span className="bg-[#0d1f0f] text-[#4ade80] text-[10px] px-2 py-0.5 rounded-sm border border-[#14532d] ml-auto">Verified</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {(activeTab === "All" || activeTab === "Hackathons") && (
        <div className="mb-12">
          {/* Hackathons Section */}
          <SectionHeader title="Hackathons" />
          <div className="flex flex-col gap-4 mt-2">
            {([
              { title: "Nirvana Summer Hackathon 2025", desc: "", badge: "Runner Up", color: "text-[#818cf8]", bg: "bg-[#1e1b4b]", border: "border-[#312e81]", certUrl: null },
              { title: "PyTorch x AMD Hackathon", desc: "", badge: "Participant", color: "text-[#a1a1aa]", bg: "bg-[#161618]", border: "border-[#232326]", certUrl: "/Vishal_Saini.pdf" },
              { title: "Commit to Change", desc: "AI Agents hackathon by Commet", badge: "Participant", color: "text-[#a1a1aa]", bg: "bg-[#161618]", border: "border-[#232326]", certUrl: null }
            ] as { title: string; desc: string; badge: string; color: string; bg: string; border: string; certUrl: string | null }[]).map((hack, index) => {
              const CardWrapper = hack.certUrl ? "a" : "div";
              const wrapperProps = hack.certUrl
                ? { href: hack.certUrl, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <CardWrapper
                  key={index}
                  {...(wrapperProps as object)}
                  className="border border-dashed border-[#232326] p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:bg-[#111111]/50 hover:border-[#52525B] cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#161618] rounded-lg border border-[#232326] flex items-center justify-center shrink-0">
                      <span className="text-xl">🏆</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-medium text-[15px] group-hover:underline underline-offset-4 decoration-[#52525B]">{hack.title}</h3>
                        <span className={`${hack.bg} ${hack.color} text-[10px] px-2 py-0.5 rounded-full border ${hack.border} flex items-center gap-1.5 font-medium whitespace-nowrap`}>
                          {hack.badge}
                        </span>
                      </div>
                      {hack.desc && <p className="text-[#a1a1aa] text-sm mt-0.5">{hack.desc}</p>}
                    </div>
                  </div>
                  {hack.certUrl && (
                    <div className="pl-16 sm:pl-0 flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="bg-[#0d1f0f] text-[#4ade80] text-[10px] px-2.5 py-0.5 rounded-full border border-[#14532d] font-medium flex items-center gap-1">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        View Certificate ↗
                      </span>
                    </div>
                  )}
                </CardWrapper>
              );
            })}
          </div>
        </div>
      )}

      {(activeTab === "All" || activeTab === "Projects") && (
        <div className="mb-12">
          {/* Projects Section */}
          <SectionHeader title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {/* ThinkAloud.ai */}
            <div onClick={() => setProjectModalOpen(true)} className="border border-dashed border-[#232326] p-4 rounded-xl flex flex-col gap-4 transition-colors hover:bg-[#111111]/50 cursor-pointer group md:col-span-2">
              <div className="w-full h-56 bg-[#0A0A0A] rounded-lg border border-[#232326] overflow-hidden relative group-hover:border-[#52525B] transition-colors flex items-center justify-center">
                <img
                  src="/thinkaloud_preview.png"
                  alt="ThinkAloud.ai - AI Interview Platform"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-white font-medium text-[15px] group-hover:underline underline-offset-4 decoration-[#52525B]">ThinkAloud.ai</h3>
                    <span className="bg-[#052e16] text-[#22c55e] text-[10px] px-2 py-0.5 rounded-full border border-[#14532d] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></span> Live
                    </span>
                  </div>
                  <div className="flex gap-3 text-[#a1a1aa]">
                    <a href="https://thinkaloudai.vishal-saini.me/" target="_blank" rel="noopener noreferrer" title="Live Demo" onClick={(e) => e.stopPropagation()}>
                      <svg className="w-4 h-4 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <a href="https://github.com/itsVish16" target="_blank" rel="noopener noreferrer" title="GitHub" onClick={(e) => e.stopPropagation()}>
                      <svg className="w-4 h-4 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
                <p className="text-[#a1a1aa] text-xs leading-relaxed mb-3 line-clamp-3">An AI-powered interview preparation platform with real-time voice interactions for technical interviews, behavioral rounds, system design, and coding assessments — built with distributed backend systems and event-driven architecture.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Next.js</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">FastAPI</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">AI Voice Agents</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">LangChain</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">PostgreSQL</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Redis</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Docker</span>
                </div>
              </div>
            </div>

            {/* Project 1 */}
            <div className="border border-dashed border-[#232326] p-4 rounded-xl flex flex-col gap-4 transition-colors hover:bg-[#111111]/50 cursor-pointer group">
              <div className="w-full h-48 bg-white rounded-lg border border-[#232326] overflow-hidden relative group-hover:border-[#52525B] transition-colors flex items-center justify-center">
                <img
                  src="/user_service_architecture.png"
                  alt="Scalable User Service Architecture Diagram"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-medium text-[15px] group-hover:underline underline-offset-4 decoration-[#52525B]">Scalable User Service</h3>
                  <div className="flex gap-2 text-[#a1a1aa]">
                    <a href="https://github.com/itsVish16/Scalable_User_Service" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
                <p className="text-[#a1a1aa] text-xs leading-relaxed mb-3 line-clamp-2">A production-grade, high-performance User Microservice built with FastAPI, PostgreSQL, and Redis.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">FastAPI</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">PostgreSQL</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Redis</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Docker</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-dashed border-[#232326] p-4 rounded-xl flex flex-col gap-4 transition-colors hover:bg-[#111111]/50 cursor-pointer group">
              <div className="w-full h-48 bg-white rounded-lg border border-[#232326] overflow-hidden relative group-hover:border-[#52525B] transition-colors flex items-center justify-center">
                <img
                  src="/rag_architecture.png"
                  alt="RAG Chatbot Architecture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-medium text-[15px] group-hover:underline underline-offset-4 decoration-[#52525B]">RAG Chatbot</h3>
                  <div className="flex gap-2 text-[#a1a1aa]">
                    <a href="https://github.com/itsVish16/RAG" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
                <p className="text-[#a1a1aa] text-xs leading-relaxed mb-3 line-clamp-2">A production-grade RAG pipeline featuring Qdrant vector search, Redis caching, and Opik LLM monitoring with Mistral.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">FastAPI</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Qdrant</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Redis</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">LangChain</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Mistral</span>
                  <span className="bg-[#161618] text-[#a1a1aa] text-[10px] px-2 py-0.5 rounded-sm">Opik</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(activeTab === "All" || activeTab === "Blogs") && (
        <div className="mb-8">
          {/* Blogs Section */}
          <SectionHeader title="Blogs" />
          <div className="flex flex-col gap-4 mt-2">
            <Link href="/blogs/how-i-built-my-portfolio" className="border border-dashed border-[#232326] p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:bg-[#111111]/50 cursor-pointer group">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-medium text-[15px] group-hover:underline underline-offset-4 decoration-[#52525B]">How to to fine tune Open Source Models on AMD GPUs</h3>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed">A deep dive into fine tuning of open source model on AMD Mi300x GPU.</p>
                </div>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-[#a1a1aa] flex flex-col gap-1 sm:gap-0.5 shrink-0">
                <p>12 Mar 2026</p>
                <p>5 min read</p>
              </div>
            </Link>
            <Link href="/blogs/getting-started-with-ai-ml" className="border border-dashed border-[#232326] p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:bg-[#111111]/50 cursor-pointer group">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-medium text-[15px] group-hover:underline underline-offset-4 decoration-[#52525B]">Getting Started with AI/ML</h3>
                  <p className="text-[#a1a1aa] text-xs leading-relaxed">A beginner&apos;s guide to building your first neural network from scratch.</p>
                </div>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-[#a1a1aa] flex flex-col gap-1 sm:gap-0.5 shrink-0">
                <p>05 Feb 2026</p>
                <p>8 min read</p>
              </div>
            </Link>
          </div>
        </div>
      )}

      <div className="w-full border-t border-dashed border-[#232326] pt-10 mt-4">
        <div className="flex justify-center">
          <p className="bg-gradient-to-b from-[#cbd5e1] via-[#94a3b8] to-[#475569] bg-clip-text text-center text-[4.4rem] font-black uppercase leading-none tracking-[0.16em] text-transparent sm:text-[6rem]">
            Vishal
          </p>
        </div>
      </div>

      <ProjectModal isOpen={projectModalOpen} onClose={() => setProjectModalOpen(false)} />
    </main>
  );
}
