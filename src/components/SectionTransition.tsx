import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type TransitionVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "reveal";

const variants: Record<TransitionVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  reveal: {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

interface SectionTransitionProps {
  children: ReactNode;
  variant?: TransitionVariant;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
}

const SectionTransition = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className = "",
  staggerChildren,
}: SectionTransitionProps) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren ?? 0.12,
        delayChildren: delay,
      },
    },
  };

  if (staggerChildren !== undefined) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Child item for staggered animations
export const StaggerItem = ({
  children,
  variant = "fade-up",
  duration = 0.6,
  className = "",
}: {
  children: ReactNode;
  variant?: TransitionVariant;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    variants={variants[variant]}
    transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default SectionTransition;
