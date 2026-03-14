import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const sections = ["about", "education", "experience", "projects", "blogs", "skills", "contact"];

const NavBar = () => {
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a section is clicked
  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActive(id);
  };

  const navLinks = ["About", "Education", "Experience", "Projects", "Blogs", "Skills", "Contact"];

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[61] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="flex items-center gap-1">
          <a href="#" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">S</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className="relative font-display text-xs uppercase tracking-[0.2em] transition-colors"
                style={{ color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
              >
                {item}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileTap={{ scale: 0.85, rotate: 15 }}
              whileHover={{ scale: 1.1 }}
              className="relative p-2 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Sun className="w-3.5 h-3.5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0, rotate: 90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Moon className="w-3.5 h-3.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
          
          <a
            href="mailto:saravananpv30102005@gmail.com"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-display uppercase tracking-[0.15em] border border-border hover:border-primary/50 rounded-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            Say Hello
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden border border-border rounded-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[73px] left-0 right-0 z-[55] bg-background/95 backdrop-blur-xl border-b border-border md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((item, idx) => {
                const id = item.toLowerCase();
                const isActive = active === id;
                return (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item}
                    href={`#${id}`}
                    onClick={() => handleNavClick(id)}
                    className="font-display text-base uppercase tracking-[0.2em] transition-colors flex items-center justify-between"
                    style={{ color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
                  >
                    {item}
                    {isActive && <motion.div layoutId="mobile-indicator" className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </motion.a>
                );
              })}
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="mailto:saravananpv30102005@gmail.com"
                className="mt-4 px-6 py-4 text-center text-xs font-display uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-sm"
              >
                Say Hello
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
