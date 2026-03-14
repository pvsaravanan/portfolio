import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Chat with Doc",
    description:
      "AI Document Assistant built with Streamlit and LangChain. Implemented PDF parsing and semantic search using vector embeddings and local LLM (DeepSeek 1.5B).",
    tags: ["Streamlit", "LangChain", "Ollama", "DeepSeek"],
    status: "Active",
    liveHref: "https://github.com/pvsaravanan/",
    githubHref: "https://github.com/pvsaravanan/",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Voice AI Assistant",
    description:
      "A voice-controlled AI assistant with a GUI, featuring Gemini API integration for speech-to-text and RAG-based document search powered by txtai.",
    tags: ["Python", "Gemini API", "txtai", "Raspberry Pi"],
    status: "Active",
    liveHref: "https://github.com/pvsaravanan/RAG-with-DeepSeek.git",
    githubHref: "https://github.com/pvsaravanan/RAG-with-DeepSeek.git",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&q=80&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "CradleSense - IoT Based Neonatal Care Unit",
    description:
    "CradleSense monitors vital parameters of newborn babies using sensors embedded in a smart cradle and displays the data in real time through dedicated dashboards for clinicians and parents.",
    tags: ["Arduino", "Sensors", "Reinforcement Learning", "IoT",],
    status: "Ongoing",
    liveHref: "https://github.com/pvsaravanan/CradleSense.git",
    githubHref: "https://github.com/pvsaravanan/CradleSense.git",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80&auto=format&fit=crop",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const rowReveal = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const ProjectRow = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={rowReveal}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group border-t border-border py-8 md:py-10 hover:bg-card/50 transition-colors -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-24 lg:px-24 relative"
    >
      <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-center">
        {/* Number */}
        <div className="md:col-span-1">
          <span className="font-display text-sm text-muted-foreground group-hover:text-primary transition-colors">
            {project.number}
          </span>
        </div>

        {/* Thumbnail */}
        <div className="md:col-span-2 hidden md:block">
          <div className="overflow-hidden rounded-sm aspect-video border border-border bg-muted shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title + status */}
        <div className="md:col-span-3">
          <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
          </h3>
          <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-display uppercase tracking-[0.2em] border border-primary/30 text-primary rounded-sm">
            {project.status}
          </span>
        </div>

        {/* Description */}
        <div className="md:col-span-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags + links */}
        <div className="md:col-span-2 flex flex-col gap-3 md:items-end">
          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground font-display">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {project.githubHref && (
              <a
                href={project.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1 text-[10px] font-display uppercase tracking-[0.15em] border border-border hover:border-primary/50 rounded-sm transition-colors text-muted-foreground hover:text-foreground shadow-lg"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Projects
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Selected work.
        </h2>
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectRow key={project.number} project={project} index={index} />
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ProjectsSection;
