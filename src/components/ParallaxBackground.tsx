import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Grid Background Layers */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 bg-grid-small opacity-40 pointer-events-none" 
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-grid opacity-30 pointer-events-none" 
      />

      {/* Large gradient orbs */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full bg-primary/[0.05] blur-[120px]"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-1/2 -left-32 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[100px]"
      />

      {/* Grid dots - keep them as accents */}
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute top-[15%] right-[15%] grid grid-cols-4 gap-6"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20 shadow-[0_0_10px_rgba(255,120,0,0.5)]" />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;
