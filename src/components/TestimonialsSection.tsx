import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "One of the most talented engineers I've worked with. Ships at an incredible pace without compromising quality.",
    name: "Sarah Chen",
    role: "CTO at TechVentures",
    avatar: "SC",
  },
  {
    quote:
      "Transformed our product vision into reality in record time. Their technical depth and design sensibility is rare.",
    name: "Marcus Rivera",
    role: "Founder at LaunchPad",
    avatar: "MR",
  },
  {
    quote:
      "A true full-stack talent — from database architecture to pixel-perfect UI. Essential to our YC batch success.",
    name: "Aisha Patel",
    role: "CEO at DataStack",
    avatar: "AP",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Testimonials
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          What people say.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardReveal}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative border border-border rounded-sm p-8 bg-card/50 hover:border-primary/30 transition-colors group"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display text-xs font-semibold text-primary">
                {t.avatar}
              </div>
              <div>
                <p className="font-display text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
