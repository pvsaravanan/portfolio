import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const education = [
  {
    year: "2023 — 2027",
    title: "B.Tech Artificial Intelligence and Data Science",
    institution: "Saveetha Engineering College",
    description: "CGPA: 9.04",
    image: "/images/saveetha.jpg",
    highlight: true,
  },
  {
    year: "2022 — 2023",
    title: "CBSE 12th Grade",
    institution: "NPSBSSS",
    description: "Percentage: 87%",
    image: "/images/npsbsss.jpg",
    highlight: false,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const itemReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="education" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Education
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          The journey so far.
        </h2>
      </motion.div>

      <div className="relative max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-[17.5px] md:left-[21.5px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-0">
          {education.map((item, i) => (
            <motion.div
              key={item.year + item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemReveal}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative pl-14 md:pl-16 pb-12 last:pb-0 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Dot */}
              <div
                className={`absolute left-3 md:left-4 top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                  item.highlight
                    ? "bg-primary border-primary shadow-[0_0_12px_hsl(24_100%_50%/0.4)]"
                    : "bg-background border-muted-foreground/30 group-hover:border-primary/50"
                }`}
              />

              <span className="font-display text-xs uppercase tracking-[0.2em] text-primary mb-2 block">
                {item.year}
              </span>
              <h3 className="font-display text-lg md:text-xl font-bold mb-1 transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="font-display text-sm font-medium mb-1 text-foreground/80">
                {item.institution}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-4">
                {item.description}
              </p>

              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: 10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="relative w-full max-w-sm aspect-video md:aspect-[3/1] rounded-lg overflow-hidden border border-border/50 shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.institution}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
