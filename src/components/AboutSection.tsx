import { motion } from "framer-motion";

const stats = [
  { label: "CGPA", value: "9.04" },
  { label: "Major Projects", value: "10+" },
  { label: "Certifications", value: "6" },
];

const techStack = [
  "Python", "React", "Node.js", "LangChain",
  "PyTorch", "FastAPI", "TensorFlow", "Java",
  "C", "JavaScript", "Git", "Docker",
  "MongoDB", "Figma",
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const slideRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-5"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            About
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Building the next generation of intelligent systems.
          </h2>
        </motion.div>

        <div className="md:col-span-7">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8"
          >
            I'm an AI & Data Science student at Saveetha Engineering College, dedicated to bridging
            the gap between hardware and high-level AI. From RAG-powered assistants to IoT
            healthcare solutions, I build systems that are intelligent, secure, and seamless.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg mb-12"
          >
            I believe the future of technology thrives at the intersection of data-driven
            intelligence and high-fidelity design. My goal is to create impactful products
            that solve complex real-world problems.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-3 gap-6 mb-12 py-8 border-t border-b border-border"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={reveal} transition={{ duration: 0.5 }}>
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={tagItem}
                transition={{ duration: 0.3 }}
                className="px-3 py-1.5 text-xs font-display tracking-wider uppercase border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
