import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Outer circle springs
  const springX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  // Velocity for stretching effect
  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);
  
  const velocity = useMotionValue(0);
  
  useEffect(() => {
    return velocityX.on("change", (v) => {
      const vY = velocityY.get();
      velocity.set(Math.sqrt(v * v + vY * vY));
    });
  }, [velocityX, velocityY, velocity]);

  const scaleX = useTransform(velocity, [0, 3000], [1, 1.5]);
  const scaleY = useTransform(velocity, [0, 3000], [1, 0.5]);
  const rotate = useTransform([velocityX, velocityY], ([vX, vY]) => {
    return (Math.atan2(vY as number, vX as number) * 180) / Math.PI;
  });

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, dotX, dotY, isVisible]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [handleMouseMove]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Outer ring with stretching effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scaleX,
          scaleY,
          rotate,
        }}
      >
        <motion.div
          className="rounded-full border border-foreground/40"
          animate={{
            width: isHovering ? 60 : 32,
            height: isHovering ? 60 : 32,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>

      {/* Trailing inner dot for more "fluid" feel */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{
          x: useSpring(dotX, { damping: 20, stiffness: 400 }),
          y: useSpring(dotY, { damping: 20, stiffness: 400 }),
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
