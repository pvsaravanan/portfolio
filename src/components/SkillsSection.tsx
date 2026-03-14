import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Python / C / Java" },
      { name: "React / Node.js" },
      { name: "JavaScript / FastAPI" },
      { name: "LangChain / Vue.js" },
    ],
  },
  {
    category: "Data Science & AI",
    skills: [
      { name: "PyTorch / scikit-learn" },
      { name: "Pandas / NumPy" },
      { name: "ARIMA / XGBoost" },
      { name: "Matplotlib / Plotly" },
    ],
  },
  {
    category: "RPA & Specialized Tools",
    skills: [
      { name: "UiPath / Blue Prism" },
      { name: "Git / Docker" },
      { name: "Firebase / Supabase" },
      { name: "Figma / Canva" },
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const SkillRow = ({ name }: { name: string }) => {
  return (
    <motion.div
      variants={rowItem}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-1"
    >
      <span className="font-display text-sm text-foreground tracking-wide">
        {name}
      </span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Skills
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Tools of the trade.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            transition={{ delay: gi * 0.1 }}
          >
            <motion.p
              variants={rowItem}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
            >
              {group.category}
            </motion.p>

            <div className="space-y-4">
              {group.skills.map((skill) => (
                <SkillRow key={skill.name} name={skill.name} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
