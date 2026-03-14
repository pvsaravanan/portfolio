import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Phone", href: "tel:+918946050371" },
  { label: "GitHub", href: "https://github.com/pvsaravanan/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saravananpv2005/" },
  { label: "Twitter / X", href: "https://x.com/saravananpv3010" },
  { label: "Instagram", href: "https://www.instagram.com/saravanan30102005/" },
  { label: "Discord", href: "https://discord.com/channels/saravananpv" },
  { label: "Email", href: "mailto:saravananpv30102005@gmail.com" },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const linkStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const linkItem = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-7"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95]">
            Let's build
            <br />
            <span className="text-gradient">something great.</span>
          </h2>
          <div className="w-56 h-56 md:w-80 md:h-80 mt-10 opacity-90">
            <img 
              src="/images/contact_illus.png" 
              alt="Contact Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={linkStagger}
          className="md:col-span-5 flex flex-col justify-end"
        >
          <div className="space-y-0">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={linkItem}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex items-center justify-between py-4 border-b border-border hover:border-primary/30 transition-colors"
              >
                <span className="font-display text-sm tracking-wide">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <span className="font-display text-xs text-muted-foreground tracking-wider">
          © 2026 - Designed & built with conviction.
        </span>
        <span className="font-display text-xs text-muted-foreground tracking-[0.2em] uppercase">
          Ship fast. Ship often.
        </span>
      </motion.div>
    </section>
  );
};

export default ContactSection;
