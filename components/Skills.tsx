'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Artificial Intelligence',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'LangChain', 'RAG Pipelines', 'Vector Databases (FAISS / Pinecone)', 'Neural Networks'],
    color: '#E07A5F',
    id: 'SKILL-01'
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Supervised Learning', 'Unsupervised Learning', 'NLP', 'Computer Vision'],
    color: '#4ADE80',
    id: 'SKILL-02'
  },
  {
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Statistical Analysis', 'Data Visualization', 'Matplotlib / Seaborn', 'SQL', 'Postgres'],
    color: '#60A5FA',
    id: 'SKILL-03'
  },
  {
    title: 'Full-Stack',
    skills: ['React / Next.js', 'Node.js / Express', 'Firebase / Firestore', 'REST APIs', 'MongoDB / PostgreSQL', 'Authentication (JWT / OAuth)', 'File Processing (PDF.js, Mammoth.js)'],
    color: '#F472B6',
    id: 'SKILL-04'
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git & GitHub', 'Docker', 'CI/CD', 'AWS / GCP', 'Linux', 'Kubernetes'],
    color: '#FCD34D',
    id: 'SKILL-05'
  },
  {
    title: 'Cybersecurity & RPA',
    skills: ['Network Security', 'OWASP Basics', 'Ethical Hacking', 'Vulnerability Testing', 'UiPath', 'Blue Prism', 'Automation Workflows'],
    color: '#A78BFA',
    id: 'SKILL-06'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[#0B1220] bg-[var(--paper-2)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="px-2 py-1 text-[9px] tracking-widest border border-[#0B1220] text-[#374151]">
             03 · SKILLS
          </span>
          <h2 className="text-2xl font-semibold tracking-tight uppercase">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.id}
              className="border border-[#0B1220] bg-[var(--paper)] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-[var(--ink-4)]">{category.id}</span>
                <div className="w-2 h-2" style={{ backgroundColor: category.color }} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-[#0B1220] pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[10px] font-medium border border-[#0B1220] px-2 py-1 bg-white hover:bg-[var(--accent)] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
