import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDividerProps {
  text?: string;
  direction?: "left" | "right";
  variant?: "text" | "shapes" | "line";
}

const ParallaxDivider = ({
  text = "✦",
  direction = "left",
  variant = "text",
}: ParallaxDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["10%", "-10%"] : ["-10%", "10%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (variant === "line") {
    const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    return (
      <div ref={ref} className="py-12 md:py-16 overflow-hidden">
        <motion.div
          style={{ scaleX, opacity }}
          className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-center"
        />
      </div>
    );
  }

  if (variant === "shapes") {
    const y1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [45, 0]);

    return (
      <div ref={ref} className="py-16 md:py-24 overflow-hidden relative">
        <motion.div style={{ opacity }} className="flex items-center justify-center gap-16 md:gap-32">
          <motion.div
            style={{ y: y1, rotate: rotate1 }}
            className="w-3 h-3 border border-primary/30 rounded-sm"
          />
          <motion.div
            style={{ y: y2, rotate: rotate2 }}
            className="w-2 h-2 bg-primary/20 rounded-full"
          />
          <motion.div
            style={{ y: y1 }}
            className="w-12 h-px bg-primary/30"
          />
          <motion.div
            style={{ y: y2, rotate: rotate1 }}
            className="w-3 h-3 border border-primary/20 rotate-45"
          />
          <motion.div
            style={{ y: y1, rotate: rotate2 }}
            className="w-2 h-2 bg-primary/15 rounded-full"
          />
        </motion.div>
      </div>
    );
  }

  // Text variant — marquee-like scrolling text
  const repeatedText = Array(12).fill(text).join("  ·  ");

  return (
    <div ref={ref} className="py-10 md:py-14 overflow-hidden">
      <motion.div
        style={{ x, opacity }}
        className="font-display text-6xl md:text-8xl font-bold text-muted-foreground/[0.06] whitespace-nowrap select-none tracking-tight"
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

export default ParallaxDivider;
