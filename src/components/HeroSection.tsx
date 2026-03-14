import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Parallax background element */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: textOpacity }}>
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-sm text-xs font-display uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="flex-1">
            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight max-w-5xl"
            >
              I'm <span className="text-gradient">Saravanan P V.</span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-80">
                Crafting the future of AI.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl font-display leading-relaxed h-[1.6em]"
            >
              AI/ML Engineer · Full-stack Developer · SDE · RPA Developer
            </motion.p>
          </div>

          <motion.div 
            variants={item}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0 relative group"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full"
            >
              <img 
                src="/images/hero_illus.png" 
                alt="Hero Illustration" 
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={item} className="mt-12 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-medium text-sm tracking-wide hover:opacity-90 transition-opacity rounded-sm"
          >
            View Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display font-medium text-sm tracking-wide hover:border-primary/50 transition-colors rounded-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute top-8 right-8 md:right-16 lg:right-24 font-display text-xs text-muted-foreground tracking-[0.3em] uppercase hidden md:block">
        Portfolio '25
      </div>
    </motion.section>
  );
};

export default HeroSection;
