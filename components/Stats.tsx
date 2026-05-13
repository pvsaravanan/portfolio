'use client';

import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function Stats() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedTheme, setSelectedTheme] = useState('orange');
  const [mounted, setMounted] = useState(false);
  const years = [2026, 2025, 2024];

  const themes = {
    orange: {
      label: 'Portfolio',
      colors: ['#ebedf0', '#d88060', '#c56442', '#a04d32', '#1a1a1a'],
      preview: '#c56442'
    },
    green: {
      label: 'GitHub',
      colors: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
      preview: '#40c463'
    },
    blue: {
      label: 'Electric',
      colors: ['#ebedf0', '#93c5fd', '#60a5fa', '#3b82f6', '#1d4ed8'],
      preview: '#3b82f6'
    },
    purple: {
      label: 'Royal',
      colors: ['#ebedf0', '#d8b4fe', '#a855f7', '#9333ea', '#6b21a8'],
      preview: '#a855f7'
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const githubTheme = {
    light: themes[selectedTheme as keyof typeof themes].colors,
    dark: themes[selectedTheme as keyof typeof themes].colors,
  };

  return (
    <section id="stats" className="border-b border-[#0B1220] bg-[var(--paper-2)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="px-2 py-1 text-[9px] tracking-widest border border-[#0B1220] text-[#374151]">
             07 · ACTIVITY
          </span>
          <h2 className="text-2xl font-semibold tracking-tight uppercase">
            Coding Activity
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Interactive GitHub Calendar */}
          <div className="border-2 border-[#0B1220] bg-[var(--paper)] p-8 shadow-[var(--sh-2)] relative group hover:shadow-[var(--sh-hover)] transition-all duration-150">
            <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
              <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4ADE80]" />
                    GitHub Contribution Graph
                  </h3>
                  <div className="flex gap-2 mt-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-3 py-1 text-[10px] font-bold border transition-all duration-150 relative ${
                          selectedYear === year
                            ? 'bg-[#0B1220] text-white border-[#0B1220]'
                            : 'bg-transparent text-[var(--ink-4)] border-[var(--rule)] hover:border-[#0B1220] hover:text-[#0B1220]'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--ink-4)]">Theme Style</span>
                  <div className="flex gap-3 h-[26px] items-center">
                    {Object.entries(themes).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedTheme(key)}
                        title={theme.label}
                        className={`w-5 h-5 rounded-full border-2 transition-all duration-150 flex items-center justify-center ${
                          selectedTheme === key 
                            ? 'border-[#0B1220] scale-110 shadow-sm' 
                            : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: theme.preview }}
                      >
                        {selectedTheme === key && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 self-start md:self-center">
                <span className="text-[9px] text-[var(--ink-4)] uppercase tracking-[0.2em]">@pvsaravanan</span>
                <a href="https://github.com/pvsaravanan" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold underline decoration-1 underline-offset-4">VIEW PROFILE →</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--ink-4)]">{selectedYear} Contributions</span>
                  <div className="h-[1px] flex-grow bg-[var(--rule)] opacity-50" />
                </div>
                
                <div className="relative min-h-[180px]">
                  {mounted ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedYear}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex justify-center overflow-x-auto pb-4 custom-scrollbar"
                      >
                        <div className="min-w-[800px] md:min-w-full flex justify-center py-4 bg-white/30 border border-[var(--rule)] rounded-sm px-4">
                          <GitHubCalendar 
                            username="pvsaravanan"
                            year={selectedYear}
                            theme={githubTheme}
                            fontSize={12}
                            blockSize={12}
                            blockMargin={4}
                            renderBlock={(block, activity) => (
                              React.cloneElement(block as React.ReactElement, {
                                'data-tooltip-id': 'gh-tooltip',
                                'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
                              })
                            )}
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className="flex justify-center py-12">
                      <div className="w-8 h-8 border-2 border-[var(--rule)] border-t-[#0B1220] rounded-full animate-spin" />
                    </div>
                  )}
                  <Tooltip 
                    id="gh-tooltip" 
                    style={{ 
                      fontSize: '10px', 
                      backgroundColor: '#0B1220',
                      color: '#fff',
                      borderRadius: '2px',
                      padding: '4px 8px',
                      zIndex: 100
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* LeetCode Stats */}
          <div className="border-2 border-[#0B1220] bg-[var(--paper)] p-8 shadow-[var(--sh-2)] relative group hover:shadow-[var(--sh-hover)] transition-all duration-150">
            <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--ink)] opacity-20" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FCD34D]" />
                LeetCode Performance
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-[9px] text-[var(--ink-4)] uppercase tracking-[0.2em]">@saravananpv</span>
                <a href="https://leetcode.com/u/saravananpv/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold underline decoration-1 underline-offset-4">VIEW PROFILE →</a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://leetcard.jacoblin.cool/saravananpv?theme=dark&font=Baloo_2&ext=heatmap&width=400&height=300" 
                alt="LeetCode Stats" 
                className="max-w-md w-full h-auto transition-all duration-300 border border-[#0B1220] bg-[#0D1117] p-2 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

