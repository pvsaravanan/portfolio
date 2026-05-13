'use client';

import React from 'react';

const projects = [
  {
    id: 'W-04',
    tag: 'PROJECT',
    tagColor: 'bg-[#4ADE80]',
    title: 'WHISPERCRAWLER',
    desc: 'Adaptive web scraping framework — fast, stealthy, and self-healing selectors.',
    date: 'APRIL 15, 2026',
    action: 'VIEW PROJECT',
    author: 'SARAVANAN P V',
    link: 'https://github.com/pvsaravanan/whispercrawler',
  },
  {
    id: 'W-03',
    tag: 'PROJECT',
    tagColor: 'bg-[#4ADE80]',
    title: 'PARALLAX.AI',
    desc: 'Unified open-source AI model platform with chat modes, OpenAI-compatible API, and ELO research leaderboard.',
    date: 'APRIL 18, 2026',
    action: 'VIEW PROJECT',
    author: 'SARAVANAN P V',
    link: 'https://github.com/pvsaravanan/parallax.ai',
  },
  {
    id: 'W-02',
    tag: 'PROJECT',
    tagColor: 'bg-[#4ADE80]',
    title: 'CLARA.AI',
    desc: 'Privacy-first AI answer engine running on your hardware with search + documents + local/cloud LLM support.',
    date: 'MARCH 01, 2026',
    action: 'VIEW PROJECT',
    author: 'SARAVANAN P V',
    link: 'https://github.com/pvsaravanan/Clara.ai',
  },
  {
    id: 'W-01',
    tag: 'PROJECT',
    tagColor: 'bg-[#4ADE80]',
    title: 'CRADLESENSE',
    desc: 'IoT-based neonatal care monitoring system for NICU with real-time vitals, dashboards, and alerting.',
    date: 'JANUARY 10, 2026',
    action: 'VIEW PROJECT',
    author: 'SARAVANAN P V',
    link: 'https://github.com/pvsaravanan/CradleSense',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[#0B1220]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-2 py-1 text-[9px] tracking-widest border border-[#0B1220] text-[#374151]">
               05 · WORKS
            </span>
            <h2 className="text-2xl font-semibold tracking-tight uppercase">
              PROJECTS & CONTRIBUTIONS
            </h2>
          </div>
          <p className="hidden sm:block text-[10px] text-[#374151] tracking-wider">
            {projects.length} RECENT · PROJECTS, ARTICLES, RESEARCH, TALKS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-[#0B1220] bg-[#F6F1E7] hover:bg-[#F3EDE1] transition-colors cursor-pointer flex flex-col"
              role={project.link ? 'link' : undefined}
              tabIndex={project.link ? 0 : undefined}
              onClick={() => {
                if (!project.link) return;
                window.open(project.link, '_blank', 'noopener,noreferrer');
              }}
              onKeyDown={(e) => {
                if (!project.link) return;
                if (e.key !== 'Enter' && e.key !== ' ') return;
                e.preventDefault();
                window.open(project.link, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#0B1220] bg-[#E7E1D2]">
                <span className="text-[10px] tracking-widest text-[#0B1220] font-medium uppercase">
                  {project.tag}
                </span>
                <span className="text-[10px] tracking-widest text-[#0B1220] uppercase">
                  {project.id}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-[11px] tracking-widest text-[#E07A5F] font-medium uppercase mb-3">
                  {project.date}
                </p>
                <h3 className="text-[18px] sm:text-[20px] font-extrabold leading-[1.05] tracking-tight uppercase text-[#0B1220] mb-4">
                  {project.title}
                </h3>
                <p className="text-[12px] text-[#374151] leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <div className="border-t border-dashed border-[#cbd5e1] pt-4 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-[#0B1220] font-semibold uppercase">
                    {project.action} <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                  </span>
                  <span className="w-2 h-2 bg-[#7C9BB3]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
