import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "Mar 2025",
    title: "Why I Stopped Chasing Product-Market Fit",
    description: "The counterintuitive lesson I learned after 3 failed startups: stop searching and start listening.",
    readTime: "8 min read",
    tag: "Startups",
    href: "#",
  },
  {
    date: "Feb 2025",
    title: "Building a Payment Engine at 10K TPS",
    description: "A deep dive into the architecture decisions behind FinFlow's transaction pipeline — and the mistakes we made along the way.",
    readTime: "12 min read",
    tag: "Engineering",
    href: "#",
  },
  {
    date: "Jan 2025",
    title: "The Case for Boring Technology",
    description: "How choosing PostgreSQL over the latest distributed database saved us 6 months of engineering time.",
    readTime: "6 min read",
    tag: "Engineering",
    href: "#",
  },
  {
    date: "Dec 2024",
    title: "Open Source as a Growth Strategy",
    description: "How DevKit grew from a side project to 15K stars by treating contributors like co-founders.",
    readTime: "10 min read",
    tag: "Open Source",
    href: "#",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const BlogSection = () => {
  return (
    <section id="writing" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-card/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16 flex items-end justify-between"
      >
        <div>
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Writing
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Thoughts & lessons.
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-1 font-display text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <motion.a
            key={post.title}
            href={post.href}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariant}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="group block p-6 md:p-8 border border-border rounded-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-display uppercase tracking-[0.2em] text-primary px-2 py-0.5 border border-primary/30 rounded-sm">
                {post.tag}
              </span>
              <span className="text-xs text-muted-foreground font-body">
                {post.date}
              </span>
              <span className="text-xs text-muted-foreground font-body ml-auto">
                {post.readTime}
              </span>
            </div>
            <h3 className="font-display text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight flex items-start gap-2">
              {post.title}
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
