import { motion } from "framer-motion";
import { useState } from "react";

const GithubCalendar = () => {
  const [activeYear, setActiveYear] = useState(2026);
  const years = [2026, 2025, 2024];

  // Map years to different GitHub-style color schemes for visual feedback
  const getYearColor = (year: number) => {
    switch(year) {
      case 2025: return "409ba5"; // Blueish
      case 2024: return "7950f2"; // Purpleish
      default: return ""; // Default Green
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-end mb-2">
        <h4 className="text-sm font-medium text-foreground/80">
          {activeYear === 2026 ? "139 contributions in the last year" : `Contributions in ${activeYear}`}
        </h4>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-pointer">
          Contribution settings <span>▾</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar Grid Container */}
        <div className="flex-grow p-2 border border-border rounded-lg bg-black/20 backdrop-blur-sm overflow-hidden">
          <div className="relative">
            <div className="relative w-full overflow-hidden">
              <img 
                key={activeYear}
                src={`https://ghchart.rshah.org/${getYearColor(activeYear)}/pvsaravanan`} 
                alt={`GitHub Activity ${activeYear}`} 
                className="w-full h-auto min-h-[140px] object-contain brightness-110 contrast-125 transition-all duration-700 hover:scale-[1.01] animate-in fade-in duration-500"
              />
            </div>

            {/* Legend & Footer */}
            <div className="flex justify-between items-center mt-4">
              <button className="text-[10px] text-muted-foreground hover:text-primary transition-colors">
                Learn how we count contributions
              </button>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#161b22]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#0e4429]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#006d32]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#26a641]" />
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#39d353]" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Year Selector (Desktop Only) */}
        <div className="hidden lg:flex flex-col gap-2 min-w-[80px]">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-2 text-xs rounded-md font-medium transition-all ${
                activeYear === year
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        
        {/* Year Selector (Mobile Only) */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-2 text-xs rounded-md font-medium whitespace-nowrap transition-all ${
                activeYear === year
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubCalendar;
