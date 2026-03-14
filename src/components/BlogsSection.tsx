import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "RAG vs HyDE: Choosing the Right Retrieval Strategy for Your LLM Application",
    excerpt: "If you're building production-ready LLM applications, you've likely encountered the challenge of grounding your models with accurate, contextual information. Two popular approaches have emerged as frontrunners: Retrieval-Augmented Generation (RAG) and Hypothetical Document Embedding (HyDE).",
    date: "Feb 1, 2026",
    readTime: "3 min read",
    link: "https://medium.com/@saravananpv30102005/rag-vs-hyde-choosing-the-right-retrieval-strategy-for-your-llm-application-01216f21c519",
    image: "/images/blog_rag_hyde.png",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const BlogCard = ({ blog, index }: { blog: typeof blogs[0]; index: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative border border-border rounded-sm bg-card/50 overflow-hidden shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
      onClick={() => window.open(blog.link, '_blank')}
    >
      <div>
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 fill-foreground"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.54 12a6.8 6.8 0 11-6.77-6.82A6.82 6.82 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z" />
            </svg>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-3">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          
          <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
            {blog.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
            {blog.excerpt}
          </p>
          
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-primary font-medium group-hover:gap-3 transition-all">
            Read on Medium <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-primary to-transparent pointer-events-none" />
    </motion.div>
  );
};

const BlogsSection = () => {
  return (
    <section id="blogs" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-muted/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Writing
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Publications.
          </h2>
        </div>
        
        <a 
          href="https://medium.com/@saravananpv30102005" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border-b border-border pb-1"
        >
          Follow on Medium <ArrowUpRight className="w-3 h-3" />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <BlogCard key={blog.title} blog={blog} index={i} />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
