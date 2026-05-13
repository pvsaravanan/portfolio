'use client';

import React from 'react';
import Button from './Button';

const blogPosts = [
  {
    title: 'Agentic RAG: The Upgrade Your AI Pipeline Desperately Needs',
    date: 'May 09, 2026',
    category: 'ARTICLE',
    excerpt: "From one-shot retrieval to self-correcting, multi-hop reasoning — a developer's breakdown in 3 levels.",
    id: 'BLOG-02',
    color: 'var(--c-bounties)',
    link: 'https://medium.com/@saravananpv30102005/agentic-rag-the-upgrade-your-ai-pipeline-desperately-needs-92d224f39a40',
  },
  {
    title: 'RAG VS HYDE — CHOOSING THE RIGHT RETRIEVAL STRATEGY',
    date: 'Feb 01, 2026',
    category: 'ARTICLE',
    excerpt: 'A practical comparison of RAG and HyDE to help you pick the right retrieval approach for your LLM application.',
    id: 'BLOG-01',
    color: 'var(--c-careers)',
    link: 'https://medium.com/@saravananpv30102005/rag-vs-hyde-choosing-the-right-retrieval-strategy-for-your-llm-application-01216f21c519',
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="border-b border-[var(--ink)] bg-[var(--paper)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 text-[9px] tracking-widest border border-[var(--ink)] text-[var(--ink-3)]">
               06 · BLOGS
            </span>
            <h2 className="text-2xl font-semibold tracking-tight uppercase">
              Latest Insights
            </h2>
          </div>
          <Button href="#" variant="outline" className="hidden sm:inline-flex">View All Posts</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="flex flex-col border border-[var(--ink)] bg-[var(--paper)] group cursor-pointer hover:bg-[var(--paper-2)] transition-colors duration-150"
              role={post.link ? 'link' : undefined}
              tabIndex={post.link ? 0 : undefined}
              onClick={() => {
                if (!post.link) return;
                window.open(post.link, '_blank', 'noopener,noreferrer');
              }}
              onKeyDown={(e) => {
                if (!post.link) return;
                if (e.key !== 'Enter' && e.key !== ' ') return;
                e.preventDefault();
                window.open(post.link, '_blank', 'noopener,noreferrer');
              }}
            >
              {/* Category & ID Header */}
              <div className="flex justify-between items-center p-3 border-b border-[var(--ink)] bg-[var(--paper-3)]">
                <span className="text-[9px] font-bold tracking-[0.15em] text-[var(--ink-2)]">
                  {post.category}
                </span>
                <span className="text-[9px] font-bold text-[var(--ink-4)]">
                  {post.id}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] text-[var(--accent)] font-bold mb-2">
                  {post.date}
                </span>
                <h3 className="text-lg font-bold leading-snug uppercase tracking-tight mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[11px] text-[var(--ink-3)] leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-dashed border-[var(--rule)] flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-[var(--ink-2)]">
                    Read Article →
                  </span>
                  <div className="w-2 h-2" style={{ backgroundColor: post.color }} />
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <Button href="#" variant="outline" className="w-full">View All Posts</Button>
        </div>
      </div>
    </section>
  );
}
